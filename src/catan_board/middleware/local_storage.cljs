(ns catan-board.middleware.local-storage
  (:require [re-frame.core :as re-frame]
            [cljs.reader :as reader]))

(defn save-to-local-storage!
  "Helper that serializes and saves the given data to localStorage under a key."
  [key data]
  (.setItem js/localStorage key (pr-str data)))

(defn assoc-to-local-storage-array!
  "Appends `entry` to a vector stored under `key` in localStorage.
   If the key does not exist or is not a vector, creates a new vector.
   Example:
     (append-to-local-storage-array! \"app-state\" {:id 1 :data \"foo\"})"
  [key entry]
  (let [existing (some-> (.getItem js/localStorage key)
                         (reader/read-string))
        current  (if (map? existing)
                   existing
                   (if (map? existing) existing {}))
        new-data (merge current entry)] ;; keeps only the last 20 edits
    (.setItem js/localStorage key (pr-str new-data))
    new-data))

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

(defn load-from-last-app-state-local-storage
  "Loads data from localStorage (if any) and optionally extracts a value at the given path.
   Example:
     (load-from-last-app-state-local-storage)                ;=> entire map
     (load-from-last-app-state-local-storage [:settings])    ;=> just (:settings saved-db)"
  ([]
   (some-> (.getItem js/localStorage "app-db")
           (reader/read-string)
           first))
  ([path]
   (some-> (.getItem js/localStorage "app-db")
           (reader/read-string)
           first
           (get-in path))))

(defn load-from-local-storage
  "Loads data from localStorage (if any) and optionally extracts a value at the given path.
   Example:
     (load-from-local-storage \"app-state\")                ;=> entire map
     (load-from-local-storage \"app-state\" [:settings])    ;=> just (:settings saved-db)"
  ([key]
   (some-> (.getItem js/localStorage key)
           (reader/read-string)))
  ([key path]
   (some-> (.getItem js/localStorage key)
           (reader/read-string)
           (get-in path))))

(defn persist-db-after
  "Returns an interceptor that saves the whole db or a path of it to localStorage
   after the event handler runs."
  ([key] (persist-db-after key identity))
  ([key path-fn]
   (re-frame/->interceptor
    :id     :persist-db
    :after  (fn [context]
              (let [new-db (get-in context [:effects :db])
                    data   (path-fn new-db)]
                (append-to-local-storage-array! key data))
              context))))


(comment
  (assoc-to-local-storage-array!
   :custom-scenarios
   {:test-game {:id           :test-game,
                :name         "test Game (4-player)",
                :player-count 4,
                :grid-pattern "3-4-5-4-3",
                :face-up-distribution
                {:resources     {:water 0, :desert 1, :gold 0, :wheat 4, :brick 3, :ore 3, :sheep 4, :wood 4},
                 :number-tokens {4 2, 6 2, 3 2, 12 1, 2 1, 11 2, 9 2, 5 2, 10 2, 8 2},
                 :assignment    :random},
                :harbors
                [{:land-hex [-2 2], :direction 5, :type :generic}
                 {:land-hex [-1 2], :direction 0, :type :wood}
                 {:land-hex [1 1], :direction 0, :type :brick}
                 {:land-hex [2 0], :direction 1, :type :generic}
                 {:land-hex [2 -1], :direction 2, :type :generic}
                 {:land-hex [1 -2], :direction 2, :type :sheep}
                 {:land-hex [0 -2], :direction 3, :type :generic}
                 {:land-hex [-1 -1], :direction 4, :type :ore}
                 {:land-hex [-2 1], :direction 4, :type :wheat}]}})
  )
