// Compiled by ClojureScript 1.9.293 {}
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * does class-name string have class starting at index idx.
 * only will be used when Element::classList doesn't exist
 */
dommy.attrs.class_match_QMARK_ = (function dommy$attrs$class_match_QMARK_(class_name,class$,idx){
var and__6531__auto__ = ((idx === (0))) || ((" " === class_name.charAt((idx - (1)))));
if(and__6531__auto__){
var total_len = class_name.length;
var stop = (idx + class$.length);
if((stop <= total_len)){
return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else {
return null;
}
} else {
return and__6531__auto__;
}
});
/**
 * Finds the index of class in a space-delimited class-name
 *  only will be used when Element::classList doesn't exist
 */
dommy.attrs.class_index = (function dommy$attrs$class_index(class_name,class$){
var start_from = (0);
while(true){
var i = class_name.indexOf(class$,start_from);
if((i >= (0))){
if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i)){
return i;
} else {
var G__42644 = (i + class$.length);
start_from = G__42644;
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
dommy.attrs.has_class_QMARK_ = (function dommy$attrs$has_class_QMARK_(elem,class$){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var class$__$1 = dommy.utils.as_str.call(null,class$);
var temp__4655__auto__ = elem__$1.classList;
if(cljs.core.truth_(temp__4655__auto__)){
var class_list = temp__4655__auto__;
return class_list.contains(class$__$1);
} else {
var temp__4657__auto__ = elem__$1.className;
if(cljs.core.truth_(temp__4657__auto__)){
var class_name = temp__4657__auto__;
var temp__4657__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);
if(cljs.core.truth_(temp__4657__auto____$1)){
var i = temp__4657__auto____$1;
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
 */
dommy.attrs.add_class_BANG_ = (function dommy$attrs$add_class_BANG_(var_args){
var args42645 = [];
var len__7651__auto___42663 = arguments.length;
var i__7652__auto___42664 = (0);
while(true){
if((i__7652__auto___42664 < len__7651__auto___42663)){
args42645.push((arguments[i__7652__auto___42664]));

var G__42665 = (i__7652__auto___42664 + (1));
i__7652__auto___42664 = G__42665;
continue;
} else {
}
break;
}

var G__42650 = args42645.length;
switch (G__42650) {
case 2:
return dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args42645.slice((2)),(0),null));
return dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7670__auto__);

}
});

dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes));
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___42667 = elem__$1.classList;
if(cljs.core.truth_(temp__4655__auto___42667)){
var class_list_42668 = temp__4655__auto___42667;
var seq__42651_42669 = cljs.core.seq.call(null,classes__$1.split(/\s+/));
var chunk__42652_42670 = null;
var count__42653_42671 = (0);
var i__42654_42672 = (0);
while(true){
if((i__42654_42672 < count__42653_42671)){
var class_42673 = cljs.core._nth.call(null,chunk__42652_42670,i__42654_42672);
class_list_42668.add(class_42673);

var G__42674 = seq__42651_42669;
var G__42675 = chunk__42652_42670;
var G__42676 = count__42653_42671;
var G__42677 = (i__42654_42672 + (1));
seq__42651_42669 = G__42674;
chunk__42652_42670 = G__42675;
count__42653_42671 = G__42676;
i__42654_42672 = G__42677;
continue;
} else {
var temp__4657__auto___42678 = cljs.core.seq.call(null,seq__42651_42669);
if(temp__4657__auto___42678){
var seq__42651_42679__$1 = temp__4657__auto___42678;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42651_42679__$1)){
var c__7357__auto___42680 = cljs.core.chunk_first.call(null,seq__42651_42679__$1);
var G__42681 = cljs.core.chunk_rest.call(null,seq__42651_42679__$1);
var G__42682 = c__7357__auto___42680;
var G__42683 = cljs.core.count.call(null,c__7357__auto___42680);
var G__42684 = (0);
seq__42651_42669 = G__42681;
chunk__42652_42670 = G__42682;
count__42653_42671 = G__42683;
i__42654_42672 = G__42684;
continue;
} else {
var class_42685 = cljs.core.first.call(null,seq__42651_42679__$1);
class_list_42668.add(class_42685);

var G__42686 = cljs.core.next.call(null,seq__42651_42679__$1);
var G__42687 = null;
var G__42688 = (0);
var G__42689 = (0);
seq__42651_42669 = G__42686;
chunk__42652_42670 = G__42687;
count__42653_42671 = G__42688;
i__42654_42672 = G__42689;
continue;
}
} else {
}
}
break;
}
} else {
var seq__42655_42690 = cljs.core.seq.call(null,classes__$1.split(/\s+/));
var chunk__42656_42691 = null;
var count__42657_42692 = (0);
var i__42658_42693 = (0);
while(true){
if((i__42658_42693 < count__42657_42692)){
var class_42694 = cljs.core._nth.call(null,chunk__42656_42691,i__42658_42693);
var class_name_42695 = elem__$1.className;
if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_42695,class_42694))){
} else {
elem__$1.className = (((class_name_42695 === ""))?class_42694:[cljs.core.str(class_name_42695),cljs.core.str(" "),cljs.core.str(class_42694)].join(''));
}

var G__42696 = seq__42655_42690;
var G__42697 = chunk__42656_42691;
var G__42698 = count__42657_42692;
var G__42699 = (i__42658_42693 + (1));
seq__42655_42690 = G__42696;
chunk__42656_42691 = G__42697;
count__42657_42692 = G__42698;
i__42658_42693 = G__42699;
continue;
} else {
var temp__4657__auto___42700 = cljs.core.seq.call(null,seq__42655_42690);
if(temp__4657__auto___42700){
var seq__42655_42701__$1 = temp__4657__auto___42700;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42655_42701__$1)){
var c__7357__auto___42702 = cljs.core.chunk_first.call(null,seq__42655_42701__$1);
var G__42703 = cljs.core.chunk_rest.call(null,seq__42655_42701__$1);
var G__42704 = c__7357__auto___42702;
var G__42705 = cljs.core.count.call(null,c__7357__auto___42702);
var G__42706 = (0);
seq__42655_42690 = G__42703;
chunk__42656_42691 = G__42704;
count__42657_42692 = G__42705;
i__42658_42693 = G__42706;
continue;
} else {
var class_42707 = cljs.core.first.call(null,seq__42655_42701__$1);
var class_name_42708 = elem__$1.className;
if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_42708,class_42707))){
} else {
elem__$1.className = (((class_name_42708 === ""))?class_42707:[cljs.core.str(class_name_42708),cljs.core.str(" "),cljs.core.str(class_42707)].join(''));
}

var G__42709 = cljs.core.next.call(null,seq__42655_42701__$1);
var G__42710 = null;
var G__42711 = (0);
var G__42712 = (0);
seq__42655_42690 = G__42709;
chunk__42656_42691 = G__42710;
count__42657_42692 = G__42711;
i__42658_42693 = G__42712;
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

dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__42659_42713 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__42660_42714 = null;
var count__42661_42715 = (0);
var i__42662_42716 = (0);
while(true){
if((i__42662_42716 < count__42661_42715)){
var c_42717 = cljs.core._nth.call(null,chunk__42660_42714,i__42662_42716);
dommy.attrs.add_class_BANG_.call(null,elem__$1,c_42717);

var G__42718 = seq__42659_42713;
var G__42719 = chunk__42660_42714;
var G__42720 = count__42661_42715;
var G__42721 = (i__42662_42716 + (1));
seq__42659_42713 = G__42718;
chunk__42660_42714 = G__42719;
count__42661_42715 = G__42720;
i__42662_42716 = G__42721;
continue;
} else {
var temp__4657__auto___42722 = cljs.core.seq.call(null,seq__42659_42713);
if(temp__4657__auto___42722){
var seq__42659_42723__$1 = temp__4657__auto___42722;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42659_42723__$1)){
var c__7357__auto___42724 = cljs.core.chunk_first.call(null,seq__42659_42723__$1);
var G__42725 = cljs.core.chunk_rest.call(null,seq__42659_42723__$1);
var G__42726 = c__7357__auto___42724;
var G__42727 = cljs.core.count.call(null,c__7357__auto___42724);
var G__42728 = (0);
seq__42659_42713 = G__42725;
chunk__42660_42714 = G__42726;
count__42661_42715 = G__42727;
i__42662_42716 = G__42728;
continue;
} else {
var c_42729 = cljs.core.first.call(null,seq__42659_42723__$1);
dommy.attrs.add_class_BANG_.call(null,elem__$1,c_42729);

var G__42730 = cljs.core.next.call(null,seq__42659_42723__$1);
var G__42731 = null;
var G__42732 = (0);
var G__42733 = (0);
seq__42659_42713 = G__42730;
chunk__42660_42714 = G__42731;
count__42661_42715 = G__42732;
i__42662_42716 = G__42733;
continue;
}
} else {
}
}
break;
}

return elem__$1;
});

dommy.attrs.add_class_BANG_.cljs$lang$applyTo = (function (seq42646){
var G__42647 = cljs.core.first.call(null,seq42646);
var seq42646__$1 = cljs.core.next.call(null,seq42646);
var G__42648 = cljs.core.first.call(null,seq42646__$1);
var seq42646__$2 = cljs.core.next.call(null,seq42646__$1);
return dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42647,G__42648,seq42646__$2);
});

dommy.attrs.add_class_BANG_.cljs$lang$maxFixedArity = (2);

dommy.attrs.remove_class_str = (function dommy$attrs$remove_class_str(init_class_name,class$){
var class_name = init_class_name;
while(true){
var class_len = class_name.length;
var temp__4655__auto__ = dommy.attrs.class_index.call(null,class_name,class$);
if(cljs.core.truth_(temp__4655__auto__)){
var i = temp__4655__auto__;
var G__42734 = (function (){var end = (i + class$.length);
return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring((0),i)),cljs.core.str(class_name.substr((end + (1))))].join(''):class_name.substring((0),(i - (1)))))].join('');
})();
class_name = G__42734;
continue;
} else {
return class_name;
}
break;
}
});
/**
 * remove class from and returns `elem`
 */
dommy.attrs.remove_class_BANG_ = (function dommy$attrs$remove_class_BANG_(var_args){
var args42735 = [];
var len__7651__auto___42745 = arguments.length;
var i__7652__auto___42746 = (0);
while(true){
if((i__7652__auto___42746 < len__7651__auto___42745)){
args42735.push((arguments[i__7652__auto___42746]));

var G__42747 = (i__7652__auto___42746 + (1));
i__7652__auto___42746 = G__42747;
continue;
} else {
}
break;
}

var G__42740 = args42735.length;
switch (G__42740) {
case 2:
return dommy.attrs.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args42735.slice((2)),(0),null));
return dommy.attrs.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7670__auto__);

}
});

dommy.attrs.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,class$){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var class$__$1 = dommy.utils.as_str.call(null,class$);
var temp__4655__auto___42749 = elem__$1.classList;
if(cljs.core.truth_(temp__4655__auto___42749)){
var class_list_42750 = temp__4655__auto___42749;
class_list_42750.remove(class$__$1);
} else {
var class_name_42751 = elem__$1.className;
var new_class_name_42752 = dommy.attrs.remove_class_str.call(null,class_name_42751,class$__$1);
if((class_name_42751 === new_class_name_42752)){
} else {
elem__$1.className = new_class_name_42752;
}
}

return elem__$1;
});

dommy.attrs.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__42741 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__42742 = null;
var count__42743 = (0);
var i__42744 = (0);
while(true){
if((i__42744 < count__42743)){
var c = cljs.core._nth.call(null,chunk__42742,i__42744);
dommy.attrs.remove_class_BANG_.call(null,elem__$1,c);

var G__42753 = seq__42741;
var G__42754 = chunk__42742;
var G__42755 = count__42743;
var G__42756 = (i__42744 + (1));
seq__42741 = G__42753;
chunk__42742 = G__42754;
count__42743 = G__42755;
i__42744 = G__42756;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42741);
if(temp__4657__auto__){
var seq__42741__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42741__$1)){
var c__7357__auto__ = cljs.core.chunk_first.call(null,seq__42741__$1);
var G__42757 = cljs.core.chunk_rest.call(null,seq__42741__$1);
var G__42758 = c__7357__auto__;
var G__42759 = cljs.core.count.call(null,c__7357__auto__);
var G__42760 = (0);
seq__42741 = G__42757;
chunk__42742 = G__42758;
count__42743 = G__42759;
i__42744 = G__42760;
continue;
} else {
var c = cljs.core.first.call(null,seq__42741__$1);
dommy.attrs.remove_class_BANG_.call(null,elem__$1,c);

var G__42761 = cljs.core.next.call(null,seq__42741__$1);
var G__42762 = null;
var G__42763 = (0);
var G__42764 = (0);
seq__42741 = G__42761;
chunk__42742 = G__42762;
count__42743 = G__42763;
i__42744 = G__42764;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.attrs.remove_class_BANG_.cljs$lang$applyTo = (function (seq42736){
var G__42737 = cljs.core.first.call(null,seq42736);
var seq42736__$1 = cljs.core.next.call(null,seq42736);
var G__42738 = cljs.core.first.call(null,seq42736__$1);
var seq42736__$2 = cljs.core.next.call(null,seq42736__$1);
return dommy.attrs.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42737,G__42738,seq42736__$2);
});

dommy.attrs.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.attrs.toggle_class_BANG_ = (function dommy$attrs$toggle_class_BANG_(var_args){
var args42765 = [];
var len__7651__auto___42768 = arguments.length;
var i__7652__auto___42769 = (0);
while(true){
if((i__7652__auto___42769 < len__7651__auto___42768)){
args42765.push((arguments[i__7652__auto___42769]));

var G__42770 = (i__7652__auto___42769 + (1));
i__7652__auto___42769 = G__42770;
continue;
} else {
}
break;
}

var G__42767 = args42765.length;
switch (G__42767) {
case 2:
return dommy.attrs.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.attrs.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42765.length)].join('')));

}
});

dommy.attrs.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,class$){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var class$__$1 = dommy.utils.as_str.call(null,class$);
var temp__4655__auto___42772 = elem__$1.classList;
if(cljs.core.truth_(temp__4655__auto___42772)){
var class_list_42773 = temp__4655__auto___42772;
class_list_42773.toggle(class$__$1);
} else {
dommy.attrs.toggle_class_BANG_.call(null,elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
}

return elem__$1;
});

dommy.attrs.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
if(add_QMARK_){
dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else {
dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}

return elem__$1;
});

dommy.attrs.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;

dommy.attrs.style_str = (function dommy$attrs$style_str(x){
if(typeof x === 'string'){
return x;
} else {
return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__42778){
var vec__42779 = p__42778;
var k = cljs.core.nth.call(null,vec__42779,(0),null);
var v = cljs.core.nth.call(null,vec__42779,(1),null);
return [cljs.core.str(dommy.utils.as_str.call(null,k)),cljs.core.str(":"),cljs.core.str(dommy.utils.as_str.call(null,v)),cljs.core.str(";")].join('');
}),x));
}
});
dommy.attrs.set_style_BANG_ = (function dommy$attrs$set_style_BANG_(var_args){
var args__7658__auto__ = [];
var len__7651__auto___42794 = arguments.length;
var i__7652__auto___42795 = (0);
while(true){
if((i__7652__auto___42795 < len__7651__auto___42794)){
args__7658__auto__.push((arguments[i__7652__auto___42795]));

var G__42796 = (i__7652__auto___42795 + (1));
i__7652__auto___42795 = G__42796;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var style = elem__$1.style;
var seq__42784_42797 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__42785_42798 = null;
var count__42786_42799 = (0);
var i__42787_42800 = (0);
while(true){
if((i__42787_42800 < count__42786_42799)){
var vec__42788_42801 = cljs.core._nth.call(null,chunk__42785_42798,i__42787_42800);
var k_42802 = cljs.core.nth.call(null,vec__42788_42801,(0),null);
var v_42803 = cljs.core.nth.call(null,vec__42788_42801,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_42802),v_42803);

var G__42804 = seq__42784_42797;
var G__42805 = chunk__42785_42798;
var G__42806 = count__42786_42799;
var G__42807 = (i__42787_42800 + (1));
seq__42784_42797 = G__42804;
chunk__42785_42798 = G__42805;
count__42786_42799 = G__42806;
i__42787_42800 = G__42807;
continue;
} else {
var temp__4657__auto___42808 = cljs.core.seq.call(null,seq__42784_42797);
if(temp__4657__auto___42808){
var seq__42784_42809__$1 = temp__4657__auto___42808;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42784_42809__$1)){
var c__7357__auto___42810 = cljs.core.chunk_first.call(null,seq__42784_42809__$1);
var G__42811 = cljs.core.chunk_rest.call(null,seq__42784_42809__$1);
var G__42812 = c__7357__auto___42810;
var G__42813 = cljs.core.count.call(null,c__7357__auto___42810);
var G__42814 = (0);
seq__42784_42797 = G__42811;
chunk__42785_42798 = G__42812;
count__42786_42799 = G__42813;
i__42787_42800 = G__42814;
continue;
} else {
var vec__42791_42815 = cljs.core.first.call(null,seq__42784_42809__$1);
var k_42816 = cljs.core.nth.call(null,vec__42791_42815,(0),null);
var v_42817 = cljs.core.nth.call(null,vec__42791_42815,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_42816),v_42817);

var G__42818 = cljs.core.next.call(null,seq__42784_42809__$1);
var G__42819 = null;
var G__42820 = (0);
var G__42821 = (0);
seq__42784_42797 = G__42818;
chunk__42785_42798 = G__42819;
count__42786_42799 = G__42820;
i__42787_42800 = G__42821;
continue;
}
} else {
}
}
break;
}

return elem__$1;
});

dommy.attrs.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.attrs.set_style_BANG_.cljs$lang$applyTo = (function (seq42782){
var G__42783 = cljs.core.first.call(null,seq42782);
var seq42782__$1 = cljs.core.next.call(null,seq42782);
return dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42783,seq42782__$1);
});

dommy.attrs.style = (function dommy$attrs$style(elem,k){
if(cljs.core.truth_(k)){
} else {
throw (new Error("Assert failed: k"));
}

return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
dommy.attrs.set_px_BANG_ = (function dommy$attrs$set_px_BANG_(var_args){
var args__7658__auto__ = [];
var len__7651__auto___42834 = arguments.length;
var i__7652__auto___42835 = (0);
while(true){
if((i__7652__auto___42835 < len__7651__auto___42834)){
args__7658__auto__.push((arguments[i__7652__auto___42835]));

var G__42836 = (i__7652__auto___42835 + (1));
i__7652__auto___42835 = G__42836;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return dommy.attrs.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

dommy.attrs.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__42824_42837 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__42825_42838 = null;
var count__42826_42839 = (0);
var i__42827_42840 = (0);
while(true){
if((i__42827_42840 < count__42826_42839)){
var vec__42828_42841 = cljs.core._nth.call(null,chunk__42825_42838,i__42827_42840);
var k_42842 = cljs.core.nth.call(null,vec__42828_42841,(0),null);
var v_42843 = cljs.core.nth.call(null,vec__42828_42841,(1),null);
dommy.attrs.set_style_BANG_.call(null,elem__$1,k_42842,[cljs.core.str(v_42843),cljs.core.str("px")].join(''));

var G__42844 = seq__42824_42837;
var G__42845 = chunk__42825_42838;
var G__42846 = count__42826_42839;
var G__42847 = (i__42827_42840 + (1));
seq__42824_42837 = G__42844;
chunk__42825_42838 = G__42845;
count__42826_42839 = G__42846;
i__42827_42840 = G__42847;
continue;
} else {
var temp__4657__auto___42848 = cljs.core.seq.call(null,seq__42824_42837);
if(temp__4657__auto___42848){
var seq__42824_42849__$1 = temp__4657__auto___42848;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42824_42849__$1)){
var c__7357__auto___42850 = cljs.core.chunk_first.call(null,seq__42824_42849__$1);
var G__42851 = cljs.core.chunk_rest.call(null,seq__42824_42849__$1);
var G__42852 = c__7357__auto___42850;
var G__42853 = cljs.core.count.call(null,c__7357__auto___42850);
var G__42854 = (0);
seq__42824_42837 = G__42851;
chunk__42825_42838 = G__42852;
count__42826_42839 = G__42853;
i__42827_42840 = G__42854;
continue;
} else {
var vec__42831_42855 = cljs.core.first.call(null,seq__42824_42849__$1);
var k_42856 = cljs.core.nth.call(null,vec__42831_42855,(0),null);
var v_42857 = cljs.core.nth.call(null,vec__42831_42855,(1),null);
dommy.attrs.set_style_BANG_.call(null,elem__$1,k_42856,[cljs.core.str(v_42857),cljs.core.str("px")].join(''));

var G__42858 = cljs.core.next.call(null,seq__42824_42849__$1);
var G__42859 = null;
var G__42860 = (0);
var G__42861 = (0);
seq__42824_42837 = G__42858;
chunk__42825_42838 = G__42859;
count__42826_42839 = G__42860;
i__42827_42840 = G__42861;
continue;
}
} else {
}
}
break;
}

return elem__$1;
});

dommy.attrs.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.attrs.set_px_BANG_.cljs$lang$applyTo = (function (seq42822){
var G__42823 = cljs.core.first.call(null,seq42822);
var seq42822__$1 = cljs.core.next.call(null,seq42822);
return dommy.attrs.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42823,seq42822__$1);
});

dommy.attrs.px = (function dommy$attrs$px(elem,k){
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
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.attrs.set_attr_BANG_ = (function dommy$attrs$set_attr_BANG_(var_args){
var args42862 = [];
var len__7651__auto___42881 = arguments.length;
var i__7652__auto___42882 = (0);
while(true){
if((i__7652__auto___42882 < len__7651__auto___42881)){
args42862.push((arguments[i__7652__auto___42882]));

var G__42883 = (i__7652__auto___42882 + (1));
i__7652__auto___42882 = G__42883;
continue;
} else {
}
break;
}

var G__42868 = args42862.length;
switch (G__42868) {
case 2:
return dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args42862.slice((3)),(0),null));
return dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7670__auto__);

}
});

dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.attrs.set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});

dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__42869 = dommy.template.__GT_node_like.call(null,elem);
(G__42869[dommy.utils.as_str.call(null,k)] = v);

return G__42869;
} else {
var G__42870 = dommy.template.__GT_node_like.call(null,elem);
G__42870.setAttribute(dommy.utils.as_str.call(null,k),((cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"style","style",-496642736)))?dommy.attrs.style_str.call(null,v):v));

return G__42870;
}
} else {
return null;
}
});

dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__42871_42885 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__42872_42886 = null;
var count__42873_42887 = (0);
var i__42874_42888 = (0);
while(true){
if((i__42874_42888 < count__42873_42887)){
var vec__42875_42889 = cljs.core._nth.call(null,chunk__42872_42886,i__42874_42888);
var k_42890__$1 = cljs.core.nth.call(null,vec__42875_42889,(0),null);
var v_42891__$1 = cljs.core.nth.call(null,vec__42875_42889,(1),null);
dommy.attrs.set_attr_BANG_.call(null,elem__$1,k_42890__$1,v_42891__$1);

var G__42892 = seq__42871_42885;
var G__42893 = chunk__42872_42886;
var G__42894 = count__42873_42887;
var G__42895 = (i__42874_42888 + (1));
seq__42871_42885 = G__42892;
chunk__42872_42886 = G__42893;
count__42873_42887 = G__42894;
i__42874_42888 = G__42895;
continue;
} else {
var temp__4657__auto___42896 = cljs.core.seq.call(null,seq__42871_42885);
if(temp__4657__auto___42896){
var seq__42871_42897__$1 = temp__4657__auto___42896;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42871_42897__$1)){
var c__7357__auto___42898 = cljs.core.chunk_first.call(null,seq__42871_42897__$1);
var G__42899 = cljs.core.chunk_rest.call(null,seq__42871_42897__$1);
var G__42900 = c__7357__auto___42898;
var G__42901 = cljs.core.count.call(null,c__7357__auto___42898);
var G__42902 = (0);
seq__42871_42885 = G__42899;
chunk__42872_42886 = G__42900;
count__42873_42887 = G__42901;
i__42874_42888 = G__42902;
continue;
} else {
var vec__42878_42903 = cljs.core.first.call(null,seq__42871_42897__$1);
var k_42904__$1 = cljs.core.nth.call(null,vec__42878_42903,(0),null);
var v_42905__$1 = cljs.core.nth.call(null,vec__42878_42903,(1),null);
dommy.attrs.set_attr_BANG_.call(null,elem__$1,k_42904__$1,v_42905__$1);

var G__42906 = cljs.core.next.call(null,seq__42871_42897__$1);
var G__42907 = null;
var G__42908 = (0);
var G__42909 = (0);
seq__42871_42885 = G__42906;
chunk__42872_42886 = G__42907;
count__42873_42887 = G__42908;
i__42874_42888 = G__42909;
continue;
}
} else {
}
}
break;
}

return elem__$1;
});

dommy.attrs.set_attr_BANG_.cljs$lang$applyTo = (function (seq42863){
var G__42864 = cljs.core.first.call(null,seq42863);
var seq42863__$1 = cljs.core.next.call(null,seq42863);
var G__42865 = cljs.core.first.call(null,seq42863__$1);
var seq42863__$2 = cljs.core.next.call(null,seq42863__$1);
var G__42866 = cljs.core.first.call(null,seq42863__$2);
var seq42863__$3 = cljs.core.next.call(null,seq42863__$2);
return dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42864,G__42865,G__42866,seq42863__$3);
});

dommy.attrs.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

dommy.attrs.remove_attr_BANG_ = (function dommy$attrs$remove_attr_BANG_(var_args){
var args42910 = [];
var len__7651__auto___42920 = arguments.length;
var i__7652__auto___42921 = (0);
while(true){
if((i__7652__auto___42921 < len__7651__auto___42920)){
args42910.push((arguments[i__7652__auto___42921]));

var G__42922 = (i__7652__auto___42921 + (1));
i__7652__auto___42921 = G__42922;
continue;
} else {
}
break;
}

var G__42915 = args42910.length;
switch (G__42915) {
case 2:
return dommy.attrs.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args42910.slice((2)),(0),null));
return dommy.attrs.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7670__auto__);

}
});

dommy.attrs.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),null,new cljs.core.Keyword(null,"classes","classes",2037804510),null], null), null).call(null,k))){
elem__$1.className = "";
} else {
elem__$1.removeAttribute(dommy.utils.as_str.call(null,k));
}

return elem__$1;
});

dommy.attrs.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__42916_42924 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__42917_42925 = null;
var count__42918_42926 = (0);
var i__42919_42927 = (0);
while(true){
if((i__42919_42927 < count__42918_42926)){
var k_42928__$1 = cljs.core._nth.call(null,chunk__42917_42925,i__42919_42927);
dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k_42928__$1);

var G__42929 = seq__42916_42924;
var G__42930 = chunk__42917_42925;
var G__42931 = count__42918_42926;
var G__42932 = (i__42919_42927 + (1));
seq__42916_42924 = G__42929;
chunk__42917_42925 = G__42930;
count__42918_42926 = G__42931;
i__42919_42927 = G__42932;
continue;
} else {
var temp__4657__auto___42933 = cljs.core.seq.call(null,seq__42916_42924);
if(temp__4657__auto___42933){
var seq__42916_42934__$1 = temp__4657__auto___42933;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42916_42934__$1)){
var c__7357__auto___42935 = cljs.core.chunk_first.call(null,seq__42916_42934__$1);
var G__42936 = cljs.core.chunk_rest.call(null,seq__42916_42934__$1);
var G__42937 = c__7357__auto___42935;
var G__42938 = cljs.core.count.call(null,c__7357__auto___42935);
var G__42939 = (0);
seq__42916_42924 = G__42936;
chunk__42917_42925 = G__42937;
count__42918_42926 = G__42938;
i__42919_42927 = G__42939;
continue;
} else {
var k_42940__$1 = cljs.core.first.call(null,seq__42916_42934__$1);
dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k_42940__$1);

var G__42941 = cljs.core.next.call(null,seq__42916_42934__$1);
var G__42942 = null;
var G__42943 = (0);
var G__42944 = (0);
seq__42916_42924 = G__42941;
chunk__42917_42925 = G__42942;
count__42918_42926 = G__42943;
i__42919_42927 = G__42944;
continue;
}
} else {
}
}
break;
}

return elem__$1;
});

dommy.attrs.remove_attr_BANG_.cljs$lang$applyTo = (function (seq42911){
var G__42912 = cljs.core.first.call(null,seq42911);
var seq42911__$1 = cljs.core.next.call(null,seq42911);
var G__42913 = cljs.core.first.call(null,seq42911__$1);
var seq42911__$2 = cljs.core.next.call(null,seq42911__$1);
return dommy.attrs.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42912,G__42913,seq42911__$2);
});

dommy.attrs.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

dommy.attrs.attr = (function dommy$attrs$attr(elem,k){
if(cljs.core.truth_(k)){
return dommy.template.__GT_node_like.call(null,elem).getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function dommy$attrs$toggle_attr_BANG_(var_args){
var args42945 = [];
var len__7651__auto___42948 = arguments.length;
var i__7652__auto___42949 = (0);
while(true){
if((i__7652__auto___42949 < len__7651__auto___42948)){
args42945.push((arguments[i__7652__auto___42949]));

var G__42950 = (i__7652__auto___42949 + (1));
i__7652__auto___42949 = G__42950;
continue;
} else {
}
break;
}

var G__42947 = args42945.length;
switch (G__42947) {
case 2:
return dommy.attrs.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.attrs.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42945.length)].join('')));

}
});

dommy.attrs.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.attrs.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.attrs.attr.call(null,elem,k)));
});

dommy.attrs.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
if(add_QMARK_){
return dommy.attrs.set_attr_BANG_.call(null,elem__$1,k);
} else {
return dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k);
}
});

dommy.attrs.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;

dommy.attrs.hidden_QMARK_ = (function dommy$attrs$hidden_QMARK_(elem){
return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
 * Display or hide the given `elem`. Takes an optional boolean `show?`
 * indicating whether to show or hide `elem`.
 */
dommy.attrs.toggle_BANG_ = (function dommy$attrs$toggle_BANG_(var_args){
var args42952 = [];
var len__7651__auto___42956 = arguments.length;
var i__7652__auto___42957 = (0);
while(true){
if((i__7652__auto___42957 < len__7651__auto___42956)){
args42952.push((arguments[i__7652__auto___42957]));

var G__42958 = (i__7652__auto___42957 + (1));
i__7652__auto___42957 = G__42958;
continue;
} else {
}
break;
}

var G__42954 = args42952.length;
switch (G__42954) {
case 2:
return dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42952.length)].join('')));

}
});

dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
var G__42955 = dommy.template.__GT_node_like.call(null,elem);
G__42955.style.display = ((show_QMARK_)?"":"none");

return G__42955;
});

dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
dommy.attrs.toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));

return elem__$1;
});

dommy.attrs.toggle_BANG_.cljs$lang$maxFixedArity = 2;

dommy.attrs.hide_BANG_ = (function dommy$attrs$hide_BANG_(elem){
var G__42961 = dommy.template.__GT_node_like.call(null,elem);
dommy.attrs.toggle_BANG_.call(null,G__42961,false);

return G__42961;
});
dommy.attrs.show_BANG_ = (function dommy$attrs$show_BANG_(elem){
var G__42963 = dommy.template.__GT_node_like.call(null,elem);
dommy.attrs.toggle_BANG_.call(null,G__42963,true);

return G__42963;
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.attrs.bounding_client_rect = (function dommy$attrs$bounding_client_rect(elem){
var r = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.attrs.scroll_into_view = (function dommy$attrs$scroll_into_view(elem,align_with_top_QMARK_){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));
if((window.innerHeight < (top + elem__$1.offsetHeight))){
return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});

//# sourceMappingURL=attrs.js.map