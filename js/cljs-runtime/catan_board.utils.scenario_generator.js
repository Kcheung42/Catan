goog.provide('catan_board.utils.scenario_generator');
/**
 * Creates a shuffled deck of resources from distribution map.
 * Example: {:wood 3 :brick 2} -> [:wood :wood :wood :brick :brick]
 */
catan_board.utils.scenario_generator.shuffle_resources = (function catan_board$utils$scenario_generator$shuffle_resources(resource_distribution){
var resource_deck = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__25780){
var vec__25781 = p__25780;
var resource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25781,(0),null);
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25781,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(count,resource);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_distribution], 0));
return cljs.core.shuffle(cljs.core.vec(resource_deck));
});
/**
 * Creates a shuffled deck of number tokens from distribution.
 * Accepts either:
 * - Vector format: [2 3 4 5 6] - direct list of tokens
 * - Map format: {2 1, 3 2, 4 1} - token value to frequency mapping
 */
catan_board.utils.scenario_generator.shuffle_numbers = (function catan_board$utils$scenario_generator$shuffle_numbers(number_tokens){
if(cljs.core.map_QMARK_(number_tokens)){
return cljs.core.shuffle(cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__25784){
var vec__25785 = p__25784;
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25785,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25785,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(freq,token);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([number_tokens], 0))));
} else {
return cljs.core.shuffle(cljs.core.vec(number_tokens));
}
});
/**
 * Determines hex type (water/fog/terrain) based on coordinate and config.
 */
catan_board.utils.scenario_generator.classify_hex_by_type = (function catan_board$utils$scenario_generator$classify_hex_by_type(coord,p__25788){
var map__25789 = p__25788;
var map__25789__$1 = cljs.core.__destructure_map(map__25789);
var hex_types = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25789__$1,new cljs.core.Keyword(null,"hex-types","hex-types",-1144901913));
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"water","water",-824098213).cljs$core$IFn$_invoke$arity$1(hex_types),coord)){
return new cljs.core.Keyword(null,"water","water",-824098213);
} else {
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"fog","fog",1515389980).cljs$core$IFn$_invoke$arity$1(hex_types),coord)){
return new cljs.core.Keyword(null,"fog","fog",1515389980);
} else {
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"terrain","terrain",704966005).cljs$core$IFn$_invoke$arity$1(hex_types),coord)){
return new cljs.core.Keyword(null,"terrain","terrain",704966005);
} else {
return new cljs.core.Keyword(null,"terrain","terrain",704966005);

}
}
}
});
/**
 * Assigns resource to a hex coordinate, consuming from resource deck.
 */
catan_board.utils.scenario_generator.assign_resource_to_hex = (function catan_board$utils$scenario_generator$assign_resource_to_hex(coord,resource){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"coord","coord",-1453656639),coord,new cljs.core.Keyword(null,"resource","resource",251898836),resource,new cljs.core.Keyword(null,"number","number",1570378438),null], null);
});
/**
 * Assigns number token to hex if it's not a desert, water, or fog.
 */
catan_board.utils.scenario_generator.assign_number_to_hex = (function catan_board$utils$scenario_generator$assign_number_to_hex(hex,number_atom){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"desert","desert",-559764082),new cljs.core.Keyword(null,"resource","resource",251898836).cljs$core$IFn$_invoke$arity$1(hex))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"resource","resource",251898836).cljs$core$IFn$_invoke$arity$1(hex))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fog","fog",1515389980),new cljs.core.Keyword(null,"resource","resource",251898836).cljs$core$IFn$_invoke$arity$1(hex))))))){
return hex;
} else {
var num = cljs.core.first(cljs.core.deref(number_atom));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(number_atom,cljs.core.rest);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hex,new cljs.core.Keyword(null,"number","number",1570378438),num);
}
});
/**
 * Generates a complete board from scenario configuration.
 * 
 * Input: scenario-config map with keys:
 *   - :grid-pattern - row pattern string (e.g., '5-6-7-8-7-6-5')
 *   - :hex-types - {:water #{coords} :fog #{coords} :terrain #{coords}}
 *   - :face-up-distribution - {:resources {...} :number-tokens [...]}
 *   - :harbors - vector of harbor position maps
 * 
 * Output: {:hexes [...] :harbors [...] :metadata {...}}
 * 
 * Process:
 *   1. Generate grid coordinates from pattern
 *   2. Classify each coordinate by type (water/fog/terrain)
 *   3. Assign resources to terrain hexes (shuffled from distribution)
 *   4. Assign number tokens to non-desert terrain hexes (shuffled)
 *   5. Water and fog hexes get their type as resource
 *   6. Return complete board structure
 */
catan_board.utils.scenario_generator.generate_scenario_board = (function catan_board$utils$scenario_generator$generate_scenario_board(p__25800,random_harbor_mode_QMARK_){
var map__25801 = p__25800;
var map__25801__$1 = cljs.core.__destructure_map(map__25801);
var scenario_config = map__25801__$1;
var grid_pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25801__$1,new cljs.core.Keyword(null,"grid-pattern","grid-pattern",-1763214640));
var face_up_distribution = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25801__$1,new cljs.core.Keyword(null,"face-up-distribution","face-up-distribution",1522439387));
var harbors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25801__$1,new cljs.core.Keyword(null,"harbors","harbors",1522363032));
var all_coords = catan_board.utils.hex.generate_grid_from_pattern(grid_pattern);
var classified_coords = cljs.core.group_by((function (p1__25794_SHARP_){
return catan_board.utils.scenario_generator.classify_hex_by_type(p1__25794_SHARP_,scenario_config);
}),all_coords);
var water_coords = cljs.core.get.cljs$core$IFn$_invoke$arity$3(classified_coords,new cljs.core.Keyword(null,"water","water",-824098213),cljs.core.PersistentVector.EMPTY);
var fog_coords = cljs.core.get.cljs$core$IFn$_invoke$arity$3(classified_coords,new cljs.core.Keyword(null,"fog","fog",1515389980),cljs.core.PersistentVector.EMPTY);
var terrain_coords = cljs.core.get.cljs$core$IFn$_invoke$arity$3(classified_coords,new cljs.core.Keyword(null,"terrain","terrain",704966005),all_coords);
var resource_deck = catan_board.utils.scenario_generator.shuffle_resources(new cljs.core.Keyword(null,"resources","resources",1632806811).cljs$core$IFn$_invoke$arity$1(face_up_distribution));
var number_deck = catan_board.utils.scenario_generator.shuffle_numbers(new cljs.core.Keyword(null,"number-tokens","number-tokens",-158048886).cljs$core$IFn$_invoke$arity$1(face_up_distribution));
var water_hexes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__25795_SHARP_){
return catan_board.utils.scenario_generator.assign_resource_to_hex(p1__25795_SHARP_,new cljs.core.Keyword(null,"water","water",-824098213));
}),water_coords);
var fog_hexes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__25796_SHARP_){
return catan_board.utils.scenario_generator.assign_resource_to_hex(p1__25796_SHARP_,new cljs.core.Keyword(null,"fog","fog",1515389980));
}),fog_coords);
var terrain_hexes_with_resources = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(catan_board.utils.scenario_generator.assign_resource_to_hex,terrain_coords,resource_deck);
var number_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(number_deck);
var terrain_hexes_with_numbers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__25798_SHARP_){
return catan_board.utils.scenario_generator.assign_number_to_hex(p1__25798_SHARP_,number_atom);
}),terrain_hexes_with_resources);
var all_hexes = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(water_hexes,fog_hexes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([terrain_hexes_with_numbers], 0)));
var harbor_deck = (cljs.core.truth_(random_harbor_mode_QMARK_)?cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (harbor,new_type){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(harbor,new cljs.core.Keyword(null,"type","type",1174270348),new_type);
}),harbors,cljs.core.shuffle(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),harbors))):harbors);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hexes","hexes",-1419989846),all_hexes,new cljs.core.Keyword(null,"harbors","harbors",1522363032),harbor_deck,new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"generated-at","generated-at",-567727583),(new Date()).toLocaleString(),new cljs.core.Keyword(null,"board-id","board-id",-1767919501),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"scenario-id","scenario-id",199208014),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scenario_config),new cljs.core.Keyword(null,"hex-counts","hex-counts",1162697905),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"water","water",-824098213),cljs.core.count(water_hexes),new cljs.core.Keyword(null,"fog","fog",1515389980),cljs.core.count(fog_hexes),new cljs.core.Keyword(null,"terrain","terrain",704966005),cljs.core.count(terrain_hexes_with_numbers)], null)], null)], null);
});
catan_board.utils.scenario_generator.initialize_fog_number_deck = (function catan_board$utils$scenario_generator$initialize_fog_number_deck(p__25817){
var map__25818 = p__25817;
var map__25818__$1 = cljs.core.__destructure_map(map__25818);
var fog_distribution = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25818__$1,new cljs.core.Keyword(null,"fog-distribution","fog-distribution",792585602));
var number_tokens = new cljs.core.Keyword(null,"number-tokens","number-tokens",-158048886).cljs$core$IFn$_invoke$arity$1(fog_distribution);
return catan_board.utils.scenario_generator.shuffle_numbers(number_tokens);
});
/**
 * Creates initial fog state map for scenario.
 * 
 * Input: scenario-config map with :hex-types {:fog #{coords} ...}
 * 
 * Output: Map of fog coordinates to state:
 *   {[q r] {:revealed? false :terrain nil :number nil}}
 * 
 * All fog hexes start unrevealed with no terrain or number assigned.
 */
catan_board.utils.scenario_generator.initialize_fog_state = (function catan_board$utils$scenario_generator$initialize_fog_state(p__25819){
var map__25820 = p__25819;
var map__25820__$1 = cljs.core.__destructure_map(map__25820);
var hex_types = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25820__$1,new cljs.core.Keyword(null,"hex-types","hex-types",-1144901913));
var fog_distribution = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25820__$1,new cljs.core.Keyword(null,"fog-distribution","fog-distribution",792585602));
var fog_coords = new cljs.core.Keyword(null,"fog","fog",1515389980).cljs$core$IFn$_invoke$arity$2(hex_types,cljs.core.PersistentHashSet.EMPTY);
var resource_deck = cljs.core.shuffle(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__25821){
var vec__25822 = p__25821;
var resource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25822,(0),null);
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25822,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(count,resource);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"resources","resources",1632806811).cljs$core$IFn$_invoke$arity$1(fog_distribution)], 0)));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (coord,terrain){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coord,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"revealed?","revealed?",726959164),false,new cljs.core.Keyword(null,"terrain","terrain",704966005),terrain,new cljs.core.Keyword(null,"number","number",1570378438),null], null)], null);
}),fog_coords,resource_deck));
});

//# sourceMappingURL=catan_board.utils.scenario_generator.js.map
