goog.provide('catan_board.utils.hex');
catan_board.utils.hex.path_color = "#d4d4d4";
catan_board.utils.hex.sqrt3 = Math.sqrt((3));
catan_board.utils.hex.DIRECTION_S = (0);
catan_board.utils.hex.DIRECTION_SE = (1);
catan_board.utils.hex.DIRECTION_NE = (2);
catan_board.utils.hex.DIRECTION_N = (3);
catan_board.utils.hex.DIRECTION_NW = (4);
catan_board.utils.hex.DIRECTION_SW = (5);
catan_board.utils.hex.direction_names = cljs.core.PersistentArrayMap.createAsIfByAssoc([catan_board.utils.hex.DIRECTION_N,"North",catan_board.utils.hex.DIRECTION_NE,"Northeast",catan_board.utils.hex.DIRECTION_SE,"Southeast",catan_board.utils.hex.DIRECTION_S,"South",catan_board.utils.hex.DIRECTION_SW,"Southwest",catan_board.utils.hex.DIRECTION_NW,"Northwest"]);
catan_board.utils.hex.hex_directions = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null);
/**
 * Converts axial coordinates [q r] to pixel coordinates [x y] for flat-top hexagons.
 * hex-size is the distance from center to any vertex (radius).
 */
catan_board.utils.hex.axial_to_pixel = (function catan_board$utils$hex$axial_to_pixel(p__31698,hex_size){
var vec__31699 = p__31698;
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31699,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31699,(1),null);
var x = ((hex_size * ((3) / (2))) * q);
var y = (hex_size * (((catan_board.utils.hex.sqrt3 * ((1) / (2))) * q) + (catan_board.utils.hex.sqrt3 * r)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
/**
 * Converts pixel coordinates [x y] back to axial coordinates [q r].
 * Returns rounded axial coordinates.
 */
catan_board.utils.hex.pixel_to_axial = (function catan_board$utils$hex$pixel_to_axial(p__31702,hex_size){
var vec__31703 = p__31702;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31703,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31703,(1),null);
var q = ((((2) / (3)) * x) / hex_size);
var r = ((y - ((catan_board.utils.hex.sqrt3 / (3)) * x)) / (catan_board.utils.hex.sqrt3 * hex_size));
var s = ((- q) - r);
var rq = Math.round(q);
var rr = Math.round(r);
var rs = Math.round(s);
var q_diff = Math.abs((rq - q));
var r_diff = Math.abs((rr - r));
var s_diff = Math.abs((rs - s));
var vec__31706 = (((((q_diff > r_diff)) && ((q_diff > s_diff))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((- rr) - rs),rr], null):(((r_diff > s_diff))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rq,((- rq) - rs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rq,rr], null)
));
var final_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31706,(0),null);
var final_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31706,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [final_q,final_r], null);
});
/**
 * Adds two axial coordinates.
 */
catan_board.utils.hex.hex_add = (function catan_board$utils$hex$hex_add(p__31709,p__31710){
var vec__31711 = p__31709;
var q1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31711,(0),null);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31711,(1),null);
var vec__31714 = p__31710;
var q2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31714,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31714,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(q1 + q2),(r1 + r2)], null);
});
/**
 * Returns the 6 neighboring hexes of the given hex.
 */
catan_board.utils.hex.hex_neighbors = (function catan_board$utils$hex$hex_neighbors(hex){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31717_SHARP_){
return catan_board.utils.hex.hex_add(hex,p1__31717_SHARP_);
}),catan_board.utils.hex.hex_directions);
});
/**
 * Calculates the distance between two hexes in hex steps.
 * Uses cube coordinate distance formula.
 */
catan_board.utils.hex.hex_distance = (function catan_board$utils$hex$hex_distance(p__31718,p__31719){
var vec__31720 = p__31718;
var q1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31720,(0),null);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31720,(1),null);
var vec__31723 = p__31719;
var q2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31723,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31723,(1),null);
var s1 = ((- q1) - r1);
var s2 = ((- q2) - r2);
return (((Math.abs((q1 - q2)) + Math.abs((r1 - r2))) + Math.abs((s1 - s2))) / (2));
});
/**
 * Generates the standard Catan board layout with 19 hexes in a 3-4-5-4-3 pattern.
 * Returns a vector of axial coordinates.
 */
catan_board.utils.hex.generate_catan_grid = (function catan_board$utils$hex$generate_catan_grid(){
var coords = (function (){var iter__5480__auto__ = (function catan_board$utils$hex$generate_catan_grid_$_iter__31726(s__31727){
return (new cljs.core.LazySeq(null,(function (){
var s__31727__$1 = s__31727;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__31727__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var q = cljs.core.first(xs__6360__auto__);
var iterys__5476__auto__ = ((function (s__31727__$1,q,xs__6360__auto__,temp__5804__auto__){
return (function catan_board$utils$hex$generate_catan_grid_$_iter__31726_$_iter__31728(s__31729){
return (new cljs.core.LazySeq(null,((function (s__31727__$1,q,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__31729__$1 = s__31729;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__31729__$1);
if(temp__5804__auto____$1){
var s__31729__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__31729__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__31729__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__31731 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__31730 = (0);
while(true){
if((i__31730 < size__5479__auto__)){
var r = cljs.core._nth(c__5478__auto__,i__31730);
var s = ((- q) - r);
if((((s >= (-2))) && ((s <= (2))))){
cljs.core.chunk_append(b__31731,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,r], null));

var G__31756 = (i__31730 + (1));
i__31730 = G__31756;
continue;
} else {
var G__31757 = (i__31730 + (1));
i__31730 = G__31757;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31731),catan_board$utils$hex$generate_catan_grid_$_iter__31726_$_iter__31728(cljs.core.chunk_rest(s__31729__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31731),null);
}
} else {
var r = cljs.core.first(s__31729__$2);
var s = ((- q) - r);
if((((s >= (-2))) && ((s <= (2))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,r], null),catan_board$utils$hex$generate_catan_grid_$_iter__31726_$_iter__31728(cljs.core.rest(s__31729__$2)));
} else {
var G__31758 = cljs.core.rest(s__31729__$2);
s__31729__$1 = G__31758;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__31727__$1,q,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__31727__$1,q,xs__6360__auto__,temp__5804__auto__))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((-2),(3))));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,catan_board$utils$hex$generate_catan_grid_$_iter__31726(cljs.core.rest(s__31727__$1)));
} else {
var G__31759 = cljs.core.rest(s__31727__$1);
s__31727__$1 = G__31759;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((-2),(3)));
})();
return cljs.core.vec(coords);
});
/**
 * Generates a hex grid from a column pattern string like '5-6-7-8-7-6-5'.
 * Returns a vector of axial coordinates [q r] centered on the origin.
 * 
 * The pattern string specifies the number of hexes in each column from left to right.
 * Uses cube coordinate constraints (q + r + s = 0) to create a symmetrical hexagonal grid.
 * Left columns extend toward positive r, right columns extend toward negative r.
 * 
 * Example: '5-6-7-8-7-6-5' generates the Fog Islands 44-hex grid.
 *          '3-4-5-4-3' generates the standard Catan 19-hex grid.
 */
catan_board.utils.hex.generate_grid_from_pattern = (function catan_board$utils$hex$generate_grid_from_pattern(pattern){
var col_sizes = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseInt,clojure.string.split.cljs$core$IFn$_invoke$arity$2(pattern,"-"))));
var num_cols = cljs.core.count(col_sizes);
var max_size = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,col_sizes);
var max_radius = cljs.core.quot(max_size,(2));
var middle_col_index = cljs.core.quot(num_cols,(2));
var middle_col_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(col_sizes,middle_col_index);
var coords = (function (){var iter__5480__auto__ = (function catan_board$utils$hex$generate_grid_from_pattern_$_iter__31732(s__31733){
return (new cljs.core.LazySeq(null,(function (){
var s__31733__$1 = s__31733;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__31733__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__31738 = cljs.core.first(xs__6360__auto__);
var col_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31738,(0),null);
var col_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31738,(1),null);
var q = (col_index - middle_col_index);
var s_min = (((q < (0)))?((((1) + (- max_radius)) + max_size) + (- col_size)):((1) - max_radius));
var s_max = (((q < (0)))?max_radius:((max_radius + (- max_size)) + col_size));
var iterys__5476__auto__ = ((function (s__31733__$1,q,s_min,s_max,vec__31738,col_index,col_size,xs__6360__auto__,temp__5804__auto__,col_sizes,num_cols,max_size,max_radius,middle_col_index,middle_col_value){
return (function catan_board$utils$hex$generate_grid_from_pattern_$_iter__31732_$_iter__31734(s__31735){
return (new cljs.core.LazySeq(null,((function (s__31733__$1,q,s_min,s_max,vec__31738,col_index,col_size,xs__6360__auto__,temp__5804__auto__,col_sizes,num_cols,max_size,max_radius,middle_col_index,middle_col_value){
return (function (){
var s__31735__$1 = s__31735;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__31735__$1);
if(temp__5804__auto____$1){
var s__31735__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__31735__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__31735__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__31737 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__31736 = (0);
while(true){
if((i__31736 < size__5479__auto__)){
var s = cljs.core._nth(c__5478__auto__,i__31736);
var r = ((- q) - s);
cljs.core.chunk_append(b__31737,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,r], null));

var G__31760 = (i__31736 + (1));
i__31736 = G__31760;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31737),catan_board$utils$hex$generate_grid_from_pattern_$_iter__31732_$_iter__31734(cljs.core.chunk_rest(s__31735__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31737),null);
}
} else {
var s = cljs.core.first(s__31735__$2);
var r = ((- q) - s);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,r], null),catan_board$utils$hex$generate_grid_from_pattern_$_iter__31732_$_iter__31734(cljs.core.rest(s__31735__$2)));
}
} else {
return null;
}
break;
}
});})(s__31733__$1,q,s_min,s_max,vec__31738,col_index,col_size,xs__6360__auto__,temp__5804__auto__,col_sizes,num_cols,max_size,max_radius,middle_col_index,middle_col_value))
,null,null));
});})(s__31733__$1,q,s_min,s_max,vec__31738,col_index,col_size,xs__6360__auto__,temp__5804__auto__,col_sizes,num_cols,max_size,max_radius,middle_col_index,middle_col_value))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(((cljs.core.odd_QMARK_(middle_col_value))?(s_min - (1)):s_min),(s_max + (1)))));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,catan_board$utils$hex$generate_grid_from_pattern_$_iter__31732(cljs.core.rest(s__31733__$1)));
} else {
var G__31761 = cljs.core.rest(s__31733__$1);
s__31733__$1 = G__31761;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,col_sizes));
})();
return cljs.core.vec(coords);
});
/**
 * Calculates the 6 vertex points of a flat-top hexagon.
 * Returns a vector of [x y] coordinates relative to the hex center.
 * Vertices are ordered clockwise starting from the rightmost point.
 */
catan_board.utils.hex.hex_vertices = (function catan_board$utils$hex$hex_vertices(p__31741,hex_size){
var vec__31742 = p__31741;
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31742,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31742,(1),null);
var vec__31745 = catan_board.utils.hex.axial_to_pixel(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,r], null),hex_size);
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31745,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31745,(1),null);
var iter__5480__auto__ = (function catan_board$utils$hex$hex_vertices_$_iter__31748(s__31749){
return (new cljs.core.LazySeq(null,(function (){
var s__31749__$1 = s__31749;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__31749__$1);
if(temp__5804__auto__){
var s__31749__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31749__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__31749__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__31751 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__31750 = (0);
while(true){
if((i__31750 < size__5479__auto__)){
var i = cljs.core._nth(c__5478__auto__,i__31750);
cljs.core.chunk_append(b__31751,(function (){var angle = ((Math.PI / (3)) * i);
var x = (cx + (hex_size * Math.cos(angle)));
var y = (cy + (hex_size * Math.sin(angle)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
})());

var G__31762 = (i__31750 + (1));
i__31750 = G__31762;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31751),catan_board$utils$hex$hex_vertices_$_iter__31748(cljs.core.chunk_rest(s__31749__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31751),null);
}
} else {
var i = cljs.core.first(s__31749__$2);
return cljs.core.cons((function (){var angle = ((Math.PI / (3)) * i);
var x = (cx + (hex_size * Math.cos(angle)));
var y = (cy + (hex_size * Math.sin(angle)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
})(),catan_board$utils$hex$hex_vertices_$_iter__31748(cljs.core.rest(s__31749__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((6)));
});
/**
 * Converts a sequence of [x y] vertices to SVG points string format.
 */
catan_board.utils.hex.vertices_to_svg_points = (function catan_board$utils$hex$vertices_to_svg_points(vertices){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31752){
var vec__31753 = p__31752;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31753,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31753,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('');
}),vertices));
});
/**
 * Returns the pixel coordinates [x y] of the hex center.
 */
catan_board.utils.hex.hex_center = (function catan_board$utils$hex$hex_center(coord,hex_size){
return catan_board.utils.hex.axial_to_pixel(coord,hex_size);
});

//# sourceMappingURL=catan_board.utils.hex.js.map
