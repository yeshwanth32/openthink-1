// Compiled by ClojureScript 1.9.293 {}
goog.provide('dommy.utils');
goog.require('cljs.core');
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
dommy.utils.dissoc_in = (function dommy$utils$dissoc_in(m,p__15990){
var vec__15994 = p__15990;
var seq__15995 = cljs.core.seq.call(null,vec__15994);
var first__15996 = cljs.core.first.call(null,seq__15995);
var seq__15995__$1 = cljs.core.next.call(null,seq__15995);
var k = first__15996;
var ks = seq__15995__$1;
if(cljs.core.truth_(m)){
var temp__4655__auto__ = (function (){var and__6531__auto__ = ks;
if(and__6531__auto__){
return dommy.utils.dissoc_in.call(null,m.call(null,k),ks);
} else {
return and__6531__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var res = temp__4655__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else {
var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
dommy.utils.__GT_Array = (function dommy$utils$__GT_Array(array_like){
return Array.prototype.slice.call(array_like);
});
/**
 * Coerces strings and keywords to strings, while preserving namespace of
 * namespaced keywords
 */
dommy.utils.as_str = (function dommy$utils$as_str(s){
if((s instanceof cljs.core.Keyword)){
return [cljs.core.str((function (){var G__15998 = cljs.core.namespace.call(null,s);
if((G__15998 == null)){
return null;
} else {
return [cljs.core.str(G__15998),cljs.core.str("/")].join('');
}
})()),cljs.core.str(cljs.core.name.call(null,s))].join('');
} else {
return s;
}
});

//# sourceMappingURL=utils.js.map