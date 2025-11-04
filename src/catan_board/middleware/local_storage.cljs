(ns catan-board.middleware.local-storage
  (:require [re-frame.core :as re-frame]
            [cljs.reader :as reader]))

(defn save-to-local-storage!
  "Helper that serializes and saves the given data to localStorage under a key."
  [key data]
  (.setItem js/localStorage key (pr-str data)))

(defn append-to-local-storage-array!
  "Appends `entry` to a vector stored under `key` in localStorage.
   If the key does not exist or is not a vector, creates a new vector.
   Example:
     (append-to-local-storage-array! \"app-state\" {:id 1 :data \"foo\"})"
  [key entry]
  (let [existing (some-> (.getItem js/localStorage key)
                         (reader/read-string))
        current  (if (vector? existing)
                   existing
                   (if (seq existing) existing '()))
        new-data (conj (take 20 current) entry)] ;; keeps only the last 20 edits
    (.setItem js/localStorage key (pr-str new-data))
    new-data))

(defn pop-first-from-local-storage-array!
  "Removes and returns the first element of the vector stored under `key` in localStorage.
   If the key doesn't exist or isn't a vector, returns nil and does nothing.
   Returns a map:
     {:removed <the element removed>
      :remaining <the updated vector>}"
  [key]
  (let [existing (some-> (.getItem js/localStorage key)
                         (reader/read-string))]
    (if (seq existing)
      (let [removed   (first existing)
            remaining (rest existing)]
        (.setItem js/localStorage key (pr-str remaining))
        {:removed   removed
         :remaining remaining})
      ;; nothing to pop
      {:removed   nil
       :remaining (if (seq existing) existing '())})))

(defn load-from-local-storage
  "Loads data from localStorage (if any) and optionally extracts a value at the given path.
   Example:
     (load-from-local-storage \"app-state\")                ;=> entire map
     (load-from-local-storage \"app-state\" [:settings])    ;=> just (:settings saved-db)"
  ([key]
   (some-> (.getItem js/localStorage key)
           (reader/read-string)
           first))
  ([key path]
   (some-> (.getItem js/localStorage key)
           (reader/read-string)
           first
           (get-in path))))

(defn persist-db
  "Returns an interceptor that saves the whole db or a path of it to localStorage
   after the event handler runs."
  ([key] (persist-db key identity))
  ([key path-fn]
   (re-frame/->interceptor
    :id     :persist-db
    :after  (fn [context]
              (let [new-db (get-in context [:effects :db])
                    data   (path-fn new-db)]
                (append-to-local-storage-array! key data))
              context))))
