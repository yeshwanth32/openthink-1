// Compiled by ClojureScript 1.9.293 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__44408){
var map__44420 = p__44408;
var map__44420__$1 = ((((!((map__44420 == null)))?((((map__44420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44420.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44420):map__44420);
var replacement_transformers = cljs.core.get.call(null,map__44420__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__44420__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.call(null,map__44420__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return ((function (map__44420,map__44420__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_44422 = markdown.transformers._STAR_next_line_STAR_;
var _STAR_inhibit_separator_STAR_44423 = markdown.common._STAR_inhibit_separator_STAR_;
markdown.transformers._STAR_next_line_STAR_ = next_line;

markdown.common._STAR_inhibit_separator_STAR_ = inhibit_separator;

try{var vec__44424 = cljs.core.reduce.call(null,((function (_STAR_next_line_STAR_44422,_STAR_inhibit_separator_STAR_44423,map__44420,map__44420__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (p__44427,transformer){
var vec__44428 = p__44427;
var text = cljs.core.nth.call(null,vec__44428,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__44428,(1),null);
return transformer.call(null,text,state__$1);
});})(_STAR_next_line_STAR_44422,_STAR_inhibit_separator_STAR_44423,map__44420,map__44420__$1,replacement_transformers,custom_transformers,inhibit_separator))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__6543__auto__ = replacement_transformers;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__44424,(0),null);
var new_state = cljs.core.nth.call(null,vec__44424,(1),null);
html.append(text);

return new_state;
}finally {markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR_44423;

markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_44422;
}});
;})(map__44420,map__44420__$1,replacement_transformers,custom_transformers,inhibit_separator))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__7658__auto__ = [];
var len__7651__auto___44433 = arguments.length;
var i__7652__auto___44434 = (0);
while(true){
if((i__7652__auto___44434 < len__7651__auto___44433)){
args__7658__auto__.push((arguments[i__7652__auto___44434]));

var G__44435 = (i__7652__auto___44434 + (1));
i__7652__auto___44434 = G__44435;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq44431){
var G__44432 = cljs.core.first.call(null,seq44431);
var seq44431__$1 = cljs.core.next.call(null,seq44431);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__44432,seq44431__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__44440_44444 = cljs.core.seq.call(null,lines);
var chunk__44441_44445 = null;
var count__44442_44446 = (0);
var i__44443_44447 = (0);
while(true){
if((i__44443_44447 < count__44442_44446)){
var line_44448 = cljs.core._nth.call(null,chunk__44441_44445,i__44443_44447);
markdown.links.parse_reference_link.call(null,line_44448,references);

var G__44449 = seq__44440_44444;
var G__44450 = chunk__44441_44445;
var G__44451 = count__44442_44446;
var G__44452 = (i__44443_44447 + (1));
seq__44440_44444 = G__44449;
chunk__44441_44445 = G__44450;
count__44442_44446 = G__44451;
i__44443_44447 = G__44452;
continue;
} else {
var temp__4657__auto___44453 = cljs.core.seq.call(null,seq__44440_44444);
if(temp__4657__auto___44453){
var seq__44440_44454__$1 = temp__4657__auto___44453;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44440_44454__$1)){
var c__7357__auto___44455 = cljs.core.chunk_first.call(null,seq__44440_44454__$1);
var G__44456 = cljs.core.chunk_rest.call(null,seq__44440_44454__$1);
var G__44457 = c__7357__auto___44455;
var G__44458 = cljs.core.count.call(null,c__7357__auto___44455);
var G__44459 = (0);
seq__44440_44444 = G__44456;
chunk__44441_44445 = G__44457;
count__44442_44446 = G__44458;
i__44443_44447 = G__44459;
continue;
} else {
var line_44460 = cljs.core.first.call(null,seq__44440_44454__$1);
markdown.links.parse_reference_link.call(null,line_44460,references);

var G__44461 = cljs.core.next.call(null,seq__44440_44454__$1);
var G__44462 = null;
var G__44463 = (0);
var G__44464 = (0);
seq__44440_44444 = G__44461;
chunk__44441_44445 = G__44462;
count__44442_44446 = G__44463;
i__44443_44447 = G__44464;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__44469_44473 = cljs.core.seq.call(null,lines);
var chunk__44470_44474 = null;
var count__44471_44475 = (0);
var i__44472_44476 = (0);
while(true){
if((i__44472_44476 < count__44471_44475)){
var line_44477 = cljs.core._nth.call(null,chunk__44470_44474,i__44472_44476);
markdown.links.parse_footnote_link.call(null,line_44477,footnotes);

var G__44478 = seq__44469_44473;
var G__44479 = chunk__44470_44474;
var G__44480 = count__44471_44475;
var G__44481 = (i__44472_44476 + (1));
seq__44469_44473 = G__44478;
chunk__44470_44474 = G__44479;
count__44471_44475 = G__44480;
i__44472_44476 = G__44481;
continue;
} else {
var temp__4657__auto___44482 = cljs.core.seq.call(null,seq__44469_44473);
if(temp__4657__auto___44482){
var seq__44469_44483__$1 = temp__4657__auto___44482;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44469_44483__$1)){
var c__7357__auto___44484 = cljs.core.chunk_first.call(null,seq__44469_44483__$1);
var G__44485 = cljs.core.chunk_rest.call(null,seq__44469_44483__$1);
var G__44486 = c__7357__auto___44484;
var G__44487 = cljs.core.count.call(null,c__7357__auto___44484);
var G__44488 = (0);
seq__44469_44473 = G__44485;
chunk__44470_44474 = G__44486;
count__44471_44475 = G__44487;
i__44472_44476 = G__44488;
continue;
} else {
var line_44489 = cljs.core.first.call(null,seq__44469_44483__$1);
markdown.links.parse_footnote_link.call(null,line_44489,footnotes);

var G__44490 = cljs.core.next.call(null,seq__44469_44483__$1);
var G__44491 = null;
var G__44492 = (0);
var G__44493 = (0);
seq__44469_44473 = G__44490;
chunk__44470_44474 = G__44491;
count__44471_44475 = G__44492;
i__44472_44476 = G__44493;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__44498 = cljs.core.split_with.call(null,(function (p1__44494_SHARP_){
return cljs.core.not_empty.call(null,p1__44494_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__44498,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__44498,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_44516 = markdown.common._STAR_substring_STAR_;
var formatter44517 = markdown.transformers.formatter;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_44516,formatter44517){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_44516,formatter44517))
;

markdown.transformers.formatter = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str(text),cljs.core.str("\n")].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__44518 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__44518,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__44518,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__44524_44531 = lines__$1;
var vec__44525_44532 = G__44524_44531;
var seq__44526_44533 = cljs.core.seq.call(null,vec__44525_44532);
var first__44527_44534 = cljs.core.first.call(null,seq__44526_44533);
var seq__44526_44535__$1 = cljs.core.next.call(null,seq__44526_44533);
var line_44536 = first__44527_44534;
var more_44537 = seq__44526_44535__$1;
var state_44538 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__44524_44539__$1 = G__44524_44531;
var state_44540__$1 = state_44538;
while(true){
var vec__44528_44541 = G__44524_44539__$1;
var seq__44529_44542 = cljs.core.seq.call(null,vec__44528_44541);
var first__44530_44543 = cljs.core.first.call(null,seq__44529_44542);
var seq__44529_44544__$1 = cljs.core.next.call(null,seq__44529_44542);
var line_44545__$1 = first__44530_44543;
var more_44546__$1 = seq__44529_44544__$1;
var state_44547__$2 = state_44540__$1;
var state_44548__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_44547__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_44547__$2),cljs.core.first.call(null,more_44546__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_44547__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_44547__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_44546__$1))){
var G__44549 = more_44546__$1;
var G__44550 = cljs.core.assoc.call(null,transformer.call(null,html,line_44545__$1,cljs.core.first.call(null,more_44546__$1),state_44548__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_44545__$1));
G__44524_44539__$1 = G__44549;
state_44540__$1 = G__44550;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_44548__$3))),line_44545__$1,"",cljs.core.assoc.call(null,state_44548__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers.formatter = formatter44517;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_44516;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__7658__auto__ = [];
var len__7651__auto___44553 = arguments.length;
var i__7652__auto___44554 = (0);
while(true){
if((i__7652__auto___44554 < len__7651__auto___44553)){
args__7658__auto__.push((arguments[i__7652__auto___44554]));

var G__44555 = (i__7652__auto___44554 + (1));
i__7652__auto___44554 = G__44555;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_.call(null,text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq44551){
var G__44552 = cljs.core.first.call(null,seq44551);
var seq44551__$1 = cljs.core.next.call(null,seq44551);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__44552,seq44551__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__7658__auto__ = [];
var len__7651__auto___44558 = arguments.length;
var i__7652__auto___44559 = (0);
while(true){
if((i__7652__auto___44559 < len__7651__auto___44558)){
args__7658__auto__.push((arguments[i__7652__auto___44559]));

var G__44560 = (i__7652__auto___44559 + (1));
i__7652__auto___44559 = G__44560;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_.call(null,text,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq44556){
var G__44557 = cljs.core.first.call(null,seq44556);
var seq44556__$1 = cljs.core.next.call(null,seq44556);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__44557,seq44556__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__7658__auto__ = [];
var len__7651__auto___44562 = arguments.length;
var i__7652__auto___44563 = (0);
while(true){
if((i__7652__auto___44563 < len__7651__auto___44562)){
args__7658__auto__.push((arguments[i__7652__auto___44563]));

var G__44564 = (i__7652__auto___44563 + (1));
i__7652__auto___44563 = G__44564;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((0) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__7659__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq44561){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44561));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__7658__auto__ = [];
var len__7651__auto___44566 = arguments.length;
var i__7652__auto___44567 = (0);
while(true){
if((i__7652__auto___44567 < len__7651__auto___44566)){
args__7658__auto__.push((arguments[i__7652__auto___44567]));

var G__44568 = (i__7652__auto___44567 + (1));
i__7652__auto___44567 = G__44568;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((0) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__7659__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq44565){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44565));
});


//# sourceMappingURL=core.js.map