// Compiled by ClojureScript 0.0-2511
goog.provide('openthink.views.post');
goog.require('cljs.core');
goog.require('markdown.core');
goog.require('sablono.core');
goog.require('openthink.cursors');
goog.require('openthink.utils');
goog.require('om.core');
goog.require('openthink.views.activity');
openthink.views.post.post_view = (function post_view(data,owner){
if(typeof openthink.views.post.t23994 !== 'undefined'){
} else {

/**
* @constructor
*/
openthink.views.post.t23994 = (function (owner,data,post_view,meta23995){
this.owner = owner;
this.data = data;
this.post_view = post_view;
this.meta23995 = meta23995;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.post.t23994.prototype.om$core$IRender$ = true;

openthink.views.post.t23994.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var post = openthink.cursors.current_post.call(null);
return React.DOM.div({"className": "post row"},React.DOM.h4(null,(function (){var attrs23997 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(post);
return cljs.core.apply.call(null,React.DOM.strong,((cljs.core.map_QMARK_.call(null,attrs23997))?sablono.interpreter.attributes.call(null,attrs23997):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23997))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23997)], null))));
})()),React.DOM.hr(null),React.DOM.p({"dangerouslySetInnerHTML": {"__html": markdown.core.md__GT_html.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(post))}}));
});

openthink.views.post.t23994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23996){
var self__ = this;
var _23996__$1 = this;
return self__.meta23995;
});

openthink.views.post.t23994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23996,meta23995__$1){
var self__ = this;
var _23996__$1 = this;
return (new openthink.views.post.t23994(self__.owner,self__.data,self__.post_view,meta23995__$1));
});

openthink.views.post.t23994.cljs$lang$type = true;

openthink.views.post.t23994.cljs$lang$ctorStr = "openthink.views.post/t23994";

openthink.views.post.t23994.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"openthink.views.post/t23994");
});

openthink.views.post.__GT_t23994 = (function __GT_t23994(owner__$1,data__$1,post_view__$1,meta23995){
return (new openthink.views.post.t23994(owner__$1,data__$1,post_view__$1,meta23995));
});

}

return (new openthink.views.post.t23994(owner,data,post_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),64,new cljs.core.Keyword(null,"end-line","end-line",1837326455),18,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),10,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/src/openthink/views/post.cljs"], null)));
});
openthink.views.post.post_section = (function post_section(data,owner){
if(typeof openthink.views.post.t24005 !== 'undefined'){
} else {

/**
* @constructor
*/
openthink.views.post.t24005 = (function (owner,data,post_section,meta24006){
this.owner = owner;
this.data = data;
this.post_section = post_section;
this.meta24006 = meta24006;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.post.t24005.prototype.om$core$IRender$ = true;

openthink.views.post.t24005.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.core.println.call(null,"post view");

return React.DOM.div({"className": "post-section medium-7 columns"},sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.post.post_view,self__.data)),sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.activity.actions_view,self__.data)));
});

openthink.views.post.t24005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24007){
var self__ = this;
var _24007__$1 = this;
return self__.meta24006;
});

openthink.views.post.t24005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24007,meta24006__$1){
var self__ = this;
var _24007__$1 = this;
return (new openthink.views.post.t24005(self__.owner,self__.data,self__.post_section,meta24006__$1));
});

openthink.views.post.t24005.cljs$lang$type = true;

openthink.views.post.t24005.cljs$lang$ctorStr = "openthink.views.post/t24005";

openthink.views.post.t24005.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"openthink.views.post/t24005");
});

openthink.views.post.__GT_t24005 = (function __GT_t24005(owner__$1,data__$1,post_section__$1,meta24006){
return (new openthink.views.post.t24005(owner__$1,data__$1,post_section__$1,meta24006));
});

}

return (new openthink.views.post.t24005(owner,data,post_section,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),27,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),21,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/src/openthink/views/post.cljs"], null)));
});

//# sourceMappingURL=post.js.map