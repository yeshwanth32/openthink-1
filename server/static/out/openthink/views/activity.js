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
if(typeof openthink.views.activity.t31598 !== 'undefined'){
} else {

/**
* @constructor
*/
openthink.views.activity.t31598 = (function (owner,comment,comment_action,meta31599){
this.owner = owner;
this.comment = comment;
this.comment_action = comment_action;
this.meta31599 = meta31599;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.activity.t31598.prototype.om$core$IRender$ = true;

openthink.views.activity.t31598.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"className": "comment action", "id": [cljs.core.str("comment-"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.comment))].join('')},React.DOM.hr(null),React.DOM.span({"className": "comment-userbit"},React.DOM.strong({"className": "comment-user"},sablono.interpreter.interpret.call(null,cljs.core.get_in.call(null,self__.comment,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"username","username",1605666410)], null)))),React.DOM.span({"className": "comment-datebit"},sablono.interpreter.interpret.call(null,[cljs.core.str(" | "),cljs.core.str(openthink.utils.date.call(null,new cljs.core.Keyword(null,"time_posted","time_posted",-32907602).cljs$core$IFn$_invoke$arity$1(self__.comment)))].join('')))),React.DOM.div({"className": "comment-body"},React.DOM.p({"dangerouslySetInnerHTML": {"__html": markdown.core.md__GT_html.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(self__.comment))}})));
});

openthink.views.activity.t31598.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31600){
var self__ = this;
var _31600__$1 = this;
return self__.meta31599;
});

openthink.views.activity.t31598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31600,meta31599__$1){
var self__ = this;
var _31600__$1 = this;
return (new openthink.views.activity.t31598(self__.owner,self__.comment,self__.comment_action,meta31599__$1));
});

openthink.views.activity.t31598.cljs$lang$type = true;

openthink.views.activity.t31598.cljs$lang$ctorStr = "openthink.views.activity/t31598";

openthink.views.activity.t31598.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"openthink.views.activity/t31598");
});

openthink.views.activity.__GT_t31598 = (function __GT_t31598(owner__$1,comment__$1,comment_action__$1,meta31599){
return (new openthink.views.activity.t31598(owner__$1,comment__$1,comment_action__$1,meta31599));
});

}

return (new openthink.views.activity.t31598(owner,comment,comment_action,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),67,new cljs.core.Keyword(null,"end-line","end-line",1837326455),27,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),15,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/src/openthink/views/activity.cljs"], null)));
});
openthink.views.activity.link_action = (function link_action(rel,owner){
if(typeof openthink.views.activity.t31610 !== 'undefined'){
} else {

/**
* @constructor
*/
openthink.views.activity.t31610 = (function (owner,rel,link_action,meta31611){
this.owner = owner;
this.rel = rel;
this.link_action = link_action;
this.meta31611 = meta31611;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.activity.t31610.prototype.om$core$IRender$ = true;

openthink.views.activity.t31610.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"className": "link action", "id": [cljs.core.str("link-"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.rel))].join('')},React.DOM.hr(null),React.DOM.strong({"className": "link-action-user"},sablono.interpreter.interpret.call(null,cljs.core.get_in.call(null,self__.rel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linked_by","linked_by",-1836719993),new cljs.core.Keyword(null,"username","username",1605666410)], null))))," linked post ",sablono.interpreter.interpret.call(null,(function (){var post = openthink.cursors.post_from_rel.call(null,self__.rel);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("/post/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(post))].join('')], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(post)], null);
})()),React.DOM.span({"className": "link-action-datebit"},sablono.interpreter.interpret.call(null,[cljs.core.str(" at "),cljs.core.str(openthink.utils.date.call(null,new cljs.core.Keyword(null,"time_linked","time_linked",1045859207).cljs$core$IFn$_invoke$arity$1(self__.rel)))].join(''))));
});

openthink.views.activity.t31610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31612){
var self__ = this;
var _31612__$1 = this;
return self__.meta31611;
});

openthink.views.activity.t31610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31612,meta31611__$1){
var self__ = this;
var _31612__$1 = this;
return (new openthink.views.activity.t31610(self__.owner,self__.rel,self__.link_action,meta31611__$1));
});

openthink.views.activity.t31610.cljs$lang$type = true;

openthink.views.activity.t31610.cljs$lang$ctorStr = "openthink.views.activity/t31610";

openthink.views.activity.t31610.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"openthink.views.activity/t31610");
});

openthink.views.activity.__GT_t31610 = (function __GT_t31610(owner__$1,rel__$1,link_action__$1,meta31611){
return (new openthink.views.activity.t31610(owner__$1,rel__$1,link_action__$1,meta31611));
});

}

return (new openthink.views.activity.t31610(owner,rel,link_action,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),63,new cljs.core.Keyword(null,"end-line","end-line",1837326455),41,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),30,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/src/openthink/views/activity.cljs"], null)));
});
openthink.views.activity.comment_form = (function comment_form(data,owner){
if(typeof openthink.views.activity.t31674 !== 'undefined'){
} else {

/**
* @constructor
*/
openthink.views.activity.t31674 = (function (owner,data,comment_form,meta31675){
this.owner = owner;
this.data = data;
this.comment_form = comment_form;
this.meta31675 = meta31675;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.activity.t31674.prototype.om$core$IRender$ = true;

openthink.views.activity.t31674.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.form({"onSubmit": ((function (this$__$1){
return (function (e){
var c__8633__auto___31731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto___31731,this$__$1){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto___31731,this$__$1){
return (function (state_31683){
var state_val_31684 = (state_31683[(1)]);
if((state_val_31684 === (2))){
var inst_31681 = (state_31683[(2)]);
var state_31683__$1 = state_31683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31683__$1,inst_31681);
} else {
if((state_val_31684 === (1))){
var inst_31679 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"comment-chan","comment-chan",-1616079298));
var state_31683__$1 = state_31683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31683__$1,(2),inst_31679,(1));
} else {
return null;
}
}
});})(c__8633__auto___31731,this$__$1))
;
return ((function (switch__8577__auto__,c__8633__auto___31731,this$__$1){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_31688 = [null,null,null,null,null,null,null];
(statearr_31688[(0)] = state_machine__8578__auto__);

(statearr_31688[(1)] = (1));

return statearr_31688;
});
var state_machine__8578__auto____1 = (function (state_31683){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_31683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e31689){if((e31689 instanceof Object)){
var ex__8581__auto__ = e31689;
var statearr_31690_31732 = state_31683;
(statearr_31690_31732[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31733 = state_31683;
state_31683 = G__31733;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_31683){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_31683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto___31731,this$__$1))
})();
var state__8635__auto__ = (function (){var statearr_31691 = f__8634__auto__.call(null);
(statearr_31691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto___31731);

return statearr_31691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto___31731,this$__$1))
);


e.preventDefault();

return false;
});})(this$__$1))
},React.DOM.div({"className": "row"},React.DOM.div({"className": "large-11 columns"},sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.editor.editor_view,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Post a comment",new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275),((function (this$__$1){
return (function (p1__31616_SHARP_){
return openthink.utils.handle_change.call(null,p1__31616_SHARP_,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697));
});})(this$__$1))
], null)], null))),React.DOM.button({"type": "submit", "className": "button tiny"},"comment"))));
});

openthink.views.activity.t31674.prototype.om$core$IWillMount$ = true;

openthink.views.activity.t31674.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var comment_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"comment-chan","comment-chan",-1616079298));
var c__8633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto__,comment_chan,___$1){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto__,comment_chan,___$1){
return (function (state_31715){
var state_val_31716 = (state_31715[(1)]);
if((state_val_31716 === (7))){
var inst_31695 = (state_31715[(2)]);
var inst_31696 = cljs.core.println.call(null,"making comment");
var inst_31697 = new cljs.core.Keyword(null,"current_post","current_post",2072811381).cljs$core$IFn$_invoke$arity$1(self__.data);
var inst_31698 = [cljs.core.str("/post/"),cljs.core.str(inst_31697),cljs.core.str("/comment")].join('');
var inst_31699 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];
var inst_31700 = ["body"];
var inst_31701 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697));
var inst_31702 = [inst_31701];
var inst_31703 = cljs.core.PersistentHashMap.fromArrays(inst_31700,inst_31702);
var inst_31704 = (function (){return ((function (inst_31695,inst_31696,inst_31697,inst_31698,inst_31699,inst_31700,inst_31701,inst_31702,inst_31703,state_val_31716,c__8633__auto__,comment_chan,___$1){
return (function (resp){
cljs.core.println.call(null,"comment-form returned");

cljs.core.println.call(null,resp);

var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);
if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032))){
return null;
} else {
return om.core.transact_BANG_.call(null,self__.data,((function (resp__$1,inst_31695,inst_31696,inst_31697,inst_31698,inst_31699,inst_31700,inst_31701,inst_31702,inst_31703,state_val_31716,c__8633__auto__,comment_chan,___$1){
return (function (p1__31615_SHARP_){
return cljs.core.merge.call(null,p1__31615_SHARP_,resp__$1);
});})(resp__$1,inst_31695,inst_31696,inst_31697,inst_31698,inst_31699,inst_31700,inst_31701,inst_31702,inst_31703,state_val_31716,c__8633__auto__,comment_chan,___$1))
);
}
});
;})(inst_31695,inst_31696,inst_31697,inst_31698,inst_31699,inst_31700,inst_31701,inst_31702,inst_31703,state_val_31716,c__8633__auto__,comment_chan,___$1))
})();
var inst_31705 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_31703,inst_31704];
var inst_31706 = cljs.core.PersistentHashMap.fromArrays(inst_31699,inst_31705);
var inst_31707 = ajax.core.POST.call(null,inst_31698,inst_31706);
var state_31715__$1 = (function (){var statearr_31717 = state_31715;
(statearr_31717[(7)] = inst_31696);

(statearr_31717[(8)] = inst_31707);

(statearr_31717[(9)] = inst_31695);

return statearr_31717;
})();
var statearr_31718_31734 = state_31715__$1;
(statearr_31718_31734[(2)] = null);

(statearr_31718_31734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (6))){
var inst_31711 = (state_31715[(2)]);
var state_31715__$1 = state_31715;
var statearr_31719_31735 = state_31715__$1;
(statearr_31719_31735[(2)] = inst_31711);

(statearr_31719_31735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (5))){
var state_31715__$1 = state_31715;
var statearr_31720_31736 = state_31715__$1;
(statearr_31720_31736[(2)] = null);

(statearr_31720_31736[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (4))){
var state_31715__$1 = state_31715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31715__$1,(7),comment_chan);
} else {
if((state_val_31716 === (3))){
var inst_31713 = (state_31715[(2)]);
var state_31715__$1 = state_31715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31715__$1,inst_31713);
} else {
if((state_val_31716 === (2))){
var state_31715__$1 = state_31715;
var statearr_31721_31737 = state_31715__$1;
(statearr_31721_31737[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (1))){
var state_31715__$1 = state_31715;
var statearr_31723_31738 = state_31715__$1;
(statearr_31723_31738[(2)] = null);

(statearr_31723_31738[(1)] = (2));


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
var statearr_31727 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31727[(0)] = state_machine__8578__auto__);

(statearr_31727[(1)] = (1));

return statearr_31727;
});
var state_machine__8578__auto____1 = (function (state_31715){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_31715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e31728){if((e31728 instanceof Object)){
var ex__8581__auto__ = e31728;
var statearr_31729_31739 = state_31715;
(statearr_31729_31739[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31740 = state_31715;
state_31715 = G__31740;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_31715){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_31715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto__,comment_chan,___$1))
})();
var state__8635__auto__ = (function (){var statearr_31730 = f__8634__auto__.call(null);
(statearr_31730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto__);

return statearr_31730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto__,comment_chan,___$1))
);

return c__8633__auto__;
});

openthink.views.activity.t31674.prototype.om$core$IInitState$ = true;

openthink.views.activity.t31674.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comment-chan","comment-chan",-1616079298),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"text","text",-1790561697),""], null);
});

openthink.views.activity.t31674.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31676){
var self__ = this;
var _31676__$1 = this;
return self__.meta31675;
});

openthink.views.activity.t31674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31676,meta31675__$1){
var self__ = this;
var _31676__$1 = this;
return (new openthink.views.activity.t31674(self__.owner,self__.data,self__.comment_form,meta31675__$1));
});

openthink.views.activity.t31674.cljs$lang$type = true;

openthink.views.activity.t31674.cljs$lang$ctorStr = "openthink.views.activity/t31674";

openthink.views.activity.t31674.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"openthink.views.activity/t31674");
});

openthink.views.activity.__GT_t31674 = (function __GT_t31674(owner__$1,data__$1,comment_form__$1,meta31675){
return (new openthink.views.activity.t31674(owner__$1,data__$1,comment_form__$1,meta31675));
});

}

return (new openthink.views.activity.t31674(owner,data,comment_form,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),83,new cljs.core.Keyword(null,"end-line","end-line",1837326455),77,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),45,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/src/openthink/views/activity.cljs"], null)));
});
openthink.views.activity.gen_pagination_numbers = (function gen_pagination_numbers(action_count,cur_page){
var total_pages = Math.ceil.call(null,(action_count / openthink.views.activity.ACTIONS_PER_PAGE));
var pages_left = cljs.core.take_last.call(null,(3),cljs.core.range.call(null,(1),(cur_page + (1))));
var pages_right = cljs.core.take.call(null,(3),cljs.core.range.call(null,cur_page,total_pages));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"total","total",1916810418),total_pages,new cljs.core.Keyword(null,"pages","pages",-285406513),cljs.core.distinct.call(null,cljs.core.concat.call(null,pages_left,pages_right))], null);
});
openthink.views.activity.actions_view = (function actions_view(data,owner){
if(typeof openthink.views.activity.t31800 !== 'undefined'){
} else {

/**
* @constructor
*/
openthink.views.activity.t31800 = (function (owner,data,actions_view,meta31801){
this.owner = owner;
this.data = data;
this.actions_view = actions_view;
this.meta31801 = meta31801;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.activity.t31800.prototype.om$core$IRender$ = true;

openthink.views.activity.t31800.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.println.call(null,"actions view");

var action_types = cljs.core.map.call(null,((function (___$1){
return (function (p1__31744_SHARP_){
return cljs.core.get.call(null,p1__31744_SHARP_,(1));
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
return (function iter__31805(s__31806){
return (new cljs.core.LazySeq(null,((function (page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1){
return (function (){
var s__31806__$1 = s__31806;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31806__$1);
if(temp__4126__auto__){
var s__31806__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31806__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__31806__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__31808 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__31807 = (0);
while(true){
if((i__31807 < size__4393__auto__)){
var page = cljs.core._nth.call(null,c__4392__auto__,i__31807);
cljs.core.chunk_append.call(null,b__31808,(cljs.core.truth_(page)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),((cljs.core._EQ_.call(null,page,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.data)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"current"], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__31807,page,c__4392__auto__,size__4393__auto__,b__31808,s__31806__$2,temp__4126__auto__,page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1){
return (function (){
return openthink.utils.put_nil_BANG_.call(null,page_ch,page);
});})(i__31807,page,c__4392__auto__,size__4393__auto__,b__31808,s__31806__$2,temp__4126__auto__,page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1))
], null),page], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"unavailable"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),false], null),"\u2026"], null)], null)));

var G__31855 = (i__31807 + (1));
i__31807 = G__31855;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31808),iter__31805.call(null,cljs.core.chunk_rest.call(null,s__31806__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31808),null);
}
} else {
var page = cljs.core.first.call(null,s__31806__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(page)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),((cljs.core._EQ_.call(null,page,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.data)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"current"], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (page,s__31806__$2,temp__4126__auto__,page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1){
return (function (){
return openthink.utils.put_nil_BANG_.call(null,page_ch,page);
});})(page,s__31806__$2,temp__4126__auto__,page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1))
], null),page], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"unavailable"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),false], null),"\u2026"], null)], null)),iter__31805.call(null,cljs.core.rest.call(null,s__31806__$2)));
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
return (function iter__31809(s__31810){
return (new cljs.core.LazySeq(null,((function (action_types,actions,___$1){
return (function (){
var s__31810__$1 = s__31810;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31810__$1);
if(temp__4126__auto__){
var s__31810__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31810__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__31810__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__31812 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__31811 = (0);
while(true){
if((i__31811 < size__4393__auto__)){
var vec__31815 = cljs.core._nth.call(null,c__4392__auto__,i__31811);
var action_type = cljs.core.nth.call(null,vec__31815,(0),null);
var action = cljs.core.nth.call(null,vec__31815,(1),null);
cljs.core.chunk_append.call(null,b__31812,((cljs.core._EQ_.call(null,action_type,"Comment"))?om.core.build.call(null,openthink.views.activity.comment_action,action):om.core.build.call(null,openthink.views.activity.link_action,action)));

var G__31856 = (i__31811 + (1));
i__31811 = G__31856;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31812),iter__31809.call(null,cljs.core.chunk_rest.call(null,s__31810__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31812),null);
}
} else {
var vec__31816 = cljs.core.first.call(null,s__31810__$2);
var action_type = cljs.core.nth.call(null,vec__31816,(0),null);
var action = cljs.core.nth.call(null,vec__31816,(1),null);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,action_type,"Comment"))?om.core.build.call(null,openthink.views.activity.comment_action,action):om.core.build.call(null,openthink.views.activity.link_action,action)),iter__31809.call(null,cljs.core.rest.call(null,s__31810__$2)));
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

openthink.views.activity.t31800.prototype.om$core$IWillMount$ = true;

openthink.views.activity.t31800.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var page_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"page-chan","page-chan",1905955203));
var c__8633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto__,page_chan,___$1){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto__,page_chan,___$1){
return (function (state_31839){
var state_val_31840 = (state_31839[(1)]);
if((state_val_31840 === (7))){
var inst_31820 = (state_31839[(2)]);
var inst_31821 = cljs.core.println.call(null,"switching to page ",inst_31820);
var inst_31822 = new cljs.core.Keyword(null,"current_post","current_post",2072811381).cljs$core$IFn$_invoke$arity$1(self__.data);
var inst_31823 = [cljs.core.str("/actions/"),cljs.core.str(inst_31822)].join('');
var inst_31824 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];
var inst_31825 = ["page"];
var inst_31826 = [inst_31820];
var inst_31827 = cljs.core.PersistentHashMap.fromArrays(inst_31825,inst_31826);
var inst_31828 = (function (){var page = inst_31820;
return ((function (page,inst_31820,inst_31821,inst_31822,inst_31823,inst_31824,inst_31825,inst_31826,inst_31827,state_val_31840,c__8633__auto__,page_chan,___$1){
return (function (resp){
cljs.core.println.call(null,"new page returned");

cljs.core.println.call(null,resp);

var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);
if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032))){
return null;
} else {
openthink.views.activity.r = resp__$1;

om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"rels","rels",1770187185),((function (resp__$1,page,inst_31820,inst_31821,inst_31822,inst_31823,inst_31824,inst_31825,inst_31826,inst_31827,state_val_31840,c__8633__auto__,page_chan,___$1){
return (function (p1__31741_SHARP_){
return cljs.core.merge.call(null,p1__31741_SHARP_,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(resp__$1));
});})(resp__$1,page,inst_31820,inst_31821,inst_31822,inst_31823,inst_31824,inst_31825,inst_31826,inst_31827,state_val_31840,c__8633__auto__,page_chan,___$1))
);

om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"posts","posts",760043164),((function (resp__$1,page,inst_31820,inst_31821,inst_31822,inst_31823,inst_31824,inst_31825,inst_31826,inst_31827,state_val_31840,c__8633__auto__,page_chan,___$1){
return (function (p1__31742_SHARP_){
return cljs.core.merge.call(null,p1__31742_SHARP_,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(resp__$1));
});})(resp__$1,page,inst_31820,inst_31821,inst_31822,inst_31823,inst_31824,inst_31825,inst_31826,inst_31827,state_val_31840,c__8633__auto__,page_chan,___$1))
);

om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"comments","comments",-293346423),((function (resp__$1,page,inst_31820,inst_31821,inst_31822,inst_31823,inst_31824,inst_31825,inst_31826,inst_31827,state_val_31840,c__8633__auto__,page_chan,___$1){
return (function (p1__31743_SHARP_){
return cljs.core.merge.call(null,p1__31743_SHARP_,new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(resp__$1));
});})(resp__$1,page,inst_31820,inst_31821,inst_31822,inst_31823,inst_31824,inst_31825,inst_31826,inst_31827,state_val_31840,c__8633__auto__,page_chan,___$1))
);

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(resp__$1));

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"action_count","action_count",-900104661),new cljs.core.Keyword(null,"action_count","action_count",-900104661).cljs$core$IFn$_invoke$arity$1(resp__$1));

return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(resp__$1));
}
});
;})(page,inst_31820,inst_31821,inst_31822,inst_31823,inst_31824,inst_31825,inst_31826,inst_31827,state_val_31840,c__8633__auto__,page_chan,___$1))
})();
var inst_31829 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_31827,inst_31828];
var inst_31830 = cljs.core.PersistentHashMap.fromArrays(inst_31824,inst_31829);
var inst_31831 = ajax.core.GET.call(null,inst_31823,inst_31830);
var state_31839__$1 = (function (){var statearr_31841 = state_31839;
(statearr_31841[(7)] = inst_31831);

(statearr_31841[(8)] = inst_31821);

return statearr_31841;
})();
var statearr_31842_31857 = state_31839__$1;
(statearr_31842_31857[(2)] = null);

(statearr_31842_31857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (6))){
var inst_31835 = (state_31839[(2)]);
var state_31839__$1 = state_31839;
var statearr_31843_31858 = state_31839__$1;
(statearr_31843_31858[(2)] = inst_31835);

(statearr_31843_31858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (5))){
var state_31839__$1 = state_31839;
var statearr_31844_31859 = state_31839__$1;
(statearr_31844_31859[(2)] = null);

(statearr_31844_31859[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (4))){
var state_31839__$1 = state_31839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31839__$1,(7),page_chan);
} else {
if((state_val_31840 === (3))){
var inst_31837 = (state_31839[(2)]);
var state_31839__$1 = state_31839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31839__$1,inst_31837);
} else {
if((state_val_31840 === (2))){
var state_31839__$1 = state_31839;
var statearr_31845_31860 = state_31839__$1;
(statearr_31845_31860[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (1))){
var state_31839__$1 = state_31839;
var statearr_31847_31861 = state_31839__$1;
(statearr_31847_31861[(2)] = null);

(statearr_31847_31861[(1)] = (2));


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
var statearr_31851 = [null,null,null,null,null,null,null,null,null];
(statearr_31851[(0)] = state_machine__8578__auto__);

(statearr_31851[(1)] = (1));

return statearr_31851;
});
var state_machine__8578__auto____1 = (function (state_31839){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_31839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e31852){if((e31852 instanceof Object)){
var ex__8581__auto__ = e31852;
var statearr_31853_31862 = state_31839;
(statearr_31853_31862[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31863 = state_31839;
state_31839 = G__31863;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_31839){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_31839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto__,page_chan,___$1))
})();
var state__8635__auto__ = (function (){var statearr_31854 = f__8634__auto__.call(null);
(statearr_31854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto__);

return statearr_31854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto__,page_chan,___$1))
);

return c__8633__auto__;
});

openthink.views.activity.t31800.prototype.om$core$IInitState$ = true;

openthink.views.activity.t31800.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-chan","page-chan",1905955203),cljs.core.async.chan.call(null)], null);
});

openthink.views.activity.t31800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31802){
var self__ = this;
var _31802__$1 = this;
return self__.meta31801;
});

openthink.views.activity.t31800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31802,meta31801__$1){
var self__ = this;
var _31802__$1 = this;
return (new openthink.views.activity.t31800(self__.owner,self__.data,self__.actions_view,meta31801__$1));
});

openthink.views.activity.t31800.cljs$lang$type = true;

openthink.views.activity.t31800.cljs$lang$ctorStr = "openthink.views.activity/t31800";

openthink.views.activity.t31800.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"openthink.views.activity/t31800");
});

openthink.views.activity.__GT_t31800 = (function __GT_t31800(owner__$1,data__$1,actions_view__$1,meta31801){
return (new openthink.views.activity.t31800(owner__$1,data__$1,actions_view__$1,meta31801));
});

}

return (new openthink.views.activity.t31800(owner,data,actions_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),47,new cljs.core.Keyword(null,"end-line","end-line",1837326455),165,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),87,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/src/openthink/views/activity.cljs"], null)));
});

//# sourceMappingURL=activity.js.map