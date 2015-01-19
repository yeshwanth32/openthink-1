// Compiled by ClojureScript 0.0-2371
goog.provide('openthink.core');
goog.require('cljs.core');
goog.require('openthink.state');
goog.require('openthink.views.header');
goog.require('openthink.views.links');
goog.require('openthink.views.post');
goog.require('openthink.state');
goog.require('sablono.core');
goog.require('openthink.views.modal');
goog.require('openthink.views.links');
goog.require('openthink.views.header');
goog.require('sablono.core');
goog.require('openthink.views.post');
goog.require('openthink.views.modal');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Hello world!");
cljs.core.println.call(null,openthink.state.app_state);
openthink.core.body = (function body(data,owner){if(typeof openthink.core.t13683 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t13683 = (function (owner,data,body,meta13684){
this.owner = owner;
this.data = data;
this.body = body;
this.meta13684 = meta13684;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t13683.cljs$lang$type = true;
openthink.core.t13683.cljs$lang$ctorStr = "openthink.core/t13683";
openthink.core.t13683.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t13683");
});
openthink.core.t13683.prototype.om$core$IRender$ = true;
openthink.core.t13683.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "main-content row"},sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.post.post_section,self__.data)),sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.links.links_section,self__.data)));
});
openthink.core.t13683.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13685){var self__ = this;
var _13685__$1 = this;return self__.meta13684;
});
openthink.core.t13683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13685,meta13684__$1){var self__ = this;
var _13685__$1 = this;return (new openthink.core.t13683(self__.owner,self__.data,self__.body,meta13684__$1));
});
openthink.core.__GT_t13683 = (function __GT_t13683(owner__$1,data__$1,body__$1,meta13684){return (new openthink.core.t13683(owner__$1,data__$1,body__$1,meta13684));
});
}
return (new openthink.core.t13683(owner,data,body,null));
});
openthink.core.app = (function app(data,owner,opts){if(typeof openthink.core.t13689 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t13689 = (function (opts,owner,data,app,meta13690){
this.opts = opts;
this.owner = owner;
this.data = data;
this.app = app;
this.meta13690 = meta13690;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t13689.cljs$lang$type = true;
openthink.core.t13689.cljs$lang$ctorStr = "openthink.core/t13689";
openthink.core.t13689.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t13689");
});
openthink.core.t13689.prototype.om$core$IRender$ = true;
openthink.core.t13689.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "app"},sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.header.header,self__.data)),sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.core.body,self__.data)),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"modal","modal",-1031880850).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,openthink.views.modal.modal,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modal-view","modal-view",-1572274108),new cljs.core.Keyword(null,"modal","modal",-1031880850).cljs$core$IFn$_invoke$arity$1(self__.data).call(null,openthink.views.modal.modal_map)], null)], null)):null)));
});
openthink.core.t13689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13691){var self__ = this;
var _13691__$1 = this;return self__.meta13690;
});
openthink.core.t13689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13691,meta13690__$1){var self__ = this;
var _13691__$1 = this;return (new openthink.core.t13689(self__.opts,self__.owner,self__.data,self__.app,meta13690__$1));
});
openthink.core.__GT_t13689 = (function __GT_t13689(opts__$1,owner__$1,data__$1,app__$1,meta13690){return (new openthink.core.t13689(opts__$1,owner__$1,data__$1,app__$1,meta13690));
});
}
return (new openthink.core.t13689(opts,owner,data,app,null));
});
cljs.core.deref.call(null,openthink.state.app_state);
openthink.core.start = (function start(target,state,app){return om.core.root.call(null,app,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null));
});
openthink.core.start.call(null,document.getElementById("app"),openthink.state.app_state,openthink.core.app);

//# sourceMappingURL=core.js.map