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
var G__41699__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__41696 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__41697 = cljs.core.seq.call(null,vec__41696);
var first__41698 = cljs.core.first.call(null,seq__41697);
var seq__41697__$1 = cljs.core.next.call(null,seq__41697);
var tag = first__41698;
var body = seq__41697__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__41699 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41700__i = 0, G__41700__a = new Array(arguments.length -  0);
while (G__41700__i < G__41700__a.length) {G__41700__a[G__41700__i] = arguments[G__41700__i + 0]; ++G__41700__i;}
  args = new cljs.core.IndexedSeq(G__41700__a,0);
} 
return G__41699__delegate.call(this,args);};
G__41699.cljs$lang$maxFixedArity = 0;
G__41699.cljs$lang$applyTo = (function (arglist__41701){
var args = cljs.core.seq(arglist__41701);
return G__41699__delegate(args);
});
G__41699.cljs$core$IFn$_invoke$arity$variadic = G__41699__delegate;
return G__41699;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7326__auto__ = (function sablono$core$update_arglists_$_iter__41706(s__41707){
return (new cljs.core.LazySeq(null,(function (){
var s__41707__$1 = s__41707;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41707__$1);
if(temp__4657__auto__){
var s__41707__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41707__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__41707__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__41709 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__41708 = (0);
while(true){
if((i__41708 < size__7325__auto__)){
var args = cljs.core._nth.call(null,c__7324__auto__,i__41708);
cljs.core.chunk_append.call(null,b__41709,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__41710 = (i__41708 + (1));
i__41708 = G__41710;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41709),sablono$core$update_arglists_$_iter__41706.call(null,cljs.core.chunk_rest.call(null,s__41707__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41709),null);
}
} else {
var args = cljs.core.first.call(null,s__41707__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__41706.call(null,cljs.core.rest.call(null,s__41707__$2)));
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
var len__7651__auto___41716 = arguments.length;
var i__7652__auto___41717 = (0);
while(true){
if((i__7652__auto___41717 < len__7651__auto___41716)){
args__7658__auto__.push((arguments[i__7652__auto___41717]));

var G__41718 = (i__7652__auto___41717 + (1));
i__7652__auto___41717 = G__41718;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((0) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7659__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7326__auto__ = (function sablono$core$iter__41712(s__41713){
return (new cljs.core.LazySeq(null,(function (){
var s__41713__$1 = s__41713;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41713__$1);
if(temp__4657__auto__){
var s__41713__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41713__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__41713__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__41715 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__41714 = (0);
while(true){
if((i__41714 < size__7325__auto__)){
var style = cljs.core._nth.call(null,c__7324__auto__,i__41714);
cljs.core.chunk_append.call(null,b__41715,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__41719 = (i__41714 + (1));
i__41714 = G__41719;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41715),sablono$core$iter__41712.call(null,cljs.core.chunk_rest.call(null,s__41713__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41715),null);
}
} else {
var style = cljs.core.first.call(null,s__41713__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__41712.call(null,cljs.core.rest.call(null,s__41713__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq41711){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41711));
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
sablono.core.link_to41720 = (function sablono$core$link_to41720(var_args){
var args__7658__auto__ = [];
var len__7651__auto___41723 = arguments.length;
var i__7652__auto___41724 = (0);
while(true){
if((i__7652__auto___41724 < len__7651__auto___41723)){
args__7658__auto__.push((arguments[i__7652__auto___41724]));

var G__41725 = (i__7652__auto___41724 + (1));
i__7652__auto___41724 = G__41725;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to41720.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

sablono.core.link_to41720.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to41720.cljs$lang$maxFixedArity = (1);

sablono.core.link_to41720.cljs$lang$applyTo = (function (seq41721){
var G__41722 = cljs.core.first.call(null,seq41721);
var seq41721__$1 = cljs.core.next.call(null,seq41721);
return sablono.core.link_to41720.cljs$core$IFn$_invoke$arity$variadic(G__41722,seq41721__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to41720);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to41726 = (function sablono$core$mail_to41726(var_args){
var args__7658__auto__ = [];
var len__7651__auto___41733 = arguments.length;
var i__7652__auto___41734 = (0);
while(true){
if((i__7652__auto___41734 < len__7651__auto___41733)){
args__7658__auto__.push((arguments[i__7652__auto___41734]));

var G__41735 = (i__7652__auto___41734 + (1));
i__7652__auto___41734 = G__41735;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to41726.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

sablono.core.mail_to41726.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__41729){
var vec__41730 = p__41729;
var content = cljs.core.nth.call(null,vec__41730,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6543__auto__ = content;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to41726.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to41726.cljs$lang$applyTo = (function (seq41727){
var G__41728 = cljs.core.first.call(null,seq41727);
var seq41727__$1 = cljs.core.next.call(null,seq41727);
return sablono.core.mail_to41726.cljs$core$IFn$_invoke$arity$variadic(G__41728,seq41727__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to41726);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list41736 = (function sablono$core$unordered_list41736(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__7326__auto__ = (function sablono$core$unordered_list41736_$_iter__41741(s__41742){
return (new cljs.core.LazySeq(null,(function (){
var s__41742__$1 = s__41742;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41742__$1);
if(temp__4657__auto__){
var s__41742__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41742__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__41742__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__41744 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__41743 = (0);
while(true){
if((i__41743 < size__7325__auto__)){
var x = cljs.core._nth.call(null,c__7324__auto__,i__41743);
cljs.core.chunk_append.call(null,b__41744,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41745 = (i__41743 + (1));
i__41743 = G__41745;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41744),sablono$core$unordered_list41736_$_iter__41741.call(null,cljs.core.chunk_rest.call(null,s__41742__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41744),null);
}
} else {
var x = cljs.core.first.call(null,s__41742__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list41736_$_iter__41741.call(null,cljs.core.rest.call(null,s__41742__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list41736);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list41746 = (function sablono$core$ordered_list41746(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__7326__auto__ = (function sablono$core$ordered_list41746_$_iter__41751(s__41752){
return (new cljs.core.LazySeq(null,(function (){
var s__41752__$1 = s__41752;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41752__$1);
if(temp__4657__auto__){
var s__41752__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41752__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__41752__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__41754 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__41753 = (0);
while(true){
if((i__41753 < size__7325__auto__)){
var x = cljs.core._nth.call(null,c__7324__auto__,i__41753);
cljs.core.chunk_append.call(null,b__41754,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41755 = (i__41753 + (1));
i__41753 = G__41755;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41754),sablono$core$ordered_list41746_$_iter__41751.call(null,cljs.core.chunk_rest.call(null,s__41752__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41754),null);
}
} else {
var x = cljs.core.first.call(null,s__41752__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list41746_$_iter__41751.call(null,cljs.core.rest.call(null,s__41752__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list41746);
/**
 * Create an image element.
 */
sablono.core.image41756 = (function sablono$core$image41756(var_args){
var args41757 = [];
var len__7651__auto___41760 = arguments.length;
var i__7652__auto___41761 = (0);
while(true){
if((i__7652__auto___41761 < len__7651__auto___41760)){
args41757.push((arguments[i__7652__auto___41761]));

var G__41762 = (i__7652__auto___41761 + (1));
i__7652__auto___41761 = G__41762;
continue;
} else {
}
break;
}

var G__41759 = args41757.length;
switch (G__41759) {
case 1:
return sablono.core.image41756.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image41756.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41757.length)].join('')));

}
});

sablono.core.image41756.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image41756.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image41756.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image41756);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__41764_SHARP_,p2__41765_SHARP_){
return [cljs.core.str(p1__41764_SHARP_),cljs.core.str("["),cljs.core.str(p2__41765_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__41766_SHARP_,p2__41767_SHARP_){
return [cljs.core.str(p1__41766_SHARP_),cljs.core.str("-"),cljs.core.str(p2__41767_SHARP_)].join('');
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
sablono.core.color_field41768 = (function sablono$core$color_field41768(var_args){
var args41769 = [];
var len__7651__auto___41836 = arguments.length;
var i__7652__auto___41837 = (0);
while(true){
if((i__7652__auto___41837 < len__7651__auto___41836)){
args41769.push((arguments[i__7652__auto___41837]));

var G__41838 = (i__7652__auto___41837 + (1));
i__7652__auto___41837 = G__41838;
continue;
} else {
}
break;
}

var G__41771 = args41769.length;
switch (G__41771) {
case 1:
return sablono.core.color_field41768.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field41768.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41769.length)].join('')));

}
});

sablono.core.color_field41768.cljs$core$IFn$_invoke$arity$1 = (function (name__14970__auto__){
return sablono.core.color_field41768.call(null,name__14970__auto__,null);
});

sablono.core.color_field41768.cljs$core$IFn$_invoke$arity$2 = (function (name__14970__auto__,value__14971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__14970__auto__,value__14971__auto__);
});

sablono.core.color_field41768.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field41768);

/**
 * Creates a date input field.
 */
sablono.core.date_field41772 = (function sablono$core$date_field41772(var_args){
var args41773 = [];
var len__7651__auto___41840 = arguments.length;
var i__7652__auto___41841 = (0);
while(true){
if((i__7652__auto___41841 < len__7651__auto___41840)){
args41773.push((arguments[i__7652__auto___41841]));

var G__41842 = (i__7652__auto___41841 + (1));
i__7652__auto___41841 = G__41842;
continue;
} else {
}
break;
}

var G__41775 = args41773.length;
switch (G__41775) {
case 1:
return sablono.core.date_field41772.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field41772.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41773.length)].join('')));

}
});

sablono.core.date_field41772.cljs$core$IFn$_invoke$arity$1 = (function (name__14970__auto__){
return sablono.core.date_field41772.call(null,name__14970__auto__,null);
});

sablono.core.date_field41772.cljs$core$IFn$_invoke$arity$2 = (function (name__14970__auto__,value__14971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__14970__auto__,value__14971__auto__);
});

sablono.core.date_field41772.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field41772);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field41776 = (function sablono$core$datetime_field41776(var_args){
var args41777 = [];
var len__7651__auto___41844 = arguments.length;
var i__7652__auto___41845 = (0);
while(true){
if((i__7652__auto___41845 < len__7651__auto___41844)){
args41777.push((arguments[i__7652__auto___41845]));

var G__41846 = (i__7652__auto___41845 + (1));
i__7652__auto___41845 = G__41846;
continue;
} else {
}
break;
}

var G__41779 = args41777.length;
switch (G__41779) {
case 1:
return sablono.core.datetime_field41776.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field41776.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41777.length)].join('')));

}
});

sablono.core.datetime_field41776.cljs$core$IFn$_invoke$arity$1 = (function (name__14970__auto__){
return sablono.core.datetime_field41776.call(null,name__14970__auto__,null);
});

sablono.core.datetime_field41776.cljs$core$IFn$_invoke$arity$2 = (function (name__14970__auto__,value__14971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__14970__auto__,value__14971__auto__);
});

sablono.core.datetime_field41776.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field41776);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field41780 = (function sablono$core$datetime_local_field41780(var_args){
var args41781 = [];
var len__7651__auto___41848 = arguments.length;
var i__7652__auto___41849 = (0);
while(true){
if((i__7652__auto___41849 < len__7651__auto___41848)){
args41781.push((arguments[i__7652__auto___41849]));

var G__41850 = (i__7652__auto___41849 + (1));
i__7652__auto___41849 = G__41850;
continue;
} else {
}
break;
}

var G__41783 = args41781.length;
switch (G__41783) {
case 1:
return sablono.core.datetime_local_field41780.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field41780.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41781.length)].join('')));

}
});

sablono.core.datetime_local_field41780.cljs$core$IFn$_invoke$arity$1 = (function (name__14970__auto__){
return sablono.core.datetime_local_field41780.call(null,name__14970__auto__,null);
});

sablono.core.datetime_local_field41780.cljs$core$IFn$_invoke$arity$2 = (function (name__14970__auto__,value__14971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__14970__auto__,value__14971__auto__);
});

sablono.core.datetime_local_field41780.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field41780);

/**
 * Creates a email input field.
 */
sablono.core.email_field41784 = (function sablono$core$email_field41784(var_args){
var args41785 = [];
var len__7651__auto___41852 = arguments.length;
var i__7652__auto___41853 = (0);
while(true){
if((i__7652__auto___41853 < len__7651__auto___41852)){
args41785.push((arguments[i__7652__auto___41853]));

var G__41854 = (i__7652__auto___41853 + (1));
i__7652__auto___41853 = G__41854;
continue;
} else {
}
break;
}

var G__41787 = args41785.length;
switch (G__41787) {
case 1:
return sablono.core.email_field41784.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field41784.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41785.length)].join('')));

}
});

sablono.core.email_field41784.cljs$core$IFn$_invoke$arity$1 = (function (name__14970__auto__){
return sablono.core.email_field41784.call(null,name__14970__auto__,null);
});

sablono.core.email_field41784.cljs$core$IFn$_invoke$arity$2 = (function (name__14970__auto__,value__14971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__14970__auto__,value__14971__auto__);
});

sablono.core.email_field41784.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field41784);

/**
 * Creates a file input field.
 */
sablono.core.file_field41788 = (function sablono$core$file_field41788(var_args){
var args41789 = [];
var len__7651__auto___41856 = arguments.length;
var i__7652__auto___41857 = (0);
while(true){
if((i__7652__auto___41857 < len__7651__auto___41856)){
args41789.push((arguments[i__7652__auto___41857]));

var G__41858 = (i__7652__auto___41857 + (1));
i__7652__auto___41857 = G__41858;
continue;
} else {
}
break;
}

var G__41791 = args41789.length;
switch (G__41791) {
case 1:
return sablono.core.file_field41788.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field41788.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41789.length)].join('')));

}
});

sablono.core.file_field41788.cljs$core$IFn$_invoke$arity$1 = (function (name__14970__auto__){
return sablono.core.file_field41788.call(null,name__14970__auto__,null);
});

sablono.core.file_field41788.cljs$core$IFn$_invoke$arity$2 = (function (name__14970__auto__,value__14971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__14970__auto__,value__14971__auto__);
});

sablono.core.file_field41788.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field41788);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field41792 = (function sablono$core$hidden_field41792(var_args){
var args41793 = [];
var len__7651__auto___41860 = arguments.length;
var i__7652__auto___41861 = (0);
while(true){
if((i__7652__auto___41861 < len__7651__auto___41860)){
args41793.push((arguments[i__7652__auto___41861]));

var G__41862 = (i__7652__auto___41861 + (1));
i__7652__auto___41861 = G__41862;
continue;
} else {
}
break;
}

var G__41795 = args41793.length;
switch (G__41795) {
case 1:
return sablono.core.hidden_field41792.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field41792.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41793.length)].join('')));

}
});

sablono.core.hidden_field41792.cljs$core$IFn$_invoke$arity$1 = (function (name__14970__auto__){
return sablono.core.hidden_field41792.call(null,name__14970__auto__,null);
});

sablono.core.hidden_field41792.cljs$core$IFn$_invoke$arity$2 = (function (name__14970__auto__,value__14971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__14970__auto__,value__14971__auto__);
});

sablono.core.hidden_field41792.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field41792);

/**
 * Creates a month input field.
 */
sablono.core.month_field41796 = (function sablono$core$month_field41796(var_args){
var args41797 = [];
var len__7651__auto___41864 = arguments.length;
var i__7652__auto___41865 = (0);
while(true){
if((i__7652__auto___41865 < len__7651__auto___41864)){
args41797.push((arguments[i__7652__auto___41865]));

var G__41866 = (i__7652__auto___41865 + (1));
i__7652__auto___41865 = G__41866;
continue;
} else {
}
break;
}

var G__41799 = args41797.length;
switch (G__41799) {
case 1:
return sablono.core.month_field41796.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field41796.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41797.length)].join('')));

}
});

sablono.core.month_field41796.cljs$core$IFn$_invoke$arity$1 = (function (name__14970__auto__){
return sablono.core.month_field41796.call(null,name__14970__auto__,null);
});

sablono.core.month_field41796.cljs$core$IFn$_invoke$arity$2 = (function (name__14970__auto__,value__14971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__14970__auto__,value__14971__auto__);
});

sablono.core.month_field41796.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field41796);

/**
 * Creates a number input field.
 */
sablono.core.number_field41800 = (function sablono$core$number_field41800(var_args){
var args41801 = [];
var len__7651__auto___41868 = arguments.length;
var i__7652__auto___41869 = (0);
while(true){
if((i__7652__auto___41869 < len__7651__auto___41868)){
args41801.push((arguments[i__7652__auto___41869]));

var G__41870 = (i__7652__auto___41869 + (1));
i__7652__auto___41869 = G__41870;
continue;
} else {
}
break;
}

var G__41803 = args41801.length;
switch (G__41803) {
case 1:
return sablono.core.number_field41800.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field41800.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41801.length)].join('')));

}
});

sablono.core.number_field41800.cljs$core$IFn$_invoke$arity$1 = (function (name__14970__auto__){
return sablono.core.number_field41800.call(null,name__14970__auto__,null);
});

sablono.core.number_field41800.cljs$core$IFn$_invoke$arity$2 = (function (name__14970__auto__,value__14971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__14970__auto__,value__14971__auto__);
});

sablono.core.number_field41800.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field41800);

/**
 * Creates a password input field.
 */
sablono.core.password_field41804 = (function sablono$core$password_field41804(var_args){
var args41805 = [];
var len__7651__auto___41872 = arguments.length;
var i__7652__auto___41873 = (0);
while(true){
if((i__7652__auto___41873 < len__7651__auto___41872)){
args41805.push((arguments[i__7652__auto___41873]));

var G__41874 = (i__7652__auto___41873 + (1));
i__7652__auto___41873 = G__41874;
continue;
} else {
}
break;
}

var G__41807 = args41805.length;
switch (G__41807) {
case 1:
return sablono.core.password_field41804.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field41804.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41805.length)].join('')));

}
});

sablono.core.password_field41804.cljs$core$IFn$_invoke$arity$1 = (function (name__14970__auto__){
return sablono.core.password_field41804.call(null,name__14970__auto__,null);
});

sablono.core.password_field41804.cljs$core$IFn$_invoke$arity$2 = (function (name__14970__auto__,value__14971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__14970__auto__,value__14971__auto__);
});

sablono.core.password_field41804.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field41804);

/**
 * Creates a range input field.
 */
sablono.core.range_field41808 = (function sablono$core$range_field41808(var_args){
var args41809 = [];
var len__7651__auto___41876 = arguments.length;
var i__7652__auto___41877 = (0);
while(true){
if((i__7652__auto___41877 < len__7651__auto___41876)){
args41809.push((arguments[i__7652__auto___41877]));

var G__41878 = (i__7652__auto___41877 + (1));
i__7652__auto___41877 = G__41878;
continue;
} else {
}
break;
}

var G__41811 = args41809.length;
switch (G__41811) {
case 1:
return sablono.core.range_field41808.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field41808.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41809.length)].join('')));

}
});

sablono.core.range_field41808.cljs$core$IFn$_invoke$arity$1 = (function (name__14970__auto__){
return sablono.core.range_field41808.call(null,name__14970__auto__,null);
});

sablono.core.range_field41808.cljs$core$IFn$_invoke$arity$2 = (function (name__14970__auto__,value__14971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__14970__auto__,value__14971__auto__);
});

sablono.core.range_field41808.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field41808);

/**
 * Creates a search input field.
 */
sablono.core.search_field41812 = (function sablono$core$search_field41812(var_args){
var args41813 = [];
var len__7651__auto___41880 = arguments.length;
var i__7652__auto___41881 = (0);
while(true){
if((i__7652__auto___41881 < len__7651__auto___41880)){
args41813.push((arguments[i__7652__auto___41881]));

var G__41882 = (i__7652__auto___41881 + (1));
i__7652__auto___41881 = G__41882;
continue;
} else {
}
break;
}

var G__41815 = args41813.length;
switch (G__41815) {
case 1:
return sablono.core.search_field41812.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field41812.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41813.length)].join('')));

}
});

sablono.core.search_field41812.cljs$core$IFn$_invoke$arity$1 = (function (name__14970__auto__){
return sablono.core.search_field41812.call(null,name__14970__auto__,null);
});

sablono.core.search_field41812.cljs$core$IFn$_invoke$arity$2 = (function (name__14970__auto__,value__14971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__14970__auto__,value__14971__auto__);
});

sablono.core.search_field41812.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field41812);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field41816 = (function sablono$core$tel_field41816(var_args){
var args41817 = [];
var len__7651__auto___41884 = arguments.length;
var i__7652__auto___41885 = (0);
while(true){
if((i__7652__auto___41885 < len__7651__auto___41884)){
args41817.push((arguments[i__7652__auto___41885]));

var G__41886 = (i__7652__auto___41885 + (1));
i__7652__auto___41885 = G__41886;
continue;
} else {
}
break;
}

var G__41819 = args41817.length;
switch (G__41819) {
case 1:
return sablono.core.tel_field41816.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field41816.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41817.length)].join('')));

}
});

sablono.core.tel_field41816.cljs$core$IFn$_invoke$arity$1 = (function (name__14970__auto__){
return sablono.core.tel_field41816.call(null,name__14970__auto__,null);
});

sablono.core.tel_field41816.cljs$core$IFn$_invoke$arity$2 = (function (name__14970__auto__,value__14971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__14970__auto__,value__14971__auto__);
});

sablono.core.tel_field41816.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field41816);

/**
 * Creates a text input field.
 */
sablono.core.text_field41820 = (function sablono$core$text_field41820(var_args){
var args41821 = [];
var len__7651__auto___41888 = arguments.length;
var i__7652__auto___41889 = (0);
while(true){
if((i__7652__auto___41889 < len__7651__auto___41888)){
args41821.push((arguments[i__7652__auto___41889]));

var G__41890 = (i__7652__auto___41889 + (1));
i__7652__auto___41889 = G__41890;
continue;
} else {
}
break;
}

var G__41823 = args41821.length;
switch (G__41823) {
case 1:
return sablono.core.text_field41820.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field41820.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41821.length)].join('')));

}
});

sablono.core.text_field41820.cljs$core$IFn$_invoke$arity$1 = (function (name__14970__auto__){
return sablono.core.text_field41820.call(null,name__14970__auto__,null);
});

sablono.core.text_field41820.cljs$core$IFn$_invoke$arity$2 = (function (name__14970__auto__,value__14971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__14970__auto__,value__14971__auto__);
});

sablono.core.text_field41820.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field41820);

/**
 * Creates a time input field.
 */
sablono.core.time_field41824 = (function sablono$core$time_field41824(var_args){
var args41825 = [];
var len__7651__auto___41892 = arguments.length;
var i__7652__auto___41893 = (0);
while(true){
if((i__7652__auto___41893 < len__7651__auto___41892)){
args41825.push((arguments[i__7652__auto___41893]));

var G__41894 = (i__7652__auto___41893 + (1));
i__7652__auto___41893 = G__41894;
continue;
} else {
}
break;
}

var G__41827 = args41825.length;
switch (G__41827) {
case 1:
return sablono.core.time_field41824.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field41824.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41825.length)].join('')));

}
});

sablono.core.time_field41824.cljs$core$IFn$_invoke$arity$1 = (function (name__14970__auto__){
return sablono.core.time_field41824.call(null,name__14970__auto__,null);
});

sablono.core.time_field41824.cljs$core$IFn$_invoke$arity$2 = (function (name__14970__auto__,value__14971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__14970__auto__,value__14971__auto__);
});

sablono.core.time_field41824.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field41824);

/**
 * Creates a url input field.
 */
sablono.core.url_field41828 = (function sablono$core$url_field41828(var_args){
var args41829 = [];
var len__7651__auto___41896 = arguments.length;
var i__7652__auto___41897 = (0);
while(true){
if((i__7652__auto___41897 < len__7651__auto___41896)){
args41829.push((arguments[i__7652__auto___41897]));

var G__41898 = (i__7652__auto___41897 + (1));
i__7652__auto___41897 = G__41898;
continue;
} else {
}
break;
}

var G__41831 = args41829.length;
switch (G__41831) {
case 1:
return sablono.core.url_field41828.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field41828.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41829.length)].join('')));

}
});

sablono.core.url_field41828.cljs$core$IFn$_invoke$arity$1 = (function (name__14970__auto__){
return sablono.core.url_field41828.call(null,name__14970__auto__,null);
});

sablono.core.url_field41828.cljs$core$IFn$_invoke$arity$2 = (function (name__14970__auto__,value__14971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__14970__auto__,value__14971__auto__);
});

sablono.core.url_field41828.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field41828);

/**
 * Creates a week input field.
 */
sablono.core.week_field41832 = (function sablono$core$week_field41832(var_args){
var args41833 = [];
var len__7651__auto___41900 = arguments.length;
var i__7652__auto___41901 = (0);
while(true){
if((i__7652__auto___41901 < len__7651__auto___41900)){
args41833.push((arguments[i__7652__auto___41901]));

var G__41902 = (i__7652__auto___41901 + (1));
i__7652__auto___41901 = G__41902;
continue;
} else {
}
break;
}

var G__41835 = args41833.length;
switch (G__41835) {
case 1:
return sablono.core.week_field41832.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field41832.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41833.length)].join('')));

}
});

sablono.core.week_field41832.cljs$core$IFn$_invoke$arity$1 = (function (name__14970__auto__){
return sablono.core.week_field41832.call(null,name__14970__auto__,null);
});

sablono.core.week_field41832.cljs$core$IFn$_invoke$arity$2 = (function (name__14970__auto__,value__14971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__14970__auto__,value__14971__auto__);
});

sablono.core.week_field41832.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field41832);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box41904 = (function sablono$core$check_box41904(var_args){
var args41905 = [];
var len__7651__auto___41908 = arguments.length;
var i__7652__auto___41909 = (0);
while(true){
if((i__7652__auto___41909 < len__7651__auto___41908)){
args41905.push((arguments[i__7652__auto___41909]));

var G__41910 = (i__7652__auto___41909 + (1));
i__7652__auto___41909 = G__41910;
continue;
} else {
}
break;
}

var G__41907 = args41905.length;
switch (G__41907) {
case 1:
return sablono.core.check_box41904.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box41904.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box41904.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41905.length)].join('')));

}
});

sablono.core.check_box41904.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box41904.call(null,name,null);
});

sablono.core.check_box41904.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box41904.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box41904.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box41904.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box41904);
/**
 * Creates a radio button.
 */
sablono.core.radio_button41912 = (function sablono$core$radio_button41912(var_args){
var args41913 = [];
var len__7651__auto___41916 = arguments.length;
var i__7652__auto___41917 = (0);
while(true){
if((i__7652__auto___41917 < len__7651__auto___41916)){
args41913.push((arguments[i__7652__auto___41917]));

var G__41918 = (i__7652__auto___41917 + (1));
i__7652__auto___41917 = G__41918;
continue;
} else {
}
break;
}

var G__41915 = args41913.length;
switch (G__41915) {
case 1:
return sablono.core.radio_button41912.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button41912.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button41912.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41913.length)].join('')));

}
});

sablono.core.radio_button41912.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button41912.call(null,group,null);
});

sablono.core.radio_button41912.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button41912.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button41912.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button41912.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button41912);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options41920 = (function sablono$core$select_options41920(var_args){
var args41921 = [];
var len__7651__auto___41940 = arguments.length;
var i__7652__auto___41941 = (0);
while(true){
if((i__7652__auto___41941 < len__7651__auto___41940)){
args41921.push((arguments[i__7652__auto___41941]));

var G__41942 = (i__7652__auto___41941 + (1));
i__7652__auto___41941 = G__41942;
continue;
} else {
}
break;
}

var G__41923 = args41921.length;
switch (G__41923) {
case 1:
return sablono.core.select_options41920.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options41920.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41921.length)].join('')));

}
});

sablono.core.select_options41920.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options41920.call(null,coll,null);
});

sablono.core.select_options41920.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__7326__auto__ = (function sablono$core$iter__41924(s__41925){
return (new cljs.core.LazySeq(null,(function (){
var s__41925__$1 = s__41925;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41925__$1);
if(temp__4657__auto__){
var s__41925__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41925__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__41925__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__41927 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__41926 = (0);
while(true){
if((i__41926 < size__7325__auto__)){
var x = cljs.core._nth.call(null,c__7324__auto__,i__41926);
cljs.core.chunk_append.call(null,b__41927,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__41934 = x;
var text = cljs.core.nth.call(null,vec__41934,(0),null);
var val = cljs.core.nth.call(null,vec__41934,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__41934,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options41920.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__41944 = (i__41926 + (1));
i__41926 = G__41944;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41927),sablono$core$iter__41924.call(null,cljs.core.chunk_rest.call(null,s__41925__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41927),null);
}
} else {
var x = cljs.core.first.call(null,s__41925__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__41937 = x;
var text = cljs.core.nth.call(null,vec__41937,(0),null);
var val = cljs.core.nth.call(null,vec__41937,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__41937,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options41920.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__41924.call(null,cljs.core.rest.call(null,s__41925__$2)));
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

sablono.core.select_options41920.cljs$lang$maxFixedArity = 2;


sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options41920);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down41945 = (function sablono$core$drop_down41945(var_args){
var args41946 = [];
var len__7651__auto___41949 = arguments.length;
var i__7652__auto___41950 = (0);
while(true){
if((i__7652__auto___41950 < len__7651__auto___41949)){
args41946.push((arguments[i__7652__auto___41950]));

var G__41951 = (i__7652__auto___41950 + (1));
i__7652__auto___41950 = G__41951;
continue;
} else {
}
break;
}

var G__41948 = args41946.length;
switch (G__41948) {
case 2:
return sablono.core.drop_down41945.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down41945.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41946.length)].join('')));

}
});

sablono.core.drop_down41945.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down41945.call(null,name,options,null);
});

sablono.core.drop_down41945.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down41945.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down41945);
/**
 * Creates a text area element.
 */
sablono.core.text_area41953 = (function sablono$core$text_area41953(var_args){
var args41954 = [];
var len__7651__auto___41957 = arguments.length;
var i__7652__auto___41958 = (0);
while(true){
if((i__7652__auto___41958 < len__7651__auto___41957)){
args41954.push((arguments[i__7652__auto___41958]));

var G__41959 = (i__7652__auto___41958 + (1));
i__7652__auto___41958 = G__41959;
continue;
} else {
}
break;
}

var G__41956 = args41954.length;
switch (G__41956) {
case 1:
return sablono.core.text_area41953.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area41953.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41954.length)].join('')));

}
});

sablono.core.text_area41953.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area41953.call(null,name,null);
});

sablono.core.text_area41953.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area41953.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area41953);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label41961 = (function sablono$core$label41961(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label41961);
/**
 * Creates a submit button.
 */
sablono.core.submit_button41962 = (function sablono$core$submit_button41962(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button41962);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button41963 = (function sablono$core$reset_button41963(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button41963);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to41964 = (function sablono$core$form_to41964(var_args){
var args__7658__auto__ = [];
var len__7651__auto___41971 = arguments.length;
var i__7652__auto___41972 = (0);
while(true){
if((i__7652__auto___41972 < len__7651__auto___41971)){
args__7658__auto__.push((arguments[i__7652__auto___41972]));

var G__41973 = (i__7652__auto___41972 + (1));
i__7652__auto___41972 = G__41973;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to41964.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

sablono.core.form_to41964.cljs$core$IFn$_invoke$arity$variadic = (function (p__41967,body){
var vec__41968 = p__41967;
var method = cljs.core.nth.call(null,vec__41968,(0),null);
var action = cljs.core.nth.call(null,vec__41968,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to41964.cljs$lang$maxFixedArity = (1);

sablono.core.form_to41964.cljs$lang$applyTo = (function (seq41965){
var G__41966 = cljs.core.first.call(null,seq41965);
var seq41965__$1 = cljs.core.next.call(null,seq41965);
return sablono.core.form_to41964.cljs$core$IFn$_invoke$arity$variadic(G__41966,seq41965__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to41964);

//# sourceMappingURL=core.js.map