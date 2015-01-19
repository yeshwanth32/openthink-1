// Compiled by ClojureScript 0.0-2371
goog.provide('openthink.views.post');
goog.require('cljs.core');
goog.require('openthink.views.activity');
goog.require('openthink.views.activity');
goog.require('openthink.cursors');
goog.require('openthink.cursors');
goog.require('openthink.utils');
goog.require('openthink.utils');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
openthink.views.post.post_view = (function post_view(data,owner){if(typeof openthink.views.post.t14796 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.views.post.t14796 = (function (owner,data,post_view,meta14797){
this.owner = owner;
this.data = data;
this.post_view = post_view;
this.meta14797 = meta14797;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.post.t14796.cljs$lang$type = true;
openthink.views.post.t14796.cljs$lang$ctorStr = "openthink.views.post/t14796";
openthink.views.post.t14796.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.views.post/t14796");
});
openthink.views.post.t14796.prototype.om$core$IRender$ = true;
openthink.views.post.t14796.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var post = openthink.cursors.current_post.call(null);return React.DOM.div({"className": "post row"},React.DOM.h4(null,(function (){var attrs14799 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(post);return cljs.core.apply.call(null,React.DOM.strong,((cljs.core.map_QMARK_.call(null,attrs14799))?sablono.interpreter.attributes.call(null,attrs14799):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14799))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14799)], null))));
})()),React.DOM.hr(null),(function (){var attrs14802 = openthink.utils.render_text.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(post));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs14802))?sablono.interpreter.attributes.call(null,attrs14802):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14802))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14802)], null))));
})());
});
openthink.views.post.t14796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14798){var self__ = this;
var _14798__$1 = this;return self__.meta14797;
});
openthink.views.post.t14796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14798,meta14797__$1){var self__ = this;
var _14798__$1 = this;return (new openthink.views.post.t14796(self__.owner,self__.data,self__.post_view,meta14797__$1));
});
openthink.views.post.__GT_t14796 = (function __GT_t14796(owner__$1,data__$1,post_view__$1,meta14797){return (new openthink.views.post.t14796(owner__$1,data__$1,post_view__$1,meta14797));
});
}
return (new openthink.views.post.t14796(owner,data,post_view,null));
});
openthink.views.post.post_section = (function post_section(data,owner){if(typeof openthink.views.post.t14806 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.views.post.t14806 = (function (owner,data,post_section,meta14807){
this.owner = owner;
this.data = data;
this.post_section = post_section;
this.meta14807 = meta14807;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.post.t14806.cljs$lang$type = true;
openthink.views.post.t14806.cljs$lang$ctorStr = "openthink.views.post/t14806";
openthink.views.post.t14806.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.views.post/t14806");
});
openthink.views.post.t14806.prototype.om$core$IRender$ = true;
openthink.views.post.t14806.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;cljs.core.println.call(null,"post view");
return React.DOM.div({"className": "post-section medium-7 columns"},sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.post.post_view,self__.data)),sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.activity.actions_view,self__.data)));
});
openthink.views.post.t14806.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14808){var self__ = this;
var _14808__$1 = this;return self__.meta14807;
});
openthink.views.post.t14806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14808,meta14807__$1){var self__ = this;
var _14808__$1 = this;return (new openthink.views.post.t14806(self__.owner,self__.data,self__.post_section,meta14807__$1));
});
openthink.views.post.__GT_t14806 = (function __GT_t14806(owner__$1,data__$1,post_section__$1,meta14807){return (new openthink.views.post.t14806(owner__$1,data__$1,post_section__$1,meta14807));
});
}
return (new openthink.views.post.t14806(owner,data,post_section,null));
});

//# sourceMappingURL=post.js.map