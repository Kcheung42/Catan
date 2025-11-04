goog.provide('catan_board.utils.resources');
/**
 * All resource types in the base Catan game
 */
catan_board.utils.resources.resource_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ore","ore",-1419191389),null,new cljs.core.Keyword(null,"brick","brick",895065736),null,new cljs.core.Keyword(null,"desert","desert",-559764082),null,new cljs.core.Keyword(null,"wood","wood",149241168),null,new cljs.core.Keyword(null,"wheat","wheat",783520466),null,new cljs.core.Keyword(null,"sheep","sheep",-1409901353),null], null), null);
/**
 * Color mapping for each resource type (optimized for projector display)
 */
catan_board.utils.resources.resource_colors = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"wood","wood",149241168),"#487748",new cljs.core.Keyword(null,"brick","brick",895065736),"#b8543c",new cljs.core.Keyword(null,"wheat","wheat",783520466),"#e8c547",new cljs.core.Keyword(null,"sheep","sheep",-1409901353),"#9bcd6f",new cljs.core.Keyword(null,"ore","ore",-1419191389),"#7c7c7c",new cljs.core.Keyword(null,"desert","desert",-559764082),"#d4c4a0"], null);
/**
 * Standard Catan resource distribution (19 total hexes)
 */
catan_board.utils.resources.standard_distribution = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"wood","wood",149241168),(4),new cljs.core.Keyword(null,"brick","brick",895065736),(3),new cljs.core.Keyword(null,"wheat","wheat",783520466),(4),new cljs.core.Keyword(null,"sheep","sheep",-1409901353),(4),new cljs.core.Keyword(null,"ore","ore",-1419191389),(3),new cljs.core.Keyword(null,"desert","desert",-559764082),(1)], null);
/**
 * Creates a shuffled deck of resources based on standard distribution
 */
catan_board.utils.resources.create_resource_deck = (function catan_board$utils$resources$create_resource_deck(){
var deck = cljs.core.flatten((function (){var iter__5480__auto__ = (function catan_board$utils$resources$create_resource_deck_$_iter__26208(s__26209){
return (new cljs.core.LazySeq(null,(function (){
var s__26209__$1 = s__26209;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__26209__$1);
if(temp__5804__auto__){
var s__26209__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26209__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__26209__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__26211 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__26210 = (0);
while(true){
if((i__26210 < size__5479__auto__)){
var vec__26217 = cljs.core._nth(c__5478__auto__,i__26210);
var resource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26217,(0),null);
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26217,(1),null);
cljs.core.chunk_append(b__26211,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(count,resource));

var G__26247 = (i__26210 + (1));
i__26210 = G__26247;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26211),catan_board$utils$resources$create_resource_deck_$_iter__26208(cljs.core.chunk_rest(s__26209__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26211),null);
}
} else {
var vec__26228 = cljs.core.first(s__26209__$2);
var resource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26228,(0),null);
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26228,(1),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(count,resource),catan_board$utils$resources$create_resource_deck_$_iter__26208(cljs.core.rest(s__26209__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(catan_board.utils.resources.standard_distribution);
})());
return cljs.core.shuffle(deck);
});
/**
 * Returns the color for a given resource type
 */
catan_board.utils.resources.get_resource_color = (function catan_board$utils$resources$get_resource_color(resource){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(catan_board.utils.resources.resource_colors,resource,"#d4c4a0");
});

//# sourceMappingURL=catan_board.utils.resources.js.map
