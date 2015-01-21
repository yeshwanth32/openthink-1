// Compiled by ClojureScript 0.0-2511
goog.provide('openthink.views.auth');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('openthink.utils');
goog.require('om.core');
goog.require('clojure.string');
openthink.views.auth.login_form = (function login_form(data,owner){
if(typeof openthink.views.auth.t21080 !== 'undefined'){
} else {

/**
* @constructor
*/
openthink.views.auth.t21080 = (function (owner,data,login_form,meta21081){
this.owner = owner;
this.data = data;
this.login_form = login_form;
this.meta21081 = meta21081;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.auth.t21080.prototype.om$core$IRender$ = true;

openthink.views.auth.t21080.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"is-posting","is-posting",70438374)))){
return React.DOM.li(null,React.DOM.h4(null,"Logging in... Please wait."));
} else {
return React.DOM.li({"className": "login-form has-form", "onKeyPress": openthink.utils.do_on_enter.call(null,((function (this$__$1){
return (function (){
return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"post","post",269697687)),(1));
});})(this$__$1))
)},React.DOM.div({"className": "row collapse"},React.DOM.div({"className": "small-3 columns"},sablono.interpreter.input.call(null,{"id": "login-username", "type": "text", "placeholder": "username", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"username","username",1605666410)), "onChange": ((function (this$__$1){
return (function (p1__21043_SHARP_){
return openthink.utils.handle_change.call(null,p1__21043_SHARP_,self__.owner,new cljs.core.Keyword(null,"username","username",1605666410));
});})(this$__$1))
})),React.DOM.div({"className": "small-3 columns"},sablono.interpreter.input.call(null,{"id": "login-password", "type": "password", "placeholder": "password", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"password","password",417022471)), "onChange": ((function (this$__$1){
return (function (p1__21044_SHARP_){
return openthink.utils.handle_change.call(null,p1__21044_SHARP_,self__.owner,new cljs.core.Keyword(null,"password","password",417022471));
});})(this$__$1))
})),React.DOM.div({"className": "small-3 columns"},React.DOM.button({"type": "button", "className": "btn btn-info", "onClick": ((function (this$__$1){
return (function (e){
cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"post","post",269697687)),(1));

return false;
});})(this$__$1))
},"Login")),React.DOM.div({"className": "small-3 columns inline"},"or ",React.DOM.a({"href": "#", "onClick": ((function (this$__$1){
return (function (){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.Keyword(null,"register","register",1968522516));
});})(this$__$1))
},"Register"))));
}
});

openthink.views.auth.t21080.prototype.om$core$IWillMount$ = true;

openthink.views.auth.t21080.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var post_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"post","post",269697687));
var c__8633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto__,post_ch,___$1){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto__,post_ch,___$1){
return (function (state_21103){
var state_val_21104 = (state_21103[(1)]);
if((state_val_21104 === (4))){
var inst_21087 = (state_21103[(2)]);
var inst_21088 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"is-posting","is-posting",70438374),true);
var inst_21089 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];
var inst_21090 = ["username","password"];
var inst_21091 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"username","username",1605666410));
var inst_21092 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"password","password",417022471));
var inst_21093 = [inst_21091,inst_21092];
var inst_21094 = cljs.core.PersistentHashMap.fromArrays(inst_21090,inst_21093);
var inst_21095 = (function (){var posting = inst_21087;
return ((function (posting,inst_21087,inst_21088,inst_21089,inst_21090,inst_21091,inst_21092,inst_21093,inst_21094,state_val_21104,c__8633__auto__,post_ch,___$1){
return (function (resp){
cljs.core.println.call(null,"login form returned");

cljs.core.println.call(null,resp);

var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);
cljs.core.println.call(null,resp__$1);

if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032))){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"is-posting","is-posting",70438374),false);
} else {
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"user","user",1532431356),resp__$1);
}
});
;})(posting,inst_21087,inst_21088,inst_21089,inst_21090,inst_21091,inst_21092,inst_21093,inst_21094,state_val_21104,c__8633__auto__,post_ch,___$1))
})();
var inst_21096 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_21094,inst_21095];
var inst_21097 = cljs.core.PersistentHashMap.fromArrays(inst_21089,inst_21096);
var inst_21098 = ajax.core.POST.call(null,"/login",inst_21097);
var state_21103__$1 = (function (){var statearr_21105 = state_21103;
(statearr_21105[(7)] = inst_21088);

(statearr_21105[(8)] = inst_21098);

return statearr_21105;
})();
var statearr_21106_21115 = state_21103__$1;
(statearr_21106_21115[(2)] = null);

(statearr_21106_21115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21104 === (3))){
var inst_21101 = (state_21103[(2)]);
var state_21103__$1 = state_21103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21103__$1,inst_21101);
} else {
if((state_val_21104 === (2))){
var state_21103__$1 = state_21103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21103__$1,(4),post_ch);
} else {
if((state_val_21104 === (1))){
var state_21103__$1 = state_21103;
var statearr_21107_21116 = state_21103__$1;
(statearr_21107_21116[(2)] = null);

(statearr_21107_21116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__8633__auto__,post_ch,___$1))
;
return ((function (switch__8577__auto__,c__8633__auto__,post_ch,___$1){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_21111 = [null,null,null,null,null,null,null,null,null];
(statearr_21111[(0)] = state_machine__8578__auto__);

(statearr_21111[(1)] = (1));

return statearr_21111;
});
var state_machine__8578__auto____1 = (function (state_21103){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_21103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e21112){if((e21112 instanceof Object)){
var ex__8581__auto__ = e21112;
var statearr_21113_21117 = state_21103;
(statearr_21113_21117[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21118 = state_21103;
state_21103 = G__21118;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_21103){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_21103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto__,post_ch,___$1))
})();
var state__8635__auto__ = (function (){var statearr_21114 = f__8634__auto__.call(null);
(statearr_21114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto__);

return statearr_21114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto__,post_ch,___$1))
);

return c__8633__auto__;
});

openthink.views.auth.t21080.prototype.om$core$IInitState$ = true;

openthink.views.auth.t21080.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"post","post",269697687),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"username","username",1605666410),"",new cljs.core.Keyword(null,"password","password",417022471),"",new cljs.core.Keyword(null,"is-posting","is-posting",70438374),false], null);
});

openthink.views.auth.t21080.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21082){
var self__ = this;
var _21082__$1 = this;
return self__.meta21081;
});

openthink.views.auth.t21080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21082,meta21081__$1){
var self__ = this;
var _21082__$1 = this;
return (new openthink.views.auth.t21080(self__.owner,self__.data,self__.login_form,meta21081__$1));
});

openthink.views.auth.t21080.cljs$lang$type = true;

openthink.views.auth.t21080.cljs$lang$ctorStr = "openthink.views.auth/t21080";

openthink.views.auth.t21080.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"openthink.views.auth/t21080");
});

openthink.views.auth.__GT_t21080 = (function __GT_t21080(owner__$1,data__$1,login_form__$1,meta21081){
return (new openthink.views.auth.t21080(owner__$1,data__$1,login_form__$1,meta21081));
});

}

return (new openthink.views.auth.t21080(owner,data,login_form,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),39,new cljs.core.Keyword(null,"end-line","end-line",1837326455),60,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),11,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/src/openthink/views/auth.cljs"], null)));
});
openthink.views.auth.logout_button = (function logout_button(data,owner){
if(typeof openthink.views.auth.t21122 !== 'undefined'){
} else {

/**
* @constructor
*/
openthink.views.auth.t21122 = (function (owner,data,logout_button,meta21123){
this.owner = owner;
this.data = data;
this.logout_button = logout_button;
this.meta21123 = meta21123;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.auth.t21122.prototype.om$core$IRender$ = true;

openthink.views.auth.t21122.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.button({"type": "button", "onClick": ((function (this$__$1){
return (function (_){
return ajax.core.POST.call(null,"/logout",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (this$__$1){
return (function (resp){
cljs.core.println.call(null,resp);

return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"user","user",1532431356),null);
});})(this$__$1))
], null));
});})(this$__$1))
},"Log out");
});

openthink.views.auth.t21122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21124){
var self__ = this;
var _21124__$1 = this;
return self__.meta21123;
});

openthink.views.auth.t21122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21124,meta21123__$1){
var self__ = this;
var _21124__$1 = this;
return (new openthink.views.auth.t21122(self__.owner,self__.data,self__.logout_button,meta21123__$1));
});

openthink.views.auth.t21122.cljs$lang$type = true;

openthink.views.auth.t21122.cljs$lang$ctorStr = "openthink.views.auth/t21122";

openthink.views.auth.t21122.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"openthink.views.auth/t21122");
});

openthink.views.auth.__GT_t21122 = (function __GT_t21122(owner__$1,data__$1,logout_button__$1,meta21123){
return (new openthink.views.auth.t21122(owner__$1,data__$1,logout_button__$1,meta21123));
});

}

return (new openthink.views.auth.t21122(owner,data,logout_button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),27,new cljs.core.Keyword(null,"end-line","end-line",1837326455),72,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),63,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/src/openthink/views/auth.cljs"], null)));
});
openthink.views.auth.register_form = (function register_form(data,owner){
if(typeof openthink.views.auth.t21168 !== 'undefined'){
} else {

/**
* @constructor
*/
openthink.views.auth.t21168 = (function (owner,data,register_form,meta21169){
this.owner = owner;
this.data = data;
this.register_form = register_form;
this.meta21169 = meta21169;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.auth.t21168.prototype.om$core$IRender$ = true;

openthink.views.auth.t21168.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"completed","completed",-486056503),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099)))){
return React.DOM.div({"className": "row register-section"},(function (){var attrs21171 = [cljs.core.str("You have successfully registed as "),cljs.core.str(cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"username","username",1605666410)], null)))].join('');
return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs21171))?sablono.interpreter.attributes.call(null,attrs21171):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs21171))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21171)], null))));
})(),React.DOM.div({"className": "large-4 columns"},React.DOM.button({"type": "button", "className": "btn btn-info", "onClick": ((function (this$__$1){
return (function (e){
cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891)),(1));

return false;
});})(this$__$1))
},"aiight")));
} else {
return React.DOM.div({"className": "row register-section", "onKeyPress": openthink.utils.do_on_enter.call(null,((function (this$__$1){
return (function (){
return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"post","post",269697687)),(1));
});})(this$__$1))
)},React.DOM.h3(null,"Register your account and start posting!"),sablono.interpreter.interpret.call(null,(function (){var temp__4126__auto__ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(temp__4126__auto__)){
var error = temp__4126__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"large-12 columns"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"alert-box warning radius"], null),error], null)], null);
} else {
return null;
}
})()),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"posting","posting",919785887),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"large-12 columns"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"alert-box info radius"], null),"Registering account... Please wait"], null)], null):null)),React.DOM.div({"className": "large-12 columns"},sablono.interpreter.input.call(null,{"id": "register-username", "type": "text", "placeholder": "username", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"username","username",1605666410)), "onChange": ((function (this$__$1){
return (function (p1__21125_SHARP_){
return openthink.utils.handle_change.call(null,p1__21125_SHARP_,self__.owner,new cljs.core.Keyword(null,"username","username",1605666410));
});})(this$__$1))
})),React.DOM.div({"className": "large-12 columns"},sablono.interpreter.input.call(null,{"id": "register-email", "type": "text", "placeholder": "email", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"email","email",1415816706)), "onChange": ((function (this$__$1){
return (function (p1__21126_SHARP_){
return openthink.utils.handle_change.call(null,p1__21126_SHARP_,self__.owner,new cljs.core.Keyword(null,"email","email",1415816706));
});})(this$__$1))
})),React.DOM.div({"className": "large-12 columns"},sablono.interpreter.input.call(null,{"id": "register-password", "type": "password", "placeholder": "password", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"password","password",417022471)), "onChange": ((function (this$__$1){
return (function (p1__21127_SHARP_){
return openthink.utils.handle_change.call(null,p1__21127_SHARP_,self__.owner,new cljs.core.Keyword(null,"password","password",417022471));
});})(this$__$1))
})),React.DOM.div({"className": "large-12 columns"},sablono.interpreter.input.call(null,{"id": "register-r-password", "type": "password", "placeholder": "repeat password", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"r-password","r-password",605579115)), "onChange": ((function (this$__$1){
return (function (p1__21128_SHARP_){
return openthink.utils.handle_change.call(null,p1__21128_SHARP_,self__.owner,new cljs.core.Keyword(null,"r-password","r-password",605579115));
});})(this$__$1))
})),React.DOM.div({"className": "large-4 columns"},React.DOM.button({"type": "button", "className": "btn btn-info", "onClick": ((function (this$__$1){
return (function (e){
cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"post","post",269697687)),(1));

return false;
});})(this$__$1))
},"Register")));
}
});

openthink.views.auth.t21168.prototype.om$core$IWillMount$ = true;

openthink.views.auth.t21168.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var post_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"post","post",269697687));
var c__8633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto__,post_ch,___$1){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto__,post_ch,___$1){
return (function (state_21195){
var state_val_21196 = (state_21195[(1)]);
if((state_val_21196 === (4))){
var inst_21176 = (state_21195[(2)]);
var inst_21177 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"posting","posting",919785887));
var inst_21178 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032),null);
var inst_21179 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];
var inst_21180 = ["username","email","password","r-password"];
var inst_21181 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"username","username",1605666410));
var inst_21182 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"email","email",1415816706));
var inst_21183 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"password","password",417022471));
var inst_21184 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"r-password","r-password",605579115));
var inst_21185 = [inst_21181,inst_21182,inst_21183,inst_21184];
var inst_21186 = cljs.core.PersistentHashMap.fromArrays(inst_21180,inst_21185);
var inst_21187 = (function (){var posting = inst_21176;
return ((function (posting,inst_21176,inst_21177,inst_21178,inst_21179,inst_21180,inst_21181,inst_21182,inst_21183,inst_21184,inst_21185,inst_21186,state_val_21196,c__8633__auto__,post_ch,___$1){
return (function (resp){
cljs.core.println.call(null,"register form returned");

cljs.core.println.call(null,resp);

var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);
cljs.core.println.call(null,resp__$1);

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795));

if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032))){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(resp__$1));
} else {
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"user","user",1532431356),resp__$1);

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"completed","completed",-486056503));
}
});
;})(posting,inst_21176,inst_21177,inst_21178,inst_21179,inst_21180,inst_21181,inst_21182,inst_21183,inst_21184,inst_21185,inst_21186,state_val_21196,c__8633__auto__,post_ch,___$1))
})();
var inst_21188 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_21186,inst_21187];
var inst_21189 = cljs.core.PersistentHashMap.fromArrays(inst_21179,inst_21188);
var inst_21190 = ajax.core.POST.call(null,"/register",inst_21189);
var state_21195__$1 = (function (){var statearr_21197 = state_21195;
(statearr_21197[(7)] = inst_21178);

(statearr_21197[(8)] = inst_21190);

(statearr_21197[(9)] = inst_21177);

return statearr_21197;
})();
var statearr_21198_21207 = state_21195__$1;
(statearr_21198_21207[(2)] = null);

(statearr_21198_21207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (3))){
var inst_21193 = (state_21195[(2)]);
var state_21195__$1 = state_21195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21195__$1,inst_21193);
} else {
if((state_val_21196 === (2))){
var state_21195__$1 = state_21195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21195__$1,(4),post_ch);
} else {
if((state_val_21196 === (1))){
var state_21195__$1 = state_21195;
var statearr_21199_21208 = state_21195__$1;
(statearr_21199_21208[(2)] = null);

(statearr_21199_21208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__8633__auto__,post_ch,___$1))
;
return ((function (switch__8577__auto__,c__8633__auto__,post_ch,___$1){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_21203 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21203[(0)] = state_machine__8578__auto__);

(statearr_21203[(1)] = (1));

return statearr_21203;
});
var state_machine__8578__auto____1 = (function (state_21195){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_21195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e21204){if((e21204 instanceof Object)){
var ex__8581__auto__ = e21204;
var statearr_21205_21209 = state_21195;
(statearr_21205_21209[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21210 = state_21195;
state_21195 = G__21210;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_21195){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_21195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto__,post_ch,___$1))
})();
var state__8635__auto__ = (function (){var statearr_21206 = f__8634__auto__.call(null);
(statearr_21206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto__);

return statearr_21206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto__,post_ch,___$1))
);

return c__8633__auto__;
});

openthink.views.auth.t21168.prototype.om$core$IInitState$ = true;

openthink.views.auth.t21168.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"post","post",269697687),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795),new cljs.core.Keyword(null,"username","username",1605666410),"",new cljs.core.Keyword(null,"email","email",1415816706),"",new cljs.core.Keyword(null,"password","password",417022471),"",new cljs.core.Keyword(null,"r-password","r-password",605579115),""], null);
});

openthink.views.auth.t21168.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21170){
var self__ = this;
var _21170__$1 = this;
return self__.meta21169;
});

openthink.views.auth.t21168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21170,meta21169__$1){
var self__ = this;
var _21170__$1 = this;
return (new openthink.views.auth.t21168(self__.owner,self__.data,self__.register_form,meta21169__$1));
});

openthink.views.auth.t21168.cljs$lang$type = true;

openthink.views.auth.t21168.cljs$lang$ctorStr = "openthink.views.auth/t21168";

openthink.views.auth.t21168.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"openthink.views.auth/t21168");
});

openthink.views.auth.__GT_t21168 = (function __GT_t21168(owner__$1,data__$1,register_form__$1,meta21169){
return (new openthink.views.auth.t21168(owner__$1,data__$1,register_form__$1,meta21169));
});

}

return (new openthink.views.auth.t21168(owner,data,register_form,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),41,new cljs.core.Keyword(null,"end-line","end-line",1837326455),160,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),76,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/src/openthink/views/auth.cljs"], null)));
});

//# sourceMappingURL=auth.js.map