// Compiled by ClojureScript 1.9.293 {}
goog.provide('bidi.bidi');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cemerick.url');
goog.require('cljs.core.match');
/**
 * Function for creating a UUID of the appropriate type for the platform.
 * Note that this function should _only_ be used in route patterns as, at least
 * in the case of ClojureScript, it does not validate that the input string is
 * actually a valid UUID (this is handled by the route matching logic).
 */
bidi.bidi.uuid = (function bidi$bidi$uuid(s){
return (new cljs.core.UUID(s));
});

/**
 * @interface
 */
bidi.bidi.ParameterEncoding = function(){};

bidi.bidi.encode_parameter = (function bidi$bidi$encode_parameter(_){
if((!((_ == null))) && (!((_.bidi$bidi$ParameterEncoding$encode_parameter$arity$1 == null)))){
return _.bidi$bidi$ParameterEncoding$encode_parameter$arity$1(_);
} else {
var x__7206__auto__ = (((_ == null))?null:_);
var m__7207__auto__ = (bidi.bidi.encode_parameter[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,_);
} else {
var m__7207__auto____$1 = (bidi.bidi.encode_parameter["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ParameterEncoding.encode-parameter",_);
}
}
}
});

(bidi.bidi.ParameterEncoding["string"] = true);

(bidi.bidi.encode_parameter["string"] = (function (s){
return s;
}));

(bidi.bidi.ParameterEncoding["number"] = true);

(bidi.bidi.encode_parameter["number"] = (function (s){
return s;
}));

cljs.core.UUID.prototype.bidi$bidi$ParameterEncoding$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.bidi$bidi$ParameterEncoding$encode_parameter$arity$1 = (function (s){
var s__$1 = this;
return [cljs.core.str(s__$1)].join('');
});

cljs.core.Keyword.prototype.bidi$bidi$ParameterEncoding$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.bidi$bidi$ParameterEncoding$encode_parameter$arity$1 = (function (k){
var k__$1 = this;
return cemerick.url.url_encode.call(null,[cljs.core.str(cljs.core.namespace.call(null,k__$1)),cljs.core.str((cljs.core.truth_(cljs.core.namespace.call(null,k__$1))?"/":null)),cljs.core.str(cljs.core.name.call(null,k__$1))].join(''));
});

/**
 * @interface
 */
bidi.bidi.PatternSegment = function(){};

bidi.bidi.segment_regex_group = (function bidi$bidi$segment_regex_group(_){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$segment_regex_group$arity$1 == null)))){
return _.bidi$bidi$PatternSegment$segment_regex_group$arity$1(_);
} else {
var x__7206__auto__ = (((_ == null))?null:_);
var m__7207__auto__ = (bidi.bidi.segment_regex_group[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,_);
} else {
var m__7207__auto____$1 = (bidi.bidi.segment_regex_group["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PatternSegment.segment-regex-group",_);
}
}
}
});

bidi.bidi.param_key = (function bidi$bidi$param_key(_){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$param_key$arity$1 == null)))){
return _.bidi$bidi$PatternSegment$param_key$arity$1(_);
} else {
var x__7206__auto__ = (((_ == null))?null:_);
var m__7207__auto__ = (bidi.bidi.param_key[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,_);
} else {
var m__7207__auto____$1 = (bidi.bidi.param_key["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PatternSegment.param-key",_);
}
}
}
});

bidi.bidi.transform_param = (function bidi$bidi$transform_param(_){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$transform_param$arity$1 == null)))){
return _.bidi$bidi$PatternSegment$transform_param$arity$1(_);
} else {
var x__7206__auto__ = (((_ == null))?null:_);
var m__7207__auto__ = (bidi.bidi.transform_param[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,_);
} else {
var m__7207__auto____$1 = (bidi.bidi.transform_param["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PatternSegment.transform-param",_);
}
}
}
});

bidi.bidi.unmatch_segment = (function bidi$bidi$unmatch_segment(_,params){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$unmatch_segment$arity$2 == null)))){
return _.bidi$bidi$PatternSegment$unmatch_segment$arity$2(_,params);
} else {
var x__7206__auto__ = (((_ == null))?null:_);
var m__7207__auto__ = (bidi.bidi.unmatch_segment[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,_,params);
} else {
var m__7207__auto____$1 = (bidi.bidi.unmatch_segment["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,_,params);
} else {
throw cljs.core.missing_protocol.call(null,"PatternSegment.unmatch-segment",_);
}
}
}
});

bidi.bidi.matches_QMARK_ = (function bidi$bidi$matches_QMARK_(_,s){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$matches_QMARK_$arity$2 == null)))){
return _.bidi$bidi$PatternSegment$matches_QMARK_$arity$2(_,s);
} else {
var x__7206__auto__ = (((_ == null))?null:_);
var m__7207__auto__ = (bidi.bidi.matches_QMARK_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,_,s);
} else {
var m__7207__auto____$1 = (bidi.bidi.matches_QMARK_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,_,s);
} else {
throw cljs.core.missing_protocol.call(null,"PatternSegment.matches?",_);
}
}
}
});

(bidi.bidi.PatternSegment["string"] = true);

(bidi.bidi.segment_regex_group["string"] = (function (this$){
return this$;
}));

(bidi.bidi.param_key["string"] = (function (_){
return null;
}));

(bidi.bidi.transform_param["string"] = (function (_){
return cljs.core.identity;
}));

(bidi.bidi.unmatch_segment["string"] = (function (this$,_){
return this$;
}));

RegExp.prototype.bidi$bidi$PatternSegment$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1["source"]);
});

RegExp.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (_){
var ___$1 = this;
return null;
});

RegExp.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.identity;
});

RegExp.prototype.bidi$bidi$PatternSegment$matches_QMARK_$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.re_matches.call(null,this$__$1,[cljs.core.str(s)].join(''));
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (this$){
var this$__$1 = this;
return bidi.bidi.segment_regex_group.call(null,cljs.core.first.call(null,this$__$1));
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (this$){
var this$__$1 = this;
var k = cljs.core.second.call(null,this$__$1);
if((k instanceof cljs.core.Keyword)){
return k;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("If a PatternSegment is represented by a vector, the second\n                               element must be the keyword associated with the pattern: "),cljs.core.str(this$__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (this$){
var this$__$1 = this;
return bidi.bidi.transform_param.call(null,cljs.core.first.call(null,this$__$1));
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$unmatch_segment$arity$2 = (function (this$,params){
var this$__$1 = this;
var k = cljs.core.second.call(null,this$__$1);
if(!((k instanceof cljs.core.Keyword))){
throw cljs.core.ex_info.call(null,[cljs.core.str("If a PatternSegment is represented by a vector, the second element\n                               must be the key associated with the pattern: "),cljs.core.str(this$__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var temp__4655__auto__ = cljs.core.get.call(null,params,k);
if(cljs.core.truth_(temp__4655__auto__)){
var v = temp__4655__auto__;
if(cljs.core.truth_(bidi.bidi.matches_QMARK_.call(null,cljs.core.first.call(null,this$__$1),v))){
return bidi.bidi.encode_parameter.call(null,v);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Parameter value of "),cljs.core.str(v),cljs.core.str(" (key "),cljs.core.str(k),cljs.core.str(") "),cljs.core.str("is not compatible with the route pattern "),cljs.core.str(this$__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("No parameter found in params for key "),cljs.core.str(k)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (_){
var ___$1 = this;
return "[A-Za-z0-9\\-\\_\\.]+";
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.identity;
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$unmatch_segment$arity$2 = (function (this$,params){
var this$__$1 = this;
var temp__4655__auto__ = this$__$1.call(null,params);
if(cljs.core.truth_(temp__4655__auto__)){
var v = temp__4655__auto__;
return bidi.bidi.encode_parameter.call(null,v);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot form URI without a value given for "),cljs.core.str(this$__$1),cljs.core.str(" parameter")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

(bidi.bidi.PatternSegment["function"] = true);

(bidi.bidi.segment_regex_group["function"] = (function (this$){
var pred__43757 = cljs.core._EQ_;
var expr__43758 = this$;
if(cljs.core.truth_(pred__43757.call(null,cljs.core.keyword,expr__43758))){
return "[A-Za-z]+[A-Za-z0-9\\*\\+\\!\\-\\_\\?\\.]*(?:%2F[A-Za-z]+[A-Za-z0-9\\*\\+\\!\\-\\_\\?\\.]*)?";
} else {
if(cljs.core.truth_(pred__43757.call(null,cljs.core.long$,expr__43758))){
return "-?\\d{1,19}";
} else {
if(cljs.core.truth_(pred__43757.call(null,bidi.bidi.uuid,expr__43758))){
return "[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}";
} else {
if(cljs.core.truth_(pred__43757.call(null,new cljs.core.Keyword(null,"otherwise","otherwise",-1127537137),expr__43758))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Unidentified function qualifier to pattern segment: "),cljs.core.str(this$)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__43758)].join('')));
}
}
}
}
}));

(bidi.bidi.transform_param["function"] = (function (this$){
var pred__43760 = cljs.core._EQ_;
var expr__43761 = this$;
if(cljs.core.truth_(pred__43760.call(null,cljs.core.keyword,expr__43761))){
return cljs.core.comp.call(null,cljs.core.keyword,cemerick.url.url_decode);
} else {
if(cljs.core.truth_(pred__43760.call(null,cljs.core.long$,expr__43761))){
return ((function (pred__43760,expr__43761){
return (function (p1__43756_SHARP_){
return Number(p1__43756_SHARP_);
});
;})(pred__43760,expr__43761))
} else {
if(cljs.core.truth_(pred__43760.call(null,bidi.bidi.uuid,expr__43761))){
return bidi.bidi.uuid;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Unrecognized function "),cljs.core.str(this$)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}
}
}));

(bidi.bidi.matches_QMARK_["function"] = (function (this$,s){
var pred__43763 = cljs.core._EQ_;
var expr__43764 = this$;
if(cljs.core.truth_(pred__43763.call(null,cljs.core.keyword,expr__43764))){
return (s instanceof cljs.core.Keyword);
} else {
if(cljs.core.truth_(pred__43763.call(null,cljs.core.long$,expr__43764))){
return cljs.core.not.call(null,isNaN(s));
} else {
if(cljs.core.truth_(pred__43763.call(null,bidi.bidi.uuid,expr__43764))){
return (s instanceof cljs.core.UUID);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__43764)].join('')));
}
}
}
}));

/**
 * @interface
 */
bidi.bidi.Pattern = function(){};

bidi.bidi.match_pattern = (function bidi$bidi$match_pattern(_,path){
if((!((_ == null))) && (!((_.bidi$bidi$Pattern$match_pattern$arity$2 == null)))){
return _.bidi$bidi$Pattern$match_pattern$arity$2(_,path);
} else {
var x__7206__auto__ = (((_ == null))?null:_);
var m__7207__auto__ = (bidi.bidi.match_pattern[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,_,path);
} else {
var m__7207__auto____$1 = (bidi.bidi.match_pattern["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,_,path);
} else {
throw cljs.core.missing_protocol.call(null,"Pattern.match-pattern",_);
}
}
}
});

bidi.bidi.unmatch_pattern = (function bidi$bidi$unmatch_pattern(_,m){
if((!((_ == null))) && (!((_.bidi$bidi$Pattern$unmatch_pattern$arity$2 == null)))){
return _.bidi$bidi$Pattern$unmatch_pattern$arity$2(_,m);
} else {
var x__7206__auto__ = (((_ == null))?null:_);
var m__7207__auto__ = (bidi.bidi.unmatch_pattern[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,_,m);
} else {
var m__7207__auto____$1 = (bidi.bidi.unmatch_pattern["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,_,m);
} else {
throw cljs.core.missing_protocol.call(null,"Pattern.unmatch-pattern",_);
}
}
}
});


/**
 * @interface
 */
bidi.bidi.Matched = function(){};

bidi.bidi.resolve_handler = (function bidi$bidi$resolve_handler(_,m){
if((!((_ == null))) && (!((_.bidi$bidi$Matched$resolve_handler$arity$2 == null)))){
return _.bidi$bidi$Matched$resolve_handler$arity$2(_,m);
} else {
var x__7206__auto__ = (((_ == null))?null:_);
var m__7207__auto__ = (bidi.bidi.resolve_handler[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,_,m);
} else {
var m__7207__auto____$1 = (bidi.bidi.resolve_handler["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,_,m);
} else {
throw cljs.core.missing_protocol.call(null,"Matched.resolve-handler",_);
}
}
}
});

bidi.bidi.unresolve_handler = (function bidi$bidi$unresolve_handler(_,m){
if((!((_ == null))) && (!((_.bidi$bidi$Matched$unresolve_handler$arity$2 == null)))){
return _.bidi$bidi$Matched$unresolve_handler$arity$2(_,m);
} else {
var x__7206__auto__ = (((_ == null))?null:_);
var m__7207__auto__ = (bidi.bidi.unresolve_handler[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,_,m);
} else {
var m__7207__auto____$1 = (bidi.bidi.unresolve_handler["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,_,m);
} else {
throw cljs.core.missing_protocol.call(null,"Matched.unresolve-handler",_);
}
}
}
});

/**
 * A pair contains a pattern to match (either fully or partially) and an
 *   expression yielding a handler. The second parameter is a map
 *   containing state, including the remaining path.
 */
bidi.bidi.match_pair = (function bidi$bidi$match_pair(p__43766,env){
var vec__43770 = p__43766;
var pattern = cljs.core.nth.call(null,vec__43770,(0),null);
var matched = cljs.core.nth.call(null,vec__43770,(1),null);
var temp__4657__auto__ = bidi.bidi.match_pattern.call(null,pattern,env);
if(cljs.core.truth_(temp__4657__auto__)){
var match_result = temp__4657__auto__;
return bidi.bidi.resolve_handler.call(null,matched,cljs.core.merge.call(null,env,match_result));
} else {
return null;
}
});
/**
 * Match the beginning of the :remainder value in m. If matched, update
 *   the :remainder value in m with the path that remains after matching.
 */
bidi.bidi.match_beginning = (function bidi$bidi$match_beginning(regex_pattern,env){
var temp__4657__auto__ = cljs.core.last.call(null,cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,[cljs.core.str(regex_pattern),cljs.core.str("(.*)")].join('')),new cljs.core.Keyword(null,"remainder","remainder",1046186872).cljs$core$IFn$_invoke$arity$1(env)));
if(cljs.core.truth_(temp__4657__auto__)){
var path = temp__4657__auto__;
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"remainder","remainder",1046186872),path);
} else {
return null;
}
});
bidi.bidi.succeed = (function bidi$bidi$succeed(handler,m){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"remainder","remainder",1046186872).cljs$core$IFn$_invoke$arity$1(m),"")){
return cljs.core.merge.call(null,cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"remainder","remainder",1046186872)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
} else {
return null;
}
});
(bidi.bidi.Pattern["string"] = true);

(bidi.bidi.match_pattern["string"] = (function (this$,env){
return bidi.bidi.match_beginning.call(null,[cljs.core.str("("),cljs.core.str(bidi.bidi.segment_regex_group.call(null,this$)),cljs.core.str(")")].join(''),env);
}));

(bidi.bidi.unmatch_pattern["string"] = (function (this$,_){
return this$;
}));

RegExp.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
return bidi.bidi.match_beginning.call(null,[cljs.core.str("("),cljs.core.str(bidi.bidi.segment_regex_group.call(null,this$__$1)),cljs.core.str(")")].join(''),env);
});

(bidi.bidi.Pattern["boolean"] = true);

(bidi.bidi.match_pattern["boolean"] = (function (this$,env){
if(this$){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"remainder","remainder",1046186872),"");
} else {
return null;
}
}));

cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
var temp__4657__auto__ = (function (){var _PERCENT_ = this$__$1;
var _PERCENT___$1 = cljs.core.map.call(null,bidi.bidi.segment_regex_group,_PERCENT_);
var _PERCENT___$2 = cljs.core.map.call(null,((function (_PERCENT_,_PERCENT___$1,this$__$1){
return (function (x){
return [cljs.core.str("("),cljs.core.str(x),cljs.core.str(")")].join('');
});})(_PERCENT_,_PERCENT___$1,this$__$1))
,_PERCENT___$1);
var _PERCENT___$3 = cljs.core.reduce.call(null,cljs.core.str,_PERCENT___$2);
var _PERCENT___$4 = [cljs.core.str(_PERCENT___$3),cljs.core.str("(.*)")].join('');
var _PERCENT___$5 = cljs.core.re_pattern.call(null,_PERCENT___$4);
var _PERCENT___$6 = cljs.core.re_matches.call(null,_PERCENT___$5,new cljs.core.Keyword(null,"remainder","remainder",1046186872).cljs$core$IFn$_invoke$arity$1(env));
return cljs.core.next.call(null,_PERCENT___$6);
})();
if(temp__4657__auto__){
var groups = temp__4657__auto__;
var params = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,bidi.bidi.param_key,this$__$1),cljs.core.map.call(null,cljs.core.apply,cljs.core.map.call(null,bidi.bidi.transform_param,this$__$1),cljs.core.map.call(null,cljs.core.list,cljs.core.butlast.call(null,groups))))));
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remainder","remainder",1046186872)], null),cljs.core.last.call(null,groups)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-params","route-params",2111411055)], null),cljs.core.merge,params);
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (this$__$1){
return (function (p1__43773_SHARP_){
return bidi.bidi.unmatch_segment.call(null,p1__43773_SHARP_,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(m));
});})(this$__$1))
,this$__$1));
});

cljs.core.Keyword.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
if(cljs.core._EQ_.call(null,this$__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(env))){
return env;
} else {
return null;
}
});

cljs.core.Keyword.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (_,___$1){
var ___$2 = this;
return "";
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
if(cljs.core.every_QMARK_.call(null,((function (this$__$1){
return (function (p__43774){
var vec__43775 = p__43774;
var k = cljs.core.nth.call(null,vec__43775,(0),null);
var v = cljs.core.nth.call(null,vec__43775,(1),null);
if((cljs.core.fn_QMARK_.call(null,v)) || (cljs.core.set_QMARK_.call(null,v))){
return v.call(null,cljs.core.get.call(null,env,k));
} else {
return cljs.core._EQ_.call(null,v,cljs.core.get.call(null,env,k));

}
});})(this$__$1))
,cljs.core.seq.call(null,this$__$1))){
return env;
} else {
return null;
}
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (_,___$1){
var ___$2 = this;
return "";
});
bidi.bidi.unmatch_pair = (function bidi$bidi$unmatch_pair(v,m){
var temp__4657__auto__ = bidi.bidi.unresolve_handler.call(null,cljs.core.second.call(null,v),m);
if(cljs.core.truth_(temp__4657__auto__)){
var r = temp__4657__auto__;
return [cljs.core.str(bidi.bidi.unmatch_pattern.call(null,cljs.core.first.call(null,v),m)),cljs.core.str(r)].join('');
} else {
return null;
}
});
(bidi.bidi.Matched["string"] = true);

(bidi.bidi.unresolve_handler["string"] = (function (_,___$1){
return null;
}));

cljs.core.PersistentVector.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__43778_SHARP_){
return bidi.bidi.match_pair.call(null,p1__43778_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentVector.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__43779_SHARP_){
return bidi.bidi.unmatch_pair.call(null,p1__43779_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.List.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__43780_SHARP_){
return bidi.bidi.match_pair.call(null,p1__43780_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.List.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__43781_SHARP_){
return bidi.bidi.unmatch_pair.call(null,p1__43781_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__43782_SHARP_){
return bidi.bidi.match_pair.call(null,p1__43782_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__43783_SHARP_){
return bidi.bidi.unmatch_pair.call(null,p1__43783_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.LazySeq.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__43784_SHARP_){
return bidi.bidi.match_pair.call(null,p1__43784_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.LazySeq.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__43785_SHARP_){
return bidi.bidi.unmatch_pair.call(null,p1__43785_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.Symbol.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Symbol.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.succeed.call(null,this$__$1,m);
});

cljs.core.Symbol.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
if(cljs.core._EQ_.call(null,this$__$1,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return null;
}
});

cljs.core.Keyword.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.succeed.call(null,this$__$1,m);
});

cljs.core.Keyword.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
if(cljs.core._EQ_.call(null,this$__$1,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return null;
}
});

(bidi.bidi.Matched["function"] = true);

(bidi.bidi.resolve_handler["function"] = (function (this$,m){
return bidi.bidi.succeed.call(null,this$,m);
}));

(bidi.bidi.unresolve_handler["function"] = (function (this$,m){
if(cljs.core._EQ_.call(null,this$,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return null;
}
}));
/**
 * Given a route definition data structure and a path, return the
 *   handler, if any, that matches the path.
 */
bidi.bidi.match_route = (function bidi$bidi$match_route(var_args){
var args__7658__auto__ = [];
var len__7651__auto___43792 = arguments.length;
var i__7652__auto___43793 = (0);
while(true){
if((i__7652__auto___43793 < len__7651__auto___43792)){
args__7658__auto__.push((arguments[i__7652__auto___43793]));

var G__43794 = (i__7652__auto___43793 + (1));
i__7652__auto___43793 = G__43794;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((2) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((2)),(0),null)):null);
return bidi.bidi.match_route.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7659__auto__);
});

bidi.bidi.match_route.cljs$core$IFn$_invoke$arity$variadic = (function (route,path,p__43789){
var map__43790 = p__43789;
var map__43790__$1 = ((((!((map__43790 == null)))?((((map__43790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43790.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43790):map__43790);
var options = map__43790__$1;
return cljs.core.dissoc.call(null,bidi.bidi.match_pair.call(null,route,cljs.core.merge.call(null,options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remainder","remainder",1046186872),path,new cljs.core.Keyword(null,"route","route",329891309),route], null))),new cljs.core.Keyword(null,"route","route",329891309));
});

bidi.bidi.match_route.cljs$lang$maxFixedArity = (2);

bidi.bidi.match_route.cljs$lang$applyTo = (function (seq43786){
var G__43787 = cljs.core.first.call(null,seq43786);
var seq43786__$1 = cljs.core.next.call(null,seq43786);
var G__43788 = cljs.core.first.call(null,seq43786__$1);
var seq43786__$2 = cljs.core.next.call(null,seq43786__$1);
return bidi.bidi.match_route.cljs$core$IFn$_invoke$arity$variadic(G__43787,G__43788,seq43786__$2);
});

/**
 * Given a route definition data structure, a handler and an option map, return a
 *   path that would route to the handler. The map must contain the values to any
 *   parameters required to create the path, and extra values are silently ignored.
 */
bidi.bidi.path_for = (function bidi$bidi$path_for(var_args){
var args__7658__auto__ = [];
var len__7651__auto___43801 = arguments.length;
var i__7652__auto___43802 = (0);
while(true){
if((i__7652__auto___43802 < len__7651__auto___43801)){
args__7658__auto__.push((arguments[i__7652__auto___43802]));

var G__43803 = (i__7652__auto___43802 + (1));
i__7652__auto___43802 = G__43803;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((2) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((2)),(0),null)):null);
return bidi.bidi.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7659__auto__);
});

bidi.bidi.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,handler,p__43798){
var map__43799 = p__43798;
var map__43799__$1 = ((((!((map__43799 == null)))?((((map__43799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43799.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43799):map__43799);
var params = map__43799__$1;
if((handler == null)){
throw cljs.core.ex_info.call(null,"Cannot form URI from a nil handler",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return bidi.bidi.unmatch_pair.call(null,route,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"params","params",710516235),params], null));
});

bidi.bidi.path_for.cljs$lang$maxFixedArity = (2);

bidi.bidi.path_for.cljs$lang$applyTo = (function (seq43795){
var G__43796 = cljs.core.first.call(null,seq43795);
var seq43795__$1 = cljs.core.next.call(null,seq43795);
var G__43797 = cljs.core.first.call(null,seq43795__$1);
var seq43795__$2 = cljs.core.next.call(null,seq43795__$1);
return bidi.bidi.path_for.cljs$core$IFn$_invoke$arity$variadic(G__43796,G__43797,seq43795__$2);
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {bidi.bidi.Pattern}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.Alternates = (function (routes,__meta,__extmap,__hash){
this.routes = routes;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
bidi.bidi.Alternates.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7165__auto__,k__7166__auto__){
var self__ = this;
var this__7165__auto____$1 = this;
return cljs.core._lookup.call(null,this__7165__auto____$1,k__7166__auto__,null);
});

bidi.bidi.Alternates.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7167__auto__,k43806,else__7168__auto__){
var self__ = this;
var this__7167__auto____$1 = this;
var G__43808 = (((k43806 instanceof cljs.core.Keyword))?k43806.fqn:null);
switch (G__43808) {
case "routes":
return self__.routes;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43806,else__7168__auto__);

}
});

bidi.bidi.Alternates.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7179__auto__,writer__7180__auto__,opts__7181__auto__){
var self__ = this;
var this__7179__auto____$1 = this;
var pr_pair__7182__auto__ = ((function (this__7179__auto____$1){
return (function (keyval__7183__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7180__auto__,cljs.core.pr_writer,""," ","",opts__7181__auto__,keyval__7183__auto__);
});})(this__7179__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7180__auto__,pr_pair__7182__auto__,"#bidi.bidi.Alternates{",", ","}",opts__7181__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes],null))], null),self__.__extmap));
});

bidi.bidi.Alternates.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.Alternates.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43805){
var self__ = this;
var G__43805__$1 = this;
return (new cljs.core.RecordIter((0),G__43805__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"routes","routes",457900162)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

bidi.bidi.Alternates.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7163__auto__){
var self__ = this;
var this__7163__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.Alternates.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7159__auto__){
var self__ = this;
var this__7159__auto____$1 = this;
return (new bidi.bidi.Alternates(self__.routes,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.Alternates.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7169__auto__){
var self__ = this;
var this__7169__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

bidi.bidi.Alternates.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7160__auto__){
var self__ = this;
var this__7160__auto____$1 = this;
var h__6978__auto__ = self__.__hash;
if(!((h__6978__auto__ == null))){
return h__6978__auto__;
} else {
var h__6978__auto____$1 = cljs.core.hash_imap.call(null,this__7160__auto____$1);
self__.__hash = h__6978__auto____$1;

return h__6978__auto____$1;
}
});

bidi.bidi.Alternates.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7161__auto__,other__7162__auto__){
var self__ = this;
var this__7161__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6531__auto__ = other__7162__auto__;
if(cljs.core.truth_(and__6531__auto__)){
var and__6531__auto____$1 = (this__7161__auto____$1.constructor === other__7162__auto__.constructor);
if(and__6531__auto____$1){
return cljs.core.equiv_map.call(null,this__7161__auto____$1,other__7162__auto__);
} else {
return and__6531__auto____$1;
}
} else {
return and__6531__auto__;
}
})())){
return true;
} else {
return false;
}
});

bidi.bidi.Alternates.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7174__auto__,k__7175__auto__){
var self__ = this;
var this__7174__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"routes","routes",457900162),null], null), null),k__7175__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7174__auto____$1),self__.__meta),k__7175__auto__);
} else {
return (new bidi.bidi.Alternates(self__.routes,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7175__auto__)),null));
}
});

bidi.bidi.Alternates.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7172__auto__,k__7173__auto__,G__43805){
var self__ = this;
var this__7172__auto____$1 = this;
var pred__43809 = cljs.core.keyword_identical_QMARK_;
var expr__43810 = k__7173__auto__;
if(cljs.core.truth_(pred__43809.call(null,new cljs.core.Keyword(null,"routes","routes",457900162),expr__43810))){
return (new bidi.bidi.Alternates(G__43805,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.Alternates(self__.routes,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7173__auto__,G__43805),null));
}
});

bidi.bidi.Alternates.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7177__auto__){
var self__ = this;
var this__7177__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes],null))], null),self__.__extmap));
});

bidi.bidi.Alternates.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7164__auto__,G__43805){
var self__ = this;
var this__7164__auto____$1 = this;
return (new bidi.bidi.Alternates(self__.routes,G__43805,self__.__extmap,self__.__hash));
});

bidi.bidi.Alternates.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7170__auto__,entry__7171__auto__){
var self__ = this;
var this__7170__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7171__auto__)){
return cljs.core._assoc.call(null,this__7170__auto____$1,cljs.core._nth.call(null,entry__7171__auto__,(0)),cljs.core._nth.call(null,entry__7171__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7170__auto____$1,entry__7171__auto__);
}
});

bidi.bidi.Alternates.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.Alternates.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__43804_SHARP_){
return bidi.bidi.match_pattern.call(null,p1__43804_SHARP_,m);
});})(this$__$1))
,self__.routes);
});

bidi.bidi.Alternates.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return bidi.bidi.unmatch_pattern.call(null,cljs.core.first.call(null,self__.routes),m);
});

bidi.bidi.Alternates.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"routes","routes",2098431689,null)], null);
});

bidi.bidi.Alternates.cljs$lang$type = true;

bidi.bidi.Alternates.cljs$lang$ctorPrSeq = (function (this__7199__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"bidi.bidi/Alternates");
});

bidi.bidi.Alternates.cljs$lang$ctorPrWriter = (function (this__7199__auto__,writer__7200__auto__){
return cljs.core._write.call(null,writer__7200__auto__,"bidi.bidi/Alternates");
});

bidi.bidi.__GT_Alternates = (function bidi$bidi$__GT_Alternates(routes){
return (new bidi.bidi.Alternates(routes,null,null,null));
});

bidi.bidi.map__GT_Alternates = (function bidi$bidi$map__GT_Alternates(G__43807){
return (new bidi.bidi.Alternates(new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(G__43807),null,cljs.core.dissoc.call(null,G__43807,new cljs.core.Keyword(null,"routes","routes",457900162)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {bidi.bidi.Matched}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.TaggedMatch = (function (name,delegate,__meta,__extmap,__hash){
this.name = name;
this.delegate = delegate;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
bidi.bidi.TaggedMatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7165__auto__,k__7166__auto__){
var self__ = this;
var this__7165__auto____$1 = this;
return cljs.core._lookup.call(null,this__7165__auto____$1,k__7166__auto__,null);
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7167__auto__,k43814,else__7168__auto__){
var self__ = this;
var this__7167__auto____$1 = this;
var G__43816 = (((k43814 instanceof cljs.core.Keyword))?k43814.fqn:null);
switch (G__43816) {
case "name":
return self__.name;

break;
case "delegate":
return self__.delegate;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43814,else__7168__auto__);

}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7179__auto__,writer__7180__auto__,opts__7181__auto__){
var self__ = this;
var this__7179__auto____$1 = this;
var pr_pair__7182__auto__ = ((function (this__7179__auto____$1){
return (function (keyval__7183__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7180__auto__,cljs.core.pr_writer,""," ","",opts__7181__auto__,keyval__7183__auto__);
});})(this__7179__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7180__auto__,pr_pair__7182__auto__,"#bidi.bidi.TaggedMatch{",", ","}",opts__7181__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"delegate","delegate",-1141883770),self__.delegate],null))], null),self__.__extmap));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.TaggedMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43813){
var self__ = this;
var G__43813__$1 = this;
return (new cljs.core.RecordIter((0),G__43813__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"delegate","delegate",-1141883770)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

bidi.bidi.TaggedMatch.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.TaggedMatch.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return bidi.bidi.resolve_handler.call(null,self__.delegate,m);
});

bidi.bidi.TaggedMatch.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
if((new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m) instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.call(null,self__.name,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return null;
}
} else {
return bidi.bidi.unresolve_handler.call(null,self__.delegate,m);
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7163__auto__){
var self__ = this;
var this__7163__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7159__auto__){
var self__ = this;
var this__7159__auto____$1 = this;
return (new bidi.bidi.TaggedMatch(self__.name,self__.delegate,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7169__auto__){
var self__ = this;
var this__7169__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7160__auto__){
var self__ = this;
var this__7160__auto____$1 = this;
var h__6978__auto__ = self__.__hash;
if(!((h__6978__auto__ == null))){
return h__6978__auto__;
} else {
var h__6978__auto____$1 = cljs.core.hash_imap.call(null,this__7160__auto____$1);
self__.__hash = h__6978__auto____$1;

return h__6978__auto____$1;
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7161__auto__,other__7162__auto__){
var self__ = this;
var this__7161__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6531__auto__ = other__7162__auto__;
if(cljs.core.truth_(and__6531__auto__)){
var and__6531__auto____$1 = (this__7161__auto____$1.constructor === other__7162__auto__.constructor);
if(and__6531__auto____$1){
return cljs.core.equiv_map.call(null,this__7161__auto____$1,other__7162__auto__);
} else {
return and__6531__auto____$1;
}
} else {
return and__6531__auto__;
}
})())){
return true;
} else {
return false;
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7174__auto__,k__7175__auto__){
var self__ = this;
var this__7174__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"delegate","delegate",-1141883770),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__7175__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7174__auto____$1),self__.__meta),k__7175__auto__);
} else {
return (new bidi.bidi.TaggedMatch(self__.name,self__.delegate,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7175__auto__)),null));
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7172__auto__,k__7173__auto__,G__43813){
var self__ = this;
var this__7172__auto____$1 = this;
var pred__43817 = cljs.core.keyword_identical_QMARK_;
var expr__43818 = k__7173__auto__;
if(cljs.core.truth_(pred__43817.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__43818))){
return (new bidi.bidi.TaggedMatch(G__43813,self__.delegate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43817.call(null,new cljs.core.Keyword(null,"delegate","delegate",-1141883770),expr__43818))){
return (new bidi.bidi.TaggedMatch(self__.name,G__43813,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.TaggedMatch(self__.name,self__.delegate,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7173__auto__,G__43813),null));
}
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7177__auto__){
var self__ = this;
var this__7177__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"delegate","delegate",-1141883770),self__.delegate],null))], null),self__.__extmap));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7164__auto__,G__43813){
var self__ = this;
var this__7164__auto____$1 = this;
return (new bidi.bidi.TaggedMatch(self__.name,self__.delegate,G__43813,self__.__extmap,self__.__hash));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7170__auto__,entry__7171__auto__){
var self__ = this;
var this__7170__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7171__auto__)){
return cljs.core._assoc.call(null,this__7170__auto____$1,cljs.core._nth.call(null,entry__7171__auto__,(0)),cljs.core._nth.call(null,entry__7171__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7170__auto____$1,entry__7171__auto__);
}
});

bidi.bidi.TaggedMatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"delegate","delegate",498647757,null)], null);
});

bidi.bidi.TaggedMatch.cljs$lang$type = true;

bidi.bidi.TaggedMatch.cljs$lang$ctorPrSeq = (function (this__7199__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"bidi.bidi/TaggedMatch");
});

bidi.bidi.TaggedMatch.cljs$lang$ctorPrWriter = (function (this__7199__auto__,writer__7200__auto__){
return cljs.core._write.call(null,writer__7200__auto__,"bidi.bidi/TaggedMatch");
});

bidi.bidi.__GT_TaggedMatch = (function bidi$bidi$__GT_TaggedMatch(name,delegate){
return (new bidi.bidi.TaggedMatch(name,delegate,null,null,null));
});

bidi.bidi.map__GT_TaggedMatch = (function bidi$bidi$map__GT_TaggedMatch(G__43815){
return (new bidi.bidi.TaggedMatch(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__43815),new cljs.core.Keyword(null,"delegate","delegate",-1141883770).cljs$core$IFn$_invoke$arity$1(G__43815),null,cljs.core.dissoc.call(null,G__43815,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"delegate","delegate",-1141883770)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {bidi.bidi.Pattern}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.CompiledPrefix = (function (prefix,regex,__meta,__extmap,__hash){
this.prefix = prefix;
this.regex = regex;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
bidi.bidi.CompiledPrefix.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7165__auto__,k__7166__auto__){
var self__ = this;
var this__7165__auto____$1 = this;
return cljs.core._lookup.call(null,this__7165__auto____$1,k__7166__auto__,null);
});

bidi.bidi.CompiledPrefix.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7167__auto__,k43822,else__7168__auto__){
var self__ = this;
var this__7167__auto____$1 = this;
var G__43824 = (((k43822 instanceof cljs.core.Keyword))?k43822.fqn:null);
switch (G__43824) {
case "prefix":
return self__.prefix;

break;
case "regex":
return self__.regex;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43822,else__7168__auto__);

}
});

bidi.bidi.CompiledPrefix.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7179__auto__,writer__7180__auto__,opts__7181__auto__){
var self__ = this;
var this__7179__auto____$1 = this;
var pr_pair__7182__auto__ = ((function (this__7179__auto____$1){
return (function (keyval__7183__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7180__auto__,cljs.core.pr_writer,""," ","",opts__7181__auto__,keyval__7183__auto__);
});})(this__7179__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7180__auto__,pr_pair__7182__auto__,"#bidi.bidi.CompiledPrefix{",", ","}",opts__7181__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"regex","regex",939488856),self__.regex],null))], null),self__.__extmap));
});

bidi.bidi.CompiledPrefix.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.CompiledPrefix.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43821){
var self__ = this;
var G__43821__$1 = this;
return (new cljs.core.RecordIter((0),G__43821__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"regex","regex",939488856)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

bidi.bidi.CompiledPrefix.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7163__auto__){
var self__ = this;
var this__7163__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.CompiledPrefix.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7159__auto__){
var self__ = this;
var this__7159__auto____$1 = this;
return (new bidi.bidi.CompiledPrefix(self__.prefix,self__.regex,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.CompiledPrefix.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7169__auto__){
var self__ = this;
var this__7169__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

bidi.bidi.CompiledPrefix.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7160__auto__){
var self__ = this;
var this__7160__auto____$1 = this;
var h__6978__auto__ = self__.__hash;
if(!((h__6978__auto__ == null))){
return h__6978__auto__;
} else {
var h__6978__auto____$1 = cljs.core.hash_imap.call(null,this__7160__auto____$1);
self__.__hash = h__6978__auto____$1;

return h__6978__auto____$1;
}
});

bidi.bidi.CompiledPrefix.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7161__auto__,other__7162__auto__){
var self__ = this;
var this__7161__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6531__auto__ = other__7162__auto__;
if(cljs.core.truth_(and__6531__auto__)){
var and__6531__auto____$1 = (this__7161__auto____$1.constructor === other__7162__auto__.constructor);
if(and__6531__auto____$1){
return cljs.core.equiv_map.call(null,this__7161__auto____$1,other__7162__auto__);
} else {
return and__6531__auto____$1;
}
} else {
return and__6531__auto__;
}
})())){
return true;
} else {
return false;
}
});

bidi.bidi.CompiledPrefix.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7174__auto__,k__7175__auto__){
var self__ = this;
var this__7174__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"regex","regex",939488856),null], null), null),k__7175__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7174__auto____$1),self__.__meta),k__7175__auto__);
} else {
return (new bidi.bidi.CompiledPrefix(self__.prefix,self__.regex,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7175__auto__)),null));
}
});

bidi.bidi.CompiledPrefix.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7172__auto__,k__7173__auto__,G__43821){
var self__ = this;
var this__7172__auto____$1 = this;
var pred__43825 = cljs.core.keyword_identical_QMARK_;
var expr__43826 = k__7173__auto__;
if(cljs.core.truth_(pred__43825.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__43826))){
return (new bidi.bidi.CompiledPrefix(G__43821,self__.regex,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43825.call(null,new cljs.core.Keyword(null,"regex","regex",939488856),expr__43826))){
return (new bidi.bidi.CompiledPrefix(self__.prefix,G__43821,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.CompiledPrefix(self__.prefix,self__.regex,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7173__auto__,G__43821),null));
}
}
});

bidi.bidi.CompiledPrefix.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7177__auto__){
var self__ = this;
var this__7177__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"regex","regex",939488856),self__.regex],null))], null),self__.__extmap));
});

bidi.bidi.CompiledPrefix.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7164__auto__,G__43821){
var self__ = this;
var this__7164__auto____$1 = this;
return (new bidi.bidi.CompiledPrefix(self__.prefix,self__.regex,G__43821,self__.__extmap,self__.__hash));
});

bidi.bidi.CompiledPrefix.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7170__auto__,entry__7171__auto__){
var self__ = this;
var this__7170__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7171__auto__)){
return cljs.core._assoc.call(null,this__7170__auto____$1,cljs.core._nth.call(null,entry__7171__auto__,(0)),cljs.core._nth.call(null,entry__7171__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7170__auto____$1,entry__7171__auto__);
}
});

bidi.bidi.CompiledPrefix.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.CompiledPrefix.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var self__ = this;
var this$__$1 = this;
var temp__4657__auto__ = cljs.core.last.call(null,cljs.core.re_matches.call(null,self__.regex,new cljs.core.Keyword(null,"remainder","remainder",1046186872).cljs$core$IFn$_invoke$arity$1(env)));
if(cljs.core.truth_(temp__4657__auto__)){
var path = temp__4657__auto__;
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"remainder","remainder",1046186872),path);
} else {
return null;
}
});

bidi.bidi.CompiledPrefix.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,env){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.prefix], null)], null);
});

bidi.bidi.CompiledPrefix.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"regex","regex",-1714946913,null)], null);
});

bidi.bidi.CompiledPrefix.cljs$lang$type = true;

bidi.bidi.CompiledPrefix.cljs$lang$ctorPrSeq = (function (this__7199__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"bidi.bidi/CompiledPrefix");
});

bidi.bidi.CompiledPrefix.cljs$lang$ctorPrWriter = (function (this__7199__auto__,writer__7200__auto__){
return cljs.core._write.call(null,writer__7200__auto__,"bidi.bidi/CompiledPrefix");
});

bidi.bidi.__GT_CompiledPrefix = (function bidi$bidi$__GT_CompiledPrefix(prefix,regex){
return (new bidi.bidi.CompiledPrefix(prefix,regex,null,null,null));
});

bidi.bidi.map__GT_CompiledPrefix = (function bidi$bidi$map__GT_CompiledPrefix(G__43823){
return (new bidi.bidi.CompiledPrefix(new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__43823),new cljs.core.Keyword(null,"regex","regex",939488856).cljs$core$IFn$_invoke$arity$1(G__43823),null,cljs.core.dissoc.call(null,G__43823,new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"regex","regex",939488856)),null));
});

/**
 * Improve performance by composing the regex pattern ahead of time.
 */
bidi.bidi.compile_prefix = (function bidi$bidi$compile_prefix(s){
return bidi.bidi.__GT_CompiledPrefix.call(null,s,cljs.core.re_pattern.call(null,s.replace(/\/(\W)\/g/,"\\$1")));
});
bidi.bidi.compile_route = (function bidi$bidi$compile_route(route){
return clojure.walk.postwalk.call(null,(function (p1__43829_SHARP_){
try{if((cljs.core.vector_QMARK_.call(null,p1__43829_SHARP_)) && ((cljs.core.count.call(null,p1__43829_SHARP_) === 2))){
try{var p1__43829_SHARP__0__43836 = cljs.core.nth.call(null,p1__43829_SHARP_,(0));
if(typeof p1__43829_SHARP__0__43836 === 'string'){
var s = cljs.core.nth.call(null,p1__43829_SHARP_,(0));
var h = cljs.core.nth.call(null,p1__43829_SHARP_,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bidi.bidi.compile_prefix.call(null,s),h], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43839){if((e43839 instanceof Error)){
var e__17741__auto__ = e43839;
if((e__17741__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__17741__auto__;
}
} else {
throw e43839;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43838){if((e43838 instanceof Error)){
var e__17741__auto__ = e43838;
if((e__17741__auto__ === cljs.core.match.backtrack)){
return p1__43829_SHARP_;
} else {
throw e__17741__auto__;
}
} else {
throw e43838;

}
}}),route);
});

//# sourceMappingURL=bidi.js.map