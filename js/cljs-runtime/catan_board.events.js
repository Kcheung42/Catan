goog.provide('catan_board.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return catan_board.db.default_db;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"undo-one-step","undo-one-step",-40604531),(function (_){
catan_board.middleware.local_storage.pop_first_from_local_storage_array_BANG_("app-db");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-board","reload-board",316472768)], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reload-board","reload-board",316472768),(function (_){
return catan_board.middleware.local_storage.load_from_local_storage.cljs$core$IFn$_invoke$arity$1("app-db");
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"generate-board","generate-board",2115038016),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.middleware.local_storage.persist_db.cljs$core$IFn$_invoke$arity$1("app-db")], null),(function (db,_){
var current_scenario = new cljs.core.Keyword(null,"scenario","scenario",-316635333).cljs$core$IFn$_invoke$arity$1(db);
var tournament_mode_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tournament-mode","tournament-mode",1600337077)], null),false);
var random_harbor_mode_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"random-harbor-mode","random-harbor-mode",-1277507634)], null),false);
var scenario_config = catan_board.scenarios.registry.get_scenario(current_scenario);
var new_board = catan_board.utils.board_generator.generate_board(scenario_config,tournament_mode_QMARK_,random_harbor_mode_QMARK_);
var fog_state = catan_board.utils.scenario_generator.initialize_fog_state(scenario_config);
var fog_number_deck = catan_board.utils.scenario_generator.initialize_fog_number_deck(scenario_config);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"board","board",-1907017633),new_board),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"hexes","hexes",-1419989846)], null),fog_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"number-deck","number-deck",1297732826)], null),fog_number_deck),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-token-coord","selected-token-coord",1371480460)], null),null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"generate-board-success","generate-board-success",-1001336690),(function (db,p__25835){
var vec__25836 = p__25835;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25836,(0),null);
var board_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25836,(1),null);
return cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"board","board",-1907017633),board_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"generate-board-failure","generate-board-failure",-944342640),(function (db,p__25839){
var vec__25840 = p__25839;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25840,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25840,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"error","error",-978969032)], null),error);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"set-scenario","set-scenario",-2002175398),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.middleware.local_storage.persist_db.cljs$core$IFn$_invoke$arity$1("app-db")], null),(function (db,p__25843){
var vec__25844 = p__25843;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25844,(0),null);
var scenario_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25844,(1),null);
var scenario_config = catan_board.scenarios.registry.get_scenario(scenario_id);
if(cljs.core.truth_(scenario_config)){
var tournament_mode_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tournament-mode","tournament-mode",1600337077)], null),false);
var random_harbor_mode_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"random-harbor-mode","random-harbor-mode",-1277507634)], null),false);
var new_board = catan_board.utils.board_generator.generate_board(scenario_config,tournament_mode_QMARK_,random_harbor_mode_QMARK_);
var fog_state_hexes = catan_board.utils.scenario_generator.initialize_fog_state(scenario_config);
var fog_number_deck = catan_board.utils.scenario_generator.initialize_fog_number_deck(scenario_config);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"scenario","scenario",-316635333),scenario_id),new cljs.core.Keyword(null,"board","board",-1907017633),new_board),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"hexes","hexes",-1419989846)], null),fog_state_hexes),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"number-deck","number-deck",1297732826)], null),fog_number_deck),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-token-coord","selected-token-coord",1371480460)], null),null);
} else {
return db;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"reveal-fog-tile","reveal-fog-tile",-984124702),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.middleware.local_storage.persist_db.cljs$core$IFn$_invoke$arity$1("app-db")], null),(function (db,p__25847){
var vec__25848 = p__25847;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25848,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25848,(1),null);
var fog_state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"hexes","hexes",-1419989846)], null));
var fog_entry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fog_state,coord);
var current_scenario = new cljs.core.Keyword(null,"scenario","scenario",-316635333).cljs$core$IFn$_invoke$arity$1(db);
var scenario_config = catan_board.scenarios.registry.get_scenario(current_scenario);
if(cljs.core.truth_((function (){var and__5000__auto__ = fog_entry;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = cljs.core.not(new cljs.core.Keyword(null,"revealed?","revealed?",726959164).cljs$core$IFn$_invoke$arity$1(fog_entry));
if(and__5000__auto____$1){
return scenario_config;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
var terrain = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"hexes","hexes",-1419989846),coord,new cljs.core.Keyword(null,"terrain","terrain",704966005)], null));
var is_water_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"water","water",-824098213),terrain);
var number_deck = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"number-deck","number-deck",1297732826)], null));
var number = ((is_water_QMARK_)?null:cljs.core.first(number_deck));
var G__25851 = db;
var G__25851__$1 = cljs.core.assoc_in(G__25851,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"hexes","hexes",-1419989846),coord,new cljs.core.Keyword(null,"revealed?","revealed?",726959164)], null),true)
;
var G__25851__$2 = cljs.core.assoc_in(G__25851__$1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"hexes","hexes",-1419989846),coord,new cljs.core.Keyword(null,"number","number",1570378438)], null),number)
;
if((!(is_water_QMARK_))){
return cljs.core.assoc_in(G__25851__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"number-deck","number-deck",1297732826)], null),cljs.core.rest(number_deck));
} else {
return G__25851__$2;
}
} else {
return db;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"shuffle-hidden-fog-tiles","shuffle-hidden-fog-tiles",-1011209727),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.middleware.local_storage.persist_db.cljs$core$IFn$_invoke$arity$1("app-db")], null),(function (db){
var fog_state_hexes = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"hexes","hexes",-1419989846)], null));
var hidden_fog_state_hexes = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__25852){
var vec__25854 = p__25852;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25854,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25854,(1),null);
return new cljs.core.Keyword(null,"revealed?","revealed?",726959164).cljs$core$IFn$_invoke$arity$1(v);
}),fog_state_hexes);
var new_fog_terrain_deck = cljs.core.shuffle(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"terrain","terrain",704966005),cljs.core.vals(hidden_fog_state_hexes)));
var new_hidden_fog_state_hexes = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p__25860,new_resource){
var vec__25861 = p__25860;
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25861,(0),null);
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25861,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coord,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info,new cljs.core.Keyword(null,"terrain","terrain",704966005),new_resource)], null);
}),hidden_fog_state_hexes,new_fog_terrain_deck));
var fog_state_numbers = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"number-deck","number-deck",1297732826)], null));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"hexes","hexes",-1419989846)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fog_state_hexes,new_hidden_fog_state_hexes], 0))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"number-deck","number-deck",1297732826)], null),cljs.core.shuffle(fog_state_numbers));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"toggle-info-panel","toggle-info-panel",-267315576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.middleware.local_storage.persist_db.cljs$core$IFn$_invoke$arity$1("app-db")], null),(function (db,_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"show-info-panel","show-info-panel",-1339130975)], null),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"set-board-scale","set-board-scale",259109878),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.middleware.local_storage.persist_db.cljs$core$IFn$_invoke$arity$1("app-db")], null),(function (db,p__25864){
var vec__25865 = p__25864;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25865,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25865,(1),null);
var clamped_scale = (function (){var x__5090__auto__ = (function (){var x__5087__auto__ = scale;
var y__5088__auto__ = (50);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var y__5091__auto__ = (500);
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"board-scale","board-scale",1828785798)], null),clamped_scale);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"increase-scale","increase-scale",958722152),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.middleware.local_storage.persist_db.cljs$core$IFn$_invoke$arity$1("app-db")], null),(function (db,_){
var current_scale = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"board-scale","board-scale",1828785798)], null),(100));
var new_scale = (function (){var x__5090__auto__ = (500);
var y__5091__auto__ = (current_scale + (25));
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"board-scale","board-scale",1828785798)], null),new_scale);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"decrease-scale","decrease-scale",-1538376033),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.middleware.local_storage.persist_db.cljs$core$IFn$_invoke$arity$1("app-db")], null),(function (db,_){
var current_scale = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"board-scale","board-scale",1828785798)], null),(100));
var new_scale = (function (){var x__5087__auto__ = (50);
var y__5088__auto__ = (current_scale - (25));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"board-scale","board-scale",1828785798)], null),new_scale);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"reset-scale","reset-scale",-1188597804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.middleware.local_storage.persist_db.cljs$core$IFn$_invoke$arity$1("app-db")], null),(function (db,_){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"board-scale","board-scale",1828785798)], null),(100));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"toggle-tournament-mode","toggle-tournament-mode",-166606271),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.middleware.local_storage.persist_db.cljs$core$IFn$_invoke$arity$1("app-db")], null),(function (db,_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tournament-mode","tournament-mode",1600337077)], null),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"toggle-developer-mode","toggle-developer-mode",536484451),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.middleware.local_storage.persist_db.cljs$core$IFn$_invoke$arity$1("app-db")], null),(function (db,_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"developer-mode","developer-mode",-1735611500)], null),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-swap-number-mode","toggle-swap-number-mode",1724988811),(function (db,_){
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"swap-number-mode","swap-number-mode",-377880290)], null),cljs.core.not),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-token-coord","selected-token-coord",1371480460)], null),null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"select-token","select-token",436885760),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.middleware.local_storage.persist_db.cljs$core$IFn$_invoke$arity$1("app-db")], null),(function (db,p__25876){
var vec__25877 = p__25876;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25877,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25877,(1),null);
var current_selection = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-token-coord","selected-token-coord",1371480460)], null));
if(cljs.core.truth_(current_selection)){
var hexes = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"hexes","hexes",-1419989846)], null));
var fog_state_hexes = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"hexes","hexes",-1419989846)], null));
var hex1_idx = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__25873_SHARP_,p2__25872_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(p2__25872_SHARP_),current_selection)){
return p1__25873_SHARP_;
} else {
return null;
}
}),hexes));
var hex2_idx = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__25875_SHARP_,p2__25874_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(p2__25874_SHARP_),coord)){
return p1__25875_SHARP_;
} else {
return null;
}
}),hexes));
if(cljs.core.truth_((function (){var and__5000__auto__ = hex1_idx;
if(cljs.core.truth_(and__5000__auto__)){
return hex2_idx;
} else {
return and__5000__auto__;
}
})())){
var hex1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(hexes,hex1_idx);
var hex2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(hexes,hex2_idx);
var fog1_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fog_state_hexes,new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(hex1));
var fog2_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fog_state_hexes,new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(hex2));
var is_fog1_revealed_QMARK_ = (function (){var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resource","resource",251898836).cljs$core$IFn$_invoke$arity$1(hex1),new cljs.core.Keyword(null,"fog","fog",1515389980));
if(and__5000__auto__){
return new cljs.core.Keyword(null,"revealed?","revealed?",726959164).cljs$core$IFn$_invoke$arity$1(fog1_info);
} else {
return and__5000__auto__;
}
})();
var is_fog2_revealed_QMARK_ = (function (){var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resource","resource",251898836).cljs$core$IFn$_invoke$arity$1(hex2),new cljs.core.Keyword(null,"fog","fog",1515389980));
if(and__5000__auto__){
return new cljs.core.Keyword(null,"revealed?","revealed?",726959164).cljs$core$IFn$_invoke$arity$1(fog2_info);
} else {
return and__5000__auto__;
}
})();
var num1 = (cljs.core.truth_(is_fog1_revealed_QMARK_)?new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(fog1_info):new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(hex1));
var num2 = (cljs.core.truth_(is_fog2_revealed_QMARK_)?new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(fog2_info):new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(hex2));
var G__25886 = db;
var G__25886__$1 = cljs.core.assoc_in(G__25886,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"hexes","hexes",-1419989846),hex1_idx,new cljs.core.Keyword(null,"number","number",1570378438)], null),num2)
;
var G__25886__$2 = cljs.core.assoc_in(G__25886__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"hexes","hexes",-1419989846),hex2_idx,new cljs.core.Keyword(null,"number","number",1570378438)], null),num1)
;
var G__25886__$3 = (cljs.core.truth_(is_fog1_revealed_QMARK_)?cljs.core.assoc_in(G__25886__$2,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"hexes","hexes",-1419989846),new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(hex1),new cljs.core.Keyword(null,"number","number",1570378438)], null),num2):G__25886__$2);
var G__25886__$4 = (cljs.core.truth_(is_fog2_revealed_QMARK_)?cljs.core.assoc_in(G__25886__$3,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"hexes","hexes",-1419989846),new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(hex2),new cljs.core.Keyword(null,"number","number",1570378438)], null),num1):G__25886__$3);
return cljs.core.assoc_in(G__25886__$4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-token-coord","selected-token-coord",1371480460)], null),null);

} else {
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-token-coord","selected-token-coord",1371480460)], null),null);
}
} else {
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-token-coord","selected-token-coord",1371480460)], null),coord);
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-token-selection","clear-token-selection",1139468230),(function (db,_){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-token-coord","selected-token-coord",1371480460)], null),null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"toggle-landscape-mode","toggle-landscape-mode",-56367616),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.middleware.local_storage.persist_db.cljs$core$IFn$_invoke$arity$1("app-db")], null),(function (db,_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"landscape-mode","landscape-mode",-261736459)], null),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"toggle-random-harbor-mode","toggle-random-harbor-mode",198398702),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.middleware.local_storage.persist_db.cljs$core$IFn$_invoke$arity$1("app-db")], null),(function (db,_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"random-harbor-mode","random-harbor-mode",-1277507634)], null),cljs.core.not);
}));

//# sourceMappingURL=catan_board.events.js.map
