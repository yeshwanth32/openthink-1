// Compiled by ClojureScript 0.0-2511
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t24863 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24863 = (function (f,fn_handler,meta24864){
this.f = f;
this.fn_handler = fn_handler;
this.meta24864 = meta24864;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24863.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24863.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t24863.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t24863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24865){
var self__ = this;
var _24865__$1 = this;
return self__.meta24864;
});

cljs.core.async.t24863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24865,meta24864__$1){
var self__ = this;
var _24865__$1 = this;
return (new cljs.core.async.t24863(self__.f,self__.fn_handler,meta24864__$1));
});

cljs.core.async.t24863.cljs$lang$type = true;

cljs.core.async.t24863.cljs$lang$ctorStr = "cljs.core.async/t24863";

cljs.core.async.t24863.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t24863");
});

cljs.core.async.__GT_t24863 = (function __GT_t24863(f__$1,fn_handler__$1,meta24864){
return (new cljs.core.async.t24863(f__$1,fn_handler__$1,meta24864));
});

}

return (new cljs.core.async.t24863(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/../server/static/out/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__24867 = buff;
if(G__24867){
var bit__4319__auto__ = null;
if(cljs.core.truth_((function (){var or__3638__auto__ = bit__4319__auto__;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return G__24867.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__24867.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24867);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24867);
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
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

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
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24868 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24868);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24868,ret){
return (function (){
return fn1.call(null,val_24868);
});})(val_24868,ret))
);
}
} else {
}

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
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
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
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4525__auto___24869 = n;
var x_24870 = (0);
while(true){
if((x_24870 < n__4525__auto___24869)){
(a[x_24870] = (0));

var G__24871 = (x_24870 + (1));
x_24870 = G__24871;
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

var G__24872 = (i + (1));
i = G__24872;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t24876 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24876 = (function (flag,alt_flag,meta24877){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24877 = meta24877;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24876.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24876.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t24876.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t24876.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24878){
var self__ = this;
var _24878__$1 = this;
return self__.meta24877;
});})(flag))
;

cljs.core.async.t24876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24878,meta24877__$1){
var self__ = this;
var _24878__$1 = this;
return (new cljs.core.async.t24876(self__.flag,self__.alt_flag,meta24877__$1));
});})(flag))
;

cljs.core.async.t24876.cljs$lang$type = true;

cljs.core.async.t24876.cljs$lang$ctorStr = "cljs.core.async/t24876";

cljs.core.async.t24876.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t24876");
});})(flag))
;

cljs.core.async.__GT_t24876 = ((function (flag){
return (function __GT_t24876(flag__$1,alt_flag__$1,meta24877){
return (new cljs.core.async.t24876(flag__$1,alt_flag__$1,meta24877));
});})(flag))
;

}

return (new cljs.core.async.t24876(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/../server/static/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t24882 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24882 = (function (cb,flag,alt_handler,meta24883){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24883 = meta24883;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24882.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24882.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t24882.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t24882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24884){
var self__ = this;
var _24884__$1 = this;
return self__.meta24883;
});

cljs.core.async.t24882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24884,meta24883__$1){
var self__ = this;
var _24884__$1 = this;
return (new cljs.core.async.t24882(self__.cb,self__.flag,self__.alt_handler,meta24883__$1));
});

cljs.core.async.t24882.cljs$lang$type = true;

cljs.core.async.t24882.cljs$lang$ctorStr = "cljs.core.async/t24882";

cljs.core.async.t24882.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t24882");
});

cljs.core.async.__GT_t24882 = (function __GT_t24882(cb__$1,flag__$1,alt_handler__$1,meta24883){
return (new cljs.core.async.t24882(cb__$1,flag__$1,alt_handler__$1,meta24883));
});

}

return (new cljs.core.async.t24882(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/../server/static/out/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
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
return (function (p1__24885_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24885_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24886_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24886_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3638__auto__ = wport;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24887 = (i + (1));
i = G__24887;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3638__auto__ = ret;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3626__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3626__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3626__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
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
var alts_BANG___delegate = function (ports,p__24888){
var map__24890 = p__24888;
var map__24890__$1 = ((cljs.core.seq_QMARK_.call(null,map__24890))?cljs.core.apply.call(null,cljs.core.hash_map,map__24890):map__24890);
var opts = map__24890__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__24888 = null;
if (arguments.length > 1) {
  p__24888 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__24888);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24891){
var ports = cljs.core.first(arglist__24891);
var p__24888 = cljs.core.rest(arglist__24891);
return alts_BANG___delegate(ports,p__24888);
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
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__8633__auto___24986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto___24986){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto___24986){
return (function (state_24962){
var state_val_24963 = (state_24962[(1)]);
if((state_val_24963 === (7))){
var inst_24958 = (state_24962[(2)]);
var state_24962__$1 = state_24962;
var statearr_24964_24987 = state_24962__$1;
(statearr_24964_24987[(2)] = inst_24958);

(statearr_24964_24987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (1))){
var state_24962__$1 = state_24962;
var statearr_24965_24988 = state_24962__$1;
(statearr_24965_24988[(2)] = null);

(statearr_24965_24988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (4))){
var inst_24941 = (state_24962[(7)]);
var inst_24941__$1 = (state_24962[(2)]);
var inst_24942 = (inst_24941__$1 == null);
var state_24962__$1 = (function (){var statearr_24966 = state_24962;
(statearr_24966[(7)] = inst_24941__$1);

return statearr_24966;
})();
if(cljs.core.truth_(inst_24942)){
var statearr_24967_24989 = state_24962__$1;
(statearr_24967_24989[(1)] = (5));

} else {
var statearr_24968_24990 = state_24962__$1;
(statearr_24968_24990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (13))){
var state_24962__$1 = state_24962;
var statearr_24969_24991 = state_24962__$1;
(statearr_24969_24991[(2)] = null);

(statearr_24969_24991[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (6))){
var inst_24941 = (state_24962[(7)]);
var state_24962__$1 = state_24962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24962__$1,(11),to,inst_24941);
} else {
if((state_val_24963 === (3))){
var inst_24960 = (state_24962[(2)]);
var state_24962__$1 = state_24962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24962__$1,inst_24960);
} else {
if((state_val_24963 === (12))){
var state_24962__$1 = state_24962;
var statearr_24970_24992 = state_24962__$1;
(statearr_24970_24992[(2)] = null);

(statearr_24970_24992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (2))){
var state_24962__$1 = state_24962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24962__$1,(4),from);
} else {
if((state_val_24963 === (11))){
var inst_24951 = (state_24962[(2)]);
var state_24962__$1 = state_24962;
if(cljs.core.truth_(inst_24951)){
var statearr_24971_24993 = state_24962__$1;
(statearr_24971_24993[(1)] = (12));

} else {
var statearr_24972_24994 = state_24962__$1;
(statearr_24972_24994[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (9))){
var state_24962__$1 = state_24962;
var statearr_24973_24995 = state_24962__$1;
(statearr_24973_24995[(2)] = null);

(statearr_24973_24995[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (5))){
var state_24962__$1 = state_24962;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24974_24996 = state_24962__$1;
(statearr_24974_24996[(1)] = (8));

} else {
var statearr_24975_24997 = state_24962__$1;
(statearr_24975_24997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (14))){
var inst_24956 = (state_24962[(2)]);
var state_24962__$1 = state_24962;
var statearr_24976_24998 = state_24962__$1;
(statearr_24976_24998[(2)] = inst_24956);

(statearr_24976_24998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (10))){
var inst_24948 = (state_24962[(2)]);
var state_24962__$1 = state_24962;
var statearr_24977_24999 = state_24962__$1;
(statearr_24977_24999[(2)] = inst_24948);

(statearr_24977_24999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (8))){
var inst_24945 = cljs.core.async.close_BANG_.call(null,to);
var state_24962__$1 = state_24962;
var statearr_24978_25000 = state_24962__$1;
(statearr_24978_25000[(2)] = inst_24945);

(statearr_24978_25000[(1)] = (10));


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
});})(c__8633__auto___24986))
;
return ((function (switch__8577__auto__,c__8633__auto___24986){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_24982 = [null,null,null,null,null,null,null,null];
(statearr_24982[(0)] = state_machine__8578__auto__);

(statearr_24982[(1)] = (1));

return statearr_24982;
});
var state_machine__8578__auto____1 = (function (state_24962){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_24962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e24983){if((e24983 instanceof Object)){
var ex__8581__auto__ = e24983;
var statearr_24984_25001 = state_24962;
(statearr_24984_25001[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25002 = state_24962;
state_24962 = G__25002;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_24962){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_24962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto___24986))
})();
var state__8635__auto__ = (function (){var statearr_24985 = f__8634__auto__.call(null);
(statearr_24985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto___24986);

return statearr_24985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto___24986))
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
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__25186){
var vec__25187 = p__25186;
var v = cljs.core.nth.call(null,vec__25187,(0),null);
var p = cljs.core.nth.call(null,vec__25187,(1),null);
var job = vec__25187;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__8633__auto___25369 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto___25369,res,vec__25187,v,p,job,jobs,results){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto___25369,res,vec__25187,v,p,job,jobs,results){
return (function (state_25192){
var state_val_25193 = (state_25192[(1)]);
if((state_val_25193 === (2))){
var inst_25189 = (state_25192[(2)]);
var inst_25190 = cljs.core.async.close_BANG_.call(null,res);
var state_25192__$1 = (function (){var statearr_25194 = state_25192;
(statearr_25194[(7)] = inst_25189);

return statearr_25194;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25192__$1,inst_25190);
} else {
if((state_val_25193 === (1))){
var state_25192__$1 = state_25192;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25192__$1,(2),res,v);
} else {
return null;
}
}
});})(c__8633__auto___25369,res,vec__25187,v,p,job,jobs,results))
;
return ((function (switch__8577__auto__,c__8633__auto___25369,res,vec__25187,v,p,job,jobs,results){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_25198 = [null,null,null,null,null,null,null,null];
(statearr_25198[(0)] = state_machine__8578__auto__);

(statearr_25198[(1)] = (1));

return statearr_25198;
});
var state_machine__8578__auto____1 = (function (state_25192){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_25192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e25199){if((e25199 instanceof Object)){
var ex__8581__auto__ = e25199;
var statearr_25200_25370 = state_25192;
(statearr_25200_25370[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25371 = state_25192;
state_25192 = G__25371;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_25192){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_25192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto___25369,res,vec__25187,v,p,job,jobs,results))
})();
var state__8635__auto__ = (function (){var statearr_25201 = f__8634__auto__.call(null);
(statearr_25201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto___25369);

return statearr_25201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto___25369,res,vec__25187,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25202){
var vec__25203 = p__25202;
var v = cljs.core.nth.call(null,vec__25203,(0),null);
var p = cljs.core.nth.call(null,vec__25203,(1),null);
var job = vec__25203;
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
var n__4525__auto___25372 = n;
var __25373 = (0);
while(true){
if((__25373 < n__4525__auto___25372)){
var G__25204_25374 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25204_25374) {
case "async":
var c__8633__auto___25376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25373,c__8633__auto___25376,G__25204_25374,n__4525__auto___25372,jobs,results,process,async){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (__25373,c__8633__auto___25376,G__25204_25374,n__4525__auto___25372,jobs,results,process,async){
return (function (state_25217){
var state_val_25218 = (state_25217[(1)]);
if((state_val_25218 === (7))){
var inst_25213 = (state_25217[(2)]);
var state_25217__$1 = state_25217;
var statearr_25219_25377 = state_25217__$1;
(statearr_25219_25377[(2)] = inst_25213);

(statearr_25219_25377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25218 === (6))){
var state_25217__$1 = state_25217;
var statearr_25220_25378 = state_25217__$1;
(statearr_25220_25378[(2)] = null);

(statearr_25220_25378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25218 === (5))){
var state_25217__$1 = state_25217;
var statearr_25221_25379 = state_25217__$1;
(statearr_25221_25379[(2)] = null);

(statearr_25221_25379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25218 === (4))){
var inst_25207 = (state_25217[(2)]);
var inst_25208 = async.call(null,inst_25207);
var state_25217__$1 = state_25217;
if(cljs.core.truth_(inst_25208)){
var statearr_25222_25380 = state_25217__$1;
(statearr_25222_25380[(1)] = (5));

} else {
var statearr_25223_25381 = state_25217__$1;
(statearr_25223_25381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25218 === (3))){
var inst_25215 = (state_25217[(2)]);
var state_25217__$1 = state_25217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25217__$1,inst_25215);
} else {
if((state_val_25218 === (2))){
var state_25217__$1 = state_25217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25217__$1,(4),jobs);
} else {
if((state_val_25218 === (1))){
var state_25217__$1 = state_25217;
var statearr_25224_25382 = state_25217__$1;
(statearr_25224_25382[(2)] = null);

(statearr_25224_25382[(1)] = (2));


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
});})(__25373,c__8633__auto___25376,G__25204_25374,n__4525__auto___25372,jobs,results,process,async))
;
return ((function (__25373,switch__8577__auto__,c__8633__auto___25376,G__25204_25374,n__4525__auto___25372,jobs,results,process,async){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_25228 = [null,null,null,null,null,null,null];
(statearr_25228[(0)] = state_machine__8578__auto__);

(statearr_25228[(1)] = (1));

return statearr_25228;
});
var state_machine__8578__auto____1 = (function (state_25217){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_25217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e25229){if((e25229 instanceof Object)){
var ex__8581__auto__ = e25229;
var statearr_25230_25383 = state_25217;
(statearr_25230_25383[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25384 = state_25217;
state_25217 = G__25384;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_25217){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_25217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(__25373,switch__8577__auto__,c__8633__auto___25376,G__25204_25374,n__4525__auto___25372,jobs,results,process,async))
})();
var state__8635__auto__ = (function (){var statearr_25231 = f__8634__auto__.call(null);
(statearr_25231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto___25376);

return statearr_25231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(__25373,c__8633__auto___25376,G__25204_25374,n__4525__auto___25372,jobs,results,process,async))
);


break;
case "compute":
var c__8633__auto___25385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25373,c__8633__auto___25385,G__25204_25374,n__4525__auto___25372,jobs,results,process,async){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (__25373,c__8633__auto___25385,G__25204_25374,n__4525__auto___25372,jobs,results,process,async){
return (function (state_25244){
var state_val_25245 = (state_25244[(1)]);
if((state_val_25245 === (7))){
var inst_25240 = (state_25244[(2)]);
var state_25244__$1 = state_25244;
var statearr_25246_25386 = state_25244__$1;
(statearr_25246_25386[(2)] = inst_25240);

(statearr_25246_25386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25245 === (6))){
var state_25244__$1 = state_25244;
var statearr_25247_25387 = state_25244__$1;
(statearr_25247_25387[(2)] = null);

(statearr_25247_25387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25245 === (5))){
var state_25244__$1 = state_25244;
var statearr_25248_25388 = state_25244__$1;
(statearr_25248_25388[(2)] = null);

(statearr_25248_25388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25245 === (4))){
var inst_25234 = (state_25244[(2)]);
var inst_25235 = process.call(null,inst_25234);
var state_25244__$1 = state_25244;
if(cljs.core.truth_(inst_25235)){
var statearr_25249_25389 = state_25244__$1;
(statearr_25249_25389[(1)] = (5));

} else {
var statearr_25250_25390 = state_25244__$1;
(statearr_25250_25390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25245 === (3))){
var inst_25242 = (state_25244[(2)]);
var state_25244__$1 = state_25244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25244__$1,inst_25242);
} else {
if((state_val_25245 === (2))){
var state_25244__$1 = state_25244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25244__$1,(4),jobs);
} else {
if((state_val_25245 === (1))){
var state_25244__$1 = state_25244;
var statearr_25251_25391 = state_25244__$1;
(statearr_25251_25391[(2)] = null);

(statearr_25251_25391[(1)] = (2));


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
});})(__25373,c__8633__auto___25385,G__25204_25374,n__4525__auto___25372,jobs,results,process,async))
;
return ((function (__25373,switch__8577__auto__,c__8633__auto___25385,G__25204_25374,n__4525__auto___25372,jobs,results,process,async){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_25255 = [null,null,null,null,null,null,null];
(statearr_25255[(0)] = state_machine__8578__auto__);

(statearr_25255[(1)] = (1));

return statearr_25255;
});
var state_machine__8578__auto____1 = (function (state_25244){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_25244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e25256){if((e25256 instanceof Object)){
var ex__8581__auto__ = e25256;
var statearr_25257_25392 = state_25244;
(statearr_25257_25392[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25393 = state_25244;
state_25244 = G__25393;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_25244){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_25244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(__25373,switch__8577__auto__,c__8633__auto___25385,G__25204_25374,n__4525__auto___25372,jobs,results,process,async))
})();
var state__8635__auto__ = (function (){var statearr_25258 = f__8634__auto__.call(null);
(statearr_25258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto___25385);

return statearr_25258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(__25373,c__8633__auto___25385,G__25204_25374,n__4525__auto___25372,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25394 = (__25373 + (1));
__25373 = G__25394;
continue;
} else {
}
break;
}

var c__8633__auto___25395 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto___25395,jobs,results,process,async){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto___25395,jobs,results,process,async){
return (function (state_25280){
var state_val_25281 = (state_25280[(1)]);
if((state_val_25281 === (9))){
var inst_25273 = (state_25280[(2)]);
var state_25280__$1 = (function (){var statearr_25282 = state_25280;
(statearr_25282[(7)] = inst_25273);

return statearr_25282;
})();
var statearr_25283_25396 = state_25280__$1;
(statearr_25283_25396[(2)] = null);

(statearr_25283_25396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25281 === (8))){
var inst_25266 = (state_25280[(8)]);
var inst_25271 = (state_25280[(2)]);
var state_25280__$1 = (function (){var statearr_25284 = state_25280;
(statearr_25284[(9)] = inst_25271);

return statearr_25284;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25280__$1,(9),results,inst_25266);
} else {
if((state_val_25281 === (7))){
var inst_25276 = (state_25280[(2)]);
var state_25280__$1 = state_25280;
var statearr_25285_25397 = state_25280__$1;
(statearr_25285_25397[(2)] = inst_25276);

(statearr_25285_25397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25281 === (6))){
var inst_25261 = (state_25280[(10)]);
var inst_25266 = (state_25280[(8)]);
var inst_25266__$1 = cljs.core.async.chan.call(null,(1));
var inst_25267 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25268 = [inst_25261,inst_25266__$1];
var inst_25269 = (new cljs.core.PersistentVector(null,2,(5),inst_25267,inst_25268,null));
var state_25280__$1 = (function (){var statearr_25286 = state_25280;
(statearr_25286[(8)] = inst_25266__$1);

return statearr_25286;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25280__$1,(8),jobs,inst_25269);
} else {
if((state_val_25281 === (5))){
var inst_25264 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25280__$1 = state_25280;
var statearr_25287_25398 = state_25280__$1;
(statearr_25287_25398[(2)] = inst_25264);

(statearr_25287_25398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25281 === (4))){
var inst_25261 = (state_25280[(10)]);
var inst_25261__$1 = (state_25280[(2)]);
var inst_25262 = (inst_25261__$1 == null);
var state_25280__$1 = (function (){var statearr_25288 = state_25280;
(statearr_25288[(10)] = inst_25261__$1);

return statearr_25288;
})();
if(cljs.core.truth_(inst_25262)){
var statearr_25289_25399 = state_25280__$1;
(statearr_25289_25399[(1)] = (5));

} else {
var statearr_25290_25400 = state_25280__$1;
(statearr_25290_25400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25281 === (3))){
var inst_25278 = (state_25280[(2)]);
var state_25280__$1 = state_25280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25280__$1,inst_25278);
} else {
if((state_val_25281 === (2))){
var state_25280__$1 = state_25280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25280__$1,(4),from);
} else {
if((state_val_25281 === (1))){
var state_25280__$1 = state_25280;
var statearr_25291_25401 = state_25280__$1;
(statearr_25291_25401[(2)] = null);

(statearr_25291_25401[(1)] = (2));


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
});})(c__8633__auto___25395,jobs,results,process,async))
;
return ((function (switch__8577__auto__,c__8633__auto___25395,jobs,results,process,async){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_25295 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25295[(0)] = state_machine__8578__auto__);

(statearr_25295[(1)] = (1));

return statearr_25295;
});
var state_machine__8578__auto____1 = (function (state_25280){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_25280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e25296){if((e25296 instanceof Object)){
var ex__8581__auto__ = e25296;
var statearr_25297_25402 = state_25280;
(statearr_25297_25402[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25403 = state_25280;
state_25280 = G__25403;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_25280){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_25280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto___25395,jobs,results,process,async))
})();
var state__8635__auto__ = (function (){var statearr_25298 = f__8634__auto__.call(null);
(statearr_25298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto___25395);

return statearr_25298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto___25395,jobs,results,process,async))
);


var c__8633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto__,jobs,results,process,async){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto__,jobs,results,process,async){
return (function (state_25336){
var state_val_25337 = (state_25336[(1)]);
if((state_val_25337 === (7))){
var inst_25332 = (state_25336[(2)]);
var state_25336__$1 = state_25336;
var statearr_25338_25404 = state_25336__$1;
(statearr_25338_25404[(2)] = inst_25332);

(statearr_25338_25404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25337 === (20))){
var state_25336__$1 = state_25336;
var statearr_25339_25405 = state_25336__$1;
(statearr_25339_25405[(2)] = null);

(statearr_25339_25405[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25337 === (1))){
var state_25336__$1 = state_25336;
var statearr_25340_25406 = state_25336__$1;
(statearr_25340_25406[(2)] = null);

(statearr_25340_25406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25337 === (4))){
var inst_25301 = (state_25336[(7)]);
var inst_25301__$1 = (state_25336[(2)]);
var inst_25302 = (inst_25301__$1 == null);
var state_25336__$1 = (function (){var statearr_25341 = state_25336;
(statearr_25341[(7)] = inst_25301__$1);

return statearr_25341;
})();
if(cljs.core.truth_(inst_25302)){
var statearr_25342_25407 = state_25336__$1;
(statearr_25342_25407[(1)] = (5));

} else {
var statearr_25343_25408 = state_25336__$1;
(statearr_25343_25408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25337 === (15))){
var inst_25314 = (state_25336[(8)]);
var state_25336__$1 = state_25336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25336__$1,(18),to,inst_25314);
} else {
if((state_val_25337 === (21))){
var inst_25327 = (state_25336[(2)]);
var state_25336__$1 = state_25336;
var statearr_25344_25409 = state_25336__$1;
(statearr_25344_25409[(2)] = inst_25327);

(statearr_25344_25409[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25337 === (13))){
var inst_25329 = (state_25336[(2)]);
var state_25336__$1 = (function (){var statearr_25345 = state_25336;
(statearr_25345[(9)] = inst_25329);

return statearr_25345;
})();
var statearr_25346_25410 = state_25336__$1;
(statearr_25346_25410[(2)] = null);

(statearr_25346_25410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25337 === (6))){
var inst_25301 = (state_25336[(7)]);
var state_25336__$1 = state_25336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25336__$1,(11),inst_25301);
} else {
if((state_val_25337 === (17))){
var inst_25322 = (state_25336[(2)]);
var state_25336__$1 = state_25336;
if(cljs.core.truth_(inst_25322)){
var statearr_25347_25411 = state_25336__$1;
(statearr_25347_25411[(1)] = (19));

} else {
var statearr_25348_25412 = state_25336__$1;
(statearr_25348_25412[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25337 === (3))){
var inst_25334 = (state_25336[(2)]);
var state_25336__$1 = state_25336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25336__$1,inst_25334);
} else {
if((state_val_25337 === (12))){
var inst_25311 = (state_25336[(10)]);
var state_25336__$1 = state_25336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25336__$1,(14),inst_25311);
} else {
if((state_val_25337 === (2))){
var state_25336__$1 = state_25336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25336__$1,(4),results);
} else {
if((state_val_25337 === (19))){
var state_25336__$1 = state_25336;
var statearr_25349_25413 = state_25336__$1;
(statearr_25349_25413[(2)] = null);

(statearr_25349_25413[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25337 === (11))){
var inst_25311 = (state_25336[(2)]);
var state_25336__$1 = (function (){var statearr_25350 = state_25336;
(statearr_25350[(10)] = inst_25311);

return statearr_25350;
})();
var statearr_25351_25414 = state_25336__$1;
(statearr_25351_25414[(2)] = null);

(statearr_25351_25414[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25337 === (9))){
var state_25336__$1 = state_25336;
var statearr_25352_25415 = state_25336__$1;
(statearr_25352_25415[(2)] = null);

(statearr_25352_25415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25337 === (5))){
var state_25336__$1 = state_25336;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25353_25416 = state_25336__$1;
(statearr_25353_25416[(1)] = (8));

} else {
var statearr_25354_25417 = state_25336__$1;
(statearr_25354_25417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25337 === (14))){
var inst_25316 = (state_25336[(11)]);
var inst_25314 = (state_25336[(8)]);
var inst_25314__$1 = (state_25336[(2)]);
var inst_25315 = (inst_25314__$1 == null);
var inst_25316__$1 = cljs.core.not.call(null,inst_25315);
var state_25336__$1 = (function (){var statearr_25355 = state_25336;
(statearr_25355[(11)] = inst_25316__$1);

(statearr_25355[(8)] = inst_25314__$1);

return statearr_25355;
})();
if(inst_25316__$1){
var statearr_25356_25418 = state_25336__$1;
(statearr_25356_25418[(1)] = (15));

} else {
var statearr_25357_25419 = state_25336__$1;
(statearr_25357_25419[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25337 === (16))){
var inst_25316 = (state_25336[(11)]);
var state_25336__$1 = state_25336;
var statearr_25358_25420 = state_25336__$1;
(statearr_25358_25420[(2)] = inst_25316);

(statearr_25358_25420[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25337 === (10))){
var inst_25308 = (state_25336[(2)]);
var state_25336__$1 = state_25336;
var statearr_25359_25421 = state_25336__$1;
(statearr_25359_25421[(2)] = inst_25308);

(statearr_25359_25421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25337 === (18))){
var inst_25319 = (state_25336[(2)]);
var state_25336__$1 = state_25336;
var statearr_25360_25422 = state_25336__$1;
(statearr_25360_25422[(2)] = inst_25319);

(statearr_25360_25422[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25337 === (8))){
var inst_25305 = cljs.core.async.close_BANG_.call(null,to);
var state_25336__$1 = state_25336;
var statearr_25361_25423 = state_25336__$1;
(statearr_25361_25423[(2)] = inst_25305);

(statearr_25361_25423[(1)] = (10));


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
});})(c__8633__auto__,jobs,results,process,async))
;
return ((function (switch__8577__auto__,c__8633__auto__,jobs,results,process,async){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_25365 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25365[(0)] = state_machine__8578__auto__);

(statearr_25365[(1)] = (1));

return statearr_25365;
});
var state_machine__8578__auto____1 = (function (state_25336){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_25336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e25366){if((e25366 instanceof Object)){
var ex__8581__auto__ = e25366;
var statearr_25367_25424 = state_25336;
(statearr_25367_25424[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25425 = state_25336;
state_25336 = G__25425;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_25336){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_25336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto__,jobs,results,process,async))
})();
var state__8635__auto__ = (function (){var statearr_25368 = f__8634__auto__.call(null);
(statearr_25368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto__);

return statearr_25368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto__,jobs,results,process,async))
);

return c__8633__auto__;
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
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__8633__auto___25526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto___25526,tc,fc){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto___25526,tc,fc){
return (function (state_25501){
var state_val_25502 = (state_25501[(1)]);
if((state_val_25502 === (7))){
var inst_25497 = (state_25501[(2)]);
var state_25501__$1 = state_25501;
var statearr_25503_25527 = state_25501__$1;
(statearr_25503_25527[(2)] = inst_25497);

(statearr_25503_25527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25502 === (1))){
var state_25501__$1 = state_25501;
var statearr_25504_25528 = state_25501__$1;
(statearr_25504_25528[(2)] = null);

(statearr_25504_25528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25502 === (4))){
var inst_25478 = (state_25501[(7)]);
var inst_25478__$1 = (state_25501[(2)]);
var inst_25479 = (inst_25478__$1 == null);
var state_25501__$1 = (function (){var statearr_25505 = state_25501;
(statearr_25505[(7)] = inst_25478__$1);

return statearr_25505;
})();
if(cljs.core.truth_(inst_25479)){
var statearr_25506_25529 = state_25501__$1;
(statearr_25506_25529[(1)] = (5));

} else {
var statearr_25507_25530 = state_25501__$1;
(statearr_25507_25530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25502 === (13))){
var state_25501__$1 = state_25501;
var statearr_25508_25531 = state_25501__$1;
(statearr_25508_25531[(2)] = null);

(statearr_25508_25531[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25502 === (6))){
var inst_25478 = (state_25501[(7)]);
var inst_25484 = p.call(null,inst_25478);
var state_25501__$1 = state_25501;
if(cljs.core.truth_(inst_25484)){
var statearr_25509_25532 = state_25501__$1;
(statearr_25509_25532[(1)] = (9));

} else {
var statearr_25510_25533 = state_25501__$1;
(statearr_25510_25533[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25502 === (3))){
var inst_25499 = (state_25501[(2)]);
var state_25501__$1 = state_25501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25501__$1,inst_25499);
} else {
if((state_val_25502 === (12))){
var state_25501__$1 = state_25501;
var statearr_25511_25534 = state_25501__$1;
(statearr_25511_25534[(2)] = null);

(statearr_25511_25534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25502 === (2))){
var state_25501__$1 = state_25501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25501__$1,(4),ch);
} else {
if((state_val_25502 === (11))){
var inst_25478 = (state_25501[(7)]);
var inst_25488 = (state_25501[(2)]);
var state_25501__$1 = state_25501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25501__$1,(8),inst_25488,inst_25478);
} else {
if((state_val_25502 === (9))){
var state_25501__$1 = state_25501;
var statearr_25512_25535 = state_25501__$1;
(statearr_25512_25535[(2)] = tc);

(statearr_25512_25535[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25502 === (5))){
var inst_25481 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25482 = cljs.core.async.close_BANG_.call(null,fc);
var state_25501__$1 = (function (){var statearr_25513 = state_25501;
(statearr_25513[(8)] = inst_25481);

return statearr_25513;
})();
var statearr_25514_25536 = state_25501__$1;
(statearr_25514_25536[(2)] = inst_25482);

(statearr_25514_25536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25502 === (14))){
var inst_25495 = (state_25501[(2)]);
var state_25501__$1 = state_25501;
var statearr_25515_25537 = state_25501__$1;
(statearr_25515_25537[(2)] = inst_25495);

(statearr_25515_25537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25502 === (10))){
var state_25501__$1 = state_25501;
var statearr_25516_25538 = state_25501__$1;
(statearr_25516_25538[(2)] = fc);

(statearr_25516_25538[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25502 === (8))){
var inst_25490 = (state_25501[(2)]);
var state_25501__$1 = state_25501;
if(cljs.core.truth_(inst_25490)){
var statearr_25517_25539 = state_25501__$1;
(statearr_25517_25539[(1)] = (12));

} else {
var statearr_25518_25540 = state_25501__$1;
(statearr_25518_25540[(1)] = (13));

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
});})(c__8633__auto___25526,tc,fc))
;
return ((function (switch__8577__auto__,c__8633__auto___25526,tc,fc){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_25522 = [null,null,null,null,null,null,null,null,null];
(statearr_25522[(0)] = state_machine__8578__auto__);

(statearr_25522[(1)] = (1));

return statearr_25522;
});
var state_machine__8578__auto____1 = (function (state_25501){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_25501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e25523){if((e25523 instanceof Object)){
var ex__8581__auto__ = e25523;
var statearr_25524_25541 = state_25501;
(statearr_25524_25541[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25542 = state_25501;
state_25501 = G__25542;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_25501){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_25501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto___25526,tc,fc))
})();
var state__8635__auto__ = (function (){var statearr_25525 = f__8634__auto__.call(null);
(statearr_25525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto___25526);

return statearr_25525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto___25526,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__8633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto__){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto__){
return (function (state_25589){
var state_val_25590 = (state_25589[(1)]);
if((state_val_25590 === (7))){
var inst_25585 = (state_25589[(2)]);
var state_25589__$1 = state_25589;
var statearr_25591_25607 = state_25589__$1;
(statearr_25591_25607[(2)] = inst_25585);

(statearr_25591_25607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25590 === (6))){
var inst_25575 = (state_25589[(7)]);
var inst_25578 = (state_25589[(8)]);
var inst_25582 = f.call(null,inst_25575,inst_25578);
var inst_25575__$1 = inst_25582;
var state_25589__$1 = (function (){var statearr_25592 = state_25589;
(statearr_25592[(7)] = inst_25575__$1);

return statearr_25592;
})();
var statearr_25593_25608 = state_25589__$1;
(statearr_25593_25608[(2)] = null);

(statearr_25593_25608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25590 === (5))){
var inst_25575 = (state_25589[(7)]);
var state_25589__$1 = state_25589;
var statearr_25594_25609 = state_25589__$1;
(statearr_25594_25609[(2)] = inst_25575);

(statearr_25594_25609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25590 === (4))){
var inst_25578 = (state_25589[(8)]);
var inst_25578__$1 = (state_25589[(2)]);
var inst_25579 = (inst_25578__$1 == null);
var state_25589__$1 = (function (){var statearr_25595 = state_25589;
(statearr_25595[(8)] = inst_25578__$1);

return statearr_25595;
})();
if(cljs.core.truth_(inst_25579)){
var statearr_25596_25610 = state_25589__$1;
(statearr_25596_25610[(1)] = (5));

} else {
var statearr_25597_25611 = state_25589__$1;
(statearr_25597_25611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25590 === (3))){
var inst_25587 = (state_25589[(2)]);
var state_25589__$1 = state_25589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25589__$1,inst_25587);
} else {
if((state_val_25590 === (2))){
var state_25589__$1 = state_25589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25589__$1,(4),ch);
} else {
if((state_val_25590 === (1))){
var inst_25575 = init;
var state_25589__$1 = (function (){var statearr_25598 = state_25589;
(statearr_25598[(7)] = inst_25575);

return statearr_25598;
})();
var statearr_25599_25612 = state_25589__$1;
(statearr_25599_25612[(2)] = null);

(statearr_25599_25612[(1)] = (2));


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
});})(c__8633__auto__))
;
return ((function (switch__8577__auto__,c__8633__auto__){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_25603 = [null,null,null,null,null,null,null,null,null];
(statearr_25603[(0)] = state_machine__8578__auto__);

(statearr_25603[(1)] = (1));

return statearr_25603;
});
var state_machine__8578__auto____1 = (function (state_25589){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_25589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e25604){if((e25604 instanceof Object)){
var ex__8581__auto__ = e25604;
var statearr_25605_25613 = state_25589;
(statearr_25605_25613[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25614 = state_25589;
state_25589 = G__25614;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_25589){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_25589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto__))
})();
var state__8635__auto__ = (function (){var statearr_25606 = f__8634__auto__.call(null);
(statearr_25606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto__);

return statearr_25606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto__))
);

return c__8633__auto__;
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
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__8633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto__){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto__){
return (function (state_25688){
var state_val_25689 = (state_25688[(1)]);
if((state_val_25689 === (7))){
var inst_25670 = (state_25688[(2)]);
var state_25688__$1 = state_25688;
var statearr_25690_25713 = state_25688__$1;
(statearr_25690_25713[(2)] = inst_25670);

(statearr_25690_25713[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25689 === (1))){
var inst_25664 = cljs.core.seq.call(null,coll);
var inst_25665 = inst_25664;
var state_25688__$1 = (function (){var statearr_25691 = state_25688;
(statearr_25691[(7)] = inst_25665);

return statearr_25691;
})();
var statearr_25692_25714 = state_25688__$1;
(statearr_25692_25714[(2)] = null);

(statearr_25692_25714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25689 === (4))){
var inst_25665 = (state_25688[(7)]);
var inst_25668 = cljs.core.first.call(null,inst_25665);
var state_25688__$1 = state_25688;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25688__$1,(7),ch,inst_25668);
} else {
if((state_val_25689 === (13))){
var inst_25682 = (state_25688[(2)]);
var state_25688__$1 = state_25688;
var statearr_25693_25715 = state_25688__$1;
(statearr_25693_25715[(2)] = inst_25682);

(statearr_25693_25715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25689 === (6))){
var inst_25673 = (state_25688[(2)]);
var state_25688__$1 = state_25688;
if(cljs.core.truth_(inst_25673)){
var statearr_25694_25716 = state_25688__$1;
(statearr_25694_25716[(1)] = (8));

} else {
var statearr_25695_25717 = state_25688__$1;
(statearr_25695_25717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25689 === (3))){
var inst_25686 = (state_25688[(2)]);
var state_25688__$1 = state_25688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25688__$1,inst_25686);
} else {
if((state_val_25689 === (12))){
var state_25688__$1 = state_25688;
var statearr_25696_25718 = state_25688__$1;
(statearr_25696_25718[(2)] = null);

(statearr_25696_25718[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25689 === (2))){
var inst_25665 = (state_25688[(7)]);
var state_25688__$1 = state_25688;
if(cljs.core.truth_(inst_25665)){
var statearr_25697_25719 = state_25688__$1;
(statearr_25697_25719[(1)] = (4));

} else {
var statearr_25698_25720 = state_25688__$1;
(statearr_25698_25720[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25689 === (11))){
var inst_25679 = cljs.core.async.close_BANG_.call(null,ch);
var state_25688__$1 = state_25688;
var statearr_25699_25721 = state_25688__$1;
(statearr_25699_25721[(2)] = inst_25679);

(statearr_25699_25721[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25689 === (9))){
var state_25688__$1 = state_25688;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25700_25722 = state_25688__$1;
(statearr_25700_25722[(1)] = (11));

} else {
var statearr_25701_25723 = state_25688__$1;
(statearr_25701_25723[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25689 === (5))){
var inst_25665 = (state_25688[(7)]);
var state_25688__$1 = state_25688;
var statearr_25702_25724 = state_25688__$1;
(statearr_25702_25724[(2)] = inst_25665);

(statearr_25702_25724[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25689 === (10))){
var inst_25684 = (state_25688[(2)]);
var state_25688__$1 = state_25688;
var statearr_25703_25725 = state_25688__$1;
(statearr_25703_25725[(2)] = inst_25684);

(statearr_25703_25725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25689 === (8))){
var inst_25665 = (state_25688[(7)]);
var inst_25675 = cljs.core.next.call(null,inst_25665);
var inst_25665__$1 = inst_25675;
var state_25688__$1 = (function (){var statearr_25704 = state_25688;
(statearr_25704[(7)] = inst_25665__$1);

return statearr_25704;
})();
var statearr_25705_25726 = state_25688__$1;
(statearr_25705_25726[(2)] = null);

(statearr_25705_25726[(1)] = (2));


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
});})(c__8633__auto__))
;
return ((function (switch__8577__auto__,c__8633__auto__){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_25709 = [null,null,null,null,null,null,null,null];
(statearr_25709[(0)] = state_machine__8578__auto__);

(statearr_25709[(1)] = (1));

return statearr_25709;
});
var state_machine__8578__auto____1 = (function (state_25688){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_25688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e25710){if((e25710 instanceof Object)){
var ex__8581__auto__ = e25710;
var statearr_25711_25727 = state_25688;
(statearr_25711_25727[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25728 = state_25688;
state_25688 = G__25728;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_25688){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_25688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto__))
})();
var state__8635__auto__ = (function (){var statearr_25712 = f__8634__auto__.call(null);
(statearr_25712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto__);

return statearr_25712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto__))
);

return c__8633__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj25730 = {};
return obj25730;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3626__auto__ = _;
if(and__3626__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3626__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4282__auto__ = (((_ == null))?null:_);
return (function (){var or__3638__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj25732 = {};
return obj25732;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3626__auto__ = m;
if(and__3626__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3626__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4282__auto__ = (((m == null))?null:m);
return (function (){var or__3638__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3626__auto__ = m;
if(and__3626__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3626__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4282__auto__ = (((m == null))?null:m);
return (function (){var or__3638__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3626__auto__ = m;
if(and__3626__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3626__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4282__auto__ = (((m == null))?null:m);
return (function (){var or__3638__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t25954 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25954 = (function (cs,ch,mult,meta25955){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25955 = meta25955;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25954.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t25954.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t25954.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t25954.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t25954.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25954.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t25954.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25956){
var self__ = this;
var _25956__$1 = this;
return self__.meta25955;
});})(cs))
;

cljs.core.async.t25954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25956,meta25955__$1){
var self__ = this;
var _25956__$1 = this;
return (new cljs.core.async.t25954(self__.cs,self__.ch,self__.mult,meta25955__$1));
});})(cs))
;

cljs.core.async.t25954.cljs$lang$type = true;

cljs.core.async.t25954.cljs$lang$ctorStr = "cljs.core.async/t25954";

cljs.core.async.t25954.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t25954");
});})(cs))
;

cljs.core.async.__GT_t25954 = ((function (cs){
return (function __GT_t25954(cs__$1,ch__$1,mult__$1,meta25955){
return (new cljs.core.async.t25954(cs__$1,ch__$1,mult__$1,meta25955));
});})(cs))
;

}

return (new cljs.core.async.t25954(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/../server/static/out/cljs/core/async.cljs"], null)));
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
var c__8633__auto___26175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto___26175,cs,m,dchan,dctr,done){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto___26175,cs,m,dchan,dctr,done){
return (function (state_26087){
var state_val_26088 = (state_26087[(1)]);
if((state_val_26088 === (7))){
var inst_26083 = (state_26087[(2)]);
var state_26087__$1 = state_26087;
var statearr_26089_26176 = state_26087__$1;
(statearr_26089_26176[(2)] = inst_26083);

(statearr_26089_26176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (20))){
var inst_25988 = (state_26087[(7)]);
var inst_25998 = cljs.core.first.call(null,inst_25988);
var inst_25999 = cljs.core.nth.call(null,inst_25998,(0),null);
var inst_26000 = cljs.core.nth.call(null,inst_25998,(1),null);
var state_26087__$1 = (function (){var statearr_26090 = state_26087;
(statearr_26090[(8)] = inst_25999);

return statearr_26090;
})();
if(cljs.core.truth_(inst_26000)){
var statearr_26091_26177 = state_26087__$1;
(statearr_26091_26177[(1)] = (22));

} else {
var statearr_26092_26178 = state_26087__$1;
(statearr_26092_26178[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (27))){
var inst_25959 = (state_26087[(9)]);
var inst_26030 = (state_26087[(10)]);
var inst_26035 = (state_26087[(11)]);
var inst_26028 = (state_26087[(12)]);
var inst_26035__$1 = cljs.core._nth.call(null,inst_26028,inst_26030);
var inst_26036 = cljs.core.async.put_BANG_.call(null,inst_26035__$1,inst_25959,done);
var state_26087__$1 = (function (){var statearr_26093 = state_26087;
(statearr_26093[(11)] = inst_26035__$1);

return statearr_26093;
})();
if(cljs.core.truth_(inst_26036)){
var statearr_26094_26179 = state_26087__$1;
(statearr_26094_26179[(1)] = (30));

} else {
var statearr_26095_26180 = state_26087__$1;
(statearr_26095_26180[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (1))){
var state_26087__$1 = state_26087;
var statearr_26096_26181 = state_26087__$1;
(statearr_26096_26181[(2)] = null);

(statearr_26096_26181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (24))){
var inst_25988 = (state_26087[(7)]);
var inst_26005 = (state_26087[(2)]);
var inst_26006 = cljs.core.next.call(null,inst_25988);
var inst_25968 = inst_26006;
var inst_25969 = null;
var inst_25970 = (0);
var inst_25971 = (0);
var state_26087__$1 = (function (){var statearr_26097 = state_26087;
(statearr_26097[(13)] = inst_25969);

(statearr_26097[(14)] = inst_26005);

(statearr_26097[(15)] = inst_25968);

(statearr_26097[(16)] = inst_25970);

(statearr_26097[(17)] = inst_25971);

return statearr_26097;
})();
var statearr_26098_26182 = state_26087__$1;
(statearr_26098_26182[(2)] = null);

(statearr_26098_26182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (39))){
var state_26087__$1 = state_26087;
var statearr_26102_26183 = state_26087__$1;
(statearr_26102_26183[(2)] = null);

(statearr_26102_26183[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (4))){
var inst_25959 = (state_26087[(9)]);
var inst_25959__$1 = (state_26087[(2)]);
var inst_25960 = (inst_25959__$1 == null);
var state_26087__$1 = (function (){var statearr_26103 = state_26087;
(statearr_26103[(9)] = inst_25959__$1);

return statearr_26103;
})();
if(cljs.core.truth_(inst_25960)){
var statearr_26104_26184 = state_26087__$1;
(statearr_26104_26184[(1)] = (5));

} else {
var statearr_26105_26185 = state_26087__$1;
(statearr_26105_26185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (15))){
var inst_25969 = (state_26087[(13)]);
var inst_25968 = (state_26087[(15)]);
var inst_25970 = (state_26087[(16)]);
var inst_25971 = (state_26087[(17)]);
var inst_25984 = (state_26087[(2)]);
var inst_25985 = (inst_25971 + (1));
var tmp26099 = inst_25969;
var tmp26100 = inst_25968;
var tmp26101 = inst_25970;
var inst_25968__$1 = tmp26100;
var inst_25969__$1 = tmp26099;
var inst_25970__$1 = tmp26101;
var inst_25971__$1 = inst_25985;
var state_26087__$1 = (function (){var statearr_26106 = state_26087;
(statearr_26106[(13)] = inst_25969__$1);

(statearr_26106[(15)] = inst_25968__$1);

(statearr_26106[(18)] = inst_25984);

(statearr_26106[(16)] = inst_25970__$1);

(statearr_26106[(17)] = inst_25971__$1);

return statearr_26106;
})();
var statearr_26107_26186 = state_26087__$1;
(statearr_26107_26186[(2)] = null);

(statearr_26107_26186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (21))){
var inst_26009 = (state_26087[(2)]);
var state_26087__$1 = state_26087;
var statearr_26111_26187 = state_26087__$1;
(statearr_26111_26187[(2)] = inst_26009);

(statearr_26111_26187[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (31))){
var inst_26035 = (state_26087[(11)]);
var inst_26039 = done.call(null,null);
var inst_26040 = cljs.core.async.untap_STAR_.call(null,m,inst_26035);
var state_26087__$1 = (function (){var statearr_26112 = state_26087;
(statearr_26112[(19)] = inst_26039);

return statearr_26112;
})();
var statearr_26113_26188 = state_26087__$1;
(statearr_26113_26188[(2)] = inst_26040);

(statearr_26113_26188[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (32))){
var inst_26030 = (state_26087[(10)]);
var inst_26027 = (state_26087[(20)]);
var inst_26029 = (state_26087[(21)]);
var inst_26028 = (state_26087[(12)]);
var inst_26042 = (state_26087[(2)]);
var inst_26043 = (inst_26030 + (1));
var tmp26108 = inst_26027;
var tmp26109 = inst_26029;
var tmp26110 = inst_26028;
var inst_26027__$1 = tmp26108;
var inst_26028__$1 = tmp26110;
var inst_26029__$1 = tmp26109;
var inst_26030__$1 = inst_26043;
var state_26087__$1 = (function (){var statearr_26114 = state_26087;
(statearr_26114[(10)] = inst_26030__$1);

(statearr_26114[(20)] = inst_26027__$1);

(statearr_26114[(22)] = inst_26042);

(statearr_26114[(21)] = inst_26029__$1);

(statearr_26114[(12)] = inst_26028__$1);

return statearr_26114;
})();
var statearr_26115_26189 = state_26087__$1;
(statearr_26115_26189[(2)] = null);

(statearr_26115_26189[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (40))){
var inst_26055 = (state_26087[(23)]);
var inst_26059 = done.call(null,null);
var inst_26060 = cljs.core.async.untap_STAR_.call(null,m,inst_26055);
var state_26087__$1 = (function (){var statearr_26116 = state_26087;
(statearr_26116[(24)] = inst_26059);

return statearr_26116;
})();
var statearr_26117_26190 = state_26087__$1;
(statearr_26117_26190[(2)] = inst_26060);

(statearr_26117_26190[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (33))){
var inst_26046 = (state_26087[(25)]);
var inst_26048 = cljs.core.chunked_seq_QMARK_.call(null,inst_26046);
var state_26087__$1 = state_26087;
if(inst_26048){
var statearr_26118_26191 = state_26087__$1;
(statearr_26118_26191[(1)] = (36));

} else {
var statearr_26119_26192 = state_26087__$1;
(statearr_26119_26192[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (13))){
var inst_25978 = (state_26087[(26)]);
var inst_25981 = cljs.core.async.close_BANG_.call(null,inst_25978);
var state_26087__$1 = state_26087;
var statearr_26120_26193 = state_26087__$1;
(statearr_26120_26193[(2)] = inst_25981);

(statearr_26120_26193[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (22))){
var inst_25999 = (state_26087[(8)]);
var inst_26002 = cljs.core.async.close_BANG_.call(null,inst_25999);
var state_26087__$1 = state_26087;
var statearr_26121_26194 = state_26087__$1;
(statearr_26121_26194[(2)] = inst_26002);

(statearr_26121_26194[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (36))){
var inst_26046 = (state_26087[(25)]);
var inst_26050 = cljs.core.chunk_first.call(null,inst_26046);
var inst_26051 = cljs.core.chunk_rest.call(null,inst_26046);
var inst_26052 = cljs.core.count.call(null,inst_26050);
var inst_26027 = inst_26051;
var inst_26028 = inst_26050;
var inst_26029 = inst_26052;
var inst_26030 = (0);
var state_26087__$1 = (function (){var statearr_26122 = state_26087;
(statearr_26122[(10)] = inst_26030);

(statearr_26122[(20)] = inst_26027);

(statearr_26122[(21)] = inst_26029);

(statearr_26122[(12)] = inst_26028);

return statearr_26122;
})();
var statearr_26123_26195 = state_26087__$1;
(statearr_26123_26195[(2)] = null);

(statearr_26123_26195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (41))){
var inst_26046 = (state_26087[(25)]);
var inst_26062 = (state_26087[(2)]);
var inst_26063 = cljs.core.next.call(null,inst_26046);
var inst_26027 = inst_26063;
var inst_26028 = null;
var inst_26029 = (0);
var inst_26030 = (0);
var state_26087__$1 = (function (){var statearr_26124 = state_26087;
(statearr_26124[(10)] = inst_26030);

(statearr_26124[(20)] = inst_26027);

(statearr_26124[(27)] = inst_26062);

(statearr_26124[(21)] = inst_26029);

(statearr_26124[(12)] = inst_26028);

return statearr_26124;
})();
var statearr_26125_26196 = state_26087__$1;
(statearr_26125_26196[(2)] = null);

(statearr_26125_26196[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (43))){
var state_26087__$1 = state_26087;
var statearr_26126_26197 = state_26087__$1;
(statearr_26126_26197[(2)] = null);

(statearr_26126_26197[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (29))){
var inst_26071 = (state_26087[(2)]);
var state_26087__$1 = state_26087;
var statearr_26127_26198 = state_26087__$1;
(statearr_26127_26198[(2)] = inst_26071);

(statearr_26127_26198[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (44))){
var inst_26080 = (state_26087[(2)]);
var state_26087__$1 = (function (){var statearr_26128 = state_26087;
(statearr_26128[(28)] = inst_26080);

return statearr_26128;
})();
var statearr_26129_26199 = state_26087__$1;
(statearr_26129_26199[(2)] = null);

(statearr_26129_26199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (6))){
var inst_26019 = (state_26087[(29)]);
var inst_26018 = cljs.core.deref.call(null,cs);
var inst_26019__$1 = cljs.core.keys.call(null,inst_26018);
var inst_26020 = cljs.core.count.call(null,inst_26019__$1);
var inst_26021 = cljs.core.reset_BANG_.call(null,dctr,inst_26020);
var inst_26026 = cljs.core.seq.call(null,inst_26019__$1);
var inst_26027 = inst_26026;
var inst_26028 = null;
var inst_26029 = (0);
var inst_26030 = (0);
var state_26087__$1 = (function (){var statearr_26130 = state_26087;
(statearr_26130[(10)] = inst_26030);

(statearr_26130[(29)] = inst_26019__$1);

(statearr_26130[(20)] = inst_26027);

(statearr_26130[(21)] = inst_26029);

(statearr_26130[(30)] = inst_26021);

(statearr_26130[(12)] = inst_26028);

return statearr_26130;
})();
var statearr_26131_26200 = state_26087__$1;
(statearr_26131_26200[(2)] = null);

(statearr_26131_26200[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (28))){
var inst_26027 = (state_26087[(20)]);
var inst_26046 = (state_26087[(25)]);
var inst_26046__$1 = cljs.core.seq.call(null,inst_26027);
var state_26087__$1 = (function (){var statearr_26132 = state_26087;
(statearr_26132[(25)] = inst_26046__$1);

return statearr_26132;
})();
if(inst_26046__$1){
var statearr_26133_26201 = state_26087__$1;
(statearr_26133_26201[(1)] = (33));

} else {
var statearr_26134_26202 = state_26087__$1;
(statearr_26134_26202[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (25))){
var inst_26030 = (state_26087[(10)]);
var inst_26029 = (state_26087[(21)]);
var inst_26032 = (inst_26030 < inst_26029);
var inst_26033 = inst_26032;
var state_26087__$1 = state_26087;
if(cljs.core.truth_(inst_26033)){
var statearr_26135_26203 = state_26087__$1;
(statearr_26135_26203[(1)] = (27));

} else {
var statearr_26136_26204 = state_26087__$1;
(statearr_26136_26204[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (34))){
var state_26087__$1 = state_26087;
var statearr_26137_26205 = state_26087__$1;
(statearr_26137_26205[(2)] = null);

(statearr_26137_26205[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (17))){
var state_26087__$1 = state_26087;
var statearr_26138_26206 = state_26087__$1;
(statearr_26138_26206[(2)] = null);

(statearr_26138_26206[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (3))){
var inst_26085 = (state_26087[(2)]);
var state_26087__$1 = state_26087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26087__$1,inst_26085);
} else {
if((state_val_26088 === (12))){
var inst_26014 = (state_26087[(2)]);
var state_26087__$1 = state_26087;
var statearr_26139_26207 = state_26087__$1;
(statearr_26139_26207[(2)] = inst_26014);

(statearr_26139_26207[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (2))){
var state_26087__$1 = state_26087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26087__$1,(4),ch);
} else {
if((state_val_26088 === (23))){
var state_26087__$1 = state_26087;
var statearr_26140_26208 = state_26087__$1;
(statearr_26140_26208[(2)] = null);

(statearr_26140_26208[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (35))){
var inst_26069 = (state_26087[(2)]);
var state_26087__$1 = state_26087;
var statearr_26141_26209 = state_26087__$1;
(statearr_26141_26209[(2)] = inst_26069);

(statearr_26141_26209[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (19))){
var inst_25988 = (state_26087[(7)]);
var inst_25992 = cljs.core.chunk_first.call(null,inst_25988);
var inst_25993 = cljs.core.chunk_rest.call(null,inst_25988);
var inst_25994 = cljs.core.count.call(null,inst_25992);
var inst_25968 = inst_25993;
var inst_25969 = inst_25992;
var inst_25970 = inst_25994;
var inst_25971 = (0);
var state_26087__$1 = (function (){var statearr_26142 = state_26087;
(statearr_26142[(13)] = inst_25969);

(statearr_26142[(15)] = inst_25968);

(statearr_26142[(16)] = inst_25970);

(statearr_26142[(17)] = inst_25971);

return statearr_26142;
})();
var statearr_26143_26210 = state_26087__$1;
(statearr_26143_26210[(2)] = null);

(statearr_26143_26210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (11))){
var inst_25988 = (state_26087[(7)]);
var inst_25968 = (state_26087[(15)]);
var inst_25988__$1 = cljs.core.seq.call(null,inst_25968);
var state_26087__$1 = (function (){var statearr_26144 = state_26087;
(statearr_26144[(7)] = inst_25988__$1);

return statearr_26144;
})();
if(inst_25988__$1){
var statearr_26145_26211 = state_26087__$1;
(statearr_26145_26211[(1)] = (16));

} else {
var statearr_26146_26212 = state_26087__$1;
(statearr_26146_26212[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (9))){
var inst_26016 = (state_26087[(2)]);
var state_26087__$1 = state_26087;
var statearr_26147_26213 = state_26087__$1;
(statearr_26147_26213[(2)] = inst_26016);

(statearr_26147_26213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (5))){
var inst_25966 = cljs.core.deref.call(null,cs);
var inst_25967 = cljs.core.seq.call(null,inst_25966);
var inst_25968 = inst_25967;
var inst_25969 = null;
var inst_25970 = (0);
var inst_25971 = (0);
var state_26087__$1 = (function (){var statearr_26148 = state_26087;
(statearr_26148[(13)] = inst_25969);

(statearr_26148[(15)] = inst_25968);

(statearr_26148[(16)] = inst_25970);

(statearr_26148[(17)] = inst_25971);

return statearr_26148;
})();
var statearr_26149_26214 = state_26087__$1;
(statearr_26149_26214[(2)] = null);

(statearr_26149_26214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (14))){
var state_26087__$1 = state_26087;
var statearr_26150_26215 = state_26087__$1;
(statearr_26150_26215[(2)] = null);

(statearr_26150_26215[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (45))){
var inst_26077 = (state_26087[(2)]);
var state_26087__$1 = state_26087;
var statearr_26151_26216 = state_26087__$1;
(statearr_26151_26216[(2)] = inst_26077);

(statearr_26151_26216[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (26))){
var inst_26019 = (state_26087[(29)]);
var inst_26073 = (state_26087[(2)]);
var inst_26074 = cljs.core.seq.call(null,inst_26019);
var state_26087__$1 = (function (){var statearr_26152 = state_26087;
(statearr_26152[(31)] = inst_26073);

return statearr_26152;
})();
if(inst_26074){
var statearr_26153_26217 = state_26087__$1;
(statearr_26153_26217[(1)] = (42));

} else {
var statearr_26154_26218 = state_26087__$1;
(statearr_26154_26218[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (16))){
var inst_25988 = (state_26087[(7)]);
var inst_25990 = cljs.core.chunked_seq_QMARK_.call(null,inst_25988);
var state_26087__$1 = state_26087;
if(inst_25990){
var statearr_26155_26219 = state_26087__$1;
(statearr_26155_26219[(1)] = (19));

} else {
var statearr_26156_26220 = state_26087__$1;
(statearr_26156_26220[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (38))){
var inst_26066 = (state_26087[(2)]);
var state_26087__$1 = state_26087;
var statearr_26157_26221 = state_26087__$1;
(statearr_26157_26221[(2)] = inst_26066);

(statearr_26157_26221[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (30))){
var state_26087__$1 = state_26087;
var statearr_26158_26222 = state_26087__$1;
(statearr_26158_26222[(2)] = null);

(statearr_26158_26222[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (10))){
var inst_25969 = (state_26087[(13)]);
var inst_25971 = (state_26087[(17)]);
var inst_25977 = cljs.core._nth.call(null,inst_25969,inst_25971);
var inst_25978 = cljs.core.nth.call(null,inst_25977,(0),null);
var inst_25979 = cljs.core.nth.call(null,inst_25977,(1),null);
var state_26087__$1 = (function (){var statearr_26159 = state_26087;
(statearr_26159[(26)] = inst_25978);

return statearr_26159;
})();
if(cljs.core.truth_(inst_25979)){
var statearr_26160_26223 = state_26087__$1;
(statearr_26160_26223[(1)] = (13));

} else {
var statearr_26161_26224 = state_26087__$1;
(statearr_26161_26224[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (18))){
var inst_26012 = (state_26087[(2)]);
var state_26087__$1 = state_26087;
var statearr_26162_26225 = state_26087__$1;
(statearr_26162_26225[(2)] = inst_26012);

(statearr_26162_26225[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (42))){
var state_26087__$1 = state_26087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26087__$1,(45),dchan);
} else {
if((state_val_26088 === (37))){
var inst_25959 = (state_26087[(9)]);
var inst_26046 = (state_26087[(25)]);
var inst_26055 = (state_26087[(23)]);
var inst_26055__$1 = cljs.core.first.call(null,inst_26046);
var inst_26056 = cljs.core.async.put_BANG_.call(null,inst_26055__$1,inst_25959,done);
var state_26087__$1 = (function (){var statearr_26163 = state_26087;
(statearr_26163[(23)] = inst_26055__$1);

return statearr_26163;
})();
if(cljs.core.truth_(inst_26056)){
var statearr_26164_26226 = state_26087__$1;
(statearr_26164_26226[(1)] = (39));

} else {
var statearr_26165_26227 = state_26087__$1;
(statearr_26165_26227[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (8))){
var inst_25970 = (state_26087[(16)]);
var inst_25971 = (state_26087[(17)]);
var inst_25973 = (inst_25971 < inst_25970);
var inst_25974 = inst_25973;
var state_26087__$1 = state_26087;
if(cljs.core.truth_(inst_25974)){
var statearr_26166_26228 = state_26087__$1;
(statearr_26166_26228[(1)] = (10));

} else {
var statearr_26167_26229 = state_26087__$1;
(statearr_26167_26229[(1)] = (11));

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
});})(c__8633__auto___26175,cs,m,dchan,dctr,done))
;
return ((function (switch__8577__auto__,c__8633__auto___26175,cs,m,dchan,dctr,done){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_26171 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26171[(0)] = state_machine__8578__auto__);

(statearr_26171[(1)] = (1));

return statearr_26171;
});
var state_machine__8578__auto____1 = (function (state_26087){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_26087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e26172){if((e26172 instanceof Object)){
var ex__8581__auto__ = e26172;
var statearr_26173_26230 = state_26087;
(statearr_26173_26230[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26231 = state_26087;
state_26087 = G__26231;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_26087){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_26087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto___26175,cs,m,dchan,dctr,done))
})();
var state__8635__auto__ = (function (){var statearr_26174 = f__8634__auto__.call(null);
(statearr_26174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto___26175);

return statearr_26174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto___26175,cs,m,dchan,dctr,done))
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
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

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
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj26233 = {};
return obj26233;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3626__auto__ = m;
if(and__3626__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3626__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4282__auto__ = (((m == null))?null:m);
return (function (){var or__3638__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3626__auto__ = m;
if(and__3626__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3626__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4282__auto__ = (((m == null))?null:m);
return (function (){var or__3638__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3626__auto__ = m;
if(and__3626__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3626__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4282__auto__ = (((m == null))?null:m);
return (function (){var or__3638__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3626__auto__ = m;
if(and__3626__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3626__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4282__auto__ = (((m == null))?null:m);
return (function (){var or__3638__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3626__auto__ = m;
if(and__3626__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3626__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4282__auto__ = (((m == null))?null:m);
return (function (){var or__3638__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__26234){
var map__26239 = p__26234;
var map__26239__$1 = ((cljs.core.seq_QMARK_.call(null,map__26239))?cljs.core.apply.call(null,cljs.core.hash_map,map__26239):map__26239);
var opts = map__26239__$1;
var statearr_26240_26243 = state;
(statearr_26240_26243[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__26239,map__26239__$1,opts){
return (function (val){
var statearr_26241_26244 = state;
(statearr_26241_26244[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26239,map__26239__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_26242_26245 = state;
(statearr_26242_26245[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__26234 = null;
if (arguments.length > 3) {
  p__26234 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__26234);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__26246){
var state = cljs.core.first(arglist__26246);
arglist__26246 = cljs.core.next(arglist__26246);
var cont_block = cljs.core.first(arglist__26246);
arglist__26246 = cljs.core.next(arglist__26246);
var ports = cljs.core.first(arglist__26246);
var p__26234 = cljs.core.rest(arglist__26246);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__26234);
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
cljs.core.async.mix = (function mix(out){
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
if(typeof cljs.core.async.t26366 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26366 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26367){
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
this.meta26367 = meta26367;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26366.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t26366.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26366.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26366.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26366.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26366.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26366.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26366.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26366.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26368){
var self__ = this;
var _26368__$1 = this;
return self__.meta26367;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26368,meta26367__$1){
var self__ = this;
var _26368__$1 = this;
return (new cljs.core.async.t26366(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26367__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26366.cljs$lang$type = true;

cljs.core.async.t26366.cljs$lang$ctorStr = "cljs.core.async/t26366";

cljs.core.async.t26366.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t26366");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t26366 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t26366(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26367){
return (new cljs.core.async.t26366(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26367));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t26366(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/../server/static/out/cljs/core/async.cljs"], null)));
})()
;
var c__8633__auto___26485 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto___26485,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto___26485,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26438){
var state_val_26439 = (state_26438[(1)]);
if((state_val_26439 === (7))){
var inst_26382 = (state_26438[(7)]);
var inst_26387 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26382);
var state_26438__$1 = state_26438;
var statearr_26440_26486 = state_26438__$1;
(statearr_26440_26486[(2)] = inst_26387);

(statearr_26440_26486[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (20))){
var inst_26397 = (state_26438[(8)]);
var state_26438__$1 = state_26438;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26438__$1,(23),out,inst_26397);
} else {
if((state_val_26439 === (1))){
var inst_26372 = (state_26438[(9)]);
var inst_26372__$1 = calc_state.call(null);
var inst_26373 = cljs.core.seq_QMARK_.call(null,inst_26372__$1);
var state_26438__$1 = (function (){var statearr_26441 = state_26438;
(statearr_26441[(9)] = inst_26372__$1);

return statearr_26441;
})();
if(inst_26373){
var statearr_26442_26487 = state_26438__$1;
(statearr_26442_26487[(1)] = (2));

} else {
var statearr_26443_26488 = state_26438__$1;
(statearr_26443_26488[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (24))){
var inst_26390 = (state_26438[(10)]);
var inst_26382 = inst_26390;
var state_26438__$1 = (function (){var statearr_26444 = state_26438;
(statearr_26444[(7)] = inst_26382);

return statearr_26444;
})();
var statearr_26445_26489 = state_26438__$1;
(statearr_26445_26489[(2)] = null);

(statearr_26445_26489[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (4))){
var inst_26372 = (state_26438[(9)]);
var inst_26378 = (state_26438[(2)]);
var inst_26379 = cljs.core.get.call(null,inst_26378,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26380 = cljs.core.get.call(null,inst_26378,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26381 = cljs.core.get.call(null,inst_26378,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26382 = inst_26372;
var state_26438__$1 = (function (){var statearr_26446 = state_26438;
(statearr_26446[(11)] = inst_26379);

(statearr_26446[(7)] = inst_26382);

(statearr_26446[(12)] = inst_26381);

(statearr_26446[(13)] = inst_26380);

return statearr_26446;
})();
var statearr_26447_26490 = state_26438__$1;
(statearr_26447_26490[(2)] = null);

(statearr_26447_26490[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (15))){
var state_26438__$1 = state_26438;
var statearr_26448_26491 = state_26438__$1;
(statearr_26448_26491[(2)] = null);

(statearr_26448_26491[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (21))){
var inst_26390 = (state_26438[(10)]);
var inst_26382 = inst_26390;
var state_26438__$1 = (function (){var statearr_26449 = state_26438;
(statearr_26449[(7)] = inst_26382);

return statearr_26449;
})();
var statearr_26450_26492 = state_26438__$1;
(statearr_26450_26492[(2)] = null);

(statearr_26450_26492[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (13))){
var inst_26434 = (state_26438[(2)]);
var state_26438__$1 = state_26438;
var statearr_26451_26493 = state_26438__$1;
(statearr_26451_26493[(2)] = inst_26434);

(statearr_26451_26493[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (22))){
var inst_26432 = (state_26438[(2)]);
var state_26438__$1 = state_26438;
var statearr_26452_26494 = state_26438__$1;
(statearr_26452_26494[(2)] = inst_26432);

(statearr_26452_26494[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (6))){
var inst_26436 = (state_26438[(2)]);
var state_26438__$1 = state_26438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26438__$1,inst_26436);
} else {
if((state_val_26439 === (25))){
var state_26438__$1 = state_26438;
var statearr_26453_26495 = state_26438__$1;
(statearr_26453_26495[(2)] = null);

(statearr_26453_26495[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (17))){
var inst_26412 = (state_26438[(14)]);
var state_26438__$1 = state_26438;
var statearr_26454_26496 = state_26438__$1;
(statearr_26454_26496[(2)] = inst_26412);

(statearr_26454_26496[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (3))){
var inst_26372 = (state_26438[(9)]);
var state_26438__$1 = state_26438;
var statearr_26455_26497 = state_26438__$1;
(statearr_26455_26497[(2)] = inst_26372);

(statearr_26455_26497[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (12))){
var inst_26398 = (state_26438[(15)]);
var inst_26412 = (state_26438[(14)]);
var inst_26393 = (state_26438[(16)]);
var inst_26412__$1 = inst_26393.call(null,inst_26398);
var state_26438__$1 = (function (){var statearr_26456 = state_26438;
(statearr_26456[(14)] = inst_26412__$1);

return statearr_26456;
})();
if(cljs.core.truth_(inst_26412__$1)){
var statearr_26457_26498 = state_26438__$1;
(statearr_26457_26498[(1)] = (17));

} else {
var statearr_26458_26499 = state_26438__$1;
(statearr_26458_26499[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (2))){
var inst_26372 = (state_26438[(9)]);
var inst_26375 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26372);
var state_26438__$1 = state_26438;
var statearr_26459_26500 = state_26438__$1;
(statearr_26459_26500[(2)] = inst_26375);

(statearr_26459_26500[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (23))){
var inst_26423 = (state_26438[(2)]);
var state_26438__$1 = state_26438;
if(cljs.core.truth_(inst_26423)){
var statearr_26460_26501 = state_26438__$1;
(statearr_26460_26501[(1)] = (24));

} else {
var statearr_26461_26502 = state_26438__$1;
(statearr_26461_26502[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (19))){
var inst_26420 = (state_26438[(2)]);
var state_26438__$1 = state_26438;
if(cljs.core.truth_(inst_26420)){
var statearr_26462_26503 = state_26438__$1;
(statearr_26462_26503[(1)] = (20));

} else {
var statearr_26463_26504 = state_26438__$1;
(statearr_26463_26504[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (11))){
var inst_26397 = (state_26438[(8)]);
var inst_26403 = (inst_26397 == null);
var state_26438__$1 = state_26438;
if(cljs.core.truth_(inst_26403)){
var statearr_26464_26505 = state_26438__$1;
(statearr_26464_26505[(1)] = (14));

} else {
var statearr_26465_26506 = state_26438__$1;
(statearr_26465_26506[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (9))){
var inst_26390 = (state_26438[(10)]);
var inst_26390__$1 = (state_26438[(2)]);
var inst_26391 = cljs.core.get.call(null,inst_26390__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26392 = cljs.core.get.call(null,inst_26390__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26393 = cljs.core.get.call(null,inst_26390__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_26438__$1 = (function (){var statearr_26466 = state_26438;
(statearr_26466[(10)] = inst_26390__$1);

(statearr_26466[(16)] = inst_26393);

(statearr_26466[(17)] = inst_26392);

return statearr_26466;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26438__$1,(10),inst_26391);
} else {
if((state_val_26439 === (5))){
var inst_26382 = (state_26438[(7)]);
var inst_26385 = cljs.core.seq_QMARK_.call(null,inst_26382);
var state_26438__$1 = state_26438;
if(inst_26385){
var statearr_26467_26507 = state_26438__$1;
(statearr_26467_26507[(1)] = (7));

} else {
var statearr_26468_26508 = state_26438__$1;
(statearr_26468_26508[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (14))){
var inst_26398 = (state_26438[(15)]);
var inst_26405 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26398);
var state_26438__$1 = state_26438;
var statearr_26469_26509 = state_26438__$1;
(statearr_26469_26509[(2)] = inst_26405);

(statearr_26469_26509[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (26))){
var inst_26428 = (state_26438[(2)]);
var state_26438__$1 = state_26438;
var statearr_26470_26510 = state_26438__$1;
(statearr_26470_26510[(2)] = inst_26428);

(statearr_26470_26510[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (16))){
var inst_26408 = (state_26438[(2)]);
var inst_26409 = calc_state.call(null);
var inst_26382 = inst_26409;
var state_26438__$1 = (function (){var statearr_26471 = state_26438;
(statearr_26471[(18)] = inst_26408);

(statearr_26471[(7)] = inst_26382);

return statearr_26471;
})();
var statearr_26472_26511 = state_26438__$1;
(statearr_26472_26511[(2)] = null);

(statearr_26472_26511[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (10))){
var inst_26398 = (state_26438[(15)]);
var inst_26397 = (state_26438[(8)]);
var inst_26396 = (state_26438[(2)]);
var inst_26397__$1 = cljs.core.nth.call(null,inst_26396,(0),null);
var inst_26398__$1 = cljs.core.nth.call(null,inst_26396,(1),null);
var inst_26399 = (inst_26397__$1 == null);
var inst_26400 = cljs.core._EQ_.call(null,inst_26398__$1,change);
var inst_26401 = (inst_26399) || (inst_26400);
var state_26438__$1 = (function (){var statearr_26473 = state_26438;
(statearr_26473[(15)] = inst_26398__$1);

(statearr_26473[(8)] = inst_26397__$1);

return statearr_26473;
})();
if(cljs.core.truth_(inst_26401)){
var statearr_26474_26512 = state_26438__$1;
(statearr_26474_26512[(1)] = (11));

} else {
var statearr_26475_26513 = state_26438__$1;
(statearr_26475_26513[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (18))){
var inst_26398 = (state_26438[(15)]);
var inst_26393 = (state_26438[(16)]);
var inst_26392 = (state_26438[(17)]);
var inst_26415 = cljs.core.empty_QMARK_.call(null,inst_26393);
var inst_26416 = inst_26392.call(null,inst_26398);
var inst_26417 = cljs.core.not.call(null,inst_26416);
var inst_26418 = (inst_26415) && (inst_26417);
var state_26438__$1 = state_26438;
var statearr_26476_26514 = state_26438__$1;
(statearr_26476_26514[(2)] = inst_26418);

(statearr_26476_26514[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (8))){
var inst_26382 = (state_26438[(7)]);
var state_26438__$1 = state_26438;
var statearr_26477_26515 = state_26438__$1;
(statearr_26477_26515[(2)] = inst_26382);

(statearr_26477_26515[(1)] = (9));


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
});})(c__8633__auto___26485,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__8577__auto__,c__8633__auto___26485,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_26481 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26481[(0)] = state_machine__8578__auto__);

(statearr_26481[(1)] = (1));

return statearr_26481;
});
var state_machine__8578__auto____1 = (function (state_26438){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_26438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e26482){if((e26482 instanceof Object)){
var ex__8581__auto__ = e26482;
var statearr_26483_26516 = state_26438;
(statearr_26483_26516[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26517 = state_26438;
state_26438 = G__26517;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_26438){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_26438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto___26485,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8635__auto__ = (function (){var statearr_26484 = f__8634__auto__.call(null);
(statearr_26484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto___26485);

return statearr_26484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto___26485,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj26519 = {};
return obj26519;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3626__auto__ = p;
if(and__3626__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3626__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4282__auto__ = (((p == null))?null:p);
return (function (){var or__3638__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3626__auto__ = p;
if(and__3626__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3626__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4282__auto__ = (((p == null))?null:p);
return (function (){var or__3638__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3626__auto__ = p;
if(and__3626__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3626__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4282__auto__ = (((p == null))?null:p);
return (function (){var or__3638__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3626__auto__ = p;
if(and__3626__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3626__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4282__auto__ = (((p == null))?null:p);
return (function (){var or__3638__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3638__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3638__auto__,mults){
return (function (p1__26520_SHARP_){
if(cljs.core.truth_(p1__26520_SHARP_.call(null,topic))){
return p1__26520_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26520_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3638__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t26643 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26643 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26644){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26644 = meta26644;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26643.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t26643.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t26643.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t26643.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t26643.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t26643.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26643.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t26643.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26645){
var self__ = this;
var _26645__$1 = this;
return self__.meta26644;
});})(mults,ensure_mult))
;

cljs.core.async.t26643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26645,meta26644__$1){
var self__ = this;
var _26645__$1 = this;
return (new cljs.core.async.t26643(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26644__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t26643.cljs$lang$type = true;

cljs.core.async.t26643.cljs$lang$ctorStr = "cljs.core.async/t26643";

cljs.core.async.t26643.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t26643");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t26643 = ((function (mults,ensure_mult){
return (function __GT_t26643(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26644){
return (new cljs.core.async.t26643(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26644));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t26643(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/../server/static/out/cljs/core/async.cljs"], null)));
})()
;
var c__8633__auto___26765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto___26765,mults,ensure_mult,p){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto___26765,mults,ensure_mult,p){
return (function (state_26717){
var state_val_26718 = (state_26717[(1)]);
if((state_val_26718 === (7))){
var inst_26713 = (state_26717[(2)]);
var state_26717__$1 = state_26717;
var statearr_26719_26766 = state_26717__$1;
(statearr_26719_26766[(2)] = inst_26713);

(statearr_26719_26766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (20))){
var state_26717__$1 = state_26717;
var statearr_26720_26767 = state_26717__$1;
(statearr_26720_26767[(2)] = null);

(statearr_26720_26767[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (1))){
var state_26717__$1 = state_26717;
var statearr_26721_26768 = state_26717__$1;
(statearr_26721_26768[(2)] = null);

(statearr_26721_26768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (24))){
var inst_26696 = (state_26717[(7)]);
var inst_26705 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26696);
var state_26717__$1 = state_26717;
var statearr_26722_26769 = state_26717__$1;
(statearr_26722_26769[(2)] = inst_26705);

(statearr_26722_26769[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (4))){
var inst_26648 = (state_26717[(8)]);
var inst_26648__$1 = (state_26717[(2)]);
var inst_26649 = (inst_26648__$1 == null);
var state_26717__$1 = (function (){var statearr_26723 = state_26717;
(statearr_26723[(8)] = inst_26648__$1);

return statearr_26723;
})();
if(cljs.core.truth_(inst_26649)){
var statearr_26724_26770 = state_26717__$1;
(statearr_26724_26770[(1)] = (5));

} else {
var statearr_26725_26771 = state_26717__$1;
(statearr_26725_26771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (15))){
var inst_26690 = (state_26717[(2)]);
var state_26717__$1 = state_26717;
var statearr_26726_26772 = state_26717__$1;
(statearr_26726_26772[(2)] = inst_26690);

(statearr_26726_26772[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (21))){
var inst_26710 = (state_26717[(2)]);
var state_26717__$1 = (function (){var statearr_26727 = state_26717;
(statearr_26727[(9)] = inst_26710);

return statearr_26727;
})();
var statearr_26728_26773 = state_26717__$1;
(statearr_26728_26773[(2)] = null);

(statearr_26728_26773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (13))){
var inst_26672 = (state_26717[(10)]);
var inst_26674 = cljs.core.chunked_seq_QMARK_.call(null,inst_26672);
var state_26717__$1 = state_26717;
if(inst_26674){
var statearr_26729_26774 = state_26717__$1;
(statearr_26729_26774[(1)] = (16));

} else {
var statearr_26730_26775 = state_26717__$1;
(statearr_26730_26775[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (22))){
var inst_26702 = (state_26717[(2)]);
var state_26717__$1 = state_26717;
if(cljs.core.truth_(inst_26702)){
var statearr_26731_26776 = state_26717__$1;
(statearr_26731_26776[(1)] = (23));

} else {
var statearr_26732_26777 = state_26717__$1;
(statearr_26732_26777[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (6))){
var inst_26698 = (state_26717[(11)]);
var inst_26648 = (state_26717[(8)]);
var inst_26696 = (state_26717[(7)]);
var inst_26696__$1 = topic_fn.call(null,inst_26648);
var inst_26697 = cljs.core.deref.call(null,mults);
var inst_26698__$1 = cljs.core.get.call(null,inst_26697,inst_26696__$1);
var state_26717__$1 = (function (){var statearr_26733 = state_26717;
(statearr_26733[(11)] = inst_26698__$1);

(statearr_26733[(7)] = inst_26696__$1);

return statearr_26733;
})();
if(cljs.core.truth_(inst_26698__$1)){
var statearr_26734_26778 = state_26717__$1;
(statearr_26734_26778[(1)] = (19));

} else {
var statearr_26735_26779 = state_26717__$1;
(statearr_26735_26779[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (25))){
var inst_26707 = (state_26717[(2)]);
var state_26717__$1 = state_26717;
var statearr_26736_26780 = state_26717__$1;
(statearr_26736_26780[(2)] = inst_26707);

(statearr_26736_26780[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (17))){
var inst_26672 = (state_26717[(10)]);
var inst_26681 = cljs.core.first.call(null,inst_26672);
var inst_26682 = cljs.core.async.muxch_STAR_.call(null,inst_26681);
var inst_26683 = cljs.core.async.close_BANG_.call(null,inst_26682);
var inst_26684 = cljs.core.next.call(null,inst_26672);
var inst_26658 = inst_26684;
var inst_26659 = null;
var inst_26660 = (0);
var inst_26661 = (0);
var state_26717__$1 = (function (){var statearr_26737 = state_26717;
(statearr_26737[(12)] = inst_26659);

(statearr_26737[(13)] = inst_26660);

(statearr_26737[(14)] = inst_26683);

(statearr_26737[(15)] = inst_26661);

(statearr_26737[(16)] = inst_26658);

return statearr_26737;
})();
var statearr_26738_26781 = state_26717__$1;
(statearr_26738_26781[(2)] = null);

(statearr_26738_26781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (3))){
var inst_26715 = (state_26717[(2)]);
var state_26717__$1 = state_26717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26717__$1,inst_26715);
} else {
if((state_val_26718 === (12))){
var inst_26692 = (state_26717[(2)]);
var state_26717__$1 = state_26717;
var statearr_26739_26782 = state_26717__$1;
(statearr_26739_26782[(2)] = inst_26692);

(statearr_26739_26782[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (2))){
var state_26717__$1 = state_26717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26717__$1,(4),ch);
} else {
if((state_val_26718 === (23))){
var state_26717__$1 = state_26717;
var statearr_26740_26783 = state_26717__$1;
(statearr_26740_26783[(2)] = null);

(statearr_26740_26783[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (19))){
var inst_26698 = (state_26717[(11)]);
var inst_26648 = (state_26717[(8)]);
var inst_26700 = cljs.core.async.muxch_STAR_.call(null,inst_26698);
var state_26717__$1 = state_26717;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26717__$1,(22),inst_26700,inst_26648);
} else {
if((state_val_26718 === (11))){
var inst_26672 = (state_26717[(10)]);
var inst_26658 = (state_26717[(16)]);
var inst_26672__$1 = cljs.core.seq.call(null,inst_26658);
var state_26717__$1 = (function (){var statearr_26741 = state_26717;
(statearr_26741[(10)] = inst_26672__$1);

return statearr_26741;
})();
if(inst_26672__$1){
var statearr_26742_26784 = state_26717__$1;
(statearr_26742_26784[(1)] = (13));

} else {
var statearr_26743_26785 = state_26717__$1;
(statearr_26743_26785[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (9))){
var inst_26694 = (state_26717[(2)]);
var state_26717__$1 = state_26717;
var statearr_26744_26786 = state_26717__$1;
(statearr_26744_26786[(2)] = inst_26694);

(statearr_26744_26786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (5))){
var inst_26655 = cljs.core.deref.call(null,mults);
var inst_26656 = cljs.core.vals.call(null,inst_26655);
var inst_26657 = cljs.core.seq.call(null,inst_26656);
var inst_26658 = inst_26657;
var inst_26659 = null;
var inst_26660 = (0);
var inst_26661 = (0);
var state_26717__$1 = (function (){var statearr_26745 = state_26717;
(statearr_26745[(12)] = inst_26659);

(statearr_26745[(13)] = inst_26660);

(statearr_26745[(15)] = inst_26661);

(statearr_26745[(16)] = inst_26658);

return statearr_26745;
})();
var statearr_26746_26787 = state_26717__$1;
(statearr_26746_26787[(2)] = null);

(statearr_26746_26787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (14))){
var state_26717__$1 = state_26717;
var statearr_26750_26788 = state_26717__$1;
(statearr_26750_26788[(2)] = null);

(statearr_26750_26788[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (16))){
var inst_26672 = (state_26717[(10)]);
var inst_26676 = cljs.core.chunk_first.call(null,inst_26672);
var inst_26677 = cljs.core.chunk_rest.call(null,inst_26672);
var inst_26678 = cljs.core.count.call(null,inst_26676);
var inst_26658 = inst_26677;
var inst_26659 = inst_26676;
var inst_26660 = inst_26678;
var inst_26661 = (0);
var state_26717__$1 = (function (){var statearr_26751 = state_26717;
(statearr_26751[(12)] = inst_26659);

(statearr_26751[(13)] = inst_26660);

(statearr_26751[(15)] = inst_26661);

(statearr_26751[(16)] = inst_26658);

return statearr_26751;
})();
var statearr_26752_26789 = state_26717__$1;
(statearr_26752_26789[(2)] = null);

(statearr_26752_26789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (10))){
var inst_26659 = (state_26717[(12)]);
var inst_26660 = (state_26717[(13)]);
var inst_26661 = (state_26717[(15)]);
var inst_26658 = (state_26717[(16)]);
var inst_26666 = cljs.core._nth.call(null,inst_26659,inst_26661);
var inst_26667 = cljs.core.async.muxch_STAR_.call(null,inst_26666);
var inst_26668 = cljs.core.async.close_BANG_.call(null,inst_26667);
var inst_26669 = (inst_26661 + (1));
var tmp26747 = inst_26659;
var tmp26748 = inst_26660;
var tmp26749 = inst_26658;
var inst_26658__$1 = tmp26749;
var inst_26659__$1 = tmp26747;
var inst_26660__$1 = tmp26748;
var inst_26661__$1 = inst_26669;
var state_26717__$1 = (function (){var statearr_26753 = state_26717;
(statearr_26753[(17)] = inst_26668);

(statearr_26753[(12)] = inst_26659__$1);

(statearr_26753[(13)] = inst_26660__$1);

(statearr_26753[(15)] = inst_26661__$1);

(statearr_26753[(16)] = inst_26658__$1);

return statearr_26753;
})();
var statearr_26754_26790 = state_26717__$1;
(statearr_26754_26790[(2)] = null);

(statearr_26754_26790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (18))){
var inst_26687 = (state_26717[(2)]);
var state_26717__$1 = state_26717;
var statearr_26755_26791 = state_26717__$1;
(statearr_26755_26791[(2)] = inst_26687);

(statearr_26755_26791[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (8))){
var inst_26660 = (state_26717[(13)]);
var inst_26661 = (state_26717[(15)]);
var inst_26663 = (inst_26661 < inst_26660);
var inst_26664 = inst_26663;
var state_26717__$1 = state_26717;
if(cljs.core.truth_(inst_26664)){
var statearr_26756_26792 = state_26717__$1;
(statearr_26756_26792[(1)] = (10));

} else {
var statearr_26757_26793 = state_26717__$1;
(statearr_26757_26793[(1)] = (11));

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
});})(c__8633__auto___26765,mults,ensure_mult,p))
;
return ((function (switch__8577__auto__,c__8633__auto___26765,mults,ensure_mult,p){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_26761 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26761[(0)] = state_machine__8578__auto__);

(statearr_26761[(1)] = (1));

return statearr_26761;
});
var state_machine__8578__auto____1 = (function (state_26717){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_26717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e26762){if((e26762 instanceof Object)){
var ex__8581__auto__ = e26762;
var statearr_26763_26794 = state_26717;
(statearr_26763_26794[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26795 = state_26717;
state_26717 = G__26795;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_26717){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_26717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto___26765,mults,ensure_mult,p))
})();
var state__8635__auto__ = (function (){var statearr_26764 = f__8634__auto__.call(null);
(statearr_26764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto___26765);

return statearr_26764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto___26765,mults,ensure_mult,p))
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
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
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
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
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
var c__8633__auto___26932 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto___26932,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto___26932,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26902){
var state_val_26903 = (state_26902[(1)]);
if((state_val_26903 === (7))){
var state_26902__$1 = state_26902;
var statearr_26904_26933 = state_26902__$1;
(statearr_26904_26933[(2)] = null);

(statearr_26904_26933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (1))){
var state_26902__$1 = state_26902;
var statearr_26905_26934 = state_26902__$1;
(statearr_26905_26934[(2)] = null);

(statearr_26905_26934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (4))){
var inst_26866 = (state_26902[(7)]);
var inst_26868 = (inst_26866 < cnt);
var state_26902__$1 = state_26902;
if(cljs.core.truth_(inst_26868)){
var statearr_26906_26935 = state_26902__$1;
(statearr_26906_26935[(1)] = (6));

} else {
var statearr_26907_26936 = state_26902__$1;
(statearr_26907_26936[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (15))){
var inst_26898 = (state_26902[(2)]);
var state_26902__$1 = state_26902;
var statearr_26908_26937 = state_26902__$1;
(statearr_26908_26937[(2)] = inst_26898);

(statearr_26908_26937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (13))){
var inst_26891 = cljs.core.async.close_BANG_.call(null,out);
var state_26902__$1 = state_26902;
var statearr_26909_26938 = state_26902__$1;
(statearr_26909_26938[(2)] = inst_26891);

(statearr_26909_26938[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (6))){
var state_26902__$1 = state_26902;
var statearr_26910_26939 = state_26902__$1;
(statearr_26910_26939[(2)] = null);

(statearr_26910_26939[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (3))){
var inst_26900 = (state_26902[(2)]);
var state_26902__$1 = state_26902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26902__$1,inst_26900);
} else {
if((state_val_26903 === (12))){
var inst_26888 = (state_26902[(8)]);
var inst_26888__$1 = (state_26902[(2)]);
var inst_26889 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26888__$1);
var state_26902__$1 = (function (){var statearr_26911 = state_26902;
(statearr_26911[(8)] = inst_26888__$1);

return statearr_26911;
})();
if(cljs.core.truth_(inst_26889)){
var statearr_26912_26940 = state_26902__$1;
(statearr_26912_26940[(1)] = (13));

} else {
var statearr_26913_26941 = state_26902__$1;
(statearr_26913_26941[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (2))){
var inst_26865 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26866 = (0);
var state_26902__$1 = (function (){var statearr_26914 = state_26902;
(statearr_26914[(9)] = inst_26865);

(statearr_26914[(7)] = inst_26866);

return statearr_26914;
})();
var statearr_26915_26942 = state_26902__$1;
(statearr_26915_26942[(2)] = null);

(statearr_26915_26942[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (11))){
var inst_26866 = (state_26902[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26902,(10),Object,null,(9));
var inst_26875 = chs__$1.call(null,inst_26866);
var inst_26876 = done.call(null,inst_26866);
var inst_26877 = cljs.core.async.take_BANG_.call(null,inst_26875,inst_26876);
var state_26902__$1 = state_26902;
var statearr_26916_26943 = state_26902__$1;
(statearr_26916_26943[(2)] = inst_26877);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26902__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (9))){
var inst_26866 = (state_26902[(7)]);
var inst_26879 = (state_26902[(2)]);
var inst_26880 = (inst_26866 + (1));
var inst_26866__$1 = inst_26880;
var state_26902__$1 = (function (){var statearr_26917 = state_26902;
(statearr_26917[(10)] = inst_26879);

(statearr_26917[(7)] = inst_26866__$1);

return statearr_26917;
})();
var statearr_26918_26944 = state_26902__$1;
(statearr_26918_26944[(2)] = null);

(statearr_26918_26944[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (5))){
var inst_26886 = (state_26902[(2)]);
var state_26902__$1 = (function (){var statearr_26919 = state_26902;
(statearr_26919[(11)] = inst_26886);

return statearr_26919;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26902__$1,(12),dchan);
} else {
if((state_val_26903 === (14))){
var inst_26888 = (state_26902[(8)]);
var inst_26893 = cljs.core.apply.call(null,f,inst_26888);
var state_26902__$1 = state_26902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26902__$1,(16),out,inst_26893);
} else {
if((state_val_26903 === (16))){
var inst_26895 = (state_26902[(2)]);
var state_26902__$1 = (function (){var statearr_26920 = state_26902;
(statearr_26920[(12)] = inst_26895);

return statearr_26920;
})();
var statearr_26921_26945 = state_26902__$1;
(statearr_26921_26945[(2)] = null);

(statearr_26921_26945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (10))){
var inst_26870 = (state_26902[(2)]);
var inst_26871 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26902__$1 = (function (){var statearr_26922 = state_26902;
(statearr_26922[(13)] = inst_26870);

return statearr_26922;
})();
var statearr_26923_26946 = state_26902__$1;
(statearr_26923_26946[(2)] = inst_26871);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26902__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (8))){
var inst_26884 = (state_26902[(2)]);
var state_26902__$1 = state_26902;
var statearr_26924_26947 = state_26902__$1;
(statearr_26924_26947[(2)] = inst_26884);

(statearr_26924_26947[(1)] = (5));


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
});})(c__8633__auto___26932,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__8577__auto__,c__8633__auto___26932,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_26928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26928[(0)] = state_machine__8578__auto__);

(statearr_26928[(1)] = (1));

return statearr_26928;
});
var state_machine__8578__auto____1 = (function (state_26902){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_26902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e26929){if((e26929 instanceof Object)){
var ex__8581__auto__ = e26929;
var statearr_26930_26948 = state_26902;
(statearr_26930_26948[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26949 = state_26902;
state_26902 = G__26949;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_26902){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_26902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto___26932,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8635__auto__ = (function (){var statearr_26931 = f__8634__auto__.call(null);
(statearr_26931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto___26932);

return statearr_26931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto___26932,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8633__auto___27057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto___27057,out){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto___27057,out){
return (function (state_27033){
var state_val_27034 = (state_27033[(1)]);
if((state_val_27034 === (7))){
var inst_27012 = (state_27033[(7)]);
var inst_27013 = (state_27033[(8)]);
var inst_27012__$1 = (state_27033[(2)]);
var inst_27013__$1 = cljs.core.nth.call(null,inst_27012__$1,(0),null);
var inst_27014 = cljs.core.nth.call(null,inst_27012__$1,(1),null);
var inst_27015 = (inst_27013__$1 == null);
var state_27033__$1 = (function (){var statearr_27035 = state_27033;
(statearr_27035[(7)] = inst_27012__$1);

(statearr_27035[(8)] = inst_27013__$1);

(statearr_27035[(9)] = inst_27014);

return statearr_27035;
})();
if(cljs.core.truth_(inst_27015)){
var statearr_27036_27058 = state_27033__$1;
(statearr_27036_27058[(1)] = (8));

} else {
var statearr_27037_27059 = state_27033__$1;
(statearr_27037_27059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27034 === (1))){
var inst_27004 = cljs.core.vec.call(null,chs);
var inst_27005 = inst_27004;
var state_27033__$1 = (function (){var statearr_27038 = state_27033;
(statearr_27038[(10)] = inst_27005);

return statearr_27038;
})();
var statearr_27039_27060 = state_27033__$1;
(statearr_27039_27060[(2)] = null);

(statearr_27039_27060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27034 === (4))){
var inst_27005 = (state_27033[(10)]);
var state_27033__$1 = state_27033;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27033__$1,(7),inst_27005);
} else {
if((state_val_27034 === (6))){
var inst_27029 = (state_27033[(2)]);
var state_27033__$1 = state_27033;
var statearr_27040_27061 = state_27033__$1;
(statearr_27040_27061[(2)] = inst_27029);

(statearr_27040_27061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27034 === (3))){
var inst_27031 = (state_27033[(2)]);
var state_27033__$1 = state_27033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27033__$1,inst_27031);
} else {
if((state_val_27034 === (2))){
var inst_27005 = (state_27033[(10)]);
var inst_27007 = cljs.core.count.call(null,inst_27005);
var inst_27008 = (inst_27007 > (0));
var state_27033__$1 = state_27033;
if(cljs.core.truth_(inst_27008)){
var statearr_27042_27062 = state_27033__$1;
(statearr_27042_27062[(1)] = (4));

} else {
var statearr_27043_27063 = state_27033__$1;
(statearr_27043_27063[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27034 === (11))){
var inst_27005 = (state_27033[(10)]);
var inst_27022 = (state_27033[(2)]);
var tmp27041 = inst_27005;
var inst_27005__$1 = tmp27041;
var state_27033__$1 = (function (){var statearr_27044 = state_27033;
(statearr_27044[(10)] = inst_27005__$1);

(statearr_27044[(11)] = inst_27022);

return statearr_27044;
})();
var statearr_27045_27064 = state_27033__$1;
(statearr_27045_27064[(2)] = null);

(statearr_27045_27064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27034 === (9))){
var inst_27013 = (state_27033[(8)]);
var state_27033__$1 = state_27033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27033__$1,(11),out,inst_27013);
} else {
if((state_val_27034 === (5))){
var inst_27027 = cljs.core.async.close_BANG_.call(null,out);
var state_27033__$1 = state_27033;
var statearr_27046_27065 = state_27033__$1;
(statearr_27046_27065[(2)] = inst_27027);

(statearr_27046_27065[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27034 === (10))){
var inst_27025 = (state_27033[(2)]);
var state_27033__$1 = state_27033;
var statearr_27047_27066 = state_27033__$1;
(statearr_27047_27066[(2)] = inst_27025);

(statearr_27047_27066[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27034 === (8))){
var inst_27012 = (state_27033[(7)]);
var inst_27013 = (state_27033[(8)]);
var inst_27014 = (state_27033[(9)]);
var inst_27005 = (state_27033[(10)]);
var inst_27017 = (function (){var c = inst_27014;
var v = inst_27013;
var vec__27010 = inst_27012;
var cs = inst_27005;
return ((function (c,v,vec__27010,cs,inst_27012,inst_27013,inst_27014,inst_27005,state_val_27034,c__8633__auto___27057,out){
return (function (p1__26950_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26950_SHARP_);
});
;})(c,v,vec__27010,cs,inst_27012,inst_27013,inst_27014,inst_27005,state_val_27034,c__8633__auto___27057,out))
})();
var inst_27018 = cljs.core.filterv.call(null,inst_27017,inst_27005);
var inst_27005__$1 = inst_27018;
var state_27033__$1 = (function (){var statearr_27048 = state_27033;
(statearr_27048[(10)] = inst_27005__$1);

return statearr_27048;
})();
var statearr_27049_27067 = state_27033__$1;
(statearr_27049_27067[(2)] = null);

(statearr_27049_27067[(1)] = (2));


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
});})(c__8633__auto___27057,out))
;
return ((function (switch__8577__auto__,c__8633__auto___27057,out){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_27053 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27053[(0)] = state_machine__8578__auto__);

(statearr_27053[(1)] = (1));

return statearr_27053;
});
var state_machine__8578__auto____1 = (function (state_27033){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_27033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e27054){if((e27054 instanceof Object)){
var ex__8581__auto__ = e27054;
var statearr_27055_27068 = state_27033;
(statearr_27055_27068[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27069 = state_27033;
state_27033 = G__27069;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_27033){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_27033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto___27057,out))
})();
var state__8635__auto__ = (function (){var statearr_27056 = f__8634__auto__.call(null);
(statearr_27056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto___27057);

return statearr_27056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto___27057,out))
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
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8633__auto___27162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto___27162,out){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto___27162,out){
return (function (state_27139){
var state_val_27140 = (state_27139[(1)]);
if((state_val_27140 === (7))){
var inst_27121 = (state_27139[(7)]);
var inst_27121__$1 = (state_27139[(2)]);
var inst_27122 = (inst_27121__$1 == null);
var inst_27123 = cljs.core.not.call(null,inst_27122);
var state_27139__$1 = (function (){var statearr_27141 = state_27139;
(statearr_27141[(7)] = inst_27121__$1);

return statearr_27141;
})();
if(inst_27123){
var statearr_27142_27163 = state_27139__$1;
(statearr_27142_27163[(1)] = (8));

} else {
var statearr_27143_27164 = state_27139__$1;
(statearr_27143_27164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27140 === (1))){
var inst_27116 = (0);
var state_27139__$1 = (function (){var statearr_27144 = state_27139;
(statearr_27144[(8)] = inst_27116);

return statearr_27144;
})();
var statearr_27145_27165 = state_27139__$1;
(statearr_27145_27165[(2)] = null);

(statearr_27145_27165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27140 === (4))){
var state_27139__$1 = state_27139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27139__$1,(7),ch);
} else {
if((state_val_27140 === (6))){
var inst_27134 = (state_27139[(2)]);
var state_27139__$1 = state_27139;
var statearr_27146_27166 = state_27139__$1;
(statearr_27146_27166[(2)] = inst_27134);

(statearr_27146_27166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27140 === (3))){
var inst_27136 = (state_27139[(2)]);
var inst_27137 = cljs.core.async.close_BANG_.call(null,out);
var state_27139__$1 = (function (){var statearr_27147 = state_27139;
(statearr_27147[(9)] = inst_27136);

return statearr_27147;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27139__$1,inst_27137);
} else {
if((state_val_27140 === (2))){
var inst_27116 = (state_27139[(8)]);
var inst_27118 = (inst_27116 < n);
var state_27139__$1 = state_27139;
if(cljs.core.truth_(inst_27118)){
var statearr_27148_27167 = state_27139__$1;
(statearr_27148_27167[(1)] = (4));

} else {
var statearr_27149_27168 = state_27139__$1;
(statearr_27149_27168[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27140 === (11))){
var inst_27116 = (state_27139[(8)]);
var inst_27126 = (state_27139[(2)]);
var inst_27127 = (inst_27116 + (1));
var inst_27116__$1 = inst_27127;
var state_27139__$1 = (function (){var statearr_27150 = state_27139;
(statearr_27150[(8)] = inst_27116__$1);

(statearr_27150[(10)] = inst_27126);

return statearr_27150;
})();
var statearr_27151_27169 = state_27139__$1;
(statearr_27151_27169[(2)] = null);

(statearr_27151_27169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27140 === (9))){
var state_27139__$1 = state_27139;
var statearr_27152_27170 = state_27139__$1;
(statearr_27152_27170[(2)] = null);

(statearr_27152_27170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27140 === (5))){
var state_27139__$1 = state_27139;
var statearr_27153_27171 = state_27139__$1;
(statearr_27153_27171[(2)] = null);

(statearr_27153_27171[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27140 === (10))){
var inst_27131 = (state_27139[(2)]);
var state_27139__$1 = state_27139;
var statearr_27154_27172 = state_27139__$1;
(statearr_27154_27172[(2)] = inst_27131);

(statearr_27154_27172[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27140 === (8))){
var inst_27121 = (state_27139[(7)]);
var state_27139__$1 = state_27139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27139__$1,(11),out,inst_27121);
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
});})(c__8633__auto___27162,out))
;
return ((function (switch__8577__auto__,c__8633__auto___27162,out){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_27158 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27158[(0)] = state_machine__8578__auto__);

(statearr_27158[(1)] = (1));

return statearr_27158;
});
var state_machine__8578__auto____1 = (function (state_27139){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_27139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e27159){if((e27159 instanceof Object)){
var ex__8581__auto__ = e27159;
var statearr_27160_27173 = state_27139;
(statearr_27160_27173[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27174 = state_27139;
state_27139 = G__27174;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_27139){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_27139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto___27162,out))
})();
var state__8635__auto__ = (function (){var statearr_27161 = f__8634__auto__.call(null);
(statearr_27161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto___27162);

return statearr_27161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto___27162,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t27182 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27182 = (function (ch,f,map_LT_,meta27183){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27183 = meta27183;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27182.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27182.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t27182.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27182.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t27185 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27185 = (function (fn1,_,meta27183,map_LT_,f,ch,meta27186){
this.fn1 = fn1;
this._ = _;
this.meta27183 = meta27183;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27186 = meta27186;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27185.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27185.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t27185.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27175_SHARP_){
return f1.call(null,(((p1__27175_SHARP_ == null))?null:self__.f.call(null,p1__27175_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t27185.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27187){
var self__ = this;
var _27187__$1 = this;
return self__.meta27186;
});})(___$1))
;

cljs.core.async.t27185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27187,meta27186__$1){
var self__ = this;
var _27187__$1 = this;
return (new cljs.core.async.t27185(self__.fn1,self__._,self__.meta27183,self__.map_LT_,self__.f,self__.ch,meta27186__$1));
});})(___$1))
;

cljs.core.async.t27185.cljs$lang$type = true;

cljs.core.async.t27185.cljs$lang$ctorStr = "cljs.core.async/t27185";

cljs.core.async.t27185.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t27185");
});})(___$1))
;

cljs.core.async.__GT_t27185 = ((function (___$1){
return (function __GT_t27185(fn1__$1,___$2,meta27183__$1,map_LT___$1,f__$1,ch__$1,meta27186){
return (new cljs.core.async.t27185(fn1__$1,___$2,meta27183__$1,map_LT___$1,f__$1,ch__$1,meta27186));
});})(___$1))
;

}

return (new cljs.core.async.t27185(fn1,___$1,self__.meta27183,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/../server/static/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3626__auto__ = ret;
if(cljs.core.truth_(and__3626__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3626__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t27182.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27182.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27182.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27182.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27184){
var self__ = this;
var _27184__$1 = this;
return self__.meta27183;
});

cljs.core.async.t27182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27184,meta27183__$1){
var self__ = this;
var _27184__$1 = this;
return (new cljs.core.async.t27182(self__.ch,self__.f,self__.map_LT_,meta27183__$1));
});

cljs.core.async.t27182.cljs$lang$type = true;

cljs.core.async.t27182.cljs$lang$ctorStr = "cljs.core.async/t27182";

cljs.core.async.t27182.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t27182");
});

cljs.core.async.__GT_t27182 = (function __GT_t27182(ch__$1,f__$1,map_LT___$1,meta27183){
return (new cljs.core.async.t27182(ch__$1,f__$1,map_LT___$1,meta27183));
});

}

return (new cljs.core.async.t27182(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/../server/static/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t27191 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27191 = (function (ch,f,map_GT_,meta27192){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27192 = meta27192;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27191.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27191.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t27191.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27191.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27191.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27191.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27193){
var self__ = this;
var _27193__$1 = this;
return self__.meta27192;
});

cljs.core.async.t27191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27193,meta27192__$1){
var self__ = this;
var _27193__$1 = this;
return (new cljs.core.async.t27191(self__.ch,self__.f,self__.map_GT_,meta27192__$1));
});

cljs.core.async.t27191.cljs$lang$type = true;

cljs.core.async.t27191.cljs$lang$ctorStr = "cljs.core.async/t27191";

cljs.core.async.t27191.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t27191");
});

cljs.core.async.__GT_t27191 = (function __GT_t27191(ch__$1,f__$1,map_GT___$1,meta27192){
return (new cljs.core.async.t27191(ch__$1,f__$1,map_GT___$1,meta27192));
});

}

return (new cljs.core.async.t27191(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/../server/static/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t27197 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27197 = (function (ch,p,filter_GT_,meta27198){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27198 = meta27198;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27197.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27197.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t27197.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27197.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27197.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27197.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27197.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27199){
var self__ = this;
var _27199__$1 = this;
return self__.meta27198;
});

cljs.core.async.t27197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27199,meta27198__$1){
var self__ = this;
var _27199__$1 = this;
return (new cljs.core.async.t27197(self__.ch,self__.p,self__.filter_GT_,meta27198__$1));
});

cljs.core.async.t27197.cljs$lang$type = true;

cljs.core.async.t27197.cljs$lang$ctorStr = "cljs.core.async/t27197";

cljs.core.async.t27197.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t27197");
});

cljs.core.async.__GT_t27197 = (function __GT_t27197(ch__$1,p__$1,filter_GT___$1,meta27198){
return (new cljs.core.async.t27197(ch__$1,p__$1,filter_GT___$1,meta27198));
});

}

return (new cljs.core.async.t27197(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/../server/static/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8633__auto___27282 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto___27282,out){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto___27282,out){
return (function (state_27261){
var state_val_27262 = (state_27261[(1)]);
if((state_val_27262 === (7))){
var inst_27257 = (state_27261[(2)]);
var state_27261__$1 = state_27261;
var statearr_27263_27283 = state_27261__$1;
(statearr_27263_27283[(2)] = inst_27257);

(statearr_27263_27283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27262 === (1))){
var state_27261__$1 = state_27261;
var statearr_27264_27284 = state_27261__$1;
(statearr_27264_27284[(2)] = null);

(statearr_27264_27284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27262 === (4))){
var inst_27243 = (state_27261[(7)]);
var inst_27243__$1 = (state_27261[(2)]);
var inst_27244 = (inst_27243__$1 == null);
var state_27261__$1 = (function (){var statearr_27265 = state_27261;
(statearr_27265[(7)] = inst_27243__$1);

return statearr_27265;
})();
if(cljs.core.truth_(inst_27244)){
var statearr_27266_27285 = state_27261__$1;
(statearr_27266_27285[(1)] = (5));

} else {
var statearr_27267_27286 = state_27261__$1;
(statearr_27267_27286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27262 === (6))){
var inst_27243 = (state_27261[(7)]);
var inst_27248 = p.call(null,inst_27243);
var state_27261__$1 = state_27261;
if(cljs.core.truth_(inst_27248)){
var statearr_27268_27287 = state_27261__$1;
(statearr_27268_27287[(1)] = (8));

} else {
var statearr_27269_27288 = state_27261__$1;
(statearr_27269_27288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27262 === (3))){
var inst_27259 = (state_27261[(2)]);
var state_27261__$1 = state_27261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27261__$1,inst_27259);
} else {
if((state_val_27262 === (2))){
var state_27261__$1 = state_27261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27261__$1,(4),ch);
} else {
if((state_val_27262 === (11))){
var inst_27251 = (state_27261[(2)]);
var state_27261__$1 = state_27261;
var statearr_27270_27289 = state_27261__$1;
(statearr_27270_27289[(2)] = inst_27251);

(statearr_27270_27289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27262 === (9))){
var state_27261__$1 = state_27261;
var statearr_27271_27290 = state_27261__$1;
(statearr_27271_27290[(2)] = null);

(statearr_27271_27290[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27262 === (5))){
var inst_27246 = cljs.core.async.close_BANG_.call(null,out);
var state_27261__$1 = state_27261;
var statearr_27272_27291 = state_27261__$1;
(statearr_27272_27291[(2)] = inst_27246);

(statearr_27272_27291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27262 === (10))){
var inst_27254 = (state_27261[(2)]);
var state_27261__$1 = (function (){var statearr_27273 = state_27261;
(statearr_27273[(8)] = inst_27254);

return statearr_27273;
})();
var statearr_27274_27292 = state_27261__$1;
(statearr_27274_27292[(2)] = null);

(statearr_27274_27292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27262 === (8))){
var inst_27243 = (state_27261[(7)]);
var state_27261__$1 = state_27261;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27261__$1,(11),out,inst_27243);
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
});})(c__8633__auto___27282,out))
;
return ((function (switch__8577__auto__,c__8633__auto___27282,out){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_27278 = [null,null,null,null,null,null,null,null,null];
(statearr_27278[(0)] = state_machine__8578__auto__);

(statearr_27278[(1)] = (1));

return statearr_27278;
});
var state_machine__8578__auto____1 = (function (state_27261){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_27261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e27279){if((e27279 instanceof Object)){
var ex__8581__auto__ = e27279;
var statearr_27280_27293 = state_27261;
(statearr_27280_27293[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27294 = state_27261;
state_27261 = G__27294;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_27261){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_27261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto___27282,out))
})();
var state__8635__auto__ = (function (){var statearr_27281 = f__8634__auto__.call(null);
(statearr_27281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto___27282);

return statearr_27281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto___27282,out))
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
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__8633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto__){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto__){
return (function (state_27460){
var state_val_27461 = (state_27460[(1)]);
if((state_val_27461 === (7))){
var inst_27456 = (state_27460[(2)]);
var state_27460__$1 = state_27460;
var statearr_27462_27503 = state_27460__$1;
(statearr_27462_27503[(2)] = inst_27456);

(statearr_27462_27503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (20))){
var inst_27426 = (state_27460[(7)]);
var inst_27437 = (state_27460[(2)]);
var inst_27438 = cljs.core.next.call(null,inst_27426);
var inst_27412 = inst_27438;
var inst_27413 = null;
var inst_27414 = (0);
var inst_27415 = (0);
var state_27460__$1 = (function (){var statearr_27463 = state_27460;
(statearr_27463[(8)] = inst_27415);

(statearr_27463[(9)] = inst_27414);

(statearr_27463[(10)] = inst_27437);

(statearr_27463[(11)] = inst_27413);

(statearr_27463[(12)] = inst_27412);

return statearr_27463;
})();
var statearr_27464_27504 = state_27460__$1;
(statearr_27464_27504[(2)] = null);

(statearr_27464_27504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (1))){
var state_27460__$1 = state_27460;
var statearr_27465_27505 = state_27460__$1;
(statearr_27465_27505[(2)] = null);

(statearr_27465_27505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (4))){
var inst_27401 = (state_27460[(13)]);
var inst_27401__$1 = (state_27460[(2)]);
var inst_27402 = (inst_27401__$1 == null);
var state_27460__$1 = (function (){var statearr_27466 = state_27460;
(statearr_27466[(13)] = inst_27401__$1);

return statearr_27466;
})();
if(cljs.core.truth_(inst_27402)){
var statearr_27467_27506 = state_27460__$1;
(statearr_27467_27506[(1)] = (5));

} else {
var statearr_27468_27507 = state_27460__$1;
(statearr_27468_27507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (15))){
var state_27460__$1 = state_27460;
var statearr_27472_27508 = state_27460__$1;
(statearr_27472_27508[(2)] = null);

(statearr_27472_27508[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (21))){
var state_27460__$1 = state_27460;
var statearr_27473_27509 = state_27460__$1;
(statearr_27473_27509[(2)] = null);

(statearr_27473_27509[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (13))){
var inst_27415 = (state_27460[(8)]);
var inst_27414 = (state_27460[(9)]);
var inst_27413 = (state_27460[(11)]);
var inst_27412 = (state_27460[(12)]);
var inst_27422 = (state_27460[(2)]);
var inst_27423 = (inst_27415 + (1));
var tmp27469 = inst_27414;
var tmp27470 = inst_27413;
var tmp27471 = inst_27412;
var inst_27412__$1 = tmp27471;
var inst_27413__$1 = tmp27470;
var inst_27414__$1 = tmp27469;
var inst_27415__$1 = inst_27423;
var state_27460__$1 = (function (){var statearr_27474 = state_27460;
(statearr_27474[(8)] = inst_27415__$1);

(statearr_27474[(9)] = inst_27414__$1);

(statearr_27474[(14)] = inst_27422);

(statearr_27474[(11)] = inst_27413__$1);

(statearr_27474[(12)] = inst_27412__$1);

return statearr_27474;
})();
var statearr_27475_27510 = state_27460__$1;
(statearr_27475_27510[(2)] = null);

(statearr_27475_27510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (22))){
var state_27460__$1 = state_27460;
var statearr_27476_27511 = state_27460__$1;
(statearr_27476_27511[(2)] = null);

(statearr_27476_27511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (6))){
var inst_27401 = (state_27460[(13)]);
var inst_27410 = f.call(null,inst_27401);
var inst_27411 = cljs.core.seq.call(null,inst_27410);
var inst_27412 = inst_27411;
var inst_27413 = null;
var inst_27414 = (0);
var inst_27415 = (0);
var state_27460__$1 = (function (){var statearr_27477 = state_27460;
(statearr_27477[(8)] = inst_27415);

(statearr_27477[(9)] = inst_27414);

(statearr_27477[(11)] = inst_27413);

(statearr_27477[(12)] = inst_27412);

return statearr_27477;
})();
var statearr_27478_27512 = state_27460__$1;
(statearr_27478_27512[(2)] = null);

(statearr_27478_27512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (17))){
var inst_27426 = (state_27460[(7)]);
var inst_27430 = cljs.core.chunk_first.call(null,inst_27426);
var inst_27431 = cljs.core.chunk_rest.call(null,inst_27426);
var inst_27432 = cljs.core.count.call(null,inst_27430);
var inst_27412 = inst_27431;
var inst_27413 = inst_27430;
var inst_27414 = inst_27432;
var inst_27415 = (0);
var state_27460__$1 = (function (){var statearr_27479 = state_27460;
(statearr_27479[(8)] = inst_27415);

(statearr_27479[(9)] = inst_27414);

(statearr_27479[(11)] = inst_27413);

(statearr_27479[(12)] = inst_27412);

return statearr_27479;
})();
var statearr_27480_27513 = state_27460__$1;
(statearr_27480_27513[(2)] = null);

(statearr_27480_27513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (3))){
var inst_27458 = (state_27460[(2)]);
var state_27460__$1 = state_27460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27460__$1,inst_27458);
} else {
if((state_val_27461 === (12))){
var inst_27446 = (state_27460[(2)]);
var state_27460__$1 = state_27460;
var statearr_27481_27514 = state_27460__$1;
(statearr_27481_27514[(2)] = inst_27446);

(statearr_27481_27514[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (2))){
var state_27460__$1 = state_27460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27460__$1,(4),in$);
} else {
if((state_val_27461 === (23))){
var inst_27454 = (state_27460[(2)]);
var state_27460__$1 = state_27460;
var statearr_27482_27515 = state_27460__$1;
(statearr_27482_27515[(2)] = inst_27454);

(statearr_27482_27515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (19))){
var inst_27441 = (state_27460[(2)]);
var state_27460__$1 = state_27460;
var statearr_27483_27516 = state_27460__$1;
(statearr_27483_27516[(2)] = inst_27441);

(statearr_27483_27516[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (11))){
var inst_27426 = (state_27460[(7)]);
var inst_27412 = (state_27460[(12)]);
var inst_27426__$1 = cljs.core.seq.call(null,inst_27412);
var state_27460__$1 = (function (){var statearr_27484 = state_27460;
(statearr_27484[(7)] = inst_27426__$1);

return statearr_27484;
})();
if(inst_27426__$1){
var statearr_27485_27517 = state_27460__$1;
(statearr_27485_27517[(1)] = (14));

} else {
var statearr_27486_27518 = state_27460__$1;
(statearr_27486_27518[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (9))){
var inst_27448 = (state_27460[(2)]);
var inst_27449 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27460__$1 = (function (){var statearr_27487 = state_27460;
(statearr_27487[(15)] = inst_27448);

return statearr_27487;
})();
if(cljs.core.truth_(inst_27449)){
var statearr_27488_27519 = state_27460__$1;
(statearr_27488_27519[(1)] = (21));

} else {
var statearr_27489_27520 = state_27460__$1;
(statearr_27489_27520[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (5))){
var inst_27404 = cljs.core.async.close_BANG_.call(null,out);
var state_27460__$1 = state_27460;
var statearr_27490_27521 = state_27460__$1;
(statearr_27490_27521[(2)] = inst_27404);

(statearr_27490_27521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (14))){
var inst_27426 = (state_27460[(7)]);
var inst_27428 = cljs.core.chunked_seq_QMARK_.call(null,inst_27426);
var state_27460__$1 = state_27460;
if(inst_27428){
var statearr_27491_27522 = state_27460__$1;
(statearr_27491_27522[(1)] = (17));

} else {
var statearr_27492_27523 = state_27460__$1;
(statearr_27492_27523[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (16))){
var inst_27444 = (state_27460[(2)]);
var state_27460__$1 = state_27460;
var statearr_27493_27524 = state_27460__$1;
(statearr_27493_27524[(2)] = inst_27444);

(statearr_27493_27524[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (10))){
var inst_27415 = (state_27460[(8)]);
var inst_27413 = (state_27460[(11)]);
var inst_27420 = cljs.core._nth.call(null,inst_27413,inst_27415);
var state_27460__$1 = state_27460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27460__$1,(13),out,inst_27420);
} else {
if((state_val_27461 === (18))){
var inst_27426 = (state_27460[(7)]);
var inst_27435 = cljs.core.first.call(null,inst_27426);
var state_27460__$1 = state_27460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27460__$1,(20),out,inst_27435);
} else {
if((state_val_27461 === (8))){
var inst_27415 = (state_27460[(8)]);
var inst_27414 = (state_27460[(9)]);
var inst_27417 = (inst_27415 < inst_27414);
var inst_27418 = inst_27417;
var state_27460__$1 = state_27460;
if(cljs.core.truth_(inst_27418)){
var statearr_27494_27525 = state_27460__$1;
(statearr_27494_27525[(1)] = (10));

} else {
var statearr_27495_27526 = state_27460__$1;
(statearr_27495_27526[(1)] = (11));

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
});})(c__8633__auto__))
;
return ((function (switch__8577__auto__,c__8633__auto__){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_27499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27499[(0)] = state_machine__8578__auto__);

(statearr_27499[(1)] = (1));

return statearr_27499;
});
var state_machine__8578__auto____1 = (function (state_27460){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_27460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e27500){if((e27500 instanceof Object)){
var ex__8581__auto__ = e27500;
var statearr_27501_27527 = state_27460;
(statearr_27501_27527[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27528 = state_27460;
state_27460 = G__27528;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_27460){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_27460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto__))
})();
var state__8635__auto__ = (function (){var statearr_27502 = f__8634__auto__.call(null);
(statearr_27502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto__);

return statearr_27502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto__))
);

return c__8633__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

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
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

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
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8633__auto___27625 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto___27625,out){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto___27625,out){
return (function (state_27600){
var state_val_27601 = (state_27600[(1)]);
if((state_val_27601 === (7))){
var inst_27595 = (state_27600[(2)]);
var state_27600__$1 = state_27600;
var statearr_27602_27626 = state_27600__$1;
(statearr_27602_27626[(2)] = inst_27595);

(statearr_27602_27626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27601 === (1))){
var inst_27577 = null;
var state_27600__$1 = (function (){var statearr_27603 = state_27600;
(statearr_27603[(7)] = inst_27577);

return statearr_27603;
})();
var statearr_27604_27627 = state_27600__$1;
(statearr_27604_27627[(2)] = null);

(statearr_27604_27627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27601 === (4))){
var inst_27580 = (state_27600[(8)]);
var inst_27580__$1 = (state_27600[(2)]);
var inst_27581 = (inst_27580__$1 == null);
var inst_27582 = cljs.core.not.call(null,inst_27581);
var state_27600__$1 = (function (){var statearr_27605 = state_27600;
(statearr_27605[(8)] = inst_27580__$1);

return statearr_27605;
})();
if(inst_27582){
var statearr_27606_27628 = state_27600__$1;
(statearr_27606_27628[(1)] = (5));

} else {
var statearr_27607_27629 = state_27600__$1;
(statearr_27607_27629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27601 === (6))){
var state_27600__$1 = state_27600;
var statearr_27608_27630 = state_27600__$1;
(statearr_27608_27630[(2)] = null);

(statearr_27608_27630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27601 === (3))){
var inst_27597 = (state_27600[(2)]);
var inst_27598 = cljs.core.async.close_BANG_.call(null,out);
var state_27600__$1 = (function (){var statearr_27609 = state_27600;
(statearr_27609[(9)] = inst_27597);

return statearr_27609;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27600__$1,inst_27598);
} else {
if((state_val_27601 === (2))){
var state_27600__$1 = state_27600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27600__$1,(4),ch);
} else {
if((state_val_27601 === (11))){
var inst_27580 = (state_27600[(8)]);
var inst_27589 = (state_27600[(2)]);
var inst_27577 = inst_27580;
var state_27600__$1 = (function (){var statearr_27610 = state_27600;
(statearr_27610[(7)] = inst_27577);

(statearr_27610[(10)] = inst_27589);

return statearr_27610;
})();
var statearr_27611_27631 = state_27600__$1;
(statearr_27611_27631[(2)] = null);

(statearr_27611_27631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27601 === (9))){
var inst_27580 = (state_27600[(8)]);
var state_27600__$1 = state_27600;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27600__$1,(11),out,inst_27580);
} else {
if((state_val_27601 === (5))){
var inst_27577 = (state_27600[(7)]);
var inst_27580 = (state_27600[(8)]);
var inst_27584 = cljs.core._EQ_.call(null,inst_27580,inst_27577);
var state_27600__$1 = state_27600;
if(inst_27584){
var statearr_27613_27632 = state_27600__$1;
(statearr_27613_27632[(1)] = (8));

} else {
var statearr_27614_27633 = state_27600__$1;
(statearr_27614_27633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27601 === (10))){
var inst_27592 = (state_27600[(2)]);
var state_27600__$1 = state_27600;
var statearr_27615_27634 = state_27600__$1;
(statearr_27615_27634[(2)] = inst_27592);

(statearr_27615_27634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27601 === (8))){
var inst_27577 = (state_27600[(7)]);
var tmp27612 = inst_27577;
var inst_27577__$1 = tmp27612;
var state_27600__$1 = (function (){var statearr_27616 = state_27600;
(statearr_27616[(7)] = inst_27577__$1);

return statearr_27616;
})();
var statearr_27617_27635 = state_27600__$1;
(statearr_27617_27635[(2)] = null);

(statearr_27617_27635[(1)] = (2));


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
});})(c__8633__auto___27625,out))
;
return ((function (switch__8577__auto__,c__8633__auto___27625,out){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_27621 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27621[(0)] = state_machine__8578__auto__);

(statearr_27621[(1)] = (1));

return statearr_27621;
});
var state_machine__8578__auto____1 = (function (state_27600){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_27600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e27622){if((e27622 instanceof Object)){
var ex__8581__auto__ = e27622;
var statearr_27623_27636 = state_27600;
(statearr_27623_27636[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27637 = state_27600;
state_27600 = G__27637;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_27600){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_27600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto___27625,out))
})();
var state__8635__auto__ = (function (){var statearr_27624 = f__8634__auto__.call(null);
(statearr_27624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto___27625);

return statearr_27624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto___27625,out))
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
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8633__auto___27772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto___27772,out){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto___27772,out){
return (function (state_27742){
var state_val_27743 = (state_27742[(1)]);
if((state_val_27743 === (7))){
var inst_27738 = (state_27742[(2)]);
var state_27742__$1 = state_27742;
var statearr_27744_27773 = state_27742__$1;
(statearr_27744_27773[(2)] = inst_27738);

(statearr_27744_27773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (1))){
var inst_27705 = (new Array(n));
var inst_27706 = inst_27705;
var inst_27707 = (0);
var state_27742__$1 = (function (){var statearr_27745 = state_27742;
(statearr_27745[(7)] = inst_27706);

(statearr_27745[(8)] = inst_27707);

return statearr_27745;
})();
var statearr_27746_27774 = state_27742__$1;
(statearr_27746_27774[(2)] = null);

(statearr_27746_27774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (4))){
var inst_27710 = (state_27742[(9)]);
var inst_27710__$1 = (state_27742[(2)]);
var inst_27711 = (inst_27710__$1 == null);
var inst_27712 = cljs.core.not.call(null,inst_27711);
var state_27742__$1 = (function (){var statearr_27747 = state_27742;
(statearr_27747[(9)] = inst_27710__$1);

return statearr_27747;
})();
if(inst_27712){
var statearr_27748_27775 = state_27742__$1;
(statearr_27748_27775[(1)] = (5));

} else {
var statearr_27749_27776 = state_27742__$1;
(statearr_27749_27776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (15))){
var inst_27732 = (state_27742[(2)]);
var state_27742__$1 = state_27742;
var statearr_27750_27777 = state_27742__$1;
(statearr_27750_27777[(2)] = inst_27732);

(statearr_27750_27777[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (13))){
var state_27742__$1 = state_27742;
var statearr_27751_27778 = state_27742__$1;
(statearr_27751_27778[(2)] = null);

(statearr_27751_27778[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (6))){
var inst_27707 = (state_27742[(8)]);
var inst_27728 = (inst_27707 > (0));
var state_27742__$1 = state_27742;
if(cljs.core.truth_(inst_27728)){
var statearr_27752_27779 = state_27742__$1;
(statearr_27752_27779[(1)] = (12));

} else {
var statearr_27753_27780 = state_27742__$1;
(statearr_27753_27780[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (3))){
var inst_27740 = (state_27742[(2)]);
var state_27742__$1 = state_27742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27742__$1,inst_27740);
} else {
if((state_val_27743 === (12))){
var inst_27706 = (state_27742[(7)]);
var inst_27730 = cljs.core.vec.call(null,inst_27706);
var state_27742__$1 = state_27742;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27742__$1,(15),out,inst_27730);
} else {
if((state_val_27743 === (2))){
var state_27742__$1 = state_27742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27742__$1,(4),ch);
} else {
if((state_val_27743 === (11))){
var inst_27722 = (state_27742[(2)]);
var inst_27723 = (new Array(n));
var inst_27706 = inst_27723;
var inst_27707 = (0);
var state_27742__$1 = (function (){var statearr_27754 = state_27742;
(statearr_27754[(7)] = inst_27706);

(statearr_27754[(8)] = inst_27707);

(statearr_27754[(10)] = inst_27722);

return statearr_27754;
})();
var statearr_27755_27781 = state_27742__$1;
(statearr_27755_27781[(2)] = null);

(statearr_27755_27781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (9))){
var inst_27706 = (state_27742[(7)]);
var inst_27720 = cljs.core.vec.call(null,inst_27706);
var state_27742__$1 = state_27742;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27742__$1,(11),out,inst_27720);
} else {
if((state_val_27743 === (5))){
var inst_27706 = (state_27742[(7)]);
var inst_27707 = (state_27742[(8)]);
var inst_27715 = (state_27742[(11)]);
var inst_27710 = (state_27742[(9)]);
var inst_27714 = (inst_27706[inst_27707] = inst_27710);
var inst_27715__$1 = (inst_27707 + (1));
var inst_27716 = (inst_27715__$1 < n);
var state_27742__$1 = (function (){var statearr_27756 = state_27742;
(statearr_27756[(12)] = inst_27714);

(statearr_27756[(11)] = inst_27715__$1);

return statearr_27756;
})();
if(cljs.core.truth_(inst_27716)){
var statearr_27757_27782 = state_27742__$1;
(statearr_27757_27782[(1)] = (8));

} else {
var statearr_27758_27783 = state_27742__$1;
(statearr_27758_27783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (14))){
var inst_27735 = (state_27742[(2)]);
var inst_27736 = cljs.core.async.close_BANG_.call(null,out);
var state_27742__$1 = (function (){var statearr_27760 = state_27742;
(statearr_27760[(13)] = inst_27735);

return statearr_27760;
})();
var statearr_27761_27784 = state_27742__$1;
(statearr_27761_27784[(2)] = inst_27736);

(statearr_27761_27784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (10))){
var inst_27726 = (state_27742[(2)]);
var state_27742__$1 = state_27742;
var statearr_27762_27785 = state_27742__$1;
(statearr_27762_27785[(2)] = inst_27726);

(statearr_27762_27785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (8))){
var inst_27706 = (state_27742[(7)]);
var inst_27715 = (state_27742[(11)]);
var tmp27759 = inst_27706;
var inst_27706__$1 = tmp27759;
var inst_27707 = inst_27715;
var state_27742__$1 = (function (){var statearr_27763 = state_27742;
(statearr_27763[(7)] = inst_27706__$1);

(statearr_27763[(8)] = inst_27707);

return statearr_27763;
})();
var statearr_27764_27786 = state_27742__$1;
(statearr_27764_27786[(2)] = null);

(statearr_27764_27786[(1)] = (2));


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
});})(c__8633__auto___27772,out))
;
return ((function (switch__8577__auto__,c__8633__auto___27772,out){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_27768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27768[(0)] = state_machine__8578__auto__);

(statearr_27768[(1)] = (1));

return statearr_27768;
});
var state_machine__8578__auto____1 = (function (state_27742){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_27742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e27769){if((e27769 instanceof Object)){
var ex__8581__auto__ = e27769;
var statearr_27770_27787 = state_27742;
(statearr_27770_27787[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27788 = state_27742;
state_27742 = G__27788;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_27742){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_27742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto___27772,out))
})();
var state__8635__auto__ = (function (){var statearr_27771 = f__8634__auto__.call(null);
(statearr_27771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto___27772);

return statearr_27771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto___27772,out))
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
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8633__auto___27931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto___27931,out){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto___27931,out){
return (function (state_27901){
var state_val_27902 = (state_27901[(1)]);
if((state_val_27902 === (7))){
var inst_27897 = (state_27901[(2)]);
var state_27901__$1 = state_27901;
var statearr_27903_27932 = state_27901__$1;
(statearr_27903_27932[(2)] = inst_27897);

(statearr_27903_27932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27902 === (1))){
var inst_27860 = [];
var inst_27861 = inst_27860;
var inst_27862 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27901__$1 = (function (){var statearr_27904 = state_27901;
(statearr_27904[(7)] = inst_27861);

(statearr_27904[(8)] = inst_27862);

return statearr_27904;
})();
var statearr_27905_27933 = state_27901__$1;
(statearr_27905_27933[(2)] = null);

(statearr_27905_27933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27902 === (4))){
var inst_27865 = (state_27901[(9)]);
var inst_27865__$1 = (state_27901[(2)]);
var inst_27866 = (inst_27865__$1 == null);
var inst_27867 = cljs.core.not.call(null,inst_27866);
var state_27901__$1 = (function (){var statearr_27906 = state_27901;
(statearr_27906[(9)] = inst_27865__$1);

return statearr_27906;
})();
if(inst_27867){
var statearr_27907_27934 = state_27901__$1;
(statearr_27907_27934[(1)] = (5));

} else {
var statearr_27908_27935 = state_27901__$1;
(statearr_27908_27935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27902 === (15))){
var inst_27891 = (state_27901[(2)]);
var state_27901__$1 = state_27901;
var statearr_27909_27936 = state_27901__$1;
(statearr_27909_27936[(2)] = inst_27891);

(statearr_27909_27936[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27902 === (13))){
var state_27901__$1 = state_27901;
var statearr_27910_27937 = state_27901__$1;
(statearr_27910_27937[(2)] = null);

(statearr_27910_27937[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27902 === (6))){
var inst_27861 = (state_27901[(7)]);
var inst_27886 = inst_27861.length;
var inst_27887 = (inst_27886 > (0));
var state_27901__$1 = state_27901;
if(cljs.core.truth_(inst_27887)){
var statearr_27911_27938 = state_27901__$1;
(statearr_27911_27938[(1)] = (12));

} else {
var statearr_27912_27939 = state_27901__$1;
(statearr_27912_27939[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27902 === (3))){
var inst_27899 = (state_27901[(2)]);
var state_27901__$1 = state_27901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27901__$1,inst_27899);
} else {
if((state_val_27902 === (12))){
var inst_27861 = (state_27901[(7)]);
var inst_27889 = cljs.core.vec.call(null,inst_27861);
var state_27901__$1 = state_27901;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27901__$1,(15),out,inst_27889);
} else {
if((state_val_27902 === (2))){
var state_27901__$1 = state_27901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27901__$1,(4),ch);
} else {
if((state_val_27902 === (11))){
var inst_27869 = (state_27901[(10)]);
var inst_27865 = (state_27901[(9)]);
var inst_27879 = (state_27901[(2)]);
var inst_27880 = [];
var inst_27881 = inst_27880.push(inst_27865);
var inst_27861 = inst_27880;
var inst_27862 = inst_27869;
var state_27901__$1 = (function (){var statearr_27913 = state_27901;
(statearr_27913[(11)] = inst_27879);

(statearr_27913[(12)] = inst_27881);

(statearr_27913[(7)] = inst_27861);

(statearr_27913[(8)] = inst_27862);

return statearr_27913;
})();
var statearr_27914_27940 = state_27901__$1;
(statearr_27914_27940[(2)] = null);

(statearr_27914_27940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27902 === (9))){
var inst_27861 = (state_27901[(7)]);
var inst_27877 = cljs.core.vec.call(null,inst_27861);
var state_27901__$1 = state_27901;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27901__$1,(11),out,inst_27877);
} else {
if((state_val_27902 === (5))){
var inst_27869 = (state_27901[(10)]);
var inst_27865 = (state_27901[(9)]);
var inst_27862 = (state_27901[(8)]);
var inst_27869__$1 = f.call(null,inst_27865);
var inst_27870 = cljs.core._EQ_.call(null,inst_27869__$1,inst_27862);
var inst_27871 = cljs.core.keyword_identical_QMARK_.call(null,inst_27862,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27872 = (inst_27870) || (inst_27871);
var state_27901__$1 = (function (){var statearr_27915 = state_27901;
(statearr_27915[(10)] = inst_27869__$1);

return statearr_27915;
})();
if(cljs.core.truth_(inst_27872)){
var statearr_27916_27941 = state_27901__$1;
(statearr_27916_27941[(1)] = (8));

} else {
var statearr_27917_27942 = state_27901__$1;
(statearr_27917_27942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27902 === (14))){
var inst_27894 = (state_27901[(2)]);
var inst_27895 = cljs.core.async.close_BANG_.call(null,out);
var state_27901__$1 = (function (){var statearr_27919 = state_27901;
(statearr_27919[(13)] = inst_27894);

return statearr_27919;
})();
var statearr_27920_27943 = state_27901__$1;
(statearr_27920_27943[(2)] = inst_27895);

(statearr_27920_27943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27902 === (10))){
var inst_27884 = (state_27901[(2)]);
var state_27901__$1 = state_27901;
var statearr_27921_27944 = state_27901__$1;
(statearr_27921_27944[(2)] = inst_27884);

(statearr_27921_27944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27902 === (8))){
var inst_27869 = (state_27901[(10)]);
var inst_27865 = (state_27901[(9)]);
var inst_27861 = (state_27901[(7)]);
var inst_27874 = inst_27861.push(inst_27865);
var tmp27918 = inst_27861;
var inst_27861__$1 = tmp27918;
var inst_27862 = inst_27869;
var state_27901__$1 = (function (){var statearr_27922 = state_27901;
(statearr_27922[(14)] = inst_27874);

(statearr_27922[(7)] = inst_27861__$1);

(statearr_27922[(8)] = inst_27862);

return statearr_27922;
})();
var statearr_27923_27945 = state_27901__$1;
(statearr_27923_27945[(2)] = null);

(statearr_27923_27945[(1)] = (2));


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
});})(c__8633__auto___27931,out))
;
return ((function (switch__8577__auto__,c__8633__auto___27931,out){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_27927 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27927[(0)] = state_machine__8578__auto__);

(statearr_27927[(1)] = (1));

return statearr_27927;
});
var state_machine__8578__auto____1 = (function (state_27901){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_27901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e27928){if((e27928 instanceof Object)){
var ex__8581__auto__ = e27928;
var statearr_27929_27946 = state_27901;
(statearr_27929_27946[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27947 = state_27901;
state_27901 = G__27947;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_27901){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_27901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto___27931,out))
})();
var state__8635__auto__ = (function (){var statearr_27930 = f__8634__auto__.call(null);
(statearr_27930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto___27931);

return statearr_27930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto___27931,out))
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