// Compiled by ClojureScript 0.0-2511
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){
return (function() { 
var G__23824__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__23823 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__23823,(0),null);
var body = cljs.core.nthnext.call(null,vec__23823,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__23824 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__23824__delegate.call(this,args);};
G__23824.cljs$lang$maxFixedArity = 0;
G__23824.cljs$lang$applyTo = (function (arglist__23825){
var args = cljs.core.seq(arglist__23825);
return G__23824__delegate(args);
});
G__23824.cljs$core$IFn$_invoke$arity$variadic = G__23824__delegate;
return G__23824;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4394__auto__ = (function iter__23830(s__23831){
return (new cljs.core.LazySeq(null,(function (){
var s__23831__$1 = s__23831;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23831__$1);
if(temp__4126__auto__){
var s__23831__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23831__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__23831__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__23833 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__23832 = (0);
while(true){
if((i__23832 < size__4393__auto__)){
var args = cljs.core._nth.call(null,c__4392__auto__,i__23832);
cljs.core.chunk_append.call(null,b__23833,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__23834 = (i__23832 + (1));
i__23832 = G__23834;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23833),iter__23830.call(null,cljs.core.chunk_rest.call(null,s__23831__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23833),null);
}
} else {
var args = cljs.core.first.call(null,s__23831__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__23830.call(null,cljs.core.rest.call(null,s__23831__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4394__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){
return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){
var iter__4394__auto__ = (function iter__23839(s__23840){
return (new cljs.core.LazySeq(null,(function (){
var s__23840__$1 = s__23840;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23840__$1);
if(temp__4126__auto__){
var s__23840__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23840__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__23840__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__23842 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__23841 = (0);
while(true){
if((i__23841 < size__4393__auto__)){
var style = cljs.core._nth.call(null,c__4392__auto__,i__23841);
cljs.core.chunk_append.call(null,b__23842,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__23843 = (i__23841 + (1));
i__23841 = G__23843;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23842),iter__23839.call(null,cljs.core.chunk_rest.call(null,s__23840__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23842),null);
}
} else {
var style = cljs.core.first.call(null,s__23840__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__23839.call(null,cljs.core.rest.call(null,s__23840__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4394__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;
if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__23844){
var styles = cljs.core.seq(arglist__23844);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to23845 = (function() { 
var link_to23845__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to23845 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return link_to23845__delegate.call(this,url,content);};
link_to23845.cljs$lang$maxFixedArity = 1;
link_to23845.cljs$lang$applyTo = (function (arglist__23846){
var url = cljs.core.first(arglist__23846);
var content = cljs.core.rest(arglist__23846);
return link_to23845__delegate(url,content);
});
link_to23845.cljs$core$IFn$_invoke$arity$variadic = link_to23845__delegate;
return link_to23845;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to23845);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to23847 = (function() { 
var mail_to23847__delegate = function (e_mail,p__23848){
var vec__23850 = p__23848;
var content = cljs.core.nth.call(null,vec__23850,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3638__auto__ = content;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to23847 = function (e_mail,var_args){
var p__23848 = null;
if (arguments.length > 1) {
  p__23848 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return mail_to23847__delegate.call(this,e_mail,p__23848);};
mail_to23847.cljs$lang$maxFixedArity = 1;
mail_to23847.cljs$lang$applyTo = (function (arglist__23851){
var e_mail = cljs.core.first(arglist__23851);
var p__23848 = cljs.core.rest(arglist__23851);
return mail_to23847__delegate(e_mail,p__23848);
});
mail_to23847.cljs$core$IFn$_invoke$arity$variadic = mail_to23847__delegate;
return mail_to23847;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to23847);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list23852 = (function unordered_list23852(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4394__auto__ = (function iter__23857(s__23858){
return (new cljs.core.LazySeq(null,(function (){
var s__23858__$1 = s__23858;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23858__$1);
if(temp__4126__auto__){
var s__23858__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23858__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__23858__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__23860 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__23859 = (0);
while(true){
if((i__23859 < size__4393__auto__)){
var x = cljs.core._nth.call(null,c__4392__auto__,i__23859);
cljs.core.chunk_append.call(null,b__23860,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23861 = (i__23859 + (1));
i__23859 = G__23861;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23860),iter__23857.call(null,cljs.core.chunk_rest.call(null,s__23858__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23860),null);
}
} else {
var x = cljs.core.first.call(null,s__23858__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__23857.call(null,cljs.core.rest.call(null,s__23858__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4394__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list23852);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list23862 = (function ordered_list23862(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4394__auto__ = (function iter__23867(s__23868){
return (new cljs.core.LazySeq(null,(function (){
var s__23868__$1 = s__23868;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23868__$1);
if(temp__4126__auto__){
var s__23868__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23868__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__23868__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__23870 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__23869 = (0);
while(true){
if((i__23869 < size__4393__auto__)){
var x = cljs.core._nth.call(null,c__4392__auto__,i__23869);
cljs.core.chunk_append.call(null,b__23870,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23871 = (i__23869 + (1));
i__23869 = G__23871;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23870),iter__23867.call(null,cljs.core.chunk_rest.call(null,s__23868__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23870),null);
}
} else {
var x = cljs.core.first.call(null,s__23868__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__23867.call(null,cljs.core.rest.call(null,s__23868__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4394__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list23862);
/**
* Create an image element.
*/
sablono.core.image23872 = (function() {
var image23872 = null;
var image23872__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image23872__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image23872 = function(src,alt){
switch(arguments.length){
case 1:
return image23872__1.call(this,src);
case 2:
return image23872__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image23872.cljs$core$IFn$_invoke$arity$1 = image23872__1;
image23872.cljs$core$IFn$_invoke$arity$2 = image23872__2;
return image23872;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image23872);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__23873_SHARP_,p2__23874_SHARP_){
return [cljs.core.str(p1__23873_SHARP_),cljs.core.str("["),cljs.core.str(p2__23874_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__23875_SHARP_,p2__23876_SHARP_){
return [cljs.core.str(p1__23875_SHARP_),cljs.core.str("-"),cljs.core.str(p2__23876_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field23877 = (function() {
var color_field23877 = null;
var color_field23877__1 = (function (name__5167__auto__){
return color_field23877.call(null,name__5167__auto__,null);
});
var color_field23877__2 = (function (name__5167__auto__,value__5168__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__5167__auto__,value__5168__auto__);
});
color_field23877 = function(name__5167__auto__,value__5168__auto__){
switch(arguments.length){
case 1:
return color_field23877__1.call(this,name__5167__auto__);
case 2:
return color_field23877__2.call(this,name__5167__auto__,value__5168__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field23877.cljs$core$IFn$_invoke$arity$1 = color_field23877__1;
color_field23877.cljs$core$IFn$_invoke$arity$2 = color_field23877__2;
return color_field23877;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field23877);

/**
* Creates a date input field.
*/
sablono.core.date_field23878 = (function() {
var date_field23878 = null;
var date_field23878__1 = (function (name__5167__auto__){
return date_field23878.call(null,name__5167__auto__,null);
});
var date_field23878__2 = (function (name__5167__auto__,value__5168__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__5167__auto__,value__5168__auto__);
});
date_field23878 = function(name__5167__auto__,value__5168__auto__){
switch(arguments.length){
case 1:
return date_field23878__1.call(this,name__5167__auto__);
case 2:
return date_field23878__2.call(this,name__5167__auto__,value__5168__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field23878.cljs$core$IFn$_invoke$arity$1 = date_field23878__1;
date_field23878.cljs$core$IFn$_invoke$arity$2 = date_field23878__2;
return date_field23878;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field23878);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field23879 = (function() {
var datetime_field23879 = null;
var datetime_field23879__1 = (function (name__5167__auto__){
return datetime_field23879.call(null,name__5167__auto__,null);
});
var datetime_field23879__2 = (function (name__5167__auto__,value__5168__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__5167__auto__,value__5168__auto__);
});
datetime_field23879 = function(name__5167__auto__,value__5168__auto__){
switch(arguments.length){
case 1:
return datetime_field23879__1.call(this,name__5167__auto__);
case 2:
return datetime_field23879__2.call(this,name__5167__auto__,value__5168__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field23879.cljs$core$IFn$_invoke$arity$1 = datetime_field23879__1;
datetime_field23879.cljs$core$IFn$_invoke$arity$2 = datetime_field23879__2;
return datetime_field23879;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field23879);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field23880 = (function() {
var datetime_local_field23880 = null;
var datetime_local_field23880__1 = (function (name__5167__auto__){
return datetime_local_field23880.call(null,name__5167__auto__,null);
});
var datetime_local_field23880__2 = (function (name__5167__auto__,value__5168__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__5167__auto__,value__5168__auto__);
});
datetime_local_field23880 = function(name__5167__auto__,value__5168__auto__){
switch(arguments.length){
case 1:
return datetime_local_field23880__1.call(this,name__5167__auto__);
case 2:
return datetime_local_field23880__2.call(this,name__5167__auto__,value__5168__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field23880.cljs$core$IFn$_invoke$arity$1 = datetime_local_field23880__1;
datetime_local_field23880.cljs$core$IFn$_invoke$arity$2 = datetime_local_field23880__2;
return datetime_local_field23880;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field23880);

/**
* Creates a email input field.
*/
sablono.core.email_field23881 = (function() {
var email_field23881 = null;
var email_field23881__1 = (function (name__5167__auto__){
return email_field23881.call(null,name__5167__auto__,null);
});
var email_field23881__2 = (function (name__5167__auto__,value__5168__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__5167__auto__,value__5168__auto__);
});
email_field23881 = function(name__5167__auto__,value__5168__auto__){
switch(arguments.length){
case 1:
return email_field23881__1.call(this,name__5167__auto__);
case 2:
return email_field23881__2.call(this,name__5167__auto__,value__5168__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field23881.cljs$core$IFn$_invoke$arity$1 = email_field23881__1;
email_field23881.cljs$core$IFn$_invoke$arity$2 = email_field23881__2;
return email_field23881;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field23881);

/**
* Creates a file input field.
*/
sablono.core.file_field23882 = (function() {
var file_field23882 = null;
var file_field23882__1 = (function (name__5167__auto__){
return file_field23882.call(null,name__5167__auto__,null);
});
var file_field23882__2 = (function (name__5167__auto__,value__5168__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__5167__auto__,value__5168__auto__);
});
file_field23882 = function(name__5167__auto__,value__5168__auto__){
switch(arguments.length){
case 1:
return file_field23882__1.call(this,name__5167__auto__);
case 2:
return file_field23882__2.call(this,name__5167__auto__,value__5168__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field23882.cljs$core$IFn$_invoke$arity$1 = file_field23882__1;
file_field23882.cljs$core$IFn$_invoke$arity$2 = file_field23882__2;
return file_field23882;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field23882);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field23883 = (function() {
var hidden_field23883 = null;
var hidden_field23883__1 = (function (name__5167__auto__){
return hidden_field23883.call(null,name__5167__auto__,null);
});
var hidden_field23883__2 = (function (name__5167__auto__,value__5168__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__5167__auto__,value__5168__auto__);
});
hidden_field23883 = function(name__5167__auto__,value__5168__auto__){
switch(arguments.length){
case 1:
return hidden_field23883__1.call(this,name__5167__auto__);
case 2:
return hidden_field23883__2.call(this,name__5167__auto__,value__5168__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field23883.cljs$core$IFn$_invoke$arity$1 = hidden_field23883__1;
hidden_field23883.cljs$core$IFn$_invoke$arity$2 = hidden_field23883__2;
return hidden_field23883;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field23883);

/**
* Creates a month input field.
*/
sablono.core.month_field23884 = (function() {
var month_field23884 = null;
var month_field23884__1 = (function (name__5167__auto__){
return month_field23884.call(null,name__5167__auto__,null);
});
var month_field23884__2 = (function (name__5167__auto__,value__5168__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__5167__auto__,value__5168__auto__);
});
month_field23884 = function(name__5167__auto__,value__5168__auto__){
switch(arguments.length){
case 1:
return month_field23884__1.call(this,name__5167__auto__);
case 2:
return month_field23884__2.call(this,name__5167__auto__,value__5168__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field23884.cljs$core$IFn$_invoke$arity$1 = month_field23884__1;
month_field23884.cljs$core$IFn$_invoke$arity$2 = month_field23884__2;
return month_field23884;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field23884);

/**
* Creates a number input field.
*/
sablono.core.number_field23885 = (function() {
var number_field23885 = null;
var number_field23885__1 = (function (name__5167__auto__){
return number_field23885.call(null,name__5167__auto__,null);
});
var number_field23885__2 = (function (name__5167__auto__,value__5168__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__5167__auto__,value__5168__auto__);
});
number_field23885 = function(name__5167__auto__,value__5168__auto__){
switch(arguments.length){
case 1:
return number_field23885__1.call(this,name__5167__auto__);
case 2:
return number_field23885__2.call(this,name__5167__auto__,value__5168__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field23885.cljs$core$IFn$_invoke$arity$1 = number_field23885__1;
number_field23885.cljs$core$IFn$_invoke$arity$2 = number_field23885__2;
return number_field23885;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field23885);

/**
* Creates a password input field.
*/
sablono.core.password_field23886 = (function() {
var password_field23886 = null;
var password_field23886__1 = (function (name__5167__auto__){
return password_field23886.call(null,name__5167__auto__,null);
});
var password_field23886__2 = (function (name__5167__auto__,value__5168__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__5167__auto__,value__5168__auto__);
});
password_field23886 = function(name__5167__auto__,value__5168__auto__){
switch(arguments.length){
case 1:
return password_field23886__1.call(this,name__5167__auto__);
case 2:
return password_field23886__2.call(this,name__5167__auto__,value__5168__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field23886.cljs$core$IFn$_invoke$arity$1 = password_field23886__1;
password_field23886.cljs$core$IFn$_invoke$arity$2 = password_field23886__2;
return password_field23886;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field23886);

/**
* Creates a range input field.
*/
sablono.core.range_field23887 = (function() {
var range_field23887 = null;
var range_field23887__1 = (function (name__5167__auto__){
return range_field23887.call(null,name__5167__auto__,null);
});
var range_field23887__2 = (function (name__5167__auto__,value__5168__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__5167__auto__,value__5168__auto__);
});
range_field23887 = function(name__5167__auto__,value__5168__auto__){
switch(arguments.length){
case 1:
return range_field23887__1.call(this,name__5167__auto__);
case 2:
return range_field23887__2.call(this,name__5167__auto__,value__5168__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field23887.cljs$core$IFn$_invoke$arity$1 = range_field23887__1;
range_field23887.cljs$core$IFn$_invoke$arity$2 = range_field23887__2;
return range_field23887;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field23887);

/**
* Creates a search input field.
*/
sablono.core.search_field23888 = (function() {
var search_field23888 = null;
var search_field23888__1 = (function (name__5167__auto__){
return search_field23888.call(null,name__5167__auto__,null);
});
var search_field23888__2 = (function (name__5167__auto__,value__5168__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__5167__auto__,value__5168__auto__);
});
search_field23888 = function(name__5167__auto__,value__5168__auto__){
switch(arguments.length){
case 1:
return search_field23888__1.call(this,name__5167__auto__);
case 2:
return search_field23888__2.call(this,name__5167__auto__,value__5168__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field23888.cljs$core$IFn$_invoke$arity$1 = search_field23888__1;
search_field23888.cljs$core$IFn$_invoke$arity$2 = search_field23888__2;
return search_field23888;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field23888);

/**
* Creates a tel input field.
*/
sablono.core.tel_field23889 = (function() {
var tel_field23889 = null;
var tel_field23889__1 = (function (name__5167__auto__){
return tel_field23889.call(null,name__5167__auto__,null);
});
var tel_field23889__2 = (function (name__5167__auto__,value__5168__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__5167__auto__,value__5168__auto__);
});
tel_field23889 = function(name__5167__auto__,value__5168__auto__){
switch(arguments.length){
case 1:
return tel_field23889__1.call(this,name__5167__auto__);
case 2:
return tel_field23889__2.call(this,name__5167__auto__,value__5168__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field23889.cljs$core$IFn$_invoke$arity$1 = tel_field23889__1;
tel_field23889.cljs$core$IFn$_invoke$arity$2 = tel_field23889__2;
return tel_field23889;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field23889);

/**
* Creates a text input field.
*/
sablono.core.text_field23890 = (function() {
var text_field23890 = null;
var text_field23890__1 = (function (name__5167__auto__){
return text_field23890.call(null,name__5167__auto__,null);
});
var text_field23890__2 = (function (name__5167__auto__,value__5168__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__5167__auto__,value__5168__auto__);
});
text_field23890 = function(name__5167__auto__,value__5168__auto__){
switch(arguments.length){
case 1:
return text_field23890__1.call(this,name__5167__auto__);
case 2:
return text_field23890__2.call(this,name__5167__auto__,value__5168__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field23890.cljs$core$IFn$_invoke$arity$1 = text_field23890__1;
text_field23890.cljs$core$IFn$_invoke$arity$2 = text_field23890__2;
return text_field23890;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field23890);

/**
* Creates a time input field.
*/
sablono.core.time_field23891 = (function() {
var time_field23891 = null;
var time_field23891__1 = (function (name__5167__auto__){
return time_field23891.call(null,name__5167__auto__,null);
});
var time_field23891__2 = (function (name__5167__auto__,value__5168__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__5167__auto__,value__5168__auto__);
});
time_field23891 = function(name__5167__auto__,value__5168__auto__){
switch(arguments.length){
case 1:
return time_field23891__1.call(this,name__5167__auto__);
case 2:
return time_field23891__2.call(this,name__5167__auto__,value__5168__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field23891.cljs$core$IFn$_invoke$arity$1 = time_field23891__1;
time_field23891.cljs$core$IFn$_invoke$arity$2 = time_field23891__2;
return time_field23891;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field23891);

/**
* Creates a url input field.
*/
sablono.core.url_field23892 = (function() {
var url_field23892 = null;
var url_field23892__1 = (function (name__5167__auto__){
return url_field23892.call(null,name__5167__auto__,null);
});
var url_field23892__2 = (function (name__5167__auto__,value__5168__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__5167__auto__,value__5168__auto__);
});
url_field23892 = function(name__5167__auto__,value__5168__auto__){
switch(arguments.length){
case 1:
return url_field23892__1.call(this,name__5167__auto__);
case 2:
return url_field23892__2.call(this,name__5167__auto__,value__5168__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field23892.cljs$core$IFn$_invoke$arity$1 = url_field23892__1;
url_field23892.cljs$core$IFn$_invoke$arity$2 = url_field23892__2;
return url_field23892;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field23892);

/**
* Creates a week input field.
*/
sablono.core.week_field23893 = (function() {
var week_field23893 = null;
var week_field23893__1 = (function (name__5167__auto__){
return week_field23893.call(null,name__5167__auto__,null);
});
var week_field23893__2 = (function (name__5167__auto__,value__5168__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__5167__auto__,value__5168__auto__);
});
week_field23893 = function(name__5167__auto__,value__5168__auto__){
switch(arguments.length){
case 1:
return week_field23893__1.call(this,name__5167__auto__);
case 2:
return week_field23893__2.call(this,name__5167__auto__,value__5168__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field23893.cljs$core$IFn$_invoke$arity$1 = week_field23893__1;
week_field23893.cljs$core$IFn$_invoke$arity$2 = week_field23893__2;
return week_field23893;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field23893);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box23894 = (function() {
var check_box23894 = null;
var check_box23894__1 = (function (name){
return check_box23894.call(null,name,null);
});
var check_box23894__2 = (function (name,checked_QMARK_){
return check_box23894.call(null,name,checked_QMARK_,"true");
});
var check_box23894__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box23894 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box23894__1.call(this,name);
case 2:
return check_box23894__2.call(this,name,checked_QMARK_);
case 3:
return check_box23894__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box23894.cljs$core$IFn$_invoke$arity$1 = check_box23894__1;
check_box23894.cljs$core$IFn$_invoke$arity$2 = check_box23894__2;
check_box23894.cljs$core$IFn$_invoke$arity$3 = check_box23894__3;
return check_box23894;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box23894);
/**
* Creates a radio button.
*/
sablono.core.radio_button23895 = (function() {
var radio_button23895 = null;
var radio_button23895__1 = (function (group){
return radio_button23895.call(null,group,null);
});
var radio_button23895__2 = (function (group,checked_QMARK_){
return radio_button23895.call(null,group,checked_QMARK_,"true");
});
var radio_button23895__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button23895 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button23895__1.call(this,group);
case 2:
return radio_button23895__2.call(this,group,checked_QMARK_);
case 3:
return radio_button23895__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button23895.cljs$core$IFn$_invoke$arity$1 = radio_button23895__1;
radio_button23895.cljs$core$IFn$_invoke$arity$2 = radio_button23895__2;
radio_button23895.cljs$core$IFn$_invoke$arity$3 = radio_button23895__3;
return radio_button23895;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button23895);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options23896 = (function() {
var select_options23896 = null;
var select_options23896__1 = (function (coll){
return select_options23896.call(null,coll,null);
});
var select_options23896__2 = (function (coll,selected){
var iter__4394__auto__ = (function iter__23905(s__23906){
return (new cljs.core.LazySeq(null,(function (){
var s__23906__$1 = s__23906;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23906__$1);
if(temp__4126__auto__){
var s__23906__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23906__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__23906__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__23908 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__23907 = (0);
while(true){
if((i__23907 < size__4393__auto__)){
var x = cljs.core._nth.call(null,c__4392__auto__,i__23907);
cljs.core.chunk_append.call(null,b__23908,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__23911 = x;
var text = cljs.core.nth.call(null,vec__23911,(0),null);
var val = cljs.core.nth.call(null,vec__23911,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__23911,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options23896.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__23913 = (i__23907 + (1));
i__23907 = G__23913;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23908),iter__23905.call(null,cljs.core.chunk_rest.call(null,s__23906__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23908),null);
}
} else {
var x = cljs.core.first.call(null,s__23906__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__23912 = x;
var text = cljs.core.nth.call(null,vec__23912,(0),null);
var val = cljs.core.nth.call(null,vec__23912,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__23912,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options23896.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__23905.call(null,cljs.core.rest.call(null,s__23906__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4394__auto__.call(null,coll);
});
select_options23896 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options23896__1.call(this,coll);
case 2:
return select_options23896__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options23896.cljs$core$IFn$_invoke$arity$1 = select_options23896__1;
select_options23896.cljs$core$IFn$_invoke$arity$2 = select_options23896__2;
return select_options23896;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options23896);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down23914 = (function() {
var drop_down23914 = null;
var drop_down23914__2 = (function (name,options){
return drop_down23914.call(null,name,options,null);
});
var drop_down23914__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down23914 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down23914__2.call(this,name,options);
case 3:
return drop_down23914__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down23914.cljs$core$IFn$_invoke$arity$2 = drop_down23914__2;
drop_down23914.cljs$core$IFn$_invoke$arity$3 = drop_down23914__3;
return drop_down23914;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down23914);
/**
* Creates a text area element.
*/
sablono.core.text_area23915 = (function() {
var text_area23915 = null;
var text_area23915__1 = (function (name){
return text_area23915.call(null,name,null);
});
var text_area23915__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area23915 = function(name,value){
switch(arguments.length){
case 1:
return text_area23915__1.call(this,name);
case 2:
return text_area23915__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area23915.cljs$core$IFn$_invoke$arity$1 = text_area23915__1;
text_area23915.cljs$core$IFn$_invoke$arity$2 = text_area23915__2;
return text_area23915;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area23915);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label23916 = (function label23916(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label23916);
/**
* Creates a submit button.
*/
sablono.core.submit_button23917 = (function submit_button23917(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button23917);
/**
* Creates a form reset button.
*/
sablono.core.reset_button23918 = (function reset_button23918(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button23918);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to23919 = (function() { 
var form_to23919__delegate = function (p__23920,body){
var vec__23922 = p__23920;
var method = cljs.core.nth.call(null,vec__23922,(0),null);
var action = cljs.core.nth.call(null,vec__23922,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to23919 = function (p__23920,var_args){
var body = null;
if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return form_to23919__delegate.call(this,p__23920,body);};
form_to23919.cljs$lang$maxFixedArity = 1;
form_to23919.cljs$lang$applyTo = (function (arglist__23923){
var p__23920 = cljs.core.first(arglist__23923);
var body = cljs.core.rest(arglist__23923);
return form_to23919__delegate(p__23920,body);
});
form_to23919.cljs$core$IFn$_invoke$arity$variadic = form_to23919__delegate;
return form_to23919;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to23919);

//# sourceMappingURL=core.js.map