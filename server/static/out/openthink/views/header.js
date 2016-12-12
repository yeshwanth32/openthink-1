// Compiled by ClojureScript 1.9.293 {}
goog.provide('openthink.views.header');
goog.require('cljs.core');
goog.require('om.core');
goog.require('sablono.core');
goog.require('openthink.views.auth');
openthink.views.header.user_bar = (function openthink$views$header$user_bar(data,owner){
if(typeof openthink.views.header.t_openthink$views$header45351 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
openthink.views.header.t_openthink$views$header45351 = (function (data,owner,meta45352){
this.data = data;
this.owner = owner;
this.meta45352 = meta45352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
openthink.views.header.t_openthink$views$header45351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45353,meta45352__$1){
var self__ = this;
var _45353__$1 = this;
return (new openthink.views.header.t_openthink$views$header45351(self__.data,self__.owner,meta45352__$1));
});

openthink.views.header.t_openthink$views$header45351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45353){
var self__ = this;
var _45353__$1 = this;
return self__.meta45352;
});

openthink.views.header.t_openthink$views$header45351.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.header.t_openthink$views$header45351.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(self__.data))){
return React.DOM.li(({"className": "logged-in-as"}),(function (){var attrs45354 = [cljs.core.str("logged in as "),cljs.core.str(cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"username","username",1605666410)], null))),cljs.core.str(" ")].join('');
return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs45354))?sablono.interpreter.attributes.call(null,attrs45354):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45354))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45354)], null))));
})(),(function (){var attrs45355 = om.core.build.call(null,openthink.views.auth.logout_button,self__.data);
return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs45355))?sablono.interpreter.attributes.call(null,attrs45355):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45355))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45355)], null))));
})());
} else {
return sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.auth.login_form,self__.data));
}
});

openthink.views.header.t_openthink$views$header45351.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta45352","meta45352",-2130570475,null)], null);
});

openthink.views.header.t_openthink$views$header45351.cljs$lang$type = true;

openthink.views.header.t_openthink$views$header45351.cljs$lang$ctorStr = "openthink.views.header/t_openthink$views$header45351";

openthink.views.header.t_openthink$views$header45351.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"openthink.views.header/t_openthink$views$header45351");
});

openthink.views.header.__GT_t_openthink$views$header45351 = (function openthink$views$header$user_bar_$___GT_t_openthink$views$header45351(data__$1,owner__$1,meta45352){
return (new openthink.views.header.t_openthink$views$header45351(data__$1,owner__$1,meta45352));
});

}

return (new openthink.views.header.t_openthink$views$header45351(data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
openthink.views.header.header = (function openthink$views$header$header(data,owner){
if(typeof openthink.views.header.t_openthink$views$header45363 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
openthink.views.header.t_openthink$views$header45363 = (function (data,owner,meta45364){
this.data = data;
this.owner = owner;
this.meta45364 = meta45364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
openthink.views.header.t_openthink$views$header45363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45365,meta45364__$1){
var self__ = this;
var _45365__$1 = this;
return (new openthink.views.header.t_openthink$views$header45363(self__.data,self__.owner,meta45364__$1));
});

openthink.views.header.t_openthink$views$header45363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45365){
var self__ = this;
var _45365__$1 = this;
return self__.meta45364;
});

openthink.views.header.t_openthink$views$header45363.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.header.t_openthink$views$header45363.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.nav(({"className": "top-bar page-header"}),React.DOM.ul(({"className": "title-area"}),React.DOM.li(({"className": "name"}),React.DOM.h1(null,React.DOM.a(({"href": "/"}),"OpenThink")))),React.DOM.section(({"className": "top-bar-section"}),React.DOM.ul(({"className": "left"}),React.DOM.button(({"className": "button large", "onClick": ((function (this$__$1){
return (function (){
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"reply-to","reply-to",-145674792),null);

return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.Keyword(null,"new-post","new-post",-1808203791));
});})(this$__$1))
}),"Create a new post")),React.DOM.ul(({"className": "right"}),React.DOM.li(({"className": "divider"})),sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.header.user_bar,self__.data)))));
});

openthink.views.header.t_openthink$views$header45363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta45364","meta45364",237306734,null)], null);
});

openthink.views.header.t_openthink$views$header45363.cljs$lang$type = true;

openthink.views.header.t_openthink$views$header45363.cljs$lang$ctorStr = "openthink.views.header/t_openthink$views$header45363";

openthink.views.header.t_openthink$views$header45363.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"openthink.views.header/t_openthink$views$header45363");
});

openthink.views.header.__GT_t_openthink$views$header45363 = (function openthink$views$header$header_$___GT_t_openthink$views$header45363(data__$1,owner__$1,meta45364){
return (new openthink.views.header.t_openthink$views$header45363(data__$1,owner__$1,meta45364));
});

}

return (new openthink.views.header.t_openthink$views$header45363(data,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=header.js.map