// Compiled by ClojureScript 0.0-2511
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){
var and__3626__auto__ = ((idx === (0))) || ((" " === class_name.charAt((idx - (1)))));
if(and__3626__auto__){
var total_len = class_name.length;
var stop = (idx + class$.length);
if((stop <= total_len)){
return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else {
return null;
}
} else {
return and__3626__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){
var start_from = (0);
while(true){
var i = class_name.indexOf(class$,start_from);
if((i >= (0))){
if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i)){
return i;
} else {
var G__28459 = (i + class$.length);
start_from = G__28459;
continue;
}
} else {
return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var class$__$1 = dommy.utils.as_str.call(null,class$);
var temp__4124__auto__ = elem__$1.classList;
if(cljs.core.truth_(temp__4124__auto__)){
var class_list = temp__4124__auto__;
return class_list.contains(class$__$1);
} else {
var temp__4126__auto__ = elem__$1.className;
if(cljs.core.truth_(temp__4126__auto__)){
var class_name = temp__4126__auto__;
var temp__4126__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);
if(cljs.core.truth_(temp__4126__auto____$1)){
var i = temp__4126__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes));
if(cljs.core.seq.call(null,classes__$1)){
var temp__4124__auto___28484 = elem__$1.classList;
if(cljs.core.truth_(temp__4124__auto___28484)){
var class_list_28485 = temp__4124__auto___28484;
var seq__28472_28486 = cljs.core.seq.call(null,classes__$1.split(/\s+/));
var chunk__28473_28487 = null;
var count__28474_28488 = (0);
var i__28475_28489 = (0);
while(true){
if((i__28475_28489 < count__28474_28488)){
var class_28490 = cljs.core._nth.call(null,chunk__28473_28487,i__28475_28489);
class_list_28485.add(class_28490);

var G__28491 = seq__28472_28486;
var G__28492 = chunk__28473_28487;
var G__28493 = count__28474_28488;
var G__28494 = (i__28475_28489 + (1));
seq__28472_28486 = G__28491;
chunk__28473_28487 = G__28492;
count__28474_28488 = G__28493;
i__28475_28489 = G__28494;
continue;
} else {
var temp__4126__auto___28495 = cljs.core.seq.call(null,seq__28472_28486);
if(temp__4126__auto___28495){
var seq__28472_28496__$1 = temp__4126__auto___28495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28472_28496__$1)){
var c__4425__auto___28497 = cljs.core.chunk_first.call(null,seq__28472_28496__$1);
var G__28498 = cljs.core.chunk_rest.call(null,seq__28472_28496__$1);
var G__28499 = c__4425__auto___28497;
var G__28500 = cljs.core.count.call(null,c__4425__auto___28497);
var G__28501 = (0);
seq__28472_28486 = G__28498;
chunk__28473_28487 = G__28499;
count__28474_28488 = G__28500;
i__28475_28489 = G__28501;
continue;
} else {
var class_28502 = cljs.core.first.call(null,seq__28472_28496__$1);
class_list_28485.add(class_28502);

var G__28503 = cljs.core.next.call(null,seq__28472_28496__$1);
var G__28504 = null;
var G__28505 = (0);
var G__28506 = (0);
seq__28472_28486 = G__28503;
chunk__28473_28487 = G__28504;
count__28474_28488 = G__28505;
i__28475_28489 = G__28506;
continue;
}
} else {
}
}
break;
}
} else {
var seq__28476_28507 = cljs.core.seq.call(null,classes__$1.split(/\s+/));
var chunk__28477_28508 = null;
var count__28478_28509 = (0);
var i__28479_28510 = (0);
while(true){
if((i__28479_28510 < count__28478_28509)){
var class_28511 = cljs.core._nth.call(null,chunk__28477_28508,i__28479_28510);
var class_name_28512 = elem__$1.className;
if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_28512,class_28511))){
} else {
elem__$1.className = (((class_name_28512 === ""))?class_28511:[cljs.core.str(class_name_28512),cljs.core.str(" "),cljs.core.str(class_28511)].join(''));
}

var G__28513 = seq__28476_28507;
var G__28514 = chunk__28477_28508;
var G__28515 = count__28478_28509;
var G__28516 = (i__28479_28510 + (1));
seq__28476_28507 = G__28513;
chunk__28477_28508 = G__28514;
count__28478_28509 = G__28515;
i__28479_28510 = G__28516;
continue;
} else {
var temp__4126__auto___28517 = cljs.core.seq.call(null,seq__28476_28507);
if(temp__4126__auto___28517){
var seq__28476_28518__$1 = temp__4126__auto___28517;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28476_28518__$1)){
var c__4425__auto___28519 = cljs.core.chunk_first.call(null,seq__28476_28518__$1);
var G__28520 = cljs.core.chunk_rest.call(null,seq__28476_28518__$1);
var G__28521 = c__4425__auto___28519;
var G__28522 = cljs.core.count.call(null,c__4425__auto___28519);
var G__28523 = (0);
seq__28476_28507 = G__28520;
chunk__28477_28508 = G__28521;
count__28478_28509 = G__28522;
i__28479_28510 = G__28523;
continue;
} else {
var class_28524 = cljs.core.first.call(null,seq__28476_28518__$1);
var class_name_28525 = elem__$1.className;
if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_28525,class_28524))){
} else {
elem__$1.className = (((class_name_28525 === ""))?class_28524:[cljs.core.str(class_name_28525),cljs.core.str(" "),cljs.core.str(class_28524)].join(''));
}

var G__28526 = cljs.core.next.call(null,seq__28476_28518__$1);
var G__28527 = null;
var G__28528 = (0);
var G__28529 = (0);
seq__28476_28507 = G__28526;
chunk__28477_28508 = G__28527;
count__28478_28509 = G__28528;
i__28479_28510 = G__28529;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__28530__delegate = function (elem,classes,more_classes){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__28480_28531 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__28481_28532 = null;
var count__28482_28533 = (0);
var i__28483_28534 = (0);
while(true){
if((i__28483_28534 < count__28482_28533)){
var c_28535 = cljs.core._nth.call(null,chunk__28481_28532,i__28483_28534);
add_class_BANG_.call(null,elem__$1,c_28535);

var G__28536 = seq__28480_28531;
var G__28537 = chunk__28481_28532;
var G__28538 = count__28482_28533;
var G__28539 = (i__28483_28534 + (1));
seq__28480_28531 = G__28536;
chunk__28481_28532 = G__28537;
count__28482_28533 = G__28538;
i__28483_28534 = G__28539;
continue;
} else {
var temp__4126__auto___28540 = cljs.core.seq.call(null,seq__28480_28531);
if(temp__4126__auto___28540){
var seq__28480_28541__$1 = temp__4126__auto___28540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28480_28541__$1)){
var c__4425__auto___28542 = cljs.core.chunk_first.call(null,seq__28480_28541__$1);
var G__28543 = cljs.core.chunk_rest.call(null,seq__28480_28541__$1);
var G__28544 = c__4425__auto___28542;
var G__28545 = cljs.core.count.call(null,c__4425__auto___28542);
var G__28546 = (0);
seq__28480_28531 = G__28543;
chunk__28481_28532 = G__28544;
count__28482_28533 = G__28545;
i__28483_28534 = G__28546;
continue;
} else {
var c_28547 = cljs.core.first.call(null,seq__28480_28541__$1);
add_class_BANG_.call(null,elem__$1,c_28547);

var G__28548 = cljs.core.next.call(null,seq__28480_28541__$1);
var G__28549 = null;
var G__28550 = (0);
var G__28551 = (0);
seq__28480_28531 = G__28548;
chunk__28481_28532 = G__28549;
count__28482_28533 = G__28550;
i__28483_28534 = G__28551;
continue;
}
} else {
}
}
break;
}

return elem__$1;
};
var G__28530 = function (elem,classes,var_args){
var more_classes = null;
if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__28530__delegate.call(this,elem,classes,more_classes);};
G__28530.cljs$lang$maxFixedArity = 2;
G__28530.cljs$lang$applyTo = (function (arglist__28552){
var elem = cljs.core.first(arglist__28552);
arglist__28552 = cljs.core.next(arglist__28552);
var classes = cljs.core.first(arglist__28552);
var more_classes = cljs.core.rest(arglist__28552);
return G__28530__delegate(elem,classes,more_classes);
});
G__28530.cljs$core$IFn$_invoke$arity$variadic = G__28530__delegate;
return G__28530;
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
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){
var class_name = init_class_name;
while(true){
var class_len = class_name.length;
var temp__4124__auto__ = dommy.attrs.class_index.call(null,class_name,class$);
if(cljs.core.truth_(temp__4124__auto__)){
var i = temp__4124__auto__;
var G__28553 = (function (){var end = (i + class$.length);
return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring((0),i)),cljs.core.str(class_name.substr((end + (1))))].join(''):class_name.substring((0),(i - (1)))))].join('');
})();
class_name = G__28553;
continue;
} else {
return class_name;
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
var remove_class_BANG___2 = (function (elem,class$){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var class$__$1 = dommy.utils.as_str.call(null,class$);
var temp__4124__auto___28562 = elem__$1.classList;
if(cljs.core.truth_(temp__4124__auto___28562)){
var class_list_28563 = temp__4124__auto___28562;
class_list_28563.remove(class$__$1);
} else {
var class_name_28564 = elem__$1.className;
var new_class_name_28565 = dommy.attrs.remove_class_str.call(null,class_name_28564,class$__$1);
if((class_name_28564 === new_class_name_28565)){
} else {
elem__$1.className = new_class_name_28565;
}
}

return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__28566__delegate = function (elem,class$,classes){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__28558 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__28559 = null;
var count__28560 = (0);
var i__28561 = (0);
while(true){
if((i__28561 < count__28560)){
var c = cljs.core._nth.call(null,chunk__28559,i__28561);
remove_class_BANG_.call(null,elem__$1,c);

var G__28567 = seq__28558;
var G__28568 = chunk__28559;
var G__28569 = count__28560;
var G__28570 = (i__28561 + (1));
seq__28558 = G__28567;
chunk__28559 = G__28568;
count__28560 = G__28569;
i__28561 = G__28570;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__28558);
if(temp__4126__auto__){
var seq__28558__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28558__$1)){
var c__4425__auto__ = cljs.core.chunk_first.call(null,seq__28558__$1);
var G__28571 = cljs.core.chunk_rest.call(null,seq__28558__$1);
var G__28572 = c__4425__auto__;
var G__28573 = cljs.core.count.call(null,c__4425__auto__);
var G__28574 = (0);
seq__28558 = G__28571;
chunk__28559 = G__28572;
count__28560 = G__28573;
i__28561 = G__28574;
continue;
} else {
var c = cljs.core.first.call(null,seq__28558__$1);
remove_class_BANG_.call(null,elem__$1,c);

var G__28575 = cljs.core.next.call(null,seq__28558__$1);
var G__28576 = null;
var G__28577 = (0);
var G__28578 = (0);
seq__28558 = G__28575;
chunk__28559 = G__28576;
count__28560 = G__28577;
i__28561 = G__28578;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__28566 = function (elem,class$,var_args){
var classes = null;
if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__28566__delegate.call(this,elem,class$,classes);};
G__28566.cljs$lang$maxFixedArity = 2;
G__28566.cljs$lang$applyTo = (function (arglist__28579){
var elem = cljs.core.first(arglist__28579);
arglist__28579 = cljs.core.next(arglist__28579);
var class$ = cljs.core.first(arglist__28579);
var classes = cljs.core.rest(arglist__28579);
return G__28566__delegate(elem,class$,classes);
});
G__28566.cljs$core$IFn$_invoke$arity$variadic = G__28566__delegate;
return G__28566;
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
var toggle_class_BANG___2 = (function (elem,class$){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var class$__$1 = dommy.utils.as_str.call(null,class$);
var temp__4124__auto___28580 = elem__$1.classList;
if(cljs.core.truth_(temp__4124__auto___28580)){
var class_list_28581 = temp__4124__auto___28580;
class_list_28581.toggle(class$__$1);
} else {
toggle_class_BANG_.call(null,elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
}

return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
if(add_QMARK_){
dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else {
dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
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
dommy.attrs.style_str = (function style_str(x){
if(typeof x === 'string'){
return x;
} else {
return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__28584){
var vec__28585 = p__28584;
var k = cljs.core.nth.call(null,vec__28585,(0),null);
var v = cljs.core.nth.call(null,vec__28585,(1),null);
return [cljs.core.str(dommy.utils.as_str.call(null,k)),cljs.core.str(":"),cljs.core.str(dommy.utils.as_str.call(null,v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var style = elem__$1.style;
var seq__28592_28598 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__28593_28599 = null;
var count__28594_28600 = (0);
var i__28595_28601 = (0);
while(true){
if((i__28595_28601 < count__28594_28600)){
var vec__28596_28602 = cljs.core._nth.call(null,chunk__28593_28599,i__28595_28601);
var k_28603 = cljs.core.nth.call(null,vec__28596_28602,(0),null);
var v_28604 = cljs.core.nth.call(null,vec__28596_28602,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_28603),v_28604);

var G__28605 = seq__28592_28598;
var G__28606 = chunk__28593_28599;
var G__28607 = count__28594_28600;
var G__28608 = (i__28595_28601 + (1));
seq__28592_28598 = G__28605;
chunk__28593_28599 = G__28606;
count__28594_28600 = G__28607;
i__28595_28601 = G__28608;
continue;
} else {
var temp__4126__auto___28609 = cljs.core.seq.call(null,seq__28592_28598);
if(temp__4126__auto___28609){
var seq__28592_28610__$1 = temp__4126__auto___28609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28592_28610__$1)){
var c__4425__auto___28611 = cljs.core.chunk_first.call(null,seq__28592_28610__$1);
var G__28612 = cljs.core.chunk_rest.call(null,seq__28592_28610__$1);
var G__28613 = c__4425__auto___28611;
var G__28614 = cljs.core.count.call(null,c__4425__auto___28611);
var G__28615 = (0);
seq__28592_28598 = G__28612;
chunk__28593_28599 = G__28613;
count__28594_28600 = G__28614;
i__28595_28601 = G__28615;
continue;
} else {
var vec__28597_28616 = cljs.core.first.call(null,seq__28592_28610__$1);
var k_28617 = cljs.core.nth.call(null,vec__28597_28616,(0),null);
var v_28618 = cljs.core.nth.call(null,vec__28597_28616,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_28617),v_28618);

var G__28619 = cljs.core.next.call(null,seq__28592_28610__$1);
var G__28620 = null;
var G__28621 = (0);
var G__28622 = (0);
seq__28592_28598 = G__28619;
chunk__28593_28599 = G__28620;
count__28594_28600 = G__28621;
i__28595_28601 = G__28622;
continue;
}
} else {
}
}
break;
}

return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;
if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__28623){
var elem = cljs.core.first(arglist__28623);
var kvs = cljs.core.rest(arglist__28623);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){
if(cljs.core.truth_(k)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-505765866,null)))].join('')));
}

return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__28630_28636 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__28631_28637 = null;
var count__28632_28638 = (0);
var i__28633_28639 = (0);
while(true){
if((i__28633_28639 < count__28632_28638)){
var vec__28634_28640 = cljs.core._nth.call(null,chunk__28631_28637,i__28633_28639);
var k_28641 = cljs.core.nth.call(null,vec__28634_28640,(0),null);
var v_28642 = cljs.core.nth.call(null,vec__28634_28640,(1),null);
dommy.attrs.set_style_BANG_.call(null,elem__$1,k_28641,[cljs.core.str(v_28642),cljs.core.str("px")].join(''));

var G__28643 = seq__28630_28636;
var G__28644 = chunk__28631_28637;
var G__28645 = count__28632_28638;
var G__28646 = (i__28633_28639 + (1));
seq__28630_28636 = G__28643;
chunk__28631_28637 = G__28644;
count__28632_28638 = G__28645;
i__28633_28639 = G__28646;
continue;
} else {
var temp__4126__auto___28647 = cljs.core.seq.call(null,seq__28630_28636);
if(temp__4126__auto___28647){
var seq__28630_28648__$1 = temp__4126__auto___28647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28630_28648__$1)){
var c__4425__auto___28649 = cljs.core.chunk_first.call(null,seq__28630_28648__$1);
var G__28650 = cljs.core.chunk_rest.call(null,seq__28630_28648__$1);
var G__28651 = c__4425__auto___28649;
var G__28652 = cljs.core.count.call(null,c__4425__auto___28649);
var G__28653 = (0);
seq__28630_28636 = G__28650;
chunk__28631_28637 = G__28651;
count__28632_28638 = G__28652;
i__28633_28639 = G__28653;
continue;
} else {
var vec__28635_28654 = cljs.core.first.call(null,seq__28630_28648__$1);
var k_28655 = cljs.core.nth.call(null,vec__28635_28654,(0),null);
var v_28656 = cljs.core.nth.call(null,vec__28635_28654,(1),null);
dommy.attrs.set_style_BANG_.call(null,elem__$1,k_28655,[cljs.core.str(v_28656),cljs.core.str("px")].join(''));

var G__28657 = cljs.core.next.call(null,seq__28630_28648__$1);
var G__28658 = null;
var G__28659 = (0);
var G__28660 = (0);
seq__28630_28636 = G__28657;
chunk__28631_28637 = G__28658;
count__28632_28638 = G__28659;
i__28633_28639 = G__28660;
continue;
}
} else {
}
}
break;
}

return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;
if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__28661){
var elem = cljs.core.first(arglist__28661);
var kvs = cljs.core.rest(arglist__28661);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){
var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
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
var set_attr_BANG___2 = (function (elem,k){
return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__28670 = dommy.template.__GT_node_like.call(null,elem);
(G__28670[dommy.utils.as_str.call(null,k)] = v);

return G__28670;
} else {
var G__28671 = dommy.template.__GT_node_like.call(null,elem);
G__28671.setAttribute(dommy.utils.as_str.call(null,k),((cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"style","style",-496642736)))?dommy.attrs.style_str.call(null,v):v));

return G__28671;
}
} else {
return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__28678__delegate = function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__28672_28679 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__28673_28680 = null;
var count__28674_28681 = (0);
var i__28675_28682 = (0);
while(true){
if((i__28675_28682 < count__28674_28681)){
var vec__28676_28683 = cljs.core._nth.call(null,chunk__28673_28680,i__28675_28682);
var k_28684__$1 = cljs.core.nth.call(null,vec__28676_28683,(0),null);
var v_28685__$1 = cljs.core.nth.call(null,vec__28676_28683,(1),null);
set_attr_BANG_.call(null,elem__$1,k_28684__$1,v_28685__$1);

var G__28686 = seq__28672_28679;
var G__28687 = chunk__28673_28680;
var G__28688 = count__28674_28681;
var G__28689 = (i__28675_28682 + (1));
seq__28672_28679 = G__28686;
chunk__28673_28680 = G__28687;
count__28674_28681 = G__28688;
i__28675_28682 = G__28689;
continue;
} else {
var temp__4126__auto___28690 = cljs.core.seq.call(null,seq__28672_28679);
if(temp__4126__auto___28690){
var seq__28672_28691__$1 = temp__4126__auto___28690;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28672_28691__$1)){
var c__4425__auto___28692 = cljs.core.chunk_first.call(null,seq__28672_28691__$1);
var G__28693 = cljs.core.chunk_rest.call(null,seq__28672_28691__$1);
var G__28694 = c__4425__auto___28692;
var G__28695 = cljs.core.count.call(null,c__4425__auto___28692);
var G__28696 = (0);
seq__28672_28679 = G__28693;
chunk__28673_28680 = G__28694;
count__28674_28681 = G__28695;
i__28675_28682 = G__28696;
continue;
} else {
var vec__28677_28697 = cljs.core.first.call(null,seq__28672_28691__$1);
var k_28698__$1 = cljs.core.nth.call(null,vec__28677_28697,(0),null);
var v_28699__$1 = cljs.core.nth.call(null,vec__28677_28697,(1),null);
set_attr_BANG_.call(null,elem__$1,k_28698__$1,v_28699__$1);

var G__28700 = cljs.core.next.call(null,seq__28672_28691__$1);
var G__28701 = null;
var G__28702 = (0);
var G__28703 = (0);
seq__28672_28679 = G__28700;
chunk__28673_28680 = G__28701;
count__28674_28681 = G__28702;
i__28675_28682 = G__28703;
continue;
}
} else {
}
}
break;
}

return elem__$1;
};
var G__28678 = function (elem,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__28678__delegate.call(this,elem,k,v,kvs);};
G__28678.cljs$lang$maxFixedArity = 3;
G__28678.cljs$lang$applyTo = (function (arglist__28704){
var elem = cljs.core.first(arglist__28704);
arglist__28704 = cljs.core.next(arglist__28704);
var k = cljs.core.first(arglist__28704);
arglist__28704 = cljs.core.next(arglist__28704);
var v = cljs.core.first(arglist__28704);
var kvs = cljs.core.rest(arglist__28704);
return G__28678__delegate(elem,k,v,kvs);
});
G__28678.cljs$core$IFn$_invoke$arity$variadic = G__28678__delegate;
return G__28678;
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
var remove_attr_BANG___2 = (function (elem,k){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),null,new cljs.core.Keyword(null,"classes","classes",2037804510),null], null), null).call(null,k))){
elem__$1.className = "";
} else {
elem__$1.removeAttribute(dommy.utils.as_str.call(null,k));
}

return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__28713__delegate = function (elem,k,ks){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__28709_28714 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__28710_28715 = null;
var count__28711_28716 = (0);
var i__28712_28717 = (0);
while(true){
if((i__28712_28717 < count__28711_28716)){
var k_28718__$1 = cljs.core._nth.call(null,chunk__28710_28715,i__28712_28717);
remove_attr_BANG_.call(null,elem__$1,k_28718__$1);

var G__28719 = seq__28709_28714;
var G__28720 = chunk__28710_28715;
var G__28721 = count__28711_28716;
var G__28722 = (i__28712_28717 + (1));
seq__28709_28714 = G__28719;
chunk__28710_28715 = G__28720;
count__28711_28716 = G__28721;
i__28712_28717 = G__28722;
continue;
} else {
var temp__4126__auto___28723 = cljs.core.seq.call(null,seq__28709_28714);
if(temp__4126__auto___28723){
var seq__28709_28724__$1 = temp__4126__auto___28723;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28709_28724__$1)){
var c__4425__auto___28725 = cljs.core.chunk_first.call(null,seq__28709_28724__$1);
var G__28726 = cljs.core.chunk_rest.call(null,seq__28709_28724__$1);
var G__28727 = c__4425__auto___28725;
var G__28728 = cljs.core.count.call(null,c__4425__auto___28725);
var G__28729 = (0);
seq__28709_28714 = G__28726;
chunk__28710_28715 = G__28727;
count__28711_28716 = G__28728;
i__28712_28717 = G__28729;
continue;
} else {
var k_28730__$1 = cljs.core.first.call(null,seq__28709_28724__$1);
remove_attr_BANG_.call(null,elem__$1,k_28730__$1);

var G__28731 = cljs.core.next.call(null,seq__28709_28724__$1);
var G__28732 = null;
var G__28733 = (0);
var G__28734 = (0);
seq__28709_28714 = G__28731;
chunk__28710_28715 = G__28732;
count__28711_28716 = G__28733;
i__28712_28717 = G__28734;
continue;
}
} else {
}
}
break;
}

return elem__$1;
};
var G__28713 = function (elem,k,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__28713__delegate.call(this,elem,k,ks);};
G__28713.cljs$lang$maxFixedArity = 2;
G__28713.cljs$lang$applyTo = (function (arglist__28735){
var elem = cljs.core.first(arglist__28735);
arglist__28735 = cljs.core.next(arglist__28735);
var k = cljs.core.first(arglist__28735);
var ks = cljs.core.rest(arglist__28735);
return G__28713__delegate(elem,k,ks);
});
G__28713.cljs$core$IFn$_invoke$arity$variadic = G__28713__delegate;
return G__28713;
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
dommy.attrs.attr = (function attr(elem,k){
if(cljs.core.truth_(k)){
return dommy.template.__GT_node_like.call(null,elem).getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){
return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.attrs.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
if(add_QMARK_){
return dommy.attrs.set_attr_BANG_.call(null,elem__$1,k);
} else {
return dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k);
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
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){
return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));

return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){
var G__28737 = dommy.template.__GT_node_like.call(null,elem);
G__28737.style.display = ((show_QMARK_)?"":"none");

return G__28737;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){
var G__28739 = dommy.template.__GT_node_like.call(null,elem);
dommy.attrs.toggle_BANG_.call(null,G__28739,false);

return G__28739;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){
var G__28741 = dommy.template.__GT_node_like.call(null,elem);
dommy.attrs.toggle_BANG_.call(null,G__28741,true);

return G__28741;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){
var r = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));
if((window.innerHeight < (top + elem__$1.offsetHeight))){
return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});

//# sourceMappingURL=attrs.js.map