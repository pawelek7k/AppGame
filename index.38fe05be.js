var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(t){return t&&t.__esModule?t.default:t}var n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){r[t]=e},t.parcelRequired7c6=i),i.register("kEUo3",(function(e,n){(function(){var r,i="Expected a function",o="__lodash_hash_undefined__",a="__lodash_placeholder__",s=16,c=32,l=64,u=128,f=256,d=1/0,p=9007199254740991,h=NaN,m=4294967295,g=[["ary",u],["bind",1],["bindKey",2],["curry",8],["curryRight",s],["flip",512],["partial",c],["partialRight",l],["rearg",f]],v="[object Arguments]",y="[object Array]",b="[object Boolean]",w="[object Date]",x="[object Error]",k="[object Function]",_="[object GeneratorFunction]",I="[object Map]",N="[object Number]",S="[object Object]",E="[object Promise]",C="[object RegExp]",T="[object Set]",A="[object String]",R="[object Symbol]",L="[object WeakMap]",O="[object ArrayBuffer]",P="[object DataView]",D="[object Float32Array]",z="[object Float64Array]",M="[object Int8Array]",j="[object Int16Array]",U="[object Int32Array]",W="[object Uint8Array]",B="[object Uint8ClampedArray]",F="[object Uint16Array]",H="[object Uint32Array]",V=/\b__p \+= '';/g,$=/\b(__p \+=) '' \+/g,X=/(__e\(.*?\)|\b__t\)) \+\n'';/g,q=/&(?:amp|lt|gt|quot|#39);/g,K=/[&<>"']/g,G=RegExp(q.source),J=RegExp(K.source),Y=/<%-([\s\S]+?)%>/g,Q=/<%([\s\S]+?)%>/g,Z=/<%=([\s\S]+?)%>/g,tt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,et=/^\w*$/,nt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rt=/[\\^$.*+?()[\]{}|]/g,it=RegExp(rt.source),ot=/^\s+/,at=/\s/,st=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ct=/\{\n\/\* \[wrapped with (.+)\] \*/,lt=/,? & /,ut=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ft=/[()=,{}\[\]\/\s]/,dt=/\\(\\)?/g,pt=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ht=/\w*$/,mt=/^[-+]0x[0-9a-f]+$/i,gt=/^0b[01]+$/i,vt=/^\[object .+?Constructor\]$/,yt=/^0o[0-7]+$/i,bt=/^(?:0|[1-9]\d*)$/,wt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,xt=/($^)/,kt=/['\n\r\u2028\u2029\\]/g,_t="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",It="\\u2700-\\u27bf",Nt="a-z\\xdf-\\xf6\\xf8-\\xff",St="A-Z\\xc0-\\xd6\\xd8-\\xde",Et="\\ufe0e\\ufe0f",Ct="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Tt="['’]",At="[\ud800-\udfff]",Rt="["+Ct+"]",Lt="["+_t+"]",Ot="\\d+",Pt="[\\u2700-\\u27bf]",Dt="["+Nt+"]",zt="[^\ud800-\udfff"+Ct+Ot+It+Nt+St+"]",Mt="[^\ud800-\udfff]",jt="(?:\ud83c[\udde6-\uddff]){2}",Ut="[\ud800-\udbff][\udc00-\udfff]",Wt="["+St+"]",Bt="(?:"+Dt+"|"+zt+")",Ft="(?:"+Wt+"|"+zt+")",Ht="(?:['’](?:d|ll|m|re|s|t|ve))?",Vt="(?:['’](?:D|LL|M|RE|S|T|VE))?",$t="(?:"+Lt+"|"+"\ud83c[\udffb-\udfff])"+"?",Xt="[\\ufe0e\\ufe0f]?",qt=Xt+$t+("(?:\\u200d(?:"+[Mt,jt,Ut].join("|")+")"+Xt+$t+")*"),Kt="(?:"+[Pt,jt,Ut].join("|")+")"+qt,Gt="(?:"+[Mt+Lt+"?",Lt,jt,Ut,At].join("|")+")",Jt=RegExp(Tt,"g"),Yt=RegExp(Lt,"g"),Qt=RegExp("\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|"+Gt+qt,"g"),Zt=RegExp([Wt+"?"+Dt+"+"+Ht+"(?="+[Rt,Wt,"$"].join("|")+")",Ft+"+"+Vt+"(?="+[Rt,Wt+Bt,"$"].join("|")+")",Wt+"?"+Bt+"+"+Ht,Wt+"+"+Vt,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ot,Kt].join("|"),"g"),te=RegExp("[\\u200d\ud800-\udfff"+_t+Et+"]"),ee=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,ne=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],re=-1,ie={};ie[D]=ie[z]=ie[M]=ie[j]=ie[U]=ie[W]=ie[B]=ie[F]=ie[H]=!0,ie[v]=ie[y]=ie[O]=ie[b]=ie[P]=ie[w]=ie[x]=ie[k]=ie[I]=ie[N]=ie[S]=ie[C]=ie[T]=ie[A]=ie[L]=!1;var oe={};oe[v]=oe[y]=oe[O]=oe[P]=oe[b]=oe[w]=oe[D]=oe[z]=oe[M]=oe[j]=oe[U]=oe[I]=oe[N]=oe[S]=oe[C]=oe[T]=oe[A]=oe[R]=oe[W]=oe[B]=oe[F]=oe[H]=!0,oe[x]=oe[k]=oe[L]=!1;var ae={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},se=parseFloat,ce=parseInt,le="object"==typeof t&&t&&t.Object===Object&&t,ue="object"==typeof self&&self&&self.Object===Object&&self,fe=le||ue||Function("return this")(),de=n&&!n.nodeType&&n,pe=de&&e&&!e.nodeType&&e,he=pe&&pe.exports===de,me=he&&le.process,ge=function(){try{var t=pe&&pe.require&&pe.require("util").types;return t||me&&me.binding&&me.binding("util")}catch(t){}}(),ve=ge&&ge.isArrayBuffer,ye=ge&&ge.isDate,be=ge&&ge.isMap,we=ge&&ge.isRegExp,xe=ge&&ge.isSet,ke=ge&&ge.isTypedArray;function _e(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function Ie(t,e,n,r){for(var i=-1,o=null==t?0:t.length;++i<o;){var a=t[i];e(r,a,n(a),t)}return r}function Ne(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t}function Se(t,e){for(var n=null==t?0:t.length;n--&&!1!==e(t[n],n,t););return t}function Ee(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(!e(t[n],n,t))return!1;return!0}function Ce(t,e){for(var n=-1,r=null==t?0:t.length,i=0,o=[];++n<r;){var a=t[n];e(a,n,t)&&(o[i++]=a)}return o}function Te(t,e){return!!(null==t?0:t.length)&&Ue(t,e,0)>-1}function Ae(t,e,n){for(var r=-1,i=null==t?0:t.length;++r<i;)if(n(e,t[r]))return!0;return!1}function Re(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}function Le(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}function Oe(t,e,n,r){var i=-1,o=null==t?0:t.length;for(r&&o&&(n=t[++i]);++i<o;)n=e(n,t[i],i,t);return n}function Pe(t,e,n,r){var i=null==t?0:t.length;for(r&&i&&(n=t[--i]);i--;)n=e(n,t[i],i,t);return n}function De(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}var ze=He("length");function Me(t,e,n){var r;return n(t,(function(t,n,i){if(e(t,n,i))return r=n,!1})),r}function je(t,e,n,r){for(var i=t.length,o=n+(r?1:-1);r?o--:++o<i;)if(e(t[o],o,t))return o;return-1}function Ue(t,e,n){return e==e?function(t,e,n){var r=n-1,i=t.length;for(;++r<i;)if(t[r]===e)return r;return-1}(t,e,n):je(t,Be,n)}function We(t,e,n,r){for(var i=n-1,o=t.length;++i<o;)if(r(t[i],e))return i;return-1}function Be(t){return t!=t}function Fe(t,e){var n=null==t?0:t.length;return n?Xe(t,e)/n:h}function He(t){return function(e){return null==e?r:e[t]}}function Ve(t){return function(e){return null==t?r:t[e]}}function $e(t,e,n,r,i){return i(t,(function(t,i,o){n=r?(r=!1,t):e(n,t,i,o)})),n}function Xe(t,e){for(var n,i=-1,o=t.length;++i<o;){var a=e(t[i]);a!==r&&(n=n===r?a:n+a)}return n}function qe(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}function Ke(t){return t?t.slice(0,pn(t)+1).replace(ot,""):t}function Ge(t){return function(e){return t(e)}}function Je(t,e){return Re(e,(function(e){return t[e]}))}function Ye(t,e){return t.has(e)}function Qe(t,e){for(var n=-1,r=t.length;++n<r&&Ue(e,t[n],0)>-1;);return n}function Ze(t,e){for(var n=t.length;n--&&Ue(e,t[n],0)>-1;);return n}function tn(t,e){for(var n=t.length,r=0;n--;)t[n]===e&&++r;return r}var en=Ve({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),nn=Ve({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function rn(t){return"\\"+ae[t]}function on(t){return te.test(t)}function an(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function sn(t,e){return function(n){return t(e(n))}}function cn(t,e){for(var n=-1,r=t.length,i=0,o=[];++n<r;){var s=t[n];s!==e&&s!==a||(t[n]=a,o[i++]=n)}return o}function ln(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}function un(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=[t,t]})),n}function fn(t){return on(t)?function(t){var e=Qt.lastIndex=0;for(;Qt.test(t);)++e;return e}(t):ze(t)}function dn(t){return on(t)?function(t){return t.match(Qt)||[]}(t):function(t){return t.split("")}(t)}function pn(t){for(var e=t.length;e--&&at.test(t.charAt(e)););return e}var hn=Ve({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var mn=function t(e){var n,at=(e=null==e?fe:mn.defaults(fe.Object(),e,mn.pick(fe,ne))).Array,_t=e.Date,It=e.Error,Nt=e.Function,St=e.Math,Et=e.Object,Ct=e.RegExp,Tt=e.String,At=e.TypeError,Rt=at.prototype,Lt=Nt.prototype,Ot=Et.prototype,Pt=e["__core-js_shared__"],Dt=Lt.toString,zt=Ot.hasOwnProperty,Mt=0,jt=(n=/[^.]+$/.exec(Pt&&Pt.keys&&Pt.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"",Ut=Ot.toString,Wt=Dt.call(Et),Bt=fe._,Ft=Ct("^"+Dt.call(zt).replace(rt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ht=he?e.Buffer:r,Vt=e.Symbol,$t=e.Uint8Array,Xt=Ht?Ht.allocUnsafe:r,qt=sn(Et.getPrototypeOf,Et),Kt=Et.create,Gt=Ot.propertyIsEnumerable,Qt=Rt.splice,te=Vt?Vt.isConcatSpreadable:r,ae=Vt?Vt.iterator:r,le=Vt?Vt.toStringTag:r,ue=function(){try{var t=ho(Et,"defineProperty");return t({},"",{}),t}catch(t){}}(),de=e.clearTimeout!==fe.clearTimeout&&e.clearTimeout,pe=_t&&_t.now!==fe.Date.now&&_t.now,me=e.setTimeout!==fe.setTimeout&&e.setTimeout,ge=St.ceil,ze=St.floor,Ve=Et.getOwnPropertySymbols,gn=Ht?Ht.isBuffer:r,vn=e.isFinite,yn=Rt.join,bn=sn(Et.keys,Et),wn=St.max,xn=St.min,kn=_t.now,_n=e.parseInt,In=St.random,Nn=Rt.reverse,Sn=ho(e,"DataView"),En=ho(e,"Map"),Cn=ho(e,"Promise"),Tn=ho(e,"Set"),An=ho(e,"WeakMap"),Rn=ho(Et,"create"),Ln=An&&new An,On={},Pn=Vo(Sn),Dn=Vo(En),zn=Vo(Cn),Mn=Vo(Tn),jn=Vo(An),Un=Vt?Vt.prototype:r,Wn=Un?Un.valueOf:r,Bn=Un?Un.toString:r;function Fn(t){if(ss(t)&&!Ja(t)&&!(t instanceof Xn)){if(t instanceof $n)return t;if(zt.call(t,"__wrapped__"))return $o(t)}return new $n(t)}var Hn=function(){function t(){}return function(e){if(!as(e))return{};if(Kt)return Kt(e);t.prototype=e;var n=new t;return t.prototype=r,n}}();function Vn(){}function $n(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=r}function Xn(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=m,this.__views__=[]}function qn(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Kn(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Gn(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Jn(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new Gn;++e<n;)this.add(t[e])}function Yn(t){var e=this.__data__=new Kn(t);this.size=e.size}function Qn(t,e){var n=Ja(t),r=!n&&Ga(t),i=!n&&!r&&ts(t),o=!n&&!r&&!i&&ms(t),a=n||r||i||o,s=a?qe(t.length,Tt):[],c=s.length;for(var l in t)!e&&!zt.call(t,l)||a&&("length"==l||i&&("offset"==l||"parent"==l)||o&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||xo(l,c))||s.push(l);return s}function Zn(t){var e=t.length;return e?t[Jr(0,e-1)]:r}function tr(t,e){return jo(Ri(t),lr(e,0,t.length))}function er(t){return jo(Ri(t))}function nr(t,e,n){(n!==r&&!Xa(t[e],n)||n===r&&!(e in t))&&sr(t,e,n)}function rr(t,e,n){var i=t[e];zt.call(t,e)&&Xa(i,n)&&(n!==r||e in t)||sr(t,e,n)}function ir(t,e){for(var n=t.length;n--;)if(Xa(t[n][0],e))return n;return-1}function or(t,e,n,r){return hr(t,(function(t,i,o){e(r,t,n(t),o)})),r}function ar(t,e){return t&&Li(e,Ms(e),t)}function sr(t,e,n){"__proto__"==e&&ue?ue(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function cr(t,e){for(var n=-1,i=e.length,o=at(i),a=null==t;++n<i;)o[n]=a?r:Ls(t,e[n]);return o}function lr(t,e,n){return t==t&&(n!==r&&(t=t<=n?t:n),e!==r&&(t=t>=e?t:e)),t}function ur(t,e,n,i,o,a){var s,c=1&e,l=2&e,u=4&e;if(n&&(s=o?n(t,i,o,a):n(t)),s!==r)return s;if(!as(t))return t;var f=Ja(t);if(f){if(s=function(t){var e=t.length,n=new t.constructor(e);e&&"string"==typeof t[0]&&zt.call(t,"index")&&(n.index=t.index,n.input=t.input);return n}(t),!c)return Ri(t,s)}else{var d=vo(t),p=d==k||d==_;if(ts(t))return Ni(t,c);if(d==S||d==v||p&&!o){if(s=l||p?{}:bo(t),!c)return l?function(t,e){return Li(t,go(t),e)}(t,function(t,e){return t&&Li(e,js(e),t)}(s,t)):function(t,e){return Li(t,mo(t),e)}(t,ar(s,t))}else{if(!oe[d])return o?t:{};s=function(t,e,n){var r=t.constructor;switch(e){case O:return Si(t);case b:case w:return new r(+t);case P:return function(t,e){var n=e?Si(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,n);case D:case z:case M:case j:case U:case W:case B:case F:case H:return Ei(t,n);case I:return new r;case N:case A:return new r(t);case C:return function(t){var e=new t.constructor(t.source,ht.exec(t));return e.lastIndex=t.lastIndex,e}(t);case T:return new r;case R:return i=t,Wn?Et(Wn.call(i)):{}}var i}(t,d,c)}}a||(a=new Yn);var h=a.get(t);if(h)return h;a.set(t,s),ds(t)?t.forEach((function(r){s.add(ur(r,e,n,r,t,a))})):cs(t)&&t.forEach((function(r,i){s.set(i,ur(r,e,n,i,t,a))}));var m=f?r:(u?l?ao:oo:l?js:Ms)(t);return Ne(m||t,(function(r,i){m&&(r=t[i=r]),rr(s,i,ur(r,e,n,i,t,a))})),s}function fr(t,e,n){var i=n.length;if(null==t)return!i;for(t=Et(t);i--;){var o=n[i],a=e[o],s=t[o];if(s===r&&!(o in t)||!a(s))return!1}return!0}function dr(t,e,n){if("function"!=typeof t)throw new At(i);return Po((function(){t.apply(r,n)}),e)}function pr(t,e,n,r){var i=-1,o=Te,a=!0,s=t.length,c=[],l=e.length;if(!s)return c;n&&(e=Re(e,Ge(n))),r?(o=Ae,a=!1):e.length>=200&&(o=Ye,a=!1,e=new Jn(e));t:for(;++i<s;){var u=t[i],f=null==n?u:n(u);if(u=r||0!==u?u:0,a&&f==f){for(var d=l;d--;)if(e[d]===f)continue t;c.push(u)}else o(e,f,r)||c.push(u)}return c}Fn.templateSettings={escape:Y,evaluate:Q,interpolate:Z,variable:"",imports:{_:Fn}},Fn.prototype=Vn.prototype,Fn.prototype.constructor=Fn,$n.prototype=Hn(Vn.prototype),$n.prototype.constructor=$n,Xn.prototype=Hn(Vn.prototype),Xn.prototype.constructor=Xn,qn.prototype.clear=function(){this.__data__=Rn?Rn(null):{},this.size=0},qn.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},qn.prototype.get=function(t){var e=this.__data__;if(Rn){var n=e[t];return n===o?r:n}return zt.call(e,t)?e[t]:r},qn.prototype.has=function(t){var e=this.__data__;return Rn?e[t]!==r:zt.call(e,t)},qn.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Rn&&e===r?o:e,this},Kn.prototype.clear=function(){this.__data__=[],this.size=0},Kn.prototype.delete=function(t){var e=this.__data__,n=ir(e,t);return!(n<0)&&(n==e.length-1?e.pop():Qt.call(e,n,1),--this.size,!0)},Kn.prototype.get=function(t){var e=this.__data__,n=ir(e,t);return n<0?r:e[n][1]},Kn.prototype.has=function(t){return ir(this.__data__,t)>-1},Kn.prototype.set=function(t,e){var n=this.__data__,r=ir(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this},Gn.prototype.clear=function(){this.size=0,this.__data__={hash:new qn,map:new(En||Kn),string:new qn}},Gn.prototype.delete=function(t){var e=fo(this,t).delete(t);return this.size-=e?1:0,e},Gn.prototype.get=function(t){return fo(this,t).get(t)},Gn.prototype.has=function(t){return fo(this,t).has(t)},Gn.prototype.set=function(t,e){var n=fo(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this},Jn.prototype.add=Jn.prototype.push=function(t){return this.__data__.set(t,o),this},Jn.prototype.has=function(t){return this.__data__.has(t)},Yn.prototype.clear=function(){this.__data__=new Kn,this.size=0},Yn.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},Yn.prototype.get=function(t){return this.__data__.get(t)},Yn.prototype.has=function(t){return this.__data__.has(t)},Yn.prototype.set=function(t,e){var n=this.__data__;if(n instanceof Kn){var r=n.__data__;if(!En||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Gn(r)}return n.set(t,e),this.size=n.size,this};var hr=Di(kr),mr=Di(_r,!0);function gr(t,e){var n=!0;return hr(t,(function(t,r,i){return n=!!e(t,r,i)})),n}function vr(t,e,n){for(var i=-1,o=t.length;++i<o;){var a=t[i],s=e(a);if(null!=s&&(c===r?s==s&&!hs(s):n(s,c)))var c=s,l=a}return l}function yr(t,e){var n=[];return hr(t,(function(t,r,i){e(t,r,i)&&n.push(t)})),n}function br(t,e,n,r,i){var o=-1,a=t.length;for(n||(n=wo),i||(i=[]);++o<a;){var s=t[o];e>0&&n(s)?e>1?br(s,e-1,n,r,i):Le(i,s):r||(i[i.length]=s)}return i}var wr=zi(),xr=zi(!0);function kr(t,e){return t&&wr(t,e,Ms)}function _r(t,e){return t&&xr(t,e,Ms)}function Ir(t,e){return Ce(e,(function(e){return rs(t[e])}))}function Nr(t,e){for(var n=0,i=(e=xi(e,t)).length;null!=t&&n<i;)t=t[Ho(e[n++])];return n&&n==i?t:r}function Sr(t,e,n){var r=e(t);return Ja(t)?r:Le(r,n(t))}function Er(t){return null==t?t===r?"[object Undefined]":"[object Null]":le&&le in Et(t)?function(t){var e=zt.call(t,le),n=t[le];try{t[le]=r;var i=!0}catch(t){}var o=Ut.call(t);i&&(e?t[le]=n:delete t[le]);return o}(t):function(t){return Ut.call(t)}(t)}function Cr(t,e){return t>e}function Tr(t,e){return null!=t&&zt.call(t,e)}function Ar(t,e){return null!=t&&e in Et(t)}function Rr(t,e,n){for(var i=n?Ae:Te,o=t[0].length,a=t.length,s=a,c=at(a),l=1/0,u=[];s--;){var f=t[s];s&&e&&(f=Re(f,Ge(e))),l=xn(f.length,l),c[s]=!n&&(e||o>=120&&f.length>=120)?new Jn(s&&f):r}f=t[0];var d=-1,p=c[0];t:for(;++d<o&&u.length<l;){var h=f[d],m=e?e(h):h;if(h=n||0!==h?h:0,!(p?Ye(p,m):i(u,m,n))){for(s=a;--s;){var g=c[s];if(!(g?Ye(g,m):i(t[s],m,n)))continue t}p&&p.push(m),u.push(h)}}return u}function Lr(t,e,n){var i=null==(t=Ao(t,e=xi(e,t)))?t:t[Ho(na(e))];return null==i?r:_e(i,t,n)}function Or(t){return ss(t)&&Er(t)==v}function Pr(t,e,n,i,o){return t===e||(null==t||null==e||!ss(t)&&!ss(e)?t!=t&&e!=e:function(t,e,n,i,o,a){var s=Ja(t),c=Ja(e),l=s?y:vo(t),u=c?y:vo(e),f=(l=l==v?S:l)==S,d=(u=u==v?S:u)==S,p=l==u;if(p&&ts(t)){if(!ts(e))return!1;s=!0,f=!1}if(p&&!f)return a||(a=new Yn),s||ms(t)?ro(t,e,n,i,o,a):function(t,e,n,r,i,o,a){switch(n){case P:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case O:return!(t.byteLength!=e.byteLength||!o(new $t(t),new $t(e)));case b:case w:case N:return Xa(+t,+e);case x:return t.name==e.name&&t.message==e.message;case C:case A:return t==e+"";case I:var s=an;case T:var c=1&r;if(s||(s=ln),t.size!=e.size&&!c)return!1;var l=a.get(t);if(l)return l==e;r|=2,a.set(t,e);var u=ro(s(t),s(e),r,i,o,a);return a.delete(t),u;case R:if(Wn)return Wn.call(t)==Wn.call(e)}return!1}(t,e,l,n,i,o,a);if(!(1&n)){var h=f&&zt.call(t,"__wrapped__"),m=d&&zt.call(e,"__wrapped__");if(h||m){var g=h?t.value():t,k=m?e.value():e;return a||(a=new Yn),o(g,k,n,i,a)}}return!!p&&(a||(a=new Yn),function(t,e,n,i,o,a){var s=1&n,c=oo(t),l=c.length,u=oo(e).length;if(l!=u&&!s)return!1;var f=l;for(;f--;){var d=c[f];if(!(s?d in e:zt.call(e,d)))return!1}var p=a.get(t),h=a.get(e);if(p&&h)return p==e&&h==t;var m=!0;a.set(t,e),a.set(e,t);var g=s;for(;++f<l;){var v=t[d=c[f]],y=e[d];if(i)var b=s?i(y,v,d,e,t,a):i(v,y,d,t,e,a);if(!(b===r?v===y||o(v,y,n,i,a):b)){m=!1;break}g||(g="constructor"==d)}if(m&&!g){var w=t.constructor,x=e.constructor;w==x||!("constructor"in t)||!("constructor"in e)||"function"==typeof w&&w instanceof w&&"function"==typeof x&&x instanceof x||(m=!1)}return a.delete(t),a.delete(e),m}(t,e,n,i,o,a))}(t,e,n,i,Pr,o))}function Dr(t,e,n,i){var o=n.length,a=o,s=!i;if(null==t)return!a;for(t=Et(t);o--;){var c=n[o];if(s&&c[2]?c[1]!==t[c[0]]:!(c[0]in t))return!1}for(;++o<a;){var l=(c=n[o])[0],u=t[l],f=c[1];if(s&&c[2]){if(u===r&&!(l in t))return!1}else{var d=new Yn;if(i)var p=i(u,f,l,t,e,d);if(!(p===r?Pr(f,u,3,i,d):p))return!1}}return!0}function zr(t){return!(!as(t)||(e=t,jt&&jt in e))&&(rs(t)?Ft:vt).test(Vo(t));var e}function Mr(t){return"function"==typeof t?t:null==t?lc:"object"==typeof t?Ja(t)?Hr(t[0],t[1]):Fr(t):yc(t)}function jr(t){if(!So(t))return bn(t);var e=[];for(var n in Et(t))zt.call(t,n)&&"constructor"!=n&&e.push(n);return e}function Ur(t){if(!as(t))return function(t){var e=[];if(null!=t)for(var n in Et(t))e.push(n);return e}(t);var e=So(t),n=[];for(var r in t)("constructor"!=r||!e&&zt.call(t,r))&&n.push(r);return n}function Wr(t,e){return t<e}function Br(t,e){var n=-1,r=Qa(t)?at(t.length):[];return hr(t,(function(t,i,o){r[++n]=e(t,i,o)})),r}function Fr(t){var e=po(t);return 1==e.length&&e[0][2]?Co(e[0][0],e[0][1]):function(n){return n===t||Dr(n,t,e)}}function Hr(t,e){return _o(t)&&Eo(e)?Co(Ho(t),e):function(n){var i=Ls(n,t);return i===r&&i===e?Os(n,t):Pr(e,i,3)}}function Vr(t,e,n,i,o){t!==e&&wr(e,(function(a,s){if(o||(o=new Yn),as(a))!function(t,e,n,i,o,a,s){var c=Lo(t,n),l=Lo(e,n),u=s.get(l);if(u)return void nr(t,n,u);var f=a?a(c,l,n+"",t,e,s):r,d=f===r;if(d){var p=Ja(l),h=!p&&ts(l),m=!p&&!h&&ms(l);f=l,p||h||m?Ja(c)?f=c:Za(c)?f=Ri(c):h?(d=!1,f=Ni(l,!0)):m?(d=!1,f=Ei(l,!0)):f=[]:us(l)||Ga(l)?(f=c,Ga(c)?f=_s(c):as(c)&&!rs(c)||(f=bo(l))):d=!1}d&&(s.set(l,f),o(f,l,i,a,s),s.delete(l));nr(t,n,f)}(t,e,s,n,Vr,i,o);else{var c=i?i(Lo(t,s),a,s+"",t,e,o):r;c===r&&(c=a),nr(t,s,c)}}),js)}function $r(t,e){var n=t.length;if(n)return xo(e+=e<0?n:0,n)?t[e]:r}function Xr(t,e,n){e=e.length?Re(e,(function(t){return Ja(t)?function(e){return Nr(e,1===t.length?t[0]:t)}:t})):[lc];var r=-1;return e=Re(e,Ge(uo())),function(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t}(Br(t,(function(t,n,i){return{criteria:Re(e,(function(e){return e(t)})),index:++r,value:t}})),(function(t,e){return function(t,e,n){var r=-1,i=t.criteria,o=e.criteria,a=i.length,s=n.length;for(;++r<a;){var c=Ci(i[r],o[r]);if(c)return r>=s?c:c*("desc"==n[r]?-1:1)}return t.index-e.index}(t,e,n)}))}function qr(t,e,n){for(var r=-1,i=e.length,o={};++r<i;){var a=e[r],s=Nr(t,a);n(s,a)&&ei(o,xi(a,t),s)}return o}function Kr(t,e,n,r){var i=r?We:Ue,o=-1,a=e.length,s=t;for(t===e&&(e=Ri(e)),n&&(s=Re(t,Ge(n)));++o<a;)for(var c=0,l=e[o],u=n?n(l):l;(c=i(s,u,c,r))>-1;)s!==t&&Qt.call(s,c,1),Qt.call(t,c,1);return t}function Gr(t,e){for(var n=t?e.length:0,r=n-1;n--;){var i=e[n];if(n==r||i!==o){var o=i;xo(i)?Qt.call(t,i,1):pi(t,i)}}return t}function Jr(t,e){return t+ze(In()*(e-t+1))}function Yr(t,e){var n="";if(!t||e<1||e>p)return n;do{e%2&&(n+=t),(e=ze(e/2))&&(t+=t)}while(e);return n}function Qr(t,e){return Do(To(t,e,lc),t+"")}function Zr(t){return Zn(Xs(t))}function ti(t,e){var n=Xs(t);return jo(n,lr(e,0,n.length))}function ei(t,e,n,i){if(!as(t))return t;for(var o=-1,a=(e=xi(e,t)).length,s=a-1,c=t;null!=c&&++o<a;){var l=Ho(e[o]),u=n;if("__proto__"===l||"constructor"===l||"prototype"===l)return t;if(o!=s){var f=c[l];(u=i?i(f,l,c):r)===r&&(u=as(f)?f:xo(e[o+1])?[]:{})}rr(c,l,u),c=c[l]}return t}var ni=Ln?function(t,e){return Ln.set(t,e),t}:lc,ri=ue?function(t,e){return ue(t,"toString",{configurable:!0,enumerable:!1,value:ac(e),writable:!0})}:lc;function ii(t){return jo(Xs(t))}function oi(t,e,n){var r=-1,i=t.length;e<0&&(e=-e>i?0:i+e),(n=n>i?i:n)<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;for(var o=at(i);++r<i;)o[r]=t[r+e];return o}function ai(t,e){var n;return hr(t,(function(t,r,i){return!(n=e(t,r,i))})),!!n}function si(t,e,n){var r=0,i=null==t?r:t.length;if("number"==typeof e&&e==e&&i<=2147483647){for(;r<i;){var o=r+i>>>1,a=t[o];null!==a&&!hs(a)&&(n?a<=e:a<e)?r=o+1:i=o}return i}return ci(t,e,lc,n)}function ci(t,e,n,i){var o=0,a=null==t?0:t.length;if(0===a)return 0;for(var s=(e=n(e))!=e,c=null===e,l=hs(e),u=e===r;o<a;){var f=ze((o+a)/2),d=n(t[f]),p=d!==r,h=null===d,m=d==d,g=hs(d);if(s)var v=i||m;else v=u?m&&(i||p):c?m&&p&&(i||!h):l?m&&p&&!h&&(i||!g):!h&&!g&&(i?d<=e:d<e);v?o=f+1:a=f}return xn(a,4294967294)}function li(t,e){for(var n=-1,r=t.length,i=0,o=[];++n<r;){var a=t[n],s=e?e(a):a;if(!n||!Xa(s,c)){var c=s;o[i++]=0===a?0:a}}return o}function ui(t){return"number"==typeof t?t:hs(t)?h:+t}function fi(t){if("string"==typeof t)return t;if(Ja(t))return Re(t,fi)+"";if(hs(t))return Bn?Bn.call(t):"";var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function di(t,e,n){var r=-1,i=Te,o=t.length,a=!0,s=[],c=s;if(n)a=!1,i=Ae;else if(o>=200){var l=e?null:Yi(t);if(l)return ln(l);a=!1,i=Ye,c=new Jn}else c=e?[]:s;t:for(;++r<o;){var u=t[r],f=e?e(u):u;if(u=n||0!==u?u:0,a&&f==f){for(var d=c.length;d--;)if(c[d]===f)continue t;e&&c.push(f),s.push(u)}else i(c,f,n)||(c!==s&&c.push(f),s.push(u))}return s}function pi(t,e){return null==(t=Ao(t,e=xi(e,t)))||delete t[Ho(na(e))]}function hi(t,e,n,r){return ei(t,e,n(Nr(t,e)),r)}function mi(t,e,n,r){for(var i=t.length,o=r?i:-1;(r?o--:++o<i)&&e(t[o],o,t););return n?oi(t,r?0:o,r?o+1:i):oi(t,r?o+1:0,r?i:o)}function gi(t,e){var n=t;return n instanceof Xn&&(n=n.value()),Oe(e,(function(t,e){return e.func.apply(e.thisArg,Le([t],e.args))}),n)}function vi(t,e,n){var r=t.length;if(r<2)return r?di(t[0]):[];for(var i=-1,o=at(r);++i<r;)for(var a=t[i],s=-1;++s<r;)s!=i&&(o[i]=pr(o[i]||a,t[s],e,n));return di(br(o,1),e,n)}function yi(t,e,n){for(var i=-1,o=t.length,a=e.length,s={};++i<o;){var c=i<a?e[i]:r;n(s,t[i],c)}return s}function bi(t){return Za(t)?t:[]}function wi(t){return"function"==typeof t?t:lc}function xi(t,e){return Ja(t)?t:_o(t,e)?[t]:Fo(Is(t))}var ki=Qr;function _i(t,e,n){var i=t.length;return n=n===r?i:n,!e&&n>=i?t:oi(t,e,n)}var Ii=de||function(t){return fe.clearTimeout(t)};function Ni(t,e){if(e)return t.slice();var n=t.length,r=Xt?Xt(n):new t.constructor(n);return t.copy(r),r}function Si(t){var e=new t.constructor(t.byteLength);return new $t(e).set(new $t(t)),e}function Ei(t,e){var n=e?Si(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function Ci(t,e){if(t!==e){var n=t!==r,i=null===t,o=t==t,a=hs(t),s=e!==r,c=null===e,l=e==e,u=hs(e);if(!c&&!u&&!a&&t>e||a&&s&&l&&!c&&!u||i&&s&&l||!n&&l||!o)return 1;if(!i&&!a&&!u&&t<e||u&&n&&o&&!i&&!a||c&&n&&o||!s&&o||!l)return-1}return 0}function Ti(t,e,n,r){for(var i=-1,o=t.length,a=n.length,s=-1,c=e.length,l=wn(o-a,0),u=at(c+l),f=!r;++s<c;)u[s]=e[s];for(;++i<a;)(f||i<o)&&(u[n[i]]=t[i]);for(;l--;)u[s++]=t[i++];return u}function Ai(t,e,n,r){for(var i=-1,o=t.length,a=-1,s=n.length,c=-1,l=e.length,u=wn(o-s,0),f=at(u+l),d=!r;++i<u;)f[i]=t[i];for(var p=i;++c<l;)f[p+c]=e[c];for(;++a<s;)(d||i<o)&&(f[p+n[a]]=t[i++]);return f}function Ri(t,e){var n=-1,r=t.length;for(e||(e=at(r));++n<r;)e[n]=t[n];return e}function Li(t,e,n,i){var o=!n;n||(n={});for(var a=-1,s=e.length;++a<s;){var c=e[a],l=i?i(n[c],t[c],c,n,t):r;l===r&&(l=t[c]),o?sr(n,c,l):rr(n,c,l)}return n}function Oi(t,e){return function(n,r){var i=Ja(n)?Ie:or,o=e?e():{};return i(n,t,uo(r,2),o)}}function Pi(t){return Qr((function(e,n){var i=-1,o=n.length,a=o>1?n[o-1]:r,s=o>2?n[2]:r;for(a=t.length>3&&"function"==typeof a?(o--,a):r,s&&ko(n[0],n[1],s)&&(a=o<3?r:a,o=1),e=Et(e);++i<o;){var c=n[i];c&&t(e,c,i,a)}return e}))}function Di(t,e){return function(n,r){if(null==n)return n;if(!Qa(n))return t(n,r);for(var i=n.length,o=e?i:-1,a=Et(n);(e?o--:++o<i)&&!1!==r(a[o],o,a););return n}}function zi(t){return function(e,n,r){for(var i=-1,o=Et(e),a=r(e),s=a.length;s--;){var c=a[t?s:++i];if(!1===n(o[c],c,o))break}return e}}function Mi(t){return function(e){var n=on(e=Is(e))?dn(e):r,i=n?n[0]:e.charAt(0),o=n?_i(n,1).join(""):e.slice(1);return i[t]()+o}}function ji(t){return function(e){return Oe(rc(Gs(e).replace(Jt,"")),t,"")}}function Ui(t){return function(){var e=arguments;switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var n=Hn(t.prototype),r=t.apply(n,e);return as(r)?r:n}}function Wi(t){return function(e,n,i){var o=Et(e);if(!Qa(e)){var a=uo(n,3);e=Ms(e),n=function(t){return a(o[t],t,o)}}var s=t(e,n,i);return s>-1?o[a?e[s]:s]:r}}function Bi(t){return io((function(e){var n=e.length,o=n,a=$n.prototype.thru;for(t&&e.reverse();o--;){var s=e[o];if("function"!=typeof s)throw new At(i);if(a&&!c&&"wrapper"==co(s))var c=new $n([],!0)}for(o=c?o:n;++o<n;){var l=co(s=e[o]),u="wrapper"==l?so(s):r;c=u&&Io(u[0])&&424==u[1]&&!u[4].length&&1==u[9]?c[co(u[0])].apply(c,u[3]):1==s.length&&Io(s)?c[l]():c.thru(s)}return function(){var t=arguments,r=t[0];if(c&&1==t.length&&Ja(r))return c.plant(r).value();for(var i=0,o=n?e[i].apply(this,t):r;++i<n;)o=e[i].call(this,o);return o}}))}function Fi(t,e,n,i,o,a,s,c,l,f){var d=e&u,p=1&e,h=2&e,m=24&e,g=512&e,v=h?r:Ui(t);return function r(){for(var u=arguments.length,y=at(u),b=u;b--;)y[b]=arguments[b];if(m)var w=lo(r),x=tn(y,w);if(i&&(y=Ti(y,i,o,m)),a&&(y=Ai(y,a,s,m)),u-=x,m&&u<f){var k=cn(y,w);return Gi(t,e,Fi,r.placeholder,n,y,k,c,l,f-u)}var _=p?n:this,I=h?_[t]:t;return u=y.length,c?y=Ro(y,c):g&&u>1&&y.reverse(),d&&l<u&&(y.length=l),this&&this!==fe&&this instanceof r&&(I=v||Ui(I)),I.apply(_,y)}}function Hi(t,e){return function(n,r){return function(t,e,n,r){return kr(t,(function(t,i,o){e(r,n(t),i,o)})),r}(n,t,e(r),{})}}function Vi(t,e){return function(n,i){var o;if(n===r&&i===r)return e;if(n!==r&&(o=n),i!==r){if(o===r)return i;"string"==typeof n||"string"==typeof i?(n=fi(n),i=fi(i)):(n=ui(n),i=ui(i)),o=t(n,i)}return o}}function $i(t){return io((function(e){return e=Re(e,Ge(uo())),Qr((function(n){var r=this;return t(e,(function(t){return _e(t,r,n)}))}))}))}function Xi(t,e){var n=(e=e===r?" ":fi(e)).length;if(n<2)return n?Yr(e,t):e;var i=Yr(e,ge(t/fn(e)));return on(e)?_i(dn(i),0,t).join(""):i.slice(0,t)}function qi(t){return function(e,n,i){return i&&"number"!=typeof i&&ko(e,n,i)&&(n=i=r),e=bs(e),n===r?(n=e,e=0):n=bs(n),function(t,e,n,r){for(var i=-1,o=wn(ge((e-t)/(n||1)),0),a=at(o);o--;)a[r?o:++i]=t,t+=n;return a}(e,n,i=i===r?e<n?1:-1:bs(i),t)}}function Ki(t){return function(e,n){return"string"==typeof e&&"string"==typeof n||(e=ks(e),n=ks(n)),t(e,n)}}function Gi(t,e,n,i,o,a,s,u,f,d){var p=8&e;e|=p?c:l,4&(e&=~(p?l:c))||(e&=-4);var h=[t,e,o,p?a:r,p?s:r,p?r:a,p?r:s,u,f,d],m=n.apply(r,h);return Io(t)&&Oo(m,h),m.placeholder=i,zo(m,t,e)}function Ji(t){var e=St[t];return function(t,n){if(t=ks(t),(n=null==n?0:xn(ws(n),292))&&vn(t)){var r=(Is(t)+"e").split("e");return+((r=(Is(e(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return e(t)}}var Yi=Tn&&1/ln(new Tn([,-0]))[1]==d?function(t){return new Tn(t)}:hc;function Qi(t){return function(e){var n=vo(e);return n==I?an(e):n==T?un(e):function(t,e){return Re(e,(function(e){return[e,t[e]]}))}(e,t(e))}}function Zi(t,e,n,o,d,p,h,m){var g=2&e;if(!g&&"function"!=typeof t)throw new At(i);var v=o?o.length:0;if(v||(e&=-97,o=d=r),h=h===r?h:wn(ws(h),0),m=m===r?m:ws(m),v-=d?d.length:0,e&l){var y=o,b=d;o=d=r}var w=g?r:so(t),x=[t,e,n,o,d,y,b,p,h,m];if(w&&function(t,e){var n=t[1],r=e[1],i=n|r,o=i<131,s=r==u&&8==n||r==u&&n==f&&t[7].length<=e[8]||384==r&&e[7].length<=e[8]&&8==n;if(!o&&!s)return t;1&r&&(t[2]=e[2],i|=1&n?0:4);var c=e[3];if(c){var l=t[3];t[3]=l?Ti(l,c,e[4]):c,t[4]=l?cn(t[3],a):e[4]}(c=e[5])&&(l=t[5],t[5]=l?Ai(l,c,e[6]):c,t[6]=l?cn(t[5],a):e[6]);(c=e[7])&&(t[7]=c);r&u&&(t[8]=null==t[8]?e[8]:xn(t[8],e[8]));null==t[9]&&(t[9]=e[9]);t[0]=e[0],t[1]=i}(x,w),t=x[0],e=x[1],n=x[2],o=x[3],d=x[4],!(m=x[9]=x[9]===r?g?0:t.length:wn(x[9]-v,0))&&24&e&&(e&=-25),e&&1!=e)k=8==e||e==s?function(t,e,n){var i=Ui(t);return function o(){for(var a=arguments.length,s=at(a),c=a,l=lo(o);c--;)s[c]=arguments[c];var u=a<3&&s[0]!==l&&s[a-1]!==l?[]:cn(s,l);return(a-=u.length)<n?Gi(t,e,Fi,o.placeholder,r,s,u,r,r,n-a):_e(this&&this!==fe&&this instanceof o?i:t,this,s)}}(t,e,m):e!=c&&33!=e||d.length?Fi.apply(r,x):function(t,e,n,r){var i=1&e,o=Ui(t);return function e(){for(var a=-1,s=arguments.length,c=-1,l=r.length,u=at(l+s),f=this&&this!==fe&&this instanceof e?o:t;++c<l;)u[c]=r[c];for(;s--;)u[c++]=arguments[++a];return _e(f,i?n:this,u)}}(t,e,n,o);else var k=function(t,e,n){var r=1&e,i=Ui(t);return function e(){return(this&&this!==fe&&this instanceof e?i:t).apply(r?n:this,arguments)}}(t,e,n);return zo((w?ni:Oo)(k,x),t,e)}function to(t,e,n,i){return t===r||Xa(t,Ot[n])&&!zt.call(i,n)?e:t}function eo(t,e,n,i,o,a){return as(t)&&as(e)&&(a.set(e,t),Vr(t,e,r,eo,a),a.delete(e)),t}function no(t){return us(t)?r:t}function ro(t,e,n,i,o,a){var s=1&n,c=t.length,l=e.length;if(c!=l&&!(s&&l>c))return!1;var u=a.get(t),f=a.get(e);if(u&&f)return u==e&&f==t;var d=-1,p=!0,h=2&n?new Jn:r;for(a.set(t,e),a.set(e,t);++d<c;){var m=t[d],g=e[d];if(i)var v=s?i(g,m,d,e,t,a):i(m,g,d,t,e,a);if(v!==r){if(v)continue;p=!1;break}if(h){if(!De(e,(function(t,e){if(!Ye(h,e)&&(m===t||o(m,t,n,i,a)))return h.push(e)}))){p=!1;break}}else if(m!==g&&!o(m,g,n,i,a)){p=!1;break}}return a.delete(t),a.delete(e),p}function io(t){return Do(To(t,r,Yo),t+"")}function oo(t){return Sr(t,Ms,mo)}function ao(t){return Sr(t,js,go)}var so=Ln?function(t){return Ln.get(t)}:hc;function co(t){for(var e=t.name+"",n=On[e],r=zt.call(On,e)?n.length:0;r--;){var i=n[r],o=i.func;if(null==o||o==t)return i.name}return e}function lo(t){return(zt.call(Fn,"placeholder")?Fn:t).placeholder}function uo(){var t=Fn.iteratee||uc;return t=t===uc?Mr:t,arguments.length?t(arguments[0],arguments[1]):t}function fo(t,e){var n,r,i=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof e?"string":"hash"]:i.map}function po(t){for(var e=Ms(t),n=e.length;n--;){var r=e[n],i=t[r];e[n]=[r,i,Eo(i)]}return e}function ho(t,e){var n=function(t,e){return null==t?r:t[e]}(t,e);return zr(n)?n:r}var mo=Ve?function(t){return null==t?[]:(t=Et(t),Ce(Ve(t),(function(e){return Gt.call(t,e)})))}:xc,go=Ve?function(t){for(var e=[];t;)Le(e,mo(t)),t=qt(t);return e}:xc,vo=Er;function yo(t,e,n){for(var r=-1,i=(e=xi(e,t)).length,o=!1;++r<i;){var a=Ho(e[r]);if(!(o=null!=t&&n(t,a)))break;t=t[a]}return o||++r!=i?o:!!(i=null==t?0:t.length)&&os(i)&&xo(a,i)&&(Ja(t)||Ga(t))}function bo(t){return"function"!=typeof t.constructor||So(t)?{}:Hn(qt(t))}function wo(t){return Ja(t)||Ga(t)||!!(te&&t&&t[te])}function xo(t,e){var n=typeof t;return!!(e=null==e?p:e)&&("number"==n||"symbol"!=n&&bt.test(t))&&t>-1&&t%1==0&&t<e}function ko(t,e,n){if(!as(n))return!1;var r=typeof e;return!!("number"==r?Qa(n)&&xo(e,n.length):"string"==r&&e in n)&&Xa(n[e],t)}function _o(t,e){if(Ja(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!hs(t))||(et.test(t)||!tt.test(t)||null!=e&&t in Et(e))}function Io(t){var e=co(t),n=Fn[e];if("function"!=typeof n||!(e in Xn.prototype))return!1;if(t===n)return!0;var r=so(n);return!!r&&t===r[0]}(Sn&&vo(new Sn(new ArrayBuffer(1)))!=P||En&&vo(new En)!=I||Cn&&vo(Cn.resolve())!=E||Tn&&vo(new Tn)!=T||An&&vo(new An)!=L)&&(vo=function(t){var e=Er(t),n=e==S?t.constructor:r,i=n?Vo(n):"";if(i)switch(i){case Pn:return P;case Dn:return I;case zn:return E;case Mn:return T;case jn:return L}return e});var No=Pt?rs:kc;function So(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Ot)}function Eo(t){return t==t&&!as(t)}function Co(t,e){return function(n){return null!=n&&(n[t]===e&&(e!==r||t in Et(n)))}}function To(t,e,n){return e=wn(e===r?t.length-1:e,0),function(){for(var r=arguments,i=-1,o=wn(r.length-e,0),a=at(o);++i<o;)a[i]=r[e+i];i=-1;for(var s=at(e+1);++i<e;)s[i]=r[i];return s[e]=n(a),_e(t,this,s)}}function Ao(t,e){return e.length<2?t:Nr(t,oi(e,0,-1))}function Ro(t,e){for(var n=t.length,i=xn(e.length,n),o=Ri(t);i--;){var a=e[i];t[i]=xo(a,n)?o[a]:r}return t}function Lo(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]}var Oo=Mo(ni),Po=me||function(t,e){return fe.setTimeout(t,e)},Do=Mo(ri);function zo(t,e,n){var r=e+"";return Do(t,function(t,e){var n=e.length;if(!n)return t;var r=n-1;return e[r]=(n>1?"& ":"")+e[r],e=e.join(n>2?", ":" "),t.replace(st,"{\n/* [wrapped with "+e+"] */\n")}(r,function(t,e){return Ne(g,(function(n){var r="_."+n[0];e&n[1]&&!Te(t,r)&&t.push(r)})),t.sort()}(function(t){var e=t.match(ct);return e?e[1].split(lt):[]}(r),n)))}function Mo(t){var e=0,n=0;return function(){var i=kn(),o=16-(i-n);if(n=i,o>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(r,arguments)}}function jo(t,e){var n=-1,i=t.length,o=i-1;for(e=e===r?i:e;++n<e;){var a=Jr(n,o),s=t[a];t[a]=t[n],t[n]=s}return t.length=e,t}var Uo,Wo,Bo,Fo=(Uo=function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(nt,(function(t,n,r,i){e.push(r?i.replace(dt,"$1"):n||t)})),e},Wo=Wa(Uo,(function(t){return 500===Bo.size&&Bo.clear(),t})),Bo=Wo.cache,Wo);function Ho(t){if("string"==typeof t||hs(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function Vo(t){if(null!=t){try{return Dt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function $o(t){if(t instanceof Xn)return t.clone();var e=new $n(t.__wrapped__,t.__chain__);return e.__actions__=Ri(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}var Xo=Qr((function(t,e){return Za(t)?pr(t,br(e,1,Za,!0)):[]})),qo=Qr((function(t,e){var n=na(e);return Za(n)&&(n=r),Za(t)?pr(t,br(e,1,Za,!0),uo(n,2)):[]})),Ko=Qr((function(t,e){var n=na(e);return Za(n)&&(n=r),Za(t)?pr(t,br(e,1,Za,!0),r,n):[]}));function Go(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=null==n?0:ws(n);return i<0&&(i=wn(r+i,0)),je(t,uo(e,3),i)}function Jo(t,e,n){var i=null==t?0:t.length;if(!i)return-1;var o=i-1;return n!==r&&(o=ws(n),o=n<0?wn(i+o,0):xn(o,i-1)),je(t,uo(e,3),o,!0)}function Yo(t){return(null==t?0:t.length)?br(t,1):[]}function Qo(t){return t&&t.length?t[0]:r}var Zo=Qr((function(t){var e=Re(t,bi);return e.length&&e[0]===t[0]?Rr(e):[]})),ta=Qr((function(t){var e=na(t),n=Re(t,bi);return e===na(n)?e=r:n.pop(),n.length&&n[0]===t[0]?Rr(n,uo(e,2)):[]})),ea=Qr((function(t){var e=na(t),n=Re(t,bi);return(e="function"==typeof e?e:r)&&n.pop(),n.length&&n[0]===t[0]?Rr(n,r,e):[]}));function na(t){var e=null==t?0:t.length;return e?t[e-1]:r}var ra=Qr(ia);function ia(t,e){return t&&t.length&&e&&e.length?Kr(t,e):t}var oa=io((function(t,e){var n=null==t?0:t.length,r=cr(t,e);return Gr(t,Re(e,(function(t){return xo(t,n)?+t:t})).sort(Ci)),r}));function aa(t){return null==t?t:Nn.call(t)}var sa=Qr((function(t){return di(br(t,1,Za,!0))})),ca=Qr((function(t){var e=na(t);return Za(e)&&(e=r),di(br(t,1,Za,!0),uo(e,2))})),la=Qr((function(t){var e=na(t);return e="function"==typeof e?e:r,di(br(t,1,Za,!0),r,e)}));function ua(t){if(!t||!t.length)return[];var e=0;return t=Ce(t,(function(t){if(Za(t))return e=wn(t.length,e),!0})),qe(e,(function(e){return Re(t,He(e))}))}function fa(t,e){if(!t||!t.length)return[];var n=ua(t);return null==e?n:Re(n,(function(t){return _e(e,r,t)}))}var da=Qr((function(t,e){return Za(t)?pr(t,e):[]})),pa=Qr((function(t){return vi(Ce(t,Za))})),ha=Qr((function(t){var e=na(t);return Za(e)&&(e=r),vi(Ce(t,Za),uo(e,2))})),ma=Qr((function(t){var e=na(t);return e="function"==typeof e?e:r,vi(Ce(t,Za),r,e)})),ga=Qr(ua);var va=Qr((function(t){var e=t.length,n=e>1?t[e-1]:r;return n="function"==typeof n?(t.pop(),n):r,fa(t,n)}));function ya(t){var e=Fn(t);return e.__chain__=!0,e}function ba(t,e){return e(t)}var wa=io((function(t){var e=t.length,n=e?t[0]:0,i=this.__wrapped__,o=function(e){return cr(e,t)};return!(e>1||this.__actions__.length)&&i instanceof Xn&&xo(n)?((i=i.slice(n,+n+(e?1:0))).__actions__.push({func:ba,args:[o],thisArg:r}),new $n(i,this.__chain__).thru((function(t){return e&&!t.length&&t.push(r),t}))):this.thru(o)}));var xa=Oi((function(t,e,n){zt.call(t,n)?++t[n]:sr(t,n,1)}));var ka=Wi(Go),_a=Wi(Jo);function Ia(t,e){return(Ja(t)?Ne:hr)(t,uo(e,3))}function Na(t,e){return(Ja(t)?Se:mr)(t,uo(e,3))}var Sa=Oi((function(t,e,n){zt.call(t,n)?t[n].push(e):sr(t,n,[e])}));var Ea=Qr((function(t,e,n){var r=-1,i="function"==typeof e,o=Qa(t)?at(t.length):[];return hr(t,(function(t){o[++r]=i?_e(e,t,n):Lr(t,e,n)})),o})),Ca=Oi((function(t,e,n){sr(t,n,e)}));function Ta(t,e){return(Ja(t)?Re:Br)(t,uo(e,3))}var Aa=Oi((function(t,e,n){t[n?0:1].push(e)}),(function(){return[[],[]]}));var Ra=Qr((function(t,e){if(null==t)return[];var n=e.length;return n>1&&ko(t,e[0],e[1])?e=[]:n>2&&ko(e[0],e[1],e[2])&&(e=[e[0]]),Xr(t,br(e,1),[])})),La=pe||function(){return fe.Date.now()};function Oa(t,e,n){return e=n?r:e,e=t&&null==e?t.length:e,Zi(t,u,r,r,r,r,e)}function Pa(t,e){var n;if("function"!=typeof e)throw new At(i);return t=ws(t),function(){return--t>0&&(n=e.apply(this,arguments)),t<=1&&(e=r),n}}var Da=Qr((function(t,e,n){var r=1;if(n.length){var i=cn(n,lo(Da));r|=c}return Zi(t,r,e,n,i)})),za=Qr((function(t,e,n){var r=3;if(n.length){var i=cn(n,lo(za));r|=c}return Zi(e,r,t,n,i)}));function Ma(t,e,n){var o,a,s,c,l,u,f=0,d=!1,p=!1,h=!0;if("function"!=typeof t)throw new At(i);function m(e){var n=o,i=a;return o=a=r,f=e,c=t.apply(i,n)}function g(t){return f=t,l=Po(y,e),d?m(t):c}function v(t){var n=t-u;return u===r||n>=e||n<0||p&&t-f>=s}function y(){var t=La();if(v(t))return b(t);l=Po(y,function(t){var n=e-(t-u);return p?xn(n,s-(t-f)):n}(t))}function b(t){return l=r,h&&o?m(t):(o=a=r,c)}function w(){var t=La(),n=v(t);if(o=arguments,a=this,u=t,n){if(l===r)return g(u);if(p)return Ii(l),l=Po(y,e),m(u)}return l===r&&(l=Po(y,e)),c}return e=ks(e)||0,as(n)&&(d=!!n.leading,s=(p="maxWait"in n)?wn(ks(n.maxWait)||0,e):s,h="trailing"in n?!!n.trailing:h),w.cancel=function(){l!==r&&Ii(l),f=0,o=u=a=l=r},w.flush=function(){return l===r?c:b(La())},w}var ja=Qr((function(t,e){return dr(t,1,e)})),Ua=Qr((function(t,e,n){return dr(t,ks(e)||0,n)}));function Wa(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new At(i);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Wa.Cache||Gn),n}function Ba(t){if("function"!=typeof t)throw new At(i);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}Wa.Cache=Gn;var Fa=ki((function(t,e){var n=(e=1==e.length&&Ja(e[0])?Re(e[0],Ge(uo())):Re(br(e,1),Ge(uo()))).length;return Qr((function(r){for(var i=-1,o=xn(r.length,n);++i<o;)r[i]=e[i].call(this,r[i]);return _e(t,this,r)}))})),Ha=Qr((function(t,e){var n=cn(e,lo(Ha));return Zi(t,c,r,e,n)})),Va=Qr((function(t,e){var n=cn(e,lo(Va));return Zi(t,l,r,e,n)})),$a=io((function(t,e){return Zi(t,f,r,r,r,e)}));function Xa(t,e){return t===e||t!=t&&e!=e}var qa=Ki(Cr),Ka=Ki((function(t,e){return t>=e})),Ga=Or(function(){return arguments}())?Or:function(t){return ss(t)&&zt.call(t,"callee")&&!Gt.call(t,"callee")},Ja=at.isArray,Ya=ve?Ge(ve):function(t){return ss(t)&&Er(t)==O};function Qa(t){return null!=t&&os(t.length)&&!rs(t)}function Za(t){return ss(t)&&Qa(t)}var ts=gn||kc,es=ye?Ge(ye):function(t){return ss(t)&&Er(t)==w};function ns(t){if(!ss(t))return!1;var e=Er(t);return e==x||"[object DOMException]"==e||"string"==typeof t.message&&"string"==typeof t.name&&!us(t)}function rs(t){if(!as(t))return!1;var e=Er(t);return e==k||e==_||"[object AsyncFunction]"==e||"[object Proxy]"==e}function is(t){return"number"==typeof t&&t==ws(t)}function os(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=p}function as(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function ss(t){return null!=t&&"object"==typeof t}var cs=be?Ge(be):function(t){return ss(t)&&vo(t)==I};function ls(t){return"number"==typeof t||ss(t)&&Er(t)==N}function us(t){if(!ss(t)||Er(t)!=S)return!1;var e=qt(t);if(null===e)return!0;var n=zt.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&Dt.call(n)==Wt}var fs=we?Ge(we):function(t){return ss(t)&&Er(t)==C};var ds=xe?Ge(xe):function(t){return ss(t)&&vo(t)==T};function ps(t){return"string"==typeof t||!Ja(t)&&ss(t)&&Er(t)==A}function hs(t){return"symbol"==typeof t||ss(t)&&Er(t)==R}var ms=ke?Ge(ke):function(t){return ss(t)&&os(t.length)&&!!ie[Er(t)]};var gs=Ki(Wr),vs=Ki((function(t,e){return t<=e}));function ys(t){if(!t)return[];if(Qa(t))return ps(t)?dn(t):Ri(t);if(ae&&t[ae])return function(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}(t[ae]());var e=vo(t);return(e==I?an:e==T?ln:Xs)(t)}function bs(t){return t?(t=ks(t))===d||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}function ws(t){var e=bs(t),n=e%1;return e==e?n?e-n:e:0}function xs(t){return t?lr(ws(t),0,m):0}function ks(t){if("number"==typeof t)return t;if(hs(t))return h;if(as(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=as(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=Ke(t);var n=gt.test(t);return n||yt.test(t)?ce(t.slice(2),n?2:8):mt.test(t)?h:+t}function _s(t){return Li(t,js(t))}function Is(t){return null==t?"":fi(t)}var Ns=Pi((function(t,e){if(So(e)||Qa(e))Li(e,Ms(e),t);else for(var n in e)zt.call(e,n)&&rr(t,n,e[n])})),Ss=Pi((function(t,e){Li(e,js(e),t)})),Es=Pi((function(t,e,n,r){Li(e,js(e),t,r)})),Cs=Pi((function(t,e,n,r){Li(e,Ms(e),t,r)})),Ts=io(cr);var As=Qr((function(t,e){t=Et(t);var n=-1,i=e.length,o=i>2?e[2]:r;for(o&&ko(e[0],e[1],o)&&(i=1);++n<i;)for(var a=e[n],s=js(a),c=-1,l=s.length;++c<l;){var u=s[c],f=t[u];(f===r||Xa(f,Ot[u])&&!zt.call(t,u))&&(t[u]=a[u])}return t})),Rs=Qr((function(t){return t.push(r,eo),_e(Ws,r,t)}));function Ls(t,e,n){var i=null==t?r:Nr(t,e);return i===r?n:i}function Os(t,e){return null!=t&&yo(t,e,Ar)}var Ps=Hi((function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=Ut.call(e)),t[e]=n}),ac(lc)),Ds=Hi((function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=Ut.call(e)),zt.call(t,e)?t[e].push(n):t[e]=[n]}),uo),zs=Qr(Lr);function Ms(t){return Qa(t)?Qn(t):jr(t)}function js(t){return Qa(t)?Qn(t,!0):Ur(t)}var Us=Pi((function(t,e,n){Vr(t,e,n)})),Ws=Pi((function(t,e,n,r){Vr(t,e,n,r)})),Bs=io((function(t,e){var n={};if(null==t)return n;var r=!1;e=Re(e,(function(e){return e=xi(e,t),r||(r=e.length>1),e})),Li(t,ao(t),n),r&&(n=ur(n,7,no));for(var i=e.length;i--;)pi(n,e[i]);return n}));var Fs=io((function(t,e){return null==t?{}:function(t,e){return qr(t,e,(function(e,n){return Os(t,n)}))}(t,e)}));function Hs(t,e){if(null==t)return{};var n=Re(ao(t),(function(t){return[t]}));return e=uo(e),qr(t,n,(function(t,n){return e(t,n[0])}))}var Vs=Qi(Ms),$s=Qi(js);function Xs(t){return null==t?[]:Je(t,Ms(t))}var qs=ji((function(t,e,n){return e=e.toLowerCase(),t+(n?Ks(e):e)}));function Ks(t){return nc(Is(t).toLowerCase())}function Gs(t){return(t=Is(t))&&t.replace(wt,en).replace(Yt,"")}var Js=ji((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()})),Ys=ji((function(t,e,n){return t+(n?" ":"")+e.toLowerCase()})),Qs=Mi("toLowerCase");var Zs=ji((function(t,e,n){return t+(n?"_":"")+e.toLowerCase()}));var tc=ji((function(t,e,n){return t+(n?" ":"")+nc(e)}));var ec=ji((function(t,e,n){return t+(n?" ":"")+e.toUpperCase()})),nc=Mi("toUpperCase");function rc(t,e,n){return t=Is(t),(e=n?r:e)===r?function(t){return ee.test(t)}(t)?function(t){return t.match(Zt)||[]}(t):function(t){return t.match(ut)||[]}(t):t.match(e)||[]}var ic=Qr((function(t,e){try{return _e(t,r,e)}catch(t){return ns(t)?t:new It(t)}})),oc=io((function(t,e){return Ne(e,(function(e){e=Ho(e),sr(t,e,Da(t[e],t))})),t}));function ac(t){return function(){return t}}var sc=Bi(),cc=Bi(!0);function lc(t){return t}function uc(t){return Mr("function"==typeof t?t:ur(t,1))}var fc=Qr((function(t,e){return function(n){return Lr(n,t,e)}})),dc=Qr((function(t,e){return function(n){return Lr(t,n,e)}}));function pc(t,e,n){var r=Ms(e),i=Ir(e,r);null!=n||as(e)&&(i.length||!r.length)||(n=e,e=t,t=this,i=Ir(e,Ms(e)));var o=!(as(n)&&"chain"in n&&!n.chain),a=rs(t);return Ne(i,(function(n){var r=e[n];t[n]=r,a&&(t.prototype[n]=function(){var e=this.__chain__;if(o||e){var n=t(this.__wrapped__),i=n.__actions__=Ri(this.__actions__);return i.push({func:r,args:arguments,thisArg:t}),n.__chain__=e,n}return r.apply(t,Le([this.value()],arguments))})})),t}function hc(){}var mc=$i(Re),gc=$i(Ee),vc=$i(De);function yc(t){return _o(t)?He(Ho(t)):function(t){return function(e){return Nr(e,t)}}(t)}var bc=qi(),wc=qi(!0);function xc(){return[]}function kc(){return!1}var _c=Vi((function(t,e){return t+e}),0),Ic=Ji("ceil"),Nc=Vi((function(t,e){return t/e}),1),Sc=Ji("floor");var Ec,Cc=Vi((function(t,e){return t*e}),1),Tc=Ji("round"),Ac=Vi((function(t,e){return t-e}),0);return Fn.after=function(t,e){if("function"!=typeof e)throw new At(i);return t=ws(t),function(){if(--t<1)return e.apply(this,arguments)}},Fn.ary=Oa,Fn.assign=Ns,Fn.assignIn=Ss,Fn.assignInWith=Es,Fn.assignWith=Cs,Fn.at=Ts,Fn.before=Pa,Fn.bind=Da,Fn.bindAll=oc,Fn.bindKey=za,Fn.castArray=function(){if(!arguments.length)return[];var t=arguments[0];return Ja(t)?t:[t]},Fn.chain=ya,Fn.chunk=function(t,e,n){e=(n?ko(t,e,n):e===r)?1:wn(ws(e),0);var i=null==t?0:t.length;if(!i||e<1)return[];for(var o=0,a=0,s=at(ge(i/e));o<i;)s[a++]=oi(t,o,o+=e);return s},Fn.compact=function(t){for(var e=-1,n=null==t?0:t.length,r=0,i=[];++e<n;){var o=t[e];o&&(i[r++]=o)}return i},Fn.concat=function(){var t=arguments.length;if(!t)return[];for(var e=at(t-1),n=arguments[0],r=t;r--;)e[r-1]=arguments[r];return Le(Ja(n)?Ri(n):[n],br(e,1))},Fn.cond=function(t){var e=null==t?0:t.length,n=uo();return t=e?Re(t,(function(t){if("function"!=typeof t[1])throw new At(i);return[n(t[0]),t[1]]})):[],Qr((function(n){for(var r=-1;++r<e;){var i=t[r];if(_e(i[0],this,n))return _e(i[1],this,n)}}))},Fn.conforms=function(t){return function(t){var e=Ms(t);return function(n){return fr(n,t,e)}}(ur(t,1))},Fn.constant=ac,Fn.countBy=xa,Fn.create=function(t,e){var n=Hn(t);return null==e?n:ar(n,e)},Fn.curry=function t(e,n,i){var o=Zi(e,8,r,r,r,r,r,n=i?r:n);return o.placeholder=t.placeholder,o},Fn.curryRight=function t(e,n,i){var o=Zi(e,s,r,r,r,r,r,n=i?r:n);return o.placeholder=t.placeholder,o},Fn.debounce=Ma,Fn.defaults=As,Fn.defaultsDeep=Rs,Fn.defer=ja,Fn.delay=Ua,Fn.difference=Xo,Fn.differenceBy=qo,Fn.differenceWith=Ko,Fn.drop=function(t,e,n){var i=null==t?0:t.length;return i?oi(t,(e=n||e===r?1:ws(e))<0?0:e,i):[]},Fn.dropRight=function(t,e,n){var i=null==t?0:t.length;return i?oi(t,0,(e=i-(e=n||e===r?1:ws(e)))<0?0:e):[]},Fn.dropRightWhile=function(t,e){return t&&t.length?mi(t,uo(e,3),!0,!0):[]},Fn.dropWhile=function(t,e){return t&&t.length?mi(t,uo(e,3),!0):[]},Fn.fill=function(t,e,n,i){var o=null==t?0:t.length;return o?(n&&"number"!=typeof n&&ko(t,e,n)&&(n=0,i=o),function(t,e,n,i){var o=t.length;for((n=ws(n))<0&&(n=-n>o?0:o+n),(i=i===r||i>o?o:ws(i))<0&&(i+=o),i=n>i?0:xs(i);n<i;)t[n++]=e;return t}(t,e,n,i)):[]},Fn.filter=function(t,e){return(Ja(t)?Ce:yr)(t,uo(e,3))},Fn.flatMap=function(t,e){return br(Ta(t,e),1)},Fn.flatMapDeep=function(t,e){return br(Ta(t,e),d)},Fn.flatMapDepth=function(t,e,n){return n=n===r?1:ws(n),br(Ta(t,e),n)},Fn.flatten=Yo,Fn.flattenDeep=function(t){return(null==t?0:t.length)?br(t,d):[]},Fn.flattenDepth=function(t,e){return(null==t?0:t.length)?br(t,e=e===r?1:ws(e)):[]},Fn.flip=function(t){return Zi(t,512)},Fn.flow=sc,Fn.flowRight=cc,Fn.fromPairs=function(t){for(var e=-1,n=null==t?0:t.length,r={};++e<n;){var i=t[e];r[i[0]]=i[1]}return r},Fn.functions=function(t){return null==t?[]:Ir(t,Ms(t))},Fn.functionsIn=function(t){return null==t?[]:Ir(t,js(t))},Fn.groupBy=Sa,Fn.initial=function(t){return(null==t?0:t.length)?oi(t,0,-1):[]},Fn.intersection=Zo,Fn.intersectionBy=ta,Fn.intersectionWith=ea,Fn.invert=Ps,Fn.invertBy=Ds,Fn.invokeMap=Ea,Fn.iteratee=uc,Fn.keyBy=Ca,Fn.keys=Ms,Fn.keysIn=js,Fn.map=Ta,Fn.mapKeys=function(t,e){var n={};return e=uo(e,3),kr(t,(function(t,r,i){sr(n,e(t,r,i),t)})),n},Fn.mapValues=function(t,e){var n={};return e=uo(e,3),kr(t,(function(t,r,i){sr(n,r,e(t,r,i))})),n},Fn.matches=function(t){return Fr(ur(t,1))},Fn.matchesProperty=function(t,e){return Hr(t,ur(e,1))},Fn.memoize=Wa,Fn.merge=Us,Fn.mergeWith=Ws,Fn.method=fc,Fn.methodOf=dc,Fn.mixin=pc,Fn.negate=Ba,Fn.nthArg=function(t){return t=ws(t),Qr((function(e){return $r(e,t)}))},Fn.omit=Bs,Fn.omitBy=function(t,e){return Hs(t,Ba(uo(e)))},Fn.once=function(t){return Pa(2,t)},Fn.orderBy=function(t,e,n,i){return null==t?[]:(Ja(e)||(e=null==e?[]:[e]),Ja(n=i?r:n)||(n=null==n?[]:[n]),Xr(t,e,n))},Fn.over=mc,Fn.overArgs=Fa,Fn.overEvery=gc,Fn.overSome=vc,Fn.partial=Ha,Fn.partialRight=Va,Fn.partition=Aa,Fn.pick=Fs,Fn.pickBy=Hs,Fn.property=yc,Fn.propertyOf=function(t){return function(e){return null==t?r:Nr(t,e)}},Fn.pull=ra,Fn.pullAll=ia,Fn.pullAllBy=function(t,e,n){return t&&t.length&&e&&e.length?Kr(t,e,uo(n,2)):t},Fn.pullAllWith=function(t,e,n){return t&&t.length&&e&&e.length?Kr(t,e,r,n):t},Fn.pullAt=oa,Fn.range=bc,Fn.rangeRight=wc,Fn.rearg=$a,Fn.reject=function(t,e){return(Ja(t)?Ce:yr)(t,Ba(uo(e,3)))},Fn.remove=function(t,e){var n=[];if(!t||!t.length)return n;var r=-1,i=[],o=t.length;for(e=uo(e,3);++r<o;){var a=t[r];e(a,r,t)&&(n.push(a),i.push(r))}return Gr(t,i),n},Fn.rest=function(t,e){if("function"!=typeof t)throw new At(i);return Qr(t,e=e===r?e:ws(e))},Fn.reverse=aa,Fn.sampleSize=function(t,e,n){return e=(n?ko(t,e,n):e===r)?1:ws(e),(Ja(t)?tr:ti)(t,e)},Fn.set=function(t,e,n){return null==t?t:ei(t,e,n)},Fn.setWith=function(t,e,n,i){return i="function"==typeof i?i:r,null==t?t:ei(t,e,n,i)},Fn.shuffle=function(t){return(Ja(t)?er:ii)(t)},Fn.slice=function(t,e,n){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&ko(t,e,n)?(e=0,n=i):(e=null==e?0:ws(e),n=n===r?i:ws(n)),oi(t,e,n)):[]},Fn.sortBy=Ra,Fn.sortedUniq=function(t){return t&&t.length?li(t):[]},Fn.sortedUniqBy=function(t,e){return t&&t.length?li(t,uo(e,2)):[]},Fn.split=function(t,e,n){return n&&"number"!=typeof n&&ko(t,e,n)&&(e=n=r),(n=n===r?m:n>>>0)?(t=Is(t))&&("string"==typeof e||null!=e&&!fs(e))&&!(e=fi(e))&&on(t)?_i(dn(t),0,n):t.split(e,n):[]},Fn.spread=function(t,e){if("function"!=typeof t)throw new At(i);return e=null==e?0:wn(ws(e),0),Qr((function(n){var r=n[e],i=_i(n,0,e);return r&&Le(i,r),_e(t,this,i)}))},Fn.tail=function(t){var e=null==t?0:t.length;return e?oi(t,1,e):[]},Fn.take=function(t,e,n){return t&&t.length?oi(t,0,(e=n||e===r?1:ws(e))<0?0:e):[]},Fn.takeRight=function(t,e,n){var i=null==t?0:t.length;return i?oi(t,(e=i-(e=n||e===r?1:ws(e)))<0?0:e,i):[]},Fn.takeRightWhile=function(t,e){return t&&t.length?mi(t,uo(e,3),!1,!0):[]},Fn.takeWhile=function(t,e){return t&&t.length?mi(t,uo(e,3)):[]},Fn.tap=function(t,e){return e(t),t},Fn.throttle=function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new At(i);return as(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),Ma(t,e,{leading:r,maxWait:e,trailing:o})},Fn.thru=ba,Fn.toArray=ys,Fn.toPairs=Vs,Fn.toPairsIn=$s,Fn.toPath=function(t){return Ja(t)?Re(t,Ho):hs(t)?[t]:Ri(Fo(Is(t)))},Fn.toPlainObject=_s,Fn.transform=function(t,e,n){var r=Ja(t),i=r||ts(t)||ms(t);if(e=uo(e,4),null==n){var o=t&&t.constructor;n=i?r?new o:[]:as(t)&&rs(o)?Hn(qt(t)):{}}return(i?Ne:kr)(t,(function(t,r,i){return e(n,t,r,i)})),n},Fn.unary=function(t){return Oa(t,1)},Fn.union=sa,Fn.unionBy=ca,Fn.unionWith=la,Fn.uniq=function(t){return t&&t.length?di(t):[]},Fn.uniqBy=function(t,e){return t&&t.length?di(t,uo(e,2)):[]},Fn.uniqWith=function(t,e){return e="function"==typeof e?e:r,t&&t.length?di(t,r,e):[]},Fn.unset=function(t,e){return null==t||pi(t,e)},Fn.unzip=ua,Fn.unzipWith=fa,Fn.update=function(t,e,n){return null==t?t:hi(t,e,wi(n))},Fn.updateWith=function(t,e,n,i){return i="function"==typeof i?i:r,null==t?t:hi(t,e,wi(n),i)},Fn.values=Xs,Fn.valuesIn=function(t){return null==t?[]:Je(t,js(t))},Fn.without=da,Fn.words=rc,Fn.wrap=function(t,e){return Ha(wi(e),t)},Fn.xor=pa,Fn.xorBy=ha,Fn.xorWith=ma,Fn.zip=ga,Fn.zipObject=function(t,e){return yi(t||[],e||[],rr)},Fn.zipObjectDeep=function(t,e){return yi(t||[],e||[],ei)},Fn.zipWith=va,Fn.entries=Vs,Fn.entriesIn=$s,Fn.extend=Ss,Fn.extendWith=Es,pc(Fn,Fn),Fn.add=_c,Fn.attempt=ic,Fn.camelCase=qs,Fn.capitalize=Ks,Fn.ceil=Ic,Fn.clamp=function(t,e,n){return n===r&&(n=e,e=r),n!==r&&(n=(n=ks(n))==n?n:0),e!==r&&(e=(e=ks(e))==e?e:0),lr(ks(t),e,n)},Fn.clone=function(t){return ur(t,4)},Fn.cloneDeep=function(t){return ur(t,5)},Fn.cloneDeepWith=function(t,e){return ur(t,5,e="function"==typeof e?e:r)},Fn.cloneWith=function(t,e){return ur(t,4,e="function"==typeof e?e:r)},Fn.conformsTo=function(t,e){return null==e||fr(t,e,Ms(e))},Fn.deburr=Gs,Fn.defaultTo=function(t,e){return null==t||t!=t?e:t},Fn.divide=Nc,Fn.endsWith=function(t,e,n){t=Is(t),e=fi(e);var i=t.length,o=n=n===r?i:lr(ws(n),0,i);return(n-=e.length)>=0&&t.slice(n,o)==e},Fn.eq=Xa,Fn.escape=function(t){return(t=Is(t))&&J.test(t)?t.replace(K,nn):t},Fn.escapeRegExp=function(t){return(t=Is(t))&&it.test(t)?t.replace(rt,"\\$&"):t},Fn.every=function(t,e,n){var i=Ja(t)?Ee:gr;return n&&ko(t,e,n)&&(e=r),i(t,uo(e,3))},Fn.find=ka,Fn.findIndex=Go,Fn.findKey=function(t,e){return Me(t,uo(e,3),kr)},Fn.findLast=_a,Fn.findLastIndex=Jo,Fn.findLastKey=function(t,e){return Me(t,uo(e,3),_r)},Fn.floor=Sc,Fn.forEach=Ia,Fn.forEachRight=Na,Fn.forIn=function(t,e){return null==t?t:wr(t,uo(e,3),js)},Fn.forInRight=function(t,e){return null==t?t:xr(t,uo(e,3),js)},Fn.forOwn=function(t,e){return t&&kr(t,uo(e,3))},Fn.forOwnRight=function(t,e){return t&&_r(t,uo(e,3))},Fn.get=Ls,Fn.gt=qa,Fn.gte=Ka,Fn.has=function(t,e){return null!=t&&yo(t,e,Tr)},Fn.hasIn=Os,Fn.head=Qo,Fn.identity=lc,Fn.includes=function(t,e,n,r){t=Qa(t)?t:Xs(t),n=n&&!r?ws(n):0;var i=t.length;return n<0&&(n=wn(i+n,0)),ps(t)?n<=i&&t.indexOf(e,n)>-1:!!i&&Ue(t,e,n)>-1},Fn.indexOf=function(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=null==n?0:ws(n);return i<0&&(i=wn(r+i,0)),Ue(t,e,i)},Fn.inRange=function(t,e,n){return e=bs(e),n===r?(n=e,e=0):n=bs(n),function(t,e,n){return t>=xn(e,n)&&t<wn(e,n)}(t=ks(t),e,n)},Fn.invoke=zs,Fn.isArguments=Ga,Fn.isArray=Ja,Fn.isArrayBuffer=Ya,Fn.isArrayLike=Qa,Fn.isArrayLikeObject=Za,Fn.isBoolean=function(t){return!0===t||!1===t||ss(t)&&Er(t)==b},Fn.isBuffer=ts,Fn.isDate=es,Fn.isElement=function(t){return ss(t)&&1===t.nodeType&&!us(t)},Fn.isEmpty=function(t){if(null==t)return!0;if(Qa(t)&&(Ja(t)||"string"==typeof t||"function"==typeof t.splice||ts(t)||ms(t)||Ga(t)))return!t.length;var e=vo(t);if(e==I||e==T)return!t.size;if(So(t))return!jr(t).length;for(var n in t)if(zt.call(t,n))return!1;return!0},Fn.isEqual=function(t,e){return Pr(t,e)},Fn.isEqualWith=function(t,e,n){var i=(n="function"==typeof n?n:r)?n(t,e):r;return i===r?Pr(t,e,r,n):!!i},Fn.isError=ns,Fn.isFinite=function(t){return"number"==typeof t&&vn(t)},Fn.isFunction=rs,Fn.isInteger=is,Fn.isLength=os,Fn.isMap=cs,Fn.isMatch=function(t,e){return t===e||Dr(t,e,po(e))},Fn.isMatchWith=function(t,e,n){return n="function"==typeof n?n:r,Dr(t,e,po(e),n)},Fn.isNaN=function(t){return ls(t)&&t!=+t},Fn.isNative=function(t){if(No(t))throw new It("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return zr(t)},Fn.isNil=function(t){return null==t},Fn.isNull=function(t){return null===t},Fn.isNumber=ls,Fn.isObject=as,Fn.isObjectLike=ss,Fn.isPlainObject=us,Fn.isRegExp=fs,Fn.isSafeInteger=function(t){return is(t)&&t>=-9007199254740991&&t<=p},Fn.isSet=ds,Fn.isString=ps,Fn.isSymbol=hs,Fn.isTypedArray=ms,Fn.isUndefined=function(t){return t===r},Fn.isWeakMap=function(t){return ss(t)&&vo(t)==L},Fn.isWeakSet=function(t){return ss(t)&&"[object WeakSet]"==Er(t)},Fn.join=function(t,e){return null==t?"":yn.call(t,e)},Fn.kebabCase=Js,Fn.last=na,Fn.lastIndexOf=function(t,e,n){var i=null==t?0:t.length;if(!i)return-1;var o=i;return n!==r&&(o=(o=ws(n))<0?wn(i+o,0):xn(o,i-1)),e==e?function(t,e,n){for(var r=n+1;r--;)if(t[r]===e)return r;return r}(t,e,o):je(t,Be,o,!0)},Fn.lowerCase=Ys,Fn.lowerFirst=Qs,Fn.lt=gs,Fn.lte=vs,Fn.max=function(t){return t&&t.length?vr(t,lc,Cr):r},Fn.maxBy=function(t,e){return t&&t.length?vr(t,uo(e,2),Cr):r},Fn.mean=function(t){return Fe(t,lc)},Fn.meanBy=function(t,e){return Fe(t,uo(e,2))},Fn.min=function(t){return t&&t.length?vr(t,lc,Wr):r},Fn.minBy=function(t,e){return t&&t.length?vr(t,uo(e,2),Wr):r},Fn.stubArray=xc,Fn.stubFalse=kc,Fn.stubObject=function(){return{}},Fn.stubString=function(){return""},Fn.stubTrue=function(){return!0},Fn.multiply=Cc,Fn.nth=function(t,e){return t&&t.length?$r(t,ws(e)):r},Fn.noConflict=function(){return fe._===this&&(fe._=Bt),this},Fn.noop=hc,Fn.now=La,Fn.pad=function(t,e,n){t=Is(t);var r=(e=ws(e))?fn(t):0;if(!e||r>=e)return t;var i=(e-r)/2;return Xi(ze(i),n)+t+Xi(ge(i),n)},Fn.padEnd=function(t,e,n){t=Is(t);var r=(e=ws(e))?fn(t):0;return e&&r<e?t+Xi(e-r,n):t},Fn.padStart=function(t,e,n){t=Is(t);var r=(e=ws(e))?fn(t):0;return e&&r<e?Xi(e-r,n)+t:t},Fn.parseInt=function(t,e,n){return n||null==e?e=0:e&&(e=+e),_n(Is(t).replace(ot,""),e||0)},Fn.random=function(t,e,n){if(n&&"boolean"!=typeof n&&ko(t,e,n)&&(e=n=r),n===r&&("boolean"==typeof e?(n=e,e=r):"boolean"==typeof t&&(n=t,t=r)),t===r&&e===r?(t=0,e=1):(t=bs(t),e===r?(e=t,t=0):e=bs(e)),t>e){var i=t;t=e,e=i}if(n||t%1||e%1){var o=In();return xn(t+o*(e-t+se("1e-"+((o+"").length-1))),e)}return Jr(t,e)},Fn.reduce=function(t,e,n){var r=Ja(t)?Oe:$e,i=arguments.length<3;return r(t,uo(e,4),n,i,hr)},Fn.reduceRight=function(t,e,n){var r=Ja(t)?Pe:$e,i=arguments.length<3;return r(t,uo(e,4),n,i,mr)},Fn.repeat=function(t,e,n){return e=(n?ko(t,e,n):e===r)?1:ws(e),Yr(Is(t),e)},Fn.replace=function(){var t=arguments,e=Is(t[0]);return t.length<3?e:e.replace(t[1],t[2])},Fn.result=function(t,e,n){var i=-1,o=(e=xi(e,t)).length;for(o||(o=1,t=r);++i<o;){var a=null==t?r:t[Ho(e[i])];a===r&&(i=o,a=n),t=rs(a)?a.call(t):a}return t},Fn.round=Tc,Fn.runInContext=t,Fn.sample=function(t){return(Ja(t)?Zn:Zr)(t)},Fn.size=function(t){if(null==t)return 0;if(Qa(t))return ps(t)?fn(t):t.length;var e=vo(t);return e==I||e==T?t.size:jr(t).length},Fn.snakeCase=Zs,Fn.some=function(t,e,n){var i=Ja(t)?De:ai;return n&&ko(t,e,n)&&(e=r),i(t,uo(e,3))},Fn.sortedIndex=function(t,e){return si(t,e)},Fn.sortedIndexBy=function(t,e,n){return ci(t,e,uo(n,2))},Fn.sortedIndexOf=function(t,e){var n=null==t?0:t.length;if(n){var r=si(t,e);if(r<n&&Xa(t[r],e))return r}return-1},Fn.sortedLastIndex=function(t,e){return si(t,e,!0)},Fn.sortedLastIndexBy=function(t,e,n){return ci(t,e,uo(n,2),!0)},Fn.sortedLastIndexOf=function(t,e){if(null==t?0:t.length){var n=si(t,e,!0)-1;if(Xa(t[n],e))return n}return-1},Fn.startCase=tc,Fn.startsWith=function(t,e,n){return t=Is(t),n=null==n?0:lr(ws(n),0,t.length),e=fi(e),t.slice(n,n+e.length)==e},Fn.subtract=Ac,Fn.sum=function(t){return t&&t.length?Xe(t,lc):0},Fn.sumBy=function(t,e){return t&&t.length?Xe(t,uo(e,2)):0},Fn.template=function(t,e,n){var i=Fn.templateSettings;n&&ko(t,e,n)&&(e=r),t=Is(t),e=Es({},e,i,to);var o,a,s=Es({},e.imports,i.imports,to),c=Ms(s),l=Je(s,c),u=0,f=e.interpolate||xt,d="__p += '",p=Ct((e.escape||xt).source+"|"+f.source+"|"+(f===Z?pt:xt).source+"|"+(e.evaluate||xt).source+"|$","g"),h="//# sourceURL="+(zt.call(e,"sourceURL")?(e.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++re+"]")+"\n";t.replace(p,(function(e,n,r,i,s,c){return r||(r=i),d+=t.slice(u,c).replace(kt,rn),n&&(o=!0,d+="' +\n__e("+n+") +\n'"),s&&(a=!0,d+="';\n"+s+";\n__p += '"),r&&(d+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),u=c+e.length,e})),d+="';\n";var m=zt.call(e,"variable")&&e.variable;if(m){if(ft.test(m))throw new It("Invalid `variable` option passed into `_.template`")}else d="with (obj) {\n"+d+"\n}\n";d=(a?d.replace(V,""):d).replace($,"$1").replace(X,"$1;"),d="function("+(m||"obj")+") {\n"+(m?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+d+"return __p\n}";var g=ic((function(){return Nt(c,h+"return "+d).apply(r,l)}));if(g.source=d,ns(g))throw g;return g},Fn.times=function(t,e){if((t=ws(t))<1||t>p)return[];var n=m,r=xn(t,m);e=uo(e),t-=m;for(var i=qe(r,e);++n<t;)e(n);return i},Fn.toFinite=bs,Fn.toInteger=ws,Fn.toLength=xs,Fn.toLower=function(t){return Is(t).toLowerCase()},Fn.toNumber=ks,Fn.toSafeInteger=function(t){return t?lr(ws(t),-9007199254740991,p):0===t?t:0},Fn.toString=Is,Fn.toUpper=function(t){return Is(t).toUpperCase()},Fn.trim=function(t,e,n){if((t=Is(t))&&(n||e===r))return Ke(t);if(!t||!(e=fi(e)))return t;var i=dn(t),o=dn(e);return _i(i,Qe(i,o),Ze(i,o)+1).join("")},Fn.trimEnd=function(t,e,n){if((t=Is(t))&&(n||e===r))return t.slice(0,pn(t)+1);if(!t||!(e=fi(e)))return t;var i=dn(t);return _i(i,0,Ze(i,dn(e))+1).join("")},Fn.trimStart=function(t,e,n){if((t=Is(t))&&(n||e===r))return t.replace(ot,"");if(!t||!(e=fi(e)))return t;var i=dn(t);return _i(i,Qe(i,dn(e))).join("")},Fn.truncate=function(t,e){var n=30,i="...";if(as(e)){var o="separator"in e?e.separator:o;n="length"in e?ws(e.length):n,i="omission"in e?fi(e.omission):i}var a=(t=Is(t)).length;if(on(t)){var s=dn(t);a=s.length}if(n>=a)return t;var c=n-fn(i);if(c<1)return i;var l=s?_i(s,0,c).join(""):t.slice(0,c);if(o===r)return l+i;if(s&&(c+=l.length-c),fs(o)){if(t.slice(c).search(o)){var u,f=l;for(o.global||(o=Ct(o.source,Is(ht.exec(o))+"g")),o.lastIndex=0;u=o.exec(f);)var d=u.index;l=l.slice(0,d===r?c:d)}}else if(t.indexOf(fi(o),c)!=c){var p=l.lastIndexOf(o);p>-1&&(l=l.slice(0,p))}return l+i},Fn.unescape=function(t){return(t=Is(t))&&G.test(t)?t.replace(q,hn):t},Fn.uniqueId=function(t){var e=++Mt;return Is(t)+e},Fn.upperCase=ec,Fn.upperFirst=nc,Fn.each=Ia,Fn.eachRight=Na,Fn.first=Qo,pc(Fn,(Ec={},kr(Fn,(function(t,e){zt.call(Fn.prototype,e)||(Ec[e]=t)})),Ec),{chain:!1}),Fn.VERSION="4.17.21",Ne(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(t){Fn[t].placeholder=Fn})),Ne(["drop","take"],(function(t,e){Xn.prototype[t]=function(n){n=n===r?1:wn(ws(n),0);var i=this.__filtered__&&!e?new Xn(this):this.clone();return i.__filtered__?i.__takeCount__=xn(n,i.__takeCount__):i.__views__.push({size:xn(n,m),type:t+(i.__dir__<0?"Right":"")}),i},Xn.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),Ne(["filter","map","takeWhile"],(function(t,e){var n=e+1,r=1==n||3==n;Xn.prototype[t]=function(t){var e=this.clone();return e.__iteratees__.push({iteratee:uo(t,3),type:n}),e.__filtered__=e.__filtered__||r,e}})),Ne(["head","last"],(function(t,e){var n="take"+(e?"Right":"");Xn.prototype[t]=function(){return this[n](1).value()[0]}})),Ne(["initial","tail"],(function(t,e){var n="drop"+(e?"":"Right");Xn.prototype[t]=function(){return this.__filtered__?new Xn(this):this[n](1)}})),Xn.prototype.compact=function(){return this.filter(lc)},Xn.prototype.find=function(t){return this.filter(t).head()},Xn.prototype.findLast=function(t){return this.reverse().find(t)},Xn.prototype.invokeMap=Qr((function(t,e){return"function"==typeof t?new Xn(this):this.map((function(n){return Lr(n,t,e)}))})),Xn.prototype.reject=function(t){return this.filter(Ba(uo(t)))},Xn.prototype.slice=function(t,e){t=ws(t);var n=this;return n.__filtered__&&(t>0||e<0)?new Xn(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),e!==r&&(n=(e=ws(e))<0?n.dropRight(-e):n.take(e-t)),n)},Xn.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},Xn.prototype.toArray=function(){return this.take(m)},kr(Xn.prototype,(function(t,e){var n=/^(?:filter|find|map|reject)|While$/.test(e),i=/^(?:head|last)$/.test(e),o=Fn[i?"take"+("last"==e?"Right":""):e],a=i||/^find/.test(e);o&&(Fn.prototype[e]=function(){var e=this.__wrapped__,s=i?[1]:arguments,c=e instanceof Xn,l=s[0],u=c||Ja(e),f=function(t){var e=o.apply(Fn,Le([t],s));return i&&d?e[0]:e};u&&n&&"function"==typeof l&&1!=l.length&&(c=u=!1);var d=this.__chain__,p=!!this.__actions__.length,h=a&&!d,m=c&&!p;if(!a&&u){e=m?e:new Xn(this);var g=t.apply(e,s);return g.__actions__.push({func:ba,args:[f],thisArg:r}),new $n(g,d)}return h&&m?t.apply(this,s):(g=this.thru(f),h?i?g.value()[0]:g.value():g)})})),Ne(["pop","push","shift","sort","splice","unshift"],(function(t){var e=Rt[t],n=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",r=/^(?:pop|shift)$/.test(t);Fn.prototype[t]=function(){var t=arguments;if(r&&!this.__chain__){var i=this.value();return e.apply(Ja(i)?i:[],t)}return this[n]((function(n){return e.apply(Ja(n)?n:[],t)}))}})),kr(Xn.prototype,(function(t,e){var n=Fn[e];if(n){var r=n.name+"";zt.call(On,r)||(On[r]=[]),On[r].push({name:e,func:n})}})),On[Fi(r,2).name]=[{name:"wrapper",func:r}],Xn.prototype.clone=function(){var t=new Xn(this.__wrapped__);return t.__actions__=Ri(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=Ri(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=Ri(this.__views__),t},Xn.prototype.reverse=function(){if(this.__filtered__){var t=new Xn(this);t.__dir__=-1,t.__filtered__=!0}else(t=this.clone()).__dir__*=-1;return t},Xn.prototype.value=function(){var t=this.__wrapped__.value(),e=this.__dir__,n=Ja(t),r=e<0,i=n?t.length:0,o=function(t,e,n){var r=-1,i=n.length;for(;++r<i;){var o=n[r],a=o.size;switch(o.type){case"drop":t+=a;break;case"dropRight":e-=a;break;case"take":e=xn(e,t+a);break;case"takeRight":t=wn(t,e-a)}}return{start:t,end:e}}(0,i,this.__views__),a=o.start,s=o.end,c=s-a,l=r?s:a-1,u=this.__iteratees__,f=u.length,d=0,p=xn(c,this.__takeCount__);if(!n||!r&&i==c&&p==c)return gi(t,this.__actions__);var h=[];t:for(;c--&&d<p;){for(var m=-1,g=t[l+=e];++m<f;){var v=u[m],y=v.iteratee,b=v.type,w=y(g);if(2==b)g=w;else if(!w){if(1==b)continue t;break t}}h[d++]=g}return h},Fn.prototype.at=wa,Fn.prototype.chain=function(){return ya(this)},Fn.prototype.commit=function(){return new $n(this.value(),this.__chain__)},Fn.prototype.next=function(){this.__values__===r&&(this.__values__=ys(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?r:this.__values__[this.__index__++]}},Fn.prototype.plant=function(t){for(var e,n=this;n instanceof Vn;){var i=$o(n);i.__index__=0,i.__values__=r,e?o.__wrapped__=i:e=i;var o=i;n=n.__wrapped__}return o.__wrapped__=t,e},Fn.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof Xn){var e=t;return this.__actions__.length&&(e=new Xn(this)),(e=e.reverse()).__actions__.push({func:ba,args:[aa],thisArg:r}),new $n(e,this.__chain__)}return this.thru(aa)},Fn.prototype.toJSON=Fn.prototype.valueOf=Fn.prototype.value=function(){return gi(this.__wrapped__,this.__actions__)},Fn.prototype.first=Fn.prototype.head,ae&&(Fn.prototype[ae]=function(){return this}),Fn}();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(fe._=mn,define((function(){return mn}))):pe?((pe.exports=mn)._=mn,de._=mn):fe._=mn}).call(this)})),i.register("4TNnu",(function(t,e){var n,r,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var c,l=[],u=!1,f=-1;function d(){u&&c&&(u=!1,c.length?l=c.concat(l):f=-1,l.length&&p())}function p(){if(!u){var t=s(d);u=!0;for(var e=l.length;e;){for(c=l,l=[];++f<e;)c&&c[f].run();f=-1,e=l.length}c=null,u=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function m(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new h(t,e)),1!==l.length||u||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}}));document.querySelectorAll(".cards-home-movie-image").forEach((t=>{const e=window.getComputedStyle(t).backgroundColor,n=chroma(e).luminance(),r=t.querySelector(".text-element");r.style.color=n<.5?"black":"white"}));var o,a,s=i("kEUo3"),c={};o=void 0===t?"undefined"==typeof window?c:window:t,a=function(t){if(void 0===t&&void 0===t.document)return!1;var e,n,r,i,o,a="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",s='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',c="Success",l="Failure",u="Warning",f="Info",d={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},p="Success",h="Failure",m="Warning",g="Info",v={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},y="Show",b="Ask",w="Prompt",x={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},k="Standard",_="Hourglass",I="Circle",N="Arrows",S="Dots",E="Pulse",C="Custom",T="Notiflix",A={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},R="Standard",L="Hourglass",O="Circle",P="Arrows",D="Dots",z="Pulse",M={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},j=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+a)},U=function(t){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+t+a)},W=function(e){return e||(e="head"),null!==t.document[e]||(j('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},B=function(e,n){if(!W("head"))return!1;if(null!==e()&&!t.document.getElementById(n)){var r=t.document.createElement("style");r.id=n,r.innerHTML=e(),t.document.head.appendChild(r)}},F=function(){var t={},e=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);for(var r=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=e&&"[object Object]"===Object.prototype.toString.call(n[r])?F(t[r],n[r]):n[r])};n<arguments.length;n++)r(arguments[n]);return t},H=function(e){var n=t.document.createElement("div");return n.innerHTML=e,n.textContent||n.innerText||""},V=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},$=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},X=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+t+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+t+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+t+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+e+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},q=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},K=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},G=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},J=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},Y=0,Q=function(n,r,i,o){if(!W("body"))return!1;e||ct.Notify.init({});var a=F(!0,e,{});if("object"==typeof i&&!Array.isArray(i)||"object"==typeof o&&!Array.isArray(o)){var p={};"object"==typeof i?p=i:"object"==typeof o&&(p=o),e=F(!0,e,p)}var h=e[n.toLocaleLowerCase("en")];Y++,"string"!=typeof r&&(r="Notiflix "+n),e.plainText&&(r=H(r)),!e.plainText&&r.length>e.messageMaxLength&&(e=F(!0,e,{closeButton:!0,messageMaxLength:150}),r='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),r.length>e.messageMaxLength&&(r=r.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(h.fontAwesomeIconColor=h.background),e.cssAnimation||(e.cssAnimationDuration=0);var m=t.document.getElementById(d.wrapID)||t.document.createElement("div");if(m.id=d.wrapID,m.style.width=e.width,m.style.zIndex=e.zindex,m.style.opacity=e.opacity,"center-center"===e.position?(m.style.left=e.distance,m.style.top=e.distance,m.style.right=e.distance,m.style.bottom=e.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):"center-top"===e.position?(m.style.left=e.distance,m.style.right=e.distance,m.style.top=e.distance,m.style.bottom="auto",m.style.margin="auto"):"center-bottom"===e.position?(m.style.left=e.distance,m.style.right=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.margin="auto"):"right-bottom"===e.position?(m.style.right=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.left="auto"):"left-top"===e.position?(m.style.left=e.distance,m.style.top=e.distance,m.style.right="auto",m.style.bottom="auto"):"left-bottom"===e.position?(m.style.left=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=e.distance,m.style.top=e.distance,m.style.left="auto",m.style.bottom="auto"),e.backOverlay){var g=t.document.getElementById(d.overlayID)||t.document.createElement("div");g.id=d.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=e.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=h.backOverlayColor||e.backOverlayColor,g.className=e.cssAnimation?"nx-with-animation":"",g.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(d.overlayID)||t.document.body.appendChild(g)}t.document.getElementById(d.wrapID)||t.document.body.appendChild(m);var v=t.document.createElement("div");v.id=e.ID+"-"+Y,v.className=e.className+" "+h.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof i?"nx-with-close-button":"")+" "+("function"==typeof i?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),v.style.fontSize=e.fontSize,v.style.color=h.textColor,v.style.background=h.background,v.style.borderRadius=e.borderRadius,v.style.pointerEvents="all",e.rtl&&(v.setAttribute("dir","rtl"),v.classList.add("nx-rtl-on")),v.style.fontFamily='"'+e.fontFamily+'", '+s,e.cssAnimation&&(v.style.animationDuration=e.cssAnimationDuration+"ms");var y="";if(e.closeButton&&"function"!=typeof i&&(y='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+h.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)v.innerHTML='<i style="color:'+h.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+h.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+r+"</span>"+(e.closeButton?y:"");else{var b="";n===c?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===l?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===u?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===f&&(b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),v.innerHTML=b+'<span class="nx-message nx-with-icon">'+r+"</span>"+(e.closeButton?y:"")}else v.innerHTML='<span class="nx-message">'+r+"</span>"+(e.closeButton?y:"");if("left-bottom"===e.position||"right-bottom"===e.position){var w=t.document.getElementById(d.wrapID);w.insertBefore(v,w.firstChild)}else t.document.getElementById(d.wrapID).appendChild(v);var x=t.document.getElementById(v.id);if(x){var k,_,I=function(){x.classList.add("nx-remove");var e=t.document.getElementById(d.overlayID);e&&0>=m.childElementCount&&e.classList.add("nx-remove"),clearTimeout(k)},N=function(){if(x&&null!==x.parentNode&&x.parentNode.removeChild(x),0>=m.childElementCount&&null!==m.parentNode){m.parentNode.removeChild(m);var e=t.document.getElementById(d.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(_)};if(e.closeButton&&"function"!=typeof i&&t.document.getElementById(v.id).querySelector("span.nx-close-button").addEventListener("click",(function(){I();var t=setTimeout((function(){N(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof i||e.clickToClose)&&x.addEventListener("click",(function(){"function"==typeof i&&i(),I();var t=setTimeout((function(){N(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof i){var S=function(){k=setTimeout((function(){I()}),e.timeout),_=setTimeout((function(){N()}),e.timeout+e.cssAnimationDuration)};S(),e.pauseOnHover&&(x.addEventListener("mouseenter",(function(){x.classList.add("nx-paused"),clearTimeout(k),clearTimeout(_)})),x.addEventListener("mouseleave",(function(){x.classList.remove("nx-paused"),S()})))}}if(e.showOnlyTheLastOne&&0<Y)for(var E,C=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+Y+"])"),T=0;T<C.length;T++)null!==(E=C[T]).parentNode&&E.parentNode.removeChild(E);e=F(!0,e,a)},Z=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},tt=function(e,r,i,o,a,c){if(!W("body"))return!1;n||ct.Report.init({});var l={};if("object"==typeof a&&!Array.isArray(a)||"object"==typeof c&&!Array.isArray(c)){var u={};"object"==typeof a?u=a:"object"==typeof c&&(u=c),l=F(!0,n,{}),n=F(!0,n,u)}var f=n[e.toLocaleLowerCase("en")];"string"!=typeof r&&(r="Notiflix "+e),"string"!=typeof i&&(e===p?i='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':e===h?i='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':e===m?i='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':e===g&&(i='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof o&&(o="Okay"),n.plainText&&(r=H(r),i=H(i),o=H(o)),n.plainText||(r.length>n.titleMaxLength&&(r="Possible HTML Tags Error",i='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',o="Okay"),i.length>n.messageMaxLength&&(r="Possible HTML Tags Error",i='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',o="Okay"),o.length>n.buttonMaxLength&&(r="Possible HTML Tags Error",i='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',o="Okay")),r.length>n.titleMaxLength&&(r=r.substring(0,n.titleMaxLength)+"..."),i.length>n.messageMaxLength&&(i=i.substring(0,n.messageMaxLength)+"..."),o.length>n.buttonMaxLength&&(o=o.substring(0,n.buttonMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var d=t.document.createElement("div");d.id=v.ID,d.className=n.className,d.style.zIndex=n.zindex,d.style.borderRadius=n.borderRadius,d.style.fontFamily='"'+n.fontFamily+'", '+s,n.rtl&&(d.setAttribute("dir","rtl"),d.classList.add("nx-rtl-on")),d.style.display="flex",d.style.flexWrap="wrap",d.style.flexDirection="column",d.style.alignItems="center",d.style.justifyContent="center";var y="",b=!0===n.backOverlayClickToClose;n.backOverlay&&(y='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+(b?" nx-report-click-to-close":"")+'" style="background:'+(f.backOverlayColor||n.backOverlayColor)+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var w,x,k="";if(e===p?(w=n.svgSize,x=f.svgColor,w||(w="110px"),x||(x="#32c682"),k='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+w+'" height="'+w+'" fill="'+x+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):e===h?k=function(t,e){return t||(t="110px"),e||(e="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,f.svgColor):e===m?k=function(t,e){return t||(t="110px"),e||(e="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,f.svgColor):e===g&&(k=function(t,e){return t||(t="110px"),e||(e="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,f.svgColor)),d.innerHTML=y+'<div class="'+n.className+"-content"+(n.cssAnimation?" nx-with-animation ":"")+" nx-"+n.cssAnimationStyle+'" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+'ms;"><div style="width:'+n.svgSize+"; height:"+n.svgSize+';" class="'+n.className+'-icon">'+k+'</div><h5 class="'+n.className+'-title" style="font-weight:500; font-size:'+n.titleFontSize+"; color:"+f.titleColor+';">'+r+'</h5><p class="'+n.className+'-message" style="font-size:'+n.messageFontSize+"; color:"+f.messageColor+';">'+i+'</p><a id="NXReportButton" class="'+n.className+'-button" style="font-weight:500; font-size:'+n.buttonFontSize+"; background:"+f.buttonBackground+"; color:"+f.buttonColor+';">'+o+"</a></div>",!t.document.getElementById(d.id)){t.document.body.appendChild(d);var _=function(){var e=t.document.getElementById(d.id);e.classList.add("nx-remove");var r=setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e),clearTimeout(r)}),n.cssAnimationDuration)};t.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof a&&a(),_()})),y&&b&&t.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){_()}))}n=F(!0,n,l)},et=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},nt=function(e,n,i,o,a,c,l,u,f){if(!W("body"))return!1;r||ct.Confirm.init({});var d=F(!0,r,{});"object"!=typeof f||Array.isArray(f)||(r=F(!0,r,f)),"string"!=typeof n&&(n="Notiflix Confirm"),"string"!=typeof i&&(i="Do you agree with me?"),"string"!=typeof a&&(a="Yes"),"string"!=typeof c&&(c="No"),"function"!=typeof l&&(l=void 0),"function"!=typeof u&&(u=void 0),r.plainText&&(n=H(n),i=H(i),a=H(a),c=H(c)),r.plainText||(n.length>r.titleMaxLength&&(n="Possible HTML Tags Error",i='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',a="Okay",c="..."),i.length>r.messageMaxLength&&(n="Possible HTML Tags Error",i='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',a="Okay",c="..."),(a.length||c.length)>r.buttonsMaxLength&&(n="Possible HTML Tags Error",i='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',a="Okay",c="...")),n.length>r.titleMaxLength&&(n=n.substring(0,r.titleMaxLength)+"..."),i.length>r.messageMaxLength&&(i=i.substring(0,r.messageMaxLength)+"..."),a.length>r.buttonsMaxLength&&(a=a.substring(0,r.buttonsMaxLength)+"..."),c.length>r.buttonsMaxLength&&(c=c.substring(0,r.buttonsMaxLength)+"..."),r.cssAnimation||(r.cssAnimationDuration=0);var p=t.document.createElement("div");p.id=x.ID,p.className=r.className+(r.cssAnimation?" nx-with-animation nx-"+r.cssAnimationStyle:""),p.style.zIndex=r.zindex,p.style.padding=r.distance,r.rtl&&(p.setAttribute("dir","rtl"),p.classList.add("nx-rtl-on"));var h="string"==typeof r.position?r.position.trim():"center";p.classList.add("nx-position-"+h),p.style.fontFamily='"'+r.fontFamily+'", '+s;var m="";r.backOverlay&&(m='<div class="'+r.className+"-overlay"+(r.cssAnimation?" nx-with-animation":"")+'" style="background:'+r.backOverlayColor+";animation-duration:"+r.cssAnimationDuration+'ms;"></div>');var g="";"function"==typeof l&&(g='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+r.cancelButtonColor+";background:"+r.cancelButtonBackground+";font-size:"+r.buttonsFontSize+';">'+c+"</a>");var v="",y=null,k=void 0;if(e===b||e===w){y=o||"";var _=e===b||200<y.length?Math.ceil(1.5*y.length):250;v='<div><input id="NXConfirmValidationInput" type="text" '+(e===w?'value="'+y+'"':"")+' maxlength="'+_+'" style="font-size:'+r.messageFontSize+";border-radius: "+r.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(p.innerHTML=m+'<div class="'+r.className+'-content" style="width:'+r.width+"; background:"+r.backgroundColor+"; animation-duration:"+r.cssAnimationDuration+"ms; border-radius: "+r.borderRadius+';"><div class="'+r.className+'-head"><h5 style="color:'+r.titleColor+";font-size:"+r.titleFontSize+';">'+n+'</h5><div style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+i+v+'</div></div><div class="'+r.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof l?"":" nx-full")+'" style="color:'+r.okButtonColor+";background:"+r.okButtonBackground+";font-size:"+r.buttonsFontSize+';">'+a+"</a>"+g+"</div></div>",!t.document.getElementById(p.id)){t.document.body.appendChild(p);var I=t.document.getElementById(p.id),N=t.document.getElementById("NXConfirmButtonOk"),S=t.document.getElementById("NXConfirmValidationInput");S&&(S.focus(),S.setSelectionRange(0,(S.value||"").length),S.addEventListener("keyup",(function(t){var n=t.target.value;e===b&&n!==y?(t.preventDefault(),S.classList.add("nx-validation-failure"),S.classList.remove("nx-validation-success")):(e===b&&(S.classList.remove("nx-validation-failure"),S.classList.add("nx-validation-success")),("enter"===(t.key||"").toLocaleLowerCase("en")||13===t.keyCode)&&N.dispatchEvent(new Event("click")))}))),N.addEventListener("click",(function(t){if(e===b&&y&&S){if((S.value||"").toString()!==y)return S.focus(),S.classList.add("nx-validation-failure"),t.stopPropagation(),t.preventDefault(),t.returnValue=!1,t.cancelBubble=!0,!1;S.classList.remove("nx-validation-failure")}"function"==typeof l&&(e===w&&S&&(k=S.value||""),l(k)),I.classList.add("nx-remove");var n=setTimeout((function(){null!==I.parentNode&&(I.parentNode.removeChild(I),clearTimeout(n))}),r.cssAnimationDuration)})),"function"==typeof l&&t.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof u&&(e===w&&S&&(k=S.value||""),u(k)),I.classList.add("nx-remove");var t=setTimeout((function(){null!==I.parentNode&&(I.parentNode.removeChild(I),clearTimeout(t))}),r.cssAnimationDuration)}))}r=F(!0,r,d)},rt=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},it=function(e,n,r,o,a){if(!W("body"))return!1;i||ct.Loading.init({});var c=F(!0,i,{});if("object"==typeof n&&!Array.isArray(n)||"object"==typeof r&&!Array.isArray(r)){var l={};"object"==typeof n?l=n:"object"==typeof r&&(l=r),i=F(!0,i,l)}var u="";if("string"==typeof n&&0<n.length&&(u=n),o){var f="";0<(u=u.length>i.messageMaxLength?H(u).toString().substring(0,i.messageMaxLength)+"...":H(u).toString()).length&&(f='<p id="'+i.messageID+'" class="nx-loading-message" style="color:'+i.messageColor+";font-size:"+i.messageFontSize+';">'+u+"</p>"),i.cssAnimation||(i.cssAnimationDuration=0);var d="";if(e===k)d=V(i.svgSize,i.svgColor);else if(e===_)d=$(i.svgSize,i.svgColor);else if(e===I)d=X(i.svgSize,i.svgColor);else if(e===N)d=q(i.svgSize,i.svgColor);else if(e===S)d=K(i.svgSize,i.svgColor);else if(e===E)d=G(i.svgSize,i.svgColor);else if(e===C&&null!==i.customSvgCode&&null===i.customSvgUrl)d=i.customSvgCode||"";else if(e===C&&null!==i.customSvgUrl&&null===i.customSvgCode)d='<img class="nx-custom-loading-icon" width="'+i.svgSize+'" height="'+i.svgSize+'" src="'+i.customSvgUrl+'" alt="Notiflix">';else{if(e===C&&(null===i.customSvgUrl||null===i.customSvgCode))return j('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;d=function(t,e,n){return t||(t="60px"),e||(e="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+e+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(i.svgSize,"#f8f8f8","#32c682")}var p=parseInt((i.svgSize||"").replace(/[^0-9]/g,"")),h=t.innerWidth,m=p>=h?h-40+"px":p+"px",g='<div style="width:'+m+"; height:"+m+';" class="'+i.className+"-icon"+(0<u.length?" nx-with-message":"")+'">'+d+"</div>",v=t.document.createElement("div");v.id=A.ID,v.className=i.className+(i.cssAnimation?" nx-with-animation":"")+(i.clickToClose?" nx-loading-click-to-close":""),v.style.zIndex=i.zindex,v.style.background=i.backgroundColor,v.style.animationDuration=i.cssAnimationDuration+"ms",v.style.fontFamily='"'+i.fontFamily+'", '+s,v.style.display="flex",v.style.flexWrap="wrap",v.style.flexDirection="column",v.style.alignItems="center",v.style.justifyContent="center",i.rtl&&(v.setAttribute("dir","rtl"),v.classList.add("nx-rtl-on")),v.innerHTML=g+f,!t.document.getElementById(v.id)&&(t.document.body.appendChild(v),i.clickToClose)&&t.document.getElementById(v.id).addEventListener("click",(function(){v.classList.add("nx-remove");var t=setTimeout((function(){null!==v.parentNode&&(v.parentNode.removeChild(v),clearTimeout(t))}),i.cssAnimationDuration)}))}else if(t.document.getElementById(A.ID))var y=t.document.getElementById(A.ID),b=setTimeout((function(){y.classList.add("nx-remove");var t=setTimeout((function(){null!==y.parentNode&&(y.parentNode.removeChild(y),clearTimeout(t))}),i.cssAnimationDuration);clearTimeout(b)}),a);i=F(!0,i,c)},ot=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},at=0,st=function(e,n,r,i,a,c){var l;if(Array.isArray(r)){if(1>r.length)return j("Array of HTMLElements should contains at least one HTMLElement."),!1;l=r}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,r)){if(1>r.length)return j("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;l=Array.prototype.slice.call(r)}else{if("string"!=typeof r||1>(r||"").length||1===(r||"").length&&("#"===(r||"")[0]||"."===(r||"")[0]))return j("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var u=t.document.querySelectorAll(r);if(1>u.length)return j('You called the "Notiflix.Block..." function with "'+r+'" selector, but there is no such element(s) in the document.'),!1;l=u}o||ct.Block.init({});var f=F(!0,o,{});if("object"==typeof i&&!Array.isArray(i)||"object"==typeof a&&!Array.isArray(a)){var d={};"object"==typeof i?d=i:"object"==typeof a&&(d=a),o=F(!0,o,d)}var p="";"string"==typeof i&&0<i.length&&(p=i),o.cssAnimation||(o.cssAnimationDuration=0);var h=M.className;"string"==typeof o.className&&(h=o.className.trim());var m="number"==typeof o.querySelectorLimit?o.querySelectorLimit:200,g=(l||[]).length>=m?m:l.length,v="nx-block-temporary-position";if(e){for(var y,b=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],w=0;w<g;w++)if(y=l[w]){if(-1<b.indexOf(y.tagName.toLocaleLowerCase("en")))break;var x=y.querySelectorAll("[id^="+M.ID+"]");if(1>x.length){var k="";n&&(k=n===L?$(o.svgSize,o.svgColor):n===O?X(o.svgSize,o.svgColor):n===P?q(o.svgSize,o.svgColor):n===D?K(o.svgSize,o.svgColor):n===z?G(o.svgSize,o.svgColor):V(o.svgSize,o.svgColor));var _='<span class="'+h+'-icon" style="width:'+o.svgSize+";height:"+o.svgSize+';">'+k+"</span>",I="";0<p.length&&(p=p.length>o.messageMaxLength?H(p).substring(0,o.messageMaxLength)+"...":H(p),I='<span style="font-size:'+o.messageFontSize+";color:"+o.messageColor+';" class="'+h+'-message">'+p+"</span>"),at++;var N=t.document.createElement("div");N.id=M.ID+"-"+at,N.className=h+(o.cssAnimation?" nx-with-animation":""),N.style.position=o.position,N.style.zIndex=o.zindex,N.style.background=o.backgroundColor,N.style.animationDuration=o.cssAnimationDuration+"ms",N.style.fontFamily='"'+o.fontFamily+'", '+s,N.style.display="flex",N.style.flexWrap="wrap",N.style.flexDirection="column",N.style.alignItems="center",N.style.justifyContent="center",o.rtl&&(N.setAttribute("dir","rtl"),N.classList.add("nx-rtl-on")),N.innerHTML=_+I;var S,E=t.getComputedStyle(y).getPropertyValue("position"),C="string"==typeof E?E.toLocaleLowerCase("en"):"relative",T=Math.round(1.25*parseInt(o.svgSize))+40,A="";T>(y.offsetHeight||0)&&(A="min-height:"+T+"px;"),S=y.getAttribute("id")?"#"+y.getAttribute("id"):y.classList[0]?"."+y.classList[0]:(y.tagName||"").toLocaleLowerCase("en");var R="",B=-1>=["absolute","relative","fixed","sticky"].indexOf(C);if(B||0<A.length){if(!W("head"))return!1;B&&(R="position:relative!important;");var J='<style id="Style-'+M.ID+"-"+at+'">'+S+"."+v+"{"+R+A+"}</style>",Y=t.document.createRange();Y.selectNode(t.document.head);var Q=Y.createContextualFragment(J);t.document.head.appendChild(Q),y.classList.add(v)}y.appendChild(N)}}}else var Z=function(e){var n=setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e);var r=e.getAttribute("id"),i=t.document.getElementById("Style-"+r);i&&null!==i.parentNode&&i.parentNode.removeChild(i),clearTimeout(n)}),o.cssAnimationDuration)},tt=function(t){if(t&&0<t.length)for(var e,n=0;n<t.length;n++)(e=t[n])&&(e.classList.add("nx-remove"),Z(e));else U("string"==typeof r?'"Notiflix.Block.remove();" function called with "'+r+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+r+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},et=function(t){var e=setTimeout((function(){t.classList.remove(v),clearTimeout(e)}),o.cssAnimationDuration+300)},nt=setTimeout((function(){for(var t,e=0;e<g;e++)(t=l[e])&&(et(t),x=t.querySelectorAll("[id^="+M.ID+"]"),tt(x));clearTimeout(nt)}),c);o=F(!0,o,f)},ct={Notify:{init:function(t){e=F(!0,d,t),B(J,"NotiflixNotifyInternalCSS")},merge:function(t){return e?void(e=F(!0,e,t)):(j("You have to initialize the Notify module before call Merge function."),!1)},success:function(t,e,n){Q(c,t,e,n)},failure:function(t,e,n){Q(l,t,e,n)},warning:function(t,e,n){Q(u,t,e,n)},info:function(t,e,n){Q(f,t,e,n)}},Report:{init:function(t){n=F(!0,v,t),B(Z,"NotiflixReportInternalCSS")},merge:function(t){return n?void(n=F(!0,n,t)):(j("You have to initialize the Report module before call Merge function."),!1)},success:function(t,e,n,r,i){tt(p,t,e,n,r,i)},failure:function(t,e,n,r,i){tt(h,t,e,n,r,i)},warning:function(t,e,n,r,i){tt(m,t,e,n,r,i)},info:function(t,e,n,r,i){tt(g,t,e,n,r,i)}},Confirm:{init:function(t){r=F(!0,x,t),B(et,"NotiflixConfirmInternalCSS")},merge:function(t){return r?void(r=F(!0,r,t)):(j("You have to initialize the Confirm module before call Merge function."),!1)},show:function(t,e,n,r,i,o,a){nt(y,t,e,null,n,r,i,o,a)},ask:function(t,e,n,r,i,o,a,s){nt(b,t,e,n,r,i,o,a,s)},prompt:function(t,e,n,r,i,o,a,s){nt(w,t,e,n,r,i,o,a,s)}},Loading:{init:function(t){i=F(!0,A,t),B(rt,"NotiflixLoadingInternalCSS")},merge:function(t){return i?void(i=F(!0,i,t)):(j("You have to initialize the Loading module before call Merge function."),!1)},standard:function(t,e){it(k,t,e,!0,0)},hourglass:function(t,e){it(_,t,e,!0,0)},circle:function(t,e){it(I,t,e,!0,0)},arrows:function(t,e){it(N,t,e,!0,0)},dots:function(t,e){it(S,t,e,!0,0)},pulse:function(t,e){it(E,t,e,!0,0)},custom:function(t,e){it(C,t,e,!0,0)},notiflix:function(t,e){it(T,t,e,!0,0)},remove:function(t){"number"!=typeof t&&(t=0),it(null,null,null,!1,t)},change:function(e){!function(e){"string"!=typeof e&&(e="");var n=t.document.getElementById(A.ID);if(n)if(0<e.length){e=e.length>i.messageMaxLength?H(e).substring(0,i.messageMaxLength)+"...":H(e);var r=n.getElementsByTagName("p")[0];if(r)r.innerHTML=e;else{var o=t.document.createElement("p");o.id=i.messageID,o.className="nx-loading-message nx-loading-message-new",o.style.color=i.messageColor,o.style.fontSize=i.messageFontSize,o.innerHTML=e,n.appendChild(o)}}else j("Where is the new message?")}(e)}},Block:{init:function(t){o=F(!0,M,t),B(ot,"NotiflixBlockInternalCSS")},merge:function(t){return o?void(o=F(!0,o,t)):(j('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(t,e,n){st(!0,R,t,e,n)},hourglass:function(t,e,n){st(!0,L,t,e,n)},circle:function(t,e,n){st(!0,O,t,e,n)},arrows:function(t,e,n){st(!0,P,t,e,n)},dots:function(t,e,n){st(!0,D,t,e,n)},pulse:function(t,e,n){st(!0,z,t,e,n)},remove:function(t,e){"number"!=typeof e&&(e=0),st(!1,null,t,null,null,e)}}};return"object"==typeof t.Notiflix?F(!0,t.Notiflix,{Notify:ct.Notify,Report:ct.Report,Confirm:ct.Confirm,Loading:ct.Loading,Block:ct.Block}):{Notify:ct.Notify,Report:ct.Report,Confirm:ct.Confirm,Loading:ct.Loading,Block:ct.Block}},"function"==typeof define&&define.amd?define([],(function(){return a(o)})):"object"==typeof c?c=a(o):o.Notiflix=a(o);const l=document.getElementById("copyButton"),u=e(s).debounce((function(t){navigator.clipboard.writeText(t).then((()=>{e(c).Notify.info("Copy your ID")})).catch((t=>{alert("An error occurred while copying the ID.")}))}),500);l.addEventListener("click",(()=>{u("Some ID")}));var f=i("4TNnu");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},p={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let e=0;e<t.length;e+=3){const i=t[e],o=e+1<t.length,a=o?t[e+1]:0,s=e+2<t.length,c=s?t[e+2]:0,l=i>>2,u=(3&i)<<4|a>>4;let f=(15&a)<<2|c>>6,d=63&c;s||(d=64,o||(f=64)),r.push(n[l],n[u],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(d(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(o>>10)),e[r++]=String.fromCharCode(56320+(1023&o))}else{const o=t[n++],a=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&a)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],o=e<t.length?n[t.charAt(e)]:0;++e;const a=e<t.length?n[t.charAt(e)]:64;++e;const s=e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==o||null==a||null==s)throw new h;const c=i<<2|o>>4;if(r.push(c),64!==a){const t=o<<4&240|a>>2;if(r.push(t),64!==s){const t=a<<6&192|s;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const m=function(t){return function(t){const e=d(t);return p.encodeByteArray(e,!0)}(t).replace(/\./g,"")},g=function(t){try{return p.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const v=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,y=()=>{try{return v()||(()=>{if(void 0===f||void 0===f.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&g(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},b=t=>{var e,n;return null===(n=null===(e=y())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},w=()=>{var t;return null===(t=y())||void 0===t?void 0:t.config},x=t=>{var e;return null===(e=y())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class k{wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function I(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function N(){const t=_();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function S(){try{return"object"==typeof indexedDB}catch(t){return!1}}class E extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,E.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,C.prototype.create)}}class C{create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?function(t,e){return t.replace(T,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new E(r,a,n)}constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}}const T=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function R(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],o=e[i];if(L(n)&&L(o)){if(!R(n,o))return!1}else if(n!==o)return!1}for(const t of r)if(!n.includes(t))return!1;return!0}function L(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function O(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function P(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function D(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t,e){const n=new M(t,e);return n.subscribe.bind(n)}class M{next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=j),void 0===r.error&&(r.error=j),void 0===r.complete&&(r.complete=j);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}}function j(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(t){return t&&t._delegate?t._delegate:t}class W{setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class B{get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new k;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(r)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,"[DEFAULT]"===r?void 0:r),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var r;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class F{addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new B(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}constructor(t){this.name=t,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H=[];var V,$;($=V||(V={}))[$.DEBUG=0]="DEBUG",$[$.VERBOSE=1]="VERBOSE",$[$.INFO=2]="INFO",$[$.WARN=3]="WARN",$[$.ERROR=4]="ERROR",$[$.SILENT=5]="SILENT";const X={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},q=V.INFO,K={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},G=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=K[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class J{get logLevel(){return this._logLevel}set logLevel(t){if(!(t in V))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?X[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...t),this._logHandler(this,V.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...t),this._logHandler(this,V.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,V.INFO,...t),this._logHandler(this,V.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,V.WARN,...t),this._logHandler(this,V.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...t),this._logHandler(this,V.ERROR,...t)}constructor(t){this.name=t,this._logLevel=q,this._logHandler=G,this._userLogHandler=null,H.push(this)}}let Y,Q;const Z=new WeakMap,tt=new WeakMap,et=new WeakMap,nt=new WeakMap,rt=new WeakMap;let it={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return tt.get(t);if("objectStoreNames"===e)return t.objectStoreNames||et.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return st(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function ot(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Q||(Q=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(ct(this),e),st(Z.get(this))}:function(...e){return st(t.apply(ct(this),e))}:function(e,...n){const r=t.call(ct(this),e,...n);return et.set(r,e.sort?e.sort():[e]),st(r)}}function at(t){return"function"==typeof t?ot(t):(t instanceof IDBTransaction&&function(t){if(tt.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{e(),r()},o=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)}));tt.set(t,e)}(t),e=t,(Y||(Y=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,it):t);var e}function st(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{e(st(t.result)),r()},o=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)}));return e.then((e=>{e instanceof IDBCursor&&Z.set(e,t)})).catch((()=>{})),rt.set(e,t),e}(t);if(nt.has(t))return nt.get(t);const e=at(t);return e!==t&&(nt.set(t,e),rt.set(e,t)),e}const ct=t=>rt.get(t);function lt(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(t,e),s=st(a);return r&&a.addEventListener("upgradeneeded",(t=>{r(st(a.result),t.oldVersion,t.newVersion,st(a.transaction),t)})),n&&a.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),s.then((t=>{o&&t.addEventListener("close",(()=>o())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),s}const ut=["get","getKey","getAll","getAllKeys","count"],ft=["put","add","delete","clear"],dt=new Map;function pt(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(dt.get(e))return dt.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=ft.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!ut.includes(n))return;const o=async function(t,...e){const o=this.transaction(t,i?"readwrite":"readonly");let a=o.store;return r&&(a=a.index(e.shift())),(await Promise.all([a[n](...e),i&&o.done]))[0]};return dt.set(e,o),o}it=(t=>({...t,get:(e,n,r)=>pt(e,n)||t.get(e,n,r),has:(e,n)=>!!pt(e,n)||t.has(e,n)}))(it);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht{getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}constructor(t){this.container=t}}const mt=new J("@firebase/app"),gt={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},vt=new Map,yt=new Map,bt=new Map;function wt(t,e){try{t.container.addComponent(e)}catch(n){mt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xt(t){const e=t.name;if(bt.has(e))return mt.debug(`There were multiple attempts to register component ${e}.`),!1;bt.set(e,t);for(const e of vt.values())wt(e,t);for(const e of yt.values())wt(e,t);return!0}function kt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function _t(t){return void 0!==t.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const It=new C("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nt{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw It.create("app-deleted",{appName:this._name})}constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new W("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const r=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),i=r.name;if("string"!=typeof i||!i)throw It.create("bad-app-name",{appName:String(i)});if(n||(n=w()),!n)throw It.create("no-options");const o=vt.get(i);if(o){if(R(n,o.options)&&R(r,o.config))return o;throw It.create("duplicate-app",{appName:i})}const a=new F(i);for(const t of bt.values())a.addComponent(t);const s=new Nt(n,r,a);return vt.set(i,s),s}function Et(t="[DEFAULT]"){const e=vt.get(t);if(!e&&"[DEFAULT]"===t&&w())return St();if(!e)throw It.create("no-app",{appName:t});return e}function Ct(t,e,n){var r;let i=null!==(r=gt[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${i}" with version "${e}":`];return o&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void mt.warn(t.join(" "))}xt(new W(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}let Tt=null;function At(){return Tt||(Tt=lt("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)try{t.createObjectStore("firebase-heartbeat-store")}catch(t){console.warn(t)}}}).catch((t=>{throw It.create("idb-open",{originalErrorMessage:t.message})}))),Tt}async function Rt(t,e){try{const n=(await At()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");await r.put(e,Lt(t)),await n.done}catch(t){if(t instanceof E)mt.warn(t.message);else{const e=It.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});mt.warn(e.message)}}}function Lt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{async triggerHeartbeat(){var t,e;const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Pt();if((null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==r&&!this._heartbeatsCache.heartbeats.some((t=>t.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=Pt(),{heartbeatsToSend:n,unsentEntries:r}=function(t,e=1024){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),zt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),zt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=m(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Dt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}}function Pt(){return(new Date).toISOString().substring(0,10)}class Dt{async runIndexedDBEnvironmentCheck(){return!!S()&&new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{const e=(await At()).transaction("firebase-heartbeat-store"),n=await e.objectStore("firebase-heartbeat-store").get(Lt(t));return await e.done,n}catch(t){if(t instanceof E)mt.warn(t.message);else{const e=It.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});mt.warn(e.message)}}}(this.app);return(null==t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Rt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Rt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function zt(t){return m(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mt;Mt="",xt(new W("platform-logger",(t=>new ht(t)),"PRIVATE")),xt(new W("heartbeat",(t=>new Ot(t)),"PRIVATE")),Ct("@firebase/app","0.10.1",Mt),Ct("@firebase/app","0.10.1","esm2017"),Ct("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ct("firebase","10.11.0","app");function jt(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;function Ut(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wt=Ut,Bt=new C("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Ft=new J("@firebase/auth");function Ht(t,...e){Ft.logLevel<=V.ERROR&&Ft.error(`Auth (10.11.0): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,...e){throw Kt(t,...e)}function $t(t,...e){return Kt(t,...e)}function Xt(t,e,n){const r=Object.assign(Object.assign({},Wt()),{[e]:n});return new C("auth","Firebase",r).create(e,{appName:t.name})}function qt(t){return Xt(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Kt(t,...e){if("string"!=typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Bt.create(t,...e)}function Gt(t,e,...n){if(!t)throw Kt(e,...n)}function Jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ht(e),new Error(e)}function Yt(t,e){t||Jt(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function Zt(){return"http:"===te()||"https:"===te()}function te(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Zt()||I()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ne{get(){return ee()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(t,e){this.shortDelay=t,this.longDelay=e,Yt(e>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t,e){Yt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void Jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void Jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void Jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},ae=new ne(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ce(t,e,n,r,i={}){return le(t,i,(async()=>{let i={},o={};r&&("GET"===e?o=r:i={body:JSON.stringify(r)});const a=O(Object.assign({key:t.config.apiKey},o)).slice(1),s=await t._getAdditionalHeaders();return s["Content-Type"]="application/json",t.languageCode&&(s["X-Firebase-Locale"]=t.languageCode),ie.fetch()(fe(t,t.config.apiHost,n,a),Object.assign({method:e,headers:s,referrerPolicy:"no-referrer"},i))}))}async function le(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},oe),e);try{const e=new pe(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw he(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const e=i.ok?o.errorMessage:o.error.message,[n,a]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw he(t,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw he(t,"email-already-in-use",o);if("USER_DISABLED"===n)throw he(t,"user-disabled",o);const s=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw Xt(t,s,a);Vt(t,s)}}catch(e){if(e instanceof E)throw e;Vt(t,"network-request-failed",{message:String(e)})}}async function ue(t,e,n,r,i={}){const o=await ce(t,e,n,r,i);return"mfaPendingCredential"in o&&Vt(t,"multi-factor-auth-required",{_serverResponse:o}),o}function fe(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?re(t.config,i):`${t.config.apiScheme}://${i}`}function de(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pe{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e($t(this.auth,"network-request-failed"))),ae.get())}))}}function he(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=$t(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(t){return void 0!==t&&void 0!==t.enterprise}class ge{getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return de(e.enforcementState);return null}isProviderEnabled(t){return"ENFORCE"===this.getProviderEnforcementState(t)||"AUDIT"===this.getProviderEnforcementState(t)}constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ve(t,e){return ce(t,"GET","/v2/recaptchaConfig",se(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ye(t,e){return ce(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(t){return 1e3*Number(t)}function xe(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return Ht("JWT malformed, contained fewer than 3 sections"),null;try{const t=g(n);return t?JSON.parse(t):(Ht("Failed to decode base64 JWT payload"),null)}catch(t){return Ht("Caught error parsing JWT payload as JSON",null==t?void 0:t.toString()),null}}function ke(t){const e=xe(t);return Gt(e,"internal-error"),Gt(void 0!==e.exp,"internal-error"),Gt(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _e(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof E&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class Ie{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null==t?void 0:t.code)&&this.schedule(!0))}this.schedule()}constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{_initializeTime(){this.lastSignInTime=be(this.lastLoginAt),this.creationTime=be(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Se(t){var e;const n=t.auth,r=await t.getIdToken(),i=await _e(t,ye(n,{idToken:r}));Gt(null==i?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const a=(null===(e=o.providerUserInfo)||void 0===e?void 0:e.length)?Ee(o.providerUserInfo):[],s=(c=t.providerData,l=a,[...c.filter((t=>!l.some((e=>e.providerId===t.providerId)))),...l]);var c,l;const u=t.isAnonymous,f=!(t.email&&o.passwordHash||(null==s?void 0:s.length)),d=!!u&&f,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:s,metadata:new Ne(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(t,p)}function Ee(t){return t.map((t=>{var{providerId:e}=t,n=jt(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ce{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Gt(t.idToken,"internal-error"),Gt(void 0!==t.idToken,"internal-error"),Gt(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):ke(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){Gt(0!==t.length,"internal-error");const e=ke(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return e||!this.accessToken||this.isExpired?(Gt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await async function(t,e){const n=await le(t,{},(async()=>{const n=O({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=fe(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ie.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,o=new Ce;return n&&(Gt("string"==typeof n,"internal-error",{appName:t}),o.refreshToken=n),r&&(Gt("string"==typeof r,"internal-error",{appName:t}),o.accessToken=r),i&&(Gt("number"==typeof i,"internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ce,this.toJSON())}_performRefresh(){return Jt("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t,e){Gt("string"==typeof t||void 0===t,"internal-error",{appName:e})}class Ae{async getIdToken(t){const e=await _e(this,this.stsTokenManager.getToken(this.auth,t));return Gt(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=U(t),r=await n.getIdToken(e),i=xe(r);Gt(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"==typeof i.firebase?i.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:be(we(i.auth_time)),issuedAtTime:be(we(i.iat)),expirationTime:be(we(i.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=U(t);await Se(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(Gt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Ae(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){Gt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Se(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_t(this.auth.app))return Promise.reject(qt(this.auth));const t=await this.getIdToken();return await _e(this,async function(t,e){return ce(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,o,a,s,c,l;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,f=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,p=null!==(o=e.photoURL)&&void 0!==o?o:void 0,h=null!==(a=e.tenantId)&&void 0!==a?a:void 0,m=null!==(s=e._redirectEventId)&&void 0!==s?s:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,v=null!==(l=e.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:x,stsTokenManager:k}=e;Gt(y&&k,t,"internal-error");const _=Ce.fromJSON(this.name,k);Gt("string"==typeof y,t,"internal-error"),Te(u,t.name),Te(f,t.name),Gt("boolean"==typeof b,t,"internal-error"),Gt("boolean"==typeof w,t,"internal-error"),Te(d,t.name),Te(p,t.name),Te(h,t.name),Te(m,t.name),Te(g,t.name),Te(v,t.name);const I=new Ae({uid:y,auth:t,email:f,emailVerified:b,displayName:u,isAnonymous:w,photoURL:p,phoneNumber:d,tenantId:h,stsTokenManager:_,createdAt:g,lastLoginAt:v});return x&&Array.isArray(x)&&(I.providerData=x.map((t=>Object.assign({},t)))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(t,e,n=!1){const r=new Ce;r.updateFromServerResponse(e);const i=new Ae({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await Se(i),i}static async _fromGetAccountInfoResponse(t,e,n){const r=e.users[0];Gt(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?Ee(r.providerUserInfo):[],o=!(r.email&&r.passwordHash||(null==i?void 0:i.length)),a=new Ce;a.updateFromIdToken(n);const s=new Ae({uid:r.localId,auth:t,stsTokenManager:a,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Ne(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash||(null==i?void 0:i.length))};return Object.assign(s,c),s}constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=jt(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ie(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ne(i.createdAt||void 0,i.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re=new Map;function Le(t){Yt(t instanceof Function,"Expected a class definition");let e=Re.get(t);return e?(Yt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Re.set(t,e),e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}constructor(){this.type="NONE",this.storage={}}}Oe.type="NONE";const Pe=Oe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(t,e,n){return`firebase:${t}:${e}:${n}`}class ze{setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Ae._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ze(Le(Pe),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||Le(Pe);const o=De(n,t.config.apiKey,t.name);let a=null;for(const n of e)try{const e=await n._get(o);if(e){const r=Ae._fromJSON(t,e);n!==i&&(a=r),i=n;break}}catch(t){}const s=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&s.length?(i=s[0],a&&await i._set(o,a.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(o)}catch(t){}}))),new ze(i,t,n)):new ze(i,t,n)}constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=De(this.userKey,r.apiKey,i),this.fullPersistenceKey=De("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Be(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(je(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(He(e))return"Blackberry";if(Ve(e))return"Webos";if(Ue(e))return"Safari";if((e.includes("chrome/")||We(e))&&!e.includes("edge/"))return"Chrome";if(Fe(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function je(t=_()){return/firefox\//i.test(t)}function Ue(t=_()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function We(t=_()){return/crios\//i.test(t)}function Be(t=_()){return/iemobile/i.test(t)}function Fe(t=_()){return/android/i.test(t)}function He(t=_()){return/blackberry/i.test(t)}function Ve(t=_()){return/webos/i.test(t)}function $e(t=_()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Xe(){return N()&&10===document.documentMode}function qe(t=_()){return $e(t)||Fe(t)||Ve(t)||He(t)||/windows phone/i.test(t)||Be(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ke(t,e=[]){let n;switch(t){case"Browser":n=Me(_());break;case"Worker":n=`${Me(_())}-${t}`;break;default:n=t}return`${n}/JsCore/10.11.0/${e.length?e.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{n(t(e))}catch(t){r(t)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(t){e.reverse();for(const t of e)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==t?void 0:t.message})}}constructor(t){this.auth=t,this.queue=[]}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{validatePassword(t){var e,n,r,i,o,a;const s={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,s),this.validatePasswordCharacterOptions(t,s),s.isValid&&(s.isValid=null===(e=s.meetsMinPasswordLength)||void 0===e||e),s.isValid&&(s.isValid=null===(n=s.meetsMaxPasswordLength)||void 0===n||n),s.isValid&&(s.isValid=null===(r=s.containsLowercaseLetter)||void 0===r||r),s.isValid&&(s.isValid=null===(i=s.containsUppercaseLetter)||void 0===i||i),s.isValid&&(s.isValid=null===(o=s.containsNumericCharacter)||void 0===o||o),s.isValid&&(s.isValid=null===(a=s.containsNonAlphanumericCharacter)||void 0===a||a),s}validatePasswordLengthOptions(t,e){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(e.meetsMinPasswordLength=t.length>=n),r&&(e.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,e){let n;this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);for(let r=0;r<t.length;r++)n=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(e,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(t,e,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}constructor(t){var e,n,r,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(e=o.minPasswordLength)&&void 0!==e?e:6,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),void 0!==o.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),void 0!==o.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),void 0!==o.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),void 0!==o.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=t.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=t.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=t.schemaVersion}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Le(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ze.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUserFromIdToken(t){try{const e=await ye(this,{idToken:t}),n=await Ae._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(_t(this.app)){const t=this.app.settings.authIdToken;return t?new Promise((e=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(t).then(e,e)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,o=null==r?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(t);n&&n!==o||!(null==a?void 0:a.user)||(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(t){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Gt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Se(t)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(_t(this.app))return Promise.reject(qt(this));const e=t?U(t):null;return e&&Gt(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&Gt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return _t(this.app)?Promise.reject(qt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return _t(this.app)?Promise.reject(qt(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(Le(t))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await async function(t,e={}){return ce(t,"GET","/v2/passwordPolicy",se(t,e))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this),e=new Je(t);null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new C("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}authStateReady(){return new Promise(((t,e)=>{if(this.currentUser)t();else{const n=this.onAuthStateChanged((()=>{n(),t()}),e)}}))}async revokeAccessToken(t){if(this.currentUser){const e={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(e.tenantId=this.tenantId),await async function(t,e){return ce(t,"POST","/v2/accounts:revokeToken",se(t,e))}(this,e)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Le(t)||this._popupRedirectResolver;Gt(e,this,"argument-error"),this.redirectPersistenceManager=await ze.create(this,[Le(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"==typeof e?e:e.next.bind(e);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Gt(a,this,"internal-error"),a.then((()=>{o||i(this.currentUser)})),"function"==typeof e){const i=t.addObserver(e,n,r);return()=>{o=!0,i()}}{const n=t.addObserver(e);return()=>{o=!0,n()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Gt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ke(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null==e?void 0:e.error)&&function(t,...e){Ft.logLevel<=V.WARN&&Ft.warn(`Auth (10.11.0): ${t}`,...e)}(`Error while retrieving App Check token: ${e.error}`),null==e?void 0:e.token}constructor(t,e,n,r){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ze(this),this.idTokenSubscription=new Ze(this),this.beforeStateQueue=new Ge(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bt,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}}function Qe(t){return U(t)}class Ze{get next(){return Gt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(t){this.auth=t,this.observer=null,this.addObserver=z((t=>this.observer=t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function en(t){return tn.loadJS(t)}function nn(t){return`__${t}${Math.floor(1e6*Math.random())}`}class rn{async verify(t="verify",e=!1){function n(e,n,r){const i=window.grecaptcha;me(i)?i.enterprise.ready((()=>{i.enterprise.execute(e,{action:t}).then((t=>{n(t)})).catch((()=>{n("NO_RECAPTCHA")}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((t,r)=>{(async function(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise((async(e,n)=>{ve(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new ge(r);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{n(t)}))}))})(this.auth).then((i=>{if(!e&&me(window.grecaptcha))n(i,t,r);else{if("undefined"==typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));let e=tn.recaptchaEnterpriseScript;0!==e.length&&(e+=i),en(e).then((()=>{n(i,t,r)})).catch((t=>{r(t)}))}})).catch((t=>{r(t)}))}))}constructor(t){this.type="recaptcha-enterprise",this.auth=Qe(t)}}async function on(t,e,n,r=!1){const i=new rn(t);let o;try{o=await i.verify(n)}catch(t){o=await i.verify(n,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function an(t,e,n,r){var i;if(null===(i=t._getRecaptchaConfig())||void 0===i?void 0:i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await on(t,e,n,"getOobCode"===n);return r(t,i)}return r(t,e).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await on(t,e,n,"getOobCode"===n);return r(t,i)}return Promise.reject(i)}))}function sn(t,e,n){const r=Qe(t);Gt(r._canInitEmulator,r,"emulator-config-failed"),Gt(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),o=cn(e),{host:a,port:s}=function(t){const e=cn(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:ln(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:ln(e)}}}(e),c=null===s?"":`:${s}`;r.config.emulator={url:`${o}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:s,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function cn(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ln(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}class un{toJSON(){return Jt("not implemented")}_getIdTokenResponse(t){return Jt("not implemented")}_linkToIdToken(t,e){return Jt("not implemented")}_getReauthenticationResolver(t){return Jt("not implemented")}constructor(t,e){this.providerId=t,this.signInMethod=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fn(t,e){return ce(t,"POST","/v1/accounts:signUp",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function dn(t,e){return ue(t,"POST","/v1/accounts:signInWithPassword",se(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pn extends un{static _fromEmailAndPassword(t,e){return new pn(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new pn(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return an(t,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",dn);case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return ue(t,"POST","/v1/accounts:signInWithEmailLink",se(t,e))}(t,{email:this._email,oobCode:this._password});default:Vt(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return an(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",fn);case"emailLink":return async function(t,e){return ue(t,"POST","/v1/accounts:signInWithEmailLink",se(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:Vt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hn(t,e){return ue(t,"POST","/v1/accounts:signInWithIdp",se(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends un{static _fromParams(t){const e=new mn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Vt("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=jt(e,["providerId","signInMethod"]);if(!n||!r)return null;const o=new mn(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){return hn(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,hn(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,hn(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=O(e)}return t}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vn extends un{static _fromVerification(t,e){return new vn({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new vn({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return ue(t,"POST","/v1/accounts:signInWithPhoneNumber",se(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const n=await ue(t,"POST","/v1/accounts:signInWithPhoneNumber",se(t,e));if(n.temporaryProof)throw he(t,"account-exists-with-different-credential",n);return n}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return ue(t,"POST","/v1/accounts:signInWithPhoneNumber",se(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),gn)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new vn({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}constructor(t){super("phone","phone"),this.params=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{static parseLink(t){const e=function(t){const e=P(D(t)).link,n=e?P(D(e)).deep_link_id:null,r=P(D(t)).deep_link_id;return(r?P(D(r)).link:null)||r||n||e||t}(t);try{return new yn(e)}catch(t){return null}}constructor(t){var e,n,r,i,o,a;const s=P(D(t)),c=null!==(e=s.apiKey)&&void 0!==e?e:null,l=null!==(n=s.oobCode)&&void 0!==n?n:null,u=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=s.mode)&&void 0!==r?r:null);Gt(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(i=s.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(o=s.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=s.tenantId)&&void 0!==a?a:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bn{static credential(t,e){return pn._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=yn.parseLink(e);return Gt(n,"argument-error"),pn._fromEmailAndCode(t,n.code,n.tenantId)}constructor(){this.providerId=bn.PROVIDER_ID}}bn.PROVIDER_ID="password",bn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",bn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wn{setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends wn{addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kn extends xn{static credential(t){return mn._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return kn.credentialFromTaggedObject(t)}static credentialFromError(t){return kn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return kn.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("facebook.com")}}kn.FACEBOOK_SIGN_IN_METHOD="facebook.com",kn.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _n extends xn{static credential(t,e){return mn._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return _n.credentialFromTaggedObject(t)}static credentialFromError(t){return _n.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return _n.credential(e,n)}catch(t){return null}}constructor(){super("google.com"),this.addScope("profile")}}_n.GOOGLE_SIGN_IN_METHOD="google.com",_n.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class In extends xn{static credential(t){return mn._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return In.credentialFromTaggedObject(t)}static credentialFromError(t){return In.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return In.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("github.com")}}In.GITHUB_SIGN_IN_METHOD="github.com",In.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nn extends xn{static credential(t,e){return mn._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Nn.credentialFromTaggedObject(t)}static credentialFromError(t){return Nn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Nn.credential(e,n)}catch(t){return null}}constructor(){super("twitter.com")}}Nn.TWITTER_SIGN_IN_METHOD="twitter.com",Nn.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sn{static async _fromIdTokenResponse(t,e,n,r=!1){const i=await Ae._fromIdTokenResponse(t,n,r),o=En(n);return new Sn({user:i,providerId:o,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=En(n);return new Sn({user:t,providerId:r,_tokenResponse:n,operationType:e})}constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}}function En(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cn extends E{static _fromErrorAndOperation(t,e,n,r){return new Cn(t,e,n,r)}constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Cn.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}}function Tn(t,e,n,r){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Cn._fromErrorAndOperation(t,n,e,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function An(t,e,n=!1){const r=await _e(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Sn._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Rn(t,e,n=!1){const{auth:r}=t;if(_t(r.app))return Promise.reject(qt(r));const i="reauthenticate";try{const o=await _e(t,Tn(r,i,e,t),n);Gt(o.idToken,r,"internal-error");const a=xe(o.idToken);Gt(a,r,"internal-error");const{sub:s}=a;return Gt(t.uid===s,r,"user-mismatch"),Sn._forOperation(t,i,o)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&Vt(r,"user-mismatch"),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ln(t,e,n=!1){if(_t(t.app))return Promise.reject(qt(t));const r="signIn",i=await Tn(t,r,e),o=await Sn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class On{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(t,e){this.storageRetriever=t,this.type=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends On{forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);Xe()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,10):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=_();return Ue(t)||$e(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=qe(),this._shouldAllowMigration=!0}}Pn.type="LOCAL";const Dn=Pn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends On{_addListener(t,e){}_removeListener(t,e){}constructor(){super((()=>window.sessionStorage),"SESSION")}}zn.type="SESSION";const Mn=zn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jn{static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new jn(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,o=this.handlersMap[r];if(!(null==o?void 0:o.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(o).map((async t=>t(e.origin,i))),s=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(a);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:s})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Un(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jn.receivers=[];class Wn{removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((a,s)=>{const c=Un("",20);r.port1.start();const l=setTimeout((()=>{s(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{s(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),a(e.data.response);break;default:clearTimeout(l),clearTimeout(i),s(new Error("invalid_response"))}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}constructor(t){this.target=t,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fn(){return void 0!==Bn().WorkerGlobalScope&&"function"==typeof Bn().importScripts}class Hn{toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}constructor(t){this.request=t}}function Vn(t,e){return t.transaction(["firebaseLocalStorage"],e?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function $n(){const t=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains("firebaseLocalStorage")?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Hn(t).toPromise()}(),e(await $n()))}))}))}async function Xn(t,e,n){const r=Vn(t,!0).put({fbase_key:e,value:n});return new Hn(r).toPromise()}function qn(t,e){const n=Vn(t,!0).delete(e);return new Hn(n).toPromise()}class Kn{async _openDb(){return this.db||(this.db=await $n()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jn._getInstance(Fn()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Wn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await $n();return await Xn(t,"__sak","1"),await qn(t,"__sak"),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>Xn(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=Vn(t,!1).get(e),r=await new Hn(n).toPromise();return void 0===r?null:r.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>qn(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Vn(t,!1).getAll();return new Hn(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;if(0!==t.length)for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}Kn.type="LOCAL";const Gn=Kn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
nn("rcb"),new ne(3e4,6e4);async function Jn(t,e,n){var r;const i=await n.verify();try{let o;if(Gt("string"==typeof i,t,"argument-error"),Gt("recaptcha"===n.type,t,"argument-error"),o="string"==typeof e?{phoneNumber:e}:e,"session"in o){const e=o.session;if("phoneNumber"in o){Gt("enroll"===e.type,t,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t,e){return ce(t,"POST","/v2/accounts/mfaEnrollment:start",se(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{Gt("signin"===e.type,t,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;Gt(n,t,"missing-multi-factor-info");const a=await function(t,e){return ce(t,"POST","/v2/accounts/mfaSignIn:start",se(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return a.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return ce(t,"POST","/v1/accounts:sendVerificationCode",se(t,e))}(t,{phoneNumber:o.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yn{verifyPhoneNumber(t,e){return Jn(this.auth,t,U(e))}static credential(t,e){return vn._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Yn.credentialFromTaggedObject(e)}static credentialFromError(t){return Yn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?vn._fromTokenResponse(e,n):null}constructor(t){this.providerId=Yn.PROVIDER_ID,this.auth=Qe(t)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qn(t,e){return e?Le(e):(Gt(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yn.PROVIDER_ID="phone",Yn.PHONE_SIGN_IN_METHOD="phone";class Zn extends un{_getIdTokenResponse(t){return hn(t,this._buildIdpRequest())}_linkToIdToken(t,e){return hn(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return hn(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}constructor(t){super("custom","custom"),this.params=t}}function tr(t){return Ln(t.auth,new Zn(t),t.bypassAuthState)}function er(t){const{auth:e,user:n}=t;return Gt(n,e,"internal-error"),Rn(n,new Zn(t),t.bypassAuthState)}async function nr(t){const{auth:e,user:n}=t;return Gt(n,e,"internal-error"),An(n,new Zn(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:o,type:a}=t;if(o)return void this.reject(o);const s={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(s))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return tr;case"linkViaPopup":case"linkViaRedirect":return nr;case"reauthViaPopup":case"reauthViaRedirect":return er;default:Vt(this.auth,"internal-error")}}resolve(t){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new ne(2e3,1e4);class or extends rr{async executeNotNull(){const t=await this.execute();return Gt(t,this.auth,"internal-error"),t}async onExecution(){Yt(1===this.filter.length,"Popup operations only handle one event");const t=Un();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject($t(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject($t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,or.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject($t(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(t,ir.get())};t()}constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,or.currentPopupAction&&or.currentPopupAction.cancel(),or.currentPopupAction=this}}or.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ar=new Map;class sr extends rr{async execute(){let t=ar.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=ur(e),r=lr(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}ar.set(this.auth._key(),t)}return this.bypassAuthState||ar.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}}function cr(t,e){ar.set(t._key(),e)}function lr(t){return Le(t._redirectPersistence)}function ur(t){return De("pendingRedirect",t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(t,e,n=!1){if(_t(t.app))return Promise.reject(qt(t));const r=Qe(t),i=Qn(r,e),o=new sr(r,i,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}class dr{registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hr(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!hr(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError($t(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(pr(t))}saveEventToCache(t){this.cachedEventUids.add(pr(t)),this.lastProcessedEventTime=Date.now()}constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function pr(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function hr({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gr=/^https?/;async function vr(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return ce(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(yr(t))return}catch(t){}Vt(t,"unauthorized-domain")}function yr(t){const e=Qt(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!gr.test(n))return!1;if(mr.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new ne(3e4,6e4);function wr(){const t=Bn().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}function xr(t){return new Promise(((e,n)=>{var r,i,o;function a(){wr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wr(),n($t(t,"network-request-failed"))},timeout:br.get()})}if(null===(i=null===(r=Bn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(o=Bn().gapi)||void 0===o?void 0:o.load)){const e=nn("iframefcb");return Bn()[e]=()=>{gapi.load?a():n($t(t,"network-request-failed"))},en(`${tn.gapiScript}?onload=${e}`).catch((t=>n(t)))}a()}})).catch((t=>{throw kr=null,t}))}let kr=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _r=new ne(5e3,15e3),Ir={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Nr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sr(t){const e=t.config;Gt(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?re(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,r={apiKey:e.apiKey,appName:t.name,v:"10.11.0"},i=Nr.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${O(r).slice(1)}`}async function Er(t){const e=await function(t){return kr=kr||xr(t),kr}(t),n=Bn().gapi;return Gt(n,t,"internal-error"),e.open({where:document.body,url:Sr(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ir,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=$t(t,"network-request-failed"),o=Bn().setTimeout((()=>{r(i)}),_r.get());function a(){Bn().clearTimeout(o),n(e)}e.ping(a).then(a,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Tr{close(){if(this.window)try{this.window.close()}catch(t){}}constructor(t){this.window=t,this.associatedEvent=null}}function Ar(t,e,n,r=500,i=600){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const c=Object.assign(Object.assign({},Cr),{width:r.toString(),height:i.toString(),top:o,left:a}),l=_().toLowerCase();n&&(s=We(l)?"_blank":n),je(l)&&(e=e||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=_()){var e;return $e(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(l)&&"_self"!==s)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e||"",s),new Tr(null);const f=window.open(e||"",s,u);Gt(f,t,"popup-blocked");try{f.focus()}catch(t){}return new Tr(f)}const Rr=encodeURIComponent("fac");async function Lr(t,e,n,r,i,o){Gt(t.config.authDomain,t,"auth-domain-config-required"),Gt(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:"10.11.0",eventId:i};if(e instanceof wn){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",A(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(o||{}))a[t]=e}if(e instanceof xn){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(a.scopes=t.join(","))}t.tenantId&&(a.tid=t.tenantId);const s=a;for(const t of Object.keys(s))void 0===s[t]&&delete s[t];const c=await t._getAppCheckToken(),l=c?`#${Rr}=${encodeURIComponent(c)}`:"";return`${function({config:t}){return t.emulator?re(t,"emulator/auth/handler"):`https://${t.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}?${O(s).slice(1)}${l}`}const Or=class{async _openPopup(t,e,n,r){var i;Yt(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Ar(t,await Lr(t,e,n,Qt(),r),Un())}async _openRedirect(t,e,n,r){await this._originValidation(t);return function(t){Bn().location.href=t}(await Lr(t,e,n,Qt(),r)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(Yt(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await Er(t),n=new dr(t);return e.register("authEvent",(e=>{Gt(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&e(!!i),Vt(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=vr(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return qe()||Ue()||$e()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mn,this._completeRedirectFn=fr,this._overrideRedirectResult=cr}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pr{getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null==e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){Gt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(t){this.auth=t,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Dr=x("authIdTokenMaxAge")||300;let zr=null;var Mr,jr;Mr={loadJS:t=>new Promise(((e,n)=>{const r=document.createElement("script");var i,o;r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=$t("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",(null!==(o=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==o?o:document).appendChild(r)})),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},tn=Mr,jr="Browser",xt(new W("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=n.options;Gt(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const s={apiKey:o,authDomain:a,clientPlatform:jr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ke(jr)},c=new Ye(n,r,i,s);return function(t,e){const n=(null==e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Le);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null==e?void 0:e.popupRedirectResolver)}(c,e),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),xt(new W("auth-internal",(t=>{const e=Qe(t.getProvider("auth").getImmediate());return new Pr(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Ct("@firebase/auth","1.7.1",function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(jr)),Ct("@firebase/auth","1.7.1","esm2017"),t.process=i("4TNnu");!function(t=Et()){const e=kt(t,"auth");if(e.isInitialized())return e.getImmediate();const n=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t,e){const n=kt(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(R(n.getOptions(),null!=e?e:{}))return t;Vt(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:Or,persistence:[Gn,Dn,Mn]}),r=x("authTokenSyncURL");if(r&&"boolean"==typeof isSecureContext&&isSecureContext){const t=new URL(r,location.origin);if(location.origin===t.origin){const e=(i=t.toString(),async t=>{const e=t&&await t.getIdTokenResult(),n=e&&((new Date).getTime()-Date.parse(e.issuedAtTime))/1e3;if(n&&n>Dr)return;const r=null==e?void 0:e.token;zr!==r&&(zr=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(t,e,n){U(t).beforeAuthStateChanged(e,n)}(n,e,(()=>e(n.currentUser))),function(t,e,n,r){U(t).onIdTokenChanged(e,n,r)}(n,(t=>e(t)))}}var i;const o=b("auth");o&&sn(n,`http://${o}`)}(St({apiKey:"AIzaSyBFTleaabEETsFQRavrze5fpw5vtJK-FIY",authDomain:"appgame-7b22b.firebaseapp.com",projectId:"appgame-7b22b",storageBucket:"appgame-7b22b.appspot.com",messagingSenderId:"55180818662",appId:"1:55180818662:web:bf20405c5c03c79a0e2327",measurementId:"G-GSFXDHQHQ4"}));const Ur=document.querySelector(".hamburger-checbox"),Wr=document.querySelector(".btns-and-theme-hamb");Ur.addEventListener("change",(()=>{Wr.classList.toggle("show-menu")}));const Br=document.querySelector(".login-container"),Fr=document.querySelector(".buttons-register li:nth-of-type(1) button"),Hr=document.querySelector(".close-btn");function Vr(){Fr.style.color="",Br.style.display="none"}Fr.addEventListener("click",(t=>{t.preventDefault(),Fr.style.color="rgb(0, 255, 213)",Br.style.display="block"})),Hr.addEventListener("click",(t=>{t.preventDefault(),Vr()})),document.addEventListener("keydown",(t=>{"Escape"===t.key&&Vr()}));const $r=document.querySelector(".next-page-button"),Xr=document.querySelector(".prev-page-button");const qr=document.querySelector(".main-gallery"),Kr=document.querySelector(".loader");async function Gr(t){const e=new URL("games","https://api.rawg.io/api/");e.searchParams.append("ordering","-rating"),e.searchParams.append("key","8b50ecc01425485f9653061e73d88e87"),e.searchParams.append("page",t);try{const t=await fetch(e);return await t.json()}catch(t){console.error("Error fetching popular games:",t)}}async function Jr(){const t=new URL("https://api.rawg.io/api/genres");t.searchParams.append("key","8b50ecc01425485f9653061e73d88e87");try{const e=await fetch(t);return(await e.json()).results}catch(t){console.error("Error fetching genres:",t)}}async function Yr(t){qr.innerHTML="";for(const e of t){const{id:t,name:n,background_image:r,genres:i,tags:o,rating:a,added:s,released:c,parent_platforms:l,short_screenshots:u}=e;if(o.some((t=>"nsfw"===t.name.toLowerCase())))continue;const f=new Image;f.src=r,f.onload=async function(){if(this.naturalWidth>=this.naturalHeight){const u=i.map((t=>t.name)),f=(o.map((t=>t.name)),l.map((t=>t.platform.name)).slice(0,2)),d=`\n          <li class="card-container" data-id="${t}">\n            <div class="first-content-card" data-id="${t}" data-title="${n}" data-original_title="${n}">\n              <div class="img-content">\n                  <img class="cards-home-game-image" width="310" height="170" src="${r}" alt="Poster ${n}" />\n                <div>\n                <div class="stats-cards">\n                <p class="cards-home-game-rating">${a}</p>\n                <p class="cards-home-game-added">+ ${s}</p>\n                </div>\n                <span class="cards-home-game-title">${n.toUpperCase()}</span>\n                </div>\n              </div>\n            </div>\n            <div class="second-content-card">\n            ${u.length>0?`<div class="cards-home-game-genres"><span>Genres:</span> ${u.join(", ")}</div>`:""}\n            ${c?`<div class="cards-home-game-genres"><span>Release date:</span> ${c}</div>`:""}\n            ${f.length>0?`<div class="cards-home-game-genres"><span>Platforms:</span> ${f.join(", ")}</div>`:""}\n              <button class="view-details-btn" data-id="${t}">View Details</button>\n            </div>\n          </li>\n        `;qr.insertAdjacentHTML("beforeend",d),Kr.style.display="none",$r.style.display="block",Xr.style.display="block",document.querySelector(`[data-id="${t}"] .view-details-btn`).addEventListener("click",(async function(){Qr(e)}))}}}}async function Qr(t){const e=await async function(t){const e=new URL(`games/${t}`,"https://api.rawg.io/api/");e.searchParams.append("key","8b50ecc01425485f9653061e73d88e87");try{const t=await fetch(e);return(await t.json()).description}catch(e){return console.error(`Error fetching game description with id ${t}:`,e),""}}(t.id),n=t.short_screenshots.slice(0,6);document.querySelector("body").style.overflow="hidden";const r=n.map(((t,e)=>`<img src="${t.image}" alt="Screenshot ${e+1}" width="300" />`)).join(""),i=`\n    <div class="modal-content" style="background-image: url(${t.background_image}); background-repeat: no-repeat; background-size: cover;">\n      <div class="gradient-overlay"></div>\n      <div class="follow-us"><span>Follow us!</span></div>\n      <span class="close">&times;</span>\n\n      <div class="container-modal-div">\n        <div class="screenshots-modal">\n\n          ${r}\n\n        </div>\n        <div class="stats-modal">\n          <h2>${t.name}</h2>\n          <ul class="buttons-modal">\n            <li>\n              <button>\n                Add to <span>Wishlist</span>\n                <span class="stat-modal-btn">${t.added}</span>\n              </button>\n            </li>\n            <li><button>Add to my <span>games</span></button></li>\n          </ul>\n          <div class="stats-modal-styles">\n            <p>Rating: <span>${t.rating}</span></p>\n            <p>Added: <span>${t.added}</span></p>\n          </div>\n          ${t.genres.length>0?`\n            <p>Genres: <span>${t.genres.map((t=>t.name)).join(", ")}</span></p>\n          `:""}\n          ${t.tags.length>0?`\n            <p>Tags: <span>${t.tags.map((t=>t.name)).join(", ")}</span></p>\n          `:""}\n          <div class="description-content">\n          <p>Description: ${e}</p>\n          </div>\n          <p class="view-more-screenshots"><span class="effect">see screenshots</span> </p>\n\n        </div>\n      </div>\n    </div>\n  `;document.querySelector(".modal").innerHTML=i,document.querySelector(".modal").style.display="block";document.querySelector(".modal-content .close").addEventListener("click",Zr)}async function Zr(){document.querySelector(".modal").style.display="none",document.querySelector("body").style.overflow="auto"}$r.style.display="none",Xr.style.display="none",document.addEventListener("keydown",(t=>{"Escape"===event.key&&Zr()})),Gr(1).then((t=>t.results)).then(Yr).catch((t=>console.error("Error fetching popular games:",t)));let ti=1;const ei=document.querySelector(".prev-page-button"),ni=document.querySelector(".next-page-button");ei.addEventListener("click",(async()=>{if(ti>1)try{Yr((await Gr(ti-1)).results),ti--,window.scrollTo({top:0,behavior:"smooth"})}catch(t){console.error("Error fetching and rendering games:",t)}})),ni.addEventListener("click",(async()=>{try{Yr((await Gr(ti+1)).results),ti++,window.scrollTo({top:0,behavior:"smooth"})}catch(t){console.error("Error fetching and rendering games:",t)}}));const ri=document.querySelector("#search-form"),ii=document.querySelector("#search-input"),oi=document.querySelector(".hero-heading");ri.addEventListener("submit",(async t=>{t.preventDefault(),qr.innerHTML="",ei.style.display="none",ni.style.display="none",Kr.style.display="block",oi.innerHTML="";const n=ii.value.trim();if(n){try{const t=await async function(t,e){const n=new URLSearchParams({search:t,page_size:40,key:"8b50ecc01425485f9653061e73d88e87",image_type:"photo",safesearch:!0,page:e}),r=await fetch(`https://api.rawg.io/api/games?${n.toString()}`);if(!r.ok)throw new Error(r.statusText);return r.json()}(n,1);if(oi.innerHTML=`search for : ${n}`,Kr.style.display="none",!t.results.length)return e(c).Notify.info("No games found"),ei.style.display="none",ni.style.display="none",void(oi.innerHTML="No games found");ei.style.display="block",ni.style.display="block",Yr(t.results)}catch(t){console.error(t),e(c).Notify.failure("Failed to fetch games")}ri.reset()}})),async function(){const t=await Jr(),e=document.querySelector("#genre-list");t.forEach((t=>{const n=document.createElement("li"),r=document.createElement("span");n.dataset.value=t.id,r.textContent=t.name,e.appendChild(n),n.appendChild(r),n.addEventListener("click",(async()=>{qr.innerHTML="",ei.style.display="none",ni.style.display="none",Kr.style.display="block";const e=n.dataset.value;oi.innerHTML=`${t.name}`;const r=await async function(t){const e=new URL("https://api.rawg.io/api/games");e.searchParams.append("key","8b50ecc01425485f9653061e73d88e87"),e.searchParams.append("genres",t);try{const t=await fetch(e);return(await t.json()).results}catch(t){console.error("Error fetching games for genre:",t)}}(e);Yr(r),ei.style.display="block",ni.style.display="block",Kr.style.display="none"}))}))}();const ai=document.querySelector(".singup-container"),si=document.querySelector(".buttons-register li:nth-of-type(2) button"),ci=document.querySelector(".close-btn");function li(){si.style.color="",ai.style.display="none"}si.addEventListener("click",(t=>{t.preventDefault(),si.style.color="rgb(0, 255, 213)",ai.style.display="block"})),ci.addEventListener("click",(t=>{t.preventDefault(),li()})),document.addEventListener("keydown",(t=>{"Escape"===t.key&&li()}));const ui=document.querySelector('.switch input[type="checkbox"]'),fi=document.querySelector("body");"light"===localStorage.getItem("theme")&&(fi.classList.add("light-theme"),ui.checked=!0),ui.addEventListener("change",(()=>{fi.classList.toggle("light-theme"),ui.checked?localStorage.setItem("theme","light"):localStorage.removeItem("theme")}));const di=document.querySelector("#userModal"),pi=document.querySelector(".user-icon");document.querySelector(".user-profile");pi.addEventListener("click",(t=>{di.style.display="block"}));di.querySelector(".user-modal-close").addEventListener("click",(t=>{di.style.display="none"}));const hi=document.getElementById("profilePicInput"),mi=document.getElementById("userIcon"),gi=document.querySelector(".background-image"),vi=document.querySelector(".bg-image");let yi=!1;mi.addEventListener("click",(()=>{yi||(hi.click(),yi=!0)})),gi.addEventListener("click",(()=>{yi||(gi.click(),yi=!0)})),hi.addEventListener("change",(t=>{const e=t.target.files[0];if(e){const t=URL.createObjectURL(e);mi.src=t,mi.style.borderRadius="50%"}yi=!1})),gi.addEventListener("change",(t=>{const e=t.target.files[0];if(e){const t=URL.createObjectURL(e);vi.style.backgroundImage=`linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${t})`}yi=!1}));
//# sourceMappingURL=index.38fe05be.js.map
