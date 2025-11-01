goog.provide('catan_board.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return catan_board.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"generate-board","generate-board",2115038016),(function (db,_){
var tournament_mode_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tournament-mode","tournament-mode",1600337077)], null),false);
var new_board = catan_board.utils.board_generator.generate_board(tournament_mode_QMARK_);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"board","board",-1907017633),new_board);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"generate-board-success","generate-board-success",-1001336690),(function (db,p__14386){
var vec__14387 = p__14386;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14387,(0),null);
var board_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14387,(1),null);
return cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"board","board",-1907017633),board_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"generate-board-failure","generate-board-failure",-944342640),(function (db,p__14390){
var vec__14391 = p__14390;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14391,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14391,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"error","error",-978969032)], null),error);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-info-panel","toggle-info-panel",-267315576),(function (db,_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"show-info-panel","show-info-panel",-1339130975)], null),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-board-scale","set-board-scale",259109878),(function (db,p__14394){
var vec__14395 = p__14394;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14395,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14395,(1),null);
var clamped_scale = (function (){var x__5090__auto__ = (function (){var x__5087__auto__ = scale;
var y__5088__auto__ = (50);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var y__5091__auto__ = (300);
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"board-scale","board-scale",1828785798)], null),clamped_scale);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"increase-scale","increase-scale",958722152),(function (db,_){
var current_scale = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"board-scale","board-scale",1828785798)], null),(100));
var new_scale = (function (){var x__5090__auto__ = (300);
var y__5091__auto__ = (current_scale + (25));
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"board-scale","board-scale",1828785798)], null),new_scale);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"decrease-scale","decrease-scale",-1538376033),(function (db,_){
var current_scale = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"board-scale","board-scale",1828785798)], null),(100));
var new_scale = (function (){var x__5087__auto__ = (50);
var y__5088__auto__ = (current_scale - (25));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"board-scale","board-scale",1828785798)], null),new_scale);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-scale","reset-scale",-1188597804),(function (db,_){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"board-scale","board-scale",1828785798)], null),(100));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-tournament-mode","toggle-tournament-mode",-166606271),(function (db,_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tournament-mode","tournament-mode",1600337077)], null),cljs.core.not);
}));

//# sourceMappingURL=catan_board.events.js.map
