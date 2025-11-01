goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_11928 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_11928(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_11929 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_11929(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__10164 = coll;
var G__10165 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__10164,G__10165) : shadow.dom.lazy_native_coll_seq.call(null,G__10164,G__10165));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__10176 = arguments.length;
switch (G__10176) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__10178 = arguments.length;
switch (G__10178) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__10184 = arguments.length;
switch (G__10184) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__10191 = arguments.length;
switch (G__10191) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__10200 = arguments.length;
switch (G__10200) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__10208 = arguments.length;
switch (G__10208) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e10218){if((e10218 instanceof Object)){
var e = e10218;
return console.log("didnt support attachEvent",el,e);
} else {
throw e10218;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__10251 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__10252 = null;
var count__10253 = (0);
var i__10254 = (0);
while(true){
if((i__10254 < count__10253)){
var el = chunk__10252.cljs$core$IIndexed$_nth$arity$2(null,i__10254);
var handler_11954__$1 = ((function (seq__10251,chunk__10252,count__10253,i__10254,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__10251,chunk__10252,count__10253,i__10254,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_11954__$1);


var G__11955 = seq__10251;
var G__11956 = chunk__10252;
var G__11957 = count__10253;
var G__11958 = (i__10254 + (1));
seq__10251 = G__11955;
chunk__10252 = G__11956;
count__10253 = G__11957;
i__10254 = G__11958;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10251);
if(temp__5804__auto__){
var seq__10251__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10251__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__10251__$1);
var G__11960 = cljs.core.chunk_rest(seq__10251__$1);
var G__11961 = c__5525__auto__;
var G__11962 = cljs.core.count(c__5525__auto__);
var G__11963 = (0);
seq__10251 = G__11960;
chunk__10252 = G__11961;
count__10253 = G__11962;
i__10254 = G__11963;
continue;
} else {
var el = cljs.core.first(seq__10251__$1);
var handler_11965__$1 = ((function (seq__10251,chunk__10252,count__10253,i__10254,el,seq__10251__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__10251,chunk__10252,count__10253,i__10254,el,seq__10251__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_11965__$1);


var G__11967 = cljs.core.next(seq__10251__$1);
var G__11968 = null;
var G__11969 = (0);
var G__11970 = (0);
seq__10251 = G__11967;
chunk__10252 = G__11968;
count__10253 = G__11969;
i__10254 = G__11970;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__10296 = arguments.length;
switch (G__10296) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__10333 = cljs.core.seq(events);
var chunk__10334 = null;
var count__10335 = (0);
var i__10336 = (0);
while(true){
if((i__10336 < count__10335)){
var vec__10372 = chunk__10334.cljs$core$IIndexed$_nth$arity$2(null,i__10336);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10372,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10372,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__11975 = seq__10333;
var G__11976 = chunk__10334;
var G__11977 = count__10335;
var G__11978 = (i__10336 + (1));
seq__10333 = G__11975;
chunk__10334 = G__11976;
count__10335 = G__11977;
i__10336 = G__11978;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10333);
if(temp__5804__auto__){
var seq__10333__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10333__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__10333__$1);
var G__11979 = cljs.core.chunk_rest(seq__10333__$1);
var G__11980 = c__5525__auto__;
var G__11981 = cljs.core.count(c__5525__auto__);
var G__11982 = (0);
seq__10333 = G__11979;
chunk__10334 = G__11980;
count__10335 = G__11981;
i__10336 = G__11982;
continue;
} else {
var vec__10387 = cljs.core.first(seq__10333__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10387,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10387,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__11985 = cljs.core.next(seq__10333__$1);
var G__11986 = null;
var G__11987 = (0);
var G__11988 = (0);
seq__10333 = G__11985;
chunk__10334 = G__11986;
count__10335 = G__11987;
i__10336 = G__11988;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__10403 = cljs.core.seq(styles);
var chunk__10404 = null;
var count__10405 = (0);
var i__10406 = (0);
while(true){
if((i__10406 < count__10405)){
var vec__10444 = chunk__10404.cljs$core$IIndexed$_nth$arity$2(null,i__10406);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10444,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10444,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__11991 = seq__10403;
var G__11992 = chunk__10404;
var G__11993 = count__10405;
var G__11994 = (i__10406 + (1));
seq__10403 = G__11991;
chunk__10404 = G__11992;
count__10405 = G__11993;
i__10406 = G__11994;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10403);
if(temp__5804__auto__){
var seq__10403__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10403__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__10403__$1);
var G__11995 = cljs.core.chunk_rest(seq__10403__$1);
var G__11996 = c__5525__auto__;
var G__11997 = cljs.core.count(c__5525__auto__);
var G__11998 = (0);
seq__10403 = G__11995;
chunk__10404 = G__11996;
count__10405 = G__11997;
i__10406 = G__11998;
continue;
} else {
var vec__10459 = cljs.core.first(seq__10403__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10459,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10459,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12006 = cljs.core.next(seq__10403__$1);
var G__12007 = null;
var G__12008 = (0);
var G__12009 = (0);
seq__10403 = G__12006;
chunk__10404 = G__12007;
count__10405 = G__12008;
i__10406 = G__12009;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__10487_12011 = key;
var G__10487_12012__$1 = (((G__10487_12011 instanceof cljs.core.Keyword))?G__10487_12011.fqn:null);
switch (G__10487_12012__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12026 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_12026,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_12026,"aria-");
}
})())){
el.setAttribute(ks_12026,value);
} else {
(el[ks_12026] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__10563){
var map__10565 = p__10563;
var map__10565__$1 = cljs.core.__destructure_map(map__10565);
var props = map__10565__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10565__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__10566 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10566,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10566,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10566,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__10576 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__10576,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__10576;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__10581 = arguments.length;
switch (G__10581) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__10588){
var vec__10590 = p__10588;
var seq__10591 = cljs.core.seq(vec__10590);
var first__10592 = cljs.core.first(seq__10591);
var seq__10591__$1 = cljs.core.next(seq__10591);
var nn = first__10592;
var first__10592__$1 = cljs.core.first(seq__10591__$1);
var seq__10591__$2 = cljs.core.next(seq__10591__$1);
var np = first__10592__$1;
var nc = seq__10591__$2;
var node = vec__10590;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__10600 = nn;
var G__10601 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__10600,G__10601) : create_fn.call(null,G__10600,G__10601));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__10608 = nn;
var G__10609 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__10608,G__10609) : create_fn.call(null,G__10608,G__10609));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__10619 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10619,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10619,(1),null);
var seq__10624_12031 = cljs.core.seq(node_children);
var chunk__10625_12032 = null;
var count__10626_12033 = (0);
var i__10627_12034 = (0);
while(true){
if((i__10627_12034 < count__10626_12033)){
var child_struct_12035 = chunk__10625_12032.cljs$core$IIndexed$_nth$arity$2(null,i__10627_12034);
var children_12036 = shadow.dom.dom_node(child_struct_12035);
if(cljs.core.seq_QMARK_(children_12036)){
var seq__10696_12039 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12036));
var chunk__10698_12040 = null;
var count__10699_12041 = (0);
var i__10700_12042 = (0);
while(true){
if((i__10700_12042 < count__10699_12041)){
var child_12045 = chunk__10698_12040.cljs$core$IIndexed$_nth$arity$2(null,i__10700_12042);
if(cljs.core.truth_(child_12045)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12045);


var G__12049 = seq__10696_12039;
var G__12050 = chunk__10698_12040;
var G__12051 = count__10699_12041;
var G__12052 = (i__10700_12042 + (1));
seq__10696_12039 = G__12049;
chunk__10698_12040 = G__12050;
count__10699_12041 = G__12051;
i__10700_12042 = G__12052;
continue;
} else {
var G__12053 = seq__10696_12039;
var G__12054 = chunk__10698_12040;
var G__12055 = count__10699_12041;
var G__12056 = (i__10700_12042 + (1));
seq__10696_12039 = G__12053;
chunk__10698_12040 = G__12054;
count__10699_12041 = G__12055;
i__10700_12042 = G__12056;
continue;
}
} else {
var temp__5804__auto___12057 = cljs.core.seq(seq__10696_12039);
if(temp__5804__auto___12057){
var seq__10696_12058__$1 = temp__5804__auto___12057;
if(cljs.core.chunked_seq_QMARK_(seq__10696_12058__$1)){
var c__5525__auto___12059 = cljs.core.chunk_first(seq__10696_12058__$1);
var G__12060 = cljs.core.chunk_rest(seq__10696_12058__$1);
var G__12061 = c__5525__auto___12059;
var G__12062 = cljs.core.count(c__5525__auto___12059);
var G__12063 = (0);
seq__10696_12039 = G__12060;
chunk__10698_12040 = G__12061;
count__10699_12041 = G__12062;
i__10700_12042 = G__12063;
continue;
} else {
var child_12064 = cljs.core.first(seq__10696_12058__$1);
if(cljs.core.truth_(child_12064)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12064);


var G__12065 = cljs.core.next(seq__10696_12058__$1);
var G__12066 = null;
var G__12067 = (0);
var G__12068 = (0);
seq__10696_12039 = G__12065;
chunk__10698_12040 = G__12066;
count__10699_12041 = G__12067;
i__10700_12042 = G__12068;
continue;
} else {
var G__12069 = cljs.core.next(seq__10696_12058__$1);
var G__12070 = null;
var G__12071 = (0);
var G__12072 = (0);
seq__10696_12039 = G__12069;
chunk__10698_12040 = G__12070;
count__10699_12041 = G__12071;
i__10700_12042 = G__12072;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12036);
}


var G__12075 = seq__10624_12031;
var G__12076 = chunk__10625_12032;
var G__12077 = count__10626_12033;
var G__12078 = (i__10627_12034 + (1));
seq__10624_12031 = G__12075;
chunk__10625_12032 = G__12076;
count__10626_12033 = G__12077;
i__10627_12034 = G__12078;
continue;
} else {
var temp__5804__auto___12079 = cljs.core.seq(seq__10624_12031);
if(temp__5804__auto___12079){
var seq__10624_12082__$1 = temp__5804__auto___12079;
if(cljs.core.chunked_seq_QMARK_(seq__10624_12082__$1)){
var c__5525__auto___12087 = cljs.core.chunk_first(seq__10624_12082__$1);
var G__12088 = cljs.core.chunk_rest(seq__10624_12082__$1);
var G__12089 = c__5525__auto___12087;
var G__12090 = cljs.core.count(c__5525__auto___12087);
var G__12091 = (0);
seq__10624_12031 = G__12088;
chunk__10625_12032 = G__12089;
count__10626_12033 = G__12090;
i__10627_12034 = G__12091;
continue;
} else {
var child_struct_12092 = cljs.core.first(seq__10624_12082__$1);
var children_12093 = shadow.dom.dom_node(child_struct_12092);
if(cljs.core.seq_QMARK_(children_12093)){
var seq__10725_12094 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12093));
var chunk__10727_12095 = null;
var count__10728_12096 = (0);
var i__10729_12097 = (0);
while(true){
if((i__10729_12097 < count__10728_12096)){
var child_12098 = chunk__10727_12095.cljs$core$IIndexed$_nth$arity$2(null,i__10729_12097);
if(cljs.core.truth_(child_12098)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12098);


var G__12099 = seq__10725_12094;
var G__12100 = chunk__10727_12095;
var G__12101 = count__10728_12096;
var G__12102 = (i__10729_12097 + (1));
seq__10725_12094 = G__12099;
chunk__10727_12095 = G__12100;
count__10728_12096 = G__12101;
i__10729_12097 = G__12102;
continue;
} else {
var G__12103 = seq__10725_12094;
var G__12104 = chunk__10727_12095;
var G__12105 = count__10728_12096;
var G__12106 = (i__10729_12097 + (1));
seq__10725_12094 = G__12103;
chunk__10727_12095 = G__12104;
count__10728_12096 = G__12105;
i__10729_12097 = G__12106;
continue;
}
} else {
var temp__5804__auto___12108__$1 = cljs.core.seq(seq__10725_12094);
if(temp__5804__auto___12108__$1){
var seq__10725_12109__$1 = temp__5804__auto___12108__$1;
if(cljs.core.chunked_seq_QMARK_(seq__10725_12109__$1)){
var c__5525__auto___12110 = cljs.core.chunk_first(seq__10725_12109__$1);
var G__12111 = cljs.core.chunk_rest(seq__10725_12109__$1);
var G__12112 = c__5525__auto___12110;
var G__12113 = cljs.core.count(c__5525__auto___12110);
var G__12114 = (0);
seq__10725_12094 = G__12111;
chunk__10727_12095 = G__12112;
count__10728_12096 = G__12113;
i__10729_12097 = G__12114;
continue;
} else {
var child_12115 = cljs.core.first(seq__10725_12109__$1);
if(cljs.core.truth_(child_12115)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12115);


var G__12116 = cljs.core.next(seq__10725_12109__$1);
var G__12117 = null;
var G__12118 = (0);
var G__12119 = (0);
seq__10725_12094 = G__12116;
chunk__10727_12095 = G__12117;
count__10728_12096 = G__12118;
i__10729_12097 = G__12119;
continue;
} else {
var G__12120 = cljs.core.next(seq__10725_12109__$1);
var G__12121 = null;
var G__12122 = (0);
var G__12123 = (0);
seq__10725_12094 = G__12120;
chunk__10727_12095 = G__12121;
count__10728_12096 = G__12122;
i__10729_12097 = G__12123;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12093);
}


var G__12124 = cljs.core.next(seq__10624_12082__$1);
var G__12125 = null;
var G__12126 = (0);
var G__12127 = (0);
seq__10624_12031 = G__12124;
chunk__10625_12032 = G__12125;
count__10626_12033 = G__12126;
i__10627_12034 = G__12127;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__10764 = cljs.core.seq(node);
var chunk__10765 = null;
var count__10766 = (0);
var i__10767 = (0);
while(true){
if((i__10767 < count__10766)){
var n = chunk__10765.cljs$core$IIndexed$_nth$arity$2(null,i__10767);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12136 = seq__10764;
var G__12137 = chunk__10765;
var G__12138 = count__10766;
var G__12139 = (i__10767 + (1));
seq__10764 = G__12136;
chunk__10765 = G__12137;
count__10766 = G__12138;
i__10767 = G__12139;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10764);
if(temp__5804__auto__){
var seq__10764__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10764__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__10764__$1);
var G__12140 = cljs.core.chunk_rest(seq__10764__$1);
var G__12141 = c__5525__auto__;
var G__12142 = cljs.core.count(c__5525__auto__);
var G__12143 = (0);
seq__10764 = G__12140;
chunk__10765 = G__12141;
count__10766 = G__12142;
i__10767 = G__12143;
continue;
} else {
var n = cljs.core.first(seq__10764__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12144 = cljs.core.next(seq__10764__$1);
var G__12145 = null;
var G__12146 = (0);
var G__12147 = (0);
seq__10764 = G__12144;
chunk__10765 = G__12145;
count__10766 = G__12146;
i__10767 = G__12147;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__10787 = arguments.length;
switch (G__10787) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__10794 = arguments.length;
switch (G__10794) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__10818 = arguments.length;
switch (G__10818) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12164 = arguments.length;
var i__5727__auto___12169 = (0);
while(true){
if((i__5727__auto___12169 < len__5726__auto___12164)){
args__5732__auto__.push((arguments[i__5727__auto___12169]));

var G__12170 = (i__5727__auto___12169 + (1));
i__5727__auto___12169 = G__12170;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__10844_12171 = cljs.core.seq(nodes);
var chunk__10845_12172 = null;
var count__10846_12173 = (0);
var i__10847_12174 = (0);
while(true){
if((i__10847_12174 < count__10846_12173)){
var node_12175 = chunk__10845_12172.cljs$core$IIndexed$_nth$arity$2(null,i__10847_12174);
fragment.appendChild(shadow.dom._to_dom(node_12175));


var G__12176 = seq__10844_12171;
var G__12177 = chunk__10845_12172;
var G__12178 = count__10846_12173;
var G__12179 = (i__10847_12174 + (1));
seq__10844_12171 = G__12176;
chunk__10845_12172 = G__12177;
count__10846_12173 = G__12178;
i__10847_12174 = G__12179;
continue;
} else {
var temp__5804__auto___12180 = cljs.core.seq(seq__10844_12171);
if(temp__5804__auto___12180){
var seq__10844_12181__$1 = temp__5804__auto___12180;
if(cljs.core.chunked_seq_QMARK_(seq__10844_12181__$1)){
var c__5525__auto___12182 = cljs.core.chunk_first(seq__10844_12181__$1);
var G__12183 = cljs.core.chunk_rest(seq__10844_12181__$1);
var G__12184 = c__5525__auto___12182;
var G__12185 = cljs.core.count(c__5525__auto___12182);
var G__12186 = (0);
seq__10844_12171 = G__12183;
chunk__10845_12172 = G__12184;
count__10846_12173 = G__12185;
i__10847_12174 = G__12186;
continue;
} else {
var node_12187 = cljs.core.first(seq__10844_12181__$1);
fragment.appendChild(shadow.dom._to_dom(node_12187));


var G__12188 = cljs.core.next(seq__10844_12181__$1);
var G__12189 = null;
var G__12190 = (0);
var G__12191 = (0);
seq__10844_12171 = G__12188;
chunk__10845_12172 = G__12189;
count__10846_12173 = G__12190;
i__10847_12174 = G__12191;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq10834){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10834));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__10861_12199 = cljs.core.seq(scripts);
var chunk__10862_12200 = null;
var count__10863_12201 = (0);
var i__10864_12202 = (0);
while(true){
if((i__10864_12202 < count__10863_12201)){
var vec__10883_12203 = chunk__10862_12200.cljs$core$IIndexed$_nth$arity$2(null,i__10864_12202);
var script_tag_12204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10883_12203,(0),null);
var script_body_12205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10883_12203,(1),null);
eval(script_body_12205);


var G__12206 = seq__10861_12199;
var G__12207 = chunk__10862_12200;
var G__12208 = count__10863_12201;
var G__12209 = (i__10864_12202 + (1));
seq__10861_12199 = G__12206;
chunk__10862_12200 = G__12207;
count__10863_12201 = G__12208;
i__10864_12202 = G__12209;
continue;
} else {
var temp__5804__auto___12210 = cljs.core.seq(seq__10861_12199);
if(temp__5804__auto___12210){
var seq__10861_12211__$1 = temp__5804__auto___12210;
if(cljs.core.chunked_seq_QMARK_(seq__10861_12211__$1)){
var c__5525__auto___12213 = cljs.core.chunk_first(seq__10861_12211__$1);
var G__12214 = cljs.core.chunk_rest(seq__10861_12211__$1);
var G__12215 = c__5525__auto___12213;
var G__12216 = cljs.core.count(c__5525__auto___12213);
var G__12217 = (0);
seq__10861_12199 = G__12214;
chunk__10862_12200 = G__12215;
count__10863_12201 = G__12216;
i__10864_12202 = G__12217;
continue;
} else {
var vec__10889_12218 = cljs.core.first(seq__10861_12211__$1);
var script_tag_12219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10889_12218,(0),null);
var script_body_12220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10889_12218,(1),null);
eval(script_body_12220);


var G__12221 = cljs.core.next(seq__10861_12211__$1);
var G__12222 = null;
var G__12223 = (0);
var G__12224 = (0);
seq__10861_12199 = G__12221;
chunk__10862_12200 = G__12222;
count__10863_12201 = G__12223;
i__10864_12202 = G__12224;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__10893){
var vec__10894 = p__10893;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10894,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10894,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__10908 = arguments.length;
switch (G__10908) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__10929 = cljs.core.seq(style_keys);
var chunk__10930 = null;
var count__10931 = (0);
var i__10932 = (0);
while(true){
if((i__10932 < count__10931)){
var it = chunk__10930.cljs$core$IIndexed$_nth$arity$2(null,i__10932);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12232 = seq__10929;
var G__12233 = chunk__10930;
var G__12234 = count__10931;
var G__12235 = (i__10932 + (1));
seq__10929 = G__12232;
chunk__10930 = G__12233;
count__10931 = G__12234;
i__10932 = G__12235;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10929);
if(temp__5804__auto__){
var seq__10929__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10929__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__10929__$1);
var G__12237 = cljs.core.chunk_rest(seq__10929__$1);
var G__12238 = c__5525__auto__;
var G__12239 = cljs.core.count(c__5525__auto__);
var G__12240 = (0);
seq__10929 = G__12237;
chunk__10930 = G__12238;
count__10931 = G__12239;
i__10932 = G__12240;
continue;
} else {
var it = cljs.core.first(seq__10929__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12241 = cljs.core.next(seq__10929__$1);
var G__12242 = null;
var G__12243 = (0);
var G__12244 = (0);
seq__10929 = G__12241;
chunk__10930 = G__12242;
count__10931 = G__12243;
i__10932 = G__12244;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k10956,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__10976 = k10956;
var G__10976__$1 = (((G__10976 instanceof cljs.core.Keyword))?G__10976.fqn:null);
switch (G__10976__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k10956,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__10982){
var vec__10983 = p__10982;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10983,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10983,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10955){
var self__ = this;
var G__10955__$1 = this;
return (new cljs.core.RecordIter((0),G__10955__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10957,other10958){
var self__ = this;
var this10957__$1 = this;
return (((!((other10958 == null)))) && ((((this10957__$1.constructor === other10958.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10957__$1.x,other10958.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10957__$1.y,other10958.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10957__$1.__extmap,other10958.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k10956){
var self__ = this;
var this__5307__auto____$1 = this;
var G__11038 = k10956;
var G__11038__$1 = (((G__11038 instanceof cljs.core.Keyword))?G__11038.fqn:null);
switch (G__11038__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k10956);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__10955){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__11048 = cljs.core.keyword_identical_QMARK_;
var expr__11050 = k__5309__auto__;
if(cljs.core.truth_((pred__11048.cljs$core$IFn$_invoke$arity$2 ? pred__11048.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__11050) : pred__11048.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__11050)))){
return (new shadow.dom.Coordinate(G__10955,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11048.cljs$core$IFn$_invoke$arity$2 ? pred__11048.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__11050) : pred__11048.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__11050)))){
return (new shadow.dom.Coordinate(self__.x,G__10955,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__10955),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__10955){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__10955,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__10964){
var extmap__5342__auto__ = (function (){var G__11075 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__10964,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__10964)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__11075);
} else {
return G__11075;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__10964),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__10964),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k11105,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__11134 = k11105;
var G__11134__$1 = (((G__11134 instanceof cljs.core.Keyword))?G__11134.fqn:null);
switch (G__11134__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11105,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__11144){
var vec__11154 = p__11144;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11154,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11154,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11104){
var self__ = this;
var G__11104__$1 = this;
return (new cljs.core.RecordIter((0),G__11104__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this11106,other11107){
var self__ = this;
var this11106__$1 = this;
return (((!((other11107 == null)))) && ((((this11106__$1.constructor === other11107.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11106__$1.w,other11107.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11106__$1.h,other11107.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11106__$1.__extmap,other11107.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k11105){
var self__ = this;
var this__5307__auto____$1 = this;
var G__11274 = k11105;
var G__11274__$1 = (((G__11274 instanceof cljs.core.Keyword))?G__11274.fqn:null);
switch (G__11274__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k11105);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__11104){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__11288 = cljs.core.keyword_identical_QMARK_;
var expr__11289 = k__5309__auto__;
if(cljs.core.truth_((pred__11288.cljs$core$IFn$_invoke$arity$2 ? pred__11288.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__11289) : pred__11288.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__11289)))){
return (new shadow.dom.Size(G__11104,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11288.cljs$core$IFn$_invoke$arity$2 ? pred__11288.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__11289) : pred__11288.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__11289)))){
return (new shadow.dom.Size(self__.w,G__11104,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__11104),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__11104){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__11104,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__11116){
var extmap__5342__auto__ = (function (){var G__11373 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__11116,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__11116)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__11373);
} else {
return G__11373;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__11116),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__11116),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__12379 = (i + (1));
var G__12380 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__12379;
ret = G__12380;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__11551){
var vec__11579 = p__11551;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11579,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11579,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__11591 = arguments.length;
switch (G__11591) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__12389 = ps;
var G__12390 = (i + (1));
el__$1 = G__12389;
i = G__12390;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__11741 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11741,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11741,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11741,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__11747_12397 = cljs.core.seq(props);
var chunk__11748_12398 = null;
var count__11749_12399 = (0);
var i__11750_12400 = (0);
while(true){
if((i__11750_12400 < count__11749_12399)){
var vec__11783_12409 = chunk__11748_12398.cljs$core$IIndexed$_nth$arity$2(null,i__11750_12400);
var k_12410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11783_12409,(0),null);
var v_12411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11783_12409,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_12410);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12410),v_12411);


var G__12416 = seq__11747_12397;
var G__12417 = chunk__11748_12398;
var G__12418 = count__11749_12399;
var G__12419 = (i__11750_12400 + (1));
seq__11747_12397 = G__12416;
chunk__11748_12398 = G__12417;
count__11749_12399 = G__12418;
i__11750_12400 = G__12419;
continue;
} else {
var temp__5804__auto___12421 = cljs.core.seq(seq__11747_12397);
if(temp__5804__auto___12421){
var seq__11747_12422__$1 = temp__5804__auto___12421;
if(cljs.core.chunked_seq_QMARK_(seq__11747_12422__$1)){
var c__5525__auto___12423 = cljs.core.chunk_first(seq__11747_12422__$1);
var G__12424 = cljs.core.chunk_rest(seq__11747_12422__$1);
var G__12425 = c__5525__auto___12423;
var G__12426 = cljs.core.count(c__5525__auto___12423);
var G__12427 = (0);
seq__11747_12397 = G__12424;
chunk__11748_12398 = G__12425;
count__11749_12399 = G__12426;
i__11750_12400 = G__12427;
continue;
} else {
var vec__11793_12428 = cljs.core.first(seq__11747_12422__$1);
var k_12429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11793_12428,(0),null);
var v_12430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11793_12428,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_12429);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12429),v_12430);


var G__12433 = cljs.core.next(seq__11747_12422__$1);
var G__12434 = null;
var G__12435 = (0);
var G__12436 = (0);
seq__11747_12397 = G__12433;
chunk__11748_12398 = G__12434;
count__11749_12399 = G__12435;
i__11750_12400 = G__12436;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__11843 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11843,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11843,(1),null);
var seq__11848_12444 = cljs.core.seq(node_children);
var chunk__11850_12445 = null;
var count__11851_12446 = (0);
var i__11852_12447 = (0);
while(true){
if((i__11852_12447 < count__11851_12446)){
var child_struct_12450 = chunk__11850_12445.cljs$core$IIndexed$_nth$arity$2(null,i__11852_12447);
if((!((child_struct_12450 == null)))){
if(typeof child_struct_12450 === 'string'){
var text_12455 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_12455),child_struct_12450].join(''));
} else {
var children_12457 = shadow.dom.svg_node(child_struct_12450);
if(cljs.core.seq_QMARK_(children_12457)){
var seq__11900_12462 = cljs.core.seq(children_12457);
var chunk__11902_12463 = null;
var count__11903_12464 = (0);
var i__11904_12465 = (0);
while(true){
if((i__11904_12465 < count__11903_12464)){
var child_12467 = chunk__11902_12463.cljs$core$IIndexed$_nth$arity$2(null,i__11904_12465);
if(cljs.core.truth_(child_12467)){
node.appendChild(child_12467);


var G__12472 = seq__11900_12462;
var G__12473 = chunk__11902_12463;
var G__12474 = count__11903_12464;
var G__12475 = (i__11904_12465 + (1));
seq__11900_12462 = G__12472;
chunk__11902_12463 = G__12473;
count__11903_12464 = G__12474;
i__11904_12465 = G__12475;
continue;
} else {
var G__12482 = seq__11900_12462;
var G__12483 = chunk__11902_12463;
var G__12484 = count__11903_12464;
var G__12485 = (i__11904_12465 + (1));
seq__11900_12462 = G__12482;
chunk__11902_12463 = G__12483;
count__11903_12464 = G__12484;
i__11904_12465 = G__12485;
continue;
}
} else {
var temp__5804__auto___12487 = cljs.core.seq(seq__11900_12462);
if(temp__5804__auto___12487){
var seq__11900_12492__$1 = temp__5804__auto___12487;
if(cljs.core.chunked_seq_QMARK_(seq__11900_12492__$1)){
var c__5525__auto___12493 = cljs.core.chunk_first(seq__11900_12492__$1);
var G__12494 = cljs.core.chunk_rest(seq__11900_12492__$1);
var G__12495 = c__5525__auto___12493;
var G__12496 = cljs.core.count(c__5525__auto___12493);
var G__12497 = (0);
seq__11900_12462 = G__12494;
chunk__11902_12463 = G__12495;
count__11903_12464 = G__12496;
i__11904_12465 = G__12497;
continue;
} else {
var child_12498 = cljs.core.first(seq__11900_12492__$1);
if(cljs.core.truth_(child_12498)){
node.appendChild(child_12498);


var G__12500 = cljs.core.next(seq__11900_12492__$1);
var G__12501 = null;
var G__12502 = (0);
var G__12503 = (0);
seq__11900_12462 = G__12500;
chunk__11902_12463 = G__12501;
count__11903_12464 = G__12502;
i__11904_12465 = G__12503;
continue;
} else {
var G__12504 = cljs.core.next(seq__11900_12492__$1);
var G__12505 = null;
var G__12506 = (0);
var G__12507 = (0);
seq__11900_12462 = G__12504;
chunk__11902_12463 = G__12505;
count__11903_12464 = G__12506;
i__11904_12465 = G__12507;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_12457);
}
}


var G__12509 = seq__11848_12444;
var G__12510 = chunk__11850_12445;
var G__12511 = count__11851_12446;
var G__12512 = (i__11852_12447 + (1));
seq__11848_12444 = G__12509;
chunk__11850_12445 = G__12510;
count__11851_12446 = G__12511;
i__11852_12447 = G__12512;
continue;
} else {
var G__12514 = seq__11848_12444;
var G__12515 = chunk__11850_12445;
var G__12516 = count__11851_12446;
var G__12517 = (i__11852_12447 + (1));
seq__11848_12444 = G__12514;
chunk__11850_12445 = G__12515;
count__11851_12446 = G__12516;
i__11852_12447 = G__12517;
continue;
}
} else {
var temp__5804__auto___12518 = cljs.core.seq(seq__11848_12444);
if(temp__5804__auto___12518){
var seq__11848_12519__$1 = temp__5804__auto___12518;
if(cljs.core.chunked_seq_QMARK_(seq__11848_12519__$1)){
var c__5525__auto___12522 = cljs.core.chunk_first(seq__11848_12519__$1);
var G__12523 = cljs.core.chunk_rest(seq__11848_12519__$1);
var G__12524 = c__5525__auto___12522;
var G__12525 = cljs.core.count(c__5525__auto___12522);
var G__12526 = (0);
seq__11848_12444 = G__12523;
chunk__11850_12445 = G__12524;
count__11851_12446 = G__12525;
i__11852_12447 = G__12526;
continue;
} else {
var child_struct_12527 = cljs.core.first(seq__11848_12519__$1);
if((!((child_struct_12527 == null)))){
if(typeof child_struct_12527 === 'string'){
var text_12528 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_12528),child_struct_12527].join(''));
} else {
var children_12530 = shadow.dom.svg_node(child_struct_12527);
if(cljs.core.seq_QMARK_(children_12530)){
var seq__11907_12531 = cljs.core.seq(children_12530);
var chunk__11909_12532 = null;
var count__11910_12533 = (0);
var i__11911_12534 = (0);
while(true){
if((i__11911_12534 < count__11910_12533)){
var child_12537 = chunk__11909_12532.cljs$core$IIndexed$_nth$arity$2(null,i__11911_12534);
if(cljs.core.truth_(child_12537)){
node.appendChild(child_12537);


var G__12540 = seq__11907_12531;
var G__12541 = chunk__11909_12532;
var G__12542 = count__11910_12533;
var G__12543 = (i__11911_12534 + (1));
seq__11907_12531 = G__12540;
chunk__11909_12532 = G__12541;
count__11910_12533 = G__12542;
i__11911_12534 = G__12543;
continue;
} else {
var G__12545 = seq__11907_12531;
var G__12546 = chunk__11909_12532;
var G__12547 = count__11910_12533;
var G__12548 = (i__11911_12534 + (1));
seq__11907_12531 = G__12545;
chunk__11909_12532 = G__12546;
count__11910_12533 = G__12547;
i__11911_12534 = G__12548;
continue;
}
} else {
var temp__5804__auto___12549__$1 = cljs.core.seq(seq__11907_12531);
if(temp__5804__auto___12549__$1){
var seq__11907_12554__$1 = temp__5804__auto___12549__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11907_12554__$1)){
var c__5525__auto___12556 = cljs.core.chunk_first(seq__11907_12554__$1);
var G__12557 = cljs.core.chunk_rest(seq__11907_12554__$1);
var G__12558 = c__5525__auto___12556;
var G__12559 = cljs.core.count(c__5525__auto___12556);
var G__12560 = (0);
seq__11907_12531 = G__12557;
chunk__11909_12532 = G__12558;
count__11910_12533 = G__12559;
i__11911_12534 = G__12560;
continue;
} else {
var child_12565 = cljs.core.first(seq__11907_12554__$1);
if(cljs.core.truth_(child_12565)){
node.appendChild(child_12565);


var G__12567 = cljs.core.next(seq__11907_12554__$1);
var G__12568 = null;
var G__12569 = (0);
var G__12570 = (0);
seq__11907_12531 = G__12567;
chunk__11909_12532 = G__12568;
count__11910_12533 = G__12569;
i__11911_12534 = G__12570;
continue;
} else {
var G__12573 = cljs.core.next(seq__11907_12554__$1);
var G__12574 = null;
var G__12575 = (0);
var G__12576 = (0);
seq__11907_12531 = G__12573;
chunk__11909_12532 = G__12574;
count__11910_12533 = G__12575;
i__11911_12534 = G__12576;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_12530);
}
}


var G__12582 = cljs.core.next(seq__11848_12519__$1);
var G__12583 = null;
var G__12584 = (0);
var G__12585 = (0);
seq__11848_12444 = G__12582;
chunk__11850_12445 = G__12583;
count__11851_12446 = G__12584;
i__11852_12447 = G__12585;
continue;
} else {
var G__12586 = cljs.core.next(seq__11848_12519__$1);
var G__12587 = null;
var G__12588 = (0);
var G__12589 = (0);
seq__11848_12444 = G__12586;
chunk__11850_12445 = G__12587;
count__11851_12446 = G__12588;
i__11852_12447 = G__12589;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12597 = arguments.length;
var i__5727__auto___12598 = (0);
while(true){
if((i__5727__auto___12598 < len__5726__auto___12597)){
args__5732__auto__.push((arguments[i__5727__auto___12598]));

var G__12599 = (i__5727__auto___12598 + (1));
i__5727__auto___12598 = G__12599;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq11918){
var G__11919 = cljs.core.first(seq11918);
var seq11918__$1 = cljs.core.next(seq11918);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11919,seq11918__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
