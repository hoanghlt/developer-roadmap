import{a as _,T as q}from"./jwt.2bcbdb7f.js";var D=function(){return D=Object.assign||function(t){for(var n,a=1,i=arguments.length;a<i;a++){n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},D.apply(this,arguments)};function Z(e,t,n,a){function i(r){return r instanceof n?r:new n(function(o){o(r)})}return new(n||(n=Promise))(function(r,o){function c(u){try{s(a.next(u))}catch(f){o(f)}}function l(u){try{s(a.throw(u))}catch(f){o(f)}}function s(u){u.done?r(u.value):i(u.value).then(c,l)}s((a=a.apply(e,t||[])).next())})}function F(e,t){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},a,i,r,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(s){return function(u){return l([s,u])}}function l(s){if(a)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(n=0)),n;)try{if(a=1,i&&(r=s[0]&2?i.return:s[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,s[1])).done)return r;switch(i=0,r&&(s=[s[0]&2,r.value]),s[0]){case 0:case 1:r=s;break;case 4:return n.label++,{value:s[1],done:!1};case 5:n.label++,i=s[1],s=[0];continue;case 7:s=n.ops.pop(),n.trys.pop();continue;default:if(r=n.trys,!(r=r.length>0&&r[r.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!r||s[1]>r[0]&&s[1]<r[3])){n.label=s[1];break}if(s[0]===6&&n.label<r[1]){n.label=r[1],r=s;break}if(r&&n.label<r[2]){n.label=r[2],n.ops.push(s);break}r[2]&&n.ops.pop(),n.trys.pop();continue}s=t.call(e,n)}catch(u){s=[6,u],i=0}finally{a=r=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}}function le(e,t,n){if(n||arguments.length===2)for(var a=0,i=t.length,r;a<i;a++)(r||!(a in t))&&(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}var fe="3.4.1";function G(e,t){return new Promise(function(n){return setTimeout(n,e,t)})}function Se(e,t){t===void 0&&(t=1/0);var n=window.requestIdleCallback;return n?new Promise(function(a){return n.call(window,function(){return a()},{timeout:t})}):G(Math.min(e,t))}function de(e){return!!e&&typeof e.then=="function"}function $(e,t){try{var n=e();de(n)?n.then(function(a){return t(!0,a)},function(a){return t(!1,a)}):t(!0,n)}catch(a){t(!1,a)}}function ee(e,t,n){return n===void 0&&(n=16),Z(this,void 0,void 0,function(){var a,i,r;return F(this,function(o){switch(o.label){case 0:a=Date.now(),i=0,o.label=1;case 1:return i<e.length?(t(e[i],i),r=Date.now(),r>=a+n?(a=r,[4,G(0)]):[3,3]):[3,4];case 2:o.sent(),o.label=3;case 3:return++i,[3,1];case 4:return[2]}})})}function T(e){e.then(void 0,function(){})}function R(e,t){e=[e[0]>>>16,e[0]&65535,e[1]>>>16,e[1]&65535],t=[t[0]>>>16,t[0]&65535,t[1]>>>16,t[1]&65535];var n=[0,0,0,0];return n[3]+=e[3]+t[3],n[2]+=n[3]>>>16,n[3]&=65535,n[2]+=e[2]+t[2],n[1]+=n[2]>>>16,n[2]&=65535,n[1]+=e[1]+t[1],n[0]+=n[1]>>>16,n[1]&=65535,n[0]+=e[0]+t[0],n[0]&=65535,[n[0]<<16|n[1],n[2]<<16|n[3]]}function x(e,t){e=[e[0]>>>16,e[0]&65535,e[1]>>>16,e[1]&65535],t=[t[0]>>>16,t[0]&65535,t[1]>>>16,t[1]&65535];var n=[0,0,0,0];return n[3]+=e[3]*t[3],n[2]+=n[3]>>>16,n[3]&=65535,n[2]+=e[2]*t[3],n[1]+=n[2]>>>16,n[2]&=65535,n[2]+=e[3]*t[2],n[1]+=n[2]>>>16,n[2]&=65535,n[1]+=e[1]*t[3],n[0]+=n[1]>>>16,n[1]&=65535,n[1]+=e[2]*t[2],n[0]+=n[1]>>>16,n[1]&=65535,n[1]+=e[3]*t[1],n[0]+=n[1]>>>16,n[1]&=65535,n[0]+=e[0]*t[3]+e[1]*t[2]+e[2]*t[1]+e[3]*t[0],n[0]&=65535,[n[0]<<16|n[1],n[2]<<16|n[3]]}function A(e,t){return t%=64,t===32?[e[1],e[0]]:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t|e[0]>>>32-t]:(t-=32,[e[1]<<t|e[0]>>>32-t,e[0]<<t|e[1]>>>32-t])}function L(e,t){return t%=64,t===0?e:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t]:[e[1]<<t-32,0]}function w(e,t){return[e[0]^t[0],e[1]^t[1]]}function te(e){return e=w(e,[0,e[0]>>>1]),e=x(e,[4283543511,3981806797]),e=w(e,[0,e[0]>>>1]),e=x(e,[3301882366,444984403]),e=w(e,[0,e[0]>>>1]),e}function Le(e,t){e=e||"",t=t||0;var n=e.length%16,a=e.length-n,i=[0,t],r=[0,t],o=[0,0],c=[0,0],l=[2277735313,289559509],s=[1291169091,658871167],u;for(u=0;u<a;u=u+16)o=[e.charCodeAt(u+4)&255|(e.charCodeAt(u+5)&255)<<8|(e.charCodeAt(u+6)&255)<<16|(e.charCodeAt(u+7)&255)<<24,e.charCodeAt(u)&255|(e.charCodeAt(u+1)&255)<<8|(e.charCodeAt(u+2)&255)<<16|(e.charCodeAt(u+3)&255)<<24],c=[e.charCodeAt(u+12)&255|(e.charCodeAt(u+13)&255)<<8|(e.charCodeAt(u+14)&255)<<16|(e.charCodeAt(u+15)&255)<<24,e.charCodeAt(u+8)&255|(e.charCodeAt(u+9)&255)<<8|(e.charCodeAt(u+10)&255)<<16|(e.charCodeAt(u+11)&255)<<24],o=x(o,l),o=A(o,31),o=x(o,s),i=w(i,o),i=A(i,27),i=R(i,r),i=R(x(i,[0,5]),[0,1390208809]),c=x(c,s),c=A(c,33),c=x(c,l),r=w(r,c),r=A(r,31),r=R(r,i),r=R(x(r,[0,5]),[0,944331445]);switch(o=[0,0],c=[0,0],n){case 15:c=w(c,L([0,e.charCodeAt(u+14)],48));case 14:c=w(c,L([0,e.charCodeAt(u+13)],40));case 13:c=w(c,L([0,e.charCodeAt(u+12)],32));case 12:c=w(c,L([0,e.charCodeAt(u+11)],24));case 11:c=w(c,L([0,e.charCodeAt(u+10)],16));case 10:c=w(c,L([0,e.charCodeAt(u+9)],8));case 9:c=w(c,[0,e.charCodeAt(u+8)]),c=x(c,s),c=A(c,33),c=x(c,l),r=w(r,c);case 8:o=w(o,L([0,e.charCodeAt(u+7)],56));case 7:o=w(o,L([0,e.charCodeAt(u+6)],48));case 6:o=w(o,L([0,e.charCodeAt(u+5)],40));case 5:o=w(o,L([0,e.charCodeAt(u+4)],32));case 4:o=w(o,L([0,e.charCodeAt(u+3)],24));case 3:o=w(o,L([0,e.charCodeAt(u+2)],16));case 2:o=w(o,L([0,e.charCodeAt(u+1)],8));case 1:o=w(o,[0,e.charCodeAt(u)]),o=x(o,l),o=A(o,31),o=x(o,s),i=w(i,o)}return i=w(i,[0,e.length]),r=w(r,[0,e.length]),i=R(i,r),r=R(r,i),i=te(i),r=te(r),i=R(i,r),r=R(r,i),("00000000"+(i[0]>>>0).toString(16)).slice(-8)+("00000000"+(i[1]>>>0).toString(16)).slice(-8)+("00000000"+(r[0]>>>0).toString(16)).slice(-8)+("00000000"+(r[1]>>>0).toString(16)).slice(-8)}function xe(e){var t;return D({name:e.name,message:e.message,stack:(t=e.stack)===null||t===void 0?void 0:t.split(`
`)},e)}function Ve(e,t){for(var n=0,a=e.length;n<a;++n)if(e[n]===t)return!0;return!1}function Ce(e,t){return!Ve(e,t)}function O(e){return parseInt(e)}function V(e){return parseFloat(e)}function W(e,t){return typeof e=="number"&&isNaN(e)?t:e}function C(e){return e.reduce(function(t,n){return t+(n?1:0)},0)}function me(e,t){if(t===void 0&&(t=1),Math.abs(t)>=1)return Math.round(e/t)*t;var n=1/t;return Math.round(e*n)/n}function ke(e){for(var t,n,a="Unexpected syntax '".concat(e,"'"),i=/^\s*([a-z-]*)(.*)$/i.exec(e),r=i[1]||void 0,o={},c=/([.:#][\w-]+|\[.+?\])/gi,l=function(d,p){o[d]=o[d]||[],o[d].push(p)};;){var s=c.exec(i[2]);if(!s)break;var u=s[0];switch(u[0]){case".":l("class",u.slice(1));break;case"#":l("id",u.slice(1));break;case"[":{var f=/^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(u);if(f)l(f[1],(n=(t=f[4])!==null&&t!==void 0?t:f[5])!==null&&n!==void 0?n:"");else throw new Error(a);break}default:throw new Error(a)}}return[r,o]}function ne(e){return e&&typeof e=="object"&&"message"in e?e:{message:e}}function Fe(e){return typeof e!="function"}function We(e,t){var n=new Promise(function(a){var i=Date.now();$(e.bind(null,t),function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];var c=Date.now()-i;if(!r[0])return a(function(){return{error:ne(r[1]),duration:c}});var l=r[1];if(Fe(l))return a(function(){return{value:l,duration:c}});a(function(){return new Promise(function(s){var u=Date.now();$(l,function(){for(var f=[],d=0;d<arguments.length;d++)f[d]=arguments[d];var p=c+Date.now()-u;if(!f[0])return s({error:ne(f[1]),duration:p});s({value:f[1],duration:p})})})})})});return T(n),function(){return n.then(function(i){return i()})}}function Ze(e,t,n){var a=Object.keys(e).filter(function(r){return Ce(n,r)}),i=Array(a.length);return ee(a,function(r,o){i[o]=We(e[r],t)}),function(){return Z(this,void 0,void 0,function(){var o,c,l,s,u,f,d;return F(this,function(p){switch(p.label){case 0:for(o={},c=0,l=a;c<l.length;c++)s=l[c],o[s]=void 0;u=Array(a.length),f=function(){var v;return F(this,function(g){switch(g.label){case 0:return v=!0,[4,ee(a,function(y,h){if(!u[h])if(i[h]){var k=i[h]().then(function(I){return o[y]=I});T(k),u[h]=k}else v=!1})];case 1:return g.sent(),v?[2,"break"]:[4,G(1)];case 2:return g.sent(),[2]}})},p.label=1;case 1:return[5,f()];case 2:if(d=p.sent(),d==="break")return[3,4];p.label=3;case 3:return[3,1];case 4:return[4,Promise.all(u)];case 5:return p.sent(),[2,o]}})})}}function ve(){var e=window,t=navigator;return C(["MSCSSMatrix"in e,"msSetImmediate"in e,"msIndexedDB"in e,"msMaxTouchPoints"in t,"msPointerEnabled"in t])>=4}function Re(){var e=window,t=navigator;return C(["msWriteProfilerMark"in e,"MSStream"in e,"msLaunchUri"in t,"msSaveBlob"in t])>=3&&!ve()}function Q(){var e=window,t=navigator;return C(["webkitPersistentStorage"in t,"webkitTemporaryStorage"in t,t.vendor.indexOf("Google")===0,"webkitResolveLocalFileSystemURL"in e,"BatteryManager"in e,"webkitMediaStream"in e,"webkitSpeechGrammar"in e])>=5}function Y(){var e=window,t=navigator;return C(["ApplePayError"in e,"CSSPrimitiveValue"in e,"Counter"in e,t.vendor.indexOf("Apple")===0,"getStorageUpdates"in t,"WebKitMediaKeys"in e])>=4}function U(){var e=window;return C(["safari"in e,!("DeviceMotionEvent"in e),!("ongestureend"in e),!("standalone"in navigator)])>=3}function Ae(){var e,t,n=window;return C(["buildID"in navigator,"MozAppearance"in((t=(e=document.documentElement)===null||e===void 0?void 0:e.style)!==null&&t!==void 0?t:{}),"onmozfullscreenchange"in n,"mozInnerScreenX"in n,"CSSMozDocumentRule"in n,"CanvasCaptureMediaStream"in n])>=4}function Me(){var e=window;return C([!("MediaSettingsRange"in e),"RTCEncodedAudioFrame"in e,""+e.Intl=="[object Intl]",""+e.Reflect=="[object Reflect]"])>=3}function Xe(){var e=window;return C(["DOMRectList"in e,"RTCPeerConnectionIceEvent"in e,"SVGGeometryElement"in e,"ontransitioncancel"in e])>=3}function Ge(){if(navigator.platform==="iPad")return!0;var e=screen,t=e.width/e.height;return C(["MediaSource"in window,!!Element.prototype.webkitRequestFullscreen,t>.65&&t<1.53])>=2}function Ie(){var e=document;return e.fullscreenElement||e.msFullscreenElement||e.mozFullScreenElement||e.webkitFullscreenElement||null}function Ye(){var e=document;return(e.exitFullscreen||e.msExitFullscreen||e.mozCancelFullScreen||e.webkitExitFullscreen).call(e)}function he(){var e=Q(),t=Ae();if(!e&&!t)return!1;var n=window;return C(["onorientationchange"in n,"orientation"in n,e&&!("SharedWorker"in n),t&&/android/i.test(navigator.appVersion)])>=2}function je(){var e=window,t=e.OfflineAudioContext||e.webkitOfflineAudioContext;if(!t)return-2;if(Pe())return-1;var n=4500,a=5e3,i=new t(1,a,44100),r=i.createOscillator();r.type="triangle",r.frequency.value=1e4;var o=i.createDynamicsCompressor();o.threshold.value=-50,o.knee.value=40,o.ratio.value=12,o.attack.value=0,o.release.value=.25,r.connect(o),o.connect(i.destination),r.start(0);var c=Te(i),l=c[0],s=c[1],u=l.then(function(f){return Je(f.getChannelData(0).subarray(n))},function(f){if(f.name==="timeout"||f.name==="suspended")return-3;throw f});return T(u),function(){return s(),u}}function Pe(){return Y()&&!U()&&!Xe()}function Te(e){var t=3,n=500,a=500,i=5e3,r=function(){},o=new Promise(function(c,l){var s=!1,u=0,f=0;e.oncomplete=function(v){return c(v.renderedBuffer)};var d=function(){setTimeout(function(){return l(re("timeout"))},Math.min(a,f+i-Date.now()))},p=function(){try{var v=e.startRendering();switch(de(v)&&T(v),e.state){case"running":f=Date.now(),s&&d();break;case"suspended":document.hidden||u++,s&&u>=t?l(re("suspended")):setTimeout(p,n);break}}catch(g){l(g)}};p(),r=function(){s||(s=!0,f>0&&d())}});return[o,r]}function Je(e){for(var t=0,n=0;n<e.length;++n)t+=Math.abs(e[n]);return t}function re(e){var t=new Error(e);return t.name=e,t}function pe(e,t,n){var a,i,r;return n===void 0&&(n=50),Z(this,void 0,void 0,function(){var o,c;return F(this,function(l){switch(l.label){case 0:o=document,l.label=1;case 1:return o.body?[3,3]:[4,G(n)];case 2:return l.sent(),[3,1];case 3:c=o.createElement("iframe"),l.label=4;case 4:return l.trys.push([4,,10,11]),[4,new Promise(function(s,u){var f=!1,d=function(){f=!0,s()},p=function(y){f=!0,u(y)};c.onload=d,c.onerror=p;var v=c.style;v.setProperty("display","block","important"),v.position="absolute",v.top="0",v.left="0",v.visibility="hidden",t&&"srcdoc"in c?c.srcdoc=t:c.src="about:blank",o.body.appendChild(c);var g=function(){var y,h;f||(((h=(y=c.contentWindow)===null||y===void 0?void 0:y.document)===null||h===void 0?void 0:h.readyState)==="complete"?d():setTimeout(g,10))};g()})];case 5:l.sent(),l.label=6;case 6:return!((i=(a=c.contentWindow)===null||a===void 0?void 0:a.document)===null||i===void 0)&&i.body?[3,8]:[4,G(n)];case 7:return l.sent(),[3,6];case 8:return[4,e(c,c.contentWindow)];case 9:return[2,l.sent()];case 10:return(r=c.parentNode)===null||r===void 0||r.removeChild(c),[7];case 11:return[2]}})})}function Ne(e){for(var t=ke(e),n=t[0],a=t[1],i=document.createElement(n??"div"),r=0,o=Object.keys(a);r<o.length;r++){var c=o[r],l=a[c].join(" ");c==="style"?He(i.style,l):i.setAttribute(c,l)}return i}function He(e,t){for(var n=0,a=t.split(";");n<a.length;n++){var i=a[n],r=/^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(i);if(r){var o=r[1],c=r[2],l=r[4];e.setProperty(o,c,l||"")}}}var ze="mmMwWLliI0O&1",De="48px",M=["monospace","sans-serif","serif"],ae=["sans-serif-thin","ARNO PRO","Agency FB","Arabic Typesetting","Arial Unicode MS","AvantGarde Bk BT","BankGothic Md BT","Batang","Bitstream Vera Sans Mono","Calibri","Century","Century Gothic","Clarendon","EUROSTILE","Franklin Gothic","Futura Bk BT","Futura Md BT","GOTHAM","Gill Sans","HELV","Haettenschweiler","Helvetica Neue","Humanst521 BT","Leelawadee","Letter Gothic","Levenim MT","Lucida Bright","Lucida Sans","Menlo","MS Mincho","MS Outlook","MS Reference Specialty","MS UI Gothic","MT Extra","MYRIAD PRO","Marlett","Meiryo UI","Microsoft Uighur","Minion Pro","Monotype Corsiva","PMingLiU","Pristina","SCRIPTINA","Segoe UI Light","Serifa","SimHei","Small Fonts","Staccato222 BT","TRAJAN PRO","Univers CE 55 Medium","Vrinda","ZWAdobeF"];function Ee(){return pe(function(e,t){var n=t.document,a=n.body;a.style.fontSize=De;var i=n.createElement("div"),r={},o={},c=function(g){var y=n.createElement("span"),h=y.style;return h.position="absolute",h.top="0",h.left="0",h.fontFamily=g,y.textContent=ze,i.appendChild(y),y},l=function(g,y){return c("'".concat(g,"',").concat(y))},s=function(){return M.map(c)},u=function(){for(var g={},y=function(j){g[j]=M.map(function(J){return l(j,J)})},h=0,k=ae;h<k.length;h++){var I=k[h];y(I)}return g},f=function(g){return M.some(function(y,h){return g[h].offsetWidth!==r[y]||g[h].offsetHeight!==o[y]})},d=s(),p=u();a.appendChild(i);for(var v=0;v<M.length;v++)r[M[v]]=d[v].offsetWidth,o[M[v]]=d[v].offsetHeight;return ae.filter(function(g){return f(p[g])})})}function Be(){var e=navigator.plugins;if(e){for(var t=[],n=0;n<e.length;++n){var a=e[n];if(a){for(var i=[],r=0;r<a.length;++r){var o=a[r];i.push({type:o.type,suffixes:o.suffixes})}t.push({name:a.name,description:a.description,mimeTypes:i})}}return t}}function Oe(){var e=!1,t,n,a=Qe(),i=a[0],r=a[1];if(!Ue(i,r))t=n="";else{e=Ke(r),_e(i,r);var o=N(i),c=N(i);o!==c?t=n="unstable":(n=o,qe(i,r),t=N(i))}return{winding:e,geometry:t,text:n}}function Qe(){var e=document.createElement("canvas");return e.width=1,e.height=1,[e,e.getContext("2d")]}function Ue(e,t){return!!(t&&e.toDataURL)}function Ke(e){return e.rect(0,0,10,10),e.rect(2,2,6,6),!e.isPointInPath(5,5,"evenodd")}function _e(e,t){e.width=240,e.height=60,t.textBaseline="alphabetic",t.fillStyle="#f60",t.fillRect(100,1,62,20),t.fillStyle="#069",t.font='11pt "Times New Roman"';var n="Cwm fjordbank gly ".concat(String.fromCharCode(55357,56835));t.fillText(n,2,15),t.fillStyle="rgba(102, 204, 0, 0.2)",t.font="18pt Arial",t.fillText(n,4,45)}function qe(e,t){e.width=122,e.height=110,t.globalCompositeOperation="multiply";for(var n=0,a=[["#f2f",40,40],["#2ff",80,40],["#ff2",60,80]];n<a.length;n++){var i=a[n],r=i[0],o=i[1],c=i[2];t.fillStyle=r,t.beginPath(),t.arc(o,c,40,0,Math.PI*2,!0),t.closePath(),t.fill()}t.fillStyle="#f9c",t.arc(60,60,60,0,Math.PI*2,!0),t.arc(60,60,20,0,Math.PI*2,!0),t.fill("evenodd")}function N(e){return e.toDataURL()}function $e(){var e=navigator,t=0,n;e.maxTouchPoints!==void 0?t=O(e.maxTouchPoints):e.msMaxTouchPoints!==void 0&&(t=e.msMaxTouchPoints);try{document.createEvent("TouchEvent"),n=!0}catch{n=!1}var a="ontouchstart"in window;return{maxTouchPoints:t,touchEvent:n,touchStart:a}}function et(){return navigator.oscpu}function tt(){var e=navigator,t=[],n=e.language||e.userLanguage||e.browserLanguage||e.systemLanguage;if(n!==void 0&&t.push([n]),Array.isArray(e.languages))Q()&&Me()||t.push(e.languages);else if(typeof e.languages=="string"){var a=e.languages;a&&t.push(a.split(","))}return t}function nt(){return window.screen.colorDepth}function rt(){return W(V(navigator.deviceMemory),void 0)}function at(){var e=screen,t=function(a){return W(O(a),null)},n=[t(e.width),t(e.height)];return n.sort().reverse(),n}var it=2500,ot=10,P,H;function ct(){if(H===void 0){var e=function(){var t=E();B(t)?H=setTimeout(e,it):(P=t,H=void 0)};e()}}function ut(){var e=this;return ct(),function(){return Z(e,void 0,void 0,function(){var t;return F(this,function(n){switch(n.label){case 0:return t=E(),B(t)?P?[2,le([],P,!0)]:Ie()?[4,Ye()]:[3,2]:[3,2];case 1:n.sent(),t=E(),n.label=2;case 2:return B(t)||(P=t),[2,t]}})})}}function st(){var e=this,t=ut();return function(){return Z(e,void 0,void 0,function(){var n,a;return F(this,function(i){switch(i.label){case 0:return[4,t()];case 1:return n=i.sent(),a=function(r){return r===null?null:me(r,ot)},[2,[a(n[0]),a(n[1]),a(n[2]),a(n[3])]]}})})}}function E(){var e=screen;return[W(V(e.availTop),null),W(V(e.width)-V(e.availWidth)-W(V(e.availLeft),0),null),W(V(e.height)-V(e.availHeight)-W(V(e.availTop),0),null),W(V(e.availLeft),null)]}function B(e){for(var t=0;t<4;++t)if(e[t])return!1;return!0}function lt(){return W(O(navigator.hardwareConcurrency),void 0)}function ft(){var e,t=(e=window.Intl)===null||e===void 0?void 0:e.DateTimeFormat;if(t){var n=new t().resolvedOptions().timeZone;if(n)return n}var a=-dt();return"UTC".concat(a>=0?"+":"").concat(Math.abs(a))}function dt(){var e=new Date().getFullYear();return Math.max(V(new Date(e,0,1).getTimezoneOffset()),V(new Date(e,6,1).getTimezoneOffset()))}function mt(){try{return!!window.sessionStorage}catch{return!0}}function vt(){try{return!!window.localStorage}catch{return!0}}function ht(){if(!(ve()||Re()))try{return!!window.indexedDB}catch{return!0}}function pt(){return!!window.openDatabase}function gt(){return navigator.cpuClass}function bt(){var e=navigator.platform;return e==="MacIntel"&&Y()&&!U()?Ge()?"iPad":"iPhone":e}function yt(){return navigator.vendor||""}function wt(){for(var e=[],t=0,n=["chrome","safari","__crWeb","__gCrWeb","yandex","__yb","__ybro","__firefox__","__edgeTrackingPreventionStatistics","webkit","oprt","samsungAr","ucweb","UCShellJava","puffinDevice"];t<n.length;t++){var a=n[t],i=window[a];i&&typeof i=="object"&&e.push(a)}return e.sort()}function St(){var e=document;try{e.cookie="cookietest=1; SameSite=Strict;";var t=e.cookie.indexOf("cookietest=")!==-1;return e.cookie="cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT",t}catch{return!1}}function Lt(){var e=atob;return{abpIndo:["#Iklan-Melayang","#Kolom-Iklan-728","#SidebarIklan-wrapper",e("YVt0aXRsZT0iN25hZ2EgcG9rZXIiIGld"),'[title="ALIENBOLA" i]'],abpvn:["#quangcaomb",e("Lmlvc0Fkc2lvc0Fkcy1sYXlvdXQ="),".quangcao",e("W2hyZWZePSJodHRwczovL3I4OC52bi8iXQ=="),e("W2hyZWZePSJodHRwczovL3piZXQudm4vIl0=")],adBlockFinland:[".mainostila",e("LnNwb25zb3JpdA=="),".ylamainos",e("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"),e("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],adBlockPersian:["#navbar_notice_50",".kadr",'TABLE[width="140px"]',"#divAgahi",e("I2FkMl9pbmxpbmU=")],adBlockWarningRemoval:["#adblock-honeypot",".adblocker-root",".wp_adblock_detect",e("LmhlYWRlci1ibG9ja2VkLWFk"),e("I2FkX2Jsb2NrZXI=")],adGuardAnnoyances:['amp-embed[type="zen"]',".hs-sosyal","#cookieconsentdiv",'div[class^="app_gdpr"]',".as-oil"],adGuardBase:[".BetterJsPopOverlay",e("I2FkXzMwMFgyNTA="),e("I2Jhbm5lcmZsb2F0MjI="),e("I2FkLWJhbm5lcg=="),e("I2NhbXBhaWduLWJhbm5lcg==")],adGuardChinese:[e("LlppX2FkX2FfSA=="),e("YVtocmVmKj0iL29kMDA1LmNvbSJd"),e("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"),".qq_nr_lad","#widget-quan"],adGuardFrench:[e("I2Jsb2NrLXZpZXdzLWFkcy1zaWRlYmFyLWJsb2NrLWJsb2Nr"),"#pavePub",e("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"),".mobile_adhesion",".widgetadv"],adGuardGerman:[e("LmJhbm5lcml0ZW13ZXJidW5nX2hlYWRfMQ=="),e("LmJveHN0YXJ0d2VyYnVuZw=="),e("LndlcmJ1bmcz"),e("YVtocmVmXj0iaHR0cDovL3d3dy5laXMuZGUvaW5kZXgucGh0bWw/cmVmaWQ9Il0="),e("YVtocmVmXj0iaHR0cHM6Ly93d3cudGlwaWNvLmNvbS8/YWZmaWxpYXRlSWQ9Il0=")],adGuardJapanese:["#kauli_yad_1",e("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="),e("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="),e("LmFkZ29vZ2xl"),e("LmFkX3JlZ3VsYXIz")],adGuardMobile:[e("YW1wLWF1dG8tYWRz"),e("LmFtcF9hZA=="),'amp-embed[type="24smi"]',"#mgid_iframe1",e("I2FkX2ludmlld19hcmVh")],adGuardRussian:[e("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="),e("LnJlY2xhbWE="),'div[id^="smi2adblock"]',e("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"),e("I2FkX3NxdWFyZQ==")],adGuardSocial:[e("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="),e("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="),".etsy-tweet","#inlineShare",".popup-social"],adGuardSpanishPortuguese:["#barraPublicidade","#Publicidade","#publiEspecial","#queTooltip",e("W2hyZWZePSJodHRwOi8vYWRzLmdsaXNwYS5jb20vIl0=")],adGuardTrackingProtection:["#qoo-counter",e("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="),e("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="),e("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="),"#top100counter"],adGuardTurkish:["#backkapat",e("I3Jla2xhbWk="),e("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="),e("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"),e("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],bulgarian:[e("dGQjZnJlZW5ldF90YWJsZV9hZHM="),"#ea_intext_div",".lapni-pop-over","#xenium_hot_offers",e("I25ld0Fk")],easyList:[e("I0FEX0NPTlRST0xfMjg="),e("LnNlY29uZC1wb3N0LWFkcy13cmFwcGVy"),".universalboxADVBOX03",e("LmFkdmVydGlzZW1lbnQtNzI4eDkw"),e("LnNxdWFyZV9hZHM=")],easyListChina:[e("YVtocmVmKj0iLndlbnNpeHVldGFuZy5jb20vIl0="),e("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="),e("LmZyb250cGFnZUFkdk0="),"#taotaole","#aafoot.top_box"],easyListCookie:["#AdaCompliance.app-notice",".text-center.rgpd",".panel--cookie",".js-cookies-andromeda",".elxtr-consent"],easyListCzechSlovak:["#onlajny-stickers",e("I3Jla2xhbW5pLWJveA=="),e("LnJla2xhbWEtbWVnYWJvYXJk"),".sklik",e("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],easyListDutch:[e("I2FkdmVydGVudGll"),e("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="),".adstekst",e("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="),"#semilo-lrectangle"],easyListGermany:[e("I0FkX1dpbjJkYXk="),e("I3dlcmJ1bmdzYm94MzAw"),e("YVtocmVmXj0iaHR0cDovL3d3dy5yb3RsaWNodGthcnRlaS5jb20vP3NjPSJd"),e("I3dlcmJ1bmdfd2lkZXNreXNjcmFwZXJfc2NyZWVu"),e("YVtocmVmXj0iaHR0cDovL2xhbmRpbmcucGFya3BsYXR6a2FydGVpLmNvbS8/YWc9Il0=")],easyListItaly:[e("LmJveF9hZHZfYW5udW5jaQ=="),".sb-box-pubbliredazionale",e("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"),e("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"),e("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],easyListLithuania:[e("LnJla2xhbW9zX3RhcnBhcw=="),e("LnJla2xhbW9zX251b3JvZG9z"),e("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"),e("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"),e("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],estonian:[e("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],fanboyAnnoyances:["#feedback-tab","#taboola-below-article",".feedburnerFeedBlock",".widget-feedburner-counter",'[title="Subscribe to our blog"]'],fanboyAntiFacebook:[".util-bar-module-firefly-visible"],fanboyEnhancedTrackers:[".open.pushModal","#issuem-leaky-paywall-articles-zero-remaining-nag","#sovrn_container",'div[class$="-hide"][zoompage-fontsize][style="display: block;"]',".BlockNag__Card"],fanboySocial:[".td-tags-and-social-wrapper-box",".twitterContainer",".youtube-social",'a[title^="Like us on Facebook"]','img[alt^="Share on Digg"]'],frellwitSwedish:[e("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="),e("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="),"article.category-samarbete",e("ZGl2LmhvbGlkQWRz"),"ul.adsmodern"],greekAdBlock:[e("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"),e("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="),e("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"),"DIV.agores300","TABLE.advright"],hungarian:["#cemp_doboz",".optimonk-iframe-container",e("LmFkX19tYWlu"),e("W2NsYXNzKj0iR29vZ2xlQWRzIl0="),"#hirdetesek_box"],iDontCareAboutCookies:['.alert-info[data-block-track*="CookieNotice"]',".ModuleTemplateCookieIndicator",".o--cookies--container",".cookie-msg-info-container","#cookies-policy-sticky"],icelandicAbp:[e("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],latvian:[e("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="),e("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],listKr:[e("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="),e("I2xpdmVyZUFkV3JhcHBlcg=="),e("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="),e("aW5zLmZhc3R2aWV3LWFk"),".revenue_unit_item.dable"],listeAr:[e("LmdlbWluaUxCMUFk"),".right-and-left-sponsers",e("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="),e("YVtocmVmKj0iYm9vcmFxLm9yZyJd"),e("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],listeFr:[e("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="),e("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="),e("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="),".site-pub-interstitiel",'div[id^="crt-"][data-criteo-id]'],officialPolish:["#ceneo-placeholder-ceneo-12",e("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"),e("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="),e("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="),e("ZGl2I3NrYXBpZWNfYWQ=")],ro:[e("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"),'a[href^="/magazin/"]',e("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"),e("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="),e("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd")],ruAd:[e("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"),e("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="),e("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="),"#pgeldiz",".yandex-rtb-block"],thaiAds:["a[href*=macau-uta-popup]",e("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="),e("LmFkczMwMHM="),".bumq",".img-kosana"],webAnnoyancesUltralist:["#mod-social-share-2","#social-tools",e("LmN0cGwtZnVsbGJhbm5lcg=="),".zergnet-recommend",".yt.btn-link.btn-md.btn"]}}function xt(e){var t=e===void 0?{}:e,n=t.debug;return Z(this,void 0,void 0,function(){var a,i,r,o,c,l;return F(this,function(s){switch(s.label){case 0:return Vt()?(a=Lt(),i=Object.keys(a),r=(l=[]).concat.apply(l,i.map(function(u){return a[u]})),[4,Ct(r)]):[2,void 0];case 1:return o=s.sent(),n&&kt(a,o),c=i.filter(function(u){var f=a[u],d=C(f.map(function(p){return o[p]}));return d>f.length*.6}),c.sort(),[2,c]}})})}function Vt(){return Y()||he()}function Ct(e){var t;return Z(this,void 0,void 0,function(){var n,a,i,r,l,o,c,l;return F(this,function(s){switch(s.label){case 0:for(n=document,a=n.createElement("div"),i=new Array(e.length),r={},ie(a),l=0;l<e.length;++l)o=Ne(e[l]),c=n.createElement("div"),ie(c),c.appendChild(o),a.appendChild(c),i[l]=o;s.label=1;case 1:return n.body?[3,3]:[4,G(50)];case 2:return s.sent(),[3,1];case 3:n.body.appendChild(a);try{for(l=0;l<e.length;++l)i[l].offsetParent||(r[e[l]]=!0)}finally{(t=a.parentNode)===null||t===void 0||t.removeChild(a)}return[2,r]}})})}function ie(e){e.style.setProperty("display","block","important")}function kt(e,t){for(var n="DOM blockers debug:\n```",a=0,i=Object.keys(e);a<i.length;a++){var r=i[a];n+=`
`.concat(r,":");for(var o=0,c=e[r];o<c.length;o++){var l=c[o];n+=`
  `.concat(t[l]?"🚫":"➡️"," ").concat(l)}}console.log("".concat(n,"\n```"))}function Ft(){for(var e=0,t=["rec2020","p3","srgb"];e<t.length;e++){var n=t[e];if(matchMedia("(color-gamut: ".concat(n,")")).matches)return n}}function Wt(){if(oe("inverted"))return!0;if(oe("none"))return!1}function oe(e){return matchMedia("(inverted-colors: ".concat(e,")")).matches}function Zt(){if(ce("active"))return!0;if(ce("none"))return!1}function ce(e){return matchMedia("(forced-colors: ".concat(e,")")).matches}var Rt=100;function At(){if(matchMedia("(min-monochrome: 0)").matches){for(var e=0;e<=Rt;++e)if(matchMedia("(max-monochrome: ".concat(e,")")).matches)return e;throw new Error("Too high value")}}function Mt(){if(X("no-preference"))return 0;if(X("high")||X("more"))return 1;if(X("low")||X("less"))return-1;if(X("forced"))return 10}function X(e){return matchMedia("(prefers-contrast: ".concat(e,")")).matches}function Xt(){if(ue("reduce"))return!0;if(ue("no-preference"))return!1}function ue(e){return matchMedia("(prefers-reduced-motion: ".concat(e,")")).matches}function Gt(){if(se("high"))return!0;if(se("standard"))return!1}function se(e){return matchMedia("(dynamic-range: ".concat(e,")")).matches}var m=Math,S=function(){return 0};function It(){var e=m.acos||S,t=m.acosh||S,n=m.asin||S,a=m.asinh||S,i=m.atanh||S,r=m.atan||S,o=m.sin||S,c=m.sinh||S,l=m.cos||S,s=m.cosh||S,u=m.tan||S,f=m.tanh||S,d=m.exp||S,p=m.expm1||S,v=m.log1p||S,g=function(b){return m.pow(m.PI,b)},y=function(b){return m.log(b+m.sqrt(b*b-1))},h=function(b){return m.log(b+m.sqrt(b*b+1))},k=function(b){return m.log((1+b)/(1-b))/2},I=function(b){return m.exp(b)-1/m.exp(b)/2},j=function(b){return(m.exp(b)+1/m.exp(b))/2},J=function(b){return m.exp(b)-1},ye=function(b){return(m.exp(2*b)-1)/(m.exp(2*b)+1)},we=function(b){return m.log(1+b)};return{acos:e(.12312423423423424),acosh:t(1e308),acoshPf:y(1e154),asin:n(.12312423423423424),asinh:a(1),asinhPf:h(1),atanh:i(.5),atanhPf:k(.5),atan:r(.5),sin:o(-1e300),sinh:c(1),sinhPf:I(1),cos:l(10.000000000123),cosh:s(1),coshPf:j(1),tan:u(-1e300),tanh:f(1),tanhPf:ye(1),exp:d(1),expm1:p(1),expm1Pf:J(1),log1p:v(10),log1pPf:we(10),powPI:g(-100)}}var Yt="mmMwWLliI0fiflO&1",z={default:[],apple:[{font:"-apple-system-body"}],serif:[{fontFamily:"serif"}],sans:[{fontFamily:"sans-serif"}],mono:[{fontFamily:"monospace"}],min:[{fontSize:"1px"}],system:[{fontFamily:"system-ui"}]};function jt(){return Pt(function(e,t){for(var n={},a={},i=0,r=Object.keys(z);i<r.length;i++){var o=r[i],c=z[o],l=c[0],s=l===void 0?{}:l,u=c[1],f=u===void 0?Yt:u,d=e.createElement("span");d.textContent=f,d.style.whiteSpace="nowrap";for(var p=0,v=Object.keys(s);p<v.length;p++){var g=v[p],y=s[g];y!==void 0&&(d.style[g]=y)}n[o]=d,t.appendChild(e.createElement("br")),t.appendChild(d)}for(var h=0,k=Object.keys(z);h<k.length;h++){var o=k[h];a[o]=n[o].getBoundingClientRect().width}return a})}function Pt(e,t){return t===void 0&&(t=4e3),pe(function(n,a){var i=a.document,r=i.body,o=r.style;o.width="".concat(t,"px"),o.webkitTextSizeAdjust=o.textSizeAdjust="none",Q()?r.style.zoom="".concat(1/a.devicePixelRatio):Y()&&(r.style.zoom="reset");var c=i.createElement("div");return c.textContent=le([],Array(t/20<<0),!0).map(function(){return"word"}).join(" "),r.appendChild(c),e(i,r)},'<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')}function Tt(){var e,t=document.createElement("canvas"),n=(e=t.getContext("webgl"))!==null&&e!==void 0?e:t.getContext("experimental-webgl");if(n&&"getExtension"in n){var a=n.getExtension("WEBGL_debug_renderer_info");if(a)return{vendor:(n.getParameter(a.UNMASKED_VENDOR_WEBGL)||"").toString(),renderer:(n.getParameter(a.UNMASKED_RENDERER_WEBGL)||"").toString()}}}function Jt(){return navigator.pdfViewerEnabled}function Nt(){var e=new Float32Array(1),t=new Uint8Array(e.buffer);return e[0]=1/0,e[0]=e[0]-e[0],t[3]}var Ht={fonts:Ee,domBlockers:xt,fontPreferences:jt,audio:je,screenFrame:st,osCpu:et,languages:tt,colorDepth:nt,deviceMemory:rt,screenResolution:at,hardwareConcurrency:lt,timezone:ft,sessionStorage:mt,localStorage:vt,indexedDB:ht,openDatabase:pt,cpuClass:gt,platform:bt,plugins:Be,canvas:Oe,touchSupport:$e,vendor:yt,vendorFlavors:wt,cookiesEnabled:St,colorGamut:Ft,invertedColors:Wt,forcedColors:Zt,monochrome:At,contrast:Mt,reducedMotion:Xt,hdr:Gt,math:It,videoCard:Tt,pdfViewerEnabled:Jt,architecture:Nt};function zt(e){return Ze(Ht,e,[])}var Dt="$ if upgrade to Pro: https://fpjs.dev/pro";function Et(e){var t=Bt(e),n=Ot(t);return{score:t,comment:Dt.replace(/\$/g,"".concat(n))}}function Bt(e){if(he())return .4;if(Y())return U()?.5:.3;var t=e.platform.value||"";return/^Win/.test(t)?.6:/^Mac/.test(t)?.5:.7}function Ot(e){return me(.99+.01*e,1e-4)}function Qt(e){for(var t="",n=0,a=Object.keys(e).sort();n<a.length;n++){var i=a[n],r=e[i],o=r.error?"error":JSON.stringify(r.value);t+="".concat(t?"|":"").concat(i.replace(/([:|\\])/g,"\\$1"),":").concat(o)}return t}function ge(e){return JSON.stringify(e,function(t,n){return n instanceof Error?xe(n):n},2)}function be(e){return Le(Qt(e))}function Ut(e){var t,n=Et(e);return{get visitorId(){return t===void 0&&(t=be(this.components)),t},set visitorId(a){t=a},confidence:n,components:e,version:fe}}function Kt(e){return e===void 0&&(e=50),Se(e,e*2)}function _t(e,t){var n=Date.now();return{get:function(a){return Z(this,void 0,void 0,function(){var i,r,o;return F(this,function(c){switch(c.label){case 0:return i=Date.now(),[4,e()];case 1:return r=c.sent(),o=Ut(r),(t||a?.debug)&&console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(o.version,`
userAgent: `).concat(navigator.userAgent,`
timeBetweenLoadAndGet: `).concat(i-n,`
visitorId: `).concat(o.visitorId,`
components: `).concat(ge(r),"\n```")),[2,o]}})})}}}function qt(){if(!(window.__fpjs_d_m||Math.random()>=.001))try{var e=new XMLHttpRequest;e.open("get","https://m1.openfpcdn.io/fingerprintjs/v".concat(fe,"/npm-monitoring"),!0),e.send()}catch(t){console.error(t)}}function $t(e){var t=e===void 0?{}:e,n=t.delayFallback,a=t.debug,i=t.monitoring,r=i===void 0?!0:i;return Z(this,void 0,void 0,function(){var o;return F(this,function(c){switch(c.label){case 0:return r&&qt(),[4,Kt(n)];case 1:return c.sent(),o=zt({debug:a}),[2,_t(o,a)]}})})}var en={load:$t,hashComponents:be,componentsToDebugString:ge};async function K(e,t){try{const a=await(await en.load({monitoring:!1})).get(),i=await fetch(e,{credentials:"include",...t,headers:new Headers({"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${_.get(q)}`,fp:a.visitorId,...t?.headers??{}})}),o=t?.headers?.Accept==="text/html"?await i.text():await i.json();return i.ok?{response:o,error:void 0}:(o.status===401&&(_.remove(q),window.location.reload()),{response:void 0,error:o})}catch(n){return{response:void 0,error:{status:0,message:n.message}}}}async function nn(e,t,n){return K(e,{...n,method:"POST",body:JSON.stringify(t)})}async function rn(e,t,n){const a=new URLSearchParams(t).toString(),i=a?`${e}?${a}`:e;return K(i,{credentials:"include",method:"GET",...n})}async function an(e,t,n){return K(e,{...n,method:"PATCH",body:JSON.stringify(t)})}export{rn as a,an as b,nn as h};