// Compiled by ClojureScript 1.9.293 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__13808__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__13805 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__13806 = cljs.core.seq.call(null,vec__13805);
var first__13807 = cljs.core.first.call(null,seq__13806);
var seq__13806__$1 = cljs.core.next.call(null,seq__13806);
var tag = first__13807;
var body = seq__13806__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__13808 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13809__i = 0, G__13809__a = new Array(arguments.length -  0);
while (G__13809__i < G__13809__a.length) {G__13809__a[G__13809__i] = arguments[G__13809__i + 0]; ++G__13809__i;}
  args = new cljs.core.IndexedSeq(G__13809__a,0);
} 
return G__13808__delegate.call(this,args);};
G__13808.cljs$lang$maxFixedArity = 0;
G__13808.cljs$lang$applyTo = (function (arglist__13810){
var args = cljs.core.seq(arglist__13810);
return G__13808__delegate(args);
});
G__13808.cljs$core$IFn$_invoke$arity$variadic = G__13808__delegate;
return G__13808;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7326__auto__ = (function sablono$core$update_arglists_$_iter__13815(s__13816){
return (new cljs.core.LazySeq(null,(function (){
var s__13816__$1 = s__13816;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__13816__$1);
if(temp__4657__auto__){
var s__13816__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13816__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__13816__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__13818 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__13817 = (0);
while(true){
if((i__13817 < size__7325__auto__)){
var args = cljs.core._nth.call(null,c__7324__auto__,i__13817);
cljs.core.chunk_append.call(null,b__13818,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__13819 = (i__13817 + (1));
i__13817 = G__13819;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13818),sablono$core$update_arglists_$_iter__13815.call(null,cljs.core.chunk_rest.call(null,s__13816__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13818),null);
}
} else {
var args = cljs.core.first.call(null,s__13816__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__13815.call(null,cljs.core.rest.call(null,s__13816__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7326__auto__.call(null,arglists);
});
/**
 * Render the React `component` as an HTML string.
 */
sablono.core.render = (function sablono$core$render(component){
return React.renderComponentToString(component);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__7658__auto__ = [];
var len__7651__auto___13825 = arguments.length;
var i__7652__auto___13826 = (0);
while(true){
if((i__7652__auto___13826 < len__7651__auto___13825)){
args__7658__auto__.push((arguments[i__7652__auto___13826]));

var G__13827 = (i__7652__auto___13826 + (1));
i__7652__auto___13826 = G__13827;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((0) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7659__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7326__auto__ = (function sablono$core$iter__13821(s__13822){
return (new cljs.core.LazySeq(null,(function (){
var s__13822__$1 = s__13822;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__13822__$1);
if(temp__4657__auto__){
var s__13822__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13822__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__13822__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__13824 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__13823 = (0);
while(true){
if((i__13823 < size__7325__auto__)){
var style = cljs.core._nth.call(null,c__7324__auto__,i__13823);
cljs.core.chunk_append.call(null,b__13824,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__13828 = (i__13823 + (1));
i__13823 = G__13828;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13824),sablono$core$iter__13821.call(null,cljs.core.chunk_rest.call(null,s__13822__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13824),null);
}
} else {
var style = cljs.core.first.call(null,s__13822__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__13821.call(null,cljs.core.rest.call(null,s__13822__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7326__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq13820){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13820));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to13829 = (function sablono$core$link_to13829(var_args){
var args__7658__auto__ = [];
var len__7651__auto___13832 = arguments.length;
var i__7652__auto___13833 = (0);
while(true){
if((i__7652__auto___13833 < len__7651__auto___13832)){
args__7658__auto__.push((arguments[i__7652__auto___13833]));

var G__13834 = (i__7652__auto___13833 + (1));
i__7652__auto___13833 = G__13834;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to13829.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

sablono.core.link_to13829.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to13829.cljs$lang$maxFixedArity = (1);

sablono.core.link_to13829.cljs$lang$applyTo = (function (seq13830){
var G__13831 = cljs.core.first.call(null,seq13830);
var seq13830__$1 = cljs.core.next.call(null,seq13830);
return sablono.core.link_to13829.cljs$core$IFn$_invoke$arity$variadic(G__13831,seq13830__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to13829);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to13835 = (function sablono$core$mail_to13835(var_args){
var args__7658__auto__ = [];
var len__7651__auto___13842 = arguments.length;
var i__7652__auto___13843 = (0);
while(true){
if((i__7652__auto___13843 < len__7651__auto___13842)){
args__7658__auto__.push((arguments[i__7652__auto___13843]));

var G__13844 = (i__7652__auto___13843 + (1));
i__7652__auto___13843 = G__13844;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to13835.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

sablono.core.mail_to13835.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__13838){
var vec__13839 = p__13838;
var content = cljs.core.nth.call(null,vec__13839,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6543__auto__ = content;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to13835.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to13835.cljs$lang$applyTo = (function (seq13836){
var G__13837 = cljs.core.first.call(null,seq13836);
var seq13836__$1 = cljs.core.next.call(null,seq13836);
return sablono.core.mail_to13835.cljs$core$IFn$_invoke$arity$variadic(G__13837,seq13836__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to13835);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list13845 = (function sablono$core$unordered_list13845(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__7326__auto__ = (function sablono$core$unordered_list13845_$_iter__13850(s__13851){
return (new cljs.core.LazySeq(null,(function (){
var s__13851__$1 = s__13851;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__13851__$1);
if(temp__4657__auto__){
var s__13851__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13851__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__13851__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__13853 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__13852 = (0);
while(true){
if((i__13852 < size__7325__auto__)){
var x = cljs.core._nth.call(null,c__7324__auto__,i__13852);
cljs.core.chunk_append.call(null,b__13853,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__13854 = (i__13852 + (1));
i__13852 = G__13854;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13853),sablono$core$unordered_list13845_$_iter__13850.call(null,cljs.core.chunk_rest.call(null,s__13851__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13853),null);
}
} else {
var x = cljs.core.first.call(null,s__13851__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list13845_$_iter__13850.call(null,cljs.core.rest.call(null,s__13851__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7326__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list13845);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list13855 = (function sablono$core$ordered_list13855(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__7326__auto__ = (function sablono$core$ordered_list13855_$_iter__13860(s__13861){
return (new cljs.core.LazySeq(null,(function (){
var s__13861__$1 = s__13861;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__13861__$1);
if(temp__4657__auto__){
var s__13861__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13861__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__13861__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__13863 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__13862 = (0);
while(true){
if((i__13862 < size__7325__auto__)){
var x = cljs.core._nth.call(null,c__7324__auto__,i__13862);
cljs.core.chunk_append.call(null,b__13863,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__13864 = (i__13862 + (1));
i__13862 = G__13864;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13863),sablono$core$ordered_list13855_$_iter__13860.call(null,cljs.core.chunk_rest.call(null,s__13861__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13863),null);
}
} else {
var x = cljs.core.first.call(null,s__13861__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list13855_$_iter__13860.call(null,cljs.core.rest.call(null,s__13861__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7326__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list13855);
/**
 * Create an image element.
 */
sablono.core.image13865 = (function sablono$core$image13865(var_args){
var args13866 = [];
var len__7651__auto___13869 = arguments.length;
var i__7652__auto___13870 = (0);
while(true){
if((i__7652__auto___13870 < len__7651__auto___13869)){
args13866.push((arguments[i__7652__auto___13870]));

var G__13871 = (i__7652__auto___13870 + (1));
i__7652__auto___13870 = G__13871;
continue;
} else {
}
break;
}

var G__13868 = args13866.length;
switch (G__13868) {
case 1:
return sablono.core.image13865.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image13865.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13866.length)].join('')));

}
});

sablono.core.image13865.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image13865.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image13865.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image13865);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__13873_SHARP_,p2__13874_SHARP_){
return [cljs.core.str(p1__13873_SHARP_),cljs.core.str("["),cljs.core.str(p2__13874_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__13875_SHARP_,p2__13876_SHARP_){
return [cljs.core.str(p1__13875_SHARP_),cljs.core.str("-"),cljs.core.str(p2__13876_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field13877 = (function sablono$core$color_field13877(var_args){
var args13878 = [];
var len__7651__auto___13945 = arguments.length;
var i__7652__auto___13946 = (0);
while(true){
if((i__7652__auto___13946 < len__7651__auto___13945)){
args13878.push((arguments[i__7652__auto___13946]));

var G__13947 = (i__7652__auto___13946 + (1));
i__7652__auto___13946 = G__13947;
continue;
} else {
}
break;
}

var G__13880 = args13878.length;
switch (G__13880) {
case 1:
return sablono.core.color_field13877.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field13877.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13878.length)].join('')));

}
});

sablono.core.color_field13877.cljs$core$IFn$_invoke$arity$1 = (function (name__13722__auto__){
return sablono.core.color_field13877.call(null,name__13722__auto__,null);
});

sablono.core.color_field13877.cljs$core$IFn$_invoke$arity$2 = (function (name__13722__auto__,value__13723__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__13722__auto__,value__13723__auto__);
});

sablono.core.color_field13877.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field13877);

/**
 * Creates a date input field.
 */
sablono.core.date_field13881 = (function sablono$core$date_field13881(var_args){
var args13882 = [];
var len__7651__auto___13949 = arguments.length;
var i__7652__auto___13950 = (0);
while(true){
if((i__7652__auto___13950 < len__7651__auto___13949)){
args13882.push((arguments[i__7652__auto___13950]));

var G__13951 = (i__7652__auto___13950 + (1));
i__7652__auto___13950 = G__13951;
continue;
} else {
}
break;
}

var G__13884 = args13882.length;
switch (G__13884) {
case 1:
return sablono.core.date_field13881.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field13881.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13882.length)].join('')));

}
});

sablono.core.date_field13881.cljs$core$IFn$_invoke$arity$1 = (function (name__13722__auto__){
return sablono.core.date_field13881.call(null,name__13722__auto__,null);
});

sablono.core.date_field13881.cljs$core$IFn$_invoke$arity$2 = (function (name__13722__auto__,value__13723__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__13722__auto__,value__13723__auto__);
});

sablono.core.date_field13881.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field13881);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field13885 = (function sablono$core$datetime_field13885(var_args){
var args13886 = [];
var len__7651__auto___13953 = arguments.length;
var i__7652__auto___13954 = (0);
while(true){
if((i__7652__auto___13954 < len__7651__auto___13953)){
args13886.push((arguments[i__7652__auto___13954]));

var G__13955 = (i__7652__auto___13954 + (1));
i__7652__auto___13954 = G__13955;
continue;
} else {
}
break;
}

var G__13888 = args13886.length;
switch (G__13888) {
case 1:
return sablono.core.datetime_field13885.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field13885.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13886.length)].join('')));

}
});

sablono.core.datetime_field13885.cljs$core$IFn$_invoke$arity$1 = (function (name__13722__auto__){
return sablono.core.datetime_field13885.call(null,name__13722__auto__,null);
});

sablono.core.datetime_field13885.cljs$core$IFn$_invoke$arity$2 = (function (name__13722__auto__,value__13723__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__13722__auto__,value__13723__auto__);
});

sablono.core.datetime_field13885.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field13885);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field13889 = (function sablono$core$datetime_local_field13889(var_args){
var args13890 = [];
var len__7651__auto___13957 = arguments.length;
var i__7652__auto___13958 = (0);
while(true){
if((i__7652__auto___13958 < len__7651__auto___13957)){
args13890.push((arguments[i__7652__auto___13958]));

var G__13959 = (i__7652__auto___13958 + (1));
i__7652__auto___13958 = G__13959;
continue;
} else {
}
break;
}

var G__13892 = args13890.length;
switch (G__13892) {
case 1:
return sablono.core.datetime_local_field13889.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field13889.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13890.length)].join('')));

}
});

sablono.core.datetime_local_field13889.cljs$core$IFn$_invoke$arity$1 = (function (name__13722__auto__){
return sablono.core.datetime_local_field13889.call(null,name__13722__auto__,null);
});

sablono.core.datetime_local_field13889.cljs$core$IFn$_invoke$arity$2 = (function (name__13722__auto__,value__13723__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__13722__auto__,value__13723__auto__);
});

sablono.core.datetime_local_field13889.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field13889);

/**
 * Creates a email input field.
 */
sablono.core.email_field13893 = (function sablono$core$email_field13893(var_args){
var args13894 = [];
var len__7651__auto___13961 = arguments.length;
var i__7652__auto___13962 = (0);
while(true){
if((i__7652__auto___13962 < len__7651__auto___13961)){
args13894.push((arguments[i__7652__auto___13962]));

var G__13963 = (i__7652__auto___13962 + (1));
i__7652__auto___13962 = G__13963;
continue;
} else {
}
break;
}

var G__13896 = args13894.length;
switch (G__13896) {
case 1:
return sablono.core.email_field13893.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field13893.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13894.length)].join('')));

}
});

sablono.core.email_field13893.cljs$core$IFn$_invoke$arity$1 = (function (name__13722__auto__){
return sablono.core.email_field13893.call(null,name__13722__auto__,null);
});

sablono.core.email_field13893.cljs$core$IFn$_invoke$arity$2 = (function (name__13722__auto__,value__13723__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__13722__auto__,value__13723__auto__);
});

sablono.core.email_field13893.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field13893);

/**
 * Creates a file input field.
 */
sablono.core.file_field13897 = (function sablono$core$file_field13897(var_args){
var args13898 = [];
var len__7651__auto___13965 = arguments.length;
var i__7652__auto___13966 = (0);
while(true){
if((i__7652__auto___13966 < len__7651__auto___13965)){
args13898.push((arguments[i__7652__auto___13966]));

var G__13967 = (i__7652__auto___13966 + (1));
i__7652__auto___13966 = G__13967;
continue;
} else {
}
break;
}

var G__13900 = args13898.length;
switch (G__13900) {
case 1:
return sablono.core.file_field13897.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field13897.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13898.length)].join('')));

}
});

sablono.core.file_field13897.cljs$core$IFn$_invoke$arity$1 = (function (name__13722__auto__){
return sablono.core.file_field13897.call(null,name__13722__auto__,null);
});

sablono.core.file_field13897.cljs$core$IFn$_invoke$arity$2 = (function (name__13722__auto__,value__13723__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__13722__auto__,value__13723__auto__);
});

sablono.core.file_field13897.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field13897);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field13901 = (function sablono$core$hidden_field13901(var_args){
var args13902 = [];
var len__7651__auto___13969 = arguments.length;
var i__7652__auto___13970 = (0);
while(true){
if((i__7652__auto___13970 < len__7651__auto___13969)){
args13902.push((arguments[i__7652__auto___13970]));

var G__13971 = (i__7652__auto___13970 + (1));
i__7652__auto___13970 = G__13971;
continue;
} else {
}
break;
}

var G__13904 = args13902.length;
switch (G__13904) {
case 1:
return sablono.core.hidden_field13901.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field13901.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13902.length)].join('')));

}
});

sablono.core.hidden_field13901.cljs$core$IFn$_invoke$arity$1 = (function (name__13722__auto__){
return sablono.core.hidden_field13901.call(null,name__13722__auto__,null);
});

sablono.core.hidden_field13901.cljs$core$IFn$_invoke$arity$2 = (function (name__13722__auto__,value__13723__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__13722__auto__,value__13723__auto__);
});

sablono.core.hidden_field13901.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field13901);

/**
 * Creates a month input field.
 */
sablono.core.month_field13905 = (function sablono$core$month_field13905(var_args){
var args13906 = [];
var len__7651__auto___13973 = arguments.length;
var i__7652__auto___13974 = (0);
while(true){
if((i__7652__auto___13974 < len__7651__auto___13973)){
args13906.push((arguments[i__7652__auto___13974]));

var G__13975 = (i__7652__auto___13974 + (1));
i__7652__auto___13974 = G__13975;
continue;
} else {
}
break;
}

var G__13908 = args13906.length;
switch (G__13908) {
case 1:
return sablono.core.month_field13905.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field13905.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13906.length)].join('')));

}
});

sablono.core.month_field13905.cljs$core$IFn$_invoke$arity$1 = (function (name__13722__auto__){
return sablono.core.month_field13905.call(null,name__13722__auto__,null);
});

sablono.core.month_field13905.cljs$core$IFn$_invoke$arity$2 = (function (name__13722__auto__,value__13723__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__13722__auto__,value__13723__auto__);
});

sablono.core.month_field13905.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field13905);

/**
 * Creates a number input field.
 */
sablono.core.number_field13909 = (function sablono$core$number_field13909(var_args){
var args13910 = [];
var len__7651__auto___13977 = arguments.length;
var i__7652__auto___13978 = (0);
while(true){
if((i__7652__auto___13978 < len__7651__auto___13977)){
args13910.push((arguments[i__7652__auto___13978]));

var G__13979 = (i__7652__auto___13978 + (1));
i__7652__auto___13978 = G__13979;
continue;
} else {
}
break;
}

var G__13912 = args13910.length;
switch (G__13912) {
case 1:
return sablono.core.number_field13909.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field13909.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13910.length)].join('')));

}
});

sablono.core.number_field13909.cljs$core$IFn$_invoke$arity$1 = (function (name__13722__auto__){
return sablono.core.number_field13909.call(null,name__13722__auto__,null);
});

sablono.core.number_field13909.cljs$core$IFn$_invoke$arity$2 = (function (name__13722__auto__,value__13723__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__13722__auto__,value__13723__auto__);
});

sablono.core.number_field13909.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field13909);

/**
 * Creates a password input field.
 */
sablono.core.password_field13913 = (function sablono$core$password_field13913(var_args){
var args13914 = [];
var len__7651__auto___13981 = arguments.length;
var i__7652__auto___13982 = (0);
while(true){
if((i__7652__auto___13982 < len__7651__auto___13981)){
args13914.push((arguments[i__7652__auto___13982]));

var G__13983 = (i__7652__auto___13982 + (1));
i__7652__auto___13982 = G__13983;
continue;
} else {
}
break;
}

var G__13916 = args13914.length;
switch (G__13916) {
case 1:
return sablono.core.password_field13913.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field13913.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13914.length)].join('')));

}
});

sablono.core.password_field13913.cljs$core$IFn$_invoke$arity$1 = (function (name__13722__auto__){
return sablono.core.password_field13913.call(null,name__13722__auto__,null);
});

sablono.core.password_field13913.cljs$core$IFn$_invoke$arity$2 = (function (name__13722__auto__,value__13723__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__13722__auto__,value__13723__auto__);
});

sablono.core.password_field13913.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field13913);

/**
 * Creates a range input field.
 */
sablono.core.range_field13917 = (function sablono$core$range_field13917(var_args){
var args13918 = [];
var len__7651__auto___13985 = arguments.length;
var i__7652__auto___13986 = (0);
while(true){
if((i__7652__auto___13986 < len__7651__auto___13985)){
args13918.push((arguments[i__7652__auto___13986]));

var G__13987 = (i__7652__auto___13986 + (1));
i__7652__auto___13986 = G__13987;
continue;
} else {
}
break;
}

var G__13920 = args13918.length;
switch (G__13920) {
case 1:
return sablono.core.range_field13917.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field13917.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13918.length)].join('')));

}
});

sablono.core.range_field13917.cljs$core$IFn$_invoke$arity$1 = (function (name__13722__auto__){
return sablono.core.range_field13917.call(null,name__13722__auto__,null);
});

sablono.core.range_field13917.cljs$core$IFn$_invoke$arity$2 = (function (name__13722__auto__,value__13723__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__13722__auto__,value__13723__auto__);
});

sablono.core.range_field13917.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field13917);

/**
 * Creates a search input field.
 */
sablono.core.search_field13921 = (function sablono$core$search_field13921(var_args){
var args13922 = [];
var len__7651__auto___13989 = arguments.length;
var i__7652__auto___13990 = (0);
while(true){
if((i__7652__auto___13990 < len__7651__auto___13989)){
args13922.push((arguments[i__7652__auto___13990]));

var G__13991 = (i__7652__auto___13990 + (1));
i__7652__auto___13990 = G__13991;
continue;
} else {
}
break;
}

var G__13924 = args13922.length;
switch (G__13924) {
case 1:
return sablono.core.search_field13921.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field13921.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13922.length)].join('')));

}
});

sablono.core.search_field13921.cljs$core$IFn$_invoke$arity$1 = (function (name__13722__auto__){
return sablono.core.search_field13921.call(null,name__13722__auto__,null);
});

sablono.core.search_field13921.cljs$core$IFn$_invoke$arity$2 = (function (name__13722__auto__,value__13723__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__13722__auto__,value__13723__auto__);
});

sablono.core.search_field13921.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field13921);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field13925 = (function sablono$core$tel_field13925(var_args){
var args13926 = [];
var len__7651__auto___13993 = arguments.length;
var i__7652__auto___13994 = (0);
while(true){
if((i__7652__auto___13994 < len__7651__auto___13993)){
args13926.push((arguments[i__7652__auto___13994]));

var G__13995 = (i__7652__auto___13994 + (1));
i__7652__auto___13994 = G__13995;
continue;
} else {
}
break;
}

var G__13928 = args13926.length;
switch (G__13928) {
case 1:
return sablono.core.tel_field13925.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field13925.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13926.length)].join('')));

}
});

sablono.core.tel_field13925.cljs$core$IFn$_invoke$arity$1 = (function (name__13722__auto__){
return sablono.core.tel_field13925.call(null,name__13722__auto__,null);
});

sablono.core.tel_field13925.cljs$core$IFn$_invoke$arity$2 = (function (name__13722__auto__,value__13723__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__13722__auto__,value__13723__auto__);
});

sablono.core.tel_field13925.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field13925);

/**
 * Creates a text input field.
 */
sablono.core.text_field13929 = (function sablono$core$text_field13929(var_args){
var args13930 = [];
var len__7651__auto___13997 = arguments.length;
var i__7652__auto___13998 = (0);
while(true){
if((i__7652__auto___13998 < len__7651__auto___13997)){
args13930.push((arguments[i__7652__auto___13998]));

var G__13999 = (i__7652__auto___13998 + (1));
i__7652__auto___13998 = G__13999;
continue;
} else {
}
break;
}

var G__13932 = args13930.length;
switch (G__13932) {
case 1:
return sablono.core.text_field13929.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field13929.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13930.length)].join('')));

}
});

sablono.core.text_field13929.cljs$core$IFn$_invoke$arity$1 = (function (name__13722__auto__){
return sablono.core.text_field13929.call(null,name__13722__auto__,null);
});

sablono.core.text_field13929.cljs$core$IFn$_invoke$arity$2 = (function (name__13722__auto__,value__13723__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__13722__auto__,value__13723__auto__);
});

sablono.core.text_field13929.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field13929);

/**
 * Creates a time input field.
 */
sablono.core.time_field13933 = (function sablono$core$time_field13933(var_args){
var args13934 = [];
var len__7651__auto___14001 = arguments.length;
var i__7652__auto___14002 = (0);
while(true){
if((i__7652__auto___14002 < len__7651__auto___14001)){
args13934.push((arguments[i__7652__auto___14002]));

var G__14003 = (i__7652__auto___14002 + (1));
i__7652__auto___14002 = G__14003;
continue;
} else {
}
break;
}

var G__13936 = args13934.length;
switch (G__13936) {
case 1:
return sablono.core.time_field13933.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field13933.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13934.length)].join('')));

}
});

sablono.core.time_field13933.cljs$core$IFn$_invoke$arity$1 = (function (name__13722__auto__){
return sablono.core.time_field13933.call(null,name__13722__auto__,null);
});

sablono.core.time_field13933.cljs$core$IFn$_invoke$arity$2 = (function (name__13722__auto__,value__13723__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__13722__auto__,value__13723__auto__);
});

sablono.core.time_field13933.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field13933);

/**
 * Creates a url input field.
 */
sablono.core.url_field13937 = (function sablono$core$url_field13937(var_args){
var args13938 = [];
var len__7651__auto___14005 = arguments.length;
var i__7652__auto___14006 = (0);
while(true){
if((i__7652__auto___14006 < len__7651__auto___14005)){
args13938.push((arguments[i__7652__auto___14006]));

var G__14007 = (i__7652__auto___14006 + (1));
i__7652__auto___14006 = G__14007;
continue;
} else {
}
break;
}

var G__13940 = args13938.length;
switch (G__13940) {
case 1:
return sablono.core.url_field13937.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field13937.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13938.length)].join('')));

}
});

sablono.core.url_field13937.cljs$core$IFn$_invoke$arity$1 = (function (name__13722__auto__){
return sablono.core.url_field13937.call(null,name__13722__auto__,null);
});

sablono.core.url_field13937.cljs$core$IFn$_invoke$arity$2 = (function (name__13722__auto__,value__13723__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__13722__auto__,value__13723__auto__);
});

sablono.core.url_field13937.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field13937);

/**
 * Creates a week input field.
 */
sablono.core.week_field13941 = (function sablono$core$week_field13941(var_args){
var args13942 = [];
var len__7651__auto___14009 = arguments.length;
var i__7652__auto___14010 = (0);
while(true){
if((i__7652__auto___14010 < len__7651__auto___14009)){
args13942.push((arguments[i__7652__auto___14010]));

var G__14011 = (i__7652__auto___14010 + (1));
i__7652__auto___14010 = G__14011;
continue;
} else {
}
break;
}

var G__13944 = args13942.length;
switch (G__13944) {
case 1:
return sablono.core.week_field13941.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field13941.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13942.length)].join('')));

}
});

sablono.core.week_field13941.cljs$core$IFn$_invoke$arity$1 = (function (name__13722__auto__){
return sablono.core.week_field13941.call(null,name__13722__auto__,null);
});

sablono.core.week_field13941.cljs$core$IFn$_invoke$arity$2 = (function (name__13722__auto__,value__13723__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__13722__auto__,value__13723__auto__);
});

sablono.core.week_field13941.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field13941);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box14013 = (function sablono$core$check_box14013(var_args){
var args14014 = [];
var len__7651__auto___14017 = arguments.length;
var i__7652__auto___14018 = (0);
while(true){
if((i__7652__auto___14018 < len__7651__auto___14017)){
args14014.push((arguments[i__7652__auto___14018]));

var G__14019 = (i__7652__auto___14018 + (1));
i__7652__auto___14018 = G__14019;
continue;
} else {
}
break;
}

var G__14016 = args14014.length;
switch (G__14016) {
case 1:
return sablono.core.check_box14013.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box14013.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box14013.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14014.length)].join('')));

}
});

sablono.core.check_box14013.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box14013.call(null,name,null);
});

sablono.core.check_box14013.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box14013.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box14013.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box14013.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box14013);
/**
 * Creates a radio button.
 */
sablono.core.radio_button14021 = (function sablono$core$radio_button14021(var_args){
var args14022 = [];
var len__7651__auto___14025 = arguments.length;
var i__7652__auto___14026 = (0);
while(true){
if((i__7652__auto___14026 < len__7651__auto___14025)){
args14022.push((arguments[i__7652__auto___14026]));

var G__14027 = (i__7652__auto___14026 + (1));
i__7652__auto___14026 = G__14027;
continue;
} else {
}
break;
}

var G__14024 = args14022.length;
switch (G__14024) {
case 1:
return sablono.core.radio_button14021.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button14021.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button14021.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14022.length)].join('')));

}
});

sablono.core.radio_button14021.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button14021.call(null,group,null);
});

sablono.core.radio_button14021.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button14021.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button14021.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button14021.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button14021);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options14029 = (function sablono$core$select_options14029(var_args){
var args14030 = [];
var len__7651__auto___14049 = arguments.length;
var i__7652__auto___14050 = (0);
while(true){
if((i__7652__auto___14050 < len__7651__auto___14049)){
args14030.push((arguments[i__7652__auto___14050]));

var G__14051 = (i__7652__auto___14050 + (1));
i__7652__auto___14050 = G__14051;
continue;
} else {
}
break;
}

var G__14032 = args14030.length;
switch (G__14032) {
case 1:
return sablono.core.select_options14029.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options14029.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14030.length)].join('')));

}
});

sablono.core.select_options14029.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options14029.call(null,coll,null);
});

sablono.core.select_options14029.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__7326__auto__ = (function sablono$core$iter__14033(s__14034){
return (new cljs.core.LazySeq(null,(function (){
var s__14034__$1 = s__14034;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__14034__$1);
if(temp__4657__auto__){
var s__14034__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14034__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__14034__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__14036 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__14035 = (0);
while(true){
if((i__14035 < size__7325__auto__)){
var x = cljs.core._nth.call(null,c__7324__auto__,i__14035);
cljs.core.chunk_append.call(null,b__14036,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__14043 = x;
var text = cljs.core.nth.call(null,vec__14043,(0),null);
var val = cljs.core.nth.call(null,vec__14043,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__14043,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options14029.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__14053 = (i__14035 + (1));
i__14035 = G__14053;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14036),sablono$core$iter__14033.call(null,cljs.core.chunk_rest.call(null,s__14034__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14036),null);
}
} else {
var x = cljs.core.first.call(null,s__14034__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__14046 = x;
var text = cljs.core.nth.call(null,vec__14046,(0),null);
var val = cljs.core.nth.call(null,vec__14046,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__14046,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options14029.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__14033.call(null,cljs.core.rest.call(null,s__14034__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7326__auto__.call(null,coll);
});

sablono.core.select_options14029.cljs$lang$maxFixedArity = 2;


sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options14029);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down14054 = (function sablono$core$drop_down14054(var_args){
var args14055 = [];
var len__7651__auto___14058 = arguments.length;
var i__7652__auto___14059 = (0);
while(true){
if((i__7652__auto___14059 < len__7651__auto___14058)){
args14055.push((arguments[i__7652__auto___14059]));

var G__14060 = (i__7652__auto___14059 + (1));
i__7652__auto___14059 = G__14060;
continue;
} else {
}
break;
}

var G__14057 = args14055.length;
switch (G__14057) {
case 2:
return sablono.core.drop_down14054.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down14054.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14055.length)].join('')));

}
});

sablono.core.drop_down14054.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down14054.call(null,name,options,null);
});

sablono.core.drop_down14054.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down14054.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down14054);
/**
 * Creates a text area element.
 */
sablono.core.text_area14062 = (function sablono$core$text_area14062(var_args){
var args14063 = [];
var len__7651__auto___14066 = arguments.length;
var i__7652__auto___14067 = (0);
while(true){
if((i__7652__auto___14067 < len__7651__auto___14066)){
args14063.push((arguments[i__7652__auto___14067]));

var G__14068 = (i__7652__auto___14067 + (1));
i__7652__auto___14067 = G__14068;
continue;
} else {
}
break;
}

var G__14065 = args14063.length;
switch (G__14065) {
case 1:
return sablono.core.text_area14062.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area14062.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14063.length)].join('')));

}
});

sablono.core.text_area14062.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area14062.call(null,name,null);
});

sablono.core.text_area14062.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area14062.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area14062);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label14070 = (function sablono$core$label14070(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label14070);
/**
 * Creates a submit button.
 */
sablono.core.submit_button14071 = (function sablono$core$submit_button14071(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button14071);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button14072 = (function sablono$core$reset_button14072(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button14072);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to14073 = (function sablono$core$form_to14073(var_args){
var args__7658__auto__ = [];
var len__7651__auto___14080 = arguments.length;
var i__7652__auto___14081 = (0);
while(true){
if((i__7652__auto___14081 < len__7651__auto___14080)){
args__7658__auto__.push((arguments[i__7652__auto___14081]));

var G__14082 = (i__7652__auto___14081 + (1));
i__7652__auto___14081 = G__14082;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to14073.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

sablono.core.form_to14073.cljs$core$IFn$_invoke$arity$variadic = (function (p__14076,body){
var vec__14077 = p__14076;
var method = cljs.core.nth.call(null,vec__14077,(0),null);
var action = cljs.core.nth.call(null,vec__14077,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to14073.cljs$lang$maxFixedArity = (1);

sablono.core.form_to14073.cljs$lang$applyTo = (function (seq14074){
var G__14075 = cljs.core.first.call(null,seq14074);
var seq14074__$1 = cljs.core.next.call(null,seq14074);
return sablono.core.form_to14073.cljs$core$IFn$_invoke$arity$variadic(G__14075,seq14074__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to14073);

//# sourceMappingURL=core.js.map