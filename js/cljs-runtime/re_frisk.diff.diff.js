goog.provide('re_frisk.diff.diff');
re_frisk.diff.diff.mv_keys = (function re_frisk$diff$diff$mv_keys(coll){
if(cljs.core.map_QMARK_(coll)){
return cljs.core.keys(coll);
} else {
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__11058_SHARP_,p2__11057_SHARP_){
if((p2__11057_SHARP_ == null)){
return null;
} else {
return p1__11058_SHARP_;
}
}),coll);
}
});
re_frisk.diff.diff.diff_coll = (function re_frisk$diff$diff$diff_coll(a,b){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5480__auto__ = (function re_frisk$diff$diff$diff_coll_$_iter__11061(s__11062){
return (new cljs.core.LazySeq(null,(function (){
var s__11062__$1 = s__11062;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__11062__$1);
if(temp__5804__auto__){
var s__11062__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11062__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__11062__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__11064 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__11063 = (0);
while(true){
if((i__11063 < size__5479__auto__)){
var key = cljs.core._nth(c__5478__auto__,i__11063);
cljs.core.chunk_append(b__11064,(function (){var val_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,key);
var val_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,key);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val_a,val_b)){
return null;
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = val_a;
if(cljs.core.truth_(and__5000__auto__)){
return val_b;
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(re_frisk.diff.diff.diff.cljs$core$IFn$_invoke$arity$2 ? re_frisk.diff.diff.diff.cljs$core$IFn$_invoke$arity$2(val_a,val_b) : re_frisk.diff.diff.diff.call(null,val_a,val_b))], null);
} else {
if(cljs.core.truth_(val_a)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deleted","deleted",-510100639),val_a], null)], null);
} else {
if(cljs.core.truth_(val_b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,val_b], null);
} else {
return null;
}
}
}
}
})());

var G__11104 = (i__11063 + (1));
i__11063 = G__11104;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11064),re_frisk$diff$diff$diff_coll_$_iter__11061(cljs.core.chunk_rest(s__11062__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11064),null);
}
} else {
var key = cljs.core.first(s__11062__$2);
return cljs.core.cons((function (){var val_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,key);
var val_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,key);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val_a,val_b)){
return null;
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = val_a;
if(cljs.core.truth_(and__5000__auto__)){
return val_b;
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(re_frisk.diff.diff.diff.cljs$core$IFn$_invoke$arity$2 ? re_frisk.diff.diff.diff.cljs$core$IFn$_invoke$arity$2(val_a,val_b) : re_frisk.diff.diff.diff.call(null,val_a,val_b))], null);
} else {
if(cljs.core.truth_(val_a)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deleted","deleted",-510100639),val_a], null)], null);
} else {
if(cljs.core.truth_(val_b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,val_b], null);
} else {
return null;
}
}
}
}
})(),re_frisk$diff$diff$diff_coll_$_iter__11061(cljs.core.rest(s__11062__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(re_frisk.diff.diff.mv_keys(a)),cljs.core.set(re_frisk.diff.diff.mv_keys(b))));
})());
});
re_frisk.diff.diff.diff_set = (function re_frisk$diff$diff$diff_set(a,b){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deleted","deleted",-510100639),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b),new cljs.core.Keyword(null,"added","added",2057651688),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)], null);
});
re_frisk.diff.diff.diff_rest = (function re_frisk$diff$diff$diff_rest(a,b){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",-1633692388),a,new cljs.core.Keyword(null,"after","after",594996914),b], null);
});
re_frisk.diff.diff.diff = (function re_frisk$diff$diff$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return null;
} else {
if(((cljs.core.map_QMARK_(a)) && (cljs.core.map_QMARK_(b)))){
return re_frisk.diff.diff.diff_coll(a,b);
} else {
if(((cljs.core.vector_QMARK_(a)) && (cljs.core.vector_QMARK_(b)))){
return re_frisk.diff.diff.diff_coll(a,b);
} else {
if(((cljs.core.set_QMARK_(a)) && (cljs.core.set_QMARK_(b)))){
return re_frisk.diff.diff.diff_set(a,b);
} else {
return re_frisk.diff.diff.diff_rest(a,b);

}
}
}
}
});

//# sourceMappingURL=re_frisk.diff.diff.js.map
