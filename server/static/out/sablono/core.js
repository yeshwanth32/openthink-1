// Compiled by ClojureScript 0.0-2371
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__17285__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__17284 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__17284,(0),null);var body = cljs.core.nthnext.call(null,vec__17284,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__17285 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__17285__delegate.call(this,args);};
G__17285.cljs$lang$maxFixedArity = 0;
G__17285.cljs$lang$applyTo = (function (arglist__17286){
var args = cljs.core.seq(arglist__17286);
return G__17285__delegate(args);
});
G__17285.cljs$core$IFn$_invoke$arity$variadic = G__17285__delegate;
return G__17285;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4377__auto__ = (function iter__17291(s__17292){return (new cljs.core.LazySeq(null,(function (){var s__17292__$1 = s__17292;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17292__$1);if(temp__4126__auto__)
{var s__17292__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17292__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__17292__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__17294 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__17293 = (0);while(true){
if((i__17293 < size__4376__auto__))
{var args = cljs.core._nth.call(null,c__4375__auto__,i__17293);cljs.core.chunk_append.call(null,b__17294,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__17295 = (i__17293 + (1));
i__17293 = G__17295;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17294),iter__17291.call(null,cljs.core.chunk_rest.call(null,s__17292__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17294),null);
}
} else
{var args = cljs.core.first.call(null,s__17292__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__17291.call(null,cljs.core.rest.call(null,s__17292__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4377__auto__ = (function iter__17300(s__17301){return (new cljs.core.LazySeq(null,(function (){var s__17301__$1 = s__17301;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17301__$1);if(temp__4126__auto__)
{var s__17301__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17301__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__17301__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__17303 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__17302 = (0);while(true){
if((i__17302 < size__4376__auto__))
{var style = cljs.core._nth.call(null,c__4375__auto__,i__17302);cljs.core.chunk_append.call(null,b__17303,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__17304 = (i__17302 + (1));
i__17302 = G__17304;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17303),iter__17300.call(null,cljs.core.chunk_rest.call(null,s__17301__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17303),null);
}
} else
{var style = cljs.core.first.call(null,s__17301__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__17300.call(null,cljs.core.rest.call(null,s__17301__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__17305){
var styles = cljs.core.seq(arglist__17305);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to17306 = (function() { 
var link_to17306__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to17306 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to17306__delegate.call(this,url,content);};
link_to17306.cljs$lang$maxFixedArity = 1;
link_to17306.cljs$lang$applyTo = (function (arglist__17307){
var url = cljs.core.first(arglist__17307);
var content = cljs.core.rest(arglist__17307);
return link_to17306__delegate(url,content);
});
link_to17306.cljs$core$IFn$_invoke$arity$variadic = link_to17306__delegate;
return link_to17306;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17306);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to17308 = (function() { 
var mail_to17308__delegate = function (e_mail,p__17309){var vec__17311 = p__17309;var content = cljs.core.nth.call(null,vec__17311,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3638__auto__ = content;if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to17308 = function (e_mail,var_args){
var p__17309 = null;if (arguments.length > 1) {
  p__17309 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to17308__delegate.call(this,e_mail,p__17309);};
mail_to17308.cljs$lang$maxFixedArity = 1;
mail_to17308.cljs$lang$applyTo = (function (arglist__17312){
var e_mail = cljs.core.first(arglist__17312);
var p__17309 = cljs.core.rest(arglist__17312);
return mail_to17308__delegate(e_mail,p__17309);
});
mail_to17308.cljs$core$IFn$_invoke$arity$variadic = mail_to17308__delegate;
return mail_to17308;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17308);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list17313 = (function unordered_list17313(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4377__auto__ = (function iter__17318(s__17319){return (new cljs.core.LazySeq(null,(function (){var s__17319__$1 = s__17319;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17319__$1);if(temp__4126__auto__)
{var s__17319__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17319__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__17319__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__17321 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__17320 = (0);while(true){
if((i__17320 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__17320);cljs.core.chunk_append.call(null,b__17321,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__17322 = (i__17320 + (1));
i__17320 = G__17322;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17321),iter__17318.call(null,cljs.core.chunk_rest.call(null,s__17319__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17321),null);
}
} else
{var x = cljs.core.first.call(null,s__17319__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__17318.call(null,cljs.core.rest.call(null,s__17319__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17313);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list17323 = (function ordered_list17323(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4377__auto__ = (function iter__17328(s__17329){return (new cljs.core.LazySeq(null,(function (){var s__17329__$1 = s__17329;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17329__$1);if(temp__4126__auto__)
{var s__17329__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17329__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__17329__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__17331 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__17330 = (0);while(true){
if((i__17330 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__17330);cljs.core.chunk_append.call(null,b__17331,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__17332 = (i__17330 + (1));
i__17330 = G__17332;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17331),iter__17328.call(null,cljs.core.chunk_rest.call(null,s__17329__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17331),null);
}
} else
{var x = cljs.core.first.call(null,s__17329__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__17328.call(null,cljs.core.rest.call(null,s__17329__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17323);
/**
* Create an image element.
*/
sablono.core.image17333 = (function() {
var image17333 = null;
var image17333__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image17333__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image17333 = function(src,alt){
switch(arguments.length){
case 1:
return image17333__1.call(this,src);
case 2:
return image17333__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image17333.cljs$core$IFn$_invoke$arity$1 = image17333__1;
image17333.cljs$core$IFn$_invoke$arity$2 = image17333__2;
return image17333;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17333);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__17334_SHARP_,p2__17335_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17334_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__17335_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__17336_SHARP_,p2__17337_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17336_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__17337_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field17338 = (function() {
var color_field17338 = null;
var color_field17338__1 = (function (name__5127__auto__){return color_field17338.call(null,name__5127__auto__,null);
});
var color_field17338__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__5127__auto__,value__5128__auto__);
});
color_field17338 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return color_field17338__1.call(this,name__5127__auto__);
case 2:
return color_field17338__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field17338.cljs$core$IFn$_invoke$arity$1 = color_field17338__1;
color_field17338.cljs$core$IFn$_invoke$arity$2 = color_field17338__2;
return color_field17338;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field17338);
/**
* Creates a date input field.
*/
sablono.core.date_field17339 = (function() {
var date_field17339 = null;
var date_field17339__1 = (function (name__5127__auto__){return date_field17339.call(null,name__5127__auto__,null);
});
var date_field17339__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__5127__auto__,value__5128__auto__);
});
date_field17339 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return date_field17339__1.call(this,name__5127__auto__);
case 2:
return date_field17339__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field17339.cljs$core$IFn$_invoke$arity$1 = date_field17339__1;
date_field17339.cljs$core$IFn$_invoke$arity$2 = date_field17339__2;
return date_field17339;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field17339);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field17340 = (function() {
var datetime_field17340 = null;
var datetime_field17340__1 = (function (name__5127__auto__){return datetime_field17340.call(null,name__5127__auto__,null);
});
var datetime_field17340__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__5127__auto__,value__5128__auto__);
});
datetime_field17340 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return datetime_field17340__1.call(this,name__5127__auto__);
case 2:
return datetime_field17340__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field17340.cljs$core$IFn$_invoke$arity$1 = datetime_field17340__1;
datetime_field17340.cljs$core$IFn$_invoke$arity$2 = datetime_field17340__2;
return datetime_field17340;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field17340);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field17341 = (function() {
var datetime_local_field17341 = null;
var datetime_local_field17341__1 = (function (name__5127__auto__){return datetime_local_field17341.call(null,name__5127__auto__,null);
});
var datetime_local_field17341__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__5127__auto__,value__5128__auto__);
});
datetime_local_field17341 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return datetime_local_field17341__1.call(this,name__5127__auto__);
case 2:
return datetime_local_field17341__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field17341.cljs$core$IFn$_invoke$arity$1 = datetime_local_field17341__1;
datetime_local_field17341.cljs$core$IFn$_invoke$arity$2 = datetime_local_field17341__2;
return datetime_local_field17341;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field17341);
/**
* Creates a email input field.
*/
sablono.core.email_field17342 = (function() {
var email_field17342 = null;
var email_field17342__1 = (function (name__5127__auto__){return email_field17342.call(null,name__5127__auto__,null);
});
var email_field17342__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__5127__auto__,value__5128__auto__);
});
email_field17342 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return email_field17342__1.call(this,name__5127__auto__);
case 2:
return email_field17342__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field17342.cljs$core$IFn$_invoke$arity$1 = email_field17342__1;
email_field17342.cljs$core$IFn$_invoke$arity$2 = email_field17342__2;
return email_field17342;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17342);
/**
* Creates a file input field.
*/
sablono.core.file_field17343 = (function() {
var file_field17343 = null;
var file_field17343__1 = (function (name__5127__auto__){return file_field17343.call(null,name__5127__auto__,null);
});
var file_field17343__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__5127__auto__,value__5128__auto__);
});
file_field17343 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return file_field17343__1.call(this,name__5127__auto__);
case 2:
return file_field17343__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field17343.cljs$core$IFn$_invoke$arity$1 = file_field17343__1;
file_field17343.cljs$core$IFn$_invoke$arity$2 = file_field17343__2;
return file_field17343;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field17343);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field17344 = (function() {
var hidden_field17344 = null;
var hidden_field17344__1 = (function (name__5127__auto__){return hidden_field17344.call(null,name__5127__auto__,null);
});
var hidden_field17344__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__5127__auto__,value__5128__auto__);
});
hidden_field17344 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return hidden_field17344__1.call(this,name__5127__auto__);
case 2:
return hidden_field17344__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field17344.cljs$core$IFn$_invoke$arity$1 = hidden_field17344__1;
hidden_field17344.cljs$core$IFn$_invoke$arity$2 = hidden_field17344__2;
return hidden_field17344;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17344);
/**
* Creates a month input field.
*/
sablono.core.month_field17345 = (function() {
var month_field17345 = null;
var month_field17345__1 = (function (name__5127__auto__){return month_field17345.call(null,name__5127__auto__,null);
});
var month_field17345__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__5127__auto__,value__5128__auto__);
});
month_field17345 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return month_field17345__1.call(this,name__5127__auto__);
case 2:
return month_field17345__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field17345.cljs$core$IFn$_invoke$arity$1 = month_field17345__1;
month_field17345.cljs$core$IFn$_invoke$arity$2 = month_field17345__2;
return month_field17345;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field17345);
/**
* Creates a number input field.
*/
sablono.core.number_field17346 = (function() {
var number_field17346 = null;
var number_field17346__1 = (function (name__5127__auto__){return number_field17346.call(null,name__5127__auto__,null);
});
var number_field17346__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__5127__auto__,value__5128__auto__);
});
number_field17346 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return number_field17346__1.call(this,name__5127__auto__);
case 2:
return number_field17346__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field17346.cljs$core$IFn$_invoke$arity$1 = number_field17346__1;
number_field17346.cljs$core$IFn$_invoke$arity$2 = number_field17346__2;
return number_field17346;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field17346);
/**
* Creates a password input field.
*/
sablono.core.password_field17347 = (function() {
var password_field17347 = null;
var password_field17347__1 = (function (name__5127__auto__){return password_field17347.call(null,name__5127__auto__,null);
});
var password_field17347__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__5127__auto__,value__5128__auto__);
});
password_field17347 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return password_field17347__1.call(this,name__5127__auto__);
case 2:
return password_field17347__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field17347.cljs$core$IFn$_invoke$arity$1 = password_field17347__1;
password_field17347.cljs$core$IFn$_invoke$arity$2 = password_field17347__2;
return password_field17347;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17347);
/**
* Creates a range input field.
*/
sablono.core.range_field17348 = (function() {
var range_field17348 = null;
var range_field17348__1 = (function (name__5127__auto__){return range_field17348.call(null,name__5127__auto__,null);
});
var range_field17348__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__5127__auto__,value__5128__auto__);
});
range_field17348 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return range_field17348__1.call(this,name__5127__auto__);
case 2:
return range_field17348__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field17348.cljs$core$IFn$_invoke$arity$1 = range_field17348__1;
range_field17348.cljs$core$IFn$_invoke$arity$2 = range_field17348__2;
return range_field17348;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field17348);
/**
* Creates a search input field.
*/
sablono.core.search_field17349 = (function() {
var search_field17349 = null;
var search_field17349__1 = (function (name__5127__auto__){return search_field17349.call(null,name__5127__auto__,null);
});
var search_field17349__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__5127__auto__,value__5128__auto__);
});
search_field17349 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return search_field17349__1.call(this,name__5127__auto__);
case 2:
return search_field17349__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field17349.cljs$core$IFn$_invoke$arity$1 = search_field17349__1;
search_field17349.cljs$core$IFn$_invoke$arity$2 = search_field17349__2;
return search_field17349;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field17349);
/**
* Creates a tel input field.
*/
sablono.core.tel_field17350 = (function() {
var tel_field17350 = null;
var tel_field17350__1 = (function (name__5127__auto__){return tel_field17350.call(null,name__5127__auto__,null);
});
var tel_field17350__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__5127__auto__,value__5128__auto__);
});
tel_field17350 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return tel_field17350__1.call(this,name__5127__auto__);
case 2:
return tel_field17350__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field17350.cljs$core$IFn$_invoke$arity$1 = tel_field17350__1;
tel_field17350.cljs$core$IFn$_invoke$arity$2 = tel_field17350__2;
return tel_field17350;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field17350);
/**
* Creates a text input field.
*/
sablono.core.text_field17351 = (function() {
var text_field17351 = null;
var text_field17351__1 = (function (name__5127__auto__){return text_field17351.call(null,name__5127__auto__,null);
});
var text_field17351__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__5127__auto__,value__5128__auto__);
});
text_field17351 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return text_field17351__1.call(this,name__5127__auto__);
case 2:
return text_field17351__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field17351.cljs$core$IFn$_invoke$arity$1 = text_field17351__1;
text_field17351.cljs$core$IFn$_invoke$arity$2 = text_field17351__2;
return text_field17351;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17351);
/**
* Creates a time input field.
*/
sablono.core.time_field17352 = (function() {
var time_field17352 = null;
var time_field17352__1 = (function (name__5127__auto__){return time_field17352.call(null,name__5127__auto__,null);
});
var time_field17352__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__5127__auto__,value__5128__auto__);
});
time_field17352 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return time_field17352__1.call(this,name__5127__auto__);
case 2:
return time_field17352__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field17352.cljs$core$IFn$_invoke$arity$1 = time_field17352__1;
time_field17352.cljs$core$IFn$_invoke$arity$2 = time_field17352__2;
return time_field17352;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field17352);
/**
* Creates a url input field.
*/
sablono.core.url_field17353 = (function() {
var url_field17353 = null;
var url_field17353__1 = (function (name__5127__auto__){return url_field17353.call(null,name__5127__auto__,null);
});
var url_field17353__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__5127__auto__,value__5128__auto__);
});
url_field17353 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return url_field17353__1.call(this,name__5127__auto__);
case 2:
return url_field17353__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field17353.cljs$core$IFn$_invoke$arity$1 = url_field17353__1;
url_field17353.cljs$core$IFn$_invoke$arity$2 = url_field17353__2;
return url_field17353;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field17353);
/**
* Creates a week input field.
*/
sablono.core.week_field17354 = (function() {
var week_field17354 = null;
var week_field17354__1 = (function (name__5127__auto__){return week_field17354.call(null,name__5127__auto__,null);
});
var week_field17354__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__5127__auto__,value__5128__auto__);
});
week_field17354 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return week_field17354__1.call(this,name__5127__auto__);
case 2:
return week_field17354__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field17354.cljs$core$IFn$_invoke$arity$1 = week_field17354__1;
week_field17354.cljs$core$IFn$_invoke$arity$2 = week_field17354__2;
return week_field17354;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field17354);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box17355 = (function() {
var check_box17355 = null;
var check_box17355__1 = (function (name){return check_box17355.call(null,name,null);
});
var check_box17355__2 = (function (name,checked_QMARK_){return check_box17355.call(null,name,checked_QMARK_,"true");
});
var check_box17355__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box17355 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box17355__1.call(this,name);
case 2:
return check_box17355__2.call(this,name,checked_QMARK_);
case 3:
return check_box17355__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box17355.cljs$core$IFn$_invoke$arity$1 = check_box17355__1;
check_box17355.cljs$core$IFn$_invoke$arity$2 = check_box17355__2;
check_box17355.cljs$core$IFn$_invoke$arity$3 = check_box17355__3;
return check_box17355;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17355);
/**
* Creates a radio button.
*/
sablono.core.radio_button17356 = (function() {
var radio_button17356 = null;
var radio_button17356__1 = (function (group){return radio_button17356.call(null,group,null);
});
var radio_button17356__2 = (function (group,checked_QMARK_){return radio_button17356.call(null,group,checked_QMARK_,"true");
});
var radio_button17356__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button17356 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button17356__1.call(this,group);
case 2:
return radio_button17356__2.call(this,group,checked_QMARK_);
case 3:
return radio_button17356__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button17356.cljs$core$IFn$_invoke$arity$1 = radio_button17356__1;
radio_button17356.cljs$core$IFn$_invoke$arity$2 = radio_button17356__2;
radio_button17356.cljs$core$IFn$_invoke$arity$3 = radio_button17356__3;
return radio_button17356;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17356);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options17357 = (function() {
var select_options17357 = null;
var select_options17357__1 = (function (coll){return select_options17357.call(null,coll,null);
});
var select_options17357__2 = (function (coll,selected){var iter__4377__auto__ = (function iter__17366(s__17367){return (new cljs.core.LazySeq(null,(function (){var s__17367__$1 = s__17367;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17367__$1);if(temp__4126__auto__)
{var s__17367__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17367__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__17367__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__17369 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__17368 = (0);while(true){
if((i__17368 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__17368);cljs.core.chunk_append.call(null,b__17369,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17372 = x;var text = cljs.core.nth.call(null,vec__17372,(0),null);var val = cljs.core.nth.call(null,vec__17372,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__17372,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options17357.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__17374 = (i__17368 + (1));
i__17368 = G__17374;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17369),iter__17366.call(null,cljs.core.chunk_rest.call(null,s__17367__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17369),null);
}
} else
{var x = cljs.core.first.call(null,s__17367__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17373 = x;var text = cljs.core.nth.call(null,vec__17373,(0),null);var val = cljs.core.nth.call(null,vec__17373,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__17373,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options17357.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__17366.call(null,cljs.core.rest.call(null,s__17367__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,coll);
});
select_options17357 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options17357__1.call(this,coll);
case 2:
return select_options17357__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options17357.cljs$core$IFn$_invoke$arity$1 = select_options17357__1;
select_options17357.cljs$core$IFn$_invoke$arity$2 = select_options17357__2;
return select_options17357;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17357);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down17375 = (function() {
var drop_down17375 = null;
var drop_down17375__2 = (function (name,options){return drop_down17375.call(null,name,options,null);
});
var drop_down17375__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down17375 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down17375__2.call(this,name,options);
case 3:
return drop_down17375__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down17375.cljs$core$IFn$_invoke$arity$2 = drop_down17375__2;
drop_down17375.cljs$core$IFn$_invoke$arity$3 = drop_down17375__3;
return drop_down17375;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17375);
/**
* Creates a text area element.
*/
sablono.core.text_area17376 = (function() {
var text_area17376 = null;
var text_area17376__1 = (function (name){return text_area17376.call(null,name,null);
});
var text_area17376__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area17376 = function(name,value){
switch(arguments.length){
case 1:
return text_area17376__1.call(this,name);
case 2:
return text_area17376__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area17376.cljs$core$IFn$_invoke$arity$1 = text_area17376__1;
text_area17376.cljs$core$IFn$_invoke$arity$2 = text_area17376__2;
return text_area17376;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17376);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label17377 = (function label17377(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17377);
/**
* Creates a submit button.
*/
sablono.core.submit_button17378 = (function submit_button17378(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17378);
/**
* Creates a form reset button.
*/
sablono.core.reset_button17379 = (function reset_button17379(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17379);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to17380 = (function() { 
var form_to17380__delegate = function (p__17381,body){var vec__17383 = p__17381;var method = cljs.core.nth.call(null,vec__17383,(0),null);var action = cljs.core.nth.call(null,vec__17383,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to17380 = function (p__17381,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to17380__delegate.call(this,p__17381,body);};
form_to17380.cljs$lang$maxFixedArity = 1;
form_to17380.cljs$lang$applyTo = (function (arglist__17384){
var p__17381 = cljs.core.first(arglist__17384);
var body = cljs.core.rest(arglist__17384);
return form_to17380__delegate(p__17381,body);
});
form_to17380.cljs$core$IFn$_invoke$arity$variadic = form_to17380__delegate;
return form_to17380;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17380);

//# sourceMappingURL=core.js.map