// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args10272 = [];
var len__7651__auto___10278 = arguments.length;
var i__7652__auto___10279 = (0);
while(true){
if((i__7652__auto___10279 < len__7651__auto___10278)){
args10272.push((arguments[i__7652__auto___10279]));

var G__10280 = (i__7652__auto___10279 + (1));
i__7652__auto___10279 = G__10280;
continue;
} else {
}
break;
}

var G__10274 = args10272.length;
switch (G__10274) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10272.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async10275 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10275 = (function (f,blockable,meta10276){
this.f = f;
this.blockable = blockable;
this.meta10276 = meta10276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10277,meta10276__$1){
var self__ = this;
var _10277__$1 = this;
return (new cljs.core.async.t_cljs$core$async10275(self__.f,self__.blockable,meta10276__$1));
});

cljs.core.async.t_cljs$core$async10275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10277){
var self__ = this;
var _10277__$1 = this;
return self__.meta10276;
});

cljs.core.async.t_cljs$core$async10275.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10275.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10275.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async10275.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async10275.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta10276","meta10276",-417414850,null)], null);
});

cljs.core.async.t_cljs$core$async10275.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10275.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10275";

cljs.core.async.t_cljs$core$async10275.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async10275");
});

cljs.core.async.__GT_t_cljs$core$async10275 = (function cljs$core$async$__GT_t_cljs$core$async10275(f__$1,blockable__$1,meta10276){
return (new cljs.core.async.t_cljs$core$async10275(f__$1,blockable__$1,meta10276));
});

}

return (new cljs.core.async.t_cljs$core$async10275(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args10284 = [];
var len__7651__auto___10287 = arguments.length;
var i__7652__auto___10288 = (0);
while(true){
if((i__7652__auto___10288 < len__7651__auto___10287)){
args10284.push((arguments[i__7652__auto___10288]));

var G__10289 = (i__7652__auto___10288 + (1));
i__7652__auto___10288 = G__10289;
continue;
} else {
}
break;
}

var G__10286 = args10284.length;
switch (G__10286) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10284.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args10291 = [];
var len__7651__auto___10294 = arguments.length;
var i__7652__auto___10295 = (0);
while(true){
if((i__7652__auto___10295 < len__7651__auto___10294)){
args10291.push((arguments[i__7652__auto___10295]));

var G__10296 = (i__7652__auto___10295 + (1));
i__7652__auto___10295 = G__10296;
continue;
} else {
}
break;
}

var G__10293 = args10291.length;
switch (G__10293) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10291.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args10298 = [];
var len__7651__auto___10301 = arguments.length;
var i__7652__auto___10302 = (0);
while(true){
if((i__7652__auto___10302 < len__7651__auto___10301)){
args10298.push((arguments[i__7652__auto___10302]));

var G__10303 = (i__7652__auto___10302 + (1));
i__7652__auto___10302 = G__10303;
continue;
} else {
}
break;
}

var G__10300 = args10298.length;
switch (G__10300) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10298.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_10305 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_10305);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_10305,ret){
return (function (){
return fn1.call(null,val_10305);
});})(val_10305,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args10306 = [];
var len__7651__auto___10309 = arguments.length;
var i__7652__auto___10310 = (0);
while(true){
if((i__7652__auto___10310 < len__7651__auto___10309)){
args10306.push((arguments[i__7652__auto___10310]));

var G__10311 = (i__7652__auto___10310 + (1));
i__7652__auto___10310 = G__10311;
continue;
} else {
}
break;
}

var G__10308 = args10306.length;
switch (G__10308) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10306.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7461__auto___10313 = n;
var x_10314 = (0);
while(true){
if((x_10314 < n__7461__auto___10313)){
(a[x_10314] = (0));

var G__10315 = (x_10314 + (1));
x_10314 = G__10315;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__10316 = (i + (1));
i = G__10316;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async10320 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10320 = (function (flag,meta10321){
this.flag = flag;
this.meta10321 = meta10321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10322,meta10321__$1){
var self__ = this;
var _10322__$1 = this;
return (new cljs.core.async.t_cljs$core$async10320(self__.flag,meta10321__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async10320.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10322){
var self__ = this;
var _10322__$1 = this;
return self__.meta10321;
});})(flag))
;

cljs.core.async.t_cljs$core$async10320.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10320.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async10320.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10320.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10320.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10321","meta10321",559379718,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async10320.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10320.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10320";

cljs.core.async.t_cljs$core$async10320.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async10320");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async10320 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10320(flag__$1,meta10321){
return (new cljs.core.async.t_cljs$core$async10320(flag__$1,meta10321));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async10320(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async10326 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10326 = (function (flag,cb,meta10327){
this.flag = flag;
this.cb = cb;
this.meta10327 = meta10327;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10328,meta10327__$1){
var self__ = this;
var _10328__$1 = this;
return (new cljs.core.async.t_cljs$core$async10326(self__.flag,self__.cb,meta10327__$1));
});

cljs.core.async.t_cljs$core$async10326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10328){
var self__ = this;
var _10328__$1 = this;
return self__.meta10327;
});

cljs.core.async.t_cljs$core$async10326.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10326.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async10326.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10326.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async10326.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10327","meta10327",1551763293,null)], null);
});

cljs.core.async.t_cljs$core$async10326.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10326.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10326";

cljs.core.async.t_cljs$core$async10326.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async10326");
});

cljs.core.async.__GT_t_cljs$core$async10326 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10326(flag__$1,cb__$1,meta10327){
return (new cljs.core.async.t_cljs$core$async10326(flag__$1,cb__$1,meta10327));
});

}

return (new cljs.core.async.t_cljs$core$async10326(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10329_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10329_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10330_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10330_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6543__auto__ = wport;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return port;
}
})()], null));
} else {
var G__10331 = (i + (1));
i = G__10331;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6543__auto__ = ret;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6531__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6531__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6531__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__7658__auto__ = [];
var len__7651__auto___10337 = arguments.length;
var i__7652__auto___10338 = (0);
while(true){
if((i__7652__auto___10338 < len__7651__auto___10337)){
args__7658__auto__.push((arguments[i__7652__auto___10338]));

var G__10339 = (i__7652__auto___10338 + (1));
i__7652__auto___10338 = G__10339;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10334){
var map__10335 = p__10334;
var map__10335__$1 = ((((!((map__10335 == null)))?((((map__10335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10335.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10335):map__10335);
var opts = map__10335__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10332){
var G__10333 = cljs.core.first.call(null,seq10332);
var seq10332__$1 = cljs.core.next.call(null,seq10332);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10333,seq10332__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var args10340 = [];
var len__7651__auto___10390 = arguments.length;
var i__7652__auto___10391 = (0);
while(true){
if((i__7652__auto___10391 < len__7651__auto___10390)){
args10340.push((arguments[i__7652__auto___10391]));

var G__10392 = (i__7652__auto___10391 + (1));
i__7652__auto___10391 = G__10392;
continue;
} else {
}
break;
}

var G__10342 = args10340.length;
switch (G__10342) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10340.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10227__auto___10394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10227__auto___10394){
return (function (){
var f__10228__auto__ = (function (){var switch__10115__auto__ = ((function (c__10227__auto___10394){
return (function (state_10366){
var state_val_10367 = (state_10366[(1)]);
if((state_val_10367 === (7))){
var inst_10362 = (state_10366[(2)]);
var state_10366__$1 = state_10366;
var statearr_10368_10395 = state_10366__$1;
(statearr_10368_10395[(2)] = inst_10362);

(statearr_10368_10395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10367 === (1))){
var state_10366__$1 = state_10366;
var statearr_10369_10396 = state_10366__$1;
(statearr_10369_10396[(2)] = null);

(statearr_10369_10396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10367 === (4))){
var inst_10345 = (state_10366[(7)]);
var inst_10345__$1 = (state_10366[(2)]);
var inst_10346 = (inst_10345__$1 == null);
var state_10366__$1 = (function (){var statearr_10370 = state_10366;
(statearr_10370[(7)] = inst_10345__$1);

return statearr_10370;
})();
if(cljs.core.truth_(inst_10346)){
var statearr_10371_10397 = state_10366__$1;
(statearr_10371_10397[(1)] = (5));

} else {
var statearr_10372_10398 = state_10366__$1;
(statearr_10372_10398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10367 === (13))){
var state_10366__$1 = state_10366;
var statearr_10373_10399 = state_10366__$1;
(statearr_10373_10399[(2)] = null);

(statearr_10373_10399[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10367 === (6))){
var inst_10345 = (state_10366[(7)]);
var state_10366__$1 = state_10366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10366__$1,(11),to,inst_10345);
} else {
if((state_val_10367 === (3))){
var inst_10364 = (state_10366[(2)]);
var state_10366__$1 = state_10366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10366__$1,inst_10364);
} else {
if((state_val_10367 === (12))){
var state_10366__$1 = state_10366;
var statearr_10374_10400 = state_10366__$1;
(statearr_10374_10400[(2)] = null);

(statearr_10374_10400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10367 === (2))){
var state_10366__$1 = state_10366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10366__$1,(4),from);
} else {
if((state_val_10367 === (11))){
var inst_10355 = (state_10366[(2)]);
var state_10366__$1 = state_10366;
if(cljs.core.truth_(inst_10355)){
var statearr_10375_10401 = state_10366__$1;
(statearr_10375_10401[(1)] = (12));

} else {
var statearr_10376_10402 = state_10366__$1;
(statearr_10376_10402[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10367 === (9))){
var state_10366__$1 = state_10366;
var statearr_10377_10403 = state_10366__$1;
(statearr_10377_10403[(2)] = null);

(statearr_10377_10403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10367 === (5))){
var state_10366__$1 = state_10366;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10378_10404 = state_10366__$1;
(statearr_10378_10404[(1)] = (8));

} else {
var statearr_10379_10405 = state_10366__$1;
(statearr_10379_10405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10367 === (14))){
var inst_10360 = (state_10366[(2)]);
var state_10366__$1 = state_10366;
var statearr_10380_10406 = state_10366__$1;
(statearr_10380_10406[(2)] = inst_10360);

(statearr_10380_10406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10367 === (10))){
var inst_10352 = (state_10366[(2)]);
var state_10366__$1 = state_10366;
var statearr_10381_10407 = state_10366__$1;
(statearr_10381_10407[(2)] = inst_10352);

(statearr_10381_10407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10367 === (8))){
var inst_10349 = cljs.core.async.close_BANG_.call(null,to);
var state_10366__$1 = state_10366;
var statearr_10382_10408 = state_10366__$1;
(statearr_10382_10408[(2)] = inst_10349);

(statearr_10382_10408[(1)] = (10));


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
});})(c__10227__auto___10394))
;
return ((function (switch__10115__auto__,c__10227__auto___10394){
return (function() {
var cljs$core$async$state_machine__10116__auto__ = null;
var cljs$core$async$state_machine__10116__auto____0 = (function (){
var statearr_10386 = [null,null,null,null,null,null,null,null];
(statearr_10386[(0)] = cljs$core$async$state_machine__10116__auto__);

(statearr_10386[(1)] = (1));

return statearr_10386;
});
var cljs$core$async$state_machine__10116__auto____1 = (function (state_10366){
while(true){
var ret_value__10117__auto__ = (function (){try{while(true){
var result__10118__auto__ = switch__10115__auto__.call(null,state_10366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10118__auto__;
}
break;
}
}catch (e10387){if((e10387 instanceof Object)){
var ex__10119__auto__ = e10387;
var statearr_10388_10409 = state_10366;
(statearr_10388_10409[(5)] = ex__10119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10410 = state_10366;
state_10366 = G__10410;
continue;
} else {
return ret_value__10117__auto__;
}
break;
}
});
cljs$core$async$state_machine__10116__auto__ = function(state_10366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10116__auto____1.call(this,state_10366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10116__auto____0;
cljs$core$async$state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10116__auto____1;
return cljs$core$async$state_machine__10116__auto__;
})()
;})(switch__10115__auto__,c__10227__auto___10394))
})();
var state__10229__auto__ = (function (){var statearr_10389 = f__10228__auto__.call(null);
(statearr_10389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10227__auto___10394);

return statearr_10389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10229__auto__);
});})(c__10227__auto___10394))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__10598){
var vec__10599 = p__10598;
var v = cljs.core.nth.call(null,vec__10599,(0),null);
var p = cljs.core.nth.call(null,vec__10599,(1),null);
var job = vec__10599;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10227__auto___10785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10227__auto___10785,res,vec__10599,v,p,job,jobs,results){
return (function (){
var f__10228__auto__ = (function (){var switch__10115__auto__ = ((function (c__10227__auto___10785,res,vec__10599,v,p,job,jobs,results){
return (function (state_10606){
var state_val_10607 = (state_10606[(1)]);
if((state_val_10607 === (1))){
var state_10606__$1 = state_10606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10606__$1,(2),res,v);
} else {
if((state_val_10607 === (2))){
var inst_10603 = (state_10606[(2)]);
var inst_10604 = cljs.core.async.close_BANG_.call(null,res);
var state_10606__$1 = (function (){var statearr_10608 = state_10606;
(statearr_10608[(7)] = inst_10603);

return statearr_10608;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10606__$1,inst_10604);
} else {
return null;
}
}
});})(c__10227__auto___10785,res,vec__10599,v,p,job,jobs,results))
;
return ((function (switch__10115__auto__,c__10227__auto___10785,res,vec__10599,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10116__auto____0 = (function (){
var statearr_10612 = [null,null,null,null,null,null,null,null];
(statearr_10612[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10116__auto__);

(statearr_10612[(1)] = (1));

return statearr_10612;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10116__auto____1 = (function (state_10606){
while(true){
var ret_value__10117__auto__ = (function (){try{while(true){
var result__10118__auto__ = switch__10115__auto__.call(null,state_10606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10118__auto__;
}
break;
}
}catch (e10613){if((e10613 instanceof Object)){
var ex__10119__auto__ = e10613;
var statearr_10614_10786 = state_10606;
(statearr_10614_10786[(5)] = ex__10119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10787 = state_10606;
state_10606 = G__10787;
continue;
} else {
return ret_value__10117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10116__auto__ = function(state_10606){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10116__auto____1.call(this,state_10606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10116__auto__;
})()
;})(switch__10115__auto__,c__10227__auto___10785,res,vec__10599,v,p,job,jobs,results))
})();
var state__10229__auto__ = (function (){var statearr_10615 = f__10228__auto__.call(null);
(statearr_10615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10227__auto___10785);

return statearr_10615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10229__auto__);
});})(c__10227__auto___10785,res,vec__10599,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__10616){
var vec__10617 = p__10616;
var v = cljs.core.nth.call(null,vec__10617,(0),null);
var p = cljs.core.nth.call(null,vec__10617,(1),null);
var job = vec__10617;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__7461__auto___10788 = n;
var __10789 = (0);
while(true){
if((__10789 < n__7461__auto___10788)){
var G__10620_10790 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__10620_10790) {
case "compute":
var c__10227__auto___10792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10789,c__10227__auto___10792,G__10620_10790,n__7461__auto___10788,jobs,results,process,async){
return (function (){
var f__10228__auto__ = (function (){var switch__10115__auto__ = ((function (__10789,c__10227__auto___10792,G__10620_10790,n__7461__auto___10788,jobs,results,process,async){
return (function (state_10633){
var state_val_10634 = (state_10633[(1)]);
if((state_val_10634 === (1))){
var state_10633__$1 = state_10633;
var statearr_10635_10793 = state_10633__$1;
(statearr_10635_10793[(2)] = null);

(statearr_10635_10793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10634 === (2))){
var state_10633__$1 = state_10633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10633__$1,(4),jobs);
} else {
if((state_val_10634 === (3))){
var inst_10631 = (state_10633[(2)]);
var state_10633__$1 = state_10633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10633__$1,inst_10631);
} else {
if((state_val_10634 === (4))){
var inst_10623 = (state_10633[(2)]);
var inst_10624 = process.call(null,inst_10623);
var state_10633__$1 = state_10633;
if(cljs.core.truth_(inst_10624)){
var statearr_10636_10794 = state_10633__$1;
(statearr_10636_10794[(1)] = (5));

} else {
var statearr_10637_10795 = state_10633__$1;
(statearr_10637_10795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10634 === (5))){
var state_10633__$1 = state_10633;
var statearr_10638_10796 = state_10633__$1;
(statearr_10638_10796[(2)] = null);

(statearr_10638_10796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10634 === (6))){
var state_10633__$1 = state_10633;
var statearr_10639_10797 = state_10633__$1;
(statearr_10639_10797[(2)] = null);

(statearr_10639_10797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10634 === (7))){
var inst_10629 = (state_10633[(2)]);
var state_10633__$1 = state_10633;
var statearr_10640_10798 = state_10633__$1;
(statearr_10640_10798[(2)] = inst_10629);

(statearr_10640_10798[(1)] = (3));


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
});})(__10789,c__10227__auto___10792,G__10620_10790,n__7461__auto___10788,jobs,results,process,async))
;
return ((function (__10789,switch__10115__auto__,c__10227__auto___10792,G__10620_10790,n__7461__auto___10788,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10116__auto____0 = (function (){
var statearr_10644 = [null,null,null,null,null,null,null];
(statearr_10644[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10116__auto__);

(statearr_10644[(1)] = (1));

return statearr_10644;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10116__auto____1 = (function (state_10633){
while(true){
var ret_value__10117__auto__ = (function (){try{while(true){
var result__10118__auto__ = switch__10115__auto__.call(null,state_10633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10118__auto__;
}
break;
}
}catch (e10645){if((e10645 instanceof Object)){
var ex__10119__auto__ = e10645;
var statearr_10646_10799 = state_10633;
(statearr_10646_10799[(5)] = ex__10119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10800 = state_10633;
state_10633 = G__10800;
continue;
} else {
return ret_value__10117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10116__auto__ = function(state_10633){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10116__auto____1.call(this,state_10633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10116__auto__;
})()
;})(__10789,switch__10115__auto__,c__10227__auto___10792,G__10620_10790,n__7461__auto___10788,jobs,results,process,async))
})();
var state__10229__auto__ = (function (){var statearr_10647 = f__10228__auto__.call(null);
(statearr_10647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10227__auto___10792);

return statearr_10647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10229__auto__);
});})(__10789,c__10227__auto___10792,G__10620_10790,n__7461__auto___10788,jobs,results,process,async))
);


break;
case "async":
var c__10227__auto___10801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10789,c__10227__auto___10801,G__10620_10790,n__7461__auto___10788,jobs,results,process,async){
return (function (){
var f__10228__auto__ = (function (){var switch__10115__auto__ = ((function (__10789,c__10227__auto___10801,G__10620_10790,n__7461__auto___10788,jobs,results,process,async){
return (function (state_10660){
var state_val_10661 = (state_10660[(1)]);
if((state_val_10661 === (1))){
var state_10660__$1 = state_10660;
var statearr_10662_10802 = state_10660__$1;
(statearr_10662_10802[(2)] = null);

(statearr_10662_10802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10661 === (2))){
var state_10660__$1 = state_10660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10660__$1,(4),jobs);
} else {
if((state_val_10661 === (3))){
var inst_10658 = (state_10660[(2)]);
var state_10660__$1 = state_10660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10660__$1,inst_10658);
} else {
if((state_val_10661 === (4))){
var inst_10650 = (state_10660[(2)]);
var inst_10651 = async.call(null,inst_10650);
var state_10660__$1 = state_10660;
if(cljs.core.truth_(inst_10651)){
var statearr_10663_10803 = state_10660__$1;
(statearr_10663_10803[(1)] = (5));

} else {
var statearr_10664_10804 = state_10660__$1;
(statearr_10664_10804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10661 === (5))){
var state_10660__$1 = state_10660;
var statearr_10665_10805 = state_10660__$1;
(statearr_10665_10805[(2)] = null);

(statearr_10665_10805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10661 === (6))){
var state_10660__$1 = state_10660;
var statearr_10666_10806 = state_10660__$1;
(statearr_10666_10806[(2)] = null);

(statearr_10666_10806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10661 === (7))){
var inst_10656 = (state_10660[(2)]);
var state_10660__$1 = state_10660;
var statearr_10667_10807 = state_10660__$1;
(statearr_10667_10807[(2)] = inst_10656);

(statearr_10667_10807[(1)] = (3));


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
});})(__10789,c__10227__auto___10801,G__10620_10790,n__7461__auto___10788,jobs,results,process,async))
;
return ((function (__10789,switch__10115__auto__,c__10227__auto___10801,G__10620_10790,n__7461__auto___10788,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10116__auto____0 = (function (){
var statearr_10671 = [null,null,null,null,null,null,null];
(statearr_10671[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10116__auto__);

(statearr_10671[(1)] = (1));

return statearr_10671;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10116__auto____1 = (function (state_10660){
while(true){
var ret_value__10117__auto__ = (function (){try{while(true){
var result__10118__auto__ = switch__10115__auto__.call(null,state_10660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10118__auto__;
}
break;
}
}catch (e10672){if((e10672 instanceof Object)){
var ex__10119__auto__ = e10672;
var statearr_10673_10808 = state_10660;
(statearr_10673_10808[(5)] = ex__10119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10809 = state_10660;
state_10660 = G__10809;
continue;
} else {
return ret_value__10117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10116__auto__ = function(state_10660){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10116__auto____1.call(this,state_10660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10116__auto__;
})()
;})(__10789,switch__10115__auto__,c__10227__auto___10801,G__10620_10790,n__7461__auto___10788,jobs,results,process,async))
})();
var state__10229__auto__ = (function (){var statearr_10674 = f__10228__auto__.call(null);
(statearr_10674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10227__auto___10801);

return statearr_10674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10229__auto__);
});})(__10789,c__10227__auto___10801,G__10620_10790,n__7461__auto___10788,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__10810 = (__10789 + (1));
__10789 = G__10810;
continue;
} else {
}
break;
}

var c__10227__auto___10811 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10227__auto___10811,jobs,results,process,async){
return (function (){
var f__10228__auto__ = (function (){var switch__10115__auto__ = ((function (c__10227__auto___10811,jobs,results,process,async){
return (function (state_10696){
var state_val_10697 = (state_10696[(1)]);
if((state_val_10697 === (1))){
var state_10696__$1 = state_10696;
var statearr_10698_10812 = state_10696__$1;
(statearr_10698_10812[(2)] = null);

(statearr_10698_10812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10697 === (2))){
var state_10696__$1 = state_10696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10696__$1,(4),from);
} else {
if((state_val_10697 === (3))){
var inst_10694 = (state_10696[(2)]);
var state_10696__$1 = state_10696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10696__$1,inst_10694);
} else {
if((state_val_10697 === (4))){
var inst_10677 = (state_10696[(7)]);
var inst_10677__$1 = (state_10696[(2)]);
var inst_10678 = (inst_10677__$1 == null);
var state_10696__$1 = (function (){var statearr_10699 = state_10696;
(statearr_10699[(7)] = inst_10677__$1);

return statearr_10699;
})();
if(cljs.core.truth_(inst_10678)){
var statearr_10700_10813 = state_10696__$1;
(statearr_10700_10813[(1)] = (5));

} else {
var statearr_10701_10814 = state_10696__$1;
(statearr_10701_10814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10697 === (5))){
var inst_10680 = cljs.core.async.close_BANG_.call(null,jobs);
var state_10696__$1 = state_10696;
var statearr_10702_10815 = state_10696__$1;
(statearr_10702_10815[(2)] = inst_10680);

(statearr_10702_10815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10697 === (6))){
var inst_10682 = (state_10696[(8)]);
var inst_10677 = (state_10696[(7)]);
var inst_10682__$1 = cljs.core.async.chan.call(null,(1));
var inst_10683 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10684 = [inst_10677,inst_10682__$1];
var inst_10685 = (new cljs.core.PersistentVector(null,2,(5),inst_10683,inst_10684,null));
var state_10696__$1 = (function (){var statearr_10703 = state_10696;
(statearr_10703[(8)] = inst_10682__$1);

return statearr_10703;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10696__$1,(8),jobs,inst_10685);
} else {
if((state_val_10697 === (7))){
var inst_10692 = (state_10696[(2)]);
var state_10696__$1 = state_10696;
var statearr_10704_10816 = state_10696__$1;
(statearr_10704_10816[(2)] = inst_10692);

(statearr_10704_10816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10697 === (8))){
var inst_10682 = (state_10696[(8)]);
var inst_10687 = (state_10696[(2)]);
var state_10696__$1 = (function (){var statearr_10705 = state_10696;
(statearr_10705[(9)] = inst_10687);

return statearr_10705;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10696__$1,(9),results,inst_10682);
} else {
if((state_val_10697 === (9))){
var inst_10689 = (state_10696[(2)]);
var state_10696__$1 = (function (){var statearr_10706 = state_10696;
(statearr_10706[(10)] = inst_10689);

return statearr_10706;
})();
var statearr_10707_10817 = state_10696__$1;
(statearr_10707_10817[(2)] = null);

(statearr_10707_10817[(1)] = (2));


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
});})(c__10227__auto___10811,jobs,results,process,async))
;
return ((function (switch__10115__auto__,c__10227__auto___10811,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10116__auto____0 = (function (){
var statearr_10711 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10711[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10116__auto__);

(statearr_10711[(1)] = (1));

return statearr_10711;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10116__auto____1 = (function (state_10696){
while(true){
var ret_value__10117__auto__ = (function (){try{while(true){
var result__10118__auto__ = switch__10115__auto__.call(null,state_10696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10118__auto__;
}
break;
}
}catch (e10712){if((e10712 instanceof Object)){
var ex__10119__auto__ = e10712;
var statearr_10713_10818 = state_10696;
(statearr_10713_10818[(5)] = ex__10119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10819 = state_10696;
state_10696 = G__10819;
continue;
} else {
return ret_value__10117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10116__auto__ = function(state_10696){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10116__auto____1.call(this,state_10696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10116__auto__;
})()
;})(switch__10115__auto__,c__10227__auto___10811,jobs,results,process,async))
})();
var state__10229__auto__ = (function (){var statearr_10714 = f__10228__auto__.call(null);
(statearr_10714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10227__auto___10811);

return statearr_10714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10229__auto__);
});})(c__10227__auto___10811,jobs,results,process,async))
);


var c__10227__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10227__auto__,jobs,results,process,async){
return (function (){
var f__10228__auto__ = (function (){var switch__10115__auto__ = ((function (c__10227__auto__,jobs,results,process,async){
return (function (state_10752){
var state_val_10753 = (state_10752[(1)]);
if((state_val_10753 === (7))){
var inst_10748 = (state_10752[(2)]);
var state_10752__$1 = state_10752;
var statearr_10754_10820 = state_10752__$1;
(statearr_10754_10820[(2)] = inst_10748);

(statearr_10754_10820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10753 === (20))){
var state_10752__$1 = state_10752;
var statearr_10755_10821 = state_10752__$1;
(statearr_10755_10821[(2)] = null);

(statearr_10755_10821[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10753 === (1))){
var state_10752__$1 = state_10752;
var statearr_10756_10822 = state_10752__$1;
(statearr_10756_10822[(2)] = null);

(statearr_10756_10822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10753 === (4))){
var inst_10717 = (state_10752[(7)]);
var inst_10717__$1 = (state_10752[(2)]);
var inst_10718 = (inst_10717__$1 == null);
var state_10752__$1 = (function (){var statearr_10757 = state_10752;
(statearr_10757[(7)] = inst_10717__$1);

return statearr_10757;
})();
if(cljs.core.truth_(inst_10718)){
var statearr_10758_10823 = state_10752__$1;
(statearr_10758_10823[(1)] = (5));

} else {
var statearr_10759_10824 = state_10752__$1;
(statearr_10759_10824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10753 === (15))){
var inst_10730 = (state_10752[(8)]);
var state_10752__$1 = state_10752;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10752__$1,(18),to,inst_10730);
} else {
if((state_val_10753 === (21))){
var inst_10743 = (state_10752[(2)]);
var state_10752__$1 = state_10752;
var statearr_10760_10825 = state_10752__$1;
(statearr_10760_10825[(2)] = inst_10743);

(statearr_10760_10825[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10753 === (13))){
var inst_10745 = (state_10752[(2)]);
var state_10752__$1 = (function (){var statearr_10761 = state_10752;
(statearr_10761[(9)] = inst_10745);

return statearr_10761;
})();
var statearr_10762_10826 = state_10752__$1;
(statearr_10762_10826[(2)] = null);

(statearr_10762_10826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10753 === (6))){
var inst_10717 = (state_10752[(7)]);
var state_10752__$1 = state_10752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10752__$1,(11),inst_10717);
} else {
if((state_val_10753 === (17))){
var inst_10738 = (state_10752[(2)]);
var state_10752__$1 = state_10752;
if(cljs.core.truth_(inst_10738)){
var statearr_10763_10827 = state_10752__$1;
(statearr_10763_10827[(1)] = (19));

} else {
var statearr_10764_10828 = state_10752__$1;
(statearr_10764_10828[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10753 === (3))){
var inst_10750 = (state_10752[(2)]);
var state_10752__$1 = state_10752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10752__$1,inst_10750);
} else {
if((state_val_10753 === (12))){
var inst_10727 = (state_10752[(10)]);
var state_10752__$1 = state_10752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10752__$1,(14),inst_10727);
} else {
if((state_val_10753 === (2))){
var state_10752__$1 = state_10752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10752__$1,(4),results);
} else {
if((state_val_10753 === (19))){
var state_10752__$1 = state_10752;
var statearr_10765_10829 = state_10752__$1;
(statearr_10765_10829[(2)] = null);

(statearr_10765_10829[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10753 === (11))){
var inst_10727 = (state_10752[(2)]);
var state_10752__$1 = (function (){var statearr_10766 = state_10752;
(statearr_10766[(10)] = inst_10727);

return statearr_10766;
})();
var statearr_10767_10830 = state_10752__$1;
(statearr_10767_10830[(2)] = null);

(statearr_10767_10830[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10753 === (9))){
var state_10752__$1 = state_10752;
var statearr_10768_10831 = state_10752__$1;
(statearr_10768_10831[(2)] = null);

(statearr_10768_10831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10753 === (5))){
var state_10752__$1 = state_10752;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10769_10832 = state_10752__$1;
(statearr_10769_10832[(1)] = (8));

} else {
var statearr_10770_10833 = state_10752__$1;
(statearr_10770_10833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10753 === (14))){
var inst_10730 = (state_10752[(8)]);
var inst_10732 = (state_10752[(11)]);
var inst_10730__$1 = (state_10752[(2)]);
var inst_10731 = (inst_10730__$1 == null);
var inst_10732__$1 = cljs.core.not.call(null,inst_10731);
var state_10752__$1 = (function (){var statearr_10771 = state_10752;
(statearr_10771[(8)] = inst_10730__$1);

(statearr_10771[(11)] = inst_10732__$1);

return statearr_10771;
})();
if(inst_10732__$1){
var statearr_10772_10834 = state_10752__$1;
(statearr_10772_10834[(1)] = (15));

} else {
var statearr_10773_10835 = state_10752__$1;
(statearr_10773_10835[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10753 === (16))){
var inst_10732 = (state_10752[(11)]);
var state_10752__$1 = state_10752;
var statearr_10774_10836 = state_10752__$1;
(statearr_10774_10836[(2)] = inst_10732);

(statearr_10774_10836[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10753 === (10))){
var inst_10724 = (state_10752[(2)]);
var state_10752__$1 = state_10752;
var statearr_10775_10837 = state_10752__$1;
(statearr_10775_10837[(2)] = inst_10724);

(statearr_10775_10837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10753 === (18))){
var inst_10735 = (state_10752[(2)]);
var state_10752__$1 = state_10752;
var statearr_10776_10838 = state_10752__$1;
(statearr_10776_10838[(2)] = inst_10735);

(statearr_10776_10838[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10753 === (8))){
var inst_10721 = cljs.core.async.close_BANG_.call(null,to);
var state_10752__$1 = state_10752;
var statearr_10777_10839 = state_10752__$1;
(statearr_10777_10839[(2)] = inst_10721);

(statearr_10777_10839[(1)] = (10));


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
});})(c__10227__auto__,jobs,results,process,async))
;
return ((function (switch__10115__auto__,c__10227__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10116__auto____0 = (function (){
var statearr_10781 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10781[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10116__auto__);

(statearr_10781[(1)] = (1));

return statearr_10781;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10116__auto____1 = (function (state_10752){
while(true){
var ret_value__10117__auto__ = (function (){try{while(true){
var result__10118__auto__ = switch__10115__auto__.call(null,state_10752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10118__auto__;
}
break;
}
}catch (e10782){if((e10782 instanceof Object)){
var ex__10119__auto__ = e10782;
var statearr_10783_10840 = state_10752;
(statearr_10783_10840[(5)] = ex__10119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10841 = state_10752;
state_10752 = G__10841;
continue;
} else {
return ret_value__10117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10116__auto__ = function(state_10752){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10116__auto____1.call(this,state_10752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10116__auto__;
})()
;})(switch__10115__auto__,c__10227__auto__,jobs,results,process,async))
})();
var state__10229__auto__ = (function (){var statearr_10784 = f__10228__auto__.call(null);
(statearr_10784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10227__auto__);

return statearr_10784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10229__auto__);
});})(c__10227__auto__,jobs,results,process,async))
);

return c__10227__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args10842 = [];
var len__7651__auto___10845 = arguments.length;
var i__7652__auto___10846 = (0);
while(true){
if((i__7652__auto___10846 < len__7651__auto___10845)){
args10842.push((arguments[i__7652__auto___10846]));

var G__10847 = (i__7652__auto___10846 + (1));
i__7652__auto___10846 = G__10847;
continue;
} else {
}
break;
}

var G__10844 = args10842.length;
switch (G__10844) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10842.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var args10849 = [];
var len__7651__auto___10852 = arguments.length;
var i__7652__auto___10853 = (0);
while(true){
if((i__7652__auto___10853 < len__7651__auto___10852)){
args10849.push((arguments[i__7652__auto___10853]));

var G__10854 = (i__7652__auto___10853 + (1));
i__7652__auto___10853 = G__10854;
continue;
} else {
}
break;
}

var G__10851 = args10849.length;
switch (G__10851) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10849.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var args10856 = [];
var len__7651__auto___10909 = arguments.length;
var i__7652__auto___10910 = (0);
while(true){
if((i__7652__auto___10910 < len__7651__auto___10909)){
args10856.push((arguments[i__7652__auto___10910]));

var G__10911 = (i__7652__auto___10910 + (1));
i__7652__auto___10910 = G__10911;
continue;
} else {
}
break;
}

var G__10858 = args10856.length;
switch (G__10858) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10856.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10227__auto___10913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10227__auto___10913,tc,fc){
return (function (){
var f__10228__auto__ = (function (){var switch__10115__auto__ = ((function (c__10227__auto___10913,tc,fc){
return (function (state_10884){
var state_val_10885 = (state_10884[(1)]);
if((state_val_10885 === (7))){
var inst_10880 = (state_10884[(2)]);
var state_10884__$1 = state_10884;
var statearr_10886_10914 = state_10884__$1;
(statearr_10886_10914[(2)] = inst_10880);

(statearr_10886_10914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10885 === (1))){
var state_10884__$1 = state_10884;
var statearr_10887_10915 = state_10884__$1;
(statearr_10887_10915[(2)] = null);

(statearr_10887_10915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10885 === (4))){
var inst_10861 = (state_10884[(7)]);
var inst_10861__$1 = (state_10884[(2)]);
var inst_10862 = (inst_10861__$1 == null);
var state_10884__$1 = (function (){var statearr_10888 = state_10884;
(statearr_10888[(7)] = inst_10861__$1);

return statearr_10888;
})();
if(cljs.core.truth_(inst_10862)){
var statearr_10889_10916 = state_10884__$1;
(statearr_10889_10916[(1)] = (5));

} else {
var statearr_10890_10917 = state_10884__$1;
(statearr_10890_10917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10885 === (13))){
var state_10884__$1 = state_10884;
var statearr_10891_10918 = state_10884__$1;
(statearr_10891_10918[(2)] = null);

(statearr_10891_10918[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10885 === (6))){
var inst_10861 = (state_10884[(7)]);
var inst_10867 = p.call(null,inst_10861);
var state_10884__$1 = state_10884;
if(cljs.core.truth_(inst_10867)){
var statearr_10892_10919 = state_10884__$1;
(statearr_10892_10919[(1)] = (9));

} else {
var statearr_10893_10920 = state_10884__$1;
(statearr_10893_10920[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10885 === (3))){
var inst_10882 = (state_10884[(2)]);
var state_10884__$1 = state_10884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10884__$1,inst_10882);
} else {
if((state_val_10885 === (12))){
var state_10884__$1 = state_10884;
var statearr_10894_10921 = state_10884__$1;
(statearr_10894_10921[(2)] = null);

(statearr_10894_10921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10885 === (2))){
var state_10884__$1 = state_10884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10884__$1,(4),ch);
} else {
if((state_val_10885 === (11))){
var inst_10861 = (state_10884[(7)]);
var inst_10871 = (state_10884[(2)]);
var state_10884__$1 = state_10884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10884__$1,(8),inst_10871,inst_10861);
} else {
if((state_val_10885 === (9))){
var state_10884__$1 = state_10884;
var statearr_10895_10922 = state_10884__$1;
(statearr_10895_10922[(2)] = tc);

(statearr_10895_10922[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10885 === (5))){
var inst_10864 = cljs.core.async.close_BANG_.call(null,tc);
var inst_10865 = cljs.core.async.close_BANG_.call(null,fc);
var state_10884__$1 = (function (){var statearr_10896 = state_10884;
(statearr_10896[(8)] = inst_10864);

return statearr_10896;
})();
var statearr_10897_10923 = state_10884__$1;
(statearr_10897_10923[(2)] = inst_10865);

(statearr_10897_10923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10885 === (14))){
var inst_10878 = (state_10884[(2)]);
var state_10884__$1 = state_10884;
var statearr_10898_10924 = state_10884__$1;
(statearr_10898_10924[(2)] = inst_10878);

(statearr_10898_10924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10885 === (10))){
var state_10884__$1 = state_10884;
var statearr_10899_10925 = state_10884__$1;
(statearr_10899_10925[(2)] = fc);

(statearr_10899_10925[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10885 === (8))){
var inst_10873 = (state_10884[(2)]);
var state_10884__$1 = state_10884;
if(cljs.core.truth_(inst_10873)){
var statearr_10900_10926 = state_10884__$1;
(statearr_10900_10926[(1)] = (12));

} else {
var statearr_10901_10927 = state_10884__$1;
(statearr_10901_10927[(1)] = (13));

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
});})(c__10227__auto___10913,tc,fc))
;
return ((function (switch__10115__auto__,c__10227__auto___10913,tc,fc){
return (function() {
var cljs$core$async$state_machine__10116__auto__ = null;
var cljs$core$async$state_machine__10116__auto____0 = (function (){
var statearr_10905 = [null,null,null,null,null,null,null,null,null];
(statearr_10905[(0)] = cljs$core$async$state_machine__10116__auto__);

(statearr_10905[(1)] = (1));

return statearr_10905;
});
var cljs$core$async$state_machine__10116__auto____1 = (function (state_10884){
while(true){
var ret_value__10117__auto__ = (function (){try{while(true){
var result__10118__auto__ = switch__10115__auto__.call(null,state_10884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10118__auto__;
}
break;
}
}catch (e10906){if((e10906 instanceof Object)){
var ex__10119__auto__ = e10906;
var statearr_10907_10928 = state_10884;
(statearr_10907_10928[(5)] = ex__10119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10929 = state_10884;
state_10884 = G__10929;
continue;
} else {
return ret_value__10117__auto__;
}
break;
}
});
cljs$core$async$state_machine__10116__auto__ = function(state_10884){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10116__auto____1.call(this,state_10884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10116__auto____0;
cljs$core$async$state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10116__auto____1;
return cljs$core$async$state_machine__10116__auto__;
})()
;})(switch__10115__auto__,c__10227__auto___10913,tc,fc))
})();
var state__10229__auto__ = (function (){var statearr_10908 = f__10228__auto__.call(null);
(statearr_10908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10227__auto___10913);

return statearr_10908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10229__auto__);
});})(c__10227__auto___10913,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__10227__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10227__auto__){
return (function (){
var f__10228__auto__ = (function (){var switch__10115__auto__ = ((function (c__10227__auto__){
return (function (state_10993){
var state_val_10994 = (state_10993[(1)]);
if((state_val_10994 === (7))){
var inst_10989 = (state_10993[(2)]);
var state_10993__$1 = state_10993;
var statearr_10995_11016 = state_10993__$1;
(statearr_10995_11016[(2)] = inst_10989);

(statearr_10995_11016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10994 === (1))){
var inst_10973 = init;
var state_10993__$1 = (function (){var statearr_10996 = state_10993;
(statearr_10996[(7)] = inst_10973);

return statearr_10996;
})();
var statearr_10997_11017 = state_10993__$1;
(statearr_10997_11017[(2)] = null);

(statearr_10997_11017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10994 === (4))){
var inst_10976 = (state_10993[(8)]);
var inst_10976__$1 = (state_10993[(2)]);
var inst_10977 = (inst_10976__$1 == null);
var state_10993__$1 = (function (){var statearr_10998 = state_10993;
(statearr_10998[(8)] = inst_10976__$1);

return statearr_10998;
})();
if(cljs.core.truth_(inst_10977)){
var statearr_10999_11018 = state_10993__$1;
(statearr_10999_11018[(1)] = (5));

} else {
var statearr_11000_11019 = state_10993__$1;
(statearr_11000_11019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10994 === (6))){
var inst_10980 = (state_10993[(9)]);
var inst_10973 = (state_10993[(7)]);
var inst_10976 = (state_10993[(8)]);
var inst_10980__$1 = f.call(null,inst_10973,inst_10976);
var inst_10981 = cljs.core.reduced_QMARK_.call(null,inst_10980__$1);
var state_10993__$1 = (function (){var statearr_11001 = state_10993;
(statearr_11001[(9)] = inst_10980__$1);

return statearr_11001;
})();
if(inst_10981){
var statearr_11002_11020 = state_10993__$1;
(statearr_11002_11020[(1)] = (8));

} else {
var statearr_11003_11021 = state_10993__$1;
(statearr_11003_11021[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10994 === (3))){
var inst_10991 = (state_10993[(2)]);
var state_10993__$1 = state_10993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10993__$1,inst_10991);
} else {
if((state_val_10994 === (2))){
var state_10993__$1 = state_10993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10993__$1,(4),ch);
} else {
if((state_val_10994 === (9))){
var inst_10980 = (state_10993[(9)]);
var inst_10973 = inst_10980;
var state_10993__$1 = (function (){var statearr_11004 = state_10993;
(statearr_11004[(7)] = inst_10973);

return statearr_11004;
})();
var statearr_11005_11022 = state_10993__$1;
(statearr_11005_11022[(2)] = null);

(statearr_11005_11022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10994 === (5))){
var inst_10973 = (state_10993[(7)]);
var state_10993__$1 = state_10993;
var statearr_11006_11023 = state_10993__$1;
(statearr_11006_11023[(2)] = inst_10973);

(statearr_11006_11023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10994 === (10))){
var inst_10987 = (state_10993[(2)]);
var state_10993__$1 = state_10993;
var statearr_11007_11024 = state_10993__$1;
(statearr_11007_11024[(2)] = inst_10987);

(statearr_11007_11024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10994 === (8))){
var inst_10980 = (state_10993[(9)]);
var inst_10983 = cljs.core.deref.call(null,inst_10980);
var state_10993__$1 = state_10993;
var statearr_11008_11025 = state_10993__$1;
(statearr_11008_11025[(2)] = inst_10983);

(statearr_11008_11025[(1)] = (10));


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
});})(c__10227__auto__))
;
return ((function (switch__10115__auto__,c__10227__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10116__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10116__auto____0 = (function (){
var statearr_11012 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11012[(0)] = cljs$core$async$reduce_$_state_machine__10116__auto__);

(statearr_11012[(1)] = (1));

return statearr_11012;
});
var cljs$core$async$reduce_$_state_machine__10116__auto____1 = (function (state_10993){
while(true){
var ret_value__10117__auto__ = (function (){try{while(true){
var result__10118__auto__ = switch__10115__auto__.call(null,state_10993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10118__auto__;
}
break;
}
}catch (e11013){if((e11013 instanceof Object)){
var ex__10119__auto__ = e11013;
var statearr_11014_11026 = state_10993;
(statearr_11014_11026[(5)] = ex__10119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11027 = state_10993;
state_10993 = G__11027;
continue;
} else {
return ret_value__10117__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10116__auto__ = function(state_10993){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10116__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10116__auto____1.call(this,state_10993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10116__auto____0;
cljs$core$async$reduce_$_state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10116__auto____1;
return cljs$core$async$reduce_$_state_machine__10116__auto__;
})()
;})(switch__10115__auto__,c__10227__auto__))
})();
var state__10229__auto__ = (function (){var statearr_11015 = f__10228__auto__.call(null);
(statearr_11015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10227__auto__);

return statearr_11015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10229__auto__);
});})(c__10227__auto__))
);

return c__10227__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__10227__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10227__auto__,f__$1){
return (function (){
var f__10228__auto__ = (function (){var switch__10115__auto__ = ((function (c__10227__auto__,f__$1){
return (function (state_11047){
var state_val_11048 = (state_11047[(1)]);
if((state_val_11048 === (1))){
var inst_11042 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_11047__$1 = state_11047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11047__$1,(2),inst_11042);
} else {
if((state_val_11048 === (2))){
var inst_11044 = (state_11047[(2)]);
var inst_11045 = f__$1.call(null,inst_11044);
var state_11047__$1 = state_11047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11047__$1,inst_11045);
} else {
return null;
}
}
});})(c__10227__auto__,f__$1))
;
return ((function (switch__10115__auto__,c__10227__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__10116__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10116__auto____0 = (function (){
var statearr_11052 = [null,null,null,null,null,null,null];
(statearr_11052[(0)] = cljs$core$async$transduce_$_state_machine__10116__auto__);

(statearr_11052[(1)] = (1));

return statearr_11052;
});
var cljs$core$async$transduce_$_state_machine__10116__auto____1 = (function (state_11047){
while(true){
var ret_value__10117__auto__ = (function (){try{while(true){
var result__10118__auto__ = switch__10115__auto__.call(null,state_11047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10118__auto__;
}
break;
}
}catch (e11053){if((e11053 instanceof Object)){
var ex__10119__auto__ = e11053;
var statearr_11054_11056 = state_11047;
(statearr_11054_11056[(5)] = ex__10119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11057 = state_11047;
state_11047 = G__11057;
continue;
} else {
return ret_value__10117__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10116__auto__ = function(state_11047){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10116__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10116__auto____1.call(this,state_11047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10116__auto____0;
cljs$core$async$transduce_$_state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10116__auto____1;
return cljs$core$async$transduce_$_state_machine__10116__auto__;
})()
;})(switch__10115__auto__,c__10227__auto__,f__$1))
})();
var state__10229__auto__ = (function (){var statearr_11055 = f__10228__auto__.call(null);
(statearr_11055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10227__auto__);

return statearr_11055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10229__auto__);
});})(c__10227__auto__,f__$1))
);

return c__10227__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args11058 = [];
var len__7651__auto___11110 = arguments.length;
var i__7652__auto___11111 = (0);
while(true){
if((i__7652__auto___11111 < len__7651__auto___11110)){
args11058.push((arguments[i__7652__auto___11111]));

var G__11112 = (i__7652__auto___11111 + (1));
i__7652__auto___11111 = G__11112;
continue;
} else {
}
break;
}

var G__11060 = args11058.length;
switch (G__11060) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11058.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10227__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10227__auto__){
return (function (){
var f__10228__auto__ = (function (){var switch__10115__auto__ = ((function (c__10227__auto__){
return (function (state_11085){
var state_val_11086 = (state_11085[(1)]);
if((state_val_11086 === (7))){
var inst_11067 = (state_11085[(2)]);
var state_11085__$1 = state_11085;
var statearr_11087_11114 = state_11085__$1;
(statearr_11087_11114[(2)] = inst_11067);

(statearr_11087_11114[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11086 === (1))){
var inst_11061 = cljs.core.seq.call(null,coll);
var inst_11062 = inst_11061;
var state_11085__$1 = (function (){var statearr_11088 = state_11085;
(statearr_11088[(7)] = inst_11062);

return statearr_11088;
})();
var statearr_11089_11115 = state_11085__$1;
(statearr_11089_11115[(2)] = null);

(statearr_11089_11115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11086 === (4))){
var inst_11062 = (state_11085[(7)]);
var inst_11065 = cljs.core.first.call(null,inst_11062);
var state_11085__$1 = state_11085;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11085__$1,(7),ch,inst_11065);
} else {
if((state_val_11086 === (13))){
var inst_11079 = (state_11085[(2)]);
var state_11085__$1 = state_11085;
var statearr_11090_11116 = state_11085__$1;
(statearr_11090_11116[(2)] = inst_11079);

(statearr_11090_11116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11086 === (6))){
var inst_11070 = (state_11085[(2)]);
var state_11085__$1 = state_11085;
if(cljs.core.truth_(inst_11070)){
var statearr_11091_11117 = state_11085__$1;
(statearr_11091_11117[(1)] = (8));

} else {
var statearr_11092_11118 = state_11085__$1;
(statearr_11092_11118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11086 === (3))){
var inst_11083 = (state_11085[(2)]);
var state_11085__$1 = state_11085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11085__$1,inst_11083);
} else {
if((state_val_11086 === (12))){
var state_11085__$1 = state_11085;
var statearr_11093_11119 = state_11085__$1;
(statearr_11093_11119[(2)] = null);

(statearr_11093_11119[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11086 === (2))){
var inst_11062 = (state_11085[(7)]);
var state_11085__$1 = state_11085;
if(cljs.core.truth_(inst_11062)){
var statearr_11094_11120 = state_11085__$1;
(statearr_11094_11120[(1)] = (4));

} else {
var statearr_11095_11121 = state_11085__$1;
(statearr_11095_11121[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11086 === (11))){
var inst_11076 = cljs.core.async.close_BANG_.call(null,ch);
var state_11085__$1 = state_11085;
var statearr_11096_11122 = state_11085__$1;
(statearr_11096_11122[(2)] = inst_11076);

(statearr_11096_11122[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11086 === (9))){
var state_11085__$1 = state_11085;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11097_11123 = state_11085__$1;
(statearr_11097_11123[(1)] = (11));

} else {
var statearr_11098_11124 = state_11085__$1;
(statearr_11098_11124[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11086 === (5))){
var inst_11062 = (state_11085[(7)]);
var state_11085__$1 = state_11085;
var statearr_11099_11125 = state_11085__$1;
(statearr_11099_11125[(2)] = inst_11062);

(statearr_11099_11125[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11086 === (10))){
var inst_11081 = (state_11085[(2)]);
var state_11085__$1 = state_11085;
var statearr_11100_11126 = state_11085__$1;
(statearr_11100_11126[(2)] = inst_11081);

(statearr_11100_11126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11086 === (8))){
var inst_11062 = (state_11085[(7)]);
var inst_11072 = cljs.core.next.call(null,inst_11062);
var inst_11062__$1 = inst_11072;
var state_11085__$1 = (function (){var statearr_11101 = state_11085;
(statearr_11101[(7)] = inst_11062__$1);

return statearr_11101;
})();
var statearr_11102_11127 = state_11085__$1;
(statearr_11102_11127[(2)] = null);

(statearr_11102_11127[(1)] = (2));


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
});})(c__10227__auto__))
;
return ((function (switch__10115__auto__,c__10227__auto__){
return (function() {
var cljs$core$async$state_machine__10116__auto__ = null;
var cljs$core$async$state_machine__10116__auto____0 = (function (){
var statearr_11106 = [null,null,null,null,null,null,null,null];
(statearr_11106[(0)] = cljs$core$async$state_machine__10116__auto__);

(statearr_11106[(1)] = (1));

return statearr_11106;
});
var cljs$core$async$state_machine__10116__auto____1 = (function (state_11085){
while(true){
var ret_value__10117__auto__ = (function (){try{while(true){
var result__10118__auto__ = switch__10115__auto__.call(null,state_11085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10118__auto__;
}
break;
}
}catch (e11107){if((e11107 instanceof Object)){
var ex__10119__auto__ = e11107;
var statearr_11108_11128 = state_11085;
(statearr_11108_11128[(5)] = ex__10119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11129 = state_11085;
state_11085 = G__11129;
continue;
} else {
return ret_value__10117__auto__;
}
break;
}
});
cljs$core$async$state_machine__10116__auto__ = function(state_11085){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10116__auto____1.call(this,state_11085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10116__auto____0;
cljs$core$async$state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10116__auto____1;
return cljs$core$async$state_machine__10116__auto__;
})()
;})(switch__10115__auto__,c__10227__auto__))
})();
var state__10229__auto__ = (function (){var statearr_11109 = f__10228__auto__.call(null);
(statearr_11109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10227__auto__);

return statearr_11109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10229__auto__);
});})(c__10227__auto__))
);

return c__10227__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7206__auto__ = (((_ == null))?null:_);
var m__7207__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,_);
} else {
var m__7207__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7206__auto__ = (((m == null))?null:m);
var m__7207__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__7207__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7206__auto__ = (((m == null))?null:m);
var m__7207__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,m,ch);
} else {
var m__7207__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7206__auto__ = (((m == null))?null:m);
var m__7207__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,m);
} else {
var m__7207__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async11355 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11355 = (function (ch,cs,meta11356){
this.ch = ch;
this.cs = cs;
this.meta11356 = meta11356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11357,meta11356__$1){
var self__ = this;
var _11357__$1 = this;
return (new cljs.core.async.t_cljs$core$async11355(self__.ch,self__.cs,meta11356__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async11355.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11357){
var self__ = this;
var _11357__$1 = this;
return self__.meta11356;
});})(cs))
;

cljs.core.async.t_cljs$core$async11355.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11355.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async11355.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11355.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11355.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11355.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11355.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11356","meta11356",537887136,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async11355.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11355.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11355";

cljs.core.async.t_cljs$core$async11355.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async11355");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async11355 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async11355(ch__$1,cs__$1,meta11356){
return (new cljs.core.async.t_cljs$core$async11355(ch__$1,cs__$1,meta11356));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async11355(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__10227__auto___11580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10227__auto___11580,cs,m,dchan,dctr,done){
return (function (){
var f__10228__auto__ = (function (){var switch__10115__auto__ = ((function (c__10227__auto___11580,cs,m,dchan,dctr,done){
return (function (state_11492){
var state_val_11493 = (state_11492[(1)]);
if((state_val_11493 === (7))){
var inst_11488 = (state_11492[(2)]);
var state_11492__$1 = state_11492;
var statearr_11494_11581 = state_11492__$1;
(statearr_11494_11581[(2)] = inst_11488);

(statearr_11494_11581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (20))){
var inst_11391 = (state_11492[(7)]);
var inst_11403 = cljs.core.first.call(null,inst_11391);
var inst_11404 = cljs.core.nth.call(null,inst_11403,(0),null);
var inst_11405 = cljs.core.nth.call(null,inst_11403,(1),null);
var state_11492__$1 = (function (){var statearr_11495 = state_11492;
(statearr_11495[(8)] = inst_11404);

return statearr_11495;
})();
if(cljs.core.truth_(inst_11405)){
var statearr_11496_11582 = state_11492__$1;
(statearr_11496_11582[(1)] = (22));

} else {
var statearr_11497_11583 = state_11492__$1;
(statearr_11497_11583[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (27))){
var inst_11435 = (state_11492[(9)]);
var inst_11433 = (state_11492[(10)]);
var inst_11360 = (state_11492[(11)]);
var inst_11440 = (state_11492[(12)]);
var inst_11440__$1 = cljs.core._nth.call(null,inst_11433,inst_11435);
var inst_11441 = cljs.core.async.put_BANG_.call(null,inst_11440__$1,inst_11360,done);
var state_11492__$1 = (function (){var statearr_11498 = state_11492;
(statearr_11498[(12)] = inst_11440__$1);

return statearr_11498;
})();
if(cljs.core.truth_(inst_11441)){
var statearr_11499_11584 = state_11492__$1;
(statearr_11499_11584[(1)] = (30));

} else {
var statearr_11500_11585 = state_11492__$1;
(statearr_11500_11585[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (1))){
var state_11492__$1 = state_11492;
var statearr_11501_11586 = state_11492__$1;
(statearr_11501_11586[(2)] = null);

(statearr_11501_11586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (24))){
var inst_11391 = (state_11492[(7)]);
var inst_11410 = (state_11492[(2)]);
var inst_11411 = cljs.core.next.call(null,inst_11391);
var inst_11369 = inst_11411;
var inst_11370 = null;
var inst_11371 = (0);
var inst_11372 = (0);
var state_11492__$1 = (function (){var statearr_11502 = state_11492;
(statearr_11502[(13)] = inst_11372);

(statearr_11502[(14)] = inst_11370);

(statearr_11502[(15)] = inst_11410);

(statearr_11502[(16)] = inst_11369);

(statearr_11502[(17)] = inst_11371);

return statearr_11502;
})();
var statearr_11503_11587 = state_11492__$1;
(statearr_11503_11587[(2)] = null);

(statearr_11503_11587[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (39))){
var state_11492__$1 = state_11492;
var statearr_11507_11588 = state_11492__$1;
(statearr_11507_11588[(2)] = null);

(statearr_11507_11588[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (4))){
var inst_11360 = (state_11492[(11)]);
var inst_11360__$1 = (state_11492[(2)]);
var inst_11361 = (inst_11360__$1 == null);
var state_11492__$1 = (function (){var statearr_11508 = state_11492;
(statearr_11508[(11)] = inst_11360__$1);

return statearr_11508;
})();
if(cljs.core.truth_(inst_11361)){
var statearr_11509_11589 = state_11492__$1;
(statearr_11509_11589[(1)] = (5));

} else {
var statearr_11510_11590 = state_11492__$1;
(statearr_11510_11590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (15))){
var inst_11372 = (state_11492[(13)]);
var inst_11370 = (state_11492[(14)]);
var inst_11369 = (state_11492[(16)]);
var inst_11371 = (state_11492[(17)]);
var inst_11387 = (state_11492[(2)]);
var inst_11388 = (inst_11372 + (1));
var tmp11504 = inst_11370;
var tmp11505 = inst_11369;
var tmp11506 = inst_11371;
var inst_11369__$1 = tmp11505;
var inst_11370__$1 = tmp11504;
var inst_11371__$1 = tmp11506;
var inst_11372__$1 = inst_11388;
var state_11492__$1 = (function (){var statearr_11511 = state_11492;
(statearr_11511[(13)] = inst_11372__$1);

(statearr_11511[(14)] = inst_11370__$1);

(statearr_11511[(16)] = inst_11369__$1);

(statearr_11511[(17)] = inst_11371__$1);

(statearr_11511[(18)] = inst_11387);

return statearr_11511;
})();
var statearr_11512_11591 = state_11492__$1;
(statearr_11512_11591[(2)] = null);

(statearr_11512_11591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (21))){
var inst_11414 = (state_11492[(2)]);
var state_11492__$1 = state_11492;
var statearr_11516_11592 = state_11492__$1;
(statearr_11516_11592[(2)] = inst_11414);

(statearr_11516_11592[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (31))){
var inst_11440 = (state_11492[(12)]);
var inst_11444 = done.call(null,null);
var inst_11445 = cljs.core.async.untap_STAR_.call(null,m,inst_11440);
var state_11492__$1 = (function (){var statearr_11517 = state_11492;
(statearr_11517[(19)] = inst_11444);

return statearr_11517;
})();
var statearr_11518_11593 = state_11492__$1;
(statearr_11518_11593[(2)] = inst_11445);

(statearr_11518_11593[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (32))){
var inst_11432 = (state_11492[(20)]);
var inst_11434 = (state_11492[(21)]);
var inst_11435 = (state_11492[(9)]);
var inst_11433 = (state_11492[(10)]);
var inst_11447 = (state_11492[(2)]);
var inst_11448 = (inst_11435 + (1));
var tmp11513 = inst_11432;
var tmp11514 = inst_11434;
var tmp11515 = inst_11433;
var inst_11432__$1 = tmp11513;
var inst_11433__$1 = tmp11515;
var inst_11434__$1 = tmp11514;
var inst_11435__$1 = inst_11448;
var state_11492__$1 = (function (){var statearr_11519 = state_11492;
(statearr_11519[(22)] = inst_11447);

(statearr_11519[(20)] = inst_11432__$1);

(statearr_11519[(21)] = inst_11434__$1);

(statearr_11519[(9)] = inst_11435__$1);

(statearr_11519[(10)] = inst_11433__$1);

return statearr_11519;
})();
var statearr_11520_11594 = state_11492__$1;
(statearr_11520_11594[(2)] = null);

(statearr_11520_11594[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (40))){
var inst_11460 = (state_11492[(23)]);
var inst_11464 = done.call(null,null);
var inst_11465 = cljs.core.async.untap_STAR_.call(null,m,inst_11460);
var state_11492__$1 = (function (){var statearr_11521 = state_11492;
(statearr_11521[(24)] = inst_11464);

return statearr_11521;
})();
var statearr_11522_11595 = state_11492__$1;
(statearr_11522_11595[(2)] = inst_11465);

(statearr_11522_11595[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (33))){
var inst_11451 = (state_11492[(25)]);
var inst_11453 = cljs.core.chunked_seq_QMARK_.call(null,inst_11451);
var state_11492__$1 = state_11492;
if(inst_11453){
var statearr_11523_11596 = state_11492__$1;
(statearr_11523_11596[(1)] = (36));

} else {
var statearr_11524_11597 = state_11492__$1;
(statearr_11524_11597[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (13))){
var inst_11381 = (state_11492[(26)]);
var inst_11384 = cljs.core.async.close_BANG_.call(null,inst_11381);
var state_11492__$1 = state_11492;
var statearr_11525_11598 = state_11492__$1;
(statearr_11525_11598[(2)] = inst_11384);

(statearr_11525_11598[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (22))){
var inst_11404 = (state_11492[(8)]);
var inst_11407 = cljs.core.async.close_BANG_.call(null,inst_11404);
var state_11492__$1 = state_11492;
var statearr_11526_11599 = state_11492__$1;
(statearr_11526_11599[(2)] = inst_11407);

(statearr_11526_11599[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (36))){
var inst_11451 = (state_11492[(25)]);
var inst_11455 = cljs.core.chunk_first.call(null,inst_11451);
var inst_11456 = cljs.core.chunk_rest.call(null,inst_11451);
var inst_11457 = cljs.core.count.call(null,inst_11455);
var inst_11432 = inst_11456;
var inst_11433 = inst_11455;
var inst_11434 = inst_11457;
var inst_11435 = (0);
var state_11492__$1 = (function (){var statearr_11527 = state_11492;
(statearr_11527[(20)] = inst_11432);

(statearr_11527[(21)] = inst_11434);

(statearr_11527[(9)] = inst_11435);

(statearr_11527[(10)] = inst_11433);

return statearr_11527;
})();
var statearr_11528_11600 = state_11492__$1;
(statearr_11528_11600[(2)] = null);

(statearr_11528_11600[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (41))){
var inst_11451 = (state_11492[(25)]);
var inst_11467 = (state_11492[(2)]);
var inst_11468 = cljs.core.next.call(null,inst_11451);
var inst_11432 = inst_11468;
var inst_11433 = null;
var inst_11434 = (0);
var inst_11435 = (0);
var state_11492__$1 = (function (){var statearr_11529 = state_11492;
(statearr_11529[(20)] = inst_11432);

(statearr_11529[(21)] = inst_11434);

(statearr_11529[(9)] = inst_11435);

(statearr_11529[(10)] = inst_11433);

(statearr_11529[(27)] = inst_11467);

return statearr_11529;
})();
var statearr_11530_11601 = state_11492__$1;
(statearr_11530_11601[(2)] = null);

(statearr_11530_11601[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (43))){
var state_11492__$1 = state_11492;
var statearr_11531_11602 = state_11492__$1;
(statearr_11531_11602[(2)] = null);

(statearr_11531_11602[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (29))){
var inst_11476 = (state_11492[(2)]);
var state_11492__$1 = state_11492;
var statearr_11532_11603 = state_11492__$1;
(statearr_11532_11603[(2)] = inst_11476);

(statearr_11532_11603[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (44))){
var inst_11485 = (state_11492[(2)]);
var state_11492__$1 = (function (){var statearr_11533 = state_11492;
(statearr_11533[(28)] = inst_11485);

return statearr_11533;
})();
var statearr_11534_11604 = state_11492__$1;
(statearr_11534_11604[(2)] = null);

(statearr_11534_11604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (6))){
var inst_11424 = (state_11492[(29)]);
var inst_11423 = cljs.core.deref.call(null,cs);
var inst_11424__$1 = cljs.core.keys.call(null,inst_11423);
var inst_11425 = cljs.core.count.call(null,inst_11424__$1);
var inst_11426 = cljs.core.reset_BANG_.call(null,dctr,inst_11425);
var inst_11431 = cljs.core.seq.call(null,inst_11424__$1);
var inst_11432 = inst_11431;
var inst_11433 = null;
var inst_11434 = (0);
var inst_11435 = (0);
var state_11492__$1 = (function (){var statearr_11535 = state_11492;
(statearr_11535[(20)] = inst_11432);

(statearr_11535[(29)] = inst_11424__$1);

(statearr_11535[(21)] = inst_11434);

(statearr_11535[(9)] = inst_11435);

(statearr_11535[(10)] = inst_11433);

(statearr_11535[(30)] = inst_11426);

return statearr_11535;
})();
var statearr_11536_11605 = state_11492__$1;
(statearr_11536_11605[(2)] = null);

(statearr_11536_11605[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (28))){
var inst_11432 = (state_11492[(20)]);
var inst_11451 = (state_11492[(25)]);
var inst_11451__$1 = cljs.core.seq.call(null,inst_11432);
var state_11492__$1 = (function (){var statearr_11537 = state_11492;
(statearr_11537[(25)] = inst_11451__$1);

return statearr_11537;
})();
if(inst_11451__$1){
var statearr_11538_11606 = state_11492__$1;
(statearr_11538_11606[(1)] = (33));

} else {
var statearr_11539_11607 = state_11492__$1;
(statearr_11539_11607[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (25))){
var inst_11434 = (state_11492[(21)]);
var inst_11435 = (state_11492[(9)]);
var inst_11437 = (inst_11435 < inst_11434);
var inst_11438 = inst_11437;
var state_11492__$1 = state_11492;
if(cljs.core.truth_(inst_11438)){
var statearr_11540_11608 = state_11492__$1;
(statearr_11540_11608[(1)] = (27));

} else {
var statearr_11541_11609 = state_11492__$1;
(statearr_11541_11609[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (34))){
var state_11492__$1 = state_11492;
var statearr_11542_11610 = state_11492__$1;
(statearr_11542_11610[(2)] = null);

(statearr_11542_11610[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (17))){
var state_11492__$1 = state_11492;
var statearr_11543_11611 = state_11492__$1;
(statearr_11543_11611[(2)] = null);

(statearr_11543_11611[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (3))){
var inst_11490 = (state_11492[(2)]);
var state_11492__$1 = state_11492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11492__$1,inst_11490);
} else {
if((state_val_11493 === (12))){
var inst_11419 = (state_11492[(2)]);
var state_11492__$1 = state_11492;
var statearr_11544_11612 = state_11492__$1;
(statearr_11544_11612[(2)] = inst_11419);

(statearr_11544_11612[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (2))){
var state_11492__$1 = state_11492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11492__$1,(4),ch);
} else {
if((state_val_11493 === (23))){
var state_11492__$1 = state_11492;
var statearr_11545_11613 = state_11492__$1;
(statearr_11545_11613[(2)] = null);

(statearr_11545_11613[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (35))){
var inst_11474 = (state_11492[(2)]);
var state_11492__$1 = state_11492;
var statearr_11546_11614 = state_11492__$1;
(statearr_11546_11614[(2)] = inst_11474);

(statearr_11546_11614[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (19))){
var inst_11391 = (state_11492[(7)]);
var inst_11395 = cljs.core.chunk_first.call(null,inst_11391);
var inst_11396 = cljs.core.chunk_rest.call(null,inst_11391);
var inst_11397 = cljs.core.count.call(null,inst_11395);
var inst_11369 = inst_11396;
var inst_11370 = inst_11395;
var inst_11371 = inst_11397;
var inst_11372 = (0);
var state_11492__$1 = (function (){var statearr_11547 = state_11492;
(statearr_11547[(13)] = inst_11372);

(statearr_11547[(14)] = inst_11370);

(statearr_11547[(16)] = inst_11369);

(statearr_11547[(17)] = inst_11371);

return statearr_11547;
})();
var statearr_11548_11615 = state_11492__$1;
(statearr_11548_11615[(2)] = null);

(statearr_11548_11615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (11))){
var inst_11369 = (state_11492[(16)]);
var inst_11391 = (state_11492[(7)]);
var inst_11391__$1 = cljs.core.seq.call(null,inst_11369);
var state_11492__$1 = (function (){var statearr_11549 = state_11492;
(statearr_11549[(7)] = inst_11391__$1);

return statearr_11549;
})();
if(inst_11391__$1){
var statearr_11550_11616 = state_11492__$1;
(statearr_11550_11616[(1)] = (16));

} else {
var statearr_11551_11617 = state_11492__$1;
(statearr_11551_11617[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (9))){
var inst_11421 = (state_11492[(2)]);
var state_11492__$1 = state_11492;
var statearr_11552_11618 = state_11492__$1;
(statearr_11552_11618[(2)] = inst_11421);

(statearr_11552_11618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (5))){
var inst_11367 = cljs.core.deref.call(null,cs);
var inst_11368 = cljs.core.seq.call(null,inst_11367);
var inst_11369 = inst_11368;
var inst_11370 = null;
var inst_11371 = (0);
var inst_11372 = (0);
var state_11492__$1 = (function (){var statearr_11553 = state_11492;
(statearr_11553[(13)] = inst_11372);

(statearr_11553[(14)] = inst_11370);

(statearr_11553[(16)] = inst_11369);

(statearr_11553[(17)] = inst_11371);

return statearr_11553;
})();
var statearr_11554_11619 = state_11492__$1;
(statearr_11554_11619[(2)] = null);

(statearr_11554_11619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (14))){
var state_11492__$1 = state_11492;
var statearr_11555_11620 = state_11492__$1;
(statearr_11555_11620[(2)] = null);

(statearr_11555_11620[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (45))){
var inst_11482 = (state_11492[(2)]);
var state_11492__$1 = state_11492;
var statearr_11556_11621 = state_11492__$1;
(statearr_11556_11621[(2)] = inst_11482);

(statearr_11556_11621[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (26))){
var inst_11424 = (state_11492[(29)]);
var inst_11478 = (state_11492[(2)]);
var inst_11479 = cljs.core.seq.call(null,inst_11424);
var state_11492__$1 = (function (){var statearr_11557 = state_11492;
(statearr_11557[(31)] = inst_11478);

return statearr_11557;
})();
if(inst_11479){
var statearr_11558_11622 = state_11492__$1;
(statearr_11558_11622[(1)] = (42));

} else {
var statearr_11559_11623 = state_11492__$1;
(statearr_11559_11623[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (16))){
var inst_11391 = (state_11492[(7)]);
var inst_11393 = cljs.core.chunked_seq_QMARK_.call(null,inst_11391);
var state_11492__$1 = state_11492;
if(inst_11393){
var statearr_11560_11624 = state_11492__$1;
(statearr_11560_11624[(1)] = (19));

} else {
var statearr_11561_11625 = state_11492__$1;
(statearr_11561_11625[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (38))){
var inst_11471 = (state_11492[(2)]);
var state_11492__$1 = state_11492;
var statearr_11562_11626 = state_11492__$1;
(statearr_11562_11626[(2)] = inst_11471);

(statearr_11562_11626[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (30))){
var state_11492__$1 = state_11492;
var statearr_11563_11627 = state_11492__$1;
(statearr_11563_11627[(2)] = null);

(statearr_11563_11627[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (10))){
var inst_11372 = (state_11492[(13)]);
var inst_11370 = (state_11492[(14)]);
var inst_11380 = cljs.core._nth.call(null,inst_11370,inst_11372);
var inst_11381 = cljs.core.nth.call(null,inst_11380,(0),null);
var inst_11382 = cljs.core.nth.call(null,inst_11380,(1),null);
var state_11492__$1 = (function (){var statearr_11564 = state_11492;
(statearr_11564[(26)] = inst_11381);

return statearr_11564;
})();
if(cljs.core.truth_(inst_11382)){
var statearr_11565_11628 = state_11492__$1;
(statearr_11565_11628[(1)] = (13));

} else {
var statearr_11566_11629 = state_11492__$1;
(statearr_11566_11629[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (18))){
var inst_11417 = (state_11492[(2)]);
var state_11492__$1 = state_11492;
var statearr_11567_11630 = state_11492__$1;
(statearr_11567_11630[(2)] = inst_11417);

(statearr_11567_11630[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (42))){
var state_11492__$1 = state_11492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11492__$1,(45),dchan);
} else {
if((state_val_11493 === (37))){
var inst_11460 = (state_11492[(23)]);
var inst_11360 = (state_11492[(11)]);
var inst_11451 = (state_11492[(25)]);
var inst_11460__$1 = cljs.core.first.call(null,inst_11451);
var inst_11461 = cljs.core.async.put_BANG_.call(null,inst_11460__$1,inst_11360,done);
var state_11492__$1 = (function (){var statearr_11568 = state_11492;
(statearr_11568[(23)] = inst_11460__$1);

return statearr_11568;
})();
if(cljs.core.truth_(inst_11461)){
var statearr_11569_11631 = state_11492__$1;
(statearr_11569_11631[(1)] = (39));

} else {
var statearr_11570_11632 = state_11492__$1;
(statearr_11570_11632[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (8))){
var inst_11372 = (state_11492[(13)]);
var inst_11371 = (state_11492[(17)]);
var inst_11374 = (inst_11372 < inst_11371);
var inst_11375 = inst_11374;
var state_11492__$1 = state_11492;
if(cljs.core.truth_(inst_11375)){
var statearr_11571_11633 = state_11492__$1;
(statearr_11571_11633[(1)] = (10));

} else {
var statearr_11572_11634 = state_11492__$1;
(statearr_11572_11634[(1)] = (11));

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
});})(c__10227__auto___11580,cs,m,dchan,dctr,done))
;
return ((function (switch__10115__auto__,c__10227__auto___11580,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10116__auto__ = null;
var cljs$core$async$mult_$_state_machine__10116__auto____0 = (function (){
var statearr_11576 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11576[(0)] = cljs$core$async$mult_$_state_machine__10116__auto__);

(statearr_11576[(1)] = (1));

return statearr_11576;
});
var cljs$core$async$mult_$_state_machine__10116__auto____1 = (function (state_11492){
while(true){
var ret_value__10117__auto__ = (function (){try{while(true){
var result__10118__auto__ = switch__10115__auto__.call(null,state_11492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10118__auto__;
}
break;
}
}catch (e11577){if((e11577 instanceof Object)){
var ex__10119__auto__ = e11577;
var statearr_11578_11635 = state_11492;
(statearr_11578_11635[(5)] = ex__10119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11636 = state_11492;
state_11492 = G__11636;
continue;
} else {
return ret_value__10117__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10116__auto__ = function(state_11492){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10116__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10116__auto____1.call(this,state_11492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10116__auto____0;
cljs$core$async$mult_$_state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10116__auto____1;
return cljs$core$async$mult_$_state_machine__10116__auto__;
})()
;})(switch__10115__auto__,c__10227__auto___11580,cs,m,dchan,dctr,done))
})();
var state__10229__auto__ = (function (){var statearr_11579 = f__10228__auto__.call(null);
(statearr_11579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10227__auto___11580);

return statearr_11579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10229__auto__);
});})(c__10227__auto___11580,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args11637 = [];
var len__7651__auto___11640 = arguments.length;
var i__7652__auto___11641 = (0);
while(true){
if((i__7652__auto___11641 < len__7651__auto___11640)){
args11637.push((arguments[i__7652__auto___11641]));

var G__11642 = (i__7652__auto___11641 + (1));
i__7652__auto___11641 = G__11642;
continue;
} else {
}
break;
}

var G__11639 = args11637.length;
switch (G__11639) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11637.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7206__auto__ = (((m == null))?null:m);
var m__7207__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,m,ch);
} else {
var m__7207__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7206__auto__ = (((m == null))?null:m);
var m__7207__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,m,ch);
} else {
var m__7207__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7206__auto__ = (((m == null))?null:m);
var m__7207__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,m);
} else {
var m__7207__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7206__auto__ = (((m == null))?null:m);
var m__7207__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,m,state_map);
} else {
var m__7207__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7206__auto__ = (((m == null))?null:m);
var m__7207__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,m,mode);
} else {
var m__7207__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7658__auto__ = [];
var len__7651__auto___11654 = arguments.length;
var i__7652__auto___11655 = (0);
while(true){
if((i__7652__auto___11655 < len__7651__auto___11654)){
args__7658__auto__.push((arguments[i__7652__auto___11655]));

var G__11656 = (i__7652__auto___11655 + (1));
i__7652__auto___11655 = G__11656;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11648){
var map__11649 = p__11648;
var map__11649__$1 = ((((!((map__11649 == null)))?((((map__11649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11649.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11649):map__11649);
var opts = map__11649__$1;
var statearr_11651_11657 = state;
(statearr_11651_11657[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__11649,map__11649__$1,opts){
return (function (val){
var statearr_11652_11658 = state;
(statearr_11652_11658[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__11649,map__11649__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_11653_11659 = state;
(statearr_11653_11659[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11644){
var G__11645 = cljs.core.first.call(null,seq11644);
var seq11644__$1 = cljs.core.next.call(null,seq11644);
var G__11646 = cljs.core.first.call(null,seq11644__$1);
var seq11644__$2 = cljs.core.next.call(null,seq11644__$1);
var G__11647 = cljs.core.first.call(null,seq11644__$2);
var seq11644__$3 = cljs.core.next.call(null,seq11644__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11645,G__11646,G__11647,seq11644__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async11827 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11827 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta11828){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta11828 = meta11828;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11829,meta11828__$1){
var self__ = this;
var _11829__$1 = this;
return (new cljs.core.async.t_cljs$core$async11827(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta11828__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11827.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11829){
var self__ = this;
var _11829__$1 = this;
return self__.meta11828;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11827.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11827.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11827.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11827.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11827.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11827.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11827.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11827.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11827.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta11828","meta11828",-421157126,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11827.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11827.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11827";

cljs.core.async.t_cljs$core$async11827.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async11827");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async11827 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async11827(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta11828){
return (new cljs.core.async.t_cljs$core$async11827(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta11828));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async11827(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10227__auto___11994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10227__auto___11994,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10228__auto__ = (function (){var switch__10115__auto__ = ((function (c__10227__auto___11994,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11931){
var state_val_11932 = (state_11931[(1)]);
if((state_val_11932 === (7))){
var inst_11846 = (state_11931[(2)]);
var state_11931__$1 = state_11931;
var statearr_11933_11995 = state_11931__$1;
(statearr_11933_11995[(2)] = inst_11846);

(statearr_11933_11995[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (20))){
var inst_11858 = (state_11931[(7)]);
var state_11931__$1 = state_11931;
var statearr_11934_11996 = state_11931__$1;
(statearr_11934_11996[(2)] = inst_11858);

(statearr_11934_11996[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (27))){
var state_11931__$1 = state_11931;
var statearr_11935_11997 = state_11931__$1;
(statearr_11935_11997[(2)] = null);

(statearr_11935_11997[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (1))){
var inst_11833 = (state_11931[(8)]);
var inst_11833__$1 = calc_state.call(null);
var inst_11835 = (inst_11833__$1 == null);
var inst_11836 = cljs.core.not.call(null,inst_11835);
var state_11931__$1 = (function (){var statearr_11936 = state_11931;
(statearr_11936[(8)] = inst_11833__$1);

return statearr_11936;
})();
if(inst_11836){
var statearr_11937_11998 = state_11931__$1;
(statearr_11937_11998[(1)] = (2));

} else {
var statearr_11938_11999 = state_11931__$1;
(statearr_11938_11999[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (24))){
var inst_11882 = (state_11931[(9)]);
var inst_11891 = (state_11931[(10)]);
var inst_11905 = (state_11931[(11)]);
var inst_11905__$1 = inst_11882.call(null,inst_11891);
var state_11931__$1 = (function (){var statearr_11939 = state_11931;
(statearr_11939[(11)] = inst_11905__$1);

return statearr_11939;
})();
if(cljs.core.truth_(inst_11905__$1)){
var statearr_11940_12000 = state_11931__$1;
(statearr_11940_12000[(1)] = (29));

} else {
var statearr_11941_12001 = state_11931__$1;
(statearr_11941_12001[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (4))){
var inst_11849 = (state_11931[(2)]);
var state_11931__$1 = state_11931;
if(cljs.core.truth_(inst_11849)){
var statearr_11942_12002 = state_11931__$1;
(statearr_11942_12002[(1)] = (8));

} else {
var statearr_11943_12003 = state_11931__$1;
(statearr_11943_12003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (15))){
var inst_11876 = (state_11931[(2)]);
var state_11931__$1 = state_11931;
if(cljs.core.truth_(inst_11876)){
var statearr_11944_12004 = state_11931__$1;
(statearr_11944_12004[(1)] = (19));

} else {
var statearr_11945_12005 = state_11931__$1;
(statearr_11945_12005[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (21))){
var inst_11881 = (state_11931[(12)]);
var inst_11881__$1 = (state_11931[(2)]);
var inst_11882 = cljs.core.get.call(null,inst_11881__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11883 = cljs.core.get.call(null,inst_11881__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11884 = cljs.core.get.call(null,inst_11881__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11931__$1 = (function (){var statearr_11946 = state_11931;
(statearr_11946[(9)] = inst_11882);

(statearr_11946[(12)] = inst_11881__$1);

(statearr_11946[(13)] = inst_11883);

return statearr_11946;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_11931__$1,(22),inst_11884);
} else {
if((state_val_11932 === (31))){
var inst_11913 = (state_11931[(2)]);
var state_11931__$1 = state_11931;
if(cljs.core.truth_(inst_11913)){
var statearr_11947_12006 = state_11931__$1;
(statearr_11947_12006[(1)] = (32));

} else {
var statearr_11948_12007 = state_11931__$1;
(statearr_11948_12007[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (32))){
var inst_11890 = (state_11931[(14)]);
var state_11931__$1 = state_11931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11931__$1,(35),out,inst_11890);
} else {
if((state_val_11932 === (33))){
var inst_11881 = (state_11931[(12)]);
var inst_11858 = inst_11881;
var state_11931__$1 = (function (){var statearr_11949 = state_11931;
(statearr_11949[(7)] = inst_11858);

return statearr_11949;
})();
var statearr_11950_12008 = state_11931__$1;
(statearr_11950_12008[(2)] = null);

(statearr_11950_12008[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (13))){
var inst_11858 = (state_11931[(7)]);
var inst_11865 = inst_11858.cljs$lang$protocol_mask$partition0$;
var inst_11866 = (inst_11865 & (64));
var inst_11867 = inst_11858.cljs$core$ISeq$;
var inst_11868 = (cljs.core.PROTOCOL_SENTINEL === inst_11867);
var inst_11869 = (inst_11866) || (inst_11868);
var state_11931__$1 = state_11931;
if(cljs.core.truth_(inst_11869)){
var statearr_11951_12009 = state_11931__$1;
(statearr_11951_12009[(1)] = (16));

} else {
var statearr_11952_12010 = state_11931__$1;
(statearr_11952_12010[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (22))){
var inst_11890 = (state_11931[(14)]);
var inst_11891 = (state_11931[(10)]);
var inst_11889 = (state_11931[(2)]);
var inst_11890__$1 = cljs.core.nth.call(null,inst_11889,(0),null);
var inst_11891__$1 = cljs.core.nth.call(null,inst_11889,(1),null);
var inst_11892 = (inst_11890__$1 == null);
var inst_11893 = cljs.core._EQ_.call(null,inst_11891__$1,change);
var inst_11894 = (inst_11892) || (inst_11893);
var state_11931__$1 = (function (){var statearr_11953 = state_11931;
(statearr_11953[(14)] = inst_11890__$1);

(statearr_11953[(10)] = inst_11891__$1);

return statearr_11953;
})();
if(cljs.core.truth_(inst_11894)){
var statearr_11954_12011 = state_11931__$1;
(statearr_11954_12011[(1)] = (23));

} else {
var statearr_11955_12012 = state_11931__$1;
(statearr_11955_12012[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (36))){
var inst_11881 = (state_11931[(12)]);
var inst_11858 = inst_11881;
var state_11931__$1 = (function (){var statearr_11956 = state_11931;
(statearr_11956[(7)] = inst_11858);

return statearr_11956;
})();
var statearr_11957_12013 = state_11931__$1;
(statearr_11957_12013[(2)] = null);

(statearr_11957_12013[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (29))){
var inst_11905 = (state_11931[(11)]);
var state_11931__$1 = state_11931;
var statearr_11958_12014 = state_11931__$1;
(statearr_11958_12014[(2)] = inst_11905);

(statearr_11958_12014[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (6))){
var state_11931__$1 = state_11931;
var statearr_11959_12015 = state_11931__$1;
(statearr_11959_12015[(2)] = false);

(statearr_11959_12015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (28))){
var inst_11901 = (state_11931[(2)]);
var inst_11902 = calc_state.call(null);
var inst_11858 = inst_11902;
var state_11931__$1 = (function (){var statearr_11960 = state_11931;
(statearr_11960[(7)] = inst_11858);

(statearr_11960[(15)] = inst_11901);

return statearr_11960;
})();
var statearr_11961_12016 = state_11931__$1;
(statearr_11961_12016[(2)] = null);

(statearr_11961_12016[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (25))){
var inst_11927 = (state_11931[(2)]);
var state_11931__$1 = state_11931;
var statearr_11962_12017 = state_11931__$1;
(statearr_11962_12017[(2)] = inst_11927);

(statearr_11962_12017[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (34))){
var inst_11925 = (state_11931[(2)]);
var state_11931__$1 = state_11931;
var statearr_11963_12018 = state_11931__$1;
(statearr_11963_12018[(2)] = inst_11925);

(statearr_11963_12018[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (17))){
var state_11931__$1 = state_11931;
var statearr_11964_12019 = state_11931__$1;
(statearr_11964_12019[(2)] = false);

(statearr_11964_12019[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (3))){
var state_11931__$1 = state_11931;
var statearr_11965_12020 = state_11931__$1;
(statearr_11965_12020[(2)] = false);

(statearr_11965_12020[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (12))){
var inst_11929 = (state_11931[(2)]);
var state_11931__$1 = state_11931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11931__$1,inst_11929);
} else {
if((state_val_11932 === (2))){
var inst_11833 = (state_11931[(8)]);
var inst_11838 = inst_11833.cljs$lang$protocol_mask$partition0$;
var inst_11839 = (inst_11838 & (64));
var inst_11840 = inst_11833.cljs$core$ISeq$;
var inst_11841 = (cljs.core.PROTOCOL_SENTINEL === inst_11840);
var inst_11842 = (inst_11839) || (inst_11841);
var state_11931__$1 = state_11931;
if(cljs.core.truth_(inst_11842)){
var statearr_11966_12021 = state_11931__$1;
(statearr_11966_12021[(1)] = (5));

} else {
var statearr_11967_12022 = state_11931__$1;
(statearr_11967_12022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (23))){
var inst_11890 = (state_11931[(14)]);
var inst_11896 = (inst_11890 == null);
var state_11931__$1 = state_11931;
if(cljs.core.truth_(inst_11896)){
var statearr_11968_12023 = state_11931__$1;
(statearr_11968_12023[(1)] = (26));

} else {
var statearr_11969_12024 = state_11931__$1;
(statearr_11969_12024[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (35))){
var inst_11916 = (state_11931[(2)]);
var state_11931__$1 = state_11931;
if(cljs.core.truth_(inst_11916)){
var statearr_11970_12025 = state_11931__$1;
(statearr_11970_12025[(1)] = (36));

} else {
var statearr_11971_12026 = state_11931__$1;
(statearr_11971_12026[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (19))){
var inst_11858 = (state_11931[(7)]);
var inst_11878 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11858);
var state_11931__$1 = state_11931;
var statearr_11972_12027 = state_11931__$1;
(statearr_11972_12027[(2)] = inst_11878);

(statearr_11972_12027[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (11))){
var inst_11858 = (state_11931[(7)]);
var inst_11862 = (inst_11858 == null);
var inst_11863 = cljs.core.not.call(null,inst_11862);
var state_11931__$1 = state_11931;
if(inst_11863){
var statearr_11973_12028 = state_11931__$1;
(statearr_11973_12028[(1)] = (13));

} else {
var statearr_11974_12029 = state_11931__$1;
(statearr_11974_12029[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (9))){
var inst_11833 = (state_11931[(8)]);
var state_11931__$1 = state_11931;
var statearr_11975_12030 = state_11931__$1;
(statearr_11975_12030[(2)] = inst_11833);

(statearr_11975_12030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (5))){
var state_11931__$1 = state_11931;
var statearr_11976_12031 = state_11931__$1;
(statearr_11976_12031[(2)] = true);

(statearr_11976_12031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (14))){
var state_11931__$1 = state_11931;
var statearr_11977_12032 = state_11931__$1;
(statearr_11977_12032[(2)] = false);

(statearr_11977_12032[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (26))){
var inst_11891 = (state_11931[(10)]);
var inst_11898 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11891);
var state_11931__$1 = state_11931;
var statearr_11978_12033 = state_11931__$1;
(statearr_11978_12033[(2)] = inst_11898);

(statearr_11978_12033[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (16))){
var state_11931__$1 = state_11931;
var statearr_11979_12034 = state_11931__$1;
(statearr_11979_12034[(2)] = true);

(statearr_11979_12034[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (38))){
var inst_11921 = (state_11931[(2)]);
var state_11931__$1 = state_11931;
var statearr_11980_12035 = state_11931__$1;
(statearr_11980_12035[(2)] = inst_11921);

(statearr_11980_12035[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (30))){
var inst_11882 = (state_11931[(9)]);
var inst_11891 = (state_11931[(10)]);
var inst_11883 = (state_11931[(13)]);
var inst_11908 = cljs.core.empty_QMARK_.call(null,inst_11882);
var inst_11909 = inst_11883.call(null,inst_11891);
var inst_11910 = cljs.core.not.call(null,inst_11909);
var inst_11911 = (inst_11908) && (inst_11910);
var state_11931__$1 = state_11931;
var statearr_11981_12036 = state_11931__$1;
(statearr_11981_12036[(2)] = inst_11911);

(statearr_11981_12036[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (10))){
var inst_11833 = (state_11931[(8)]);
var inst_11854 = (state_11931[(2)]);
var inst_11855 = cljs.core.get.call(null,inst_11854,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11856 = cljs.core.get.call(null,inst_11854,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11857 = cljs.core.get.call(null,inst_11854,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11858 = inst_11833;
var state_11931__$1 = (function (){var statearr_11982 = state_11931;
(statearr_11982[(16)] = inst_11855);

(statearr_11982[(7)] = inst_11858);

(statearr_11982[(17)] = inst_11857);

(statearr_11982[(18)] = inst_11856);

return statearr_11982;
})();
var statearr_11983_12037 = state_11931__$1;
(statearr_11983_12037[(2)] = null);

(statearr_11983_12037[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (18))){
var inst_11873 = (state_11931[(2)]);
var state_11931__$1 = state_11931;
var statearr_11984_12038 = state_11931__$1;
(statearr_11984_12038[(2)] = inst_11873);

(statearr_11984_12038[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (37))){
var state_11931__$1 = state_11931;
var statearr_11985_12039 = state_11931__$1;
(statearr_11985_12039[(2)] = null);

(statearr_11985_12039[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (8))){
var inst_11833 = (state_11931[(8)]);
var inst_11851 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11833);
var state_11931__$1 = state_11931;
var statearr_11986_12040 = state_11931__$1;
(statearr_11986_12040[(2)] = inst_11851);

(statearr_11986_12040[(1)] = (10));


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
});})(c__10227__auto___11994,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10115__auto__,c__10227__auto___11994,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10116__auto__ = null;
var cljs$core$async$mix_$_state_machine__10116__auto____0 = (function (){
var statearr_11990 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11990[(0)] = cljs$core$async$mix_$_state_machine__10116__auto__);

(statearr_11990[(1)] = (1));

return statearr_11990;
});
var cljs$core$async$mix_$_state_machine__10116__auto____1 = (function (state_11931){
while(true){
var ret_value__10117__auto__ = (function (){try{while(true){
var result__10118__auto__ = switch__10115__auto__.call(null,state_11931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10118__auto__;
}
break;
}
}catch (e11991){if((e11991 instanceof Object)){
var ex__10119__auto__ = e11991;
var statearr_11992_12041 = state_11931;
(statearr_11992_12041[(5)] = ex__10119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12042 = state_11931;
state_11931 = G__12042;
continue;
} else {
return ret_value__10117__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10116__auto__ = function(state_11931){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10116__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10116__auto____1.call(this,state_11931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10116__auto____0;
cljs$core$async$mix_$_state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10116__auto____1;
return cljs$core$async$mix_$_state_machine__10116__auto__;
})()
;})(switch__10115__auto__,c__10227__auto___11994,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10229__auto__ = (function (){var statearr_11993 = f__10228__auto__.call(null);
(statearr_11993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10227__auto___11994);

return statearr_11993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10229__auto__);
});})(c__10227__auto___11994,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7206__auto__ = (((p == null))?null:p);
var m__7207__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__7207__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7206__auto__ = (((p == null))?null:p);
var m__7207__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,p,v,ch);
} else {
var m__7207__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args12043 = [];
var len__7651__auto___12046 = arguments.length;
var i__7652__auto___12047 = (0);
while(true){
if((i__7652__auto___12047 < len__7651__auto___12046)){
args12043.push((arguments[i__7652__auto___12047]));

var G__12048 = (i__7652__auto___12047 + (1));
i__7652__auto___12047 = G__12048;
continue;
} else {
}
break;
}

var G__12045 = args12043.length;
switch (G__12045) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12043.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7206__auto__ = (((p == null))?null:p);
var m__7207__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,p);
} else {
var m__7207__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7206__auto__ = (((p == null))?null:p);
var m__7207__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,p,v);
} else {
var m__7207__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var args12051 = [];
var len__7651__auto___12176 = arguments.length;
var i__7652__auto___12177 = (0);
while(true){
if((i__7652__auto___12177 < len__7651__auto___12176)){
args12051.push((arguments[i__7652__auto___12177]));

var G__12178 = (i__7652__auto___12177 + (1));
i__7652__auto___12177 = G__12178;
continue;
} else {
}
break;
}

var G__12053 = args12051.length;
switch (G__12053) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12051.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6543__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6543__auto__,mults){
return (function (p1__12050_SHARP_){
if(cljs.core.truth_(p1__12050_SHARP_.call(null,topic))){
return p1__12050_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12050_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6543__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async12054 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12054 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12055){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12055 = meta12055;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12056,meta12055__$1){
var self__ = this;
var _12056__$1 = this;
return (new cljs.core.async.t_cljs$core$async12054(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12055__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12054.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12056){
var self__ = this;
var _12056__$1 = this;
return self__.meta12055;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12054.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12054.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12054.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12054.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12054.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12054.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12054.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12054.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12055","meta12055",-961759255,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12054.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12054.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12054";

cljs.core.async.t_cljs$core$async12054.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async12054");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async12054 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async12054(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12055){
return (new cljs.core.async.t_cljs$core$async12054(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12055));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async12054(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10227__auto___12180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10227__auto___12180,mults,ensure_mult,p){
return (function (){
var f__10228__auto__ = (function (){var switch__10115__auto__ = ((function (c__10227__auto___12180,mults,ensure_mult,p){
return (function (state_12128){
var state_val_12129 = (state_12128[(1)]);
if((state_val_12129 === (7))){
var inst_12124 = (state_12128[(2)]);
var state_12128__$1 = state_12128;
var statearr_12130_12181 = state_12128__$1;
(statearr_12130_12181[(2)] = inst_12124);

(statearr_12130_12181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (20))){
var state_12128__$1 = state_12128;
var statearr_12131_12182 = state_12128__$1;
(statearr_12131_12182[(2)] = null);

(statearr_12131_12182[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (1))){
var state_12128__$1 = state_12128;
var statearr_12132_12183 = state_12128__$1;
(statearr_12132_12183[(2)] = null);

(statearr_12132_12183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (24))){
var inst_12107 = (state_12128[(7)]);
var inst_12116 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12107);
var state_12128__$1 = state_12128;
var statearr_12133_12184 = state_12128__$1;
(statearr_12133_12184[(2)] = inst_12116);

(statearr_12133_12184[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (4))){
var inst_12059 = (state_12128[(8)]);
var inst_12059__$1 = (state_12128[(2)]);
var inst_12060 = (inst_12059__$1 == null);
var state_12128__$1 = (function (){var statearr_12134 = state_12128;
(statearr_12134[(8)] = inst_12059__$1);

return statearr_12134;
})();
if(cljs.core.truth_(inst_12060)){
var statearr_12135_12185 = state_12128__$1;
(statearr_12135_12185[(1)] = (5));

} else {
var statearr_12136_12186 = state_12128__$1;
(statearr_12136_12186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (15))){
var inst_12101 = (state_12128[(2)]);
var state_12128__$1 = state_12128;
var statearr_12137_12187 = state_12128__$1;
(statearr_12137_12187[(2)] = inst_12101);

(statearr_12137_12187[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (21))){
var inst_12121 = (state_12128[(2)]);
var state_12128__$1 = (function (){var statearr_12138 = state_12128;
(statearr_12138[(9)] = inst_12121);

return statearr_12138;
})();
var statearr_12139_12188 = state_12128__$1;
(statearr_12139_12188[(2)] = null);

(statearr_12139_12188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (13))){
var inst_12083 = (state_12128[(10)]);
var inst_12085 = cljs.core.chunked_seq_QMARK_.call(null,inst_12083);
var state_12128__$1 = state_12128;
if(inst_12085){
var statearr_12140_12189 = state_12128__$1;
(statearr_12140_12189[(1)] = (16));

} else {
var statearr_12141_12190 = state_12128__$1;
(statearr_12141_12190[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (22))){
var inst_12113 = (state_12128[(2)]);
var state_12128__$1 = state_12128;
if(cljs.core.truth_(inst_12113)){
var statearr_12142_12191 = state_12128__$1;
(statearr_12142_12191[(1)] = (23));

} else {
var statearr_12143_12192 = state_12128__$1;
(statearr_12143_12192[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (6))){
var inst_12107 = (state_12128[(7)]);
var inst_12109 = (state_12128[(11)]);
var inst_12059 = (state_12128[(8)]);
var inst_12107__$1 = topic_fn.call(null,inst_12059);
var inst_12108 = cljs.core.deref.call(null,mults);
var inst_12109__$1 = cljs.core.get.call(null,inst_12108,inst_12107__$1);
var state_12128__$1 = (function (){var statearr_12144 = state_12128;
(statearr_12144[(7)] = inst_12107__$1);

(statearr_12144[(11)] = inst_12109__$1);

return statearr_12144;
})();
if(cljs.core.truth_(inst_12109__$1)){
var statearr_12145_12193 = state_12128__$1;
(statearr_12145_12193[(1)] = (19));

} else {
var statearr_12146_12194 = state_12128__$1;
(statearr_12146_12194[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (25))){
var inst_12118 = (state_12128[(2)]);
var state_12128__$1 = state_12128;
var statearr_12147_12195 = state_12128__$1;
(statearr_12147_12195[(2)] = inst_12118);

(statearr_12147_12195[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (17))){
var inst_12083 = (state_12128[(10)]);
var inst_12092 = cljs.core.first.call(null,inst_12083);
var inst_12093 = cljs.core.async.muxch_STAR_.call(null,inst_12092);
var inst_12094 = cljs.core.async.close_BANG_.call(null,inst_12093);
var inst_12095 = cljs.core.next.call(null,inst_12083);
var inst_12069 = inst_12095;
var inst_12070 = null;
var inst_12071 = (0);
var inst_12072 = (0);
var state_12128__$1 = (function (){var statearr_12148 = state_12128;
(statearr_12148[(12)] = inst_12094);

(statearr_12148[(13)] = inst_12070);

(statearr_12148[(14)] = inst_12071);

(statearr_12148[(15)] = inst_12072);

(statearr_12148[(16)] = inst_12069);

return statearr_12148;
})();
var statearr_12149_12196 = state_12128__$1;
(statearr_12149_12196[(2)] = null);

(statearr_12149_12196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (3))){
var inst_12126 = (state_12128[(2)]);
var state_12128__$1 = state_12128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12128__$1,inst_12126);
} else {
if((state_val_12129 === (12))){
var inst_12103 = (state_12128[(2)]);
var state_12128__$1 = state_12128;
var statearr_12150_12197 = state_12128__$1;
(statearr_12150_12197[(2)] = inst_12103);

(statearr_12150_12197[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (2))){
var state_12128__$1 = state_12128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12128__$1,(4),ch);
} else {
if((state_val_12129 === (23))){
var state_12128__$1 = state_12128;
var statearr_12151_12198 = state_12128__$1;
(statearr_12151_12198[(2)] = null);

(statearr_12151_12198[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (19))){
var inst_12109 = (state_12128[(11)]);
var inst_12059 = (state_12128[(8)]);
var inst_12111 = cljs.core.async.muxch_STAR_.call(null,inst_12109);
var state_12128__$1 = state_12128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12128__$1,(22),inst_12111,inst_12059);
} else {
if((state_val_12129 === (11))){
var inst_12083 = (state_12128[(10)]);
var inst_12069 = (state_12128[(16)]);
var inst_12083__$1 = cljs.core.seq.call(null,inst_12069);
var state_12128__$1 = (function (){var statearr_12152 = state_12128;
(statearr_12152[(10)] = inst_12083__$1);

return statearr_12152;
})();
if(inst_12083__$1){
var statearr_12153_12199 = state_12128__$1;
(statearr_12153_12199[(1)] = (13));

} else {
var statearr_12154_12200 = state_12128__$1;
(statearr_12154_12200[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (9))){
var inst_12105 = (state_12128[(2)]);
var state_12128__$1 = state_12128;
var statearr_12155_12201 = state_12128__$1;
(statearr_12155_12201[(2)] = inst_12105);

(statearr_12155_12201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (5))){
var inst_12066 = cljs.core.deref.call(null,mults);
var inst_12067 = cljs.core.vals.call(null,inst_12066);
var inst_12068 = cljs.core.seq.call(null,inst_12067);
var inst_12069 = inst_12068;
var inst_12070 = null;
var inst_12071 = (0);
var inst_12072 = (0);
var state_12128__$1 = (function (){var statearr_12156 = state_12128;
(statearr_12156[(13)] = inst_12070);

(statearr_12156[(14)] = inst_12071);

(statearr_12156[(15)] = inst_12072);

(statearr_12156[(16)] = inst_12069);

return statearr_12156;
})();
var statearr_12157_12202 = state_12128__$1;
(statearr_12157_12202[(2)] = null);

(statearr_12157_12202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (14))){
var state_12128__$1 = state_12128;
var statearr_12161_12203 = state_12128__$1;
(statearr_12161_12203[(2)] = null);

(statearr_12161_12203[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (16))){
var inst_12083 = (state_12128[(10)]);
var inst_12087 = cljs.core.chunk_first.call(null,inst_12083);
var inst_12088 = cljs.core.chunk_rest.call(null,inst_12083);
var inst_12089 = cljs.core.count.call(null,inst_12087);
var inst_12069 = inst_12088;
var inst_12070 = inst_12087;
var inst_12071 = inst_12089;
var inst_12072 = (0);
var state_12128__$1 = (function (){var statearr_12162 = state_12128;
(statearr_12162[(13)] = inst_12070);

(statearr_12162[(14)] = inst_12071);

(statearr_12162[(15)] = inst_12072);

(statearr_12162[(16)] = inst_12069);

return statearr_12162;
})();
var statearr_12163_12204 = state_12128__$1;
(statearr_12163_12204[(2)] = null);

(statearr_12163_12204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (10))){
var inst_12070 = (state_12128[(13)]);
var inst_12071 = (state_12128[(14)]);
var inst_12072 = (state_12128[(15)]);
var inst_12069 = (state_12128[(16)]);
var inst_12077 = cljs.core._nth.call(null,inst_12070,inst_12072);
var inst_12078 = cljs.core.async.muxch_STAR_.call(null,inst_12077);
var inst_12079 = cljs.core.async.close_BANG_.call(null,inst_12078);
var inst_12080 = (inst_12072 + (1));
var tmp12158 = inst_12070;
var tmp12159 = inst_12071;
var tmp12160 = inst_12069;
var inst_12069__$1 = tmp12160;
var inst_12070__$1 = tmp12158;
var inst_12071__$1 = tmp12159;
var inst_12072__$1 = inst_12080;
var state_12128__$1 = (function (){var statearr_12164 = state_12128;
(statearr_12164[(17)] = inst_12079);

(statearr_12164[(13)] = inst_12070__$1);

(statearr_12164[(14)] = inst_12071__$1);

(statearr_12164[(15)] = inst_12072__$1);

(statearr_12164[(16)] = inst_12069__$1);

return statearr_12164;
})();
var statearr_12165_12205 = state_12128__$1;
(statearr_12165_12205[(2)] = null);

(statearr_12165_12205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (18))){
var inst_12098 = (state_12128[(2)]);
var state_12128__$1 = state_12128;
var statearr_12166_12206 = state_12128__$1;
(statearr_12166_12206[(2)] = inst_12098);

(statearr_12166_12206[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (8))){
var inst_12071 = (state_12128[(14)]);
var inst_12072 = (state_12128[(15)]);
var inst_12074 = (inst_12072 < inst_12071);
var inst_12075 = inst_12074;
var state_12128__$1 = state_12128;
if(cljs.core.truth_(inst_12075)){
var statearr_12167_12207 = state_12128__$1;
(statearr_12167_12207[(1)] = (10));

} else {
var statearr_12168_12208 = state_12128__$1;
(statearr_12168_12208[(1)] = (11));

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
});})(c__10227__auto___12180,mults,ensure_mult,p))
;
return ((function (switch__10115__auto__,c__10227__auto___12180,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10116__auto__ = null;
var cljs$core$async$state_machine__10116__auto____0 = (function (){
var statearr_12172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12172[(0)] = cljs$core$async$state_machine__10116__auto__);

(statearr_12172[(1)] = (1));

return statearr_12172;
});
var cljs$core$async$state_machine__10116__auto____1 = (function (state_12128){
while(true){
var ret_value__10117__auto__ = (function (){try{while(true){
var result__10118__auto__ = switch__10115__auto__.call(null,state_12128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10118__auto__;
}
break;
}
}catch (e12173){if((e12173 instanceof Object)){
var ex__10119__auto__ = e12173;
var statearr_12174_12209 = state_12128;
(statearr_12174_12209[(5)] = ex__10119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12210 = state_12128;
state_12128 = G__12210;
continue;
} else {
return ret_value__10117__auto__;
}
break;
}
});
cljs$core$async$state_machine__10116__auto__ = function(state_12128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10116__auto____1.call(this,state_12128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10116__auto____0;
cljs$core$async$state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10116__auto____1;
return cljs$core$async$state_machine__10116__auto__;
})()
;})(switch__10115__auto__,c__10227__auto___12180,mults,ensure_mult,p))
})();
var state__10229__auto__ = (function (){var statearr_12175 = f__10228__auto__.call(null);
(statearr_12175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10227__auto___12180);

return statearr_12175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10229__auto__);
});})(c__10227__auto___12180,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args12211 = [];
var len__7651__auto___12214 = arguments.length;
var i__7652__auto___12215 = (0);
while(true){
if((i__7652__auto___12215 < len__7651__auto___12214)){
args12211.push((arguments[i__7652__auto___12215]));

var G__12216 = (i__7652__auto___12215 + (1));
i__7652__auto___12215 = G__12216;
continue;
} else {
}
break;
}

var G__12213 = args12211.length;
switch (G__12213) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12211.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args12218 = [];
var len__7651__auto___12221 = arguments.length;
var i__7652__auto___12222 = (0);
while(true){
if((i__7652__auto___12222 < len__7651__auto___12221)){
args12218.push((arguments[i__7652__auto___12222]));

var G__12223 = (i__7652__auto___12222 + (1));
i__7652__auto___12222 = G__12223;
continue;
} else {
}
break;
}

var G__12220 = args12218.length;
switch (G__12220) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12218.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var args12225 = [];
var len__7651__auto___12296 = arguments.length;
var i__7652__auto___12297 = (0);
while(true){
if((i__7652__auto___12297 < len__7651__auto___12296)){
args12225.push((arguments[i__7652__auto___12297]));

var G__12298 = (i__7652__auto___12297 + (1));
i__7652__auto___12297 = G__12298;
continue;
} else {
}
break;
}

var G__12227 = args12225.length;
switch (G__12227) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12225.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__10227__auto___12300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10227__auto___12300,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10228__auto__ = (function (){var switch__10115__auto__ = ((function (c__10227__auto___12300,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12266){
var state_val_12267 = (state_12266[(1)]);
if((state_val_12267 === (7))){
var state_12266__$1 = state_12266;
var statearr_12268_12301 = state_12266__$1;
(statearr_12268_12301[(2)] = null);

(statearr_12268_12301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12267 === (1))){
var state_12266__$1 = state_12266;
var statearr_12269_12302 = state_12266__$1;
(statearr_12269_12302[(2)] = null);

(statearr_12269_12302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12267 === (4))){
var inst_12230 = (state_12266[(7)]);
var inst_12232 = (inst_12230 < cnt);
var state_12266__$1 = state_12266;
if(cljs.core.truth_(inst_12232)){
var statearr_12270_12303 = state_12266__$1;
(statearr_12270_12303[(1)] = (6));

} else {
var statearr_12271_12304 = state_12266__$1;
(statearr_12271_12304[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12267 === (15))){
var inst_12262 = (state_12266[(2)]);
var state_12266__$1 = state_12266;
var statearr_12272_12305 = state_12266__$1;
(statearr_12272_12305[(2)] = inst_12262);

(statearr_12272_12305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12267 === (13))){
var inst_12255 = cljs.core.async.close_BANG_.call(null,out);
var state_12266__$1 = state_12266;
var statearr_12273_12306 = state_12266__$1;
(statearr_12273_12306[(2)] = inst_12255);

(statearr_12273_12306[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12267 === (6))){
var state_12266__$1 = state_12266;
var statearr_12274_12307 = state_12266__$1;
(statearr_12274_12307[(2)] = null);

(statearr_12274_12307[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12267 === (3))){
var inst_12264 = (state_12266[(2)]);
var state_12266__$1 = state_12266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12266__$1,inst_12264);
} else {
if((state_val_12267 === (12))){
var inst_12252 = (state_12266[(8)]);
var inst_12252__$1 = (state_12266[(2)]);
var inst_12253 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12252__$1);
var state_12266__$1 = (function (){var statearr_12275 = state_12266;
(statearr_12275[(8)] = inst_12252__$1);

return statearr_12275;
})();
if(cljs.core.truth_(inst_12253)){
var statearr_12276_12308 = state_12266__$1;
(statearr_12276_12308[(1)] = (13));

} else {
var statearr_12277_12309 = state_12266__$1;
(statearr_12277_12309[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12267 === (2))){
var inst_12229 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_12230 = (0);
var state_12266__$1 = (function (){var statearr_12278 = state_12266;
(statearr_12278[(7)] = inst_12230);

(statearr_12278[(9)] = inst_12229);

return statearr_12278;
})();
var statearr_12279_12310 = state_12266__$1;
(statearr_12279_12310[(2)] = null);

(statearr_12279_12310[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12267 === (11))){
var inst_12230 = (state_12266[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12266,(10),Object,null,(9));
var inst_12239 = chs__$1.call(null,inst_12230);
var inst_12240 = done.call(null,inst_12230);
var inst_12241 = cljs.core.async.take_BANG_.call(null,inst_12239,inst_12240);
var state_12266__$1 = state_12266;
var statearr_12280_12311 = state_12266__$1;
(statearr_12280_12311[(2)] = inst_12241);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12266__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12267 === (9))){
var inst_12230 = (state_12266[(7)]);
var inst_12243 = (state_12266[(2)]);
var inst_12244 = (inst_12230 + (1));
var inst_12230__$1 = inst_12244;
var state_12266__$1 = (function (){var statearr_12281 = state_12266;
(statearr_12281[(10)] = inst_12243);

(statearr_12281[(7)] = inst_12230__$1);

return statearr_12281;
})();
var statearr_12282_12312 = state_12266__$1;
(statearr_12282_12312[(2)] = null);

(statearr_12282_12312[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12267 === (5))){
var inst_12250 = (state_12266[(2)]);
var state_12266__$1 = (function (){var statearr_12283 = state_12266;
(statearr_12283[(11)] = inst_12250);

return statearr_12283;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12266__$1,(12),dchan);
} else {
if((state_val_12267 === (14))){
var inst_12252 = (state_12266[(8)]);
var inst_12257 = cljs.core.apply.call(null,f,inst_12252);
var state_12266__$1 = state_12266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12266__$1,(16),out,inst_12257);
} else {
if((state_val_12267 === (16))){
var inst_12259 = (state_12266[(2)]);
var state_12266__$1 = (function (){var statearr_12284 = state_12266;
(statearr_12284[(12)] = inst_12259);

return statearr_12284;
})();
var statearr_12285_12313 = state_12266__$1;
(statearr_12285_12313[(2)] = null);

(statearr_12285_12313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12267 === (10))){
var inst_12234 = (state_12266[(2)]);
var inst_12235 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_12266__$1 = (function (){var statearr_12286 = state_12266;
(statearr_12286[(13)] = inst_12234);

return statearr_12286;
})();
var statearr_12287_12314 = state_12266__$1;
(statearr_12287_12314[(2)] = inst_12235);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12266__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12267 === (8))){
var inst_12248 = (state_12266[(2)]);
var state_12266__$1 = state_12266;
var statearr_12288_12315 = state_12266__$1;
(statearr_12288_12315[(2)] = inst_12248);

(statearr_12288_12315[(1)] = (5));


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
});})(c__10227__auto___12300,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10115__auto__,c__10227__auto___12300,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10116__auto__ = null;
var cljs$core$async$state_machine__10116__auto____0 = (function (){
var statearr_12292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12292[(0)] = cljs$core$async$state_machine__10116__auto__);

(statearr_12292[(1)] = (1));

return statearr_12292;
});
var cljs$core$async$state_machine__10116__auto____1 = (function (state_12266){
while(true){
var ret_value__10117__auto__ = (function (){try{while(true){
var result__10118__auto__ = switch__10115__auto__.call(null,state_12266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10118__auto__;
}
break;
}
}catch (e12293){if((e12293 instanceof Object)){
var ex__10119__auto__ = e12293;
var statearr_12294_12316 = state_12266;
(statearr_12294_12316[(5)] = ex__10119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12317 = state_12266;
state_12266 = G__12317;
continue;
} else {
return ret_value__10117__auto__;
}
break;
}
});
cljs$core$async$state_machine__10116__auto__ = function(state_12266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10116__auto____1.call(this,state_12266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10116__auto____0;
cljs$core$async$state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10116__auto____1;
return cljs$core$async$state_machine__10116__auto__;
})()
;})(switch__10115__auto__,c__10227__auto___12300,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10229__auto__ = (function (){var statearr_12295 = f__10228__auto__.call(null);
(statearr_12295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10227__auto___12300);

return statearr_12295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10229__auto__);
});})(c__10227__auto___12300,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args12319 = [];
var len__7651__auto___12377 = arguments.length;
var i__7652__auto___12378 = (0);
while(true){
if((i__7652__auto___12378 < len__7651__auto___12377)){
args12319.push((arguments[i__7652__auto___12378]));

var G__12379 = (i__7652__auto___12378 + (1));
i__7652__auto___12378 = G__12379;
continue;
} else {
}
break;
}

var G__12321 = args12319.length;
switch (G__12321) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12319.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10227__auto___12381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10227__auto___12381,out){
return (function (){
var f__10228__auto__ = (function (){var switch__10115__auto__ = ((function (c__10227__auto___12381,out){
return (function (state_12353){
var state_val_12354 = (state_12353[(1)]);
if((state_val_12354 === (7))){
var inst_12333 = (state_12353[(7)]);
var inst_12332 = (state_12353[(8)]);
var inst_12332__$1 = (state_12353[(2)]);
var inst_12333__$1 = cljs.core.nth.call(null,inst_12332__$1,(0),null);
var inst_12334 = cljs.core.nth.call(null,inst_12332__$1,(1),null);
var inst_12335 = (inst_12333__$1 == null);
var state_12353__$1 = (function (){var statearr_12355 = state_12353;
(statearr_12355[(7)] = inst_12333__$1);

(statearr_12355[(8)] = inst_12332__$1);

(statearr_12355[(9)] = inst_12334);

return statearr_12355;
})();
if(cljs.core.truth_(inst_12335)){
var statearr_12356_12382 = state_12353__$1;
(statearr_12356_12382[(1)] = (8));

} else {
var statearr_12357_12383 = state_12353__$1;
(statearr_12357_12383[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12354 === (1))){
var inst_12322 = cljs.core.vec.call(null,chs);
var inst_12323 = inst_12322;
var state_12353__$1 = (function (){var statearr_12358 = state_12353;
(statearr_12358[(10)] = inst_12323);

return statearr_12358;
})();
var statearr_12359_12384 = state_12353__$1;
(statearr_12359_12384[(2)] = null);

(statearr_12359_12384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12354 === (4))){
var inst_12323 = (state_12353[(10)]);
var state_12353__$1 = state_12353;
return cljs.core.async.ioc_alts_BANG_.call(null,state_12353__$1,(7),inst_12323);
} else {
if((state_val_12354 === (6))){
var inst_12349 = (state_12353[(2)]);
var state_12353__$1 = state_12353;
var statearr_12360_12385 = state_12353__$1;
(statearr_12360_12385[(2)] = inst_12349);

(statearr_12360_12385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12354 === (3))){
var inst_12351 = (state_12353[(2)]);
var state_12353__$1 = state_12353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12353__$1,inst_12351);
} else {
if((state_val_12354 === (2))){
var inst_12323 = (state_12353[(10)]);
var inst_12325 = cljs.core.count.call(null,inst_12323);
var inst_12326 = (inst_12325 > (0));
var state_12353__$1 = state_12353;
if(cljs.core.truth_(inst_12326)){
var statearr_12362_12386 = state_12353__$1;
(statearr_12362_12386[(1)] = (4));

} else {
var statearr_12363_12387 = state_12353__$1;
(statearr_12363_12387[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12354 === (11))){
var inst_12323 = (state_12353[(10)]);
var inst_12342 = (state_12353[(2)]);
var tmp12361 = inst_12323;
var inst_12323__$1 = tmp12361;
var state_12353__$1 = (function (){var statearr_12364 = state_12353;
(statearr_12364[(11)] = inst_12342);

(statearr_12364[(10)] = inst_12323__$1);

return statearr_12364;
})();
var statearr_12365_12388 = state_12353__$1;
(statearr_12365_12388[(2)] = null);

(statearr_12365_12388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12354 === (9))){
var inst_12333 = (state_12353[(7)]);
var state_12353__$1 = state_12353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12353__$1,(11),out,inst_12333);
} else {
if((state_val_12354 === (5))){
var inst_12347 = cljs.core.async.close_BANG_.call(null,out);
var state_12353__$1 = state_12353;
var statearr_12366_12389 = state_12353__$1;
(statearr_12366_12389[(2)] = inst_12347);

(statearr_12366_12389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12354 === (10))){
var inst_12345 = (state_12353[(2)]);
var state_12353__$1 = state_12353;
var statearr_12367_12390 = state_12353__$1;
(statearr_12367_12390[(2)] = inst_12345);

(statearr_12367_12390[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12354 === (8))){
var inst_12333 = (state_12353[(7)]);
var inst_12332 = (state_12353[(8)]);
var inst_12323 = (state_12353[(10)]);
var inst_12334 = (state_12353[(9)]);
var inst_12337 = (function (){var cs = inst_12323;
var vec__12328 = inst_12332;
var v = inst_12333;
var c = inst_12334;
return ((function (cs,vec__12328,v,c,inst_12333,inst_12332,inst_12323,inst_12334,state_val_12354,c__10227__auto___12381,out){
return (function (p1__12318_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__12318_SHARP_);
});
;})(cs,vec__12328,v,c,inst_12333,inst_12332,inst_12323,inst_12334,state_val_12354,c__10227__auto___12381,out))
})();
var inst_12338 = cljs.core.filterv.call(null,inst_12337,inst_12323);
var inst_12323__$1 = inst_12338;
var state_12353__$1 = (function (){var statearr_12368 = state_12353;
(statearr_12368[(10)] = inst_12323__$1);

return statearr_12368;
})();
var statearr_12369_12391 = state_12353__$1;
(statearr_12369_12391[(2)] = null);

(statearr_12369_12391[(1)] = (2));


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
});})(c__10227__auto___12381,out))
;
return ((function (switch__10115__auto__,c__10227__auto___12381,out){
return (function() {
var cljs$core$async$state_machine__10116__auto__ = null;
var cljs$core$async$state_machine__10116__auto____0 = (function (){
var statearr_12373 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12373[(0)] = cljs$core$async$state_machine__10116__auto__);

(statearr_12373[(1)] = (1));

return statearr_12373;
});
var cljs$core$async$state_machine__10116__auto____1 = (function (state_12353){
while(true){
var ret_value__10117__auto__ = (function (){try{while(true){
var result__10118__auto__ = switch__10115__auto__.call(null,state_12353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10118__auto__;
}
break;
}
}catch (e12374){if((e12374 instanceof Object)){
var ex__10119__auto__ = e12374;
var statearr_12375_12392 = state_12353;
(statearr_12375_12392[(5)] = ex__10119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12393 = state_12353;
state_12353 = G__12393;
continue;
} else {
return ret_value__10117__auto__;
}
break;
}
});
cljs$core$async$state_machine__10116__auto__ = function(state_12353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10116__auto____1.call(this,state_12353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10116__auto____0;
cljs$core$async$state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10116__auto____1;
return cljs$core$async$state_machine__10116__auto__;
})()
;})(switch__10115__auto__,c__10227__auto___12381,out))
})();
var state__10229__auto__ = (function (){var statearr_12376 = f__10228__auto__.call(null);
(statearr_12376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10227__auto___12381);

return statearr_12376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10229__auto__);
});})(c__10227__auto___12381,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args12394 = [];
var len__7651__auto___12443 = arguments.length;
var i__7652__auto___12444 = (0);
while(true){
if((i__7652__auto___12444 < len__7651__auto___12443)){
args12394.push((arguments[i__7652__auto___12444]));

var G__12445 = (i__7652__auto___12444 + (1));
i__7652__auto___12444 = G__12445;
continue;
} else {
}
break;
}

var G__12396 = args12394.length;
switch (G__12396) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12394.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10227__auto___12447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10227__auto___12447,out){
return (function (){
var f__10228__auto__ = (function (){var switch__10115__auto__ = ((function (c__10227__auto___12447,out){
return (function (state_12420){
var state_val_12421 = (state_12420[(1)]);
if((state_val_12421 === (7))){
var inst_12402 = (state_12420[(7)]);
var inst_12402__$1 = (state_12420[(2)]);
var inst_12403 = (inst_12402__$1 == null);
var inst_12404 = cljs.core.not.call(null,inst_12403);
var state_12420__$1 = (function (){var statearr_12422 = state_12420;
(statearr_12422[(7)] = inst_12402__$1);

return statearr_12422;
})();
if(inst_12404){
var statearr_12423_12448 = state_12420__$1;
(statearr_12423_12448[(1)] = (8));

} else {
var statearr_12424_12449 = state_12420__$1;
(statearr_12424_12449[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (1))){
var inst_12397 = (0);
var state_12420__$1 = (function (){var statearr_12425 = state_12420;
(statearr_12425[(8)] = inst_12397);

return statearr_12425;
})();
var statearr_12426_12450 = state_12420__$1;
(statearr_12426_12450[(2)] = null);

(statearr_12426_12450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (4))){
var state_12420__$1 = state_12420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12420__$1,(7),ch);
} else {
if((state_val_12421 === (6))){
var inst_12415 = (state_12420[(2)]);
var state_12420__$1 = state_12420;
var statearr_12427_12451 = state_12420__$1;
(statearr_12427_12451[(2)] = inst_12415);

(statearr_12427_12451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (3))){
var inst_12417 = (state_12420[(2)]);
var inst_12418 = cljs.core.async.close_BANG_.call(null,out);
var state_12420__$1 = (function (){var statearr_12428 = state_12420;
(statearr_12428[(9)] = inst_12417);

return statearr_12428;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12420__$1,inst_12418);
} else {
if((state_val_12421 === (2))){
var inst_12397 = (state_12420[(8)]);
var inst_12399 = (inst_12397 < n);
var state_12420__$1 = state_12420;
if(cljs.core.truth_(inst_12399)){
var statearr_12429_12452 = state_12420__$1;
(statearr_12429_12452[(1)] = (4));

} else {
var statearr_12430_12453 = state_12420__$1;
(statearr_12430_12453[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (11))){
var inst_12397 = (state_12420[(8)]);
var inst_12407 = (state_12420[(2)]);
var inst_12408 = (inst_12397 + (1));
var inst_12397__$1 = inst_12408;
var state_12420__$1 = (function (){var statearr_12431 = state_12420;
(statearr_12431[(8)] = inst_12397__$1);

(statearr_12431[(10)] = inst_12407);

return statearr_12431;
})();
var statearr_12432_12454 = state_12420__$1;
(statearr_12432_12454[(2)] = null);

(statearr_12432_12454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (9))){
var state_12420__$1 = state_12420;
var statearr_12433_12455 = state_12420__$1;
(statearr_12433_12455[(2)] = null);

(statearr_12433_12455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (5))){
var state_12420__$1 = state_12420;
var statearr_12434_12456 = state_12420__$1;
(statearr_12434_12456[(2)] = null);

(statearr_12434_12456[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (10))){
var inst_12412 = (state_12420[(2)]);
var state_12420__$1 = state_12420;
var statearr_12435_12457 = state_12420__$1;
(statearr_12435_12457[(2)] = inst_12412);

(statearr_12435_12457[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12421 === (8))){
var inst_12402 = (state_12420[(7)]);
var state_12420__$1 = state_12420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12420__$1,(11),out,inst_12402);
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
});})(c__10227__auto___12447,out))
;
return ((function (switch__10115__auto__,c__10227__auto___12447,out){
return (function() {
var cljs$core$async$state_machine__10116__auto__ = null;
var cljs$core$async$state_machine__10116__auto____0 = (function (){
var statearr_12439 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12439[(0)] = cljs$core$async$state_machine__10116__auto__);

(statearr_12439[(1)] = (1));

return statearr_12439;
});
var cljs$core$async$state_machine__10116__auto____1 = (function (state_12420){
while(true){
var ret_value__10117__auto__ = (function (){try{while(true){
var result__10118__auto__ = switch__10115__auto__.call(null,state_12420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10118__auto__;
}
break;
}
}catch (e12440){if((e12440 instanceof Object)){
var ex__10119__auto__ = e12440;
var statearr_12441_12458 = state_12420;
(statearr_12441_12458[(5)] = ex__10119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12459 = state_12420;
state_12420 = G__12459;
continue;
} else {
return ret_value__10117__auto__;
}
break;
}
});
cljs$core$async$state_machine__10116__auto__ = function(state_12420){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10116__auto____1.call(this,state_12420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10116__auto____0;
cljs$core$async$state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10116__auto____1;
return cljs$core$async$state_machine__10116__auto__;
})()
;})(switch__10115__auto__,c__10227__auto___12447,out))
})();
var state__10229__auto__ = (function (){var statearr_12442 = f__10228__auto__.call(null);
(statearr_12442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10227__auto___12447);

return statearr_12442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10229__auto__);
});})(c__10227__auto___12447,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async12467 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12467 = (function (f,ch,meta12468){
this.f = f;
this.ch = ch;
this.meta12468 = meta12468;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12469,meta12468__$1){
var self__ = this;
var _12469__$1 = this;
return (new cljs.core.async.t_cljs$core$async12467(self__.f,self__.ch,meta12468__$1));
});

cljs.core.async.t_cljs$core$async12467.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12469){
var self__ = this;
var _12469__$1 = this;
return self__.meta12468;
});

cljs.core.async.t_cljs$core$async12467.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12467.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12467.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12467.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12467.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async12470 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12470 = (function (f,ch,meta12468,_,fn1,meta12471){
this.f = f;
this.ch = ch;
this.meta12468 = meta12468;
this._ = _;
this.fn1 = fn1;
this.meta12471 = meta12471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12472,meta12471__$1){
var self__ = this;
var _12472__$1 = this;
return (new cljs.core.async.t_cljs$core$async12470(self__.f,self__.ch,self__.meta12468,self__._,self__.fn1,meta12471__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async12470.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12472){
var self__ = this;
var _12472__$1 = this;
return self__.meta12471;
});})(___$1))
;

cljs.core.async.t_cljs$core$async12470.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12470.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12470.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async12470.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__12460_SHARP_){
return f1.call(null,(((p1__12460_SHARP_ == null))?null:self__.f.call(null,p1__12460_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async12470.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12468","meta12468",-1419091417,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12467","cljs.core.async/t_cljs$core$async12467",261769095,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12471","meta12471",-844063065,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12470.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12470.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12470";

cljs.core.async.t_cljs$core$async12470.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async12470");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async12470 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12470(f__$1,ch__$1,meta12468__$1,___$2,fn1__$1,meta12471){
return (new cljs.core.async.t_cljs$core$async12470(f__$1,ch__$1,meta12468__$1,___$2,fn1__$1,meta12471));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async12470(self__.f,self__.ch,self__.meta12468,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6531__auto__ = ret;
if(cljs.core.truth_(and__6531__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6531__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async12467.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12467.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async12467.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12468","meta12468",-1419091417,null)], null);
});

cljs.core.async.t_cljs$core$async12467.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12467.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12467";

cljs.core.async.t_cljs$core$async12467.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async12467");
});

cljs.core.async.__GT_t_cljs$core$async12467 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12467(f__$1,ch__$1,meta12468){
return (new cljs.core.async.t_cljs$core$async12467(f__$1,ch__$1,meta12468));
});

}

return (new cljs.core.async.t_cljs$core$async12467(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async12476 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12476 = (function (f,ch,meta12477){
this.f = f;
this.ch = ch;
this.meta12477 = meta12477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12478,meta12477__$1){
var self__ = this;
var _12478__$1 = this;
return (new cljs.core.async.t_cljs$core$async12476(self__.f,self__.ch,meta12477__$1));
});

cljs.core.async.t_cljs$core$async12476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12478){
var self__ = this;
var _12478__$1 = this;
return self__.meta12477;
});

cljs.core.async.t_cljs$core$async12476.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12476.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12476.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12476.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12476.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12476.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async12476.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12477","meta12477",-1824420470,null)], null);
});

cljs.core.async.t_cljs$core$async12476.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12476";

cljs.core.async.t_cljs$core$async12476.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async12476");
});

cljs.core.async.__GT_t_cljs$core$async12476 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12476(f__$1,ch__$1,meta12477){
return (new cljs.core.async.t_cljs$core$async12476(f__$1,ch__$1,meta12477));
});

}

return (new cljs.core.async.t_cljs$core$async12476(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async12482 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12482 = (function (p,ch,meta12483){
this.p = p;
this.ch = ch;
this.meta12483 = meta12483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12484,meta12483__$1){
var self__ = this;
var _12484__$1 = this;
return (new cljs.core.async.t_cljs$core$async12482(self__.p,self__.ch,meta12483__$1));
});

cljs.core.async.t_cljs$core$async12482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12484){
var self__ = this;
var _12484__$1 = this;
return self__.meta12483;
});

cljs.core.async.t_cljs$core$async12482.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12482.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12482.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12482.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12482.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12482.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12482.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async12482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12483","meta12483",1289639288,null)], null);
});

cljs.core.async.t_cljs$core$async12482.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12482";

cljs.core.async.t_cljs$core$async12482.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async12482");
});

cljs.core.async.__GT_t_cljs$core$async12482 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12482(p__$1,ch__$1,meta12483){
return (new cljs.core.async.t_cljs$core$async12482(p__$1,ch__$1,meta12483));
});

}

return (new cljs.core.async.t_cljs$core$async12482(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args12485 = [];
var len__7651__auto___12529 = arguments.length;
var i__7652__auto___12530 = (0);
while(true){
if((i__7652__auto___12530 < len__7651__auto___12529)){
args12485.push((arguments[i__7652__auto___12530]));

var G__12531 = (i__7652__auto___12530 + (1));
i__7652__auto___12530 = G__12531;
continue;
} else {
}
break;
}

var G__12487 = args12485.length;
switch (G__12487) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12485.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10227__auto___12533 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10227__auto___12533,out){
return (function (){
var f__10228__auto__ = (function (){var switch__10115__auto__ = ((function (c__10227__auto___12533,out){
return (function (state_12508){
var state_val_12509 = (state_12508[(1)]);
if((state_val_12509 === (7))){
var inst_12504 = (state_12508[(2)]);
var state_12508__$1 = state_12508;
var statearr_12510_12534 = state_12508__$1;
(statearr_12510_12534[(2)] = inst_12504);

(statearr_12510_12534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12509 === (1))){
var state_12508__$1 = state_12508;
var statearr_12511_12535 = state_12508__$1;
(statearr_12511_12535[(2)] = null);

(statearr_12511_12535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12509 === (4))){
var inst_12490 = (state_12508[(7)]);
var inst_12490__$1 = (state_12508[(2)]);
var inst_12491 = (inst_12490__$1 == null);
var state_12508__$1 = (function (){var statearr_12512 = state_12508;
(statearr_12512[(7)] = inst_12490__$1);

return statearr_12512;
})();
if(cljs.core.truth_(inst_12491)){
var statearr_12513_12536 = state_12508__$1;
(statearr_12513_12536[(1)] = (5));

} else {
var statearr_12514_12537 = state_12508__$1;
(statearr_12514_12537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12509 === (6))){
var inst_12490 = (state_12508[(7)]);
var inst_12495 = p.call(null,inst_12490);
var state_12508__$1 = state_12508;
if(cljs.core.truth_(inst_12495)){
var statearr_12515_12538 = state_12508__$1;
(statearr_12515_12538[(1)] = (8));

} else {
var statearr_12516_12539 = state_12508__$1;
(statearr_12516_12539[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12509 === (3))){
var inst_12506 = (state_12508[(2)]);
var state_12508__$1 = state_12508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12508__$1,inst_12506);
} else {
if((state_val_12509 === (2))){
var state_12508__$1 = state_12508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12508__$1,(4),ch);
} else {
if((state_val_12509 === (11))){
var inst_12498 = (state_12508[(2)]);
var state_12508__$1 = state_12508;
var statearr_12517_12540 = state_12508__$1;
(statearr_12517_12540[(2)] = inst_12498);

(statearr_12517_12540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12509 === (9))){
var state_12508__$1 = state_12508;
var statearr_12518_12541 = state_12508__$1;
(statearr_12518_12541[(2)] = null);

(statearr_12518_12541[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12509 === (5))){
var inst_12493 = cljs.core.async.close_BANG_.call(null,out);
var state_12508__$1 = state_12508;
var statearr_12519_12542 = state_12508__$1;
(statearr_12519_12542[(2)] = inst_12493);

(statearr_12519_12542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12509 === (10))){
var inst_12501 = (state_12508[(2)]);
var state_12508__$1 = (function (){var statearr_12520 = state_12508;
(statearr_12520[(8)] = inst_12501);

return statearr_12520;
})();
var statearr_12521_12543 = state_12508__$1;
(statearr_12521_12543[(2)] = null);

(statearr_12521_12543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12509 === (8))){
var inst_12490 = (state_12508[(7)]);
var state_12508__$1 = state_12508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12508__$1,(11),out,inst_12490);
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
});})(c__10227__auto___12533,out))
;
return ((function (switch__10115__auto__,c__10227__auto___12533,out){
return (function() {
var cljs$core$async$state_machine__10116__auto__ = null;
var cljs$core$async$state_machine__10116__auto____0 = (function (){
var statearr_12525 = [null,null,null,null,null,null,null,null,null];
(statearr_12525[(0)] = cljs$core$async$state_machine__10116__auto__);

(statearr_12525[(1)] = (1));

return statearr_12525;
});
var cljs$core$async$state_machine__10116__auto____1 = (function (state_12508){
while(true){
var ret_value__10117__auto__ = (function (){try{while(true){
var result__10118__auto__ = switch__10115__auto__.call(null,state_12508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10118__auto__;
}
break;
}
}catch (e12526){if((e12526 instanceof Object)){
var ex__10119__auto__ = e12526;
var statearr_12527_12544 = state_12508;
(statearr_12527_12544[(5)] = ex__10119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12545 = state_12508;
state_12508 = G__12545;
continue;
} else {
return ret_value__10117__auto__;
}
break;
}
});
cljs$core$async$state_machine__10116__auto__ = function(state_12508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10116__auto____1.call(this,state_12508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10116__auto____0;
cljs$core$async$state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10116__auto____1;
return cljs$core$async$state_machine__10116__auto__;
})()
;})(switch__10115__auto__,c__10227__auto___12533,out))
})();
var state__10229__auto__ = (function (){var statearr_12528 = f__10228__auto__.call(null);
(statearr_12528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10227__auto___12533);

return statearr_12528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10229__auto__);
});})(c__10227__auto___12533,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args12546 = [];
var len__7651__auto___12549 = arguments.length;
var i__7652__auto___12550 = (0);
while(true){
if((i__7652__auto___12550 < len__7651__auto___12549)){
args12546.push((arguments[i__7652__auto___12550]));

var G__12551 = (i__7652__auto___12550 + (1));
i__7652__auto___12550 = G__12551;
continue;
} else {
}
break;
}

var G__12548 = args12546.length;
switch (G__12548) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12546.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__10227__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10227__auto__){
return (function (){
var f__10228__auto__ = (function (){var switch__10115__auto__ = ((function (c__10227__auto__){
return (function (state_12718){
var state_val_12719 = (state_12718[(1)]);
if((state_val_12719 === (7))){
var inst_12714 = (state_12718[(2)]);
var state_12718__$1 = state_12718;
var statearr_12720_12761 = state_12718__$1;
(statearr_12720_12761[(2)] = inst_12714);

(statearr_12720_12761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12719 === (20))){
var inst_12684 = (state_12718[(7)]);
var inst_12695 = (state_12718[(2)]);
var inst_12696 = cljs.core.next.call(null,inst_12684);
var inst_12670 = inst_12696;
var inst_12671 = null;
var inst_12672 = (0);
var inst_12673 = (0);
var state_12718__$1 = (function (){var statearr_12721 = state_12718;
(statearr_12721[(8)] = inst_12695);

(statearr_12721[(9)] = inst_12672);

(statearr_12721[(10)] = inst_12673);

(statearr_12721[(11)] = inst_12670);

(statearr_12721[(12)] = inst_12671);

return statearr_12721;
})();
var statearr_12722_12762 = state_12718__$1;
(statearr_12722_12762[(2)] = null);

(statearr_12722_12762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12719 === (1))){
var state_12718__$1 = state_12718;
var statearr_12723_12763 = state_12718__$1;
(statearr_12723_12763[(2)] = null);

(statearr_12723_12763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12719 === (4))){
var inst_12659 = (state_12718[(13)]);
var inst_12659__$1 = (state_12718[(2)]);
var inst_12660 = (inst_12659__$1 == null);
var state_12718__$1 = (function (){var statearr_12724 = state_12718;
(statearr_12724[(13)] = inst_12659__$1);

return statearr_12724;
})();
if(cljs.core.truth_(inst_12660)){
var statearr_12725_12764 = state_12718__$1;
(statearr_12725_12764[(1)] = (5));

} else {
var statearr_12726_12765 = state_12718__$1;
(statearr_12726_12765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12719 === (15))){
var state_12718__$1 = state_12718;
var statearr_12730_12766 = state_12718__$1;
(statearr_12730_12766[(2)] = null);

(statearr_12730_12766[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12719 === (21))){
var state_12718__$1 = state_12718;
var statearr_12731_12767 = state_12718__$1;
(statearr_12731_12767[(2)] = null);

(statearr_12731_12767[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12719 === (13))){
var inst_12672 = (state_12718[(9)]);
var inst_12673 = (state_12718[(10)]);
var inst_12670 = (state_12718[(11)]);
var inst_12671 = (state_12718[(12)]);
var inst_12680 = (state_12718[(2)]);
var inst_12681 = (inst_12673 + (1));
var tmp12727 = inst_12672;
var tmp12728 = inst_12670;
var tmp12729 = inst_12671;
var inst_12670__$1 = tmp12728;
var inst_12671__$1 = tmp12729;
var inst_12672__$1 = tmp12727;
var inst_12673__$1 = inst_12681;
var state_12718__$1 = (function (){var statearr_12732 = state_12718;
(statearr_12732[(9)] = inst_12672__$1);

(statearr_12732[(10)] = inst_12673__$1);

(statearr_12732[(14)] = inst_12680);

(statearr_12732[(11)] = inst_12670__$1);

(statearr_12732[(12)] = inst_12671__$1);

return statearr_12732;
})();
var statearr_12733_12768 = state_12718__$1;
(statearr_12733_12768[(2)] = null);

(statearr_12733_12768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12719 === (22))){
var state_12718__$1 = state_12718;
var statearr_12734_12769 = state_12718__$1;
(statearr_12734_12769[(2)] = null);

(statearr_12734_12769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12719 === (6))){
var inst_12659 = (state_12718[(13)]);
var inst_12668 = f.call(null,inst_12659);
var inst_12669 = cljs.core.seq.call(null,inst_12668);
var inst_12670 = inst_12669;
var inst_12671 = null;
var inst_12672 = (0);
var inst_12673 = (0);
var state_12718__$1 = (function (){var statearr_12735 = state_12718;
(statearr_12735[(9)] = inst_12672);

(statearr_12735[(10)] = inst_12673);

(statearr_12735[(11)] = inst_12670);

(statearr_12735[(12)] = inst_12671);

return statearr_12735;
})();
var statearr_12736_12770 = state_12718__$1;
(statearr_12736_12770[(2)] = null);

(statearr_12736_12770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12719 === (17))){
var inst_12684 = (state_12718[(7)]);
var inst_12688 = cljs.core.chunk_first.call(null,inst_12684);
var inst_12689 = cljs.core.chunk_rest.call(null,inst_12684);
var inst_12690 = cljs.core.count.call(null,inst_12688);
var inst_12670 = inst_12689;
var inst_12671 = inst_12688;
var inst_12672 = inst_12690;
var inst_12673 = (0);
var state_12718__$1 = (function (){var statearr_12737 = state_12718;
(statearr_12737[(9)] = inst_12672);

(statearr_12737[(10)] = inst_12673);

(statearr_12737[(11)] = inst_12670);

(statearr_12737[(12)] = inst_12671);

return statearr_12737;
})();
var statearr_12738_12771 = state_12718__$1;
(statearr_12738_12771[(2)] = null);

(statearr_12738_12771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12719 === (3))){
var inst_12716 = (state_12718[(2)]);
var state_12718__$1 = state_12718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12718__$1,inst_12716);
} else {
if((state_val_12719 === (12))){
var inst_12704 = (state_12718[(2)]);
var state_12718__$1 = state_12718;
var statearr_12739_12772 = state_12718__$1;
(statearr_12739_12772[(2)] = inst_12704);

(statearr_12739_12772[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12719 === (2))){
var state_12718__$1 = state_12718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12718__$1,(4),in$);
} else {
if((state_val_12719 === (23))){
var inst_12712 = (state_12718[(2)]);
var state_12718__$1 = state_12718;
var statearr_12740_12773 = state_12718__$1;
(statearr_12740_12773[(2)] = inst_12712);

(statearr_12740_12773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12719 === (19))){
var inst_12699 = (state_12718[(2)]);
var state_12718__$1 = state_12718;
var statearr_12741_12774 = state_12718__$1;
(statearr_12741_12774[(2)] = inst_12699);

(statearr_12741_12774[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12719 === (11))){
var inst_12684 = (state_12718[(7)]);
var inst_12670 = (state_12718[(11)]);
var inst_12684__$1 = cljs.core.seq.call(null,inst_12670);
var state_12718__$1 = (function (){var statearr_12742 = state_12718;
(statearr_12742[(7)] = inst_12684__$1);

return statearr_12742;
})();
if(inst_12684__$1){
var statearr_12743_12775 = state_12718__$1;
(statearr_12743_12775[(1)] = (14));

} else {
var statearr_12744_12776 = state_12718__$1;
(statearr_12744_12776[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12719 === (9))){
var inst_12706 = (state_12718[(2)]);
var inst_12707 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_12718__$1 = (function (){var statearr_12745 = state_12718;
(statearr_12745[(15)] = inst_12706);

return statearr_12745;
})();
if(cljs.core.truth_(inst_12707)){
var statearr_12746_12777 = state_12718__$1;
(statearr_12746_12777[(1)] = (21));

} else {
var statearr_12747_12778 = state_12718__$1;
(statearr_12747_12778[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12719 === (5))){
var inst_12662 = cljs.core.async.close_BANG_.call(null,out);
var state_12718__$1 = state_12718;
var statearr_12748_12779 = state_12718__$1;
(statearr_12748_12779[(2)] = inst_12662);

(statearr_12748_12779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12719 === (14))){
var inst_12684 = (state_12718[(7)]);
var inst_12686 = cljs.core.chunked_seq_QMARK_.call(null,inst_12684);
var state_12718__$1 = state_12718;
if(inst_12686){
var statearr_12749_12780 = state_12718__$1;
(statearr_12749_12780[(1)] = (17));

} else {
var statearr_12750_12781 = state_12718__$1;
(statearr_12750_12781[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12719 === (16))){
var inst_12702 = (state_12718[(2)]);
var state_12718__$1 = state_12718;
var statearr_12751_12782 = state_12718__$1;
(statearr_12751_12782[(2)] = inst_12702);

(statearr_12751_12782[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12719 === (10))){
var inst_12673 = (state_12718[(10)]);
var inst_12671 = (state_12718[(12)]);
var inst_12678 = cljs.core._nth.call(null,inst_12671,inst_12673);
var state_12718__$1 = state_12718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12718__$1,(13),out,inst_12678);
} else {
if((state_val_12719 === (18))){
var inst_12684 = (state_12718[(7)]);
var inst_12693 = cljs.core.first.call(null,inst_12684);
var state_12718__$1 = state_12718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12718__$1,(20),out,inst_12693);
} else {
if((state_val_12719 === (8))){
var inst_12672 = (state_12718[(9)]);
var inst_12673 = (state_12718[(10)]);
var inst_12675 = (inst_12673 < inst_12672);
var inst_12676 = inst_12675;
var state_12718__$1 = state_12718;
if(cljs.core.truth_(inst_12676)){
var statearr_12752_12783 = state_12718__$1;
(statearr_12752_12783[(1)] = (10));

} else {
var statearr_12753_12784 = state_12718__$1;
(statearr_12753_12784[(1)] = (11));

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
});})(c__10227__auto__))
;
return ((function (switch__10115__auto__,c__10227__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10116__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10116__auto____0 = (function (){
var statearr_12757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12757[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10116__auto__);

(statearr_12757[(1)] = (1));

return statearr_12757;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10116__auto____1 = (function (state_12718){
while(true){
var ret_value__10117__auto__ = (function (){try{while(true){
var result__10118__auto__ = switch__10115__auto__.call(null,state_12718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10118__auto__;
}
break;
}
}catch (e12758){if((e12758 instanceof Object)){
var ex__10119__auto__ = e12758;
var statearr_12759_12785 = state_12718;
(statearr_12759_12785[(5)] = ex__10119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12786 = state_12718;
state_12718 = G__12786;
continue;
} else {
return ret_value__10117__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10116__auto__ = function(state_12718){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10116__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10116__auto____1.call(this,state_12718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10116__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10116__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10116__auto__;
})()
;})(switch__10115__auto__,c__10227__auto__))
})();
var state__10229__auto__ = (function (){var statearr_12760 = f__10228__auto__.call(null);
(statearr_12760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10227__auto__);

return statearr_12760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10229__auto__);
});})(c__10227__auto__))
);

return c__10227__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args12787 = [];
var len__7651__auto___12790 = arguments.length;
var i__7652__auto___12791 = (0);
while(true){
if((i__7652__auto___12791 < len__7651__auto___12790)){
args12787.push((arguments[i__7652__auto___12791]));

var G__12792 = (i__7652__auto___12791 + (1));
i__7652__auto___12791 = G__12792;
continue;
} else {
}
break;
}

var G__12789 = args12787.length;
switch (G__12789) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12787.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args12794 = [];
var len__7651__auto___12797 = arguments.length;
var i__7652__auto___12798 = (0);
while(true){
if((i__7652__auto___12798 < len__7651__auto___12797)){
args12794.push((arguments[i__7652__auto___12798]));

var G__12799 = (i__7652__auto___12798 + (1));
i__7652__auto___12798 = G__12799;
continue;
} else {
}
break;
}

var G__12796 = args12794.length;
switch (G__12796) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12794.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args12801 = [];
var len__7651__auto___12852 = arguments.length;
var i__7652__auto___12853 = (0);
while(true){
if((i__7652__auto___12853 < len__7651__auto___12852)){
args12801.push((arguments[i__7652__auto___12853]));

var G__12854 = (i__7652__auto___12853 + (1));
i__7652__auto___12853 = G__12854;
continue;
} else {
}
break;
}

var G__12803 = args12801.length;
switch (G__12803) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12801.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10227__auto___12856 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10227__auto___12856,out){
return (function (){
var f__10228__auto__ = (function (){var switch__10115__auto__ = ((function (c__10227__auto___12856,out){
return (function (state_12827){
var state_val_12828 = (state_12827[(1)]);
if((state_val_12828 === (7))){
var inst_12822 = (state_12827[(2)]);
var state_12827__$1 = state_12827;
var statearr_12829_12857 = state_12827__$1;
(statearr_12829_12857[(2)] = inst_12822);

(statearr_12829_12857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12828 === (1))){
var inst_12804 = null;
var state_12827__$1 = (function (){var statearr_12830 = state_12827;
(statearr_12830[(7)] = inst_12804);

return statearr_12830;
})();
var statearr_12831_12858 = state_12827__$1;
(statearr_12831_12858[(2)] = null);

(statearr_12831_12858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12828 === (4))){
var inst_12807 = (state_12827[(8)]);
var inst_12807__$1 = (state_12827[(2)]);
var inst_12808 = (inst_12807__$1 == null);
var inst_12809 = cljs.core.not.call(null,inst_12808);
var state_12827__$1 = (function (){var statearr_12832 = state_12827;
(statearr_12832[(8)] = inst_12807__$1);

return statearr_12832;
})();
if(inst_12809){
var statearr_12833_12859 = state_12827__$1;
(statearr_12833_12859[(1)] = (5));

} else {
var statearr_12834_12860 = state_12827__$1;
(statearr_12834_12860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12828 === (6))){
var state_12827__$1 = state_12827;
var statearr_12835_12861 = state_12827__$1;
(statearr_12835_12861[(2)] = null);

(statearr_12835_12861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12828 === (3))){
var inst_12824 = (state_12827[(2)]);
var inst_12825 = cljs.core.async.close_BANG_.call(null,out);
var state_12827__$1 = (function (){var statearr_12836 = state_12827;
(statearr_12836[(9)] = inst_12824);

return statearr_12836;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12827__$1,inst_12825);
} else {
if((state_val_12828 === (2))){
var state_12827__$1 = state_12827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12827__$1,(4),ch);
} else {
if((state_val_12828 === (11))){
var inst_12807 = (state_12827[(8)]);
var inst_12816 = (state_12827[(2)]);
var inst_12804 = inst_12807;
var state_12827__$1 = (function (){var statearr_12837 = state_12827;
(statearr_12837[(7)] = inst_12804);

(statearr_12837[(10)] = inst_12816);

return statearr_12837;
})();
var statearr_12838_12862 = state_12827__$1;
(statearr_12838_12862[(2)] = null);

(statearr_12838_12862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12828 === (9))){
var inst_12807 = (state_12827[(8)]);
var state_12827__$1 = state_12827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12827__$1,(11),out,inst_12807);
} else {
if((state_val_12828 === (5))){
var inst_12804 = (state_12827[(7)]);
var inst_12807 = (state_12827[(8)]);
var inst_12811 = cljs.core._EQ_.call(null,inst_12807,inst_12804);
var state_12827__$1 = state_12827;
if(inst_12811){
var statearr_12840_12863 = state_12827__$1;
(statearr_12840_12863[(1)] = (8));

} else {
var statearr_12841_12864 = state_12827__$1;
(statearr_12841_12864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12828 === (10))){
var inst_12819 = (state_12827[(2)]);
var state_12827__$1 = state_12827;
var statearr_12842_12865 = state_12827__$1;
(statearr_12842_12865[(2)] = inst_12819);

(statearr_12842_12865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12828 === (8))){
var inst_12804 = (state_12827[(7)]);
var tmp12839 = inst_12804;
var inst_12804__$1 = tmp12839;
var state_12827__$1 = (function (){var statearr_12843 = state_12827;
(statearr_12843[(7)] = inst_12804__$1);

return statearr_12843;
})();
var statearr_12844_12866 = state_12827__$1;
(statearr_12844_12866[(2)] = null);

(statearr_12844_12866[(1)] = (2));


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
});})(c__10227__auto___12856,out))
;
return ((function (switch__10115__auto__,c__10227__auto___12856,out){
return (function() {
var cljs$core$async$state_machine__10116__auto__ = null;
var cljs$core$async$state_machine__10116__auto____0 = (function (){
var statearr_12848 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12848[(0)] = cljs$core$async$state_machine__10116__auto__);

(statearr_12848[(1)] = (1));

return statearr_12848;
});
var cljs$core$async$state_machine__10116__auto____1 = (function (state_12827){
while(true){
var ret_value__10117__auto__ = (function (){try{while(true){
var result__10118__auto__ = switch__10115__auto__.call(null,state_12827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10118__auto__;
}
break;
}
}catch (e12849){if((e12849 instanceof Object)){
var ex__10119__auto__ = e12849;
var statearr_12850_12867 = state_12827;
(statearr_12850_12867[(5)] = ex__10119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12868 = state_12827;
state_12827 = G__12868;
continue;
} else {
return ret_value__10117__auto__;
}
break;
}
});
cljs$core$async$state_machine__10116__auto__ = function(state_12827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10116__auto____1.call(this,state_12827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10116__auto____0;
cljs$core$async$state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10116__auto____1;
return cljs$core$async$state_machine__10116__auto__;
})()
;})(switch__10115__auto__,c__10227__auto___12856,out))
})();
var state__10229__auto__ = (function (){var statearr_12851 = f__10228__auto__.call(null);
(statearr_12851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10227__auto___12856);

return statearr_12851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10229__auto__);
});})(c__10227__auto___12856,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args12869 = [];
var len__7651__auto___12939 = arguments.length;
var i__7652__auto___12940 = (0);
while(true){
if((i__7652__auto___12940 < len__7651__auto___12939)){
args12869.push((arguments[i__7652__auto___12940]));

var G__12941 = (i__7652__auto___12940 + (1));
i__7652__auto___12940 = G__12941;
continue;
} else {
}
break;
}

var G__12871 = args12869.length;
switch (G__12871) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12869.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10227__auto___12943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10227__auto___12943,out){
return (function (){
var f__10228__auto__ = (function (){var switch__10115__auto__ = ((function (c__10227__auto___12943,out){
return (function (state_12909){
var state_val_12910 = (state_12909[(1)]);
if((state_val_12910 === (7))){
var inst_12905 = (state_12909[(2)]);
var state_12909__$1 = state_12909;
var statearr_12911_12944 = state_12909__$1;
(statearr_12911_12944[(2)] = inst_12905);

(statearr_12911_12944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12910 === (1))){
var inst_12872 = (new Array(n));
var inst_12873 = inst_12872;
var inst_12874 = (0);
var state_12909__$1 = (function (){var statearr_12912 = state_12909;
(statearr_12912[(7)] = inst_12874);

(statearr_12912[(8)] = inst_12873);

return statearr_12912;
})();
var statearr_12913_12945 = state_12909__$1;
(statearr_12913_12945[(2)] = null);

(statearr_12913_12945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12910 === (4))){
var inst_12877 = (state_12909[(9)]);
var inst_12877__$1 = (state_12909[(2)]);
var inst_12878 = (inst_12877__$1 == null);
var inst_12879 = cljs.core.not.call(null,inst_12878);
var state_12909__$1 = (function (){var statearr_12914 = state_12909;
(statearr_12914[(9)] = inst_12877__$1);

return statearr_12914;
})();
if(inst_12879){
var statearr_12915_12946 = state_12909__$1;
(statearr_12915_12946[(1)] = (5));

} else {
var statearr_12916_12947 = state_12909__$1;
(statearr_12916_12947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12910 === (15))){
var inst_12899 = (state_12909[(2)]);
var state_12909__$1 = state_12909;
var statearr_12917_12948 = state_12909__$1;
(statearr_12917_12948[(2)] = inst_12899);

(statearr_12917_12948[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12910 === (13))){
var state_12909__$1 = state_12909;
var statearr_12918_12949 = state_12909__$1;
(statearr_12918_12949[(2)] = null);

(statearr_12918_12949[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12910 === (6))){
var inst_12874 = (state_12909[(7)]);
var inst_12895 = (inst_12874 > (0));
var state_12909__$1 = state_12909;
if(cljs.core.truth_(inst_12895)){
var statearr_12919_12950 = state_12909__$1;
(statearr_12919_12950[(1)] = (12));

} else {
var statearr_12920_12951 = state_12909__$1;
(statearr_12920_12951[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12910 === (3))){
var inst_12907 = (state_12909[(2)]);
var state_12909__$1 = state_12909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12909__$1,inst_12907);
} else {
if((state_val_12910 === (12))){
var inst_12873 = (state_12909[(8)]);
var inst_12897 = cljs.core.vec.call(null,inst_12873);
var state_12909__$1 = state_12909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12909__$1,(15),out,inst_12897);
} else {
if((state_val_12910 === (2))){
var state_12909__$1 = state_12909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12909__$1,(4),ch);
} else {
if((state_val_12910 === (11))){
var inst_12889 = (state_12909[(2)]);
var inst_12890 = (new Array(n));
var inst_12873 = inst_12890;
var inst_12874 = (0);
var state_12909__$1 = (function (){var statearr_12921 = state_12909;
(statearr_12921[(7)] = inst_12874);

(statearr_12921[(8)] = inst_12873);

(statearr_12921[(10)] = inst_12889);

return statearr_12921;
})();
var statearr_12922_12952 = state_12909__$1;
(statearr_12922_12952[(2)] = null);

(statearr_12922_12952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12910 === (9))){
var inst_12873 = (state_12909[(8)]);
var inst_12887 = cljs.core.vec.call(null,inst_12873);
var state_12909__$1 = state_12909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12909__$1,(11),out,inst_12887);
} else {
if((state_val_12910 === (5))){
var inst_12882 = (state_12909[(11)]);
var inst_12877 = (state_12909[(9)]);
var inst_12874 = (state_12909[(7)]);
var inst_12873 = (state_12909[(8)]);
var inst_12881 = (inst_12873[inst_12874] = inst_12877);
var inst_12882__$1 = (inst_12874 + (1));
var inst_12883 = (inst_12882__$1 < n);
var state_12909__$1 = (function (){var statearr_12923 = state_12909;
(statearr_12923[(11)] = inst_12882__$1);

(statearr_12923[(12)] = inst_12881);

return statearr_12923;
})();
if(cljs.core.truth_(inst_12883)){
var statearr_12924_12953 = state_12909__$1;
(statearr_12924_12953[(1)] = (8));

} else {
var statearr_12925_12954 = state_12909__$1;
(statearr_12925_12954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12910 === (14))){
var inst_12902 = (state_12909[(2)]);
var inst_12903 = cljs.core.async.close_BANG_.call(null,out);
var state_12909__$1 = (function (){var statearr_12927 = state_12909;
(statearr_12927[(13)] = inst_12902);

return statearr_12927;
})();
var statearr_12928_12955 = state_12909__$1;
(statearr_12928_12955[(2)] = inst_12903);

(statearr_12928_12955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12910 === (10))){
var inst_12893 = (state_12909[(2)]);
var state_12909__$1 = state_12909;
var statearr_12929_12956 = state_12909__$1;
(statearr_12929_12956[(2)] = inst_12893);

(statearr_12929_12956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12910 === (8))){
var inst_12882 = (state_12909[(11)]);
var inst_12873 = (state_12909[(8)]);
var tmp12926 = inst_12873;
var inst_12873__$1 = tmp12926;
var inst_12874 = inst_12882;
var state_12909__$1 = (function (){var statearr_12930 = state_12909;
(statearr_12930[(7)] = inst_12874);

(statearr_12930[(8)] = inst_12873__$1);

return statearr_12930;
})();
var statearr_12931_12957 = state_12909__$1;
(statearr_12931_12957[(2)] = null);

(statearr_12931_12957[(1)] = (2));


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
});})(c__10227__auto___12943,out))
;
return ((function (switch__10115__auto__,c__10227__auto___12943,out){
return (function() {
var cljs$core$async$state_machine__10116__auto__ = null;
var cljs$core$async$state_machine__10116__auto____0 = (function (){
var statearr_12935 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12935[(0)] = cljs$core$async$state_machine__10116__auto__);

(statearr_12935[(1)] = (1));

return statearr_12935;
});
var cljs$core$async$state_machine__10116__auto____1 = (function (state_12909){
while(true){
var ret_value__10117__auto__ = (function (){try{while(true){
var result__10118__auto__ = switch__10115__auto__.call(null,state_12909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10118__auto__;
}
break;
}
}catch (e12936){if((e12936 instanceof Object)){
var ex__10119__auto__ = e12936;
var statearr_12937_12958 = state_12909;
(statearr_12937_12958[(5)] = ex__10119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12959 = state_12909;
state_12909 = G__12959;
continue;
} else {
return ret_value__10117__auto__;
}
break;
}
});
cljs$core$async$state_machine__10116__auto__ = function(state_12909){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10116__auto____1.call(this,state_12909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10116__auto____0;
cljs$core$async$state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10116__auto____1;
return cljs$core$async$state_machine__10116__auto__;
})()
;})(switch__10115__auto__,c__10227__auto___12943,out))
})();
var state__10229__auto__ = (function (){var statearr_12938 = f__10228__auto__.call(null);
(statearr_12938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10227__auto___12943);

return statearr_12938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10229__auto__);
});})(c__10227__auto___12943,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args12960 = [];
var len__7651__auto___13034 = arguments.length;
var i__7652__auto___13035 = (0);
while(true){
if((i__7652__auto___13035 < len__7651__auto___13034)){
args12960.push((arguments[i__7652__auto___13035]));

var G__13036 = (i__7652__auto___13035 + (1));
i__7652__auto___13035 = G__13036;
continue;
} else {
}
break;
}

var G__12962 = args12960.length;
switch (G__12962) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12960.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10227__auto___13038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10227__auto___13038,out){
return (function (){
var f__10228__auto__ = (function (){var switch__10115__auto__ = ((function (c__10227__auto___13038,out){
return (function (state_13004){
var state_val_13005 = (state_13004[(1)]);
if((state_val_13005 === (7))){
var inst_13000 = (state_13004[(2)]);
var state_13004__$1 = state_13004;
var statearr_13006_13039 = state_13004__$1;
(statearr_13006_13039[(2)] = inst_13000);

(statearr_13006_13039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13005 === (1))){
var inst_12963 = [];
var inst_12964 = inst_12963;
var inst_12965 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13004__$1 = (function (){var statearr_13007 = state_13004;
(statearr_13007[(7)] = inst_12964);

(statearr_13007[(8)] = inst_12965);

return statearr_13007;
})();
var statearr_13008_13040 = state_13004__$1;
(statearr_13008_13040[(2)] = null);

(statearr_13008_13040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13005 === (4))){
var inst_12968 = (state_13004[(9)]);
var inst_12968__$1 = (state_13004[(2)]);
var inst_12969 = (inst_12968__$1 == null);
var inst_12970 = cljs.core.not.call(null,inst_12969);
var state_13004__$1 = (function (){var statearr_13009 = state_13004;
(statearr_13009[(9)] = inst_12968__$1);

return statearr_13009;
})();
if(inst_12970){
var statearr_13010_13041 = state_13004__$1;
(statearr_13010_13041[(1)] = (5));

} else {
var statearr_13011_13042 = state_13004__$1;
(statearr_13011_13042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13005 === (15))){
var inst_12994 = (state_13004[(2)]);
var state_13004__$1 = state_13004;
var statearr_13012_13043 = state_13004__$1;
(statearr_13012_13043[(2)] = inst_12994);

(statearr_13012_13043[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13005 === (13))){
var state_13004__$1 = state_13004;
var statearr_13013_13044 = state_13004__$1;
(statearr_13013_13044[(2)] = null);

(statearr_13013_13044[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13005 === (6))){
var inst_12964 = (state_13004[(7)]);
var inst_12989 = inst_12964.length;
var inst_12990 = (inst_12989 > (0));
var state_13004__$1 = state_13004;
if(cljs.core.truth_(inst_12990)){
var statearr_13014_13045 = state_13004__$1;
(statearr_13014_13045[(1)] = (12));

} else {
var statearr_13015_13046 = state_13004__$1;
(statearr_13015_13046[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13005 === (3))){
var inst_13002 = (state_13004[(2)]);
var state_13004__$1 = state_13004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13004__$1,inst_13002);
} else {
if((state_val_13005 === (12))){
var inst_12964 = (state_13004[(7)]);
var inst_12992 = cljs.core.vec.call(null,inst_12964);
var state_13004__$1 = state_13004;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13004__$1,(15),out,inst_12992);
} else {
if((state_val_13005 === (2))){
var state_13004__$1 = state_13004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13004__$1,(4),ch);
} else {
if((state_val_13005 === (11))){
var inst_12972 = (state_13004[(10)]);
var inst_12968 = (state_13004[(9)]);
var inst_12982 = (state_13004[(2)]);
var inst_12983 = [];
var inst_12984 = inst_12983.push(inst_12968);
var inst_12964 = inst_12983;
var inst_12965 = inst_12972;
var state_13004__$1 = (function (){var statearr_13016 = state_13004;
(statearr_13016[(11)] = inst_12984);

(statearr_13016[(7)] = inst_12964);

(statearr_13016[(8)] = inst_12965);

(statearr_13016[(12)] = inst_12982);

return statearr_13016;
})();
var statearr_13017_13047 = state_13004__$1;
(statearr_13017_13047[(2)] = null);

(statearr_13017_13047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13005 === (9))){
var inst_12964 = (state_13004[(7)]);
var inst_12980 = cljs.core.vec.call(null,inst_12964);
var state_13004__$1 = state_13004;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13004__$1,(11),out,inst_12980);
} else {
if((state_val_13005 === (5))){
var inst_12972 = (state_13004[(10)]);
var inst_12965 = (state_13004[(8)]);
var inst_12968 = (state_13004[(9)]);
var inst_12972__$1 = f.call(null,inst_12968);
var inst_12973 = cljs.core._EQ_.call(null,inst_12972__$1,inst_12965);
var inst_12974 = cljs.core.keyword_identical_QMARK_.call(null,inst_12965,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12975 = (inst_12973) || (inst_12974);
var state_13004__$1 = (function (){var statearr_13018 = state_13004;
(statearr_13018[(10)] = inst_12972__$1);

return statearr_13018;
})();
if(cljs.core.truth_(inst_12975)){
var statearr_13019_13048 = state_13004__$1;
(statearr_13019_13048[(1)] = (8));

} else {
var statearr_13020_13049 = state_13004__$1;
(statearr_13020_13049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13005 === (14))){
var inst_12997 = (state_13004[(2)]);
var inst_12998 = cljs.core.async.close_BANG_.call(null,out);
var state_13004__$1 = (function (){var statearr_13022 = state_13004;
(statearr_13022[(13)] = inst_12997);

return statearr_13022;
})();
var statearr_13023_13050 = state_13004__$1;
(statearr_13023_13050[(2)] = inst_12998);

(statearr_13023_13050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13005 === (10))){
var inst_12987 = (state_13004[(2)]);
var state_13004__$1 = state_13004;
var statearr_13024_13051 = state_13004__$1;
(statearr_13024_13051[(2)] = inst_12987);

(statearr_13024_13051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13005 === (8))){
var inst_12964 = (state_13004[(7)]);
var inst_12972 = (state_13004[(10)]);
var inst_12968 = (state_13004[(9)]);
var inst_12977 = inst_12964.push(inst_12968);
var tmp13021 = inst_12964;
var inst_12964__$1 = tmp13021;
var inst_12965 = inst_12972;
var state_13004__$1 = (function (){var statearr_13025 = state_13004;
(statearr_13025[(14)] = inst_12977);

(statearr_13025[(7)] = inst_12964__$1);

(statearr_13025[(8)] = inst_12965);

return statearr_13025;
})();
var statearr_13026_13052 = state_13004__$1;
(statearr_13026_13052[(2)] = null);

(statearr_13026_13052[(1)] = (2));


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
});})(c__10227__auto___13038,out))
;
return ((function (switch__10115__auto__,c__10227__auto___13038,out){
return (function() {
var cljs$core$async$state_machine__10116__auto__ = null;
var cljs$core$async$state_machine__10116__auto____0 = (function (){
var statearr_13030 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13030[(0)] = cljs$core$async$state_machine__10116__auto__);

(statearr_13030[(1)] = (1));

return statearr_13030;
});
var cljs$core$async$state_machine__10116__auto____1 = (function (state_13004){
while(true){
var ret_value__10117__auto__ = (function (){try{while(true){
var result__10118__auto__ = switch__10115__auto__.call(null,state_13004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10118__auto__;
}
break;
}
}catch (e13031){if((e13031 instanceof Object)){
var ex__10119__auto__ = e13031;
var statearr_13032_13053 = state_13004;
(statearr_13032_13053[(5)] = ex__10119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13054 = state_13004;
state_13004 = G__13054;
continue;
} else {
return ret_value__10117__auto__;
}
break;
}
});
cljs$core$async$state_machine__10116__auto__ = function(state_13004){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10116__auto____1.call(this,state_13004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10116__auto____0;
cljs$core$async$state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10116__auto____1;
return cljs$core$async$state_machine__10116__auto__;
})()
;})(switch__10115__auto__,c__10227__auto___13038,out))
})();
var state__10229__auto__ = (function (){var statearr_13033 = f__10228__auto__.call(null);
(statearr_13033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10227__auto___13038);

return statearr_13033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10229__auto__);
});})(c__10227__auto___13038,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map