// Compiled by ClojureScript 0.0-2371
goog.provide('openthink.views.header');
goog.require('cljs.core');
goog.require('openthink.views.auth');
goog.require('openthink.views.auth');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
openthink.views.header.user_bar = (function user_bar(data,owner){if(typeof openthink.views.header.t14574 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.views.header.t14574 = (function (owner,data,user_bar,meta14575){
this.owner = owner;
this.data = data;
this.user_bar = user_bar;
this.meta14575 = meta14575;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.header.t14574.cljs$lang$type = true;
openthink.views.header.t14574.cljs$lang$ctorStr = "openthink.views.header/t14574";
openthink.views.header.t14574.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.views.header/t14574");
});
openthink.views.header.t14574.prototype.om$core$IRender$ = true;
openthink.views.header.t14574.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(self__.data)))
{return React.DOM.li({"className": "logged-in-as"},(function (){var attrs14577 = ("logged in as "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"username","username",1605666410)], null)))+" ");return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs14577))?sablono.interpreter.attributes.call(null,attrs14577):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14577))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14577)], null))));
})(),(function (){var attrs14578 = om.core.build.call(null,openthink.views.auth.logout_button,self__.data);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs14578))?sablono.interpreter.attributes.call(null,attrs14578):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14578))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14578)], null))));
})());
} else
{return sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.auth.login_form,self__.data));
}
});
openthink.views.header.t14574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14576){var self__ = this;
var _14576__$1 = this;return self__.meta14575;
});
openthink.views.header.t14574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14576,meta14575__$1){var self__ = this;
var _14576__$1 = this;return (new openthink.views.header.t14574(self__.owner,self__.data,self__.user_bar,meta14575__$1));
});
openthink.views.header.__GT_t14574 = (function __GT_t14574(owner__$1,data__$1,user_bar__$1,meta14575){return (new openthink.views.header.t14574(owner__$1,data__$1,user_bar__$1,meta14575));
});
}
return (new openthink.views.header.t14574(owner,data,user_bar,null));
});
openthink.views.header.header = (function header(data,owner){if(typeof openthink.views.header.t14586 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.views.header.t14586 = (function (owner,data,header,meta14587){
this.owner = owner;
this.data = data;
this.header = header;
this.meta14587 = meta14587;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.header.t14586.cljs$lang$type = true;
openthink.views.header.t14586.cljs$lang$ctorStr = "openthink.views.header/t14586";
openthink.views.header.t14586.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.views.header/t14586");
});
openthink.views.header.t14586.prototype.om$core$IRender$ = true;
openthink.views.header.t14586.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.nav({"className": "top-bar page-header"},React.DOM.ul({"className": "title-area"},React.DOM.li({"className": "name"},React.DOM.h1(null,React.DOM.a({"href": "/"},"OpenThink")))),React.DOM.section({"className": "top-bar-section"},React.DOM.ul({"className": "left"},React.DOM.button({"className": "button large", "onClick": ((function (this$__$1){
return (function (){om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"reply-to","reply-to",-145674792),null);
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.Keyword(null,"new-post","new-post",-1808203791));
});})(this$__$1))
},"Create a new post")),React.DOM.ul({"className": "right"},React.DOM.li({"className": "divider"}),sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.header.user_bar,self__.data)))));
});
openthink.views.header.t14586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14588){var self__ = this;
var _14588__$1 = this;return self__.meta14587;
});
openthink.views.header.t14586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14588,meta14587__$1){var self__ = this;
var _14588__$1 = this;return (new openthink.views.header.t14586(self__.owner,self__.data,self__.header,meta14587__$1));
});
openthink.views.header.__GT_t14586 = (function __GT_t14586(owner__$1,data__$1,header__$1,meta14587){return (new openthink.views.header.t14586(owner__$1,data__$1,header__$1,meta14587));
});
}
return (new openthink.views.header.t14586(owner,data,header,null));
});

//# sourceMappingURL=header.js.map