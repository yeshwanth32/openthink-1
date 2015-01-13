// Compiled by ClojureScript 0.0-2371
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;if((other instanceof cljs.core.UUID))
{return (this$__$1.uuid === other.uuid);
} else
{if((other instanceof com.cognitect.transit.types.UUID))
{return (this$__$1.uuid === other.toString());
} else
{return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;if((other instanceof cljs.core.UUID))
{return cljs.core._equiv.call(null,other,this$__$1);
} else
{return this$__$1.equiv(other);
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;
goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__17145_17149 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__17146_17150 = null;var count__17147_17151 = (0);var i__17148_17152 = (0);while(true){
if((i__17148_17152 < count__17147_17151))
{var k_17153 = cljs.core._nth.call(null,chunk__17146_17150,i__17148_17152);var v_17154 = (b[k_17153]);(a[k_17153] = v_17154);
{
var G__17155 = seq__17145_17149;
var G__17156 = chunk__17146_17150;
var G__17157 = count__17147_17151;
var G__17158 = (i__17148_17152 + (1));
seq__17145_17149 = G__17155;
chunk__17146_17150 = G__17156;
count__17147_17151 = G__17157;
i__17148_17152 = G__17158;
continue;
}
} else
{var temp__4126__auto___17159 = cljs.core.seq.call(null,seq__17145_17149);if(temp__4126__auto___17159)
{var seq__17145_17160__$1 = temp__4126__auto___17159;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17145_17160__$1))
{var c__4408__auto___17161 = cljs.core.chunk_first.call(null,seq__17145_17160__$1);{
var G__17162 = cljs.core.chunk_rest.call(null,seq__17145_17160__$1);
var G__17163 = c__4408__auto___17161;
var G__17164 = cljs.core.count.call(null,c__4408__auto___17161);
var G__17165 = (0);
seq__17145_17149 = G__17162;
chunk__17146_17150 = G__17163;
count__17147_17151 = G__17164;
i__17148_17152 = G__17165;
continue;
}
} else
{var k_17166 = cljs.core.first.call(null,seq__17145_17160__$1);var v_17167 = (b[k_17166]);(a[k_17166] = v_17167);
{
var G__17168 = cljs.core.next.call(null,seq__17145_17160__$1);
var G__17169 = null;
var G__17170 = (0);
var G__17171 = (0);
seq__17145_17149 = G__17168;
chunk__17146_17150 = G__17169;
count__17147_17151 = G__17170;
i__17148_17152 = G__17171;
continue;
}
}
} else
{}
}
break;
}
return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.cljs$lang$type = true;
cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cognitect.transit/MapBuilder");
});
cognitect.transit.MapBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){var self__ = this;
var _ = this;return cljs.core.assoc_BANG_.call(null,m,k,v);
});
cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,m);
});
cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});
cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){return (new cognitect.transit.MapBuilder());
});

/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.cljs$lang$type = true;
cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cognitect.transit/VectorBuilder");
});
cognitect.transit.VectorBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});
cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){var self__ = this;
var _ = this;return cljs.core.conj_BANG_.call(null,v,x);
});
cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,v);
});
cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});
cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){return (new cognitect.transit.VectorBuilder());
});
/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){return cljs.core.symbol.call(null,v);
}),":",(function (v){return cljs.core.keyword.call(null,v);
}),"set",(function (v){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){var i = (0);var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__17172 = (i + (2));
var G__17173 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__17172;
ret = G__17173;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.cljs$lang$type = true;
cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cognitect.transit/KeywordHandler");
});
cognitect.transit.KeywordHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return ":";
});
cognitect.transit.KeywordHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){return (new cognitect.transit.KeywordHandler());
});

/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.cljs$lang$type = true;
cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cognitect.transit/SymbolHandler");
});
cognitect.transit.SymbolHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "$";
});
cognitect.transit.SymbolHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){return (new cognitect.transit.SymbolHandler());
});

/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.cljs$lang$type = true;
cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__17174_17178 = cljs.core.seq.call(null,v);var chunk__17175_17179 = null;var count__17176_17180 = (0);var i__17177_17181 = (0);while(true){
if((i__17177_17181 < count__17176_17180))
{var x_17182 = cljs.core._nth.call(null,chunk__17175_17179,i__17177_17181);ret.push(x_17182);
{
var G__17183 = seq__17174_17178;
var G__17184 = chunk__17175_17179;
var G__17185 = count__17176_17180;
var G__17186 = (i__17177_17181 + (1));
seq__17174_17178 = G__17183;
chunk__17175_17179 = G__17184;
count__17176_17180 = G__17185;
i__17177_17181 = G__17186;
continue;
}
} else
{var temp__4126__auto___17187 = cljs.core.seq.call(null,seq__17174_17178);if(temp__4126__auto___17187)
{var seq__17174_17188__$1 = temp__4126__auto___17187;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17174_17188__$1))
{var c__4408__auto___17189 = cljs.core.chunk_first.call(null,seq__17174_17188__$1);{
var G__17190 = cljs.core.chunk_rest.call(null,seq__17174_17188__$1);
var G__17191 = c__4408__auto___17189;
var G__17192 = cljs.core.count.call(null,c__4408__auto___17189);
var G__17193 = (0);
seq__17174_17178 = G__17190;
chunk__17175_17179 = G__17191;
count__17176_17180 = G__17192;
i__17177_17181 = G__17193;
continue;
}
} else
{var x_17194 = cljs.core.first.call(null,seq__17174_17188__$1);ret.push(x_17194);
{
var G__17195 = cljs.core.next.call(null,seq__17174_17188__$1);
var G__17196 = null;
var G__17197 = (0);
var G__17198 = (0);
seq__17174_17178 = G__17195;
chunk__17175_17179 = G__17196;
count__17176_17180 = G__17197;
i__17177_17181 = G__17198;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.ListHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){return (new cognitect.transit.ListHandler());
});

/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.cljs$lang$type = true;
cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cognitect.transit/MapHandler");
});
cognitect.transit.MapHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "map";
});
cognitect.transit.MapHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v;
});
cognitect.transit.MapHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){return (new cognitect.transit.MapHandler());
});

/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.cljs$lang$type = true;
cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__17199_17203 = cljs.core.seq.call(null,v);var chunk__17200_17204 = null;var count__17201_17205 = (0);var i__17202_17206 = (0);while(true){
if((i__17202_17206 < count__17201_17205))
{var x_17207 = cljs.core._nth.call(null,chunk__17200_17204,i__17202_17206);ret.push(x_17207);
{
var G__17208 = seq__17199_17203;
var G__17209 = chunk__17200_17204;
var G__17210 = count__17201_17205;
var G__17211 = (i__17202_17206 + (1));
seq__17199_17203 = G__17208;
chunk__17200_17204 = G__17209;
count__17201_17205 = G__17210;
i__17202_17206 = G__17211;
continue;
}
} else
{var temp__4126__auto___17212 = cljs.core.seq.call(null,seq__17199_17203);if(temp__4126__auto___17212)
{var seq__17199_17213__$1 = temp__4126__auto___17212;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17199_17213__$1))
{var c__4408__auto___17214 = cljs.core.chunk_first.call(null,seq__17199_17213__$1);{
var G__17215 = cljs.core.chunk_rest.call(null,seq__17199_17213__$1);
var G__17216 = c__4408__auto___17214;
var G__17217 = cljs.core.count.call(null,c__4408__auto___17214);
var G__17218 = (0);
seq__17199_17203 = G__17215;
chunk__17200_17204 = G__17216;
count__17201_17205 = G__17217;
i__17202_17206 = G__17218;
continue;
}
} else
{var x_17219 = cljs.core.first.call(null,seq__17199_17213__$1);ret.push(x_17219);
{
var G__17220 = cljs.core.next.call(null,seq__17199_17213__$1);
var G__17221 = null;
var G__17222 = (0);
var G__17223 = (0);
seq__17199_17203 = G__17220;
chunk__17200_17204 = G__17221;
count__17201_17205 = G__17222;
i__17202_17206 = G__17223;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.SetHandler.prototype.stringRep = (function (){var self__ = this;
var v = this;return null;
});
cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){return (new cognitect.transit.SetHandler());
});

/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.cljs$lang$type = true;
cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__17224_17228 = cljs.core.seq.call(null,v);var chunk__17225_17229 = null;var count__17226_17230 = (0);var i__17227_17231 = (0);while(true){
if((i__17227_17231 < count__17226_17230))
{var x_17232 = cljs.core._nth.call(null,chunk__17225_17229,i__17227_17231);ret.push(x_17232);
{
var G__17233 = seq__17224_17228;
var G__17234 = chunk__17225_17229;
var G__17235 = count__17226_17230;
var G__17236 = (i__17227_17231 + (1));
seq__17224_17228 = G__17233;
chunk__17225_17229 = G__17234;
count__17226_17230 = G__17235;
i__17227_17231 = G__17236;
continue;
}
} else
{var temp__4126__auto___17237 = cljs.core.seq.call(null,seq__17224_17228);if(temp__4126__auto___17237)
{var seq__17224_17238__$1 = temp__4126__auto___17237;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17224_17238__$1))
{var c__4408__auto___17239 = cljs.core.chunk_first.call(null,seq__17224_17238__$1);{
var G__17240 = cljs.core.chunk_rest.call(null,seq__17224_17238__$1);
var G__17241 = c__4408__auto___17239;
var G__17242 = cljs.core.count.call(null,c__4408__auto___17239);
var G__17243 = (0);
seq__17224_17228 = G__17240;
chunk__17225_17229 = G__17241;
count__17226_17230 = G__17242;
i__17227_17231 = G__17243;
continue;
}
} else
{var x_17244 = cljs.core.first.call(null,seq__17224_17238__$1);ret.push(x_17244);
{
var G__17245 = cljs.core.next.call(null,seq__17224_17238__$1);
var G__17246 = null;
var G__17247 = (0);
var G__17248 = (0);
seq__17224_17228 = G__17245;
chunk__17225_17229 = G__17246;
count__17226_17230 = G__17247;
i__17227_17231 = G__17248;
continue;
}
}
} else
{}
}
break;
}
return ret;
});
cognitect.transit.VectorHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){return (new cognitect.transit.VectorHandler());
});

/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.cljs$lang$type = true;
cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";
cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cognitect.transit/UUIDHandler");
});
cognitect.transit.UUIDHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "u";
});
cognitect.transit.UUIDHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.uuid;
});
cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){var self__ = this;
var this$ = this;return this$.rep(v);
});
cognitect.transit.__GT_UUIDHandler = (function __GT_UUIDHandler(){return (new cognitect.transit.UUIDHandler());
});
/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a JavaScript
* array of interleaved type constructors and handler instances for those
* type constructors.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var uuid_handler = (new cognitect.transit.UUIDHandler());var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x17258 = cljs.core.clone.call(null,handlers);x17258.forEach = ((function (x17258,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){var coll = this;var seq__17259 = cljs.core.seq.call(null,coll);var chunk__17260 = null;var count__17261 = (0);var i__17262 = (0);while(true){
if((i__17262 < count__17261))
{var vec__17263 = cljs.core._nth.call(null,chunk__17260,i__17262);var k = cljs.core.nth.call(null,vec__17263,(0),null);var v = cljs.core.nth.call(null,vec__17263,(1),null);f.call(null,v,k);
{
var G__17265 = seq__17259;
var G__17266 = chunk__17260;
var G__17267 = count__17261;
var G__17268 = (i__17262 + (1));
seq__17259 = G__17265;
chunk__17260 = G__17266;
count__17261 = G__17267;
i__17262 = G__17268;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__17259);if(temp__4126__auto__)
{var seq__17259__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17259__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__17259__$1);{
var G__17269 = cljs.core.chunk_rest.call(null,seq__17259__$1);
var G__17270 = c__4408__auto__;
var G__17271 = cljs.core.count.call(null,c__4408__auto__);
var G__17272 = (0);
seq__17259 = G__17269;
chunk__17260 = G__17270;
count__17261 = G__17271;
i__17262 = G__17272;
continue;
}
} else
{var vec__17264 = cljs.core.first.call(null,seq__17259__$1);var k = cljs.core.nth.call(null,vec__17264,(0),null);var v = cljs.core.nth.call(null,vec__17264,(1),null);f.call(null,v,k);
{
var G__17273 = cljs.core.next.call(null,seq__17259__$1);
var G__17274 = null;
var G__17275 = (0);
var G__17276 = (0);
seq__17259 = G__17273;
chunk__17260 = G__17274;
count__17261 = G__17275;
i__17262 = G__17276;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x17258,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;
return x17258;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){var G__17257 = obj;G__17257.push(kfn.call(null,k),vfn.call(null,v));
return G__17257;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t17280 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t17280 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta17281){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta17281 = meta17281;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t17280.cljs$lang$type = true;
cognitect.transit.t17280.cljs$lang$ctorStr = "cognitect.transit/t17280";
cognitect.transit.t17280.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cognitect.transit/t17280");
});
cognitect.transit.t17280.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t17280.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t17280.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t17280.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t17280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17282){var self__ = this;
var _17282__$1 = this;return self__.meta17281;
});
cognitect.transit.t17280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17282,meta17281__$1){var self__ = this;
var _17282__$1 = this;return (new cognitect.transit.t17280(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta17281__$1));
});
cognitect.transit.__GT_t17280 = (function __GT_t17280(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta17281){return (new cognitect.transit.t17280(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta17281));
});
}
return (new cognitect.transit.t17280(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map