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
var len__5726__auto___32315 = arguments.length;
var i__5727__auto___32316 = (0);
while(true){
if((i__5727__auto___32316 < len__5726__auto___32315)){
args__5732__auto__.push((arguments[i__5727__auto___32316]));

var G__32317 = (i__5727__auto___32316 + (1));
i__5727__auto___32316 = G__32317;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return catan_board.events.reg_toggle_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(catan_board.events.reg_toggle_event.cljs$core$IFn$_invoke$arity$variadic = (function (event_id,path,p__32221){
var map__32226 = p__32221;
var map__32226__$1 = cljs.core.__destructure_map(map__32226);
var persist_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32226__$1,new cljs.core.Keyword(null,"persist?","persist?",-1772568760),false);
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(event_id,(function (){var G__32227 = cljs.core.PersistentVector.EMPTY;
if(cljs.core.truth_(persist_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__32227,catan_board.events.persist_db);
} else {
return G__32227;
}
})(),(function (db,_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,path,cljs.core.not);
}));
}));

(catan_board.events.reg_toggle_event.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(catan_board.events.reg_toggle_event.cljs$lang$applyTo = (function (seq32206){
var G__32207 = cljs.core.first(seq32206);
var seq32206__$1 = cljs.core.next(seq32206);
var G__32208 = cljs.core.first(seq32206__$1);
var seq32206__$2 = cljs.core.next(seq32206__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32207,G__32208,seq32206__$2);
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
var len__5726__auto___32318 = arguments.length;
var i__5727__auto___32319 = (0);
while(true){
if((i__5727__auto___32319 < len__5726__auto___32318)){
args__5732__auto__.push((arguments[i__5727__auto___32319]));

var G__32320 = (i__5727__auto___32319 + (1));
i__5727__auto___32319 = G__32320;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return catan_board.events.generate_board_with_fog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(catan_board.events.generate_board_with_fog.cljs$core$IFn$_invoke$arity$variadic = (function (db,scenario_config,p__32252){
var map__32253 = p__32252;
var map__32253__$1 = cljs.core.__destructure_map(map__32253);
var scenario_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32253__$1,new cljs.core.Keyword(null,"scenario-id","scenario-id",199208014));
var map__32255 = catan_board.events.get_generation_modes(db);
var map__32255__$1 = cljs.core.__destructure_map(map__32255);
var tournament_mode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32255__$1,new cljs.core.Keyword(null,"tournament-mode?","tournament-mode?",1595196011));
var random_harbor_mode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32255__$1,new cljs.core.Keyword(null,"random-harbor-mode?","random-harbor-mode?",1753781411));
var new_board = catan_board.utils.board_generator.generate_board(scenario_config,tournament_mode_QMARK_,random_harbor_mode_QMARK_);
var fog_state_hexes = catan_board.utils.scenario_generator.initialize_fog_state(scenario_config);
var fog_number_deck = catan_board.utils.scenario_generator.initialize_fog_number_deck(scenario_config);
var fog_terrain_deck = catan_board.utils.scenario_generator.initialize_fog_terrain_deck(scenario_config);
var G__32260 = db;
var G__32260__$1 = (cljs.core.truth_(scenario_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32260,new cljs.core.Keyword(null,"scenario","scenario",-316635333),scenario_id):G__32260);
var G__32260__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32260__$1,new cljs.core.Keyword(null,"board","board",-1907017633),new_board)
;
var G__32260__$3 = cljs.core.assoc_in(G__32260__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-token-coord","selected-token-coord",1371480460)], null),null)
;
var G__32260__$4 = ((cljs.core.seq(fog_state_hexes))?cljs.core.assoc_in(G__32260__$3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"hexes","hexes",-1419989846)], null),fog_state_hexes):G__32260__$3);
var G__32260__$5 = ((cljs.core.seq(fog_number_deck))?cljs.core.assoc_in(G__32260__$4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"number-deck","number-deck",1297732826)], null),fog_number_deck):G__32260__$4);
if(cljs.core.seq(fog_terrain_deck)){
return cljs.core.assoc_in(G__32260__$5,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"terrain-deck","terrain-deck",834871773)], null),fog_terrain_deck);
} else {
return G__32260__$5;
}
}));

(catan_board.events.generate_board_with_fog.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(catan_board.events.generate_board_with_fog.cljs$lang$applyTo = (function (seq32241){
var G__32242 = cljs.core.first(seq32241);
var seq32241__$1 = cljs.core.next(seq32241);
var G__32246 = cljs.core.first(seq32241__$1);
var seq32241__$2 = cljs.core.next(seq32241__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32242,G__32246,seq32241__$2);
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"generate-board-success","generate-board-success",-1001336690),(function (db,p__32278){
var vec__32279 = p__32278;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32279,(0),null);
var board_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32279,(1),null);
return cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"board","board",-1907017633),board_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"generate-board-failure","generate-board-failure",-944342640),(function (db,p__32283){
var vec__32284 = p__32283;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32284,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32284,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"error","error",-978969032)], null),error);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"set-scenario","set-scenario",-2002175398),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.events.persist_db], null),(function (db,p__32290){
var vec__32291 = p__32290;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32291,(0),null);
var scenario_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32291,(1),null);
var scenario_config = catan_board.scenarios.registry.get_scenario(scenario_id);
if(cljs.core.truth_(scenario_config)){
return catan_board.events.generate_board_with_fog.cljs$core$IFn$_invoke$arity$variadic(db,scenario_config,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"scenario-id","scenario-id",199208014),scenario_id], 0));
} else {
return db;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"reveal-fog-tile","reveal-fog-tile",-984124702),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.events.persist_db], null),(function (db,p__32294){
var vec__32295 = p__32294;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32295,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32295,(1),null);
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
var G__32300 = db;
var G__32300__$1 = cljs.core.assoc_in(G__32300,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"hexes","hexes",-1419989846),coord,new cljs.core.Keyword(null,"revealed?","revealed?",726959164)], null),true)
;
var G__32300__$2 = cljs.core.assoc_in(G__32300__$1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"hexes","hexes",-1419989846),coord,new cljs.core.Keyword(null,"terrain","terrain",704966005)], null),terrain)
;
var G__32300__$3 = cljs.core.assoc_in(G__32300__$2,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"hexes","hexes",-1419989846),coord,new cljs.core.Keyword(null,"number","number",1570378438)], null),number)
;
var G__32300__$4 = cljs.core.assoc_in(G__32300__$3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"terrain-deck","terrain-deck",834871773)], null),cljs.core.rest(terrain_deck))
;
if((!(is_water_QMARK_))){
return cljs.core.assoc_in(G__32300__$4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"number-deck","number-deck",1297732826)], null),cljs.core.rest(number_deck));
} else {
return G__32300__$4;
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"set-board-scale","set-board-scale",259109878),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.events.persist_db], null),(function (db,p__32301){
var vec__32302 = p__32301;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32302,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32302,(1),null);
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"select-token","select-token",436885760),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catan_board.events.persist_db], null),(function (db,p__32310){
var vec__32311 = p__32310;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32311,(0),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32311,(1),null);
var current_selection = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-token-coord","selected-token-coord",1371480460)], null));
if(cljs.core.truth_(current_selection)){
var hexes = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"hexes","hexes",-1419989846)], null));
var fog_state_hexes = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"hexes","hexes",-1419989846)], null));
var hex1_idx = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__32307_SHARP_,p2__32306_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(p2__32306_SHARP_),current_selection)){
return p1__32307_SHARP_;
} else {
return null;
}
}),hexes));
var hex2_idx = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__32309_SHARP_,p2__32308_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(p2__32308_SHARP_),coord)){
return p1__32309_SHARP_;
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
var G__32314 = db;
var G__32314__$1 = cljs.core.assoc_in(G__32314,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"hexes","hexes",-1419989846),hex1_idx,new cljs.core.Keyword(null,"number","number",1570378438)], null),num2)
;
var G__32314__$2 = cljs.core.assoc_in(G__32314__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"hexes","hexes",-1419989846),hex2_idx,new cljs.core.Keyword(null,"number","number",1570378438)], null),num1)
;
var G__32314__$3 = (cljs.core.truth_(is_fog1_revealed_QMARK_)?cljs.core.assoc_in(G__32314__$2,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"hexes","hexes",-1419989846),new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(hex1),new cljs.core.Keyword(null,"number","number",1570378438)], null),num2):G__32314__$2);
var G__32314__$4 = (cljs.core.truth_(is_fog2_revealed_QMARK_)?cljs.core.assoc_in(G__32314__$3,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"fog-state","fog-state",-562317010),new cljs.core.Keyword(null,"hexes","hexes",-1419989846),new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(hex2),new cljs.core.Keyword(null,"number","number",1570378438)], null),num1):G__32314__$3);
return cljs.core.assoc_in(G__32314__$4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-token-coord","selected-token-coord",1371480460)], null),null);

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
