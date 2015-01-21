// Compiled by ClojureScript 0.0-2511
goog.provide('openthink.cursors');
goog.require('cljs.core');
goog.require('openthink.utils');
goog.require('openthink.state');
goog.require('om.core');
openthink.cursors.current_post = (function current_post(){
var root_cursor = om.core.root_cursor.call(null,openthink.state.app_state);
return om.core.ref_cursor.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(root_cursor),new cljs.core.Keyword(null,"current_post","current_post",2072811381).cljs$core$IFn$_invoke$arity$1(root_cursor)));
});
openthink.cursors.child_rels = (function child_rels(){
var root_cursor = om.core.root_cursor.call(null,openthink.state.app_state);
var child_rel_ids = new cljs.core.Keyword(null,"child_rel_ids","child_rel_ids",890940940).cljs$core$IFn$_invoke$arity$1(openthink.cursors.current_post.call(null));
return om.core.ref_cursor.call(null,openthink.utils.select_values.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(root_cursor),child_rel_ids));
});
openthink.cursors.post_from_rel = (function post_from_rel(rel){
var posts = new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(om.core.root_cursor.call(null,openthink.state.app_state));
return om.core.ref_cursor.call(null,cljs.core.get.call(null,posts,new cljs.core.Keyword(null,"child_id","child_id",1899830409).cljs$core$IFn$_invoke$arity$1(rel)));
});
openthink.cursors.comments_cursor = (function comments_cursor(){
return om.core.ref_cursor.call(null,new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(om.core.root_cursor.call(null,openthink.state.app_state)));
});
openthink.cursors.action_cursor = (function action_cursor(action){
var root_cursor = om.core.root_cursor.call(null,openthink.state.app_state);
return om.core.ref_cursor.call(null,((cljs.core._EQ_.call(null,cljs.core.get.call(null,action,(1)),"Relation"))?cljs.core.get.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(root_cursor),cljs.core.get.call(null,action,(0))):cljs.core.get.call(null,new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(root_cursor),cljs.core.get.call(null,action,(0)))));
});

//# sourceMappingURL=cursors.js.map