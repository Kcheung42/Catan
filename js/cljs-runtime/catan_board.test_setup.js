goog.provide('catan_board.test_setup');
if((typeof window !== 'undefined')){
} else {
(window = ({}));
}
if(cljs.core.truth_(window.localStorage)){
} else {
var storage_30340 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
(window.localStorage = ({"getItem": (function (k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(storage_30340),k);
}), "setItem": (function (k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(storage_30340,cljs.core.assoc,k,v);
}), "removeItem": (function (k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(storage_30340,cljs.core.dissoc,k);
}), "clear": (function (){
return cljs.core.reset_BANG_(storage_30340,cljs.core.PersistentArrayMap.EMPTY);
})}));
}
(localStorage = window.localStorage);

//# sourceMappingURL=catan_board.test_setup.js.map
