// Compiled by ClojureScript 1.9.293 {}
goog.provide('openthink.views.links');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('openthink.state');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('openthink.cursors');
goog.require('openthink.utils');
goog.require('om.core');
goog.require('clojure.string');
openthink.views.links.vote_btn = (function openthink$views$links$vote_btn(rel,owner,p__45137){
var map__45143 = p__45137;
var map__45143__$1 = ((((!((map__45143 == null)))?((((map__45143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45143.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45143):map__45143);
var opts = map__45143__$1;
var vote_value = cljs.core.get.call(null,map__45143__$1,new cljs.core.Keyword(null,"vote-value","vote-value",-814557147));
var vote_txt = cljs.core.get.call(null,map__45143__$1,new cljs.core.Keyword(null,"vote-txt","vote-txt",476450142));
if(typeof openthink.views.links.t_openthink$views$links45145 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
openthink.views.links.t_openthink$views$links45145 = (function (rel,owner,p__45137,map__45143,opts,vote_value,vote_txt,meta45146){
this.rel = rel;
this.owner = owner;
this.p__45137 = p__45137;
this.map__45143 = map__45143;
this.opts = opts;
this.vote_value = vote_value;
this.vote_txt = vote_txt;
this.meta45146 = meta45146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
openthink.views.links.t_openthink$views$links45145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__45143,map__45143__$1,opts,vote_value,vote_txt){
return (function (_45147,meta45146__$1){
var self__ = this;
var _45147__$1 = this;
return (new openthink.views.links.t_openthink$views$links45145(self__.rel,self__.owner,self__.p__45137,self__.map__45143,self__.opts,self__.vote_value,self__.vote_txt,meta45146__$1));
});})(map__45143,map__45143__$1,opts,vote_value,vote_txt))
;

openthink.views.links.t_openthink$views$links45145.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__45143,map__45143__$1,opts,vote_value,vote_txt){
return (function (_45147){
var self__ = this;
var _45147__$1 = this;
return self__.meta45146;
});})(map__45143,map__45143__$1,opts,vote_value,vote_txt))
;

openthink.views.links.t_openthink$views$links45145.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.links.t_openthink$views$links45145.prototype.om$core$IRender$render$arity$1 = ((function (map__45143,map__45143__$1,opts,vote_value,vote_txt){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.a(({"href": "#", "onClick": ((function (this$__$1,map__45143,map__45143__$1,opts,vote_value,vote_txt){
return (function (_){
ajax.core.POST.call(null,"/vote",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, ["value",self__.vote_value,"rel_id",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.rel)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (this$__$1,map__45143,map__45143__$1,opts,vote_value,vote_txt){
return (function (resp){
cljs.core.println.call(null,resp);

var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);
if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032))){
return null;
} else {
return om.core.update_BANG_.call(null,self__.rel,new cljs.core.Keyword(null,"rel","rel",1378823488).cljs$core$IFn$_invoke$arity$1(resp__$1));
}
});})(this$__$1,map__45143,map__45143__$1,opts,vote_value,vote_txt))
], null));

return false;
});})(this$__$1,map__45143,map__45143__$1,opts,vote_value,vote_txt))
}),sablono.interpreter.interpret.call(null,self__.vote_txt));
});})(map__45143,map__45143__$1,opts,vote_value,vote_txt))
;

openthink.views.links.t_openthink$views$links45145.getBasis = ((function (map__45143,map__45143__$1,opts,vote_value,vote_txt){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rel","rel",-1275612281,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"p__45137","p__45137",-218140313,null),new cljs.core.Symbol(null,"map__45143","map__45143",45231680,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"vote-value","vote-value",825974380,null),new cljs.core.Symbol(null,"vote-txt","vote-txt",2116981669,null),new cljs.core.Symbol(null,"meta45146","meta45146",158864310,null)], null);
});})(map__45143,map__45143__$1,opts,vote_value,vote_txt))
;

openthink.views.links.t_openthink$views$links45145.cljs$lang$type = true;

openthink.views.links.t_openthink$views$links45145.cljs$lang$ctorStr = "openthink.views.links/t_openthink$views$links45145";

openthink.views.links.t_openthink$views$links45145.cljs$lang$ctorPrWriter = ((function (map__45143,map__45143__$1,opts,vote_value,vote_txt){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"openthink.views.links/t_openthink$views$links45145");
});})(map__45143,map__45143__$1,opts,vote_value,vote_txt))
;

openthink.views.links.__GT_t_openthink$views$links45145 = ((function (map__45143,map__45143__$1,opts,vote_value,vote_txt){
return (function openthink$views$links$vote_btn_$___GT_t_openthink$views$links45145(rel__$1,owner__$1,p__45137__$1,map__45143__$2,opts__$1,vote_value__$1,vote_txt__$1,meta45146){
return (new openthink.views.links.t_openthink$views$links45145(rel__$1,owner__$1,p__45137__$1,map__45143__$2,opts__$1,vote_value__$1,vote_txt__$1,meta45146));
});})(map__45143,map__45143__$1,opts,vote_value,vote_txt))
;

}

return (new openthink.views.links.t_openthink$views$links45145(rel,owner,p__45137,map__45143__$1,opts,vote_value,vote_txt,cljs.core.PersistentArrayMap.EMPTY));
});
openthink.views.links.mock_link = (function openthink$views$links$mock_link(dom_bit){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"child large-12 columns"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"text-center"], null),dom_bit], null)], null);
});
openthink.views.links.link_view = (function openthink$views$links$link_view(rel,owner){
if(typeof openthink.views.links.t_openthink$views$links45156 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
openthink.views.links.t_openthink$views$links45156 = (function (rel,owner,meta45157){
this.rel = rel;
this.owner = owner;
this.meta45157 = meta45157;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
openthink.views.links.t_openthink$views$links45156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45158,meta45157__$1){
var self__ = this;
var _45158__$1 = this;
return (new openthink.views.links.t_openthink$views$links45156(self__.rel,self__.owner,meta45157__$1));
});

openthink.views.links.t_openthink$views$links45156.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45158){
var self__ = this;
var _45158__$1 = this;
return self__.meta45157;
});

openthink.views.links.t_openthink$views$links45156.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.links.t_openthink$views$links45156.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var link_post = openthink.cursors.post_from_rel.call(null,self__.rel);
return React.DOM.div(({"className": "child large-12 columns"}),React.DOM.div(({"className": "row"}),React.DOM.div(({"className": "large-2 columns"}),React.DOM.div(({"className": "row"}),React.DOM.div(({"className": "small-4 columns", "style": cljs.core.clj__GT_js.call(null,({"padding": "0px"}))}),(function (){var attrs45159 = om.core.build.call(null,openthink.views.links.vote_btn,self__.rel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vote-value","vote-value",-814557147),(1),new cljs.core.Keyword(null,"vote-txt","vote-txt",476450142),"\u25B2"], null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("upvote-"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.rel))].join('')], null));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs45159))?sablono.interpreter.attributes.call(null,attrs45159):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45159))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45159)], null))));
})(),(function (){var attrs45160 = om.core.build.call(null,openthink.views.links.vote_btn,self__.rel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vote-value","vote-value",-814557147),(-1),new cljs.core.Keyword(null,"vote-txt","vote-txt",476450142),"\u25BC"], null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("downvote-"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.rel))].join('')], null));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs45160))?sablono.interpreter.attributes.call(null,attrs45160):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45160))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45160)], null))));
})()),React.DOM.div(({"className": "small-8 columns", "style": cljs.core.clj__GT_js.call(null,({"padding": "0px"}))}),(function (){var attrs45161 = (function (){var or__6543__auto__ = new cljs.core.Keyword(null,"votecount","votecount",425206940).cljs$core$IFn$_invoke$arity$1(self__.rel);
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return (0);
}
})();
return cljs.core.apply.call(null,React.DOM.h4,((cljs.core.map_QMARK_.call(null,attrs45161))?sablono.interpreter.attributes.call(null,attrs45161):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45161))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45161)], null))));
})()))),React.DOM.div(({"className": "large-10 columns"}),React.DOM.strong(({"className": "child-title"}),React.DOM.a(({"href": [cljs.core.str("/post/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(link_post))].join('')}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(link_post)))),(function (){var attrs45162 = [cljs.core.str(cljs.core.subs.call(null,clojure.string.replace.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(link_post),/\\n|\n/," "),(0),(80))),cljs.core.str((((cljs.core.count.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(link_post)) > (80)))?"...":""))].join('');
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs45162))?sablono.interpreter.attributes.call(null,attrs45162):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45162))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45162)], null))));
})(),React.DOM.span(({"className": "link-by"}),"linked by ",(function (){var attrs45163 = cljs.core.get_in.call(null,self__.rel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linked_by","linked_by",-1836719993),new cljs.core.Keyword(null,"username","username",1605666410)], null));
return cljs.core.apply.call(null,React.DOM.strong,((cljs.core.map_QMARK_.call(null,attrs45163))?sablono.interpreter.attributes.call(null,attrs45163):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45163))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45163)], null))));
})()," on ",sablono.interpreter.interpret.call(null,openthink.utils.date.call(null,new cljs.core.Keyword(null,"time_linked","time_linked",1045859207).cljs$core$IFn$_invoke$arity$1(self__.rel)))))));
});

openthink.views.links.t_openthink$views$links45156.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rel","rel",-1275612281,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta45157","meta45157",-430906043,null)], null);
});

openthink.views.links.t_openthink$views$links45156.cljs$lang$type = true;

openthink.views.links.t_openthink$views$links45156.cljs$lang$ctorStr = "openthink.views.links/t_openthink$views$links45156";

openthink.views.links.t_openthink$views$links45156.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"openthink.views.links/t_openthink$views$links45156");
});

openthink.views.links.__GT_t_openthink$views$links45156 = (function openthink$views$links$link_view_$___GT_t_openthink$views$links45156(rel__$1,owner__$1,meta45157){
return (new openthink.views.links.t_openthink$views$links45156(rel__$1,owner__$1,meta45157));
});

}

return (new openthink.views.links.t_openthink$views$links45156(rel,owner,cljs.core.PersistentArrayMap.EMPTY));
});
openthink.views.links.sort_option_attrs = (function openthink$views$links$sort_option_attrs(sort_value,selected_value){
var attrs = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),sort_value], null);
if(cljs.core._EQ_.call(null,sort_value,selected_value)){
return cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"selected","selected",574897764),"selected");
} else {
return attrs;
}
});
openthink.views.links.links_view = (function openthink$views$links$links_view(data,owner){
if(typeof openthink.views.links.t_openthink$views$links45246 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
openthink.views.links.t_openthink$views$links45246 = (function (data,owner,meta45247){
this.data = data;
this.owner = owner;
this.meta45247 = meta45247;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
openthink.views.links.t_openthink$views$links45246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45248,meta45247__$1){
var self__ = this;
var _45248__$1 = this;
return (new openthink.views.links.t_openthink$views$links45246(self__.data,self__.owner,meta45247__$1));
});

openthink.views.links.t_openthink$views$links45246.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45248){
var self__ = this;
var _45248__$1 = this;
return self__.meta45247;
});

openthink.views.links.t_openthink$views$links45246.prototype.om$core$IInitState$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.links.t_openthink$views$links45246.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sort-chan","sort-chan",-493870758),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"load-chan","load-chan",342107614),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795),new cljs.core.Keyword(null,"page","page",849072397),(0)], null);
});

openthink.views.links.t_openthink$views$links45246.prototype.om$core$IWillMount$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.links.t_openthink$views$links45246.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var sort_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"sort-chan","sort-chan",-493870758));
var load_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));
var c__11475__auto___45322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto___45322,sort_ch,load_ch,___$1){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto___45322,sort_ch,load_ch,___$1){
return (function (state_45270){
var state_val_45271 = (state_45270[(1)]);
if((state_val_45271 === (1))){
var state_45270__$1 = state_45270;
var statearr_45272_45323 = state_45270__$1;
(statearr_45272_45323[(2)] = null);

(statearr_45272_45323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45271 === (2))){
var state_45270__$1 = state_45270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45270__$1,(4),sort_ch);
} else {
if((state_val_45271 === (3))){
var inst_45268 = (state_45270[(2)]);
var state_45270__$1 = state_45270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45270__$1,inst_45268);
} else {
if((state_val_45271 === (4))){
var inst_45251 = (state_45270[(2)]);
var inst_45252 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"sorting","sorting",622249690));
var inst_45253 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"page","page",849072397),(0));
var inst_45254 = om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"sort-value","sort-value",-585546274),inst_45251);
var inst_45255 = openthink.cursors.current_post.call(null);
var inst_45256 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_45255);
var inst_45257 = [cljs.core.str("/links/"),cljs.core.str(inst_45256)].join('');
var inst_45258 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];
var inst_45259 = ["sort"];
var inst_45260 = [inst_45251];
var inst_45261 = cljs.core.PersistentHashMap.fromArrays(inst_45259,inst_45260);
var inst_45262 = (function (){var new_sort_val = inst_45251;
return ((function (new_sort_val,inst_45251,inst_45252,inst_45253,inst_45254,inst_45255,inst_45256,inst_45257,inst_45258,inst_45259,inst_45260,inst_45261,state_val_45271,c__11475__auto___45322,sort_ch,load_ch,___$1){
return (function (resp){
cljs.core.println.call(null,"sort returned");

var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);
cljs.core.println.call(null,resp__$1);

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795));

if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032))){
return null;
} else {
om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"posts","posts",760043164),((function (resp__$1,new_sort_val,inst_45251,inst_45252,inst_45253,inst_45254,inst_45255,inst_45256,inst_45257,inst_45258,inst_45259,inst_45260,inst_45261,state_val_45271,c__11475__auto___45322,sort_ch,load_ch,___$1){
return (function (p1__45164_SHARP_){
return cljs.core.merge.call(null,p1__45164_SHARP_,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(resp__$1));
});})(resp__$1,new_sort_val,inst_45251,inst_45252,inst_45253,inst_45254,inst_45255,inst_45256,inst_45257,inst_45258,inst_45259,inst_45260,inst_45261,state_val_45271,c__11475__auto___45322,sort_ch,load_ch,___$1))
);

om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"rels","rels",1770187185),((function (resp__$1,new_sort_val,inst_45251,inst_45252,inst_45253,inst_45254,inst_45255,inst_45256,inst_45257,inst_45258,inst_45259,inst_45260,inst_45261,state_val_45271,c__11475__auto___45322,sort_ch,load_ch,___$1){
return (function (p1__45165_SHARP_){
return cljs.core.merge.call(null,p1__45165_SHARP_,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(resp__$1));
});})(resp__$1,new_sort_val,inst_45251,inst_45252,inst_45253,inst_45254,inst_45255,inst_45256,inst_45257,inst_45258,inst_45259,inst_45260,inst_45261,state_val_45271,c__11475__auto___45322,sort_ch,load_ch,___$1))
);

return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"link_ids","link_ids",-791411950),new cljs.core.Keyword(null,"new_rel_ids","new_rel_ids",701283960).cljs$core$IFn$_invoke$arity$1(resp__$1));
}
});
;})(new_sort_val,inst_45251,inst_45252,inst_45253,inst_45254,inst_45255,inst_45256,inst_45257,inst_45258,inst_45259,inst_45260,inst_45261,state_val_45271,c__11475__auto___45322,sort_ch,load_ch,___$1))
})();
var inst_45263 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_45261,inst_45262];
var inst_45264 = cljs.core.PersistentHashMap.fromArrays(inst_45258,inst_45263);
var inst_45265 = ajax.core.GET.call(null,inst_45257,inst_45264);
var state_45270__$1 = (function (){var statearr_45273 = state_45270;
(statearr_45273[(7)] = inst_45253);

(statearr_45273[(8)] = inst_45252);

(statearr_45273[(9)] = inst_45254);

(statearr_45273[(10)] = inst_45265);

return statearr_45273;
})();
var statearr_45274_45324 = state_45270__$1;
(statearr_45274_45324[(2)] = null);

(statearr_45274_45324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__11475__auto___45322,sort_ch,load_ch,___$1))
;
return ((function (switch__11410__auto__,c__11475__auto___45322,sort_ch,load_ch,___$1){
return (function() {
var openthink$views$links$links_view_$_state_machine__11411__auto__ = null;
var openthink$views$links$links_view_$_state_machine__11411__auto____0 = (function (){
var statearr_45278 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45278[(0)] = openthink$views$links$links_view_$_state_machine__11411__auto__);

(statearr_45278[(1)] = (1));

return statearr_45278;
});
var openthink$views$links$links_view_$_state_machine__11411__auto____1 = (function (state_45270){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_45270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e45279){if((e45279 instanceof Object)){
var ex__11414__auto__ = e45279;
var statearr_45280_45325 = state_45270;
(statearr_45280_45325[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45326 = state_45270;
state_45270 = G__45326;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
openthink$views$links$links_view_$_state_machine__11411__auto__ = function(state_45270){
switch(arguments.length){
case 0:
return openthink$views$links$links_view_$_state_machine__11411__auto____0.call(this);
case 1:
return openthink$views$links$links_view_$_state_machine__11411__auto____1.call(this,state_45270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
openthink$views$links$links_view_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = openthink$views$links$links_view_$_state_machine__11411__auto____0;
openthink$views$links$links_view_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = openthink$views$links$links_view_$_state_machine__11411__auto____1;
return openthink$views$links$links_view_$_state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto___45322,sort_ch,load_ch,___$1))
})();
var state__11477__auto__ = (function (){var statearr_45281 = f__11476__auto__.call(null);
(statearr_45281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto___45322);

return statearr_45281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto___45322,sort_ch,load_ch,___$1))
);


var c__11475__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11475__auto__,sort_ch,load_ch,___$1){
return (function (){
var f__11476__auto__ = (function (){var switch__11410__auto__ = ((function (c__11475__auto__,sort_ch,load_ch,___$1){
return (function (state_45303){
var state_val_45304 = (state_45303[(1)]);
if((state_val_45304 === (1))){
var state_45303__$1 = state_45303;
var statearr_45305_45327 = state_45303__$1;
(statearr_45305_45327[(2)] = null);

(statearr_45305_45327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45304 === (2))){
var state_45303__$1 = state_45303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45303__$1,(4),load_ch);
} else {
if((state_val_45304 === (3))){
var inst_45301 = (state_45303[(2)]);
var state_45303__$1 = state_45303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45303__$1,inst_45301);
} else {
if((state_val_45304 === (4))){
var inst_45284 = (state_45303[(2)]);
var inst_45285 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"loading","loading",-737050189));
var inst_45286 = openthink.cursors.current_post.call(null);
var inst_45287 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_45286);
var inst_45288 = [cljs.core.str("/links/"),cljs.core.str(inst_45287)].join('');
var inst_45289 = [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"handler","handler",-195596612)];
var inst_45290 = ["sort","page"];
var inst_45291 = cljs.core.deref.call(null,openthink.state.app_state);
var inst_45292 = new cljs.core.Keyword(null,"sort-value","sort-value",-585546274).cljs$core$IFn$_invoke$arity$1(inst_45291);
var inst_45293 = [inst_45292,inst_45284];
var inst_45294 = cljs.core.PersistentHashMap.fromArrays(inst_45290,inst_45293);
var inst_45295 = (function (){var new_page = inst_45284;
return ((function (new_page,inst_45284,inst_45285,inst_45286,inst_45287,inst_45288,inst_45289,inst_45290,inst_45291,inst_45292,inst_45293,inst_45294,state_val_45304,c__11475__auto__,sort_ch,load_ch,___$1){
return (function (resp){
cljs.core.println.call(null,"load posts returned");

var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);
cljs.core.println.call(null,resp__$1);

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795));

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"page","page",849072397),new_page);

if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032))){
return null;
} else {
om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"posts","posts",760043164),((function (resp__$1,new_page,inst_45284,inst_45285,inst_45286,inst_45287,inst_45288,inst_45289,inst_45290,inst_45291,inst_45292,inst_45293,inst_45294,state_val_45304,c__11475__auto__,sort_ch,load_ch,___$1){
return (function (p1__45166_SHARP_){
return cljs.core.merge.call(null,p1__45166_SHARP_,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(resp__$1));
});})(resp__$1,new_page,inst_45284,inst_45285,inst_45286,inst_45287,inst_45288,inst_45289,inst_45290,inst_45291,inst_45292,inst_45293,inst_45294,state_val_45304,c__11475__auto__,sort_ch,load_ch,___$1))
);

om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"rels","rels",1770187185),((function (resp__$1,new_page,inst_45284,inst_45285,inst_45286,inst_45287,inst_45288,inst_45289,inst_45290,inst_45291,inst_45292,inst_45293,inst_45294,state_val_45304,c__11475__auto__,sort_ch,load_ch,___$1){
return (function (p1__45167_SHARP_){
return cljs.core.merge.call(null,p1__45167_SHARP_,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(resp__$1));
});})(resp__$1,new_page,inst_45284,inst_45285,inst_45286,inst_45287,inst_45288,inst_45289,inst_45290,inst_45291,inst_45292,inst_45293,inst_45294,state_val_45304,c__11475__auto__,sort_ch,load_ch,___$1))
);

return om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"link_ids","link_ids",-791411950),((function (resp__$1,new_page,inst_45284,inst_45285,inst_45286,inst_45287,inst_45288,inst_45289,inst_45290,inst_45291,inst_45292,inst_45293,inst_45294,state_val_45304,c__11475__auto__,sort_ch,load_ch,___$1){
return (function (p1__45168_SHARP_){
return cljs.core.into.call(null,p1__45168_SHARP_,new cljs.core.Keyword(null,"new_rel_ids","new_rel_ids",701283960).cljs$core$IFn$_invoke$arity$1(resp__$1));
});})(resp__$1,new_page,inst_45284,inst_45285,inst_45286,inst_45287,inst_45288,inst_45289,inst_45290,inst_45291,inst_45292,inst_45293,inst_45294,state_val_45304,c__11475__auto__,sort_ch,load_ch,___$1))
);
}
});
;})(new_page,inst_45284,inst_45285,inst_45286,inst_45287,inst_45288,inst_45289,inst_45290,inst_45291,inst_45292,inst_45293,inst_45294,state_val_45304,c__11475__auto__,sort_ch,load_ch,___$1))
})();
var inst_45296 = [new cljs.core.Keyword(null,"transit","transit",359458387),inst_45294,inst_45295];
var inst_45297 = cljs.core.PersistentHashMap.fromArrays(inst_45289,inst_45296);
var inst_45298 = ajax.core.GET.call(null,inst_45288,inst_45297);
var state_45303__$1 = (function (){var statearr_45306 = state_45303;
(statearr_45306[(7)] = inst_45285);

(statearr_45306[(8)] = inst_45298);

return statearr_45306;
})();
var statearr_45307_45328 = state_45303__$1;
(statearr_45307_45328[(2)] = null);

(statearr_45307_45328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__11475__auto__,sort_ch,load_ch,___$1))
;
return ((function (switch__11410__auto__,c__11475__auto__,sort_ch,load_ch,___$1){
return (function() {
var openthink$views$links$links_view_$_state_machine__11411__auto__ = null;
var openthink$views$links$links_view_$_state_machine__11411__auto____0 = (function (){
var statearr_45311 = [null,null,null,null,null,null,null,null,null];
(statearr_45311[(0)] = openthink$views$links$links_view_$_state_machine__11411__auto__);

(statearr_45311[(1)] = (1));

return statearr_45311;
});
var openthink$views$links$links_view_$_state_machine__11411__auto____1 = (function (state_45303){
while(true){
var ret_value__11412__auto__ = (function (){try{while(true){
var result__11413__auto__ = switch__11410__auto__.call(null,state_45303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11413__auto__;
}
break;
}
}catch (e45312){if((e45312 instanceof Object)){
var ex__11414__auto__ = e45312;
var statearr_45313_45329 = state_45303;
(statearr_45313_45329[(5)] = ex__11414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45330 = state_45303;
state_45303 = G__45330;
continue;
} else {
return ret_value__11412__auto__;
}
break;
}
});
openthink$views$links$links_view_$_state_machine__11411__auto__ = function(state_45303){
switch(arguments.length){
case 0:
return openthink$views$links$links_view_$_state_machine__11411__auto____0.call(this);
case 1:
return openthink$views$links$links_view_$_state_machine__11411__auto____1.call(this,state_45303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
openthink$views$links$links_view_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$0 = openthink$views$links$links_view_$_state_machine__11411__auto____0;
openthink$views$links$links_view_$_state_machine__11411__auto__.cljs$core$IFn$_invoke$arity$1 = openthink$views$links$links_view_$_state_machine__11411__auto____1;
return openthink$views$links$links_view_$_state_machine__11411__auto__;
})()
;})(switch__11410__auto__,c__11475__auto__,sort_ch,load_ch,___$1))
})();
var state__11477__auto__ = (function (){var statearr_45314 = f__11476__auto__.call(null);
(statearr_45314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11475__auto__);

return statearr_45314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11477__auto__);
});})(c__11475__auto__,sort_ch,load_ch,___$1))
);

return c__11475__auto__;
});

openthink.views.links.t_openthink$views$links45246.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.links.t_openthink$views$links45246.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var link_ids = new cljs.core.Keyword(null,"link_ids","link_ids",-791411950).cljs$core$IFn$_invoke$arity$1(self__.data);
var link_rels = openthink.utils.select_values.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(self__.data),link_ids);
return React.DOM.div(({"className": "children-view"}),React.DOM.div(({"className": "row reply-action"}),React.DOM.button(({"onClick": ((function (link_ids,link_rels,___$1){
return (function (){
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"reply-to","reply-to",-145674792),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(openthink.cursors.current_post.call(null)));

return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.Keyword(null,"new-post","new-post",-1808203791));
});})(link_ids,link_rels,___$1))
, "className": "button expand large reply-btn"}),"Link new Post")),((cljs.core.empty_QMARK_.call(null,link_rels))?React.DOM.div(null,"No posts have been linked yet"):React.DOM.span(null,React.DOM.div(({"className": "row child-sort-section"}),sablono.interpreter.interpret.call(null,(function (){var sval = new cljs.core.Keyword(null,"sort-value","sort-value",-585546274).cljs$core$IFn$_invoke$arity$1(self__.data);
var sort_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"sort-chan","sort-chan",-493870758));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (sval,sort_ch,link_ids,link_rels,___$1){
return (function (p1__45169_SHARP_){
return cljs.core.async.put_BANG_.call(null,sort_ch,p1__45169_SHARP_.target.value);
});})(sval,sort_ch,link_ids,link_rels,___$1))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),openthink.views.links.sort_option_attrs.call(null,"top",sval),"Top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),openthink.views.links.sort_option_attrs.call(null,"new",sval),"Newest"], null)], null);
})())),cljs.core.into_array.call(null,(function (){var iter__7326__auto__ = ((function (link_ids,link_rels,___$1){
return (function openthink$views$links$links_view_$_iter__45317(s__45318){
return (new cljs.core.LazySeq(null,((function (link_ids,link_rels,___$1){
return (function (){
var s__45318__$1 = s__45318;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__45318__$1);
if(temp__4657__auto__){
var s__45318__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45318__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__45318__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__45320 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__45319 = (0);
while(true){
if((i__45319 < size__7325__auto__)){
var link = cljs.core._nth.call(null,c__7324__auto__,i__45319);
cljs.core.chunk_append.call(null,b__45320,React.DOM.div(({"className": "row"}),sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.links.link_view,link))));

var G__45331 = (i__45319 + (1));
i__45319 = G__45331;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45320),openthink$views$links$links_view_$_iter__45317.call(null,cljs.core.chunk_rest.call(null,s__45318__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45320),null);
}
} else {
var link = cljs.core.first.call(null,s__45318__$2);
return cljs.core.cons.call(null,React.DOM.div(({"className": "row"}),sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.links.link_view,link))),openthink$views$links$links_view_$_iter__45317.call(null,cljs.core.rest.call(null,s__45318__$2)));
}
} else {
return null;
}
break;
}
});})(link_ids,link_rels,___$1))
,null,null));
});})(link_ids,link_rels,___$1))
;
return iter__7326__auto__.call(null,link_rels);
})()),sablono.interpreter.interpret.call(null,(function (){var G__45321 = (((om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099)) instanceof cljs.core.Keyword))?om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099)).fqn:null);
switch (G__45321) {
case "sorting":
return openthink.views.links.mock_link.call(null,"Sorting...");

break;
case "loading":
return openthink.views.links.mock_link.call(null,"Loading...");

break;
case "ready":
var page = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"page","page",849072397));
if((cljs.core.count.call(null,link_rels) >= ((8) * (page + (1))))){
return openthink.views.links.mock_link.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (page,G__45321,link_ids,link_rels,___$1){
return (function (___$2){
cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614)),(page + (1)));

return false;
});})(page,G__45321,link_ids,link_rels,___$1))
], null),"\u25BC Load more posts \u25BC"], null));
} else {
return null;
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099)))].join('')));

}
})()))));
});

openthink.views.links.t_openthink$views$links45246.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta45247","meta45247",-853915541,null)], null);
});

openthink.views.links.t_openthink$views$links45246.cljs$lang$type = true;

openthink.views.links.t_openthink$views$links45246.cljs$lang$ctorStr = "openthink.views.links/t_openthink$views$links45246";

openthink.views.links.t_openthink$views$links45246.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"openthink.views.links/t_openthink$views$links45246");
});

openthink.views.links.__GT_t_openthink$views$links45246 = (function openthink$views$links$links_view_$___GT_t_openthink$views$links45246(data__$1,owner__$1,meta45247){
return (new openthink.views.links.t_openthink$views$links45246(data__$1,owner__$1,meta45247));
});

}

return (new openthink.views.links.t_openthink$views$links45246(data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
openthink.views.links.links_section = (function openthink$views$links$links_section(data,owner){
if(typeof openthink.views.links.t_openthink$views$links45336 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
openthink.views.links.t_openthink$views$links45336 = (function (data,owner,meta45337){
this.data = data;
this.owner = owner;
this.meta45337 = meta45337;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
openthink.views.links.t_openthink$views$links45336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45338,meta45337__$1){
var self__ = this;
var _45338__$1 = this;
return (new openthink.views.links.t_openthink$views$links45336(self__.data,self__.owner,meta45337__$1));
});

openthink.views.links.t_openthink$views$links45336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45338){
var self__ = this;
var _45338__$1 = this;
return self__.meta45337;
});

openthink.views.links.t_openthink$views$links45336.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

openthink.views.links.t_openthink$views$links45336.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.core.println.call(null,"links view");

return React.DOM.div(({"className": "children-section medium-5 columns"}),sablono.interpreter.interpret.call(null,om.core.build.call(null,openthink.views.links.links_view,self__.data)));
});

openthink.views.links.t_openthink$views$links45336.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta45337","meta45337",958857471,null)], null);
});

openthink.views.links.t_openthink$views$links45336.cljs$lang$type = true;

openthink.views.links.t_openthink$views$links45336.cljs$lang$ctorStr = "openthink.views.links/t_openthink$views$links45336";

openthink.views.links.t_openthink$views$links45336.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"openthink.views.links/t_openthink$views$links45336");
});

openthink.views.links.__GT_t_openthink$views$links45336 = (function openthink$views$links$links_section_$___GT_t_openthink$views$links45336(data__$1,owner__$1,meta45337){
return (new openthink.views.links.t_openthink$views$links45336(data__$1,owner__$1,meta45337));
});

}

return (new openthink.views.links.t_openthink$views$links45336(data,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=links.js.map