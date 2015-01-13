// Compiled by ClojureScript 0.0-2371
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, ["path",null,"svg",null,"text",null,"line",null,"polygon",null,"textPath",null,"polyline",null,"g",null,"clipPath",null,"rect",null,"circle",null], null), null);
dommy.template.PElement = (function (){var obj18622 = {};return obj18622;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__3626__auto__ = this$;if(and__3626__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3626__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3638__auto__ = (dommy.template._elem[goog.typeOf(x__4275__auto__)]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (dommy.template._elem["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < (0)))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = dommy.utils.as_str.call(null,node_key);var base_idx = dommy.template.next_css_index.call(null,node_str,(0));var tag = (((base_idx > (0)))?node_str.substring((0),base_idx):(((base_idx === (0)))?"div":node_str
));var node = (cljs.core.truth_(dommy.template._PLUS_svg_tags_PLUS_.call(null,tag))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= (0)))
{var str_18625 = node_str.substring(base_idx);while(true){
var next_idx_18626 = dommy.template.next_css_index.call(null,str_18625,(1));var frag_18627 = (((next_idx_18626 >= (0)))?str_18625.substring((0),next_idx_18626):str_18625);var G__18624_18628 = frag_18627.charAt((0));switch (G__18624_18628) {
case ".":
dommy.attrs.add_class_BANG_.call(null,node,frag_18627.substring((1)));

break;
case "#":
node.setAttribute("id",frag_18627.substring((1)));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frag_18627.charAt((0))))));

}
if((next_idx_18626 >= (0)))
{{
var G__18630 = str_18625.substring(next_idx_18626);
str_18625 = G__18630;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw ("Don't know how to make node from: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,node_data)));
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__18636 = data;if(G__18636)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3638__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
} else
{return G__18636.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__18636.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__18636);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__18636);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__18637_18641 = cljs.core.seq.call(null,data);var chunk__18638_18642 = null;var count__18639_18643 = (0);var i__18640_18644 = (0);while(true){
if((i__18640_18644 < count__18639_18643))
{var child_18645 = cljs.core._nth.call(null,chunk__18638_18642,i__18640_18644);__GT_document_fragment.call(null,result_frag,child_18645);
{
var G__18646 = seq__18637_18641;
var G__18647 = chunk__18638_18642;
var G__18648 = count__18639_18643;
var G__18649 = (i__18640_18644 + (1));
seq__18637_18641 = G__18646;
chunk__18638_18642 = G__18647;
count__18639_18643 = G__18648;
i__18640_18644 = G__18649;
continue;
}
} else
{var temp__4126__auto___18650 = cljs.core.seq.call(null,seq__18637_18641);if(temp__4126__auto___18650)
{var seq__18637_18651__$1 = temp__4126__auto___18650;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18637_18651__$1))
{var c__4408__auto___18652 = cljs.core.chunk_first.call(null,seq__18637_18651__$1);{
var G__18653 = cljs.core.chunk_rest.call(null,seq__18637_18651__$1);
var G__18654 = c__4408__auto___18652;
var G__18655 = cljs.core.count.call(null,c__4408__auto___18652);
var G__18656 = (0);
seq__18637_18641 = G__18653;
chunk__18638_18642 = G__18654;
count__18639_18643 = G__18655;
i__18640_18644 = G__18656;
continue;
}
} else
{var child_18657 = cljs.core.first.call(null,seq__18637_18651__$1);__GT_document_fragment.call(null,result_frag,child_18657);
{
var G__18658 = cljs.core.next.call(null,seq__18637_18651__$1);
var G__18659 = null;
var G__18660 = (0);
var G__18661 = (0);
seq__18637_18641 = G__18658;
chunk__18638_18642 = G__18659;
count__18639_18643 = G__18660;
i__18640_18644 = G__18661;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);

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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__18663 = data;if(G__18663)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3638__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
} else
{return G__18663.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__18663.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__18663);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__18663);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__18664){var vec__18684 = p__18664;var tag_name = cljs.core.nth.call(null,vec__18684,(0),null);var maybe_attrs = cljs.core.nth.call(null,vec__18684,(1),null);var children = cljs.core.nthnext.call(null,vec__18684,(2));var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__18686 = maybe_attrs;if(G__18686)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3638__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
} else
{return G__18686.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__18686.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__18686);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__18686);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__18687_18703 = cljs.core.seq.call(null,attrs);var chunk__18688_18704 = null;var count__18689_18705 = (0);var i__18690_18706 = (0);while(true){
if((i__18690_18706 < count__18689_18705))
{var vec__18691_18707 = cljs.core._nth.call(null,chunk__18688_18704,i__18690_18706);var k_18708 = cljs.core.nth.call(null,vec__18691_18707,(0),null);var v_18709 = cljs.core.nth.call(null,vec__18691_18707,(1),null);var G__18692_18710 = (((k_18708 instanceof cljs.core.Keyword))?k_18708.fqn:null);switch (G__18692_18710) {
case "classes":
var seq__18693_18712 = cljs.core.seq.call(null,v_18709);var chunk__18694_18713 = null;var count__18695_18714 = (0);var i__18696_18715 = (0);while(true){
if((i__18696_18715 < count__18695_18714))
{var c_18716 = cljs.core._nth.call(null,chunk__18694_18713,i__18696_18715);dommy.attrs.add_class_BANG_.call(null,n,c_18716);
{
var G__18717 = seq__18693_18712;
var G__18718 = chunk__18694_18713;
var G__18719 = count__18695_18714;
var G__18720 = (i__18696_18715 + (1));
seq__18693_18712 = G__18717;
chunk__18694_18713 = G__18718;
count__18695_18714 = G__18719;
i__18696_18715 = G__18720;
continue;
}
} else
{var temp__4126__auto___18721 = cljs.core.seq.call(null,seq__18693_18712);if(temp__4126__auto___18721)
{var seq__18693_18722__$1 = temp__4126__auto___18721;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18693_18722__$1))
{var c__4408__auto___18723 = cljs.core.chunk_first.call(null,seq__18693_18722__$1);{
var G__18724 = cljs.core.chunk_rest.call(null,seq__18693_18722__$1);
var G__18725 = c__4408__auto___18723;
var G__18726 = cljs.core.count.call(null,c__4408__auto___18723);
var G__18727 = (0);
seq__18693_18712 = G__18724;
chunk__18694_18713 = G__18725;
count__18695_18714 = G__18726;
i__18696_18715 = G__18727;
continue;
}
} else
{var c_18728 = cljs.core.first.call(null,seq__18693_18722__$1);dommy.attrs.add_class_BANG_.call(null,n,c_18728);
{
var G__18729 = cljs.core.next.call(null,seq__18693_18722__$1);
var G__18730 = null;
var G__18731 = (0);
var G__18732 = (0);
seq__18693_18712 = G__18729;
chunk__18694_18713 = G__18730;
count__18695_18714 = G__18731;
i__18696_18715 = G__18732;
continue;
}
}
} else
{}
}
break;
}

break;
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_18709);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_18708,v_18709);

}
{
var G__18733 = seq__18687_18703;
var G__18734 = chunk__18688_18704;
var G__18735 = count__18689_18705;
var G__18736 = (i__18690_18706 + (1));
seq__18687_18703 = G__18733;
chunk__18688_18704 = G__18734;
count__18689_18705 = G__18735;
i__18690_18706 = G__18736;
continue;
}
} else
{var temp__4126__auto___18737 = cljs.core.seq.call(null,seq__18687_18703);if(temp__4126__auto___18737)
{var seq__18687_18738__$1 = temp__4126__auto___18737;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18687_18738__$1))
{var c__4408__auto___18739 = cljs.core.chunk_first.call(null,seq__18687_18738__$1);{
var G__18740 = cljs.core.chunk_rest.call(null,seq__18687_18738__$1);
var G__18741 = c__4408__auto___18739;
var G__18742 = cljs.core.count.call(null,c__4408__auto___18739);
var G__18743 = (0);
seq__18687_18703 = G__18740;
chunk__18688_18704 = G__18741;
count__18689_18705 = G__18742;
i__18690_18706 = G__18743;
continue;
}
} else
{var vec__18697_18744 = cljs.core.first.call(null,seq__18687_18738__$1);var k_18745 = cljs.core.nth.call(null,vec__18697_18744,(0),null);var v_18746 = cljs.core.nth.call(null,vec__18697_18744,(1),null);var G__18698_18747 = (((k_18745 instanceof cljs.core.Keyword))?k_18745.fqn:null);switch (G__18698_18747) {
case "classes":
var seq__18699_18749 = cljs.core.seq.call(null,v_18746);var chunk__18700_18750 = null;var count__18701_18751 = (0);var i__18702_18752 = (0);while(true){
if((i__18702_18752 < count__18701_18751))
{var c_18753 = cljs.core._nth.call(null,chunk__18700_18750,i__18702_18752);dommy.attrs.add_class_BANG_.call(null,n,c_18753);
{
var G__18754 = seq__18699_18749;
var G__18755 = chunk__18700_18750;
var G__18756 = count__18701_18751;
var G__18757 = (i__18702_18752 + (1));
seq__18699_18749 = G__18754;
chunk__18700_18750 = G__18755;
count__18701_18751 = G__18756;
i__18702_18752 = G__18757;
continue;
}
} else
{var temp__4126__auto___18758__$1 = cljs.core.seq.call(null,seq__18699_18749);if(temp__4126__auto___18758__$1)
{var seq__18699_18759__$1 = temp__4126__auto___18758__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18699_18759__$1))
{var c__4408__auto___18760 = cljs.core.chunk_first.call(null,seq__18699_18759__$1);{
var G__18761 = cljs.core.chunk_rest.call(null,seq__18699_18759__$1);
var G__18762 = c__4408__auto___18760;
var G__18763 = cljs.core.count.call(null,c__4408__auto___18760);
var G__18764 = (0);
seq__18699_18749 = G__18761;
chunk__18700_18750 = G__18762;
count__18701_18751 = G__18763;
i__18702_18752 = G__18764;
continue;
}
} else
{var c_18765 = cljs.core.first.call(null,seq__18699_18759__$1);dommy.attrs.add_class_BANG_.call(null,n,c_18765);
{
var G__18766 = cljs.core.next.call(null,seq__18699_18759__$1);
var G__18767 = null;
var G__18768 = (0);
var G__18769 = (0);
seq__18699_18749 = G__18766;
chunk__18700_18750 = G__18767;
count__18701_18751 = G__18768;
i__18702_18752 = G__18769;
continue;
}
}
} else
{}
}
break;
}

break;
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_18746);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_18745,v_18746);

}
{
var G__18770 = cljs.core.next.call(null,seq__18687_18738__$1);
var G__18771 = null;
var G__18772 = (0);
var G__18773 = (0);
seq__18687_18703 = G__18770;
chunk__18688_18704 = G__18771;
count__18689_18705 = G__18772;
i__18690_18706 = G__18773;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return dommy.template.compound_element.call(null,this$__$1);
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Comment.prototype.dommy$template$PElement$ = true;
Comment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Element.prototype.dommy$template$PElement$ = true;
Element.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
if(typeof HTMLElement !== 'undefined')
{HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof DocumentFragment !== 'undefined')
{DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof Document !== 'undefined')
{Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof HTMLDocument !== 'undefined')
{HTMLDocument.prototype.dommy$template$PElement$ = true;
HTMLDocument.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof SVGElement !== 'undefined')
{SVGElement.prototype.dommy$template$PElement$ = true;
SVGElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof Window !== 'undefined')
{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
dommy.template.node = (function node(data){if((function (){var G__18775 = data;if(G__18775)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3638__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
} else
{return G__18775.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__18775.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__18775);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__18775);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});

//# sourceMappingURL=template.js.map