goog.provide('catan_board.utils.hex');
catan_board.utils.hex.sqrt3 = Math.sqrt((3));
catan_board.utils.hex.hex_directions = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null);
/**
 * Converts axial coordinates [q r] to pixel coordinates [x y] for flat-top hexagons.
 * hex-size is the distance from center to any vertex (radius).
 */
catan_board.utils.hex.axial_to_pixel = (function catan_board$utils$hex$axial_to_pixel(p__19186,hex_size){
var vec__19187 = p__19186;
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19187,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19187,(1),null);
var x = ((hex_size * ((3) / (2))) * q);
var y = (hex_size * (((catan_board.utils.hex.sqrt3 * ((1) / (2))) * q) + (catan_board.utils.hex.sqrt3 * r)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
/**
 * Converts pixel coordinates [x y] back to axial coordinates [q r].
 * Returns rounded axial coordinates.
 */
catan_board.utils.hex.pixel_to_axial = (function catan_board$utils$hex$pixel_to_axial(p__19190,hex_size){
var vec__19191 = p__19190;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19191,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19191,(1),null);
var q = ((((2) / (3)) * x) / hex_size);
var r = ((y - ((catan_board.utils.hex.sqrt3 / (3)) * x)) / (catan_board.utils.hex.sqrt3 * hex_size));
var s = ((- q) - r);
var rq = Math.round(q);
var rr = Math.round(r);
var rs = Math.round(s);
var q_diff = Math.abs((rq - q));
var r_diff = Math.abs((rr - r));
var s_diff = Math.abs((rs - s));
var vec__19194 = (((((q_diff > r_diff)) && ((q_diff > s_diff))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((- rr) - rs),rr], null):(((r_diff > s_diff))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rq,((- rq) - rs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rq,rr], null)
));
var final_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19194,(0),null);
var final_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19194,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [final_q,final_r], null);
});
/**
 * Adds two axial coordinates.
 */
catan_board.utils.hex.hex_add = (function catan_board$utils$hex$hex_add(p__19197,p__19198){
var vec__19199 = p__19197;
var q1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19199,(0),null);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19199,(1),null);
var vec__19202 = p__19198;
var q2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19202,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19202,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(q1 + q2),(r1 + r2)], null);
});
/**
 * Returns the 6 neighboring hexes of the given hex.
 */
catan_board.utils.hex.hex_neighbors = (function catan_board$utils$hex$hex_neighbors(hex){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19205_SHARP_){
return catan_board.utils.hex.hex_add(hex,p1__19205_SHARP_);
}),catan_board.utils.hex.hex_directions);
});
/**
 * Calculates the distance between two hexes in hex steps.
 * Uses cube coordinate distance formula.
 */
catan_board.utils.hex.hex_distance = (function catan_board$utils$hex$hex_distance(p__19206,p__19207){
var vec__19208 = p__19206;
var q1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19208,(0),null);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19208,(1),null);
var vec__19211 = p__19207;
var q2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19211,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19211,(1),null);
var s1 = ((- q1) - r1);
var s2 = ((- q2) - r2);
return (((Math.abs((q1 - q2)) + Math.abs((r1 - r2))) + Math.abs((s1 - s2))) / (2));
});
/**
 * Generates the standard Catan board layout with 20 hexes in a 3-4-5-4-3 pattern.
 * Returns a vector of axial coordinates.
 */
catan_board.utils.hex.generate_catan_grid = (function catan_board$utils$hex$generate_catan_grid(){
var coords = (function (){var iter__5480__auto__ = (function catan_board$utils$hex$generate_catan_grid_$_iter__19214(s__19215){
return (new cljs.core.LazySeq(null,(function (){
var s__19215__$1 = s__19215;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__19215__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var q = cljs.core.first(xs__6360__auto__);
var iterys__5476__auto__ = ((function (s__19215__$1,q,xs__6360__auto__,temp__5804__auto__){
return (function catan_board$utils$hex$generate_catan_grid_$_iter__19214_$_iter__19216(s__19217){
return (new cljs.core.LazySeq(null,((function (s__19215__$1,q,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__19217__$1 = s__19217;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__19217__$1);
if(temp__5804__auto____$1){
var s__19217__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19217__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__19217__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__19219 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__19218 = (0);
while(true){
if((i__19218 < size__5479__auto__)){
var r = cljs.core._nth(c__5478__auto__,i__19218);
var s = ((- q) - r);
if((((s >= (-2))) && ((s <= (2))))){
cljs.core.chunk_append(b__19219,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,r], null));

var G__19235 = (i__19218 + (1));
i__19218 = G__19235;
continue;
} else {
var G__19236 = (i__19218 + (1));
i__19218 = G__19236;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19219),catan_board$utils$hex$generate_catan_grid_$_iter__19214_$_iter__19216(cljs.core.chunk_rest(s__19217__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19219),null);
}
} else {
var r = cljs.core.first(s__19217__$2);
var s = ((- q) - r);
if((((s >= (-2))) && ((s <= (2))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,r], null),catan_board$utils$hex$generate_catan_grid_$_iter__19214_$_iter__19216(cljs.core.rest(s__19217__$2)));
} else {
var G__19237 = cljs.core.rest(s__19217__$2);
s__19217__$1 = G__19237;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__19215__$1,q,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__19215__$1,q,xs__6360__auto__,temp__5804__auto__))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((-2),(3))));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,catan_board$utils$hex$generate_catan_grid_$_iter__19214(cljs.core.rest(s__19215__$1)));
} else {
var G__19238 = cljs.core.rest(s__19215__$1);
s__19215__$1 = G__19238;
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
 * Calculates the 6 vertex points of a flat-top hexagon.
 * Returns a vector of [x y] coordinates relative to the hex center.
 * Vertices are ordered clockwise starting from the rightmost point.
 */
catan_board.utils.hex.hex_vertices = (function catan_board$utils$hex$hex_vertices(p__19220,hex_size){
var vec__19221 = p__19220;
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19221,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19221,(1),null);
var vec__19224 = catan_board.utils.hex.axial_to_pixel(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,r], null),hex_size);
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19224,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19224,(1),null);
var iter__5480__auto__ = (function catan_board$utils$hex$hex_vertices_$_iter__19227(s__19228){
return (new cljs.core.LazySeq(null,(function (){
var s__19228__$1 = s__19228;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__19228__$1);
if(temp__5804__auto__){
var s__19228__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19228__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__19228__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__19230 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__19229 = (0);
while(true){
if((i__19229 < size__5479__auto__)){
var i = cljs.core._nth(c__5478__auto__,i__19229);
cljs.core.chunk_append(b__19230,(function (){var angle = ((Math.PI / (3)) * i);
var x = (cx + (hex_size * Math.cos(angle)));
var y = (cy + (hex_size * Math.sin(angle)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
})());

var G__19239 = (i__19229 + (1));
i__19229 = G__19239;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19230),catan_board$utils$hex$hex_vertices_$_iter__19227(cljs.core.chunk_rest(s__19228__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19230),null);
}
} else {
var i = cljs.core.first(s__19228__$2);
return cljs.core.cons((function (){var angle = ((Math.PI / (3)) * i);
var x = (cx + (hex_size * Math.cos(angle)));
var y = (cy + (hex_size * Math.sin(angle)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
})(),catan_board$utils$hex$hex_vertices_$_iter__19227(cljs.core.rest(s__19228__$2)));
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
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19231){
var vec__19232 = p__19231;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19232,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19232,(1),null);
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
