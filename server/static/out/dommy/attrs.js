// Compiled by ClojureScript 0.0-2371
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3626__auto__ = ((idx === (0))) || ((" " === class_name.charAt((idx - (1)))));if(and__3626__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__3626__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = (0);while(true){
var i = class_name.indexOf(class$,start_from);if((i >= (0)))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__18338 = (i + class$.length);
start_from = G__18338;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4124__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto__))
{var class_list = temp__4124__auto__;return class_list.contains(class$__$1);
} else
{var temp__4126__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4126__auto__))
{var class_name = temp__4126__auto__;var temp__4126__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4126__auto____$1))
{var i = temp__4126__auto____$1;return (i >= (0));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes));if(cljs.core.seq.call(null,classes__$1))
{var temp__4124__auto___18363 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___18363))
{var class_list_18364 = temp__4124__auto___18363;var seq__18351_18365 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__18352_18366 = null;var count__18353_18367 = (0);var i__18354_18368 = (0);while(true){
if((i__18354_18368 < count__18353_18367))
{var class_18369 = cljs.core._nth.call(null,chunk__18352_18366,i__18354_18368);class_list_18364.add(class_18369);
{
var G__18370 = seq__18351_18365;
var G__18371 = chunk__18352_18366;
var G__18372 = count__18353_18367;
var G__18373 = (i__18354_18368 + (1));
seq__18351_18365 = G__18370;
chunk__18352_18366 = G__18371;
count__18353_18367 = G__18372;
i__18354_18368 = G__18373;
continue;
}
} else
{var temp__4126__auto___18374 = cljs.core.seq.call(null,seq__18351_18365);if(temp__4126__auto___18374)
{var seq__18351_18375__$1 = temp__4126__auto___18374;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18351_18375__$1))
{var c__4408__auto___18376 = cljs.core.chunk_first.call(null,seq__18351_18375__$1);{
var G__18377 = cljs.core.chunk_rest.call(null,seq__18351_18375__$1);
var G__18378 = c__4408__auto___18376;
var G__18379 = cljs.core.count.call(null,c__4408__auto___18376);
var G__18380 = (0);
seq__18351_18365 = G__18377;
chunk__18352_18366 = G__18378;
count__18353_18367 = G__18379;
i__18354_18368 = G__18380;
continue;
}
} else
{var class_18381 = cljs.core.first.call(null,seq__18351_18375__$1);class_list_18364.add(class_18381);
{
var G__18382 = cljs.core.next.call(null,seq__18351_18375__$1);
var G__18383 = null;
var G__18384 = (0);
var G__18385 = (0);
seq__18351_18365 = G__18382;
chunk__18352_18366 = G__18383;
count__18353_18367 = G__18384;
i__18354_18368 = G__18385;
continue;
}
}
} else
{}
}
break;
}
} else
{var seq__18355_18386 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__18356_18387 = null;var count__18357_18388 = (0);var i__18358_18389 = (0);while(true){
if((i__18358_18389 < count__18357_18388))
{var class_18390 = cljs.core._nth.call(null,chunk__18356_18387,i__18358_18389);var class_name_18391 = elem__$1.className;if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_18391,class_18390)))
{} else
{elem__$1.className = (((class_name_18391 === ""))?class_18390:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_18391)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_18390)));
}
{
var G__18392 = seq__18355_18386;
var G__18393 = chunk__18356_18387;
var G__18394 = count__18357_18388;
var G__18395 = (i__18358_18389 + (1));
seq__18355_18386 = G__18392;
chunk__18356_18387 = G__18393;
count__18357_18388 = G__18394;
i__18358_18389 = G__18395;
continue;
}
} else
{var temp__4126__auto___18396 = cljs.core.seq.call(null,seq__18355_18386);if(temp__4126__auto___18396)
{var seq__18355_18397__$1 = temp__4126__auto___18396;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18355_18397__$1))
{var c__4408__auto___18398 = cljs.core.chunk_first.call(null,seq__18355_18397__$1);{
var G__18399 = cljs.core.chunk_rest.call(null,seq__18355_18397__$1);
var G__18400 = c__4408__auto___18398;
var G__18401 = cljs.core.count.call(null,c__4408__auto___18398);
var G__18402 = (0);
seq__18355_18386 = G__18399;
chunk__18356_18387 = G__18400;
count__18357_18388 = G__18401;
i__18358_18389 = G__18402;
continue;
}
} else
{var class_18403 = cljs.core.first.call(null,seq__18355_18397__$1);var class_name_18404 = elem__$1.className;if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_18404,class_18403)))
{} else
{elem__$1.className = (((class_name_18404 === ""))?class_18403:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_18404)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_18403)));
}
{
var G__18405 = cljs.core.next.call(null,seq__18355_18397__$1);
var G__18406 = null;
var G__18407 = (0);
var G__18408 = (0);
seq__18355_18386 = G__18405;
chunk__18356_18387 = G__18406;
count__18357_18388 = G__18407;
i__18358_18389 = G__18408;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__18409__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__18359_18410 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__18360_18411 = null;var count__18361_18412 = (0);var i__18362_18413 = (0);while(true){
if((i__18362_18413 < count__18361_18412))
{var c_18414 = cljs.core._nth.call(null,chunk__18360_18411,i__18362_18413);add_class_BANG_.call(null,elem__$1,c_18414);
{
var G__18415 = seq__18359_18410;
var G__18416 = chunk__18360_18411;
var G__18417 = count__18361_18412;
var G__18418 = (i__18362_18413 + (1));
seq__18359_18410 = G__18415;
chunk__18360_18411 = G__18416;
count__18361_18412 = G__18417;
i__18362_18413 = G__18418;
continue;
}
} else
{var temp__4126__auto___18419 = cljs.core.seq.call(null,seq__18359_18410);if(temp__4126__auto___18419)
{var seq__18359_18420__$1 = temp__4126__auto___18419;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18359_18420__$1))
{var c__4408__auto___18421 = cljs.core.chunk_first.call(null,seq__18359_18420__$1);{
var G__18422 = cljs.core.chunk_rest.call(null,seq__18359_18420__$1);
var G__18423 = c__4408__auto___18421;
var G__18424 = cljs.core.count.call(null,c__4408__auto___18421);
var G__18425 = (0);
seq__18359_18410 = G__18422;
chunk__18360_18411 = G__18423;
count__18361_18412 = G__18424;
i__18362_18413 = G__18425;
continue;
}
} else
{var c_18426 = cljs.core.first.call(null,seq__18359_18420__$1);add_class_BANG_.call(null,elem__$1,c_18426);
{
var G__18427 = cljs.core.next.call(null,seq__18359_18420__$1);
var G__18428 = null;
var G__18429 = (0);
var G__18430 = (0);
seq__18359_18410 = G__18427;
chunk__18360_18411 = G__18428;
count__18361_18412 = G__18429;
i__18362_18413 = G__18430;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__18409 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__18409__delegate.call(this,elem,classes,more_classes);};
G__18409.cljs$lang$maxFixedArity = 2;
G__18409.cljs$lang$applyTo = (function (arglist__18431){
var elem = cljs.core.first(arglist__18431);
arglist__18431 = cljs.core.next(arglist__18431);
var classes = cljs.core.first(arglist__18431);
var more_classes = cljs.core.rest(arglist__18431);
return G__18409__delegate(elem,classes,more_classes);
});
G__18409.cljs$core$IFn$_invoke$arity$variadic = G__18409__delegate;
return G__18409;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){var class_name = init_class_name;while(true){
var class_len = class_name.length;var temp__4124__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4124__auto__))
{var i = temp__4124__auto__;{
var G__18432 = (function (){var end = (i + class$.length);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((end < class_len))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substring((0),i))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substr((end + (1))))):class_name.substring((0),(i - (1))))));
})();
class_name = G__18432;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4124__auto___18441 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___18441))
{var class_list_18442 = temp__4124__auto___18441;class_list_18442.remove(class$__$1);
} else
{var class_name_18443 = elem__$1.className;var new_class_name_18444 = dommy.attrs.remove_class_str.call(null,class_name_18443,class$__$1);if((class_name_18443 === new_class_name_18444))
{} else
{elem__$1.className = new_class_name_18444;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__18445__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__18437 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__18438 = null;var count__18439 = (0);var i__18440 = (0);while(true){
if((i__18440 < count__18439))
{var c = cljs.core._nth.call(null,chunk__18438,i__18440);remove_class_BANG_.call(null,elem__$1,c);
{
var G__18446 = seq__18437;
var G__18447 = chunk__18438;
var G__18448 = count__18439;
var G__18449 = (i__18440 + (1));
seq__18437 = G__18446;
chunk__18438 = G__18447;
count__18439 = G__18448;
i__18440 = G__18449;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18437);if(temp__4126__auto__)
{var seq__18437__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18437__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__18437__$1);{
var G__18450 = cljs.core.chunk_rest.call(null,seq__18437__$1);
var G__18451 = c__4408__auto__;
var G__18452 = cljs.core.count.call(null,c__4408__auto__);
var G__18453 = (0);
seq__18437 = G__18450;
chunk__18438 = G__18451;
count__18439 = G__18452;
i__18440 = G__18453;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__18437__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__18454 = cljs.core.next.call(null,seq__18437__$1);
var G__18455 = null;
var G__18456 = (0);
var G__18457 = (0);
seq__18437 = G__18454;
chunk__18438 = G__18455;
count__18439 = G__18456;
i__18440 = G__18457;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__18445 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__18445__delegate.call(this,elem,class$,classes);};
G__18445.cljs$lang$maxFixedArity = 2;
G__18445.cljs$lang$applyTo = (function (arglist__18458){
var elem = cljs.core.first(arglist__18458);
arglist__18458 = cljs.core.next(arglist__18458);
var class$ = cljs.core.first(arglist__18458);
var classes = cljs.core.rest(arglist__18458);
return G__18445__delegate(elem,class$,classes);
});
G__18445.cljs$core$IFn$_invoke$arity$variadic = G__18445__delegate;
return G__18445;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4124__auto___18459 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___18459))
{var class_list_18460 = temp__4124__auto___18459;class_list_18460.toggle(class$__$1);
} else
{toggle_class_BANG_.call(null,elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){if(typeof x === 'string')
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__18463){var vec__18464 = p__18463;var k = cljs.core.nth.call(null,vec__18464,(0),null);var v = cljs.core.nth.call(null,vec__18464,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dommy.utils.as_str.call(null,k))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dommy.utils.as_str.call(null,v))+";");
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__18471_18477 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__18472_18478 = null;var count__18473_18479 = (0);var i__18474_18480 = (0);while(true){
if((i__18474_18480 < count__18473_18479))
{var vec__18475_18481 = cljs.core._nth.call(null,chunk__18472_18478,i__18474_18480);var k_18482 = cljs.core.nth.call(null,vec__18475_18481,(0),null);var v_18483 = cljs.core.nth.call(null,vec__18475_18481,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_18482),v_18483);
{
var G__18484 = seq__18471_18477;
var G__18485 = chunk__18472_18478;
var G__18486 = count__18473_18479;
var G__18487 = (i__18474_18480 + (1));
seq__18471_18477 = G__18484;
chunk__18472_18478 = G__18485;
count__18473_18479 = G__18486;
i__18474_18480 = G__18487;
continue;
}
} else
{var temp__4126__auto___18488 = cljs.core.seq.call(null,seq__18471_18477);if(temp__4126__auto___18488)
{var seq__18471_18489__$1 = temp__4126__auto___18488;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18471_18489__$1))
{var c__4408__auto___18490 = cljs.core.chunk_first.call(null,seq__18471_18489__$1);{
var G__18491 = cljs.core.chunk_rest.call(null,seq__18471_18489__$1);
var G__18492 = c__4408__auto___18490;
var G__18493 = cljs.core.count.call(null,c__4408__auto___18490);
var G__18494 = (0);
seq__18471_18477 = G__18491;
chunk__18472_18478 = G__18492;
count__18473_18479 = G__18493;
i__18474_18480 = G__18494;
continue;
}
} else
{var vec__18476_18495 = cljs.core.first.call(null,seq__18471_18489__$1);var k_18496 = cljs.core.nth.call(null,vec__18476_18495,(0),null);var v_18497 = cljs.core.nth.call(null,vec__18476_18495,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_18496),v_18497);
{
var G__18498 = cljs.core.next.call(null,seq__18471_18489__$1);
var G__18499 = null;
var G__18500 = (0);
var G__18501 = (0);
seq__18471_18477 = G__18498;
chunk__18472_18478 = G__18499;
count__18473_18479 = G__18500;
i__18474_18480 = G__18501;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__18502){
var elem = cljs.core.first(arglist__18502);
var kvs = cljs.core.rest(arglist__18502);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-505765866,null))))));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__18509_18515 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__18510_18516 = null;var count__18511_18517 = (0);var i__18512_18518 = (0);while(true){
if((i__18512_18518 < count__18511_18517))
{var vec__18513_18519 = cljs.core._nth.call(null,chunk__18510_18516,i__18512_18518);var k_18520 = cljs.core.nth.call(null,vec__18513_18519,(0),null);var v_18521 = cljs.core.nth.call(null,vec__18513_18519,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_18520,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_18521)+"px"));
{
var G__18522 = seq__18509_18515;
var G__18523 = chunk__18510_18516;
var G__18524 = count__18511_18517;
var G__18525 = (i__18512_18518 + (1));
seq__18509_18515 = G__18522;
chunk__18510_18516 = G__18523;
count__18511_18517 = G__18524;
i__18512_18518 = G__18525;
continue;
}
} else
{var temp__4126__auto___18526 = cljs.core.seq.call(null,seq__18509_18515);if(temp__4126__auto___18526)
{var seq__18509_18527__$1 = temp__4126__auto___18526;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18509_18527__$1))
{var c__4408__auto___18528 = cljs.core.chunk_first.call(null,seq__18509_18527__$1);{
var G__18529 = cljs.core.chunk_rest.call(null,seq__18509_18527__$1);
var G__18530 = c__4408__auto___18528;
var G__18531 = cljs.core.count.call(null,c__4408__auto___18528);
var G__18532 = (0);
seq__18509_18515 = G__18529;
chunk__18510_18516 = G__18530;
count__18511_18517 = G__18531;
i__18512_18518 = G__18532;
continue;
}
} else
{var vec__18514_18533 = cljs.core.first.call(null,seq__18509_18527__$1);var k_18534 = cljs.core.nth.call(null,vec__18514_18533,(0),null);var v_18535 = cljs.core.nth.call(null,vec__18514_18533,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_18534,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_18535)+"px"));
{
var G__18536 = cljs.core.next.call(null,seq__18509_18527__$1);
var G__18537 = null;
var G__18538 = (0);
var G__18539 = (0);
seq__18509_18515 = G__18536;
chunk__18510_18516 = G__18537;
count__18511_18517 = G__18538;
i__18512_18518 = G__18539;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__18540){
var elem = cljs.core.first(arglist__18540);
var kvs = cljs.core.rest(arglist__18540);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__18549 = dommy.template.__GT_node_like.call(null,elem);(G__18549[dommy.utils.as_str.call(null,k)] = v);
return G__18549;
} else
{var G__18550 = dommy.template.__GT_node_like.call(null,elem);G__18550.setAttribute(dommy.utils.as_str.call(null,k),((cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"style","style",-496642736)))?dommy.attrs.style_str.call(null,v):v));
return G__18550;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__18557__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__18551_18558 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));var chunk__18552_18559 = null;var count__18553_18560 = (0);var i__18554_18561 = (0);while(true){
if((i__18554_18561 < count__18553_18560))
{var vec__18555_18562 = cljs.core._nth.call(null,chunk__18552_18559,i__18554_18561);var k_18563__$1 = cljs.core.nth.call(null,vec__18555_18562,(0),null);var v_18564__$1 = cljs.core.nth.call(null,vec__18555_18562,(1),null);set_attr_BANG_.call(null,elem__$1,k_18563__$1,v_18564__$1);
{
var G__18565 = seq__18551_18558;
var G__18566 = chunk__18552_18559;
var G__18567 = count__18553_18560;
var G__18568 = (i__18554_18561 + (1));
seq__18551_18558 = G__18565;
chunk__18552_18559 = G__18566;
count__18553_18560 = G__18567;
i__18554_18561 = G__18568;
continue;
}
} else
{var temp__4126__auto___18569 = cljs.core.seq.call(null,seq__18551_18558);if(temp__4126__auto___18569)
{var seq__18551_18570__$1 = temp__4126__auto___18569;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18551_18570__$1))
{var c__4408__auto___18571 = cljs.core.chunk_first.call(null,seq__18551_18570__$1);{
var G__18572 = cljs.core.chunk_rest.call(null,seq__18551_18570__$1);
var G__18573 = c__4408__auto___18571;
var G__18574 = cljs.core.count.call(null,c__4408__auto___18571);
var G__18575 = (0);
seq__18551_18558 = G__18572;
chunk__18552_18559 = G__18573;
count__18553_18560 = G__18574;
i__18554_18561 = G__18575;
continue;
}
} else
{var vec__18556_18576 = cljs.core.first.call(null,seq__18551_18570__$1);var k_18577__$1 = cljs.core.nth.call(null,vec__18556_18576,(0),null);var v_18578__$1 = cljs.core.nth.call(null,vec__18556_18576,(1),null);set_attr_BANG_.call(null,elem__$1,k_18577__$1,v_18578__$1);
{
var G__18579 = cljs.core.next.call(null,seq__18551_18570__$1);
var G__18580 = null;
var G__18581 = (0);
var G__18582 = (0);
seq__18551_18558 = G__18579;
chunk__18552_18559 = G__18580;
count__18553_18560 = G__18581;
i__18554_18561 = G__18582;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__18557 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__18557__delegate.call(this,elem,k,v,kvs);};
G__18557.cljs$lang$maxFixedArity = 3;
G__18557.cljs$lang$applyTo = (function (arglist__18583){
var elem = cljs.core.first(arglist__18583);
arglist__18583 = cljs.core.next(arglist__18583);
var k = cljs.core.first(arglist__18583);
arglist__18583 = cljs.core.next(arglist__18583);
var v = cljs.core.first(arglist__18583);
var kvs = cljs.core.rest(arglist__18583);
return G__18557__delegate(elem,k,v,kvs);
});
G__18557.cljs$core$IFn$_invoke$arity$variadic = G__18557__delegate;
return G__18557;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),null,new cljs.core.Keyword(null,"classes","classes",2037804510),null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(dommy.utils.as_str.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__18592__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__18588_18593 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__18589_18594 = null;var count__18590_18595 = (0);var i__18591_18596 = (0);while(true){
if((i__18591_18596 < count__18590_18595))
{var k_18597__$1 = cljs.core._nth.call(null,chunk__18589_18594,i__18591_18596);remove_attr_BANG_.call(null,elem__$1,k_18597__$1);
{
var G__18598 = seq__18588_18593;
var G__18599 = chunk__18589_18594;
var G__18600 = count__18590_18595;
var G__18601 = (i__18591_18596 + (1));
seq__18588_18593 = G__18598;
chunk__18589_18594 = G__18599;
count__18590_18595 = G__18600;
i__18591_18596 = G__18601;
continue;
}
} else
{var temp__4126__auto___18602 = cljs.core.seq.call(null,seq__18588_18593);if(temp__4126__auto___18602)
{var seq__18588_18603__$1 = temp__4126__auto___18602;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18588_18603__$1))
{var c__4408__auto___18604 = cljs.core.chunk_first.call(null,seq__18588_18603__$1);{
var G__18605 = cljs.core.chunk_rest.call(null,seq__18588_18603__$1);
var G__18606 = c__4408__auto___18604;
var G__18607 = cljs.core.count.call(null,c__4408__auto___18604);
var G__18608 = (0);
seq__18588_18593 = G__18605;
chunk__18589_18594 = G__18606;
count__18590_18595 = G__18607;
i__18591_18596 = G__18608;
continue;
}
} else
{var k_18609__$1 = cljs.core.first.call(null,seq__18588_18603__$1);remove_attr_BANG_.call(null,elem__$1,k_18609__$1);
{
var G__18610 = cljs.core.next.call(null,seq__18588_18603__$1);
var G__18611 = null;
var G__18612 = (0);
var G__18613 = (0);
seq__18588_18593 = G__18610;
chunk__18589_18594 = G__18611;
count__18590_18595 = G__18612;
i__18591_18596 = G__18613;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__18592 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__18592__delegate.call(this,elem,k,ks);};
G__18592.cljs$lang$maxFixedArity = 2;
G__18592.cljs$lang$applyTo = (function (arglist__18614){
var elem = cljs.core.first(arglist__18614);
arglist__18614 = cljs.core.next(arglist__18614);
var k = cljs.core.first(arglist__18614);
var ks = cljs.core.rest(arglist__18614);
return G__18592__delegate(elem,k,ks);
});
G__18592.cljs$core$IFn$_invoke$arity$variadic = G__18592__delegate;
return G__18592;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(dommy.utils.as_str.call(null,k));
} else
{return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.attrs.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{return dommy.attrs.set_attr_BANG_.call(null,elem__$1,k);
} else
{return dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__18616 = dommy.template.__GT_node_like.call(null,elem);G__18616.style.display = ((show_QMARK_)?"":"none");
return G__18616;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__18618 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__18618,false);
return G__18618;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__18620 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__18620,true);
return G__18620;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){var r = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map