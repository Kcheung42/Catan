goog.provide('catan_board.middleware.local_storage');
/**
 * Check if localStorage is available
 */
catan_board.middleware.local_storage.has_local_storage_QMARK_ = (function catan_board$middleware$local_storage$has_local_storage_QMARK_(){
return (typeof localStorage !== 'undefined');
});
/**
 * Helper that serializes and saves the given data to localStorage under a key.
 */
catan_board.middleware.local_storage.save_to_local_storage_BANG_ = (function catan_board$middleware$local_storage$save_to_local_storage_BANG_(key,data){
if(catan_board.middleware.local_storage.has_local_storage_QMARK_()){
return localStorage.setItem(key,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0)));
} else {
return null;
}
});
/**
 * Assoc `entry` to a value stored under `key` in localStorage.
 * If the key does not exist or is not a map, creates a new map.
 * Example:
 *   (append-to-local-storage-array! "app-state" {:id 1 :data "foo"})
 */
catan_board.middleware.local_storage.assoc_to_local_storage_array_BANG_ = (function catan_board$middleware$local_storage$assoc_to_local_storage_array_BANG_(key,entry){
if(catan_board.middleware.local_storage.has_local_storage_QMARK_()){
var existing = (function (){var G__21394 = localStorage.getItem(key);
if((G__21394 == null)){
return null;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__21394);
}
})();
var current = ((cljs.core.map_QMARK_(existing))?existing:cljs.core.PersistentArrayMap.EMPTY);
var new_data = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([current,entry], 0));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new-data:",new_data], 0));

catan_board.middleware.local_storage.save_to_local_storage_BANG_(key,new_data);

return new_data;
} else {
return null;
}
});
/**
 * Appends `entry` to a vector stored under `key` in localStorage.
 * If the key does not exist or is not a vector, creates a new vector.
 * Example:
 *   (append-to-local-storage-array! "app-state" {:id 1 :data "foo"})
 */
catan_board.middleware.local_storage.append_to_local_storage_array_BANG_ = (function catan_board$middleware$local_storage$append_to_local_storage_array_BANG_(key,entry){
if(catan_board.middleware.local_storage.has_local_storage_QMARK_()){
var existing = (function (){var G__21400 = localStorage.getItem(key);
if((G__21400 == null)){
return null;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__21400);
}
})();
var current = ((cljs.core.seq(existing))?existing:cljs.core.List.EMPTY);
var new_data = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((20),current),entry);
catan_board.middleware.local_storage.save_to_local_storage_BANG_(key,new_data);

return new_data;
} else {
return null;
}
});
/**
 * Removes and returns the first element of the vector stored under `key` in localStorage.
 * If the key doesn't exist or isn't a vector, returns nil and does nothing.
 * Returns a map:
 *   {:removed <the element removed>
 *    :remaining <the updated vector>}
 */
catan_board.middleware.local_storage.pop_first_from_local_storage_array_BANG_ = (function catan_board$middleware$local_storage$pop_first_from_local_storage_array_BANG_(key){
if(catan_board.middleware.local_storage.has_local_storage_QMARK_()){
var existing = (function (){var G__21407 = localStorage.getItem(key);
if((G__21407 == null)){
return null;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__21407);
}
})();
if(cljs.core.seq(existing)){
var removed = cljs.core.first(existing);
var remaining = cljs.core.rest(existing);
catan_board.middleware.local_storage.save_to_local_storage_BANG_(key,remaining);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"removed","removed",609626430),removed,new cljs.core.Keyword(null,"remaining","remaining",-138926777),remaining], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"removed","removed",609626430),null,new cljs.core.Keyword(null,"remaining","remaining",-138926777),cljs.core.List.EMPTY], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"removed","removed",609626430),null,new cljs.core.Keyword(null,"remaining","remaining",-138926777),cljs.core.List.EMPTY], null);
}
});
/**
 * Loads data from localStorage (if any) and optionally extracts a value at the given path.
 * Example:
 *   (load-latest-app-db-from-local-storage)                ;=> entire map
 *   (load-latest-app-db-from-local-storage [:settings])    ;=> just (:settings saved-db)
 */
catan_board.middleware.local_storage.load_latest_app_db_from_local_storage = (function catan_board$middleware$local_storage$load_latest_app_db_from_local_storage(var_args){
var G__21427 = arguments.length;
switch (G__21427) {
case 0:
return catan_board.middleware.local_storage.load_latest_app_db_from_local_storage.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return catan_board.middleware.local_storage.load_latest_app_db_from_local_storage.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(catan_board.middleware.local_storage.load_latest_app_db_from_local_storage.cljs$core$IFn$_invoke$arity$0 = (function (){
if(catan_board.middleware.local_storage.has_local_storage_QMARK_()){
var G__21434 = localStorage.getItem("app-db");
var G__21434__$1 = (((G__21434 == null))?null:cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__21434));
if((G__21434__$1 == null)){
return null;
} else {
return cljs.core.first(G__21434__$1);
}
} else {
return null;
}
}));

(catan_board.middleware.local_storage.load_latest_app_db_from_local_storage.cljs$core$IFn$_invoke$arity$1 = (function (path){
if(catan_board.middleware.local_storage.has_local_storage_QMARK_()){
var G__21435 = localStorage.getItem("app-db");
var G__21435__$1 = (((G__21435 == null))?null:cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__21435));
var G__21435__$2 = (((G__21435__$1 == null))?null:cljs.core.first(G__21435__$1));
if((G__21435__$2 == null)){
return null;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__21435__$2,path);
}
} else {
return null;
}
}));

(catan_board.middleware.local_storage.load_latest_app_db_from_local_storage.cljs$lang$maxFixedArity = 1);

/**
 * Loads data from localStorage (if any) and optionally extracts a value at the given path.
 * Example:
 *   (load-from-local-storage "app-db")                ;=> entire map
 *   (load-from-local-storage "app-db" [:settings])    ;=> just (:settings saved-db)
 */
catan_board.middleware.local_storage.load_from_local_storage = (function catan_board$middleware$local_storage$load_from_local_storage(var_args){
var G__21437 = arguments.length;
switch (G__21437) {
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
if(catan_board.middleware.local_storage.has_local_storage_QMARK_()){
var G__21438 = localStorage.getItem(key);
if((G__21438 == null)){
return null;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__21438);
}
} else {
return null;
}
}));

(catan_board.middleware.local_storage.load_from_local_storage.cljs$core$IFn$_invoke$arity$2 = (function (key,path){
if(catan_board.middleware.local_storage.has_local_storage_QMARK_()){
var G__21439 = localStorage.getItem(key);
var G__21439__$1 = (((G__21439 == null))?null:cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__21439));
if((G__21439__$1 == null)){
return null;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__21439__$1,path);
}
} else {
return null;
}
}));

(catan_board.middleware.local_storage.load_from_local_storage.cljs$lang$maxFixedArity = 2);

/**
 * Returns an interceptor that saves the whole db or a path of it to localStorage
 * after the event handler runs.
 */
catan_board.middleware.local_storage.persist_db_after = (function catan_board$middleware$local_storage$persist_db_after(var_args){
var G__21441 = arguments.length;
switch (G__21441) {
case 1:
return catan_board.middleware.local_storage.persist_db_after.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return catan_board.middleware.local_storage.persist_db_after.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(catan_board.middleware.local_storage.persist_db_after.cljs$core$IFn$_invoke$arity$1 = (function (key){
return catan_board.middleware.local_storage.persist_db_after.cljs$core$IFn$_invoke$arity$2(key,cljs.core.identity);
}));

(catan_board.middleware.local_storage.persist_db_after.cljs$core$IFn$_invoke$arity$2 = (function (key,path_fn){
return re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"persist-db","persist-db",-144176819),new cljs.core.Keyword(null,"after","after",594996914),(function (context){
if(catan_board.middleware.local_storage.has_local_storage_QMARK_()){
var new_db_21465 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"db","db",993250759)], null));
var data_21466 = (path_fn.cljs$core$IFn$_invoke$arity$1 ? path_fn.cljs$core$IFn$_invoke$arity$1(new_db_21465) : path_fn.call(null,new_db_21465));
catan_board.middleware.local_storage.append_to_local_storage_array_BANG_(key,data_21466);
} else {
}

return context;
})], 0));
}));

(catan_board.middleware.local_storage.persist_db_after.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=catan_board.middleware.local_storage.js.map
