(ns catan-board.test-setup
  "Global test setup that runs before any tests.
   Sets up mocks for Node.js environment.")

;; Set up global window mock for Node.js
(when-not (exists? js/window)
  (set! js/window #js {}))

;; Set up localStorage mock for Node.js
(when-not (.-localStorage js/window)
  (let [storage (atom {})]
    (set! (.-localStorage js/window)
          #js {:getItem (fn [k] (get @storage k))
               :setItem (fn [k v] (swap! storage assoc k v))
               :removeItem (fn [k] (swap! storage dissoc k))
               :clear (fn [] (reset! storage {}))})))

;; Also set global localStorage reference
(set! js/localStorage (.-localStorage js/window))
