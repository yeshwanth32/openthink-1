// Compiled by ClojureScript 0.0-2371
goog.provide('openthink.utils');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('dommy.core');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('goog.events');
goog.require('om.core');
goog.require('dommy.core');
goog.require('om.core');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('om.dom');
openthink.utils.listen = (function listen(el,type){var out = cljs.core.async.chan.call(null);goog.events.listen(el,type,((function (out){
return (function (e){return cljs.core.async.put_BANG_.call(null,out,e);
});})(out))
);
return out;
});
openthink.utils.handle_change = (function handle_change(e,owner,field){return om.core.set_state_BANG_.call(null,owner,field,e.target.value);
});
openthink.utils.remove_last = (function remove_last(s,n){var end_index = (cljs.core.count.call(null,s) - n);return cljs.core.subs.call(null,s,(0),end_index);
});
openthink.utils.date = (function date(dt){return openthink.utils.remove_last.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dt)),(15));
});
openthink.utils.split_text = (function split_text(s){return cljs.core.remove.call(null,cljs.core.empty_QMARK_,clojure.string.split.call(null,s,/\\n|\n/));
});
openthink.utils.render_text = (function render_text(s){var iter__4385__auto__ = (function iter__14125(s__14126){return (new cljs.core.LazySeq(null,(function (){var s__14126__$1 = s__14126;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14126__$1);if(temp__4126__auto__)
{var s__14126__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14126__$2))
{var c__4383__auto__ = cljs.core.chunk_first.call(null,s__14126__$2);var size__4384__auto__ = cljs.core.count.call(null,c__4383__auto__);var b__14128 = cljs.core.chunk_buffer.call(null,size__4384__auto__);if((function (){var i__14127 = (0);while(true){
if((i__14127 < size__4384__auto__))
{var p = cljs.core._nth.call(null,c__4383__auto__,i__14127);cljs.core.chunk_append.call(null,b__14128,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),p], null));
{
var G__14129 = (i__14127 + (1));
i__14127 = G__14129;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14128),iter__14125.call(null,cljs.core.chunk_rest.call(null,s__14126__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14128),null);
}
} else
{var p = cljs.core.first.call(null,s__14126__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),p], null),iter__14125.call(null,cljs.core.rest.call(null,s__14126__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4385__auto__.call(null,openthink.utils.split_text.call(null,s));
});
openthink.utils.select_values = (function select_values(map,ks){return cljs.core.reduce.call(null,(function (p1__14130_SHARP_,p2__14131_SHARP_){return cljs.core.conj.call(null,p1__14130_SHARP_,map.call(null,p2__14131_SHARP_));
}),cljs.core.PersistentVector.EMPTY,ks);
});
openthink.utils.do_on_enter = (function do_on_enter(f){return (function (e){if((e.keyCode === (13)))
{return f.call(null);
} else
{return null;
}
});
});
openthink.utils.put_nil_BANG_ = (function put_nil_BANG_(chan,value){cljs.core.async.put_BANG_.call(null,chan,value);
return false;
});
/**
* change html character entities into special characters
*/
openthink.utils.unescape_html = (function unescape_html(text){return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)),"&amp;","&"),"&lt;","<"),"&gt;",">"),"&quot;","\""),"&#34;","\""),"&#x27;","'"),"&#x2F;","/");
});

//# sourceMappingURL=utils.js.map