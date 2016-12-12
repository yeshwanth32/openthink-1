// Compiled by ClojureScript 1.9.293 {}
goog.provide('pushy.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.History');
goog.require('goog.history.Html5History');
goog.require('goog.history.Html5History.TokenTransformer');
goog.require('goog.history.EventType');
goog.require('goog.Uri');
pushy.core.on_click = (function pushy$core$on_click(funk){
return goog.events.listen(document,"click",funk);
});
/**
 * Traverses up the DOM tree and returns the first node that contains a href attr
 */
pushy.core.recur_href = (function pushy$core$recur_href(target){
if(cljs.core.truth_(target.href)){
return target;
} else {
if(cljs.core.truth_(target.parentNode)){
return pushy.core.recur_href.call(null,target.parentNode);
} else {
return null;
}
}
});
pushy.core.update_history_BANG_ = (function pushy$core$update_history_BANG_(h){
var G__45779 = h;
G__45779.setUseFragment(false);

G__45779.setPathPrefix("");

G__45779.setEnabled(true);

return G__45779;
});
pushy.core.set_retrieve_token_BANG_ = (function pushy$core$set_retrieve_token_BANG_(t){
t.retrieveToken = (function (path_prefix,location){
return [cljs.core.str(location.pathname),cljs.core.str(location.search)].join('');
});

return t;
});
pushy.core.set_create_url_BANG_ = (function pushy$core$set_create_url_BANG_(t){
t.createUrl = (function (token,path_prefix,location){
return [cljs.core.str(path_prefix),cljs.core.str(token)].join('');
});

return t;
});
pushy.core.new_history = (function pushy$core$new_history(var_args){
var args45780 = [];
var len__7651__auto___45783 = arguments.length;
var i__7652__auto___45784 = (0);
while(true){
if((i__7652__auto___45784 < len__7651__auto___45783)){
args45780.push((arguments[i__7652__auto___45784]));

var G__45785 = (i__7652__auto___45784 + (1));
i__7652__auto___45784 = G__45785;
continue;
} else {
}
break;
}

var G__45782 = args45780.length;
switch (G__45782) {
case 0:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45780.length)].join('')));

}
});

pushy.core.new_history.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.new_history.call(null,pushy.core.set_create_url_BANG_.call(null,pushy.core.set_retrieve_token_BANG_.call(null,(new goog.history.Html5History.TokenTransformer()))));
});

pushy.core.new_history.cljs$core$IFn$_invoke$arity$1 = (function (transformer){
return pushy.core.update_history_BANG_.call(null,(new goog.history.Html5History(window,transformer)));
});

pushy.core.new_history.cljs$lang$maxFixedArity = 1;


/**
 * @interface
 */
pushy.core.IHistory = function(){};

pushy.core.set_token_BANG_ = (function pushy$core$set_token_BANG_(var_args){
var args45787 = [];
var len__7651__auto___45793 = arguments.length;
var i__7652__auto___45794 = (0);
while(true){
if((i__7652__auto___45794 < len__7651__auto___45793)){
args45787.push((arguments[i__7652__auto___45794]));

var G__45795 = (i__7652__auto___45794 + (1));
i__7652__auto___45794 = G__45795;
continue;
} else {
}
break;
}

var G__45789 = args45787.length;
switch (G__45789) {
case 2:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45787.length)].join('')));

}
});

pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$set_token_BANG_$arity$2 == null)))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$2(this$,token);
} else {
var x__7206__auto__ = (((this$ == null))?null:this$);
var m__7207__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,this$,token);
} else {
var m__7207__auto____$1 = (pushy.core.set_token_BANG_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.set-token!",this$);
}
}
}
});

pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$set_token_BANG_$arity$3 == null)))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$3(this$,token,title);
} else {
var x__7206__auto__ = (((this$ == null))?null:this$);
var m__7207__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,this$,token,title);
} else {
var m__7207__auto____$1 = (pushy.core.set_token_BANG_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,this$,token,title);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.set-token!",this$);
}
}
}
});

pushy.core.set_token_BANG_.cljs$lang$maxFixedArity = 3;


pushy.core.replace_token_BANG_ = (function pushy$core$replace_token_BANG_(var_args){
var args45790 = [];
var len__7651__auto___45797 = arguments.length;
var i__7652__auto___45798 = (0);
while(true){
if((i__7652__auto___45798 < len__7651__auto___45797)){
args45790.push((arguments[i__7652__auto___45798]));

var G__45799 = (i__7652__auto___45798 + (1));
i__7652__auto___45798 = G__45799;
continue;
} else {
}
break;
}

var G__45792 = args45790.length;
switch (G__45792) {
case 2:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45790.length)].join('')));

}
});

pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$replace_token_BANG_$arity$2 == null)))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$2(this$,token);
} else {
var x__7206__auto__ = (((this$ == null))?null:this$);
var m__7207__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,this$,token);
} else {
var m__7207__auto____$1 = (pushy.core.replace_token_BANG_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.replace-token!",this$);
}
}
}
});

pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$replace_token_BANG_$arity$3 == null)))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$3(this$,token,title);
} else {
var x__7206__auto__ = (((this$ == null))?null:this$);
var m__7207__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,this$,token,title);
} else {
var m__7207__auto____$1 = (pushy.core.replace_token_BANG_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,this$,token,title);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.replace-token!",this$);
}
}
}
});

pushy.core.replace_token_BANG_.cljs$lang$maxFixedArity = 3;


pushy.core.get_token = (function pushy$core$get_token(this$){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$get_token$arity$1 == null)))){
return this$.pushy$core$IHistory$get_token$arity$1(this$);
} else {
var x__7206__auto__ = (((this$ == null))?null:this$);
var m__7207__auto__ = (pushy.core.get_token[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,this$);
} else {
var m__7207__auto____$1 = (pushy.core.get_token["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.get-token",this$);
}
}
}
});

pushy.core.start_BANG_ = (function pushy$core$start_BANG_(this$){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$start_BANG_$arity$1 == null)))){
return this$.pushy$core$IHistory$start_BANG_$arity$1(this$);
} else {
var x__7206__auto__ = (((this$ == null))?null:this$);
var m__7207__auto__ = (pushy.core.start_BANG_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,this$);
} else {
var m__7207__auto____$1 = (pushy.core.start_BANG_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.start!",this$);
}
}
}
});

pushy.core.stop_BANG_ = (function pushy$core$stop_BANG_(this$){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$stop_BANG_$arity$1 == null)))){
return this$.pushy$core$IHistory$stop_BANG_$arity$1(this$);
} else {
var x__7206__auto__ = (((this$ == null))?null:this$);
var m__7207__auto__ = (pushy.core.stop_BANG_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,this$);
} else {
var m__7207__auto____$1 = (pushy.core.stop_BANG_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.stop!",this$);
}
}
}
});

/**
 * Takes in three functions:
 *  * dispatch-fn: the function that dispatches when a match is found
 *  * match-fn: the function used to check if a particular route exists
 *  * identity-fn: (optional) extract the route from value returned by match-fn
 */
pushy.core.pushy = (function pushy$core$pushy(var_args){
var args45801 = [];
var len__7651__auto___45811 = arguments.length;
var i__7652__auto___45812 = (0);
while(true){
if((i__7652__auto___45812 < len__7651__auto___45811)){
args45801.push((arguments[i__7652__auto___45812]));

var G__45813 = (i__7652__auto___45812 + (1));
i__7652__auto___45812 = G__45813;
continue;
} else {
}
break;
}

var G__45803 = args45801.length;
switch (G__45803) {
case 2:
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45801.length)].join('')));

}
});

pushy.core.pushy.cljs$core$IFn$_invoke$arity$2 = (function (dispatch_fn,match_fn){
return pushy.core.pushy.call(null,dispatch_fn,match_fn,cljs.core.identity);
});

pushy.core.pushy.cljs$core$IFn$_invoke$arity$3 = (function (dispatch_fn,match_fn,identity_fn){
var history = pushy.core.new_history.call(null);
var event_keys = cljs.core.atom.call(null,null);
if(typeof pushy.core.t_pushy$core45804 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {pushy.core.IHistory}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
pushy.core.t_pushy$core45804 = (function (dispatch_fn,match_fn,identity_fn,history,event_keys,meta45805){
this.dispatch_fn = dispatch_fn;
this.match_fn = match_fn;
this.identity_fn = identity_fn;
this.history = history;
this.event_keys = event_keys;
this.meta45805 = meta45805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
pushy.core.t_pushy$core45804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (history,event_keys){
return (function (_45806,meta45805__$1){
var self__ = this;
var _45806__$1 = this;
return (new pushy.core.t_pushy$core45804(self__.dispatch_fn,self__.match_fn,self__.identity_fn,self__.history,self__.event_keys,meta45805__$1));
});})(history,event_keys))
;

pushy.core.t_pushy$core45804.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (history,event_keys){
return (function (_45806){
var self__ = this;
var _45806__$1 = this;
return self__.meta45805;
});})(history,event_keys))
;

pushy.core.t_pushy$core45804.prototype.pushy$core$IHistory$ = cljs.core.PROTOCOL_SENTINEL;

pushy.core.t_pushy$core45804.prototype.pushy$core$IHistory$set_token_BANG_$arity$2 = ((function (history,event_keys){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token);
});})(history,event_keys))
;

pushy.core.t_pushy$core45804.prototype.pushy$core$IHistory$set_token_BANG_$arity$3 = ((function (history,event_keys){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token,title);
});})(history,event_keys))
;

pushy.core.t_pushy$core45804.prototype.pushy$core$IHistory$replace_token_BANG_$arity$2 = ((function (history,event_keys){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token);
});})(history,event_keys))
;

pushy.core.t_pushy$core45804.prototype.pushy$core$IHistory$replace_token_BANG_$arity$3 = ((function (history,event_keys){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token,title);
});})(history,event_keys))
;

pushy.core.t_pushy$core45804.prototype.pushy$core$IHistory$get_token$arity$1 = ((function (history,event_keys){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.history.getToken();
});})(history,event_keys))
;

pushy.core.t_pushy$core45804.prototype.pushy$core$IHistory$start_BANG_$arity$1 = ((function (history,event_keys){
return (function (this$){
var self__ = this;
var this$__$1 = this;
pushy.core.stop_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,goog.events.listen(self__.history,goog.history.EventType.NAVIGATE,((function (this$__$1,history,event_keys){
return (function (e){
var temp__4655__auto__ = self__.identity_fn.call(null,self__.match_fn.call(null,e.token));
if(cljs.core.truth_(temp__4655__auto__)){
var match = temp__4655__auto__;
return self__.dispatch_fn.call(null,match);
} else {
return null;
}
});})(this$__$1,history,event_keys))
));

var temp__4657__auto___45815 = self__.identity_fn.call(null,self__.match_fn.call(null,pushy.core.get_token.call(null,this$__$1)));
if(cljs.core.truth_(temp__4657__auto___45815)){
var match_45816 = temp__4657__auto___45815;
self__.dispatch_fn.call(null,match_45816);
} else {
}

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,pushy.core.on_click.call(null,((function (this$__$1,history,event_keys){
return (function (e){
var temp__4657__auto__ = pushy.core.recur_href.call(null,e.target);
if(cljs.core.truth_(temp__4657__auto__)){
var el = temp__4657__auto__;
var href = el.href;
var path = goog.Uri.parse(href).getPath();
if(cljs.core.truth_((function (){var and__6531__auto__ = self__.identity_fn.call(null,self__.match_fn.call(null,path));
if(cljs.core.truth_(and__6531__auto__)){
return (cljs.core.not.call(null,e.altKey)) && (cljs.core.not.call(null,e.ctrlKey)) && (cljs.core.not.call(null,e.metaKey)) && (cljs.core.not.call(null,e.shiftKey)) && (!(cljs.core._EQ_.call(null,"_blank",el.getAttribute("target")))) && (cljs.core.not_EQ_.call(null,(1),e.button));
} else {
return and__6531__auto__;
}
})())){
var temp__4655__auto___45817 = el.title;
if(cljs.core.truth_(temp__4655__auto___45817)){
var title_45818 = temp__4655__auto___45817;
pushy.core.set_token_BANG_.call(null,this$__$1,path,title_45818);
} else {
pushy.core.set_token_BANG_.call(null,this$__$1,path);
}

return e.preventDefault();
} else {
return null;
}
} else {
return null;
}
});})(this$__$1,history,event_keys))
));

return null;
});})(history,event_keys))
;

pushy.core.t_pushy$core45804.prototype.pushy$core$IHistory$stop_BANG_$arity$1 = ((function (history,event_keys){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__45807_45819 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.event_keys));
var chunk__45808_45820 = null;
var count__45809_45821 = (0);
var i__45810_45822 = (0);
while(true){
if((i__45810_45822 < count__45809_45821)){
var key_45823 = cljs.core._nth.call(null,chunk__45808_45820,i__45810_45822);
goog.events.unlistenByKey(key_45823);

var G__45824 = seq__45807_45819;
var G__45825 = chunk__45808_45820;
var G__45826 = count__45809_45821;
var G__45827 = (i__45810_45822 + (1));
seq__45807_45819 = G__45824;
chunk__45808_45820 = G__45825;
count__45809_45821 = G__45826;
i__45810_45822 = G__45827;
continue;
} else {
var temp__4657__auto___45828 = cljs.core.seq.call(null,seq__45807_45819);
if(temp__4657__auto___45828){
var seq__45807_45829__$1 = temp__4657__auto___45828;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45807_45829__$1)){
var c__7357__auto___45830 = cljs.core.chunk_first.call(null,seq__45807_45829__$1);
var G__45831 = cljs.core.chunk_rest.call(null,seq__45807_45829__$1);
var G__45832 = c__7357__auto___45830;
var G__45833 = cljs.core.count.call(null,c__7357__auto___45830);
var G__45834 = (0);
seq__45807_45819 = G__45831;
chunk__45808_45820 = G__45832;
count__45809_45821 = G__45833;
i__45810_45822 = G__45834;
continue;
} else {
var key_45835 = cljs.core.first.call(null,seq__45807_45829__$1);
goog.events.unlistenByKey(key_45835);

var G__45836 = cljs.core.next.call(null,seq__45807_45829__$1);
var G__45837 = null;
var G__45838 = (0);
var G__45839 = (0);
seq__45807_45819 = G__45836;
chunk__45808_45820 = G__45837;
count__45809_45821 = G__45838;
i__45810_45822 = G__45839;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,self__.event_keys,null);
});})(history,event_keys))
;

pushy.core.t_pushy$core45804.getBasis = ((function (history,event_keys){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatch-fn","dispatch-fn",-1401088155,null),new cljs.core.Symbol(null,"match-fn","match-fn",-795226853,null),new cljs.core.Symbol(null,"identity-fn","identity-fn",756348900,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"event-keys","event-keys",804564896,null),new cljs.core.Symbol(null,"meta45805","meta45805",-205730493,null)], null);
});})(history,event_keys))
;

pushy.core.t_pushy$core45804.cljs$lang$type = true;

pushy.core.t_pushy$core45804.cljs$lang$ctorStr = "pushy.core/t_pushy$core45804";

pushy.core.t_pushy$core45804.cljs$lang$ctorPrWriter = ((function (history,event_keys){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"pushy.core/t_pushy$core45804");
});})(history,event_keys))
;

pushy.core.__GT_t_pushy$core45804 = ((function (history,event_keys){
return (function pushy$core$__GT_t_pushy$core45804(dispatch_fn__$1,match_fn__$1,identity_fn__$1,history__$1,event_keys__$1,meta45805){
return (new pushy.core.t_pushy$core45804(dispatch_fn__$1,match_fn__$1,identity_fn__$1,history__$1,event_keys__$1,meta45805));
});})(history,event_keys))
;

}

return (new pushy.core.t_pushy$core45804(dispatch_fn,match_fn,identity_fn,history,event_keys,cljs.core.PersistentArrayMap.EMPTY));
});

pushy.core.pushy.cljs$lang$maxFixedArity = 3;

/**
 * Returns whether Html5History is supported
 */
pushy.core.supported_QMARK_ = (function pushy$core$supported_QMARK_(var_args){
var args45840 = [];
var len__7651__auto___45843 = arguments.length;
var i__7652__auto___45844 = (0);
while(true){
if((i__7652__auto___45844 < len__7651__auto___45843)){
args45840.push((arguments[i__7652__auto___45844]));

var G__45845 = (i__7652__auto___45844 + (1));
i__7652__auto___45844 = G__45845;
continue;
} else {
}
break;
}

var G__45842 = args45840.length;
switch (G__45842) {
case 0:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45840.length)].join('')));

}
});

pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.supported_QMARK_.call(null,window);
});

pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (window){
return goog.history.Html5History.isSupported(window);
});

pushy.core.supported_QMARK_.cljs$lang$maxFixedArity = 1;

pushy.core.push_state_BANG_ = (function pushy$core$push_state_BANG_(var_args){
var args45847 = [];
var len__7651__auto___45850 = arguments.length;
var i__7652__auto___45851 = (0);
while(true){
if((i__7652__auto___45851 < len__7651__auto___45850)){
args45847.push((arguments[i__7652__auto___45851]));

var G__45852 = (i__7652__auto___45851 + (1));
i__7652__auto___45851 = G__45852;
continue;
} else {
}
break;
}

var G__45849 = args45847.length;
switch (G__45849) {
case 2:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45847.length)].join('')));

}
});

pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (dispatch_fn,match_fn){
return pushy.core.push_state_BANG_.call(null,dispatch_fn,match_fn,cljs.core.identity);
});

pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dispatch_fn,match_fn,identity_fn){
var h = pushy.core.pushy.call(null,dispatch_fn,match_fn,identity_fn);
pushy.core.start_BANG_.call(null,h);

return h;
});

pushy.core.push_state_BANG_.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map