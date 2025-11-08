goog.provide('re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.inlined_deps !== 'undefined') && (typeof re_frisk.inlined_deps.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.roots !== 'undefined')){
} else {
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.unmount_comp = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render_comp = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__7347 = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__7348 = true;
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__7348);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__7354 = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__7355 = false;
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__7355);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.roots,cljs.core.assoc,container,comp);

re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__7354);
}}));
}finally {(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__7347);
}});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.re_render_component = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$dom$re_render_component(comp,container){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render_comp(comp,container,null);
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
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$dom$render(var_args){
var G__7365 = arguments.length;
switch (G__7365) {
case 2:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_();

var vec__7374 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7374,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7374,(1),null);
var f = (function (){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render_comp(f,container,callback);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.unmount_component_at_node = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$dom$unmount_component_at_node(container){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.dom_node = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$dom$dom_node(this$){
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
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.force_update_all = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$dom$force_update_all(){
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_();

var seq__7387_7426 = cljs.core.seq(cljs.core.deref(re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.roots));
var chunk__7388_7427 = null;
var count__7389_7428 = (0);
var i__7390_7429 = (0);
while(true){
if((i__7390_7429 < count__7389_7428)){
var vec__7403_7431 = chunk__7388_7427.cljs$core$IIndexed$_nth$arity$2(null,i__7390_7429);
var container_7432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7403_7431,(0),null);
var comp_7433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7403_7431,(1),null);
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.re_render_component(comp_7433,container_7432);


var G__7434 = seq__7387_7426;
var G__7435 = chunk__7388_7427;
var G__7436 = count__7389_7428;
var G__7437 = (i__7390_7429 + (1));
seq__7387_7426 = G__7434;
chunk__7388_7427 = G__7435;
count__7389_7428 = G__7436;
i__7390_7429 = G__7437;
continue;
} else {
var temp__5804__auto___7438 = cljs.core.seq(seq__7387_7426);
if(temp__5804__auto___7438){
var seq__7387_7439__$1 = temp__5804__auto___7438;
if(cljs.core.chunked_seq_QMARK_(seq__7387_7439__$1)){
var c__5525__auto___7441 = cljs.core.chunk_first(seq__7387_7439__$1);
var G__7442 = cljs.core.chunk_rest(seq__7387_7439__$1);
var G__7443 = c__5525__auto___7441;
var G__7444 = cljs.core.count(c__5525__auto___7441);
var G__7445 = (0);
seq__7387_7426 = G__7442;
chunk__7388_7427 = G__7443;
count__7389_7428 = G__7444;
i__7390_7429 = G__7445;
continue;
} else {
var vec__7408_7447 = cljs.core.first(seq__7387_7439__$1);
var container_7448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7408_7447,(0),null);
var comp_7449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7408_7447,(1),null);
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.re_render_component(comp_7449,container_7448);


var G__7451 = cljs.core.next(seq__7387_7439__$1);
var G__7452 = null;
var G__7453 = (0);
var G__7454 = (0);
seq__7387_7426 = G__7451;
chunk__7388_7427 = G__7452;
count__7389_7428 = G__7453;
i__7390_7429 = G__7454;
continue;
}
} else {
}
}
break;
}

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.js.map
