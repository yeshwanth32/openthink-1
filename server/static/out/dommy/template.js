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
var str_42968 = node_str.substring(base_idx);
while(true){
var next_idx_42969 = dommy.template.next_css_index.call(null,str_42968,(1));
var frag_42970 = (((next_idx_42969 >= (0)))?str_42968.substring((0),next_idx_42969):str_42968);
var G__42967_42971 = frag_42970.charAt((0));
switch (G__42967_42971) {
case ".":
dommy.attrs.add_class_BANG_.call(null,node,frag_42970.substring((1)));

break;
case "#":
node.setAttribute("id",frag_42970.substring((1)));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_42970.charAt((0)))].join('')));

}

if((next_idx_42969 >= (0))){
var G__42973 = str_42968.substring(next_idx_42969);
str_42968 = G__42973;
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
var args42974 = [];
var len__7651__auto___42982 = arguments.length;
var i__7652__auto___42983 = (0);
while(true){
if((i__7652__auto___42983 < len__7651__auto___42982)){
args42974.push((arguments[i__7652__auto___42983]));

var G__42984 = (i__7652__auto___42983 + (1));
i__7652__auto___42983 = G__42984;
continue;
} else {
}
break;
}

var G__42976 = args42974.length;
switch (G__42976) {
case 1:
return dommy.template.__GT_document_fragment.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.template.__GT_document_fragment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42974.length)].join('')));

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
var seq__42978_42986 = cljs.core.seq.call(null,data);
var chunk__42979_42987 = null;
var count__42980_42988 = (0);
var i__42981_42989 = (0);
while(true){
if((i__42981_42989 < count__42980_42988)){
var child_42990 = cljs.core._nth.call(null,chunk__42979_42987,i__42981_42989);
dommy.template.__GT_document_fragment.call(null,result_frag,child_42990);

var G__42991 = seq__42978_42986;
var G__42992 = chunk__42979_42987;
var G__42993 = count__42980_42988;
var G__42994 = (i__42981_42989 + (1));
seq__42978_42986 = G__42991;
chunk__42979_42987 = G__42992;
count__42980_42988 = G__42993;
i__42981_42989 = G__42994;
continue;
} else {
var temp__4657__auto___42995 = cljs.core.seq.call(null,seq__42978_42986);
if(temp__4657__auto___42995){
var seq__42978_42996__$1 = temp__4657__auto___42995;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42978_42996__$1)){
var c__7357__auto___42997 = cljs.core.chunk_first.call(null,seq__42978_42996__$1);
var G__42998 = cljs.core.chunk_rest.call(null,seq__42978_42996__$1);
var G__42999 = c__7357__auto___42997;
var G__43000 = cljs.core.count.call(null,c__7357__auto___42997);
var G__43001 = (0);
seq__42978_42986 = G__42998;
chunk__42979_42987 = G__42999;
count__42980_42988 = G__43000;
i__42981_42989 = G__43001;
continue;
} else {
var child_43002 = cljs.core.first.call(null,seq__42978_42996__$1);
dommy.template.__GT_document_fragment.call(null,result_frag,child_43002);

var G__43003 = cljs.core.next.call(null,seq__42978_42996__$1);
var G__43004 = null;
var G__43005 = (0);
var G__43006 = (0);
seq__42978_42986 = G__43003;
chunk__42979_42987 = G__43004;
count__42980_42988 = G__43005;
i__42981_42989 = G__43006;
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
dommy.template.compound_element = (function dommy$template$compound_element(p__43009){
var vec__43035 = p__43009;
var seq__43036 = cljs.core.seq.call(null,vec__43035);
var first__43037 = cljs.core.first.call(null,seq__43036);
var seq__43036__$1 = cljs.core.next.call(null,seq__43036);
var tag_name = first__43037;
var first__43037__$1 = cljs.core.first.call(null,seq__43036__$1);
var seq__43036__$2 = cljs.core.next.call(null,seq__43036__$1);
var maybe_attrs = first__43037__$1;
var children = seq__43036__$2;
var n = dommy.template.base_element.call(null,tag_name);
var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!(((!((maybe_attrs == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === maybe_attrs.dommy$template$PElement$)))?true:(((!maybe_attrs.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,maybe_attrs):false)):cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,maybe_attrs)))))?maybe_attrs:null);
var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));
var seq__43040_43060 = cljs.core.seq.call(null,attrs);
var chunk__43041_43061 = null;
var count__43042_43062 = (0);
var i__43043_43063 = (0);
while(true){
if((i__43043_43063 < count__43042_43062)){
var vec__43044_43064 = cljs.core._nth.call(null,chunk__43041_43061,i__43043_43063);
var k_43065 = cljs.core.nth.call(null,vec__43044_43064,(0),null);
var v_43066 = cljs.core.nth.call(null,vec__43044_43064,(1),null);
var G__43047_43067 = (((k_43065 instanceof cljs.core.Keyword))?k_43065.fqn:null);
switch (G__43047_43067) {
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_43066);

break;
case "classes":
var seq__43048_43069 = cljs.core.seq.call(null,v_43066);
var chunk__43049_43070 = null;
var count__43050_43071 = (0);
var i__43051_43072 = (0);
while(true){
if((i__43051_43072 < count__43050_43071)){
var c_43073 = cljs.core._nth.call(null,chunk__43049_43070,i__43051_43072);
dommy.attrs.add_class_BANG_.call(null,n,c_43073);

var G__43074 = seq__43048_43069;
var G__43075 = chunk__43049_43070;
var G__43076 = count__43050_43071;
var G__43077 = (i__43051_43072 + (1));
seq__43048_43069 = G__43074;
chunk__43049_43070 = G__43075;
count__43050_43071 = G__43076;
i__43051_43072 = G__43077;
continue;
} else {
var temp__4657__auto___43078 = cljs.core.seq.call(null,seq__43048_43069);
if(temp__4657__auto___43078){
var seq__43048_43079__$1 = temp__4657__auto___43078;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43048_43079__$1)){
var c__7357__auto___43080 = cljs.core.chunk_first.call(null,seq__43048_43079__$1);
var G__43081 = cljs.core.chunk_rest.call(null,seq__43048_43079__$1);
var G__43082 = c__7357__auto___43080;
var G__43083 = cljs.core.count.call(null,c__7357__auto___43080);
var G__43084 = (0);
seq__43048_43069 = G__43081;
chunk__43049_43070 = G__43082;
count__43050_43071 = G__43083;
i__43051_43072 = G__43084;
continue;
} else {
var c_43085 = cljs.core.first.call(null,seq__43048_43079__$1);
dommy.attrs.add_class_BANG_.call(null,n,c_43085);

var G__43086 = cljs.core.next.call(null,seq__43048_43079__$1);
var G__43087 = null;
var G__43088 = (0);
var G__43089 = (0);
seq__43048_43069 = G__43086;
chunk__43049_43070 = G__43087;
count__43050_43071 = G__43088;
i__43051_43072 = G__43089;
continue;
}
} else {
}
}
break;
}

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_43065,v_43066);

}

var G__43090 = seq__43040_43060;
var G__43091 = chunk__43041_43061;
var G__43092 = count__43042_43062;
var G__43093 = (i__43043_43063 + (1));
seq__43040_43060 = G__43090;
chunk__43041_43061 = G__43091;
count__43042_43062 = G__43092;
i__43043_43063 = G__43093;
continue;
} else {
var temp__4657__auto___43094 = cljs.core.seq.call(null,seq__43040_43060);
if(temp__4657__auto___43094){
var seq__43040_43095__$1 = temp__4657__auto___43094;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43040_43095__$1)){
var c__7357__auto___43096 = cljs.core.chunk_first.call(null,seq__43040_43095__$1);
var G__43097 = cljs.core.chunk_rest.call(null,seq__43040_43095__$1);
var G__43098 = c__7357__auto___43096;
var G__43099 = cljs.core.count.call(null,c__7357__auto___43096);
var G__43100 = (0);
seq__43040_43060 = G__43097;
chunk__43041_43061 = G__43098;
count__43042_43062 = G__43099;
i__43043_43063 = G__43100;
continue;
} else {
var vec__43052_43101 = cljs.core.first.call(null,seq__43040_43095__$1);
var k_43102 = cljs.core.nth.call(null,vec__43052_43101,(0),null);
var v_43103 = cljs.core.nth.call(null,vec__43052_43101,(1),null);
var G__43055_43104 = (((k_43102 instanceof cljs.core.Keyword))?k_43102.fqn:null);
switch (G__43055_43104) {
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_43103);

break;
case "classes":
var seq__43056_43106 = cljs.core.seq.call(null,v_43103);
var chunk__43057_43107 = null;
var count__43058_43108 = (0);
var i__43059_43109 = (0);
while(true){
if((i__43059_43109 < count__43058_43108)){
var c_43110 = cljs.core._nth.call(null,chunk__43057_43107,i__43059_43109);
dommy.attrs.add_class_BANG_.call(null,n,c_43110);

var G__43111 = seq__43056_43106;
var G__43112 = chunk__43057_43107;
var G__43113 = count__43058_43108;
var G__43114 = (i__43059_43109 + (1));
seq__43056_43106 = G__43111;
chunk__43057_43107 = G__43112;
count__43058_43108 = G__43113;
i__43059_43109 = G__43114;
continue;
} else {
var temp__4657__auto___43115__$1 = cljs.core.seq.call(null,seq__43056_43106);
if(temp__4657__auto___43115__$1){
var seq__43056_43116__$1 = temp__4657__auto___43115__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43056_43116__$1)){
var c__7357__auto___43117 = cljs.core.chunk_first.call(null,seq__43056_43116__$1);
var G__43118 = cljs.core.chunk_rest.call(null,seq__43056_43116__$1);
var G__43119 = c__7357__auto___43117;
var G__43120 = cljs.core.count.call(null,c__7357__auto___43117);
var G__43121 = (0);
seq__43056_43106 = G__43118;
chunk__43057_43107 = G__43119;
count__43058_43108 = G__43120;
i__43059_43109 = G__43121;
continue;
} else {
var c_43122 = cljs.core.first.call(null,seq__43056_43116__$1);
dommy.attrs.add_class_BANG_.call(null,n,c_43122);

var G__43123 = cljs.core.next.call(null,seq__43056_43116__$1);
var G__43124 = null;
var G__43125 = (0);
var G__43126 = (0);
seq__43056_43106 = G__43123;
chunk__43057_43107 = G__43124;
count__43058_43108 = G__43125;
i__43059_43109 = G__43126;
continue;
}
} else {
}
}
break;
}

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_43102,v_43103);

}

var G__43127 = cljs.core.next.call(null,seq__43040_43095__$1);
var G__43128 = null;
var G__43129 = (0);
var G__43130 = (0);
seq__43040_43060 = G__43127;
chunk__43041_43061 = G__43128;
count__43042_43062 = G__43129;
i__43043_43063 = G__43130;
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