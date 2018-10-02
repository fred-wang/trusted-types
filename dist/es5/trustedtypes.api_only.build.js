(function(){/*

 Copyright 2017 Google Inc. All Rights Reserved.

 Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.

  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*/
var l="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},m;if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var p;a:{var q={l:!0},r={};try{r.__proto__=q;p=r.l;break a}catch(a){}p=!1}m=p?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var t=m;
function w(a,b){a.prototype=l(b.prototype);a.prototype.constructor=a;if(t)t(a,b);else for(var e in b)if("prototype"!=e)if(Object.defineProperties){var f=Object.getOwnPropertyDescriptor(b,e);f&&Object.defineProperty(a,e,f)}else a[e]=b[e];a.D=b.prototype}var z="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,e){a!=Array.prototype&&a!=Object.prototype&&(a[b]=e.value)},A="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function B(){B=function(){};A.Symbol||(A.Symbol=I)}var I=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();function J(){B();var a=A.Symbol.iterator;a||(a=A.Symbol.iterator=A.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&z(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return K(this)}});J=function(){}}function K(a){var b=0;return L(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}
function L(a){J();a={next:a};a[A.Symbol.iterator]=function(){return this};return a}function M(a){J();var b=a[Symbol.iterator];return b?b.call(a):K(a)}function Q(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function R(a,b){if(b){var e=A;a=a.split(".");for(var f=0;f<a.length-1;f++){var d=a[f];d in e||(e[d]={});e=e[d]}a=a[a.length-1];f=e[a];b=b(f);b!=f&&null!=b&&z(e,a,{configurable:!0,writable:!0,value:b})}}
R("WeakMap",function(a){function b(a){this.a=(h+=Math.random()+1).toString();if(a){B();J();a=M(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}function e(a){Q(a,d)||z(a,d,{value:{}})}function f(a){var c=Object[a];c&&(Object[a]=function(a){e(a);return c(a)})}if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),g=new a([[b,2],[c,3]]);if(2!=g.get(b)||3!=g.get(c))return!1;g.delete(b);g.set(c,4);return!g.has(b)&&4==g.get(c)}catch(v){return!1}}())return a;
var d="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(a,c){e(a);if(!Q(a,d))throw Error("WeakMap key fail: "+a);a[d][this.a]=c;return this};b.prototype.get=function(a){return Q(a,d)?a[d][this.a]:void 0};b.prototype.has=function(a){return Q(a,d)&&Q(a[d],this.a)};b.prototype.delete=function(a){return Q(a,d)&&Q(a[d],this.a)?delete a[d][this.a]:!1};return b});
R("Map",function(a){function b(){var a={};return a.c=a.next=a.head=a}function e(a,b){var c=a.a;return L(function(){if(c){for(;c.head!=a.a;)c=c.c;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}function f(a,b){var c=b&&typeof b;"object"==c||"function"==c?h.has(b)?c=h.get(b):(c=""+ ++u,h.set(b,c)):c="p_"+b;var d=a.f[c];if(d&&Q(a.f,c))for(a=0;a<d.length;a++){var g=d[a];if(b!==b&&g.key!==g.key||b===g.key)return{id:c,list:d,index:a,b:g}}return{id:c,list:d,
index:-1,b:void 0}}function d(a){this.f={};this.a=b();this.size=0;if(a){a=M(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),b=new a(M([[c,"s"]]));if("s"!=b.get(c)||1!=b.size||b.get({x:4})||b.set({x:4},"t")!=b||2!=b.size)return!1;var d=b.entries(),e=d.next();if(e.done||e.value[0]!=c||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||
"t"!=e.value[1]||!d.next().done?!1:!0}catch(k){return!1}}())return a;B();J();var h=new WeakMap;d.prototype.set=function(a,b){a=0===a?0:a;var c=f(this,a);c.list||(c.list=this.f[c.id]=[]);c.b?c.b.value=b:(c.b={next:this.a,c:this.a.c,head:this.a,key:a,value:b},c.list.push(c.b),this.a.c.next=c.b,this.a.c=c.b,this.size++);return this};d.prototype.delete=function(a){a=f(this,a);return a.b&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.f[a.id],a.b.c.next=a.b.next,a.b.next.c=a.b.c,a.b.head=
null,this.size--,!0):!1};d.prototype.clear=function(){this.f={};this.a=this.a.c=b();this.size=0};d.prototype.has=function(a){return!!f(this,a).b};d.prototype.get=function(a){return(a=f(this,a).b)&&a.value};d.prototype.entries=function(){return e(this,function(a){return[a.key,a.value]})};d.prototype.keys=function(){return e(this,function(a){return a.key})};d.prototype.values=function(){return e(this,function(a){return a.value})};d.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=
d.value,a.call(b,d[1],d[0],this)};d.prototype[Symbol.iterator]=d.prototype.entries;var u=0;return d});
var S=function(){function a(){throw new TypeError("undefined conversion");}function b(a){return h.apply(this,arguments)||this}function e(a){return h.apply(this,arguments)||this}function f(a){return d.apply(this,arguments)||this}function d(a){return h.apply(this,arguments)||this}function h(a,b){if(a!==N)throw Error("cannot call the constructor");C(this,"policyName",{value:b,enumerable:!0})}function u(a){var b=D.get(a);void 0===b&&(b=x(null),D.set(a,b));return b}function c(a){var b=O(a);if(null==b||
O(b)!==U)throw Error();b=M(E(b));for(var c=b.next();!c.done;c=b.next())c=c.value,C(a,c,{value:a[c]});return a}function g(a,b){n(a.prototype);delete a.name;C(a,"name",{value:b})}function v(a){return function(b){return b instanceof a&&D.has(b)}}function T(b,c){function d(d,e){var f=c[e]||a,g=n(new d(N,b));d={};e=(d[e]=function(a){a=f(a);if(void 0===a||null===a)a="";a=""+a;var b=n(x(g));u(b).v=a;return b},d)[e];return n(e)}for(var e=x(null),f=M(E(y)),g=f.next();!g.done;g=f.next())g=g.value,e[g]=d(y[g],
g);e.name=b;return n(e)}var k=Object,x=k.create,C=k.defineProperty,n=k.freeze,E=k.getOwnPropertyNames,O=k.getPrototypeOf,U=k.prototype;k=Array.prototype;var V=k.forEach,W=k.push;B();var N=Symbol(),D=c(new WeakMap),F=c([]),P=c(new Map),G=c([]),H=!1;h.prototype.toString=function(){return u(this).v};h.prototype.valueOf=function(){return u(this).v};w(d,h);g(d,"TrustedURL");w(f,d);g(f,"TrustedScriptURL");w(e,h);g(e,"TrustedHTML");w(b,h);g(b,"TrustedScript");g(h,"TrustedType");var y={createHTML:e,createScriptURL:f,
createURL:d,createScript:b},X=y.hasOwnProperty;return n({g:e,j:d,i:f,h:b,m:function(a,b,c){c=void 0===c?!1:c;if(H&&-1===G.indexOf(a))throw new TypeError("Policy "+a+" disallowed.");if(-1!==F.indexOf(a))throw new TypeError("Policy "+a+" exists.");F.push(a);var d=x(null);if(b&&"object"===typeof b)for(var e=M(E(b)),f=e.next();!f.done;f=e.next())f=f.value,X.call(y,f)&&(d[f]=b[f]);else console.warn("TrustedTypes.createPolicy "+a+" was given an empty policy");n(d);b=T(a,d);c&&P.set(a,b);return b},o:function(a){return P.get(a)||
null},s:function(){return F.slice()},u:v(e),B:v(d),A:v(f),w:v(b),C:function(a){-1!==a.indexOf("*")?H=!1:(H=!0,G.length=0,V.call(a,function(a){W.call(G,""+a)}))}})}();"undefined"!==typeof window&&"undefined"===typeof window.TrustedTypes&&(window.TrustedTypes={TrustedHTML:S.g,TrustedURL:S.j,TrustedScriptURL:S.i,TrustedScript:S.h,createPolicy:S.m,getExposedPolicy:S.o,getPolicyNames:S.s});}).call(window);//# sourceMappingURL=trustedtypes.api_only.build.js.map
