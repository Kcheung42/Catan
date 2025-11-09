goog.provide('catan_board.utils.harbors');
/**
 * Types of harbors in Catan
 */
catan_board.utils.harbors.harbor_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ore","ore",-1419191389),null,new cljs.core.Keyword(null,"brick","brick",895065736),null,new cljs.core.Keyword(null,"wood","wood",149241168),null,new cljs.core.Keyword(null,"wheat","wheat",783520466),null,new cljs.core.Keyword(null,"generic","generic",-1245036524),null,new cljs.core.Keyword(null,"sheep","sheep",-1409901353),null], null), null);
/**
 * Standard Catan harbor distribution (9 total harbors)
 */
catan_board.utils.harbors.standard_harbor_distribution = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"generic","generic",-1245036524),(4),new cljs.core.Keyword(null,"wood","wood",149241168),(1),new cljs.core.Keyword(null,"brick","brick",895065736),(1),new cljs.core.Keyword(null,"wheat","wheat",783520466),(1),new cljs.core.Keyword(null,"sheep","sheep",-1409901353),(1),new cljs.core.Keyword(null,"ore","ore",-1419191389),(1)], null);
/**
 * Standard harbor positions on a Catan board.
 * Each harbor has:
 * - :land-hex - the land hex coordinate it's adjacent to
 * - :direction - which edge of the hex (0=N, 1=NE, 2=SE, 3=S, 4=SW, 5=NW)
 */
catan_board.utils.harbors.standard_harbor_positions = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"land-hex","land-hex",151922960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(2)], null),new cljs.core.Keyword(null,"direction","direction",-633359395),catan_board.utils.hex.DIRECTION_SW], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"land-hex","land-hex",151922960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(2)], null),new cljs.core.Keyword(null,"direction","direction",-633359395),catan_board.utils.hex.DIRECTION_S], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"land-hex","land-hex",151922960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.Keyword(null,"direction","direction",-633359395),catan_board.utils.hex.DIRECTION_S], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"land-hex","land-hex",151922960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.Keyword(null,"direction","direction",-633359395),catan_board.utils.hex.DIRECTION_SE], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"land-hex","land-hex",151922960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(-1)], null),new cljs.core.Keyword(null,"direction","direction",-633359395),catan_board.utils.hex.DIRECTION_NE], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"land-hex","land-hex",151922960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-2)], null),new cljs.core.Keyword(null,"direction","direction",-633359395),catan_board.utils.hex.DIRECTION_NE], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"land-hex","land-hex",151922960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-2)], null),new cljs.core.Keyword(null,"direction","direction",-633359395),catan_board.utils.hex.DIRECTION_N], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"land-hex","land-hex",151922960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.Keyword(null,"direction","direction",-633359395),catan_board.utils.hex.DIRECTION_NW], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"land-hex","land-hex",151922960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(1)], null),new cljs.core.Keyword(null,"direction","direction",-633359395),catan_board.utils.hex.DIRECTION_NW], null)], null);
/**
 * Creates a shuffled deck of harbor types based on standard distribution
 */
catan_board.utils.harbors.create_harbor_deck = (function catan_board$utils$harbors$create_harbor_deck(){
var deck = cljs.core.flatten((function (){var iter__5480__auto__ = (function catan_board$utils$harbors$create_harbor_deck_$_iter__33816(s__33817){
return (new cljs.core.LazySeq(null,(function (){
var s__33817__$1 = s__33817;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33817__$1);
if(temp__5804__auto__){
var s__33817__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33817__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__33817__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__33819 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__33818 = (0);
while(true){
if((i__33818 < size__5479__auto__)){
var vec__33822 = cljs.core._nth(c__5478__auto__,i__33818);
var harbor_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33822,(0),null);
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33822,(1),null);
cljs.core.chunk_append(b__33819,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(count,harbor_type));

var G__33846 = (i__33818 + (1));
i__33818 = G__33846;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33819),catan_board$utils$harbors$create_harbor_deck_$_iter__33816(cljs.core.chunk_rest(s__33817__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33819),null);
}
} else {
var vec__33831 = cljs.core.first(s__33817__$2);
var harbor_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33831,(0),null);
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33831,(1),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(count,harbor_type),catan_board$utils$harbors$create_harbor_deck_$_iter__33816(cljs.core.rest(s__33817__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(catan_board.utils.harbors.standard_harbor_distribution);
})());
return cljs.core.shuffle(deck);
});
/**
 * Assigns harbor types to the standard harbor positions
 */
catan_board.utils.harbors.assign_harbors = (function catan_board$utils$harbors$assign_harbors(){
var harbor_deck = catan_board.utils.harbors.create_harbor_deck();
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (position,harbor_type){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(position,new cljs.core.Keyword(null,"type","type",1174270348),harbor_type);
}),catan_board.utils.harbors.standard_harbor_positions,harbor_deck);
});
/**
 * Returns the trade ratio for a harbor type (2 for specific, 3 for generic)
 */
catan_board.utils.harbors.get_harbor_ratio = (function catan_board$utils$harbors$get_harbor_ratio(harbor_type){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(harbor_type,new cljs.core.Keyword(null,"generic","generic",-1245036524))){
return (3);
} else {
return (2);
}
});
/**
 * Returns the color for a harbor - all harbors are ocean blue
 */
catan_board.utils.harbors.get_harbor_color = (function catan_board$utils$harbors$get_harbor_color(harbor_type){
return "#1e88e5";
});

//# sourceMappingURL=catan_board.utils.harbors.js.map
