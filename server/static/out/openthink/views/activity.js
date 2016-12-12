// Compiled by ClojureScript 1.9.293 {}
goog.provide('openthink.views.activity');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('markdown.core');
goog.require('openthink.state');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('openthink.cursors');
goog.require('openthink.utils');
goog.require('om.core');
goog.require('openthink.views.editor');
openthink.views.activity.ACTIONS_PER_PAGE = (20);
openthink.views.activity.comment_action = (function openthink$views$activity$comment_action(comment,owner){
if(typeof openthink.views.activity.t_openthink$views$activity45379 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
openthink.views.activity.t_openthink$views$activity45379 = (function (comment,owner,meta45380){
this.comment = comment;
this.owner = owner;
this.meta45380 = meta45380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
openthink.views.activity.t_openthink$views$activity45379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45381,meta45380__$1){
var self__ = this;
var _45381__$1 = this;
return (new openthink.views.activity.t_openthink$views$activity45379(self__.comment,self__.owner,meta45380__$1));
});

openthink.views.activity.t_openthink$views$activity45379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45381){
var self__ = this;
var _45381__$1 = this;
return self__.meta45380;
});

openthink.views.activity.t_openthink$views$activity45379.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.activity.t_openthink$views$activity45379.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(({"className": "comment action", "id": [cljs.core.str("comment-"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.comment))].join('')}),React.DOM.hr(null),React.DOM.span(({"className": "comment-userbit"}),React.DOM.strong(({"className": "comment-user"}),sablono.interpreter.interpret.call(null,cljs.core.get_in.call(null,self__.comment,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"username","username",1605666410)], null)))),React.DOM.span(({"className": "comment-datebit"}),sablono.interpreter.interpret.call(null,[cljs.core.str(" | "),cljs.core.str(openthink.utils.date.call(null,new cljs.core.Keyword(null,"time_posted","time_posted",-32907602).cljs$core$IFn$_invoke$arity$1(self__.comment)))].join('')))),React.DOM.div(({"className": "comment-body"}),React.DOM.p(({"dangerouslySetInnerHTML": ({"__html": markdown.core.md__GT_html.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(self__.comment))})}))));
});

openthink.views.activity.t_openthink$views$activity45379.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comment","comment",-2122229700,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta45380","meta45380",127117988,null)], null);
});

openthink.views.activity.t_openthink$views$activity45379.cljs$lang$type = true;

openthink.views.activity.t_openthink$views$activity45379.cljs$lang$ctorStr = "openthink.views.activity/t_openthink$views$activity45379";

openthink.views.activity.t_openthink$views$activity45379.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"openthink.views.activity/t_openthink$views$activity45379");
});

openthink.views.activity.__GT_t_openthink$views$activity45379 = (function openthink$views$activity$comment_action_$___GT_t_openthink$views$activity45379(comment__$1,owner__$1,meta45380){
return (new openthink.views.activity.t_openthink$views$activity45379(comment__$1,owner__$1,meta45380));
});

}

return (new openthink.views.activity.t_openthink$views$activity45379(comment,owner,cljs.core.PersistentArrayMap.EMPTY));
});
openthink.views.activity.link_action = (function openthink$views$activity$link_action(rel,owner){
if(typeof openthink.views.activity.t_openthink$views$activity45391 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
openthink.views.activity.t_openthink$views$activity45391 = (function (rel,owner,meta45392){
this.rel = rel;
this.owner = owner;
this.meta45392 = meta45392;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
openthink.views.activity.t_openthink$views$activity45391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45393,meta45392__$1){
var self__ = this;
var _45393__$1 = this;
return (new openthink.views.activity.t_openthink$views$activity45391(self__.rel,self__.owner,meta45392__$1));
});

openthink.views.activity.t_openthink$views$activity45391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45393){
var self__ = this;
var _45393__$1 = this;
return self__.meta45392;
});

openthink.views.activity.t_openthink$views$activity45391.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.activity.t_openthink$views$activity45391.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(({"className": "link action", "id": [cljs.core.str("link-"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.rel))].join('')}),React.DOM.hr(null),React.DOM.strong(({"className": "link-action-user"}),sablono.interpreter.interpret.call(null,cljs.core.get_in.call(null,self__.rel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linked_by","linked_by",-1836719993),new cljs.core.Keyword(null,"username","username",1605666410)], null))))," linked post ",sablono.interpreter.interpret.call(null,(function (){var post = openthink.cursors.post_from_rel.call(null,self__.rel);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("/post/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(post))].join('')], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(post)], null);
})()),React.DOM.span(({"className": "link-action-datebit"}),sablono.interpreter.interpret.call(null,[cljs.core.str(" at "),cljs.core.str(openthink.utils.date.call(null,new cljs.core.Keyword(null,"time_linked","time_linked",1045859207).cljs$core$IFn$_invoke$arity$1(self__.rel)))].join(''))));
});

openthink.views.activity.t_openthink$views$activity45391.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rel","rel",-1275612281,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta45392","meta45392",-811970802,null)], null);
});

openthink.views.activity.t_openthink$views$activity45391.cljs$lang$type = true;

openthink.views.activity.t_openthink$views$activity45391.cljs$lang$ctorStr = "openthink.views.activity/t_openthink$views$activity45391";

openthink.views.activity.t_openthink$views$activity45391.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"openthink.views.activity/t_openthink$views$activity45391");
});

openthink.views.activity.__GT_t_openthink$views$activity45391 = (function openthink$views$activity$link_action_$___GT_t_openthink$views$activity45391(rel__$1,owner__$1,meta45392){
return (new openthink.views.activity.t_openthink$views$activity45391(rel__$1,owner__$1,meta45392));
});

}

return (new openthink.views.activity.t_openthink$views$activity45391(rel,owner,cljs.core.PersistentArrayMap.EMPTY));
});
openthink.views.activity.comment_form = (function openthink$views$activity$comment_form(data,owner){
if(typeof openthink.views.activity.t_openthink$views$activity45455 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
openthink.views.activity.t_openthink$views$activity45455 = (function (data,owner,meta45456){
this.data = data;
this.owner = owner;
this.meta45456 = meta45456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
openthink.views.activity.t_openthink$views$activity45455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45457,meta45456__$1){
var self__ = this;
var _45457__$1 = this;
return (new openthink.views.activity.t_openthink$views$activity45455(self__.data,self__.owner,meta45456__$1));
});

openthink.views.activity.t_openthink$views$activity45455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45457){
var self__ = this;
var _45457__$1 = this;
return self__.meta45456;
});

openthink.views.activity.t_openthink$views$activity45455.prototype.om$core$IInitState$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.activity.t_openthink$views$activity45455.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comment-chan","comment-chan",-1616079298),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"text","text",-1790561697),""], null);
});

openthink.views.activity.t_openthink$views$activity45455.prototype.om$core$IWillMount$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.activity.t_openthink$views$activity45455.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var comment_chan = openthink.utils.debounce.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"comment-chan","comment-chan",-1616079298)),(600));
var c__11475__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto__,comment_chan,___$1){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto__,comment_chan,___$1){
return (function (state_45482){
var state_val_45483 = (state_45482[(1)]);
if((state_val_45483 === (1))){
var state_45482__$1 = state_45482;
var statearr_45484_45513 = state_45482__$1;
(statearr_45484_45513[(2)] = null);

(statearr_45484_45513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45483 === (2))){
var state_45482__$1 = state_45482;
var statearr_45485_45514 = state_45482__$1;
(statearr_45485_45514[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45483 === (3))){
var inst_45480 = (state_45482[(2)]);
var state_45482__$1 = state_45482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45482__$1,inst_45480);
} else {
if((state_val_45483 === (4))){
var state_45482__$1 = state_45482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45482__$1,(7),comment_chan);
} else {
if((state_val_45483 === (5))){
var state_45482__$1 = state_45482;
var statearr_45487_45515 = state_45482__$1;
(statearr_45487_45515[(2)] = null);

(statearr_45487_45515[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45483 === (6))){
var inst_45478 = (state_45482[(2)]);
var state_45482__$1 = state_45482;
var statearr_45488_45516 = state_45482__$1;
(statearr_45488_45516[(2)] = inst_45478);

(statearr_45488_45516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45483 === (7))){
var inst_45461 = (state_45482[(2)]);
var inst_45462 = cljs.core.println.call(null,"making comment");
var inst_45463 = openthink.cursors.current_post.call(null);
var inst_45464 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_45463);
var inst_45465 = [cljs.core.str("/post/"),cljs.core.str(inst_45464),cljs.core.str("/comment")].join('');
var inst_45466 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];
var inst_45467 = ["body"];
var inst_45468 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697));
var inst_45469 = [inst_45468];
var inst_45470 = cljs.core.PersistentHashMap.fromArrays(inst_45467,inst_45469);
var inst_45471 = (function (){return ((function (inst_45461,inst_45462,inst_45463,inst_45464,inst_45465,inst_45466,inst_45467,inst_45468,inst_45469,inst_45470,state_val_45483,c__11475__auto__,comment_chan,___$1){
return (function (resp){
cljs.core.println.call(null,"comment-form returned");

cljs.core.println.call(null,resp);

var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);
if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032))){
return null;
} else {
openthink.state.update_app_state_BANG_.call(null,resp__$1);

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697),"");
}
});
;})(inst_45461,inst_45462,inst_45463,inst_45464,inst_45465,inst_45466,inst_45467,inst_45468,inst_45469,inst_45470,state_val_45483,c__11475__auto__,comment_chan,___$1))
})();
var inst_45472 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_45470,inst_45471];
var inst_45473 = cljs.core.PersistentHashMap.fromArrays(inst_45466,inst_45472);
var inst_45474 = ajax.core.POST.call(null,inst_45465,inst_45473);
var state_45482__$1 = (function (){var statearr_45489 = state_45482;
(statearr_45489[(7)] = inst_45474);

(statearr_45489[(8)] = inst_45462);

(statearr_45489[(9)] = inst_45461);

return statearr_45489;
})();
var statearr_45490_45517 = state_45482__$1;
(statearr_45490_45517[(2)] = null);

(statearr_45490_45517[(1)] = (2));


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
});})(c__11475__auto__,comment_chan,___$1))
;
return ((function (switch__11410__auto__,c__11475__auto__,comment_chan,___$1){
return (function() {
var openthink$views$activity$comment_form_$_state_machine__11411__auto__ = null;
var openthink$views$activity$comment_form_$_state_machine__11411__auto____0 = (function (){
var statearr_45494 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45494[(0)] = openthink$views$activity$comment_form_$_state_machine__11411__auto__);

(statearr_45494[(1)] = (1));

return statearr_45494;
});
var openthink$views$activity$comment_form_$_state_machine__11411__auto____1 = (function (state_45482){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_45482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e45495){if((e45495 instanceof Object)){
var ex__11414__auto__ = e45495;
var statearr_45496_45518 = state_45482;
(statearr_45496_45518[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45519 = state_45482;
state_45482 = G__45519;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
openthink$views$activity$comment_form_$_state_machine__11411__auto__ = function(state_45482){
switch(arguments.length){
case 0:
return openthink$views$activity$comment_form_$_state_machine__11411__auto____0.call(this);
case 1:
return openthink$views$activity$comment_form_$_state_machine__11411__auto____1.call(this,state_45482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
openthink$views$activity$comment_form_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = openthink$views$activity$comment_form_$_state_machine__11411__auto____0;
openthink$views$activity$comment_form_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = openthink$views$activity$comment_form_$_state_machine__11411__auto____1;
return openthink$views$activity$comment_form_$_state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto__,comment_chan,___$1))
})();
var state__11477__auto__ = (function (){var statearr_45497 = f__11476__auto__.call(null);
(statearr_45497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto__);

return statearr_45497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto__,comment_chan,___$1))
);

return c__11475__auto__;
});

openthink.views.activity.t_openthink$views$activity45455.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.activity.t_openthink$views$activity45455.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.form(({"onSubmit": ((function (this$__$1){
return (function (e){
var c__11475__auto___45520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto___45520,this$__$1){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto___45520,this$__$1){
return (function (state_45504){
var state_val_45505 = (state_45504[(1)]);
if((state_val_45505 === (1))){
var inst_45500 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"comment-chan","comment-chan",-1616079298));
var state_45504__$1 = state_45504;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45504__$1,(2),inst_45500,(1));
} else {
if((state_val_45505 === (2))){
var inst_45502 = (state_45504[(2)]);
var state_45504__$1 = state_45504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45504__$1,inst_45502);
} else {
return null;
}
}
});})(c__11475__auto___45520,this$__$1))
;
return ((function (switch__11410__auto__,c__11475__auto___45520,this$__$1){
return (function() {
var openthink$views$activity$comment_form_$_state_machine__11411__auto__ = null;
var openthink$views$activity$comment_form_$_state_machine__11411__auto____0 = (function (){
var statearr_45509 = [null,null,null,null,null,null,null];
(statearr_45509[(0)] = openthink$views$activity$comment_form_$_state_machine__11411__auto__);

(statearr_45509[(1)] = (1));

return statearr_45509;
});
var openthink$views$activity$comment_form_$_state_machine__11411__auto____1 = (function (state_45504){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_45504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e45510){if((e45510 instanceof Object)){
var ex__11414__auto__ = e45510;
var statearr_45511_45521 = state_45504;
(statearr_45511_45521[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45522 = state_45504;
state_45504 = G__45522;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
openthink$views$activity$comment_form_$_state_machine__11411__auto__ = function(state_45504){
switch(arguments.length){
case 0:
return openthink$views$activity$comment_form_$_state_machine__11411__auto____0.call(this);
case 1:
return openthink$views$activity$comment_form_$_state_machine__11411__auto____1.call(this,state_45504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
openthink$views$activity$comment_form_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = openthink$views$activity$comment_form_$_state_machine__11411__auto____0;
openthink$views$activity$comment_form_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = openthink$views$activity$comment_form_$_state_machine__11411__auto____1;
return openthink$views$activity$comment_form_$_state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto___45520,this$__$1))
})();
var state__11477__auto__ = (function (){var statearr_45512 = f__11476__auto__.call(null);
(statearr_45512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___45520);

return statearr_45512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto___45520,this$__$1))
);


e.preventDefault();

return false;
});})(this$__$1))
}),React.DOM.div(({"className": "row"}),React.DOM.div(({"className": "large-11 columns"}),sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.editor.editor_view,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697))], null),new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Post a comment",new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275),((function (this$__$1){
return (function (p1__45396_SHARP_){
return openthink.utils.handle_change.call(null,p1__45396_SHARP_,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697));
});})(this$__$1))
], null)], null))),React.DOM.button(({"type": "submit", "className": "button tiny"}),"comment"))));
});

openthink.views.activity.t_openthink$views$activity45455.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta45456","meta45456",535783560,null)], null);
});

openthink.views.activity.t_openthink$views$activity45455.cljs$lang$type = true;

openthink.views.activity.t_openthink$views$activity45455.cljs$lang$ctorStr = "openthink.views.activity/t_openthink$views$activity45455";

openthink.views.activity.t_openthink$views$activity45455.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"openthink.views.activity/t_openthink$views$activity45455");
});

openthink.views.activity.__GT_t_openthink$views$activity45455 = (function openthink$views$activity$comment_form_$___GT_t_openthink$views$activity45455(data__$1,owner__$1,meta45456){
return (new openthink.views.activity.t_openthink$views$activity45455(data__$1,owner__$1,meta45456));
});

}

return (new openthink.views.activity.t_openthink$views$activity45455(data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
openthink.views.activity.gen_pagination_numbers = (function openthink$views$activity$gen_pagination_numbers(action_count,cur_page){
var total_pages = Math.ceil((action_count / openthink.views.activity.ACTIONS_PER_PAGE));
var pages_left = cljs.core.take_last.call(null,(3),cljs.core.range.call(null,(1),(cur_page + (1))));
var pages_right = cljs.core.take.call(null,(3),cljs.core.range.call(null,cur_page,total_pages));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"total","total",1916810418),total_pages,new cljs.core.Keyword(null,"pages","pages",-285406513),cljs.core.distinct.call(null,cljs.core.concat.call(null,pages_left,pages_right))], null);
});
openthink.views.activity.actions_view = (function openthink$views$activity$actions_view(data,owner){
if(typeof openthink.views.activity.t_openthink$views$activity45588 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
openthink.views.activity.t_openthink$views$activity45588 = (function (data,owner,meta45589){
this.data = data;
this.owner = owner;
this.meta45589 = meta45589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
openthink.views.activity.t_openthink$views$activity45588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45590,meta45589__$1){
var self__ = this;
var _45590__$1 = this;
return (new openthink.views.activity.t_openthink$views$activity45588(self__.data,self__.owner,meta45589__$1));
});

openthink.views.activity.t_openthink$views$activity45588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45590){
var self__ = this;
var _45590__$1 = this;
return self__.meta45589;
});

openthink.views.activity.t_openthink$views$activity45588.prototype.om$core$IInitState$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.activity.t_openthink$views$activity45588.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-chan","page-chan",1905955203),cljs.core.async.chan.call(null)], null);
});

openthink.views.activity.t_openthink$views$activity45588.prototype.om$core$IWillMount$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.activity.t_openthink$views$activity45588.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var page_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"page-chan","page-chan",1905955203));
var c__11475__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto__,page_chan,___$1){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto__,page_chan,___$1){
return (function (state_45614){
var state_val_45615 = (state_45614[(1)]);
if((state_val_45615 === (1))){
var state_45614__$1 = state_45614;
var statearr_45616_45652 = state_45614__$1;
(statearr_45616_45652[(2)] = null);

(statearr_45616_45652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45615 === (2))){
var state_45614__$1 = state_45614;
var statearr_45617_45653 = state_45614__$1;
(statearr_45617_45653[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45615 === (3))){
var inst_45612 = (state_45614[(2)]);
var state_45614__$1 = state_45614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45614__$1,inst_45612);
} else {
if((state_val_45615 === (4))){
var state_45614__$1 = state_45614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45614__$1,(7),page_chan);
} else {
if((state_val_45615 === (5))){
var state_45614__$1 = state_45614;
var statearr_45619_45654 = state_45614__$1;
(statearr_45619_45654[(2)] = null);

(statearr_45619_45654[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45615 === (6))){
var inst_45610 = (state_45614[(2)]);
var state_45614__$1 = state_45614;
var statearr_45620_45655 = state_45614__$1;
(statearr_45620_45655[(2)] = inst_45610);

(statearr_45620_45655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45615 === (7))){
var inst_45594 = (state_45614[(2)]);
var inst_45595 = cljs.core.println.call(null,"switching to page ",inst_45594);
var inst_45596 = openthink.cursors.current_post.call(null);
var inst_45597 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_45596);
var inst_45598 = [cljs.core.str("/actions/"),cljs.core.str(inst_45597)].join('');
var inst_45599 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];
var inst_45600 = ["page"];
var inst_45601 = [inst_45594];
var inst_45602 = cljs.core.PersistentHashMap.fromArrays(inst_45600,inst_45601);
var inst_45603 = (function (){var page = inst_45594;
return ((function (page,inst_45594,inst_45595,inst_45596,inst_45597,inst_45598,inst_45599,inst_45600,inst_45601,inst_45602,state_val_45615,c__11475__auto__,page_chan,___$1){
return (function (resp){
cljs.core.println.call(null,"new page returned");

cljs.core.println.call(null,resp);

var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);
if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032))){
return null;
} else {
return openthink.state.update_app_state_BANG_.call(null,resp__$1);
}
});
;})(page,inst_45594,inst_45595,inst_45596,inst_45597,inst_45598,inst_45599,inst_45600,inst_45601,inst_45602,state_val_45615,c__11475__auto__,page_chan,___$1))
})();
var inst_45604 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_45602,inst_45603];
var inst_45605 = cljs.core.PersistentHashMap.fromArrays(inst_45599,inst_45604);
var inst_45606 = ajax.core.GET.call(null,inst_45598,inst_45605);
var state_45614__$1 = (function (){var statearr_45621 = state_45614;
(statearr_45621[(7)] = inst_45595);

(statearr_45621[(8)] = inst_45606);

return statearr_45621;
})();
var statearr_45622_45656 = state_45614__$1;
(statearr_45622_45656[(2)] = null);

(statearr_45622_45656[(1)] = (2));


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
});})(c__11475__auto__,page_chan,___$1))
;
return ((function (switch__11410__auto__,c__11475__auto__,page_chan,___$1){
return (function() {
var openthink$views$activity$actions_view_$_state_machine__11411__auto__ = null;
var openthink$views$activity$actions_view_$_state_machine__11411__auto____0 = (function (){
var statearr_45626 = [null,null,null,null,null,null,null,null,null];
(statearr_45626[(0)] = openthink$views$activity$actions_view_$_state_machine__11411__auto__);

(statearr_45626[(1)] = (1));

return statearr_45626;
});
var openthink$views$activity$actions_view_$_state_machine__11411__auto____1 = (function (state_45614){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_45614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e45627){if((e45627 instanceof Object)){
var ex__11414__auto__ = e45627;
var statearr_45628_45657 = state_45614;
(statearr_45628_45657[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45658 = state_45614;
state_45614 = G__45658;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
openthink$views$activity$actions_view_$_state_machine__11411__auto__ = function(state_45614){
switch(arguments.length){
case 0:
return openthink$views$activity$actions_view_$_state_machine__11411__auto____0.call(this);
case 1:
return openthink$views$activity$actions_view_$_state_machine__11411__auto____1.call(this,state_45614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
openthink$views$activity$actions_view_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = openthink$views$activity$actions_view_$_state_machine__11411__auto____0;
openthink$views$activity$actions_view_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = openthink$views$activity$actions_view_$_state_machine__11411__auto____1;
return openthink$views$activity$actions_view_$_state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto__,page_chan,___$1))
})();
var state__11477__auto__ = (function (){var statearr_45629 = f__11476__auto__.call(null);
(statearr_45629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto__);

return statearr_45629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto__,page_chan,___$1))
);

return c__11475__auto__;
});

openthink.views.activity.t_openthink$views$activity45588.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.activity.t_openthink$views$activity45588.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.println.call(null,"actions view");

var action_types = cljs.core.map.call(null,((function (___$1){
return (function (p1__45523_SHARP_){
return cljs.core.get.call(null,p1__45523_SHARP_,(1));
});})(___$1))
,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(self__.data));
var actions = cljs.core.map.call(null,openthink.cursors.action_cursor,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(self__.data));
return React.DOM.div(({"className": "comments-view row"}),(cljs.core.truth_(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(self__.data))?sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.activity.comment_form,self__.data)):React.DOM.strong(null,"You must be logged in to comment on a post")),sablono.interpreter.interpret.call(null,((!(cljs.core.empty_QMARK_.call(null,actions)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Activity:"], null),(function (){var post_floor = ((openthink.views.activity.ACTIONS_PER_PAGE * (new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.data) - (1))) + (1));
var post_ceil = (function (){var x__6881__auto__ = new cljs.core.Keyword(null,"action_count","action_count",-900104661).cljs$core$IFn$_invoke$arity$1(self__.data);
var y__6882__auto__ = (openthink.views.activity.ACTIONS_PER_PAGE * new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.data));
return ((x__6881__auto__ < y__6882__auto__) ? x__6881__auto__ : y__6882__auto__);
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str(post_floor),cljs.core.str(" to "),cljs.core.str(post_ceil)].join('')], null);
})(),(function (){var page_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"page-chan","page-chan",1905955203));
var page_info = openthink.views.activity.gen_pagination_numbers.call(null,new cljs.core.Keyword(null,"action_count","action_count",-900104661).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.data));
var pages = new cljs.core.Keyword(null,"pages","pages",-285406513).cljs$core$IFn$_invoke$arity$1(page_info);
var total = new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(page_info);
var pages__$1 = (cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),pages))?pages:(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),pages))?cljs.core.conj.call(null,pages,(1)):cljs.core.conj.call(null,pages,null,(1))));
var pages__$2 = (cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([total], true),pages__$1))?pages__$1:(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([(total - (1))], true),pages__$1))?cljs.core.concat.call(null,pages__$1,(function (){var x__7380__auto__ = total;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()):cljs.core.concat.call(null,pages__$1,cljs.core._conj.call(null,(function (){var x__7380__auto__ = total;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),null))));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"pagination right"], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.data),(1)))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"arrow"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1){
return (function (){
return openthink.utils.put_nil_BANG_.call(null,page_ch,(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.data) - (1)));
});})(page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1))
], null),"\u00AB"], null)], null)),(function (){var iter__7326__auto__ = ((function (page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1){
return (function openthink$views$activity$actions_view_$_iter__45632(s__45633){
return (new cljs.core.LazySeq(null,((function (page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1){
return (function (){
var s__45633__$1 = s__45633;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__45633__$1);
if(temp__4657__auto__){
var s__45633__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45633__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__45633__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__45635 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__45634 = (0);
while(true){
if((i__45634 < size__7325__auto__)){
var page = cljs.core._nth.call(null,c__7324__auto__,i__45634);
cljs.core.chunk_append.call(null,b__45635,(cljs.core.truth_(page)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),((cljs.core._EQ_.call(null,page,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.data)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"current"], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__45634,page,c__7324__auto__,size__7325__auto__,b__45635,s__45633__$2,temp__4657__auto__,page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1){
return (function (){
return openthink.utils.put_nil_BANG_.call(null,page_ch,page);
});})(i__45634,page,c__7324__auto__,size__7325__auto__,b__45635,s__45633__$2,temp__4657__auto__,page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1))
], null),page], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"unavailable"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),false], null),"\u2026"], null)], null)));

var G__45659 = (i__45634 + (1));
i__45634 = G__45659;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45635),openthink$views$activity$actions_view_$_iter__45632.call(null,cljs.core.chunk_rest.call(null,s__45633__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45635),null);
}
} else {
var page = cljs.core.first.call(null,s__45633__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(page)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),((cljs.core._EQ_.call(null,page,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.data)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"current"], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (page,s__45633__$2,temp__4657__auto__,page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1){
return (function (){
return openthink.utils.put_nil_BANG_.call(null,page_ch,page);
});})(page,s__45633__$2,temp__4657__auto__,page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1))
], null),page], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"unavailable"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),false], null),"\u2026"], null)], null)),openthink$views$activity$actions_view_$_iter__45632.call(null,cljs.core.rest.call(null,s__45633__$2)));
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
return iter__7326__auto__.call(null,pages__$2);
})(),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.data),total))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"arrow"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1){
return (function (){
return openthink.utils.put_nil_BANG_.call(null,page_ch,(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.data) + (1)));
});})(page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1))
], null),"\u00BB"], null)], null))], null);
})(),(function (){var iter__7326__auto__ = ((function (action_types,actions,___$1){
return (function openthink$views$activity$actions_view_$_iter__45636(s__45637){
return (new cljs.core.LazySeq(null,((function (action_types,actions,___$1){
return (function (){
var s__45637__$1 = s__45637;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__45637__$1);
if(temp__4657__auto__){
var s__45637__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45637__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__45637__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__45639 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__45638 = (0);
while(true){
if((i__45638 < size__7325__auto__)){
var vec__45646 = cljs.core._nth.call(null,c__7324__auto__,i__45638);
var action_type = cljs.core.nth.call(null,vec__45646,(0),null);
var action = cljs.core.nth.call(null,vec__45646,(1),null);
cljs.core.chunk_append.call(null,b__45639,((cljs.core._EQ_.call(null,action_type,"Comment"))?om.core.build.call(null,openthink.views.activity.comment_action,action):om.core.build.call(null,openthink.views.activity.link_action,action)));

var G__45660 = (i__45638 + (1));
i__45638 = G__45660;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45639),openthink$views$activity$actions_view_$_iter__45636.call(null,cljs.core.chunk_rest.call(null,s__45637__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45639),null);
}
} else {
var vec__45649 = cljs.core.first.call(null,s__45637__$2);
var action_type = cljs.core.nth.call(null,vec__45649,(0),null);
var action = cljs.core.nth.call(null,vec__45649,(1),null);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,action_type,"Comment"))?om.core.build.call(null,openthink.views.activity.comment_action,action):om.core.build.call(null,openthink.views.activity.link_action,action)),openthink$views$activity$actions_view_$_iter__45636.call(null,cljs.core.rest.call(null,s__45637__$2)));
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
return iter__7326__auto__.call(null,cljs.core.map.call(null,cljs.core.list,action_types,actions));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No actions yet"], null))));
});

openthink.views.activity.t_openthink$views$activity45588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta45589","meta45589",-1203741939,null)], null);
});

openthink.views.activity.t_openthink$views$activity45588.cljs$lang$type = true;

openthink.views.activity.t_openthink$views$activity45588.cljs$lang$ctorStr = "openthink.views.activity/t_openthink$views$activity45588";

openthink.views.activity.t_openthink$views$activity45588.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"openthink.views.activity/t_openthink$views$activity45588");
});

openthink.views.activity.__GT_t_openthink$views$activity45588 = (function openthink$views$activity$actions_view_$___GT_t_openthink$views$activity45588(data__$1,owner__$1,meta45589){
return (new openthink.views.activity.t_openthink$views$activity45588(data__$1,owner__$1,meta45589));
});

}

return (new openthink.views.activity.t_openthink$views$activity45588(data,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=activity.js.map