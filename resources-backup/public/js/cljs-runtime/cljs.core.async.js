goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12925 = (function (f,blockable,meta12926){
this.f = f;
this.blockable = blockable;
this.meta12926 = meta12926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12927,meta12926__$1){
var self__ = this;
var _12927__$1 = this;
return (new cljs.core.async.t_cljs$core$async12925(self__.f,self__.blockable,meta12926__$1));
}));

(cljs.core.async.t_cljs$core$async12925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12927){
var self__ = this;
var _12927__$1 = this;
return self__.meta12926;
}));

(cljs.core.async.t_cljs$core$async12925.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12925.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12925.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async12925.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async12925.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta12926","meta12926",660292073,null)], null);
}));

(cljs.core.async.t_cljs$core$async12925.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12925.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12925");

(cljs.core.async.t_cljs$core$async12925.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async12925");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12925.
 */
cljs.core.async.__GT_t_cljs$core$async12925 = (function cljs$core$async$__GT_t_cljs$core$async12925(f,blockable,meta12926){
return (new cljs.core.async.t_cljs$core$async12925(f,blockable,meta12926));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__12921 = arguments.length;
switch (G__12921) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async12925(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__12943 = arguments.length;
switch (G__12943) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__12947 = arguments.length;
switch (G__12947) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__12951 = arguments.length;
switch (G__12951) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15497 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15497) : fn1.call(null,val_15497));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15497) : fn1.call(null,val_15497));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__12958 = arguments.length;
switch (G__12958) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___15502 = n;
var x_15503 = (0);
while(true){
if((x_15503 < n__5593__auto___15502)){
(a[x_15503] = x_15503);

var G__15504 = (x_15503 + (1));
x_15503 = G__15504;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12967 = (function (flag,meta12968){
this.flag = flag;
this.meta12968 = meta12968;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12969,meta12968__$1){
var self__ = this;
var _12969__$1 = this;
return (new cljs.core.async.t_cljs$core$async12967(self__.flag,meta12968__$1));
}));

(cljs.core.async.t_cljs$core$async12967.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12969){
var self__ = this;
var _12969__$1 = this;
return self__.meta12968;
}));

(cljs.core.async.t_cljs$core$async12967.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12967.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async12967.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12967.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async12967.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta12968","meta12968",-1245611301,null)], null);
}));

(cljs.core.async.t_cljs$core$async12967.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12967.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12967");

(cljs.core.async.t_cljs$core$async12967.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async12967");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12967.
 */
cljs.core.async.__GT_t_cljs$core$async12967 = (function cljs$core$async$__GT_t_cljs$core$async12967(flag,meta12968){
return (new cljs.core.async.t_cljs$core$async12967(flag,meta12968));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async12967(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12976 = (function (flag,cb,meta12977){
this.flag = flag;
this.cb = cb;
this.meta12977 = meta12977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12978,meta12977__$1){
var self__ = this;
var _12978__$1 = this;
return (new cljs.core.async.t_cljs$core$async12976(self__.flag,self__.cb,meta12977__$1));
}));

(cljs.core.async.t_cljs$core$async12976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12978){
var self__ = this;
var _12978__$1 = this;
return self__.meta12977;
}));

(cljs.core.async.t_cljs$core$async12976.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12976.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async12976.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12976.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async12976.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta12977","meta12977",-1474868599,null)], null);
}));

(cljs.core.async.t_cljs$core$async12976.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12976");

(cljs.core.async.t_cljs$core$async12976.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async12976");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12976.
 */
cljs.core.async.__GT_t_cljs$core$async12976 = (function cljs$core$async$__GT_t_cljs$core$async12976(flag,cb,meta12977){
return (new cljs.core.async.t_cljs$core$async12976(flag,cb,meta12977));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async12976(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12981_SHARP_){
var G__12988 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12981_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__12988) : fret.call(null,G__12988));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12982_SHARP_){
var G__12989 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12982_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__12989) : fret.call(null,G__12989));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15511 = (i + (1));
i = G__15511;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15512 = arguments.length;
var i__5727__auto___15513 = (0);
while(true){
if((i__5727__auto___15513 < len__5726__auto___15512)){
args__5732__auto__.push((arguments[i__5727__auto___15513]));

var G__15514 = (i__5727__auto___15513 + (1));
i__5727__auto___15513 = G__15514;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12994){
var map__12999 = p__12994;
var map__12999__$1 = cljs.core.__destructure_map(map__12999);
var opts = map__12999__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12992){
var G__12993 = cljs.core.first(seq12992);
var seq12992__$1 = cljs.core.next(seq12992);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12993,seq12992__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__13008 = arguments.length;
switch (G__13008) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__12848__auto___15520 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12849__auto__ = (function (){var switch__11888__auto__ = (function (state_13034){
var state_val_13035 = (state_13034[(1)]);
if((state_val_13035 === (7))){
var inst_13030 = (state_13034[(2)]);
var state_13034__$1 = state_13034;
var statearr_13041_15522 = state_13034__$1;
(statearr_13041_15522[(2)] = inst_13030);

(statearr_13041_15522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13035 === (1))){
var state_13034__$1 = state_13034;
var statearr_13042_15523 = state_13034__$1;
(statearr_13042_15523[(2)] = null);

(statearr_13042_15523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13035 === (4))){
var inst_13013 = (state_13034[(7)]);
var inst_13013__$1 = (state_13034[(2)]);
var inst_13014 = (inst_13013__$1 == null);
var state_13034__$1 = (function (){var statearr_13043 = state_13034;
(statearr_13043[(7)] = inst_13013__$1);

return statearr_13043;
})();
if(cljs.core.truth_(inst_13014)){
var statearr_13044_15525 = state_13034__$1;
(statearr_13044_15525[(1)] = (5));

} else {
var statearr_13045_15526 = state_13034__$1;
(statearr_13045_15526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13035 === (13))){
var state_13034__$1 = state_13034;
var statearr_13047_15527 = state_13034__$1;
(statearr_13047_15527[(2)] = null);

(statearr_13047_15527[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13035 === (6))){
var inst_13013 = (state_13034[(7)]);
var state_13034__$1 = state_13034;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13034__$1,(11),to,inst_13013);
} else {
if((state_val_13035 === (3))){
var inst_13032 = (state_13034[(2)]);
var state_13034__$1 = state_13034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13034__$1,inst_13032);
} else {
if((state_val_13035 === (12))){
var state_13034__$1 = state_13034;
var statearr_13049_15528 = state_13034__$1;
(statearr_13049_15528[(2)] = null);

(statearr_13049_15528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13035 === (2))){
var state_13034__$1 = state_13034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13034__$1,(4),from);
} else {
if((state_val_13035 === (11))){
var inst_13023 = (state_13034[(2)]);
var state_13034__$1 = state_13034;
if(cljs.core.truth_(inst_13023)){
var statearr_13050_15529 = state_13034__$1;
(statearr_13050_15529[(1)] = (12));

} else {
var statearr_13051_15530 = state_13034__$1;
(statearr_13051_15530[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13035 === (9))){
var state_13034__$1 = state_13034;
var statearr_13052_15531 = state_13034__$1;
(statearr_13052_15531[(2)] = null);

(statearr_13052_15531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13035 === (5))){
var state_13034__$1 = state_13034;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13053_15532 = state_13034__$1;
(statearr_13053_15532[(1)] = (8));

} else {
var statearr_13054_15533 = state_13034__$1;
(statearr_13054_15533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13035 === (14))){
var inst_13028 = (state_13034[(2)]);
var state_13034__$1 = state_13034;
var statearr_13056_15534 = state_13034__$1;
(statearr_13056_15534[(2)] = inst_13028);

(statearr_13056_15534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13035 === (10))){
var inst_13020 = (state_13034[(2)]);
var state_13034__$1 = state_13034;
var statearr_13061_15535 = state_13034__$1;
(statearr_13061_15535[(2)] = inst_13020);

(statearr_13061_15535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13035 === (8))){
var inst_13017 = cljs.core.async.close_BANG_(to);
var state_13034__$1 = state_13034;
var statearr_13062_15536 = state_13034__$1;
(statearr_13062_15536[(2)] = inst_13017);

(statearr_13062_15536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11889__auto__ = null;
var cljs$core$async$state_machine__11889__auto____0 = (function (){
var statearr_13064 = [null,null,null,null,null,null,null,null];
(statearr_13064[(0)] = cljs$core$async$state_machine__11889__auto__);

(statearr_13064[(1)] = (1));

return statearr_13064;
});
var cljs$core$async$state_machine__11889__auto____1 = (function (state_13034){
while(true){
var ret_value__11890__auto__ = (function (){try{while(true){
var result__11891__auto__ = switch__11888__auto__(state_13034);
if(cljs.core.keyword_identical_QMARK_(result__11891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11891__auto__;
}
break;
}
}catch (e13065){var ex__11892__auto__ = e13065;
var statearr_13066_15538 = state_13034;
(statearr_13066_15538[(2)] = ex__11892__auto__);


if(cljs.core.seq((state_13034[(4)]))){
var statearr_13067_15539 = state_13034;
(statearr_13067_15539[(1)] = cljs.core.first((state_13034[(4)])));

} else {
throw ex__11892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15540 = state_13034;
state_13034 = G__15540;
continue;
} else {
return ret_value__11890__auto__;
}
break;
}
});
cljs$core$async$state_machine__11889__auto__ = function(state_13034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11889__auto____1.call(this,state_13034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11889__auto____0;
cljs$core$async$state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11889__auto____1;
return cljs$core$async$state_machine__11889__auto__;
})()
})();
var state__12850__auto__ = (function (){var statearr_13068 = f__12849__auto__();
(statearr_13068[(6)] = c__12848__auto___15520);

return statearr_13068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12850__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__13075){
var vec__13076 = p__13075;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13076,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13076,(1),null);
var job = vec__13076;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__12848__auto___15543 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12849__auto__ = (function (){var switch__11888__auto__ = (function (state_13083){
var state_val_13084 = (state_13083[(1)]);
if((state_val_13084 === (1))){
var state_13083__$1 = state_13083;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13083__$1,(2),res,v);
} else {
if((state_val_13084 === (2))){
var inst_13080 = (state_13083[(2)]);
var inst_13081 = cljs.core.async.close_BANG_(res);
var state_13083__$1 = (function (){var statearr_13086 = state_13083;
(statearr_13086[(7)] = inst_13080);

return statearr_13086;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13083__$1,inst_13081);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11889__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11889__auto____0 = (function (){
var statearr_13087 = [null,null,null,null,null,null,null,null];
(statearr_13087[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11889__auto__);

(statearr_13087[(1)] = (1));

return statearr_13087;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11889__auto____1 = (function (state_13083){
while(true){
var ret_value__11890__auto__ = (function (){try{while(true){
var result__11891__auto__ = switch__11888__auto__(state_13083);
if(cljs.core.keyword_identical_QMARK_(result__11891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11891__auto__;
}
break;
}
}catch (e13088){var ex__11892__auto__ = e13088;
var statearr_13089_15545 = state_13083;
(statearr_13089_15545[(2)] = ex__11892__auto__);


if(cljs.core.seq((state_13083[(4)]))){
var statearr_13090_15546 = state_13083;
(statearr_13090_15546[(1)] = cljs.core.first((state_13083[(4)])));

} else {
throw ex__11892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15547 = state_13083;
state_13083 = G__15547;
continue;
} else {
return ret_value__11890__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11889__auto__ = function(state_13083){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11889__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11889__auto____1.call(this,state_13083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11889__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11889__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11889__auto__;
})()
})();
var state__12850__auto__ = (function (){var statearr_13092 = f__12849__auto__();
(statearr_13092[(6)] = c__12848__auto___15543);

return statearr_13092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12850__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__13097){
var vec__13098 = p__13097;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13098,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13098,(1),null);
var job = vec__13098;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___15552 = n;
var __15554 = (0);
while(true){
if((__15554 < n__5593__auto___15552)){
var G__13102_15559 = type;
var G__13102_15560__$1 = (((G__13102_15559 instanceof cljs.core.Keyword))?G__13102_15559.fqn:null);
switch (G__13102_15560__$1) {
case "compute":
var c__12848__auto___15563 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15554,c__12848__auto___15563,G__13102_15559,G__13102_15560__$1,n__5593__auto___15552,jobs,results,process__$1,async){
return (function (){
var f__12849__auto__ = (function (){var switch__11888__auto__ = ((function (__15554,c__12848__auto___15563,G__13102_15559,G__13102_15560__$1,n__5593__auto___15552,jobs,results,process__$1,async){
return (function (state_13115){
var state_val_13116 = (state_13115[(1)]);
if((state_val_13116 === (1))){
var state_13115__$1 = state_13115;
var statearr_13119_15565 = state_13115__$1;
(statearr_13119_15565[(2)] = null);

(statearr_13119_15565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13116 === (2))){
var state_13115__$1 = state_13115;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13115__$1,(4),jobs);
} else {
if((state_val_13116 === (3))){
var inst_13113 = (state_13115[(2)]);
var state_13115__$1 = state_13115;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13115__$1,inst_13113);
} else {
if((state_val_13116 === (4))){
var inst_13105 = (state_13115[(2)]);
var inst_13106 = process__$1(inst_13105);
var state_13115__$1 = state_13115;
if(cljs.core.truth_(inst_13106)){
var statearr_13120_15572 = state_13115__$1;
(statearr_13120_15572[(1)] = (5));

} else {
var statearr_13121_15573 = state_13115__$1;
(statearr_13121_15573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13116 === (5))){
var state_13115__$1 = state_13115;
var statearr_13126_15574 = state_13115__$1;
(statearr_13126_15574[(2)] = null);

(statearr_13126_15574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13116 === (6))){
var state_13115__$1 = state_13115;
var statearr_13128_15575 = state_13115__$1;
(statearr_13128_15575[(2)] = null);

(statearr_13128_15575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13116 === (7))){
var inst_13111 = (state_13115[(2)]);
var state_13115__$1 = state_13115;
var statearr_13130_15576 = state_13115__$1;
(statearr_13130_15576[(2)] = inst_13111);

(statearr_13130_15576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15554,c__12848__auto___15563,G__13102_15559,G__13102_15560__$1,n__5593__auto___15552,jobs,results,process__$1,async))
;
return ((function (__15554,switch__11888__auto__,c__12848__auto___15563,G__13102_15559,G__13102_15560__$1,n__5593__auto___15552,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11889__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11889__auto____0 = (function (){
var statearr_13131 = [null,null,null,null,null,null,null];
(statearr_13131[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11889__auto__);

(statearr_13131[(1)] = (1));

return statearr_13131;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11889__auto____1 = (function (state_13115){
while(true){
var ret_value__11890__auto__ = (function (){try{while(true){
var result__11891__auto__ = switch__11888__auto__(state_13115);
if(cljs.core.keyword_identical_QMARK_(result__11891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11891__auto__;
}
break;
}
}catch (e13133){var ex__11892__auto__ = e13133;
var statearr_13134_15577 = state_13115;
(statearr_13134_15577[(2)] = ex__11892__auto__);


if(cljs.core.seq((state_13115[(4)]))){
var statearr_13136_15578 = state_13115;
(statearr_13136_15578[(1)] = cljs.core.first((state_13115[(4)])));

} else {
throw ex__11892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15579 = state_13115;
state_13115 = G__15579;
continue;
} else {
return ret_value__11890__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11889__auto__ = function(state_13115){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11889__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11889__auto____1.call(this,state_13115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11889__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11889__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11889__auto__;
})()
;})(__15554,switch__11888__auto__,c__12848__auto___15563,G__13102_15559,G__13102_15560__$1,n__5593__auto___15552,jobs,results,process__$1,async))
})();
var state__12850__auto__ = (function (){var statearr_13138 = f__12849__auto__();
(statearr_13138[(6)] = c__12848__auto___15563);

return statearr_13138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12850__auto__);
});})(__15554,c__12848__auto___15563,G__13102_15559,G__13102_15560__$1,n__5593__auto___15552,jobs,results,process__$1,async))
);


break;
case "async":
var c__12848__auto___15580 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15554,c__12848__auto___15580,G__13102_15559,G__13102_15560__$1,n__5593__auto___15552,jobs,results,process__$1,async){
return (function (){
var f__12849__auto__ = (function (){var switch__11888__auto__ = ((function (__15554,c__12848__auto___15580,G__13102_15559,G__13102_15560__$1,n__5593__auto___15552,jobs,results,process__$1,async){
return (function (state_13155){
var state_val_13156 = (state_13155[(1)]);
if((state_val_13156 === (1))){
var state_13155__$1 = state_13155;
var statearr_13159_15581 = state_13155__$1;
(statearr_13159_15581[(2)] = null);

(statearr_13159_15581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13156 === (2))){
var state_13155__$1 = state_13155;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13155__$1,(4),jobs);
} else {
if((state_val_13156 === (3))){
var inst_13153 = (state_13155[(2)]);
var state_13155__$1 = state_13155;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13155__$1,inst_13153);
} else {
if((state_val_13156 === (4))){
var inst_13145 = (state_13155[(2)]);
var inst_13146 = async(inst_13145);
var state_13155__$1 = state_13155;
if(cljs.core.truth_(inst_13146)){
var statearr_13160_15582 = state_13155__$1;
(statearr_13160_15582[(1)] = (5));

} else {
var statearr_13161_15583 = state_13155__$1;
(statearr_13161_15583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13156 === (5))){
var state_13155__$1 = state_13155;
var statearr_13162_15587 = state_13155__$1;
(statearr_13162_15587[(2)] = null);

(statearr_13162_15587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13156 === (6))){
var state_13155__$1 = state_13155;
var statearr_13163_15588 = state_13155__$1;
(statearr_13163_15588[(2)] = null);

(statearr_13163_15588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13156 === (7))){
var inst_13151 = (state_13155[(2)]);
var state_13155__$1 = state_13155;
var statearr_13164_15589 = state_13155__$1;
(statearr_13164_15589[(2)] = inst_13151);

(statearr_13164_15589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15554,c__12848__auto___15580,G__13102_15559,G__13102_15560__$1,n__5593__auto___15552,jobs,results,process__$1,async))
;
return ((function (__15554,switch__11888__auto__,c__12848__auto___15580,G__13102_15559,G__13102_15560__$1,n__5593__auto___15552,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11889__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11889__auto____0 = (function (){
var statearr_13165 = [null,null,null,null,null,null,null];
(statearr_13165[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11889__auto__);

(statearr_13165[(1)] = (1));

return statearr_13165;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11889__auto____1 = (function (state_13155){
while(true){
var ret_value__11890__auto__ = (function (){try{while(true){
var result__11891__auto__ = switch__11888__auto__(state_13155);
if(cljs.core.keyword_identical_QMARK_(result__11891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11891__auto__;
}
break;
}
}catch (e13166){var ex__11892__auto__ = e13166;
var statearr_13167_15590 = state_13155;
(statearr_13167_15590[(2)] = ex__11892__auto__);


if(cljs.core.seq((state_13155[(4)]))){
var statearr_13169_15591 = state_13155;
(statearr_13169_15591[(1)] = cljs.core.first((state_13155[(4)])));

} else {
throw ex__11892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15596 = state_13155;
state_13155 = G__15596;
continue;
} else {
return ret_value__11890__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11889__auto__ = function(state_13155){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11889__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11889__auto____1.call(this,state_13155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11889__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11889__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11889__auto__;
})()
;})(__15554,switch__11888__auto__,c__12848__auto___15580,G__13102_15559,G__13102_15560__$1,n__5593__auto___15552,jobs,results,process__$1,async))
})();
var state__12850__auto__ = (function (){var statearr_13173 = f__12849__auto__();
(statearr_13173[(6)] = c__12848__auto___15580);

return statearr_13173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12850__auto__);
});})(__15554,c__12848__auto___15580,G__13102_15559,G__13102_15560__$1,n__5593__auto___15552,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13102_15560__$1)].join('')));

}

var G__15597 = (__15554 + (1));
__15554 = G__15597;
continue;
} else {
}
break;
}

var c__12848__auto___15598 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12849__auto__ = (function (){var switch__11888__auto__ = (function (state_13195){
var state_val_13196 = (state_13195[(1)]);
if((state_val_13196 === (7))){
var inst_13191 = (state_13195[(2)]);
var state_13195__$1 = state_13195;
var statearr_13200_15599 = state_13195__$1;
(statearr_13200_15599[(2)] = inst_13191);

(statearr_13200_15599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13196 === (1))){
var state_13195__$1 = state_13195;
var statearr_13201_15600 = state_13195__$1;
(statearr_13201_15600[(2)] = null);

(statearr_13201_15600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13196 === (4))){
var inst_13176 = (state_13195[(7)]);
var inst_13176__$1 = (state_13195[(2)]);
var inst_13177 = (inst_13176__$1 == null);
var state_13195__$1 = (function (){var statearr_13202 = state_13195;
(statearr_13202[(7)] = inst_13176__$1);

return statearr_13202;
})();
if(cljs.core.truth_(inst_13177)){
var statearr_13203_15601 = state_13195__$1;
(statearr_13203_15601[(1)] = (5));

} else {
var statearr_13204_15602 = state_13195__$1;
(statearr_13204_15602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13196 === (6))){
var inst_13176 = (state_13195[(7)]);
var inst_13181 = (state_13195[(8)]);
var inst_13181__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_13182 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13183 = [inst_13176,inst_13181__$1];
var inst_13184 = (new cljs.core.PersistentVector(null,2,(5),inst_13182,inst_13183,null));
var state_13195__$1 = (function (){var statearr_13205 = state_13195;
(statearr_13205[(8)] = inst_13181__$1);

return statearr_13205;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13195__$1,(8),jobs,inst_13184);
} else {
if((state_val_13196 === (3))){
var inst_13193 = (state_13195[(2)]);
var state_13195__$1 = state_13195;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13195__$1,inst_13193);
} else {
if((state_val_13196 === (2))){
var state_13195__$1 = state_13195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13195__$1,(4),from);
} else {
if((state_val_13196 === (9))){
var inst_13188 = (state_13195[(2)]);
var state_13195__$1 = (function (){var statearr_13210 = state_13195;
(statearr_13210[(9)] = inst_13188);

return statearr_13210;
})();
var statearr_13211_15607 = state_13195__$1;
(statearr_13211_15607[(2)] = null);

(statearr_13211_15607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13196 === (5))){
var inst_13179 = cljs.core.async.close_BANG_(jobs);
var state_13195__$1 = state_13195;
var statearr_13212_15608 = state_13195__$1;
(statearr_13212_15608[(2)] = inst_13179);

(statearr_13212_15608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13196 === (8))){
var inst_13181 = (state_13195[(8)]);
var inst_13186 = (state_13195[(2)]);
var state_13195__$1 = (function (){var statearr_13213 = state_13195;
(statearr_13213[(10)] = inst_13186);

return statearr_13213;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13195__$1,(9),results,inst_13181);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11889__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11889__auto____0 = (function (){
var statearr_13215 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13215[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11889__auto__);

(statearr_13215[(1)] = (1));

return statearr_13215;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11889__auto____1 = (function (state_13195){
while(true){
var ret_value__11890__auto__ = (function (){try{while(true){
var result__11891__auto__ = switch__11888__auto__(state_13195);
if(cljs.core.keyword_identical_QMARK_(result__11891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11891__auto__;
}
break;
}
}catch (e13216){var ex__11892__auto__ = e13216;
var statearr_13217_15620 = state_13195;
(statearr_13217_15620[(2)] = ex__11892__auto__);


if(cljs.core.seq((state_13195[(4)]))){
var statearr_13218_15624 = state_13195;
(statearr_13218_15624[(1)] = cljs.core.first((state_13195[(4)])));

} else {
throw ex__11892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15625 = state_13195;
state_13195 = G__15625;
continue;
} else {
return ret_value__11890__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11889__auto__ = function(state_13195){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11889__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11889__auto____1.call(this,state_13195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11889__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11889__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11889__auto__;
})()
})();
var state__12850__auto__ = (function (){var statearr_13220 = f__12849__auto__();
(statearr_13220[(6)] = c__12848__auto___15598);

return statearr_13220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12850__auto__);
}));


var c__12848__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12849__auto__ = (function (){var switch__11888__auto__ = (function (state_13268){
var state_val_13269 = (state_13268[(1)]);
if((state_val_13269 === (7))){
var inst_13261 = (state_13268[(2)]);
var state_13268__$1 = state_13268;
var statearr_13273_15626 = state_13268__$1;
(statearr_13273_15626[(2)] = inst_13261);

(statearr_13273_15626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13269 === (20))){
var state_13268__$1 = state_13268;
var statearr_13274_15627 = state_13268__$1;
(statearr_13274_15627[(2)] = null);

(statearr_13274_15627[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13269 === (1))){
var state_13268__$1 = state_13268;
var statearr_13275_15628 = state_13268__$1;
(statearr_13275_15628[(2)] = null);

(statearr_13275_15628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13269 === (4))){
var inst_13226 = (state_13268[(7)]);
var inst_13226__$1 = (state_13268[(2)]);
var inst_13227 = (inst_13226__$1 == null);
var state_13268__$1 = (function (){var statearr_13276 = state_13268;
(statearr_13276[(7)] = inst_13226__$1);

return statearr_13276;
})();
if(cljs.core.truth_(inst_13227)){
var statearr_13277_15629 = state_13268__$1;
(statearr_13277_15629[(1)] = (5));

} else {
var statearr_13278_15630 = state_13268__$1;
(statearr_13278_15630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13269 === (15))){
var inst_13243 = (state_13268[(8)]);
var state_13268__$1 = state_13268;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13268__$1,(18),to,inst_13243);
} else {
if((state_val_13269 === (21))){
var inst_13256 = (state_13268[(2)]);
var state_13268__$1 = state_13268;
var statearr_13283_15634 = state_13268__$1;
(statearr_13283_15634[(2)] = inst_13256);

(statearr_13283_15634[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13269 === (13))){
var inst_13258 = (state_13268[(2)]);
var state_13268__$1 = (function (){var statearr_13285 = state_13268;
(statearr_13285[(9)] = inst_13258);

return statearr_13285;
})();
var statearr_13288_15635 = state_13268__$1;
(statearr_13288_15635[(2)] = null);

(statearr_13288_15635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13269 === (6))){
var inst_13226 = (state_13268[(7)]);
var state_13268__$1 = state_13268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13268__$1,(11),inst_13226);
} else {
if((state_val_13269 === (17))){
var inst_13251 = (state_13268[(2)]);
var state_13268__$1 = state_13268;
if(cljs.core.truth_(inst_13251)){
var statearr_13294_15636 = state_13268__$1;
(statearr_13294_15636[(1)] = (19));

} else {
var statearr_13295_15637 = state_13268__$1;
(statearr_13295_15637[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13269 === (3))){
var inst_13263 = (state_13268[(2)]);
var state_13268__$1 = state_13268;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13268__$1,inst_13263);
} else {
if((state_val_13269 === (12))){
var inst_13240 = (state_13268[(10)]);
var state_13268__$1 = state_13268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13268__$1,(14),inst_13240);
} else {
if((state_val_13269 === (2))){
var state_13268__$1 = state_13268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13268__$1,(4),results);
} else {
if((state_val_13269 === (19))){
var state_13268__$1 = state_13268;
var statearr_13304_15642 = state_13268__$1;
(statearr_13304_15642[(2)] = null);

(statearr_13304_15642[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13269 === (11))){
var inst_13240 = (state_13268[(2)]);
var state_13268__$1 = (function (){var statearr_13307 = state_13268;
(statearr_13307[(10)] = inst_13240);

return statearr_13307;
})();
var statearr_13308_15643 = state_13268__$1;
(statearr_13308_15643[(2)] = null);

(statearr_13308_15643[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13269 === (9))){
var state_13268__$1 = state_13268;
var statearr_13309_15644 = state_13268__$1;
(statearr_13309_15644[(2)] = null);

(statearr_13309_15644[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13269 === (5))){
var state_13268__$1 = state_13268;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13313_15645 = state_13268__$1;
(statearr_13313_15645[(1)] = (8));

} else {
var statearr_13314_15649 = state_13268__$1;
(statearr_13314_15649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13269 === (14))){
var inst_13245 = (state_13268[(11)]);
var inst_13243 = (state_13268[(8)]);
var inst_13243__$1 = (state_13268[(2)]);
var inst_13244 = (inst_13243__$1 == null);
var inst_13245__$1 = cljs.core.not(inst_13244);
var state_13268__$1 = (function (){var statearr_13316 = state_13268;
(statearr_13316[(11)] = inst_13245__$1);

(statearr_13316[(8)] = inst_13243__$1);

return statearr_13316;
})();
if(inst_13245__$1){
var statearr_13319_15651 = state_13268__$1;
(statearr_13319_15651[(1)] = (15));

} else {
var statearr_13320_15652 = state_13268__$1;
(statearr_13320_15652[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13269 === (16))){
var inst_13245 = (state_13268[(11)]);
var state_13268__$1 = state_13268;
var statearr_13322_15656 = state_13268__$1;
(statearr_13322_15656[(2)] = inst_13245);

(statearr_13322_15656[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13269 === (10))){
var inst_13234 = (state_13268[(2)]);
var state_13268__$1 = state_13268;
var statearr_13323_15658 = state_13268__$1;
(statearr_13323_15658[(2)] = inst_13234);

(statearr_13323_15658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13269 === (18))){
var inst_13248 = (state_13268[(2)]);
var state_13268__$1 = state_13268;
var statearr_13327_15660 = state_13268__$1;
(statearr_13327_15660[(2)] = inst_13248);

(statearr_13327_15660[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13269 === (8))){
var inst_13231 = cljs.core.async.close_BANG_(to);
var state_13268__$1 = state_13268;
var statearr_13329_15666 = state_13268__$1;
(statearr_13329_15666[(2)] = inst_13231);

(statearr_13329_15666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11889__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11889__auto____0 = (function (){
var statearr_13333 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13333[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11889__auto__);

(statearr_13333[(1)] = (1));

return statearr_13333;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11889__auto____1 = (function (state_13268){
while(true){
var ret_value__11890__auto__ = (function (){try{while(true){
var result__11891__auto__ = switch__11888__auto__(state_13268);
if(cljs.core.keyword_identical_QMARK_(result__11891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11891__auto__;
}
break;
}
}catch (e13336){var ex__11892__auto__ = e13336;
var statearr_13337_15675 = state_13268;
(statearr_13337_15675[(2)] = ex__11892__auto__);


if(cljs.core.seq((state_13268[(4)]))){
var statearr_13338_15676 = state_13268;
(statearr_13338_15676[(1)] = cljs.core.first((state_13268[(4)])));

} else {
throw ex__11892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15678 = state_13268;
state_13268 = G__15678;
continue;
} else {
return ret_value__11890__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11889__auto__ = function(state_13268){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11889__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11889__auto____1.call(this,state_13268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11889__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11889__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11889__auto__;
})()
})();
var state__12850__auto__ = (function (){var statearr_13343 = f__12849__auto__();
(statearr_13343[(6)] = c__12848__auto__);

return statearr_13343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12850__auto__);
}));

return c__12848__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__13352 = arguments.length;
switch (G__13352) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__13368 = arguments.length;
switch (G__13368) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__13382 = arguments.length;
switch (G__13382) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__12848__auto___15701 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12849__auto__ = (function (){var switch__11888__auto__ = (function (state_13425){
var state_val_13426 = (state_13425[(1)]);
if((state_val_13426 === (7))){
var inst_13420 = (state_13425[(2)]);
var state_13425__$1 = state_13425;
var statearr_13434_15703 = state_13425__$1;
(statearr_13434_15703[(2)] = inst_13420);

(statearr_13434_15703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13426 === (1))){
var state_13425__$1 = state_13425;
var statearr_13435_15704 = state_13425__$1;
(statearr_13435_15704[(2)] = null);

(statearr_13435_15704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13426 === (4))){
var inst_13395 = (state_13425[(7)]);
var inst_13395__$1 = (state_13425[(2)]);
var inst_13397 = (inst_13395__$1 == null);
var state_13425__$1 = (function (){var statearr_13439 = state_13425;
(statearr_13439[(7)] = inst_13395__$1);

return statearr_13439;
})();
if(cljs.core.truth_(inst_13397)){
var statearr_13440_15710 = state_13425__$1;
(statearr_13440_15710[(1)] = (5));

} else {
var statearr_13442_15711 = state_13425__$1;
(statearr_13442_15711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13426 === (13))){
var state_13425__$1 = state_13425;
var statearr_13445_15712 = state_13425__$1;
(statearr_13445_15712[(2)] = null);

(statearr_13445_15712[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13426 === (6))){
var inst_13395 = (state_13425[(7)]);
var inst_13407 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_13395) : p.call(null,inst_13395));
var state_13425__$1 = state_13425;
if(cljs.core.truth_(inst_13407)){
var statearr_13447_15715 = state_13425__$1;
(statearr_13447_15715[(1)] = (9));

} else {
var statearr_13450_15717 = state_13425__$1;
(statearr_13450_15717[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13426 === (3))){
var inst_13422 = (state_13425[(2)]);
var state_13425__$1 = state_13425;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13425__$1,inst_13422);
} else {
if((state_val_13426 === (12))){
var state_13425__$1 = state_13425;
var statearr_13456_15719 = state_13425__$1;
(statearr_13456_15719[(2)] = null);

(statearr_13456_15719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13426 === (2))){
var state_13425__$1 = state_13425;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13425__$1,(4),ch);
} else {
if((state_val_13426 === (11))){
var inst_13395 = (state_13425[(7)]);
var inst_13411 = (state_13425[(2)]);
var state_13425__$1 = state_13425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13425__$1,(8),inst_13411,inst_13395);
} else {
if((state_val_13426 === (9))){
var state_13425__$1 = state_13425;
var statearr_13461_15723 = state_13425__$1;
(statearr_13461_15723[(2)] = tc);

(statearr_13461_15723[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13426 === (5))){
var inst_13404 = cljs.core.async.close_BANG_(tc);
var inst_13405 = cljs.core.async.close_BANG_(fc);
var state_13425__$1 = (function (){var statearr_13465 = state_13425;
(statearr_13465[(8)] = inst_13404);

return statearr_13465;
})();
var statearr_13467_15729 = state_13425__$1;
(statearr_13467_15729[(2)] = inst_13405);

(statearr_13467_15729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13426 === (14))){
var inst_13418 = (state_13425[(2)]);
var state_13425__$1 = state_13425;
var statearr_13471_15731 = state_13425__$1;
(statearr_13471_15731[(2)] = inst_13418);

(statearr_13471_15731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13426 === (10))){
var state_13425__$1 = state_13425;
var statearr_13473_15732 = state_13425__$1;
(statearr_13473_15732[(2)] = fc);

(statearr_13473_15732[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13426 === (8))){
var inst_13413 = (state_13425[(2)]);
var state_13425__$1 = state_13425;
if(cljs.core.truth_(inst_13413)){
var statearr_13477_15733 = state_13425__$1;
(statearr_13477_15733[(1)] = (12));

} else {
var statearr_13478_15734 = state_13425__$1;
(statearr_13478_15734[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11889__auto__ = null;
var cljs$core$async$state_machine__11889__auto____0 = (function (){
var statearr_13483 = [null,null,null,null,null,null,null,null,null];
(statearr_13483[(0)] = cljs$core$async$state_machine__11889__auto__);

(statearr_13483[(1)] = (1));

return statearr_13483;
});
var cljs$core$async$state_machine__11889__auto____1 = (function (state_13425){
while(true){
var ret_value__11890__auto__ = (function (){try{while(true){
var result__11891__auto__ = switch__11888__auto__(state_13425);
if(cljs.core.keyword_identical_QMARK_(result__11891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11891__auto__;
}
break;
}
}catch (e13484){var ex__11892__auto__ = e13484;
var statearr_13485_15735 = state_13425;
(statearr_13485_15735[(2)] = ex__11892__auto__);


if(cljs.core.seq((state_13425[(4)]))){
var statearr_13487_15740 = state_13425;
(statearr_13487_15740[(1)] = cljs.core.first((state_13425[(4)])));

} else {
throw ex__11892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15741 = state_13425;
state_13425 = G__15741;
continue;
} else {
return ret_value__11890__auto__;
}
break;
}
});
cljs$core$async$state_machine__11889__auto__ = function(state_13425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11889__auto____1.call(this,state_13425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11889__auto____0;
cljs$core$async$state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11889__auto____1;
return cljs$core$async$state_machine__11889__auto__;
})()
})();
var state__12850__auto__ = (function (){var statearr_13491 = f__12849__auto__();
(statearr_13491[(6)] = c__12848__auto___15701);

return statearr_13491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12850__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__12848__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12849__auto__ = (function (){var switch__11888__auto__ = (function (state_13519){
var state_val_13521 = (state_13519[(1)]);
if((state_val_13521 === (7))){
var inst_13514 = (state_13519[(2)]);
var state_13519__$1 = state_13519;
var statearr_13524_15746 = state_13519__$1;
(statearr_13524_15746[(2)] = inst_13514);

(statearr_13524_15746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13521 === (1))){
var inst_13496 = init;
var inst_13497 = inst_13496;
var state_13519__$1 = (function (){var statearr_13525 = state_13519;
(statearr_13525[(7)] = inst_13497);

return statearr_13525;
})();
var statearr_13528_15747 = state_13519__$1;
(statearr_13528_15747[(2)] = null);

(statearr_13528_15747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13521 === (4))){
var inst_13501 = (state_13519[(8)]);
var inst_13501__$1 = (state_13519[(2)]);
var inst_13502 = (inst_13501__$1 == null);
var state_13519__$1 = (function (){var statearr_13530 = state_13519;
(statearr_13530[(8)] = inst_13501__$1);

return statearr_13530;
})();
if(cljs.core.truth_(inst_13502)){
var statearr_13532_15752 = state_13519__$1;
(statearr_13532_15752[(1)] = (5));

} else {
var statearr_13533_15754 = state_13519__$1;
(statearr_13533_15754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13521 === (6))){
var inst_13497 = (state_13519[(7)]);
var inst_13505 = (state_13519[(9)]);
var inst_13501 = (state_13519[(8)]);
var inst_13505__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_13497,inst_13501) : f.call(null,inst_13497,inst_13501));
var inst_13506 = cljs.core.reduced_QMARK_(inst_13505__$1);
var state_13519__$1 = (function (){var statearr_13536 = state_13519;
(statearr_13536[(9)] = inst_13505__$1);

return statearr_13536;
})();
if(inst_13506){
var statearr_13540_15763 = state_13519__$1;
(statearr_13540_15763[(1)] = (8));

} else {
var statearr_13541_15764 = state_13519__$1;
(statearr_13541_15764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13521 === (3))){
var inst_13516 = (state_13519[(2)]);
var state_13519__$1 = state_13519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13519__$1,inst_13516);
} else {
if((state_val_13521 === (2))){
var state_13519__$1 = state_13519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13519__$1,(4),ch);
} else {
if((state_val_13521 === (9))){
var inst_13505 = (state_13519[(9)]);
var inst_13497 = inst_13505;
var state_13519__$1 = (function (){var statearr_13547 = state_13519;
(statearr_13547[(7)] = inst_13497);

return statearr_13547;
})();
var statearr_13548_15779 = state_13519__$1;
(statearr_13548_15779[(2)] = null);

(statearr_13548_15779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13521 === (5))){
var inst_13497 = (state_13519[(7)]);
var state_13519__$1 = state_13519;
var statearr_13550_15789 = state_13519__$1;
(statearr_13550_15789[(2)] = inst_13497);

(statearr_13550_15789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13521 === (10))){
var inst_13512 = (state_13519[(2)]);
var state_13519__$1 = state_13519;
var statearr_13551_15793 = state_13519__$1;
(statearr_13551_15793[(2)] = inst_13512);

(statearr_13551_15793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13521 === (8))){
var inst_13505 = (state_13519[(9)]);
var inst_13508 = cljs.core.deref(inst_13505);
var state_13519__$1 = state_13519;
var statearr_13555_15794 = state_13519__$1;
(statearr_13555_15794[(2)] = inst_13508);

(statearr_13555_15794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__11889__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11889__auto____0 = (function (){
var statearr_13556 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13556[(0)] = cljs$core$async$reduce_$_state_machine__11889__auto__);

(statearr_13556[(1)] = (1));

return statearr_13556;
});
var cljs$core$async$reduce_$_state_machine__11889__auto____1 = (function (state_13519){
while(true){
var ret_value__11890__auto__ = (function (){try{while(true){
var result__11891__auto__ = switch__11888__auto__(state_13519);
if(cljs.core.keyword_identical_QMARK_(result__11891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11891__auto__;
}
break;
}
}catch (e13558){var ex__11892__auto__ = e13558;
var statearr_13559_15805 = state_13519;
(statearr_13559_15805[(2)] = ex__11892__auto__);


if(cljs.core.seq((state_13519[(4)]))){
var statearr_13561_15808 = state_13519;
(statearr_13561_15808[(1)] = cljs.core.first((state_13519[(4)])));

} else {
throw ex__11892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15809 = state_13519;
state_13519 = G__15809;
continue;
} else {
return ret_value__11890__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11889__auto__ = function(state_13519){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11889__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11889__auto____1.call(this,state_13519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11889__auto____0;
cljs$core$async$reduce_$_state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11889__auto____1;
return cljs$core$async$reduce_$_state_machine__11889__auto__;
})()
})();
var state__12850__auto__ = (function (){var statearr_13565 = f__12849__auto__();
(statearr_13565[(6)] = c__12848__auto__);

return statearr_13565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12850__auto__);
}));

return c__12848__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__12848__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12849__auto__ = (function (){var switch__11888__auto__ = (function (state_13576){
var state_val_13577 = (state_13576[(1)]);
if((state_val_13577 === (1))){
var inst_13571 = cljs.core.async.reduce(f__$1,init,ch);
var state_13576__$1 = state_13576;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13576__$1,(2),inst_13571);
} else {
if((state_val_13577 === (2))){
var inst_13573 = (state_13576[(2)]);
var inst_13574 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_13573) : f__$1.call(null,inst_13573));
var state_13576__$1 = state_13576;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13576__$1,inst_13574);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__11889__auto__ = null;
var cljs$core$async$transduce_$_state_machine__11889__auto____0 = (function (){
var statearr_13582 = [null,null,null,null,null,null,null];
(statearr_13582[(0)] = cljs$core$async$transduce_$_state_machine__11889__auto__);

(statearr_13582[(1)] = (1));

return statearr_13582;
});
var cljs$core$async$transduce_$_state_machine__11889__auto____1 = (function (state_13576){
while(true){
var ret_value__11890__auto__ = (function (){try{while(true){
var result__11891__auto__ = switch__11888__auto__(state_13576);
if(cljs.core.keyword_identical_QMARK_(result__11891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11891__auto__;
}
break;
}
}catch (e13584){var ex__11892__auto__ = e13584;
var statearr_13585_15859 = state_13576;
(statearr_13585_15859[(2)] = ex__11892__auto__);


if(cljs.core.seq((state_13576[(4)]))){
var statearr_13588_15865 = state_13576;
(statearr_13588_15865[(1)] = cljs.core.first((state_13576[(4)])));

} else {
throw ex__11892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15880 = state_13576;
state_13576 = G__15880;
continue;
} else {
return ret_value__11890__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__11889__auto__ = function(state_13576){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__11889__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__11889__auto____1.call(this,state_13576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__11889__auto____0;
cljs$core$async$transduce_$_state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__11889__auto____1;
return cljs$core$async$transduce_$_state_machine__11889__auto__;
})()
})();
var state__12850__auto__ = (function (){var statearr_13590 = f__12849__auto__();
(statearr_13590[(6)] = c__12848__auto__);

return statearr_13590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12850__auto__);
}));

return c__12848__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__13596 = arguments.length;
switch (G__13596) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__12848__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12849__auto__ = (function (){var switch__11888__auto__ = (function (state_13630){
var state_val_13634 = (state_13630[(1)]);
if((state_val_13634 === (7))){
var inst_13611 = (state_13630[(2)]);
var state_13630__$1 = state_13630;
var statearr_13644_15893 = state_13630__$1;
(statearr_13644_15893[(2)] = inst_13611);

(statearr_13644_15893[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13634 === (1))){
var inst_13604 = cljs.core.seq(coll);
var inst_13605 = inst_13604;
var state_13630__$1 = (function (){var statearr_13647 = state_13630;
(statearr_13647[(7)] = inst_13605);

return statearr_13647;
})();
var statearr_13649_15900 = state_13630__$1;
(statearr_13649_15900[(2)] = null);

(statearr_13649_15900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13634 === (4))){
var inst_13605 = (state_13630[(7)]);
var inst_13609 = cljs.core.first(inst_13605);
var state_13630__$1 = state_13630;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13630__$1,(7),ch,inst_13609);
} else {
if((state_val_13634 === (13))){
var inst_13623 = (state_13630[(2)]);
var state_13630__$1 = state_13630;
var statearr_13654_15913 = state_13630__$1;
(statearr_13654_15913[(2)] = inst_13623);

(statearr_13654_15913[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13634 === (6))){
var inst_13614 = (state_13630[(2)]);
var state_13630__$1 = state_13630;
if(cljs.core.truth_(inst_13614)){
var statearr_13656_15918 = state_13630__$1;
(statearr_13656_15918[(1)] = (8));

} else {
var statearr_13657_15924 = state_13630__$1;
(statearr_13657_15924[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13634 === (3))){
var inst_13627 = (state_13630[(2)]);
var state_13630__$1 = state_13630;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13630__$1,inst_13627);
} else {
if((state_val_13634 === (12))){
var state_13630__$1 = state_13630;
var statearr_13658_15925 = state_13630__$1;
(statearr_13658_15925[(2)] = null);

(statearr_13658_15925[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13634 === (2))){
var inst_13605 = (state_13630[(7)]);
var state_13630__$1 = state_13630;
if(cljs.core.truth_(inst_13605)){
var statearr_13659_15932 = state_13630__$1;
(statearr_13659_15932[(1)] = (4));

} else {
var statearr_13660_15933 = state_13630__$1;
(statearr_13660_15933[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13634 === (11))){
var inst_13620 = cljs.core.async.close_BANG_(ch);
var state_13630__$1 = state_13630;
var statearr_13661_15934 = state_13630__$1;
(statearr_13661_15934[(2)] = inst_13620);

(statearr_13661_15934[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13634 === (9))){
var state_13630__$1 = state_13630;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13662_15935 = state_13630__$1;
(statearr_13662_15935[(1)] = (11));

} else {
var statearr_13663_15936 = state_13630__$1;
(statearr_13663_15936[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13634 === (5))){
var inst_13605 = (state_13630[(7)]);
var state_13630__$1 = state_13630;
var statearr_13664_15937 = state_13630__$1;
(statearr_13664_15937[(2)] = inst_13605);

(statearr_13664_15937[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13634 === (10))){
var inst_13625 = (state_13630[(2)]);
var state_13630__$1 = state_13630;
var statearr_13665_15941 = state_13630__$1;
(statearr_13665_15941[(2)] = inst_13625);

(statearr_13665_15941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13634 === (8))){
var inst_13605 = (state_13630[(7)]);
var inst_13616 = cljs.core.next(inst_13605);
var inst_13605__$1 = inst_13616;
var state_13630__$1 = (function (){var statearr_13670 = state_13630;
(statearr_13670[(7)] = inst_13605__$1);

return statearr_13670;
})();
var statearr_13671_15942 = state_13630__$1;
(statearr_13671_15942[(2)] = null);

(statearr_13671_15942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11889__auto__ = null;
var cljs$core$async$state_machine__11889__auto____0 = (function (){
var statearr_13675 = [null,null,null,null,null,null,null,null];
(statearr_13675[(0)] = cljs$core$async$state_machine__11889__auto__);

(statearr_13675[(1)] = (1));

return statearr_13675;
});
var cljs$core$async$state_machine__11889__auto____1 = (function (state_13630){
while(true){
var ret_value__11890__auto__ = (function (){try{while(true){
var result__11891__auto__ = switch__11888__auto__(state_13630);
if(cljs.core.keyword_identical_QMARK_(result__11891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11891__auto__;
}
break;
}
}catch (e13677){var ex__11892__auto__ = e13677;
var statearr_13678_15943 = state_13630;
(statearr_13678_15943[(2)] = ex__11892__auto__);


if(cljs.core.seq((state_13630[(4)]))){
var statearr_13679_15945 = state_13630;
(statearr_13679_15945[(1)] = cljs.core.first((state_13630[(4)])));

} else {
throw ex__11892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15946 = state_13630;
state_13630 = G__15946;
continue;
} else {
return ret_value__11890__auto__;
}
break;
}
});
cljs$core$async$state_machine__11889__auto__ = function(state_13630){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11889__auto____1.call(this,state_13630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11889__auto____0;
cljs$core$async$state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11889__auto____1;
return cljs$core$async$state_machine__11889__auto__;
})()
})();
var state__12850__auto__ = (function (){var statearr_13680 = f__12849__auto__();
(statearr_13680[(6)] = c__12848__auto__);

return statearr_13680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12850__auto__);
}));

return c__12848__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__13686 = arguments.length;
switch (G__13686) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_15953 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_15953(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_15955 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_15955(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_15956 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_15956(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_15962 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_15962(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13721 = (function (ch,cs,meta13722){
this.ch = ch;
this.cs = cs;
this.meta13722 = meta13722;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13723,meta13722__$1){
var self__ = this;
var _13723__$1 = this;
return (new cljs.core.async.t_cljs$core$async13721(self__.ch,self__.cs,meta13722__$1));
}));

(cljs.core.async.t_cljs$core$async13721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13723){
var self__ = this;
var _13723__$1 = this;
return self__.meta13722;
}));

(cljs.core.async.t_cljs$core$async13721.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13721.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async13721.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13721.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async13721.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async13721.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async13721.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13722","meta13722",-1254318994,null)], null);
}));

(cljs.core.async.t_cljs$core$async13721.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13721.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13721");

(cljs.core.async.t_cljs$core$async13721.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async13721");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13721.
 */
cljs.core.async.__GT_t_cljs$core$async13721 = (function cljs$core$async$__GT_t_cljs$core$async13721(ch,cs,meta13722){
return (new cljs.core.async.t_cljs$core$async13721(ch,cs,meta13722));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async13721(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__12848__auto___15977 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12849__auto__ = (function (){var switch__11888__auto__ = (function (state_13903){
var state_val_13904 = (state_13903[(1)]);
if((state_val_13904 === (7))){
var inst_13899 = (state_13903[(2)]);
var state_13903__$1 = state_13903;
var statearr_13905_15979 = state_13903__$1;
(statearr_13905_15979[(2)] = inst_13899);

(statearr_13905_15979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (20))){
var inst_13792 = (state_13903[(7)]);
var inst_13804 = cljs.core.first(inst_13792);
var inst_13808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13804,(0),null);
var inst_13809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13804,(1),null);
var state_13903__$1 = (function (){var statearr_13906 = state_13903;
(statearr_13906[(8)] = inst_13808);

return statearr_13906;
})();
if(cljs.core.truth_(inst_13809)){
var statearr_13909_15986 = state_13903__$1;
(statearr_13909_15986[(1)] = (22));

} else {
var statearr_13912_15987 = state_13903__$1;
(statearr_13912_15987[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (27))){
var inst_13753 = (state_13903[(9)]);
var inst_13844 = (state_13903[(10)]);
var inst_13849 = (state_13903[(11)]);
var inst_13842 = (state_13903[(12)]);
var inst_13849__$1 = cljs.core._nth(inst_13842,inst_13844);
var inst_13850 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_13849__$1,inst_13753,done);
var state_13903__$1 = (function (){var statearr_13913 = state_13903;
(statearr_13913[(11)] = inst_13849__$1);

return statearr_13913;
})();
if(cljs.core.truth_(inst_13850)){
var statearr_13915_15994 = state_13903__$1;
(statearr_13915_15994[(1)] = (30));

} else {
var statearr_13916_15995 = state_13903__$1;
(statearr_13916_15995[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (1))){
var state_13903__$1 = state_13903;
var statearr_13917_15996 = state_13903__$1;
(statearr_13917_15996[(2)] = null);

(statearr_13917_15996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (24))){
var inst_13792 = (state_13903[(7)]);
var inst_13815 = (state_13903[(2)]);
var inst_13816 = cljs.core.next(inst_13792);
var inst_13762 = inst_13816;
var inst_13763 = null;
var inst_13764 = (0);
var inst_13765 = (0);
var state_13903__$1 = (function (){var statearr_13918 = state_13903;
(statearr_13918[(13)] = inst_13765);

(statearr_13918[(14)] = inst_13764);

(statearr_13918[(15)] = inst_13815);

(statearr_13918[(16)] = inst_13762);

(statearr_13918[(17)] = inst_13763);

return statearr_13918;
})();
var statearr_13919_16002 = state_13903__$1;
(statearr_13919_16002[(2)] = null);

(statearr_13919_16002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (39))){
var state_13903__$1 = state_13903;
var statearr_13926_16003 = state_13903__$1;
(statearr_13926_16003[(2)] = null);

(statearr_13926_16003[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (4))){
var inst_13753 = (state_13903[(9)]);
var inst_13753__$1 = (state_13903[(2)]);
var inst_13754 = (inst_13753__$1 == null);
var state_13903__$1 = (function (){var statearr_13929 = state_13903;
(statearr_13929[(9)] = inst_13753__$1);

return statearr_13929;
})();
if(cljs.core.truth_(inst_13754)){
var statearr_13930_16008 = state_13903__$1;
(statearr_13930_16008[(1)] = (5));

} else {
var statearr_13931_16009 = state_13903__$1;
(statearr_13931_16009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (15))){
var inst_13765 = (state_13903[(13)]);
var inst_13764 = (state_13903[(14)]);
var inst_13762 = (state_13903[(16)]);
var inst_13763 = (state_13903[(17)]);
var inst_13784 = (state_13903[(2)]);
var inst_13785 = (inst_13765 + (1));
var tmp13920 = inst_13764;
var tmp13921 = inst_13762;
var tmp13922 = inst_13763;
var inst_13762__$1 = tmp13921;
var inst_13763__$1 = tmp13922;
var inst_13764__$1 = tmp13920;
var inst_13765__$1 = inst_13785;
var state_13903__$1 = (function (){var statearr_13932 = state_13903;
(statearr_13932[(13)] = inst_13765__$1);

(statearr_13932[(14)] = inst_13764__$1);

(statearr_13932[(16)] = inst_13762__$1);

(statearr_13932[(17)] = inst_13763__$1);

(statearr_13932[(18)] = inst_13784);

return statearr_13932;
})();
var statearr_13933_16015 = state_13903__$1;
(statearr_13933_16015[(2)] = null);

(statearr_13933_16015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (21))){
var inst_13819 = (state_13903[(2)]);
var state_13903__$1 = state_13903;
var statearr_13937_16016 = state_13903__$1;
(statearr_13937_16016[(2)] = inst_13819);

(statearr_13937_16016[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (31))){
var inst_13849 = (state_13903[(11)]);
var inst_13853 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_13849);
var state_13903__$1 = state_13903;
var statearr_13938_16017 = state_13903__$1;
(statearr_13938_16017[(2)] = inst_13853);

(statearr_13938_16017[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (32))){
var inst_13844 = (state_13903[(10)]);
var inst_13841 = (state_13903[(19)]);
var inst_13843 = (state_13903[(20)]);
var inst_13842 = (state_13903[(12)]);
var inst_13855 = (state_13903[(2)]);
var inst_13856 = (inst_13844 + (1));
var tmp13934 = inst_13841;
var tmp13935 = inst_13843;
var tmp13936 = inst_13842;
var inst_13841__$1 = tmp13934;
var inst_13842__$1 = tmp13936;
var inst_13843__$1 = tmp13935;
var inst_13844__$1 = inst_13856;
var state_13903__$1 = (function (){var statearr_13939 = state_13903;
(statearr_13939[(21)] = inst_13855);

(statearr_13939[(10)] = inst_13844__$1);

(statearr_13939[(19)] = inst_13841__$1);

(statearr_13939[(20)] = inst_13843__$1);

(statearr_13939[(12)] = inst_13842__$1);

return statearr_13939;
})();
var statearr_13941_16022 = state_13903__$1;
(statearr_13941_16022[(2)] = null);

(statearr_13941_16022[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (40))){
var inst_13871 = (state_13903[(22)]);
var inst_13875 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_13871);
var state_13903__$1 = state_13903;
var statearr_13942_16023 = state_13903__$1;
(statearr_13942_16023[(2)] = inst_13875);

(statearr_13942_16023[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (33))){
var inst_13859 = (state_13903[(23)]);
var inst_13861 = cljs.core.chunked_seq_QMARK_(inst_13859);
var state_13903__$1 = state_13903;
if(inst_13861){
var statearr_13943_16030 = state_13903__$1;
(statearr_13943_16030[(1)] = (36));

} else {
var statearr_13944_16031 = state_13903__$1;
(statearr_13944_16031[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (13))){
var inst_13774 = (state_13903[(24)]);
var inst_13777 = cljs.core.async.close_BANG_(inst_13774);
var state_13903__$1 = state_13903;
var statearr_13946_16035 = state_13903__$1;
(statearr_13946_16035[(2)] = inst_13777);

(statearr_13946_16035[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (22))){
var inst_13808 = (state_13903[(8)]);
var inst_13812 = cljs.core.async.close_BANG_(inst_13808);
var state_13903__$1 = state_13903;
var statearr_13947_16036 = state_13903__$1;
(statearr_13947_16036[(2)] = inst_13812);

(statearr_13947_16036[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (36))){
var inst_13859 = (state_13903[(23)]);
var inst_13863 = cljs.core.chunk_first(inst_13859);
var inst_13867 = cljs.core.chunk_rest(inst_13859);
var inst_13868 = cljs.core.count(inst_13863);
var inst_13841 = inst_13867;
var inst_13842 = inst_13863;
var inst_13843 = inst_13868;
var inst_13844 = (0);
var state_13903__$1 = (function (){var statearr_13948 = state_13903;
(statearr_13948[(10)] = inst_13844);

(statearr_13948[(19)] = inst_13841);

(statearr_13948[(20)] = inst_13843);

(statearr_13948[(12)] = inst_13842);

return statearr_13948;
})();
var statearr_13949_16037 = state_13903__$1;
(statearr_13949_16037[(2)] = null);

(statearr_13949_16037[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (41))){
var inst_13859 = (state_13903[(23)]);
var inst_13877 = (state_13903[(2)]);
var inst_13879 = cljs.core.next(inst_13859);
var inst_13841 = inst_13879;
var inst_13842 = null;
var inst_13843 = (0);
var inst_13844 = (0);
var state_13903__$1 = (function (){var statearr_13950 = state_13903;
(statearr_13950[(10)] = inst_13844);

(statearr_13950[(19)] = inst_13841);

(statearr_13950[(25)] = inst_13877);

(statearr_13950[(20)] = inst_13843);

(statearr_13950[(12)] = inst_13842);

return statearr_13950;
})();
var statearr_13951_16042 = state_13903__$1;
(statearr_13951_16042[(2)] = null);

(statearr_13951_16042[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (43))){
var state_13903__$1 = state_13903;
var statearr_13952_16043 = state_13903__$1;
(statearr_13952_16043[(2)] = null);

(statearr_13952_16043[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (29))){
var inst_13887 = (state_13903[(2)]);
var state_13903__$1 = state_13903;
var statearr_13953_16044 = state_13903__$1;
(statearr_13953_16044[(2)] = inst_13887);

(statearr_13953_16044[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (44))){
var inst_13896 = (state_13903[(2)]);
var state_13903__$1 = (function (){var statearr_13954 = state_13903;
(statearr_13954[(26)] = inst_13896);

return statearr_13954;
})();
var statearr_13955_16045 = state_13903__$1;
(statearr_13955_16045[(2)] = null);

(statearr_13955_16045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (6))){
var inst_13829 = (state_13903[(27)]);
var inst_13828 = cljs.core.deref(cs);
var inst_13829__$1 = cljs.core.keys(inst_13828);
var inst_13830 = cljs.core.count(inst_13829__$1);
var inst_13831 = cljs.core.reset_BANG_(dctr,inst_13830);
var inst_13839 = cljs.core.seq(inst_13829__$1);
var inst_13841 = inst_13839;
var inst_13842 = null;
var inst_13843 = (0);
var inst_13844 = (0);
var state_13903__$1 = (function (){var statearr_13956 = state_13903;
(statearr_13956[(10)] = inst_13844);

(statearr_13956[(19)] = inst_13841);

(statearr_13956[(28)] = inst_13831);

(statearr_13956[(20)] = inst_13843);

(statearr_13956[(27)] = inst_13829__$1);

(statearr_13956[(12)] = inst_13842);

return statearr_13956;
})();
var statearr_13957_16047 = state_13903__$1;
(statearr_13957_16047[(2)] = null);

(statearr_13957_16047[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (28))){
var inst_13841 = (state_13903[(19)]);
var inst_13859 = (state_13903[(23)]);
var inst_13859__$1 = cljs.core.seq(inst_13841);
var state_13903__$1 = (function (){var statearr_13958 = state_13903;
(statearr_13958[(23)] = inst_13859__$1);

return statearr_13958;
})();
if(inst_13859__$1){
var statearr_13959_16048 = state_13903__$1;
(statearr_13959_16048[(1)] = (33));

} else {
var statearr_13962_16049 = state_13903__$1;
(statearr_13962_16049[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (25))){
var inst_13844 = (state_13903[(10)]);
var inst_13843 = (state_13903[(20)]);
var inst_13846 = (inst_13844 < inst_13843);
var inst_13847 = inst_13846;
var state_13903__$1 = state_13903;
if(cljs.core.truth_(inst_13847)){
var statearr_13963_16050 = state_13903__$1;
(statearr_13963_16050[(1)] = (27));

} else {
var statearr_13964_16051 = state_13903__$1;
(statearr_13964_16051[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (34))){
var state_13903__$1 = state_13903;
var statearr_13966_16053 = state_13903__$1;
(statearr_13966_16053[(2)] = null);

(statearr_13966_16053[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (17))){
var state_13903__$1 = state_13903;
var statearr_13968_16054 = state_13903__$1;
(statearr_13968_16054[(2)] = null);

(statearr_13968_16054[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (3))){
var inst_13901 = (state_13903[(2)]);
var state_13903__$1 = state_13903;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13903__$1,inst_13901);
} else {
if((state_val_13904 === (12))){
var inst_13824 = (state_13903[(2)]);
var state_13903__$1 = state_13903;
var statearr_13969_16055 = state_13903__$1;
(statearr_13969_16055[(2)] = inst_13824);

(statearr_13969_16055[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (2))){
var state_13903__$1 = state_13903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13903__$1,(4),ch);
} else {
if((state_val_13904 === (23))){
var state_13903__$1 = state_13903;
var statearr_13970_16056 = state_13903__$1;
(statearr_13970_16056[(2)] = null);

(statearr_13970_16056[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (35))){
var inst_13885 = (state_13903[(2)]);
var state_13903__$1 = state_13903;
var statearr_13995_16061 = state_13903__$1;
(statearr_13995_16061[(2)] = inst_13885);

(statearr_13995_16061[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (19))){
var inst_13792 = (state_13903[(7)]);
var inst_13796 = cljs.core.chunk_first(inst_13792);
var inst_13797 = cljs.core.chunk_rest(inst_13792);
var inst_13798 = cljs.core.count(inst_13796);
var inst_13762 = inst_13797;
var inst_13763 = inst_13796;
var inst_13764 = inst_13798;
var inst_13765 = (0);
var state_13903__$1 = (function (){var statearr_13998 = state_13903;
(statearr_13998[(13)] = inst_13765);

(statearr_13998[(14)] = inst_13764);

(statearr_13998[(16)] = inst_13762);

(statearr_13998[(17)] = inst_13763);

return statearr_13998;
})();
var statearr_13999_16070 = state_13903__$1;
(statearr_13999_16070[(2)] = null);

(statearr_13999_16070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (11))){
var inst_13762 = (state_13903[(16)]);
var inst_13792 = (state_13903[(7)]);
var inst_13792__$1 = cljs.core.seq(inst_13762);
var state_13903__$1 = (function (){var statearr_14000 = state_13903;
(statearr_14000[(7)] = inst_13792__$1);

return statearr_14000;
})();
if(inst_13792__$1){
var statearr_14001_16083 = state_13903__$1;
(statearr_14001_16083[(1)] = (16));

} else {
var statearr_14002_16088 = state_13903__$1;
(statearr_14002_16088[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (9))){
var inst_13826 = (state_13903[(2)]);
var state_13903__$1 = state_13903;
var statearr_14003_16090 = state_13903__$1;
(statearr_14003_16090[(2)] = inst_13826);

(statearr_14003_16090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (5))){
var inst_13760 = cljs.core.deref(cs);
var inst_13761 = cljs.core.seq(inst_13760);
var inst_13762 = inst_13761;
var inst_13763 = null;
var inst_13764 = (0);
var inst_13765 = (0);
var state_13903__$1 = (function (){var statearr_14010 = state_13903;
(statearr_14010[(13)] = inst_13765);

(statearr_14010[(14)] = inst_13764);

(statearr_14010[(16)] = inst_13762);

(statearr_14010[(17)] = inst_13763);

return statearr_14010;
})();
var statearr_14011_16093 = state_13903__$1;
(statearr_14011_16093[(2)] = null);

(statearr_14011_16093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (14))){
var state_13903__$1 = state_13903;
var statearr_14012_16096 = state_13903__$1;
(statearr_14012_16096[(2)] = null);

(statearr_14012_16096[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (45))){
var inst_13893 = (state_13903[(2)]);
var state_13903__$1 = state_13903;
var statearr_14013_16097 = state_13903__$1;
(statearr_14013_16097[(2)] = inst_13893);

(statearr_14013_16097[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (26))){
var inst_13829 = (state_13903[(27)]);
var inst_13889 = (state_13903[(2)]);
var inst_13890 = cljs.core.seq(inst_13829);
var state_13903__$1 = (function (){var statearr_14015 = state_13903;
(statearr_14015[(29)] = inst_13889);

return statearr_14015;
})();
if(inst_13890){
var statearr_14017_16114 = state_13903__$1;
(statearr_14017_16114[(1)] = (42));

} else {
var statearr_14018_16115 = state_13903__$1;
(statearr_14018_16115[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (16))){
var inst_13792 = (state_13903[(7)]);
var inst_13794 = cljs.core.chunked_seq_QMARK_(inst_13792);
var state_13903__$1 = state_13903;
if(inst_13794){
var statearr_14019_16121 = state_13903__$1;
(statearr_14019_16121[(1)] = (19));

} else {
var statearr_14020_16123 = state_13903__$1;
(statearr_14020_16123[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (38))){
var inst_13882 = (state_13903[(2)]);
var state_13903__$1 = state_13903;
var statearr_14023_16135 = state_13903__$1;
(statearr_14023_16135[(2)] = inst_13882);

(statearr_14023_16135[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (30))){
var state_13903__$1 = state_13903;
var statearr_14024_16142 = state_13903__$1;
(statearr_14024_16142[(2)] = null);

(statearr_14024_16142[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (10))){
var inst_13765 = (state_13903[(13)]);
var inst_13763 = (state_13903[(17)]);
var inst_13773 = cljs.core._nth(inst_13763,inst_13765);
var inst_13774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13773,(0),null);
var inst_13775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13773,(1),null);
var state_13903__$1 = (function (){var statearr_14029 = state_13903;
(statearr_14029[(24)] = inst_13774);

return statearr_14029;
})();
if(cljs.core.truth_(inst_13775)){
var statearr_14030_16147 = state_13903__$1;
(statearr_14030_16147[(1)] = (13));

} else {
var statearr_14031_16148 = state_13903__$1;
(statearr_14031_16148[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (18))){
var inst_13822 = (state_13903[(2)]);
var state_13903__$1 = state_13903;
var statearr_14032_16149 = state_13903__$1;
(statearr_14032_16149[(2)] = inst_13822);

(statearr_14032_16149[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (42))){
var state_13903__$1 = state_13903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13903__$1,(45),dchan);
} else {
if((state_val_13904 === (37))){
var inst_13753 = (state_13903[(9)]);
var inst_13859 = (state_13903[(23)]);
var inst_13871 = (state_13903[(22)]);
var inst_13871__$1 = cljs.core.first(inst_13859);
var inst_13872 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_13871__$1,inst_13753,done);
var state_13903__$1 = (function (){var statearr_14034 = state_13903;
(statearr_14034[(22)] = inst_13871__$1);

return statearr_14034;
})();
if(cljs.core.truth_(inst_13872)){
var statearr_14035_16153 = state_13903__$1;
(statearr_14035_16153[(1)] = (39));

} else {
var statearr_14036_16154 = state_13903__$1;
(statearr_14036_16154[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13904 === (8))){
var inst_13765 = (state_13903[(13)]);
var inst_13764 = (state_13903[(14)]);
var inst_13767 = (inst_13765 < inst_13764);
var inst_13768 = inst_13767;
var state_13903__$1 = state_13903;
if(cljs.core.truth_(inst_13768)){
var statearr_14038_16159 = state_13903__$1;
(statearr_14038_16159[(1)] = (10));

} else {
var statearr_14039_16164 = state_13903__$1;
(statearr_14039_16164[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__11889__auto__ = null;
var cljs$core$async$mult_$_state_machine__11889__auto____0 = (function (){
var statearr_14040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14040[(0)] = cljs$core$async$mult_$_state_machine__11889__auto__);

(statearr_14040[(1)] = (1));

return statearr_14040;
});
var cljs$core$async$mult_$_state_machine__11889__auto____1 = (function (state_13903){
while(true){
var ret_value__11890__auto__ = (function (){try{while(true){
var result__11891__auto__ = switch__11888__auto__(state_13903);
if(cljs.core.keyword_identical_QMARK_(result__11891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11891__auto__;
}
break;
}
}catch (e14041){var ex__11892__auto__ = e14041;
var statearr_14042_16176 = state_13903;
(statearr_14042_16176[(2)] = ex__11892__auto__);


if(cljs.core.seq((state_13903[(4)]))){
var statearr_14043_16177 = state_13903;
(statearr_14043_16177[(1)] = cljs.core.first((state_13903[(4)])));

} else {
throw ex__11892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16178 = state_13903;
state_13903 = G__16178;
continue;
} else {
return ret_value__11890__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11889__auto__ = function(state_13903){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11889__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11889__auto____1.call(this,state_13903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11889__auto____0;
cljs$core$async$mult_$_state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11889__auto____1;
return cljs$core$async$mult_$_state_machine__11889__auto__;
})()
})();
var state__12850__auto__ = (function (){var statearr_14048 = f__12849__auto__();
(statearr_14048[(6)] = c__12848__auto___15977);

return statearr_14048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12850__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__14051 = arguments.length;
switch (G__14051) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_16185 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_16185(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_16190 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_16190(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_16192 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_16192(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_16193 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null,m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_16193(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_16198 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null,m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_16198(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16201 = arguments.length;
var i__5727__auto___16202 = (0);
while(true){
if((i__5727__auto___16202 < len__5726__auto___16201)){
args__5732__auto__.push((arguments[i__5727__auto___16202]));

var G__16203 = (i__5727__auto___16202 + (1));
i__5727__auto___16202 = G__16203;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14112){
var map__14113 = p__14112;
var map__14113__$1 = cljs.core.__destructure_map(map__14113);
var opts = map__14113__$1;
var statearr_14114_16205 = state;
(statearr_14114_16205[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_14116_16210 = state;
(statearr_14116_16210[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_14120_16211 = state;
(statearr_14120_16211[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14104){
var G__14105 = cljs.core.first(seq14104);
var seq14104__$1 = cljs.core.next(seq14104);
var G__14106 = cljs.core.first(seq14104__$1);
var seq14104__$2 = cljs.core.next(seq14104__$1);
var G__14107 = cljs.core.first(seq14104__$2);
var seq14104__$3 = cljs.core.next(seq14104__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14105,G__14106,G__14107,seq14104__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14130 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14131){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14131 = meta14131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14132,meta14131__$1){
var self__ = this;
var _14132__$1 = this;
return (new cljs.core.async.t_cljs$core$async14130(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14131__$1));
}));

(cljs.core.async.t_cljs$core$async14130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14132){
var self__ = this;
var _14132__$1 = this;
return self__.meta14131;
}));

(cljs.core.async.t_cljs$core$async14130.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14130.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async14130.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14130.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14130.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14130.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14130.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14130.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14131","meta14131",-170391923,null)], null);
}));

(cljs.core.async.t_cljs$core$async14130.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14130");

(cljs.core.async.t_cljs$core$async14130.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14130");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14130.
 */
cljs.core.async.__GT_t_cljs$core$async14130 = (function cljs$core$async$__GT_t_cljs$core$async14130(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14131){
return (new cljs.core.async.t_cljs$core$async14130(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14131));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async14130(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__12848__auto___16227 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12849__auto__ = (function (){var switch__11888__auto__ = (function (state_14222){
var state_val_14223 = (state_14222[(1)]);
if((state_val_14223 === (7))){
var inst_14178 = (state_14222[(2)]);
var state_14222__$1 = state_14222;
if(cljs.core.truth_(inst_14178)){
var statearr_14230_16228 = state_14222__$1;
(statearr_14230_16228[(1)] = (8));

} else {
var statearr_14232_16229 = state_14222__$1;
(statearr_14232_16229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14223 === (20))){
var inst_14170 = (state_14222[(7)]);
var state_14222__$1 = state_14222;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14222__$1,(23),out,inst_14170);
} else {
if((state_val_14223 === (1))){
var inst_14153 = calc_state();
var inst_14154 = cljs.core.__destructure_map(inst_14153);
var inst_14155 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14154,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14156 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14154,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14157 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14154,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14158 = inst_14153;
var state_14222__$1 = (function (){var statearr_14233 = state_14222;
(statearr_14233[(8)] = inst_14156);

(statearr_14233[(9)] = inst_14157);

(statearr_14233[(10)] = inst_14158);

(statearr_14233[(11)] = inst_14155);

return statearr_14233;
})();
var statearr_14234_16236 = state_14222__$1;
(statearr_14234_16236[(2)] = null);

(statearr_14234_16236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14223 === (24))){
var inst_14161 = (state_14222[(12)]);
var inst_14158 = inst_14161;
var state_14222__$1 = (function (){var statearr_14236 = state_14222;
(statearr_14236[(10)] = inst_14158);

return statearr_14236;
})();
var statearr_14237_16239 = state_14222__$1;
(statearr_14237_16239[(2)] = null);

(statearr_14237_16239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14223 === (4))){
var inst_14170 = (state_14222[(7)]);
var inst_14173 = (state_14222[(13)]);
var inst_14169 = (state_14222[(2)]);
var inst_14170__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14169,(0),null);
var inst_14172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14169,(1),null);
var inst_14173__$1 = (inst_14170__$1 == null);
var state_14222__$1 = (function (){var statearr_14242 = state_14222;
(statearr_14242[(7)] = inst_14170__$1);

(statearr_14242[(13)] = inst_14173__$1);

(statearr_14242[(14)] = inst_14172);

return statearr_14242;
})();
if(cljs.core.truth_(inst_14173__$1)){
var statearr_14243_16241 = state_14222__$1;
(statearr_14243_16241[(1)] = (5));

} else {
var statearr_14244_16242 = state_14222__$1;
(statearr_14244_16242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14223 === (15))){
var inst_14196 = (state_14222[(15)]);
var inst_14162 = (state_14222[(16)]);
var inst_14196__$1 = cljs.core.empty_QMARK_(inst_14162);
var state_14222__$1 = (function (){var statearr_14245 = state_14222;
(statearr_14245[(15)] = inst_14196__$1);

return statearr_14245;
})();
if(inst_14196__$1){
var statearr_14246_16243 = state_14222__$1;
(statearr_14246_16243[(1)] = (17));

} else {
var statearr_14247_16244 = state_14222__$1;
(statearr_14247_16244[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14223 === (21))){
var inst_14161 = (state_14222[(12)]);
var inst_14158 = inst_14161;
var state_14222__$1 = (function (){var statearr_14248 = state_14222;
(statearr_14248[(10)] = inst_14158);

return statearr_14248;
})();
var statearr_14249_16246 = state_14222__$1;
(statearr_14249_16246[(2)] = null);

(statearr_14249_16246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14223 === (13))){
var inst_14185 = (state_14222[(2)]);
var inst_14186 = calc_state();
var inst_14158 = inst_14186;
var state_14222__$1 = (function (){var statearr_14250 = state_14222;
(statearr_14250[(17)] = inst_14185);

(statearr_14250[(10)] = inst_14158);

return statearr_14250;
})();
var statearr_14251_16247 = state_14222__$1;
(statearr_14251_16247[(2)] = null);

(statearr_14251_16247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14223 === (22))){
var inst_14216 = (state_14222[(2)]);
var state_14222__$1 = state_14222;
var statearr_14253_16252 = state_14222__$1;
(statearr_14253_16252[(2)] = inst_14216);

(statearr_14253_16252[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14223 === (6))){
var inst_14172 = (state_14222[(14)]);
var inst_14176 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14172,change);
var state_14222__$1 = state_14222;
var statearr_14257_16254 = state_14222__$1;
(statearr_14257_16254[(2)] = inst_14176);

(statearr_14257_16254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14223 === (25))){
var state_14222__$1 = state_14222;
var statearr_14258_16256 = state_14222__$1;
(statearr_14258_16256[(2)] = null);

(statearr_14258_16256[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14223 === (17))){
var inst_14172 = (state_14222[(14)]);
var inst_14163 = (state_14222[(18)]);
var inst_14198 = (inst_14163.cljs$core$IFn$_invoke$arity$1 ? inst_14163.cljs$core$IFn$_invoke$arity$1(inst_14172) : inst_14163.call(null,inst_14172));
var inst_14199 = cljs.core.not(inst_14198);
var state_14222__$1 = state_14222;
var statearr_14259_16258 = state_14222__$1;
(statearr_14259_16258[(2)] = inst_14199);

(statearr_14259_16258[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14223 === (3))){
var inst_14220 = (state_14222[(2)]);
var state_14222__$1 = state_14222;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14222__$1,inst_14220);
} else {
if((state_val_14223 === (12))){
var state_14222__$1 = state_14222;
var statearr_14260_16259 = state_14222__$1;
(statearr_14260_16259[(2)] = null);

(statearr_14260_16259[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14223 === (2))){
var inst_14161 = (state_14222[(12)]);
var inst_14158 = (state_14222[(10)]);
var inst_14161__$1 = cljs.core.__destructure_map(inst_14158);
var inst_14162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14161__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14161__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14164 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14161__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14222__$1 = (function (){var statearr_14261 = state_14222;
(statearr_14261[(12)] = inst_14161__$1);

(statearr_14261[(18)] = inst_14163);

(statearr_14261[(16)] = inst_14162);

return statearr_14261;
})();
return cljs.core.async.ioc_alts_BANG_(state_14222__$1,(4),inst_14164);
} else {
if((state_val_14223 === (23))){
var inst_14207 = (state_14222[(2)]);
var state_14222__$1 = state_14222;
if(cljs.core.truth_(inst_14207)){
var statearr_14262_16261 = state_14222__$1;
(statearr_14262_16261[(1)] = (24));

} else {
var statearr_14263_16262 = state_14222__$1;
(statearr_14263_16262[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14223 === (19))){
var inst_14202 = (state_14222[(2)]);
var state_14222__$1 = state_14222;
var statearr_14268_16264 = state_14222__$1;
(statearr_14268_16264[(2)] = inst_14202);

(statearr_14268_16264[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14223 === (11))){
var inst_14172 = (state_14222[(14)]);
var inst_14182 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_14172);
var state_14222__$1 = state_14222;
var statearr_14270_16265 = state_14222__$1;
(statearr_14270_16265[(2)] = inst_14182);

(statearr_14270_16265[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14223 === (9))){
var inst_14190 = (state_14222[(19)]);
var inst_14172 = (state_14222[(14)]);
var inst_14162 = (state_14222[(16)]);
var inst_14190__$1 = (inst_14162.cljs$core$IFn$_invoke$arity$1 ? inst_14162.cljs$core$IFn$_invoke$arity$1(inst_14172) : inst_14162.call(null,inst_14172));
var state_14222__$1 = (function (){var statearr_14271 = state_14222;
(statearr_14271[(19)] = inst_14190__$1);

return statearr_14271;
})();
if(cljs.core.truth_(inst_14190__$1)){
var statearr_14272_16272 = state_14222__$1;
(statearr_14272_16272[(1)] = (14));

} else {
var statearr_14273_16273 = state_14222__$1;
(statearr_14273_16273[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14223 === (5))){
var inst_14173 = (state_14222[(13)]);
var state_14222__$1 = state_14222;
var statearr_14274_16275 = state_14222__$1;
(statearr_14274_16275[(2)] = inst_14173);

(statearr_14274_16275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14223 === (14))){
var inst_14190 = (state_14222[(19)]);
var state_14222__$1 = state_14222;
var statearr_14280_16276 = state_14222__$1;
(statearr_14280_16276[(2)] = inst_14190);

(statearr_14280_16276[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14223 === (26))){
var inst_14212 = (state_14222[(2)]);
var state_14222__$1 = state_14222;
var statearr_14290_16281 = state_14222__$1;
(statearr_14290_16281[(2)] = inst_14212);

(statearr_14290_16281[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14223 === (16))){
var inst_14204 = (state_14222[(2)]);
var state_14222__$1 = state_14222;
if(cljs.core.truth_(inst_14204)){
var statearr_14291_16282 = state_14222__$1;
(statearr_14291_16282[(1)] = (20));

} else {
var statearr_14292_16283 = state_14222__$1;
(statearr_14292_16283[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14223 === (10))){
var inst_14218 = (state_14222[(2)]);
var state_14222__$1 = state_14222;
var statearr_14293_16288 = state_14222__$1;
(statearr_14293_16288[(2)] = inst_14218);

(statearr_14293_16288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14223 === (18))){
var inst_14196 = (state_14222[(15)]);
var state_14222__$1 = state_14222;
var statearr_14294_16289 = state_14222__$1;
(statearr_14294_16289[(2)] = inst_14196);

(statearr_14294_16289[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14223 === (8))){
var inst_14170 = (state_14222[(7)]);
var inst_14180 = (inst_14170 == null);
var state_14222__$1 = state_14222;
if(cljs.core.truth_(inst_14180)){
var statearr_14298_16291 = state_14222__$1;
(statearr_14298_16291[(1)] = (11));

} else {
var statearr_14299_16292 = state_14222__$1;
(statearr_14299_16292[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__11889__auto__ = null;
var cljs$core$async$mix_$_state_machine__11889__auto____0 = (function (){
var statearr_14300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14300[(0)] = cljs$core$async$mix_$_state_machine__11889__auto__);

(statearr_14300[(1)] = (1));

return statearr_14300;
});
var cljs$core$async$mix_$_state_machine__11889__auto____1 = (function (state_14222){
while(true){
var ret_value__11890__auto__ = (function (){try{while(true){
var result__11891__auto__ = switch__11888__auto__(state_14222);
if(cljs.core.keyword_identical_QMARK_(result__11891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11891__auto__;
}
break;
}
}catch (e14301){var ex__11892__auto__ = e14301;
var statearr_14302_16296 = state_14222;
(statearr_14302_16296[(2)] = ex__11892__auto__);


if(cljs.core.seq((state_14222[(4)]))){
var statearr_14303_16297 = state_14222;
(statearr_14303_16297[(1)] = cljs.core.first((state_14222[(4)])));

} else {
throw ex__11892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16302 = state_14222;
state_14222 = G__16302;
continue;
} else {
return ret_value__11890__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11889__auto__ = function(state_14222){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11889__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11889__auto____1.call(this,state_14222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11889__auto____0;
cljs$core$async$mix_$_state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11889__auto____1;
return cljs$core$async$mix_$_state_machine__11889__auto__;
})()
})();
var state__12850__auto__ = (function (){var statearr_14304 = f__12849__auto__();
(statearr_14304[(6)] = c__12848__auto___16227);

return statearr_14304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12850__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_16307 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_16307(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_16308 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null,p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_16308(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_16309 = (function() {
var G__16310 = null;
var G__16310__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null,p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__16310__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null,p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__16310 = function(p,v){
switch(arguments.length){
case 1:
return G__16310__1.call(this,p);
case 2:
return G__16310__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16310.cljs$core$IFn$_invoke$arity$1 = G__16310__1;
G__16310.cljs$core$IFn$_invoke$arity$2 = G__16310__2;
return G__16310;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__14316 = arguments.length;
switch (G__14316) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16309(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16309(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14324 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14325){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14325 = meta14325;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14326,meta14325__$1){
var self__ = this;
var _14326__$1 = this;
return (new cljs.core.async.t_cljs$core$async14324(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14325__$1));
}));

(cljs.core.async.t_cljs$core$async14324.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14326){
var self__ = this;
var _14326__$1 = this;
return self__.meta14325;
}));

(cljs.core.async.t_cljs$core$async14324.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14324.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14324.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14324.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async14324.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async14324.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async14324.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async14324.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14325","meta14325",-1854877638,null)], null);
}));

(cljs.core.async.t_cljs$core$async14324.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14324.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14324");

(cljs.core.async.t_cljs$core$async14324.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14324");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14324.
 */
cljs.core.async.__GT_t_cljs$core$async14324 = (function cljs$core$async$__GT_t_cljs$core$async14324(ch,topic_fn,buf_fn,mults,ensure_mult,meta14325){
return (new cljs.core.async.t_cljs$core$async14324(ch,topic_fn,buf_fn,mults,ensure_mult,meta14325));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__14323 = arguments.length;
switch (G__14323) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__14318_SHARP_){
if(cljs.core.truth_((p1__14318_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14318_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__14318_SHARP_.call(null,topic)))){
return p1__14318_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14318_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async14324(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__12848__auto___16321 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12849__auto__ = (function (){var switch__11888__auto__ = (function (state_14399){
var state_val_14400 = (state_14399[(1)]);
if((state_val_14400 === (7))){
var inst_14395 = (state_14399[(2)]);
var state_14399__$1 = state_14399;
var statearr_14401_16322 = state_14399__$1;
(statearr_14401_16322[(2)] = inst_14395);

(statearr_14401_16322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14400 === (20))){
var state_14399__$1 = state_14399;
var statearr_14405_16323 = state_14399__$1;
(statearr_14405_16323[(2)] = null);

(statearr_14405_16323[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14400 === (1))){
var state_14399__$1 = state_14399;
var statearr_14406_16324 = state_14399__$1;
(statearr_14406_16324[(2)] = null);

(statearr_14406_16324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14400 === (24))){
var inst_14378 = (state_14399[(7)]);
var inst_14387 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_14378);
var state_14399__$1 = state_14399;
var statearr_14407_16325 = state_14399__$1;
(statearr_14407_16325[(2)] = inst_14387);

(statearr_14407_16325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14400 === (4))){
var inst_14329 = (state_14399[(8)]);
var inst_14329__$1 = (state_14399[(2)]);
var inst_14330 = (inst_14329__$1 == null);
var state_14399__$1 = (function (){var statearr_14408 = state_14399;
(statearr_14408[(8)] = inst_14329__$1);

return statearr_14408;
})();
if(cljs.core.truth_(inst_14330)){
var statearr_14409_16326 = state_14399__$1;
(statearr_14409_16326[(1)] = (5));

} else {
var statearr_14410_16327 = state_14399__$1;
(statearr_14410_16327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14400 === (15))){
var inst_14372 = (state_14399[(2)]);
var state_14399__$1 = state_14399;
var statearr_14412_16337 = state_14399__$1;
(statearr_14412_16337[(2)] = inst_14372);

(statearr_14412_16337[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14400 === (21))){
var inst_14392 = (state_14399[(2)]);
var state_14399__$1 = (function (){var statearr_14416 = state_14399;
(statearr_14416[(9)] = inst_14392);

return statearr_14416;
})();
var statearr_14417_16339 = state_14399__$1;
(statearr_14417_16339[(2)] = null);

(statearr_14417_16339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14400 === (13))){
var inst_14354 = (state_14399[(10)]);
var inst_14356 = cljs.core.chunked_seq_QMARK_(inst_14354);
var state_14399__$1 = state_14399;
if(inst_14356){
var statearr_14418_16340 = state_14399__$1;
(statearr_14418_16340[(1)] = (16));

} else {
var statearr_14419_16341 = state_14399__$1;
(statearr_14419_16341[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14400 === (22))){
var inst_14384 = (state_14399[(2)]);
var state_14399__$1 = state_14399;
if(cljs.core.truth_(inst_14384)){
var statearr_14420_16343 = state_14399__$1;
(statearr_14420_16343[(1)] = (23));

} else {
var statearr_14421_16344 = state_14399__$1;
(statearr_14421_16344[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14400 === (6))){
var inst_14378 = (state_14399[(7)]);
var inst_14380 = (state_14399[(11)]);
var inst_14329 = (state_14399[(8)]);
var inst_14378__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_14329) : topic_fn.call(null,inst_14329));
var inst_14379 = cljs.core.deref(mults);
var inst_14380__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14379,inst_14378__$1);
var state_14399__$1 = (function (){var statearr_14422 = state_14399;
(statearr_14422[(7)] = inst_14378__$1);

(statearr_14422[(11)] = inst_14380__$1);

return statearr_14422;
})();
if(cljs.core.truth_(inst_14380__$1)){
var statearr_14423_16346 = state_14399__$1;
(statearr_14423_16346[(1)] = (19));

} else {
var statearr_14424_16347 = state_14399__$1;
(statearr_14424_16347[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14400 === (25))){
var inst_14389 = (state_14399[(2)]);
var state_14399__$1 = state_14399;
var statearr_14425_16348 = state_14399__$1;
(statearr_14425_16348[(2)] = inst_14389);

(statearr_14425_16348[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14400 === (17))){
var inst_14354 = (state_14399[(10)]);
var inst_14363 = cljs.core.first(inst_14354);
var inst_14364 = cljs.core.async.muxch_STAR_(inst_14363);
var inst_14365 = cljs.core.async.close_BANG_(inst_14364);
var inst_14366 = cljs.core.next(inst_14354);
var inst_14339 = inst_14366;
var inst_14340 = null;
var inst_14341 = (0);
var inst_14342 = (0);
var state_14399__$1 = (function (){var statearr_14426 = state_14399;
(statearr_14426[(12)] = inst_14340);

(statearr_14426[(13)] = inst_14342);

(statearr_14426[(14)] = inst_14341);

(statearr_14426[(15)] = inst_14339);

(statearr_14426[(16)] = inst_14365);

return statearr_14426;
})();
var statearr_14427_16353 = state_14399__$1;
(statearr_14427_16353[(2)] = null);

(statearr_14427_16353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14400 === (3))){
var inst_14397 = (state_14399[(2)]);
var state_14399__$1 = state_14399;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14399__$1,inst_14397);
} else {
if((state_val_14400 === (12))){
var inst_14374 = (state_14399[(2)]);
var state_14399__$1 = state_14399;
var statearr_14428_16354 = state_14399__$1;
(statearr_14428_16354[(2)] = inst_14374);

(statearr_14428_16354[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14400 === (2))){
var state_14399__$1 = state_14399;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14399__$1,(4),ch);
} else {
if((state_val_14400 === (23))){
var state_14399__$1 = state_14399;
var statearr_14429_16356 = state_14399__$1;
(statearr_14429_16356[(2)] = null);

(statearr_14429_16356[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14400 === (19))){
var inst_14380 = (state_14399[(11)]);
var inst_14329 = (state_14399[(8)]);
var inst_14382 = cljs.core.async.muxch_STAR_(inst_14380);
var state_14399__$1 = state_14399;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14399__$1,(22),inst_14382,inst_14329);
} else {
if((state_val_14400 === (11))){
var inst_14354 = (state_14399[(10)]);
var inst_14339 = (state_14399[(15)]);
var inst_14354__$1 = cljs.core.seq(inst_14339);
var state_14399__$1 = (function (){var statearr_14438 = state_14399;
(statearr_14438[(10)] = inst_14354__$1);

return statearr_14438;
})();
if(inst_14354__$1){
var statearr_14448_16359 = state_14399__$1;
(statearr_14448_16359[(1)] = (13));

} else {
var statearr_14449_16360 = state_14399__$1;
(statearr_14449_16360[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14400 === (9))){
var inst_14376 = (state_14399[(2)]);
var state_14399__$1 = state_14399;
var statearr_14450_16361 = state_14399__$1;
(statearr_14450_16361[(2)] = inst_14376);

(statearr_14450_16361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14400 === (5))){
var inst_14336 = cljs.core.deref(mults);
var inst_14337 = cljs.core.vals(inst_14336);
var inst_14338 = cljs.core.seq(inst_14337);
var inst_14339 = inst_14338;
var inst_14340 = null;
var inst_14341 = (0);
var inst_14342 = (0);
var state_14399__$1 = (function (){var statearr_14457 = state_14399;
(statearr_14457[(12)] = inst_14340);

(statearr_14457[(13)] = inst_14342);

(statearr_14457[(14)] = inst_14341);

(statearr_14457[(15)] = inst_14339);

return statearr_14457;
})();
var statearr_14458_16362 = state_14399__$1;
(statearr_14458_16362[(2)] = null);

(statearr_14458_16362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14400 === (14))){
var state_14399__$1 = state_14399;
var statearr_14462_16363 = state_14399__$1;
(statearr_14462_16363[(2)] = null);

(statearr_14462_16363[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14400 === (16))){
var inst_14354 = (state_14399[(10)]);
var inst_14358 = cljs.core.chunk_first(inst_14354);
var inst_14359 = cljs.core.chunk_rest(inst_14354);
var inst_14360 = cljs.core.count(inst_14358);
var inst_14339 = inst_14359;
var inst_14340 = inst_14358;
var inst_14341 = inst_14360;
var inst_14342 = (0);
var state_14399__$1 = (function (){var statearr_14477 = state_14399;
(statearr_14477[(12)] = inst_14340);

(statearr_14477[(13)] = inst_14342);

(statearr_14477[(14)] = inst_14341);

(statearr_14477[(15)] = inst_14339);

return statearr_14477;
})();
var statearr_14478_16364 = state_14399__$1;
(statearr_14478_16364[(2)] = null);

(statearr_14478_16364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14400 === (10))){
var inst_14340 = (state_14399[(12)]);
var inst_14342 = (state_14399[(13)]);
var inst_14341 = (state_14399[(14)]);
var inst_14339 = (state_14399[(15)]);
var inst_14348 = cljs.core._nth(inst_14340,inst_14342);
var inst_14349 = cljs.core.async.muxch_STAR_(inst_14348);
var inst_14350 = cljs.core.async.close_BANG_(inst_14349);
var inst_14351 = (inst_14342 + (1));
var tmp14459 = inst_14340;
var tmp14460 = inst_14341;
var tmp14461 = inst_14339;
var inst_14339__$1 = tmp14461;
var inst_14340__$1 = tmp14459;
var inst_14341__$1 = tmp14460;
var inst_14342__$1 = inst_14351;
var state_14399__$1 = (function (){var statearr_14485 = state_14399;
(statearr_14485[(17)] = inst_14350);

(statearr_14485[(12)] = inst_14340__$1);

(statearr_14485[(13)] = inst_14342__$1);

(statearr_14485[(14)] = inst_14341__$1);

(statearr_14485[(15)] = inst_14339__$1);

return statearr_14485;
})();
var statearr_14486_16365 = state_14399__$1;
(statearr_14486_16365[(2)] = null);

(statearr_14486_16365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14400 === (18))){
var inst_14369 = (state_14399[(2)]);
var state_14399__$1 = state_14399;
var statearr_14487_16366 = state_14399__$1;
(statearr_14487_16366[(2)] = inst_14369);

(statearr_14487_16366[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14400 === (8))){
var inst_14342 = (state_14399[(13)]);
var inst_14341 = (state_14399[(14)]);
var inst_14345 = (inst_14342 < inst_14341);
var inst_14346 = inst_14345;
var state_14399__$1 = state_14399;
if(cljs.core.truth_(inst_14346)){
var statearr_14489_16367 = state_14399__$1;
(statearr_14489_16367[(1)] = (10));

} else {
var statearr_14491_16371 = state_14399__$1;
(statearr_14491_16371[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11889__auto__ = null;
var cljs$core$async$state_machine__11889__auto____0 = (function (){
var statearr_14492 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14492[(0)] = cljs$core$async$state_machine__11889__auto__);

(statearr_14492[(1)] = (1));

return statearr_14492;
});
var cljs$core$async$state_machine__11889__auto____1 = (function (state_14399){
while(true){
var ret_value__11890__auto__ = (function (){try{while(true){
var result__11891__auto__ = switch__11888__auto__(state_14399);
if(cljs.core.keyword_identical_QMARK_(result__11891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11891__auto__;
}
break;
}
}catch (e14494){var ex__11892__auto__ = e14494;
var statearr_14495_16372 = state_14399;
(statearr_14495_16372[(2)] = ex__11892__auto__);


if(cljs.core.seq((state_14399[(4)]))){
var statearr_14496_16373 = state_14399;
(statearr_14496_16373[(1)] = cljs.core.first((state_14399[(4)])));

} else {
throw ex__11892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16374 = state_14399;
state_14399 = G__16374;
continue;
} else {
return ret_value__11890__auto__;
}
break;
}
});
cljs$core$async$state_machine__11889__auto__ = function(state_14399){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11889__auto____1.call(this,state_14399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11889__auto____0;
cljs$core$async$state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11889__auto____1;
return cljs$core$async$state_machine__11889__auto__;
})()
})();
var state__12850__auto__ = (function (){var statearr_14497 = f__12849__auto__();
(statearr_14497[(6)] = c__12848__auto___16321);

return statearr_14497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12850__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__14502 = arguments.length;
switch (G__14502) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__14507 = arguments.length;
switch (G__14507) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__14509 = arguments.length;
switch (G__14509) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__12848__auto___16379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12849__auto__ = (function (){var switch__11888__auto__ = (function (state_14555){
var state_val_14556 = (state_14555[(1)]);
if((state_val_14556 === (7))){
var state_14555__$1 = state_14555;
var statearr_14565_16383 = state_14555__$1;
(statearr_14565_16383[(2)] = null);

(statearr_14565_16383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14556 === (1))){
var state_14555__$1 = state_14555;
var statearr_14566_16384 = state_14555__$1;
(statearr_14566_16384[(2)] = null);

(statearr_14566_16384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14556 === (4))){
var inst_14516 = (state_14555[(7)]);
var inst_14515 = (state_14555[(8)]);
var inst_14518 = (inst_14516 < inst_14515);
var state_14555__$1 = state_14555;
if(cljs.core.truth_(inst_14518)){
var statearr_14570_16389 = state_14555__$1;
(statearr_14570_16389[(1)] = (6));

} else {
var statearr_14571_16390 = state_14555__$1;
(statearr_14571_16390[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14556 === (15))){
var inst_14541 = (state_14555[(9)]);
var inst_14546 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_14541);
var state_14555__$1 = state_14555;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14555__$1,(17),out,inst_14546);
} else {
if((state_val_14556 === (13))){
var inst_14541 = (state_14555[(9)]);
var inst_14541__$1 = (state_14555[(2)]);
var inst_14542 = cljs.core.some(cljs.core.nil_QMARK_,inst_14541__$1);
var state_14555__$1 = (function (){var statearr_14575 = state_14555;
(statearr_14575[(9)] = inst_14541__$1);

return statearr_14575;
})();
if(cljs.core.truth_(inst_14542)){
var statearr_14576_16391 = state_14555__$1;
(statearr_14576_16391[(1)] = (14));

} else {
var statearr_14577_16395 = state_14555__$1;
(statearr_14577_16395[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14556 === (6))){
var state_14555__$1 = state_14555;
var statearr_14578_16397 = state_14555__$1;
(statearr_14578_16397[(2)] = null);

(statearr_14578_16397[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14556 === (17))){
var inst_14548 = (state_14555[(2)]);
var state_14555__$1 = (function (){var statearr_14588 = state_14555;
(statearr_14588[(10)] = inst_14548);

return statearr_14588;
})();
var statearr_14589_16398 = state_14555__$1;
(statearr_14589_16398[(2)] = null);

(statearr_14589_16398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14556 === (3))){
var inst_14553 = (state_14555[(2)]);
var state_14555__$1 = state_14555;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14555__$1,inst_14553);
} else {
if((state_val_14556 === (12))){
var _ = (function (){var statearr_14592 = state_14555;
(statearr_14592[(4)] = cljs.core.rest((state_14555[(4)])));

return statearr_14592;
})();
var state_14555__$1 = state_14555;
var ex14582 = (state_14555__$1[(2)]);
var statearr_14593_16399 = state_14555__$1;
(statearr_14593_16399[(5)] = ex14582);


if((ex14582 instanceof Object)){
var statearr_14594_16400 = state_14555__$1;
(statearr_14594_16400[(1)] = (11));

(statearr_14594_16400[(5)] = null);

} else {
throw ex14582;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14556 === (2))){
var inst_14514 = cljs.core.reset_BANG_(dctr,cnt);
var inst_14515 = cnt;
var inst_14516 = (0);
var state_14555__$1 = (function (){var statearr_14598 = state_14555;
(statearr_14598[(11)] = inst_14514);

(statearr_14598[(7)] = inst_14516);

(statearr_14598[(8)] = inst_14515);

return statearr_14598;
})();
var statearr_14599_16412 = state_14555__$1;
(statearr_14599_16412[(2)] = null);

(statearr_14599_16412[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14556 === (11))){
var inst_14520 = (state_14555[(2)]);
var inst_14521 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_14555__$1 = (function (){var statearr_14600 = state_14555;
(statearr_14600[(12)] = inst_14520);

return statearr_14600;
})();
var statearr_14601_16416 = state_14555__$1;
(statearr_14601_16416[(2)] = inst_14521);

(statearr_14601_16416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14556 === (9))){
var inst_14516 = (state_14555[(7)]);
var _ = (function (){var statearr_14602 = state_14555;
(statearr_14602[(4)] = cljs.core.cons((12),(state_14555[(4)])));

return statearr_14602;
})();
var inst_14527 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_14516) : chs__$1.call(null,inst_14516));
var inst_14528 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_14516) : done.call(null,inst_14516));
var inst_14529 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_14527,inst_14528);
var ___$1 = (function (){var statearr_14603 = state_14555;
(statearr_14603[(4)] = cljs.core.rest((state_14555[(4)])));

return statearr_14603;
})();
var state_14555__$1 = state_14555;
var statearr_14604_16421 = state_14555__$1;
(statearr_14604_16421[(2)] = inst_14529);

(statearr_14604_16421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14556 === (5))){
var inst_14539 = (state_14555[(2)]);
var state_14555__$1 = (function (){var statearr_14606 = state_14555;
(statearr_14606[(13)] = inst_14539);

return statearr_14606;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14555__$1,(13),dchan);
} else {
if((state_val_14556 === (14))){
var inst_14544 = cljs.core.async.close_BANG_(out);
var state_14555__$1 = state_14555;
var statearr_14613_16428 = state_14555__$1;
(statearr_14613_16428[(2)] = inst_14544);

(statearr_14613_16428[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14556 === (16))){
var inst_14551 = (state_14555[(2)]);
var state_14555__$1 = state_14555;
var statearr_14614_16432 = state_14555__$1;
(statearr_14614_16432[(2)] = inst_14551);

(statearr_14614_16432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14556 === (10))){
var inst_14516 = (state_14555[(7)]);
var inst_14532 = (state_14555[(2)]);
var inst_14533 = (inst_14516 + (1));
var inst_14516__$1 = inst_14533;
var state_14555__$1 = (function (){var statearr_14615 = state_14555;
(statearr_14615[(14)] = inst_14532);

(statearr_14615[(7)] = inst_14516__$1);

return statearr_14615;
})();
var statearr_14616_16433 = state_14555__$1;
(statearr_14616_16433[(2)] = null);

(statearr_14616_16433[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14556 === (8))){
var inst_14537 = (state_14555[(2)]);
var state_14555__$1 = state_14555;
var statearr_14618_16434 = state_14555__$1;
(statearr_14618_16434[(2)] = inst_14537);

(statearr_14618_16434[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11889__auto__ = null;
var cljs$core$async$state_machine__11889__auto____0 = (function (){
var statearr_14619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14619[(0)] = cljs$core$async$state_machine__11889__auto__);

(statearr_14619[(1)] = (1));

return statearr_14619;
});
var cljs$core$async$state_machine__11889__auto____1 = (function (state_14555){
while(true){
var ret_value__11890__auto__ = (function (){try{while(true){
var result__11891__auto__ = switch__11888__auto__(state_14555);
if(cljs.core.keyword_identical_QMARK_(result__11891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11891__auto__;
}
break;
}
}catch (e14620){var ex__11892__auto__ = e14620;
var statearr_14621_16436 = state_14555;
(statearr_14621_16436[(2)] = ex__11892__auto__);


if(cljs.core.seq((state_14555[(4)]))){
var statearr_14622_16437 = state_14555;
(statearr_14622_16437[(1)] = cljs.core.first((state_14555[(4)])));

} else {
throw ex__11892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16439 = state_14555;
state_14555 = G__16439;
continue;
} else {
return ret_value__11890__auto__;
}
break;
}
});
cljs$core$async$state_machine__11889__auto__ = function(state_14555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11889__auto____1.call(this,state_14555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11889__auto____0;
cljs$core$async$state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11889__auto____1;
return cljs$core$async$state_machine__11889__auto__;
})()
})();
var state__12850__auto__ = (function (){var statearr_14624 = f__12849__auto__();
(statearr_14624[(6)] = c__12848__auto___16379);

return statearr_14624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12850__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__14628 = arguments.length;
switch (G__14628) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12848__auto___16446 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12849__auto__ = (function (){var switch__11888__auto__ = (function (state_14667){
var state_val_14668 = (state_14667[(1)]);
if((state_val_14668 === (7))){
var inst_14646 = (state_14667[(7)]);
var inst_14647 = (state_14667[(8)]);
var inst_14646__$1 = (state_14667[(2)]);
var inst_14647__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14646__$1,(0),null);
var inst_14648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14646__$1,(1),null);
var inst_14649 = (inst_14647__$1 == null);
var state_14667__$1 = (function (){var statearr_14669 = state_14667;
(statearr_14669[(7)] = inst_14646__$1);

(statearr_14669[(8)] = inst_14647__$1);

(statearr_14669[(9)] = inst_14648);

return statearr_14669;
})();
if(cljs.core.truth_(inst_14649)){
var statearr_14670_16454 = state_14667__$1;
(statearr_14670_16454[(1)] = (8));

} else {
var statearr_14671_16455 = state_14667__$1;
(statearr_14671_16455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14668 === (1))){
var inst_14634 = cljs.core.vec(chs);
var inst_14635 = inst_14634;
var state_14667__$1 = (function (){var statearr_14672 = state_14667;
(statearr_14672[(10)] = inst_14635);

return statearr_14672;
})();
var statearr_14673_16456 = state_14667__$1;
(statearr_14673_16456[(2)] = null);

(statearr_14673_16456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14668 === (4))){
var inst_14635 = (state_14667[(10)]);
var state_14667__$1 = state_14667;
return cljs.core.async.ioc_alts_BANG_(state_14667__$1,(7),inst_14635);
} else {
if((state_val_14668 === (6))){
var inst_14663 = (state_14667[(2)]);
var state_14667__$1 = state_14667;
var statearr_14674_16457 = state_14667__$1;
(statearr_14674_16457[(2)] = inst_14663);

(statearr_14674_16457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14668 === (3))){
var inst_14665 = (state_14667[(2)]);
var state_14667__$1 = state_14667;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14667__$1,inst_14665);
} else {
if((state_val_14668 === (2))){
var inst_14635 = (state_14667[(10)]);
var inst_14637 = cljs.core.count(inst_14635);
var inst_14638 = (inst_14637 > (0));
var state_14667__$1 = state_14667;
if(cljs.core.truth_(inst_14638)){
var statearr_14682_16458 = state_14667__$1;
(statearr_14682_16458[(1)] = (4));

} else {
var statearr_14683_16459 = state_14667__$1;
(statearr_14683_16459[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14668 === (11))){
var inst_14635 = (state_14667[(10)]);
var inst_14656 = (state_14667[(2)]);
var tmp14675 = inst_14635;
var inst_14635__$1 = tmp14675;
var state_14667__$1 = (function (){var statearr_14684 = state_14667;
(statearr_14684[(11)] = inst_14656);

(statearr_14684[(10)] = inst_14635__$1);

return statearr_14684;
})();
var statearr_14685_16460 = state_14667__$1;
(statearr_14685_16460[(2)] = null);

(statearr_14685_16460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14668 === (9))){
var inst_14647 = (state_14667[(8)]);
var state_14667__$1 = state_14667;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14667__$1,(11),out,inst_14647);
} else {
if((state_val_14668 === (5))){
var inst_14661 = cljs.core.async.close_BANG_(out);
var state_14667__$1 = state_14667;
var statearr_14686_16461 = state_14667__$1;
(statearr_14686_16461[(2)] = inst_14661);

(statearr_14686_16461[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14668 === (10))){
var inst_14659 = (state_14667[(2)]);
var state_14667__$1 = state_14667;
var statearr_14687_16462 = state_14667__$1;
(statearr_14687_16462[(2)] = inst_14659);

(statearr_14687_16462[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14668 === (8))){
var inst_14646 = (state_14667[(7)]);
var inst_14647 = (state_14667[(8)]);
var inst_14635 = (state_14667[(10)]);
var inst_14648 = (state_14667[(9)]);
var inst_14651 = (function (){var cs = inst_14635;
var vec__14641 = inst_14646;
var v = inst_14647;
var c = inst_14648;
return (function (p1__14626_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__14626_SHARP_);
});
})();
var inst_14652 = cljs.core.filterv(inst_14651,inst_14635);
var inst_14635__$1 = inst_14652;
var state_14667__$1 = (function (){var statearr_14691 = state_14667;
(statearr_14691[(10)] = inst_14635__$1);

return statearr_14691;
})();
var statearr_14695_16463 = state_14667__$1;
(statearr_14695_16463[(2)] = null);

(statearr_14695_16463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11889__auto__ = null;
var cljs$core$async$state_machine__11889__auto____0 = (function (){
var statearr_14700 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14700[(0)] = cljs$core$async$state_machine__11889__auto__);

(statearr_14700[(1)] = (1));

return statearr_14700;
});
var cljs$core$async$state_machine__11889__auto____1 = (function (state_14667){
while(true){
var ret_value__11890__auto__ = (function (){try{while(true){
var result__11891__auto__ = switch__11888__auto__(state_14667);
if(cljs.core.keyword_identical_QMARK_(result__11891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11891__auto__;
}
break;
}
}catch (e14704){var ex__11892__auto__ = e14704;
var statearr_14705_16472 = state_14667;
(statearr_14705_16472[(2)] = ex__11892__auto__);


if(cljs.core.seq((state_14667[(4)]))){
var statearr_14706_16473 = state_14667;
(statearr_14706_16473[(1)] = cljs.core.first((state_14667[(4)])));

} else {
throw ex__11892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16474 = state_14667;
state_14667 = G__16474;
continue;
} else {
return ret_value__11890__auto__;
}
break;
}
});
cljs$core$async$state_machine__11889__auto__ = function(state_14667){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11889__auto____1.call(this,state_14667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11889__auto____0;
cljs$core$async$state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11889__auto____1;
return cljs$core$async$state_machine__11889__auto__;
})()
})();
var state__12850__auto__ = (function (){var statearr_14710 = f__12849__auto__();
(statearr_14710[(6)] = c__12848__auto___16446);

return statearr_14710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12850__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__14735 = arguments.length;
switch (G__14735) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12848__auto___16477 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12849__auto__ = (function (){var switch__11888__auto__ = (function (state_14765){
var state_val_14766 = (state_14765[(1)]);
if((state_val_14766 === (7))){
var inst_14747 = (state_14765[(7)]);
var inst_14747__$1 = (state_14765[(2)]);
var inst_14748 = (inst_14747__$1 == null);
var inst_14749 = cljs.core.not(inst_14748);
var state_14765__$1 = (function (){var statearr_14767 = state_14765;
(statearr_14767[(7)] = inst_14747__$1);

return statearr_14767;
})();
if(inst_14749){
var statearr_14768_16480 = state_14765__$1;
(statearr_14768_16480[(1)] = (8));

} else {
var statearr_14769_16481 = state_14765__$1;
(statearr_14769_16481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14766 === (1))){
var inst_14742 = (0);
var state_14765__$1 = (function (){var statearr_14770 = state_14765;
(statearr_14770[(8)] = inst_14742);

return statearr_14770;
})();
var statearr_14771_16483 = state_14765__$1;
(statearr_14771_16483[(2)] = null);

(statearr_14771_16483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14766 === (4))){
var state_14765__$1 = state_14765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14765__$1,(7),ch);
} else {
if((state_val_14766 === (6))){
var inst_14760 = (state_14765[(2)]);
var state_14765__$1 = state_14765;
var statearr_14772_16484 = state_14765__$1;
(statearr_14772_16484[(2)] = inst_14760);

(statearr_14772_16484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14766 === (3))){
var inst_14762 = (state_14765[(2)]);
var inst_14763 = cljs.core.async.close_BANG_(out);
var state_14765__$1 = (function (){var statearr_14773 = state_14765;
(statearr_14773[(9)] = inst_14762);

return statearr_14773;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14765__$1,inst_14763);
} else {
if((state_val_14766 === (2))){
var inst_14742 = (state_14765[(8)]);
var inst_14744 = (inst_14742 < n);
var state_14765__$1 = state_14765;
if(cljs.core.truth_(inst_14744)){
var statearr_14786_16485 = state_14765__$1;
(statearr_14786_16485[(1)] = (4));

} else {
var statearr_14787_16486 = state_14765__$1;
(statearr_14787_16486[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14766 === (11))){
var inst_14742 = (state_14765[(8)]);
var inst_14752 = (state_14765[(2)]);
var inst_14753 = (inst_14742 + (1));
var inst_14742__$1 = inst_14753;
var state_14765__$1 = (function (){var statearr_14788 = state_14765;
(statearr_14788[(8)] = inst_14742__$1);

(statearr_14788[(10)] = inst_14752);

return statearr_14788;
})();
var statearr_14789_16487 = state_14765__$1;
(statearr_14789_16487[(2)] = null);

(statearr_14789_16487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14766 === (9))){
var state_14765__$1 = state_14765;
var statearr_14790_16492 = state_14765__$1;
(statearr_14790_16492[(2)] = null);

(statearr_14790_16492[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14766 === (5))){
var state_14765__$1 = state_14765;
var statearr_14791_16494 = state_14765__$1;
(statearr_14791_16494[(2)] = null);

(statearr_14791_16494[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14766 === (10))){
var inst_14757 = (state_14765[(2)]);
var state_14765__$1 = state_14765;
var statearr_14792_16495 = state_14765__$1;
(statearr_14792_16495[(2)] = inst_14757);

(statearr_14792_16495[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14766 === (8))){
var inst_14747 = (state_14765[(7)]);
var state_14765__$1 = state_14765;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14765__$1,(11),out,inst_14747);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11889__auto__ = null;
var cljs$core$async$state_machine__11889__auto____0 = (function (){
var statearr_14793 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14793[(0)] = cljs$core$async$state_machine__11889__auto__);

(statearr_14793[(1)] = (1));

return statearr_14793;
});
var cljs$core$async$state_machine__11889__auto____1 = (function (state_14765){
while(true){
var ret_value__11890__auto__ = (function (){try{while(true){
var result__11891__auto__ = switch__11888__auto__(state_14765);
if(cljs.core.keyword_identical_QMARK_(result__11891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11891__auto__;
}
break;
}
}catch (e14794){var ex__11892__auto__ = e14794;
var statearr_14795_16502 = state_14765;
(statearr_14795_16502[(2)] = ex__11892__auto__);


if(cljs.core.seq((state_14765[(4)]))){
var statearr_14797_16503 = state_14765;
(statearr_14797_16503[(1)] = cljs.core.first((state_14765[(4)])));

} else {
throw ex__11892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16504 = state_14765;
state_14765 = G__16504;
continue;
} else {
return ret_value__11890__auto__;
}
break;
}
});
cljs$core$async$state_machine__11889__auto__ = function(state_14765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11889__auto____1.call(this,state_14765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11889__auto____0;
cljs$core$async$state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11889__auto____1;
return cljs$core$async$state_machine__11889__auto__;
})()
})();
var state__12850__auto__ = (function (){var statearr_14799 = f__12849__auto__();
(statearr_14799[(6)] = c__12848__auto___16477);

return statearr_14799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12850__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14817 = (function (f,ch,meta14802,_,fn1,meta14818){
this.f = f;
this.ch = ch;
this.meta14802 = meta14802;
this._ = _;
this.fn1 = fn1;
this.meta14818 = meta14818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14819,meta14818__$1){
var self__ = this;
var _14819__$1 = this;
return (new cljs.core.async.t_cljs$core$async14817(self__.f,self__.ch,self__.meta14802,self__._,self__.fn1,meta14818__$1));
}));

(cljs.core.async.t_cljs$core$async14817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14819){
var self__ = this;
var _14819__$1 = this;
return self__.meta14818;
}));

(cljs.core.async.t_cljs$core$async14817.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14817.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async14817.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14817.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__14800_SHARP_){
var G__14833 = (((p1__14800_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__14800_SHARP_) : self__.f.call(null,p1__14800_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__14833) : f1.call(null,G__14833));
});
}));

(cljs.core.async.t_cljs$core$async14817.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14802","meta14802",34506017,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14801","cljs.core.async/t_cljs$core$async14801",1839338336,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14818","meta14818",1071050924,null)], null);
}));

(cljs.core.async.t_cljs$core$async14817.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14817");

(cljs.core.async.t_cljs$core$async14817.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14817");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14817.
 */
cljs.core.async.__GT_t_cljs$core$async14817 = (function cljs$core$async$__GT_t_cljs$core$async14817(f,ch,meta14802,_,fn1,meta14818){
return (new cljs.core.async.t_cljs$core$async14817(f,ch,meta14802,_,fn1,meta14818));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14801 = (function (f,ch,meta14802){
this.f = f;
this.ch = ch;
this.meta14802 = meta14802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14803,meta14802__$1){
var self__ = this;
var _14803__$1 = this;
return (new cljs.core.async.t_cljs$core$async14801(self__.f,self__.ch,meta14802__$1));
}));

(cljs.core.async.t_cljs$core$async14801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14803){
var self__ = this;
var _14803__$1 = this;
return self__.meta14802;
}));

(cljs.core.async.t_cljs$core$async14801.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14801.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14801.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14801.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14801.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async14817(self__.f,self__.ch,self__.meta14802,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__14837 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__14837) : self__.f.call(null,G__14837));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async14801.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14801.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async14801.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14802","meta14802",34506017,null)], null);
}));

(cljs.core.async.t_cljs$core$async14801.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14801.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14801");

(cljs.core.async.t_cljs$core$async14801.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14801");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14801.
 */
cljs.core.async.__GT_t_cljs$core$async14801 = (function cljs$core$async$__GT_t_cljs$core$async14801(f,ch,meta14802){
return (new cljs.core.async.t_cljs$core$async14801(f,ch,meta14802));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async14801(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14841 = (function (f,ch,meta14842){
this.f = f;
this.ch = ch;
this.meta14842 = meta14842;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14843,meta14842__$1){
var self__ = this;
var _14843__$1 = this;
return (new cljs.core.async.t_cljs$core$async14841(self__.f,self__.ch,meta14842__$1));
}));

(cljs.core.async.t_cljs$core$async14841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14843){
var self__ = this;
var _14843__$1 = this;
return self__.meta14842;
}));

(cljs.core.async.t_cljs$core$async14841.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14841.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14841.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14841.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async14841.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14841.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async14841.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14842","meta14842",711924406,null)], null);
}));

(cljs.core.async.t_cljs$core$async14841.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14841.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14841");

(cljs.core.async.t_cljs$core$async14841.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14841");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14841.
 */
cljs.core.async.__GT_t_cljs$core$async14841 = (function cljs$core$async$__GT_t_cljs$core$async14841(f,ch,meta14842){
return (new cljs.core.async.t_cljs$core$async14841(f,ch,meta14842));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async14841(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14869 = (function (p,ch,meta14870){
this.p = p;
this.ch = ch;
this.meta14870 = meta14870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14871,meta14870__$1){
var self__ = this;
var _14871__$1 = this;
return (new cljs.core.async.t_cljs$core$async14869(self__.p,self__.ch,meta14870__$1));
}));

(cljs.core.async.t_cljs$core$async14869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14871){
var self__ = this;
var _14871__$1 = this;
return self__.meta14870;
}));

(cljs.core.async.t_cljs$core$async14869.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14869.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14869.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14869.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14869.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async14869.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14869.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async14869.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14870","meta14870",-1576247740,null)], null);
}));

(cljs.core.async.t_cljs$core$async14869.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14869");

(cljs.core.async.t_cljs$core$async14869.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14869");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14869.
 */
cljs.core.async.__GT_t_cljs$core$async14869 = (function cljs$core$async$__GT_t_cljs$core$async14869(p,ch,meta14870){
return (new cljs.core.async.t_cljs$core$async14869(p,ch,meta14870));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async14869(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__14883 = arguments.length;
switch (G__14883) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12848__auto___16531 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12849__auto__ = (function (){var switch__11888__auto__ = (function (state_14907){
var state_val_14908 = (state_14907[(1)]);
if((state_val_14908 === (7))){
var inst_14903 = (state_14907[(2)]);
var state_14907__$1 = state_14907;
var statearr_14915_16532 = state_14907__$1;
(statearr_14915_16532[(2)] = inst_14903);

(statearr_14915_16532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14908 === (1))){
var state_14907__$1 = state_14907;
var statearr_14916_16535 = state_14907__$1;
(statearr_14916_16535[(2)] = null);

(statearr_14916_16535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14908 === (4))){
var inst_14889 = (state_14907[(7)]);
var inst_14889__$1 = (state_14907[(2)]);
var inst_14890 = (inst_14889__$1 == null);
var state_14907__$1 = (function (){var statearr_14924 = state_14907;
(statearr_14924[(7)] = inst_14889__$1);

return statearr_14924;
})();
if(cljs.core.truth_(inst_14890)){
var statearr_14925_16536 = state_14907__$1;
(statearr_14925_16536[(1)] = (5));

} else {
var statearr_14926_16537 = state_14907__$1;
(statearr_14926_16537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14908 === (6))){
var inst_14889 = (state_14907[(7)]);
var inst_14894 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14889) : p.call(null,inst_14889));
var state_14907__$1 = state_14907;
if(cljs.core.truth_(inst_14894)){
var statearr_14928_16540 = state_14907__$1;
(statearr_14928_16540[(1)] = (8));

} else {
var statearr_14929_16541 = state_14907__$1;
(statearr_14929_16541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14908 === (3))){
var inst_14905 = (state_14907[(2)]);
var state_14907__$1 = state_14907;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14907__$1,inst_14905);
} else {
if((state_val_14908 === (2))){
var state_14907__$1 = state_14907;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14907__$1,(4),ch);
} else {
if((state_val_14908 === (11))){
var inst_14897 = (state_14907[(2)]);
var state_14907__$1 = state_14907;
var statearr_14930_16546 = state_14907__$1;
(statearr_14930_16546[(2)] = inst_14897);

(statearr_14930_16546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14908 === (9))){
var state_14907__$1 = state_14907;
var statearr_14940_16547 = state_14907__$1;
(statearr_14940_16547[(2)] = null);

(statearr_14940_16547[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14908 === (5))){
var inst_14892 = cljs.core.async.close_BANG_(out);
var state_14907__$1 = state_14907;
var statearr_14941_16548 = state_14907__$1;
(statearr_14941_16548[(2)] = inst_14892);

(statearr_14941_16548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14908 === (10))){
var inst_14900 = (state_14907[(2)]);
var state_14907__$1 = (function (){var statearr_14942 = state_14907;
(statearr_14942[(8)] = inst_14900);

return statearr_14942;
})();
var statearr_14943_16549 = state_14907__$1;
(statearr_14943_16549[(2)] = null);

(statearr_14943_16549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14908 === (8))){
var inst_14889 = (state_14907[(7)]);
var state_14907__$1 = state_14907;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14907__$1,(11),out,inst_14889);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11889__auto__ = null;
var cljs$core$async$state_machine__11889__auto____0 = (function (){
var statearr_14944 = [null,null,null,null,null,null,null,null,null];
(statearr_14944[(0)] = cljs$core$async$state_machine__11889__auto__);

(statearr_14944[(1)] = (1));

return statearr_14944;
});
var cljs$core$async$state_machine__11889__auto____1 = (function (state_14907){
while(true){
var ret_value__11890__auto__ = (function (){try{while(true){
var result__11891__auto__ = switch__11888__auto__(state_14907);
if(cljs.core.keyword_identical_QMARK_(result__11891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11891__auto__;
}
break;
}
}catch (e14949){var ex__11892__auto__ = e14949;
var statearr_14950_16550 = state_14907;
(statearr_14950_16550[(2)] = ex__11892__auto__);


if(cljs.core.seq((state_14907[(4)]))){
var statearr_14951_16551 = state_14907;
(statearr_14951_16551[(1)] = cljs.core.first((state_14907[(4)])));

} else {
throw ex__11892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16552 = state_14907;
state_14907 = G__16552;
continue;
} else {
return ret_value__11890__auto__;
}
break;
}
});
cljs$core$async$state_machine__11889__auto__ = function(state_14907){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11889__auto____1.call(this,state_14907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11889__auto____0;
cljs$core$async$state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11889__auto____1;
return cljs$core$async$state_machine__11889__auto__;
})()
})();
var state__12850__auto__ = (function (){var statearr_14965 = f__12849__auto__();
(statearr_14965[(6)] = c__12848__auto___16531);

return statearr_14965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12850__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__14968 = arguments.length;
switch (G__14968) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__12848__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12849__auto__ = (function (){var switch__11888__auto__ = (function (state_15041){
var state_val_15042 = (state_15041[(1)]);
if((state_val_15042 === (7))){
var inst_15037 = (state_15041[(2)]);
var state_15041__$1 = state_15041;
var statearr_15047_16559 = state_15041__$1;
(statearr_15047_16559[(2)] = inst_15037);

(statearr_15047_16559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15042 === (20))){
var inst_15006 = (state_15041[(7)]);
var inst_15018 = (state_15041[(2)]);
var inst_15019 = cljs.core.next(inst_15006);
var inst_14989 = inst_15019;
var inst_14990 = null;
var inst_14991 = (0);
var inst_14992 = (0);
var state_15041__$1 = (function (){var statearr_15048 = state_15041;
(statearr_15048[(8)] = inst_14990);

(statearr_15048[(9)] = inst_14991);

(statearr_15048[(10)] = inst_14989);

(statearr_15048[(11)] = inst_15018);

(statearr_15048[(12)] = inst_14992);

return statearr_15048;
})();
var statearr_15049_16560 = state_15041__$1;
(statearr_15049_16560[(2)] = null);

(statearr_15049_16560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15042 === (1))){
var state_15041__$1 = state_15041;
var statearr_15050_16561 = state_15041__$1;
(statearr_15050_16561[(2)] = null);

(statearr_15050_16561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15042 === (4))){
var inst_14976 = (state_15041[(13)]);
var inst_14976__$1 = (state_15041[(2)]);
var inst_14978 = (inst_14976__$1 == null);
var state_15041__$1 = (function (){var statearr_15051 = state_15041;
(statearr_15051[(13)] = inst_14976__$1);

return statearr_15051;
})();
if(cljs.core.truth_(inst_14978)){
var statearr_15052_16562 = state_15041__$1;
(statearr_15052_16562[(1)] = (5));

} else {
var statearr_15053_16563 = state_15041__$1;
(statearr_15053_16563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15042 === (15))){
var state_15041__$1 = state_15041;
var statearr_15057_16564 = state_15041__$1;
(statearr_15057_16564[(2)] = null);

(statearr_15057_16564[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15042 === (21))){
var state_15041__$1 = state_15041;
var statearr_15058_16565 = state_15041__$1;
(statearr_15058_16565[(2)] = null);

(statearr_15058_16565[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15042 === (13))){
var inst_14990 = (state_15041[(8)]);
var inst_14991 = (state_15041[(9)]);
var inst_14989 = (state_15041[(10)]);
var inst_14992 = (state_15041[(12)]);
var inst_14999 = (state_15041[(2)]);
var inst_15000 = (inst_14992 + (1));
var tmp15054 = inst_14990;
var tmp15055 = inst_14991;
var tmp15056 = inst_14989;
var inst_14989__$1 = tmp15056;
var inst_14990__$1 = tmp15054;
var inst_14991__$1 = tmp15055;
var inst_14992__$1 = inst_15000;
var state_15041__$1 = (function (){var statearr_15060 = state_15041;
(statearr_15060[(8)] = inst_14990__$1);

(statearr_15060[(9)] = inst_14991__$1);

(statearr_15060[(10)] = inst_14989__$1);

(statearr_15060[(12)] = inst_14992__$1);

(statearr_15060[(14)] = inst_14999);

return statearr_15060;
})();
var statearr_15061_16566 = state_15041__$1;
(statearr_15061_16566[(2)] = null);

(statearr_15061_16566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15042 === (22))){
var state_15041__$1 = state_15041;
var statearr_15072_16571 = state_15041__$1;
(statearr_15072_16571[(2)] = null);

(statearr_15072_16571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15042 === (6))){
var inst_14976 = (state_15041[(13)]);
var inst_14987 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14976) : f.call(null,inst_14976));
var inst_14988 = cljs.core.seq(inst_14987);
var inst_14989 = inst_14988;
var inst_14990 = null;
var inst_14991 = (0);
var inst_14992 = (0);
var state_15041__$1 = (function (){var statearr_15074 = state_15041;
(statearr_15074[(8)] = inst_14990);

(statearr_15074[(9)] = inst_14991);

(statearr_15074[(10)] = inst_14989);

(statearr_15074[(12)] = inst_14992);

return statearr_15074;
})();
var statearr_15075_16576 = state_15041__$1;
(statearr_15075_16576[(2)] = null);

(statearr_15075_16576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15042 === (17))){
var inst_15006 = (state_15041[(7)]);
var inst_15010 = cljs.core.chunk_first(inst_15006);
var inst_15011 = cljs.core.chunk_rest(inst_15006);
var inst_15012 = cljs.core.count(inst_15010);
var inst_14989 = inst_15011;
var inst_14990 = inst_15010;
var inst_14991 = inst_15012;
var inst_14992 = (0);
var state_15041__$1 = (function (){var statearr_15079 = state_15041;
(statearr_15079[(8)] = inst_14990);

(statearr_15079[(9)] = inst_14991);

(statearr_15079[(10)] = inst_14989);

(statearr_15079[(12)] = inst_14992);

return statearr_15079;
})();
var statearr_15080_16577 = state_15041__$1;
(statearr_15080_16577[(2)] = null);

(statearr_15080_16577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15042 === (3))){
var inst_15039 = (state_15041[(2)]);
var state_15041__$1 = state_15041;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15041__$1,inst_15039);
} else {
if((state_val_15042 === (12))){
var inst_15027 = (state_15041[(2)]);
var state_15041__$1 = state_15041;
var statearr_15083_16578 = state_15041__$1;
(statearr_15083_16578[(2)] = inst_15027);

(statearr_15083_16578[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15042 === (2))){
var state_15041__$1 = state_15041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15041__$1,(4),in$);
} else {
if((state_val_15042 === (23))){
var inst_15035 = (state_15041[(2)]);
var state_15041__$1 = state_15041;
var statearr_15089_16579 = state_15041__$1;
(statearr_15089_16579[(2)] = inst_15035);

(statearr_15089_16579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15042 === (19))){
var inst_15022 = (state_15041[(2)]);
var state_15041__$1 = state_15041;
var statearr_15090_16584 = state_15041__$1;
(statearr_15090_16584[(2)] = inst_15022);

(statearr_15090_16584[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15042 === (11))){
var inst_14989 = (state_15041[(10)]);
var inst_15006 = (state_15041[(7)]);
var inst_15006__$1 = cljs.core.seq(inst_14989);
var state_15041__$1 = (function (){var statearr_15091 = state_15041;
(statearr_15091[(7)] = inst_15006__$1);

return statearr_15091;
})();
if(inst_15006__$1){
var statearr_15092_16588 = state_15041__$1;
(statearr_15092_16588[(1)] = (14));

} else {
var statearr_15093_16589 = state_15041__$1;
(statearr_15093_16589[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15042 === (9))){
var inst_15029 = (state_15041[(2)]);
var inst_15030 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_15041__$1 = (function (){var statearr_15094 = state_15041;
(statearr_15094[(15)] = inst_15029);

return statearr_15094;
})();
if(cljs.core.truth_(inst_15030)){
var statearr_15096_16594 = state_15041__$1;
(statearr_15096_16594[(1)] = (21));

} else {
var statearr_15097_16595 = state_15041__$1;
(statearr_15097_16595[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15042 === (5))){
var inst_14981 = cljs.core.async.close_BANG_(out);
var state_15041__$1 = state_15041;
var statearr_15098_16596 = state_15041__$1;
(statearr_15098_16596[(2)] = inst_14981);

(statearr_15098_16596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15042 === (14))){
var inst_15006 = (state_15041[(7)]);
var inst_15008 = cljs.core.chunked_seq_QMARK_(inst_15006);
var state_15041__$1 = state_15041;
if(inst_15008){
var statearr_15100_16597 = state_15041__$1;
(statearr_15100_16597[(1)] = (17));

} else {
var statearr_15101_16598 = state_15041__$1;
(statearr_15101_16598[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15042 === (16))){
var inst_15025 = (state_15041[(2)]);
var state_15041__$1 = state_15041;
var statearr_15102_16599 = state_15041__$1;
(statearr_15102_16599[(2)] = inst_15025);

(statearr_15102_16599[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15042 === (10))){
var inst_14990 = (state_15041[(8)]);
var inst_14992 = (state_15041[(12)]);
var inst_14997 = cljs.core._nth(inst_14990,inst_14992);
var state_15041__$1 = state_15041;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15041__$1,(13),out,inst_14997);
} else {
if((state_val_15042 === (18))){
var inst_15006 = (state_15041[(7)]);
var inst_15016 = cljs.core.first(inst_15006);
var state_15041__$1 = state_15041;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15041__$1,(20),out,inst_15016);
} else {
if((state_val_15042 === (8))){
var inst_14991 = (state_15041[(9)]);
var inst_14992 = (state_15041[(12)]);
var inst_14994 = (inst_14992 < inst_14991);
var inst_14995 = inst_14994;
var state_15041__$1 = state_15041;
if(cljs.core.truth_(inst_14995)){
var statearr_15108_16608 = state_15041__$1;
(statearr_15108_16608[(1)] = (10));

} else {
var statearr_15109_16609 = state_15041__$1;
(statearr_15109_16609[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__11889__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11889__auto____0 = (function (){
var statearr_15110 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15110[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11889__auto__);

(statearr_15110[(1)] = (1));

return statearr_15110;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11889__auto____1 = (function (state_15041){
while(true){
var ret_value__11890__auto__ = (function (){try{while(true){
var result__11891__auto__ = switch__11888__auto__(state_15041);
if(cljs.core.keyword_identical_QMARK_(result__11891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11891__auto__;
}
break;
}
}catch (e15114){var ex__11892__auto__ = e15114;
var statearr_15115_16620 = state_15041;
(statearr_15115_16620[(2)] = ex__11892__auto__);


if(cljs.core.seq((state_15041[(4)]))){
var statearr_15118_16621 = state_15041;
(statearr_15118_16621[(1)] = cljs.core.first((state_15041[(4)])));

} else {
throw ex__11892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16622 = state_15041;
state_15041 = G__16622;
continue;
} else {
return ret_value__11890__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11889__auto__ = function(state_15041){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11889__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11889__auto____1.call(this,state_15041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11889__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11889__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11889__auto__;
})()
})();
var state__12850__auto__ = (function (){var statearr_15119 = f__12849__auto__();
(statearr_15119[(6)] = c__12848__auto__);

return statearr_15119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12850__auto__);
}));

return c__12848__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__15121 = arguments.length;
switch (G__15121) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__15127 = arguments.length;
switch (G__15127) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__15142 = arguments.length;
switch (G__15142) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12848__auto___16633 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12849__auto__ = (function (){var switch__11888__auto__ = (function (state_15179){
var state_val_15180 = (state_15179[(1)]);
if((state_val_15180 === (7))){
var inst_15174 = (state_15179[(2)]);
var state_15179__$1 = state_15179;
var statearr_15181_16634 = state_15179__$1;
(statearr_15181_16634[(2)] = inst_15174);

(statearr_15181_16634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15180 === (1))){
var inst_15152 = null;
var state_15179__$1 = (function (){var statearr_15188 = state_15179;
(statearr_15188[(7)] = inst_15152);

return statearr_15188;
})();
var statearr_15189_16635 = state_15179__$1;
(statearr_15189_16635[(2)] = null);

(statearr_15189_16635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15180 === (4))){
var inst_15155 = (state_15179[(8)]);
var inst_15155__$1 = (state_15179[(2)]);
var inst_15157 = (inst_15155__$1 == null);
var inst_15161 = cljs.core.not(inst_15157);
var state_15179__$1 = (function (){var statearr_15190 = state_15179;
(statearr_15190[(8)] = inst_15155__$1);

return statearr_15190;
})();
if(inst_15161){
var statearr_15191_16636 = state_15179__$1;
(statearr_15191_16636[(1)] = (5));

} else {
var statearr_15192_16637 = state_15179__$1;
(statearr_15192_16637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15180 === (6))){
var state_15179__$1 = state_15179;
var statearr_15199_16638 = state_15179__$1;
(statearr_15199_16638[(2)] = null);

(statearr_15199_16638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15180 === (3))){
var inst_15176 = (state_15179[(2)]);
var inst_15177 = cljs.core.async.close_BANG_(out);
var state_15179__$1 = (function (){var statearr_15200 = state_15179;
(statearr_15200[(9)] = inst_15176);

return statearr_15200;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15179__$1,inst_15177);
} else {
if((state_val_15180 === (2))){
var state_15179__$1 = state_15179;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15179__$1,(4),ch);
} else {
if((state_val_15180 === (11))){
var inst_15155 = (state_15179[(8)]);
var inst_15168 = (state_15179[(2)]);
var inst_15152 = inst_15155;
var state_15179__$1 = (function (){var statearr_15201 = state_15179;
(statearr_15201[(10)] = inst_15168);

(statearr_15201[(7)] = inst_15152);

return statearr_15201;
})();
var statearr_15202_16640 = state_15179__$1;
(statearr_15202_16640[(2)] = null);

(statearr_15202_16640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15180 === (9))){
var inst_15155 = (state_15179[(8)]);
var state_15179__$1 = state_15179;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15179__$1,(11),out,inst_15155);
} else {
if((state_val_15180 === (5))){
var inst_15155 = (state_15179[(8)]);
var inst_15152 = (state_15179[(7)]);
var inst_15163 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15155,inst_15152);
var state_15179__$1 = state_15179;
if(inst_15163){
var statearr_15205_16641 = state_15179__$1;
(statearr_15205_16641[(1)] = (8));

} else {
var statearr_15206_16642 = state_15179__$1;
(statearr_15206_16642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15180 === (10))){
var inst_15171 = (state_15179[(2)]);
var state_15179__$1 = state_15179;
var statearr_15207_16643 = state_15179__$1;
(statearr_15207_16643[(2)] = inst_15171);

(statearr_15207_16643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15180 === (8))){
var inst_15152 = (state_15179[(7)]);
var tmp15203 = inst_15152;
var inst_15152__$1 = tmp15203;
var state_15179__$1 = (function (){var statearr_15209 = state_15179;
(statearr_15209[(7)] = inst_15152__$1);

return statearr_15209;
})();
var statearr_15210_16644 = state_15179__$1;
(statearr_15210_16644[(2)] = null);

(statearr_15210_16644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11889__auto__ = null;
var cljs$core$async$state_machine__11889__auto____0 = (function (){
var statearr_15211 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15211[(0)] = cljs$core$async$state_machine__11889__auto__);

(statearr_15211[(1)] = (1));

return statearr_15211;
});
var cljs$core$async$state_machine__11889__auto____1 = (function (state_15179){
while(true){
var ret_value__11890__auto__ = (function (){try{while(true){
var result__11891__auto__ = switch__11888__auto__(state_15179);
if(cljs.core.keyword_identical_QMARK_(result__11891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11891__auto__;
}
break;
}
}catch (e15212){var ex__11892__auto__ = e15212;
var statearr_15213_16645 = state_15179;
(statearr_15213_16645[(2)] = ex__11892__auto__);


if(cljs.core.seq((state_15179[(4)]))){
var statearr_15217_16646 = state_15179;
(statearr_15217_16646[(1)] = cljs.core.first((state_15179[(4)])));

} else {
throw ex__11892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16647 = state_15179;
state_15179 = G__16647;
continue;
} else {
return ret_value__11890__auto__;
}
break;
}
});
cljs$core$async$state_machine__11889__auto__ = function(state_15179){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11889__auto____1.call(this,state_15179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11889__auto____0;
cljs$core$async$state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11889__auto____1;
return cljs$core$async$state_machine__11889__auto__;
})()
})();
var state__12850__auto__ = (function (){var statearr_15223 = f__12849__auto__();
(statearr_15223[(6)] = c__12848__auto___16633);

return statearr_15223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12850__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__15233 = arguments.length;
switch (G__15233) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12848__auto___16651 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12849__auto__ = (function (){var switch__11888__auto__ = (function (state_15281){
var state_val_15282 = (state_15281[(1)]);
if((state_val_15282 === (7))){
var inst_15274 = (state_15281[(2)]);
var state_15281__$1 = state_15281;
var statearr_15283_16653 = state_15281__$1;
(statearr_15283_16653[(2)] = inst_15274);

(statearr_15283_16653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15282 === (1))){
var inst_15236 = (new Array(n));
var inst_15237 = inst_15236;
var inst_15238 = (0);
var state_15281__$1 = (function (){var statearr_15284 = state_15281;
(statearr_15284[(7)] = inst_15238);

(statearr_15284[(8)] = inst_15237);

return statearr_15284;
})();
var statearr_15285_16654 = state_15281__$1;
(statearr_15285_16654[(2)] = null);

(statearr_15285_16654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15282 === (4))){
var inst_15241 = (state_15281[(9)]);
var inst_15241__$1 = (state_15281[(2)]);
var inst_15242 = (inst_15241__$1 == null);
var inst_15243 = cljs.core.not(inst_15242);
var state_15281__$1 = (function (){var statearr_15293 = state_15281;
(statearr_15293[(9)] = inst_15241__$1);

return statearr_15293;
})();
if(inst_15243){
var statearr_15294_16659 = state_15281__$1;
(statearr_15294_16659[(1)] = (5));

} else {
var statearr_15295_16660 = state_15281__$1;
(statearr_15295_16660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15282 === (15))){
var inst_15268 = (state_15281[(2)]);
var state_15281__$1 = state_15281;
var statearr_15296_16662 = state_15281__$1;
(statearr_15296_16662[(2)] = inst_15268);

(statearr_15296_16662[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15282 === (13))){
var state_15281__$1 = state_15281;
var statearr_15297_16665 = state_15281__$1;
(statearr_15297_16665[(2)] = null);

(statearr_15297_16665[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15282 === (6))){
var inst_15238 = (state_15281[(7)]);
var inst_15264 = (inst_15238 > (0));
var state_15281__$1 = state_15281;
if(cljs.core.truth_(inst_15264)){
var statearr_15298_16666 = state_15281__$1;
(statearr_15298_16666[(1)] = (12));

} else {
var statearr_15299_16667 = state_15281__$1;
(statearr_15299_16667[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15282 === (3))){
var inst_15276 = (state_15281[(2)]);
var state_15281__$1 = state_15281;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15281__$1,inst_15276);
} else {
if((state_val_15282 === (12))){
var inst_15237 = (state_15281[(8)]);
var inst_15266 = cljs.core.vec(inst_15237);
var state_15281__$1 = state_15281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15281__$1,(15),out,inst_15266);
} else {
if((state_val_15282 === (2))){
var state_15281__$1 = state_15281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15281__$1,(4),ch);
} else {
if((state_val_15282 === (11))){
var inst_15258 = (state_15281[(2)]);
var inst_15259 = (new Array(n));
var inst_15237 = inst_15259;
var inst_15238 = (0);
var state_15281__$1 = (function (){var statearr_15310 = state_15281;
(statearr_15310[(7)] = inst_15238);

(statearr_15310[(10)] = inst_15258);

(statearr_15310[(8)] = inst_15237);

return statearr_15310;
})();
var statearr_15311_16669 = state_15281__$1;
(statearr_15311_16669[(2)] = null);

(statearr_15311_16669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15282 === (9))){
var inst_15237 = (state_15281[(8)]);
var inst_15256 = cljs.core.vec(inst_15237);
var state_15281__$1 = state_15281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15281__$1,(11),out,inst_15256);
} else {
if((state_val_15282 === (5))){
var inst_15238 = (state_15281[(7)]);
var inst_15237 = (state_15281[(8)]);
var inst_15241 = (state_15281[(9)]);
var inst_15247 = (state_15281[(11)]);
var inst_15245 = (inst_15237[inst_15238] = inst_15241);
var inst_15247__$1 = (inst_15238 + (1));
var inst_15252 = (inst_15247__$1 < n);
var state_15281__$1 = (function (){var statearr_15312 = state_15281;
(statearr_15312[(11)] = inst_15247__$1);

(statearr_15312[(12)] = inst_15245);

return statearr_15312;
})();
if(cljs.core.truth_(inst_15252)){
var statearr_15313_16670 = state_15281__$1;
(statearr_15313_16670[(1)] = (8));

} else {
var statearr_15314_16671 = state_15281__$1;
(statearr_15314_16671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15282 === (14))){
var inst_15271 = (state_15281[(2)]);
var inst_15272 = cljs.core.async.close_BANG_(out);
var state_15281__$1 = (function (){var statearr_15319 = state_15281;
(statearr_15319[(13)] = inst_15271);

return statearr_15319;
})();
var statearr_15320_16672 = state_15281__$1;
(statearr_15320_16672[(2)] = inst_15272);

(statearr_15320_16672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15282 === (10))){
var inst_15262 = (state_15281[(2)]);
var state_15281__$1 = state_15281;
var statearr_15321_16673 = state_15281__$1;
(statearr_15321_16673[(2)] = inst_15262);

(statearr_15321_16673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15282 === (8))){
var inst_15237 = (state_15281[(8)]);
var inst_15247 = (state_15281[(11)]);
var tmp15315 = inst_15237;
var inst_15237__$1 = tmp15315;
var inst_15238 = inst_15247;
var state_15281__$1 = (function (){var statearr_15322 = state_15281;
(statearr_15322[(7)] = inst_15238);

(statearr_15322[(8)] = inst_15237__$1);

return statearr_15322;
})();
var statearr_15323_16674 = state_15281__$1;
(statearr_15323_16674[(2)] = null);

(statearr_15323_16674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11889__auto__ = null;
var cljs$core$async$state_machine__11889__auto____0 = (function (){
var statearr_15327 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15327[(0)] = cljs$core$async$state_machine__11889__auto__);

(statearr_15327[(1)] = (1));

return statearr_15327;
});
var cljs$core$async$state_machine__11889__auto____1 = (function (state_15281){
while(true){
var ret_value__11890__auto__ = (function (){try{while(true){
var result__11891__auto__ = switch__11888__auto__(state_15281);
if(cljs.core.keyword_identical_QMARK_(result__11891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11891__auto__;
}
break;
}
}catch (e15328){var ex__11892__auto__ = e15328;
var statearr_15329_16675 = state_15281;
(statearr_15329_16675[(2)] = ex__11892__auto__);


if(cljs.core.seq((state_15281[(4)]))){
var statearr_15330_16680 = state_15281;
(statearr_15330_16680[(1)] = cljs.core.first((state_15281[(4)])));

} else {
throw ex__11892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16681 = state_15281;
state_15281 = G__16681;
continue;
} else {
return ret_value__11890__auto__;
}
break;
}
});
cljs$core$async$state_machine__11889__auto__ = function(state_15281){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11889__auto____1.call(this,state_15281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11889__auto____0;
cljs$core$async$state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11889__auto____1;
return cljs$core$async$state_machine__11889__auto__;
})()
})();
var state__12850__auto__ = (function (){var statearr_15331 = f__12849__auto__();
(statearr_15331[(6)] = c__12848__auto___16651);

return statearr_15331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12850__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__15336 = arguments.length;
switch (G__15336) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12848__auto___16683 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12849__auto__ = (function (){var switch__11888__auto__ = (function (state_15381){
var state_val_15382 = (state_15381[(1)]);
if((state_val_15382 === (7))){
var inst_15377 = (state_15381[(2)]);
var state_15381__$1 = state_15381;
var statearr_15386_16687 = state_15381__$1;
(statearr_15386_16687[(2)] = inst_15377);

(statearr_15386_16687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15382 === (1))){
var inst_15337 = [];
var inst_15338 = inst_15337;
var inst_15339 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15381__$1 = (function (){var statearr_15387 = state_15381;
(statearr_15387[(7)] = inst_15339);

(statearr_15387[(8)] = inst_15338);

return statearr_15387;
})();
var statearr_15388_16688 = state_15381__$1;
(statearr_15388_16688[(2)] = null);

(statearr_15388_16688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15382 === (4))){
var inst_15342 = (state_15381[(9)]);
var inst_15342__$1 = (state_15381[(2)]);
var inst_15343 = (inst_15342__$1 == null);
var inst_15344 = cljs.core.not(inst_15343);
var state_15381__$1 = (function (){var statearr_15389 = state_15381;
(statearr_15389[(9)] = inst_15342__$1);

return statearr_15389;
})();
if(inst_15344){
var statearr_15390_16692 = state_15381__$1;
(statearr_15390_16692[(1)] = (5));

} else {
var statearr_15391_16693 = state_15381__$1;
(statearr_15391_16693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15382 === (15))){
var inst_15338 = (state_15381[(8)]);
var inst_15369 = cljs.core.vec(inst_15338);
var state_15381__$1 = state_15381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15381__$1,(18),out,inst_15369);
} else {
if((state_val_15382 === (13))){
var inst_15364 = (state_15381[(2)]);
var state_15381__$1 = state_15381;
var statearr_15392_16698 = state_15381__$1;
(statearr_15392_16698[(2)] = inst_15364);

(statearr_15392_16698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15382 === (6))){
var inst_15338 = (state_15381[(8)]);
var inst_15366 = inst_15338.length;
var inst_15367 = (inst_15366 > (0));
var state_15381__$1 = state_15381;
if(cljs.core.truth_(inst_15367)){
var statearr_15396_16699 = state_15381__$1;
(statearr_15396_16699[(1)] = (15));

} else {
var statearr_15397_16703 = state_15381__$1;
(statearr_15397_16703[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15382 === (17))){
var inst_15374 = (state_15381[(2)]);
var inst_15375 = cljs.core.async.close_BANG_(out);
var state_15381__$1 = (function (){var statearr_15398 = state_15381;
(statearr_15398[(10)] = inst_15374);

return statearr_15398;
})();
var statearr_15399_16705 = state_15381__$1;
(statearr_15399_16705[(2)] = inst_15375);

(statearr_15399_16705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15382 === (3))){
var inst_15379 = (state_15381[(2)]);
var state_15381__$1 = state_15381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15381__$1,inst_15379);
} else {
if((state_val_15382 === (12))){
var inst_15338 = (state_15381[(8)]);
var inst_15357 = cljs.core.vec(inst_15338);
var state_15381__$1 = state_15381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15381__$1,(14),out,inst_15357);
} else {
if((state_val_15382 === (2))){
var state_15381__$1 = state_15381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15381__$1,(4),ch);
} else {
if((state_val_15382 === (11))){
var inst_15338 = (state_15381[(8)]);
var inst_15342 = (state_15381[(9)]);
var inst_15346 = (state_15381[(11)]);
var inst_15354 = inst_15338.push(inst_15342);
var tmp15400 = inst_15338;
var inst_15338__$1 = tmp15400;
var inst_15339 = inst_15346;
var state_15381__$1 = (function (){var statearr_15402 = state_15381;
(statearr_15402[(12)] = inst_15354);

(statearr_15402[(7)] = inst_15339);

(statearr_15402[(8)] = inst_15338__$1);

return statearr_15402;
})();
var statearr_15403_16712 = state_15381__$1;
(statearr_15403_16712[(2)] = null);

(statearr_15403_16712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15382 === (9))){
var inst_15339 = (state_15381[(7)]);
var inst_15350 = cljs.core.keyword_identical_QMARK_(inst_15339,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_15381__$1 = state_15381;
var statearr_15404_16713 = state_15381__$1;
(statearr_15404_16713[(2)] = inst_15350);

(statearr_15404_16713[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15382 === (5))){
var inst_15339 = (state_15381[(7)]);
var inst_15342 = (state_15381[(9)]);
var inst_15346 = (state_15381[(11)]);
var inst_15347 = (state_15381[(13)]);
var inst_15346__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15342) : f.call(null,inst_15342));
var inst_15347__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15346__$1,inst_15339);
var state_15381__$1 = (function (){var statearr_15405 = state_15381;
(statearr_15405[(11)] = inst_15346__$1);

(statearr_15405[(13)] = inst_15347__$1);

return statearr_15405;
})();
if(inst_15347__$1){
var statearr_15409_16715 = state_15381__$1;
(statearr_15409_16715[(1)] = (8));

} else {
var statearr_15410_16719 = state_15381__$1;
(statearr_15410_16719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15382 === (14))){
var inst_15342 = (state_15381[(9)]);
var inst_15346 = (state_15381[(11)]);
var inst_15359 = (state_15381[(2)]);
var inst_15360 = [];
var inst_15361 = inst_15360.push(inst_15342);
var inst_15338 = inst_15360;
var inst_15339 = inst_15346;
var state_15381__$1 = (function (){var statearr_15411 = state_15381;
(statearr_15411[(14)] = inst_15361);

(statearr_15411[(7)] = inst_15339);

(statearr_15411[(8)] = inst_15338);

(statearr_15411[(15)] = inst_15359);

return statearr_15411;
})();
var statearr_15412_16724 = state_15381__$1;
(statearr_15412_16724[(2)] = null);

(statearr_15412_16724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15382 === (16))){
var state_15381__$1 = state_15381;
var statearr_15413_16726 = state_15381__$1;
(statearr_15413_16726[(2)] = null);

(statearr_15413_16726[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15382 === (10))){
var inst_15352 = (state_15381[(2)]);
var state_15381__$1 = state_15381;
if(cljs.core.truth_(inst_15352)){
var statearr_15414_16727 = state_15381__$1;
(statearr_15414_16727[(1)] = (11));

} else {
var statearr_15415_16728 = state_15381__$1;
(statearr_15415_16728[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15382 === (18))){
var inst_15371 = (state_15381[(2)]);
var state_15381__$1 = state_15381;
var statearr_15418_16730 = state_15381__$1;
(statearr_15418_16730[(2)] = inst_15371);

(statearr_15418_16730[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15382 === (8))){
var inst_15347 = (state_15381[(13)]);
var state_15381__$1 = state_15381;
var statearr_15419_16734 = state_15381__$1;
(statearr_15419_16734[(2)] = inst_15347);

(statearr_15419_16734[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11889__auto__ = null;
var cljs$core$async$state_machine__11889__auto____0 = (function (){
var statearr_15423 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15423[(0)] = cljs$core$async$state_machine__11889__auto__);

(statearr_15423[(1)] = (1));

return statearr_15423;
});
var cljs$core$async$state_machine__11889__auto____1 = (function (state_15381){
while(true){
var ret_value__11890__auto__ = (function (){try{while(true){
var result__11891__auto__ = switch__11888__auto__(state_15381);
if(cljs.core.keyword_identical_QMARK_(result__11891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11891__auto__;
}
break;
}
}catch (e15424){var ex__11892__auto__ = e15424;
var statearr_15425_16735 = state_15381;
(statearr_15425_16735[(2)] = ex__11892__auto__);


if(cljs.core.seq((state_15381[(4)]))){
var statearr_15426_16741 = state_15381;
(statearr_15426_16741[(1)] = cljs.core.first((state_15381[(4)])));

} else {
throw ex__11892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16742 = state_15381;
state_15381 = G__16742;
continue;
} else {
return ret_value__11890__auto__;
}
break;
}
});
cljs$core$async$state_machine__11889__auto__ = function(state_15381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11889__auto____1.call(this,state_15381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11889__auto____0;
cljs$core$async$state_machine__11889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11889__auto____1;
return cljs$core$async$state_machine__11889__auto__;
})()
})();
var state__12850__auto__ = (function (){var statearr_15428 = f__12849__auto__();
(statearr_15428[(6)] = c__12848__auto___16683);

return statearr_15428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12850__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
