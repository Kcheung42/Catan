goog.provide('catan_board.middleware.local_storage');
/**
 * Helper that serializes and saves the given data to localStorage under a key.
 */
catan_board.middleware.local_storage.save_to_local_storage_BANG_ = (function catan_board$middleware$local_storage$save_to_local_storage_BANG_(key,data){
return localStorage.setItem(key,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0)));
});
/**
 * Appends `entry` to a vector stored under `key` in localStorage.
 * If the key does not exist or is not a vector, creates a new vector.
 * Example:
 *   (append-to-local-storage-array! "app-state" {:id 1 :data "foo"})
 */
catan_board.middleware.local_storage.append_to_local_storage_array_BANG_ = (function catan_board$middleware$local_storage$append_to_local_storage_array_BANG_(key,entry){
var existing = (function (){var G__25696 = localStorage.getItem(key);
if((G__25696 == null)){
return null;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__25696);
}
})();
var current = ((cljs.core.vector_QMARK_(existing))?existing:((cljs.core.seq(existing))?existing:cljs.core.List.EMPTY));
var new_data = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((20),current),entry);
localStorage.setItem(key,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_data], 0)));

return new_data;
});
/**
 * Removes and returns the first element of the vector stored under `key` in localStorage.
 * If the key doesn't exist or isn't a vector, returns nil and does nothing.
 * Returns a map:
 *   {:removed <the element removed>
 *    :remaining <the updated vector>}
 */
catan_board.middleware.local_storage.pop_first_from_local_storage_array_BANG_ = (function catan_board$middleware$local_storage$pop_first_from_local_storage_array_BANG_(key){
var existing = (function (){var G__25707 = localStorage.getItem(key);
if((G__25707 == null)){
return null;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__25707);
}
})();
if(cljs.core.seq(existing)){
var removed = cljs.core.first(existing);
var remaining = cljs.core.rest(existing);
localStorage.setItem(key,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([remaining], 0)));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"removed","removed",609626430),removed,new cljs.core.Keyword(null,"remaining","remaining",-138926777),remaining], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"removed","removed",609626430),null,new cljs.core.Keyword(null,"remaining","remaining",-138926777),((cljs.core.seq(existing))?existing:cljs.core.List.EMPTY)], null);
}
});
/**
 * Loads data from localStorage (if any) and optionally extracts a value at the given path.
 * Example:
 *   (load-from-local-storage "app-state")                ;=> entire map
 *   (load-from-local-storage "app-state" [:settings])    ;=> just (:settings saved-db)
 */
catan_board.middleware.local_storage.load_from_local_storage = (function catan_board$middleware$local_storage$load_from_local_storage(var_args){
var G__25722 = arguments.length;
switch (G__25722) {
case 1:
return catan_board.middleware.local_storage.load_from_local_storage.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return catan_board.middleware.local_storage.load_from_local_storage.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(catan_board.middleware.local_storage.load_from_local_storage.cljs$core$IFn$_invoke$arity$1 = (function (key){
var G__25732 = localStorage.getItem(key);
var G__25732__$1 = (((G__25732 == null))?null:cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__25732));
if((G__25732__$1 == null)){
return null;
} else {
return cljs.core.first(G__25732__$1);
}
}));

(catan_board.middleware.local_storage.load_from_local_storage.cljs$core$IFn$_invoke$arity$2 = (function (key,path){
var G__25734 = localStorage.getItem(key);
var G__25734__$1 = (((G__25734 == null))?null:cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__25734));
var G__25734__$2 = (((G__25734__$1 == null))?null:cljs.core.first(G__25734__$1));
if((G__25734__$2 == null)){
return null;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__25734__$2,path);
}
}));

(catan_board.middleware.local_storage.load_from_local_storage.cljs$lang$maxFixedArity = 2);

/**
 * Returns an interceptor that saves the whole db or a path of it to localStorage
 * after the event handler runs.
 */
catan_board.middleware.local_storage.persist_db = (function catan_board$middleware$local_storage$persist_db(var_args){
var G__25745 = arguments.length;
switch (G__25745) {
case 1:
return catan_board.middleware.local_storage.persist_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return catan_board.middleware.local_storage.persist_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(catan_board.middleware.local_storage.persist_db.cljs$core$IFn$_invoke$arity$1 = (function (key){
return catan_board.middleware.local_storage.persist_db.cljs$core$IFn$_invoke$arity$2(key,cljs.core.identity);
}));

(catan_board.middleware.local_storage.persist_db.cljs$core$IFn$_invoke$arity$2 = (function (key,path_fn){
return re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"persist-db","persist-db",-144176819),new cljs.core.Keyword(null,"after","after",594996914),(function (context){
var new_db_25754 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"db","db",993250759)], null));
var data_25755 = (path_fn.cljs$core$IFn$_invoke$arity$1 ? path_fn.cljs$core$IFn$_invoke$arity$1(new_db_25754) : path_fn.call(null,new_db_25754));
catan_board.middleware.local_storage.append_to_local_storage_array_BANG_(key,data_25755);

return context;
})], 0));
}));

(catan_board.middleware.local_storage.persist_db.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=catan_board.middleware.local_storage.js.map
