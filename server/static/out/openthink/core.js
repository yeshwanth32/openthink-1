// Compiled by ClojureScript 1.9.293 {}
goog.provide('openthink.core');
goog.require('cljs.core');
goog.require('openthink.state');
goog.require('bidi.bidi');
goog.require('goog.math');
goog.require('sablono.core');
goog.require('openthink.views.modal');
goog.require('openthink.views.links');
goog.require('cljs.core.async');
goog.require('openthink.routes');
goog.require('openthink.views.header');
goog.require('openthink.views.post');
goog.require('devtools.core');
goog.require('om.core');
goog.require('pushy.core');
cljs.core.enable_console_print_BANG_.call(null);
devtools.core.install_BANG_.call(null);
cljs.core.println.call(null,"Hello world!");
cljs.core.println.call(null,openthink.state.app_state);
openthink.core.history = pushy.core.pushy.call(null,openthink.routes.dispatch_BANG_,cljs.core.partial.call(null,bidi.bidi.match_route,openthink.routes.routes));
pushy.core.start_BANG_.call(null,openthink.core.history);
openthink.core.body = (function openthink$core$body(data,owner){
if(typeof openthink.core.t_openthink$core20352 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
openthink.core.t_openthink$core20352 = (function (data,owner,meta20353){
this.data = data;
this.owner = owner;
this.meta20353 = meta20353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
openthink.core.t_openthink$core20352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20354,meta20353__$1){
var self__ = this;
var _20354__$1 = this;
return (new openthink.core.t_openthink$core20352(self__.data,self__.owner,meta20353__$1));
});

openthink.core.t_openthink$core20352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20354){
var self__ = this;
var _20354__$1 = this;
return self__.meta20353;
});

openthink.core.t_openthink$core20352.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

openthink.core.t_openthink$core20352.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(({"className": "main-content row"}),sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.post.post_section,self__.data)),sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.links.links_section,self__.data)));
});

openthink.core.t_openthink$core20352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta20353","meta20353",1662030694,null)], null);
});

openthink.core.t_openthink$core20352.cljs$lang$type = true;

openthink.core.t_openthink$core20352.cljs$lang$ctorStr = "openthink.core/t_openthink$core20352";

openthink.core.t_openthink$core20352.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"openthink.core/t_openthink$core20352");
});

openthink.core.__GT_t_openthink$core20352 = (function openthink$core$body_$___GT_t_openthink$core20352(data__$1,owner__$1,meta20353){
return (new openthink.core.t_openthink$core20352(data__$1,owner__$1,meta20353));
});

}

return (new openthink.core.t_openthink$core20352(data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
openthink.core.app = (function openthink$core$app(data,owner,opts){
if(typeof openthink.core.t_openthink$core20358 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
openthink.core.t_openthink$core20358 = (function (data,owner,opts,meta20359){
this.data = data;
this.owner = owner;
this.opts = opts;
this.meta20359 = meta20359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
openthink.core.t_openthink$core20358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20360,meta20359__$1){
var self__ = this;
var _20360__$1 = this;
return (new openthink.core.t_openthink$core20358(self__.data,self__.owner,self__.opts,meta20359__$1));
});

openthink.core.t_openthink$core20358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20360){
var self__ = this;
var _20360__$1 = this;
return self__.meta20359;
});

openthink.core.t_openthink$core20358.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

openthink.core.t_openthink$core20358.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(({"className": "app"}),sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.header.header,self__.data)),sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.core.body,self__.data)),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"modal","modal",-1031880850).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,openthink.views.modal.modal,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modal-view","modal-view",-1572274108),new cljs.core.Keyword(null,"modal","modal",-1031880850).cljs$core$IFn$_invoke$arity$1(self__.data).call(null,openthink.views.modal.modal_map)], null)], null)):null)));
});

openthink.core.t_openthink$core20358.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta20359","meta20359",-30925471,null)], null);
});

openthink.core.t_openthink$core20358.cljs$lang$type = true;

openthink.core.t_openthink$core20358.cljs$lang$ctorStr = "openthink.core/t_openthink$core20358";

openthink.core.t_openthink$core20358.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"openthink.core/t_openthink$core20358");
});

openthink.core.__GT_t_openthink$core20358 = (function openthink$core$app_$___GT_t_openthink$core20358(data__$1,owner__$1,opts__$1,meta20359){
return (new openthink.core.t_openthink$core20358(data__$1,owner__$1,opts__$1,meta20359));
});

}

return (new openthink.core.t_openthink$core20358(data,owner,opts,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.deref.call(null,openthink.state.app_state);
openthink.core.start = (function openthink$core$start(target,state,app){
return om.core.root.call(null,app,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null));
});
openthink.core.start.call(null,document.getElementById("app"),openthink.state.app_state,openthink.core.app);
console.log("testing");

//# sourceMappingURL=core.js.map