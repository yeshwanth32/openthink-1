// Compiled by ClojureScript 0.0-2511
goog.provide('openthink.views.links');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('openthink.state');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('openthink.cursors');
goog.require('openthink.utils');
goog.require('om.core');
goog.require('clojure.string');
openthink.views.links.vote_btn = (function vote_btn(rel,owner,p__31864){
var map__31869 = p__31864;
var map__31869__$1 = ((cljs.core.seq_QMARK_.call(null,map__31869))?cljs.core.apply.call(null,cljs.core.hash_map,map__31869):map__31869);
var opts = map__31869__$1;
var vote_txt = cljs.core.get.call(null,map__31869__$1,new cljs.core.Keyword(null,"vote-txt","vote-txt",476450142));
var vote_value = cljs.core.get.call(null,map__31869__$1,new cljs.core.Keyword(null,"vote-value","vote-value",-814557147));
if(typeof openthink.views.links.t31870 !== 'undefined'){
} else {

/**
* @constructor
*/
openthink.views.links.t31870 = (function (vote_value,vote_txt,opts,map__31869,p__31864,owner,rel,vote_btn,meta31871){
this.vote_value = vote_value;
this.vote_txt = vote_txt;
this.opts = opts;
this.map__31869 = map__31869;
this.p__31864 = p__31864;
this.owner = owner;
this.rel = rel;
this.vote_btn = vote_btn;
this.meta31871 = meta31871;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.links.t31870.prototype.om$core$IRender$ = true;

openthink.views.links.t31870.prototype.om$core$IRender$render$arity$1 = ((function (map__31869,map__31869__$1,opts,vote_txt,vote_value){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.a({"href": "#", "onClick": ((function (this$__$1,map__31869,map__31869__$1,opts,vote_txt,vote_value){
return (function (_){
ajax.core.POST.call(null,"/vote",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, ["value",self__.vote_value,"rel_id",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.rel)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (this$__$1,map__31869,map__31869__$1,opts,vote_txt,vote_value){
return (function (resp){
cljs.core.println.call(null,resp);

var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);
if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032))){
return null;
} else {
return om.core.update_BANG_.call(null,self__.rel,new cljs.core.Keyword(null,"rel","rel",1378823488).cljs$core$IFn$_invoke$arity$1(resp__$1));
}
});})(this$__$1,map__31869,map__31869__$1,opts,vote_txt,vote_value))
], null));

return false;
});})(this$__$1,map__31869,map__31869__$1,opts,vote_txt,vote_value))
},sablono.interpreter.interpret.call(null,self__.vote_txt));
});})(map__31869,map__31869__$1,opts,vote_txt,vote_value))
;

openthink.views.links.t31870.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__31869,map__31869__$1,opts,vote_txt,vote_value){
return (function (_31872){
var self__ = this;
var _31872__$1 = this;
return self__.meta31871;
});})(map__31869,map__31869__$1,opts,vote_txt,vote_value))
;

openthink.views.links.t31870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__31869,map__31869__$1,opts,vote_txt,vote_value){
return (function (_31872,meta31871__$1){
var self__ = this;
var _31872__$1 = this;
return (new openthink.views.links.t31870(self__.vote_value,self__.vote_txt,self__.opts,self__.map__31869,self__.p__31864,self__.owner,self__.rel,self__.vote_btn,meta31871__$1));
});})(map__31869,map__31869__$1,opts,vote_txt,vote_value))
;

openthink.views.links.t31870.cljs$lang$type = true;

openthink.views.links.t31870.cljs$lang$ctorStr = "openthink.views.links/t31870";

openthink.views.links.t31870.cljs$lang$ctorPrWriter = ((function (map__31869,map__31869__$1,opts,vote_txt,vote_value){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"openthink.views.links/t31870");
});})(map__31869,map__31869__$1,opts,vote_txt,vote_value))
;

openthink.views.links.__GT_t31870 = ((function (map__31869,map__31869__$1,opts,vote_txt,vote_value){
return (function __GT_t31870(vote_value__$1,vote_txt__$1,opts__$1,map__31869__$2,p__31864__$1,owner__$1,rel__$1,vote_btn__$1,meta31871){
return (new openthink.views.links.t31870(vote_value__$1,vote_txt__$1,opts__$1,map__31869__$2,p__31864__$1,owner__$1,rel__$1,vote_btn__$1,meta31871));
});})(map__31869,map__31869__$1,opts,vote_txt,vote_value))
;

}

return (new openthink.views.links.t31870(vote_value,vote_txt,opts,map__31869__$1,p__31864,owner,rel,vote_btn,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),26,new cljs.core.Keyword(null,"end-line","end-line",1837326455),28,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/src/openthink/views/links.cljs"], null)));
});
openthink.views.links.mock_link = (function mock_link(dom_bit){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"child large-12 columns"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"text-center"], null),dom_bit], null)], null);
});
openthink.views.links.link_view = (function link_view(rel,owner){
if(typeof openthink.views.links.t31881 !== 'undefined'){
} else {

/**
* @constructor
*/
openthink.views.links.t31881 = (function (owner,rel,link_view,meta31882){
this.owner = owner;
this.rel = rel;
this.link_view = link_view;
this.meta31882 = meta31882;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.links.t31881.prototype.om$core$IRender$ = true;

openthink.views.links.t31881.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var link_post = openthink.cursors.post_from_rel.call(null,self__.rel);
return React.DOM.div({"className": "child large-12 columns"},React.DOM.div({"className": "row"},React.DOM.div({"className": "large-2 columns"},React.DOM.div({"className": "row"},React.DOM.div({"className": "small-4 columns", "style": cljs.core.clj__GT_js.call(null,{"padding": "0px"})},(function (){var attrs31884 = om.core.build.call(null,openthink.views.links.vote_btn,self__.rel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vote-value","vote-value",-814557147),(1),new cljs.core.Keyword(null,"vote-txt","vote-txt",476450142),"\u25B2"], null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("upvote-"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.rel))].join('')], null));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs31884))?sablono.interpreter.attributes.call(null,attrs31884):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31884))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31884)], null))));
})(),(function (){var attrs31885 = om.core.build.call(null,openthink.views.links.vote_btn,self__.rel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vote-value","vote-value",-814557147),(-1),new cljs.core.Keyword(null,"vote-txt","vote-txt",476450142),"\u25BC"], null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("downvote-"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.rel))].join('')], null));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs31885))?sablono.interpreter.attributes.call(null,attrs31885):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31885))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31885)], null))));
})()),React.DOM.div({"className": "small-8 columns", "style": cljs.core.clj__GT_js.call(null,{"padding": "0px"})},(function (){var attrs31886 = (function (){var or__3638__auto__ = new cljs.core.Keyword(null,"votecount","votecount",425206940).cljs$core$IFn$_invoke$arity$1(self__.rel);
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return (0);
}
})();
return cljs.core.apply.call(null,React.DOM.h4,((cljs.core.map_QMARK_.call(null,attrs31886))?sablono.interpreter.attributes.call(null,attrs31886):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31886))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31886)], null))));
})()))),React.DOM.div({"className": "large-10 columns"},React.DOM.a({"href": [cljs.core.str("/post/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(link_post))].join('')},React.DOM.strong({"className": "child-title"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(link_post)))),(function (){var attrs31887 = [cljs.core.str(cljs.core.subs.call(null,clojure.string.replace.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(link_post),/\\n|\n/," "),(0),(80))),cljs.core.str((((cljs.core.count.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(link_post)) > (80)))?"...":""))].join('');
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs31887))?sablono.interpreter.attributes.call(null,attrs31887):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31887))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31887)], null))));
})(),React.DOM.span({"className": "link-by"},"linked by ",(function (){var attrs31888 = cljs.core.get_in.call(null,self__.rel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linked_by","linked_by",-1836719993),new cljs.core.Keyword(null,"username","username",1605666410)], null));
return cljs.core.apply.call(null,React.DOM.strong,((cljs.core.map_QMARK_.call(null,attrs31888))?sablono.interpreter.attributes.call(null,attrs31888):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31888))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31888)], null))));
})()," on ",sablono.interpreter.interpret.call(null,openthink.utils.date.call(null,new cljs.core.Keyword(null,"time_linked","time_linked",1045859207).cljs$core$IFn$_invoke$arity$1(self__.rel)))))));
});

openthink.views.links.t31881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31883){
var self__ = this;
var _31883__$1 = this;
return self__.meta31882;
});

openthink.views.links.t31881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31883,meta31882__$1){
var self__ = this;
var _31883__$1 = this;
return (new openthink.views.links.t31881(self__.owner,self__.rel,self__.link_view,meta31882__$1));
});

openthink.views.links.t31881.cljs$lang$type = true;

openthink.views.links.t31881.cljs$lang$ctorStr = "openthink.views.links/t31881";

openthink.views.links.t31881.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"openthink.views.links/t31881");
});

openthink.views.links.__GT_t31881 = (function __GT_t31881(owner__$1,rel__$1,link_view__$1,meta31882){
return (new openthink.views.links.t31881(owner__$1,rel__$1,link_view__$1,meta31882));
});

}

return (new openthink.views.links.t31881(owner,rel,link_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),57,new cljs.core.Keyword(null,"end-line","end-line",1837326455),62,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),35,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/src/openthink/views/links.cljs"], null)));
});
openthink.views.links.sort_option_attrs = (function sort_option_attrs(sort_value,selected_value){
var attrs = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),sort_value], null);
if(cljs.core._EQ_.call(null,sort_value,selected_value)){
return cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"selected","selected",574897764),"selected");
} else {
return attrs;
}
});
openthink.views.links.links_view = (function links_view(data,owner){
if(typeof openthink.views.links.t31969 !== 'undefined'){
} else {

/**
* @constructor
*/
openthink.views.links.t31969 = (function (owner,data,links_view,meta31970){
this.owner = owner;
this.data = data;
this.links_view = links_view;
this.meta31970 = meta31970;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.links.t31969.prototype.om$core$IRender$ = true;

openthink.views.links.t31969.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var link_ids = new cljs.core.Keyword(null,"link_ids","link_ids",-791411950).cljs$core$IFn$_invoke$arity$1(self__.data);
var link_rels = openthink.utils.select_values.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(self__.data),link_ids);
return React.DOM.div({"className": "children-view"},React.DOM.div({"className": "row reply-action"},React.DOM.button({"onClick": ((function (link_ids,link_rels,___$1){
return (function (){
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"reply-to","reply-to",-145674792),new cljs.core.Keyword(null,"current_post","current_post",2072811381).cljs$core$IFn$_invoke$arity$1(self__.data));

return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.Keyword(null,"new-post","new-post",-1808203791));
});})(link_ids,link_rels,___$1))
, "className": "button expand large reply-btn"},"Link new Post")),((cljs.core.empty_QMARK_.call(null,link_rels))?React.DOM.div(null,"No posts have been linked yet"):React.DOM.span(null,React.DOM.div({"className": "row child-sort-section"},sablono.interpreter.interpret.call(null,(function (){var sval = new cljs.core.Keyword(null,"sort-value","sort-value",-585546274).cljs$core$IFn$_invoke$arity$1(self__.data);
var sort_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"sort-chan","sort-chan",-493870758));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (sval,sort_ch,link_ids,link_rels,___$1){
return (function (p1__31894_SHARP_){
return cljs.core.async.put_BANG_.call(null,sort_ch,p1__31894_SHARP_.target.value);
});})(sval,sort_ch,link_ids,link_rels,___$1))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),openthink.views.links.sort_option_attrs.call(null,"top",sval),"Top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),openthink.views.links.sort_option_attrs.call(null,"new",sval),"Newest"], null)], null);
})())),cljs.core.into_array.call(null,(function (){var iter__4394__auto__ = ((function (link_ids,link_rels,___$1){
return (function iter__31974(s__31975){
return (new cljs.core.LazySeq(null,((function (link_ids,link_rels,___$1){
return (function (){
var s__31975__$1 = s__31975;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31975__$1);
if(temp__4126__auto__){
var s__31975__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31975__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__31975__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__31977 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__31976 = (0);
while(true){
if((i__31976 < size__4393__auto__)){
var link = cljs.core._nth.call(null,c__4392__auto__,i__31976);
cljs.core.chunk_append.call(null,b__31977,React.DOM.div({"className": "row"},sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.links.link_view,link))));

var G__32043 = (i__31976 + (1));
i__31976 = G__32043;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31977),iter__31974.call(null,cljs.core.chunk_rest.call(null,s__31975__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31977),null);
}
} else {
var link = cljs.core.first.call(null,s__31975__$2);
return cljs.core.cons.call(null,React.DOM.div({"className": "row"},sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.links.link_view,link))),iter__31974.call(null,cljs.core.rest.call(null,s__31975__$2)));
}
} else {
return null;
}
break;
}
});})(link_ids,link_rels,___$1))
,null,null));
});})(link_ids,link_rels,___$1))
;
return iter__4394__auto__.call(null,link_rels);
})()),sablono.interpreter.interpret.call(null,(function (){var G__31978 = (((om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099)) instanceof cljs.core.Keyword))?om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099)).fqn:null);
switch (G__31978) {
case "ready":
var page = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"page","page",849072397));
if((cljs.core.count.call(null,link_rels) >= ((8) * (page + (1))))){
return openthink.views.links.mock_link.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (page,G__31978,link_ids,link_rels,___$1){
return (function (___$2){
cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614)),(page + (1)));

return false;
});})(page,G__31978,link_ids,link_rels,___$1))
], null),"\u25BC Load more posts \u25BC"], null));
} else {
return null;
}

break;
case "loading":
return openthink.views.links.mock_link.call(null,"Loading...");

break;
case "sorting":
return openthink.views.links.mock_link.call(null,"Sorting...");

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099)))].join('')));

}
})()))));
});

openthink.views.links.t31969.prototype.om$core$IWillMount$ = true;

openthink.views.links.t31969.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var sort_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"sort-chan","sort-chan",-493870758));
var load_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));
var c__8633__auto___32045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto___32045,sort_ch,load_ch,___$1){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto___32045,sort_ch,load_ch,___$1){
return (function (state_31999){
var state_val_32000 = (state_31999[(1)]);
if((state_val_32000 === (4))){
var inst_31981 = (state_31999[(2)]);
var inst_31982 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"sorting","sorting",622249690));
var inst_31983 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"page","page",849072397),(0));
var inst_31984 = om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"sort-value","sort-value",-585546274),inst_31981);
var inst_31985 = new cljs.core.Keyword(null,"current_post","current_post",2072811381).cljs$core$IFn$_invoke$arity$1(self__.data);
var inst_31986 = [cljs.core.str("/links/"),cljs.core.str(inst_31985)].join('');
var inst_31987 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];
var inst_31988 = ["sort"];
var inst_31989 = [inst_31981];
var inst_31990 = cljs.core.PersistentHashMap.fromArrays(inst_31988,inst_31989);
var inst_31991 = (function (){var new_sort_val = inst_31981;
return ((function (new_sort_val,inst_31981,inst_31982,inst_31983,inst_31984,inst_31985,inst_31986,inst_31987,inst_31988,inst_31989,inst_31990,state_val_32000,c__8633__auto___32045,sort_ch,load_ch,___$1){
return (function (resp){
cljs.core.println.call(null,"sort returned");

var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);
cljs.core.println.call(null,resp__$1);

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795));

if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032))){
return null;
} else {
om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"posts","posts",760043164),((function (resp__$1,new_sort_val,inst_31981,inst_31982,inst_31983,inst_31984,inst_31985,inst_31986,inst_31987,inst_31988,inst_31989,inst_31990,state_val_32000,c__8633__auto___32045,sort_ch,load_ch,___$1){
return (function (p1__31889_SHARP_){
return cljs.core.merge.call(null,p1__31889_SHARP_,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(resp__$1));
});})(resp__$1,new_sort_val,inst_31981,inst_31982,inst_31983,inst_31984,inst_31985,inst_31986,inst_31987,inst_31988,inst_31989,inst_31990,state_val_32000,c__8633__auto___32045,sort_ch,load_ch,___$1))
);

om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"rels","rels",1770187185),((function (resp__$1,new_sort_val,inst_31981,inst_31982,inst_31983,inst_31984,inst_31985,inst_31986,inst_31987,inst_31988,inst_31989,inst_31990,state_val_32000,c__8633__auto___32045,sort_ch,load_ch,___$1){
return (function (p1__31890_SHARP_){
return cljs.core.merge.call(null,p1__31890_SHARP_,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(resp__$1));
});})(resp__$1,new_sort_val,inst_31981,inst_31982,inst_31983,inst_31984,inst_31985,inst_31986,inst_31987,inst_31988,inst_31989,inst_31990,state_val_32000,c__8633__auto___32045,sort_ch,load_ch,___$1))
);

return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"link_ids","link_ids",-791411950),new cljs.core.Keyword(null,"new_rel_ids","new_rel_ids",701283960).cljs$core$IFn$_invoke$arity$1(resp__$1));
}
});
;})(new_sort_val,inst_31981,inst_31982,inst_31983,inst_31984,inst_31985,inst_31986,inst_31987,inst_31988,inst_31989,inst_31990,state_val_32000,c__8633__auto___32045,sort_ch,load_ch,___$1))
})();
var inst_31992 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_31990,inst_31991];
var inst_31993 = cljs.core.PersistentHashMap.fromArrays(inst_31987,inst_31992);
var inst_31994 = ajax.core.GET.call(null,inst_31986,inst_31993);
var state_31999__$1 = (function (){var statearr_32001 = state_31999;
(statearr_32001[(7)] = inst_31982);

(statearr_32001[(8)] = inst_31984);

(statearr_32001[(9)] = inst_31983);

(statearr_32001[(10)] = inst_31994);

return statearr_32001;
})();
var statearr_32002_32046 = state_31999__$1;
(statearr_32002_32046[(2)] = null);

(statearr_32002_32046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (3))){
var inst_31997 = (state_31999[(2)]);
var state_31999__$1 = state_31999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31999__$1,inst_31997);
} else {
if((state_val_32000 === (2))){
var state_31999__$1 = state_31999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31999__$1,(4),sort_ch);
} else {
if((state_val_32000 === (1))){
var state_31999__$1 = state_31999;
var statearr_32003_32047 = state_31999__$1;
(statearr_32003_32047[(2)] = null);

(statearr_32003_32047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__8633__auto___32045,sort_ch,load_ch,___$1))
;
return ((function (switch__8577__auto__,c__8633__auto___32045,sort_ch,load_ch,___$1){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_32007 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32007[(0)] = state_machine__8578__auto__);

(statearr_32007[(1)] = (1));

return statearr_32007;
});
var state_machine__8578__auto____1 = (function (state_31999){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_31999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e32008){if((e32008 instanceof Object)){
var ex__8581__auto__ = e32008;
var statearr_32009_32048 = state_31999;
(statearr_32009_32048[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32049 = state_31999;
state_31999 = G__32049;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_31999){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_31999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto___32045,sort_ch,load_ch,___$1))
})();
var state__8635__auto__ = (function (){var statearr_32010 = f__8634__auto__.call(null);
(statearr_32010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto___32045);

return statearr_32010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto___32045,sort_ch,load_ch,___$1))
);


var c__8633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto__,sort_ch,load_ch,___$1){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto__,sort_ch,load_ch,___$1){
return (function (state_32031){
var state_val_32032 = (state_32031[(1)]);
if((state_val_32032 === (4))){
var inst_32013 = (state_32031[(2)]);
var inst_32014 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"loading","loading",-737050189));
var inst_32015 = new cljs.core.Keyword(null,"current_post","current_post",2072811381).cljs$core$IFn$_invoke$arity$1(self__.data);
var inst_32016 = [cljs.core.str("/links/"),cljs.core.str(inst_32015)].join('');
var inst_32017 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];
var inst_32018 = ["sort","page"];
var inst_32019 = cljs.core.deref.call(null,openthink.state.app_state);
var inst_32020 = new cljs.core.Keyword(null,"sort-value","sort-value",-585546274).cljs$core$IFn$_invoke$arity$1(inst_32019);
var inst_32021 = [inst_32020,inst_32013];
var inst_32022 = cljs.core.PersistentHashMap.fromArrays(inst_32018,inst_32021);
var inst_32023 = (function (){var new_page = inst_32013;
return ((function (new_page,inst_32013,inst_32014,inst_32015,inst_32016,inst_32017,inst_32018,inst_32019,inst_32020,inst_32021,inst_32022,state_val_32032,c__8633__auto__,sort_ch,load_ch,___$1){
return (function (resp){
cljs.core.println.call(null,"load posts returned");

var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);
cljs.core.println.call(null,resp__$1);

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795));

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"page","page",849072397),new_page);

if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032))){
return null;
} else {
om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"posts","posts",760043164),((function (resp__$1,new_page,inst_32013,inst_32014,inst_32015,inst_32016,inst_32017,inst_32018,inst_32019,inst_32020,inst_32021,inst_32022,state_val_32032,c__8633__auto__,sort_ch,load_ch,___$1){
return (function (p1__31891_SHARP_){
return cljs.core.merge.call(null,p1__31891_SHARP_,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(resp__$1));
});})(resp__$1,new_page,inst_32013,inst_32014,inst_32015,inst_32016,inst_32017,inst_32018,inst_32019,inst_32020,inst_32021,inst_32022,state_val_32032,c__8633__auto__,sort_ch,load_ch,___$1))
);

om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"rels","rels",1770187185),((function (resp__$1,new_page,inst_32013,inst_32014,inst_32015,inst_32016,inst_32017,inst_32018,inst_32019,inst_32020,inst_32021,inst_32022,state_val_32032,c__8633__auto__,sort_ch,load_ch,___$1){
return (function (p1__31892_SHARP_){
return cljs.core.merge.call(null,p1__31892_SHARP_,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(resp__$1));
});})(resp__$1,new_page,inst_32013,inst_32014,inst_32015,inst_32016,inst_32017,inst_32018,inst_32019,inst_32020,inst_32021,inst_32022,state_val_32032,c__8633__auto__,sort_ch,load_ch,___$1))
);

return om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"link_ids","link_ids",-791411950),((function (resp__$1,new_page,inst_32013,inst_32014,inst_32015,inst_32016,inst_32017,inst_32018,inst_32019,inst_32020,inst_32021,inst_32022,state_val_32032,c__8633__auto__,sort_ch,load_ch,___$1){
return (function (p1__31893_SHARP_){
return cljs.core.into.call(null,p1__31893_SHARP_,new cljs.core.Keyword(null,"new_rel_ids","new_rel_ids",701283960).cljs$core$IFn$_invoke$arity$1(resp__$1));
});})(resp__$1,new_page,inst_32013,inst_32014,inst_32015,inst_32016,inst_32017,inst_32018,inst_32019,inst_32020,inst_32021,inst_32022,state_val_32032,c__8633__auto__,sort_ch,load_ch,___$1))
);
}
});
;})(new_page,inst_32013,inst_32014,inst_32015,inst_32016,inst_32017,inst_32018,inst_32019,inst_32020,inst_32021,inst_32022,state_val_32032,c__8633__auto__,sort_ch,load_ch,___$1))
})();
var inst_32024 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_32022,inst_32023];
var inst_32025 = cljs.core.PersistentHashMap.fromArrays(inst_32017,inst_32024);
var inst_32026 = ajax.core.GET.call(null,inst_32016,inst_32025);
var state_32031__$1 = (function (){var statearr_32033 = state_32031;
(statearr_32033[(7)] = inst_32014);

(statearr_32033[(8)] = inst_32026);

return statearr_32033;
})();
var statearr_32034_32050 = state_32031__$1;
(statearr_32034_32050[(2)] = null);

(statearr_32034_32050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (3))){
var inst_32029 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32031__$1,inst_32029);
} else {
if((state_val_32032 === (2))){
var state_32031__$1 = state_32031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32031__$1,(4),load_ch);
} else {
if((state_val_32032 === (1))){
var state_32031__$1 = state_32031;
var statearr_32035_32051 = state_32031__$1;
(statearr_32035_32051[(2)] = null);

(statearr_32035_32051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__8633__auto__,sort_ch,load_ch,___$1))
;
return ((function (switch__8577__auto__,c__8633__auto__,sort_ch,load_ch,___$1){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_32039 = [null,null,null,null,null,null,null,null,null];
(statearr_32039[(0)] = state_machine__8578__auto__);

(statearr_32039[(1)] = (1));

return statearr_32039;
});
var state_machine__8578__auto____1 = (function (state_32031){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_32031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e32040){if((e32040 instanceof Object)){
var ex__8581__auto__ = e32040;
var statearr_32041_32052 = state_32031;
(statearr_32041_32052[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32053 = state_32031;
state_32031 = G__32053;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_32031){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_32031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto__,sort_ch,load_ch,___$1))
})();
var state__8635__auto__ = (function (){var statearr_32042 = f__8634__auto__.call(null);
(statearr_32042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto__);

return statearr_32042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto__,sort_ch,load_ch,___$1))
);

return c__8633__auto__;
});

openthink.views.links.t31969.prototype.om$core$IInitState$ = true;

openthink.views.links.t31969.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sort-chan","sort-chan",-493870758),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"load-chan","load-chan",342107614),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795),new cljs.core.Keyword(null,"page","page",849072397),(0)], null);
});

openthink.views.links.t31969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31971){
var self__ = this;
var _31971__$1 = this;
return self__.meta31970;
});

openthink.views.links.t31969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31971,meta31970__$1){
var self__ = this;
var _31971__$1 = this;
return (new openthink.views.links.t31969(self__.owner,self__.data,self__.links_view,meta31970__$1));
});

openthink.views.links.t31969.cljs$lang$type = true;

openthink.views.links.t31969.cljs$lang$ctorStr = "openthink.views.links/t31969";

openthink.views.links.t31969.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"openthink.views.links/t31969");
});

openthink.views.links.__GT_t31969 = (function __GT_t31969(owner__$1,data__$1,links_view__$1,meta31970){
return (new openthink.views.links.t31969(owner__$1,data__$1,links_view__$1,meta31970));
});

}

return (new openthink.views.links.t31969(owner,data,links_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),67,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),71,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/src/openthink/views/links.cljs"], null)));
});
openthink.views.links.links_section = (function links_section(data,owner){
if(typeof openthink.views.links.t32057 !== 'undefined'){
} else {

/**
* @constructor
*/
openthink.views.links.t32057 = (function (owner,data,links_section,meta32058){
this.owner = owner;
this.data = data;
this.links_section = links_section;
this.meta32058 = meta32058;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.links.t32057.prototype.om$core$IRender$ = true;

openthink.views.links.t32057.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.core.println.call(null,"links view");

return React.DOM.div({"className": "children-section medium-5 columns"},sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.links.links_view,self__.data)));
});

openthink.views.links.t32057.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32059){
var self__ = this;
var _32059__$1 = this;
return self__.meta32058;
});

openthink.views.links.t32057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32059,meta32058__$1){
var self__ = this;
var _32059__$1 = this;
return (new openthink.views.links.t32057(self__.owner,self__.data,self__.links_section,meta32058__$1));
});

openthink.views.links.t32057.cljs$lang$type = true;

openthink.views.links.t32057.cljs$lang$ctorStr = "openthink.views.links/t32057";

openthink.views.links.t32057.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"openthink.views.links/t32057");
});

openthink.views.links.__GT_t32057 = (function __GT_t32057(owner__$1,data__$1,links_section__$1,meta32058){
return (new openthink.views.links.t32057(owner__$1,data__$1,links_section__$1,meta32058));
});

}

return (new openthink.views.links.t32057(owner,data,links_section,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),44,new cljs.core.Keyword(null,"end-line","end-line",1837326455),162,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),157,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/src/openthink/views/links.cljs"], null)));
});

//# sourceMappingURL=links.js.map