// Compiled by ClojureScript 1.9.293 {}
goog.provide('openthink.utils');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('dommy.core');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('om.core');
goog.require('cljs.reader');
openthink.utils.listen = (function openthink$utils$listen(el,type){
var out = cljs.core.async.chan.call(null);
goog.events.listen(el,type,((function (out){
return (function (e){
return cljs.core.async.put_BANG_.call(null,out,e);
});})(out))
);

return out;
});
openthink.utils.handle_change = (function openthink$utils$handle_change(e,owner,field){
return om.core.set_state_BANG_.call(null,owner,field,e.target.value);
});
openthink.utils.remove_last = (function openthink$utils$remove_last(s,n){
var end_index = (cljs.core.count.call(null,s) - n);
return cljs.core.subs.call(null,s,(0),end_index);
});
openthink.utils.date = (function openthink$utils$date(dt){
return openthink.utils.remove_last.call(null,[cljs.core.str(dt)].join(''),(15));
});
openthink.utils.split_text = (function openthink$utils$split_text(s){
return cljs.core.remove.call(null,cljs.core.empty_QMARK_,clojure.string.split.call(null,s,/\\n|\n/));
});
openthink.utils.render_text = (function openthink$utils$render_text(s){
var iter__7326__auto__ = (function openthink$utils$render_text_$_iter__43567(s__43568){
return (new cljs.core.LazySeq(null,(function (){
var s__43568__$1 = s__43568;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__43568__$1);
if(temp__4657__auto__){
var s__43568__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43568__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__43568__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__43570 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__43569 = (0);
while(true){
if((i__43569 < size__7325__auto__)){
var p = cljs.core._nth.call(null,c__7324__auto__,i__43569);
cljs.core.chunk_append.call(null,b__43570,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),p], null));

var G__43571 = (i__43569 + (1));
i__43569 = G__43571;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43570),openthink$utils$render_text_$_iter__43567.call(null,cljs.core.chunk_rest.call(null,s__43568__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43570),null);
}
} else {
var p = cljs.core.first.call(null,s__43568__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),p], null),openthink$utils$render_text_$_iter__43567.call(null,cljs.core.rest.call(null,s__43568__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7326__auto__.call(null,openthink.utils.split_text.call(null,s));
});
openthink.utils.select_values = (function openthink$utils$select_values(map,ks){
return cljs.core.reduce.call(null,(function (p1__43572_SHARP_,p2__43573_SHARP_){
return cljs.core.conj.call(null,p1__43572_SHARP_,map.call(null,p2__43573_SHARP_));
}),cljs.core.PersistentVector.EMPTY,ks);
});
openthink.utils.do_on_enter = (function openthink$utils$do_on_enter(f){
return (function (e){
if((e.keyCode === (13))){
return f.call(null);
} else {
return null;
}
});
});
openthink.utils.put_nil_BANG_ = (function openthink$utils$put_nil_BANG_(chan,value){
cljs.core.async.put_BANG_.call(null,chan,value);

return false;
});
/**
 * change html character entities into special characters
 */
openthink.utils.unescape_html = (function openthink$utils$unescape_html(text){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str(text)].join(''),"&amp;","&"),"&lt;","<"),"&gt;",">"),"&quot;","\""),"&#34;","\""),"&#x27;","'"),"&#x2F;","/");
});
openthink.utils.debounce = (function openthink$utils$debounce(var_args){
var args43574 = [];
var len__7651__auto___43630 = arguments.length;
var i__7652__auto___43631 = (0);
while(true){
if((i__7652__auto___43631 < len__7651__auto___43630)){
args43574.push((arguments[i__7652__auto___43631]));

var G__43632 = (i__7652__auto___43631 + (1));
i__7652__auto___43631 = G__43632;
continue;
} else {
}
break;
}

var G__43576 = args43574.length;
switch (G__43576) {
case 2:
return openthink.utils.debounce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return openthink.utils.debounce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43574.length)].join('')));

}
});

openthink.utils.debounce.cljs$core$IFn$_invoke$arity$2 = (function (c,ms){
return openthink.utils.debounce.call(null,cljs.core.async.chan.call(null),c,ms);
});

openthink.utils.debounce.cljs$core$IFn$_invoke$arity$3 = (function (c_SINGLEQUOTE_,c,ms){
var c__11475__auto___43634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto___43634){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto___43634){
return (function (state_43606){
var state_val_43607 = (state_43606[(1)]);
if((state_val_43607 === (7))){
var inst_43602 = (state_43606[(2)]);
var state_43606__$1 = state_43606;
var statearr_43608_43635 = state_43606__$1;
(statearr_43608_43635[(2)] = inst_43602);

(statearr_43608_43635[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43607 === (1))){
var state_43606__$1 = state_43606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43606__$1,(2),c);
} else {
if((state_val_43607 === (4))){
var inst_43604 = (state_43606[(2)]);
var state_43606__$1 = state_43606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43606__$1,inst_43604);
} else {
if((state_val_43607 === (6))){
var state_43606__$1 = state_43606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43606__$1,(9),c);
} else {
if((state_val_43607 === (3))){
var inst_43579 = (state_43606[(7)]);
var inst_43582 = (inst_43579 == null);
var state_43606__$1 = state_43606;
if(cljs.core.truth_(inst_43582)){
var statearr_43609_43636 = state_43606__$1;
(statearr_43609_43636[(1)] = (5));

} else {
var statearr_43610_43637 = state_43606__$1;
(statearr_43610_43637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43607 === (12))){
var inst_43600 = (state_43606[(2)]);
var state_43606__$1 = state_43606;
var statearr_43611_43638 = state_43606__$1;
(statearr_43611_43638[(2)] = inst_43600);

(statearr_43611_43638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43607 === (2))){
var inst_43578 = (state_43606[(2)]);
var inst_43579 = null;
var inst_43580 = inst_43578;
var state_43606__$1 = (function (){var statearr_43612 = state_43606;
(statearr_43612[(7)] = inst_43579);

(statearr_43612[(8)] = inst_43580);

return statearr_43612;
})();
var statearr_43613_43639 = state_43606__$1;
(statearr_43613_43639[(2)] = null);

(statearr_43613_43639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43607 === (11))){
var inst_43590 = (state_43606[(9)]);
var inst_43597 = (new Date());
var inst_43579 = inst_43597;
var inst_43580 = inst_43590;
var state_43606__$1 = (function (){var statearr_43614 = state_43606;
(statearr_43614[(7)] = inst_43579);

(statearr_43614[(8)] = inst_43580);

return statearr_43614;
})();
var statearr_43615_43640 = state_43606__$1;
(statearr_43615_43640[(2)] = null);

(statearr_43615_43640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43607 === (9))){
var inst_43579 = (state_43606[(7)]);
var inst_43590 = (state_43606[(2)]);
var inst_43591 = (new Date());
var inst_43592 = (inst_43591 - inst_43579);
var inst_43593 = (inst_43592 >= ms);
var state_43606__$1 = (function (){var statearr_43616 = state_43606;
(statearr_43616[(9)] = inst_43590);

return statearr_43616;
})();
if(cljs.core.truth_(inst_43593)){
var statearr_43617_43641 = state_43606__$1;
(statearr_43617_43641[(1)] = (10));

} else {
var statearr_43618_43642 = state_43606__$1;
(statearr_43618_43642[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43607 === (5))){
var inst_43580 = (state_43606[(8)]);
var state_43606__$1 = state_43606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43606__$1,(8),c_SINGLEQUOTE_,inst_43580);
} else {
if((state_val_43607 === (10))){
var inst_43590 = (state_43606[(9)]);
var inst_43579 = null;
var inst_43580 = inst_43590;
var state_43606__$1 = (function (){var statearr_43619 = state_43606;
(statearr_43619[(7)] = inst_43579);

(statearr_43619[(8)] = inst_43580);

return statearr_43619;
})();
var statearr_43620_43643 = state_43606__$1;
(statearr_43620_43643[(2)] = null);

(statearr_43620_43643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43607 === (8))){
var inst_43585 = (state_43606[(2)]);
var inst_43586 = (new Date());
var inst_43579 = inst_43586;
var inst_43580 = null;
var state_43606__$1 = (function (){var statearr_43621 = state_43606;
(statearr_43621[(7)] = inst_43579);

(statearr_43621[(8)] = inst_43580);

(statearr_43621[(10)] = inst_43585);

return statearr_43621;
})();
var statearr_43622_43644 = state_43606__$1;
(statearr_43622_43644[(2)] = null);

(statearr_43622_43644[(1)] = (3));


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
}
}
});})(c__11475__auto___43634))
;
return ((function (switch__11410__auto__,c__11475__auto___43634){
return (function() {
var openthink$utils$state_machine__11411__auto__ = null;
var openthink$utils$state_machine__11411__auto____0 = (function (){
var statearr_43626 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43626[(0)] = openthink$utils$state_machine__11411__auto__);

(statearr_43626[(1)] = (1));

return statearr_43626;
});
var openthink$utils$state_machine__11411__auto____1 = (function (state_43606){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_43606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e43627){if((e43627 instanceof Object)){
var ex__11414__auto__ = e43627;
var statearr_43628_43645 = state_43606;
(statearr_43628_43645[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43646 = state_43606;
state_43606 = G__43646;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
openthink$utils$state_machine__11411__auto__ = function(state_43606){
switch(arguments.length){
case 0:
return openthink$utils$state_machine__11411__auto____0.call(this);
case 1:
return openthink$utils$state_machine__11411__auto____1.call(this,state_43606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
openthink$utils$state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = openthink$utils$state_machine__11411__auto____0;
openthink$utils$state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = openthink$utils$state_machine__11411__auto____1;
return openthink$utils$state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto___43634))
})();
var state__11477__auto__ = (function (){var statearr_43629 = f__11476__auto__.call(null);
(statearr_43629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___43634);

return statearr_43629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto___43634))
);


return c_SINGLEQUOTE_;
});

openthink.utils.debounce.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=utils.js.map