// Compiled by ClojureScript 0.0-2371
goog.provide('openthink.views.modal');
goog.require('cljs.core');
goog.require('openthink.state');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('openthink.state');
goog.require('sablono.core');
goog.require('openthink.views.auth');
goog.require('cljs.core.async');
goog.require('openthink.cursors');
goog.require('sablono.core');
goog.require('openthink.utils');
goog.require('openthink.utils');
goog.require('openthink.views.auth');
goog.require('om.core');
goog.require('openthink.cursors');
goog.require('om.core');
goog.require('clojure.string');
goog.require('clojure.string');
openthink.views.modal.ask_for = (function ask_for(list_of_wants,params){return cljs.core.assoc.call(null,params,"ask_for",list_of_wants,"current_post",new cljs.core.Keyword(null,"current_post","current_post",2072811381).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,openthink.state.app_state)));
});
openthink.views.modal.submit_form = (function submit_form(data,owner,p__13695){var map__13773 = p__13695;var map__13773__$1 = ((cljs.core.seq_QMARK_.call(null,map__13773))?cljs.core.apply.call(null,cljs.core.hash_map,map__13773):map__13773);var opts = map__13773__$1;var close_chan = cljs.core.get.call(null,map__13773__$1,new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891));if(typeof openthink.views.modal.t13774 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.views.modal.t13774 = (function (close_chan,opts,map__13773,p__13695,owner,data,submit_form,meta13775){
this.close_chan = close_chan;
this.opts = opts;
this.map__13773 = map__13773;
this.p__13695 = p__13695;
this.owner = owner;
this.data = data;
this.submit_form = submit_form;
this.meta13775 = meta13775;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.modal.t13774.cljs$lang$type = true;
openthink.views.modal.t13774.cljs$lang$ctorStr = "openthink.views.modal/t13774";
openthink.views.modal.t13774.cljs$lang$ctorPrWriter = ((function (map__13773,map__13773__$1,opts,close_chan){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.views.modal/t13774");
});})(map__13773,map__13773__$1,opts,close_chan))
;
openthink.views.modal.t13774.prototype.om$core$IRender$ = true;
openthink.views.modal.t13774.prototype.om$core$IRender$render$arity$1 = ((function (map__13773,map__13773__$1,opts,close_chan){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.form({"onSubmit": ((function (this$__$1,map__13773,map__13773__$1,opts,close_chan){
return (function (e){var c__6596__auto___13850 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto___13850,this$__$1,map__13773,map__13773__$1,opts,close_chan){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto___13850,this$__$1,map__13773,map__13773__$1,opts,close_chan){
return (function (state_13785){var state_val_13786 = (state_13785[(1)]);if((state_val_13786 === (2)))
{var inst_13783 = (state_13785[(2)]);var state_13785__$1 = state_13785;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13785__$1,inst_13783);
} else
{if((state_val_13786 === (1)))
{var inst_13781 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"submit-chan","submit-chan",1225988800));var state_13785__$1 = state_13785;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13785__$1,(2),inst_13781,(1));
} else
{return null;
}
}
});})(c__6596__auto___13850,this$__$1,map__13773,map__13773__$1,opts,close_chan))
;return ((function (switch__6581__auto__,c__6596__auto___13850,this$__$1,map__13773,map__13773__$1,opts,close_chan){
return (function() {
var state_machine__6582__auto__ = null;
var state_machine__6582__auto____0 = (function (){var statearr_13790 = [null,null,null,null,null,null,null];(statearr_13790[(0)] = state_machine__6582__auto__);
(statearr_13790[(1)] = (1));
return statearr_13790;
});
var state_machine__6582__auto____1 = (function (state_13785){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_13785);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e13791){if((e13791 instanceof Object))
{var ex__6585__auto__ = e13791;var statearr_13792_13851 = state_13785;(statearr_13792_13851[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13785);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13791;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13852 = state_13785;
state_13785 = G__13852;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_13785){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_13785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto___13850,this$__$1,map__13773,map__13773__$1,opts,close_chan))
})();var state__6598__auto__ = (function (){var statearr_13793 = f__6597__auto__.call(null);(statearr_13793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto___13850);
return statearr_13793;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto___13850,this$__$1,map__13773,map__13773__$1,opts,close_chan))
);
e.preventDefault();
return false;
});})(this$__$1,map__13773,map__13773__$1,opts,close_chan))
},React.DOM.div({"className": "row"},React.DOM.div({"className": "large-12 columns"},React.DOM.h3(null,"Create and link a new post:"),sablono.interpreter.interpret.call(null,(function (){var temp__4126__auto__ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032));if(cljs.core.truth_(temp__4126__auto__))
{var error = temp__4126__auto__;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"alert-box warning radius"], null),error], null);
} else
{return null;
}
})()),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"posting","posting",919785887),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"alert-box info radius"], null),"Posting... Please wait"], null):null)),sablono.interpreter.input.call(null,{"type": "text", "placeholder": "optional title", "name": "post-title", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"title","title",636505583)), "onChange": ((function (this$__$1,map__13773,map__13773__$1,opts,close_chan){
return (function (p1__13693_SHARP_){return openthink.utils.handle_change.call(null,p1__13693_SHARP_,self__.owner,new cljs.core.Keyword(null,"title","title",636505583));
});})(this$__$1,map__13773,map__13773__$1,opts,close_chan))
}),sablono.interpreter.textarea.call(null,{"placeholder": "text", "name": "post-text", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697)), "onChange": ((function (this$__$1,map__13773,map__13773__$1,opts,close_chan){
return (function (p1__13694_SHARP_){return openthink.utils.handle_change.call(null,p1__13694_SHARP_,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697));
});})(this$__$1,map__13773,map__13773__$1,opts,close_chan))
}),React.DOM.button({"type": "submit", "className": "button tiny"},"create"))));
});})(map__13773,map__13773__$1,opts,close_chan))
;
openthink.views.modal.t13774.prototype.om$core$IWillMount$ = true;
openthink.views.modal.t13774.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__13773,map__13773__$1,opts,close_chan){
return (function (_){var self__ = this;
var ___$1 = this;var submit_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"submit-chan","submit-chan",1225988800));var c__6596__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto__,submit_chan,___$1,map__13773,map__13773__$1,opts,close_chan){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto__,submit_chan,___$1,map__13773,map__13773__$1,opts,close_chan){
return (function (state_13829){var state_val_13830 = (state_13829[(1)]);if((state_val_13830 === (7)))
{var inst_13797 = (state_13829[(2)]);var inst_13798 = cljs.core.println.call(null,"submitting post");var inst_13799 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"posting","posting",919785887));var inst_13800 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032),null);var inst_13801 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];var inst_13802 = ["title","text"];var inst_13803 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"title","title",636505583));var inst_13804 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697));var inst_13805 = [inst_13803,inst_13804];var inst_13806 = cljs.core.PersistentHashMap.fromArrays(inst_13802,inst_13805);var inst_13807 = cljs.core.PersistentVector.EMPTY_NODE;var inst_13808 = ["children"];var inst_13809 = (new cljs.core.PersistentVector(null,1,(5),inst_13807,inst_13808,null));var inst_13810 = openthink.views.modal.ask_for.call(null,inst_13809,inst_13806);var inst_13811 = new cljs.core.Keyword(null,"reply-to","reply-to",-145674792).cljs$core$IFn$_invoke$arity$1(self__.data);var state_13829__$1 = (function (){var statearr_13831 = state_13829;(statearr_13831[(7)] = inst_13801);
(statearr_13831[(8)] = inst_13797);
(statearr_13831[(9)] = inst_13798);
(statearr_13831[(10)] = inst_13799);
(statearr_13831[(11)] = inst_13800);
(statearr_13831[(12)] = inst_13810);
return statearr_13831;
})();if(cljs.core.truth_(inst_13811))
{var statearr_13832_13853 = state_13829__$1;(statearr_13832_13853[(1)] = (8));
} else
{var statearr_13833_13854 = state_13829__$1;(statearr_13833_13854[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13830 === (1)))
{var state_13829__$1 = state_13829;var statearr_13834_13855 = state_13829__$1;(statearr_13834_13855[(2)] = null);
(statearr_13834_13855[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13830 === (4)))
{var state_13829__$1 = state_13829;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13829__$1,(7),submit_chan);
} else
{if((state_val_13830 === (6)))
{var inst_13825 = (state_13829[(2)]);var state_13829__$1 = state_13829;var statearr_13835_13856 = state_13829__$1;(statearr_13835_13856[(2)] = inst_13825);
(statearr_13835_13856[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13830 === (3)))
{var inst_13827 = (state_13829[(2)]);var state_13829__$1 = state_13829;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13829__$1,inst_13827);
} else
{if((state_val_13830 === (2)))
{var state_13829__$1 = state_13829;var statearr_13836_13857 = state_13829__$1;(statearr_13836_13857[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13830 === (9)))
{var inst_13810 = (state_13829[(12)]);var state_13829__$1 = state_13829;var statearr_13838_13858 = state_13829__$1;(statearr_13838_13858[(2)] = inst_13810);
(statearr_13838_13858[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13830 === (5)))
{var state_13829__$1 = state_13829;var statearr_13839_13859 = state_13829__$1;(statearr_13839_13859[(2)] = null);
(statearr_13839_13859[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13830 === (10)))
{var inst_13801 = (state_13829[(7)]);var inst_13817 = (state_13829[(2)]);var inst_13818 = (function (){return ((function (inst_13801,inst_13817,state_val_13830,c__6596__auto__,submit_chan,___$1,map__13773,map__13773__$1,opts,close_chan){
return (function (resp){cljs.core.println.call(null,"submit-form returned");
cljs.core.println.call(null,resp);
var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);cljs.core.println.call(null,resp__$1);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795));
if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032)))
{return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(resp__$1));
} else
{om.core.transact_BANG_.call(null,self__.data,((function (resp__$1,inst_13801,inst_13817,state_val_13830,c__6596__auto__,submit_chan,___$1,map__13773,map__13773__$1,opts,close_chan){
return (function (p1__13692_SHARP_){return cljs.core.merge.call(null,p1__13692_SHARP_,resp__$1);
});})(resp__$1,inst_13801,inst_13817,state_val_13830,c__6596__auto__,submit_chan,___$1,map__13773,map__13773__$1,opts,close_chan))
);
return cljs.core.async.put_BANG_.call(null,self__.close_chan,(1));
}
});
;})(inst_13801,inst_13817,state_val_13830,c__6596__auto__,submit_chan,___$1,map__13773,map__13773__$1,opts,close_chan))
})();var inst_13819 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_13817,inst_13818];var inst_13820 = cljs.core.PersistentHashMap.fromArrays(inst_13801,inst_13819);var inst_13821 = ajax.core.POST.call(null,"/submit-post",inst_13820);var state_13829__$1 = (function (){var statearr_13840 = state_13829;(statearr_13840[(13)] = inst_13821);
return statearr_13840;
})();var statearr_13841_13860 = state_13829__$1;(statearr_13841_13860[(2)] = null);
(statearr_13841_13860[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13830 === (8)))
{var inst_13810 = (state_13829[(12)]);var inst_13813 = new cljs.core.Keyword(null,"reply-to","reply-to",-145674792).cljs$core$IFn$_invoke$arity$1(self__.data);var inst_13814 = cljs.core.assoc.call(null,inst_13810,"parent",inst_13813);var state_13829__$1 = state_13829;var statearr_13842_13861 = state_13829__$1;(statearr_13842_13861[(2)] = inst_13814);
(statearr_13842_13861[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6596__auto__,submit_chan,___$1,map__13773,map__13773__$1,opts,close_chan))
;return ((function (switch__6581__auto__,c__6596__auto__,submit_chan,___$1,map__13773,map__13773__$1,opts,close_chan){
return (function() {
var state_machine__6582__auto__ = null;
var state_machine__6582__auto____0 = (function (){var statearr_13846 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13846[(0)] = state_machine__6582__auto__);
(statearr_13846[(1)] = (1));
return statearr_13846;
});
var state_machine__6582__auto____1 = (function (state_13829){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_13829);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e13847){if((e13847 instanceof Object))
{var ex__6585__auto__ = e13847;var statearr_13848_13862 = state_13829;(statearr_13848_13862[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13829);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13847;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13863 = state_13829;
state_13829 = G__13863;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_13829){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_13829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto__,submit_chan,___$1,map__13773,map__13773__$1,opts,close_chan))
})();var state__6598__auto__ = (function (){var statearr_13849 = f__6597__auto__.call(null);(statearr_13849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto__);
return statearr_13849;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto__,submit_chan,___$1,map__13773,map__13773__$1,opts,close_chan))
);
return c__6596__auto__;
});})(map__13773,map__13773__$1,opts,close_chan))
;
openthink.views.modal.t13774.prototype.om$core$IInitState$ = true;
openthink.views.modal.t13774.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__13773,map__13773__$1,opts,close_chan){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"submit-chan","submit-chan",1225988800),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"text","text",-1790561697),"",new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795)], null);
});})(map__13773,map__13773__$1,opts,close_chan))
;
openthink.views.modal.t13774.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13773,map__13773__$1,opts,close_chan){
return (function (_13776){var self__ = this;
var _13776__$1 = this;return self__.meta13775;
});})(map__13773,map__13773__$1,opts,close_chan))
;
openthink.views.modal.t13774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13773,map__13773__$1,opts,close_chan){
return (function (_13776,meta13775__$1){var self__ = this;
var _13776__$1 = this;return (new openthink.views.modal.t13774(self__.close_chan,self__.opts,self__.map__13773,self__.p__13695,self__.owner,self__.data,self__.submit_form,meta13775__$1));
});})(map__13773,map__13773__$1,opts,close_chan))
;
openthink.views.modal.__GT_t13774 = ((function (map__13773,map__13773__$1,opts,close_chan){
return (function __GT_t13774(close_chan__$1,opts__$1,map__13773__$2,p__13695__$1,owner__$1,data__$1,submit_form__$1,meta13775){return (new openthink.views.modal.t13774(close_chan__$1,opts__$1,map__13773__$2,p__13695__$1,owner__$1,data__$1,submit_form__$1,meta13775));
});})(map__13773,map__13773__$1,opts,close_chan))
;
}
return (new openthink.views.modal.t13774(close_chan,opts,map__13773__$1,p__13695,owner,data,submit_form,null));
});
openthink.views.modal.link_form = (function link_form(data,owner,p__13867){var map__13933 = p__13867;var map__13933__$1 = ((cljs.core.seq_QMARK_.call(null,map__13933))?cljs.core.apply.call(null,cljs.core.hash_map,map__13933):map__13933);var opts = map__13933__$1;var close_chan = cljs.core.get.call(null,map__13933__$1,new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891));if(typeof openthink.views.modal.t13934 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.views.modal.t13934 = (function (close_chan,opts,map__13933,p__13867,owner,data,link_form,meta13935){
this.close_chan = close_chan;
this.opts = opts;
this.map__13933 = map__13933;
this.p__13867 = p__13867;
this.owner = owner;
this.data = data;
this.link_form = link_form;
this.meta13935 = meta13935;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.modal.t13934.cljs$lang$type = true;
openthink.views.modal.t13934.cljs$lang$ctorStr = "openthink.views.modal/t13934";
openthink.views.modal.t13934.cljs$lang$ctorPrWriter = ((function (map__13933,map__13933__$1,opts,close_chan){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.views.modal/t13934");
});})(map__13933,map__13933__$1,opts,close_chan))
;
openthink.views.modal.t13934.prototype.om$core$IRender$ = true;
openthink.views.modal.t13934.prototype.om$core$IRender$render$arity$1 = ((function (map__13933,map__13933__$1,opts,close_chan){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.form({"onSubmit": ((function (this$__$1,map__13933,map__13933__$1,opts,close_chan){
return (function (e){var c__6596__auto___13998 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto___13998,this$__$1,map__13933,map__13933__$1,opts,close_chan){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto___13998,this$__$1,map__13933,map__13933__$1,opts,close_chan){
return (function (state_13945){var state_val_13946 = (state_13945[(1)]);if((state_val_13946 === (2)))
{var inst_13943 = (state_13945[(2)]);var state_13945__$1 = state_13945;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13945__$1,inst_13943);
} else
{if((state_val_13946 === (1)))
{var inst_13941 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"submit-chan","submit-chan",1225988800));var state_13945__$1 = state_13945;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13945__$1,(2),inst_13941,(1));
} else
{return null;
}
}
});})(c__6596__auto___13998,this$__$1,map__13933,map__13933__$1,opts,close_chan))
;return ((function (switch__6581__auto__,c__6596__auto___13998,this$__$1,map__13933,map__13933__$1,opts,close_chan){
return (function() {
var state_machine__6582__auto__ = null;
var state_machine__6582__auto____0 = (function (){var statearr_13950 = [null,null,null,null,null,null,null];(statearr_13950[(0)] = state_machine__6582__auto__);
(statearr_13950[(1)] = (1));
return statearr_13950;
});
var state_machine__6582__auto____1 = (function (state_13945){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_13945);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e13951){if((e13951 instanceof Object))
{var ex__6585__auto__ = e13951;var statearr_13952_13999 = state_13945;(statearr_13952_13999[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13945);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13951;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14000 = state_13945;
state_13945 = G__14000;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_13945){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_13945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto___13998,this$__$1,map__13933,map__13933__$1,opts,close_chan))
})();var state__6598__auto__ = (function (){var statearr_13953 = f__6597__auto__.call(null);(statearr_13953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto___13998);
return statearr_13953;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto___13998,this$__$1,map__13933,map__13933__$1,opts,close_chan))
);
e.preventDefault();
return false;
});})(this$__$1,map__13933,map__13933__$1,opts,close_chan))
},React.DOM.div({"className": "row"},React.DOM.div({"className": "large-12 columns"},React.DOM.h3(null,"Link an existing post:"),sablono.interpreter.interpret.call(null,(function (){var temp__4126__auto__ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032));if(cljs.core.truth_(temp__4126__auto__))
{var error = temp__4126__auto__;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"alert-box warning radius"], null),error], null);
} else
{return null;
}
})()),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"posting","posting",919785887),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"alert-box info radius"], null),"Linking... Please wait"], null):null)),sablono.interpreter.input.call(null,{"type": "text", "placeholder": "URL or ID to a post", "name": "link-text", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"link","link",-1769163468)), "onChange": ((function (this$__$1,map__13933,map__13933__$1,opts,close_chan){
return (function (p1__13866_SHARP_){return openthink.utils.handle_change.call(null,p1__13866_SHARP_,self__.owner,new cljs.core.Keyword(null,"link","link",-1769163468));
});})(this$__$1,map__13933,map__13933__$1,opts,close_chan))
}),React.DOM.button({"type": "submit", "className": "button tiny"},"link"))));
});})(map__13933,map__13933__$1,opts,close_chan))
;
openthink.views.modal.t13934.prototype.om$core$IWillMount$ = true;
openthink.views.modal.t13934.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__13933,map__13933__$1,opts,close_chan){
return (function (_){var self__ = this;
var ___$1 = this;var submit_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"submit-chan","submit-chan",1225988800));var c__6596__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto__,submit_chan,___$1,map__13933,map__13933__$1,opts,close_chan){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto__,submit_chan,___$1,map__13933,map__13933__$1,opts,close_chan){
return (function (state_13982){var state_val_13983 = (state_13982[(1)]);if((state_val_13983 === (7)))
{var inst_13957 = (state_13982[(2)]);var inst_13958 = cljs.core.println.call(null,"linking post");var inst_13959 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"posting","posting",919785887));var inst_13960 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032),null);var inst_13961 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];var inst_13962 = cljs.core.PersistentVector.EMPTY_NODE;var inst_13963 = ["children"];var inst_13964 = (new cljs.core.PersistentVector(null,1,(5),inst_13962,inst_13963,null));var inst_13965 = ["child-text","parent"];var inst_13966 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"link","link",-1769163468));var inst_13967 = new cljs.core.Keyword(null,"current_post","current_post",2072811381).cljs$core$IFn$_invoke$arity$1(self__.data);var inst_13968 = [inst_13966,inst_13967];var inst_13969 = cljs.core.PersistentHashMap.fromArrays(inst_13965,inst_13968);var inst_13970 = openthink.views.modal.ask_for.call(null,inst_13964,inst_13969);var inst_13971 = (function (){return ((function (inst_13957,inst_13958,inst_13959,inst_13960,inst_13961,inst_13962,inst_13963,inst_13964,inst_13965,inst_13966,inst_13967,inst_13968,inst_13969,inst_13970,state_val_13983,c__6596__auto__,submit_chan,___$1,map__13933,map__13933__$1,opts,close_chan){
return (function (resp){cljs.core.println.call(null,"link-form returned");
cljs.core.println.call(null,resp);
var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);cljs.core.println.call(null,resp__$1);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795));
if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032)))
{return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(resp__$1));
} else
{om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"rels","rels",1770187185),((function (resp__$1,inst_13957,inst_13958,inst_13959,inst_13960,inst_13961,inst_13962,inst_13963,inst_13964,inst_13965,inst_13966,inst_13967,inst_13968,inst_13969,inst_13970,state_val_13983,c__6596__auto__,submit_chan,___$1,map__13933,map__13933__$1,opts,close_chan){
return (function (p1__13864_SHARP_){return cljs.core.merge.call(null,p1__13864_SHARP_,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(resp__$1));
});})(resp__$1,inst_13957,inst_13958,inst_13959,inst_13960,inst_13961,inst_13962,inst_13963,inst_13964,inst_13965,inst_13966,inst_13967,inst_13968,inst_13969,inst_13970,state_val_13983,c__6596__auto__,submit_chan,___$1,map__13933,map__13933__$1,opts,close_chan))
);
om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"posts","posts",760043164),((function (resp__$1,inst_13957,inst_13958,inst_13959,inst_13960,inst_13961,inst_13962,inst_13963,inst_13964,inst_13965,inst_13966,inst_13967,inst_13968,inst_13969,inst_13970,state_val_13983,c__6596__auto__,submit_chan,___$1,map__13933,map__13933__$1,opts,close_chan){
return (function (p1__13865_SHARP_){return cljs.core.merge.call(null,p1__13865_SHARP_,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(resp__$1));
});})(resp__$1,inst_13957,inst_13958,inst_13959,inst_13960,inst_13961,inst_13962,inst_13963,inst_13964,inst_13965,inst_13966,inst_13967,inst_13968,inst_13969,inst_13970,state_val_13983,c__6596__auto__,submit_chan,___$1,map__13933,map__13933__$1,opts,close_chan))
);
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"link_ids","link_ids",-791411950),new cljs.core.Keyword(null,"new_rel_ids","new_rel_ids",701283960).cljs$core$IFn$_invoke$arity$1(resp__$1));
return cljs.core.async.put_BANG_.call(null,self__.close_chan,(1));
}
});
;})(inst_13957,inst_13958,inst_13959,inst_13960,inst_13961,inst_13962,inst_13963,inst_13964,inst_13965,inst_13966,inst_13967,inst_13968,inst_13969,inst_13970,state_val_13983,c__6596__auto__,submit_chan,___$1,map__13933,map__13933__$1,opts,close_chan))
})();var inst_13972 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_13970,inst_13971];var inst_13973 = cljs.core.PersistentHashMap.fromArrays(inst_13961,inst_13972);var inst_13974 = ajax.core.POST.call(null,"/link-post",inst_13973);var state_13982__$1 = (function (){var statearr_13984 = state_13982;(statearr_13984[(7)] = inst_13960);
(statearr_13984[(8)] = inst_13957);
(statearr_13984[(9)] = inst_13974);
(statearr_13984[(10)] = inst_13958);
(statearr_13984[(11)] = inst_13959);
return statearr_13984;
})();var statearr_13985_14001 = state_13982__$1;(statearr_13985_14001[(2)] = null);
(statearr_13985_14001[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13983 === (6)))
{var inst_13978 = (state_13982[(2)]);var state_13982__$1 = state_13982;var statearr_13986_14002 = state_13982__$1;(statearr_13986_14002[(2)] = inst_13978);
(statearr_13986_14002[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13983 === (5)))
{var state_13982__$1 = state_13982;var statearr_13987_14003 = state_13982__$1;(statearr_13987_14003[(2)] = null);
(statearr_13987_14003[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13983 === (4)))
{var state_13982__$1 = state_13982;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13982__$1,(7),submit_chan);
} else
{if((state_val_13983 === (3)))
{var inst_13980 = (state_13982[(2)]);var state_13982__$1 = state_13982;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13982__$1,inst_13980);
} else
{if((state_val_13983 === (2)))
{var state_13982__$1 = state_13982;var statearr_13988_14004 = state_13982__$1;(statearr_13988_14004[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13983 === (1)))
{var state_13982__$1 = state_13982;var statearr_13990_14005 = state_13982__$1;(statearr_13990_14005[(2)] = null);
(statearr_13990_14005[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6596__auto__,submit_chan,___$1,map__13933,map__13933__$1,opts,close_chan))
;return ((function (switch__6581__auto__,c__6596__auto__,submit_chan,___$1,map__13933,map__13933__$1,opts,close_chan){
return (function() {
var state_machine__6582__auto__ = null;
var state_machine__6582__auto____0 = (function (){var statearr_13994 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13994[(0)] = state_machine__6582__auto__);
(statearr_13994[(1)] = (1));
return statearr_13994;
});
var state_machine__6582__auto____1 = (function (state_13982){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_13982);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e13995){if((e13995 instanceof Object))
{var ex__6585__auto__ = e13995;var statearr_13996_14006 = state_13982;(statearr_13996_14006[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13982);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13995;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14007 = state_13982;
state_13982 = G__14007;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_13982){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_13982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto__,submit_chan,___$1,map__13933,map__13933__$1,opts,close_chan))
})();var state__6598__auto__ = (function (){var statearr_13997 = f__6597__auto__.call(null);(statearr_13997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto__);
return statearr_13997;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto__,submit_chan,___$1,map__13933,map__13933__$1,opts,close_chan))
);
return c__6596__auto__;
});})(map__13933,map__13933__$1,opts,close_chan))
;
openthink.views.modal.t13934.prototype.om$core$IInitState$ = true;
openthink.views.modal.t13934.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__13933,map__13933__$1,opts,close_chan){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"submit-chan","submit-chan",1225988800),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"link","link",-1769163468),"",new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795)], null);
});})(map__13933,map__13933__$1,opts,close_chan))
;
openthink.views.modal.t13934.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13933,map__13933__$1,opts,close_chan){
return (function (_13936){var self__ = this;
var _13936__$1 = this;return self__.meta13935;
});})(map__13933,map__13933__$1,opts,close_chan))
;
openthink.views.modal.t13934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13933,map__13933__$1,opts,close_chan){
return (function (_13936,meta13935__$1){var self__ = this;
var _13936__$1 = this;return (new openthink.views.modal.t13934(self__.close_chan,self__.opts,self__.map__13933,self__.p__13867,self__.owner,self__.data,self__.link_form,meta13935__$1));
});})(map__13933,map__13933__$1,opts,close_chan))
;
openthink.views.modal.__GT_t13934 = ((function (map__13933,map__13933__$1,opts,close_chan){
return (function __GT_t13934(close_chan__$1,opts__$1,map__13933__$2,p__13867__$1,owner__$1,data__$1,link_form__$1,meta13935){return (new openthink.views.modal.t13934(close_chan__$1,opts__$1,map__13933__$2,p__13867__$1,owner__$1,data__$1,link_form__$1,meta13935));
});})(map__13933,map__13933__$1,opts,close_chan))
;
}
return (new openthink.views.modal.t13934(close_chan,opts,map__13933__$1,p__13867,owner,data,link_form,null));
});
openthink.views.modal.post_reply_section = (function post_reply_section(data,owner,opts){if(typeof openthink.views.modal.t14011 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.views.modal.t14011 = (function (opts,owner,data,post_reply_section,meta14012){
this.opts = opts;
this.owner = owner;
this.data = data;
this.post_reply_section = post_reply_section;
this.meta14012 = meta14012;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.modal.t14011.cljs$lang$type = true;
openthink.views.modal.t14011.cljs$lang$ctorStr = "openthink.views.modal/t14011";
openthink.views.modal.t14011.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.views.modal/t14011");
});
openthink.views.modal.t14011.prototype.om$core$IRender$ = true;
openthink.views.modal.t14011.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return sablono.interpreter.interpret.call(null,((cljs.core.not.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(self__.data)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You must be logged in to submit a post. ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (this$__$1){
return (function (){return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.Keyword(null,"register","register",1968522516));
});})(this$__$1))
], null),"Register now"], null)], null):((cljs.core.not.call(null,new cljs.core.Keyword(null,"reply-to","reply-to",-145674792).cljs$core$IFn$_invoke$arity$1(self__.data)))?om.core.build.call(null,openthink.views.modal.submit_form,self__.data):(function (){var reply_type = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"reply-type","reply-type",1565507820));return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),""], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Linking to post: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(openthink.cursors.current_post.call(null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (reply_type,this$__$1){
return (function (){return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"reply-to","reply-to",-145674792),null);
});})(reply_type,this$__$1))
], null)," (cancel)"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dl","dl",-2140151713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"sub-nav"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dt","dt",-368444759),"How will you reply?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),((cljs.core._EQ_.call(null,reply_type,new cljs.core.Keyword(null,"post","post",269697687)))?"active":"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (reply_type,this$__$1){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"reply-type","reply-type",1565507820),new cljs.core.Keyword(null,"post","post",269697687));
});})(reply_type,this$__$1))
], null),"Create New Post"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),((cljs.core._EQ_.call(null,reply_type,new cljs.core.Keyword(null,"link","link",-1769163468)))?"active":"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (reply_type,this$__$1){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"reply-type","reply-type",1565507820),new cljs.core.Keyword(null,"link","link",-1769163468));
});})(reply_type,this$__$1))
], null),"Link Existing Post"], null)], null)], null),(function (){var opts__$2 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891))], null)], null);if(cljs.core._EQ_.call(null,reply_type,new cljs.core.Keyword(null,"post","post",269697687)))
{return om.core.build.call(null,openthink.views.modal.submit_form,self__.data,opts__$2);
} else
{if(cljs.core._EQ_.call(null,reply_type,new cljs.core.Keyword(null,"link","link",-1769163468)))
{return om.core.build.call(null,openthink.views.modal.link_form,self__.data,opts__$2);
} else
{return null;
}
}
})()], null);
})())));
});
openthink.views.modal.t14011.prototype.om$core$IInitState$ = true;
openthink.views.modal.t14011.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reply-type","reply-type",1565507820),new cljs.core.Keyword(null,"post","post",269697687)], null);
});
openthink.views.modal.t14011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14013){var self__ = this;
var _14013__$1 = this;return self__.meta14012;
});
openthink.views.modal.t14011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14013,meta14012__$1){var self__ = this;
var _14013__$1 = this;return (new openthink.views.modal.t14011(self__.opts,self__.owner,self__.data,self__.post_reply_section,meta14012__$1));
});
openthink.views.modal.__GT_t14011 = (function __GT_t14011(opts__$1,owner__$1,data__$1,post_reply_section__$1,meta14012){return (new openthink.views.modal.t14011(opts__$1,owner__$1,data__$1,post_reply_section__$1,meta14012));
});
}
return (new openthink.views.modal.t14011(opts,owner,data,post_reply_section,null));
});
openthink.views.modal.basic_modal = (function basic_modal(data,owner){if(typeof openthink.views.modal.t14019 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.views.modal.t14019 = (function (owner,data,basic_modal,meta14020){
this.owner = owner;
this.data = data;
this.basic_modal = basic_modal;
this.meta14020 = meta14020;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.modal.t14019.cljs$lang$type = true;
openthink.views.modal.t14019.cljs$lang$ctorStr = "openthink.views.modal/t14019";
openthink.views.modal.t14019.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.views.modal/t14019");
});
openthink.views.modal.t14019.prototype.om$core$IRender$ = true;
openthink.views.modal.t14019.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.h2(null,"some modal txt");
});
openthink.views.modal.t14019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14021){var self__ = this;
var _14021__$1 = this;return self__.meta14020;
});
openthink.views.modal.t14019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14021,meta14020__$1){var self__ = this;
var _14021__$1 = this;return (new openthink.views.modal.t14019(self__.owner,self__.data,self__.basic_modal,meta14020__$1));
});
openthink.views.modal.__GT_t14019 = (function __GT_t14019(owner__$1,data__$1,basic_modal__$1,meta14020){return (new openthink.views.modal.t14019(owner__$1,data__$1,basic_modal__$1,meta14020));
});
}
return (new openthink.views.modal.t14019(owner,data,basic_modal,null));
});
openthink.views.modal.modal_map = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"basic","basic",1043717368),openthink.views.modal.basic_modal,new cljs.core.Keyword(null,"new-post","new-post",-1808203791),openthink.views.modal.post_reply_section,new cljs.core.Keyword(null,"register","register",1968522516),openthink.views.auth.register_form], null);
openthink.views.modal.close_modal = (function close_modal(){cljs.core.println.call(null,"modal should be closing");
return cljs.core.swap_BANG_.call(null,openthink.state.app_state,cljs.core.dissoc,new cljs.core.Keyword(null,"modal","modal",-1031880850));
});
/**
* reusable modal component.
* modal-view is the component that should be rendered as a modal
*/
openthink.views.modal.modal = (function modal(cursor,owner,p__14024){var map__14069 = p__14024;var map__14069__$1 = ((cljs.core.seq_QMARK_.call(null,map__14069))?cljs.core.apply.call(null,cljs.core.hash_map,map__14069):map__14069);var modal_view = cljs.core.get.call(null,map__14069__$1,new cljs.core.Keyword(null,"modal-view","modal-view",-1572274108));if(typeof openthink.views.modal.t14070 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.views.modal.t14070 = (function (modal_view,map__14069,p__14024,owner,cursor,modal,meta14071){
this.modal_view = modal_view;
this.map__14069 = map__14069;
this.p__14024 = p__14024;
this.owner = owner;
this.cursor = cursor;
this.modal = modal;
this.meta14071 = meta14071;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.modal.t14070.cljs$lang$type = true;
openthink.views.modal.t14070.cljs$lang$ctorStr = "openthink.views.modal/t14070";
openthink.views.modal.t14070.cljs$lang$ctorPrWriter = ((function (map__14069,map__14069__$1,modal_view){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.views.modal/t14070");
});})(map__14069,map__14069__$1,modal_view))
;
openthink.views.modal.t14070.prototype.om$core$IRender$ = true;
openthink.views.modal.t14070.prototype.om$core$IRender$render$arity$1 = ((function (map__14069,map__14069__$1,modal_view){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"className": "reveal-modal-bg", "style": cljs.core.clj__GT_js.call(null,{"display": "block"})}),React.DOM.div({"id": "myModal", "className": "reveal-modal open", "style": cljs.core.clj__GT_js.call(null,{"opacity": (1), "top": "88px", "display": "block", "visibility": "visible"})},sablono.interpreter.interpret.call(null,om.core.build.call(null,self__.modal_view,self__.cursor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891))], null)], null)))));
});})(map__14069,map__14069__$1,modal_view))
;
openthink.views.modal.t14070.prototype.om$core$IDidMount$ = true;
openthink.views.modal.t14070.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__14069,map__14069__$1,modal_view){
return (function (_){var self__ = this;
var ___$1 = this;var outside_clicks = openthink.utils.listen.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("reveal-modal-bg"))[(0)]),"click");var c__6596__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto__,outside_clicks,___$1,map__14069,map__14069__$1,modal_view){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto__,outside_clicks,___$1,map__14069,map__14069__$1,modal_view){
return (function (state_14082){var state_val_14083 = (state_14082[(1)]);if((state_val_14083 === (4)))
{var inst_14077 = (state_14082[(2)]);var inst_14078 = openthink.views.modal.close_modal.call(null);var state_14082__$1 = (function (){var statearr_14084 = state_14082;(statearr_14084[(7)] = inst_14077);
return statearr_14084;
})();var statearr_14085_14113 = state_14082__$1;(statearr_14085_14113[(2)] = inst_14078);
(statearr_14085_14113[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14083 === (3)))
{var inst_14080 = (state_14082[(2)]);var state_14082__$1 = state_14082;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14082__$1,inst_14080);
} else
{if((state_val_14083 === (2)))
{var state_14082__$1 = state_14082;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14082__$1,(4),outside_clicks);
} else
{if((state_val_14083 === (1)))
{var state_14082__$1 = state_14082;var statearr_14086_14114 = state_14082__$1;(statearr_14086_14114[(2)] = null);
(statearr_14086_14114[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6596__auto__,outside_clicks,___$1,map__14069,map__14069__$1,modal_view))
;return ((function (switch__6581__auto__,c__6596__auto__,outside_clicks,___$1,map__14069,map__14069__$1,modal_view){
return (function() {
var state_machine__6582__auto__ = null;
var state_machine__6582__auto____0 = (function (){var statearr_14090 = [null,null,null,null,null,null,null,null];(statearr_14090[(0)] = state_machine__6582__auto__);
(statearr_14090[(1)] = (1));
return statearr_14090;
});
var state_machine__6582__auto____1 = (function (state_14082){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_14082);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e14091){if((e14091 instanceof Object))
{var ex__6585__auto__ = e14091;var statearr_14092_14115 = state_14082;(statearr_14092_14115[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14082);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14091;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14116 = state_14082;
state_14082 = G__14116;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_14082){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_14082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto__,outside_clicks,___$1,map__14069,map__14069__$1,modal_view))
})();var state__6598__auto__ = (function (){var statearr_14093 = f__6597__auto__.call(null);(statearr_14093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto__);
return statearr_14093;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto__,outside_clicks,___$1,map__14069,map__14069__$1,modal_view))
);
return c__6596__auto__;
});})(map__14069,map__14069__$1,modal_view))
;
openthink.views.modal.t14070.prototype.om$core$IWillMount$ = true;
openthink.views.modal.t14070.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__14069,map__14069__$1,modal_view){
return (function (_){var self__ = this;
var ___$1 = this;var close_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891));var c__6596__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto__,close_chan,___$1,map__14069,map__14069__$1,modal_view){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto__,close_chan,___$1,map__14069,map__14069__$1,modal_view){
return (function (state_14101){var state_val_14102 = (state_14101[(1)]);if((state_val_14102 === (4)))
{var inst_14096 = (state_14101[(2)]);var inst_14097 = openthink.views.modal.close_modal.call(null);var state_14101__$1 = (function (){var statearr_14103 = state_14101;(statearr_14103[(7)] = inst_14096);
return statearr_14103;
})();var statearr_14104_14117 = state_14101__$1;(statearr_14104_14117[(2)] = inst_14097);
(statearr_14104_14117[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14102 === (3)))
{var inst_14099 = (state_14101[(2)]);var state_14101__$1 = state_14101;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14101__$1,inst_14099);
} else
{if((state_val_14102 === (2)))
{var state_14101__$1 = state_14101;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14101__$1,(4),close_chan);
} else
{if((state_val_14102 === (1)))
{var state_14101__$1 = state_14101;var statearr_14105_14118 = state_14101__$1;(statearr_14105_14118[(2)] = null);
(statearr_14105_14118[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6596__auto__,close_chan,___$1,map__14069,map__14069__$1,modal_view))
;return ((function (switch__6581__auto__,c__6596__auto__,close_chan,___$1,map__14069,map__14069__$1,modal_view){
return (function() {
var state_machine__6582__auto__ = null;
var state_machine__6582__auto____0 = (function (){var statearr_14109 = [null,null,null,null,null,null,null,null];(statearr_14109[(0)] = state_machine__6582__auto__);
(statearr_14109[(1)] = (1));
return statearr_14109;
});
var state_machine__6582__auto____1 = (function (state_14101){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_14101);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e14110){if((e14110 instanceof Object))
{var ex__6585__auto__ = e14110;var statearr_14111_14119 = state_14101;(statearr_14111_14119[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14101);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14110;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14120 = state_14101;
state_14101 = G__14120;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_14101){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_14101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto__,close_chan,___$1,map__14069,map__14069__$1,modal_view))
})();var state__6598__auto__ = (function (){var statearr_14112 = f__6597__auto__.call(null);(statearr_14112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto__);
return statearr_14112;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto__,close_chan,___$1,map__14069,map__14069__$1,modal_view))
);
return c__6596__auto__;
});})(map__14069,map__14069__$1,modal_view))
;
openthink.views.modal.t14070.prototype.om$core$IInitState$ = true;
openthink.views.modal.t14070.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__14069,map__14069__$1,modal_view){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891),cljs.core.async.chan.call(null)], null);
});})(map__14069,map__14069__$1,modal_view))
;
openthink.views.modal.t14070.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__14069,map__14069__$1,modal_view){
return (function (_14072){var self__ = this;
var _14072__$1 = this;return self__.meta14071;
});})(map__14069,map__14069__$1,modal_view))
;
openthink.views.modal.t14070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__14069,map__14069__$1,modal_view){
return (function (_14072,meta14071__$1){var self__ = this;
var _14072__$1 = this;return (new openthink.views.modal.t14070(self__.modal_view,self__.map__14069,self__.p__14024,self__.owner,self__.cursor,self__.modal,meta14071__$1));
});})(map__14069,map__14069__$1,modal_view))
;
openthink.views.modal.__GT_t14070 = ((function (map__14069,map__14069__$1,modal_view){
return (function __GT_t14070(modal_view__$1,map__14069__$2,p__14024__$1,owner__$1,cursor__$1,modal__$1,meta14071){return (new openthink.views.modal.t14070(modal_view__$1,map__14069__$2,p__14024__$1,owner__$1,cursor__$1,modal__$1,meta14071));
});})(map__14069,map__14069__$1,modal_view))
;
}
return (new openthink.views.modal.t14070(modal_view,map__14069__$1,p__14024,owner,cursor,modal,null));
});

//# sourceMappingURL=modal.js.map