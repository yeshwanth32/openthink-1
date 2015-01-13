// Compiled by ClojureScript 0.0-2371
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.toggle_attr_BANG_ = dommy.attrs.toggle_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.scroll_into_view = dommy.attrs.scroll_into_view;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var or__3638__auto__ = elem.textContent;if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
} else
{return elem.innerText;
}
});
dommy.core.value = (function value(elem){return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.value = value;
return elem__$1;
});
/**
* append `child` to `parent`. 'parent' and 'child' should be node-like
* (work with dommy.template/->node-like). The node-like projection
* of parent is returned after appending child.
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__17943 = dommy.template.__GT_node_like.call(null,parent);G__17943.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__17943;
});
var append_BANG___3 = (function() { 
var G__17948__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__17944_17949 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__17945_17950 = null;var count__17946_17951 = (0);var i__17947_17952 = (0);while(true){
if((i__17947_17952 < count__17946_17951))
{var c_17953 = cljs.core._nth.call(null,chunk__17945_17950,i__17947_17952);append_BANG_.call(null,parent__$1,c_17953);
{
var G__17954 = seq__17944_17949;
var G__17955 = chunk__17945_17950;
var G__17956 = count__17946_17951;
var G__17957 = (i__17947_17952 + (1));
seq__17944_17949 = G__17954;
chunk__17945_17950 = G__17955;
count__17946_17951 = G__17956;
i__17947_17952 = G__17957;
continue;
}
} else
{var temp__4126__auto___17958 = cljs.core.seq.call(null,seq__17944_17949);if(temp__4126__auto___17958)
{var seq__17944_17959__$1 = temp__4126__auto___17958;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17944_17959__$1))
{var c__4408__auto___17960 = cljs.core.chunk_first.call(null,seq__17944_17959__$1);{
var G__17961 = cljs.core.chunk_rest.call(null,seq__17944_17959__$1);
var G__17962 = c__4408__auto___17960;
var G__17963 = cljs.core.count.call(null,c__4408__auto___17960);
var G__17964 = (0);
seq__17944_17949 = G__17961;
chunk__17945_17950 = G__17962;
count__17946_17951 = G__17963;
i__17947_17952 = G__17964;
continue;
}
} else
{var c_17965 = cljs.core.first.call(null,seq__17944_17959__$1);append_BANG_.call(null,parent__$1,c_17965);
{
var G__17966 = cljs.core.next.call(null,seq__17944_17959__$1);
var G__17967 = null;
var G__17968 = (0);
var G__17969 = (0);
seq__17944_17949 = G__17966;
chunk__17945_17950 = G__17967;
count__17946_17951 = G__17968;
i__17947_17952 = G__17969;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__17948 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__17948__delegate.call(this,parent,child,more_children);};
G__17948.cljs$lang$maxFixedArity = 2;
G__17948.cljs$lang$applyTo = (function (arglist__17970){
var parent = cljs.core.first(arglist__17970);
arglist__17970 = cljs.core.next(arglist__17970);
var child = cljs.core.first(arglist__17970);
var more_children = cljs.core.rest(arglist__17970);
return G__17948__delegate(parent,child,more_children);
});
G__17948.cljs$core$IFn$_invoke$arity$variadic = G__17948__delegate;
return G__17948;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* prepend `child` to `parent`, both node-like
* return ->node-like projection of `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);return parent__$1.insertBefore(dommy.template.__GT_node_like.call(null,child),parent__$1.firstChild);
});
var prepend_BANG___3 = (function() { 
var G__17979__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__17975_17980 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__17976_17981 = null;var count__17977_17982 = (0);var i__17978_17983 = (0);while(true){
if((i__17978_17983 < count__17977_17982))
{var c_17984 = cljs.core._nth.call(null,chunk__17976_17981,i__17978_17983);prepend_BANG_.call(null,parent__$1,c_17984);
{
var G__17985 = seq__17975_17980;
var G__17986 = chunk__17976_17981;
var G__17987 = count__17977_17982;
var G__17988 = (i__17978_17983 + (1));
seq__17975_17980 = G__17985;
chunk__17976_17981 = G__17986;
count__17977_17982 = G__17987;
i__17978_17983 = G__17988;
continue;
}
} else
{var temp__4126__auto___17989 = cljs.core.seq.call(null,seq__17975_17980);if(temp__4126__auto___17989)
{var seq__17975_17990__$1 = temp__4126__auto___17989;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17975_17990__$1))
{var c__4408__auto___17991 = cljs.core.chunk_first.call(null,seq__17975_17990__$1);{
var G__17992 = cljs.core.chunk_rest.call(null,seq__17975_17990__$1);
var G__17993 = c__4408__auto___17991;
var G__17994 = cljs.core.count.call(null,c__4408__auto___17991);
var G__17995 = (0);
seq__17975_17980 = G__17992;
chunk__17976_17981 = G__17993;
count__17977_17982 = G__17994;
i__17978_17983 = G__17995;
continue;
}
} else
{var c_17996 = cljs.core.first.call(null,seq__17975_17990__$1);prepend_BANG_.call(null,parent__$1,c_17996);
{
var G__17997 = cljs.core.next.call(null,seq__17975_17990__$1);
var G__17998 = null;
var G__17999 = (0);
var G__18000 = (0);
seq__17975_17980 = G__17997;
chunk__17976_17981 = G__17998;
count__17977_17982 = G__17999;
i__17978_17983 = G__18000;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__17979 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__17979__delegate.call(this,parent,child,more_children);};
G__17979.cljs$lang$maxFixedArity = 2;
G__17979.cljs$lang$applyTo = (function (arglist__18001){
var parent = cljs.core.first(arglist__18001);
arglist__18001 = cljs.core.next(arglist__18001);
var child = cljs.core.first(arglist__18001);
var more_children = cljs.core.rest(arglist__18001);
return G__17979__delegate(parent,child,more_children);
});
G__17979.cljs$core$IFn$_invoke$arity$variadic = G__17979__delegate;
return G__17979;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",-1418255893,null),new cljs.core.Symbol(null,"other","other",-1658642225,null)))))));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4124__auto___18002 = other__$1.nextSibling;if(cljs.core.truth_(temp__4124__auto___18002))
{var next_18003 = temp__4124__auto___18002;parent.insertBefore(actual_node,next_18003);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var new$__$1 = dommy.template.__GT_node_like.call(null,new$);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",-1418255893,null),new cljs.core.Symbol(null,"elem","elem",-2035804713,null)))))));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__18005 = dommy.template.__GT_node_like.call(null,parent);G__18005.innerHTML = "";
dommy.core.append_BANG_.call(null,G__18005,node_like);
return G__18005;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__18007 = elem__$1.parentNode;G__18007.removeChild(elem__$1);
return G__18007;
});
/**
* clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML = "";
});
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
dommy.core.selector_map = (function selector_map(template,key_selectors_map){var container = dommy.template.__GT_node_like.call(null,template);if(!(cljs.core.contains_QMARK_.call(null,key_selectors_map,new cljs.core.Keyword(null,"container","container",-1736937707))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",1212911103,null),new cljs.core.Keyword(null,"container","container",-1736937707))))))));
}
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",-1736937707),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (container){
return (function (p__18013){var vec__18014 = p__18013;var k = cljs.core.nth.call(null,vec__18014,(0),null);var v = cljs.core.nth.call(null,vec__18014,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",-1610148039).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t18015 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t18015 = (function (v,k,vec__18014,p__18013,container,key_selectors_map,template,selector_map,meta18016){
this.v = v;
this.k = k;
this.vec__18014 = vec__18014;
this.p__18013 = p__18013;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta18016 = meta18016;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t18015.cljs$lang$type = true;
dommy.core.t18015.cljs$lang$ctorStr = "dommy.core/t18015";
dommy.core.t18015.cljs$lang$ctorPrWriter = ((function (vec__18014,k,v,container){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"dommy.core/t18015");
});})(vec__18014,k,v,container))
;
dommy.core.t18015.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__18014,k,v,container){
return (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});})(vec__18014,k,v,container))
;
dommy.core.t18015.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__18014,k,v,container){
return (function (_18017){var self__ = this;
var _18017__$1 = this;return self__.meta18016;
});})(vec__18014,k,v,container))
;
dommy.core.t18015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__18014,k,v,container){
return (function (_18017,meta18016__$1){var self__ = this;
var _18017__$1 = this;return (new dommy.core.t18015(self__.v,self__.k,self__.vec__18014,self__.p__18013,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta18016__$1));
});})(vec__18014,k,v,container))
;
dommy.core.__GT_t18015 = ((function (vec__18014,k,v,container){
return (function __GT_t18015(v__$1,k__$1,vec__18014__$1,p__18013__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta18016){return (new dommy.core.t18015(v__$1,k__$1,vec__18014__$1,p__18013__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta18016));
});})(vec__18014,k,v,container))
;
}
return (new dommy.core.t18015(v,k,vec__18014,p__18013,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
});})(container))
,key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__18018_SHARP_){return p1__18018_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));return ((function (matches){
return (function (elem){return (matches.indexOf(elem) >= (0));
});
;})(matches))
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,((function (base__$1,elem__$1){
return (function (p1__18019_SHARP_){return !((p1__18019_SHARP_ === base__$1));
});})(base__$1,elem__$1))
,dommy.core.ancestor_nodes.call(null,elem__$1))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << (4))) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__18020){var vec__18021 = p__18020;var special_mouse_event = cljs.core.nth.call(null,vec__18021,(0),null);var real_mouse_event = cljs.core.nth.call(null,vec__18021,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__18021,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__18021,special_mouse_event,real_mouse_event){
return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3638__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3626__auto__ = related_target;if(cljs.core.truth_(and__3626__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3626__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
;})(vec__18021,special_mouse_event,real_mouse_event))
});})(vec__18021,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__3626__auto__ = selected_target;if(cljs.core.truth_(and__3626__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else
{return and__3626__auto__;
}
})()))
{event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__3638__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__18022){
var elem = cljs.core.first(arglist__18022);
arglist__18022 = cljs.core.next(arglist__18022);
var f = cljs.core.first(arglist__18022);
var args = cljs.core.rest(arglist__18022);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__18023_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__18023_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.template.__GT_node_like.call(null,elem_sel),null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__18047_18070 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_18071 = cljs.core.nth.call(null,vec__18047_18070,(0),null);var selector_18072 = cljs.core.nth.call(null,vec__18047_18070,(1),null);var seq__18048_18073 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__18055_18074 = null;var count__18056_18075 = (0);var i__18057_18076 = (0);while(true){
if((i__18057_18076 < count__18056_18075))
{var vec__18064_18077 = cljs.core._nth.call(null,chunk__18055_18074,i__18057_18076);var orig_type_18078 = cljs.core.nth.call(null,vec__18064_18077,(0),null);var f_18079 = cljs.core.nth.call(null,vec__18064_18077,(1),null);var seq__18058_18080 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_18078,new cljs.core.PersistentArrayMap.fromArray([orig_type_18078,cljs.core.identity], true, false)));var chunk__18060_18081 = null;var count__18061_18082 = (0);var i__18062_18083 = (0);while(true){
if((i__18062_18083 < count__18061_18082))
{var vec__18065_18084 = cljs.core._nth.call(null,chunk__18060_18081,i__18062_18083);var actual_type_18085 = cljs.core.nth.call(null,vec__18065_18084,(0),null);var factory_18086 = cljs.core.nth.call(null,vec__18065_18084,(1),null);var canonical_f_18087 = (cljs.core.truth_(selector_18072)?cljs.core.partial.call(null,dommy.core.live_listener,elem_18071,selector_18072):cljs.core.identity).call(null,factory_18086.call(null,f_18079));dommy.core.update_event_listeners_BANG_.call(null,elem_18071,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18072,actual_type_18085,f_18079], null),canonical_f_18087);
if(cljs.core.truth_(elem_18071.addEventListener))
{elem_18071.addEventListener(cljs.core.name.call(null,actual_type_18085),canonical_f_18087);
} else
{elem_18071.attachEvent(cljs.core.name.call(null,actual_type_18085),canonical_f_18087);
}
{
var G__18088 = seq__18058_18080;
var G__18089 = chunk__18060_18081;
var G__18090 = count__18061_18082;
var G__18091 = (i__18062_18083 + (1));
seq__18058_18080 = G__18088;
chunk__18060_18081 = G__18089;
count__18061_18082 = G__18090;
i__18062_18083 = G__18091;
continue;
}
} else
{var temp__4126__auto___18092 = cljs.core.seq.call(null,seq__18058_18080);if(temp__4126__auto___18092)
{var seq__18058_18093__$1 = temp__4126__auto___18092;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18058_18093__$1))
{var c__4408__auto___18094 = cljs.core.chunk_first.call(null,seq__18058_18093__$1);{
var G__18095 = cljs.core.chunk_rest.call(null,seq__18058_18093__$1);
var G__18096 = c__4408__auto___18094;
var G__18097 = cljs.core.count.call(null,c__4408__auto___18094);
var G__18098 = (0);
seq__18058_18080 = G__18095;
chunk__18060_18081 = G__18096;
count__18061_18082 = G__18097;
i__18062_18083 = G__18098;
continue;
}
} else
{var vec__18066_18099 = cljs.core.first.call(null,seq__18058_18093__$1);var actual_type_18100 = cljs.core.nth.call(null,vec__18066_18099,(0),null);var factory_18101 = cljs.core.nth.call(null,vec__18066_18099,(1),null);var canonical_f_18102 = (cljs.core.truth_(selector_18072)?cljs.core.partial.call(null,dommy.core.live_listener,elem_18071,selector_18072):cljs.core.identity).call(null,factory_18101.call(null,f_18079));dommy.core.update_event_listeners_BANG_.call(null,elem_18071,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18072,actual_type_18100,f_18079], null),canonical_f_18102);
if(cljs.core.truth_(elem_18071.addEventListener))
{elem_18071.addEventListener(cljs.core.name.call(null,actual_type_18100),canonical_f_18102);
} else
{elem_18071.attachEvent(cljs.core.name.call(null,actual_type_18100),canonical_f_18102);
}
{
var G__18103 = cljs.core.next.call(null,seq__18058_18093__$1);
var G__18104 = null;
var G__18105 = (0);
var G__18106 = (0);
seq__18058_18080 = G__18103;
chunk__18060_18081 = G__18104;
count__18061_18082 = G__18105;
i__18062_18083 = G__18106;
continue;
}
}
} else
{}
}
break;
}
{
var G__18107 = seq__18048_18073;
var G__18108 = chunk__18055_18074;
var G__18109 = count__18056_18075;
var G__18110 = (i__18057_18076 + (1));
seq__18048_18073 = G__18107;
chunk__18055_18074 = G__18108;
count__18056_18075 = G__18109;
i__18057_18076 = G__18110;
continue;
}
} else
{var temp__4126__auto___18111 = cljs.core.seq.call(null,seq__18048_18073);if(temp__4126__auto___18111)
{var seq__18048_18112__$1 = temp__4126__auto___18111;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18048_18112__$1))
{var c__4408__auto___18113 = cljs.core.chunk_first.call(null,seq__18048_18112__$1);{
var G__18114 = cljs.core.chunk_rest.call(null,seq__18048_18112__$1);
var G__18115 = c__4408__auto___18113;
var G__18116 = cljs.core.count.call(null,c__4408__auto___18113);
var G__18117 = (0);
seq__18048_18073 = G__18114;
chunk__18055_18074 = G__18115;
count__18056_18075 = G__18116;
i__18057_18076 = G__18117;
continue;
}
} else
{var vec__18067_18118 = cljs.core.first.call(null,seq__18048_18112__$1);var orig_type_18119 = cljs.core.nth.call(null,vec__18067_18118,(0),null);var f_18120 = cljs.core.nth.call(null,vec__18067_18118,(1),null);var seq__18049_18121 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_18119,new cljs.core.PersistentArrayMap.fromArray([orig_type_18119,cljs.core.identity], true, false)));var chunk__18051_18122 = null;var count__18052_18123 = (0);var i__18053_18124 = (0);while(true){
if((i__18053_18124 < count__18052_18123))
{var vec__18068_18125 = cljs.core._nth.call(null,chunk__18051_18122,i__18053_18124);var actual_type_18126 = cljs.core.nth.call(null,vec__18068_18125,(0),null);var factory_18127 = cljs.core.nth.call(null,vec__18068_18125,(1),null);var canonical_f_18128 = (cljs.core.truth_(selector_18072)?cljs.core.partial.call(null,dommy.core.live_listener,elem_18071,selector_18072):cljs.core.identity).call(null,factory_18127.call(null,f_18120));dommy.core.update_event_listeners_BANG_.call(null,elem_18071,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18072,actual_type_18126,f_18120], null),canonical_f_18128);
if(cljs.core.truth_(elem_18071.addEventListener))
{elem_18071.addEventListener(cljs.core.name.call(null,actual_type_18126),canonical_f_18128);
} else
{elem_18071.attachEvent(cljs.core.name.call(null,actual_type_18126),canonical_f_18128);
}
{
var G__18129 = seq__18049_18121;
var G__18130 = chunk__18051_18122;
var G__18131 = count__18052_18123;
var G__18132 = (i__18053_18124 + (1));
seq__18049_18121 = G__18129;
chunk__18051_18122 = G__18130;
count__18052_18123 = G__18131;
i__18053_18124 = G__18132;
continue;
}
} else
{var temp__4126__auto___18133__$1 = cljs.core.seq.call(null,seq__18049_18121);if(temp__4126__auto___18133__$1)
{var seq__18049_18134__$1 = temp__4126__auto___18133__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18049_18134__$1))
{var c__4408__auto___18135 = cljs.core.chunk_first.call(null,seq__18049_18134__$1);{
var G__18136 = cljs.core.chunk_rest.call(null,seq__18049_18134__$1);
var G__18137 = c__4408__auto___18135;
var G__18138 = cljs.core.count.call(null,c__4408__auto___18135);
var G__18139 = (0);
seq__18049_18121 = G__18136;
chunk__18051_18122 = G__18137;
count__18052_18123 = G__18138;
i__18053_18124 = G__18139;
continue;
}
} else
{var vec__18069_18140 = cljs.core.first.call(null,seq__18049_18134__$1);var actual_type_18141 = cljs.core.nth.call(null,vec__18069_18140,(0),null);var factory_18142 = cljs.core.nth.call(null,vec__18069_18140,(1),null);var canonical_f_18143 = (cljs.core.truth_(selector_18072)?cljs.core.partial.call(null,dommy.core.live_listener,elem_18071,selector_18072):cljs.core.identity).call(null,factory_18142.call(null,f_18120));dommy.core.update_event_listeners_BANG_.call(null,elem_18071,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18072,actual_type_18141,f_18120], null),canonical_f_18143);
if(cljs.core.truth_(elem_18071.addEventListener))
{elem_18071.addEventListener(cljs.core.name.call(null,actual_type_18141),canonical_f_18143);
} else
{elem_18071.attachEvent(cljs.core.name.call(null,actual_type_18141),canonical_f_18143);
}
{
var G__18144 = cljs.core.next.call(null,seq__18049_18134__$1);
var G__18145 = null;
var G__18146 = (0);
var G__18147 = (0);
seq__18049_18121 = G__18144;
chunk__18051_18122 = G__18145;
count__18052_18123 = G__18146;
i__18053_18124 = G__18147;
continue;
}
}
} else
{}
}
break;
}
{
var G__18148 = cljs.core.next.call(null,seq__18048_18112__$1);
var G__18149 = null;
var G__18150 = (0);
var G__18151 = (0);
seq__18048_18073 = G__18148;
chunk__18055_18074 = G__18149;
count__18056_18075 = G__18150;
i__18057_18076 = G__18151;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__18152){
var elem_sel = cljs.core.first(arglist__18152);
var type_fs = cljs.core.rest(arglist__18152);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__18176_18199 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_18200 = cljs.core.nth.call(null,vec__18176_18199,(0),null);var selector_18201 = cljs.core.nth.call(null,vec__18176_18199,(1),null);var seq__18177_18202 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__18184_18203 = null;var count__18185_18204 = (0);var i__18186_18205 = (0);while(true){
if((i__18186_18205 < count__18185_18204))
{var vec__18193_18206 = cljs.core._nth.call(null,chunk__18184_18203,i__18186_18205);var orig_type_18207 = cljs.core.nth.call(null,vec__18193_18206,(0),null);var f_18208 = cljs.core.nth.call(null,vec__18193_18206,(1),null);var seq__18187_18209 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_18207,new cljs.core.PersistentArrayMap.fromArray([orig_type_18207,cljs.core.identity], true, false)));var chunk__18189_18210 = null;var count__18190_18211 = (0);var i__18191_18212 = (0);while(true){
if((i__18191_18212 < count__18190_18211))
{var vec__18194_18213 = cljs.core._nth.call(null,chunk__18189_18210,i__18191_18212);var actual_type_18214 = cljs.core.nth.call(null,vec__18194_18213,(0),null);var __18215 = cljs.core.nth.call(null,vec__18194_18213,(1),null);var keys_18216 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18201,actual_type_18214,f_18208], null);var canonical_f_18217 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_18200),keys_18216);dommy.core.update_event_listeners_BANG_.call(null,elem_18200,dommy.utils.dissoc_in,keys_18216);
if(cljs.core.truth_(elem_18200.removeEventListener))
{elem_18200.removeEventListener(cljs.core.name.call(null,actual_type_18214),canonical_f_18217);
} else
{elem_18200.detachEvent(cljs.core.name.call(null,actual_type_18214),canonical_f_18217);
}
{
var G__18218 = seq__18187_18209;
var G__18219 = chunk__18189_18210;
var G__18220 = count__18190_18211;
var G__18221 = (i__18191_18212 + (1));
seq__18187_18209 = G__18218;
chunk__18189_18210 = G__18219;
count__18190_18211 = G__18220;
i__18191_18212 = G__18221;
continue;
}
} else
{var temp__4126__auto___18222 = cljs.core.seq.call(null,seq__18187_18209);if(temp__4126__auto___18222)
{var seq__18187_18223__$1 = temp__4126__auto___18222;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18187_18223__$1))
{var c__4408__auto___18224 = cljs.core.chunk_first.call(null,seq__18187_18223__$1);{
var G__18225 = cljs.core.chunk_rest.call(null,seq__18187_18223__$1);
var G__18226 = c__4408__auto___18224;
var G__18227 = cljs.core.count.call(null,c__4408__auto___18224);
var G__18228 = (0);
seq__18187_18209 = G__18225;
chunk__18189_18210 = G__18226;
count__18190_18211 = G__18227;
i__18191_18212 = G__18228;
continue;
}
} else
{var vec__18195_18229 = cljs.core.first.call(null,seq__18187_18223__$1);var actual_type_18230 = cljs.core.nth.call(null,vec__18195_18229,(0),null);var __18231 = cljs.core.nth.call(null,vec__18195_18229,(1),null);var keys_18232 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18201,actual_type_18230,f_18208], null);var canonical_f_18233 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_18200),keys_18232);dommy.core.update_event_listeners_BANG_.call(null,elem_18200,dommy.utils.dissoc_in,keys_18232);
if(cljs.core.truth_(elem_18200.removeEventListener))
{elem_18200.removeEventListener(cljs.core.name.call(null,actual_type_18230),canonical_f_18233);
} else
{elem_18200.detachEvent(cljs.core.name.call(null,actual_type_18230),canonical_f_18233);
}
{
var G__18234 = cljs.core.next.call(null,seq__18187_18223__$1);
var G__18235 = null;
var G__18236 = (0);
var G__18237 = (0);
seq__18187_18209 = G__18234;
chunk__18189_18210 = G__18235;
count__18190_18211 = G__18236;
i__18191_18212 = G__18237;
continue;
}
}
} else
{}
}
break;
}
{
var G__18238 = seq__18177_18202;
var G__18239 = chunk__18184_18203;
var G__18240 = count__18185_18204;
var G__18241 = (i__18186_18205 + (1));
seq__18177_18202 = G__18238;
chunk__18184_18203 = G__18239;
count__18185_18204 = G__18240;
i__18186_18205 = G__18241;
continue;
}
} else
{var temp__4126__auto___18242 = cljs.core.seq.call(null,seq__18177_18202);if(temp__4126__auto___18242)
{var seq__18177_18243__$1 = temp__4126__auto___18242;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18177_18243__$1))
{var c__4408__auto___18244 = cljs.core.chunk_first.call(null,seq__18177_18243__$1);{
var G__18245 = cljs.core.chunk_rest.call(null,seq__18177_18243__$1);
var G__18246 = c__4408__auto___18244;
var G__18247 = cljs.core.count.call(null,c__4408__auto___18244);
var G__18248 = (0);
seq__18177_18202 = G__18245;
chunk__18184_18203 = G__18246;
count__18185_18204 = G__18247;
i__18186_18205 = G__18248;
continue;
}
} else
{var vec__18196_18249 = cljs.core.first.call(null,seq__18177_18243__$1);var orig_type_18250 = cljs.core.nth.call(null,vec__18196_18249,(0),null);var f_18251 = cljs.core.nth.call(null,vec__18196_18249,(1),null);var seq__18178_18252 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_18250,new cljs.core.PersistentArrayMap.fromArray([orig_type_18250,cljs.core.identity], true, false)));var chunk__18180_18253 = null;var count__18181_18254 = (0);var i__18182_18255 = (0);while(true){
if((i__18182_18255 < count__18181_18254))
{var vec__18197_18256 = cljs.core._nth.call(null,chunk__18180_18253,i__18182_18255);var actual_type_18257 = cljs.core.nth.call(null,vec__18197_18256,(0),null);var __18258 = cljs.core.nth.call(null,vec__18197_18256,(1),null);var keys_18259 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18201,actual_type_18257,f_18251], null);var canonical_f_18260 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_18200),keys_18259);dommy.core.update_event_listeners_BANG_.call(null,elem_18200,dommy.utils.dissoc_in,keys_18259);
if(cljs.core.truth_(elem_18200.removeEventListener))
{elem_18200.removeEventListener(cljs.core.name.call(null,actual_type_18257),canonical_f_18260);
} else
{elem_18200.detachEvent(cljs.core.name.call(null,actual_type_18257),canonical_f_18260);
}
{
var G__18261 = seq__18178_18252;
var G__18262 = chunk__18180_18253;
var G__18263 = count__18181_18254;
var G__18264 = (i__18182_18255 + (1));
seq__18178_18252 = G__18261;
chunk__18180_18253 = G__18262;
count__18181_18254 = G__18263;
i__18182_18255 = G__18264;
continue;
}
} else
{var temp__4126__auto___18265__$1 = cljs.core.seq.call(null,seq__18178_18252);if(temp__4126__auto___18265__$1)
{var seq__18178_18266__$1 = temp__4126__auto___18265__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18178_18266__$1))
{var c__4408__auto___18267 = cljs.core.chunk_first.call(null,seq__18178_18266__$1);{
var G__18268 = cljs.core.chunk_rest.call(null,seq__18178_18266__$1);
var G__18269 = c__4408__auto___18267;
var G__18270 = cljs.core.count.call(null,c__4408__auto___18267);
var G__18271 = (0);
seq__18178_18252 = G__18268;
chunk__18180_18253 = G__18269;
count__18181_18254 = G__18270;
i__18182_18255 = G__18271;
continue;
}
} else
{var vec__18198_18272 = cljs.core.first.call(null,seq__18178_18266__$1);var actual_type_18273 = cljs.core.nth.call(null,vec__18198_18272,(0),null);var __18274 = cljs.core.nth.call(null,vec__18198_18272,(1),null);var keys_18275 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18201,actual_type_18273,f_18251], null);var canonical_f_18276 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_18200),keys_18275);dommy.core.update_event_listeners_BANG_.call(null,elem_18200,dommy.utils.dissoc_in,keys_18275);
if(cljs.core.truth_(elem_18200.removeEventListener))
{elem_18200.removeEventListener(cljs.core.name.call(null,actual_type_18273),canonical_f_18276);
} else
{elem_18200.detachEvent(cljs.core.name.call(null,actual_type_18273),canonical_f_18276);
}
{
var G__18277 = cljs.core.next.call(null,seq__18178_18266__$1);
var G__18278 = null;
var G__18279 = (0);
var G__18280 = (0);
seq__18178_18252 = G__18277;
chunk__18180_18253 = G__18278;
count__18181_18254 = G__18279;
i__18182_18255 = G__18280;
continue;
}
}
} else
{}
}
break;
}
{
var G__18281 = cljs.core.next.call(null,seq__18177_18243__$1);
var G__18282 = null;
var G__18283 = (0);
var G__18284 = (0);
seq__18177_18202 = G__18281;
chunk__18184_18203 = G__18282;
count__18185_18204 = G__18283;
i__18186_18205 = G__18284;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__18285){
var elem_sel = cljs.core.first(arglist__18285);
var type_fs = cljs.core.rest(arglist__18285);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__18293_18300 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_18301 = cljs.core.nth.call(null,vec__18293_18300,(0),null);var selector_18302 = cljs.core.nth.call(null,vec__18293_18300,(1),null);var seq__18294_18303 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__18295_18304 = null;var count__18296_18305 = (0);var i__18297_18306 = (0);while(true){
if((i__18297_18306 < count__18296_18305))
{var vec__18298_18307 = cljs.core._nth.call(null,chunk__18295_18304,i__18297_18306);var type_18308 = cljs.core.nth.call(null,vec__18298_18307,(0),null);var f_18309 = cljs.core.nth.call(null,vec__18298_18307,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_18308,((function (seq__18294_18303,chunk__18295_18304,count__18296_18305,i__18297_18306,vec__18298_18307,type_18308,f_18309,vec__18293_18300,elem_18301,selector_18302){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_18308,this_fn);
return f_18309.call(null,e);
});})(seq__18294_18303,chunk__18295_18304,count__18296_18305,i__18297_18306,vec__18298_18307,type_18308,f_18309,vec__18293_18300,elem_18301,selector_18302))
);
{
var G__18310 = seq__18294_18303;
var G__18311 = chunk__18295_18304;
var G__18312 = count__18296_18305;
var G__18313 = (i__18297_18306 + (1));
seq__18294_18303 = G__18310;
chunk__18295_18304 = G__18311;
count__18296_18305 = G__18312;
i__18297_18306 = G__18313;
continue;
}
} else
{var temp__4126__auto___18314 = cljs.core.seq.call(null,seq__18294_18303);if(temp__4126__auto___18314)
{var seq__18294_18315__$1 = temp__4126__auto___18314;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18294_18315__$1))
{var c__4408__auto___18316 = cljs.core.chunk_first.call(null,seq__18294_18315__$1);{
var G__18317 = cljs.core.chunk_rest.call(null,seq__18294_18315__$1);
var G__18318 = c__4408__auto___18316;
var G__18319 = cljs.core.count.call(null,c__4408__auto___18316);
var G__18320 = (0);
seq__18294_18303 = G__18317;
chunk__18295_18304 = G__18318;
count__18296_18305 = G__18319;
i__18297_18306 = G__18320;
continue;
}
} else
{var vec__18299_18321 = cljs.core.first.call(null,seq__18294_18315__$1);var type_18322 = cljs.core.nth.call(null,vec__18299_18321,(0),null);var f_18323 = cljs.core.nth.call(null,vec__18299_18321,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_18322,((function (seq__18294_18303,chunk__18295_18304,count__18296_18305,i__18297_18306,vec__18299_18321,type_18322,f_18323,seq__18294_18315__$1,temp__4126__auto___18314,vec__18293_18300,elem_18301,selector_18302){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_18322,this_fn);
return f_18323.call(null,e);
});})(seq__18294_18303,chunk__18295_18304,count__18296_18305,i__18297_18306,vec__18299_18321,type_18322,f_18323,seq__18294_18315__$1,temp__4126__auto___18314,vec__18293_18300,elem_18301,selector_18302))
);
{
var G__18324 = cljs.core.next.call(null,seq__18294_18315__$1);
var G__18325 = null;
var G__18326 = (0);
var G__18327 = (0);
seq__18294_18303 = G__18324;
chunk__18295_18304 = G__18325;
count__18296_18305 = G__18326;
i__18297_18306 = G__18327;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__18328){
var elem_sel = cljs.core.first(arglist__18328);
var type_fs = cljs.core.rest(arglist__18328);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
/**
* NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
* event types or their bubbling behaviours
* 
* Creates an event of type `event-type`, optionally having
* `update-event!` mutate and return an updated event object,
* and fires it on `node`.
* Only works when `node` is in the DOM
* @param {...*} var_args
*/
dommy.core.fire_BANG_ = (function() { 
var fire_BANG___delegate = function (node,event_type,p__18329){var vec__18331 = p__18329;var update_event_BANG_ = cljs.core.nth.call(null,vec__18331,(0),null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1027057938,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",1597931428,null)))))));
}
var update_event_BANG___$1 = (function (){var or__3638__auto__ = update_event_BANG_;if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent(("on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,event_type))),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__18329 = null;if (arguments.length > 2) {
  p__18329 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__18329);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__18332){
var node = cljs.core.first(arglist__18332);
arglist__18332 = cljs.core.next(arglist__18332);
var event_type = cljs.core.first(arglist__18332);
var p__18329 = cljs.core.rest(arglist__18332);
return fire_BANG___delegate(node,event_type,p__18329);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map