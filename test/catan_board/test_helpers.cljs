(ns catan-board.test-helpers
  "Test helpers and utilities for ClojureScript tests in Node.js environment")

;; Mock window and localStorage for Node.js test environment
(when-not (exists? js/window)
  (set! js/window #js {}))

(when-not (.-localStorage js/window)
  (let [storage (atom {})]
    (set! (.-localStorage js/window)
          #js {:getItem (fn [k] (get @storage k))
               :setItem (fn [k v] (swap! storage assoc k v))
               :removeItem (fn [k] (swap! storage dissoc k))
               :clear (fn [] (reset! storage {}))})))

;; Alias for convenience
(def localStorage (.-localStorage js/window))

(defn clear-local-storage!
  "Clear all localStorage data"
  []
  (.clear localStorage))
