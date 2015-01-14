// Compiled by ClojureScript 0.0-2371
goog.provide('openthink.core');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('cognitect.transit');
goog.require('ajax.core');
goog.require('dommy.core');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('sablono.core');
goog.require('goog.events');
goog.require('om.core');
goog.require('dommy.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('om.dom');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Hello world!");
openthink.core.listen = (function listen(el,type){var out = cljs.core.async.chan.call(null);goog.events.listen(el,type,((function (out){
return (function (e){return cljs.core.async.put_BANG_.call(null,out,e);
});})(out))
);
return out;
});
openthink.core.handle_change = (function handle_change(e,owner,field){return om.core.set_state_BANG_.call(null,owner,field,e.target.value);
});
openthink.core.date = (function date(dt){return openthink.core.remove_last.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dt)),(15));
});
openthink.core.remove_last = (function remove_last(s,n){var end_index = (cljs.core.count.call(null,s) - n);return cljs.core.subs.call(null,s,(0),end_index);
});
openthink.core.split_text = (function split_text(s){return cljs.core.remove.call(null,cljs.core.empty_QMARK_,clojure.string.split.call(null,s,/\\n|\n/));
});
openthink.core.render_text = (function render_text(s){var iter__4385__auto__ = (function iter__56467(s__56468){return (new cljs.core.LazySeq(null,(function (){var s__56468__$1 = s__56468;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__56468__$1);if(temp__4126__auto__)
{var s__56468__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__56468__$2))
{var c__4383__auto__ = cljs.core.chunk_first.call(null,s__56468__$2);var size__4384__auto__ = cljs.core.count.call(null,c__4383__auto__);var b__56470 = cljs.core.chunk_buffer.call(null,size__4384__auto__);if((function (){var i__56469 = (0);while(true){
if((i__56469 < size__4384__auto__))
{var p = cljs.core._nth.call(null,c__4383__auto__,i__56469);cljs.core.chunk_append.call(null,b__56470,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),p], null));
{
var G__56471 = (i__56469 + (1));
i__56469 = G__56471;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56470),iter__56467.call(null,cljs.core.chunk_rest.call(null,s__56468__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56470),null);
}
} else
{var p = cljs.core.first.call(null,s__56468__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),p], null),iter__56467.call(null,cljs.core.rest.call(null,s__56468__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4385__auto__.call(null,openthink.core.split_text.call(null,s));
});
openthink.core.select_values = (function select_values(map,ks){return cljs.core.reduce.call(null,(function (p1__56472_SHARP_,p2__56473_SHARP_){return cljs.core.conj.call(null,p1__56472_SHARP_,map.call(null,p2__56473_SHARP_));
}),cljs.core.PersistentVector.EMPTY,ks);
});
openthink.core.ask_for = (function ask_for(list_of_wants,params){return cljs.core.assoc.call(null,params,"ask_for",list_of_wants,"current_post",new cljs.core.Keyword(null,"current_post","current_post",2072811381).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,openthink.core.app_state)));
});
openthink.core.do_on_enter = (function do_on_enter(f){return (function (e){if((e.keyCode === (13)))
{return f.call(null);
} else
{return null;
}
});
});
/**
* change html character entities into special characters
*/
openthink.core.unescape_html = (function unescape_html(text){return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)),"&amp;","&"),"&lt;","<"),"&gt;",">"),"&quot;","\""),"&#34;","\""),"&#x27;","'"),"&#x2F;","/");
});
openthink.core.app_state = (function (){var init_data = initial_app_state;var rdr = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));return cljs.core.atom.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sort-value","sort-value",-585546274),"top"], null),clojure.walk.keywordize_keys.call(null,cognitect.transit.read.call(null,rdr,openthink.core.unescape_html.call(null,init_data)))));
})();
cljs.core.println.call(null,openthink.core.app_state);
openthink.core.current_post = (function current_post(){var root_cursor = om.core.root_cursor.call(null,openthink.core.app_state);return om.core.ref_cursor.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(root_cursor),new cljs.core.Keyword(null,"current_post","current_post",2072811381).cljs$core$IFn$_invoke$arity$1(root_cursor)));
});
openthink.core.child_rels = (function child_rels(){var root_cursor = om.core.root_cursor.call(null,openthink.core.app_state);var child_rel_ids = new cljs.core.Keyword(null,"child_rel_ids","child_rel_ids",890940940).cljs$core$IFn$_invoke$arity$1(openthink.core.current_post.call(null));return om.core.ref_cursor.call(null,openthink.core.select_values.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(root_cursor),child_rel_ids));
});
openthink.core.post_from_rel = (function post_from_rel(rel){var posts = new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(om.core.root_cursor.call(null,openthink.core.app_state));return om.core.ref_cursor.call(null,cljs.core.get.call(null,posts,new cljs.core.Keyword(null,"child_id","child_id",1899830409).cljs$core$IFn$_invoke$arity$1(rel)));
});
openthink.core.comments_cursor = (function comments_cursor(){return om.core.ref_cursor.call(null,new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(om.core.root_cursor.call(null,openthink.core.app_state)));
});
openthink.core.login_form = (function login_form(data,owner){if(typeof openthink.core.t56511 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t56511 = (function (owner,data,login_form,meta56512){
this.owner = owner;
this.data = data;
this.login_form = login_form;
this.meta56512 = meta56512;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t56511.cljs$lang$type = true;
openthink.core.t56511.cljs$lang$ctorStr = "openthink.core/t56511";
openthink.core.t56511.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t56511");
});
openthink.core.t56511.prototype.om$core$IRender$ = true;
openthink.core.t56511.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"is-posting","is-posting",70438374))))
{return React.DOM.li(null,React.DOM.h4(null,"Logging in... Please wait."));
} else
{return React.DOM.li({"className": "login-form has-form", "onKeyPress": openthink.core.do_on_enter.call(null,((function (this$__$1){
return (function (){return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"post","post",269697687)),(1));
});})(this$__$1))
)},React.DOM.div({"className": "row collapse"},React.DOM.div({"className": "small-3 columns"},sablono.interpreter.input.call(null,{"id": "login-username", "type": "text", "placeholder": "username", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"username","username",1605666410)), "onChange": ((function (this$__$1){
return (function (p1__56474_SHARP_){return openthink.core.handle_change.call(null,p1__56474_SHARP_,self__.owner,new cljs.core.Keyword(null,"username","username",1605666410));
});})(this$__$1))
})),React.DOM.div({"className": "small-3 columns"},sablono.interpreter.input.call(null,{"id": "login-password", "type": "password", "placeholder": "password", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"password","password",417022471)), "onChange": ((function (this$__$1){
return (function (p1__56475_SHARP_){return openthink.core.handle_change.call(null,p1__56475_SHARP_,self__.owner,new cljs.core.Keyword(null,"password","password",417022471));
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
openthink.core.t56511.prototype.om$core$IWillMount$ = true;
openthink.core.t56511.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var post_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"post","post",269697687));var c__6596__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto__,post_ch,___$1){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto__,post_ch,___$1){
return (function (state_56534){var state_val_56535 = (state_56534[(1)]);if((state_val_56535 === (4)))
{var inst_56518 = (state_56534[(2)]);var inst_56519 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"is-posting","is-posting",70438374),true);var inst_56520 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];var inst_56521 = ["username","password"];var inst_56522 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"username","username",1605666410));var inst_56523 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"password","password",417022471));var inst_56524 = [inst_56522,inst_56523];var inst_56525 = cljs.core.PersistentHashMap.fromArrays(inst_56521,inst_56524);var inst_56526 = (function (){var posting = inst_56518;return ((function (posting,inst_56518,inst_56519,inst_56520,inst_56521,inst_56522,inst_56523,inst_56524,inst_56525,state_val_56535,c__6596__auto__,post_ch,___$1){
return (function (resp){cljs.core.println.call(null,"login form returned");
cljs.core.println.call(null,resp);
var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);cljs.core.println.call(null,resp__$1);
if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032)))
{return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"is-posting","is-posting",70438374),false);
} else
{return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"user","user",1532431356),resp__$1);
}
});
;})(posting,inst_56518,inst_56519,inst_56520,inst_56521,inst_56522,inst_56523,inst_56524,inst_56525,state_val_56535,c__6596__auto__,post_ch,___$1))
})();var inst_56527 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_56525,inst_56526];var inst_56528 = cljs.core.PersistentHashMap.fromArrays(inst_56520,inst_56527);var inst_56529 = ajax.core.POST.call(null,"/login",inst_56528);var state_56534__$1 = (function (){var statearr_56536 = state_56534;(statearr_56536[(7)] = inst_56529);
(statearr_56536[(8)] = inst_56519);
return statearr_56536;
})();var statearr_56537_56546 = state_56534__$1;(statearr_56537_56546[(2)] = null);
(statearr_56537_56546[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56535 === (3)))
{var inst_56532 = (state_56534[(2)]);var state_56534__$1 = state_56534;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56534__$1,inst_56532);
} else
{if((state_val_56535 === (2)))
{var state_56534__$1 = state_56534;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56534__$1,(4),post_ch);
} else
{if((state_val_56535 === (1)))
{var state_56534__$1 = state_56534;var statearr_56538_56547 = state_56534__$1;(statearr_56538_56547[(2)] = null);
(statearr_56538_56547[(1)] = (2));
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
var state_machine__6582__auto____0 = (function (){var statearr_56542 = [null,null,null,null,null,null,null,null,null];(statearr_56542[(0)] = state_machine__6582__auto__);
(statearr_56542[(1)] = (1));
return statearr_56542;
});
var state_machine__6582__auto____1 = (function (state_56534){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_56534);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e56543){if((e56543 instanceof Object))
{var ex__6585__auto__ = e56543;var statearr_56544_56548 = state_56534;(statearr_56544_56548[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56534);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e56543;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56549 = state_56534;
state_56534 = G__56549;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_56534){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_56534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto__,post_ch,___$1))
})();var state__6598__auto__ = (function (){var statearr_56545 = f__6597__auto__.call(null);(statearr_56545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto__);
return statearr_56545;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto__,post_ch,___$1))
);
return c__6596__auto__;
});
openthink.core.t56511.prototype.om$core$IInitState$ = true;
openthink.core.t56511.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"post","post",269697687),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"username","username",1605666410),"",new cljs.core.Keyword(null,"password","password",417022471),"",new cljs.core.Keyword(null,"is-posting","is-posting",70438374),false], null);
});
openthink.core.t56511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56513){var self__ = this;
var _56513__$1 = this;return self__.meta56512;
});
openthink.core.t56511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56513,meta56512__$1){var self__ = this;
var _56513__$1 = this;return (new openthink.core.t56511(self__.owner,self__.data,self__.login_form,meta56512__$1));
});
openthink.core.__GT_t56511 = (function __GT_t56511(owner__$1,data__$1,login_form__$1,meta56512){return (new openthink.core.t56511(owner__$1,data__$1,login_form__$1,meta56512));
});
}
return (new openthink.core.t56511(owner,data,login_form,null));
});
openthink.core.logout_button = (function logout_button(data,owner){if(typeof openthink.core.t56553 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t56553 = (function (owner,data,logout_button,meta56554){
this.owner = owner;
this.data = data;
this.logout_button = logout_button;
this.meta56554 = meta56554;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t56553.cljs$lang$type = true;
openthink.core.t56553.cljs$lang$ctorStr = "openthink.core/t56553";
openthink.core.t56553.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t56553");
});
openthink.core.t56553.prototype.om$core$IRender$ = true;
openthink.core.t56553.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.button({"type": "button", "onClick": ((function (this$__$1){
return (function (_){return ajax.core.POST.call(null,"/logout",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (this$__$1){
return (function (resp){cljs.core.println.call(null,resp);
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"user","user",1532431356),null);
});})(this$__$1))
], null));
});})(this$__$1))
},"Log out");
});
openthink.core.t56553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56555){var self__ = this;
var _56555__$1 = this;return self__.meta56554;
});
openthink.core.t56553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56555,meta56554__$1){var self__ = this;
var _56555__$1 = this;return (new openthink.core.t56553(self__.owner,self__.data,self__.logout_button,meta56554__$1));
});
openthink.core.__GT_t56553 = (function __GT_t56553(owner__$1,data__$1,logout_button__$1,meta56554){return (new openthink.core.t56553(owner__$1,data__$1,logout_button__$1,meta56554));
});
}
return (new openthink.core.t56553(owner,data,logout_button,null));
});
openthink.core.register_form = (function register_form(data,owner){if(typeof openthink.core.t56599 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t56599 = (function (owner,data,register_form,meta56600){
this.owner = owner;
this.data = data;
this.register_form = register_form;
this.meta56600 = meta56600;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t56599.cljs$lang$type = true;
openthink.core.t56599.cljs$lang$ctorStr = "openthink.core/t56599";
openthink.core.t56599.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t56599");
});
openthink.core.t56599.prototype.om$core$IRender$ = true;
openthink.core.t56599.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"completed","completed",-486056503),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099))))
{return React.DOM.div({"className": "row register-section"},(function (){var attrs56602 = ("You have successfully registed as "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"username","username",1605666410)], null))));return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs56602))?sablono.interpreter.attributes.call(null,attrs56602):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs56602))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs56602)], null))));
})(),React.DOM.div({"className": "large-4 columns"},React.DOM.button({"type": "button", "className": "btn btn-info", "onClick": ((function (this$__$1){
return (function (e){cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891)),(1));
return false;
});})(this$__$1))
},"aiight")));
} else
{return React.DOM.div({"className": "row register-section", "onKeyPress": openthink.core.do_on_enter.call(null,((function (this$__$1){
return (function (){return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"post","post",269697687)),(1));
});})(this$__$1))
)},React.DOM.h3(null,"Register your account and start posting!"),sablono.interpreter.interpret.call(null,(function (){var temp__4126__auto__ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032));if(cljs.core.truth_(temp__4126__auto__))
{var error = temp__4126__auto__;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"large-12 columns"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"alert-box warning radius"], null),error], null)], null);
} else
{return null;
}
})()),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"posting","posting",919785887),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"large-12 columns"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"alert-box info radius"], null),"Registering account... Please wait"], null)], null):null)),React.DOM.div({"className": "large-12 columns"},sablono.interpreter.input.call(null,{"id": "register-username", "type": "text", "placeholder": "username", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"username","username",1605666410)), "onChange": ((function (this$__$1){
return (function (p1__56556_SHARP_){return openthink.core.handle_change.call(null,p1__56556_SHARP_,self__.owner,new cljs.core.Keyword(null,"username","username",1605666410));
});})(this$__$1))
})),React.DOM.div({"className": "large-12 columns"},sablono.interpreter.input.call(null,{"id": "register-email", "type": "text", "placeholder": "email", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"email","email",1415816706)), "onChange": ((function (this$__$1){
return (function (p1__56557_SHARP_){return openthink.core.handle_change.call(null,p1__56557_SHARP_,self__.owner,new cljs.core.Keyword(null,"email","email",1415816706));
});})(this$__$1))
})),React.DOM.div({"className": "large-12 columns"},sablono.interpreter.input.call(null,{"id": "register-password", "type": "password", "placeholder": "password", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"password","password",417022471)), "onChange": ((function (this$__$1){
return (function (p1__56558_SHARP_){return openthink.core.handle_change.call(null,p1__56558_SHARP_,self__.owner,new cljs.core.Keyword(null,"password","password",417022471));
});})(this$__$1))
})),React.DOM.div({"className": "large-12 columns"},sablono.interpreter.input.call(null,{"id": "register-r-password", "type": "password", "placeholder": "repeat password", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"r-password","r-password",605579115)), "onChange": ((function (this$__$1){
return (function (p1__56559_SHARP_){return openthink.core.handle_change.call(null,p1__56559_SHARP_,self__.owner,new cljs.core.Keyword(null,"r-password","r-password",605579115));
});})(this$__$1))
})),React.DOM.div({"className": "large-4 columns"},React.DOM.button({"type": "button", "className": "btn btn-info", "onClick": ((function (this$__$1){
return (function (e){cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"post","post",269697687)),(1));
return false;
});})(this$__$1))
},"Register")));
}
});
openthink.core.t56599.prototype.om$core$IWillMount$ = true;
openthink.core.t56599.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var post_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"post","post",269697687));var c__6596__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto__,post_ch,___$1){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto__,post_ch,___$1){
return (function (state_56626){var state_val_56627 = (state_56626[(1)]);if((state_val_56627 === (4)))
{var inst_56607 = (state_56626[(2)]);var inst_56608 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"posting","posting",919785887));var inst_56609 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032),null);var inst_56610 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];var inst_56611 = ["username","email","password","r-password"];var inst_56612 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"username","username",1605666410));var inst_56613 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"email","email",1415816706));var inst_56614 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"password","password",417022471));var inst_56615 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"r-password","r-password",605579115));var inst_56616 = [inst_56612,inst_56613,inst_56614,inst_56615];var inst_56617 = cljs.core.PersistentHashMap.fromArrays(inst_56611,inst_56616);var inst_56618 = (function (){var posting = inst_56607;return ((function (posting,inst_56607,inst_56608,inst_56609,inst_56610,inst_56611,inst_56612,inst_56613,inst_56614,inst_56615,inst_56616,inst_56617,state_val_56627,c__6596__auto__,post_ch,___$1){
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
;})(posting,inst_56607,inst_56608,inst_56609,inst_56610,inst_56611,inst_56612,inst_56613,inst_56614,inst_56615,inst_56616,inst_56617,state_val_56627,c__6596__auto__,post_ch,___$1))
})();var inst_56619 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_56617,inst_56618];var inst_56620 = cljs.core.PersistentHashMap.fromArrays(inst_56610,inst_56619);var inst_56621 = ajax.core.POST.call(null,"/register",inst_56620);var state_56626__$1 = (function (){var statearr_56628 = state_56626;(statearr_56628[(7)] = inst_56609);
(statearr_56628[(8)] = inst_56608);
(statearr_56628[(9)] = inst_56621);
return statearr_56628;
})();var statearr_56629_56638 = state_56626__$1;(statearr_56629_56638[(2)] = null);
(statearr_56629_56638[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56627 === (3)))
{var inst_56624 = (state_56626[(2)]);var state_56626__$1 = state_56626;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56626__$1,inst_56624);
} else
{if((state_val_56627 === (2)))
{var state_56626__$1 = state_56626;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56626__$1,(4),post_ch);
} else
{if((state_val_56627 === (1)))
{var state_56626__$1 = state_56626;var statearr_56630_56639 = state_56626__$1;(statearr_56630_56639[(2)] = null);
(statearr_56630_56639[(1)] = (2));
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
var state_machine__6582__auto____0 = (function (){var statearr_56634 = [null,null,null,null,null,null,null,null,null,null];(statearr_56634[(0)] = state_machine__6582__auto__);
(statearr_56634[(1)] = (1));
return statearr_56634;
});
var state_machine__6582__auto____1 = (function (state_56626){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_56626);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e56635){if((e56635 instanceof Object))
{var ex__6585__auto__ = e56635;var statearr_56636_56640 = state_56626;(statearr_56636_56640[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56626);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e56635;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56641 = state_56626;
state_56626 = G__56641;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_56626){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_56626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto__,post_ch,___$1))
})();var state__6598__auto__ = (function (){var statearr_56637 = f__6597__auto__.call(null);(statearr_56637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto__);
return statearr_56637;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto__,post_ch,___$1))
);
return c__6596__auto__;
});
openthink.core.t56599.prototype.om$core$IInitState$ = true;
openthink.core.t56599.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"post","post",269697687),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795),new cljs.core.Keyword(null,"username","username",1605666410),"",new cljs.core.Keyword(null,"email","email",1415816706),"",new cljs.core.Keyword(null,"password","password",417022471),"",new cljs.core.Keyword(null,"r-password","r-password",605579115),""], null);
});
openthink.core.t56599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56601){var self__ = this;
var _56601__$1 = this;return self__.meta56600;
});
openthink.core.t56599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56601,meta56600__$1){var self__ = this;
var _56601__$1 = this;return (new openthink.core.t56599(self__.owner,self__.data,self__.register_form,meta56600__$1));
});
openthink.core.__GT_t56599 = (function __GT_t56599(owner__$1,data__$1,register_form__$1,meta56600){return (new openthink.core.t56599(owner__$1,data__$1,register_form__$1,meta56600));
});
}
return (new openthink.core.t56599(owner,data,register_form,null));
});
openthink.core.user_bar = (function user_bar(data,owner){if(typeof openthink.core.t56647 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t56647 = (function (owner,data,user_bar,meta56648){
this.owner = owner;
this.data = data;
this.user_bar = user_bar;
this.meta56648 = meta56648;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t56647.cljs$lang$type = true;
openthink.core.t56647.cljs$lang$ctorStr = "openthink.core/t56647";
openthink.core.t56647.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t56647");
});
openthink.core.t56647.prototype.om$core$IRender$ = true;
openthink.core.t56647.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(self__.data)))
{return React.DOM.li({"className": "logged-in-as"},(function (){var attrs56650 = ("logged in as "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"username","username",1605666410)], null)))+" ");return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs56650))?sablono.interpreter.attributes.call(null,attrs56650):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs56650))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs56650)], null))));
})(),(function (){var attrs56651 = om.core.build.call(null,openthink.core.logout_button,self__.data);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs56651))?sablono.interpreter.attributes.call(null,attrs56651):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs56651))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs56651)], null))));
})());
} else
{return sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.core.login_form,self__.data));
}
});
openthink.core.t56647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56649){var self__ = this;
var _56649__$1 = this;return self__.meta56648;
});
openthink.core.t56647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56649,meta56648__$1){var self__ = this;
var _56649__$1 = this;return (new openthink.core.t56647(self__.owner,self__.data,self__.user_bar,meta56648__$1));
});
openthink.core.__GT_t56647 = (function __GT_t56647(owner__$1,data__$1,user_bar__$1,meta56648){return (new openthink.core.t56647(owner__$1,data__$1,user_bar__$1,meta56648));
});
}
return (new openthink.core.t56647(owner,data,user_bar,null));
});
openthink.core.header = (function header(data,owner){if(typeof openthink.core.t56659 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t56659 = (function (owner,data,header,meta56660){
this.owner = owner;
this.data = data;
this.header = header;
this.meta56660 = meta56660;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t56659.cljs$lang$type = true;
openthink.core.t56659.cljs$lang$ctorStr = "openthink.core/t56659";
openthink.core.t56659.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t56659");
});
openthink.core.t56659.prototype.om$core$IRender$ = true;
openthink.core.t56659.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.nav({"className": "top-bar page-header"},React.DOM.ul({"className": "title-area"},React.DOM.li({"className": "name"},React.DOM.h1(null,React.DOM.a({"href": "/"},"OpenThink")))),React.DOM.section({"className": "top-bar-section"},React.DOM.ul({"className": "left"},React.DOM.button({"className": "button large", "onClick": ((function (this$__$1){
return (function (){om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"reply-to","reply-to",-145674792),null);
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.Keyword(null,"new-post","new-post",-1808203791));
});})(this$__$1))
},"Create a new post")),React.DOM.ul({"className": "right"},React.DOM.li({"className": "divider"}),sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.core.user_bar,self__.data)))));
});
openthink.core.t56659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56661){var self__ = this;
var _56661__$1 = this;return self__.meta56660;
});
openthink.core.t56659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56661,meta56660__$1){var self__ = this;
var _56661__$1 = this;return (new openthink.core.t56659(self__.owner,self__.data,self__.header,meta56660__$1));
});
openthink.core.__GT_t56659 = (function __GT_t56659(owner__$1,data__$1,header__$1,meta56660){return (new openthink.core.t56659(owner__$1,data__$1,header__$1,meta56660));
});
}
return (new openthink.core.t56659(owner,data,header,null));
});
openthink.core.post_view = (function post_view(data,owner){if(typeof openthink.core.t56673 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t56673 = (function (owner,data,post_view,meta56674){
this.owner = owner;
this.data = data;
this.post_view = post_view;
this.meta56674 = meta56674;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t56673.cljs$lang$type = true;
openthink.core.t56673.cljs$lang$ctorStr = "openthink.core/t56673";
openthink.core.t56673.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t56673");
});
openthink.core.t56673.prototype.om$core$IRender$ = true;
openthink.core.t56673.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var post = openthink.core.current_post.call(null);return React.DOM.div({"className": "post row"},React.DOM.h4(null,(function (){var attrs56676 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(post);return cljs.core.apply.call(null,React.DOM.strong,((cljs.core.map_QMARK_.call(null,attrs56676))?sablono.interpreter.attributes.call(null,attrs56676):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs56676))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs56676)], null))));
})()),React.DOM.hr(null),(function (){var attrs56679 = openthink.core.render_text.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(post));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs56679))?sablono.interpreter.attributes.call(null,attrs56679):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs56679))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs56679)], null))));
})());
});
openthink.core.t56673.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56675){var self__ = this;
var _56675__$1 = this;return self__.meta56674;
});
openthink.core.t56673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56675,meta56674__$1){var self__ = this;
var _56675__$1 = this;return (new openthink.core.t56673(self__.owner,self__.data,self__.post_view,meta56674__$1));
});
openthink.core.__GT_t56673 = (function __GT_t56673(owner__$1,data__$1,post_view__$1,meta56674){return (new openthink.core.t56673(owner__$1,data__$1,post_view__$1,meta56674));
});
}
return (new openthink.core.t56673(owner,data,post_view,null));
});
openthink.core.vote_btn = (function vote_btn(rel,owner,p__56680){var map__56685 = p__56680;var map__56685__$1 = ((cljs.core.seq_QMARK_.call(null,map__56685))?cljs.core.apply.call(null,cljs.core.hash_map,map__56685):map__56685);var opts = map__56685__$1;var vote_txt = cljs.core.get.call(null,map__56685__$1,new cljs.core.Keyword(null,"vote-txt","vote-txt",476450142));var vote_value = cljs.core.get.call(null,map__56685__$1,new cljs.core.Keyword(null,"vote-value","vote-value",-814557147));if(typeof openthink.core.t56686 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t56686 = (function (vote_value,vote_txt,opts,map__56685,p__56680,owner,rel,vote_btn,meta56687){
this.vote_value = vote_value;
this.vote_txt = vote_txt;
this.opts = opts;
this.map__56685 = map__56685;
this.p__56680 = p__56680;
this.owner = owner;
this.rel = rel;
this.vote_btn = vote_btn;
this.meta56687 = meta56687;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t56686.cljs$lang$type = true;
openthink.core.t56686.cljs$lang$ctorStr = "openthink.core/t56686";
openthink.core.t56686.cljs$lang$ctorPrWriter = ((function (map__56685,map__56685__$1,opts,vote_txt,vote_value){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t56686");
});})(map__56685,map__56685__$1,opts,vote_txt,vote_value))
;
openthink.core.t56686.prototype.om$core$IRender$ = true;
openthink.core.t56686.prototype.om$core$IRender$render$arity$1 = ((function (map__56685,map__56685__$1,opts,vote_txt,vote_value){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.a({"href": "#", "onClick": ((function (this$__$1,map__56685,map__56685__$1,opts,vote_txt,vote_value){
return (function (_){ajax.core.POST.call(null,"/vote",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, ["value",self__.vote_value,"rel_id",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.rel)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (this$__$1,map__56685,map__56685__$1,opts,vote_txt,vote_value){
return (function (resp){cljs.core.println.call(null,resp);
var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032)))
{return null;
} else
{return om.core.update_BANG_.call(null,self__.rel,new cljs.core.Keyword(null,"rel","rel",1378823488).cljs$core$IFn$_invoke$arity$1(resp__$1));
}
});})(this$__$1,map__56685,map__56685__$1,opts,vote_txt,vote_value))
], null));
return false;
});})(this$__$1,map__56685,map__56685__$1,opts,vote_txt,vote_value))
},sablono.interpreter.interpret.call(null,self__.vote_txt));
});})(map__56685,map__56685__$1,opts,vote_txt,vote_value))
;
openthink.core.t56686.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__56685,map__56685__$1,opts,vote_txt,vote_value){
return (function (_56688){var self__ = this;
var _56688__$1 = this;return self__.meta56687;
});})(map__56685,map__56685__$1,opts,vote_txt,vote_value))
;
openthink.core.t56686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__56685,map__56685__$1,opts,vote_txt,vote_value){
return (function (_56688,meta56687__$1){var self__ = this;
var _56688__$1 = this;return (new openthink.core.t56686(self__.vote_value,self__.vote_txt,self__.opts,self__.map__56685,self__.p__56680,self__.owner,self__.rel,self__.vote_btn,meta56687__$1));
});})(map__56685,map__56685__$1,opts,vote_txt,vote_value))
;
openthink.core.__GT_t56686 = ((function (map__56685,map__56685__$1,opts,vote_txt,vote_value){
return (function __GT_t56686(vote_value__$1,vote_txt__$1,opts__$1,map__56685__$2,p__56680__$1,owner__$1,rel__$1,vote_btn__$1,meta56687){return (new openthink.core.t56686(vote_value__$1,vote_txt__$1,opts__$1,map__56685__$2,p__56680__$1,owner__$1,rel__$1,vote_btn__$1,meta56687));
});})(map__56685,map__56685__$1,opts,vote_txt,vote_value))
;
}
return (new openthink.core.t56686(vote_value,vote_txt,opts,map__56685__$1,p__56680,owner,rel,vote_btn,null));
});
openthink.core.child_view = (function child_view(rel,owner){if(typeof openthink.core.t56697 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t56697 = (function (owner,rel,child_view,meta56698){
this.owner = owner;
this.rel = rel;
this.child_view = child_view;
this.meta56698 = meta56698;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t56697.cljs$lang$type = true;
openthink.core.t56697.cljs$lang$ctorStr = "openthink.core/t56697";
openthink.core.t56697.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t56697");
});
openthink.core.t56697.prototype.om$core$IRender$ = true;
openthink.core.t56697.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var child_post = openthink.core.post_from_rel.call(null,self__.rel);return React.DOM.div({"className": "child large-12 columns"},React.DOM.div({"className": "row"},React.DOM.div({"className": "large-2 columns"},React.DOM.div({"className": "row"},React.DOM.div({"className": "small-4 columns", "style": cljs.core.clj__GT_js.call(null,{"padding": "0px"})},(function (){var attrs56700 = om.core.build.call(null,openthink.core.vote_btn,self__.rel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vote-value","vote-value",-814557147),(1),new cljs.core.Keyword(null,"vote-txt","vote-txt",476450142),"\u25B2"], null),new cljs.core.Keyword(null,"key","key",-1516042587),("upvote-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.rel)))], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs56700))?sablono.interpreter.attributes.call(null,attrs56700):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs56700))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs56700)], null))));
})(),(function (){var attrs56701 = om.core.build.call(null,openthink.core.vote_btn,self__.rel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vote-value","vote-value",-814557147),(-1),new cljs.core.Keyword(null,"vote-txt","vote-txt",476450142),"\u25BC"], null),new cljs.core.Keyword(null,"key","key",-1516042587),("downvote-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.rel)))], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs56701))?sablono.interpreter.attributes.call(null,attrs56701):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs56701))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs56701)], null))));
})()),React.DOM.div({"className": "small-8 columns", "style": cljs.core.clj__GT_js.call(null,{"padding": "0px"})},(function (){var attrs56702 = (function (){var or__3646__auto__ = new cljs.core.Keyword(null,"votecount","votecount",425206940).cljs$core$IFn$_invoke$arity$1(self__.rel);if(cljs.core.truth_(or__3646__auto__))
{return or__3646__auto__;
} else
{return (0);
}
})();return cljs.core.apply.call(null,React.DOM.h4,((cljs.core.map_QMARK_.call(null,attrs56702))?sablono.interpreter.attributes.call(null,attrs56702):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs56702))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs56702)], null))));
})()))),React.DOM.div({"className": "large-10 columns"},React.DOM.a({"href": ("/post/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child_post)))},React.DOM.strong({"className": "child-title"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(child_post)))),(function (){var attrs56703 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,clojure.string.replace.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(child_post),/\\n|\n/," "),(0),(80)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((cljs.core.count.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(child_post)) > (80)))?"...":"")));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs56703))?sablono.interpreter.attributes.call(null,attrs56703):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs56703))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs56703)], null))));
})(),React.DOM.span({"className": "link-by"},"linked by ",(function (){var attrs56704 = cljs.core.get_in.call(null,self__.rel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linked_by","linked_by",-1836719993),new cljs.core.Keyword(null,"username","username",1605666410)], null));return cljs.core.apply.call(null,React.DOM.strong,((cljs.core.map_QMARK_.call(null,attrs56704))?sablono.interpreter.attributes.call(null,attrs56704):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs56704))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs56704)], null))));
})()," on ",sablono.interpreter.interpret.call(null,openthink.core.date.call(null,new cljs.core.Keyword(null,"time_linked","time_linked",1045859207).cljs$core$IFn$_invoke$arity$1(self__.rel)))))));
});
openthink.core.t56697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56699){var self__ = this;
var _56699__$1 = this;return self__.meta56698;
});
openthink.core.t56697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56699,meta56698__$1){var self__ = this;
var _56699__$1 = this;return (new openthink.core.t56697(self__.owner,self__.rel,self__.child_view,meta56698__$1));
});
openthink.core.__GT_t56697 = (function __GT_t56697(owner__$1,rel__$1,child_view__$1,meta56698){return (new openthink.core.t56697(owner__$1,rel__$1,child_view__$1,meta56698));
});
}
return (new openthink.core.t56697(owner,rel,child_view,null));
});
openthink.core.sort_option_attrs = (function sort_option_attrs(sort_value,selected_value){var attrs = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),sort_value], null);if(cljs.core._EQ_.call(null,sort_value,selected_value))
{return cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"selected","selected",574897764),"selected");
} else
{return attrs;
}
});
openthink.core.children_view = (function children_view(data,owner){if(typeof openthink.core.t56746 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t56746 = (function (owner,data,children_view,meta56747){
this.owner = owner;
this.data = data;
this.children_view = children_view;
this.meta56747 = meta56747;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t56746.cljs$lang$type = true;
openthink.core.t56746.cljs$lang$ctorStr = "openthink.core/t56746";
openthink.core.t56746.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t56746");
});
openthink.core.t56746.prototype.om$core$IRender$ = true;
openthink.core.t56746.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var child_rel_ids = new cljs.core.Keyword(null,"child_rel_ids","child_rel_ids",890940940).cljs$core$IFn$_invoke$arity$1(openthink.core.current_post.call(null));var child_rels = openthink.core.select_values.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(self__.data),child_rel_ids);var child_pairs = cljs.core.partition_all.call(null,(2),cljs.core.filter.call(null,cljs.core.identity,child_rels));return React.DOM.div({"className": "children-view"},React.DOM.div({"className": "row reply-action"},React.DOM.button({"onClick": ((function (child_rel_ids,child_rels,child_pairs,___$1){
return (function (){om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"reply-to","reply-to",-145674792),new cljs.core.Keyword(null,"current_post","current_post",2072811381).cljs$core$IFn$_invoke$arity$1(self__.data));
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.Keyword(null,"new-post","new-post",-1808203791));
});})(child_rel_ids,child_rels,child_pairs,___$1))
, "className": "button expand large reply-btn"},"Link new Post")),((cljs.core.empty_QMARK_.call(null,child_pairs))?React.DOM.div(null,"No children"):React.DOM.span(null,React.DOM.div({"className": "row child-sort-section"},sablono.interpreter.interpret.call(null,(function (){var sval = new cljs.core.Keyword(null,"sort-value","sort-value",-585546274).cljs$core$IFn$_invoke$arity$1(self__.data);var sort_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"sort-chan","sort-chan",-493870758));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (sval,sort_ch,child_rel_ids,child_rels,child_pairs,___$1){
return (function (p1__56705_SHARP_){return cljs.core.async.put_BANG_.call(null,sort_ch,p1__56705_SHARP_.target.value);
});})(sval,sort_ch,child_rel_ids,child_rels,child_pairs,___$1))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),openthink.core.sort_option_attrs.call(null,"top",sval),"Top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),openthink.core.sort_option_attrs.call(null,"new",sval),"Newest"], null)], null);
})())),cljs.core.into_array.call(null,(function (){var iter__4385__auto__ = ((function (child_rel_ids,child_rels,child_pairs,___$1){
return (function iter__56751(s__56752){return (new cljs.core.LazySeq(null,((function (child_rel_ids,child_rels,child_pairs,___$1){
return (function (){var s__56752__$1 = s__56752;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__56752__$1);if(temp__4126__auto__)
{var s__56752__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__56752__$2))
{var c__4383__auto__ = cljs.core.chunk_first.call(null,s__56752__$2);var size__4384__auto__ = cljs.core.count.call(null,c__4383__auto__);var b__56754 = cljs.core.chunk_buffer.call(null,size__4384__auto__);if((function (){var i__56753 = (0);while(true){
if((i__56753 < size__4384__auto__))
{var child = cljs.core._nth.call(null,c__4383__auto__,i__56753);cljs.core.chunk_append.call(null,b__56754,React.DOM.div({"className": "row"},sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.core.child_view,child))));
{
var G__56786 = (i__56753 + (1));
i__56753 = G__56786;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56754),iter__56751.call(null,cljs.core.chunk_rest.call(null,s__56752__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56754),null);
}
} else
{var child = cljs.core.first.call(null,s__56752__$2);return cljs.core.cons.call(null,React.DOM.div({"className": "row"},sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.core.child_view,child))),iter__56751.call(null,cljs.core.rest.call(null,s__56752__$2)));
}
} else
{return null;
}
break;
}
});})(child_rel_ids,child_rels,child_pairs,___$1))
,null,null));
});})(child_rel_ids,child_rels,child_pairs,___$1))
;return iter__4385__auto__.call(null,cljs.core.filter.call(null,cljs.core.identity,child_rels));
})()))));
});
openthink.core.t56746.prototype.om$core$IWillMount$ = true;
openthink.core.t56746.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var sort_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"sort-chan","sort-chan",-493870758));var c__6596__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto__,sort_ch,___$1){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto__,sort_ch,___$1){
return (function (state_56774){var state_val_56775 = (state_56774[(1)]);if((state_val_56775 === (4)))
{var inst_56757 = (state_56774[(2)]);var inst_56758 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"sorting","sorting",622249690));var inst_56759 = om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"sort-value","sort-value",-585546274),inst_56757);var inst_56760 = new cljs.core.Keyword(null,"current_post","current_post",2072811381).cljs$core$IFn$_invoke$arity$1(self__.data);var inst_56761 = ("/children/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_56760));var inst_56762 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];var inst_56763 = ["sort"];var inst_56764 = [inst_56757];var inst_56765 = cljs.core.PersistentHashMap.fromArrays(inst_56763,inst_56764);var inst_56766 = (function (){var new_sort_val = inst_56757;return ((function (new_sort_val,inst_56757,inst_56758,inst_56759,inst_56760,inst_56761,inst_56762,inst_56763,inst_56764,inst_56765,state_val_56775,c__6596__auto__,sort_ch,___$1){
return (function (resp){cljs.core.println.call(null,"sort returned");
var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);cljs.core.println.call(null,resp__$1);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795));
if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032)))
{return null;
} else
{om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"posts","posts",760043164),cljs.core.merge,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(resp__$1));
om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.merge,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(resp__$1));
return om.core.update_BANG_.call(null,openthink.core.current_post.call(null),new cljs.core.Keyword(null,"child_rel_ids","child_rel_ids",890940940),new cljs.core.Keyword(null,"new_rel_ids","new_rel_ids",701283960).cljs$core$IFn$_invoke$arity$1(resp__$1));
}
});
;})(new_sort_val,inst_56757,inst_56758,inst_56759,inst_56760,inst_56761,inst_56762,inst_56763,inst_56764,inst_56765,state_val_56775,c__6596__auto__,sort_ch,___$1))
})();var inst_56767 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_56765,inst_56766];var inst_56768 = cljs.core.PersistentHashMap.fromArrays(inst_56762,inst_56767);var inst_56769 = ajax.core.GET.call(null,inst_56761,inst_56768);var state_56774__$1 = (function (){var statearr_56776 = state_56774;(statearr_56776[(7)] = inst_56769);
(statearr_56776[(8)] = inst_56759);
(statearr_56776[(9)] = inst_56758);
return statearr_56776;
})();var statearr_56777_56787 = state_56774__$1;(statearr_56777_56787[(2)] = null);
(statearr_56777_56787[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56775 === (3)))
{var inst_56772 = (state_56774[(2)]);var state_56774__$1 = state_56774;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56774__$1,inst_56772);
} else
{if((state_val_56775 === (2)))
{var state_56774__$1 = state_56774;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56774__$1,(4),sort_ch);
} else
{if((state_val_56775 === (1)))
{var state_56774__$1 = state_56774;var statearr_56778_56788 = state_56774__$1;(statearr_56778_56788[(2)] = null);
(statearr_56778_56788[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6596__auto__,sort_ch,___$1))
;return ((function (switch__6581__auto__,c__6596__auto__,sort_ch,___$1){
return (function() {
var state_machine__6582__auto__ = null;
var state_machine__6582__auto____0 = (function (){var statearr_56782 = [null,null,null,null,null,null,null,null,null,null];(statearr_56782[(0)] = state_machine__6582__auto__);
(statearr_56782[(1)] = (1));
return statearr_56782;
});
var state_machine__6582__auto____1 = (function (state_56774){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_56774);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e56783){if((e56783 instanceof Object))
{var ex__6585__auto__ = e56783;var statearr_56784_56789 = state_56774;(statearr_56784_56789[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56774);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e56783;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56790 = state_56774;
state_56774 = G__56790;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_56774){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_56774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto__,sort_ch,___$1))
})();var state__6598__auto__ = (function (){var statearr_56785 = f__6597__auto__.call(null);(statearr_56785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto__);
return statearr_56785;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto__,sort_ch,___$1))
);
return c__6596__auto__;
});
openthink.core.t56746.prototype.om$core$IInitState$ = true;
openthink.core.t56746.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sort-chan","sort-chan",-493870758),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795)], null);
});
openthink.core.t56746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56748){var self__ = this;
var _56748__$1 = this;return self__.meta56747;
});
openthink.core.t56746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56748,meta56747__$1){var self__ = this;
var _56748__$1 = this;return (new openthink.core.t56746(self__.owner,self__.data,self__.children_view,meta56747__$1));
});
openthink.core.__GT_t56746 = (function __GT_t56746(owner__$1,data__$1,children_view__$1,meta56747){return (new openthink.core.t56746(owner__$1,data__$1,children_view__$1,meta56747));
});
}
return (new openthink.core.t56746(owner,data,children_view,null));
});
openthink.core.comment_view = (function comment_view(comment,owner){if(typeof openthink.core.t56796 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t56796 = (function (owner,comment,comment_view,meta56797){
this.owner = owner;
this.comment = comment;
this.comment_view = comment_view;
this.meta56797 = meta56797;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t56796.cljs$lang$type = true;
openthink.core.t56796.cljs$lang$ctorStr = "openthink.core/t56796";
openthink.core.t56796.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t56796");
});
openthink.core.t56796.prototype.om$core$IRender$ = true;
openthink.core.t56796.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "comment", "id": ("comment-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.comment)))},React.DOM.hr(null),React.DOM.span({"className": "comment-userbit"},React.DOM.strong({"className": "comment-user"},sablono.interpreter.interpret.call(null,cljs.core.get_in.call(null,self__.comment,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"username","username",1605666410)], null)))),React.DOM.span({"className": "comment-datebit"},sablono.interpreter.interpret.call(null,(" | "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(openthink.core.date.call(null,new cljs.core.Keyword(null,"time_posted","time_posted",-32907602).cljs$core$IFn$_invoke$arity$1(self__.comment))))))),React.DOM.div({"className": "comment-body"},sablono.interpreter.interpret.call(null,openthink.core.render_text.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(self__.comment)))));
});
openthink.core.t56796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56798){var self__ = this;
var _56798__$1 = this;return self__.meta56797;
});
openthink.core.t56796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56798,meta56797__$1){var self__ = this;
var _56798__$1 = this;return (new openthink.core.t56796(self__.owner,self__.comment,self__.comment_view,meta56797__$1));
});
openthink.core.__GT_t56796 = (function __GT_t56796(owner__$1,comment__$1,comment_view__$1,meta56797){return (new openthink.core.t56796(owner__$1,comment__$1,comment_view__$1,meta56797));
});
}
return (new openthink.core.t56796(owner,comment,comment_view,null));
});
openthink.core.comment_form = (function comment_form(data,owner){if(typeof openthink.core.t56860 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t56860 = (function (owner,data,comment_form,meta56861){
this.owner = owner;
this.data = data;
this.comment_form = comment_form;
this.meta56861 = meta56861;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t56860.cljs$lang$type = true;
openthink.core.t56860.cljs$lang$ctorStr = "openthink.core/t56860";
openthink.core.t56860.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t56860");
});
openthink.core.t56860.prototype.om$core$IRender$ = true;
openthink.core.t56860.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.form({"onSubmit": ((function (this$__$1){
return (function (e){var c__6596__auto___56917 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto___56917,this$__$1){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto___56917,this$__$1){
return (function (state_56869){var state_val_56870 = (state_56869[(1)]);if((state_val_56870 === (2)))
{var inst_56867 = (state_56869[(2)]);var state_56869__$1 = state_56869;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56869__$1,inst_56867);
} else
{if((state_val_56870 === (1)))
{var inst_56865 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"comment-chan","comment-chan",-1616079298));var state_56869__$1 = state_56869;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56869__$1,(2),inst_56865,(1));
} else
{return null;
}
}
});})(c__6596__auto___56917,this$__$1))
;return ((function (switch__6581__auto__,c__6596__auto___56917,this$__$1){
return (function() {
var state_machine__6582__auto__ = null;
var state_machine__6582__auto____0 = (function (){var statearr_56874 = [null,null,null,null,null,null,null];(statearr_56874[(0)] = state_machine__6582__auto__);
(statearr_56874[(1)] = (1));
return statearr_56874;
});
var state_machine__6582__auto____1 = (function (state_56869){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_56869);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e56875){if((e56875 instanceof Object))
{var ex__6585__auto__ = e56875;var statearr_56876_56918 = state_56869;(statearr_56876_56918[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56869);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e56875;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56919 = state_56869;
state_56869 = G__56919;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_56869){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_56869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto___56917,this$__$1))
})();var state__6598__auto__ = (function (){var statearr_56877 = f__6597__auto__.call(null);(statearr_56877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto___56917);
return statearr_56877;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto___56917,this$__$1))
);
e.preventDefault();
return false;
});})(this$__$1))
},React.DOM.div({"className": "row"},React.DOM.div({"className": "large-11 columns"},sablono.interpreter.textarea.call(null,{"placeholder": "Post a comment", "name": "comment-body", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"body","body",-2049205669)), "onChange": ((function (this$__$1){
return (function (p1__56802_SHARP_){return openthink.core.handle_change.call(null,p1__56802_SHARP_,self__.owner,new cljs.core.Keyword(null,"body","body",-2049205669));
});})(this$__$1))
}),React.DOM.button({"type": "submit", "className": "button tiny"},"comment"))));
});
openthink.core.t56860.prototype.om$core$IWillMount$ = true;
openthink.core.t56860.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var comment_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"comment-chan","comment-chan",-1616079298));var c__6596__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto__,comment_chan,___$1){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto__,comment_chan,___$1){
return (function (state_56901){var state_val_56902 = (state_56901[(1)]);if((state_val_56902 === (7)))
{var inst_56881 = (state_56901[(2)]);var inst_56882 = cljs.core.println.call(null,"making comment");var inst_56883 = new cljs.core.Keyword(null,"current_post","current_post",2072811381).cljs$core$IFn$_invoke$arity$1(self__.data);var inst_56884 = ("/post/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_56883)+"/comment");var inst_56885 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];var inst_56886 = ["body"];var inst_56887 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"body","body",-2049205669));var inst_56888 = [inst_56887];var inst_56889 = cljs.core.PersistentHashMap.fromArrays(inst_56886,inst_56888);var inst_56890 = (function (){return ((function (inst_56881,inst_56882,inst_56883,inst_56884,inst_56885,inst_56886,inst_56887,inst_56888,inst_56889,state_val_56902,c__6596__auto__,comment_chan,___$1){
return (function (resp){cljs.core.println.call(null,"comment-form returned");
cljs.core.println.call(null,resp);
var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032)))
{return null;
} else
{return om.core.transact_BANG_.call(null,self__.data,((function (resp__$1,inst_56881,inst_56882,inst_56883,inst_56884,inst_56885,inst_56886,inst_56887,inst_56888,inst_56889,state_val_56902,c__6596__auto__,comment_chan,___$1){
return (function (p1__56801_SHARP_){return cljs.core.merge.call(null,p1__56801_SHARP_,resp__$1);
});})(resp__$1,inst_56881,inst_56882,inst_56883,inst_56884,inst_56885,inst_56886,inst_56887,inst_56888,inst_56889,state_val_56902,c__6596__auto__,comment_chan,___$1))
);
}
});
;})(inst_56881,inst_56882,inst_56883,inst_56884,inst_56885,inst_56886,inst_56887,inst_56888,inst_56889,state_val_56902,c__6596__auto__,comment_chan,___$1))
})();var inst_56891 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_56889,inst_56890];var inst_56892 = cljs.core.PersistentHashMap.fromArrays(inst_56885,inst_56891);var inst_56893 = ajax.core.POST.call(null,inst_56884,inst_56892);var state_56901__$1 = (function (){var statearr_56903 = state_56901;(statearr_56903[(7)] = inst_56881);
(statearr_56903[(8)] = inst_56882);
(statearr_56903[(9)] = inst_56893);
return statearr_56903;
})();var statearr_56904_56920 = state_56901__$1;(statearr_56904_56920[(2)] = null);
(statearr_56904_56920[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56902 === (6)))
{var inst_56897 = (state_56901[(2)]);var state_56901__$1 = state_56901;var statearr_56905_56921 = state_56901__$1;(statearr_56905_56921[(2)] = inst_56897);
(statearr_56905_56921[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56902 === (5)))
{var state_56901__$1 = state_56901;var statearr_56906_56922 = state_56901__$1;(statearr_56906_56922[(2)] = null);
(statearr_56906_56922[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56902 === (4)))
{var state_56901__$1 = state_56901;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56901__$1,(7),comment_chan);
} else
{if((state_val_56902 === (3)))
{var inst_56899 = (state_56901[(2)]);var state_56901__$1 = state_56901;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56901__$1,inst_56899);
} else
{if((state_val_56902 === (2)))
{var state_56901__$1 = state_56901;var statearr_56907_56923 = state_56901__$1;(statearr_56907_56923[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56902 === (1)))
{var state_56901__$1 = state_56901;var statearr_56909_56924 = state_56901__$1;(statearr_56909_56924[(2)] = null);
(statearr_56909_56924[(1)] = (2));
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
var state_machine__6582__auto____0 = (function (){var statearr_56913 = [null,null,null,null,null,null,null,null,null,null];(statearr_56913[(0)] = state_machine__6582__auto__);
(statearr_56913[(1)] = (1));
return statearr_56913;
});
var state_machine__6582__auto____1 = (function (state_56901){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_56901);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e56914){if((e56914 instanceof Object))
{var ex__6585__auto__ = e56914;var statearr_56915_56925 = state_56901;(statearr_56915_56925[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56901);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e56914;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56926 = state_56901;
state_56901 = G__56926;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_56901){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_56901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto__,comment_chan,___$1))
})();var state__6598__auto__ = (function (){var statearr_56916 = f__6597__auto__.call(null);(statearr_56916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto__);
return statearr_56916;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto__,comment_chan,___$1))
);
return c__6596__auto__;
});
openthink.core.t56860.prototype.om$core$IInitState$ = true;
openthink.core.t56860.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comment-chan","comment-chan",-1616079298),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"body","body",-2049205669),""], null);
});
openthink.core.t56860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56862){var self__ = this;
var _56862__$1 = this;return self__.meta56861;
});
openthink.core.t56860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56862,meta56861__$1){var self__ = this;
var _56862__$1 = this;return (new openthink.core.t56860(self__.owner,self__.data,self__.comment_form,meta56861__$1));
});
openthink.core.__GT_t56860 = (function __GT_t56860(owner__$1,data__$1,comment_form__$1,meta56861){return (new openthink.core.t56860(owner__$1,data__$1,comment_form__$1,meta56861));
});
}
return (new openthink.core.t56860(owner,data,comment_form,null));
});
openthink.core.comments_view = (function comments_view(data,owner){if(typeof openthink.core.t56936 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t56936 = (function (owner,data,comments_view,meta56937){
this.owner = owner;
this.data = data;
this.comments_view = comments_view;
this.meta56937 = meta56937;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t56936.cljs$lang$type = true;
openthink.core.t56936.cljs$lang$ctorStr = "openthink.core/t56936";
openthink.core.t56936.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t56936");
});
openthink.core.t56936.prototype.om$core$IRender$ = true;
openthink.core.t56936.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var comments = openthink.core.comments_cursor.call(null);return React.DOM.div({"className": "comments-view row"},(cljs.core.truth_(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(self__.data))?sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.core.comment_form,self__.data)):React.DOM.strong(null,"You must be logged in to comment on a post")),sablono.interpreter.interpret.call(null,((!(cljs.core.empty_QMARK_.call(null,comments)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Comments:"], null),(function (){var iter__4385__auto__ = ((function (comments,___$1){
return (function iter__56941(s__56942){return (new cljs.core.LazySeq(null,((function (comments,___$1){
return (function (){var s__56942__$1 = s__56942;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__56942__$1);if(temp__4126__auto__)
{var s__56942__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__56942__$2))
{var c__4383__auto__ = cljs.core.chunk_first.call(null,s__56942__$2);var size__4384__auto__ = cljs.core.count.call(null,c__4383__auto__);var b__56944 = cljs.core.chunk_buffer.call(null,size__4384__auto__);if((function (){var i__56943 = (0);while(true){
if((i__56943 < size__4384__auto__))
{var comment = cljs.core._nth.call(null,c__4383__auto__,i__56943);cljs.core.chunk_append.call(null,b__56944,om.core.build.call(null,openthink.core.comment_view,comment));
{
var G__56945 = (i__56943 + (1));
i__56943 = G__56945;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56944),iter__56941.call(null,cljs.core.chunk_rest.call(null,s__56942__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56944),null);
}
} else
{var comment = cljs.core.first.call(null,s__56942__$2);return cljs.core.cons.call(null,om.core.build.call(null,openthink.core.comment_view,comment),iter__56941.call(null,cljs.core.rest.call(null,s__56942__$2)));
}
} else
{return null;
}
break;
}
});})(comments,___$1))
,null,null));
});})(comments,___$1))
;return iter__4385__auto__.call(null,comments);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No comments yet"], null))));
});
openthink.core.t56936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56938){var self__ = this;
var _56938__$1 = this;return self__.meta56937;
});
openthink.core.t56936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56938,meta56937__$1){var self__ = this;
var _56938__$1 = this;return (new openthink.core.t56936(self__.owner,self__.data,self__.comments_view,meta56937__$1));
});
openthink.core.__GT_t56936 = (function __GT_t56936(owner__$1,data__$1,comments_view__$1,meta56937){return (new openthink.core.t56936(owner__$1,data__$1,comments_view__$1,meta56937));
});
}
return (new openthink.core.t56936(owner,data,comments_view,null));
});
openthink.core.submit_form = (function submit_form(data,owner,p__56949){var map__57027 = p__56949;var map__57027__$1 = ((cljs.core.seq_QMARK_.call(null,map__57027))?cljs.core.apply.call(null,cljs.core.hash_map,map__57027):map__57027);var opts = map__57027__$1;var close_chan = cljs.core.get.call(null,map__57027__$1,new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891));if(typeof openthink.core.t57028 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t57028 = (function (close_chan,opts,map__57027,p__56949,owner,data,submit_form,meta57029){
this.close_chan = close_chan;
this.opts = opts;
this.map__57027 = map__57027;
this.p__56949 = p__56949;
this.owner = owner;
this.data = data;
this.submit_form = submit_form;
this.meta57029 = meta57029;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t57028.cljs$lang$type = true;
openthink.core.t57028.cljs$lang$ctorStr = "openthink.core/t57028";
openthink.core.t57028.cljs$lang$ctorPrWriter = ((function (map__57027,map__57027__$1,opts,close_chan){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t57028");
});})(map__57027,map__57027__$1,opts,close_chan))
;
openthink.core.t57028.prototype.om$core$IRender$ = true;
openthink.core.t57028.prototype.om$core$IRender$render$arity$1 = ((function (map__57027,map__57027__$1,opts,close_chan){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.form({"onSubmit": ((function (this$__$1,map__57027,map__57027__$1,opts,close_chan){
return (function (e){var c__6596__auto___57104 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto___57104,this$__$1,map__57027,map__57027__$1,opts,close_chan){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto___57104,this$__$1,map__57027,map__57027__$1,opts,close_chan){
return (function (state_57039){var state_val_57040 = (state_57039[(1)]);if((state_val_57040 === (2)))
{var inst_57037 = (state_57039[(2)]);var state_57039__$1 = state_57039;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57039__$1,inst_57037);
} else
{if((state_val_57040 === (1)))
{var inst_57035 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"submit-chan","submit-chan",1225988800));var state_57039__$1 = state_57039;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57039__$1,(2),inst_57035,(1));
} else
{return null;
}
}
});})(c__6596__auto___57104,this$__$1,map__57027,map__57027__$1,opts,close_chan))
;return ((function (switch__6581__auto__,c__6596__auto___57104,this$__$1,map__57027,map__57027__$1,opts,close_chan){
return (function() {
var state_machine__6582__auto__ = null;
var state_machine__6582__auto____0 = (function (){var statearr_57044 = [null,null,null,null,null,null,null];(statearr_57044[(0)] = state_machine__6582__auto__);
(statearr_57044[(1)] = (1));
return statearr_57044;
});
var state_machine__6582__auto____1 = (function (state_57039){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_57039);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e57045){if((e57045 instanceof Object))
{var ex__6585__auto__ = e57045;var statearr_57046_57105 = state_57039;(statearr_57046_57105[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57039);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e57045;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57106 = state_57039;
state_57039 = G__57106;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_57039){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_57039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto___57104,this$__$1,map__57027,map__57027__$1,opts,close_chan))
})();var state__6598__auto__ = (function (){var statearr_57047 = f__6597__auto__.call(null);(statearr_57047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto___57104);
return statearr_57047;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto___57104,this$__$1,map__57027,map__57027__$1,opts,close_chan))
);
e.preventDefault();
return false;
});})(this$__$1,map__57027,map__57027__$1,opts,close_chan))
},React.DOM.div({"className": "row"},React.DOM.div({"className": "large-12 columns"},React.DOM.h3(null,"Create and link a new post:"),sablono.interpreter.interpret.call(null,(function (){var temp__4126__auto__ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032));if(cljs.core.truth_(temp__4126__auto__))
{var error = temp__4126__auto__;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"alert-box warning radius"], null),error], null);
} else
{return null;
}
})()),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"posting","posting",919785887),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"alert-box info radius"], null),"Posting... Please wait"], null):null)),sablono.interpreter.input.call(null,{"type": "text", "placeholder": "optional title", "name": "post-title", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"title","title",636505583)), "onChange": ((function (this$__$1,map__57027,map__57027__$1,opts,close_chan){
return (function (p1__56947_SHARP_){return openthink.core.handle_change.call(null,p1__56947_SHARP_,self__.owner,new cljs.core.Keyword(null,"title","title",636505583));
});})(this$__$1,map__57027,map__57027__$1,opts,close_chan))
}),sablono.interpreter.textarea.call(null,{"placeholder": "text", "name": "post-text", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697)), "onChange": ((function (this$__$1,map__57027,map__57027__$1,opts,close_chan){
return (function (p1__56948_SHARP_){return openthink.core.handle_change.call(null,p1__56948_SHARP_,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697));
});})(this$__$1,map__57027,map__57027__$1,opts,close_chan))
}),React.DOM.button({"type": "submit", "className": "button tiny"},"create"))));
});})(map__57027,map__57027__$1,opts,close_chan))
;
openthink.core.t57028.prototype.om$core$IWillMount$ = true;
openthink.core.t57028.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__57027,map__57027__$1,opts,close_chan){
return (function (_){var self__ = this;
var ___$1 = this;var submit_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"submit-chan","submit-chan",1225988800));var c__6596__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto__,submit_chan,___$1,map__57027,map__57027__$1,opts,close_chan){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto__,submit_chan,___$1,map__57027,map__57027__$1,opts,close_chan){
return (function (state_57083){var state_val_57084 = (state_57083[(1)]);if((state_val_57084 === (7)))
{var inst_57051 = (state_57083[(2)]);var inst_57052 = cljs.core.println.call(null,"submitting post");var inst_57053 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"posting","posting",919785887));var inst_57054 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032),null);var inst_57055 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];var inst_57056 = ["title","text"];var inst_57057 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"title","title",636505583));var inst_57058 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697));var inst_57059 = [inst_57057,inst_57058];var inst_57060 = cljs.core.PersistentHashMap.fromArrays(inst_57056,inst_57059);var inst_57061 = cljs.core.PersistentVector.EMPTY_NODE;var inst_57062 = ["children"];var inst_57063 = (new cljs.core.PersistentVector(null,1,(5),inst_57061,inst_57062,null));var inst_57064 = openthink.core.ask_for.call(null,inst_57063,inst_57060);var inst_57065 = new cljs.core.Keyword(null,"reply-to","reply-to",-145674792).cljs$core$IFn$_invoke$arity$1(self__.data);var state_57083__$1 = (function (){var statearr_57085 = state_57083;(statearr_57085[(7)] = inst_57051);
(statearr_57085[(8)] = inst_57055);
(statearr_57085[(9)] = inst_57054);
(statearr_57085[(10)] = inst_57052);
(statearr_57085[(11)] = inst_57064);
(statearr_57085[(12)] = inst_57053);
return statearr_57085;
})();if(cljs.core.truth_(inst_57065))
{var statearr_57086_57107 = state_57083__$1;(statearr_57086_57107[(1)] = (8));
} else
{var statearr_57087_57108 = state_57083__$1;(statearr_57087_57108[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57084 === (1)))
{var state_57083__$1 = state_57083;var statearr_57088_57109 = state_57083__$1;(statearr_57088_57109[(2)] = null);
(statearr_57088_57109[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57084 === (4)))
{var state_57083__$1 = state_57083;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57083__$1,(7),submit_chan);
} else
{if((state_val_57084 === (6)))
{var inst_57079 = (state_57083[(2)]);var state_57083__$1 = state_57083;var statearr_57089_57110 = state_57083__$1;(statearr_57089_57110[(2)] = inst_57079);
(statearr_57089_57110[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57084 === (3)))
{var inst_57081 = (state_57083[(2)]);var state_57083__$1 = state_57083;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57083__$1,inst_57081);
} else
{if((state_val_57084 === (2)))
{var state_57083__$1 = state_57083;var statearr_57090_57111 = state_57083__$1;(statearr_57090_57111[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57084 === (9)))
{var inst_57064 = (state_57083[(11)]);var state_57083__$1 = state_57083;var statearr_57092_57112 = state_57083__$1;(statearr_57092_57112[(2)] = inst_57064);
(statearr_57092_57112[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57084 === (5)))
{var state_57083__$1 = state_57083;var statearr_57093_57113 = state_57083__$1;(statearr_57093_57113[(2)] = null);
(statearr_57093_57113[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57084 === (10)))
{var inst_57055 = (state_57083[(8)]);var inst_57071 = (state_57083[(2)]);var inst_57072 = (function (){return ((function (inst_57055,inst_57071,state_val_57084,c__6596__auto__,submit_chan,___$1,map__57027,map__57027__$1,opts,close_chan){
return (function (resp){cljs.core.println.call(null,"submit-form returned");
cljs.core.println.call(null,resp);
var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);cljs.core.println.call(null,resp__$1);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795));
if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032)))
{return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(resp__$1));
} else
{om.core.transact_BANG_.call(null,self__.data,((function (resp__$1,inst_57055,inst_57071,state_val_57084,c__6596__auto__,submit_chan,___$1,map__57027,map__57027__$1,opts,close_chan){
return (function (p1__56946_SHARP_){return cljs.core.merge.call(null,p1__56946_SHARP_,resp__$1);
});})(resp__$1,inst_57055,inst_57071,state_val_57084,c__6596__auto__,submit_chan,___$1,map__57027,map__57027__$1,opts,close_chan))
);
return cljs.core.async.put_BANG_.call(null,self__.close_chan,(1));
}
});
;})(inst_57055,inst_57071,state_val_57084,c__6596__auto__,submit_chan,___$1,map__57027,map__57027__$1,opts,close_chan))
})();var inst_57073 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_57071,inst_57072];var inst_57074 = cljs.core.PersistentHashMap.fromArrays(inst_57055,inst_57073);var inst_57075 = ajax.core.POST.call(null,"/submit-post",inst_57074);var state_57083__$1 = (function (){var statearr_57094 = state_57083;(statearr_57094[(13)] = inst_57075);
return statearr_57094;
})();var statearr_57095_57114 = state_57083__$1;(statearr_57095_57114[(2)] = null);
(statearr_57095_57114[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57084 === (8)))
{var inst_57064 = (state_57083[(11)]);var inst_57067 = new cljs.core.Keyword(null,"reply-to","reply-to",-145674792).cljs$core$IFn$_invoke$arity$1(self__.data);var inst_57068 = cljs.core.assoc.call(null,inst_57064,"parent",inst_57067);var state_57083__$1 = state_57083;var statearr_57096_57115 = state_57083__$1;(statearr_57096_57115[(2)] = inst_57068);
(statearr_57096_57115[(1)] = (10));
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
});})(c__6596__auto__,submit_chan,___$1,map__57027,map__57027__$1,opts,close_chan))
;return ((function (switch__6581__auto__,c__6596__auto__,submit_chan,___$1,map__57027,map__57027__$1,opts,close_chan){
return (function() {
var state_machine__6582__auto__ = null;
var state_machine__6582__auto____0 = (function (){var statearr_57100 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_57100[(0)] = state_machine__6582__auto__);
(statearr_57100[(1)] = (1));
return statearr_57100;
});
var state_machine__6582__auto____1 = (function (state_57083){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_57083);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e57101){if((e57101 instanceof Object))
{var ex__6585__auto__ = e57101;var statearr_57102_57116 = state_57083;(statearr_57102_57116[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57083);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e57101;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57117 = state_57083;
state_57083 = G__57117;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_57083){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_57083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto__,submit_chan,___$1,map__57027,map__57027__$1,opts,close_chan))
})();var state__6598__auto__ = (function (){var statearr_57103 = f__6597__auto__.call(null);(statearr_57103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto__);
return statearr_57103;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto__,submit_chan,___$1,map__57027,map__57027__$1,opts,close_chan))
);
return c__6596__auto__;
});})(map__57027,map__57027__$1,opts,close_chan))
;
openthink.core.t57028.prototype.om$core$IInitState$ = true;
openthink.core.t57028.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__57027,map__57027__$1,opts,close_chan){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"submit-chan","submit-chan",1225988800),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"text","text",-1790561697),"",new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795)], null);
});})(map__57027,map__57027__$1,opts,close_chan))
;
openthink.core.t57028.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__57027,map__57027__$1,opts,close_chan){
return (function (_57030){var self__ = this;
var _57030__$1 = this;return self__.meta57029;
});})(map__57027,map__57027__$1,opts,close_chan))
;
openthink.core.t57028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__57027,map__57027__$1,opts,close_chan){
return (function (_57030,meta57029__$1){var self__ = this;
var _57030__$1 = this;return (new openthink.core.t57028(self__.close_chan,self__.opts,self__.map__57027,self__.p__56949,self__.owner,self__.data,self__.submit_form,meta57029__$1));
});})(map__57027,map__57027__$1,opts,close_chan))
;
openthink.core.__GT_t57028 = ((function (map__57027,map__57027__$1,opts,close_chan){
return (function __GT_t57028(close_chan__$1,opts__$1,map__57027__$2,p__56949__$1,owner__$1,data__$1,submit_form__$1,meta57029){return (new openthink.core.t57028(close_chan__$1,opts__$1,map__57027__$2,p__56949__$1,owner__$1,data__$1,submit_form__$1,meta57029));
});})(map__57027,map__57027__$1,opts,close_chan))
;
}
return (new openthink.core.t57028(close_chan,opts,map__57027__$1,p__56949,owner,data,submit_form,null));
});
openthink.core.link_form = (function link_form(data,owner,p__57120){var map__57186 = p__57120;var map__57186__$1 = ((cljs.core.seq_QMARK_.call(null,map__57186))?cljs.core.apply.call(null,cljs.core.hash_map,map__57186):map__57186);var opts = map__57186__$1;var close_chan = cljs.core.get.call(null,map__57186__$1,new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891));if(typeof openthink.core.t57187 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t57187 = (function (close_chan,opts,map__57186,p__57120,owner,data,link_form,meta57188){
this.close_chan = close_chan;
this.opts = opts;
this.map__57186 = map__57186;
this.p__57120 = p__57120;
this.owner = owner;
this.data = data;
this.link_form = link_form;
this.meta57188 = meta57188;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t57187.cljs$lang$type = true;
openthink.core.t57187.cljs$lang$ctorStr = "openthink.core/t57187";
openthink.core.t57187.cljs$lang$ctorPrWriter = ((function (map__57186,map__57186__$1,opts,close_chan){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t57187");
});})(map__57186,map__57186__$1,opts,close_chan))
;
openthink.core.t57187.prototype.om$core$IRender$ = true;
openthink.core.t57187.prototype.om$core$IRender$render$arity$1 = ((function (map__57186,map__57186__$1,opts,close_chan){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.form({"onSubmit": ((function (this$__$1,map__57186,map__57186__$1,opts,close_chan){
return (function (e){var c__6596__auto___57251 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto___57251,this$__$1,map__57186,map__57186__$1,opts,close_chan){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto___57251,this$__$1,map__57186,map__57186__$1,opts,close_chan){
return (function (state_57198){var state_val_57199 = (state_57198[(1)]);if((state_val_57199 === (2)))
{var inst_57196 = (state_57198[(2)]);var state_57198__$1 = state_57198;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57198__$1,inst_57196);
} else
{if((state_val_57199 === (1)))
{var inst_57194 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"submit-chan","submit-chan",1225988800));var state_57198__$1 = state_57198;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57198__$1,(2),inst_57194,(1));
} else
{return null;
}
}
});})(c__6596__auto___57251,this$__$1,map__57186,map__57186__$1,opts,close_chan))
;return ((function (switch__6581__auto__,c__6596__auto___57251,this$__$1,map__57186,map__57186__$1,opts,close_chan){
return (function() {
var state_machine__6582__auto__ = null;
var state_machine__6582__auto____0 = (function (){var statearr_57203 = [null,null,null,null,null,null,null];(statearr_57203[(0)] = state_machine__6582__auto__);
(statearr_57203[(1)] = (1));
return statearr_57203;
});
var state_machine__6582__auto____1 = (function (state_57198){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_57198);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e57204){if((e57204 instanceof Object))
{var ex__6585__auto__ = e57204;var statearr_57205_57252 = state_57198;(statearr_57205_57252[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57198);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e57204;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57253 = state_57198;
state_57198 = G__57253;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_57198){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_57198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto___57251,this$__$1,map__57186,map__57186__$1,opts,close_chan))
})();var state__6598__auto__ = (function (){var statearr_57206 = f__6597__auto__.call(null);(statearr_57206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto___57251);
return statearr_57206;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto___57251,this$__$1,map__57186,map__57186__$1,opts,close_chan))
);
e.preventDefault();
return false;
});})(this$__$1,map__57186,map__57186__$1,opts,close_chan))
},React.DOM.div({"className": "row"},React.DOM.div({"className": "large-12 columns"},React.DOM.h3(null,"Link an existing post:"),sablono.interpreter.interpret.call(null,(function (){var temp__4126__auto__ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032));if(cljs.core.truth_(temp__4126__auto__))
{var error = temp__4126__auto__;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"alert-box warning radius"], null),error], null);
} else
{return null;
}
})()),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"posting","posting",919785887),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"alert-box info radius"], null),"Linking... Please wait"], null):null)),sablono.interpreter.input.call(null,{"type": "text", "placeholder": "URL or ID to a post", "name": "link-text", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"link","link",-1769163468)), "onChange": ((function (this$__$1,map__57186,map__57186__$1,opts,close_chan){
return (function (p1__57119_SHARP_){return openthink.core.handle_change.call(null,p1__57119_SHARP_,self__.owner,new cljs.core.Keyword(null,"link","link",-1769163468));
});})(this$__$1,map__57186,map__57186__$1,opts,close_chan))
}),React.DOM.button({"type": "submit", "className": "button tiny"},"link"))));
});})(map__57186,map__57186__$1,opts,close_chan))
;
openthink.core.t57187.prototype.om$core$IWillMount$ = true;
openthink.core.t57187.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__57186,map__57186__$1,opts,close_chan){
return (function (_){var self__ = this;
var ___$1 = this;var submit_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"submit-chan","submit-chan",1225988800));var c__6596__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto__,submit_chan,___$1,map__57186,map__57186__$1,opts,close_chan){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto__,submit_chan,___$1,map__57186,map__57186__$1,opts,close_chan){
return (function (state_57235){var state_val_57236 = (state_57235[(1)]);if((state_val_57236 === (7)))
{var inst_57210 = (state_57235[(2)]);var inst_57211 = cljs.core.println.call(null,"linking post");var inst_57212 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"posting","posting",919785887));var inst_57213 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032),null);var inst_57214 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];var inst_57215 = cljs.core.PersistentVector.EMPTY_NODE;var inst_57216 = ["children"];var inst_57217 = (new cljs.core.PersistentVector(null,1,(5),inst_57215,inst_57216,null));var inst_57218 = ["child-text","parent"];var inst_57219 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"link","link",-1769163468));var inst_57220 = new cljs.core.Keyword(null,"current_post","current_post",2072811381).cljs$core$IFn$_invoke$arity$1(self__.data);var inst_57221 = [inst_57219,inst_57220];var inst_57222 = cljs.core.PersistentHashMap.fromArrays(inst_57218,inst_57221);var inst_57223 = openthink.core.ask_for.call(null,inst_57217,inst_57222);var inst_57224 = (function (){return ((function (inst_57210,inst_57211,inst_57212,inst_57213,inst_57214,inst_57215,inst_57216,inst_57217,inst_57218,inst_57219,inst_57220,inst_57221,inst_57222,inst_57223,state_val_57236,c__6596__auto__,submit_chan,___$1,map__57186,map__57186__$1,opts,close_chan){
return (function (resp){cljs.core.println.call(null,"link-form returned");
cljs.core.println.call(null,resp);
var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);cljs.core.println.call(null,resp__$1);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795));
if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032)))
{return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(resp__$1));
} else
{om.core.transact_BANG_.call(null,self__.data,((function (resp__$1,inst_57210,inst_57211,inst_57212,inst_57213,inst_57214,inst_57215,inst_57216,inst_57217,inst_57218,inst_57219,inst_57220,inst_57221,inst_57222,inst_57223,state_val_57236,c__6596__auto__,submit_chan,___$1,map__57186,map__57186__$1,opts,close_chan){
return (function (p1__57118_SHARP_){return cljs.core.merge.call(null,p1__57118_SHARP_,resp__$1);
});})(resp__$1,inst_57210,inst_57211,inst_57212,inst_57213,inst_57214,inst_57215,inst_57216,inst_57217,inst_57218,inst_57219,inst_57220,inst_57221,inst_57222,inst_57223,state_val_57236,c__6596__auto__,submit_chan,___$1,map__57186,map__57186__$1,opts,close_chan))
);
return cljs.core.async.put_BANG_.call(null,self__.close_chan,(1));
}
});
;})(inst_57210,inst_57211,inst_57212,inst_57213,inst_57214,inst_57215,inst_57216,inst_57217,inst_57218,inst_57219,inst_57220,inst_57221,inst_57222,inst_57223,state_val_57236,c__6596__auto__,submit_chan,___$1,map__57186,map__57186__$1,opts,close_chan))
})();var inst_57225 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_57223,inst_57224];var inst_57226 = cljs.core.PersistentHashMap.fromArrays(inst_57214,inst_57225);var inst_57227 = ajax.core.POST.call(null,"/link-post",inst_57226);var state_57235__$1 = (function (){var statearr_57237 = state_57235;(statearr_57237[(7)] = inst_57212);
(statearr_57237[(8)] = inst_57227);
(statearr_57237[(9)] = inst_57211);
(statearr_57237[(10)] = inst_57210);
(statearr_57237[(11)] = inst_57213);
return statearr_57237;
})();var statearr_57238_57254 = state_57235__$1;(statearr_57238_57254[(2)] = null);
(statearr_57238_57254[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57236 === (6)))
{var inst_57231 = (state_57235[(2)]);var state_57235__$1 = state_57235;var statearr_57239_57255 = state_57235__$1;(statearr_57239_57255[(2)] = inst_57231);
(statearr_57239_57255[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57236 === (5)))
{var state_57235__$1 = state_57235;var statearr_57240_57256 = state_57235__$1;(statearr_57240_57256[(2)] = null);
(statearr_57240_57256[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57236 === (4)))
{var state_57235__$1 = state_57235;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57235__$1,(7),submit_chan);
} else
{if((state_val_57236 === (3)))
{var inst_57233 = (state_57235[(2)]);var state_57235__$1 = state_57235;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57235__$1,inst_57233);
} else
{if((state_val_57236 === (2)))
{var state_57235__$1 = state_57235;var statearr_57241_57257 = state_57235__$1;(statearr_57241_57257[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57236 === (1)))
{var state_57235__$1 = state_57235;var statearr_57243_57258 = state_57235__$1;(statearr_57243_57258[(2)] = null);
(statearr_57243_57258[(1)] = (2));
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
});})(c__6596__auto__,submit_chan,___$1,map__57186,map__57186__$1,opts,close_chan))
;return ((function (switch__6581__auto__,c__6596__auto__,submit_chan,___$1,map__57186,map__57186__$1,opts,close_chan){
return (function() {
var state_machine__6582__auto__ = null;
var state_machine__6582__auto____0 = (function (){var statearr_57247 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_57247[(0)] = state_machine__6582__auto__);
(statearr_57247[(1)] = (1));
return statearr_57247;
});
var state_machine__6582__auto____1 = (function (state_57235){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_57235);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e57248){if((e57248 instanceof Object))
{var ex__6585__auto__ = e57248;var statearr_57249_57259 = state_57235;(statearr_57249_57259[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57235);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e57248;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57260 = state_57235;
state_57235 = G__57260;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_57235){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_57235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto__,submit_chan,___$1,map__57186,map__57186__$1,opts,close_chan))
})();var state__6598__auto__ = (function (){var statearr_57250 = f__6597__auto__.call(null);(statearr_57250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto__);
return statearr_57250;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto__,submit_chan,___$1,map__57186,map__57186__$1,opts,close_chan))
);
return c__6596__auto__;
});})(map__57186,map__57186__$1,opts,close_chan))
;
openthink.core.t57187.prototype.om$core$IInitState$ = true;
openthink.core.t57187.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__57186,map__57186__$1,opts,close_chan){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"submit-chan","submit-chan",1225988800),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"link","link",-1769163468),"",new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795)], null);
});})(map__57186,map__57186__$1,opts,close_chan))
;
openthink.core.t57187.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__57186,map__57186__$1,opts,close_chan){
return (function (_57189){var self__ = this;
var _57189__$1 = this;return self__.meta57188;
});})(map__57186,map__57186__$1,opts,close_chan))
;
openthink.core.t57187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__57186,map__57186__$1,opts,close_chan){
return (function (_57189,meta57188__$1){var self__ = this;
var _57189__$1 = this;return (new openthink.core.t57187(self__.close_chan,self__.opts,self__.map__57186,self__.p__57120,self__.owner,self__.data,self__.link_form,meta57188__$1));
});})(map__57186,map__57186__$1,opts,close_chan))
;
openthink.core.__GT_t57187 = ((function (map__57186,map__57186__$1,opts,close_chan){
return (function __GT_t57187(close_chan__$1,opts__$1,map__57186__$2,p__57120__$1,owner__$1,data__$1,link_form__$1,meta57188){return (new openthink.core.t57187(close_chan__$1,opts__$1,map__57186__$2,p__57120__$1,owner__$1,data__$1,link_form__$1,meta57188));
});})(map__57186,map__57186__$1,opts,close_chan))
;
}
return (new openthink.core.t57187(close_chan,opts,map__57186__$1,p__57120,owner,data,link_form,null));
});
openthink.core.post_reply_section = (function post_reply_section(data,owner,opts){if(typeof openthink.core.t57264 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t57264 = (function (opts,owner,data,post_reply_section,meta57265){
this.opts = opts;
this.owner = owner;
this.data = data;
this.post_reply_section = post_reply_section;
this.meta57265 = meta57265;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t57264.cljs$lang$type = true;
openthink.core.t57264.cljs$lang$ctorStr = "openthink.core/t57264";
openthink.core.t57264.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t57264");
});
openthink.core.t57264.prototype.om$core$IRender$ = true;
openthink.core.t57264.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return sablono.interpreter.interpret.call(null,((cljs.core.not.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(self__.data)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You must be logged in to submit a post. ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (this$__$1){
return (function (){return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.Keyword(null,"register","register",1968522516));
});})(this$__$1))
], null),"Register now"], null)], null):((cljs.core.not.call(null,new cljs.core.Keyword(null,"reply-to","reply-to",-145674792).cljs$core$IFn$_invoke$arity$1(self__.data)))?om.core.build.call(null,openthink.core.submit_form,self__.data):(function (){var reply_type = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"reply-type","reply-type",1565507820));return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),""], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Linking to post: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(openthink.core.current_post.call(null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (reply_type,this$__$1){
return (function (){return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"reply-to","reply-to",-145674792),null);
});})(reply_type,this$__$1))
], null)," (cancel)"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dl","dl",-2140151713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"sub-nav"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dt","dt",-368444759),"How will you reply?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),((cljs.core._EQ_.call(null,reply_type,new cljs.core.Keyword(null,"post","post",269697687)))?"active":"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (reply_type,this$__$1){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"reply-type","reply-type",1565507820),new cljs.core.Keyword(null,"post","post",269697687));
});})(reply_type,this$__$1))
], null),"Create New Post"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),((cljs.core._EQ_.call(null,reply_type,new cljs.core.Keyword(null,"link","link",-1769163468)))?"active":"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (reply_type,this$__$1){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"reply-type","reply-type",1565507820),new cljs.core.Keyword(null,"link","link",-1769163468));
});})(reply_type,this$__$1))
], null),"Link Existing Post"], null)], null)], null),(function (){var opts__$2 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891))], null)], null);if(cljs.core._EQ_.call(null,reply_type,new cljs.core.Keyword(null,"post","post",269697687)))
{return om.core.build.call(null,openthink.core.submit_form,self__.data,opts__$2);
} else
{if(cljs.core._EQ_.call(null,reply_type,new cljs.core.Keyword(null,"link","link",-1769163468)))
{return om.core.build.call(null,openthink.core.link_form,self__.data,opts__$2);
} else
{return null;
}
}
})()], null);
})())));
});
openthink.core.t57264.prototype.om$core$IInitState$ = true;
openthink.core.t57264.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reply-type","reply-type",1565507820),new cljs.core.Keyword(null,"post","post",269697687)], null);
});
openthink.core.t57264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57266){var self__ = this;
var _57266__$1 = this;return self__.meta57265;
});
openthink.core.t57264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57266,meta57265__$1){var self__ = this;
var _57266__$1 = this;return (new openthink.core.t57264(self__.opts,self__.owner,self__.data,self__.post_reply_section,meta57265__$1));
});
openthink.core.__GT_t57264 = (function __GT_t57264(opts__$1,owner__$1,data__$1,post_reply_section__$1,meta57265){return (new openthink.core.t57264(opts__$1,owner__$1,data__$1,post_reply_section__$1,meta57265));
});
}
return (new openthink.core.t57264(opts,owner,data,post_reply_section,null));
});
openthink.core.post_section = (function post_section(data,owner){if(typeof openthink.core.t57270 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t57270 = (function (owner,data,post_section,meta57271){
this.owner = owner;
this.data = data;
this.post_section = post_section;
this.meta57271 = meta57271;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t57270.cljs$lang$type = true;
openthink.core.t57270.cljs$lang$ctorStr = "openthink.core/t57270";
openthink.core.t57270.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t57270");
});
openthink.core.t57270.prototype.om$core$IRender$ = true;
openthink.core.t57270.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "post-section medium-7 columns"},sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.core.post_view,self__.data)),sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.core.comments_view,self__.data)));
});
openthink.core.t57270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57272){var self__ = this;
var _57272__$1 = this;return self__.meta57271;
});
openthink.core.t57270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57272,meta57271__$1){var self__ = this;
var _57272__$1 = this;return (new openthink.core.t57270(self__.owner,self__.data,self__.post_section,meta57271__$1));
});
openthink.core.__GT_t57270 = (function __GT_t57270(owner__$1,data__$1,post_section__$1,meta57271){return (new openthink.core.t57270(owner__$1,data__$1,post_section__$1,meta57271));
});
}
return (new openthink.core.t57270(owner,data,post_section,null));
});
openthink.core.children_section = (function children_section(data,owner){if(typeof openthink.core.t57276 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t57276 = (function (owner,data,children_section,meta57277){
this.owner = owner;
this.data = data;
this.children_section = children_section;
this.meta57277 = meta57277;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t57276.cljs$lang$type = true;
openthink.core.t57276.cljs$lang$ctorStr = "openthink.core/t57276";
openthink.core.t57276.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t57276");
});
openthink.core.t57276.prototype.om$core$IRender$ = true;
openthink.core.t57276.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "children-section medium-5 columns"},sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.core.children_view,self__.data)));
});
openthink.core.t57276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57278){var self__ = this;
var _57278__$1 = this;return self__.meta57277;
});
openthink.core.t57276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57278,meta57277__$1){var self__ = this;
var _57278__$1 = this;return (new openthink.core.t57276(self__.owner,self__.data,self__.children_section,meta57277__$1));
});
openthink.core.__GT_t57276 = (function __GT_t57276(owner__$1,data__$1,children_section__$1,meta57277){return (new openthink.core.t57276(owner__$1,data__$1,children_section__$1,meta57277));
});
}
return (new openthink.core.t57276(owner,data,children_section,null));
});
openthink.core.body = (function body(data,owner){if(typeof openthink.core.t57282 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t57282 = (function (owner,data,body,meta57283){
this.owner = owner;
this.data = data;
this.body = body;
this.meta57283 = meta57283;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t57282.cljs$lang$type = true;
openthink.core.t57282.cljs$lang$ctorStr = "openthink.core/t57282";
openthink.core.t57282.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t57282");
});
openthink.core.t57282.prototype.om$core$IRender$ = true;
openthink.core.t57282.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "main-content row"},sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.core.post_section,self__.data)),sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.core.children_section,self__.data)));
});
openthink.core.t57282.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57284){var self__ = this;
var _57284__$1 = this;return self__.meta57283;
});
openthink.core.t57282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57284,meta57283__$1){var self__ = this;
var _57284__$1 = this;return (new openthink.core.t57282(self__.owner,self__.data,self__.body,meta57283__$1));
});
openthink.core.__GT_t57282 = (function __GT_t57282(owner__$1,data__$1,body__$1,meta57283){return (new openthink.core.t57282(owner__$1,data__$1,body__$1,meta57283));
});
}
return (new openthink.core.t57282(owner,data,body,null));
});
openthink.core.basic_modal = (function basic_modal(data,owner){if(typeof openthink.core.t57290 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t57290 = (function (owner,data,basic_modal,meta57291){
this.owner = owner;
this.data = data;
this.basic_modal = basic_modal;
this.meta57291 = meta57291;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t57290.cljs$lang$type = true;
openthink.core.t57290.cljs$lang$ctorStr = "openthink.core/t57290";
openthink.core.t57290.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t57290");
});
openthink.core.t57290.prototype.om$core$IRender$ = true;
openthink.core.t57290.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.h2(null,"some modal txt");
});
openthink.core.t57290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57292){var self__ = this;
var _57292__$1 = this;return self__.meta57291;
});
openthink.core.t57290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57292,meta57291__$1){var self__ = this;
var _57292__$1 = this;return (new openthink.core.t57290(self__.owner,self__.data,self__.basic_modal,meta57291__$1));
});
openthink.core.__GT_t57290 = (function __GT_t57290(owner__$1,data__$1,basic_modal__$1,meta57291){return (new openthink.core.t57290(owner__$1,data__$1,basic_modal__$1,meta57291));
});
}
return (new openthink.core.t57290(owner,data,basic_modal,null));
});
openthink.core.modal_map = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"basic","basic",1043717368),openthink.core.basic_modal,new cljs.core.Keyword(null,"new-post","new-post",-1808203791),openthink.core.post_reply_section,new cljs.core.Keyword(null,"register","register",1968522516),openthink.core.register_form], null);
openthink.core.close_modal = (function close_modal(){cljs.core.println.call(null,"modal should be closing");
return cljs.core.swap_BANG_.call(null,openthink.core.app_state,cljs.core.dissoc,new cljs.core.Keyword(null,"modal","modal",-1031880850));
});
/**
* reusable modal component.
* modal-view is the component that should be rendered as a modal
*/
openthink.core.modal = (function modal(cursor,owner,p__57295){var map__57340 = p__57295;var map__57340__$1 = ((cljs.core.seq_QMARK_.call(null,map__57340))?cljs.core.apply.call(null,cljs.core.hash_map,map__57340):map__57340);var modal_view = cljs.core.get.call(null,map__57340__$1,new cljs.core.Keyword(null,"modal-view","modal-view",-1572274108));if(typeof openthink.core.t57341 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t57341 = (function (modal_view,map__57340,p__57295,owner,cursor,modal,meta57342){
this.modal_view = modal_view;
this.map__57340 = map__57340;
this.p__57295 = p__57295;
this.owner = owner;
this.cursor = cursor;
this.modal = modal;
this.meta57342 = meta57342;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t57341.cljs$lang$type = true;
openthink.core.t57341.cljs$lang$ctorStr = "openthink.core/t57341";
openthink.core.t57341.cljs$lang$ctorPrWriter = ((function (map__57340,map__57340__$1,modal_view){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t57341");
});})(map__57340,map__57340__$1,modal_view))
;
openthink.core.t57341.prototype.om$core$IRender$ = true;
openthink.core.t57341.prototype.om$core$IRender$render$arity$1 = ((function (map__57340,map__57340__$1,modal_view){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"className": "reveal-modal-bg", "style": cljs.core.clj__GT_js.call(null,{"display": "block"})}),React.DOM.div({"id": "myModal", "className": "reveal-modal open", "style": cljs.core.clj__GT_js.call(null,{"opacity": (1), "top": "88px", "display": "block", "visibility": "visible"})},sablono.interpreter.interpret.call(null,om.core.build.call(null,self__.modal_view,self__.cursor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891))], null)], null)))));
});})(map__57340,map__57340__$1,modal_view))
;
openthink.core.t57341.prototype.om$core$IDidMount$ = true;
openthink.core.t57341.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__57340,map__57340__$1,modal_view){
return (function (_){var self__ = this;
var ___$1 = this;var outside_clicks = openthink.core.listen.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("reveal-modal-bg"))[(0)]),"click");var c__6596__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto__,outside_clicks,___$1,map__57340,map__57340__$1,modal_view){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto__,outside_clicks,___$1,map__57340,map__57340__$1,modal_view){
return (function (state_57353){var state_val_57354 = (state_57353[(1)]);if((state_val_57354 === (4)))
{var inst_57348 = (state_57353[(2)]);var inst_57349 = openthink.core.close_modal.call(null);var state_57353__$1 = (function (){var statearr_57355 = state_57353;(statearr_57355[(7)] = inst_57348);
return statearr_57355;
})();var statearr_57356_57384 = state_57353__$1;(statearr_57356_57384[(2)] = inst_57349);
(statearr_57356_57384[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57354 === (3)))
{var inst_57351 = (state_57353[(2)]);var state_57353__$1 = state_57353;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57353__$1,inst_57351);
} else
{if((state_val_57354 === (2)))
{var state_57353__$1 = state_57353;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57353__$1,(4),outside_clicks);
} else
{if((state_val_57354 === (1)))
{var state_57353__$1 = state_57353;var statearr_57357_57385 = state_57353__$1;(statearr_57357_57385[(2)] = null);
(statearr_57357_57385[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6596__auto__,outside_clicks,___$1,map__57340,map__57340__$1,modal_view))
;return ((function (switch__6581__auto__,c__6596__auto__,outside_clicks,___$1,map__57340,map__57340__$1,modal_view){
return (function() {
var state_machine__6582__auto__ = null;
var state_machine__6582__auto____0 = (function (){var statearr_57361 = [null,null,null,null,null,null,null,null];(statearr_57361[(0)] = state_machine__6582__auto__);
(statearr_57361[(1)] = (1));
return statearr_57361;
});
var state_machine__6582__auto____1 = (function (state_57353){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_57353);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e57362){if((e57362 instanceof Object))
{var ex__6585__auto__ = e57362;var statearr_57363_57386 = state_57353;(statearr_57363_57386[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57353);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e57362;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57387 = state_57353;
state_57353 = G__57387;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_57353){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_57353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto__,outside_clicks,___$1,map__57340,map__57340__$1,modal_view))
})();var state__6598__auto__ = (function (){var statearr_57364 = f__6597__auto__.call(null);(statearr_57364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto__);
return statearr_57364;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto__,outside_clicks,___$1,map__57340,map__57340__$1,modal_view))
);
return c__6596__auto__;
});})(map__57340,map__57340__$1,modal_view))
;
openthink.core.t57341.prototype.om$core$IWillMount$ = true;
openthink.core.t57341.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__57340,map__57340__$1,modal_view){
return (function (_){var self__ = this;
var ___$1 = this;var close_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891));var c__6596__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto__,close_chan,___$1,map__57340,map__57340__$1,modal_view){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto__,close_chan,___$1,map__57340,map__57340__$1,modal_view){
return (function (state_57372){var state_val_57373 = (state_57372[(1)]);if((state_val_57373 === (4)))
{var inst_57367 = (state_57372[(2)]);var inst_57368 = openthink.core.close_modal.call(null);var state_57372__$1 = (function (){var statearr_57374 = state_57372;(statearr_57374[(7)] = inst_57367);
return statearr_57374;
})();var statearr_57375_57388 = state_57372__$1;(statearr_57375_57388[(2)] = inst_57368);
(statearr_57375_57388[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57373 === (3)))
{var inst_57370 = (state_57372[(2)]);var state_57372__$1 = state_57372;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57372__$1,inst_57370);
} else
{if((state_val_57373 === (2)))
{var state_57372__$1 = state_57372;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57372__$1,(4),close_chan);
} else
{if((state_val_57373 === (1)))
{var state_57372__$1 = state_57372;var statearr_57376_57389 = state_57372__$1;(statearr_57376_57389[(2)] = null);
(statearr_57376_57389[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6596__auto__,close_chan,___$1,map__57340,map__57340__$1,modal_view))
;return ((function (switch__6581__auto__,c__6596__auto__,close_chan,___$1,map__57340,map__57340__$1,modal_view){
return (function() {
var state_machine__6582__auto__ = null;
var state_machine__6582__auto____0 = (function (){var statearr_57380 = [null,null,null,null,null,null,null,null];(statearr_57380[(0)] = state_machine__6582__auto__);
(statearr_57380[(1)] = (1));
return statearr_57380;
});
var state_machine__6582__auto____1 = (function (state_57372){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_57372);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e57381){if((e57381 instanceof Object))
{var ex__6585__auto__ = e57381;var statearr_57382_57390 = state_57372;(statearr_57382_57390[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57372);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e57381;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57391 = state_57372;
state_57372 = G__57391;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_57372){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_57372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto__,close_chan,___$1,map__57340,map__57340__$1,modal_view))
})();var state__6598__auto__ = (function (){var statearr_57383 = f__6597__auto__.call(null);(statearr_57383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto__);
return statearr_57383;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto__,close_chan,___$1,map__57340,map__57340__$1,modal_view))
);
return c__6596__auto__;
});})(map__57340,map__57340__$1,modal_view))
;
openthink.core.t57341.prototype.om$core$IInitState$ = true;
openthink.core.t57341.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__57340,map__57340__$1,modal_view){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891),cljs.core.async.chan.call(null)], null);
});})(map__57340,map__57340__$1,modal_view))
;
openthink.core.t57341.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__57340,map__57340__$1,modal_view){
return (function (_57343){var self__ = this;
var _57343__$1 = this;return self__.meta57342;
});})(map__57340,map__57340__$1,modal_view))
;
openthink.core.t57341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__57340,map__57340__$1,modal_view){
return (function (_57343,meta57342__$1){var self__ = this;
var _57343__$1 = this;return (new openthink.core.t57341(self__.modal_view,self__.map__57340,self__.p__57295,self__.owner,self__.cursor,self__.modal,meta57342__$1));
});})(map__57340,map__57340__$1,modal_view))
;
openthink.core.__GT_t57341 = ((function (map__57340,map__57340__$1,modal_view){
return (function __GT_t57341(modal_view__$1,map__57340__$2,p__57295__$1,owner__$1,cursor__$1,modal__$1,meta57342){return (new openthink.core.t57341(modal_view__$1,map__57340__$2,p__57295__$1,owner__$1,cursor__$1,modal__$1,meta57342));
});})(map__57340,map__57340__$1,modal_view))
;
}
return (new openthink.core.t57341(modal_view,map__57340__$1,p__57295,owner,cursor,modal,null));
});
openthink.core.app = (function app(data,owner,opts){if(typeof openthink.core.t57395 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t57395 = (function (opts,owner,data,app,meta57396){
this.opts = opts;
this.owner = owner;
this.data = data;
this.app = app;
this.meta57396 = meta57396;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t57395.cljs$lang$type = true;
openthink.core.t57395.cljs$lang$ctorStr = "openthink.core/t57395";
openthink.core.t57395.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t57395");
});
openthink.core.t57395.prototype.om$core$IRender$ = true;
openthink.core.t57395.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "app"},sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.core.header,self__.data)),sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.core.body,self__.data)),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"modal","modal",-1031880850).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,openthink.core.modal,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modal-view","modal-view",-1572274108),new cljs.core.Keyword(null,"modal","modal",-1031880850).cljs$core$IFn$_invoke$arity$1(self__.data).call(null,openthink.core.modal_map)], null)], null)):null)));
});
openthink.core.t57395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57397){var self__ = this;
var _57397__$1 = this;return self__.meta57396;
});
openthink.core.t57395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57397,meta57396__$1){var self__ = this;
var _57397__$1 = this;return (new openthink.core.t57395(self__.opts,self__.owner,self__.data,self__.app,meta57396__$1));
});
openthink.core.__GT_t57395 = (function __GT_t57395(opts__$1,owner__$1,data__$1,app__$1,meta57396){return (new openthink.core.t57395(opts__$1,owner__$1,data__$1,app__$1,meta57396));
});
}
return (new openthink.core.t57395(opts,owner,data,app,null));
});
cljs.core.deref.call(null,openthink.core.app_state);
openthink.core.start = (function start(target,state,app){return om.core.root.call(null,app,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null));
});
openthink.core.start.call(null,document.getElementById("app"),openthink.core.app_state,openthink.core.app);

//# sourceMappingURL=core.js.map