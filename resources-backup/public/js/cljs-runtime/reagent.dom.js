goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__11944 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__11945 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__11945);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__11949 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__11950 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__11950);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__11949);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__11944);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__11974 = arguments.length;
switch (G__11974) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__11983 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11983,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11983,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__11986_12005 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__11987_12006 = null;
var count__11988_12007 = (0);
var i__11989_12008 = (0);
while(true){
if((i__11989_12008 < count__11988_12007)){
var vec__11996_12009 = chunk__11987_12006.cljs$core$IIndexed$_nth$arity$2(null,i__11989_12008);
var container_12010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11996_12009,(0),null);
var comp_12011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11996_12009,(1),null);
reagent.dom.re_render_component(comp_12011,container_12010);


var G__12012 = seq__11986_12005;
var G__12013 = chunk__11987_12006;
var G__12014 = count__11988_12007;
var G__12015 = (i__11989_12008 + (1));
seq__11986_12005 = G__12012;
chunk__11987_12006 = G__12013;
count__11988_12007 = G__12014;
i__11989_12008 = G__12015;
continue;
} else {
var temp__5804__auto___12016 = cljs.core.seq(seq__11986_12005);
if(temp__5804__auto___12016){
var seq__11986_12017__$1 = temp__5804__auto___12016;
if(cljs.core.chunked_seq_QMARK_(seq__11986_12017__$1)){
var c__5525__auto___12018 = cljs.core.chunk_first(seq__11986_12017__$1);
var G__12019 = cljs.core.chunk_rest(seq__11986_12017__$1);
var G__12020 = c__5525__auto___12018;
var G__12021 = cljs.core.count(c__5525__auto___12018);
var G__12022 = (0);
seq__11986_12005 = G__12019;
chunk__11987_12006 = G__12020;
count__11988_12007 = G__12021;
i__11989_12008 = G__12022;
continue;
} else {
var vec__11999_12023 = cljs.core.first(seq__11986_12017__$1);
var container_12024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11999_12023,(0),null);
var comp_12025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11999_12023,(1),null);
reagent.dom.re_render_component(comp_12025,container_12024);


var G__12026 = cljs.core.next(seq__11986_12017__$1);
var G__12027 = null;
var G__12028 = (0);
var G__12029 = (0);
seq__11986_12005 = G__12026;
chunk__11987_12006 = G__12027;
count__11988_12007 = G__12028;
i__11989_12008 = G__12029;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
