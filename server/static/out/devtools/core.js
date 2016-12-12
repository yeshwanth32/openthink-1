// Compiled by ClojureScript 1.9.293 {}
goog.provide('devtools.core');
goog.require('cljs.core');
goog.require('devtools.format');
goog.require('devtools.prefs');
devtools.core._STAR_devtools_enabled_STAR_ = true;
devtools.core._STAR_sanitizer_enabled_STAR_ = true;
devtools.core._STAR_monitor_enabled_STAR_ = false;
devtools.core.formatter_key = "devtoolsFormatters";

/**
* @constructor
*/
devtools.core.CLJSDevtoolsFormatter = (function (){
})

devtools.core.CLJSDevtoolsFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

devtools.core.CLJSDevtoolsFormatter.cljs$lang$type = true;

devtools.core.CLJSDevtoolsFormatter.cljs$lang$ctorStr = "devtools.core/CLJSDevtoolsFormatter";

devtools.core.CLJSDevtoolsFormatter.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"devtools.core/CLJSDevtoolsFormatter");
});

devtools.core.__GT_CLJSDevtoolsFormatter = (function devtools$core$__GT_CLJSDevtoolsFormatter(){
return (new devtools.core.CLJSDevtoolsFormatter());
});

devtools.core.find_fn_in_debug_ns = (function devtools$core$find_fn_in_debug_ns(fn_name){
try{return (window["devtools"]["debug"][fn_name]);
}catch (e45763){var _ = e45763;
return null;
}});
devtools.core.monitor_api_call_if_avail = (function devtools$core$monitor_api_call_if_avail(name,api_call,args){
var temp__4655__auto__ = devtools.core.find_fn_in_debug_ns.call(null,"monitor_api_call");
if(cljs.core.truth_(temp__4655__auto__)){
var monitor_api_call = temp__4655__auto__;
return monitor_api_call.call(null,name,api_call,args);
} else {
return cljs.core.apply.call(null,api_call,args);
}
});
devtools.core.log_exception_if_avail = (function devtools$core$log_exception_if_avail(var_args){
var args__7658__auto__ = [];
var len__7651__auto___45765 = arguments.length;
var i__7652__auto___45766 = (0);
while(true){
if((i__7652__auto___45766 < len__7651__auto___45765)){
args__7658__auto__.push((arguments[i__7652__auto___45766]));

var G__45767 = (i__7652__auto___45766 + (1));
i__7652__auto___45766 = G__45767;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((0) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((0)),(0),null)):null);
return devtools.core.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic(argseq__7659__auto__);
});

devtools.core.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var temp__4655__auto__ = devtools.core.find_fn_in_debug_ns.call(null,"log_exception");
if(cljs.core.truth_(temp__4655__auto__)){
var log_exception = temp__4655__auto__;
return cljs.core.apply.call(null,log_exception,args);
} else {
return null;
}
});

devtools.core.log_exception_if_avail.cljs$lang$maxFixedArity = (0);

devtools.core.log_exception_if_avail.cljs$lang$applyTo = (function (seq45764){
return devtools.core.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45764));
});

devtools.core.monitor_api_calls = (function devtools$core$monitor_api_calls(name,api_call){
return (function() { 
var G__45768__delegate = function (args){
if(cljs.core.not.call(null,devtools.core._STAR_monitor_enabled_STAR_)){
return cljs.core.apply.call(null,api_call,args);
} else {
return devtools.core.monitor_api_call_if_avail.call(null,name,api_call,args);
}
};
var G__45768 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45769__i = 0, G__45769__a = new Array(arguments.length -  0);
while (G__45769__i < G__45769__a.length) {G__45769__a[G__45769__i] = arguments[G__45769__i + 0]; ++G__45769__i;}
  args = new cljs.core.IndexedSeq(G__45769__a,0);
} 
return G__45768__delegate.call(this,args);};
G__45768.cljs$lang$maxFixedArity = 0;
G__45768.cljs$lang$applyTo = (function (arglist__45770){
var args = cljs.core.seq(arglist__45770);
return G__45768__delegate(args);
});
G__45768.cljs$core$IFn$_invoke$arity$variadic = G__45768__delegate;
return G__45768;
})()
;
});
devtools.core.sanitize = (function devtools$core$sanitize(name,api_call){
return (function() { 
var G__45773__delegate = function (args){
if(cljs.core.not.call(null,devtools.core._STAR_sanitizer_enabled_STAR_)){
return cljs.core.apply.call(null,api_call,args);
} else {
try{return cljs.core.apply.call(null,api_call,args);
}catch (e45772){var e = e45772;
devtools.core.log_exception_if_avail.call(null,[cljs.core.str(name),cljs.core.str(": "),cljs.core.str(e)].join(''));

return null;
}}
};
var G__45773 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45774__i = 0, G__45774__a = new Array(arguments.length -  0);
while (G__45774__i < G__45774__a.length) {G__45774__a[G__45774__i] = arguments[G__45774__i + 0]; ++G__45774__i;}
  args = new cljs.core.IndexedSeq(G__45774__a,0);
} 
return G__45773__delegate.call(this,args);};
G__45773.cljs$lang$maxFixedArity = 0;
G__45773.cljs$lang$applyTo = (function (arglist__45775){
var args = cljs.core.seq(arglist__45775);
return G__45773__delegate(args);
});
G__45773.cljs$core$IFn$_invoke$arity$variadic = G__45773__delegate;
return G__45773;
})()
;
});
devtools.core.build_cljs_formatter = (function devtools$core$build_cljs_formatter(){
var wrap = (function (name,api_call){
var monitor = cljs.core.partial.call(null,devtools.core.monitor_api_calls,name);
var sanitizer = cljs.core.partial.call(null,devtools.core.sanitize,name);
cljs.core.comp.call(null,monitor,sanitizer).call(null,api_call);

return api_call;
});
var formatter = (new devtools.core.CLJSDevtoolsFormatter());
var define_BANG_ = ((function (wrap,formatter){
return (function (name,fn){
return (formatter[name] = wrap.call(null,name,fn));
});})(wrap,formatter))
;
define_BANG_.call(null,"header",devtools.format.header_api_call);

define_BANG_.call(null,"hasBody",devtools.format.has_body_api_call);

define_BANG_.call(null,"body",devtools.format.body_api_call);

return formatter;
});
devtools.core.is_ours_QMARK_ = (function devtools$core$is_ours_QMARK_(o){
return (o instanceof devtools.core.CLJSDevtoolsFormatter);
});
devtools.core.get_formatters_safe = (function devtools$core$get_formatters_safe(){
var formatters = (window[devtools.core.formatter_key]);
if(cljs.core.array_QMARK_.call(null,formatters)){
return formatters;
} else {
return [];
}
});
devtools.core.installed_QMARK_ = (function devtools$core$installed_QMARK_(){
var formatters = devtools.core.get_formatters_safe.call(null);
return cljs.core.boolean$.call(null,cljs.core.some.call(null,devtools.core.is_ours_QMARK_,formatters));
});
devtools.core.install_our_formatter_BANG_ = (function devtools$core$install_our_formatter_BANG_(formatter){
var formatters = devtools.core.get_formatters_safe.call(null).slice();
formatters.push(formatter);

return (window[devtools.core.formatter_key] = formatters);
});
devtools.core.uninstall_our_formatters_BANG_ = (function devtools$core$uninstall_our_formatters_BANG_(){
var new_formatters = cljs.core.remove.call(null,devtools.core.is_ours_QMARK_,cljs.core.vec.call(null,devtools.core.get_formatters_safe.call(null)));
var new_formatters_js = ((cljs.core.empty_QMARK_.call(null,new_formatters))?null:cljs.core.into_array.call(null,new_formatters));
return (window[devtools.core.formatter_key] = new_formatters_js);
});
devtools.core.install_BANG_ = (function devtools$core$install_BANG_(){
if(cljs.core.truth_(devtools.core.installed_QMARK_.call(null))){
return console.warn("install!: devtools already installed - nothing to do");
} else {
return devtools.core.install_our_formatter_BANG_.call(null,devtools.core.build_cljs_formatter.call(null));
}
});
devtools.core.uninstall_BANG_ = (function devtools$core$uninstall_BANG_(){
if(cljs.core.not.call(null,devtools.core.installed_QMARK_.call(null))){
return console.warn("uninstall!: devtools not installed - nothing to do");
} else {
return devtools.core.uninstall_our_formatters_BANG_.call(null);
}
});
devtools.core.disable_BANG_ = (function devtools$core$disable_BANG_(){
return devtools.core._STAR_devtools_enabled_STAR_ = false;
});
devtools.core.enable_BANG_ = (function devtools$core$enable_BANG_(){
return devtools.core._STAR_devtools_enabled_STAR_ = true;
});
devtools.core.set_prefs_BANG_ = (function devtools$core$set_prefs_BANG_(new_prefs){
return devtools.prefs.set_prefs_BANG_.call(null,new_prefs);
});
devtools.core.get_prefs = (function devtools$core$get_prefs(){
return devtools.prefs.get_prefs.call(null);
});

//# sourceMappingURL=core.js.map