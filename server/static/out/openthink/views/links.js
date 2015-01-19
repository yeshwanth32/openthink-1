// Compiled by ClojureScript 0.0-2371
goog.provide('openthink.views.links');
goog.require('cljs.core');
goog.require('openthink.state');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('openthink.state');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('openthink.cursors');
goog.require('sablono.core');
goog.require('openthink.utils');
goog.require('openthink.utils');
goog.require('om.core');
goog.require('openthink.cursors');
goog.require('om.core');
goog.require('clojure.string');
goog.require('clojure.string');
openthink.views.links.vote_btn = (function vote_btn(rel,owner,p__14593){var map__14598 = p__14593;var map__14598__$1 = ((cljs.core.seq_QMARK_.call(null,map__14598))?cljs.core.apply.call(null,cljs.core.hash_map,map__14598):map__14598);var opts = map__14598__$1;var vote_txt = cljs.core.get.call(null,map__14598__$1,new cljs.core.Keyword(null,"vote-txt","vote-txt",476450142));var vote_value = cljs.core.get.call(null,map__14598__$1,new cljs.core.Keyword(null,"vote-value","vote-value",-814557147));if(typeof openthink.views.links.t14599 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.views.links.t14599 = (function (vote_value,vote_txt,opts,map__14598,p__14593,owner,rel,vote_btn,meta14600){
this.vote_value = vote_value;
this.vote_txt = vote_txt;
this.opts = opts;
this.map__14598 = map__14598;
this.p__14593 = p__14593;
this.owner = owner;
this.rel = rel;
this.vote_btn = vote_btn;
this.meta14600 = meta14600;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.links.t14599.cljs$lang$type = true;
openthink.views.links.t14599.cljs$lang$ctorStr = "openthink.views.links/t14599";
openthink.views.links.t14599.cljs$lang$ctorPrWriter = ((function (map__14598,map__14598__$1,opts,vote_txt,vote_value){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.views.links/t14599");
});})(map__14598,map__14598__$1,opts,vote_txt,vote_value))
;
openthink.views.links.t14599.prototype.om$core$IRender$ = true;
openthink.views.links.t14599.prototype.om$core$IRender$render$arity$1 = ((function (map__14598,map__14598__$1,opts,vote_txt,vote_value){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.a({"href": "#", "onClick": ((function (this$__$1,map__14598,map__14598__$1,opts,vote_txt,vote_value){
return (function (_){ajax.core.POST.call(null,"/vote",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, ["value",self__.vote_value,"rel_id",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.rel)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (this$__$1,map__14598,map__14598__$1,opts,vote_txt,vote_value){
return (function (resp){cljs.core.println.call(null,resp);
var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032)))
{return null;
} else
{return om.core.update_BANG_.call(null,self__.rel,new cljs.core.Keyword(null,"rel","rel",1378823488).cljs$core$IFn$_invoke$arity$1(resp__$1));
}
});})(this$__$1,map__14598,map__14598__$1,opts,vote_txt,vote_value))
], null));
return false;
});})(this$__$1,map__14598,map__14598__$1,opts,vote_txt,vote_value))
},sablono.interpreter.interpret.call(null,self__.vote_txt));
});})(map__14598,map__14598__$1,opts,vote_txt,vote_value))
;
openthink.views.links.t14599.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__14598,map__14598__$1,opts,vote_txt,vote_value){
return (function (_14601){var self__ = this;
var _14601__$1 = this;return self__.meta14600;
});})(map__14598,map__14598__$1,opts,vote_txt,vote_value))
;
openthink.views.links.t14599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__14598,map__14598__$1,opts,vote_txt,vote_value){
return (function (_14601,meta14600__$1){var self__ = this;
var _14601__$1 = this;return (new openthink.views.links.t14599(self__.vote_value,self__.vote_txt,self__.opts,self__.map__14598,self__.p__14593,self__.owner,self__.rel,self__.vote_btn,meta14600__$1));
});})(map__14598,map__14598__$1,opts,vote_txt,vote_value))
;
openthink.views.links.__GT_t14599 = ((function (map__14598,map__14598__$1,opts,vote_txt,vote_value){
return (function __GT_t14599(vote_value__$1,vote_txt__$1,opts__$1,map__14598__$2,p__14593__$1,owner__$1,rel__$1,vote_btn__$1,meta14600){return (new openthink.views.links.t14599(vote_value__$1,vote_txt__$1,opts__$1,map__14598__$2,p__14593__$1,owner__$1,rel__$1,vote_btn__$1,meta14600));
});})(map__14598,map__14598__$1,opts,vote_txt,vote_value))
;
}
return (new openthink.views.links.t14599(vote_value,vote_txt,opts,map__14598__$1,p__14593,owner,rel,vote_btn,null));
});
openthink.views.links.mock_link = (function mock_link(dom_bit){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"child large-12 columns"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"text-center"], null),dom_bit], null)], null);
});
openthink.views.links.link_view = (function link_view(rel,owner){if(typeof openthink.views.links.t14610 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.views.links.t14610 = (function (owner,rel,link_view,meta14611){
this.owner = owner;
this.rel = rel;
this.link_view = link_view;
this.meta14611 = meta14611;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.links.t14610.cljs$lang$type = true;
openthink.views.links.t14610.cljs$lang$ctorStr = "openthink.views.links/t14610";
openthink.views.links.t14610.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.views.links/t14610");
});
openthink.views.links.t14610.prototype.om$core$IRender$ = true;
openthink.views.links.t14610.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var link_post = openthink.cursors.post_from_rel.call(null,self__.rel);return React.DOM.div({"className": "child large-12 columns"},React.DOM.div({"className": "row"},React.DOM.div({"className": "large-2 columns"},React.DOM.div({"className": "row"},React.DOM.div({"className": "small-4 columns", "style": cljs.core.clj__GT_js.call(null,{"padding": "0px"})},(function (){var attrs14613 = om.core.build.call(null,openthink.views.links.vote_btn,self__.rel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vote-value","vote-value",-814557147),(1),new cljs.core.Keyword(null,"vote-txt","vote-txt",476450142),"\u25B2"], null),new cljs.core.Keyword(null,"key","key",-1516042587),("upvote-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.rel)))], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs14613))?sablono.interpreter.attributes.call(null,attrs14613):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14613))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14613)], null))));
})(),(function (){var attrs14614 = om.core.build.call(null,openthink.views.links.vote_btn,self__.rel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vote-value","vote-value",-814557147),(-1),new cljs.core.Keyword(null,"vote-txt","vote-txt",476450142),"\u25BC"], null),new cljs.core.Keyword(null,"key","key",-1516042587),("downvote-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.rel)))], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs14614))?sablono.interpreter.attributes.call(null,attrs14614):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14614))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14614)], null))));
})()),React.DOM.div({"className": "small-8 columns", "style": cljs.core.clj__GT_js.call(null,{"padding": "0px"})},(function (){var attrs14615 = (function (){var or__3646__auto__ = new cljs.core.Keyword(null,"votecount","votecount",425206940).cljs$core$IFn$_invoke$arity$1(self__.rel);if(cljs.core.truth_(or__3646__auto__))
{return or__3646__auto__;
} else
{return (0);
}
})();return cljs.core.apply.call(null,React.DOM.h4,((cljs.core.map_QMARK_.call(null,attrs14615))?sablono.interpreter.attributes.call(null,attrs14615):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14615))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14615)], null))));
})()))),React.DOM.div({"className": "large-10 columns"},React.DOM.a({"href": ("/post/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(link_post)))},React.DOM.strong({"className": "child-title"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(link_post)))),(function (){var attrs14616 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,clojure.string.replace.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(link_post),/\\n|\n/," "),(0),(80)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((cljs.core.count.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(link_post)) > (80)))?"...":"")));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs14616))?sablono.interpreter.attributes.call(null,attrs14616):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14616))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14616)], null))));
})(),React.DOM.span({"className": "link-by"},"linked by ",(function (){var attrs14617 = cljs.core.get_in.call(null,self__.rel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linked_by","linked_by",-1836719993),new cljs.core.Keyword(null,"username","username",1605666410)], null));return cljs.core.apply.call(null,React.DOM.strong,((cljs.core.map_QMARK_.call(null,attrs14617))?sablono.interpreter.attributes.call(null,attrs14617):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14617))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14617)], null))));
})()," on ",sablono.interpreter.interpret.call(null,openthink.utils.date.call(null,new cljs.core.Keyword(null,"time_linked","time_linked",1045859207).cljs$core$IFn$_invoke$arity$1(self__.rel)))))));
});
openthink.views.links.t14610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14612){var self__ = this;
var _14612__$1 = this;return self__.meta14611;
});
openthink.views.links.t14610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14612,meta14611__$1){var self__ = this;
var _14612__$1 = this;return (new openthink.views.links.t14610(self__.owner,self__.rel,self__.link_view,meta14611__$1));
});
openthink.views.links.__GT_t14610 = (function __GT_t14610(owner__$1,rel__$1,link_view__$1,meta14611){return (new openthink.views.links.t14610(owner__$1,rel__$1,link_view__$1,meta14611));
});
}
return (new openthink.views.links.t14610(owner,rel,link_view,null));
});
openthink.views.links.sort_option_attrs = (function sort_option_attrs(sort_value,selected_value){var attrs = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),sort_value], null);if(cljs.core._EQ_.call(null,sort_value,selected_value))
{return cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"selected","selected",574897764),"selected");
} else
{return attrs;
}
});
openthink.views.links.links_view = (function links_view(data,owner){if(typeof openthink.views.links.t14698 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.views.links.t14698 = (function (owner,data,links_view,meta14699){
this.owner = owner;
this.data = data;
this.links_view = links_view;
this.meta14699 = meta14699;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.links.t14698.cljs$lang$type = true;
openthink.views.links.t14698.cljs$lang$ctorStr = "openthink.views.links/t14698";
openthink.views.links.t14698.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.views.links/t14698");
});
openthink.views.links.t14698.prototype.om$core$IRender$ = true;
openthink.views.links.t14698.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var link_ids = new cljs.core.Keyword(null,"link_ids","link_ids",-791411950).cljs$core$IFn$_invoke$arity$1(self__.data);var link_rels = openthink.utils.select_values.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(self__.data),link_ids);return React.DOM.div({"className": "children-view"},React.DOM.div({"className": "row reply-action"},React.DOM.button({"onClick": ((function (link_ids,link_rels,___$1){
return (function (){om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"reply-to","reply-to",-145674792),new cljs.core.Keyword(null,"current_post","current_post",2072811381).cljs$core$IFn$_invoke$arity$1(self__.data));
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.Keyword(null,"new-post","new-post",-1808203791));
});})(link_ids,link_rels,___$1))
, "className": "button expand large reply-btn"},"Link new Post")),((cljs.core.empty_QMARK_.call(null,link_rels))?React.DOM.div(null,"No posts have been linked yet"):React.DOM.span(null,React.DOM.div({"className": "row child-sort-section"},sablono.interpreter.interpret.call(null,(function (){var sval = new cljs.core.Keyword(null,"sort-value","sort-value",-585546274).cljs$core$IFn$_invoke$arity$1(self__.data);var sort_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"sort-chan","sort-chan",-493870758));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (sval,sort_ch,link_ids,link_rels,___$1){
return (function (p1__14623_SHARP_){return cljs.core.async.put_BANG_.call(null,sort_ch,p1__14623_SHARP_.target.value);
});})(sval,sort_ch,link_ids,link_rels,___$1))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),openthink.views.links.sort_option_attrs.call(null,"top",sval),"Top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),openthink.views.links.sort_option_attrs.call(null,"new",sval),"Newest"], null)], null);
})())),cljs.core.into_array.call(null,(function (){var iter__4385__auto__ = ((function (link_ids,link_rels,___$1){
return (function iter__14703(s__14704){return (new cljs.core.LazySeq(null,((function (link_ids,link_rels,___$1){
return (function (){var s__14704__$1 = s__14704;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14704__$1);if(temp__4126__auto__)
{var s__14704__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14704__$2))
{var c__4383__auto__ = cljs.core.chunk_first.call(null,s__14704__$2);var size__4384__auto__ = cljs.core.count.call(null,c__4383__auto__);var b__14706 = cljs.core.chunk_buffer.call(null,size__4384__auto__);if((function (){var i__14705 = (0);while(true){
if((i__14705 < size__4384__auto__))
{var link = cljs.core._nth.call(null,c__4383__auto__,i__14705);cljs.core.chunk_append.call(null,b__14706,React.DOM.div({"className": "row"},sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.links.link_view,link))));
{
var G__14772 = (i__14705 + (1));
i__14705 = G__14772;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14706),iter__14703.call(null,cljs.core.chunk_rest.call(null,s__14704__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14706),null);
}
} else
{var link = cljs.core.first.call(null,s__14704__$2);return cljs.core.cons.call(null,React.DOM.div({"className": "row"},sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.links.link_view,link))),iter__14703.call(null,cljs.core.rest.call(null,s__14704__$2)));
}
} else
{return null;
}
break;
}
});})(link_ids,link_rels,___$1))
,null,null));
});})(link_ids,link_rels,___$1))
;return iter__4385__auto__.call(null,link_rels);
})()),sablono.interpreter.interpret.call(null,(function (){var G__14707 = (((om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099)) instanceof cljs.core.Keyword))?om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099)).fqn:null);switch (G__14707) {
case "ready":
var page = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"page","page",849072397));if((cljs.core.count.call(null,link_rels) >= ((8) * (page + (1)))))
{return openthink.views.links.mock_link.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (page,G__14707,link_ids,link_rels,___$1){
return (function (___$2){cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614)),(page + (1)));
return false;
});})(page,G__14707,link_ids,link_rels,___$1))
], null),"\u25BC Load more posts \u25BC"], null));
} else
{return null;
}

break;
case "loading":
return openthink.views.links.mock_link.call(null,"Loading...");

break;
case "sorting":
return openthink.views.links.mock_link.call(null,"Sorting...");

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099))))));

}
})()))));
});
openthink.views.links.t14698.prototype.om$core$IWillMount$ = true;
openthink.views.links.t14698.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var sort_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"sort-chan","sort-chan",-493870758));var load_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));var c__6596__auto___14774 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto___14774,sort_ch,load_ch,___$1){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto___14774,sort_ch,load_ch,___$1){
return (function (state_14728){var state_val_14729 = (state_14728[(1)]);if((state_val_14729 === (4)))
{var inst_14710 = (state_14728[(2)]);var inst_14711 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"sorting","sorting",622249690));var inst_14712 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"page","page",849072397),(0));var inst_14713 = om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"sort-value","sort-value",-585546274),inst_14710);var inst_14714 = new cljs.core.Keyword(null,"current_post","current_post",2072811381).cljs$core$IFn$_invoke$arity$1(self__.data);var inst_14715 = ("/links/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14714));var inst_14716 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];var inst_14717 = ["sort"];var inst_14718 = [inst_14710];var inst_14719 = cljs.core.PersistentHashMap.fromArrays(inst_14717,inst_14718);var inst_14720 = (function (){var new_sort_val = inst_14710;return ((function (new_sort_val,inst_14710,inst_14711,inst_14712,inst_14713,inst_14714,inst_14715,inst_14716,inst_14717,inst_14718,inst_14719,state_val_14729,c__6596__auto___14774,sort_ch,load_ch,___$1){
return (function (resp){cljs.core.println.call(null,"sort returned");
var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);cljs.core.println.call(null,resp__$1);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795));
if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032)))
{return null;
} else
{om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"posts","posts",760043164),((function (resp__$1,new_sort_val,inst_14710,inst_14711,inst_14712,inst_14713,inst_14714,inst_14715,inst_14716,inst_14717,inst_14718,inst_14719,state_val_14729,c__6596__auto___14774,sort_ch,load_ch,___$1){
return (function (p1__14618_SHARP_){return cljs.core.merge.call(null,p1__14618_SHARP_,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(resp__$1));
});})(resp__$1,new_sort_val,inst_14710,inst_14711,inst_14712,inst_14713,inst_14714,inst_14715,inst_14716,inst_14717,inst_14718,inst_14719,state_val_14729,c__6596__auto___14774,sort_ch,load_ch,___$1))
);
om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"rels","rels",1770187185),((function (resp__$1,new_sort_val,inst_14710,inst_14711,inst_14712,inst_14713,inst_14714,inst_14715,inst_14716,inst_14717,inst_14718,inst_14719,state_val_14729,c__6596__auto___14774,sort_ch,load_ch,___$1){
return (function (p1__14619_SHARP_){return cljs.core.merge.call(null,p1__14619_SHARP_,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(resp__$1));
});})(resp__$1,new_sort_val,inst_14710,inst_14711,inst_14712,inst_14713,inst_14714,inst_14715,inst_14716,inst_14717,inst_14718,inst_14719,state_val_14729,c__6596__auto___14774,sort_ch,load_ch,___$1))
);
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"link_ids","link_ids",-791411950),new cljs.core.Keyword(null,"new_rel_ids","new_rel_ids",701283960).cljs$core$IFn$_invoke$arity$1(resp__$1));
}
});
;})(new_sort_val,inst_14710,inst_14711,inst_14712,inst_14713,inst_14714,inst_14715,inst_14716,inst_14717,inst_14718,inst_14719,state_val_14729,c__6596__auto___14774,sort_ch,load_ch,___$1))
})();var inst_14721 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_14719,inst_14720];var inst_14722 = cljs.core.PersistentHashMap.fromArrays(inst_14716,inst_14721);var inst_14723 = ajax.core.GET.call(null,inst_14715,inst_14722);var state_14728__$1 = (function (){var statearr_14730 = state_14728;(statearr_14730[(7)] = inst_14723);
(statearr_14730[(8)] = inst_14713);
(statearr_14730[(9)] = inst_14711);
(statearr_14730[(10)] = inst_14712);
return statearr_14730;
})();var statearr_14731_14775 = state_14728__$1;(statearr_14731_14775[(2)] = null);
(statearr_14731_14775[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14729 === (3)))
{var inst_14726 = (state_14728[(2)]);var state_14728__$1 = state_14728;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14728__$1,inst_14726);
} else
{if((state_val_14729 === (2)))
{var state_14728__$1 = state_14728;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14728__$1,(4),sort_ch);
} else
{if((state_val_14729 === (1)))
{var state_14728__$1 = state_14728;var statearr_14732_14776 = state_14728__$1;(statearr_14732_14776[(2)] = null);
(statearr_14732_14776[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6596__auto___14774,sort_ch,load_ch,___$1))
;return ((function (switch__6581__auto__,c__6596__auto___14774,sort_ch,load_ch,___$1){
return (function() {
var state_machine__6582__auto__ = null;
var state_machine__6582__auto____0 = (function (){var statearr_14736 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14736[(0)] = state_machine__6582__auto__);
(statearr_14736[(1)] = (1));
return statearr_14736;
});
var state_machine__6582__auto____1 = (function (state_14728){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_14728);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e14737){if((e14737 instanceof Object))
{var ex__6585__auto__ = e14737;var statearr_14738_14777 = state_14728;(statearr_14738_14777[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14728);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14737;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14778 = state_14728;
state_14728 = G__14778;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_14728){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_14728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto___14774,sort_ch,load_ch,___$1))
})();var state__6598__auto__ = (function (){var statearr_14739 = f__6597__auto__.call(null);(statearr_14739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto___14774);
return statearr_14739;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto___14774,sort_ch,load_ch,___$1))
);
var c__6596__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto__,sort_ch,load_ch,___$1){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto__,sort_ch,load_ch,___$1){
return (function (state_14760){var state_val_14761 = (state_14760[(1)]);if((state_val_14761 === (4)))
{var inst_14742 = (state_14760[(2)]);var inst_14743 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"loading","loading",-737050189));var inst_14744 = new cljs.core.Keyword(null,"current_post","current_post",2072811381).cljs$core$IFn$_invoke$arity$1(self__.data);var inst_14745 = ("/links/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14744));var inst_14746 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];var inst_14747 = ["sort","page"];var inst_14748 = cljs.core.deref.call(null,openthink.state.app_state);var inst_14749 = new cljs.core.Keyword(null,"sort-value","sort-value",-585546274).cljs$core$IFn$_invoke$arity$1(inst_14748);var inst_14750 = [inst_14749,inst_14742];var inst_14751 = cljs.core.PersistentHashMap.fromArrays(inst_14747,inst_14750);var inst_14752 = (function (){var new_page = inst_14742;return ((function (new_page,inst_14742,inst_14743,inst_14744,inst_14745,inst_14746,inst_14747,inst_14748,inst_14749,inst_14750,inst_14751,state_val_14761,c__6596__auto__,sort_ch,load_ch,___$1){
return (function (resp){cljs.core.println.call(null,"load posts returned");
var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);cljs.core.println.call(null,resp__$1);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"page","page",849072397),new_page);
if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032)))
{return null;
} else
{om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"posts","posts",760043164),((function (resp__$1,new_page,inst_14742,inst_14743,inst_14744,inst_14745,inst_14746,inst_14747,inst_14748,inst_14749,inst_14750,inst_14751,state_val_14761,c__6596__auto__,sort_ch,load_ch,___$1){
return (function (p1__14620_SHARP_){return cljs.core.merge.call(null,p1__14620_SHARP_,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(resp__$1));
});})(resp__$1,new_page,inst_14742,inst_14743,inst_14744,inst_14745,inst_14746,inst_14747,inst_14748,inst_14749,inst_14750,inst_14751,state_val_14761,c__6596__auto__,sort_ch,load_ch,___$1))
);
om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"rels","rels",1770187185),((function (resp__$1,new_page,inst_14742,inst_14743,inst_14744,inst_14745,inst_14746,inst_14747,inst_14748,inst_14749,inst_14750,inst_14751,state_val_14761,c__6596__auto__,sort_ch,load_ch,___$1){
return (function (p1__14621_SHARP_){return cljs.core.merge.call(null,p1__14621_SHARP_,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(resp__$1));
});})(resp__$1,new_page,inst_14742,inst_14743,inst_14744,inst_14745,inst_14746,inst_14747,inst_14748,inst_14749,inst_14750,inst_14751,state_val_14761,c__6596__auto__,sort_ch,load_ch,___$1))
);
return om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"link_ids","link_ids",-791411950),((function (resp__$1,new_page,inst_14742,inst_14743,inst_14744,inst_14745,inst_14746,inst_14747,inst_14748,inst_14749,inst_14750,inst_14751,state_val_14761,c__6596__auto__,sort_ch,load_ch,___$1){
return (function (p1__14622_SHARP_){return cljs.core.into.call(null,p1__14622_SHARP_,new cljs.core.Keyword(null,"new_rel_ids","new_rel_ids",701283960).cljs$core$IFn$_invoke$arity$1(resp__$1));
});})(resp__$1,new_page,inst_14742,inst_14743,inst_14744,inst_14745,inst_14746,inst_14747,inst_14748,inst_14749,inst_14750,inst_14751,state_val_14761,c__6596__auto__,sort_ch,load_ch,___$1))
);
}
});
;})(new_page,inst_14742,inst_14743,inst_14744,inst_14745,inst_14746,inst_14747,inst_14748,inst_14749,inst_14750,inst_14751,state_val_14761,c__6596__auto__,sort_ch,load_ch,___$1))
})();var inst_14753 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_14751,inst_14752];var inst_14754 = cljs.core.PersistentHashMap.fromArrays(inst_14746,inst_14753);var inst_14755 = ajax.core.GET.call(null,inst_14745,inst_14754);var state_14760__$1 = (function (){var statearr_14762 = state_14760;(statearr_14762[(7)] = inst_14755);
(statearr_14762[(8)] = inst_14743);
return statearr_14762;
})();var statearr_14763_14779 = state_14760__$1;(statearr_14763_14779[(2)] = null);
(statearr_14763_14779[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14761 === (3)))
{var inst_14758 = (state_14760[(2)]);var state_14760__$1 = state_14760;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14760__$1,inst_14758);
} else
{if((state_val_14761 === (2)))
{var state_14760__$1 = state_14760;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14760__$1,(4),load_ch);
} else
{if((state_val_14761 === (1)))
{var state_14760__$1 = state_14760;var statearr_14764_14780 = state_14760__$1;(statearr_14764_14780[(2)] = null);
(statearr_14764_14780[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6596__auto__,sort_ch,load_ch,___$1))
;return ((function (switch__6581__auto__,c__6596__auto__,sort_ch,load_ch,___$1){
return (function() {
var state_machine__6582__auto__ = null;
var state_machine__6582__auto____0 = (function (){var statearr_14768 = [null,null,null,null,null,null,null,null,null];(statearr_14768[(0)] = state_machine__6582__auto__);
(statearr_14768[(1)] = (1));
return statearr_14768;
});
var state_machine__6582__auto____1 = (function (state_14760){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_14760);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e14769){if((e14769 instanceof Object))
{var ex__6585__auto__ = e14769;var statearr_14770_14781 = state_14760;(statearr_14770_14781[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14760);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14769;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14782 = state_14760;
state_14760 = G__14782;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_14760){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_14760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto__,sort_ch,load_ch,___$1))
})();var state__6598__auto__ = (function (){var statearr_14771 = f__6597__auto__.call(null);(statearr_14771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto__);
return statearr_14771;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto__,sort_ch,load_ch,___$1))
);
return c__6596__auto__;
});
openthink.views.links.t14698.prototype.om$core$IInitState$ = true;
openthink.views.links.t14698.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sort-chan","sort-chan",-493870758),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"load-chan","load-chan",342107614),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795),new cljs.core.Keyword(null,"page","page",849072397),(0)], null);
});
openthink.views.links.t14698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14700){var self__ = this;
var _14700__$1 = this;return self__.meta14699;
});
openthink.views.links.t14698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14700,meta14699__$1){var self__ = this;
var _14700__$1 = this;return (new openthink.views.links.t14698(self__.owner,self__.data,self__.links_view,meta14699__$1));
});
openthink.views.links.__GT_t14698 = (function __GT_t14698(owner__$1,data__$1,links_view__$1,meta14699){return (new openthink.views.links.t14698(owner__$1,data__$1,links_view__$1,meta14699));
});
}
return (new openthink.views.links.t14698(owner,data,links_view,null));
});
openthink.views.links.links_section = (function links_section(data,owner){if(typeof openthink.views.links.t14786 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.views.links.t14786 = (function (owner,data,links_section,meta14787){
this.owner = owner;
this.data = data;
this.links_section = links_section;
this.meta14787 = meta14787;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.links.t14786.cljs$lang$type = true;
openthink.views.links.t14786.cljs$lang$ctorStr = "openthink.views.links/t14786";
openthink.views.links.t14786.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.views.links/t14786");
});
openthink.views.links.t14786.prototype.om$core$IRender$ = true;
openthink.views.links.t14786.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;cljs.core.println.call(null,"links view");
return React.DOM.div({"className": "children-section medium-5 columns"},sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.links.links_view,self__.data)));
});
openthink.views.links.t14786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14788){var self__ = this;
var _14788__$1 = this;return self__.meta14787;
});
openthink.views.links.t14786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14788,meta14787__$1){var self__ = this;
var _14788__$1 = this;return (new openthink.views.links.t14786(self__.owner,self__.data,self__.links_section,meta14787__$1));
});
openthink.views.links.__GT_t14786 = (function __GT_t14786(owner__$1,data__$1,links_section__$1,meta14787){return (new openthink.views.links.t14786(owner__$1,data__$1,links_section__$1,meta14787));
});
}
return (new openthink.views.links.t14786(owner,data,links_section,null));
});

//# sourceMappingURL=links.js.map