// Compiled by ClojureScript 1.9.293 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrManager');
goog.require('goog.Uri.QueryData');
goog.require('goog.net.EventType');
goog.require('goog.events');
goog.require('goog.structs');
goog.require('goog.json.Serializer');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');

/**
 * An abstraction for a javascript class that implements
 * Ajax calls.
 * @interface
 */
ajax.core.AjaxImpl = function(){};

/**
 * Makes an actual ajax request.  All parameters except opts
 *   are in JS format.  Should return an AjaxRequest.
 */
ajax.core._js_ajax_request = (function ajax$core$_js_ajax_request(this$,uri,method,body,headers,handler,opts){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7 == null)))){
return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7(this$,uri,method,body,headers,handler,opts);
} else {
var x__7206__auto__ = (((this$ == null))?null:this$);
var m__7207__auto__ = (ajax.core._js_ajax_request[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,this$,uri,method,body,headers,handler,opts);
} else {
var m__7207__auto____$1 = (ajax.core._js_ajax_request["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,this$,uri,method,body,headers,handler,opts);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxImpl.-js-ajax-request",this$);
}
}
}
});


/**
 * An abstraction for a running ajax request.
 * @interface
 */
ajax.core.AjaxRequest = function(){};

/**
 * Aborts a running ajax request, if possible.
 */
ajax.core._abort = (function ajax$core$_abort(this$,error_code){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxRequest$_abort$arity$2 == null)))){
return this$.ajax$core$AjaxRequest$_abort$arity$2(this$,error_code);
} else {
var x__7206__auto__ = (((this$ == null))?null:this$);
var m__7207__auto__ = (ajax.core._abort[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,this$,error_code);
} else {
var m__7207__auto____$1 = (ajax.core._abort["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,this$,error_code);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxRequest.-abort",this$);
}
}
}
});


/**
 * A marker interface for types that can be directly sent to XhrIo
 * @interface
 */
ajax.core.DirectlySubmittable = function(){};

if(typeof FormData !== 'undefined'){
FormData.prototype.ajax$core$DirectlySubmittable$ = cljs.core.PROTOCOL_SENTINEL;
} else {
}
ajax.core.submittable_QMARK_ = (function ajax$core$submittable_QMARK_(params){
var or__6543__auto__ = ((!((params == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === params.ajax$core$DirectlySubmittable$)))?true:(((!params.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,ajax.core.DirectlySubmittable,params):false)):cljs.core.native_satisfies_QMARK_.call(null,ajax.core.DirectlySubmittable,params));
if(or__6543__auto__){
return or__6543__auto__;
} else {
return typeof params === 'string';
}
});
(ajax.core.AjaxImpl["null"] = true);

(ajax.core._js_ajax_request["null"] = (function (this$,uri,method,body,headers,handler,p__37881){
var map__37882 = p__37881;
var map__37882__$1 = ((((!((map__37882 == null)))?((((map__37882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37882.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37882):map__37882);
var timeout = cljs.core.get.call(null,map__37882__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var G__37884 = (new goog.net.XhrIo());
goog.events.listen(G__37884,goog.net.EventType.COMPLETE,handler);

G__37884.setTimeoutInterval((function (){var or__6543__auto__ = timeout;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return (0);
}
})());

G__37884.send(uri,method,body,headers);

return G__37884;
}));
goog.net.XhrIo.prototype.ajax$core$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.XhrIo.prototype.ajax$core$AjaxRequest$_abort$arity$2 = (function (this$,error_code){
var this$__$1 = this;
return this$__$1.abort(error_code);
});
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__37885){
var map__37886 = p__37885;
var map__37886__$1 = ((((!((map__37886 == null)))?((((map__37886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37886.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37886):map__37886);
var id = cljs.core.get.call(null,map__37886__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.call(null,map__37886__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var priority = cljs.core.get.call(null,map__37886__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var max_retries = cljs.core.get.call(null,map__37886__$1,new cljs.core.Keyword(null,"max-retries","max-retries",-1933762121));
var this$__$1 = this;
return this$__$1.send(id,uri,method,body,headers,priority,handler,max_retries);
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.core._abort.call(null,this$,goog.net.ErrorCode.ABORT);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.read_edn = (function ajax$core$read_edn(xhrio){
return cljs.reader.read_string.call(null,xhrio.getResponseText());
});
ajax.core.edn_response_format = (function ajax$core$edn_response_format(var_args){
var args37888 = [];
var len__7651__auto___37891 = arguments.length;
var i__7652__auto___37892 = (0);
while(true){
if((i__7652__auto___37892 < len__7651__auto___37891)){
args37888.push((arguments[i__7652__auto___37892]));

var G__37893 = (i__7652__auto___37892 + (1));
i__7652__auto___37892 = G__37893;
continue;
} else {
}
break;
}

var G__37890 = args37888.length;
switch (G__37890) {
case 0:
return ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37888.length)].join('')));

}
});

ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.read_edn,new cljs.core.Keyword(null,"description","description",-1428560544),"EDN"], null);
});

ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return ajax.core.edn_response_format.call(null);
});

ajax.core.edn_response_format.cljs$lang$maxFixedArity = 1;

ajax.core.edn_request_format = (function ajax$core$edn_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),cljs.core.pr_str,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/edn"], null);
});
ajax.core.transit_content_type = "application/transit+json; charset=utf-8";
ajax.core.transit_write = (function ajax$core$transit_write(var_args){
var args37895 = [];
var len__7651__auto___37898 = arguments.length;
var i__7652__auto___37899 = (0);
while(true){
if((i__7652__auto___37899 < len__7651__auto___37898)){
args37895.push((arguments[i__7652__auto___37899]));

var G__37900 = (i__7652__auto___37899 + (1));
i__7652__auto___37899 = G__37900;
continue;
} else {
}
break;
}

var G__37897 = args37895.length;
switch (G__37897) {
case 2:
return ajax.core.transit_write.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transit_write.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37895.length)].join('')));

}
});

ajax.core.transit_write.cljs$core$IFn$_invoke$arity$2 = (function (writer,params){
return cognitect.transit.write.call(null,writer,params);
});

ajax.core.transit_write.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return (function (params){
return cognitect.transit.write.call(null,writer,params);
});
});

ajax.core.transit_write.cljs$lang$maxFixedArity = 2;

ajax.core.transit_request_format = (function ajax$core$transit_request_format(var_args){
var args37902 = [];
var len__7651__auto___37908 = arguments.length;
var i__7652__auto___37909 = (0);
while(true){
if((i__7652__auto___37909 < len__7651__auto___37908)){
args37902.push((arguments[i__7652__auto___37909]));

var G__37910 = (i__7652__auto___37909 + (1));
i__7652__auto___37909 = G__37910;
continue;
} else {
}
break;
}

var G__37904 = args37902.length;
switch (G__37904) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37902.length)].join('')));

}
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_request_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (p__37905){
var map__37906 = p__37905;
var map__37906__$1 = ((((!((map__37906 == null)))?((((map__37906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37906.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37906):map__37906);
var opts = map__37906__$1;
var type = cljs.core.get.call(null,map__37906__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var writer = cljs.core.get.call(null,map__37906__$1,new cljs.core.Keyword(null,"writer","writer",-277568236));
var writer__$1 = (function (){var or__6543__auto__ = writer;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return cognitect.transit.writer.call(null,(function (){var or__6543__auto____$1 = type;
if(cljs.core.truth_(or__6543__auto____$1)){
return or__6543__auto____$1;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
})(),opts);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.transit_write.call(null,writer__$1),new cljs.core.Keyword(null,"content-type","content-type",-508222634),ajax.core.transit_content_type], null);
});

ajax.core.transit_request_format.cljs$lang$maxFixedArity = 1;

ajax.core.transit_read = (function ajax$core$transit_read(var_args){
var args37912 = [];
var len__7651__auto___37915 = arguments.length;
var i__7652__auto___37916 = (0);
while(true){
if((i__7652__auto___37916 < len__7651__auto___37915)){
args37912.push((arguments[i__7652__auto___37916]));

var G__37917 = (i__7652__auto___37916 + (1));
i__7652__auto___37916 = G__37917;
continue;
} else {
}
break;
}

var G__37914 = args37912.length;
switch (G__37914) {
case 3:
return ajax.core.transit_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.transit_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transit_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37912.length)].join('')));

}
});

ajax.core.transit_read.cljs$core$IFn$_invoke$arity$3 = (function (reader,raw,xhrio){
var text = xhrio.getResponseText();
var data = cognitect.transit.read.call(null,reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});

ajax.core.transit_read.cljs$core$IFn$_invoke$arity$2 = (function (reader,raw){
return (function (xhrio){
var text = xhrio.getResponseText();
var data = cognitect.transit.read.call(null,reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
});

ajax.core.transit_read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return (function (raw,xhrio){
var text = xhrio.getResponseText();
var data = cognitect.transit.read.call(null,reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
});

ajax.core.transit_read.cljs$lang$maxFixedArity = 3;

ajax.core.transit_response_format = (function ajax$core$transit_response_format(var_args){
var args37919 = [];
var len__7651__auto___37925 = arguments.length;
var i__7652__auto___37926 = (0);
while(true){
if((i__7652__auto___37926 < len__7651__auto___37925)){
args37919.push((arguments[i__7652__auto___37926]));

var G__37927 = (i__7652__auto___37926 + (1));
i__7652__auto___37926 = G__37927;
continue;
} else {
}
break;
}

var G__37921 = args37919.length;
switch (G__37921) {
case 0:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37919.length)].join('')));

}
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__37922){
var map__37923 = p__37922;
var map__37923__$1 = ((((!((map__37923 == null)))?((((map__37923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37923.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37923):map__37923);
var opts = map__37923__$1;
var type = cljs.core.get.call(null,map__37923__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var reader = cljs.core.get.call(null,map__37923__$1,new cljs.core.Keyword(null,"reader","reader",169660853));
var raw = cljs.core.get.call(null,map__37923__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var reader__$1 = (function (){var or__6543__auto__ = reader;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return cognitect.transit.reader.call(null,(function (){var or__6543__auto____$1 = type;
if(cljs.core.truth_(or__6543__auto____$1)){
return or__6543__auto____$1;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
})(),opts);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.transit_read.call(null,reader__$1,raw),new cljs.core.Keyword(null,"description","description",-1428560544),"Transit"], null);
});

ajax.core.transit_response_format.cljs$lang$maxFixedArity = 1;

ajax.core.params_to_str = (function ajax$core$params_to_str(params){
if(cljs.core.truth_(params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
});
ajax.core.read_text = (function ajax$core$read_text(xhrio){
return xhrio.getResponseText();
});
ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.params_to_str,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function ajax$core$raw_response_format(var_args){
var args37929 = [];
var len__7651__auto___37932 = arguments.length;
var i__7652__auto___37933 = (0);
while(true){
if((i__7652__auto___37933 < len__7651__auto___37932)){
args37929.push((arguments[i__7652__auto___37933]));

var G__37934 = (i__7652__auto___37933 + (1));
i__7652__auto___37933 = G__37934;
continue;
} else {
}
break;
}

var G__37931 = args37929.length;
switch (G__37931) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37929.length)].join('')));

}
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.read_text,new cljs.core.Keyword(null,"description","description",-1428560544),"raw text"], null);
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return ajax.core.raw_response_format.call(null);
});

ajax.core.raw_response_format.cljs$lang$maxFixedArity = 1;

ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.write_json,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});
ajax.core.json_read = (function ajax$core$json_read(var_args){
var args37936 = [];
var len__7651__auto___37939 = arguments.length;
var i__7652__auto___37940 = (0);
while(true){
if((i__7652__auto___37940 < len__7651__auto___37939)){
args37936.push((arguments[i__7652__auto___37940]));

var G__37941 = (i__7652__auto___37940 + (1));
i__7652__auto___37940 = G__37941;
continue;
} else {
}
break;
}

var G__37938 = args37936.length;
switch (G__37938) {
case 4:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37936.length)].join('')));

}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var json = xhrio.getResponseJson(prefix);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var json = xhrio.getResponseJson(prefix);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var json = xhrio.getResponseJson(prefix);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var json = xhrio.getResponseJson(prefix);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$lang$maxFixedArity = 4;

/**
 * Returns a JSON response format.  Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should think about using this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
ajax.core.json_response_format = (function ajax$core$json_response_format(var_args){
var args37943 = [];
var len__7651__auto___37949 = arguments.length;
var i__7652__auto___37950 = (0);
while(true){
if((i__7652__auto___37950 < len__7651__auto___37949)){
args37943.push((arguments[i__7652__auto___37950]));

var G__37951 = (i__7652__auto___37950 + (1));
i__7652__auto___37950 = G__37951;
continue;
} else {
}
break;
}

var G__37945 = args37943.length;
switch (G__37945) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37943.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__37946){
var map__37947 = p__37946;
var map__37947__$1 = ((((!((map__37947 == null)))?((((map__37947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37947.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37947):map__37947);
var prefix = cljs.core.get.call(null,map__37947__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var keywords_QMARK_ = cljs.core.get.call(null,map__37947__$1,new cljs.core.Keyword(null,"keywords?","keywords?",764949733));
var raw = cljs.core.get.call(null,map__37947__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.json_read.call(null,prefix,raw,keywords_QMARK_),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join('')], null);
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;

ajax.core.get_response_format = (function ajax$core$get_response_format(format){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null);
} else {
throw (new Error([cljs.core.str("unrecognized response format: "),cljs.core.str(format)].join('')));

}
}
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__37953,xhrio){
var map__37956 = p__37953;
var map__37956__$1 = ((((!((map__37956 == null)))?((((map__37956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37956.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37956):map__37956);
var description = cljs.core.get.call(null,map__37956__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str(e.message),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),xhrio.getResponseText());
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),xhrio.getStatusText(),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.core.fail = (function ajax$core$fail(var_args){
var args__7658__auto__ = [];
var len__7651__auto___37962 = arguments.length;
var i__7652__auto___37963 = (0);
while(true){
if((i__7652__auto___37963 < len__7651__auto___37962)){
args__7658__auto__.push((arguments[i__7652__auto___37963]));

var G__37964 = (i__7652__auto___37963 + (1));
i__7652__auto___37963 = G__37964;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
});

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq37958){
var G__37959 = cljs.core.first.call(null,seq37958);
var seq37958__$1 = cljs.core.next.call(null,seq37958);
var G__37960 = cljs.core.first.call(null,seq37958__$1);
var seq37958__$2 = cljs.core.next.call(null,seq37958__$1);
var G__37961 = cljs.core.first.call(null,seq37958__$2);
var seq37958__$3 = cljs.core.next.call(null,seq37958__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__37959,G__37960,G__37961,seq37958__$3);
});

ajax.core.interpret_response = (function ajax$core$interpret_response(p__37965,response){
var map__37970 = p__37965;
var map__37970__$1 = ((((!((map__37970 == null)))?((((map__37970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37970.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37970):map__37970);
var format = map__37970__$1;
var read = cljs.core.get.call(null,map__37970__$1,new cljs.core.Keyword(null,"read","read",1140058661));
try{var xhrio = response.target;
var status = xhrio.getStatus();
var fail = cljs.core.partial.call(null,ajax.core.fail,status);
if(cljs.core._EQ_.call(null,(-1),status)){
if(cljs.core._EQ_.call(null,xhrio.getLastErrorCode(),goog.net.ErrorCode.ABORT)){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}
} else {
try{var response__$1 = read.call(null,xhrio);
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response__$1], null);
} else {
return fail.call(null,xhrio.getStatusText(),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response__$1);
}
}catch (e37973){if((e37973 instanceof Object)){
var e = e37973;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format,xhrio)], null);
} else {
throw e37973;

}
}}
}catch (e37972){if((e37972 instanceof Object)){
var e = e37972;
return ajax.core.fail.call(null,(0),e.message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e37972;

}
}});
ajax.core.no_format = (function ajax$core$no_format(xhrio){
throw (new Error("No response format was supplied."));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(uri,params){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(ajax.core.params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
ajax.core.get_request_format = (function ajax$core$get_request_format(format){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return null;

}
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else {
return method;
}
});
ajax.core.process_inputs = (function ajax$core$process_inputs(p__37974){
var map__37979 = p__37974;
var map__37979__$1 = ((((!((map__37979 == null)))?((((map__37979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37979.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37979):map__37979);
var uri = cljs.core.get.call(null,map__37979__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__37979__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__37979__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__37979__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__37979__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core._EQ_.call(null,ajax.core.normalize_method.call(null,method),"GET")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.uri_with_params.call(null,uri,params),null,headers], null);
} else {
var map__37981 = ajax.core.get_request_format.call(null,format);
var map__37981__$1 = ((((!((map__37981 == null)))?((((map__37981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37981.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37981):map__37981);
var write = cljs.core.get.call(null,map__37981__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__37981__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?write.call(null,params):(cljs.core.truth_(ajax.core.submittable_QMARK_.call(null,params))?params:(function(){throw (new Error([cljs.core.str("unrecognized request format: "),cljs.core.str(format)].join('')))})()
));
var content_type__$1 = (cljs.core.truth_(content_type)?new cljs.core.PersistentArrayMap(null, 1, ["Content-Type",content_type], null):null);
var headers__$1 = cljs.core.merge.call(null,(function (){var or__6543__auto__ = headers;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),content_type__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,body,headers__$1], null);
}
});
ajax.core.js_handler = (function ajax$core$js_handler(var_args){
var args37983 = [];
var len__7651__auto___37986 = arguments.length;
var i__7652__auto___37987 = (0);
while(true){
if((i__7652__auto___37987 < len__7651__auto___37986)){
args37983.push((arguments[i__7652__auto___37987]));

var G__37988 = (i__7652__auto___37987 + (1));
i__7652__auto___37987 = G__37988;
continue;
} else {
}
break;
}

var G__37985 = args37983.length;
switch (G__37985) {
case 3:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37983.length)].join('')));

}
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3 = (function (response_format,handler,xhrio){
var response = ajax.core.interpret_response.call(null,response_format,xhrio);
return handler.call(null,response);
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2 = (function (response_format,handler){
return (function (xhrio){
var response = ajax.core.interpret_response.call(null,response_format,xhrio);
return handler.call(null,response);
});
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1 = (function (response_format){
return (function (handler,xhrio){
var response = ajax.core.interpret_response.call(null,response_format,xhrio);
return handler.call(null,response);
});
});

ajax.core.js_handler.cljs$lang$maxFixedArity = 3;

ajax.core.base_handler = (function ajax$core$base_handler(response_format,p__37990){
var map__37993 = p__37990;
var map__37993__$1 = ((((!((map__37993 == null)))?((((map__37993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37993):map__37993);
var handler = cljs.core.get.call(null,map__37993__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.call(null,response_format,handler);
} else {
throw (new Error("No ajax handler provided."));
}
});
ajax.core.ajax_request = (function ajax$core$ajax_request(p__37995){
var map__38001 = p__37995;
var map__38001__$1 = ((((!((map__38001 == null)))?((((map__38001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38001.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38001):map__38001);
var opts = map__38001__$1;
var uri = cljs.core.get.call(null,map__38001__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__38001__$1,new cljs.core.Keyword(null,"method","method",55703592));
var response_format = cljs.core.get.call(null,map__38001__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var manager = cljs.core.get.call(null,map__38001__$1,new cljs.core.Keyword(null,"manager","manager",-818607470));
var response_format__$1 = ajax.core.get_response_format.call(null,response_format);
var method__$1 = ajax.core.normalize_method.call(null,method);
var vec__38003 = ajax.core.process_inputs.call(null,opts);
var uri__$1 = cljs.core.nth.call(null,vec__38003,(0),null);
var body = cljs.core.nth.call(null,vec__38003,(1),null);
var headers = cljs.core.nth.call(null,vec__38003,(2),null);
var handler = ajax.core.base_handler.call(null,response_format__$1,opts);
return ajax.core._js_ajax_request.call(null,manager,uri__$1,method__$1,body,cljs.core.clj__GT_js.call(null,headers),handler,opts);
});
ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json",ajax.core.json_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/edn",ajax.core.edn_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.raw_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.raw_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ajax.core.raw_response_format], null)], null);
ajax.core.detect_content_type = (function ajax$core$detect_content_type(var_args){
var args38006 = [];
var len__7651__auto___38017 = arguments.length;
var i__7652__auto___38018 = (0);
while(true){
if((i__7652__auto___38018 < len__7651__auto___38017)){
args38006.push((arguments[i__7652__auto___38018]));

var G__38019 = (i__7652__auto___38018 + (1));
i__7652__auto___38018 = G__38019;
continue;
} else {
}
break;
}

var G__38008 = args38006.length;
switch (G__38008) {
case 2:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38006.length)].join('')));

}
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,p__38009){
var vec__38010 = p__38009;
var substring = cljs.core.nth.call(null,vec__38010,(0),null);
return ((substring == null)) || ((content_type.indexOf(substring) >= (0)));
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (p__38013){
var vec__38014 = p__38013;
var substring = cljs.core.nth.call(null,vec__38014,(0),null);
return ((substring == null)) || ((content_type.indexOf(substring) >= (0)));
});
});

ajax.core.detect_content_type.cljs$lang$maxFixedArity = 2;

ajax.core.get_default_format = (function ajax$core$get_default_format(xhrio,p__38021){
var map__38024 = p__38021;
var map__38024__$1 = ((((!((map__38024 == null)))?((((map__38024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38024.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38024):map__38024);
var opts = map__38024__$1;
var defaults = cljs.core.get.call(null,map__38024__$1,new cljs.core.Keyword(null,"defaults","defaults",976027214));
var f = ajax.core.detect_content_type.call(null,(function (){var or__6543__auto__ = xhrio.getResponseHeader("Content-Type");
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return "";
}
})());
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,f,defaults))).call(null,opts);
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(var_args){
var args38026 = [];
var len__7651__auto___38029 = arguments.length;
var i__7652__auto___38030 = (0);
while(true){
if((i__7652__auto___38030 < len__7651__auto___38029)){
args38026.push((arguments[i__7652__auto___38030]));

var G__38031 = (i__7652__auto___38030 + (1));
i__7652__auto___38030 = G__38031;
continue;
} else {
}
break;
}

var G__38028 = args38026.length;
switch (G__38028) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38026.length)].join('')));

}
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (opts,xhrio){
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(ajax.core.get_default_format.call(null,xhrio,opts)).call(null,xhrio);
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return (function (xhrio){
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(ajax.core.get_default_format.call(null,xhrio,opts)).call(null,xhrio);
});
});

ajax.core.detect_response_format_read.cljs$lang$maxFixedArity = 2;

ajax.core.detect_response_format = (function ajax$core$detect_response_format(var_args){
var args38033 = [];
var len__7651__auto___38036 = arguments.length;
var i__7652__auto___38037 = (0);
while(true){
if((i__7652__auto___38037 < len__7651__auto___38036)){
args38033.push((arguments[i__7652__auto___38037]));

var G__38038 = (i__7652__auto___38037 + (1));
i__7652__auto___38037 = G__38038;
continue;
} else {
}
break;
}

var G__38035 = args38033.length;
switch (G__38035) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38033.length)].join('')));

}
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.detect_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"defaults","defaults",976027214),ajax.core.default_formats], null));
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.detect_response_format_read.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),"(from content type)"], null);
});

ajax.core.detect_response_format.cljs$lang$maxFixedArity = 1;

ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"write","write",-1857649168),format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.call(null,format_params);
} else {
var G__38041 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__38041) {
case "transit":
return ajax.core.transit_request_format.call(null,format_params);

break;
case "json":
return ajax.core.json_request_format.call(null);

break;
case "edn":
return ajax.core.edn_request_format.call(null);

break;
case "raw":
return ajax.core.url_request_format.call(null);

break;
case "url":
return ajax.core.url_request_format.call(null);

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format = (function ajax$core$keyword_response_format(format,format_params){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.call(null);
} else {
var G__38044 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__38044) {
case "transit":
return ajax.core.transit_response_format.call(null,format_params);

break;
case "json":
return ajax.core.json_response_format.call(null,format_params);

break;
case "edn":
return ajax.core.edn_response_format.call(null);

break;
case "raw":
return ajax.core.raw_response_format.call(null);

break;
case "detect":
return ajax.core.detect_response_format.call(null);

break;
default:
return null;

}

}
}
}
});
ajax.core.transform_handler = (function ajax$core$transform_handler(var_args){
var args38046 = [];
var len__7651__auto___38063 = arguments.length;
var i__7652__auto___38064 = (0);
while(true){
if((i__7652__auto___38064 < len__7651__auto___38063)){
args38046.push((arguments[i__7652__auto___38064]));

var G__38065 = (i__7652__auto___38064 + (1));
i__7652__auto___38064 = G__38065;
continue;
} else {
}
break;
}

var G__38048 = args38046.length;
switch (G__38048) {
case 2:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38046.length)].join('')));

}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2 = (function (p__38049,p__38050){
var map__38051 = p__38049;
var map__38051__$1 = ((((!((map__38051 == null)))?((((map__38051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38051.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38051):map__38051);
var handler = cljs.core.get.call(null,map__38051__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__38051__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__38051__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var vec__38052 = p__38050;
var ok = cljs.core.nth.call(null,vec__38052,(0),null);
var result = cljs.core.nth.call(null,vec__38052,(1),null);
var temp__4655__auto___38067 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4655__auto___38067)){
var h_38068 = temp__4655__auto___38067;
h_38068.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1 = (function (p__38056){
var map__38057 = p__38056;
var map__38057__$1 = ((((!((map__38057 == null)))?((((map__38057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38057.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38057):map__38057);
var handler = cljs.core.get.call(null,map__38057__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__38057__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__38057__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
return ((function (map__38057,map__38057__$1,handler,error_handler,finally$){
return (function (p__38059){
var vec__38060 = p__38059;
var ok = cljs.core.nth.call(null,vec__38060,(0),null);
var result = cljs.core.nth.call(null,vec__38060,(1),null);
var temp__4655__auto___38069 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4655__auto___38069)){
var h_38070 = temp__4655__auto___38069;
h_38070.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
;})(map__38057,map__38057__$1,handler,error_handler,finally$))
});

ajax.core.transform_handler.cljs$lang$maxFixedArity = 2;

ajax.core.transform_opts = (function ajax$core$transform_opts(p__38071){
var map__38074 = p__38071;
var map__38074__$1 = ((((!((map__38074 == null)))?((((map__38074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38074.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38074):map__38074);
var opts = map__38074__$1;
var method = cljs.core.get.call(null,map__38074__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__38074__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var response_format = cljs.core.get.call(null,map__38074__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var params = cljs.core.get.call(null,map__38074__$1,new cljs.core.Keyword(null,"params","params",710516235));

var needs_format = cljs.core.not.call(null,(function (){var or__6543__auto__ = ajax.core.submittable_QMARK_.call(null,params);
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return cljs.core._EQ_.call(null,method,"GET");
}
})());
var rf = (cljs.core.truth_((function (){var or__6543__auto__ = format;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format.call(null,format,opts):null);
return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",-195596612),ajax.core.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),rf,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.keyword_response_format.call(null,response_format,opts));
});
ajax.core.easy_ajax_request = (function ajax$core$easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request.call(null,ajax.core.transform_opts.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"method","method",55703592),method)));
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__7658__auto__ = [];
var len__7651__auto___38078 = arguments.length;
var i__7652__auto___38079 = (0);
while(true){
if((i__7652__auto___38079 < len__7651__auto___38078)){
args__7658__auto__.push((arguments[i__7652__auto___38079]));

var G__38080 = (i__7652__auto___38079 + (1));
i__7652__auto___38079 = G__38080;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__8151__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"GET",(((f__8151__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__8151__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq38076){
var G__38077 = cljs.core.first.call(null,seq38076);
var seq38076__$1 = cljs.core.next.call(null,seq38076);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__38077,seq38076__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__7658__auto__ = [];
var len__7651__auto___38083 = arguments.length;
var i__7652__auto___38084 = (0);
while(true){
if((i__7652__auto___38084 < len__7651__auto___38083)){
args__7658__auto__.push((arguments[i__7652__auto___38084]));

var G__38085 = (i__7652__auto___38084 + (1));
i__7652__auto___38084 = G__38085;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__8151__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"HEAD",(((f__8151__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__8151__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq38081){
var G__38082 = cljs.core.first.call(null,seq38081);
var seq38081__$1 = cljs.core.next.call(null,seq38081);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__38082,seq38081__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__7658__auto__ = [];
var len__7651__auto___38088 = arguments.length;
var i__7652__auto___38089 = (0);
while(true){
if((i__7652__auto___38089 < len__7651__auto___38088)){
args__7658__auto__.push((arguments[i__7652__auto___38089]));

var G__38090 = (i__7652__auto___38089 + (1));
i__7652__auto___38089 = G__38090;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__8151__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"POST",(((f__8151__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__8151__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq38086){
var G__38087 = cljs.core.first.call(null,seq38086);
var seq38086__$1 = cljs.core.next.call(null,seq38086);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__38087,seq38086__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__7658__auto__ = [];
var len__7651__auto___38093 = arguments.length;
var i__7652__auto___38094 = (0);
while(true){
if((i__7652__auto___38094 < len__7651__auto___38093)){
args__7658__auto__.push((arguments[i__7652__auto___38094]));

var G__38095 = (i__7652__auto___38094 + (1));
i__7652__auto___38094 = G__38095;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__8151__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PUT",(((f__8151__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__8151__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq38091){
var G__38092 = cljs.core.first.call(null,seq38091);
var seq38091__$1 = cljs.core.next.call(null,seq38091);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__38092,seq38091__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__7658__auto__ = [];
var len__7651__auto___38098 = arguments.length;
var i__7652__auto___38099 = (0);
while(true){
if((i__7652__auto___38099 < len__7651__auto___38098)){
args__7658__auto__.push((arguments[i__7652__auto___38099]));

var G__38100 = (i__7652__auto___38099 + (1));
i__7652__auto___38099 = G__38100;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__8151__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"DELETE",(((f__8151__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__8151__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq38096){
var G__38097 = cljs.core.first.call(null,seq38096);
var seq38096__$1 = cljs.core.next.call(null,seq38096);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__38097,seq38096__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__7658__auto__ = [];
var len__7651__auto___38103 = arguments.length;
var i__7652__auto___38104 = (0);
while(true){
if((i__7652__auto___38104 < len__7651__auto___38103)){
args__7658__auto__.push((arguments[i__7652__auto___38104]));

var G__38105 = (i__7652__auto___38104 + (1));
i__7652__auto___38104 = G__38105;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__8151__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"OPTIONS",(((f__8151__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__8151__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq38101){
var G__38102 = cljs.core.first.call(null,seq38101);
var seq38101__$1 = cljs.core.next.call(null,seq38101);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__38102,seq38101__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__7658__auto__ = [];
var len__7651__auto___38108 = arguments.length;
var i__7652__auto___38109 = (0);
while(true){
if((i__7652__auto___38109 < len__7651__auto___38108)){
args__7658__auto__.push((arguments[i__7652__auto___38109]));

var G__38110 = (i__7652__auto___38109 + (1));
i__7652__auto___38109 = G__38110;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__8151__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"TRACE",(((f__8151__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__8151__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq38106){
var G__38107 = cljs.core.first.call(null,seq38106);
var seq38106__$1 = cljs.core.next.call(null,seq38106);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__38107,seq38106__$1);
});


//# sourceMappingURL=core.js.map