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
var args38769 = [];
var len__7651__auto___38775 = arguments.length;
var i__7652__auto___38776 = (0);
while(true){
if((i__7652__auto___38776 < len__7651__auto___38775)){
args38769.push((arguments[i__7652__auto___38776]));

var G__38777 = (i__7652__auto___38776 + (1));
i__7652__auto___38776 = G__38777;
continue;
} else {
}
break;
}

var G__38771 = args38769.length;
switch (G__38771) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38769.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async38772 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38772 = (function (f,blockable,meta38773){
this.f = f;
this.blockable = blockable;
this.meta38773 = meta38773;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38774,meta38773__$1){
var self__ = this;
var _38774__$1 = this;
return (new cljs.core.async.t_cljs$core$async38772(self__.f,self__.blockable,meta38773__$1));
});

cljs.core.async.t_cljs$core$async38772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38774){
var self__ = this;
var _38774__$1 = this;
return self__.meta38773;
});

cljs.core.async.t_cljs$core$async38772.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38772.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async38772.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async38772.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async38772.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta38773","meta38773",-916590723,null)], null);
});

cljs.core.async.t_cljs$core$async38772.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38772.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38772";

cljs.core.async.t_cljs$core$async38772.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async38772");
});

cljs.core.async.__GT_t_cljs$core$async38772 = (function cljs$core$async$__GT_t_cljs$core$async38772(f__$1,blockable__$1,meta38773){
return (new cljs.core.async.t_cljs$core$async38772(f__$1,blockable__$1,meta38773));
});

}

return (new cljs.core.async.t_cljs$core$async38772(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args38781 = [];
var len__7651__auto___38784 = arguments.length;
var i__7652__auto___38785 = (0);
while(true){
if((i__7652__auto___38785 < len__7651__auto___38784)){
args38781.push((arguments[i__7652__auto___38785]));

var G__38786 = (i__7652__auto___38785 + (1));
i__7652__auto___38785 = G__38786;
continue;
} else {
}
break;
}

var G__38783 = args38781.length;
switch (G__38783) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38781.length)].join('')));

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
var args38788 = [];
var len__7651__auto___38791 = arguments.length;
var i__7652__auto___38792 = (0);
while(true){
if((i__7652__auto___38792 < len__7651__auto___38791)){
args38788.push((arguments[i__7652__auto___38792]));

var G__38793 = (i__7652__auto___38792 + (1));
i__7652__auto___38792 = G__38793;
continue;
} else {
}
break;
}

var G__38790 = args38788.length;
switch (G__38790) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38788.length)].join('')));

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
var args38795 = [];
var len__7651__auto___38798 = arguments.length;
var i__7652__auto___38799 = (0);
while(true){
if((i__7652__auto___38799 < len__7651__auto___38798)){
args38795.push((arguments[i__7652__auto___38799]));

var G__38800 = (i__7652__auto___38799 + (1));
i__7652__auto___38799 = G__38800;
continue;
} else {
}
break;
}

var G__38797 = args38795.length;
switch (G__38797) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38795.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_38802 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_38802);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_38802,ret){
return (function (){
return fn1.call(null,val_38802);
});})(val_38802,ret))
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
var args38803 = [];
var len__7651__auto___38806 = arguments.length;
var i__7652__auto___38807 = (0);
while(true){
if((i__7652__auto___38807 < len__7651__auto___38806)){
args38803.push((arguments[i__7652__auto___38807]));

var G__38808 = (i__7652__auto___38807 + (1));
i__7652__auto___38807 = G__38808;
continue;
} else {
}
break;
}

var G__38805 = args38803.length;
switch (G__38805) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38803.length)].join('')));

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
var n__7461__auto___38810 = n;
var x_38811 = (0);
while(true){
if((x_38811 < n__7461__auto___38810)){
(a[x_38811] = (0));

var G__38812 = (x_38811 + (1));
x_38811 = G__38812;
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

var G__38813 = (i + (1));
i = G__38813;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async38817 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38817 = (function (flag,meta38818){
this.flag = flag;
this.meta38818 = meta38818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_38819,meta38818__$1){
var self__ = this;
var _38819__$1 = this;
return (new cljs.core.async.t_cljs$core$async38817(self__.flag,meta38818__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async38817.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_38819){
var self__ = this;
var _38819__$1 = this;
return self__.meta38818;
});})(flag))
;

cljs.core.async.t_cljs$core$async38817.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38817.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async38817.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async38817.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async38817.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta38818","meta38818",-776762431,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async38817.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38817";

cljs.core.async.t_cljs$core$async38817.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async38817");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async38817 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async38817(flag__$1,meta38818){
return (new cljs.core.async.t_cljs$core$async38817(flag__$1,meta38818));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async38817(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async38823 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38823 = (function (flag,cb,meta38824){
this.flag = flag;
this.cb = cb;
this.meta38824 = meta38824;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38825,meta38824__$1){
var self__ = this;
var _38825__$1 = this;
return (new cljs.core.async.t_cljs$core$async38823(self__.flag,self__.cb,meta38824__$1));
});

cljs.core.async.t_cljs$core$async38823.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38825){
var self__ = this;
var _38825__$1 = this;
return self__.meta38824;
});

cljs.core.async.t_cljs$core$async38823.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38823.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async38823.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async38823.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async38823.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta38824","meta38824",1754747940,null)], null);
});

cljs.core.async.t_cljs$core$async38823.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38823.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38823";

cljs.core.async.t_cljs$core$async38823.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async38823");
});

cljs.core.async.__GT_t_cljs$core$async38823 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async38823(flag__$1,cb__$1,meta38824){
return (new cljs.core.async.t_cljs$core$async38823(flag__$1,cb__$1,meta38824));
});

}

return (new cljs.core.async.t_cljs$core$async38823(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__38826_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38826_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38827_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38827_SHARP_,port], null));
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
var G__38828 = (i + (1));
i = G__38828;
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
var len__7651__auto___38834 = arguments.length;
var i__7652__auto___38835 = (0);
while(true){
if((i__7652__auto___38835 < len__7651__auto___38834)){
args__7658__auto__.push((arguments[i__7652__auto___38835]));

var G__38836 = (i__7652__auto___38835 + (1));
i__7652__auto___38835 = G__38836;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__38831){
var map__38832 = p__38831;
var map__38832__$1 = ((((!((map__38832 == null)))?((((map__38832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38832.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38832):map__38832);
var opts = map__38832__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq38829){
var G__38830 = cljs.core.first.call(null,seq38829);
var seq38829__$1 = cljs.core.next.call(null,seq38829);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38830,seq38829__$1);
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
var args38837 = [];
var len__7651__auto___38887 = arguments.length;
var i__7652__auto___38888 = (0);
while(true){
if((i__7652__auto___38888 < len__7651__auto___38887)){
args38837.push((arguments[i__7652__auto___38888]));

var G__38889 = (i__7652__auto___38888 + (1));
i__7652__auto___38888 = G__38889;
continue;
} else {
}
break;
}

var G__38839 = args38837.length;
switch (G__38839) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38837.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__11475__auto___38891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto___38891){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto___38891){
return (function (state_38863){
var state_val_38864 = (state_38863[(1)]);
if((state_val_38864 === (7))){
var inst_38859 = (state_38863[(2)]);
var state_38863__$1 = state_38863;
var statearr_38865_38892 = state_38863__$1;
(statearr_38865_38892[(2)] = inst_38859);

(statearr_38865_38892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (1))){
var state_38863__$1 = state_38863;
var statearr_38866_38893 = state_38863__$1;
(statearr_38866_38893[(2)] = null);

(statearr_38866_38893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (4))){
var inst_38842 = (state_38863[(7)]);
var inst_38842__$1 = (state_38863[(2)]);
var inst_38843 = (inst_38842__$1 == null);
var state_38863__$1 = (function (){var statearr_38867 = state_38863;
(statearr_38867[(7)] = inst_38842__$1);

return statearr_38867;
})();
if(cljs.core.truth_(inst_38843)){
var statearr_38868_38894 = state_38863__$1;
(statearr_38868_38894[(1)] = (5));

} else {
var statearr_38869_38895 = state_38863__$1;
(statearr_38869_38895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (13))){
var state_38863__$1 = state_38863;
var statearr_38870_38896 = state_38863__$1;
(statearr_38870_38896[(2)] = null);

(statearr_38870_38896[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (6))){
var inst_38842 = (state_38863[(7)]);
var state_38863__$1 = state_38863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38863__$1,(11),to,inst_38842);
} else {
if((state_val_38864 === (3))){
var inst_38861 = (state_38863[(2)]);
var state_38863__$1 = state_38863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38863__$1,inst_38861);
} else {
if((state_val_38864 === (12))){
var state_38863__$1 = state_38863;
var statearr_38871_38897 = state_38863__$1;
(statearr_38871_38897[(2)] = null);

(statearr_38871_38897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (2))){
var state_38863__$1 = state_38863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38863__$1,(4),from);
} else {
if((state_val_38864 === (11))){
var inst_38852 = (state_38863[(2)]);
var state_38863__$1 = state_38863;
if(cljs.core.truth_(inst_38852)){
var statearr_38872_38898 = state_38863__$1;
(statearr_38872_38898[(1)] = (12));

} else {
var statearr_38873_38899 = state_38863__$1;
(statearr_38873_38899[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (9))){
var state_38863__$1 = state_38863;
var statearr_38874_38900 = state_38863__$1;
(statearr_38874_38900[(2)] = null);

(statearr_38874_38900[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (5))){
var state_38863__$1 = state_38863;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38875_38901 = state_38863__$1;
(statearr_38875_38901[(1)] = (8));

} else {
var statearr_38876_38902 = state_38863__$1;
(statearr_38876_38902[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (14))){
var inst_38857 = (state_38863[(2)]);
var state_38863__$1 = state_38863;
var statearr_38877_38903 = state_38863__$1;
(statearr_38877_38903[(2)] = inst_38857);

(statearr_38877_38903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (10))){
var inst_38849 = (state_38863[(2)]);
var state_38863__$1 = state_38863;
var statearr_38878_38904 = state_38863__$1;
(statearr_38878_38904[(2)] = inst_38849);

(statearr_38878_38904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (8))){
var inst_38846 = cljs.core.async.close_BANG_.call(null,to);
var state_38863__$1 = state_38863;
var statearr_38879_38905 = state_38863__$1;
(statearr_38879_38905[(2)] = inst_38846);

(statearr_38879_38905[(1)] = (10));


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
});})(c__11475__auto___38891))
;
return ((function (switch__11410__auto__,c__11475__auto___38891){
return (function() {
var cljs$core$async$state_machine__11411__auto__ = null;
var cljs$core$async$state_machine__11411__auto____0 = (function (){
var statearr_38883 = [null,null,null,null,null,null,null,null];
(statearr_38883[(0)] = cljs$core$async$state_machine__11411__auto__);

(statearr_38883[(1)] = (1));

return statearr_38883;
});
var cljs$core$async$state_machine__11411__auto____1 = (function (state_38863){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_38863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e38884){if((e38884 instanceof Object)){
var ex__11414__auto__ = e38884;
var statearr_38885_38906 = state_38863;
(statearr_38885_38906[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38907 = state_38863;
state_38863 = G__38907;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
cljs$core$async$state_machine__11411__auto__ = function(state_38863){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11411__auto____1.call(this,state_38863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11411__auto____0;
cljs$core$async$state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11411__auto____1;
return cljs$core$async$state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto___38891))
})();
var state__11477__auto__ = (function (){var statearr_38886 = f__11476__auto__.call(null);
(statearr_38886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___38891);

return statearr_38886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto___38891))
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
return (function (p__39095){
var vec__39096 = p__39095;
var v = cljs.core.nth.call(null,vec__39096,(0),null);
var p = cljs.core.nth.call(null,vec__39096,(1),null);
var job = vec__39096;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11475__auto___39282 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto___39282,res,vec__39096,v,p,job,jobs,results){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto___39282,res,vec__39096,v,p,job,jobs,results){
return (function (state_39103){
var state_val_39104 = (state_39103[(1)]);
if((state_val_39104 === (1))){
var state_39103__$1 = state_39103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39103__$1,(2),res,v);
} else {
if((state_val_39104 === (2))){
var inst_39100 = (state_39103[(2)]);
var inst_39101 = cljs.core.async.close_BANG_.call(null,res);
var state_39103__$1 = (function (){var statearr_39105 = state_39103;
(statearr_39105[(7)] = inst_39100);

return statearr_39105;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39103__$1,inst_39101);
} else {
return null;
}
}
});})(c__11475__auto___39282,res,vec__39096,v,p,job,jobs,results))
;
return ((function (switch__11410__auto__,c__11475__auto___39282,res,vec__39096,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11411__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11411__auto____0 = (function (){
var statearr_39109 = [null,null,null,null,null,null,null,null];
(statearr_39109[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11411__auto__);

(statearr_39109[(1)] = (1));

return statearr_39109;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11411__auto____1 = (function (state_39103){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_39103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e39110){if((e39110 instanceof Object)){
var ex__11414__auto__ = e39110;
var statearr_39111_39283 = state_39103;
(statearr_39111_39283[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39284 = state_39103;
state_39103 = G__39284;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11411__auto__ = function(state_39103){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11411__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11411__auto____1.call(this,state_39103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11411__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11411__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto___39282,res,vec__39096,v,p,job,jobs,results))
})();
var state__11477__auto__ = (function (){var statearr_39112 = f__11476__auto__.call(null);
(statearr_39112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___39282);

return statearr_39112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto___39282,res,vec__39096,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__39113){
var vec__39114 = p__39113;
var v = cljs.core.nth.call(null,vec__39114,(0),null);
var p = cljs.core.nth.call(null,vec__39114,(1),null);
var job = vec__39114;
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
var n__7461__auto___39285 = n;
var __39286 = (0);
while(true){
if((__39286 < n__7461__auto___39285)){
var G__39117_39287 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__39117_39287) {
case "compute":
var c__11475__auto___39289 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39286,c__11475__auto___39289,G__39117_39287,n__7461__auto___39285,jobs,results,process,async){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (__39286,c__11475__auto___39289,G__39117_39287,n__7461__auto___39285,jobs,results,process,async){
return (function (state_39130){
var state_val_39131 = (state_39130[(1)]);
if((state_val_39131 === (1))){
var state_39130__$1 = state_39130;
var statearr_39132_39290 = state_39130__$1;
(statearr_39132_39290[(2)] = null);

(statearr_39132_39290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39131 === (2))){
var state_39130__$1 = state_39130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39130__$1,(4),jobs);
} else {
if((state_val_39131 === (3))){
var inst_39128 = (state_39130[(2)]);
var state_39130__$1 = state_39130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39130__$1,inst_39128);
} else {
if((state_val_39131 === (4))){
var inst_39120 = (state_39130[(2)]);
var inst_39121 = process.call(null,inst_39120);
var state_39130__$1 = state_39130;
if(cljs.core.truth_(inst_39121)){
var statearr_39133_39291 = state_39130__$1;
(statearr_39133_39291[(1)] = (5));

} else {
var statearr_39134_39292 = state_39130__$1;
(statearr_39134_39292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39131 === (5))){
var state_39130__$1 = state_39130;
var statearr_39135_39293 = state_39130__$1;
(statearr_39135_39293[(2)] = null);

(statearr_39135_39293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39131 === (6))){
var state_39130__$1 = state_39130;
var statearr_39136_39294 = state_39130__$1;
(statearr_39136_39294[(2)] = null);

(statearr_39136_39294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39131 === (7))){
var inst_39126 = (state_39130[(2)]);
var state_39130__$1 = state_39130;
var statearr_39137_39295 = state_39130__$1;
(statearr_39137_39295[(2)] = inst_39126);

(statearr_39137_39295[(1)] = (3));


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
});})(__39286,c__11475__auto___39289,G__39117_39287,n__7461__auto___39285,jobs,results,process,async))
;
return ((function (__39286,switch__11410__auto__,c__11475__auto___39289,G__39117_39287,n__7461__auto___39285,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11411__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11411__auto____0 = (function (){
var statearr_39141 = [null,null,null,null,null,null,null];
(statearr_39141[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11411__auto__);

(statearr_39141[(1)] = (1));

return statearr_39141;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11411__auto____1 = (function (state_39130){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_39130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e39142){if((e39142 instanceof Object)){
var ex__11414__auto__ = e39142;
var statearr_39143_39296 = state_39130;
(statearr_39143_39296[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39297 = state_39130;
state_39130 = G__39297;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11411__auto__ = function(state_39130){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11411__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11411__auto____1.call(this,state_39130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11411__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11411__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11411__auto__;
})()
;})(__39286,switch__11410__auto__,c__11475__auto___39289,G__39117_39287,n__7461__auto___39285,jobs,results,process,async))
})();
var state__11477__auto__ = (function (){var statearr_39144 = f__11476__auto__.call(null);
(statearr_39144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___39289);

return statearr_39144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(__39286,c__11475__auto___39289,G__39117_39287,n__7461__auto___39285,jobs,results,process,async))
);


break;
case "async":
var c__11475__auto___39298 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39286,c__11475__auto___39298,G__39117_39287,n__7461__auto___39285,jobs,results,process,async){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (__39286,c__11475__auto___39298,G__39117_39287,n__7461__auto___39285,jobs,results,process,async){
return (function (state_39157){
var state_val_39158 = (state_39157[(1)]);
if((state_val_39158 === (1))){
var state_39157__$1 = state_39157;
var statearr_39159_39299 = state_39157__$1;
(statearr_39159_39299[(2)] = null);

(statearr_39159_39299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (2))){
var state_39157__$1 = state_39157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39157__$1,(4),jobs);
} else {
if((state_val_39158 === (3))){
var inst_39155 = (state_39157[(2)]);
var state_39157__$1 = state_39157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39157__$1,inst_39155);
} else {
if((state_val_39158 === (4))){
var inst_39147 = (state_39157[(2)]);
var inst_39148 = async.call(null,inst_39147);
var state_39157__$1 = state_39157;
if(cljs.core.truth_(inst_39148)){
var statearr_39160_39300 = state_39157__$1;
(statearr_39160_39300[(1)] = (5));

} else {
var statearr_39161_39301 = state_39157__$1;
(statearr_39161_39301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (5))){
var state_39157__$1 = state_39157;
var statearr_39162_39302 = state_39157__$1;
(statearr_39162_39302[(2)] = null);

(statearr_39162_39302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (6))){
var state_39157__$1 = state_39157;
var statearr_39163_39303 = state_39157__$1;
(statearr_39163_39303[(2)] = null);

(statearr_39163_39303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (7))){
var inst_39153 = (state_39157[(2)]);
var state_39157__$1 = state_39157;
var statearr_39164_39304 = state_39157__$1;
(statearr_39164_39304[(2)] = inst_39153);

(statearr_39164_39304[(1)] = (3));


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
});})(__39286,c__11475__auto___39298,G__39117_39287,n__7461__auto___39285,jobs,results,process,async))
;
return ((function (__39286,switch__11410__auto__,c__11475__auto___39298,G__39117_39287,n__7461__auto___39285,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11411__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11411__auto____0 = (function (){
var statearr_39168 = [null,null,null,null,null,null,null];
(statearr_39168[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11411__auto__);

(statearr_39168[(1)] = (1));

return statearr_39168;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11411__auto____1 = (function (state_39157){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_39157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e39169){if((e39169 instanceof Object)){
var ex__11414__auto__ = e39169;
var statearr_39170_39305 = state_39157;
(statearr_39170_39305[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39306 = state_39157;
state_39157 = G__39306;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11411__auto__ = function(state_39157){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11411__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11411__auto____1.call(this,state_39157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11411__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11411__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11411__auto__;
})()
;})(__39286,switch__11410__auto__,c__11475__auto___39298,G__39117_39287,n__7461__auto___39285,jobs,results,process,async))
})();
var state__11477__auto__ = (function (){var statearr_39171 = f__11476__auto__.call(null);
(statearr_39171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___39298);

return statearr_39171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(__39286,c__11475__auto___39298,G__39117_39287,n__7461__auto___39285,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__39307 = (__39286 + (1));
__39286 = G__39307;
continue;
} else {
}
break;
}

var c__11475__auto___39308 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto___39308,jobs,results,process,async){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto___39308,jobs,results,process,async){
return (function (state_39193){
var state_val_39194 = (state_39193[(1)]);
if((state_val_39194 === (1))){
var state_39193__$1 = state_39193;
var statearr_39195_39309 = state_39193__$1;
(statearr_39195_39309[(2)] = null);

(statearr_39195_39309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39194 === (2))){
var state_39193__$1 = state_39193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39193__$1,(4),from);
} else {
if((state_val_39194 === (3))){
var inst_39191 = (state_39193[(2)]);
var state_39193__$1 = state_39193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39193__$1,inst_39191);
} else {
if((state_val_39194 === (4))){
var inst_39174 = (state_39193[(7)]);
var inst_39174__$1 = (state_39193[(2)]);
var inst_39175 = (inst_39174__$1 == null);
var state_39193__$1 = (function (){var statearr_39196 = state_39193;
(statearr_39196[(7)] = inst_39174__$1);

return statearr_39196;
})();
if(cljs.core.truth_(inst_39175)){
var statearr_39197_39310 = state_39193__$1;
(statearr_39197_39310[(1)] = (5));

} else {
var statearr_39198_39311 = state_39193__$1;
(statearr_39198_39311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39194 === (5))){
var inst_39177 = cljs.core.async.close_BANG_.call(null,jobs);
var state_39193__$1 = state_39193;
var statearr_39199_39312 = state_39193__$1;
(statearr_39199_39312[(2)] = inst_39177);

(statearr_39199_39312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39194 === (6))){
var inst_39179 = (state_39193[(8)]);
var inst_39174 = (state_39193[(7)]);
var inst_39179__$1 = cljs.core.async.chan.call(null,(1));
var inst_39180 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39181 = [inst_39174,inst_39179__$1];
var inst_39182 = (new cljs.core.PersistentVector(null,2,(5),inst_39180,inst_39181,null));
var state_39193__$1 = (function (){var statearr_39200 = state_39193;
(statearr_39200[(8)] = inst_39179__$1);

return statearr_39200;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39193__$1,(8),jobs,inst_39182);
} else {
if((state_val_39194 === (7))){
var inst_39189 = (state_39193[(2)]);
var state_39193__$1 = state_39193;
var statearr_39201_39313 = state_39193__$1;
(statearr_39201_39313[(2)] = inst_39189);

(statearr_39201_39313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39194 === (8))){
var inst_39179 = (state_39193[(8)]);
var inst_39184 = (state_39193[(2)]);
var state_39193__$1 = (function (){var statearr_39202 = state_39193;
(statearr_39202[(9)] = inst_39184);

return statearr_39202;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39193__$1,(9),results,inst_39179);
} else {
if((state_val_39194 === (9))){
var inst_39186 = (state_39193[(2)]);
var state_39193__$1 = (function (){var statearr_39203 = state_39193;
(statearr_39203[(10)] = inst_39186);

return statearr_39203;
})();
var statearr_39204_39314 = state_39193__$1;
(statearr_39204_39314[(2)] = null);

(statearr_39204_39314[(1)] = (2));


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
});})(c__11475__auto___39308,jobs,results,process,async))
;
return ((function (switch__11410__auto__,c__11475__auto___39308,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11411__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11411__auto____0 = (function (){
var statearr_39208 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39208[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11411__auto__);

(statearr_39208[(1)] = (1));

return statearr_39208;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11411__auto____1 = (function (state_39193){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_39193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e39209){if((e39209 instanceof Object)){
var ex__11414__auto__ = e39209;
var statearr_39210_39315 = state_39193;
(statearr_39210_39315[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39316 = state_39193;
state_39193 = G__39316;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11411__auto__ = function(state_39193){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11411__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11411__auto____1.call(this,state_39193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11411__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11411__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto___39308,jobs,results,process,async))
})();
var state__11477__auto__ = (function (){var statearr_39211 = f__11476__auto__.call(null);
(statearr_39211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___39308);

return statearr_39211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto___39308,jobs,results,process,async))
);


var c__11475__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto__,jobs,results,process,async){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto__,jobs,results,process,async){
return (function (state_39249){
var state_val_39250 = (state_39249[(1)]);
if((state_val_39250 === (7))){
var inst_39245 = (state_39249[(2)]);
var state_39249__$1 = state_39249;
var statearr_39251_39317 = state_39249__$1;
(statearr_39251_39317[(2)] = inst_39245);

(statearr_39251_39317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39250 === (20))){
var state_39249__$1 = state_39249;
var statearr_39252_39318 = state_39249__$1;
(statearr_39252_39318[(2)] = null);

(statearr_39252_39318[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39250 === (1))){
var state_39249__$1 = state_39249;
var statearr_39253_39319 = state_39249__$1;
(statearr_39253_39319[(2)] = null);

(statearr_39253_39319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39250 === (4))){
var inst_39214 = (state_39249[(7)]);
var inst_39214__$1 = (state_39249[(2)]);
var inst_39215 = (inst_39214__$1 == null);
var state_39249__$1 = (function (){var statearr_39254 = state_39249;
(statearr_39254[(7)] = inst_39214__$1);

return statearr_39254;
})();
if(cljs.core.truth_(inst_39215)){
var statearr_39255_39320 = state_39249__$1;
(statearr_39255_39320[(1)] = (5));

} else {
var statearr_39256_39321 = state_39249__$1;
(statearr_39256_39321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39250 === (15))){
var inst_39227 = (state_39249[(8)]);
var state_39249__$1 = state_39249;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39249__$1,(18),to,inst_39227);
} else {
if((state_val_39250 === (21))){
var inst_39240 = (state_39249[(2)]);
var state_39249__$1 = state_39249;
var statearr_39257_39322 = state_39249__$1;
(statearr_39257_39322[(2)] = inst_39240);

(statearr_39257_39322[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39250 === (13))){
var inst_39242 = (state_39249[(2)]);
var state_39249__$1 = (function (){var statearr_39258 = state_39249;
(statearr_39258[(9)] = inst_39242);

return statearr_39258;
})();
var statearr_39259_39323 = state_39249__$1;
(statearr_39259_39323[(2)] = null);

(statearr_39259_39323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39250 === (6))){
var inst_39214 = (state_39249[(7)]);
var state_39249__$1 = state_39249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39249__$1,(11),inst_39214);
} else {
if((state_val_39250 === (17))){
var inst_39235 = (state_39249[(2)]);
var state_39249__$1 = state_39249;
if(cljs.core.truth_(inst_39235)){
var statearr_39260_39324 = state_39249__$1;
(statearr_39260_39324[(1)] = (19));

} else {
var statearr_39261_39325 = state_39249__$1;
(statearr_39261_39325[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39250 === (3))){
var inst_39247 = (state_39249[(2)]);
var state_39249__$1 = state_39249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39249__$1,inst_39247);
} else {
if((state_val_39250 === (12))){
var inst_39224 = (state_39249[(10)]);
var state_39249__$1 = state_39249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39249__$1,(14),inst_39224);
} else {
if((state_val_39250 === (2))){
var state_39249__$1 = state_39249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39249__$1,(4),results);
} else {
if((state_val_39250 === (19))){
var state_39249__$1 = state_39249;
var statearr_39262_39326 = state_39249__$1;
(statearr_39262_39326[(2)] = null);

(statearr_39262_39326[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39250 === (11))){
var inst_39224 = (state_39249[(2)]);
var state_39249__$1 = (function (){var statearr_39263 = state_39249;
(statearr_39263[(10)] = inst_39224);

return statearr_39263;
})();
var statearr_39264_39327 = state_39249__$1;
(statearr_39264_39327[(2)] = null);

(statearr_39264_39327[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39250 === (9))){
var state_39249__$1 = state_39249;
var statearr_39265_39328 = state_39249__$1;
(statearr_39265_39328[(2)] = null);

(statearr_39265_39328[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39250 === (5))){
var state_39249__$1 = state_39249;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39266_39329 = state_39249__$1;
(statearr_39266_39329[(1)] = (8));

} else {
var statearr_39267_39330 = state_39249__$1;
(statearr_39267_39330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39250 === (14))){
var inst_39229 = (state_39249[(11)]);
var inst_39227 = (state_39249[(8)]);
var inst_39227__$1 = (state_39249[(2)]);
var inst_39228 = (inst_39227__$1 == null);
var inst_39229__$1 = cljs.core.not.call(null,inst_39228);
var state_39249__$1 = (function (){var statearr_39268 = state_39249;
(statearr_39268[(11)] = inst_39229__$1);

(statearr_39268[(8)] = inst_39227__$1);

return statearr_39268;
})();
if(inst_39229__$1){
var statearr_39269_39331 = state_39249__$1;
(statearr_39269_39331[(1)] = (15));

} else {
var statearr_39270_39332 = state_39249__$1;
(statearr_39270_39332[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39250 === (16))){
var inst_39229 = (state_39249[(11)]);
var state_39249__$1 = state_39249;
var statearr_39271_39333 = state_39249__$1;
(statearr_39271_39333[(2)] = inst_39229);

(statearr_39271_39333[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39250 === (10))){
var inst_39221 = (state_39249[(2)]);
var state_39249__$1 = state_39249;
var statearr_39272_39334 = state_39249__$1;
(statearr_39272_39334[(2)] = inst_39221);

(statearr_39272_39334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39250 === (18))){
var inst_39232 = (state_39249[(2)]);
var state_39249__$1 = state_39249;
var statearr_39273_39335 = state_39249__$1;
(statearr_39273_39335[(2)] = inst_39232);

(statearr_39273_39335[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39250 === (8))){
var inst_39218 = cljs.core.async.close_BANG_.call(null,to);
var state_39249__$1 = state_39249;
var statearr_39274_39336 = state_39249__$1;
(statearr_39274_39336[(2)] = inst_39218);

(statearr_39274_39336[(1)] = (10));


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
});})(c__11475__auto__,jobs,results,process,async))
;
return ((function (switch__11410__auto__,c__11475__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11411__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11411__auto____0 = (function (){
var statearr_39278 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39278[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11411__auto__);

(statearr_39278[(1)] = (1));

return statearr_39278;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11411__auto____1 = (function (state_39249){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_39249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e39279){if((e39279 instanceof Object)){
var ex__11414__auto__ = e39279;
var statearr_39280_39337 = state_39249;
(statearr_39280_39337[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39338 = state_39249;
state_39249 = G__39338;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11411__auto__ = function(state_39249){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11411__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11411__auto____1.call(this,state_39249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11411__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11411__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto__,jobs,results,process,async))
})();
var state__11477__auto__ = (function (){var statearr_39281 = f__11476__auto__.call(null);
(statearr_39281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto__);

return statearr_39281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto__,jobs,results,process,async))
);

return c__11475__auto__;
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
var args39339 = [];
var len__7651__auto___39342 = arguments.length;
var i__7652__auto___39343 = (0);
while(true){
if((i__7652__auto___39343 < len__7651__auto___39342)){
args39339.push((arguments[i__7652__auto___39343]));

var G__39344 = (i__7652__auto___39343 + (1));
i__7652__auto___39343 = G__39344;
continue;
} else {
}
break;
}

var G__39341 = args39339.length;
switch (G__39341) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39339.length)].join('')));

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
var args39346 = [];
var len__7651__auto___39349 = arguments.length;
var i__7652__auto___39350 = (0);
while(true){
if((i__7652__auto___39350 < len__7651__auto___39349)){
args39346.push((arguments[i__7652__auto___39350]));

var G__39351 = (i__7652__auto___39350 + (1));
i__7652__auto___39350 = G__39351;
continue;
} else {
}
break;
}

var G__39348 = args39346.length;
switch (G__39348) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39346.length)].join('')));

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
var args39353 = [];
var len__7651__auto___39406 = arguments.length;
var i__7652__auto___39407 = (0);
while(true){
if((i__7652__auto___39407 < len__7651__auto___39406)){
args39353.push((arguments[i__7652__auto___39407]));

var G__39408 = (i__7652__auto___39407 + (1));
i__7652__auto___39407 = G__39408;
continue;
} else {
}
break;
}

var G__39355 = args39353.length;
switch (G__39355) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39353.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__11475__auto___39410 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto___39410,tc,fc){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto___39410,tc,fc){
return (function (state_39381){
var state_val_39382 = (state_39381[(1)]);
if((state_val_39382 === (7))){
var inst_39377 = (state_39381[(2)]);
var state_39381__$1 = state_39381;
var statearr_39383_39411 = state_39381__$1;
(statearr_39383_39411[(2)] = inst_39377);

(statearr_39383_39411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39382 === (1))){
var state_39381__$1 = state_39381;
var statearr_39384_39412 = state_39381__$1;
(statearr_39384_39412[(2)] = null);

(statearr_39384_39412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39382 === (4))){
var inst_39358 = (state_39381[(7)]);
var inst_39358__$1 = (state_39381[(2)]);
var inst_39359 = (inst_39358__$1 == null);
var state_39381__$1 = (function (){var statearr_39385 = state_39381;
(statearr_39385[(7)] = inst_39358__$1);

return statearr_39385;
})();
if(cljs.core.truth_(inst_39359)){
var statearr_39386_39413 = state_39381__$1;
(statearr_39386_39413[(1)] = (5));

} else {
var statearr_39387_39414 = state_39381__$1;
(statearr_39387_39414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39382 === (13))){
var state_39381__$1 = state_39381;
var statearr_39388_39415 = state_39381__$1;
(statearr_39388_39415[(2)] = null);

(statearr_39388_39415[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39382 === (6))){
var inst_39358 = (state_39381[(7)]);
var inst_39364 = p.call(null,inst_39358);
var state_39381__$1 = state_39381;
if(cljs.core.truth_(inst_39364)){
var statearr_39389_39416 = state_39381__$1;
(statearr_39389_39416[(1)] = (9));

} else {
var statearr_39390_39417 = state_39381__$1;
(statearr_39390_39417[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39382 === (3))){
var inst_39379 = (state_39381[(2)]);
var state_39381__$1 = state_39381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39381__$1,inst_39379);
} else {
if((state_val_39382 === (12))){
var state_39381__$1 = state_39381;
var statearr_39391_39418 = state_39381__$1;
(statearr_39391_39418[(2)] = null);

(statearr_39391_39418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39382 === (2))){
var state_39381__$1 = state_39381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39381__$1,(4),ch);
} else {
if((state_val_39382 === (11))){
var inst_39358 = (state_39381[(7)]);
var inst_39368 = (state_39381[(2)]);
var state_39381__$1 = state_39381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39381__$1,(8),inst_39368,inst_39358);
} else {
if((state_val_39382 === (9))){
var state_39381__$1 = state_39381;
var statearr_39392_39419 = state_39381__$1;
(statearr_39392_39419[(2)] = tc);

(statearr_39392_39419[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39382 === (5))){
var inst_39361 = cljs.core.async.close_BANG_.call(null,tc);
var inst_39362 = cljs.core.async.close_BANG_.call(null,fc);
var state_39381__$1 = (function (){var statearr_39393 = state_39381;
(statearr_39393[(8)] = inst_39361);

return statearr_39393;
})();
var statearr_39394_39420 = state_39381__$1;
(statearr_39394_39420[(2)] = inst_39362);

(statearr_39394_39420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39382 === (14))){
var inst_39375 = (state_39381[(2)]);
var state_39381__$1 = state_39381;
var statearr_39395_39421 = state_39381__$1;
(statearr_39395_39421[(2)] = inst_39375);

(statearr_39395_39421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39382 === (10))){
var state_39381__$1 = state_39381;
var statearr_39396_39422 = state_39381__$1;
(statearr_39396_39422[(2)] = fc);

(statearr_39396_39422[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39382 === (8))){
var inst_39370 = (state_39381[(2)]);
var state_39381__$1 = state_39381;
if(cljs.core.truth_(inst_39370)){
var statearr_39397_39423 = state_39381__$1;
(statearr_39397_39423[(1)] = (12));

} else {
var statearr_39398_39424 = state_39381__$1;
(statearr_39398_39424[(1)] = (13));

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
});})(c__11475__auto___39410,tc,fc))
;
return ((function (switch__11410__auto__,c__11475__auto___39410,tc,fc){
return (function() {
var cljs$core$async$state_machine__11411__auto__ = null;
var cljs$core$async$state_machine__11411__auto____0 = (function (){
var statearr_39402 = [null,null,null,null,null,null,null,null,null];
(statearr_39402[(0)] = cljs$core$async$state_machine__11411__auto__);

(statearr_39402[(1)] = (1));

return statearr_39402;
});
var cljs$core$async$state_machine__11411__auto____1 = (function (state_39381){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_39381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e39403){if((e39403 instanceof Object)){
var ex__11414__auto__ = e39403;
var statearr_39404_39425 = state_39381;
(statearr_39404_39425[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39426 = state_39381;
state_39381 = G__39426;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
cljs$core$async$state_machine__11411__auto__ = function(state_39381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11411__auto____1.call(this,state_39381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11411__auto____0;
cljs$core$async$state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11411__auto____1;
return cljs$core$async$state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto___39410,tc,fc))
})();
var state__11477__auto__ = (function (){var statearr_39405 = f__11476__auto__.call(null);
(statearr_39405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___39410);

return statearr_39405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto___39410,tc,fc))
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
var c__11475__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto__){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto__){
return (function (state_39490){
var state_val_39491 = (state_39490[(1)]);
if((state_val_39491 === (7))){
var inst_39486 = (state_39490[(2)]);
var state_39490__$1 = state_39490;
var statearr_39492_39513 = state_39490__$1;
(statearr_39492_39513[(2)] = inst_39486);

(statearr_39492_39513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39491 === (1))){
var inst_39470 = init;
var state_39490__$1 = (function (){var statearr_39493 = state_39490;
(statearr_39493[(7)] = inst_39470);

return statearr_39493;
})();
var statearr_39494_39514 = state_39490__$1;
(statearr_39494_39514[(2)] = null);

(statearr_39494_39514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39491 === (4))){
var inst_39473 = (state_39490[(8)]);
var inst_39473__$1 = (state_39490[(2)]);
var inst_39474 = (inst_39473__$1 == null);
var state_39490__$1 = (function (){var statearr_39495 = state_39490;
(statearr_39495[(8)] = inst_39473__$1);

return statearr_39495;
})();
if(cljs.core.truth_(inst_39474)){
var statearr_39496_39515 = state_39490__$1;
(statearr_39496_39515[(1)] = (5));

} else {
var statearr_39497_39516 = state_39490__$1;
(statearr_39497_39516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39491 === (6))){
var inst_39477 = (state_39490[(9)]);
var inst_39470 = (state_39490[(7)]);
var inst_39473 = (state_39490[(8)]);
var inst_39477__$1 = f.call(null,inst_39470,inst_39473);
var inst_39478 = cljs.core.reduced_QMARK_.call(null,inst_39477__$1);
var state_39490__$1 = (function (){var statearr_39498 = state_39490;
(statearr_39498[(9)] = inst_39477__$1);

return statearr_39498;
})();
if(inst_39478){
var statearr_39499_39517 = state_39490__$1;
(statearr_39499_39517[(1)] = (8));

} else {
var statearr_39500_39518 = state_39490__$1;
(statearr_39500_39518[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39491 === (3))){
var inst_39488 = (state_39490[(2)]);
var state_39490__$1 = state_39490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39490__$1,inst_39488);
} else {
if((state_val_39491 === (2))){
var state_39490__$1 = state_39490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39490__$1,(4),ch);
} else {
if((state_val_39491 === (9))){
var inst_39477 = (state_39490[(9)]);
var inst_39470 = inst_39477;
var state_39490__$1 = (function (){var statearr_39501 = state_39490;
(statearr_39501[(7)] = inst_39470);

return statearr_39501;
})();
var statearr_39502_39519 = state_39490__$1;
(statearr_39502_39519[(2)] = null);

(statearr_39502_39519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39491 === (5))){
var inst_39470 = (state_39490[(7)]);
var state_39490__$1 = state_39490;
var statearr_39503_39520 = state_39490__$1;
(statearr_39503_39520[(2)] = inst_39470);

(statearr_39503_39520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39491 === (10))){
var inst_39484 = (state_39490[(2)]);
var state_39490__$1 = state_39490;
var statearr_39504_39521 = state_39490__$1;
(statearr_39504_39521[(2)] = inst_39484);

(statearr_39504_39521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39491 === (8))){
var inst_39477 = (state_39490[(9)]);
var inst_39480 = cljs.core.deref.call(null,inst_39477);
var state_39490__$1 = state_39490;
var statearr_39505_39522 = state_39490__$1;
(statearr_39505_39522[(2)] = inst_39480);

(statearr_39505_39522[(1)] = (10));


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
});})(c__11475__auto__))
;
return ((function (switch__11410__auto__,c__11475__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__11411__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11411__auto____0 = (function (){
var statearr_39509 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39509[(0)] = cljs$core$async$reduce_$_state_machine__11411__auto__);

(statearr_39509[(1)] = (1));

return statearr_39509;
});
var cljs$core$async$reduce_$_state_machine__11411__auto____1 = (function (state_39490){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_39490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e39510){if((e39510 instanceof Object)){
var ex__11414__auto__ = e39510;
var statearr_39511_39523 = state_39490;
(statearr_39511_39523[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39524 = state_39490;
state_39490 = G__39524;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11411__auto__ = function(state_39490){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11411__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11411__auto____1.call(this,state_39490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11411__auto____0;
cljs$core$async$reduce_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11411__auto____1;
return cljs$core$async$reduce_$_state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto__))
})();
var state__11477__auto__ = (function (){var statearr_39512 = f__11476__auto__.call(null);
(statearr_39512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto__);

return statearr_39512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto__))
);

return c__11475__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__11475__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto__,f__$1){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto__,f__$1){
return (function (state_39544){
var state_val_39545 = (state_39544[(1)]);
if((state_val_39545 === (1))){
var inst_39539 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_39544__$1 = state_39544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39544__$1,(2),inst_39539);
} else {
if((state_val_39545 === (2))){
var inst_39541 = (state_39544[(2)]);
var inst_39542 = f__$1.call(null,inst_39541);
var state_39544__$1 = state_39544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39544__$1,inst_39542);
} else {
return null;
}
}
});})(c__11475__auto__,f__$1))
;
return ((function (switch__11410__auto__,c__11475__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__11411__auto__ = null;
var cljs$core$async$transduce_$_state_machine__11411__auto____0 = (function (){
var statearr_39549 = [null,null,null,null,null,null,null];
(statearr_39549[(0)] = cljs$core$async$transduce_$_state_machine__11411__auto__);

(statearr_39549[(1)] = (1));

return statearr_39549;
});
var cljs$core$async$transduce_$_state_machine__11411__auto____1 = (function (state_39544){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_39544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e39550){if((e39550 instanceof Object)){
var ex__11414__auto__ = e39550;
var statearr_39551_39553 = state_39544;
(statearr_39551_39553[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39554 = state_39544;
state_39544 = G__39554;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__11411__auto__ = function(state_39544){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__11411__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__11411__auto____1.call(this,state_39544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__11411__auto____0;
cljs$core$async$transduce_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__11411__auto____1;
return cljs$core$async$transduce_$_state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto__,f__$1))
})();
var state__11477__auto__ = (function (){var statearr_39552 = f__11476__auto__.call(null);
(statearr_39552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto__);

return statearr_39552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto__,f__$1))
);

return c__11475__auto__;
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
var args39555 = [];
var len__7651__auto___39607 = arguments.length;
var i__7652__auto___39608 = (0);
while(true){
if((i__7652__auto___39608 < len__7651__auto___39607)){
args39555.push((arguments[i__7652__auto___39608]));

var G__39609 = (i__7652__auto___39608 + (1));
i__7652__auto___39608 = G__39609;
continue;
} else {
}
break;
}

var G__39557 = args39555.length;
switch (G__39557) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39555.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__11475__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto__){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto__){
return (function (state_39582){
var state_val_39583 = (state_39582[(1)]);
if((state_val_39583 === (7))){
var inst_39564 = (state_39582[(2)]);
var state_39582__$1 = state_39582;
var statearr_39584_39611 = state_39582__$1;
(statearr_39584_39611[(2)] = inst_39564);

(statearr_39584_39611[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39583 === (1))){
var inst_39558 = cljs.core.seq.call(null,coll);
var inst_39559 = inst_39558;
var state_39582__$1 = (function (){var statearr_39585 = state_39582;
(statearr_39585[(7)] = inst_39559);

return statearr_39585;
})();
var statearr_39586_39612 = state_39582__$1;
(statearr_39586_39612[(2)] = null);

(statearr_39586_39612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39583 === (4))){
var inst_39559 = (state_39582[(7)]);
var inst_39562 = cljs.core.first.call(null,inst_39559);
var state_39582__$1 = state_39582;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39582__$1,(7),ch,inst_39562);
} else {
if((state_val_39583 === (13))){
var inst_39576 = (state_39582[(2)]);
var state_39582__$1 = state_39582;
var statearr_39587_39613 = state_39582__$1;
(statearr_39587_39613[(2)] = inst_39576);

(statearr_39587_39613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39583 === (6))){
var inst_39567 = (state_39582[(2)]);
var state_39582__$1 = state_39582;
if(cljs.core.truth_(inst_39567)){
var statearr_39588_39614 = state_39582__$1;
(statearr_39588_39614[(1)] = (8));

} else {
var statearr_39589_39615 = state_39582__$1;
(statearr_39589_39615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39583 === (3))){
var inst_39580 = (state_39582[(2)]);
var state_39582__$1 = state_39582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39582__$1,inst_39580);
} else {
if((state_val_39583 === (12))){
var state_39582__$1 = state_39582;
var statearr_39590_39616 = state_39582__$1;
(statearr_39590_39616[(2)] = null);

(statearr_39590_39616[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39583 === (2))){
var inst_39559 = (state_39582[(7)]);
var state_39582__$1 = state_39582;
if(cljs.core.truth_(inst_39559)){
var statearr_39591_39617 = state_39582__$1;
(statearr_39591_39617[(1)] = (4));

} else {
var statearr_39592_39618 = state_39582__$1;
(statearr_39592_39618[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39583 === (11))){
var inst_39573 = cljs.core.async.close_BANG_.call(null,ch);
var state_39582__$1 = state_39582;
var statearr_39593_39619 = state_39582__$1;
(statearr_39593_39619[(2)] = inst_39573);

(statearr_39593_39619[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39583 === (9))){
var state_39582__$1 = state_39582;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39594_39620 = state_39582__$1;
(statearr_39594_39620[(1)] = (11));

} else {
var statearr_39595_39621 = state_39582__$1;
(statearr_39595_39621[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39583 === (5))){
var inst_39559 = (state_39582[(7)]);
var state_39582__$1 = state_39582;
var statearr_39596_39622 = state_39582__$1;
(statearr_39596_39622[(2)] = inst_39559);

(statearr_39596_39622[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39583 === (10))){
var inst_39578 = (state_39582[(2)]);
var state_39582__$1 = state_39582;
var statearr_39597_39623 = state_39582__$1;
(statearr_39597_39623[(2)] = inst_39578);

(statearr_39597_39623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39583 === (8))){
var inst_39559 = (state_39582[(7)]);
var inst_39569 = cljs.core.next.call(null,inst_39559);
var inst_39559__$1 = inst_39569;
var state_39582__$1 = (function (){var statearr_39598 = state_39582;
(statearr_39598[(7)] = inst_39559__$1);

return statearr_39598;
})();
var statearr_39599_39624 = state_39582__$1;
(statearr_39599_39624[(2)] = null);

(statearr_39599_39624[(1)] = (2));


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
});})(c__11475__auto__))
;
return ((function (switch__11410__auto__,c__11475__auto__){
return (function() {
var cljs$core$async$state_machine__11411__auto__ = null;
var cljs$core$async$state_machine__11411__auto____0 = (function (){
var statearr_39603 = [null,null,null,null,null,null,null,null];
(statearr_39603[(0)] = cljs$core$async$state_machine__11411__auto__);

(statearr_39603[(1)] = (1));

return statearr_39603;
});
var cljs$core$async$state_machine__11411__auto____1 = (function (state_39582){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_39582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e39604){if((e39604 instanceof Object)){
var ex__11414__auto__ = e39604;
var statearr_39605_39625 = state_39582;
(statearr_39605_39625[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39626 = state_39582;
state_39582 = G__39626;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
cljs$core$async$state_machine__11411__auto__ = function(state_39582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11411__auto____1.call(this,state_39582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11411__auto____0;
cljs$core$async$state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11411__auto____1;
return cljs$core$async$state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto__))
})();
var state__11477__auto__ = (function (){var statearr_39606 = f__11476__auto__.call(null);
(statearr_39606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto__);

return statearr_39606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto__))
);

return c__11475__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async39852 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39852 = (function (ch,cs,meta39853){
this.ch = ch;
this.cs = cs;
this.meta39853 = meta39853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_39854,meta39853__$1){
var self__ = this;
var _39854__$1 = this;
return (new cljs.core.async.t_cljs$core$async39852(self__.ch,self__.cs,meta39853__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async39852.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_39854){
var self__ = this;
var _39854__$1 = this;
return self__.meta39853;
});})(cs))
;

cljs.core.async.t_cljs$core$async39852.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39852.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async39852.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39852.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39852.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39852.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39852.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta39853","meta39853",764887685,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async39852.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39852.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39852";

cljs.core.async.t_cljs$core$async39852.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async39852");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async39852 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async39852(ch__$1,cs__$1,meta39853){
return (new cljs.core.async.t_cljs$core$async39852(ch__$1,cs__$1,meta39853));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async39852(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__11475__auto___40077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto___40077,cs,m,dchan,dctr,done){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto___40077,cs,m,dchan,dctr,done){
return (function (state_39989){
var state_val_39990 = (state_39989[(1)]);
if((state_val_39990 === (7))){
var inst_39985 = (state_39989[(2)]);
var state_39989__$1 = state_39989;
var statearr_39991_40078 = state_39989__$1;
(statearr_39991_40078[(2)] = inst_39985);

(statearr_39991_40078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (20))){
var inst_39888 = (state_39989[(7)]);
var inst_39900 = cljs.core.first.call(null,inst_39888);
var inst_39901 = cljs.core.nth.call(null,inst_39900,(0),null);
var inst_39902 = cljs.core.nth.call(null,inst_39900,(1),null);
var state_39989__$1 = (function (){var statearr_39992 = state_39989;
(statearr_39992[(8)] = inst_39901);

return statearr_39992;
})();
if(cljs.core.truth_(inst_39902)){
var statearr_39993_40079 = state_39989__$1;
(statearr_39993_40079[(1)] = (22));

} else {
var statearr_39994_40080 = state_39989__$1;
(statearr_39994_40080[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (27))){
var inst_39930 = (state_39989[(9)]);
var inst_39932 = (state_39989[(10)]);
var inst_39937 = (state_39989[(11)]);
var inst_39857 = (state_39989[(12)]);
var inst_39937__$1 = cljs.core._nth.call(null,inst_39930,inst_39932);
var inst_39938 = cljs.core.async.put_BANG_.call(null,inst_39937__$1,inst_39857,done);
var state_39989__$1 = (function (){var statearr_39995 = state_39989;
(statearr_39995[(11)] = inst_39937__$1);

return statearr_39995;
})();
if(cljs.core.truth_(inst_39938)){
var statearr_39996_40081 = state_39989__$1;
(statearr_39996_40081[(1)] = (30));

} else {
var statearr_39997_40082 = state_39989__$1;
(statearr_39997_40082[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (1))){
var state_39989__$1 = state_39989;
var statearr_39998_40083 = state_39989__$1;
(statearr_39998_40083[(2)] = null);

(statearr_39998_40083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (24))){
var inst_39888 = (state_39989[(7)]);
var inst_39907 = (state_39989[(2)]);
var inst_39908 = cljs.core.next.call(null,inst_39888);
var inst_39866 = inst_39908;
var inst_39867 = null;
var inst_39868 = (0);
var inst_39869 = (0);
var state_39989__$1 = (function (){var statearr_39999 = state_39989;
(statearr_39999[(13)] = inst_39907);

(statearr_39999[(14)] = inst_39868);

(statearr_39999[(15)] = inst_39869);

(statearr_39999[(16)] = inst_39867);

(statearr_39999[(17)] = inst_39866);

return statearr_39999;
})();
var statearr_40000_40084 = state_39989__$1;
(statearr_40000_40084[(2)] = null);

(statearr_40000_40084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (39))){
var state_39989__$1 = state_39989;
var statearr_40004_40085 = state_39989__$1;
(statearr_40004_40085[(2)] = null);

(statearr_40004_40085[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (4))){
var inst_39857 = (state_39989[(12)]);
var inst_39857__$1 = (state_39989[(2)]);
var inst_39858 = (inst_39857__$1 == null);
var state_39989__$1 = (function (){var statearr_40005 = state_39989;
(statearr_40005[(12)] = inst_39857__$1);

return statearr_40005;
})();
if(cljs.core.truth_(inst_39858)){
var statearr_40006_40086 = state_39989__$1;
(statearr_40006_40086[(1)] = (5));

} else {
var statearr_40007_40087 = state_39989__$1;
(statearr_40007_40087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (15))){
var inst_39868 = (state_39989[(14)]);
var inst_39869 = (state_39989[(15)]);
var inst_39867 = (state_39989[(16)]);
var inst_39866 = (state_39989[(17)]);
var inst_39884 = (state_39989[(2)]);
var inst_39885 = (inst_39869 + (1));
var tmp40001 = inst_39868;
var tmp40002 = inst_39867;
var tmp40003 = inst_39866;
var inst_39866__$1 = tmp40003;
var inst_39867__$1 = tmp40002;
var inst_39868__$1 = tmp40001;
var inst_39869__$1 = inst_39885;
var state_39989__$1 = (function (){var statearr_40008 = state_39989;
(statearr_40008[(14)] = inst_39868__$1);

(statearr_40008[(15)] = inst_39869__$1);

(statearr_40008[(16)] = inst_39867__$1);

(statearr_40008[(18)] = inst_39884);

(statearr_40008[(17)] = inst_39866__$1);

return statearr_40008;
})();
var statearr_40009_40088 = state_39989__$1;
(statearr_40009_40088[(2)] = null);

(statearr_40009_40088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (21))){
var inst_39911 = (state_39989[(2)]);
var state_39989__$1 = state_39989;
var statearr_40013_40089 = state_39989__$1;
(statearr_40013_40089[(2)] = inst_39911);

(statearr_40013_40089[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (31))){
var inst_39937 = (state_39989[(11)]);
var inst_39941 = done.call(null,null);
var inst_39942 = cljs.core.async.untap_STAR_.call(null,m,inst_39937);
var state_39989__$1 = (function (){var statearr_40014 = state_39989;
(statearr_40014[(19)] = inst_39941);

return statearr_40014;
})();
var statearr_40015_40090 = state_39989__$1;
(statearr_40015_40090[(2)] = inst_39942);

(statearr_40015_40090[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (32))){
var inst_39930 = (state_39989[(9)]);
var inst_39929 = (state_39989[(20)]);
var inst_39931 = (state_39989[(21)]);
var inst_39932 = (state_39989[(10)]);
var inst_39944 = (state_39989[(2)]);
var inst_39945 = (inst_39932 + (1));
var tmp40010 = inst_39930;
var tmp40011 = inst_39929;
var tmp40012 = inst_39931;
var inst_39929__$1 = tmp40011;
var inst_39930__$1 = tmp40010;
var inst_39931__$1 = tmp40012;
var inst_39932__$1 = inst_39945;
var state_39989__$1 = (function (){var statearr_40016 = state_39989;
(statearr_40016[(9)] = inst_39930__$1);

(statearr_40016[(20)] = inst_39929__$1);

(statearr_40016[(22)] = inst_39944);

(statearr_40016[(21)] = inst_39931__$1);

(statearr_40016[(10)] = inst_39932__$1);

return statearr_40016;
})();
var statearr_40017_40091 = state_39989__$1;
(statearr_40017_40091[(2)] = null);

(statearr_40017_40091[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (40))){
var inst_39957 = (state_39989[(23)]);
var inst_39961 = done.call(null,null);
var inst_39962 = cljs.core.async.untap_STAR_.call(null,m,inst_39957);
var state_39989__$1 = (function (){var statearr_40018 = state_39989;
(statearr_40018[(24)] = inst_39961);

return statearr_40018;
})();
var statearr_40019_40092 = state_39989__$1;
(statearr_40019_40092[(2)] = inst_39962);

(statearr_40019_40092[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (33))){
var inst_39948 = (state_39989[(25)]);
var inst_39950 = cljs.core.chunked_seq_QMARK_.call(null,inst_39948);
var state_39989__$1 = state_39989;
if(inst_39950){
var statearr_40020_40093 = state_39989__$1;
(statearr_40020_40093[(1)] = (36));

} else {
var statearr_40021_40094 = state_39989__$1;
(statearr_40021_40094[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (13))){
var inst_39878 = (state_39989[(26)]);
var inst_39881 = cljs.core.async.close_BANG_.call(null,inst_39878);
var state_39989__$1 = state_39989;
var statearr_40022_40095 = state_39989__$1;
(statearr_40022_40095[(2)] = inst_39881);

(statearr_40022_40095[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (22))){
var inst_39901 = (state_39989[(8)]);
var inst_39904 = cljs.core.async.close_BANG_.call(null,inst_39901);
var state_39989__$1 = state_39989;
var statearr_40023_40096 = state_39989__$1;
(statearr_40023_40096[(2)] = inst_39904);

(statearr_40023_40096[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (36))){
var inst_39948 = (state_39989[(25)]);
var inst_39952 = cljs.core.chunk_first.call(null,inst_39948);
var inst_39953 = cljs.core.chunk_rest.call(null,inst_39948);
var inst_39954 = cljs.core.count.call(null,inst_39952);
var inst_39929 = inst_39953;
var inst_39930 = inst_39952;
var inst_39931 = inst_39954;
var inst_39932 = (0);
var state_39989__$1 = (function (){var statearr_40024 = state_39989;
(statearr_40024[(9)] = inst_39930);

(statearr_40024[(20)] = inst_39929);

(statearr_40024[(21)] = inst_39931);

(statearr_40024[(10)] = inst_39932);

return statearr_40024;
})();
var statearr_40025_40097 = state_39989__$1;
(statearr_40025_40097[(2)] = null);

(statearr_40025_40097[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (41))){
var inst_39948 = (state_39989[(25)]);
var inst_39964 = (state_39989[(2)]);
var inst_39965 = cljs.core.next.call(null,inst_39948);
var inst_39929 = inst_39965;
var inst_39930 = null;
var inst_39931 = (0);
var inst_39932 = (0);
var state_39989__$1 = (function (){var statearr_40026 = state_39989;
(statearr_40026[(9)] = inst_39930);

(statearr_40026[(20)] = inst_39929);

(statearr_40026[(21)] = inst_39931);

(statearr_40026[(27)] = inst_39964);

(statearr_40026[(10)] = inst_39932);

return statearr_40026;
})();
var statearr_40027_40098 = state_39989__$1;
(statearr_40027_40098[(2)] = null);

(statearr_40027_40098[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (43))){
var state_39989__$1 = state_39989;
var statearr_40028_40099 = state_39989__$1;
(statearr_40028_40099[(2)] = null);

(statearr_40028_40099[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (29))){
var inst_39973 = (state_39989[(2)]);
var state_39989__$1 = state_39989;
var statearr_40029_40100 = state_39989__$1;
(statearr_40029_40100[(2)] = inst_39973);

(statearr_40029_40100[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (44))){
var inst_39982 = (state_39989[(2)]);
var state_39989__$1 = (function (){var statearr_40030 = state_39989;
(statearr_40030[(28)] = inst_39982);

return statearr_40030;
})();
var statearr_40031_40101 = state_39989__$1;
(statearr_40031_40101[(2)] = null);

(statearr_40031_40101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (6))){
var inst_39921 = (state_39989[(29)]);
var inst_39920 = cljs.core.deref.call(null,cs);
var inst_39921__$1 = cljs.core.keys.call(null,inst_39920);
var inst_39922 = cljs.core.count.call(null,inst_39921__$1);
var inst_39923 = cljs.core.reset_BANG_.call(null,dctr,inst_39922);
var inst_39928 = cljs.core.seq.call(null,inst_39921__$1);
var inst_39929 = inst_39928;
var inst_39930 = null;
var inst_39931 = (0);
var inst_39932 = (0);
var state_39989__$1 = (function (){var statearr_40032 = state_39989;
(statearr_40032[(9)] = inst_39930);

(statearr_40032[(20)] = inst_39929);

(statearr_40032[(21)] = inst_39931);

(statearr_40032[(29)] = inst_39921__$1);

(statearr_40032[(30)] = inst_39923);

(statearr_40032[(10)] = inst_39932);

return statearr_40032;
})();
var statearr_40033_40102 = state_39989__$1;
(statearr_40033_40102[(2)] = null);

(statearr_40033_40102[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (28))){
var inst_39948 = (state_39989[(25)]);
var inst_39929 = (state_39989[(20)]);
var inst_39948__$1 = cljs.core.seq.call(null,inst_39929);
var state_39989__$1 = (function (){var statearr_40034 = state_39989;
(statearr_40034[(25)] = inst_39948__$1);

return statearr_40034;
})();
if(inst_39948__$1){
var statearr_40035_40103 = state_39989__$1;
(statearr_40035_40103[(1)] = (33));

} else {
var statearr_40036_40104 = state_39989__$1;
(statearr_40036_40104[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (25))){
var inst_39931 = (state_39989[(21)]);
var inst_39932 = (state_39989[(10)]);
var inst_39934 = (inst_39932 < inst_39931);
var inst_39935 = inst_39934;
var state_39989__$1 = state_39989;
if(cljs.core.truth_(inst_39935)){
var statearr_40037_40105 = state_39989__$1;
(statearr_40037_40105[(1)] = (27));

} else {
var statearr_40038_40106 = state_39989__$1;
(statearr_40038_40106[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (34))){
var state_39989__$1 = state_39989;
var statearr_40039_40107 = state_39989__$1;
(statearr_40039_40107[(2)] = null);

(statearr_40039_40107[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (17))){
var state_39989__$1 = state_39989;
var statearr_40040_40108 = state_39989__$1;
(statearr_40040_40108[(2)] = null);

(statearr_40040_40108[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (3))){
var inst_39987 = (state_39989[(2)]);
var state_39989__$1 = state_39989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39989__$1,inst_39987);
} else {
if((state_val_39990 === (12))){
var inst_39916 = (state_39989[(2)]);
var state_39989__$1 = state_39989;
var statearr_40041_40109 = state_39989__$1;
(statearr_40041_40109[(2)] = inst_39916);

(statearr_40041_40109[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (2))){
var state_39989__$1 = state_39989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39989__$1,(4),ch);
} else {
if((state_val_39990 === (23))){
var state_39989__$1 = state_39989;
var statearr_40042_40110 = state_39989__$1;
(statearr_40042_40110[(2)] = null);

(statearr_40042_40110[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (35))){
var inst_39971 = (state_39989[(2)]);
var state_39989__$1 = state_39989;
var statearr_40043_40111 = state_39989__$1;
(statearr_40043_40111[(2)] = inst_39971);

(statearr_40043_40111[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (19))){
var inst_39888 = (state_39989[(7)]);
var inst_39892 = cljs.core.chunk_first.call(null,inst_39888);
var inst_39893 = cljs.core.chunk_rest.call(null,inst_39888);
var inst_39894 = cljs.core.count.call(null,inst_39892);
var inst_39866 = inst_39893;
var inst_39867 = inst_39892;
var inst_39868 = inst_39894;
var inst_39869 = (0);
var state_39989__$1 = (function (){var statearr_40044 = state_39989;
(statearr_40044[(14)] = inst_39868);

(statearr_40044[(15)] = inst_39869);

(statearr_40044[(16)] = inst_39867);

(statearr_40044[(17)] = inst_39866);

return statearr_40044;
})();
var statearr_40045_40112 = state_39989__$1;
(statearr_40045_40112[(2)] = null);

(statearr_40045_40112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (11))){
var inst_39888 = (state_39989[(7)]);
var inst_39866 = (state_39989[(17)]);
var inst_39888__$1 = cljs.core.seq.call(null,inst_39866);
var state_39989__$1 = (function (){var statearr_40046 = state_39989;
(statearr_40046[(7)] = inst_39888__$1);

return statearr_40046;
})();
if(inst_39888__$1){
var statearr_40047_40113 = state_39989__$1;
(statearr_40047_40113[(1)] = (16));

} else {
var statearr_40048_40114 = state_39989__$1;
(statearr_40048_40114[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (9))){
var inst_39918 = (state_39989[(2)]);
var state_39989__$1 = state_39989;
var statearr_40049_40115 = state_39989__$1;
(statearr_40049_40115[(2)] = inst_39918);

(statearr_40049_40115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (5))){
var inst_39864 = cljs.core.deref.call(null,cs);
var inst_39865 = cljs.core.seq.call(null,inst_39864);
var inst_39866 = inst_39865;
var inst_39867 = null;
var inst_39868 = (0);
var inst_39869 = (0);
var state_39989__$1 = (function (){var statearr_40050 = state_39989;
(statearr_40050[(14)] = inst_39868);

(statearr_40050[(15)] = inst_39869);

(statearr_40050[(16)] = inst_39867);

(statearr_40050[(17)] = inst_39866);

return statearr_40050;
})();
var statearr_40051_40116 = state_39989__$1;
(statearr_40051_40116[(2)] = null);

(statearr_40051_40116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (14))){
var state_39989__$1 = state_39989;
var statearr_40052_40117 = state_39989__$1;
(statearr_40052_40117[(2)] = null);

(statearr_40052_40117[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (45))){
var inst_39979 = (state_39989[(2)]);
var state_39989__$1 = state_39989;
var statearr_40053_40118 = state_39989__$1;
(statearr_40053_40118[(2)] = inst_39979);

(statearr_40053_40118[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (26))){
var inst_39921 = (state_39989[(29)]);
var inst_39975 = (state_39989[(2)]);
var inst_39976 = cljs.core.seq.call(null,inst_39921);
var state_39989__$1 = (function (){var statearr_40054 = state_39989;
(statearr_40054[(31)] = inst_39975);

return statearr_40054;
})();
if(inst_39976){
var statearr_40055_40119 = state_39989__$1;
(statearr_40055_40119[(1)] = (42));

} else {
var statearr_40056_40120 = state_39989__$1;
(statearr_40056_40120[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (16))){
var inst_39888 = (state_39989[(7)]);
var inst_39890 = cljs.core.chunked_seq_QMARK_.call(null,inst_39888);
var state_39989__$1 = state_39989;
if(inst_39890){
var statearr_40057_40121 = state_39989__$1;
(statearr_40057_40121[(1)] = (19));

} else {
var statearr_40058_40122 = state_39989__$1;
(statearr_40058_40122[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (38))){
var inst_39968 = (state_39989[(2)]);
var state_39989__$1 = state_39989;
var statearr_40059_40123 = state_39989__$1;
(statearr_40059_40123[(2)] = inst_39968);

(statearr_40059_40123[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (30))){
var state_39989__$1 = state_39989;
var statearr_40060_40124 = state_39989__$1;
(statearr_40060_40124[(2)] = null);

(statearr_40060_40124[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (10))){
var inst_39869 = (state_39989[(15)]);
var inst_39867 = (state_39989[(16)]);
var inst_39877 = cljs.core._nth.call(null,inst_39867,inst_39869);
var inst_39878 = cljs.core.nth.call(null,inst_39877,(0),null);
var inst_39879 = cljs.core.nth.call(null,inst_39877,(1),null);
var state_39989__$1 = (function (){var statearr_40061 = state_39989;
(statearr_40061[(26)] = inst_39878);

return statearr_40061;
})();
if(cljs.core.truth_(inst_39879)){
var statearr_40062_40125 = state_39989__$1;
(statearr_40062_40125[(1)] = (13));

} else {
var statearr_40063_40126 = state_39989__$1;
(statearr_40063_40126[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (18))){
var inst_39914 = (state_39989[(2)]);
var state_39989__$1 = state_39989;
var statearr_40064_40127 = state_39989__$1;
(statearr_40064_40127[(2)] = inst_39914);

(statearr_40064_40127[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (42))){
var state_39989__$1 = state_39989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39989__$1,(45),dchan);
} else {
if((state_val_39990 === (37))){
var inst_39948 = (state_39989[(25)]);
var inst_39957 = (state_39989[(23)]);
var inst_39857 = (state_39989[(12)]);
var inst_39957__$1 = cljs.core.first.call(null,inst_39948);
var inst_39958 = cljs.core.async.put_BANG_.call(null,inst_39957__$1,inst_39857,done);
var state_39989__$1 = (function (){var statearr_40065 = state_39989;
(statearr_40065[(23)] = inst_39957__$1);

return statearr_40065;
})();
if(cljs.core.truth_(inst_39958)){
var statearr_40066_40128 = state_39989__$1;
(statearr_40066_40128[(1)] = (39));

} else {
var statearr_40067_40129 = state_39989__$1;
(statearr_40067_40129[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (8))){
var inst_39868 = (state_39989[(14)]);
var inst_39869 = (state_39989[(15)]);
var inst_39871 = (inst_39869 < inst_39868);
var inst_39872 = inst_39871;
var state_39989__$1 = state_39989;
if(cljs.core.truth_(inst_39872)){
var statearr_40068_40130 = state_39989__$1;
(statearr_40068_40130[(1)] = (10));

} else {
var statearr_40069_40131 = state_39989__$1;
(statearr_40069_40131[(1)] = (11));

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
});})(c__11475__auto___40077,cs,m,dchan,dctr,done))
;
return ((function (switch__11410__auto__,c__11475__auto___40077,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__11411__auto__ = null;
var cljs$core$async$mult_$_state_machine__11411__auto____0 = (function (){
var statearr_40073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40073[(0)] = cljs$core$async$mult_$_state_machine__11411__auto__);

(statearr_40073[(1)] = (1));

return statearr_40073;
});
var cljs$core$async$mult_$_state_machine__11411__auto____1 = (function (state_39989){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_39989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e40074){if((e40074 instanceof Object)){
var ex__11414__auto__ = e40074;
var statearr_40075_40132 = state_39989;
(statearr_40075_40132[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40133 = state_39989;
state_39989 = G__40133;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11411__auto__ = function(state_39989){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11411__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11411__auto____1.call(this,state_39989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11411__auto____0;
cljs$core$async$mult_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11411__auto____1;
return cljs$core$async$mult_$_state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto___40077,cs,m,dchan,dctr,done))
})();
var state__11477__auto__ = (function (){var statearr_40076 = f__11476__auto__.call(null);
(statearr_40076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___40077);

return statearr_40076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto___40077,cs,m,dchan,dctr,done))
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
var args40134 = [];
var len__7651__auto___40137 = arguments.length;
var i__7652__auto___40138 = (0);
while(true){
if((i__7652__auto___40138 < len__7651__auto___40137)){
args40134.push((arguments[i__7652__auto___40138]));

var G__40139 = (i__7652__auto___40138 + (1));
i__7652__auto___40138 = G__40139;
continue;
} else {
}
break;
}

var G__40136 = args40134.length;
switch (G__40136) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40134.length)].join('')));

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
var len__7651__auto___40151 = arguments.length;
var i__7652__auto___40152 = (0);
while(true){
if((i__7652__auto___40152 < len__7651__auto___40151)){
args__7658__auto__.push((arguments[i__7652__auto___40152]));

var G__40153 = (i__7652__auto___40152 + (1));
i__7652__auto___40152 = G__40153;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40145){
var map__40146 = p__40145;
var map__40146__$1 = ((((!((map__40146 == null)))?((((map__40146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40146):map__40146);
var opts = map__40146__$1;
var statearr_40148_40154 = state;
(statearr_40148_40154[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__40146,map__40146__$1,opts){
return (function (val){
var statearr_40149_40155 = state;
(statearr_40149_40155[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__40146,map__40146__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_40150_40156 = state;
(statearr_40150_40156[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40141){
var G__40142 = cljs.core.first.call(null,seq40141);
var seq40141__$1 = cljs.core.next.call(null,seq40141);
var G__40143 = cljs.core.first.call(null,seq40141__$1);
var seq40141__$2 = cljs.core.next.call(null,seq40141__$1);
var G__40144 = cljs.core.first.call(null,seq40141__$2);
var seq40141__$3 = cljs.core.next.call(null,seq40141__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40142,G__40143,G__40144,seq40141__$3);
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
if(typeof cljs.core.async.t_cljs$core$async40324 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40324 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta40325){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta40325 = meta40325;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40326,meta40325__$1){
var self__ = this;
var _40326__$1 = this;
return (new cljs.core.async.t_cljs$core$async40324(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta40325__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40324.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40326){
var self__ = this;
var _40326__$1 = this;
return self__.meta40325;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40324.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40324.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40324.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40324.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40324.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40324.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40324.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40324.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async40324.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta40325","meta40325",1496645043,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40324.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40324.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40324";

cljs.core.async.t_cljs$core$async40324.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async40324");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async40324 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async40324(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40325){
return (new cljs.core.async.t_cljs$core$async40324(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40325));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async40324(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11475__auto___40491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto___40491,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto___40491,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_40428){
var state_val_40429 = (state_40428[(1)]);
if((state_val_40429 === (7))){
var inst_40343 = (state_40428[(2)]);
var state_40428__$1 = state_40428;
var statearr_40430_40492 = state_40428__$1;
(statearr_40430_40492[(2)] = inst_40343);

(statearr_40430_40492[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (20))){
var inst_40355 = (state_40428[(7)]);
var state_40428__$1 = state_40428;
var statearr_40431_40493 = state_40428__$1;
(statearr_40431_40493[(2)] = inst_40355);

(statearr_40431_40493[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (27))){
var state_40428__$1 = state_40428;
var statearr_40432_40494 = state_40428__$1;
(statearr_40432_40494[(2)] = null);

(statearr_40432_40494[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (1))){
var inst_40330 = (state_40428[(8)]);
var inst_40330__$1 = calc_state.call(null);
var inst_40332 = (inst_40330__$1 == null);
var inst_40333 = cljs.core.not.call(null,inst_40332);
var state_40428__$1 = (function (){var statearr_40433 = state_40428;
(statearr_40433[(8)] = inst_40330__$1);

return statearr_40433;
})();
if(inst_40333){
var statearr_40434_40495 = state_40428__$1;
(statearr_40434_40495[(1)] = (2));

} else {
var statearr_40435_40496 = state_40428__$1;
(statearr_40435_40496[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (24))){
var inst_40402 = (state_40428[(9)]);
var inst_40379 = (state_40428[(10)]);
var inst_40388 = (state_40428[(11)]);
var inst_40402__$1 = inst_40379.call(null,inst_40388);
var state_40428__$1 = (function (){var statearr_40436 = state_40428;
(statearr_40436[(9)] = inst_40402__$1);

return statearr_40436;
})();
if(cljs.core.truth_(inst_40402__$1)){
var statearr_40437_40497 = state_40428__$1;
(statearr_40437_40497[(1)] = (29));

} else {
var statearr_40438_40498 = state_40428__$1;
(statearr_40438_40498[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (4))){
var inst_40346 = (state_40428[(2)]);
var state_40428__$1 = state_40428;
if(cljs.core.truth_(inst_40346)){
var statearr_40439_40499 = state_40428__$1;
(statearr_40439_40499[(1)] = (8));

} else {
var statearr_40440_40500 = state_40428__$1;
(statearr_40440_40500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (15))){
var inst_40373 = (state_40428[(2)]);
var state_40428__$1 = state_40428;
if(cljs.core.truth_(inst_40373)){
var statearr_40441_40501 = state_40428__$1;
(statearr_40441_40501[(1)] = (19));

} else {
var statearr_40442_40502 = state_40428__$1;
(statearr_40442_40502[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (21))){
var inst_40378 = (state_40428[(12)]);
var inst_40378__$1 = (state_40428[(2)]);
var inst_40379 = cljs.core.get.call(null,inst_40378__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40380 = cljs.core.get.call(null,inst_40378__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40381 = cljs.core.get.call(null,inst_40378__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40428__$1 = (function (){var statearr_40443 = state_40428;
(statearr_40443[(10)] = inst_40379);

(statearr_40443[(13)] = inst_40380);

(statearr_40443[(12)] = inst_40378__$1);

return statearr_40443;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_40428__$1,(22),inst_40381);
} else {
if((state_val_40429 === (31))){
var inst_40410 = (state_40428[(2)]);
var state_40428__$1 = state_40428;
if(cljs.core.truth_(inst_40410)){
var statearr_40444_40503 = state_40428__$1;
(statearr_40444_40503[(1)] = (32));

} else {
var statearr_40445_40504 = state_40428__$1;
(statearr_40445_40504[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (32))){
var inst_40387 = (state_40428[(14)]);
var state_40428__$1 = state_40428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40428__$1,(35),out,inst_40387);
} else {
if((state_val_40429 === (33))){
var inst_40378 = (state_40428[(12)]);
var inst_40355 = inst_40378;
var state_40428__$1 = (function (){var statearr_40446 = state_40428;
(statearr_40446[(7)] = inst_40355);

return statearr_40446;
})();
var statearr_40447_40505 = state_40428__$1;
(statearr_40447_40505[(2)] = null);

(statearr_40447_40505[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (13))){
var inst_40355 = (state_40428[(7)]);
var inst_40362 = inst_40355.cljs$lang$protocol_mask$partition0$;
var inst_40363 = (inst_40362 & (64));
var inst_40364 = inst_40355.cljs$core$ISeq$;
var inst_40365 = (cljs.core.PROTOCOL_SENTINEL === inst_40364);
var inst_40366 = (inst_40363) || (inst_40365);
var state_40428__$1 = state_40428;
if(cljs.core.truth_(inst_40366)){
var statearr_40448_40506 = state_40428__$1;
(statearr_40448_40506[(1)] = (16));

} else {
var statearr_40449_40507 = state_40428__$1;
(statearr_40449_40507[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (22))){
var inst_40387 = (state_40428[(14)]);
var inst_40388 = (state_40428[(11)]);
var inst_40386 = (state_40428[(2)]);
var inst_40387__$1 = cljs.core.nth.call(null,inst_40386,(0),null);
var inst_40388__$1 = cljs.core.nth.call(null,inst_40386,(1),null);
var inst_40389 = (inst_40387__$1 == null);
var inst_40390 = cljs.core._EQ_.call(null,inst_40388__$1,change);
var inst_40391 = (inst_40389) || (inst_40390);
var state_40428__$1 = (function (){var statearr_40450 = state_40428;
(statearr_40450[(14)] = inst_40387__$1);

(statearr_40450[(11)] = inst_40388__$1);

return statearr_40450;
})();
if(cljs.core.truth_(inst_40391)){
var statearr_40451_40508 = state_40428__$1;
(statearr_40451_40508[(1)] = (23));

} else {
var statearr_40452_40509 = state_40428__$1;
(statearr_40452_40509[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (36))){
var inst_40378 = (state_40428[(12)]);
var inst_40355 = inst_40378;
var state_40428__$1 = (function (){var statearr_40453 = state_40428;
(statearr_40453[(7)] = inst_40355);

return statearr_40453;
})();
var statearr_40454_40510 = state_40428__$1;
(statearr_40454_40510[(2)] = null);

(statearr_40454_40510[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (29))){
var inst_40402 = (state_40428[(9)]);
var state_40428__$1 = state_40428;
var statearr_40455_40511 = state_40428__$1;
(statearr_40455_40511[(2)] = inst_40402);

(statearr_40455_40511[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (6))){
var state_40428__$1 = state_40428;
var statearr_40456_40512 = state_40428__$1;
(statearr_40456_40512[(2)] = false);

(statearr_40456_40512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (28))){
var inst_40398 = (state_40428[(2)]);
var inst_40399 = calc_state.call(null);
var inst_40355 = inst_40399;
var state_40428__$1 = (function (){var statearr_40457 = state_40428;
(statearr_40457[(7)] = inst_40355);

(statearr_40457[(15)] = inst_40398);

return statearr_40457;
})();
var statearr_40458_40513 = state_40428__$1;
(statearr_40458_40513[(2)] = null);

(statearr_40458_40513[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (25))){
var inst_40424 = (state_40428[(2)]);
var state_40428__$1 = state_40428;
var statearr_40459_40514 = state_40428__$1;
(statearr_40459_40514[(2)] = inst_40424);

(statearr_40459_40514[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (34))){
var inst_40422 = (state_40428[(2)]);
var state_40428__$1 = state_40428;
var statearr_40460_40515 = state_40428__$1;
(statearr_40460_40515[(2)] = inst_40422);

(statearr_40460_40515[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (17))){
var state_40428__$1 = state_40428;
var statearr_40461_40516 = state_40428__$1;
(statearr_40461_40516[(2)] = false);

(statearr_40461_40516[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (3))){
var state_40428__$1 = state_40428;
var statearr_40462_40517 = state_40428__$1;
(statearr_40462_40517[(2)] = false);

(statearr_40462_40517[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (12))){
var inst_40426 = (state_40428[(2)]);
var state_40428__$1 = state_40428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40428__$1,inst_40426);
} else {
if((state_val_40429 === (2))){
var inst_40330 = (state_40428[(8)]);
var inst_40335 = inst_40330.cljs$lang$protocol_mask$partition0$;
var inst_40336 = (inst_40335 & (64));
var inst_40337 = inst_40330.cljs$core$ISeq$;
var inst_40338 = (cljs.core.PROTOCOL_SENTINEL === inst_40337);
var inst_40339 = (inst_40336) || (inst_40338);
var state_40428__$1 = state_40428;
if(cljs.core.truth_(inst_40339)){
var statearr_40463_40518 = state_40428__$1;
(statearr_40463_40518[(1)] = (5));

} else {
var statearr_40464_40519 = state_40428__$1;
(statearr_40464_40519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (23))){
var inst_40387 = (state_40428[(14)]);
var inst_40393 = (inst_40387 == null);
var state_40428__$1 = state_40428;
if(cljs.core.truth_(inst_40393)){
var statearr_40465_40520 = state_40428__$1;
(statearr_40465_40520[(1)] = (26));

} else {
var statearr_40466_40521 = state_40428__$1;
(statearr_40466_40521[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (35))){
var inst_40413 = (state_40428[(2)]);
var state_40428__$1 = state_40428;
if(cljs.core.truth_(inst_40413)){
var statearr_40467_40522 = state_40428__$1;
(statearr_40467_40522[(1)] = (36));

} else {
var statearr_40468_40523 = state_40428__$1;
(statearr_40468_40523[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (19))){
var inst_40355 = (state_40428[(7)]);
var inst_40375 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40355);
var state_40428__$1 = state_40428;
var statearr_40469_40524 = state_40428__$1;
(statearr_40469_40524[(2)] = inst_40375);

(statearr_40469_40524[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (11))){
var inst_40355 = (state_40428[(7)]);
var inst_40359 = (inst_40355 == null);
var inst_40360 = cljs.core.not.call(null,inst_40359);
var state_40428__$1 = state_40428;
if(inst_40360){
var statearr_40470_40525 = state_40428__$1;
(statearr_40470_40525[(1)] = (13));

} else {
var statearr_40471_40526 = state_40428__$1;
(statearr_40471_40526[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (9))){
var inst_40330 = (state_40428[(8)]);
var state_40428__$1 = state_40428;
var statearr_40472_40527 = state_40428__$1;
(statearr_40472_40527[(2)] = inst_40330);

(statearr_40472_40527[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (5))){
var state_40428__$1 = state_40428;
var statearr_40473_40528 = state_40428__$1;
(statearr_40473_40528[(2)] = true);

(statearr_40473_40528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (14))){
var state_40428__$1 = state_40428;
var statearr_40474_40529 = state_40428__$1;
(statearr_40474_40529[(2)] = false);

(statearr_40474_40529[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (26))){
var inst_40388 = (state_40428[(11)]);
var inst_40395 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_40388);
var state_40428__$1 = state_40428;
var statearr_40475_40530 = state_40428__$1;
(statearr_40475_40530[(2)] = inst_40395);

(statearr_40475_40530[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (16))){
var state_40428__$1 = state_40428;
var statearr_40476_40531 = state_40428__$1;
(statearr_40476_40531[(2)] = true);

(statearr_40476_40531[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (38))){
var inst_40418 = (state_40428[(2)]);
var state_40428__$1 = state_40428;
var statearr_40477_40532 = state_40428__$1;
(statearr_40477_40532[(2)] = inst_40418);

(statearr_40477_40532[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (30))){
var inst_40379 = (state_40428[(10)]);
var inst_40380 = (state_40428[(13)]);
var inst_40388 = (state_40428[(11)]);
var inst_40405 = cljs.core.empty_QMARK_.call(null,inst_40379);
var inst_40406 = inst_40380.call(null,inst_40388);
var inst_40407 = cljs.core.not.call(null,inst_40406);
var inst_40408 = (inst_40405) && (inst_40407);
var state_40428__$1 = state_40428;
var statearr_40478_40533 = state_40428__$1;
(statearr_40478_40533[(2)] = inst_40408);

(statearr_40478_40533[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (10))){
var inst_40330 = (state_40428[(8)]);
var inst_40351 = (state_40428[(2)]);
var inst_40352 = cljs.core.get.call(null,inst_40351,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40353 = cljs.core.get.call(null,inst_40351,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40354 = cljs.core.get.call(null,inst_40351,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40355 = inst_40330;
var state_40428__$1 = (function (){var statearr_40479 = state_40428;
(statearr_40479[(16)] = inst_40353);

(statearr_40479[(17)] = inst_40354);

(statearr_40479[(18)] = inst_40352);

(statearr_40479[(7)] = inst_40355);

return statearr_40479;
})();
var statearr_40480_40534 = state_40428__$1;
(statearr_40480_40534[(2)] = null);

(statearr_40480_40534[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (18))){
var inst_40370 = (state_40428[(2)]);
var state_40428__$1 = state_40428;
var statearr_40481_40535 = state_40428__$1;
(statearr_40481_40535[(2)] = inst_40370);

(statearr_40481_40535[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (37))){
var state_40428__$1 = state_40428;
var statearr_40482_40536 = state_40428__$1;
(statearr_40482_40536[(2)] = null);

(statearr_40482_40536[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (8))){
var inst_40330 = (state_40428[(8)]);
var inst_40348 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40330);
var state_40428__$1 = state_40428;
var statearr_40483_40537 = state_40428__$1;
(statearr_40483_40537[(2)] = inst_40348);

(statearr_40483_40537[(1)] = (10));


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
});})(c__11475__auto___40491,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11410__auto__,c__11475__auto___40491,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__11411__auto__ = null;
var cljs$core$async$mix_$_state_machine__11411__auto____0 = (function (){
var statearr_40487 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40487[(0)] = cljs$core$async$mix_$_state_machine__11411__auto__);

(statearr_40487[(1)] = (1));

return statearr_40487;
});
var cljs$core$async$mix_$_state_machine__11411__auto____1 = (function (state_40428){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_40428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e40488){if((e40488 instanceof Object)){
var ex__11414__auto__ = e40488;
var statearr_40489_40538 = state_40428;
(statearr_40489_40538[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40539 = state_40428;
state_40428 = G__40539;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11411__auto__ = function(state_40428){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11411__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11411__auto____1.call(this,state_40428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11411__auto____0;
cljs$core$async$mix_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11411__auto____1;
return cljs$core$async$mix_$_state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto___40491,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11477__auto__ = (function (){var statearr_40490 = f__11476__auto__.call(null);
(statearr_40490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___40491);

return statearr_40490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto___40491,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args40540 = [];
var len__7651__auto___40543 = arguments.length;
var i__7652__auto___40544 = (0);
while(true){
if((i__7652__auto___40544 < len__7651__auto___40543)){
args40540.push((arguments[i__7652__auto___40544]));

var G__40545 = (i__7652__auto___40544 + (1));
i__7652__auto___40544 = G__40545;
continue;
} else {
}
break;
}

var G__40542 = args40540.length;
switch (G__40542) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40540.length)].join('')));

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
var args40548 = [];
var len__7651__auto___40673 = arguments.length;
var i__7652__auto___40674 = (0);
while(true){
if((i__7652__auto___40674 < len__7651__auto___40673)){
args40548.push((arguments[i__7652__auto___40674]));

var G__40675 = (i__7652__auto___40674 + (1));
i__7652__auto___40674 = G__40675;
continue;
} else {
}
break;
}

var G__40550 = args40548.length;
switch (G__40550) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40548.length)].join('')));

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
return (function (p1__40547_SHARP_){
if(cljs.core.truth_(p1__40547_SHARP_.call(null,topic))){
return p1__40547_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__40547_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6543__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async40551 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40551 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40552){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40552 = meta40552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40553,meta40552__$1){
var self__ = this;
var _40553__$1 = this;
return (new cljs.core.async.t_cljs$core$async40551(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40552__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40551.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40553){
var self__ = this;
var _40553__$1 = this;
return self__.meta40552;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40551.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40551.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40551.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40551.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40551.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async40551.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40551.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40551.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40552","meta40552",2075426635,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40551.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40551.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40551";

cljs.core.async.t_cljs$core$async40551.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async40551");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async40551 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async40551(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40552){
return (new cljs.core.async.t_cljs$core$async40551(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40552));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async40551(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11475__auto___40677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto___40677,mults,ensure_mult,p){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto___40677,mults,ensure_mult,p){
return (function (state_40625){
var state_val_40626 = (state_40625[(1)]);
if((state_val_40626 === (7))){
var inst_40621 = (state_40625[(2)]);
var state_40625__$1 = state_40625;
var statearr_40627_40678 = state_40625__$1;
(statearr_40627_40678[(2)] = inst_40621);

(statearr_40627_40678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (20))){
var state_40625__$1 = state_40625;
var statearr_40628_40679 = state_40625__$1;
(statearr_40628_40679[(2)] = null);

(statearr_40628_40679[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (1))){
var state_40625__$1 = state_40625;
var statearr_40629_40680 = state_40625__$1;
(statearr_40629_40680[(2)] = null);

(statearr_40629_40680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (24))){
var inst_40604 = (state_40625[(7)]);
var inst_40613 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_40604);
var state_40625__$1 = state_40625;
var statearr_40630_40681 = state_40625__$1;
(statearr_40630_40681[(2)] = inst_40613);

(statearr_40630_40681[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (4))){
var inst_40556 = (state_40625[(8)]);
var inst_40556__$1 = (state_40625[(2)]);
var inst_40557 = (inst_40556__$1 == null);
var state_40625__$1 = (function (){var statearr_40631 = state_40625;
(statearr_40631[(8)] = inst_40556__$1);

return statearr_40631;
})();
if(cljs.core.truth_(inst_40557)){
var statearr_40632_40682 = state_40625__$1;
(statearr_40632_40682[(1)] = (5));

} else {
var statearr_40633_40683 = state_40625__$1;
(statearr_40633_40683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (15))){
var inst_40598 = (state_40625[(2)]);
var state_40625__$1 = state_40625;
var statearr_40634_40684 = state_40625__$1;
(statearr_40634_40684[(2)] = inst_40598);

(statearr_40634_40684[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (21))){
var inst_40618 = (state_40625[(2)]);
var state_40625__$1 = (function (){var statearr_40635 = state_40625;
(statearr_40635[(9)] = inst_40618);

return statearr_40635;
})();
var statearr_40636_40685 = state_40625__$1;
(statearr_40636_40685[(2)] = null);

(statearr_40636_40685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (13))){
var inst_40580 = (state_40625[(10)]);
var inst_40582 = cljs.core.chunked_seq_QMARK_.call(null,inst_40580);
var state_40625__$1 = state_40625;
if(inst_40582){
var statearr_40637_40686 = state_40625__$1;
(statearr_40637_40686[(1)] = (16));

} else {
var statearr_40638_40687 = state_40625__$1;
(statearr_40638_40687[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (22))){
var inst_40610 = (state_40625[(2)]);
var state_40625__$1 = state_40625;
if(cljs.core.truth_(inst_40610)){
var statearr_40639_40688 = state_40625__$1;
(statearr_40639_40688[(1)] = (23));

} else {
var statearr_40640_40689 = state_40625__$1;
(statearr_40640_40689[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (6))){
var inst_40556 = (state_40625[(8)]);
var inst_40604 = (state_40625[(7)]);
var inst_40606 = (state_40625[(11)]);
var inst_40604__$1 = topic_fn.call(null,inst_40556);
var inst_40605 = cljs.core.deref.call(null,mults);
var inst_40606__$1 = cljs.core.get.call(null,inst_40605,inst_40604__$1);
var state_40625__$1 = (function (){var statearr_40641 = state_40625;
(statearr_40641[(7)] = inst_40604__$1);

(statearr_40641[(11)] = inst_40606__$1);

return statearr_40641;
})();
if(cljs.core.truth_(inst_40606__$1)){
var statearr_40642_40690 = state_40625__$1;
(statearr_40642_40690[(1)] = (19));

} else {
var statearr_40643_40691 = state_40625__$1;
(statearr_40643_40691[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (25))){
var inst_40615 = (state_40625[(2)]);
var state_40625__$1 = state_40625;
var statearr_40644_40692 = state_40625__$1;
(statearr_40644_40692[(2)] = inst_40615);

(statearr_40644_40692[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (17))){
var inst_40580 = (state_40625[(10)]);
var inst_40589 = cljs.core.first.call(null,inst_40580);
var inst_40590 = cljs.core.async.muxch_STAR_.call(null,inst_40589);
var inst_40591 = cljs.core.async.close_BANG_.call(null,inst_40590);
var inst_40592 = cljs.core.next.call(null,inst_40580);
var inst_40566 = inst_40592;
var inst_40567 = null;
var inst_40568 = (0);
var inst_40569 = (0);
var state_40625__$1 = (function (){var statearr_40645 = state_40625;
(statearr_40645[(12)] = inst_40591);

(statearr_40645[(13)] = inst_40566);

(statearr_40645[(14)] = inst_40568);

(statearr_40645[(15)] = inst_40569);

(statearr_40645[(16)] = inst_40567);

return statearr_40645;
})();
var statearr_40646_40693 = state_40625__$1;
(statearr_40646_40693[(2)] = null);

(statearr_40646_40693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (3))){
var inst_40623 = (state_40625[(2)]);
var state_40625__$1 = state_40625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40625__$1,inst_40623);
} else {
if((state_val_40626 === (12))){
var inst_40600 = (state_40625[(2)]);
var state_40625__$1 = state_40625;
var statearr_40647_40694 = state_40625__$1;
(statearr_40647_40694[(2)] = inst_40600);

(statearr_40647_40694[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (2))){
var state_40625__$1 = state_40625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40625__$1,(4),ch);
} else {
if((state_val_40626 === (23))){
var state_40625__$1 = state_40625;
var statearr_40648_40695 = state_40625__$1;
(statearr_40648_40695[(2)] = null);

(statearr_40648_40695[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (19))){
var inst_40556 = (state_40625[(8)]);
var inst_40606 = (state_40625[(11)]);
var inst_40608 = cljs.core.async.muxch_STAR_.call(null,inst_40606);
var state_40625__$1 = state_40625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40625__$1,(22),inst_40608,inst_40556);
} else {
if((state_val_40626 === (11))){
var inst_40566 = (state_40625[(13)]);
var inst_40580 = (state_40625[(10)]);
var inst_40580__$1 = cljs.core.seq.call(null,inst_40566);
var state_40625__$1 = (function (){var statearr_40649 = state_40625;
(statearr_40649[(10)] = inst_40580__$1);

return statearr_40649;
})();
if(inst_40580__$1){
var statearr_40650_40696 = state_40625__$1;
(statearr_40650_40696[(1)] = (13));

} else {
var statearr_40651_40697 = state_40625__$1;
(statearr_40651_40697[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (9))){
var inst_40602 = (state_40625[(2)]);
var state_40625__$1 = state_40625;
var statearr_40652_40698 = state_40625__$1;
(statearr_40652_40698[(2)] = inst_40602);

(statearr_40652_40698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (5))){
var inst_40563 = cljs.core.deref.call(null,mults);
var inst_40564 = cljs.core.vals.call(null,inst_40563);
var inst_40565 = cljs.core.seq.call(null,inst_40564);
var inst_40566 = inst_40565;
var inst_40567 = null;
var inst_40568 = (0);
var inst_40569 = (0);
var state_40625__$1 = (function (){var statearr_40653 = state_40625;
(statearr_40653[(13)] = inst_40566);

(statearr_40653[(14)] = inst_40568);

(statearr_40653[(15)] = inst_40569);

(statearr_40653[(16)] = inst_40567);

return statearr_40653;
})();
var statearr_40654_40699 = state_40625__$1;
(statearr_40654_40699[(2)] = null);

(statearr_40654_40699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (14))){
var state_40625__$1 = state_40625;
var statearr_40658_40700 = state_40625__$1;
(statearr_40658_40700[(2)] = null);

(statearr_40658_40700[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (16))){
var inst_40580 = (state_40625[(10)]);
var inst_40584 = cljs.core.chunk_first.call(null,inst_40580);
var inst_40585 = cljs.core.chunk_rest.call(null,inst_40580);
var inst_40586 = cljs.core.count.call(null,inst_40584);
var inst_40566 = inst_40585;
var inst_40567 = inst_40584;
var inst_40568 = inst_40586;
var inst_40569 = (0);
var state_40625__$1 = (function (){var statearr_40659 = state_40625;
(statearr_40659[(13)] = inst_40566);

(statearr_40659[(14)] = inst_40568);

(statearr_40659[(15)] = inst_40569);

(statearr_40659[(16)] = inst_40567);

return statearr_40659;
})();
var statearr_40660_40701 = state_40625__$1;
(statearr_40660_40701[(2)] = null);

(statearr_40660_40701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (10))){
var inst_40566 = (state_40625[(13)]);
var inst_40568 = (state_40625[(14)]);
var inst_40569 = (state_40625[(15)]);
var inst_40567 = (state_40625[(16)]);
var inst_40574 = cljs.core._nth.call(null,inst_40567,inst_40569);
var inst_40575 = cljs.core.async.muxch_STAR_.call(null,inst_40574);
var inst_40576 = cljs.core.async.close_BANG_.call(null,inst_40575);
var inst_40577 = (inst_40569 + (1));
var tmp40655 = inst_40566;
var tmp40656 = inst_40568;
var tmp40657 = inst_40567;
var inst_40566__$1 = tmp40655;
var inst_40567__$1 = tmp40657;
var inst_40568__$1 = tmp40656;
var inst_40569__$1 = inst_40577;
var state_40625__$1 = (function (){var statearr_40661 = state_40625;
(statearr_40661[(17)] = inst_40576);

(statearr_40661[(13)] = inst_40566__$1);

(statearr_40661[(14)] = inst_40568__$1);

(statearr_40661[(15)] = inst_40569__$1);

(statearr_40661[(16)] = inst_40567__$1);

return statearr_40661;
})();
var statearr_40662_40702 = state_40625__$1;
(statearr_40662_40702[(2)] = null);

(statearr_40662_40702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (18))){
var inst_40595 = (state_40625[(2)]);
var state_40625__$1 = state_40625;
var statearr_40663_40703 = state_40625__$1;
(statearr_40663_40703[(2)] = inst_40595);

(statearr_40663_40703[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (8))){
var inst_40568 = (state_40625[(14)]);
var inst_40569 = (state_40625[(15)]);
var inst_40571 = (inst_40569 < inst_40568);
var inst_40572 = inst_40571;
var state_40625__$1 = state_40625;
if(cljs.core.truth_(inst_40572)){
var statearr_40664_40704 = state_40625__$1;
(statearr_40664_40704[(1)] = (10));

} else {
var statearr_40665_40705 = state_40625__$1;
(statearr_40665_40705[(1)] = (11));

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
});})(c__11475__auto___40677,mults,ensure_mult,p))
;
return ((function (switch__11410__auto__,c__11475__auto___40677,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__11411__auto__ = null;
var cljs$core$async$state_machine__11411__auto____0 = (function (){
var statearr_40669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40669[(0)] = cljs$core$async$state_machine__11411__auto__);

(statearr_40669[(1)] = (1));

return statearr_40669;
});
var cljs$core$async$state_machine__11411__auto____1 = (function (state_40625){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_40625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e40670){if((e40670 instanceof Object)){
var ex__11414__auto__ = e40670;
var statearr_40671_40706 = state_40625;
(statearr_40671_40706[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40707 = state_40625;
state_40625 = G__40707;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
cljs$core$async$state_machine__11411__auto__ = function(state_40625){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11411__auto____1.call(this,state_40625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11411__auto____0;
cljs$core$async$state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11411__auto____1;
return cljs$core$async$state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto___40677,mults,ensure_mult,p))
})();
var state__11477__auto__ = (function (){var statearr_40672 = f__11476__auto__.call(null);
(statearr_40672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___40677);

return statearr_40672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto___40677,mults,ensure_mult,p))
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
var args40708 = [];
var len__7651__auto___40711 = arguments.length;
var i__7652__auto___40712 = (0);
while(true){
if((i__7652__auto___40712 < len__7651__auto___40711)){
args40708.push((arguments[i__7652__auto___40712]));

var G__40713 = (i__7652__auto___40712 + (1));
i__7652__auto___40712 = G__40713;
continue;
} else {
}
break;
}

var G__40710 = args40708.length;
switch (G__40710) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40708.length)].join('')));

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
var args40715 = [];
var len__7651__auto___40718 = arguments.length;
var i__7652__auto___40719 = (0);
while(true){
if((i__7652__auto___40719 < len__7651__auto___40718)){
args40715.push((arguments[i__7652__auto___40719]));

var G__40720 = (i__7652__auto___40719 + (1));
i__7652__auto___40719 = G__40720;
continue;
} else {
}
break;
}

var G__40717 = args40715.length;
switch (G__40717) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40715.length)].join('')));

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
var args40722 = [];
var len__7651__auto___40793 = arguments.length;
var i__7652__auto___40794 = (0);
while(true){
if((i__7652__auto___40794 < len__7651__auto___40793)){
args40722.push((arguments[i__7652__auto___40794]));

var G__40795 = (i__7652__auto___40794 + (1));
i__7652__auto___40794 = G__40795;
continue;
} else {
}
break;
}

var G__40724 = args40722.length;
switch (G__40724) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40722.length)].join('')));

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
var c__11475__auto___40797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto___40797,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto___40797,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40763){
var state_val_40764 = (state_40763[(1)]);
if((state_val_40764 === (7))){
var state_40763__$1 = state_40763;
var statearr_40765_40798 = state_40763__$1;
(statearr_40765_40798[(2)] = null);

(statearr_40765_40798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40764 === (1))){
var state_40763__$1 = state_40763;
var statearr_40766_40799 = state_40763__$1;
(statearr_40766_40799[(2)] = null);

(statearr_40766_40799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40764 === (4))){
var inst_40727 = (state_40763[(7)]);
var inst_40729 = (inst_40727 < cnt);
var state_40763__$1 = state_40763;
if(cljs.core.truth_(inst_40729)){
var statearr_40767_40800 = state_40763__$1;
(statearr_40767_40800[(1)] = (6));

} else {
var statearr_40768_40801 = state_40763__$1;
(statearr_40768_40801[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40764 === (15))){
var inst_40759 = (state_40763[(2)]);
var state_40763__$1 = state_40763;
var statearr_40769_40802 = state_40763__$1;
(statearr_40769_40802[(2)] = inst_40759);

(statearr_40769_40802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40764 === (13))){
var inst_40752 = cljs.core.async.close_BANG_.call(null,out);
var state_40763__$1 = state_40763;
var statearr_40770_40803 = state_40763__$1;
(statearr_40770_40803[(2)] = inst_40752);

(statearr_40770_40803[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40764 === (6))){
var state_40763__$1 = state_40763;
var statearr_40771_40804 = state_40763__$1;
(statearr_40771_40804[(2)] = null);

(statearr_40771_40804[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40764 === (3))){
var inst_40761 = (state_40763[(2)]);
var state_40763__$1 = state_40763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40763__$1,inst_40761);
} else {
if((state_val_40764 === (12))){
var inst_40749 = (state_40763[(8)]);
var inst_40749__$1 = (state_40763[(2)]);
var inst_40750 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_40749__$1);
var state_40763__$1 = (function (){var statearr_40772 = state_40763;
(statearr_40772[(8)] = inst_40749__$1);

return statearr_40772;
})();
if(cljs.core.truth_(inst_40750)){
var statearr_40773_40805 = state_40763__$1;
(statearr_40773_40805[(1)] = (13));

} else {
var statearr_40774_40806 = state_40763__$1;
(statearr_40774_40806[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40764 === (2))){
var inst_40726 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_40727 = (0);
var state_40763__$1 = (function (){var statearr_40775 = state_40763;
(statearr_40775[(9)] = inst_40726);

(statearr_40775[(7)] = inst_40727);

return statearr_40775;
})();
var statearr_40776_40807 = state_40763__$1;
(statearr_40776_40807[(2)] = null);

(statearr_40776_40807[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40764 === (11))){
var inst_40727 = (state_40763[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40763,(10),Object,null,(9));
var inst_40736 = chs__$1.call(null,inst_40727);
var inst_40737 = done.call(null,inst_40727);
var inst_40738 = cljs.core.async.take_BANG_.call(null,inst_40736,inst_40737);
var state_40763__$1 = state_40763;
var statearr_40777_40808 = state_40763__$1;
(statearr_40777_40808[(2)] = inst_40738);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40763__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40764 === (9))){
var inst_40727 = (state_40763[(7)]);
var inst_40740 = (state_40763[(2)]);
var inst_40741 = (inst_40727 + (1));
var inst_40727__$1 = inst_40741;
var state_40763__$1 = (function (){var statearr_40778 = state_40763;
(statearr_40778[(10)] = inst_40740);

(statearr_40778[(7)] = inst_40727__$1);

return statearr_40778;
})();
var statearr_40779_40809 = state_40763__$1;
(statearr_40779_40809[(2)] = null);

(statearr_40779_40809[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40764 === (5))){
var inst_40747 = (state_40763[(2)]);
var state_40763__$1 = (function (){var statearr_40780 = state_40763;
(statearr_40780[(11)] = inst_40747);

return statearr_40780;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40763__$1,(12),dchan);
} else {
if((state_val_40764 === (14))){
var inst_40749 = (state_40763[(8)]);
var inst_40754 = cljs.core.apply.call(null,f,inst_40749);
var state_40763__$1 = state_40763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40763__$1,(16),out,inst_40754);
} else {
if((state_val_40764 === (16))){
var inst_40756 = (state_40763[(2)]);
var state_40763__$1 = (function (){var statearr_40781 = state_40763;
(statearr_40781[(12)] = inst_40756);

return statearr_40781;
})();
var statearr_40782_40810 = state_40763__$1;
(statearr_40782_40810[(2)] = null);

(statearr_40782_40810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40764 === (10))){
var inst_40731 = (state_40763[(2)]);
var inst_40732 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_40763__$1 = (function (){var statearr_40783 = state_40763;
(statearr_40783[(13)] = inst_40731);

return statearr_40783;
})();
var statearr_40784_40811 = state_40763__$1;
(statearr_40784_40811[(2)] = inst_40732);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40763__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40764 === (8))){
var inst_40745 = (state_40763[(2)]);
var state_40763__$1 = state_40763;
var statearr_40785_40812 = state_40763__$1;
(statearr_40785_40812[(2)] = inst_40745);

(statearr_40785_40812[(1)] = (5));


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
});})(c__11475__auto___40797,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11410__auto__,c__11475__auto___40797,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__11411__auto__ = null;
var cljs$core$async$state_machine__11411__auto____0 = (function (){
var statearr_40789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40789[(0)] = cljs$core$async$state_machine__11411__auto__);

(statearr_40789[(1)] = (1));

return statearr_40789;
});
var cljs$core$async$state_machine__11411__auto____1 = (function (state_40763){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_40763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e40790){if((e40790 instanceof Object)){
var ex__11414__auto__ = e40790;
var statearr_40791_40813 = state_40763;
(statearr_40791_40813[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40814 = state_40763;
state_40763 = G__40814;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
cljs$core$async$state_machine__11411__auto__ = function(state_40763){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11411__auto____1.call(this,state_40763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11411__auto____0;
cljs$core$async$state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11411__auto____1;
return cljs$core$async$state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto___40797,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11477__auto__ = (function (){var statearr_40792 = f__11476__auto__.call(null);
(statearr_40792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___40797);

return statearr_40792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto___40797,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args40816 = [];
var len__7651__auto___40874 = arguments.length;
var i__7652__auto___40875 = (0);
while(true){
if((i__7652__auto___40875 < len__7651__auto___40874)){
args40816.push((arguments[i__7652__auto___40875]));

var G__40876 = (i__7652__auto___40875 + (1));
i__7652__auto___40875 = G__40876;
continue;
} else {
}
break;
}

var G__40818 = args40816.length;
switch (G__40818) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40816.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11475__auto___40878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto___40878,out){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto___40878,out){
return (function (state_40850){
var state_val_40851 = (state_40850[(1)]);
if((state_val_40851 === (7))){
var inst_40829 = (state_40850[(7)]);
var inst_40830 = (state_40850[(8)]);
var inst_40829__$1 = (state_40850[(2)]);
var inst_40830__$1 = cljs.core.nth.call(null,inst_40829__$1,(0),null);
var inst_40831 = cljs.core.nth.call(null,inst_40829__$1,(1),null);
var inst_40832 = (inst_40830__$1 == null);
var state_40850__$1 = (function (){var statearr_40852 = state_40850;
(statearr_40852[(7)] = inst_40829__$1);

(statearr_40852[(9)] = inst_40831);

(statearr_40852[(8)] = inst_40830__$1);

return statearr_40852;
})();
if(cljs.core.truth_(inst_40832)){
var statearr_40853_40879 = state_40850__$1;
(statearr_40853_40879[(1)] = (8));

} else {
var statearr_40854_40880 = state_40850__$1;
(statearr_40854_40880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40851 === (1))){
var inst_40819 = cljs.core.vec.call(null,chs);
var inst_40820 = inst_40819;
var state_40850__$1 = (function (){var statearr_40855 = state_40850;
(statearr_40855[(10)] = inst_40820);

return statearr_40855;
})();
var statearr_40856_40881 = state_40850__$1;
(statearr_40856_40881[(2)] = null);

(statearr_40856_40881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40851 === (4))){
var inst_40820 = (state_40850[(10)]);
var state_40850__$1 = state_40850;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40850__$1,(7),inst_40820);
} else {
if((state_val_40851 === (6))){
var inst_40846 = (state_40850[(2)]);
var state_40850__$1 = state_40850;
var statearr_40857_40882 = state_40850__$1;
(statearr_40857_40882[(2)] = inst_40846);

(statearr_40857_40882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40851 === (3))){
var inst_40848 = (state_40850[(2)]);
var state_40850__$1 = state_40850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40850__$1,inst_40848);
} else {
if((state_val_40851 === (2))){
var inst_40820 = (state_40850[(10)]);
var inst_40822 = cljs.core.count.call(null,inst_40820);
var inst_40823 = (inst_40822 > (0));
var state_40850__$1 = state_40850;
if(cljs.core.truth_(inst_40823)){
var statearr_40859_40883 = state_40850__$1;
(statearr_40859_40883[(1)] = (4));

} else {
var statearr_40860_40884 = state_40850__$1;
(statearr_40860_40884[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40851 === (11))){
var inst_40820 = (state_40850[(10)]);
var inst_40839 = (state_40850[(2)]);
var tmp40858 = inst_40820;
var inst_40820__$1 = tmp40858;
var state_40850__$1 = (function (){var statearr_40861 = state_40850;
(statearr_40861[(10)] = inst_40820__$1);

(statearr_40861[(11)] = inst_40839);

return statearr_40861;
})();
var statearr_40862_40885 = state_40850__$1;
(statearr_40862_40885[(2)] = null);

(statearr_40862_40885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40851 === (9))){
var inst_40830 = (state_40850[(8)]);
var state_40850__$1 = state_40850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40850__$1,(11),out,inst_40830);
} else {
if((state_val_40851 === (5))){
var inst_40844 = cljs.core.async.close_BANG_.call(null,out);
var state_40850__$1 = state_40850;
var statearr_40863_40886 = state_40850__$1;
(statearr_40863_40886[(2)] = inst_40844);

(statearr_40863_40886[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40851 === (10))){
var inst_40842 = (state_40850[(2)]);
var state_40850__$1 = state_40850;
var statearr_40864_40887 = state_40850__$1;
(statearr_40864_40887[(2)] = inst_40842);

(statearr_40864_40887[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40851 === (8))){
var inst_40820 = (state_40850[(10)]);
var inst_40829 = (state_40850[(7)]);
var inst_40831 = (state_40850[(9)]);
var inst_40830 = (state_40850[(8)]);
var inst_40834 = (function (){var cs = inst_40820;
var vec__40825 = inst_40829;
var v = inst_40830;
var c = inst_40831;
return ((function (cs,vec__40825,v,c,inst_40820,inst_40829,inst_40831,inst_40830,state_val_40851,c__11475__auto___40878,out){
return (function (p1__40815_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__40815_SHARP_);
});
;})(cs,vec__40825,v,c,inst_40820,inst_40829,inst_40831,inst_40830,state_val_40851,c__11475__auto___40878,out))
})();
var inst_40835 = cljs.core.filterv.call(null,inst_40834,inst_40820);
var inst_40820__$1 = inst_40835;
var state_40850__$1 = (function (){var statearr_40865 = state_40850;
(statearr_40865[(10)] = inst_40820__$1);

return statearr_40865;
})();
var statearr_40866_40888 = state_40850__$1;
(statearr_40866_40888[(2)] = null);

(statearr_40866_40888[(1)] = (2));


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
});})(c__11475__auto___40878,out))
;
return ((function (switch__11410__auto__,c__11475__auto___40878,out){
return (function() {
var cljs$core$async$state_machine__11411__auto__ = null;
var cljs$core$async$state_machine__11411__auto____0 = (function (){
var statearr_40870 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40870[(0)] = cljs$core$async$state_machine__11411__auto__);

(statearr_40870[(1)] = (1));

return statearr_40870;
});
var cljs$core$async$state_machine__11411__auto____1 = (function (state_40850){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_40850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e40871){if((e40871 instanceof Object)){
var ex__11414__auto__ = e40871;
var statearr_40872_40889 = state_40850;
(statearr_40872_40889[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40890 = state_40850;
state_40850 = G__40890;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
cljs$core$async$state_machine__11411__auto__ = function(state_40850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11411__auto____1.call(this,state_40850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11411__auto____0;
cljs$core$async$state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11411__auto____1;
return cljs$core$async$state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto___40878,out))
})();
var state__11477__auto__ = (function (){var statearr_40873 = f__11476__auto__.call(null);
(statearr_40873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___40878);

return statearr_40873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto___40878,out))
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
var args40891 = [];
var len__7651__auto___40940 = arguments.length;
var i__7652__auto___40941 = (0);
while(true){
if((i__7652__auto___40941 < len__7651__auto___40940)){
args40891.push((arguments[i__7652__auto___40941]));

var G__40942 = (i__7652__auto___40941 + (1));
i__7652__auto___40941 = G__40942;
continue;
} else {
}
break;
}

var G__40893 = args40891.length;
switch (G__40893) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40891.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11475__auto___40944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto___40944,out){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto___40944,out){
return (function (state_40917){
var state_val_40918 = (state_40917[(1)]);
if((state_val_40918 === (7))){
var inst_40899 = (state_40917[(7)]);
var inst_40899__$1 = (state_40917[(2)]);
var inst_40900 = (inst_40899__$1 == null);
var inst_40901 = cljs.core.not.call(null,inst_40900);
var state_40917__$1 = (function (){var statearr_40919 = state_40917;
(statearr_40919[(7)] = inst_40899__$1);

return statearr_40919;
})();
if(inst_40901){
var statearr_40920_40945 = state_40917__$1;
(statearr_40920_40945[(1)] = (8));

} else {
var statearr_40921_40946 = state_40917__$1;
(statearr_40921_40946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (1))){
var inst_40894 = (0);
var state_40917__$1 = (function (){var statearr_40922 = state_40917;
(statearr_40922[(8)] = inst_40894);

return statearr_40922;
})();
var statearr_40923_40947 = state_40917__$1;
(statearr_40923_40947[(2)] = null);

(statearr_40923_40947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (4))){
var state_40917__$1 = state_40917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40917__$1,(7),ch);
} else {
if((state_val_40918 === (6))){
var inst_40912 = (state_40917[(2)]);
var state_40917__$1 = state_40917;
var statearr_40924_40948 = state_40917__$1;
(statearr_40924_40948[(2)] = inst_40912);

(statearr_40924_40948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (3))){
var inst_40914 = (state_40917[(2)]);
var inst_40915 = cljs.core.async.close_BANG_.call(null,out);
var state_40917__$1 = (function (){var statearr_40925 = state_40917;
(statearr_40925[(9)] = inst_40914);

return statearr_40925;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40917__$1,inst_40915);
} else {
if((state_val_40918 === (2))){
var inst_40894 = (state_40917[(8)]);
var inst_40896 = (inst_40894 < n);
var state_40917__$1 = state_40917;
if(cljs.core.truth_(inst_40896)){
var statearr_40926_40949 = state_40917__$1;
(statearr_40926_40949[(1)] = (4));

} else {
var statearr_40927_40950 = state_40917__$1;
(statearr_40927_40950[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (11))){
var inst_40894 = (state_40917[(8)]);
var inst_40904 = (state_40917[(2)]);
var inst_40905 = (inst_40894 + (1));
var inst_40894__$1 = inst_40905;
var state_40917__$1 = (function (){var statearr_40928 = state_40917;
(statearr_40928[(10)] = inst_40904);

(statearr_40928[(8)] = inst_40894__$1);

return statearr_40928;
})();
var statearr_40929_40951 = state_40917__$1;
(statearr_40929_40951[(2)] = null);

(statearr_40929_40951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (9))){
var state_40917__$1 = state_40917;
var statearr_40930_40952 = state_40917__$1;
(statearr_40930_40952[(2)] = null);

(statearr_40930_40952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (5))){
var state_40917__$1 = state_40917;
var statearr_40931_40953 = state_40917__$1;
(statearr_40931_40953[(2)] = null);

(statearr_40931_40953[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (10))){
var inst_40909 = (state_40917[(2)]);
var state_40917__$1 = state_40917;
var statearr_40932_40954 = state_40917__$1;
(statearr_40932_40954[(2)] = inst_40909);

(statearr_40932_40954[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (8))){
var inst_40899 = (state_40917[(7)]);
var state_40917__$1 = state_40917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40917__$1,(11),out,inst_40899);
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
});})(c__11475__auto___40944,out))
;
return ((function (switch__11410__auto__,c__11475__auto___40944,out){
return (function() {
var cljs$core$async$state_machine__11411__auto__ = null;
var cljs$core$async$state_machine__11411__auto____0 = (function (){
var statearr_40936 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40936[(0)] = cljs$core$async$state_machine__11411__auto__);

(statearr_40936[(1)] = (1));

return statearr_40936;
});
var cljs$core$async$state_machine__11411__auto____1 = (function (state_40917){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_40917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e40937){if((e40937 instanceof Object)){
var ex__11414__auto__ = e40937;
var statearr_40938_40955 = state_40917;
(statearr_40938_40955[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40956 = state_40917;
state_40917 = G__40956;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
cljs$core$async$state_machine__11411__auto__ = function(state_40917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11411__auto____1.call(this,state_40917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11411__auto____0;
cljs$core$async$state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11411__auto____1;
return cljs$core$async$state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto___40944,out))
})();
var state__11477__auto__ = (function (){var statearr_40939 = f__11476__auto__.call(null);
(statearr_40939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___40944);

return statearr_40939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto___40944,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40964 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40964 = (function (f,ch,meta40965){
this.f = f;
this.ch = ch;
this.meta40965 = meta40965;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40966,meta40965__$1){
var self__ = this;
var _40966__$1 = this;
return (new cljs.core.async.t_cljs$core$async40964(self__.f,self__.ch,meta40965__$1));
});

cljs.core.async.t_cljs$core$async40964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40966){
var self__ = this;
var _40966__$1 = this;
return self__.meta40965;
});

cljs.core.async.t_cljs$core$async40964.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40964.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40964.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40964.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40964.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async40967 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40967 = (function (f,ch,meta40965,_,fn1,meta40968){
this.f = f;
this.ch = ch;
this.meta40965 = meta40965;
this._ = _;
this.fn1 = fn1;
this.meta40968 = meta40968;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40969,meta40968__$1){
var self__ = this;
var _40969__$1 = this;
return (new cljs.core.async.t_cljs$core$async40967(self__.f,self__.ch,self__.meta40965,self__._,self__.fn1,meta40968__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async40967.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40969){
var self__ = this;
var _40969__$1 = this;
return self__.meta40968;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40967.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40967.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40967.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40967.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__40957_SHARP_){
return f1.call(null,(((p1__40957_SHARP_ == null))?null:self__.f.call(null,p1__40957_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async40967.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40965","meta40965",1733906060,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40964","cljs.core.async/t_cljs$core$async40964",-1049044469,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40968","meta40968",1811244062,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40967.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40967.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40967";

cljs.core.async.t_cljs$core$async40967.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async40967");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async40967 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40967(f__$1,ch__$1,meta40965__$1,___$2,fn1__$1,meta40968){
return (new cljs.core.async.t_cljs$core$async40967(f__$1,ch__$1,meta40965__$1,___$2,fn1__$1,meta40968));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async40967(self__.f,self__.ch,self__.meta40965,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async40964.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40964.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async40964.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40965","meta40965",1733906060,null)], null);
});

cljs.core.async.t_cljs$core$async40964.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40964.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40964";

cljs.core.async.t_cljs$core$async40964.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async40964");
});

cljs.core.async.__GT_t_cljs$core$async40964 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40964(f__$1,ch__$1,meta40965){
return (new cljs.core.async.t_cljs$core$async40964(f__$1,ch__$1,meta40965));
});

}

return (new cljs.core.async.t_cljs$core$async40964(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40973 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40973 = (function (f,ch,meta40974){
this.f = f;
this.ch = ch;
this.meta40974 = meta40974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40975,meta40974__$1){
var self__ = this;
var _40975__$1 = this;
return (new cljs.core.async.t_cljs$core$async40973(self__.f,self__.ch,meta40974__$1));
});

cljs.core.async.t_cljs$core$async40973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40975){
var self__ = this;
var _40975__$1 = this;
return self__.meta40974;
});

cljs.core.async.t_cljs$core$async40973.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40973.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40973.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40973.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40973.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40973.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async40973.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40974","meta40974",1234874269,null)], null);
});

cljs.core.async.t_cljs$core$async40973.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40973.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40973";

cljs.core.async.t_cljs$core$async40973.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async40973");
});

cljs.core.async.__GT_t_cljs$core$async40973 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async40973(f__$1,ch__$1,meta40974){
return (new cljs.core.async.t_cljs$core$async40973(f__$1,ch__$1,meta40974));
});

}

return (new cljs.core.async.t_cljs$core$async40973(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async40979 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40979 = (function (p,ch,meta40980){
this.p = p;
this.ch = ch;
this.meta40980 = meta40980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40981,meta40980__$1){
var self__ = this;
var _40981__$1 = this;
return (new cljs.core.async.t_cljs$core$async40979(self__.p,self__.ch,meta40980__$1));
});

cljs.core.async.t_cljs$core$async40979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40981){
var self__ = this;
var _40981__$1 = this;
return self__.meta40980;
});

cljs.core.async.t_cljs$core$async40979.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40979.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40979.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40979.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40979.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40979.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40979.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async40979.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40980","meta40980",419860667,null)], null);
});

cljs.core.async.t_cljs$core$async40979.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40979.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40979";

cljs.core.async.t_cljs$core$async40979.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async40979");
});

cljs.core.async.__GT_t_cljs$core$async40979 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40979(p__$1,ch__$1,meta40980){
return (new cljs.core.async.t_cljs$core$async40979(p__$1,ch__$1,meta40980));
});

}

return (new cljs.core.async.t_cljs$core$async40979(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args40982 = [];
var len__7651__auto___41026 = arguments.length;
var i__7652__auto___41027 = (0);
while(true){
if((i__7652__auto___41027 < len__7651__auto___41026)){
args40982.push((arguments[i__7652__auto___41027]));

var G__41028 = (i__7652__auto___41027 + (1));
i__7652__auto___41027 = G__41028;
continue;
} else {
}
break;
}

var G__40984 = args40982.length;
switch (G__40984) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40982.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11475__auto___41030 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto___41030,out){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto___41030,out){
return (function (state_41005){
var state_val_41006 = (state_41005[(1)]);
if((state_val_41006 === (7))){
var inst_41001 = (state_41005[(2)]);
var state_41005__$1 = state_41005;
var statearr_41007_41031 = state_41005__$1;
(statearr_41007_41031[(2)] = inst_41001);

(statearr_41007_41031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41006 === (1))){
var state_41005__$1 = state_41005;
var statearr_41008_41032 = state_41005__$1;
(statearr_41008_41032[(2)] = null);

(statearr_41008_41032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41006 === (4))){
var inst_40987 = (state_41005[(7)]);
var inst_40987__$1 = (state_41005[(2)]);
var inst_40988 = (inst_40987__$1 == null);
var state_41005__$1 = (function (){var statearr_41009 = state_41005;
(statearr_41009[(7)] = inst_40987__$1);

return statearr_41009;
})();
if(cljs.core.truth_(inst_40988)){
var statearr_41010_41033 = state_41005__$1;
(statearr_41010_41033[(1)] = (5));

} else {
var statearr_41011_41034 = state_41005__$1;
(statearr_41011_41034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41006 === (6))){
var inst_40987 = (state_41005[(7)]);
var inst_40992 = p.call(null,inst_40987);
var state_41005__$1 = state_41005;
if(cljs.core.truth_(inst_40992)){
var statearr_41012_41035 = state_41005__$1;
(statearr_41012_41035[(1)] = (8));

} else {
var statearr_41013_41036 = state_41005__$1;
(statearr_41013_41036[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41006 === (3))){
var inst_41003 = (state_41005[(2)]);
var state_41005__$1 = state_41005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41005__$1,inst_41003);
} else {
if((state_val_41006 === (2))){
var state_41005__$1 = state_41005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41005__$1,(4),ch);
} else {
if((state_val_41006 === (11))){
var inst_40995 = (state_41005[(2)]);
var state_41005__$1 = state_41005;
var statearr_41014_41037 = state_41005__$1;
(statearr_41014_41037[(2)] = inst_40995);

(statearr_41014_41037[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41006 === (9))){
var state_41005__$1 = state_41005;
var statearr_41015_41038 = state_41005__$1;
(statearr_41015_41038[(2)] = null);

(statearr_41015_41038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41006 === (5))){
var inst_40990 = cljs.core.async.close_BANG_.call(null,out);
var state_41005__$1 = state_41005;
var statearr_41016_41039 = state_41005__$1;
(statearr_41016_41039[(2)] = inst_40990);

(statearr_41016_41039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41006 === (10))){
var inst_40998 = (state_41005[(2)]);
var state_41005__$1 = (function (){var statearr_41017 = state_41005;
(statearr_41017[(8)] = inst_40998);

return statearr_41017;
})();
var statearr_41018_41040 = state_41005__$1;
(statearr_41018_41040[(2)] = null);

(statearr_41018_41040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41006 === (8))){
var inst_40987 = (state_41005[(7)]);
var state_41005__$1 = state_41005;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41005__$1,(11),out,inst_40987);
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
});})(c__11475__auto___41030,out))
;
return ((function (switch__11410__auto__,c__11475__auto___41030,out){
return (function() {
var cljs$core$async$state_machine__11411__auto__ = null;
var cljs$core$async$state_machine__11411__auto____0 = (function (){
var statearr_41022 = [null,null,null,null,null,null,null,null,null];
(statearr_41022[(0)] = cljs$core$async$state_machine__11411__auto__);

(statearr_41022[(1)] = (1));

return statearr_41022;
});
var cljs$core$async$state_machine__11411__auto____1 = (function (state_41005){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_41005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e41023){if((e41023 instanceof Object)){
var ex__11414__auto__ = e41023;
var statearr_41024_41041 = state_41005;
(statearr_41024_41041[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41042 = state_41005;
state_41005 = G__41042;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
cljs$core$async$state_machine__11411__auto__ = function(state_41005){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11411__auto____1.call(this,state_41005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11411__auto____0;
cljs$core$async$state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11411__auto____1;
return cljs$core$async$state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto___41030,out))
})();
var state__11477__auto__ = (function (){var statearr_41025 = f__11476__auto__.call(null);
(statearr_41025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___41030);

return statearr_41025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto___41030,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args41043 = [];
var len__7651__auto___41046 = arguments.length;
var i__7652__auto___41047 = (0);
while(true){
if((i__7652__auto___41047 < len__7651__auto___41046)){
args41043.push((arguments[i__7652__auto___41047]));

var G__41048 = (i__7652__auto___41047 + (1));
i__7652__auto___41047 = G__41048;
continue;
} else {
}
break;
}

var G__41045 = args41043.length;
switch (G__41045) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41043.length)].join('')));

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
var c__11475__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto__){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto__){
return (function (state_41215){
var state_val_41216 = (state_41215[(1)]);
if((state_val_41216 === (7))){
var inst_41211 = (state_41215[(2)]);
var state_41215__$1 = state_41215;
var statearr_41217_41258 = state_41215__$1;
(statearr_41217_41258[(2)] = inst_41211);

(statearr_41217_41258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41216 === (20))){
var inst_41181 = (state_41215[(7)]);
var inst_41192 = (state_41215[(2)]);
var inst_41193 = cljs.core.next.call(null,inst_41181);
var inst_41167 = inst_41193;
var inst_41168 = null;
var inst_41169 = (0);
var inst_41170 = (0);
var state_41215__$1 = (function (){var statearr_41218 = state_41215;
(statearr_41218[(8)] = inst_41169);

(statearr_41218[(9)] = inst_41168);

(statearr_41218[(10)] = inst_41192);

(statearr_41218[(11)] = inst_41167);

(statearr_41218[(12)] = inst_41170);

return statearr_41218;
})();
var statearr_41219_41259 = state_41215__$1;
(statearr_41219_41259[(2)] = null);

(statearr_41219_41259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41216 === (1))){
var state_41215__$1 = state_41215;
var statearr_41220_41260 = state_41215__$1;
(statearr_41220_41260[(2)] = null);

(statearr_41220_41260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41216 === (4))){
var inst_41156 = (state_41215[(13)]);
var inst_41156__$1 = (state_41215[(2)]);
var inst_41157 = (inst_41156__$1 == null);
var state_41215__$1 = (function (){var statearr_41221 = state_41215;
(statearr_41221[(13)] = inst_41156__$1);

return statearr_41221;
})();
if(cljs.core.truth_(inst_41157)){
var statearr_41222_41261 = state_41215__$1;
(statearr_41222_41261[(1)] = (5));

} else {
var statearr_41223_41262 = state_41215__$1;
(statearr_41223_41262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41216 === (15))){
var state_41215__$1 = state_41215;
var statearr_41227_41263 = state_41215__$1;
(statearr_41227_41263[(2)] = null);

(statearr_41227_41263[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41216 === (21))){
var state_41215__$1 = state_41215;
var statearr_41228_41264 = state_41215__$1;
(statearr_41228_41264[(2)] = null);

(statearr_41228_41264[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41216 === (13))){
var inst_41169 = (state_41215[(8)]);
var inst_41168 = (state_41215[(9)]);
var inst_41167 = (state_41215[(11)]);
var inst_41170 = (state_41215[(12)]);
var inst_41177 = (state_41215[(2)]);
var inst_41178 = (inst_41170 + (1));
var tmp41224 = inst_41169;
var tmp41225 = inst_41168;
var tmp41226 = inst_41167;
var inst_41167__$1 = tmp41226;
var inst_41168__$1 = tmp41225;
var inst_41169__$1 = tmp41224;
var inst_41170__$1 = inst_41178;
var state_41215__$1 = (function (){var statearr_41229 = state_41215;
(statearr_41229[(8)] = inst_41169__$1);

(statearr_41229[(9)] = inst_41168__$1);

(statearr_41229[(14)] = inst_41177);

(statearr_41229[(11)] = inst_41167__$1);

(statearr_41229[(12)] = inst_41170__$1);

return statearr_41229;
})();
var statearr_41230_41265 = state_41215__$1;
(statearr_41230_41265[(2)] = null);

(statearr_41230_41265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41216 === (22))){
var state_41215__$1 = state_41215;
var statearr_41231_41266 = state_41215__$1;
(statearr_41231_41266[(2)] = null);

(statearr_41231_41266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41216 === (6))){
var inst_41156 = (state_41215[(13)]);
var inst_41165 = f.call(null,inst_41156);
var inst_41166 = cljs.core.seq.call(null,inst_41165);
var inst_41167 = inst_41166;
var inst_41168 = null;
var inst_41169 = (0);
var inst_41170 = (0);
var state_41215__$1 = (function (){var statearr_41232 = state_41215;
(statearr_41232[(8)] = inst_41169);

(statearr_41232[(9)] = inst_41168);

(statearr_41232[(11)] = inst_41167);

(statearr_41232[(12)] = inst_41170);

return statearr_41232;
})();
var statearr_41233_41267 = state_41215__$1;
(statearr_41233_41267[(2)] = null);

(statearr_41233_41267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41216 === (17))){
var inst_41181 = (state_41215[(7)]);
var inst_41185 = cljs.core.chunk_first.call(null,inst_41181);
var inst_41186 = cljs.core.chunk_rest.call(null,inst_41181);
var inst_41187 = cljs.core.count.call(null,inst_41185);
var inst_41167 = inst_41186;
var inst_41168 = inst_41185;
var inst_41169 = inst_41187;
var inst_41170 = (0);
var state_41215__$1 = (function (){var statearr_41234 = state_41215;
(statearr_41234[(8)] = inst_41169);

(statearr_41234[(9)] = inst_41168);

(statearr_41234[(11)] = inst_41167);

(statearr_41234[(12)] = inst_41170);

return statearr_41234;
})();
var statearr_41235_41268 = state_41215__$1;
(statearr_41235_41268[(2)] = null);

(statearr_41235_41268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41216 === (3))){
var inst_41213 = (state_41215[(2)]);
var state_41215__$1 = state_41215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41215__$1,inst_41213);
} else {
if((state_val_41216 === (12))){
var inst_41201 = (state_41215[(2)]);
var state_41215__$1 = state_41215;
var statearr_41236_41269 = state_41215__$1;
(statearr_41236_41269[(2)] = inst_41201);

(statearr_41236_41269[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41216 === (2))){
var state_41215__$1 = state_41215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41215__$1,(4),in$);
} else {
if((state_val_41216 === (23))){
var inst_41209 = (state_41215[(2)]);
var state_41215__$1 = state_41215;
var statearr_41237_41270 = state_41215__$1;
(statearr_41237_41270[(2)] = inst_41209);

(statearr_41237_41270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41216 === (19))){
var inst_41196 = (state_41215[(2)]);
var state_41215__$1 = state_41215;
var statearr_41238_41271 = state_41215__$1;
(statearr_41238_41271[(2)] = inst_41196);

(statearr_41238_41271[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41216 === (11))){
var inst_41181 = (state_41215[(7)]);
var inst_41167 = (state_41215[(11)]);
var inst_41181__$1 = cljs.core.seq.call(null,inst_41167);
var state_41215__$1 = (function (){var statearr_41239 = state_41215;
(statearr_41239[(7)] = inst_41181__$1);

return statearr_41239;
})();
if(inst_41181__$1){
var statearr_41240_41272 = state_41215__$1;
(statearr_41240_41272[(1)] = (14));

} else {
var statearr_41241_41273 = state_41215__$1;
(statearr_41241_41273[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41216 === (9))){
var inst_41203 = (state_41215[(2)]);
var inst_41204 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_41215__$1 = (function (){var statearr_41242 = state_41215;
(statearr_41242[(15)] = inst_41203);

return statearr_41242;
})();
if(cljs.core.truth_(inst_41204)){
var statearr_41243_41274 = state_41215__$1;
(statearr_41243_41274[(1)] = (21));

} else {
var statearr_41244_41275 = state_41215__$1;
(statearr_41244_41275[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41216 === (5))){
var inst_41159 = cljs.core.async.close_BANG_.call(null,out);
var state_41215__$1 = state_41215;
var statearr_41245_41276 = state_41215__$1;
(statearr_41245_41276[(2)] = inst_41159);

(statearr_41245_41276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41216 === (14))){
var inst_41181 = (state_41215[(7)]);
var inst_41183 = cljs.core.chunked_seq_QMARK_.call(null,inst_41181);
var state_41215__$1 = state_41215;
if(inst_41183){
var statearr_41246_41277 = state_41215__$1;
(statearr_41246_41277[(1)] = (17));

} else {
var statearr_41247_41278 = state_41215__$1;
(statearr_41247_41278[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41216 === (16))){
var inst_41199 = (state_41215[(2)]);
var state_41215__$1 = state_41215;
var statearr_41248_41279 = state_41215__$1;
(statearr_41248_41279[(2)] = inst_41199);

(statearr_41248_41279[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41216 === (10))){
var inst_41168 = (state_41215[(9)]);
var inst_41170 = (state_41215[(12)]);
var inst_41175 = cljs.core._nth.call(null,inst_41168,inst_41170);
var state_41215__$1 = state_41215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41215__$1,(13),out,inst_41175);
} else {
if((state_val_41216 === (18))){
var inst_41181 = (state_41215[(7)]);
var inst_41190 = cljs.core.first.call(null,inst_41181);
var state_41215__$1 = state_41215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41215__$1,(20),out,inst_41190);
} else {
if((state_val_41216 === (8))){
var inst_41169 = (state_41215[(8)]);
var inst_41170 = (state_41215[(12)]);
var inst_41172 = (inst_41170 < inst_41169);
var inst_41173 = inst_41172;
var state_41215__$1 = state_41215;
if(cljs.core.truth_(inst_41173)){
var statearr_41249_41280 = state_41215__$1;
(statearr_41249_41280[(1)] = (10));

} else {
var statearr_41250_41281 = state_41215__$1;
(statearr_41250_41281[(1)] = (11));

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
});})(c__11475__auto__))
;
return ((function (switch__11410__auto__,c__11475__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__11411__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11411__auto____0 = (function (){
var statearr_41254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41254[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11411__auto__);

(statearr_41254[(1)] = (1));

return statearr_41254;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11411__auto____1 = (function (state_41215){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_41215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e41255){if((e41255 instanceof Object)){
var ex__11414__auto__ = e41255;
var statearr_41256_41282 = state_41215;
(statearr_41256_41282[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41283 = state_41215;
state_41215 = G__41283;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11411__auto__ = function(state_41215){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11411__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11411__auto____1.call(this,state_41215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11411__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11411__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto__))
})();
var state__11477__auto__ = (function (){var statearr_41257 = f__11476__auto__.call(null);
(statearr_41257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto__);

return statearr_41257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto__))
);

return c__11475__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args41284 = [];
var len__7651__auto___41287 = arguments.length;
var i__7652__auto___41288 = (0);
while(true){
if((i__7652__auto___41288 < len__7651__auto___41287)){
args41284.push((arguments[i__7652__auto___41288]));

var G__41289 = (i__7652__auto___41288 + (1));
i__7652__auto___41288 = G__41289;
continue;
} else {
}
break;
}

var G__41286 = args41284.length;
switch (G__41286) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41284.length)].join('')));

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
var args41291 = [];
var len__7651__auto___41294 = arguments.length;
var i__7652__auto___41295 = (0);
while(true){
if((i__7652__auto___41295 < len__7651__auto___41294)){
args41291.push((arguments[i__7652__auto___41295]));

var G__41296 = (i__7652__auto___41295 + (1));
i__7652__auto___41295 = G__41296;
continue;
} else {
}
break;
}

var G__41293 = args41291.length;
switch (G__41293) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41291.length)].join('')));

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
var args41298 = [];
var len__7651__auto___41349 = arguments.length;
var i__7652__auto___41350 = (0);
while(true){
if((i__7652__auto___41350 < len__7651__auto___41349)){
args41298.push((arguments[i__7652__auto___41350]));

var G__41351 = (i__7652__auto___41350 + (1));
i__7652__auto___41350 = G__41351;
continue;
} else {
}
break;
}

var G__41300 = args41298.length;
switch (G__41300) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41298.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11475__auto___41353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto___41353,out){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto___41353,out){
return (function (state_41324){
var state_val_41325 = (state_41324[(1)]);
if((state_val_41325 === (7))){
var inst_41319 = (state_41324[(2)]);
var state_41324__$1 = state_41324;
var statearr_41326_41354 = state_41324__$1;
(statearr_41326_41354[(2)] = inst_41319);

(statearr_41326_41354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41325 === (1))){
var inst_41301 = null;
var state_41324__$1 = (function (){var statearr_41327 = state_41324;
(statearr_41327[(7)] = inst_41301);

return statearr_41327;
})();
var statearr_41328_41355 = state_41324__$1;
(statearr_41328_41355[(2)] = null);

(statearr_41328_41355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41325 === (4))){
var inst_41304 = (state_41324[(8)]);
var inst_41304__$1 = (state_41324[(2)]);
var inst_41305 = (inst_41304__$1 == null);
var inst_41306 = cljs.core.not.call(null,inst_41305);
var state_41324__$1 = (function (){var statearr_41329 = state_41324;
(statearr_41329[(8)] = inst_41304__$1);

return statearr_41329;
})();
if(inst_41306){
var statearr_41330_41356 = state_41324__$1;
(statearr_41330_41356[(1)] = (5));

} else {
var statearr_41331_41357 = state_41324__$1;
(statearr_41331_41357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41325 === (6))){
var state_41324__$1 = state_41324;
var statearr_41332_41358 = state_41324__$1;
(statearr_41332_41358[(2)] = null);

(statearr_41332_41358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41325 === (3))){
var inst_41321 = (state_41324[(2)]);
var inst_41322 = cljs.core.async.close_BANG_.call(null,out);
var state_41324__$1 = (function (){var statearr_41333 = state_41324;
(statearr_41333[(9)] = inst_41321);

return statearr_41333;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41324__$1,inst_41322);
} else {
if((state_val_41325 === (2))){
var state_41324__$1 = state_41324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41324__$1,(4),ch);
} else {
if((state_val_41325 === (11))){
var inst_41304 = (state_41324[(8)]);
var inst_41313 = (state_41324[(2)]);
var inst_41301 = inst_41304;
var state_41324__$1 = (function (){var statearr_41334 = state_41324;
(statearr_41334[(10)] = inst_41313);

(statearr_41334[(7)] = inst_41301);

return statearr_41334;
})();
var statearr_41335_41359 = state_41324__$1;
(statearr_41335_41359[(2)] = null);

(statearr_41335_41359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41325 === (9))){
var inst_41304 = (state_41324[(8)]);
var state_41324__$1 = state_41324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41324__$1,(11),out,inst_41304);
} else {
if((state_val_41325 === (5))){
var inst_41304 = (state_41324[(8)]);
var inst_41301 = (state_41324[(7)]);
var inst_41308 = cljs.core._EQ_.call(null,inst_41304,inst_41301);
var state_41324__$1 = state_41324;
if(inst_41308){
var statearr_41337_41360 = state_41324__$1;
(statearr_41337_41360[(1)] = (8));

} else {
var statearr_41338_41361 = state_41324__$1;
(statearr_41338_41361[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41325 === (10))){
var inst_41316 = (state_41324[(2)]);
var state_41324__$1 = state_41324;
var statearr_41339_41362 = state_41324__$1;
(statearr_41339_41362[(2)] = inst_41316);

(statearr_41339_41362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41325 === (8))){
var inst_41301 = (state_41324[(7)]);
var tmp41336 = inst_41301;
var inst_41301__$1 = tmp41336;
var state_41324__$1 = (function (){var statearr_41340 = state_41324;
(statearr_41340[(7)] = inst_41301__$1);

return statearr_41340;
})();
var statearr_41341_41363 = state_41324__$1;
(statearr_41341_41363[(2)] = null);

(statearr_41341_41363[(1)] = (2));


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
});})(c__11475__auto___41353,out))
;
return ((function (switch__11410__auto__,c__11475__auto___41353,out){
return (function() {
var cljs$core$async$state_machine__11411__auto__ = null;
var cljs$core$async$state_machine__11411__auto____0 = (function (){
var statearr_41345 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41345[(0)] = cljs$core$async$state_machine__11411__auto__);

(statearr_41345[(1)] = (1));

return statearr_41345;
});
var cljs$core$async$state_machine__11411__auto____1 = (function (state_41324){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_41324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e41346){if((e41346 instanceof Object)){
var ex__11414__auto__ = e41346;
var statearr_41347_41364 = state_41324;
(statearr_41347_41364[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41365 = state_41324;
state_41324 = G__41365;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
cljs$core$async$state_machine__11411__auto__ = function(state_41324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11411__auto____1.call(this,state_41324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11411__auto____0;
cljs$core$async$state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11411__auto____1;
return cljs$core$async$state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto___41353,out))
})();
var state__11477__auto__ = (function (){var statearr_41348 = f__11476__auto__.call(null);
(statearr_41348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___41353);

return statearr_41348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto___41353,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args41366 = [];
var len__7651__auto___41436 = arguments.length;
var i__7652__auto___41437 = (0);
while(true){
if((i__7652__auto___41437 < len__7651__auto___41436)){
args41366.push((arguments[i__7652__auto___41437]));

var G__41438 = (i__7652__auto___41437 + (1));
i__7652__auto___41437 = G__41438;
continue;
} else {
}
break;
}

var G__41368 = args41366.length;
switch (G__41368) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41366.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11475__auto___41440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto___41440,out){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto___41440,out){
return (function (state_41406){
var state_val_41407 = (state_41406[(1)]);
if((state_val_41407 === (7))){
var inst_41402 = (state_41406[(2)]);
var state_41406__$1 = state_41406;
var statearr_41408_41441 = state_41406__$1;
(statearr_41408_41441[(2)] = inst_41402);

(statearr_41408_41441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41407 === (1))){
var inst_41369 = (new Array(n));
var inst_41370 = inst_41369;
var inst_41371 = (0);
var state_41406__$1 = (function (){var statearr_41409 = state_41406;
(statearr_41409[(7)] = inst_41371);

(statearr_41409[(8)] = inst_41370);

return statearr_41409;
})();
var statearr_41410_41442 = state_41406__$1;
(statearr_41410_41442[(2)] = null);

(statearr_41410_41442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41407 === (4))){
var inst_41374 = (state_41406[(9)]);
var inst_41374__$1 = (state_41406[(2)]);
var inst_41375 = (inst_41374__$1 == null);
var inst_41376 = cljs.core.not.call(null,inst_41375);
var state_41406__$1 = (function (){var statearr_41411 = state_41406;
(statearr_41411[(9)] = inst_41374__$1);

return statearr_41411;
})();
if(inst_41376){
var statearr_41412_41443 = state_41406__$1;
(statearr_41412_41443[(1)] = (5));

} else {
var statearr_41413_41444 = state_41406__$1;
(statearr_41413_41444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41407 === (15))){
var inst_41396 = (state_41406[(2)]);
var state_41406__$1 = state_41406;
var statearr_41414_41445 = state_41406__$1;
(statearr_41414_41445[(2)] = inst_41396);

(statearr_41414_41445[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41407 === (13))){
var state_41406__$1 = state_41406;
var statearr_41415_41446 = state_41406__$1;
(statearr_41415_41446[(2)] = null);

(statearr_41415_41446[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41407 === (6))){
var inst_41371 = (state_41406[(7)]);
var inst_41392 = (inst_41371 > (0));
var state_41406__$1 = state_41406;
if(cljs.core.truth_(inst_41392)){
var statearr_41416_41447 = state_41406__$1;
(statearr_41416_41447[(1)] = (12));

} else {
var statearr_41417_41448 = state_41406__$1;
(statearr_41417_41448[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41407 === (3))){
var inst_41404 = (state_41406[(2)]);
var state_41406__$1 = state_41406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41406__$1,inst_41404);
} else {
if((state_val_41407 === (12))){
var inst_41370 = (state_41406[(8)]);
var inst_41394 = cljs.core.vec.call(null,inst_41370);
var state_41406__$1 = state_41406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41406__$1,(15),out,inst_41394);
} else {
if((state_val_41407 === (2))){
var state_41406__$1 = state_41406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41406__$1,(4),ch);
} else {
if((state_val_41407 === (11))){
var inst_41386 = (state_41406[(2)]);
var inst_41387 = (new Array(n));
var inst_41370 = inst_41387;
var inst_41371 = (0);
var state_41406__$1 = (function (){var statearr_41418 = state_41406;
(statearr_41418[(7)] = inst_41371);

(statearr_41418[(10)] = inst_41386);

(statearr_41418[(8)] = inst_41370);

return statearr_41418;
})();
var statearr_41419_41449 = state_41406__$1;
(statearr_41419_41449[(2)] = null);

(statearr_41419_41449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41407 === (9))){
var inst_41370 = (state_41406[(8)]);
var inst_41384 = cljs.core.vec.call(null,inst_41370);
var state_41406__$1 = state_41406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41406__$1,(11),out,inst_41384);
} else {
if((state_val_41407 === (5))){
var inst_41379 = (state_41406[(11)]);
var inst_41371 = (state_41406[(7)]);
var inst_41374 = (state_41406[(9)]);
var inst_41370 = (state_41406[(8)]);
var inst_41378 = (inst_41370[inst_41371] = inst_41374);
var inst_41379__$1 = (inst_41371 + (1));
var inst_41380 = (inst_41379__$1 < n);
var state_41406__$1 = (function (){var statearr_41420 = state_41406;
(statearr_41420[(11)] = inst_41379__$1);

(statearr_41420[(12)] = inst_41378);

return statearr_41420;
})();
if(cljs.core.truth_(inst_41380)){
var statearr_41421_41450 = state_41406__$1;
(statearr_41421_41450[(1)] = (8));

} else {
var statearr_41422_41451 = state_41406__$1;
(statearr_41422_41451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41407 === (14))){
var inst_41399 = (state_41406[(2)]);
var inst_41400 = cljs.core.async.close_BANG_.call(null,out);
var state_41406__$1 = (function (){var statearr_41424 = state_41406;
(statearr_41424[(13)] = inst_41399);

return statearr_41424;
})();
var statearr_41425_41452 = state_41406__$1;
(statearr_41425_41452[(2)] = inst_41400);

(statearr_41425_41452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41407 === (10))){
var inst_41390 = (state_41406[(2)]);
var state_41406__$1 = state_41406;
var statearr_41426_41453 = state_41406__$1;
(statearr_41426_41453[(2)] = inst_41390);

(statearr_41426_41453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41407 === (8))){
var inst_41379 = (state_41406[(11)]);
var inst_41370 = (state_41406[(8)]);
var tmp41423 = inst_41370;
var inst_41370__$1 = tmp41423;
var inst_41371 = inst_41379;
var state_41406__$1 = (function (){var statearr_41427 = state_41406;
(statearr_41427[(7)] = inst_41371);

(statearr_41427[(8)] = inst_41370__$1);

return statearr_41427;
})();
var statearr_41428_41454 = state_41406__$1;
(statearr_41428_41454[(2)] = null);

(statearr_41428_41454[(1)] = (2));


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
});})(c__11475__auto___41440,out))
;
return ((function (switch__11410__auto__,c__11475__auto___41440,out){
return (function() {
var cljs$core$async$state_machine__11411__auto__ = null;
var cljs$core$async$state_machine__11411__auto____0 = (function (){
var statearr_41432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41432[(0)] = cljs$core$async$state_machine__11411__auto__);

(statearr_41432[(1)] = (1));

return statearr_41432;
});
var cljs$core$async$state_machine__11411__auto____1 = (function (state_41406){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_41406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e41433){if((e41433 instanceof Object)){
var ex__11414__auto__ = e41433;
var statearr_41434_41455 = state_41406;
(statearr_41434_41455[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41456 = state_41406;
state_41406 = G__41456;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
cljs$core$async$state_machine__11411__auto__ = function(state_41406){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11411__auto____1.call(this,state_41406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11411__auto____0;
cljs$core$async$state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11411__auto____1;
return cljs$core$async$state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto___41440,out))
})();
var state__11477__auto__ = (function (){var statearr_41435 = f__11476__auto__.call(null);
(statearr_41435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___41440);

return statearr_41435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto___41440,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args41457 = [];
var len__7651__auto___41531 = arguments.length;
var i__7652__auto___41532 = (0);
while(true){
if((i__7652__auto___41532 < len__7651__auto___41531)){
args41457.push((arguments[i__7652__auto___41532]));

var G__41533 = (i__7652__auto___41532 + (1));
i__7652__auto___41532 = G__41533;
continue;
} else {
}
break;
}

var G__41459 = args41457.length;
switch (G__41459) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41457.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11475__auto___41535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto___41535,out){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto___41535,out){
return (function (state_41501){
var state_val_41502 = (state_41501[(1)]);
if((state_val_41502 === (7))){
var inst_41497 = (state_41501[(2)]);
var state_41501__$1 = state_41501;
var statearr_41503_41536 = state_41501__$1;
(statearr_41503_41536[(2)] = inst_41497);

(statearr_41503_41536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (1))){
var inst_41460 = [];
var inst_41461 = inst_41460;
var inst_41462 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41501__$1 = (function (){var statearr_41504 = state_41501;
(statearr_41504[(7)] = inst_41461);

(statearr_41504[(8)] = inst_41462);

return statearr_41504;
})();
var statearr_41505_41537 = state_41501__$1;
(statearr_41505_41537[(2)] = null);

(statearr_41505_41537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (4))){
var inst_41465 = (state_41501[(9)]);
var inst_41465__$1 = (state_41501[(2)]);
var inst_41466 = (inst_41465__$1 == null);
var inst_41467 = cljs.core.not.call(null,inst_41466);
var state_41501__$1 = (function (){var statearr_41506 = state_41501;
(statearr_41506[(9)] = inst_41465__$1);

return statearr_41506;
})();
if(inst_41467){
var statearr_41507_41538 = state_41501__$1;
(statearr_41507_41538[(1)] = (5));

} else {
var statearr_41508_41539 = state_41501__$1;
(statearr_41508_41539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (15))){
var inst_41491 = (state_41501[(2)]);
var state_41501__$1 = state_41501;
var statearr_41509_41540 = state_41501__$1;
(statearr_41509_41540[(2)] = inst_41491);

(statearr_41509_41540[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (13))){
var state_41501__$1 = state_41501;
var statearr_41510_41541 = state_41501__$1;
(statearr_41510_41541[(2)] = null);

(statearr_41510_41541[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (6))){
var inst_41461 = (state_41501[(7)]);
var inst_41486 = inst_41461.length;
var inst_41487 = (inst_41486 > (0));
var state_41501__$1 = state_41501;
if(cljs.core.truth_(inst_41487)){
var statearr_41511_41542 = state_41501__$1;
(statearr_41511_41542[(1)] = (12));

} else {
var statearr_41512_41543 = state_41501__$1;
(statearr_41512_41543[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (3))){
var inst_41499 = (state_41501[(2)]);
var state_41501__$1 = state_41501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41501__$1,inst_41499);
} else {
if((state_val_41502 === (12))){
var inst_41461 = (state_41501[(7)]);
var inst_41489 = cljs.core.vec.call(null,inst_41461);
var state_41501__$1 = state_41501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41501__$1,(15),out,inst_41489);
} else {
if((state_val_41502 === (2))){
var state_41501__$1 = state_41501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41501__$1,(4),ch);
} else {
if((state_val_41502 === (11))){
var inst_41465 = (state_41501[(9)]);
var inst_41469 = (state_41501[(10)]);
var inst_41479 = (state_41501[(2)]);
var inst_41480 = [];
var inst_41481 = inst_41480.push(inst_41465);
var inst_41461 = inst_41480;
var inst_41462 = inst_41469;
var state_41501__$1 = (function (){var statearr_41513 = state_41501;
(statearr_41513[(11)] = inst_41479);

(statearr_41513[(7)] = inst_41461);

(statearr_41513[(8)] = inst_41462);

(statearr_41513[(12)] = inst_41481);

return statearr_41513;
})();
var statearr_41514_41544 = state_41501__$1;
(statearr_41514_41544[(2)] = null);

(statearr_41514_41544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (9))){
var inst_41461 = (state_41501[(7)]);
var inst_41477 = cljs.core.vec.call(null,inst_41461);
var state_41501__$1 = state_41501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41501__$1,(11),out,inst_41477);
} else {
if((state_val_41502 === (5))){
var inst_41465 = (state_41501[(9)]);
var inst_41469 = (state_41501[(10)]);
var inst_41462 = (state_41501[(8)]);
var inst_41469__$1 = f.call(null,inst_41465);
var inst_41470 = cljs.core._EQ_.call(null,inst_41469__$1,inst_41462);
var inst_41471 = cljs.core.keyword_identical_QMARK_.call(null,inst_41462,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41472 = (inst_41470) || (inst_41471);
var state_41501__$1 = (function (){var statearr_41515 = state_41501;
(statearr_41515[(10)] = inst_41469__$1);

return statearr_41515;
})();
if(cljs.core.truth_(inst_41472)){
var statearr_41516_41545 = state_41501__$1;
(statearr_41516_41545[(1)] = (8));

} else {
var statearr_41517_41546 = state_41501__$1;
(statearr_41517_41546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (14))){
var inst_41494 = (state_41501[(2)]);
var inst_41495 = cljs.core.async.close_BANG_.call(null,out);
var state_41501__$1 = (function (){var statearr_41519 = state_41501;
(statearr_41519[(13)] = inst_41494);

return statearr_41519;
})();
var statearr_41520_41547 = state_41501__$1;
(statearr_41520_41547[(2)] = inst_41495);

(statearr_41520_41547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (10))){
var inst_41484 = (state_41501[(2)]);
var state_41501__$1 = state_41501;
var statearr_41521_41548 = state_41501__$1;
(statearr_41521_41548[(2)] = inst_41484);

(statearr_41521_41548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41502 === (8))){
var inst_41465 = (state_41501[(9)]);
var inst_41469 = (state_41501[(10)]);
var inst_41461 = (state_41501[(7)]);
var inst_41474 = inst_41461.push(inst_41465);
var tmp41518 = inst_41461;
var inst_41461__$1 = tmp41518;
var inst_41462 = inst_41469;
var state_41501__$1 = (function (){var statearr_41522 = state_41501;
(statearr_41522[(7)] = inst_41461__$1);

(statearr_41522[(14)] = inst_41474);

(statearr_41522[(8)] = inst_41462);

return statearr_41522;
})();
var statearr_41523_41549 = state_41501__$1;
(statearr_41523_41549[(2)] = null);

(statearr_41523_41549[(1)] = (2));


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
});})(c__11475__auto___41535,out))
;
return ((function (switch__11410__auto__,c__11475__auto___41535,out){
return (function() {
var cljs$core$async$state_machine__11411__auto__ = null;
var cljs$core$async$state_machine__11411__auto____0 = (function (){
var statearr_41527 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41527[(0)] = cljs$core$async$state_machine__11411__auto__);

(statearr_41527[(1)] = (1));

return statearr_41527;
});
var cljs$core$async$state_machine__11411__auto____1 = (function (state_41501){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_41501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e41528){if((e41528 instanceof Object)){
var ex__11414__auto__ = e41528;
var statearr_41529_41550 = state_41501;
(statearr_41529_41550[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41551 = state_41501;
state_41501 = G__41551;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
cljs$core$async$state_machine__11411__auto__ = function(state_41501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11411__auto____1.call(this,state_41501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11411__auto____0;
cljs$core$async$state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11411__auto____1;
return cljs$core$async$state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto___41535,out))
})();
var state__11477__auto__ = (function (){var statearr_41530 = f__11476__auto__.call(null);
(statearr_41530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___41535);

return statearr_41530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto___41535,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map