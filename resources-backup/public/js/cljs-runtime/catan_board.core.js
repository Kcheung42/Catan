goog.provide('catan_board.core');
catan_board.core.mount_root = (function catan_board$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.views.main_panel], null),root_el);
});
catan_board.core.init = (function catan_board$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return catan_board.core.mount_root();
});

//# sourceMappingURL=catan_board.core.js.map
