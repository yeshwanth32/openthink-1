// Compiled by ClojureScript 0.0-2511
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('dommy.attrs');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, ["path",null,"svg",null,"text",null,"line",null,"polygon",null,"textPath",null,"polyline",null,"g",null,"clipPath",null,"rect",null,"circle",null], null), null);

dommy.template.PElement = (function (){var obj28743 = {};
return obj28743;
})();

dommy.template._elem = (function _elem(this$){
if((function (){var and__3626__auto__ = this$;
if(and__3626__auto__){
return this$.dommy$template$PElement$_elem$arity$1;
} else {
return and__3626__auto__;
}
})()){
return this$.dommy$template$PElement$_elem$arity$1(this$);
} else {
var x__4282__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3638__auto__ = (dommy.template._elem[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (dommy.template._elem["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});

/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){
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
dommy.template.base_element = (function base_element(node_key){
var node_str = dommy.utils.as_str.call(null,node_key);
var base_idx = dommy.template.next_css_index.call(null,node_str,(0));
var tag = (((base_idx > (0)))?node_str.substring((0),base_idx):(((base_idx === (0)))?"div":node_str
));
var node = (cljs.core.truth_(dommy.template._PLUS_svg_tags_PLUS_.call(null,tag))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));
if((base_idx >= (0))){
var str_28746 = node_str.substring(base_idx);
while(true){
var next_idx_28747 = dommy.template.next_css_index.call(null,str_28746,(1));
var frag_28748 = (((next_idx_28747 >= (0)))?str_28746.substring((0),next_idx_28747):str_28746);
var G__28745_28749 = frag_28748.charAt((0));
switch (G__28745_28749) {
case ".":
dommy.attrs.add_class_BANG_.call(null,node,frag_28748.substring((1)));

break;
case "#":
node.setAttribute("id",frag_28748.substring((1)));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_28748.charAt((0)))].join('')));

}

if((next_idx_28747 >= (0))){
var G__28751 = str_28746.substring(next_idx_28747);
str_28746 = G__28751;
continue;
} else {
}
break;
}
} else {
}

return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){
throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.call(null,node_data))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){
return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){
if((function (){var G__28757 = data;
if(G__28757){
var bit__4319__auto__ = null;
if(cljs.core.truth_((function (){var or__3638__auto__ = bit__4319__auto__;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return G__28757.dommy$template$PElement$;
}
})())){
return true;
} else {
if((!G__28757.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__28757);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__28757);
}
})()){
result_frag.appendChild(dommy.template._elem.call(null,data));

return result_frag;
} else {
if(cljs.core.seq_QMARK_.call(null,data)){
var seq__28758_28762 = cljs.core.seq.call(null,data);
var chunk__28759_28763 = null;
var count__28760_28764 = (0);
var i__28761_28765 = (0);
while(true){
if((i__28761_28765 < count__28760_28764)){
var child_28766 = cljs.core._nth.call(null,chunk__28759_28763,i__28761_28765);
__GT_document_fragment.call(null,result_frag,child_28766);

var G__28767 = seq__28758_28762;
var G__28768 = chunk__28759_28763;
var G__28769 = count__28760_28764;
var G__28770 = (i__28761_28765 + (1));
seq__28758_28762 = G__28767;
chunk__28759_28763 = G__28768;
count__28760_28764 = G__28769;
i__28761_28765 = G__28770;
continue;
} else {
var temp__4126__auto___28771 = cljs.core.seq.call(null,seq__28758_28762);
if(temp__4126__auto___28771){
var seq__28758_28772__$1 = temp__4126__auto___28771;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28758_28772__$1)){
var c__4425__auto___28773 = cljs.core.chunk_first.call(null,seq__28758_28772__$1);
var G__28774 = cljs.core.chunk_rest.call(null,seq__28758_28772__$1);
var G__28775 = c__4425__auto___28773;
var G__28776 = cljs.core.count.call(null,c__4425__auto___28773);
var G__28777 = (0);
seq__28758_28762 = G__28774;
chunk__28759_28763 = G__28775;
count__28760_28764 = G__28776;
i__28761_28765 = G__28777;
continue;
} else {
var child_28778 = cljs.core.first.call(null,seq__28758_28772__$1);
__GT_document_fragment.call(null,result_frag,child_28778);

var G__28779 = cljs.core.next.call(null,seq__28758_28772__$1);
var G__28780 = null;
var G__28781 = (0);
var G__28782 = (0);
seq__28758_28762 = G__28779;
chunk__28759_28763 = G__28780;
count__28760_28764 = G__28781;
i__28761_28765 = G__28782;
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
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){
if((function (){var G__28784 = data;
if(G__28784){
var bit__4319__auto__ = null;
if(cljs.core.truth_((function (){var or__3638__auto__ = bit__4319__auto__;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return G__28784.dommy$template$PElement$;
}
})())){
return true;
} else {
if((!G__28784.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__28784);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__28784);
}
})()){
return dommy.template._elem.call(null,data);
} else {
return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__28785){
var vec__28805 = p__28785;
var tag_name = cljs.core.nth.call(null,vec__28805,(0),null);
var maybe_attrs = cljs.core.nth.call(null,vec__28805,(1),null);
var children = cljs.core.nthnext.call(null,vec__28805,(2));
var n = dommy.template.base_element.call(null,tag_name);
var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__28807 = maybe_attrs;
if(G__28807){
var bit__4319__auto__ = null;
if(cljs.core.truth_((function (){var or__3638__auto__ = bit__4319__auto__;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return G__28807.dommy$template$PElement$;
}
})())){
return true;
} else {
if((!G__28807.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__28807);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__28807);
}
})())))?maybe_attrs:null);
var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));
var seq__28808_28824 = cljs.core.seq.call(null,attrs);
var chunk__28809_28825 = null;
var count__28810_28826 = (0);
var i__28811_28827 = (0);
while(true){
if((i__28811_28827 < count__28810_28826)){
var vec__28812_28828 = cljs.core._nth.call(null,chunk__28809_28825,i__28811_28827);
var k_28829 = cljs.core.nth.call(null,vec__28812_28828,(0),null);
var v_28830 = cljs.core.nth.call(null,vec__28812_28828,(1),null);
var G__28813_28831 = (((k_28829 instanceof cljs.core.Keyword))?k_28829.fqn:null);
switch (G__28813_28831) {
case "classes":
var seq__28814_28833 = cljs.core.seq.call(null,v_28830);
var chunk__28815_28834 = null;
var count__28816_28835 = (0);
var i__28817_28836 = (0);
while(true){
if((i__28817_28836 < count__28816_28835)){
var c_28837 = cljs.core._nth.call(null,chunk__28815_28834,i__28817_28836);
dommy.attrs.add_class_BANG_.call(null,n,c_28837);

var G__28838 = seq__28814_28833;
var G__28839 = chunk__28815_28834;
var G__28840 = count__28816_28835;
var G__28841 = (i__28817_28836 + (1));
seq__28814_28833 = G__28838;
chunk__28815_28834 = G__28839;
count__28816_28835 = G__28840;
i__28817_28836 = G__28841;
continue;
} else {
var temp__4126__auto___28842 = cljs.core.seq.call(null,seq__28814_28833);
if(temp__4126__auto___28842){
var seq__28814_28843__$1 = temp__4126__auto___28842;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28814_28843__$1)){
var c__4425__auto___28844 = cljs.core.chunk_first.call(null,seq__28814_28843__$1);
var G__28845 = cljs.core.chunk_rest.call(null,seq__28814_28843__$1);
var G__28846 = c__4425__auto___28844;
var G__28847 = cljs.core.count.call(null,c__4425__auto___28844);
var G__28848 = (0);
seq__28814_28833 = G__28845;
chunk__28815_28834 = G__28846;
count__28816_28835 = G__28847;
i__28817_28836 = G__28848;
continue;
} else {
var c_28849 = cljs.core.first.call(null,seq__28814_28843__$1);
dommy.attrs.add_class_BANG_.call(null,n,c_28849);

var G__28850 = cljs.core.next.call(null,seq__28814_28843__$1);
var G__28851 = null;
var G__28852 = (0);
var G__28853 = (0);
seq__28814_28833 = G__28850;
chunk__28815_28834 = G__28851;
count__28816_28835 = G__28852;
i__28817_28836 = G__28853;
continue;
}
} else {
}
}
break;
}

break;
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_28830);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_28829,v_28830);

}

var G__28854 = seq__28808_28824;
var G__28855 = chunk__28809_28825;
var G__28856 = count__28810_28826;
var G__28857 = (i__28811_28827 + (1));
seq__28808_28824 = G__28854;
chunk__28809_28825 = G__28855;
count__28810_28826 = G__28856;
i__28811_28827 = G__28857;
continue;
} else {
var temp__4126__auto___28858 = cljs.core.seq.call(null,seq__28808_28824);
if(temp__4126__auto___28858){
var seq__28808_28859__$1 = temp__4126__auto___28858;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28808_28859__$1)){
var c__4425__auto___28860 = cljs.core.chunk_first.call(null,seq__28808_28859__$1);
var G__28861 = cljs.core.chunk_rest.call(null,seq__28808_28859__$1);
var G__28862 = c__4425__auto___28860;
var G__28863 = cljs.core.count.call(null,c__4425__auto___28860);
var G__28864 = (0);
seq__28808_28824 = G__28861;
chunk__28809_28825 = G__28862;
count__28810_28826 = G__28863;
i__28811_28827 = G__28864;
continue;
} else {
var vec__28818_28865 = cljs.core.first.call(null,seq__28808_28859__$1);
var k_28866 = cljs.core.nth.call(null,vec__28818_28865,(0),null);
var v_28867 = cljs.core.nth.call(null,vec__28818_28865,(1),null);
var G__28819_28868 = (((k_28866 instanceof cljs.core.Keyword))?k_28866.fqn:null);
switch (G__28819_28868) {
case "classes":
var seq__28820_28870 = cljs.core.seq.call(null,v_28867);
var chunk__28821_28871 = null;
var count__28822_28872 = (0);
var i__28823_28873 = (0);
while(true){
if((i__28823_28873 < count__28822_28872)){
var c_28874 = cljs.core._nth.call(null,chunk__28821_28871,i__28823_28873);
dommy.attrs.add_class_BANG_.call(null,n,c_28874);

var G__28875 = seq__28820_28870;
var G__28876 = chunk__28821_28871;
var G__28877 = count__28822_28872;
var G__28878 = (i__28823_28873 + (1));
seq__28820_28870 = G__28875;
chunk__28821_28871 = G__28876;
count__28822_28872 = G__28877;
i__28823_28873 = G__28878;
continue;
} else {
var temp__4126__auto___28879__$1 = cljs.core.seq.call(null,seq__28820_28870);
if(temp__4126__auto___28879__$1){
var seq__28820_28880__$1 = temp__4126__auto___28879__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28820_28880__$1)){
var c__4425__auto___28881 = cljs.core.chunk_first.call(null,seq__28820_28880__$1);
var G__28882 = cljs.core.chunk_rest.call(null,seq__28820_28880__$1);
var G__28883 = c__4425__auto___28881;
var G__28884 = cljs.core.count.call(null,c__4425__auto___28881);
var G__28885 = (0);
seq__28820_28870 = G__28882;
chunk__28821_28871 = G__28883;
count__28822_28872 = G__28884;
i__28823_28873 = G__28885;
continue;
} else {
var c_28886 = cljs.core.first.call(null,seq__28820_28880__$1);
dommy.attrs.add_class_BANG_.call(null,n,c_28886);

var G__28887 = cljs.core.next.call(null,seq__28820_28880__$1);
var G__28888 = null;
var G__28889 = (0);
var G__28890 = (0);
seq__28820_28870 = G__28887;
chunk__28821_28871 = G__28888;
count__28822_28872 = G__28889;
i__28823_28873 = G__28890;
continue;
}
} else {
}
}
break;
}

break;
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_28867);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_28866,v_28867);

}

var G__28891 = cljs.core.next.call(null,seq__28808_28859__$1);
var G__28892 = null;
var G__28893 = (0);
var G__28894 = (0);
seq__28808_28824 = G__28891;
chunk__28809_28825 = G__28892;
count__28810_28826 = G__28893;
i__28811_28827 = G__28894;
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
(dommy.template.PElement["string"] = true);

(dommy.template._elem["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return dommy.template.base_element.call(null,this$);
} else {
return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));

(dommy.template.PElement["number"] = true);

(dommy.template._elem["number"] = (function (this$){
return document.createTextNode([cljs.core.str(this$)].join(''));
}));

cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;

cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return dommy.template.compound_element.call(null,this$__$1);
});

Text.prototype.dommy$template$PElement$ = true;

Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

Comment.prototype.dommy$template$PElement$ = true;

Comment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

Element.prototype.dommy$template$PElement$ = true;

Element.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
if(typeof HTMLElement !== 'undefined'){
HTMLElement.prototype.dommy$template$PElement$ = true;

HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(typeof DocumentFragment !== 'undefined'){
DocumentFragment.prototype.dommy$template$PElement$ = true;

DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(typeof Document !== 'undefined'){
Document.prototype.dommy$template$PElement$ = true;

Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(typeof HTMLDocument !== 'undefined'){
HTMLDocument.prototype.dommy$template$PElement$ = true;

HTMLDocument.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(typeof SVGElement !== 'undefined'){
SVGElement.prototype.dommy$template$PElement$ = true;

SVGElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(typeof Window !== 'undefined'){
Window.prototype.dommy$template$PElement$ = true;

Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
dommy.template.node = (function node(data){
if((function (){var G__28896 = data;
if(G__28896){
var bit__4319__auto__ = null;
if(cljs.core.truth_((function (){var or__3638__auto__ = bit__4319__auto__;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return G__28896.dommy$template$PElement$;
}
})())){
return true;
} else {
if((!G__28896.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__28896);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__28896);
}
})()){
return dommy.template._elem.call(null,data);
} else {
return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){
var parent = document.createElement("div");
parent.insertAdjacentHTML("beforeend",html);

return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});

//# sourceMappingURL=template.js.map