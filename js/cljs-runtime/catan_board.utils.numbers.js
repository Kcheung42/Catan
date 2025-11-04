goog.provide('catan_board.utils.numbers');
/**
 * Standard Catan number token distribution (18 tokens total, no 7)
 */
catan_board.utils.numbers.standard_number_distribution = cljs.core.PersistentHashMap.fromArrays([(4),(6),(3),(12),(2),(11),(9),(5),(10),(8)],[(2),(2),(2),(1),(1),(2),(2),(2),(2),(2)]);
/**
 * Probability pips for each number (how many ways to roll it with 2 dice)
 */
catan_board.utils.numbers.number_probabilities = cljs.core.PersistentHashMap.fromArrays([(4),(6),(3),(12),(2),(11),(9),(5),(10),(8)],[(3),(5),(2),(1),(1),(2),(4),(4),(3),(5)]);
/**
 * Creates a shuffled deck of numbers based on standard distribution
 */
catan_board.utils.numbers.create_number_deck = (function catan_board$utils$numbers$create_number_deck(){
var deck = cljs.core.flatten((function (){var iter__5480__auto__ = (function catan_board$utils$numbers$create_number_deck_$_iter__26212(s__26213){
return (new cljs.core.LazySeq(null,(function (){
var s__26213__$1 = s__26213;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__26213__$1);
if(temp__5804__auto__){
var s__26213__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26213__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__26213__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__26215 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__26214 = (0);
while(true){
if((i__26214 < size__5479__auto__)){
var vec__26221 = cljs.core._nth(c__5478__auto__,i__26214);
var number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26221,(0),null);
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26221,(1),null);
cljs.core.chunk_append(b__26215,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(count,number));

var G__26248 = (i__26214 + (1));
i__26214 = G__26248;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26215),catan_board$utils$numbers$create_number_deck_$_iter__26212(cljs.core.chunk_rest(s__26213__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26215),null);
}
} else {
var vec__26231 = cljs.core.first(s__26213__$2);
var number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26231,(0),null);
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26231,(1),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(count,number),catan_board$utils$numbers$create_number_deck_$_iter__26212(cljs.core.rest(s__26213__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(catan_board.utils.numbers.standard_number_distribution);
})());
return cljs.core.shuffle(deck);
});
/**
 * Returns true if the number is 6 or 8 (high probability)
 */
catan_board.utils.numbers.is_red_number_QMARK_ = (function catan_board$utils$numbers$is_red_number_QMARK_(n){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(6))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(8))));
});
/**
 * Returns the number of probability pips for a given number
 */
catan_board.utils.numbers.get_probability_pips = (function catan_board$utils$numbers$get_probability_pips(n){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(catan_board.utils.numbers.number_probabilities,n,(0));
});

//# sourceMappingURL=catan_board.utils.numbers.js.map
