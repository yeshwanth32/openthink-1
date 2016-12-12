// Compiled by ClojureScript 1.9.293 {}
goog.provide('openthink.views.editor');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('om.core');
goog.require('sablono.core');
goog.require('markdown.core');
goog.require('openthink.utils');
openthink.views.editor.set_toggle = (function openthink$views$editor$set_toggle(s,v){
if(cljs.core.truth_(s.call(null,v))){
return cljs.core.disj.call(null,s,v);
} else {
return cljs.core.conj.call(null,s,v);
}
});
openthink.views.editor.icon_map = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"btn","btn",1978294651),new cljs.core.Keyword(null,"preview","preview",451279890),new cljs.core.Keyword(null,"icon","icon",1679606541),"layout"], null),null], null);
openthink.views.editor.btn_fns = cljs.core.PersistentArrayMap.EMPTY;
openthink.views.editor.editor_view = (function openthink$views$editor$editor_view(data,owner){
if(typeof openthink.views.editor.t_openthink$views$editor44628 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
openthink.views.editor.t_openthink$views$editor44628 = (function (data,owner,meta44629){
this.data = data;
this.owner = owner;
this.meta44629 = meta44629;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
openthink.views.editor.t_openthink$views$editor44628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44630,meta44629__$1){
var self__ = this;
var _44630__$1 = this;
return (new openthink.views.editor.t_openthink$views$editor44628(self__.data,self__.owner,meta44629__$1));
});

openthink.views.editor.t_openthink$views$editor44628.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44630){
var self__ = this;
var _44630__$1 = this;
return self__.meta44629;
});

openthink.views.editor.t_openthink$views$editor44628.prototype.om$core$IInitState$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.editor.t_openthink$views$editor44628.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"btn-chan","btn-chan",927415385),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"",new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bold","bold",-116809535),null,new cljs.core.Keyword(null,"italic","italic",32599196),null], null), null)], null);
});

openthink.views.editor.t_openthink$views$editor44628.prototype.om$core$IWillMount$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.editor.t_openthink$views$editor44628.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var btn_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"btn-chan","btn-chan",927415385));
var c__11475__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto__,btn_chan,___$1){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto__,btn_chan,___$1){
return (function (state_44651){
var state_val_44652 = (state_44651[(1)]);
if((state_val_44652 === (7))){
var inst_44638 = (state_44651[(7)]);
var inst_44634 = (state_44651[(2)]);
var inst_44635 = cljs.core.println.call(null,"btn-clicked: ",inst_44634);
var inst_44636 = (function (){var btn = inst_44634;
return ((function (btn,inst_44638,inst_44634,inst_44635,state_val_44652,c__11475__auto__,btn_chan,___$1){
return (function (p1__44571_SHARP_){
return openthink.views.editor.set_toggle.call(null,p1__44571_SHARP_,btn);
});
;})(btn,inst_44638,inst_44634,inst_44635,state_val_44652,c__11475__auto__,btn_chan,___$1))
})();
var inst_44637 = om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),inst_44636);
var inst_44638__$1 = inst_44634.call(null,openthink.views.editor.btn_fns);
var state_44651__$1 = (function (){var statearr_44653 = state_44651;
(statearr_44653[(8)] = inst_44637);

(statearr_44653[(7)] = inst_44638__$1);

(statearr_44653[(9)] = inst_44635);

return statearr_44653;
})();
if(cljs.core.truth_(inst_44638__$1)){
var statearr_44654_44684 = state_44651__$1;
(statearr_44654_44684[(1)] = (8));

} else {
var statearr_44655_44685 = state_44651__$1;
(statearr_44655_44685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44652 === (1))){
var state_44651__$1 = state_44651;
var statearr_44656_44686 = state_44651__$1;
(statearr_44656_44686[(2)] = null);

(statearr_44656_44686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44652 === (4))){
var state_44651__$1 = state_44651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44651__$1,(7),btn_chan);
} else {
if((state_val_44652 === (6))){
var inst_44647 = (state_44651[(2)]);
var state_44651__$1 = state_44651;
var statearr_44657_44687 = state_44651__$1;
(statearr_44657_44687[(2)] = inst_44647);

(statearr_44657_44687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44652 === (3))){
var inst_44649 = (state_44651[(2)]);
var state_44651__$1 = state_44651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44651__$1,inst_44649);
} else {
if((state_val_44652 === (2))){
var state_44651__$1 = state_44651;
var statearr_44658_44688 = state_44651__$1;
(statearr_44658_44688[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44652 === (9))){
var state_44651__$1 = state_44651;
var statearr_44660_44689 = state_44651__$1;
(statearr_44660_44689[(2)] = null);

(statearr_44660_44689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44652 === (5))){
var state_44651__$1 = state_44651;
var statearr_44661_44690 = state_44651__$1;
(statearr_44661_44690[(2)] = null);

(statearr_44661_44690[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44652 === (10))){
var inst_44643 = (state_44651[(2)]);
var state_44651__$1 = (function (){var statearr_44662 = state_44651;
(statearr_44662[(10)] = inst_44643);

return statearr_44662;
})();
var statearr_44663_44691 = state_44651__$1;
(statearr_44663_44691[(2)] = null);

(statearr_44663_44691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44652 === (8))){
var inst_44638 = (state_44651[(7)]);
var inst_44640 = inst_44638.call(null,self__.data,self__.owner);
var state_44651__$1 = state_44651;
var statearr_44664_44692 = state_44651__$1;
(statearr_44664_44692[(2)] = inst_44640);

(statearr_44664_44692[(1)] = (10));


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
});})(c__11475__auto__,btn_chan,___$1))
;
return ((function (switch__11410__auto__,c__11475__auto__,btn_chan,___$1){
return (function() {
var openthink$views$editor$editor_view_$_state_machine__11411__auto__ = null;
var openthink$views$editor$editor_view_$_state_machine__11411__auto____0 = (function (){
var statearr_44668 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44668[(0)] = openthink$views$editor$editor_view_$_state_machine__11411__auto__);

(statearr_44668[(1)] = (1));

return statearr_44668;
});
var openthink$views$editor$editor_view_$_state_machine__11411__auto____1 = (function (state_44651){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_44651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e44669){if((e44669 instanceof Object)){
var ex__11414__auto__ = e44669;
var statearr_44670_44693 = state_44651;
(statearr_44670_44693[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44694 = state_44651;
state_44651 = G__44694;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
openthink$views$editor$editor_view_$_state_machine__11411__auto__ = function(state_44651){
switch(arguments.length){
case 0:
return openthink$views$editor$editor_view_$_state_machine__11411__auto____0.call(this);
case 1:
return openthink$views$editor$editor_view_$_state_machine__11411__auto____1.call(this,state_44651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
openthink$views$editor$editor_view_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = openthink$views$editor$editor_view_$_state_machine__11411__auto____0;
openthink$views$editor$editor_view_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = openthink$views$editor$editor_view_$_state_machine__11411__auto____1;
return openthink$views$editor$editor_view_$_state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto__,btn_chan,___$1))
})();
var state__11477__auto__ = (function (){var statearr_44671 = f__11476__auto__.call(null);
(statearr_44671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto__);

return statearr_44671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto__,btn_chan,___$1))
);

return c__11475__auto__;
});

openthink.views.editor.t_openthink$views$editor44628.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.editor.t_openthink$views$editor44628.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret.call(null,(function (){var btn_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"btn-chan","btn-chan",927415385));
var selected = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764));
var text = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dl","dl",-2140151713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"editor-bar sub-nav"], null),(function (){var btn_chan__$1 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"btn-chan","btn-chan",927415385));
var iter__7326__auto__ = ((function (btn_chan__$1,btn_chan,selected,text,___$1){
return (function openthink$views$editor$editor_view_$_iter__44672(s__44673){
return (new cljs.core.LazySeq(null,((function (btn_chan__$1,btn_chan,selected,text,___$1){
return (function (){
var s__44673__$1 = s__44673;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__44673__$1);
if(temp__4657__auto__){
var s__44673__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44673__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__44673__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__44675 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__44674 = (0);
while(true){
if((i__44674 < size__7325__auto__)){
var map__44680 = cljs.core._nth.call(null,c__7324__auto__,i__44674);
var map__44680__$1 = ((((!((map__44680 == null)))?((((map__44680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44680.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44680):map__44680);
var icon_bit = map__44680__$1;
var icon = cljs.core.get.call(null,map__44680__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var btn = cljs.core.get.call(null,map__44680__$1,new cljs.core.Keyword(null,"btn","btn",1978294651));
cljs.core.chunk_append.call(null,b__44675,(cljs.core.truth_(icon_bit)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("editor-bar-item"),cljs.core.str((cljs.core.truth_(selected.call(null,btn))?" selected":null))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"className","className",-1983287057),"editor-btn",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__44674,map__44680,map__44680__$1,icon_bit,icon,btn,c__7324__auto__,size__7325__auto__,b__44675,s__44673__$2,temp__4657__auto__,btn_chan__$1,btn_chan,selected,text,___$1){
return (function (){
return openthink.utils.put_nil_BANG_.call(null,btn_chan__$1,btn);
});})(i__44674,map__44680,map__44680__$1,icon_bit,icon,btn,c__7324__auto__,size__7325__auto__,b__44675,s__44673__$2,temp__4657__auto__,btn_chan__$1,btn_chan,selected,text,___$1))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("fi-"),cljs.core.str(icon),cljs.core.str(" large")].join('')], null)], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"editor-bar-item"], null),"|"], null)));

var G__44695 = (i__44674 + (1));
i__44674 = G__44695;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44675),openthink$views$editor$editor_view_$_iter__44672.call(null,cljs.core.chunk_rest.call(null,s__44673__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44675),null);
}
} else {
var map__44682 = cljs.core.first.call(null,s__44673__$2);
var map__44682__$1 = ((((!((map__44682 == null)))?((((map__44682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44682.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44682):map__44682);
var icon_bit = map__44682__$1;
var icon = cljs.core.get.call(null,map__44682__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var btn = cljs.core.get.call(null,map__44682__$1,new cljs.core.Keyword(null,"btn","btn",1978294651));
return cljs.core.cons.call(null,(cljs.core.truth_(icon_bit)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("editor-bar-item"),cljs.core.str((cljs.core.truth_(selected.call(null,btn))?" selected":null))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"className","className",-1983287057),"editor-btn",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__44682,map__44682__$1,icon_bit,icon,btn,s__44673__$2,temp__4657__auto__,btn_chan__$1,btn_chan,selected,text,___$1){
return (function (){
return openthink.utils.put_nil_BANG_.call(null,btn_chan__$1,btn);
});})(map__44682,map__44682__$1,icon_bit,icon,btn,s__44673__$2,temp__4657__auto__,btn_chan__$1,btn_chan,selected,text,___$1))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("fi-"),cljs.core.str(icon),cljs.core.str(" large")].join('')], null)], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"editor-bar-item"], null),"|"], null)),openthink$views$editor$editor_view_$_iter__44672.call(null,cljs.core.rest.call(null,s__44673__$2)));
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
return iter__7326__auto__.call(null,openthink.views.editor.icon_map);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"editor-bar-item"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"http://nestacms.com/docs/creating-content/markdown-cheat-sheet",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"View reference for markdown format"], null)], null)], null),((cljs.core.not.call(null,selected.call(null,new cljs.core.Keyword(null,"preview","preview",451279890))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083)),new cljs.core.Keyword(null,"value","value",305978217),text,new cljs.core.Keyword(null,"onChange","onChange",-312891301),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275))], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"editor-preview"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Preview:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),({"__html": markdown.core.md__GT_html.call(null,text)})], null)], null)], null))], null);
})());
});

openthink.views.editor.t_openthink$views$editor44628.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta44629","meta44629",-1130239521,null)], null);
});

openthink.views.editor.t_openthink$views$editor44628.cljs$lang$type = true;

openthink.views.editor.t_openthink$views$editor44628.cljs$lang$ctorStr = "openthink.views.editor/t_openthink$views$editor44628";

openthink.views.editor.t_openthink$views$editor44628.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"openthink.views.editor/t_openthink$views$editor44628");
});

openthink.views.editor.__GT_t_openthink$views$editor44628 = (function openthink$views$editor$editor_view_$___GT_t_openthink$views$editor44628(data__$1,owner__$1,meta44629){
return (new openthink.views.editor.t_openthink$views$editor44628(data__$1,owner__$1,meta44629));
});

}

return (new openthink.views.editor.t_openthink$views$editor44628(data,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=editor.js.map