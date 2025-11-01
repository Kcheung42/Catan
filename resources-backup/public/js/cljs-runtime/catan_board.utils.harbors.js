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
 * - :direction - which edge of the hex (0=E, 1=NE, 2=NW, 3=W, 4=SW, 5=SE)
 */
catan_board.utils.harbors.standard_harbor_positions = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"land-hex","land-hex",151922960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.Keyword(null,"direction","direction",-633359395),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"land-hex","land-hex",151922960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(2)], null),new cljs.core.Keyword(null,"direction","direction",-633359395),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"land-hex","land-hex",151922960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.Keyword(null,"direction","direction",-633359395),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"land-hex","land-hex",151922960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.Keyword(null,"direction","direction",-633359395),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"land-hex","land-hex",151922960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(-1)], null),new cljs.core.Keyword(null,"direction","direction",-633359395),(5)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"land-hex","land-hex",151922960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-2)], null),new cljs.core.Keyword(null,"direction","direction",-633359395),(5)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"land-hex","land-hex",151922960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-2)], null),new cljs.core.Keyword(null,"direction","direction",-633359395),(4)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"land-hex","land-hex",151922960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(0)], null),new cljs.core.Keyword(null,"direction","direction",-633359395),(3)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"land-hex","land-hex",151922960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(1)], null),new cljs.core.Keyword(null,"direction","direction",-633359395),(2)], null)], null);
/**
 * Creates a shuffled deck of harbor types based on standard distribution
 */
catan_board.utils.harbors.create_harbor_deck = (function catan_board$utils$harbors$create_harbor_deck(){
var deck = cljs.core.flatten((function (){var iter__5480__auto__ = (function catan_board$utils$harbors$create_harbor_deck_$_iter__14226(s__14227){
return (new cljs.core.LazySeq(null,(function (){
var s__14227__$1 = s__14227;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14227__$1);
if(temp__5804__auto__){
var s__14227__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14227__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__14227__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__14229 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__14228 = (0);
while(true){
if((i__14228 < size__5479__auto__)){
var vec__14230 = cljs.core._nth(c__5478__auto__,i__14228);
var harbor_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14230,(0),null);
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14230,(1),null);
cljs.core.chunk_append(b__14229,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(count,harbor_type));

var G__14237 = (i__14228 + (1));
i__14228 = G__14237;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14229),catan_board$utils$harbors$create_harbor_deck_$_iter__14226(cljs.core.chunk_rest(s__14227__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14229),null);
}
} else {
var vec__14233 = cljs.core.first(s__14227__$2);
var harbor_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14233,(0),null);
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14233,(1),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(count,harbor_type),catan_board$utils$harbors$create_harbor_deck_$_iter__14226(cljs.core.rest(s__14227__$2)));
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
 * Returns the color for a harbor based on its type
 */
catan_board.utils.harbors.get_harbor_color = (function catan_board$utils$harbors$get_harbor_color(harbor_type){
var G__14236 = harbor_type;
var G__14236__$1 = (((G__14236 instanceof cljs.core.Keyword))?G__14236.fqn:null);
switch (G__14236__$1) {
case "generic":
return "#8b7355";

break;
case "wood":
return "#2d5016";

break;
case "brick":
return "#b8543c";

break;
case "wheat":
return "#e8c547";

break;
case "sheep":
return "#9bcd6f";

break;
case "ore":
return "#7c7c7c";

break;
default:
return "#8b7355";

}
});

//# sourceMappingURL=catan_board.utils.harbors.js.map
