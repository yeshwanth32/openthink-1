// Compiled by ClojureScript 0.0-2511
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function init_transformer(p__23654){
var map__23660 = p__23654;
var map__23660__$1 = ((cljs.core.seq_QMARK_.call(null,map__23660))?cljs.core.apply.call(null,cljs.core.hash_map,map__23660):map__23660);
var custom_transformers = cljs.core.get.call(null,map__23660__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var replacement_transformers = cljs.core.get.call(null,map__23660__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
return ((function (map__23660,map__23660__$1,custom_transformers,replacement_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_23661 = markdown.transformers._STAR_next_line_STAR_;
try{markdown.transformers._STAR_next_line_STAR_ = next_line;

var vec__23662 = cljs.core.reduce.call(null,((function (_STAR_next_line_STAR_23661,map__23660,map__23660__$1,custom_transformers,replacement_transformers){
return (function (p__23663,transformer){
var vec__23664 = p__23663;
var text = cljs.core.nth.call(null,vec__23664,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__23664,(1),null);
return transformer.call(null,text,state__$1);
});})(_STAR_next_line_STAR_23661,map__23660,map__23660__$1,custom_transformers,replacement_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__3638__auto__ = replacement_transformers;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__23662,(0),null);
var new_state = cljs.core.nth.call(null,vec__23662,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_23661;
}});
;})(map__23660,map__23660__$1,custom_transformers,replacement_transformers))
});
/**
* Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
* @param {...*} var_args
*/
markdown.core.format = (function() { 
var format__delegate = function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
};
var format = function (fmt,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this,fmt,args);};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__23665){
var fmt = cljs.core.first(arglist__23665);
var args = cljs.core.rest(arglist__23665);
return format__delegate(fmt,args);
});
format.cljs$core$IFn$_invoke$arity$variadic = format__delegate;
return format;
})()
;
markdown.core.parse_referenes = (function parse_referenes(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__23670_23674 = cljs.core.seq.call(null,lines);
var chunk__23671_23675 = null;
var count__23672_23676 = (0);
var i__23673_23677 = (0);
while(true){
if((i__23673_23677 < count__23672_23676)){
var line_23678 = cljs.core._nth.call(null,chunk__23671_23675,i__23673_23677);
markdown.transformers.parse_reference_link.call(null,line_23678,references);

var G__23679 = seq__23670_23674;
var G__23680 = chunk__23671_23675;
var G__23681 = count__23672_23676;
var G__23682 = (i__23673_23677 + (1));
seq__23670_23674 = G__23679;
chunk__23671_23675 = G__23680;
count__23672_23676 = G__23681;
i__23673_23677 = G__23682;
continue;
} else {
var temp__4126__auto___23683 = cljs.core.seq.call(null,seq__23670_23674);
if(temp__4126__auto___23683){
var seq__23670_23684__$1 = temp__4126__auto___23683;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23670_23684__$1)){
var c__4425__auto___23685 = cljs.core.chunk_first.call(null,seq__23670_23684__$1);
var G__23686 = cljs.core.chunk_rest.call(null,seq__23670_23684__$1);
var G__23687 = c__4425__auto___23685;
var G__23688 = cljs.core.count.call(null,c__4425__auto___23685);
var G__23689 = (0);
seq__23670_23674 = G__23686;
chunk__23671_23675 = G__23687;
count__23672_23676 = G__23688;
i__23673_23677 = G__23689;
continue;
} else {
var line_23690 = cljs.core.first.call(null,seq__23670_23684__$1);
markdown.transformers.parse_reference_link.call(null,line_23690,references);

var G__23691 = cljs.core.next.call(null,seq__23670_23684__$1);
var G__23692 = null;
var G__23693 = (0);
var G__23694 = (0);
seq__23670_23674 = G__23691;
chunk__23671_23675 = G__23692;
count__23672_23676 = G__23693;
i__23673_23677 = G__23694;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
/**
* processes input text line by line and outputs an HTML string
* @param {...*} var_args
*/
markdown.core.md__GT_html = (function() { 
var md__GT_html__delegate = function (text,params){
var _STAR_substring_STAR_23701 = markdown.transformers._STAR_substring_STAR_;
var formatter23702 = markdown.transformers.formatter;
try{markdown.transformers._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_23701,formatter23702){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_23701,formatter23702))
;

markdown.transformers.formatter = markdown.core.format;

var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = text.split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_referenes.call(null,lines):null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__23704_23707 = lines;
var vec__23705_23708 = G__23704_23707;
var line_23709 = cljs.core.nth.call(null,vec__23705_23708,(0),null);
var more_23710 = cljs.core.nthnext.call(null,vec__23705_23708,(1));
var state_23711 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__23704_23712__$1 = G__23704_23707;
var state_23713__$1 = state_23711;
while(true){
var vec__23706_23714 = G__23704_23712__$1;
var line_23715__$1 = cljs.core.nth.call(null,vec__23706_23714,(0),null);
var more_23716__$1 = cljs.core.nthnext.call(null,vec__23706_23714,(1));
var state_23717__$2 = state_23713__$1;
var state_23718__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_23717__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_23717__$2),cljs.core.first.call(null,more_23716__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_23717__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_23717__$2);
if(cljs.core.truth_(cljs.core.first.call(null,more_23716__$1))){
var G__23719 = more_23716__$1;
var G__23720 = cljs.core.assoc.call(null,transformer.call(null,html,line_23715__$1,cljs.core.first.call(null,more_23716__$1),state_23718__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_23715__$1));
G__23704_23712__$1 = G__23719;
state_23713__$1 = G__23720;
continue;
} else {
transformer.call(null,html,line_23715__$1,"",cljs.core.assoc.call(null,state_23718__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return html.toString();
}finally {markdown.transformers.formatter = formatter23702;

markdown.transformers._STAR_substring_STAR_ = _STAR_substring_STAR_23701;
}};
var md__GT_html = function (text,var_args){
var params = null;
if (arguments.length > 1) {
  params = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return md__GT_html__delegate.call(this,text,params);};
md__GT_html.cljs$lang$maxFixedArity = 1;
md__GT_html.cljs$lang$applyTo = (function (arglist__23721){
var text = cljs.core.first(arglist__23721);
var params = cljs.core.rest(arglist__23721);
return md__GT_html__delegate(text,params);
});
md__GT_html.cljs$core$IFn$_invoke$arity$variadic = md__GT_html__delegate;
return md__GT_html;
})()
;
/**
* Js accessible wrapper
* @param {...*} var_args
*/
markdown.core.mdToHtml = (function() { 
var mdToHtml__delegate = function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
};
var mdToHtml = function (var_args){
var params = null;
if (arguments.length > 0) {
  params = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return mdToHtml__delegate.call(this,params);};
mdToHtml.cljs$lang$maxFixedArity = 0;
mdToHtml.cljs$lang$applyTo = (function (arglist__23722){
var params = cljs.core.seq(arglist__23722);
return mdToHtml__delegate(params);
});
mdToHtml.cljs$core$IFn$_invoke$arity$variadic = mdToHtml__delegate;
return mdToHtml;
})()
;
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

//# sourceMappingURL=core.js.map