goog.provide('catan_board.events');
/**
 * Middleware to persist the database to local storage after an event
 */
catan_board.events.persist_db = catan_board.middleware.local_storage.persist_db_after.cljs$core$IFn$_invoke$arity$1("app-db");
/**
 * Configuration for board scale settings
 */
catan_board.events.scale_config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min","min",444991522),(100),new cljs.core.Keyword(null,"max","max",61366548),(500),new cljs.core.Keyword(null,"default","default",-1987822328),(100),new cljs.core.Keyword(null,"step","step",1288888124),(25)], null);
/**
 * Register a simple toggle event handler for a boolean value in the db.
 * 
 *   Parameters:
 *   - event-id: The event keyword to register
 *   - path: Vector path to the boolean value in the db
 *   - persist?: If true, persist db changes to local storage (default: false)
 */
catan_board.events.reg_toggle_event = (function catan_board$events$reg_toggle_event(var_args){
var args__5732__auto__ = [];
var len__5726__auto___23934 = arguments.length;
var i__5727__auto___23935 = (0);
while(true){
if((i__5727__auto___23935 < len__5726__auto___23934)){
args__5732__auto__.push((arguments[i__5727__auto___23935]));

var G__23936 = (i__5727__auto___23935 + (1));
i__5727__auto___23935 = G__23936;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return catan_board.events.reg_toggle_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(catan_board.events.reg_toggle_event.cljs$core$IFn$_invoke$arity$variadic = (function (event_id,path,p__23815){
var map__23816 = p__23815;
var map__23816__$1 = cljs.core.__destructure_map(map__23816);
var persist_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23816__$1,new cljs.core.Keyword(null,"persist?","persist?",-1772568760),false);
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(event_id,(function (){var G__23817 = cljs.core.PersistentVector.EMPTY;
if(cljs.core.truth_(persist_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__23817,catan_board.events.persist_db);
} else {
return G__23817;
}
})(),(function (db,_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,path,cljs.core.not);
}));
}));

(catan_board.events.reg_toggle_event.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(catan_board.events.reg_toggle_event.cljs$lang$applyTo = (function (seq23812){
var G__23813 = cljs.core.first(seq23812);
var seq23812__$1 = cljs.core.next(seq23812);
var G__23814 = cljs.core.first(seq23812__$1);
var seq23812__$2 = cljs.core.next(seq23812__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23813,G__23814,seq23812__$2);
}));

/**
 * Extract generation mode settings from the database.
 */
catan_board.events.get_generation_modes = (function catan_board$events$get_generation_modes(db){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tournament-mode?","tournament-mode?",1595196011),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tournament-mode","tournament-mode",1600337077)], null),false),new cljs.core.Keyword(null,"random-harbor-mode?","random-harbor-mode?",1753781411),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"random-harbor-mode","random-harbor-mode",-1277507634)], null),false)], null);
});
/**
 * Generates a board with fog state for the given scenario config.
 * 
 *   Parameters:
 *   - db: The current database
 *   - scenario-config: The scenario configuration from the registry
 *   - scenario-id: Optional scenario ID to update in the db (if switching scenarios)
 * 
 *   Returns: Updated db with new board and fog state
 */
catan_board.events.generate_board_with_fog = (function catan_board$events$generate_board_with_fog(var_args){
var args__5732__auto__ = [];
var len__5726__auto___23944 = arguments.length;
var i__5727__auto___23945 = (0);
while(true){
if((i__5727__auto___23945 < len__5726__auto___23944)){
args__5732__auto__.push((arguments[i__5727__auto___23945]));

var G__23946 = (i__5727__auto___23945 + (1));
i__5727__auto___23945 = G__23946;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return catan_board.events.generate_board_with_fog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(catan_board.events.generate_board_with_fog.cljs$core$IFn$_invoke$arity$variadic = (function (db,scenario_config,p__23825){
var map__23826 = p__23825;
var map__23826__$1 = cljs.core.__destructure_map(map__23826);
var scenario_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23826__$1,new cljs.core.Keyword(null,"scenario-id","scenario-id",199208014));
var map__23827 = catan_board.events.get_generation_modes(db);
var map__23827__$1 = cljs.core.__destructure_map(map__23827);
var tournament_mode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23827__$1,new cljs.core.Keyword(null,"tournament-mode?","tournament-mode?",1595196011));
var random_harbor_mode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23827__$1,new cljs.core.Keyword(null,"random-harbor-mode?","random-harbor-mode?",1753781411));
var new_board = catan_board.utils.board_generator.generate_board(scenario_config,tournament_mode_QMARK_,random_harbor_mode_QMARK_);
var fog_state_hexes = catan_board.utils.scenario_generator.initialize_fog_state(scenario_config);
var fog_number_deck = catan_board.utils.scenario_generator.initialize_fog_number_deck(scenario_config);
var fog_terrain_deck = catan_board.utils.scenario_generator.initialize_fog_terrain_deck(scenario_config);
var G__23830 = db;
var G__23830__$1 = (cljs.core.truth_(scenario_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23830,new cljs.core.Keyword(null,"scenario","scenario",-316635333),scenario_id):G__23830);
var G__23830__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23830__$1,new cljs.core.Keyword(null,"board","board",-1907017633),new_board)
;
var G__23830__$3 = cljs.core.assoc_in(G__23830__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-token-coord","selected-token-coord",1371480460)], null),null)
;
var G__23830__$4 = ((cljs.core.seq(fog_state_hexes))?cljs.core.assoc_in(G__23830__$3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"hexes","hexes",-1419989846)], null),fog_state_hexes):G__23830__$3);
var G__23830__$5 = ((cljs.core.seq(fog_number_deck))?cljs.core.assoc_in(G__23830__$4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"number-deck","number-deck",1297732826)], null),fog_number_deck):G__23830__$4);
if(cljs.core.seq(fog_terrain_deck)){
return cljs.core.assoc_in(G__23830__$5,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"terrain-deck","terrain-deck",834871773)], null),fog_terrain_deck);
} else {
return G__23830__$5;
}
}));

(catan_board.events.generate_board_with_fog.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(catan_board.events.generate_board_with_fog.cljs$lang$applyTo = (function (seq23818){
var G__23819 = cljs.core.first(seq23818);
var seq23818__$1 = cljs.core.next(seq23818);
var G__23820 = cljs.core.first(seq23818__$1);
var seq23818__$2 = cljs.core.next(seq23818__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23819,G__23820,seq23818__$2);
}));

/**
 * Update the board scale by applying a delta, clamped to min/max bounds.
 */
catan_board.events.update_scale = (function catan_board$events$update_scale(db,delta){
var current_scale = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"board-scale","board-scale",1828785798)], null),new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(catan_board.events.scale_config));
var new_scale = (function (){var x__5090__auto__ = (function (){var x__5087__auto__ = (current_scale + delta);
var y__5088__auto__ = new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(catan_board.events.scale_config);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var y__5091__auto__ = new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(catan_board.events.scale_config);
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"board-scale","board-scale",1828785798)], null),new_scale);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return catan_board.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pop-history","pop-history",-1660514804),(function (_){
return catan_board.middleware.local_storage.pop_first_from_local_storage_array_BANG_("app-db");
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reload-board","reload-board",316472768),(function (_){
return catan_board.middleware.local_storage.load_latest_app_db_from_local_storage.cljs$core$IFn$_invoke$arity$0();
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"undo","undo",-1818036302),(function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pop-history","pop-history",-1660514804)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-board","reload-board",316472768)], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"generate-board","generate-board",2115038016),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.events.persist_db], null),(function (db,_){
var current_scenario = new cljs.core.Keyword(null,"scenario","scenario",-316635333).cljs$core$IFn$_invoke$arity$1(db);
var scenario_config = catan_board.scenarios.registry.get_scenario(current_scenario);
if(cljs.core.truth_(scenario_config)){
return catan_board.events.generate_board_with_fog(db,scenario_config);
} else {
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-token-coord","selected-token-coord",1371480460)], null),null);
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"generate-board-success","generate-board-success",-1001336690),(function (db,p__23853){
var vec__23854 = p__23853;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23854,(0),null);
var board_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23854,(1),null);
return cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"board","board",-1907017633),board_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"generate-board-failure","generate-board-failure",-944342640),(function (db,p__23861){
var vec__23862 = p__23861;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23862,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23862,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"error","error",-978969032)], null),error);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"set-scenario","set-scenario",-2002175398),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.events.persist_db], null),(function (db,p__23865){
var vec__23866 = p__23865;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23866,(0),null);
var scenario_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23866,(1),null);
var scenario_config = catan_board.scenarios.registry.get_scenario(scenario_id);
if(cljs.core.truth_(scenario_config)){
return catan_board.events.generate_board_with_fog.cljs$core$IFn$_invoke$arity$variadic(db,scenario_config,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"scenario-id","scenario-id",199208014),scenario_id], 0));
} else {
return db;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"reveal-fog-tile","reveal-fog-tile",-984124702),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.events.persist_db], null),(function (db,p__23873){
var vec__23874 = p__23873;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23874,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23874,(1),null);
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
var terrain_deck = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"terrain-deck","terrain-deck",834871773)], null));
var terrain = cljs.core.first(terrain_deck);
var is_water_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"water","water",-824098213),terrain);
var number_deck = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"number-deck","number-deck",1297732826)], null));
var number = ((is_water_QMARK_)?null:cljs.core.first(number_deck));
var G__23882 = db;
var G__23882__$1 = cljs.core.assoc_in(G__23882,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"hexes","hexes",-1419989846),coord,new cljs.core.Keyword(null,"revealed?","revealed?",726959164)], null),true)
;
var G__23882__$2 = cljs.core.assoc_in(G__23882__$1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"hexes","hexes",-1419989846),coord,new cljs.core.Keyword(null,"terrain","terrain",704966005)], null),terrain)
;
var G__23882__$3 = cljs.core.assoc_in(G__23882__$2,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"hexes","hexes",-1419989846),coord,new cljs.core.Keyword(null,"number","number",1570378438)], null),number)
;
var G__23882__$4 = cljs.core.assoc_in(G__23882__$3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"terrain-deck","terrain-deck",834871773)], null),cljs.core.rest(terrain_deck))
;
if((!(is_water_QMARK_))){
return cljs.core.assoc_in(G__23882__$4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"number-deck","number-deck",1297732826)], null),cljs.core.rest(number_deck));
} else {
return G__23882__$4;
}
} else {
return db;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"shuffle-hidden-fog-tiles","shuffle-hidden-fog-tiles",-1011209727),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.events.persist_db], null),(function (db){
var terrain_deck = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"terrain-deck","terrain-deck",834871773)], null));
var shuffled_terrain_deck = cljs.core.shuffle(terrain_deck);
var number_deck = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"number-deck","number-deck",1297732826)], null));
var shuffled_number_deck = cljs.core.shuffle(number_deck);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"terrain-deck","terrain-deck",834871773)], null),shuffled_terrain_deck),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"number-deck","number-deck",1297732826)], null),shuffled_number_deck);
}));
catan_board.events.reg_toggle_event(new cljs.core.Keyword(null,"toggle-info-panel","toggle-info-panel",-267315576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"show-info-panel","show-info-panel",-1339130975)], null));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"set-board-scale","set-board-scale",259109878),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.events.persist_db], null),(function (db,p__23889){
var vec__23890 = p__23889;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23890,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23890,(1),null);
var clamped_scale = (function (){var x__5090__auto__ = (function (){var x__5087__auto__ = scale;
var y__5088__auto__ = new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(catan_board.events.scale_config);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var y__5091__auto__ = new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(catan_board.events.scale_config);
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"board-scale","board-scale",1828785798)], null),clamped_scale);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"increase-scale","increase-scale",958722152),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.events.persist_db], null),(function (db,_){
return catan_board.events.update_scale(db,new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(catan_board.events.scale_config));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"decrease-scale","decrease-scale",-1538376033),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.events.persist_db], null),(function (db,_){
return catan_board.events.update_scale(db,(- new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(catan_board.events.scale_config)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"reset-scale","reset-scale",-1188597804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.events.persist_db], null),(function (db,_){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"board-scale","board-scale",1828785798)], null),new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(catan_board.events.scale_config));
}));
catan_board.events.reg_toggle_event.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"toggle-tournament-mode","toggle-tournament-mode",-166606271),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tournament-mode","tournament-mode",1600337077)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persist?","persist?",-1772568760),true], 0));
catan_board.events.reg_toggle_event.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"toggle-developer-mode","toggle-developer-mode",536484451),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"developer-mode","developer-mode",-1735611500)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persist?","persist?",-1772568760),true], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-swap-number-mode","toggle-swap-number-mode",1724988811),(function (db,_){
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"swap-number-mode","swap-number-mode",-377880290)], null),cljs.core.not),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-token-coord","selected-token-coord",1371480460)], null),null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"select-token","select-token",436885760),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.events.persist_db], null),(function (db,p__23917){
var vec__23918 = p__23917;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23918,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23918,(1),null);
var current_selection = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-token-coord","selected-token-coord",1371480460)], null));
if(cljs.core.truth_(current_selection)){
var hexes = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"hexes","hexes",-1419989846)], null));
var fog_state_hexes = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"hexes","hexes",-1419989846)], null));
var hex1_idx = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__23910_SHARP_,p2__23909_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(p2__23909_SHARP_),current_selection)){
return p1__23910_SHARP_;
} else {
return null;
}
}),hexes));
var hex2_idx = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__23912_SHARP_,p2__23911_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(p2__23911_SHARP_),coord)){
return p1__23912_SHARP_;
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
var G__23925 = db;
var G__23925__$1 = cljs.core.assoc_in(G__23925,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"hexes","hexes",-1419989846),hex1_idx,new cljs.core.Keyword(null,"number","number",1570378438)], null),num2)
;
var G__23925__$2 = cljs.core.assoc_in(G__23925__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"hexes","hexes",-1419989846),hex2_idx,new cljs.core.Keyword(null,"number","number",1570378438)], null),num1)
;
var G__23925__$3 = (cljs.core.truth_(is_fog1_revealed_QMARK_)?cljs.core.assoc_in(G__23925__$2,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"hexes","hexes",-1419989846),new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(hex1),new cljs.core.Keyword(null,"number","number",1570378438)], null),num2):G__23925__$2);
var G__23925__$4 = (cljs.core.truth_(is_fog2_revealed_QMARK_)?cljs.core.assoc_in(G__23925__$3,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"hexes","hexes",-1419989846),new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(hex2),new cljs.core.Keyword(null,"number","number",1570378438)], null),num1):G__23925__$3);
return cljs.core.assoc_in(G__23925__$4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-token-coord","selected-token-coord",1371480460)], null),null);

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
catan_board.events.reg_toggle_event.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"toggle-landscape-mode","toggle-landscape-mode",-56367616),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"landscape-mode","landscape-mode",-261736459)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persist?","persist?",-1772568760),true], 0));
catan_board.events.reg_toggle_event.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"toggle-random-harbor-mode","toggle-random-harbor-mode",198398702),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"random-harbor-mode","random-harbor-mode",-1277507634)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persist?","persist?",-1772568760),true], 0));

//# sourceMappingURL=catan_board.events.js.map
