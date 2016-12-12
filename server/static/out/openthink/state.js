// Compiled by ClojureScript 1.9.293 {}
goog.provide('openthink.state');
goog.require('cljs.core');
goog.require('openthink.utils');
goog.require('cognitect.transit');
goog.require('om.core');
openthink.state.app_state = (function (){var init_data = initial_app_state;
var rdr = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
return cljs.core.atom.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sort-value","sort-value",-585546274),"top"], null),clojure.walk.keywordize_keys.call(null,cognitect.transit.read.call(null,rdr,openthink.utils.unescape_html.call(null,init_data)))));
})();
openthink.state.update_app_state_BANG_ = (function openthink$state$update_app_state_BANG_(resp){

var root = om.core.root_cursor.call(null,openthink.state.app_state);
if(cljs.core.truth_(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(resp))){
om.core.transact_BANG_.call(null,root,new cljs.core.Keyword(null,"rels","rels",1770187185),((function (root){
return (function (p1__43649_SHARP_){
return cljs.core.merge.call(null,p1__43649_SHARP_,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(resp));
});})(root))
);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(resp))){
om.core.transact_BANG_.call(null,root,new cljs.core.Keyword(null,"posts","posts",760043164),((function (root){
return (function (p1__43650_SHARP_){
return cljs.core.merge.call(null,p1__43650_SHARP_,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(resp));
});})(root))
);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(resp))){
om.core.transact_BANG_.call(null,root,new cljs.core.Keyword(null,"comments","comments",-293346423),((function (root){
return (function (p1__43651_SHARP_){
return cljs.core.merge.call(null,p1__43651_SHARP_,new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(resp));
});})(root))
);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(resp))){
om.core.update_BANG_.call(null,root,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(resp));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"action_count","action_count",-900104661).cljs$core$IFn$_invoke$arity$1(resp))){
om.core.update_BANG_.call(null,root,new cljs.core.Keyword(null,"action_count","action_count",-900104661),new cljs.core.Keyword(null,"action_count","action_count",-900104661).cljs$core$IFn$_invoke$arity$1(resp));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(resp))){
return om.core.update_BANG_.call(null,root,new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(resp));
} else {
return null;
}
});

//# sourceMappingURL=state.js.map