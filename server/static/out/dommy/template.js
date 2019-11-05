// Compiled by ClojureScript 1.9.293 {}
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.attrs');
goog.require('dommy.utils');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, ["path",null,"svg",null,"text",null,"line",null,"polygon",null,"textPath",null,"polyline",null,"g",null,"clipPath",null,"rect",null,"circle",null], null), null);

/**
 * @interface
 */
dommy.template.PElement = function(){};

/**
 * return the element representation of this
 */
dommy.template._elem = (function dommy$template$_elem(this$){
if((!((this$ == null))) && (!((this$.dommy$template$PElement$_elem$arity$1 == null)))){
return this$.dommy$template$PElement$_elem$arity$1(this$);
} else {
var x__7206__auto__ = (((this$ == null))?null:this$);
var m__7207__auto__ = (dommy.template._elem[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,this$);
} else {
var m__7207__auto____$1 = (dommy.template._elem["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
}
});

/**
 * index of css character (#,.) in base-element. bottleneck
 */
dommy.template.next_css_index = (function dommy$template$next_css_index(s,start_idx){
var id_idx = s.indexOf("#",start_idx);
var class_idx = s.indexOf(".",start_idx);
var idx = Math.min(id_idx,class_idx);
if((idx < (0))){
return Math.max(id_idx,class_idx);
} else {
return idx;
}
});
/**
 * dom element from css-style keyword like :a.class1 or :span#my-span.class
 */
dommy.template.base_element = (function dommy$template$base_element(node_key){
var node_str = dommy.utils.as_str.call(null,node_key);
var base_idx = dommy.template.next_css_index.call(null,node_str,(0));
var tag = (((base_idx > (0)))?node_str.substring((0),base_idx):(((base_idx === (0)))?"div":node_str
));
var node = (cljs.core.truth_(dommy.template._PLUS_svg_tags_PLUS_.call(null,tag))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));
if((base_idx >= (0))){
var str_16484 = node_str.substring(base_idx);
while(true){
var next_idx_16485 = dommy.template.next_css_index.call(null,str_16484,(1));
var frag_16486 = (((next_idx_16485 >= (0)))?str_16484.substring((0),next_idx_16485):str_16484);
var G__16483_16487 = frag_16486.charAt((0));
switch (G__16483_16487) {
case ".":
dommy.attrs.add_class_BANG_.call(null,node,frag_16486.substring((1)));

break;
case "#":
node.setAttribute("id",frag_16486.substring((1)));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_16486.charAt((0)))].join('')));

}

if((next_idx_16485 >= (0))){
var G__16489 = str_16484.substring(next_idx_16485);
str_16484 = G__16489;
continue;
} else {
}
break;
}
} else {
}

return node;
});
dommy.template.throw_unable_to_make_node = (function dommy$template$throw_unable_to_make_node(node_data){
throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.call(null,node_data))].join('');
});
/**
 * take data and return a document fragment
 */
dommy.template.__GT_document_fragment = (function dommy$template$__GT_document_fragment(var_args){
var args16490 = [];
var len__7651__auto___16498 = arguments.length;
var i__7652__auto___16499 = (0);
while(true){
if((i__7652__auto___16499 < len__7651__auto___16498)){
args16490.push((arguments[i__7652__auto___16499]));

var G__16500 = (i__7652__auto___16499 + (1));
i__7652__auto___16499 = G__16500;
continue;
} else {
}
break;
}

var G__16492 = args16490.length;
switch (G__16492) {
case 1:
return dommy.template.__GT_document_fragment.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.template.__GT_document_fragment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16490.length)].join('')));

}
});

dommy.template.__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = (function (data){
return dommy.template.__GT_document_fragment.call(null,document.createDocumentFragment(),data);
});

dommy.template.__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = (function (result_frag,data){
if(((!((data == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === data.dommy$template$PElement$)))?true:(((!data.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,data):false)):cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,data))){
result_frag.appendChild(dommy.template._elem.call(null,data));

return result_frag;
} else {
if(cljs.core.seq_QMARK_.call(null,data)){
var seq__16494_16502 = cljs.core.seq.call(null,data);
var chunk__16495_16503 = null;
var count__16496_16504 = (0);
var i__16497_16505 = (0);
while(true){
if((i__16497_16505 < count__16496_16504)){
var child_16506 = cljs.core._nth.call(null,chunk__16495_16503,i__16497_16505);
dommy.template.__GT_document_fragment.call(null,result_frag,child_16506);

var G__16507 = seq__16494_16502;
var G__16508 = chunk__16495_16503;
var G__16509 = count__16496_16504;
var G__16510 = (i__16497_16505 + (1));
seq__16494_16502 = G__16507;
chunk__16495_16503 = G__16508;
count__16496_16504 = G__16509;
i__16497_16505 = G__16510;
continue;
} else {
var temp__4657__auto___16511 = cljs.core.seq.call(null,seq__16494_16502);
if(temp__4657__auto___16511){
var seq__16494_16512__$1 = temp__4657__auto___16511;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16494_16512__$1)){
var c__7357__auto___16513 = cljs.core.chunk_first.call(null,seq__16494_16512__$1);
var G__16514 = cljs.core.chunk_rest.call(null,seq__16494_16512__$1);
var G__16515 = c__7357__auto___16513;
var G__16516 = cljs.core.count.call(null,c__7357__auto___16513);
var G__16517 = (0);
seq__16494_16502 = G__16514;
chunk__16495_16503 = G__16515;
count__16496_16504 = G__16516;
i__16497_16505 = G__16517;
continue;
} else {
var child_16518 = cljs.core.first.call(null,seq__16494_16512__$1);
dommy.template.__GT_document_fragment.call(null,result_frag,child_16518);

var G__16519 = cljs.core.next.call(null,seq__16494_16512__$1);
var G__16520 = null;
var G__16521 = (0);
var G__16522 = (0);
seq__16494_16502 = G__16519;
chunk__16495_16503 = G__16520;
count__16496_16504 = G__16521;
i__16497_16505 = G__16522;
continue;
}
} else {
}
}
break;
}

return result_frag;
} else {
if((data == null)){
return result_frag;
} else {
return dommy.template.throw_unable_to_make_node.call(null,data);

}
}
}
});

dommy.template.__GT_document_fragment.cljs$lang$maxFixedArity = 2;

/**
 * take data and return DOM node if it satisfies PElement and tries to
 * make a document fragment otherwise
 */
dommy.template.__GT_node_like = (function dommy$template$__GT_node_like(data){
if(((!((data == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === data.dommy$template$PElement$)))?true:(((!data.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,data):false)):cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,data))){
return dommy.template._elem.call(null,data);
} else {
return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
 * element with either attrs or nested children [:div [:span "Hello"]]
 */
dommy.template.compound_element = (function dommy$template$compound_element(p__16525){
var vec__16551 = p__16525;
var seq__16552 = cljs.core.seq.call(null,vec__16551);
var first__16553 = cljs.core.first.call(null,seq__16552);
var seq__16552__$1 = cljs.core.next.call(null,seq__16552);
var tag_name = first__16553;
var first__16553__$1 = cljs.core.first.call(null,seq__16552__$1);
var seq__16552__$2 = cljs.core.next.call(null,seq__16552__$1);
var maybe_attrs = first__16553__$1;
var children = seq__16552__$2;
var n = dommy.template.base_element.call(null,tag_name);
var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!(((!((maybe_attrs == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === maybe_attrs.dommy$template$PElement$)))?true:(((!maybe_attrs.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,maybe_attrs):false)):cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,maybe_attrs)))))?maybe_attrs:null);
var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));
var seq__16556_16576 = cljs.core.seq.call(null,attrs);
var chunk__16557_16577 = null;
var count__16558_16578 = (0);
var i__16559_16579 = (0);
while(true){
if((i__16559_16579 < count__16558_16578)){
var vec__16560_16580 = cljs.core._nth.call(null,chunk__16557_16577,i__16559_16579);
var k_16581 = cljs.core.nth.call(null,vec__16560_16580,(0),null);
var v_16582 = cljs.core.nth.call(null,vec__16560_16580,(1),null);
var G__16563_16583 = (((k_16581 instanceof cljs.core.Keyword))?k_16581.fqn:null);
switch (G__16563_16583) {
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_16582);

break;
case "classes":
var seq__16564_16585 = cljs.core.seq.call(null,v_16582);
var chunk__16565_16586 = null;
var count__16566_16587 = (0);
var i__16567_16588 = (0);
while(true){
if((i__16567_16588 < count__16566_16587)){
var c_16589 = cljs.core._nth.call(null,chunk__16565_16586,i__16567_16588);
dommy.attrs.add_class_BANG_.call(null,n,c_16589);

var G__16590 = seq__16564_16585;
var G__16591 = chunk__16565_16586;
var G__16592 = count__16566_16587;
var G__16593 = (i__16567_16588 + (1));
seq__16564_16585 = G__16590;
chunk__16565_16586 = G__16591;
count__16566_16587 = G__16592;
i__16567_16588 = G__16593;
continue;
} else {
var temp__4657__auto___16594 = cljs.core.seq.call(null,seq__16564_16585);
if(temp__4657__auto___16594){
var seq__16564_16595__$1 = temp__4657__auto___16594;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16564_16595__$1)){
var c__7357__auto___16596 = cljs.core.chunk_first.call(null,seq__16564_16595__$1);
var G__16597 = cljs.core.chunk_rest.call(null,seq__16564_16595__$1);
var G__16598 = c__7357__auto___16596;
var G__16599 = cljs.core.count.call(null,c__7357__auto___16596);
var G__16600 = (0);
seq__16564_16585 = G__16597;
chunk__16565_16586 = G__16598;
count__16566_16587 = G__16599;
i__16567_16588 = G__16600;
continue;
} else {
var c_16601 = cljs.core.first.call(null,seq__16564_16595__$1);
dommy.attrs.add_class_BANG_.call(null,n,c_16601);

var G__16602 = cljs.core.next.call(null,seq__16564_16595__$1);
var G__16603 = null;
var G__16604 = (0);
var G__16605 = (0);
seq__16564_16585 = G__16602;
chunk__16565_16586 = G__16603;
count__16566_16587 = G__16604;
i__16567_16588 = G__16605;
continue;
}
} else {
}
}
break;
}

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_16581,v_16582);

}

var G__16606 = seq__16556_16576;
var G__16607 = chunk__16557_16577;
var G__16608 = count__16558_16578;
var G__16609 = (i__16559_16579 + (1));
seq__16556_16576 = G__16606;
chunk__16557_16577 = G__16607;
count__16558_16578 = G__16608;
i__16559_16579 = G__16609;
continue;
} else {
var temp__4657__auto___16610 = cljs.core.seq.call(null,seq__16556_16576);
if(temp__4657__auto___16610){
var seq__16556_16611__$1 = temp__4657__auto___16610;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16556_16611__$1)){
var c__7357__auto___16612 = cljs.core.chunk_first.call(null,seq__16556_16611__$1);
var G__16613 = cljs.core.chunk_rest.call(null,seq__16556_16611__$1);
var G__16614 = c__7357__auto___16612;
var G__16615 = cljs.core.count.call(null,c__7357__auto___16612);
var G__16616 = (0);
seq__16556_16576 = G__16613;
chunk__16557_16577 = G__16614;
count__16558_16578 = G__16615;
i__16559_16579 = G__16616;
continue;
} else {
var vec__16568_16617 = cljs.core.first.call(null,seq__16556_16611__$1);
var k_16618 = cljs.core.nth.call(null,vec__16568_16617,(0),null);
var v_16619 = cljs.core.nth.call(null,vec__16568_16617,(1),null);
var G__16571_16620 = (((k_16618 instanceof cljs.core.Keyword))?k_16618.fqn:null);
switch (G__16571_16620) {
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_16619);

break;
case "classes":
var seq__16572_16622 = cljs.core.seq.call(null,v_16619);
var chunk__16573_16623 = null;
var count__16574_16624 = (0);
var i__16575_16625 = (0);
while(true){
if((i__16575_16625 < count__16574_16624)){
var c_16626 = cljs.core._nth.call(null,chunk__16573_16623,i__16575_16625);
dommy.attrs.add_class_BANG_.call(null,n,c_16626);

var G__16627 = seq__16572_16622;
var G__16628 = chunk__16573_16623;
var G__16629 = count__16574_16624;
var G__16630 = (i__16575_16625 + (1));
seq__16572_16622 = G__16627;
chunk__16573_16623 = G__16628;
count__16574_16624 = G__16629;
i__16575_16625 = G__16630;
continue;
} else {
var temp__4657__auto___16631__$1 = cljs.core.seq.call(null,seq__16572_16622);
if(temp__4657__auto___16631__$1){
var seq__16572_16632__$1 = temp__4657__auto___16631__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16572_16632__$1)){
var c__7357__auto___16633 = cljs.core.chunk_first.call(null,seq__16572_16632__$1);
var G__16634 = cljs.core.chunk_rest.call(null,seq__16572_16632__$1);
var G__16635 = c__7357__auto___16633;
var G__16636 = cljs.core.count.call(null,c__7357__auto___16633);
var G__16637 = (0);
seq__16572_16622 = G__16634;
chunk__16573_16623 = G__16635;
count__16574_16624 = G__16636;
i__16575_16625 = G__16637;
continue;
} else {
var c_16638 = cljs.core.first.call(null,seq__16572_16632__$1);
dommy.attrs.add_class_BANG_.call(null,n,c_16638);

var G__16639 = cljs.core.next.call(null,seq__16572_16632__$1);
var G__16640 = null;
var G__16641 = (0);
var G__16642 = (0);
seq__16572_16622 = G__16639;
chunk__16573_16623 = G__16640;
count__16574_16624 = G__16641;
i__16575_16625 = G__16642;
continue;
}
} else {
}
}
break;
}

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_16618,v_16619);

}

var G__16643 = cljs.core.next.call(null,seq__16556_16611__$1);
var G__16644 = null;
var G__16645 = (0);
var G__16646 = (0);
seq__16556_16576 = G__16643;
chunk__16557_16577 = G__16644;
count__16558_16578 = G__16645;
i__16559_16579 = G__16646;
continue;
}
} else {
}
}
break;
}

n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));

return n;
});
Element.prototype.dommy$template$PElement$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

Comment.prototype.dommy$template$PElement$ = cljs.core.PROTOCOL_SENTINEL;

Comment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

Text.prototype.dommy$template$PElement$ = cljs.core.PROTOCOL_SENTINEL;

Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentVector.prototype.dommy$template$PElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return dommy.template.compound_element.call(null,this$__$1);
});

(dommy.template.PElement["number"] = true);

(dommy.template._elem["number"] = (function (this$){
return document.createTextNode([cljs.core.str(this$)].join(''));
}));

(dommy.template.PElement["string"] = true);

(dommy.template._elem["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return dommy.template.base_element.call(null,this$);
} else {
return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
if(typeof HTMLElement !== 'undefined'){
HTMLElement.prototype.dommy$template$PElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(typeof DocumentFragment !== 'undefined'){
DocumentFragment.prototype.dommy$template$PElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(typeof Document !== 'undefined'){
Document.prototype.dommy$template$PElement$ = cljs.core.PROTOCOL_SENTINEL;

Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(typeof HTMLDocument !== 'undefined'){
HTMLDocument.prototype.dommy$template$PElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLDocument.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(typeof SVGElement !== 'undefined'){
SVGElement.prototype.dommy$template$PElement$ = cljs.core.PROTOCOL_SENTINEL;

SVGElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(typeof Window !== 'undefined'){
Window.prototype.dommy$template$PElement$ = cljs.core.PROTOCOL_SENTINEL;

Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
dommy.template.node = (function dommy$template$node(data){
if(((!((data == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === data.dommy$template$PElement$)))?true:(((!data.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,data):false)):cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,data))){
return dommy.template._elem.call(null,data);
} else {
return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function dommy$template$html__GT_nodes(html){
var parent = document.createElement("div");
parent.insertAdjacentHTML("beforeend",html);

return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});

//# sourceMappingURL=template.js.map