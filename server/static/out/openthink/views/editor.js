// Compiled by ClojureScript 0.0-2511
goog.provide('openthink.views.editor');
goog.require('cljs.core');
goog.require('openthink.utils');
goog.require('markdown.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('ajax.core');
goog.require('cljs.core.async');
openthink.views.editor.set_toggle = (function set_toggle(s,v){
if(cljs.core.truth_(s.call(null,v))){
return cljs.core.disj.call(null,s,v);
} else {
return cljs.core.conj.call(null,s,v);
}
});
openthink.views.editor.icon_map = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"btn","btn",1978294651),new cljs.core.Keyword(null,"preview","preview",451279890),new cljs.core.Keyword(null,"icon","icon",1679606541),"layout"], null),null], null);
openthink.views.editor.btn_fns = cljs.core.PersistentArrayMap.EMPTY;
openthink.views.editor.editor_view = (function editor_view(data,owner){
if(typeof openthink.views.editor.t23590 !== 'undefined'){
} else {

/**
* @constructor
*/
openthink.views.editor.t23590 = (function (owner,data,editor_view,meta23591){
this.owner = owner;
this.data = data;
this.editor_view = editor_view;
this.meta23591 = meta23591;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
openthink.views.editor.t23590.prototype.om$core$IRender$ = true;

openthink.views.editor.t23590.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret.call(null,(function (){var btn_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"btn-chan","btn-chan",927415385));
var selected = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764));
var text = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dl","dl",-2140151713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"editor-bar sub-nav"], null),(function (){var btn_chan__$1 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"btn-chan","btn-chan",927415385));
var iter__4394__auto__ = ((function (btn_chan__$1,btn_chan,selected,text,___$1){
return (function iter__23593(s__23594){
return (new cljs.core.LazySeq(null,((function (btn_chan__$1,btn_chan,selected,text,___$1){
return (function (){
var s__23594__$1 = s__23594;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23594__$1);
if(temp__4126__auto__){
var s__23594__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23594__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__23594__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__23596 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__23595 = (0);
while(true){
if((i__23595 < size__4393__auto__)){
var map__23599 = cljs.core._nth.call(null,c__4392__auto__,i__23595);
var map__23599__$1 = ((cljs.core.seq_QMARK_.call(null,map__23599))?cljs.core.apply.call(null,cljs.core.hash_map,map__23599):map__23599);
var icon_bit = map__23599__$1;
var btn = cljs.core.get.call(null,map__23599__$1,new cljs.core.Keyword(null,"btn","btn",1978294651));
var icon = cljs.core.get.call(null,map__23599__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
cljs.core.chunk_append.call(null,b__23596,(cljs.core.truth_(icon_bit)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("editor-bar-item"),cljs.core.str((cljs.core.truth_(selected.call(null,btn))?" selected":null))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"className","className",-1983287057),"editor-btn",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__23595,map__23599,map__23599__$1,icon_bit,btn,icon,c__4392__auto__,size__4393__auto__,b__23596,s__23594__$2,temp__4126__auto__,btn_chan__$1,btn_chan,selected,text,___$1){
return (function (){
return openthink.utils.put_nil_BANG_.call(null,btn_chan__$1,btn);
});})(i__23595,map__23599,map__23599__$1,icon_bit,btn,icon,c__4392__auto__,size__4393__auto__,b__23596,s__23594__$2,temp__4126__auto__,btn_chan__$1,btn_chan,selected,text,___$1))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("fi-"),cljs.core.str(icon),cljs.core.str(" large")].join('')], null)], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"editor-bar-item"], null),"|"], null)));

var G__23642 = (i__23595 + (1));
i__23595 = G__23642;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23596),iter__23593.call(null,cljs.core.chunk_rest.call(null,s__23594__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23596),null);
}
} else {
var map__23600 = cljs.core.first.call(null,s__23594__$2);
var map__23600__$1 = ((cljs.core.seq_QMARK_.call(null,map__23600))?cljs.core.apply.call(null,cljs.core.hash_map,map__23600):map__23600);
var icon_bit = map__23600__$1;
var btn = cljs.core.get.call(null,map__23600__$1,new cljs.core.Keyword(null,"btn","btn",1978294651));
var icon = cljs.core.get.call(null,map__23600__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
return cljs.core.cons.call(null,(cljs.core.truth_(icon_bit)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("editor-bar-item"),cljs.core.str((cljs.core.truth_(selected.call(null,btn))?" selected":null))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"className","className",-1983287057),"editor-btn",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__23600,map__23600__$1,icon_bit,btn,icon,s__23594__$2,temp__4126__auto__,btn_chan__$1,btn_chan,selected,text,___$1){
return (function (){
return openthink.utils.put_nil_BANG_.call(null,btn_chan__$1,btn);
});})(map__23600,map__23600__$1,icon_bit,btn,icon,s__23594__$2,temp__4126__auto__,btn_chan__$1,btn_chan,selected,text,___$1))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("fi-"),cljs.core.str(icon),cljs.core.str(" large")].join('')], null)], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"editor-bar-item"], null),"|"], null)),iter__23593.call(null,cljs.core.rest.call(null,s__23594__$2)));
}
} else {
return null;
}
break;
}
});})(btn_chan__$1,btn_chan,selected,text,___$1))
,null,null));
});})(btn_chan__$1,btn_chan,selected,text,___$1))
;
return iter__4394__auto__.call(null,openthink.views.editor.icon_map);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"editor-bar-item"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"http://nestacms.com/docs/creating-content/markdown-cheat-sheet",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"View reference for markdown format"], null)], null)], null),((cljs.core.not.call(null,selected.call(null,new cljs.core.Keyword(null,"preview","preview",451279890))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083)),new cljs.core.Keyword(null,"value","value",305978217),text,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (btn_chan,selected,text,___$1){
return (function (p1__23537_SHARP_){
openthink.utils.handle_change.call(null,p1__23537_SHARP_,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697));

return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275)).call(null,p1__23537_SHARP_);
});})(btn_chan,selected,text,___$1))
], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"editor-preview"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Preview:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),{"__html": markdown.core.md__GT_html.call(null,text)}], null)], null)], null))], null);
})());
});

openthink.views.editor.t23590.prototype.om$core$IWillMount$ = true;

openthink.views.editor.t23590.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var btn_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"btn-chan","btn-chan",927415385));
var c__8633__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8633__auto__,btn_chan,___$1){
return (function (){
var f__8634__auto__ = (function (){var switch__8577__auto__ = ((function (c__8633__auto__,btn_chan,___$1){
return (function (state_23621){
var state_val_23622 = (state_23621[(1)]);
if((state_val_23622 === (7))){
var inst_23608 = (state_23621[(7)]);
var inst_23604 = (state_23621[(2)]);
var inst_23605 = cljs.core.println.call(null,"btn-clicked: ",inst_23604);
var inst_23606 = (function (){var btn = inst_23604;
return ((function (btn,inst_23608,inst_23604,inst_23605,state_val_23622,c__8633__auto__,btn_chan,___$1){
return (function (p1__23536_SHARP_){
return openthink.views.editor.set_toggle.call(null,p1__23536_SHARP_,btn);
});
;})(btn,inst_23608,inst_23604,inst_23605,state_val_23622,c__8633__auto__,btn_chan,___$1))
})();
var inst_23607 = om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_23606);
var inst_23608__$1 = inst_23604.call(null,openthink.views.editor.btn_fns);
var state_23621__$1 = (function (){var statearr_23623 = state_23621;
(statearr_23623[(7)] = inst_23608__$1);

(statearr_23623[(8)] = inst_23605);

(statearr_23623[(9)] = inst_23607);

return statearr_23623;
})();
if(cljs.core.truth_(inst_23608__$1)){
var statearr_23624_23643 = state_23621__$1;
(statearr_23624_23643[(1)] = (8));

} else {
var statearr_23625_23644 = state_23621__$1;
(statearr_23625_23644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23622 === (1))){
var state_23621__$1 = state_23621;
var statearr_23626_23645 = state_23621__$1;
(statearr_23626_23645[(2)] = null);

(statearr_23626_23645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23622 === (4))){
var state_23621__$1 = state_23621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23621__$1,(7),btn_chan);
} else {
if((state_val_23622 === (6))){
var inst_23617 = (state_23621[(2)]);
var state_23621__$1 = state_23621;
var statearr_23627_23646 = state_23621__$1;
(statearr_23627_23646[(2)] = inst_23617);

(statearr_23627_23646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23622 === (3))){
var inst_23619 = (state_23621[(2)]);
var state_23621__$1 = state_23621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23621__$1,inst_23619);
} else {
if((state_val_23622 === (2))){
var state_23621__$1 = state_23621;
var statearr_23628_23647 = state_23621__$1;
(statearr_23628_23647[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23622 === (9))){
var state_23621__$1 = state_23621;
var statearr_23630_23648 = state_23621__$1;
(statearr_23630_23648[(2)] = null);

(statearr_23630_23648[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23622 === (5))){
var state_23621__$1 = state_23621;
var statearr_23631_23649 = state_23621__$1;
(statearr_23631_23649[(2)] = null);

(statearr_23631_23649[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23622 === (10))){
var inst_23613 = (state_23621[(2)]);
var state_23621__$1 = (function (){var statearr_23632 = state_23621;
(statearr_23632[(10)] = inst_23613);

return statearr_23632;
})();
var statearr_23633_23650 = state_23621__$1;
(statearr_23633_23650[(2)] = null);

(statearr_23633_23650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23622 === (8))){
var inst_23608 = (state_23621[(7)]);
var inst_23610 = inst_23608.call(null,self__.data,self__.owner);
var state_23621__$1 = state_23621;
var statearr_23634_23651 = state_23621__$1;
(statearr_23634_23651[(2)] = inst_23610);

(statearr_23634_23651[(1)] = (10));


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
});})(c__8633__auto__,btn_chan,___$1))
;
return ((function (switch__8577__auto__,c__8633__auto__,btn_chan,___$1){
return (function() {
var state_machine__8578__auto__ = null;
var state_machine__8578__auto____0 = (function (){
var statearr_23638 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23638[(0)] = state_machine__8578__auto__);

(statearr_23638[(1)] = (1));

return statearr_23638;
});
var state_machine__8578__auto____1 = (function (state_23621){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_23621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e23639){if((e23639 instanceof Object)){
var ex__8581__auto__ = e23639;
var statearr_23640_23652 = state_23621;
(statearr_23640_23652[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23653 = state_23621;
state_23621 = G__23653;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
state_machine__8578__auto__ = function(state_23621){
switch(arguments.length){
case 0:
return state_machine__8578__auto____0.call(this);
case 1:
return state_machine__8578__auto____1.call(this,state_23621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8578__auto____0;
state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8578__auto____1;
return state_machine__8578__auto__;
})()
;})(switch__8577__auto__,c__8633__auto__,btn_chan,___$1))
})();
var state__8635__auto__ = (function (){var statearr_23641 = f__8634__auto__.call(null);
(statearr_23641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8633__auto__);

return statearr_23641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8635__auto__);
});})(c__8633__auto__,btn_chan,___$1))
);

return c__8633__auto__;
});

openthink.views.editor.t23590.prototype.om$core$IInitState$ = true;

openthink.views.editor.t23590.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"btn-chan","btn-chan",927415385),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"text","text",-1790561697),"",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"",new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bold","bold",-116809535),null,new cljs.core.Keyword(null,"italic","italic",32599196),null], null), null)], null);
});

openthink.views.editor.t23590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23592){
var self__ = this;
var _23592__$1 = this;
return self__.meta23591;
});

openthink.views.editor.t23590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23592,meta23591__$1){
var self__ = this;
var _23592__$1 = this;
return (new openthink.views.editor.t23590(self__.owner,self__.data,self__.editor_view,meta23591__$1));
});

openthink.views.editor.t23590.cljs$lang$type = true;

openthink.views.editor.t23590.cljs$lang$ctorStr = "openthink.views.editor/t23590";

openthink.views.editor.t23590.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"openthink.views.editor/t23590");
});

openthink.views.editor.__GT_t23590 = (function __GT_t23590(owner__$1,data__$1,editor_view__$1,meta23591){
return (new openthink.views.editor.t23590(owner__$1,data__$1,editor_view__$1,meta23591));
});

}

return (new openthink.views.editor.t23590(owner,data,editor_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),82,new cljs.core.Keyword(null,"end-line","end-line",1837326455),59,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),19,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/yedianyansi/Documents/workshop/openthink/client/src/openthink/views/editor.cljs"], null)));
});

//# sourceMappingURL=editor.js.map