// Compiled by ClojureScript 0.0-2371
goog.provide('openthink.views.activity');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('openthink.cursors');
goog.require('sablono.core');
goog.require('openthink.utils');
goog.require('openthink.utils');
goog.require('om.core');
goog.require('openthink.cursors');
goog.require('om.core');
openthink.views.activity.ACTIONS_PER_PAGE = (20);
openthink.views.activity.comment_action = (function comment_action(comment,owner){if(typeof openthink.views.activity.t14137 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.views.activity.t14137 = (function (owner,comment,comment_action,meta14138){
this.owner = owner;
this.comment = comment;
this.comment_action = comment_action;
this.meta14138 = meta14138;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.activity.t14137.cljs$lang$type = true;
openthink.views.activity.t14137.cljs$lang$ctorStr = "openthink.views.activity/t14137";
openthink.views.activity.t14137.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.views.activity/t14137");
});
openthink.views.activity.t14137.prototype.om$core$IRender$ = true;
openthink.views.activity.t14137.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "comment action", "id": ("comment-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.comment)))},React.DOM.hr(null),React.DOM.span({"className": "comment-userbit"},React.DOM.strong({"className": "comment-user"},sablono.interpreter.interpret.call(null,cljs.core.get_in.call(null,self__.comment,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"username","username",1605666410)], null)))),React.DOM.span({"className": "comment-datebit"},sablono.interpreter.interpret.call(null,(" | "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(openthink.utils.date.call(null,new cljs.core.Keyword(null,"time_posted","time_posted",-32907602).cljs$core$IFn$_invoke$arity$1(self__.comment))))))),React.DOM.div({"className": "comment-body"},sablono.interpreter.interpret.call(null,openthink.utils.render_text.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(self__.comment)))));
});
openthink.views.activity.t14137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14139){var self__ = this;
var _14139__$1 = this;return self__.meta14138;
});
openthink.views.activity.t14137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14139,meta14138__$1){var self__ = this;
var _14139__$1 = this;return (new openthink.views.activity.t14137(self__.owner,self__.comment,self__.comment_action,meta14138__$1));
});
openthink.views.activity.__GT_t14137 = (function __GT_t14137(owner__$1,comment__$1,comment_action__$1,meta14138){return (new openthink.views.activity.t14137(owner__$1,comment__$1,comment_action__$1,meta14138));
});
}
return (new openthink.views.activity.t14137(owner,comment,comment_action,null));
});
openthink.views.activity.link_action = (function link_action(rel,owner){if(typeof openthink.views.activity.t14147 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.views.activity.t14147 = (function (owner,rel,link_action,meta14148){
this.owner = owner;
this.rel = rel;
this.link_action = link_action;
this.meta14148 = meta14148;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.activity.t14147.cljs$lang$type = true;
openthink.views.activity.t14147.cljs$lang$ctorStr = "openthink.views.activity/t14147";
openthink.views.activity.t14147.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.views.activity/t14147");
});
openthink.views.activity.t14147.prototype.om$core$IRender$ = true;
openthink.views.activity.t14147.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "link action", "id": ("link-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.rel)))},React.DOM.hr(null),React.DOM.strong({"className": "link-action-user"},sablono.interpreter.interpret.call(null,cljs.core.get_in.call(null,self__.rel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linked_by","linked_by",-1836719993),new cljs.core.Keyword(null,"username","username",1605666410)], null))))," linked post ",sablono.interpreter.interpret.call(null,(function (){var post = openthink.cursors.post_from_rel.call(null,self__.rel);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("/post/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(post)))], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(post)], null);
})()),React.DOM.span({"className": "link-action-datebit"},sablono.interpreter.interpret.call(null,(" at "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(openthink.utils.date.call(null,new cljs.core.Keyword(null,"time_linked","time_linked",1045859207).cljs$core$IFn$_invoke$arity$1(self__.rel)))))));
});
openthink.views.activity.t14147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14149){var self__ = this;
var _14149__$1 = this;return self__.meta14148;
});
openthink.views.activity.t14147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14149,meta14148__$1){var self__ = this;
var _14149__$1 = this;return (new openthink.views.activity.t14147(self__.owner,self__.rel,self__.link_action,meta14148__$1));
});
openthink.views.activity.__GT_t14147 = (function __GT_t14147(owner__$1,rel__$1,link_action__$1,meta14148){return (new openthink.views.activity.t14147(owner__$1,rel__$1,link_action__$1,meta14148));
});
}
return (new openthink.views.activity.t14147(owner,rel,link_action,null));
});
openthink.views.activity.comment_form = (function comment_form(data,owner){if(typeof openthink.views.activity.t14211 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.views.activity.t14211 = (function (owner,data,comment_form,meta14212){
this.owner = owner;
this.data = data;
this.comment_form = comment_form;
this.meta14212 = meta14212;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.activity.t14211.cljs$lang$type = true;
openthink.views.activity.t14211.cljs$lang$ctorStr = "openthink.views.activity/t14211";
openthink.views.activity.t14211.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.views.activity/t14211");
});
openthink.views.activity.t14211.prototype.om$core$IRender$ = true;
openthink.views.activity.t14211.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.form({"onSubmit": ((function (this$__$1){
return (function (e){var c__6596__auto___14268 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto___14268,this$__$1){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto___14268,this$__$1){
return (function (state_14220){var state_val_14221 = (state_14220[(1)]);if((state_val_14221 === (2)))
{var inst_14218 = (state_14220[(2)]);var state_14220__$1 = state_14220;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14220__$1,inst_14218);
} else
{if((state_val_14221 === (1)))
{var inst_14216 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"comment-chan","comment-chan",-1616079298));var state_14220__$1 = state_14220;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14220__$1,(2),inst_14216,(1));
} else
{return null;
}
}
});})(c__6596__auto___14268,this$__$1))
;return ((function (switch__6581__auto__,c__6596__auto___14268,this$__$1){
return (function() {
var state_machine__6582__auto__ = null;
var state_machine__6582__auto____0 = (function (){var statearr_14225 = [null,null,null,null,null,null,null];(statearr_14225[(0)] = state_machine__6582__auto__);
(statearr_14225[(1)] = (1));
return statearr_14225;
});
var state_machine__6582__auto____1 = (function (state_14220){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_14220);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e14226){if((e14226 instanceof Object))
{var ex__6585__auto__ = e14226;var statearr_14227_14269 = state_14220;(statearr_14227_14269[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14220);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14226;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14270 = state_14220;
state_14220 = G__14270;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_14220){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_14220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto___14268,this$__$1))
})();var state__6598__auto__ = (function (){var statearr_14228 = f__6597__auto__.call(null);(statearr_14228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto___14268);
return statearr_14228;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto___14268,this$__$1))
);
e.preventDefault();
return false;
});})(this$__$1))
},React.DOM.div({"className": "row"},React.DOM.div({"className": "large-11 columns"},sablono.interpreter.textarea.call(null,{"placeholder": "Post a comment", "name": "comment-body", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"body","body",-2049205669)), "onChange": ((function (this$__$1){
return (function (p1__14153_SHARP_){return openthink.utils.handle_change.call(null,p1__14153_SHARP_,self__.owner,new cljs.core.Keyword(null,"body","body",-2049205669));
});})(this$__$1))
}),React.DOM.button({"type": "submit", "className": "button tiny"},"comment"))));
});
openthink.views.activity.t14211.prototype.om$core$IWillMount$ = true;
openthink.views.activity.t14211.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var comment_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"comment-chan","comment-chan",-1616079298));var c__6596__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto__,comment_chan,___$1){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto__,comment_chan,___$1){
return (function (state_14252){var state_val_14253 = (state_14252[(1)]);if((state_val_14253 === (7)))
{var inst_14232 = (state_14252[(2)]);var inst_14233 = cljs.core.println.call(null,"making comment");var inst_14234 = new cljs.core.Keyword(null,"current_post","current_post",2072811381).cljs$core$IFn$_invoke$arity$1(self__.data);var inst_14235 = ("/post/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14234)+"/comment");var inst_14236 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];var inst_14237 = ["body"];var inst_14238 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"body","body",-2049205669));var inst_14239 = [inst_14238];var inst_14240 = cljs.core.PersistentHashMap.fromArrays(inst_14237,inst_14239);var inst_14241 = (function (){return ((function (inst_14232,inst_14233,inst_14234,inst_14235,inst_14236,inst_14237,inst_14238,inst_14239,inst_14240,state_val_14253,c__6596__auto__,comment_chan,___$1){
return (function (resp){cljs.core.println.call(null,"comment-form returned");
cljs.core.println.call(null,resp);
var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032)))
{return null;
} else
{return om.core.transact_BANG_.call(null,self__.data,((function (resp__$1,inst_14232,inst_14233,inst_14234,inst_14235,inst_14236,inst_14237,inst_14238,inst_14239,inst_14240,state_val_14253,c__6596__auto__,comment_chan,___$1){
return (function (p1__14152_SHARP_){return cljs.core.merge.call(null,p1__14152_SHARP_,resp__$1);
});})(resp__$1,inst_14232,inst_14233,inst_14234,inst_14235,inst_14236,inst_14237,inst_14238,inst_14239,inst_14240,state_val_14253,c__6596__auto__,comment_chan,___$1))
);
}
});
;})(inst_14232,inst_14233,inst_14234,inst_14235,inst_14236,inst_14237,inst_14238,inst_14239,inst_14240,state_val_14253,c__6596__auto__,comment_chan,___$1))
})();var inst_14242 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_14240,inst_14241];var inst_14243 = cljs.core.PersistentHashMap.fromArrays(inst_14236,inst_14242);var inst_14244 = ajax.core.POST.call(null,inst_14235,inst_14243);var state_14252__$1 = (function (){var statearr_14254 = state_14252;(statearr_14254[(7)] = inst_14232);
(statearr_14254[(8)] = inst_14244);
(statearr_14254[(9)] = inst_14233);
return statearr_14254;
})();var statearr_14255_14271 = state_14252__$1;(statearr_14255_14271[(2)] = null);
(statearr_14255_14271[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14253 === (6)))
{var inst_14248 = (state_14252[(2)]);var state_14252__$1 = state_14252;var statearr_14256_14272 = state_14252__$1;(statearr_14256_14272[(2)] = inst_14248);
(statearr_14256_14272[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14253 === (5)))
{var state_14252__$1 = state_14252;var statearr_14257_14273 = state_14252__$1;(statearr_14257_14273[(2)] = null);
(statearr_14257_14273[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14253 === (4)))
{var state_14252__$1 = state_14252;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14252__$1,(7),comment_chan);
} else
{if((state_val_14253 === (3)))
{var inst_14250 = (state_14252[(2)]);var state_14252__$1 = state_14252;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14252__$1,inst_14250);
} else
{if((state_val_14253 === (2)))
{var state_14252__$1 = state_14252;var statearr_14258_14274 = state_14252__$1;(statearr_14258_14274[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14253 === (1)))
{var state_14252__$1 = state_14252;var statearr_14260_14275 = state_14252__$1;(statearr_14260_14275[(2)] = null);
(statearr_14260_14275[(1)] = (2));
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
});})(c__6596__auto__,comment_chan,___$1))
;return ((function (switch__6581__auto__,c__6596__auto__,comment_chan,___$1){
return (function() {
var state_machine__6582__auto__ = null;
var state_machine__6582__auto____0 = (function (){var statearr_14264 = [null,null,null,null,null,null,null,null,null,null];(statearr_14264[(0)] = state_machine__6582__auto__);
(statearr_14264[(1)] = (1));
return statearr_14264;
});
var state_machine__6582__auto____1 = (function (state_14252){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_14252);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e14265){if((e14265 instanceof Object))
{var ex__6585__auto__ = e14265;var statearr_14266_14276 = state_14252;(statearr_14266_14276[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14252);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14265;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14277 = state_14252;
state_14252 = G__14277;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_14252){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_14252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto__,comment_chan,___$1))
})();var state__6598__auto__ = (function (){var statearr_14267 = f__6597__auto__.call(null);(statearr_14267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto__);
return statearr_14267;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto__,comment_chan,___$1))
);
return c__6596__auto__;
});
openthink.views.activity.t14211.prototype.om$core$IInitState$ = true;
openthink.views.activity.t14211.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comment-chan","comment-chan",-1616079298),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"body","body",-2049205669),""], null);
});
openthink.views.activity.t14211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14213){var self__ = this;
var _14213__$1 = this;return self__.meta14212;
});
openthink.views.activity.t14211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14213,meta14212__$1){var self__ = this;
var _14213__$1 = this;return (new openthink.views.activity.t14211(self__.owner,self__.data,self__.comment_form,meta14212__$1));
});
openthink.views.activity.__GT_t14211 = (function __GT_t14211(owner__$1,data__$1,comment_form__$1,meta14212){return (new openthink.views.activity.t14211(owner__$1,data__$1,comment_form__$1,meta14212));
});
}
return (new openthink.views.activity.t14211(owner,data,comment_form,null));
});
openthink.views.activity.gen_pagination_numbers = (function gen_pagination_numbers(action_count,cur_page){var total_pages = Math.ceil.call(null,(action_count / openthink.views.activity.ACTIONS_PER_PAGE));var pages_left = cljs.core.take_last.call(null,(3),cljs.core.range.call(null,(1),(cur_page + (1))));var pages_right = cljs.core.take.call(null,(3),cljs.core.range.call(null,cur_page,total_pages));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"total","total",1916810418),total_pages,new cljs.core.Keyword(null,"pages","pages",-285406513),cljs.core.distinct.call(null,cljs.core.concat.call(null,pages_left,pages_right))], null);
});
openthink.views.activity.actions_view = (function actions_view(data,owner){if(typeof openthink.views.activity.t14337 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.views.activity.t14337 = (function (owner,data,actions_view,meta14338){
this.owner = owner;
this.data = data;
this.actions_view = actions_view;
this.meta14338 = meta14338;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.activity.t14337.cljs$lang$type = true;
openthink.views.activity.t14337.cljs$lang$ctorStr = "openthink.views.activity/t14337";
openthink.views.activity.t14337.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.views.activity/t14337");
});
openthink.views.activity.t14337.prototype.om$core$IRender$ = true;
openthink.views.activity.t14337.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.println.call(null,"actions view");
var action_types = cljs.core.map.call(null,((function (___$1){
return (function (p1__14281_SHARP_){return cljs.core.get.call(null,p1__14281_SHARP_,(1));
});})(___$1))
,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(self__.data));var actions = cljs.core.map.call(null,openthink.cursors.action_cursor,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(self__.data));return React.DOM.div({"className": "comments-view row"},(cljs.core.truth_(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(self__.data))?sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.activity.comment_form,self__.data)):React.DOM.strong(null,"You must be logged in to comment on a post")),sablono.interpreter.interpret.call(null,((!(cljs.core.empty_QMARK_.call(null,actions)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Activity:"], null),(function (){var post_floor = ((openthink.views.activity.ACTIONS_PER_PAGE * (new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.data) - (1))) + (1));var post_ceil = (function (){var x__3960__auto__ = new cljs.core.Keyword(null,"action_count","action_count",-900104661).cljs$core$IFn$_invoke$arity$1(self__.data);var y__3961__auto__ = (openthink.views.activity.ACTIONS_PER_PAGE * new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.data));return ((x__3960__auto__ < y__3961__auto__) ? x__3960__auto__ : y__3961__auto__);
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(post_floor)+" to "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(post_ceil))], null);
})(),(function (){var page_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"page-chan","page-chan",1905955203));var page_info = openthink.views.activity.gen_pagination_numbers.call(null,new cljs.core.Keyword(null,"action_count","action_count",-900104661).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.data));var pages = new cljs.core.Keyword(null,"pages","pages",-285406513).cljs$core$IFn$_invoke$arity$1(page_info);var total = new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(page_info);var pages__$1 = (cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),pages))?pages:(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),pages))?cljs.core.conj.call(null,pages,(1)):cljs.core.conj.call(null,pages,null,(1))));var pages__$2 = (cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([total], true),pages__$1))?pages__$1:(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([(total - (1))], true),pages__$1))?cljs.core.concat.call(null,pages__$1,cljs.core._conj.call(null,cljs.core.List.EMPTY,total)):cljs.core.concat.call(null,pages__$1,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,total),null))));return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"pagination right"], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.data),(1)))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"arrow"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1){
return (function (){return openthink.utils.put_nil_BANG_.call(null,page_ch,(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.data) - (1)));
});})(page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1))
], null),"\u00AB"], null)], null)),(function (){var iter__4385__auto__ = ((function (page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1){
return (function iter__14342(s__14343){return (new cljs.core.LazySeq(null,((function (page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1){
return (function (){var s__14343__$1 = s__14343;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14343__$1);if(temp__4126__auto__)
{var s__14343__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14343__$2))
{var c__4383__auto__ = cljs.core.chunk_first.call(null,s__14343__$2);var size__4384__auto__ = cljs.core.count.call(null,c__4383__auto__);var b__14345 = cljs.core.chunk_buffer.call(null,size__4384__auto__);if((function (){var i__14344 = (0);while(true){
if((i__14344 < size__4384__auto__))
{var page = cljs.core._nth.call(null,c__4383__auto__,i__14344);cljs.core.chunk_append.call(null,b__14345,(cljs.core.truth_(page)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),((cljs.core._EQ_.call(null,page,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.data)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"current"], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__14344,page,c__4383__auto__,size__4384__auto__,b__14345,s__14343__$2,temp__4126__auto__,page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1){
return (function (){return openthink.utils.put_nil_BANG_.call(null,page_ch,page);
});})(i__14344,page,c__4383__auto__,size__4384__auto__,b__14345,s__14343__$2,temp__4126__auto__,page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1))
], null),page], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"unavailable"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),false], null),"\u2026"], null)], null)));
{
var G__14392 = (i__14344 + (1));
i__14344 = G__14392;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14345),iter__14342.call(null,cljs.core.chunk_rest.call(null,s__14343__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14345),null);
}
} else
{var page = cljs.core.first.call(null,s__14343__$2);return cljs.core.cons.call(null,(cljs.core.truth_(page)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),((cljs.core._EQ_.call(null,page,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.data)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"current"], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (page,s__14343__$2,temp__4126__auto__,page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1){
return (function (){return openthink.utils.put_nil_BANG_.call(null,page_ch,page);
});})(page,s__14343__$2,temp__4126__auto__,page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1))
], null),page], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"unavailable"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),false], null),"\u2026"], null)], null)),iter__14342.call(null,cljs.core.rest.call(null,s__14343__$2)));
}
} else
{return null;
}
break;
}
});})(page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1))
,null,null));
});})(page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1))
;return iter__4385__auto__.call(null,pages__$2);
})(),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.data),total))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"arrow"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1){
return (function (){return openthink.utils.put_nil_BANG_.call(null,page_ch,(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.data) + (1)));
});})(page_ch,page_info,pages,total,pages__$1,pages__$2,action_types,actions,___$1))
], null),"\u00BB"], null)], null))], null);
})(),(function (){var iter__4385__auto__ = ((function (action_types,actions,___$1){
return (function iter__14346(s__14347){return (new cljs.core.LazySeq(null,((function (action_types,actions,___$1){
return (function (){var s__14347__$1 = s__14347;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14347__$1);if(temp__4126__auto__)
{var s__14347__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14347__$2))
{var c__4383__auto__ = cljs.core.chunk_first.call(null,s__14347__$2);var size__4384__auto__ = cljs.core.count.call(null,c__4383__auto__);var b__14349 = cljs.core.chunk_buffer.call(null,size__4384__auto__);if((function (){var i__14348 = (0);while(true){
if((i__14348 < size__4384__auto__))
{var vec__14352 = cljs.core._nth.call(null,c__4383__auto__,i__14348);var action_type = cljs.core.nth.call(null,vec__14352,(0),null);var action = cljs.core.nth.call(null,vec__14352,(1),null);cljs.core.chunk_append.call(null,b__14349,((cljs.core._EQ_.call(null,action_type,"Comment"))?om.core.build.call(null,openthink.views.activity.comment_action,action):om.core.build.call(null,openthink.views.activity.link_action,action)));
{
var G__14393 = (i__14348 + (1));
i__14348 = G__14393;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14349),iter__14346.call(null,cljs.core.chunk_rest.call(null,s__14347__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14349),null);
}
} else
{var vec__14353 = cljs.core.first.call(null,s__14347__$2);var action_type = cljs.core.nth.call(null,vec__14353,(0),null);var action = cljs.core.nth.call(null,vec__14353,(1),null);return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,action_type,"Comment"))?om.core.build.call(null,openthink.views.activity.comment_action,action):om.core.build.call(null,openthink.views.activity.link_action,action)),iter__14346.call(null,cljs.core.rest.call(null,s__14347__$2)));
}
} else
{return null;
}
break;
}
});})(action_types,actions,___$1))
,null,null));
});})(action_types,actions,___$1))
;return iter__4385__auto__.call(null,cljs.core.map.call(null,cljs.core.list,action_types,actions));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No actions yet"], null))));
});
openthink.views.activity.t14337.prototype.om$core$IWillMount$ = true;
openthink.views.activity.t14337.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var page_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"page-chan","page-chan",1905955203));var c__6596__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto__,page_chan,___$1){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto__,page_chan,___$1){
return (function (state_14376){var state_val_14377 = (state_14376[(1)]);if((state_val_14377 === (7)))
{var inst_14357 = (state_14376[(2)]);var inst_14358 = cljs.core.println.call(null,"switching to page ",inst_14357);var inst_14359 = new cljs.core.Keyword(null,"current_post","current_post",2072811381).cljs$core$IFn$_invoke$arity$1(self__.data);var inst_14360 = ("/actions/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14359));var inst_14361 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];var inst_14362 = ["page"];var inst_14363 = [inst_14357];var inst_14364 = cljs.core.PersistentHashMap.fromArrays(inst_14362,inst_14363);var inst_14365 = (function (){var page = inst_14357;return ((function (page,inst_14357,inst_14358,inst_14359,inst_14360,inst_14361,inst_14362,inst_14363,inst_14364,state_val_14377,c__6596__auto__,page_chan,___$1){
return (function (resp){cljs.core.println.call(null,"new page returned");
cljs.core.println.call(null,resp);
var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032)))
{return null;
} else
{openthink.views.activity.r = resp__$1;
om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"rels","rels",1770187185),((function (resp__$1,page,inst_14357,inst_14358,inst_14359,inst_14360,inst_14361,inst_14362,inst_14363,inst_14364,state_val_14377,c__6596__auto__,page_chan,___$1){
return (function (p1__14278_SHARP_){return cljs.core.merge.call(null,p1__14278_SHARP_,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(resp__$1));
});})(resp__$1,page,inst_14357,inst_14358,inst_14359,inst_14360,inst_14361,inst_14362,inst_14363,inst_14364,state_val_14377,c__6596__auto__,page_chan,___$1))
);
om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"posts","posts",760043164),((function (resp__$1,page,inst_14357,inst_14358,inst_14359,inst_14360,inst_14361,inst_14362,inst_14363,inst_14364,state_val_14377,c__6596__auto__,page_chan,___$1){
return (function (p1__14279_SHARP_){return cljs.core.merge.call(null,p1__14279_SHARP_,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(resp__$1));
});})(resp__$1,page,inst_14357,inst_14358,inst_14359,inst_14360,inst_14361,inst_14362,inst_14363,inst_14364,state_val_14377,c__6596__auto__,page_chan,___$1))
);
om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"comments","comments",-293346423),((function (resp__$1,page,inst_14357,inst_14358,inst_14359,inst_14360,inst_14361,inst_14362,inst_14363,inst_14364,state_val_14377,c__6596__auto__,page_chan,___$1){
return (function (p1__14280_SHARP_){return cljs.core.merge.call(null,p1__14280_SHARP_,new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(resp__$1));
});})(resp__$1,page,inst_14357,inst_14358,inst_14359,inst_14360,inst_14361,inst_14362,inst_14363,inst_14364,state_val_14377,c__6596__auto__,page_chan,___$1))
);
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(resp__$1));
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"action_count","action_count",-900104661),new cljs.core.Keyword(null,"action_count","action_count",-900104661).cljs$core$IFn$_invoke$arity$1(resp__$1));
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(resp__$1));
}
});
;})(page,inst_14357,inst_14358,inst_14359,inst_14360,inst_14361,inst_14362,inst_14363,inst_14364,state_val_14377,c__6596__auto__,page_chan,___$1))
})();var inst_14366 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_14364,inst_14365];var inst_14367 = cljs.core.PersistentHashMap.fromArrays(inst_14361,inst_14366);var inst_14368 = ajax.core.GET.call(null,inst_14360,inst_14367);var state_14376__$1 = (function (){var statearr_14378 = state_14376;(statearr_14378[(7)] = inst_14368);
(statearr_14378[(8)] = inst_14358);
return statearr_14378;
})();var statearr_14379_14394 = state_14376__$1;(statearr_14379_14394[(2)] = null);
(statearr_14379_14394[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14377 === (6)))
{var inst_14372 = (state_14376[(2)]);var state_14376__$1 = state_14376;var statearr_14380_14395 = state_14376__$1;(statearr_14380_14395[(2)] = inst_14372);
(statearr_14380_14395[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14377 === (5)))
{var state_14376__$1 = state_14376;var statearr_14381_14396 = state_14376__$1;(statearr_14381_14396[(2)] = null);
(statearr_14381_14396[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14377 === (4)))
{var state_14376__$1 = state_14376;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14376__$1,(7),page_chan);
} else
{if((state_val_14377 === (3)))
{var inst_14374 = (state_14376[(2)]);var state_14376__$1 = state_14376;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14376__$1,inst_14374);
} else
{if((state_val_14377 === (2)))
{var state_14376__$1 = state_14376;var statearr_14382_14397 = state_14376__$1;(statearr_14382_14397[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14377 === (1)))
{var state_14376__$1 = state_14376;var statearr_14384_14398 = state_14376__$1;(statearr_14384_14398[(2)] = null);
(statearr_14384_14398[(1)] = (2));
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
});})(c__6596__auto__,page_chan,___$1))
;return ((function (switch__6581__auto__,c__6596__auto__,page_chan,___$1){
return (function() {
var state_machine__6582__auto__ = null;
var state_machine__6582__auto____0 = (function (){var statearr_14388 = [null,null,null,null,null,null,null,null,null];(statearr_14388[(0)] = state_machine__6582__auto__);
(statearr_14388[(1)] = (1));
return statearr_14388;
});
var state_machine__6582__auto____1 = (function (state_14376){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_14376);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e14389){if((e14389 instanceof Object))
{var ex__6585__auto__ = e14389;var statearr_14390_14399 = state_14376;(statearr_14390_14399[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14376);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14389;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14400 = state_14376;
state_14376 = G__14400;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_14376){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_14376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto__,page_chan,___$1))
})();var state__6598__auto__ = (function (){var statearr_14391 = f__6597__auto__.call(null);(statearr_14391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto__);
return statearr_14391;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto__,page_chan,___$1))
);
return c__6596__auto__;
});
openthink.views.activity.t14337.prototype.om$core$IInitState$ = true;
openthink.views.activity.t14337.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-chan","page-chan",1905955203),cljs.core.async.chan.call(null)], null);
});
openthink.views.activity.t14337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14339){var self__ = this;
var _14339__$1 = this;return self__.meta14338;
});
openthink.views.activity.t14337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14339,meta14338__$1){var self__ = this;
var _14339__$1 = this;return (new openthink.views.activity.t14337(self__.owner,self__.data,self__.actions_view,meta14338__$1));
});
openthink.views.activity.__GT_t14337 = (function __GT_t14337(owner__$1,data__$1,actions_view__$1,meta14338){return (new openthink.views.activity.t14337(owner__$1,data__$1,actions_view__$1,meta14338));
});
}
return (new openthink.views.activity.t14337(owner,data,actions_view,null));
});

//# sourceMappingURL=activity.js.map