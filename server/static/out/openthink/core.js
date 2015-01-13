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
openthink.core.render_text = (function render_text(s){var iter__4385__auto__ = (function iter__116519(s__116520){return (new cljs.core.LazySeq(null,(function (){var s__116520__$1 = s__116520;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__116520__$1);if(temp__4126__auto__)
{var s__116520__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__116520__$2))
{var c__4383__auto__ = cljs.core.chunk_first.call(null,s__116520__$2);var size__4384__auto__ = cljs.core.count.call(null,c__4383__auto__);var b__116522 = cljs.core.chunk_buffer.call(null,size__4384__auto__);if((function (){var i__116521 = (0);while(true){
if((i__116521 < size__4384__auto__))
{var p = cljs.core._nth.call(null,c__4383__auto__,i__116521);cljs.core.chunk_append.call(null,b__116522,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),p], null));
{
var G__116523 = (i__116521 + (1));
i__116521 = G__116523;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__116522),iter__116519.call(null,cljs.core.chunk_rest.call(null,s__116520__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__116522),null);
}
} else
{var p = cljs.core.first.call(null,s__116520__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),p], null),iter__116519.call(null,cljs.core.rest.call(null,s__116520__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4385__auto__.call(null,openthink.core.split_text.call(null,s));
});
openthink.core.select_values = cljs.core.comp.call(null,cljs.core.vals,cljs.core.select_keys);
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
openthink.core.app_state = (function (){var init_data = initial_app_state;var rdr = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));return cljs.core.atom.call(null,clojure.walk.keywordize_keys.call(null,cognitect.transit.read.call(null,rdr,openthink.core.unescape_html.call(null,init_data))));
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
openthink.core.login_form = (function login_form(data,owner){if(typeof openthink.core.t116561 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t116561 = (function (owner,data,login_form,meta116562){
this.owner = owner;
this.data = data;
this.login_form = login_form;
this.meta116562 = meta116562;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t116561.cljs$lang$type = true;
openthink.core.t116561.cljs$lang$ctorStr = "openthink.core/t116561";
openthink.core.t116561.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t116561");
});
openthink.core.t116561.prototype.om$core$IRender$ = true;
openthink.core.t116561.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"is-posting","is-posting",70438374))))
{return React.DOM.li(null,React.DOM.h4(null,"Logging in... Please wait."));
} else
{return React.DOM.li({"className": "login-form has-form", "onKeyPress": openthink.core.do_on_enter.call(null,((function (this$__$1){
return (function (){return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"post","post",269697687)),(1));
});})(this$__$1))
)},React.DOM.div({"className": "row collapse"},React.DOM.div({"className": "small-3 columns"},sablono.interpreter.input.call(null,{"id": "login-username", "type": "text", "placeholder": "username", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"username","username",1605666410)), "onChange": ((function (this$__$1){
return (function (p1__116524_SHARP_){return openthink.core.handle_change.call(null,p1__116524_SHARP_,self__.owner,new cljs.core.Keyword(null,"username","username",1605666410));
});})(this$__$1))
})),React.DOM.div({"className": "small-3 columns"},sablono.interpreter.input.call(null,{"id": "login-password", "type": "password", "placeholder": "password", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"password","password",417022471)), "onChange": ((function (this$__$1){
return (function (p1__116525_SHARP_){return openthink.core.handle_change.call(null,p1__116525_SHARP_,self__.owner,new cljs.core.Keyword(null,"password","password",417022471));
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
openthink.core.t116561.prototype.om$core$IWillMount$ = true;
openthink.core.t116561.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var post_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"post","post",269697687));var c__6596__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto__,post_ch,___$1){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto__,post_ch,___$1){
return (function (state_116584){var state_val_116585 = (state_116584[(1)]);if((state_val_116585 === (4)))
{var inst_116568 = (state_116584[(2)]);var inst_116569 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"is-posting","is-posting",70438374),true);var inst_116570 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];var inst_116571 = ["username","password"];var inst_116572 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"username","username",1605666410));var inst_116573 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"password","password",417022471));var inst_116574 = [inst_116572,inst_116573];var inst_116575 = cljs.core.PersistentHashMap.fromArrays(inst_116571,inst_116574);var inst_116576 = (function (){var posting = inst_116568;return ((function (posting,inst_116568,inst_116569,inst_116570,inst_116571,inst_116572,inst_116573,inst_116574,inst_116575,state_val_116585,c__6596__auto__,post_ch,___$1){
return (function (resp){cljs.core.println.call(null,"login form returned");
cljs.core.println.call(null,resp);
var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);cljs.core.println.call(null,resp__$1);
if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032)))
{return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"is-posting","is-posting",70438374),false);
} else
{return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"user","user",1532431356),resp__$1);
}
});
;})(posting,inst_116568,inst_116569,inst_116570,inst_116571,inst_116572,inst_116573,inst_116574,inst_116575,state_val_116585,c__6596__auto__,post_ch,___$1))
})();var inst_116577 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_116575,inst_116576];var inst_116578 = cljs.core.PersistentHashMap.fromArrays(inst_116570,inst_116577);var inst_116579 = ajax.core.POST.call(null,"/login",inst_116578);var state_116584__$1 = (function (){var statearr_116586 = state_116584;(statearr_116586[(7)] = inst_116569);
(statearr_116586[(8)] = inst_116579);
return statearr_116586;
})();var statearr_116587_116596 = state_116584__$1;(statearr_116587_116596[(2)] = null);
(statearr_116587_116596[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116585 === (3)))
{var inst_116582 = (state_116584[(2)]);var state_116584__$1 = state_116584;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_116584__$1,inst_116582);
} else
{if((state_val_116585 === (2)))
{var state_116584__$1 = state_116584;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_116584__$1,(4),post_ch);
} else
{if((state_val_116585 === (1)))
{var state_116584__$1 = state_116584;var statearr_116588_116597 = state_116584__$1;(statearr_116588_116597[(2)] = null);
(statearr_116588_116597[(1)] = (2));
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
var state_machine__6582__auto____0 = (function (){var statearr_116592 = [null,null,null,null,null,null,null,null,null];(statearr_116592[(0)] = state_machine__6582__auto__);
(statearr_116592[(1)] = (1));
return statearr_116592;
});
var state_machine__6582__auto____1 = (function (state_116584){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_116584);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e116593){if((e116593 instanceof Object))
{var ex__6585__auto__ = e116593;var statearr_116594_116598 = state_116584;(statearr_116594_116598[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_116584);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e116593;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__116599 = state_116584;
state_116584 = G__116599;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_116584){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_116584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto__,post_ch,___$1))
})();var state__6598__auto__ = (function (){var statearr_116595 = f__6597__auto__.call(null);(statearr_116595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto__);
return statearr_116595;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto__,post_ch,___$1))
);
return c__6596__auto__;
});
openthink.core.t116561.prototype.om$core$IInitState$ = true;
openthink.core.t116561.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"post","post",269697687),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"username","username",1605666410),"",new cljs.core.Keyword(null,"password","password",417022471),"",new cljs.core.Keyword(null,"is-posting","is-posting",70438374),false], null);
});
openthink.core.t116561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_116563){var self__ = this;
var _116563__$1 = this;return self__.meta116562;
});
openthink.core.t116561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_116563,meta116562__$1){var self__ = this;
var _116563__$1 = this;return (new openthink.core.t116561(self__.owner,self__.data,self__.login_form,meta116562__$1));
});
openthink.core.__GT_t116561 = (function __GT_t116561(owner__$1,data__$1,login_form__$1,meta116562){return (new openthink.core.t116561(owner__$1,data__$1,login_form__$1,meta116562));
});
}
return (new openthink.core.t116561(owner,data,login_form,null));
});
openthink.core.logout_button = (function logout_button(data,owner){if(typeof openthink.core.t116603 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t116603 = (function (owner,data,logout_button,meta116604){
this.owner = owner;
this.data = data;
this.logout_button = logout_button;
this.meta116604 = meta116604;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t116603.cljs$lang$type = true;
openthink.core.t116603.cljs$lang$ctorStr = "openthink.core/t116603";
openthink.core.t116603.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t116603");
});
openthink.core.t116603.prototype.om$core$IRender$ = true;
openthink.core.t116603.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.button({"type": "button", "onClick": ((function (this$__$1){
return (function (_){return ajax.core.POST.call(null,"/logout",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (this$__$1){
return (function (resp){cljs.core.println.call(null,resp);
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"user","user",1532431356),null);
});})(this$__$1))
], null));
});})(this$__$1))
},"Log out");
});
openthink.core.t116603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_116605){var self__ = this;
var _116605__$1 = this;return self__.meta116604;
});
openthink.core.t116603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_116605,meta116604__$1){var self__ = this;
var _116605__$1 = this;return (new openthink.core.t116603(self__.owner,self__.data,self__.logout_button,meta116604__$1));
});
openthink.core.__GT_t116603 = (function __GT_t116603(owner__$1,data__$1,logout_button__$1,meta116604){return (new openthink.core.t116603(owner__$1,data__$1,logout_button__$1,meta116604));
});
}
return (new openthink.core.t116603(owner,data,logout_button,null));
});
openthink.core.register_form = (function register_form(data,owner){if(typeof openthink.core.t116649 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t116649 = (function (owner,data,register_form,meta116650){
this.owner = owner;
this.data = data;
this.register_form = register_form;
this.meta116650 = meta116650;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t116649.cljs$lang$type = true;
openthink.core.t116649.cljs$lang$ctorStr = "openthink.core/t116649";
openthink.core.t116649.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t116649");
});
openthink.core.t116649.prototype.om$core$IRender$ = true;
openthink.core.t116649.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"completed","completed",-486056503),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099))))
{return React.DOM.div({"className": "row register-section"},(function (){var attrs116652 = ("You have successfully registed as "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"username","username",1605666410)], null))));return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs116652))?sablono.interpreter.attributes.call(null,attrs116652):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs116652))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs116652)], null))));
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
return (function (p1__116606_SHARP_){return openthink.core.handle_change.call(null,p1__116606_SHARP_,self__.owner,new cljs.core.Keyword(null,"username","username",1605666410));
});})(this$__$1))
})),React.DOM.div({"className": "large-12 columns"},sablono.interpreter.input.call(null,{"id": "register-email", "type": "text", "placeholder": "email", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"email","email",1415816706)), "onChange": ((function (this$__$1){
return (function (p1__116607_SHARP_){return openthink.core.handle_change.call(null,p1__116607_SHARP_,self__.owner,new cljs.core.Keyword(null,"email","email",1415816706));
});})(this$__$1))
})),React.DOM.div({"className": "large-12 columns"},sablono.interpreter.input.call(null,{"id": "register-password", "type": "password", "placeholder": "password", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"password","password",417022471)), "onChange": ((function (this$__$1){
return (function (p1__116608_SHARP_){return openthink.core.handle_change.call(null,p1__116608_SHARP_,self__.owner,new cljs.core.Keyword(null,"password","password",417022471));
});})(this$__$1))
})),React.DOM.div({"className": "large-12 columns"},sablono.interpreter.input.call(null,{"id": "register-r-password", "type": "password", "placeholder": "repeat password", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"r-password","r-password",605579115)), "onChange": ((function (this$__$1){
return (function (p1__116609_SHARP_){return openthink.core.handle_change.call(null,p1__116609_SHARP_,self__.owner,new cljs.core.Keyword(null,"r-password","r-password",605579115));
});})(this$__$1))
})),React.DOM.div({"className": "large-4 columns"},React.DOM.button({"type": "button", "className": "btn btn-info", "onClick": ((function (this$__$1){
return (function (e){cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"post","post",269697687)),(1));
return false;
});})(this$__$1))
},"Register")));
}
});
openthink.core.t116649.prototype.om$core$IWillMount$ = true;
openthink.core.t116649.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var post_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"post","post",269697687));var c__6596__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto__,post_ch,___$1){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto__,post_ch,___$1){
return (function (state_116676){var state_val_116677 = (state_116676[(1)]);if((state_val_116677 === (4)))
{var inst_116657 = (state_116676[(2)]);var inst_116658 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"posting","posting",919785887));var inst_116659 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032),null);var inst_116660 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];var inst_116661 = ["username","email","password","r-password"];var inst_116662 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"username","username",1605666410));var inst_116663 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"email","email",1415816706));var inst_116664 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"password","password",417022471));var inst_116665 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"r-password","r-password",605579115));var inst_116666 = [inst_116662,inst_116663,inst_116664,inst_116665];var inst_116667 = cljs.core.PersistentHashMap.fromArrays(inst_116661,inst_116666);var inst_116668 = (function (){var posting = inst_116657;return ((function (posting,inst_116657,inst_116658,inst_116659,inst_116660,inst_116661,inst_116662,inst_116663,inst_116664,inst_116665,inst_116666,inst_116667,state_val_116677,c__6596__auto__,post_ch,___$1){
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
;})(posting,inst_116657,inst_116658,inst_116659,inst_116660,inst_116661,inst_116662,inst_116663,inst_116664,inst_116665,inst_116666,inst_116667,state_val_116677,c__6596__auto__,post_ch,___$1))
})();var inst_116669 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_116667,inst_116668];var inst_116670 = cljs.core.PersistentHashMap.fromArrays(inst_116660,inst_116669);var inst_116671 = ajax.core.POST.call(null,"/register",inst_116670);var state_116676__$1 = (function (){var statearr_116678 = state_116676;(statearr_116678[(7)] = inst_116658);
(statearr_116678[(8)] = inst_116671);
(statearr_116678[(9)] = inst_116659);
return statearr_116678;
})();var statearr_116679_116688 = state_116676__$1;(statearr_116679_116688[(2)] = null);
(statearr_116679_116688[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116677 === (3)))
{var inst_116674 = (state_116676[(2)]);var state_116676__$1 = state_116676;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_116676__$1,inst_116674);
} else
{if((state_val_116677 === (2)))
{var state_116676__$1 = state_116676;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_116676__$1,(4),post_ch);
} else
{if((state_val_116677 === (1)))
{var state_116676__$1 = state_116676;var statearr_116680_116689 = state_116676__$1;(statearr_116680_116689[(2)] = null);
(statearr_116680_116689[(1)] = (2));
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
var state_machine__6582__auto____0 = (function (){var statearr_116684 = [null,null,null,null,null,null,null,null,null,null];(statearr_116684[(0)] = state_machine__6582__auto__);
(statearr_116684[(1)] = (1));
return statearr_116684;
});
var state_machine__6582__auto____1 = (function (state_116676){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_116676);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e116685){if((e116685 instanceof Object))
{var ex__6585__auto__ = e116685;var statearr_116686_116690 = state_116676;(statearr_116686_116690[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_116676);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e116685;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__116691 = state_116676;
state_116676 = G__116691;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_116676){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_116676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto__,post_ch,___$1))
})();var state__6598__auto__ = (function (){var statearr_116687 = f__6597__auto__.call(null);(statearr_116687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto__);
return statearr_116687;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto__,post_ch,___$1))
);
return c__6596__auto__;
});
openthink.core.t116649.prototype.om$core$IInitState$ = true;
openthink.core.t116649.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"post","post",269697687),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795),new cljs.core.Keyword(null,"username","username",1605666410),"",new cljs.core.Keyword(null,"email","email",1415816706),"",new cljs.core.Keyword(null,"password","password",417022471),"",new cljs.core.Keyword(null,"r-password","r-password",605579115),""], null);
});
openthink.core.t116649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_116651){var self__ = this;
var _116651__$1 = this;return self__.meta116650;
});
openthink.core.t116649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_116651,meta116650__$1){var self__ = this;
var _116651__$1 = this;return (new openthink.core.t116649(self__.owner,self__.data,self__.register_form,meta116650__$1));
});
openthink.core.__GT_t116649 = (function __GT_t116649(owner__$1,data__$1,register_form__$1,meta116650){return (new openthink.core.t116649(owner__$1,data__$1,register_form__$1,meta116650));
});
}
return (new openthink.core.t116649(owner,data,register_form,null));
});
openthink.core.user_bar = (function user_bar(data,owner){if(typeof openthink.core.t116697 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t116697 = (function (owner,data,user_bar,meta116698){
this.owner = owner;
this.data = data;
this.user_bar = user_bar;
this.meta116698 = meta116698;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t116697.cljs$lang$type = true;
openthink.core.t116697.cljs$lang$ctorStr = "openthink.core/t116697";
openthink.core.t116697.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t116697");
});
openthink.core.t116697.prototype.om$core$IRender$ = true;
openthink.core.t116697.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(self__.data)))
{return React.DOM.li({"className": "logged-in-as"},(function (){var attrs116700 = ("logged in as "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"username","username",1605666410)], null)))+" ");return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs116700))?sablono.interpreter.attributes.call(null,attrs116700):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs116700))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs116700)], null))));
})(),(function (){var attrs116701 = om.core.build.call(null,openthink.core.logout_button,self__.data);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs116701))?sablono.interpreter.attributes.call(null,attrs116701):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs116701))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs116701)], null))));
})());
} else
{return sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.core.login_form,self__.data));
}
});
openthink.core.t116697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_116699){var self__ = this;
var _116699__$1 = this;return self__.meta116698;
});
openthink.core.t116697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_116699,meta116698__$1){var self__ = this;
var _116699__$1 = this;return (new openthink.core.t116697(self__.owner,self__.data,self__.user_bar,meta116698__$1));
});
openthink.core.__GT_t116697 = (function __GT_t116697(owner__$1,data__$1,user_bar__$1,meta116698){return (new openthink.core.t116697(owner__$1,data__$1,user_bar__$1,meta116698));
});
}
return (new openthink.core.t116697(owner,data,user_bar,null));
});
openthink.core.header = (function header(data,owner){if(typeof openthink.core.t116709 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t116709 = (function (owner,data,header,meta116710){
this.owner = owner;
this.data = data;
this.header = header;
this.meta116710 = meta116710;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t116709.cljs$lang$type = true;
openthink.core.t116709.cljs$lang$ctorStr = "openthink.core/t116709";
openthink.core.t116709.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t116709");
});
openthink.core.t116709.prototype.om$core$IRender$ = true;
openthink.core.t116709.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.nav({"className": "top-bar page-header"},React.DOM.ul({"className": "title-area"},React.DOM.li({"className": "name"},React.DOM.h1(null,React.DOM.a({"href": "/"},"OpenThink")))),React.DOM.section({"className": "top-bar-section"},React.DOM.ul({"className": "left"},React.DOM.button({"className": "button large", "onClick": ((function (this$__$1){
return (function (){om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"reply-to","reply-to",-145674792),null);
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.Keyword(null,"new-post","new-post",-1808203791));
});})(this$__$1))
},"Create a new post")),React.DOM.ul({"className": "right"},React.DOM.li({"className": "divider"}),sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.core.user_bar,self__.data)))));
});
openthink.core.t116709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_116711){var self__ = this;
var _116711__$1 = this;return self__.meta116710;
});
openthink.core.t116709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_116711,meta116710__$1){var self__ = this;
var _116711__$1 = this;return (new openthink.core.t116709(self__.owner,self__.data,self__.header,meta116710__$1));
});
openthink.core.__GT_t116709 = (function __GT_t116709(owner__$1,data__$1,header__$1,meta116710){return (new openthink.core.t116709(owner__$1,data__$1,header__$1,meta116710));
});
}
return (new openthink.core.t116709(owner,data,header,null));
});
openthink.core.post_view = (function post_view(data,owner){if(typeof openthink.core.t116723 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t116723 = (function (owner,data,post_view,meta116724){
this.owner = owner;
this.data = data;
this.post_view = post_view;
this.meta116724 = meta116724;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t116723.cljs$lang$type = true;
openthink.core.t116723.cljs$lang$ctorStr = "openthink.core/t116723";
openthink.core.t116723.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t116723");
});
openthink.core.t116723.prototype.om$core$IRender$ = true;
openthink.core.t116723.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var post = openthink.core.current_post.call(null);return React.DOM.div({"className": "post row"},React.DOM.h4(null,(function (){var attrs116726 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(post);return cljs.core.apply.call(null,React.DOM.strong,((cljs.core.map_QMARK_.call(null,attrs116726))?sablono.interpreter.attributes.call(null,attrs116726):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs116726))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs116726)], null))));
})()),React.DOM.hr(null),(function (){var attrs116729 = openthink.core.render_text.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(post));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs116729))?sablono.interpreter.attributes.call(null,attrs116729):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs116729))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs116729)], null))));
})());
});
openthink.core.t116723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_116725){var self__ = this;
var _116725__$1 = this;return self__.meta116724;
});
openthink.core.t116723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_116725,meta116724__$1){var self__ = this;
var _116725__$1 = this;return (new openthink.core.t116723(self__.owner,self__.data,self__.post_view,meta116724__$1));
});
openthink.core.__GT_t116723 = (function __GT_t116723(owner__$1,data__$1,post_view__$1,meta116724){return (new openthink.core.t116723(owner__$1,data__$1,post_view__$1,meta116724));
});
}
return (new openthink.core.t116723(owner,data,post_view,null));
});
openthink.core.vote_btn = (function vote_btn(rel,owner,p__116730){var map__116735 = p__116730;var map__116735__$1 = ((cljs.core.seq_QMARK_.call(null,map__116735))?cljs.core.apply.call(null,cljs.core.hash_map,map__116735):map__116735);var opts = map__116735__$1;var vote_txt = cljs.core.get.call(null,map__116735__$1,new cljs.core.Keyword(null,"vote-txt","vote-txt",476450142));var vote_value = cljs.core.get.call(null,map__116735__$1,new cljs.core.Keyword(null,"vote-value","vote-value",-814557147));if(typeof openthink.core.t116736 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t116736 = (function (vote_value,vote_txt,opts,map__116735,p__116730,owner,rel,vote_btn,meta116737){
this.vote_value = vote_value;
this.vote_txt = vote_txt;
this.opts = opts;
this.map__116735 = map__116735;
this.p__116730 = p__116730;
this.owner = owner;
this.rel = rel;
this.vote_btn = vote_btn;
this.meta116737 = meta116737;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t116736.cljs$lang$type = true;
openthink.core.t116736.cljs$lang$ctorStr = "openthink.core/t116736";
openthink.core.t116736.cljs$lang$ctorPrWriter = ((function (map__116735,map__116735__$1,opts,vote_txt,vote_value){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t116736");
});})(map__116735,map__116735__$1,opts,vote_txt,vote_value))
;
openthink.core.t116736.prototype.om$core$IRender$ = true;
openthink.core.t116736.prototype.om$core$IRender$render$arity$1 = ((function (map__116735,map__116735__$1,opts,vote_txt,vote_value){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.a({"href": "#", "onClick": ((function (this$__$1,map__116735,map__116735__$1,opts,vote_txt,vote_value){
return (function (_){ajax.core.POST.call(null,"/vote",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, ["value",self__.vote_value,"rel_id",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.rel)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (this$__$1,map__116735,map__116735__$1,opts,vote_txt,vote_value){
return (function (resp){cljs.core.println.call(null,resp);
var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032)))
{return null;
} else
{return om.core.update_BANG_.call(null,self__.rel,new cljs.core.Keyword(null,"rel","rel",1378823488).cljs$core$IFn$_invoke$arity$1(resp__$1));
}
});})(this$__$1,map__116735,map__116735__$1,opts,vote_txt,vote_value))
], null));
return false;
});})(this$__$1,map__116735,map__116735__$1,opts,vote_txt,vote_value))
},sablono.interpreter.interpret.call(null,self__.vote_txt));
});})(map__116735,map__116735__$1,opts,vote_txt,vote_value))
;
openthink.core.t116736.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__116735,map__116735__$1,opts,vote_txt,vote_value){
return (function (_116738){var self__ = this;
var _116738__$1 = this;return self__.meta116737;
});})(map__116735,map__116735__$1,opts,vote_txt,vote_value))
;
openthink.core.t116736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__116735,map__116735__$1,opts,vote_txt,vote_value){
return (function (_116738,meta116737__$1){var self__ = this;
var _116738__$1 = this;return (new openthink.core.t116736(self__.vote_value,self__.vote_txt,self__.opts,self__.map__116735,self__.p__116730,self__.owner,self__.rel,self__.vote_btn,meta116737__$1));
});})(map__116735,map__116735__$1,opts,vote_txt,vote_value))
;
openthink.core.__GT_t116736 = ((function (map__116735,map__116735__$1,opts,vote_txt,vote_value){
return (function __GT_t116736(vote_value__$1,vote_txt__$1,opts__$1,map__116735__$2,p__116730__$1,owner__$1,rel__$1,vote_btn__$1,meta116737){return (new openthink.core.t116736(vote_value__$1,vote_txt__$1,opts__$1,map__116735__$2,p__116730__$1,owner__$1,rel__$1,vote_btn__$1,meta116737));
});})(map__116735,map__116735__$1,opts,vote_txt,vote_value))
;
}
return (new openthink.core.t116736(vote_value,vote_txt,opts,map__116735__$1,p__116730,owner,rel,vote_btn,null));
});
openthink.core.child_view = (function child_view(rel,owner){if(typeof openthink.core.t116747 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t116747 = (function (owner,rel,child_view,meta116748){
this.owner = owner;
this.rel = rel;
this.child_view = child_view;
this.meta116748 = meta116748;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t116747.cljs$lang$type = true;
openthink.core.t116747.cljs$lang$ctorStr = "openthink.core/t116747";
openthink.core.t116747.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t116747");
});
openthink.core.t116747.prototype.om$core$IRender$ = true;
openthink.core.t116747.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var child_post = openthink.core.post_from_rel.call(null,self__.rel);return React.DOM.div({"className": "child large-12 columns"},React.DOM.div({"className": "row"},React.DOM.div({"className": "large-2 columns"},React.DOM.div({"className": "row"},React.DOM.div({"className": "small-4 columns", "style": cljs.core.clj__GT_js.call(null,{"padding": "0px"})},(function (){var attrs116750 = om.core.build.call(null,openthink.core.vote_btn,self__.rel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vote-value","vote-value",-814557147),(1),new cljs.core.Keyword(null,"vote-txt","vote-txt",476450142),"\u25B2"], null),new cljs.core.Keyword(null,"key","key",-1516042587),("upvote-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.rel)))], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs116750))?sablono.interpreter.attributes.call(null,attrs116750):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs116750))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs116750)], null))));
})(),(function (){var attrs116751 = om.core.build.call(null,openthink.core.vote_btn,self__.rel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vote-value","vote-value",-814557147),(-1),new cljs.core.Keyword(null,"vote-txt","vote-txt",476450142),"\u25BC"], null),new cljs.core.Keyword(null,"key","key",-1516042587),("downvote-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.rel)))], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs116751))?sablono.interpreter.attributes.call(null,attrs116751):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs116751))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs116751)], null))));
})()),React.DOM.div({"className": "small-8 columns", "style": cljs.core.clj__GT_js.call(null,{"padding": "0px"})},(function (){var attrs116752 = (function (){var or__3646__auto__ = new cljs.core.Keyword(null,"votecount","votecount",425206940).cljs$core$IFn$_invoke$arity$1(self__.rel);if(cljs.core.truth_(or__3646__auto__))
{return or__3646__auto__;
} else
{return (0);
}
})();return cljs.core.apply.call(null,React.DOM.h4,((cljs.core.map_QMARK_.call(null,attrs116752))?sablono.interpreter.attributes.call(null,attrs116752):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs116752))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs116752)], null))));
})()))),React.DOM.div({"className": "large-10 columns"},React.DOM.a({"href": ("/post/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child_post)))},React.DOM.strong({"className": "child-title"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(child_post)))),(function (){var attrs116753 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,clojure.string.replace.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(child_post),/\\n|\n/," "),(0),(80)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((cljs.core.count.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(child_post)) > (80)))?"...":"")));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs116753))?sablono.interpreter.attributes.call(null,attrs116753):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs116753))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs116753)], null))));
})(),React.DOM.span({"className": "link-by"},"linked by ",(function (){var attrs116754 = cljs.core.get_in.call(null,self__.rel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linked_by","linked_by",-1836719993),new cljs.core.Keyword(null,"username","username",1605666410)], null));return cljs.core.apply.call(null,React.DOM.strong,((cljs.core.map_QMARK_.call(null,attrs116754))?sablono.interpreter.attributes.call(null,attrs116754):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs116754))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs116754)], null))));
})()," on ",sablono.interpreter.interpret.call(null,openthink.core.date.call(null,new cljs.core.Keyword(null,"time_linked","time_linked",1045859207).cljs$core$IFn$_invoke$arity$1(self__.rel)))))));
});
openthink.core.t116747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_116749){var self__ = this;
var _116749__$1 = this;return self__.meta116748;
});
openthink.core.t116747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_116749,meta116748__$1){var self__ = this;
var _116749__$1 = this;return (new openthink.core.t116747(self__.owner,self__.rel,self__.child_view,meta116748__$1));
});
openthink.core.__GT_t116747 = (function __GT_t116747(owner__$1,rel__$1,child_view__$1,meta116748){return (new openthink.core.t116747(owner__$1,rel__$1,child_view__$1,meta116748));
});
}
return (new openthink.core.t116747(owner,rel,child_view,null));
});
openthink.core.children_view = (function children_view(data,owner){if(typeof openthink.core.t116766 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t116766 = (function (owner,data,children_view,meta116767){
this.owner = owner;
this.data = data;
this.children_view = children_view;
this.meta116767 = meta116767;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t116766.cljs$lang$type = true;
openthink.core.t116766.cljs$lang$ctorStr = "openthink.core/t116766";
openthink.core.t116766.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t116766");
});
openthink.core.t116766.prototype.om$core$IRender$ = true;
openthink.core.t116766.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var child_rel_ids = new cljs.core.Keyword(null,"child_rel_ids","child_rel_ids",890940940).cljs$core$IFn$_invoke$arity$1(openthink.core.current_post.call(null));var child_rels = openthink.core.select_values.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(self__.data),child_rel_ids);var child_pairs = cljs.core.partition_all.call(null,(2),cljs.core.filter.call(null,cljs.core.identity,child_rels));return React.DOM.div({"className": "children-view"},React.DOM.div({"className": "row reply-action"},React.DOM.button({"onClick": ((function (child_rel_ids,child_rels,child_pairs,___$1){
return (function (){om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"reply-to","reply-to",-145674792),new cljs.core.Keyword(null,"current_post","current_post",2072811381).cljs$core$IFn$_invoke$arity$1(self__.data));
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.Keyword(null,"new-post","new-post",-1808203791));
});})(child_rel_ids,child_rels,child_pairs,___$1))
, "className": "button expand large reply-btn"},"Post a Reply")),((cljs.core.empty_QMARK_.call(null,child_pairs))?React.DOM.div(null,"No children"):React.DOM.span(null,React.DOM.div({"className": "row child-sort-section"},React.DOM.select(null,sablono.interpreter.option.call(null,{"value": "top"},"Top"),sablono.interpreter.option.call(null,{"value": "new"},"Newest"),sablono.interpreter.option.call(null,{"value": "hot"},"Hot"))),cljs.core.into_array.call(null,(function (){var iter__4385__auto__ = ((function (child_rel_ids,child_rels,child_pairs,___$1){
return (function iter__116773(s__116774){return (new cljs.core.LazySeq(null,((function (child_rel_ids,child_rels,child_pairs,___$1){
return (function (){var s__116774__$1 = s__116774;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__116774__$1);if(temp__4126__auto__)
{var s__116774__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__116774__$2))
{var c__4383__auto__ = cljs.core.chunk_first.call(null,s__116774__$2);var size__4384__auto__ = cljs.core.count.call(null,c__4383__auto__);var b__116776 = cljs.core.chunk_buffer.call(null,size__4384__auto__);if((function (){var i__116775 = (0);while(true){
if((i__116775 < size__4384__auto__))
{var child = cljs.core._nth.call(null,c__4383__auto__,i__116775);cljs.core.chunk_append.call(null,b__116776,React.DOM.div({"className": "row"},sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.core.child_view,child))));
{
var G__116777 = (i__116775 + (1));
i__116775 = G__116777;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__116776),iter__116773.call(null,cljs.core.chunk_rest.call(null,s__116774__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__116776),null);
}
} else
{var child = cljs.core.first.call(null,s__116774__$2);return cljs.core.cons.call(null,React.DOM.div({"className": "row"},sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.core.child_view,child))),iter__116773.call(null,cljs.core.rest.call(null,s__116774__$2)));
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
openthink.core.t116766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_116768){var self__ = this;
var _116768__$1 = this;return self__.meta116767;
});
openthink.core.t116766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_116768,meta116767__$1){var self__ = this;
var _116768__$1 = this;return (new openthink.core.t116766(self__.owner,self__.data,self__.children_view,meta116767__$1));
});
openthink.core.__GT_t116766 = (function __GT_t116766(owner__$1,data__$1,children_view__$1,meta116767){return (new openthink.core.t116766(owner__$1,data__$1,children_view__$1,meta116767));
});
}
return (new openthink.core.t116766(owner,data,children_view,null));
});
openthink.core.comment_view = (function comment_view(comment,owner){if(typeof openthink.core.t116783 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t116783 = (function (owner,comment,comment_view,meta116784){
this.owner = owner;
this.comment = comment;
this.comment_view = comment_view;
this.meta116784 = meta116784;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t116783.cljs$lang$type = true;
openthink.core.t116783.cljs$lang$ctorStr = "openthink.core/t116783";
openthink.core.t116783.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t116783");
});
openthink.core.t116783.prototype.om$core$IRender$ = true;
openthink.core.t116783.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "comment", "id": ("comment-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.comment)))},React.DOM.hr(null),React.DOM.span({"className": "comment-userbit"},React.DOM.strong({"className": "comment-user"},sablono.interpreter.interpret.call(null,cljs.core.get_in.call(null,self__.comment,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"username","username",1605666410)], null)))),React.DOM.span({"className": "comment-datebit"},sablono.interpreter.interpret.call(null,(" | "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(openthink.core.date.call(null,new cljs.core.Keyword(null,"time_posted","time_posted",-32907602).cljs$core$IFn$_invoke$arity$1(self__.comment))))))),React.DOM.div({"className": "comment-body"},sablono.interpreter.interpret.call(null,openthink.core.render_text.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(self__.comment)))));
});
openthink.core.t116783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_116785){var self__ = this;
var _116785__$1 = this;return self__.meta116784;
});
openthink.core.t116783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_116785,meta116784__$1){var self__ = this;
var _116785__$1 = this;return (new openthink.core.t116783(self__.owner,self__.comment,self__.comment_view,meta116784__$1));
});
openthink.core.__GT_t116783 = (function __GT_t116783(owner__$1,comment__$1,comment_view__$1,meta116784){return (new openthink.core.t116783(owner__$1,comment__$1,comment_view__$1,meta116784));
});
}
return (new openthink.core.t116783(owner,comment,comment_view,null));
});
openthink.core.comment_form = (function comment_form(data,owner){if(typeof openthink.core.t116847 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t116847 = (function (owner,data,comment_form,meta116848){
this.owner = owner;
this.data = data;
this.comment_form = comment_form;
this.meta116848 = meta116848;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t116847.cljs$lang$type = true;
openthink.core.t116847.cljs$lang$ctorStr = "openthink.core/t116847";
openthink.core.t116847.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t116847");
});
openthink.core.t116847.prototype.om$core$IRender$ = true;
openthink.core.t116847.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.form({"onSubmit": ((function (this$__$1){
return (function (e){var c__6596__auto___116904 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto___116904,this$__$1){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto___116904,this$__$1){
return (function (state_116856){var state_val_116857 = (state_116856[(1)]);if((state_val_116857 === (2)))
{var inst_116854 = (state_116856[(2)]);var state_116856__$1 = state_116856;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_116856__$1,inst_116854);
} else
{if((state_val_116857 === (1)))
{var inst_116852 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"comment-chan","comment-chan",-1616079298));var state_116856__$1 = state_116856;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_116856__$1,(2),inst_116852,(1));
} else
{return null;
}
}
});})(c__6596__auto___116904,this$__$1))
;return ((function (switch__6581__auto__,c__6596__auto___116904,this$__$1){
return (function() {
var state_machine__6582__auto__ = null;
var state_machine__6582__auto____0 = (function (){var statearr_116861 = [null,null,null,null,null,null,null];(statearr_116861[(0)] = state_machine__6582__auto__);
(statearr_116861[(1)] = (1));
return statearr_116861;
});
var state_machine__6582__auto____1 = (function (state_116856){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_116856);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e116862){if((e116862 instanceof Object))
{var ex__6585__auto__ = e116862;var statearr_116863_116905 = state_116856;(statearr_116863_116905[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_116856);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e116862;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__116906 = state_116856;
state_116856 = G__116906;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_116856){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_116856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto___116904,this$__$1))
})();var state__6598__auto__ = (function (){var statearr_116864 = f__6597__auto__.call(null);(statearr_116864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto___116904);
return statearr_116864;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto___116904,this$__$1))
);
e.preventDefault();
return false;
});})(this$__$1))
},React.DOM.div({"className": "row"},React.DOM.div({"className": "large-11 columns"},sablono.interpreter.textarea.call(null,{"placeholder": "Post a comment", "name": "comment-body", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"body","body",-2049205669)), "onChange": ((function (this$__$1){
return (function (p1__116789_SHARP_){return openthink.core.handle_change.call(null,p1__116789_SHARP_,self__.owner,new cljs.core.Keyword(null,"body","body",-2049205669));
});})(this$__$1))
}),React.DOM.button({"type": "submit", "className": "button tiny"},"comment"))));
});
openthink.core.t116847.prototype.om$core$IWillMount$ = true;
openthink.core.t116847.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var comment_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"comment-chan","comment-chan",-1616079298));var c__6596__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto__,comment_chan,___$1){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto__,comment_chan,___$1){
return (function (state_116888){var state_val_116889 = (state_116888[(1)]);if((state_val_116889 === (7)))
{var inst_116868 = (state_116888[(2)]);var inst_116869 = cljs.core.println.call(null,"making comment");var inst_116870 = new cljs.core.Keyword(null,"current_post","current_post",2072811381).cljs$core$IFn$_invoke$arity$1(self__.data);var inst_116871 = ("/post/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_116870)+"/comment");var inst_116872 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];var inst_116873 = ["body"];var inst_116874 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"body","body",-2049205669));var inst_116875 = [inst_116874];var inst_116876 = cljs.core.PersistentHashMap.fromArrays(inst_116873,inst_116875);var inst_116877 = (function (){return ((function (inst_116868,inst_116869,inst_116870,inst_116871,inst_116872,inst_116873,inst_116874,inst_116875,inst_116876,state_val_116889,c__6596__auto__,comment_chan,___$1){
return (function (resp){cljs.core.println.call(null,"comment-form returned");
cljs.core.println.call(null,resp);
var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032)))
{return null;
} else
{return om.core.transact_BANG_.call(null,self__.data,((function (resp__$1,inst_116868,inst_116869,inst_116870,inst_116871,inst_116872,inst_116873,inst_116874,inst_116875,inst_116876,state_val_116889,c__6596__auto__,comment_chan,___$1){
return (function (p1__116788_SHARP_){return cljs.core.merge.call(null,p1__116788_SHARP_,resp__$1);
});})(resp__$1,inst_116868,inst_116869,inst_116870,inst_116871,inst_116872,inst_116873,inst_116874,inst_116875,inst_116876,state_val_116889,c__6596__auto__,comment_chan,___$1))
);
}
});
;})(inst_116868,inst_116869,inst_116870,inst_116871,inst_116872,inst_116873,inst_116874,inst_116875,inst_116876,state_val_116889,c__6596__auto__,comment_chan,___$1))
})();var inst_116878 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_116876,inst_116877];var inst_116879 = cljs.core.PersistentHashMap.fromArrays(inst_116872,inst_116878);var inst_116880 = ajax.core.POST.call(null,inst_116871,inst_116879);var state_116888__$1 = (function (){var statearr_116890 = state_116888;(statearr_116890[(7)] = inst_116869);
(statearr_116890[(8)] = inst_116868);
(statearr_116890[(9)] = inst_116880);
return statearr_116890;
})();var statearr_116891_116907 = state_116888__$1;(statearr_116891_116907[(2)] = null);
(statearr_116891_116907[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116889 === (6)))
{var inst_116884 = (state_116888[(2)]);var state_116888__$1 = state_116888;var statearr_116892_116908 = state_116888__$1;(statearr_116892_116908[(2)] = inst_116884);
(statearr_116892_116908[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116889 === (5)))
{var state_116888__$1 = state_116888;var statearr_116893_116909 = state_116888__$1;(statearr_116893_116909[(2)] = null);
(statearr_116893_116909[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116889 === (4)))
{var state_116888__$1 = state_116888;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_116888__$1,(7),comment_chan);
} else
{if((state_val_116889 === (3)))
{var inst_116886 = (state_116888[(2)]);var state_116888__$1 = state_116888;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_116888__$1,inst_116886);
} else
{if((state_val_116889 === (2)))
{var state_116888__$1 = state_116888;var statearr_116894_116910 = state_116888__$1;(statearr_116894_116910[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_116889 === (1)))
{var state_116888__$1 = state_116888;var statearr_116896_116911 = state_116888__$1;(statearr_116896_116911[(2)] = null);
(statearr_116896_116911[(1)] = (2));
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
var state_machine__6582__auto____0 = (function (){var statearr_116900 = [null,null,null,null,null,null,null,null,null,null];(statearr_116900[(0)] = state_machine__6582__auto__);
(statearr_116900[(1)] = (1));
return statearr_116900;
});
var state_machine__6582__auto____1 = (function (state_116888){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_116888);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e116901){if((e116901 instanceof Object))
{var ex__6585__auto__ = e116901;var statearr_116902_116912 = state_116888;(statearr_116902_116912[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_116888);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e116901;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__116913 = state_116888;
state_116888 = G__116913;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_116888){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_116888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto__,comment_chan,___$1))
})();var state__6598__auto__ = (function (){var statearr_116903 = f__6597__auto__.call(null);(statearr_116903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto__);
return statearr_116903;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto__,comment_chan,___$1))
);
return c__6596__auto__;
});
openthink.core.t116847.prototype.om$core$IInitState$ = true;
openthink.core.t116847.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comment-chan","comment-chan",-1616079298),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"body","body",-2049205669),""], null);
});
openthink.core.t116847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_116849){var self__ = this;
var _116849__$1 = this;return self__.meta116848;
});
openthink.core.t116847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_116849,meta116848__$1){var self__ = this;
var _116849__$1 = this;return (new openthink.core.t116847(self__.owner,self__.data,self__.comment_form,meta116848__$1));
});
openthink.core.__GT_t116847 = (function __GT_t116847(owner__$1,data__$1,comment_form__$1,meta116848){return (new openthink.core.t116847(owner__$1,data__$1,comment_form__$1,meta116848));
});
}
return (new openthink.core.t116847(owner,data,comment_form,null));
});
openthink.core.comments_view = (function comments_view(data,owner){if(typeof openthink.core.t116923 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t116923 = (function (owner,data,comments_view,meta116924){
this.owner = owner;
this.data = data;
this.comments_view = comments_view;
this.meta116924 = meta116924;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t116923.cljs$lang$type = true;
openthink.core.t116923.cljs$lang$ctorStr = "openthink.core/t116923";
openthink.core.t116923.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t116923");
});
openthink.core.t116923.prototype.om$core$IRender$ = true;
openthink.core.t116923.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var comments = openthink.core.comments_cursor.call(null);return React.DOM.div({"className": "comments-view row"},(cljs.core.truth_(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(self__.data))?sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.core.comment_form,self__.data)):React.DOM.strong(null,"You must be logged in to comment on a post")),sablono.interpreter.interpret.call(null,((!(cljs.core.empty_QMARK_.call(null,comments)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Comments:"], null),(function (){var iter__4385__auto__ = ((function (comments,___$1){
return (function iter__116928(s__116929){return (new cljs.core.LazySeq(null,((function (comments,___$1){
return (function (){var s__116929__$1 = s__116929;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__116929__$1);if(temp__4126__auto__)
{var s__116929__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__116929__$2))
{var c__4383__auto__ = cljs.core.chunk_first.call(null,s__116929__$2);var size__4384__auto__ = cljs.core.count.call(null,c__4383__auto__);var b__116931 = cljs.core.chunk_buffer.call(null,size__4384__auto__);if((function (){var i__116930 = (0);while(true){
if((i__116930 < size__4384__auto__))
{var comment = cljs.core._nth.call(null,c__4383__auto__,i__116930);cljs.core.chunk_append.call(null,b__116931,om.core.build.call(null,openthink.core.comment_view,comment));
{
var G__116932 = (i__116930 + (1));
i__116930 = G__116932;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__116931),iter__116928.call(null,cljs.core.chunk_rest.call(null,s__116929__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__116931),null);
}
} else
{var comment = cljs.core.first.call(null,s__116929__$2);return cljs.core.cons.call(null,om.core.build.call(null,openthink.core.comment_view,comment),iter__116928.call(null,cljs.core.rest.call(null,s__116929__$2)));
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
openthink.core.t116923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_116925){var self__ = this;
var _116925__$1 = this;return self__.meta116924;
});
openthink.core.t116923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_116925,meta116924__$1){var self__ = this;
var _116925__$1 = this;return (new openthink.core.t116923(self__.owner,self__.data,self__.comments_view,meta116924__$1));
});
openthink.core.__GT_t116923 = (function __GT_t116923(owner__$1,data__$1,comments_view__$1,meta116924){return (new openthink.core.t116923(owner__$1,data__$1,comments_view__$1,meta116924));
});
}
return (new openthink.core.t116923(owner,data,comments_view,null));
});
openthink.core.submit_form = (function submit_form(data,owner,p__116936){var map__117014 = p__116936;var map__117014__$1 = ((cljs.core.seq_QMARK_.call(null,map__117014))?cljs.core.apply.call(null,cljs.core.hash_map,map__117014):map__117014);var opts = map__117014__$1;var close_chan = cljs.core.get.call(null,map__117014__$1,new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891));if(typeof openthink.core.t117015 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t117015 = (function (close_chan,opts,map__117014,p__116936,owner,data,submit_form,meta117016){
this.close_chan = close_chan;
this.opts = opts;
this.map__117014 = map__117014;
this.p__116936 = p__116936;
this.owner = owner;
this.data = data;
this.submit_form = submit_form;
this.meta117016 = meta117016;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t117015.cljs$lang$type = true;
openthink.core.t117015.cljs$lang$ctorStr = "openthink.core/t117015";
openthink.core.t117015.cljs$lang$ctorPrWriter = ((function (map__117014,map__117014__$1,opts,close_chan){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t117015");
});})(map__117014,map__117014__$1,opts,close_chan))
;
openthink.core.t117015.prototype.om$core$IRender$ = true;
openthink.core.t117015.prototype.om$core$IRender$render$arity$1 = ((function (map__117014,map__117014__$1,opts,close_chan){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.form({"onSubmit": ((function (this$__$1,map__117014,map__117014__$1,opts,close_chan){
return (function (e){var c__6596__auto___117091 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto___117091,this$__$1,map__117014,map__117014__$1,opts,close_chan){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto___117091,this$__$1,map__117014,map__117014__$1,opts,close_chan){
return (function (state_117026){var state_val_117027 = (state_117026[(1)]);if((state_val_117027 === (2)))
{var inst_117024 = (state_117026[(2)]);var state_117026__$1 = state_117026;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_117026__$1,inst_117024);
} else
{if((state_val_117027 === (1)))
{var inst_117022 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"submit-chan","submit-chan",1225988800));var state_117026__$1 = state_117026;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_117026__$1,(2),inst_117022,(1));
} else
{return null;
}
}
});})(c__6596__auto___117091,this$__$1,map__117014,map__117014__$1,opts,close_chan))
;return ((function (switch__6581__auto__,c__6596__auto___117091,this$__$1,map__117014,map__117014__$1,opts,close_chan){
return (function() {
var state_machine__6582__auto__ = null;
var state_machine__6582__auto____0 = (function (){var statearr_117031 = [null,null,null,null,null,null,null];(statearr_117031[(0)] = state_machine__6582__auto__);
(statearr_117031[(1)] = (1));
return statearr_117031;
});
var state_machine__6582__auto____1 = (function (state_117026){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_117026);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e117032){if((e117032 instanceof Object))
{var ex__6585__auto__ = e117032;var statearr_117033_117092 = state_117026;(statearr_117033_117092[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_117026);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e117032;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__117093 = state_117026;
state_117026 = G__117093;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_117026){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_117026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto___117091,this$__$1,map__117014,map__117014__$1,opts,close_chan))
})();var state__6598__auto__ = (function (){var statearr_117034 = f__6597__auto__.call(null);(statearr_117034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto___117091);
return statearr_117034;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto___117091,this$__$1,map__117014,map__117014__$1,opts,close_chan))
);
e.preventDefault();
return false;
});})(this$__$1,map__117014,map__117014__$1,opts,close_chan))
},React.DOM.div({"className": "row"},React.DOM.div({"className": "large-12 columns"},React.DOM.h3(null,"Create and link a new post:"),sablono.interpreter.interpret.call(null,(function (){var temp__4126__auto__ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032));if(cljs.core.truth_(temp__4126__auto__))
{var error = temp__4126__auto__;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"alert-box warning radius"], null),error], null);
} else
{return null;
}
})()),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"posting","posting",919785887),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"alert-box info radius"], null),"Posting... Please wait"], null):null)),sablono.interpreter.input.call(null,{"type": "text", "placeholder": "optional title", "name": "post-title", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"title","title",636505583)), "onChange": ((function (this$__$1,map__117014,map__117014__$1,opts,close_chan){
return (function (p1__116934_SHARP_){return openthink.core.handle_change.call(null,p1__116934_SHARP_,self__.owner,new cljs.core.Keyword(null,"title","title",636505583));
});})(this$__$1,map__117014,map__117014__$1,opts,close_chan))
}),sablono.interpreter.textarea.call(null,{"placeholder": "text", "name": "post-text", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697)), "onChange": ((function (this$__$1,map__117014,map__117014__$1,opts,close_chan){
return (function (p1__116935_SHARP_){return openthink.core.handle_change.call(null,p1__116935_SHARP_,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697));
});})(this$__$1,map__117014,map__117014__$1,opts,close_chan))
}),React.DOM.button({"type": "submit", "className": "button tiny"},"create"))));
});})(map__117014,map__117014__$1,opts,close_chan))
;
openthink.core.t117015.prototype.om$core$IWillMount$ = true;
openthink.core.t117015.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__117014,map__117014__$1,opts,close_chan){
return (function (_){var self__ = this;
var ___$1 = this;var submit_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"submit-chan","submit-chan",1225988800));var c__6596__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto__,submit_chan,___$1,map__117014,map__117014__$1,opts,close_chan){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto__,submit_chan,___$1,map__117014,map__117014__$1,opts,close_chan){
return (function (state_117070){var state_val_117071 = (state_117070[(1)]);if((state_val_117071 === (7)))
{var inst_117038 = (state_117070[(2)]);var inst_117039 = cljs.core.println.call(null,"submitting post");var inst_117040 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"posting","posting",919785887));var inst_117041 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032),null);var inst_117042 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];var inst_117043 = ["title","text"];var inst_117044 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"title","title",636505583));var inst_117045 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697));var inst_117046 = [inst_117044,inst_117045];var inst_117047 = cljs.core.PersistentHashMap.fromArrays(inst_117043,inst_117046);var inst_117048 = cljs.core.PersistentVector.EMPTY_NODE;var inst_117049 = ["children"];var inst_117050 = (new cljs.core.PersistentVector(null,1,(5),inst_117048,inst_117049,null));var inst_117051 = openthink.core.ask_for.call(null,inst_117050,inst_117047);var inst_117052 = new cljs.core.Keyword(null,"reply-to","reply-to",-145674792).cljs$core$IFn$_invoke$arity$1(self__.data);var state_117070__$1 = (function (){var statearr_117072 = state_117070;(statearr_117072[(7)] = inst_117040);
(statearr_117072[(8)] = inst_117051);
(statearr_117072[(9)] = inst_117041);
(statearr_117072[(10)] = inst_117038);
(statearr_117072[(11)] = inst_117039);
(statearr_117072[(12)] = inst_117042);
return statearr_117072;
})();if(cljs.core.truth_(inst_117052))
{var statearr_117073_117094 = state_117070__$1;(statearr_117073_117094[(1)] = (8));
} else
{var statearr_117074_117095 = state_117070__$1;(statearr_117074_117095[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_117071 === (1)))
{var state_117070__$1 = state_117070;var statearr_117075_117096 = state_117070__$1;(statearr_117075_117096[(2)] = null);
(statearr_117075_117096[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_117071 === (4)))
{var state_117070__$1 = state_117070;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_117070__$1,(7),submit_chan);
} else
{if((state_val_117071 === (6)))
{var inst_117066 = (state_117070[(2)]);var state_117070__$1 = state_117070;var statearr_117076_117097 = state_117070__$1;(statearr_117076_117097[(2)] = inst_117066);
(statearr_117076_117097[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_117071 === (3)))
{var inst_117068 = (state_117070[(2)]);var state_117070__$1 = state_117070;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_117070__$1,inst_117068);
} else
{if((state_val_117071 === (2)))
{var state_117070__$1 = state_117070;var statearr_117077_117098 = state_117070__$1;(statearr_117077_117098[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_117071 === (9)))
{var inst_117051 = (state_117070[(8)]);var state_117070__$1 = state_117070;var statearr_117079_117099 = state_117070__$1;(statearr_117079_117099[(2)] = inst_117051);
(statearr_117079_117099[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_117071 === (5)))
{var state_117070__$1 = state_117070;var statearr_117080_117100 = state_117070__$1;(statearr_117080_117100[(2)] = null);
(statearr_117080_117100[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_117071 === (10)))
{var inst_117042 = (state_117070[(12)]);var inst_117058 = (state_117070[(2)]);var inst_117059 = (function (){return ((function (inst_117042,inst_117058,state_val_117071,c__6596__auto__,submit_chan,___$1,map__117014,map__117014__$1,opts,close_chan){
return (function (resp){cljs.core.println.call(null,"submit-form returned");
cljs.core.println.call(null,resp);
var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);cljs.core.println.call(null,resp__$1);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795));
if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032)))
{return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(resp__$1));
} else
{om.core.transact_BANG_.call(null,self__.data,((function (resp__$1,inst_117042,inst_117058,state_val_117071,c__6596__auto__,submit_chan,___$1,map__117014,map__117014__$1,opts,close_chan){
return (function (p1__116933_SHARP_){return cljs.core.merge.call(null,p1__116933_SHARP_,resp__$1);
});})(resp__$1,inst_117042,inst_117058,state_val_117071,c__6596__auto__,submit_chan,___$1,map__117014,map__117014__$1,opts,close_chan))
);
return cljs.core.async.put_BANG_.call(null,self__.close_chan,(1));
}
});
;})(inst_117042,inst_117058,state_val_117071,c__6596__auto__,submit_chan,___$1,map__117014,map__117014__$1,opts,close_chan))
})();var inst_117060 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_117058,inst_117059];var inst_117061 = cljs.core.PersistentHashMap.fromArrays(inst_117042,inst_117060);var inst_117062 = ajax.core.POST.call(null,"/submit-post",inst_117061);var state_117070__$1 = (function (){var statearr_117081 = state_117070;(statearr_117081[(13)] = inst_117062);
return statearr_117081;
})();var statearr_117082_117101 = state_117070__$1;(statearr_117082_117101[(2)] = null);
(statearr_117082_117101[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_117071 === (8)))
{var inst_117051 = (state_117070[(8)]);var inst_117054 = new cljs.core.Keyword(null,"reply-to","reply-to",-145674792).cljs$core$IFn$_invoke$arity$1(self__.data);var inst_117055 = cljs.core.assoc.call(null,inst_117051,"parent",inst_117054);var state_117070__$1 = state_117070;var statearr_117083_117102 = state_117070__$1;(statearr_117083_117102[(2)] = inst_117055);
(statearr_117083_117102[(1)] = (10));
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
});})(c__6596__auto__,submit_chan,___$1,map__117014,map__117014__$1,opts,close_chan))
;return ((function (switch__6581__auto__,c__6596__auto__,submit_chan,___$1,map__117014,map__117014__$1,opts,close_chan){
return (function() {
var state_machine__6582__auto__ = null;
var state_machine__6582__auto____0 = (function (){var statearr_117087 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_117087[(0)] = state_machine__6582__auto__);
(statearr_117087[(1)] = (1));
return statearr_117087;
});
var state_machine__6582__auto____1 = (function (state_117070){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_117070);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e117088){if((e117088 instanceof Object))
{var ex__6585__auto__ = e117088;var statearr_117089_117103 = state_117070;(statearr_117089_117103[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_117070);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e117088;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__117104 = state_117070;
state_117070 = G__117104;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_117070){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_117070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto__,submit_chan,___$1,map__117014,map__117014__$1,opts,close_chan))
})();var state__6598__auto__ = (function (){var statearr_117090 = f__6597__auto__.call(null);(statearr_117090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto__);
return statearr_117090;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto__,submit_chan,___$1,map__117014,map__117014__$1,opts,close_chan))
);
return c__6596__auto__;
});})(map__117014,map__117014__$1,opts,close_chan))
;
openthink.core.t117015.prototype.om$core$IInitState$ = true;
openthink.core.t117015.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__117014,map__117014__$1,opts,close_chan){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"submit-chan","submit-chan",1225988800),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"text","text",-1790561697),"",new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795)], null);
});})(map__117014,map__117014__$1,opts,close_chan))
;
openthink.core.t117015.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__117014,map__117014__$1,opts,close_chan){
return (function (_117017){var self__ = this;
var _117017__$1 = this;return self__.meta117016;
});})(map__117014,map__117014__$1,opts,close_chan))
;
openthink.core.t117015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__117014,map__117014__$1,opts,close_chan){
return (function (_117017,meta117016__$1){var self__ = this;
var _117017__$1 = this;return (new openthink.core.t117015(self__.close_chan,self__.opts,self__.map__117014,self__.p__116936,self__.owner,self__.data,self__.submit_form,meta117016__$1));
});})(map__117014,map__117014__$1,opts,close_chan))
;
openthink.core.__GT_t117015 = ((function (map__117014,map__117014__$1,opts,close_chan){
return (function __GT_t117015(close_chan__$1,opts__$1,map__117014__$2,p__116936__$1,owner__$1,data__$1,submit_form__$1,meta117016){return (new openthink.core.t117015(close_chan__$1,opts__$1,map__117014__$2,p__116936__$1,owner__$1,data__$1,submit_form__$1,meta117016));
});})(map__117014,map__117014__$1,opts,close_chan))
;
}
return (new openthink.core.t117015(close_chan,opts,map__117014__$1,p__116936,owner,data,submit_form,null));
});
openthink.core.link_form = (function link_form(data,owner,p__117107){var map__117173 = p__117107;var map__117173__$1 = ((cljs.core.seq_QMARK_.call(null,map__117173))?cljs.core.apply.call(null,cljs.core.hash_map,map__117173):map__117173);var opts = map__117173__$1;var close_chan = cljs.core.get.call(null,map__117173__$1,new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891));if(typeof openthink.core.t117174 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t117174 = (function (close_chan,opts,map__117173,p__117107,owner,data,link_form,meta117175){
this.close_chan = close_chan;
this.opts = opts;
this.map__117173 = map__117173;
this.p__117107 = p__117107;
this.owner = owner;
this.data = data;
this.link_form = link_form;
this.meta117175 = meta117175;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t117174.cljs$lang$type = true;
openthink.core.t117174.cljs$lang$ctorStr = "openthink.core/t117174";
openthink.core.t117174.cljs$lang$ctorPrWriter = ((function (map__117173,map__117173__$1,opts,close_chan){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t117174");
});})(map__117173,map__117173__$1,opts,close_chan))
;
openthink.core.t117174.prototype.om$core$IRender$ = true;
openthink.core.t117174.prototype.om$core$IRender$render$arity$1 = ((function (map__117173,map__117173__$1,opts,close_chan){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.form({"onSubmit": ((function (this$__$1,map__117173,map__117173__$1,opts,close_chan){
return (function (e){var c__6596__auto___117238 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto___117238,this$__$1,map__117173,map__117173__$1,opts,close_chan){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto___117238,this$__$1,map__117173,map__117173__$1,opts,close_chan){
return (function (state_117185){var state_val_117186 = (state_117185[(1)]);if((state_val_117186 === (2)))
{var inst_117183 = (state_117185[(2)]);var state_117185__$1 = state_117185;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_117185__$1,inst_117183);
} else
{if((state_val_117186 === (1)))
{var inst_117181 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"submit-chan","submit-chan",1225988800));var state_117185__$1 = state_117185;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_117185__$1,(2),inst_117181,(1));
} else
{return null;
}
}
});})(c__6596__auto___117238,this$__$1,map__117173,map__117173__$1,opts,close_chan))
;return ((function (switch__6581__auto__,c__6596__auto___117238,this$__$1,map__117173,map__117173__$1,opts,close_chan){
return (function() {
var state_machine__6582__auto__ = null;
var state_machine__6582__auto____0 = (function (){var statearr_117190 = [null,null,null,null,null,null,null];(statearr_117190[(0)] = state_machine__6582__auto__);
(statearr_117190[(1)] = (1));
return statearr_117190;
});
var state_machine__6582__auto____1 = (function (state_117185){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_117185);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e117191){if((e117191 instanceof Object))
{var ex__6585__auto__ = e117191;var statearr_117192_117239 = state_117185;(statearr_117192_117239[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_117185);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e117191;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__117240 = state_117185;
state_117185 = G__117240;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_117185){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_117185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto___117238,this$__$1,map__117173,map__117173__$1,opts,close_chan))
})();var state__6598__auto__ = (function (){var statearr_117193 = f__6597__auto__.call(null);(statearr_117193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto___117238);
return statearr_117193;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto___117238,this$__$1,map__117173,map__117173__$1,opts,close_chan))
);
e.preventDefault();
return false;
});})(this$__$1,map__117173,map__117173__$1,opts,close_chan))
},React.DOM.div({"className": "row"},React.DOM.div({"className": "large-12 columns"},React.DOM.h3(null,"Link an existing post:"),sablono.interpreter.interpret.call(null,(function (){var temp__4126__auto__ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032));if(cljs.core.truth_(temp__4126__auto__))
{var error = temp__4126__auto__;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"alert-box warning radius"], null),error], null);
} else
{return null;
}
})()),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"posting","posting",919785887),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"alert-box info radius"], null),"Linking... Please wait"], null):null)),sablono.interpreter.input.call(null,{"type": "text", "placeholder": "URL or ID to a post", "name": "link-text", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"link","link",-1769163468)), "onChange": ((function (this$__$1,map__117173,map__117173__$1,opts,close_chan){
return (function (p1__117106_SHARP_){return openthink.core.handle_change.call(null,p1__117106_SHARP_,self__.owner,new cljs.core.Keyword(null,"link","link",-1769163468));
});})(this$__$1,map__117173,map__117173__$1,opts,close_chan))
}),React.DOM.button({"type": "submit", "className": "button tiny"},"link"))));
});})(map__117173,map__117173__$1,opts,close_chan))
;
openthink.core.t117174.prototype.om$core$IWillMount$ = true;
openthink.core.t117174.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__117173,map__117173__$1,opts,close_chan){
return (function (_){var self__ = this;
var ___$1 = this;var submit_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"submit-chan","submit-chan",1225988800));var c__6596__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto__,submit_chan,___$1,map__117173,map__117173__$1,opts,close_chan){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto__,submit_chan,___$1,map__117173,map__117173__$1,opts,close_chan){
return (function (state_117222){var state_val_117223 = (state_117222[(1)]);if((state_val_117223 === (7)))
{var inst_117197 = (state_117222[(2)]);var inst_117198 = cljs.core.println.call(null,"linking post");var inst_117199 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"posting","posting",919785887));var inst_117200 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032),null);var inst_117201 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];var inst_117202 = cljs.core.PersistentVector.EMPTY_NODE;var inst_117203 = ["children"];var inst_117204 = (new cljs.core.PersistentVector(null,1,(5),inst_117202,inst_117203,null));var inst_117205 = ["child-text","parent"];var inst_117206 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"link","link",-1769163468));var inst_117207 = new cljs.core.Keyword(null,"current_post","current_post",2072811381).cljs$core$IFn$_invoke$arity$1(self__.data);var inst_117208 = [inst_117206,inst_117207];var inst_117209 = cljs.core.PersistentHashMap.fromArrays(inst_117205,inst_117208);var inst_117210 = openthink.core.ask_for.call(null,inst_117204,inst_117209);var inst_117211 = (function (){return ((function (inst_117197,inst_117198,inst_117199,inst_117200,inst_117201,inst_117202,inst_117203,inst_117204,inst_117205,inst_117206,inst_117207,inst_117208,inst_117209,inst_117210,state_val_117223,c__6596__auto__,submit_chan,___$1,map__117173,map__117173__$1,opts,close_chan){
return (function (resp){cljs.core.println.call(null,"link-form returned");
cljs.core.println.call(null,resp);
var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);cljs.core.println.call(null,resp__$1);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795));
if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032)))
{return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(resp__$1));
} else
{om.core.transact_BANG_.call(null,self__.data,((function (resp__$1,inst_117197,inst_117198,inst_117199,inst_117200,inst_117201,inst_117202,inst_117203,inst_117204,inst_117205,inst_117206,inst_117207,inst_117208,inst_117209,inst_117210,state_val_117223,c__6596__auto__,submit_chan,___$1,map__117173,map__117173__$1,opts,close_chan){
return (function (p1__117105_SHARP_){return cljs.core.merge.call(null,p1__117105_SHARP_,resp__$1);
});})(resp__$1,inst_117197,inst_117198,inst_117199,inst_117200,inst_117201,inst_117202,inst_117203,inst_117204,inst_117205,inst_117206,inst_117207,inst_117208,inst_117209,inst_117210,state_val_117223,c__6596__auto__,submit_chan,___$1,map__117173,map__117173__$1,opts,close_chan))
);
return cljs.core.async.put_BANG_.call(null,self__.close_chan,(1));
}
});
;})(inst_117197,inst_117198,inst_117199,inst_117200,inst_117201,inst_117202,inst_117203,inst_117204,inst_117205,inst_117206,inst_117207,inst_117208,inst_117209,inst_117210,state_val_117223,c__6596__auto__,submit_chan,___$1,map__117173,map__117173__$1,opts,close_chan))
})();var inst_117212 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_117210,inst_117211];var inst_117213 = cljs.core.PersistentHashMap.fromArrays(inst_117201,inst_117212);var inst_117214 = ajax.core.POST.call(null,"/link-post",inst_117213);var state_117222__$1 = (function (){var statearr_117224 = state_117222;(statearr_117224[(7)] = inst_117214);
(statearr_117224[(8)] = inst_117197);
(statearr_117224[(9)] = inst_117200);
(statearr_117224[(10)] = inst_117198);
(statearr_117224[(11)] = inst_117199);
return statearr_117224;
})();var statearr_117225_117241 = state_117222__$1;(statearr_117225_117241[(2)] = null);
(statearr_117225_117241[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_117223 === (6)))
{var inst_117218 = (state_117222[(2)]);var state_117222__$1 = state_117222;var statearr_117226_117242 = state_117222__$1;(statearr_117226_117242[(2)] = inst_117218);
(statearr_117226_117242[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_117223 === (5)))
{var state_117222__$1 = state_117222;var statearr_117227_117243 = state_117222__$1;(statearr_117227_117243[(2)] = null);
(statearr_117227_117243[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_117223 === (4)))
{var state_117222__$1 = state_117222;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_117222__$1,(7),submit_chan);
} else
{if((state_val_117223 === (3)))
{var inst_117220 = (state_117222[(2)]);var state_117222__$1 = state_117222;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_117222__$1,inst_117220);
} else
{if((state_val_117223 === (2)))
{var state_117222__$1 = state_117222;var statearr_117228_117244 = state_117222__$1;(statearr_117228_117244[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_117223 === (1)))
{var state_117222__$1 = state_117222;var statearr_117230_117245 = state_117222__$1;(statearr_117230_117245[(2)] = null);
(statearr_117230_117245[(1)] = (2));
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
});})(c__6596__auto__,submit_chan,___$1,map__117173,map__117173__$1,opts,close_chan))
;return ((function (switch__6581__auto__,c__6596__auto__,submit_chan,___$1,map__117173,map__117173__$1,opts,close_chan){
return (function() {
var state_machine__6582__auto__ = null;
var state_machine__6582__auto____0 = (function (){var statearr_117234 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_117234[(0)] = state_machine__6582__auto__);
(statearr_117234[(1)] = (1));
return statearr_117234;
});
var state_machine__6582__auto____1 = (function (state_117222){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_117222);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e117235){if((e117235 instanceof Object))
{var ex__6585__auto__ = e117235;var statearr_117236_117246 = state_117222;(statearr_117236_117246[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_117222);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e117235;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__117247 = state_117222;
state_117222 = G__117247;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_117222){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_117222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto__,submit_chan,___$1,map__117173,map__117173__$1,opts,close_chan))
})();var state__6598__auto__ = (function (){var statearr_117237 = f__6597__auto__.call(null);(statearr_117237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto__);
return statearr_117237;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto__,submit_chan,___$1,map__117173,map__117173__$1,opts,close_chan))
);
return c__6596__auto__;
});})(map__117173,map__117173__$1,opts,close_chan))
;
openthink.core.t117174.prototype.om$core$IInitState$ = true;
openthink.core.t117174.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__117173,map__117173__$1,opts,close_chan){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"submit-chan","submit-chan",1225988800),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"link","link",-1769163468),"",new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795)], null);
});})(map__117173,map__117173__$1,opts,close_chan))
;
openthink.core.t117174.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__117173,map__117173__$1,opts,close_chan){
return (function (_117176){var self__ = this;
var _117176__$1 = this;return self__.meta117175;
});})(map__117173,map__117173__$1,opts,close_chan))
;
openthink.core.t117174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__117173,map__117173__$1,opts,close_chan){
return (function (_117176,meta117175__$1){var self__ = this;
var _117176__$1 = this;return (new openthink.core.t117174(self__.close_chan,self__.opts,self__.map__117173,self__.p__117107,self__.owner,self__.data,self__.link_form,meta117175__$1));
});})(map__117173,map__117173__$1,opts,close_chan))
;
openthink.core.__GT_t117174 = ((function (map__117173,map__117173__$1,opts,close_chan){
return (function __GT_t117174(close_chan__$1,opts__$1,map__117173__$2,p__117107__$1,owner__$1,data__$1,link_form__$1,meta117175){return (new openthink.core.t117174(close_chan__$1,opts__$1,map__117173__$2,p__117107__$1,owner__$1,data__$1,link_form__$1,meta117175));
});})(map__117173,map__117173__$1,opts,close_chan))
;
}
return (new openthink.core.t117174(close_chan,opts,map__117173__$1,p__117107,owner,data,link_form,null));
});
openthink.core.post_reply_section = (function post_reply_section(data,owner,opts){if(typeof openthink.core.t117251 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t117251 = (function (opts,owner,data,post_reply_section,meta117252){
this.opts = opts;
this.owner = owner;
this.data = data;
this.post_reply_section = post_reply_section;
this.meta117252 = meta117252;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t117251.cljs$lang$type = true;
openthink.core.t117251.cljs$lang$ctorStr = "openthink.core/t117251";
openthink.core.t117251.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t117251");
});
openthink.core.t117251.prototype.om$core$IRender$ = true;
openthink.core.t117251.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return sablono.interpreter.interpret.call(null,((cljs.core.not.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(self__.data)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"You must be logged in to submit a post. ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (this$__$1){
return (function (){return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.Keyword(null,"register","register",1968522516));
});})(this$__$1))
], null),"Register now"], null)], null):((cljs.core.not.call(null,new cljs.core.Keyword(null,"reply-to","reply-to",-145674792).cljs$core$IFn$_invoke$arity$1(self__.data)))?om.core.build.call(null,openthink.core.submit_form,self__.data):(function (){var reply_type = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"reply-type","reply-type",1565507820));return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),""], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Replying to post: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(openthink.core.current_post.call(null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (reply_type,this$__$1){
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
openthink.core.t117251.prototype.om$core$IInitState$ = true;
openthink.core.t117251.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reply-type","reply-type",1565507820),new cljs.core.Keyword(null,"post","post",269697687)], null);
});
openthink.core.t117251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_117253){var self__ = this;
var _117253__$1 = this;return self__.meta117252;
});
openthink.core.t117251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_117253,meta117252__$1){var self__ = this;
var _117253__$1 = this;return (new openthink.core.t117251(self__.opts,self__.owner,self__.data,self__.post_reply_section,meta117252__$1));
});
openthink.core.__GT_t117251 = (function __GT_t117251(opts__$1,owner__$1,data__$1,post_reply_section__$1,meta117252){return (new openthink.core.t117251(opts__$1,owner__$1,data__$1,post_reply_section__$1,meta117252));
});
}
return (new openthink.core.t117251(opts,owner,data,post_reply_section,null));
});
openthink.core.post_section = (function post_section(data,owner){if(typeof openthink.core.t117257 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t117257 = (function (owner,data,post_section,meta117258){
this.owner = owner;
this.data = data;
this.post_section = post_section;
this.meta117258 = meta117258;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t117257.cljs$lang$type = true;
openthink.core.t117257.cljs$lang$ctorStr = "openthink.core/t117257";
openthink.core.t117257.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t117257");
});
openthink.core.t117257.prototype.om$core$IRender$ = true;
openthink.core.t117257.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "post-section medium-7 columns"},sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.core.post_view,self__.data)),sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.core.comments_view,self__.data)));
});
openthink.core.t117257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_117259){var self__ = this;
var _117259__$1 = this;return self__.meta117258;
});
openthink.core.t117257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_117259,meta117258__$1){var self__ = this;
var _117259__$1 = this;return (new openthink.core.t117257(self__.owner,self__.data,self__.post_section,meta117258__$1));
});
openthink.core.__GT_t117257 = (function __GT_t117257(owner__$1,data__$1,post_section__$1,meta117258){return (new openthink.core.t117257(owner__$1,data__$1,post_section__$1,meta117258));
});
}
return (new openthink.core.t117257(owner,data,post_section,null));
});
openthink.core.children_section = (function children_section(data,owner){if(typeof openthink.core.t117263 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t117263 = (function (owner,data,children_section,meta117264){
this.owner = owner;
this.data = data;
this.children_section = children_section;
this.meta117264 = meta117264;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t117263.cljs$lang$type = true;
openthink.core.t117263.cljs$lang$ctorStr = "openthink.core/t117263";
openthink.core.t117263.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t117263");
});
openthink.core.t117263.prototype.om$core$IRender$ = true;
openthink.core.t117263.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "children-section medium-5 columns"},sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.core.children_view,self__.data)));
});
openthink.core.t117263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_117265){var self__ = this;
var _117265__$1 = this;return self__.meta117264;
});
openthink.core.t117263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_117265,meta117264__$1){var self__ = this;
var _117265__$1 = this;return (new openthink.core.t117263(self__.owner,self__.data,self__.children_section,meta117264__$1));
});
openthink.core.__GT_t117263 = (function __GT_t117263(owner__$1,data__$1,children_section__$1,meta117264){return (new openthink.core.t117263(owner__$1,data__$1,children_section__$1,meta117264));
});
}
return (new openthink.core.t117263(owner,data,children_section,null));
});
openthink.core.body = (function body(data,owner){if(typeof openthink.core.t117269 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t117269 = (function (owner,data,body,meta117270){
this.owner = owner;
this.data = data;
this.body = body;
this.meta117270 = meta117270;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t117269.cljs$lang$type = true;
openthink.core.t117269.cljs$lang$ctorStr = "openthink.core/t117269";
openthink.core.t117269.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t117269");
});
openthink.core.t117269.prototype.om$core$IRender$ = true;
openthink.core.t117269.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "main-content row"},sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.core.post_section,self__.data)),sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.core.children_section,self__.data)));
});
openthink.core.t117269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_117271){var self__ = this;
var _117271__$1 = this;return self__.meta117270;
});
openthink.core.t117269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_117271,meta117270__$1){var self__ = this;
var _117271__$1 = this;return (new openthink.core.t117269(self__.owner,self__.data,self__.body,meta117270__$1));
});
openthink.core.__GT_t117269 = (function __GT_t117269(owner__$1,data__$1,body__$1,meta117270){return (new openthink.core.t117269(owner__$1,data__$1,body__$1,meta117270));
});
}
return (new openthink.core.t117269(owner,data,body,null));
});
openthink.core.basic_modal = (function basic_modal(data,owner){if(typeof openthink.core.t117277 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t117277 = (function (owner,data,basic_modal,meta117278){
this.owner = owner;
this.data = data;
this.basic_modal = basic_modal;
this.meta117278 = meta117278;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t117277.cljs$lang$type = true;
openthink.core.t117277.cljs$lang$ctorStr = "openthink.core/t117277";
openthink.core.t117277.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t117277");
});
openthink.core.t117277.prototype.om$core$IRender$ = true;
openthink.core.t117277.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.h2(null,"some modal txt");
});
openthink.core.t117277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_117279){var self__ = this;
var _117279__$1 = this;return self__.meta117278;
});
openthink.core.t117277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_117279,meta117278__$1){var self__ = this;
var _117279__$1 = this;return (new openthink.core.t117277(self__.owner,self__.data,self__.basic_modal,meta117278__$1));
});
openthink.core.__GT_t117277 = (function __GT_t117277(owner__$1,data__$1,basic_modal__$1,meta117278){return (new openthink.core.t117277(owner__$1,data__$1,basic_modal__$1,meta117278));
});
}
return (new openthink.core.t117277(owner,data,basic_modal,null));
});
openthink.core.modal_map = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"basic","basic",1043717368),openthink.core.basic_modal,new cljs.core.Keyword(null,"new-post","new-post",-1808203791),openthink.core.post_reply_section,new cljs.core.Keyword(null,"register","register",1968522516),openthink.core.register_form], null);
openthink.core.close_modal = (function close_modal(){cljs.core.println.call(null,"modal should be closing");
return cljs.core.swap_BANG_.call(null,openthink.core.app_state,cljs.core.dissoc,new cljs.core.Keyword(null,"modal","modal",-1031880850));
});
/**
* reusable modal component.
* modal-view is the component that should be rendered as a modal
*/
openthink.core.modal = (function modal(cursor,owner,p__117282){var map__117327 = p__117282;var map__117327__$1 = ((cljs.core.seq_QMARK_.call(null,map__117327))?cljs.core.apply.call(null,cljs.core.hash_map,map__117327):map__117327);var modal_view = cljs.core.get.call(null,map__117327__$1,new cljs.core.Keyword(null,"modal-view","modal-view",-1572274108));if(typeof openthink.core.t117328 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t117328 = (function (modal_view,map__117327,p__117282,owner,cursor,modal,meta117329){
this.modal_view = modal_view;
this.map__117327 = map__117327;
this.p__117282 = p__117282;
this.owner = owner;
this.cursor = cursor;
this.modal = modal;
this.meta117329 = meta117329;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t117328.cljs$lang$type = true;
openthink.core.t117328.cljs$lang$ctorStr = "openthink.core/t117328";
openthink.core.t117328.cljs$lang$ctorPrWriter = ((function (map__117327,map__117327__$1,modal_view){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t117328");
});})(map__117327,map__117327__$1,modal_view))
;
openthink.core.t117328.prototype.om$core$IRender$ = true;
openthink.core.t117328.prototype.om$core$IRender$render$arity$1 = ((function (map__117327,map__117327__$1,modal_view){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"className": "reveal-modal-bg", "style": cljs.core.clj__GT_js.call(null,{"display": "block"})}),React.DOM.div({"id": "myModal", "className": "reveal-modal open", "style": cljs.core.clj__GT_js.call(null,{"opacity": (1), "top": "88px", "display": "block", "visibility": "visible"})},sablono.interpreter.interpret.call(null,om.core.build.call(null,self__.modal_view,self__.cursor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891))], null)], null)))));
});})(map__117327,map__117327__$1,modal_view))
;
openthink.core.t117328.prototype.om$core$IDidMount$ = true;
openthink.core.t117328.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__117327,map__117327__$1,modal_view){
return (function (_){var self__ = this;
var ___$1 = this;var outside_clicks = openthink.core.listen.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("reveal-modal-bg"))[(0)]),"click");var c__6596__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto__,outside_clicks,___$1,map__117327,map__117327__$1,modal_view){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto__,outside_clicks,___$1,map__117327,map__117327__$1,modal_view){
return (function (state_117340){var state_val_117341 = (state_117340[(1)]);if((state_val_117341 === (4)))
{var inst_117335 = (state_117340[(2)]);var inst_117336 = openthink.core.close_modal.call(null);var state_117340__$1 = (function (){var statearr_117342 = state_117340;(statearr_117342[(7)] = inst_117335);
return statearr_117342;
})();var statearr_117343_117371 = state_117340__$1;(statearr_117343_117371[(2)] = inst_117336);
(statearr_117343_117371[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_117341 === (3)))
{var inst_117338 = (state_117340[(2)]);var state_117340__$1 = state_117340;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_117340__$1,inst_117338);
} else
{if((state_val_117341 === (2)))
{var state_117340__$1 = state_117340;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_117340__$1,(4),outside_clicks);
} else
{if((state_val_117341 === (1)))
{var state_117340__$1 = state_117340;var statearr_117344_117372 = state_117340__$1;(statearr_117344_117372[(2)] = null);
(statearr_117344_117372[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6596__auto__,outside_clicks,___$1,map__117327,map__117327__$1,modal_view))
;return ((function (switch__6581__auto__,c__6596__auto__,outside_clicks,___$1,map__117327,map__117327__$1,modal_view){
return (function() {
var state_machine__6582__auto__ = null;
var state_machine__6582__auto____0 = (function (){var statearr_117348 = [null,null,null,null,null,null,null,null];(statearr_117348[(0)] = state_machine__6582__auto__);
(statearr_117348[(1)] = (1));
return statearr_117348;
});
var state_machine__6582__auto____1 = (function (state_117340){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_117340);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e117349){if((e117349 instanceof Object))
{var ex__6585__auto__ = e117349;var statearr_117350_117373 = state_117340;(statearr_117350_117373[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_117340);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e117349;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__117374 = state_117340;
state_117340 = G__117374;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_117340){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_117340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto__,outside_clicks,___$1,map__117327,map__117327__$1,modal_view))
})();var state__6598__auto__ = (function (){var statearr_117351 = f__6597__auto__.call(null);(statearr_117351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto__);
return statearr_117351;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto__,outside_clicks,___$1,map__117327,map__117327__$1,modal_view))
);
return c__6596__auto__;
});})(map__117327,map__117327__$1,modal_view))
;
openthink.core.t117328.prototype.om$core$IWillMount$ = true;
openthink.core.t117328.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__117327,map__117327__$1,modal_view){
return (function (_){var self__ = this;
var ___$1 = this;var close_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891));var c__6596__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6596__auto__,close_chan,___$1,map__117327,map__117327__$1,modal_view){
return (function (){var f__6597__auto__ = (function (){var switch__6581__auto__ = ((function (c__6596__auto__,close_chan,___$1,map__117327,map__117327__$1,modal_view){
return (function (state_117359){var state_val_117360 = (state_117359[(1)]);if((state_val_117360 === (4)))
{var inst_117354 = (state_117359[(2)]);var inst_117355 = openthink.core.close_modal.call(null);var state_117359__$1 = (function (){var statearr_117361 = state_117359;(statearr_117361[(7)] = inst_117354);
return statearr_117361;
})();var statearr_117362_117375 = state_117359__$1;(statearr_117362_117375[(2)] = inst_117355);
(statearr_117362_117375[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_117360 === (3)))
{var inst_117357 = (state_117359[(2)]);var state_117359__$1 = state_117359;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_117359__$1,inst_117357);
} else
{if((state_val_117360 === (2)))
{var state_117359__$1 = state_117359;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_117359__$1,(4),close_chan);
} else
{if((state_val_117360 === (1)))
{var state_117359__$1 = state_117359;var statearr_117363_117376 = state_117359__$1;(statearr_117363_117376[(2)] = null);
(statearr_117363_117376[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6596__auto__,close_chan,___$1,map__117327,map__117327__$1,modal_view))
;return ((function (switch__6581__auto__,c__6596__auto__,close_chan,___$1,map__117327,map__117327__$1,modal_view){
return (function() {
var state_machine__6582__auto__ = null;
var state_machine__6582__auto____0 = (function (){var statearr_117367 = [null,null,null,null,null,null,null,null];(statearr_117367[(0)] = state_machine__6582__auto__);
(statearr_117367[(1)] = (1));
return statearr_117367;
});
var state_machine__6582__auto____1 = (function (state_117359){while(true){
var ret_value__6583__auto__ = (function (){try{while(true){
var result__6584__auto__ = switch__6581__auto__.call(null,state_117359);if(cljs.core.keyword_identical_QMARK_.call(null,result__6584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6584__auto__;
}
break;
}
}catch (e117368){if((e117368 instanceof Object))
{var ex__6585__auto__ = e117368;var statearr_117369_117377 = state_117359;(statearr_117369_117377[(5)] = ex__6585__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_117359);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e117368;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__117378 = state_117359;
state_117359 = G__117378;
continue;
}
} else
{return ret_value__6583__auto__;
}
break;
}
});
state_machine__6582__auto__ = function(state_117359){
switch(arguments.length){
case 0:
return state_machine__6582__auto____0.call(this);
case 1:
return state_machine__6582__auto____1.call(this,state_117359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6582__auto____0;
state_machine__6582__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6582__auto____1;
return state_machine__6582__auto__;
})()
;})(switch__6581__auto__,c__6596__auto__,close_chan,___$1,map__117327,map__117327__$1,modal_view))
})();var state__6598__auto__ = (function (){var statearr_117370 = f__6597__auto__.call(null);(statearr_117370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6596__auto__);
return statearr_117370;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6598__auto__);
});})(c__6596__auto__,close_chan,___$1,map__117327,map__117327__$1,modal_view))
);
return c__6596__auto__;
});})(map__117327,map__117327__$1,modal_view))
;
openthink.core.t117328.prototype.om$core$IInitState$ = true;
openthink.core.t117328.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__117327,map__117327__$1,modal_view){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close-chan","close-chan",-2141816891),cljs.core.async.chan.call(null)], null);
});})(map__117327,map__117327__$1,modal_view))
;
openthink.core.t117328.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__117327,map__117327__$1,modal_view){
return (function (_117330){var self__ = this;
var _117330__$1 = this;return self__.meta117329;
});})(map__117327,map__117327__$1,modal_view))
;
openthink.core.t117328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__117327,map__117327__$1,modal_view){
return (function (_117330,meta117329__$1){var self__ = this;
var _117330__$1 = this;return (new openthink.core.t117328(self__.modal_view,self__.map__117327,self__.p__117282,self__.owner,self__.cursor,self__.modal,meta117329__$1));
});})(map__117327,map__117327__$1,modal_view))
;
openthink.core.__GT_t117328 = ((function (map__117327,map__117327__$1,modal_view){
return (function __GT_t117328(modal_view__$1,map__117327__$2,p__117282__$1,owner__$1,cursor__$1,modal__$1,meta117329){return (new openthink.core.t117328(modal_view__$1,map__117327__$2,p__117282__$1,owner__$1,cursor__$1,modal__$1,meta117329));
});})(map__117327,map__117327__$1,modal_view))
;
}
return (new openthink.core.t117328(modal_view,map__117327__$1,p__117282,owner,cursor,modal,null));
});
openthink.core.app = (function app(data,owner,opts){if(typeof openthink.core.t117382 !== 'undefined')
{} else
{
/**
* @constructor
*/
openthink.core.t117382 = (function (opts,owner,data,app,meta117383){
this.opts = opts;
this.owner = owner;
this.data = data;
this.app = app;
this.meta117383 = meta117383;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.core.t117382.cljs$lang$type = true;
openthink.core.t117382.cljs$lang$ctorStr = "openthink.core/t117382";
openthink.core.t117382.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){return cljs.core._write.call(null,writer__4224__auto__,"openthink.core/t117382");
});
openthink.core.t117382.prototype.om$core$IRender$ = true;
openthink.core.t117382.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "app"},sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.core.header,self__.data)),sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.core.body,self__.data)),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"modal","modal",-1031880850).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,openthink.core.modal,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modal-view","modal-view",-1572274108),new cljs.core.Keyword(null,"modal","modal",-1031880850).cljs$core$IFn$_invoke$arity$1(self__.data).call(null,openthink.core.modal_map)], null)], null)):null)));
});
openthink.core.t117382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_117384){var self__ = this;
var _117384__$1 = this;return self__.meta117383;
});
openthink.core.t117382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_117384,meta117383__$1){var self__ = this;
var _117384__$1 = this;return (new openthink.core.t117382(self__.opts,self__.owner,self__.data,self__.app,meta117383__$1));
});
openthink.core.__GT_t117382 = (function __GT_t117382(opts__$1,owner__$1,data__$1,app__$1,meta117383){return (new openthink.core.t117382(opts__$1,owner__$1,data__$1,app__$1,meta117383));
});
}
return (new openthink.core.t117382(opts,owner,data,app,null));
});
cljs.core.deref.call(null,openthink.core.app_state);
openthink.core.start = (function start(target,state,app){return om.core.root.call(null,app,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null));
});
openthink.core.start.call(null,document.getElementById("app"),openthink.core.app_state,openthink.core.app);

//# sourceMappingURL=core.js.map