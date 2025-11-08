goog.provide('catan_board.custom_editor.subs');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"custom-scenario-editor-mode?","custom-scenario-editor-mode?",1825372298),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"custom-scenario-editor-mode","custom-scenario-editor-mode",-847536203)], null),false);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"editor-hex-selection-mode","editor-hex-selection-mode",869835898),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"editor-hex-selection-mode","editor-hex-selection-mode",869835898)], null),new cljs.core.Keyword(null,"terrain","terrain",704966005));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"harbor-placement-coord","harbor-placement-coord",-1362481537),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"harbor-placement-coord","harbor-placement-coord",-1362481537)], null));
})], 0));
/**
 * Gets the type of a hex from the hex-types structure.
 * hex-types structure: {:water #{coords} :terrain #{coords} :fog #{coords} :village #{coords}}
 * Returns the type keyword (:water/:terrain/:fog/:village) or nil if not found.
 */
catan_board.custom_editor.subs.get_hex_type = (function catan_board$custom_editor$subs$get_hex_type(hex_types,coord){
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"water","water",-824098213).cljs$core$IFn$_invoke$arity$1(hex_types),coord)){
return new cljs.core.Keyword(null,"water","water",-824098213);
} else {
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"fog","fog",1515389980).cljs$core$IFn$_invoke$arity$1(hex_types),coord)){
return new cljs.core.Keyword(null,"fog","fog",1515389980);
} else {
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"village","village",-950412200).cljs$core$IFn$_invoke$arity$1(hex_types),coord)){
return new cljs.core.Keyword(null,"village","village",-950412200);
} else {
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"terrain","terrain",704966005).cljs$core$IFn$_invoke$arity$1(hex_types),coord)){
return new cljs.core.Keyword(null,"terrain","terrain",704966005);
} else {
return null;

}
}
}
}
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"editor-hexes","editor-hexes",-197015636),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714)], null),(function (draft,_){
if(cljs.core.truth_(draft)){
var grid_pattern = new cljs.core.Keyword(null,"grid-pattern","grid-pattern",-1763214640).cljs$core$IFn$_invoke$arity$1(draft);
var hex_types = new cljs.core.Keyword(null,"hex-types","hex-types",-1144901913).cljs$core$IFn$_invoke$arity$1(draft);
if(cljs.core.truth_((function (){var and__5000__auto__ = grid_pattern;
if(cljs.core.truth_(and__5000__auto__)){
return (!(clojure.string.blank_QMARK_(grid_pattern)));
} else {
return and__5000__auto__;
}
})())){
var coords = catan_board.utils.hex.generate_grid_from_pattern(grid_pattern);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (coord){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coord","coord",-1453656639),coord,new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__5002__auto__ = catan_board.custom_editor.subs.get_hex_type(hex_types,coord);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"unassigned","unassigned",-1438879244);
}
})(),new cljs.core.Keyword(null,"resource","resource",251898836),null,new cljs.core.Keyword(null,"number","number",1570378438),null], null);
}),coords);
} else {
return cljs.core.PersistentVector.EMPTY;
}
} else {
return null;
}
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"custom-scenario-validation-errors","custom-scenario-validation-errors",378706080),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"custom-scenario-draft","custom-scenario-draft",-1075652714)], null),(function (draft,_){
if(cljs.core.truth_(draft)){
var map__23009 = draft;
var map__23009__$1 = cljs.core.__destructure_map(map__23009);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23009__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var player_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23009__$1,new cljs.core.Keyword(null,"player-count","player-count",-1323180409));
var grid_pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23009__$1,new cljs.core.Keyword(null,"grid-pattern","grid-pattern",-1763214640));
var hex_types = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23009__$1,new cljs.core.Keyword(null,"hex-types","hex-types",-1144901913));
var face_up_distribution = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23009__$1,new cljs.core.Keyword(null,"face-up-distribution","face-up-distribution",1522439387));
var fog_distribution = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23009__$1,new cljs.core.Keyword(null,"fog-distribution","fog-distribution",792585602));
var errors = cljs.core.PersistentArrayMap.EMPTY;
var errors__$1 = ((clojure.string.blank_QMARK_(name))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(errors,new cljs.core.Keyword(null,"name","name",1843675177),"Scenario name is required"):errors);
var errors__$2 = (((((!(typeof player_count === 'number'))) || ((((player_count < (2))) || ((player_count > (6)))))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(errors__$1,new cljs.core.Keyword(null,"player-count","player-count",-1323180409),"Player count must be between 2 and 6"):errors__$1);
var errors__$3 = ((((clojure.string.blank_QMARK_(grid_pattern)) || (cljs.core.not(cljs.core.re_matches(/^\d+(-\d+)*$/,grid_pattern)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(errors__$2,new cljs.core.Keyword(null,"grid-pattern","grid-pattern",-1763214640),"Grid pattern is invalid (use format: 3-4-5-4-3)"):errors__$2);
var terrain_count = (cljs.core.count(new cljs.core.Keyword(null,"terrain","terrain",704966005).cljs$core$IFn$_invoke$arity$1(hex_types)) + cljs.core.count(new cljs.core.Keyword(null,"village","village",-950412200).cljs$core$IFn$_invoke$arity$1(hex_types)));
var face_up_resources = new cljs.core.Keyword(null,"resources","resources",1632806811).cljs$core$IFn$_invoke$arity$1(face_up_distribution);
var total_resources = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(face_up_resources));
var errors__$4 = (((((terrain_count > (0))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(total_resources,terrain_count))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(errors__$3,new cljs.core.Keyword(null,"resources","resources",1632806811),["Resource distribution mismatch: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(terrain_count)," terrain hexes, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_resources)," resources configured"].join('')):errors__$3);
var face_up_tokens = new cljs.core.Keyword(null,"number-tokens","number-tokens",-158048886).cljs$core$IFn$_invoke$arity$1(face_up_distribution);
var total_tokens = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(face_up_tokens));
var desert_count = cljs.core.get.cljs$core$IFn$_invoke$arity$3(face_up_resources,new cljs.core.Keyword(null,"desert","desert",-559764082),(0));
var expected_tokens = (terrain_count - desert_count);
var errors__$5 = (((((terrain_count > (0))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(total_tokens,expected_tokens))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(errors__$4,new cljs.core.Keyword(null,"tokens","tokens",-818939304),["Number token count mismatch: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_tokens)," expected (terrain minus desert), ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_tokens)," tokens configured"].join('')):errors__$4);
return errors__$5;
} else {
return null;
}
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"custom-scenarios-list","custom-scenarios-list",162575344),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_,___$1){
var custom_scenarios = catan_board.middleware.local_storage.load_from_local_storage.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"custom-scenarios","custom-scenarios",1285667133));
if(cljs.core.map_QMARK_(custom_scenarios)){
return cljs.core.vec(cljs.core.seq(custom_scenarios));
} else {
return cljs.core.PersistentVector.EMPTY;
}
})], 0));

//# sourceMappingURL=catan_board.custom_editor.subs.js.map
