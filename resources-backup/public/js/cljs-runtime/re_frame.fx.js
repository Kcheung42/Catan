goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__12999 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__13000 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__13000);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___13087 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___13087)){
var new_db_13088 = temp__5804__auto___13087;
var fexpr__13001_13089 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__13001_13089.cljs$core$IFn$_invoke$arity$1 ? fexpr__13001_13089.cljs$core$IFn$_invoke$arity$1(new_db_13088) : fexpr__13001_13089.call(null,new_db_13088));
} else {
}

var seq__13002 = cljs.core.seq(effects_without_db);
var chunk__13003 = null;
var count__13004 = (0);
var i__13005 = (0);
while(true){
if((i__13005 < count__13004)){
var vec__13015 = chunk__13003.cljs$core$IIndexed$_nth$arity$2(null,i__13005);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13015,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13015,(1),null);
var temp__5802__auto___13090 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13090)){
var effect_fn_13091 = temp__5802__auto___13090;
(effect_fn_13091.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13091.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13091.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__13092 = seq__13002;
var G__13093 = chunk__13003;
var G__13094 = count__13004;
var G__13095 = (i__13005 + (1));
seq__13002 = G__13092;
chunk__13003 = G__13093;
count__13004 = G__13094;
i__13005 = G__13095;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13002);
if(temp__5804__auto__){
var seq__13002__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13002__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13002__$1);
var G__13096 = cljs.core.chunk_rest(seq__13002__$1);
var G__13097 = c__5525__auto__;
var G__13098 = cljs.core.count(c__5525__auto__);
var G__13099 = (0);
seq__13002 = G__13096;
chunk__13003 = G__13097;
count__13004 = G__13098;
i__13005 = G__13099;
continue;
} else {
var vec__13018 = cljs.core.first(seq__13002__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13018,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13018,(1),null);
var temp__5802__auto___13100 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13100)){
var effect_fn_13101 = temp__5802__auto___13100;
(effect_fn_13101.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13101.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13101.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__13102 = cljs.core.next(seq__13002__$1);
var G__13103 = null;
var G__13104 = (0);
var G__13105 = (0);
seq__13002 = G__13102;
chunk__13003 = G__13103;
count__13004 = G__13104;
i__13005 = G__13105;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12635__auto___13106 = re_frame.interop.now();
var duration__12636__auto___13107 = (end__12635__auto___13106 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12636__auto___13107,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12635__auto___13106);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__12999);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___13108 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___13108)){
var new_db_13109 = temp__5804__auto___13108;
var fexpr__13022_13110 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__13022_13110.cljs$core$IFn$_invoke$arity$1 ? fexpr__13022_13110.cljs$core$IFn$_invoke$arity$1(new_db_13109) : fexpr__13022_13110.call(null,new_db_13109));
} else {
}

var seq__13023 = cljs.core.seq(effects_without_db);
var chunk__13024 = null;
var count__13025 = (0);
var i__13026 = (0);
while(true){
if((i__13026 < count__13025)){
var vec__13037 = chunk__13024.cljs$core$IIndexed$_nth$arity$2(null,i__13026);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13037,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13037,(1),null);
var temp__5802__auto___13111 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13111)){
var effect_fn_13112 = temp__5802__auto___13111;
(effect_fn_13112.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13112.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13112.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__13113 = seq__13023;
var G__13114 = chunk__13024;
var G__13115 = count__13025;
var G__13116 = (i__13026 + (1));
seq__13023 = G__13113;
chunk__13024 = G__13114;
count__13025 = G__13115;
i__13026 = G__13116;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13023);
if(temp__5804__auto__){
var seq__13023__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13023__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13023__$1);
var G__13117 = cljs.core.chunk_rest(seq__13023__$1);
var G__13118 = c__5525__auto__;
var G__13119 = cljs.core.count(c__5525__auto__);
var G__13120 = (0);
seq__13023 = G__13117;
chunk__13024 = G__13118;
count__13025 = G__13119;
i__13026 = G__13120;
continue;
} else {
var vec__13048 = cljs.core.first(seq__13023__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13048,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13048,(1),null);
var temp__5802__auto___13121 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13121)){
var effect_fn_13122 = temp__5802__auto___13121;
(effect_fn_13122.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13122.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13122.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__13123 = cljs.core.next(seq__13023__$1);
var G__13124 = null;
var G__13125 = (0);
var G__13126 = (0);
seq__13023 = G__13123;
chunk__13024 = G__13124;
count__13025 = G__13125;
i__13026 = G__13126;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__13051){
var map__13052 = p__13051;
var map__13052__$1 = cljs.core.__destructure_map(map__13052);
var effect = map__13052__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13052__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13052__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__13055 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13056 = null;
var count__13057 = (0);
var i__13058 = (0);
while(true){
if((i__13058 < count__13057)){
var effect = chunk__13056.cljs$core$IIndexed$_nth$arity$2(null,i__13058);
re_frame.fx.dispatch_later(effect);


var G__13127 = seq__13055;
var G__13128 = chunk__13056;
var G__13129 = count__13057;
var G__13130 = (i__13058 + (1));
seq__13055 = G__13127;
chunk__13056 = G__13128;
count__13057 = G__13129;
i__13058 = G__13130;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13055);
if(temp__5804__auto__){
var seq__13055__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13055__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13055__$1);
var G__13131 = cljs.core.chunk_rest(seq__13055__$1);
var G__13132 = c__5525__auto__;
var G__13133 = cljs.core.count(c__5525__auto__);
var G__13134 = (0);
seq__13055 = G__13131;
chunk__13056 = G__13132;
count__13057 = G__13133;
i__13058 = G__13134;
continue;
} else {
var effect = cljs.core.first(seq__13055__$1);
re_frame.fx.dispatch_later(effect);


var G__13135 = cljs.core.next(seq__13055__$1);
var G__13136 = null;
var G__13137 = (0);
var G__13138 = (0);
seq__13055 = G__13135;
chunk__13056 = G__13136;
count__13057 = G__13137;
i__13058 = G__13138;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__13061 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__13062 = null;
var count__13063 = (0);
var i__13064 = (0);
while(true){
if((i__13064 < count__13063)){
var vec__13071 = chunk__13062.cljs$core$IIndexed$_nth$arity$2(null,i__13064);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13071,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13071,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___13139 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13139)){
var effect_fn_13140 = temp__5802__auto___13139;
(effect_fn_13140.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13140.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13140.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__13141 = seq__13061;
var G__13142 = chunk__13062;
var G__13143 = count__13063;
var G__13144 = (i__13064 + (1));
seq__13061 = G__13141;
chunk__13062 = G__13142;
count__13063 = G__13143;
i__13064 = G__13144;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13061);
if(temp__5804__auto__){
var seq__13061__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13061__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13061__$1);
var G__13145 = cljs.core.chunk_rest(seq__13061__$1);
var G__13146 = c__5525__auto__;
var G__13147 = cljs.core.count(c__5525__auto__);
var G__13148 = (0);
seq__13061 = G__13145;
chunk__13062 = G__13146;
count__13063 = G__13147;
i__13064 = G__13148;
continue;
} else {
var vec__13074 = cljs.core.first(seq__13061__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13074,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13074,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___13149 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13149)){
var effect_fn_13150 = temp__5802__auto___13149;
(effect_fn_13150.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13150.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13150.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__13151 = cljs.core.next(seq__13061__$1);
var G__13152 = null;
var G__13153 = (0);
var G__13154 = (0);
seq__13061 = G__13151;
chunk__13062 = G__13152;
count__13063 = G__13153;
i__13064 = G__13154;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__13077 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13078 = null;
var count__13079 = (0);
var i__13080 = (0);
while(true){
if((i__13080 < count__13079)){
var event = chunk__13078.cljs$core$IIndexed$_nth$arity$2(null,i__13080);
re_frame.router.dispatch(event);


var G__13155 = seq__13077;
var G__13156 = chunk__13078;
var G__13157 = count__13079;
var G__13158 = (i__13080 + (1));
seq__13077 = G__13155;
chunk__13078 = G__13156;
count__13079 = G__13157;
i__13080 = G__13158;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13077);
if(temp__5804__auto__){
var seq__13077__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13077__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13077__$1);
var G__13159 = cljs.core.chunk_rest(seq__13077__$1);
var G__13160 = c__5525__auto__;
var G__13161 = cljs.core.count(c__5525__auto__);
var G__13162 = (0);
seq__13077 = G__13159;
chunk__13078 = G__13160;
count__13079 = G__13161;
i__13080 = G__13162;
continue;
} else {
var event = cljs.core.first(seq__13077__$1);
re_frame.router.dispatch(event);


var G__13163 = cljs.core.next(seq__13077__$1);
var G__13164 = null;
var G__13165 = (0);
var G__13166 = (0);
seq__13077 = G__13163;
chunk__13078 = G__13164;
count__13079 = G__13165;
i__13080 = G__13166;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__13081 = cljs.core.seq(value);
var chunk__13082 = null;
var count__13083 = (0);
var i__13084 = (0);
while(true){
if((i__13084 < count__13083)){
var event = chunk__13082.cljs$core$IIndexed$_nth$arity$2(null,i__13084);
clear_event(event);


var G__13167 = seq__13081;
var G__13168 = chunk__13082;
var G__13169 = count__13083;
var G__13170 = (i__13084 + (1));
seq__13081 = G__13167;
chunk__13082 = G__13168;
count__13083 = G__13169;
i__13084 = G__13170;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13081);
if(temp__5804__auto__){
var seq__13081__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13081__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13081__$1);
var G__13171 = cljs.core.chunk_rest(seq__13081__$1);
var G__13172 = c__5525__auto__;
var G__13173 = cljs.core.count(c__5525__auto__);
var G__13174 = (0);
seq__13081 = G__13171;
chunk__13082 = G__13172;
count__13083 = G__13173;
i__13084 = G__13174;
continue;
} else {
var event = cljs.core.first(seq__13081__$1);
clear_event(event);


var G__13175 = cljs.core.next(seq__13081__$1);
var G__13176 = null;
var G__13177 = (0);
var G__13178 = (0);
seq__13081 = G__13175;
chunk__13082 = G__13176;
count__13083 = G__13177;
i__13084 = G__13178;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__13085 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__13086 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__13086);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12635__auto___13179 = re_frame.interop.now();
var duration__12636__auto___13180 = (end__12635__auto___13179 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12636__auto___13180,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12635__auto___13179);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__13085);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
