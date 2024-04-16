var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequired7c6=i),i.register("kEUo3",(function(t,n){(function(){var r,i="Expected a function",o="__lodash_hash_undefined__",a="__lodash_placeholder__",s=16,c=32,l=64,u=128,f=256,d=1/0,p=9007199254740991,h=NaN,m=4294967295,g=[["ary",u],["bind",1],["bindKey",2],["curry",8],["curryRight",s],["flip",512],["partial",c],["partialRight",l],["rearg",f]],v="[object Arguments]",y="[object Array]",b="[object Boolean]",w="[object Date]",x="[object Error]",k="[object Function]",_="[object GeneratorFunction]",I="[object Map]",N="[object Number]",S="[object Object]",E="[object Promise]",C="[object RegExp]",T="[object Set]",A="[object String]",R="[object Symbol]",L="[object WeakMap]",O="[object ArrayBuffer]",P="[object DataView]",D="[object Float32Array]",z="[object Float64Array]",M="[object Int8Array]",j="[object Int16Array]",U="[object Int32Array]",W="[object Uint8Array]",B="[object Uint8ClampedArray]",F="[object Uint16Array]",H="[object Uint32Array]",V=/\b__p \+= '';/g,$=/\b(__p \+=) '' \+/g,q=/(__e\(.*?\)|\b__t\)) \+\n'';/g,X=/&(?:amp|lt|gt|quot|#39);/g,K=/[&<>"']/g,G=RegExp(X.source),J=RegExp(K.source),Y=/<%-([\s\S]+?)%>/g,Q=/<%([\s\S]+?)%>/g,Z=/<%=([\s\S]+?)%>/g,ee=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,te=/^\w*$/,ne=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,re=/[\\^$.*+?()[\]{}|]/g,ie=RegExp(re.source),oe=/^\s+/,ae=/\s/,se=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ce=/\{\n\/\* \[wrapped with (.+)\] \*/,le=/,? & /,ue=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,fe=/[()=,{}\[\]\/\s]/,de=/\\(\\)?/g,pe=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,he=/\w*$/,me=/^[-+]0x[0-9a-f]+$/i,ge=/^0b[01]+$/i,ve=/^\[object .+?Constructor\]$/,ye=/^0o[0-7]+$/i,be=/^(?:0|[1-9]\d*)$/,we=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,xe=/($^)/,ke=/['\n\r\u2028\u2029\\]/g,_e="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Ie="\\u2700-\\u27bf",Ne="a-z\\xdf-\\xf6\\xf8-\\xff",Se="A-Z\\xc0-\\xd6\\xd8-\\xde",Ee="\\ufe0e\\ufe0f",Ce="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Te="['’]",Ae="[\ud800-\udfff]",Re="["+Ce+"]",Le="["+_e+"]",Oe="\\d+",Pe="[\\u2700-\\u27bf]",De="["+Ne+"]",ze="[^\ud800-\udfff"+Ce+Oe+Ie+Ne+Se+"]",Me="[^\ud800-\udfff]",je="(?:\ud83c[\udde6-\uddff]){2}",Ue="[\ud800-\udbff][\udc00-\udfff]",We="["+Se+"]",Be="(?:"+De+"|"+ze+")",Fe="(?:"+We+"|"+ze+")",He="(?:['’](?:d|ll|m|re|s|t|ve))?",Ve="(?:['’](?:D|LL|M|RE|S|T|VE))?",$e="(?:"+Le+"|"+"\ud83c[\udffb-\udfff])"+"?",qe="[\\ufe0e\\ufe0f]?",Xe=qe+$e+("(?:\\u200d(?:"+[Me,je,Ue].join("|")+")"+qe+$e+")*"),Ke="(?:"+[Pe,je,Ue].join("|")+")"+Xe,Ge="(?:"+[Me+Le+"?",Le,je,Ue,Ae].join("|")+")",Je=RegExp(Te,"g"),Ye=RegExp(Le,"g"),Qe=RegExp("\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|"+Ge+Xe,"g"),Ze=RegExp([We+"?"+De+"+"+He+"(?="+[Re,We,"$"].join("|")+")",Fe+"+"+Ve+"(?="+[Re,We+Be,"$"].join("|")+")",We+"?"+Be+"+"+He,We+"+"+Ve,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Oe,Ke].join("|"),"g"),et=RegExp("[\\u200d\ud800-\udfff"+_e+Ee+"]"),tt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],rt=-1,it={};it[D]=it[z]=it[M]=it[j]=it[U]=it[W]=it[B]=it[F]=it[H]=!0,it[v]=it[y]=it[O]=it[b]=it[P]=it[w]=it[x]=it[k]=it[I]=it[N]=it[S]=it[C]=it[T]=it[A]=it[L]=!1;var ot={};ot[v]=ot[y]=ot[O]=ot[P]=ot[b]=ot[w]=ot[D]=ot[z]=ot[M]=ot[j]=ot[U]=ot[I]=ot[N]=ot[S]=ot[C]=ot[T]=ot[A]=ot[R]=ot[W]=ot[B]=ot[F]=ot[H]=!0,ot[x]=ot[k]=ot[L]=!1;var at={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},st=parseFloat,ct=parseInt,lt="object"==typeof e&&e&&e.Object===Object&&e,ut="object"==typeof self&&self&&self.Object===Object&&self,ft=lt||ut||Function("return this")(),dt=n&&!n.nodeType&&n,pt=dt&&t&&!t.nodeType&&t,ht=pt&&pt.exports===dt,mt=ht&&lt.process,gt=function(){try{var e=pt&&pt.require&&pt.require("util").types;return e||mt&&mt.binding&&mt.binding("util")}catch(e){}}(),vt=gt&&gt.isArrayBuffer,yt=gt&&gt.isDate,bt=gt&&gt.isMap,wt=gt&&gt.isRegExp,xt=gt&&gt.isSet,kt=gt&&gt.isTypedArray;function _t(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function It(e,t,n,r){for(var i=-1,o=null==e?0:e.length;++i<o;){var a=e[i];t(r,a,n(a),e)}return r}function Nt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}function St(e,t){for(var n=null==e?0:e.length;n--&&!1!==t(e[n],n,e););return e}function Et(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0}function Ct(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o}function Tt(e,t){return!!(null==e?0:e.length)&&Ut(e,t,0)>-1}function At(e,t,n){for(var r=-1,i=null==e?0:e.length;++r<i;)if(n(t,e[r]))return!0;return!1}function Rt(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}function Lt(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}function Ot(e,t,n,r){var i=-1,o=null==e?0:e.length;for(r&&o&&(n=e[++i]);++i<o;)n=t(n,e[i],i,e);return n}function Pt(e,t,n,r){var i=null==e?0:e.length;for(r&&i&&(n=e[--i]);i--;)n=t(n,e[i],i,e);return n}function Dt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}var zt=Ht("length");function Mt(e,t,n){var r;return n(e,(function(e,n,i){if(t(e,n,i))return r=n,!1})),r}function jt(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1}function Ut(e,t,n){return t==t?function(e,t,n){var r=n-1,i=e.length;for(;++r<i;)if(e[r]===t)return r;return-1}(e,t,n):jt(e,Bt,n)}function Wt(e,t,n,r){for(var i=n-1,o=e.length;++i<o;)if(r(e[i],t))return i;return-1}function Bt(e){return e!=e}function Ft(e,t){var n=null==e?0:e.length;return n?qt(e,t)/n:h}function Ht(e){return function(t){return null==t?r:t[e]}}function Vt(e){return function(t){return null==e?r:e[t]}}function $t(e,t,n,r,i){return i(e,(function(e,i,o){n=r?(r=!1,e):t(n,e,i,o)})),n}function qt(e,t){for(var n,i=-1,o=e.length;++i<o;){var a=t(e[i]);a!==r&&(n=n===r?a:n+a)}return n}function Xt(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function Kt(e){return e?e.slice(0,pn(e)+1).replace(oe,""):e}function Gt(e){return function(t){return e(t)}}function Jt(e,t){return Rt(t,(function(t){return e[t]}))}function Yt(e,t){return e.has(t)}function Qt(e,t){for(var n=-1,r=e.length;++n<r&&Ut(t,e[n],0)>-1;);return n}function Zt(e,t){for(var n=e.length;n--&&Ut(t,e[n],0)>-1;);return n}function en(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r;return r}var tn=Vt({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),nn=Vt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function rn(e){return"\\"+at[e]}function on(e){return et.test(e)}function an(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}function sn(e,t){return function(n){return e(t(n))}}function cn(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var s=e[n];s!==t&&s!==a||(e[n]=a,o[i++]=n)}return o}function ln(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function un(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=[e,e]})),n}function fn(e){return on(e)?function(e){var t=Qe.lastIndex=0;for(;Qe.test(e);)++t;return t}(e):zt(e)}function dn(e){return on(e)?function(e){return e.match(Qe)||[]}(e):function(e){return e.split("")}(e)}function pn(e){for(var t=e.length;t--&&ae.test(e.charAt(t)););return t}var hn=Vt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var mn=function e(t){var n,ae=(t=null==t?ft:mn.defaults(ft.Object(),t,mn.pick(ft,nt))).Array,_e=t.Date,Ie=t.Error,Ne=t.Function,Se=t.Math,Ee=t.Object,Ce=t.RegExp,Te=t.String,Ae=t.TypeError,Re=ae.prototype,Le=Ne.prototype,Oe=Ee.prototype,Pe=t["__core-js_shared__"],De=Le.toString,ze=Oe.hasOwnProperty,Me=0,je=(n=/[^.]+$/.exec(Pe&&Pe.keys&&Pe.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"",Ue=Oe.toString,We=De.call(Ee),Be=ft._,Fe=Ce("^"+De.call(ze).replace(re,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),He=ht?t.Buffer:r,Ve=t.Symbol,$e=t.Uint8Array,qe=He?He.allocUnsafe:r,Xe=sn(Ee.getPrototypeOf,Ee),Ke=Ee.create,Ge=Oe.propertyIsEnumerable,Qe=Re.splice,et=Ve?Ve.isConcatSpreadable:r,at=Ve?Ve.iterator:r,lt=Ve?Ve.toStringTag:r,ut=function(){try{var e=ho(Ee,"defineProperty");return e({},"",{}),e}catch(e){}}(),dt=t.clearTimeout!==ft.clearTimeout&&t.clearTimeout,pt=_e&&_e.now!==ft.Date.now&&_e.now,mt=t.setTimeout!==ft.setTimeout&&t.setTimeout,gt=Se.ceil,zt=Se.floor,Vt=Ee.getOwnPropertySymbols,gn=He?He.isBuffer:r,vn=t.isFinite,yn=Re.join,bn=sn(Ee.keys,Ee),wn=Se.max,xn=Se.min,kn=_e.now,_n=t.parseInt,In=Se.random,Nn=Re.reverse,Sn=ho(t,"DataView"),En=ho(t,"Map"),Cn=ho(t,"Promise"),Tn=ho(t,"Set"),An=ho(t,"WeakMap"),Rn=ho(Ee,"create"),Ln=An&&new An,On={},Pn=Vo(Sn),Dn=Vo(En),zn=Vo(Cn),Mn=Vo(Tn),jn=Vo(An),Un=Ve?Ve.prototype:r,Wn=Un?Un.valueOf:r,Bn=Un?Un.toString:r;function Fn(e){if(ss(e)&&!Ja(e)&&!(e instanceof qn)){if(e instanceof $n)return e;if(ze.call(e,"__wrapped__"))return $o(e)}return new $n(e)}var Hn=function(){function e(){}return function(t){if(!as(t))return{};if(Ke)return Ke(t);e.prototype=t;var n=new e;return e.prototype=r,n}}();function Vn(){}function $n(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=r}function qn(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=m,this.__views__=[]}function Xn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Kn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Gn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Jn(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new Gn;++t<n;)this.add(e[t])}function Yn(e){var t=this.__data__=new Kn(e);this.size=t.size}function Qn(e,t){var n=Ja(e),r=!n&&Ga(e),i=!n&&!r&&es(e),o=!n&&!r&&!i&&ms(e),a=n||r||i||o,s=a?Xt(e.length,Te):[],c=s.length;for(var l in e)!t&&!ze.call(e,l)||a&&("length"==l||i&&("offset"==l||"parent"==l)||o&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||xo(l,c))||s.push(l);return s}function Zn(e){var t=e.length;return t?e[Jr(0,t-1)]:r}function er(e,t){return jo(Ri(e),lr(t,0,e.length))}function tr(e){return jo(Ri(e))}function nr(e,t,n){(n!==r&&!qa(e[t],n)||n===r&&!(t in e))&&sr(e,t,n)}function rr(e,t,n){var i=e[t];ze.call(e,t)&&qa(i,n)&&(n!==r||t in e)||sr(e,t,n)}function ir(e,t){for(var n=e.length;n--;)if(qa(e[n][0],t))return n;return-1}function or(e,t,n,r){return hr(e,(function(e,i,o){t(r,e,n(e),o)})),r}function ar(e,t){return e&&Li(t,Ms(t),e)}function sr(e,t,n){"__proto__"==t&&ut?ut(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function cr(e,t){for(var n=-1,i=t.length,o=ae(i),a=null==e;++n<i;)o[n]=a?r:Ls(e,t[n]);return o}function lr(e,t,n){return e==e&&(n!==r&&(e=e<=n?e:n),t!==r&&(e=e>=t?e:t)),e}function ur(e,t,n,i,o,a){var s,c=1&t,l=2&t,u=4&t;if(n&&(s=o?n(e,i,o,a):n(e)),s!==r)return s;if(!as(e))return e;var f=Ja(e);if(f){if(s=function(e){var t=e.length,n=new e.constructor(t);t&&"string"==typeof e[0]&&ze.call(e,"index")&&(n.index=e.index,n.input=e.input);return n}(e),!c)return Ri(e,s)}else{var d=vo(e),p=d==k||d==_;if(es(e))return Ni(e,c);if(d==S||d==v||p&&!o){if(s=l||p?{}:bo(e),!c)return l?function(e,t){return Li(e,go(e),t)}(e,function(e,t){return e&&Li(t,js(t),e)}(s,e)):function(e,t){return Li(e,mo(e),t)}(e,ar(s,e))}else{if(!ot[d])return o?e:{};s=function(e,t,n){var r=e.constructor;switch(t){case O:return Si(e);case b:case w:return new r(+e);case P:return function(e,t){var n=t?Si(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}(e,n);case D:case z:case M:case j:case U:case W:case B:case F:case H:return Ei(e,n);case I:return new r;case N:case A:return new r(e);case C:return function(e){var t=new e.constructor(e.source,he.exec(e));return t.lastIndex=e.lastIndex,t}(e);case T:return new r;case R:return i=e,Wn?Ee(Wn.call(i)):{}}var i}(e,d,c)}}a||(a=new Yn);var h=a.get(e);if(h)return h;a.set(e,s),ds(e)?e.forEach((function(r){s.add(ur(r,t,n,r,e,a))})):cs(e)&&e.forEach((function(r,i){s.set(i,ur(r,t,n,i,e,a))}));var m=f?r:(u?l?ao:oo:l?js:Ms)(e);return Nt(m||e,(function(r,i){m&&(r=e[i=r]),rr(s,i,ur(r,t,n,i,e,a))})),s}function fr(e,t,n){var i=n.length;if(null==e)return!i;for(e=Ee(e);i--;){var o=n[i],a=t[o],s=e[o];if(s===r&&!(o in e)||!a(s))return!1}return!0}function dr(e,t,n){if("function"!=typeof e)throw new Ae(i);return Po((function(){e.apply(r,n)}),t)}function pr(e,t,n,r){var i=-1,o=Tt,a=!0,s=e.length,c=[],l=t.length;if(!s)return c;n&&(t=Rt(t,Gt(n))),r?(o=At,a=!1):t.length>=200&&(o=Yt,a=!1,t=new Jn(t));e:for(;++i<s;){var u=e[i],f=null==n?u:n(u);if(u=r||0!==u?u:0,a&&f==f){for(var d=l;d--;)if(t[d]===f)continue e;c.push(u)}else o(t,f,r)||c.push(u)}return c}Fn.templateSettings={escape:Y,evaluate:Q,interpolate:Z,variable:"",imports:{_:Fn}},Fn.prototype=Vn.prototype,Fn.prototype.constructor=Fn,$n.prototype=Hn(Vn.prototype),$n.prototype.constructor=$n,qn.prototype=Hn(Vn.prototype),qn.prototype.constructor=qn,Xn.prototype.clear=function(){this.__data__=Rn?Rn(null):{},this.size=0},Xn.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Xn.prototype.get=function(e){var t=this.__data__;if(Rn){var n=t[e];return n===o?r:n}return ze.call(t,e)?t[e]:r},Xn.prototype.has=function(e){var t=this.__data__;return Rn?t[e]!==r:ze.call(t,e)},Xn.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Rn&&t===r?o:t,this},Kn.prototype.clear=function(){this.__data__=[],this.size=0},Kn.prototype.delete=function(e){var t=this.__data__,n=ir(t,e);return!(n<0)&&(n==t.length-1?t.pop():Qe.call(t,n,1),--this.size,!0)},Kn.prototype.get=function(e){var t=this.__data__,n=ir(t,e);return n<0?r:t[n][1]},Kn.prototype.has=function(e){return ir(this.__data__,e)>-1},Kn.prototype.set=function(e,t){var n=this.__data__,r=ir(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},Gn.prototype.clear=function(){this.size=0,this.__data__={hash:new Xn,map:new(En||Kn),string:new Xn}},Gn.prototype.delete=function(e){var t=fo(this,e).delete(e);return this.size-=t?1:0,t},Gn.prototype.get=function(e){return fo(this,e).get(e)},Gn.prototype.has=function(e){return fo(this,e).has(e)},Gn.prototype.set=function(e,t){var n=fo(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},Jn.prototype.add=Jn.prototype.push=function(e){return this.__data__.set(e,o),this},Jn.prototype.has=function(e){return this.__data__.has(e)},Yn.prototype.clear=function(){this.__data__=new Kn,this.size=0},Yn.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},Yn.prototype.get=function(e){return this.__data__.get(e)},Yn.prototype.has=function(e){return this.__data__.has(e)},Yn.prototype.set=function(e,t){var n=this.__data__;if(n instanceof Kn){var r=n.__data__;if(!En||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Gn(r)}return n.set(e,t),this.size=n.size,this};var hr=Di(kr),mr=Di(_r,!0);function gr(e,t){var n=!0;return hr(e,(function(e,r,i){return n=!!t(e,r,i)})),n}function vr(e,t,n){for(var i=-1,o=e.length;++i<o;){var a=e[i],s=t(a);if(null!=s&&(c===r?s==s&&!hs(s):n(s,c)))var c=s,l=a}return l}function yr(e,t){var n=[];return hr(e,(function(e,r,i){t(e,r,i)&&n.push(e)})),n}function br(e,t,n,r,i){var o=-1,a=e.length;for(n||(n=wo),i||(i=[]);++o<a;){var s=e[o];t>0&&n(s)?t>1?br(s,t-1,n,r,i):Lt(i,s):r||(i[i.length]=s)}return i}var wr=zi(),xr=zi(!0);function kr(e,t){return e&&wr(e,t,Ms)}function _r(e,t){return e&&xr(e,t,Ms)}function Ir(e,t){return Ct(t,(function(t){return rs(e[t])}))}function Nr(e,t){for(var n=0,i=(t=xi(t,e)).length;null!=e&&n<i;)e=e[Ho(t[n++])];return n&&n==i?e:r}function Sr(e,t,n){var r=t(e);return Ja(e)?r:Lt(r,n(e))}function Er(e){return null==e?e===r?"[object Undefined]":"[object Null]":lt&&lt in Ee(e)?function(e){var t=ze.call(e,lt),n=e[lt];try{e[lt]=r;var i=!0}catch(e){}var o=Ue.call(e);i&&(t?e[lt]=n:delete e[lt]);return o}(e):function(e){return Ue.call(e)}(e)}function Cr(e,t){return e>t}function Tr(e,t){return null!=e&&ze.call(e,t)}function Ar(e,t){return null!=e&&t in Ee(e)}function Rr(e,t,n){for(var i=n?At:Tt,o=e[0].length,a=e.length,s=a,c=ae(a),l=1/0,u=[];s--;){var f=e[s];s&&t&&(f=Rt(f,Gt(t))),l=xn(f.length,l),c[s]=!n&&(t||o>=120&&f.length>=120)?new Jn(s&&f):r}f=e[0];var d=-1,p=c[0];e:for(;++d<o&&u.length<l;){var h=f[d],m=t?t(h):h;if(h=n||0!==h?h:0,!(p?Yt(p,m):i(u,m,n))){for(s=a;--s;){var g=c[s];if(!(g?Yt(g,m):i(e[s],m,n)))continue e}p&&p.push(m),u.push(h)}}return u}function Lr(e,t,n){var i=null==(e=Ao(e,t=xi(t,e)))?e:e[Ho(na(t))];return null==i?r:_t(i,e,n)}function Or(e){return ss(e)&&Er(e)==v}function Pr(e,t,n,i,o){return e===t||(null==e||null==t||!ss(e)&&!ss(t)?e!=e&&t!=t:function(e,t,n,i,o,a){var s=Ja(e),c=Ja(t),l=s?y:vo(e),u=c?y:vo(t),f=(l=l==v?S:l)==S,d=(u=u==v?S:u)==S,p=l==u;if(p&&es(e)){if(!es(t))return!1;s=!0,f=!1}if(p&&!f)return a||(a=new Yn),s||ms(e)?ro(e,t,n,i,o,a):function(e,t,n,r,i,o,a){switch(n){case P:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case O:return!(e.byteLength!=t.byteLength||!o(new $e(e),new $e(t)));case b:case w:case N:return qa(+e,+t);case x:return e.name==t.name&&e.message==t.message;case C:case A:return e==t+"";case I:var s=an;case T:var c=1&r;if(s||(s=ln),e.size!=t.size&&!c)return!1;var l=a.get(e);if(l)return l==t;r|=2,a.set(e,t);var u=ro(s(e),s(t),r,i,o,a);return a.delete(e),u;case R:if(Wn)return Wn.call(e)==Wn.call(t)}return!1}(e,t,l,n,i,o,a);if(!(1&n)){var h=f&&ze.call(e,"__wrapped__"),m=d&&ze.call(t,"__wrapped__");if(h||m){var g=h?e.value():e,k=m?t.value():t;return a||(a=new Yn),o(g,k,n,i,a)}}return!!p&&(a||(a=new Yn),function(e,t,n,i,o,a){var s=1&n,c=oo(e),l=c.length,u=oo(t).length;if(l!=u&&!s)return!1;var f=l;for(;f--;){var d=c[f];if(!(s?d in t:ze.call(t,d)))return!1}var p=a.get(e),h=a.get(t);if(p&&h)return p==t&&h==e;var m=!0;a.set(e,t),a.set(t,e);var g=s;for(;++f<l;){var v=e[d=c[f]],y=t[d];if(i)var b=s?i(y,v,d,t,e,a):i(v,y,d,e,t,a);if(!(b===r?v===y||o(v,y,n,i,a):b)){m=!1;break}g||(g="constructor"==d)}if(m&&!g){var w=e.constructor,x=t.constructor;w==x||!("constructor"in e)||!("constructor"in t)||"function"==typeof w&&w instanceof w&&"function"==typeof x&&x instanceof x||(m=!1)}return a.delete(e),a.delete(t),m}(e,t,n,i,o,a))}(e,t,n,i,Pr,o))}function Dr(e,t,n,i){var o=n.length,a=o,s=!i;if(null==e)return!a;for(e=Ee(e);o--;){var c=n[o];if(s&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++o<a;){var l=(c=n[o])[0],u=e[l],f=c[1];if(s&&c[2]){if(u===r&&!(l in e))return!1}else{var d=new Yn;if(i)var p=i(u,f,l,e,t,d);if(!(p===r?Pr(f,u,3,i,d):p))return!1}}return!0}function zr(e){return!(!as(e)||(t=e,je&&je in t))&&(rs(e)?Fe:ve).test(Vo(e));var t}function Mr(e){return"function"==typeof e?e:null==e?lc:"object"==typeof e?Ja(e)?Hr(e[0],e[1]):Fr(e):yc(e)}function jr(e){if(!So(e))return bn(e);var t=[];for(var n in Ee(e))ze.call(e,n)&&"constructor"!=n&&t.push(n);return t}function Ur(e){if(!as(e))return function(e){var t=[];if(null!=e)for(var n in Ee(e))t.push(n);return t}(e);var t=So(e),n=[];for(var r in e)("constructor"!=r||!t&&ze.call(e,r))&&n.push(r);return n}function Wr(e,t){return e<t}function Br(e,t){var n=-1,r=Qa(e)?ae(e.length):[];return hr(e,(function(e,i,o){r[++n]=t(e,i,o)})),r}function Fr(e){var t=po(e);return 1==t.length&&t[0][2]?Co(t[0][0],t[0][1]):function(n){return n===e||Dr(n,e,t)}}function Hr(e,t){return _o(e)&&Eo(t)?Co(Ho(e),t):function(n){var i=Ls(n,e);return i===r&&i===t?Os(n,e):Pr(t,i,3)}}function Vr(e,t,n,i,o){e!==t&&wr(t,(function(a,s){if(o||(o=new Yn),as(a))!function(e,t,n,i,o,a,s){var c=Lo(e,n),l=Lo(t,n),u=s.get(l);if(u)return void nr(e,n,u);var f=a?a(c,l,n+"",e,t,s):r,d=f===r;if(d){var p=Ja(l),h=!p&&es(l),m=!p&&!h&&ms(l);f=l,p||h||m?Ja(c)?f=c:Za(c)?f=Ri(c):h?(d=!1,f=Ni(l,!0)):m?(d=!1,f=Ei(l,!0)):f=[]:us(l)||Ga(l)?(f=c,Ga(c)?f=_s(c):as(c)&&!rs(c)||(f=bo(l))):d=!1}d&&(s.set(l,f),o(f,l,i,a,s),s.delete(l));nr(e,n,f)}(e,t,s,n,Vr,i,o);else{var c=i?i(Lo(e,s),a,s+"",e,t,o):r;c===r&&(c=a),nr(e,s,c)}}),js)}function $r(e,t){var n=e.length;if(n)return xo(t+=t<0?n:0,n)?e[t]:r}function qr(e,t,n){t=t.length?Rt(t,(function(e){return Ja(e)?function(t){return Nr(t,1===e.length?e[0]:e)}:e})):[lc];var r=-1;return t=Rt(t,Gt(uo())),function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}(Br(e,(function(e,n,i){return{criteria:Rt(t,(function(t){return t(e)})),index:++r,value:e}})),(function(e,t){return function(e,t,n){var r=-1,i=e.criteria,o=t.criteria,a=i.length,s=n.length;for(;++r<a;){var c=Ci(i[r],o[r]);if(c)return r>=s?c:c*("desc"==n[r]?-1:1)}return e.index-t.index}(e,t,n)}))}function Xr(e,t,n){for(var r=-1,i=t.length,o={};++r<i;){var a=t[r],s=Nr(e,a);n(s,a)&&ti(o,xi(a,e),s)}return o}function Kr(e,t,n,r){var i=r?Wt:Ut,o=-1,a=t.length,s=e;for(e===t&&(t=Ri(t)),n&&(s=Rt(e,Gt(n)));++o<a;)for(var c=0,l=t[o],u=n?n(l):l;(c=i(s,u,c,r))>-1;)s!==e&&Qe.call(s,c,1),Qe.call(e,c,1);return e}function Gr(e,t){for(var n=e?t.length:0,r=n-1;n--;){var i=t[n];if(n==r||i!==o){var o=i;xo(i)?Qe.call(e,i,1):pi(e,i)}}return e}function Jr(e,t){return e+zt(In()*(t-e+1))}function Yr(e,t){var n="";if(!e||t<1||t>p)return n;do{t%2&&(n+=e),(t=zt(t/2))&&(e+=e)}while(t);return n}function Qr(e,t){return Do(To(e,t,lc),e+"")}function Zr(e){return Zn(qs(e))}function ei(e,t){var n=qs(e);return jo(n,lr(t,0,n.length))}function ti(e,t,n,i){if(!as(e))return e;for(var o=-1,a=(t=xi(t,e)).length,s=a-1,c=e;null!=c&&++o<a;){var l=Ho(t[o]),u=n;if("__proto__"===l||"constructor"===l||"prototype"===l)return e;if(o!=s){var f=c[l];(u=i?i(f,l,c):r)===r&&(u=as(f)?f:xo(t[o+1])?[]:{})}rr(c,l,u),c=c[l]}return e}var ni=Ln?function(e,t){return Ln.set(e,t),e}:lc,ri=ut?function(e,t){return ut(e,"toString",{configurable:!0,enumerable:!1,value:ac(t),writable:!0})}:lc;function ii(e){return jo(qs(e))}function oi(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(n=n>i?i:n)<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var o=ae(i);++r<i;)o[r]=e[r+t];return o}function ai(e,t){var n;return hr(e,(function(e,r,i){return!(n=t(e,r,i))})),!!n}function si(e,t,n){var r=0,i=null==e?r:e.length;if("number"==typeof t&&t==t&&i<=2147483647){for(;r<i;){var o=r+i>>>1,a=e[o];null!==a&&!hs(a)&&(n?a<=t:a<t)?r=o+1:i=o}return i}return ci(e,t,lc,n)}function ci(e,t,n,i){var o=0,a=null==e?0:e.length;if(0===a)return 0;for(var s=(t=n(t))!=t,c=null===t,l=hs(t),u=t===r;o<a;){var f=zt((o+a)/2),d=n(e[f]),p=d!==r,h=null===d,m=d==d,g=hs(d);if(s)var v=i||m;else v=u?m&&(i||p):c?m&&p&&(i||!h):l?m&&p&&!h&&(i||!g):!h&&!g&&(i?d<=t:d<t);v?o=f+1:a=f}return xn(a,4294967294)}function li(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var a=e[n],s=t?t(a):a;if(!n||!qa(s,c)){var c=s;o[i++]=0===a?0:a}}return o}function ui(e){return"number"==typeof e?e:hs(e)?h:+e}function fi(e){if("string"==typeof e)return e;if(Ja(e))return Rt(e,fi)+"";if(hs(e))return Bn?Bn.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function di(e,t,n){var r=-1,i=Tt,o=e.length,a=!0,s=[],c=s;if(n)a=!1,i=At;else if(o>=200){var l=t?null:Yi(e);if(l)return ln(l);a=!1,i=Yt,c=new Jn}else c=t?[]:s;e:for(;++r<o;){var u=e[r],f=t?t(u):u;if(u=n||0!==u?u:0,a&&f==f){for(var d=c.length;d--;)if(c[d]===f)continue e;t&&c.push(f),s.push(u)}else i(c,f,n)||(c!==s&&c.push(f),s.push(u))}return s}function pi(e,t){return null==(e=Ao(e,t=xi(t,e)))||delete e[Ho(na(t))]}function hi(e,t,n,r){return ti(e,t,n(Nr(e,t)),r)}function mi(e,t,n,r){for(var i=e.length,o=r?i:-1;(r?o--:++o<i)&&t(e[o],o,e););return n?oi(e,r?0:o,r?o+1:i):oi(e,r?o+1:0,r?i:o)}function gi(e,t){var n=e;return n instanceof qn&&(n=n.value()),Ot(t,(function(e,t){return t.func.apply(t.thisArg,Lt([e],t.args))}),n)}function vi(e,t,n){var r=e.length;if(r<2)return r?di(e[0]):[];for(var i=-1,o=ae(r);++i<r;)for(var a=e[i],s=-1;++s<r;)s!=i&&(o[i]=pr(o[i]||a,e[s],t,n));return di(br(o,1),t,n)}function yi(e,t,n){for(var i=-1,o=e.length,a=t.length,s={};++i<o;){var c=i<a?t[i]:r;n(s,e[i],c)}return s}function bi(e){return Za(e)?e:[]}function wi(e){return"function"==typeof e?e:lc}function xi(e,t){return Ja(e)?e:_o(e,t)?[e]:Fo(Is(e))}var ki=Qr;function _i(e,t,n){var i=e.length;return n=n===r?i:n,!t&&n>=i?e:oi(e,t,n)}var Ii=dt||function(e){return ft.clearTimeout(e)};function Ni(e,t){if(t)return e.slice();var n=e.length,r=qe?qe(n):new e.constructor(n);return e.copy(r),r}function Si(e){var t=new e.constructor(e.byteLength);return new $e(t).set(new $e(e)),t}function Ei(e,t){var n=t?Si(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Ci(e,t){if(e!==t){var n=e!==r,i=null===e,o=e==e,a=hs(e),s=t!==r,c=null===t,l=t==t,u=hs(t);if(!c&&!u&&!a&&e>t||a&&s&&l&&!c&&!u||i&&s&&l||!n&&l||!o)return 1;if(!i&&!a&&!u&&e<t||u&&n&&o&&!i&&!a||c&&n&&o||!s&&o||!l)return-1}return 0}function Ti(e,t,n,r){for(var i=-1,o=e.length,a=n.length,s=-1,c=t.length,l=wn(o-a,0),u=ae(c+l),f=!r;++s<c;)u[s]=t[s];for(;++i<a;)(f||i<o)&&(u[n[i]]=e[i]);for(;l--;)u[s++]=e[i++];return u}function Ai(e,t,n,r){for(var i=-1,o=e.length,a=-1,s=n.length,c=-1,l=t.length,u=wn(o-s,0),f=ae(u+l),d=!r;++i<u;)f[i]=e[i];for(var p=i;++c<l;)f[p+c]=t[c];for(;++a<s;)(d||i<o)&&(f[p+n[a]]=e[i++]);return f}function Ri(e,t){var n=-1,r=e.length;for(t||(t=ae(r));++n<r;)t[n]=e[n];return t}function Li(e,t,n,i){var o=!n;n||(n={});for(var a=-1,s=t.length;++a<s;){var c=t[a],l=i?i(n[c],e[c],c,n,e):r;l===r&&(l=e[c]),o?sr(n,c,l):rr(n,c,l)}return n}function Oi(e,t){return function(n,r){var i=Ja(n)?It:or,o=t?t():{};return i(n,e,uo(r,2),o)}}function Pi(e){return Qr((function(t,n){var i=-1,o=n.length,a=o>1?n[o-1]:r,s=o>2?n[2]:r;for(a=e.length>3&&"function"==typeof a?(o--,a):r,s&&ko(n[0],n[1],s)&&(a=o<3?r:a,o=1),t=Ee(t);++i<o;){var c=n[i];c&&e(t,c,i,a)}return t}))}function Di(e,t){return function(n,r){if(null==n)return n;if(!Qa(n))return e(n,r);for(var i=n.length,o=t?i:-1,a=Ee(n);(t?o--:++o<i)&&!1!==r(a[o],o,a););return n}}function zi(e){return function(t,n,r){for(var i=-1,o=Ee(t),a=r(t),s=a.length;s--;){var c=a[e?s:++i];if(!1===n(o[c],c,o))break}return t}}function Mi(e){return function(t){var n=on(t=Is(t))?dn(t):r,i=n?n[0]:t.charAt(0),o=n?_i(n,1).join(""):t.slice(1);return i[e]()+o}}function ji(e){return function(t){return Ot(rc(Gs(t).replace(Je,"")),e,"")}}function Ui(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=Hn(e.prototype),r=e.apply(n,t);return as(r)?r:n}}function Wi(e){return function(t,n,i){var o=Ee(t);if(!Qa(t)){var a=uo(n,3);t=Ms(t),n=function(e){return a(o[e],e,o)}}var s=e(t,n,i);return s>-1?o[a?t[s]:s]:r}}function Bi(e){return io((function(t){var n=t.length,o=n,a=$n.prototype.thru;for(e&&t.reverse();o--;){var s=t[o];if("function"!=typeof s)throw new Ae(i);if(a&&!c&&"wrapper"==co(s))var c=new $n([],!0)}for(o=c?o:n;++o<n;){var l=co(s=t[o]),u="wrapper"==l?so(s):r;c=u&&Io(u[0])&&424==u[1]&&!u[4].length&&1==u[9]?c[co(u[0])].apply(c,u[3]):1==s.length&&Io(s)?c[l]():c.thru(s)}return function(){var e=arguments,r=e[0];if(c&&1==e.length&&Ja(r))return c.plant(r).value();for(var i=0,o=n?t[i].apply(this,e):r;++i<n;)o=t[i].call(this,o);return o}}))}function Fi(e,t,n,i,o,a,s,c,l,f){var d=t&u,p=1&t,h=2&t,m=24&t,g=512&t,v=h?r:Ui(e);return function r(){for(var u=arguments.length,y=ae(u),b=u;b--;)y[b]=arguments[b];if(m)var w=lo(r),x=en(y,w);if(i&&(y=Ti(y,i,o,m)),a&&(y=Ai(y,a,s,m)),u-=x,m&&u<f){var k=cn(y,w);return Gi(e,t,Fi,r.placeholder,n,y,k,c,l,f-u)}var _=p?n:this,I=h?_[e]:e;return u=y.length,c?y=Ro(y,c):g&&u>1&&y.reverse(),d&&l<u&&(y.length=l),this&&this!==ft&&this instanceof r&&(I=v||Ui(I)),I.apply(_,y)}}function Hi(e,t){return function(n,r){return function(e,t,n,r){return kr(e,(function(e,i,o){t(r,n(e),i,o)})),r}(n,e,t(r),{})}}function Vi(e,t){return function(n,i){var o;if(n===r&&i===r)return t;if(n!==r&&(o=n),i!==r){if(o===r)return i;"string"==typeof n||"string"==typeof i?(n=fi(n),i=fi(i)):(n=ui(n),i=ui(i)),o=e(n,i)}return o}}function $i(e){return io((function(t){return t=Rt(t,Gt(uo())),Qr((function(n){var r=this;return e(t,(function(e){return _t(e,r,n)}))}))}))}function qi(e,t){var n=(t=t===r?" ":fi(t)).length;if(n<2)return n?Yr(t,e):t;var i=Yr(t,gt(e/fn(t)));return on(t)?_i(dn(i),0,e).join(""):i.slice(0,e)}function Xi(e){return function(t,n,i){return i&&"number"!=typeof i&&ko(t,n,i)&&(n=i=r),t=bs(t),n===r?(n=t,t=0):n=bs(n),function(e,t,n,r){for(var i=-1,o=wn(gt((t-e)/(n||1)),0),a=ae(o);o--;)a[r?o:++i]=e,e+=n;return a}(t,n,i=i===r?t<n?1:-1:bs(i),e)}}function Ki(e){return function(t,n){return"string"==typeof t&&"string"==typeof n||(t=ks(t),n=ks(n)),e(t,n)}}function Gi(e,t,n,i,o,a,s,u,f,d){var p=8&t;t|=p?c:l,4&(t&=~(p?l:c))||(t&=-4);var h=[e,t,o,p?a:r,p?s:r,p?r:a,p?r:s,u,f,d],m=n.apply(r,h);return Io(e)&&Oo(m,h),m.placeholder=i,zo(m,e,t)}function Ji(e){var t=Se[e];return function(e,n){if(e=ks(e),(n=null==n?0:xn(ws(n),292))&&vn(e)){var r=(Is(e)+"e").split("e");return+((r=(Is(t(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}var Yi=Tn&&1/ln(new Tn([,-0]))[1]==d?function(e){return new Tn(e)}:hc;function Qi(e){return function(t){var n=vo(t);return n==I?an(t):n==T?un(t):function(e,t){return Rt(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Zi(e,t,n,o,d,p,h,m){var g=2&t;if(!g&&"function"!=typeof e)throw new Ae(i);var v=o?o.length:0;if(v||(t&=-97,o=d=r),h=h===r?h:wn(ws(h),0),m=m===r?m:ws(m),v-=d?d.length:0,t&l){var y=o,b=d;o=d=r}var w=g?r:so(e),x=[e,t,n,o,d,y,b,p,h,m];if(w&&function(e,t){var n=e[1],r=t[1],i=n|r,o=i<131,s=r==u&&8==n||r==u&&n==f&&e[7].length<=t[8]||384==r&&t[7].length<=t[8]&&8==n;if(!o&&!s)return e;1&r&&(e[2]=t[2],i|=1&n?0:4);var c=t[3];if(c){var l=e[3];e[3]=l?Ti(l,c,t[4]):c,e[4]=l?cn(e[3],a):t[4]}(c=t[5])&&(l=e[5],e[5]=l?Ai(l,c,t[6]):c,e[6]=l?cn(e[5],a):t[6]);(c=t[7])&&(e[7]=c);r&u&&(e[8]=null==e[8]?t[8]:xn(e[8],t[8]));null==e[9]&&(e[9]=t[9]);e[0]=t[0],e[1]=i}(x,w),e=x[0],t=x[1],n=x[2],o=x[3],d=x[4],!(m=x[9]=x[9]===r?g?0:e.length:wn(x[9]-v,0))&&24&t&&(t&=-25),t&&1!=t)k=8==t||t==s?function(e,t,n){var i=Ui(e);return function o(){for(var a=arguments.length,s=ae(a),c=a,l=lo(o);c--;)s[c]=arguments[c];var u=a<3&&s[0]!==l&&s[a-1]!==l?[]:cn(s,l);return(a-=u.length)<n?Gi(e,t,Fi,o.placeholder,r,s,u,r,r,n-a):_t(this&&this!==ft&&this instanceof o?i:e,this,s)}}(e,t,m):t!=c&&33!=t||d.length?Fi.apply(r,x):function(e,t,n,r){var i=1&t,o=Ui(e);return function t(){for(var a=-1,s=arguments.length,c=-1,l=r.length,u=ae(l+s),f=this&&this!==ft&&this instanceof t?o:e;++c<l;)u[c]=r[c];for(;s--;)u[c++]=arguments[++a];return _t(f,i?n:this,u)}}(e,t,n,o);else var k=function(e,t,n){var r=1&t,i=Ui(e);return function t(){return(this&&this!==ft&&this instanceof t?i:e).apply(r?n:this,arguments)}}(e,t,n);return zo((w?ni:Oo)(k,x),e,t)}function eo(e,t,n,i){return e===r||qa(e,Oe[n])&&!ze.call(i,n)?t:e}function to(e,t,n,i,o,a){return as(e)&&as(t)&&(a.set(t,e),Vr(e,t,r,to,a),a.delete(t)),e}function no(e){return us(e)?r:e}function ro(e,t,n,i,o,a){var s=1&n,c=e.length,l=t.length;if(c!=l&&!(s&&l>c))return!1;var u=a.get(e),f=a.get(t);if(u&&f)return u==t&&f==e;var d=-1,p=!0,h=2&n?new Jn:r;for(a.set(e,t),a.set(t,e);++d<c;){var m=e[d],g=t[d];if(i)var v=s?i(g,m,d,t,e,a):i(m,g,d,e,t,a);if(v!==r){if(v)continue;p=!1;break}if(h){if(!Dt(t,(function(e,t){if(!Yt(h,t)&&(m===e||o(m,e,n,i,a)))return h.push(t)}))){p=!1;break}}else if(m!==g&&!o(m,g,n,i,a)){p=!1;break}}return a.delete(e),a.delete(t),p}function io(e){return Do(To(e,r,Yo),e+"")}function oo(e){return Sr(e,Ms,mo)}function ao(e){return Sr(e,js,go)}var so=Ln?function(e){return Ln.get(e)}:hc;function co(e){for(var t=e.name+"",n=On[t],r=ze.call(On,t)?n.length:0;r--;){var i=n[r],o=i.func;if(null==o||o==e)return i.name}return t}function lo(e){return(ze.call(Fn,"placeholder")?Fn:e).placeholder}function uo(){var e=Fn.iteratee||uc;return e=e===uc?Mr:e,arguments.length?e(arguments[0],arguments[1]):e}function fo(e,t){var n,r,i=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof t?"string":"hash"]:i.map}function po(e){for(var t=Ms(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,Eo(i)]}return t}function ho(e,t){var n=function(e,t){return null==e?r:e[t]}(e,t);return zr(n)?n:r}var mo=Vt?function(e){return null==e?[]:(e=Ee(e),Ct(Vt(e),(function(t){return Ge.call(e,t)})))}:xc,go=Vt?function(e){for(var t=[];e;)Lt(t,mo(e)),e=Xe(e);return t}:xc,vo=Er;function yo(e,t,n){for(var r=-1,i=(t=xi(t,e)).length,o=!1;++r<i;){var a=Ho(t[r]);if(!(o=null!=e&&n(e,a)))break;e=e[a]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&os(i)&&xo(a,i)&&(Ja(e)||Ga(e))}function bo(e){return"function"!=typeof e.constructor||So(e)?{}:Hn(Xe(e))}function wo(e){return Ja(e)||Ga(e)||!!(et&&e&&e[et])}function xo(e,t){var n=typeof e;return!!(t=null==t?p:t)&&("number"==n||"symbol"!=n&&be.test(e))&&e>-1&&e%1==0&&e<t}function ko(e,t,n){if(!as(n))return!1;var r=typeof t;return!!("number"==r?Qa(n)&&xo(t,n.length):"string"==r&&t in n)&&qa(n[t],e)}function _o(e,t){if(Ja(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!hs(e))||(te.test(e)||!ee.test(e)||null!=t&&e in Ee(t))}function Io(e){var t=co(e),n=Fn[t];if("function"!=typeof n||!(t in qn.prototype))return!1;if(e===n)return!0;var r=so(n);return!!r&&e===r[0]}(Sn&&vo(new Sn(new ArrayBuffer(1)))!=P||En&&vo(new En)!=I||Cn&&vo(Cn.resolve())!=E||Tn&&vo(new Tn)!=T||An&&vo(new An)!=L)&&(vo=function(e){var t=Er(e),n=t==S?e.constructor:r,i=n?Vo(n):"";if(i)switch(i){case Pn:return P;case Dn:return I;case zn:return E;case Mn:return T;case jn:return L}return t});var No=Pe?rs:kc;function So(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Oe)}function Eo(e){return e==e&&!as(e)}function Co(e,t){return function(n){return null!=n&&(n[e]===t&&(t!==r||e in Ee(n)))}}function To(e,t,n){return t=wn(t===r?e.length-1:t,0),function(){for(var r=arguments,i=-1,o=wn(r.length-t,0),a=ae(o);++i<o;)a[i]=r[t+i];i=-1;for(var s=ae(t+1);++i<t;)s[i]=r[i];return s[t]=n(a),_t(e,this,s)}}function Ao(e,t){return t.length<2?e:Nr(e,oi(t,0,-1))}function Ro(e,t){for(var n=e.length,i=xn(t.length,n),o=Ri(e);i--;){var a=t[i];e[i]=xo(a,n)?o[a]:r}return e}function Lo(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var Oo=Mo(ni),Po=mt||function(e,t){return ft.setTimeout(e,t)},Do=Mo(ri);function zo(e,t,n){var r=t+"";return Do(e,function(e,t){var n=t.length;if(!n)return e;var r=n-1;return t[r]=(n>1?"& ":"")+t[r],t=t.join(n>2?", ":" "),e.replace(se,"{\n/* [wrapped with "+t+"] */\n")}(r,function(e,t){return Nt(g,(function(n){var r="_."+n[0];t&n[1]&&!Tt(e,r)&&e.push(r)})),e.sort()}(function(e){var t=e.match(ce);return t?t[1].split(le):[]}(r),n)))}function Mo(e){var t=0,n=0;return function(){var i=kn(),o=16-(i-n);if(n=i,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(r,arguments)}}function jo(e,t){var n=-1,i=e.length,o=i-1;for(t=t===r?i:t;++n<t;){var a=Jr(n,o),s=e[a];e[a]=e[n],e[n]=s}return e.length=t,e}var Uo,Wo,Bo,Fo=(Uo=function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ne,(function(e,n,r,i){t.push(r?i.replace(de,"$1"):n||e)})),t},Wo=Wa(Uo,(function(e){return 500===Bo.size&&Bo.clear(),e})),Bo=Wo.cache,Wo);function Ho(e){if("string"==typeof e||hs(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Vo(e){if(null!=e){try{return De.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function $o(e){if(e instanceof qn)return e.clone();var t=new $n(e.__wrapped__,e.__chain__);return t.__actions__=Ri(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var qo=Qr((function(e,t){return Za(e)?pr(e,br(t,1,Za,!0)):[]})),Xo=Qr((function(e,t){var n=na(t);return Za(n)&&(n=r),Za(e)?pr(e,br(t,1,Za,!0),uo(n,2)):[]})),Ko=Qr((function(e,t){var n=na(t);return Za(n)&&(n=r),Za(e)?pr(e,br(t,1,Za,!0),r,n):[]}));function Go(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:ws(n);return i<0&&(i=wn(r+i,0)),jt(e,uo(t,3),i)}function Jo(e,t,n){var i=null==e?0:e.length;if(!i)return-1;var o=i-1;return n!==r&&(o=ws(n),o=n<0?wn(i+o,0):xn(o,i-1)),jt(e,uo(t,3),o,!0)}function Yo(e){return(null==e?0:e.length)?br(e,1):[]}function Qo(e){return e&&e.length?e[0]:r}var Zo=Qr((function(e){var t=Rt(e,bi);return t.length&&t[0]===e[0]?Rr(t):[]})),ea=Qr((function(e){var t=na(e),n=Rt(e,bi);return t===na(n)?t=r:n.pop(),n.length&&n[0]===e[0]?Rr(n,uo(t,2)):[]})),ta=Qr((function(e){var t=na(e),n=Rt(e,bi);return(t="function"==typeof t?t:r)&&n.pop(),n.length&&n[0]===e[0]?Rr(n,r,t):[]}));function na(e){var t=null==e?0:e.length;return t?e[t-1]:r}var ra=Qr(ia);function ia(e,t){return e&&e.length&&t&&t.length?Kr(e,t):e}var oa=io((function(e,t){var n=null==e?0:e.length,r=cr(e,t);return Gr(e,Rt(t,(function(e){return xo(e,n)?+e:e})).sort(Ci)),r}));function aa(e){return null==e?e:Nn.call(e)}var sa=Qr((function(e){return di(br(e,1,Za,!0))})),ca=Qr((function(e){var t=na(e);return Za(t)&&(t=r),di(br(e,1,Za,!0),uo(t,2))})),la=Qr((function(e){var t=na(e);return t="function"==typeof t?t:r,di(br(e,1,Za,!0),r,t)}));function ua(e){if(!e||!e.length)return[];var t=0;return e=Ct(e,(function(e){if(Za(e))return t=wn(e.length,t),!0})),Xt(t,(function(t){return Rt(e,Ht(t))}))}function fa(e,t){if(!e||!e.length)return[];var n=ua(e);return null==t?n:Rt(n,(function(e){return _t(t,r,e)}))}var da=Qr((function(e,t){return Za(e)?pr(e,t):[]})),pa=Qr((function(e){return vi(Ct(e,Za))})),ha=Qr((function(e){var t=na(e);return Za(t)&&(t=r),vi(Ct(e,Za),uo(t,2))})),ma=Qr((function(e){var t=na(e);return t="function"==typeof t?t:r,vi(Ct(e,Za),r,t)})),ga=Qr(ua);var va=Qr((function(e){var t=e.length,n=t>1?e[t-1]:r;return n="function"==typeof n?(e.pop(),n):r,fa(e,n)}));function ya(e){var t=Fn(e);return t.__chain__=!0,t}function ba(e,t){return t(e)}var wa=io((function(e){var t=e.length,n=t?e[0]:0,i=this.__wrapped__,o=function(t){return cr(t,e)};return!(t>1||this.__actions__.length)&&i instanceof qn&&xo(n)?((i=i.slice(n,+n+(t?1:0))).__actions__.push({func:ba,args:[o],thisArg:r}),new $n(i,this.__chain__).thru((function(e){return t&&!e.length&&e.push(r),e}))):this.thru(o)}));var xa=Oi((function(e,t,n){ze.call(e,n)?++e[n]:sr(e,n,1)}));var ka=Wi(Go),_a=Wi(Jo);function Ia(e,t){return(Ja(e)?Nt:hr)(e,uo(t,3))}function Na(e,t){return(Ja(e)?St:mr)(e,uo(t,3))}var Sa=Oi((function(e,t,n){ze.call(e,n)?e[n].push(t):sr(e,n,[t])}));var Ea=Qr((function(e,t,n){var r=-1,i="function"==typeof t,o=Qa(e)?ae(e.length):[];return hr(e,(function(e){o[++r]=i?_t(t,e,n):Lr(e,t,n)})),o})),Ca=Oi((function(e,t,n){sr(e,n,t)}));function Ta(e,t){return(Ja(e)?Rt:Br)(e,uo(t,3))}var Aa=Oi((function(e,t,n){e[n?0:1].push(t)}),(function(){return[[],[]]}));var Ra=Qr((function(e,t){if(null==e)return[];var n=t.length;return n>1&&ko(e,t[0],t[1])?t=[]:n>2&&ko(t[0],t[1],t[2])&&(t=[t[0]]),qr(e,br(t,1),[])})),La=pt||function(){return ft.Date.now()};function Oa(e,t,n){return t=n?r:t,t=e&&null==t?e.length:t,Zi(e,u,r,r,r,r,t)}function Pa(e,t){var n;if("function"!=typeof t)throw new Ae(i);return e=ws(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=r),n}}var Da=Qr((function(e,t,n){var r=1;if(n.length){var i=cn(n,lo(Da));r|=c}return Zi(e,r,t,n,i)})),za=Qr((function(e,t,n){var r=3;if(n.length){var i=cn(n,lo(za));r|=c}return Zi(t,r,e,n,i)}));function Ma(e,t,n){var o,a,s,c,l,u,f=0,d=!1,p=!1,h=!0;if("function"!=typeof e)throw new Ae(i);function m(t){var n=o,i=a;return o=a=r,f=t,c=e.apply(i,n)}function g(e){return f=e,l=Po(y,t),d?m(e):c}function v(e){var n=e-u;return u===r||n>=t||n<0||p&&e-f>=s}function y(){var e=La();if(v(e))return b(e);l=Po(y,function(e){var n=t-(e-u);return p?xn(n,s-(e-f)):n}(e))}function b(e){return l=r,h&&o?m(e):(o=a=r,c)}function w(){var e=La(),n=v(e);if(o=arguments,a=this,u=e,n){if(l===r)return g(u);if(p)return Ii(l),l=Po(y,t),m(u)}return l===r&&(l=Po(y,t)),c}return t=ks(t)||0,as(n)&&(d=!!n.leading,s=(p="maxWait"in n)?wn(ks(n.maxWait)||0,t):s,h="trailing"in n?!!n.trailing:h),w.cancel=function(){l!==r&&Ii(l),f=0,o=u=a=l=r},w.flush=function(){return l===r?c:b(La())},w}var ja=Qr((function(e,t){return dr(e,1,t)})),Ua=Qr((function(e,t,n){return dr(e,ks(t)||0,n)}));function Wa(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new Ae(i);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Wa.Cache||Gn),n}function Ba(e){if("function"!=typeof e)throw new Ae(i);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Wa.Cache=Gn;var Fa=ki((function(e,t){var n=(t=1==t.length&&Ja(t[0])?Rt(t[0],Gt(uo())):Rt(br(t,1),Gt(uo()))).length;return Qr((function(r){for(var i=-1,o=xn(r.length,n);++i<o;)r[i]=t[i].call(this,r[i]);return _t(e,this,r)}))})),Ha=Qr((function(e,t){var n=cn(t,lo(Ha));return Zi(e,c,r,t,n)})),Va=Qr((function(e,t){var n=cn(t,lo(Va));return Zi(e,l,r,t,n)})),$a=io((function(e,t){return Zi(e,f,r,r,r,t)}));function qa(e,t){return e===t||e!=e&&t!=t}var Xa=Ki(Cr),Ka=Ki((function(e,t){return e>=t})),Ga=Or(function(){return arguments}())?Or:function(e){return ss(e)&&ze.call(e,"callee")&&!Ge.call(e,"callee")},Ja=ae.isArray,Ya=vt?Gt(vt):function(e){return ss(e)&&Er(e)==O};function Qa(e){return null!=e&&os(e.length)&&!rs(e)}function Za(e){return ss(e)&&Qa(e)}var es=gn||kc,ts=yt?Gt(yt):function(e){return ss(e)&&Er(e)==w};function ns(e){if(!ss(e))return!1;var t=Er(e);return t==x||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!us(e)}function rs(e){if(!as(e))return!1;var t=Er(e);return t==k||t==_||"[object AsyncFunction]"==t||"[object Proxy]"==t}function is(e){return"number"==typeof e&&e==ws(e)}function os(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=p}function as(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ss(e){return null!=e&&"object"==typeof e}var cs=bt?Gt(bt):function(e){return ss(e)&&vo(e)==I};function ls(e){return"number"==typeof e||ss(e)&&Er(e)==N}function us(e){if(!ss(e)||Er(e)!=S)return!1;var t=Xe(e);if(null===t)return!0;var n=ze.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&De.call(n)==We}var fs=wt?Gt(wt):function(e){return ss(e)&&Er(e)==C};var ds=xt?Gt(xt):function(e){return ss(e)&&vo(e)==T};function ps(e){return"string"==typeof e||!Ja(e)&&ss(e)&&Er(e)==A}function hs(e){return"symbol"==typeof e||ss(e)&&Er(e)==R}var ms=kt?Gt(kt):function(e){return ss(e)&&os(e.length)&&!!it[Er(e)]};var gs=Ki(Wr),vs=Ki((function(e,t){return e<=t}));function ys(e){if(!e)return[];if(Qa(e))return ps(e)?dn(e):Ri(e);if(at&&e[at])return function(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}(e[at]());var t=vo(e);return(t==I?an:t==T?ln:qs)(e)}function bs(e){return e?(e=ks(e))===d||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function ws(e){var t=bs(e),n=t%1;return t==t?n?t-n:t:0}function xs(e){return e?lr(ws(e),0,m):0}function ks(e){if("number"==typeof e)return e;if(hs(e))return h;if(as(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=as(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Kt(e);var n=ge.test(e);return n||ye.test(e)?ct(e.slice(2),n?2:8):me.test(e)?h:+e}function _s(e){return Li(e,js(e))}function Is(e){return null==e?"":fi(e)}var Ns=Pi((function(e,t){if(So(t)||Qa(t))Li(t,Ms(t),e);else for(var n in t)ze.call(t,n)&&rr(e,n,t[n])})),Ss=Pi((function(e,t){Li(t,js(t),e)})),Es=Pi((function(e,t,n,r){Li(t,js(t),e,r)})),Cs=Pi((function(e,t,n,r){Li(t,Ms(t),e,r)})),Ts=io(cr);var As=Qr((function(e,t){e=Ee(e);var n=-1,i=t.length,o=i>2?t[2]:r;for(o&&ko(t[0],t[1],o)&&(i=1);++n<i;)for(var a=t[n],s=js(a),c=-1,l=s.length;++c<l;){var u=s[c],f=e[u];(f===r||qa(f,Oe[u])&&!ze.call(e,u))&&(e[u]=a[u])}return e})),Rs=Qr((function(e){return e.push(r,to),_t(Ws,r,e)}));function Ls(e,t,n){var i=null==e?r:Nr(e,t);return i===r?n:i}function Os(e,t){return null!=e&&yo(e,t,Ar)}var Ps=Hi((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=Ue.call(t)),e[t]=n}),ac(lc)),Ds=Hi((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=Ue.call(t)),ze.call(e,t)?e[t].push(n):e[t]=[n]}),uo),zs=Qr(Lr);function Ms(e){return Qa(e)?Qn(e):jr(e)}function js(e){return Qa(e)?Qn(e,!0):Ur(e)}var Us=Pi((function(e,t,n){Vr(e,t,n)})),Ws=Pi((function(e,t,n,r){Vr(e,t,n,r)})),Bs=io((function(e,t){var n={};if(null==e)return n;var r=!1;t=Rt(t,(function(t){return t=xi(t,e),r||(r=t.length>1),t})),Li(e,ao(e),n),r&&(n=ur(n,7,no));for(var i=t.length;i--;)pi(n,t[i]);return n}));var Fs=io((function(e,t){return null==e?{}:function(e,t){return Xr(e,t,(function(t,n){return Os(e,n)}))}(e,t)}));function Hs(e,t){if(null==e)return{};var n=Rt(ao(e),(function(e){return[e]}));return t=uo(t),Xr(e,n,(function(e,n){return t(e,n[0])}))}var Vs=Qi(Ms),$s=Qi(js);function qs(e){return null==e?[]:Jt(e,Ms(e))}var Xs=ji((function(e,t,n){return t=t.toLowerCase(),e+(n?Ks(t):t)}));function Ks(e){return nc(Is(e).toLowerCase())}function Gs(e){return(e=Is(e))&&e.replace(we,tn).replace(Ye,"")}var Js=ji((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()})),Ys=ji((function(e,t,n){return e+(n?" ":"")+t.toLowerCase()})),Qs=Mi("toLowerCase");var Zs=ji((function(e,t,n){return e+(n?"_":"")+t.toLowerCase()}));var ec=ji((function(e,t,n){return e+(n?" ":"")+nc(t)}));var tc=ji((function(e,t,n){return e+(n?" ":"")+t.toUpperCase()})),nc=Mi("toUpperCase");function rc(e,t,n){return e=Is(e),(t=n?r:t)===r?function(e){return tt.test(e)}(e)?function(e){return e.match(Ze)||[]}(e):function(e){return e.match(ue)||[]}(e):e.match(t)||[]}var ic=Qr((function(e,t){try{return _t(e,r,t)}catch(e){return ns(e)?e:new Ie(e)}})),oc=io((function(e,t){return Nt(t,(function(t){t=Ho(t),sr(e,t,Da(e[t],e))})),e}));function ac(e){return function(){return e}}var sc=Bi(),cc=Bi(!0);function lc(e){return e}function uc(e){return Mr("function"==typeof e?e:ur(e,1))}var fc=Qr((function(e,t){return function(n){return Lr(n,e,t)}})),dc=Qr((function(e,t){return function(n){return Lr(e,n,t)}}));function pc(e,t,n){var r=Ms(t),i=Ir(t,r);null!=n||as(t)&&(i.length||!r.length)||(n=t,t=e,e=this,i=Ir(t,Ms(t)));var o=!(as(n)&&"chain"in n&&!n.chain),a=rs(e);return Nt(i,(function(n){var r=t[n];e[n]=r,a&&(e.prototype[n]=function(){var t=this.__chain__;if(o||t){var n=e(this.__wrapped__),i=n.__actions__=Ri(this.__actions__);return i.push({func:r,args:arguments,thisArg:e}),n.__chain__=t,n}return r.apply(e,Lt([this.value()],arguments))})})),e}function hc(){}var mc=$i(Rt),gc=$i(Et),vc=$i(Dt);function yc(e){return _o(e)?Ht(Ho(e)):function(e){return function(t){return Nr(t,e)}}(e)}var bc=Xi(),wc=Xi(!0);function xc(){return[]}function kc(){return!1}var _c=Vi((function(e,t){return e+t}),0),Ic=Ji("ceil"),Nc=Vi((function(e,t){return e/t}),1),Sc=Ji("floor");var Ec,Cc=Vi((function(e,t){return e*t}),1),Tc=Ji("round"),Ac=Vi((function(e,t){return e-t}),0);return Fn.after=function(e,t){if("function"!=typeof t)throw new Ae(i);return e=ws(e),function(){if(--e<1)return t.apply(this,arguments)}},Fn.ary=Oa,Fn.assign=Ns,Fn.assignIn=Ss,Fn.assignInWith=Es,Fn.assignWith=Cs,Fn.at=Ts,Fn.before=Pa,Fn.bind=Da,Fn.bindAll=oc,Fn.bindKey=za,Fn.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Ja(e)?e:[e]},Fn.chain=ya,Fn.chunk=function(e,t,n){t=(n?ko(e,t,n):t===r)?1:wn(ws(t),0);var i=null==e?0:e.length;if(!i||t<1)return[];for(var o=0,a=0,s=ae(gt(i/t));o<i;)s[a++]=oi(e,o,o+=t);return s},Fn.compact=function(e){for(var t=-1,n=null==e?0:e.length,r=0,i=[];++t<n;){var o=e[t];o&&(i[r++]=o)}return i},Fn.concat=function(){var e=arguments.length;if(!e)return[];for(var t=ae(e-1),n=arguments[0],r=e;r--;)t[r-1]=arguments[r];return Lt(Ja(n)?Ri(n):[n],br(t,1))},Fn.cond=function(e){var t=null==e?0:e.length,n=uo();return e=t?Rt(e,(function(e){if("function"!=typeof e[1])throw new Ae(i);return[n(e[0]),e[1]]})):[],Qr((function(n){for(var r=-1;++r<t;){var i=e[r];if(_t(i[0],this,n))return _t(i[1],this,n)}}))},Fn.conforms=function(e){return function(e){var t=Ms(e);return function(n){return fr(n,e,t)}}(ur(e,1))},Fn.constant=ac,Fn.countBy=xa,Fn.create=function(e,t){var n=Hn(e);return null==t?n:ar(n,t)},Fn.curry=function e(t,n,i){var o=Zi(t,8,r,r,r,r,r,n=i?r:n);return o.placeholder=e.placeholder,o},Fn.curryRight=function e(t,n,i){var o=Zi(t,s,r,r,r,r,r,n=i?r:n);return o.placeholder=e.placeholder,o},Fn.debounce=Ma,Fn.defaults=As,Fn.defaultsDeep=Rs,Fn.defer=ja,Fn.delay=Ua,Fn.difference=qo,Fn.differenceBy=Xo,Fn.differenceWith=Ko,Fn.drop=function(e,t,n){var i=null==e?0:e.length;return i?oi(e,(t=n||t===r?1:ws(t))<0?0:t,i):[]},Fn.dropRight=function(e,t,n){var i=null==e?0:e.length;return i?oi(e,0,(t=i-(t=n||t===r?1:ws(t)))<0?0:t):[]},Fn.dropRightWhile=function(e,t){return e&&e.length?mi(e,uo(t,3),!0,!0):[]},Fn.dropWhile=function(e,t){return e&&e.length?mi(e,uo(t,3),!0):[]},Fn.fill=function(e,t,n,i){var o=null==e?0:e.length;return o?(n&&"number"!=typeof n&&ko(e,t,n)&&(n=0,i=o),function(e,t,n,i){var o=e.length;for((n=ws(n))<0&&(n=-n>o?0:o+n),(i=i===r||i>o?o:ws(i))<0&&(i+=o),i=n>i?0:xs(i);n<i;)e[n++]=t;return e}(e,t,n,i)):[]},Fn.filter=function(e,t){return(Ja(e)?Ct:yr)(e,uo(t,3))},Fn.flatMap=function(e,t){return br(Ta(e,t),1)},Fn.flatMapDeep=function(e,t){return br(Ta(e,t),d)},Fn.flatMapDepth=function(e,t,n){return n=n===r?1:ws(n),br(Ta(e,t),n)},Fn.flatten=Yo,Fn.flattenDeep=function(e){return(null==e?0:e.length)?br(e,d):[]},Fn.flattenDepth=function(e,t){return(null==e?0:e.length)?br(e,t=t===r?1:ws(t)):[]},Fn.flip=function(e){return Zi(e,512)},Fn.flow=sc,Fn.flowRight=cc,Fn.fromPairs=function(e){for(var t=-1,n=null==e?0:e.length,r={};++t<n;){var i=e[t];r[i[0]]=i[1]}return r},Fn.functions=function(e){return null==e?[]:Ir(e,Ms(e))},Fn.functionsIn=function(e){return null==e?[]:Ir(e,js(e))},Fn.groupBy=Sa,Fn.initial=function(e){return(null==e?0:e.length)?oi(e,0,-1):[]},Fn.intersection=Zo,Fn.intersectionBy=ea,Fn.intersectionWith=ta,Fn.invert=Ps,Fn.invertBy=Ds,Fn.invokeMap=Ea,Fn.iteratee=uc,Fn.keyBy=Ca,Fn.keys=Ms,Fn.keysIn=js,Fn.map=Ta,Fn.mapKeys=function(e,t){var n={};return t=uo(t,3),kr(e,(function(e,r,i){sr(n,t(e,r,i),e)})),n},Fn.mapValues=function(e,t){var n={};return t=uo(t,3),kr(e,(function(e,r,i){sr(n,r,t(e,r,i))})),n},Fn.matches=function(e){return Fr(ur(e,1))},Fn.matchesProperty=function(e,t){return Hr(e,ur(t,1))},Fn.memoize=Wa,Fn.merge=Us,Fn.mergeWith=Ws,Fn.method=fc,Fn.methodOf=dc,Fn.mixin=pc,Fn.negate=Ba,Fn.nthArg=function(e){return e=ws(e),Qr((function(t){return $r(t,e)}))},Fn.omit=Bs,Fn.omitBy=function(e,t){return Hs(e,Ba(uo(t)))},Fn.once=function(e){return Pa(2,e)},Fn.orderBy=function(e,t,n,i){return null==e?[]:(Ja(t)||(t=null==t?[]:[t]),Ja(n=i?r:n)||(n=null==n?[]:[n]),qr(e,t,n))},Fn.over=mc,Fn.overArgs=Fa,Fn.overEvery=gc,Fn.overSome=vc,Fn.partial=Ha,Fn.partialRight=Va,Fn.partition=Aa,Fn.pick=Fs,Fn.pickBy=Hs,Fn.property=yc,Fn.propertyOf=function(e){return function(t){return null==e?r:Nr(e,t)}},Fn.pull=ra,Fn.pullAll=ia,Fn.pullAllBy=function(e,t,n){return e&&e.length&&t&&t.length?Kr(e,t,uo(n,2)):e},Fn.pullAllWith=function(e,t,n){return e&&e.length&&t&&t.length?Kr(e,t,r,n):e},Fn.pullAt=oa,Fn.range=bc,Fn.rangeRight=wc,Fn.rearg=$a,Fn.reject=function(e,t){return(Ja(e)?Ct:yr)(e,Ba(uo(t,3)))},Fn.remove=function(e,t){var n=[];if(!e||!e.length)return n;var r=-1,i=[],o=e.length;for(t=uo(t,3);++r<o;){var a=e[r];t(a,r,e)&&(n.push(a),i.push(r))}return Gr(e,i),n},Fn.rest=function(e,t){if("function"!=typeof e)throw new Ae(i);return Qr(e,t=t===r?t:ws(t))},Fn.reverse=aa,Fn.sampleSize=function(e,t,n){return t=(n?ko(e,t,n):t===r)?1:ws(t),(Ja(e)?er:ei)(e,t)},Fn.set=function(e,t,n){return null==e?e:ti(e,t,n)},Fn.setWith=function(e,t,n,i){return i="function"==typeof i?i:r,null==e?e:ti(e,t,n,i)},Fn.shuffle=function(e){return(Ja(e)?tr:ii)(e)},Fn.slice=function(e,t,n){var i=null==e?0:e.length;return i?(n&&"number"!=typeof n&&ko(e,t,n)?(t=0,n=i):(t=null==t?0:ws(t),n=n===r?i:ws(n)),oi(e,t,n)):[]},Fn.sortBy=Ra,Fn.sortedUniq=function(e){return e&&e.length?li(e):[]},Fn.sortedUniqBy=function(e,t){return e&&e.length?li(e,uo(t,2)):[]},Fn.split=function(e,t,n){return n&&"number"!=typeof n&&ko(e,t,n)&&(t=n=r),(n=n===r?m:n>>>0)?(e=Is(e))&&("string"==typeof t||null!=t&&!fs(t))&&!(t=fi(t))&&on(e)?_i(dn(e),0,n):e.split(t,n):[]},Fn.spread=function(e,t){if("function"!=typeof e)throw new Ae(i);return t=null==t?0:wn(ws(t),0),Qr((function(n){var r=n[t],i=_i(n,0,t);return r&&Lt(i,r),_t(e,this,i)}))},Fn.tail=function(e){var t=null==e?0:e.length;return t?oi(e,1,t):[]},Fn.take=function(e,t,n){return e&&e.length?oi(e,0,(t=n||t===r?1:ws(t))<0?0:t):[]},Fn.takeRight=function(e,t,n){var i=null==e?0:e.length;return i?oi(e,(t=i-(t=n||t===r?1:ws(t)))<0?0:t,i):[]},Fn.takeRightWhile=function(e,t){return e&&e.length?mi(e,uo(t,3),!1,!0):[]},Fn.takeWhile=function(e,t){return e&&e.length?mi(e,uo(t,3)):[]},Fn.tap=function(e,t){return t(e),e},Fn.throttle=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new Ae(i);return as(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),Ma(e,t,{leading:r,maxWait:t,trailing:o})},Fn.thru=ba,Fn.toArray=ys,Fn.toPairs=Vs,Fn.toPairsIn=$s,Fn.toPath=function(e){return Ja(e)?Rt(e,Ho):hs(e)?[e]:Ri(Fo(Is(e)))},Fn.toPlainObject=_s,Fn.transform=function(e,t,n){var r=Ja(e),i=r||es(e)||ms(e);if(t=uo(t,4),null==n){var o=e&&e.constructor;n=i?r?new o:[]:as(e)&&rs(o)?Hn(Xe(e)):{}}return(i?Nt:kr)(e,(function(e,r,i){return t(n,e,r,i)})),n},Fn.unary=function(e){return Oa(e,1)},Fn.union=sa,Fn.unionBy=ca,Fn.unionWith=la,Fn.uniq=function(e){return e&&e.length?di(e):[]},Fn.uniqBy=function(e,t){return e&&e.length?di(e,uo(t,2)):[]},Fn.uniqWith=function(e,t){return t="function"==typeof t?t:r,e&&e.length?di(e,r,t):[]},Fn.unset=function(e,t){return null==e||pi(e,t)},Fn.unzip=ua,Fn.unzipWith=fa,Fn.update=function(e,t,n){return null==e?e:hi(e,t,wi(n))},Fn.updateWith=function(e,t,n,i){return i="function"==typeof i?i:r,null==e?e:hi(e,t,wi(n),i)},Fn.values=qs,Fn.valuesIn=function(e){return null==e?[]:Jt(e,js(e))},Fn.without=da,Fn.words=rc,Fn.wrap=function(e,t){return Ha(wi(t),e)},Fn.xor=pa,Fn.xorBy=ha,Fn.xorWith=ma,Fn.zip=ga,Fn.zipObject=function(e,t){return yi(e||[],t||[],rr)},Fn.zipObjectDeep=function(e,t){return yi(e||[],t||[],ti)},Fn.zipWith=va,Fn.entries=Vs,Fn.entriesIn=$s,Fn.extend=Ss,Fn.extendWith=Es,pc(Fn,Fn),Fn.add=_c,Fn.attempt=ic,Fn.camelCase=Xs,Fn.capitalize=Ks,Fn.ceil=Ic,Fn.clamp=function(e,t,n){return n===r&&(n=t,t=r),n!==r&&(n=(n=ks(n))==n?n:0),t!==r&&(t=(t=ks(t))==t?t:0),lr(ks(e),t,n)},Fn.clone=function(e){return ur(e,4)},Fn.cloneDeep=function(e){return ur(e,5)},Fn.cloneDeepWith=function(e,t){return ur(e,5,t="function"==typeof t?t:r)},Fn.cloneWith=function(e,t){return ur(e,4,t="function"==typeof t?t:r)},Fn.conformsTo=function(e,t){return null==t||fr(e,t,Ms(t))},Fn.deburr=Gs,Fn.defaultTo=function(e,t){return null==e||e!=e?t:e},Fn.divide=Nc,Fn.endsWith=function(e,t,n){e=Is(e),t=fi(t);var i=e.length,o=n=n===r?i:lr(ws(n),0,i);return(n-=t.length)>=0&&e.slice(n,o)==t},Fn.eq=qa,Fn.escape=function(e){return(e=Is(e))&&J.test(e)?e.replace(K,nn):e},Fn.escapeRegExp=function(e){return(e=Is(e))&&ie.test(e)?e.replace(re,"\\$&"):e},Fn.every=function(e,t,n){var i=Ja(e)?Et:gr;return n&&ko(e,t,n)&&(t=r),i(e,uo(t,3))},Fn.find=ka,Fn.findIndex=Go,Fn.findKey=function(e,t){return Mt(e,uo(t,3),kr)},Fn.findLast=_a,Fn.findLastIndex=Jo,Fn.findLastKey=function(e,t){return Mt(e,uo(t,3),_r)},Fn.floor=Sc,Fn.forEach=Ia,Fn.forEachRight=Na,Fn.forIn=function(e,t){return null==e?e:wr(e,uo(t,3),js)},Fn.forInRight=function(e,t){return null==e?e:xr(e,uo(t,3),js)},Fn.forOwn=function(e,t){return e&&kr(e,uo(t,3))},Fn.forOwnRight=function(e,t){return e&&_r(e,uo(t,3))},Fn.get=Ls,Fn.gt=Xa,Fn.gte=Ka,Fn.has=function(e,t){return null!=e&&yo(e,t,Tr)},Fn.hasIn=Os,Fn.head=Qo,Fn.identity=lc,Fn.includes=function(e,t,n,r){e=Qa(e)?e:qs(e),n=n&&!r?ws(n):0;var i=e.length;return n<0&&(n=wn(i+n,0)),ps(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&Ut(e,t,n)>-1},Fn.indexOf=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:ws(n);return i<0&&(i=wn(r+i,0)),Ut(e,t,i)},Fn.inRange=function(e,t,n){return t=bs(t),n===r?(n=t,t=0):n=bs(n),function(e,t,n){return e>=xn(t,n)&&e<wn(t,n)}(e=ks(e),t,n)},Fn.invoke=zs,Fn.isArguments=Ga,Fn.isArray=Ja,Fn.isArrayBuffer=Ya,Fn.isArrayLike=Qa,Fn.isArrayLikeObject=Za,Fn.isBoolean=function(e){return!0===e||!1===e||ss(e)&&Er(e)==b},Fn.isBuffer=es,Fn.isDate=ts,Fn.isElement=function(e){return ss(e)&&1===e.nodeType&&!us(e)},Fn.isEmpty=function(e){if(null==e)return!0;if(Qa(e)&&(Ja(e)||"string"==typeof e||"function"==typeof e.splice||es(e)||ms(e)||Ga(e)))return!e.length;var t=vo(e);if(t==I||t==T)return!e.size;if(So(e))return!jr(e).length;for(var n in e)if(ze.call(e,n))return!1;return!0},Fn.isEqual=function(e,t){return Pr(e,t)},Fn.isEqualWith=function(e,t,n){var i=(n="function"==typeof n?n:r)?n(e,t):r;return i===r?Pr(e,t,r,n):!!i},Fn.isError=ns,Fn.isFinite=function(e){return"number"==typeof e&&vn(e)},Fn.isFunction=rs,Fn.isInteger=is,Fn.isLength=os,Fn.isMap=cs,Fn.isMatch=function(e,t){return e===t||Dr(e,t,po(t))},Fn.isMatchWith=function(e,t,n){return n="function"==typeof n?n:r,Dr(e,t,po(t),n)},Fn.isNaN=function(e){return ls(e)&&e!=+e},Fn.isNative=function(e){if(No(e))throw new Ie("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return zr(e)},Fn.isNil=function(e){return null==e},Fn.isNull=function(e){return null===e},Fn.isNumber=ls,Fn.isObject=as,Fn.isObjectLike=ss,Fn.isPlainObject=us,Fn.isRegExp=fs,Fn.isSafeInteger=function(e){return is(e)&&e>=-9007199254740991&&e<=p},Fn.isSet=ds,Fn.isString=ps,Fn.isSymbol=hs,Fn.isTypedArray=ms,Fn.isUndefined=function(e){return e===r},Fn.isWeakMap=function(e){return ss(e)&&vo(e)==L},Fn.isWeakSet=function(e){return ss(e)&&"[object WeakSet]"==Er(e)},Fn.join=function(e,t){return null==e?"":yn.call(e,t)},Fn.kebabCase=Js,Fn.last=na,Fn.lastIndexOf=function(e,t,n){var i=null==e?0:e.length;if(!i)return-1;var o=i;return n!==r&&(o=(o=ws(n))<0?wn(i+o,0):xn(o,i-1)),t==t?function(e,t,n){for(var r=n+1;r--;)if(e[r]===t)return r;return r}(e,t,o):jt(e,Bt,o,!0)},Fn.lowerCase=Ys,Fn.lowerFirst=Qs,Fn.lt=gs,Fn.lte=vs,Fn.max=function(e){return e&&e.length?vr(e,lc,Cr):r},Fn.maxBy=function(e,t){return e&&e.length?vr(e,uo(t,2),Cr):r},Fn.mean=function(e){return Ft(e,lc)},Fn.meanBy=function(e,t){return Ft(e,uo(t,2))},Fn.min=function(e){return e&&e.length?vr(e,lc,Wr):r},Fn.minBy=function(e,t){return e&&e.length?vr(e,uo(t,2),Wr):r},Fn.stubArray=xc,Fn.stubFalse=kc,Fn.stubObject=function(){return{}},Fn.stubString=function(){return""},Fn.stubTrue=function(){return!0},Fn.multiply=Cc,Fn.nth=function(e,t){return e&&e.length?$r(e,ws(t)):r},Fn.noConflict=function(){return ft._===this&&(ft._=Be),this},Fn.noop=hc,Fn.now=La,Fn.pad=function(e,t,n){e=Is(e);var r=(t=ws(t))?fn(e):0;if(!t||r>=t)return e;var i=(t-r)/2;return qi(zt(i),n)+e+qi(gt(i),n)},Fn.padEnd=function(e,t,n){e=Is(e);var r=(t=ws(t))?fn(e):0;return t&&r<t?e+qi(t-r,n):e},Fn.padStart=function(e,t,n){e=Is(e);var r=(t=ws(t))?fn(e):0;return t&&r<t?qi(t-r,n)+e:e},Fn.parseInt=function(e,t,n){return n||null==t?t=0:t&&(t=+t),_n(Is(e).replace(oe,""),t||0)},Fn.random=function(e,t,n){if(n&&"boolean"!=typeof n&&ko(e,t,n)&&(t=n=r),n===r&&("boolean"==typeof t?(n=t,t=r):"boolean"==typeof e&&(n=e,e=r)),e===r&&t===r?(e=0,t=1):(e=bs(e),t===r?(t=e,e=0):t=bs(t)),e>t){var i=e;e=t,t=i}if(n||e%1||t%1){var o=In();return xn(e+o*(t-e+st("1e-"+((o+"").length-1))),t)}return Jr(e,t)},Fn.reduce=function(e,t,n){var r=Ja(e)?Ot:$t,i=arguments.length<3;return r(e,uo(t,4),n,i,hr)},Fn.reduceRight=function(e,t,n){var r=Ja(e)?Pt:$t,i=arguments.length<3;return r(e,uo(t,4),n,i,mr)},Fn.repeat=function(e,t,n){return t=(n?ko(e,t,n):t===r)?1:ws(t),Yr(Is(e),t)},Fn.replace=function(){var e=arguments,t=Is(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Fn.result=function(e,t,n){var i=-1,o=(t=xi(t,e)).length;for(o||(o=1,e=r);++i<o;){var a=null==e?r:e[Ho(t[i])];a===r&&(i=o,a=n),e=rs(a)?a.call(e):a}return e},Fn.round=Tc,Fn.runInContext=e,Fn.sample=function(e){return(Ja(e)?Zn:Zr)(e)},Fn.size=function(e){if(null==e)return 0;if(Qa(e))return ps(e)?fn(e):e.length;var t=vo(e);return t==I||t==T?e.size:jr(e).length},Fn.snakeCase=Zs,Fn.some=function(e,t,n){var i=Ja(e)?Dt:ai;return n&&ko(e,t,n)&&(t=r),i(e,uo(t,3))},Fn.sortedIndex=function(e,t){return si(e,t)},Fn.sortedIndexBy=function(e,t,n){return ci(e,t,uo(n,2))},Fn.sortedIndexOf=function(e,t){var n=null==e?0:e.length;if(n){var r=si(e,t);if(r<n&&qa(e[r],t))return r}return-1},Fn.sortedLastIndex=function(e,t){return si(e,t,!0)},Fn.sortedLastIndexBy=function(e,t,n){return ci(e,t,uo(n,2),!0)},Fn.sortedLastIndexOf=function(e,t){if(null==e?0:e.length){var n=si(e,t,!0)-1;if(qa(e[n],t))return n}return-1},Fn.startCase=ec,Fn.startsWith=function(e,t,n){return e=Is(e),n=null==n?0:lr(ws(n),0,e.length),t=fi(t),e.slice(n,n+t.length)==t},Fn.subtract=Ac,Fn.sum=function(e){return e&&e.length?qt(e,lc):0},Fn.sumBy=function(e,t){return e&&e.length?qt(e,uo(t,2)):0},Fn.template=function(e,t,n){var i=Fn.templateSettings;n&&ko(e,t,n)&&(t=r),e=Is(e),t=Es({},t,i,eo);var o,a,s=Es({},t.imports,i.imports,eo),c=Ms(s),l=Jt(s,c),u=0,f=t.interpolate||xe,d="__p += '",p=Ce((t.escape||xe).source+"|"+f.source+"|"+(f===Z?pe:xe).source+"|"+(t.evaluate||xe).source+"|$","g"),h="//# sourceURL="+(ze.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++rt+"]")+"\n";e.replace(p,(function(t,n,r,i,s,c){return r||(r=i),d+=e.slice(u,c).replace(ke,rn),n&&(o=!0,d+="' +\n__e("+n+") +\n'"),s&&(a=!0,d+="';\n"+s+";\n__p += '"),r&&(d+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),u=c+t.length,t})),d+="';\n";var m=ze.call(t,"variable")&&t.variable;if(m){if(fe.test(m))throw new Ie("Invalid `variable` option passed into `_.template`")}else d="with (obj) {\n"+d+"\n}\n";d=(a?d.replace(V,""):d).replace($,"$1").replace(q,"$1;"),d="function("+(m||"obj")+") {\n"+(m?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+d+"return __p\n}";var g=ic((function(){return Ne(c,h+"return "+d).apply(r,l)}));if(g.source=d,ns(g))throw g;return g},Fn.times=function(e,t){if((e=ws(e))<1||e>p)return[];var n=m,r=xn(e,m);t=uo(t),e-=m;for(var i=Xt(r,t);++n<e;)t(n);return i},Fn.toFinite=bs,Fn.toInteger=ws,Fn.toLength=xs,Fn.toLower=function(e){return Is(e).toLowerCase()},Fn.toNumber=ks,Fn.toSafeInteger=function(e){return e?lr(ws(e),-9007199254740991,p):0===e?e:0},Fn.toString=Is,Fn.toUpper=function(e){return Is(e).toUpperCase()},Fn.trim=function(e,t,n){if((e=Is(e))&&(n||t===r))return Kt(e);if(!e||!(t=fi(t)))return e;var i=dn(e),o=dn(t);return _i(i,Qt(i,o),Zt(i,o)+1).join("")},Fn.trimEnd=function(e,t,n){if((e=Is(e))&&(n||t===r))return e.slice(0,pn(e)+1);if(!e||!(t=fi(t)))return e;var i=dn(e);return _i(i,0,Zt(i,dn(t))+1).join("")},Fn.trimStart=function(e,t,n){if((e=Is(e))&&(n||t===r))return e.replace(oe,"");if(!e||!(t=fi(t)))return e;var i=dn(e);return _i(i,Qt(i,dn(t))).join("")},Fn.truncate=function(e,t){var n=30,i="...";if(as(t)){var o="separator"in t?t.separator:o;n="length"in t?ws(t.length):n,i="omission"in t?fi(t.omission):i}var a=(e=Is(e)).length;if(on(e)){var s=dn(e);a=s.length}if(n>=a)return e;var c=n-fn(i);if(c<1)return i;var l=s?_i(s,0,c).join(""):e.slice(0,c);if(o===r)return l+i;if(s&&(c+=l.length-c),fs(o)){if(e.slice(c).search(o)){var u,f=l;for(o.global||(o=Ce(o.source,Is(he.exec(o))+"g")),o.lastIndex=0;u=o.exec(f);)var d=u.index;l=l.slice(0,d===r?c:d)}}else if(e.indexOf(fi(o),c)!=c){var p=l.lastIndexOf(o);p>-1&&(l=l.slice(0,p))}return l+i},Fn.unescape=function(e){return(e=Is(e))&&G.test(e)?e.replace(X,hn):e},Fn.uniqueId=function(e){var t=++Me;return Is(e)+t},Fn.upperCase=tc,Fn.upperFirst=nc,Fn.each=Ia,Fn.eachRight=Na,Fn.first=Qo,pc(Fn,(Ec={},kr(Fn,(function(e,t){ze.call(Fn.prototype,t)||(Ec[t]=e)})),Ec),{chain:!1}),Fn.VERSION="4.17.21",Nt(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Fn[e].placeholder=Fn})),Nt(["drop","take"],(function(e,t){qn.prototype[e]=function(n){n=n===r?1:wn(ws(n),0);var i=this.__filtered__&&!t?new qn(this):this.clone();return i.__filtered__?i.__takeCount__=xn(n,i.__takeCount__):i.__views__.push({size:xn(n,m),type:e+(i.__dir__<0?"Right":"")}),i},qn.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}})),Nt(["filter","map","takeWhile"],(function(e,t){var n=t+1,r=1==n||3==n;qn.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:uo(e,3),type:n}),t.__filtered__=t.__filtered__||r,t}})),Nt(["head","last"],(function(e,t){var n="take"+(t?"Right":"");qn.prototype[e]=function(){return this[n](1).value()[0]}})),Nt(["initial","tail"],(function(e,t){var n="drop"+(t?"":"Right");qn.prototype[e]=function(){return this.__filtered__?new qn(this):this[n](1)}})),qn.prototype.compact=function(){return this.filter(lc)},qn.prototype.find=function(e){return this.filter(e).head()},qn.prototype.findLast=function(e){return this.reverse().find(e)},qn.prototype.invokeMap=Qr((function(e,t){return"function"==typeof e?new qn(this):this.map((function(n){return Lr(n,e,t)}))})),qn.prototype.reject=function(e){return this.filter(Ba(uo(e)))},qn.prototype.slice=function(e,t){e=ws(e);var n=this;return n.__filtered__&&(e>0||t<0)?new qn(n):(e<0?n=n.takeRight(-e):e&&(n=n.drop(e)),t!==r&&(n=(t=ws(t))<0?n.dropRight(-t):n.take(t-e)),n)},qn.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},qn.prototype.toArray=function(){return this.take(m)},kr(qn.prototype,(function(e,t){var n=/^(?:filter|find|map|reject)|While$/.test(t),i=/^(?:head|last)$/.test(t),o=Fn[i?"take"+("last"==t?"Right":""):t],a=i||/^find/.test(t);o&&(Fn.prototype[t]=function(){var t=this.__wrapped__,s=i?[1]:arguments,c=t instanceof qn,l=s[0],u=c||Ja(t),f=function(e){var t=o.apply(Fn,Lt([e],s));return i&&d?t[0]:t};u&&n&&"function"==typeof l&&1!=l.length&&(c=u=!1);var d=this.__chain__,p=!!this.__actions__.length,h=a&&!d,m=c&&!p;if(!a&&u){t=m?t:new qn(this);var g=e.apply(t,s);return g.__actions__.push({func:ba,args:[f],thisArg:r}),new $n(g,d)}return h&&m?e.apply(this,s):(g=this.thru(f),h?i?g.value()[0]:g.value():g)})})),Nt(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Re[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",r=/^(?:pop|shift)$/.test(e);Fn.prototype[e]=function(){var e=arguments;if(r&&!this.__chain__){var i=this.value();return t.apply(Ja(i)?i:[],e)}return this[n]((function(n){return t.apply(Ja(n)?n:[],e)}))}})),kr(qn.prototype,(function(e,t){var n=Fn[t];if(n){var r=n.name+"";ze.call(On,r)||(On[r]=[]),On[r].push({name:t,func:n})}})),On[Fi(r,2).name]=[{name:"wrapper",func:r}],qn.prototype.clone=function(){var e=new qn(this.__wrapped__);return e.__actions__=Ri(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ri(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ri(this.__views__),e},qn.prototype.reverse=function(){if(this.__filtered__){var e=new qn(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},qn.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,n=Ja(e),r=t<0,i=n?e.length:0,o=function(e,t,n){var r=-1,i=n.length;for(;++r<i;){var o=n[r],a=o.size;switch(o.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=xn(t,e+a);break;case"takeRight":e=wn(e,t-a)}}return{start:e,end:t}}(0,i,this.__views__),a=o.start,s=o.end,c=s-a,l=r?s:a-1,u=this.__iteratees__,f=u.length,d=0,p=xn(c,this.__takeCount__);if(!n||!r&&i==c&&p==c)return gi(e,this.__actions__);var h=[];e:for(;c--&&d<p;){for(var m=-1,g=e[l+=t];++m<f;){var v=u[m],y=v.iteratee,b=v.type,w=y(g);if(2==b)g=w;else if(!w){if(1==b)continue e;break e}}h[d++]=g}return h},Fn.prototype.at=wa,Fn.prototype.chain=function(){return ya(this)},Fn.prototype.commit=function(){return new $n(this.value(),this.__chain__)},Fn.prototype.next=function(){this.__values__===r&&(this.__values__=ys(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?r:this.__values__[this.__index__++]}},Fn.prototype.plant=function(e){for(var t,n=this;n instanceof Vn;){var i=$o(n);i.__index__=0,i.__values__=r,t?o.__wrapped__=i:t=i;var o=i;n=n.__wrapped__}return o.__wrapped__=e,t},Fn.prototype.reverse=function(){var e=this.__wrapped__;if(e instanceof qn){var t=e;return this.__actions__.length&&(t=new qn(this)),(t=t.reverse()).__actions__.push({func:ba,args:[aa],thisArg:r}),new $n(t,this.__chain__)}return this.thru(aa)},Fn.prototype.toJSON=Fn.prototype.valueOf=Fn.prototype.value=function(){return gi(this.__wrapped__,this.__actions__)},Fn.prototype.first=Fn.prototype.head,at&&(Fn.prototype[at]=function(){return this}),Fn}();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(ft._=mn,define((function(){return mn}))):pt?((pt.exports=mn)._=mn,dt._=mn):ft._=mn}).call(this)})),i.register("4TNnu",(function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,l=[],u=!1,f=-1;function d(){u&&c&&(u=!1,c.length?l=c.concat(l):f=-1,l.length&&p())}function p(){if(!u){var e=s(d);u=!0;for(var t=l.length;t;){for(c=l,l=[];++f<t;)c&&c[f].run();f=-1,t=l.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||u||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}}));document.querySelectorAll(".cards-home-movie-image").forEach((e=>{const t=window.getComputedStyle(e).backgroundColor,n=chroma(t).luminance(),r=e.querySelector(".text-element");r.style.color=n<.5?"black":"white"}));var o,a,s=i("kEUo3"),c={};o=void 0===e?"undefined"==typeof window?c:window:e,a=function(e){if(void 0===e&&void 0===e.document)return!1;var t,n,r,i,o,a="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",s='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',c="Success",l="Failure",u="Warning",f="Info",d={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},p="Success",h="Failure",m="Warning",g="Info",v={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},y="Show",b="Ask",w="Prompt",x={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},k="Standard",_="Hourglass",I="Circle",N="Arrows",S="Dots",E="Pulse",C="Custom",T="Notiflix",A={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},R="Standard",L="Hourglass",O="Circle",P="Arrows",D="Dots",z="Pulse",M={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},j=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+a)},U=function(e){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+e+a)},W=function(t){return t||(t="head"),null!==e.document[t]||(j('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},B=function(t,n){if(!W("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var r=e.document.createElement("style");r.id=n,r.innerHTML=t(),e.document.head.appendChild(r)}},F=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var r=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=t&&"[object Object]"===Object.prototype.toString.call(n[r])?F(e[r],n[r]):n[r])};n<arguments.length;n++)r(arguments[n]);return e},H=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},V=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},$=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},q=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},X=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},K=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},G=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},J=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},Y=0,Q=function(n,r,i,o){if(!W("body"))return!1;t||ce.Notify.init({});var a=F(!0,t,{});if("object"==typeof i&&!Array.isArray(i)||"object"==typeof o&&!Array.isArray(o)){var p={};"object"==typeof i?p=i:"object"==typeof o&&(p=o),t=F(!0,t,p)}var h=t[n.toLocaleLowerCase("en")];Y++,"string"!=typeof r&&(r="Notiflix "+n),t.plainText&&(r=H(r)),!t.plainText&&r.length>t.messageMaxLength&&(t=F(!0,t,{closeButton:!0,messageMaxLength:150}),r='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),r.length>t.messageMaxLength&&(r=r.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(h.fontAwesomeIconColor=h.background),t.cssAnimation||(t.cssAnimationDuration=0);var m=e.document.getElementById(d.wrapID)||e.document.createElement("div");if(m.id=d.wrapID,m.style.width=t.width,m.style.zIndex=t.zindex,m.style.opacity=t.opacity,"center-center"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):"center-top"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.top=t.distance,m.style.bottom="auto",m.style.margin="auto"):"center-bottom"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.margin="auto"):"right-bottom"===t.position?(m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.left="auto"):"left-top"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right="auto",m.style.bottom="auto"):"left-bottom"===t.position?(m.style.left=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=t.distance,m.style.top=t.distance,m.style.left="auto",m.style.bottom="auto"),t.backOverlay){var g=e.document.getElementById(d.overlayID)||e.document.createElement("div");g.id=d.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=t.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=h.backOverlayColor||t.backOverlayColor,g.className=t.cssAnimation?"nx-with-animation":"",g.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(d.overlayID)||e.document.body.appendChild(g)}e.document.getElementById(d.wrapID)||e.document.body.appendChild(m);var v=e.document.createElement("div");v.id=t.ID+"-"+Y,v.className=t.className+" "+h.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof i?"nx-with-close-button":"")+" "+("function"==typeof i?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),v.style.fontSize=t.fontSize,v.style.color=h.textColor,v.style.background=h.background,v.style.borderRadius=t.borderRadius,v.style.pointerEvents="all",t.rtl&&(v.setAttribute("dir","rtl"),v.classList.add("nx-rtl-on")),v.style.fontFamily='"'+t.fontFamily+'", '+s,t.cssAnimation&&(v.style.animationDuration=t.cssAnimationDuration+"ms");var y="";if(t.closeButton&&"function"!=typeof i&&(y='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+h.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)v.innerHTML='<i style="color:'+h.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+h.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+r+"</span>"+(t.closeButton?y:"");else{var b="";n===c?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===l?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===u?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===f&&(b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),v.innerHTML=b+'<span class="nx-message nx-with-icon">'+r+"</span>"+(t.closeButton?y:"")}else v.innerHTML='<span class="nx-message">'+r+"</span>"+(t.closeButton?y:"");if("left-bottom"===t.position||"right-bottom"===t.position){var w=e.document.getElementById(d.wrapID);w.insertBefore(v,w.firstChild)}else e.document.getElementById(d.wrapID).appendChild(v);var x=e.document.getElementById(v.id);if(x){var k,_,I=function(){x.classList.add("nx-remove");var t=e.document.getElementById(d.overlayID);t&&0>=m.childElementCount&&t.classList.add("nx-remove"),clearTimeout(k)},N=function(){if(x&&null!==x.parentNode&&x.parentNode.removeChild(x),0>=m.childElementCount&&null!==m.parentNode){m.parentNode.removeChild(m);var t=e.document.getElementById(d.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(_)};if(t.closeButton&&"function"!=typeof i&&e.document.getElementById(v.id).querySelector("span.nx-close-button").addEventListener("click",(function(){I();var e=setTimeout((function(){N(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof i||t.clickToClose)&&x.addEventListener("click",(function(){"function"==typeof i&&i(),I();var e=setTimeout((function(){N(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof i){var S=function(){k=setTimeout((function(){I()}),t.timeout),_=setTimeout((function(){N()}),t.timeout+t.cssAnimationDuration)};S(),t.pauseOnHover&&(x.addEventListener("mouseenter",(function(){x.classList.add("nx-paused"),clearTimeout(k),clearTimeout(_)})),x.addEventListener("mouseleave",(function(){x.classList.remove("nx-paused"),S()})))}}if(t.showOnlyTheLastOne&&0<Y)for(var E,C=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+Y+"])"),T=0;T<C.length;T++)null!==(E=C[T]).parentNode&&E.parentNode.removeChild(E);t=F(!0,t,a)},Z=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ee=function(t,r,i,o,a,c){if(!W("body"))return!1;n||ce.Report.init({});var l={};if("object"==typeof a&&!Array.isArray(a)||"object"==typeof c&&!Array.isArray(c)){var u={};"object"==typeof a?u=a:"object"==typeof c&&(u=c),l=F(!0,n,{}),n=F(!0,n,u)}var f=n[t.toLocaleLowerCase("en")];"string"!=typeof r&&(r="Notiflix "+t),"string"!=typeof i&&(t===p?i='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':t===h?i='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':t===m?i='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':t===g&&(i='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof o&&(o="Okay"),n.plainText&&(r=H(r),i=H(i),o=H(o)),n.plainText||(r.length>n.titleMaxLength&&(r="Possible HTML Tags Error",i='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',o="Okay"),i.length>n.messageMaxLength&&(r="Possible HTML Tags Error",i='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',o="Okay"),o.length>n.buttonMaxLength&&(r="Possible HTML Tags Error",i='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',o="Okay")),r.length>n.titleMaxLength&&(r=r.substring(0,n.titleMaxLength)+"..."),i.length>n.messageMaxLength&&(i=i.substring(0,n.messageMaxLength)+"..."),o.length>n.buttonMaxLength&&(o=o.substring(0,n.buttonMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var d=e.document.createElement("div");d.id=v.ID,d.className=n.className,d.style.zIndex=n.zindex,d.style.borderRadius=n.borderRadius,d.style.fontFamily='"'+n.fontFamily+'", '+s,n.rtl&&(d.setAttribute("dir","rtl"),d.classList.add("nx-rtl-on")),d.style.display="flex",d.style.flexWrap="wrap",d.style.flexDirection="column",d.style.alignItems="center",d.style.justifyContent="center";var y="",b=!0===n.backOverlayClickToClose;n.backOverlay&&(y='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+(b?" nx-report-click-to-close":"")+'" style="background:'+(f.backOverlayColor||n.backOverlayColor)+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var w,x,k="";if(t===p?(w=n.svgSize,x=f.svgColor,w||(w="110px"),x||(x="#32c682"),k='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+w+'" height="'+w+'" fill="'+x+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):t===h?k=function(e,t){return e||(e="110px"),t||(t="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,f.svgColor):t===m?k=function(e,t){return e||(e="110px"),t||(t="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,f.svgColor):t===g&&(k=function(e,t){return e||(e="110px"),t||(t="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,f.svgColor)),d.innerHTML=y+'<div class="'+n.className+"-content"+(n.cssAnimation?" nx-with-animation ":"")+" nx-"+n.cssAnimationStyle+'" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+'ms;"><div style="width:'+n.svgSize+"; height:"+n.svgSize+';" class="'+n.className+'-icon">'+k+'</div><h5 class="'+n.className+'-title" style="font-weight:500; font-size:'+n.titleFontSize+"; color:"+f.titleColor+';">'+r+'</h5><p class="'+n.className+'-message" style="font-size:'+n.messageFontSize+"; color:"+f.messageColor+';">'+i+'</p><a id="NXReportButton" class="'+n.className+'-button" style="font-weight:500; font-size:'+n.buttonFontSize+"; background:"+f.buttonBackground+"; color:"+f.buttonColor+';">'+o+"</a></div>",!e.document.getElementById(d.id)){e.document.body.appendChild(d);var _=function(){var t=e.document.getElementById(d.id);t.classList.add("nx-remove");var r=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t),clearTimeout(r)}),n.cssAnimationDuration)};e.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof a&&a(),_()})),y&&b&&e.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){_()}))}n=F(!0,n,l)},te=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ne=function(t,n,i,o,a,c,l,u,f){if(!W("body"))return!1;r||ce.Confirm.init({});var d=F(!0,r,{});"object"!=typeof f||Array.isArray(f)||(r=F(!0,r,f)),"string"!=typeof n&&(n="Notiflix Confirm"),"string"!=typeof i&&(i="Do you agree with me?"),"string"!=typeof a&&(a="Yes"),"string"!=typeof c&&(c="No"),"function"!=typeof l&&(l=void 0),"function"!=typeof u&&(u=void 0),r.plainText&&(n=H(n),i=H(i),a=H(a),c=H(c)),r.plainText||(n.length>r.titleMaxLength&&(n="Possible HTML Tags Error",i='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',a="Okay",c="..."),i.length>r.messageMaxLength&&(n="Possible HTML Tags Error",i='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',a="Okay",c="..."),(a.length||c.length)>r.buttonsMaxLength&&(n="Possible HTML Tags Error",i='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',a="Okay",c="...")),n.length>r.titleMaxLength&&(n=n.substring(0,r.titleMaxLength)+"..."),i.length>r.messageMaxLength&&(i=i.substring(0,r.messageMaxLength)+"..."),a.length>r.buttonsMaxLength&&(a=a.substring(0,r.buttonsMaxLength)+"..."),c.length>r.buttonsMaxLength&&(c=c.substring(0,r.buttonsMaxLength)+"..."),r.cssAnimation||(r.cssAnimationDuration=0);var p=e.document.createElement("div");p.id=x.ID,p.className=r.className+(r.cssAnimation?" nx-with-animation nx-"+r.cssAnimationStyle:""),p.style.zIndex=r.zindex,p.style.padding=r.distance,r.rtl&&(p.setAttribute("dir","rtl"),p.classList.add("nx-rtl-on"));var h="string"==typeof r.position?r.position.trim():"center";p.classList.add("nx-position-"+h),p.style.fontFamily='"'+r.fontFamily+'", '+s;var m="";r.backOverlay&&(m='<div class="'+r.className+"-overlay"+(r.cssAnimation?" nx-with-animation":"")+'" style="background:'+r.backOverlayColor+";animation-duration:"+r.cssAnimationDuration+'ms;"></div>');var g="";"function"==typeof l&&(g='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+r.cancelButtonColor+";background:"+r.cancelButtonBackground+";font-size:"+r.buttonsFontSize+';">'+c+"</a>");var v="",y=null,k=void 0;if(t===b||t===w){y=o||"";var _=t===b||200<y.length?Math.ceil(1.5*y.length):250;v='<div><input id="NXConfirmValidationInput" type="text" '+(t===w?'value="'+y+'"':"")+' maxlength="'+_+'" style="font-size:'+r.messageFontSize+";border-radius: "+r.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(p.innerHTML=m+'<div class="'+r.className+'-content" style="width:'+r.width+"; background:"+r.backgroundColor+"; animation-duration:"+r.cssAnimationDuration+"ms; border-radius: "+r.borderRadius+';"><div class="'+r.className+'-head"><h5 style="color:'+r.titleColor+";font-size:"+r.titleFontSize+';">'+n+'</h5><div style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+i+v+'</div></div><div class="'+r.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof l?"":" nx-full")+'" style="color:'+r.okButtonColor+";background:"+r.okButtonBackground+";font-size:"+r.buttonsFontSize+';">'+a+"</a>"+g+"</div></div>",!e.document.getElementById(p.id)){e.document.body.appendChild(p);var I=e.document.getElementById(p.id),N=e.document.getElementById("NXConfirmButtonOk"),S=e.document.getElementById("NXConfirmValidationInput");S&&(S.focus(),S.setSelectionRange(0,(S.value||"").length),S.addEventListener("keyup",(function(e){var n=e.target.value;t===b&&n!==y?(e.preventDefault(),S.classList.add("nx-validation-failure"),S.classList.remove("nx-validation-success")):(t===b&&(S.classList.remove("nx-validation-failure"),S.classList.add("nx-validation-success")),("enter"===(e.key||"").toLocaleLowerCase("en")||13===e.keyCode)&&N.dispatchEvent(new Event("click")))}))),N.addEventListener("click",(function(e){if(t===b&&y&&S){if((S.value||"").toString()!==y)return S.focus(),S.classList.add("nx-validation-failure"),e.stopPropagation(),e.preventDefault(),e.returnValue=!1,e.cancelBubble=!0,!1;S.classList.remove("nx-validation-failure")}"function"==typeof l&&(t===w&&S&&(k=S.value||""),l(k)),I.classList.add("nx-remove");var n=setTimeout((function(){null!==I.parentNode&&(I.parentNode.removeChild(I),clearTimeout(n))}),r.cssAnimationDuration)})),"function"==typeof l&&e.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof u&&(t===w&&S&&(k=S.value||""),u(k)),I.classList.add("nx-remove");var e=setTimeout((function(){null!==I.parentNode&&(I.parentNode.removeChild(I),clearTimeout(e))}),r.cssAnimationDuration)}))}r=F(!0,r,d)},re=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},ie=function(t,n,r,o,a){if(!W("body"))return!1;i||ce.Loading.init({});var c=F(!0,i,{});if("object"==typeof n&&!Array.isArray(n)||"object"==typeof r&&!Array.isArray(r)){var l={};"object"==typeof n?l=n:"object"==typeof r&&(l=r),i=F(!0,i,l)}var u="";if("string"==typeof n&&0<n.length&&(u=n),o){var f="";0<(u=u.length>i.messageMaxLength?H(u).toString().substring(0,i.messageMaxLength)+"...":H(u).toString()).length&&(f='<p id="'+i.messageID+'" class="nx-loading-message" style="color:'+i.messageColor+";font-size:"+i.messageFontSize+';">'+u+"</p>"),i.cssAnimation||(i.cssAnimationDuration=0);var d="";if(t===k)d=V(i.svgSize,i.svgColor);else if(t===_)d=$(i.svgSize,i.svgColor);else if(t===I)d=q(i.svgSize,i.svgColor);else if(t===N)d=X(i.svgSize,i.svgColor);else if(t===S)d=K(i.svgSize,i.svgColor);else if(t===E)d=G(i.svgSize,i.svgColor);else if(t===C&&null!==i.customSvgCode&&null===i.customSvgUrl)d=i.customSvgCode||"";else if(t===C&&null!==i.customSvgUrl&&null===i.customSvgCode)d='<img class="nx-custom-loading-icon" width="'+i.svgSize+'" height="'+i.svgSize+'" src="'+i.customSvgUrl+'" alt="Notiflix">';else{if(t===C&&(null===i.customSvgUrl||null===i.customSvgCode))return j('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;d=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(i.svgSize,"#f8f8f8","#32c682")}var p=parseInt((i.svgSize||"").replace(/[^0-9]/g,"")),h=e.innerWidth,m=p>=h?h-40+"px":p+"px",g='<div style="width:'+m+"; height:"+m+';" class="'+i.className+"-icon"+(0<u.length?" nx-with-message":"")+'">'+d+"</div>",v=e.document.createElement("div");v.id=A.ID,v.className=i.className+(i.cssAnimation?" nx-with-animation":"")+(i.clickToClose?" nx-loading-click-to-close":""),v.style.zIndex=i.zindex,v.style.background=i.backgroundColor,v.style.animationDuration=i.cssAnimationDuration+"ms",v.style.fontFamily='"'+i.fontFamily+'", '+s,v.style.display="flex",v.style.flexWrap="wrap",v.style.flexDirection="column",v.style.alignItems="center",v.style.justifyContent="center",i.rtl&&(v.setAttribute("dir","rtl"),v.classList.add("nx-rtl-on")),v.innerHTML=g+f,!e.document.getElementById(v.id)&&(e.document.body.appendChild(v),i.clickToClose)&&e.document.getElementById(v.id).addEventListener("click",(function(){v.classList.add("nx-remove");var e=setTimeout((function(){null!==v.parentNode&&(v.parentNode.removeChild(v),clearTimeout(e))}),i.cssAnimationDuration)}))}else if(e.document.getElementById(A.ID))var y=e.document.getElementById(A.ID),b=setTimeout((function(){y.classList.add("nx-remove");var e=setTimeout((function(){null!==y.parentNode&&(y.parentNode.removeChild(y),clearTimeout(e))}),i.cssAnimationDuration);clearTimeout(b)}),a);i=F(!0,i,c)},oe=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},ae=0,se=function(t,n,r,i,a,c){var l;if(Array.isArray(r)){if(1>r.length)return j("Array of HTMLElements should contains at least one HTMLElement."),!1;l=r}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,r)){if(1>r.length)return j("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;l=Array.prototype.slice.call(r)}else{if("string"!=typeof r||1>(r||"").length||1===(r||"").length&&("#"===(r||"")[0]||"."===(r||"")[0]))return j("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var u=e.document.querySelectorAll(r);if(1>u.length)return j('You called the "Notiflix.Block..." function with "'+r+'" selector, but there is no such element(s) in the document.'),!1;l=u}o||ce.Block.init({});var f=F(!0,o,{});if("object"==typeof i&&!Array.isArray(i)||"object"==typeof a&&!Array.isArray(a)){var d={};"object"==typeof i?d=i:"object"==typeof a&&(d=a),o=F(!0,o,d)}var p="";"string"==typeof i&&0<i.length&&(p=i),o.cssAnimation||(o.cssAnimationDuration=0);var h=M.className;"string"==typeof o.className&&(h=o.className.trim());var m="number"==typeof o.querySelectorLimit?o.querySelectorLimit:200,g=(l||[]).length>=m?m:l.length,v="nx-block-temporary-position";if(t){for(var y,b=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],w=0;w<g;w++)if(y=l[w]){if(-1<b.indexOf(y.tagName.toLocaleLowerCase("en")))break;var x=y.querySelectorAll("[id^="+M.ID+"]");if(1>x.length){var k="";n&&(k=n===L?$(o.svgSize,o.svgColor):n===O?q(o.svgSize,o.svgColor):n===P?X(o.svgSize,o.svgColor):n===D?K(o.svgSize,o.svgColor):n===z?G(o.svgSize,o.svgColor):V(o.svgSize,o.svgColor));var _='<span class="'+h+'-icon" style="width:'+o.svgSize+";height:"+o.svgSize+';">'+k+"</span>",I="";0<p.length&&(p=p.length>o.messageMaxLength?H(p).substring(0,o.messageMaxLength)+"...":H(p),I='<span style="font-size:'+o.messageFontSize+";color:"+o.messageColor+';" class="'+h+'-message">'+p+"</span>"),ae++;var N=e.document.createElement("div");N.id=M.ID+"-"+ae,N.className=h+(o.cssAnimation?" nx-with-animation":""),N.style.position=o.position,N.style.zIndex=o.zindex,N.style.background=o.backgroundColor,N.style.animationDuration=o.cssAnimationDuration+"ms",N.style.fontFamily='"'+o.fontFamily+'", '+s,N.style.display="flex",N.style.flexWrap="wrap",N.style.flexDirection="column",N.style.alignItems="center",N.style.justifyContent="center",o.rtl&&(N.setAttribute("dir","rtl"),N.classList.add("nx-rtl-on")),N.innerHTML=_+I;var S,E=e.getComputedStyle(y).getPropertyValue("position"),C="string"==typeof E?E.toLocaleLowerCase("en"):"relative",T=Math.round(1.25*parseInt(o.svgSize))+40,A="";T>(y.offsetHeight||0)&&(A="min-height:"+T+"px;"),S=y.getAttribute("id")?"#"+y.getAttribute("id"):y.classList[0]?"."+y.classList[0]:(y.tagName||"").toLocaleLowerCase("en");var R="",B=-1>=["absolute","relative","fixed","sticky"].indexOf(C);if(B||0<A.length){if(!W("head"))return!1;B&&(R="position:relative!important;");var J='<style id="Style-'+M.ID+"-"+ae+'">'+S+"."+v+"{"+R+A+"}</style>",Y=e.document.createRange();Y.selectNode(e.document.head);var Q=Y.createContextualFragment(J);e.document.head.appendChild(Q),y.classList.add(v)}y.appendChild(N)}}}else var Z=function(t){var n=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t);var r=t.getAttribute("id"),i=e.document.getElementById("Style-"+r);i&&null!==i.parentNode&&i.parentNode.removeChild(i),clearTimeout(n)}),o.cssAnimationDuration)},ee=function(e){if(e&&0<e.length)for(var t,n=0;n<e.length;n++)(t=e[n])&&(t.classList.add("nx-remove"),Z(t));else U("string"==typeof r?'"Notiflix.Block.remove();" function called with "'+r+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+r+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},te=function(e){var t=setTimeout((function(){e.classList.remove(v),clearTimeout(t)}),o.cssAnimationDuration+300)},ne=setTimeout((function(){for(var e,t=0;t<g;t++)(e=l[t])&&(te(e),x=e.querySelectorAll("[id^="+M.ID+"]"),ee(x));clearTimeout(ne)}),c);o=F(!0,o,f)},ce={Notify:{init:function(e){t=F(!0,d,e),B(J,"NotiflixNotifyInternalCSS")},merge:function(e){return t?void(t=F(!0,t,e)):(j("You have to initialize the Notify module before call Merge function."),!1)},success:function(e,t,n){Q(c,e,t,n)},failure:function(e,t,n){Q(l,e,t,n)},warning:function(e,t,n){Q(u,e,t,n)},info:function(e,t,n){Q(f,e,t,n)}},Report:{init:function(e){n=F(!0,v,e),B(Z,"NotiflixReportInternalCSS")},merge:function(e){return n?void(n=F(!0,n,e)):(j("You have to initialize the Report module before call Merge function."),!1)},success:function(e,t,n,r,i){ee(p,e,t,n,r,i)},failure:function(e,t,n,r,i){ee(h,e,t,n,r,i)},warning:function(e,t,n,r,i){ee(m,e,t,n,r,i)},info:function(e,t,n,r,i){ee(g,e,t,n,r,i)}},Confirm:{init:function(e){r=F(!0,x,e),B(te,"NotiflixConfirmInternalCSS")},merge:function(e){return r?void(r=F(!0,r,e)):(j("You have to initialize the Confirm module before call Merge function."),!1)},show:function(e,t,n,r,i,o,a){ne(y,e,t,null,n,r,i,o,a)},ask:function(e,t,n,r,i,o,a,s){ne(b,e,t,n,r,i,o,a,s)},prompt:function(e,t,n,r,i,o,a,s){ne(w,e,t,n,r,i,o,a,s)}},Loading:{init:function(e){i=F(!0,A,e),B(re,"NotiflixLoadingInternalCSS")},merge:function(e){return i?void(i=F(!0,i,e)):(j("You have to initialize the Loading module before call Merge function."),!1)},standard:function(e,t){ie(k,e,t,!0,0)},hourglass:function(e,t){ie(_,e,t,!0,0)},circle:function(e,t){ie(I,e,t,!0,0)},arrows:function(e,t){ie(N,e,t,!0,0)},dots:function(e,t){ie(S,e,t,!0,0)},pulse:function(e,t){ie(E,e,t,!0,0)},custom:function(e,t){ie(C,e,t,!0,0)},notiflix:function(e,t){ie(T,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),ie(null,null,null,!1,e)},change:function(t){!function(t){"string"!=typeof t&&(t="");var n=e.document.getElementById(A.ID);if(n)if(0<t.length){t=t.length>i.messageMaxLength?H(t).substring(0,i.messageMaxLength)+"...":H(t);var r=n.getElementsByTagName("p")[0];if(r)r.innerHTML=t;else{var o=e.document.createElement("p");o.id=i.messageID,o.className="nx-loading-message nx-loading-message-new",o.style.color=i.messageColor,o.style.fontSize=i.messageFontSize,o.innerHTML=t,n.appendChild(o)}}else j("Where is the new message?")}(t)}},Block:{init:function(e){o=F(!0,M,e),B(oe,"NotiflixBlockInternalCSS")},merge:function(e){return o?void(o=F(!0,o,e)):(j('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(e,t,n){se(!0,R,e,t,n)},hourglass:function(e,t,n){se(!0,L,e,t,n)},circle:function(e,t,n){se(!0,O,e,t,n)},arrows:function(e,t,n){se(!0,P,e,t,n)},dots:function(e,t,n){se(!0,D,e,t,n)},pulse:function(e,t,n){se(!0,z,e,t,n)},remove:function(e,t){"number"!=typeof t&&(t=0),se(!1,null,e,null,null,t)}}};return"object"==typeof e.Notiflix?F(!0,e.Notiflix,{Notify:ce.Notify,Report:ce.Report,Confirm:ce.Confirm,Loading:ce.Loading,Block:ce.Block}):{Notify:ce.Notify,Report:ce.Report,Confirm:ce.Confirm,Loading:ce.Loading,Block:ce.Block}},"function"==typeof define&&define.amd?define([],(function(){return a(o)})):"object"==typeof c?c=a(o):o.Notiflix=a(o);const l=document.getElementById("copyButton"),u=t(s).debounce((function(e){navigator.clipboard.writeText(e).then((()=>{t(c).Notify.info("Copy your ID")})).catch((e=>{alert("An error occurred while copying the ID.")}))}),500);l.addEventListener("click",(()=>{u("Some ID")}));var f=i("4TNnu");
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
 */const d=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},p={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],o=t+1<e.length,a=o?e[t+1]:0,s=t+2<e.length,c=s?e[t+2]:0,l=i>>2,u=(3&i)<<4|a>>4;let f=(15&a)<<2|c>>6,d=63&c;s||(d=64,o||(f=64)),r.push(n[l],n[u],n[f],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(d(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const a=t<e.length?n[e.charAt(t)]:64;++t;const s=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==o||null==a||null==s)throw new h;const c=i<<2|o>>4;if(r.push(c),64!==a){const e=o<<4&240|a>>2;if(r.push(e),64!==s){const e=a<<6&192|s;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class h extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const m=function(e){return function(e){const t=d(e);return p.encodeByteArray(t,!0)}(e).replace(/\./g,"")},g=function(e){try{return p.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,y=()=>{try{return v()||(()=>{if(void 0===f||void 0===f.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&g(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},b=e=>{var t,n;return null===(n=null===(t=y())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},w=()=>{var e;return null===(e=y())||void 0===e?void 0:e.config},x=e=>{var t;return null===(t=y())||void 0===t?void 0:t[`_${e}`]};
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
class k{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
function _(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function I(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function N(){const e=_();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function S(){try{return"object"==typeof indexedDB}catch(e){return!1}}class E extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,E.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,C.prototype.create)}}class C{create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?function(e,t){return e.replace(T,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new E(r,a,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const T=/\{\$([^}]+)}/g;
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
 */function A(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function R(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(L(n)&&L(o)){if(!R(n,o))return!1}else if(n!==o)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function L(e){return null!==e&&"object"==typeof e}
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
function O(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function P(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function D(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */function z(e,t){const n=new M(e,t);return n.subscribe.bind(n)}class M{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=j),void 0===r.error&&(r.error=j),void 0===r.complete&&(r.complete=j);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function j(){}
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
function U(e){return e&&e._delegate?e._delegate:e}class W{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
class B{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new k;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class F{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new B(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
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
 */const H=[];var V,$;($=V||(V={}))[$.DEBUG=0]="DEBUG",$[$.VERBOSE=1]="VERBOSE",$[$.INFO=2]="INFO",$[$.WARN=3]="WARN",$[$.ERROR=4]="ERROR",$[$.SILENT=5]="SILENT";const q={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},X=V.INFO,K={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},G=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=K[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class J{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?q[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}constructor(e){this.name=e,this._logLevel=X,this._logHandler=G,this._userLogHandler=null,H.push(this)}}let Y,Q;const Z=new WeakMap,ee=new WeakMap,te=new WeakMap,ne=new WeakMap,re=new WeakMap;let ie={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return ee.get(e);if("objectStoreNames"===t)return e.objectStoreNames||te.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return se(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function oe(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Q||(Q=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(ce(this),t),se(Z.get(this))}:function(...t){return se(e.apply(ce(this),t))}:function(t,...n){const r=e.call(ce(this),t,...n);return te.set(r,t.sort?t.sort():[t]),se(r)}}function ae(e){return"function"==typeof e?oe(e):(e instanceof IDBTransaction&&function(e){if(ee.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));ee.set(e,t)}(e),t=e,(Y||(Y=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,ie):e);var t}function se(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(se(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&Z.set(t,e)})).catch((()=>{})),re.set(t,e),t}(e);if(ne.has(e))return ne.get(e);const t=ae(e);return t!==e&&(ne.set(e,t),re.set(t,e)),t}const ce=e=>re.get(e);function le(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),s=se(a);return r&&a.addEventListener("upgradeneeded",(e=>{r(se(a.result),e.oldVersion,e.newVersion,se(a.transaction),e)})),n&&a.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),s.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),s}const ue=["get","getKey","getAll","getAllKeys","count"],fe=["put","add","delete","clear"],de=new Map;function pe(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(de.get(t))return de.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=fe.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!ue.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let a=o.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&o.done]))[0]};return de.set(t,o),o}ie=(e=>({...e,get:(t,n,r)=>pe(t,n)||e.get(t,n,r),has:(t,n)=>!!pe(t,n)||e.has(t,n)}))(ie);
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
class he{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const me=new J("@firebase/app"),ge={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ve=new Map,ye=new Map,be=new Map;function we(e,t){try{e.container.addComponent(t)}catch(n){me.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function xe(e){const t=e.name;if(be.has(t))return me.debug(`There were multiple attempts to register component ${t}.`),!1;be.set(t,e);for(const t of ve.values())we(t,e);for(const t of ye.values())we(t,e);return!0}function ke(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function _e(e){return void 0!==e.settings}
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
const Ie=new C("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
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
class Ne{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ie.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new W("app",(()=>this),"PUBLIC"))}}
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
 */function Se(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw Ie.create("bad-app-name",{appName:String(i)});if(n||(n=w()),!n)throw Ie.create("no-options");const o=ve.get(i);if(o){if(R(n,o.options)&&R(r,o.config))return o;throw Ie.create("duplicate-app",{appName:i})}const a=new F(i);for(const e of be.values())a.addComponent(e);const s=new Ne(n,r,a);return ve.set(i,s),s}function Ee(e="[DEFAULT]"){const t=ve.get(e);if(!t&&"[DEFAULT]"===e&&w())return Se();if(!t)throw Ie.create("no-app",{appName:e});return t}function Ce(e,t,n){var r;let i=null!==(r=ge[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${i}" with version "${t}":`];return o&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void me.warn(e.join(" "))}xe(new W(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}let Te=null;function Ae(){return Te||(Te=le("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore("firebase-heartbeat-store")}catch(e){console.warn(e)}}}).catch((e=>{throw Ie.create("idb-open",{originalErrorMessage:e.message})}))),Te}async function Re(e,t){try{const n=(await Ae()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");await r.put(t,Le(e)),await n.done}catch(e){if(e instanceof E)me.warn(e.message);else{const t=Ie.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});me.warn(t.message)}}}function Le(e){return`${e.name}!${e.options.appId}`}
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
 */class Oe{async triggerHeartbeat(){var e,t;const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Pe();if((null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==r&&!this._heartbeatsCache.heartbeats.some((e=>e.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Pe(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),ze(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ze(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=m(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new De(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function Pe(){return(new Date).toISOString().substring(0,10)}class De{async runIndexedDBEnvironmentCheck(){return!!S()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await Ae()).transaction("firebase-heartbeat-store"),n=await t.objectStore("firebase-heartbeat-store").get(Le(e));return await t.done,n}catch(e){if(e instanceof E)me.warn(e.message);else{const t=Ie.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});me.warn(t.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Re(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Re(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function ze(e){return m(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var Me;Me="",xe(new W("platform-logger",(e=>new he(e)),"PRIVATE")),xe(new W("heartbeat",(e=>new Oe(e)),"PRIVATE")),Ce("@firebase/app","0.10.1",Me),Ce("@firebase/app","0.10.1","esm2017"),Ce("fire-js","");
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
Ce("firebase","10.11.0","app");function je(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function Ue(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const We=Ue,Be=new C("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Fe=new J("@firebase/auth");function He(e,...t){Fe.logLevel<=V.ERROR&&Fe.error(`Auth (10.11.0): ${e}`,...t)}
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
 */function Ve(e,...t){throw Ke(e,...t)}function $e(e,...t){return Ke(e,...t)}function qe(e,t,n){const r=Object.assign(Object.assign({},We()),{[t]:n});return new C("auth","Firebase",r).create(t,{appName:e.name})}function Xe(e){return qe(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ke(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Be.create(e,...t)}function Ge(e,t,...n){if(!e)throw Ke(t,...n)}function Je(e){const t="INTERNAL ASSERTION FAILED: "+e;throw He(t),new Error(t)}function Ye(e,t){e||Je(t)}
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
 */function Qe(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Ze(){return"http:"===et()||"https:"===et()}function et(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function tt(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Ze()||I()||"connection"in navigator))||navigator.onLine}
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
class nt{get(){return tt()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,Ye(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
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
 */function rt(e,t){Ye(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class it{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void Je("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void Je("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void Je("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const ot={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},at=new nt(3e4,6e4);
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
 */function st(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ct(e,t,n,r,i={}){return lt(e,i,(async()=>{let i={},o={};r&&("GET"===t?o=r:i={body:JSON.stringify(r)});const a=O(Object.assign({key:e.config.apiKey},o)).slice(1),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/json",e.languageCode&&(s["X-Firebase-Locale"]=e.languageCode),it.fetch()(ft(e,e.config.apiHost,n,a),Object.assign({method:t,headers:s,referrerPolicy:"no-referrer"},i))}))}async function lt(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},ot),t);try{const t=new pt(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ht(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const t=i.ok?o.errorMessage:o.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw ht(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw ht(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw ht(e,"user-disabled",o);const s=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw qe(e,s,a);Ve(e,s)}}catch(t){if(t instanceof E)throw t;Ve(e,"network-request-failed",{message:String(t)})}}async function ut(e,t,n,r,i={}){const o=await ct(e,t,n,r,i);return"mfaPendingCredential"in o&&Ve(e,"multi-factor-auth-required",{_serverResponse:o}),o}function ft(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?rt(e.config,i):`${e.config.apiScheme}://${i}`}function dt(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pt{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t($e(this.auth,"network-request-failed"))),at.get())}))}}function ht(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=$e(e,t,r);return i.customData._tokenResponse=n,i}
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
 */function mt(e){return void 0!==e&&void 0!==e.enterprise}class gt{getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return dt(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}}
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
 */async function vt(e,t){return ct(e,"GET","/v2/recaptchaConfig",st(e,t))}
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
 */async function yt(e,t){return ct(e,"POST","/v1/accounts:lookup",t)}
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
 */function bt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function wt(e){return 1e3*Number(e)}function xt(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return He("JWT malformed, contained fewer than 3 sections"),null;try{const e=g(n);return e?JSON.parse(e):(He("Failed to decode base64 JWT payload"),null)}catch(e){return He("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function kt(e){const t=xt(e);return Ge(t,"internal-error"),Ge(void 0!==t.exp,"internal-error"),Ge(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
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
 */async function _t(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof E&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class It{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
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
 */class Nt{_initializeTime(){this.lastSignInTime=bt(this.lastLoginAt),this.creationTime=bt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
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
 */async function St(e){var t;const n=e.auth,r=await e.getIdToken(),i=await _t(e,yt(n,{idToken:r}));Ge(null==i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?Et(o.providerUserInfo):[],s=(c=e.providerData,l=a,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,f=!(e.email&&o.passwordHash||(null==s?void 0:s.length)),d=!!u&&f,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:s,metadata:new Nt(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(e,p)}function Et(e){return e.map((e=>{var{providerId:t}=e,n=je(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
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
class Ct{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ge(e.idToken,"internal-error"),Ge(void 0!==e.idToken,"internal-error"),Ge(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):kt(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ge(0!==e.length,"internal-error");const t=kt(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(Ge(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await async function(e,t){const n=await lt(e,{},(async()=>{const n=O({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,o=ft(e,r,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",it.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new Ct;return n&&(Ge("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(Ge("string"==typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(Ge("number"==typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ct,this.toJSON())}_performRefresh(){return Je("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
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
 */function Tt(e,t){Ge("string"==typeof e||void 0===e,"internal-error",{appName:t})}class At{async getIdToken(e){const t=await _t(this,this.stsTokenManager.getToken(this.auth,e));return Ge(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=U(e),r=await n.getIdToken(t),i=xt(r);Ge(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"==typeof i.firebase?i.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:bt(wt(i.auth_time)),issuedAtTime:bt(wt(i.iat)),expirationTime:bt(wt(i.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=U(e);await St(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Ge(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new At(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await St(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_e(this.auth.app))return Promise.reject(Xe(this.auth));const e=await this.getIdToken();return await _t(this,async function(e,t){return ct(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,a,s,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,f=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(o=t.photoURL)&&void 0!==o?o:void 0,h=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(s=t._redirectEventId)&&void 0!==s?s:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:x,stsTokenManager:k}=t;Ge(y&&k,e,"internal-error");const _=Ct.fromJSON(this.name,k);Ge("string"==typeof y,e,"internal-error"),Tt(u,e.name),Tt(f,e.name),Ge("boolean"==typeof b,e,"internal-error"),Ge("boolean"==typeof w,e,"internal-error"),Tt(d,e.name),Tt(p,e.name),Tt(h,e.name),Tt(m,e.name),Tt(g,e.name),Tt(v,e.name);const I=new At({uid:y,auth:e,email:f,emailVerified:b,displayName:u,isAnonymous:w,photoURL:p,phoneNumber:d,tenantId:h,stsTokenManager:_,createdAt:g,lastLoginAt:v});return x&&Array.isArray(x)&&(I.providerData=x.map((e=>Object.assign({},e)))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new Ct;r.updateFromServerResponse(t);const i=new At({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await St(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];Ge(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?Et(r.providerUserInfo):[],o=!(r.email&&r.passwordHash||(null==i?void 0:i.length)),a=new Ct;a.updateFromIdToken(n);const s=new At({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Nt(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash||(null==i?void 0:i.length))};return Object.assign(s,c),s}constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=je(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new It(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Nt(i.createdAt||void 0,i.lastLoginAt||void 0)}}
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
 */const Rt=new Map;function Lt(e){Ye(e instanceof Function,"Expected a class definition");let t=Rt.get(e);return t?(Ye(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Rt.set(e,t),t)}
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
 */class Ot{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}Ot.type="NONE";const Pt=Ot;
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
 */function Dt(e,t,n){return`firebase:${e}:${t}:${n}`}class zt{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?At._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new zt(Lt(Pt),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||Lt(Pt);const o=Dt(n,e.config.apiKey,e.name);let a=null;for(const n of t)try{const t=await n._get(o);if(t){const r=At._fromJSON(e,t);n!==i&&(a=r),i=n;break}}catch(e){}const s=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&s.length?(i=s[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(e){}}))),new zt(i,e,n)):new zt(i,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Dt(this.userKey,r.apiKey,i),this.fullPersistenceKey=Dt("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
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
 */function Mt(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Bt(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(jt(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ht(t))return"Blackberry";if(Vt(t))return"Webos";if(Ut(t))return"Safari";if((t.includes("chrome/")||Wt(t))&&!t.includes("edge/"))return"Chrome";if(Ft(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function jt(e=_()){return/firefox\//i.test(e)}function Ut(e=_()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Wt(e=_()){return/crios\//i.test(e)}function Bt(e=_()){return/iemobile/i.test(e)}function Ft(e=_()){return/android/i.test(e)}function Ht(e=_()){return/blackberry/i.test(e)}function Vt(e=_()){return/webos/i.test(e)}function $t(e=_()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function qt(){return N()&&10===document.documentMode}function Xt(e=_()){return $t(e)||Ft(e)||Vt(e)||Ht(e)||/windows phone/i.test(e)||Bt(e)}
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
function Kt(e,t=[]){let n;switch(e){case"Browser":n=Mt(_());break;case"Worker":n=`${Mt(_())}-${e}`;break;default:n=e}return`${n}/JsCore/10.11.0/${t.length?t.join(","):"FirebaseCore-web"}`}
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
 */class Gt{pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
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
 */class Jt{validatePassword(e){var t,n,r,i,o,a;const s={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,s),this.validatePasswordCharacterOptions(e,s),s.isValid&&(s.isValid=null===(t=s.meetsMinPasswordLength)||void 0===t||t),s.isValid&&(s.isValid=null===(n=s.meetsMaxPasswordLength)||void 0===n||n),s.isValid&&(s.isValid=null===(r=s.containsLowercaseLetter)||void 0===r||r),s.isValid&&(s.isValid=null===(i=s.containsUppercaseLetter)||void 0===i||i),s.isValid&&(s.isValid=null===(o=s.containsNumericCharacter)||void 0===o||o),s.isValid&&(s.isValid=null===(a=s.containsNonAlphanumericCharacter)||void 0===a||a),s}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}constructor(e){var t,n,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=o.minPasswordLength)&&void 0!==t?t:6,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),void 0!==o.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),void 0!==o.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),void 0!==o.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),void 0!==o.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}}
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
 */class Yt{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Lt(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await zt.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await yt(this,{idToken:e}),n=await At._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(_e(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==r?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);n&&n!==o||!(null==a?void 0:a.user)||(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Ge(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await St(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_e(this.app))return Promise.reject(Xe(this));const t=e?U(e):null;return t&&Ge(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ge(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return _e(this.app)?Promise.reject(Xe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _e(this.app)?Promise.reject(Xe(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(Lt(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return ct(e,"GET","/v2/passwordPolicy",st(e,t))}
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
 */(this),t=new Jt(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new C("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return ct(e,"POST","/v2/accounts:revokeToken",st(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Lt(e)||this._popupRedirectResolver;Ge(t,this,"argument-error"),this.redirectPersistenceManager=await zt.create(this,[Lt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ge(a,this,"internal-error"),a.then((()=>{o||i(this.currentUser)})),"function"==typeof t){const i=e.addObserver(t,n,r);return()=>{o=!0,i()}}{const n=e.addObserver(t);return()=>{o=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Fe.logLevel<=V.WARN&&Fe.warn(`Auth (10.11.0): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zt(this),this.idTokenSubscription=new Zt(this),this.beforeStateQueue=new Gt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Be,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}}function Qt(e){return U(e)}class Zt{get next(){return Ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=z((e=>this.observer=e))}}
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
 */let en={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tn(e){return en.loadJS(e)}function nn(e){return`__${e}${Math.floor(1e6*Math.random())}`}class rn{async verify(e="verify",t=!1){function n(t,n,r){const i=window.grecaptcha;mt(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,r)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{vt(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new gt(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((i=>{if(!t&&mt(window.grecaptcha))n(i,e,r);else{if("undefined"==typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));let t=en.recaptchaEnterpriseScript;0!==t.length&&(t+=i),tn(t).then((()=>{n(i,e,r)})).catch((e=>{r(e)}))}})).catch((e=>{r(e)}))}))}constructor(e){this.type="recaptcha-enterprise",this.auth=Qt(e)}}async function on(e,t,n,r=!1){const i=new rn(e);let o;try{o=await i.verify(n)}catch(e){o=await i.verify(n,!0)}const a=Object.assign({},t);return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function an(e,t,n,r){var i;if(null===(i=e._getRecaptchaConfig())||void 0===i?void 0:i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await on(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await on(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)}))}function sn(e,t,n){const r=Qt(e);Ge(r._canInitEmulator,r,"emulator-config-failed"),Ge(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),o=cn(t),{host:a,port:s}=function(e){const t=cn(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:ln(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:ln(t)}}}(t),c=null===s?"":`:${s}`;r.config.emulator={url:`${o}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:s,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function cn(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ln(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class un{toJSON(){return Je("not implemented")}_getIdTokenResponse(e){return Je("not implemented")}_linkToIdToken(e,t){return Je("not implemented")}_getReauthenticationResolver(e){return Je("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
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
 */async function fn(e,t){return ct(e,"POST","/v1/accounts:signUp",t)}
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
async function dn(e,t){return ut(e,"POST","/v1/accounts:signInWithPassword",st(e,t))}
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
class pn extends un{static _fromEmailAndPassword(e,t){return new pn(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new pn(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return an(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",dn);case"emailLink":
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
return async function(e,t){return ut(e,"POST","/v1/accounts:signInWithEmailLink",st(e,t))}(e,{email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return an(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",fn);case"emailLink":return async function(e,t){return ut(e,"POST","/v1/accounts:signInWithEmailLink",st(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}}
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
 */async function hn(e,t){return ut(e,"POST","/v1/accounts:signInWithIdp",st(e,t))}
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
 */class mn extends un{static _fromParams(e){const t=new mn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ve("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=je(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new mn(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){return hn(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,hn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,hn(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=O(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
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
class vn extends un{static _fromVerification(e,t){return new vn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new vn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return ut(e,"POST","/v1/accounts:signInWithPhoneNumber",st(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await ut(e,"POST","/v1/accounts:signInWithPhoneNumber",st(e,t));if(n.temporaryProof)throw ht(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return ut(e,"POST","/v1/accounts:signInWithPhoneNumber",st(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),gn)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new vn({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}constructor(e){super("phone","phone"),this.params=e}}
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
 */class yn{static parseLink(e){const t=function(e){const t=P(D(e)).link,n=t?P(D(t)).deep_link_id:null,r=P(D(e)).deep_link_id;return(r?P(D(r)).link:null)||r||n||t||e}(e);try{return new yn(t)}catch(e){return null}}constructor(e){var t,n,r,i,o,a;const s=P(D(e)),c=null!==(t=s.apiKey)&&void 0!==t?t:null,l=null!==(n=s.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=s.mode)&&void 0!==r?r:null);Ge(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(i=s.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(o=s.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=s.tenantId)&&void 0!==a?a:null}}
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
class bn{static credential(e,t){return pn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=yn.parseLink(t);return Ge(n,"argument-error"),pn._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=bn.PROVIDER_ID}}bn.PROVIDER_ID="password",bn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",bn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class wn{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
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
 */class xn extends wn{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
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
class kn extends xn{static credential(e){return mn._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}kn.FACEBOOK_SIGN_IN_METHOD="facebook.com",kn.PROVIDER_ID="facebook.com";
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
class _n extends xn{static credential(e,t){return mn._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return _n.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}_n.GOOGLE_SIGN_IN_METHOD="google.com",_n.PROVIDER_ID="google.com";
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
class In extends xn{static credential(e){return mn._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}In.GITHUB_SIGN_IN_METHOD="github.com",In.PROVIDER_ID="github.com";
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
class Nn extends xn{static credential(e,t){return mn._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Nn.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
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
async function Sn(e,t){return ut(e,"POST","/v1/accounts:signUp",st(e,t))}
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
 */Nn.TWITTER_SIGN_IN_METHOD="twitter.com",Nn.PROVIDER_ID="twitter.com";class En{static async _fromIdTokenResponse(e,t,n,r=!1){const i=await At._fromIdTokenResponse(e,n,r),o=Cn(n);return new En({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Cn(n);return new En({user:e,providerId:r,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Cn(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class Tn extends E{static _fromErrorAndOperation(e,t,n,r){return new Tn(e,t,n,r)}constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Tn.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function An(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Tn._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */async function Rn(e,t,n=!1){const r=await _t(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return En._forOperation(e,"link",r)}
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
async function Ln(e,t,n=!1){const{auth:r}=e;if(_e(r.app))return Promise.reject(Xe(r));const i="reauthenticate";try{const o=await _t(e,An(r,i,t,e),n);Ge(o.idToken,r,"internal-error");const a=xt(o.idToken);Ge(a,r,"internal-error");const{sub:s}=a;return Ge(e.uid===s,r,"user-mismatch"),En._forOperation(e,i,o)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Ve(r,"user-mismatch"),e}}
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
 */async function On(e,t,n=!1){if(_e(e.app))return Promise.reject(Xe(e));const r="signIn",i=await An(e,r,t),o=await En._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}
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
async function Pn(e){const t=Qt(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Dn(e,t,n){if(_e(e.app))return Promise.reject(Xe(e));const r=Qt(e),i=an(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Sn),o=await i.catch((t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Pn(e),t})),a=await En._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}new WeakMap;
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
class zn{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
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
 */class Mn extends zn{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);qt()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=_();return Ut(e)||$t(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Xt(),this._shouldAllowMigration=!0}}Mn.type="LOCAL";const jn=Mn;
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
 */class Un extends zn{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Un.type="SESSION";const Wn=Un;
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
class Bn{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Bn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null==o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(o).map((async e=>e(t.origin,i))),s=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
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
function Fn(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */Bn.receivers=[];class Hn{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((a,s)=>{const c=Fn("",20);r.port1.start();const l=setTimeout((()=>{s(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{s(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),a(t.data.response);break;default:clearTimeout(l),clearTimeout(i),s(new Error("invalid_response"))}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}constructor(e){this.target=e,this.handlers=new Set}}
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
 */function Vn(){return window}
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
function $n(){return void 0!==Vn().WorkerGlobalScope&&"function"==typeof Vn().importScripts}class qn{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Xn(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Kn(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new qn(e).toPromise()}(),t(await Kn()))}))}))}async function Gn(e,t,n){const r=Xn(e,!0).put({fbase_key:t,value:n});return new qn(r).toPromise()}function Jn(e,t){const n=Xn(e,!0).delete(t);return new qn(n).toPromise()}class Yn{async _openDb(){return this.db||(this.db=await Kn()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $n()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bn._getInstance($n()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Hn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Kn();return await Gn(e,"__sak","1"),await Jn(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Gn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Xn(e,!1).get(t),r=await new qn(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Jn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Xn(e,!1).getAll();return new qn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}Yn.type="LOCAL";const Qn=Yn;
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
nn("rcb"),new nt(3e4,6e4);async function Zn(e,t,n){var r;const i=await n.verify();try{let o;if(Ge("string"==typeof i,e,"argument-error"),Ge("recaptcha"===n.type,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){Ge("enroll"===t.type,e,"internal-error");const n=await
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
function(e,t){return ct(e,"POST","/v2/accounts/mfaEnrollment:start",st(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{Ge("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;Ge(n,e,"missing-multi-factor-info");const a=await function(e,t){return ct(e,"POST","/v2/accounts/mfaSignIn:start",st(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return a.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return ct(e,"POST","/v1/accounts:sendVerificationCode",st(e,t))}(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
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
class er{verifyPhoneNumber(e,t){return Zn(this.auth,e,U(t))}static credential(e,t){return vn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return er.credentialFromTaggedObject(t)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?vn._fromTokenResponse(t,n):null}constructor(e){this.providerId=er.PROVIDER_ID,this.auth=Qt(e)}}
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
function tr(e,t){return t?Lt(t):(Ge(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */er.PROVIDER_ID="phone",er.PHONE_SIGN_IN_METHOD="phone";class nr extends un{_getIdTokenResponse(e){return hn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return hn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return hn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function rr(e){return On(e.auth,new nr(e),e.bypassAuthState)}function ir(e){const{auth:t,user:n}=e;return Ge(n,t,"internal-error"),Ln(n,new nr(e),e.bypassAuthState)}async function or(e){const{auth:t,user:n}=e;return Ge(n,t,"internal-error"),Rn(n,new nr(e),e.bypassAuthState)}
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
 */class ar{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:a}=e;if(o)return void this.reject(o);const s={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(s))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rr;case"linkViaPopup":case"linkViaRedirect":return or;case"reauthViaPopup":case"reauthViaRedirect":return ir;default:Ve(this.auth,"internal-error")}}resolve(e){Ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
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
 */const sr=new nt(2e3,1e4);class cr extends ar{async executeNotNull(){const e=await this.execute();return Ge(e,this.auth,"internal-error"),e}async onExecution(){Ye(1===this.filter.length,"Popup operations only handle one event");const e=Fn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject($e(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject($e(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject($e(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,sr.get())};e()}constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,cr.currentPopupAction&&cr.currentPopupAction.cancel(),cr.currentPopupAction=this}}cr.currentPopupAction=null;
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
const lr=new Map;class ur extends ar{async execute(){let e=lr.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=pr(t),r=dr(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}lr.set(this.auth._key(),e)}return this.bypassAuthState||lr.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function fr(e,t){lr.set(e._key(),t)}function dr(e){return Lt(e._redirectPersistence)}function pr(e){return Dt("pendingRedirect",e.config.apiKey,e.name)}
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
 */async function hr(e,t,n=!1){if(_e(e.app))return Promise.reject(Xe(e));const r=Qt(e),i=tr(r,t),o=new ur(r,i,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}class mr{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vr(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!vr(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError($e(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(gr(e))}saveEventToCache(e){this.cachedEventUids.add(gr(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function gr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function vr({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const yr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,br=/^https?/;async function wr(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return ct(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(xr(e))return}catch(e){}Ve(e,"unauthorized-domain")}function xr(e){const t=Qe(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!br.test(n))return!1;if(yr.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
 */const kr=new nt(3e4,6e4);function _r(){const e=Vn().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function Ir(e){return new Promise(((t,n)=>{var r,i,o;function a(){_r(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{_r(),n($e(e,"network-request-failed"))},timeout:kr.get()})}if(null===(i=null===(r=Vn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Vn().gapi)||void 0===o?void 0:o.load)){const t=nn("iframefcb");return Vn()[t]=()=>{gapi.load?a():n($e(e,"network-request-failed"))},tn(`${en.gapiScript}?onload=${t}`).catch((e=>n(e)))}a()}})).catch((e=>{throw Nr=null,e}))}let Nr=null;
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
const Sr=new nt(5e3,15e3),Er={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Cr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Tr(e){const t=e.config;Ge(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?rt(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"10.11.0"},i=Cr.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${O(r).slice(1)}`}async function Ar(e){const t=await function(e){return Nr=Nr||Ir(e),Nr}(e),n=Vn().gapi;return Ge(n,e,"internal-error"),t.open({where:document.body,url:Tr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Er,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=$e(e,"network-request-failed"),o=Vn().setTimeout((()=>{r(i)}),Sr.get());function a(){Vn().clearTimeout(o),n(t)}t.ping(a).then(a,(()=>{r(i)}))}))))}
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
 */const Rr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Lr{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function Or(e,t,n,r=500,i=600){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const c=Object.assign(Object.assign({},Rr),{width:r.toString(),height:i.toString(),top:o,left:a}),l=_().toLowerCase();n&&(s=Wt(l)?"_blank":n),jt(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=_()){var t;return $t(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==s)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",s),new Lr(null);const f=window.open(t||"",s,u);Ge(f,e,"popup-blocked");try{f.focus()}catch(e){}return new Lr(f)}const Pr=encodeURIComponent("fac");async function Dr(e,t,n,r,i,o){Ge(e.config.authDomain,e,"auth-domain-config-required"),Ge(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"10.11.0",eventId:i};if(t instanceof wn){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",A(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(o||{}))a[e]=t}if(t instanceof xn){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const s=a;for(const e of Object.keys(s))void 0===s[e]&&delete s[e];const c=await e._getAppCheckToken(),l=c?`#${Pr}=${encodeURIComponent(c)}`:"";return`${function({config:e}){return e.emulator?rt(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
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
 */(e)}?${O(s).slice(1)}${l}`}const zr=class{async _openPopup(e,t,n,r){var i;Ye(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Or(e,await Dr(e,t,n,Qe(),r),Fn())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){Vn().location.href=e}(await Dr(e,t,n,Qe(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Ye(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Ar(e),n=new mr(e);return t.register("authEvent",(t=>{Ge(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),Ve(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=wr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Xt()||Ut()||$t()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wn,this._completeRedirectFn=hr,this._overrideRedirectResult=fr}};
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
class Mr{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
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
const jr=x("authIdTokenMaxAge")||300;let Ur=null;var Wr,Br;Wr={loadJS:e=>new Promise(((t,n)=>{const r=document.createElement("script");var i,o;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=$e("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(o=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==o?o:document).appendChild(r)})),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},en=Wr,Br="Browser",xe(new W("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=n.options;Ge(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const s={apiKey:o,authDomain:a,clientPlatform:Br,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kt(Br)},c=new Yt(n,r,i,s);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Lt);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(c,t),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),xe(new W("auth-internal",(e=>{const t=Qt(e.getProvider("auth").getImmediate());return new Mr(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Ce("@firebase/auth","1.7.1",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(Br)),Ce("@firebase/auth","1.7.1","esm2017"),e.process=i("4TNnu");const Fr=document.querySelector("#email-singup"),Hr=document.querySelector(".sing-up"),Vr=document.querySelector("#password-singup"),$r=function(e=Ee()){const t=ke(e,"auth");if(t.isInitialized())return t.getImmediate();const n=
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
function(e,t){const n=ke(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(R(n.getOptions(),null!=t?t:{}))return e;Ve(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:zr,persistence:[Qn,jn,Wn]}),r=x("authTokenSyncURL");if(r&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(r,location.origin);if(location.origin===e.origin){const t=(i=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>jr)return;const r=null==t?void 0:t.token;Ur!==r&&(Ur=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){U(e).beforeAuthStateChanged(t,n)}(n,t,(()=>t(n.currentUser))),function(e,t,n,r){U(e).onIdTokenChanged(t,n,r)}(n,(e=>t(e)))}}var i;const o=b("auth");return o&&sn(n,`http://${o}`),n}(Se({apiKey:"AIzaSyBFTleaabEETsFQRavrze5fpw5vtJK-FIY",authDomain:"appgame-7b22b.firebaseapp.com",projectId:"appgame-7b22b",storageBucket:"appgame-7b22b.appspot.com",messagingSenderId:"55180818662",appId:"1:55180818662:web:bf20405c5c03c79a0e2327",measurementId:"G-GSFXDHQHQ4"}));Hr.addEventListener("click",(e=>{e.preventDefault(),Hr.disabled=!0,Dn($r,Fr.value,Vr.value).then((e=>{const t=e.user;console.log("User registered:",t)})).catch((e=>{const t=e.message;console.error("Registration error:",t)}))}));const qr=document.querySelector(".hamburger-checbox"),Xr=document.querySelector(".btns-and-theme-hamb");qr.addEventListener("change",(()=>{Xr.classList.toggle("show-menu")}));const Kr=document.querySelector(".login-container"),Gr=document.querySelector(".buttons-register li:nth-of-type(1) button"),Jr=document.querySelector(".close-btn");function Yr(){Gr.style.color="",Kr.style.display="none"}Gr.addEventListener("click",(e=>{e.preventDefault(),Gr.style.color="rgb(0, 255, 213)",Kr.style.display="block"})),Jr.addEventListener("click",(e=>{e.preventDefault(),Yr()})),document.addEventListener("keydown",(e=>{"Escape"===e.key&&Yr()}));const Qr=document.querySelector(".next-page-button"),Zr=document.querySelector(".prev-page-button");const ei=document.querySelector(".main-gallery"),ti=document.querySelector(".loader");async function ni(e){const t=new URL("games","https://api.rawg.io/api/");t.searchParams.append("ordering","-rating"),t.searchParams.append("key","8b50ecc01425485f9653061e73d88e87"),t.searchParams.append("page",e);try{const e=await fetch(t);return await e.json()}catch(e){console.error("Error fetching popular games:",e)}}async function ri(){const e=new URL("https://api.rawg.io/api/genres");e.searchParams.append("key","8b50ecc01425485f9653061e73d88e87");try{const t=await fetch(e);return(await t.json()).results}catch(e){console.error("Error fetching genres:",e)}}async function ii(e){ei.innerHTML="";for(const t of e){const{id:e,name:n,background_image:r,genres:i,tags:o,rating:a,added:s,released:c,parent_platforms:l,short_screenshots:u}=t;if(o.some((e=>"nsfw"===e.name.toLowerCase())))continue;const f=new Image;f.src=r,f.onload=async function(){if(this.naturalWidth>=this.naturalHeight){const u=i.map((e=>e.name)),f=(o.map((e=>e.name)),l.map((e=>e.platform.name)).slice(0,2)),d=`\n          <li class="card-container" data-id="${e}">\n            <div class="first-content-card" data-id="${e}" data-title="${n}" data-original_title="${n}">\n              <div class="img-content">\n                  <img class="cards-home-game-image" width="310" height="170" src="${r}" alt="Poster ${n}" />\n                <div>\n                <div class="stats-cards">\n                <p class="cards-home-game-rating">${a}</p>\n                <p class="cards-home-game-added">+ ${s}</p>\n                </div>\n                <span class="cards-home-game-title">${n.toUpperCase()}</span>\n                </div>\n              </div>\n            </div>\n            <div class="second-content-card">\n            ${u.length>0?`<div class="cards-home-game-genres"><span>Genres:</span> ${u.join(", ")}</div>`:""}\n            ${c?`<div class="cards-home-game-genres"><span>Release date:</span> ${c}</div>`:""}\n            ${f.length>0?`<div class="cards-home-game-genres"><span>Platforms:</span> ${f.join(", ")}</div>`:""}\n              <button class="view-details-btn" data-id="${e}">View Details</button>\n            </div>\n          </li>\n        `;ei.insertAdjacentHTML("beforeend",d),ti.style.display="none",Qr.style.display="block",Zr.style.display="block",document.querySelector(`[data-id="${e}"] .view-details-btn`).addEventListener("click",(async function(){oi(t)}))}}}}async function oi(e){const t=await async function(e){const t=new URL(`games/${e}`,"https://api.rawg.io/api/");t.searchParams.append("key","8b50ecc01425485f9653061e73d88e87");try{const e=await fetch(t);return(await e.json()).description}catch(t){return console.error(`Error fetching game description with id ${e}:`,t),""}}(e.id),n=e.short_screenshots.slice(0,6);document.querySelector("body").style.overflow="hidden";const r=n.map(((e,t)=>`<img src="${e.image}" alt="Screenshot ${t+1}" width="300" />`)).join(""),i=`\n    <div class="modal-content" style="background-image: url(${e.background_image}); background-repeat: no-repeat; background-size: cover;">\n      <div class="gradient-overlay"></div>\n      <div class="follow-us"><span>Follow us!</span></div>\n      <span class="close">&times;</span>\n\n      <div class="container-modal-div">\n        <div class="screenshots-modal">\n\n          ${r}\n\n        </div>\n        <div class="stats-modal">\n          <h2>${e.name}</h2>\n          <ul class="buttons-modal">\n            <li>\n              <button>\n                Add to <span>Wishlist</span>\n                <span class="stat-modal-btn">${e.added}</span>\n              </button>\n            </li>\n            <li><button>Add to my <span>games</span></button></li>\n          </ul>\n          <div class="stats-modal-styles">\n            <p>Rating: <span>${e.rating}</span></p>\n            <p>Added: <span>${e.added}</span></p>\n          </div>\n          ${e.genres.length>0?`\n            <p>Genres: <span>${e.genres.map((e=>e.name)).join(", ")}</span></p>\n          `:""}\n          ${e.tags.length>0?`\n            <p>Tags: <span>${e.tags.map((e=>e.name)).join(", ")}</span></p>\n          `:""}\n          <div class="description-content">\n          <p>Description: ${t}</p>\n          </div>\n          <p class="view-more-screenshots"><span class="effect">see screenshots</span> </p>\n\n        </div>\n      </div>\n    </div>\n  `;document.querySelector(".modal").innerHTML=i,document.querySelector(".modal").style.display="block";document.querySelector(".modal-content .close").addEventListener("click",ai)}async function ai(){document.querySelector(".modal").style.display="none",document.querySelector("body").style.overflow="auto"}Qr.style.display="none",Zr.style.display="none",document.addEventListener("keydown",(e=>{"Escape"===event.key&&ai()})),ni(1).then((e=>e.results)).then(ii).catch((e=>console.error("Error fetching popular games:",e)));let si=1;const ci=document.querySelector(".prev-page-button"),li=document.querySelector(".next-page-button");ci.addEventListener("click",(async()=>{if(si>1)try{ii((await ni(si-1)).results),si--,window.scrollTo({top:0,behavior:"smooth"})}catch(e){console.error("Error fetching and rendering games:",e)}})),li.addEventListener("click",(async()=>{try{ii((await ni(si+1)).results),si++,window.scrollTo({top:0,behavior:"smooth"})}catch(e){console.error("Error fetching and rendering games:",e)}}));const ui=document.querySelector("#search-form"),fi=document.querySelector("#search-input"),di=document.querySelector(".hero-heading");ui.addEventListener("submit",(async e=>{e.preventDefault(),ei.innerHTML="",ci.style.display="none",li.style.display="none",ti.style.display="block",di.innerHTML="";const n=fi.value.trim();if(n){try{const e=await async function(e,t){const n=new URLSearchParams({search:e,page_size:40,key:"8b50ecc01425485f9653061e73d88e87",image_type:"photo",safesearch:!0,page:t}),r=await fetch(`https://api.rawg.io/api/games?${n.toString()}`);if(!r.ok)throw new Error(r.statusText);return r.json()}(n,1);if(di.innerHTML=`search for : ${n}`,ti.style.display="none",!e.results.length)return t(c).Notify.info("No games found"),ci.style.display="none",li.style.display="none",void(di.innerHTML="No games found");ci.style.display="block",li.style.display="block",ii(e.results)}catch(e){console.error(e),t(c).Notify.failure("Failed to fetch games")}ui.reset()}})),async function(){const e=await ri(),t=document.querySelector("#genre-list");e.forEach((e=>{const n=document.createElement("li"),r=document.createElement("span");n.dataset.value=e.id,r.textContent=e.name,t.appendChild(n),n.appendChild(r),n.addEventListener("click",(async()=>{ei.innerHTML="",ci.style.display="none",li.style.display="none",ti.style.display="block";const t=n.dataset.value;di.innerHTML=`${e.name}`;const r=await async function(e){const t=new URL("https://api.rawg.io/api/games");t.searchParams.append("key","8b50ecc01425485f9653061e73d88e87"),t.searchParams.append("genres",e);try{const e=await fetch(t);return(await e.json()).results}catch(e){console.error("Error fetching games for genre:",e)}}(t);ii(r),ci.style.display="block",li.style.display="block",ti.style.display="none"}))}))}();const pi=document.querySelector(".singup-container"),hi=document.querySelector(".buttons-register li:nth-of-type(2) button"),mi=document.querySelector(".close-btn");function gi(){hi.style.color="",pi.style.display="none"}hi.addEventListener("click",(e=>{e.preventDefault(),hi.style.color="rgb(0, 255, 213)",pi.style.display="block"})),mi.addEventListener("click",(e=>{e.preventDefault(),gi()})),document.addEventListener("keydown",(e=>{"Escape"===e.key&&gi()}));const vi=document.querySelector('.switch input[type="checkbox"]'),yi=document.querySelector("body");"light"===localStorage.getItem("theme")&&(yi.classList.add("light-theme"),vi.checked=!0),vi.addEventListener("change",(()=>{yi.classList.toggle("light-theme"),vi.checked?localStorage.setItem("theme","light"):localStorage.removeItem("theme")}));const bi=document.querySelector("#userModal"),wi=document.querySelector(".user-icon");document.querySelector(".user-profile");wi.addEventListener("click",(e=>{bi.style.display="block"}));bi.querySelector(".user-modal-close").addEventListener("click",(e=>{bi.style.display="none"}));const xi=document.getElementById("profilePicInput"),ki=document.getElementById("userIcon"),_i=document.querySelector(".background-image"),Ii=document.querySelector(".bg-image");let Ni=!1;ki.addEventListener("click",(()=>{Ni||(xi.click(),Ni=!0)})),_i.addEventListener("click",(()=>{Ni||(_i.click(),Ni=!0)})),xi.addEventListener("change",(e=>{const t=e.target.files[0];if(t){const e=URL.createObjectURL(t);ki.src=e,ki.style.borderRadius="50%"}Ni=!1})),_i.addEventListener("change",(e=>{const t=e.target.files[0];if(t){const e=URL.createObjectURL(t);Ii.style.backgroundImage=`linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${e})`}Ni=!1}));
//# sourceMappingURL=index.98ba6647.js.map
