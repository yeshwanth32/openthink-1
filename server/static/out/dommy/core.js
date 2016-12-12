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
var args43135 = [];
var len__7651__auto___43146 = arguments.length;
var i__7652__auto___43147 = (0);
while(true){
if((i__7652__auto___43147 < len__7651__auto___43146)){
args43135.push((arguments[i__7652__auto___43147]));

var G__43148 = (i__7652__auto___43147 + (1));
i__7652__auto___43147 = G__43148;
continue;
} else {
}
break;
}

var G__43140 = args43135.length;
switch (G__43140) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args43135.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7670__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__43141 = dommy.template.__GT_node_like.call(null,parent);
G__43141.appendChild(dommy.template.__GT_node_like.call(null,child));

return G__43141;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var parent__$1 = dommy.template.__GT_node_like.call(null,parent);
var seq__43142_43150 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__43143_43151 = null;
var count__43144_43152 = (0);
var i__43145_43153 = (0);
while(true){
if((i__43145_43153 < count__43144_43152)){
var c_43154 = cljs.core._nth.call(null,chunk__43143_43151,i__43145_43153);
dommy.core.append_BANG_.call(null,parent__$1,c_43154);

var G__43155 = seq__43142_43150;
var G__43156 = chunk__43143_43151;
var G__43157 = count__43144_43152;
var G__43158 = (i__43145_43153 + (1));
seq__43142_43150 = G__43155;
chunk__43143_43151 = G__43156;
count__43144_43152 = G__43157;
i__43145_43153 = G__43158;
continue;
} else {
var temp__4657__auto___43159 = cljs.core.seq.call(null,seq__43142_43150);
if(temp__4657__auto___43159){
var seq__43142_43160__$1 = temp__4657__auto___43159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43142_43160__$1)){
var c__7357__auto___43161 = cljs.core.chunk_first.call(null,seq__43142_43160__$1);
var G__43162 = cljs.core.chunk_rest.call(null,seq__43142_43160__$1);
var G__43163 = c__7357__auto___43161;
var G__43164 = cljs.core.count.call(null,c__7357__auto___43161);
var G__43165 = (0);
seq__43142_43150 = G__43162;
chunk__43143_43151 = G__43163;
count__43144_43152 = G__43164;
i__43145_43153 = G__43165;
continue;
} else {
var c_43166 = cljs.core.first.call(null,seq__43142_43160__$1);
dommy.core.append_BANG_.call(null,parent__$1,c_43166);

var G__43167 = cljs.core.next.call(null,seq__43142_43160__$1);
var G__43168 = null;
var G__43169 = (0);
var G__43170 = (0);
seq__43142_43150 = G__43167;
chunk__43143_43151 = G__43168;
count__43144_43152 = G__43169;
i__43145_43153 = G__43170;
continue;
}
} else {
}
}
break;
}

return parent__$1;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq43136){
var G__43137 = cljs.core.first.call(null,seq43136);
var seq43136__$1 = cljs.core.next.call(null,seq43136);
var G__43138 = cljs.core.first.call(null,seq43136__$1);
var seq43136__$2 = cljs.core.next.call(null,seq43136__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43137,G__43138,seq43136__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * prepend `child` to `parent`, both node-like
 * return ->node-like projection of `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args43171 = [];
var len__7651__auto___43181 = arguments.length;
var i__7652__auto___43182 = (0);
while(true){
if((i__7652__auto___43182 < len__7651__auto___43181)){
args43171.push((arguments[i__7652__auto___43182]));

var G__43183 = (i__7652__auto___43182 + (1));
i__7652__auto___43182 = G__43183;
continue;
} else {
}
break;
}

var G__43176 = args43171.length;
switch (G__43176) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args43171.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7670__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var parent__$1 = dommy.template.__GT_node_like.call(null,parent);
return parent__$1.insertBefore(dommy.template.__GT_node_like.call(null,child),parent__$1.firstChild);
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var parent__$1 = dommy.template.__GT_node_like.call(null,parent);
var seq__43177_43185 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__43178_43186 = null;
var count__43179_43187 = (0);
var i__43180_43188 = (0);
while(true){
if((i__43180_43188 < count__43179_43187)){
var c_43189 = cljs.core._nth.call(null,chunk__43178_43186,i__43180_43188);
dommy.core.prepend_BANG_.call(null,parent__$1,c_43189);

var G__43190 = seq__43177_43185;
var G__43191 = chunk__43178_43186;
var G__43192 = count__43179_43187;
var G__43193 = (i__43180_43188 + (1));
seq__43177_43185 = G__43190;
chunk__43178_43186 = G__43191;
count__43179_43187 = G__43192;
i__43180_43188 = G__43193;
continue;
} else {
var temp__4657__auto___43194 = cljs.core.seq.call(null,seq__43177_43185);
if(temp__4657__auto___43194){
var seq__43177_43195__$1 = temp__4657__auto___43194;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43177_43195__$1)){
var c__7357__auto___43196 = cljs.core.chunk_first.call(null,seq__43177_43195__$1);
var G__43197 = cljs.core.chunk_rest.call(null,seq__43177_43195__$1);
var G__43198 = c__7357__auto___43196;
var G__43199 = cljs.core.count.call(null,c__7357__auto___43196);
var G__43200 = (0);
seq__43177_43185 = G__43197;
chunk__43178_43186 = G__43198;
count__43179_43187 = G__43199;
i__43180_43188 = G__43200;
continue;
} else {
var c_43201 = cljs.core.first.call(null,seq__43177_43195__$1);
dommy.core.prepend_BANG_.call(null,parent__$1,c_43201);

var G__43202 = cljs.core.next.call(null,seq__43177_43195__$1);
var G__43203 = null;
var G__43204 = (0);
var G__43205 = (0);
seq__43177_43185 = G__43202;
chunk__43178_43186 = G__43203;
count__43179_43187 = G__43204;
i__43180_43188 = G__43205;
continue;
}
} else {
}
}
break;
}

return parent__$1;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq43172){
var G__43173 = cljs.core.first.call(null,seq43172);
var seq43172__$1 = cljs.core.next.call(null,seq43172);
var G__43174 = cljs.core.first.call(null,seq43172__$1);
var seq43172__$2 = cljs.core.next.call(null,seq43172__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43173,G__43174,seq43172__$2);
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
var temp__4655__auto___43206 = other__$1.nextSibling;
if(cljs.core.truth_(temp__4655__auto___43206)){
var next_43207 = temp__4655__auto___43206;
parent.insertBefore(actual_node,next_43207);
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
var G__43209 = dommy.template.__GT_node_like.call(null,parent);
G__43209.innerHTML = "";

dommy.core.append_BANG_.call(null,G__43209,node_like);

return G__43209;
});
/**
 * remove node-like `elem` from parent, return node-like projection of elem
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(elem){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var G__43211 = elem__$1.parentNode;
G__43211.removeChild(elem__$1);

return G__43211;
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
return (function (p__43219){
var vec__43220 = p__43219;
var k = cljs.core.nth.call(null,vec__43220,(0),null);
var v = cljs.core.nth.call(null,vec__43220,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",-1610148039).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){
if(typeof dommy.core.t_dommy$core43223 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
dommy.core.t_dommy$core43223 = (function (template,key_selectors_map,container,p__43219,vec__43220,k,v,meta43224){
this.template = template;
this.key_selectors_map = key_selectors_map;
this.container = container;
this.p__43219 = p__43219;
this.vec__43220 = vec__43220;
this.k = k;
this.v = v;
this.meta43224 = meta43224;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dommy.core.t_dommy$core43223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__43220,k,v,container){
return (function (_43225,meta43224__$1){
var self__ = this;
var _43225__$1 = this;
return (new dommy.core.t_dommy$core43223(self__.template,self__.key_selectors_map,self__.container,self__.p__43219,self__.vec__43220,self__.k,self__.v,meta43224__$1));
});})(vec__43220,k,v,container))
;

dommy.core.t_dommy$core43223.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__43220,k,v,container){
return (function (_43225){
var self__ = this;
var _43225__$1 = this;
return self__.meta43224;
});})(vec__43220,k,v,container))
;

dommy.core.t_dommy$core43223.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__43220,k,v,container){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});})(vec__43220,k,v,container))
;

dommy.core.t_dommy$core43223.getBasis = ((function (vec__43220,k,v,container){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",1212911103,null),new cljs.core.Symbol(null,"container","container",-96406180,null),new cljs.core.Symbol(null,"p__43219","p__43219",-453421120,null),new cljs.core.Symbol(null,"vec__43220","vec__43220",1928193741,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta43224","meta43224",-273450233,null)], null);
});})(vec__43220,k,v,container))
;

dommy.core.t_dommy$core43223.cljs$lang$type = true;

dommy.core.t_dommy$core43223.cljs$lang$ctorStr = "dommy.core/t_dommy$core43223";

dommy.core.t_dommy$core43223.cljs$lang$ctorPrWriter = ((function (vec__43220,k,v,container){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"dommy.core/t_dommy$core43223");
});})(vec__43220,k,v,container))
;

dommy.core.__GT_t_dommy$core43223 = ((function (vec__43220,k,v,container){
return (function dommy$core$selector_map_$___GT_t_dommy$core43223(template__$1,key_selectors_map__$1,container__$1,p__43219__$1,vec__43220__$1,k__$1,v__$1,meta43224){
return (new dommy.core.t_dommy$core43223(template__$1,key_selectors_map__$1,container__$1,p__43219__$1,vec__43220__$1,k__$1,v__$1,meta43224));
});})(vec__43220,k,v,container))
;

}

return (new dommy.core.t_dommy$core43223(template,key_selectors_map,container,p__43219,vec__43220,k,v,cljs.core.PersistentArrayMap.EMPTY));
})()
:dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
});})(container))
,key_selectors_map)));
});
/**
 * a lazy seq of the ancestors of `node`
 */
dommy.core.ancestor_nodes = (function dommy$core$ancestor_nodes(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__43226_SHARP_){
return p1__43226_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
 * returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var args43227 = [];
var len__7651__auto___43230 = arguments.length;
var i__7652__auto___43231 = (0);
while(true){
if((i__7652__auto___43231 < len__7651__auto___43230)){
args43227.push((arguments[i__7652__auto___43231]));

var G__43232 = (i__7652__auto___43231 + (1));
i__7652__auto___43231 = G__43232;
continue;
} else {
}
break;
}

var G__43229 = args43227.length;
switch (G__43229) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43227.length)].join('')));

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
var args43235 = [];
var len__7651__auto___43238 = arguments.length;
var i__7652__auto___43239 = (0);
while(true){
if((i__7652__auto___43239 < len__7651__auto___43238)){
args43235.push((arguments[i__7652__auto___43239]));

var G__43240 = (i__7652__auto___43239 + (1));
i__7652__auto___43239 = G__43240;
continue;
} else {
}
break;
}

var G__43237 = args43235.length;
switch (G__43237) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43235.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
var base__$1 = dommy.template.__GT_node_like.call(null,base);
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,((function (base__$1,elem__$1){
return (function (p1__43234_SHARP_){
return !((p1__43234_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__43242){
var vec__43243 = p__43242;
var special_mouse_event = cljs.core.nth.call(null,vec__43243,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__43243,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__43243,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__43243,special_mouse_event,real_mouse_event){
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
;})(vec__43243,special_mouse_event,real_mouse_event))
});})(vec__43243,special_mouse_event,real_mouse_event))
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
var len__7651__auto___43249 = arguments.length;
var i__7652__auto___43250 = (0);
while(true){
if((i__7652__auto___43250 < len__7651__auto___43249)){
args__7658__auto__.push((arguments[i__7652__auto___43250]));

var G__43251 = (i__7652__auto___43250 + (1));
i__7652__auto___43250 = G__43251;
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

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq43246){
var G__43247 = cljs.core.first.call(null,seq43246);
var seq43246__$1 = cljs.core.next.call(null,seq43246);
var G__43248 = cljs.core.first.call(null,seq43246__$1);
var seq43246__$2 = cljs.core.next.call(null,seq43246__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43247,G__43248,seq43246__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,(function (p1__43252_SHARP_){
return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__43252_SHARP_));
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
var len__7651__auto___43292 = arguments.length;
var i__7652__auto___43293 = (0);
while(true){
if((i__7652__auto___43293 < len__7651__auto___43292)){
args__7658__auto__.push((arguments[i__7652__auto___43293]));

var G__43294 = (i__7652__auto___43293 + (1));
i__7652__auto___43293 = G__43294;
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

var vec__43255_43295 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_43296 = cljs.core.nth.call(null,vec__43255_43295,(0),null);
var selector_43297 = cljs.core.nth.call(null,vec__43255_43295,(1),null);
var seq__43258_43298 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__43265_43299 = null;
var count__43266_43300 = (0);
var i__43267_43301 = (0);
while(true){
if((i__43267_43301 < count__43266_43300)){
var vec__43274_43302 = cljs.core._nth.call(null,chunk__43265_43299,i__43267_43301);
var orig_type_43303 = cljs.core.nth.call(null,vec__43274_43302,(0),null);
var f_43304 = cljs.core.nth.call(null,vec__43274_43302,(1),null);
var seq__43268_43305 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_43303,cljs.core.PersistentArrayMap.fromArray([orig_type_43303,cljs.core.identity], true, false)));
var chunk__43270_43306 = null;
var count__43271_43307 = (0);
var i__43272_43308 = (0);
while(true){
if((i__43272_43308 < count__43271_43307)){
var vec__43277_43309 = cljs.core._nth.call(null,chunk__43270_43306,i__43272_43308);
var actual_type_43310 = cljs.core.nth.call(null,vec__43277_43309,(0),null);
var factory_43311 = cljs.core.nth.call(null,vec__43277_43309,(1),null);
var canonical_f_43312 = (cljs.core.truth_(selector_43297)?cljs.core.partial.call(null,dommy.core.live_listener,elem_43296,selector_43297):cljs.core.identity).call(null,factory_43311.call(null,f_43304));
dommy.core.update_event_listeners_BANG_.call(null,elem_43296,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43297,actual_type_43310,f_43304], null),canonical_f_43312);

if(cljs.core.truth_(elem_43296.addEventListener)){
elem_43296.addEventListener(cljs.core.name.call(null,actual_type_43310),canonical_f_43312);
} else {
elem_43296.attachEvent(cljs.core.name.call(null,actual_type_43310),canonical_f_43312);
}

var G__43313 = seq__43268_43305;
var G__43314 = chunk__43270_43306;
var G__43315 = count__43271_43307;
var G__43316 = (i__43272_43308 + (1));
seq__43268_43305 = G__43313;
chunk__43270_43306 = G__43314;
count__43271_43307 = G__43315;
i__43272_43308 = G__43316;
continue;
} else {
var temp__4657__auto___43317 = cljs.core.seq.call(null,seq__43268_43305);
if(temp__4657__auto___43317){
var seq__43268_43318__$1 = temp__4657__auto___43317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43268_43318__$1)){
var c__7357__auto___43319 = cljs.core.chunk_first.call(null,seq__43268_43318__$1);
var G__43320 = cljs.core.chunk_rest.call(null,seq__43268_43318__$1);
var G__43321 = c__7357__auto___43319;
var G__43322 = cljs.core.count.call(null,c__7357__auto___43319);
var G__43323 = (0);
seq__43268_43305 = G__43320;
chunk__43270_43306 = G__43321;
count__43271_43307 = G__43322;
i__43272_43308 = G__43323;
continue;
} else {
var vec__43280_43324 = cljs.core.first.call(null,seq__43268_43318__$1);
var actual_type_43325 = cljs.core.nth.call(null,vec__43280_43324,(0),null);
var factory_43326 = cljs.core.nth.call(null,vec__43280_43324,(1),null);
var canonical_f_43327 = (cljs.core.truth_(selector_43297)?cljs.core.partial.call(null,dommy.core.live_listener,elem_43296,selector_43297):cljs.core.identity).call(null,factory_43326.call(null,f_43304));
dommy.core.update_event_listeners_BANG_.call(null,elem_43296,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43297,actual_type_43325,f_43304], null),canonical_f_43327);

if(cljs.core.truth_(elem_43296.addEventListener)){
elem_43296.addEventListener(cljs.core.name.call(null,actual_type_43325),canonical_f_43327);
} else {
elem_43296.attachEvent(cljs.core.name.call(null,actual_type_43325),canonical_f_43327);
}

var G__43328 = cljs.core.next.call(null,seq__43268_43318__$1);
var G__43329 = null;
var G__43330 = (0);
var G__43331 = (0);
seq__43268_43305 = G__43328;
chunk__43270_43306 = G__43329;
count__43271_43307 = G__43330;
i__43272_43308 = G__43331;
continue;
}
} else {
}
}
break;
}

var G__43332 = seq__43258_43298;
var G__43333 = chunk__43265_43299;
var G__43334 = count__43266_43300;
var G__43335 = (i__43267_43301 + (1));
seq__43258_43298 = G__43332;
chunk__43265_43299 = G__43333;
count__43266_43300 = G__43334;
i__43267_43301 = G__43335;
continue;
} else {
var temp__4657__auto___43336 = cljs.core.seq.call(null,seq__43258_43298);
if(temp__4657__auto___43336){
var seq__43258_43337__$1 = temp__4657__auto___43336;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43258_43337__$1)){
var c__7357__auto___43338 = cljs.core.chunk_first.call(null,seq__43258_43337__$1);
var G__43339 = cljs.core.chunk_rest.call(null,seq__43258_43337__$1);
var G__43340 = c__7357__auto___43338;
var G__43341 = cljs.core.count.call(null,c__7357__auto___43338);
var G__43342 = (0);
seq__43258_43298 = G__43339;
chunk__43265_43299 = G__43340;
count__43266_43300 = G__43341;
i__43267_43301 = G__43342;
continue;
} else {
var vec__43283_43343 = cljs.core.first.call(null,seq__43258_43337__$1);
var orig_type_43344 = cljs.core.nth.call(null,vec__43283_43343,(0),null);
var f_43345 = cljs.core.nth.call(null,vec__43283_43343,(1),null);
var seq__43259_43346 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_43344,cljs.core.PersistentArrayMap.fromArray([orig_type_43344,cljs.core.identity], true, false)));
var chunk__43261_43347 = null;
var count__43262_43348 = (0);
var i__43263_43349 = (0);
while(true){
if((i__43263_43349 < count__43262_43348)){
var vec__43286_43350 = cljs.core._nth.call(null,chunk__43261_43347,i__43263_43349);
var actual_type_43351 = cljs.core.nth.call(null,vec__43286_43350,(0),null);
var factory_43352 = cljs.core.nth.call(null,vec__43286_43350,(1),null);
var canonical_f_43353 = (cljs.core.truth_(selector_43297)?cljs.core.partial.call(null,dommy.core.live_listener,elem_43296,selector_43297):cljs.core.identity).call(null,factory_43352.call(null,f_43345));
dommy.core.update_event_listeners_BANG_.call(null,elem_43296,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43297,actual_type_43351,f_43345], null),canonical_f_43353);

if(cljs.core.truth_(elem_43296.addEventListener)){
elem_43296.addEventListener(cljs.core.name.call(null,actual_type_43351),canonical_f_43353);
} else {
elem_43296.attachEvent(cljs.core.name.call(null,actual_type_43351),canonical_f_43353);
}

var G__43354 = seq__43259_43346;
var G__43355 = chunk__43261_43347;
var G__43356 = count__43262_43348;
var G__43357 = (i__43263_43349 + (1));
seq__43259_43346 = G__43354;
chunk__43261_43347 = G__43355;
count__43262_43348 = G__43356;
i__43263_43349 = G__43357;
continue;
} else {
var temp__4657__auto___43358__$1 = cljs.core.seq.call(null,seq__43259_43346);
if(temp__4657__auto___43358__$1){
var seq__43259_43359__$1 = temp__4657__auto___43358__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43259_43359__$1)){
var c__7357__auto___43360 = cljs.core.chunk_first.call(null,seq__43259_43359__$1);
var G__43361 = cljs.core.chunk_rest.call(null,seq__43259_43359__$1);
var G__43362 = c__7357__auto___43360;
var G__43363 = cljs.core.count.call(null,c__7357__auto___43360);
var G__43364 = (0);
seq__43259_43346 = G__43361;
chunk__43261_43347 = G__43362;
count__43262_43348 = G__43363;
i__43263_43349 = G__43364;
continue;
} else {
var vec__43289_43365 = cljs.core.first.call(null,seq__43259_43359__$1);
var actual_type_43366 = cljs.core.nth.call(null,vec__43289_43365,(0),null);
var factory_43367 = cljs.core.nth.call(null,vec__43289_43365,(1),null);
var canonical_f_43368 = (cljs.core.truth_(selector_43297)?cljs.core.partial.call(null,dommy.core.live_listener,elem_43296,selector_43297):cljs.core.identity).call(null,factory_43367.call(null,f_43345));
dommy.core.update_event_listeners_BANG_.call(null,elem_43296,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43297,actual_type_43366,f_43345], null),canonical_f_43368);

if(cljs.core.truth_(elem_43296.addEventListener)){
elem_43296.addEventListener(cljs.core.name.call(null,actual_type_43366),canonical_f_43368);
} else {
elem_43296.attachEvent(cljs.core.name.call(null,actual_type_43366),canonical_f_43368);
}

var G__43369 = cljs.core.next.call(null,seq__43259_43359__$1);
var G__43370 = null;
var G__43371 = (0);
var G__43372 = (0);
seq__43259_43346 = G__43369;
chunk__43261_43347 = G__43370;
count__43262_43348 = G__43371;
i__43263_43349 = G__43372;
continue;
}
} else {
}
}
break;
}

var G__43373 = cljs.core.next.call(null,seq__43258_43337__$1);
var G__43374 = null;
var G__43375 = (0);
var G__43376 = (0);
seq__43258_43298 = G__43373;
chunk__43265_43299 = G__43374;
count__43266_43300 = G__43375;
i__43267_43301 = G__43376;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq43253){
var G__43254 = cljs.core.first.call(null,seq43253);
var seq43253__$1 = cljs.core.next.call(null,seq43253);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43254,seq43253__$1);
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
var len__7651__auto___43416 = arguments.length;
var i__7652__auto___43417 = (0);
while(true){
if((i__7652__auto___43417 < len__7651__auto___43416)){
args__7658__auto__.push((arguments[i__7652__auto___43417]));

var G__43418 = (i__7652__auto___43417 + (1));
i__7652__auto___43417 = G__43418;
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

var vec__43379_43419 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_43420 = cljs.core.nth.call(null,vec__43379_43419,(0),null);
var selector_43421 = cljs.core.nth.call(null,vec__43379_43419,(1),null);
var seq__43382_43422 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__43389_43423 = null;
var count__43390_43424 = (0);
var i__43391_43425 = (0);
while(true){
if((i__43391_43425 < count__43390_43424)){
var vec__43398_43426 = cljs.core._nth.call(null,chunk__43389_43423,i__43391_43425);
var orig_type_43427 = cljs.core.nth.call(null,vec__43398_43426,(0),null);
var f_43428 = cljs.core.nth.call(null,vec__43398_43426,(1),null);
var seq__43392_43429 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_43427,cljs.core.PersistentArrayMap.fromArray([orig_type_43427,cljs.core.identity], true, false)));
var chunk__43394_43430 = null;
var count__43395_43431 = (0);
var i__43396_43432 = (0);
while(true){
if((i__43396_43432 < count__43395_43431)){
var vec__43401_43433 = cljs.core._nth.call(null,chunk__43394_43430,i__43396_43432);
var actual_type_43434 = cljs.core.nth.call(null,vec__43401_43433,(0),null);
var __43435 = cljs.core.nth.call(null,vec__43401_43433,(1),null);
var keys_43436 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43421,actual_type_43434,f_43428], null);
var canonical_f_43437 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_43420),keys_43436);
dommy.core.update_event_listeners_BANG_.call(null,elem_43420,dommy.utils.dissoc_in,keys_43436);

if(cljs.core.truth_(elem_43420.removeEventListener)){
elem_43420.removeEventListener(cljs.core.name.call(null,actual_type_43434),canonical_f_43437);
} else {
elem_43420.detachEvent(cljs.core.name.call(null,actual_type_43434),canonical_f_43437);
}

var G__43438 = seq__43392_43429;
var G__43439 = chunk__43394_43430;
var G__43440 = count__43395_43431;
var G__43441 = (i__43396_43432 + (1));
seq__43392_43429 = G__43438;
chunk__43394_43430 = G__43439;
count__43395_43431 = G__43440;
i__43396_43432 = G__43441;
continue;
} else {
var temp__4657__auto___43442 = cljs.core.seq.call(null,seq__43392_43429);
if(temp__4657__auto___43442){
var seq__43392_43443__$1 = temp__4657__auto___43442;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43392_43443__$1)){
var c__7357__auto___43444 = cljs.core.chunk_first.call(null,seq__43392_43443__$1);
var G__43445 = cljs.core.chunk_rest.call(null,seq__43392_43443__$1);
var G__43446 = c__7357__auto___43444;
var G__43447 = cljs.core.count.call(null,c__7357__auto___43444);
var G__43448 = (0);
seq__43392_43429 = G__43445;
chunk__43394_43430 = G__43446;
count__43395_43431 = G__43447;
i__43396_43432 = G__43448;
continue;
} else {
var vec__43404_43449 = cljs.core.first.call(null,seq__43392_43443__$1);
var actual_type_43450 = cljs.core.nth.call(null,vec__43404_43449,(0),null);
var __43451 = cljs.core.nth.call(null,vec__43404_43449,(1),null);
var keys_43452 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43421,actual_type_43450,f_43428], null);
var canonical_f_43453 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_43420),keys_43452);
dommy.core.update_event_listeners_BANG_.call(null,elem_43420,dommy.utils.dissoc_in,keys_43452);

if(cljs.core.truth_(elem_43420.removeEventListener)){
elem_43420.removeEventListener(cljs.core.name.call(null,actual_type_43450),canonical_f_43453);
} else {
elem_43420.detachEvent(cljs.core.name.call(null,actual_type_43450),canonical_f_43453);
}

var G__43454 = cljs.core.next.call(null,seq__43392_43443__$1);
var G__43455 = null;
var G__43456 = (0);
var G__43457 = (0);
seq__43392_43429 = G__43454;
chunk__43394_43430 = G__43455;
count__43395_43431 = G__43456;
i__43396_43432 = G__43457;
continue;
}
} else {
}
}
break;
}

var G__43458 = seq__43382_43422;
var G__43459 = chunk__43389_43423;
var G__43460 = count__43390_43424;
var G__43461 = (i__43391_43425 + (1));
seq__43382_43422 = G__43458;
chunk__43389_43423 = G__43459;
count__43390_43424 = G__43460;
i__43391_43425 = G__43461;
continue;
} else {
var temp__4657__auto___43462 = cljs.core.seq.call(null,seq__43382_43422);
if(temp__4657__auto___43462){
var seq__43382_43463__$1 = temp__4657__auto___43462;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43382_43463__$1)){
var c__7357__auto___43464 = cljs.core.chunk_first.call(null,seq__43382_43463__$1);
var G__43465 = cljs.core.chunk_rest.call(null,seq__43382_43463__$1);
var G__43466 = c__7357__auto___43464;
var G__43467 = cljs.core.count.call(null,c__7357__auto___43464);
var G__43468 = (0);
seq__43382_43422 = G__43465;
chunk__43389_43423 = G__43466;
count__43390_43424 = G__43467;
i__43391_43425 = G__43468;
continue;
} else {
var vec__43407_43469 = cljs.core.first.call(null,seq__43382_43463__$1);
var orig_type_43470 = cljs.core.nth.call(null,vec__43407_43469,(0),null);
var f_43471 = cljs.core.nth.call(null,vec__43407_43469,(1),null);
var seq__43383_43472 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_43470,cljs.core.PersistentArrayMap.fromArray([orig_type_43470,cljs.core.identity], true, false)));
var chunk__43385_43473 = null;
var count__43386_43474 = (0);
var i__43387_43475 = (0);
while(true){
if((i__43387_43475 < count__43386_43474)){
var vec__43410_43476 = cljs.core._nth.call(null,chunk__43385_43473,i__43387_43475);
var actual_type_43477 = cljs.core.nth.call(null,vec__43410_43476,(0),null);
var __43478 = cljs.core.nth.call(null,vec__43410_43476,(1),null);
var keys_43479 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43421,actual_type_43477,f_43471], null);
var canonical_f_43480 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_43420),keys_43479);
dommy.core.update_event_listeners_BANG_.call(null,elem_43420,dommy.utils.dissoc_in,keys_43479);

if(cljs.core.truth_(elem_43420.removeEventListener)){
elem_43420.removeEventListener(cljs.core.name.call(null,actual_type_43477),canonical_f_43480);
} else {
elem_43420.detachEvent(cljs.core.name.call(null,actual_type_43477),canonical_f_43480);
}

var G__43481 = seq__43383_43472;
var G__43482 = chunk__43385_43473;
var G__43483 = count__43386_43474;
var G__43484 = (i__43387_43475 + (1));
seq__43383_43472 = G__43481;
chunk__43385_43473 = G__43482;
count__43386_43474 = G__43483;
i__43387_43475 = G__43484;
continue;
} else {
var temp__4657__auto___43485__$1 = cljs.core.seq.call(null,seq__43383_43472);
if(temp__4657__auto___43485__$1){
var seq__43383_43486__$1 = temp__4657__auto___43485__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43383_43486__$1)){
var c__7357__auto___43487 = cljs.core.chunk_first.call(null,seq__43383_43486__$1);
var G__43488 = cljs.core.chunk_rest.call(null,seq__43383_43486__$1);
var G__43489 = c__7357__auto___43487;
var G__43490 = cljs.core.count.call(null,c__7357__auto___43487);
var G__43491 = (0);
seq__43383_43472 = G__43488;
chunk__43385_43473 = G__43489;
count__43386_43474 = G__43490;
i__43387_43475 = G__43491;
continue;
} else {
var vec__43413_43492 = cljs.core.first.call(null,seq__43383_43486__$1);
var actual_type_43493 = cljs.core.nth.call(null,vec__43413_43492,(0),null);
var __43494 = cljs.core.nth.call(null,vec__43413_43492,(1),null);
var keys_43495 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43421,actual_type_43493,f_43471], null);
var canonical_f_43496 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_43420),keys_43495);
dommy.core.update_event_listeners_BANG_.call(null,elem_43420,dommy.utils.dissoc_in,keys_43495);

if(cljs.core.truth_(elem_43420.removeEventListener)){
elem_43420.removeEventListener(cljs.core.name.call(null,actual_type_43493),canonical_f_43496);
} else {
elem_43420.detachEvent(cljs.core.name.call(null,actual_type_43493),canonical_f_43496);
}

var G__43497 = cljs.core.next.call(null,seq__43383_43486__$1);
var G__43498 = null;
var G__43499 = (0);
var G__43500 = (0);
seq__43383_43472 = G__43497;
chunk__43385_43473 = G__43498;
count__43386_43474 = G__43499;
i__43387_43475 = G__43500;
continue;
}
} else {
}
}
break;
}

var G__43501 = cljs.core.next.call(null,seq__43382_43463__$1);
var G__43502 = null;
var G__43503 = (0);
var G__43504 = (0);
seq__43382_43422 = G__43501;
chunk__43389_43423 = G__43502;
count__43390_43424 = G__43503;
i__43391_43425 = G__43504;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq43377){
var G__43378 = cljs.core.first.call(null,seq43377);
var seq43377__$1 = cljs.core.next.call(null,seq43377);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43378,seq43377__$1);
});

dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__7658__auto__ = [];
var len__7651__auto___43520 = arguments.length;
var i__7652__auto___43521 = (0);
while(true){
if((i__7652__auto___43521 < len__7651__auto___43520)){
args__7658__auto__.push((arguments[i__7652__auto___43521]));

var G__43522 = (i__7652__auto___43521 + (1));
i__7652__auto___43521 = G__43522;
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

var vec__43507_43523 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_43524 = cljs.core.nth.call(null,vec__43507_43523,(0),null);
var selector_43525 = cljs.core.nth.call(null,vec__43507_43523,(1),null);
var seq__43510_43526 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__43511_43527 = null;
var count__43512_43528 = (0);
var i__43513_43529 = (0);
while(true){
if((i__43513_43529 < count__43512_43528)){
var vec__43514_43530 = cljs.core._nth.call(null,chunk__43511_43527,i__43513_43529);
var type_43531 = cljs.core.nth.call(null,vec__43514_43530,(0),null);
var f_43532 = cljs.core.nth.call(null,vec__43514_43530,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_43531,((function (seq__43510_43526,chunk__43511_43527,count__43512_43528,i__43513_43529,vec__43514_43530,type_43531,f_43532,vec__43507_43523,elem_43524,selector_43525){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_43531,dommy$core$this_fn);

return f_43532.call(null,e);
});})(seq__43510_43526,chunk__43511_43527,count__43512_43528,i__43513_43529,vec__43514_43530,type_43531,f_43532,vec__43507_43523,elem_43524,selector_43525))
);

var G__43533 = seq__43510_43526;
var G__43534 = chunk__43511_43527;
var G__43535 = count__43512_43528;
var G__43536 = (i__43513_43529 + (1));
seq__43510_43526 = G__43533;
chunk__43511_43527 = G__43534;
count__43512_43528 = G__43535;
i__43513_43529 = G__43536;
continue;
} else {
var temp__4657__auto___43537 = cljs.core.seq.call(null,seq__43510_43526);
if(temp__4657__auto___43537){
var seq__43510_43538__$1 = temp__4657__auto___43537;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43510_43538__$1)){
var c__7357__auto___43539 = cljs.core.chunk_first.call(null,seq__43510_43538__$1);
var G__43540 = cljs.core.chunk_rest.call(null,seq__43510_43538__$1);
var G__43541 = c__7357__auto___43539;
var G__43542 = cljs.core.count.call(null,c__7357__auto___43539);
var G__43543 = (0);
seq__43510_43526 = G__43540;
chunk__43511_43527 = G__43541;
count__43512_43528 = G__43542;
i__43513_43529 = G__43543;
continue;
} else {
var vec__43517_43544 = cljs.core.first.call(null,seq__43510_43538__$1);
var type_43545 = cljs.core.nth.call(null,vec__43517_43544,(0),null);
var f_43546 = cljs.core.nth.call(null,vec__43517_43544,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_43545,((function (seq__43510_43526,chunk__43511_43527,count__43512_43528,i__43513_43529,vec__43517_43544,type_43545,f_43546,seq__43510_43538__$1,temp__4657__auto___43537,vec__43507_43523,elem_43524,selector_43525){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_43545,dommy$core$this_fn);

return f_43546.call(null,e);
});})(seq__43510_43526,chunk__43511_43527,count__43512_43528,i__43513_43529,vec__43517_43544,type_43545,f_43546,seq__43510_43538__$1,temp__4657__auto___43537,vec__43507_43523,elem_43524,selector_43525))
);

var G__43547 = cljs.core.next.call(null,seq__43510_43538__$1);
var G__43548 = null;
var G__43549 = (0);
var G__43550 = (0);
seq__43510_43526 = G__43547;
chunk__43511_43527 = G__43548;
count__43512_43528 = G__43549;
i__43513_43529 = G__43550;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq43505){
var G__43506 = cljs.core.first.call(null,seq43505);
var seq43505__$1 = cljs.core.next.call(null,seq43505);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43506,seq43505__$1);
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
var len__7651__auto___43558 = arguments.length;
var i__7652__auto___43559 = (0);
while(true){
if((i__7652__auto___43559 < len__7651__auto___43558)){
args__7658__auto__.push((arguments[i__7652__auto___43559]));

var G__43560 = (i__7652__auto___43559 + (1));
i__7652__auto___43559 = G__43560;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((2) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((2)),(0),null)):null);
return dommy.core.fire_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7659__auto__);
});

dommy.core.fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (node,event_type,p__43554){
var vec__43555 = p__43554;
var update_event_BANG_ = cljs.core.nth.call(null,vec__43555,(0),null);
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

dommy.core.fire_BANG_.cljs$lang$applyTo = (function (seq43551){
var G__43552 = cljs.core.first.call(null,seq43551);
var seq43551__$1 = cljs.core.next.call(null,seq43551);
var G__43553 = cljs.core.first.call(null,seq43551__$1);
var seq43551__$2 = cljs.core.next.call(null,seq43551__$1);
return dommy.core.fire_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43552,G__43553,seq43551__$2);
});


//# sourceMappingURL=core.js.map