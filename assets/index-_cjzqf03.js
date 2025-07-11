(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const p of f)if(p.type==="childList")for(const b of p.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&u(b)}).observe(document,{childList:!0,subtree:!0});function c(f){const p={};return f.integrity&&(p.integrity=f.integrity),f.referrerPolicy&&(p.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?p.credentials="include":f.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function u(f){if(f.ep)return;f.ep=!0;const p=c(f);fetch(f.href,p)}})();function jp(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ju={exports:{}},Tl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kh;function T1(){if(kh)return Tl;kh=1;var i=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function c(u,f,p){var b=null;if(p!==void 0&&(b=""+p),f.key!==void 0&&(b=""+f.key),"key"in f){p={};for(var y in f)y!=="key"&&(p[y]=f[y])}else p=f;return f=p.ref,{$$typeof:i,type:u,key:b,ref:f!==void 0?f:null,props:p}}return Tl.Fragment=s,Tl.jsx=c,Tl.jsxs=c,Tl}var Th;function A1(){return Th||(Th=1,Ju.exports=T1()),Ju.exports}var o=A1(),Wu={exports:{}},de={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ah;function M1(){if(Ah)return de;Ah=1;var i=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),b=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),T=Symbol.iterator;function M(w){return w===null||typeof w!="object"?null:(w=T&&w[T]||w["@@iterator"],typeof w=="function"?w:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,G={};function V(w,q,J){this.props=w,this.context=q,this.refs=G,this.updater=J||N}V.prototype.isReactComponent={},V.prototype.setState=function(w,q){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,q,"setState")},V.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function z(){}z.prototype=V.prototype;function k(w,q,J){this.props=w,this.context=q,this.refs=G,this.updater=J||N}var Y=k.prototype=new z;Y.constructor=k,D(Y,V.prototype),Y.isPureReactComponent=!0;var X=Array.isArray,Q={H:null,A:null,T:null,S:null,V:null},Z=Object.prototype.hasOwnProperty;function K(w,q,J,P,ee,ce){return J=ce.ref,{$$typeof:i,type:w,key:q,ref:J!==void 0?J:null,props:ce}}function xe(w,q){return K(w.type,q,void 0,void 0,void 0,w.props)}function ue(w){return typeof w=="object"&&w!==null&&w.$$typeof===i}function F(w){var q={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(J){return q[J]})}var fe=/\/+/g;function Ce(w,q){return typeof w=="object"&&w!==null&&w.key!=null?F(""+w.key):q.toString(36)}function ft(){}function pt(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(ft,ft):(w.status="pending",w.then(function(q){w.status==="pending"&&(w.status="fulfilled",w.value=q)},function(q){w.status==="pending"&&(w.status="rejected",w.reason=q)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function Ge(w,q,J,P,ee){var ce=typeof w;(ce==="undefined"||ce==="boolean")&&(w=null);var ne=!1;if(w===null)ne=!0;else switch(ce){case"bigint":case"string":case"number":ne=!0;break;case"object":switch(w.$$typeof){case i:case s:ne=!0;break;case C:return ne=w._init,Ge(ne(w._payload),q,J,P,ee)}}if(ne)return ee=ee(w),ne=P===""?"."+Ce(w,0):P,X(ee)?(J="",ne!=null&&(J=ne.replace(fe,"$&/")+"/"),Ge(ee,q,J,"",function(We){return We})):ee!=null&&(ue(ee)&&(ee=xe(ee,J+(ee.key==null||w&&w.key===ee.key?"":(""+ee.key).replace(fe,"$&/")+"/")+ne)),q.push(ee)),1;ne=0;var Ve=P===""?".":P+":";if(X(w))for(var we=0;we<w.length;we++)P=w[we],ce=Ve+Ce(P,we),ne+=Ge(P,q,J,ce,ee);else if(we=M(w),typeof we=="function")for(w=we.call(w),we=0;!(P=w.next()).done;)P=P.value,ce=Ve+Ce(P,we++),ne+=Ge(P,q,J,ce,ee);else if(ce==="object"){if(typeof w.then=="function")return Ge(pt(w),q,J,P,ee);throw q=String(w),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return ne}function L(w,q,J){if(w==null)return w;var P=[],ee=0;return Ge(w,P,"","",function(ce){return q.call(J,ce,ee++)}),P}function W(w){if(w._status===-1){var q=w._result;q=q(),q.then(function(J){(w._status===0||w._status===-1)&&(w._status=1,w._result=J)},function(J){(w._status===0||w._status===-1)&&(w._status=2,w._result=J)}),w._status===-1&&(w._status=0,w._result=q)}if(w._status===1)return w._result.default;throw w._result}var le=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function me(){}return de.Children={map:L,forEach:function(w,q,J){L(w,function(){q.apply(this,arguments)},J)},count:function(w){var q=0;return L(w,function(){q++}),q},toArray:function(w){return L(w,function(q){return q})||[]},only:function(w){if(!ue(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},de.Component=V,de.Fragment=c,de.Profiler=f,de.PureComponent=k,de.StrictMode=u,de.Suspense=x,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,de.__COMPILER_RUNTIME={__proto__:null,c:function(w){return Q.H.useMemoCache(w)}},de.cache=function(w){return function(){return w.apply(null,arguments)}},de.cloneElement=function(w,q,J){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var P=D({},w.props),ee=w.key,ce=void 0;if(q!=null)for(ne in q.ref!==void 0&&(ce=void 0),q.key!==void 0&&(ee=""+q.key),q)!Z.call(q,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&q.ref===void 0||(P[ne]=q[ne]);var ne=arguments.length-2;if(ne===1)P.children=J;else if(1<ne){for(var Ve=Array(ne),we=0;we<ne;we++)Ve[we]=arguments[we+2];P.children=Ve}return K(w.type,ee,void 0,void 0,ce,P)},de.createContext=function(w){return w={$$typeof:b,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:p,_context:w},w},de.createElement=function(w,q,J){var P,ee={},ce=null;if(q!=null)for(P in q.key!==void 0&&(ce=""+q.key),q)Z.call(q,P)&&P!=="key"&&P!=="__self"&&P!=="__source"&&(ee[P]=q[P]);var ne=arguments.length-2;if(ne===1)ee.children=J;else if(1<ne){for(var Ve=Array(ne),we=0;we<ne;we++)Ve[we]=arguments[we+2];ee.children=Ve}if(w&&w.defaultProps)for(P in ne=w.defaultProps,ne)ee[P]===void 0&&(ee[P]=ne[P]);return K(w,ce,void 0,void 0,null,ee)},de.createRef=function(){return{current:null}},de.forwardRef=function(w){return{$$typeof:y,render:w}},de.isValidElement=ue,de.lazy=function(w){return{$$typeof:C,_payload:{_status:-1,_result:w},_init:W}},de.memo=function(w,q){return{$$typeof:m,type:w,compare:q===void 0?null:q}},de.startTransition=function(w){var q=Q.T,J={};Q.T=J;try{var P=w(),ee=Q.S;ee!==null&&ee(J,P),typeof P=="object"&&P!==null&&typeof P.then=="function"&&P.then(me,le)}catch(ce){le(ce)}finally{Q.T=q}},de.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},de.use=function(w){return Q.H.use(w)},de.useActionState=function(w,q,J){return Q.H.useActionState(w,q,J)},de.useCallback=function(w,q){return Q.H.useCallback(w,q)},de.useContext=function(w){return Q.H.useContext(w)},de.useDebugValue=function(){},de.useDeferredValue=function(w,q){return Q.H.useDeferredValue(w,q)},de.useEffect=function(w,q,J){var P=Q.H;if(typeof J=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return P.useEffect(w,q)},de.useId=function(){return Q.H.useId()},de.useImperativeHandle=function(w,q,J){return Q.H.useImperativeHandle(w,q,J)},de.useInsertionEffect=function(w,q){return Q.H.useInsertionEffect(w,q)},de.useLayoutEffect=function(w,q){return Q.H.useLayoutEffect(w,q)},de.useMemo=function(w,q){return Q.H.useMemo(w,q)},de.useOptimistic=function(w,q){return Q.H.useOptimistic(w,q)},de.useReducer=function(w,q,J){return Q.H.useReducer(w,q,J)},de.useRef=function(w){return Q.H.useRef(w)},de.useState=function(w){return Q.H.useState(w)},de.useSyncExternalStore=function(w,q,J){return Q.H.useSyncExternalStore(w,q,J)},de.useTransition=function(){return Q.H.useTransition()},de.version="19.1.0",de}var Mh;function Rc(){return Mh||(Mh=1,Wu.exports=M1()),Wu.exports}var j=Rc();const wi=jp(j);var Pu={exports:{}},Al={},Fu={exports:{}},Iu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rh;function R1(){return Rh||(Rh=1,function(i){function s(L,W){var le=L.length;L.push(W);e:for(;0<le;){var me=le-1>>>1,w=L[me];if(0<f(w,W))L[me]=W,L[le]=w,le=me;else break e}}function c(L){return L.length===0?null:L[0]}function u(L){if(L.length===0)return null;var W=L[0],le=L.pop();if(le!==W){L[0]=le;e:for(var me=0,w=L.length,q=w>>>1;me<q;){var J=2*(me+1)-1,P=L[J],ee=J+1,ce=L[ee];if(0>f(P,le))ee<w&&0>f(ce,P)?(L[me]=ce,L[ee]=le,me=ee):(L[me]=P,L[J]=le,me=J);else if(ee<w&&0>f(ce,le))L[me]=ce,L[ee]=le,me=ee;else break e}}return W}function f(L,W){var le=L.sortIndex-W.sortIndex;return le!==0?le:L.id-W.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;i.unstable_now=function(){return p.now()}}else{var b=Date,y=b.now();i.unstable_now=function(){return b.now()-y}}var x=[],m=[],C=1,T=null,M=3,N=!1,D=!1,G=!1,V=!1,z=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function X(L){for(var W=c(m);W!==null;){if(W.callback===null)u(m);else if(W.startTime<=L)u(m),W.sortIndex=W.expirationTime,s(x,W);else break;W=c(m)}}function Q(L){if(G=!1,X(L),!D)if(c(x)!==null)D=!0,Z||(Z=!0,Ce());else{var W=c(m);W!==null&&Ge(Q,W.startTime-L)}}var Z=!1,K=-1,xe=5,ue=-1;function F(){return V?!0:!(i.unstable_now()-ue<xe)}function fe(){if(V=!1,Z){var L=i.unstable_now();ue=L;var W=!0;try{e:{D=!1,G&&(G=!1,k(K),K=-1),N=!0;var le=M;try{t:{for(X(L),T=c(x);T!==null&&!(T.expirationTime>L&&F());){var me=T.callback;if(typeof me=="function"){T.callback=null,M=T.priorityLevel;var w=me(T.expirationTime<=L);if(L=i.unstable_now(),typeof w=="function"){T.callback=w,X(L),W=!0;break t}T===c(x)&&u(x),X(L)}else u(x);T=c(x)}if(T!==null)W=!0;else{var q=c(m);q!==null&&Ge(Q,q.startTime-L),W=!1}}break e}finally{T=null,M=le,N=!1}W=void 0}}finally{W?Ce():Z=!1}}}var Ce;if(typeof Y=="function")Ce=function(){Y(fe)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,pt=ft.port2;ft.port1.onmessage=fe,Ce=function(){pt.postMessage(null)}}else Ce=function(){z(fe,0)};function Ge(L,W){K=z(function(){L(i.unstable_now())},W)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(L){L.callback=null},i.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xe=0<L?Math.floor(1e3/L):5},i.unstable_getCurrentPriorityLevel=function(){return M},i.unstable_next=function(L){switch(M){case 1:case 2:case 3:var W=3;break;default:W=M}var le=M;M=W;try{return L()}finally{M=le}},i.unstable_requestPaint=function(){V=!0},i.unstable_runWithPriority=function(L,W){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var le=M;M=L;try{return W()}finally{M=le}},i.unstable_scheduleCallback=function(L,W,le){var me=i.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?me+le:me):le=me,L){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=le+w,L={id:C++,callback:W,priorityLevel:L,startTime:le,expirationTime:w,sortIndex:-1},le>me?(L.sortIndex=le,s(m,L),c(x)===null&&L===c(m)&&(G?(k(K),K=-1):G=!0,Ge(Q,le-me))):(L.sortIndex=w,s(x,L),D||N||(D=!0,Z||(Z=!0,Ce()))),L},i.unstable_shouldYield=F,i.unstable_wrapCallback=function(L){var W=M;return function(){var le=M;M=W;try{return L.apply(this,arguments)}finally{M=le}}}}(Iu)),Iu}var Dh;function D1(){return Dh||(Dh=1,Fu.exports=R1()),Fu.exports}var ec={exports:{}},dt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oh;function O1(){if(Oh)return dt;Oh=1;var i=Rc();function s(x){var m="https://react.dev/errors/"+x;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)m+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+x+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var u={d:{f:c,r:function(){throw Error(s(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},f=Symbol.for("react.portal");function p(x,m,C){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:T==null?null:""+T,children:x,containerInfo:m,implementation:C}}var b=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(x,m){if(x==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,dt.createPortal=function(x,m){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(s(299));return p(x,m,null,C)},dt.flushSync=function(x){var m=b.T,C=u.p;try{if(b.T=null,u.p=2,x)return x()}finally{b.T=m,u.p=C,u.d.f()}},dt.preconnect=function(x,m){typeof x=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,u.d.C(x,m))},dt.prefetchDNS=function(x){typeof x=="string"&&u.d.D(x)},dt.preinit=function(x,m){if(typeof x=="string"&&m&&typeof m.as=="string"){var C=m.as,T=y(C,m.crossOrigin),M=typeof m.integrity=="string"?m.integrity:void 0,N=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;C==="style"?u.d.S(x,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:T,integrity:M,fetchPriority:N}):C==="script"&&u.d.X(x,{crossOrigin:T,integrity:M,fetchPriority:N,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},dt.preinitModule=function(x,m){if(typeof x=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var C=y(m.as,m.crossOrigin);u.d.M(x,{crossOrigin:C,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&u.d.M(x)},dt.preload=function(x,m){if(typeof x=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var C=m.as,T=y(C,m.crossOrigin);u.d.L(x,C,{crossOrigin:T,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},dt.preloadModule=function(x,m){if(typeof x=="string")if(m){var C=y(m.as,m.crossOrigin);u.d.m(x,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:C,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else u.d.m(x)},dt.requestFormReset=function(x){u.d.r(x)},dt.unstable_batchedUpdates=function(x,m){return x(m)},dt.useFormState=function(x,m,C){return b.H.useFormState(x,m,C)},dt.useFormStatus=function(){return b.H.useHostTransitionStatus()},dt.version="19.1.0",dt}var _h;function _1(){if(_h)return ec.exports;_h=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}return i(),ec.exports=O1(),ec.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nh;function N1(){if(Nh)return Al;Nh=1;var i=D1(),s=Rc(),c=_1();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(p(e)!==e)throw Error(u(188))}function x(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var r=l.alternate;if(r===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===n)return y(l),e;if(r===a)return y(l),t;r=r.sibling}throw Error(u(188))}if(n.return!==a.return)n=l,a=r;else{for(var d=!1,h=l.child;h;){if(h===n){d=!0,n=l,a=r;break}if(h===a){d=!0,a=l,n=r;break}h=h.sibling}if(!d){for(h=r.child;h;){if(h===n){d=!0,n=r,a=l;break}if(h===a){d=!0,a=r,n=l;break}h=h.sibling}if(!d)throw Error(u(189))}}if(n.alternate!==a)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var C=Object.assign,T=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),k=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),xe=Symbol.for("react.lazy"),ue=Symbol.for("react.activity"),F=Symbol.for("react.memo_cache_sentinel"),fe=Symbol.iterator;function Ce(e){return e===null||typeof e!="object"?null:(e=fe&&e[fe]||e["@@iterator"],typeof e=="function"?e:null)}var ft=Symbol.for("react.client.reference");function pt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ft?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case V:return"Profiler";case G:return"StrictMode";case Q:return"Suspense";case Z:return"SuspenseList";case ue:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case N:return"Portal";case Y:return(e.displayName||"Context")+".Provider";case k:return(e._context.displayName||"Context")+".Consumer";case X:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return t=e.displayName||null,t!==null?t:pt(e.type)||"Memo";case xe:t=e._payload,e=e._init;try{return pt(e(t))}catch{}}return null}var Ge=Array.isArray,L=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},me=[],w=-1;function q(e){return{current:e}}function J(e){0>w||(e.current=me[w],me[w]=null,w--)}function P(e,t){w++,me[w]=e.current,e.current=t}var ee=q(null),ce=q(null),ne=q(null),Ve=q(null);function we(e,t){switch(P(ne,t),P(ce,e),P(ee,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?th(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=th(t),e=nh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}J(ee),P(ee,e)}function We(){J(ee),J(ce),J(ne)}function Jt(e){e.memoizedState!==null&&P(Ve,e);var t=ee.current,n=nh(t,e.type);t!==n&&(P(ce,e),P(ee,n))}function St(e){ce.current===e&&(J(ee),J(ce)),Ve.current===e&&(J(Ve),jl._currentValue=le)}var mt=Object.prototype.hasOwnProperty,qt=i.unstable_scheduleCallback,Mi=i.unstable_cancelCallback,Aa=i.unstable_shouldYield,Zl=i.unstable_requestPaint,jt=i.unstable_now,Ql=i.unstable_getCurrentPriorityLevel,Ri=i.unstable_ImmediatePriority,Di=i.unstable_UserBlockingPriority,ia=i.unstable_NormalPriority,Bo=i.unstable_LowPriority,Kl=i.unstable_IdlePriority,Uo=i.log,Oi=i.unstable_setDisableYieldValue,Wt=null,it=null;function Gt(e){if(typeof Uo=="function"&&Oi(e),it&&typeof it.setStrictMode=="function")try{it.setStrictMode(Wt,e)}catch{}}var lt=Math.clz32?Math.clz32:Yo,Ma=Math.log,Ho=Math.LN2;function Yo(e){return e>>>=0,e===0?32:31-(Ma(e)/Ho|0)|0}var Ra=256,la=4194304;function Pt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Da(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,r=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var h=a&134217727;return h!==0?(a=h&~r,a!==0?l=Pt(a):(d&=h,d!==0?l=Pt(d):n||(n=h&~e,n!==0&&(l=Pt(n))))):(h=a&~r,h!==0?l=Pt(h):d!==0?l=Pt(d):n||(n=a&~e,n!==0&&(l=Pt(n)))),l===0?0:t!==0&&t!==l&&(t&r)===0&&(r=l&-l,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:l}function U(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ie(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function je(){var e=Ra;return Ra<<=1,(Ra&4194048)===0&&(Ra=256),e}function I(){var e=la;return la<<=1,(la&62914560)===0&&(la=4194304),e}function be(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Te(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ne(e,t,n,a,l,r){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var h=e.entanglements,v=e.expirationTimes,R=e.hiddenUpdates;for(n=d&~n;0<n;){var B=31-lt(n),$=1<<B;h[B]=0,v[B]=-1;var O=R[B];if(O!==null)for(R[B]=null,B=0;B<O.length;B++){var _=O[B];_!==null&&(_.lane&=-536870913)}n&=~$}a!==0&&Tn(e,a,0),r!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=r&~(d&~t))}function Tn(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-lt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194090}function An(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-lt(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function Vt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function sn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Jl(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:wh(e.type))}function xm(e,t){var n=W.p;try{return W.p=e,t()}finally{W.p=n}}var Mn=Math.random().toString(36).slice(2),ut="__reactFiber$"+Mn,gt="__reactProps$"+Mn,Oa="__reactContainer$"+Mn,$o="__reactEvents$"+Mn,bm="__reactListeners$"+Mn,vm="__reactHandles$"+Mn,qc="__reactResources$"+Mn,_i="__reactMarker$"+Mn;function qo(e){delete e[ut],delete e[gt],delete e[$o],delete e[bm],delete e[vm]}function _a(e){var t=e[ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Oa]||n[ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=rh(e);e!==null;){if(n=e[ut])return n;e=rh(e)}return t}e=n,n=e.parentNode}return null}function Na(e){if(e=e[ut]||e[Oa]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Ni(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function La(e){var t=e[qc];return t||(t=e[qc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ie(e){e[_i]=!0}var Gc=new Set,Vc={};function ra(e,t){Ba(e,t),Ba(e+"Capture",t)}function Ba(e,t){for(Vc[e]=t,e=0;e<t.length;e++)Gc.add(t[e])}var ym=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xc={},Zc={};function wm(e){return mt.call(Zc,e)?!0:mt.call(Xc,e)?!1:ym.test(e)?Zc[e]=!0:(Xc[e]=!0,!1)}function Wl(e,t,n){if(wm(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Pl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function un(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}var Go,Qc;function Ua(e){if(Go===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Go=t&&t[1]||"",Qc=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Go+e+Qc}var Vo=!1;function Xo(e,t){if(!e||Vo)return"";Vo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(_){var O=_}Reflect.construct(e,[],$)}else{try{$.call()}catch(_){O=_}e.call($.prototype)}}else{try{throw Error()}catch(_){O=_}($=e())&&typeof $.catch=="function"&&$.catch(function(){})}}catch(_){if(_&&O&&typeof _.stack=="string")return[_.stack,O.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),d=r[0],h=r[1];if(d&&h){var v=d.split(`
`),R=h.split(`
`);for(l=a=0;a<v.length&&!v[a].includes("DetermineComponentFrameRoot");)a++;for(;l<R.length&&!R[l].includes("DetermineComponentFrameRoot");)l++;if(a===v.length||l===R.length)for(a=v.length-1,l=R.length-1;1<=a&&0<=l&&v[a]!==R[l];)l--;for(;1<=a&&0<=l;a--,l--)if(v[a]!==R[l]){if(a!==1||l!==1)do if(a--,l--,0>l||v[a]!==R[l]){var B=`
`+v[a].replace(" at new "," at ");return e.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",e.displayName)),B}while(1<=a&&0<=l);break}}}finally{Vo=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ua(n):""}function Sm(e){switch(e.tag){case 26:case 27:case 5:return Ua(e.type);case 16:return Ua("Lazy");case 13:return Ua("Suspense");case 19:return Ua("SuspenseList");case 0:case 15:return Xo(e.type,!1);case 11:return Xo(e.type.render,!1);case 1:return Xo(e.type,!0);case 31:return Ua("Activity");default:return""}}function Kc(e){try{var t="";do t+=Sm(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jm(e){var t=Jc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(d){a=""+d,r.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fl(e){e._valueTracker||(e._valueTracker=jm(e))}function Wc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Jc(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Il(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Cm=/[\n"\\]/g;function Ot(e){return e.replace(Cm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Zo(e,t,n,a,l,r,d,h){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Dt(t)):e.value!==""+Dt(t)&&(e.value=""+Dt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?Qo(e,d,Dt(t)):n!=null?Qo(e,d,Dt(n)):a!=null&&e.removeAttribute("value"),l==null&&r!=null&&(e.defaultChecked=!!r),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+Dt(h):e.removeAttribute("name")}function Pc(e,t,n,a,l,r,d,h){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+Dt(n):"",t=t!=null?""+Dt(t):n,h||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=h?e.checked:!!a,e.defaultChecked=!!a,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d)}function Qo(e,t,n){t==="number"&&Il(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Ha(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Dt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Fc(e,t,n){if(t!=null&&(t=""+Dt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Dt(n):""}function Ic(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(u(92));if(Ge(a)){if(1<a.length)throw Error(u(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Dt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function Ya(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Em=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ed(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Em.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function td(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&ed(e,l,a)}else for(var r in t)t.hasOwnProperty(r)&&ed(e,r,t[r])}function Ko(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),km=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function er(e){return km.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Jo=null;function Wo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $a=null,qa=null;function nd(e){var t=Na(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Zo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ot(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[gt]||null;if(!l)throw Error(u(90));Zo(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Wc(a)}break e;case"textarea":Fc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Ha(e,!!n.multiple,t,!1)}}}var Po=!1;function ad(e,t,n){if(Po)return e(t,n);Po=!0;try{var a=e(t);return a}finally{if(Po=!1,($a!==null||qa!==null)&&(Hr(),$a&&(t=$a,e=qa,qa=$a=null,nd(t),e)))for(t=0;t<e.length;t++)nd(e[t])}}function Li(e,t){var n=e.stateNode;if(n===null)return null;var a=n[gt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fo=!1;if(cn)try{var Bi={};Object.defineProperty(Bi,"passive",{get:function(){Fo=!0}}),window.addEventListener("test",Bi,Bi),window.removeEventListener("test",Bi,Bi)}catch{Fo=!1}var Rn=null,Io=null,tr=null;function id(){if(tr)return tr;var e,t=Io,n=t.length,a,l="value"in Rn?Rn.value:Rn.textContent,r=l.length;for(e=0;e<n&&t[e]===l[e];e++);var d=n-e;for(a=1;a<=d&&t[n-a]===l[r-a];a++);return tr=l.slice(e,1<a?1-a:void 0)}function nr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ar(){return!0}function ld(){return!1}function xt(e){function t(n,a,l,r,d){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=r,this.target=d,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(r):r[h]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?ar:ld,this.isPropagationStopped=ld,this}return C(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),t}var oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ir=xt(oa),Ui=C({},oa,{view:0,detail:0}),Tm=xt(Ui),es,ts,Hi,lr=C({},Ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:as,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hi&&(Hi&&e.type==="mousemove"?(es=e.screenX-Hi.screenX,ts=e.screenY-Hi.screenY):ts=es=0,Hi=e),es)},movementY:function(e){return"movementY"in e?e.movementY:ts}}),rd=xt(lr),Am=C({},lr,{dataTransfer:0}),Mm=xt(Am),Rm=C({},Ui,{relatedTarget:0}),ns=xt(Rm),Dm=C({},oa,{animationName:0,elapsedTime:0,pseudoElement:0}),Om=xt(Dm),_m=C({},oa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nm=xt(_m),Lm=C({},oa,{data:0}),od=xt(Lm),Bm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Um={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ym(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hm[e])?!!t[e]:!1}function as(){return Ym}var $m=C({},Ui,{key:function(e){if(e.key){var t=Bm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=nr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Um[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:as,charCode:function(e){return e.type==="keypress"?nr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?nr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qm=xt($m),Gm=C({},lr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sd=xt(Gm),Vm=C({},Ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:as}),Xm=xt(Vm),Zm=C({},oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qm=xt(Zm),Km=C({},lr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jm=xt(Km),Wm=C({},oa,{newState:0,oldState:0}),Pm=xt(Wm),Fm=[9,13,27,32],is=cn&&"CompositionEvent"in window,Yi=null;cn&&"documentMode"in document&&(Yi=document.documentMode);var Im=cn&&"TextEvent"in window&&!Yi,ud=cn&&(!is||Yi&&8<Yi&&11>=Yi),cd=" ",dd=!1;function fd(e,t){switch(e){case"keyup":return Fm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ga=!1;function eg(e,t){switch(e){case"compositionend":return hd(t);case"keypress":return t.which!==32?null:(dd=!0,cd);case"textInput":return e=t.data,e===cd&&dd?null:e;default:return null}}function tg(e,t){if(Ga)return e==="compositionend"||!is&&fd(e,t)?(e=id(),tr=Io=Rn=null,Ga=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ud&&t.locale!=="ko"?null:t.data;default:return null}}var ng={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ng[e.type]:t==="textarea"}function md(e,t,n,a){$a?qa?qa.push(a):qa=[a]:$a=a,t=Xr(t,"onChange"),0<t.length&&(n=new ir("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var $i=null,qi=null;function ag(e){W0(e,0)}function rr(e){var t=Ni(e);if(Wc(t))return e}function gd(e,t){if(e==="change")return t}var xd=!1;if(cn){var ls;if(cn){var rs="oninput"in document;if(!rs){var bd=document.createElement("div");bd.setAttribute("oninput","return;"),rs=typeof bd.oninput=="function"}ls=rs}else ls=!1;xd=ls&&(!document.documentMode||9<document.documentMode)}function vd(){$i&&($i.detachEvent("onpropertychange",yd),qi=$i=null)}function yd(e){if(e.propertyName==="value"&&rr(qi)){var t=[];md(t,qi,e,Wo(e)),ad(ag,t)}}function ig(e,t,n){e==="focusin"?(vd(),$i=t,qi=n,$i.attachEvent("onpropertychange",yd)):e==="focusout"&&vd()}function lg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rr(qi)}function rg(e,t){if(e==="click")return rr(t)}function og(e,t){if(e==="input"||e==="change")return rr(t)}function sg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:sg;function Gi(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!mt.call(t,l)||!Ct(e[l],t[l]))return!1}return!0}function wd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sd(e,t){var n=wd(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wd(n)}}function jd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Il(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Il(e.document)}return t}function os(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ug=cn&&"documentMode"in document&&11>=document.documentMode,Va=null,ss=null,Vi=null,us=!1;function Ed(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;us||Va==null||Va!==Il(a)||(a=Va,"selectionStart"in a&&os(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Vi&&Gi(Vi,a)||(Vi=a,a=Xr(ss,"onSelect"),0<a.length&&(t=new ir("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Va)))}function sa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xa={animationend:sa("Animation","AnimationEnd"),animationiteration:sa("Animation","AnimationIteration"),animationstart:sa("Animation","AnimationStart"),transitionrun:sa("Transition","TransitionRun"),transitionstart:sa("Transition","TransitionStart"),transitioncancel:sa("Transition","TransitionCancel"),transitionend:sa("Transition","TransitionEnd")},cs={},zd={};cn&&(zd=document.createElement("div").style,"AnimationEvent"in window||(delete Xa.animationend.animation,delete Xa.animationiteration.animation,delete Xa.animationstart.animation),"TransitionEvent"in window||delete Xa.transitionend.transition);function ua(e){if(cs[e])return cs[e];if(!Xa[e])return e;var t=Xa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zd)return cs[e]=t[n];return e}var kd=ua("animationend"),Td=ua("animationiteration"),Ad=ua("animationstart"),cg=ua("transitionrun"),dg=ua("transitionstart"),fg=ua("transitioncancel"),Md=ua("transitionend"),Rd=new Map,ds="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ds.push("scrollEnd");function Xt(e,t){Rd.set(e,t),ra(t,[e])}var Dd=new WeakMap;function _t(e,t){if(typeof e=="object"&&e!==null){var n=Dd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Kc(t)},Dd.set(e,t),t)}return{value:e,source:t,stack:Kc(t)}}var Nt=[],Za=0,fs=0;function or(){for(var e=Za,t=fs=Za=0;t<e;){var n=Nt[t];Nt[t++]=null;var a=Nt[t];Nt[t++]=null;var l=Nt[t];Nt[t++]=null;var r=Nt[t];if(Nt[t++]=null,a!==null&&l!==null){var d=a.pending;d===null?l.next=l:(l.next=d.next,d.next=l),a.pending=l}r!==0&&Od(n,l,r)}}function sr(e,t,n,a){Nt[Za++]=e,Nt[Za++]=t,Nt[Za++]=n,Nt[Za++]=a,fs|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function hs(e,t,n,a){return sr(e,t,n,a),ur(e)}function Qa(e,t){return sr(e,null,null,t),ur(e)}function Od(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,r=e.return;r!==null;)r.childLanes|=n,a=r.alternate,a!==null&&(a.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(l=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,l&&t!==null&&(l=31-lt(n),e=r.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),r):null}function ur(e){if(50<ml)throw ml=0,vu=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ka={};function hg(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(e,t,n,a){return new hg(e,t,n,a)}function ps(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dn(e,t){var n=e.alternate;return n===null?(n=Et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function _d(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function cr(e,t,n,a,l,r){var d=0;if(a=e,typeof e=="function")ps(e)&&(d=1);else if(typeof e=="string")d=m1(e,n,ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ue:return e=Et(31,n,t,l),e.elementType=ue,e.lanes=r,e;case D:return ca(n.children,l,r,t);case G:d=8,l|=24;break;case V:return e=Et(12,n,t,l|2),e.elementType=V,e.lanes=r,e;case Q:return e=Et(13,n,t,l),e.elementType=Q,e.lanes=r,e;case Z:return e=Et(19,n,t,l),e.elementType=Z,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case z:case Y:d=10;break e;case k:d=9;break e;case X:d=11;break e;case K:d=14;break e;case xe:d=16,a=null;break e}d=29,n=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=Et(d,n,t,l),t.elementType=e,t.type=a,t.lanes=r,t}function ca(e,t,n,a){return e=Et(7,e,a,t),e.lanes=n,e}function ms(e,t,n){return e=Et(6,e,null,t),e.lanes=n,e}function gs(e,t,n){return t=Et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ja=[],Wa=0,dr=null,fr=0,Lt=[],Bt=0,da=null,fn=1,hn="";function fa(e,t){Ja[Wa++]=fr,Ja[Wa++]=dr,dr=e,fr=t}function Nd(e,t,n){Lt[Bt++]=fn,Lt[Bt++]=hn,Lt[Bt++]=da,da=e;var a=fn;e=hn;var l=32-lt(a)-1;a&=~(1<<l),n+=1;var r=32-lt(t)+l;if(30<r){var d=l-l%5;r=(a&(1<<d)-1).toString(32),a>>=d,l-=d,fn=1<<32-lt(t)+l|n<<l|a,hn=r+e}else fn=1<<r|n<<l|a,hn=e}function xs(e){e.return!==null&&(fa(e,1),Nd(e,1,0))}function bs(e){for(;e===dr;)dr=Ja[--Wa],Ja[Wa]=null,fr=Ja[--Wa],Ja[Wa]=null;for(;e===da;)da=Lt[--Bt],Lt[Bt]=null,hn=Lt[--Bt],Lt[Bt]=null,fn=Lt[--Bt],Lt[Bt]=null}var ht=null,$e=null,ze=!1,ha=null,Ft=!1,vs=Error(u(519));function pa(e){var t=Error(u(418,""));throw Qi(_t(t,e)),vs}function Ld(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[ut]=e,t[gt]=a,n){case"dialog":ye("cancel",t),ye("close",t);break;case"iframe":case"object":case"embed":ye("load",t);break;case"video":case"audio":for(n=0;n<xl.length;n++)ye(xl[n],t);break;case"source":ye("error",t);break;case"img":case"image":case"link":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"input":ye("invalid",t),Pc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Fl(t);break;case"select":ye("invalid",t);break;case"textarea":ye("invalid",t),Ic(t,a.value,a.defaultValue,a.children),Fl(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||eh(t.textContent,n)?(a.popover!=null&&(ye("beforetoggle",t),ye("toggle",t)),a.onScroll!=null&&ye("scroll",t),a.onScrollEnd!=null&&ye("scrollend",t),a.onClick!=null&&(t.onclick=Zr),t=!0):t=!1,t||pa(e)}function Bd(e){for(ht=e.return;ht;)switch(ht.tag){case 5:case 13:Ft=!1;return;case 27:case 3:Ft=!0;return;default:ht=ht.return}}function Xi(e){if(e!==ht)return!1;if(!ze)return Bd(e),ze=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Nu(e.type,e.memoizedProps)),n=!n),n&&$e&&pa(e),Bd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){$e=Qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}$e=null}}else t===27?(t=$e,Qn(e.type)?(e=Hu,Hu=null,$e=e):$e=t):$e=ht?Qt(e.stateNode.nextSibling):null;return!0}function Zi(){$e=ht=null,ze=!1}function Ud(){var e=ha;return e!==null&&(yt===null?yt=e:yt.push.apply(yt,e),ha=null),e}function Qi(e){ha===null?ha=[e]:ha.push(e)}var ys=q(null),ma=null,pn=null;function Dn(e,t,n){P(ys,t._currentValue),t._currentValue=n}function mn(e){e._currentValue=ys.current,J(ys)}function ws(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Ss(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){var d=l.child;r=r.firstContext;e:for(;r!==null;){var h=r;r=l;for(var v=0;v<t.length;v++)if(h.context===t[v]){r.lanes|=n,h=r.alternate,h!==null&&(h.lanes|=n),ws(r.return,n,e),a||(d=null);break e}r=h.next}}else if(l.tag===18){if(d=l.return,d===null)throw Error(u(341));d.lanes|=n,r=d.alternate,r!==null&&(r.lanes|=n),ws(d,n,e),d=null}else d=l.child;if(d!==null)d.return=l;else for(d=l;d!==null;){if(d===e){d=null;break}if(l=d.sibling,l!==null){l.return=d.return,d=l;break}d=d.return}l=d}}function Ki(e,t,n,a){e=null;for(var l=t,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var d=l.alternate;if(d===null)throw Error(u(387));if(d=d.memoizedProps,d!==null){var h=l.type;Ct(l.pendingProps.value,d.value)||(e!==null?e.push(h):e=[h])}}else if(l===Ve.current){if(d=l.alternate,d===null)throw Error(u(387));d.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(jl):e=[jl])}l=l.return}e!==null&&Ss(t,e,n,a),t.flags|=262144}function hr(e){for(e=e.firstContext;e!==null;){if(!Ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ga(e){ma=e,pn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ct(e){return Hd(ma,e)}function pr(e,t){return ma===null&&ga(e),Hd(e,t)}function Hd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},pn===null){if(e===null)throw Error(u(308));pn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else pn=pn.next=t;return n}var pg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},mg=i.unstable_scheduleCallback,gg=i.unstable_NormalPriority,Pe={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function js(){return{controller:new pg,data:new Map,refCount:0}}function Ji(e){e.refCount--,e.refCount===0&&mg(gg,function(){e.controller.abort()})}var Wi=null,Cs=0,Pa=0,Fa=null;function xg(e,t){if(Wi===null){var n=Wi=[];Cs=0,Pa=zu(),Fa={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Cs++,t.then(Yd,Yd),t}function Yd(){if(--Cs===0&&Wi!==null){Fa!==null&&(Fa.status="fulfilled");var e=Wi;Wi=null,Pa=0,Fa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function bg(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var $d=L.S;L.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&xg(e,t),$d!==null&&$d(e,t)};var xa=q(null);function Es(){var e=xa.current;return e!==null?e:Le.pooledCache}function mr(e,t){t===null?P(xa,xa.current):P(xa,t.pool)}function qd(){var e=Es();return e===null?null:{parent:Pe._currentValue,pool:e}}var Pi=Error(u(460)),Gd=Error(u(474)),gr=Error(u(542)),zs={then:function(){}};function Vd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function xr(){}function Xd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(xr,xr),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Qd(e),e;default:if(typeof t.status=="string")t.then(xr,xr);else{if(e=Le,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Qd(e),e}throw Fi=t,Pi}}var Fi=null;function Zd(){if(Fi===null)throw Error(u(459));var e=Fi;return Fi=null,e}function Qd(e){if(e===Pi||e===gr)throw Error(u(483))}var On=!1;function ks(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ts(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _n(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Nn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ae&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=ur(e),Od(e,null,n),t}return sr(e,a,t,n),ur(e)}function Ii(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,An(e,n)}}function As(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?l=r=d:r=r.next=d,n=n.next}while(n!==null);r===null?l=r=t:r=r.next=t}else l=r=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ms=!1;function el(){if(Ms){var e=Fa;if(e!==null)throw e}}function tl(e,t,n,a){Ms=!1;var l=e.updateQueue;On=!1;var r=l.firstBaseUpdate,d=l.lastBaseUpdate,h=l.shared.pending;if(h!==null){l.shared.pending=null;var v=h,R=v.next;v.next=null,d===null?r=R:d.next=R,d=v;var B=e.alternate;B!==null&&(B=B.updateQueue,h=B.lastBaseUpdate,h!==d&&(h===null?B.firstBaseUpdate=R:h.next=R,B.lastBaseUpdate=v))}if(r!==null){var $=l.baseState;d=0,B=R=v=null,h=r;do{var O=h.lane&-536870913,_=O!==h.lane;if(_?(Se&O)===O:(a&O)===O){O!==0&&O===Pa&&(Ms=!0),B!==null&&(B=B.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var se=e,re=h;O=t;var Oe=n;switch(re.tag){case 1:if(se=re.payload,typeof se=="function"){$=se.call(Oe,$,O);break e}$=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=re.payload,O=typeof se=="function"?se.call(Oe,$,O):se,O==null)break e;$=C({},$,O);break e;case 2:On=!0}}O=h.callback,O!==null&&(e.flags|=64,_&&(e.flags|=8192),_=l.callbacks,_===null?l.callbacks=[O]:_.push(O))}else _={lane:O,tag:h.tag,payload:h.payload,callback:h.callback,next:null},B===null?(R=B=_,v=$):B=B.next=_,d|=O;if(h=h.next,h===null){if(h=l.shared.pending,h===null)break;_=h,h=_.next,_.next=null,l.lastBaseUpdate=_,l.shared.pending=null}}while(!0);B===null&&(v=$),l.baseState=v,l.firstBaseUpdate=R,l.lastBaseUpdate=B,r===null&&(l.shared.lanes=0),Gn|=d,e.lanes=d,e.memoizedState=$}}function Kd(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Jd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Kd(n[e],t)}var Ia=q(null),br=q(0);function Wd(e,t){e=Sn,P(br,e),P(Ia,t),Sn=e|t.baseLanes}function Rs(){P(br,Sn),P(Ia,Ia.current)}function Ds(){Sn=br.current,J(Ia),J(br)}var Ln=0,pe=null,Re=null,Qe=null,vr=!1,ei=!1,ba=!1,yr=0,nl=0,ti=null,vg=0;function Xe(){throw Error(u(321))}function Os(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ct(e[n],t[n]))return!1;return!0}function _s(e,t,n,a,l,r){return Ln=r,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,L.H=e===null||e.memoizedState===null?_f:Nf,ba=!1,r=n(a,l),ba=!1,ei&&(r=Fd(t,n,a,l)),Pd(e),r}function Pd(e){L.H=zr;var t=Re!==null&&Re.next!==null;if(Ln=0,Qe=Re=pe=null,vr=!1,nl=0,ti=null,t)throw Error(u(300));e===null||et||(e=e.dependencies,e!==null&&hr(e)&&(et=!0))}function Fd(e,t,n,a){pe=e;var l=0;do{if(ei&&(ti=null),nl=0,ei=!1,25<=l)throw Error(u(301));if(l+=1,Qe=Re=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}L.H=zg,r=t(n,a)}while(ei);return r}function yg(){var e=L.H,t=e.useState()[0];return t=typeof t.then=="function"?al(t):t,e=e.useState()[0],(Re!==null?Re.memoizedState:null)!==e&&(pe.flags|=1024),t}function Ns(){var e=yr!==0;return yr=0,e}function Ls(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Bs(e){if(vr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vr=!1}Ln=0,Qe=Re=pe=null,ei=!1,nl=yr=0,ti=null}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?pe.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Ke(){if(Re===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Qe===null?pe.memoizedState:Qe.next;if(t!==null)Qe=t,Re=e;else{if(e===null)throw pe.alternate===null?Error(u(467)):Error(u(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Qe===null?pe.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function Us(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function al(e){var t=nl;return nl+=1,ti===null&&(ti=[]),e=Xd(ti,e,t),t=pe,(Qe===null?t.memoizedState:Qe.next)===null&&(t=t.alternate,L.H=t===null||t.memoizedState===null?_f:Nf),e}function wr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return al(e);if(e.$$typeof===Y)return ct(e)}throw Error(u(438,String(e)))}function Hs(e){var t=null,n=pe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=pe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Us(),pe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=F;return t.index++,n}function gn(e,t){return typeof t=="function"?t(e):t}function Sr(e){var t=Ke();return Ys(t,Re,e)}function Ys(e,t,n){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var l=e.baseQueue,r=a.pending;if(r!==null){if(l!==null){var d=l.next;l.next=r.next,r.next=d}t.baseQueue=l=r,a.pending=null}if(r=e.baseState,l===null)e.memoizedState=r;else{t=l.next;var h=d=null,v=null,R=t,B=!1;do{var $=R.lane&-536870913;if($!==R.lane?(Se&$)===$:(Ln&$)===$){var O=R.revertLane;if(O===0)v!==null&&(v=v.next={lane:0,revertLane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),$===Pa&&(B=!0);else if((Ln&O)===O){R=R.next,O===Pa&&(B=!0);continue}else $={lane:0,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},v===null?(h=v=$,d=r):v=v.next=$,pe.lanes|=O,Gn|=O;$=R.action,ba&&n(r,$),r=R.hasEagerState?R.eagerState:n(r,$)}else O={lane:$,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},v===null?(h=v=O,d=r):v=v.next=O,pe.lanes|=$,Gn|=$;R=R.next}while(R!==null&&R!==t);if(v===null?d=r:v.next=h,!Ct(r,e.memoizedState)&&(et=!0,B&&(n=Fa,n!==null)))throw n;e.memoizedState=r,e.baseState=d,e.baseQueue=v,a.lastRenderedState=r}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function $s(e){var t=Ke(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,r=t.memoizedState;if(l!==null){n.pending=null;var d=l=l.next;do r=e(r,d.action),d=d.next;while(d!==l);Ct(r,t.memoizedState)||(et=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,a]}function Id(e,t,n){var a=pe,l=Ke(),r=ze;if(r){if(n===void 0)throw Error(u(407));n=n()}else n=t();var d=!Ct((Re||l).memoizedState,n);d&&(l.memoizedState=n,et=!0),l=l.queue;var h=nf.bind(null,a,l,e);if(il(2048,8,h,[e]),l.getSnapshot!==t||d||Qe!==null&&Qe.memoizedState.tag&1){if(a.flags|=2048,ni(9,jr(),tf.bind(null,a,l,n,t),null),Le===null)throw Error(u(349));r||(Ln&124)!==0||ef(a,t,n)}return n}function ef(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t=Us(),pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function tf(e,t,n,a){t.value=n,t.getSnapshot=a,af(t)&&lf(e)}function nf(e,t,n){return n(function(){af(t)&&lf(e)})}function af(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ct(e,n)}catch{return!0}}function lf(e){var t=Qa(e,2);t!==null&&Mt(t,e,2)}function qs(e){var t=bt();if(typeof e=="function"){var n=e;if(e=n(),ba){Gt(!0);try{n()}finally{Gt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:e},t}function rf(e,t,n,a){return e.baseState=n,Ys(e,Re,typeof a=="function"?a:gn)}function wg(e,t,n,a,l){if(Er(e))throw Error(u(485));if(e=t.action,e!==null){var r={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){r.listeners.push(d)}};L.T!==null?n(!0):r.isTransition=!1,a(r),n=t.pending,n===null?(r.next=t.pending=r,of(t,r)):(r.next=n.next,t.pending=n.next=r)}}function of(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var r=L.T,d={};L.T=d;try{var h=n(l,a),v=L.S;v!==null&&v(d,h),sf(e,t,h)}catch(R){Gs(e,t,R)}finally{L.T=r}}else try{r=n(l,a),sf(e,t,r)}catch(R){Gs(e,t,R)}}function sf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){uf(e,t,a)},function(a){return Gs(e,t,a)}):uf(e,t,n)}function uf(e,t,n){t.status="fulfilled",t.value=n,cf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,of(e,n)))}function Gs(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,cf(t),t=t.next;while(t!==a)}e.action=null}function cf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function df(e,t){return t}function ff(e,t){if(ze){var n=Le.formState;if(n!==null){e:{var a=pe;if(ze){if($e){t:{for(var l=$e,r=Ft;l.nodeType!==8;){if(!r){l=null;break t}if(l=Qt(l.nextSibling),l===null){l=null;break t}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){$e=Qt(l.nextSibling),a=l.data==="F!";break e}}pa(a)}a=!1}a&&(t=n[0])}}return n=bt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:df,lastRenderedState:t},n.queue=a,n=Rf.bind(null,pe,a),a.dispatch=n,a=qs(!1),r=Ks.bind(null,pe,!1,a.queue),a=bt(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=wg.bind(null,pe,l,r,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function hf(e){var t=Ke();return pf(t,Re,e)}function pf(e,t,n){if(t=Ys(e,t,df)[0],e=Sr(gn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=al(t)}catch(d){throw d===Pi?gr:d}else a=t;t=Ke();var l=t.queue,r=l.dispatch;return n!==t.memoizedState&&(pe.flags|=2048,ni(9,jr(),Sg.bind(null,l,n),null)),[a,r,e]}function Sg(e,t){e.action=t}function mf(e){var t=Ke(),n=Re;if(n!==null)return pf(t,n,e);Ke(),t=t.memoizedState,n=Ke();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function ni(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=pe.updateQueue,t===null&&(t=Us(),pe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function jr(){return{destroy:void 0,resource:void 0}}function gf(){return Ke().memoizedState}function Cr(e,t,n,a){var l=bt();a=a===void 0?null:a,pe.flags|=e,l.memoizedState=ni(1|t,jr(),n,a)}function il(e,t,n,a){var l=Ke();a=a===void 0?null:a;var r=l.memoizedState.inst;Re!==null&&a!==null&&Os(a,Re.memoizedState.deps)?l.memoizedState=ni(t,r,n,a):(pe.flags|=e,l.memoizedState=ni(1|t,r,n,a))}function xf(e,t){Cr(8390656,8,e,t)}function bf(e,t){il(2048,8,e,t)}function vf(e,t){return il(4,2,e,t)}function yf(e,t){return il(4,4,e,t)}function wf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sf(e,t,n){n=n!=null?n.concat([e]):null,il(4,4,wf.bind(null,t,e),n)}function Vs(){}function jf(e,t){var n=Ke();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Os(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Cf(e,t){var n=Ke();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Os(t,a[1]))return a[0];if(a=e(),ba){Gt(!0);try{e()}finally{Gt(!1)}}return n.memoizedState=[a,t],a}function Xs(e,t,n){return n===void 0||(Ln&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=k0(),pe.lanes|=e,Gn|=e,n)}function Ef(e,t,n,a){return Ct(n,t)?n:Ia.current!==null?(e=Xs(e,n,a),Ct(e,t)||(et=!0),e):(Ln&42)===0?(et=!0,e.memoizedState=n):(e=k0(),pe.lanes|=e,Gn|=e,t)}function zf(e,t,n,a,l){var r=W.p;W.p=r!==0&&8>r?r:8;var d=L.T,h={};L.T=h,Ks(e,!1,t,n);try{var v=l(),R=L.S;if(R!==null&&R(h,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var B=bg(v,a);ll(e,t,B,At(e))}else ll(e,t,a,At(e))}catch($){ll(e,t,{then:function(){},status:"rejected",reason:$},At())}finally{W.p=r,L.T=d}}function jg(){}function Zs(e,t,n,a){if(e.tag!==5)throw Error(u(476));var l=kf(e).queue;zf(e,l,t,le,n===null?jg:function(){return Tf(e),n(a)})}function kf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Tf(e){var t=kf(e).next.queue;ll(e,t,{},At())}function Qs(){return ct(jl)}function Af(){return Ke().memoizedState}function Mf(){return Ke().memoizedState}function Cg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=At();e=_n(n);var a=Nn(t,e,n);a!==null&&(Mt(a,t,n),Ii(a,t,n)),t={cache:js()},e.payload=t;return}t=t.return}}function Eg(e,t,n){var a=At();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Er(e)?Df(t,n):(n=hs(e,t,n,a),n!==null&&(Mt(n,e,a),Of(n,t,a)))}function Rf(e,t,n){var a=At();ll(e,t,n,a)}function ll(e,t,n,a){var l={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Er(e))Df(t,l);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var d=t.lastRenderedState,h=r(d,n);if(l.hasEagerState=!0,l.eagerState=h,Ct(h,d))return sr(e,t,l,0),Le===null&&or(),!1}catch{}finally{}if(n=hs(e,t,l,a),n!==null)return Mt(n,e,a),Of(n,t,a),!0}return!1}function Ks(e,t,n,a){if(a={lane:2,revertLane:zu(),action:a,hasEagerState:!1,eagerState:null,next:null},Er(e)){if(t)throw Error(u(479))}else t=hs(e,n,a,2),t!==null&&Mt(t,e,2)}function Er(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function Df(e,t){ei=vr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Of(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,An(e,n)}}var zr={readContext:ct,use:wr,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useLayoutEffect:Xe,useInsertionEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useSyncExternalStore:Xe,useId:Xe,useHostTransitionStatus:Xe,useFormState:Xe,useActionState:Xe,useOptimistic:Xe,useMemoCache:Xe,useCacheRefresh:Xe},_f={readContext:ct,use:wr,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:xf,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Cr(4194308,4,wf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Cr(4194308,4,e,t)},useInsertionEffect:function(e,t){Cr(4,2,e,t)},useMemo:function(e,t){var n=bt();t=t===void 0?null:t;var a=e();if(ba){Gt(!0);try{e()}finally{Gt(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=bt();if(n!==void 0){var l=n(t);if(ba){Gt(!0);try{n(t)}finally{Gt(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=Eg.bind(null,pe,e),[a.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:function(e){e=qs(e);var t=e.queue,n=Rf.bind(null,pe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Vs,useDeferredValue:function(e,t){var n=bt();return Xs(n,e,t)},useTransition:function(){var e=qs(!1);return e=zf.bind(null,pe,e.queue,!0,!1),bt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=pe,l=bt();if(ze){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Le===null)throw Error(u(349));(Se&124)!==0||ef(a,t,n)}l.memoizedState=n;var r={value:n,getSnapshot:t};return l.queue=r,xf(nf.bind(null,a,r,e),[e]),a.flags|=2048,ni(9,jr(),tf.bind(null,a,r,n,t),null),n},useId:function(){var e=bt(),t=Le.identifierPrefix;if(ze){var n=hn,a=fn;n=(a&~(1<<32-lt(a)-1)).toString(32)+n,t="«"+t+"R"+n,n=yr++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=vg++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Qs,useFormState:ff,useActionState:ff,useOptimistic:function(e){var t=bt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ks.bind(null,pe,!0,n),n.dispatch=t,[e,t]},useMemoCache:Hs,useCacheRefresh:function(){return bt().memoizedState=Cg.bind(null,pe)}},Nf={readContext:ct,use:wr,useCallback:jf,useContext:ct,useEffect:bf,useImperativeHandle:Sf,useInsertionEffect:vf,useLayoutEffect:yf,useMemo:Cf,useReducer:Sr,useRef:gf,useState:function(){return Sr(gn)},useDebugValue:Vs,useDeferredValue:function(e,t){var n=Ke();return Ef(n,Re.memoizedState,e,t)},useTransition:function(){var e=Sr(gn)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:al(e),t]},useSyncExternalStore:Id,useId:Af,useHostTransitionStatus:Qs,useFormState:hf,useActionState:hf,useOptimistic:function(e,t){var n=Ke();return rf(n,Re,e,t)},useMemoCache:Hs,useCacheRefresh:Mf},zg={readContext:ct,use:wr,useCallback:jf,useContext:ct,useEffect:bf,useImperativeHandle:Sf,useInsertionEffect:vf,useLayoutEffect:yf,useMemo:Cf,useReducer:$s,useRef:gf,useState:function(){return $s(gn)},useDebugValue:Vs,useDeferredValue:function(e,t){var n=Ke();return Re===null?Xs(n,e,t):Ef(n,Re.memoizedState,e,t)},useTransition:function(){var e=$s(gn)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:al(e),t]},useSyncExternalStore:Id,useId:Af,useHostTransitionStatus:Qs,useFormState:mf,useActionState:mf,useOptimistic:function(e,t){var n=Ke();return Re!==null?rf(n,Re,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Hs,useCacheRefresh:Mf},ai=null,rl=0;function kr(e){var t=rl;return rl+=1,ai===null&&(ai=[]),Xd(ai,e,t)}function ol(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Tr(e,t){throw t.$$typeof===T?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Lf(e){var t=e._init;return t(e._payload)}function Bf(e){function t(E,S){if(e){var A=E.deletions;A===null?(E.deletions=[S],E.flags|=16):A.push(S)}}function n(E,S){if(!e)return null;for(;S!==null;)t(E,S),S=S.sibling;return null}function a(E){for(var S=new Map;E!==null;)E.key!==null?S.set(E.key,E):S.set(E.index,E),E=E.sibling;return S}function l(E,S){return E=dn(E,S),E.index=0,E.sibling=null,E}function r(E,S,A){return E.index=A,e?(A=E.alternate,A!==null?(A=A.index,A<S?(E.flags|=67108866,S):A):(E.flags|=67108866,S)):(E.flags|=1048576,S)}function d(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function h(E,S,A,H){return S===null||S.tag!==6?(S=ms(A,E.mode,H),S.return=E,S):(S=l(S,A),S.return=E,S)}function v(E,S,A,H){var te=A.type;return te===D?B(E,S,A.props.children,H,A.key):S!==null&&(S.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===xe&&Lf(te)===S.type)?(S=l(S,A.props),ol(S,A),S.return=E,S):(S=cr(A.type,A.key,A.props,null,E.mode,H),ol(S,A),S.return=E,S)}function R(E,S,A,H){return S===null||S.tag!==4||S.stateNode.containerInfo!==A.containerInfo||S.stateNode.implementation!==A.implementation?(S=gs(A,E.mode,H),S.return=E,S):(S=l(S,A.children||[]),S.return=E,S)}function B(E,S,A,H,te){return S===null||S.tag!==7?(S=ca(A,E.mode,H,te),S.return=E,S):(S=l(S,A),S.return=E,S)}function $(E,S,A){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=ms(""+S,E.mode,A),S.return=E,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case M:return A=cr(S.type,S.key,S.props,null,E.mode,A),ol(A,S),A.return=E,A;case N:return S=gs(S,E.mode,A),S.return=E,S;case xe:var H=S._init;return S=H(S._payload),$(E,S,A)}if(Ge(S)||Ce(S))return S=ca(S,E.mode,A,null),S.return=E,S;if(typeof S.then=="function")return $(E,kr(S),A);if(S.$$typeof===Y)return $(E,pr(E,S),A);Tr(E,S)}return null}function O(E,S,A,H){var te=S!==null?S.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return te!==null?null:h(E,S,""+A,H);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case M:return A.key===te?v(E,S,A,H):null;case N:return A.key===te?R(E,S,A,H):null;case xe:return te=A._init,A=te(A._payload),O(E,S,A,H)}if(Ge(A)||Ce(A))return te!==null?null:B(E,S,A,H,null);if(typeof A.then=="function")return O(E,S,kr(A),H);if(A.$$typeof===Y)return O(E,S,pr(E,A),H);Tr(E,A)}return null}function _(E,S,A,H,te){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return E=E.get(A)||null,h(S,E,""+H,te);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case M:return E=E.get(H.key===null?A:H.key)||null,v(S,E,H,te);case N:return E=E.get(H.key===null?A:H.key)||null,R(S,E,H,te);case xe:var ge=H._init;return H=ge(H._payload),_(E,S,A,H,te)}if(Ge(H)||Ce(H))return E=E.get(A)||null,B(S,E,H,te,null);if(typeof H.then=="function")return _(E,S,A,kr(H),te);if(H.$$typeof===Y)return _(E,S,A,pr(S,H),te);Tr(S,H)}return null}function se(E,S,A,H){for(var te=null,ge=null,ae=S,oe=S=0,nt=null;ae!==null&&oe<A.length;oe++){ae.index>oe?(nt=ae,ae=null):nt=ae.sibling;var Ee=O(E,ae,A[oe],H);if(Ee===null){ae===null&&(ae=nt);break}e&&ae&&Ee.alternate===null&&t(E,ae),S=r(Ee,S,oe),ge===null?te=Ee:ge.sibling=Ee,ge=Ee,ae=nt}if(oe===A.length)return n(E,ae),ze&&fa(E,oe),te;if(ae===null){for(;oe<A.length;oe++)ae=$(E,A[oe],H),ae!==null&&(S=r(ae,S,oe),ge===null?te=ae:ge.sibling=ae,ge=ae);return ze&&fa(E,oe),te}for(ae=a(ae);oe<A.length;oe++)nt=_(ae,E,oe,A[oe],H),nt!==null&&(e&&nt.alternate!==null&&ae.delete(nt.key===null?oe:nt.key),S=r(nt,S,oe),ge===null?te=nt:ge.sibling=nt,ge=nt);return e&&ae.forEach(function(Fn){return t(E,Fn)}),ze&&fa(E,oe),te}function re(E,S,A,H){if(A==null)throw Error(u(151));for(var te=null,ge=null,ae=S,oe=S=0,nt=null,Ee=A.next();ae!==null&&!Ee.done;oe++,Ee=A.next()){ae.index>oe?(nt=ae,ae=null):nt=ae.sibling;var Fn=O(E,ae,Ee.value,H);if(Fn===null){ae===null&&(ae=nt);break}e&&ae&&Fn.alternate===null&&t(E,ae),S=r(Fn,S,oe),ge===null?te=Fn:ge.sibling=Fn,ge=Fn,ae=nt}if(Ee.done)return n(E,ae),ze&&fa(E,oe),te;if(ae===null){for(;!Ee.done;oe++,Ee=A.next())Ee=$(E,Ee.value,H),Ee!==null&&(S=r(Ee,S,oe),ge===null?te=Ee:ge.sibling=Ee,ge=Ee);return ze&&fa(E,oe),te}for(ae=a(ae);!Ee.done;oe++,Ee=A.next())Ee=_(ae,E,oe,Ee.value,H),Ee!==null&&(e&&Ee.alternate!==null&&ae.delete(Ee.key===null?oe:Ee.key),S=r(Ee,S,oe),ge===null?te=Ee:ge.sibling=Ee,ge=Ee);return e&&ae.forEach(function(k1){return t(E,k1)}),ze&&fa(E,oe),te}function Oe(E,S,A,H){if(typeof A=="object"&&A!==null&&A.type===D&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case M:e:{for(var te=A.key;S!==null;){if(S.key===te){if(te=A.type,te===D){if(S.tag===7){n(E,S.sibling),H=l(S,A.props.children),H.return=E,E=H;break e}}else if(S.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===xe&&Lf(te)===S.type){n(E,S.sibling),H=l(S,A.props),ol(H,A),H.return=E,E=H;break e}n(E,S);break}else t(E,S);S=S.sibling}A.type===D?(H=ca(A.props.children,E.mode,H,A.key),H.return=E,E=H):(H=cr(A.type,A.key,A.props,null,E.mode,H),ol(H,A),H.return=E,E=H)}return d(E);case N:e:{for(te=A.key;S!==null;){if(S.key===te)if(S.tag===4&&S.stateNode.containerInfo===A.containerInfo&&S.stateNode.implementation===A.implementation){n(E,S.sibling),H=l(S,A.children||[]),H.return=E,E=H;break e}else{n(E,S);break}else t(E,S);S=S.sibling}H=gs(A,E.mode,H),H.return=E,E=H}return d(E);case xe:return te=A._init,A=te(A._payload),Oe(E,S,A,H)}if(Ge(A))return se(E,S,A,H);if(Ce(A)){if(te=Ce(A),typeof te!="function")throw Error(u(150));return A=te.call(A),re(E,S,A,H)}if(typeof A.then=="function")return Oe(E,S,kr(A),H);if(A.$$typeof===Y)return Oe(E,S,pr(E,A),H);Tr(E,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,S!==null&&S.tag===6?(n(E,S.sibling),H=l(S,A),H.return=E,E=H):(n(E,S),H=ms(A,E.mode,H),H.return=E,E=H),d(E)):n(E,S)}return function(E,S,A,H){try{rl=0;var te=Oe(E,S,A,H);return ai=null,te}catch(ae){if(ae===Pi||ae===gr)throw ae;var ge=Et(29,ae,null,E.mode);return ge.lanes=H,ge.return=E,ge}finally{}}}var ii=Bf(!0),Uf=Bf(!1),Ut=q(null),It=null;function Bn(e){var t=e.alternate;P(Fe,Fe.current&1),P(Ut,e),It===null&&(t===null||Ia.current!==null||t.memoizedState!==null)&&(It=e)}function Hf(e){if(e.tag===22){if(P(Fe,Fe.current),P(Ut,e),It===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(It=e)}}else Un()}function Un(){P(Fe,Fe.current),P(Ut,Ut.current)}function xn(e){J(Ut),It===e&&(It=null),J(Fe)}var Fe=q(0);function Ar(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Uu(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Js(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:C({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=At(),l=_n(a);l.payload=t,n!=null&&(l.callback=n),t=Nn(e,l,a),t!==null&&(Mt(t,e,a),Ii(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=At(),l=_n(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Nn(e,l,a),t!==null&&(Mt(t,e,a),Ii(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=At(),a=_n(n);a.tag=2,t!=null&&(a.callback=t),t=Nn(e,a,n),t!==null&&(Mt(t,e,n),Ii(t,e,n))}};function Yf(e,t,n,a,l,r,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,d):t.prototype&&t.prototype.isPureReactComponent?!Gi(n,a)||!Gi(l,r):!0}function $f(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function va(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=C({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}var Mr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function qf(e){Mr(e)}function Gf(e){console.error(e)}function Vf(e){Mr(e)}function Rr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Xf(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Ps(e,t,n){return n=_n(n),n.tag=3,n.payload={element:null},n.callback=function(){Rr(e,t)},n}function Zf(e){return e=_n(e),e.tag=3,e}function Qf(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var r=a.value;e.payload=function(){return l(r)},e.callback=function(){Xf(t,n,a)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){Xf(t,n,a),typeof l!="function"&&(Vn===null?Vn=new Set([this]):Vn.add(this));var h=a.stack;this.componentDidCatch(a.value,{componentStack:h!==null?h:""})})}function kg(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Ki(t,n,l,!0),n=Ut.current,n!==null){switch(n.tag){case 13:return It===null?wu():n.alternate===null&&qe===0&&(qe=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===zs?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),ju(e,a,l)),!1;case 22:return n.flags|=65536,a===zs?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),ju(e,a,l)),!1}throw Error(u(435,n.tag))}return ju(e,a,l),wu(),!1}if(ze)return t=Ut.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==vs&&(e=Error(u(422),{cause:a}),Qi(_t(e,n)))):(a!==vs&&(t=Error(u(423),{cause:a}),Qi(_t(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=_t(a,n),l=Ps(e.stateNode,a,l),As(e,l),qe!==4&&(qe=2)),!1;var r=Error(u(520),{cause:a});if(r=_t(r,n),pl===null?pl=[r]:pl.push(r),qe!==4&&(qe=2),t===null)return!0;a=_t(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Ps(n.stateNode,a,e),As(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Vn===null||!Vn.has(r))))return n.flags|=65536,l&=-l,n.lanes|=l,l=Zf(l),Qf(l,e,n,a),As(n,l),!1}n=n.return}while(n!==null);return!1}var Kf=Error(u(461)),et=!1;function rt(e,t,n,a){t.child=e===null?Uf(t,null,n,a):ii(t,e.child,n,a)}function Jf(e,t,n,a,l){n=n.render;var r=t.ref;if("ref"in a){var d={};for(var h in a)h!=="ref"&&(d[h]=a[h])}else d=a;return ga(t),a=_s(e,t,n,d,r,l),h=Ns(),e!==null&&!et?(Ls(e,t,l),bn(e,t,l)):(ze&&h&&xs(t),t.flags|=1,rt(e,t,a,l),t.child)}function Wf(e,t,n,a,l){if(e===null){var r=n.type;return typeof r=="function"&&!ps(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,Pf(e,t,r,a,l)):(e=cr(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!lu(e,l)){var d=r.memoizedProps;if(n=n.compare,n=n!==null?n:Gi,n(d,a)&&e.ref===t.ref)return bn(e,t,l)}return t.flags|=1,e=dn(r,a),e.ref=t.ref,e.return=t,t.child=e}function Pf(e,t,n,a,l){if(e!==null){var r=e.memoizedProps;if(Gi(r,a)&&e.ref===t.ref)if(et=!1,t.pendingProps=a=r,lu(e,l))(e.flags&131072)!==0&&(et=!0);else return t.lanes=e.lanes,bn(e,t,l)}return Fs(e,t,n,a,l)}function Ff(e,t,n){var a=t.pendingProps,l=a.children,r=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=r!==null?r.baseLanes|n:n,e!==null){for(l=t.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;t.childLanes=r&~a}else t.childLanes=0,t.child=null;return If(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&mr(t,r!==null?r.cachePool:null),r!==null?Wd(t,r):Rs(),Hf(t);else return t.lanes=t.childLanes=536870912,If(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(mr(t,r.cachePool),Wd(t,r),Un(),t.memoizedState=null):(e!==null&&mr(t,null),Rs(),Un());return rt(e,t,l,n),t.child}function If(e,t,n,a){var l=Es();return l=l===null?null:{parent:Pe._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&mr(t,null),Rs(),Hf(t),e!==null&&Ki(e,t,a,!0),null}function Dr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Fs(e,t,n,a,l){return ga(t),n=_s(e,t,n,a,void 0,l),a=Ns(),e!==null&&!et?(Ls(e,t,l),bn(e,t,l)):(ze&&a&&xs(t),t.flags|=1,rt(e,t,n,l),t.child)}function e0(e,t,n,a,l,r){return ga(t),t.updateQueue=null,n=Fd(t,a,n,l),Pd(e),a=Ns(),e!==null&&!et?(Ls(e,t,r),bn(e,t,r)):(ze&&a&&xs(t),t.flags|=1,rt(e,t,n,r),t.child)}function t0(e,t,n,a,l){if(ga(t),t.stateNode===null){var r=Ka,d=n.contextType;typeof d=="object"&&d!==null&&(r=ct(d)),r=new n(a,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ws,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=a,r.state=t.memoizedState,r.refs={},ks(t),d=n.contextType,r.context=typeof d=="object"&&d!==null?ct(d):Ka,r.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(Js(t,n,d,a),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(d=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),d!==r.state&&Ws.enqueueReplaceState(r,r.state,null),tl(t,a,r,l),el(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){r=t.stateNode;var h=t.memoizedProps,v=va(n,h);r.props=v;var R=r.context,B=n.contextType;d=Ka,typeof B=="object"&&B!==null&&(d=ct(B));var $=n.getDerivedStateFromProps;B=typeof $=="function"||typeof r.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,B||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h||R!==d)&&$f(t,r,a,d),On=!1;var O=t.memoizedState;r.state=O,tl(t,a,r,l),el(),R=t.memoizedState,h||O!==R||On?(typeof $=="function"&&(Js(t,n,$,a),R=t.memoizedState),(v=On||Yf(t,n,v,a,O,R,d))?(B||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=R),r.props=a,r.state=R,r.context=d,a=v):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{r=t.stateNode,Ts(e,t),d=t.memoizedProps,B=va(n,d),r.props=B,$=t.pendingProps,O=r.context,R=n.contextType,v=Ka,typeof R=="object"&&R!==null&&(v=ct(R)),h=n.getDerivedStateFromProps,(R=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(d!==$||O!==v)&&$f(t,r,a,v),On=!1,O=t.memoizedState,r.state=O,tl(t,a,r,l),el();var _=t.memoizedState;d!==$||O!==_||On||e!==null&&e.dependencies!==null&&hr(e.dependencies)?(typeof h=="function"&&(Js(t,n,h,a),_=t.memoizedState),(B=On||Yf(t,n,B,a,O,_,v)||e!==null&&e.dependencies!==null&&hr(e.dependencies))?(R||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,_,v),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,_,v)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||d===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=_),r.props=a,r.state=_,r.context=v,a=B):(typeof r.componentDidUpdate!="function"||d===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),a=!1)}return r=a,Dr(e,t),a=(t.flags&128)!==0,r||a?(r=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&a?(t.child=ii(t,e.child,null,l),t.child=ii(t,null,n,l)):rt(e,t,n,l),t.memoizedState=r.state,e=t.child):e=bn(e,t,l),e}function n0(e,t,n,a){return Zi(),t.flags|=256,rt(e,t,n,a),t.child}var Is={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function eu(e){return{baseLanes:e,cachePool:qd()}}function tu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ht),e}function a0(e,t,n){var a=t.pendingProps,l=!1,r=(t.flags&128)!==0,d;if((d=r)||(d=e!==null&&e.memoizedState===null?!1:(Fe.current&2)!==0),d&&(l=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(ze){if(l?Bn(t):Un(),ze){var h=$e,v;if(v=h){e:{for(v=h,h=Ft;v.nodeType!==8;){if(!h){h=null;break e}if(v=Qt(v.nextSibling),v===null){h=null;break e}}h=v}h!==null?(t.memoizedState={dehydrated:h,treeContext:da!==null?{id:fn,overflow:hn}:null,retryLane:536870912,hydrationErrors:null},v=Et(18,null,null,0),v.stateNode=h,v.return=t,t.child=v,ht=t,$e=null,v=!0):v=!1}v||pa(t)}if(h=t.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return Uu(h)?t.lanes=32:t.lanes=536870912,null;xn(t)}return h=a.children,a=a.fallback,l?(Un(),l=t.mode,h=Or({mode:"hidden",children:h},l),a=ca(a,l,n,null),h.return=t,a.return=t,h.sibling=a,t.child=h,l=t.child,l.memoizedState=eu(n),l.childLanes=tu(e,d,n),t.memoizedState=Is,a):(Bn(t),nu(t,h))}if(v=e.memoizedState,v!==null&&(h=v.dehydrated,h!==null)){if(r)t.flags&256?(Bn(t),t.flags&=-257,t=au(e,t,n)):t.memoizedState!==null?(Un(),t.child=e.child,t.flags|=128,t=null):(Un(),l=a.fallback,h=t.mode,a=Or({mode:"visible",children:a.children},h),l=ca(l,h,n,null),l.flags|=2,a.return=t,l.return=t,a.sibling=l,t.child=a,ii(t,e.child,null,n),a=t.child,a.memoizedState=eu(n),a.childLanes=tu(e,d,n),t.memoizedState=Is,t=l);else if(Bn(t),Uu(h)){if(d=h.nextSibling&&h.nextSibling.dataset,d)var R=d.dgst;d=R,a=Error(u(419)),a.stack="",a.digest=d,Qi({value:a,source:null,stack:null}),t=au(e,t,n)}else if(et||Ki(e,t,n,!1),d=(n&e.childLanes)!==0,et||d){if(d=Le,d!==null&&(a=n&-n,a=(a&42)!==0?1:Vt(a),a=(a&(d.suspendedLanes|n))!==0?0:a,a!==0&&a!==v.retryLane))throw v.retryLane=a,Qa(e,a),Mt(d,e,a),Kf;h.data==="$?"||wu(),t=au(e,t,n)}else h.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,$e=Qt(h.nextSibling),ht=t,ze=!0,ha=null,Ft=!1,e!==null&&(Lt[Bt++]=fn,Lt[Bt++]=hn,Lt[Bt++]=da,fn=e.id,hn=e.overflow,da=t),t=nu(t,a.children),t.flags|=4096);return t}return l?(Un(),l=a.fallback,h=t.mode,v=e.child,R=v.sibling,a=dn(v,{mode:"hidden",children:a.children}),a.subtreeFlags=v.subtreeFlags&65011712,R!==null?l=dn(R,l):(l=ca(l,h,n,null),l.flags|=2),l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,h=e.child.memoizedState,h===null?h=eu(n):(v=h.cachePool,v!==null?(R=Pe._currentValue,v=v.parent!==R?{parent:R,pool:R}:v):v=qd(),h={baseLanes:h.baseLanes|n,cachePool:v}),l.memoizedState=h,l.childLanes=tu(e,d,n),t.memoizedState=Is,a):(Bn(t),n=e.child,e=n.sibling,n=dn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function nu(e,t){return t=Or({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Or(e,t){return e=Et(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function au(e,t,n){return ii(t,e.child,null,n),e=nu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function i0(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),ws(e.return,t,n)}function iu(e,t,n,a,l){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=n,r.tailMode=l)}function l0(e,t,n){var a=t.pendingProps,l=a.revealOrder,r=a.tail;if(rt(e,t,a.children,n),a=Fe.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&i0(e,n,t);else if(e.tag===19)i0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(P(Fe,a),l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Ar(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),iu(t,!1,l,n,r);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Ar(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}iu(t,!0,n,null,r);break;case"together":iu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ki(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=dn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function lu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&hr(e)))}function Tg(e,t,n){switch(t.tag){case 3:we(t,t.stateNode.containerInfo),Dn(t,Pe,e.memoizedState.cache),Zi();break;case 27:case 5:Jt(t);break;case 4:we(t,t.stateNode.containerInfo);break;case 10:Dn(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Bn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?a0(e,t,n):(Bn(t),e=bn(e,t,n),e!==null?e.sibling:null);Bn(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Ki(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return l0(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),P(Fe,Fe.current),a)break;return null;case 22:case 23:return t.lanes=0,Ff(e,t,n);case 24:Dn(t,Pe,e.memoizedState.cache)}return bn(e,t,n)}function r0(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)et=!0;else{if(!lu(e,n)&&(t.flags&128)===0)return et=!1,Tg(e,t,n);et=(e.flags&131072)!==0}else et=!1,ze&&(t.flags&1048576)!==0&&Nd(t,fr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,l=a._init;if(a=l(a._payload),t.type=a,typeof a=="function")ps(a)?(e=va(a,e),t.tag=1,t=t0(null,t,a,e,n)):(t.tag=0,t=Fs(null,t,a,e,n));else{if(a!=null){if(l=a.$$typeof,l===X){t.tag=11,t=Jf(null,t,a,e,n);break e}else if(l===K){t.tag=14,t=Wf(null,t,a,e,n);break e}}throw t=pt(a)||a,Error(u(306,t,""))}}return t;case 0:return Fs(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=va(a,t.pendingProps),t0(e,t,a,l,n);case 3:e:{if(we(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var r=t.memoizedState;l=r.element,Ts(e,t),tl(t,a,null,n);var d=t.memoizedState;if(a=d.cache,Dn(t,Pe,a),a!==r.cache&&Ss(t,[Pe],n,!0),el(),a=d.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=n0(e,t,a,n);break e}else if(a!==l){l=_t(Error(u(424)),t),Qi(l),t=n0(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for($e=Qt(e.firstChild),ht=t,ze=!0,ha=null,Ft=!0,n=Uf(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Zi(),a===l){t=bn(e,t,n);break e}rt(e,t,a,n)}t=t.child}return t;case 26:return Dr(e,t),e===null?(n=ch(t.type,null,t.pendingProps,null))?t.memoizedState=n:ze||(n=t.type,e=t.pendingProps,a=Qr(ne.current).createElement(n),a[ut]=t,a[gt]=e,st(a,n,e),Ie(a),t.stateNode=a):t.memoizedState=ch(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Jt(t),e===null&&ze&&(a=t.stateNode=oh(t.type,t.pendingProps,ne.current),ht=t,Ft=!0,l=$e,Qn(t.type)?(Hu=l,$e=Qt(a.firstChild)):$e=l),rt(e,t,t.pendingProps.children,n),Dr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ze&&((l=a=$e)&&(a=n1(a,t.type,t.pendingProps,Ft),a!==null?(t.stateNode=a,ht=t,$e=Qt(a.firstChild),Ft=!1,l=!0):l=!1),l||pa(t)),Jt(t),l=t.type,r=t.pendingProps,d=e!==null?e.memoizedProps:null,a=r.children,Nu(l,r)?a=null:d!==null&&Nu(l,d)&&(t.flags|=32),t.memoizedState!==null&&(l=_s(e,t,yg,null,null,n),jl._currentValue=l),Dr(e,t),rt(e,t,a,n),t.child;case 6:return e===null&&ze&&((e=n=$e)&&(n=a1(n,t.pendingProps,Ft),n!==null?(t.stateNode=n,ht=t,$e=null,e=!0):e=!1),e||pa(t)),null;case 13:return a0(e,t,n);case 4:return we(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ii(t,null,a,n):rt(e,t,a,n),t.child;case 11:return Jf(e,t,t.type,t.pendingProps,n);case 7:return rt(e,t,t.pendingProps,n),t.child;case 8:return rt(e,t,t.pendingProps.children,n),t.child;case 12:return rt(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Dn(t,t.type,a.value),rt(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,ga(t),l=ct(l),a=a(l),t.flags|=1,rt(e,t,a,n),t.child;case 14:return Wf(e,t,t.type,t.pendingProps,n);case 15:return Pf(e,t,t.type,t.pendingProps,n);case 19:return l0(e,t,n);case 31:return a=t.pendingProps,n=t.mode,a={mode:a.mode,children:a.children},e===null?(n=Or(a,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=dn(e.child,a),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Ff(e,t,n);case 24:return ga(t),a=ct(Pe),e===null?(l=Es(),l===null&&(l=Le,r=js(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=n),l=r),t.memoizedState={parent:a,cache:l},ks(t),Dn(t,Pe,l)):((e.lanes&n)!==0&&(Ts(e,t),tl(t,null,null,n),el()),l=e.memoizedState,r=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Dn(t,Pe,a)):(a=r.cache,Dn(t,Pe,a),a!==l.cache&&Ss(t,[Pe],n,!0))),rt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function vn(e){e.flags|=4}function o0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!mh(t)){if(t=Ut.current,t!==null&&((Se&4194048)===Se?It!==null:(Se&62914560)!==Se&&(Se&536870912)===0||t!==It))throw Fi=zs,Gd;e.flags|=8192}}function _r(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?I():536870912,e.lanes|=t,si|=t)}function sl(e,t){if(!ze)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Ag(e,t,n){var a=t.pendingProps;switch(bs(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return He(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),mn(Pe),We(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Xi(t)?vn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ud())),He(t),null;case 26:return n=t.memoizedState,e===null?(vn(t),n!==null?(He(t),o0(t,n)):(He(t),t.flags&=-16777217)):n?n!==e.memoizedState?(vn(t),He(t),o0(t,n)):(He(t),t.flags&=-16777217):(e.memoizedProps!==a&&vn(t),He(t),t.flags&=-16777217),null;case 27:St(t),n=ne.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&vn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return He(t),null}e=ee.current,Xi(t)?Ld(t):(e=oh(l,a,n),t.stateNode=e,vn(t))}return He(t),null;case 5:if(St(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&vn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return He(t),null}if(e=ee.current,Xi(t))Ld(t);else{switch(l=Qr(ne.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?l.createElement(n,{is:a.is}):l.createElement(n)}}e[ut]=t,e[gt]=a;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(st(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&vn(t)}}return He(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&vn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=ne.current,Xi(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=ht,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[ut]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||eh(e.nodeValue,n)),e||pa(t)}else e=Qr(e).createTextNode(a),e[ut]=t,t.stateNode=e}return He(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Xi(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[ut]=t}else Zi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),l=!1}else l=Ud(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(xn(t),t):(xn(t),null)}if(xn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var r=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==l&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),_r(t,t.updateQueue),He(t),null;case 4:return We(),e===null&&Mu(t.stateNode.containerInfo),He(t),null;case 10:return mn(t.type),He(t),null;case 19:if(J(Fe),l=t.memoizedState,l===null)return He(t),null;if(a=(t.flags&128)!==0,r=l.rendering,r===null)if(a)sl(l,!1);else{if(qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Ar(e),r!==null){for(t.flags|=128,sl(l,!1),e=r.updateQueue,t.updateQueue=e,_r(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)_d(n,e),n=n.sibling;return P(Fe,Fe.current&1|2),t.child}e=e.sibling}l.tail!==null&&jt()>Br&&(t.flags|=128,a=!0,sl(l,!1),t.lanes=4194304)}else{if(!a)if(e=Ar(r),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,_r(t,e),sl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!ze)return He(t),null}else 2*jt()-l.renderingStartTime>Br&&n!==536870912&&(t.flags|=128,a=!0,sl(l,!1),t.lanes=4194304);l.isBackwards?(r.sibling=t.child,t.child=r):(e=l.last,e!==null?e.sibling=r:t.child=r,l.last=r)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=jt(),t.sibling=null,e=Fe.current,P(Fe,a?e&1|2:e&1),t):(He(t),null);case 22:case 23:return xn(t),Ds(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),n=t.updateQueue,n!==null&&_r(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&J(xa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),mn(Pe),He(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function Mg(e,t){switch(bs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mn(Pe),We(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return St(t),null;case 13:if(xn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Zi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(Fe),null;case 4:return We(),null;case 10:return mn(t.type),null;case 22:case 23:return xn(t),Ds(),e!==null&&J(xa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return mn(Pe),null;case 25:return null;default:return null}}function s0(e,t){switch(bs(t),t.tag){case 3:mn(Pe),We();break;case 26:case 27:case 5:St(t);break;case 4:We();break;case 13:xn(t);break;case 19:J(Fe);break;case 10:mn(t.type);break;case 22:case 23:xn(t),Ds(),e!==null&&J(xa);break;case 24:mn(Pe)}}function ul(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var r=n.create,d=n.inst;a=r(),d.destroy=a}n=n.next}while(n!==l)}}catch(h){_e(t,t.return,h)}}function Hn(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var r=l.next;a=r;do{if((a.tag&e)===e){var d=a.inst,h=d.destroy;if(h!==void 0){d.destroy=void 0,l=t;var v=n,R=h;try{R()}catch(B){_e(l,v,B)}}}a=a.next}while(a!==r)}}catch(B){_e(t,t.return,B)}}function u0(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Jd(t,n)}catch(a){_e(e,e.return,a)}}}function c0(e,t,n){n.props=va(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){_e(e,t,a)}}function cl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){_e(e,t,l)}}function en(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){_e(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){_e(e,t,l)}else n.current=null}function d0(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){_e(e,e.return,l)}}function ru(e,t,n){try{var a=e.stateNode;Pg(a,e.type,n,t),a[gt]=t}catch(l){_e(e,e.return,l)}}function f0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qn(e.type)||e.tag===4}function ou(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||f0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function su(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zr));else if(a!==4&&(a===27&&Qn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(su(e,t,n),e=e.sibling;e!==null;)su(e,t,n),e=e.sibling}function Nr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Qn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Nr(e,t,n),e=e.sibling;e!==null;)Nr(e,t,n),e=e.sibling}function h0(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);st(t,a,n),t[ut]=e,t[gt]=n}catch(r){_e(e,e.return,r)}}var yn=!1,Ze=!1,uu=!1,p0=typeof WeakSet=="function"?WeakSet:Set,tt=null;function Rg(e,t){if(e=e.containerInfo,Ou=Ir,e=Cd(e),os(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var d=0,h=-1,v=-1,R=0,B=0,$=e,O=null;t:for(;;){for(var _;$!==n||l!==0&&$.nodeType!==3||(h=d+l),$!==r||a!==0&&$.nodeType!==3||(v=d+a),$.nodeType===3&&(d+=$.nodeValue.length),(_=$.firstChild)!==null;)O=$,$=_;for(;;){if($===e)break t;if(O===n&&++R===l&&(h=d),O===r&&++B===a&&(v=d),(_=$.nextSibling)!==null)break;$=O,O=$.parentNode}$=_}n=h===-1||v===-1?null:{start:h,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(_u={focusedElem:e,selectionRange:n},Ir=!1,tt=t;tt!==null;)if(t=tt,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,tt=e;else for(;tt!==null;){switch(t=tt,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,l=r.memoizedProps,r=r.memoizedState,a=n.stateNode;try{var se=va(n.type,l,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(se,r),a.__reactInternalSnapshotBeforeUpdate=e}catch(re){_e(n,n.return,re)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Bu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Bu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,tt=e;break}tt=t.return}}function m0(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Yn(e,n),a&4&&ul(5,n);break;case 1:if(Yn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){_e(n,n.return,d)}else{var l=va(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){_e(n,n.return,d)}}a&64&&u0(n),a&512&&cl(n,n.return);break;case 3:if(Yn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Jd(e,t)}catch(d){_e(n,n.return,d)}}break;case 27:t===null&&a&4&&h0(n);case 26:case 5:Yn(e,n),t===null&&a&4&&d0(n),a&512&&cl(n,n.return);break;case 12:Yn(e,n);break;case 13:Yn(e,n),a&4&&b0(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Yg.bind(null,n),i1(e,n))));break;case 22:if(a=n.memoizedState!==null||yn,!a){t=t!==null&&t.memoizedState!==null||Ze,l=yn;var r=Ze;yn=a,(Ze=t)&&!r?$n(e,n,(n.subtreeFlags&8772)!==0):Yn(e,n),yn=l,Ze=r}break;case 30:break;default:Yn(e,n)}}function g0(e){var t=e.alternate;t!==null&&(e.alternate=null,g0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&qo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ue=null,vt=!1;function wn(e,t,n){for(n=n.child;n!==null;)x0(e,t,n),n=n.sibling}function x0(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(Wt,n)}catch{}switch(n.tag){case 26:Ze||en(n,t),wn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ze||en(n,t);var a=Ue,l=vt;Qn(n.type)&&(Ue=n.stateNode,vt=!1),wn(e,t,n),vl(n.stateNode),Ue=a,vt=l;break;case 5:Ze||en(n,t);case 6:if(a=Ue,l=vt,Ue=null,wn(e,t,n),Ue=a,vt=l,Ue!==null)if(vt)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(n.stateNode)}catch(r){_e(n,t,r)}else try{Ue.removeChild(n.stateNode)}catch(r){_e(n,t,r)}break;case 18:Ue!==null&&(vt?(e=Ue,lh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),kl(e)):lh(Ue,n.stateNode));break;case 4:a=Ue,l=vt,Ue=n.stateNode.containerInfo,vt=!0,wn(e,t,n),Ue=a,vt=l;break;case 0:case 11:case 14:case 15:Ze||Hn(2,n,t),Ze||Hn(4,n,t),wn(e,t,n);break;case 1:Ze||(en(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&c0(n,t,a)),wn(e,t,n);break;case 21:wn(e,t,n);break;case 22:Ze=(a=Ze)||n.memoizedState!==null,wn(e,t,n),Ze=a;break;default:wn(e,t,n)}}function b0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{kl(e)}catch(n){_e(t,t.return,n)}}function Dg(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new p0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new p0),t;default:throw Error(u(435,e.tag))}}function cu(e,t){var n=Dg(e);t.forEach(function(a){var l=$g.bind(null,e,a);n.has(a)||(n.add(a),a.then(l,l))})}function zt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],r=e,d=t,h=d;e:for(;h!==null;){switch(h.tag){case 27:if(Qn(h.type)){Ue=h.stateNode,vt=!1;break e}break;case 5:Ue=h.stateNode,vt=!1;break e;case 3:case 4:Ue=h.stateNode.containerInfo,vt=!0;break e}h=h.return}if(Ue===null)throw Error(u(160));x0(r,d,l),Ue=null,vt=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)v0(t,e),t=t.sibling}var Zt=null;function v0(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:zt(t,e),kt(e),a&4&&(Hn(3,e,e.return),ul(3,e),Hn(5,e,e.return));break;case 1:zt(t,e),kt(e),a&512&&(Ze||n===null||en(n,n.return)),a&64&&yn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=Zt;if(zt(t,e),kt(e),a&512&&(Ze||n===null||en(n,n.return)),a&4){var r=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":r=l.getElementsByTagName("title")[0],(!r||r[_i]||r[ut]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(a),l.head.insertBefore(r,l.querySelector("head > title"))),st(r,a,n),r[ut]=e,Ie(r),a=r;break e;case"link":var d=hh("link","href",l).get(a+(n.href||""));if(d){for(var h=0;h<d.length;h++)if(r=d[h],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(h,1);break t}}r=l.createElement(a),st(r,a,n),l.head.appendChild(r);break;case"meta":if(d=hh("meta","content",l).get(a+(n.content||""))){for(h=0;h<d.length;h++)if(r=d[h],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(h,1);break t}}r=l.createElement(a),st(r,a,n),l.head.appendChild(r);break;default:throw Error(u(468,a))}r[ut]=e,Ie(r),a=r}e.stateNode=a}else ph(l,e.type,e.stateNode);else e.stateNode=fh(l,a,e.memoizedProps);else r!==a?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,a===null?ph(l,e.type,e.stateNode):fh(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&ru(e,e.memoizedProps,n.memoizedProps)}break;case 27:zt(t,e),kt(e),a&512&&(Ze||n===null||en(n,n.return)),n!==null&&a&4&&ru(e,e.memoizedProps,n.memoizedProps);break;case 5:if(zt(t,e),kt(e),a&512&&(Ze||n===null||en(n,n.return)),e.flags&32){l=e.stateNode;try{Ya(l,"")}catch(_){_e(e,e.return,_)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,ru(e,l,n!==null?n.memoizedProps:l)),a&1024&&(uu=!0);break;case 6:if(zt(t,e),kt(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(_){_e(e,e.return,_)}}break;case 3:if(Wr=null,l=Zt,Zt=Kr(t.containerInfo),zt(t,e),Zt=l,kt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{kl(t.containerInfo)}catch(_){_e(e,e.return,_)}uu&&(uu=!1,y0(e));break;case 4:a=Zt,Zt=Kr(e.stateNode.containerInfo),zt(t,e),kt(e),Zt=a;break;case 12:zt(t,e),kt(e);break;case 13:zt(t,e),kt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(gu=jt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,cu(e,a)));break;case 22:l=e.memoizedState!==null;var v=n!==null&&n.memoizedState!==null,R=yn,B=Ze;if(yn=R||l,Ze=B||v,zt(t,e),Ze=B,yn=R,kt(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||v||yn||Ze||ya(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){v=n=t;try{if(r=v.stateNode,l)d=r.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{h=v.stateNode;var $=v.memoizedProps.style,O=$!=null&&$.hasOwnProperty("display")?$.display:null;h.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(_){_e(v,v.return,_)}}}else if(t.tag===6){if(n===null){v=t;try{v.stateNode.nodeValue=l?"":v.memoizedProps}catch(_){_e(v,v.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,cu(e,n))));break;case 19:zt(t,e),kt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,cu(e,a)));break;case 30:break;case 21:break;default:zt(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(f0(a)){n=a;break}a=a.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var l=n.stateNode,r=ou(e);Nr(e,r,l);break;case 5:var d=n.stateNode;n.flags&32&&(Ya(d,""),n.flags&=-33);var h=ou(e);Nr(e,h,d);break;case 3:case 4:var v=n.stateNode.containerInfo,R=ou(e);su(e,R,v);break;default:throw Error(u(161))}}catch(B){_e(e,e.return,B)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function y0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;y0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Yn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)m0(e,t.alternate,t),t=t.sibling}function ya(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Hn(4,t,t.return),ya(t);break;case 1:en(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&c0(t,t.return,n),ya(t);break;case 27:vl(t.stateNode);case 26:case 5:en(t,t.return),ya(t);break;case 22:t.memoizedState===null&&ya(t);break;case 30:ya(t);break;default:ya(t)}e=e.sibling}}function $n(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,r=t,d=r.flags;switch(r.tag){case 0:case 11:case 15:$n(l,r,n),ul(4,r);break;case 1:if($n(l,r,n),a=r,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(R){_e(a,a.return,R)}if(a=r,l=a.updateQueue,l!==null){var h=a.stateNode;try{var v=l.shared.hiddenCallbacks;if(v!==null)for(l.shared.hiddenCallbacks=null,l=0;l<v.length;l++)Kd(v[l],h)}catch(R){_e(a,a.return,R)}}n&&d&64&&u0(r),cl(r,r.return);break;case 27:h0(r);case 26:case 5:$n(l,r,n),n&&a===null&&d&4&&d0(r),cl(r,r.return);break;case 12:$n(l,r,n);break;case 13:$n(l,r,n),n&&d&4&&b0(l,r);break;case 22:r.memoizedState===null&&$n(l,r,n),cl(r,r.return);break;case 30:break;default:$n(l,r,n)}t=t.sibling}}function du(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ji(n))}function fu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ji(e))}function tn(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)w0(e,t,n,a),t=t.sibling}function w0(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:tn(e,t,n,a),l&2048&&ul(9,t);break;case 1:tn(e,t,n,a);break;case 3:tn(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ji(e)));break;case 12:if(l&2048){tn(e,t,n,a),e=t.stateNode;try{var r=t.memoizedProps,d=r.id,h=r.onPostCommit;typeof h=="function"&&h(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){_e(t,t.return,v)}}else tn(e,t,n,a);break;case 13:tn(e,t,n,a);break;case 23:break;case 22:r=t.stateNode,d=t.alternate,t.memoizedState!==null?r._visibility&2?tn(e,t,n,a):dl(e,t):r._visibility&2?tn(e,t,n,a):(r._visibility|=2,li(e,t,n,a,(t.subtreeFlags&10256)!==0)),l&2048&&du(d,t);break;case 24:tn(e,t,n,a),l&2048&&fu(t.alternate,t);break;default:tn(e,t,n,a)}}function li(e,t,n,a,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,d=t,h=n,v=a,R=d.flags;switch(d.tag){case 0:case 11:case 15:li(r,d,h,v,l),ul(8,d);break;case 23:break;case 22:var B=d.stateNode;d.memoizedState!==null?B._visibility&2?li(r,d,h,v,l):dl(r,d):(B._visibility|=2,li(r,d,h,v,l)),l&&R&2048&&du(d.alternate,d);break;case 24:li(r,d,h,v,l),l&&R&2048&&fu(d.alternate,d);break;default:li(r,d,h,v,l)}t=t.sibling}}function dl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:dl(n,a),l&2048&&du(a.alternate,a);break;case 24:dl(n,a),l&2048&&fu(a.alternate,a);break;default:dl(n,a)}t=t.sibling}}var fl=8192;function ri(e){if(e.subtreeFlags&fl)for(e=e.child;e!==null;)S0(e),e=e.sibling}function S0(e){switch(e.tag){case 26:ri(e),e.flags&fl&&e.memoizedState!==null&&x1(Zt,e.memoizedState,e.memoizedProps);break;case 5:ri(e);break;case 3:case 4:var t=Zt;Zt=Kr(e.stateNode.containerInfo),ri(e),Zt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=fl,fl=16777216,ri(e),fl=t):ri(e));break;default:ri(e)}}function j0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function hl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];tt=a,E0(a,e)}j0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)C0(e),e=e.sibling}function C0(e){switch(e.tag){case 0:case 11:case 15:hl(e),e.flags&2048&&Hn(9,e,e.return);break;case 3:hl(e);break;case 12:hl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Lr(e)):hl(e);break;default:hl(e)}}function Lr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];tt=a,E0(a,e)}j0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Hn(8,t,t.return),Lr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Lr(t));break;default:Lr(t)}e=e.sibling}}function E0(e,t){for(;tt!==null;){var n=tt;switch(n.tag){case 0:case 11:case 15:Hn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ji(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,tt=a;else e:for(n=e;tt!==null;){a=tt;var l=a.sibling,r=a.return;if(g0(a),a===n){tt=null;break e}if(l!==null){l.return=r,tt=l;break e}tt=r}}}var Og={getCacheForType:function(e){var t=ct(Pe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},_g=typeof WeakMap=="function"?WeakMap:Map,Ae=0,Le=null,ve=null,Se=0,Me=0,Tt=null,qn=!1,oi=!1,hu=!1,Sn=0,qe=0,Gn=0,wa=0,pu=0,Ht=0,si=0,pl=null,yt=null,mu=!1,gu=0,Br=1/0,Ur=null,Vn=null,ot=0,Xn=null,ui=null,ci=0,xu=0,bu=null,z0=null,ml=0,vu=null;function At(){if((Ae&2)!==0&&Se!==0)return Se&-Se;if(L.T!==null){var e=Pa;return e!==0?e:zu()}return Jl()}function k0(){Ht===0&&(Ht=(Se&536870912)===0||ze?je():536870912);var e=Ut.current;return e!==null&&(e.flags|=32),Ht}function Mt(e,t,n){(e===Le&&(Me===2||Me===9)||e.cancelPendingCommit!==null)&&(di(e,0),Zn(e,Se,Ht,!1)),Te(e,n),((Ae&2)===0||e!==Le)&&(e===Le&&((Ae&2)===0&&(wa|=n),qe===4&&Zn(e,Se,Ht,!1)),nn(e))}function T0(e,t,n){if((Ae&6)!==0)throw Error(u(327));var a=!n&&(t&124)===0&&(t&e.expiredLanes)===0||U(e,t),l=a?Bg(e,t):Su(e,t,!0),r=a;do{if(l===0){oi&&!a&&Zn(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!Ng(n)){l=Su(e,t,!1),r=!1;continue}if(l===2){if(r=t,e.errorRecoveryDisabledLanes&r)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var h=e;l=pl;var v=h.current.memoizedState.isDehydrated;if(v&&(di(h,d).flags|=256),d=Su(h,d,!1),d!==2){if(hu&&!v){h.errorRecoveryDisabledLanes|=r,wa|=r,l=4;break e}r=yt,yt=l,r!==null&&(yt===null?yt=r:yt.push.apply(yt,r))}l=d}if(r=!1,l!==2)continue}}if(l===1){di(e,0),Zn(e,t,0,!0);break}e:{switch(a=e,r=l,r){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Zn(a,t,Ht,!qn);break e;case 2:yt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(l=gu+300-jt(),10<l)){if(Zn(a,t,Ht,!qn),Da(a,0,!0)!==0)break e;a.timeoutHandle=ah(A0.bind(null,a,n,yt,Ur,mu,t,Ht,wa,si,qn,r,2,-0,0),l);break e}A0(a,n,yt,Ur,mu,t,Ht,wa,si,qn,r,0,-0,0)}}break}while(!0);nn(e)}function A0(e,t,n,a,l,r,d,h,v,R,B,$,O,_){if(e.timeoutHandle=-1,$=t.subtreeFlags,($&8192||($&16785408)===16785408)&&(Sl={stylesheets:null,count:0,unsuspend:g1},S0(t),$=b1(),$!==null)){e.cancelPendingCommit=$(L0.bind(null,e,t,r,n,a,l,d,h,v,B,1,O,_)),Zn(e,r,d,!R);return}L0(e,t,r,n,a,l,d,h,v)}function Ng(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],r=l.getSnapshot;l=l.value;try{if(!Ct(r(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zn(e,t,n,a){t&=~pu,t&=~wa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var r=31-lt(l),d=1<<r;a[r]=-1,l&=~d}n!==0&&Tn(e,n,t)}function Hr(){return(Ae&6)===0?(gl(0),!1):!0}function yu(){if(ve!==null){if(Me===0)var e=ve.return;else e=ve,pn=ma=null,Bs(e),ai=null,rl=0,e=ve;for(;e!==null;)s0(e.alternate,e),e=e.return;ve=null}}function di(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Ig(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),yu(),Le=e,ve=n=dn(e.current,null),Se=t,Me=0,Tt=null,qn=!1,oi=U(e,t),hu=!1,si=Ht=pu=wa=Gn=qe=0,yt=pl=null,mu=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-lt(a),r=1<<l;t|=e[l],a&=~r}return Sn=t,or(),n}function M0(e,t){pe=null,L.H=zr,t===Pi||t===gr?(t=Zd(),Me=3):t===Gd?(t=Zd(),Me=4):Me=t===Kf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Tt=t,ve===null&&(qe=1,Rr(e,_t(t,e.current)))}function R0(){var e=L.H;return L.H=zr,e===null?zr:e}function D0(){var e=L.A;return L.A=Og,e}function wu(){qe=4,qn||(Se&4194048)!==Se&&Ut.current!==null||(oi=!0),(Gn&134217727)===0&&(wa&134217727)===0||Le===null||Zn(Le,Se,Ht,!1)}function Su(e,t,n){var a=Ae;Ae|=2;var l=R0(),r=D0();(Le!==e||Se!==t)&&(Ur=null,di(e,t)),t=!1;var d=qe;e:do try{if(Me!==0&&ve!==null){var h=ve,v=Tt;switch(Me){case 8:yu(),d=6;break e;case 3:case 2:case 9:case 6:Ut.current===null&&(t=!0);var R=Me;if(Me=0,Tt=null,fi(e,h,v,R),n&&oi){d=0;break e}break;default:R=Me,Me=0,Tt=null,fi(e,h,v,R)}}Lg(),d=qe;break}catch(B){M0(e,B)}while(!0);return t&&e.shellSuspendCounter++,pn=ma=null,Ae=a,L.H=l,L.A=r,ve===null&&(Le=null,Se=0,or()),d}function Lg(){for(;ve!==null;)O0(ve)}function Bg(e,t){var n=Ae;Ae|=2;var a=R0(),l=D0();Le!==e||Se!==t?(Ur=null,Br=jt()+500,di(e,t)):oi=U(e,t);e:do try{if(Me!==0&&ve!==null){t=ve;var r=Tt;t:switch(Me){case 1:Me=0,Tt=null,fi(e,t,r,1);break;case 2:case 9:if(Vd(r)){Me=0,Tt=null,_0(t);break}t=function(){Me!==2&&Me!==9||Le!==e||(Me=7),nn(e)},r.then(t,t);break e;case 3:Me=7;break e;case 4:Me=5;break e;case 7:Vd(r)?(Me=0,Tt=null,_0(t)):(Me=0,Tt=null,fi(e,t,r,7));break;case 5:var d=null;switch(ve.tag){case 26:d=ve.memoizedState;case 5:case 27:var h=ve;if(!d||mh(d)){Me=0,Tt=null;var v=h.sibling;if(v!==null)ve=v;else{var R=h.return;R!==null?(ve=R,Yr(R)):ve=null}break t}}Me=0,Tt=null,fi(e,t,r,5);break;case 6:Me=0,Tt=null,fi(e,t,r,6);break;case 8:yu(),qe=6;break e;default:throw Error(u(462))}}Ug();break}catch(B){M0(e,B)}while(!0);return pn=ma=null,L.H=a,L.A=l,Ae=n,ve!==null?0:(Le=null,Se=0,or(),qe)}function Ug(){for(;ve!==null&&!Aa();)O0(ve)}function O0(e){var t=r0(e.alternate,e,Sn);e.memoizedProps=e.pendingProps,t===null?Yr(e):ve=t}function _0(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=e0(n,t,t.pendingProps,t.type,void 0,Se);break;case 11:t=e0(n,t,t.pendingProps,t.type.render,t.ref,Se);break;case 5:Bs(t);default:s0(n,t),t=ve=_d(t,Sn),t=r0(n,t,Sn)}e.memoizedProps=e.pendingProps,t===null?Yr(e):ve=t}function fi(e,t,n,a){pn=ma=null,Bs(t),ai=null,rl=0;var l=t.return;try{if(kg(e,l,t,n,Se)){qe=1,Rr(e,_t(n,e.current)),ve=null;return}}catch(r){if(l!==null)throw ve=l,r;qe=1,Rr(e,_t(n,e.current)),ve=null;return}t.flags&32768?(ze||a===1?e=!0:oi||(Se&536870912)!==0?e=!1:(qn=e=!0,(a===2||a===9||a===3||a===6)&&(a=Ut.current,a!==null&&a.tag===13&&(a.flags|=16384))),N0(t,e)):Yr(t)}function Yr(e){var t=e;do{if((t.flags&32768)!==0){N0(t,qn);return}e=t.return;var n=Ag(t.alternate,t,Sn);if(n!==null){ve=n;return}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);qe===0&&(qe=5)}function N0(e,t){do{var n=Mg(e.alternate,e);if(n!==null){n.flags&=32767,ve=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ve=e;return}ve=e=n}while(e!==null);qe=6,ve=null}function L0(e,t,n,a,l,r,d,h,v){e.cancelPendingCommit=null;do $r();while(ot!==0);if((Ae&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(r=t.lanes|t.childLanes,r|=fs,Ne(e,n,r,d,h,v),e===Le&&(ve=Le=null,Se=0),ui=t,Xn=e,ci=n,xu=r,bu=l,z0=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,qg(ia,function(){return $0(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=L.T,L.T=null,l=W.p,W.p=2,d=Ae,Ae|=4;try{Rg(e,t,n)}finally{Ae=d,W.p=l,L.T=a}}ot=1,B0(),U0(),H0()}}function B0(){if(ot===1){ot=0;var e=Xn,t=ui,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=L.T,L.T=null;var a=W.p;W.p=2;var l=Ae;Ae|=4;try{v0(t,e);var r=_u,d=Cd(e.containerInfo),h=r.focusedElem,v=r.selectionRange;if(d!==h&&h&&h.ownerDocument&&jd(h.ownerDocument.documentElement,h)){if(v!==null&&os(h)){var R=v.start,B=v.end;if(B===void 0&&(B=R),"selectionStart"in h)h.selectionStart=R,h.selectionEnd=Math.min(B,h.value.length);else{var $=h.ownerDocument||document,O=$&&$.defaultView||window;if(O.getSelection){var _=O.getSelection(),se=h.textContent.length,re=Math.min(v.start,se),Oe=v.end===void 0?re:Math.min(v.end,se);!_.extend&&re>Oe&&(d=Oe,Oe=re,re=d);var E=Sd(h,re),S=Sd(h,Oe);if(E&&S&&(_.rangeCount!==1||_.anchorNode!==E.node||_.anchorOffset!==E.offset||_.focusNode!==S.node||_.focusOffset!==S.offset)){var A=$.createRange();A.setStart(E.node,E.offset),_.removeAllRanges(),re>Oe?(_.addRange(A),_.extend(S.node,S.offset)):(A.setEnd(S.node,S.offset),_.addRange(A))}}}}for($=[],_=h;_=_.parentNode;)_.nodeType===1&&$.push({element:_,left:_.scrollLeft,top:_.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<$.length;h++){var H=$[h];H.element.scrollLeft=H.left,H.element.scrollTop=H.top}}Ir=!!Ou,_u=Ou=null}finally{Ae=l,W.p=a,L.T=n}}e.current=t,ot=2}}function U0(){if(ot===2){ot=0;var e=Xn,t=ui,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=L.T,L.T=null;var a=W.p;W.p=2;var l=Ae;Ae|=4;try{m0(e,t.alternate,t)}finally{Ae=l,W.p=a,L.T=n}}ot=3}}function H0(){if(ot===4||ot===3){ot=0,Zl();var e=Xn,t=ui,n=ci,a=z0;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ot=5:(ot=0,ui=Xn=null,Y0(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Vn=null),sn(n),t=t.stateNode,it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(Wt,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=L.T,l=W.p,W.p=2,L.T=null;try{for(var r=e.onRecoverableError,d=0;d<a.length;d++){var h=a[d];r(h.value,{componentStack:h.stack})}}finally{L.T=t,W.p=l}}(ci&3)!==0&&$r(),nn(e),l=e.pendingLanes,(n&4194090)!==0&&(l&42)!==0?e===vu?ml++:(ml=0,vu=e):ml=0,gl(0)}}function Y0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ji(t)))}function $r(e){return B0(),U0(),H0(),$0()}function $0(){if(ot!==5)return!1;var e=Xn,t=xu;xu=0;var n=sn(ci),a=L.T,l=W.p;try{W.p=32>n?32:n,L.T=null,n=bu,bu=null;var r=Xn,d=ci;if(ot=0,ui=Xn=null,ci=0,(Ae&6)!==0)throw Error(u(331));var h=Ae;if(Ae|=4,C0(r.current),w0(r,r.current,d,n),Ae=h,gl(0,!1),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(Wt,r)}catch{}return!0}finally{W.p=l,L.T=a,Y0(e,t)}}function q0(e,t,n){t=_t(n,t),t=Ps(e.stateNode,t,2),e=Nn(e,t,2),e!==null&&(Te(e,2),nn(e))}function _e(e,t,n){if(e.tag===3)q0(e,e,n);else for(;t!==null;){if(t.tag===3){q0(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Vn===null||!Vn.has(a))){e=_t(n,e),n=Zf(2),a=Nn(t,n,2),a!==null&&(Qf(n,a,t,e),Te(a,2),nn(a));break}}t=t.return}}function ju(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new _g;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(hu=!0,l.add(n),e=Hg.bind(null,e,t,n),t.then(e,e))}function Hg(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Le===e&&(Se&n)===n&&(qe===4||qe===3&&(Se&62914560)===Se&&300>jt()-gu?(Ae&2)===0&&di(e,0):pu|=n,si===Se&&(si=0)),nn(e)}function G0(e,t){t===0&&(t=I()),e=Qa(e,t),e!==null&&(Te(e,t),nn(e))}function Yg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),G0(e,n)}function $g(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),G0(e,n)}function qg(e,t){return qt(e,t)}var qr=null,hi=null,Cu=!1,Gr=!1,Eu=!1,Sa=0;function nn(e){e!==hi&&e.next===null&&(hi===null?qr=hi=e:hi=hi.next=e),Gr=!0,Cu||(Cu=!0,Vg())}function gl(e,t){if(!Eu&&Gr){Eu=!0;do for(var n=!1,a=qr;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var r=0;else{var d=a.suspendedLanes,h=a.pingedLanes;r=(1<<31-lt(42|e)+1)-1,r&=l&~(d&~h),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Q0(a,r))}else r=Se,r=Da(a,a===Le?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(r&3)===0||U(a,r)||(n=!0,Q0(a,r));a=a.next}while(n);Eu=!1}}function Gg(){V0()}function V0(){Gr=Cu=!1;var e=0;Sa!==0&&(Fg()&&(e=Sa),Sa=0);for(var t=jt(),n=null,a=qr;a!==null;){var l=a.next,r=X0(a,t);r===0?(a.next=null,n===null?qr=l:n.next=l,l===null&&(hi=n)):(n=a,(e!==0||(r&3)!==0)&&(Gr=!0)),a=l}gl(e)}function X0(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var d=31-lt(r),h=1<<d,v=l[d];v===-1?((h&n)===0||(h&a)!==0)&&(l[d]=ie(h,t)):v<=t&&(e.expiredLanes|=h),r&=~h}if(t=Le,n=Se,n=Da(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Me===2||Me===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Mi(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||U(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Mi(a),sn(n)){case 2:case 8:n=Di;break;case 32:n=ia;break;case 268435456:n=Kl;break;default:n=ia}return a=Z0.bind(null,e),n=qt(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Mi(a),e.callbackPriority=2,e.callbackNode=null,2}function Z0(e,t){if(ot!==0&&ot!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if($r()&&e.callbackNode!==n)return null;var a=Se;return a=Da(e,e===Le?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(T0(e,a,t),X0(e,jt()),e.callbackNode!=null&&e.callbackNode===n?Z0.bind(null,e):null)}function Q0(e,t){if($r())return null;T0(e,t,!0)}function Vg(){e1(function(){(Ae&6)!==0?qt(Ri,Gg):V0()})}function zu(){return Sa===0&&(Sa=je()),Sa}function K0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:er(""+e)}function J0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Xg(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var r=K0((l[gt]||null).action),d=a.submitter;d&&(t=(t=d[gt]||null)?K0(t.formAction):d.getAttribute("formAction"),t!==null&&(r=t,d=null));var h=new ir("action","action",null,a,l);e.push({event:h,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Sa!==0){var v=d?J0(l,d):new FormData(l);Zs(n,{pending:!0,data:v,method:l.method,action:r},null,v)}}else typeof r=="function"&&(h.preventDefault(),v=d?J0(l,d):new FormData(l),Zs(n,{pending:!0,data:v,method:l.method,action:r},r,v))},currentTarget:l}]})}}for(var ku=0;ku<ds.length;ku++){var Tu=ds[ku],Zg=Tu.toLowerCase(),Qg=Tu[0].toUpperCase()+Tu.slice(1);Xt(Zg,"on"+Qg)}Xt(kd,"onAnimationEnd"),Xt(Td,"onAnimationIteration"),Xt(Ad,"onAnimationStart"),Xt("dblclick","onDoubleClick"),Xt("focusin","onFocus"),Xt("focusout","onBlur"),Xt(cg,"onTransitionRun"),Xt(dg,"onTransitionStart"),Xt(fg,"onTransitionCancel"),Xt(Md,"onTransitionEnd"),Ba("onMouseEnter",["mouseout","mouseover"]),Ba("onMouseLeave",["mouseout","mouseover"]),Ba("onPointerEnter",["pointerout","pointerover"]),Ba("onPointerLeave",["pointerout","pointerover"]),ra("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ra("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ra("onBeforeInput",["compositionend","keypress","textInput","paste"]),ra("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ra("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ra("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xl));function W0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var r=void 0;if(t)for(var d=a.length-1;0<=d;d--){var h=a[d],v=h.instance,R=h.currentTarget;if(h=h.listener,v!==r&&l.isPropagationStopped())break e;r=h,l.currentTarget=R;try{r(l)}catch(B){Mr(B)}l.currentTarget=null,r=v}else for(d=0;d<a.length;d++){if(h=a[d],v=h.instance,R=h.currentTarget,h=h.listener,v!==r&&l.isPropagationStopped())break e;r=h,l.currentTarget=R;try{r(l)}catch(B){Mr(B)}l.currentTarget=null,r=v}}}}function ye(e,t){var n=t[$o];n===void 0&&(n=t[$o]=new Set);var a=e+"__bubble";n.has(a)||(P0(t,e,2,!1),n.add(a))}function Au(e,t,n){var a=0;t&&(a|=4),P0(n,e,a,t)}var Vr="_reactListening"+Math.random().toString(36).slice(2);function Mu(e){if(!e[Vr]){e[Vr]=!0,Gc.forEach(function(n){n!=="selectionchange"&&(Kg.has(n)||Au(n,!1,e),Au(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vr]||(t[Vr]=!0,Au("selectionchange",!1,t))}}function P0(e,t,n,a){switch(wh(t)){case 2:var l=w1;break;case 8:l=S1;break;default:l=Vu}n=l.bind(null,t,n,e),l=void 0,!Fo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ru(e,t,n,a,l){var r=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var d=a.tag;if(d===3||d===4){var h=a.stateNode.containerInfo;if(h===l)break;if(d===4)for(d=a.return;d!==null;){var v=d.tag;if((v===3||v===4)&&d.stateNode.containerInfo===l)return;d=d.return}for(;h!==null;){if(d=_a(h),d===null)return;if(v=d.tag,v===5||v===6||v===26||v===27){a=r=d;continue e}h=h.parentNode}}a=a.return}ad(function(){var R=r,B=Wo(n),$=[];e:{var O=Rd.get(e);if(O!==void 0){var _=ir,se=e;switch(e){case"keypress":if(nr(n)===0)break e;case"keydown":case"keyup":_=qm;break;case"focusin":se="focus",_=ns;break;case"focusout":se="blur",_=ns;break;case"beforeblur":case"afterblur":_=ns;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Mm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Xm;break;case kd:case Td:case Ad:_=Om;break;case Md:_=Qm;break;case"scroll":case"scrollend":_=Tm;break;case"wheel":_=Jm;break;case"copy":case"cut":case"paste":_=Nm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=sd;break;case"toggle":case"beforetoggle":_=Pm}var re=(t&4)!==0,Oe=!re&&(e==="scroll"||e==="scrollend"),E=re?O!==null?O+"Capture":null:O;re=[];for(var S=R,A;S!==null;){var H=S;if(A=H.stateNode,H=H.tag,H!==5&&H!==26&&H!==27||A===null||E===null||(H=Li(S,E),H!=null&&re.push(bl(S,H,A))),Oe)break;S=S.return}0<re.length&&(O=new _(O,se,null,n,B),$.push({event:O,listeners:re}))}}if((t&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",O&&n!==Jo&&(se=n.relatedTarget||n.fromElement)&&(_a(se)||se[Oa]))break e;if((_||O)&&(O=B.window===B?B:(O=B.ownerDocument)?O.defaultView||O.parentWindow:window,_?(se=n.relatedTarget||n.toElement,_=R,se=se?_a(se):null,se!==null&&(Oe=p(se),re=se.tag,se!==Oe||re!==5&&re!==27&&re!==6)&&(se=null)):(_=null,se=R),_!==se)){if(re=rd,H="onMouseLeave",E="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(re=sd,H="onPointerLeave",E="onPointerEnter",S="pointer"),Oe=_==null?O:Ni(_),A=se==null?O:Ni(se),O=new re(H,S+"leave",_,n,B),O.target=Oe,O.relatedTarget=A,H=null,_a(B)===R&&(re=new re(E,S+"enter",se,n,B),re.target=A,re.relatedTarget=Oe,H=re),Oe=H,_&&se)t:{for(re=_,E=se,S=0,A=re;A;A=pi(A))S++;for(A=0,H=E;H;H=pi(H))A++;for(;0<S-A;)re=pi(re),S--;for(;0<A-S;)E=pi(E),A--;for(;S--;){if(re===E||E!==null&&re===E.alternate)break t;re=pi(re),E=pi(E)}re=null}else re=null;_!==null&&F0($,O,_,re,!1),se!==null&&Oe!==null&&F0($,Oe,se,re,!0)}}e:{if(O=R?Ni(R):window,_=O.nodeName&&O.nodeName.toLowerCase(),_==="select"||_==="input"&&O.type==="file")var te=gd;else if(pd(O))if(xd)te=og;else{te=lg;var ge=ig}else _=O.nodeName,!_||_.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?R&&Ko(R.elementType)&&(te=gd):te=rg;if(te&&(te=te(e,R))){md($,te,n,B);break e}ge&&ge(e,O,R),e==="focusout"&&R&&O.type==="number"&&R.memoizedProps.value!=null&&Qo(O,"number",O.value)}switch(ge=R?Ni(R):window,e){case"focusin":(pd(ge)||ge.contentEditable==="true")&&(Va=ge,ss=R,Vi=null);break;case"focusout":Vi=ss=Va=null;break;case"mousedown":us=!0;break;case"contextmenu":case"mouseup":case"dragend":us=!1,Ed($,n,B);break;case"selectionchange":if(ug)break;case"keydown":case"keyup":Ed($,n,B)}var ae;if(is)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else Ga?fd(e,n)&&(oe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(oe="onCompositionStart");oe&&(ud&&n.locale!=="ko"&&(Ga||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&Ga&&(ae=id()):(Rn=B,Io="value"in Rn?Rn.value:Rn.textContent,Ga=!0)),ge=Xr(R,oe),0<ge.length&&(oe=new od(oe,e,null,n,B),$.push({event:oe,listeners:ge}),ae?oe.data=ae:(ae=hd(n),ae!==null&&(oe.data=ae)))),(ae=Im?eg(e,n):tg(e,n))&&(oe=Xr(R,"onBeforeInput"),0<oe.length&&(ge=new od("onBeforeInput","beforeinput",null,n,B),$.push({event:ge,listeners:oe}),ge.data=ae)),Xg($,e,R,n,B)}W0($,t)})}function bl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xr(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=Li(e,n),l!=null&&a.unshift(bl(e,l,r)),l=Li(e,t),l!=null&&a.push(bl(e,l,r))),e.tag===3)return a;e=e.return}return[]}function pi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function F0(e,t,n,a,l){for(var r=t._reactName,d=[];n!==null&&n!==a;){var h=n,v=h.alternate,R=h.stateNode;if(h=h.tag,v!==null&&v===a)break;h!==5&&h!==26&&h!==27||R===null||(v=R,l?(R=Li(n,r),R!=null&&d.unshift(bl(n,R,v))):l||(R=Li(n,r),R!=null&&d.push(bl(n,R,v)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var Jg=/\r\n?/g,Wg=/\u0000|\uFFFD/g;function I0(e){return(typeof e=="string"?e:""+e).replace(Jg,`
`).replace(Wg,"")}function eh(e,t){return t=I0(t),I0(e)===t}function Zr(){}function De(e,t,n,a,l,r){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Ya(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Ya(e,""+a);break;case"className":Pl(e,"class",a);break;case"tabIndex":Pl(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Pl(e,n,a);break;case"style":td(e,a,r);break;case"data":if(t!=="object"){Pl(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=er(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&De(e,t,"name",l.name,l,null),De(e,t,"formEncType",l.formEncType,l,null),De(e,t,"formMethod",l.formMethod,l,null),De(e,t,"formTarget",l.formTarget,l,null)):(De(e,t,"encType",l.encType,l,null),De(e,t,"method",l.method,l,null),De(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=er(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Zr);break;case"onScroll":a!=null&&ye("scroll",e);break;case"onScrollEnd":a!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=er(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":ye("beforetoggle",e),ye("toggle",e),Wl(e,"popover",a);break;case"xlinkActuate":un(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":un(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":un(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":un(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":un(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":un(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":un(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":un(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":un(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Wl(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=zm.get(n)||n,Wl(e,n,a))}}function Du(e,t,n,a,l,r){switch(n){case"style":td(e,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Ya(e,a):(typeof a=="number"||typeof a=="bigint")&&Ya(e,""+a);break;case"onScroll":a!=null&&ye("scroll",e);break;case"onScrollEnd":a!=null&&ye("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Zr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),r=e[gt]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,l),typeof a=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Wl(e,n,a)}}}function st(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var a=!1,l=!1,r;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:De(e,t,r,d,n,null)}}l&&De(e,t,"srcSet",n.srcSet,n,null),a&&De(e,t,"src",n.src,n,null);return;case"input":ye("invalid",e);var h=r=d=l=null,v=null,R=null;for(a in n)if(n.hasOwnProperty(a)){var B=n[a];if(B!=null)switch(a){case"name":l=B;break;case"type":d=B;break;case"checked":v=B;break;case"defaultChecked":R=B;break;case"value":r=B;break;case"defaultValue":h=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(u(137,t));break;default:De(e,t,a,B,n,null)}}Pc(e,r,h,v,R,d,l,!1),Fl(e);return;case"select":ye("invalid",e),a=d=r=null;for(l in n)if(n.hasOwnProperty(l)&&(h=n[l],h!=null))switch(l){case"value":r=h;break;case"defaultValue":d=h;break;case"multiple":a=h;default:De(e,t,l,h,n,null)}t=r,n=d,e.multiple=!!a,t!=null?Ha(e,!!a,t,!1):n!=null&&Ha(e,!!a,n,!0);return;case"textarea":ye("invalid",e),r=l=a=null;for(d in n)if(n.hasOwnProperty(d)&&(h=n[d],h!=null))switch(d){case"value":a=h;break;case"defaultValue":l=h;break;case"children":r=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(u(91));break;default:De(e,t,d,h,n,null)}Ic(e,a,l,r),Fl(e);return;case"option":for(v in n)if(n.hasOwnProperty(v)&&(a=n[v],a!=null))switch(v){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:De(e,t,v,a,n,null)}return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(a=0;a<xl.length;a++)ye(xl[a],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in n)if(n.hasOwnProperty(R)&&(a=n[R],a!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:De(e,t,R,a,n,null)}return;default:if(Ko(t)){for(B in n)n.hasOwnProperty(B)&&(a=n[B],a!==void 0&&Du(e,t,B,a,n,void 0));return}}for(h in n)n.hasOwnProperty(h)&&(a=n[h],a!=null&&De(e,t,h,a,n,null))}function Pg(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,d=null,h=null,v=null,R=null,B=null;for(_ in n){var $=n[_];if(n.hasOwnProperty(_)&&$!=null)switch(_){case"checked":break;case"value":break;case"defaultValue":v=$;default:a.hasOwnProperty(_)||De(e,t,_,null,a,$)}}for(var O in a){var _=a[O];if($=n[O],a.hasOwnProperty(O)&&(_!=null||$!=null))switch(O){case"type":r=_;break;case"name":l=_;break;case"checked":R=_;break;case"defaultChecked":B=_;break;case"value":d=_;break;case"defaultValue":h=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(u(137,t));break;default:_!==$&&De(e,t,O,_,a,$)}}Zo(e,d,h,v,R,B,r,l);return;case"select":_=d=h=O=null;for(r in n)if(v=n[r],n.hasOwnProperty(r)&&v!=null)switch(r){case"value":break;case"multiple":_=v;default:a.hasOwnProperty(r)||De(e,t,r,null,a,v)}for(l in a)if(r=a[l],v=n[l],a.hasOwnProperty(l)&&(r!=null||v!=null))switch(l){case"value":O=r;break;case"defaultValue":h=r;break;case"multiple":d=r;default:r!==v&&De(e,t,l,r,a,v)}t=h,n=d,a=_,O!=null?Ha(e,!!n,O,!1):!!a!=!!n&&(t!=null?Ha(e,!!n,t,!0):Ha(e,!!n,n?[]:"",!1));return;case"textarea":_=O=null;for(h in n)if(l=n[h],n.hasOwnProperty(h)&&l!=null&&!a.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:De(e,t,h,null,a,l)}for(d in a)if(l=a[d],r=n[d],a.hasOwnProperty(d)&&(l!=null||r!=null))switch(d){case"value":O=l;break;case"defaultValue":_=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(u(91));break;default:l!==r&&De(e,t,d,l,a,r)}Fc(e,O,_);return;case"option":for(var se in n)if(O=n[se],n.hasOwnProperty(se)&&O!=null&&!a.hasOwnProperty(se))switch(se){case"selected":e.selected=!1;break;default:De(e,t,se,null,a,O)}for(v in a)if(O=a[v],_=n[v],a.hasOwnProperty(v)&&O!==_&&(O!=null||_!=null))switch(v){case"selected":e.selected=O&&typeof O!="function"&&typeof O!="symbol";break;default:De(e,t,v,O,a,_)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in n)O=n[re],n.hasOwnProperty(re)&&O!=null&&!a.hasOwnProperty(re)&&De(e,t,re,null,a,O);for(R in a)if(O=a[R],_=n[R],a.hasOwnProperty(R)&&O!==_&&(O!=null||_!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(u(137,t));break;default:De(e,t,R,O,a,_)}return;default:if(Ko(t)){for(var Oe in n)O=n[Oe],n.hasOwnProperty(Oe)&&O!==void 0&&!a.hasOwnProperty(Oe)&&Du(e,t,Oe,void 0,a,O);for(B in a)O=a[B],_=n[B],!a.hasOwnProperty(B)||O===_||O===void 0&&_===void 0||Du(e,t,B,O,a,_);return}}for(var E in n)O=n[E],n.hasOwnProperty(E)&&O!=null&&!a.hasOwnProperty(E)&&De(e,t,E,null,a,O);for($ in a)O=a[$],_=n[$],!a.hasOwnProperty($)||O===_||O==null&&_==null||De(e,t,$,O,a,_)}var Ou=null,_u=null;function Qr(e){return e.nodeType===9?e:e.ownerDocument}function th(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Nu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Lu=null;function Fg(){var e=window.event;return e&&e.type==="popstate"?e===Lu?!1:(Lu=e,!0):(Lu=null,!1)}var ah=typeof setTimeout=="function"?setTimeout:void 0,Ig=typeof clearTimeout=="function"?clearTimeout:void 0,ih=typeof Promise=="function"?Promise:void 0,e1=typeof queueMicrotask=="function"?queueMicrotask:typeof ih<"u"?function(e){return ih.resolve(null).then(e).catch(t1)}:ah;function t1(e){setTimeout(function(){throw e})}function Qn(e){return e==="head"}function lh(e,t){var n=t,a=0,l=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<a&&8>a){n=a;var d=e.ownerDocument;if(n&1&&vl(d.documentElement),n&2&&vl(d.body),n&4)for(n=d.head,vl(n),d=n.firstChild;d;){var h=d.nextSibling,v=d.nodeName;d[_i]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&d.rel.toLowerCase()==="stylesheet"||n.removeChild(d),d=h}}if(l===0){e.removeChild(r),kl(t);return}l--}else n==="$"||n==="$?"||n==="$!"?l++:a=n.charCodeAt(0)-48;else a=0;n=r}while(n);kl(t)}function Bu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Bu(n),qo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function n1(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[_i])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Qt(e.nextSibling),e===null)break}return null}function a1(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Qt(e.nextSibling),e===null))return null;return e}function Uu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function i1(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Hu=null;function rh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function oh(e,t,n){switch(t=Qr(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function vl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);qo(e)}var Yt=new Map,sh=new Set;function Kr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var jn=W.d;W.d={f:l1,r:r1,D:o1,C:s1,L:u1,m:c1,X:f1,S:d1,M:h1};function l1(){var e=jn.f(),t=Hr();return e||t}function r1(e){var t=Na(e);t!==null&&t.tag===5&&t.type==="form"?Tf(t):jn.r(e)}var mi=typeof document>"u"?null:document;function uh(e,t,n){var a=mi;if(a&&typeof t=="string"&&t){var l=Ot(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),sh.has(l)||(sh.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),st(t,"link",e),Ie(t),a.head.appendChild(t)))}}function o1(e){jn.D(e),uh("dns-prefetch",e,null)}function s1(e,t){jn.C(e,t),uh("preconnect",e,t)}function u1(e,t,n){jn.L(e,t,n);var a=mi;if(a&&e&&t){var l='link[rel="preload"][as="'+Ot(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Ot(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Ot(n.imageSizes)+'"]')):l+='[href="'+Ot(e)+'"]';var r=l;switch(t){case"style":r=gi(e);break;case"script":r=xi(e)}Yt.has(r)||(e=C({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Yt.set(r,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(yl(r))||t==="script"&&a.querySelector(wl(r))||(t=a.createElement("link"),st(t,"link",e),Ie(t),a.head.appendChild(t)))}}function c1(e,t){jn.m(e,t);var n=mi;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Ot(a)+'"][href="'+Ot(e)+'"]',r=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=xi(e)}if(!Yt.has(r)&&(e=C({rel:"modulepreload",href:e},t),Yt.set(r,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(wl(r)))return}a=n.createElement("link"),st(a,"link",e),Ie(a),n.head.appendChild(a)}}}function d1(e,t,n){jn.S(e,t,n);var a=mi;if(a&&e){var l=La(a).hoistableStyles,r=gi(e);t=t||"default";var d=l.get(r);if(!d){var h={loading:0,preload:null};if(d=a.querySelector(yl(r)))h.loading=5;else{e=C({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Yt.get(r))&&Yu(e,n);var v=d=a.createElement("link");Ie(v),st(v,"link",e),v._p=new Promise(function(R,B){v.onload=R,v.onerror=B}),v.addEventListener("load",function(){h.loading|=1}),v.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Jr(d,t,a)}d={type:"stylesheet",instance:d,count:1,state:h},l.set(r,d)}}}function f1(e,t){jn.X(e,t);var n=mi;if(n&&e){var a=La(n).hoistableScripts,l=xi(e),r=a.get(l);r||(r=n.querySelector(wl(l)),r||(e=C({src:e,async:!0},t),(t=Yt.get(l))&&$u(e,t),r=n.createElement("script"),Ie(r),st(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function h1(e,t){jn.M(e,t);var n=mi;if(n&&e){var a=La(n).hoistableScripts,l=xi(e),r=a.get(l);r||(r=n.querySelector(wl(l)),r||(e=C({src:e,async:!0,type:"module"},t),(t=Yt.get(l))&&$u(e,t),r=n.createElement("script"),Ie(r),st(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function ch(e,t,n,a){var l=(l=ne.current)?Kr(l):null;if(!l)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=gi(n.href),n=La(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=gi(n.href);var r=La(l).hoistableStyles,d=r.get(e);if(d||(l=l.ownerDocument||l,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,d),(r=l.querySelector(yl(e)))&&!r._p&&(d.instance=r,d.state.loading=5),Yt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Yt.set(e,n),r||p1(l,e,n,d.state))),t&&a===null)throw Error(u(528,""));return d}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=xi(n),n=La(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function gi(e){return'href="'+Ot(e)+'"'}function yl(e){return'link[rel="stylesheet"]['+e+"]"}function dh(e){return C({},e,{"data-precedence":e.precedence,precedence:null})}function p1(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),st(t,"link",n),Ie(t),e.head.appendChild(t))}function xi(e){return'[src="'+Ot(e)+'"]'}function wl(e){return"script[async]"+e}function fh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Ot(n.href)+'"]');if(a)return t.instance=a,Ie(a),a;var l=C({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ie(a),st(a,"style",l),Jr(a,n.precedence,e),t.instance=a;case"stylesheet":l=gi(n.href);var r=e.querySelector(yl(l));if(r)return t.state.loading|=4,t.instance=r,Ie(r),r;a=dh(n),(l=Yt.get(l))&&Yu(a,l),r=(e.ownerDocument||e).createElement("link"),Ie(r);var d=r;return d._p=new Promise(function(h,v){d.onload=h,d.onerror=v}),st(r,"link",a),t.state.loading|=4,Jr(r,n.precedence,e),t.instance=r;case"script":return r=xi(n.src),(l=e.querySelector(wl(r)))?(t.instance=l,Ie(l),l):(a=n,(l=Yt.get(r))&&(a=C({},n),$u(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ie(l),st(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Jr(a,n.precedence,e));return t.instance}function Jr(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,r=l,d=0;d<a.length;d++){var h=a[d];if(h.dataset.precedence===t)r=h;else if(r!==l)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Yu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function $u(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Wr=null;function hh(e,t,n){if(Wr===null){var a=new Map,l=Wr=new Map;l.set(n,a)}else l=Wr,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var r=n[l];if(!(r[_i]||r[ut]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var d=r.getAttribute(t)||"";d=e+d;var h=a.get(d);h?h.push(r):a.set(d,[r])}}return a}function ph(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function m1(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function mh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Sl=null;function g1(){}function x1(e,t,n){if(Sl===null)throw Error(u(475));var a=Sl;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=gi(n.href),r=e.querySelector(yl(l));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=Pr.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=r,Ie(r);return}r=e.ownerDocument||e,n=dh(n),(l=Yt.get(l))&&Yu(n,l),r=r.createElement("link"),Ie(r);var d=r;d._p=new Promise(function(h,v){d.onload=h,d.onerror=v}),st(r,"link",n),t.instance=r}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Pr.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function b1(){if(Sl===null)throw Error(u(475));var e=Sl;return e.stylesheets&&e.count===0&&qu(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&qu(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Pr(){if(this.count--,this.count===0){if(this.stylesheets)qu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Fr=null;function qu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Fr=new Map,t.forEach(v1,e),Fr=null,Pr.call(e))}function v1(e,t){if(!(t.state.loading&4)){var n=Fr.get(e);if(n)var a=n.get(null);else{n=new Map,Fr.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var d=l[r];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),a=d)}a&&n.set(null,a)}l=t.instance,d=l.getAttribute("data-precedence"),r=n.get(d)||a,r===a&&n.set(null,l),n.set(d,l),this.count++,a=Pr.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),r?r.parentNode.insertBefore(l,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var jl={$$typeof:Y,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function y1(e,t,n,a,l,r,d,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=be(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=be(0),this.hiddenUpdates=be(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function gh(e,t,n,a,l,r,d,h,v,R,B,$){return e=new y1(e,t,n,d,h,v,R,$),t=1,r===!0&&(t|=24),r=Et(3,null,null,t),e.current=r,r.stateNode=e,t=js(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:a,isDehydrated:n,cache:t},ks(r),e}function xh(e){return e?(e=Ka,e):Ka}function bh(e,t,n,a,l,r){l=xh(l),a.context===null?a.context=l:a.pendingContext=l,a=_n(t),a.payload={element:n},r=r===void 0?null:r,r!==null&&(a.callback=r),n=Nn(e,a,t),n!==null&&(Mt(n,e,t),Ii(n,e,t))}function vh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gu(e,t){vh(e,t),(e=e.alternate)&&vh(e,t)}function yh(e){if(e.tag===13){var t=Qa(e,67108864);t!==null&&Mt(t,e,67108864),Gu(e,67108864)}}var Ir=!0;function w1(e,t,n,a){var l=L.T;L.T=null;var r=W.p;try{W.p=2,Vu(e,t,n,a)}finally{W.p=r,L.T=l}}function S1(e,t,n,a){var l=L.T;L.T=null;var r=W.p;try{W.p=8,Vu(e,t,n,a)}finally{W.p=r,L.T=l}}function Vu(e,t,n,a){if(Ir){var l=Xu(a);if(l===null)Ru(e,t,a,eo,n),Sh(e,a);else if(C1(l,e,t,n,a))a.stopPropagation();else if(Sh(e,a),t&4&&-1<j1.indexOf(e)){for(;l!==null;){var r=Na(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var d=Pt(r.pendingLanes);if(d!==0){var h=r;for(h.pendingLanes|=2,h.entangledLanes|=2;d;){var v=1<<31-lt(d);h.entanglements[1]|=v,d&=~v}nn(r),(Ae&6)===0&&(Br=jt()+500,gl(0))}}break;case 13:h=Qa(r,2),h!==null&&Mt(h,r,2),Hr(),Gu(r,2)}if(r=Xu(a),r===null&&Ru(e,t,a,eo,n),r===l)break;l=r}l!==null&&a.stopPropagation()}else Ru(e,t,a,null,n)}}function Xu(e){return e=Wo(e),Zu(e)}var eo=null;function Zu(e){if(eo=null,e=_a(e),e!==null){var t=p(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=b(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return eo=e,null}function wh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ql()){case Ri:return 2;case Di:return 8;case ia:case Bo:return 32;case Kl:return 268435456;default:return 32}default:return 32}}var Qu=!1,Kn=null,Jn=null,Wn=null,Cl=new Map,El=new Map,Pn=[],j1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sh(e,t){switch(e){case"focusin":case"focusout":Kn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Wn=null;break;case"pointerover":case"pointerout":Cl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":El.delete(t.pointerId)}}function zl(e,t,n,a,l,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[l]},t!==null&&(t=Na(t),t!==null&&yh(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function C1(e,t,n,a,l){switch(t){case"focusin":return Kn=zl(Kn,e,t,n,a,l),!0;case"dragenter":return Jn=zl(Jn,e,t,n,a,l),!0;case"mouseover":return Wn=zl(Wn,e,t,n,a,l),!0;case"pointerover":var r=l.pointerId;return Cl.set(r,zl(Cl.get(r)||null,e,t,n,a,l)),!0;case"gotpointercapture":return r=l.pointerId,El.set(r,zl(El.get(r)||null,e,t,n,a,l)),!0}return!1}function jh(e){var t=_a(e.target);if(t!==null){var n=p(t);if(n!==null){if(t=n.tag,t===13){if(t=b(n),t!==null){e.blockedOn=t,xm(e.priority,function(){if(n.tag===13){var a=At();a=Vt(a);var l=Qa(n,a);l!==null&&Mt(l,n,a),Gu(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function to(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xu(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Jo=a,n.target.dispatchEvent(a),Jo=null}else return t=Na(n),t!==null&&yh(t),e.blockedOn=n,!1;t.shift()}return!0}function Ch(e,t,n){to(e)&&n.delete(t)}function E1(){Qu=!1,Kn!==null&&to(Kn)&&(Kn=null),Jn!==null&&to(Jn)&&(Jn=null),Wn!==null&&to(Wn)&&(Wn=null),Cl.forEach(Ch),El.forEach(Ch)}function no(e,t){e.blockedOn===t&&(e.blockedOn=null,Qu||(Qu=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,E1)))}var ao=null;function Eh(e){ao!==e&&(ao=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){ao===e&&(ao=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(Zu(a||n)===null)continue;break}var r=Na(n);r!==null&&(e.splice(t,3),t-=3,Zs(r,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function kl(e){function t(v){return no(v,e)}Kn!==null&&no(Kn,e),Jn!==null&&no(Jn,e),Wn!==null&&no(Wn,e),Cl.forEach(t),El.forEach(t);for(var n=0;n<Pn.length;n++){var a=Pn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Pn.length&&(n=Pn[0],n.blockedOn===null);)jh(n),n.blockedOn===null&&Pn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],r=n[a+1],d=l[gt]||null;if(typeof r=="function")d||Eh(n);else if(d){var h=null;if(r&&r.hasAttribute("formAction")){if(l=r,d=r[gt]||null)h=d.formAction;else if(Zu(l)!==null)continue}else h=d.action;typeof h=="function"?n[a+1]=h:(n.splice(a,3),a-=3),Eh(n)}}}function Ku(e){this._internalRoot=e}io.prototype.render=Ku.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,a=At();bh(n,a,e,t,null,null)},io.prototype.unmount=Ku.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bh(e.current,2,null,e,null,null),Hr(),t[Oa]=null}};function io(e){this._internalRoot=e}io.prototype.unstable_scheduleHydration=function(e){if(e){var t=Jl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pn.length&&t!==0&&t<Pn[n].priority;n++);Pn.splice(n,0,e),n===0&&jh(e)}};var zh=s.version;if(zh!=="19.1.0")throw Error(u(527,zh,"19.1.0"));W.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=x(t),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var z1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lo.isDisabled&&lo.supportsFiber)try{Wt=lo.inject(z1),it=lo}catch{}}return Al.createRoot=function(e,t){if(!f(e))throw Error(u(299));var n=!1,a="",l=qf,r=Gf,d=Vf,h=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(h=t.unstable_transitionCallbacks)),t=gh(e,1,!1,null,null,n,a,l,r,d,h,null),e[Oa]=t.current,Mu(e),new Ku(t)},Al.hydrateRoot=function(e,t,n){if(!f(e))throw Error(u(299));var a=!1,l="",r=qf,d=Gf,h=Vf,v=null,R=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(h=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(v=n.unstable_transitionCallbacks),n.formState!==void 0&&(R=n.formState)),t=gh(e,1,!0,t,n??null,a,l,r,d,h,v,R),t.context=xh(null),n=t.current,a=At(),a=Vt(a),l=_n(a),l.callback=null,Nn(n,l,a),n=a,t.current.lanes=n,Te(t,n),nn(t),e[Oa]=t.current,Mu(e),new io(t)},Al.version="19.1.0",Al}var Lh;function L1(){if(Lh)return Pu.exports;Lh=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}return i(),Pu.exports=N1(),Pu.exports}var B1=L1();const U1=jp(B1);var Ml={},Bh;function H1(){if(Bh)return Ml;Bh=1,Object.defineProperty(Ml,"__esModule",{value:!0}),Ml.parse=b,Ml.serialize=m;const i=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,s=/^[\u0021-\u003A\u003C-\u007E]*$/,c=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,u=/^[\u0020-\u003A\u003D-\u007E]*$/,f=Object.prototype.toString,p=(()=>{const M=function(){};return M.prototype=Object.create(null),M})();function b(M,N){const D=new p,G=M.length;if(G<2)return D;const V=(N==null?void 0:N.decode)||C;let z=0;do{const k=M.indexOf("=",z);if(k===-1)break;const Y=M.indexOf(";",z),X=Y===-1?G:Y;if(k>X){z=M.lastIndexOf(";",k-1)+1;continue}const Q=y(M,z,k),Z=x(M,k,Q),K=M.slice(Q,Z);if(D[K]===void 0){let xe=y(M,k+1,X),ue=x(M,X,xe);const F=V(M.slice(xe,ue));D[K]=F}z=X+1}while(z<G);return D}function y(M,N,D){do{const G=M.charCodeAt(N);if(G!==32&&G!==9)return N}while(++N<D);return D}function x(M,N,D){for(;N>D;){const G=M.charCodeAt(--N);if(G!==32&&G!==9)return N+1}return D}function m(M,N,D){const G=(D==null?void 0:D.encode)||encodeURIComponent;if(!i.test(M))throw new TypeError(`argument name is invalid: ${M}`);const V=G(N);if(!s.test(V))throw new TypeError(`argument val is invalid: ${N}`);let z=M+"="+V;if(!D)return z;if(D.maxAge!==void 0){if(!Number.isInteger(D.maxAge))throw new TypeError(`option maxAge is invalid: ${D.maxAge}`);z+="; Max-Age="+D.maxAge}if(D.domain){if(!c.test(D.domain))throw new TypeError(`option domain is invalid: ${D.domain}`);z+="; Domain="+D.domain}if(D.path){if(!u.test(D.path))throw new TypeError(`option path is invalid: ${D.path}`);z+="; Path="+D.path}if(D.expires){if(!T(D.expires)||!Number.isFinite(D.expires.valueOf()))throw new TypeError(`option expires is invalid: ${D.expires}`);z+="; Expires="+D.expires.toUTCString()}if(D.httpOnly&&(z+="; HttpOnly"),D.secure&&(z+="; Secure"),D.partitioned&&(z+="; Partitioned"),D.priority)switch(typeof D.priority=="string"?D.priority.toLowerCase():void 0){case"low":z+="; Priority=Low";break;case"medium":z+="; Priority=Medium";break;case"high":z+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${D.priority}`)}if(D.sameSite)switch(typeof D.sameSite=="string"?D.sameSite.toLowerCase():D.sameSite){case!0:case"strict":z+="; SameSite=Strict";break;case"lax":z+="; SameSite=Lax";break;case"none":z+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${D.sameSite}`)}return z}function C(M){if(M.indexOf("%")===-1)return M;try{return decodeURIComponent(M)}catch{return M}}function T(M){return f.call(M)==="[object Date]"}return Ml}H1();var Uh="popstate";function Y1(i={}){function s(u,f){let{pathname:p,search:b,hash:y}=u.location;return wc("",{pathname:p,search:b,hash:y},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function c(u,f){return typeof f=="string"?f:Hl(f)}return q1(s,c,null,i)}function Ye(i,s){if(i===!1||i===null||typeof i>"u")throw new Error(s)}function rn(i,s){if(!i){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function $1(){return Math.random().toString(36).substring(2,10)}function Hh(i,s){return{usr:i.state,key:i.key,idx:s}}function wc(i,s,c=null,u){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof s=="string"?ki(s):s,state:c,key:s&&s.key||u||$1()}}function Hl({pathname:i="/",search:s="",hash:c=""}){return s&&s!=="?"&&(i+=s.charAt(0)==="?"?s:"?"+s),c&&c!=="#"&&(i+=c.charAt(0)==="#"?c:"#"+c),i}function ki(i){let s={};if(i){let c=i.indexOf("#");c>=0&&(s.hash=i.substring(c),i=i.substring(0,c));let u=i.indexOf("?");u>=0&&(s.search=i.substring(u),i=i.substring(0,u)),i&&(s.pathname=i)}return s}function q1(i,s,c,u={}){let{window:f=document.defaultView,v5Compat:p=!1}=u,b=f.history,y="POP",x=null,m=C();m==null&&(m=0,b.replaceState({...b.state,idx:m},""));function C(){return(b.state||{idx:null}).idx}function T(){y="POP";let V=C(),z=V==null?null:V-m;m=V,x&&x({action:y,location:G.location,delta:z})}function M(V,z){y="PUSH";let k=wc(G.location,V,z);m=C()+1;let Y=Hh(k,m),X=G.createHref(k);try{b.pushState(Y,"",X)}catch(Q){if(Q instanceof DOMException&&Q.name==="DataCloneError")throw Q;f.location.assign(X)}p&&x&&x({action:y,location:G.location,delta:1})}function N(V,z){y="REPLACE";let k=wc(G.location,V,z);m=C();let Y=Hh(k,m),X=G.createHref(k);b.replaceState(Y,"",X),p&&x&&x({action:y,location:G.location,delta:0})}function D(V){return G1(V)}let G={get action(){return y},get location(){return i(f,b)},listen(V){if(x)throw new Error("A history only accepts one active listener");return f.addEventListener(Uh,T),x=V,()=>{f.removeEventListener(Uh,T),x=null}},createHref(V){return s(f,V)},createURL:D,encodeLocation(V){let z=D(V);return{pathname:z.pathname,search:z.search,hash:z.hash}},push:M,replace:N,go(V){return b.go(V)}};return G}function G1(i,s=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),Ye(c,"No window.location.(origin|href) available to create URL");let u=typeof i=="string"?i:Hl(i);return u=u.replace(/ $/,"%20"),!s&&u.startsWith("//")&&(u=c+u),new URL(u,c)}function Cp(i,s,c="/"){return V1(i,s,c,!1)}function V1(i,s,c,u){let f=typeof s=="string"?ki(s):s,p=zn(f.pathname||"/",c);if(p==null)return null;let b=Ep(i);X1(b);let y=null;for(let x=0;y==null&&x<b.length;++x){let m=nx(p);y=ex(b[x],m,u)}return y}function Ep(i,s=[],c=[],u=""){let f=(p,b,y)=>{let x={relativePath:y===void 0?p.path||"":y,caseSensitive:p.caseSensitive===!0,childrenIndex:b,route:p};x.relativePath.startsWith("/")&&(Ye(x.relativePath.startsWith(u),`Absolute route path "${x.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(u.length));let m=En([u,x.relativePath]),C=c.concat(x);p.children&&p.children.length>0&&(Ye(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Ep(p.children,s,C,m)),!(p.path==null&&!p.index)&&s.push({path:m,score:F1(m,p.index),routesMeta:C})};return i.forEach((p,b)=>{var y;if(p.path===""||!((y=p.path)!=null&&y.includes("?")))f(p,b);else for(let x of zp(p.path))f(p,b,x)}),s}function zp(i){let s=i.split("/");if(s.length===0)return[];let[c,...u]=s,f=c.endsWith("?"),p=c.replace(/\?$/,"");if(u.length===0)return f?[p,""]:[p];let b=zp(u.join("/")),y=[];return y.push(...b.map(x=>x===""?p:[p,x].join("/"))),f&&y.push(...b),y.map(x=>i.startsWith("/")&&x===""?"/":x)}function X1(i){i.sort((s,c)=>s.score!==c.score?c.score-s.score:I1(s.routesMeta.map(u=>u.childrenIndex),c.routesMeta.map(u=>u.childrenIndex)))}var Z1=/^:[\w-]+$/,Q1=3,K1=2,J1=1,W1=10,P1=-2,Yh=i=>i==="*";function F1(i,s){let c=i.split("/"),u=c.length;return c.some(Yh)&&(u+=P1),s&&(u+=K1),c.filter(f=>!Yh(f)).reduce((f,p)=>f+(Z1.test(p)?Q1:p===""?J1:W1),u)}function I1(i,s){return i.length===s.length&&i.slice(0,-1).every((u,f)=>u===s[f])?i[i.length-1]-s[s.length-1]:0}function ex(i,s,c=!1){let{routesMeta:u}=i,f={},p="/",b=[];for(let y=0;y<u.length;++y){let x=u[y],m=y===u.length-1,C=p==="/"?s:s.slice(p.length)||"/",T=jo({path:x.relativePath,caseSensitive:x.caseSensitive,end:m},C),M=x.route;if(!T&&m&&c&&!u[u.length-1].route.index&&(T=jo({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},C)),!T)return null;Object.assign(f,T.params),b.push({params:f,pathname:En([p,T.pathname]),pathnameBase:rx(En([p,T.pathnameBase])),route:M}),T.pathnameBase!=="/"&&(p=En([p,T.pathnameBase]))}return b}function jo(i,s){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[c,u]=tx(i.path,i.caseSensitive,i.end),f=s.match(c);if(!f)return null;let p=f[0],b=p.replace(/(.)\/+$/,"$1"),y=f.slice(1);return{params:u.reduce((m,{paramName:C,isOptional:T},M)=>{if(C==="*"){let D=y[M]||"";b=p.slice(0,p.length-D.length).replace(/(.)\/+$/,"$1")}const N=y[M];return T&&!N?m[C]=void 0:m[C]=(N||"").replace(/%2F/g,"/"),m},{}),pathname:p,pathnameBase:b,pattern:i}}function tx(i,s=!1,c=!0){rn(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let u=[],f="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,y,x)=>(u.push({paramName:y,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(u.push({paramName:"*"}),f+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?f+="\\/*$":i!==""&&i!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,s?void 0:"i"),u]}function nx(i){try{return i.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return rn(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),i}}function zn(i,s){if(s==="/")return i;if(!i.toLowerCase().startsWith(s.toLowerCase()))return null;let c=s.endsWith("/")?s.length-1:s.length,u=i.charAt(c);return u&&u!=="/"?null:i.slice(c)||"/"}function ax(i,s="/"){let{pathname:c,search:u="",hash:f=""}=typeof i=="string"?ki(i):i;return{pathname:c?c.startsWith("/")?c:ix(c,s):s,search:ox(u),hash:sx(f)}}function ix(i,s){let c=s.replace(/\/+$/,"").split("/");return i.split("/").forEach(f=>{f===".."?c.length>1&&c.pop():f!=="."&&c.push(f)}),c.length>1?c.join("/"):"/"}function tc(i,s,c,u){return`Cannot include a '${i}' character in a manually specified \`to.${s}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function lx(i){return i.filter((s,c)=>c===0||s.route.path&&s.route.path.length>0)}function kp(i){let s=lx(i);return s.map((c,u)=>u===s.length-1?c.pathname:c.pathnameBase)}function Tp(i,s,c,u=!1){let f;typeof i=="string"?f=ki(i):(f={...i},Ye(!f.pathname||!f.pathname.includes("?"),tc("?","pathname","search",f)),Ye(!f.pathname||!f.pathname.includes("#"),tc("#","pathname","hash",f)),Ye(!f.search||!f.search.includes("#"),tc("#","search","hash",f)));let p=i===""||f.pathname==="",b=p?"/":f.pathname,y;if(b==null)y=c;else{let T=s.length-1;if(!u&&b.startsWith("..")){let M=b.split("/");for(;M[0]==="..";)M.shift(),T-=1;f.pathname=M.join("/")}y=T>=0?s[T]:"/"}let x=ax(f,y),m=b&&b!=="/"&&b.endsWith("/"),C=(p||b===".")&&c.endsWith("/");return!x.pathname.endsWith("/")&&(m||C)&&(x.pathname+="/"),x}var En=i=>i.join("/").replace(/\/\/+/g,"/"),rx=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),ox=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,sx=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function ux(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var Ap=["POST","PUT","PATCH","DELETE"];new Set(Ap);var cx=["GET",...Ap];new Set(cx);var Ti=j.createContext(null);Ti.displayName="DataRouter";var Ao=j.createContext(null);Ao.displayName="DataRouterState";var Mp=j.createContext({isTransitioning:!1});Mp.displayName="ViewTransition";var dx=j.createContext(new Map);dx.displayName="Fetchers";var fx=j.createContext(null);fx.displayName="Await";var on=j.createContext(null);on.displayName="Navigation";var $l=j.createContext(null);$l.displayName="Location";var kn=j.createContext({outlet:null,matches:[],isDataRoute:!1});kn.displayName="Route";var Dc=j.createContext(null);Dc.displayName="RouteError";function hx(i,{relative:s}={}){Ye(ql(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:u}=j.useContext(on),{hash:f,pathname:p,search:b}=Vl(i,{relative:s}),y=p;return c!=="/"&&(y=p==="/"?c:En([c,p])),u.createHref({pathname:y,search:b,hash:f})}function ql(){return j.useContext($l)!=null}function aa(){return Ye(ql(),"useLocation() may be used only in the context of a <Router> component."),j.useContext($l).location}var Rp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Dp(i){j.useContext(on).static||j.useLayoutEffect(i)}function Gl(){let{isDataRoute:i}=j.useContext(kn);return i?zx():px()}function px(){Ye(ql(),"useNavigate() may be used only in the context of a <Router> component.");let i=j.useContext(Ti),{basename:s,navigator:c}=j.useContext(on),{matches:u}=j.useContext(kn),{pathname:f}=aa(),p=JSON.stringify(kp(u)),b=j.useRef(!1);return Dp(()=>{b.current=!0}),j.useCallback((x,m={})=>{if(rn(b.current,Rp),!b.current)return;if(typeof x=="number"){c.go(x);return}let C=Tp(x,JSON.parse(p),f,m.relative==="path");i==null&&s!=="/"&&(C.pathname=C.pathname==="/"?s:En([s,C.pathname])),(m.replace?c.replace:c.push)(C,m.state,m)},[s,c,p,f,i])}j.createContext(null);function Vl(i,{relative:s}={}){let{matches:c}=j.useContext(kn),{pathname:u}=aa(),f=JSON.stringify(kp(c));return j.useMemo(()=>Tp(i,JSON.parse(f),u,s==="path"),[i,f,u,s])}function mx(i,s){return Op(i,s)}function Op(i,s,c,u){var z;Ye(ql(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=j.useContext(on),{matches:p}=j.useContext(kn),b=p[p.length-1],y=b?b.params:{},x=b?b.pathname:"/",m=b?b.pathnameBase:"/",C=b&&b.route;{let k=C&&C.path||"";_p(x,!C||k.endsWith("*")||k.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${k}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${k}"> to <Route path="${k==="/"?"*":`${k}/*`}">.`)}let T=aa(),M;if(s){let k=typeof s=="string"?ki(s):s;Ye(m==="/"||((z=k.pathname)==null?void 0:z.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${k.pathname}" was given in the \`location\` prop.`),M=k}else M=T;let N=M.pathname||"/",D=N;if(m!=="/"){let k=m.replace(/^\//,"").split("/");D="/"+N.replace(/^\//,"").split("/").slice(k.length).join("/")}let G=Cp(i,{pathname:D});rn(C||G!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),rn(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=yx(G&&G.map(k=>Object.assign({},k,{params:Object.assign({},y,k.params),pathname:En([m,f.encodeLocation?f.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?m:En([m,f.encodeLocation?f.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),p,c,u);return s&&V?j.createElement($l.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},V):V}function gx(){let i=Ex(),s=ux(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),c=i instanceof Error?i.stack:null,u="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:u},p={padding:"2px 4px",backgroundColor:u},b=null;return console.error("Error handled by React Router default ErrorBoundary:",i),b=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:p},"ErrorBoundary")," or"," ",j.createElement("code",{style:p},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},s),c?j.createElement("pre",{style:f},c):null,b)}var xx=j.createElement(gx,null),bx=class extends j.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,s){return s.location!==i.location||s.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:s.error,location:s.location,revalidation:i.revalidation||s.revalidation}}componentDidCatch(i,s){console.error("React Router caught the following error during render",i,s)}render(){return this.state.error!==void 0?j.createElement(kn.Provider,{value:this.props.routeContext},j.createElement(Dc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function vx({routeContext:i,match:s,children:c}){let u=j.useContext(Ti);return u&&u.static&&u.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=s.route.id),j.createElement(kn.Provider,{value:i},c)}function yx(i,s=[],c=null,u=null){if(i==null){if(!c)return null;if(c.errors)i=c.matches;else if(s.length===0&&!c.initialized&&c.matches.length>0)i=c.matches;else return null}let f=i,p=c==null?void 0:c.errors;if(p!=null){let x=f.findIndex(m=>m.route.id&&(p==null?void 0:p[m.route.id])!==void 0);Ye(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),f=f.slice(0,Math.min(f.length,x+1))}let b=!1,y=-1;if(c)for(let x=0;x<f.length;x++){let m=f[x];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(y=x),m.route.id){let{loaderData:C,errors:T}=c,M=m.route.loader&&!C.hasOwnProperty(m.route.id)&&(!T||T[m.route.id]===void 0);if(m.route.lazy||M){b=!0,y>=0?f=f.slice(0,y+1):f=[f[0]];break}}}return f.reduceRight((x,m,C)=>{let T,M=!1,N=null,D=null;c&&(T=p&&m.route.id?p[m.route.id]:void 0,N=m.route.errorElement||xx,b&&(y<0&&C===0?(_p("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,D=null):y===C&&(M=!0,D=m.route.hydrateFallbackElement||null)));let G=s.concat(f.slice(0,C+1)),V=()=>{let z;return T?z=N:M?z=D:m.route.Component?z=j.createElement(m.route.Component,null):m.route.element?z=m.route.element:z=x,j.createElement(vx,{match:m,routeContext:{outlet:x,matches:G,isDataRoute:c!=null},children:z})};return c&&(m.route.ErrorBoundary||m.route.errorElement||C===0)?j.createElement(bx,{location:c.location,revalidation:c.revalidation,component:N,error:T,children:V(),routeContext:{outlet:null,matches:G,isDataRoute:!0}}):V()},null)}function Oc(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wx(i){let s=j.useContext(Ti);return Ye(s,Oc(i)),s}function Sx(i){let s=j.useContext(Ao);return Ye(s,Oc(i)),s}function jx(i){let s=j.useContext(kn);return Ye(s,Oc(i)),s}function _c(i){let s=jx(i),c=s.matches[s.matches.length-1];return Ye(c.route.id,`${i} can only be used on routes that contain a unique "id"`),c.route.id}function Cx(){return _c("useRouteId")}function Ex(){var u;let i=j.useContext(Dc),s=Sx("useRouteError"),c=_c("useRouteError");return i!==void 0?i:(u=s.errors)==null?void 0:u[c]}function zx(){let{router:i}=wx("useNavigate"),s=_c("useNavigate"),c=j.useRef(!1);return Dp(()=>{c.current=!0}),j.useCallback(async(f,p={})=>{rn(c.current,Rp),c.current&&(typeof f=="number"?i.navigate(f):await i.navigate(f,{fromRouteId:s,...p}))},[i,s])}var $h={};function _p(i,s,c){!s&&!$h[i]&&($h[i]=!0,rn(!1,c))}j.memo(kx);function kx({routes:i,future:s,state:c}){return Op(i,void 0,c,s)}function ta(i){Ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Tx({basename:i="/",children:s=null,location:c,navigationType:u="POP",navigator:f,static:p=!1}){Ye(!ql(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=i.replace(/^\/*/,"/"),y=j.useMemo(()=>({basename:b,navigator:f,static:p,future:{}}),[b,f,p]);typeof c=="string"&&(c=ki(c));let{pathname:x="/",search:m="",hash:C="",state:T=null,key:M="default"}=c,N=j.useMemo(()=>{let D=zn(x,b);return D==null?null:{location:{pathname:D,search:m,hash:C,state:T,key:M},navigationType:u}},[b,x,m,C,T,M,u]);return rn(N!=null,`<Router basename="${b}"> is not able to match the URL "${x}${m}${C}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:j.createElement(on.Provider,{value:y},j.createElement($l.Provider,{children:s,value:N}))}function Ax({children:i,location:s}){return mx(Sc(i),s)}function Sc(i,s=[]){let c=[];return j.Children.forEach(i,(u,f)=>{if(!j.isValidElement(u))return;let p=[...s,f];if(u.type===j.Fragment){c.push.apply(c,Sc(u.props.children,p));return}Ye(u.type===ta,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ye(!u.props.index||!u.props.children,"An index route cannot have child routes.");let b={id:u.props.id||p.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(b.children=Sc(u.props.children,p)),c.push(b)}),c}var go="get",xo="application/x-www-form-urlencoded";function Mo(i){return i!=null&&typeof i.tagName=="string"}function Mx(i){return Mo(i)&&i.tagName.toLowerCase()==="button"}function Rx(i){return Mo(i)&&i.tagName.toLowerCase()==="form"}function Dx(i){return Mo(i)&&i.tagName.toLowerCase()==="input"}function Ox(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function _x(i,s){return i.button===0&&(!s||s==="_self")&&!Ox(i)}var ro=null;function Nx(){if(ro===null)try{new FormData(document.createElement("form"),0),ro=!1}catch{ro=!0}return ro}var Lx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function nc(i){return i!=null&&!Lx.has(i)?(rn(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xo}"`),null):i}function Bx(i,s){let c,u,f,p,b;if(Rx(i)){let y=i.getAttribute("action");u=y?zn(y,s):null,c=i.getAttribute("method")||go,f=nc(i.getAttribute("enctype"))||xo,p=new FormData(i)}else if(Mx(i)||Dx(i)&&(i.type==="submit"||i.type==="image")){let y=i.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=i.getAttribute("formaction")||y.getAttribute("action");if(u=x?zn(x,s):null,c=i.getAttribute("formmethod")||y.getAttribute("method")||go,f=nc(i.getAttribute("formenctype"))||nc(y.getAttribute("enctype"))||xo,p=new FormData(y,i),!Nx()){let{name:m,type:C,value:T}=i;if(C==="image"){let M=m?`${m}.`:"";p.append(`${M}x`,"0"),p.append(`${M}y`,"0")}else m&&p.append(m,T)}}else{if(Mo(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=go,u=null,f=xo,b=i}return p&&f==="text/plain"&&(b=p,p=void 0),{action:u,method:c.toLowerCase(),encType:f,formData:p,body:b}}function Nc(i,s){if(i===!1||i===null||typeof i>"u")throw new Error(s)}async function Ux(i,s){if(i.id in s)return s[i.id];try{let c=await import(i.module);return s[i.id]=c,c}catch(c){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Hx(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Yx(i,s,c){let u=await Promise.all(i.map(async f=>{let p=s.routes[f.route.id];if(p){let b=await Ux(p,c);return b.links?b.links():[]}return[]}));return Vx(u.flat(1).filter(Hx).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function qh(i,s,c,u,f,p){let b=(x,m)=>c[m]?x.route.id!==c[m].route.id:!0,y=(x,m)=>{var C;return c[m].pathname!==x.pathname||((C=c[m].route.path)==null?void 0:C.endsWith("*"))&&c[m].params["*"]!==x.params["*"]};return p==="assets"?s.filter((x,m)=>b(x,m)||y(x,m)):p==="data"?s.filter((x,m)=>{var T;let C=u.routes[x.route.id];if(!C||!C.hasLoader)return!1;if(b(x,m)||y(x,m))return!0;if(x.route.shouldRevalidate){let M=x.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((T=c[0])==null?void 0:T.params)||{},nextUrl:new URL(i,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof M=="boolean")return M}return!0}):[]}function $x(i,s,{includeHydrateFallback:c}={}){return qx(i.map(u=>{let f=s.routes[u.route.id];if(!f)return[];let p=[f.module];return f.clientActionModule&&(p=p.concat(f.clientActionModule)),f.clientLoaderModule&&(p=p.concat(f.clientLoaderModule)),c&&f.hydrateFallbackModule&&(p=p.concat(f.hydrateFallbackModule)),f.imports&&(p=p.concat(f.imports)),p}).flat(1))}function qx(i){return[...new Set(i)]}function Gx(i){let s={},c=Object.keys(i).sort();for(let u of c)s[u]=i[u];return s}function Vx(i,s){let c=new Set;return new Set(s),i.reduce((u,f)=>{let p=JSON.stringify(Gx(f));return c.has(p)||(c.add(p),u.push({key:p,link:f})),u},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Xx=new Set([100,101,204,205]);function Zx(i,s){let c=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return c.pathname==="/"?c.pathname="_root.data":s&&zn(c.pathname,s)==="/"?c.pathname=`${s.replace(/\/$/,"")}/_root.data`:c.pathname=`${c.pathname.replace(/\/$/,"")}.data`,c}function Np(){let i=j.useContext(Ti);return Nc(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Qx(){let i=j.useContext(Ao);return Nc(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Lc=j.createContext(void 0);Lc.displayName="FrameworkContext";function Lp(){let i=j.useContext(Lc);return Nc(i,"You must render this element inside a <HydratedRouter> element"),i}function Kx(i,s){let c=j.useContext(Lc),[u,f]=j.useState(!1),[p,b]=j.useState(!1),{onFocus:y,onBlur:x,onMouseEnter:m,onMouseLeave:C,onTouchStart:T}=s,M=j.useRef(null);j.useEffect(()=>{if(i==="render"&&b(!0),i==="viewport"){let G=z=>{z.forEach(k=>{b(k.isIntersecting)})},V=new IntersectionObserver(G,{threshold:.5});return M.current&&V.observe(M.current),()=>{V.disconnect()}}},[i]),j.useEffect(()=>{if(u){let G=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout(G)}}},[u]);let N=()=>{f(!0)},D=()=>{f(!1),b(!1)};return c?i!=="intent"?[p,M,{}]:[p,M,{onFocus:Rl(y,N),onBlur:Rl(x,D),onMouseEnter:Rl(m,N),onMouseLeave:Rl(C,D),onTouchStart:Rl(T,N)}]:[!1,M,{}]}function Rl(i,s){return c=>{i&&i(c),c.defaultPrevented||s(c)}}function Jx({page:i,...s}){let{router:c}=Np(),u=j.useMemo(()=>Cp(c.routes,i,c.basename),[c.routes,i,c.basename]);return u?j.createElement(Px,{page:i,matches:u,...s}):null}function Wx(i){let{manifest:s,routeModules:c}=Lp(),[u,f]=j.useState([]);return j.useEffect(()=>{let p=!1;return Yx(i,s,c).then(b=>{p||f(b)}),()=>{p=!0}},[i,s,c]),u}function Px({page:i,matches:s,...c}){let u=aa(),{manifest:f,routeModules:p}=Lp(),{basename:b}=Np(),{loaderData:y,matches:x}=Qx(),m=j.useMemo(()=>qh(i,s,x,f,u,"data"),[i,s,x,f,u]),C=j.useMemo(()=>qh(i,s,x,f,u,"assets"),[i,s,x,f,u]),T=j.useMemo(()=>{if(i===u.pathname+u.search+u.hash)return[];let D=new Set,G=!1;if(s.forEach(z=>{var Y;let k=f.routes[z.route.id];!k||!k.hasLoader||(!m.some(X=>X.route.id===z.route.id)&&z.route.id in y&&((Y=p[z.route.id])!=null&&Y.shouldRevalidate)||k.hasClientLoader?G=!0:D.add(z.route.id))}),D.size===0)return[];let V=Zx(i,b);return G&&D.size>0&&V.searchParams.set("_routes",s.filter(z=>D.has(z.route.id)).map(z=>z.route.id).join(",")),[V.pathname+V.search]},[b,y,u,f,m,s,i,p]),M=j.useMemo(()=>$x(C,f),[C,f]),N=Wx(C);return j.createElement(j.Fragment,null,T.map(D=>j.createElement("link",{key:D,rel:"prefetch",as:"fetch",href:D,...c})),M.map(D=>j.createElement("link",{key:D,rel:"modulepreload",href:D,...c})),N.map(({key:D,link:G})=>j.createElement("link",{key:D,...G})))}function Fx(...i){return s=>{i.forEach(c=>{typeof c=="function"?c(s):c!=null&&(c.current=s)})}}var Bp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Bp&&(window.__reactRouterVersion="7.6.2")}catch{}function Ix({basename:i,children:s,window:c}){let u=j.useRef();u.current==null&&(u.current=Y1({window:c,v5Compat:!0}));let f=u.current,[p,b]=j.useState({action:f.action,location:f.location}),y=j.useCallback(x=>{j.startTransition(()=>b(x))},[b]);return j.useLayoutEffect(()=>f.listen(y),[f,y]),j.createElement(Tx,{basename:i,children:s,location:p.location,navigationType:p.action,navigator:f})}var Up=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,an=j.forwardRef(function({onClick:s,discover:c="render",prefetch:u="none",relative:f,reloadDocument:p,replace:b,state:y,target:x,to:m,preventScrollReset:C,viewTransition:T,...M},N){let{basename:D}=j.useContext(on),G=typeof m=="string"&&Up.test(m),V,z=!1;if(typeof m=="string"&&G&&(V=m,Bp))try{let ue=new URL(window.location.href),F=m.startsWith("//")?new URL(ue.protocol+m):new URL(m),fe=zn(F.pathname,D);F.origin===ue.origin&&fe!=null?m=fe+F.search+F.hash:z=!0}catch{rn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let k=hx(m,{relative:f}),[Y,X,Q]=Kx(u,M),Z=a2(m,{replace:b,state:y,target:x,preventScrollReset:C,relative:f,viewTransition:T});function K(ue){s&&s(ue),ue.defaultPrevented||Z(ue)}let xe=j.createElement("a",{...M,...Q,href:V||k,onClick:z||p?s:K,ref:Fx(N,X),target:x,"data-discover":!G&&c==="render"?"true":void 0});return Y&&!G?j.createElement(j.Fragment,null,xe,j.createElement(Jx,{page:k})):xe});an.displayName="Link";var e2=j.forwardRef(function({"aria-current":s="page",caseSensitive:c=!1,className:u="",end:f=!1,style:p,to:b,viewTransition:y,children:x,...m},C){let T=Vl(b,{relative:m.relative}),M=aa(),N=j.useContext(Ao),{navigator:D,basename:G}=j.useContext(on),V=N!=null&&s2(T)&&y===!0,z=D.encodeLocation?D.encodeLocation(T).pathname:T.pathname,k=M.pathname,Y=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;c||(k=k.toLowerCase(),Y=Y?Y.toLowerCase():null,z=z.toLowerCase()),Y&&G&&(Y=zn(Y,G)||Y);const X=z!=="/"&&z.endsWith("/")?z.length-1:z.length;let Q=k===z||!f&&k.startsWith(z)&&k.charAt(X)==="/",Z=Y!=null&&(Y===z||!f&&Y.startsWith(z)&&Y.charAt(z.length)==="/"),K={isActive:Q,isPending:Z,isTransitioning:V},xe=Q?s:void 0,ue;typeof u=="function"?ue=u(K):ue=[u,Q?"active":null,Z?"pending":null,V?"transitioning":null].filter(Boolean).join(" ");let F=typeof p=="function"?p(K):p;return j.createElement(an,{...m,"aria-current":xe,className:ue,ref:C,style:F,to:b,viewTransition:y},typeof x=="function"?x(K):x)});e2.displayName="NavLink";var t2=j.forwardRef(({discover:i="render",fetcherKey:s,navigate:c,reloadDocument:u,replace:f,state:p,method:b=go,action:y,onSubmit:x,relative:m,preventScrollReset:C,viewTransition:T,...M},N)=>{let D=r2(),G=o2(y,{relative:m}),V=b.toLowerCase()==="get"?"get":"post",z=typeof y=="string"&&Up.test(y),k=Y=>{if(x&&x(Y),Y.defaultPrevented)return;Y.preventDefault();let X=Y.nativeEvent.submitter,Q=(X==null?void 0:X.getAttribute("formmethod"))||b;D(X||Y.currentTarget,{fetcherKey:s,method:Q,navigate:c,replace:f,state:p,relative:m,preventScrollReset:C,viewTransition:T})};return j.createElement("form",{ref:N,method:V,action:G,onSubmit:u?x:k,...M,"data-discover":!z&&i==="render"?"true":void 0})});t2.displayName="Form";function n2(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Hp(i){let s=j.useContext(Ti);return Ye(s,n2(i)),s}function a2(i,{target:s,replace:c,state:u,preventScrollReset:f,relative:p,viewTransition:b}={}){let y=Gl(),x=aa(),m=Vl(i,{relative:p});return j.useCallback(C=>{if(_x(C,s)){C.preventDefault();let T=c!==void 0?c:Hl(x)===Hl(m);y(i,{replace:T,state:u,preventScrollReset:f,relative:p,viewTransition:b})}},[x,y,m,c,u,s,i,f,p,b])}var i2=0,l2=()=>`__${String(++i2)}__`;function r2(){let{router:i}=Hp("useSubmit"),{basename:s}=j.useContext(on),c=Cx();return j.useCallback(async(u,f={})=>{let{action:p,method:b,encType:y,formData:x,body:m}=Bx(u,s);if(f.navigate===!1){let C=f.fetcherKey||l2();await i.fetch(C,c,f.action||p,{preventScrollReset:f.preventScrollReset,formData:x,body:m,formMethod:f.method||b,formEncType:f.encType||y,flushSync:f.flushSync})}else await i.navigate(f.action||p,{preventScrollReset:f.preventScrollReset,formData:x,body:m,formMethod:f.method||b,formEncType:f.encType||y,replace:f.replace,state:f.state,fromRouteId:c,flushSync:f.flushSync,viewTransition:f.viewTransition})},[i,s,c])}function o2(i,{relative:s}={}){let{basename:c}=j.useContext(on),u=j.useContext(kn);Ye(u,"useFormAction must be used inside a RouteContext");let[f]=u.matches.slice(-1),p={...Vl(i||".",{relative:s})},b=aa();if(i==null){p.search=b.search;let y=new URLSearchParams(p.search),x=y.getAll("index");if(x.some(C=>C==="")){y.delete("index"),x.filter(T=>T).forEach(T=>y.append("index",T));let C=y.toString();p.search=C?`?${C}`:""}}return(!i||i===".")&&f.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(p.pathname=p.pathname==="/"?c:En([c,p.pathname])),Hl(p)}function s2(i,s={}){let c=j.useContext(Mp);Ye(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Hp("useViewTransitionState"),f=Vl(i,{relative:s.relative});if(!c.isTransitioning)return!1;let p=zn(c.currentLocation.pathname,u)||c.currentLocation.pathname,b=zn(c.nextLocation.pathname,u)||c.nextLocation.pathname;return jo(f.pathname,b)!=null||jo(f.pathname,p)!=null}[...Xx];const Yp=j.createContext(),Ta=()=>{const i=j.useContext(Yp);if(!i)throw new Error("useAuth must be used within an AuthProvider");return i},u2=({children:i})=>{const[s,c]=j.useState(null),[u,f]=j.useState(!0),[p,b]=j.useState({isVisible:!1,message:"",type:"success"}),y={email:"john.doe@gmail.com",password:"password123"},x={id:"user123",email:"john.doe@gmail.com",firstName:"John",lastName:"Doe",name:"John Doe",avatar:"https://ui-avatars.com/api/?name=John+Doe&background=29ba9b&color=fff&size=40",roles:["user"],joinDate:"2024-01-15",isVerified:!0};j.useEffect(()=>{const V=localStorage.getItem("user"),z=localStorage.getItem("token");V&&z&&c(JSON.parse(V)),f(!1)},[]);const m=(V,z="success")=>{b({isVisible:!0,message:V,type:z})},C=()=>{b(V=>({...V,isVisible:!1}))},T=(V,z)=>V===y.email&&z===y.password,M=(V,z)=>{localStorage.setItem("user",JSON.stringify(V)),localStorage.setItem("token",z),c(V),m(`Welcome back, ${V.firstName}!`,"success")},G={user:s,login:M,loginWithCredentials:(V,z)=>T(V,z)?(M(x,"dummy-jwt-token-12345"),{success:!0}):{success:!1,error:"Invalid email or password. Please try again."},logout:()=>{localStorage.removeItem("user"),localStorage.removeItem("token"),c(null),m("User logged out","info")},authenticate:T,loading:u,isAuthenticated:!!s,notification:p,showNotification:m,hideNotification:C,dummyCredentials:y};return o.jsx(Yp.Provider,{value:G,children:i})};var wt=function(){return wt=Object.assign||function(s){for(var c,u=1,f=arguments.length;u<f;u++){c=arguments[u];for(var p in c)Object.prototype.hasOwnProperty.call(c,p)&&(s[p]=c[p])}return s},wt.apply(this,arguments)};function Co(i,s,c){if(c||arguments.length===2)for(var u=0,f=s.length,p;u<f;u++)(p||!(u in s))&&(p||(p=Array.prototype.slice.call(s,0,u)),p[u]=s[u]);return i.concat(p||Array.prototype.slice.call(s))}var Be="-ms-",Ul="-moz-",ke="-webkit-",$p="comm",Ro="rule",Bc="decl",c2="@import",qp="@keyframes",d2="@layer",Gp=Math.abs,Uc=String.fromCharCode,jc=Object.assign;function f2(i,s){return at(i,0)^45?(((s<<2^at(i,0))<<2^at(i,1))<<2^at(i,2))<<2^at(i,3):0}function Vp(i){return i.trim()}function Cn(i,s){return(i=s.exec(i))?i[0]:i}function he(i,s,c){return i.replace(s,c)}function bo(i,s,c){return i.indexOf(s,c)}function at(i,s){return i.charCodeAt(s)|0}function Si(i,s,c){return i.slice(s,c)}function ln(i){return i.length}function Xp(i){return i.length}function Bl(i,s){return s.push(i),i}function h2(i,s){return i.map(s).join("")}function Gh(i,s){return i.filter(function(c){return!Cn(c,s)})}var Do=1,ji=1,Zp=0,$t=0,Je=0,Ai="";function Oo(i,s,c,u,f,p,b,y){return{value:i,root:s,parent:c,type:u,props:f,children:p,line:Do,column:ji,length:b,return:"",siblings:y}}function na(i,s){return jc(Oo("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},s)}function bi(i){for(;i.root;)i=na(i.root,{children:[i]});Bl(i,i.siblings)}function p2(){return Je}function m2(){return Je=$t>0?at(Ai,--$t):0,ji--,Je===10&&(ji=1,Do--),Je}function Kt(){return Je=$t<Zp?at(Ai,$t++):0,ji++,Je===10&&(ji=1,Do++),Je}function za(){return at(Ai,$t)}function vo(){return $t}function _o(i,s){return Si(Ai,i,s)}function Cc(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function g2(i){return Do=ji=1,Zp=ln(Ai=i),$t=0,[]}function x2(i){return Ai="",i}function ac(i){return Vp(_o($t-1,Ec(i===91?i+2:i===40?i+1:i)))}function b2(i){for(;(Je=za())&&Je<33;)Kt();return Cc(i)>2||Cc(Je)>3?"":" "}function v2(i,s){for(;--s&&Kt()&&!(Je<48||Je>102||Je>57&&Je<65||Je>70&&Je<97););return _o(i,vo()+(s<6&&za()==32&&Kt()==32))}function Ec(i){for(;Kt();)switch(Je){case i:return $t;case 34:case 39:i!==34&&i!==39&&Ec(Je);break;case 40:i===41&&Ec(i);break;case 92:Kt();break}return $t}function y2(i,s){for(;Kt()&&i+Je!==57;)if(i+Je===84&&za()===47)break;return"/*"+_o(s,$t-1)+"*"+Uc(i===47?i:Kt())}function w2(i){for(;!Cc(za());)Kt();return _o(i,$t)}function S2(i){return x2(yo("",null,null,null,[""],i=g2(i),0,[0],i))}function yo(i,s,c,u,f,p,b,y,x){for(var m=0,C=0,T=b,M=0,N=0,D=0,G=1,V=1,z=1,k=0,Y="",X=f,Q=p,Z=u,K=Y;V;)switch(D=k,k=Kt()){case 40:if(D!=108&&at(K,T-1)==58){bo(K+=he(ac(k),"&","&\f"),"&\f",Gp(m?y[m-1]:0))!=-1&&(z=-1);break}case 34:case 39:case 91:K+=ac(k);break;case 9:case 10:case 13:case 32:K+=b2(D);break;case 92:K+=v2(vo()-1,7);continue;case 47:switch(za()){case 42:case 47:Bl(j2(y2(Kt(),vo()),s,c,x),x);break;default:K+="/"}break;case 123*G:y[m++]=ln(K)*z;case 125*G:case 59:case 0:switch(k){case 0:case 125:V=0;case 59+C:z==-1&&(K=he(K,/\f/g,"")),N>0&&ln(K)-T&&Bl(N>32?Xh(K+";",u,c,T-1,x):Xh(he(K," ","")+";",u,c,T-2,x),x);break;case 59:K+=";";default:if(Bl(Z=Vh(K,s,c,m,C,f,y,Y,X=[],Q=[],T,p),p),k===123)if(C===0)yo(K,s,Z,Z,X,p,T,y,Q);else switch(M===99&&at(K,3)===110?100:M){case 100:case 108:case 109:case 115:yo(i,Z,Z,u&&Bl(Vh(i,Z,Z,0,0,f,y,Y,f,X=[],T,Q),Q),f,Q,T,y,u?X:Q);break;default:yo(K,Z,Z,Z,[""],Q,0,y,Q)}}m=C=N=0,G=z=1,Y=K="",T=b;break;case 58:T=1+ln(K),N=D;default:if(G<1){if(k==123)--G;else if(k==125&&G++==0&&m2()==125)continue}switch(K+=Uc(k),k*G){case 38:z=C>0?1:(K+="\f",-1);break;case 44:y[m++]=(ln(K)-1)*z,z=1;break;case 64:za()===45&&(K+=ac(Kt())),M=za(),C=T=ln(Y=K+=w2(vo())),k++;break;case 45:D===45&&ln(K)==2&&(G=0)}}return p}function Vh(i,s,c,u,f,p,b,y,x,m,C,T){for(var M=f-1,N=f===0?p:[""],D=Xp(N),G=0,V=0,z=0;G<u;++G)for(var k=0,Y=Si(i,M+1,M=Gp(V=b[G])),X=i;k<D;++k)(X=Vp(V>0?N[k]+" "+Y:he(Y,/&\f/g,N[k])))&&(x[z++]=X);return Oo(i,s,c,f===0?Ro:y,x,m,C,T)}function j2(i,s,c,u){return Oo(i,s,c,$p,Uc(p2()),Si(i,2,-2),0,u)}function Xh(i,s,c,u,f){return Oo(i,s,c,Bc,Si(i,0,u),Si(i,u+1,-1),u,f)}function Qp(i,s,c){switch(f2(i,s)){case 5103:return ke+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ke+i+i;case 4789:return Ul+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return ke+i+Ul+i+Be+i+i;case 5936:switch(at(i,s+11)){case 114:return ke+i+Be+he(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return ke+i+Be+he(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return ke+i+Be+he(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return ke+i+Be+i+i;case 6165:return ke+i+Be+"flex-"+i+i;case 5187:return ke+i+he(i,/(\w+).+(:[^]+)/,ke+"box-$1$2"+Be+"flex-$1$2")+i;case 5443:return ke+i+Be+"flex-item-"+he(i,/flex-|-self/g,"")+(Cn(i,/flex-|baseline/)?"":Be+"grid-row-"+he(i,/flex-|-self/g,""))+i;case 4675:return ke+i+Be+"flex-line-pack"+he(i,/align-content|flex-|-self/g,"")+i;case 5548:return ke+i+Be+he(i,"shrink","negative")+i;case 5292:return ke+i+Be+he(i,"basis","preferred-size")+i;case 6060:return ke+"box-"+he(i,"-grow","")+ke+i+Be+he(i,"grow","positive")+i;case 4554:return ke+he(i,/([^-])(transform)/g,"$1"+ke+"$2")+i;case 6187:return he(he(he(i,/(zoom-|grab)/,ke+"$1"),/(image-set)/,ke+"$1"),i,"")+i;case 5495:case 3959:return he(i,/(image-set\([^]*)/,ke+"$1$`$1");case 4968:return he(he(i,/(.+:)(flex-)?(.*)/,ke+"box-pack:$3"+Be+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ke+i+i;case 4200:if(!Cn(i,/flex-|baseline/))return Be+"grid-column-align"+Si(i,s)+i;break;case 2592:case 3360:return Be+he(i,"template-","")+i;case 4384:case 3616:return c&&c.some(function(u,f){return s=f,Cn(u.props,/grid-\w+-end/)})?~bo(i+(c=c[s].value),"span",0)?i:Be+he(i,"-start","")+i+Be+"grid-row-span:"+(~bo(c,"span",0)?Cn(c,/\d+/):+Cn(c,/\d+/)-+Cn(i,/\d+/))+";":Be+he(i,"-start","")+i;case 4896:case 4128:return c&&c.some(function(u){return Cn(u.props,/grid-\w+-start/)})?i:Be+he(he(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return he(i,/(.+)-inline(.+)/,ke+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ln(i)-1-s>6)switch(at(i,s+1)){case 109:if(at(i,s+4)!==45)break;case 102:return he(i,/(.+:)(.+)-([^]+)/,"$1"+ke+"$2-$3$1"+Ul+(at(i,s+3)==108?"$3":"$2-$3"))+i;case 115:return~bo(i,"stretch",0)?Qp(he(i,"stretch","fill-available"),s,c)+i:i}break;case 5152:case 5920:return he(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,f,p,b,y,x,m){return Be+f+":"+p+m+(b?Be+f+"-span:"+(y?x:+x-+p)+m:"")+i});case 4949:if(at(i,s+6)===121)return he(i,":",":"+ke)+i;break;case 6444:switch(at(i,at(i,14)===45?18:11)){case 120:return he(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ke+(at(i,14)===45?"inline-":"")+"box$3$1"+ke+"$2$3$1"+Be+"$2box$3")+i;case 100:return he(i,":",":"+Be)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return he(i,"scroll-","scroll-snap-")+i}return i}function Eo(i,s){for(var c="",u=0;u<i.length;u++)c+=s(i[u],u,i,s)||"";return c}function C2(i,s,c,u){switch(i.type){case d2:if(i.children.length)break;case c2:case Bc:return i.return=i.return||i.value;case $p:return"";case qp:return i.return=i.value+"{"+Eo(i.children,u)+"}";case Ro:if(!ln(i.value=i.props.join(",")))return""}return ln(c=Eo(i.children,u))?i.return=i.value+"{"+c+"}":""}function E2(i){var s=Xp(i);return function(c,u,f,p){for(var b="",y=0;y<s;y++)b+=i[y](c,u,f,p)||"";return b}}function z2(i){return function(s){s.root||(s=s.return)&&i(s)}}function k2(i,s,c,u){if(i.length>-1&&!i.return)switch(i.type){case Bc:i.return=Qp(i.value,i.length,c);return;case qp:return Eo([na(i,{value:he(i.value,"@","@"+ke)})],u);case Ro:if(i.length)return h2(c=i.props,function(f){switch(Cn(f,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":bi(na(i,{props:[he(f,/:(read-\w+)/,":"+Ul+"$1")]})),bi(na(i,{props:[f]})),jc(i,{props:Gh(c,u)});break;case"::placeholder":bi(na(i,{props:[he(f,/:(plac\w+)/,":"+ke+"input-$1")]})),bi(na(i,{props:[he(f,/:(plac\w+)/,":"+Ul+"$1")]})),bi(na(i,{props:[he(f,/:(plac\w+)/,Be+"input-$1")]})),bi(na(i,{props:[f]})),jc(i,{props:Gh(c,u)});break}return""})}}var T2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Rt={},Ci=typeof process<"u"&&Rt!==void 0&&(Rt.REACT_APP_SC_ATTR||Rt.SC_ATTR)||"data-styled",Kp="active",Jp="data-styled-version",No="6.1.19",Hc=`/*!sc*/
`,zo=typeof window<"u"&&typeof document<"u",A2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Rt!==void 0&&Rt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Rt.REACT_APP_SC_DISABLE_SPEEDY!==""?Rt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Rt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Rt!==void 0&&Rt.SC_DISABLE_SPEEDY!==void 0&&Rt.SC_DISABLE_SPEEDY!==""&&Rt.SC_DISABLE_SPEEDY!=="false"&&Rt.SC_DISABLE_SPEEDY),Lo=Object.freeze([]),Ei=Object.freeze({});function M2(i,s,c){return c===void 0&&(c=Ei),i.theme!==c.theme&&i.theme||s||c.theme}var Wp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),R2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,D2=/(^-|-$)/g;function Zh(i){return i.replace(R2,"-").replace(D2,"")}var O2=/(a)(d)/gi,oo=52,Qh=function(i){return String.fromCharCode(i+(i>25?39:97))};function zc(i){var s,c="";for(s=Math.abs(i);s>oo;s=s/oo|0)c=Qh(s%oo)+c;return(Qh(s%oo)+c).replace(O2,"$1-$2")}var ic,Pp=5381,yi=function(i,s){for(var c=s.length;c;)i=33*i^s.charCodeAt(--c);return i},Fp=function(i){return yi(Pp,i)};function _2(i){return zc(Fp(i)>>>0)}function N2(i){return i.displayName||i.name||"Component"}function lc(i){return typeof i=="string"&&!0}var Ip=typeof Symbol=="function"&&Symbol.for,em=Ip?Symbol.for("react.memo"):60115,L2=Ip?Symbol.for("react.forward_ref"):60112,B2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},U2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},tm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},H2=((ic={})[L2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ic[em]=tm,ic);function Kh(i){return("type"in(s=i)&&s.type.$$typeof)===em?tm:"$$typeof"in i?H2[i.$$typeof]:B2;var s}var Y2=Object.defineProperty,$2=Object.getOwnPropertyNames,Jh=Object.getOwnPropertySymbols,q2=Object.getOwnPropertyDescriptor,G2=Object.getPrototypeOf,Wh=Object.prototype;function nm(i,s,c){if(typeof s!="string"){if(Wh){var u=G2(s);u&&u!==Wh&&nm(i,u,c)}var f=$2(s);Jh&&(f=f.concat(Jh(s)));for(var p=Kh(i),b=Kh(s),y=0;y<f.length;++y){var x=f[y];if(!(x in U2||c&&c[x]||b&&x in b||p&&x in p)){var m=q2(s,x);try{Y2(i,x,m)}catch{}}}}return i}function zi(i){return typeof i=="function"}function Yc(i){return typeof i=="object"&&"styledComponentId"in i}function Ea(i,s){return i&&s?"".concat(i," ").concat(s):i||s||""}function Ph(i,s){if(i.length===0)return"";for(var c=i[0],u=1;u<i.length;u++)c+=i[u];return c}function Yl(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function kc(i,s,c){if(c===void 0&&(c=!1),!c&&!Yl(i)&&!Array.isArray(i))return s;if(Array.isArray(s))for(var u=0;u<s.length;u++)i[u]=kc(i[u],s[u]);else if(Yl(s))for(var u in s)i[u]=kc(i[u],s[u]);return i}function $c(i,s){Object.defineProperty(i,"toString",{value:s})}function Xl(i){for(var s=[],c=1;c<arguments.length;c++)s[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(s.length>0?" Args: ".concat(s.join(", ")):""))}var V2=function(){function i(s){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=s}return i.prototype.indexOfGroup=function(s){for(var c=0,u=0;u<s;u++)c+=this.groupSizes[u];return c},i.prototype.insertRules=function(s,c){if(s>=this.groupSizes.length){for(var u=this.groupSizes,f=u.length,p=f;s>=p;)if((p<<=1)<0)throw Xl(16,"".concat(s));this.groupSizes=new Uint32Array(p),this.groupSizes.set(u),this.length=p;for(var b=f;b<p;b++)this.groupSizes[b]=0}for(var y=this.indexOfGroup(s+1),x=(b=0,c.length);b<x;b++)this.tag.insertRule(y,c[b])&&(this.groupSizes[s]++,y++)},i.prototype.clearGroup=function(s){if(s<this.length){var c=this.groupSizes[s],u=this.indexOfGroup(s),f=u+c;this.groupSizes[s]=0;for(var p=u;p<f;p++)this.tag.deleteRule(u)}},i.prototype.getGroup=function(s){var c="";if(s>=this.length||this.groupSizes[s]===0)return c;for(var u=this.groupSizes[s],f=this.indexOfGroup(s),p=f+u,b=f;b<p;b++)c+="".concat(this.tag.getRule(b)).concat(Hc);return c},i}(),wo=new Map,ko=new Map,So=1,so=function(i){if(wo.has(i))return wo.get(i);for(;ko.has(So);)So++;var s=So++;return wo.set(i,s),ko.set(s,i),s},X2=function(i,s){So=s+1,wo.set(i,s),ko.set(s,i)},Z2="style[".concat(Ci,"][").concat(Jp,'="').concat(No,'"]'),Q2=new RegExp("^".concat(Ci,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),K2=function(i,s,c){for(var u,f=c.split(","),p=0,b=f.length;p<b;p++)(u=f[p])&&i.registerName(s,u)},J2=function(i,s){for(var c,u=((c=s.textContent)!==null&&c!==void 0?c:"").split(Hc),f=[],p=0,b=u.length;p<b;p++){var y=u[p].trim();if(y){var x=y.match(Q2);if(x){var m=0|parseInt(x[1],10),C=x[2];m!==0&&(X2(C,m),K2(i,C,x[3]),i.getTag().insertRules(m,f)),f.length=0}else f.push(y)}}},Fh=function(i){for(var s=document.querySelectorAll(Z2),c=0,u=s.length;c<u;c++){var f=s[c];f&&f.getAttribute(Ci)!==Kp&&(J2(i,f),f.parentNode&&f.parentNode.removeChild(f))}};function W2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var am=function(i){var s=document.head,c=i||s,u=document.createElement("style"),f=function(y){var x=Array.from(y.querySelectorAll("style[".concat(Ci,"]")));return x[x.length-1]}(c),p=f!==void 0?f.nextSibling:null;u.setAttribute(Ci,Kp),u.setAttribute(Jp,No);var b=W2();return b&&u.setAttribute("nonce",b),c.insertBefore(u,p),u},P2=function(){function i(s){this.element=am(s),this.element.appendChild(document.createTextNode("")),this.sheet=function(c){if(c.sheet)return c.sheet;for(var u=document.styleSheets,f=0,p=u.length;f<p;f++){var b=u[f];if(b.ownerNode===c)return b}throw Xl(17)}(this.element),this.length=0}return i.prototype.insertRule=function(s,c){try{return this.sheet.insertRule(c,s),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(s){this.sheet.deleteRule(s),this.length--},i.prototype.getRule=function(s){var c=this.sheet.cssRules[s];return c&&c.cssText?c.cssText:""},i}(),F2=function(){function i(s){this.element=am(s),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(s,c){if(s<=this.length&&s>=0){var u=document.createTextNode(c);return this.element.insertBefore(u,this.nodes[s]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(s){this.element.removeChild(this.nodes[s]),this.length--},i.prototype.getRule=function(s){return s<this.length?this.nodes[s].textContent:""},i}(),I2=function(){function i(s){this.rules=[],this.length=0}return i.prototype.insertRule=function(s,c){return s<=this.length&&(this.rules.splice(s,0,c),this.length++,!0)},i.prototype.deleteRule=function(s){this.rules.splice(s,1),this.length--},i.prototype.getRule=function(s){return s<this.length?this.rules[s]:""},i}(),Ih=zo,eb={isServer:!zo,useCSSOMInjection:!A2},im=function(){function i(s,c,u){s===void 0&&(s=Ei),c===void 0&&(c={});var f=this;this.options=wt(wt({},eb),s),this.gs=c,this.names=new Map(u),this.server=!!s.isServer,!this.server&&zo&&Ih&&(Ih=!1,Fh(this)),$c(this,function(){return function(p){for(var b=p.getTag(),y=b.length,x="",m=function(T){var M=function(z){return ko.get(z)}(T);if(M===void 0)return"continue";var N=p.names.get(M),D=b.getGroup(T);if(N===void 0||!N.size||D.length===0)return"continue";var G="".concat(Ci,".g").concat(T,'[id="').concat(M,'"]'),V="";N!==void 0&&N.forEach(function(z){z.length>0&&(V+="".concat(z,","))}),x+="".concat(D).concat(G,'{content:"').concat(V,'"}').concat(Hc)},C=0;C<y;C++)m(C);return x}(f)})}return i.registerId=function(s){return so(s)},i.prototype.rehydrate=function(){!this.server&&zo&&Fh(this)},i.prototype.reconstructWithOptions=function(s,c){return c===void 0&&(c=!0),new i(wt(wt({},this.options),s),this.gs,c&&this.names||void 0)},i.prototype.allocateGSInstance=function(s){return this.gs[s]=(this.gs[s]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(s=function(c){var u=c.useCSSOMInjection,f=c.target;return c.isServer?new I2(f):u?new P2(f):new F2(f)}(this.options),new V2(s)));var s},i.prototype.hasNameForId=function(s,c){return this.names.has(s)&&this.names.get(s).has(c)},i.prototype.registerName=function(s,c){if(so(s),this.names.has(s))this.names.get(s).add(c);else{var u=new Set;u.add(c),this.names.set(s,u)}},i.prototype.insertRules=function(s,c,u){this.registerName(s,c),this.getTag().insertRules(so(s),u)},i.prototype.clearNames=function(s){this.names.has(s)&&this.names.get(s).clear()},i.prototype.clearRules=function(s){this.getTag().clearGroup(so(s)),this.clearNames(s)},i.prototype.clearTag=function(){this.tag=void 0},i}(),tb=/&/g,nb=/^\s*\/\/.*$/gm;function lm(i,s){return i.map(function(c){return c.type==="rule"&&(c.value="".concat(s," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(s," ")),c.props=c.props.map(function(u){return"".concat(s," ").concat(u)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=lm(c.children,s)),c})}function ab(i){var s,c,u,f=Ei,p=f.options,b=p===void 0?Ei:p,y=f.plugins,x=y===void 0?Lo:y,m=function(M,N,D){return D.startsWith(c)&&D.endsWith(c)&&D.replaceAll(c,"").length>0?".".concat(s):M},C=x.slice();C.push(function(M){M.type===Ro&&M.value.includes("&")&&(M.props[0]=M.props[0].replace(tb,c).replace(u,m))}),b.prefix&&C.push(k2),C.push(C2);var T=function(M,N,D,G){N===void 0&&(N=""),D===void 0&&(D=""),G===void 0&&(G="&"),s=G,c=N,u=new RegExp("\\".concat(c,"\\b"),"g");var V=M.replace(nb,""),z=S2(D||N?"".concat(D," ").concat(N," { ").concat(V," }"):V);b.namespace&&(z=lm(z,b.namespace));var k=[];return Eo(z,E2(C.concat(z2(function(Y){return k.push(Y)})))),k};return T.hash=x.length?x.reduce(function(M,N){return N.name||Xl(15),yi(M,N.name)},Pp).toString():"",T}var ib=new im,Tc=ab(),rm=wi.createContext({shouldForwardProp:void 0,styleSheet:ib,stylis:Tc});rm.Consumer;wi.createContext(void 0);function ep(){return j.useContext(rm)}var lb=function(){function i(s,c){var u=this;this.inject=function(f,p){p===void 0&&(p=Tc);var b=u.name+p.hash;f.hasNameForId(u.id,b)||f.insertRules(u.id,b,p(u.rules,b,"@keyframes"))},this.name=s,this.id="sc-keyframes-".concat(s),this.rules=c,$c(this,function(){throw Xl(12,String(u.name))})}return i.prototype.getName=function(s){return s===void 0&&(s=Tc),this.name+s.hash},i}(),rb=function(i){return i>="A"&&i<="Z"};function tp(i){for(var s="",c=0;c<i.length;c++){var u=i[c];if(c===1&&u==="-"&&i[0]==="-")return i;rb(u)?s+="-"+u.toLowerCase():s+=u}return s.startsWith("ms-")?"-"+s:s}var om=function(i){return i==null||i===!1||i===""},sm=function(i){var s,c,u=[];for(var f in i){var p=i[f];i.hasOwnProperty(f)&&!om(p)&&(Array.isArray(p)&&p.isCss||zi(p)?u.push("".concat(tp(f),":"),p,";"):Yl(p)?u.push.apply(u,Co(Co(["".concat(f," {")],sm(p),!1),["}"],!1)):u.push("".concat(tp(f),": ").concat((s=f,(c=p)==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||s in T2||s.startsWith("--")?String(c).trim():"".concat(c,"px")),";")))}return u};function ka(i,s,c,u){if(om(i))return[];if(Yc(i))return[".".concat(i.styledComponentId)];if(zi(i)){if(!zi(p=i)||p.prototype&&p.prototype.isReactComponent||!s)return[i];var f=i(s);return ka(f,s,c,u)}var p;return i instanceof lb?c?(i.inject(c,u),[i.getName(u)]):[i]:Yl(i)?sm(i):Array.isArray(i)?Array.prototype.concat.apply(Lo,i.map(function(b){return ka(b,s,c,u)})):[i.toString()]}function ob(i){for(var s=0;s<i.length;s+=1){var c=i[s];if(zi(c)&&!Yc(c))return!1}return!0}var sb=Fp(No),ub=function(){function i(s,c,u){this.rules=s,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&ob(s),this.componentId=c,this.baseHash=yi(sb,c),this.baseStyle=u,im.registerId(c)}return i.prototype.generateAndInjectStyles=function(s,c,u){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(s,c,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))f=Ea(f,this.staticRulesId);else{var p=Ph(ka(this.rules,s,c,u)),b=zc(yi(this.baseHash,p)>>>0);if(!c.hasNameForId(this.componentId,b)){var y=u(p,".".concat(b),void 0,this.componentId);c.insertRules(this.componentId,b,y)}f=Ea(f,b),this.staticRulesId=b}else{for(var x=yi(this.baseHash,u.hash),m="",C=0;C<this.rules.length;C++){var T=this.rules[C];if(typeof T=="string")m+=T;else if(T){var M=Ph(ka(T,s,c,u));x=yi(x,M+C),m+=M}}if(m){var N=zc(x>>>0);c.hasNameForId(this.componentId,N)||c.insertRules(this.componentId,N,u(m,".".concat(N),void 0,this.componentId)),f=Ea(f,N)}}return f},i}(),um=wi.createContext(void 0);um.Consumer;var rc={};function cb(i,s,c){var u=Yc(i),f=i,p=!lc(i),b=s.attrs,y=b===void 0?Lo:b,x=s.componentId,m=x===void 0?function(X,Q){var Z=typeof X!="string"?"sc":Zh(X);rc[Z]=(rc[Z]||0)+1;var K="".concat(Z,"-").concat(_2(No+Z+rc[Z]));return Q?"".concat(Q,"-").concat(K):K}(s.displayName,s.parentComponentId):x,C=s.displayName,T=C===void 0?function(X){return lc(X)?"styled.".concat(X):"Styled(".concat(N2(X),")")}(i):C,M=s.displayName&&s.componentId?"".concat(Zh(s.displayName),"-").concat(s.componentId):s.componentId||m,N=u&&f.attrs?f.attrs.concat(y).filter(Boolean):y,D=s.shouldForwardProp;if(u&&f.shouldForwardProp){var G=f.shouldForwardProp;if(s.shouldForwardProp){var V=s.shouldForwardProp;D=function(X,Q){return G(X,Q)&&V(X,Q)}}else D=G}var z=new ub(c,M,u?f.componentStyle:void 0);function k(X,Q){return function(Z,K,xe){var ue=Z.attrs,F=Z.componentStyle,fe=Z.defaultProps,Ce=Z.foldedComponentIds,ft=Z.styledComponentId,pt=Z.target,Ge=wi.useContext(um),L=ep(),W=Z.shouldForwardProp||L.shouldForwardProp,le=M2(K,Ge,fe)||Ei,me=function(ce,ne,Ve){for(var we,We=wt(wt({},ne),{className:void 0,theme:Ve}),Jt=0;Jt<ce.length;Jt+=1){var St=zi(we=ce[Jt])?we(We):we;for(var mt in St)We[mt]=mt==="className"?Ea(We[mt],St[mt]):mt==="style"?wt(wt({},We[mt]),St[mt]):St[mt]}return ne.className&&(We.className=Ea(We.className,ne.className)),We}(ue,K,le),w=me.as||pt,q={};for(var J in me)me[J]===void 0||J[0]==="$"||J==="as"||J==="theme"&&me.theme===le||(J==="forwardedAs"?q.as=me.forwardedAs:W&&!W(J,w)||(q[J]=me[J]));var P=function(ce,ne){var Ve=ep(),we=ce.generateAndInjectStyles(ne,Ve.styleSheet,Ve.stylis);return we}(F,me),ee=Ea(Ce,ft);return P&&(ee+=" "+P),me.className&&(ee+=" "+me.className),q[lc(w)&&!Wp.has(w)?"class":"className"]=ee,xe&&(q.ref=xe),j.createElement(w,q)}(Y,X,Q)}k.displayName=T;var Y=wi.forwardRef(k);return Y.attrs=N,Y.componentStyle=z,Y.displayName=T,Y.shouldForwardProp=D,Y.foldedComponentIds=u?Ea(f.foldedComponentIds,f.styledComponentId):"",Y.styledComponentId=M,Y.target=u?f.target:i,Object.defineProperty(Y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(X){this._foldedDefaultProps=u?function(Q){for(var Z=[],K=1;K<arguments.length;K++)Z[K-1]=arguments[K];for(var xe=0,ue=Z;xe<ue.length;xe++)kc(Q,ue[xe],!0);return Q}({},f.defaultProps,X):X}}),$c(Y,function(){return".".concat(Y.styledComponentId)}),p&&nm(Y,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Y}function np(i,s){for(var c=[i[0]],u=0,f=s.length;u<f;u+=1)c.push(s[u],i[u+1]);return c}var ap=function(i){return Object.assign(i,{isCss:!0})};function db(i){for(var s=[],c=1;c<arguments.length;c++)s[c-1]=arguments[c];if(zi(i)||Yl(i))return ap(ka(np(Lo,Co([i],s,!0))));var u=i;return s.length===0&&u.length===1&&typeof u[0]=="string"?ka(u):ap(ka(np(u,s)))}function Ac(i,s,c){if(c===void 0&&(c=Ei),!s)throw Xl(1,s);var u=function(f){for(var p=[],b=1;b<arguments.length;b++)p[b-1]=arguments[b];return i(s,c,db.apply(void 0,Co([f],p,!1)))};return u.attrs=function(f){return Ac(i,s,wt(wt({},c),{attrs:Array.prototype.concat(c.attrs,f).filter(Boolean)}))},u.withConfig=function(f){return Ac(i,s,wt(wt({},c),f))},u}var cm=function(i){return Ac(cb,i)},g=cm;Wp.forEach(function(i){g[i]=cm(i)});const dm="/my-pickleball-app/assets/ppl-logo-P6U_k7ZW.svg",fb=g.div`
  * {
    &:focus {
      outline: none;
    }
  }
`,hb=g.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  background: rgba(255, 255, 255, 0.98);
  padding: 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(8px);
  z-index: 1000;
  transition: transform 0.3s ease;

  ${i=>i.$hidden&&`
    transform: translateY(-100%);
  `}

  @media (max-width: 768px) {
    height: 64px;
  }
`,pb=g.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`,mb=g.div`
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid #29ba9b;
    outline-offset: 4px;
    border-radius: 4px;
  }

  img {
    height: 65px;
    width: auto;
  
  @media (max-width: 768px) {
      height: 50px;
    }
  }
`,gb=g.div`
  display: flex;
  gap: 40px;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`,xb=g.div`
  display: flex;
  gap: 40px;
  align-items: center;
  margin-right: 12px;

  @media (max-width: 1024px) {
    gap: 24px;
  }
`,uo=g.button`
  color: #475569;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  padding: 8px 4px;
  position: relative;
  letter-spacing: -0.2px;
  background: none;
  border: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    height: 2px;
    background: #29ba9b;
    transform: scaleX(0);
    transition: transform 0.2s ease;
  }

  &:hover {
    color: #234255;
    
    &:after {
      transform: scaleX(1);
    }
  }

  &:focus-visible {
    outline: 2px solid #29ba9b;
    outline-offset: 4px;
    border-radius: 4px;
    color: #234255;
    
    &:after {
      transform: scaleX(1);
    }
  }

  ${i=>i.$active&&`
    color: #234255;
    &:after {
      transform: scaleX(1);
    }
  `}
`,fm=g.div`
  display: flex;
  gap: 12px;
`,Mc=g.button`
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }
  
  ${i=>i.$primary?`
    background: #29ba9b;
    color: white;
    
    &:hover {
      background: #239b83;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(41, 186, 155, 0.2);
    }

    &:focus-visible {
      outline: 2px solid #29ba9b;
      outline-offset: 2px;
      background: #239b83;
    }
  `:`
    color: #475569;
    border: 1.5px solid #e2e8f0;
    background: transparent;
    
    &:hover {
      background: #f8fafc;
      color: #234255;
      border-color: #cbd5e1;
    }

    &:focus-visible {
      outline: 2px solid #475569;
      outline-offset: 2px;
      background: #f8fafc;
      color: #234255;
    }
  `}

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`,bb=g.button`
  display: none;
  background: none;
  border: none;
  padding: 8px;
  color: #475569;
  cursor: pointer;
  transition: all 0.2s ease;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  gap: 8px;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    ${i=>i.$show&&`
      display: flex;
    `}
  }

  &:hover {
    color: #29ba9b;
  }

  &:focus-visible {
    outline: 2px solid #29ba9b;
    outline-offset: 2px;
    border-radius: 4px;
    color: #29ba9b;
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
  }

  svg {
    width: 16px;
    height: 16px;
    stroke: currentColor;
    stroke-width: 2;
  }
`,vb=g(Mc)`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    padding: 8px 16px;
    font-size: 14px;
  }
`,yb=g.div`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #e2e8f0;
  padding: 4px 4px 8px 4px; /* Reduced container padding */
  z-index: 1000;
  box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1);
  min-height: 55px; /* Reduced container height */

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  /* iOS safe area support */
  padding-bottom: calc(8px + env(safe-area-inset-bottom));
`,Dl=g.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px; /* Increased gap for bigger buttons */
  padding: 8px 6px; /* Increased padding for bigger buttons */
  border: none;
  background: none;
  color: #64748b;
  font-size: 11px; /* Bigger font */
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 60px; /* Bigger width */
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }

  svg {
    width: 24px; /* Bigger icons */
    height: 24px;
    stroke: currentColor;
    stroke-width: 2;
  }

  ${i=>i.$active&&`
    color: #29ba9b;
  `}

  &:hover {
    color: #29ba9b;
  }
`,wb=g.div`
  display: none;
  position: fixed;
  top: 64px;
  right: 16px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  min-width: 200px;
  overflow: hidden;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    display: block;
    ${i=>i.$isOpen&&`
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    `}
  }
`,oc=g.button`
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: white;
  text-align: left;
  color: #475569;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 12px;

  &:hover {
    background: #f8fafc;
    color: #234255;
  }

  &:focus {
    outline: none;
    background: #f8fafc;
    color: #234255;
  }

  &.logout {
    border-top: 1px solid #e2e8f0;
    color: #ef4444;

    &:hover {
      background: #fef2f2;
      color: #dc2626;
    }
  }
`;g.div`
  display: none;
`;g.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;g.button`
  color: #475569;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  padding: 12px 16px;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }

  &:hover {
    background: #f8fafc;
    color: #234255;
  }

  &:focus-visible {
    outline: 2px solid #29ba9b;
    outline-offset: -2px;
    background: #f8fafc;
    color: #234255;
  }

  ${i=>i.$active&&`
    color: #29ba9b;
    background: #f0fdf4;
  `}
`;g(fm)`
  flex-direction: column;
  gap: 8px;
  padding-top: 16px;
  border-top: 1px solid #e2e8f0;
`;const Sb=g.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: none;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid #e2e8f0;
  color: #475569;
  font-weight: 600;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }

  &:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
  }

  &:focus-visible {
    outline: 2px solid #29ba9b;
    outline-offset: 2px;
  }
`,jb=g.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`,Cb=g.span`
  font-size: 15px;
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 1024px) {
    display: none;
  }
`,Eb=g.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  min-width: 200px;
  overflow: hidden;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.2s ease;

  ${i=>i.$isOpen&&`
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  `}
`,sc=g.button`
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: white;
  text-align: left;
  color: #475569;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 12px;

  &:hover {
    background: #f8fafc;
    color: #234255;
  }

  &:focus {
    outline: none;
    background: #f8fafc;
    color: #234255;
  }

  &.logout {
    border-top: 1px solid #e2e8f0;
    color: #ef4444;

    &:hover {
      background: #fef2f2;
      color: #dc2626;
    }
  }
`,zb=g.div`
  position: relative;
`;g.div`
  display: none;
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);

  @media (max-width: 768px) {
    display: block;
    ${i=>i.$isOpen&&`
      opacity: 1;
      visibility: visible;
    `}
  }
`;function kb(){const[i,s]=j.useState(!1),[c,u]=j.useState(0),[f,p]=j.useState(!1),b=aa(),y=Gl(),{user:x,logout:m,isAuthenticated:C}=Ta();j.useEffect(()=>{const N=()=>{const D=window.scrollY;s(D>72&&D>c),u(D)};return window.addEventListener("scroll",N,{passive:!0}),()=>window.removeEventListener("scroll",N)},[c]),j.useEffect(()=>{p(!1)},[b]),j.useEffect(()=>{const N=D=>{f&&!D.target.closest("[data-profile-container]")&&p(!1)};return document.addEventListener("mousedown",N),()=>document.removeEventListener("mousedown",N)},[f]);const T=N=>{y(N),p(!1)},M=()=>{m(),p(!1),y("/")};return o.jsxs(fb,{children:[o.jsxs(hb,{$hidden:i,children:[o.jsxs(pb,{children:[o.jsx(mb,{onClick:()=>T("/"),children:o.jsx("img",{src:dm,alt:"Philippine Pickleball League"})}),o.jsxs(gb,{children:[o.jsxs(xb,{children:[o.jsx(uo,{onClick:()=>T("/forum"),$active:b.pathname==="/forum",children:"Forum"}),o.jsx(uo,{onClick:()=>T("/tournament"),$active:b.pathname==="/tournament",children:"Tournaments"}),o.jsx(uo,{onClick:()=>T("/ranks"),$active:b.pathname==="/ranks",children:"Ranks"}),o.jsx(uo,{onClick:()=>T("/clubs-courts"),$active:b.pathname==="/clubs-courts",children:"Clubs & Courts"})]}),C?o.jsxs(zb,{"data-profile-container":!0,children:[o.jsxs(Sb,{onClick:()=>p(!f),children:[o.jsx(jb,{src:x==null?void 0:x.avatar,alt:x==null?void 0:x.name}),o.jsx(Cb,{children:x==null?void 0:x.name}),o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M6 9l6 6 6-6",strokeLinecap:"round",strokeLinejoin:"round"})})]}),o.jsxs(Eb,{$isOpen:f,children:[o.jsxs(sc,{onClick:()=>T("/profile"),children:[o.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("circle",{cx:"12",cy:"7",r:"4",strokeLinecap:"round",strokeLinejoin:"round"})]}),"My Profile"]}),o.jsxs(sc,{onClick:()=>T("/settings"),children:[o.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("circle",{cx:"12",cy:"12",r:"3",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M12 1v6m0 6v6m11-7h-6m-6 0H1",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Settings"]}),o.jsxs(sc,{className:"logout",onClick:M,children:[o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14l5-5-5-5m5 5H9",strokeLinecap:"round",strokeLinejoin:"round"})}),"Log Out"]})]})]}):o.jsxs(fm,{children:[o.jsx(Mc,{onClick:()=>T("/signin"),children:"Sign In"}),o.jsx(Mc,{onClick:()=>T("/register"),$primary:!0,children:"Register"})]})]}),C?o.jsxs(bb,{$show:!0,onClick:()=>p(!f),"data-profile-container":!0,children:[o.jsx("img",{src:x==null?void 0:x.avatar,alt:x==null?void 0:x.name}),o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:o.jsx("path",{d:"M6 9l6 6 6-6",strokeLinecap:"round",strokeLinejoin:"round"})})]}):o.jsx(vb,{onClick:()=>T("/signin"),children:"Sign In"})]}),o.jsxs(wb,{$isOpen:f,children:[o.jsxs(oc,{onClick:()=>T("/profile"),children:[o.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("circle",{cx:"12",cy:"7",r:"4",strokeLinecap:"round",strokeLinejoin:"round"})]}),"My Profile"]}),o.jsxs(oc,{onClick:()=>T("/settings"),children:[o.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("circle",{cx:"12",cy:"12",r:"3",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M12 1v6m0 6v6m11-7h-6m-6 0H1",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Settings"]}),o.jsxs(oc,{className:"logout",onClick:M,children:[o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14l5-5-5-5m5 5H9",strokeLinecap:"round",strokeLinejoin:"round"})}),"Log Out"]})]})]}),o.jsxs(yb,{children:[o.jsxs(Dl,{onClick:()=>T("/"),$active:b.pathname==="/",children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[o.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("polyline",{points:"9,22 9,12 15,12 15,22",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Home"]}),o.jsxs(Dl,{onClick:()=>T("/forum"),$active:b.pathname==="/forum",children:[o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:o.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",strokeLinecap:"round",strokeLinejoin:"round"})}),"Forum"]}),o.jsxs(Dl,{onClick:()=>T("/tournament"),$active:b.pathname==="/tournament",children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[o.jsx("path",{d:"M6 4v6a6 6 0 0 0 12 0V4",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M6 4h12",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M4 6a2 2 0 0 0 2 2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M20 6a2 2 0 0 1-2 2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M10 16v2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M14 16v2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M8 20h8",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Tournament"]}),o.jsxs(Dl,{onClick:()=>T("/ranks"),$active:b.pathname==="/ranks",children:[o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:o.jsx("polygon",{points:"12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26",strokeLinecap:"round",strokeLinejoin:"round"})}),"Ranks"]}),o.jsxs(Dl,{onClick:()=>T("/clubs-courts"),$active:b.pathname==="/clubs-courts",children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("circle",{cx:"12",cy:"10",r:"3",strokeLinecap:"round",strokeLinejoin:"round"})]}),"C&C"]})]})]})}const Tb=g.footer`
  background: white;
  padding: 40px 24px 20px;
  color: #333;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`,Ab=g.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`,Mb=g.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: #234255;
  letter-spacing: 2px;
  
  img {
    height: 105px;
    width: auto;
    
    @media (max-width: 768px) {
      height: 95px;
    }
  }
  
  span {
    color: #29ba9b;
  }
`,Rb=g.div`
  display: flex;
  gap: 20px;
  margin: 8px 0;

  a {
    color: #333;
    transition: color 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #f5f5f5;

    &:hover {
      color: white;
      background: #29ba9b;
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }
`,Db=g.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: 640px) {
    gap: 12px;
  }

  a {
    color: #333;
    text-decoration: none;
    font-size: 0.85rem;
    transition: color 0.2s ease;

    &:hover {
      color: #29ba9b;
    }
  }
`,Ob=g.div`
  font-size: 0.8rem;
  color: #666;
  text-align: center;
  margin-top: 12px;
`;function _b(){return o.jsx(Tb,{children:o.jsxs(Ab,{children:[o.jsx(Mb,{children:o.jsx("img",{src:dm,alt:"Philippine Pickleball League"})}),o.jsxs(Rb,{children:[o.jsx("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",children:o.jsx("svg",{viewBox:"0 0 320 512",fill:"currentColor",children:o.jsx("path",{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"})})}),o.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:o.jsx("svg",{viewBox:"0 0 448 512",fill:"currentColor",children:o.jsx("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})})}),o.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:o.jsx("svg",{viewBox:"0 0 448 512",fill:"currentColor",children:o.jsx("path",{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"})})}),o.jsx("a",{href:"https://youtube.com",target:"_blank",rel:"noopener noreferrer","aria-label":"YouTube",children:o.jsx("svg",{viewBox:"0 0 576 512",fill:"currentColor",children:o.jsx("path",{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"})})})]}),o.jsxs(Db,{children:[o.jsx(an,{to:"/terms",children:"Terms & Conditions"}),o.jsx(an,{to:"/privacy",children:"Privacy Policy"}),o.jsx(an,{to:"/about",children:"About us"}),o.jsx(an,{to:"/contact",children:"Contact"}),o.jsx(an,{to:"/sponsors",children:"Sponsors"}),o.jsx(an,{to:"/news",children:"News"})]}),o.jsxs(Ob,{children:["© ",new Date().getFullYear()," Philippine Pickleball League"]})]})})}const Nb=g.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: white;
  border-radius: 8px;
  padding: 16px 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  min-width: 300px;
  max-width: 400px;
  z-index: 1000;
  transform: translateX(${i=>i.$isVisible?"0":"400px"});
  transition: transform 0.3s ease;
  
  @media (max-width: 768px) {
    right: 10px;
    bottom: 10px;
    min-width: 280px;
    max-width: calc(100vw - 20px);
  }
`,Lb=g.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Bb=g.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: ${i=>i.$type==="success"?"#dcfce7":"#fef2f2"};
  
  svg {
    width: 20px;
    height: 20px;
    color: ${i=>i.$type==="success"?"#16a34a":"#dc2626"};
  }
`,Ub=g.div`
  flex: 1;
  
  h4 {
    margin: 0 0 2px 0;
    font-size: 14px;
    font-weight: 600;
    color: #1f2937;
  }
  
  p {
    margin: 0;
    font-size: 13px;
    color: #6b7280;
  }
`,Hb=g.button`
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  color: #9ca3af;
  flex-shrink: 0;
  
  &:hover {
    color: #6b7280;
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`,Yb=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M20 6L9 17l-5-5"})}),$b=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14l5-5-5-5m5 5H9"})}),qb=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M18 6L6 18M6 6l12 12"})}),Gb=({message:i,type:s="success",isVisible:c,onClose:u})=>{j.useEffect(()=>{if(c){const b=setTimeout(()=>{u()},3e3);return()=>clearTimeout(b)}},[c,u]);const f=()=>s==="success"||i.includes("Welcome back")?o.jsx(Yb,{}):o.jsx($b,{}),p=i.includes("logged out")||s==="info";return o.jsx(Nb,{$isVisible:c,children:o.jsxs(Lb,{children:[o.jsx(Bb,{$type:s,children:f()}),o.jsx(Ub,{children:p?o.jsx("h4",{children:i}):o.jsxs(o.Fragment,{children:[o.jsx("h4",{children:"Successfully Logged In"}),o.jsx("p",{children:i})]})}),o.jsx(Hb,{onClick:u,children:o.jsx(qb,{})})]})})},Vb=(i={})=>{const[s,c]=j.useState(!1),[u,f]=j.useState(!1),p=j.useRef(null);return j.useEffect(()=>{const b=new IntersectionObserver(([y])=>{y.isIntersecting&&!u&&(c(!0),f(!0))},i);return p.current&&b.observe(p.current),()=>{p.current&&b.unobserve(p.current)}},[p,i,u]),[p,s]};g.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.15;
  z-index: 0;
`;const Xb=g.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 16px;
  background: linear-gradient(-45deg, #234255, #29ba9b, #1a2e3b, #a3e635);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 74vh;
    padding: 80px 16px 120px;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.1;
    z-index: 0;
  }
`,Zb=g.div`
  max-width: 800px;
  position: relative;
  z-index: 1;
  animation: fadeInUp 1s ease;
  width: 100%;
  padding: 0 16px;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,Qb=g.h1`
  font-size: clamp(2rem, 8vw, 4.5rem);
  font-weight: 800;
  color: white;
  margin-bottom: 1.5rem;
  letter-spacing: -1px;
  line-height: 1.1;
  
  span {
    color: #a3e635;
  }

  @media (max-width: 768px) {
    font-size: clamp(2rem, 6vw, 3rem);
    margin-bottom: 1rem;
  }
`,Kb=g.p`
  font-size: clamp(1rem, 4vw, 1.25rem);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2.5rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
    line-height: 1.5;
  }
`,Jb=g.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    gap: 1.25rem;
  }
`,Wb=g(an)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: ${i=>i.$fullWidth?"100%":"auto"};
  max-width: 260px;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent 0%,
      rgba(163, 230, 53, 0.2) 50%,
      transparent 100%
    );
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem 1.75rem;
    font-size: 0.9375rem;
    border-radius: 8px;
    max-width: 240px;
  }
  
  &:hover {
    background: rgba(163, 230, 53, 0.2);
    border-color: rgba(163, 230, 53, 0.4);
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(163, 230, 53, 0.2);
    color: #e2ffc7;
    
    &::before {
      transform: translateX(100%);
    }
  }

  &:active {
    transform: translateY(0);
    background: rgba(163, 230, 53, 0.25);
    box-shadow: 0 4px 20px rgba(163, 230, 53, 0.15);
  }
`;g.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  width: 100%;
  margin-top: 0.75rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;const hm=g.section`
  padding: 80px 24px;
  background: ${i=>i.$dark?"#1a2e3b":"white"};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 64px 16px;
  }
`,ip=g.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;g.h2`
  font-size: clamp(1.75rem, 6vw, 3rem);
  font-weight: 700;
  color: ${i=>i.$dark?"white":"#234255"};
  margin-bottom: 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;const Pb=g.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 0;
  opacity: ${i=>i.$isVisible?1:0};
  transition: opacity 0.4s ease-out;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,co=g.div`
  background: ${i=>i.$dark?"#234255":"white"};
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  cursor: ${i=>i.onClick?"pointer":"default"};
  opacity: 0;
  transform: translateY(20px);
  animation: ${i=>i.$isVisible?"slideIn 0.4s cubic-bezier(0.2, 0, 0, 1) forwards":"none"};
  animation-delay: ${i=>i.$index*.08}s;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 1024px) {
    padding: 1.25rem;
  }

  &:hover {
    transform: ${i=>i.$isVisible?"translateY(-4px)":"translateY(20px)"};
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }

  svg {
    width: 32px;
    height: 32px;
    margin-bottom: 1rem;
    color: #29ba9b;
    opacity: 0;
    transform: scale(0.95);
    animation: ${i=>i.$isVisible?"iconFade 0.3s ease-out forwards":"none"};
    animation-delay: ${i=>i.$index*.08+.15}s;

    @keyframes iconFade {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    @media (max-width: 1024px) {
      width: 28px;
      height: 28px;
      margin-bottom: 0.75rem;
    }
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: ${i=>i.$dark?"white":"#234255"};
    margin-bottom: 0.5rem;
    opacity: 0;
    transform: translateY(8px);
    animation: ${i=>i.$isVisible?"titleSlide 0.3s ease-out forwards":"none"};
    animation-delay: ${i=>i.$index*.08+.2}s;

    @keyframes titleSlide {
      from {
        opacity: 0;
        transform: translateY(8px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 1024px) {
      font-size: 1rem;
      margin-bottom: 0.375rem;
    }
  }

  p {
    color: ${i=>i.$dark?"rgba(255, 255, 255, 0.8)":"#64748b"};
    line-height: 1.4;
    font-size: 0.875rem;
    opacity: 0;
    animation: ${i=>i.$isVisible?"fadeIn 0.3s ease-out forwards":"none"};
    animation-delay: ${i=>i.$index*.08+.25}s;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @media (max-width: 1024px) {
      font-size: 0.8125rem;
    }
  }
`;g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 2.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;g.h3`
  font-size: clamp(1.75rem, 5vw, 3rem);
  font-weight: 700;
  color: #29ba9b;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
`;g.p`
  color: ${i=>i.$dark?"rgba(255, 255, 255, 0.8)":"#64748b"};
  font-size: 1rem;
`;const Fb=g(hm)`
  position: relative;
  overflow: hidden;
  color: white;
  padding: 120px 24px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('https://images.unsplash.com/photo-1737476990369-9cf356085909?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-size: cover;
    background-position: center;
    filter: brightness(0.3);
    z-index: 0;
    
    @media (max-width: 768px) {
      background-image: url('https://images.unsplash.com/photo-1737476990369-9cf356085909?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    }
  }

  @media (max-width: 768px) {
    padding: 100px 24px;
  }

  @media (max-width: 480px) {
    padding: 80px 20px;
  }
`,Ib=g.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 16px;
`,ev=g.div`
  max-width: 800px;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`,tv=g.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  background: linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  span {
    background: linear-gradient(135deg, #29ba9b 0%, #a3e635 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`,nv=g.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  line-height: 1.8;
  margin: 0 auto;
  max-width: 700px;
`,av=g.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  div {
    text-align: center;
    
    h3 {
      font-size: clamp(1.75rem, 4vw, 2.5rem);
      font-weight: 700;
      color: #29ba9b;
      margin-bottom: 0.5rem;
    }
    
    p {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.875rem;
    }
  }
`,iv=g.div`
  position: fixed;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  z-index: 10;
  cursor: pointer;
  transition: opacity 0.3s ease;
  opacity: ${i=>i.$show?1:0};
  visibility: ${i=>i.$show?"visible":"hidden"};
  
  .scroll-text {
    writing-mode: vertical-lr;
    text-orientation: mixed;
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.875rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 8px;
    animation: pulse 2s infinite;
  }

  .arrows {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .arrow {
    width: 12px;
    height: 12px;
    border-right: 2px solid rgba(255, 255, 255, 0.6);
    border-bottom: 2px solid rgba(255, 255, 255, 0.6);
    transform: rotate(45deg);
    animation: float 2s infinite;
    margin: 0;

    &:nth-child(2) {
      animation-delay: 0.2s;
      opacity: 0.6;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
      opacity: 0.2;
    }
  }

  @keyframes float {
    0% {
      transform: rotate(45deg) translate(0, 0);
      opacity: 0.6;
    }
    50% {
      transform: rotate(45deg) translate(4px, 4px);
      opacity: 0.2;
    }
    100% {
      transform: rotate(45deg) translate(0, 0);
      opacity: 0.6;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }

  @media (max-width: 1024px) {
    right: 24px;
  }

  @media (max-width: 768px) {
    right: 16px;
    
    .scroll-text {
      font-size: 0.75rem;
    }

    .arrow {
      width: 10px;
      height: 10px;
    }
  }

  @media (max-width: 480px) {
    position: absolute;
    right: auto;
    top: auto;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: column;
    gap: 8px;
    
    .scroll-text {
      writing-mode: horizontal-tb;
      text-orientation: mixed;
      font-size: 0.75rem;
      margin-bottom: 0;
    }

    .arrows {
      gap: 2px;
    }

    .arrow {
      width: 8px;
      height: 8px;
    }
  }
`;function lv(){const i=Gl(),{user:s,isAuthenticated:c}=Ta(),[u,f]=j.useState({activePlayers:0,tournamentsHosted:0,playerSatisfaction:0,clubPartners:0}),[p,b]=j.useState(!0),[y,x]=Vb({threshold:.2});j.useEffect(()=>{window.scrollTo(0,0)},[]),j.useEffect(()=>{const T=document.querySelector("footer");if(!T)return;const M=new IntersectionObserver(([N])=>{N.isIntersecting&&b(!1)},{threshold:.1});return M.observe(T),()=>{T&&M.unobserve(T)}},[]);const m=T=>{i(T)},C=()=>{window.scrollTo({top:window.innerHeight,behavior:"smooth"})};return j.useEffect(()=>{(async()=>{try{f({activePlayers:0,tournamentsHosted:0,playerSatisfaction:0,clubPartners:0})}catch(M){console.error("Error fetching stats:",M)}})()},[]),o.jsx(o.Fragment,{children:o.jsxs("main",{children:[o.jsxs(Xb,{children:[o.jsxs(Zb,{children:[o.jsx(Qb,{children:c?o.jsxs(o.Fragment,{children:["Welcome back, ",o.jsx("span",{children:s==null?void 0:s.firstName}),"!"]}):o.jsxs(o.Fragment,{children:["Philippine ",o.jsx("span",{children:"Pickleball"})," League"]})}),o.jsx(Kb,{children:c?"Ready to continue your pickleball journey? Discover upcoming tournaments in your area, connect with fellow players in our active community forum, track your ranking progress, and find the best courts and clubs near you. Your next great match is just a click away!":"Join the fastest growing pickleball community in the Philippines. Connect with players, join tournaments, and track your progress in a vibrant sports community."}),!c&&o.jsx(Jb,{children:o.jsx(Wb,{to:"/register",$primary:!0,$fullWidth:!0,children:"Get Started"})})]}),o.jsxs(iv,{onClick:C,$show:p,children:[o.jsx("span",{className:"scroll-text",children:"Scroll Down"}),o.jsxs("div",{className:"arrows",children:[o.jsx("div",{className:"arrow"}),o.jsx("div",{className:"arrow"}),o.jsx("div",{className:"arrow"})]})]})]}),o.jsx(hm,{children:o.jsx(ip,{children:o.jsxs(Pb,{ref:y,$isVisible:x,children:[o.jsxs(co,{onClick:()=>m("/forum"),$index:0,$isVisible:x,children:[o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"})}),o.jsx("h3",{children:"Forum"}),o.jsx("p",{children:"Join discussions and connect with the pickleball community"})]}),o.jsxs(co,{onClick:()=>m("/tournament"),$index:1,$isVisible:x,children:[o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})}),o.jsx("h3",{children:"Tournaments"}),o.jsx("p",{children:"Find and join upcoming pickleball tournaments"})]}),o.jsxs(co,{onClick:()=>m("/ranks"),$index:2,$isVisible:x,children:[o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),o.jsx("h3",{children:"Ranks"}),o.jsx("p",{children:"Check player rankings and track your progress"})]}),o.jsxs(co,{onClick:()=>m("/clubs-courts"),$index:3,$isVisible:x,children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),o.jsx("path",{d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),o.jsx("h3",{children:"Clubs & Courts"}),o.jsx("p",{children:"Find nearby pickleball courts and local clubs"})]})]})})}),o.jsx(Fb,{children:o.jsx(ip,{children:o.jsxs(Ib,{children:[o.jsxs(ev,{children:[o.jsxs(tv,{children:["About ",o.jsx("span",{children:"Philippine Pickleball League"})]}),o.jsx(nv,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),o.jsxs(av,{children:[o.jsxs("div",{children:[o.jsx("h3",{children:u.activePlayers>0?`${u.activePlayers}+`:"0"}),o.jsx("p",{children:"Active Players"})]}),o.jsxs("div",{children:[o.jsx("h3",{children:u.tournamentsHosted>0?`${u.tournamentsHosted}+`:"0"}),o.jsx("p",{children:"Tournaments Hosted"})]}),o.jsxs("div",{children:[o.jsx("h3",{children:u.playerSatisfaction>0?`${u.playerSatisfaction}%`:"0%"}),o.jsx("p",{children:"Player Satisfaction"})]}),o.jsxs("div",{children:[o.jsx("h3",{children:u.clubPartners>0?`${u.clubPartners}+`:"0"}),o.jsx("p",{children:"Club Partners"})]})]})]})})})]})})}const rv=g.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,ov=g.div`
  background: white;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  padding: 32px;

  h2 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;
    color: #262626;
  }

  p {
    color: #8e8e8e;
    margin-bottom: 24px;
    font-size: 14px;
    line-height: 1.4;
  }
`,lp=g(an)`
  display: block;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 8px;
  transition: all 0.2s ease;

  ${i=>i.$primary?`
    background: #29ba9b;
    color: white;
    
    &:hover {
      background: #234255;
    }
  `:`
    color: #234255;
    border: 1px solid #234255;
    
    &:hover {
      background: #234255;
      color: white;
    }
  `}
`,To=({isOpen:i,onClose:s,title:c,message:u})=>i?o.jsx(rv,{onClick:s,children:o.jsxs(ov,{onClick:f=>f.stopPropagation(),children:[o.jsx("h2",{children:c||"Sign in Required"}),o.jsx("p",{children:u||"Please sign in or register to continue"}),o.jsx(lp,{to:"/signin",children:"Sign In"}),o.jsx(lp,{to:"/register",$primary:!0,children:"Register"})]})}):null,sv=g.div`
  padding: 70px 16px 24px;
  animation: fadeIn 0.3s ease;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 60px 0px 16px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,uv=g.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  padding-top: 0px;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    width: 100%;
    max-width: 100%;
  }
`,cv=g.div`
  width: 100%;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  margin-bottom: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  @media (max-width: 768px) {
    border-radius: 12px;
    margin-bottom: 16px;
    width: 96%;
    margin-left: auto;
    margin-right: auto;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  }
`,dv=g.button`
  width: 100%;
  background: none;
  border: none;
  padding: 20px;
  text-align: left;
  color: #64748b;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.2s ease;
  outline: none;

  @media (max-width: 768px) {
    padding: 16px;
    gap: 12px;
  }

  &:hover {
    color: #29ba9b;
  }

  &:focus {
    outline: none;
    border: none;
  }

  &:active {
    outline: none;
    border: none;
  }
`,fv=g.div`
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  background: #f1f5f9;
  border: 2px solid #e2e8f0;

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    min-width: 36px;
    min-height: 36px;
  }
`,hv=g.div`
  border-top: 1px solid #e2e8f0;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 16px;
    gap: 12px;
    flex-wrap: wrap;
  }
`,pv=g.button`
  background: #f8fafc;
  border: none;
  padding: 8px 16px;
  color: #64748b;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 20px;
  transition: all 0.2s ease;
  outline: none;

  @media (max-width: 768px) {
    padding: 10px 14px;
    font-size: 13px;
    border-radius: 10px;
    min-height: 36px;
    font-weight: 500;
    background: #f1f5f9;
  }

  svg {
    width: 20px;
    height: 20px;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;

    @media (max-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }

  &:hover {
    color: #29ba9b;
    background: #f1f5f9;
  }

  &:focus {
    outline: none;
    border: none;
  }

  &:active {
    outline: none;
    border: none;
  }
`,mv=g.article`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  margin-bottom: 24px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  @media (max-width: 768px) {
    border-radius: 12px;
    margin-bottom: 16px;
    width: 96%;
    margin-left: auto;
    margin-right: auto;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  }
`,gv=g.div`
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    padding: 14px 16px;
    gap: 12px;
  }
`,xv=g.div`
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  background: #29ba9b;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: white;
  font-weight: 600;
  border: 2px solid #e2e8f0;

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    min-width: 36px;
    min-height: 36px;
    font-size: 13px;
  }
`,bv=g.div`
  flex: 1;
  text-align: left;
  
  h3 {
    margin: 0;
    font-size: 15px;
    font-weight: 600;
    color: #1e293b;
    text-align: left;
  }
  
  span {
    font-size: 13px;
    color: #64748b;
    margin-top: 2px;
    display: block;
    text-align: left;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 14px;
    }
    span {
      font-size: 12px;
    }
  }
`,vv=g.div`
  padding: 0 20px 20px;
  
  @media (max-width: 768px) {
    padding: 0 16px 18px;
  }
  
  p {
    margin: 0 0 16px;
    font-size: 15px;
    line-height: 1.6;
    color: #334155;

    @media (max-width: 768px) {
      font-size: 14px;
      margin: 0 0 14px;
    }
  }
`,yv=g.div`
  display: grid;
  gap: 4px;
  border-radius: 8px;
  overflow: hidden;
  margin: 0 20px;
  
  @media (max-width: 768px) {
    margin: 0;
    gap: 3px;
  }
  
  /* Single image - square aspect ratio */
  &.single-image {
    img {
      width: 100%;
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 8px;
    }
  }
  
  /* Two images - side by side squares */
  &.two-images-horizontal {
    grid-template-columns: 1fr 1fr;
    
    img {
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 8px;
    }
  }
  
  /* Three images - portrait left + two stacked squares right */
  &.three-images-left {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    
    img:first-child {
      grid-row: 1 / 3;
      aspect-ratio: 0.5;
      object-fit: cover;
      border-radius: 8px;
    }
    
    img:nth-child(2),
    img:nth-child(3) {
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 8px;
    }
  }
  
  /* Four images - 2x2 grid of squares */
  &.four-images {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    
    img {
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 8px;
    }
  }
  
  /* Four+ images with overlay - 2x2 grid with "+X" overlay on last image */
  &.four-images-with-overlay {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    
    img {
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 8px;
    }
    
    .image-container {
      position: relative;
      aspect-ratio: 1;
      border-radius: 8px;
      overflow: hidden;
  
  img {
    width: 100%;
        height: 100%;
        border-radius: 0;
      }
      
      &.overlay {
    &::after {
      content: '+' attr(data-remaining);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
          font-size: 28px;
          font-weight: 700;
      backdrop-filter: blur(2px);
          border-radius: 8px;
          
          @media (max-width: 768px) {
            font-size: 24px;
          }
        }
      }
    }
  }
  
  img {
    width: 100%;
    transition: transform 0.3s ease;
    cursor: pointer;

    @media (hover: hover) {
      &:hover {
        transform: scale(1.02);
      }
    }
  }
`,wv=g.div`
  padding: 8px 20px;
  display: flex;
  gap: 20px;
  border-top: 1px solid #e2e8f0;
  margin-top: 16px;

  @media (max-width: 768px) {
    padding: 6px 16px;
    gap: 14px;
  }

  button {
    background: none;
    border: none;
    outline: none;
    padding: 8px 12px;
    color: #64748b;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 20px;
    transition: color 0.2s ease;

    @media (max-width: 768px) {
      padding: 10px;
      font-size: 13px;
      gap: 8px;
      flex: 1;
      justify-content: center;
    }

    &:hover {
      color: #29ba9b;
    }

    &:focus {
      outline: none;
      background: none;
    }

    &:active {
      background: none;
    }
  }
`;g.div`
  font-weight: 600;
  font-size: 14px;
  color: #262626;
  padding: 0 0 8px;
`;g.div`
  padding: 0 16px 8px;
  font-size: 14px;
  line-height: 1.4;
  color: #262626;

  span {
    font-weight: 600;
    margin-right: 6px;
  }
`;g.div`
  padding: 0 16px 16px;
  font-size: 10px;
  color: #8e8e8e;
  text-transform: uppercase;
`;const Sv=g.div`
  border-top: 1px solid #e2e8f0;
`,jv=g.div`
  padding: 8px 20px;
  display: flex;
  gap: 12px;
  align-items: center;
  background: white;

  @media (max-width: 768px) {
    padding: 8px 16px;
    gap: 10px;
  }
`,Cv=g.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 8px 0;
  font-size: 14px;
  font-family: inherit;
  background: transparent;

  &::placeholder {
    color: #94a3b8;
  }
`,Ev=g.button`
  background: none;
  color: #29ba9b;
  border: none;
  padding: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:disabled {
    color: #94a3b8;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    transform: scale(1.1);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,zv=g.div`
  background: white;
`,kv=g.div`
  padding: 6px 20px;
  display: flex;
  gap: 12px;
  align-items: flex-start;

  @media (max-width: 768px) {
    padding: 6px 16px;
    gap: 10px;
  }

  &:last-child {
    padding-bottom: 12px;
  }
`,rp=g.div`
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  border-radius: 50%;
  background: #29ba9b;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: white;
  font-weight: 600;
  flex-shrink: 0;
  margin-top: 2px;
`,Tv=g.div`
  flex: 1;
  line-height: 1.3;
  
  .comment-content {
    font-size: 14px;
    color: #000;
    margin: 0 0 4px 0;
    text-align: left;
    
    .comment-author {
      font-weight: 600;
      margin-right: 6px;
    }
    
    .comment-text {
      font-weight: 400;
    }
  }
  
  .comment-meta {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 4px;
    
    .comment-time {
      font-size: 12px;
      color: #8e8e8e;
      font-weight: 400;
    }
    
    .comment-reply {
      font-size: 12px;
      color: #8e8e8e;
      font-weight: 600;
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      
      &:hover {
        color: #262626;
      }
    }
  }
`,Av=g.div`
  padding-left: 36px;
  margin-top: 4px;
  margin-bottom: 8px;
  text-align: left;
  width: 100%;
  
  .view-replies {
    margin-top: 8px;
    text-align: left;
    
    button {
      background: none !important;
      border: none;
      font-size: 12px;
      color: #8e8e8e;
      font-weight: 400;
      padding: 0;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      outline: none;
      justify-content: flex-start;
      
      &:hover {
        color: #262626;
        background: none !important;
      }
      
      &:focus {
        outline: none;
        background: none !important;
      }
      
      &:active {
        background: none !important;
      }
      
      &::before {
        content: '';
        width: 20px;
        height: 1px;
        background: #8e8e8e;
        flex-shrink: 0;
      }
    }
  }
  
  @media (max-width: 768px) {
    padding-left: 28px;
    margin-bottom: 6px;
  }
`;g.button`
  width: 100%;
  padding: 12px;
  background: transparent;
  border: none;
  color: #64748b;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #29ba9b;
    background: #f1f5f9;
  }
`;const op=g.div`
  margin-left: 36px;
  border-left: 1px solid #e2e8f0;
  padding-left: 12px;
  margin-bottom: 12px;
  
  @media (max-width: 768px) {
    margin-left: 28px;
    padding-left: 8px;
    margin-bottom: 10px;
  }
`,Mv=g.div`
  padding: 8px 0;
  display: flex;
  gap: 8px;
  align-items: center;
  background: white;

  @media (max-width: 768px) {
    gap: 6px;
  }
`,Rv=g.input`
  flex: 1;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 6px 12px;
  font-size: 13px;
  font-family: inherit;
  outline: none;
  transition: all 0.2s ease;

  &:focus {
    border-color: #29ba9b;
    box-shadow: 0 0 0 2px rgba(41, 186, 155, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
  }
`,Dv=g.button`
  background: none;
  color: #29ba9b;
  border: none;
  padding: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:disabled {
    color: #94a3b8;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    transform: scale(1.1);
  }

  svg {
    width: 14px;
    height: 14px;
  }
`,Ov=g.div`
  padding: 4px 0;
  display: flex;
  gap: 8px;
  align-items: flex-start;

  @media (max-width: 768px) {
    gap: 6px;
  }
`,sp=g.div`
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;
  border-radius: 50%;
  background: #29ba9b;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  color: white;
  font-weight: 600;
  flex-shrink: 0;
  margin-top: 2px;
`,_v=g.div`
  flex: 1;
  line-height: 1.3;
  
  .reply-content {
    font-size: 13px;
    color: #000;
    margin: 0 0 2px 0;
    text-align: left;
    
    .reply-author {
      font-weight: 600;
      margin-right: 6px;
    }
    
    .reply-text {
      font-weight: 400;
    }
  }
  
  .reply-meta {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
    
    .reply-time {
      font-size: 11px;
      color: #8e8e8e;
      font-weight: 400;
    }
    
    .reply-reply {
      font-size: 11px;
      color: #8e8e8e;
      font-weight: 600;
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      
      &:hover {
        color: #262626;
      }
    }
  }
`;g.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;g.div`
  flex: 1;
  font-size: 14px;
  line-height: 1.4;

  span {
    font-weight: 600;
    margin-right: 6px;
  }
`;g.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;g.div`
  background: white;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  padding: 32px;

  h2 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;
    color: #262626;
  }

  p {
    color: #8e8e8e;
    margin-bottom: 24px;
    font-size: 14px;
    line-height: 1.4;
  }
`;g.div`
  padding: 12px 16px;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;g.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #262626;
`;const Nv=g.button`
  position: absolute;
  top: 24px;
  right: 24px;
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: white;
  transition: all 0.2s ease;
  z-index: 1200;
  opacity: 0.8;

  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }

  svg {
    width: 40px;
    height: 40px;
    stroke: currentColor;
    stroke-width: 2;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  }

  @media (max-width: 768px) {
    top: 16px;
    right: 16px;
    
    svg {
      width: 32px;
      height: 32px;
    }
  }
`;g.div`
  padding: 16px;
`;const Lv=g.textarea`
  width: 100%;
  min-height: 150px;
  padding: 12px;
  border: none;
  border-radius: 4px;
  resize: none;
  font-size: 15px;
  line-height: 1.6;
  color: #334155;
  font-family: inherit;
  margin-bottom: 0px;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: #94a3b8;
  }
`;g.div`
  border: 2px dashed #dbdbdb;
  border-radius: 4px;
  padding: 32px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #29ba9b;
    color: #29ba9b;
  }
`;const Bv=g.button`
  width: ${i=>i.width||"100%"};
  padding: ${i=>i.padding||"12px"};
  background: #29ba9b;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  margin-top: ${i=>i.marginTop||"16px"};
  transition: all 0.2s ease;
  
  @media (max-width: 768px) {
    padding: 12px 16px;
    border-radius: 10px;
    min-height: 40px;
    font-size: 14px;
    font-weight: 600;
    box-shadow: 0 2px 4px rgba(41, 186, 155, 0.2);
  }
  
  &:hover {
    background: #234255;
    transform: translateY(-1px);
    
    @media (max-width: 768px) {
      transform: none;
      background: #26a085;
    }
  }
  
  &:active {
    transform: translateY(0);
    
    @media (max-width: 768px) {
      transform: scale(0.98);
    }
  }
  
  &:disabled {
    background: #dbdbdb;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,Uv=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: #64748b;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  svg {
    animation: spin 1s linear infinite;
    width: 24px;
    height: 24px;
  }
`,Hv=g.div`
  text-align: center;
  padding: 2rem;
  color: #ef4444;
  background: #fef2f2;
  border-radius: 8px;
  margin: 1rem 0;
`,Yv=g.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1100;
  opacity: 0;
  animation: fadeIn 0.2s ease forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`,$v=g.div`
  position: relative;
  width: 90%;
  max-width: 1200px;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    touch-action: none;
  }
`,qv=g.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  width: 100%;
  height: 100%;
  transform: translateX(${i=>i.$offset}px);
  transition: transform ${i=>i.$isAnimating?"0.3s":"0s"} ease-out;
`,Gv=g.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
`,Vv=g.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  user-select: none;
  -webkit-user-drag: none;
`,up=g.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.15);
  border: none;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(4px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-50%) scale(1.05);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    transform: translateY(-50%) scale(1);
  }

  ${i=>i.$left?"left: 24px;":"right: 24px;"}

  @media (max-width: 768px) {
    display: none;
  }
`,Xv=g.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  backdrop-filter: blur(4px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 1200;

  @media (max-width: 768px) {
    bottom: 16px;
    font-size: 12px;
    padding: 6px 12px;
  }
`,Zv=g.div`
  margin-top: 16px;
  padding: 16px 0;

  @media (max-width: 768px) {
    padding: 12px 0;
    margin-top: 12px;
  }
  
  /* Use the same smart layout as posts */
  .preview-grid {
    display: grid;
    gap: 8px;
    border-radius: 8px;
    overflow: hidden;
    
    /* Single image */
    &.single-image {
      .preview-image {
        aspect-ratio: 1;
        border-radius: 8px;
      }
    }
    
    /* Two images */
    &.two-images-horizontal {
      grid-template-columns: 1fr 1fr;
      .preview-image {
        aspect-ratio: 1;
        border-radius: 8px;
      }
    }
    
    /* Three images */
    &.three-images-left {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      
      .preview-image:first-child {
        grid-row: 1 / 3;
        aspect-ratio: 0.5;
        border-radius: 8px;
      }
      
      .preview-image:nth-child(2),
      .preview-image:nth-child(3) {
        aspect-ratio: 1;
        border-radius: 8px;
      }
    }
    
    /* Four images */
    &.four-images {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      
      .preview-image {
        aspect-ratio: 1;
        border-radius: 8px;
      }
    }
    
    /* Four+ images with overlay */
    &.four-images-with-overlay {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      
      .preview-image {
        aspect-ratio: 1;
        border-radius: 8px;
        
        &.overlay-preview {
          .overlay-indicator {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            font-weight: 700;
            backdrop-filter: blur(2px);
            border-radius: 8px;
            
            @media (max-width: 768px) {
              font-size: 20px;
            }
          }
        }
      }
    }
  }
`,uc=g.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background: #e2e8f0;

  &.preview-image {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`,cc=g.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(255, 255, 255, 0.95);
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  min-width: 28px;
  min-height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #64748b;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(4px);
  padding: 0;
  outline: none;

  &:hover {
    background: rgba(255, 255, 255, 1);
    color: #ef4444;
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }

  svg {
    width: 14px;
    height: 14px;
    stroke-width: 2.5;
    flex-shrink: 0;
  }
`;function Qv({filled:i=!1}){return o.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:i?"currentColor":"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",strokeLinecap:"round",strokeLinejoin:"round"})})}function Kv(){return o.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",strokeLinecap:"round",strokeLinejoin:"round"})})}function Jv(){return o.jsxs("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),o.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),o.jsx("path",{d:"M21 15l-5-5L5 21"})]})}function fo(){return o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:o.jsx("path",{d:"M18 6L6 18M6 6l12 12",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})})}function Wv(){return o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",opacity:"0.2"}),o.jsx("path",{d:"M12 2C6.47715 2 2 6.47715 2 12C2 14.7505 3.14229 17.2432 4.98959 19"})]})}function Pv(){return o.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:o.jsx("path",{d:"M15 18l-6-6 6-6",strokeLinecap:"round",strokeLinejoin:"round"})})}function Fv(){return o.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:o.jsx("path",{d:"M9 18l6-6-6-6",strokeLinecap:"round",strokeLinejoin:"round"})})}function cp(){return o.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",stroke:"none",children:o.jsx("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"})})}function Iv(){const{user:i,isAuthenticated:s}=Ta(),[c,u]=j.useState([]),[f,p]=j.useState(!0),[b,y]=j.useState(null),[x,m]=j.useState(!1),[C,T]=j.useState(!1),[M,N]=j.useState(""),[D,G]=j.useState([]),[V,z]=j.useState(!1),[k,Y]=j.useState({}),[X,Q]=j.useState({}),[Z,K]=j.useState({}),[xe,ue]=j.useState({}),[F,fe]=j.useState({}),[Ce,ft]=j.useState({}),[pt,Ge]=j.useState({}),[L,W]=j.useState({}),[le,me]=j.useState(1),[w,q]=j.useState(!0),[J,P]=j.useState(!1),[ee,ce]=j.useState(0),[ne,Ve]=j.useState([]),[we,We]=j.useState(null),[Jt,St]=j.useState(null),[mt,qt]=j.useState(0),[Mi,Aa]=j.useState(!1),Zl=j.useRef(null),jt=50;j.useEffect(()=>{(async()=>{try{p(!0),y(null),await new Promise(ie=>setTimeout(ie,1e3)),u(Da),q(!1)}catch{y("Failed to load posts. Please try again later.")}finally{p(!1)}})()},[le]);const Ql=async(U,ie,je)=>{if(U.preventDefault(),!s){m(!0);return}try{switch(ie){case"like":u(I=>I.map(be=>be.id===je?{...be,isLiked:!be.isLiked,likeCount:be.isLiked?be.likeCount-1:be.likeCount+1}:be));break;case"comment":Y(I=>({...I,[je]:!I[je]})),X[je]||Q(I=>({...I,[je]:""})),!k[je]&&!Z[je]&&K(I=>({...I,[je]:[]}));break}}catch(I){console.error("Error handling interaction:",I)}},Ri=async U=>{var je;const ie=(je=X[U])==null?void 0:je.trim();if(!(!ie||!s))try{ue(be=>({...be,[U]:!0}));const I={id:Date.now().toString(),author:{id:i.id,name:i.name,initials:i.name.split(" ").map(be=>be[0]).join("").toUpperCase()},content:ie,createdAt:new Date().toISOString()};K(be=>({...be,[U]:[I,...be[U]||[]]})),u(be=>be.map(Te=>Te.id===U?{...Te,commentCount:Te.commentCount+1}:Te)),Q(be=>({...be,[U]:""}))}catch(I){console.error("Error submitting comment:",I)}finally{ue(I=>({...I,[U]:!1}))}},Di=async(U,ie)=>{var I;const je=(I=Ce[U])==null?void 0:I.trim();if(!(!je||!s))try{W(Te=>({...Te,[U]:!0}));const be={id:Date.now().toString(),author:{id:i.id,name:i.name,initials:i.name.split(" ").map(Te=>Te[0]).join("").toUpperCase()},content:je,createdAt:new Date().toISOString(),parentId:U};K(Te=>({...Te,[ie]:Te[ie].map(Ne=>Ne.id===U?{...Ne,replies:[...Ne.replies||[],be]}:Ne)})),ft(Te=>({...Te,[U]:""})),Ge(Te=>({...Te,[U]:!1})),fe(Te=>({...Te,[U]:!0}))}catch(be){console.error("Error submitting reply:",be)}finally{W(be=>({...be,[U]:!1}))}},ia=U=>{Ge(ie=>({...ie,[U]:!ie[U]})),Ce[U]||ft(ie=>({...ie,[U]:""}))},Bo=async U=>{if(U.preventDefault(),!s){m(!0);return}T(!C)},Kl=U=>{if(U.preventDefault(),!s){m(!0);return}document.getElementById("imageInput").click()},Uo=async()=>{if(!(!M.trim()&&D.length===0))try{z(!0);const U={id:Date.now().toString(),author:{id:i.id,username:`${i.firstName} ${i.lastName}`,initials:`${i.firstName[0]}${i.lastName[0]}`.toUpperCase(),avatarColor:"#29ba9b"},content:M.trim(),images:D.map((ie,je)=>({id:`${Date.now()}_${je}`,url:ie.url,alt:`User uploaded image ${je+1}`})),createdAt:new Date().toISOString(),likeCount:0,commentCount:0,isLiked:!1};u(ie=>[U,...ie]),T(!1),N(""),G([])}catch(U){console.error("Error creating post:",U)}finally{z(!1)}},Oi=U=>{G(ie=>ie.filter((je,I)=>I!==U))},Wt=U=>{const ie=U.length;return ie===1?"single-image":ie===2?"two-images-horizontal":ie===3?"three-images-left":ie===4?"four-images":ie>4?"four-images-with-overlay":"single-image"},it=(U,ie)=>{Ve(U),ce(ie),P(!0),document.body.style.overflow="hidden"},Gt=()=>{P(!1),Ve([]),ce(0),document.body.style.overflow="auto"},lt=()=>{var U;return((U=Zl.current)==null?void 0:U.clientWidth)||0},Ma=()=>-ee*lt();j.useEffect(()=>{J&&qt(Ma())},[J,ee]);const Ho=U=>{St(null),We(U.touches[0].clientX),Aa(!1)},Yo=U=>{St(U.touches[0].clientX);const je=U.touches[0].clientX-we,I=Ma();ee===0&&je>0||ee===ne.length-1&&je<0?qt(I+je*.2):qt(I+je)},Ra=()=>{if(!we||!Jt)return;const U=we-Jt,ie=U>jt,je=U<-jt;Aa(!0),ie&&ee<ne.length-1?la():je&&ee>0?Pt():qt(Ma()),We(null),St(null)},la=()=>{Aa(!0),ce(U=>{const ie=U===ne.length-1?U:U+1;return qt(-ie*lt()),ie})},Pt=()=>{Aa(!0),ce(U=>{const ie=U===0?U:U-1;return qt(-ie*lt()),ie})};j.useEffect(()=>{const U=()=>{qt(Ma())};return window.addEventListener("resize",U),()=>window.removeEventListener("resize",U)},[ee]);const Da=[{id:"1",author:{id:"101",username:"Sarah Lee",initials:"SL",avatarColor:"#234255"},content:"Great matches at the club today! Here are some highlights 📸",images:[{id:"1",url:"https://placehold.co/400x400/ff6b6b/FFF?text=Image+1+(Grid+Top-Left)",alt:"Match highlight 1"},{id:"2",url:"https://placehold.co/400x400/4ecdc4/FFF?text=Image+2+(Grid+Top-Right)",alt:"Match highlight 2"},{id:"3",url:"https://placehold.co/400x400/45b7d1/FFF?text=Image+3+(Grid+Bottom-Left)",alt:"Match highlight 3"},{id:"4",url:"https://placehold.co/400x400/f7b731/FFF?text=Image+4+(Grid+Bottom-Right+with+Overlay)",alt:"Match highlight 4"},{id:"5",url:"https://placehold.co/400x400/5f27cd/FFF?text=Image+5+(Hidden+in+Grid)",alt:"Match highlight 5"},{id:"6",url:"https://placehold.co/400x400/00d2d3/FFF?text=Image+6+(Hidden+in+Grid)",alt:"Match highlight 6"}],createdAt:"2025-06-16T10:00:00Z",likeCount:245,commentCount:18,isLiked:!1},{id:"2",author:{id:"102",username:"Mike Chen",initials:"MC",avatarColor:"#29ba9b"},content:"New paddles just arrived! Can't wait to try them out this weekend 🏓",images:[{id:"5",url:"https://placehold.co/400x400/29ba9b/FFF?text=Paddle+1",alt:"New paddle front"},{id:"6",url:"https://placehold.co/400x400/29ba9b/FFF?text=Paddle+2",alt:"New paddle back"}],createdAt:"2025-06-16T08:00:00Z",likeCount:132,commentCount:24,isLiked:!1}];return o.jsx(sv,{children:o.jsxs(uv,{children:[o.jsxs(cv,{children:[o.jsxs(dv,{onClick:Bo,children:[o.jsx(fv,{}),"What's happening in pickleball?"]}),C&&o.jsxs("div",{style:{padding:"0 20px 16px"},children:[o.jsx(Lv,{placeholder:"Write something here...",value:M,onChange:U=>N(U.target.value),style:{width:"100%",minHeight:"80px"}}),D.length>0&&o.jsx(Zv,{children:o.jsx("div",{className:`preview-grid ${Wt(D)}`,children:Wt(D)==="four-images-with-overlay"?o.jsxs(o.Fragment,{children:[D.slice(0,3).map((U,ie)=>o.jsxs(uc,{className:"preview-image",children:[o.jsx("img",{src:U.url,alt:`Selected ${ie+1}`}),o.jsx(cc,{onClick:()=>Oi(ie),children:o.jsx(fo,{})})]},ie)),o.jsxs(uc,{className:"preview-image overlay-preview","data-remaining":D.length-3,children:[o.jsx("img",{src:D[3].url,alt:"Selected 4"}),o.jsx(cc,{onClick:()=>Oi(3),children:o.jsx(fo,{})}),o.jsxs("div",{className:"overlay-indicator",children:["+",D.length-3]})]})]}):D.map((U,ie)=>o.jsxs(uc,{className:"preview-image",children:[o.jsx("img",{src:U.url,alt:`Selected ${ie+1}`}),o.jsx(cc,{onClick:()=>Oi(ie),children:o.jsx(fo,{})})]},ie))})})]}),o.jsxs(hv,{children:[o.jsxs(pv,{onClick:Kl,children:[o.jsx(Jv,{}),"Photo/Video"]}),C&&o.jsx(Bv,{disabled:!M.trim(),onClick:Uo,width:"auto",padding:"8px 12px",marginTop:"0",children:V?"Posting...":"Post"}),o.jsx("input",{id:"imageInput",type:"file",multiple:!0,accept:"image/jpeg,image/jpg,image/png,image/gif,image/webp,video/mp4,video/mov,video/avi,video/wmv,video/webm",capture:"environment",style:{display:"none"},onChange:U=>{const ie=Array.from(U.target.files);if(ie.length>0){const je=ie.map(I=>new Promise(be=>{const Te=new FileReader;Te.onload=Ne=>{be({file:I,url:Ne.target.result,name:I.name})},Te.readAsDataURL(I)}));Promise.all(je).then(I=>{G(I),T(!0)}),U.target.value=""}}})]})]}),f&&o.jsx(Uv,{children:o.jsx(Wv,{})}),b&&o.jsx(Hv,{children:b}),!f&&!b&&c.map(U=>{var ie,je;return o.jsxs(mv,{children:[o.jsxs(gv,{children:[o.jsx(xv,{style:{background:U.author.avatarColor},children:U.author.initials}),o.jsxs(bv,{children:[o.jsx("h3",{children:U.author.username}),o.jsx("span",{children:new Date(U.createdAt).toLocaleDateString()})]})]}),o.jsxs(vv,{children:[o.jsx("p",{children:U.content}),((ie=U.images)==null?void 0:ie.length)>0&&o.jsx(yv,{className:Wt(U.images),children:Wt(U.images)==="four-images-with-overlay"?o.jsxs(o.Fragment,{children:[U.images.slice(0,3).map((I,be)=>o.jsx("div",{className:"image-container",children:o.jsx("img",{src:I.url,alt:I.alt,onClick:()=>it(U.images,be),style:{cursor:"pointer"}})},I.id)),o.jsx("div",{className:"image-container overlay","data-remaining":U.images.length-3,onClick:()=>it(U.images,3),style:{cursor:"pointer"},children:o.jsx("img",{src:U.images[3].url,alt:U.images[3].alt})})]}):U.images.map((I,be)=>o.jsx("img",{src:I.url,alt:I.alt,onClick:()=>it(U.images,be),style:{cursor:"pointer"}},I.id))})]}),o.jsxs(wv,{children:[o.jsxs("button",{onClick:I=>Ql(I,"like",U.id),style:{color:U.isLiked?"#ef4444":"#64748b",fontWeight:U.isLiked?"600":"400"},children:[o.jsx(Qv,{filled:U.isLiked}),U.likeCount]}),o.jsxs("button",{onClick:I=>Ql(I,"comment",U.id),children:[o.jsx(Kv,{}),U.commentCount]})]}),s&&k[U.id]&&o.jsxs(Sv,{children:[o.jsxs(jv,{children:[o.jsx(rp,{children:i.name.split(" ").map(I=>I[0]).join("").toUpperCase()}),o.jsx(Cv,{placeholder:"Add a comment...",value:X[U.id]||"",onChange:I=>Q(be=>({...be,[U.id]:I.target.value})),onKeyPress:I=>{I.key==="Enter"&&(I.preventDefault(),Ri(U.id))}}),o.jsx(Ev,{onClick:()=>Ri(U.id),disabled:!((je=X[U.id])!=null&&je.trim())||xe[U.id],children:o.jsx(cp,{})})]}),Z[U.id]&&Z[U.id].length>0&&o.jsx(zv,{children:Z[U.id].map((I,be)=>{var Te;return o.jsxs("div",{children:[o.jsxs(kv,{children:[o.jsx(rp,{children:I.author.initials}),o.jsxs(Tv,{children:[o.jsxs("p",{className:"comment-content",children:[o.jsx("span",{className:"comment-author",children:I.author.name}),o.jsx("span",{className:"comment-text",children:I.content})]}),o.jsxs("div",{className:"comment-meta",children:[o.jsx("span",{className:"comment-time",children:(()=>{const Ne=new Date,Tn=new Date(I.createdAt),An=Math.floor((Ne-Tn)/(1e3*60)),Vt=Math.floor(An/60),sn=Math.floor(Vt/24);return An<60?`${An||1}m`:Vt<24?`${Vt}h`:`${sn}d`})()}),o.jsx("button",{className:"comment-reply",onClick:()=>ia(I.id),children:"Reply"})]})]})]}),I.replies&&I.replies.length>0&&o.jsx(Av,{children:o.jsx("div",{className:"view-replies",children:o.jsx("button",{onClick:()=>fe(Ne=>({...Ne,[I.id]:!Ne[I.id]})),children:F[I.id]?"Hide replies":`View replies (${I.replies.length})`})})}),F[I.id]&&I.replies&&I.replies.length>0&&o.jsx(op,{children:I.replies.map(Ne=>o.jsxs(Ov,{children:[o.jsx(sp,{children:Ne.author.initials}),o.jsxs(_v,{children:[o.jsxs("p",{className:"reply-content",children:[o.jsx("span",{className:"reply-author",children:Ne.author.name}),o.jsx("span",{className:"reply-text",children:Ne.content})]}),o.jsxs("div",{className:"reply-meta",children:[o.jsx("span",{className:"reply-time",children:(()=>{const Tn=new Date,An=new Date(Ne.createdAt),Vt=Math.floor((Tn-An)/(1e3*60)),sn=Math.floor(Vt/60),Jl=Math.floor(sn/24);return Vt<60?`${Vt||1}m`:sn<24?`${sn}h`:`${Jl}d`})()}),o.jsx("button",{className:"reply-reply",onClick:()=>ia(I.id),children:"Reply"})]})]})]},Ne.id))}),pt[I.id]&&o.jsx(op,{children:o.jsxs(Mv,{children:[o.jsx(sp,{children:i.name.split(" ").map(Ne=>Ne[0]).join("").toUpperCase()}),o.jsx(Rv,{placeholder:"Reply...",value:Ce[I.id]||"",onChange:Ne=>ft(Tn=>({...Tn,[I.id]:Ne.target.value})),onKeyPress:Ne=>{Ne.key==="Enter"&&(Ne.preventDefault(),Di(I.id,U.id))}}),o.jsx(Dv,{onClick:()=>Di(I.id,U.id),disabled:!((Te=Ce[I.id])!=null&&Te.trim())||L[I.id],children:o.jsx(cp,{})})]})})]},I.id)})})]})]},U.id)}),!f&&!b&&c.length===0&&o.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#64748b"},children:"No posts yet. Be the first to share!"}),x&&o.jsx(To,{isOpen:x,onClose:()=>m(!1),title:"Join the Conversation!",message:"Sign in or register to interact with the community"}),J&&o.jsx(Yv,{onClick:Gt,children:o.jsxs($v,{ref:Zl,onClick:U=>U.stopPropagation(),onTouchStart:Ho,onTouchMove:Yo,onTouchEnd:Ra,children:[o.jsx(qv,{$offset:mt,$isAnimating:Mi,children:ne.map((U,ie)=>o.jsx(Gv,{children:o.jsx(Vv,{src:U.url,alt:U.alt,draggable:!1})},U.id))}),o.jsx(up,{$left:!0,onClick:Pt,disabled:ee===0,children:o.jsx(Pv,{})}),o.jsx(up,{onClick:la,disabled:ee===ne.length-1,children:o.jsx(Fv,{})}),o.jsx(Nv,{onClick:Gt,children:o.jsx(fo,{})}),o.jsxs(Xv,{children:[ee+1," / ",ne.length]})]})})]})})}const ey=g.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 72px 16px 40px;
  animation: fadeIn 0.3s ease;

  @media (min-width: 768px) {
    padding: 90px 24px 48px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,ty=g.h1`
  font-size: 2rem;
  color: #234255;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 800;
  letter-spacing: -0.5px;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.25rem;
  }
`,ny=g.p`
  text-align: center;
  color: #64748b;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto 3rem;
  padding: 0 16px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
    padding: 0 8px;
  }
`,ay=g.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding: 0;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
`,iy=g.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  width: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }
`,ly=g.div`
  position: relative;
  height: 160px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
  }
`,ry=g.div`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  backdrop-filter: blur(8px);
  z-index: 1;
  
  ${i=>{switch(i.status.toLowerCase()){case"open":return`
          background: rgba(220, 252, 231, 0.9);
          color: #166534;
          border: 1px solid #86efac;
        `;case"closed":return`
          background: rgba(254, 226, 226, 0.9);
          color: #991b1b;
          border: 1px solid #fca5a5;
        `;case"upcoming":return`
          background: rgba(224, 242, 254, 0.9);
          color: #0369a1;
          border: 1px solid #7dd3fc;
        `;default:return`
          background: rgba(241, 245, 249, 0.9);
          color: #475569;
          border: 1px solid #e2e8f0;
        `}}}
`,oy=g.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`,sy=g.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 8px;
  line-height: 1.3;
`,uy=g.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  background: #f0fdf4;
  border-radius: 20px;
  color: #166534;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 16px;
  border: 1px solid #bbf7d0;

  svg {
    color: #22c55e;
  }
`,pm=g.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 8px;
  
  svg {
    width: 16px;
    height: 16px;
    color: #29ba9b;
    flex-shrink: 0;
  }
`,cy=g(pm)`
  margin-bottom: 16px;
`,dy=g.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: auto;
  margin-bottom: 16px;
`,mm=g.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #64748b;
  font-size: 0.9rem;

  svg {
    width: 18px;
    height: 18px;
    color: #29ba9b;
    flex-shrink: 0;
  }

  div {
    font-weight: 600;
    color: #234255;
  }
`,fy=g(mm)`
  div {
    display: flex;
    align-items: center;
    gap: 4px;

    span:first-child {
      color: #234255;
      font-weight: 600;
    }

    span:last-child {
      display: none;
    }
  }
`,hy=g.button`
  width: 100%;
  padding: 12px;
  background: #29ba9b;
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 16px;
  transition: all 0.2s ease;
  font-size: 0.95rem;
  
  &:hover:not(:disabled) {
    background: #25a589;
    transform: translateY(-1px);
  }
  
  &:disabled {
    background: #e2e8f0;
    cursor: not-allowed;
    color: #94a3b8;
  }
`;g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  color: #64748b;
  font-size: 1rem;

  @media (min-width: 768px) {
    min-height: 400px;
    font-size: 1.1rem;
  }
`;g.div`
  text-align: center;
  padding: 16px;
  margin: 16px;
  background: #fee;
  color: #c00;
  border-radius: 8px;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    padding: 24px;
    margin: 24px;
    font-size: 1rem;
  }
`;const py=g.div`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`,my=g.div`
  position: relative;
  flex: 1;

  svg {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    color: #64748b;
  }

  input {
    width: 100%;
    padding: 12px 16px 12px 48px;
    border: 1.5px solid #e2e8f0;
    border-radius: 12px;
    font-size: 1rem;
    color: #1a1a1a;
    transition: all 0.2s ease;

    &:focus {
      outline: none;
      border-color: #29ba9b;
      box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
    }

    &::placeholder {
      color: #94a3b8;
    }
  }
`,gy=g.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`,dp=g.select`
  padding: 12px 16px;
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  font-size: 0.95rem;
  color: #1a1a1a;
  background: white;
  cursor: pointer;
  min-width: 140px;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
`,xy=g.div`
  text-align: center;
  padding: 48px 24px;
  background: #f8fafc;
  border-radius: 16px;
  border: 1px dashed #e2e8f0;
  color: #64748b;
  margin-top: 16px;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #334155;
    margin-bottom: 8px;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;function by(){return o.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"#29ba9b",fillOpacity:"0.1",stroke:"#29ba9b",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M8 21h8"}),o.jsx("path",{d:"M12 17v4"}),o.jsx("path",{d:"M7 4h10"}),o.jsx("path",{d:"M17 4v8a5 5 0 0 1-10 0V4"}),o.jsx("path",{d:"M7 4c-3 0-4 2-4 3v1c0 2 2 3 4 3"}),o.jsx("path",{d:"M17 4c3 0 4 2 4 3v1c0 2-2 3-4 3"})]})}function vy(){return o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:o.jsx("path",{d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",strokeLinecap:"round",strokeLinejoin:"round"})})}function yy(){return o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[o.jsx("path",{d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M12 13a3 3 0 100-6 3 3 0 000 6z",strokeLinecap:"round",strokeLinejoin:"round"})]})}function wy(){return o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[o.jsx("circle",{cx:"12",cy:"12",r:"9",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("text",{x:"12",y:"14.5",dominantBaseline:"middle",textAnchor:"middle",fontSize:"14",stroke:"none",fill:"currentColor",style:{fontWeight:"bold"},children:"₱"})]})}function Sy(){return o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:o.jsx("path",{d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",strokeLinecap:"round",strokeLinejoin:"round"})})}function jy(){return o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",strokeLinecap:"round",strokeLinejoin:"round"})})}const Cy=(i,s,c,u)=>{const f=new Date,p=new Date(i),b=new Date(s);return p<f?"Completed":f>b||c>=u?"Closed":"Open"};function Ey(){const[i,s]=j.useState([]),[c,u]=j.useState(!0),[f,p]=j.useState(null),[b,y]=j.useState(""),[x,m]=j.useState(""),[C,T]=j.useState(""),[M,N]=j.useState(!1),D=[{label:"₱0 - ₱3,000",min:0,max:3e3},{label:"₱3,001 - ₱6,000",min:3001,max:6e3},{label:"₱6,001 - ₱10,000",min:6001,max:1e4}],G=i.filter(k=>{const Y=k.name.toLowerCase().includes(b.toLowerCase())||k.location.toLowerCase().includes(b.toLowerCase()),X=!x||k.tier===parseInt(x),Q=!C||k.entryFee>=D[parseInt(C)].min&&k.entryFee<=D[parseInt(C)].max;return Y&&X&&Q}),V=async()=>{try{u(!0),p(null);const Y=[{id:"1",name:"PPL Summer Championship 2025",date:"2025-08-15T09:00:00Z",location:"Manila Pickleball Center",entryFee:1500,prizePool:5e4,maxParticipants:64,currentParticipants:42,registrationDeadline:"2025-07-01T00:00:00Z",bannerUrl:"https://images.unsplash.com/photo-1686721135036-22ac6cbb8ce8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",tier:3},{id:"2",name:"Beginners Welcome Tournament",date:"2025-07-20T09:00:00Z",location:"Quezon City Sports Complex",entryFee:800,prizePool:2e4,maxParticipants:32,currentParticipants:32,registrationDeadline:"2025-05-10T00:00:00Z",bannerUrl:"https://images.unsplash.com/photo-1723004714201-cf224222b897?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",tier:2},{id:"3",name:"Indoor Championship Series",date:"2025-07-01T09:00:00Z",location:"BGC Indoor Sports Complex",entryFee:2e3,prizePool:75e3,maxParticipants:128,currentParticipants:85,registrationDeadline:"2025-06-30T00:00:00Z",bannerUrl:"https://plus.unsplash.com/premium_photo-1709048991290-1d36455a2895?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",tier:3}].map(X=>({...X,status:Cy(X.date,X.registrationDeadline,X.currentParticipants,X.maxParticipants)}));s(Y)}catch(k){console.error("Failed to fetch tournaments:",k),p("Failed to load tournaments. Please try again later.")}finally{u(!1)}};j.useEffect(()=>{V()},[]);const z=async k=>{{N(!0);return}};return c?o.jsx("div",{children:"Loading tournaments..."}):f?o.jsx("div",{children:f}):o.jsxs(ey,{children:[o.jsx(ty,{children:"Tournaments"}),o.jsx(ny,{children:"Discover and join exciting pickleball tournaments across the Philippines. From beginner-friendly events to professional championships, find the perfect competition to showcase your skills."}),o.jsxs(py,{children:[o.jsxs(my,{children:[o.jsx(jy,{}),o.jsx("input",{type:"text",placeholder:"Search tournaments by name or location...",value:b,onChange:k=>y(k.target.value)})]}),o.jsxs(gy,{children:[o.jsxs(dp,{value:x,onChange:k=>m(k.target.value),children:[o.jsx("option",{value:"",children:"All Tiers"}),o.jsx("option",{value:"1",children:"Tier 1"}),o.jsx("option",{value:"2",children:"Tier 2"}),o.jsx("option",{value:"3",children:"Tier 3"})]}),o.jsxs(dp,{value:C,onChange:k=>T(k.target.value),children:[o.jsx("option",{value:"",children:"All Fees"}),D.map((k,Y)=>o.jsx("option",{value:Y,children:k.label},Y))]})]})]}),G.length>0?o.jsx(ay,{children:G.map(k=>o.jsxs(iy,{children:[o.jsxs(ly,{children:[k.bannerUrl&&o.jsx("img",{src:k.bannerUrl,alt:k.name}),o.jsx(ry,{status:k.status,children:k.status})]}),o.jsxs(oy,{children:[o.jsx(sy,{children:k.name}),o.jsxs(uy,{children:[o.jsx(by,{}),"Tier ",k.tier]}),o.jsxs(pm,{children:[o.jsx(vy,{}),new Date(k.date).toLocaleDateString()]}),o.jsxs(cy,{children:[o.jsx(yy,{}),k.location]}),o.jsxs(dy,{children:[o.jsxs(mm,{children:[o.jsx(Sy,{}),o.jsxs("div",{children:[k.currentParticipants,"/",k.maxParticipants]})]}),o.jsxs(fy,{children:[o.jsx(wy,{}),o.jsxs("div",{children:[o.jsxs("span",{children:["₱",k.entryFee]}),o.jsx("span",{})]})]})]}),o.jsx(hy,{onClick:()=>z(k.id),disabled:k.currentParticipants>=k.maxParticipants,children:k.currentParticipants>=k.maxParticipants?"Full":"Register Now"})]})]},k.id))}):o.jsxs(xy,{children:[o.jsx("h3",{children:"No Tournaments Found"}),o.jsx("p",{children:b||x||C?"Try adjusting your search criteria or filters to find more tournaments.":"There are no tournaments available at the moment. Please check back later."})]}),M&&o.jsx(To,{isOpen:M,onClose:()=>N(!1),title:"Join the Tournament!",message:"Sign in or register to participate in tournaments"})]})}const dc=g.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 90px 24px 48px;
  animation: fadeIn 0.3s ease;

  @media (max-width: 768px) {
    padding: 72px 12px 32px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,zy=g.div`
  margin-bottom: 40px;
`,ky=g.h1`
  font-size: 2.5rem;
  color: #234255;
  margin-bottom: 12px;
  font-weight: 800;
  letter-spacing: -0.5px;
`,Ty=g.p`
  color: #64748b;
  font-size: 1.1rem;
  max-width: 600px;
  line-height: 1.6;
  margin: 0 auto;
  text-align: center;
`,Ay=g.div`
  color: #64748b;
  font-size: 0.875rem;
  text-align: center;
  margin-top: 8px;
`,My=g.div`
  margin: 32px auto;
  max-width: 800px;
  width: 100%;
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`,Ry=g.div`
  position: relative;
  flex: 1;
  min-width: 250px;

  svg {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    color: #64748b;
  }
`,Dy=g.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`,Oy=g.select`
  padding: 12px 16px;
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  font-size: 0.95rem;
  color: #1a1a1a;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 120px;

  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }

  @media (max-width: 768px) {
    flex: 1;
  }
`,_y=g.input`
  width: 100%;
  padding: 12px 16px 12px 48px;
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  color: #1a1a1a;
  transition: all 0.2s ease;
  background: white;
  
  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  
  &::placeholder {
    color: #94a3b8;
  }
`,Ny=g.div`
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
  border-bottom: 1px solid #e2e8f0;
  overflow-x: auto;
  padding-bottom: 1px;
  -webkit-overflow-scrolling: touch;
  margin: 0 -12px 32px;
  padding: 0 12px 16px;
  
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    gap: 4px;
    margin-bottom: 24px;
    padding-bottom: 12px;
  }
`,Ly=g.button`
  padding: 12px 24px;
  background: ${i=>i.$active?"#f8fafc":"transparent"};
  border: none;
  border-bottom: 2px solid ${i=>i.$active?"#29ba9b":"transparent"};
  color: ${i=>i.$active?"#29ba9b":"#64748b"};
  font-weight: ${i=>i.$active?"600":"500"};
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
  border-radius: 8px 8px 0 0;
  outline: none;
  
  &:hover {
    color: #29ba9b;
    background: ${i=>i.$active?"#f8fafc":"#f1f5f9"};
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px #29ba9b33;
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 0.875rem;
  }
`,By=g.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Uy=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 16px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    margin-bottom: 12px;
  }
`,Hy=g.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  
  @media (max-width: 768px) {
    &::-webkit-scrollbar {
      display: none;
    }
  }
`,Yy=g.div`
  display: grid;
  grid-template-columns: minmax(50px, auto) minmax(200px, 2fr) minmax(60px, auto) minmax(80px, auto) minmax(100px, auto);
  padding: 16px 24px;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
    font-weight: 600;
  color: #64748b;
  font-size: 0.875rem;
  align-items: center;
  min-height: 60px;
  min-width: min-content;
  width: 100%;
  
  & > div {
    display: flex;
    align-items: center;
    height: 100%;
    white-space: nowrap;
    padding-right: 16px;
  }
  
  @media (max-width: 768px) {
    padding: 12px 16px;
    font-size: 0.75rem;
    min-height: 50px;
    & > div {
      padding-right: 12px;
    }
  }
`,$y=g.div`
  display: grid;
  grid-template-columns: minmax(50px, auto) minmax(200px, 2fr) minmax(60px, auto) minmax(80px, auto) minmax(100px, auto);
  padding: 16px 24px;
  align-items: center;
  border-bottom: 1px solid #e2e8f0;
  transition: background-color 0.2s ease;
  min-height: 72px;
  min-width: min-content;
  width: 100%;
  
  & > div {
    display: flex;
    align-items: center;
    height: 100%;
    white-space: nowrap;
    padding-right: 16px;
  }
  
  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #f8fafc;
  }
  
  @media (max-width: 768px) {
    padding: 12px 16px;
    font-size: 0.875rem;
    min-height: 64px;
    & > div {
      padding-right: 12px;
    }
  }
`,qy=g.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  
  @media (max-width: 768px) {
    gap: 8px;
  }
`,Gy=g.div`
  font-weight: 500;
  color: #234255;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`,Vy=g.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #29ba9b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.875rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    font-size: 0.8125rem;
  }

  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
    font-size: 0.75rem;
  }
`;g.div``;g.div`
  font-size: 0.75rem;
  color: #64748b;
  
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;const fc=g.div`
  font-weight: 500;
  color: #234255;
  display: flex;
  align-items: center;
  height: 100%;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`,Xy=g.div`
  font-weight: 600;
  color: #64748b;
  display: flex;
  align-items: center;
  height: 100%;
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`,Zy=g.div`
  background: #234255;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    padding: 16px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50,25 C45,25 35,30 35,50 C35,70 45,75 50,75 C55,75 65,70 65,50 C65,30 55,25 50,25 Z" fill="%23ffffff" opacity="0.1"/></svg>') no-repeat center center;
    background-size: 80% auto;
    opacity: 0.1;
  }

  ${i=>i.$rank===1&&`
    background: linear-gradient(135deg, #234255 0%, #29ba9b 100%);
  `}

  ${i=>i.$rank===2&&`
    background: linear-gradient(135deg, #234255 0%, #64748b 100%);
  `}

  ${i=>i.$rank===3&&`
    background: linear-gradient(135deg, #234255 0%, #cd7f32 100%);
  `}
`,Qy=g.div`
  position: absolute;
  top: 16px;
  right: 16px;
  font-weight: 700;
  font-size: 24px;
  color: rgba(255, 255, 255, 0.9);
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`,Ky=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  margin-top: 12px;
`,Jy=g.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 32px;
  color: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 8px;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  font-size: 24px;
  }
`,Wy=g.div`
  text-align: center;
`,Py=g.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  margin: 0 0 4px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;g.div`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
`;const Fy=g.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-top: 16px;

  @media (max-width: 768px) {
    gap: 6px;
    margin-top: 12px;
  }
`,hc=g.div`
  padding: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 6px;
  }
`,pc=g.div`
  font-size: ${i=>i.$large?"1.25rem":"1rem"};
  font-weight: 600;
  color: white;
  margin-bottom: 2px;
  
  @media (max-width: 768px) {
    font-size: ${i=>i.$large?"1.1rem":"0.9rem"};
  }
`,mc=g.div`
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;g.div`
  height: 4px;
  background: #e2e8f0;
  border-radius: 2px;
  margin-top: 8px;
  overflow: hidden;
`;g.div`
  height: 100%;
  background: #29ba9b;
  border-radius: 2px;
  width: ${i=>i.$percentage}%;
  transition: width 1s ease;
`;const Iy=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  color: #64748b;
  font-size: 1.1rem;
`,e4=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  color: #ef4444;
  font-size: 1.1rem;
  text-align: center;
  flex-direction: column;
  gap: 16px;
`,t4=g.button`
  padding: 8px 16px;
  background: #fee2e2;
  color: #ef4444;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #fecaca;
  }
`;function fp(i){return i.split(" ").map(s=>s[0]).join("").toUpperCase()}function hp(i){return new Intl.NumberFormat().format(i)}function n4(){return o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",strokeLinecap:"round",strokeLinejoin:"round"})})}function a4(){const[i,s]=j.useState([]),[c,u]=j.useState("mens-singles"),[f,p]=j.useState(!0),[b,y]=j.useState(null),[x,m]=j.useState(""),[C,T]=j.useState(""),[M,N]=j.useState(""),D=["19+","35+","50+"],G=(Z,K)=>{if(!K)return!0;const xe=parseInt(K.replace("+",""));return Z>=xe},V=Z=>{if(!Z)return[];let K=Z.filter(ue=>ue.age>=19);return K=K.filter(ue=>{const F=!x||ue.name.toLowerCase().includes(x.toLowerCase()),fe=G(ue.age,M);return F&&fe}),[...K].sort((ue,F)=>F.points-ue.points).map((ue,F)=>({...ue,rank:F+1}))};j.useEffect(()=>{const Z=new Date,K={year:"numeric",month:"long",day:"numeric"};T(Z.toLocaleDateString("en-US",K)),z()},[]);const z=async()=>{var Z;try{p(!0),y(null);const K=[{id:"mens-singles",name:"MEN'S SINGLES",lastUpdated:"2024-01-20T10:00:00Z",rankings:[{id:"1",name:"Juan Dela Cruz",age:28,rank:1,points:2500,gamesPlayed:45,wins:38,losses:7,winRate:"84.4"},{id:"2",name:"Mike Santos",age:35,rank:2,points:2350,gamesPlayed:42,wins:34,losses:8,winRate:"81.0"},{id:"3",name:"Carlo Garcia",age:45,rank:3,points:2200,gamesPlayed:38,wins:30,losses:8,winRate:"78.9"},{id:"4",name:"Miguel Lopez",age:61,rank:4,points:2100,gamesPlayed:35,wins:27,losses:8,winRate:"77.1"},{id:"j1",name:"Alex Santos",age:15,rank:5,points:1800,gamesPlayed:30,wins:25,losses:5,winRate:"83.3"},{id:"j2",name:"Marco Reyes",age:13,rank:6,points:1700,gamesPlayed:28,wins:22,losses:6,winRate:"78.6"}]},{id:"womens-singles",name:"WOMEN'S SINGLES",lastUpdated:"2024-01-20T10:00:00Z",rankings:[{id:"1",name:"Maria Santos",age:28,rank:1,points:2450,gamesPlayed:43,wins:36,losses:7,winRate:"83.7"},{id:"2",name:"Ana Garcia",age:45,rank:2,points:2300,gamesPlayed:40,wins:32,losses:8,winRate:"80.0"},{id:"3",name:"Sofia Reyes",age:52,rank:3,points:2150,gamesPlayed:37,wins:29,losses:8,winRate:"78.4"},{id:"4",name:"Isabella Tan",age:71,rank:4,points:2e3,gamesPlayed:30,wins:22,losses:8,winRate:"73.3"},{id:"j1",name:"Alexandra Santos",age:15,rank:5,points:1850,gamesPlayed:32,wins:26,losses:6,winRate:"81.3"},{id:"j2",name:"Diana Garcia",age:17,rank:6,points:1750,gamesPlayed:29,wins:23,losses:6,winRate:"79.3"}]},{id:"mens-doubles",name:"MEN'S DOUBLES",lastUpdated:"2024-01-20T10:00:00Z",rankings:[{id:"1",name:"Juan Dela Cruz",age:28,rank:1,points:2600,gamesPlayed:50,wins:42,losses:8,winRate:"84.0"},{id:"2",name:"Mike Santos",age:35,rank:2,points:2400,gamesPlayed:45,wins:36,losses:9,winRate:"80.0"},{id:"3",name:"Carlo Garcia",age:45,rank:3,points:2250,gamesPlayed:40,wins:31,losses:9,winRate:"77.5"},{id:"4",name:"Miguel Lopez",age:61,rank:4,points:2150,gamesPlayed:38,wins:29,losses:9,winRate:"76.3"},{id:"j1",name:"Alex Santos",age:15,rank:5,points:1900,gamesPlayed:35,wins:27,losses:8,winRate:"77.1"}]},{id:"womens-doubles",name:"WOMEN'S DOUBLES",lastUpdated:"2024-01-20T10:00:00Z",rankings:[{id:"1",name:"Maria Santos",age:28,rank:1,points:2550,gamesPlayed:48,wins:40,losses:8,winRate:"83.3"},{id:"2",name:"Ana Garcia",age:45,rank:2,points:2350,gamesPlayed:43,wins:34,losses:9,winRate:"79.1"},{id:"3",name:"Sofia Reyes",age:52,rank:3,points:2200,gamesPlayed:40,wins:31,losses:9,winRate:"77.5"},{id:"4",name:"Isabella Tan",age:71,rank:4,points:2100,gamesPlayed:35,wins:27,losses:8,winRate:"77.1"},{id:"j1",name:"Alexandra Santos",age:15,rank:5,points:1950,gamesPlayed:32,wins:25,losses:7,winRate:"78.1"}]},{id:"mixed-doubles",name:"MIXED DOUBLES",lastUpdated:"2024-01-20T10:00:00Z",rankings:[{id:"1",name:"Juan Dela Cruz",age:28,rank:1,points:2650,gamesPlayed:52,wins:44,losses:8,winRate:"84.6"},{id:"2",name:"Maria Santos",age:28,rank:2,points:2600,gamesPlayed:50,wins:42,losses:8,winRate:"84.0"},{id:"3",name:"Mike Santos",age:35,rank:3,points:2450,gamesPlayed:47,wins:38,losses:9,winRate:"80.9"},{id:"4",name:"Ana Garcia",age:45,rank:4,points:2400,gamesPlayed:45,wins:36,losses:9,winRate:"80.0"},{id:"5",name:"Carlo Garcia",age:45,rank:5,points:2300,gamesPlayed:42,wins:33,losses:9,winRate:"78.6"},{id:"j1",name:"Alexandra Santos",age:15,rank:6,points:2e3,gamesPlayed:35,wins:27,losses:8,winRate:"77.1"}]}];s(K),u((Z=K[0])==null?void 0:Z.id)}catch{y("Failed to fetch rankings. Please try again later.")}finally{p(!1)}},k=Z=>{const K=V(Z),xe=K.slice(0,3),ue=K.slice(3);return ue.length===0&&xe.length===0?o.jsx("div",{style:{textAlign:"center",padding:"40px",color:"#64748b"},children:"No players found matching your search criteria."}):ue.length===0?null:o.jsxs(Hy,{children:[o.jsxs(Yy,{children:[o.jsx("div",{children:"Rank"}),o.jsx("div",{children:"Player"}),o.jsx("div",{children:"Age"}),o.jsx("div",{children:"Points"}),o.jsx("div",{children:"Games (W-L)"})]}),ue.slice(0,47).map(F=>o.jsxs($y,{children:[o.jsx(Xy,{children:F.rank}),o.jsxs(qy,{children:[o.jsx(Vy,{children:fp(F.name)}),o.jsx(Gy,{children:F.name})]}),o.jsx(fc,{children:F.age}),o.jsx(fc,{children:hp(F.points)}),o.jsxs(fc,{children:[F.wins,"-",F.losses]})]},F.id))]})};if(f)return o.jsx(dc,{children:o.jsx(Iy,{children:"Loading rankings..."})});if(b)return o.jsx(dc,{children:o.jsxs(e4,{children:[o.jsx("div",{children:b}),o.jsx(t4,{onClick:z,children:"Try Again"})]})});const Y=i.find(Z=>Z.id===c),Q=(Y?V(Y.rankings):[]).slice(0,3);return o.jsxs(dc,{children:[o.jsxs(zy,{children:[o.jsx(ky,{children:"Player Rankings"}),o.jsx(Ty,{children:"Track the performance and standings of pickleball players across different categories."}),o.jsxs(Ay,{children:["Last Updated: ",C]}),o.jsxs(My,{children:[o.jsxs(Ry,{children:[o.jsx(n4,{}),o.jsx(_y,{type:"text",placeholder:"Search by player name...",value:x,onChange:Z=>m(Z.target.value)})]}),o.jsx(Dy,{children:o.jsxs(Oy,{value:M,onChange:Z=>N(Z.target.value),children:[o.jsx("option",{value:"",children:"All Ages"}),D.map(Z=>o.jsx("option",{value:Z,children:Z},Z))]})})]})]}),o.jsx(Ny,{children:i.map(Z=>o.jsx(Ly,{$active:Z.id===c,onClick:()=>u(Z.id),children:Z.name},Z.id))}),o.jsxs(By,{children:[o.jsx(Uy,{children:Q.map(Z=>o.jsxs(Zy,{$rank:Z.rank,children:[o.jsx(Qy,{children:Z.rank}),o.jsxs(Ky,{children:[o.jsx(Jy,{children:fp(Z.name)}),o.jsx(Wy,{children:o.jsx(Py,{children:Z.name})})]}),o.jsxs(Fy,{children:[o.jsxs(hc,{children:[o.jsx(pc,{children:Z.age}),o.jsx(mc,{children:"Age"})]}),o.jsxs(hc,{children:[o.jsx(pc,{children:hp(Z.points)}),o.jsx(mc,{children:"Points"})]}),o.jsxs(hc,{children:[o.jsxs(pc,{children:[Z.wins,"-",Z.losses]}),o.jsx(mc,{children:"Games (W-L)"})]})]})]},Z.id))}),k((Y==null?void 0:Y.rankings)||[])]})]})}const ho=g.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 72px 16px 40px;
  animation: fadeIn 0.3s ease;

  @media (min-width: 768px) {
    padding: 90px 24px 48px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,gc=g.h1`
  font-size: 2rem;
  color: #234255;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 800;
  letter-spacing: -0.5px;

    @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.25rem;
    }
`,xc=g.p`
  text-align: center;
    color: #64748b;
  font-size: 1.1rem;
    line-height: 1.6;
  max-width: 700px;
  margin: 0 auto 3rem;
  padding: 0 16px;
    
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
    padding: 0 8px;
  }
`,i4=g.div`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
    gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`,l4=g.div`
  position: relative;
  flex: 1;

  svg {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    color: #64748b;
  }
`,r4=g.input`
  width: 100%;
  padding: 12px 16px 12px 48px;
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  color: #1a1a1a;
  background: white;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  
  &::placeholder {
    color: #94a3b8;
  }
  
  &:hover {
    border-color: #cbd5e0;
  }
`,o4=g.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`,bc=g.button`
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1.5px solid ${i=>i.$active?"#29ba9b":"#e2e8f0"};
  background: ${i=>i.$active?"#29ba9b":"white"};
  color: ${i=>i.$active?"white":"#64748b"};
  white-space: nowrap;
  min-width: 140px;
  
  &:hover {
    border-color: #29ba9b;
    color: ${i=>i.$active?"white":"#29ba9b"};
    background: ${i=>i.$active?"#26a085":"#f8fafc"};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
`,s4=g.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 24px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
`,u4=g.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  border: 1px solid #f1f5f9;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
    border-color: #e2e8f0;
  }
`,c4=g.div`
  height: 160px;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${i=>{switch(i.$imageIndex){case 0:return'url("https://images.unsplash.com/photo-1686721135030-e2ab79e27b16?q=80&w=1170&auto=format&fit=crop")';case 1:return'url("https://images.unsplash.com/photo-1515017804404-92b19fdfe6ac?q=80&w=1440&auto=format&fit=crop")';case 2:return'url("https://plus.unsplash.com/premium_photo-1709932754899-5c36599fface?q=80&w=1209&auto=format&fit=crop")';default:return'url("https://images.unsplash.com/photo-1686721135030-e2ab79e27b16?q=80&w=1170&auto=format&fit=crop")'}}};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.1);
  }

  @media (min-width: 768px) {
    height: 180px;
  }
`,d4=g.div`
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
  
  h3 {
    color: #0f172a;
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 8px;
    line-height: 1.3;
  }
  
  p {
    color: #64748b;
    font-size: 0.95rem;
    margin-bottom: 20px;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`,f4=g.div`
  display: flex;
  gap: 12px;
  font-size: 0.875rem;
  color: #64748b;
  flex-wrap: wrap;
  margin-bottom: 72px;
  
  div {
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 400;
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: #94a3b8;
  }
`,pp=g.span`
  display: inline-flex;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 12px;
  background: ${i=>i.type==="club"?"#f0f9ff":"#f0fdf4"};
  color: ${i=>i.type==="club"?"#0369a1":"#166534"};
`,h4=g.button`
  width: calc(100% - 48px);
  padding: 12px 20px;
  background: ${i=>i.$isPending?"#f59e0b":"#29ba9b"};
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.95rem;
  position: absolute;
  bottom: 24px;
  left: 24px;

  &:hover:not(:disabled) {
    background: ${i=>i.$isPending?"#d97706":"#26a085"};
    transform: translateY(-1px);
  }

  &:disabled {
    background: ${i=>i.$isPending?"#f59e0b":"#e2e8f0"};
    cursor: ${i=>i.$isPending?"default":"not-allowed"};
    transform: none;
    opacity: 0.6;
    
    &:hover {
      background: ${i=>i.$isPending?"#f59e0b":"#e2e8f0"};
      transform: none;
    }
  }
`,p4=g.div`
  text-align: center;
  padding: 48px 24px;
  background: white;
  border-radius: 16px;
  color: #64748b;
  font-size: 1.1rem;
  border: 2px dashed #e2e8f0;
  margin-top: 32px;
`,m4=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px;
  color: #29ba9b;
  font-size: 1.1rem;
  gap: 12px;

  svg {
    animation: spin 1s linear infinite;
    width: 24px;
    height: 24px;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`,g4=g.div`
  text-align: center;
  padding: 24px;
  margin: 32px auto;
  max-width: 600px;
  background: #fef2f2;
  color: #dc2626;
  border-radius: 12px;
  font-size: 1rem;
  border: 1px solid #fee2e2;
  line-height: 1.6;
`,x4=g.div`
  padding: 16px 0;
  border-bottom: 1px solid #e2e8f0;

  @media (min-width: 768px) {
    padding: 24px 0;
  }
`,b4=g.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: none;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  color: #64748b;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background: #f8fafc;
    border-color: #29ba9b;
    color: #29ba9b;
  }
`,v4=g.div`
  margin-top: 24px;
`,y4=g.div`
  margin-bottom: 32px;
`,w4=g.div`
  width: 100%;
  height: 280px;
  background: ${i=>{switch(i.$imageIndex){case 0:return"#29ba9b";case 1:return"#3b82f6";case 2:return"#f59e0b";default:return"#29ba9b"}}};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3.5rem;
  font-weight: 600;

  @media (min-width: 768px) {
    height: 360px;
    font-size: 4.5rem;
  }
  
  &::before {
    content: '🏓';
    opacity: 0.9;
  }
`,S4=g.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
    gap: 48px;
  }
`,j4=g.div``,C4=g.div`
  margin-bottom: 32px;

  h1 {
    font-size: 1.75rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0;
    line-height: 1.2;

    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }
`,E4=g.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;

  @media (min-width: 640px) {
    align-items: center;
  }
`,z4=g.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
`,k4=g.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: #10b981;
  color: white;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;

  svg {
    width: 12px;
    height: 12px;
  }
`,T4=g.p`
  color: #64748b;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 32px;
  max-width: 640px;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 48px;
  }
`,po=g.div`
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 56px;
  }
`,mo=g.h3`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 24px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f1f5f9;

  svg {
    width: 20px;
    height: 20px;
    color: #64748b;
  }
`,A4=g.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #f1f5f9;
`,M4=g.div`
  padding: 20px;
  border-bottom: 1px solid #f1f5f9;

  @media (min-width: 768px) {
    padding: 24px;
  }

  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: #0f172a;
    margin-bottom: 8px;

    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
  }

  p {
    color: #64748b;
    margin-bottom: 16px;
    line-height: 1.5;
    font-size: 0.9rem;

    @media (min-width: 768px) {
      font-size: 0.95rem;
      margin-bottom: 20px;
    }
  }
`,R4=g.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  @media (min-width: 640px) {
    gap: 10px;
    flex-wrap: nowrap;
  }
`,mp=g.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: ${i=>i.$primary?"none":"1px solid #e2e8f0"};
  background: ${i=>i.$primary?"#29ba9b":"white"};
  color: ${i=>i.$primary?"white":"#64748b"};
  flex: 1;

  @media (min-width: 640px) {
    flex: none;
    padding: 10px 16px;
    font-size: 0.875rem;
  }

  svg {
    width: 14px;
    height: 14px;

    @media (min-width: 640px) {
      width: 16px;
      height: 16px;
    }
  }

  &:hover {
    background: ${i=>i.$primary?"#26a085":"#f8fafc"};
    border-color: ${i=>i.$primary?"transparent":"#29ba9b"};
    color: ${i=>i.$primary?"white":"#29ba9b"};
  }
`,D4=g.div`
  position: relative;
  height: 300px;
  background: #f1f5f9;

  @media (min-width: 768px) {
    height: 350px;
  }
`,O4=g.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
`,_4=g.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 2px;
  padding: 20px;
  opacity: 0.6;
`,N4=g.div`
  background: ${()=>{const i=["#f1f5f9","#e2e8f0","#cbd5e0","#f8fafc"];return i[Math.floor(Math.random()*i.length)]}};
  border-radius: 2px;
`,L4=g.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
`,B4=g.div`
  width: 32px;
  height: 32px;
  background: #ef4444;
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;

  svg {
    transform: rotate(45deg);
    width: 18px;
    height: 18px;
    color: white;
  }
`,U4=g.div`
  background: rgba(15, 23, 42, 0.9);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-top: 8px;
`,H4=g.div`
  background: white;
  border-radius: 12px;
  border: 1px solid #f1f5f9;
  padding: 16px;

  @media (min-width: 768px) {
    padding: 20px;
  }
`,Ol=g.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 16px 0;
  border-bottom: 1px solid #f1f5f9;

  &:last-child {
    border-bottom: none;
  }

  div {
    flex: 1;

    span {
      display: block;
      font-size: 0.75rem;
      font-weight: 500;
      color: #94a3b8;
      margin-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    p {
      font-size: 0.9rem;
      color: #0f172a;
      margin: 0;
      line-height: 1.4;
      font-weight: 400;
    }
  }
`,_l=g.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;

  svg {
    width: 16px;
    height: 16px;
    color: #10b981;
  }
`,Y4=g.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,$4=g.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: white;
  border: 1px solid #f1f5f9;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #374151;
  font-weight: 400;

  svg {
    width: 16px;
    height: 16px;
    color: #10b981;
    flex-shrink: 0;
  }
`,q4=g.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  border-radius: 12px;
  overflow: hidden;

  @media (min-width: 640px) {
    gap: 12px;
  }
`,G4=g.div`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }

  ${i=>{if(i.$total===1)return`
        grid-column: 1 / -1;
        aspect-ratio: 16 / 9;
      `;if(i.$total===2)return`
        grid-column: span 1;
      `;if(i.$total===3)return i.$index===0?`
          grid-column: span 2;
          grid-row: span 2;
        `:`
        grid-column: span 1;
      `;if(i.$total===4)return`
        grid-column: span 1;
      `;if(i.$total===5)return i.$index<2?`
          grid-column: span 1;
        `:i.$index===2?`
          grid-column: span 1;
          grid-row: span 2;
        `:`
        grid-column: span 1;
      `;if(i.$total>=6)return i.$index<2?`
          grid-column: span 1;
        `:i.$index===2?`
          grid-column: span 1;
          grid-row: span 2;
        `:`
        grid-column: span 1;
      `}}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`,V4=g.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  backdrop-filter: blur(2px);
`,X4=g.div``,Z4=g.div`
  background: white;
  border: 1px solid #f1f5f9;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @media (min-width: 1024px) {
    position: sticky;
    top: 24px;
    padding: 28px;
    border-radius: 20px;
  }
`,Q4=g.button`
  width: 100%;
  padding: 16px 24px;
  background: ${i=>i.$isPending?"#f59e0b":"#29ba9b"};
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 500;
  cursor: ${i=>i.disabled?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  opacity: ${i=>i.disabled?.6:1};
  margin-bottom: 16px;

  &:hover:not(:disabled) {
    background: ${i=>i.$isPending?"#d97706":"#26a085"};
    transform: translateY(-1px);
  }
`,K4=g.p`
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.5;
  margin: 0;
  text-align: center;
  padding: 12px 16px;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #f1f5f9;
`;function J4(){return o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",strokeLinecap:"round",strokeLinejoin:"round"})})}const W4=()=>{const{isAuthenticated:i}=Ta(),[s,c]=j.useState([]),[u,f]=j.useState(!0),[p,b]=j.useState(null),[y,x]=j.useState(""),[m,C]=j.useState("all"),[T,M]=j.useState(new Set),[N,D]=j.useState(new Set),[G,V]=j.useState(!1),[z,k]=j.useState(null),[Y,X]=j.useState(!1);j.useEffect(()=>{Q()},[]);const Q=async()=>{try{f(!0),b(null),c([{id:"1",name:"Manila Pickleball Club",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",address:"BGC, Taguig City",hours:"6:00 AM - 10:00 PM",type:"club_and_courts",members:120,createdAt:"2025-06-16T08:00:00Z",updatedAt:"2025-06-16T08:00:00Z",ownerId:"user123",contactEmail:"info@manilapickleball.com",contactPhone:"+63 912 345 6789",website:"https://manilapickleball.com",amenities:["Pro Shop","Locker Rooms","Parking"],images:[],photos:[{url:"https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&h=600&fit=crop",caption:"Main court area"},{url:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",caption:"Professional courts"},{url:"https://images.unsplash.com/photo-1526676037777-05a232c2b57c?w=800&h=600&fit=crop",caption:"Club facilities"},{url:"https://images.unsplash.com/photo-1577924111230-7f5ed91b08b8?w=800&h=600&fit=crop",caption:"Equipment storage"},{url:"https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&h=600&fit=crop",caption:"Locker rooms"},{url:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",caption:"Outdoor courts"}],isVerified:!0},{id:"2",name:"BGC Pickleball Center",description:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",address:"Bonifacio Global City, Taguig",hours:"7:00 AM - 11:00 PM",type:"club_and_courts",members:85,createdAt:"2025-06-15T10:00:00Z",updatedAt:"2025-06-15T10:00:00Z",ownerId:"user456",contactEmail:"info@bgcpickleball.com",contactPhone:"+63 917 123 4567",amenities:["Air Conditioning","Equipment Rental"],images:[],photos:[{url:"https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",caption:"Indoor courts"},{url:"https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&h=600&fit=crop",caption:"Court facilities"},{url:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",caption:"Tournament setup"}],isVerified:!0},{id:"3",name:"QC Pickleball Community",description:"Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",address:"Katipunan Avenue, Quezon City",type:"club",members:45,createdAt:"2025-06-14T09:00:00Z",updatedAt:"2025-06-14T09:00:00Z",ownerId:"user789",contactEmail:"qcpickleball@gmail.com",contactPhone:"+63 918 765 4321",images:[],photos:[{url:"https://images.unsplash.com/photo-1577924111230-7f5ed91b08b8?w=800&h=600&fit=crop",caption:"Community courts"}],isVerified:!0}])}catch(F){b(F.message||"Failed to fetch venues")}finally{f(!1)}},Z=j.useMemo(()=>{let F=s;if(y){const fe=y.toLowerCase();F=F.filter(Ce=>Ce.name.toLowerCase().includes(fe)||Ce.address.toLowerCase().includes(fe))}return m!=="all"&&(F=F.filter(fe=>m==="clubs"?fe.type==="club":m==="courts"?fe.type==="club_and_courts":!0)),F},[s,y,m]),K=async(F,fe)=>{if(F.stopPropagation(),!i){V(!0);return}try{D(Ce=>new Set([...Ce,fe])),console.log(`Join request submitted for venue ${fe}`)}catch(Ce){console.error("Failed to join venue:",Ce),D(ft=>{const pt=new Set(ft);return pt.delete(fe),pt})}},xe=F=>{k(F),X(!0)},ue=()=>{X(!1),k(null)};return u?o.jsxs(ho,{children:[o.jsx(gc,{children:"Clubs & Courts"}),o.jsx(xc,{children:"Discover pickleball venues and communities across the Philippines."}),o.jsx(m4,{children:"Loading venues..."})]}):p?o.jsxs(ho,{children:[o.jsx(gc,{children:"Clubs & Courts"}),o.jsx(xc,{children:"Discover pickleball venues and communities across the Philippines."}),o.jsx(g4,{children:p})]}):Y&&z?o.jsxs(ho,{children:[o.jsx(x4,{children:o.jsxs(b4,{onClick:ue,children:[o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7",strokeLinecap:"round",strokeLinejoin:"round"})}),"Back to Clubs & Courts"]})}),o.jsxs(v4,{children:[o.jsx(y4,{children:o.jsx(w4,{$imageIndex:s.findIndex(F=>F.id===z.id)%3})}),o.jsxs(S4,{children:[o.jsxs(j4,{children:[o.jsxs(C4,{children:[o.jsxs(E4,{children:[o.jsx("h1",{children:z.name}),z.isVerified&&o.jsxs(k4,{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M9 12l2 2 4-4",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.745 3.745 0 0 1 3.296-1.043A3.745 3.745 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12z"})]}),"Verified"]})]}),o.jsx(z4,{children:o.jsx(pp,{type:z.type==="club"?"club":"courts",children:z.type==="club"?"Club":"Club & Courts"})})]}),o.jsx(T4,{children:z.description}),o.jsxs(po,{children:[o.jsxs(mo,{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"Location & Map"]}),o.jsxs(A4,{children:[o.jsxs(M4,{children:[o.jsx("h4",{children:z.address}),o.jsx("p",{children:"Get directions to this venue and explore the surrounding area"}),o.jsxs(R4,{children:[o.jsxs(mp,{$primary:!0,children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"}),o.jsx("path",{d:"M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"})]}),"Get Directions"]}),o.jsxs(mp,{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),o.jsx("polyline",{points:"15,3 21,3 21,9"}),o.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),"Share Location"]})]})]}),o.jsx(D4,{children:o.jsxs(O4,{children:[o.jsxs(L4,{children:[o.jsx(B4,{children:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]})}),o.jsx(U4,{children:z.name})]}),o.jsx(_4,{children:Array.from({length:35},(F,fe)=>o.jsx(N4,{},fe))})]})})]})]}),o.jsxs(po,{children:[o.jsxs(mo,{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),o.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),o.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),o.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),"Venue Information"]}),o.jsxs(H4,{children:[z.type==="club_and_courts"&&o.jsxs(Ol,{children:[o.jsx(_l,{children:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("circle",{cx:"12",cy:"12",r:"10"}),o.jsx("polyline",{points:"12,6 12,12 16,14"})]})}),o.jsxs("div",{children:[o.jsx("span",{children:"Operating Hours"}),o.jsx("p",{children:z.hours})]})]}),o.jsxs(Ol,{children:[o.jsx(_l,{children:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),o.jsx("circle",{cx:"9",cy:"7",r:"4"}),o.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),o.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}),o.jsxs("div",{children:[o.jsx("span",{children:"Community Size"}),o.jsxs("p",{children:[z.members," Active Members"]})]})]}),z.contactEmail&&o.jsxs(Ol,{children:[o.jsx(_l,{children:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),o.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),o.jsxs("div",{children:[o.jsx("span",{children:"Email Contact"}),o.jsx("p",{children:z.contactEmail})]})]}),z.contactPhone&&o.jsxs(Ol,{children:[o.jsx(_l,{children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})})}),o.jsxs("div",{children:[o.jsx("span",{children:"Phone Contact"}),o.jsx("p",{children:z.contactPhone})]})]}),z.website&&o.jsxs(Ol,{children:[o.jsx(_l,{children:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("circle",{cx:"12",cy:"12",r:"10"}),o.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),o.jsx("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]})}),o.jsxs("div",{children:[o.jsx("span",{children:"Website"}),o.jsx("p",{children:z.website})]})]})]})]}),z.amenities&&z.amenities.length>0&&o.jsxs(po,{children:[o.jsxs(mo,{children:[o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})}),"Amenities & Features"]}),o.jsx(Y4,{children:z.amenities.map((F,fe)=>o.jsxs($4,{children:[o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M20 6L9 17l-5-5",strokeLinecap:"round",strokeLinejoin:"round"})}),F]},fe))})]}),z.photos&&z.photos.length>0&&o.jsxs(po,{children:[o.jsxs(mo,{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),o.jsx("circle",{cx:"9",cy:"9",r:"2"}),o.jsx("path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"})]}),"Photo Gallery"]}),o.jsx(q4,{children:z.photos.slice(0,6).map((F,fe)=>o.jsxs(G4,{$index:fe,$total:Math.min(z.photos.length,6),children:[o.jsx("img",{src:F.url,alt:F.caption||`Venue photo ${fe+1}`}),fe===5&&z.photos.length>6&&o.jsxs(V4,{children:["+",z.photos.length-6]})]},fe))})]})]}),o.jsx(X4,{children:o.jsxs(Z4,{children:[o.jsx(Q4,{onClick:F=>K(F,z.id),disabled:T.has(z.id)||N.has(z.id),$isPending:N.has(z.id),children:T.has(z.id)?"Joined":N.has(z.id)?"Pending Approval":"Join Now"}),o.jsx(K4,{children:T.has(z.id)?"You are a member of this venue":N.has(z.id)?"Your join request is pending approval from the venue administrators":"Join this venue to access exclusive features and connect with the community"})]})})]})]}),G&&o.jsx(To,{isOpen:G,onClose:()=>V(!1),title:"Join the Club!",message:"Sign in or register to join clubs and access courts"})]}):o.jsxs(ho,{children:[o.jsx(gc,{children:"Clubs & Courts"}),o.jsx(xc,{children:"Discover pickleball venues and communities across the Philippines."}),o.jsxs(i4,{children:[o.jsxs(l4,{children:[o.jsx(J4,{}),o.jsx(r4,{type:"text",placeholder:"Search by name or location...",value:y,onChange:F=>x(F.target.value)})]}),o.jsxs(o4,{children:[o.jsx(bc,{$active:m==="all",onClick:()=>C("all"),children:"All"}),o.jsx(bc,{$active:m==="clubs",onClick:()=>C("clubs"),children:"Clubs Only"}),o.jsx(bc,{$active:m==="courts",onClick:()=>C("courts"),children:"With Courts"})]})]}),Z.length===0?o.jsx(p4,{children:"No venues found matching your criteria"}):o.jsx(s4,{children:Z.map((F,fe)=>o.jsxs(u4,{onClick:()=>xe(F),children:[o.jsx(c4,{$imageIndex:fe%3}),o.jsxs(d4,{children:[o.jsx("h3",{children:F.name}),o.jsx("div",{children:o.jsx(pp,{type:F.type==="club"?"club":"courts",children:F.type==="club"?"Club":"Club & Courts"})}),o.jsx("p",{children:F.description}),o.jsxs(f4,{children:[o.jsxs("div",{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),F.address]}),F.type==="club_and_courts"&&o.jsxs("div",{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),o.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),o.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),o.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),F.hours]}),o.jsxs("div",{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),o.jsx("circle",{cx:"9",cy:"7",r:"4"}),o.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),o.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),F.members," Members"]})]}),o.jsx(h4,{onClick:Ce=>K(Ce,F.id),disabled:T.has(F.id)||N.has(F.id),$isPending:N.has(F.id),children:T.has(F.id)?"Joined":N.has(F.id)?"Pending Approval":"Join Now"})]})]},F.id))}),G&&o.jsx(To,{isOpen:G,onClose:()=>V(!1),title:"Join the Club!",message:"Sign in or register to join clubs and access courts"})]})},gm="/my-pickleball-app/assets/vite-Dq28Z1Xn.svg",P4=g.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 40px 16px;
  margin-top: -60px;
  padding-top: 112px;
  background: white;

  @media (max-width: 768px) {
    padding: 92px 0px 20px;
  }
`,F4=g.div`
  width: 100%;
  max-width: 460px;
  margin: 40px auto;
  padding: 40px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  animation: fadeIn 0.3s ease;

  @media (max-width: 768px) {
    margin: 0 auto;
    padding: 24px 16px;
    box-shadow: none;
    border-radius: 0;
    max-width: 100%;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,I4=g.div`
  text-align: center;
  margin-bottom: 32px;
`,e6=g.div`
  width: 120px;
  height: 120px;
  margin: 0 auto 16px;
  background: white;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }
`,t6=g.h1`
  color: #234255;
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 8px;
  text-align: center;
`,n6=g.p`
  color: #64748b;
  font-size: 15px;
  margin: 0 0 32px;
  text-align: center;
`,a6=g.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,gp=g.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,xp=g.label`
  color: #475569;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,i6=g.div`
  position: relative;
`,bp=g.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 15px;
  background: white;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
    font-size: 14px;
  }

  ${i=>i.$hasPassword&&`
    padding-right: 48px;
  `}

  ${i=>i.$hasError&&`
    border-color: #ef4444;
    &:focus {
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
  `}
`,l6=g.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  width: 24px;
  height: 24px;
  outline: none;
  
  &:hover {
    color: #475569;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:active {
    outline: none;
    box-shadow: none;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`,r6=g.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: -8px;
`,o6=g.input`
  width: 16px;
  height: 16px;
  accent-color: #29ba9b;
`,s6=g.label`
  color: #475569;
  font-size: 14px;
  cursor: pointer;
`,u6=g.a`
  color: #29ba9b;
  font-size: 14px;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`,c6=g.button`
  background: #29ba9b;
  color: white;
  padding: 14px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  overflow: hidden;

  &:hover {
    background: #239b83;
  }

  &:disabled {
    background: #e2e8f0;
    cursor: not-allowed;
  }

  ${i=>i.$loading&&`
    color: transparent;
    
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      width: 20px;
      height: 20px;
      border: 2px solid transparent;
      border-top-color: white;
      border-right-color: white;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  `}
`,d6=g.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 24px 0;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #e2e8f0;
  }
  
  span {
    color: #64748b;
    font-size: 14px;
  }
`,f6=g.div`
  display: flex;
  gap: 16px;
`,h6=g.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  background: white;
  color: #475569;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,vc=g.div`
  color: #ef4444;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`,p6=g.p`
  text-align: center;
  margin: 24px 0 0;
  color: #64748b;
  font-size: 14px;

  a {
    color: #29ba9b;
    text-decoration: none;
    font-weight: 500;
    margin-left: 4px;

    &:hover {
      text-decoration: underline;
    }
  }
`,m6=()=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),o.jsx("path",{d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}),g6=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"})}),yc=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),x6=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:o.jsx("path",{d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"})}),b6=()=>{const i=Gl(),[s,c]=j.useState({email:"",password:""}),[u,f]=j.useState(!1),[p,b]=j.useState(!1),[y,x]=j.useState({}),[m,C]=j.useState(!1),T=z=>{var X;const k=["gmail.com","yahoo.com","hotmail.com","outlook.com","icloud.com","protonmail.com","zoho.com","aol.com","live.com","msn.com"],Y=(X=z.split("@")[1])==null?void 0:X.toLowerCase();return k.includes(Y)},M=()=>{const z={};return s.email?/\S+@\S+\.\S+/.test(s.email)?T(s.email)||(z.email="Please use a valid email provider (Gmail, Yahoo, Outlook, etc.)"):z.email="Please enter a valid email":z.email="Email is required",s.password?s.password.length<6&&(z.password="Password must be at least 6 characters"):z.password="Password is required",x(z),Object.keys(z).length===0},N=z=>{const{name:k,value:Y}=z.target;c(X=>({...X,[k]:Y})),y[k]&&x(X=>({...X,[k]:""}))},{login:D}=Ta(),G=async z=>{if(z.preventDefault(),!!M()){C(!0);try{const k=await fetch("http://localhost:5000/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s.email,password:s.password})}),Y=await k.json();if(!k.ok)throw new Error(Y.message||"Login failed");const X=p?localStorage:sessionStorage;X.setItem("token",Y.token),X.setItem("user",JSON.stringify(Y.user)),D(Y.user,Y.token),i("/")}catch(k){x(Y=>({...Y,submit:k.message||"Failed to sign in. Please try again."}))}finally{C(!1)}}},V=async z=>{try{console.log(`Signing in with ${z}`)}catch{x(Y=>({...Y,submit:`Failed to sign in with ${z}. Please try again.`}))}};return o.jsx(P4,{children:o.jsxs(F4,{children:[o.jsxs(I4,{children:[o.jsx(e6,{children:o.jsx("img",{src:gm,alt:"Vite Logo"})}),o.jsx(t6,{children:"Welcome Back"}),o.jsx(n6,{children:"Sign in to Philippine Pickleball League"})]}),o.jsxs(a6,{onSubmit:G,children:[o.jsxs(gp,{children:[o.jsx(xp,{htmlFor:"email",children:"Email"}),o.jsx(bp,{type:"email",id:"email",name:"email",placeholder:"Enter your email",value:s.email,onChange:N,required:!0,autoComplete:"email",$hasError:!!y.email}),y.email&&o.jsxs(vc,{children:[o.jsx(yc,{}),y.email]})]}),o.jsxs(gp,{children:[o.jsxs(xp,{htmlFor:"password",children:["Password",o.jsx(u6,{href:"/forgot-password",children:"Forgot password?"})]}),o.jsxs(i6,{children:[o.jsx(bp,{type:u?"text":"password",id:"password",name:"password",placeholder:"Enter your password",value:s.password,onChange:N,required:!0,autoComplete:"current-password",$hasError:!!y.password,$hasPassword:!0}),o.jsx(l6,{type:"button",onClick:()=>f(!u),"aria-label":u?"Hide password":"Show password",children:u?o.jsx(g6,{}):o.jsx(m6,{})})]}),y.password&&o.jsxs(vc,{children:[o.jsx(yc,{}),y.password]})]}),o.jsxs(r6,{children:[o.jsx(o6,{type:"checkbox",id:"rememberMe",checked:p,onChange:z=>b(z.target.checked)}),o.jsx(s6,{htmlFor:"rememberMe",children:"Remember me"})]}),o.jsx(c6,{type:"submit",disabled:m,$loading:m,children:m?"Signing in...":"Sign in"}),y.submit&&o.jsxs(vc,{children:[o.jsx(yc,{}),y.submit]})]}),o.jsx(d6,{children:o.jsx("span",{children:"or continue with"})}),o.jsx(f6,{children:o.jsxs(h6,{onClick:()=>V("Google"),children:[o.jsx(x6,{}),"Google"]})}),o.jsxs(p6,{children:["Don't have an account?",o.jsx("a",{href:"/register",children:"Create one"})]})]})})},v6=g.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 40px 16px;
  margin-top: -60px;
  padding-top: 112px;
  background: white;

  @media (max-width: 768px) {
    padding: 92px 0px 20px;
  }
`,y6=g.div`
  width: 100%;
  max-width: 460px;
  margin: 40px auto;
  padding: 40px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  animation: fadeIn 0.3s ease;

  @media (max-width: 768px) {
    margin: 0 auto;
    padding: 24px 16px;
    box-shadow: none;
    border-radius: 0;
    max-width: 100%;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,w6=g.div`
  text-align: center;
  margin-bottom: 32px;
`,S6=g.div`
  width: 120px;
  height: 120px;
  margin: 0 auto 16px;
  background: white;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }
`,j6=g.h1`
  color: #234255;
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 8px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
    margin: 0 0 6px;
  }
`,C6=g.p`
  color: #64748b;
  font-size: 15px;
  margin: 0 0 32px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
    margin: 0 0 24px;
  }
`,E6=g.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`,ja=g.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ca=g.label`
  color: #475569;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,vp=g.div`
  position: relative;
`,vi=g.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 15px;
  background: white;
  transition: all 0.2s;

  @media (max-width: 768px) {
    padding: 10px 14px;
    font-size: 14px;
  }

  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
    font-size: 14px;
  }

  ${i=>i.$hasPassword&&`
    padding-right: 48px;
    
    @media (max-width: 768px) {
      padding-right: 44px;
    }
  `}

  ${i=>i.$hasError&&`
    border-color: #ef4444;
    &:focus {
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
  `}
`,z6=g.select`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 15px;
  background: white;
  color: #234255;
  transition: all 0.2s;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 16px;

  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }

  ${i=>i.$hasError&&`
    border-color: #ef4444;
    &:focus {
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
  `}
`,yp=g.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  width: 24px;
  height: 24px;
  outline: none;
  
  &:hover {
    color: #475569;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:active {
    outline: none;
    box-shadow: none;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`,k6=g.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 4px;
`,Nl=g.span`
  color: ${i=>i.$met?"#10b981":"#94a3b8"};
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    width: 14px;
    height: 14px;
  }
`,T6=g.button`
  background: #29ba9b;
  color: white;
  padding: 14px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 15px;
  }

  &:hover {
    background: #239b83;
  }

  &:disabled {
    background: #e2e8f0;
    cursor: not-allowed;
  }

  ${i=>i.$loading&&`
    color: transparent;
    
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      width: 20px;
      height: 20px;
      border: 2px solid transparent;
      border-top-color: white;
      border-right-color: white;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  `}
`,In=g.div`
  color: #ef4444;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`,A6=g.p`
  text-align: center;
  margin: 24px 0 0;
  color: #64748b;
  font-size: 14px;

  a {
    color: #29ba9b;
    text-decoration: none;
    font-weight: 500;
    margin-left: 4px;

    &:hover {
      text-decoration: underline;
    }
  }
`,M6=g.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 24px 0;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #e2e8f0;
  }
  
  span {
    color: #64748b;
    font-size: 14px;
  }
`,R6=g.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`,D6=g.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  background: white;
  color: #475569;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  @media (max-width: 768px) {
    padding: 10px;
  }

  &:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,wp=()=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),o.jsx("path",{d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}),Sp=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"})}),Ll=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M5 13l4 4L19 7"})}),ea=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),O6=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:o.jsx("path",{d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"})}),_6=()=>{const i=Gl(),[s,c]=j.useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:"",birthDate:"",gender:""}),[u,f]=j.useState(!1),[p,b]=j.useState(!1),[y,x]=j.useState({}),[m,C]=j.useState(!1),T={length:s.password.length>=8,uppercase:/[A-Z]/.test(s.password),lowercase:/[a-z]/.test(s.password),number:/[0-9]/.test(s.password),special:/[!@#$%^&*]/.test(s.password)},M=k=>{var Q;const Y=["gmail.com","yahoo.com","hotmail.com","outlook.com","icloud.com","protonmail.com","zoho.com","aol.com","live.com","msn.com"],X=(Q=k.split("@")[1])==null?void 0:Q.toLowerCase();return Y.includes(X)},N=()=>{const k={};return s.firstName.trim()||(k.firstName="First name is required"),s.lastName.trim()||(k.lastName="Last name is required"),s.email?/\S+@\S+\.\S+/.test(s.email)?M(s.email)||(k.email="Please use a valid email provider (Gmail, Yahoo, Outlook, etc.)"):k.email="Please enter a valid email":k.email="Email is required",s.password?Object.values(T).every(Boolean)||(k.password="Password does not meet requirements"):k.password="Password is required",s.confirmPassword?s.password!==s.confirmPassword&&(k.confirmPassword="Passwords do not match"):k.confirmPassword="Please confirm your password",s.birthDate?new Date().getFullYear()-new Date(s.birthDate).getFullYear()<13&&(k.birthDate="You must be at least 13 years old"):k.birthDate="Birth date is required",s.gender||(k.gender="Gender is required"),x(k),Object.keys(k).length===0},D=k=>{const{name:Y,value:X}=k.target;c(Q=>({...Q,[Y]:X})),y[Y]&&x(Q=>({...Q,[Y]:""}))},{login:G}=Ta(),V=async k=>{if(k.preventDefault(),!!N()){C(!0);try{const Y=await fetch("http://localhost:5000/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:s.firstName,lastName:s.lastName,email:s.email,password:s.password,birthDate:s.birthDate,gender:s.gender})}),X=await Y.json();if(!Y.ok)throw new Error(X.message||"Registration failed");localStorage.setItem("token",X.token),localStorage.setItem("user",JSON.stringify(X.user)),G(X.user,X.token),i("/")}catch(Y){x(X=>({...X,submit:Y.message}))}finally{C(!1)}}},z=async k=>{try{console.log(`Signing up with ${k}`)}catch{x(X=>({...X,submit:`Failed to sign up with ${k}. Please try again.`}))}};return o.jsx(v6,{children:o.jsxs(y6,{children:[o.jsxs(w6,{children:[o.jsx(S6,{children:o.jsx("img",{src:gm,alt:"Vite Logo"})}),o.jsx(j6,{children:"Create Account"}),o.jsx(C6,{children:"Join the Philippine Pickleball League"})]}),o.jsxs(E6,{onSubmit:V,children:[o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:"16px"},children:[o.jsxs(ja,{children:[o.jsx(Ca,{htmlFor:"firstName",children:"First Name"}),o.jsx(vi,{type:"text",id:"firstName",name:"firstName",placeholder:"Enter first name",value:s.firstName,onChange:D,required:!0,$hasError:!!y.firstName}),y.firstName&&o.jsxs(In,{children:[o.jsx(ea,{}),y.firstName]})]}),o.jsxs(ja,{children:[o.jsx(Ca,{htmlFor:"lastName",children:"Last Name"}),o.jsx(vi,{type:"text",id:"lastName",name:"lastName",placeholder:"Enter last name",value:s.lastName,onChange:D,required:!0,$hasError:!!y.lastName}),y.lastName&&o.jsxs(In,{children:[o.jsx(ea,{}),y.lastName]})]})]}),o.jsxs(ja,{children:[o.jsx(Ca,{htmlFor:"email",children:"Email"}),o.jsx(vi,{type:"email",id:"email",name:"email",placeholder:"Enter your email",value:s.email,onChange:D,required:!0,autoComplete:"email",$hasError:!!y.email}),y.email&&o.jsxs(In,{children:[o.jsx(ea,{}),y.email]})]}),o.jsxs(ja,{children:[o.jsx(Ca,{htmlFor:"birthDate",children:"Birth Date"}),o.jsx(vi,{type:"date",id:"birthDate",name:"birthDate",value:s.birthDate,onChange:D,required:!0,$hasError:!!y.birthDate}),y.birthDate&&o.jsxs(In,{children:[o.jsx(ea,{}),y.birthDate]})]}),o.jsxs(ja,{children:[o.jsx(Ca,{htmlFor:"gender",children:"Gender"}),o.jsxs(z6,{id:"gender",name:"gender",value:s.gender,onChange:D,required:!0,$hasError:!!y.gender,children:[o.jsx("option",{value:"",children:"Select your gender"}),o.jsx("option",{value:"male",children:"Male"}),o.jsx("option",{value:"female",children:"Female"})]}),y.gender&&o.jsxs(In,{children:[o.jsx(ea,{}),y.gender]})]}),o.jsxs(ja,{children:[o.jsx(Ca,{htmlFor:"password",children:"Password"}),o.jsxs(vp,{children:[o.jsx(vi,{type:u?"text":"password",id:"password",name:"password",placeholder:"Create a password",value:s.password,onChange:D,required:!0,$hasError:!!y.password,$hasPassword:!0}),o.jsx(yp,{type:"button",onClick:()=>f(!u),"aria-label":u?"Hide password":"Show password",children:u?o.jsx(Sp,{}):o.jsx(wp,{})})]}),o.jsxs(k6,{children:[o.jsxs(Nl,{$met:T.length,children:[T.length?o.jsx(Ll,{}):"•"," At least 8 characters"]}),o.jsxs(Nl,{$met:T.uppercase,children:[T.uppercase?o.jsx(Ll,{}):"•"," One uppercase letter"]}),o.jsxs(Nl,{$met:T.lowercase,children:[T.lowercase?o.jsx(Ll,{}):"•"," One lowercase letter"]}),o.jsxs(Nl,{$met:T.number,children:[T.number?o.jsx(Ll,{}):"•"," One number"]}),o.jsxs(Nl,{$met:T.special,children:[T.special?o.jsx(Ll,{}):"•"," One special character"]})]}),y.password&&o.jsxs(In,{children:[o.jsx(ea,{}),y.password]})]}),o.jsxs(ja,{children:[o.jsx(Ca,{htmlFor:"confirmPassword",children:"Confirm Password"}),o.jsxs(vp,{children:[o.jsx(vi,{type:p?"text":"password",id:"confirmPassword",name:"confirmPassword",placeholder:"Confirm your password",value:s.confirmPassword,onChange:D,required:!0,$hasError:!!y.confirmPassword,$hasPassword:!0}),o.jsx(yp,{type:"button",onClick:()=>b(!p),"aria-label":p?"Hide password":"Show password",children:p?o.jsx(Sp,{}):o.jsx(wp,{})})]}),y.confirmPassword&&o.jsxs(In,{children:[o.jsx(ea,{}),y.confirmPassword]})]}),o.jsx(T6,{type:"submit",disabled:m,$loading:m,children:m?"Creating account...":"Create account"}),y.submit&&o.jsxs(In,{children:[o.jsx(ea,{}),y.submit]})]}),o.jsx(M6,{children:o.jsx("span",{children:"or sign up with"})}),o.jsx(R6,{children:o.jsxs(D6,{onClick:()=>z("Google"),children:[o.jsx(O6,{}),"Google"]})}),o.jsxs(A6,{children:["Already have an account?",o.jsx("a",{href:"/signin",children:"Sign in"})]})]})})};function N6(){const{notification:i,hideNotification:s}=Ta();return o.jsxs("div",{className:"app",children:[o.jsx(kb,{}),o.jsxs(Ax,{children:[o.jsx(ta,{path:"/",element:o.jsx(lv,{})}),o.jsx(ta,{path:"/forum",element:o.jsx(Iv,{})}),o.jsx(ta,{path:"/tournament",element:o.jsx(Ey,{})}),o.jsx(ta,{path:"/ranks",element:o.jsx(a4,{})}),o.jsx(ta,{path:"/clubs-courts",element:o.jsx(W4,{})}),o.jsx(ta,{path:"/signin",element:o.jsx(b6,{})}),o.jsx(ta,{path:"/register",element:o.jsx(_6,{})})]}),o.jsx(_b,{}),o.jsx(Gb,{message:i.message,type:i.type,isVisible:i.isVisible,onClose:s})]})}function L6(){return o.jsx(u2,{children:o.jsx(N6,{})})}U1.createRoot(document.getElementById("root")).render(o.jsx(wi.StrictMode,{children:o.jsx(Ix,{basename:"/my-pickleball-app",children:o.jsx(L6,{})})}));
