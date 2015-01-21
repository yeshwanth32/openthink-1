// Compiled by ClojureScript 0.0-2511
goog.provide('openthink.views.activity');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('markdown.core');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('openthink.cursors');
goog.require('openthink.utils');
goog.require('om.core');
goog.require('openthink.views.editor');
openthink.views.activity.ACTIONS_PER_PAGE = (20);
openthink.views.activity.comment_action = (function comment_action(comment,owner){
if(typeof openthink.views.activity.t29033 !== 'undefined'){
} else {

/**
* @constructor
*/
openthink.views.activity.t29033 = (function (owner,comment,comment_action,meta29034){
this.owner = owner;
this.comment = comment;
this.comment_action = comment_action;
this.meta29034 = meta29034;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.activity.t29033.prototype.om$core$IRender$ = true;

openthink.views.activity.t29033.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"className": "comment action", "id": [cljs.core.str("comment-"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.comment))].join('')},React.DOM.hr(null),React.DOM.span({"className": "comment-userbit"},React.DOM.strong({"className": "comment-user"},sablono.interpreter.interpret.call(null,cljs.core.get_in.call(null,self__.comment,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"username","username",1605666410)], null)))),React.DOM.span({"className": "comment-datebit"},sablono.interpreter.interpret.call(null,[cljs.core.str(" | "),cljs.core.str(openthink.utils.date.call(null,new cljs.core.Keyword(null,"time_posted","time_posted",-32907602).cljs$core$IFn$_invoke$arity$1(self__.comment)))].join('')))),React.DOM.div({"className": "comment-body"},React.DOM.p({"dangerouslySetInnerHTML": {"__html": markdown.core.md__GT_html.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(self__.comment))}})));
});

openthink.views.activity.t29033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29035){
var self__ = this;
var _29035__$1 = this;
return self__.meta29034;
});

openthink.views.activity.t29033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29035,meta29034__$1){
var self__ = this;
var _29035__$1 = this;
return (new openthink.views.activity.t29033(self__.owner,self__.comment,self__.comment_action,meta29034__$1));
});

openthink.views.activity.t29033.cljs$lang$type = true;

openthink.views.activity.t29033.cljs$lang$ctorStr = "openthink.views.activity/t29033";

openthink.views.activity.t29033.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"openthink.views.activity/t29033");
});

openthink.views.activity.__GT_t29033 = (function __GT_t29033(owner__$1,comment__$1,comment_action__$1,meta29034){
return (new openthink.views.activity.t29033(owner__$1,comment__$1,comment_action__$1,meta29034));
});

}

return (new openthink.views.activity.t29033(owner,comment,comment_action,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),67,new cljs.core.Keyword(null,"end-line","end-line",1837326455),27,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),15,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/src/openthink/views/activity.cljs"], null)));
});
openthink.views.activity.link_action = (function link_action(rel,owner){
if(typeof openthink.views.activity.t29045 !== 'undefined'){
} else {

/**
* @constructor
*/
openthink.views.activity.t29045 = (function (owner,rel,link_action,meta29046){
this.owner = owner;
this.rel = rel;
this.link_action = link_action;
this.meta29046 = meta29046;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.activity.t29045.prototype.om$core$IRender$ = true;

openthink.views.activity.t29045.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"className": "link action", "id": [cljs.core.str("link-"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.rel))].join('')},React.DOM.hr(null),React.DOM.strong({"className": "link-action-user"},sablono.interpreter.interpret.call(null,cljs.core.get_in.call(null,self__.rel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linked_by","linked_by",-1836719993),new cljs.core.Keyword(null,"username","username",1605666410)], null))))," linked post ",sablono.interpreter.interpret.call(null,(function (){var post = openthink.cursors.post_from_rel.call(null,self__.rel);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("/post/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(post))].join('')], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(post)], null);
})()),React.DOM.span({"className": "link-action-datebit"},sablono.interpreter.interpret.call(null,[cljs.core.str(" at "),cljs.core.str(openthink.utils.date.call(null,new cljs.core.Keyword(null,"time_linked","time_linked",1045859207).cljs$core$IFn$_invoke$arity$1(self__.rel)))].join(''))));
});

openthink.views.activity.t29045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29047){
var self__ = this;
var _29047__$1 = this;
return self__.meta29046;
});

openthink.views.activity.t29045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29047,meta29046__$1){
var self__ = this;
var _29047__$1 = this;
return (new openthink.views.activity.t29045(self__.owner,self__.rel,self__.link_action,meta29046__$1));
});

openthink.views.activity.t29045.cljs$lang$type = true;

openthink.views.activity.t29045.cljs$lang$ctorStr = "openthink.views.activity/t29045";

openthink.views.activity.t29045.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"openthink.views.activity/t29045");
});

openthink.views.activity.__GT_t29045 = (function __GT_t29045(owner__$1,rel__$1,link_action__$1,meta29046){
return (new openthink.views.activity.t29045(owner__$1,rel__$1,link_action__$1,meta29046));
});

}

return (new openthink.views.activity.t29045(owner,rel,link_action,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),63,new cljs.core.Keyword(null,"end-line","end-line",1837326455),41,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),30,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/src/openthink/views/activity.cljs"], null)));
});
openthink.views.activity.comment_form = (function comment_form(data,owner){
if(typeof openthink.views.activity.t29109 !== 'undefined'){
} else {

/**
* @constructor
*/
openthink.views.activity.t29109 = (function (owner,data,comment_form,meta29110){
this.owner = owner;
this.data = data;
this.comment_form = comment_form;
this.meta29110 = meta29110;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.activity.t29109.prototype.om$core$IRender$ = true;

openthink.views.activity.t29109.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.form({"onSubmit": ((function (this$__$1){
return (function (e){
var c__8633__auto___29166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto___29166,this$__$1){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto___29166,this$__$1){
return (function (state_29118){
var state_val_29119 = (state_29118[(1)]);
if((state_val_29119 === (2))){
var inst_29116 = (state_29118[(2)]);
var state_29118__$1 = state_29118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29118__$1,inst_29116);
} else {
if((state_val_29119 === (1))){
var inst_29114 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"comment-chan","comment-chan",-1616079298));
var state_29118__$1 = state_29118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29118__$1,(2),inst_29114,(1));
} else {
return null;
}
}
});})(c__8633__auto___29166,this$__$1))
;
return ((function (switch__8577__auto__,c__8633__auto___29166,this$__$1){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_29123 = [null,null,null,null,null,null,null];
(statearr_29123[(0)] = state_machine__8578__auto__);

(statearr_29123[(1)] = (1));

return statearr_29123;
});
var state_machine__8578__auto____1 = (function (state_29118){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_29118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e29124){if((e29124 instanceof Object)){
var ex__8581__auto__ = e29124;
var statearr_29125_29167 = state_29118;
(statearr_29125_29167[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29168 = state_29118;
state_29118 = G__29168;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_29118){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_29118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto___29166,this$__$1))
})();
var state__8635__auto__ = (function (){var statearr_29126 = f__8634__auto__.call(null);
(statearr_29126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto___29166);

return statearr_29126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto___29166,this$__$1))
);


e.preventDefault();

return false;
});})(this$__$1))
},React.DOM.div({"className": "row"},React.DOM.div({"className": "large-11 columns"},sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.editor.editor_view,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Post a comment",new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275),((function (this$__$1){
return (function (p1__29051_SHARP_){
return openthink.utils.handle_change.call(null,p1__29051_SHARP_,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697));
});})(this$__$1))
], null)], null))),React.DOM.button({"type": "submit", "className": "button tiny"},"comment"))));
});

openthink.views.activity.t29109.prototype.om$core$IWillMount$ = true;

openthink.views.activity.t29109.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var comment_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"comment-chan","comment-chan",-1616079298));
var c__8633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto__,comment_chan,___$1){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto__,comment_chan,___$1){
return (function (state_29150){
var state_val_29151 = (state_29150[(1)]);
if((state_val_29151 === (7))){
var inst_29130 = (state_29150[(2)]);
var inst_29131 = cljs.core.println.call(null,"making comment");
var inst_29132 = new cljs.core.Keyword(null,"current_post","current_post",2072811381).cljs$core$IFn$_invoke$arity$1(self__.data);
var inst_29133 = [cljs.core.str("/post/"),cljs.core.str(inst_29132),cljs.core.str("/comment")].join('');
var inst_29134 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];
var inst_29135 = ["body"];
var inst_29136 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697));
var inst_29137 = [inst_29136];
var inst_29138 = cljs.core.PersistentHashMap.fromArrays(inst_29135,inst_29137);
var inst_29139 = (function (){return ((function (inst_29130,inst_29131,inst_29132,inst_29133,inst_29134,inst_29135,inst_29136,inst_29137,inst_29138,state_val_29151,c__8633__auto__,comment_chan,___$1){
return (function (resp){
cljs.core.println.call(null,"comment-form returned");

cljs.core.println.call(null,resp);

var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);
if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032))){
return null;
} else {
return om.core.transact_BANG_.call(null,self__.data,((function (resp__$1,inst_29130,inst_29131,inst_29132,inst_29133,inst_29134,inst_29135,inst_29136,inst_29137,inst_29138,state_val_29151,c__8633__auto__,comment_chan,___$1){
return (function (p1__29050_SHARP_){
return cljs.core.merge.call(null,p1__29050_SHARP_,resp__$1);
});})(resp__$1,inst_29130,inst_29131,inst_29132,inst_29133,inst_29134,inst_29135,inst_29136,inst_29137,inst_29138,state_val_29151,c__8633__auto__,comment_chan,___$1))
);
}
});
;})(inst_29130,inst_29131,inst_29132,inst_29133,inst_29134,inst_29135,inst_29136,inst_29137,inst_29138,state_val_29151,c__8633__auto__,comment_chan,___$1))
})();
var inst_29140 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_29138,inst_29139];
var inst_29141 = cljs.core.PersistentHashMap.fromArrays(inst_29134,inst_29140);
var inst_29142 = ajax.core.POST.call(null,inst_29133,inst_29141);
var state_29150__$1 = (function (){var statearr_29152 = state_29150;
(statearr_29152[(7)] = inst_29130);

(statearr_29152[(8)] = inst_29131);

(statearr_29152[(9)] = inst_29142);

return statearr_29152;
})();
var statearr_29153_29169 = state_29150__$1;
(statearr_29153_29169[(2)] = null);

(statearr_29153_29169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (6))){
var inst_29146 = (state_29150[(2)]);
var state_29150__$1 = state_29150;
var statearr_29154_29170 = state_29150__$1;
(statearr_29154_29170[(2)] = inst_29146);

(statearr_29154_29170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (5))){
var state_29150__$1 = state_29150;
var statearr_29155_29171 = state_29150__$1;
(statearr_29155_29171[(2)] = null);

(statearr_29155_29171[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (4))){
var state_29150__$1 = state_29150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29150__$1,(7),comment_chan);
} else {
if((state_val_29151 === (3))){
var inst_29148 = (state_29150[(2)]);
var state_29150__$1 = state_29150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29150__$1,inst_29148);
} else {
if((state_val_29151 === (2))){
var state_29150__$1 = state_29150;
var statearr_29156_29172 = state_29150__$1;
(statearr_29156_29172[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (1))){
var state_29150__$1 = state_29150;
var statearr_29158_29173 = state_29150__$1;
(statearr_29158_29173[(2)] = null);

(statearr_29158_29173[(1)] = (2));


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
});})(c__8633__auto__,comment_chan,___$1))
;
return ((function (switch__8577__auto__,c__8633__auto__,comment_chan,___$1){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_29162 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29162[(0)] = state_machine__8578__auto__);

(statearr_29162[(1)] = (1));

return statearr_29162;
});
var state_machine__8578__auto____1 = (function (state_29150){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_29150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e29163){if((e29163 instanceof Object)){
var ex__8581__auto__ = e29163;
var statearr_29164_29174 = state_29150;
(statearr_29164_29174[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29175 = state_29150;
state_29150 = G__29175;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_29150){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_29150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto__,comment_chan,___$1))
})();
var state__8635__auto__ = (function (){var statearr_29165 = f__8634__auto__.call(null);
(statearr_29165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto__);

return statearr_29165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto__,comment_chan,___$1))
);

return c__8633__auto__;
});

openthink.views.activity.t29109.prototype.om$core$IInitState$ = true;

openthink.views.activity.t29109.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comment-chan","comment-chan",-1616079298),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"text","text",-1790561697),""], null);
});

openthink.views.activity.t29109.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29111){
var self__ = this;
var _29111__$1 = this;
return self__.meta29110;
});

openthink.views.activity.t29109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29111,meta29110__$1){
var self__ = this;
var _29111__$1 = this;
return (new openthink.views.activity.t29109(self__.owner,self__.data,self__.comment_form,meta29110__$1));
});

openthink.views.activity.t29109.cljs$lang$type = true;

openthink.views.activity.t29109.cljs$lang$ctorStr = "openthink.views.activity/t29109";

openthink.views.activity.t29109.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"openthink.views.activity/t29109");
});

openthink.views.activity.__GT_t29109 = (function __GT_t29109(owner__$1,data__$1,comment_form__$1,meta29110){
return (new openthink.views.activity.t29109(owner__$1,data__$1,comment_form__$1,meta29110));
});

}

return (new openthink.views.activity.t29109(owner,data,comment_form,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),83,new cljs.core.Keyword(null,"end-line","end-line",1837326455),77,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),45,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/src/openthink/views/activity.cljs"], null)));
});
openthink.views.activity.gen_pagination_numbers = (function gen_pagination_numbers(action_count,cur_page){
var total_pages = Math.ceil.call(null,(action_count / openthink.views.activity.ACTIONS_PER_PAGE));
var pages_left = cljs.core.take_last.call(null,(3),cljs.core.range.call(null,(1),(cur_page + (1))));
var pages_right = cljs.core.take.call(null,(3),cljs.core.range.call(null,cur_page,total_pages));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"total","total",1916810418),total_pages,new cljs.core.Keyword(null,"pages","pages",-285406513),cljs.core.distinct.call(null,cljs.core.concat.call(null,pages_left,pages_right))], null);
});
openthink.views.activity.actions_view = (function actions_view(data,owner){
if(typeof openthink.views.activity.t29235 !== 'undefined'){
} else {

/**
* @constructor
*/
openthink.views.activity.t29235 = (function (owner,data,actions_view,meta29236){
this.owner = owner;
this.data = data;
this.actions_view = actions_view;
this.meta29236 = meta29236;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.activity.t29235.prototype.om$core$IRender$ = true;

openthink.views.activity.t29235.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.println.call(null,"actions view");

var action_types = cljs.core.map.call(null,((function (___$1){
return (function (p1__29179_SHARP_){
return cljs.core.get.call(null,p1__29179_SHARP_,(1));
});})(___$1))
,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(self__.data));
var actions = cljs.core.map.call(null,openthink.cursors.action_cursor,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(self__.data));
return React.DOM.div({"className": "comments-view row"},(cljs.core.truth_(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(self__.data))?sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.activity.comment_form,self__.data)):React.DOM.strong(null,"You must be logged in to comment on a post")),sablono.interpreter.interpret.call(null,((!(cljs.core.empty_QMARK_.call(null,actions)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Activity:"], null),(function (){var post_floor = ((openthink.views.activity.ACTIONS_PER_PAGE * (new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.data) - (1))) + (1));
var post_ceil = (function (){var x__3962__auto__ = new cljs.core.Keyword(null,"action_count","action_count",-900104661).cljs$core$IFn$_invoke$arity$1(self__.data);
var y__3963__auto__ = (openthink.views.activity.ACTIONS_PER_PAGE * new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.data));
return ((x__3962__auto__ < y__3963__auto__) ? x__3962__auto__ : y__3963__auto__);
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str(post_floor),cljs.core.str(" to "),cljs.core.str(post_ceil)].join('')], null);
})(),(function (){var page_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"page-chan","page-chan",1905955203));
var page_info = openthink.views.activity.gen_pagination_numbers.call(null,new cljs.core.Keyword(null,"action_count","action_count",-900104661).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.data));
var pages = new cljs.core.Keyword(null,"pages","pages",-285406513).cljs$core$IFn$_invoke$arity$1(page_info);
var total = new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(page_info);
var pages__$1 = (cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),pages))?pages:(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),pages))?cljs.core.conj.call(null,pages,(1)):cljs.core.conj.call(null,pages,null,(1))));
var pages__$2 = (cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([total], true),pages__$1))?pages__$1:(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([(total - (1))], true),pages__$1))?cljs.core.concat.call(null,pages__$1,cljs.core._conj.call(null,cljs.core.List.EMPTY,total)):cljs.core.concat.call(null,pages__$1,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,total),null))));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"pagination right"], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.data),(1)))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"arrow"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1){
return (function (){
return openthink.utils.put_nil_BANG_.call(null,page_ch,(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.data) - (1)));
});})(page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1))
], null),"\u00AB"], null)], null)),(function (){var iter__4394__auto__ = ((function (page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1){
return (function iter__29240(s__29241){
return (new cljs.core.LazySeq(null,((function (page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1){
return (function (){
var s__29241__$1 = s__29241;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29241__$1);
if(temp__4126__auto__){
var s__29241__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29241__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__29241__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__29243 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__29242 = (0);
while(true){
if((i__29242 < size__4393__auto__)){
var page = cljs.core._nth.call(null,c__4392__auto__,i__29242);
cljs.core.chunk_append.call(null,b__29243,(cljs.core.truth_(page)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),((cljs.core._EQ_.call(null,page,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.data)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"current"], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__29242,page,c__4392__auto__,size__4393__auto__,b__29243,s__29241__$2,temp__4126__auto__,page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1){
return (function (){
return openthink.utils.put_nil_BANG_.call(null,page_ch,page);
});})(i__29242,page,c__4392__auto__,size__4393__auto__,b__29243,s__29241__$2,temp__4126__auto__,page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1))
], null),page], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"unavailable"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),false], null),"\u2026"], null)], null)));

var G__29290 = (i__29242 + (1));
i__29242 = G__29290;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29243),iter__29240.call(null,cljs.core.chunk_rest.call(null,s__29241__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29243),null);
}
} else {
var page = cljs.core.first.call(null,s__29241__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(page)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),((cljs.core._EQ_.call(null,page,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.data)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"current"], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (page,s__29241__$2,temp__4126__auto__,page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1){
return (function (){
return openthink.utils.put_nil_BANG_.call(null,page_ch,page);
});})(page,s__29241__$2,temp__4126__auto__,page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1))
], null),page], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"unavailable"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),false], null),"\u2026"], null)], null)),iter__29240.call(null,cljs.core.rest.call(null,s__29241__$2)));
}
} else {
return null;
}
break;
}
});})(page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1))
,null,null));
});})(page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1))
;
return iter__4394__auto__.call(null,pages__$2);
})(),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.data),total))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"arrow"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1){
return (function (){
return openthink.utils.put_nil_BANG_.call(null,page_ch,(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.data) + (1)));
});})(page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1))
], null),"\u00BB"], null)], null))], null);
})(),(function (){var iter__4394__auto__ = ((function (action_types,actions,___$1){
return (function iter__29244(s__29245){
return (new cljs.core.LazySeq(null,((function (action_types,actions,___$1){
return (function (){
var s__29245__$1 = s__29245;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29245__$1);
if(temp__4126__auto__){
var s__29245__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29245__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__29245__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__29247 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__29246 = (0);
while(true){
if((i__29246 < size__4393__auto__)){
var vec__29250 = cljs.core._nth.call(null,c__4392__auto__,i__29246);
var action_type = cljs.core.nth.call(null,vec__29250,(0),null);
var action = cljs.core.nth.call(null,vec__29250,(1),null);
cljs.core.chunk_append.call(null,b__29247,((cljs.core._EQ_.call(null,action_type,"Comment"))?om.core.build.call(null,openthink.views.activity.comment_action,action):om.core.build.call(null,openthink.views.activity.link_action,action)));

var G__29291 = (i__29246 + (1));
i__29246 = G__29291;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29247),iter__29244.call(null,cljs.core.chunk_rest.call(null,s__29245__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29247),null);
}
} else {
var vec__29251 = cljs.core.first.call(null,s__29245__$2);
var action_type = cljs.core.nth.call(null,vec__29251,(0),null);
var action = cljs.core.nth.call(null,vec__29251,(1),null);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,action_type,"Comment"))?om.core.build.call(null,openthink.views.activity.comment_action,action):om.core.build.call(null,openthink.views.activity.link_action,action)),iter__29244.call(null,cljs.core.rest.call(null,s__29245__$2)));
}
} else {
return null;
}
break;
}
});})(action_types,actions,___$1))
,null,null));
});})(action_types,actions,___$1))
;
return iter__4394__auto__.call(null,cljs.core.map.call(null,cljs.core.list,action_types,actions));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No actions yet"], null))));
});

openthink.views.activity.t29235.prototype.om$core$IWillMount$ = true;

openthink.views.activity.t29235.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var page_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"page-chan","page-chan",1905955203));
var c__8633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto__,page_chan,___$1){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto__,page_chan,___$1){
return (function (state_29274){
var state_val_29275 = (state_29274[(1)]);
if((state_val_29275 === (7))){
var inst_29255 = (state_29274[(2)]);
var inst_29256 = cljs.core.println.call(null,"switching to page ",inst_29255);
var inst_29257 = new cljs.core.Keyword(null,"current_post","current_post",2072811381).cljs$core$IFn$_invoke$arity$1(self__.data);
var inst_29258 = [cljs.core.str("/actions/"),cljs.core.str(inst_29257)].join('');
var inst_29259 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];
var inst_29260 = ["page"];
var inst_29261 = [inst_29255];
var inst_29262 = cljs.core.PersistentHashMap.fromArrays(inst_29260,inst_29261);
var inst_29263 = (function (){var page = inst_29255;
return ((function (page,inst_29255,inst_29256,inst_29257,inst_29258,inst_29259,inst_29260,inst_29261,inst_29262,state_val_29275,c__8633__auto__,page_chan,___$1){
return (function (resp){
cljs.core.println.call(null,"new page returned");

cljs.core.println.call(null,resp);

var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);
if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032))){
return null;
} else {
openthink.views.activity.r = resp__$1;

om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"rels","rels",1770187185),((function (resp__$1,page,inst_29255,inst_29256,inst_29257,inst_29258,inst_29259,inst_29260,inst_29261,inst_29262,state_val_29275,c__8633__auto__,page_chan,___$1){
return (function (p1__29176_SHARP_){
return cljs.core.merge.call(null,p1__29176_SHARP_,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(resp__$1));
});})(resp__$1,page,inst_29255,inst_29256,inst_29257,inst_29258,inst_29259,inst_29260,inst_29261,inst_29262,state_val_29275,c__8633__auto__,page_chan,___$1))
);

om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"posts","posts",760043164),((function (resp__$1,page,inst_29255,inst_29256,inst_29257,inst_29258,inst_29259,inst_29260,inst_29261,inst_29262,state_val_29275,c__8633__auto__,page_chan,___$1){
return (function (p1__29177_SHARP_){
return cljs.core.merge.call(null,p1__29177_SHARP_,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(resp__$1));
});})(resp__$1,page,inst_29255,inst_29256,inst_29257,inst_29258,inst_29259,inst_29260,inst_29261,inst_29262,state_val_29275,c__8633__auto__,page_chan,___$1))
);

om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"comments","comments",-293346423),((function (resp__$1,page,inst_29255,inst_29256,inst_29257,inst_29258,inst_29259,inst_29260,inst_29261,inst_29262,state_val_29275,c__8633__auto__,page_chan,___$1){
return (function (p1__29178_SHARP_){
return cljs.core.merge.call(null,p1__29178_SHARP_,new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(resp__$1));
});})(resp__$1,page,inst_29255,inst_29256,inst_29257,inst_29258,inst_29259,inst_29260,inst_29261,inst_29262,state_val_29275,c__8633__auto__,page_chan,___$1))
);

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(resp__$1));

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"action_count","action_count",-900104661),new cljs.core.Keyword(null,"action_count","action_count",-900104661).cljs$core$IFn$_invoke$arity$1(resp__$1));

return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(resp__$1));
}
});
;})(page,inst_29255,inst_29256,inst_29257,inst_29258,inst_29259,inst_29260,inst_29261,inst_29262,state_val_29275,c__8633__auto__,page_chan,___$1))
})();
var inst_29264 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_29262,inst_29263];
var inst_29265 = cljs.core.PersistentHashMap.fromArrays(inst_29259,inst_29264);
var inst_29266 = ajax.core.GET.call(null,inst_29258,inst_29265);
var state_29274__$1 = (function (){var statearr_29276 = state_29274;
(statearr_29276[(7)] = inst_29256);

(statearr_29276[(8)] = inst_29266);

return statearr_29276;
})();
var statearr_29277_29292 = state_29274__$1;
(statearr_29277_29292[(2)] = null);

(statearr_29277_29292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (6))){
var inst_29270 = (state_29274[(2)]);
var state_29274__$1 = state_29274;
var statearr_29278_29293 = state_29274__$1;
(statearr_29278_29293[(2)] = inst_29270);

(statearr_29278_29293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (5))){
var state_29274__$1 = state_29274;
var statearr_29279_29294 = state_29274__$1;
(statearr_29279_29294[(2)] = null);

(statearr_29279_29294[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (4))){
var state_29274__$1 = state_29274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29274__$1,(7),page_chan);
} else {
if((state_val_29275 === (3))){
var inst_29272 = (state_29274[(2)]);
var state_29274__$1 = state_29274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29274__$1,inst_29272);
} else {
if((state_val_29275 === (2))){
var state_29274__$1 = state_29274;
var statearr_29280_29295 = state_29274__$1;
(statearr_29280_29295[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (1))){
var state_29274__$1 = state_29274;
var statearr_29282_29296 = state_29274__$1;
(statearr_29282_29296[(2)] = null);

(statearr_29282_29296[(1)] = (2));


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
});})(c__8633__auto__,page_chan,___$1))
;
return ((function (switch__8577__auto__,c__8633__auto__,page_chan,___$1){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_29286 = [null,null,null,null,null,null,null,null,null];
(statearr_29286[(0)] = state_machine__8578__auto__);

(statearr_29286[(1)] = (1));

return statearr_29286;
});
var state_machine__8578__auto____1 = (function (state_29274){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_29274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e29287){if((e29287 instanceof Object)){
var ex__8581__auto__ = e29287;
var statearr_29288_29297 = state_29274;
(statearr_29288_29297[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29298 = state_29274;
state_29274 = G__29298;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_29274){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_29274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto__,page_chan,___$1))
})();
var state__8635__auto__ = (function (){var statearr_29289 = f__8634__auto__.call(null);
(statearr_29289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto__);

return statearr_29289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto__,page_chan,___$1))
);

return c__8633__auto__;
});

openthink.views.activity.t29235.prototype.om$core$IInitState$ = true;

openthink.views.activity.t29235.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-chan","page-chan",1905955203),cljs.core.async.chan.call(null)], null);
});

openthink.views.activity.t29235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29237){
var self__ = this;
var _29237__$1 = this;
return self__.meta29236;
});

openthink.views.activity.t29235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29237,meta29236__$1){
var self__ = this;
var _29237__$1 = this;
return (new openthink.views.activity.t29235(self__.owner,self__.data,self__.actions_view,meta29236__$1));
});

openthink.views.activity.t29235.cljs$lang$type = true;

openthink.views.activity.t29235.cljs$lang$ctorStr = "openthink.views.activity/t29235";

openthink.views.activity.t29235.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"openthink.views.activity/t29235");
});

openthink.views.activity.__GT_t29235 = (function __GT_t29235(owner__$1,data__$1,actions_view__$1,meta29236){
return (new openthink.views.activity.t29235(owner__$1,data__$1,actions_view__$1,meta29236));
});

}

return (new openthink.views.activity.t29235(owner,data,actions_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),47,new cljs.core.Keyword(null,"end-line","end-line",1837326455),165,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),87,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/src/openthink/views/activity.cljs"], null)));
});

//# sourceMappingURL=activity.js.map