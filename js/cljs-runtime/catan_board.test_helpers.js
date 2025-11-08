goog.provide('catan_board.test_helpers');
if((typeof window !== 'undefined')){
} else {
(window = ({}));
}
if(cljs.core.truth_(window.localStorage)){
} else {
var storage_30341 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
(window.localStorage = ({"getItem": (function (k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(storage_30341),k);
}), "setItem": (function (k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(storage_30341,cljs.core.assoc,k,v);
}), "removeItem": (function (k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(storage_30341,cljs.core.dissoc,k);
}), "clear": (function (){
return cljs.core.reset_BANG_(storage_30341,cljs.core.PersistentArrayMap.EMPTY);
})}));
}
catan_board.test_helpers.localStorage = window.localStorage;
/**
 * Clear all localStorage data
 */
catan_board.test_helpers.clear_local_storage_BANG_ = (function catan_board$test_helpers$clear_local_storage_BANG_(){
return catan_board.test_helpers.localStorage.clear();
});

//# sourceMappingURL=catan_board.test_helpers.js.map
