goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__15653){
var map__15654 = p__15653;
var map__15654__$1 = cljs.core.__destructure_map(map__15654);
var m = map__15654__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15654__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15654__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__15661_16057 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15662_16058 = null;
var count__15663_16059 = (0);
var i__15664_16060 = (0);
while(true){
if((i__15664_16060 < count__15663_16059)){
var f_16063 = chunk__15662_16058.cljs$core$IIndexed$_nth$arity$2(null,i__15664_16060);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_16063], 0));


var G__16064 = seq__15661_16057;
var G__16065 = chunk__15662_16058;
var G__16066 = count__15663_16059;
var G__16067 = (i__15664_16060 + (1));
seq__15661_16057 = G__16064;
chunk__15662_16058 = G__16065;
count__15663_16059 = G__16066;
i__15664_16060 = G__16067;
continue;
} else {
var temp__5804__auto___16068 = cljs.core.seq(seq__15661_16057);
if(temp__5804__auto___16068){
var seq__15661_16069__$1 = temp__5804__auto___16068;
if(cljs.core.chunked_seq_QMARK_(seq__15661_16069__$1)){
var c__5525__auto___16071 = cljs.core.chunk_first(seq__15661_16069__$1);
var G__16072 = cljs.core.chunk_rest(seq__15661_16069__$1);
var G__16073 = c__5525__auto___16071;
var G__16074 = cljs.core.count(c__5525__auto___16071);
var G__16075 = (0);
seq__15661_16057 = G__16072;
chunk__15662_16058 = G__16073;
count__15663_16059 = G__16074;
i__15664_16060 = G__16075;
continue;
} else {
var f_16076 = cljs.core.first(seq__15661_16069__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_16076], 0));


var G__16077 = cljs.core.next(seq__15661_16069__$1);
var G__16078 = null;
var G__16079 = (0);
var G__16080 = (0);
seq__15661_16057 = G__16077;
chunk__15662_16058 = G__16078;
count__15663_16059 = G__16079;
i__15664_16060 = G__16080;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_16087 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_16087], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_16087)))?cljs.core.second(arglists_16087):arglists_16087)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__15685_16098 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15686_16099 = null;
var count__15687_16100 = (0);
var i__15688_16101 = (0);
while(true){
if((i__15688_16101 < count__15687_16100)){
var vec__15706_16104 = chunk__15686_16099.cljs$core$IIndexed$_nth$arity$2(null,i__15688_16101);
var name_16105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15706_16104,(0),null);
var map__15709_16106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15706_16104,(1),null);
var map__15709_16107__$1 = cljs.core.__destructure_map(map__15709_16106);
var doc_16108 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15709_16107__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15709_16107__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_16105], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_16109], 0));

if(cljs.core.truth_(doc_16108)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_16108], 0));
} else {
}


var G__16116 = seq__15685_16098;
var G__16117 = chunk__15686_16099;
var G__16118 = count__15687_16100;
var G__16119 = (i__15688_16101 + (1));
seq__15685_16098 = G__16116;
chunk__15686_16099 = G__16117;
count__15687_16100 = G__16118;
i__15688_16101 = G__16119;
continue;
} else {
var temp__5804__auto___16120 = cljs.core.seq(seq__15685_16098);
if(temp__5804__auto___16120){
var seq__15685_16122__$1 = temp__5804__auto___16120;
if(cljs.core.chunked_seq_QMARK_(seq__15685_16122__$1)){
var c__5525__auto___16130 = cljs.core.chunk_first(seq__15685_16122__$1);
var G__16131 = cljs.core.chunk_rest(seq__15685_16122__$1);
var G__16132 = c__5525__auto___16130;
var G__16133 = cljs.core.count(c__5525__auto___16130);
var G__16134 = (0);
seq__15685_16098 = G__16131;
chunk__15686_16099 = G__16132;
count__15687_16100 = G__16133;
i__15688_16101 = G__16134;
continue;
} else {
var vec__15725_16136 = cljs.core.first(seq__15685_16122__$1);
var name_16137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15725_16136,(0),null);
var map__15728_16138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15725_16136,(1),null);
var map__15728_16139__$1 = cljs.core.__destructure_map(map__15728_16138);
var doc_16140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15728_16139__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15728_16139__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_16137], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_16141], 0));

if(cljs.core.truth_(doc_16140)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_16140], 0));
} else {
}


var G__16143 = cljs.core.next(seq__15685_16122__$1);
var G__16144 = null;
var G__16145 = (0);
var G__16146 = (0);
seq__15685_16098 = G__16143;
chunk__15686_16099 = G__16144;
count__15687_16100 = G__16145;
i__15688_16101 = G__16146;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__15736 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__15737 = null;
var count__15738 = (0);
var i__15739 = (0);
while(true){
if((i__15739 < count__15738)){
var role = chunk__15737.cljs$core$IIndexed$_nth$arity$2(null,i__15739);
var temp__5804__auto___16150__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___16150__$1)){
var spec_16151 = temp__5804__auto___16150__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_16151)], 0));
} else {
}


var G__16155 = seq__15736;
var G__16156 = chunk__15737;
var G__16157 = count__15738;
var G__16158 = (i__15739 + (1));
seq__15736 = G__16155;
chunk__15737 = G__16156;
count__15738 = G__16157;
i__15739 = G__16158;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__15736);
if(temp__5804__auto____$1){
var seq__15736__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__15736__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15736__$1);
var G__16160 = cljs.core.chunk_rest(seq__15736__$1);
var G__16161 = c__5525__auto__;
var G__16162 = cljs.core.count(c__5525__auto__);
var G__16163 = (0);
seq__15736 = G__16160;
chunk__15737 = G__16161;
count__15738 = G__16162;
i__15739 = G__16163;
continue;
} else {
var role = cljs.core.first(seq__15736__$1);
var temp__5804__auto___16165__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___16165__$2)){
var spec_16166 = temp__5804__auto___16165__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_16166)], 0));
} else {
}


var G__16167 = cljs.core.next(seq__15736__$1);
var G__16168 = null;
var G__16169 = (0);
var G__16170 = (0);
seq__15736 = G__16167;
chunk__15737 = G__16168;
count__15738 = G__16169;
i__15739 = G__16170;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__15822 = datafied_throwable;
var map__15822__$1 = cljs.core.__destructure_map(map__15822);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15822__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15822__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15822__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__15823 = cljs.core.last(via);
var map__15823__$1 = cljs.core.__destructure_map(map__15823);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15823__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15823__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15823__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__15824 = data;
var map__15824__$1 = cljs.core.__destructure_map(map__15824);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15824__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15824__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15824__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__15825 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__15825__$1 = cljs.core.__destructure_map(map__15825);
var top_data = map__15825__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15825__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__15840 = phase;
var G__15840__$1 = (((G__15840 instanceof cljs.core.Keyword))?G__15840.fqn:null);
switch (G__15840__$1) {
case "read-source":
var map__15844 = data;
var map__15844__$1 = cljs.core.__destructure_map(map__15844);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15844__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15844__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__15845 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__15845__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15845,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__15845);
var G__15845__$2 = (cljs.core.truth_((function (){var fexpr__15856 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__15856.cljs$core$IFn$_invoke$arity$1 ? fexpr__15856.cljs$core$IFn$_invoke$arity$1(source) : fexpr__15856.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__15845__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__15845__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15845__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__15845__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__15864 = top_data;
var G__15864__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15864,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__15864);
var G__15864__$2 = (cljs.core.truth_((function (){var fexpr__15879 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__15879.cljs$core$IFn$_invoke$arity$1 ? fexpr__15879.cljs$core$IFn$_invoke$arity$1(source) : fexpr__15879.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__15864__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__15864__$1);
var G__15864__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15864__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__15864__$2);
var G__15864__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15864__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__15864__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15864__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__15864__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__15882 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15882,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15882,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15882,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15882,(3),null);
var G__15892 = top_data;
var G__15892__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15892,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__15892);
var G__15892__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15892__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__15892__$1);
var G__15892__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15892__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__15892__$2);
var G__15892__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15892__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__15892__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15892__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__15892__$4;
}

break;
case "execution":
var vec__15902 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15902,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15902,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15902,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15902,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__15807_SHARP_){
var or__5002__auto__ = (p1__15807_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__15912 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__15912.cljs$core$IFn$_invoke$arity$1 ? fexpr__15912.cljs$core$IFn$_invoke$arity$1(p1__15807_SHARP_) : fexpr__15912.call(null,p1__15807_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__15923 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__15923__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15923,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__15923);
var G__15923__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15923__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__15923__$1);
var G__15923__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15923__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__15923__$2);
var G__15923__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15923__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__15923__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15923__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__15923__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15840__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__15949){
var map__15951 = p__15949;
var map__15951__$1 = cljs.core.__destructure_map(map__15951);
var triage_data = map__15951__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15951__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15951__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15951__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15951__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15951__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15951__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15951__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15951__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__15957 = phase;
var G__15957__$1 = (((G__15957 instanceof cljs.core.Keyword))?G__15957.fqn:null);
switch (G__15957__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__15963 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__15964 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__15965 = loc;
var G__15966 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15973_16218 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15974_16219 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15975_16220 = true;
var _STAR_print_fn_STAR__temp_val__15976_16221 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15975_16220);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15976_16221);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15944_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__15944_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15974_16219);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15973_16218);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__15963,G__15964,G__15965,G__15966) : format.call(null,G__15963,G__15964,G__15965,G__15966));

break;
case "macroexpansion":
var G__15981 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__15982 = cause_type;
var G__15983 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__15984 = loc;
var G__15985 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__15981,G__15982,G__15983,G__15984,G__15985) : format.call(null,G__15981,G__15982,G__15983,G__15984,G__15985));

break;
case "compile-syntax-check":
var G__15989 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__15990 = cause_type;
var G__15991 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__15992 = loc;
var G__15993 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__15989,G__15990,G__15991,G__15992,G__15993) : format.call(null,G__15989,G__15990,G__15991,G__15992,G__15993));

break;
case "compilation":
var G__15997 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__15998 = cause_type;
var G__15999 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__16000 = loc;
var G__16001 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__15997,G__15998,G__15999,G__16000,G__16001) : format.call(null,G__15997,G__15998,G__15999,G__16000,G__16001));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__16004 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__16005 = symbol;
var G__16006 = loc;
var G__16007 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16011_16223 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16012_16224 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16013_16225 = true;
var _STAR_print_fn_STAR__temp_val__16014_16226 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16013_16225);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16014_16226);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15947_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__15947_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16012_16224);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16011_16223);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__16004,G__16005,G__16006,G__16007) : format.call(null,G__16004,G__16005,G__16006,G__16007));
} else {
var G__16024 = "Execution error%s at %s(%s).\n%s\n";
var G__16025 = cause_type;
var G__16026 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__16027 = loc;
var G__16028 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__16024,G__16025,G__16026,G__16027,G__16028) : format.call(null,G__16024,G__16025,G__16026,G__16027,G__16028));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15957__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
