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
var G__16160 = (i + class$.length);
start_from = G__16160;
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
var args16161 = [];
var len__7651__auto___16179 = arguments.length;
var i__7652__auto___16180 = (0);
while(true){
if((i__7652__auto___16180 < len__7651__auto___16179)){
args16161.push((arguments[i__7652__auto___16180]));

var G__16181 = (i__7652__auto___16180 + (1));
i__7652__auto___16180 = G__16181;
continue;
} else {
}
break;
}

var G__16166 = args16161.length;
switch (G__16166) {
case 2:
return dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args16161.slice((2)),(0),null));
return dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7670__auto__);

}
});

dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes));
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___16183 = elem__$1.classList;
if(cljs.core.truth_(temp__4655__auto___16183)){
var class_list_16184 = temp__4655__auto___16183;
var seq__16167_16185 = cljs.core.seq.call(null,classes__$1.split(/\s+/));
var chunk__16168_16186 = null;
var count__16169_16187 = (0);
var i__16170_16188 = (0);
while(true){
if((i__16170_16188 < count__16169_16187)){
var class_16189 = cljs.core._nth.call(null,chunk__16168_16186,i__16170_16188);
class_list_16184.add(class_16189);

var G__16190 = seq__16167_16185;
var G__16191 = chunk__16168_16186;
var G__16192 = count__16169_16187;
var G__16193 = (i__16170_16188 + (1));
seq__16167_16185 = G__16190;
chunk__16168_16186 = G__16191;
count__16169_16187 = G__16192;
i__16170_16188 = G__16193;
continue;
} else {
var temp__4657__auto___16194 = cljs.core.seq.call(null,seq__16167_16185);
if(temp__4657__auto___16194){
var seq__16167_16195__$1 = temp__4657__auto___16194;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16167_16195__$1)){
var c__7357__auto___16196 = cljs.core.chunk_first.call(null,seq__16167_16195__$1);
var G__16197 = cljs.core.chunk_rest.call(null,seq__16167_16195__$1);
var G__16198 = c__7357__auto___16196;
var G__16199 = cljs.core.count.call(null,c__7357__auto___16196);
var G__16200 = (0);
seq__16167_16185 = G__16197;
chunk__16168_16186 = G__16198;
count__16169_16187 = G__16199;
i__16170_16188 = G__16200;
continue;
} else {
var class_16201 = cljs.core.first.call(null,seq__16167_16195__$1);
class_list_16184.add(class_16201);

var G__16202 = cljs.core.next.call(null,seq__16167_16195__$1);
var G__16203 = null;
var G__16204 = (0);
var G__16205 = (0);
seq__16167_16185 = G__16202;
chunk__16168_16186 = G__16203;
count__16169_16187 = G__16204;
i__16170_16188 = G__16205;
continue;
}
} else {
}
}
break;
}
} else {
var seq__16171_16206 = cljs.core.seq.call(null,classes__$1.split(/\s+/));
var chunk__16172_16207 = null;
var count__16173_16208 = (0);
var i__16174_16209 = (0);
while(true){
if((i__16174_16209 < count__16173_16208)){
var class_16210 = cljs.core._nth.call(null,chunk__16172_16207,i__16174_16209);
var class_name_16211 = elem__$1.className;
if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_16211,class_16210))){
} else {
elem__$1.className = (((class_name_16211 === ""))?class_16210:[cljs.core.str(class_name_16211),cljs.core.str(" "),cljs.core.str(class_16210)].join(''));
}

var G__16212 = seq__16171_16206;
var G__16213 = chunk__16172_16207;
var G__16214 = count__16173_16208;
var G__16215 = (i__16174_16209 + (1));
seq__16171_16206 = G__16212;
chunk__16172_16207 = G__16213;
count__16173_16208 = G__16214;
i__16174_16209 = G__16215;
continue;
} else {
var temp__4657__auto___16216 = cljs.core.seq.call(null,seq__16171_16206);
if(temp__4657__auto___16216){
var seq__16171_16217__$1 = temp__4657__auto___16216;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16171_16217__$1)){
var c__7357__auto___16218 = cljs.core.chunk_first.call(null,seq__16171_16217__$1);
var G__16219 = cljs.core.chunk_rest.call(null,seq__16171_16217__$1);
var G__16220 = c__7357__auto___16218;
var G__16221 = cljs.core.count.call(null,c__7357__auto___16218);
var G__16222 = (0);
seq__16171_16206 = G__16219;
chunk__16172_16207 = G__16220;
count__16173_16208 = G__16221;
i__16174_16209 = G__16222;
continue;
} else {
var class_16223 = cljs.core.first.call(null,seq__16171_16217__$1);
var class_name_16224 = elem__$1.className;
if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_16224,class_16223))){
} else {
elem__$1.className = (((class_name_16224 === ""))?class_16223:[cljs.core.str(class_name_16224),cljs.core.str(" "),cljs.core.str(class_16223)].join(''));
}

var G__16225 = cljs.core.next.call(null,seq__16171_16217__$1);
var G__16226 = null;
var G__16227 = (0);
var G__16228 = (0);
seq__16171_16206 = G__16225;
chunk__16172_16207 = G__16226;
count__16173_16208 = G__16227;
i__16174_16209 = G__16228;
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
var seq__16175_16229 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__16176_16230 = null;
var count__16177_16231 = (0);
var i__16178_16232 = (0);
while(true){
if((i__16178_16232 < count__16177_16231)){
var c_16233 = cljs.core._nth.call(null,chunk__16176_16230,i__16178_16232);
dommy.attrs.add_class_BANG_.call(null,elem__$1,c_16233);

var G__16234 = seq__16175_16229;
var G__16235 = chunk__16176_16230;
var G__16236 = count__16177_16231;
var G__16237 = (i__16178_16232 + (1));
seq__16175_16229 = G__16234;
chunk__16176_16230 = G__16235;
count__16177_16231 = G__16236;
i__16178_16232 = G__16237;
continue;
} else {
var temp__4657__auto___16238 = cljs.core.seq.call(null,seq__16175_16229);
if(temp__4657__auto___16238){
var seq__16175_16239__$1 = temp__4657__auto___16238;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16175_16239__$1)){
var c__7357__auto___16240 = cljs.core.chunk_first.call(null,seq__16175_16239__$1);
var G__16241 = cljs.core.chunk_rest.call(null,seq__16175_16239__$1);
var G__16242 = c__7357__auto___16240;
var G__16243 = cljs.core.count.call(null,c__7357__auto___16240);
var G__16244 = (0);
seq__16175_16229 = G__16241;
chunk__16176_16230 = G__16242;
count__16177_16231 = G__16243;
i__16178_16232 = G__16244;
continue;
} else {
var c_16245 = cljs.core.first.call(null,seq__16175_16239__$1);
dommy.attrs.add_class_BANG_.call(null,elem__$1,c_16245);

var G__16246 = cljs.core.next.call(null,seq__16175_16239__$1);
var G__16247 = null;
var G__16248 = (0);
var G__16249 = (0);
seq__16175_16229 = G__16246;
chunk__16176_16230 = G__16247;
count__16177_16231 = G__16248;
i__16178_16232 = G__16249;
continue;
}
} else {
}
}
break;
}

return elem__$1;
});

dommy.attrs.add_class_BANG_.cljs$lang$applyTo = (function (seq16162){
var G__16163 = cljs.core.first.call(null,seq16162);
var seq16162__$1 = cljs.core.next.call(null,seq16162);
var G__16164 = cljs.core.first.call(null,seq16162__$1);
var seq16162__$2 = cljs.core.next.call(null,seq16162__$1);
return dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16163,G__16164,seq16162__$2);
});

dommy.attrs.add_class_BANG_.cljs$lang$maxFixedArity = (2);

dommy.attrs.remove_class_str = (function dommy$attrs$remove_class_str(init_class_name,class$){
var class_name = init_class_name;
while(true){
var class_len = class_name.length;
var temp__4655__auto__ = dommy.attrs.class_index.call(null,class_name,class$);
if(cljs.core.truth_(temp__4655__auto__)){
var i = temp__4655__auto__;
var G__16250 = (function (){var end = (i + class$.length);
return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring((0),i)),cljs.core.str(class_name.substr((end + (1))))].join(''):class_name.substring((0),(i - (1)))))].join('');
})();
class_name = G__16250;
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
var args16251 = [];
var len__7651__auto___16261 = arguments.length;
var i__7652__auto___16262 = (0);
while(true){
if((i__7652__auto___16262 < len__7651__auto___16261)){
args16251.push((arguments[i__7652__auto___16262]));

var G__16263 = (i__7652__auto___16262 + (1));
i__7652__auto___16262 = G__16263;
continue;
} else {
}
break;
}

var G__16256 = args16251.length;
switch (G__16256) {
case 2:
return dommy.attrs.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args16251.slice((2)),(0),null));
return dommy.attrs.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7670__auto__);

}
});

dommy.attrs.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,class$){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var class$__$1 = dommy.utils.as_str.call(null,class$);
var temp__4655__auto___16265 = elem__$1.classList;
if(cljs.core.truth_(temp__4655__auto___16265)){
var class_list_16266 = temp__4655__auto___16265;
class_list_16266.remove(class$__$1);
} else {
var class_name_16267 = elem__$1.className;
var new_class_name_16268 = dommy.attrs.remove_class_str.call(null,class_name_16267,class$__$1);
if((class_name_16267 === new_class_name_16268)){
} else {
elem__$1.className = new_class_name_16268;
}
}

return elem__$1;
});

dommy.attrs.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__16257 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__16258 = null;
var count__16259 = (0);
var i__16260 = (0);
while(true){
if((i__16260 < count__16259)){
var c = cljs.core._nth.call(null,chunk__16258,i__16260);
dommy.attrs.remove_class_BANG_.call(null,elem__$1,c);

var G__16269 = seq__16257;
var G__16270 = chunk__16258;
var G__16271 = count__16259;
var G__16272 = (i__16260 + (1));
seq__16257 = G__16269;
chunk__16258 = G__16270;
count__16259 = G__16271;
i__16260 = G__16272;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16257);
if(temp__4657__auto__){
var seq__16257__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16257__$1)){
var c__7357__auto__ = cljs.core.chunk_first.call(null,seq__16257__$1);
var G__16273 = cljs.core.chunk_rest.call(null,seq__16257__$1);
var G__16274 = c__7357__auto__;
var G__16275 = cljs.core.count.call(null,c__7357__auto__);
var G__16276 = (0);
seq__16257 = G__16273;
chunk__16258 = G__16274;
count__16259 = G__16275;
i__16260 = G__16276;
continue;
} else {
var c = cljs.core.first.call(null,seq__16257__$1);
dommy.attrs.remove_class_BANG_.call(null,elem__$1,c);

var G__16277 = cljs.core.next.call(null,seq__16257__$1);
var G__16278 = null;
var G__16279 = (0);
var G__16280 = (0);
seq__16257 = G__16277;
chunk__16258 = G__16278;
count__16259 = G__16279;
i__16260 = G__16280;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.attrs.remove_class_BANG_.cljs$lang$applyTo = (function (seq16252){
var G__16253 = cljs.core.first.call(null,seq16252);
var seq16252__$1 = cljs.core.next.call(null,seq16252);
var G__16254 = cljs.core.first.call(null,seq16252__$1);
var seq16252__$2 = cljs.core.next.call(null,seq16252__$1);
return dommy.attrs.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16253,G__16254,seq16252__$2);
});

dommy.attrs.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.attrs.toggle_class_BANG_ = (function dommy$attrs$toggle_class_BANG_(var_args){
var args16281 = [];
var len__7651__auto___16284 = arguments.length;
var i__7652__auto___16285 = (0);
while(true){
if((i__7652__auto___16285 < len__7651__auto___16284)){
args16281.push((arguments[i__7652__auto___16285]));

var G__16286 = (i__7652__auto___16285 + (1));
i__7652__auto___16285 = G__16286;
continue;
} else {
}
break;
}

var G__16283 = args16281.length;
switch (G__16283) {
case 2:
return dommy.attrs.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.attrs.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16281.length)].join('')));

}
});

dommy.attrs.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,class$){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var class$__$1 = dommy.utils.as_str.call(null,class$);
var temp__4655__auto___16288 = elem__$1.classList;
if(cljs.core.truth_(temp__4655__auto___16288)){
var class_list_16289 = temp__4655__auto___16288;
class_list_16289.toggle(class$__$1);
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
return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__16294){
var vec__16295 = p__16294;
var k = cljs.core.nth.call(null,vec__16295,(0),null);
var v = cljs.core.nth.call(null,vec__16295,(1),null);
return [cljs.core.str(dommy.utils.as_str.call(null,k)),cljs.core.str(":"),cljs.core.str(dommy.utils.as_str.call(null,v)),cljs.core.str(";")].join('');
}),x));
}
});
dommy.attrs.set_style_BANG_ = (function dommy$attrs$set_style_BANG_(var_args){
var args__7658__auto__ = [];
var len__7651__auto___16310 = arguments.length;
var i__7652__auto___16311 = (0);
while(true){
if((i__7652__auto___16311 < len__7651__auto___16310)){
args__7658__auto__.push((arguments[i__7652__auto___16311]));

var G__16312 = (i__7652__auto___16311 + (1));
i__7652__auto___16311 = G__16312;
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
var seq__16300_16313 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__16301_16314 = null;
var count__16302_16315 = (0);
var i__16303_16316 = (0);
while(true){
if((i__16303_16316 < count__16302_16315)){
var vec__16304_16317 = cljs.core._nth.call(null,chunk__16301_16314,i__16303_16316);
var k_16318 = cljs.core.nth.call(null,vec__16304_16317,(0),null);
var v_16319 = cljs.core.nth.call(null,vec__16304_16317,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_16318),v_16319);

var G__16320 = seq__16300_16313;
var G__16321 = chunk__16301_16314;
var G__16322 = count__16302_16315;
var G__16323 = (i__16303_16316 + (1));
seq__16300_16313 = G__16320;
chunk__16301_16314 = G__16321;
count__16302_16315 = G__16322;
i__16303_16316 = G__16323;
continue;
} else {
var temp__4657__auto___16324 = cljs.core.seq.call(null,seq__16300_16313);
if(temp__4657__auto___16324){
var seq__16300_16325__$1 = temp__4657__auto___16324;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16300_16325__$1)){
var c__7357__auto___16326 = cljs.core.chunk_first.call(null,seq__16300_16325__$1);
var G__16327 = cljs.core.chunk_rest.call(null,seq__16300_16325__$1);
var G__16328 = c__7357__auto___16326;
var G__16329 = cljs.core.count.call(null,c__7357__auto___16326);
var G__16330 = (0);
seq__16300_16313 = G__16327;
chunk__16301_16314 = G__16328;
count__16302_16315 = G__16329;
i__16303_16316 = G__16330;
continue;
} else {
var vec__16307_16331 = cljs.core.first.call(null,seq__16300_16325__$1);
var k_16332 = cljs.core.nth.call(null,vec__16307_16331,(0),null);
var v_16333 = cljs.core.nth.call(null,vec__16307_16331,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_16332),v_16333);

var G__16334 = cljs.core.next.call(null,seq__16300_16325__$1);
var G__16335 = null;
var G__16336 = (0);
var G__16337 = (0);
seq__16300_16313 = G__16334;
chunk__16301_16314 = G__16335;
count__16302_16315 = G__16336;
i__16303_16316 = G__16337;
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

dommy.attrs.set_style_BANG_.cljs$lang$applyTo = (function (seq16298){
var G__16299 = cljs.core.first.call(null,seq16298);
var seq16298__$1 = cljs.core.next.call(null,seq16298);
return dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16299,seq16298__$1);
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
var len__7651__auto___16350 = arguments.length;
var i__7652__auto___16351 = (0);
while(true){
if((i__7652__auto___16351 < len__7651__auto___16350)){
args__7658__auto__.push((arguments[i__7652__auto___16351]));

var G__16352 = (i__7652__auto___16351 + (1));
i__7652__auto___16351 = G__16352;
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
var seq__16340_16353 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__16341_16354 = null;
var count__16342_16355 = (0);
var i__16343_16356 = (0);
while(true){
if((i__16343_16356 < count__16342_16355)){
var vec__16344_16357 = cljs.core._nth.call(null,chunk__16341_16354,i__16343_16356);
var k_16358 = cljs.core.nth.call(null,vec__16344_16357,(0),null);
var v_16359 = cljs.core.nth.call(null,vec__16344_16357,(1),null);
dommy.attrs.set_style_BANG_.call(null,elem__$1,k_16358,[cljs.core.str(v_16359),cljs.core.str("px")].join(''));

var G__16360 = seq__16340_16353;
var G__16361 = chunk__16341_16354;
var G__16362 = count__16342_16355;
var G__16363 = (i__16343_16356 + (1));
seq__16340_16353 = G__16360;
chunk__16341_16354 = G__16361;
count__16342_16355 = G__16362;
i__16343_16356 = G__16363;
continue;
} else {
var temp__4657__auto___16364 = cljs.core.seq.call(null,seq__16340_16353);
if(temp__4657__auto___16364){
var seq__16340_16365__$1 = temp__4657__auto___16364;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16340_16365__$1)){
var c__7357__auto___16366 = cljs.core.chunk_first.call(null,seq__16340_16365__$1);
var G__16367 = cljs.core.chunk_rest.call(null,seq__16340_16365__$1);
var G__16368 = c__7357__auto___16366;
var G__16369 = cljs.core.count.call(null,c__7357__auto___16366);
var G__16370 = (0);
seq__16340_16353 = G__16367;
chunk__16341_16354 = G__16368;
count__16342_16355 = G__16369;
i__16343_16356 = G__16370;
continue;
} else {
var vec__16347_16371 = cljs.core.first.call(null,seq__16340_16365__$1);
var k_16372 = cljs.core.nth.call(null,vec__16347_16371,(0),null);
var v_16373 = cljs.core.nth.call(null,vec__16347_16371,(1),null);
dommy.attrs.set_style_BANG_.call(null,elem__$1,k_16372,[cljs.core.str(v_16373),cljs.core.str("px")].join(''));

var G__16374 = cljs.core.next.call(null,seq__16340_16365__$1);
var G__16375 = null;
var G__16376 = (0);
var G__16377 = (0);
seq__16340_16353 = G__16374;
chunk__16341_16354 = G__16375;
count__16342_16355 = G__16376;
i__16343_16356 = G__16377;
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

dommy.attrs.set_px_BANG_.cljs$lang$applyTo = (function (seq16338){
var G__16339 = cljs.core.first.call(null,seq16338);
var seq16338__$1 = cljs.core.next.call(null,seq16338);
return dommy.attrs.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16339,seq16338__$1);
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
var args16378 = [];
var len__7651__auto___16397 = arguments.length;
var i__7652__auto___16398 = (0);
while(true){
if((i__7652__auto___16398 < len__7651__auto___16397)){
args16378.push((arguments[i__7652__auto___16398]));

var G__16399 = (i__7652__auto___16398 + (1));
i__7652__auto___16398 = G__16399;
continue;
} else {
}
break;
}

var G__16384 = args16378.length;
switch (G__16384) {
case 2:
return dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args16378.slice((3)),(0),null));
return dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7670__auto__);

}
});

dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.attrs.set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});

dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__16385 = dommy.template.__GT_node_like.call(null,elem);
(G__16385[dommy.utils.as_str.call(null,k)] = v);

return G__16385;
} else {
var G__16386 = dommy.template.__GT_node_like.call(null,elem);
G__16386.setAttribute(dommy.utils.as_str.call(null,k),((cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"style","style",-496642736)))?dommy.attrs.style_str.call(null,v):v));

return G__16386;
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
var seq__16387_16401 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__16388_16402 = null;
var count__16389_16403 = (0);
var i__16390_16404 = (0);
while(true){
if((i__16390_16404 < count__16389_16403)){
var vec__16391_16405 = cljs.core._nth.call(null,chunk__16388_16402,i__16390_16404);
var k_16406__$1 = cljs.core.nth.call(null,vec__16391_16405,(0),null);
var v_16407__$1 = cljs.core.nth.call(null,vec__16391_16405,(1),null);
dommy.attrs.set_attr_BANG_.call(null,elem__$1,k_16406__$1,v_16407__$1);

var G__16408 = seq__16387_16401;
var G__16409 = chunk__16388_16402;
var G__16410 = count__16389_16403;
var G__16411 = (i__16390_16404 + (1));
seq__16387_16401 = G__16408;
chunk__16388_16402 = G__16409;
count__16389_16403 = G__16410;
i__16390_16404 = G__16411;
continue;
} else {
var temp__4657__auto___16412 = cljs.core.seq.call(null,seq__16387_16401);
if(temp__4657__auto___16412){
var seq__16387_16413__$1 = temp__4657__auto___16412;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16387_16413__$1)){
var c__7357__auto___16414 = cljs.core.chunk_first.call(null,seq__16387_16413__$1);
var G__16415 = cljs.core.chunk_rest.call(null,seq__16387_16413__$1);
var G__16416 = c__7357__auto___16414;
var G__16417 = cljs.core.count.call(null,c__7357__auto___16414);
var G__16418 = (0);
seq__16387_16401 = G__16415;
chunk__16388_16402 = G__16416;
count__16389_16403 = G__16417;
i__16390_16404 = G__16418;
continue;
} else {
var vec__16394_16419 = cljs.core.first.call(null,seq__16387_16413__$1);
var k_16420__$1 = cljs.core.nth.call(null,vec__16394_16419,(0),null);
var v_16421__$1 = cljs.core.nth.call(null,vec__16394_16419,(1),null);
dommy.attrs.set_attr_BANG_.call(null,elem__$1,k_16420__$1,v_16421__$1);

var G__16422 = cljs.core.next.call(null,seq__16387_16413__$1);
var G__16423 = null;
var G__16424 = (0);
var G__16425 = (0);
seq__16387_16401 = G__16422;
chunk__16388_16402 = G__16423;
count__16389_16403 = G__16424;
i__16390_16404 = G__16425;
continue;
}
} else {
}
}
break;
}

return elem__$1;
});

dommy.attrs.set_attr_BANG_.cljs$lang$applyTo = (function (seq16379){
var G__16380 = cljs.core.first.call(null,seq16379);
var seq16379__$1 = cljs.core.next.call(null,seq16379);
var G__16381 = cljs.core.first.call(null,seq16379__$1);
var seq16379__$2 = cljs.core.next.call(null,seq16379__$1);
var G__16382 = cljs.core.first.call(null,seq16379__$2);
var seq16379__$3 = cljs.core.next.call(null,seq16379__$2);
return dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16380,G__16381,G__16382,seq16379__$3);
});

dommy.attrs.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

dommy.attrs.remove_attr_BANG_ = (function dommy$attrs$remove_attr_BANG_(var_args){
var args16426 = [];
var len__7651__auto___16436 = arguments.length;
var i__7652__auto___16437 = (0);
while(true){
if((i__7652__auto___16437 < len__7651__auto___16436)){
args16426.push((arguments[i__7652__auto___16437]));

var G__16438 = (i__7652__auto___16437 + (1));
i__7652__auto___16437 = G__16438;
continue;
} else {
}
break;
}

var G__16431 = args16426.length;
switch (G__16431) {
case 2:
return dommy.attrs.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args16426.slice((2)),(0),null));
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
var seq__16432_16440 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__16433_16441 = null;
var count__16434_16442 = (0);
var i__16435_16443 = (0);
while(true){
if((i__16435_16443 < count__16434_16442)){
var k_16444__$1 = cljs.core._nth.call(null,chunk__16433_16441,i__16435_16443);
dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k_16444__$1);

var G__16445 = seq__16432_16440;
var G__16446 = chunk__16433_16441;
var G__16447 = count__16434_16442;
var G__16448 = (i__16435_16443 + (1));
seq__16432_16440 = G__16445;
chunk__16433_16441 = G__16446;
count__16434_16442 = G__16447;
i__16435_16443 = G__16448;
continue;
} else {
var temp__4657__auto___16449 = cljs.core.seq.call(null,seq__16432_16440);
if(temp__4657__auto___16449){
var seq__16432_16450__$1 = temp__4657__auto___16449;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16432_16450__$1)){
var c__7357__auto___16451 = cljs.core.chunk_first.call(null,seq__16432_16450__$1);
var G__16452 = cljs.core.chunk_rest.call(null,seq__16432_16450__$1);
var G__16453 = c__7357__auto___16451;
var G__16454 = cljs.core.count.call(null,c__7357__auto___16451);
var G__16455 = (0);
seq__16432_16440 = G__16452;
chunk__16433_16441 = G__16453;
count__16434_16442 = G__16454;
i__16435_16443 = G__16455;
continue;
} else {
var k_16456__$1 = cljs.core.first.call(null,seq__16432_16450__$1);
dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k_16456__$1);

var G__16457 = cljs.core.next.call(null,seq__16432_16450__$1);
var G__16458 = null;
var G__16459 = (0);
var G__16460 = (0);
seq__16432_16440 = G__16457;
chunk__16433_16441 = G__16458;
count__16434_16442 = G__16459;
i__16435_16443 = G__16460;
continue;
}
} else {
}
}
break;
}

return elem__$1;
});

dommy.attrs.remove_attr_BANG_.cljs$lang$applyTo = (function (seq16427){
var G__16428 = cljs.core.first.call(null,seq16427);
var seq16427__$1 = cljs.core.next.call(null,seq16427);
var G__16429 = cljs.core.first.call(null,seq16427__$1);
var seq16427__$2 = cljs.core.next.call(null,seq16427__$1);
return dommy.attrs.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16428,G__16429,seq16427__$2);
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
var args16461 = [];
var len__7651__auto___16464 = arguments.length;
var i__7652__auto___16465 = (0);
while(true){
if((i__7652__auto___16465 < len__7651__auto___16464)){
args16461.push((arguments[i__7652__auto___16465]));

var G__16466 = (i__7652__auto___16465 + (1));
i__7652__auto___16465 = G__16466;
continue;
} else {
}
break;
}

var G__16463 = args16461.length;
switch (G__16463) {
case 2:
return dommy.attrs.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.attrs.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16461.length)].join('')));

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
var args16468 = [];
var len__7651__auto___16472 = arguments.length;
var i__7652__auto___16473 = (0);
while(true){
if((i__7652__auto___16473 < len__7651__auto___16472)){
args16468.push((arguments[i__7652__auto___16473]));

var G__16474 = (i__7652__auto___16473 + (1));
i__7652__auto___16473 = G__16474;
continue;
} else {
}
break;
}

var G__16470 = args16468.length;
switch (G__16470) {
case 2:
return dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16468.length)].join('')));

}
});

dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
var G__16471 = dommy.template.__GT_node_like.call(null,elem);
G__16471.style.display = ((show_QMARK_)?"":"none");

return G__16471;
});

dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
dommy.attrs.toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));

return elem__$1;
});

dommy.attrs.toggle_BANG_.cljs$lang$maxFixedArity = 2;

dommy.attrs.hide_BANG_ = (function dommy$attrs$hide_BANG_(elem){
var G__16477 = dommy.template.__GT_node_like.call(null,elem);
dommy.attrs.toggle_BANG_.call(null,G__16477,false);

return G__16477;
});
dommy.attrs.show_BANG_ = (function dommy$attrs$show_BANG_(elem){
var G__16479 = dommy.template.__GT_node_like.call(null,elem);
dommy.attrs.toggle_BANG_.call(null,G__16479,true);

return G__16479;
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