import{S as n,i as e,s as t,e as r,t as i,a,b as o,f as s,g as u,c,d as l,h as f,u as h,j as p,k as d,o as m,n as y,p as v,v as g,w as _,x as b,y as w,z as A,A as T,B as C,C as E,D as S,E as P}from"./client.ee704c92.js";import{c as O,a as I}from"./_commonjsHelpers.edce28ac.js";function W(n){let e,t,v,g,_,b,w,A=n[2].toString()+"";return{c(){e=r("div"),t=i(n[1]),v=a(),g=r("span"),_=a(),b=r("span"),w=i(A),this.h()},l(r){e=o(r,"DIV",{class:!0});var i=s(e);t=u(i,n[1]),v=c(i),g=o(i,"SPAN",{class:!0}),s(g).forEach(l),_=c(i),b=o(i,"SPAN",{class:!0});var a=s(b);w=u(a,A),a.forEach(l),i.forEach(l),this.h()},h(){f(g,"class","note-sharp svelte-lzwyxs"),f(b,"class","note-octave svelte-lzwyxs"),f(e,"class","note svelte-lzwyxs"),h(e,"active",n[0])},m(n,r){p(n,e,r),d(e,t),d(e,v),d(e,g),d(e,_),d(e,b),d(b,w)},p(n,[r]){2&r&&m(t,n[1]),4&r&&A!==(A=n[2].toString()+"")&&m(w,A),1&r&&h(e,"active",n[0])},i:y,o:y,d(n){n&&l(e)}}}function j(n,e,t){let{isActive:r}=e,{note:i}=e,{index:a}=e,{octave:o}=e;return n.$$set=n=>{"isActive"in n&&t(0,r=n.isActive),"note"in n&&t(1,i=n.note),"index"in n&&t(3,a=n.index),"octave"in n&&t(2,o=n.octave)},[r,i,o,a]}class B extends n{constructor(n){super(),e(this,n,j,W,t,{isActive:0,note:1,index:3,octave:2})}}function M(n,e,t){const r=n.slice();return r[3]=e[t],r}function F(n,e,t){const r=n.slice();return r[6]=e[t],r[8]=t,r}function R(n){let e,t;return e=new B({props:{note:n[6],index:n[8],octave:n[3],isActive:n[0]===12*(n[3]+1)+n[8]}}),{c(){_(e.$$.fragment)},l(n){b(e.$$.fragment,n)},m(n,r){w(e,n,r),t=!0},p(n,t){const r={};1&t&&(r.isActive=n[0]===12*(n[3]+1)+n[8]),e.$set(r)},i(n){t||(g(e.$$.fragment,n),t=!0)},o(n){A(e.$$.fragment,n),t=!1},d(n){T(e,n)}}}function L(n){let e,t,r=n[2],i=[];for(let e=0;e<r.length;e+=1)i[e]=R(F(n,r,e));const a=n=>A(i[n],1,1,(()=>{i[n]=null}));return{c(){for(let n=0;n<i.length;n+=1)i[n].c();e=v()},l(n){for(let e=0;e<i.length;e+=1)i[e].l(n);e=v()},m(n,r){for(let e=0;e<i.length;e+=1)i[e].m(n,r);p(n,e,r),t=!0},p(n,t){if(7&t){let o;for(r=n[2],o=0;o<r.length;o+=1){const a=F(n,r,o);i[o]?(i[o].p(a,t),g(i[o],1)):(i[o]=R(a),i[o].c(),g(i[o],1),i[o].m(e.parentNode,e))}for(C(),o=r.length;o<i.length;o+=1)a(o);E()}},i(n){if(!t){for(let n=0;n<r.length;n+=1)g(i[n]);t=!0}},o(n){i=i.filter(Boolean);for(let n=0;n<i.length;n+=1)A(i[n]);t=!1},d(n){S(i,n),n&&l(e)}}}function k(n){let e,t,h,m,y,v,_,b=n[1],w=[];for(let e=0;e<b.length;e+=1)w[e]=L(M(n,b,e));const T=n=>A(w[n],1,1,(()=>{w[n]=null}));return{c(){e=r("div"),t=r("div");for(let n=0;n<w.length;n+=1)w[n].c();h=a(),m=r("div"),y=r("span"),v=i("Hz"),this.h()},l(n){e=o(n,"DIV",{class:!0});var r=s(e);t=o(r,"DIV",{class:!0});var i=s(t);for(let n=0;n<w.length;n+=1)w[n].l(i);i.forEach(l),h=c(r),m=o(r,"DIV",{class:!0});var a=s(m);y=o(a,"SPAN",{});var f=s(y);v=u(f,"Hz"),f.forEach(l),a.forEach(l),r.forEach(l),this.h()},h(){f(t,"class","notes-list svelte-1cit9er"),f(m,"class","frequency"),f(e,"class","notes svelte-1cit9er")},m(n,r){p(n,e,r),d(e,t);for(let n=0;n<w.length;n+=1)w[n].m(t,null);d(e,h),d(e,m),d(m,y),d(y,v),_=!0},p(n,[e]){if(7&e){let r;for(b=n[1],r=0;r<b.length;r+=1){const i=M(n,b,r);w[r]?(w[r].p(i,e),g(w[r],1)):(w[r]=L(i),w[r].c(),g(w[r],1),w[r].m(t,null))}for(C(),r=b.length;r<w.length;r+=1)T(r);E()}},i(n){if(!_){for(let n=0;n<b.length;n+=1)g(w[n]);_=!0}},o(n){w=w.filter(Boolean);for(let n=0;n<w.length;n+=1)A(w[n]);_=!1},d(n){n&&l(e),S(w,n)}}}function x(n,e,t){let{value:r}=e;return n.$$set=n=>{"value"in n&&t(0,r=n.value)},[r,[2,3,4,5],["C","C♯","D","D♯","E","F","F♯","G","G♯","A","A♯","B"]]}class $ extends n{constructor(n){super(),e(this,n,x,k,t,{value:0})}}function D(n,e,t){const r=n.slice();return r[2]=e[t],r}function N(n){let e;return{c(){e=r("div"),this.h()},l(n){e=o(n,"DIV",{style:!0,class:!0}),s(e).forEach(l),this.h()},h(){f(e,"style",`transform:rotate(${9*n[2]-45}deg)`),f(e,"class","svelte-yyo3d6"),h(e,"meter-scale",!0),h(e,"meter-scale-strong",n[2]%5==0)},m(n,t){p(n,e,t)},p:y,d(n){n&&l(e)}}}function U(n){let e,t,i,u,h,m,v=n[1],g=[];for(let e=0;e<v.length;e+=1)g[e]=N(D(n,v,e));return{c(){e=r("div"),t=r("div"),i=a(),u=r("div"),m=a();for(let n=0;n<g.length;n+=1)g[n].c();this.h()},l(n){e=o(n,"DIV",{class:!0});var r=s(e);t=o(r,"DIV",{class:!0}),s(t).forEach(l),i=c(r),u=o(r,"DIV",{class:!0,style:!0}),s(u).forEach(l),m=c(r);for(let n=0;n<g.length;n+=1)g[n].l(r);r.forEach(l),this.h()},h(){f(t,"class","meter-dot svelte-yyo3d6"),f(u,"class","meter-pointer svelte-yyo3d6"),f(u,"style",h=`transform:rotate(${n[0]}deg)`),f(e,"class","meter svelte-yyo3d6")},m(n,r){p(n,e,r),d(e,t),d(e,i),d(e,u),d(e,m);for(let n=0;n<g.length;n+=1)g[n].m(e,null)},p(n,[t]){if(1&t&&h!==(h=`transform:rotate(${n[0]}deg)`)&&f(u,"style",h),2&t){let r;for(v=n[1],r=0;r<v.length;r+=1){const i=D(n,v,r);g[r]?g[r].p(i,t):(g[r]=N(i),g[r].c(),g[r].m(e,null))}for(;r<g.length;r+=1)g[r].d(1);g.length=v.length}},i:y,o:y,d(n){n&&l(e),S(g,n)}}}function z(n,e,t){let{deg:r=0}=e;const i=Array.from(new Array(10).keys());return n.$$set=n=>{"deg"in n&&t(0,r=n.deg)},[r,i]}class H extends n{constructor(n){super(),e(this,n,z,U,t,{deg:0})}}var V={};function G(n,e){for(var t=0,r=n.length-1;r>=0;r--){var i=n[r];"."===i?n.splice(r,1):".."===i?(n.splice(r,1),t++):t&&(n.splice(r,1),t--)}if(e)for(;t--;t)n.unshift("..");return n}var q=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,K=function(n){return q.exec(n).slice(1)};function X(){for(var n="",e=!1,t=arguments.length-1;t>=-1&&!e;t--){var r=t>=0?arguments[t]:"/";if("string"!=typeof r)throw new TypeError("Arguments to path.resolve must be strings");r&&(n=r+"/"+n,e="/"===r.charAt(0))}return(e?"/":"")+(n=G(Q(n.split("/"),(function(n){return!!n})),!e).join("/"))||"."}function Y(n){var e=J(n),t="/"===nn(n,-1);return(n=G(Q(n.split("/"),(function(n){return!!n})),!e).join("/"))||e||(n="."),n&&t&&(n+="/"),(e?"/":"")+n}function J(n){return"/"===n.charAt(0)}var Z={extname:function(n){return K(n)[3]},basename:function(n,e){var t=K(n)[2];return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t},dirname:function(n){var e=K(n),t=e[0],r=e[1];return t||r?(r&&(r=r.substr(0,r.length-1)),t+r):"."},sep:"/",delimiter:":",relative:function(n,e){function t(n){for(var e=0;e<n.length&&""===n[e];e++);for(var t=n.length-1;t>=0&&""===n[t];t--);return e>t?[]:n.slice(e,t-e+1)}n=X(n).substr(1),e=X(e).substr(1);for(var r=t(n.split("/")),i=t(e.split("/")),a=Math.min(r.length,i.length),o=a,s=0;s<a;s++)if(r[s]!==i[s]){o=s;break}var u=[];for(s=o;s<r.length;s++)u.push("..");return(u=u.concat(i.slice(o))).join("/")},join:function(){var n=Array.prototype.slice.call(arguments,0);return Y(Q(n,(function(n,e){if("string"!=typeof n)throw new TypeError("Arguments to path.join must be strings");return n})).join("/"))},isAbsolute:J,normalize:Y,resolve:X};function Q(n,e){if(n.filter)return n.filter(e);for(var t=[],r=0;r<n.length;r++)e(n[r],r,n)&&t.push(n[r]);return t}var nn="b"==="ab".substr(-1)?function(n,e,t){return n.substr(e,t)}:function(n,e,t){return e<0&&(e=n.length+e),n.substr(e,t)},en=O((function(n,e){var t=function(n){var e;n=n||{},e||(e=void 0!==n?n:{});var t,r={};for(t in e)e.hasOwnProperty(t)&&(r[t]=e[t]);e.arguments=[],e.thisProgram="./this.program",e.quit=function(n,e){throw e},e.preRun=[],e.postRun=[];var i=!1,a=!1,o=!1,s=!1;i="object"==typeof window,a="function"==typeof importScripts,o="object"==typeof process&&"function"==typeof I&&!i&&!a,s=!i&&!o&&!a;var u,c,l="";function f(n){return e.locateFile?e.locateFile(n,l):l+n}if(o)l=__dirname+"/",e.read=function(n,e){return u||(u=V),c||(c=Z),n=c.normalize(n),n=u.readFileSync(n),e?n:n.toString()},e.readBinary=function(n){return(n=e.read(n,!0)).buffer||(n=new Uint8Array(n)),g(n.buffer),n},1<process.argv.length&&(e.thisProgram=process.argv[1].replace(/\\/g,"/")),e.arguments=process.argv.slice(2),process.on("uncaughtException",(function(n){throw n})),process.on("unhandledRejection",(function(){process.exit(1)})),e.quit=function(n){process.exit(n)},e.inspect=function(){return"[Emscripten Module object]"};else if(s)"undefined"!=typeof read&&(e.read=function(n){return read(n)}),e.readBinary=function(n){return"function"==typeof readbuffer?new Uint8Array(readbuffer(n)):(g("object"==typeof(n=read(n,"binary"))),n)},"undefined"!=typeof scriptArgs?e.arguments=scriptArgs:void 0!==arguments&&(e.arguments=arguments),"function"==typeof quit&&(e.quit=function(n){quit(n)});else if(i||a){if(i){var h=this._currentScript||document.currentScript;O&&0!==h.src.indexOf("blob:")&&(l=h.src.split("/").slice(0,-1).join("/")+"/")}else a&&(l=self.location.href.split("/").slice(0,-1).join("/")+"/");e.read=function(n){var e=new XMLHttpRequest;return e.open("GET",n,!1),e.send(null),e.responseText},a&&(e.readBinary=function(n){var e=new XMLHttpRequest;return e.open("GET",n,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}),e.readAsync=function(n,e,t){var r=new XMLHttpRequest;r.open("GET",n,!0),r.responseType="arraybuffer",r.onload=function(){200==r.status||0==r.status&&r.response?e(r.response):t()},r.onerror=t,r.send(null)},e.setWindowTitle=function(n){document.title=n}}var p=e.print||("undefined"!=typeof console?console.log.bind(console):"undefined"!=typeof print?print:null),d=e.printErr||("undefined"!=typeof printErr?printErr:"undefined"!=typeof console&&console.warn.bind(console)||p);for(t in r)r.hasOwnProperty(t)&&(e[t]=r[t]);function m(n){var e;return e||(e=16),Math.ceil(n/e)*e}r=void 0;var y={"f64-rem":function(n,e){return n%e},debugger:function(){}},v=0;function g(n,e){n||me("Assertion failed: "+e)}var _,b,w,A,T,C,E,S,P,O,W,j,B,M,F,R="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function L(){e.HEAP8=b=new Int8Array(_),e.HEAP16=A=new Int16Array(_),e.HEAP32=C=new Int32Array(_),e.HEAPU8=w=new Uint8Array(_),e.HEAPU16=T=new Uint16Array(_),e.HEAPU32=E=new Uint32Array(_),e.HEAPF32=S=new Float32Array(_),e.HEAPF64=P=new Float64Array(_)}function k(){me("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+$+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}"undefined"!=typeof TextDecoder&&new TextDecoder("utf-16le"),O=W=j=B=M=F=0;var x=e.TOTAL_STACK||5242880,$=e.TOTAL_MEMORY||16777216;function D(n){for(;0<n.length;){var t=n.shift();if("function"==typeof t)t();else{var r=t.B;"number"==typeof r?void 0===t.F?e.dynCall_v(r):e.dynCall_vi(r,t.F):r(void 0===t.F?null:t.F)}}}$<x&&d("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+$+"! (TOTAL_STACK="+x+")"),e.buffer?_=e.buffer:("object"==typeof WebAssembly&&"function"==typeof WebAssembly.Memory?(e.wasmMemory=new WebAssembly.Memory({initial:$/65536,maximum:$/65536}),_=e.wasmMemory.buffer):_=new ArrayBuffer($),e.buffer=_),L();var N=[],U=[],z=[],H=[],G=!1;function q(){var n=e.preRun.shift();N.unshift(n)}var K=Math.cos,X=Math.sin,Y=0,J=null;function Q(n){return String.prototype.startsWith?n.startsWith("data:application/octet-stream;base64,"):0===n.indexOf("data:application/octet-stream;base64,")}e.preloadedImages={},e.preloadedAudios={},function(){function n(){try{if(console.log("c",e),e.wasmBinary)return new Uint8Array(e.wasmBinary);if(e.readBinary)return e.readBinary(s);throw"both async and sync fetching of the wasm failed"}catch(n){me(n)}}function t(){return e.wasmBinary||!i&&!a||"function"!=typeof fetch?new Promise((function(e){e(n())})):fetch(s,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+s+"'";return n.arrayBuffer()})).catch((function(e){return console.log("e",e,s),n()}))}function r(n){function r(n){if((l=n.exports).memory){n=l.memory;var t=e.buffer;n.byteLength<t.byteLength&&d("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here"),t=new Int8Array(t),new Int8Array(n).set(t),e.buffer=_=n,L()}e.asm=l,e.usingWasm=!0,Y--,e.monitorRunDependencies&&e.monitorRunDependencies(Y),0==Y&&J&&(n=J,J=null,n())}function i(n){r(n.instance)}function a(n){t().then((function(n){return WebAssembly.instantiate(n,c)})).then(n).catch((function(n){d("failed to asynchronously prepare wasm: "+n),me(n)}))}if("object"!=typeof WebAssembly)return d("no native wasm support detected"),!1;if(!(e.wasmMemory instanceof WebAssembly.Memory))return d("no native wasm Memory in use"),!1;if(n.memory=e.wasmMemory,c.global={NaN:NaN,Infinity:1/0},c["global.Math"]=Math,c.env=n,Y++,e.monitorRunDependencies&&e.monitorRunDependencies(Y),e.instantiateWasm)try{return e.instantiateWasm(c,r)}catch(n){return d("Module.instantiateWasm callback failed with error: "+n),!1}return e.wasmBinary||"function"!=typeof WebAssembly.instantiateStreaming||Q(s)||"function"!=typeof fetch?a(i):WebAssembly.instantiateStreaming(fetch(s,{credentials:"same-origin"}),c).then(i).catch((function(n){d("wasm streaming compile failed: "+n),d("falling back to ArrayBuffer instantiation"),a(i)})),{}}var o="aubio.wast",s="aubio.wasm",u="aubio.temp.asm.js";Q(o)||(o=f(o)),Q(s)||(s=f(s)),Q(u)||(u=f(u));var c={global:null,env:null,asm2wasm:y,parent:e},l=null;e.asmPreload=e.asm,e.reallocBuffer,e.reallocBuffer=function(n){var t;n:{var r=e.usingWasm?65536:16777216;if(0<n%r&&(n+=r-n%r),r=e.buffer.byteLength,e.usingWasm)try{t=-1!==e.wasmMemory.grow((n-r)/65536)?e.buffer=e.wasmMemory.buffer:null;break n}catch(n){t=null;break n}t=void 0}return t},e.asm=function(n,t){if(!t.table){void 0===(n=e.wasmTableSize)&&(n=1024);var i=e.wasmMaxTableSize;t.table="object"==typeof WebAssembly&&"function"==typeof WebAssembly.Table?void 0!==i?new WebAssembly.Table({initial:n,maximum:i,element:"anyfunc"}):new WebAssembly.Table({initial:n,element:"anyfunc"}):Array(n),e.wasmTable=t.table}return t.memoryBase||(t.memoryBase=e.STATIC_BASE),t.tableBase||(t.tableBase=0),g(t=r(t),"no binaryen method succeeded."),t}}(),W=(O=1024)+9312,U.push({B:function(){ue()}},{B:function(){le()}},{B:function(){ce()}},{B:function(){se()}}),e.STATIC_BASE=O,e.STATIC_BUMP=9312,W+=16;var nn=0;function en(){return C[(nn+=4)-4>>2]}var tn={};function rn(n,e){nn=e;try{var t=en(),r=en(),i=en();for(n=0,rn.J||(rn.J=[null,[],[]],rn.P=function(n,e){var t=rn.J[n];if(g(t),0===e||10===e){n=1===n?p:d;n:{for(var r=e=0;t[r];)++r;if(16<r-e&&t.subarray&&R)e=R.decode(t.subarray(e,r));else for(r="";;){var i=t[e++];if(!i){e=r;break n}if(128&i){var a=63&t[e++];if(192==(224&i))r+=String.fromCharCode((31&i)<<6|a);else{var o=63&t[e++];if(224==(240&i))i=(15&i)<<12|a<<6|o;else{var s=63&t[e++];if(240==(248&i))i=(7&i)<<18|a<<12|o<<6|s;else{var u=63&t[e++];if(248==(252&i))i=(3&i)<<24|a<<18|o<<12|s<<6|u;else i=(1&i)<<30|a<<24|o<<18|s<<12|u<<6|63&t[e++]}}65536>i?r+=String.fromCharCode(i):(i-=65536,r+=String.fromCharCode(55296|i>>10,56320|1023&i))}}else r+=String.fromCharCode(i)}}n(e),t.length=0}else t.push(e)}),e=0;e<i;e++){for(var a=C[r+8*e>>2],o=C[r+(8*e+4)>>2],s=0;s<o;s++)rn.P(t,w[a+s]);n+=o}return n}catch(n){return"undefined"!=typeof FS&&n instanceof FS.I||me(n),-n.L}}function an(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}var on=void 0;function sn(n){for(var e="";w[n];)e+=on[w[n++]];return e}var un={},cn={},ln={};function fn(n){if(void 0===n)return"_unknown";var e=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return 48<=e&&57>=e?"_"+n:n}function hn(n,e){return n=fn(n),new Function("body","return function "+n+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(e)}function pn(n){var e=Error,t=hn(n,(function(e){this.name=n,this.message=e,void 0!==(e=Error(e).stack)&&(this.stack=this.toString()+"\n"+e.replace(/^Error(:[^\n]*)?\n/,""))}));return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},t}var dn=void 0;function mn(n){throw new dn(n)}var yn=void 0;function vn(n){throw new yn(n)}function gn(n,e,t){function r(e){(e=t(e)).length!==n.length&&vn("Mismatched type converter count");for(var r=0;r<n.length;++r)_n(n[r],e[r])}n.forEach((function(n){ln[n]=e}));var i=Array(e.length),a=[],o=0;e.forEach((function(n,e){cn.hasOwnProperty(n)?i[e]=cn[n]:(a.push(n),un.hasOwnProperty(n)||(un[n]=[]),un[n].push((function(){i[e]=cn[n],++o===a.length&&r(i)})))})),0===a.length&&r(i)}function _n(n,e,t){if(t=t||{},!("argPackAdvance"in e))throw new TypeError("registerType registeredInstance requires argPackAdvance");var r=e.name;if(n||mn('type "'+r+'" must have a positive integer typeid pointer'),cn.hasOwnProperty(n)){if(t.X)return;mn("Cannot register type '"+r+"' twice")}cn[n]=e,delete ln[n],un.hasOwnProperty(n)&&(e=un[n],delete un[n],e.forEach((function(n){n()})))}function bn(n){mn(n.a.f.b.name+" instance already deleted")}var wn=void 0,An=[];function Tn(){for(;An.length;){var n=An.pop();n.a.s=!1,n.delete()}}function Cn(){}var En={};function Sn(n,e,t){if(void 0===n[e].j){var r=n[e];n[e]=function(){return n[e].j.hasOwnProperty(arguments.length)||mn("Function '"+t+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[e].j+")!"),n[e].j[arguments.length].apply(this,arguments)},n[e].j=[],n[e].j[r.A]=r}}function Pn(n,t){e.hasOwnProperty(n)?(mn("Cannot register public name '"+n+"' twice"),Sn(e,n,n),e.hasOwnProperty(void 0)&&mn("Cannot register multiple overloads of a function with the same number of arguments (undefined)!"),e[n].j[void 0]=t):e[n]=t}function On(n,e,t,r,i,a,o,s){this.name=n,this.constructor=e,this.u=t,this.o=r,this.i=i,this.T=a,this.w=o,this.S=s,this.Z=[]}function In(n,e,t){for(;e!==t;)e.w||mn("Expected null or instance of "+t.name+", got an instance of "+e.name),n=e.w(n),e=e.i;return n}function Wn(n,e){return null===e?(this.G&&mn("null is not a valid "+this.name),0):(e.a||mn('Cannot pass "'+Jn(e)+'" as a '+this.name),e.a.c||mn("Cannot pass deleted object as a pointer of type "+this.name),In(e.a.c,e.a.f.b,this.b))}function jn(n,e){if(null===e){if(this.G&&mn("null is not a valid "+this.name),this.D){var t=this.$();return null!==n&&n.push(this.o,t),t}return 0}if(e.a||mn('Cannot pass "'+Jn(e)+'" as a '+this.name),e.a.c||mn("Cannot pass deleted object as a pointer of type "+this.name),!this.C&&e.a.f.C&&mn("Cannot convert argument of type "+(e.a.h?e.a.h.name:e.a.f.name)+" to parameter type "+this.name),t=In(e.a.c,e.a.f.b,this.b),this.D)switch(void 0===e.a.g&&mn("Passing raw pointer to smart pointer is illegal"),this.ba){case 0:e.a.h===this?t=e.a.g:mn("Cannot convert argument of type "+(e.a.h?e.a.h.name:e.a.f.name)+" to parameter type "+this.name);break;case 1:t=e.a.g;break;case 2:if(e.a.h===this)t=e.a.g;else{var r=e.clone();t=this.aa(t,Yn((function(){r.delete()}))),null!==n&&n.push(this.o,t)}break;default:mn("Unsupporting sharing policy")}return t}function Bn(n,e){return null===e?(this.G&&mn("null is not a valid "+this.name),0):(e.a||mn('Cannot pass "'+Jn(e)+'" as a '+this.name),e.a.c||mn("Cannot pass deleted object as a pointer of type "+this.name),e.a.f.C&&mn("Cannot convert argument of type "+e.a.f.name+" to parameter type "+this.name),In(e.a.c,e.a.f.b,this.b))}function Mn(n){return this.fromWireType(E[n>>2])}function Fn(n,e,t){return e===t?n:void 0===t.i||null===(n=Fn(n,e,t.i))?null:t.S(n)}var Rn={};function Ln(n,e){for(void 0===e&&mn("ptr should not be undefined");n.i;)e=n.w(e),n=n.i;return Rn[e]}function kn(n,e){return e.f&&e.c||vn("makeClassHandle requires ptr and ptrType"),!!e.h!=!!e.g&&vn("Both smartPtrType and smartPtr must be specified"),e.count={value:1},Object.create(n,{a:{value:e}})}function xn(n,e,t,r,i,a,o,s,u,c,l){this.name=n,this.b=e,this.G=t,this.C=r,this.D=i,this.Y=a,this.ba=o,this.M=s,this.$=u,this.aa=c,this.o=l,i||void 0!==e.i?this.toWireType=jn:(this.toWireType=r?Wn:Bn,this.l=null)}function $n(n,t){e.hasOwnProperty(n)||vn("Replacing nonexistant public symbol"),e[n]=t,e[n].A=void 0}function Dn(n,t){if(n=sn(n),void 0!==e["FUNCTION_TABLE_"+n])var r=e["FUNCTION_TABLE_"+n][t];else if("undefined"!=typeof FUNCTION_TABLE)r=FUNCTION_TABLE[t];else{void 0===(r=e.asm["dynCall_"+n])&&(void 0===(r=e.asm["dynCall_"+n.replace(/f/g,"d")])&&mn("No dynCall invoker for signature: "+n));for(var i=[],a=1;a<n.length;++a)i.push("a"+a);a="return function dynCall_"+n+"_"+t+"("+i.join(", ")+") {\n",a+="    return dynCall(rawFunction"+(i.length?", ":"")+i.join(", ")+");\n",r=new Function("dynCall","rawFunction",a+"};\n")(r,t)}return"function"!=typeof r&&mn("unknown function pointer with signature "+n+": "+t),r}var Nn=void 0;function Un(n){var e=sn(n=fe(n));return he(n),e}function zn(n,e){var t=[],r={};throw e.forEach((function n(e){r[e]||cn[e]||(ln[e]?ln[e].forEach(n):(t.push(e),r[e]=!0))})),new Nn(n+": "+t.map(Un).join([", "]))}function Hn(n,e){for(var t=[],r=0;r<n;r++)t.push(C[(e>>2)+r]);return t}function Vn(n){for(;n.length;){var e=n.pop();n.pop()(e)}}function Gn(n){var e=Function;if(!(e instanceof Function))throw new TypeError("new_ called with constructor type "+typeof e+" which is not a function");var t=hn(e.name||"unknownFunctionName",(function(){}));return t.prototype=e.prototype,t=new t,(n=e.apply(t,n))instanceof Object?n:t}var qn=[],Kn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Xn(n){4<n&&0==--Kn[n].H&&(Kn[n]=void 0,qn.push(n))}function Yn(n){switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var e=qn.length?qn.pop():Kn.length;return Kn[e]={H:1,value:n},e}}function Jn(n){if(null===n)return"null";var e=typeof n;return"object"===e||"array"===e||"function"===e?n.toString():""+n}function Zn(n,e){switch(e){case 2:return function(n){return this.fromWireType(S[n>>2])};case 3:return function(n){return this.fromWireType(P[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function Qn(n,e,t){switch(e){case 0:return t?function(n){return b[n]}:function(n){return w[n]};case 1:return t?function(n){return A[n>>1]}:function(n){return T[n>>1]};case 2:return t?function(n){return C[n>>2]}:function(n){return E[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}function ne(n){return n||mn("Cannot use deleted val. handle = "+n),Kn[n].value}function ee(n,e){var t=cn[n];return void 0===t&&mn(e+" has unknown type "+Un(n)),t}for(var te={},re=Array(256),ie=0;256>ie;++ie)re[ie]=String.fromCharCode(ie);on=re,dn=e.BindingError=pn("BindingError"),yn=e.InternalError=pn("InternalError"),Cn.prototype.isAliasOf=function(n){if(!(this instanceof Cn&&n instanceof Cn))return!1;var e=this.a.f.b,t=this.a.c,r=n.a.f.b;for(n=n.a.c;e.i;)t=e.w(t),e=e.i;for(;r.i;)n=r.w(n),r=r.i;return e===r&&t===n},Cn.prototype.clone=function(){if(this.a.c||bn(this),this.a.v)return this.a.count.value+=1,this;var n=this.a;return(n=Object.create(Object.getPrototypeOf(this),{a:{value:{count:n.count,s:n.s,v:n.v,c:n.c,f:n.f,g:n.g,h:n.h}}})).a.count.value+=1,n.a.s=!1,n},Cn.prototype.delete=function(){if(this.a.c||bn(this),this.a.s&&!this.a.v&&mn("Object already scheduled for deletion"),--this.a.count.value,0===this.a.count.value){var n=this.a;n.g?n.h.o(n.g):n.f.b.o(n.c)}this.a.v||(this.a.g=void 0,this.a.c=void 0)},Cn.prototype.isDeleted=function(){return!this.a.c},Cn.prototype.deleteLater=function(){return this.a.c||bn(this),this.a.s&&!this.a.v&&mn("Object already scheduled for deletion"),An.push(this),1===An.length&&wn&&wn(Tn),this.a.s=!0,this},xn.prototype.U=function(n){return this.M&&(n=this.M(n)),n},xn.prototype.K=function(n){this.o&&this.o(n)},xn.prototype.argPackAdvance=8,xn.prototype.readValueFromPointer=Mn,xn.prototype.deleteObject=function(n){null!==n&&n.delete()},xn.prototype.fromWireType=function(n){function e(){return this.D?kn(this.b.u,{f:this.Y,c:t,h:this,g:n}):kn(this.b.u,{f:this,c:n})}var t=this.U(n);if(!t)return this.K(n),null;var r=Ln(this.b,t);if(void 0!==r)return 0===r.a.count.value?(r.a.c=t,r.a.g=n,r.clone()):(r=r.clone(),this.K(n),r);if(r=this.b.T(t),!(r=En[r]))return e.call(this);r=this.C?r.R:r.pointerType;var i=Fn(t,this.b,r.b);return null===i?e.call(this):this.D?kn(r.b.u,{f:r,c:i,h:this,g:n}):kn(r.b.u,{f:r,c:i})},e.getInheritedInstanceCount=function(){return Object.keys(Rn).length},e.getLiveInheritedInstances=function(){var n,e=[];for(n in Rn)Rn.hasOwnProperty(n)&&e.push(Rn[n]);return e},e.flushPendingDeletes=Tn,e.setDelayFunction=function(n){wn=n,An.length&&wn&&wn(Tn)},Nn=e.UnboundTypeError=pn("UnboundTypeError"),e.count_emval_handles=function(){for(var n=0,e=5;e<Kn.length;++e)void 0!==Kn[e]&&++n;return n},e.get_first_emval=function(){for(var n=5;n<Kn.length;++n)if(void 0!==Kn[n])return Kn[n];return null};var ae=W;F=ae,j=B=m(W=W+4+15&-16),M=m(j+x),C[F>>2]=M,e.wasmTableSize=83,e.wasmMaxTableSize=83,e.N={},e.O={abort:me,enlargeMemory:function(){k()},getTotalMemory:function(){return $},abortOnCannotGrowMemory:k,___setErrNo:function(n){return e.___errno_location&&(C[e.___errno_location()>>2]=n),n},___syscall140:function(n,e){nn=e;try{var t=tn.V();en();var r=en(),i=en(),a=en();return FS.ea(t,r,a),C[i>>2]=t.position,t.W&&0===r&&0===a&&(t.W=null),0}catch(n){return"undefined"!=typeof FS&&n instanceof FS.I||me(n),-n.L}},___syscall146:rn,___syscall54:function(n,e){return nn=e,0},___syscall6:function(n,e){nn=e;try{var t=tn.V();return FS.close(t),0}catch(n){return"undefined"!=typeof FS&&n instanceof FS.I||me(n),-n.L}},__embind_register_bool:function(n,e,t,r,i){var a=an(t);_n(n,{name:e=sn(e),fromWireType:function(n){return!!n},toWireType:function(n,e){return e?r:i},argPackAdvance:8,readValueFromPointer:function(n){if(1===t)var r=b;else if(2===t)r=A;else{if(4!==t)throw new TypeError("Unknown boolean type size: "+e);r=C}return this.fromWireType(r[n>>a])},l:null})},__embind_register_class:function(n,e,t,r,i,a,o,s,u,c,l,f,h){l=sn(l),a=Dn(i,a),s&&(s=Dn(o,s)),c&&(c=Dn(u,c)),h=Dn(f,h);var p=fn(l);Pn(p,(function(){zn("Cannot construct "+l+" due to unbound types",[r])})),gn([n,e,t],r?[r]:[],(function(e){if(e=e[0],r)var t=e.b,i=t.u;else i=Cn.prototype;e=hn(p,(function(){if(Object.getPrototypeOf(this)!==o)throw new dn("Use 'new' to construct "+l);if(void 0===u.m)throw new dn(l+" has no accessible constructor");var n=u.m[arguments.length];if(void 0===n)throw new dn("Tried to invoke ctor of "+l+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(u.m).toString()+") parameters instead!");return n.apply(this,arguments)}));var o=Object.create(i,{constructor:{value:e}});e.prototype=o;var u=new On(l,e,o,h,t,a,s,c);t=new xn(l,u,!0,!1,!1),i=new xn(l+"*",u,!1,!1,!1);var f=new xn(l+" const*",u,!1,!0,!1);return En[n]={pointerType:i,R:f},$n(p,e),[t,i,f]}))},__embind_register_class_constructor:function(n,e,t,r,i,a){var o=Hn(e,t);i=Dn(r,i),gn([],[n],(function(n){var t="constructor "+(n=n[0]).name;if(void 0===n.b.m&&(n.b.m=[]),void 0!==n.b.m[e-1])throw new dn("Cannot register multiple constructors with identical number of parameters ("+(e-1)+") for class '"+n.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return n.b.m[e-1]=function(){zn("Cannot construct "+n.name+" due to unbound types",o)},gn([],o,(function(r){return n.b.m[e-1]=function(){arguments.length!==e-1&&mn(t+" called with "+arguments.length+" arguments, expected "+(e-1));var n=[],o=Array(e);o[0]=a;for(var s=1;s<e;++s)o[s]=r[s].toWireType(n,arguments[s-1]);return o=i.apply(null,o),Vn(n),r[0].fromWireType(o)},[]})),[]}))},__embind_register_class_function:function(n,e,t,r,i,a,o,s){var u=Hn(t,r);e=sn(e),a=Dn(i,a),gn([],[n],(function(n){function r(){zn("Cannot call "+i+" due to unbound types",u)}var i=(n=n[0]).name+"."+e;s&&n.b.Z.push(e);var c=n.b.u,l=c[e];return void 0===l||void 0===l.j&&l.className!==n.name&&l.A===t-2?(r.A=t-2,r.className=n.name,c[e]=r):(Sn(c,e,i),c[e].j[t-2]=r),gn([],u,(function(r){var s=i,u=n,l=a,f=r.length;2>f&&mn("argTypes array size mismatch! Must at least get return value and 'this' types!");var h=null!==r[1]&&null!==u,p=!1;for(u=1;u<r.length;++u)if(null!==r[u]&&void 0===r[u].l){p=!0;break}var d="void"!==r[0].name,m="",y="";for(u=0;u<f-2;++u)m+=(0!==u?", ":"")+"arg"+u,y+=(0!==u?", ":"")+"arg"+u+"Wired";s="return function "+fn(s)+"("+m+") {\nif (arguments.length !== "+(f-2)+") {\nthrowBindingError('function "+s+" called with ' + arguments.length + ' arguments, expected "+(f-2)+" args!');\n}\n",p&&(s+="var destructors = [];\n");var v=p?"destructors":"null";for(m="throwBindingError invoker fn runDestructors retType classParam".split(" "),l=[mn,l,o,Vn,r[0],r[1]],h&&(s+="var thisWired = classParam.toWireType("+v+", this);\n"),u=0;u<f-2;++u)s+="var arg"+u+"Wired = argType"+u+".toWireType("+v+", arg"+u+"); // "+r[u+2].name+"\n",m.push("argType"+u),l.push(r[u+2]);if(h&&(y="thisWired"+(0<y.length?", ":"")+y),s+=(d?"var rv = ":"")+"invoker(fn"+(0<y.length?", ":"")+y+");\n",p)s+="runDestructors(destructors);\n";else for(u=h?1:2;u<r.length;++u)f=1===u?"thisWired":"arg"+(u-2)+"Wired",null!==r[u].l&&(s+=f+"_dtor("+f+"); // "+r[u].name+"\n",m.push(f+"_dtor"),l.push(r[u].l));return d&&(s+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),m.push(s+"}\n"),r=Gn(m).apply(null,l),void 0===c[e].j?(r.A=t-2,c[e]=r):c[e].j[t-2]=r,[]})),[]}))},__embind_register_emval:function(n,e){_n(n,{name:e=sn(e),fromWireType:function(n){var e=Kn[n].value;return Xn(n),e},toWireType:function(n,e){return Yn(e)},argPackAdvance:8,readValueFromPointer:Mn,l:null})},__embind_register_float:function(n,e,t){t=an(t),_n(n,{name:e=sn(e),fromWireType:function(n){return n},toWireType:function(n,e){if("number"!=typeof e&&"boolean"!=typeof e)throw new TypeError('Cannot convert "'+Jn(e)+'" to '+this.name);return e},argPackAdvance:8,readValueFromPointer:Zn(e,t),l:null})},__embind_register_integer:function(n,e,t,r,i){function a(n){return n}e=sn(e),-1===i&&(i=4294967295);var o=an(t);if(0===r){var s=32-8*t;a=function(n){return n<<s>>>s}}var u=-1!=e.indexOf("unsigned");_n(n,{name:e,fromWireType:a,toWireType:function(n,t){if("number"!=typeof t&&"boolean"!=typeof t)throw new TypeError('Cannot convert "'+Jn(t)+'" to '+this.name);if(t<r||t>i)throw new TypeError('Passing a number "'+Jn(t)+'" from JS side to C/C++ side to an argument of type "'+e+'", which is outside the valid range ['+r+", "+i+"]!");return u?t>>>0:0|t},argPackAdvance:8,readValueFromPointer:Qn(e,o,0!==r),l:null})},__embind_register_memory_view:function(n,e,t){function r(n){n>>=2;var e=E;return new i(e.buffer,e[n+1],e[n])}var i=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][e];_n(n,{name:t=sn(t),fromWireType:r,argPackAdvance:8,readValueFromPointer:r},{X:!0})},__embind_register_std_string:function(n,e){_n(n,{name:e=sn(e),fromWireType:function(n){for(var e=E[n>>2],t=Array(e),r=0;r<e;++r)t[r]=String.fromCharCode(w[n+4+r]);return he(n),t.join("")},toWireType:function(n,e){function t(n,e){return n[e]}var r;e instanceof ArrayBuffer&&(e=new Uint8Array(e)),e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array?r=t:"string"==typeof e?r=function(n,e){return n.charCodeAt(e)}:mn("Cannot pass non-string to std::string");var i=e.length,a=pe(4+i);E[a>>2]=i;for(var o=0;o<i;++o){var s=r(e,o);255<s&&(he(a),mn("String has UTF-16 code units that do not fit in 8 bits")),w[a+4+o]=s}return null!==n&&n.push(he,a),a},argPackAdvance:8,readValueFromPointer:Mn,l:function(n){he(n)}})},__embind_register_std_wstring:function(n,e,t){if(t=sn(t),2===e)var r=function(){return T},i=1;else 4===e&&(r=function(){return E},i=2);_n(n,{name:t,fromWireType:function(n){for(var e=r(),t=E[n>>2],a=Array(t),o=n+4>>i,s=0;s<t;++s)a[s]=String.fromCharCode(e[o+s]);return he(n),a.join("")},toWireType:function(n,t){var a=r(),o=t.length,s=pe(4+o*e);E[s>>2]=o;for(var u=s+4>>i,c=0;c<o;++c)a[u+c]=t.charCodeAt(c);return null!==n&&n.push(he,s),s},argPackAdvance:8,readValueFromPointer:Mn,l:function(n){he(n)}})},__embind_register_void:function(n,e){_n(n,{da:!0,name:e=sn(e),argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},__emval_as:function(n,e,t){n=ne(n),e=ee(e,"emval::as");var r=[],i=Yn(r);return C[t>>2]=i,e.toWireType(r,n)},__emval_decref:Xn,__emval_get_property:function(n,e){return Yn((n=ne(n))[e=ne(e)])},__emval_incref:function(n){4<n&&(Kn[n].H+=1)},__emval_new_array:function(){return Yn([])},__emval_new_cstring:function(n){var e=te[n];return Yn(void 0===e?sn(n):e)},__emval_new_object:function(){return Yn({})},__emval_run_destructors:function(n){Vn(Kn[n].value),Xn(n)},__emval_set_property:function(n,e,t){n=ne(n),e=ne(e),t=ne(t),n[e]=t},__emval_take_value:function(n,e){return Yn(n=(n=ee(n,"_emval_take_value")).readValueFromPointer(e))},_abort:function(){e.abort()},_emscripten_memcpy_big:function(n,e,t){return w.set(w.subarray(e,e+t),n),n},_llvm_cos_f32:K,_llvm_log10_f32:function(n){return Math.log(n)/Math.LN10},_llvm_sin_f32:X,DYNAMICTOP_PTR:F,STACKTOP:B};var oe=e.asm(e.N,e.O,_);e.asm=oe;var se=e.__GLOBAL__sub_I_bind_cpp=function(){return e.asm.__GLOBAL__sub_I_bind_cpp.apply(null,arguments)},ue=e.__GLOBAL__sub_I_fft_cc=function(){return e.asm.__GLOBAL__sub_I_fft_cc.apply(null,arguments)},ce=e.__GLOBAL__sub_I_pitch_cc=function(){return e.asm.__GLOBAL__sub_I_pitch_cc.apply(null,arguments)},le=e.__GLOBAL__sub_I_tempo_cc=function(){return e.asm.__GLOBAL__sub_I_tempo_cc.apply(null,arguments)},fe=e.___getTypeName=function(){return e.asm.___getTypeName.apply(null,arguments)},he=e._free=function(){return e.asm._free.apply(null,arguments)},pe=e._malloc=function(){return e.asm._malloc.apply(null,arguments)};function de(){function n(){if(!e.calledRun&&(e.calledRun=!0,!v)){if(G||(G=!0,D(U)),D(z),e.onRuntimeInitialized&&e.onRuntimeInitialized(),e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var n=e.postRun.shift();H.unshift(n)}D(H)}}if(!(0<Y)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)q();D(N),0<Y||e.calledRun||(e.setStatus?(e.setStatus("Running..."),setTimeout((function(){setTimeout((function(){e.setStatus("")}),1),n()}),1)):n())}}function me(n){throw e.onAbort&&e.onAbort(n),void 0!==n?(p(n),d(n),n=JSON.stringify(n)):n="",v=!0,"abort("+n+"). Build with -s ASSERTIONS=1 for more info."}if(e.dynCall_ffii=function(){return e.asm.dynCall_ffii.apply(null,arguments)},e.dynCall_fi=function(){return e.asm.dynCall_fi.apply(null,arguments)},e.dynCall_fii=function(){return e.asm.dynCall_fii.apply(null,arguments)},e.dynCall_fiii=function(){return e.asm.dynCall_fiii.apply(null,arguments)},e.dynCall_ii=function(){return e.asm.dynCall_ii.apply(null,arguments)},e.dynCall_iii=function(){return e.asm.dynCall_iii.apply(null,arguments)},e.dynCall_iiii=function(){return e.asm.dynCall_iiii.apply(null,arguments)},e.dynCall_iiiii=function(){return e.asm.dynCall_iiiii.apply(null,arguments)},e.dynCall_iiiiii=function(){return e.asm.dynCall_iiiiii.apply(null,arguments)},e.dynCall_v=function(){return e.asm.dynCall_v.apply(null,arguments)},e.dynCall_vi=function(){return e.asm.dynCall_vi.apply(null,arguments)},e.dynCall_viii=function(){return e.asm.dynCall_viii.apply(null,arguments)},e.asm=oe,e.then=function(n){if(e.calledRun)n(e);else{var t=e.onRuntimeInitialized;e.onRuntimeInitialized=function(){t&&t(),n(e)}}return e},J=function n(){e.calledRun||de(),e.calledRun||(J=n)},e.run=de,e.abort=me,e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();return e.noExitRuntime=!0,de(),n};t=t.bind({_currentScript:"undefined"!=typeof document?document.currentScript:void 0}),n.exports=t}));function tn(n){let e,t,h,m,v,C,E,S,O,I,W,j,B,M,F,R,L,k,x,D;return m=new H({props:{deg:45}}),C=new $({}),{c(){e=r("div"),t=r("canvas"),h=a(),_(m.$$.fragment),v=a(),_(C.$$.fragment),E=a(),S=r("div"),O=r("span"),I=i("Hz"),W=a(),j=r("div"),B=i("A"),M=r("sub"),F=i("4"),R=i(" = "),L=r("span"),k=i("440"),x=i(" Hz"),this.h()},l(n){e=o(n,"DIV",{style:!0});var r=s(e);t=o(r,"CANVAS",{class:!0}),s(t).forEach(l),h=c(r),b(m.$$.fragment,r),v=c(r),b(C.$$.fragment,r),E=c(r),S=o(r,"DIV",{class:!0});var i=s(S);O=o(i,"SPAN",{});var a=s(O);I=u(a,"Hz"),a.forEach(l),i.forEach(l),W=c(r),j=o(r,"DIV",{class:!0});var f=s(j);B=u(f,"A"),M=o(f,"SUB",{});var p=s(M);F=u(p,"4"),p.forEach(l),R=u(f," = "),L=o(f,"SPAN",{});var d=s(L);k=u(d,"440"),d.forEach(l),x=u(f," Hz"),f.forEach(l),r.forEach(l),this.h()},h(){f(t,"class","frequency-bars"),f(S,"class","frequency"),f(j,"class","a4"),P(e,"height","100%"),P(e,"width","100%")},m(n,r){p(n,e,r),d(e,t),d(e,h),w(m,e,null),d(e,v),w(C,e,null),d(e,E),d(e,S),d(S,O),d(O,I),d(e,W),d(e,j),d(j,B),d(j,M),d(M,F),d(j,R),d(j,L),d(L,k),d(j,x),D=!0},p:y,i(n){D||(g(m.$$.fragment,n),g(C.$$.fragment,n),D=!0)},o(n){A(m.$$.fragment,n),A(C.$$.fragment,n),D=!1},d(n){n&&l(e),T(m),T(C)}}}function rn(n){const e=null,t=new window.AudioContext,r=t.createAnalyser(),i=t.createScriptProcessor(4096,1,1),a=()=>{navigator.mediaDevices.getUserMedia({audio:!0}).then((function(n){t.createMediaStreamSource(n).connect(r),r.connect(i),i.connect(t.destination),i.addEventListener("audioprocess",(function(n){const t=e.do(n.inputBuffer.getChannelData(0));if(t&&onNoteDetected){const n=function(n){const e=Math.log(n/middleA)/Math.log(2)*12;return Math.round(e)+semitone}(t);console.log("note",n)}}))})).catch((function(n){alert(n.name+": "+n.message)}))};return en().then((function(n){e=new n.Pitch("default",4096,1,t.sampleRate),a()})),[]}export default class extends n{constructor(n){super(),e(this,n,rn,tn,t,{})}}