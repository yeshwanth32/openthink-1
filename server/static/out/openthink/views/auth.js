// Compiled by ClojureScript 0.0-2371
goog.provide('openthink.views.auth');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('openthink.utils');
goog.require('openthink.utils');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('clojure.string');
openthink.views.auth.login_form = (function login_form(data,owner){if(typeof openthink.views.auth.t14438 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.views.auth.t14438 = (function (owner,data,login_form,meta14439){
this.owner = owner;
this.data = data;
this.login_form = login_form;
this.meta14439 = meta14439;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.auth.t14438.cljs$lang$type = true;
openthink.views.auth.t14438.cljs$lang$ctorStr = "openthink.views.auth/t14438";
openthink.views.auth.t14438.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.views.auth/t14438");
});
openthink.views.auth.t14438.prototype.om$core$IRender$ = true;
openthink.views.auth.t14438.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"is-posting","is-posting",70438374))))
{return React.DOM.li(null,React.DOM.h4(null,"Logging in... Please wait."));
} else
{return React.DOM.li({"className": "login-form has-form", "onKeyPress": openthink.utils.do_on_enter.call(null,((function (this$__$1){
return (function (){return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"post","post",269697687)),(1));
});})(this$__$1))
)},React.DOM.div({"className": "row collapse"},React.DOM.div({"className": "small-3 columns"},sablono.interpreter.input.call(null,{"id": "login-username", "type": "text", "placeholder": "username", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"username","username",1605666410)), "onChange": ((function (this$__$1){
return (function (p1__14401_SHARP_){return openthink.utils.handle_change.call(null,p1__14401_SHARP_,self__.owner,new cljs.core.Keyword(null,"username","username",1605666410));
});})(this$__$1))
})),React.DOM.div({"className": "small-3 columns"},sablono.interpreter.input.call(null,{"id": "login-password", "type": "password", "placeholder": "password", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"password","password",417022471)), "onChange": ((function (this$__$1){
return (function (p1__14402_SHARP_){return openthink.utils.handle_change.call(null,p1__14402_SHARP_,self__.owner,new cljs.core.Keyword(null,"password","password",417022471));
});})(this$__$1))
})),React.DOM.div({"className": "small-3 columns"},React.DOM.button({"type": "button", "className": "btn btn-info", "onClick": ((function (this$__$1){
return (function (e){cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"post","post",269697687)),(1));
return false;
});})(this$__$1))
},"Login")),React.DOM.div({"className": "small-3 columns inline"},"or ",React.DOM.a({"href": "#", "onClick": ((function (this$__$1){
return (function (){return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.Keyword(null,"register","register",1968522516));
});})(this$__$1))
},"Register"))));
}
});
openthink.views.auth.t14438.prototype.om$core$IWillMount$ = true;
openthink.views.auth.t14438.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var post_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"post","post",269697687));var c__6596__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto__,post_ch,___$1){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto__,post_ch,___$1){
return (function (state_14461){var state_val_14462 = (state_14461[(1)]);if((state_val_14462 === (4)))
{var inst_14445 = (state_14461[(2)]);var inst_14446 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"is-posting","is-posting",70438374),true);var inst_14447 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];var inst_14448 = ["username","password"];var inst_14449 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"username","username",1605666410));var inst_14450 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"password","password",417022471));var inst_14451 = [inst_14449,inst_14450];var inst_14452 = cljs.core.PersistentHashMap.fromArrays(inst_14448,inst_14451);var inst_14453 = (function (){var posting = inst_14445;return ((function (posting,inst_14445,inst_14446,inst_14447,inst_14448,inst_14449,inst_14450,inst_14451,inst_14452,state_val_14462,c__6596__auto__,post_ch,___$1){
return (function (resp){cljs.core.println.call(null,"login form returned");
cljs.core.println.call(null,resp);
var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);cljs.core.println.call(null,resp__$1);
if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032)))
{return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"is-posting","is-posting",70438374),false);
} else
{return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"user","user",1532431356),resp__$1);
}
});
;})(posting,inst_14445,inst_14446,inst_14447,inst_14448,inst_14449,inst_14450,inst_14451,inst_14452,state_val_14462,c__6596__auto__,post_ch,___$1))
})();var inst_14454 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_14452,inst_14453];var inst_14455 = cljs.core.PersistentHashMap.fromArrays(inst_14447,inst_14454);var inst_14456 = ajax.core.POST.call(null,"/login",inst_14455);var state_14461__$1 = (function (){var statearr_14463 = state_14461;(statearr_14463[(7)] = inst_14456);
(statearr_14463[(8)] = inst_14446);
return statearr_14463;
})();var statearr_14464_14473 = state_14461__$1;(statearr_14464_14473[(2)] = null);
(statearr_14464_14473[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14462 === (3)))
{var inst_14459 = (state_14461[(2)]);var state_14461__$1 = state_14461;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14461__$1,inst_14459);
} else
{if((state_val_14462 === (2)))
{var state_14461__$1 = state_14461;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14461__$1,(4),post_ch);
} else
{if((state_val_14462 === (1)))
{var state_14461__$1 = state_14461;var statearr_14465_14474 = state_14461__$1;(statearr_14465_14474[(2)] = null);
(statearr_14465_14474[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6596__auto__,post_ch,___$1))
;return ((function (switch__6581__auto__,c__6596__auto__,post_ch,___$1){
return (function() {
var state_machine__6582__auto__ = null;
var state_machine__6582__auto____0 = (function (){var statearr_14469 = [null,null,null,null,null,null,null,null,null];(statearr_14469[(0)] = state_machine__6582__auto__);
(statearr_14469[(1)] = (1));
return statearr_14469;
});
var state_machine__6582__auto____1 = (function (state_14461){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_14461);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e14470){if((e14470 instanceof Object))
{var ex__6585__auto__ = e14470;var statearr_14471_14475 = state_14461;(statearr_14471_14475[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14461);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14470;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14476 = state_14461;
state_14461 = G__14476;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_14461){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_14461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto__,post_ch,___$1))
})();var state__6598__auto__ = (function (){var statearr_14472 = f__6597__auto__.call(null);(statearr_14472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto__);
return statearr_14472;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto__,post_ch,___$1))
);
return c__6596__auto__;
});
openthink.views.auth.t14438.prototype.om$core$IInitState$ = true;
openthink.views.auth.t14438.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"post","post",269697687),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"username","username",1605666410),"",new cljs.core.Keyword(null,"password","password",417022471),"",new cljs.core.Keyword(null,"is-posting","is-posting",70438374),false], null);
});
openthink.views.auth.t14438.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14440){var self__ = this;
var _14440__$1 = this;return self__.meta14439;
});
openthink.views.auth.t14438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14440,meta14439__$1){var self__ = this;
var _14440__$1 = this;return (new openthink.views.auth.t14438(self__.owner,self__.data,self__.login_form,meta14439__$1));
});
openthink.views.auth.__GT_t14438 = (function __GT_t14438(owner__$1,data__$1,login_form__$1,meta14439){return (new openthink.views.auth.t14438(owner__$1,data__$1,login_form__$1,meta14439));
});
}
return (new openthink.views.auth.t14438(owner,data,login_form,null));
});
openthink.views.auth.logout_button = (function logout_button(data,owner){if(typeof openthink.views.auth.t14480 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.views.auth.t14480 = (function (owner,data,logout_button,meta14481){
this.owner = owner;
this.data = data;
this.logout_button = logout_button;
this.meta14481 = meta14481;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.auth.t14480.cljs$lang$type = true;
openthink.views.auth.t14480.cljs$lang$ctorStr = "openthink.views.auth/t14480";
openthink.views.auth.t14480.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.views.auth/t14480");
});
openthink.views.auth.t14480.prototype.om$core$IRender$ = true;
openthink.views.auth.t14480.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.button({"type": "button", "onClick": ((function (this$__$1){
return (function (_){return ajax.core.POST.call(null,"/logout",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (this$__$1){
return (function (resp){cljs.core.println.call(null,resp);
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"user","user",1532431356),null);
});})(this$__$1))
], null));
});})(this$__$1))
},"Log out");
});
openthink.views.auth.t14480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14482){var self__ = this;
var _14482__$1 = this;return self__.meta14481;
});
openthink.views.auth.t14480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14482,meta14481__$1){var self__ = this;
var _14482__$1 = this;return (new openthink.views.auth.t14480(self__.owner,self__.data,self__.logout_button,meta14481__$1));
});
openthink.views.auth.__GT_t14480 = (function __GT_t14480(owner__$1,data__$1,logout_button__$1,meta14481){return (new openthink.views.auth.t14480(owner__$1,data__$1,logout_button__$1,meta14481));
});
}
return (new openthink.views.auth.t14480(owner,data,logout_button,null));
});
openthink.views.auth.register_form = (function register_form(data,owner){if(typeof openthink.views.auth.t14526 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.views.auth.t14526 = (function (owner,data,register_form,meta14527){
this.owner = owner;
this.data = data;
this.register_form = register_form;
this.meta14527 = meta14527;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.auth.t14526.cljs$lang$type = true;
openthink.views.auth.t14526.cljs$lang$ctorStr = "openthink.views.auth/t14526";
openthink.views.auth.t14526.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.views.auth/t14526");
});
openthink.views.auth.t14526.prototype.om$core$IRender$ = true;
openthink.views.auth.t14526.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"completed","completed",-486056503),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099))))
{return React.DOM.div({"className": "row register-section"},(function (){var attrs14529 = ("You have successfully registed as "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"username","username",1605666410)], null))));return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs14529))?sablono.interpreter.attributes.call(null,attrs14529):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14529))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14529)], null))));
})(),React.DOM.div({"className": "large-4 columns"},React.DOM.button({"type": "button", "className": "btn btn-info", "onClick": ((function (this$__$1){
return (function (e){cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891)),(1));
return false;
});})(this$__$1))
},"aiight")));
} else
{return React.DOM.div({"className": "row register-section", "onKeyPress": openthink.utils.do_on_enter.call(null,((function (this$__$1){
return (function (){return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"post","post",269697687)),(1));
});})(this$__$1))
)},React.DOM.h3(null,"Register your account and start posting!"),sablono.interpreter.interpret.call(null,(function (){var temp__4126__auto__ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032));if(cljs.core.truth_(temp__4126__auto__))
{var error = temp__4126__auto__;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"large-12 columns"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"alert-box warning radius"], null),error], null)], null);
} else
{return null;
}
})()),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"posting","posting",919785887),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"large-12 columns"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"alert-box info radius"], null),"Registering account... Please wait"], null)], null):null)),React.DOM.div({"className": "large-12 columns"},sablono.interpreter.input.call(null,{"id": "register-username", "type": "text", "placeholder": "username", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"username","username",1605666410)), "onChange": ((function (this$__$1){
return (function (p1__14483_SHARP_){return openthink.utils.handle_change.call(null,p1__14483_SHARP_,self__.owner,new cljs.core.Keyword(null,"username","username",1605666410));
});})(this$__$1))
})),React.DOM.div({"className": "large-12 columns"},sablono.interpreter.input.call(null,{"id": "register-email", "type": "text", "placeholder": "email", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"email","email",1415816706)), "onChange": ((function (this$__$1){
return (function (p1__14484_SHARP_){return openthink.utils.handle_change.call(null,p1__14484_SHARP_,self__.owner,new cljs.core.Keyword(null,"email","email",1415816706));
});})(this$__$1))
})),React.DOM.div({"className": "large-12 columns"},sablono.interpreter.input.call(null,{"id": "register-password", "type": "password", "placeholder": "password", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"password","password",417022471)), "onChange": ((function (this$__$1){
return (function (p1__14485_SHARP_){return openthink.utils.handle_change.call(null,p1__14485_SHARP_,self__.owner,new cljs.core.Keyword(null,"password","password",417022471));
});})(this$__$1))
})),React.DOM.div({"className": "large-12 columns"},sablono.interpreter.input.call(null,{"id": "register-r-password", "type": "password", "placeholder": "repeat password", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"r-password","r-password",605579115)), "onChange": ((function (this$__$1){
return (function (p1__14486_SHARP_){return openthink.utils.handle_change.call(null,p1__14486_SHARP_,self__.owner,new cljs.core.Keyword(null,"r-password","r-password",605579115));
});})(this$__$1))
})),React.DOM.div({"className": "large-4 columns"},React.DOM.button({"type": "button", "className": "btn btn-info", "onClick": ((function (this$__$1){
return (function (e){cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"post","post",269697687)),(1));
return false;
});})(this$__$1))
},"Register")));
}
});
openthink.views.auth.t14526.prototype.om$core$IWillMount$ = true;
openthink.views.auth.t14526.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var post_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"post","post",269697687));var c__6596__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto__,post_ch,___$1){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto__,post_ch,___$1){
return (function (state_14553){var state_val_14554 = (state_14553[(1)]);if((state_val_14554 === (4)))
{var inst_14534 = (state_14553[(2)]);var inst_14535 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"posting","posting",919785887));var inst_14536 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032),null);var inst_14537 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];var inst_14538 = ["username","email","password","r-password"];var inst_14539 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"username","username",1605666410));var inst_14540 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"email","email",1415816706));var inst_14541 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"password","password",417022471));var inst_14542 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"r-password","r-password",605579115));var inst_14543 = [inst_14539,inst_14540,inst_14541,inst_14542];var inst_14544 = cljs.core.PersistentHashMap.fromArrays(inst_14538,inst_14543);var inst_14545 = (function (){var posting = inst_14534;return ((function (posting,inst_14534,inst_14535,inst_14536,inst_14537,inst_14538,inst_14539,inst_14540,inst_14541,inst_14542,inst_14543,inst_14544,state_val_14554,c__6596__auto__,post_ch,___$1){
return (function (resp){cljs.core.println.call(null,"register form returned");
cljs.core.println.call(null,resp);
var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);cljs.core.println.call(null,resp__$1);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795));
if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032)))
{return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(resp__$1));
} else
{om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"user","user",1532431356),resp__$1);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"completed","completed",-486056503));
}
});
;})(posting,inst_14534,inst_14535,inst_14536,inst_14537,inst_14538,inst_14539,inst_14540,inst_14541,inst_14542,inst_14543,inst_14544,state_val_14554,c__6596__auto__,post_ch,___$1))
})();var inst_14546 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_14544,inst_14545];var inst_14547 = cljs.core.PersistentHashMap.fromArrays(inst_14537,inst_14546);var inst_14548 = ajax.core.POST.call(null,"/register",inst_14547);var state_14553__$1 = (function (){var statearr_14555 = state_14553;(statearr_14555[(7)] = inst_14535);
(statearr_14555[(8)] = inst_14548);
(statearr_14555[(9)] = inst_14536);
return statearr_14555;
})();var statearr_14556_14565 = state_14553__$1;(statearr_14556_14565[(2)] = null);
(statearr_14556_14565[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14554 === (3)))
{var inst_14551 = (state_14553[(2)]);var state_14553__$1 = state_14553;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14553__$1,inst_14551);
} else
{if((state_val_14554 === (2)))
{var state_14553__$1 = state_14553;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14553__$1,(4),post_ch);
} else
{if((state_val_14554 === (1)))
{var state_14553__$1 = state_14553;var statearr_14557_14566 = state_14553__$1;(statearr_14557_14566[(2)] = null);
(statearr_14557_14566[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6596__auto__,post_ch,___$1))
;return ((function (switch__6581__auto__,c__6596__auto__,post_ch,___$1){
return (function() {
var state_machine__6582__auto__ = null;
var state_machine__6582__auto____0 = (function (){var statearr_14561 = [null,null,null,null,null,null,null,null,null,null];(statearr_14561[(0)] = state_machine__6582__auto__);
(statearr_14561[(1)] = (1));
return statearr_14561;
});
var state_machine__6582__auto____1 = (function (state_14553){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_14553);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e14562){if((e14562 instanceof Object))
{var ex__6585__auto__ = e14562;var statearr_14563_14567 = state_14553;(statearr_14563_14567[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14553);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14562;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14568 = state_14553;
state_14553 = G__14568;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_14553){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_14553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto__,post_ch,___$1))
})();var state__6598__auto__ = (function (){var statearr_14564 = f__6597__auto__.call(null);(statearr_14564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto__);
return statearr_14564;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto__,post_ch,___$1))
);
return c__6596__auto__;
});
openthink.views.auth.t14526.prototype.om$core$IInitState$ = true;
openthink.views.auth.t14526.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"post","post",269697687),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795),new cljs.core.Keyword(null,"username","username",1605666410),"",new cljs.core.Keyword(null,"email","email",1415816706),"",new cljs.core.Keyword(null,"password","password",417022471),"",new cljs.core.Keyword(null,"r-password","r-password",605579115),""], null);
});
openthink.views.auth.t14526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14528){var self__ = this;
var _14528__$1 = this;return self__.meta14527;
});
openthink.views.auth.t14526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14528,meta14527__$1){var self__ = this;
var _14528__$1 = this;return (new openthink.views.auth.t14526(self__.owner,self__.data,self__.register_form,meta14527__$1));
});
openthink.views.auth.__GT_t14526 = (function __GT_t14526(owner__$1,data__$1,register_form__$1,meta14527){return (new openthink.views.auth.t14526(owner__$1,data__$1,register_form__$1,meta14527));
});
}
return (new openthink.views.auth.t14526(owner,data,register_form,null));
});

//# sourceMappingURL=auth.js.map