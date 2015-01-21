// Compiled by ClojureScript 0.0-2511
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.utils');
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
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
elem__$1.innerHTML = html;

return elem__$1;
});
dommy.core.html = (function html(elem){
return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");
(elem__$1[prop] = text);

return elem__$1;
});
dommy.core.text = (function text(elem){
var or__3638__auto__ = elem.textContent;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return elem.innerText;
}
});
dommy.core.value = (function value(elem){
return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
elem__$1.value = value;

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
var append_BANG___2 = (function (parent,child){
var G__28064 = dommy.template.__GT_node_like.call(null,parent);
G__28064.appendChild(dommy.template.__GT_node_like.call(null,child));

return G__28064;
});
var append_BANG___3 = (function() { 
var G__28069__delegate = function (parent,child,more_children){
var parent__$1 = dommy.template.__GT_node_like.call(null,parent);
var seq__28065_28070 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__28066_28071 = null;
var count__28067_28072 = (0);
var i__28068_28073 = (0);
while(true){
if((i__28068_28073 < count__28067_28072)){
var c_28074 = cljs.core._nth.call(null,chunk__28066_28071,i__28068_28073);
append_BANG_.call(null,parent__$1,c_28074);

var G__28075 = seq__28065_28070;
var G__28076 = chunk__28066_28071;
var G__28077 = count__28067_28072;
var G__28078 = (i__28068_28073 + (1));
seq__28065_28070 = G__28075;
chunk__28066_28071 = G__28076;
count__28067_28072 = G__28077;
i__28068_28073 = G__28078;
continue;
} else {
var temp__4126__auto___28079 = cljs.core.seq.call(null,seq__28065_28070);
if(temp__4126__auto___28079){
var seq__28065_28080__$1 = temp__4126__auto___28079;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28065_28080__$1)){
var c__4425__auto___28081 = cljs.core.chunk_first.call(null,seq__28065_28080__$1);
var G__28082 = cljs.core.chunk_rest.call(null,seq__28065_28080__$1);
var G__28083 = c__4425__auto___28081;
var G__28084 = cljs.core.count.call(null,c__4425__auto___28081);
var G__28085 = (0);
seq__28065_28070 = G__28082;
chunk__28066_28071 = G__28083;
count__28067_28072 = G__28084;
i__28068_28073 = G__28085;
continue;
} else {
var c_28086 = cljs.core.first.call(null,seq__28065_28080__$1);
append_BANG_.call(null,parent__$1,c_28086);

var G__28087 = cljs.core.next.call(null,seq__28065_28080__$1);
var G__28088 = null;
var G__28089 = (0);
var G__28090 = (0);
seq__28065_28070 = G__28087;
chunk__28066_28071 = G__28088;
count__28067_28072 = G__28089;
i__28068_28073 = G__28090;
continue;
}
} else {
}
}
break;
}

return parent__$1;
};
var G__28069 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__28069__delegate.call(this,parent,child,more_children);};
G__28069.cljs$lang$maxFixedArity = 2;
G__28069.cljs$lang$applyTo = (function (arglist__28091){
var parent = cljs.core.first(arglist__28091);
arglist__28091 = cljs.core.next(arglist__28091);
var child = cljs.core.first(arglist__28091);
var more_children = cljs.core.rest(arglist__28091);
return G__28069__delegate(parent,child,more_children);
});
G__28069.cljs$core$IFn$_invoke$arity$variadic = G__28069__delegate;
return G__28069;
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
var prepend_BANG___2 = (function (parent,child){
var parent__$1 = dommy.template.__GT_node_like.call(null,parent);
return parent__$1.insertBefore(dommy.template.__GT_node_like.call(null,child),parent__$1.firstChild);
});
var prepend_BANG___3 = (function() { 
var G__28100__delegate = function (parent,child,more_children){
var parent__$1 = dommy.template.__GT_node_like.call(null,parent);
var seq__28096_28101 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__28097_28102 = null;
var count__28098_28103 = (0);
var i__28099_28104 = (0);
while(true){
if((i__28099_28104 < count__28098_28103)){
var c_28105 = cljs.core._nth.call(null,chunk__28097_28102,i__28099_28104);
prepend_BANG_.call(null,parent__$1,c_28105);

var G__28106 = seq__28096_28101;
var G__28107 = chunk__28097_28102;
var G__28108 = count__28098_28103;
var G__28109 = (i__28099_28104 + (1));
seq__28096_28101 = G__28106;
chunk__28097_28102 = G__28107;
count__28098_28103 = G__28108;
i__28099_28104 = G__28109;
continue;
} else {
var temp__4126__auto___28110 = cljs.core.seq.call(null,seq__28096_28101);
if(temp__4126__auto___28110){
var seq__28096_28111__$1 = temp__4126__auto___28110;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28096_28111__$1)){
var c__4425__auto___28112 = cljs.core.chunk_first.call(null,seq__28096_28111__$1);
var G__28113 = cljs.core.chunk_rest.call(null,seq__28096_28111__$1);
var G__28114 = c__4425__auto___28112;
var G__28115 = cljs.core.count.call(null,c__4425__auto___28112);
var G__28116 = (0);
seq__28096_28101 = G__28113;
chunk__28097_28102 = G__28114;
count__28098_28103 = G__28115;
i__28099_28104 = G__28116;
continue;
} else {
var c_28117 = cljs.core.first.call(null,seq__28096_28111__$1);
prepend_BANG_.call(null,parent__$1,c_28117);

var G__28118 = cljs.core.next.call(null,seq__28096_28111__$1);
var G__28119 = null;
var G__28120 = (0);
var G__28121 = (0);
seq__28096_28101 = G__28118;
chunk__28097_28102 = G__28119;
count__28098_28103 = G__28120;
i__28099_28104 = G__28121;
continue;
}
} else {
}
}
break;
}

return parent__$1;
};
var G__28100 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__28100__delegate.call(this,parent,child,more_children);};
G__28100.cljs$lang$maxFixedArity = 2;
G__28100.cljs$lang$applyTo = (function (arglist__28122){
var parent = cljs.core.first(arglist__28122);
arglist__28122 = cljs.core.next(arglist__28122);
var child = cljs.core.first(arglist__28122);
var more_children = cljs.core.rest(arglist__28122);
return G__28100__delegate(parent,child,more_children);
});
G__28100.cljs$core$IFn$_invoke$arity$variadic = G__28100__delegate;
return G__28100;
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
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){
var actual_node = dommy.template.__GT_node_like.call(null,elem);
var other__$1 = dommy.template.__GT_node_like.call(null,other);
if(cljs.core.truth_(other__$1.parentNode)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",-1418255893,null),new cljs.core.Symbol(null,"other","other",-1658642225,null))))].join('')));
}

other__$1.parentNode.insertBefore(actual_node,other__$1);

return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){
var actual_node = dommy.template.__GT_node_like.call(null,elem);
var other__$1 = dommy.template.__GT_node_like.call(null,other);
var parent = other__$1.parentNode;
var temp__4124__auto___28123 = other__$1.nextSibling;
if(cljs.core.truth_(temp__4124__auto___28123)){
var next_28124 = temp__4124__auto___28123;
parent.insertBefore(actual_node,next_28124);
} else {
parent.appendChild(actual_node);
}

return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){
var new$__$1 = dommy.template.__GT_node_like.call(null,new$);
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
if(cljs.core.truth_(elem__$1.parentNode)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",-1418255893,null),new cljs.core.Symbol(null,"elem","elem",-2035804713,null))))].join('')));
}

elem__$1.parentNode.replaceChild(new$__$1,elem__$1);

return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){
var G__28126 = dommy.template.__GT_node_like.call(null,parent);
G__28126.innerHTML = "";

dommy.core.append_BANG_.call(null,G__28126,node_like);

return G__28126;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var G__28128 = elem__$1.parentNode;
G__28128.removeChild(elem__$1);

return G__28128;
});
/**
* clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){
return dommy.template.__GT_node_like.call(null,elem).innerHTML = "";
});
dommy.core.selector = (function selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.selector_map = (function selector_map(template,key_selectors_map){
var container = dommy.template.__GT_node_like.call(null,template);
if(!(cljs.core.contains_QMARK_.call(null,key_selectors_map,new cljs.core.Keyword(null,"container","container",-1736937707)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",1212911103,null),new cljs.core.Keyword(null,"container","container",-1736937707)))))].join('')));
}

return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",-1736937707),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (container){
return (function (p__28134){
var vec__28135 = p__28134;
var k = cljs.core.nth.call(null,vec__28135,(0),null);
var v = cljs.core.nth.call(null,vec__28135,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",-1610148039).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){
if(typeof dommy.core.t28136 !== 'undefined'){
} else {

/**
* @constructor
*/
dommy.core.t28136 = (function (v,k,vec__28135,p__28134,container,key_selectors_map,template,selector_map,meta28137){
this.v = v;
this.k = k;
this.vec__28135 = vec__28135;
this.p__28134 = p__28134;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta28137 = meta28137;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t28136.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__28135,k,v,container){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});})(vec__28135,k,v,container))
;

dommy.core.t28136.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__28135,k,v,container){
return (function (_28138){
var self__ = this;
var _28138__$1 = this;
return self__.meta28137;
});})(vec__28135,k,v,container))
;

dommy.core.t28136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__28135,k,v,container){
return (function (_28138,meta28137__$1){
var self__ = this;
var _28138__$1 = this;
return (new dommy.core.t28136(self__.v,self__.k,self__.vec__28135,self__.p__28134,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta28137__$1));
});})(vec__28135,k,v,container))
;

dommy.core.t28136.cljs$lang$type = true;

dommy.core.t28136.cljs$lang$ctorStr = "dommy.core/t28136";

dommy.core.t28136.cljs$lang$ctorPrWriter = ((function (vec__28135,k,v,container){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"dommy.core/t28136");
});})(vec__28135,k,v,container))
;

dommy.core.__GT_t28136 = ((function (vec__28135,k,v,container){
return (function __GT_t28136(v__$1,k__$1,vec__28135__$1,p__28134__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta28137){
return (new dommy.core.t28136(v__$1,k__$1,vec__28135__$1,p__28134__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta28137));
});})(vec__28135,k,v,container))
;

}

return (new dommy.core.t28136(v,k,vec__28135,p__28134,container,key_selectors_map,template,selector_map,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),57,new cljs.core.Keyword(null,"end-line","end-line",1837326455),162,new cljs.core.Keyword(null,"column","column",2078222095),21,new cljs.core.Keyword(null,"line","line",212345235),160,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/../server/static/out/dommy/core.cljs"], null)));
})()
:dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
});})(container))
,key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__28139_SHARP_){
return p1__28139_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){
return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
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
var closest__2 = (function (elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){
var base__$1 = dommy.template.__GT_node_like.call(null,base);
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,((function (base__$1,elem__$1){
return (function (p1__28140_SHARP_){
return !((p1__28140_SHARP_ === base__$1));
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
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){
var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);
var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);
if(cljs.core.truth_(ancestor__$1.contains)){
return ancestor__$1.contains(descendant__$1);
} else {
if(cljs.core.truth_(ancestor__$1.compareDocumentPosition)){
return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << (4))) != 0);
} else {
return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__28141){
var vec__28142 = p__28141;
var special_mouse_event = cljs.core.nth.call(null,vec__28142,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__28142,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__28142,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__28142,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__3638__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__3626__auto__ = related_target;
if(cljs.core.truth_(and__3626__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__3626__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__28142,special_mouse_event,real_mouse_event))
});})(vec__28142,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);
if(cljs.core.truth_((function (){var and__3626__auto__ = selected_target;
if(cljs.core.truth_(and__3626__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__3626__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){
var or__3638__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__28143){
var elem = cljs.core.first(arglist__28143);
arglist__28143 = cljs.core.next(arglist__28143);
var f = cljs.core.first(arglist__28143);
var args = cljs.core.rest(arglist__28143);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,(function (p1__28144_SHARP_){
return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__28144_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.template.__GT_node_like.call(null,elem_sel),null], null);
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
var listen_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__28168_28191 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_28192 = cljs.core.nth.call(null,vec__28168_28191,(0),null);
var selector_28193 = cljs.core.nth.call(null,vec__28168_28191,(1),null);
var seq__28169_28194 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__28176_28195 = null;
var count__28177_28196 = (0);
var i__28178_28197 = (0);
while(true){
if((i__28178_28197 < count__28177_28196)){
var vec__28185_28198 = cljs.core._nth.call(null,chunk__28176_28195,i__28178_28197);
var orig_type_28199 = cljs.core.nth.call(null,vec__28185_28198,(0),null);
var f_28200 = cljs.core.nth.call(null,vec__28185_28198,(1),null);
var seq__28179_28201 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_28199,new cljs.core.PersistentArrayMap.fromArray([orig_type_28199,cljs.core.identity], true, false)));
var chunk__28181_28202 = null;
var count__28182_28203 = (0);
var i__28183_28204 = (0);
while(true){
if((i__28183_28204 < count__28182_28203)){
var vec__28186_28205 = cljs.core._nth.call(null,chunk__28181_28202,i__28183_28204);
var actual_type_28206 = cljs.core.nth.call(null,vec__28186_28205,(0),null);
var factory_28207 = cljs.core.nth.call(null,vec__28186_28205,(1),null);
var canonical_f_28208 = (cljs.core.truth_(selector_28193)?cljs.core.partial.call(null,dommy.core.live_listener,elem_28192,selector_28193):cljs.core.identity).call(null,factory_28207.call(null,f_28200));
dommy.core.update_event_listeners_BANG_.call(null,elem_28192,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28193,actual_type_28206,f_28200], null),canonical_f_28208);

if(cljs.core.truth_(elem_28192.addEventListener)){
elem_28192.addEventListener(cljs.core.name.call(null,actual_type_28206),canonical_f_28208);
} else {
elem_28192.attachEvent(cljs.core.name.call(null,actual_type_28206),canonical_f_28208);
}

var G__28209 = seq__28179_28201;
var G__28210 = chunk__28181_28202;
var G__28211 = count__28182_28203;
var G__28212 = (i__28183_28204 + (1));
seq__28179_28201 = G__28209;
chunk__28181_28202 = G__28210;
count__28182_28203 = G__28211;
i__28183_28204 = G__28212;
continue;
} else {
var temp__4126__auto___28213 = cljs.core.seq.call(null,seq__28179_28201);
if(temp__4126__auto___28213){
var seq__28179_28214__$1 = temp__4126__auto___28213;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28179_28214__$1)){
var c__4425__auto___28215 = cljs.core.chunk_first.call(null,seq__28179_28214__$1);
var G__28216 = cljs.core.chunk_rest.call(null,seq__28179_28214__$1);
var G__28217 = c__4425__auto___28215;
var G__28218 = cljs.core.count.call(null,c__4425__auto___28215);
var G__28219 = (0);
seq__28179_28201 = G__28216;
chunk__28181_28202 = G__28217;
count__28182_28203 = G__28218;
i__28183_28204 = G__28219;
continue;
} else {
var vec__28187_28220 = cljs.core.first.call(null,seq__28179_28214__$1);
var actual_type_28221 = cljs.core.nth.call(null,vec__28187_28220,(0),null);
var factory_28222 = cljs.core.nth.call(null,vec__28187_28220,(1),null);
var canonical_f_28223 = (cljs.core.truth_(selector_28193)?cljs.core.partial.call(null,dommy.core.live_listener,elem_28192,selector_28193):cljs.core.identity).call(null,factory_28222.call(null,f_28200));
dommy.core.update_event_listeners_BANG_.call(null,elem_28192,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28193,actual_type_28221,f_28200], null),canonical_f_28223);

if(cljs.core.truth_(elem_28192.addEventListener)){
elem_28192.addEventListener(cljs.core.name.call(null,actual_type_28221),canonical_f_28223);
} else {
elem_28192.attachEvent(cljs.core.name.call(null,actual_type_28221),canonical_f_28223);
}

var G__28224 = cljs.core.next.call(null,seq__28179_28214__$1);
var G__28225 = null;
var G__28226 = (0);
var G__28227 = (0);
seq__28179_28201 = G__28224;
chunk__28181_28202 = G__28225;
count__28182_28203 = G__28226;
i__28183_28204 = G__28227;
continue;
}
} else {
}
}
break;
}

var G__28228 = seq__28169_28194;
var G__28229 = chunk__28176_28195;
var G__28230 = count__28177_28196;
var G__28231 = (i__28178_28197 + (1));
seq__28169_28194 = G__28228;
chunk__28176_28195 = G__28229;
count__28177_28196 = G__28230;
i__28178_28197 = G__28231;
continue;
} else {
var temp__4126__auto___28232 = cljs.core.seq.call(null,seq__28169_28194);
if(temp__4126__auto___28232){
var seq__28169_28233__$1 = temp__4126__auto___28232;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28169_28233__$1)){
var c__4425__auto___28234 = cljs.core.chunk_first.call(null,seq__28169_28233__$1);
var G__28235 = cljs.core.chunk_rest.call(null,seq__28169_28233__$1);
var G__28236 = c__4425__auto___28234;
var G__28237 = cljs.core.count.call(null,c__4425__auto___28234);
var G__28238 = (0);
seq__28169_28194 = G__28235;
chunk__28176_28195 = G__28236;
count__28177_28196 = G__28237;
i__28178_28197 = G__28238;
continue;
} else {
var vec__28188_28239 = cljs.core.first.call(null,seq__28169_28233__$1);
var orig_type_28240 = cljs.core.nth.call(null,vec__28188_28239,(0),null);
var f_28241 = cljs.core.nth.call(null,vec__28188_28239,(1),null);
var seq__28170_28242 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_28240,new cljs.core.PersistentArrayMap.fromArray([orig_type_28240,cljs.core.identity], true, false)));
var chunk__28172_28243 = null;
var count__28173_28244 = (0);
var i__28174_28245 = (0);
while(true){
if((i__28174_28245 < count__28173_28244)){
var vec__28189_28246 = cljs.core._nth.call(null,chunk__28172_28243,i__28174_28245);
var actual_type_28247 = cljs.core.nth.call(null,vec__28189_28246,(0),null);
var factory_28248 = cljs.core.nth.call(null,vec__28189_28246,(1),null);
var canonical_f_28249 = (cljs.core.truth_(selector_28193)?cljs.core.partial.call(null,dommy.core.live_listener,elem_28192,selector_28193):cljs.core.identity).call(null,factory_28248.call(null,f_28241));
dommy.core.update_event_listeners_BANG_.call(null,elem_28192,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28193,actual_type_28247,f_28241], null),canonical_f_28249);

if(cljs.core.truth_(elem_28192.addEventListener)){
elem_28192.addEventListener(cljs.core.name.call(null,actual_type_28247),canonical_f_28249);
} else {
elem_28192.attachEvent(cljs.core.name.call(null,actual_type_28247),canonical_f_28249);
}

var G__28250 = seq__28170_28242;
var G__28251 = chunk__28172_28243;
var G__28252 = count__28173_28244;
var G__28253 = (i__28174_28245 + (1));
seq__28170_28242 = G__28250;
chunk__28172_28243 = G__28251;
count__28173_28244 = G__28252;
i__28174_28245 = G__28253;
continue;
} else {
var temp__4126__auto___28254__$1 = cljs.core.seq.call(null,seq__28170_28242);
if(temp__4126__auto___28254__$1){
var seq__28170_28255__$1 = temp__4126__auto___28254__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28170_28255__$1)){
var c__4425__auto___28256 = cljs.core.chunk_first.call(null,seq__28170_28255__$1);
var G__28257 = cljs.core.chunk_rest.call(null,seq__28170_28255__$1);
var G__28258 = c__4425__auto___28256;
var G__28259 = cljs.core.count.call(null,c__4425__auto___28256);
var G__28260 = (0);
seq__28170_28242 = G__28257;
chunk__28172_28243 = G__28258;
count__28173_28244 = G__28259;
i__28174_28245 = G__28260;
continue;
} else {
var vec__28190_28261 = cljs.core.first.call(null,seq__28170_28255__$1);
var actual_type_28262 = cljs.core.nth.call(null,vec__28190_28261,(0),null);
var factory_28263 = cljs.core.nth.call(null,vec__28190_28261,(1),null);
var canonical_f_28264 = (cljs.core.truth_(selector_28193)?cljs.core.partial.call(null,dommy.core.live_listener,elem_28192,selector_28193):cljs.core.identity).call(null,factory_28263.call(null,f_28241));
dommy.core.update_event_listeners_BANG_.call(null,elem_28192,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28193,actual_type_28262,f_28241], null),canonical_f_28264);

if(cljs.core.truth_(elem_28192.addEventListener)){
elem_28192.addEventListener(cljs.core.name.call(null,actual_type_28262),canonical_f_28264);
} else {
elem_28192.attachEvent(cljs.core.name.call(null,actual_type_28262),canonical_f_28264);
}

var G__28265 = cljs.core.next.call(null,seq__28170_28255__$1);
var G__28266 = null;
var G__28267 = (0);
var G__28268 = (0);
seq__28170_28242 = G__28265;
chunk__28172_28243 = G__28266;
count__28173_28244 = G__28267;
i__28174_28245 = G__28268;
continue;
}
} else {
}
}
break;
}

var G__28269 = cljs.core.next.call(null,seq__28169_28233__$1);
var G__28270 = null;
var G__28271 = (0);
var G__28272 = (0);
seq__28169_28194 = G__28269;
chunk__28176_28195 = G__28270;
count__28177_28196 = G__28271;
i__28178_28197 = G__28272;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__28273){
var elem_sel = cljs.core.first(arglist__28273);
var type_fs = cljs.core.rest(arglist__28273);
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
var unlisten_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__28297_28320 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_28321 = cljs.core.nth.call(null,vec__28297_28320,(0),null);
var selector_28322 = cljs.core.nth.call(null,vec__28297_28320,(1),null);
var seq__28298_28323 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__28305_28324 = null;
var count__28306_28325 = (0);
var i__28307_28326 = (0);
while(true){
if((i__28307_28326 < count__28306_28325)){
var vec__28314_28327 = cljs.core._nth.call(null,chunk__28305_28324,i__28307_28326);
var orig_type_28328 = cljs.core.nth.call(null,vec__28314_28327,(0),null);
var f_28329 = cljs.core.nth.call(null,vec__28314_28327,(1),null);
var seq__28308_28330 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_28328,new cljs.core.PersistentArrayMap.fromArray([orig_type_28328,cljs.core.identity], true, false)));
var chunk__28310_28331 = null;
var count__28311_28332 = (0);
var i__28312_28333 = (0);
while(true){
if((i__28312_28333 < count__28311_28332)){
var vec__28315_28334 = cljs.core._nth.call(null,chunk__28310_28331,i__28312_28333);
var actual_type_28335 = cljs.core.nth.call(null,vec__28315_28334,(0),null);
var __28336 = cljs.core.nth.call(null,vec__28315_28334,(1),null);
var keys_28337 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28322,actual_type_28335,f_28329], null);
var canonical_f_28338 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_28321),keys_28337);
dommy.core.update_event_listeners_BANG_.call(null,elem_28321,dommy.utils.dissoc_in,keys_28337);

if(cljs.core.truth_(elem_28321.removeEventListener)){
elem_28321.removeEventListener(cljs.core.name.call(null,actual_type_28335),canonical_f_28338);
} else {
elem_28321.detachEvent(cljs.core.name.call(null,actual_type_28335),canonical_f_28338);
}

var G__28339 = seq__28308_28330;
var G__28340 = chunk__28310_28331;
var G__28341 = count__28311_28332;
var G__28342 = (i__28312_28333 + (1));
seq__28308_28330 = G__28339;
chunk__28310_28331 = G__28340;
count__28311_28332 = G__28341;
i__28312_28333 = G__28342;
continue;
} else {
var temp__4126__auto___28343 = cljs.core.seq.call(null,seq__28308_28330);
if(temp__4126__auto___28343){
var seq__28308_28344__$1 = temp__4126__auto___28343;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28308_28344__$1)){
var c__4425__auto___28345 = cljs.core.chunk_first.call(null,seq__28308_28344__$1);
var G__28346 = cljs.core.chunk_rest.call(null,seq__28308_28344__$1);
var G__28347 = c__4425__auto___28345;
var G__28348 = cljs.core.count.call(null,c__4425__auto___28345);
var G__28349 = (0);
seq__28308_28330 = G__28346;
chunk__28310_28331 = G__28347;
count__28311_28332 = G__28348;
i__28312_28333 = G__28349;
continue;
} else {
var vec__28316_28350 = cljs.core.first.call(null,seq__28308_28344__$1);
var actual_type_28351 = cljs.core.nth.call(null,vec__28316_28350,(0),null);
var __28352 = cljs.core.nth.call(null,vec__28316_28350,(1),null);
var keys_28353 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28322,actual_type_28351,f_28329], null);
var canonical_f_28354 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_28321),keys_28353);
dommy.core.update_event_listeners_BANG_.call(null,elem_28321,dommy.utils.dissoc_in,keys_28353);

if(cljs.core.truth_(elem_28321.removeEventListener)){
elem_28321.removeEventListener(cljs.core.name.call(null,actual_type_28351),canonical_f_28354);
} else {
elem_28321.detachEvent(cljs.core.name.call(null,actual_type_28351),canonical_f_28354);
}

var G__28355 = cljs.core.next.call(null,seq__28308_28344__$1);
var G__28356 = null;
var G__28357 = (0);
var G__28358 = (0);
seq__28308_28330 = G__28355;
chunk__28310_28331 = G__28356;
count__28311_28332 = G__28357;
i__28312_28333 = G__28358;
continue;
}
} else {
}
}
break;
}

var G__28359 = seq__28298_28323;
var G__28360 = chunk__28305_28324;
var G__28361 = count__28306_28325;
var G__28362 = (i__28307_28326 + (1));
seq__28298_28323 = G__28359;
chunk__28305_28324 = G__28360;
count__28306_28325 = G__28361;
i__28307_28326 = G__28362;
continue;
} else {
var temp__4126__auto___28363 = cljs.core.seq.call(null,seq__28298_28323);
if(temp__4126__auto___28363){
var seq__28298_28364__$1 = temp__4126__auto___28363;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28298_28364__$1)){
var c__4425__auto___28365 = cljs.core.chunk_first.call(null,seq__28298_28364__$1);
var G__28366 = cljs.core.chunk_rest.call(null,seq__28298_28364__$1);
var G__28367 = c__4425__auto___28365;
var G__28368 = cljs.core.count.call(null,c__4425__auto___28365);
var G__28369 = (0);
seq__28298_28323 = G__28366;
chunk__28305_28324 = G__28367;
count__28306_28325 = G__28368;
i__28307_28326 = G__28369;
continue;
} else {
var vec__28317_28370 = cljs.core.first.call(null,seq__28298_28364__$1);
var orig_type_28371 = cljs.core.nth.call(null,vec__28317_28370,(0),null);
var f_28372 = cljs.core.nth.call(null,vec__28317_28370,(1),null);
var seq__28299_28373 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_28371,new cljs.core.PersistentArrayMap.fromArray([orig_type_28371,cljs.core.identity], true, false)));
var chunk__28301_28374 = null;
var count__28302_28375 = (0);
var i__28303_28376 = (0);
while(true){
if((i__28303_28376 < count__28302_28375)){
var vec__28318_28377 = cljs.core._nth.call(null,chunk__28301_28374,i__28303_28376);
var actual_type_28378 = cljs.core.nth.call(null,vec__28318_28377,(0),null);
var __28379 = cljs.core.nth.call(null,vec__28318_28377,(1),null);
var keys_28380 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28322,actual_type_28378,f_28372], null);
var canonical_f_28381 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_28321),keys_28380);
dommy.core.update_event_listeners_BANG_.call(null,elem_28321,dommy.utils.dissoc_in,keys_28380);

if(cljs.core.truth_(elem_28321.removeEventListener)){
elem_28321.removeEventListener(cljs.core.name.call(null,actual_type_28378),canonical_f_28381);
} else {
elem_28321.detachEvent(cljs.core.name.call(null,actual_type_28378),canonical_f_28381);
}

var G__28382 = seq__28299_28373;
var G__28383 = chunk__28301_28374;
var G__28384 = count__28302_28375;
var G__28385 = (i__28303_28376 + (1));
seq__28299_28373 = G__28382;
chunk__28301_28374 = G__28383;
count__28302_28375 = G__28384;
i__28303_28376 = G__28385;
continue;
} else {
var temp__4126__auto___28386__$1 = cljs.core.seq.call(null,seq__28299_28373);
if(temp__4126__auto___28386__$1){
var seq__28299_28387__$1 = temp__4126__auto___28386__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28299_28387__$1)){
var c__4425__auto___28388 = cljs.core.chunk_first.call(null,seq__28299_28387__$1);
var G__28389 = cljs.core.chunk_rest.call(null,seq__28299_28387__$1);
var G__28390 = c__4425__auto___28388;
var G__28391 = cljs.core.count.call(null,c__4425__auto___28388);
var G__28392 = (0);
seq__28299_28373 = G__28389;
chunk__28301_28374 = G__28390;
count__28302_28375 = G__28391;
i__28303_28376 = G__28392;
continue;
} else {
var vec__28319_28393 = cljs.core.first.call(null,seq__28299_28387__$1);
var actual_type_28394 = cljs.core.nth.call(null,vec__28319_28393,(0),null);
var __28395 = cljs.core.nth.call(null,vec__28319_28393,(1),null);
var keys_28396 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28322,actual_type_28394,f_28372], null);
var canonical_f_28397 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_28321),keys_28396);
dommy.core.update_event_listeners_BANG_.call(null,elem_28321,dommy.utils.dissoc_in,keys_28396);

if(cljs.core.truth_(elem_28321.removeEventListener)){
elem_28321.removeEventListener(cljs.core.name.call(null,actual_type_28394),canonical_f_28397);
} else {
elem_28321.detachEvent(cljs.core.name.call(null,actual_type_28394),canonical_f_28397);
}

var G__28398 = cljs.core.next.call(null,seq__28299_28387__$1);
var G__28399 = null;
var G__28400 = (0);
var G__28401 = (0);
seq__28299_28373 = G__28398;
chunk__28301_28374 = G__28399;
count__28302_28375 = G__28400;
i__28303_28376 = G__28401;
continue;
}
} else {
}
}
break;
}

var G__28402 = cljs.core.next.call(null,seq__28298_28364__$1);
var G__28403 = null;
var G__28404 = (0);
var G__28405 = (0);
seq__28298_28323 = G__28402;
chunk__28305_28324 = G__28403;
count__28306_28325 = G__28404;
i__28307_28326 = G__28405;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__28406){
var elem_sel = cljs.core.first(arglist__28406);
var type_fs = cljs.core.rest(arglist__28406);
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
var listen_once_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__28414_28421 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_28422 = cljs.core.nth.call(null,vec__28414_28421,(0),null);
var selector_28423 = cljs.core.nth.call(null,vec__28414_28421,(1),null);
var seq__28415_28424 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__28416_28425 = null;
var count__28417_28426 = (0);
var i__28418_28427 = (0);
while(true){
if((i__28418_28427 < count__28417_28426)){
var vec__28419_28428 = cljs.core._nth.call(null,chunk__28416_28425,i__28418_28427);
var type_28429 = cljs.core.nth.call(null,vec__28419_28428,(0),null);
var f_28430 = cljs.core.nth.call(null,vec__28419_28428,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_28429,((function (seq__28415_28424,chunk__28416_28425,count__28417_28426,i__28418_28427,vec__28419_28428,type_28429,f_28430,vec__28414_28421,elem_28422,selector_28423){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_28429,this_fn);

return f_28430.call(null,e);
});})(seq__28415_28424,chunk__28416_28425,count__28417_28426,i__28418_28427,vec__28419_28428,type_28429,f_28430,vec__28414_28421,elem_28422,selector_28423))
);

var G__28431 = seq__28415_28424;
var G__28432 = chunk__28416_28425;
var G__28433 = count__28417_28426;
var G__28434 = (i__28418_28427 + (1));
seq__28415_28424 = G__28431;
chunk__28416_28425 = G__28432;
count__28417_28426 = G__28433;
i__28418_28427 = G__28434;
continue;
} else {
var temp__4126__auto___28435 = cljs.core.seq.call(null,seq__28415_28424);
if(temp__4126__auto___28435){
var seq__28415_28436__$1 = temp__4126__auto___28435;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28415_28436__$1)){
var c__4425__auto___28437 = cljs.core.chunk_first.call(null,seq__28415_28436__$1);
var G__28438 = cljs.core.chunk_rest.call(null,seq__28415_28436__$1);
var G__28439 = c__4425__auto___28437;
var G__28440 = cljs.core.count.call(null,c__4425__auto___28437);
var G__28441 = (0);
seq__28415_28424 = G__28438;
chunk__28416_28425 = G__28439;
count__28417_28426 = G__28440;
i__28418_28427 = G__28441;
continue;
} else {
var vec__28420_28442 = cljs.core.first.call(null,seq__28415_28436__$1);
var type_28443 = cljs.core.nth.call(null,vec__28420_28442,(0),null);
var f_28444 = cljs.core.nth.call(null,vec__28420_28442,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_28443,((function (seq__28415_28424,chunk__28416_28425,count__28417_28426,i__28418_28427,vec__28420_28442,type_28443,f_28444,seq__28415_28436__$1,temp__4126__auto___28435,vec__28414_28421,elem_28422,selector_28423){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_28443,this_fn);

return f_28444.call(null,e);
});})(seq__28415_28424,chunk__28416_28425,count__28417_28426,i__28418_28427,vec__28420_28442,type_28443,f_28444,seq__28415_28436__$1,temp__4126__auto___28435,vec__28414_28421,elem_28422,selector_28423))
);

var G__28445 = cljs.core.next.call(null,seq__28415_28436__$1);
var G__28446 = null;
var G__28447 = (0);
var G__28448 = (0);
seq__28415_28424 = G__28445;
chunk__28416_28425 = G__28446;
count__28417_28426 = G__28447;
i__28418_28427 = G__28448;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__28449){
var elem_sel = cljs.core.first(arglist__28449);
var type_fs = cljs.core.rest(arglist__28449);
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
var fire_BANG___delegate = function (node,event_type,p__28450){
var vec__28452 = p__28450;
var update_event_BANG_ = cljs.core.nth.call(null,vec__28452,(0),null);
if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1027057938,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",1597931428,null))))].join('')));
}

var update_event_BANG___$1 = (function (){var or__3638__auto__ = update_event_BANG_;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return cljs.core.identity;
}
})();
if(cljs.core.truth_(document.createEvent)){
var event = document.createEvent("Event");
event.initEvent(cljs.core.name.call(null,event_type),true,true);

return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else {
return node.fireEvent([cljs.core.str("on"),cljs.core.str(cljs.core.name.call(null,event_type))].join(''),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__28450 = null;
if (arguments.length > 2) {
  p__28450 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return fire_BANG___delegate.call(this,node,event_type,p__28450);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__28453){
var node = cljs.core.first(arglist__28453);
arglist__28453 = cljs.core.next(arglist__28453);
var event_type = cljs.core.first(arglist__28453);
var p__28450 = cljs.core.rest(arglist__28453);
return fire_BANG___delegate(node,event_type,p__28450);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map