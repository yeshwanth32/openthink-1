// Compiled by ClojureScript 1.9.293 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
goog.require('dommy.attrs');
goog.require('dommy.template');
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
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
elem__$1.innerHTML = html;

return elem__$1;
});
dommy.core.html = (function dommy$core$html(elem){
return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");
(elem__$1[prop] = text);

return elem__$1;
});
dommy.core.text = (function dommy$core$text(elem){
var or__6543__auto__ = elem.textContent;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return elem.innerText;
}
});
dommy.core.value = (function dommy$core$value(elem){
return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
elem__$1.value = value;

return elem__$1;
});
/**
 * append `child` to `parent`. 'parent' and 'child' should be node-like
 * (work with dommy.template/->node-like). The node-like projection
 * of parent is returned after appending child.
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var args16651 = [];
var len__7651__auto___16662 = arguments.length;
var i__7652__auto___16663 = (0);
while(true){
if((i__7652__auto___16663 < len__7651__auto___16662)){
args16651.push((arguments[i__7652__auto___16663]));

var G__16664 = (i__7652__auto___16663 + (1));
i__7652__auto___16663 = G__16664;
continue;
} else {
}
break;
}

var G__16656 = args16651.length;
switch (G__16656) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args16651.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7670__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__16657 = dommy.template.__GT_node_like.call(null,parent);
G__16657.appendChild(dommy.template.__GT_node_like.call(null,child));

return G__16657;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var parent__$1 = dommy.template.__GT_node_like.call(null,parent);
var seq__16658_16666 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__16659_16667 = null;
var count__16660_16668 = (0);
var i__16661_16669 = (0);
while(true){
if((i__16661_16669 < count__16660_16668)){
var c_16670 = cljs.core._nth.call(null,chunk__16659_16667,i__16661_16669);
dommy.core.append_BANG_.call(null,parent__$1,c_16670);

var G__16671 = seq__16658_16666;
var G__16672 = chunk__16659_16667;
var G__16673 = count__16660_16668;
var G__16674 = (i__16661_16669 + (1));
seq__16658_16666 = G__16671;
chunk__16659_16667 = G__16672;
count__16660_16668 = G__16673;
i__16661_16669 = G__16674;
continue;
} else {
var temp__4657__auto___16675 = cljs.core.seq.call(null,seq__16658_16666);
if(temp__4657__auto___16675){
var seq__16658_16676__$1 = temp__4657__auto___16675;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16658_16676__$1)){
var c__7357__auto___16677 = cljs.core.chunk_first.call(null,seq__16658_16676__$1);
var G__16678 = cljs.core.chunk_rest.call(null,seq__16658_16676__$1);
var G__16679 = c__7357__auto___16677;
var G__16680 = cljs.core.count.call(null,c__7357__auto___16677);
var G__16681 = (0);
seq__16658_16666 = G__16678;
chunk__16659_16667 = G__16679;
count__16660_16668 = G__16680;
i__16661_16669 = G__16681;
continue;
} else {
var c_16682 = cljs.core.first.call(null,seq__16658_16676__$1);
dommy.core.append_BANG_.call(null,parent__$1,c_16682);

var G__16683 = cljs.core.next.call(null,seq__16658_16676__$1);
var G__16684 = null;
var G__16685 = (0);
var G__16686 = (0);
seq__16658_16666 = G__16683;
chunk__16659_16667 = G__16684;
count__16660_16668 = G__16685;
i__16661_16669 = G__16686;
continue;
}
} else {
}
}
break;
}

return parent__$1;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq16652){
var G__16653 = cljs.core.first.call(null,seq16652);
var seq16652__$1 = cljs.core.next.call(null,seq16652);
var G__16654 = cljs.core.first.call(null,seq16652__$1);
var seq16652__$2 = cljs.core.next.call(null,seq16652__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16653,G__16654,seq16652__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * prepend `child` to `parent`, both node-like
 * return ->node-like projection of `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args16687 = [];
var len__7651__auto___16697 = arguments.length;
var i__7652__auto___16698 = (0);
while(true){
if((i__7652__auto___16698 < len__7651__auto___16697)){
args16687.push((arguments[i__7652__auto___16698]));

var G__16699 = (i__7652__auto___16698 + (1));
i__7652__auto___16698 = G__16699;
continue;
} else {
}
break;
}

var G__16692 = args16687.length;
switch (G__16692) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args16687.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7670__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var parent__$1 = dommy.template.__GT_node_like.call(null,parent);
return parent__$1.insertBefore(dommy.template.__GT_node_like.call(null,child),parent__$1.firstChild);
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var parent__$1 = dommy.template.__GT_node_like.call(null,parent);
var seq__16693_16701 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__16694_16702 = null;
var count__16695_16703 = (0);
var i__16696_16704 = (0);
while(true){
if((i__16696_16704 < count__16695_16703)){
var c_16705 = cljs.core._nth.call(null,chunk__16694_16702,i__16696_16704);
dommy.core.prepend_BANG_.call(null,parent__$1,c_16705);

var G__16706 = seq__16693_16701;
var G__16707 = chunk__16694_16702;
var G__16708 = count__16695_16703;
var G__16709 = (i__16696_16704 + (1));
seq__16693_16701 = G__16706;
chunk__16694_16702 = G__16707;
count__16695_16703 = G__16708;
i__16696_16704 = G__16709;
continue;
} else {
var temp__4657__auto___16710 = cljs.core.seq.call(null,seq__16693_16701);
if(temp__4657__auto___16710){
var seq__16693_16711__$1 = temp__4657__auto___16710;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16693_16711__$1)){
var c__7357__auto___16712 = cljs.core.chunk_first.call(null,seq__16693_16711__$1);
var G__16713 = cljs.core.chunk_rest.call(null,seq__16693_16711__$1);
var G__16714 = c__7357__auto___16712;
var G__16715 = cljs.core.count.call(null,c__7357__auto___16712);
var G__16716 = (0);
seq__16693_16701 = G__16713;
chunk__16694_16702 = G__16714;
count__16695_16703 = G__16715;
i__16696_16704 = G__16716;
continue;
} else {
var c_16717 = cljs.core.first.call(null,seq__16693_16711__$1);
dommy.core.prepend_BANG_.call(null,parent__$1,c_16717);

var G__16718 = cljs.core.next.call(null,seq__16693_16711__$1);
var G__16719 = null;
var G__16720 = (0);
var G__16721 = (0);
seq__16693_16701 = G__16718;
chunk__16694_16702 = G__16719;
count__16695_16703 = G__16720;
i__16696_16704 = G__16721;
continue;
}
} else {
}
}
break;
}

return parent__$1;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq16688){
var G__16689 = cljs.core.first.call(null,seq16688);
var seq16688__$1 = cljs.core.next.call(null,seq16688);
var G__16690 = cljs.core.first.call(null,seq16688__$1);
var seq16688__$2 = cljs.core.next.call(null,seq16688__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16689,G__16690,seq16688__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * insert `node` before `other`, both node-like,
 * `other` must have a parent. return `node`
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var actual_node = dommy.template.__GT_node_like.call(null,elem);
var other__$1 = dommy.template.__GT_node_like.call(null,other);
if(cljs.core.truth_(other__$1.parentNode)){
} else {
throw (new Error("Assert failed: (.-parentNode other)"));
}

other__$1.parentNode.insertBefore(actual_node,other__$1);

return actual_node;
});
/**
 * insert `node` after `other`, both node-like,
 * `other` must have a parent. return `node`
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var actual_node = dommy.template.__GT_node_like.call(null,elem);
var other__$1 = dommy.template.__GT_node_like.call(null,other);
var parent = other__$1.parentNode;
var temp__4655__auto___16722 = other__$1.nextSibling;
if(cljs.core.truth_(temp__4655__auto___16722)){
var next_16723 = temp__4655__auto___16722;
parent.insertBefore(actual_node,next_16723);
} else {
parent.appendChild(actual_node);
}

return actual_node;
});
/**
 * replace `elem` with `new`, both node-like, return node-like projection of new.
 * node-like projection of elem must have parent.
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var new$__$1 = dommy.template.__GT_node_like.call(null,new$);
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
if(cljs.core.truth_(elem__$1.parentNode)){
} else {
throw (new Error("Assert failed: (.-parentNode elem)"));
}

elem__$1.parentNode.replaceChild(new$__$1,elem__$1);

return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(parent,node_like){
var G__16725 = dommy.template.__GT_node_like.call(null,parent);
G__16725.innerHTML = "";

dommy.core.append_BANG_.call(null,G__16725,node_like);

return G__16725;
});
/**
 * remove node-like `elem` from parent, return node-like projection of elem
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(elem){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var G__16727 = elem__$1.parentNode;
G__16727.removeChild(elem__$1);

return G__16727;
});
/**
 * clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.template.__GT_node_like.call(null,elem).innerHTML = "";
});
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy.core.selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.selector_map = (function dommy$core$selector_map(template,key_selectors_map){
var container = dommy.template.__GT_node_like.call(null,template);
if(!(cljs.core.contains_QMARK_.call(null,key_selectors_map,new cljs.core.Keyword(null,"container","container",-1736937707)))){
} else {
throw (new Error("Assert failed: (not (contains? key-selectors-map :container))"));
}

return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",-1736937707),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (container){
return (function (p__16735){
var vec__16736 = p__16735;
var k = cljs.core.nth.call(null,vec__16736,(0),null);
var v = cljs.core.nth.call(null,vec__16736,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",-1610148039).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){
if(typeof dommy.core.t_dommy$core16739 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
dommy.core.t_dommy$core16739 = (function (template,key_selectors_map,container,p__16735,vec__16736,k,v,meta16740){
this.template = template;
this.key_selectors_map = key_selectors_map;
this.container = container;
this.p__16735 = p__16735;
this.vec__16736 = vec__16736;
this.k = k;
this.v = v;
this.meta16740 = meta16740;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dommy.core.t_dommy$core16739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__16736,k,v,container){
return (function (_16741,meta16740__$1){
var self__ = this;
var _16741__$1 = this;
return (new dommy.core.t_dommy$core16739(self__.template,self__.key_selectors_map,self__.container,self__.p__16735,self__.vec__16736,self__.k,self__.v,meta16740__$1));
});})(vec__16736,k,v,container))
;

dommy.core.t_dommy$core16739.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__16736,k,v,container){
return (function (_16741){
var self__ = this;
var _16741__$1 = this;
return self__.meta16740;
});})(vec__16736,k,v,container))
;

dommy.core.t_dommy$core16739.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__16736,k,v,container){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});})(vec__16736,k,v,container))
;

dommy.core.t_dommy$core16739.getBasis = ((function (vec__16736,k,v,container){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",1212911103,null),new cljs.core.Symbol(null,"container","container",-96406180,null),new cljs.core.Symbol(null,"p__16735","p__16735",1608864517,null),new cljs.core.Symbol(null,"vec__16736","vec__16736",-2028937936,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta16740","meta16740",-44694415,null)], null);
});})(vec__16736,k,v,container))
;

dommy.core.t_dommy$core16739.cljs$lang$type = true;

dommy.core.t_dommy$core16739.cljs$lang$ctorStr = "dommy.core/t_dommy$core16739";

dommy.core.t_dommy$core16739.cljs$lang$ctorPrWriter = ((function (vec__16736,k,v,container){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"dommy.core/t_dommy$core16739");
});})(vec__16736,k,v,container))
;

dommy.core.__GT_t_dommy$core16739 = ((function (vec__16736,k,v,container){
return (function dommy$core$selector_map_$___GT_t_dommy$core16739(template__$1,key_selectors_map__$1,container__$1,p__16735__$1,vec__16736__$1,k__$1,v__$1,meta16740){
return (new dommy.core.t_dommy$core16739(template__$1,key_selectors_map__$1,container__$1,p__16735__$1,vec__16736__$1,k__$1,v__$1,meta16740));
});})(vec__16736,k,v,container))
;

}

return (new dommy.core.t_dommy$core16739(template,key_selectors_map,container,p__16735,vec__16736,k,v,cljs.core.PersistentArrayMap.EMPTY));
})()
:dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
});})(container))
,key_selectors_map)));
});
/**
 * a lazy seq of the ancestors of `node`
 */
dommy.core.ancestor_nodes = (function dommy$core$ancestor_nodes(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__16742_SHARP_){
return p1__16742_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
 * returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var args16743 = [];
var len__7651__auto___16746 = arguments.length;
var i__7652__auto___16747 = (0);
while(true){
if((i__7652__auto___16747 < len__7651__auto___16746)){
args16743.push((arguments[i__7652__auto___16747]));

var G__16748 = (i__7652__auto___16747 + (1));
i__7652__auto___16747 = G__16748;
continue;
} else {
}
break;
}

var G__16745 = args16743.length;
switch (G__16745) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16743.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;

/**
 * closest ancestor of `node` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var args16751 = [];
var len__7651__auto___16754 = arguments.length;
var i__7652__auto___16755 = (0);
while(true){
if((i__7652__auto___16755 < len__7651__auto___16754)){
args16751.push((arguments[i__7652__auto___16755]));

var G__16756 = (i__7652__auto___16755 + (1));
i__7652__auto___16755 = G__16756;
continue;
} else {
}
break;
}

var G__16753 = args16751.length;
switch (G__16753) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16751.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
var base__$1 = dommy.template.__GT_node_like.call(null,base);
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,((function (base__$1,elem__$1){
return (function (p1__16750_SHARP_){
return !((p1__16750_SHARP_ === base__$1));
});})(base__$1,elem__$1))
,dommy.core.ancestor_nodes.call(null,elem__$1))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;

/**
 * is `descendant` a descendant of `ancestor`?
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16758){
var vec__16759 = p__16758;
var special_mouse_event = cljs.core.nth.call(null,vec__16759,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__16759,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__16759,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__16759,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__6543__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__6531__auto__ = related_target;
if(cljs.core.truth_(and__6531__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__6531__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__16759,special_mouse_event,real_mouse_event))
});})(vec__16759,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);
if(cljs.core.truth_((function (){var and__6531__auto__ = selected_target;
if(cljs.core.truth_(and__6531__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__6531__auto__;
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
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__6543__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__7658__auto__ = [];
var len__7651__auto___16765 = arguments.length;
var i__7652__auto___16766 = (0);
while(true){
if((i__7652__auto___16766 < len__7651__auto___16765)){
args__7658__auto__.push((arguments[i__7652__auto___16766]));

var G__16767 = (i__7652__auto___16766 + (1));
i__7652__auto___16766 = G__16767;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((2) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7659__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq16762){
var G__16763 = cljs.core.first.call(null,seq16762);
var seq16762__$1 = cljs.core.next.call(null,seq16762);
var G__16764 = cljs.core.first.call(null,seq16762__$1);
var seq16762__$2 = cljs.core.next.call(null,seq16762__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16763,G__16764,seq16762__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,(function (p1__16768_SHARP_){
return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__16768_SHARP_));
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
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__7658__auto__ = [];
var len__7651__auto___16808 = arguments.length;
var i__7652__auto___16809 = (0);
while(true){
if((i__7652__auto___16809 < len__7651__auto___16808)){
args__7658__auto__.push((arguments[i__7652__auto___16809]));

var G__16810 = (i__7652__auto___16809 + (1));
i__7652__auto___16809 = G__16810;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__16771_16811 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_16812 = cljs.core.nth.call(null,vec__16771_16811,(0),null);
var selector_16813 = cljs.core.nth.call(null,vec__16771_16811,(1),null);
var seq__16774_16814 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__16781_16815 = null;
var count__16782_16816 = (0);
var i__16783_16817 = (0);
while(true){
if((i__16783_16817 < count__16782_16816)){
var vec__16790_16818 = cljs.core._nth.call(null,chunk__16781_16815,i__16783_16817);
var orig_type_16819 = cljs.core.nth.call(null,vec__16790_16818,(0),null);
var f_16820 = cljs.core.nth.call(null,vec__16790_16818,(1),null);
var seq__16784_16821 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16819,cljs.core.PersistentArrayMap.fromArray([orig_type_16819,cljs.core.identity], true, false)));
var chunk__16786_16822 = null;
var count__16787_16823 = (0);
var i__16788_16824 = (0);
while(true){
if((i__16788_16824 < count__16787_16823)){
var vec__16793_16825 = cljs.core._nth.call(null,chunk__16786_16822,i__16788_16824);
var actual_type_16826 = cljs.core.nth.call(null,vec__16793_16825,(0),null);
var factory_16827 = cljs.core.nth.call(null,vec__16793_16825,(1),null);
var canonical_f_16828 = (cljs.core.truth_(selector_16813)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16812,selector_16813):cljs.core.identity).call(null,factory_16827.call(null,f_16820));
dommy.core.update_event_listeners_BANG_.call(null,elem_16812,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16813,actual_type_16826,f_16820], null),canonical_f_16828);

if(cljs.core.truth_(elem_16812.addEventListener)){
elem_16812.addEventListener(cljs.core.name.call(null,actual_type_16826),canonical_f_16828);
} else {
elem_16812.attachEvent(cljs.core.name.call(null,actual_type_16826),canonical_f_16828);
}

var G__16829 = seq__16784_16821;
var G__16830 = chunk__16786_16822;
var G__16831 = count__16787_16823;
var G__16832 = (i__16788_16824 + (1));
seq__16784_16821 = G__16829;
chunk__16786_16822 = G__16830;
count__16787_16823 = G__16831;
i__16788_16824 = G__16832;
continue;
} else {
var temp__4657__auto___16833 = cljs.core.seq.call(null,seq__16784_16821);
if(temp__4657__auto___16833){
var seq__16784_16834__$1 = temp__4657__auto___16833;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16784_16834__$1)){
var c__7357__auto___16835 = cljs.core.chunk_first.call(null,seq__16784_16834__$1);
var G__16836 = cljs.core.chunk_rest.call(null,seq__16784_16834__$1);
var G__16837 = c__7357__auto___16835;
var G__16838 = cljs.core.count.call(null,c__7357__auto___16835);
var G__16839 = (0);
seq__16784_16821 = G__16836;
chunk__16786_16822 = G__16837;
count__16787_16823 = G__16838;
i__16788_16824 = G__16839;
continue;
} else {
var vec__16796_16840 = cljs.core.first.call(null,seq__16784_16834__$1);
var actual_type_16841 = cljs.core.nth.call(null,vec__16796_16840,(0),null);
var factory_16842 = cljs.core.nth.call(null,vec__16796_16840,(1),null);
var canonical_f_16843 = (cljs.core.truth_(selector_16813)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16812,selector_16813):cljs.core.identity).call(null,factory_16842.call(null,f_16820));
dommy.core.update_event_listeners_BANG_.call(null,elem_16812,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16813,actual_type_16841,f_16820], null),canonical_f_16843);

if(cljs.core.truth_(elem_16812.addEventListener)){
elem_16812.addEventListener(cljs.core.name.call(null,actual_type_16841),canonical_f_16843);
} else {
elem_16812.attachEvent(cljs.core.name.call(null,actual_type_16841),canonical_f_16843);
}

var G__16844 = cljs.core.next.call(null,seq__16784_16834__$1);
var G__16845 = null;
var G__16846 = (0);
var G__16847 = (0);
seq__16784_16821 = G__16844;
chunk__16786_16822 = G__16845;
count__16787_16823 = G__16846;
i__16788_16824 = G__16847;
continue;
}
} else {
}
}
break;
}

var G__16848 = seq__16774_16814;
var G__16849 = chunk__16781_16815;
var G__16850 = count__16782_16816;
var G__16851 = (i__16783_16817 + (1));
seq__16774_16814 = G__16848;
chunk__16781_16815 = G__16849;
count__16782_16816 = G__16850;
i__16783_16817 = G__16851;
continue;
} else {
var temp__4657__auto___16852 = cljs.core.seq.call(null,seq__16774_16814);
if(temp__4657__auto___16852){
var seq__16774_16853__$1 = temp__4657__auto___16852;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16774_16853__$1)){
var c__7357__auto___16854 = cljs.core.chunk_first.call(null,seq__16774_16853__$1);
var G__16855 = cljs.core.chunk_rest.call(null,seq__16774_16853__$1);
var G__16856 = c__7357__auto___16854;
var G__16857 = cljs.core.count.call(null,c__7357__auto___16854);
var G__16858 = (0);
seq__16774_16814 = G__16855;
chunk__16781_16815 = G__16856;
count__16782_16816 = G__16857;
i__16783_16817 = G__16858;
continue;
} else {
var vec__16799_16859 = cljs.core.first.call(null,seq__16774_16853__$1);
var orig_type_16860 = cljs.core.nth.call(null,vec__16799_16859,(0),null);
var f_16861 = cljs.core.nth.call(null,vec__16799_16859,(1),null);
var seq__16775_16862 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16860,cljs.core.PersistentArrayMap.fromArray([orig_type_16860,cljs.core.identity], true, false)));
var chunk__16777_16863 = null;
var count__16778_16864 = (0);
var i__16779_16865 = (0);
while(true){
if((i__16779_16865 < count__16778_16864)){
var vec__16802_16866 = cljs.core._nth.call(null,chunk__16777_16863,i__16779_16865);
var actual_type_16867 = cljs.core.nth.call(null,vec__16802_16866,(0),null);
var factory_16868 = cljs.core.nth.call(null,vec__16802_16866,(1),null);
var canonical_f_16869 = (cljs.core.truth_(selector_16813)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16812,selector_16813):cljs.core.identity).call(null,factory_16868.call(null,f_16861));
dommy.core.update_event_listeners_BANG_.call(null,elem_16812,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16813,actual_type_16867,f_16861], null),canonical_f_16869);

if(cljs.core.truth_(elem_16812.addEventListener)){
elem_16812.addEventListener(cljs.core.name.call(null,actual_type_16867),canonical_f_16869);
} else {
elem_16812.attachEvent(cljs.core.name.call(null,actual_type_16867),canonical_f_16869);
}

var G__16870 = seq__16775_16862;
var G__16871 = chunk__16777_16863;
var G__16872 = count__16778_16864;
var G__16873 = (i__16779_16865 + (1));
seq__16775_16862 = G__16870;
chunk__16777_16863 = G__16871;
count__16778_16864 = G__16872;
i__16779_16865 = G__16873;
continue;
} else {
var temp__4657__auto___16874__$1 = cljs.core.seq.call(null,seq__16775_16862);
if(temp__4657__auto___16874__$1){
var seq__16775_16875__$1 = temp__4657__auto___16874__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16775_16875__$1)){
var c__7357__auto___16876 = cljs.core.chunk_first.call(null,seq__16775_16875__$1);
var G__16877 = cljs.core.chunk_rest.call(null,seq__16775_16875__$1);
var G__16878 = c__7357__auto___16876;
var G__16879 = cljs.core.count.call(null,c__7357__auto___16876);
var G__16880 = (0);
seq__16775_16862 = G__16877;
chunk__16777_16863 = G__16878;
count__16778_16864 = G__16879;
i__16779_16865 = G__16880;
continue;
} else {
var vec__16805_16881 = cljs.core.first.call(null,seq__16775_16875__$1);
var actual_type_16882 = cljs.core.nth.call(null,vec__16805_16881,(0),null);
var factory_16883 = cljs.core.nth.call(null,vec__16805_16881,(1),null);
var canonical_f_16884 = (cljs.core.truth_(selector_16813)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16812,selector_16813):cljs.core.identity).call(null,factory_16883.call(null,f_16861));
dommy.core.update_event_listeners_BANG_.call(null,elem_16812,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16813,actual_type_16882,f_16861], null),canonical_f_16884);

if(cljs.core.truth_(elem_16812.addEventListener)){
elem_16812.addEventListener(cljs.core.name.call(null,actual_type_16882),canonical_f_16884);
} else {
elem_16812.attachEvent(cljs.core.name.call(null,actual_type_16882),canonical_f_16884);
}

var G__16885 = cljs.core.next.call(null,seq__16775_16875__$1);
var G__16886 = null;
var G__16887 = (0);
var G__16888 = (0);
seq__16775_16862 = G__16885;
chunk__16777_16863 = G__16886;
count__16778_16864 = G__16887;
i__16779_16865 = G__16888;
continue;
}
} else {
}
}
break;
}

var G__16889 = cljs.core.next.call(null,seq__16774_16853__$1);
var G__16890 = null;
var G__16891 = (0);
var G__16892 = (0);
seq__16774_16814 = G__16889;
chunk__16781_16815 = G__16890;
count__16782_16816 = G__16891;
i__16783_16817 = G__16892;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq16769){
var G__16770 = cljs.core.first.call(null,seq16769);
var seq16769__$1 = cljs.core.next.call(null,seq16769);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16770,seq16769__$1);
});

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__7658__auto__ = [];
var len__7651__auto___16932 = arguments.length;
var i__7652__auto___16933 = (0);
while(true){
if((i__7652__auto___16933 < len__7651__auto___16932)){
args__7658__auto__.push((arguments[i__7652__auto___16933]));

var G__16934 = (i__7652__auto___16933 + (1));
i__7652__auto___16933 = G__16934;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__16895_16935 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_16936 = cljs.core.nth.call(null,vec__16895_16935,(0),null);
var selector_16937 = cljs.core.nth.call(null,vec__16895_16935,(1),null);
var seq__16898_16938 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__16905_16939 = null;
var count__16906_16940 = (0);
var i__16907_16941 = (0);
while(true){
if((i__16907_16941 < count__16906_16940)){
var vec__16914_16942 = cljs.core._nth.call(null,chunk__16905_16939,i__16907_16941);
var orig_type_16943 = cljs.core.nth.call(null,vec__16914_16942,(0),null);
var f_16944 = cljs.core.nth.call(null,vec__16914_16942,(1),null);
var seq__16908_16945 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16943,cljs.core.PersistentArrayMap.fromArray([orig_type_16943,cljs.core.identity], true, false)));
var chunk__16910_16946 = null;
var count__16911_16947 = (0);
var i__16912_16948 = (0);
while(true){
if((i__16912_16948 < count__16911_16947)){
var vec__16917_16949 = cljs.core._nth.call(null,chunk__16910_16946,i__16912_16948);
var actual_type_16950 = cljs.core.nth.call(null,vec__16917_16949,(0),null);
var __16951 = cljs.core.nth.call(null,vec__16917_16949,(1),null);
var keys_16952 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16937,actual_type_16950,f_16944], null);
var canonical_f_16953 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16936),keys_16952);
dommy.core.update_event_listeners_BANG_.call(null,elem_16936,dommy.utils.dissoc_in,keys_16952);

if(cljs.core.truth_(elem_16936.removeEventListener)){
elem_16936.removeEventListener(cljs.core.name.call(null,actual_type_16950),canonical_f_16953);
} else {
elem_16936.detachEvent(cljs.core.name.call(null,actual_type_16950),canonical_f_16953);
}

var G__16954 = seq__16908_16945;
var G__16955 = chunk__16910_16946;
var G__16956 = count__16911_16947;
var G__16957 = (i__16912_16948 + (1));
seq__16908_16945 = G__16954;
chunk__16910_16946 = G__16955;
count__16911_16947 = G__16956;
i__16912_16948 = G__16957;
continue;
} else {
var temp__4657__auto___16958 = cljs.core.seq.call(null,seq__16908_16945);
if(temp__4657__auto___16958){
var seq__16908_16959__$1 = temp__4657__auto___16958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16908_16959__$1)){
var c__7357__auto___16960 = cljs.core.chunk_first.call(null,seq__16908_16959__$1);
var G__16961 = cljs.core.chunk_rest.call(null,seq__16908_16959__$1);
var G__16962 = c__7357__auto___16960;
var G__16963 = cljs.core.count.call(null,c__7357__auto___16960);
var G__16964 = (0);
seq__16908_16945 = G__16961;
chunk__16910_16946 = G__16962;
count__16911_16947 = G__16963;
i__16912_16948 = G__16964;
continue;
} else {
var vec__16920_16965 = cljs.core.first.call(null,seq__16908_16959__$1);
var actual_type_16966 = cljs.core.nth.call(null,vec__16920_16965,(0),null);
var __16967 = cljs.core.nth.call(null,vec__16920_16965,(1),null);
var keys_16968 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16937,actual_type_16966,f_16944], null);
var canonical_f_16969 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16936),keys_16968);
dommy.core.update_event_listeners_BANG_.call(null,elem_16936,dommy.utils.dissoc_in,keys_16968);

if(cljs.core.truth_(elem_16936.removeEventListener)){
elem_16936.removeEventListener(cljs.core.name.call(null,actual_type_16966),canonical_f_16969);
} else {
elem_16936.detachEvent(cljs.core.name.call(null,actual_type_16966),canonical_f_16969);
}

var G__16970 = cljs.core.next.call(null,seq__16908_16959__$1);
var G__16971 = null;
var G__16972 = (0);
var G__16973 = (0);
seq__16908_16945 = G__16970;
chunk__16910_16946 = G__16971;
count__16911_16947 = G__16972;
i__16912_16948 = G__16973;
continue;
}
} else {
}
}
break;
}

var G__16974 = seq__16898_16938;
var G__16975 = chunk__16905_16939;
var G__16976 = count__16906_16940;
var G__16977 = (i__16907_16941 + (1));
seq__16898_16938 = G__16974;
chunk__16905_16939 = G__16975;
count__16906_16940 = G__16976;
i__16907_16941 = G__16977;
continue;
} else {
var temp__4657__auto___16978 = cljs.core.seq.call(null,seq__16898_16938);
if(temp__4657__auto___16978){
var seq__16898_16979__$1 = temp__4657__auto___16978;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16898_16979__$1)){
var c__7357__auto___16980 = cljs.core.chunk_first.call(null,seq__16898_16979__$1);
var G__16981 = cljs.core.chunk_rest.call(null,seq__16898_16979__$1);
var G__16982 = c__7357__auto___16980;
var G__16983 = cljs.core.count.call(null,c__7357__auto___16980);
var G__16984 = (0);
seq__16898_16938 = G__16981;
chunk__16905_16939 = G__16982;
count__16906_16940 = G__16983;
i__16907_16941 = G__16984;
continue;
} else {
var vec__16923_16985 = cljs.core.first.call(null,seq__16898_16979__$1);
var orig_type_16986 = cljs.core.nth.call(null,vec__16923_16985,(0),null);
var f_16987 = cljs.core.nth.call(null,vec__16923_16985,(1),null);
var seq__16899_16988 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16986,cljs.core.PersistentArrayMap.fromArray([orig_type_16986,cljs.core.identity], true, false)));
var chunk__16901_16989 = null;
var count__16902_16990 = (0);
var i__16903_16991 = (0);
while(true){
if((i__16903_16991 < count__16902_16990)){
var vec__16926_16992 = cljs.core._nth.call(null,chunk__16901_16989,i__16903_16991);
var actual_type_16993 = cljs.core.nth.call(null,vec__16926_16992,(0),null);
var __16994 = cljs.core.nth.call(null,vec__16926_16992,(1),null);
var keys_16995 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16937,actual_type_16993,f_16987], null);
var canonical_f_16996 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16936),keys_16995);
dommy.core.update_event_listeners_BANG_.call(null,elem_16936,dommy.utils.dissoc_in,keys_16995);

if(cljs.core.truth_(elem_16936.removeEventListener)){
elem_16936.removeEventListener(cljs.core.name.call(null,actual_type_16993),canonical_f_16996);
} else {
elem_16936.detachEvent(cljs.core.name.call(null,actual_type_16993),canonical_f_16996);
}

var G__16997 = seq__16899_16988;
var G__16998 = chunk__16901_16989;
var G__16999 = count__16902_16990;
var G__17000 = (i__16903_16991 + (1));
seq__16899_16988 = G__16997;
chunk__16901_16989 = G__16998;
count__16902_16990 = G__16999;
i__16903_16991 = G__17000;
continue;
} else {
var temp__4657__auto___17001__$1 = cljs.core.seq.call(null,seq__16899_16988);
if(temp__4657__auto___17001__$1){
var seq__16899_17002__$1 = temp__4657__auto___17001__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16899_17002__$1)){
var c__7357__auto___17003 = cljs.core.chunk_first.call(null,seq__16899_17002__$1);
var G__17004 = cljs.core.chunk_rest.call(null,seq__16899_17002__$1);
var G__17005 = c__7357__auto___17003;
var G__17006 = cljs.core.count.call(null,c__7357__auto___17003);
var G__17007 = (0);
seq__16899_16988 = G__17004;
chunk__16901_16989 = G__17005;
count__16902_16990 = G__17006;
i__16903_16991 = G__17007;
continue;
} else {
var vec__16929_17008 = cljs.core.first.call(null,seq__16899_17002__$1);
var actual_type_17009 = cljs.core.nth.call(null,vec__16929_17008,(0),null);
var __17010 = cljs.core.nth.call(null,vec__16929_17008,(1),null);
var keys_17011 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16937,actual_type_17009,f_16987], null);
var canonical_f_17012 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16936),keys_17011);
dommy.core.update_event_listeners_BANG_.call(null,elem_16936,dommy.utils.dissoc_in,keys_17011);

if(cljs.core.truth_(elem_16936.removeEventListener)){
elem_16936.removeEventListener(cljs.core.name.call(null,actual_type_17009),canonical_f_17012);
} else {
elem_16936.detachEvent(cljs.core.name.call(null,actual_type_17009),canonical_f_17012);
}

var G__17013 = cljs.core.next.call(null,seq__16899_17002__$1);
var G__17014 = null;
var G__17015 = (0);
var G__17016 = (0);
seq__16899_16988 = G__17013;
chunk__16901_16989 = G__17014;
count__16902_16990 = G__17015;
i__16903_16991 = G__17016;
continue;
}
} else {
}
}
break;
}

var G__17017 = cljs.core.next.call(null,seq__16898_16979__$1);
var G__17018 = null;
var G__17019 = (0);
var G__17020 = (0);
seq__16898_16938 = G__17017;
chunk__16905_16939 = G__17018;
count__16906_16940 = G__17019;
i__16907_16941 = G__17020;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq16893){
var G__16894 = cljs.core.first.call(null,seq16893);
var seq16893__$1 = cljs.core.next.call(null,seq16893);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16894,seq16893__$1);
});

dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__7658__auto__ = [];
var len__7651__auto___17036 = arguments.length;
var i__7652__auto___17037 = (0);
while(true){
if((i__7652__auto___17037 < len__7651__auto___17036)){
args__7658__auto__.push((arguments[i__7652__auto___17037]));

var G__17038 = (i__7652__auto___17037 + (1));
i__7652__auto___17037 = G__17038;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__17023_17039 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_17040 = cljs.core.nth.call(null,vec__17023_17039,(0),null);
var selector_17041 = cljs.core.nth.call(null,vec__17023_17039,(1),null);
var seq__17026_17042 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__17027_17043 = null;
var count__17028_17044 = (0);
var i__17029_17045 = (0);
while(true){
if((i__17029_17045 < count__17028_17044)){
var vec__17030_17046 = cljs.core._nth.call(null,chunk__17027_17043,i__17029_17045);
var type_17047 = cljs.core.nth.call(null,vec__17030_17046,(0),null);
var f_17048 = cljs.core.nth.call(null,vec__17030_17046,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_17047,((function (seq__17026_17042,chunk__17027_17043,count__17028_17044,i__17029_17045,vec__17030_17046,type_17047,f_17048,vec__17023_17039,elem_17040,selector_17041){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_17047,dommy$core$this_fn);

return f_17048.call(null,e);
});})(seq__17026_17042,chunk__17027_17043,count__17028_17044,i__17029_17045,vec__17030_17046,type_17047,f_17048,vec__17023_17039,elem_17040,selector_17041))
);

var G__17049 = seq__17026_17042;
var G__17050 = chunk__17027_17043;
var G__17051 = count__17028_17044;
var G__17052 = (i__17029_17045 + (1));
seq__17026_17042 = G__17049;
chunk__17027_17043 = G__17050;
count__17028_17044 = G__17051;
i__17029_17045 = G__17052;
continue;
} else {
var temp__4657__auto___17053 = cljs.core.seq.call(null,seq__17026_17042);
if(temp__4657__auto___17053){
var seq__17026_17054__$1 = temp__4657__auto___17053;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17026_17054__$1)){
var c__7357__auto___17055 = cljs.core.chunk_first.call(null,seq__17026_17054__$1);
var G__17056 = cljs.core.chunk_rest.call(null,seq__17026_17054__$1);
var G__17057 = c__7357__auto___17055;
var G__17058 = cljs.core.count.call(null,c__7357__auto___17055);
var G__17059 = (0);
seq__17026_17042 = G__17056;
chunk__17027_17043 = G__17057;
count__17028_17044 = G__17058;
i__17029_17045 = G__17059;
continue;
} else {
var vec__17033_17060 = cljs.core.first.call(null,seq__17026_17054__$1);
var type_17061 = cljs.core.nth.call(null,vec__17033_17060,(0),null);
var f_17062 = cljs.core.nth.call(null,vec__17033_17060,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_17061,((function (seq__17026_17042,chunk__17027_17043,count__17028_17044,i__17029_17045,vec__17033_17060,type_17061,f_17062,seq__17026_17054__$1,temp__4657__auto___17053,vec__17023_17039,elem_17040,selector_17041){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_17061,dommy$core$this_fn);

return f_17062.call(null,e);
});})(seq__17026_17042,chunk__17027_17043,count__17028_17044,i__17029_17045,vec__17033_17060,type_17061,f_17062,seq__17026_17054__$1,temp__4657__auto___17053,vec__17023_17039,elem_17040,selector_17041))
);

var G__17063 = cljs.core.next.call(null,seq__17026_17054__$1);
var G__17064 = null;
var G__17065 = (0);
var G__17066 = (0);
seq__17026_17042 = G__17063;
chunk__17027_17043 = G__17064;
count__17028_17044 = G__17065;
i__17029_17045 = G__17066;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq17021){
var G__17022 = cljs.core.first.call(null,seq17021);
var seq17021__$1 = cljs.core.next.call(null,seq17021);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17022,seq17021__$1);
});

/**
 * NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
 * event types or their bubbling behaviours
 * 
 * Creates an event of type `event-type`, optionally having
 * `update-event!` mutate and return an updated event object,
 * and fires it on `node`.
 * Only works when `node` is in the DOM
 */
dommy.core.fire_BANG_ = (function dommy$core$fire_BANG_(var_args){
var args__7658__auto__ = [];
var len__7651__auto___17074 = arguments.length;
var i__7652__auto___17075 = (0);
while(true){
if((i__7652__auto___17075 < len__7651__auto___17074)){
args__7658__auto__.push((arguments[i__7652__auto___17075]));

var G__17076 = (i__7652__auto___17075 + (1));
i__7652__auto___17075 = G__17076;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((2) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((2)),(0),null)):null);
return dommy.core.fire_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7659__auto__);
});

dommy.core.fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (node,event_type,p__17070){
var vec__17071 = p__17070;
var update_event_BANG_ = cljs.core.nth.call(null,vec__17071,(0),null);
if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement)){
} else {
throw (new Error("Assert failed: (descendant? node js/document.documentElement)"));
}

var update_event_BANG___$1 = (function (){var or__6543__auto__ = update_event_BANG_;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
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
});

dommy.core.fire_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.fire_BANG_.cljs$lang$applyTo = (function (seq17067){
var G__17068 = cljs.core.first.call(null,seq17067);
var seq17067__$1 = cljs.core.next.call(null,seq17067);
var G__17069 = cljs.core.first.call(null,seq17067__$1);
var seq17067__$2 = cljs.core.next.call(null,seq17067__$1);
return dommy.core.fire_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17068,G__17069,seq17067__$2);
});


//# sourceMappingURL=core.js.map