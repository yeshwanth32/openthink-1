// Compiled by ClojureScript 1.9.293 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__37541_37545 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__37542_37546 = null;
var count__37543_37547 = (0);
var i__37544_37548 = (0);
while(true){
if((i__37544_37548 < count__37543_37547)){
var k_37549 = cljs.core._nth.call(null,chunk__37542_37546,i__37544_37548);
var v_37550 = (b[k_37549]);
(a[k_37549] = v_37550);

var G__37551 = seq__37541_37545;
var G__37552 = chunk__37542_37546;
var G__37553 = count__37543_37547;
var G__37554 = (i__37544_37548 + (1));
seq__37541_37545 = G__37551;
chunk__37542_37546 = G__37552;
count__37543_37547 = G__37553;
i__37544_37548 = G__37554;
continue;
} else {
var temp__4657__auto___37555 = cljs.core.seq.call(null,seq__37541_37545);
if(temp__4657__auto___37555){
var seq__37541_37556__$1 = temp__4657__auto___37555;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37541_37556__$1)){
var c__7357__auto___37557 = cljs.core.chunk_first.call(null,seq__37541_37556__$1);
var G__37558 = cljs.core.chunk_rest.call(null,seq__37541_37556__$1);
var G__37559 = c__7357__auto___37557;
var G__37560 = cljs.core.count.call(null,c__7357__auto___37557);
var G__37561 = (0);
seq__37541_37545 = G__37558;
chunk__37542_37546 = G__37559;
count__37543_37547 = G__37560;
i__37544_37548 = G__37561;
continue;
} else {
var k_37562 = cljs.core.first.call(null,seq__37541_37556__$1);
var v_37563 = (b[k_37562]);
(a[k_37562] = v_37563);

var G__37564 = cljs.core.next.call(null,seq__37541_37556__$1);
var G__37565 = null;
var G__37566 = (0);
var G__37567 = (0);
seq__37541_37545 = G__37564;
chunk__37542_37546 = G__37565;
count__37543_37547 = G__37566;
i__37544_37548 = G__37567;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args37568 = [];
var len__7651__auto___37571 = arguments.length;
var i__7652__auto___37572 = (0);
while(true){
if((i__7652__auto___37572 < len__7651__auto___37571)){
args37568.push((arguments[i__7652__auto___37572]));

var G__37573 = (i__7652__auto___37572 + (1));
i__7652__auto___37572 = G__37573;
continue;
} else {
}
break;
}

var G__37570 = args37568.length;
switch (G__37570) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37568.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__37575 = (i + (2));
var G__37576 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__37575;
ret = G__37576;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__37577_37581 = cljs.core.seq.call(null,v);
var chunk__37578_37582 = null;
var count__37579_37583 = (0);
var i__37580_37584 = (0);
while(true){
if((i__37580_37584 < count__37579_37583)){
var x_37585 = cljs.core._nth.call(null,chunk__37578_37582,i__37580_37584);
ret.push(x_37585);

var G__37586 = seq__37577_37581;
var G__37587 = chunk__37578_37582;
var G__37588 = count__37579_37583;
var G__37589 = (i__37580_37584 + (1));
seq__37577_37581 = G__37586;
chunk__37578_37582 = G__37587;
count__37579_37583 = G__37588;
i__37580_37584 = G__37589;
continue;
} else {
var temp__4657__auto___37590 = cljs.core.seq.call(null,seq__37577_37581);
if(temp__4657__auto___37590){
var seq__37577_37591__$1 = temp__4657__auto___37590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37577_37591__$1)){
var c__7357__auto___37592 = cljs.core.chunk_first.call(null,seq__37577_37591__$1);
var G__37593 = cljs.core.chunk_rest.call(null,seq__37577_37591__$1);
var G__37594 = c__7357__auto___37592;
var G__37595 = cljs.core.count.call(null,c__7357__auto___37592);
var G__37596 = (0);
seq__37577_37581 = G__37593;
chunk__37578_37582 = G__37594;
count__37579_37583 = G__37595;
i__37580_37584 = G__37596;
continue;
} else {
var x_37597 = cljs.core.first.call(null,seq__37577_37591__$1);
ret.push(x_37597);

var G__37598 = cljs.core.next.call(null,seq__37577_37591__$1);
var G__37599 = null;
var G__37600 = (0);
var G__37601 = (0);
seq__37577_37581 = G__37598;
chunk__37578_37582 = G__37599;
count__37579_37583 = G__37600;
i__37580_37584 = G__37601;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__37602_37606 = cljs.core.seq.call(null,v);
var chunk__37603_37607 = null;
var count__37604_37608 = (0);
var i__37605_37609 = (0);
while(true){
if((i__37605_37609 < count__37604_37608)){
var x_37610 = cljs.core._nth.call(null,chunk__37603_37607,i__37605_37609);
ret.push(x_37610);

var G__37611 = seq__37602_37606;
var G__37612 = chunk__37603_37607;
var G__37613 = count__37604_37608;
var G__37614 = (i__37605_37609 + (1));
seq__37602_37606 = G__37611;
chunk__37603_37607 = G__37612;
count__37604_37608 = G__37613;
i__37605_37609 = G__37614;
continue;
} else {
var temp__4657__auto___37615 = cljs.core.seq.call(null,seq__37602_37606);
if(temp__4657__auto___37615){
var seq__37602_37616__$1 = temp__4657__auto___37615;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37602_37616__$1)){
var c__7357__auto___37617 = cljs.core.chunk_first.call(null,seq__37602_37616__$1);
var G__37618 = cljs.core.chunk_rest.call(null,seq__37602_37616__$1);
var G__37619 = c__7357__auto___37617;
var G__37620 = cljs.core.count.call(null,c__7357__auto___37617);
var G__37621 = (0);
seq__37602_37606 = G__37618;
chunk__37603_37607 = G__37619;
count__37604_37608 = G__37620;
i__37605_37609 = G__37621;
continue;
} else {
var x_37622 = cljs.core.first.call(null,seq__37602_37616__$1);
ret.push(x_37622);

var G__37623 = cljs.core.next.call(null,seq__37602_37616__$1);
var G__37624 = null;
var G__37625 = (0);
var G__37626 = (0);
seq__37602_37606 = G__37623;
chunk__37603_37607 = G__37624;
count__37604_37608 = G__37625;
i__37605_37609 = G__37626;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__37627_37631 = cljs.core.seq.call(null,v);
var chunk__37628_37632 = null;
var count__37629_37633 = (0);
var i__37630_37634 = (0);
while(true){
if((i__37630_37634 < count__37629_37633)){
var x_37635 = cljs.core._nth.call(null,chunk__37628_37632,i__37630_37634);
ret.push(x_37635);

var G__37636 = seq__37627_37631;
var G__37637 = chunk__37628_37632;
var G__37638 = count__37629_37633;
var G__37639 = (i__37630_37634 + (1));
seq__37627_37631 = G__37636;
chunk__37628_37632 = G__37637;
count__37629_37633 = G__37638;
i__37630_37634 = G__37639;
continue;
} else {
var temp__4657__auto___37640 = cljs.core.seq.call(null,seq__37627_37631);
if(temp__4657__auto___37640){
var seq__37627_37641__$1 = temp__4657__auto___37640;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37627_37641__$1)){
var c__7357__auto___37642 = cljs.core.chunk_first.call(null,seq__37627_37641__$1);
var G__37643 = cljs.core.chunk_rest.call(null,seq__37627_37641__$1);
var G__37644 = c__7357__auto___37642;
var G__37645 = cljs.core.count.call(null,c__7357__auto___37642);
var G__37646 = (0);
seq__37627_37631 = G__37643;
chunk__37628_37632 = G__37644;
count__37629_37633 = G__37645;
i__37630_37634 = G__37646;
continue;
} else {
var x_37647 = cljs.core.first.call(null,seq__37627_37641__$1);
ret.push(x_37647);

var G__37648 = cljs.core.next.call(null,seq__37627_37641__$1);
var G__37649 = null;
var G__37650 = (0);
var G__37651 = (0);
seq__37627_37631 = G__37648;
chunk__37628_37632 = G__37649;
count__37629_37633 = G__37650;
i__37630_37634 = G__37651;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 * opts is a map containing a :handlers entry. :handlers is a JavaScript
 * array of interleaved type constructors and handler instances for those 
 * type constructors.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args37652 = [];
var len__7651__auto___37667 = arguments.length;
var i__7652__auto___37668 = (0);
while(true){
if((i__7652__auto___37668 < len__7651__auto___37667)){
args37652.push((arguments[i__7652__auto___37668]));

var G__37669 = (i__7652__auto___37668 + (1));
i__7652__auto___37668 = G__37669;
continue;
} else {
}
break;
}

var G__37654 = args37652.length;
switch (G__37654) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37652.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__37655 = obj;
G__37655.push(kfn.call(null,k),vfn.call(null,v));

return G__37655;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x37656 = cljs.core.clone.call(null,handlers);
x37656.forEach = ((function (x37656,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__37657 = cljs.core.seq.call(null,coll);
var chunk__37658 = null;
var count__37659 = (0);
var i__37660 = (0);
while(true){
if((i__37660 < count__37659)){
var vec__37661 = cljs.core._nth.call(null,chunk__37658,i__37660);
var k = cljs.core.nth.call(null,vec__37661,(0),null);
var v = cljs.core.nth.call(null,vec__37661,(1),null);
f.call(null,v,k);

var G__37671 = seq__37657;
var G__37672 = chunk__37658;
var G__37673 = count__37659;
var G__37674 = (i__37660 + (1));
seq__37657 = G__37671;
chunk__37658 = G__37672;
count__37659 = G__37673;
i__37660 = G__37674;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37657);
if(temp__4657__auto__){
var seq__37657__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37657__$1)){
var c__7357__auto__ = cljs.core.chunk_first.call(null,seq__37657__$1);
var G__37675 = cljs.core.chunk_rest.call(null,seq__37657__$1);
var G__37676 = c__7357__auto__;
var G__37677 = cljs.core.count.call(null,c__7357__auto__);
var G__37678 = (0);
seq__37657 = G__37675;
chunk__37658 = G__37676;
count__37659 = G__37677;
i__37660 = G__37678;
continue;
} else {
var vec__37664 = cljs.core.first.call(null,seq__37657__$1);
var k = cljs.core.nth.call(null,vec__37664,(0),null);
var v = cljs.core.nth.call(null,vec__37664,(1),null);
f.call(null,v,k);

var G__37679 = cljs.core.next.call(null,seq__37657__$1);
var G__37680 = null;
var G__37681 = (0);
var G__37682 = (0);
seq__37657 = G__37679;
chunk__37658 = G__37680;
count__37659 = G__37681;
i__37660 = G__37682;
continue;
}
} else {
return null;
}
}
break;
}
});})(x37656,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x37656;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args37683 = [];
var len__7651__auto___37689 = arguments.length;
var i__7652__auto___37690 = (0);
while(true){
if((i__7652__auto___37690 < len__7651__auto___37689)){
args37683.push((arguments[i__7652__auto___37690]));

var G__37691 = (i__7652__auto___37690 + (1));
i__7652__auto___37690 = G__37691;
continue;
} else {
}
break;
}

var G__37685 = args37683.length;
switch (G__37685) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37683.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit37686 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit37686 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta37687){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta37687 = meta37687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit37686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37688,meta37687__$1){
var self__ = this;
var _37688__$1 = this;
return (new cognitect.transit.t_cognitect$transit37686(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta37687__$1));
});

cognitect.transit.t_cognitect$transit37686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37688){
var self__ = this;
var _37688__$1 = this;
return self__.meta37687;
});

cognitect.transit.t_cognitect$transit37686.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit37686.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit37686.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit37686.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit37686.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta37687","meta37687",-351803952,null)], null);
});

cognitect.transit.t_cognitect$transit37686.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit37686.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit37686";

cognitect.transit.t_cognitect$transit37686.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cognitect.transit/t_cognitect$transit37686");
});

cognitect.transit.__GT_t_cognitect$transit37686 = (function cognitect$transit$__GT_t_cognitect$transit37686(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta37687){
return (new cognitect.transit.t_cognitect$transit37686(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta37687));
});

}

return (new cognitect.transit.t_cognitect$transit37686(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.integer.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map