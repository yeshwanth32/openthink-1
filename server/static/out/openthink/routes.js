// Compiled by ClojureScript 1.9.293 {}
goog.provide('openthink.routes');
goog.require('cljs.core');
goog.require('bidi.bidi');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('openthink.state');
openthink.routes.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 2, ["",new cljs.core.Keyword(null,"index","index",-1531685915),"post/",cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583)], null),new cljs.core.Keyword(null,"post","post",269697687)], true, false)], null)], null);
openthink.routes.get_post_BANG_ = (function openthink$routes$get_post_BANG_(url){
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, ["data-only",true], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (resp){
cljs.core.println.call(null,"new post returned");

cljs.core.println.call(null,resp);

var resp__$1 = clojure.walk.keywordize_keys.call(null,resp);
if(cljs.core.contains_QMARK_.call(null,resp__$1,new cljs.core.Keyword(null,"error","error",-978969032))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,openthink.state.app_state,cljs.core.merge,resp__$1);
}
})], null));
});
openthink.routes.dispatch_BANG_ = (function openthink$routes$dispatch_BANG_(route){
cljs.core.println.call(null,route);

var G__45342 = (((new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(route) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(route).fqn:null);
switch (G__45342) {
case "index":
return openthink.routes.get_post_BANG_.call(null,"/");

break;
case "post":
return openthink.routes.get_post_BANG_.call(null,[cljs.core.str("/post/"),cljs.core.str(cljs.core.get_in.call(null,route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-params","route-params",2111411055),new cljs.core.Keyword(null,"title","title",636505583)], null)))].join(''));

break;
default:
return cljs.core.println.call(null,"no matching route");

}
});

//# sourceMappingURL=routes.js.map