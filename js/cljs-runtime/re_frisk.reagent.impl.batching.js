goog.provide('re_frisk.reagent.impl.batching');
re_frisk.reagent.impl.batching.operation_name = cljs.core.memoize((function (c){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(reagent.impl.component.component_name(c),/ > /));
}));
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.reagent !== 'undefined') && (typeof re_frisk.reagent.impl !== 'undefined') && (typeof re_frisk.reagent.impl.batching !== 'undefined') && (typeof re_frisk.reagent.impl.batching.original_next_tick !== 'undefined')){
} else {
re_frisk.reagent.impl.batching.original_next_tick = reagent.impl.batching.next_tick;
}
re_frisk.reagent.impl.batching.next_tick = (function re_frisk$reagent$impl$batching$next_tick(f){
var G__11166 = (function (){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__11168 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__11169 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"raf","raf",-1295410152)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__11169);

try{try{(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__11179_11243 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__11180_11244 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"raf-end","raf-end",-220596864)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__11180_11244);

try{try{}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__6680__auto___11246 = re_frame.interop.now();
var duration__6681__auto___11247 = (end__6680__auto___11246 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__6681__auto___11247,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__6680__auto___11246);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__11179_11243);
}} else {
}

if(reagent.impl.batching.render_queue.scheduled_QMARK_ === false){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__11190 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__11191 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__11191);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__6680__auto___11248 = re_frame.interop.now();
var duration__6681__auto___11249 = (end__6680__auto___11248 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__6681__auto___11249,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__6680__auto___11248);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__11190);
}} else {
return null;
}
} else {
return null;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__6680__auto___11250 = re_frame.interop.now();
var duration__6681__auto___11251 = (end__6680__auto___11250 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__6681__auto___11251,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__6680__auto___11250);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__11168);
}} else {
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__11198_11254 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__11199_11255 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"raf-end","raf-end",-220596864)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__11199_11255);

try{try{}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__6680__auto___11256 = re_frame.interop.now();
var duration__6681__auto___11257 = (end__6680__auto___11256 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__6681__auto___11257,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__6680__auto___11256);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__11198_11254);
}} else {
}

if(reagent.impl.batching.render_queue.scheduled_QMARK_ === false){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__11206 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__11207 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__11207);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__6680__auto___11259 = re_frame.interop.now();
var duration__6681__auto___11260 = (end__6680__auto___11259 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__6681__auto___11260,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__6680__auto___11259);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__11206);
}} else {
return null;
}
} else {
return null;
}
}
});
return (re_frisk.reagent.impl.batching.original_next_tick.cljs$core$IFn$_invoke$arity$1 ? re_frisk.reagent.impl.batching.original_next_tick.cljs$core$IFn$_invoke$arity$1(G__11166) : re_frisk.reagent.impl.batching.original_next_tick.call(null,G__11166));
});
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.reagent !== 'undefined') && (typeof re_frisk.reagent.impl !== 'undefined') && (typeof re_frisk.reagent.impl.batching !== 'undefined') && (typeof re_frisk.reagent.impl.batching.original_run_queue !== 'undefined')){
} else {
re_frisk.reagent.impl.batching.original_run_queue = reagent.impl.batching.run_queue;
}
re_frisk.reagent.impl.batching.run_queue = (function re_frisk$reagent$impl$batching$run_queue(a){
a.sort(reagent.impl.batching.compare_mount_order);

var n__5593__auto__ = a.length;
var i = (0);
while(true){
if((i < n__5593__auto__)){
var c_11262 = (a[i]);
if(c_11262.cljsIsDirty === true){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__11228_11263 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__11229_11264 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"force-update","force-update",725693267),new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frisk.reagent.impl.batching.operation_name(c_11262)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__11229_11264);

try{try{c_11262.forceUpdate();
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__6680__auto___11265 = re_frame.interop.now();
var duration__6681__auto___11266 = (end__6680__auto___11265 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__6681__auto___11266,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__6680__auto___11265);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__11228_11263);
}} else {
c_11262.forceUpdate();
}
} else {
}

var G__11267 = (i + (1));
i = G__11267;
continue;
} else {
return null;
}
break;
}
});
re_frisk.reagent.impl.batching.patch_next_tick = (function re_frisk$reagent$impl$batching$patch_next_tick(){
(reagent.impl.batching.next_tick = re_frisk.reagent.impl.batching.next_tick);

return (reagent.impl.batching.run_queue = re_frisk.reagent.impl.batching.run_queue);
});

//# sourceMappingURL=re_frisk.reagent.impl.batching.js.map
