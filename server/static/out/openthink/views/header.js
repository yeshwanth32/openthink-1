// Compiled by ClojureScript 0.0-2511
goog.provide('openthink.views.header');
goog.require('cljs.core');
goog.require('openthink.views.auth');
goog.require('sablono.core');
goog.require('om.core');
openthink.views.header.user_bar = (function user_bar(data,owner){
if(typeof openthink.views.header.t21216 !== 'undefined'){
} else {

/**
* @constructor
*/
openthink.views.header.t21216 = (function (owner,data,user_bar,meta21217){
this.owner = owner;
this.data = data;
this.user_bar = user_bar;
this.meta21217 = meta21217;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.header.t21216.prototype.om$core$IRender$ = true;

openthink.views.header.t21216.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(self__.data))){
return React.DOM.li({"className": "logged-in-as"},(function (){var attrs21219 = [cljs.core.str("logged in as "),cljs.core.str(cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"username","username",1605666410)], null))),cljs.core.str(" ")].join('');
return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs21219))?sablono.interpreter.attributes.call(null,attrs21219):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs21219))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21219)], null))));
})(),(function (){var attrs21220 = om.core.build.call(null,openthink.views.auth.logout_button,self__.data);
return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs21220))?sablono.interpreter.attributes.call(null,attrs21220):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs21220))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21220)], null))));
})());
} else {
return sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.auth.login_form,self__.data));
}
});

openthink.views.header.t21216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21218){
var self__ = this;
var _21218__$1 = this;
return self__.meta21217;
});

openthink.views.header.t21216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21218,meta21217__$1){
var self__ = this;
var _21218__$1 = this;
return (new openthink.views.header.t21216(self__.owner,self__.data,self__.user_bar,meta21217__$1));
});

openthink.views.header.t21216.cljs$lang$type = true;

openthink.views.header.t21216.cljs$lang$ctorStr = "openthink.views.header/t21216";

openthink.views.header.t21216.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"openthink.views.header/t21216");
});

openthink.views.header.__GT_t21216 = (function __GT_t21216(owner__$1,data__$1,user_bar__$1,meta21217){
return (new openthink.views.header.t21216(owner__$1,data__$1,user_bar__$1,meta21217));
});

}

return (new openthink.views.header.t21216(owner,data,user_bar,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),50,new cljs.core.Keyword(null,"end-line","end-line",1837326455),15,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),7,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/src/openthink/views/header.cljs"], null)));
});
openthink.views.header.header = (function header(data,owner){
if(typeof openthink.views.header.t21228 !== 'undefined'){
} else {

/**
* @constructor
*/
openthink.views.header.t21228 = (function (owner,data,header,meta21229){
this.owner = owner;
this.data = data;
this.header = header;
this.meta21229 = meta21229;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.header.t21228.prototype.om$core$IRender$ = true;

openthink.views.header.t21228.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.nav({"className": "top-bar page-header"},React.DOM.ul({"className": "title-area"},React.DOM.li({"className": "name"},React.DOM.h1(null,React.DOM.a({"href": "/"},"OpenThink")))),React.DOM.section({"className": "top-bar-section"},React.DOM.ul({"className": "left"},React.DOM.button({"className": "button large", "onClick": ((function (this$__$1){
return (function (){
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"reply-to","reply-to",-145674792),null);

return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.Keyword(null,"new-post","new-post",-1808203791));
});})(this$__$1))
},"Create a new post")),React.DOM.ul({"className": "right"},React.DOM.li({"className": "divider"}),sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.header.user_bar,self__.data)))));
});

openthink.views.header.t21228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21230){
var self__ = this;
var _21230__$1 = this;
return self__.meta21229;
});

openthink.views.header.t21228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21230,meta21229__$1){
var self__ = this;
var _21230__$1 = this;
return (new openthink.views.header.t21228(self__.owner,self__.data,self__.header,meta21229__$1));
});

openthink.views.header.t21228.cljs$lang$type = true;

openthink.views.header.t21228.cljs$lang$ctorStr = "openthink.views.header/t21228";

openthink.views.header.t21228.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"openthink.views.header/t21228");
});

openthink.views.header.__GT_t21228 = (function __GT_t21228(owner__$1,data__$1,header__$1,meta21229){
return (new openthink.views.header.t21228(owner__$1,data__$1,header__$1,meta21229));
});

}

return (new openthink.views.header.t21228(owner,data,header,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),33,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),18,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/src/openthink/views/header.cljs"], null)));
});

//# sourceMappingURL=header.js.map