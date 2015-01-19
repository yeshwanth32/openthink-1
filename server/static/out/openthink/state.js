// Compiled by ClojureScript 0.0-2371
goog.provide('openthink.state');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('cognitect.transit');
goog.require('openthink.utils');
goog.require('openthink.utils');
openthink.state.app_state = (function (){var init_data = initial_app_state;var rdr = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));return cljs.core.atom.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sort-value","sort-value",-585546274),"top"], null),clojure.walk.keywordize_keys.call(null,cognitect.transit.read.call(null,rdr,openthink.utils.unescape_html.call(null,init_data)))));
})();

//# sourceMappingURL=state.js.map