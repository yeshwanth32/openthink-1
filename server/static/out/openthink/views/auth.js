// Compiled by ClojureScript 1.9.293 {}
goog.provide('openthink.views.auth');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('openthink.utils');
goog.require('om.core');
goog.require('clojure.string');
openthink.views.auth.login_form = (function openthink$views$auth$login_form(data,owner){
if(typeof openthink.views.auth.t_openthink$views$auth43879 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
openthink.views.auth.t_openthink$views$auth43879 = (function (data,owner,meta43880){
this.data = data;
this.owner = owner;
this.meta43880 = meta43880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
openthink.views.auth.t_openthink$views$auth43879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43881,meta43880__$1){
var self__ = this;
var _43881__$1 = this;
return (new openthink.views.auth.t_openthink$views$auth43879(self__.data,self__.owner,meta43880__$1));
});

openthink.views.auth.t_openthink$views$auth43879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43881){
var self__ = this;
var _43881__$1 = this;
return self__.meta43880;
});

openthink.views.auth.t_openthink$views$auth43879.prototype.om$core$IInitState$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.auth.t_openthink$views$auth43879.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"post","post",269697687),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"username","username",1605666410),"",new cljs.core.Keyword(null,"password","password",417022471),"",new cljs.core.Keyword(null,"is-posting","is-posting",70438374),false], null);
});

openthink.views.auth.t_openthink$views$auth43879.prototype.om$core$IWillMount$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.auth.t_openthink$views$auth43879.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var post_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"post","post",269697687));
var c__11475__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto__,post_ch,___$1){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto__,post_ch,___$1){
return (function (state_43900){
var state_val_43901 = (state_43900[(1)]);
if((state_val_43901 === (1))){
var state_43900__$1 = state_43900;
var statearr_43902_43914 = state_43900__$1;
(statearr_43902_43914[(2)] = null);

(statearr_43902_43914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43901 === (2))){
var state_43900__$1 = state_43900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43900__$1,(4),post_ch);
} else {
if((state_val_43901 === (3))){
var inst_43898 = (state_43900[(2)]);
var state_43900__$1 = state_43900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43900__$1,inst_43898);
} else {
if((state_val_43901 === (4))){
var inst_43884 = (state_43900[(2)]);
var inst_43885 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"is-posting","is-posting",70438374),true);
var inst_43886 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];
var inst_43887 = ["username","password"];
var inst_43888 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"username","username",1605666410));
var inst_43889 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"password","password",417022471));
var inst_43890 = [inst_43888,inst_43889];
var inst_43891 = cljs.core.PersistentHashMap.fromArrays(inst_43887,inst_43890);
var inst_43892 = (function (){var posting = inst_43884;
return ((function (posting,inst_43884,inst_43885,inst_43886,inst_43887,inst_43888,inst_43889,inst_43890,inst_43891,state_val_43901,c__11475__auto__,post_ch,___$1){
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
;})(posting,inst_43884,inst_43885,inst_43886,inst_43887,inst_43888,inst_43889,inst_43890,inst_43891,state_val_43901,c__11475__auto__,post_ch,___$1))
})();
var inst_43893 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_43891,inst_43892];
var inst_43894 = cljs.core.PersistentHashMap.fromArrays(inst_43886,inst_43893);
var inst_43895 = ajax.core.POST.call(null,"/login",inst_43894);
var state_43900__$1 = (function (){var statearr_43903 = state_43900;
(statearr_43903[(7)] = inst_43895);

(statearr_43903[(8)] = inst_43885);

return statearr_43903;
})();
var statearr_43904_43915 = state_43900__$1;
(statearr_43904_43915[(2)] = null);

(statearr_43904_43915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__11475__auto__,post_ch,___$1))
;
return ((function (switch__11410__auto__,c__11475__auto__,post_ch,___$1){
return (function() {
var openthink$views$auth$login_form_$_state_machine__11411__auto__ = null;
var openthink$views$auth$login_form_$_state_machine__11411__auto____0 = (function (){
var statearr_43908 = [null,null,null,null,null,null,null,null,null];
(statearr_43908[(0)] = openthink$views$auth$login_form_$_state_machine__11411__auto__);

(statearr_43908[(1)] = (1));

return statearr_43908;
});
var openthink$views$auth$login_form_$_state_machine__11411__auto____1 = (function (state_43900){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_43900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e43909){if((e43909 instanceof Object)){
var ex__11414__auto__ = e43909;
var statearr_43910_43916 = state_43900;
(statearr_43910_43916[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43917 = state_43900;
state_43900 = G__43917;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
openthink$views$auth$login_form_$_state_machine__11411__auto__ = function(state_43900){
switch(arguments.length){
case 0:
return openthink$views$auth$login_form_$_state_machine__11411__auto____0.call(this);
case 1:
return openthink$views$auth$login_form_$_state_machine__11411__auto____1.call(this,state_43900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
openthink$views$auth$login_form_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = openthink$views$auth$login_form_$_state_machine__11411__auto____0;
openthink$views$auth$login_form_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = openthink$views$auth$login_form_$_state_machine__11411__auto____1;
return openthink$views$auth$login_form_$_state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto__,post_ch,___$1))
})();
var state__11477__auto__ = (function (){var statearr_43911 = f__11476__auto__.call(null);
(statearr_43911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto__);

return statearr_43911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto__,post_ch,___$1))
);

return c__11475__auto__;
});

openthink.views.auth.t_openthink$views$auth43879.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.auth.t_openthink$views$auth43879.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"is-posting","is-posting",70438374)))){
return React.DOM.li(null,React.DOM.h4(null,"Logging in... Please wait."));
} else {
return React.DOM.li(({"className": "login-form has-form", "onKeyPress": openthink.utils.do_on_enter.call(null,((function (this$__$1){
return (function (){
return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"post","post",269697687)),(1));
});})(this$__$1))
)}),React.DOM.div(({"className": "row collapse"}),React.DOM.div(({"className": "small-3 columns"}),sablono.interpreter.input.call(null,({"id": "login-username", "type": "text", "placeholder": "username", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"username","username",1605666410)), "onChange": ((function (this$__$1){
return (function (p1__43842_SHARP_){
return openthink.utils.handle_change.call(null,p1__43842_SHARP_,self__.owner,new cljs.core.Keyword(null,"username","username",1605666410));
});})(this$__$1))
}))),React.DOM.div(({"className": "small-3 columns"}),sablono.interpreter.input.call(null,({"id": "login-password", "type": "password", "placeholder": "password", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"password","password",417022471)), "onChange": ((function (this$__$1){
return (function (p1__43843_SHARP_){
return openthink.utils.handle_change.call(null,p1__43843_SHARP_,self__.owner,new cljs.core.Keyword(null,"password","password",417022471));
});})(this$__$1))
}))),React.DOM.div(({"className": "small-3 columns"}),React.DOM.button(({"type": "button", "className": "btn btn-info", "onClick": ((function (this$__$1){
return (function (e){
cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"post","post",269697687)),(1));

return false;
});})(this$__$1))
}),"Login")),React.DOM.div(({"className": "small-3 columns inline"}),"or ",React.DOM.a(({"href": "#", "onClick": ((function (this$__$1){
return (function (){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.Keyword(null,"register","register",1968522516));
});})(this$__$1))
}),"Register"))));
}
});

openthink.views.auth.t_openthink$views$auth43879.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta43880","meta43880",-629309221,null)], null);
});

openthink.views.auth.t_openthink$views$auth43879.cljs$lang$type = true;

openthink.views.auth.t_openthink$views$auth43879.cljs$lang$ctorStr = "openthink.views.auth/t_openthink$views$auth43879";

openthink.views.auth.t_openthink$views$auth43879.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"openthink.views.auth/t_openthink$views$auth43879");
});

openthink.views.auth.__GT_t_openthink$views$auth43879 = (function openthink$views$auth$login_form_$___GT_t_openthink$views$auth43879(data__$1,owner__$1,meta43880){
return (new openthink.views.auth.t_openthink$views$auth43879(data__$1,owner__$1,meta43880));
});

}

return (new openthink.views.auth.t_openthink$views$auth43879(data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
openthink.views.auth.logout_button = (function openthink$views$auth$logout_button(data,owner){
if(typeof openthink.views.auth.t_openthink$views$auth43921 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
openthink.views.auth.t_openthink$views$auth43921 = (function (data,owner,meta43922){
this.data = data;
this.owner = owner;
this.meta43922 = meta43922;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
openthink.views.auth.t_openthink$views$auth43921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43923,meta43922__$1){
var self__ = this;
var _43923__$1 = this;
return (new openthink.views.auth.t_openthink$views$auth43921(self__.data,self__.owner,meta43922__$1));
});

openthink.views.auth.t_openthink$views$auth43921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43923){
var self__ = this;
var _43923__$1 = this;
return self__.meta43922;
});

openthink.views.auth.t_openthink$views$auth43921.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.auth.t_openthink$views$auth43921.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.button(({"type": "button", "onClick": ((function (this$__$1){
return (function (_){
return ajax.core.POST.call(null,"/logout",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (this$__$1){
return (function (resp){
cljs.core.println.call(null,resp);

return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"user","user",1532431356),null);
});})(this$__$1))
], null));
});})(this$__$1))
}),"Log out");
});

openthink.views.auth.t_openthink$views$auth43921.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta43922","meta43922",-192936699,null)], null);
});

openthink.views.auth.t_openthink$views$auth43921.cljs$lang$type = true;

openthink.views.auth.t_openthink$views$auth43921.cljs$lang$ctorStr = "openthink.views.auth/t_openthink$views$auth43921";

openthink.views.auth.t_openthink$views$auth43921.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"openthink.views.auth/t_openthink$views$auth43921");
});

openthink.views.auth.__GT_t_openthink$views$auth43921 = (function openthink$views$auth$logout_button_$___GT_t_openthink$views$auth43921(data__$1,owner__$1,meta43922){
return (new openthink.views.auth.t_openthink$views$auth43921(data__$1,owner__$1,meta43922));
});

}

return (new openthink.views.auth.t_openthink$views$auth43921(data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
openthink.views.auth.register_form = (function openthink$views$auth$register_form(data,owner){
if(typeof openthink.views.auth.t_openthink$views$auth43967 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
openthink.views.auth.t_openthink$views$auth43967 = (function (data,owner,meta43968){
this.data = data;
this.owner = owner;
this.meta43968 = meta43968;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
openthink.views.auth.t_openthink$views$auth43967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43969,meta43968__$1){
var self__ = this;
var _43969__$1 = this;
return (new openthink.views.auth.t_openthink$views$auth43967(self__.data,self__.owner,meta43968__$1));
});

openthink.views.auth.t_openthink$views$auth43967.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43969){
var self__ = this;
var _43969__$1 = this;
return self__.meta43968;
});

openthink.views.auth.t_openthink$views$auth43967.prototype.om$core$IInitState$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.auth.t_openthink$views$auth43967.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"post","post",269697687),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795),new cljs.core.Keyword(null,"username","username",1605666410),"",new cljs.core.Keyword(null,"email","email",1415816706),"",new cljs.core.Keyword(null,"password","password",417022471),"",new cljs.core.Keyword(null,"r-password","r-password",605579115),""], null);
});

openthink.views.auth.t_openthink$views$auth43967.prototype.om$core$IWillMount$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.auth.t_openthink$views$auth43967.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var post_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"post","post",269697687));
var c__11475__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto__,post_ch,___$1){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto__,post_ch,___$1){
return (function (state_43991){
var state_val_43992 = (state_43991[(1)]);
if((state_val_43992 === (1))){
var state_43991__$1 = state_43991;
var statearr_43993_44006 = state_43991__$1;
(statearr_43993_44006[(2)] = null);

(statearr_43993_44006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43992 === (2))){
var state_43991__$1 = state_43991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43991__$1,(4),post_ch);
} else {
if((state_val_43992 === (3))){
var inst_43989 = (state_43991[(2)]);
var state_43991__$1 = state_43991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43991__$1,inst_43989);
} else {
if((state_val_43992 === (4))){
var inst_43972 = (state_43991[(2)]);
var inst_43973 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"posting","posting",919785887));
var inst_43974 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032),null);
var inst_43975 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];
var inst_43976 = ["username","email","password","r-password"];
var inst_43977 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"username","username",1605666410));
var inst_43978 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"email","email",1415816706));
var inst_43979 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"password","password",417022471));
var inst_43980 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"r-password","r-password",605579115));
var inst_43981 = [inst_43977,inst_43978,inst_43979,inst_43980];
var inst_43982 = cljs.core.PersistentHashMap.fromArrays(inst_43976,inst_43981);
var inst_43983 = (function (){var posting = inst_43972;
return ((function (posting,inst_43972,inst_43973,inst_43974,inst_43975,inst_43976,inst_43977,inst_43978,inst_43979,inst_43980,inst_43981,inst_43982,state_val_43992,c__11475__auto__,post_ch,___$1){
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
;})(posting,inst_43972,inst_43973,inst_43974,inst_43975,inst_43976,inst_43977,inst_43978,inst_43979,inst_43980,inst_43981,inst_43982,state_val_43992,c__11475__auto__,post_ch,___$1))
})();
var inst_43984 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_43982,inst_43983];
var inst_43985 = cljs.core.PersistentHashMap.fromArrays(inst_43975,inst_43984);
var inst_43986 = ajax.core.POST.call(null,"/register",inst_43985);
var state_43991__$1 = (function (){var statearr_43994 = state_43991;
(statearr_43994[(7)] = inst_43973);

(statearr_43994[(8)] = inst_43974);

(statearr_43994[(9)] = inst_43986);

return statearr_43994;
})();
var statearr_43995_44007 = state_43991__$1;
(statearr_43995_44007[(2)] = null);

(statearr_43995_44007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__11475__auto__,post_ch,___$1))
;
return ((function (switch__11410__auto__,c__11475__auto__,post_ch,___$1){
return (function() {
var openthink$views$auth$register_form_$_state_machine__11411__auto__ = null;
var openthink$views$auth$register_form_$_state_machine__11411__auto____0 = (function (){
var statearr_43999 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43999[(0)] = openthink$views$auth$register_form_$_state_machine__11411__auto__);

(statearr_43999[(1)] = (1));

return statearr_43999;
});
var openthink$views$auth$register_form_$_state_machine__11411__auto____1 = (function (state_43991){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_43991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e44000){if((e44000 instanceof Object)){
var ex__11414__auto__ = e44000;
var statearr_44001_44008 = state_43991;
(statearr_44001_44008[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44009 = state_43991;
state_43991 = G__44009;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
openthink$views$auth$register_form_$_state_machine__11411__auto__ = function(state_43991){
switch(arguments.length){
case 0:
return openthink$views$auth$register_form_$_state_machine__11411__auto____0.call(this);
case 1:
return openthink$views$auth$register_form_$_state_machine__11411__auto____1.call(this,state_43991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
openthink$views$auth$register_form_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = openthink$views$auth$register_form_$_state_machine__11411__auto____0;
openthink$views$auth$register_form_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = openthink$views$auth$register_form_$_state_machine__11411__auto____1;
return openthink$views$auth$register_form_$_state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto__,post_ch,___$1))
})();
var state__11477__auto__ = (function (){var statearr_44002 = f__11476__auto__.call(null);
(statearr_44002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto__);

return statearr_44002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto__,post_ch,___$1))
);

return c__11475__auto__;
});

openthink.views.auth.t_openthink$views$auth43967.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.auth.t_openthink$views$auth43967.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"completed","completed",-486056503),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099)))){
return React.DOM.div(({"className": "row register-section"}),(function (){var attrs44003 = [cljs.core.str("You have successfully registed as "),cljs.core.str(cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"username","username",1605666410)], null)))].join('');
return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs44003))?sablono.interpreter.attributes.call(null,attrs44003):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs44003))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44003)], null))));
})(),React.DOM.div(({"className": "large-4 columns"}),React.DOM.button(({"type": "button", "className": "btn btn-info", "onClick": ((function (this$__$1){
return (function (e){
cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891)),(1));

return false;
});})(this$__$1))
}),"aiight")));
} else {
return React.DOM.div(({"className": "row register-section", "onKeyPress": openthink.utils.do_on_enter.call(null,((function (this$__$1){
return (function (){
return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"post","post",269697687)),(1));
});})(this$__$1))
)}),React.DOM.h3(null,"Register your account and start posting!"),sablono.interpreter.interpret.call(null,(function (){var temp__4657__auto__ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(temp__4657__auto__)){
var error = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"large-12 columns"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"alert-box warning radius"], null),error], null)], null);
} else {
return null;
}
})()),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"posting","posting",919785887),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"large-12 columns"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"alert-box info radius"], null),"Registering account... Please wait"], null)], null):null)),React.DOM.div(({"className": "large-12 columns"}),sablono.interpreter.input.call(null,({"id": "register-username", "type": "text", "placeholder": "username", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"username","username",1605666410)), "onChange": ((function (this$__$1){
return (function (p1__43924_SHARP_){
return openthink.utils.handle_change.call(null,p1__43924_SHARP_,self__.owner,new cljs.core.Keyword(null,"username","username",1605666410));
});})(this$__$1))
}))),React.DOM.div(({"className": "large-12 columns"}),sablono.interpreter.input.call(null,({"id": "register-email", "type": "text", "placeholder": "email", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"email","email",1415816706)), "onChange": ((function (this$__$1){
return (function (p1__43925_SHARP_){
return openthink.utils.handle_change.call(null,p1__43925_SHARP_,self__.owner,new cljs.core.Keyword(null,"email","email",1415816706));
});})(this$__$1))
}))),React.DOM.div(({"className": "large-12 columns"}),sablono.interpreter.input.call(null,({"id": "register-password", "type": "password", "placeholder": "password", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"password","password",417022471)), "onChange": ((function (this$__$1){
return (function (p1__43926_SHARP_){
return openthink.utils.handle_change.call(null,p1__43926_SHARP_,self__.owner,new cljs.core.Keyword(null,"password","password",417022471));
});})(this$__$1))
}))),React.DOM.div(({"className": "large-12 columns"}),sablono.interpreter.input.call(null,({"id": "register-r-password", "type": "password", "placeholder": "repeat password", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"r-password","r-password",605579115)), "onChange": ((function (this$__$1){
return (function (p1__43927_SHARP_){
return openthink.utils.handle_change.call(null,p1__43927_SHARP_,self__.owner,new cljs.core.Keyword(null,"r-password","r-password",605579115));
});})(this$__$1))
}))),React.DOM.div(({"className": "large-4 columns"}),React.DOM.button(({"type": "button", "className": "btn btn-info", "onClick": ((function (this$__$1){
return (function (e){
cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"post","post",269697687)),(1));

return false;
});})(this$__$1))
}),"Register")));
}
});

openthink.views.auth.t_openthink$views$auth43967.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta43968","meta43968",-1126163973,null)], null);
});

openthink.views.auth.t_openthink$views$auth43967.cljs$lang$type = true;

openthink.views.auth.t_openthink$views$auth43967.cljs$lang$ctorStr = "openthink.views.auth/t_openthink$views$auth43967";

openthink.views.auth.t_openthink$views$auth43967.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"openthink.views.auth/t_openthink$views$auth43967");
});

openthink.views.auth.__GT_t_openthink$views$auth43967 = (function openthink$views$auth$register_form_$___GT_t_openthink$views$auth43967(data__$1,owner__$1,meta43968){
return (new openthink.views.auth.t_openthink$views$auth43967(data__$1,owner__$1,meta43968));
});

}

return (new openthink.views.auth.t_openthink$views$auth43967(data,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=auth.js.map