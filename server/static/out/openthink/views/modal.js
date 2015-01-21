// Compiled by ClojureScript 0.0-2511
goog.provide('openthink.views.modal');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('openthink.state');
goog.require('sablono.core');
goog.require('openthink.views.auth');
goog.require('cljs.core.async');
goog.require('openthink.cursors');
goog.require('openthink.utils');
goog.require('om.core');
goog.require('clojure.string');
goog.require('openthink.views.editor');
openthink.views.modal.ask_for = (function ask_for(list_of_wants,params){
return cljs.core.assoc.call(null,params,"ask_for",list_of_wants,"current_post",new cljs.core.Keyword(null,"current_post","current_post",2072811381).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,openthink.state.app_state)));
});
openthink.views.modal.submit_form = (function submit_form(data,owner,p__23110){
var map__23188 = p__23110;
var map__23188__$1 = ((cljs.core.seq_QMARK_.call(null,map__23188))?cljs.core.apply.call(null,cljs.core.hash_map,map__23188):map__23188);
var opts = map__23188__$1;
var close_chan = cljs.core.get.call(null,map__23188__$1,new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891));
if(typeof openthink.views.modal.t23189 !== 'undefined'){
} else {

/**
* @constructor
*/
openthink.views.modal.t23189 = (function (close_chan,opts,map__23188,p__23110,owner,data,submit_form,meta23190){
this.close_chan = close_chan;
this.opts = opts;
this.map__23188 = map__23188;
this.p__23110 = p__23110;
this.owner = owner;
this.data = data;
this.submit_form = submit_form;
this.meta23190 = meta23190;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.modal.t23189.prototype.om$core$IRender$ = true;

openthink.views.modal.t23189.prototype.om$core$IRender$render$arity$1 = ((function (map__23188,map__23188__$1,opts,close_chan){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.form({"onSubmit": ((function (this$__$1,map__23188,map__23188__$1,opts,close_chan){
return (function (e){
var c__8633__auto___23265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto___23265,this$__$1,map__23188,map__23188__$1,opts,close_chan){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto___23265,this$__$1,map__23188,map__23188__$1,opts,close_chan){
return (function (state_23200){
var state_val_23201 = (state_23200[(1)]);
if((state_val_23201 === (2))){
var inst_23198 = (state_23200[(2)]);
var state_23200__$1 = state_23200;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23200__$1,inst_23198);
} else {
if((state_val_23201 === (1))){
var inst_23196 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"submit-chan","submit-chan",1225988800));
var state_23200__$1 = state_23200;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23200__$1,(2),inst_23196,(1));
} else {
return null;
}
}
});})(c__8633__auto___23265,this$__$1,map__23188,map__23188__$1,opts,close_chan))
;
return ((function (switch__8577__auto__,c__8633__auto___23265,this$__$1,map__23188,map__23188__$1,opts,close_chan){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_23205 = [null,null,null,null,null,null,null];
(statearr_23205[(0)] = state_machine__8578__auto__);

(statearr_23205[(1)] = (1));

return statearr_23205;
});
var state_machine__8578__auto____1 = (function (state_23200){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_23200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e23206){if((e23206 instanceof Object)){
var ex__8581__auto__ = e23206;
var statearr_23207_23266 = state_23200;
(statearr_23207_23266[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23267 = state_23200;
state_23200 = G__23267;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_23200){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_23200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto___23265,this$__$1,map__23188,map__23188__$1,opts,close_chan))
})();
var state__8635__auto__ = (function (){var statearr_23208 = f__8634__auto__.call(null);
(statearr_23208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto___23265);

return statearr_23208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto___23265,this$__$1,map__23188,map__23188__$1,opts,close_chan))
);


e.preventDefault();

return false;
});})(this$__$1,map__23188,map__23188__$1,opts,close_chan))
},React.DOM.div({"className": "row"},React.DOM.div({"className": "large-12 columns"},React.DOM.h3(null,"Create and link a new post:"),sablono.interpreter.interpret.call(null,(function (){var temp__4126__auto__ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(temp__4126__auto__)){
var error = temp__4126__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"alert-box warning radius"], null),error], null);
} else {
return null;
}
})()),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"posting","posting",919785887),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"alert-box info radius"], null),"Posting... Please wait"], null):null)),sablono.interpreter.input.call(null,{"type": "text", "placeholder": "optional title", "name": "post-title", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"title","title",636505583)), "onChange": ((function (this$__$1,map__23188,map__23188__$1,opts,close_chan){
return (function (p1__23108_SHARP_){
return openthink.utils.handle_change.call(null,p1__23108_SHARP_,self__.owner,new cljs.core.Keyword(null,"title","title",636505583));
});})(this$__$1,map__23188,map__23188__$1,opts,close_chan))
}),sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.editor.editor_view,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"your content goes here",new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275),((function (this$__$1,map__23188,map__23188__$1,opts,close_chan){
return (function (p1__23109_SHARP_){
return openthink.utils.handle_change.call(null,p1__23109_SHARP_,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697));
});})(this$__$1,map__23188,map__23188__$1,opts,close_chan))
], null)], null))),React.DOM.button({"type": "submit", "className": "button tiny"},"create"))));
});})(map__23188,map__23188__$1,opts,close_chan))
;

openthink.views.modal.t23189.prototype.om$core$IWillMount$ = true;

openthink.views.modal.t23189.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__23188,map__23188__$1,opts,close_chan){
return (function (_){
var self__ = this;
var ___$1 = this;
var submit_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"submit-chan","submit-chan",1225988800));
var c__8633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto__,submit_chan,___$1,map__23188,map__23188__$1,opts,close_chan){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto__,submit_chan,___$1,map__23188,map__23188__$1,opts,close_chan){
return (function (state_23244){
var state_val_23245 = (state_23244[(1)]);
if((state_val_23245 === (7))){
var inst_23212 = (state_23244[(2)]);
var inst_23213 = cljs.core.println.call(null,"submitting post");
var inst_23214 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"posting","posting",919785887));
var inst_23215 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032),null);
var inst_23216 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];
var inst_23217 = ["title","text"];
var inst_23218 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"title","title",636505583));
var inst_23219 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697));
var inst_23220 = [inst_23218,inst_23219];
var inst_23221 = cljs.core.PersistentHashMap.fromArrays(inst_23217,inst_23220);
var inst_23222 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23223 = ["children"];
var inst_23224 = (new cljs.core.PersistentVector(null,1,(5),inst_23222,inst_23223,null));
var inst_23225 = openthink.views.modal.ask_for.call(null,inst_23224,inst_23221);
var inst_23226 = new cljs.core.Keyword(null,"reply-to","reply-to",-145674792).cljs$core$IFn$_invoke$arity$1(self__.data);
var state_23244__$1 = (function (){var statearr_23246 = state_23244;
(statearr_23246[(7)] = inst_23216);

(statearr_23246[(8)] = inst_23225);

(statearr_23246[(9)] = inst_23212);

(statearr_23246[(10)] = inst_23215);

(statearr_23246[(11)] = inst_23213);

(statearr_23246[(12)] = inst_23214);

return statearr_23246;
})();
if(cljs.core.truth_(inst_23226)){
var statearr_23247_23268 = state_23244__$1;
(statearr_23247_23268[(1)] = (8));

} else {
var statearr_23248_23269 = state_23244__$1;
(statearr_23248_23269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23245 === (1))){
var state_23244__$1 = state_23244;
var statearr_23249_23270 = state_23244__$1;
(statearr_23249_23270[(2)] = null);

(statearr_23249_23270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23245 === (4))){
var state_23244__$1 = state_23244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23244__$1,(7),submit_chan);
} else {
if((state_val_23245 === (6))){
var inst_23240 = (state_23244[(2)]);
var state_23244__$1 = state_23244;
var statearr_23250_23271 = state_23244__$1;
(statearr_23250_23271[(2)] = inst_23240);

(statearr_23250_23271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23245 === (3))){
var inst_23242 = (state_23244[(2)]);
var state_23244__$1 = state_23244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23244__$1,inst_23242);
} else {
if((state_val_23245 === (2))){
var state_23244__$1 = state_23244;
var statearr_23251_23272 = state_23244__$1;
(statearr_23251_23272[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23245 === (9))){
var inst_23225 = (state_23244[(8)]);
var state_23244__$1 = state_23244;
var statearr_23253_23273 = state_23244__$1;
(statearr_23253_23273[(2)] = inst_23225);

(statearr_23253_23273[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23245 === (5))){
var state_23244__$1 = state_23244;
var statearr_23254_23274 = state_23244__$1;
(statearr_23254_23274[(2)] = null);

(statearr_23254_23274[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23245 === (10))){
var inst_23216 = (state_23244[(7)]);
var inst_23232 = (state_23244[(2)]);
var inst_23233 = (function (){return ((function (inst_23216,inst_23232,state_val_23245,c__8633__auto__,submit_chan,___$1,map__23188,map__23188__$1,opts,close_chan){
return (function (resp){
cljs.core.println.call(null,"submit-form returned");

cljs.core.println.call(null,resp);

var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);
cljs.core.println.call(null,resp__$1);

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795));

if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032))){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(resp__$1));
} else {
om.core.transact_BANG_.call(null,self__.data,((function (resp__$1,inst_23216,inst_23232,state_val_23245,c__8633__auto__,submit_chan,___$1,map__23188,map__23188__$1,opts,close_chan){
return (function (p1__23107_SHARP_){
return cljs.core.merge.call(null,p1__23107_SHARP_,resp__$1);
});})(resp__$1,inst_23216,inst_23232,state_val_23245,c__8633__auto__,submit_chan,___$1,map__23188,map__23188__$1,opts,close_chan))
);

return cljs.core.async.put_BANG_.call(null,self__.close_chan,(1));
}
});
;})(inst_23216,inst_23232,state_val_23245,c__8633__auto__,submit_chan,___$1,map__23188,map__23188__$1,opts,close_chan))
})();
var inst_23234 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_23232,inst_23233];
var inst_23235 = cljs.core.PersistentHashMap.fromArrays(inst_23216,inst_23234);
var inst_23236 = ajax.core.POST.call(null,"/submit-post",inst_23235);
var state_23244__$1 = (function (){var statearr_23255 = state_23244;
(statearr_23255[(13)] = inst_23236);

return statearr_23255;
})();
var statearr_23256_23275 = state_23244__$1;
(statearr_23256_23275[(2)] = null);

(statearr_23256_23275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23245 === (8))){
var inst_23225 = (state_23244[(8)]);
var inst_23228 = new cljs.core.Keyword(null,"reply-to","reply-to",-145674792).cljs$core$IFn$_invoke$arity$1(self__.data);
var inst_23229 = cljs.core.assoc.call(null,inst_23225,"parent",inst_23228);
var state_23244__$1 = state_23244;
var statearr_23257_23276 = state_23244__$1;
(statearr_23257_23276[(2)] = inst_23229);

(statearr_23257_23276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__8633__auto__,submit_chan,___$1,map__23188,map__23188__$1,opts,close_chan))
;
return ((function (switch__8577__auto__,c__8633__auto__,submit_chan,___$1,map__23188,map__23188__$1,opts,close_chan){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_23261 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23261[(0)] = state_machine__8578__auto__);

(statearr_23261[(1)] = (1));

return statearr_23261;
});
var state_machine__8578__auto____1 = (function (state_23244){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_23244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e23262){if((e23262 instanceof Object)){
var ex__8581__auto__ = e23262;
var statearr_23263_23277 = state_23244;
(statearr_23263_23277[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23278 = state_23244;
state_23244 = G__23278;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_23244){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_23244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto__,submit_chan,___$1,map__23188,map__23188__$1,opts,close_chan))
})();
var state__8635__auto__ = (function (){var statearr_23264 = f__8634__auto__.call(null);
(statearr_23264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto__);

return statearr_23264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto__,submit_chan,___$1,map__23188,map__23188__$1,opts,close_chan))
);

return c__8633__auto__;
});})(map__23188,map__23188__$1,opts,close_chan))
;

openthink.views.modal.t23189.prototype.om$core$IInitState$ = true;

openthink.views.modal.t23189.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__23188,map__23188__$1,opts,close_chan){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"submit-chan","submit-chan",1225988800),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"text","text",-1790561697),"",new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795)], null);
});})(map__23188,map__23188__$1,opts,close_chan))
;

openthink.views.modal.t23189.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23188,map__23188__$1,opts,close_chan){
return (function (_23191){
var self__ = this;
var _23191__$1 = this;
return self__.meta23190;
});})(map__23188,map__23188__$1,opts,close_chan))
;

openthink.views.modal.t23189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23188,map__23188__$1,opts,close_chan){
return (function (_23191,meta23190__$1){
var self__ = this;
var _23191__$1 = this;
return (new openthink.views.modal.t23189(self__.close_chan,self__.opts,self__.map__23188,self__.p__23110,self__.owner,self__.data,self__.submit_form,meta23190__$1));
});})(map__23188,map__23188__$1,opts,close_chan))
;

openthink.views.modal.t23189.cljs$lang$type = true;

openthink.views.modal.t23189.cljs$lang$ctorStr = "openthink.views.modal/t23189";

openthink.views.modal.t23189.cljs$lang$ctorPrWriter = ((function (map__23188,map__23188__$1,opts,close_chan){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"openthink.views.modal/t23189");
});})(map__23188,map__23188__$1,opts,close_chan))
;

openthink.views.modal.__GT_t23189 = ((function (map__23188,map__23188__$1,opts,close_chan){
return (function __GT_t23189(close_chan__$1,opts__$1,map__23188__$2,p__23110__$1,owner__$1,data__$1,submit_form__$1,meta23190){
return (new openthink.views.modal.t23189(close_chan__$1,opts__$1,map__23188__$2,p__23110__$1,owner__$1,data__$1,submit_form__$1,meta23190));
});})(map__23188,map__23188__$1,opts,close_chan))
;

}

return (new openthink.views.modal.t23189(close_chan,opts,map__23188__$1,p__23110,owner,data,submit_form,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),82,new cljs.core.Keyword(null,"end-line","end-line",1837326455),71,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),21,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/src/openthink/views/modal.cljs"], null)));
});
openthink.views.modal.link_form = (function link_form(data,owner,p__23282){
var map__23348 = p__23282;
var map__23348__$1 = ((cljs.core.seq_QMARK_.call(null,map__23348))?cljs.core.apply.call(null,cljs.core.hash_map,map__23348):map__23348);
var opts = map__23348__$1;
var close_chan = cljs.core.get.call(null,map__23348__$1,new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891));
if(typeof openthink.views.modal.t23349 !== 'undefined'){
} else {

/**
* @constructor
*/
openthink.views.modal.t23349 = (function (close_chan,opts,map__23348,p__23282,owner,data,link_form,meta23350){
this.close_chan = close_chan;
this.opts = opts;
this.map__23348 = map__23348;
this.p__23282 = p__23282;
this.owner = owner;
this.data = data;
this.link_form = link_form;
this.meta23350 = meta23350;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.modal.t23349.prototype.om$core$IRender$ = true;

openthink.views.modal.t23349.prototype.om$core$IRender$render$arity$1 = ((function (map__23348,map__23348__$1,opts,close_chan){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.form({"onSubmit": ((function (this$__$1,map__23348,map__23348__$1,opts,close_chan){
return (function (e){
var c__8633__auto___23413 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto___23413,this$__$1,map__23348,map__23348__$1,opts,close_chan){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto___23413,this$__$1,map__23348,map__23348__$1,opts,close_chan){
return (function (state_23360){
var state_val_23361 = (state_23360[(1)]);
if((state_val_23361 === (2))){
var inst_23358 = (state_23360[(2)]);
var state_23360__$1 = state_23360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23360__$1,inst_23358);
} else {
if((state_val_23361 === (1))){
var inst_23356 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"submit-chan","submit-chan",1225988800));
var state_23360__$1 = state_23360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23360__$1,(2),inst_23356,(1));
} else {
return null;
}
}
});})(c__8633__auto___23413,this$__$1,map__23348,map__23348__$1,opts,close_chan))
;
return ((function (switch__8577__auto__,c__8633__auto___23413,this$__$1,map__23348,map__23348__$1,opts,close_chan){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_23365 = [null,null,null,null,null,null,null];
(statearr_23365[(0)] = state_machine__8578__auto__);

(statearr_23365[(1)] = (1));

return statearr_23365;
});
var state_machine__8578__auto____1 = (function (state_23360){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_23360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e23366){if((e23366 instanceof Object)){
var ex__8581__auto__ = e23366;
var statearr_23367_23414 = state_23360;
(statearr_23367_23414[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23415 = state_23360;
state_23360 = G__23415;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_23360){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_23360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto___23413,this$__$1,map__23348,map__23348__$1,opts,close_chan))
})();
var state__8635__auto__ = (function (){var statearr_23368 = f__8634__auto__.call(null);
(statearr_23368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto___23413);

return statearr_23368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto___23413,this$__$1,map__23348,map__23348__$1,opts,close_chan))
);


e.preventDefault();

return false;
});})(this$__$1,map__23348,map__23348__$1,opts,close_chan))
},React.DOM.div({"className": "row"},React.DOM.div({"className": "large-12 columns"},React.DOM.h3(null,"Link an existing post:"),sablono.interpreter.interpret.call(null,(function (){var temp__4126__auto__ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(temp__4126__auto__)){
var error = temp__4126__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"alert-box warning radius"], null),error], null);
} else {
return null;
}
})()),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"posting","posting",919785887),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"alert-box info radius"], null),"Linking... Please wait"], null):null)),sablono.interpreter.input.call(null,{"type": "text", "placeholder": "URL or ID to a post", "name": "link-text", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"link","link",-1769163468)), "onChange": ((function (this$__$1,map__23348,map__23348__$1,opts,close_chan){
return (function (p1__23281_SHARP_){
return openthink.utils.handle_change.call(null,p1__23281_SHARP_,self__.owner,new cljs.core.Keyword(null,"link","link",-1769163468));
});})(this$__$1,map__23348,map__23348__$1,opts,close_chan))
}),React.DOM.button({"type": "submit", "className": "button tiny"},"link"))));
});})(map__23348,map__23348__$1,opts,close_chan))
;

openthink.views.modal.t23349.prototype.om$core$IWillMount$ = true;

openthink.views.modal.t23349.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__23348,map__23348__$1,opts,close_chan){
return (function (_){
var self__ = this;
var ___$1 = this;
var submit_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"submit-chan","submit-chan",1225988800));
var c__8633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto__,submit_chan,___$1,map__23348,map__23348__$1,opts,close_chan){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto__,submit_chan,___$1,map__23348,map__23348__$1,opts,close_chan){
return (function (state_23397){
var state_val_23398 = (state_23397[(1)]);
if((state_val_23398 === (7))){
var inst_23372 = (state_23397[(2)]);
var inst_23373 = cljs.core.println.call(null,"linking post");
var inst_23374 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"posting","posting",919785887));
var inst_23375 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032),null);
var inst_23376 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];
var inst_23377 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23378 = ["children"];
var inst_23379 = (new cljs.core.PersistentVector(null,1,(5),inst_23377,inst_23378,null));
var inst_23380 = ["child-text","parent"];
var inst_23381 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"link","link",-1769163468));
var inst_23382 = new cljs.core.Keyword(null,"current_post","current_post",2072811381).cljs$core$IFn$_invoke$arity$1(self__.data);
var inst_23383 = [inst_23381,inst_23382];
var inst_23384 = cljs.core.PersistentHashMap.fromArrays(inst_23380,inst_23383);
var inst_23385 = openthink.views.modal.ask_for.call(null,inst_23379,inst_23384);
var inst_23386 = (function (){return ((function (inst_23372,inst_23373,inst_23374,inst_23375,inst_23376,inst_23377,inst_23378,inst_23379,inst_23380,inst_23381,inst_23382,inst_23383,inst_23384,inst_23385,state_val_23398,c__8633__auto__,submit_chan,___$1,map__23348,map__23348__$1,opts,close_chan){
return (function (resp){
cljs.core.println.call(null,"link-form returned");

cljs.core.println.call(null,resp);

var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);
cljs.core.println.call(null,resp__$1);

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795));

if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032))){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(resp__$1));
} else {
om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"rels","rels",1770187185),((function (resp__$1,inst_23372,inst_23373,inst_23374,inst_23375,inst_23376,inst_23377,inst_23378,inst_23379,inst_23380,inst_23381,inst_23382,inst_23383,inst_23384,inst_23385,state_val_23398,c__8633__auto__,submit_chan,___$1,map__23348,map__23348__$1,opts,close_chan){
return (function (p1__23279_SHARP_){
return cljs.core.merge.call(null,p1__23279_SHARP_,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(resp__$1));
});})(resp__$1,inst_23372,inst_23373,inst_23374,inst_23375,inst_23376,inst_23377,inst_23378,inst_23379,inst_23380,inst_23381,inst_23382,inst_23383,inst_23384,inst_23385,state_val_23398,c__8633__auto__,submit_chan,___$1,map__23348,map__23348__$1,opts,close_chan))
);

om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"posts","posts",760043164),((function (resp__$1,inst_23372,inst_23373,inst_23374,inst_23375,inst_23376,inst_23377,inst_23378,inst_23379,inst_23380,inst_23381,inst_23382,inst_23383,inst_23384,inst_23385,state_val_23398,c__8633__auto__,submit_chan,___$1,map__23348,map__23348__$1,opts,close_chan){
return (function (p1__23280_SHARP_){
return cljs.core.merge.call(null,p1__23280_SHARP_,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(resp__$1));
});})(resp__$1,inst_23372,inst_23373,inst_23374,inst_23375,inst_23376,inst_23377,inst_23378,inst_23379,inst_23380,inst_23381,inst_23382,inst_23383,inst_23384,inst_23385,state_val_23398,c__8633__auto__,submit_chan,___$1,map__23348,map__23348__$1,opts,close_chan))
);

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"link_ids","link_ids",-791411950),new cljs.core.Keyword(null,"new_rel_ids","new_rel_ids",701283960).cljs$core$IFn$_invoke$arity$1(resp__$1));

return cljs.core.async.put_BANG_.call(null,self__.close_chan,(1));
}
});
;})(inst_23372,inst_23373,inst_23374,inst_23375,inst_23376,inst_23377,inst_23378,inst_23379,inst_23380,inst_23381,inst_23382,inst_23383,inst_23384,inst_23385,state_val_23398,c__8633__auto__,submit_chan,___$1,map__23348,map__23348__$1,opts,close_chan))
})();
var inst_23387 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_23385,inst_23386];
var inst_23388 = cljs.core.PersistentHashMap.fromArrays(inst_23376,inst_23387);
var inst_23389 = ajax.core.POST.call(null,"/link-post",inst_23388);
var state_23397__$1 = (function (){var statearr_23399 = state_23397;
(statearr_23399[(7)] = inst_23375);

(statearr_23399[(8)] = inst_23389);

(statearr_23399[(9)] = inst_23374);

(statearr_23399[(10)] = inst_23373);

(statearr_23399[(11)] = inst_23372);

return statearr_23399;
})();
var statearr_23400_23416 = state_23397__$1;
(statearr_23400_23416[(2)] = null);

(statearr_23400_23416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23398 === (6))){
var inst_23393 = (state_23397[(2)]);
var state_23397__$1 = state_23397;
var statearr_23401_23417 = state_23397__$1;
(statearr_23401_23417[(2)] = inst_23393);

(statearr_23401_23417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23398 === (5))){
var state_23397__$1 = state_23397;
var statearr_23402_23418 = state_23397__$1;
(statearr_23402_23418[(2)] = null);

(statearr_23402_23418[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23398 === (4))){
var state_23397__$1 = state_23397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23397__$1,(7),submit_chan);
} else {
if((state_val_23398 === (3))){
var inst_23395 = (state_23397[(2)]);
var state_23397__$1 = state_23397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23397__$1,inst_23395);
} else {
if((state_val_23398 === (2))){
var state_23397__$1 = state_23397;
var statearr_23403_23419 = state_23397__$1;
(statearr_23403_23419[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23398 === (1))){
var state_23397__$1 = state_23397;
var statearr_23405_23420 = state_23397__$1;
(statearr_23405_23420[(2)] = null);

(statearr_23405_23420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__8633__auto__,submit_chan,___$1,map__23348,map__23348__$1,opts,close_chan))
;
return ((function (switch__8577__auto__,c__8633__auto__,submit_chan,___$1,map__23348,map__23348__$1,opts,close_chan){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_23409 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23409[(0)] = state_machine__8578__auto__);

(statearr_23409[(1)] = (1));

return statearr_23409;
});
var state_machine__8578__auto____1 = (function (state_23397){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_23397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e23410){if((e23410 instanceof Object)){
var ex__8581__auto__ = e23410;
var statearr_23411_23421 = state_23397;
(statearr_23411_23421[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23422 = state_23397;
state_23397 = G__23422;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_23397){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_23397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto__,submit_chan,___$1,map__23348,map__23348__$1,opts,close_chan))
})();
var state__8635__auto__ = (function (){var statearr_23412 = f__8634__auto__.call(null);
(statearr_23412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto__);

return statearr_23412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto__,submit_chan,___$1,map__23348,map__23348__$1,opts,close_chan))
);

return c__8633__auto__;
});})(map__23348,map__23348__$1,opts,close_chan))
;

openthink.views.modal.t23349.prototype.om$core$IInitState$ = true;

openthink.views.modal.t23349.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__23348,map__23348__$1,opts,close_chan){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"submit-chan","submit-chan",1225988800),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"link","link",-1769163468),"",new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795)], null);
});})(map__23348,map__23348__$1,opts,close_chan))
;

openthink.views.modal.t23349.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23348,map__23348__$1,opts,close_chan){
return (function (_23351){
var self__ = this;
var _23351__$1 = this;
return self__.meta23350;
});})(map__23348,map__23348__$1,opts,close_chan))
;

openthink.views.modal.t23349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23348,map__23348__$1,opts,close_chan){
return (function (_23351,meta23350__$1){
var self__ = this;
var _23351__$1 = this;
return (new openthink.views.modal.t23349(self__.close_chan,self__.opts,self__.map__23348,self__.p__23282,self__.owner,self__.data,self__.link_form,meta23350__$1));
});})(map__23348,map__23348__$1,opts,close_chan))
;

openthink.views.modal.t23349.cljs$lang$type = true;

openthink.views.modal.t23349.cljs$lang$ctorStr = "openthink.views.modal/t23349";

openthink.views.modal.t23349.cljs$lang$ctorPrWriter = ((function (map__23348,map__23348__$1,opts,close_chan){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"openthink.views.modal/t23349");
});})(map__23348,map__23348__$1,opts,close_chan))
;

openthink.views.modal.__GT_t23349 = ((function (map__23348,map__23348__$1,opts,close_chan){
return (function __GT_t23349(close_chan__$1,opts__$1,map__23348__$2,p__23282__$1,owner__$1,data__$1,link_form__$1,meta23350){
return (new openthink.views.modal.t23349(close_chan__$1,opts__$1,map__23348__$2,p__23282__$1,owner__$1,data__$1,link_form__$1,meta23350));
});})(map__23348,map__23348__$1,opts,close_chan))
;

}

return (new openthink.views.modal.t23349(close_chan,opts,map__23348__$1,p__23282,owner,data,link_form,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),80,new cljs.core.Keyword(null,"end-line","end-line",1837326455),120,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),74,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/src/openthink/views/modal.cljs"], null)));
});
openthink.views.modal.post_reply_section = (function post_reply_section(data,owner,opts){
if(typeof openthink.views.modal.t23426 !== 'undefined'){
} else {

/**
* @constructor
*/
openthink.views.modal.t23426 = (function (opts,owner,data,post_reply_section,meta23427){
this.opts = opts;
this.owner = owner;
this.data = data;
this.post_reply_section = post_reply_section;
this.meta23427 = meta23427;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.modal.t23426.prototype.om$core$IRender$ = true;

openthink.views.modal.t23426.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return sablono.interpreter.interpret.call(null,((cljs.core.not.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(self__.data)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You must be logged in to submit a post. ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (this$__$1){
return (function (){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.Keyword(null,"register","register",1968522516));
});})(this$__$1))
], null),"Register now"], null)], null):((cljs.core.not.call(null,new cljs.core.Keyword(null,"reply-to","reply-to",-145674792).cljs$core$IFn$_invoke$arity$1(self__.data)))?om.core.build.call(null,openthink.views.modal.submit_form,self__.data):(function (){var reply_type = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"reply-type","reply-type",1565507820));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),""], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Linking to post: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(openthink.cursors.current_post.call(null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (reply_type,this$__$1){
return (function (){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"reply-to","reply-to",-145674792),null);
});})(reply_type,this$__$1))
], null)," (cancel)"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dl","dl",-2140151713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"sub-nav"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dt","dt",-368444759),"How will you reply?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),((cljs.core._EQ_.call(null,reply_type,new cljs.core.Keyword(null,"post","post",269697687)))?"active":"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (reply_type,this$__$1){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"reply-type","reply-type",1565507820),new cljs.core.Keyword(null,"post","post",269697687));
});})(reply_type,this$__$1))
], null),"Create New Post"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),((cljs.core._EQ_.call(null,reply_type,new cljs.core.Keyword(null,"link","link",-1769163468)))?"active":"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (reply_type,this$__$1){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"reply-type","reply-type",1565507820),new cljs.core.Keyword(null,"link","link",-1769163468));
});})(reply_type,this$__$1))
], null),"Link Existing Post"], null)], null)], null),(function (){var opts__$1 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891))], null)], null);
if(cljs.core._EQ_.call(null,reply_type,new cljs.core.Keyword(null,"post","post",269697687))){
return om.core.build.call(null,openthink.views.modal.submit_form,self__.data,opts__$1);
} else {
if(cljs.core._EQ_.call(null,reply_type,new cljs.core.Keyword(null,"link","link",-1769163468))){
return om.core.build.call(null,openthink.views.modal.link_form,self__.data,opts__$1);
} else {
return null;
}
}
})()], null);
})())));
});

openthink.views.modal.t23426.prototype.om$core$IInitState$ = true;

openthink.views.modal.t23426.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reply-type","reply-type",1565507820),new cljs.core.Keyword(null,"post","post",269697687)], null);
});

openthink.views.modal.t23426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23428){
var self__ = this;
var _23428__$1 = this;
return self__.meta23427;
});

openthink.views.modal.t23426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23428,meta23427__$1){
var self__ = this;
var _23428__$1 = this;
return (new openthink.views.modal.t23426(self__.opts,self__.owner,self__.data,self__.post_reply_section,meta23427__$1));
});

openthink.views.modal.t23426.cljs$lang$type = true;

openthink.views.modal.t23426.cljs$lang$ctorStr = "openthink.views.modal/t23426";

openthink.views.modal.t23426.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"openthink.views.modal/t23426");
});

openthink.views.modal.__GT_t23426 = (function __GT_t23426(opts__$1,owner__$1,data__$1,post_reply_section__$1,meta23427){
return (new openthink.views.modal.t23426(opts__$1,owner__$1,data__$1,post_reply_section__$1,meta23427));
});

}

return (new openthink.views.modal.t23426(opts,owner,data,post_reply_section,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),83,new cljs.core.Keyword(null,"end-line","end-line",1837326455),155,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),123,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/src/openthink/views/modal.cljs"], null)));
});
openthink.views.modal.basic_modal = (function basic_modal(data,owner){
if(typeof openthink.views.modal.t23434 !== 'undefined'){
} else {

/**
* @constructor
*/
openthink.views.modal.t23434 = (function (owner,data,basic_modal,meta23435){
this.owner = owner;
this.data = data;
this.basic_modal = basic_modal;
this.meta23435 = meta23435;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.modal.t23434.prototype.om$core$IRender$ = true;

openthink.views.modal.t23434.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.h2(null,"some modal txt");
});

openthink.views.modal.t23434.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23436){
var self__ = this;
var _23436__$1 = this;
return self__.meta23435;
});

openthink.views.modal.t23434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23436,meta23435__$1){
var self__ = this;
var _23436__$1 = this;
return (new openthink.views.modal.t23434(self__.owner,self__.data,self__.basic_modal,meta23435__$1));
});

openthink.views.modal.t23434.cljs$lang$type = true;

openthink.views.modal.t23434.cljs$lang$ctorStr = "openthink.views.modal/t23434";

openthink.views.modal.t23434.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"openthink.views.modal/t23434");
});

openthink.views.modal.__GT_t23434 = (function __GT_t23434(owner__$1,data__$1,basic_modal__$1,meta23435){
return (new openthink.views.modal.t23434(owner__$1,data__$1,basic_modal__$1,meta23435));
});

}

return (new openthink.views.modal.t23434(owner,data,basic_modal,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),38,new cljs.core.Keyword(null,"end-line","end-line",1837326455),161,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),158,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/src/openthink/views/modal.cljs"], null)));
});
openthink.views.modal.modal_map = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"basic","basic",1043717368),openthink.views.modal.basic_modal,new cljs.core.Keyword(null,"new-post","new-post",-1808203791),openthink.views.modal.post_reply_section,new cljs.core.Keyword(null,"register","register",1968522516),openthink.views.auth.register_form], null);
openthink.views.modal.close_modal = (function close_modal(){
cljs.core.println.call(null,"modal should be closing");

return cljs.core.swap_BANG_.call(null,openthink.state.app_state,cljs.core.dissoc,new cljs.core.Keyword(null,"modal","modal",-1031880850));
});
/**
* reusable modal component.
* modal-view is the component that should be rendered as a modal
*/
openthink.views.modal.modal = (function modal(cursor,owner,p__23439){
var map__23484 = p__23439;
var map__23484__$1 = ((cljs.core.seq_QMARK_.call(null,map__23484))?cljs.core.apply.call(null,cljs.core.hash_map,map__23484):map__23484);
var modal_view = cljs.core.get.call(null,map__23484__$1,new cljs.core.Keyword(null,"modal-view","modal-view",-1572274108));
if(typeof openthink.views.modal.t23485 !== 'undefined'){
} else {

/**
* @constructor
*/
openthink.views.modal.t23485 = (function (modal_view,map__23484,p__23439,owner,cursor,modal,meta23486){
this.modal_view = modal_view;
this.map__23484 = map__23484;
this.p__23439 = p__23439;
this.owner = owner;
this.cursor = cursor;
this.modal = modal;
this.meta23486 = meta23486;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.modal.t23485.prototype.om$core$IRender$ = true;

openthink.views.modal.t23485.prototype.om$core$IRender$render$arity$1 = ((function (map__23484,map__23484__$1,modal_view){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,React.DOM.div({"className": "reveal-modal-bg", "style": cljs.core.clj__GT_js.call(null,{"display": "block"})}),React.DOM.div({"id": "myModal", "className": "reveal-modal open", "style": cljs.core.clj__GT_js.call(null,{"opacity": (1), "top": "88px", "display": "block", "visibility": "visible"})},sablono.interpreter.interpret.call(null,om.core.build.call(null,self__.modal_view,self__.cursor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891))], null)], null)))));
});})(map__23484,map__23484__$1,modal_view))
;

openthink.views.modal.t23485.prototype.om$core$IDidMount$ = true;

openthink.views.modal.t23485.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__23484,map__23484__$1,modal_view){
return (function (_){
var self__ = this;
var ___$1 = this;
var outside_clicks = openthink.utils.listen.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("reveal-modal-bg"))[(0)]),"click");
var c__8633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto__,outside_clicks,___$1,map__23484,map__23484__$1,modal_view){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto__,outside_clicks,___$1,map__23484,map__23484__$1,modal_view){
return (function (state_23497){
var state_val_23498 = (state_23497[(1)]);
if((state_val_23498 === (4))){
var inst_23492 = (state_23497[(2)]);
var inst_23493 = openthink.views.modal.close_modal.call(null);
var state_23497__$1 = (function (){var statearr_23499 = state_23497;
(statearr_23499[(7)] = inst_23492);

return statearr_23499;
})();
var statearr_23500_23528 = state_23497__$1;
(statearr_23500_23528[(2)] = inst_23493);

(statearr_23500_23528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23498 === (3))){
var inst_23495 = (state_23497[(2)]);
var state_23497__$1 = state_23497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23497__$1,inst_23495);
} else {
if((state_val_23498 === (2))){
var state_23497__$1 = state_23497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23497__$1,(4),outside_clicks);
} else {
if((state_val_23498 === (1))){
var state_23497__$1 = state_23497;
var statearr_23501_23529 = state_23497__$1;
(statearr_23501_23529[(2)] = null);

(statearr_23501_23529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__8633__auto__,outside_clicks,___$1,map__23484,map__23484__$1,modal_view))
;
return ((function (switch__8577__auto__,c__8633__auto__,outside_clicks,___$1,map__23484,map__23484__$1,modal_view){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_23505 = [null,null,null,null,null,null,null,null];
(statearr_23505[(0)] = state_machine__8578__auto__);

(statearr_23505[(1)] = (1));

return statearr_23505;
});
var state_machine__8578__auto____1 = (function (state_23497){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_23497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e23506){if((e23506 instanceof Object)){
var ex__8581__auto__ = e23506;
var statearr_23507_23530 = state_23497;
(statearr_23507_23530[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23531 = state_23497;
state_23497 = G__23531;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_23497){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_23497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto__,outside_clicks,___$1,map__23484,map__23484__$1,modal_view))
})();
var state__8635__auto__ = (function (){var statearr_23508 = f__8634__auto__.call(null);
(statearr_23508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto__);

return statearr_23508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto__,outside_clicks,___$1,map__23484,map__23484__$1,modal_view))
);

return c__8633__auto__;
});})(map__23484,map__23484__$1,modal_view))
;

openthink.views.modal.t23485.prototype.om$core$IWillMount$ = true;

openthink.views.modal.t23485.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__23484,map__23484__$1,modal_view){
return (function (_){
var self__ = this;
var ___$1 = this;
var close_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891));
var c__8633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto__,close_chan,___$1,map__23484,map__23484__$1,modal_view){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto__,close_chan,___$1,map__23484,map__23484__$1,modal_view){
return (function (state_23516){
var state_val_23517 = (state_23516[(1)]);
if((state_val_23517 === (4))){
var inst_23511 = (state_23516[(2)]);
var inst_23512 = openthink.views.modal.close_modal.call(null);
var state_23516__$1 = (function (){var statearr_23518 = state_23516;
(statearr_23518[(7)] = inst_23511);

return statearr_23518;
})();
var statearr_23519_23532 = state_23516__$1;
(statearr_23519_23532[(2)] = inst_23512);

(statearr_23519_23532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23517 === (3))){
var inst_23514 = (state_23516[(2)]);
var state_23516__$1 = state_23516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23516__$1,inst_23514);
} else {
if((state_val_23517 === (2))){
var state_23516__$1 = state_23516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23516__$1,(4),close_chan);
} else {
if((state_val_23517 === (1))){
var state_23516__$1 = state_23516;
var statearr_23520_23533 = state_23516__$1;
(statearr_23520_23533[(2)] = null);

(statearr_23520_23533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__8633__auto__,close_chan,___$1,map__23484,map__23484__$1,modal_view))
;
return ((function (switch__8577__auto__,c__8633__auto__,close_chan,___$1,map__23484,map__23484__$1,modal_view){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_23524 = [null,null,null,null,null,null,null,null];
(statearr_23524[(0)] = state_machine__8578__auto__);

(statearr_23524[(1)] = (1));

return statearr_23524;
});
var state_machine__8578__auto____1 = (function (state_23516){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_23516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e23525){if((e23525 instanceof Object)){
var ex__8581__auto__ = e23525;
var statearr_23526_23534 = state_23516;
(statearr_23526_23534[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23535 = state_23516;
state_23516 = G__23535;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_23516){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_23516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto__,close_chan,___$1,map__23484,map__23484__$1,modal_view))
})();
var state__8635__auto__ = (function (){var statearr_23527 = f__8634__auto__.call(null);
(statearr_23527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto__);

return statearr_23527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto__,close_chan,___$1,map__23484,map__23484__$1,modal_view))
);

return c__8633__auto__;
});})(map__23484,map__23484__$1,modal_view))
;

openthink.views.modal.t23485.prototype.om$core$IInitState$ = true;

openthink.views.modal.t23485.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__23484,map__23484__$1,modal_view){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891),cljs.core.async.chan.call(null)], null);
});})(map__23484,map__23484__$1,modal_view))
;

openthink.views.modal.t23485.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23484,map__23484__$1,modal_view){
return (function (_23487){
var self__ = this;
var _23487__$1 = this;
return self__.meta23486;
});})(map__23484,map__23484__$1,modal_view))
;

openthink.views.modal.t23485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23484,map__23484__$1,modal_view){
return (function (_23487,meta23486__$1){
var self__ = this;
var _23487__$1 = this;
return (new openthink.views.modal.t23485(self__.modal_view,self__.map__23484,self__.p__23439,self__.owner,self__.cursor,self__.modal,meta23486__$1));
});})(map__23484,map__23484__$1,modal_view))
;

openthink.views.modal.t23485.cljs$lang$type = true;

openthink.views.modal.t23485.cljs$lang$ctorStr = "openthink.views.modal/t23485";

openthink.views.modal.t23485.cljs$lang$ctorPrWriter = ((function (map__23484,map__23484__$1,modal_view){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"openthink.views.modal/t23485");
});})(map__23484,map__23484__$1,modal_view))
;

openthink.views.modal.__GT_t23485 = ((function (map__23484,map__23484__$1,modal_view){
return (function __GT_t23485(modal_view__$1,map__23484__$2,p__23439__$1,owner__$1,cursor__$1,modal__$1,meta23486){
return (new openthink.views.modal.t23485(modal_view__$1,map__23484__$2,p__23439__$1,owner__$1,cursor__$1,modal__$1,meta23486));
});})(map__23484,map__23484__$1,modal_view))
;

}

return (new openthink.views.modal.t23485(modal_view,map__23484__$1,p__23439,owner,cursor,modal,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),79,new cljs.core.Keyword(null,"end-line","end-line",1837326455),201,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),175,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/src/openthink/views/modal.cljs"], null)));
});

//# sourceMappingURL=modal.js.map