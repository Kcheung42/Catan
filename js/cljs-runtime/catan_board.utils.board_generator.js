goog.provide('catan_board.utils.board_generator');
/**
 * Returns the axial coordinates of all neighbors of a hex at [q r]
 */
catan_board.utils.board_generator.hex_neighbors = (function catan_board$utils$board_generator$hex_neighbors(p__21524){
var vec__21525 = p__21524;
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21525,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21525,(1),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(q + (1)),r], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(q - (1)),r], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,(r + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,(r - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(q + (1)),(r - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(q - (1)),(r + (1))], null)], null);
});
/**
 * Checks if any two hexes with red numbers (6 or 8) are adjacent
 */
catan_board.utils.board_generator.has_adjacent_red_numbers_QMARK_ = (function catan_board$utils$board_generator$has_adjacent_red_numbers_QMARK_(hexes){
var red_hexes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__21529_SHARP_){
return catan_board.utils.numbers.is_red_number_QMARK_(new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__21529_SHARP_));
}),hexes);
var red_coords = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"coord","coord",-1453656639),red_hexes));
return cljs.core.some((function (hex){
var neighbors = catan_board.utils.board_generator.hex_neighbors(new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(hex));
var neighbor_coords = cljs.core.set(neighbors);
return cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(red_coords,neighbor_coords));
}),red_hexes);
});
/**
 * Assigns resources to hex coordinates randomly
 */
catan_board.utils.board_generator.assign_resources = (function catan_board$utils$board_generator$assign_resources(coords){
var resource_deck = catan_board.utils.resources.create_resource_deck();
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (coord,resource){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"coord","coord",-1453656639),coord,new cljs.core.Keyword(null,"resource","resource",251898836),resource,new cljs.core.Keyword(null,"number","number",1570378438),null], null);
}),coords,resource_deck);
});
/**
 * Assigns numbers to hexes (skipping desert)
 */
catan_board.utils.board_generator.assign_numbers = (function catan_board$utils$board_generator$assign_numbers(hexes){
var number_deck = catan_board.utils.numbers.create_number_deck();
var number_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(number_deck);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (hex){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"desert","desert",-559764082),new cljs.core.Keyword(null,"resource","resource",251898836).cljs$core$IFn$_invoke$arity$1(hex))){
return hex;
} else {
var num = cljs.core.first(cljs.core.deref(number_atom));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(number_atom,cljs.core.rest);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hex,new cljs.core.Keyword(null,"number","number",1570378438),num);
}
}),hexes);
});
/**
 * Generates a complete Catan board with random resource and number placement.
 * If tournament-mode? is true, ensures no adjacent red numbers (6 & 8)
 */
catan_board.utils.board_generator.generate_board = (function catan_board$utils$board_generator$generate_board(scenario_config,tournament_mode_QMARK_,random_harbor_mode_QMARK_){
var attempts = (0);
var max_attempts = (100);
while(true){
if((attempts >= max_attempts)){
return catan_board.utils.scenario_generator.generate_scenario_board(scenario_config,random_harbor_mode_QMARK_);
} else {
var new_board = catan_board.utils.scenario_generator.generate_scenario_board(scenario_config,random_harbor_mode_QMARK_);
var hexes = new cljs.core.Keyword(null,"hexes","hexes",-1419989846).cljs$core$IFn$_invoke$arity$1(new_board);
if(((cljs.core.not(tournament_mode_QMARK_)) || (cljs.core.not(catan_board.utils.board_generator.has_adjacent_red_numbers_QMARK_(hexes))))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(new_board,new cljs.core.Keyword(null,"metadata","metadata",1799301597),((function (attempts,max_attempts,new_board,hexes){
return (function (p1__21534_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__21534_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tournament-mode","tournament-mode",1600337077),tournament_mode_QMARK_,new cljs.core.Keyword(null,"attempts","attempts",1024246729),(attempts + (1))], null)], 0));
});})(attempts,max_attempts,new_board,hexes))
);
} else {
var G__21563 = (attempts + (1));
var G__21564 = max_attempts;
attempts = G__21563;
max_attempts = G__21564;
continue;
}
}
break;
}
});

//# sourceMappingURL=catan_board.utils.board_generator.js.map
