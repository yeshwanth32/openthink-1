// Compiled by ClojureScript 1.9.293 {}
goog.provide('openthink.views.post');
goog.require('cljs.core');
goog.require('markdown.core');
goog.require('sablono.core');
goog.require('openthink.cursors');
goog.require('openthink.utils');
goog.require('om.core');
goog.require('openthink.views.activity');
openthink.views.post.post_view = (function openthink$views$post$post_view(data,owner){
if(typeof openthink.views.post.t_openthink$views$post45671 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
openthink.views.post.t_openthink$views$post45671 = (function (data,owner,meta45672){
this.data = data;
this.owner = owner;
this.meta45672 = meta45672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
openthink.views.post.t_openthink$views$post45671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45673,meta45672__$1){
var self__ = this;
var _45673__$1 = this;
return (new openthink.views.post.t_openthink$views$post45671(self__.data,self__.owner,meta45672__$1));
});

openthink.views.post.t_openthink$views$post45671.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45673){
var self__ = this;
var _45673__$1 = this;
return self__.meta45672;
});

openthink.views.post.t_openthink$views$post45671.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.post.t_openthink$views$post45671.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var post = openthink.cursors.current_post.call(null);
return React.DOM.div(({"className": "post row"}),React.DOM.h4(null,(function (){var attrs45674 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(post);
return cljs.core.apply.call(null,React.DOM.strong,((cljs.core.map_QMARK_.call(null,attrs45674))?sablono.interpreter.attributes.call(null,attrs45674):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45674))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45674)], null))));
})()),React.DOM.hr(null),React.DOM.p(({"dangerouslySetInnerHTML": ({"__html": markdown.core.md__GT_html.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(post))})})));
});

openthink.views.post.t_openthink$views$post45671.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta45672","meta45672",678321155,null)], null);
});

openthink.views.post.t_openthink$views$post45671.cljs$lang$type = true;

openthink.views.post.t_openthink$views$post45671.cljs$lang$ctorStr = "openthink.views.post/t_openthink$views$post45671";

openthink.views.post.t_openthink$views$post45671.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"openthink.views.post/t_openthink$views$post45671");
});

openthink.views.post.__GT_t_openthink$views$post45671 = (function openthink$views$post$post_view_$___GT_t_openthink$views$post45671(data__$1,owner__$1,meta45672){
return (new openthink.views.post.t_openthink$views$post45671(data__$1,owner__$1,meta45672));
});

}

return (new openthink.views.post.t_openthink$views$post45671(data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
openthink.views.post.post_section = (function openthink$views$post$post_section(data,owner){
if(typeof openthink.views.post.t_openthink$views$post45682 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
openthink.views.post.t_openthink$views$post45682 = (function (data,owner,meta45683){
this.data = data;
this.owner = owner;
this.meta45683 = meta45683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
openthink.views.post.t_openthink$views$post45682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45684,meta45683__$1){
var self__ = this;
var _45684__$1 = this;
return (new openthink.views.post.t_openthink$views$post45682(self__.data,self__.owner,meta45683__$1));
});

openthink.views.post.t_openthink$views$post45682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45684){
var self__ = this;
var _45684__$1 = this;
return self__.meta45683;
});

openthink.views.post.t_openthink$views$post45682.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.post.t_openthink$views$post45682.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.core.println.call(null,"post view");

return React.DOM.div(({"className": "post-section medium-7 columns"}),sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.post.post_view,self__.data)),sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.activity.actions_view,self__.data)));
});

openthink.views.post.t_openthink$views$post45682.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta45683","meta45683",-772688382,null)], null);
});

openthink.views.post.t_openthink$views$post45682.cljs$lang$type = true;

openthink.views.post.t_openthink$views$post45682.cljs$lang$ctorStr = "openthink.views.post/t_openthink$views$post45682";

openthink.views.post.t_openthink$views$post45682.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"openthink.views.post/t_openthink$views$post45682");
});

openthink.views.post.__GT_t_openthink$views$post45682 = (function openthink$views$post$post_section_$___GT_t_openthink$views$post45682(data__$1,owner__$1,meta45683){
return (new openthink.views.post.t_openthink$views$post45682(data__$1,owner__$1,meta45683));
});

}

return (new openthink.views.post.t_openthink$views$post45682(data,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=post.js.map