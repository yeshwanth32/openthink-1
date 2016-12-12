// Compiled by ClojureScript 1.9.293 {}
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
openthink.views.modal.ask_for = (function openthink$views$modal$ask_for(list_of_wants,params){
return cljs.core.assoc.call(null,params,"ask_for",list_of_wants,"current_post",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(openthink.cursors.current_post.call(null)));
});
openthink.views.modal.submit_form = (function openthink$views$modal$submit_form(data,owner,p__44701){
var map__44780 = p__44701;
var map__44780__$1 = ((((!((map__44780 == null)))?((((map__44780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44780.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44780):map__44780);
var opts = map__44780__$1;
var close_chan = cljs.core.get.call(null,map__44780__$1,new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891));
if(typeof openthink.views.modal.t_openthink$views$modal44782 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
openthink.views.modal.t_openthink$views$modal44782 = (function (data,owner,p__44701,map__44780,opts,close_chan,meta44783){
this.data = data;
this.owner = owner;
this.p__44701 = p__44701;
this.map__44780 = map__44780;
this.opts = opts;
this.close_chan = close_chan;
this.meta44783 = meta44783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
openthink.views.modal.t_openthink$views$modal44782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__44780,map__44780__$1,opts,close_chan){
return (function (_44784,meta44783__$1){
var self__ = this;
var _44784__$1 = this;
return (new openthink.views.modal.t_openthink$views$modal44782(self__.data,self__.owner,self__.p__44701,self__.map__44780,self__.opts,self__.close_chan,meta44783__$1));
});})(map__44780,map__44780__$1,opts,close_chan))
;

openthink.views.modal.t_openthink$views$modal44782.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__44780,map__44780__$1,opts,close_chan){
return (function (_44784){
var self__ = this;
var _44784__$1 = this;
return self__.meta44783;
});})(map__44780,map__44780__$1,opts,close_chan))
;

openthink.views.modal.t_openthink$views$modal44782.prototype.om$core$IInitState$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.modal.t_openthink$views$modal44782.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__44780,map__44780__$1,opts,close_chan){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"submit-chan","submit-chan",1225988800),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"text","text",-1790561697),"",new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795)], null);
});})(map__44780,map__44780__$1,opts,close_chan))
;

openthink.views.modal.t_openthink$views$modal44782.prototype.om$core$IWillMount$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.modal.t_openthink$views$modal44782.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__44780,map__44780__$1,opts,close_chan){
return (function (_){
var self__ = this;
var ___$1 = this;
var submit_chan = openthink.utils.debounce.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"submit-chan","submit-chan",1225988800)),(600));
var c__11475__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto__,submit_chan,___$1,map__44780,map__44780__$1,opts,close_chan){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto__,submit_chan,___$1,map__44780,map__44780__$1,opts,close_chan){
return (function (state_44820){
var state_val_44821 = (state_44820[(1)]);
if((state_val_44821 === (7))){
var inst_44788 = (state_44820[(2)]);
var inst_44789 = cljs.core.println.call(null,"submitting post");
var inst_44790 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"posting","posting",919785887));
var inst_44791 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032),null);
var inst_44792 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];
var inst_44793 = ["title","text"];
var inst_44794 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"title","title",636505583));
var inst_44795 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697));
var inst_44796 = [inst_44794,inst_44795];
var inst_44797 = cljs.core.PersistentHashMap.fromArrays(inst_44793,inst_44796);
var inst_44798 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44799 = ["children","actions"];
var inst_44800 = (new cljs.core.PersistentVector(null,2,(5),inst_44798,inst_44799,null));
var inst_44801 = openthink.views.modal.ask_for.call(null,inst_44800,inst_44797);
var inst_44802 = new cljs.core.Keyword(null,"reply-to","reply-to",-145674792).cljs$core$IFn$_invoke$arity$1(self__.data);
var state_44820__$1 = (function (){var statearr_44822 = state_44820;
(statearr_44822[(7)] = inst_44791);

(statearr_44822[(8)] = inst_44788);

(statearr_44822[(9)] = inst_44792);

(statearr_44822[(10)] = inst_44790);

(statearr_44822[(11)] = inst_44789);

(statearr_44822[(12)] = inst_44801);

return statearr_44822;
})();
if(cljs.core.truth_(inst_44802)){
var statearr_44823_44858 = state_44820__$1;
(statearr_44823_44858[(1)] = (8));

} else {
var statearr_44824_44859 = state_44820__$1;
(statearr_44824_44859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44821 === (1))){
var state_44820__$1 = state_44820;
var statearr_44825_44860 = state_44820__$1;
(statearr_44825_44860[(2)] = null);

(statearr_44825_44860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44821 === (4))){
var state_44820__$1 = state_44820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44820__$1,(7),submit_chan);
} else {
if((state_val_44821 === (6))){
var inst_44816 = (state_44820[(2)]);
var state_44820__$1 = state_44820;
var statearr_44826_44861 = state_44820__$1;
(statearr_44826_44861[(2)] = inst_44816);

(statearr_44826_44861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44821 === (3))){
var inst_44818 = (state_44820[(2)]);
var state_44820__$1 = state_44820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44820__$1,inst_44818);
} else {
if((state_val_44821 === (2))){
var state_44820__$1 = state_44820;
var statearr_44827_44862 = state_44820__$1;
(statearr_44827_44862[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44821 === (9))){
var inst_44801 = (state_44820[(12)]);
var state_44820__$1 = state_44820;
var statearr_44829_44863 = state_44820__$1;
(statearr_44829_44863[(2)] = inst_44801);

(statearr_44829_44863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44821 === (5))){
var state_44820__$1 = state_44820;
var statearr_44830_44864 = state_44820__$1;
(statearr_44830_44864[(2)] = null);

(statearr_44830_44864[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44821 === (10))){
var inst_44792 = (state_44820[(9)]);
var inst_44808 = (state_44820[(2)]);
var inst_44809 = (function (){return ((function (inst_44792,inst_44808,state_val_44821,c__11475__auto__,submit_chan,___$1,map__44780,map__44780__$1,opts,close_chan){
return (function (resp){
cljs.core.println.call(null,"submit-form returned");

cljs.core.println.call(null,resp);

var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);
cljs.core.println.call(null,resp__$1);

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795));

if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032))){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(resp__$1));
} else {
om.core.transact_BANG_.call(null,self__.data,((function (resp__$1,inst_44792,inst_44808,state_val_44821,c__11475__auto__,submit_chan,___$1,map__44780,map__44780__$1,opts,close_chan){
return (function (p1__44698_SHARP_){
return cljs.core.merge.call(null,p1__44698_SHARP_,resp__$1);
});})(resp__$1,inst_44792,inst_44808,state_val_44821,c__11475__auto__,submit_chan,___$1,map__44780,map__44780__$1,opts,close_chan))
);

return cljs.core.async.put_BANG_.call(null,self__.close_chan,(1));
}
});
;})(inst_44792,inst_44808,state_val_44821,c__11475__auto__,submit_chan,___$1,map__44780,map__44780__$1,opts,close_chan))
})();
var inst_44810 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_44808,inst_44809];
var inst_44811 = cljs.core.PersistentHashMap.fromArrays(inst_44792,inst_44810);
var inst_44812 = ajax.core.POST.call(null,"/submit-post",inst_44811);
var state_44820__$1 = (function (){var statearr_44831 = state_44820;
(statearr_44831[(13)] = inst_44812);

return statearr_44831;
})();
var statearr_44832_44865 = state_44820__$1;
(statearr_44832_44865[(2)] = null);

(statearr_44832_44865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44821 === (8))){
var inst_44801 = (state_44820[(12)]);
var inst_44804 = new cljs.core.Keyword(null,"reply-to","reply-to",-145674792).cljs$core$IFn$_invoke$arity$1(self__.data);
var inst_44805 = cljs.core.assoc.call(null,inst_44801,"parent",inst_44804);
var state_44820__$1 = state_44820;
var statearr_44833_44866 = state_44820__$1;
(statearr_44833_44866[(2)] = inst_44805);

(statearr_44833_44866[(1)] = (10));


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
});})(c__11475__auto__,submit_chan,___$1,map__44780,map__44780__$1,opts,close_chan))
;
return ((function (switch__11410__auto__,c__11475__auto__,submit_chan,___$1,map__44780,map__44780__$1,opts,close_chan){
return (function() {
var openthink$views$modal$submit_form_$_state_machine__11411__auto__ = null;
var openthink$views$modal$submit_form_$_state_machine__11411__auto____0 = (function (){
var statearr_44837 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44837[(0)] = openthink$views$modal$submit_form_$_state_machine__11411__auto__);

(statearr_44837[(1)] = (1));

return statearr_44837;
});
var openthink$views$modal$submit_form_$_state_machine__11411__auto____1 = (function (state_44820){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_44820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e44838){if((e44838 instanceof Object)){
var ex__11414__auto__ = e44838;
var statearr_44839_44867 = state_44820;
(statearr_44839_44867[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44868 = state_44820;
state_44820 = G__44868;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
openthink$views$modal$submit_form_$_state_machine__11411__auto__ = function(state_44820){
switch(arguments.length){
case 0:
return openthink$views$modal$submit_form_$_state_machine__11411__auto____0.call(this);
case 1:
return openthink$views$modal$submit_form_$_state_machine__11411__auto____1.call(this,state_44820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
openthink$views$modal$submit_form_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = openthink$views$modal$submit_form_$_state_machine__11411__auto____0;
openthink$views$modal$submit_form_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = openthink$views$modal$submit_form_$_state_machine__11411__auto____1;
return openthink$views$modal$submit_form_$_state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto__,submit_chan,___$1,map__44780,map__44780__$1,opts,close_chan))
})();
var state__11477__auto__ = (function (){var statearr_44840 = f__11476__auto__.call(null);
(statearr_44840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto__);

return statearr_44840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto__,submit_chan,___$1,map__44780,map__44780__$1,opts,close_chan))
);

return c__11475__auto__;
});})(map__44780,map__44780__$1,opts,close_chan))
;

openthink.views.modal.t_openthink$views$modal44782.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.modal.t_openthink$views$modal44782.prototype.om$core$IRender$render$arity$1 = ((function (map__44780,map__44780__$1,opts,close_chan){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.form(({"onSubmit": ((function (this$__$1,map__44780,map__44780__$1,opts,close_chan){
return (function (e){
var c__11475__auto___44869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto___44869,this$__$1,map__44780,map__44780__$1,opts,close_chan){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto___44869,this$__$1,map__44780,map__44780__$1,opts,close_chan){
return (function (state_44849){
var state_val_44850 = (state_44849[(1)]);
if((state_val_44850 === (1))){
var inst_44845 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"submit-chan","submit-chan",1225988800));
var state_44849__$1 = state_44849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44849__$1,(2),inst_44845,(1));
} else {
if((state_val_44850 === (2))){
var inst_44847 = (state_44849[(2)]);
var state_44849__$1 = state_44849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44849__$1,inst_44847);
} else {
return null;
}
}
});})(c__11475__auto___44869,this$__$1,map__44780,map__44780__$1,opts,close_chan))
;
return ((function (switch__11410__auto__,c__11475__auto___44869,this$__$1,map__44780,map__44780__$1,opts,close_chan){
return (function() {
var openthink$views$modal$submit_form_$_state_machine__11411__auto__ = null;
var openthink$views$modal$submit_form_$_state_machine__11411__auto____0 = (function (){
var statearr_44854 = [null,null,null,null,null,null,null];
(statearr_44854[(0)] = openthink$views$modal$submit_form_$_state_machine__11411__auto__);

(statearr_44854[(1)] = (1));

return statearr_44854;
});
var openthink$views$modal$submit_form_$_state_machine__11411__auto____1 = (function (state_44849){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_44849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e44855){if((e44855 instanceof Object)){
var ex__11414__auto__ = e44855;
var statearr_44856_44870 = state_44849;
(statearr_44856_44870[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44871 = state_44849;
state_44849 = G__44871;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
openthink$views$modal$submit_form_$_state_machine__11411__auto__ = function(state_44849){
switch(arguments.length){
case 0:
return openthink$views$modal$submit_form_$_state_machine__11411__auto____0.call(this);
case 1:
return openthink$views$modal$submit_form_$_state_machine__11411__auto____1.call(this,state_44849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
openthink$views$modal$submit_form_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = openthink$views$modal$submit_form_$_state_machine__11411__auto____0;
openthink$views$modal$submit_form_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = openthink$views$modal$submit_form_$_state_machine__11411__auto____1;
return openthink$views$modal$submit_form_$_state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto___44869,this$__$1,map__44780,map__44780__$1,opts,close_chan))
})();
var state__11477__auto__ = (function (){var statearr_44857 = f__11476__auto__.call(null);
(statearr_44857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___44869);

return statearr_44857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto___44869,this$__$1,map__44780,map__44780__$1,opts,close_chan))
);


e.preventDefault();

return false;
});})(this$__$1,map__44780,map__44780__$1,opts,close_chan))
}),React.DOM.div(({"className": "row"}),React.DOM.div(({"className": "large-12 columns"}),React.DOM.h3(null,"Create and link a new post:"),sablono.interpreter.interpret.call(null,(function (){var temp__4657__auto__ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(temp__4657__auto__)){
var error = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"alert-box warning radius"], null),error], null);
} else {
return null;
}
})()),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"posting","posting",919785887),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"alert-box info radius"], null),"Posting... Please wait"], null):null)),sablono.interpreter.input.call(null,({"type": "text", "placeholder": "optional title", "name": "post-title", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"title","title",636505583)), "onChange": ((function (this$__$1,map__44780,map__44780__$1,opts,close_chan){
return (function (p1__44699_SHARP_){
return openthink.utils.handle_change.call(null,p1__44699_SHARP_,self__.owner,new cljs.core.Keyword(null,"title","title",636505583));
});})(this$__$1,map__44780,map__44780__$1,opts,close_chan))
})),sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.editor.editor_view,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697))], null),new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"your content goes here",new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275),((function (this$__$1,map__44780,map__44780__$1,opts,close_chan){
return (function (p1__44700_SHARP_){
return openthink.utils.handle_change.call(null,p1__44700_SHARP_,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697));
});})(this$__$1,map__44780,map__44780__$1,opts,close_chan))
], null)], null))),React.DOM.button(({"type": "submit", "className": "button tiny"}),"create"))));
});})(map__44780,map__44780__$1,opts,close_chan))
;

openthink.views.modal.t_openthink$views$modal44782.getBasis = ((function (map__44780,map__44780__$1,opts,close_chan){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"p__44701","p__44701",1551458456,null),new cljs.core.Symbol(null,"map__44780","map__44780",46573771,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"close-chan","close-chan",-501285364,null),new cljs.core.Symbol(null,"meta44783","meta44783",355831329,null)], null);
});})(map__44780,map__44780__$1,opts,close_chan))
;

openthink.views.modal.t_openthink$views$modal44782.cljs$lang$type = true;

openthink.views.modal.t_openthink$views$modal44782.cljs$lang$ctorStr = "openthink.views.modal/t_openthink$views$modal44782";

openthink.views.modal.t_openthink$views$modal44782.cljs$lang$ctorPrWriter = ((function (map__44780,map__44780__$1,opts,close_chan){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"openthink.views.modal/t_openthink$views$modal44782");
});})(map__44780,map__44780__$1,opts,close_chan))
;

openthink.views.modal.__GT_t_openthink$views$modal44782 = ((function (map__44780,map__44780__$1,opts,close_chan){
return (function openthink$views$modal$submit_form_$___GT_t_openthink$views$modal44782(data__$1,owner__$1,p__44701__$1,map__44780__$2,opts__$1,close_chan__$1,meta44783){
return (new openthink.views.modal.t_openthink$views$modal44782(data__$1,owner__$1,p__44701__$1,map__44780__$2,opts__$1,close_chan__$1,meta44783));
});})(map__44780,map__44780__$1,opts,close_chan))
;

}

return (new openthink.views.modal.t_openthink$views$modal44782(data,owner,p__44701,map__44780__$1,opts,close_chan,cljs.core.PersistentArrayMap.EMPTY));
});
openthink.views.modal.link_form = (function openthink$views$modal$link_form(data,owner,p__44875){
var map__44943 = p__44875;
var map__44943__$1 = ((((!((map__44943 == null)))?((((map__44943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44943.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44943):map__44943);
var opts = map__44943__$1;
var close_chan = cljs.core.get.call(null,map__44943__$1,new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891));
if(typeof openthink.views.modal.t_openthink$views$modal44945 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
openthink.views.modal.t_openthink$views$modal44945 = (function (data,owner,p__44875,map__44943,opts,close_chan,meta44946){
this.data = data;
this.owner = owner;
this.p__44875 = p__44875;
this.map__44943 = map__44943;
this.opts = opts;
this.close_chan = close_chan;
this.meta44946 = meta44946;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
openthink.views.modal.t_openthink$views$modal44945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__44943,map__44943__$1,opts,close_chan){
return (function (_44947,meta44946__$1){
var self__ = this;
var _44947__$1 = this;
return (new openthink.views.modal.t_openthink$views$modal44945(self__.data,self__.owner,self__.p__44875,self__.map__44943,self__.opts,self__.close_chan,meta44946__$1));
});})(map__44943,map__44943__$1,opts,close_chan))
;

openthink.views.modal.t_openthink$views$modal44945.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__44943,map__44943__$1,opts,close_chan){
return (function (_44947){
var self__ = this;
var _44947__$1 = this;
return self__.meta44946;
});})(map__44943,map__44943__$1,opts,close_chan))
;

openthink.views.modal.t_openthink$views$modal44945.prototype.om$core$IInitState$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.modal.t_openthink$views$modal44945.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__44943,map__44943__$1,opts,close_chan){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"submit-chan","submit-chan",1225988800),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"link","link",-1769163468),"",new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795)], null);
});})(map__44943,map__44943__$1,opts,close_chan))
;

openthink.views.modal.t_openthink$views$modal44945.prototype.om$core$IWillMount$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.modal.t_openthink$views$modal44945.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__44943,map__44943__$1,opts,close_chan){
return (function (_){
var self__ = this;
var ___$1 = this;
var submit_chan = openthink.utils.debounce.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"submit-chan","submit-chan",1225988800)),(600));
var c__11475__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto__,submit_chan,___$1,map__44943,map__44943__$1,opts,close_chan){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto__,submit_chan,___$1,map__44943,map__44943__$1,opts,close_chan){
return (function (state_44977){
var state_val_44978 = (state_44977[(1)]);
if((state_val_44978 === (1))){
var state_44977__$1 = state_44977;
var statearr_44979_45010 = state_44977__$1;
(statearr_44979_45010[(2)] = null);

(statearr_44979_45010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44978 === (2))){
var state_44977__$1 = state_44977;
var statearr_44980_45011 = state_44977__$1;
(statearr_44980_45011[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44978 === (3))){
var inst_44975 = (state_44977[(2)]);
var state_44977__$1 = state_44977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44977__$1,inst_44975);
} else {
if((state_val_44978 === (4))){
var state_44977__$1 = state_44977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44977__$1,(7),submit_chan);
} else {
if((state_val_44978 === (5))){
var state_44977__$1 = state_44977;
var statearr_44982_45012 = state_44977__$1;
(statearr_44982_45012[(2)] = null);

(statearr_44982_45012[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44978 === (6))){
var inst_44973 = (state_44977[(2)]);
var state_44977__$1 = state_44977;
var statearr_44983_45013 = state_44977__$1;
(statearr_44983_45013[(2)] = inst_44973);

(statearr_44983_45013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44978 === (7))){
var inst_44951 = (state_44977[(2)]);
var inst_44952 = cljs.core.println.call(null,"linking post");
var inst_44953 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"posting","posting",919785887));
var inst_44954 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032),null);
var inst_44955 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];
var inst_44956 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44957 = ["children","actions"];
var inst_44958 = (new cljs.core.PersistentVector(null,2,(5),inst_44956,inst_44957,null));
var inst_44959 = ["child-text","parent"];
var inst_44960 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"link","link",-1769163468));
var inst_44961 = openthink.cursors.current_post.call(null);
var inst_44962 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_44961);
var inst_44963 = [inst_44960,inst_44962];
var inst_44964 = cljs.core.PersistentHashMap.fromArrays(inst_44959,inst_44963);
var inst_44965 = openthink.views.modal.ask_for.call(null,inst_44958,inst_44964);
var inst_44966 = (function (){return ((function (inst_44951,inst_44952,inst_44953,inst_44954,inst_44955,inst_44956,inst_44957,inst_44958,inst_44959,inst_44960,inst_44961,inst_44962,inst_44963,inst_44964,inst_44965,state_val_44978,c__11475__auto__,submit_chan,___$1,map__44943,map__44943__$1,opts,close_chan){
return (function (resp){
cljs.core.println.call(null,"link-form returned");

cljs.core.println.call(null,resp);

var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);
cljs.core.println.call(null,resp__$1);

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795));

if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032))){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(resp__$1));
} else {
om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"rels","rels",1770187185),((function (resp__$1,inst_44951,inst_44952,inst_44953,inst_44954,inst_44955,inst_44956,inst_44957,inst_44958,inst_44959,inst_44960,inst_44961,inst_44962,inst_44963,inst_44964,inst_44965,state_val_44978,c__11475__auto__,submit_chan,___$1,map__44943,map__44943__$1,opts,close_chan){
return (function (p1__44872_SHARP_){
return cljs.core.merge.call(null,p1__44872_SHARP_,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(resp__$1));
});})(resp__$1,inst_44951,inst_44952,inst_44953,inst_44954,inst_44955,inst_44956,inst_44957,inst_44958,inst_44959,inst_44960,inst_44961,inst_44962,inst_44963,inst_44964,inst_44965,state_val_44978,c__11475__auto__,submit_chan,___$1,map__44943,map__44943__$1,opts,close_chan))
);

om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"posts","posts",760043164),((function (resp__$1,inst_44951,inst_44952,inst_44953,inst_44954,inst_44955,inst_44956,inst_44957,inst_44958,inst_44959,inst_44960,inst_44961,inst_44962,inst_44963,inst_44964,inst_44965,state_val_44978,c__11475__auto__,submit_chan,___$1,map__44943,map__44943__$1,opts,close_chan){
return (function (p1__44873_SHARP_){
return cljs.core.merge.call(null,p1__44873_SHARP_,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(resp__$1));
});})(resp__$1,inst_44951,inst_44952,inst_44953,inst_44954,inst_44955,inst_44956,inst_44957,inst_44958,inst_44959,inst_44960,inst_44961,inst_44962,inst_44963,inst_44964,inst_44965,state_val_44978,c__11475__auto__,submit_chan,___$1,map__44943,map__44943__$1,opts,close_chan))
);

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"link_ids","link_ids",-791411950),new cljs.core.Keyword(null,"new_rel_ids","new_rel_ids",701283960).cljs$core$IFn$_invoke$arity$1(resp__$1));

return cljs.core.async.put_BANG_.call(null,self__.close_chan,(1));
}
});
;})(inst_44951,inst_44952,inst_44953,inst_44954,inst_44955,inst_44956,inst_44957,inst_44958,inst_44959,inst_44960,inst_44961,inst_44962,inst_44963,inst_44964,inst_44965,state_val_44978,c__11475__auto__,submit_chan,___$1,map__44943,map__44943__$1,opts,close_chan))
})();
var inst_44967 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_44965,inst_44966];
var inst_44968 = cljs.core.PersistentHashMap.fromArrays(inst_44955,inst_44967);
var inst_44969 = ajax.core.POST.call(null,"/link-post",inst_44968);
var state_44977__$1 = (function (){var statearr_44984 = state_44977;
(statearr_44984[(7)] = inst_44969);

(statearr_44984[(8)] = inst_44954);

(statearr_44984[(9)] = inst_44953);

(statearr_44984[(10)] = inst_44952);

(statearr_44984[(11)] = inst_44951);

return statearr_44984;
})();
var statearr_44985_45014 = state_44977__$1;
(statearr_44985_45014[(2)] = null);

(statearr_44985_45014[(1)] = (2));


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
});})(c__11475__auto__,submit_chan,___$1,map__44943,map__44943__$1,opts,close_chan))
;
return ((function (switch__11410__auto__,c__11475__auto__,submit_chan,___$1,map__44943,map__44943__$1,opts,close_chan){
return (function() {
var openthink$views$modal$link_form_$_state_machine__11411__auto__ = null;
var openthink$views$modal$link_form_$_state_machine__11411__auto____0 = (function (){
var statearr_44989 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44989[(0)] = openthink$views$modal$link_form_$_state_machine__11411__auto__);

(statearr_44989[(1)] = (1));

return statearr_44989;
});
var openthink$views$modal$link_form_$_state_machine__11411__auto____1 = (function (state_44977){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_44977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e44990){if((e44990 instanceof Object)){
var ex__11414__auto__ = e44990;
var statearr_44991_45015 = state_44977;
(statearr_44991_45015[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45016 = state_44977;
state_44977 = G__45016;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
openthink$views$modal$link_form_$_state_machine__11411__auto__ = function(state_44977){
switch(arguments.length){
case 0:
return openthink$views$modal$link_form_$_state_machine__11411__auto____0.call(this);
case 1:
return openthink$views$modal$link_form_$_state_machine__11411__auto____1.call(this,state_44977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
openthink$views$modal$link_form_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = openthink$views$modal$link_form_$_state_machine__11411__auto____0;
openthink$views$modal$link_form_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = openthink$views$modal$link_form_$_state_machine__11411__auto____1;
return openthink$views$modal$link_form_$_state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto__,submit_chan,___$1,map__44943,map__44943__$1,opts,close_chan))
})();
var state__11477__auto__ = (function (){var statearr_44992 = f__11476__auto__.call(null);
(statearr_44992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto__);

return statearr_44992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto__,submit_chan,___$1,map__44943,map__44943__$1,opts,close_chan))
);

return c__11475__auto__;
});})(map__44943,map__44943__$1,opts,close_chan))
;

openthink.views.modal.t_openthink$views$modal44945.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.modal.t_openthink$views$modal44945.prototype.om$core$IRender$render$arity$1 = ((function (map__44943,map__44943__$1,opts,close_chan){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.form(({"onSubmit": ((function (this$__$1,map__44943,map__44943__$1,opts,close_chan){
return (function (e){
var c__11475__auto___45017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto___45017,this$__$1,map__44943,map__44943__$1,opts,close_chan){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto___45017,this$__$1,map__44943,map__44943__$1,opts,close_chan){
return (function (state_45001){
var state_val_45002 = (state_45001[(1)]);
if((state_val_45002 === (1))){
var inst_44997 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"submit-chan","submit-chan",1225988800));
var state_45001__$1 = state_45001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45001__$1,(2),inst_44997,(1));
} else {
if((state_val_45002 === (2))){
var inst_44999 = (state_45001[(2)]);
var state_45001__$1 = state_45001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45001__$1,inst_44999);
} else {
return null;
}
}
});})(c__11475__auto___45017,this$__$1,map__44943,map__44943__$1,opts,close_chan))
;
return ((function (switch__11410__auto__,c__11475__auto___45017,this$__$1,map__44943,map__44943__$1,opts,close_chan){
return (function() {
var openthink$views$modal$link_form_$_state_machine__11411__auto__ = null;
var openthink$views$modal$link_form_$_state_machine__11411__auto____0 = (function (){
var statearr_45006 = [null,null,null,null,null,null,null];
(statearr_45006[(0)] = openthink$views$modal$link_form_$_state_machine__11411__auto__);

(statearr_45006[(1)] = (1));

return statearr_45006;
});
var openthink$views$modal$link_form_$_state_machine__11411__auto____1 = (function (state_45001){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_45001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e45007){if((e45007 instanceof Object)){
var ex__11414__auto__ = e45007;
var statearr_45008_45018 = state_45001;
(statearr_45008_45018[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45019 = state_45001;
state_45001 = G__45019;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
openthink$views$modal$link_form_$_state_machine__11411__auto__ = function(state_45001){
switch(arguments.length){
case 0:
return openthink$views$modal$link_form_$_state_machine__11411__auto____0.call(this);
case 1:
return openthink$views$modal$link_form_$_state_machine__11411__auto____1.call(this,state_45001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
openthink$views$modal$link_form_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = openthink$views$modal$link_form_$_state_machine__11411__auto____0;
openthink$views$modal$link_form_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = openthink$views$modal$link_form_$_state_machine__11411__auto____1;
return openthink$views$modal$link_form_$_state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto___45017,this$__$1,map__44943,map__44943__$1,opts,close_chan))
})();
var state__11477__auto__ = (function (){var statearr_45009 = f__11476__auto__.call(null);
(statearr_45009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___45017);

return statearr_45009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto___45017,this$__$1,map__44943,map__44943__$1,opts,close_chan))
);


e.preventDefault();

return false;
});})(this$__$1,map__44943,map__44943__$1,opts,close_chan))
}),React.DOM.div(({"className": "row"}),React.DOM.div(({"className": "large-12 columns"}),React.DOM.h3(null,"Link an existing post:"),sablono.interpreter.interpret.call(null,(function (){var temp__4657__auto__ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(temp__4657__auto__)){
var error = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"alert-box warning radius"], null),error], null);
} else {
return null;
}
})()),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"posting","posting",919785887),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"alert-box info radius"], null),"Linking... Please wait"], null):null)),sablono.interpreter.input.call(null,({"type": "text", "placeholder": "URL or ID to a post", "name": "link-text", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"link","link",-1769163468)), "onChange": ((function (this$__$1,map__44943,map__44943__$1,opts,close_chan){
return (function (p1__44874_SHARP_){
return openthink.utils.handle_change.call(null,p1__44874_SHARP_,self__.owner,new cljs.core.Keyword(null,"link","link",-1769163468));
});})(this$__$1,map__44943,map__44943__$1,opts,close_chan))
})),React.DOM.button(({"type": "submit", "className": "button tiny"}),"link"))));
});})(map__44943,map__44943__$1,opts,close_chan))
;

openthink.views.modal.t_openthink$views$modal44945.getBasis = ((function (map__44943,map__44943__$1,opts,close_chan){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"p__44875","p__44875",1220668986,null),new cljs.core.Symbol(null,"map__44943","map__44943",-829643716,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"close-chan","close-chan",-501285364,null),new cljs.core.Symbol(null,"meta44946","meta44946",-193388246,null)], null);
});})(map__44943,map__44943__$1,opts,close_chan))
;

openthink.views.modal.t_openthink$views$modal44945.cljs$lang$type = true;

openthink.views.modal.t_openthink$views$modal44945.cljs$lang$ctorStr = "openthink.views.modal/t_openthink$views$modal44945";

openthink.views.modal.t_openthink$views$modal44945.cljs$lang$ctorPrWriter = ((function (map__44943,map__44943__$1,opts,close_chan){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"openthink.views.modal/t_openthink$views$modal44945");
});})(map__44943,map__44943__$1,opts,close_chan))
;

openthink.views.modal.__GT_t_openthink$views$modal44945 = ((function (map__44943,map__44943__$1,opts,close_chan){
return (function openthink$views$modal$link_form_$___GT_t_openthink$views$modal44945(data__$1,owner__$1,p__44875__$1,map__44943__$2,opts__$1,close_chan__$1,meta44946){
return (new openthink.views.modal.t_openthink$views$modal44945(data__$1,owner__$1,p__44875__$1,map__44943__$2,opts__$1,close_chan__$1,meta44946));
});})(map__44943,map__44943__$1,opts,close_chan))
;

}

return (new openthink.views.modal.t_openthink$views$modal44945(data,owner,p__44875,map__44943__$1,opts,close_chan,cljs.core.PersistentArrayMap.EMPTY));
});
openthink.views.modal.post_reply_section = (function openthink$views$modal$post_reply_section(data,owner,opts){
if(typeof openthink.views.modal.t_openthink$views$modal45023 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
openthink.views.modal.t_openthink$views$modal45023 = (function (data,owner,opts,meta45024){
this.data = data;
this.owner = owner;
this.opts = opts;
this.meta45024 = meta45024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
openthink.views.modal.t_openthink$views$modal45023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45025,meta45024__$1){
var self__ = this;
var _45025__$1 = this;
return (new openthink.views.modal.t_openthink$views$modal45023(self__.data,self__.owner,self__.opts,meta45024__$1));
});

openthink.views.modal.t_openthink$views$modal45023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45025){
var self__ = this;
var _45025__$1 = this;
return self__.meta45024;
});

openthink.views.modal.t_openthink$views$modal45023.prototype.om$core$IInitState$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.modal.t_openthink$views$modal45023.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reply-type","reply-type",1565507820),new cljs.core.Keyword(null,"post","post",269697687)], null);
});

openthink.views.modal.t_openthink$views$modal45023.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.modal.t_openthink$views$modal45023.prototype.om$core$IRender$render$arity$1 = (function (this$){
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

openthink.views.modal.t_openthink$views$modal45023.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta45024","meta45024",-241422739,null)], null);
});

openthink.views.modal.t_openthink$views$modal45023.cljs$lang$type = true;

openthink.views.modal.t_openthink$views$modal45023.cljs$lang$ctorStr = "openthink.views.modal/t_openthink$views$modal45023";

openthink.views.modal.t_openthink$views$modal45023.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"openthink.views.modal/t_openthink$views$modal45023");
});

openthink.views.modal.__GT_t_openthink$views$modal45023 = (function openthink$views$modal$post_reply_section_$___GT_t_openthink$views$modal45023(data__$1,owner__$1,opts__$1,meta45024){
return (new openthink.views.modal.t_openthink$views$modal45023(data__$1,owner__$1,opts__$1,meta45024));
});

}

return (new openthink.views.modal.t_openthink$views$modal45023(data,owner,opts,cljs.core.PersistentArrayMap.EMPTY));
});
openthink.views.modal.basic_modal = (function openthink$views$modal$basic_modal(data,owner){
if(typeof openthink.views.modal.t_openthink$views$modal45031 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
openthink.views.modal.t_openthink$views$modal45031 = (function (data,owner,meta45032){
this.data = data;
this.owner = owner;
this.meta45032 = meta45032;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
openthink.views.modal.t_openthink$views$modal45031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45033,meta45032__$1){
var self__ = this;
var _45033__$1 = this;
return (new openthink.views.modal.t_openthink$views$modal45031(self__.data,self__.owner,meta45032__$1));
});

openthink.views.modal.t_openthink$views$modal45031.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45033){
var self__ = this;
var _45033__$1 = this;
return self__.meta45032;
});

openthink.views.modal.t_openthink$views$modal45031.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.modal.t_openthink$views$modal45031.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.h2(null,"some modal txt");
});

openthink.views.modal.t_openthink$views$modal45031.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta45032","meta45032",1159672498,null)], null);
});

openthink.views.modal.t_openthink$views$modal45031.cljs$lang$type = true;

openthink.views.modal.t_openthink$views$modal45031.cljs$lang$ctorStr = "openthink.views.modal/t_openthink$views$modal45031";

openthink.views.modal.t_openthink$views$modal45031.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"openthink.views.modal/t_openthink$views$modal45031");
});

openthink.views.modal.__GT_t_openthink$views$modal45031 = (function openthink$views$modal$basic_modal_$___GT_t_openthink$views$modal45031(data__$1,owner__$1,meta45032){
return (new openthink.views.modal.t_openthink$views$modal45031(data__$1,owner__$1,meta45032));
});

}

return (new openthink.views.modal.t_openthink$views$modal45031(data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
openthink.views.modal.modal_map = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"basic","basic",1043717368),openthink.views.modal.basic_modal,new cljs.core.Keyword(null,"new-post","new-post",-1808203791),openthink.views.modal.post_reply_section,new cljs.core.Keyword(null,"register","register",1968522516),openthink.views.auth.register_form], null);
openthink.views.modal.close_modal = (function openthink$views$modal$close_modal(){
cljs.core.println.call(null,"modal should be closing");

return cljs.core.swap_BANG_.call(null,openthink.state.app_state,cljs.core.dissoc,new cljs.core.Keyword(null,"modal","modal",-1031880850));
});
/**
 * reusable modal component.
 *   modal-view is the component that should be rendered as a modal
 */
openthink.views.modal.modal = (function openthink$views$modal$modal(cursor,owner,p__45036){
var map__45082 = p__45036;
var map__45082__$1 = ((((!((map__45082 == null)))?((((map__45082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45082.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45082):map__45082);
var modal_view = cljs.core.get.call(null,map__45082__$1,new cljs.core.Keyword(null,"modal-view","modal-view",-1572274108));
if(typeof openthink.views.modal.t_openthink$views$modal45084 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
openthink.views.modal.t_openthink$views$modal45084 = (function (cursor,owner,p__45036,map__45082,modal_view,meta45085){
this.cursor = cursor;
this.owner = owner;
this.p__45036 = p__45036;
this.map__45082 = map__45082;
this.modal_view = modal_view;
this.meta45085 = meta45085;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
openthink.views.modal.t_openthink$views$modal45084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__45082,map__45082__$1,modal_view){
return (function (_45086,meta45085__$1){
var self__ = this;
var _45086__$1 = this;
return (new openthink.views.modal.t_openthink$views$modal45084(self__.cursor,self__.owner,self__.p__45036,self__.map__45082,self__.modal_view,meta45085__$1));
});})(map__45082,map__45082__$1,modal_view))
;

openthink.views.modal.t_openthink$views$modal45084.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__45082,map__45082__$1,modal_view){
return (function (_45086){
var self__ = this;
var _45086__$1 = this;
return self__.meta45085;
});})(map__45082,map__45082__$1,modal_view))
;

openthink.views.modal.t_openthink$views$modal45084.prototype.om$core$IInitState$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.modal.t_openthink$views$modal45084.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__45082,map__45082__$1,modal_view){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891),cljs.core.async.chan.call(null)], null);
});})(map__45082,map__45082__$1,modal_view))
;

openthink.views.modal.t_openthink$views$modal45084.prototype.om$core$IWillMount$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.modal.t_openthink$views$modal45084.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__45082,map__45082__$1,modal_view){
return (function (_){
var self__ = this;
var ___$1 = this;
var close_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891));
var c__11475__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto__,close_chan,___$1,map__45082,map__45082__$1,modal_view){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto__,close_chan,___$1,map__45082,map__45082__$1,modal_view){
return (function (state_45094){
var state_val_45095 = (state_45094[(1)]);
if((state_val_45095 === (1))){
var state_45094__$1 = state_45094;
var statearr_45096_45127 = state_45094__$1;
(statearr_45096_45127[(2)] = null);

(statearr_45096_45127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (2))){
var state_45094__$1 = state_45094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45094__$1,(4),close_chan);
} else {
if((state_val_45095 === (3))){
var inst_45092 = (state_45094[(2)]);
var state_45094__$1 = state_45094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45094__$1,inst_45092);
} else {
if((state_val_45095 === (4))){
var inst_45089 = (state_45094[(2)]);
var inst_45090 = openthink.views.modal.close_modal.call(null);
var state_45094__$1 = (function (){var statearr_45097 = state_45094;
(statearr_45097[(7)] = inst_45089);

return statearr_45097;
})();
var statearr_45098_45128 = state_45094__$1;
(statearr_45098_45128[(2)] = inst_45090);

(statearr_45098_45128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__11475__auto__,close_chan,___$1,map__45082,map__45082__$1,modal_view))
;
return ((function (switch__11410__auto__,c__11475__auto__,close_chan,___$1,map__45082,map__45082__$1,modal_view){
return (function() {
var openthink$views$modal$modal_$_state_machine__11411__auto__ = null;
var openthink$views$modal$modal_$_state_machine__11411__auto____0 = (function (){
var statearr_45102 = [null,null,null,null,null,null,null,null];
(statearr_45102[(0)] = openthink$views$modal$modal_$_state_machine__11411__auto__);

(statearr_45102[(1)] = (1));

return statearr_45102;
});
var openthink$views$modal$modal_$_state_machine__11411__auto____1 = (function (state_45094){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_45094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e45103){if((e45103 instanceof Object)){
var ex__11414__auto__ = e45103;
var statearr_45104_45129 = state_45094;
(statearr_45104_45129[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45130 = state_45094;
state_45094 = G__45130;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
openthink$views$modal$modal_$_state_machine__11411__auto__ = function(state_45094){
switch(arguments.length){
case 0:
return openthink$views$modal$modal_$_state_machine__11411__auto____0.call(this);
case 1:
return openthink$views$modal$modal_$_state_machine__11411__auto____1.call(this,state_45094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
openthink$views$modal$modal_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = openthink$views$modal$modal_$_state_machine__11411__auto____0;
openthink$views$modal$modal_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = openthink$views$modal$modal_$_state_machine__11411__auto____1;
return openthink$views$modal$modal_$_state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto__,close_chan,___$1,map__45082,map__45082__$1,modal_view))
})();
var state__11477__auto__ = (function (){var statearr_45105 = f__11476__auto__.call(null);
(statearr_45105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto__);

return statearr_45105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto__,close_chan,___$1,map__45082,map__45082__$1,modal_view))
);

return c__11475__auto__;
});})(map__45082,map__45082__$1,modal_view))
;

openthink.views.modal.t_openthink$views$modal45084.prototype.om$core$IDidMount$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.modal.t_openthink$views$modal45084.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__45082,map__45082__$1,modal_view){
return (function (_){
var self__ = this;
var ___$1 = this;
var outside_clicks = openthink.utils.listen.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("reveal-modal-bg"))[(0)]),"click");
var c__11475__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto__,outside_clicks,___$1,map__45082,map__45082__$1,modal_view){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto__,outside_clicks,___$1,map__45082,map__45082__$1,modal_view){
return (function (state_45113){
var state_val_45114 = (state_45113[(1)]);
if((state_val_45114 === (1))){
var state_45113__$1 = state_45113;
var statearr_45115_45131 = state_45113__$1;
(statearr_45115_45131[(2)] = null);

(statearr_45115_45131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45114 === (2))){
var state_45113__$1 = state_45113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45113__$1,(4),outside_clicks);
} else {
if((state_val_45114 === (3))){
var inst_45111 = (state_45113[(2)]);
var state_45113__$1 = state_45113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45113__$1,inst_45111);
} else {
if((state_val_45114 === (4))){
var inst_45108 = (state_45113[(2)]);
var inst_45109 = openthink.views.modal.close_modal.call(null);
var state_45113__$1 = (function (){var statearr_45116 = state_45113;
(statearr_45116[(7)] = inst_45108);

return statearr_45116;
})();
var statearr_45117_45132 = state_45113__$1;
(statearr_45117_45132[(2)] = inst_45109);

(statearr_45117_45132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__11475__auto__,outside_clicks,___$1,map__45082,map__45082__$1,modal_view))
;
return ((function (switch__11410__auto__,c__11475__auto__,outside_clicks,___$1,map__45082,map__45082__$1,modal_view){
return (function() {
var openthink$views$modal$modal_$_state_machine__11411__auto__ = null;
var openthink$views$modal$modal_$_state_machine__11411__auto____0 = (function (){
var statearr_45121 = [null,null,null,null,null,null,null,null];
(statearr_45121[(0)] = openthink$views$modal$modal_$_state_machine__11411__auto__);

(statearr_45121[(1)] = (1));

return statearr_45121;
});
var openthink$views$modal$modal_$_state_machine__11411__auto____1 = (function (state_45113){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_45113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e45122){if((e45122 instanceof Object)){
var ex__11414__auto__ = e45122;
var statearr_45123_45133 = state_45113;
(statearr_45123_45133[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45134 = state_45113;
state_45113 = G__45134;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
openthink$views$modal$modal_$_state_machine__11411__auto__ = function(state_45113){
switch(arguments.length){
case 0:
return openthink$views$modal$modal_$_state_machine__11411__auto____0.call(this);
case 1:
return openthink$views$modal$modal_$_state_machine__11411__auto____1.call(this,state_45113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
openthink$views$modal$modal_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = openthink$views$modal$modal_$_state_machine__11411__auto____0;
openthink$views$modal$modal_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = openthink$views$modal$modal_$_state_machine__11411__auto____1;
return openthink$views$modal$modal_$_state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto__,outside_clicks,___$1,map__45082,map__45082__$1,modal_view))
})();
var state__11477__auto__ = (function (){var statearr_45124 = f__11476__auto__.call(null);
(statearr_45124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto__);

return statearr_45124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto__,outside_clicks,___$1,map__45082,map__45082__$1,modal_view))
);

return c__11475__auto__;
});})(map__45082,map__45082__$1,modal_view))
;

openthink.views.modal.t_openthink$views$modal45084.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.modal.t_openthink$views$modal45084.prototype.om$core$IRender$render$arity$1 = ((function (map__45082,map__45082__$1,modal_view){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,React.DOM.div(({"className": "reveal-modal-bg", "style": cljs.core.clj__GT_js.call(null,({"display": "block"}))})),React.DOM.div(({"id": "myModal", "className": "reveal-modal open", "style": cljs.core.clj__GT_js.call(null,({"visibility": "visible", "display": "block", "top": "88px", "opacity": (1)}))}),sablono.interpreter.interpret.call(null,om.core.build.call(null,self__.modal_view,self__.cursor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891))], null)], null)))));
});})(map__45082,map__45082__$1,modal_view))
;

openthink.views.modal.t_openthink$views$modal45084.getBasis = ((function (map__45082,map__45082__$1,modal_view){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"p__45036","p__45036",-628729821,null),new cljs.core.Symbol(null,"map__45082","map__45082",-457893073,null),new cljs.core.Symbol(null,"modal-view","modal-view",68257419,null),new cljs.core.Symbol(null,"meta45085","meta45085",-849614913,null)], null);
});})(map__45082,map__45082__$1,modal_view))
;

openthink.views.modal.t_openthink$views$modal45084.cljs$lang$type = true;

openthink.views.modal.t_openthink$views$modal45084.cljs$lang$ctorStr = "openthink.views.modal/t_openthink$views$modal45084";

openthink.views.modal.t_openthink$views$modal45084.cljs$lang$ctorPrWriter = ((function (map__45082,map__45082__$1,modal_view){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"openthink.views.modal/t_openthink$views$modal45084");
});})(map__45082,map__45082__$1,modal_view))
;

openthink.views.modal.__GT_t_openthink$views$modal45084 = ((function (map__45082,map__45082__$1,modal_view){
return (function openthink$views$modal$modal_$___GT_t_openthink$views$modal45084(cursor__$1,owner__$1,p__45036__$1,map__45082__$2,modal_view__$1,meta45085){
return (new openthink.views.modal.t_openthink$views$modal45084(cursor__$1,owner__$1,p__45036__$1,map__45082__$2,modal_view__$1,meta45085));
});})(map__45082,map__45082__$1,modal_view))
;

}

return (new openthink.views.modal.t_openthink$views$modal45084(cursor,owner,p__45036,map__45082__$1,modal_view,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=modal.js.map