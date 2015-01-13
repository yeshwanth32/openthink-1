// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13945 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13945 = (function (f,fn_handler,meta13946){
this.f = f;
this.fn_handler = fn_handler;
this.meta13946 = meta13946;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13945.cljs$lang$type = true;
cljs.core.async.t13945.cljs$lang$ctorStr = "cljs.core.async/t13945";
cljs.core.async.t13945.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t13945");
});
cljs.core.async.t13945.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13945.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13945.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13945.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13947){var self__ = this;
var _13947__$1 = this;return self__.meta13946;
});
cljs.core.async.t13945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13947,meta13946__$1){var self__ = this;
var _13947__$1 = this;return (new cljs.core.async.t13945(self__.f,self__.fn_handler,meta13946__$1));
});
cljs.core.async.__GT_t13945 = (function __GT_t13945(f__$1,fn_handler__$1,meta13946){return (new cljs.core.async.t13945(f__$1,fn_handler__$1,meta13946));
});
}
return (new cljs.core.async.t13945(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13949 = buff;if(G__13949)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3638__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
} else
{return G__13949.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13949.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13949);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13949);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_13950 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13950);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_13950,ret){
return (function (){return fn1.call(null,val_13950);
});})(val_13950,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___13951 = n;var x_13952 = (0);while(true){
if((x_13952 < n__4508__auto___13951))
{(a[x_13952] = (0));
{
var G__13953 = (x_13952 + (1));
x_13952 = G__13953;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__13954 = (i + (1));
i = G__13954;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13958 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13958 = (function (flag,alt_flag,meta13959){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13959 = meta13959;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13958.cljs$lang$type = true;
cljs.core.async.t13958.cljs$lang$ctorStr = "cljs.core.async/t13958";
cljs.core.async.t13958.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t13958");
});})(flag))
;
cljs.core.async.t13958.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13958.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t13958.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t13958.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13960){var self__ = this;
var _13960__$1 = this;return self__.meta13959;
});})(flag))
;
cljs.core.async.t13958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13960,meta13959__$1){var self__ = this;
var _13960__$1 = this;return (new cljs.core.async.t13958(self__.flag,self__.alt_flag,meta13959__$1));
});})(flag))
;
cljs.core.async.__GT_t13958 = ((function (flag){
return (function __GT_t13958(flag__$1,alt_flag__$1,meta13959){return (new cljs.core.async.t13958(flag__$1,alt_flag__$1,meta13959));
});})(flag))
;
}
return (new cljs.core.async.t13958(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13964 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13964 = (function (cb,flag,alt_handler,meta13965){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13965 = meta13965;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13964.cljs$lang$type = true;
cljs.core.async.t13964.cljs$lang$ctorStr = "cljs.core.async/t13964";
cljs.core.async.t13964.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t13964");
});
cljs.core.async.t13964.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13964.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13964.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13966){var self__ = this;
var _13966__$1 = this;return self__.meta13965;
});
cljs.core.async.t13964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13966,meta13965__$1){var self__ = this;
var _13966__$1 = this;return (new cljs.core.async.t13964(self__.cb,self__.flag,self__.alt_handler,meta13965__$1));
});
cljs.core.async.__GT_t13964 = (function __GT_t13964(cb__$1,flag__$1,alt_handler__$1,meta13965){return (new cljs.core.async.t13964(cb__$1,flag__$1,alt_handler__$1,meta13965));
});
}
return (new cljs.core.async.t13964(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13967_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13967_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13968_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13968_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3638__auto__ = wport;if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__13969 = (i + (1));
i = G__13969;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3638__auto__ = ret;if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3626__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3626__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3626__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__13970){var map__13972 = p__13970;var map__13972__$1 = ((cljs.core.seq_QMARK_.call(null,map__13972))?cljs.core.apply.call(null,cljs.core.hash_map,map__13972):map__13972);var opts = map__13972__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__13970 = null;if (arguments.length > 1) {
  p__13970 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13970);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13973){
var ports = cljs.core.first(arglist__13973);
var p__13970 = cljs.core.rest(arglist__13973);
return alts_BANG___delegate(ports,p__13970);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6588__auto___14068 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6588__auto___14068){
return (function (){var f__6589__auto__ = (function (){var switch__6573__auto__ = ((function (c__6588__auto___14068){
return (function (state_14044){var state_val_14045 = (state_14044[(1)]);if((state_val_14045 === (7)))
{var inst_14040 = (state_14044[(2)]);var state_14044__$1 = state_14044;var statearr_14046_14069 = state_14044__$1;(statearr_14046_14069[(2)] = inst_14040);
(statearr_14046_14069[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14045 === (1)))
{var state_14044__$1 = state_14044;var statearr_14047_14070 = state_14044__$1;(statearr_14047_14070[(2)] = null);
(statearr_14047_14070[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14045 === (4)))
{var inst_14023 = (state_14044[(7)]);var inst_14023__$1 = (state_14044[(2)]);var inst_14024 = (inst_14023__$1 == null);var state_14044__$1 = (function (){var statearr_14048 = state_14044;(statearr_14048[(7)] = inst_14023__$1);
return statearr_14048;
})();if(cljs.core.truth_(inst_14024))
{var statearr_14049_14071 = state_14044__$1;(statearr_14049_14071[(1)] = (5));
} else
{var statearr_14050_14072 = state_14044__$1;(statearr_14050_14072[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14045 === (13)))
{var state_14044__$1 = state_14044;var statearr_14051_14073 = state_14044__$1;(statearr_14051_14073[(2)] = null);
(statearr_14051_14073[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14045 === (6)))
{var inst_14023 = (state_14044[(7)]);var state_14044__$1 = state_14044;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14044__$1,(11),to,inst_14023);
} else
{if((state_val_14045 === (3)))
{var inst_14042 = (state_14044[(2)]);var state_14044__$1 = state_14044;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14044__$1,inst_14042);
} else
{if((state_val_14045 === (12)))
{var state_14044__$1 = state_14044;var statearr_14052_14074 = state_14044__$1;(statearr_14052_14074[(2)] = null);
(statearr_14052_14074[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14045 === (2)))
{var state_14044__$1 = state_14044;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14044__$1,(4),from);
} else
{if((state_val_14045 === (11)))
{var inst_14033 = (state_14044[(2)]);var state_14044__$1 = state_14044;if(cljs.core.truth_(inst_14033))
{var statearr_14053_14075 = state_14044__$1;(statearr_14053_14075[(1)] = (12));
} else
{var statearr_14054_14076 = state_14044__$1;(statearr_14054_14076[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14045 === (9)))
{var state_14044__$1 = state_14044;var statearr_14055_14077 = state_14044__$1;(statearr_14055_14077[(2)] = null);
(statearr_14055_14077[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14045 === (5)))
{var state_14044__$1 = state_14044;if(cljs.core.truth_(close_QMARK_))
{var statearr_14056_14078 = state_14044__$1;(statearr_14056_14078[(1)] = (8));
} else
{var statearr_14057_14079 = state_14044__$1;(statearr_14057_14079[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14045 === (14)))
{var inst_14038 = (state_14044[(2)]);var state_14044__$1 = state_14044;var statearr_14058_14080 = state_14044__$1;(statearr_14058_14080[(2)] = inst_14038);
(statearr_14058_14080[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14045 === (10)))
{var inst_14030 = (state_14044[(2)]);var state_14044__$1 = state_14044;var statearr_14059_14081 = state_14044__$1;(statearr_14059_14081[(2)] = inst_14030);
(statearr_14059_14081[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14045 === (8)))
{var inst_14027 = cljs.core.async.close_BANG_.call(null,to);var state_14044__$1 = state_14044;var statearr_14060_14082 = state_14044__$1;(statearr_14060_14082[(2)] = inst_14027);
(statearr_14060_14082[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6588__auto___14068))
;return ((function (switch__6573__auto__,c__6588__auto___14068){
return (function() {
var state_machine__6574__auto__ = null;
var state_machine__6574__auto____0 = (function (){var statearr_14064 = [null,null,null,null,null,null,null,null];(statearr_14064[(0)] = state_machine__6574__auto__);
(statearr_14064[(1)] = (1));
return statearr_14064;
});
var state_machine__6574__auto____1 = (function (state_14044){while(true){
var ret_value__6575__auto__ = (function (){try{while(true){
var result__6576__auto__ = switch__6573__auto__.call(null,state_14044);if(cljs.core.keyword_identical_QMARK_.call(null,result__6576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6576__auto__;
}
break;
}
}catch (e14065){if((e14065 instanceof Object))
{var ex__6577__auto__ = e14065;var statearr_14066_14083 = state_14044;(statearr_14066_14083[(5)] = ex__6577__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14044);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14065;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14084 = state_14044;
state_14044 = G__14084;
continue;
}
} else
{return ret_value__6575__auto__;
}
break;
}
});
state_machine__6574__auto__ = function(state_14044){
switch(arguments.length){
case 0:
return state_machine__6574__auto____0.call(this);
case 1:
return state_machine__6574__auto____1.call(this,state_14044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6574__auto____0;
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6574__auto____1;
return state_machine__6574__auto__;
})()
;})(switch__6573__auto__,c__6588__auto___14068))
})();var state__6590__auto__ = (function (){var statearr_14067 = f__6589__auto__.call(null);(statearr_14067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6588__auto___14068);
return statearr_14067;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6590__auto__);
});})(c__6588__auto___14068))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__14268){var vec__14269 = p__14268;var v = cljs.core.nth.call(null,vec__14269,(0),null);var p = cljs.core.nth.call(null,vec__14269,(1),null);var job = vec__14269;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__6588__auto___14451 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6588__auto___14451,res,vec__14269,v,p,job,jobs,results){
return (function (){var f__6589__auto__ = (function (){var switch__6573__auto__ = ((function (c__6588__auto___14451,res,vec__14269,v,p,job,jobs,results){
return (function (state_14274){var state_val_14275 = (state_14274[(1)]);if((state_val_14275 === (2)))
{var inst_14271 = (state_14274[(2)]);var inst_14272 = cljs.core.async.close_BANG_.call(null,res);var state_14274__$1 = (function (){var statearr_14276 = state_14274;(statearr_14276[(7)] = inst_14271);
return statearr_14276;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14274__$1,inst_14272);
} else
{if((state_val_14275 === (1)))
{var state_14274__$1 = state_14274;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14274__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6588__auto___14451,res,vec__14269,v,p,job,jobs,results))
;return ((function (switch__6573__auto__,c__6588__auto___14451,res,vec__14269,v,p,job,jobs,results){
return (function() {
var state_machine__6574__auto__ = null;
var state_machine__6574__auto____0 = (function (){var statearr_14280 = [null,null,null,null,null,null,null,null];(statearr_14280[(0)] = state_machine__6574__auto__);
(statearr_14280[(1)] = (1));
return statearr_14280;
});
var state_machine__6574__auto____1 = (function (state_14274){while(true){
var ret_value__6575__auto__ = (function (){try{while(true){
var result__6576__auto__ = switch__6573__auto__.call(null,state_14274);if(cljs.core.keyword_identical_QMARK_.call(null,result__6576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6576__auto__;
}
break;
}
}catch (e14281){if((e14281 instanceof Object))
{var ex__6577__auto__ = e14281;var statearr_14282_14452 = state_14274;(statearr_14282_14452[(5)] = ex__6577__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14274);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14281;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14453 = state_14274;
state_14274 = G__14453;
continue;
}
} else
{return ret_value__6575__auto__;
}
break;
}
});
state_machine__6574__auto__ = function(state_14274){
switch(arguments.length){
case 0:
return state_machine__6574__auto____0.call(this);
case 1:
return state_machine__6574__auto____1.call(this,state_14274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6574__auto____0;
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6574__auto____1;
return state_machine__6574__auto__;
})()
;})(switch__6573__auto__,c__6588__auto___14451,res,vec__14269,v,p,job,jobs,results))
})();var state__6590__auto__ = (function (){var statearr_14283 = f__6589__auto__.call(null);(statearr_14283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6588__auto___14451);
return statearr_14283;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6590__auto__);
});})(c__6588__auto___14451,res,vec__14269,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__14284){var vec__14285 = p__14284;var v = cljs.core.nth.call(null,vec__14285,(0),null);var p = cljs.core.nth.call(null,vec__14285,(1),null);var job = vec__14285;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___14454 = n;var __14455 = (0);while(true){
if((__14455 < n__4508__auto___14454))
{var G__14286_14456 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__14286_14456) {
case "async":
var c__6588__auto___14458 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__14455,c__6588__auto___14458,G__14286_14456,n__4508__auto___14454,jobs,results,process,async){
return (function (){var f__6589__auto__ = (function (){var switch__6573__auto__ = ((function (__14455,c__6588__auto___14458,G__14286_14456,n__4508__auto___14454,jobs,results,process,async){
return (function (state_14299){var state_val_14300 = (state_14299[(1)]);if((state_val_14300 === (7)))
{var inst_14295 = (state_14299[(2)]);var state_14299__$1 = state_14299;var statearr_14301_14459 = state_14299__$1;(statearr_14301_14459[(2)] = inst_14295);
(statearr_14301_14459[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14300 === (6)))
{var state_14299__$1 = state_14299;var statearr_14302_14460 = state_14299__$1;(statearr_14302_14460[(2)] = null);
(statearr_14302_14460[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14300 === (5)))
{var state_14299__$1 = state_14299;var statearr_14303_14461 = state_14299__$1;(statearr_14303_14461[(2)] = null);
(statearr_14303_14461[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14300 === (4)))
{var inst_14289 = (state_14299[(2)]);var inst_14290 = async.call(null,inst_14289);var state_14299__$1 = state_14299;if(cljs.core.truth_(inst_14290))
{var statearr_14304_14462 = state_14299__$1;(statearr_14304_14462[(1)] = (5));
} else
{var statearr_14305_14463 = state_14299__$1;(statearr_14305_14463[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14300 === (3)))
{var inst_14297 = (state_14299[(2)]);var state_14299__$1 = state_14299;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14299__$1,inst_14297);
} else
{if((state_val_14300 === (2)))
{var state_14299__$1 = state_14299;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14299__$1,(4),jobs);
} else
{if((state_val_14300 === (1)))
{var state_14299__$1 = state_14299;var statearr_14306_14464 = state_14299__$1;(statearr_14306_14464[(2)] = null);
(statearr_14306_14464[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__14455,c__6588__auto___14458,G__14286_14456,n__4508__auto___14454,jobs,results,process,async))
;return ((function (__14455,switch__6573__auto__,c__6588__auto___14458,G__14286_14456,n__4508__auto___14454,jobs,results,process,async){
return (function() {
var state_machine__6574__auto__ = null;
var state_machine__6574__auto____0 = (function (){var statearr_14310 = [null,null,null,null,null,null,null];(statearr_14310[(0)] = state_machine__6574__auto__);
(statearr_14310[(1)] = (1));
return statearr_14310;
});
var state_machine__6574__auto____1 = (function (state_14299){while(true){
var ret_value__6575__auto__ = (function (){try{while(true){
var result__6576__auto__ = switch__6573__auto__.call(null,state_14299);if(cljs.core.keyword_identical_QMARK_.call(null,result__6576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6576__auto__;
}
break;
}
}catch (e14311){if((e14311 instanceof Object))
{var ex__6577__auto__ = e14311;var statearr_14312_14465 = state_14299;(statearr_14312_14465[(5)] = ex__6577__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14299);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14311;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14466 = state_14299;
state_14299 = G__14466;
continue;
}
} else
{return ret_value__6575__auto__;
}
break;
}
});
state_machine__6574__auto__ = function(state_14299){
switch(arguments.length){
case 0:
return state_machine__6574__auto____0.call(this);
case 1:
return state_machine__6574__auto____1.call(this,state_14299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6574__auto____0;
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6574__auto____1;
return state_machine__6574__auto__;
})()
;})(__14455,switch__6573__auto__,c__6588__auto___14458,G__14286_14456,n__4508__auto___14454,jobs,results,process,async))
})();var state__6590__auto__ = (function (){var statearr_14313 = f__6589__auto__.call(null);(statearr_14313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6588__auto___14458);
return statearr_14313;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6590__auto__);
});})(__14455,c__6588__auto___14458,G__14286_14456,n__4508__auto___14454,jobs,results,process,async))
);

break;
case "compute":
var c__6588__auto___14467 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__14455,c__6588__auto___14467,G__14286_14456,n__4508__auto___14454,jobs,results,process,async){
return (function (){var f__6589__auto__ = (function (){var switch__6573__auto__ = ((function (__14455,c__6588__auto___14467,G__14286_14456,n__4508__auto___14454,jobs,results,process,async){
return (function (state_14326){var state_val_14327 = (state_14326[(1)]);if((state_val_14327 === (7)))
{var inst_14322 = (state_14326[(2)]);var state_14326__$1 = state_14326;var statearr_14328_14468 = state_14326__$1;(statearr_14328_14468[(2)] = inst_14322);
(statearr_14328_14468[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14327 === (6)))
{var state_14326__$1 = state_14326;var statearr_14329_14469 = state_14326__$1;(statearr_14329_14469[(2)] = null);
(statearr_14329_14469[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14327 === (5)))
{var state_14326__$1 = state_14326;var statearr_14330_14470 = state_14326__$1;(statearr_14330_14470[(2)] = null);
(statearr_14330_14470[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14327 === (4)))
{var inst_14316 = (state_14326[(2)]);var inst_14317 = process.call(null,inst_14316);var state_14326__$1 = state_14326;if(cljs.core.truth_(inst_14317))
{var statearr_14331_14471 = state_14326__$1;(statearr_14331_14471[(1)] = (5));
} else
{var statearr_14332_14472 = state_14326__$1;(statearr_14332_14472[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14327 === (3)))
{var inst_14324 = (state_14326[(2)]);var state_14326__$1 = state_14326;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14326__$1,inst_14324);
} else
{if((state_val_14327 === (2)))
{var state_14326__$1 = state_14326;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14326__$1,(4),jobs);
} else
{if((state_val_14327 === (1)))
{var state_14326__$1 = state_14326;var statearr_14333_14473 = state_14326__$1;(statearr_14333_14473[(2)] = null);
(statearr_14333_14473[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__14455,c__6588__auto___14467,G__14286_14456,n__4508__auto___14454,jobs,results,process,async))
;return ((function (__14455,switch__6573__auto__,c__6588__auto___14467,G__14286_14456,n__4508__auto___14454,jobs,results,process,async){
return (function() {
var state_machine__6574__auto__ = null;
var state_machine__6574__auto____0 = (function (){var statearr_14337 = [null,null,null,null,null,null,null];(statearr_14337[(0)] = state_machine__6574__auto__);
(statearr_14337[(1)] = (1));
return statearr_14337;
});
var state_machine__6574__auto____1 = (function (state_14326){while(true){
var ret_value__6575__auto__ = (function (){try{while(true){
var result__6576__auto__ = switch__6573__auto__.call(null,state_14326);if(cljs.core.keyword_identical_QMARK_.call(null,result__6576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6576__auto__;
}
break;
}
}catch (e14338){if((e14338 instanceof Object))
{var ex__6577__auto__ = e14338;var statearr_14339_14474 = state_14326;(statearr_14339_14474[(5)] = ex__6577__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14326);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14338;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14475 = state_14326;
state_14326 = G__14475;
continue;
}
} else
{return ret_value__6575__auto__;
}
break;
}
});
state_machine__6574__auto__ = function(state_14326){
switch(arguments.length){
case 0:
return state_machine__6574__auto____0.call(this);
case 1:
return state_machine__6574__auto____1.call(this,state_14326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6574__auto____0;
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6574__auto____1;
return state_machine__6574__auto__;
})()
;})(__14455,switch__6573__auto__,c__6588__auto___14467,G__14286_14456,n__4508__auto___14454,jobs,results,process,async))
})();var state__6590__auto__ = (function (){var statearr_14340 = f__6589__auto__.call(null);(statearr_14340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6588__auto___14467);
return statearr_14340;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6590__auto__);
});})(__14455,c__6588__auto___14467,G__14286_14456,n__4508__auto___14454,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__14476 = (__14455 + (1));
__14455 = G__14476;
continue;
}
} else
{}
break;
}
var c__6588__auto___14477 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6588__auto___14477,jobs,results,process,async){
return (function (){var f__6589__auto__ = (function (){var switch__6573__auto__ = ((function (c__6588__auto___14477,jobs,results,process,async){
return (function (state_14362){var state_val_14363 = (state_14362[(1)]);if((state_val_14363 === (9)))
{var inst_14355 = (state_14362[(2)]);var state_14362__$1 = (function (){var statearr_14364 = state_14362;(statearr_14364[(7)] = inst_14355);
return statearr_14364;
})();var statearr_14365_14478 = state_14362__$1;(statearr_14365_14478[(2)] = null);
(statearr_14365_14478[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14363 === (8)))
{var inst_14348 = (state_14362[(8)]);var inst_14353 = (state_14362[(2)]);var state_14362__$1 = (function (){var statearr_14366 = state_14362;(statearr_14366[(9)] = inst_14353);
return statearr_14366;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14362__$1,(9),results,inst_14348);
} else
{if((state_val_14363 === (7)))
{var inst_14358 = (state_14362[(2)]);var state_14362__$1 = state_14362;var statearr_14367_14479 = state_14362__$1;(statearr_14367_14479[(2)] = inst_14358);
(statearr_14367_14479[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14363 === (6)))
{var inst_14343 = (state_14362[(10)]);var inst_14348 = (state_14362[(8)]);var inst_14348__$1 = cljs.core.async.chan.call(null,(1));var inst_14349 = cljs.core.PersistentVector.EMPTY_NODE;var inst_14350 = [inst_14343,inst_14348__$1];var inst_14351 = (new cljs.core.PersistentVector(null,2,(5),inst_14349,inst_14350,null));var state_14362__$1 = (function (){var statearr_14368 = state_14362;(statearr_14368[(8)] = inst_14348__$1);
return statearr_14368;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14362__$1,(8),jobs,inst_14351);
} else
{if((state_val_14363 === (5)))
{var inst_14346 = cljs.core.async.close_BANG_.call(null,jobs);var state_14362__$1 = state_14362;var statearr_14369_14480 = state_14362__$1;(statearr_14369_14480[(2)] = inst_14346);
(statearr_14369_14480[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14363 === (4)))
{var inst_14343 = (state_14362[(10)]);var inst_14343__$1 = (state_14362[(2)]);var inst_14344 = (inst_14343__$1 == null);var state_14362__$1 = (function (){var statearr_14370 = state_14362;(statearr_14370[(10)] = inst_14343__$1);
return statearr_14370;
})();if(cljs.core.truth_(inst_14344))
{var statearr_14371_14481 = state_14362__$1;(statearr_14371_14481[(1)] = (5));
} else
{var statearr_14372_14482 = state_14362__$1;(statearr_14372_14482[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14363 === (3)))
{var inst_14360 = (state_14362[(2)]);var state_14362__$1 = state_14362;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14362__$1,inst_14360);
} else
{if((state_val_14363 === (2)))
{var state_14362__$1 = state_14362;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14362__$1,(4),from);
} else
{if((state_val_14363 === (1)))
{var state_14362__$1 = state_14362;var statearr_14373_14483 = state_14362__$1;(statearr_14373_14483[(2)] = null);
(statearr_14373_14483[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__6588__auto___14477,jobs,results,process,async))
;return ((function (switch__6573__auto__,c__6588__auto___14477,jobs,results,process,async){
return (function() {
var state_machine__6574__auto__ = null;
var state_machine__6574__auto____0 = (function (){var statearr_14377 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14377[(0)] = state_machine__6574__auto__);
(statearr_14377[(1)] = (1));
return statearr_14377;
});
var state_machine__6574__auto____1 = (function (state_14362){while(true){
var ret_value__6575__auto__ = (function (){try{while(true){
var result__6576__auto__ = switch__6573__auto__.call(null,state_14362);if(cljs.core.keyword_identical_QMARK_.call(null,result__6576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6576__auto__;
}
break;
}
}catch (e14378){if((e14378 instanceof Object))
{var ex__6577__auto__ = e14378;var statearr_14379_14484 = state_14362;(statearr_14379_14484[(5)] = ex__6577__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14362);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14378;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14485 = state_14362;
state_14362 = G__14485;
continue;
}
} else
{return ret_value__6575__auto__;
}
break;
}
});
state_machine__6574__auto__ = function(state_14362){
switch(arguments.length){
case 0:
return state_machine__6574__auto____0.call(this);
case 1:
return state_machine__6574__auto____1.call(this,state_14362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6574__auto____0;
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6574__auto____1;
return state_machine__6574__auto__;
})()
;})(switch__6573__auto__,c__6588__auto___14477,jobs,results,process,async))
})();var state__6590__auto__ = (function (){var statearr_14380 = f__6589__auto__.call(null);(statearr_14380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6588__auto___14477);
return statearr_14380;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6590__auto__);
});})(c__6588__auto___14477,jobs,results,process,async))
);
var c__6588__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6588__auto__,jobs,results,process,async){
return (function (){var f__6589__auto__ = (function (){var switch__6573__auto__ = ((function (c__6588__auto__,jobs,results,process,async){
return (function (state_14418){var state_val_14419 = (state_14418[(1)]);if((state_val_14419 === (7)))
{var inst_14414 = (state_14418[(2)]);var state_14418__$1 = state_14418;var statearr_14420_14486 = state_14418__$1;(statearr_14420_14486[(2)] = inst_14414);
(statearr_14420_14486[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14419 === (20)))
{var state_14418__$1 = state_14418;var statearr_14421_14487 = state_14418__$1;(statearr_14421_14487[(2)] = null);
(statearr_14421_14487[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14419 === (1)))
{var state_14418__$1 = state_14418;var statearr_14422_14488 = state_14418__$1;(statearr_14422_14488[(2)] = null);
(statearr_14422_14488[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14419 === (4)))
{var inst_14383 = (state_14418[(7)]);var inst_14383__$1 = (state_14418[(2)]);var inst_14384 = (inst_14383__$1 == null);var state_14418__$1 = (function (){var statearr_14423 = state_14418;(statearr_14423[(7)] = inst_14383__$1);
return statearr_14423;
})();if(cljs.core.truth_(inst_14384))
{var statearr_14424_14489 = state_14418__$1;(statearr_14424_14489[(1)] = (5));
} else
{var statearr_14425_14490 = state_14418__$1;(statearr_14425_14490[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14419 === (15)))
{var inst_14396 = (state_14418[(8)]);var state_14418__$1 = state_14418;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14418__$1,(18),to,inst_14396);
} else
{if((state_val_14419 === (21)))
{var inst_14409 = (state_14418[(2)]);var state_14418__$1 = state_14418;var statearr_14426_14491 = state_14418__$1;(statearr_14426_14491[(2)] = inst_14409);
(statearr_14426_14491[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14419 === (13)))
{var inst_14411 = (state_14418[(2)]);var state_14418__$1 = (function (){var statearr_14427 = state_14418;(statearr_14427[(9)] = inst_14411);
return statearr_14427;
})();var statearr_14428_14492 = state_14418__$1;(statearr_14428_14492[(2)] = null);
(statearr_14428_14492[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14419 === (6)))
{var inst_14383 = (state_14418[(7)]);var state_14418__$1 = state_14418;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14418__$1,(11),inst_14383);
} else
{if((state_val_14419 === (17)))
{var inst_14404 = (state_14418[(2)]);var state_14418__$1 = state_14418;if(cljs.core.truth_(inst_14404))
{var statearr_14429_14493 = state_14418__$1;(statearr_14429_14493[(1)] = (19));
} else
{var statearr_14430_14494 = state_14418__$1;(statearr_14430_14494[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14419 === (3)))
{var inst_14416 = (state_14418[(2)]);var state_14418__$1 = state_14418;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14418__$1,inst_14416);
} else
{if((state_val_14419 === (12)))
{var inst_14393 = (state_14418[(10)]);var state_14418__$1 = state_14418;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14418__$1,(14),inst_14393);
} else
{if((state_val_14419 === (2)))
{var state_14418__$1 = state_14418;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14418__$1,(4),results);
} else
{if((state_val_14419 === (19)))
{var state_14418__$1 = state_14418;var statearr_14431_14495 = state_14418__$1;(statearr_14431_14495[(2)] = null);
(statearr_14431_14495[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14419 === (11)))
{var inst_14393 = (state_14418[(2)]);var state_14418__$1 = (function (){var statearr_14432 = state_14418;(statearr_14432[(10)] = inst_14393);
return statearr_14432;
})();var statearr_14433_14496 = state_14418__$1;(statearr_14433_14496[(2)] = null);
(statearr_14433_14496[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14419 === (9)))
{var state_14418__$1 = state_14418;var statearr_14434_14497 = state_14418__$1;(statearr_14434_14497[(2)] = null);
(statearr_14434_14497[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14419 === (5)))
{var state_14418__$1 = state_14418;if(cljs.core.truth_(close_QMARK_))
{var statearr_14435_14498 = state_14418__$1;(statearr_14435_14498[(1)] = (8));
} else
{var statearr_14436_14499 = state_14418__$1;(statearr_14436_14499[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14419 === (14)))
{var inst_14398 = (state_14418[(11)]);var inst_14396 = (state_14418[(8)]);var inst_14396__$1 = (state_14418[(2)]);var inst_14397 = (inst_14396__$1 == null);var inst_14398__$1 = cljs.core.not.call(null,inst_14397);var state_14418__$1 = (function (){var statearr_14437 = state_14418;(statearr_14437[(11)] = inst_14398__$1);
(statearr_14437[(8)] = inst_14396__$1);
return statearr_14437;
})();if(inst_14398__$1)
{var statearr_14438_14500 = state_14418__$1;(statearr_14438_14500[(1)] = (15));
} else
{var statearr_14439_14501 = state_14418__$1;(statearr_14439_14501[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14419 === (16)))
{var inst_14398 = (state_14418[(11)]);var state_14418__$1 = state_14418;var statearr_14440_14502 = state_14418__$1;(statearr_14440_14502[(2)] = inst_14398);
(statearr_14440_14502[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14419 === (10)))
{var inst_14390 = (state_14418[(2)]);var state_14418__$1 = state_14418;var statearr_14441_14503 = state_14418__$1;(statearr_14441_14503[(2)] = inst_14390);
(statearr_14441_14503[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14419 === (18)))
{var inst_14401 = (state_14418[(2)]);var state_14418__$1 = state_14418;var statearr_14442_14504 = state_14418__$1;(statearr_14442_14504[(2)] = inst_14401);
(statearr_14442_14504[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14419 === (8)))
{var inst_14387 = cljs.core.async.close_BANG_.call(null,to);var state_14418__$1 = state_14418;var statearr_14443_14505 = state_14418__$1;(statearr_14443_14505[(2)] = inst_14387);
(statearr_14443_14505[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6588__auto__,jobs,results,process,async))
;return ((function (switch__6573__auto__,c__6588__auto__,jobs,results,process,async){
return (function() {
var state_machine__6574__auto__ = null;
var state_machine__6574__auto____0 = (function (){var statearr_14447 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14447[(0)] = state_machine__6574__auto__);
(statearr_14447[(1)] = (1));
return statearr_14447;
});
var state_machine__6574__auto____1 = (function (state_14418){while(true){
var ret_value__6575__auto__ = (function (){try{while(true){
var result__6576__auto__ = switch__6573__auto__.call(null,state_14418);if(cljs.core.keyword_identical_QMARK_.call(null,result__6576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6576__auto__;
}
break;
}
}catch (e14448){if((e14448 instanceof Object))
{var ex__6577__auto__ = e14448;var statearr_14449_14506 = state_14418;(statearr_14449_14506[(5)] = ex__6577__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14418);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14448;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14507 = state_14418;
state_14418 = G__14507;
continue;
}
} else
{return ret_value__6575__auto__;
}
break;
}
});
state_machine__6574__auto__ = function(state_14418){
switch(arguments.length){
case 0:
return state_machine__6574__auto____0.call(this);
case 1:
return state_machine__6574__auto____1.call(this,state_14418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6574__auto____0;
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6574__auto____1;
return state_machine__6574__auto__;
})()
;})(switch__6573__auto__,c__6588__auto__,jobs,results,process,async))
})();var state__6590__auto__ = (function (){var statearr_14450 = f__6589__auto__.call(null);(statearr_14450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6588__auto__);
return statearr_14450;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6590__auto__);
});})(c__6588__auto__,jobs,results,process,async))
);
return c__6588__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6588__auto___14608 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6588__auto___14608,tc,fc){
return (function (){var f__6589__auto__ = (function (){var switch__6573__auto__ = ((function (c__6588__auto___14608,tc,fc){
return (function (state_14583){var state_val_14584 = (state_14583[(1)]);if((state_val_14584 === (7)))
{var inst_14579 = (state_14583[(2)]);var state_14583__$1 = state_14583;var statearr_14585_14609 = state_14583__$1;(statearr_14585_14609[(2)] = inst_14579);
(statearr_14585_14609[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14584 === (1)))
{var state_14583__$1 = state_14583;var statearr_14586_14610 = state_14583__$1;(statearr_14586_14610[(2)] = null);
(statearr_14586_14610[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14584 === (4)))
{var inst_14560 = (state_14583[(7)]);var inst_14560__$1 = (state_14583[(2)]);var inst_14561 = (inst_14560__$1 == null);var state_14583__$1 = (function (){var statearr_14587 = state_14583;(statearr_14587[(7)] = inst_14560__$1);
return statearr_14587;
})();if(cljs.core.truth_(inst_14561))
{var statearr_14588_14611 = state_14583__$1;(statearr_14588_14611[(1)] = (5));
} else
{var statearr_14589_14612 = state_14583__$1;(statearr_14589_14612[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14584 === (13)))
{var state_14583__$1 = state_14583;var statearr_14590_14613 = state_14583__$1;(statearr_14590_14613[(2)] = null);
(statearr_14590_14613[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14584 === (6)))
{var inst_14560 = (state_14583[(7)]);var inst_14566 = p.call(null,inst_14560);var state_14583__$1 = state_14583;if(cljs.core.truth_(inst_14566))
{var statearr_14591_14614 = state_14583__$1;(statearr_14591_14614[(1)] = (9));
} else
{var statearr_14592_14615 = state_14583__$1;(statearr_14592_14615[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14584 === (3)))
{var inst_14581 = (state_14583[(2)]);var state_14583__$1 = state_14583;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14583__$1,inst_14581);
} else
{if((state_val_14584 === (12)))
{var state_14583__$1 = state_14583;var statearr_14593_14616 = state_14583__$1;(statearr_14593_14616[(2)] = null);
(statearr_14593_14616[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14584 === (2)))
{var state_14583__$1 = state_14583;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14583__$1,(4),ch);
} else
{if((state_val_14584 === (11)))
{var inst_14560 = (state_14583[(7)]);var inst_14570 = (state_14583[(2)]);var state_14583__$1 = state_14583;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14583__$1,(8),inst_14570,inst_14560);
} else
{if((state_val_14584 === (9)))
{var state_14583__$1 = state_14583;var statearr_14594_14617 = state_14583__$1;(statearr_14594_14617[(2)] = tc);
(statearr_14594_14617[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14584 === (5)))
{var inst_14563 = cljs.core.async.close_BANG_.call(null,tc);var inst_14564 = cljs.core.async.close_BANG_.call(null,fc);var state_14583__$1 = (function (){var statearr_14595 = state_14583;(statearr_14595[(8)] = inst_14563);
return statearr_14595;
})();var statearr_14596_14618 = state_14583__$1;(statearr_14596_14618[(2)] = inst_14564);
(statearr_14596_14618[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14584 === (14)))
{var inst_14577 = (state_14583[(2)]);var state_14583__$1 = state_14583;var statearr_14597_14619 = state_14583__$1;(statearr_14597_14619[(2)] = inst_14577);
(statearr_14597_14619[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14584 === (10)))
{var state_14583__$1 = state_14583;var statearr_14598_14620 = state_14583__$1;(statearr_14598_14620[(2)] = fc);
(statearr_14598_14620[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14584 === (8)))
{var inst_14572 = (state_14583[(2)]);var state_14583__$1 = state_14583;if(cljs.core.truth_(inst_14572))
{var statearr_14599_14621 = state_14583__$1;(statearr_14599_14621[(1)] = (12));
} else
{var statearr_14600_14622 = state_14583__$1;(statearr_14600_14622[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6588__auto___14608,tc,fc))
;return ((function (switch__6573__auto__,c__6588__auto___14608,tc,fc){
return (function() {
var state_machine__6574__auto__ = null;
var state_machine__6574__auto____0 = (function (){var statearr_14604 = [null,null,null,null,null,null,null,null,null];(statearr_14604[(0)] = state_machine__6574__auto__);
(statearr_14604[(1)] = (1));
return statearr_14604;
});
var state_machine__6574__auto____1 = (function (state_14583){while(true){
var ret_value__6575__auto__ = (function (){try{while(true){
var result__6576__auto__ = switch__6573__auto__.call(null,state_14583);if(cljs.core.keyword_identical_QMARK_.call(null,result__6576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6576__auto__;
}
break;
}
}catch (e14605){if((e14605 instanceof Object))
{var ex__6577__auto__ = e14605;var statearr_14606_14623 = state_14583;(statearr_14606_14623[(5)] = ex__6577__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14583);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14605;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14624 = state_14583;
state_14583 = G__14624;
continue;
}
} else
{return ret_value__6575__auto__;
}
break;
}
});
state_machine__6574__auto__ = function(state_14583){
switch(arguments.length){
case 0:
return state_machine__6574__auto____0.call(this);
case 1:
return state_machine__6574__auto____1.call(this,state_14583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6574__auto____0;
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6574__auto____1;
return state_machine__6574__auto__;
})()
;})(switch__6573__auto__,c__6588__auto___14608,tc,fc))
})();var state__6590__auto__ = (function (){var statearr_14607 = f__6589__auto__.call(null);(statearr_14607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6588__auto___14608);
return statearr_14607;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6590__auto__);
});})(c__6588__auto___14608,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6588__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6588__auto__){
return (function (){var f__6589__auto__ = (function (){var switch__6573__auto__ = ((function (c__6588__auto__){
return (function (state_14671){var state_val_14672 = (state_14671[(1)]);if((state_val_14672 === (7)))
{var inst_14667 = (state_14671[(2)]);var state_14671__$1 = state_14671;var statearr_14673_14689 = state_14671__$1;(statearr_14673_14689[(2)] = inst_14667);
(statearr_14673_14689[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14672 === (6)))
{var inst_14657 = (state_14671[(7)]);var inst_14660 = (state_14671[(8)]);var inst_14664 = f.call(null,inst_14657,inst_14660);var inst_14657__$1 = inst_14664;var state_14671__$1 = (function (){var statearr_14674 = state_14671;(statearr_14674[(7)] = inst_14657__$1);
return statearr_14674;
})();var statearr_14675_14690 = state_14671__$1;(statearr_14675_14690[(2)] = null);
(statearr_14675_14690[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14672 === (5)))
{var inst_14657 = (state_14671[(7)]);var state_14671__$1 = state_14671;var statearr_14676_14691 = state_14671__$1;(statearr_14676_14691[(2)] = inst_14657);
(statearr_14676_14691[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14672 === (4)))
{var inst_14660 = (state_14671[(8)]);var inst_14660__$1 = (state_14671[(2)]);var inst_14661 = (inst_14660__$1 == null);var state_14671__$1 = (function (){var statearr_14677 = state_14671;(statearr_14677[(8)] = inst_14660__$1);
return statearr_14677;
})();if(cljs.core.truth_(inst_14661))
{var statearr_14678_14692 = state_14671__$1;(statearr_14678_14692[(1)] = (5));
} else
{var statearr_14679_14693 = state_14671__$1;(statearr_14679_14693[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14672 === (3)))
{var inst_14669 = (state_14671[(2)]);var state_14671__$1 = state_14671;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14671__$1,inst_14669);
} else
{if((state_val_14672 === (2)))
{var state_14671__$1 = state_14671;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14671__$1,(4),ch);
} else
{if((state_val_14672 === (1)))
{var inst_14657 = init;var state_14671__$1 = (function (){var statearr_14680 = state_14671;(statearr_14680[(7)] = inst_14657);
return statearr_14680;
})();var statearr_14681_14694 = state_14671__$1;(statearr_14681_14694[(2)] = null);
(statearr_14681_14694[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6588__auto__))
;return ((function (switch__6573__auto__,c__6588__auto__){
return (function() {
var state_machine__6574__auto__ = null;
var state_machine__6574__auto____0 = (function (){var statearr_14685 = [null,null,null,null,null,null,null,null,null];(statearr_14685[(0)] = state_machine__6574__auto__);
(statearr_14685[(1)] = (1));
return statearr_14685;
});
var state_machine__6574__auto____1 = (function (state_14671){while(true){
var ret_value__6575__auto__ = (function (){try{while(true){
var result__6576__auto__ = switch__6573__auto__.call(null,state_14671);if(cljs.core.keyword_identical_QMARK_.call(null,result__6576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6576__auto__;
}
break;
}
}catch (e14686){if((e14686 instanceof Object))
{var ex__6577__auto__ = e14686;var statearr_14687_14695 = state_14671;(statearr_14687_14695[(5)] = ex__6577__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14671);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14686;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14696 = state_14671;
state_14671 = G__14696;
continue;
}
} else
{return ret_value__6575__auto__;
}
break;
}
});
state_machine__6574__auto__ = function(state_14671){
switch(arguments.length){
case 0:
return state_machine__6574__auto____0.call(this);
case 1:
return state_machine__6574__auto____1.call(this,state_14671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6574__auto____0;
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6574__auto____1;
return state_machine__6574__auto__;
})()
;})(switch__6573__auto__,c__6588__auto__))
})();var state__6590__auto__ = (function (){var statearr_14688 = f__6589__auto__.call(null);(statearr_14688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6588__auto__);
return statearr_14688;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6590__auto__);
});})(c__6588__auto__))
);
return c__6588__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6588__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6588__auto__){
return (function (){var f__6589__auto__ = (function (){var switch__6573__auto__ = ((function (c__6588__auto__){
return (function (state_14770){var state_val_14771 = (state_14770[(1)]);if((state_val_14771 === (7)))
{var inst_14752 = (state_14770[(2)]);var state_14770__$1 = state_14770;var statearr_14772_14795 = state_14770__$1;(statearr_14772_14795[(2)] = inst_14752);
(statearr_14772_14795[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14771 === (1)))
{var inst_14746 = cljs.core.seq.call(null,coll);var inst_14747 = inst_14746;var state_14770__$1 = (function (){var statearr_14773 = state_14770;(statearr_14773[(7)] = inst_14747);
return statearr_14773;
})();var statearr_14774_14796 = state_14770__$1;(statearr_14774_14796[(2)] = null);
(statearr_14774_14796[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14771 === (4)))
{var inst_14747 = (state_14770[(7)]);var inst_14750 = cljs.core.first.call(null,inst_14747);var state_14770__$1 = state_14770;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14770__$1,(7),ch,inst_14750);
} else
{if((state_val_14771 === (13)))
{var inst_14764 = (state_14770[(2)]);var state_14770__$1 = state_14770;var statearr_14775_14797 = state_14770__$1;(statearr_14775_14797[(2)] = inst_14764);
(statearr_14775_14797[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14771 === (6)))
{var inst_14755 = (state_14770[(2)]);var state_14770__$1 = state_14770;if(cljs.core.truth_(inst_14755))
{var statearr_14776_14798 = state_14770__$1;(statearr_14776_14798[(1)] = (8));
} else
{var statearr_14777_14799 = state_14770__$1;(statearr_14777_14799[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14771 === (3)))
{var inst_14768 = (state_14770[(2)]);var state_14770__$1 = state_14770;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14770__$1,inst_14768);
} else
{if((state_val_14771 === (12)))
{var state_14770__$1 = state_14770;var statearr_14778_14800 = state_14770__$1;(statearr_14778_14800[(2)] = null);
(statearr_14778_14800[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14771 === (2)))
{var inst_14747 = (state_14770[(7)]);var state_14770__$1 = state_14770;if(cljs.core.truth_(inst_14747))
{var statearr_14779_14801 = state_14770__$1;(statearr_14779_14801[(1)] = (4));
} else
{var statearr_14780_14802 = state_14770__$1;(statearr_14780_14802[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14771 === (11)))
{var inst_14761 = cljs.core.async.close_BANG_.call(null,ch);var state_14770__$1 = state_14770;var statearr_14781_14803 = state_14770__$1;(statearr_14781_14803[(2)] = inst_14761);
(statearr_14781_14803[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14771 === (9)))
{var state_14770__$1 = state_14770;if(cljs.core.truth_(close_QMARK_))
{var statearr_14782_14804 = state_14770__$1;(statearr_14782_14804[(1)] = (11));
} else
{var statearr_14783_14805 = state_14770__$1;(statearr_14783_14805[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14771 === (5)))
{var inst_14747 = (state_14770[(7)]);var state_14770__$1 = state_14770;var statearr_14784_14806 = state_14770__$1;(statearr_14784_14806[(2)] = inst_14747);
(statearr_14784_14806[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14771 === (10)))
{var inst_14766 = (state_14770[(2)]);var state_14770__$1 = state_14770;var statearr_14785_14807 = state_14770__$1;(statearr_14785_14807[(2)] = inst_14766);
(statearr_14785_14807[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14771 === (8)))
{var inst_14747 = (state_14770[(7)]);var inst_14757 = cljs.core.next.call(null,inst_14747);var inst_14747__$1 = inst_14757;var state_14770__$1 = (function (){var statearr_14786 = state_14770;(statearr_14786[(7)] = inst_14747__$1);
return statearr_14786;
})();var statearr_14787_14808 = state_14770__$1;(statearr_14787_14808[(2)] = null);
(statearr_14787_14808[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6588__auto__))
;return ((function (switch__6573__auto__,c__6588__auto__){
return (function() {
var state_machine__6574__auto__ = null;
var state_machine__6574__auto____0 = (function (){var statearr_14791 = [null,null,null,null,null,null,null,null];(statearr_14791[(0)] = state_machine__6574__auto__);
(statearr_14791[(1)] = (1));
return statearr_14791;
});
var state_machine__6574__auto____1 = (function (state_14770){while(true){
var ret_value__6575__auto__ = (function (){try{while(true){
var result__6576__auto__ = switch__6573__auto__.call(null,state_14770);if(cljs.core.keyword_identical_QMARK_.call(null,result__6576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6576__auto__;
}
break;
}
}catch (e14792){if((e14792 instanceof Object))
{var ex__6577__auto__ = e14792;var statearr_14793_14809 = state_14770;(statearr_14793_14809[(5)] = ex__6577__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14770);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14792;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14810 = state_14770;
state_14770 = G__14810;
continue;
}
} else
{return ret_value__6575__auto__;
}
break;
}
});
state_machine__6574__auto__ = function(state_14770){
switch(arguments.length){
case 0:
return state_machine__6574__auto____0.call(this);
case 1:
return state_machine__6574__auto____1.call(this,state_14770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6574__auto____0;
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6574__auto____1;
return state_machine__6574__auto__;
})()
;})(switch__6573__auto__,c__6588__auto__))
})();var state__6590__auto__ = (function (){var statearr_14794 = f__6589__auto__.call(null);(statearr_14794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6588__auto__);
return statearr_14794;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6590__auto__);
});})(c__6588__auto__))
);
return c__6588__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj14812 = {};return obj14812;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3626__auto__ = _;if(and__3626__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3626__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4275__auto__ = (((_ == null))?null:_);return (function (){var or__3638__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj14814 = {};return obj14814;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3626__auto__ = m;if(and__3626__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3626__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3638__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3626__auto__ = m;if(and__3626__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3626__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3638__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3626__auto__ = m;if(and__3626__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3626__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3638__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t15036 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15036 = (function (cs,ch,mult,meta15037){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta15037 = meta15037;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15036.cljs$lang$type = true;
cljs.core.async.t15036.cljs$lang$ctorStr = "cljs.core.async/t15036";
cljs.core.async.t15036.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t15036");
});})(cs))
;
cljs.core.async.t15036.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t15036.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t15036.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t15036.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t15036.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15036.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t15036.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15038){var self__ = this;
var _15038__$1 = this;return self__.meta15037;
});})(cs))
;
cljs.core.async.t15036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15038,meta15037__$1){var self__ = this;
var _15038__$1 = this;return (new cljs.core.async.t15036(self__.cs,self__.ch,self__.mult,meta15037__$1));
});})(cs))
;
cljs.core.async.__GT_t15036 = ((function (cs){
return (function __GT_t15036(cs__$1,ch__$1,mult__$1,meta15037){return (new cljs.core.async.t15036(cs__$1,ch__$1,mult__$1,meta15037));
});})(cs))
;
}
return (new cljs.core.async.t15036(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6588__auto___15257 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6588__auto___15257,cs,m,dchan,dctr,done){
return (function (){var f__6589__auto__ = (function (){var switch__6573__auto__ = ((function (c__6588__auto___15257,cs,m,dchan,dctr,done){
return (function (state_15169){var state_val_15170 = (state_15169[(1)]);if((state_val_15170 === (7)))
{var inst_15165 = (state_15169[(2)]);var state_15169__$1 = state_15169;var statearr_15171_15258 = state_15169__$1;(statearr_15171_15258[(2)] = inst_15165);
(statearr_15171_15258[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (20)))
{var inst_15070 = (state_15169[(7)]);var inst_15080 = cljs.core.first.call(null,inst_15070);var inst_15081 = cljs.core.nth.call(null,inst_15080,(0),null);var inst_15082 = cljs.core.nth.call(null,inst_15080,(1),null);var state_15169__$1 = (function (){var statearr_15172 = state_15169;(statearr_15172[(8)] = inst_15081);
return statearr_15172;
})();if(cljs.core.truth_(inst_15082))
{var statearr_15173_15259 = state_15169__$1;(statearr_15173_15259[(1)] = (22));
} else
{var statearr_15174_15260 = state_15169__$1;(statearr_15174_15260[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (27)))
{var inst_15110 = (state_15169[(9)]);var inst_15112 = (state_15169[(10)]);var inst_15117 = (state_15169[(11)]);var inst_15041 = (state_15169[(12)]);var inst_15117__$1 = cljs.core._nth.call(null,inst_15110,inst_15112);var inst_15118 = cljs.core.async.put_BANG_.call(null,inst_15117__$1,inst_15041,done);var state_15169__$1 = (function (){var statearr_15175 = state_15169;(statearr_15175[(11)] = inst_15117__$1);
return statearr_15175;
})();if(cljs.core.truth_(inst_15118))
{var statearr_15176_15261 = state_15169__$1;(statearr_15176_15261[(1)] = (30));
} else
{var statearr_15177_15262 = state_15169__$1;(statearr_15177_15262[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (1)))
{var state_15169__$1 = state_15169;var statearr_15178_15263 = state_15169__$1;(statearr_15178_15263[(2)] = null);
(statearr_15178_15263[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (24)))
{var inst_15070 = (state_15169[(7)]);var inst_15087 = (state_15169[(2)]);var inst_15088 = cljs.core.next.call(null,inst_15070);var inst_15050 = inst_15088;var inst_15051 = null;var inst_15052 = (0);var inst_15053 = (0);var state_15169__$1 = (function (){var statearr_15179 = state_15169;(statearr_15179[(13)] = inst_15087);
(statearr_15179[(14)] = inst_15053);
(statearr_15179[(15)] = inst_15052);
(statearr_15179[(16)] = inst_15051);
(statearr_15179[(17)] = inst_15050);
return statearr_15179;
})();var statearr_15180_15264 = state_15169__$1;(statearr_15180_15264[(2)] = null);
(statearr_15180_15264[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (39)))
{var state_15169__$1 = state_15169;var statearr_15184_15265 = state_15169__$1;(statearr_15184_15265[(2)] = null);
(statearr_15184_15265[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (4)))
{var inst_15041 = (state_15169[(12)]);var inst_15041__$1 = (state_15169[(2)]);var inst_15042 = (inst_15041__$1 == null);var state_15169__$1 = (function (){var statearr_15185 = state_15169;(statearr_15185[(12)] = inst_15041__$1);
return statearr_15185;
})();if(cljs.core.truth_(inst_15042))
{var statearr_15186_15266 = state_15169__$1;(statearr_15186_15266[(1)] = (5));
} else
{var statearr_15187_15267 = state_15169__$1;(statearr_15187_15267[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (15)))
{var inst_15053 = (state_15169[(14)]);var inst_15052 = (state_15169[(15)]);var inst_15051 = (state_15169[(16)]);var inst_15050 = (state_15169[(17)]);var inst_15066 = (state_15169[(2)]);var inst_15067 = (inst_15053 + (1));var tmp15181 = inst_15052;var tmp15182 = inst_15051;var tmp15183 = inst_15050;var inst_15050__$1 = tmp15183;var inst_15051__$1 = tmp15182;var inst_15052__$1 = tmp15181;var inst_15053__$1 = inst_15067;var state_15169__$1 = (function (){var statearr_15188 = state_15169;(statearr_15188[(14)] = inst_15053__$1);
(statearr_15188[(15)] = inst_15052__$1);
(statearr_15188[(16)] = inst_15051__$1);
(statearr_15188[(18)] = inst_15066);
(statearr_15188[(17)] = inst_15050__$1);
return statearr_15188;
})();var statearr_15189_15268 = state_15169__$1;(statearr_15189_15268[(2)] = null);
(statearr_15189_15268[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (21)))
{var inst_15091 = (state_15169[(2)]);var state_15169__$1 = state_15169;var statearr_15193_15269 = state_15169__$1;(statearr_15193_15269[(2)] = inst_15091);
(statearr_15193_15269[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (31)))
{var inst_15117 = (state_15169[(11)]);var inst_15121 = done.call(null,null);var inst_15122 = cljs.core.async.untap_STAR_.call(null,m,inst_15117);var state_15169__$1 = (function (){var statearr_15194 = state_15169;(statearr_15194[(19)] = inst_15121);
return statearr_15194;
})();var statearr_15195_15270 = state_15169__$1;(statearr_15195_15270[(2)] = inst_15122);
(statearr_15195_15270[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (32)))
{var inst_15110 = (state_15169[(9)]);var inst_15111 = (state_15169[(20)]);var inst_15112 = (state_15169[(10)]);var inst_15109 = (state_15169[(21)]);var inst_15124 = (state_15169[(2)]);var inst_15125 = (inst_15112 + (1));var tmp15190 = inst_15110;var tmp15191 = inst_15111;var tmp15192 = inst_15109;var inst_15109__$1 = tmp15192;var inst_15110__$1 = tmp15190;var inst_15111__$1 = tmp15191;var inst_15112__$1 = inst_15125;var state_15169__$1 = (function (){var statearr_15196 = state_15169;(statearr_15196[(9)] = inst_15110__$1);
(statearr_15196[(20)] = inst_15111__$1);
(statearr_15196[(10)] = inst_15112__$1);
(statearr_15196[(22)] = inst_15124);
(statearr_15196[(21)] = inst_15109__$1);
return statearr_15196;
})();var statearr_15197_15271 = state_15169__$1;(statearr_15197_15271[(2)] = null);
(statearr_15197_15271[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (40)))
{var inst_15137 = (state_15169[(23)]);var inst_15141 = done.call(null,null);var inst_15142 = cljs.core.async.untap_STAR_.call(null,m,inst_15137);var state_15169__$1 = (function (){var statearr_15198 = state_15169;(statearr_15198[(24)] = inst_15141);
return statearr_15198;
})();var statearr_15199_15272 = state_15169__$1;(statearr_15199_15272[(2)] = inst_15142);
(statearr_15199_15272[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (33)))
{var inst_15128 = (state_15169[(25)]);var inst_15130 = cljs.core.chunked_seq_QMARK_.call(null,inst_15128);var state_15169__$1 = state_15169;if(inst_15130)
{var statearr_15200_15273 = state_15169__$1;(statearr_15200_15273[(1)] = (36));
} else
{var statearr_15201_15274 = state_15169__$1;(statearr_15201_15274[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (13)))
{var inst_15060 = (state_15169[(26)]);var inst_15063 = cljs.core.async.close_BANG_.call(null,inst_15060);var state_15169__$1 = state_15169;var statearr_15202_15275 = state_15169__$1;(statearr_15202_15275[(2)] = inst_15063);
(statearr_15202_15275[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (22)))
{var inst_15081 = (state_15169[(8)]);var inst_15084 = cljs.core.async.close_BANG_.call(null,inst_15081);var state_15169__$1 = state_15169;var statearr_15203_15276 = state_15169__$1;(statearr_15203_15276[(2)] = inst_15084);
(statearr_15203_15276[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (36)))
{var inst_15128 = (state_15169[(25)]);var inst_15132 = cljs.core.chunk_first.call(null,inst_15128);var inst_15133 = cljs.core.chunk_rest.call(null,inst_15128);var inst_15134 = cljs.core.count.call(null,inst_15132);var inst_15109 = inst_15133;var inst_15110 = inst_15132;var inst_15111 = inst_15134;var inst_15112 = (0);var state_15169__$1 = (function (){var statearr_15204 = state_15169;(statearr_15204[(9)] = inst_15110);
(statearr_15204[(20)] = inst_15111);
(statearr_15204[(10)] = inst_15112);
(statearr_15204[(21)] = inst_15109);
return statearr_15204;
})();var statearr_15205_15277 = state_15169__$1;(statearr_15205_15277[(2)] = null);
(statearr_15205_15277[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (41)))
{var inst_15128 = (state_15169[(25)]);var inst_15144 = (state_15169[(2)]);var inst_15145 = cljs.core.next.call(null,inst_15128);var inst_15109 = inst_15145;var inst_15110 = null;var inst_15111 = (0);var inst_15112 = (0);var state_15169__$1 = (function (){var statearr_15206 = state_15169;(statearr_15206[(9)] = inst_15110);
(statearr_15206[(20)] = inst_15111);
(statearr_15206[(10)] = inst_15112);
(statearr_15206[(27)] = inst_15144);
(statearr_15206[(21)] = inst_15109);
return statearr_15206;
})();var statearr_15207_15278 = state_15169__$1;(statearr_15207_15278[(2)] = null);
(statearr_15207_15278[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (43)))
{var state_15169__$1 = state_15169;var statearr_15208_15279 = state_15169__$1;(statearr_15208_15279[(2)] = null);
(statearr_15208_15279[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (29)))
{var inst_15153 = (state_15169[(2)]);var state_15169__$1 = state_15169;var statearr_15209_15280 = state_15169__$1;(statearr_15209_15280[(2)] = inst_15153);
(statearr_15209_15280[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (44)))
{var inst_15162 = (state_15169[(2)]);var state_15169__$1 = (function (){var statearr_15210 = state_15169;(statearr_15210[(28)] = inst_15162);
return statearr_15210;
})();var statearr_15211_15281 = state_15169__$1;(statearr_15211_15281[(2)] = null);
(statearr_15211_15281[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (6)))
{var inst_15101 = (state_15169[(29)]);var inst_15100 = cljs.core.deref.call(null,cs);var inst_15101__$1 = cljs.core.keys.call(null,inst_15100);var inst_15102 = cljs.core.count.call(null,inst_15101__$1);var inst_15103 = cljs.core.reset_BANG_.call(null,dctr,inst_15102);var inst_15108 = cljs.core.seq.call(null,inst_15101__$1);var inst_15109 = inst_15108;var inst_15110 = null;var inst_15111 = (0);var inst_15112 = (0);var state_15169__$1 = (function (){var statearr_15212 = state_15169;(statearr_15212[(30)] = inst_15103);
(statearr_15212[(9)] = inst_15110);
(statearr_15212[(20)] = inst_15111);
(statearr_15212[(10)] = inst_15112);
(statearr_15212[(29)] = inst_15101__$1);
(statearr_15212[(21)] = inst_15109);
return statearr_15212;
})();var statearr_15213_15282 = state_15169__$1;(statearr_15213_15282[(2)] = null);
(statearr_15213_15282[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (28)))
{var inst_15128 = (state_15169[(25)]);var inst_15109 = (state_15169[(21)]);var inst_15128__$1 = cljs.core.seq.call(null,inst_15109);var state_15169__$1 = (function (){var statearr_15214 = state_15169;(statearr_15214[(25)] = inst_15128__$1);
return statearr_15214;
})();if(inst_15128__$1)
{var statearr_15215_15283 = state_15169__$1;(statearr_15215_15283[(1)] = (33));
} else
{var statearr_15216_15284 = state_15169__$1;(statearr_15216_15284[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (25)))
{var inst_15111 = (state_15169[(20)]);var inst_15112 = (state_15169[(10)]);var inst_15114 = (inst_15112 < inst_15111);var inst_15115 = inst_15114;var state_15169__$1 = state_15169;if(cljs.core.truth_(inst_15115))
{var statearr_15217_15285 = state_15169__$1;(statearr_15217_15285[(1)] = (27));
} else
{var statearr_15218_15286 = state_15169__$1;(statearr_15218_15286[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (34)))
{var state_15169__$1 = state_15169;var statearr_15219_15287 = state_15169__$1;(statearr_15219_15287[(2)] = null);
(statearr_15219_15287[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (17)))
{var state_15169__$1 = state_15169;var statearr_15220_15288 = state_15169__$1;(statearr_15220_15288[(2)] = null);
(statearr_15220_15288[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (3)))
{var inst_15167 = (state_15169[(2)]);var state_15169__$1 = state_15169;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15169__$1,inst_15167);
} else
{if((state_val_15170 === (12)))
{var inst_15096 = (state_15169[(2)]);var state_15169__$1 = state_15169;var statearr_15221_15289 = state_15169__$1;(statearr_15221_15289[(2)] = inst_15096);
(statearr_15221_15289[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (2)))
{var state_15169__$1 = state_15169;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15169__$1,(4),ch);
} else
{if((state_val_15170 === (23)))
{var state_15169__$1 = state_15169;var statearr_15222_15290 = state_15169__$1;(statearr_15222_15290[(2)] = null);
(statearr_15222_15290[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (35)))
{var inst_15151 = (state_15169[(2)]);var state_15169__$1 = state_15169;var statearr_15223_15291 = state_15169__$1;(statearr_15223_15291[(2)] = inst_15151);
(statearr_15223_15291[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (19)))
{var inst_15070 = (state_15169[(7)]);var inst_15074 = cljs.core.chunk_first.call(null,inst_15070);var inst_15075 = cljs.core.chunk_rest.call(null,inst_15070);var inst_15076 = cljs.core.count.call(null,inst_15074);var inst_15050 = inst_15075;var inst_15051 = inst_15074;var inst_15052 = inst_15076;var inst_15053 = (0);var state_15169__$1 = (function (){var statearr_15224 = state_15169;(statearr_15224[(14)] = inst_15053);
(statearr_15224[(15)] = inst_15052);
(statearr_15224[(16)] = inst_15051);
(statearr_15224[(17)] = inst_15050);
return statearr_15224;
})();var statearr_15225_15292 = state_15169__$1;(statearr_15225_15292[(2)] = null);
(statearr_15225_15292[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (11)))
{var inst_15050 = (state_15169[(17)]);var inst_15070 = (state_15169[(7)]);var inst_15070__$1 = cljs.core.seq.call(null,inst_15050);var state_15169__$1 = (function (){var statearr_15226 = state_15169;(statearr_15226[(7)] = inst_15070__$1);
return statearr_15226;
})();if(inst_15070__$1)
{var statearr_15227_15293 = state_15169__$1;(statearr_15227_15293[(1)] = (16));
} else
{var statearr_15228_15294 = state_15169__$1;(statearr_15228_15294[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (9)))
{var inst_15098 = (state_15169[(2)]);var state_15169__$1 = state_15169;var statearr_15229_15295 = state_15169__$1;(statearr_15229_15295[(2)] = inst_15098);
(statearr_15229_15295[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (5)))
{var inst_15048 = cljs.core.deref.call(null,cs);var inst_15049 = cljs.core.seq.call(null,inst_15048);var inst_15050 = inst_15049;var inst_15051 = null;var inst_15052 = (0);var inst_15053 = (0);var state_15169__$1 = (function (){var statearr_15230 = state_15169;(statearr_15230[(14)] = inst_15053);
(statearr_15230[(15)] = inst_15052);
(statearr_15230[(16)] = inst_15051);
(statearr_15230[(17)] = inst_15050);
return statearr_15230;
})();var statearr_15231_15296 = state_15169__$1;(statearr_15231_15296[(2)] = null);
(statearr_15231_15296[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (14)))
{var state_15169__$1 = state_15169;var statearr_15232_15297 = state_15169__$1;(statearr_15232_15297[(2)] = null);
(statearr_15232_15297[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (45)))
{var inst_15159 = (state_15169[(2)]);var state_15169__$1 = state_15169;var statearr_15233_15298 = state_15169__$1;(statearr_15233_15298[(2)] = inst_15159);
(statearr_15233_15298[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (26)))
{var inst_15101 = (state_15169[(29)]);var inst_15155 = (state_15169[(2)]);var inst_15156 = cljs.core.seq.call(null,inst_15101);var state_15169__$1 = (function (){var statearr_15234 = state_15169;(statearr_15234[(31)] = inst_15155);
return statearr_15234;
})();if(inst_15156)
{var statearr_15235_15299 = state_15169__$1;(statearr_15235_15299[(1)] = (42));
} else
{var statearr_15236_15300 = state_15169__$1;(statearr_15236_15300[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (16)))
{var inst_15070 = (state_15169[(7)]);var inst_15072 = cljs.core.chunked_seq_QMARK_.call(null,inst_15070);var state_15169__$1 = state_15169;if(inst_15072)
{var statearr_15237_15301 = state_15169__$1;(statearr_15237_15301[(1)] = (19));
} else
{var statearr_15238_15302 = state_15169__$1;(statearr_15238_15302[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (38)))
{var inst_15148 = (state_15169[(2)]);var state_15169__$1 = state_15169;var statearr_15239_15303 = state_15169__$1;(statearr_15239_15303[(2)] = inst_15148);
(statearr_15239_15303[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (30)))
{var state_15169__$1 = state_15169;var statearr_15240_15304 = state_15169__$1;(statearr_15240_15304[(2)] = null);
(statearr_15240_15304[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (10)))
{var inst_15053 = (state_15169[(14)]);var inst_15051 = (state_15169[(16)]);var inst_15059 = cljs.core._nth.call(null,inst_15051,inst_15053);var inst_15060 = cljs.core.nth.call(null,inst_15059,(0),null);var inst_15061 = cljs.core.nth.call(null,inst_15059,(1),null);var state_15169__$1 = (function (){var statearr_15241 = state_15169;(statearr_15241[(26)] = inst_15060);
return statearr_15241;
})();if(cljs.core.truth_(inst_15061))
{var statearr_15242_15305 = state_15169__$1;(statearr_15242_15305[(1)] = (13));
} else
{var statearr_15243_15306 = state_15169__$1;(statearr_15243_15306[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (18)))
{var inst_15094 = (state_15169[(2)]);var state_15169__$1 = state_15169;var statearr_15244_15307 = state_15169__$1;(statearr_15244_15307[(2)] = inst_15094);
(statearr_15244_15307[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (42)))
{var state_15169__$1 = state_15169;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15169__$1,(45),dchan);
} else
{if((state_val_15170 === (37)))
{var inst_15137 = (state_15169[(23)]);var inst_15128 = (state_15169[(25)]);var inst_15041 = (state_15169[(12)]);var inst_15137__$1 = cljs.core.first.call(null,inst_15128);var inst_15138 = cljs.core.async.put_BANG_.call(null,inst_15137__$1,inst_15041,done);var state_15169__$1 = (function (){var statearr_15245 = state_15169;(statearr_15245[(23)] = inst_15137__$1);
return statearr_15245;
})();if(cljs.core.truth_(inst_15138))
{var statearr_15246_15308 = state_15169__$1;(statearr_15246_15308[(1)] = (39));
} else
{var statearr_15247_15309 = state_15169__$1;(statearr_15247_15309[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15170 === (8)))
{var inst_15053 = (state_15169[(14)]);var inst_15052 = (state_15169[(15)]);var inst_15055 = (inst_15053 < inst_15052);var inst_15056 = inst_15055;var state_15169__$1 = state_15169;if(cljs.core.truth_(inst_15056))
{var statearr_15248_15310 = state_15169__$1;(statearr_15248_15310[(1)] = (10));
} else
{var statearr_15249_15311 = state_15169__$1;(statearr_15249_15311[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6588__auto___15257,cs,m,dchan,dctr,done))
;return ((function (switch__6573__auto__,c__6588__auto___15257,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6574__auto__ = null;
var state_machine__6574__auto____0 = (function (){var statearr_15253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15253[(0)] = state_machine__6574__auto__);
(statearr_15253[(1)] = (1));
return statearr_15253;
});
var state_machine__6574__auto____1 = (function (state_15169){while(true){
var ret_value__6575__auto__ = (function (){try{while(true){
var result__6576__auto__ = switch__6573__auto__.call(null,state_15169);if(cljs.core.keyword_identical_QMARK_.call(null,result__6576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6576__auto__;
}
break;
}
}catch (e15254){if((e15254 instanceof Object))
{var ex__6577__auto__ = e15254;var statearr_15255_15312 = state_15169;(statearr_15255_15312[(5)] = ex__6577__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15169);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15254;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15313 = state_15169;
state_15169 = G__15313;
continue;
}
} else
{return ret_value__6575__auto__;
}
break;
}
});
state_machine__6574__auto__ = function(state_15169){
switch(arguments.length){
case 0:
return state_machine__6574__auto____0.call(this);
case 1:
return state_machine__6574__auto____1.call(this,state_15169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6574__auto____0;
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6574__auto____1;
return state_machine__6574__auto__;
})()
;})(switch__6573__auto__,c__6588__auto___15257,cs,m,dchan,dctr,done))
})();var state__6590__auto__ = (function (){var statearr_15256 = f__6589__auto__.call(null);(statearr_15256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6588__auto___15257);
return statearr_15256;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6590__auto__);
});})(c__6588__auto___15257,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj15315 = {};return obj15315;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3626__auto__ = m;if(and__3626__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3626__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3638__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3626__auto__ = m;if(and__3626__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3626__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3638__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3626__auto__ = m;if(and__3626__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3626__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3638__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3626__auto__ = m;if(and__3626__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3626__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3638__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3626__auto__ = m;if(and__3626__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3626__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3638__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__15316){var map__15321 = p__15316;var map__15321__$1 = ((cljs.core.seq_QMARK_.call(null,map__15321))?cljs.core.apply.call(null,cljs.core.hash_map,map__15321):map__15321);var opts = map__15321__$1;var statearr_15322_15325 = state;(statearr_15322_15325[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__15321,map__15321__$1,opts){
return (function (val){var statearr_15323_15326 = state;(statearr_15323_15326[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__15321,map__15321__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_15324_15327 = state;(statearr_15324_15327[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__15316 = null;if (arguments.length > 3) {
  p__15316 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__15316);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__15328){
var state = cljs.core.first(arglist__15328);
arglist__15328 = cljs.core.next(arglist__15328);
var cont_block = cljs.core.first(arglist__15328);
arglist__15328 = cljs.core.next(arglist__15328);
var ports = cljs.core.first(arglist__15328);
var p__15316 = cljs.core.rest(arglist__15328);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__15316);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t15448 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15448 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15449){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15449 = meta15449;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15448.cljs$lang$type = true;
cljs.core.async.t15448.cljs$lang$ctorStr = "cljs.core.async/t15448";
cljs.core.async.t15448.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t15448");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15448.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15448.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15448.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15448.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15448.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15448.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15448.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15448.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15448.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15450){var self__ = this;
var _15450__$1 = this;return self__.meta15449;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15450,meta15449__$1){var self__ = this;
var _15450__$1 = this;return (new cljs.core.async.t15448(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15449__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15448 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15448(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15449){return (new cljs.core.async.t15448(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15449));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15448(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6588__auto___15567 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6588__auto___15567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6589__auto__ = (function (){var switch__6573__auto__ = ((function (c__6588__auto___15567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15520){var state_val_15521 = (state_15520[(1)]);if((state_val_15521 === (7)))
{var inst_15464 = (state_15520[(7)]);var inst_15469 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15464);var state_15520__$1 = state_15520;var statearr_15522_15568 = state_15520__$1;(statearr_15522_15568[(2)] = inst_15469);
(statearr_15522_15568[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15521 === (20)))
{var inst_15479 = (state_15520[(8)]);var state_15520__$1 = state_15520;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15520__$1,(23),out,inst_15479);
} else
{if((state_val_15521 === (1)))
{var inst_15454 = (state_15520[(9)]);var inst_15454__$1 = calc_state.call(null);var inst_15455 = cljs.core.seq_QMARK_.call(null,inst_15454__$1);var state_15520__$1 = (function (){var statearr_15523 = state_15520;(statearr_15523[(9)] = inst_15454__$1);
return statearr_15523;
})();if(inst_15455)
{var statearr_15524_15569 = state_15520__$1;(statearr_15524_15569[(1)] = (2));
} else
{var statearr_15525_15570 = state_15520__$1;(statearr_15525_15570[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15521 === (24)))
{var inst_15472 = (state_15520[(10)]);var inst_15464 = inst_15472;var state_15520__$1 = (function (){var statearr_15526 = state_15520;(statearr_15526[(7)] = inst_15464);
return statearr_15526;
})();var statearr_15527_15571 = state_15520__$1;(statearr_15527_15571[(2)] = null);
(statearr_15527_15571[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15521 === (4)))
{var inst_15454 = (state_15520[(9)]);var inst_15460 = (state_15520[(2)]);var inst_15461 = cljs.core.get.call(null,inst_15460,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_15462 = cljs.core.get.call(null,inst_15460,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_15463 = cljs.core.get.call(null,inst_15460,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_15464 = inst_15454;var state_15520__$1 = (function (){var statearr_15528 = state_15520;(statearr_15528[(11)] = inst_15461);
(statearr_15528[(7)] = inst_15464);
(statearr_15528[(12)] = inst_15462);
(statearr_15528[(13)] = inst_15463);
return statearr_15528;
})();var statearr_15529_15572 = state_15520__$1;(statearr_15529_15572[(2)] = null);
(statearr_15529_15572[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15521 === (15)))
{var state_15520__$1 = state_15520;var statearr_15530_15573 = state_15520__$1;(statearr_15530_15573[(2)] = null);
(statearr_15530_15573[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15521 === (21)))
{var inst_15472 = (state_15520[(10)]);var inst_15464 = inst_15472;var state_15520__$1 = (function (){var statearr_15531 = state_15520;(statearr_15531[(7)] = inst_15464);
return statearr_15531;
})();var statearr_15532_15574 = state_15520__$1;(statearr_15532_15574[(2)] = null);
(statearr_15532_15574[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15521 === (13)))
{var inst_15516 = (state_15520[(2)]);var state_15520__$1 = state_15520;var statearr_15533_15575 = state_15520__$1;(statearr_15533_15575[(2)] = inst_15516);
(statearr_15533_15575[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15521 === (22)))
{var inst_15514 = (state_15520[(2)]);var state_15520__$1 = state_15520;var statearr_15534_15576 = state_15520__$1;(statearr_15534_15576[(2)] = inst_15514);
(statearr_15534_15576[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15521 === (6)))
{var inst_15518 = (state_15520[(2)]);var state_15520__$1 = state_15520;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15520__$1,inst_15518);
} else
{if((state_val_15521 === (25)))
{var state_15520__$1 = state_15520;var statearr_15535_15577 = state_15520__$1;(statearr_15535_15577[(2)] = null);
(statearr_15535_15577[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15521 === (17)))
{var inst_15494 = (state_15520[(14)]);var state_15520__$1 = state_15520;var statearr_15536_15578 = state_15520__$1;(statearr_15536_15578[(2)] = inst_15494);
(statearr_15536_15578[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15521 === (3)))
{var inst_15454 = (state_15520[(9)]);var state_15520__$1 = state_15520;var statearr_15537_15579 = state_15520__$1;(statearr_15537_15579[(2)] = inst_15454);
(statearr_15537_15579[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15521 === (12)))
{var inst_15475 = (state_15520[(15)]);var inst_15480 = (state_15520[(16)]);var inst_15494 = (state_15520[(14)]);var inst_15494__$1 = inst_15475.call(null,inst_15480);var state_15520__$1 = (function (){var statearr_15538 = state_15520;(statearr_15538[(14)] = inst_15494__$1);
return statearr_15538;
})();if(cljs.core.truth_(inst_15494__$1))
{var statearr_15539_15580 = state_15520__$1;(statearr_15539_15580[(1)] = (17));
} else
{var statearr_15540_15581 = state_15520__$1;(statearr_15540_15581[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15521 === (2)))
{var inst_15454 = (state_15520[(9)]);var inst_15457 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15454);var state_15520__$1 = state_15520;var statearr_15541_15582 = state_15520__$1;(statearr_15541_15582[(2)] = inst_15457);
(statearr_15541_15582[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15521 === (23)))
{var inst_15505 = (state_15520[(2)]);var state_15520__$1 = state_15520;if(cljs.core.truth_(inst_15505))
{var statearr_15542_15583 = state_15520__$1;(statearr_15542_15583[(1)] = (24));
} else
{var statearr_15543_15584 = state_15520__$1;(statearr_15543_15584[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15521 === (19)))
{var inst_15502 = (state_15520[(2)]);var state_15520__$1 = state_15520;if(cljs.core.truth_(inst_15502))
{var statearr_15544_15585 = state_15520__$1;(statearr_15544_15585[(1)] = (20));
} else
{var statearr_15545_15586 = state_15520__$1;(statearr_15545_15586[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15521 === (11)))
{var inst_15479 = (state_15520[(8)]);var inst_15485 = (inst_15479 == null);var state_15520__$1 = state_15520;if(cljs.core.truth_(inst_15485))
{var statearr_15546_15587 = state_15520__$1;(statearr_15546_15587[(1)] = (14));
} else
{var statearr_15547_15588 = state_15520__$1;(statearr_15547_15588[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15521 === (9)))
{var inst_15472 = (state_15520[(10)]);var inst_15472__$1 = (state_15520[(2)]);var inst_15473 = cljs.core.get.call(null,inst_15472__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_15474 = cljs.core.get.call(null,inst_15472__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_15475 = cljs.core.get.call(null,inst_15472__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_15520__$1 = (function (){var statearr_15548 = state_15520;(statearr_15548[(15)] = inst_15475);
(statearr_15548[(17)] = inst_15474);
(statearr_15548[(10)] = inst_15472__$1);
return statearr_15548;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_15520__$1,(10),inst_15473);
} else
{if((state_val_15521 === (5)))
{var inst_15464 = (state_15520[(7)]);var inst_15467 = cljs.core.seq_QMARK_.call(null,inst_15464);var state_15520__$1 = state_15520;if(inst_15467)
{var statearr_15549_15589 = state_15520__$1;(statearr_15549_15589[(1)] = (7));
} else
{var statearr_15550_15590 = state_15520__$1;(statearr_15550_15590[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15521 === (14)))
{var inst_15480 = (state_15520[(16)]);var inst_15487 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15480);var state_15520__$1 = state_15520;var statearr_15551_15591 = state_15520__$1;(statearr_15551_15591[(2)] = inst_15487);
(statearr_15551_15591[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15521 === (26)))
{var inst_15510 = (state_15520[(2)]);var state_15520__$1 = state_15520;var statearr_15552_15592 = state_15520__$1;(statearr_15552_15592[(2)] = inst_15510);
(statearr_15552_15592[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15521 === (16)))
{var inst_15490 = (state_15520[(2)]);var inst_15491 = calc_state.call(null);var inst_15464 = inst_15491;var state_15520__$1 = (function (){var statearr_15553 = state_15520;(statearr_15553[(7)] = inst_15464);
(statearr_15553[(18)] = inst_15490);
return statearr_15553;
})();var statearr_15554_15593 = state_15520__$1;(statearr_15554_15593[(2)] = null);
(statearr_15554_15593[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15521 === (10)))
{var inst_15480 = (state_15520[(16)]);var inst_15479 = (state_15520[(8)]);var inst_15478 = (state_15520[(2)]);var inst_15479__$1 = cljs.core.nth.call(null,inst_15478,(0),null);var inst_15480__$1 = cljs.core.nth.call(null,inst_15478,(1),null);var inst_15481 = (inst_15479__$1 == null);var inst_15482 = cljs.core._EQ_.call(null,inst_15480__$1,change);var inst_15483 = (inst_15481) || (inst_15482);var state_15520__$1 = (function (){var statearr_15555 = state_15520;(statearr_15555[(16)] = inst_15480__$1);
(statearr_15555[(8)] = inst_15479__$1);
return statearr_15555;
})();if(cljs.core.truth_(inst_15483))
{var statearr_15556_15594 = state_15520__$1;(statearr_15556_15594[(1)] = (11));
} else
{var statearr_15557_15595 = state_15520__$1;(statearr_15557_15595[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15521 === (18)))
{var inst_15475 = (state_15520[(15)]);var inst_15480 = (state_15520[(16)]);var inst_15474 = (state_15520[(17)]);var inst_15497 = cljs.core.empty_QMARK_.call(null,inst_15475);var inst_15498 = inst_15474.call(null,inst_15480);var inst_15499 = cljs.core.not.call(null,inst_15498);var inst_15500 = (inst_15497) && (inst_15499);var state_15520__$1 = state_15520;var statearr_15558_15596 = state_15520__$1;(statearr_15558_15596[(2)] = inst_15500);
(statearr_15558_15596[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15521 === (8)))
{var inst_15464 = (state_15520[(7)]);var state_15520__$1 = state_15520;var statearr_15559_15597 = state_15520__$1;(statearr_15559_15597[(2)] = inst_15464);
(statearr_15559_15597[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6588__auto___15567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6573__auto__,c__6588__auto___15567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6574__auto__ = null;
var state_machine__6574__auto____0 = (function (){var statearr_15563 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15563[(0)] = state_machine__6574__auto__);
(statearr_15563[(1)] = (1));
return statearr_15563;
});
var state_machine__6574__auto____1 = (function (state_15520){while(true){
var ret_value__6575__auto__ = (function (){try{while(true){
var result__6576__auto__ = switch__6573__auto__.call(null,state_15520);if(cljs.core.keyword_identical_QMARK_.call(null,result__6576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6576__auto__;
}
break;
}
}catch (e15564){if((e15564 instanceof Object))
{var ex__6577__auto__ = e15564;var statearr_15565_15598 = state_15520;(statearr_15565_15598[(5)] = ex__6577__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15520);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15564;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15599 = state_15520;
state_15520 = G__15599;
continue;
}
} else
{return ret_value__6575__auto__;
}
break;
}
});
state_machine__6574__auto__ = function(state_15520){
switch(arguments.length){
case 0:
return state_machine__6574__auto____0.call(this);
case 1:
return state_machine__6574__auto____1.call(this,state_15520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6574__auto____0;
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6574__auto____1;
return state_machine__6574__auto__;
})()
;})(switch__6573__auto__,c__6588__auto___15567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6590__auto__ = (function (){var statearr_15566 = f__6589__auto__.call(null);(statearr_15566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6588__auto___15567);
return statearr_15566;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6590__auto__);
});})(c__6588__auto___15567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj15601 = {};return obj15601;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3626__auto__ = p;if(and__3626__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3626__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3638__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3626__auto__ = p;if(and__3626__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3626__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3638__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3626__auto__ = p;if(and__3626__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3626__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3638__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3626__auto__ = p;if(and__3626__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3626__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3638__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3638__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3638__auto__,mults){
return (function (p1__15602_SHARP_){if(cljs.core.truth_(p1__15602_SHARP_.call(null,topic)))
{return p1__15602_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15602_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3638__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15725 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15725 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15726){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15726 = meta15726;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15725.cljs$lang$type = true;
cljs.core.async.t15725.cljs$lang$ctorStr = "cljs.core.async/t15725";
cljs.core.async.t15725.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t15725");
});})(mults,ensure_mult))
;
cljs.core.async.t15725.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15725.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15725.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15725.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15725.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15725.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15725.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15725.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15727){var self__ = this;
var _15727__$1 = this;return self__.meta15726;
});})(mults,ensure_mult))
;
cljs.core.async.t15725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15727,meta15726__$1){var self__ = this;
var _15727__$1 = this;return (new cljs.core.async.t15725(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15726__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15725 = ((function (mults,ensure_mult){
return (function __GT_t15725(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15726){return (new cljs.core.async.t15725(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15726));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15725(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6588__auto___15847 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6588__auto___15847,mults,ensure_mult,p){
return (function (){var f__6589__auto__ = (function (){var switch__6573__auto__ = ((function (c__6588__auto___15847,mults,ensure_mult,p){
return (function (state_15799){var state_val_15800 = (state_15799[(1)]);if((state_val_15800 === (7)))
{var inst_15795 = (state_15799[(2)]);var state_15799__$1 = state_15799;var statearr_15801_15848 = state_15799__$1;(statearr_15801_15848[(2)] = inst_15795);
(statearr_15801_15848[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15800 === (20)))
{var state_15799__$1 = state_15799;var statearr_15802_15849 = state_15799__$1;(statearr_15802_15849[(2)] = null);
(statearr_15802_15849[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15800 === (1)))
{var state_15799__$1 = state_15799;var statearr_15803_15850 = state_15799__$1;(statearr_15803_15850[(2)] = null);
(statearr_15803_15850[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15800 === (24)))
{var inst_15778 = (state_15799[(7)]);var inst_15787 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15778);var state_15799__$1 = state_15799;var statearr_15804_15851 = state_15799__$1;(statearr_15804_15851[(2)] = inst_15787);
(statearr_15804_15851[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15800 === (4)))
{var inst_15730 = (state_15799[(8)]);var inst_15730__$1 = (state_15799[(2)]);var inst_15731 = (inst_15730__$1 == null);var state_15799__$1 = (function (){var statearr_15805 = state_15799;(statearr_15805[(8)] = inst_15730__$1);
return statearr_15805;
})();if(cljs.core.truth_(inst_15731))
{var statearr_15806_15852 = state_15799__$1;(statearr_15806_15852[(1)] = (5));
} else
{var statearr_15807_15853 = state_15799__$1;(statearr_15807_15853[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15800 === (15)))
{var inst_15772 = (state_15799[(2)]);var state_15799__$1 = state_15799;var statearr_15808_15854 = state_15799__$1;(statearr_15808_15854[(2)] = inst_15772);
(statearr_15808_15854[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15800 === (21)))
{var inst_15792 = (state_15799[(2)]);var state_15799__$1 = (function (){var statearr_15809 = state_15799;(statearr_15809[(9)] = inst_15792);
return statearr_15809;
})();var statearr_15810_15855 = state_15799__$1;(statearr_15810_15855[(2)] = null);
(statearr_15810_15855[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15800 === (13)))
{var inst_15754 = (state_15799[(10)]);var inst_15756 = cljs.core.chunked_seq_QMARK_.call(null,inst_15754);var state_15799__$1 = state_15799;if(inst_15756)
{var statearr_15811_15856 = state_15799__$1;(statearr_15811_15856[(1)] = (16));
} else
{var statearr_15812_15857 = state_15799__$1;(statearr_15812_15857[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15800 === (22)))
{var inst_15784 = (state_15799[(2)]);var state_15799__$1 = state_15799;if(cljs.core.truth_(inst_15784))
{var statearr_15813_15858 = state_15799__$1;(statearr_15813_15858[(1)] = (23));
} else
{var statearr_15814_15859 = state_15799__$1;(statearr_15814_15859[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15800 === (6)))
{var inst_15778 = (state_15799[(7)]);var inst_15730 = (state_15799[(8)]);var inst_15780 = (state_15799[(11)]);var inst_15778__$1 = topic_fn.call(null,inst_15730);var inst_15779 = cljs.core.deref.call(null,mults);var inst_15780__$1 = cljs.core.get.call(null,inst_15779,inst_15778__$1);var state_15799__$1 = (function (){var statearr_15815 = state_15799;(statearr_15815[(7)] = inst_15778__$1);
(statearr_15815[(11)] = inst_15780__$1);
return statearr_15815;
})();if(cljs.core.truth_(inst_15780__$1))
{var statearr_15816_15860 = state_15799__$1;(statearr_15816_15860[(1)] = (19));
} else
{var statearr_15817_15861 = state_15799__$1;(statearr_15817_15861[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15800 === (25)))
{var inst_15789 = (state_15799[(2)]);var state_15799__$1 = state_15799;var statearr_15818_15862 = state_15799__$1;(statearr_15818_15862[(2)] = inst_15789);
(statearr_15818_15862[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15800 === (17)))
{var inst_15754 = (state_15799[(10)]);var inst_15763 = cljs.core.first.call(null,inst_15754);var inst_15764 = cljs.core.async.muxch_STAR_.call(null,inst_15763);var inst_15765 = cljs.core.async.close_BANG_.call(null,inst_15764);var inst_15766 = cljs.core.next.call(null,inst_15754);var inst_15740 = inst_15766;var inst_15741 = null;var inst_15742 = (0);var inst_15743 = (0);var state_15799__$1 = (function (){var statearr_15819 = state_15799;(statearr_15819[(12)] = inst_15765);
(statearr_15819[(13)] = inst_15742);
(statearr_15819[(14)] = inst_15743);
(statearr_15819[(15)] = inst_15741);
(statearr_15819[(16)] = inst_15740);
return statearr_15819;
})();var statearr_15820_15863 = state_15799__$1;(statearr_15820_15863[(2)] = null);
(statearr_15820_15863[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15800 === (3)))
{var inst_15797 = (state_15799[(2)]);var state_15799__$1 = state_15799;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15799__$1,inst_15797);
} else
{if((state_val_15800 === (12)))
{var inst_15774 = (state_15799[(2)]);var state_15799__$1 = state_15799;var statearr_15821_15864 = state_15799__$1;(statearr_15821_15864[(2)] = inst_15774);
(statearr_15821_15864[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15800 === (2)))
{var state_15799__$1 = state_15799;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15799__$1,(4),ch);
} else
{if((state_val_15800 === (23)))
{var state_15799__$1 = state_15799;var statearr_15822_15865 = state_15799__$1;(statearr_15822_15865[(2)] = null);
(statearr_15822_15865[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15800 === (19)))
{var inst_15730 = (state_15799[(8)]);var inst_15780 = (state_15799[(11)]);var inst_15782 = cljs.core.async.muxch_STAR_.call(null,inst_15780);var state_15799__$1 = state_15799;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15799__$1,(22),inst_15782,inst_15730);
} else
{if((state_val_15800 === (11)))
{var inst_15754 = (state_15799[(10)]);var inst_15740 = (state_15799[(16)]);var inst_15754__$1 = cljs.core.seq.call(null,inst_15740);var state_15799__$1 = (function (){var statearr_15823 = state_15799;(statearr_15823[(10)] = inst_15754__$1);
return statearr_15823;
})();if(inst_15754__$1)
{var statearr_15824_15866 = state_15799__$1;(statearr_15824_15866[(1)] = (13));
} else
{var statearr_15825_15867 = state_15799__$1;(statearr_15825_15867[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15800 === (9)))
{var inst_15776 = (state_15799[(2)]);var state_15799__$1 = state_15799;var statearr_15826_15868 = state_15799__$1;(statearr_15826_15868[(2)] = inst_15776);
(statearr_15826_15868[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15800 === (5)))
{var inst_15737 = cljs.core.deref.call(null,mults);var inst_15738 = cljs.core.vals.call(null,inst_15737);var inst_15739 = cljs.core.seq.call(null,inst_15738);var inst_15740 = inst_15739;var inst_15741 = null;var inst_15742 = (0);var inst_15743 = (0);var state_15799__$1 = (function (){var statearr_15827 = state_15799;(statearr_15827[(13)] = inst_15742);
(statearr_15827[(14)] = inst_15743);
(statearr_15827[(15)] = inst_15741);
(statearr_15827[(16)] = inst_15740);
return statearr_15827;
})();var statearr_15828_15869 = state_15799__$1;(statearr_15828_15869[(2)] = null);
(statearr_15828_15869[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15800 === (14)))
{var state_15799__$1 = state_15799;var statearr_15832_15870 = state_15799__$1;(statearr_15832_15870[(2)] = null);
(statearr_15832_15870[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15800 === (16)))
{var inst_15754 = (state_15799[(10)]);var inst_15758 = cljs.core.chunk_first.call(null,inst_15754);var inst_15759 = cljs.core.chunk_rest.call(null,inst_15754);var inst_15760 = cljs.core.count.call(null,inst_15758);var inst_15740 = inst_15759;var inst_15741 = inst_15758;var inst_15742 = inst_15760;var inst_15743 = (0);var state_15799__$1 = (function (){var statearr_15833 = state_15799;(statearr_15833[(13)] = inst_15742);
(statearr_15833[(14)] = inst_15743);
(statearr_15833[(15)] = inst_15741);
(statearr_15833[(16)] = inst_15740);
return statearr_15833;
})();var statearr_15834_15871 = state_15799__$1;(statearr_15834_15871[(2)] = null);
(statearr_15834_15871[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15800 === (10)))
{var inst_15742 = (state_15799[(13)]);var inst_15743 = (state_15799[(14)]);var inst_15741 = (state_15799[(15)]);var inst_15740 = (state_15799[(16)]);var inst_15748 = cljs.core._nth.call(null,inst_15741,inst_15743);var inst_15749 = cljs.core.async.muxch_STAR_.call(null,inst_15748);var inst_15750 = cljs.core.async.close_BANG_.call(null,inst_15749);var inst_15751 = (inst_15743 + (1));var tmp15829 = inst_15742;var tmp15830 = inst_15741;var tmp15831 = inst_15740;var inst_15740__$1 = tmp15831;var inst_15741__$1 = tmp15830;var inst_15742__$1 = tmp15829;var inst_15743__$1 = inst_15751;var state_15799__$1 = (function (){var statearr_15835 = state_15799;(statearr_15835[(17)] = inst_15750);
(statearr_15835[(13)] = inst_15742__$1);
(statearr_15835[(14)] = inst_15743__$1);
(statearr_15835[(15)] = inst_15741__$1);
(statearr_15835[(16)] = inst_15740__$1);
return statearr_15835;
})();var statearr_15836_15872 = state_15799__$1;(statearr_15836_15872[(2)] = null);
(statearr_15836_15872[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15800 === (18)))
{var inst_15769 = (state_15799[(2)]);var state_15799__$1 = state_15799;var statearr_15837_15873 = state_15799__$1;(statearr_15837_15873[(2)] = inst_15769);
(statearr_15837_15873[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15800 === (8)))
{var inst_15742 = (state_15799[(13)]);var inst_15743 = (state_15799[(14)]);var inst_15745 = (inst_15743 < inst_15742);var inst_15746 = inst_15745;var state_15799__$1 = state_15799;if(cljs.core.truth_(inst_15746))
{var statearr_15838_15874 = state_15799__$1;(statearr_15838_15874[(1)] = (10));
} else
{var statearr_15839_15875 = state_15799__$1;(statearr_15839_15875[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6588__auto___15847,mults,ensure_mult,p))
;return ((function (switch__6573__auto__,c__6588__auto___15847,mults,ensure_mult,p){
return (function() {
var state_machine__6574__auto__ = null;
var state_machine__6574__auto____0 = (function (){var statearr_15843 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15843[(0)] = state_machine__6574__auto__);
(statearr_15843[(1)] = (1));
return statearr_15843;
});
var state_machine__6574__auto____1 = (function (state_15799){while(true){
var ret_value__6575__auto__ = (function (){try{while(true){
var result__6576__auto__ = switch__6573__auto__.call(null,state_15799);if(cljs.core.keyword_identical_QMARK_.call(null,result__6576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6576__auto__;
}
break;
}
}catch (e15844){if((e15844 instanceof Object))
{var ex__6577__auto__ = e15844;var statearr_15845_15876 = state_15799;(statearr_15845_15876[(5)] = ex__6577__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15799);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15844;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15877 = state_15799;
state_15799 = G__15877;
continue;
}
} else
{return ret_value__6575__auto__;
}
break;
}
});
state_machine__6574__auto__ = function(state_15799){
switch(arguments.length){
case 0:
return state_machine__6574__auto____0.call(this);
case 1:
return state_machine__6574__auto____1.call(this,state_15799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6574__auto____0;
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6574__auto____1;
return state_machine__6574__auto__;
})()
;})(switch__6573__auto__,c__6588__auto___15847,mults,ensure_mult,p))
})();var state__6590__auto__ = (function (){var statearr_15846 = f__6589__auto__.call(null);(statearr_15846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6588__auto___15847);
return statearr_15846;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6590__auto__);
});})(c__6588__auto___15847,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6588__auto___16014 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6588__auto___16014,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6589__auto__ = (function (){var switch__6573__auto__ = ((function (c__6588__auto___16014,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15984){var state_val_15985 = (state_15984[(1)]);if((state_val_15985 === (7)))
{var state_15984__$1 = state_15984;var statearr_15986_16015 = state_15984__$1;(statearr_15986_16015[(2)] = null);
(statearr_15986_16015[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15985 === (1)))
{var state_15984__$1 = state_15984;var statearr_15987_16016 = state_15984__$1;(statearr_15987_16016[(2)] = null);
(statearr_15987_16016[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15985 === (4)))
{var inst_15948 = (state_15984[(7)]);var inst_15950 = (inst_15948 < cnt);var state_15984__$1 = state_15984;if(cljs.core.truth_(inst_15950))
{var statearr_15988_16017 = state_15984__$1;(statearr_15988_16017[(1)] = (6));
} else
{var statearr_15989_16018 = state_15984__$1;(statearr_15989_16018[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15985 === (15)))
{var inst_15980 = (state_15984[(2)]);var state_15984__$1 = state_15984;var statearr_15990_16019 = state_15984__$1;(statearr_15990_16019[(2)] = inst_15980);
(statearr_15990_16019[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15985 === (13)))
{var inst_15973 = cljs.core.async.close_BANG_.call(null,out);var state_15984__$1 = state_15984;var statearr_15991_16020 = state_15984__$1;(statearr_15991_16020[(2)] = inst_15973);
(statearr_15991_16020[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15985 === (6)))
{var state_15984__$1 = state_15984;var statearr_15992_16021 = state_15984__$1;(statearr_15992_16021[(2)] = null);
(statearr_15992_16021[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15985 === (3)))
{var inst_15982 = (state_15984[(2)]);var state_15984__$1 = state_15984;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15984__$1,inst_15982);
} else
{if((state_val_15985 === (12)))
{var inst_15970 = (state_15984[(8)]);var inst_15970__$1 = (state_15984[(2)]);var inst_15971 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15970__$1);var state_15984__$1 = (function (){var statearr_15993 = state_15984;(statearr_15993[(8)] = inst_15970__$1);
return statearr_15993;
})();if(cljs.core.truth_(inst_15971))
{var statearr_15994_16022 = state_15984__$1;(statearr_15994_16022[(1)] = (13));
} else
{var statearr_15995_16023 = state_15984__$1;(statearr_15995_16023[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15985 === (2)))
{var inst_15947 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15948 = (0);var state_15984__$1 = (function (){var statearr_15996 = state_15984;(statearr_15996[(9)] = inst_15947);
(statearr_15996[(7)] = inst_15948);
return statearr_15996;
})();var statearr_15997_16024 = state_15984__$1;(statearr_15997_16024[(2)] = null);
(statearr_15997_16024[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15985 === (11)))
{var inst_15948 = (state_15984[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15984,(10),Object,null,(9));var inst_15957 = chs__$1.call(null,inst_15948);var inst_15958 = done.call(null,inst_15948);var inst_15959 = cljs.core.async.take_BANG_.call(null,inst_15957,inst_15958);var state_15984__$1 = state_15984;var statearr_15998_16025 = state_15984__$1;(statearr_15998_16025[(2)] = inst_15959);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15984__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15985 === (9)))
{var inst_15948 = (state_15984[(7)]);var inst_15961 = (state_15984[(2)]);var inst_15962 = (inst_15948 + (1));var inst_15948__$1 = inst_15962;var state_15984__$1 = (function (){var statearr_15999 = state_15984;(statearr_15999[(7)] = inst_15948__$1);
(statearr_15999[(10)] = inst_15961);
return statearr_15999;
})();var statearr_16000_16026 = state_15984__$1;(statearr_16000_16026[(2)] = null);
(statearr_16000_16026[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15985 === (5)))
{var inst_15968 = (state_15984[(2)]);var state_15984__$1 = (function (){var statearr_16001 = state_15984;(statearr_16001[(11)] = inst_15968);
return statearr_16001;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15984__$1,(12),dchan);
} else
{if((state_val_15985 === (14)))
{var inst_15970 = (state_15984[(8)]);var inst_15975 = cljs.core.apply.call(null,f,inst_15970);var state_15984__$1 = state_15984;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15984__$1,(16),out,inst_15975);
} else
{if((state_val_15985 === (16)))
{var inst_15977 = (state_15984[(2)]);var state_15984__$1 = (function (){var statearr_16002 = state_15984;(statearr_16002[(12)] = inst_15977);
return statearr_16002;
})();var statearr_16003_16027 = state_15984__$1;(statearr_16003_16027[(2)] = null);
(statearr_16003_16027[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15985 === (10)))
{var inst_15952 = (state_15984[(2)]);var inst_15953 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15984__$1 = (function (){var statearr_16004 = state_15984;(statearr_16004[(13)] = inst_15952);
return statearr_16004;
})();var statearr_16005_16028 = state_15984__$1;(statearr_16005_16028[(2)] = inst_15953);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15984__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15985 === (8)))
{var inst_15966 = (state_15984[(2)]);var state_15984__$1 = state_15984;var statearr_16006_16029 = state_15984__$1;(statearr_16006_16029[(2)] = inst_15966);
(statearr_16006_16029[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6588__auto___16014,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6573__auto__,c__6588__auto___16014,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6574__auto__ = null;
var state_machine__6574__auto____0 = (function (){var statearr_16010 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16010[(0)] = state_machine__6574__auto__);
(statearr_16010[(1)] = (1));
return statearr_16010;
});
var state_machine__6574__auto____1 = (function (state_15984){while(true){
var ret_value__6575__auto__ = (function (){try{while(true){
var result__6576__auto__ = switch__6573__auto__.call(null,state_15984);if(cljs.core.keyword_identical_QMARK_.call(null,result__6576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6576__auto__;
}
break;
}
}catch (e16011){if((e16011 instanceof Object))
{var ex__6577__auto__ = e16011;var statearr_16012_16030 = state_15984;(statearr_16012_16030[(5)] = ex__6577__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15984);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16011;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16031 = state_15984;
state_15984 = G__16031;
continue;
}
} else
{return ret_value__6575__auto__;
}
break;
}
});
state_machine__6574__auto__ = function(state_15984){
switch(arguments.length){
case 0:
return state_machine__6574__auto____0.call(this);
case 1:
return state_machine__6574__auto____1.call(this,state_15984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6574__auto____0;
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6574__auto____1;
return state_machine__6574__auto__;
})()
;})(switch__6573__auto__,c__6588__auto___16014,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6590__auto__ = (function (){var statearr_16013 = f__6589__auto__.call(null);(statearr_16013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6588__auto___16014);
return statearr_16013;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6590__auto__);
});})(c__6588__auto___16014,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6588__auto___16139 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6588__auto___16139,out){
return (function (){var f__6589__auto__ = (function (){var switch__6573__auto__ = ((function (c__6588__auto___16139,out){
return (function (state_16115){var state_val_16116 = (state_16115[(1)]);if((state_val_16116 === (7)))
{var inst_16095 = (state_16115[(7)]);var inst_16094 = (state_16115[(8)]);var inst_16094__$1 = (state_16115[(2)]);var inst_16095__$1 = cljs.core.nth.call(null,inst_16094__$1,(0),null);var inst_16096 = cljs.core.nth.call(null,inst_16094__$1,(1),null);var inst_16097 = (inst_16095__$1 == null);var state_16115__$1 = (function (){var statearr_16117 = state_16115;(statearr_16117[(7)] = inst_16095__$1);
(statearr_16117[(8)] = inst_16094__$1);
(statearr_16117[(9)] = inst_16096);
return statearr_16117;
})();if(cljs.core.truth_(inst_16097))
{var statearr_16118_16140 = state_16115__$1;(statearr_16118_16140[(1)] = (8));
} else
{var statearr_16119_16141 = state_16115__$1;(statearr_16119_16141[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16116 === (1)))
{var inst_16086 = cljs.core.vec.call(null,chs);var inst_16087 = inst_16086;var state_16115__$1 = (function (){var statearr_16120 = state_16115;(statearr_16120[(10)] = inst_16087);
return statearr_16120;
})();var statearr_16121_16142 = state_16115__$1;(statearr_16121_16142[(2)] = null);
(statearr_16121_16142[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16116 === (4)))
{var inst_16087 = (state_16115[(10)]);var state_16115__$1 = state_16115;return cljs.core.async.ioc_alts_BANG_.call(null,state_16115__$1,(7),inst_16087);
} else
{if((state_val_16116 === (6)))
{var inst_16111 = (state_16115[(2)]);var state_16115__$1 = state_16115;var statearr_16122_16143 = state_16115__$1;(statearr_16122_16143[(2)] = inst_16111);
(statearr_16122_16143[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16116 === (3)))
{var inst_16113 = (state_16115[(2)]);var state_16115__$1 = state_16115;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16115__$1,inst_16113);
} else
{if((state_val_16116 === (2)))
{var inst_16087 = (state_16115[(10)]);var inst_16089 = cljs.core.count.call(null,inst_16087);var inst_16090 = (inst_16089 > (0));var state_16115__$1 = state_16115;if(cljs.core.truth_(inst_16090))
{var statearr_16124_16144 = state_16115__$1;(statearr_16124_16144[(1)] = (4));
} else
{var statearr_16125_16145 = state_16115__$1;(statearr_16125_16145[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16116 === (11)))
{var inst_16087 = (state_16115[(10)]);var inst_16104 = (state_16115[(2)]);var tmp16123 = inst_16087;var inst_16087__$1 = tmp16123;var state_16115__$1 = (function (){var statearr_16126 = state_16115;(statearr_16126[(11)] = inst_16104);
(statearr_16126[(10)] = inst_16087__$1);
return statearr_16126;
})();var statearr_16127_16146 = state_16115__$1;(statearr_16127_16146[(2)] = null);
(statearr_16127_16146[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16116 === (9)))
{var inst_16095 = (state_16115[(7)]);var state_16115__$1 = state_16115;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16115__$1,(11),out,inst_16095);
} else
{if((state_val_16116 === (5)))
{var inst_16109 = cljs.core.async.close_BANG_.call(null,out);var state_16115__$1 = state_16115;var statearr_16128_16147 = state_16115__$1;(statearr_16128_16147[(2)] = inst_16109);
(statearr_16128_16147[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16116 === (10)))
{var inst_16107 = (state_16115[(2)]);var state_16115__$1 = state_16115;var statearr_16129_16148 = state_16115__$1;(statearr_16129_16148[(2)] = inst_16107);
(statearr_16129_16148[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16116 === (8)))
{var inst_16087 = (state_16115[(10)]);var inst_16095 = (state_16115[(7)]);var inst_16094 = (state_16115[(8)]);var inst_16096 = (state_16115[(9)]);var inst_16099 = (function (){var c = inst_16096;var v = inst_16095;var vec__16092 = inst_16094;var cs = inst_16087;return ((function (c,v,vec__16092,cs,inst_16087,inst_16095,inst_16094,inst_16096,state_val_16116,c__6588__auto___16139,out){
return (function (p1__16032_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__16032_SHARP_);
});
;})(c,v,vec__16092,cs,inst_16087,inst_16095,inst_16094,inst_16096,state_val_16116,c__6588__auto___16139,out))
})();var inst_16100 = cljs.core.filterv.call(null,inst_16099,inst_16087);var inst_16087__$1 = inst_16100;var state_16115__$1 = (function (){var statearr_16130 = state_16115;(statearr_16130[(10)] = inst_16087__$1);
return statearr_16130;
})();var statearr_16131_16149 = state_16115__$1;(statearr_16131_16149[(2)] = null);
(statearr_16131_16149[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6588__auto___16139,out))
;return ((function (switch__6573__auto__,c__6588__auto___16139,out){
return (function() {
var state_machine__6574__auto__ = null;
var state_machine__6574__auto____0 = (function (){var statearr_16135 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16135[(0)] = state_machine__6574__auto__);
(statearr_16135[(1)] = (1));
return statearr_16135;
});
var state_machine__6574__auto____1 = (function (state_16115){while(true){
var ret_value__6575__auto__ = (function (){try{while(true){
var result__6576__auto__ = switch__6573__auto__.call(null,state_16115);if(cljs.core.keyword_identical_QMARK_.call(null,result__6576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6576__auto__;
}
break;
}
}catch (e16136){if((e16136 instanceof Object))
{var ex__6577__auto__ = e16136;var statearr_16137_16150 = state_16115;(statearr_16137_16150[(5)] = ex__6577__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16115);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16136;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16151 = state_16115;
state_16115 = G__16151;
continue;
}
} else
{return ret_value__6575__auto__;
}
break;
}
});
state_machine__6574__auto__ = function(state_16115){
switch(arguments.length){
case 0:
return state_machine__6574__auto____0.call(this);
case 1:
return state_machine__6574__auto____1.call(this,state_16115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6574__auto____0;
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6574__auto____1;
return state_machine__6574__auto__;
})()
;})(switch__6573__auto__,c__6588__auto___16139,out))
})();var state__6590__auto__ = (function (){var statearr_16138 = f__6589__auto__.call(null);(statearr_16138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6588__auto___16139);
return statearr_16138;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6590__auto__);
});})(c__6588__auto___16139,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6588__auto___16244 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6588__auto___16244,out){
return (function (){var f__6589__auto__ = (function (){var switch__6573__auto__ = ((function (c__6588__auto___16244,out){
return (function (state_16221){var state_val_16222 = (state_16221[(1)]);if((state_val_16222 === (7)))
{var inst_16203 = (state_16221[(7)]);var inst_16203__$1 = (state_16221[(2)]);var inst_16204 = (inst_16203__$1 == null);var inst_16205 = cljs.core.not.call(null,inst_16204);var state_16221__$1 = (function (){var statearr_16223 = state_16221;(statearr_16223[(7)] = inst_16203__$1);
return statearr_16223;
})();if(inst_16205)
{var statearr_16224_16245 = state_16221__$1;(statearr_16224_16245[(1)] = (8));
} else
{var statearr_16225_16246 = state_16221__$1;(statearr_16225_16246[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16222 === (1)))
{var inst_16198 = (0);var state_16221__$1 = (function (){var statearr_16226 = state_16221;(statearr_16226[(8)] = inst_16198);
return statearr_16226;
})();var statearr_16227_16247 = state_16221__$1;(statearr_16227_16247[(2)] = null);
(statearr_16227_16247[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16222 === (4)))
{var state_16221__$1 = state_16221;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16221__$1,(7),ch);
} else
{if((state_val_16222 === (6)))
{var inst_16216 = (state_16221[(2)]);var state_16221__$1 = state_16221;var statearr_16228_16248 = state_16221__$1;(statearr_16228_16248[(2)] = inst_16216);
(statearr_16228_16248[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16222 === (3)))
{var inst_16218 = (state_16221[(2)]);var inst_16219 = cljs.core.async.close_BANG_.call(null,out);var state_16221__$1 = (function (){var statearr_16229 = state_16221;(statearr_16229[(9)] = inst_16218);
return statearr_16229;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16221__$1,inst_16219);
} else
{if((state_val_16222 === (2)))
{var inst_16198 = (state_16221[(8)]);var inst_16200 = (inst_16198 < n);var state_16221__$1 = state_16221;if(cljs.core.truth_(inst_16200))
{var statearr_16230_16249 = state_16221__$1;(statearr_16230_16249[(1)] = (4));
} else
{var statearr_16231_16250 = state_16221__$1;(statearr_16231_16250[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16222 === (11)))
{var inst_16198 = (state_16221[(8)]);var inst_16208 = (state_16221[(2)]);var inst_16209 = (inst_16198 + (1));var inst_16198__$1 = inst_16209;var state_16221__$1 = (function (){var statearr_16232 = state_16221;(statearr_16232[(10)] = inst_16208);
(statearr_16232[(8)] = inst_16198__$1);
return statearr_16232;
})();var statearr_16233_16251 = state_16221__$1;(statearr_16233_16251[(2)] = null);
(statearr_16233_16251[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16222 === (9)))
{var state_16221__$1 = state_16221;var statearr_16234_16252 = state_16221__$1;(statearr_16234_16252[(2)] = null);
(statearr_16234_16252[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16222 === (5)))
{var state_16221__$1 = state_16221;var statearr_16235_16253 = state_16221__$1;(statearr_16235_16253[(2)] = null);
(statearr_16235_16253[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16222 === (10)))
{var inst_16213 = (state_16221[(2)]);var state_16221__$1 = state_16221;var statearr_16236_16254 = state_16221__$1;(statearr_16236_16254[(2)] = inst_16213);
(statearr_16236_16254[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16222 === (8)))
{var inst_16203 = (state_16221[(7)]);var state_16221__$1 = state_16221;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16221__$1,(11),out,inst_16203);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6588__auto___16244,out))
;return ((function (switch__6573__auto__,c__6588__auto___16244,out){
return (function() {
var state_machine__6574__auto__ = null;
var state_machine__6574__auto____0 = (function (){var statearr_16240 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16240[(0)] = state_machine__6574__auto__);
(statearr_16240[(1)] = (1));
return statearr_16240;
});
var state_machine__6574__auto____1 = (function (state_16221){while(true){
var ret_value__6575__auto__ = (function (){try{while(true){
var result__6576__auto__ = switch__6573__auto__.call(null,state_16221);if(cljs.core.keyword_identical_QMARK_.call(null,result__6576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6576__auto__;
}
break;
}
}catch (e16241){if((e16241 instanceof Object))
{var ex__6577__auto__ = e16241;var statearr_16242_16255 = state_16221;(statearr_16242_16255[(5)] = ex__6577__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16221);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16241;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16256 = state_16221;
state_16221 = G__16256;
continue;
}
} else
{return ret_value__6575__auto__;
}
break;
}
});
state_machine__6574__auto__ = function(state_16221){
switch(arguments.length){
case 0:
return state_machine__6574__auto____0.call(this);
case 1:
return state_machine__6574__auto____1.call(this,state_16221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6574__auto____0;
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6574__auto____1;
return state_machine__6574__auto__;
})()
;})(switch__6573__auto__,c__6588__auto___16244,out))
})();var state__6590__auto__ = (function (){var statearr_16243 = f__6589__auto__.call(null);(statearr_16243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6588__auto___16244);
return statearr_16243;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6590__auto__);
});})(c__6588__auto___16244,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t16264 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16264 = (function (ch,f,map_LT_,meta16265){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16265 = meta16265;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16264.cljs$lang$type = true;
cljs.core.async.t16264.cljs$lang$ctorStr = "cljs.core.async/t16264";
cljs.core.async.t16264.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t16264");
});
cljs.core.async.t16264.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16264.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t16264.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16264.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t16267 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16267 = (function (fn1,_,meta16265,ch,f,map_LT_,meta16268){
this.fn1 = fn1;
this._ = _;
this.meta16265 = meta16265;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16268 = meta16268;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16267.cljs$lang$type = true;
cljs.core.async.t16267.cljs$lang$ctorStr = "cljs.core.async/t16267";
cljs.core.async.t16267.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t16267");
});})(___$1))
;
cljs.core.async.t16267.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16267.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t16267.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__16257_SHARP_){return f1.call(null,(((p1__16257_SHARP_ == null))?null:self__.f.call(null,p1__16257_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t16267.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16269){var self__ = this;
var _16269__$1 = this;return self__.meta16268;
});})(___$1))
;
cljs.core.async.t16267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16269,meta16268__$1){var self__ = this;
var _16269__$1 = this;return (new cljs.core.async.t16267(self__.fn1,self__._,self__.meta16265,self__.ch,self__.f,self__.map_LT_,meta16268__$1));
});})(___$1))
;
cljs.core.async.__GT_t16267 = ((function (___$1){
return (function __GT_t16267(fn1__$1,___$2,meta16265__$1,ch__$2,f__$2,map_LT___$2,meta16268){return (new cljs.core.async.t16267(fn1__$1,___$2,meta16265__$1,ch__$2,f__$2,map_LT___$2,meta16268));
});})(___$1))
;
}
return (new cljs.core.async.t16267(fn1,___$1,self__.meta16265,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3626__auto__ = ret;if(cljs.core.truth_(and__3626__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3626__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t16264.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16264.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16264.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t16264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16266){var self__ = this;
var _16266__$1 = this;return self__.meta16265;
});
cljs.core.async.t16264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16266,meta16265__$1){var self__ = this;
var _16266__$1 = this;return (new cljs.core.async.t16264(self__.ch,self__.f,self__.map_LT_,meta16265__$1));
});
cljs.core.async.__GT_t16264 = (function __GT_t16264(ch__$1,f__$1,map_LT___$1,meta16265){return (new cljs.core.async.t16264(ch__$1,f__$1,map_LT___$1,meta16265));
});
}
return (new cljs.core.async.t16264(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t16273 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16273 = (function (ch,f,map_GT_,meta16274){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta16274 = meta16274;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16273.cljs$lang$type = true;
cljs.core.async.t16273.cljs$lang$ctorStr = "cljs.core.async/t16273";
cljs.core.async.t16273.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t16273");
});
cljs.core.async.t16273.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16273.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t16273.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16273.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t16273.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16273.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16275){var self__ = this;
var _16275__$1 = this;return self__.meta16274;
});
cljs.core.async.t16273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16275,meta16274__$1){var self__ = this;
var _16275__$1 = this;return (new cljs.core.async.t16273(self__.ch,self__.f,self__.map_GT_,meta16274__$1));
});
cljs.core.async.__GT_t16273 = (function __GT_t16273(ch__$1,f__$1,map_GT___$1,meta16274){return (new cljs.core.async.t16273(ch__$1,f__$1,map_GT___$1,meta16274));
});
}
return (new cljs.core.async.t16273(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t16279 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16279 = (function (ch,p,filter_GT_,meta16280){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta16280 = meta16280;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16279.cljs$lang$type = true;
cljs.core.async.t16279.cljs$lang$ctorStr = "cljs.core.async/t16279";
cljs.core.async.t16279.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t16279");
});
cljs.core.async.t16279.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16279.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t16279.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16279.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t16279.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16279.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16279.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t16279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16281){var self__ = this;
var _16281__$1 = this;return self__.meta16280;
});
cljs.core.async.t16279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16281,meta16280__$1){var self__ = this;
var _16281__$1 = this;return (new cljs.core.async.t16279(self__.ch,self__.p,self__.filter_GT_,meta16280__$1));
});
cljs.core.async.__GT_t16279 = (function __GT_t16279(ch__$1,p__$1,filter_GT___$1,meta16280){return (new cljs.core.async.t16279(ch__$1,p__$1,filter_GT___$1,meta16280));
});
}
return (new cljs.core.async.t16279(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6588__auto___16364 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6588__auto___16364,out){
return (function (){var f__6589__auto__ = (function (){var switch__6573__auto__ = ((function (c__6588__auto___16364,out){
return (function (state_16343){var state_val_16344 = (state_16343[(1)]);if((state_val_16344 === (7)))
{var inst_16339 = (state_16343[(2)]);var state_16343__$1 = state_16343;var statearr_16345_16365 = state_16343__$1;(statearr_16345_16365[(2)] = inst_16339);
(statearr_16345_16365[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16344 === (1)))
{var state_16343__$1 = state_16343;var statearr_16346_16366 = state_16343__$1;(statearr_16346_16366[(2)] = null);
(statearr_16346_16366[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16344 === (4)))
{var inst_16325 = (state_16343[(7)]);var inst_16325__$1 = (state_16343[(2)]);var inst_16326 = (inst_16325__$1 == null);var state_16343__$1 = (function (){var statearr_16347 = state_16343;(statearr_16347[(7)] = inst_16325__$1);
return statearr_16347;
})();if(cljs.core.truth_(inst_16326))
{var statearr_16348_16367 = state_16343__$1;(statearr_16348_16367[(1)] = (5));
} else
{var statearr_16349_16368 = state_16343__$1;(statearr_16349_16368[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16344 === (6)))
{var inst_16325 = (state_16343[(7)]);var inst_16330 = p.call(null,inst_16325);var state_16343__$1 = state_16343;if(cljs.core.truth_(inst_16330))
{var statearr_16350_16369 = state_16343__$1;(statearr_16350_16369[(1)] = (8));
} else
{var statearr_16351_16370 = state_16343__$1;(statearr_16351_16370[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16344 === (3)))
{var inst_16341 = (state_16343[(2)]);var state_16343__$1 = state_16343;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16343__$1,inst_16341);
} else
{if((state_val_16344 === (2)))
{var state_16343__$1 = state_16343;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16343__$1,(4),ch);
} else
{if((state_val_16344 === (11)))
{var inst_16333 = (state_16343[(2)]);var state_16343__$1 = state_16343;var statearr_16352_16371 = state_16343__$1;(statearr_16352_16371[(2)] = inst_16333);
(statearr_16352_16371[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16344 === (9)))
{var state_16343__$1 = state_16343;var statearr_16353_16372 = state_16343__$1;(statearr_16353_16372[(2)] = null);
(statearr_16353_16372[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16344 === (5)))
{var inst_16328 = cljs.core.async.close_BANG_.call(null,out);var state_16343__$1 = state_16343;var statearr_16354_16373 = state_16343__$1;(statearr_16354_16373[(2)] = inst_16328);
(statearr_16354_16373[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16344 === (10)))
{var inst_16336 = (state_16343[(2)]);var state_16343__$1 = (function (){var statearr_16355 = state_16343;(statearr_16355[(8)] = inst_16336);
return statearr_16355;
})();var statearr_16356_16374 = state_16343__$1;(statearr_16356_16374[(2)] = null);
(statearr_16356_16374[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16344 === (8)))
{var inst_16325 = (state_16343[(7)]);var state_16343__$1 = state_16343;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16343__$1,(11),out,inst_16325);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6588__auto___16364,out))
;return ((function (switch__6573__auto__,c__6588__auto___16364,out){
return (function() {
var state_machine__6574__auto__ = null;
var state_machine__6574__auto____0 = (function (){var statearr_16360 = [null,null,null,null,null,null,null,null,null];(statearr_16360[(0)] = state_machine__6574__auto__);
(statearr_16360[(1)] = (1));
return statearr_16360;
});
var state_machine__6574__auto____1 = (function (state_16343){while(true){
var ret_value__6575__auto__ = (function (){try{while(true){
var result__6576__auto__ = switch__6573__auto__.call(null,state_16343);if(cljs.core.keyword_identical_QMARK_.call(null,result__6576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6576__auto__;
}
break;
}
}catch (e16361){if((e16361 instanceof Object))
{var ex__6577__auto__ = e16361;var statearr_16362_16375 = state_16343;(statearr_16362_16375[(5)] = ex__6577__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16343);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16361;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16376 = state_16343;
state_16343 = G__16376;
continue;
}
} else
{return ret_value__6575__auto__;
}
break;
}
});
state_machine__6574__auto__ = function(state_16343){
switch(arguments.length){
case 0:
return state_machine__6574__auto____0.call(this);
case 1:
return state_machine__6574__auto____1.call(this,state_16343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6574__auto____0;
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6574__auto____1;
return state_machine__6574__auto__;
})()
;})(switch__6573__auto__,c__6588__auto___16364,out))
})();var state__6590__auto__ = (function (){var statearr_16363 = f__6589__auto__.call(null);(statearr_16363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6588__auto___16364);
return statearr_16363;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6590__auto__);
});})(c__6588__auto___16364,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6588__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6588__auto__){
return (function (){var f__6589__auto__ = (function (){var switch__6573__auto__ = ((function (c__6588__auto__){
return (function (state_16542){var state_val_16543 = (state_16542[(1)]);if((state_val_16543 === (7)))
{var inst_16538 = (state_16542[(2)]);var state_16542__$1 = state_16542;var statearr_16544_16585 = state_16542__$1;(statearr_16544_16585[(2)] = inst_16538);
(statearr_16544_16585[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16543 === (20)))
{var inst_16508 = (state_16542[(7)]);var inst_16519 = (state_16542[(2)]);var inst_16520 = cljs.core.next.call(null,inst_16508);var inst_16494 = inst_16520;var inst_16495 = null;var inst_16496 = (0);var inst_16497 = (0);var state_16542__$1 = (function (){var statearr_16545 = state_16542;(statearr_16545[(8)] = inst_16519);
(statearr_16545[(9)] = inst_16494);
(statearr_16545[(10)] = inst_16497);
(statearr_16545[(11)] = inst_16496);
(statearr_16545[(12)] = inst_16495);
return statearr_16545;
})();var statearr_16546_16586 = state_16542__$1;(statearr_16546_16586[(2)] = null);
(statearr_16546_16586[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16543 === (1)))
{var state_16542__$1 = state_16542;var statearr_16547_16587 = state_16542__$1;(statearr_16547_16587[(2)] = null);
(statearr_16547_16587[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16543 === (4)))
{var inst_16483 = (state_16542[(13)]);var inst_16483__$1 = (state_16542[(2)]);var inst_16484 = (inst_16483__$1 == null);var state_16542__$1 = (function (){var statearr_16548 = state_16542;(statearr_16548[(13)] = inst_16483__$1);
return statearr_16548;
})();if(cljs.core.truth_(inst_16484))
{var statearr_16549_16588 = state_16542__$1;(statearr_16549_16588[(1)] = (5));
} else
{var statearr_16550_16589 = state_16542__$1;(statearr_16550_16589[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16543 === (15)))
{var state_16542__$1 = state_16542;var statearr_16554_16590 = state_16542__$1;(statearr_16554_16590[(2)] = null);
(statearr_16554_16590[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16543 === (21)))
{var state_16542__$1 = state_16542;var statearr_16555_16591 = state_16542__$1;(statearr_16555_16591[(2)] = null);
(statearr_16555_16591[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16543 === (13)))
{var inst_16494 = (state_16542[(9)]);var inst_16497 = (state_16542[(10)]);var inst_16496 = (state_16542[(11)]);var inst_16495 = (state_16542[(12)]);var inst_16504 = (state_16542[(2)]);var inst_16505 = (inst_16497 + (1));var tmp16551 = inst_16494;var tmp16552 = inst_16496;var tmp16553 = inst_16495;var inst_16494__$1 = tmp16551;var inst_16495__$1 = tmp16553;var inst_16496__$1 = tmp16552;var inst_16497__$1 = inst_16505;var state_16542__$1 = (function (){var statearr_16556 = state_16542;(statearr_16556[(9)] = inst_16494__$1);
(statearr_16556[(10)] = inst_16497__$1);
(statearr_16556[(14)] = inst_16504);
(statearr_16556[(11)] = inst_16496__$1);
(statearr_16556[(12)] = inst_16495__$1);
return statearr_16556;
})();var statearr_16557_16592 = state_16542__$1;(statearr_16557_16592[(2)] = null);
(statearr_16557_16592[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16543 === (22)))
{var state_16542__$1 = state_16542;var statearr_16558_16593 = state_16542__$1;(statearr_16558_16593[(2)] = null);
(statearr_16558_16593[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16543 === (6)))
{var inst_16483 = (state_16542[(13)]);var inst_16492 = f.call(null,inst_16483);var inst_16493 = cljs.core.seq.call(null,inst_16492);var inst_16494 = inst_16493;var inst_16495 = null;var inst_16496 = (0);var inst_16497 = (0);var state_16542__$1 = (function (){var statearr_16559 = state_16542;(statearr_16559[(9)] = inst_16494);
(statearr_16559[(10)] = inst_16497);
(statearr_16559[(11)] = inst_16496);
(statearr_16559[(12)] = inst_16495);
return statearr_16559;
})();var statearr_16560_16594 = state_16542__$1;(statearr_16560_16594[(2)] = null);
(statearr_16560_16594[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16543 === (17)))
{var inst_16508 = (state_16542[(7)]);var inst_16512 = cljs.core.chunk_first.call(null,inst_16508);var inst_16513 = cljs.core.chunk_rest.call(null,inst_16508);var inst_16514 = cljs.core.count.call(null,inst_16512);var inst_16494 = inst_16513;var inst_16495 = inst_16512;var inst_16496 = inst_16514;var inst_16497 = (0);var state_16542__$1 = (function (){var statearr_16561 = state_16542;(statearr_16561[(9)] = inst_16494);
(statearr_16561[(10)] = inst_16497);
(statearr_16561[(11)] = inst_16496);
(statearr_16561[(12)] = inst_16495);
return statearr_16561;
})();var statearr_16562_16595 = state_16542__$1;(statearr_16562_16595[(2)] = null);
(statearr_16562_16595[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16543 === (3)))
{var inst_16540 = (state_16542[(2)]);var state_16542__$1 = state_16542;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16542__$1,inst_16540);
} else
{if((state_val_16543 === (12)))
{var inst_16528 = (state_16542[(2)]);var state_16542__$1 = state_16542;var statearr_16563_16596 = state_16542__$1;(statearr_16563_16596[(2)] = inst_16528);
(statearr_16563_16596[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16543 === (2)))
{var state_16542__$1 = state_16542;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16542__$1,(4),in$);
} else
{if((state_val_16543 === (23)))
{var inst_16536 = (state_16542[(2)]);var state_16542__$1 = state_16542;var statearr_16564_16597 = state_16542__$1;(statearr_16564_16597[(2)] = inst_16536);
(statearr_16564_16597[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16543 === (19)))
{var inst_16523 = (state_16542[(2)]);var state_16542__$1 = state_16542;var statearr_16565_16598 = state_16542__$1;(statearr_16565_16598[(2)] = inst_16523);
(statearr_16565_16598[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16543 === (11)))
{var inst_16494 = (state_16542[(9)]);var inst_16508 = (state_16542[(7)]);var inst_16508__$1 = cljs.core.seq.call(null,inst_16494);var state_16542__$1 = (function (){var statearr_16566 = state_16542;(statearr_16566[(7)] = inst_16508__$1);
return statearr_16566;
})();if(inst_16508__$1)
{var statearr_16567_16599 = state_16542__$1;(statearr_16567_16599[(1)] = (14));
} else
{var statearr_16568_16600 = state_16542__$1;(statearr_16568_16600[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16543 === (9)))
{var inst_16530 = (state_16542[(2)]);var inst_16531 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_16542__$1 = (function (){var statearr_16569 = state_16542;(statearr_16569[(15)] = inst_16530);
return statearr_16569;
})();if(cljs.core.truth_(inst_16531))
{var statearr_16570_16601 = state_16542__$1;(statearr_16570_16601[(1)] = (21));
} else
{var statearr_16571_16602 = state_16542__$1;(statearr_16571_16602[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16543 === (5)))
{var inst_16486 = cljs.core.async.close_BANG_.call(null,out);var state_16542__$1 = state_16542;var statearr_16572_16603 = state_16542__$1;(statearr_16572_16603[(2)] = inst_16486);
(statearr_16572_16603[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16543 === (14)))
{var inst_16508 = (state_16542[(7)]);var inst_16510 = cljs.core.chunked_seq_QMARK_.call(null,inst_16508);var state_16542__$1 = state_16542;if(inst_16510)
{var statearr_16573_16604 = state_16542__$1;(statearr_16573_16604[(1)] = (17));
} else
{var statearr_16574_16605 = state_16542__$1;(statearr_16574_16605[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16543 === (16)))
{var inst_16526 = (state_16542[(2)]);var state_16542__$1 = state_16542;var statearr_16575_16606 = state_16542__$1;(statearr_16575_16606[(2)] = inst_16526);
(statearr_16575_16606[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16543 === (10)))
{var inst_16497 = (state_16542[(10)]);var inst_16495 = (state_16542[(12)]);var inst_16502 = cljs.core._nth.call(null,inst_16495,inst_16497);var state_16542__$1 = state_16542;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16542__$1,(13),out,inst_16502);
} else
{if((state_val_16543 === (18)))
{var inst_16508 = (state_16542[(7)]);var inst_16517 = cljs.core.first.call(null,inst_16508);var state_16542__$1 = state_16542;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16542__$1,(20),out,inst_16517);
} else
{if((state_val_16543 === (8)))
{var inst_16497 = (state_16542[(10)]);var inst_16496 = (state_16542[(11)]);var inst_16499 = (inst_16497 < inst_16496);var inst_16500 = inst_16499;var state_16542__$1 = state_16542;if(cljs.core.truth_(inst_16500))
{var statearr_16576_16607 = state_16542__$1;(statearr_16576_16607[(1)] = (10));
} else
{var statearr_16577_16608 = state_16542__$1;(statearr_16577_16608[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6588__auto__))
;return ((function (switch__6573__auto__,c__6588__auto__){
return (function() {
var state_machine__6574__auto__ = null;
var state_machine__6574__auto____0 = (function (){var statearr_16581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16581[(0)] = state_machine__6574__auto__);
(statearr_16581[(1)] = (1));
return statearr_16581;
});
var state_machine__6574__auto____1 = (function (state_16542){while(true){
var ret_value__6575__auto__ = (function (){try{while(true){
var result__6576__auto__ = switch__6573__auto__.call(null,state_16542);if(cljs.core.keyword_identical_QMARK_.call(null,result__6576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6576__auto__;
}
break;
}
}catch (e16582){if((e16582 instanceof Object))
{var ex__6577__auto__ = e16582;var statearr_16583_16609 = state_16542;(statearr_16583_16609[(5)] = ex__6577__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16542);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16582;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16610 = state_16542;
state_16542 = G__16610;
continue;
}
} else
{return ret_value__6575__auto__;
}
break;
}
});
state_machine__6574__auto__ = function(state_16542){
switch(arguments.length){
case 0:
return state_machine__6574__auto____0.call(this);
case 1:
return state_machine__6574__auto____1.call(this,state_16542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6574__auto____0;
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6574__auto____1;
return state_machine__6574__auto__;
})()
;})(switch__6573__auto__,c__6588__auto__))
})();var state__6590__auto__ = (function (){var statearr_16584 = f__6589__auto__.call(null);(statearr_16584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6588__auto__);
return statearr_16584;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6590__auto__);
});})(c__6588__auto__))
);
return c__6588__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6588__auto___16707 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6588__auto___16707,out){
return (function (){var f__6589__auto__ = (function (){var switch__6573__auto__ = ((function (c__6588__auto___16707,out){
return (function (state_16682){var state_val_16683 = (state_16682[(1)]);if((state_val_16683 === (7)))
{var inst_16677 = (state_16682[(2)]);var state_16682__$1 = state_16682;var statearr_16684_16708 = state_16682__$1;(statearr_16684_16708[(2)] = inst_16677);
(statearr_16684_16708[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16683 === (1)))
{var inst_16659 = null;var state_16682__$1 = (function (){var statearr_16685 = state_16682;(statearr_16685[(7)] = inst_16659);
return statearr_16685;
})();var statearr_16686_16709 = state_16682__$1;(statearr_16686_16709[(2)] = null);
(statearr_16686_16709[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16683 === (4)))
{var inst_16662 = (state_16682[(8)]);var inst_16662__$1 = (state_16682[(2)]);var inst_16663 = (inst_16662__$1 == null);var inst_16664 = cljs.core.not.call(null,inst_16663);var state_16682__$1 = (function (){var statearr_16687 = state_16682;(statearr_16687[(8)] = inst_16662__$1);
return statearr_16687;
})();if(inst_16664)
{var statearr_16688_16710 = state_16682__$1;(statearr_16688_16710[(1)] = (5));
} else
{var statearr_16689_16711 = state_16682__$1;(statearr_16689_16711[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16683 === (6)))
{var state_16682__$1 = state_16682;var statearr_16690_16712 = state_16682__$1;(statearr_16690_16712[(2)] = null);
(statearr_16690_16712[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16683 === (3)))
{var inst_16679 = (state_16682[(2)]);var inst_16680 = cljs.core.async.close_BANG_.call(null,out);var state_16682__$1 = (function (){var statearr_16691 = state_16682;(statearr_16691[(9)] = inst_16679);
return statearr_16691;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16682__$1,inst_16680);
} else
{if((state_val_16683 === (2)))
{var state_16682__$1 = state_16682;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16682__$1,(4),ch);
} else
{if((state_val_16683 === (11)))
{var inst_16662 = (state_16682[(8)]);var inst_16671 = (state_16682[(2)]);var inst_16659 = inst_16662;var state_16682__$1 = (function (){var statearr_16692 = state_16682;(statearr_16692[(7)] = inst_16659);
(statearr_16692[(10)] = inst_16671);
return statearr_16692;
})();var statearr_16693_16713 = state_16682__$1;(statearr_16693_16713[(2)] = null);
(statearr_16693_16713[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16683 === (9)))
{var inst_16662 = (state_16682[(8)]);var state_16682__$1 = state_16682;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16682__$1,(11),out,inst_16662);
} else
{if((state_val_16683 === (5)))
{var inst_16659 = (state_16682[(7)]);var inst_16662 = (state_16682[(8)]);var inst_16666 = cljs.core._EQ_.call(null,inst_16662,inst_16659);var state_16682__$1 = state_16682;if(inst_16666)
{var statearr_16695_16714 = state_16682__$1;(statearr_16695_16714[(1)] = (8));
} else
{var statearr_16696_16715 = state_16682__$1;(statearr_16696_16715[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16683 === (10)))
{var inst_16674 = (state_16682[(2)]);var state_16682__$1 = state_16682;var statearr_16697_16716 = state_16682__$1;(statearr_16697_16716[(2)] = inst_16674);
(statearr_16697_16716[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16683 === (8)))
{var inst_16659 = (state_16682[(7)]);var tmp16694 = inst_16659;var inst_16659__$1 = tmp16694;var state_16682__$1 = (function (){var statearr_16698 = state_16682;(statearr_16698[(7)] = inst_16659__$1);
return statearr_16698;
})();var statearr_16699_16717 = state_16682__$1;(statearr_16699_16717[(2)] = null);
(statearr_16699_16717[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6588__auto___16707,out))
;return ((function (switch__6573__auto__,c__6588__auto___16707,out){
return (function() {
var state_machine__6574__auto__ = null;
var state_machine__6574__auto____0 = (function (){var statearr_16703 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16703[(0)] = state_machine__6574__auto__);
(statearr_16703[(1)] = (1));
return statearr_16703;
});
var state_machine__6574__auto____1 = (function (state_16682){while(true){
var ret_value__6575__auto__ = (function (){try{while(true){
var result__6576__auto__ = switch__6573__auto__.call(null,state_16682);if(cljs.core.keyword_identical_QMARK_.call(null,result__6576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6576__auto__;
}
break;
}
}catch (e16704){if((e16704 instanceof Object))
{var ex__6577__auto__ = e16704;var statearr_16705_16718 = state_16682;(statearr_16705_16718[(5)] = ex__6577__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16682);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16704;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16719 = state_16682;
state_16682 = G__16719;
continue;
}
} else
{return ret_value__6575__auto__;
}
break;
}
});
state_machine__6574__auto__ = function(state_16682){
switch(arguments.length){
case 0:
return state_machine__6574__auto____0.call(this);
case 1:
return state_machine__6574__auto____1.call(this,state_16682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6574__auto____0;
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6574__auto____1;
return state_machine__6574__auto__;
})()
;})(switch__6573__auto__,c__6588__auto___16707,out))
})();var state__6590__auto__ = (function (){var statearr_16706 = f__6589__auto__.call(null);(statearr_16706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6588__auto___16707);
return statearr_16706;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6590__auto__);
});})(c__6588__auto___16707,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6588__auto___16854 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6588__auto___16854,out){
return (function (){var f__6589__auto__ = (function (){var switch__6573__auto__ = ((function (c__6588__auto___16854,out){
return (function (state_16824){var state_val_16825 = (state_16824[(1)]);if((state_val_16825 === (7)))
{var inst_16820 = (state_16824[(2)]);var state_16824__$1 = state_16824;var statearr_16826_16855 = state_16824__$1;(statearr_16826_16855[(2)] = inst_16820);
(statearr_16826_16855[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16825 === (1)))
{var inst_16787 = (new Array(n));var inst_16788 = inst_16787;var inst_16789 = (0);var state_16824__$1 = (function (){var statearr_16827 = state_16824;(statearr_16827[(7)] = inst_16788);
(statearr_16827[(8)] = inst_16789);
return statearr_16827;
})();var statearr_16828_16856 = state_16824__$1;(statearr_16828_16856[(2)] = null);
(statearr_16828_16856[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16825 === (4)))
{var inst_16792 = (state_16824[(9)]);var inst_16792__$1 = (state_16824[(2)]);var inst_16793 = (inst_16792__$1 == null);var inst_16794 = cljs.core.not.call(null,inst_16793);var state_16824__$1 = (function (){var statearr_16829 = state_16824;(statearr_16829[(9)] = inst_16792__$1);
return statearr_16829;
})();if(inst_16794)
{var statearr_16830_16857 = state_16824__$1;(statearr_16830_16857[(1)] = (5));
} else
{var statearr_16831_16858 = state_16824__$1;(statearr_16831_16858[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16825 === (15)))
{var inst_16814 = (state_16824[(2)]);var state_16824__$1 = state_16824;var statearr_16832_16859 = state_16824__$1;(statearr_16832_16859[(2)] = inst_16814);
(statearr_16832_16859[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16825 === (13)))
{var state_16824__$1 = state_16824;var statearr_16833_16860 = state_16824__$1;(statearr_16833_16860[(2)] = null);
(statearr_16833_16860[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16825 === (6)))
{var inst_16789 = (state_16824[(8)]);var inst_16810 = (inst_16789 > (0));var state_16824__$1 = state_16824;if(cljs.core.truth_(inst_16810))
{var statearr_16834_16861 = state_16824__$1;(statearr_16834_16861[(1)] = (12));
} else
{var statearr_16835_16862 = state_16824__$1;(statearr_16835_16862[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16825 === (3)))
{var inst_16822 = (state_16824[(2)]);var state_16824__$1 = state_16824;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16824__$1,inst_16822);
} else
{if((state_val_16825 === (12)))
{var inst_16788 = (state_16824[(7)]);var inst_16812 = cljs.core.vec.call(null,inst_16788);var state_16824__$1 = state_16824;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16824__$1,(15),out,inst_16812);
} else
{if((state_val_16825 === (2)))
{var state_16824__$1 = state_16824;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16824__$1,(4),ch);
} else
{if((state_val_16825 === (11)))
{var inst_16804 = (state_16824[(2)]);var inst_16805 = (new Array(n));var inst_16788 = inst_16805;var inst_16789 = (0);var state_16824__$1 = (function (){var statearr_16836 = state_16824;(statearr_16836[(7)] = inst_16788);
(statearr_16836[(8)] = inst_16789);
(statearr_16836[(10)] = inst_16804);
return statearr_16836;
})();var statearr_16837_16863 = state_16824__$1;(statearr_16837_16863[(2)] = null);
(statearr_16837_16863[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16825 === (9)))
{var inst_16788 = (state_16824[(7)]);var inst_16802 = cljs.core.vec.call(null,inst_16788);var state_16824__$1 = state_16824;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16824__$1,(11),out,inst_16802);
} else
{if((state_val_16825 === (5)))
{var inst_16788 = (state_16824[(7)]);var inst_16789 = (state_16824[(8)]);var inst_16792 = (state_16824[(9)]);var inst_16797 = (state_16824[(11)]);var inst_16796 = (inst_16788[inst_16789] = inst_16792);var inst_16797__$1 = (inst_16789 + (1));var inst_16798 = (inst_16797__$1 < n);var state_16824__$1 = (function (){var statearr_16838 = state_16824;(statearr_16838[(12)] = inst_16796);
(statearr_16838[(11)] = inst_16797__$1);
return statearr_16838;
})();if(cljs.core.truth_(inst_16798))
{var statearr_16839_16864 = state_16824__$1;(statearr_16839_16864[(1)] = (8));
} else
{var statearr_16840_16865 = state_16824__$1;(statearr_16840_16865[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16825 === (14)))
{var inst_16817 = (state_16824[(2)]);var inst_16818 = cljs.core.async.close_BANG_.call(null,out);var state_16824__$1 = (function (){var statearr_16842 = state_16824;(statearr_16842[(13)] = inst_16817);
return statearr_16842;
})();var statearr_16843_16866 = state_16824__$1;(statearr_16843_16866[(2)] = inst_16818);
(statearr_16843_16866[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16825 === (10)))
{var inst_16808 = (state_16824[(2)]);var state_16824__$1 = state_16824;var statearr_16844_16867 = state_16824__$1;(statearr_16844_16867[(2)] = inst_16808);
(statearr_16844_16867[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16825 === (8)))
{var inst_16788 = (state_16824[(7)]);var inst_16797 = (state_16824[(11)]);var tmp16841 = inst_16788;var inst_16788__$1 = tmp16841;var inst_16789 = inst_16797;var state_16824__$1 = (function (){var statearr_16845 = state_16824;(statearr_16845[(7)] = inst_16788__$1);
(statearr_16845[(8)] = inst_16789);
return statearr_16845;
})();var statearr_16846_16868 = state_16824__$1;(statearr_16846_16868[(2)] = null);
(statearr_16846_16868[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6588__auto___16854,out))
;return ((function (switch__6573__auto__,c__6588__auto___16854,out){
return (function() {
var state_machine__6574__auto__ = null;
var state_machine__6574__auto____0 = (function (){var statearr_16850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16850[(0)] = state_machine__6574__auto__);
(statearr_16850[(1)] = (1));
return statearr_16850;
});
var state_machine__6574__auto____1 = (function (state_16824){while(true){
var ret_value__6575__auto__ = (function (){try{while(true){
var result__6576__auto__ = switch__6573__auto__.call(null,state_16824);if(cljs.core.keyword_identical_QMARK_.call(null,result__6576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6576__auto__;
}
break;
}
}catch (e16851){if((e16851 instanceof Object))
{var ex__6577__auto__ = e16851;var statearr_16852_16869 = state_16824;(statearr_16852_16869[(5)] = ex__6577__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16824);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16851;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16870 = state_16824;
state_16824 = G__16870;
continue;
}
} else
{return ret_value__6575__auto__;
}
break;
}
});
state_machine__6574__auto__ = function(state_16824){
switch(arguments.length){
case 0:
return state_machine__6574__auto____0.call(this);
case 1:
return state_machine__6574__auto____1.call(this,state_16824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6574__auto____0;
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6574__auto____1;
return state_machine__6574__auto__;
})()
;})(switch__6573__auto__,c__6588__auto___16854,out))
})();var state__6590__auto__ = (function (){var statearr_16853 = f__6589__auto__.call(null);(statearr_16853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6588__auto___16854);
return statearr_16853;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6590__auto__);
});})(c__6588__auto___16854,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6588__auto___17013 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6588__auto___17013,out){
return (function (){var f__6589__auto__ = (function (){var switch__6573__auto__ = ((function (c__6588__auto___17013,out){
return (function (state_16983){var state_val_16984 = (state_16983[(1)]);if((state_val_16984 === (7)))
{var inst_16979 = (state_16983[(2)]);var state_16983__$1 = state_16983;var statearr_16985_17014 = state_16983__$1;(statearr_16985_17014[(2)] = inst_16979);
(statearr_16985_17014[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16984 === (1)))
{var inst_16942 = [];var inst_16943 = inst_16942;var inst_16944 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_16983__$1 = (function (){var statearr_16986 = state_16983;(statearr_16986[(7)] = inst_16944);
(statearr_16986[(8)] = inst_16943);
return statearr_16986;
})();var statearr_16987_17015 = state_16983__$1;(statearr_16987_17015[(2)] = null);
(statearr_16987_17015[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16984 === (4)))
{var inst_16947 = (state_16983[(9)]);var inst_16947__$1 = (state_16983[(2)]);var inst_16948 = (inst_16947__$1 == null);var inst_16949 = cljs.core.not.call(null,inst_16948);var state_16983__$1 = (function (){var statearr_16988 = state_16983;(statearr_16988[(9)] = inst_16947__$1);
return statearr_16988;
})();if(inst_16949)
{var statearr_16989_17016 = state_16983__$1;(statearr_16989_17016[(1)] = (5));
} else
{var statearr_16990_17017 = state_16983__$1;(statearr_16990_17017[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16984 === (15)))
{var inst_16973 = (state_16983[(2)]);var state_16983__$1 = state_16983;var statearr_16991_17018 = state_16983__$1;(statearr_16991_17018[(2)] = inst_16973);
(statearr_16991_17018[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16984 === (13)))
{var state_16983__$1 = state_16983;var statearr_16992_17019 = state_16983__$1;(statearr_16992_17019[(2)] = null);
(statearr_16992_17019[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16984 === (6)))
{var inst_16943 = (state_16983[(8)]);var inst_16968 = inst_16943.length;var inst_16969 = (inst_16968 > (0));var state_16983__$1 = state_16983;if(cljs.core.truth_(inst_16969))
{var statearr_16993_17020 = state_16983__$1;(statearr_16993_17020[(1)] = (12));
} else
{var statearr_16994_17021 = state_16983__$1;(statearr_16994_17021[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16984 === (3)))
{var inst_16981 = (state_16983[(2)]);var state_16983__$1 = state_16983;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16983__$1,inst_16981);
} else
{if((state_val_16984 === (12)))
{var inst_16943 = (state_16983[(8)]);var inst_16971 = cljs.core.vec.call(null,inst_16943);var state_16983__$1 = state_16983;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16983__$1,(15),out,inst_16971);
} else
{if((state_val_16984 === (2)))
{var state_16983__$1 = state_16983;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16983__$1,(4),ch);
} else
{if((state_val_16984 === (11)))
{var inst_16951 = (state_16983[(10)]);var inst_16947 = (state_16983[(9)]);var inst_16961 = (state_16983[(2)]);var inst_16962 = [];var inst_16963 = inst_16962.push(inst_16947);var inst_16943 = inst_16962;var inst_16944 = inst_16951;var state_16983__$1 = (function (){var statearr_16995 = state_16983;(statearr_16995[(11)] = inst_16961);
(statearr_16995[(7)] = inst_16944);
(statearr_16995[(8)] = inst_16943);
(statearr_16995[(12)] = inst_16963);
return statearr_16995;
})();var statearr_16996_17022 = state_16983__$1;(statearr_16996_17022[(2)] = null);
(statearr_16996_17022[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16984 === (9)))
{var inst_16943 = (state_16983[(8)]);var inst_16959 = cljs.core.vec.call(null,inst_16943);var state_16983__$1 = state_16983;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16983__$1,(11),out,inst_16959);
} else
{if((state_val_16984 === (5)))
{var inst_16951 = (state_16983[(10)]);var inst_16944 = (state_16983[(7)]);var inst_16947 = (state_16983[(9)]);var inst_16951__$1 = f.call(null,inst_16947);var inst_16952 = cljs.core._EQ_.call(null,inst_16951__$1,inst_16944);var inst_16953 = cljs.core.keyword_identical_QMARK_.call(null,inst_16944,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_16954 = (inst_16952) || (inst_16953);var state_16983__$1 = (function (){var statearr_16997 = state_16983;(statearr_16997[(10)] = inst_16951__$1);
return statearr_16997;
})();if(cljs.core.truth_(inst_16954))
{var statearr_16998_17023 = state_16983__$1;(statearr_16998_17023[(1)] = (8));
} else
{var statearr_16999_17024 = state_16983__$1;(statearr_16999_17024[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16984 === (14)))
{var inst_16976 = (state_16983[(2)]);var inst_16977 = cljs.core.async.close_BANG_.call(null,out);var state_16983__$1 = (function (){var statearr_17001 = state_16983;(statearr_17001[(13)] = inst_16976);
return statearr_17001;
})();var statearr_17002_17025 = state_16983__$1;(statearr_17002_17025[(2)] = inst_16977);
(statearr_17002_17025[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16984 === (10)))
{var inst_16966 = (state_16983[(2)]);var state_16983__$1 = state_16983;var statearr_17003_17026 = state_16983__$1;(statearr_17003_17026[(2)] = inst_16966);
(statearr_17003_17026[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16984 === (8)))
{var inst_16951 = (state_16983[(10)]);var inst_16943 = (state_16983[(8)]);var inst_16947 = (state_16983[(9)]);var inst_16956 = inst_16943.push(inst_16947);var tmp17000 = inst_16943;var inst_16943__$1 = tmp17000;var inst_16944 = inst_16951;var state_16983__$1 = (function (){var statearr_17004 = state_16983;(statearr_17004[(7)] = inst_16944);
(statearr_17004[(8)] = inst_16943__$1);
(statearr_17004[(14)] = inst_16956);
return statearr_17004;
})();var statearr_17005_17027 = state_16983__$1;(statearr_17005_17027[(2)] = null);
(statearr_17005_17027[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6588__auto___17013,out))
;return ((function (switch__6573__auto__,c__6588__auto___17013,out){
return (function() {
var state_machine__6574__auto__ = null;
var state_machine__6574__auto____0 = (function (){var statearr_17009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17009[(0)] = state_machine__6574__auto__);
(statearr_17009[(1)] = (1));
return statearr_17009;
});
var state_machine__6574__auto____1 = (function (state_16983){while(true){
var ret_value__6575__auto__ = (function (){try{while(true){
var result__6576__auto__ = switch__6573__auto__.call(null,state_16983);if(cljs.core.keyword_identical_QMARK_.call(null,result__6576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6576__auto__;
}
break;
}
}catch (e17010){if((e17010 instanceof Object))
{var ex__6577__auto__ = e17010;var statearr_17011_17028 = state_16983;(statearr_17011_17028[(5)] = ex__6577__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16983);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17010;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17029 = state_16983;
state_16983 = G__17029;
continue;
}
} else
{return ret_value__6575__auto__;
}
break;
}
});
state_machine__6574__auto__ = function(state_16983){
switch(arguments.length){
case 0:
return state_machine__6574__auto____0.call(this);
case 1:
return state_machine__6574__auto____1.call(this,state_16983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6574__auto____0;
state_machine__6574__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6574__auto____1;
return state_machine__6574__auto__;
})()
;})(switch__6573__auto__,c__6588__auto___17013,out))
})();var state__6590__auto__ = (function (){var statearr_17012 = f__6589__auto__.call(null);(statearr_17012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6588__auto___17013);
return statearr_17012;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6590__auto__);
});})(c__6588__auto___17013,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map