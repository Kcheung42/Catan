goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18893 = arguments.length;
var i__5727__auto___18894 = (0);
while(true){
if((i__5727__auto___18894 < len__5726__auto___18893)){
args__5732__auto__.push((arguments[i__5727__auto___18894]));

var G__18895 = (i__5727__auto___18894 + (1));
i__5727__auto___18894 = G__18895;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq18600){
var G__18601 = cljs.core.first(seq18600);
var seq18600__$1 = cljs.core.next(seq18600);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18601,seq18600__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__18604 = cljs.core.seq(sources);
var chunk__18605 = null;
var count__18606 = (0);
var i__18607 = (0);
while(true){
if((i__18607 < count__18606)){
var map__18615 = chunk__18605.cljs$core$IIndexed$_nth$arity$2(null,i__18607);
var map__18615__$1 = cljs.core.__destructure_map(map__18615);
var src = map__18615__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18615__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18615__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18615__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18615__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e18616){var e_18896 = e18616;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_18896);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_18896.message)].join('')));
}

var G__18897 = seq__18604;
var G__18898 = chunk__18605;
var G__18899 = count__18606;
var G__18900 = (i__18607 + (1));
seq__18604 = G__18897;
chunk__18605 = G__18898;
count__18606 = G__18899;
i__18607 = G__18900;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18604);
if(temp__5804__auto__){
var seq__18604__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18604__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18604__$1);
var G__18901 = cljs.core.chunk_rest(seq__18604__$1);
var G__18902 = c__5525__auto__;
var G__18903 = cljs.core.count(c__5525__auto__);
var G__18904 = (0);
seq__18604 = G__18901;
chunk__18605 = G__18902;
count__18606 = G__18903;
i__18607 = G__18904;
continue;
} else {
var map__18617 = cljs.core.first(seq__18604__$1);
var map__18617__$1 = cljs.core.__destructure_map(map__18617);
var src = map__18617__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18617__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18617__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18617__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18617__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e18618){var e_18905 = e18618;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_18905);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_18905.message)].join('')));
}

var G__18906 = cljs.core.next(seq__18604__$1);
var G__18907 = null;
var G__18908 = (0);
var G__18909 = (0);
seq__18604 = G__18906;
chunk__18605 = G__18907;
count__18606 = G__18908;
i__18607 = G__18909;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__18621 = cljs.core.seq(js_requires);
var chunk__18622 = null;
var count__18623 = (0);
var i__18624 = (0);
while(true){
if((i__18624 < count__18623)){
var js_ns = chunk__18622.cljs$core$IIndexed$_nth$arity$2(null,i__18624);
var require_str_18910 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_18910);


var G__18911 = seq__18621;
var G__18912 = chunk__18622;
var G__18913 = count__18623;
var G__18914 = (i__18624 + (1));
seq__18621 = G__18911;
chunk__18622 = G__18912;
count__18623 = G__18913;
i__18624 = G__18914;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18621);
if(temp__5804__auto__){
var seq__18621__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18621__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18621__$1);
var G__18915 = cljs.core.chunk_rest(seq__18621__$1);
var G__18916 = c__5525__auto__;
var G__18917 = cljs.core.count(c__5525__auto__);
var G__18918 = (0);
seq__18621 = G__18915;
chunk__18622 = G__18916;
count__18623 = G__18917;
i__18624 = G__18918;
continue;
} else {
var js_ns = cljs.core.first(seq__18621__$1);
var require_str_18919 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_18919);


var G__18920 = cljs.core.next(seq__18621__$1);
var G__18921 = null;
var G__18922 = (0);
var G__18923 = (0);
seq__18621 = G__18920;
chunk__18622 = G__18921;
count__18623 = G__18922;
i__18624 = G__18923;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__18626){
var map__18627 = p__18626;
var map__18627__$1 = cljs.core.__destructure_map(map__18627);
var msg = map__18627__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18627__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18627__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__18628(s__18629){
return (new cljs.core.LazySeq(null,(function (){
var s__18629__$1 = s__18629;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18629__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__18634 = cljs.core.first(xs__6360__auto__);
var map__18634__$1 = cljs.core.__destructure_map(map__18634);
var src = map__18634__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18634__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18634__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__18629__$1,map__18634,map__18634__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__18627,map__18627__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__18628_$_iter__18630(s__18631){
return (new cljs.core.LazySeq(null,((function (s__18629__$1,map__18634,map__18634__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__18627,map__18627__$1,msg,info,reload_info){
return (function (){
var s__18631__$1 = s__18631;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__18631__$1);
if(temp__5804__auto____$1){
var s__18631__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18631__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18631__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18633 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18632 = (0);
while(true){
if((i__18632 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__18632);
cljs.core.chunk_append(b__18633,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__18924 = (i__18632 + (1));
i__18632 = G__18924;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18633),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__18628_$_iter__18630(cljs.core.chunk_rest(s__18631__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18633),null);
}
} else {
var warning = cljs.core.first(s__18631__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__18628_$_iter__18630(cljs.core.rest(s__18631__$2)));
}
} else {
return null;
}
break;
}
});})(s__18629__$1,map__18634,map__18634__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__18627,map__18627__$1,msg,info,reload_info))
,null,null));
});})(s__18629__$1,map__18634,map__18634__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__18627,map__18627__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__18628(cljs.core.rest(s__18629__$1)));
} else {
var G__18925 = cljs.core.rest(s__18629__$1);
s__18629__$1 = G__18925;
continue;
}
} else {
var G__18926 = cljs.core.rest(s__18629__$1);
s__18629__$1 = G__18926;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__18636_18927 = cljs.core.seq(warnings);
var chunk__18637_18928 = null;
var count__18638_18929 = (0);
var i__18639_18930 = (0);
while(true){
if((i__18639_18930 < count__18638_18929)){
var map__18643_18931 = chunk__18637_18928.cljs$core$IIndexed$_nth$arity$2(null,i__18639_18930);
var map__18643_18932__$1 = cljs.core.__destructure_map(map__18643_18931);
var w_18933 = map__18643_18932__$1;
var msg_18934__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18643_18932__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_18935 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18643_18932__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_18936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18643_18932__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_18937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18643_18932__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_18937)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_18935),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_18936),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_18934__$1)].join(''));


var G__18938 = seq__18636_18927;
var G__18939 = chunk__18637_18928;
var G__18940 = count__18638_18929;
var G__18941 = (i__18639_18930 + (1));
seq__18636_18927 = G__18938;
chunk__18637_18928 = G__18939;
count__18638_18929 = G__18940;
i__18639_18930 = G__18941;
continue;
} else {
var temp__5804__auto___18942 = cljs.core.seq(seq__18636_18927);
if(temp__5804__auto___18942){
var seq__18636_18943__$1 = temp__5804__auto___18942;
if(cljs.core.chunked_seq_QMARK_(seq__18636_18943__$1)){
var c__5525__auto___18944 = cljs.core.chunk_first(seq__18636_18943__$1);
var G__18945 = cljs.core.chunk_rest(seq__18636_18943__$1);
var G__18946 = c__5525__auto___18944;
var G__18947 = cljs.core.count(c__5525__auto___18944);
var G__18948 = (0);
seq__18636_18927 = G__18945;
chunk__18637_18928 = G__18946;
count__18638_18929 = G__18947;
i__18639_18930 = G__18948;
continue;
} else {
var map__18644_18949 = cljs.core.first(seq__18636_18943__$1);
var map__18644_18950__$1 = cljs.core.__destructure_map(map__18644_18949);
var w_18951 = map__18644_18950__$1;
var msg_18952__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18644_18950__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_18953 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18644_18950__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_18954 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18644_18950__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_18955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18644_18950__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_18955)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_18953),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_18954),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_18952__$1)].join(''));


var G__18956 = cljs.core.next(seq__18636_18943__$1);
var G__18957 = null;
var G__18958 = (0);
var G__18959 = (0);
seq__18636_18927 = G__18956;
chunk__18637_18928 = G__18957;
count__18638_18929 = G__18958;
i__18639_18930 = G__18959;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__18625_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__18625_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__18646 = node_uri;
G__18646.setQuery(null);

G__18646.setPath(new$);

return G__18646;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__18647){
var map__18648 = p__18647;
var map__18648__$1 = cljs.core.__destructure_map(map__18648);
var msg = map__18648__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18648__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18648__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__18649 = cljs.core.seq(updates);
var chunk__18651 = null;
var count__18652 = (0);
var i__18653 = (0);
while(true){
if((i__18653 < count__18652)){
var path = chunk__18651.cljs$core$IIndexed$_nth$arity$2(null,i__18653);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__18763_18960 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__18767_18961 = null;
var count__18768_18962 = (0);
var i__18769_18963 = (0);
while(true){
if((i__18769_18963 < count__18768_18962)){
var node_18964 = chunk__18767_18961.cljs$core$IIndexed$_nth$arity$2(null,i__18769_18963);
if(cljs.core.not(node_18964.shadow$old)){
var path_match_18965 = shadow.cljs.devtools.client.browser.match_paths(node_18964.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18965)){
var new_link_18966 = (function (){var G__18795 = node_18964.cloneNode(true);
G__18795.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18965),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__18795;
})();
(node_18964.shadow$old = true);

(new_link_18966.onload = ((function (seq__18763_18960,chunk__18767_18961,count__18768_18962,i__18769_18963,seq__18649,chunk__18651,count__18652,i__18653,new_link_18966,path_match_18965,node_18964,path,map__18648,map__18648__$1,msg,updates,reload_info){
return (function (e){
var seq__18796_18967 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18798_18968 = null;
var count__18799_18969 = (0);
var i__18800_18970 = (0);
while(true){
if((i__18800_18970 < count__18799_18969)){
var map__18804_18971 = chunk__18798_18968.cljs$core$IIndexed$_nth$arity$2(null,i__18800_18970);
var map__18804_18972__$1 = cljs.core.__destructure_map(map__18804_18971);
var task_18973 = map__18804_18972__$1;
var fn_str_18974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18804_18972__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18975 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18804_18972__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18976 = goog.getObjectByName(fn_str_18974,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18975)].join(''));

(fn_obj_18976.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18976.cljs$core$IFn$_invoke$arity$2(path,new_link_18966) : fn_obj_18976.call(null,path,new_link_18966));


var G__18977 = seq__18796_18967;
var G__18978 = chunk__18798_18968;
var G__18979 = count__18799_18969;
var G__18980 = (i__18800_18970 + (1));
seq__18796_18967 = G__18977;
chunk__18798_18968 = G__18978;
count__18799_18969 = G__18979;
i__18800_18970 = G__18980;
continue;
} else {
var temp__5804__auto___18981 = cljs.core.seq(seq__18796_18967);
if(temp__5804__auto___18981){
var seq__18796_18982__$1 = temp__5804__auto___18981;
if(cljs.core.chunked_seq_QMARK_(seq__18796_18982__$1)){
var c__5525__auto___18983 = cljs.core.chunk_first(seq__18796_18982__$1);
var G__18984 = cljs.core.chunk_rest(seq__18796_18982__$1);
var G__18985 = c__5525__auto___18983;
var G__18986 = cljs.core.count(c__5525__auto___18983);
var G__18987 = (0);
seq__18796_18967 = G__18984;
chunk__18798_18968 = G__18985;
count__18799_18969 = G__18986;
i__18800_18970 = G__18987;
continue;
} else {
var map__18805_18988 = cljs.core.first(seq__18796_18982__$1);
var map__18805_18989__$1 = cljs.core.__destructure_map(map__18805_18988);
var task_18990 = map__18805_18989__$1;
var fn_str_18991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18805_18989__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18805_18989__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18993 = goog.getObjectByName(fn_str_18991,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18992)].join(''));

(fn_obj_18993.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18993.cljs$core$IFn$_invoke$arity$2(path,new_link_18966) : fn_obj_18993.call(null,path,new_link_18966));


var G__18994 = cljs.core.next(seq__18796_18982__$1);
var G__18995 = null;
var G__18996 = (0);
var G__18997 = (0);
seq__18796_18967 = G__18994;
chunk__18798_18968 = G__18995;
count__18799_18969 = G__18996;
i__18800_18970 = G__18997;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18964);
});})(seq__18763_18960,chunk__18767_18961,count__18768_18962,i__18769_18963,seq__18649,chunk__18651,count__18652,i__18653,new_link_18966,path_match_18965,node_18964,path,map__18648,map__18648__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18965], 0));

goog.dom.insertSiblingAfter(new_link_18966,node_18964);


var G__18998 = seq__18763_18960;
var G__18999 = chunk__18767_18961;
var G__19000 = count__18768_18962;
var G__19001 = (i__18769_18963 + (1));
seq__18763_18960 = G__18998;
chunk__18767_18961 = G__18999;
count__18768_18962 = G__19000;
i__18769_18963 = G__19001;
continue;
} else {
var G__19002 = seq__18763_18960;
var G__19003 = chunk__18767_18961;
var G__19004 = count__18768_18962;
var G__19005 = (i__18769_18963 + (1));
seq__18763_18960 = G__19002;
chunk__18767_18961 = G__19003;
count__18768_18962 = G__19004;
i__18769_18963 = G__19005;
continue;
}
} else {
var G__19006 = seq__18763_18960;
var G__19007 = chunk__18767_18961;
var G__19008 = count__18768_18962;
var G__19009 = (i__18769_18963 + (1));
seq__18763_18960 = G__19006;
chunk__18767_18961 = G__19007;
count__18768_18962 = G__19008;
i__18769_18963 = G__19009;
continue;
}
} else {
var temp__5804__auto___19010 = cljs.core.seq(seq__18763_18960);
if(temp__5804__auto___19010){
var seq__18763_19011__$1 = temp__5804__auto___19010;
if(cljs.core.chunked_seq_QMARK_(seq__18763_19011__$1)){
var c__5525__auto___19012 = cljs.core.chunk_first(seq__18763_19011__$1);
var G__19013 = cljs.core.chunk_rest(seq__18763_19011__$1);
var G__19014 = c__5525__auto___19012;
var G__19015 = cljs.core.count(c__5525__auto___19012);
var G__19016 = (0);
seq__18763_18960 = G__19013;
chunk__18767_18961 = G__19014;
count__18768_18962 = G__19015;
i__18769_18963 = G__19016;
continue;
} else {
var node_19017 = cljs.core.first(seq__18763_19011__$1);
if(cljs.core.not(node_19017.shadow$old)){
var path_match_19018 = shadow.cljs.devtools.client.browser.match_paths(node_19017.getAttribute("href"),path);
if(cljs.core.truth_(path_match_19018)){
var new_link_19019 = (function (){var G__18806 = node_19017.cloneNode(true);
G__18806.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_19018),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__18806;
})();
(node_19017.shadow$old = true);

(new_link_19019.onload = ((function (seq__18763_18960,chunk__18767_18961,count__18768_18962,i__18769_18963,seq__18649,chunk__18651,count__18652,i__18653,new_link_19019,path_match_19018,node_19017,seq__18763_19011__$1,temp__5804__auto___19010,path,map__18648,map__18648__$1,msg,updates,reload_info){
return (function (e){
var seq__18807_19020 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18809_19021 = null;
var count__18810_19022 = (0);
var i__18811_19023 = (0);
while(true){
if((i__18811_19023 < count__18810_19022)){
var map__18815_19024 = chunk__18809_19021.cljs$core$IIndexed$_nth$arity$2(null,i__18811_19023);
var map__18815_19025__$1 = cljs.core.__destructure_map(map__18815_19024);
var task_19026 = map__18815_19025__$1;
var fn_str_19027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18815_19025__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_19028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18815_19025__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_19029 = goog.getObjectByName(fn_str_19027,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_19028)].join(''));

(fn_obj_19029.cljs$core$IFn$_invoke$arity$2 ? fn_obj_19029.cljs$core$IFn$_invoke$arity$2(path,new_link_19019) : fn_obj_19029.call(null,path,new_link_19019));


var G__19030 = seq__18807_19020;
var G__19031 = chunk__18809_19021;
var G__19032 = count__18810_19022;
var G__19033 = (i__18811_19023 + (1));
seq__18807_19020 = G__19030;
chunk__18809_19021 = G__19031;
count__18810_19022 = G__19032;
i__18811_19023 = G__19033;
continue;
} else {
var temp__5804__auto___19034__$1 = cljs.core.seq(seq__18807_19020);
if(temp__5804__auto___19034__$1){
var seq__18807_19035__$1 = temp__5804__auto___19034__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18807_19035__$1)){
var c__5525__auto___19036 = cljs.core.chunk_first(seq__18807_19035__$1);
var G__19037 = cljs.core.chunk_rest(seq__18807_19035__$1);
var G__19038 = c__5525__auto___19036;
var G__19039 = cljs.core.count(c__5525__auto___19036);
var G__19040 = (0);
seq__18807_19020 = G__19037;
chunk__18809_19021 = G__19038;
count__18810_19022 = G__19039;
i__18811_19023 = G__19040;
continue;
} else {
var map__18816_19041 = cljs.core.first(seq__18807_19035__$1);
var map__18816_19042__$1 = cljs.core.__destructure_map(map__18816_19041);
var task_19043 = map__18816_19042__$1;
var fn_str_19044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18816_19042__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_19045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18816_19042__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_19046 = goog.getObjectByName(fn_str_19044,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_19045)].join(''));

(fn_obj_19046.cljs$core$IFn$_invoke$arity$2 ? fn_obj_19046.cljs$core$IFn$_invoke$arity$2(path,new_link_19019) : fn_obj_19046.call(null,path,new_link_19019));


var G__19047 = cljs.core.next(seq__18807_19035__$1);
var G__19048 = null;
var G__19049 = (0);
var G__19050 = (0);
seq__18807_19020 = G__19047;
chunk__18809_19021 = G__19048;
count__18810_19022 = G__19049;
i__18811_19023 = G__19050;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_19017);
});})(seq__18763_18960,chunk__18767_18961,count__18768_18962,i__18769_18963,seq__18649,chunk__18651,count__18652,i__18653,new_link_19019,path_match_19018,node_19017,seq__18763_19011__$1,temp__5804__auto___19010,path,map__18648,map__18648__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_19018], 0));

goog.dom.insertSiblingAfter(new_link_19019,node_19017);


var G__19051 = cljs.core.next(seq__18763_19011__$1);
var G__19052 = null;
var G__19053 = (0);
var G__19054 = (0);
seq__18763_18960 = G__19051;
chunk__18767_18961 = G__19052;
count__18768_18962 = G__19053;
i__18769_18963 = G__19054;
continue;
} else {
var G__19055 = cljs.core.next(seq__18763_19011__$1);
var G__19056 = null;
var G__19057 = (0);
var G__19058 = (0);
seq__18763_18960 = G__19055;
chunk__18767_18961 = G__19056;
count__18768_18962 = G__19057;
i__18769_18963 = G__19058;
continue;
}
} else {
var G__19059 = cljs.core.next(seq__18763_19011__$1);
var G__19060 = null;
var G__19061 = (0);
var G__19062 = (0);
seq__18763_18960 = G__19059;
chunk__18767_18961 = G__19060;
count__18768_18962 = G__19061;
i__18769_18963 = G__19062;
continue;
}
}
} else {
}
}
break;
}


var G__19063 = seq__18649;
var G__19064 = chunk__18651;
var G__19065 = count__18652;
var G__19066 = (i__18653 + (1));
seq__18649 = G__19063;
chunk__18651 = G__19064;
count__18652 = G__19065;
i__18653 = G__19066;
continue;
} else {
var G__19067 = seq__18649;
var G__19068 = chunk__18651;
var G__19069 = count__18652;
var G__19070 = (i__18653 + (1));
seq__18649 = G__19067;
chunk__18651 = G__19068;
count__18652 = G__19069;
i__18653 = G__19070;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18649);
if(temp__5804__auto__){
var seq__18649__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18649__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18649__$1);
var G__19071 = cljs.core.chunk_rest(seq__18649__$1);
var G__19072 = c__5525__auto__;
var G__19073 = cljs.core.count(c__5525__auto__);
var G__19074 = (0);
seq__18649 = G__19071;
chunk__18651 = G__19072;
count__18652 = G__19073;
i__18653 = G__19074;
continue;
} else {
var path = cljs.core.first(seq__18649__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__18817_19075 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__18821_19076 = null;
var count__18822_19077 = (0);
var i__18823_19078 = (0);
while(true){
if((i__18823_19078 < count__18822_19077)){
var node_19079 = chunk__18821_19076.cljs$core$IIndexed$_nth$arity$2(null,i__18823_19078);
if(cljs.core.not(node_19079.shadow$old)){
var path_match_19080 = shadow.cljs.devtools.client.browser.match_paths(node_19079.getAttribute("href"),path);
if(cljs.core.truth_(path_match_19080)){
var new_link_19081 = (function (){var G__18849 = node_19079.cloneNode(true);
G__18849.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_19080),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__18849;
})();
(node_19079.shadow$old = true);

(new_link_19081.onload = ((function (seq__18817_19075,chunk__18821_19076,count__18822_19077,i__18823_19078,seq__18649,chunk__18651,count__18652,i__18653,new_link_19081,path_match_19080,node_19079,path,seq__18649__$1,temp__5804__auto__,map__18648,map__18648__$1,msg,updates,reload_info){
return (function (e){
var seq__18850_19082 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18852_19083 = null;
var count__18853_19084 = (0);
var i__18854_19085 = (0);
while(true){
if((i__18854_19085 < count__18853_19084)){
var map__18858_19086 = chunk__18852_19083.cljs$core$IIndexed$_nth$arity$2(null,i__18854_19085);
var map__18858_19087__$1 = cljs.core.__destructure_map(map__18858_19086);
var task_19088 = map__18858_19087__$1;
var fn_str_19089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18858_19087__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_19090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18858_19087__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_19091 = goog.getObjectByName(fn_str_19089,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_19090)].join(''));

(fn_obj_19091.cljs$core$IFn$_invoke$arity$2 ? fn_obj_19091.cljs$core$IFn$_invoke$arity$2(path,new_link_19081) : fn_obj_19091.call(null,path,new_link_19081));


var G__19092 = seq__18850_19082;
var G__19093 = chunk__18852_19083;
var G__19094 = count__18853_19084;
var G__19095 = (i__18854_19085 + (1));
seq__18850_19082 = G__19092;
chunk__18852_19083 = G__19093;
count__18853_19084 = G__19094;
i__18854_19085 = G__19095;
continue;
} else {
var temp__5804__auto___19096__$1 = cljs.core.seq(seq__18850_19082);
if(temp__5804__auto___19096__$1){
var seq__18850_19097__$1 = temp__5804__auto___19096__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18850_19097__$1)){
var c__5525__auto___19098 = cljs.core.chunk_first(seq__18850_19097__$1);
var G__19099 = cljs.core.chunk_rest(seq__18850_19097__$1);
var G__19100 = c__5525__auto___19098;
var G__19101 = cljs.core.count(c__5525__auto___19098);
var G__19102 = (0);
seq__18850_19082 = G__19099;
chunk__18852_19083 = G__19100;
count__18853_19084 = G__19101;
i__18854_19085 = G__19102;
continue;
} else {
var map__18859_19103 = cljs.core.first(seq__18850_19097__$1);
var map__18859_19104__$1 = cljs.core.__destructure_map(map__18859_19103);
var task_19105 = map__18859_19104__$1;
var fn_str_19106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18859_19104__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_19107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18859_19104__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_19108 = goog.getObjectByName(fn_str_19106,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_19107)].join(''));

(fn_obj_19108.cljs$core$IFn$_invoke$arity$2 ? fn_obj_19108.cljs$core$IFn$_invoke$arity$2(path,new_link_19081) : fn_obj_19108.call(null,path,new_link_19081));


var G__19109 = cljs.core.next(seq__18850_19097__$1);
var G__19110 = null;
var G__19111 = (0);
var G__19112 = (0);
seq__18850_19082 = G__19109;
chunk__18852_19083 = G__19110;
count__18853_19084 = G__19111;
i__18854_19085 = G__19112;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_19079);
});})(seq__18817_19075,chunk__18821_19076,count__18822_19077,i__18823_19078,seq__18649,chunk__18651,count__18652,i__18653,new_link_19081,path_match_19080,node_19079,path,seq__18649__$1,temp__5804__auto__,map__18648,map__18648__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_19080], 0));

goog.dom.insertSiblingAfter(new_link_19081,node_19079);


var G__19113 = seq__18817_19075;
var G__19114 = chunk__18821_19076;
var G__19115 = count__18822_19077;
var G__19116 = (i__18823_19078 + (1));
seq__18817_19075 = G__19113;
chunk__18821_19076 = G__19114;
count__18822_19077 = G__19115;
i__18823_19078 = G__19116;
continue;
} else {
var G__19117 = seq__18817_19075;
var G__19118 = chunk__18821_19076;
var G__19119 = count__18822_19077;
var G__19120 = (i__18823_19078 + (1));
seq__18817_19075 = G__19117;
chunk__18821_19076 = G__19118;
count__18822_19077 = G__19119;
i__18823_19078 = G__19120;
continue;
}
} else {
var G__19121 = seq__18817_19075;
var G__19122 = chunk__18821_19076;
var G__19123 = count__18822_19077;
var G__19124 = (i__18823_19078 + (1));
seq__18817_19075 = G__19121;
chunk__18821_19076 = G__19122;
count__18822_19077 = G__19123;
i__18823_19078 = G__19124;
continue;
}
} else {
var temp__5804__auto___19125__$1 = cljs.core.seq(seq__18817_19075);
if(temp__5804__auto___19125__$1){
var seq__18817_19126__$1 = temp__5804__auto___19125__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18817_19126__$1)){
var c__5525__auto___19127 = cljs.core.chunk_first(seq__18817_19126__$1);
var G__19128 = cljs.core.chunk_rest(seq__18817_19126__$1);
var G__19129 = c__5525__auto___19127;
var G__19130 = cljs.core.count(c__5525__auto___19127);
var G__19131 = (0);
seq__18817_19075 = G__19128;
chunk__18821_19076 = G__19129;
count__18822_19077 = G__19130;
i__18823_19078 = G__19131;
continue;
} else {
var node_19132 = cljs.core.first(seq__18817_19126__$1);
if(cljs.core.not(node_19132.shadow$old)){
var path_match_19133 = shadow.cljs.devtools.client.browser.match_paths(node_19132.getAttribute("href"),path);
if(cljs.core.truth_(path_match_19133)){
var new_link_19134 = (function (){var G__18860 = node_19132.cloneNode(true);
G__18860.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_19133),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__18860;
})();
(node_19132.shadow$old = true);

(new_link_19134.onload = ((function (seq__18817_19075,chunk__18821_19076,count__18822_19077,i__18823_19078,seq__18649,chunk__18651,count__18652,i__18653,new_link_19134,path_match_19133,node_19132,seq__18817_19126__$1,temp__5804__auto___19125__$1,path,seq__18649__$1,temp__5804__auto__,map__18648,map__18648__$1,msg,updates,reload_info){
return (function (e){
var seq__18861_19135 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18863_19136 = null;
var count__18864_19137 = (0);
var i__18865_19138 = (0);
while(true){
if((i__18865_19138 < count__18864_19137)){
var map__18869_19139 = chunk__18863_19136.cljs$core$IIndexed$_nth$arity$2(null,i__18865_19138);
var map__18869_19140__$1 = cljs.core.__destructure_map(map__18869_19139);
var task_19141 = map__18869_19140__$1;
var fn_str_19142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18869_19140__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_19143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18869_19140__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_19144 = goog.getObjectByName(fn_str_19142,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_19143)].join(''));

(fn_obj_19144.cljs$core$IFn$_invoke$arity$2 ? fn_obj_19144.cljs$core$IFn$_invoke$arity$2(path,new_link_19134) : fn_obj_19144.call(null,path,new_link_19134));


var G__19145 = seq__18861_19135;
var G__19146 = chunk__18863_19136;
var G__19147 = count__18864_19137;
var G__19148 = (i__18865_19138 + (1));
seq__18861_19135 = G__19145;
chunk__18863_19136 = G__19146;
count__18864_19137 = G__19147;
i__18865_19138 = G__19148;
continue;
} else {
var temp__5804__auto___19149__$2 = cljs.core.seq(seq__18861_19135);
if(temp__5804__auto___19149__$2){
var seq__18861_19150__$1 = temp__5804__auto___19149__$2;
if(cljs.core.chunked_seq_QMARK_(seq__18861_19150__$1)){
var c__5525__auto___19151 = cljs.core.chunk_first(seq__18861_19150__$1);
var G__19152 = cljs.core.chunk_rest(seq__18861_19150__$1);
var G__19153 = c__5525__auto___19151;
var G__19154 = cljs.core.count(c__5525__auto___19151);
var G__19155 = (0);
seq__18861_19135 = G__19152;
chunk__18863_19136 = G__19153;
count__18864_19137 = G__19154;
i__18865_19138 = G__19155;
continue;
} else {
var map__18870_19156 = cljs.core.first(seq__18861_19150__$1);
var map__18870_19157__$1 = cljs.core.__destructure_map(map__18870_19156);
var task_19158 = map__18870_19157__$1;
var fn_str_19159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18870_19157__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_19160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18870_19157__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_19161 = goog.getObjectByName(fn_str_19159,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_19160)].join(''));

(fn_obj_19161.cljs$core$IFn$_invoke$arity$2 ? fn_obj_19161.cljs$core$IFn$_invoke$arity$2(path,new_link_19134) : fn_obj_19161.call(null,path,new_link_19134));


var G__19162 = cljs.core.next(seq__18861_19150__$1);
var G__19163 = null;
var G__19164 = (0);
var G__19165 = (0);
seq__18861_19135 = G__19162;
chunk__18863_19136 = G__19163;
count__18864_19137 = G__19164;
i__18865_19138 = G__19165;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_19132);
});})(seq__18817_19075,chunk__18821_19076,count__18822_19077,i__18823_19078,seq__18649,chunk__18651,count__18652,i__18653,new_link_19134,path_match_19133,node_19132,seq__18817_19126__$1,temp__5804__auto___19125__$1,path,seq__18649__$1,temp__5804__auto__,map__18648,map__18648__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_19133], 0));

goog.dom.insertSiblingAfter(new_link_19134,node_19132);


var G__19166 = cljs.core.next(seq__18817_19126__$1);
var G__19167 = null;
var G__19168 = (0);
var G__19169 = (0);
seq__18817_19075 = G__19166;
chunk__18821_19076 = G__19167;
count__18822_19077 = G__19168;
i__18823_19078 = G__19169;
continue;
} else {
var G__19170 = cljs.core.next(seq__18817_19126__$1);
var G__19171 = null;
var G__19172 = (0);
var G__19173 = (0);
seq__18817_19075 = G__19170;
chunk__18821_19076 = G__19171;
count__18822_19077 = G__19172;
i__18823_19078 = G__19173;
continue;
}
} else {
var G__19174 = cljs.core.next(seq__18817_19126__$1);
var G__19175 = null;
var G__19176 = (0);
var G__19177 = (0);
seq__18817_19075 = G__19174;
chunk__18821_19076 = G__19175;
count__18822_19077 = G__19176;
i__18823_19078 = G__19177;
continue;
}
}
} else {
}
}
break;
}


var G__19178 = cljs.core.next(seq__18649__$1);
var G__19179 = null;
var G__19180 = (0);
var G__19181 = (0);
seq__18649 = G__19178;
chunk__18651 = G__19179;
count__18652 = G__19180;
i__18653 = G__19181;
continue;
} else {
var G__19182 = cljs.core.next(seq__18649__$1);
var G__19183 = null;
var G__19184 = (0);
var G__19185 = (0);
seq__18649 = G__19182;
chunk__18651 = G__19183;
count__18652 = G__19184;
i__18653 = G__19185;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__18872 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__18872) : success.call(null,G__18872));
}catch (e18871){var e = e18871;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__18873,success,fail){
var map__18874 = p__18873;
var map__18874__$1 = cljs.core.__destructure_map(map__18874);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18874__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__18876 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__18876) : success.call(null,G__18876));
}catch (e18875){var e = e18875;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__18877,done,error){
var map__18878 = p__18877;
var map__18878__$1 = cljs.core.__destructure_map(map__18878);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18878__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__18879,done,error){
var map__18880 = p__18879;
var map__18880__$1 = cljs.core.__destructure_map(map__18880);
var msg = map__18880__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18880__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18880__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18880__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__18881){
var map__18882 = p__18881;
var map__18882__$1 = cljs.core.__destructure_map(map__18882);
var src = map__18882__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18882__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__18883 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__18883) : done.call(null,G__18883));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__18884){
var map__18885 = p__18884;
var map__18885__$1 = cljs.core.__destructure_map(map__18885);
var msg__$1 = map__18885__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18885__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e18886){var ex = e18886;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__18887){
var map__18888 = p__18887;
var map__18888__$1 = cljs.core.__destructure_map(map__18888);
var env = map__18888__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18888__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__18889){
var map__18890 = p__18889;
var map__18890__$1 = cljs.core.__destructure_map(map__18890);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18890__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18890__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__18891){
var map__18892 = p__18891;
var map__18892__$1 = cljs.core.__destructure_map(map__18892);
var svc = map__18892__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18892__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
