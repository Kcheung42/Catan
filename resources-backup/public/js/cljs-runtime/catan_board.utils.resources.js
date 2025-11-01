goog.provide('catan_board.utils.resources');
/**
 * All resource types in the base Catan game
 */
catan_board.utils.resources.resource_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ore","ore",-1419191389),null,new cljs.core.Keyword(null,"brick","brick",895065736),null,new cljs.core.Keyword(null,"desert","desert",-559764082),null,new cljs.core.Keyword(null,"wood","wood",149241168),null,new cljs.core.Keyword(null,"wheat","wheat",783520466),null,new cljs.core.Keyword(null,"sheep","sheep",-1409901353),null], null), null);
/**
 * Color mapping for each resource type (optimized for projector display)
 */
catan_board.utils.resources.resource_colors = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"wood","wood",149241168),"#2d5016",new cljs.core.Keyword(null,"brick","brick",895065736),"#b8543c",new cljs.core.Keyword(null,"wheat","wheat",783520466),"#e8c547",new cljs.core.Keyword(null,"sheep","sheep",-1409901353),"#9bcd6f",new cljs.core.Keyword(null,"ore","ore",-1419191389),"#7c7c7c",new cljs.core.Keyword(null,"desert","desert",-559764082),"#d4c4a0"], null);
/**
 * Standard Catan resource distribution (19 total hexes)
 */
catan_board.utils.resources.standard_distribution = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"wood","wood",149241168),(4),new cljs.core.Keyword(null,"brick","brick",895065736),(3),new cljs.core.Keyword(null,"wheat","wheat",783520466),(4),new cljs.core.Keyword(null,"sheep","sheep",-1409901353),(4),new cljs.core.Keyword(null,"ore","ore",-1419191389),(3),new cljs.core.Keyword(null,"desert","desert",-559764082),(1)], null);
/**
 * Creates a shuffled deck of resources based on standard distribution
 */
catan_board.utils.resources.create_resource_deck = (function catan_board$utils$resources$create_resource_deck(){
var deck = cljs.core.flatten((function (){var iter__5480__auto__ = (function catan_board$utils$resources$create_resource_deck_$_iter__13666(s__13667){
return (new cljs.core.LazySeq(null,(function (){
var s__13667__$1 = s__13667;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13667__$1);
if(temp__5804__auto__){
var s__13667__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13667__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13667__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13669 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13668 = (0);
while(true){
if((i__13668 < size__5479__auto__)){
var vec__13670 = cljs.core._nth(c__5478__auto__,i__13668);
var resource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13670,(0),null);
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13670,(1),null);
cljs.core.chunk_append(b__13669,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(count,resource));

var G__13676 = (i__13668 + (1));
i__13668 = G__13676;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13669),catan_board$utils$resources$create_resource_deck_$_iter__13666(cljs.core.chunk_rest(s__13667__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13669),null);
}
} else {
var vec__13673 = cljs.core.first(s__13667__$2);
var resource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13673,(0),null);
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13673,(1),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(count,resource),catan_board$utils$resources$create_resource_deck_$_iter__13666(cljs.core.rest(s__13667__$2)));
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
