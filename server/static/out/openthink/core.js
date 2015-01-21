// Compiled by ClojureScript 0.0-2511
goog.provide('openthink.core');
goog.require('cljs.core');
goog.require('openthink.state');
goog.require('sablono.core');
goog.require('openthink.views.modal');
goog.require('openthink.views.links');
goog.require('openthink.views.header');
goog.require('openthink.views.post');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Hello world!");
cljs.core.println.call(null,openthink.state.app_state);
openthink.core.body = (function body(data,owner){
if(typeof openthink.core.t20754 !== 'undefined'){
} else {

/**
* @constructor
*/
openthink.core.t20754 = (function (owner,data,body,meta20755){
this.owner = owner;
this.data = data;
this.body = body;
this.meta20755 = meta20755;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t20754.prototype.om$core$IRender$ = true;

openthink.core.t20754.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"className": "main-content row"},sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.post.post_section,self__.data)),sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.links.links_section,self__.data)));
});

openthink.core.t20754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20756){
var self__ = this;
var _20756__$1 = this;
return self__.meta20755;
});

openthink.core.t20754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20756,meta20755__$1){
var self__ = this;
var _20756__$1 = this;
return (new openthink.core.t20754(self__.owner,self__.data,self__.body,meta20755__$1));
});

openthink.core.t20754.cljs$lang$type = true;

openthink.core.t20754.cljs$lang$ctorStr = "openthink.core/t20754";

openthink.core.t20754.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"openthink.core/t20754");
});

openthink.core.__GT_t20754 = (function __GT_t20754(owner__$1,data__$1,body__$1,meta20755){
return (new openthink.core.t20754(owner__$1,data__$1,body__$1,meta20755));
});

}

return (new openthink.core.t20754(owner,data,body,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),47,new cljs.core.Keyword(null,"end-line","end-line",1837326455),23,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),18,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/src/openthink/core.cljs"], null)));
});
openthink.core.app = (function app(data,owner,opts){
if(typeof openthink.core.t20760 !== 'undefined'){
} else {

/**
* @constructor
*/
openthink.core.t20760 = (function (opts,owner,data,app,meta20761){
this.opts = opts;
this.owner = owner;
this.data = data;
this.app = app;
this.meta20761 = meta20761;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t20760.prototype.om$core$IRender$ = true;

openthink.core.t20760.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"className": "app"},sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.header.header,self__.data)),sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.core.body,self__.data)),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"modal","modal",-1031880850).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,openthink.views.modal.modal,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modal-view","modal-view",-1572274108),new cljs.core.Keyword(null,"modal","modal",-1031880850).cljs$core$IFn$_invoke$arity$1(self__.data).call(null,openthink.views.modal.modal_map)], null)], null)):null)));
});

openthink.core.t20760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20762){
var self__ = this;
var _20762__$1 = this;
return self__.meta20761;
});

openthink.core.t20760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20762,meta20761__$1){
var self__ = this;
var _20762__$1 = this;
return (new openthink.core.t20760(self__.opts,self__.owner,self__.data,self__.app,meta20761__$1));
});

openthink.core.t20760.cljs$lang$type = true;

openthink.core.t20760.cljs$lang$ctorStr = "openthink.core/t20760";

openthink.core.t20760.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"openthink.core/t20760");
});

openthink.core.__GT_t20760 = (function __GT_t20760(opts__$1,owner__$1,data__$1,app__$1,meta20761){
return (new openthink.core.t20760(opts__$1,owner__$1,data__$1,app__$1,meta20761));
});

}

return (new openthink.core.t20760(opts,owner,data,app,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),86,new cljs.core.Keyword(null,"end-line","end-line",1837326455),36,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),28,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/src/openthink/core.cljs"], null)));
});
cljs.core.deref.call(null,openthink.state.app_state);
openthink.core.start = (function start(target,state,app){
return om.core.root.call(null,app,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null));
});
openthink.core.start.call(null,document.getElementById("app"),openthink.state.app_state,openthink.core.app);

//# sourceMappingURL=core.js.map