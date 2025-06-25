(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const b of p.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&u(b)}).observe(document,{childList:!0,subtree:!0});function c(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function u(d){if(d.ep)return;d.ep=!0;const p=c(d);fetch(d.href,p)}})();function Sp(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Zu={exports:{}},zl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0;function zg(){if(j0)return zl;j0=1;var i=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function c(u,d,p){var b=null;if(p!==void 0&&(b=""+p),d.key!==void 0&&(b=""+d.key),"key"in d){p={};for(var w in d)w!=="key"&&(p[w]=d[w])}else p=d;return d=p.ref,{$$typeof:i,type:u,key:b,ref:d!==void 0?d:null,props:p}}return zl.Fragment=s,zl.jsx=c,zl.jsxs=c,zl}var C0;function kg(){return C0||(C0=1,Zu.exports=zg()),Zu.exports}var o=kg(),Qu={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E0;function Ag(){if(E0)return fe;E0=1;var i=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),b=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),A=Symbol.iterator;function D(y){return y===null||typeof y!="object"?null:(y=A&&y[A]||y["@@iterator"],typeof y=="function"?y:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,$={};function X(y,q,K){this.props=y,this.context=q,this.refs=$,this.updater=K||L}X.prototype.isReactComponent={},X.prototype.setState=function(y,q){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,q,"setState")},X.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function E(){}E.prototype=X.prototype;function R(y,q,K){this.props=y,this.context=q,this.refs=$,this.updater=K||L}var V=R.prototype=new E;V.constructor=R,M(V,X.prototype),V.isPureReactComponent=!0;var Z=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function Q(y,q,K,W,ee,ce){return K=ce.ref,{$$typeof:i,type:y,key:q,ref:K!==void 0?K:null,props:ce}}function ge(y,q){return Q(y.type,q,void 0,void 0,void 0,y.props)}function ue(y){return typeof y=="object"&&y!==null&&y.$$typeof===i}function F(y){var q={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(K){return q[K]})}var ye=/\/+/g;function je(y,q){return typeof y=="object"&&y!==null&&y.key!=null?F(""+y.key):q.toString(36)}function ft(){}function pt(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(ft,ft):(y.status="pending",y.then(function(q){y.status==="pending"&&(y.status="fulfilled",y.value=q)},function(q){y.status==="pending"&&(y.status="rejected",y.reason=q)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function Ve(y,q,K,W,ee){var ce=typeof y;(ce==="undefined"||ce==="boolean")&&(y=null);var ne=!1;if(y===null)ne=!0;else switch(ce){case"bigint":case"string":case"number":ne=!0;break;case"object":switch(y.$$typeof){case i:case s:ne=!0;break;case C:return ne=y._init,Ve(ne(y._payload),q,K,W,ee)}}if(ne)return ee=ee(y),ne=W===""?"."+je(y,0):W,Z(ee)?(K="",ne!=null&&(K=ne.replace(ye,"$&/")+"/"),Ve(ee,q,K,"",function(We){return We})):ee!=null&&(ue(ee)&&(ee=ge(ee,K+(ee.key==null||y&&y.key===ee.key?"":(""+ee.key).replace(ye,"$&/")+"/")+ne)),q.push(ee)),1;ne=0;var Ge=W===""?".":W+":";if(Z(y))for(var we=0;we<y.length;we++)W=y[we],ce=Ge+je(W,we),ne+=Ve(W,q,K,ce,ee);else if(we=D(y),typeof we=="function")for(y=we.call(y),we=0;!(W=y.next()).done;)W=W.value,ce=Ge+je(W,we++),ne+=Ve(W,q,K,ce,ee);else if(ce==="object"){if(typeof y.then=="function")return Ve(pt(y),q,K,W,ee);throw q=String(y),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return ne}function N(y,q,K){if(y==null)return y;var W=[],ee=0;return Ve(y,W,"","",function(ce){return q.call(K,ce,ee++)}),W}function J(y){if(y._status===-1){var q=y._result;q=q(),q.then(function(K){(y._status===0||y._status===-1)&&(y._status=1,y._result=K)},function(K){(y._status===0||y._status===-1)&&(y._status=2,y._result=K)}),y._status===-1&&(y._status=0,y._result=q)}if(y._status===1)return y._result.default;throw y._result}var ie=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)};function pe(){}return fe.Children={map:N,forEach:function(y,q,K){N(y,function(){q.apply(this,arguments)},K)},count:function(y){var q=0;return N(y,function(){q++}),q},toArray:function(y){return N(y,function(q){return q})||[]},only:function(y){if(!ue(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},fe.Component=X,fe.Fragment=c,fe.Profiler=d,fe.PureComponent=R,fe.StrictMode=u,fe.Suspense=x,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,fe.__COMPILER_RUNTIME={__proto__:null,c:function(y){return P.H.useMemoCache(y)}},fe.cache=function(y){return function(){return y.apply(null,arguments)}},fe.cloneElement=function(y,q,K){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var W=M({},y.props),ee=y.key,ce=void 0;if(q!=null)for(ne in q.ref!==void 0&&(ce=void 0),q.key!==void 0&&(ee=""+q.key),q)!G.call(q,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&q.ref===void 0||(W[ne]=q[ne]);var ne=arguments.length-2;if(ne===1)W.children=K;else if(1<ne){for(var Ge=Array(ne),we=0;we<ne;we++)Ge[we]=arguments[we+2];W.children=Ge}return Q(y.type,ee,void 0,void 0,ce,W)},fe.createContext=function(y){return y={$$typeof:b,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:p,_context:y},y},fe.createElement=function(y,q,K){var W,ee={},ce=null;if(q!=null)for(W in q.key!==void 0&&(ce=""+q.key),q)G.call(q,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(ee[W]=q[W]);var ne=arguments.length-2;if(ne===1)ee.children=K;else if(1<ne){for(var Ge=Array(ne),we=0;we<ne;we++)Ge[we]=arguments[we+2];ee.children=Ge}if(y&&y.defaultProps)for(W in ne=y.defaultProps,ne)ee[W]===void 0&&(ee[W]=ne[W]);return Q(y,ce,void 0,void 0,null,ee)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(y){return{$$typeof:w,render:y}},fe.isValidElement=ue,fe.lazy=function(y){return{$$typeof:C,_payload:{_status:-1,_result:y},_init:J}},fe.memo=function(y,q){return{$$typeof:m,type:y,compare:q===void 0?null:q}},fe.startTransition=function(y){var q=P.T,K={};P.T=K;try{var W=y(),ee=P.S;ee!==null&&ee(K,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(pe,ie)}catch(ce){ie(ce)}finally{P.T=q}},fe.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},fe.use=function(y){return P.H.use(y)},fe.useActionState=function(y,q,K){return P.H.useActionState(y,q,K)},fe.useCallback=function(y,q){return P.H.useCallback(y,q)},fe.useContext=function(y){return P.H.useContext(y)},fe.useDebugValue=function(){},fe.useDeferredValue=function(y,q){return P.H.useDeferredValue(y,q)},fe.useEffect=function(y,q,K){var W=P.H;if(typeof K=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return W.useEffect(y,q)},fe.useId=function(){return P.H.useId()},fe.useImperativeHandle=function(y,q,K){return P.H.useImperativeHandle(y,q,K)},fe.useInsertionEffect=function(y,q){return P.H.useInsertionEffect(y,q)},fe.useLayoutEffect=function(y,q){return P.H.useLayoutEffect(y,q)},fe.useMemo=function(y,q){return P.H.useMemo(y,q)},fe.useOptimistic=function(y,q){return P.H.useOptimistic(y,q)},fe.useReducer=function(y,q,K){return P.H.useReducer(y,q,K)},fe.useRef=function(y){return P.H.useRef(y)},fe.useState=function(y){return P.H.useState(y)},fe.useSyncExternalStore=function(y,q,K){return P.H.useSyncExternalStore(y,q,K)},fe.useTransition=function(){return P.H.useTransition()},fe.version="19.1.0",fe}var z0;function kc(){return z0||(z0=1,Qu.exports=Ag()),Qu.exports}var j=kc();const yi=Sp(j);var Ku={exports:{}},kl={},Ju={exports:{}},Wu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k0;function Tg(){return k0||(k0=1,function(i){function s(N,J){var ie=N.length;N.push(J);e:for(;0<ie;){var pe=ie-1>>>1,y=N[pe];if(0<d(y,J))N[pe]=J,N[ie]=y,ie=pe;else break e}}function c(N){return N.length===0?null:N[0]}function u(N){if(N.length===0)return null;var J=N[0],ie=N.pop();if(ie!==J){N[0]=ie;e:for(var pe=0,y=N.length,q=y>>>1;pe<q;){var K=2*(pe+1)-1,W=N[K],ee=K+1,ce=N[ee];if(0>d(W,ie))ee<y&&0>d(ce,W)?(N[pe]=ce,N[ee]=ie,pe=ee):(N[pe]=W,N[K]=ie,pe=K);else if(ee<y&&0>d(ce,ie))N[pe]=ce,N[ee]=ie,pe=ee;else break e}}return J}function d(N,J){var ie=N.sortIndex-J.sortIndex;return ie!==0?ie:N.id-J.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;i.unstable_now=function(){return p.now()}}else{var b=Date,w=b.now();i.unstable_now=function(){return b.now()-w}}var x=[],m=[],C=1,A=null,D=3,L=!1,M=!1,$=!1,X=!1,E=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function Z(N){for(var J=c(m);J!==null;){if(J.callback===null)u(m);else if(J.startTime<=N)u(m),J.sortIndex=J.expirationTime,s(x,J);else break;J=c(m)}}function P(N){if($=!1,Z(N),!M)if(c(x)!==null)M=!0,G||(G=!0,je());else{var J=c(m);J!==null&&Ve(P,J.startTime-N)}}var G=!1,Q=-1,ge=5,ue=-1;function F(){return X?!0:!(i.unstable_now()-ue<ge)}function ye(){if(X=!1,G){var N=i.unstable_now();ue=N;var J=!0;try{e:{M=!1,$&&($=!1,R(Q),Q=-1),L=!0;var ie=D;try{t:{for(Z(N),A=c(x);A!==null&&!(A.expirationTime>N&&F());){var pe=A.callback;if(typeof pe=="function"){A.callback=null,D=A.priorityLevel;var y=pe(A.expirationTime<=N);if(N=i.unstable_now(),typeof y=="function"){A.callback=y,Z(N),J=!0;break t}A===c(x)&&u(x),Z(N)}else u(x);A=c(x)}if(A!==null)J=!0;else{var q=c(m);q!==null&&Ve(P,q.startTime-N),J=!1}}break e}finally{A=null,D=ie,L=!1}J=void 0}}finally{J?je():G=!1}}}var je;if(typeof V=="function")je=function(){V(ye)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,pt=ft.port2;ft.port1.onmessage=ye,je=function(){pt.postMessage(null)}}else je=function(){E(ye,0)};function Ve(N,J){Q=E(function(){N(i.unstable_now())},J)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(N){N.callback=null},i.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ge=0<N?Math.floor(1e3/N):5},i.unstable_getCurrentPriorityLevel=function(){return D},i.unstable_next=function(N){switch(D){case 1:case 2:case 3:var J=3;break;default:J=D}var ie=D;D=J;try{return N()}finally{D=ie}},i.unstable_requestPaint=function(){X=!0},i.unstable_runWithPriority=function(N,J){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var ie=D;D=N;try{return J()}finally{D=ie}},i.unstable_scheduleCallback=function(N,J,ie){var pe=i.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?pe+ie:pe):ie=pe,N){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=ie+y,N={id:C++,callback:J,priorityLevel:N,startTime:ie,expirationTime:y,sortIndex:-1},ie>pe?(N.sortIndex=ie,s(m,N),c(x)===null&&N===c(m)&&($?(R(Q),Q=-1):$=!0,Ve(P,ie-pe))):(N.sortIndex=y,s(x,N),M||L||(M=!0,G||(G=!0,je()))),N},i.unstable_shouldYield=F,i.unstable_wrapCallback=function(N){var J=D;return function(){var ie=D;D=J;try{return N.apply(this,arguments)}finally{D=ie}}}}(Wu)),Wu}var A0;function Mg(){return A0||(A0=1,Ju.exports=Tg()),Ju.exports}var Pu={exports:{}},ct={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T0;function Rg(){if(T0)return ct;T0=1;var i=kc();function s(x){var m="https://react.dev/errors/"+x;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)m+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+x+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var u={d:{f:c,r:function(){throw Error(s(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},d=Symbol.for("react.portal");function p(x,m,C){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:A==null?null:""+A,children:x,containerInfo:m,implementation:C}}var b=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function w(x,m){if(x==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,ct.createPortal=function(x,m){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(s(299));return p(x,m,null,C)},ct.flushSync=function(x){var m=b.T,C=u.p;try{if(b.T=null,u.p=2,x)return x()}finally{b.T=m,u.p=C,u.d.f()}},ct.preconnect=function(x,m){typeof x=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,u.d.C(x,m))},ct.prefetchDNS=function(x){typeof x=="string"&&u.d.D(x)},ct.preinit=function(x,m){if(typeof x=="string"&&m&&typeof m.as=="string"){var C=m.as,A=w(C,m.crossOrigin),D=typeof m.integrity=="string"?m.integrity:void 0,L=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;C==="style"?u.d.S(x,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:A,integrity:D,fetchPriority:L}):C==="script"&&u.d.X(x,{crossOrigin:A,integrity:D,fetchPriority:L,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ct.preinitModule=function(x,m){if(typeof x=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var C=w(m.as,m.crossOrigin);u.d.M(x,{crossOrigin:C,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&u.d.M(x)},ct.preload=function(x,m){if(typeof x=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var C=m.as,A=w(C,m.crossOrigin);u.d.L(x,C,{crossOrigin:A,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ct.preloadModule=function(x,m){if(typeof x=="string")if(m){var C=w(m.as,m.crossOrigin);u.d.m(x,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:C,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else u.d.m(x)},ct.requestFormReset=function(x){u.d.r(x)},ct.unstable_batchedUpdates=function(x,m){return x(m)},ct.useFormState=function(x,m,C){return b.H.useFormState(x,m,C)},ct.useFormStatus=function(){return b.H.useHostTransitionStatus()},ct.version="19.1.0",ct}var M0;function Dg(){if(M0)return Pu.exports;M0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}return i(),Pu.exports=Rg(),Pu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R0;function Og(){if(R0)return kl;R0=1;var i=Mg(),s=kc(),c=Dg();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w(e){if(p(e)!==e)throw Error(u(188))}function x(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var r=l.alternate;if(r===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===n)return w(l),e;if(r===a)return w(l),t;r=r.sibling}throw Error(u(188))}if(n.return!==a.return)n=l,a=r;else{for(var f=!1,h=l.child;h;){if(h===n){f=!0,n=l,a=r;break}if(h===a){f=!0,a=l,n=r;break}h=h.sibling}if(!f){for(h=r.child;h;){if(h===n){f=!0,n=r,a=l;break}if(h===a){f=!0,a=r,n=l;break}h=h.sibling}if(!f)throw Error(u(189))}}if(n.alternate!==a)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var C=Object.assign,A=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),R=Symbol.for("react.consumer"),V=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),ue=Symbol.for("react.activity"),F=Symbol.for("react.memo_cache_sentinel"),ye=Symbol.iterator;function je(e){return e===null||typeof e!="object"?null:(e=ye&&e[ye]||e["@@iterator"],typeof e=="function"?e:null)}var ft=Symbol.for("react.client.reference");function pt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ft?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case X:return"Profiler";case $:return"StrictMode";case P:return"Suspense";case G:return"SuspenseList";case ue:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case L:return"Portal";case V:return(e.displayName||"Context")+".Provider";case R:return(e._context.displayName||"Context")+".Consumer";case Z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return t=e.displayName||null,t!==null?t:pt(e.type)||"Memo";case ge:t=e._payload,e=e._init;try{return pt(e(t))}catch{}}return null}var Ve=Array.isArray,N=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},pe=[],y=-1;function q(e){return{current:e}}function K(e){0>y||(e.current=pe[y],pe[y]=null,y--)}function W(e,t){y++,pe[y]=e.current,e.current=t}var ee=q(null),ce=q(null),ne=q(null),Ge=q(null);function we(e,t){switch(W(ne,t),W(ce,e),W(ee,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ph(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ph(t),e=Fh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}K(ee),W(ee,e)}function We(){K(ee),K(ce),K(ne)}function Jt(e){e.memoizedState!==null&&W(Ge,e);var t=ee.current,n=Fh(t,e.type);t!==n&&(W(ce,e),W(ee,n))}function St(e){ce.current===e&&(K(ee),K(ce)),Ge.current===e&&(K(Ge),wl._currentValue=ie)}var mt=Object.prototype.hasOwnProperty,$t=i.unstable_scheduleCallback,Ti=i.unstable_cancelCallback,za=i.unstable_shouldYield,Gl=i.unstable_requestPaint,jt=i.unstable_now,Xl=i.unstable_getCurrentPriorityLevel,Mi=i.unstable_ImmediatePriority,Ri=i.unstable_UserBlockingPriority,na=i.unstable_NormalPriority,Oo=i.unstable_LowPriority,Zl=i.unstable_IdlePriority,_o=i.log,No=i.unstable_setDisableYieldValue,kn=null,dt=null;function Vt(e){if(typeof _o=="function"&&No(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(kn,e)}catch{}}var it=Math.clz32?Math.clz32:Bo,ka=Math.log,Lo=Math.LN2;function Bo(e){return e>>>=0,e===0?32:31-(ka(e)/Lo|0)|0}var Aa=256,aa=4194304;function Wt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ta(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,r=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var h=a&134217727;return h!==0?(a=h&~r,a!==0?l=Wt(a):(f&=h,f!==0?l=Wt(f):n||(n=h&~e,n!==0&&(l=Wt(n))))):(h=a&~r,h!==0?l=Wt(h):f!==0?l=Wt(f):n||(n=a&~e,n!==0&&(l=Wt(n)))),l===0?0:t!==0&&t!==l&&(t&r)===0&&(r=l&-l,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:l}function H(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function le(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ze(){var e=Aa;return Aa<<=1,(Aa&4194048)===0&&(Aa=256),e}function I(){var e=aa;return aa<<=1,(aa&62914560)===0&&(aa=4194304),e}function ve(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ae(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ne(e,t,n,a,l,r){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var h=e.entanglements,v=e.expirationTimes,T=e.hiddenUpdates;for(n=f&~n;0<n;){var B=31-it(n),Y=1<<B;h[B]=0,v[B]=-1;var O=T[B];if(O!==null)for(T[B]=null,B=0;B<O.length;B++){var _=O[B];_!==null&&(_.lane&=-536870913)}n&=~Y}a!==0&&An(e,a,0),r!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=r&~(f&~t))}function An(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-it(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194090}function Tn(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-it(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function Gt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function on(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ql(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:x0(e.type))}function mm(e,t){var n=J.p;try{return J.p=e,t()}finally{J.p=n}}var Mn=Math.random().toString(36).slice(2),st="__reactFiber$"+Mn,gt="__reactProps$"+Mn,Ma="__reactContainer$"+Mn,Uo="__reactEvents$"+Mn,gm="__reactListeners$"+Mn,xm="__reactHandles$"+Mn,Uc="__reactResources$"+Mn,Di="__reactMarker$"+Mn;function Ho(e){delete e[st],delete e[gt],delete e[Uo],delete e[gm],delete e[xm]}function Ra(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ma]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=n0(e);e!==null;){if(n=e[st])return n;e=n0(e)}return t}e=n,n=e.parentNode}return null}function Da(e){if(e=e[st]||e[Ma]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Oi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Oa(e){var t=e[Uc];return t||(t=e[Uc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ie(e){e[Di]=!0}var Hc=new Set,Yc={};function ia(e,t){_a(e,t),_a(e+"Capture",t)}function _a(e,t){for(Yc[e]=t,e=0;e<t.length;e++)Hc.add(t[e])}var bm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),qc={},$c={};function vm(e){return mt.call($c,e)?!0:mt.call(qc,e)?!1:bm.test(e)?$c[e]=!0:(qc[e]=!0,!1)}function Kl(e,t,n){if(vm(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Jl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function sn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}var Yo,Vc;function Na(e){if(Yo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yo=t&&t[1]||"",Vc=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yo+e+Vc}var qo=!1;function $o(e,t){if(!e||qo)return"";qo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(_){var O=_}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(_){O=_}e.call(Y.prototype)}}else{try{throw Error()}catch(_){O=_}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(_){if(_&&O&&typeof _.stack=="string")return[_.stack,O.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),f=r[0],h=r[1];if(f&&h){var v=f.split(`
`),T=h.split(`
`);for(l=a=0;a<v.length&&!v[a].includes("DetermineComponentFrameRoot");)a++;for(;l<T.length&&!T[l].includes("DetermineComponentFrameRoot");)l++;if(a===v.length||l===T.length)for(a=v.length-1,l=T.length-1;1<=a&&0<=l&&v[a]!==T[l];)l--;for(;1<=a&&0<=l;a--,l--)if(v[a]!==T[l]){if(a!==1||l!==1)do if(a--,l--,0>l||v[a]!==T[l]){var B=`
`+v[a].replace(" at new "," at ");return e.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",e.displayName)),B}while(1<=a&&0<=l);break}}}finally{qo=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Na(n):""}function ym(e){switch(e.tag){case 26:case 27:case 5:return Na(e.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 15:return $o(e.type,!1);case 11:return $o(e.type.render,!1);case 1:return $o(e.type,!0);case 31:return Na("Activity");default:return""}}function Gc(e){try{var t="";do t+=ym(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wm(e){var t=Xc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(f){a=""+f,r.call(this,f)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wl(e){e._valueTracker||(e._valueTracker=wm(e))}function Zc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Xc(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Pl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Sm=/[\n"\\]/g;function Ot(e){return e.replace(Sm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Vo(e,t,n,a,l,r,f,h){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Dt(t)):e.value!==""+Dt(t)&&(e.value=""+Dt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?Go(e,f,Dt(t)):n!=null?Go(e,f,Dt(n)):a!=null&&e.removeAttribute("value"),l==null&&r!=null&&(e.defaultChecked=!!r),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+Dt(h):e.removeAttribute("name")}function Qc(e,t,n,a,l,r,f,h){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+Dt(n):"",t=t!=null?""+Dt(t):n,h||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=h?e.checked:!!a,e.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function Go(e,t,n){t==="number"&&Pl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function La(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Dt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Kc(e,t,n){if(t!=null&&(t=""+Dt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Dt(n):""}function Jc(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(u(92));if(Ve(a)){if(1<a.length)throw Error(u(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Dt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function Ba(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wc(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||jm.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Pc(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&Wc(e,l,a)}else for(var r in t)t.hasOwnProperty(r)&&Wc(e,r,t[r])}function Xo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Em=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fl(e){return Em.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Zo=null;function Qo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ua=null,Ha=null;function Fc(e){var t=Da(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Vo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ot(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[gt]||null;if(!l)throw Error(u(90));Vo(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Zc(a)}break e;case"textarea":Kc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&La(e,!!n.multiple,t,!1)}}}var Ko=!1;function Ic(e,t,n){if(Ko)return e(t,n);Ko=!0;try{var a=e(t);return a}finally{if(Ko=!1,(Ua!==null||Ha!==null)&&(Br(),Ua&&(t=Ua,e=Ha,Ha=Ua=null,Fc(t),e)))for(t=0;t<e.length;t++)Fc(e[t])}}function _i(e,t){var n=e.stateNode;if(n===null)return null;var a=n[gt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jo=!1;if(un)try{var Ni={};Object.defineProperty(Ni,"passive",{get:function(){Jo=!0}}),window.addEventListener("test",Ni,Ni),window.removeEventListener("test",Ni,Ni)}catch{Jo=!1}var Rn=null,Wo=null,Il=null;function ef(){if(Il)return Il;var e,t=Wo,n=t.length,a,l="value"in Rn?Rn.value:Rn.textContent,r=l.length;for(e=0;e<n&&t[e]===l[e];e++);var f=n-e;for(a=1;a<=f&&t[n-a]===l[r-a];a++);return Il=l.slice(e,1<a?1-a:void 0)}function er(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function tr(){return!0}function tf(){return!1}function xt(e){function t(n,a,l,r,f){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=r,this.target=f,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(r):r[h]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?tr:tf,this.isPropagationStopped=tf,this}return C(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tr)},persist:function(){},isPersistent:tr}),t}var la={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nr=xt(la),Li=C({},la,{view:0,detail:0}),zm=xt(Li),Po,Fo,Bi,ar=C({},Li,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:es,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bi&&(Bi&&e.type==="mousemove"?(Po=e.screenX-Bi.screenX,Fo=e.screenY-Bi.screenY):Fo=Po=0,Bi=e),Po)},movementY:function(e){return"movementY"in e?e.movementY:Fo}}),nf=xt(ar),km=C({},ar,{dataTransfer:0}),Am=xt(km),Tm=C({},Li,{relatedTarget:0}),Io=xt(Tm),Mm=C({},la,{animationName:0,elapsedTime:0,pseudoElement:0}),Rm=xt(Mm),Dm=C({},la,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Om=xt(Dm),_m=C({},la,{data:0}),af=xt(_m),Nm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Um(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bm[e])?!!t[e]:!1}function es(){return Um}var Hm=C({},Li,{key:function(e){if(e.key){var t=Nm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:es,charCode:function(e){return e.type==="keypress"?er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ym=xt(Hm),qm=C({},ar,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lf=xt(qm),$m=C({},Li,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:es}),Vm=xt($m),Gm=C({},la,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xm=xt(Gm),Zm=C({},ar,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qm=xt(Zm),Km=C({},la,{newState:0,oldState:0}),Jm=xt(Km),Wm=[9,13,27,32],ts=un&&"CompositionEvent"in window,Ui=null;un&&"documentMode"in document&&(Ui=document.documentMode);var Pm=un&&"TextEvent"in window&&!Ui,rf=un&&(!ts||Ui&&8<Ui&&11>=Ui),of=" ",sf=!1;function uf(e,t){switch(e){case"keyup":return Wm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ya=!1;function Fm(e,t){switch(e){case"compositionend":return cf(t);case"keypress":return t.which!==32?null:(sf=!0,of);case"textInput":return e=t.data,e===of&&sf?null:e;default:return null}}function Im(e,t){if(Ya)return e==="compositionend"||!ts&&uf(e,t)?(e=ef(),Il=Wo=Rn=null,Ya=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return rf&&t.locale!=="ko"?null:t.data;default:return null}}var e1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ff(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!e1[e.type]:t==="textarea"}function df(e,t,n,a){Ua?Ha?Ha.push(a):Ha=[a]:Ua=a,t=Vr(t,"onChange"),0<t.length&&(n=new nr("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Hi=null,Yi=null;function t1(e){Zh(e,0)}function ir(e){var t=Oi(e);if(Zc(t))return e}function hf(e,t){if(e==="change")return t}var pf=!1;if(un){var ns;if(un){var as="oninput"in document;if(!as){var mf=document.createElement("div");mf.setAttribute("oninput","return;"),as=typeof mf.oninput=="function"}ns=as}else ns=!1;pf=ns&&(!document.documentMode||9<document.documentMode)}function gf(){Hi&&(Hi.detachEvent("onpropertychange",xf),Yi=Hi=null)}function xf(e){if(e.propertyName==="value"&&ir(Yi)){var t=[];df(t,Yi,e,Qo(e)),Ic(t1,t)}}function n1(e,t,n){e==="focusin"?(gf(),Hi=t,Yi=n,Hi.attachEvent("onpropertychange",xf)):e==="focusout"&&gf()}function a1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ir(Yi)}function i1(e,t){if(e==="click")return ir(t)}function l1(e,t){if(e==="input"||e==="change")return ir(t)}function r1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:r1;function qi(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!mt.call(t,l)||!Ct(e[l],t[l]))return!1}return!0}function bf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vf(e,t){var n=bf(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bf(n)}}function yf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Pl(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Pl(e.document)}return t}function is(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var o1=un&&"documentMode"in document&&11>=document.documentMode,qa=null,ls=null,$i=null,rs=!1;function Sf(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rs||qa==null||qa!==Pl(a)||(a=qa,"selectionStart"in a&&is(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),$i&&qi($i,a)||($i=a,a=Vr(ls,"onSelect"),0<a.length&&(t=new nr("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=qa)))}function ra(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $a={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionrun:ra("Transition","TransitionRun"),transitionstart:ra("Transition","TransitionStart"),transitioncancel:ra("Transition","TransitionCancel"),transitionend:ra("Transition","TransitionEnd")},os={},jf={};un&&(jf=document.createElement("div").style,"AnimationEvent"in window||(delete $a.animationend.animation,delete $a.animationiteration.animation,delete $a.animationstart.animation),"TransitionEvent"in window||delete $a.transitionend.transition);function oa(e){if(os[e])return os[e];if(!$a[e])return e;var t=$a[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in jf)return os[e]=t[n];return e}var Cf=oa("animationend"),Ef=oa("animationiteration"),zf=oa("animationstart"),s1=oa("transitionrun"),u1=oa("transitionstart"),c1=oa("transitioncancel"),kf=oa("transitionend"),Af=new Map,ss="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ss.push("scrollEnd");function Xt(e,t){Af.set(e,t),ia(t,[e])}var Tf=new WeakMap;function _t(e,t){if(typeof e=="object"&&e!==null){var n=Tf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Gc(t)},Tf.set(e,t),t)}return{value:e,source:t,stack:Gc(t)}}var Nt=[],Va=0,us=0;function lr(){for(var e=Va,t=us=Va=0;t<e;){var n=Nt[t];Nt[t++]=null;var a=Nt[t];Nt[t++]=null;var l=Nt[t];Nt[t++]=null;var r=Nt[t];if(Nt[t++]=null,a!==null&&l!==null){var f=a.pending;f===null?l.next=l:(l.next=f.next,f.next=l),a.pending=l}r!==0&&Mf(n,l,r)}}function rr(e,t,n,a){Nt[Va++]=e,Nt[Va++]=t,Nt[Va++]=n,Nt[Va++]=a,us|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function cs(e,t,n,a){return rr(e,t,n,a),or(e)}function Ga(e,t){return rr(e,null,null,t),or(e)}function Mf(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,r=e.return;r!==null;)r.childLanes|=n,a=r.alternate,a!==null&&(a.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(l=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,l&&t!==null&&(l=31-it(n),e=r.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),r):null}function or(e){if(50<hl)throw hl=0,gu=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Xa={};function f1(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(e,t,n,a){return new f1(e,t,n,a)}function fs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cn(e,t){var n=e.alternate;return n===null?(n=Et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Rf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function sr(e,t,n,a,l,r){var f=0;if(a=e,typeof e=="function")fs(e)&&(f=1);else if(typeof e=="string")f=hg(e,n,ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ue:return e=Et(31,n,t,l),e.elementType=ue,e.lanes=r,e;case M:return sa(n.children,l,r,t);case $:f=8,l|=24;break;case X:return e=Et(12,n,t,l|2),e.elementType=X,e.lanes=r,e;case P:return e=Et(13,n,t,l),e.elementType=P,e.lanes=r,e;case G:return e=Et(19,n,t,l),e.elementType=G,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case E:case V:f=10;break e;case R:f=9;break e;case Z:f=11;break e;case Q:f=14;break e;case ge:f=16,a=null;break e}f=29,n=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=Et(f,n,t,l),t.elementType=e,t.type=a,t.lanes=r,t}function sa(e,t,n,a){return e=Et(7,e,a,t),e.lanes=n,e}function ds(e,t,n){return e=Et(6,e,null,t),e.lanes=n,e}function hs(e,t,n){return t=Et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Za=[],Qa=0,ur=null,cr=0,Lt=[],Bt=0,ua=null,fn=1,dn="";function ca(e,t){Za[Qa++]=cr,Za[Qa++]=ur,ur=e,cr=t}function Df(e,t,n){Lt[Bt++]=fn,Lt[Bt++]=dn,Lt[Bt++]=ua,ua=e;var a=fn;e=dn;var l=32-it(a)-1;a&=~(1<<l),n+=1;var r=32-it(t)+l;if(30<r){var f=l-l%5;r=(a&(1<<f)-1).toString(32),a>>=f,l-=f,fn=1<<32-it(t)+l|n<<l|a,dn=r+e}else fn=1<<r|n<<l|a,dn=e}function ps(e){e.return!==null&&(ca(e,1),Df(e,1,0))}function ms(e){for(;e===ur;)ur=Za[--Qa],Za[Qa]=null,cr=Za[--Qa],Za[Qa]=null;for(;e===ua;)ua=Lt[--Bt],Lt[Bt]=null,dn=Lt[--Bt],Lt[Bt]=null,fn=Lt[--Bt],Lt[Bt]=null}var ht=null,qe=null,Ee=!1,fa=null,Pt=!1,gs=Error(u(519));function da(e){var t=Error(u(418,""));throw Xi(_t(t,e)),gs}function Of(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[st]=e,t[gt]=a,n){case"dialog":be("cancel",t),be("close",t);break;case"iframe":case"object":case"embed":be("load",t);break;case"video":case"audio":for(n=0;n<ml.length;n++)be(ml[n],t);break;case"source":be("error",t);break;case"img":case"image":case"link":be("error",t),be("load",t);break;case"details":be("toggle",t);break;case"input":be("invalid",t),Qc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Wl(t);break;case"select":be("invalid",t);break;case"textarea":be("invalid",t),Jc(t,a.value,a.defaultValue,a.children),Wl(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Wh(t.textContent,n)?(a.popover!=null&&(be("beforetoggle",t),be("toggle",t)),a.onScroll!=null&&be("scroll",t),a.onScrollEnd!=null&&be("scrollend",t),a.onClick!=null&&(t.onclick=Gr),t=!0):t=!1,t||da(e)}function _f(e){for(ht=e.return;ht;)switch(ht.tag){case 5:case 13:Pt=!1;return;case 27:case 3:Pt=!0;return;default:ht=ht.return}}function Vi(e){if(e!==ht)return!1;if(!Ee)return _f(e),Ee=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Du(e.type,e.memoizedProps)),n=!n),n&&qe&&da(e),_f(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){qe=Qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}qe=null}}else t===27?(t=qe,Qn(e.type)?(e=Lu,Lu=null,qe=e):qe=t):qe=ht?Qt(e.stateNode.nextSibling):null;return!0}function Gi(){qe=ht=null,Ee=!1}function Nf(){var e=fa;return e!==null&&(yt===null?yt=e:yt.push.apply(yt,e),fa=null),e}function Xi(e){fa===null?fa=[e]:fa.push(e)}var xs=q(null),ha=null,hn=null;function Dn(e,t,n){W(xs,t._currentValue),t._currentValue=n}function pn(e){e._currentValue=xs.current,K(xs)}function bs(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function vs(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){var f=l.child;r=r.firstContext;e:for(;r!==null;){var h=r;r=l;for(var v=0;v<t.length;v++)if(h.context===t[v]){r.lanes|=n,h=r.alternate,h!==null&&(h.lanes|=n),bs(r.return,n,e),a||(f=null);break e}r=h.next}}else if(l.tag===18){if(f=l.return,f===null)throw Error(u(341));f.lanes|=n,r=f.alternate,r!==null&&(r.lanes|=n),bs(f,n,e),f=null}else f=l.child;if(f!==null)f.return=l;else for(f=l;f!==null;){if(f===e){f=null;break}if(l=f.sibling,l!==null){l.return=f.return,f=l;break}f=f.return}l=f}}function Zi(e,t,n,a){e=null;for(var l=t,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var f=l.alternate;if(f===null)throw Error(u(387));if(f=f.memoizedProps,f!==null){var h=l.type;Ct(l.pendingProps.value,f.value)||(e!==null?e.push(h):e=[h])}}else if(l===Ge.current){if(f=l.alternate,f===null)throw Error(u(387));f.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(wl):e=[wl])}l=l.return}e!==null&&vs(t,e,n,a),t.flags|=262144}function fr(e){for(e=e.firstContext;e!==null;){if(!Ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function pa(e){ha=e,hn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ut(e){return Lf(ha,e)}function dr(e,t){return ha===null&&pa(e),Lf(e,t)}function Lf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},hn===null){if(e===null)throw Error(u(308));hn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else hn=hn.next=t;return n}var d1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},h1=i.unstable_scheduleCallback,p1=i.unstable_NormalPriority,Pe={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ys(){return{controller:new d1,data:new Map,refCount:0}}function Qi(e){e.refCount--,e.refCount===0&&h1(p1,function(){e.controller.abort()})}var Ki=null,ws=0,Ka=0,Ja=null;function m1(e,t){if(Ki===null){var n=Ki=[];ws=0,Ka=ju(),Ja={status:"pending",value:void 0,then:function(a){n.push(a)}}}return ws++,t.then(Bf,Bf),t}function Bf(){if(--ws===0&&Ki!==null){Ja!==null&&(Ja.status="fulfilled");var e=Ki;Ki=null,Ka=0,Ja=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function g1(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var Uf=N.S;N.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&m1(e,t),Uf!==null&&Uf(e,t)};var ma=q(null);function Ss(){var e=ma.current;return e!==null?e:Le.pooledCache}function hr(e,t){t===null?W(ma,ma.current):W(ma,t.pool)}function Hf(){var e=Ss();return e===null?null:{parent:Pe._currentValue,pool:e}}var Ji=Error(u(460)),Yf=Error(u(474)),pr=Error(u(542)),js={then:function(){}};function qf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function mr(){}function $f(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(mr,mr),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Gf(e),e;default:if(typeof t.status=="string")t.then(mr,mr);else{if(e=Le,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Gf(e),e}throw Wi=t,Ji}}var Wi=null;function Vf(){if(Wi===null)throw Error(u(459));var e=Wi;return Wi=null,e}function Gf(e){if(e===Ji||e===pr)throw Error(u(483))}var On=!1;function Cs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Es(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _n(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Nn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Te&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=or(e),Mf(e,null,n),t}return rr(e,a,t,n),or(e)}function Pi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Tn(e,n)}}function zs(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?l=r=f:r=r.next=f,n=n.next}while(n!==null);r===null?l=r=t:r=r.next=t}else l=r=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ks=!1;function Fi(){if(ks){var e=Ja;if(e!==null)throw e}}function Ii(e,t,n,a){ks=!1;var l=e.updateQueue;On=!1;var r=l.firstBaseUpdate,f=l.lastBaseUpdate,h=l.shared.pending;if(h!==null){l.shared.pending=null;var v=h,T=v.next;v.next=null,f===null?r=T:f.next=T,f=v;var B=e.alternate;B!==null&&(B=B.updateQueue,h=B.lastBaseUpdate,h!==f&&(h===null?B.firstBaseUpdate=T:h.next=T,B.lastBaseUpdate=v))}if(r!==null){var Y=l.baseState;f=0,B=T=v=null,h=r;do{var O=h.lane&-536870913,_=O!==h.lane;if(_?(Se&O)===O:(a&O)===O){O!==0&&O===Ka&&(ks=!0),B!==null&&(B=B.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var se=e,re=h;O=t;var Oe=n;switch(re.tag){case 1:if(se=re.payload,typeof se=="function"){Y=se.call(Oe,Y,O);break e}Y=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=re.payload,O=typeof se=="function"?se.call(Oe,Y,O):se,O==null)break e;Y=C({},Y,O);break e;case 2:On=!0}}O=h.callback,O!==null&&(e.flags|=64,_&&(e.flags|=8192),_=l.callbacks,_===null?l.callbacks=[O]:_.push(O))}else _={lane:O,tag:h.tag,payload:h.payload,callback:h.callback,next:null},B===null?(T=B=_,v=Y):B=B.next=_,f|=O;if(h=h.next,h===null){if(h=l.shared.pending,h===null)break;_=h,h=_.next,_.next=null,l.lastBaseUpdate=_,l.shared.pending=null}}while(!0);B===null&&(v=Y),l.baseState=v,l.firstBaseUpdate=T,l.lastBaseUpdate=B,r===null&&(l.shared.lanes=0),Vn|=f,e.lanes=f,e.memoizedState=Y}}function Xf(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Zf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Xf(n[e],t)}var Wa=q(null),gr=q(0);function Qf(e,t){e=wn,W(gr,e),W(Wa,t),wn=e|t.baseLanes}function As(){W(gr,wn),W(Wa,Wa.current)}function Ts(){wn=gr.current,K(Wa),K(gr)}var Ln=0,he=null,Re=null,Qe=null,xr=!1,Pa=!1,ga=!1,br=0,el=0,Fa=null,x1=0;function Xe(){throw Error(u(321))}function Ms(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ct(e[n],t[n]))return!1;return!0}function Rs(e,t,n,a,l,r){return Ln=r,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=e===null||e.memoizedState===null?Md:Rd,ga=!1,r=n(a,l),ga=!1,Pa&&(r=Jf(t,n,a,l)),Kf(e),r}function Kf(e){N.H=Cr;var t=Re!==null&&Re.next!==null;if(Ln=0,Qe=Re=he=null,xr=!1,el=0,Fa=null,t)throw Error(u(300));e===null||et||(e=e.dependencies,e!==null&&fr(e)&&(et=!0))}function Jf(e,t,n,a){he=e;var l=0;do{if(Pa&&(Fa=null),el=0,Pa=!1,25<=l)throw Error(u(301));if(l+=1,Qe=Re=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}N.H=C1,r=t(n,a)}while(Pa);return r}function b1(){var e=N.H,t=e.useState()[0];return t=typeof t.then=="function"?tl(t):t,e=e.useState()[0],(Re!==null?Re.memoizedState:null)!==e&&(he.flags|=1024),t}function Ds(){var e=br!==0;return br=0,e}function Os(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function _s(e){if(xr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}xr=!1}Ln=0,Qe=Re=he=null,Pa=!1,el=br=0,Fa=null}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?he.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Ke(){if(Re===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Qe===null?he.memoizedState:Qe.next;if(t!==null)Qe=t,Re=e;else{if(e===null)throw he.alternate===null?Error(u(467)):Error(u(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Qe===null?he.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function Ns(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tl(e){var t=el;return el+=1,Fa===null&&(Fa=[]),e=$f(Fa,e,t),t=he,(Qe===null?t.memoizedState:Qe.next)===null&&(t=t.alternate,N.H=t===null||t.memoizedState===null?Md:Rd),e}function vr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return tl(e);if(e.$$typeof===V)return ut(e)}throw Error(u(438,String(e)))}function Ls(e){var t=null,n=he.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=he.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ns(),he.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=F;return t.index++,n}function mn(e,t){return typeof t=="function"?t(e):t}function yr(e){var t=Ke();return Bs(t,Re,e)}function Bs(e,t,n){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var l=e.baseQueue,r=a.pending;if(r!==null){if(l!==null){var f=l.next;l.next=r.next,r.next=f}t.baseQueue=l=r,a.pending=null}if(r=e.baseState,l===null)e.memoizedState=r;else{t=l.next;var h=f=null,v=null,T=t,B=!1;do{var Y=T.lane&-536870913;if(Y!==T.lane?(Se&Y)===Y:(Ln&Y)===Y){var O=T.revertLane;if(O===0)v!==null&&(v=v.next={lane:0,revertLane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),Y===Ka&&(B=!0);else if((Ln&O)===O){T=T.next,O===Ka&&(B=!0);continue}else Y={lane:0,revertLane:T.revertLane,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},v===null?(h=v=Y,f=r):v=v.next=Y,he.lanes|=O,Vn|=O;Y=T.action,ga&&n(r,Y),r=T.hasEagerState?T.eagerState:n(r,Y)}else O={lane:Y,revertLane:T.revertLane,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},v===null?(h=v=O,f=r):v=v.next=O,he.lanes|=Y,Vn|=Y;T=T.next}while(T!==null&&T!==t);if(v===null?f=r:v.next=h,!Ct(r,e.memoizedState)&&(et=!0,B&&(n=Ja,n!==null)))throw n;e.memoizedState=r,e.baseState=f,e.baseQueue=v,a.lastRenderedState=r}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Us(e){var t=Ke(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,r=t.memoizedState;if(l!==null){n.pending=null;var f=l=l.next;do r=e(r,f.action),f=f.next;while(f!==l);Ct(r,t.memoizedState)||(et=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,a]}function Wf(e,t,n){var a=he,l=Ke(),r=Ee;if(r){if(n===void 0)throw Error(u(407));n=n()}else n=t();var f=!Ct((Re||l).memoizedState,n);f&&(l.memoizedState=n,et=!0),l=l.queue;var h=If.bind(null,a,l,e);if(nl(2048,8,h,[e]),l.getSnapshot!==t||f||Qe!==null&&Qe.memoizedState.tag&1){if(a.flags|=2048,Ia(9,wr(),Ff.bind(null,a,l,n,t),null),Le===null)throw Error(u(349));r||(Ln&124)!==0||Pf(a,t,n)}return n}function Pf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=he.updateQueue,t===null?(t=Ns(),he.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ff(e,t,n,a){t.value=n,t.getSnapshot=a,ed(t)&&td(e)}function If(e,t,n){return n(function(){ed(t)&&td(e)})}function ed(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ct(e,n)}catch{return!0}}function td(e){var t=Ga(e,2);t!==null&&Mt(t,e,2)}function Hs(e){var t=bt();if(typeof e=="function"){var n=e;if(e=n(),ga){Vt(!0);try{n()}finally{Vt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:e},t}function nd(e,t,n,a){return e.baseState=n,Bs(e,Re,typeof a=="function"?a:mn)}function v1(e,t,n,a,l){if(jr(e))throw Error(u(485));if(e=t.action,e!==null){var r={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){r.listeners.push(f)}};N.T!==null?n(!0):r.isTransition=!1,a(r),n=t.pending,n===null?(r.next=t.pending=r,ad(t,r)):(r.next=n.next,t.pending=n.next=r)}}function ad(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var r=N.T,f={};N.T=f;try{var h=n(l,a),v=N.S;v!==null&&v(f,h),id(e,t,h)}catch(T){Ys(e,t,T)}finally{N.T=r}}else try{r=n(l,a),id(e,t,r)}catch(T){Ys(e,t,T)}}function id(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){ld(e,t,a)},function(a){return Ys(e,t,a)}):ld(e,t,n)}function ld(e,t,n){t.status="fulfilled",t.value=n,rd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ad(e,n)))}function Ys(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,rd(t),t=t.next;while(t!==a)}e.action=null}function rd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function od(e,t){return t}function sd(e,t){if(Ee){var n=Le.formState;if(n!==null){e:{var a=he;if(Ee){if(qe){t:{for(var l=qe,r=Pt;l.nodeType!==8;){if(!r){l=null;break t}if(l=Qt(l.nextSibling),l===null){l=null;break t}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){qe=Qt(l.nextSibling),a=l.data==="F!";break e}}da(a)}a=!1}a&&(t=n[0])}}return n=bt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:od,lastRenderedState:t},n.queue=a,n=kd.bind(null,he,a),a.dispatch=n,a=Hs(!1),r=Xs.bind(null,he,!1,a.queue),a=bt(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=v1.bind(null,he,l,r,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function ud(e){var t=Ke();return cd(t,Re,e)}function cd(e,t,n){if(t=Bs(e,t,od)[0],e=yr(mn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=tl(t)}catch(f){throw f===Ji?pr:f}else a=t;t=Ke();var l=t.queue,r=l.dispatch;return n!==t.memoizedState&&(he.flags|=2048,Ia(9,wr(),y1.bind(null,l,n),null)),[a,r,e]}function y1(e,t){e.action=t}function fd(e){var t=Ke(),n=Re;if(n!==null)return cd(t,n,e);Ke(),t=t.memoizedState,n=Ke();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Ia(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=he.updateQueue,t===null&&(t=Ns(),he.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function wr(){return{destroy:void 0,resource:void 0}}function dd(){return Ke().memoizedState}function Sr(e,t,n,a){var l=bt();a=a===void 0?null:a,he.flags|=e,l.memoizedState=Ia(1|t,wr(),n,a)}function nl(e,t,n,a){var l=Ke();a=a===void 0?null:a;var r=l.memoizedState.inst;Re!==null&&a!==null&&Ms(a,Re.memoizedState.deps)?l.memoizedState=Ia(t,r,n,a):(he.flags|=e,l.memoizedState=Ia(1|t,r,n,a))}function hd(e,t){Sr(8390656,8,e,t)}function pd(e,t){nl(2048,8,e,t)}function md(e,t){return nl(4,2,e,t)}function gd(e,t){return nl(4,4,e,t)}function xd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bd(e,t,n){n=n!=null?n.concat([e]):null,nl(4,4,xd.bind(null,t,e),n)}function qs(){}function vd(e,t){var n=Ke();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Ms(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function yd(e,t){var n=Ke();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Ms(t,a[1]))return a[0];if(a=e(),ga){Vt(!0);try{e()}finally{Vt(!1)}}return n.memoizedState=[a,t],a}function $s(e,t,n){return n===void 0||(Ln&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=jh(),he.lanes|=e,Vn|=e,n)}function wd(e,t,n,a){return Ct(n,t)?n:Wa.current!==null?(e=$s(e,n,a),Ct(e,t)||(et=!0),e):(Ln&42)===0?(et=!0,e.memoizedState=n):(e=jh(),he.lanes|=e,Vn|=e,t)}function Sd(e,t,n,a,l){var r=J.p;J.p=r!==0&&8>r?r:8;var f=N.T,h={};N.T=h,Xs(e,!1,t,n);try{var v=l(),T=N.S;if(T!==null&&T(h,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var B=g1(v,a);al(e,t,B,Tt(e))}else al(e,t,a,Tt(e))}catch(Y){al(e,t,{then:function(){},status:"rejected",reason:Y},Tt())}finally{J.p=r,N.T=f}}function w1(){}function Vs(e,t,n,a){if(e.tag!==5)throw Error(u(476));var l=jd(e).queue;Sd(e,l,t,ie,n===null?w1:function(){return Cd(e),n(a)})}function jd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:ie},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Cd(e){var t=jd(e).next.queue;al(e,t,{},Tt())}function Gs(){return ut(wl)}function Ed(){return Ke().memoizedState}function zd(){return Ke().memoizedState}function S1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Tt();e=_n(n);var a=Nn(t,e,n);a!==null&&(Mt(a,t,n),Pi(a,t,n)),t={cache:ys()},e.payload=t;return}t=t.return}}function j1(e,t,n){var a=Tt();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},jr(e)?Ad(t,n):(n=cs(e,t,n,a),n!==null&&(Mt(n,e,a),Td(n,t,a)))}function kd(e,t,n){var a=Tt();al(e,t,n,a)}function al(e,t,n,a){var l={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(jr(e))Ad(t,l);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var f=t.lastRenderedState,h=r(f,n);if(l.hasEagerState=!0,l.eagerState=h,Ct(h,f))return rr(e,t,l,0),Le===null&&lr(),!1}catch{}finally{}if(n=cs(e,t,l,a),n!==null)return Mt(n,e,a),Td(n,t,a),!0}return!1}function Xs(e,t,n,a){if(a={lane:2,revertLane:ju(),action:a,hasEagerState:!1,eagerState:null,next:null},jr(e)){if(t)throw Error(u(479))}else t=cs(e,n,a,2),t!==null&&Mt(t,e,2)}function jr(e){var t=e.alternate;return e===he||t!==null&&t===he}function Ad(e,t){Pa=xr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Td(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Tn(e,n)}}var Cr={readContext:ut,use:vr,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useLayoutEffect:Xe,useInsertionEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useSyncExternalStore:Xe,useId:Xe,useHostTransitionStatus:Xe,useFormState:Xe,useActionState:Xe,useOptimistic:Xe,useMemoCache:Xe,useCacheRefresh:Xe},Md={readContext:ut,use:vr,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:hd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Sr(4194308,4,xd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Sr(4194308,4,e,t)},useInsertionEffect:function(e,t){Sr(4,2,e,t)},useMemo:function(e,t){var n=bt();t=t===void 0?null:t;var a=e();if(ga){Vt(!0);try{e()}finally{Vt(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=bt();if(n!==void 0){var l=n(t);if(ga){Vt(!0);try{n(t)}finally{Vt(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=j1.bind(null,he,e),[a.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:function(e){e=Hs(e);var t=e.queue,n=kd.bind(null,he,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:qs,useDeferredValue:function(e,t){var n=bt();return $s(n,e,t)},useTransition:function(){var e=Hs(!1);return e=Sd.bind(null,he,e.queue,!0,!1),bt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=he,l=bt();if(Ee){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Le===null)throw Error(u(349));(Se&124)!==0||Pf(a,t,n)}l.memoizedState=n;var r={value:n,getSnapshot:t};return l.queue=r,hd(If.bind(null,a,r,e),[e]),a.flags|=2048,Ia(9,wr(),Ff.bind(null,a,r,n,t),null),n},useId:function(){var e=bt(),t=Le.identifierPrefix;if(Ee){var n=dn,a=fn;n=(a&~(1<<32-it(a)-1)).toString(32)+n,t="«"+t+"R"+n,n=br++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=x1++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Gs,useFormState:sd,useActionState:sd,useOptimistic:function(e){var t=bt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Xs.bind(null,he,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ls,useCacheRefresh:function(){return bt().memoizedState=S1.bind(null,he)}},Rd={readContext:ut,use:vr,useCallback:vd,useContext:ut,useEffect:pd,useImperativeHandle:bd,useInsertionEffect:md,useLayoutEffect:gd,useMemo:yd,useReducer:yr,useRef:dd,useState:function(){return yr(mn)},useDebugValue:qs,useDeferredValue:function(e,t){var n=Ke();return wd(n,Re.memoizedState,e,t)},useTransition:function(){var e=yr(mn)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:tl(e),t]},useSyncExternalStore:Wf,useId:Ed,useHostTransitionStatus:Gs,useFormState:ud,useActionState:ud,useOptimistic:function(e,t){var n=Ke();return nd(n,Re,e,t)},useMemoCache:Ls,useCacheRefresh:zd},C1={readContext:ut,use:vr,useCallback:vd,useContext:ut,useEffect:pd,useImperativeHandle:bd,useInsertionEffect:md,useLayoutEffect:gd,useMemo:yd,useReducer:Us,useRef:dd,useState:function(){return Us(mn)},useDebugValue:qs,useDeferredValue:function(e,t){var n=Ke();return Re===null?$s(n,e,t):wd(n,Re.memoizedState,e,t)},useTransition:function(){var e=Us(mn)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:tl(e),t]},useSyncExternalStore:Wf,useId:Ed,useHostTransitionStatus:Gs,useFormState:fd,useActionState:fd,useOptimistic:function(e,t){var n=Ke();return Re!==null?nd(n,Re,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ls,useCacheRefresh:zd},ei=null,il=0;function Er(e){var t=il;return il+=1,ei===null&&(ei=[]),$f(ei,e,t)}function ll(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function zr(e,t){throw t.$$typeof===A?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Dd(e){var t=e._init;return t(e._payload)}function Od(e){function t(z,S){if(e){var k=z.deletions;k===null?(z.deletions=[S],z.flags|=16):k.push(S)}}function n(z,S){if(!e)return null;for(;S!==null;)t(z,S),S=S.sibling;return null}function a(z){for(var S=new Map;z!==null;)z.key!==null?S.set(z.key,z):S.set(z.index,z),z=z.sibling;return S}function l(z,S){return z=cn(z,S),z.index=0,z.sibling=null,z}function r(z,S,k){return z.index=k,e?(k=z.alternate,k!==null?(k=k.index,k<S?(z.flags|=67108866,S):k):(z.flags|=67108866,S)):(z.flags|=1048576,S)}function f(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function h(z,S,k,U){return S===null||S.tag!==6?(S=ds(k,z.mode,U),S.return=z,S):(S=l(S,k),S.return=z,S)}function v(z,S,k,U){var te=k.type;return te===M?B(z,S,k.props.children,U,k.key):S!==null&&(S.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===ge&&Dd(te)===S.type)?(S=l(S,k.props),ll(S,k),S.return=z,S):(S=sr(k.type,k.key,k.props,null,z.mode,U),ll(S,k),S.return=z,S)}function T(z,S,k,U){return S===null||S.tag!==4||S.stateNode.containerInfo!==k.containerInfo||S.stateNode.implementation!==k.implementation?(S=hs(k,z.mode,U),S.return=z,S):(S=l(S,k.children||[]),S.return=z,S)}function B(z,S,k,U,te){return S===null||S.tag!==7?(S=sa(k,z.mode,U,te),S.return=z,S):(S=l(S,k),S.return=z,S)}function Y(z,S,k){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=ds(""+S,z.mode,k),S.return=z,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case D:return k=sr(S.type,S.key,S.props,null,z.mode,k),ll(k,S),k.return=z,k;case L:return S=hs(S,z.mode,k),S.return=z,S;case ge:var U=S._init;return S=U(S._payload),Y(z,S,k)}if(Ve(S)||je(S))return S=sa(S,z.mode,k,null),S.return=z,S;if(typeof S.then=="function")return Y(z,Er(S),k);if(S.$$typeof===V)return Y(z,dr(z,S),k);zr(z,S)}return null}function O(z,S,k,U){var te=S!==null?S.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return te!==null?null:h(z,S,""+k,U);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case D:return k.key===te?v(z,S,k,U):null;case L:return k.key===te?T(z,S,k,U):null;case ge:return te=k._init,k=te(k._payload),O(z,S,k,U)}if(Ve(k)||je(k))return te!==null?null:B(z,S,k,U,null);if(typeof k.then=="function")return O(z,S,Er(k),U);if(k.$$typeof===V)return O(z,S,dr(z,k),U);zr(z,k)}return null}function _(z,S,k,U,te){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return z=z.get(k)||null,h(S,z,""+U,te);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case D:return z=z.get(U.key===null?k:U.key)||null,v(S,z,U,te);case L:return z=z.get(U.key===null?k:U.key)||null,T(S,z,U,te);case ge:var me=U._init;return U=me(U._payload),_(z,S,k,U,te)}if(Ve(U)||je(U))return z=z.get(k)||null,B(S,z,U,te,null);if(typeof U.then=="function")return _(z,S,k,Er(U),te);if(U.$$typeof===V)return _(z,S,k,dr(S,U),te);zr(S,U)}return null}function se(z,S,k,U){for(var te=null,me=null,ae=S,oe=S=0,nt=null;ae!==null&&oe<k.length;oe++){ae.index>oe?(nt=ae,ae=null):nt=ae.sibling;var Ce=O(z,ae,k[oe],U);if(Ce===null){ae===null&&(ae=nt);break}e&&ae&&Ce.alternate===null&&t(z,ae),S=r(Ce,S,oe),me===null?te=Ce:me.sibling=Ce,me=Ce,ae=nt}if(oe===k.length)return n(z,ae),Ee&&ca(z,oe),te;if(ae===null){for(;oe<k.length;oe++)ae=Y(z,k[oe],U),ae!==null&&(S=r(ae,S,oe),me===null?te=ae:me.sibling=ae,me=ae);return Ee&&ca(z,oe),te}for(ae=a(ae);oe<k.length;oe++)nt=_(ae,z,oe,k[oe],U),nt!==null&&(e&&nt.alternate!==null&&ae.delete(nt.key===null?oe:nt.key),S=r(nt,S,oe),me===null?te=nt:me.sibling=nt,me=nt);return e&&ae.forEach(function(Fn){return t(z,Fn)}),Ee&&ca(z,oe),te}function re(z,S,k,U){if(k==null)throw Error(u(151));for(var te=null,me=null,ae=S,oe=S=0,nt=null,Ce=k.next();ae!==null&&!Ce.done;oe++,Ce=k.next()){ae.index>oe?(nt=ae,ae=null):nt=ae.sibling;var Fn=O(z,ae,Ce.value,U);if(Fn===null){ae===null&&(ae=nt);break}e&&ae&&Fn.alternate===null&&t(z,ae),S=r(Fn,S,oe),me===null?te=Fn:me.sibling=Fn,me=Fn,ae=nt}if(Ce.done)return n(z,ae),Ee&&ca(z,oe),te;if(ae===null){for(;!Ce.done;oe++,Ce=k.next())Ce=Y(z,Ce.value,U),Ce!==null&&(S=r(Ce,S,oe),me===null?te=Ce:me.sibling=Ce,me=Ce);return Ee&&ca(z,oe),te}for(ae=a(ae);!Ce.done;oe++,Ce=k.next())Ce=_(ae,z,oe,Ce.value,U),Ce!==null&&(e&&Ce.alternate!==null&&ae.delete(Ce.key===null?oe:Ce.key),S=r(Ce,S,oe),me===null?te=Ce:me.sibling=Ce,me=Ce);return e&&ae.forEach(function(Eg){return t(z,Eg)}),Ee&&ca(z,oe),te}function Oe(z,S,k,U){if(typeof k=="object"&&k!==null&&k.type===M&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case D:e:{for(var te=k.key;S!==null;){if(S.key===te){if(te=k.type,te===M){if(S.tag===7){n(z,S.sibling),U=l(S,k.props.children),U.return=z,z=U;break e}}else if(S.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===ge&&Dd(te)===S.type){n(z,S.sibling),U=l(S,k.props),ll(U,k),U.return=z,z=U;break e}n(z,S);break}else t(z,S);S=S.sibling}k.type===M?(U=sa(k.props.children,z.mode,U,k.key),U.return=z,z=U):(U=sr(k.type,k.key,k.props,null,z.mode,U),ll(U,k),U.return=z,z=U)}return f(z);case L:e:{for(te=k.key;S!==null;){if(S.key===te)if(S.tag===4&&S.stateNode.containerInfo===k.containerInfo&&S.stateNode.implementation===k.implementation){n(z,S.sibling),U=l(S,k.children||[]),U.return=z,z=U;break e}else{n(z,S);break}else t(z,S);S=S.sibling}U=hs(k,z.mode,U),U.return=z,z=U}return f(z);case ge:return te=k._init,k=te(k._payload),Oe(z,S,k,U)}if(Ve(k))return se(z,S,k,U);if(je(k)){if(te=je(k),typeof te!="function")throw Error(u(150));return k=te.call(k),re(z,S,k,U)}if(typeof k.then=="function")return Oe(z,S,Er(k),U);if(k.$$typeof===V)return Oe(z,S,dr(z,k),U);zr(z,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,S!==null&&S.tag===6?(n(z,S.sibling),U=l(S,k),U.return=z,z=U):(n(z,S),U=ds(k,z.mode,U),U.return=z,z=U),f(z)):n(z,S)}return function(z,S,k,U){try{il=0;var te=Oe(z,S,k,U);return ei=null,te}catch(ae){if(ae===Ji||ae===pr)throw ae;var me=Et(29,ae,null,z.mode);return me.lanes=U,me.return=z,me}finally{}}}var ti=Od(!0),_d=Od(!1),Ut=q(null),Ft=null;function Bn(e){var t=e.alternate;W(Fe,Fe.current&1),W(Ut,e),Ft===null&&(t===null||Wa.current!==null||t.memoizedState!==null)&&(Ft=e)}function Nd(e){if(e.tag===22){if(W(Fe,Fe.current),W(Ut,e),Ft===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Ft=e)}}else Un()}function Un(){W(Fe,Fe.current),W(Ut,Ut.current)}function gn(e){K(Ut),Ft===e&&(Ft=null),K(Fe)}var Fe=q(0);function kr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Nu(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Zs(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:C({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Qs={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Tt(),l=_n(a);l.payload=t,n!=null&&(l.callback=n),t=Nn(e,l,a),t!==null&&(Mt(t,e,a),Pi(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Tt(),l=_n(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Nn(e,l,a),t!==null&&(Mt(t,e,a),Pi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Tt(),a=_n(n);a.tag=2,t!=null&&(a.callback=t),t=Nn(e,a,n),t!==null&&(Mt(t,e,n),Pi(t,e,n))}};function Ld(e,t,n,a,l,r,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,f):t.prototype&&t.prototype.isPureReactComponent?!qi(n,a)||!qi(l,r):!0}function Bd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Qs.enqueueReplaceState(t,t.state,null)}function xa(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=C({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}var Ar=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Ud(e){Ar(e)}function Hd(e){console.error(e)}function Yd(e){Ar(e)}function Tr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function qd(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Ks(e,t,n){return n=_n(n),n.tag=3,n.payload={element:null},n.callback=function(){Tr(e,t)},n}function $d(e){return e=_n(e),e.tag=3,e}function Vd(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var r=a.value;e.payload=function(){return l(r)},e.callback=function(){qd(t,n,a)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){qd(t,n,a),typeof l!="function"&&(Gn===null?Gn=new Set([this]):Gn.add(this));var h=a.stack;this.componentDidCatch(a.value,{componentStack:h!==null?h:""})})}function E1(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Zi(t,n,l,!0),n=Ut.current,n!==null){switch(n.tag){case 13:return Ft===null?bu():n.alternate===null&&$e===0&&($e=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===js?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),yu(e,a,l)),!1;case 22:return n.flags|=65536,a===js?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),yu(e,a,l)),!1}throw Error(u(435,n.tag))}return yu(e,a,l),bu(),!1}if(Ee)return t=Ut.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==gs&&(e=Error(u(422),{cause:a}),Xi(_t(e,n)))):(a!==gs&&(t=Error(u(423),{cause:a}),Xi(_t(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=_t(a,n),l=Ks(e.stateNode,a,l),zs(e,l),$e!==4&&($e=2)),!1;var r=Error(u(520),{cause:a});if(r=_t(r,n),dl===null?dl=[r]:dl.push(r),$e!==4&&($e=2),t===null)return!0;a=_t(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Ks(n.stateNode,a,e),zs(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Gn===null||!Gn.has(r))))return n.flags|=65536,l&=-l,n.lanes|=l,l=$d(l),Vd(l,e,n,a),zs(n,l),!1}n=n.return}while(n!==null);return!1}var Gd=Error(u(461)),et=!1;function lt(e,t,n,a){t.child=e===null?_d(t,null,n,a):ti(t,e.child,n,a)}function Xd(e,t,n,a,l){n=n.render;var r=t.ref;if("ref"in a){var f={};for(var h in a)h!=="ref"&&(f[h]=a[h])}else f=a;return pa(t),a=Rs(e,t,n,f,r,l),h=Ds(),e!==null&&!et?(Os(e,t,l),xn(e,t,l)):(Ee&&h&&ps(t),t.flags|=1,lt(e,t,a,l),t.child)}function Zd(e,t,n,a,l){if(e===null){var r=n.type;return typeof r=="function"&&!fs(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,Qd(e,t,r,a,l)):(e=sr(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!nu(e,l)){var f=r.memoizedProps;if(n=n.compare,n=n!==null?n:qi,n(f,a)&&e.ref===t.ref)return xn(e,t,l)}return t.flags|=1,e=cn(r,a),e.ref=t.ref,e.return=t,t.child=e}function Qd(e,t,n,a,l){if(e!==null){var r=e.memoizedProps;if(qi(r,a)&&e.ref===t.ref)if(et=!1,t.pendingProps=a=r,nu(e,l))(e.flags&131072)!==0&&(et=!0);else return t.lanes=e.lanes,xn(e,t,l)}return Js(e,t,n,a,l)}function Kd(e,t,n){var a=t.pendingProps,l=a.children,r=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=r!==null?r.baseLanes|n:n,e!==null){for(l=t.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;t.childLanes=r&~a}else t.childLanes=0,t.child=null;return Jd(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&hr(t,r!==null?r.cachePool:null),r!==null?Qf(t,r):As(),Nd(t);else return t.lanes=t.childLanes=536870912,Jd(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(hr(t,r.cachePool),Qf(t,r),Un(),t.memoizedState=null):(e!==null&&hr(t,null),As(),Un());return lt(e,t,l,n),t.child}function Jd(e,t,n,a){var l=Ss();return l=l===null?null:{parent:Pe._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&hr(t,null),As(),Nd(t),e!==null&&Zi(e,t,a,!0),null}function Mr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Js(e,t,n,a,l){return pa(t),n=Rs(e,t,n,a,void 0,l),a=Ds(),e!==null&&!et?(Os(e,t,l),xn(e,t,l)):(Ee&&a&&ps(t),t.flags|=1,lt(e,t,n,l),t.child)}function Wd(e,t,n,a,l,r){return pa(t),t.updateQueue=null,n=Jf(t,a,n,l),Kf(e),a=Ds(),e!==null&&!et?(Os(e,t,r),xn(e,t,r)):(Ee&&a&&ps(t),t.flags|=1,lt(e,t,n,r),t.child)}function Pd(e,t,n,a,l){if(pa(t),t.stateNode===null){var r=Xa,f=n.contextType;typeof f=="object"&&f!==null&&(r=ut(f)),r=new n(a,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Qs,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=a,r.state=t.memoizedState,r.refs={},Cs(t),f=n.contextType,r.context=typeof f=="object"&&f!==null?ut(f):Xa,r.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(Zs(t,n,f,a),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(f=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),f!==r.state&&Qs.enqueueReplaceState(r,r.state,null),Ii(t,a,r,l),Fi(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){r=t.stateNode;var h=t.memoizedProps,v=xa(n,h);r.props=v;var T=r.context,B=n.contextType;f=Xa,typeof B=="object"&&B!==null&&(f=ut(B));var Y=n.getDerivedStateFromProps;B=typeof Y=="function"||typeof r.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,B||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h||T!==f)&&Bd(t,r,a,f),On=!1;var O=t.memoizedState;r.state=O,Ii(t,a,r,l),Fi(),T=t.memoizedState,h||O!==T||On?(typeof Y=="function"&&(Zs(t,n,Y,a),T=t.memoizedState),(v=On||Ld(t,n,v,a,O,T,f))?(B||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=T),r.props=a,r.state=T,r.context=f,a=v):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{r=t.stateNode,Es(e,t),f=t.memoizedProps,B=xa(n,f),r.props=B,Y=t.pendingProps,O=r.context,T=n.contextType,v=Xa,typeof T=="object"&&T!==null&&(v=ut(T)),h=n.getDerivedStateFromProps,(T=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f!==Y||O!==v)&&Bd(t,r,a,v),On=!1,O=t.memoizedState,r.state=O,Ii(t,a,r,l),Fi();var _=t.memoizedState;f!==Y||O!==_||On||e!==null&&e.dependencies!==null&&fr(e.dependencies)?(typeof h=="function"&&(Zs(t,n,h,a),_=t.memoizedState),(B=On||Ld(t,n,B,a,O,_,v)||e!==null&&e.dependencies!==null&&fr(e.dependencies))?(T||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,_,v),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,_,v)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=_),r.props=a,r.state=_,r.context=v,a=B):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),a=!1)}return r=a,Mr(e,t),a=(t.flags&128)!==0,r||a?(r=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&a?(t.child=ti(t,e.child,null,l),t.child=ti(t,null,n,l)):lt(e,t,n,l),t.memoizedState=r.state,e=t.child):e=xn(e,t,l),e}function Fd(e,t,n,a){return Gi(),t.flags|=256,lt(e,t,n,a),t.child}var Ws={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ps(e){return{baseLanes:e,cachePool:Hf()}}function Fs(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ht),e}function Id(e,t,n){var a=t.pendingProps,l=!1,r=(t.flags&128)!==0,f;if((f=r)||(f=e!==null&&e.memoizedState===null?!1:(Fe.current&2)!==0),f&&(l=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ee){if(l?Bn(t):Un(),Ee){var h=qe,v;if(v=h){e:{for(v=h,h=Pt;v.nodeType!==8;){if(!h){h=null;break e}if(v=Qt(v.nextSibling),v===null){h=null;break e}}h=v}h!==null?(t.memoizedState={dehydrated:h,treeContext:ua!==null?{id:fn,overflow:dn}:null,retryLane:536870912,hydrationErrors:null},v=Et(18,null,null,0),v.stateNode=h,v.return=t,t.child=v,ht=t,qe=null,v=!0):v=!1}v||da(t)}if(h=t.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return Nu(h)?t.lanes=32:t.lanes=536870912,null;gn(t)}return h=a.children,a=a.fallback,l?(Un(),l=t.mode,h=Rr({mode:"hidden",children:h},l),a=sa(a,l,n,null),h.return=t,a.return=t,h.sibling=a,t.child=h,l=t.child,l.memoizedState=Ps(n),l.childLanes=Fs(e,f,n),t.memoizedState=Ws,a):(Bn(t),Is(t,h))}if(v=e.memoizedState,v!==null&&(h=v.dehydrated,h!==null)){if(r)t.flags&256?(Bn(t),t.flags&=-257,t=eu(e,t,n)):t.memoizedState!==null?(Un(),t.child=e.child,t.flags|=128,t=null):(Un(),l=a.fallback,h=t.mode,a=Rr({mode:"visible",children:a.children},h),l=sa(l,h,n,null),l.flags|=2,a.return=t,l.return=t,a.sibling=l,t.child=a,ti(t,e.child,null,n),a=t.child,a.memoizedState=Ps(n),a.childLanes=Fs(e,f,n),t.memoizedState=Ws,t=l);else if(Bn(t),Nu(h)){if(f=h.nextSibling&&h.nextSibling.dataset,f)var T=f.dgst;f=T,a=Error(u(419)),a.stack="",a.digest=f,Xi({value:a,source:null,stack:null}),t=eu(e,t,n)}else if(et||Zi(e,t,n,!1),f=(n&e.childLanes)!==0,et||f){if(f=Le,f!==null&&(a=n&-n,a=(a&42)!==0?1:Gt(a),a=(a&(f.suspendedLanes|n))!==0?0:a,a!==0&&a!==v.retryLane))throw v.retryLane=a,Ga(e,a),Mt(f,e,a),Gd;h.data==="$?"||bu(),t=eu(e,t,n)}else h.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,qe=Qt(h.nextSibling),ht=t,Ee=!0,fa=null,Pt=!1,e!==null&&(Lt[Bt++]=fn,Lt[Bt++]=dn,Lt[Bt++]=ua,fn=e.id,dn=e.overflow,ua=t),t=Is(t,a.children),t.flags|=4096);return t}return l?(Un(),l=a.fallback,h=t.mode,v=e.child,T=v.sibling,a=cn(v,{mode:"hidden",children:a.children}),a.subtreeFlags=v.subtreeFlags&65011712,T!==null?l=cn(T,l):(l=sa(l,h,n,null),l.flags|=2),l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,h=e.child.memoizedState,h===null?h=Ps(n):(v=h.cachePool,v!==null?(T=Pe._currentValue,v=v.parent!==T?{parent:T,pool:T}:v):v=Hf(),h={baseLanes:h.baseLanes|n,cachePool:v}),l.memoizedState=h,l.childLanes=Fs(e,f,n),t.memoizedState=Ws,a):(Bn(t),n=e.child,e=n.sibling,n=cn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function Is(e,t){return t=Rr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Rr(e,t){return e=Et(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function eu(e,t,n){return ti(t,e.child,null,n),e=Is(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function eh(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),bs(e.return,t,n)}function tu(e,t,n,a,l){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=n,r.tailMode=l)}function th(e,t,n){var a=t.pendingProps,l=a.revealOrder,r=a.tail;if(lt(e,t,a.children,n),a=Fe.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&eh(e,n,t);else if(e.tag===19)eh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(W(Fe,a),l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&kr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),tu(t,!1,l,n,r);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&kr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}tu(t,!0,n,null,r);break;case"together":tu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Zi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function nu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&fr(e)))}function z1(e,t,n){switch(t.tag){case 3:we(t,t.stateNode.containerInfo),Dn(t,Pe,e.memoizedState.cache),Gi();break;case 27:case 5:Jt(t);break;case 4:we(t,t.stateNode.containerInfo);break;case 10:Dn(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Bn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Id(e,t,n):(Bn(t),e=xn(e,t,n),e!==null?e.sibling:null);Bn(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Zi(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return th(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),W(Fe,Fe.current),a)break;return null;case 22:case 23:return t.lanes=0,Kd(e,t,n);case 24:Dn(t,Pe,e.memoizedState.cache)}return xn(e,t,n)}function nh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)et=!0;else{if(!nu(e,n)&&(t.flags&128)===0)return et=!1,z1(e,t,n);et=(e.flags&131072)!==0}else et=!1,Ee&&(t.flags&1048576)!==0&&Df(t,cr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,l=a._init;if(a=l(a._payload),t.type=a,typeof a=="function")fs(a)?(e=xa(a,e),t.tag=1,t=Pd(null,t,a,e,n)):(t.tag=0,t=Js(null,t,a,e,n));else{if(a!=null){if(l=a.$$typeof,l===Z){t.tag=11,t=Xd(null,t,a,e,n);break e}else if(l===Q){t.tag=14,t=Zd(null,t,a,e,n);break e}}throw t=pt(a)||a,Error(u(306,t,""))}}return t;case 0:return Js(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=xa(a,t.pendingProps),Pd(e,t,a,l,n);case 3:e:{if(we(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var r=t.memoizedState;l=r.element,Es(e,t),Ii(t,a,null,n);var f=t.memoizedState;if(a=f.cache,Dn(t,Pe,a),a!==r.cache&&vs(t,[Pe],n,!0),Fi(),a=f.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Fd(e,t,a,n);break e}else if(a!==l){l=_t(Error(u(424)),t),Xi(l),t=Fd(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(qe=Qt(e.firstChild),ht=t,Ee=!0,fa=null,Pt=!0,n=_d(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Gi(),a===l){t=xn(e,t,n);break e}lt(e,t,a,n)}t=t.child}return t;case 26:return Mr(e,t),e===null?(n=r0(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ee||(n=t.type,e=t.pendingProps,a=Xr(ne.current).createElement(n),a[st]=t,a[gt]=e,ot(a,n,e),Ie(a),t.stateNode=a):t.memoizedState=r0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Jt(t),e===null&&Ee&&(a=t.stateNode=a0(t.type,t.pendingProps,ne.current),ht=t,Pt=!0,l=qe,Qn(t.type)?(Lu=l,qe=Qt(a.firstChild)):qe=l),lt(e,t,t.pendingProps.children,n),Mr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ee&&((l=a=qe)&&(a=eg(a,t.type,t.pendingProps,Pt),a!==null?(t.stateNode=a,ht=t,qe=Qt(a.firstChild),Pt=!1,l=!0):l=!1),l||da(t)),Jt(t),l=t.type,r=t.pendingProps,f=e!==null?e.memoizedProps:null,a=r.children,Du(l,r)?a=null:f!==null&&Du(l,f)&&(t.flags|=32),t.memoizedState!==null&&(l=Rs(e,t,b1,null,null,n),wl._currentValue=l),Mr(e,t),lt(e,t,a,n),t.child;case 6:return e===null&&Ee&&((e=n=qe)&&(n=tg(n,t.pendingProps,Pt),n!==null?(t.stateNode=n,ht=t,qe=null,e=!0):e=!1),e||da(t)),null;case 13:return Id(e,t,n);case 4:return we(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ti(t,null,a,n):lt(e,t,a,n),t.child;case 11:return Xd(e,t,t.type,t.pendingProps,n);case 7:return lt(e,t,t.pendingProps,n),t.child;case 8:return lt(e,t,t.pendingProps.children,n),t.child;case 12:return lt(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Dn(t,t.type,a.value),lt(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,pa(t),l=ut(l),a=a(l),t.flags|=1,lt(e,t,a,n),t.child;case 14:return Zd(e,t,t.type,t.pendingProps,n);case 15:return Qd(e,t,t.type,t.pendingProps,n);case 19:return th(e,t,n);case 31:return a=t.pendingProps,n=t.mode,a={mode:a.mode,children:a.children},e===null?(n=Rr(a,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=cn(e.child,a),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Kd(e,t,n);case 24:return pa(t),a=ut(Pe),e===null?(l=Ss(),l===null&&(l=Le,r=ys(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=n),l=r),t.memoizedState={parent:a,cache:l},Cs(t),Dn(t,Pe,l)):((e.lanes&n)!==0&&(Es(e,t),Ii(t,null,null,n),Fi()),l=e.memoizedState,r=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Dn(t,Pe,a)):(a=r.cache,Dn(t,Pe,a),a!==l.cache&&vs(t,[Pe],n,!0))),lt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function bn(e){e.flags|=4}function ah(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!f0(t)){if(t=Ut.current,t!==null&&((Se&4194048)===Se?Ft!==null:(Se&62914560)!==Se&&(Se&536870912)===0||t!==Ft))throw Wi=js,Yf;e.flags|=8192}}function Dr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?I():536870912,e.lanes|=t,li|=t)}function rl(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function k1(e,t,n){var a=t.pendingProps;switch(ms(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return He(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),pn(Pe),We(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Vi(t)?bn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Nf())),He(t),null;case 26:return n=t.memoizedState,e===null?(bn(t),n!==null?(He(t),ah(t,n)):(He(t),t.flags&=-16777217)):n?n!==e.memoizedState?(bn(t),He(t),ah(t,n)):(He(t),t.flags&=-16777217):(e.memoizedProps!==a&&bn(t),He(t),t.flags&=-16777217),null;case 27:St(t),n=ne.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&bn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return He(t),null}e=ee.current,Vi(t)?Of(t):(e=a0(l,a,n),t.stateNode=e,bn(t))}return He(t),null;case 5:if(St(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&bn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return He(t),null}if(e=ee.current,Vi(t))Of(t);else{switch(l=Xr(ne.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?l.createElement(n,{is:a.is}):l.createElement(n)}}e[st]=t,e[gt]=a;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(ot(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&bn(t)}}return He(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&bn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=ne.current,Vi(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=ht,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[st]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Wh(e.nodeValue,n)),e||da(t)}else e=Xr(e).createTextNode(a),e[st]=t,t.stateNode=e}return He(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Vi(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[st]=t}else Gi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),l=!1}else l=Nf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(gn(t),t):(gn(t),null)}if(gn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var r=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==l&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Dr(t,t.updateQueue),He(t),null;case 4:return We(),e===null&&ku(t.stateNode.containerInfo),He(t),null;case 10:return pn(t.type),He(t),null;case 19:if(K(Fe),l=t.memoizedState,l===null)return He(t),null;if(a=(t.flags&128)!==0,r=l.rendering,r===null)if(a)rl(l,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=kr(e),r!==null){for(t.flags|=128,rl(l,!1),e=r.updateQueue,t.updateQueue=e,Dr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Rf(n,e),n=n.sibling;return W(Fe,Fe.current&1|2),t.child}e=e.sibling}l.tail!==null&&jt()>Nr&&(t.flags|=128,a=!0,rl(l,!1),t.lanes=4194304)}else{if(!a)if(e=kr(r),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Dr(t,e),rl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!Ee)return He(t),null}else 2*jt()-l.renderingStartTime>Nr&&n!==536870912&&(t.flags|=128,a=!0,rl(l,!1),t.lanes=4194304);l.isBackwards?(r.sibling=t.child,t.child=r):(e=l.last,e!==null?e.sibling=r:t.child=r,l.last=r)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=jt(),t.sibling=null,e=Fe.current,W(Fe,a?e&1|2:e&1),t):(He(t),null);case 22:case 23:return gn(t),Ts(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),n=t.updateQueue,n!==null&&Dr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&K(ma),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),pn(Pe),He(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function A1(e,t){switch(ms(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pn(Pe),We(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return St(t),null;case 13:if(gn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Gi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(Fe),null;case 4:return We(),null;case 10:return pn(t.type),null;case 22:case 23:return gn(t),Ts(),e!==null&&K(ma),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return pn(Pe),null;case 25:return null;default:return null}}function ih(e,t){switch(ms(t),t.tag){case 3:pn(Pe),We();break;case 26:case 27:case 5:St(t);break;case 4:We();break;case 13:gn(t);break;case 19:K(Fe);break;case 10:pn(t.type);break;case 22:case 23:gn(t),Ts(),e!==null&&K(ma);break;case 24:pn(Pe)}}function ol(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var r=n.create,f=n.inst;a=r(),f.destroy=a}n=n.next}while(n!==l)}}catch(h){_e(t,t.return,h)}}function Hn(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var r=l.next;a=r;do{if((a.tag&e)===e){var f=a.inst,h=f.destroy;if(h!==void 0){f.destroy=void 0,l=t;var v=n,T=h;try{T()}catch(B){_e(l,v,B)}}}a=a.next}while(a!==r)}}catch(B){_e(t,t.return,B)}}function lh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Zf(t,n)}catch(a){_e(e,e.return,a)}}}function rh(e,t,n){n.props=xa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){_e(e,t,a)}}function sl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){_e(e,t,l)}}function It(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){_e(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){_e(e,t,l)}else n.current=null}function oh(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){_e(e,e.return,l)}}function au(e,t,n){try{var a=e.stateNode;J1(a,e.type,n,t),a[gt]=t}catch(l){_e(e,e.return,l)}}function sh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qn(e.type)||e.tag===4}function iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lu(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gr));else if(a!==4&&(a===27&&Qn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(lu(e,t,n),e=e.sibling;e!==null;)lu(e,t,n),e=e.sibling}function Or(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Qn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Or(e,t,n),e=e.sibling;e!==null;)Or(e,t,n),e=e.sibling}function uh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);ot(t,a,n),t[st]=e,t[gt]=n}catch(r){_e(e,e.return,r)}}var vn=!1,Ze=!1,ru=!1,ch=typeof WeakSet=="function"?WeakSet:Set,tt=null;function T1(e,t){if(e=e.containerInfo,Mu=Pr,e=wf(e),is(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var f=0,h=-1,v=-1,T=0,B=0,Y=e,O=null;t:for(;;){for(var _;Y!==n||l!==0&&Y.nodeType!==3||(h=f+l),Y!==r||a!==0&&Y.nodeType!==3||(v=f+a),Y.nodeType===3&&(f+=Y.nodeValue.length),(_=Y.firstChild)!==null;)O=Y,Y=_;for(;;){if(Y===e)break t;if(O===n&&++T===l&&(h=f),O===r&&++B===a&&(v=f),(_=Y.nextSibling)!==null)break;Y=O,O=Y.parentNode}Y=_}n=h===-1||v===-1?null:{start:h,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ru={focusedElem:e,selectionRange:n},Pr=!1,tt=t;tt!==null;)if(t=tt,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,tt=e;else for(;tt!==null;){switch(t=tt,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,l=r.memoizedProps,r=r.memoizedState,a=n.stateNode;try{var se=xa(n.type,l,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(se,r),a.__reactInternalSnapshotBeforeUpdate=e}catch(re){_e(n,n.return,re)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)_u(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":_u(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,tt=e;break}tt=t.return}}function fh(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Yn(e,n),a&4&&ol(5,n);break;case 1:if(Yn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(f){_e(n,n.return,f)}else{var l=xa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){_e(n,n.return,f)}}a&64&&lh(n),a&512&&sl(n,n.return);break;case 3:if(Yn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Zf(e,t)}catch(f){_e(n,n.return,f)}}break;case 27:t===null&&a&4&&uh(n);case 26:case 5:Yn(e,n),t===null&&a&4&&oh(n),a&512&&sl(n,n.return);break;case 12:Yn(e,n);break;case 13:Yn(e,n),a&4&&ph(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=U1.bind(null,n),ng(e,n))));break;case 22:if(a=n.memoizedState!==null||vn,!a){t=t!==null&&t.memoizedState!==null||Ze,l=vn;var r=Ze;vn=a,(Ze=t)&&!r?qn(e,n,(n.subtreeFlags&8772)!==0):Yn(e,n),vn=l,Ze=r}break;case 30:break;default:Yn(e,n)}}function dh(e){var t=e.alternate;t!==null&&(e.alternate=null,dh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ho(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ue=null,vt=!1;function yn(e,t,n){for(n=n.child;n!==null;)hh(e,t,n),n=n.sibling}function hh(e,t,n){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(kn,n)}catch{}switch(n.tag){case 26:Ze||It(n,t),yn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ze||It(n,t);var a=Ue,l=vt;Qn(n.type)&&(Ue=n.stateNode,vt=!1),yn(e,t,n),xl(n.stateNode),Ue=a,vt=l;break;case 5:Ze||It(n,t);case 6:if(a=Ue,l=vt,Ue=null,yn(e,t,n),Ue=a,vt=l,Ue!==null)if(vt)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(n.stateNode)}catch(r){_e(n,t,r)}else try{Ue.removeChild(n.stateNode)}catch(r){_e(n,t,r)}break;case 18:Ue!==null&&(vt?(e=Ue,t0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),El(e)):t0(Ue,n.stateNode));break;case 4:a=Ue,l=vt,Ue=n.stateNode.containerInfo,vt=!0,yn(e,t,n),Ue=a,vt=l;break;case 0:case 11:case 14:case 15:Ze||Hn(2,n,t),Ze||Hn(4,n,t),yn(e,t,n);break;case 1:Ze||(It(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&rh(n,t,a)),yn(e,t,n);break;case 21:yn(e,t,n);break;case 22:Ze=(a=Ze)||n.memoizedState!==null,yn(e,t,n),Ze=a;break;default:yn(e,t,n)}}function ph(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{El(e)}catch(n){_e(t,t.return,n)}}function M1(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ch),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ch),t;default:throw Error(u(435,e.tag))}}function ou(e,t){var n=M1(e);t.forEach(function(a){var l=H1.bind(null,e,a);n.has(a)||(n.add(a),a.then(l,l))})}function zt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],r=e,f=t,h=f;e:for(;h!==null;){switch(h.tag){case 27:if(Qn(h.type)){Ue=h.stateNode,vt=!1;break e}break;case 5:Ue=h.stateNode,vt=!1;break e;case 3:case 4:Ue=h.stateNode.containerInfo,vt=!0;break e}h=h.return}if(Ue===null)throw Error(u(160));hh(r,f,l),Ue=null,vt=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)mh(t,e),t=t.sibling}var Zt=null;function mh(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:zt(t,e),kt(e),a&4&&(Hn(3,e,e.return),ol(3,e),Hn(5,e,e.return));break;case 1:zt(t,e),kt(e),a&512&&(Ze||n===null||It(n,n.return)),a&64&&vn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=Zt;if(zt(t,e),kt(e),a&512&&(Ze||n===null||It(n,n.return)),a&4){var r=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Di]||r[st]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(a),l.head.insertBefore(r,l.querySelector("head > title"))),ot(r,a,n),r[st]=e,Ie(r),a=r;break e;case"link":var f=u0("link","href",l).get(a+(n.href||""));if(f){for(var h=0;h<f.length;h++)if(r=f[h],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(h,1);break t}}r=l.createElement(a),ot(r,a,n),l.head.appendChild(r);break;case"meta":if(f=u0("meta","content",l).get(a+(n.content||""))){for(h=0;h<f.length;h++)if(r=f[h],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(h,1);break t}}r=l.createElement(a),ot(r,a,n),l.head.appendChild(r);break;default:throw Error(u(468,a))}r[st]=e,Ie(r),a=r}e.stateNode=a}else c0(l,e.type,e.stateNode);else e.stateNode=s0(l,a,e.memoizedProps);else r!==a?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,a===null?c0(l,e.type,e.stateNode):s0(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&au(e,e.memoizedProps,n.memoizedProps)}break;case 27:zt(t,e),kt(e),a&512&&(Ze||n===null||It(n,n.return)),n!==null&&a&4&&au(e,e.memoizedProps,n.memoizedProps);break;case 5:if(zt(t,e),kt(e),a&512&&(Ze||n===null||It(n,n.return)),e.flags&32){l=e.stateNode;try{Ba(l,"")}catch(_){_e(e,e.return,_)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,au(e,l,n!==null?n.memoizedProps:l)),a&1024&&(ru=!0);break;case 6:if(zt(t,e),kt(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(_){_e(e,e.return,_)}}break;case 3:if(Kr=null,l=Zt,Zt=Zr(t.containerInfo),zt(t,e),Zt=l,kt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{El(t.containerInfo)}catch(_){_e(e,e.return,_)}ru&&(ru=!1,gh(e));break;case 4:a=Zt,Zt=Zr(e.stateNode.containerInfo),zt(t,e),kt(e),Zt=a;break;case 12:zt(t,e),kt(e);break;case 13:zt(t,e),kt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(hu=jt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ou(e,a)));break;case 22:l=e.memoizedState!==null;var v=n!==null&&n.memoizedState!==null,T=vn,B=Ze;if(vn=T||l,Ze=B||v,zt(t,e),Ze=B,vn=T,kt(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||v||vn||Ze||ba(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){v=n=t;try{if(r=v.stateNode,l)f=r.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{h=v.stateNode;var Y=v.memoizedProps.style,O=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;h.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(_){_e(v,v.return,_)}}}else if(t.tag===6){if(n===null){v=t;try{v.stateNode.nodeValue=l?"":v.memoizedProps}catch(_){_e(v,v.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,ou(e,n))));break;case 19:zt(t,e),kt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ou(e,a)));break;case 30:break;case 21:break;default:zt(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(sh(a)){n=a;break}a=a.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var l=n.stateNode,r=iu(e);Or(e,r,l);break;case 5:var f=n.stateNode;n.flags&32&&(Ba(f,""),n.flags&=-33);var h=iu(e);Or(e,h,f);break;case 3:case 4:var v=n.stateNode.containerInfo,T=iu(e);lu(e,T,v);break;default:throw Error(u(161))}}catch(B){_e(e,e.return,B)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;gh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Yn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)fh(e,t.alternate,t),t=t.sibling}function ba(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Hn(4,t,t.return),ba(t);break;case 1:It(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&rh(t,t.return,n),ba(t);break;case 27:xl(t.stateNode);case 26:case 5:It(t,t.return),ba(t);break;case 22:t.memoizedState===null&&ba(t);break;case 30:ba(t);break;default:ba(t)}e=e.sibling}}function qn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,r=t,f=r.flags;switch(r.tag){case 0:case 11:case 15:qn(l,r,n),ol(4,r);break;case 1:if(qn(l,r,n),a=r,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(T){_e(a,a.return,T)}if(a=r,l=a.updateQueue,l!==null){var h=a.stateNode;try{var v=l.shared.hiddenCallbacks;if(v!==null)for(l.shared.hiddenCallbacks=null,l=0;l<v.length;l++)Xf(v[l],h)}catch(T){_e(a,a.return,T)}}n&&f&64&&lh(r),sl(r,r.return);break;case 27:uh(r);case 26:case 5:qn(l,r,n),n&&a===null&&f&4&&oh(r),sl(r,r.return);break;case 12:qn(l,r,n);break;case 13:qn(l,r,n),n&&f&4&&ph(l,r);break;case 22:r.memoizedState===null&&qn(l,r,n),sl(r,r.return);break;case 30:break;default:qn(l,r,n)}t=t.sibling}}function su(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Qi(n))}function uu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Qi(e))}function en(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)xh(e,t,n,a),t=t.sibling}function xh(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:en(e,t,n,a),l&2048&&ol(9,t);break;case 1:en(e,t,n,a);break;case 3:en(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Qi(e)));break;case 12:if(l&2048){en(e,t,n,a),e=t.stateNode;try{var r=t.memoizedProps,f=r.id,h=r.onPostCommit;typeof h=="function"&&h(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){_e(t,t.return,v)}}else en(e,t,n,a);break;case 13:en(e,t,n,a);break;case 23:break;case 22:r=t.stateNode,f=t.alternate,t.memoizedState!==null?r._visibility&2?en(e,t,n,a):ul(e,t):r._visibility&2?en(e,t,n,a):(r._visibility|=2,ni(e,t,n,a,(t.subtreeFlags&10256)!==0)),l&2048&&su(f,t);break;case 24:en(e,t,n,a),l&2048&&uu(t.alternate,t);break;default:en(e,t,n,a)}}function ni(e,t,n,a,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,f=t,h=n,v=a,T=f.flags;switch(f.tag){case 0:case 11:case 15:ni(r,f,h,v,l),ol(8,f);break;case 23:break;case 22:var B=f.stateNode;f.memoizedState!==null?B._visibility&2?ni(r,f,h,v,l):ul(r,f):(B._visibility|=2,ni(r,f,h,v,l)),l&&T&2048&&su(f.alternate,f);break;case 24:ni(r,f,h,v,l),l&&T&2048&&uu(f.alternate,f);break;default:ni(r,f,h,v,l)}t=t.sibling}}function ul(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:ul(n,a),l&2048&&su(a.alternate,a);break;case 24:ul(n,a),l&2048&&uu(a.alternate,a);break;default:ul(n,a)}t=t.sibling}}var cl=8192;function ai(e){if(e.subtreeFlags&cl)for(e=e.child;e!==null;)bh(e),e=e.sibling}function bh(e){switch(e.tag){case 26:ai(e),e.flags&cl&&e.memoizedState!==null&&mg(Zt,e.memoizedState,e.memoizedProps);break;case 5:ai(e);break;case 3:case 4:var t=Zt;Zt=Zr(e.stateNode.containerInfo),ai(e),Zt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=cl,cl=16777216,ai(e),cl=t):ai(e));break;default:ai(e)}}function vh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function fl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];tt=a,wh(a,e)}vh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)yh(e),e=e.sibling}function yh(e){switch(e.tag){case 0:case 11:case 15:fl(e),e.flags&2048&&Hn(9,e,e.return);break;case 3:fl(e);break;case 12:fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,_r(e)):fl(e);break;default:fl(e)}}function _r(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];tt=a,wh(a,e)}vh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Hn(8,t,t.return),_r(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,_r(t));break;default:_r(t)}e=e.sibling}}function wh(e,t){for(;tt!==null;){var n=tt;switch(n.tag){case 0:case 11:case 15:Hn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Qi(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,tt=a;else e:for(n=e;tt!==null;){a=tt;var l=a.sibling,r=a.return;if(dh(a),a===n){tt=null;break e}if(l!==null){l.return=r,tt=l;break e}tt=r}}}var R1={getCacheForType:function(e){var t=ut(Pe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},D1=typeof WeakMap=="function"?WeakMap:Map,Te=0,Le=null,xe=null,Se=0,Me=0,At=null,$n=!1,ii=!1,cu=!1,wn=0,$e=0,Vn=0,va=0,fu=0,Ht=0,li=0,dl=null,yt=null,du=!1,hu=0,Nr=1/0,Lr=null,Gn=null,rt=0,Xn=null,ri=null,oi=0,pu=0,mu=null,Sh=null,hl=0,gu=null;function Tt(){if((Te&2)!==0&&Se!==0)return Se&-Se;if(N.T!==null){var e=Ka;return e!==0?e:ju()}return Ql()}function jh(){Ht===0&&(Ht=(Se&536870912)===0||Ee?ze():536870912);var e=Ut.current;return e!==null&&(e.flags|=32),Ht}function Mt(e,t,n){(e===Le&&(Me===2||Me===9)||e.cancelPendingCommit!==null)&&(si(e,0),Zn(e,Se,Ht,!1)),Ae(e,n),((Te&2)===0||e!==Le)&&(e===Le&&((Te&2)===0&&(va|=n),$e===4&&Zn(e,Se,Ht,!1)),tn(e))}function Ch(e,t,n){if((Te&6)!==0)throw Error(u(327));var a=!n&&(t&124)===0&&(t&e.expiredLanes)===0||H(e,t),l=a?N1(e,t):vu(e,t,!0),r=a;do{if(l===0){ii&&!a&&Zn(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!O1(n)){l=vu(e,t,!1),r=!1;continue}if(l===2){if(r=t,e.errorRecoveryDisabledLanes&r)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var h=e;l=dl;var v=h.current.memoizedState.isDehydrated;if(v&&(si(h,f).flags|=256),f=vu(h,f,!1),f!==2){if(cu&&!v){h.errorRecoveryDisabledLanes|=r,va|=r,l=4;break e}r=yt,yt=l,r!==null&&(yt===null?yt=r:yt.push.apply(yt,r))}l=f}if(r=!1,l!==2)continue}}if(l===1){si(e,0),Zn(e,t,0,!0);break}e:{switch(a=e,r=l,r){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Zn(a,t,Ht,!$n);break e;case 2:yt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(l=hu+300-jt(),10<l)){if(Zn(a,t,Ht,!$n),Ta(a,0,!0)!==0)break e;a.timeoutHandle=Ih(Eh.bind(null,a,n,yt,Lr,du,t,Ht,va,li,$n,r,2,-0,0),l);break e}Eh(a,n,yt,Lr,du,t,Ht,va,li,$n,r,0,-0,0)}}break}while(!0);tn(e)}function Eh(e,t,n,a,l,r,f,h,v,T,B,Y,O,_){if(e.timeoutHandle=-1,Y=t.subtreeFlags,(Y&8192||(Y&16785408)===16785408)&&(yl={stylesheets:null,count:0,unsuspend:pg},bh(t),Y=gg(),Y!==null)){e.cancelPendingCommit=Y(Dh.bind(null,e,t,r,n,a,l,f,h,v,B,1,O,_)),Zn(e,r,f,!T);return}Dh(e,t,r,n,a,l,f,h,v)}function O1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],r=l.getSnapshot;l=l.value;try{if(!Ct(r(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zn(e,t,n,a){t&=~fu,t&=~va,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var r=31-it(l),f=1<<r;a[r]=-1,l&=~f}n!==0&&An(e,n,t)}function Br(){return(Te&6)===0?(pl(0),!1):!0}function xu(){if(xe!==null){if(Me===0)var e=xe.return;else e=xe,hn=ha=null,_s(e),ei=null,il=0,e=xe;for(;e!==null;)ih(e.alternate,e),e=e.return;xe=null}}function si(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,P1(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),xu(),Le=e,xe=n=cn(e.current,null),Se=t,Me=0,At=null,$n=!1,ii=H(e,t),cu=!1,li=Ht=fu=va=Vn=$e=0,yt=dl=null,du=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-it(a),r=1<<l;t|=e[l],a&=~r}return wn=t,lr(),n}function zh(e,t){he=null,N.H=Cr,t===Ji||t===pr?(t=Vf(),Me=3):t===Yf?(t=Vf(),Me=4):Me=t===Gd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,At=t,xe===null&&($e=1,Tr(e,_t(t,e.current)))}function kh(){var e=N.H;return N.H=Cr,e===null?Cr:e}function Ah(){var e=N.A;return N.A=R1,e}function bu(){$e=4,$n||(Se&4194048)!==Se&&Ut.current!==null||(ii=!0),(Vn&134217727)===0&&(va&134217727)===0||Le===null||Zn(Le,Se,Ht,!1)}function vu(e,t,n){var a=Te;Te|=2;var l=kh(),r=Ah();(Le!==e||Se!==t)&&(Lr=null,si(e,t)),t=!1;var f=$e;e:do try{if(Me!==0&&xe!==null){var h=xe,v=At;switch(Me){case 8:xu(),f=6;break e;case 3:case 2:case 9:case 6:Ut.current===null&&(t=!0);var T=Me;if(Me=0,At=null,ui(e,h,v,T),n&&ii){f=0;break e}break;default:T=Me,Me=0,At=null,ui(e,h,v,T)}}_1(),f=$e;break}catch(B){zh(e,B)}while(!0);return t&&e.shellSuspendCounter++,hn=ha=null,Te=a,N.H=l,N.A=r,xe===null&&(Le=null,Se=0,lr()),f}function _1(){for(;xe!==null;)Th(xe)}function N1(e,t){var n=Te;Te|=2;var a=kh(),l=Ah();Le!==e||Se!==t?(Lr=null,Nr=jt()+500,si(e,t)):ii=H(e,t);e:do try{if(Me!==0&&xe!==null){t=xe;var r=At;t:switch(Me){case 1:Me=0,At=null,ui(e,t,r,1);break;case 2:case 9:if(qf(r)){Me=0,At=null,Mh(t);break}t=function(){Me!==2&&Me!==9||Le!==e||(Me=7),tn(e)},r.then(t,t);break e;case 3:Me=7;break e;case 4:Me=5;break e;case 7:qf(r)?(Me=0,At=null,Mh(t)):(Me=0,At=null,ui(e,t,r,7));break;case 5:var f=null;switch(xe.tag){case 26:f=xe.memoizedState;case 5:case 27:var h=xe;if(!f||f0(f)){Me=0,At=null;var v=h.sibling;if(v!==null)xe=v;else{var T=h.return;T!==null?(xe=T,Ur(T)):xe=null}break t}}Me=0,At=null,ui(e,t,r,5);break;case 6:Me=0,At=null,ui(e,t,r,6);break;case 8:xu(),$e=6;break e;default:throw Error(u(462))}}L1();break}catch(B){zh(e,B)}while(!0);return hn=ha=null,N.H=a,N.A=l,Te=n,xe!==null?0:(Le=null,Se=0,lr(),$e)}function L1(){for(;xe!==null&&!za();)Th(xe)}function Th(e){var t=nh(e.alternate,e,wn);e.memoizedProps=e.pendingProps,t===null?Ur(e):xe=t}function Mh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Wd(n,t,t.pendingProps,t.type,void 0,Se);break;case 11:t=Wd(n,t,t.pendingProps,t.type.render,t.ref,Se);break;case 5:_s(t);default:ih(n,t),t=xe=Rf(t,wn),t=nh(n,t,wn)}e.memoizedProps=e.pendingProps,t===null?Ur(e):xe=t}function ui(e,t,n,a){hn=ha=null,_s(t),ei=null,il=0;var l=t.return;try{if(E1(e,l,t,n,Se)){$e=1,Tr(e,_t(n,e.current)),xe=null;return}}catch(r){if(l!==null)throw xe=l,r;$e=1,Tr(e,_t(n,e.current)),xe=null;return}t.flags&32768?(Ee||a===1?e=!0:ii||(Se&536870912)!==0?e=!1:($n=e=!0,(a===2||a===9||a===3||a===6)&&(a=Ut.current,a!==null&&a.tag===13&&(a.flags|=16384))),Rh(t,e)):Ur(t)}function Ur(e){var t=e;do{if((t.flags&32768)!==0){Rh(t,$n);return}e=t.return;var n=k1(t.alternate,t,wn);if(n!==null){xe=n;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);$e===0&&($e=5)}function Rh(e,t){do{var n=A1(e.alternate,e);if(n!==null){n.flags&=32767,xe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){xe=e;return}xe=e=n}while(e!==null);$e=6,xe=null}function Dh(e,t,n,a,l,r,f,h,v){e.cancelPendingCommit=null;do Hr();while(rt!==0);if((Te&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(r=t.lanes|t.childLanes,r|=us,Ne(e,n,r,f,h,v),e===Le&&(xe=Le=null,Se=0),ri=t,Xn=e,oi=n,pu=r,mu=l,Sh=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Y1(na,function(){return Bh(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=N.T,N.T=null,l=J.p,J.p=2,f=Te,Te|=4;try{T1(e,t,n)}finally{Te=f,J.p=l,N.T=a}}rt=1,Oh(),_h(),Nh()}}function Oh(){if(rt===1){rt=0;var e=Xn,t=ri,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=N.T,N.T=null;var a=J.p;J.p=2;var l=Te;Te|=4;try{mh(t,e);var r=Ru,f=wf(e.containerInfo),h=r.focusedElem,v=r.selectionRange;if(f!==h&&h&&h.ownerDocument&&yf(h.ownerDocument.documentElement,h)){if(v!==null&&is(h)){var T=v.start,B=v.end;if(B===void 0&&(B=T),"selectionStart"in h)h.selectionStart=T,h.selectionEnd=Math.min(B,h.value.length);else{var Y=h.ownerDocument||document,O=Y&&Y.defaultView||window;if(O.getSelection){var _=O.getSelection(),se=h.textContent.length,re=Math.min(v.start,se),Oe=v.end===void 0?re:Math.min(v.end,se);!_.extend&&re>Oe&&(f=Oe,Oe=re,re=f);var z=vf(h,re),S=vf(h,Oe);if(z&&S&&(_.rangeCount!==1||_.anchorNode!==z.node||_.anchorOffset!==z.offset||_.focusNode!==S.node||_.focusOffset!==S.offset)){var k=Y.createRange();k.setStart(z.node,z.offset),_.removeAllRanges(),re>Oe?(_.addRange(k),_.extend(S.node,S.offset)):(k.setEnd(S.node,S.offset),_.addRange(k))}}}}for(Y=[],_=h;_=_.parentNode;)_.nodeType===1&&Y.push({element:_,left:_.scrollLeft,top:_.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<Y.length;h++){var U=Y[h];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}Pr=!!Mu,Ru=Mu=null}finally{Te=l,J.p=a,N.T=n}}e.current=t,rt=2}}function _h(){if(rt===2){rt=0;var e=Xn,t=ri,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=N.T,N.T=null;var a=J.p;J.p=2;var l=Te;Te|=4;try{fh(e,t.alternate,t)}finally{Te=l,J.p=a,N.T=n}}rt=3}}function Nh(){if(rt===4||rt===3){rt=0,Gl();var e=Xn,t=ri,n=oi,a=Sh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?rt=5:(rt=0,ri=Xn=null,Lh(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Gn=null),on(n),t=t.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(kn,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=N.T,l=J.p,J.p=2,N.T=null;try{for(var r=e.onRecoverableError,f=0;f<a.length;f++){var h=a[f];r(h.value,{componentStack:h.stack})}}finally{N.T=t,J.p=l}}(oi&3)!==0&&Hr(),tn(e),l=e.pendingLanes,(n&4194090)!==0&&(l&42)!==0?e===gu?hl++:(hl=0,gu=e):hl=0,pl(0)}}function Lh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Qi(t)))}function Hr(e){return Oh(),_h(),Nh(),Bh()}function Bh(){if(rt!==5)return!1;var e=Xn,t=pu;pu=0;var n=on(oi),a=N.T,l=J.p;try{J.p=32>n?32:n,N.T=null,n=mu,mu=null;var r=Xn,f=oi;if(rt=0,ri=Xn=null,oi=0,(Te&6)!==0)throw Error(u(331));var h=Te;if(Te|=4,yh(r.current),xh(r,r.current,f,n),Te=h,pl(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(kn,r)}catch{}return!0}finally{J.p=l,N.T=a,Lh(e,t)}}function Uh(e,t,n){t=_t(n,t),t=Ks(e.stateNode,t,2),e=Nn(e,t,2),e!==null&&(Ae(e,2),tn(e))}function _e(e,t,n){if(e.tag===3)Uh(e,e,n);else for(;t!==null;){if(t.tag===3){Uh(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Gn===null||!Gn.has(a))){e=_t(n,e),n=$d(2),a=Nn(t,n,2),a!==null&&(Vd(n,a,t,e),Ae(a,2),tn(a));break}}t=t.return}}function yu(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new D1;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(cu=!0,l.add(n),e=B1.bind(null,e,t,n),t.then(e,e))}function B1(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Le===e&&(Se&n)===n&&($e===4||$e===3&&(Se&62914560)===Se&&300>jt()-hu?(Te&2)===0&&si(e,0):fu|=n,li===Se&&(li=0)),tn(e)}function Hh(e,t){t===0&&(t=I()),e=Ga(e,t),e!==null&&(Ae(e,t),tn(e))}function U1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Hh(e,n)}function H1(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),Hh(e,n)}function Y1(e,t){return $t(e,t)}var Yr=null,ci=null,wu=!1,qr=!1,Su=!1,ya=0;function tn(e){e!==ci&&e.next===null&&(ci===null?Yr=ci=e:ci=ci.next=e),qr=!0,wu||(wu=!0,$1())}function pl(e,t){if(!Su&&qr){Su=!0;do for(var n=!1,a=Yr;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var r=0;else{var f=a.suspendedLanes,h=a.pingedLanes;r=(1<<31-it(42|e)+1)-1,r&=l&~(f&~h),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Vh(a,r))}else r=Se,r=Ta(a,a===Le?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(r&3)===0||H(a,r)||(n=!0,Vh(a,r));a=a.next}while(n);Su=!1}}function q1(){Yh()}function Yh(){qr=wu=!1;var e=0;ya!==0&&(W1()&&(e=ya),ya=0);for(var t=jt(),n=null,a=Yr;a!==null;){var l=a.next,r=qh(a,t);r===0?(a.next=null,n===null?Yr=l:n.next=l,l===null&&(ci=n)):(n=a,(e!==0||(r&3)!==0)&&(qr=!0)),a=l}pl(e)}function qh(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var f=31-it(r),h=1<<f,v=l[f];v===-1?((h&n)===0||(h&a)!==0)&&(l[f]=le(h,t)):v<=t&&(e.expiredLanes|=h),r&=~h}if(t=Le,n=Se,n=Ta(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Me===2||Me===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Ti(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||H(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Ti(a),on(n)){case 2:case 8:n=Ri;break;case 32:n=na;break;case 268435456:n=Zl;break;default:n=na}return a=$h.bind(null,e),n=$t(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Ti(a),e.callbackPriority=2,e.callbackNode=null,2}function $h(e,t){if(rt!==0&&rt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hr()&&e.callbackNode!==n)return null;var a=Se;return a=Ta(e,e===Le?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Ch(e,a,t),qh(e,jt()),e.callbackNode!=null&&e.callbackNode===n?$h.bind(null,e):null)}function Vh(e,t){if(Hr())return null;Ch(e,t,!0)}function $1(){F1(function(){(Te&6)!==0?$t(Mi,q1):Yh()})}function ju(){return ya===0&&(ya=ze()),ya}function Gh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Fl(""+e)}function Xh(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function V1(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var r=Gh((l[gt]||null).action),f=a.submitter;f&&(t=(t=f[gt]||null)?Gh(t.formAction):f.getAttribute("formAction"),t!==null&&(r=t,f=null));var h=new nr("action","action",null,a,l);e.push({event:h,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ya!==0){var v=f?Xh(l,f):new FormData(l);Vs(n,{pending:!0,data:v,method:l.method,action:r},null,v)}}else typeof r=="function"&&(h.preventDefault(),v=f?Xh(l,f):new FormData(l),Vs(n,{pending:!0,data:v,method:l.method,action:r},r,v))},currentTarget:l}]})}}for(var Cu=0;Cu<ss.length;Cu++){var Eu=ss[Cu],G1=Eu.toLowerCase(),X1=Eu[0].toUpperCase()+Eu.slice(1);Xt(G1,"on"+X1)}Xt(Cf,"onAnimationEnd"),Xt(Ef,"onAnimationIteration"),Xt(zf,"onAnimationStart"),Xt("dblclick","onDoubleClick"),Xt("focusin","onFocus"),Xt("focusout","onBlur"),Xt(s1,"onTransitionRun"),Xt(u1,"onTransitionStart"),Xt(c1,"onTransitionCancel"),Xt(kf,"onTransitionEnd"),_a("onMouseEnter",["mouseout","mouseover"]),_a("onMouseLeave",["mouseout","mouseover"]),_a("onPointerEnter",["pointerout","pointerover"]),_a("onPointerLeave",["pointerout","pointerover"]),ia("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ia("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ia("onBeforeInput",["compositionend","keypress","textInput","paste"]),ia("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ia("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ia("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ml));function Zh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var r=void 0;if(t)for(var f=a.length-1;0<=f;f--){var h=a[f],v=h.instance,T=h.currentTarget;if(h=h.listener,v!==r&&l.isPropagationStopped())break e;r=h,l.currentTarget=T;try{r(l)}catch(B){Ar(B)}l.currentTarget=null,r=v}else for(f=0;f<a.length;f++){if(h=a[f],v=h.instance,T=h.currentTarget,h=h.listener,v!==r&&l.isPropagationStopped())break e;r=h,l.currentTarget=T;try{r(l)}catch(B){Ar(B)}l.currentTarget=null,r=v}}}}function be(e,t){var n=t[Uo];n===void 0&&(n=t[Uo]=new Set);var a=e+"__bubble";n.has(a)||(Qh(t,e,2,!1),n.add(a))}function zu(e,t,n){var a=0;t&&(a|=4),Qh(n,e,a,t)}var $r="_reactListening"+Math.random().toString(36).slice(2);function ku(e){if(!e[$r]){e[$r]=!0,Hc.forEach(function(n){n!=="selectionchange"&&(Z1.has(n)||zu(n,!1,e),zu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$r]||(t[$r]=!0,zu("selectionchange",!1,t))}}function Qh(e,t,n,a){switch(x0(t)){case 2:var l=vg;break;case 8:l=yg;break;default:l=qu}n=l.bind(null,t,n,e),l=void 0,!Jo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Au(e,t,n,a,l){var r=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var h=a.stateNode.containerInfo;if(h===l)break;if(f===4)for(f=a.return;f!==null;){var v=f.tag;if((v===3||v===4)&&f.stateNode.containerInfo===l)return;f=f.return}for(;h!==null;){if(f=Ra(h),f===null)return;if(v=f.tag,v===5||v===6||v===26||v===27){a=r=f;continue e}h=h.parentNode}}a=a.return}Ic(function(){var T=r,B=Qo(n),Y=[];e:{var O=Af.get(e);if(O!==void 0){var _=nr,se=e;switch(e){case"keypress":if(er(n)===0)break e;case"keydown":case"keyup":_=Ym;break;case"focusin":se="focus",_=Io;break;case"focusout":se="blur",_=Io;break;case"beforeblur":case"afterblur":_=Io;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=nf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Am;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Vm;break;case Cf:case Ef:case zf:_=Rm;break;case kf:_=Xm;break;case"scroll":case"scrollend":_=zm;break;case"wheel":_=Qm;break;case"copy":case"cut":case"paste":_=Om;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=lf;break;case"toggle":case"beforetoggle":_=Jm}var re=(t&4)!==0,Oe=!re&&(e==="scroll"||e==="scrollend"),z=re?O!==null?O+"Capture":null:O;re=[];for(var S=T,k;S!==null;){var U=S;if(k=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||k===null||z===null||(U=_i(S,z),U!=null&&re.push(gl(S,U,k))),Oe)break;S=S.return}0<re.length&&(O=new _(O,se,null,n,B),Y.push({event:O,listeners:re}))}}if((t&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",O&&n!==Zo&&(se=n.relatedTarget||n.fromElement)&&(Ra(se)||se[Ma]))break e;if((_||O)&&(O=B.window===B?B:(O=B.ownerDocument)?O.defaultView||O.parentWindow:window,_?(se=n.relatedTarget||n.toElement,_=T,se=se?Ra(se):null,se!==null&&(Oe=p(se),re=se.tag,se!==Oe||re!==5&&re!==27&&re!==6)&&(se=null)):(_=null,se=T),_!==se)){if(re=nf,U="onMouseLeave",z="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(re=lf,U="onPointerLeave",z="onPointerEnter",S="pointer"),Oe=_==null?O:Oi(_),k=se==null?O:Oi(se),O=new re(U,S+"leave",_,n,B),O.target=Oe,O.relatedTarget=k,U=null,Ra(B)===T&&(re=new re(z,S+"enter",se,n,B),re.target=k,re.relatedTarget=Oe,U=re),Oe=U,_&&se)t:{for(re=_,z=se,S=0,k=re;k;k=fi(k))S++;for(k=0,U=z;U;U=fi(U))k++;for(;0<S-k;)re=fi(re),S--;for(;0<k-S;)z=fi(z),k--;for(;S--;){if(re===z||z!==null&&re===z.alternate)break t;re=fi(re),z=fi(z)}re=null}else re=null;_!==null&&Kh(Y,O,_,re,!1),se!==null&&Oe!==null&&Kh(Y,Oe,se,re,!0)}}e:{if(O=T?Oi(T):window,_=O.nodeName&&O.nodeName.toLowerCase(),_==="select"||_==="input"&&O.type==="file")var te=hf;else if(ff(O))if(pf)te=l1;else{te=a1;var me=n1}else _=O.nodeName,!_||_.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?T&&Xo(T.elementType)&&(te=hf):te=i1;if(te&&(te=te(e,T))){df(Y,te,n,B);break e}me&&me(e,O,T),e==="focusout"&&T&&O.type==="number"&&T.memoizedProps.value!=null&&Go(O,"number",O.value)}switch(me=T?Oi(T):window,e){case"focusin":(ff(me)||me.contentEditable==="true")&&(qa=me,ls=T,$i=null);break;case"focusout":$i=ls=qa=null;break;case"mousedown":rs=!0;break;case"contextmenu":case"mouseup":case"dragend":rs=!1,Sf(Y,n,B);break;case"selectionchange":if(o1)break;case"keydown":case"keyup":Sf(Y,n,B)}var ae;if(ts)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else Ya?uf(e,n)&&(oe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(oe="onCompositionStart");oe&&(rf&&n.locale!=="ko"&&(Ya||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&Ya&&(ae=ef()):(Rn=B,Wo="value"in Rn?Rn.value:Rn.textContent,Ya=!0)),me=Vr(T,oe),0<me.length&&(oe=new af(oe,e,null,n,B),Y.push({event:oe,listeners:me}),ae?oe.data=ae:(ae=cf(n),ae!==null&&(oe.data=ae)))),(ae=Pm?Fm(e,n):Im(e,n))&&(oe=Vr(T,"onBeforeInput"),0<oe.length&&(me=new af("onBeforeInput","beforeinput",null,n,B),Y.push({event:me,listeners:oe}),me.data=ae)),V1(Y,e,T,n,B)}Zh(Y,t)})}function gl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vr(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=_i(e,n),l!=null&&a.unshift(gl(e,l,r)),l=_i(e,t),l!=null&&a.push(gl(e,l,r))),e.tag===3)return a;e=e.return}return[]}function fi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Kh(e,t,n,a,l){for(var r=t._reactName,f=[];n!==null&&n!==a;){var h=n,v=h.alternate,T=h.stateNode;if(h=h.tag,v!==null&&v===a)break;h!==5&&h!==26&&h!==27||T===null||(v=T,l?(T=_i(n,r),T!=null&&f.unshift(gl(n,T,v))):l||(T=_i(n,r),T!=null&&f.push(gl(n,T,v)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var Q1=/\r\n?/g,K1=/\u0000|\uFFFD/g;function Jh(e){return(typeof e=="string"?e:""+e).replace(Q1,`
`).replace(K1,"")}function Wh(e,t){return t=Jh(t),Jh(e)===t}function Gr(){}function De(e,t,n,a,l,r){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Ba(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Ba(e,""+a);break;case"className":Jl(e,"class",a);break;case"tabIndex":Jl(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Jl(e,n,a);break;case"style":Pc(e,a,r);break;case"data":if(t!=="object"){Jl(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Fl(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&De(e,t,"name",l.name,l,null),De(e,t,"formEncType",l.formEncType,l,null),De(e,t,"formMethod",l.formMethod,l,null),De(e,t,"formTarget",l.formTarget,l,null)):(De(e,t,"encType",l.encType,l,null),De(e,t,"method",l.method,l,null),De(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Fl(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Gr);break;case"onScroll":a!=null&&be("scroll",e);break;case"onScrollEnd":a!=null&&be("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Fl(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":be("beforetoggle",e),be("toggle",e),Kl(e,"popover",a);break;case"xlinkActuate":sn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":sn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":sn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":sn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":sn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":sn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":sn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":sn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":sn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Kl(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Cm.get(n)||n,Kl(e,n,a))}}function Tu(e,t,n,a,l,r){switch(n){case"style":Pc(e,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Ba(e,a):(typeof a=="number"||typeof a=="bigint")&&Ba(e,""+a);break;case"onScroll":a!=null&&be("scroll",e);break;case"onScrollEnd":a!=null&&be("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Gr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Yc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),r=e[gt]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,l),typeof a=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Kl(e,n,a)}}}function ot(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",e),be("load",e);var a=!1,l=!1,r;for(r in n)if(n.hasOwnProperty(r)){var f=n[r];if(f!=null)switch(r){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:De(e,t,r,f,n,null)}}l&&De(e,t,"srcSet",n.srcSet,n,null),a&&De(e,t,"src",n.src,n,null);return;case"input":be("invalid",e);var h=r=f=l=null,v=null,T=null;for(a in n)if(n.hasOwnProperty(a)){var B=n[a];if(B!=null)switch(a){case"name":l=B;break;case"type":f=B;break;case"checked":v=B;break;case"defaultChecked":T=B;break;case"value":r=B;break;case"defaultValue":h=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(u(137,t));break;default:De(e,t,a,B,n,null)}}Qc(e,r,h,v,T,f,l,!1),Wl(e);return;case"select":be("invalid",e),a=f=r=null;for(l in n)if(n.hasOwnProperty(l)&&(h=n[l],h!=null))switch(l){case"value":r=h;break;case"defaultValue":f=h;break;case"multiple":a=h;default:De(e,t,l,h,n,null)}t=r,n=f,e.multiple=!!a,t!=null?La(e,!!a,t,!1):n!=null&&La(e,!!a,n,!0);return;case"textarea":be("invalid",e),r=l=a=null;for(f in n)if(n.hasOwnProperty(f)&&(h=n[f],h!=null))switch(f){case"value":a=h;break;case"defaultValue":l=h;break;case"children":r=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(u(91));break;default:De(e,t,f,h,n,null)}Jc(e,a,l,r),Wl(e);return;case"option":for(v in n)if(n.hasOwnProperty(v)&&(a=n[v],a!=null))switch(v){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:De(e,t,v,a,n,null)}return;case"dialog":be("beforetoggle",e),be("toggle",e),be("cancel",e),be("close",e);break;case"iframe":case"object":be("load",e);break;case"video":case"audio":for(a=0;a<ml.length;a++)be(ml[a],e);break;case"image":be("error",e),be("load",e);break;case"details":be("toggle",e);break;case"embed":case"source":case"link":be("error",e),be("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in n)if(n.hasOwnProperty(T)&&(a=n[T],a!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:De(e,t,T,a,n,null)}return;default:if(Xo(t)){for(B in n)n.hasOwnProperty(B)&&(a=n[B],a!==void 0&&Tu(e,t,B,a,n,void 0));return}}for(h in n)n.hasOwnProperty(h)&&(a=n[h],a!=null&&De(e,t,h,a,n,null))}function J1(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,f=null,h=null,v=null,T=null,B=null;for(_ in n){var Y=n[_];if(n.hasOwnProperty(_)&&Y!=null)switch(_){case"checked":break;case"value":break;case"defaultValue":v=Y;default:a.hasOwnProperty(_)||De(e,t,_,null,a,Y)}}for(var O in a){var _=a[O];if(Y=n[O],a.hasOwnProperty(O)&&(_!=null||Y!=null))switch(O){case"type":r=_;break;case"name":l=_;break;case"checked":T=_;break;case"defaultChecked":B=_;break;case"value":f=_;break;case"defaultValue":h=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(u(137,t));break;default:_!==Y&&De(e,t,O,_,a,Y)}}Vo(e,f,h,v,T,B,r,l);return;case"select":_=f=h=O=null;for(r in n)if(v=n[r],n.hasOwnProperty(r)&&v!=null)switch(r){case"value":break;case"multiple":_=v;default:a.hasOwnProperty(r)||De(e,t,r,null,a,v)}for(l in a)if(r=a[l],v=n[l],a.hasOwnProperty(l)&&(r!=null||v!=null))switch(l){case"value":O=r;break;case"defaultValue":h=r;break;case"multiple":f=r;default:r!==v&&De(e,t,l,r,a,v)}t=h,n=f,a=_,O!=null?La(e,!!n,O,!1):!!a!=!!n&&(t!=null?La(e,!!n,t,!0):La(e,!!n,n?[]:"",!1));return;case"textarea":_=O=null;for(h in n)if(l=n[h],n.hasOwnProperty(h)&&l!=null&&!a.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:De(e,t,h,null,a,l)}for(f in a)if(l=a[f],r=n[f],a.hasOwnProperty(f)&&(l!=null||r!=null))switch(f){case"value":O=l;break;case"defaultValue":_=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(u(91));break;default:l!==r&&De(e,t,f,l,a,r)}Kc(e,O,_);return;case"option":for(var se in n)if(O=n[se],n.hasOwnProperty(se)&&O!=null&&!a.hasOwnProperty(se))switch(se){case"selected":e.selected=!1;break;default:De(e,t,se,null,a,O)}for(v in a)if(O=a[v],_=n[v],a.hasOwnProperty(v)&&O!==_&&(O!=null||_!=null))switch(v){case"selected":e.selected=O&&typeof O!="function"&&typeof O!="symbol";break;default:De(e,t,v,O,a,_)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in n)O=n[re],n.hasOwnProperty(re)&&O!=null&&!a.hasOwnProperty(re)&&De(e,t,re,null,a,O);for(T in a)if(O=a[T],_=n[T],a.hasOwnProperty(T)&&O!==_&&(O!=null||_!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(u(137,t));break;default:De(e,t,T,O,a,_)}return;default:if(Xo(t)){for(var Oe in n)O=n[Oe],n.hasOwnProperty(Oe)&&O!==void 0&&!a.hasOwnProperty(Oe)&&Tu(e,t,Oe,void 0,a,O);for(B in a)O=a[B],_=n[B],!a.hasOwnProperty(B)||O===_||O===void 0&&_===void 0||Tu(e,t,B,O,a,_);return}}for(var z in n)O=n[z],n.hasOwnProperty(z)&&O!=null&&!a.hasOwnProperty(z)&&De(e,t,z,null,a,O);for(Y in a)O=a[Y],_=n[Y],!a.hasOwnProperty(Y)||O===_||O==null&&_==null||De(e,t,Y,O,a,_)}var Mu=null,Ru=null;function Xr(e){return e.nodeType===9?e:e.ownerDocument}function Ph(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Du(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ou=null;function W1(){var e=window.event;return e&&e.type==="popstate"?e===Ou?!1:(Ou=e,!0):(Ou=null,!1)}var Ih=typeof setTimeout=="function"?setTimeout:void 0,P1=typeof clearTimeout=="function"?clearTimeout:void 0,e0=typeof Promise=="function"?Promise:void 0,F1=typeof queueMicrotask=="function"?queueMicrotask:typeof e0<"u"?function(e){return e0.resolve(null).then(e).catch(I1)}:Ih;function I1(e){setTimeout(function(){throw e})}function Qn(e){return e==="head"}function t0(e,t){var n=t,a=0,l=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<a&&8>a){n=a;var f=e.ownerDocument;if(n&1&&xl(f.documentElement),n&2&&xl(f.body),n&4)for(n=f.head,xl(n),f=n.firstChild;f;){var h=f.nextSibling,v=f.nodeName;f[Di]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&f.rel.toLowerCase()==="stylesheet"||n.removeChild(f),f=h}}if(l===0){e.removeChild(r),El(t);return}l--}else n==="$"||n==="$?"||n==="$!"?l++:a=n.charCodeAt(0)-48;else a=0;n=r}while(n);El(t)}function _u(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":_u(n),Ho(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function eg(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Di])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Qt(e.nextSibling),e===null)break}return null}function tg(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Qt(e.nextSibling),e===null))return null;return e}function Nu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function ng(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Lu=null;function n0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function a0(e,t,n){switch(t=Xr(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function xl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ho(e)}var Yt=new Map,i0=new Set;function Zr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Sn=J.d;J.d={f:ag,r:ig,D:lg,C:rg,L:og,m:sg,X:cg,S:ug,M:fg};function ag(){var e=Sn.f(),t=Br();return e||t}function ig(e){var t=Da(e);t!==null&&t.tag===5&&t.type==="form"?Cd(t):Sn.r(e)}var di=typeof document>"u"?null:document;function l0(e,t,n){var a=di;if(a&&typeof t=="string"&&t){var l=Ot(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),i0.has(l)||(i0.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),ot(t,"link",e),Ie(t),a.head.appendChild(t)))}}function lg(e){Sn.D(e),l0("dns-prefetch",e,null)}function rg(e,t){Sn.C(e,t),l0("preconnect",e,t)}function og(e,t,n){Sn.L(e,t,n);var a=di;if(a&&e&&t){var l='link[rel="preload"][as="'+Ot(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Ot(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Ot(n.imageSizes)+'"]')):l+='[href="'+Ot(e)+'"]';var r=l;switch(t){case"style":r=hi(e);break;case"script":r=pi(e)}Yt.has(r)||(e=C({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Yt.set(r,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(bl(r))||t==="script"&&a.querySelector(vl(r))||(t=a.createElement("link"),ot(t,"link",e),Ie(t),a.head.appendChild(t)))}}function sg(e,t){Sn.m(e,t);var n=di;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Ot(a)+'"][href="'+Ot(e)+'"]',r=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=pi(e)}if(!Yt.has(r)&&(e=C({rel:"modulepreload",href:e},t),Yt.set(r,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(vl(r)))return}a=n.createElement("link"),ot(a,"link",e),Ie(a),n.head.appendChild(a)}}}function ug(e,t,n){Sn.S(e,t,n);var a=di;if(a&&e){var l=Oa(a).hoistableStyles,r=hi(e);t=t||"default";var f=l.get(r);if(!f){var h={loading:0,preload:null};if(f=a.querySelector(bl(r)))h.loading=5;else{e=C({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Yt.get(r))&&Bu(e,n);var v=f=a.createElement("link");Ie(v),ot(v,"link",e),v._p=new Promise(function(T,B){v.onload=T,v.onerror=B}),v.addEventListener("load",function(){h.loading|=1}),v.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Qr(f,t,a)}f={type:"stylesheet",instance:f,count:1,state:h},l.set(r,f)}}}function cg(e,t){Sn.X(e,t);var n=di;if(n&&e){var a=Oa(n).hoistableScripts,l=pi(e),r=a.get(l);r||(r=n.querySelector(vl(l)),r||(e=C({src:e,async:!0},t),(t=Yt.get(l))&&Uu(e,t),r=n.createElement("script"),Ie(r),ot(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function fg(e,t){Sn.M(e,t);var n=di;if(n&&e){var a=Oa(n).hoistableScripts,l=pi(e),r=a.get(l);r||(r=n.querySelector(vl(l)),r||(e=C({src:e,async:!0,type:"module"},t),(t=Yt.get(l))&&Uu(e,t),r=n.createElement("script"),Ie(r),ot(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function r0(e,t,n,a){var l=(l=ne.current)?Zr(l):null;if(!l)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=hi(n.href),n=Oa(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=hi(n.href);var r=Oa(l).hoistableStyles,f=r.get(e);if(f||(l=l.ownerDocument||l,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,f),(r=l.querySelector(bl(e)))&&!r._p&&(f.instance=r,f.state.loading=5),Yt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Yt.set(e,n),r||dg(l,e,n,f.state))),t&&a===null)throw Error(u(528,""));return f}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=pi(n),n=Oa(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function hi(e){return'href="'+Ot(e)+'"'}function bl(e){return'link[rel="stylesheet"]['+e+"]"}function o0(e){return C({},e,{"data-precedence":e.precedence,precedence:null})}function dg(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),ot(t,"link",n),Ie(t),e.head.appendChild(t))}function pi(e){return'[src="'+Ot(e)+'"]'}function vl(e){return"script[async]"+e}function s0(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Ot(n.href)+'"]');if(a)return t.instance=a,Ie(a),a;var l=C({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ie(a),ot(a,"style",l),Qr(a,n.precedence,e),t.instance=a;case"stylesheet":l=hi(n.href);var r=e.querySelector(bl(l));if(r)return t.state.loading|=4,t.instance=r,Ie(r),r;a=o0(n),(l=Yt.get(l))&&Bu(a,l),r=(e.ownerDocument||e).createElement("link"),Ie(r);var f=r;return f._p=new Promise(function(h,v){f.onload=h,f.onerror=v}),ot(r,"link",a),t.state.loading|=4,Qr(r,n.precedence,e),t.instance=r;case"script":return r=pi(n.src),(l=e.querySelector(vl(r)))?(t.instance=l,Ie(l),l):(a=n,(l=Yt.get(r))&&(a=C({},n),Uu(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ie(l),ot(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Qr(a,n.precedence,e));return t.instance}function Qr(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,r=l,f=0;f<a.length;f++){var h=a[f];if(h.dataset.precedence===t)r=h;else if(r!==l)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Bu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Uu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Kr=null;function u0(e,t,n){if(Kr===null){var a=new Map,l=Kr=new Map;l.set(n,a)}else l=Kr,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var r=n[l];if(!(r[Di]||r[st]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var f=r.getAttribute(t)||"";f=e+f;var h=a.get(f);h?h.push(r):a.set(f,[r])}}return a}function c0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function hg(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function f0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var yl=null;function pg(){}function mg(e,t,n){if(yl===null)throw Error(u(475));var a=yl;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=hi(n.href),r=e.querySelector(bl(l));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=Jr.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=r,Ie(r);return}r=e.ownerDocument||e,n=o0(n),(l=Yt.get(l))&&Bu(n,l),r=r.createElement("link"),Ie(r);var f=r;f._p=new Promise(function(h,v){f.onload=h,f.onerror=v}),ot(r,"link",n),t.instance=r}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Jr.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function gg(){if(yl===null)throw Error(u(475));var e=yl;return e.stylesheets&&e.count===0&&Hu(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Hu(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Jr(){if(this.count--,this.count===0){if(this.stylesheets)Hu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wr=null;function Hu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wr=new Map,t.forEach(xg,e),Wr=null,Jr.call(e))}function xg(e,t){if(!(t.state.loading&4)){var n=Wr.get(e);if(n)var a=n.get(null);else{n=new Map,Wr.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var f=l[r];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),a=f)}a&&n.set(null,a)}l=t.instance,f=l.getAttribute("data-precedence"),r=n.get(f)||a,r===a&&n.set(null,l),n.set(f,l),this.count++,a=Jr.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),r?r.parentNode.insertBefore(l,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var wl={$$typeof:V,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function bg(e,t,n,a,l,r,f,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ve(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ve(0),this.hiddenUpdates=ve(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function d0(e,t,n,a,l,r,f,h,v,T,B,Y){return e=new bg(e,t,n,f,h,v,T,Y),t=1,r===!0&&(t|=24),r=Et(3,null,null,t),e.current=r,r.stateNode=e,t=ys(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:a,isDehydrated:n,cache:t},Cs(r),e}function h0(e){return e?(e=Xa,e):Xa}function p0(e,t,n,a,l,r){l=h0(l),a.context===null?a.context=l:a.pendingContext=l,a=_n(t),a.payload={element:n},r=r===void 0?null:r,r!==null&&(a.callback=r),n=Nn(e,a,t),n!==null&&(Mt(n,e,t),Pi(n,e,t))}function m0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Yu(e,t){m0(e,t),(e=e.alternate)&&m0(e,t)}function g0(e){if(e.tag===13){var t=Ga(e,67108864);t!==null&&Mt(t,e,67108864),Yu(e,67108864)}}var Pr=!0;function vg(e,t,n,a){var l=N.T;N.T=null;var r=J.p;try{J.p=2,qu(e,t,n,a)}finally{J.p=r,N.T=l}}function yg(e,t,n,a){var l=N.T;N.T=null;var r=J.p;try{J.p=8,qu(e,t,n,a)}finally{J.p=r,N.T=l}}function qu(e,t,n,a){if(Pr){var l=$u(a);if(l===null)Au(e,t,a,Fr,n),b0(e,a);else if(Sg(l,e,t,n,a))a.stopPropagation();else if(b0(e,a),t&4&&-1<wg.indexOf(e)){for(;l!==null;){var r=Da(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var f=Wt(r.pendingLanes);if(f!==0){var h=r;for(h.pendingLanes|=2,h.entangledLanes|=2;f;){var v=1<<31-it(f);h.entanglements[1]|=v,f&=~v}tn(r),(Te&6)===0&&(Nr=jt()+500,pl(0))}}break;case 13:h=Ga(r,2),h!==null&&Mt(h,r,2),Br(),Yu(r,2)}if(r=$u(a),r===null&&Au(e,t,a,Fr,n),r===l)break;l=r}l!==null&&a.stopPropagation()}else Au(e,t,a,null,n)}}function $u(e){return e=Qo(e),Vu(e)}var Fr=null;function Vu(e){if(Fr=null,e=Ra(e),e!==null){var t=p(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=b(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Fr=e,null}function x0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xl()){case Mi:return 2;case Ri:return 8;case na:case Oo:return 32;case Zl:return 268435456;default:return 32}default:return 32}}var Gu=!1,Kn=null,Jn=null,Wn=null,Sl=new Map,jl=new Map,Pn=[],wg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function b0(e,t){switch(e){case"focusin":case"focusout":Kn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Wn=null;break;case"pointerover":case"pointerout":Sl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jl.delete(t.pointerId)}}function Cl(e,t,n,a,l,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[l]},t!==null&&(t=Da(t),t!==null&&g0(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Sg(e,t,n,a,l){switch(t){case"focusin":return Kn=Cl(Kn,e,t,n,a,l),!0;case"dragenter":return Jn=Cl(Jn,e,t,n,a,l),!0;case"mouseover":return Wn=Cl(Wn,e,t,n,a,l),!0;case"pointerover":var r=l.pointerId;return Sl.set(r,Cl(Sl.get(r)||null,e,t,n,a,l)),!0;case"gotpointercapture":return r=l.pointerId,jl.set(r,Cl(jl.get(r)||null,e,t,n,a,l)),!0}return!1}function v0(e){var t=Ra(e.target);if(t!==null){var n=p(t);if(n!==null){if(t=n.tag,t===13){if(t=b(n),t!==null){e.blockedOn=t,mm(e.priority,function(){if(n.tag===13){var a=Tt();a=Gt(a);var l=Ga(n,a);l!==null&&Mt(l,n,a),Yu(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ir(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$u(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Zo=a,n.target.dispatchEvent(a),Zo=null}else return t=Da(n),t!==null&&g0(t),e.blockedOn=n,!1;t.shift()}return!0}function y0(e,t,n){Ir(e)&&n.delete(t)}function jg(){Gu=!1,Kn!==null&&Ir(Kn)&&(Kn=null),Jn!==null&&Ir(Jn)&&(Jn=null),Wn!==null&&Ir(Wn)&&(Wn=null),Sl.forEach(y0),jl.forEach(y0)}function eo(e,t){e.blockedOn===t&&(e.blockedOn=null,Gu||(Gu=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,jg)))}var to=null;function w0(e){to!==e&&(to=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){to===e&&(to=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(Vu(a||n)===null)continue;break}var r=Da(n);r!==null&&(e.splice(t,3),t-=3,Vs(r,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function El(e){function t(v){return eo(v,e)}Kn!==null&&eo(Kn,e),Jn!==null&&eo(Jn,e),Wn!==null&&eo(Wn,e),Sl.forEach(t),jl.forEach(t);for(var n=0;n<Pn.length;n++){var a=Pn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Pn.length&&(n=Pn[0],n.blockedOn===null);)v0(n),n.blockedOn===null&&Pn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],r=n[a+1],f=l[gt]||null;if(typeof r=="function")f||w0(n);else if(f){var h=null;if(r&&r.hasAttribute("formAction")){if(l=r,f=r[gt]||null)h=f.formAction;else if(Vu(l)!==null)continue}else h=f.action;typeof h=="function"?n[a+1]=h:(n.splice(a,3),a-=3),w0(n)}}}function Xu(e){this._internalRoot=e}no.prototype.render=Xu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,a=Tt();p0(n,a,e,t,null,null)},no.prototype.unmount=Xu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;p0(e.current,2,null,e,null,null),Br(),t[Ma]=null}};function no(e){this._internalRoot=e}no.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ql();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pn.length&&t!==0&&t<Pn[n].priority;n++);Pn.splice(n,0,e),n===0&&v0(e)}};var S0=s.version;if(S0!=="19.1.0")throw Error(u(527,S0,"19.1.0"));J.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=x(t),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var Cg={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ao.isDisabled&&ao.supportsFiber)try{kn=ao.inject(Cg),dt=ao}catch{}}return kl.createRoot=function(e,t){if(!d(e))throw Error(u(299));var n=!1,a="",l=Ud,r=Hd,f=Yd,h=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(h=t.unstable_transitionCallbacks)),t=d0(e,1,!1,null,null,n,a,l,r,f,h,null),e[Ma]=t.current,ku(e),new Xu(t)},kl.hydrateRoot=function(e,t,n){if(!d(e))throw Error(u(299));var a=!1,l="",r=Ud,f=Hd,h=Yd,v=null,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(h=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(v=n.unstable_transitionCallbacks),n.formState!==void 0&&(T=n.formState)),t=d0(e,1,!0,t,n??null,a,l,r,f,h,v,T),t.context=h0(null),n=t.current,a=Tt(),a=Gt(a),l=_n(a),l.callback=null,Nn(n,l,a),n=a,t.current.lanes=n,Ae(t,n),tn(t),e[Ma]=t.current,ku(e),new no(t)},kl.version="19.1.0",kl}var D0;function _g(){if(D0)return Ku.exports;D0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}return i(),Ku.exports=Og(),Ku.exports}var Ng=_g();const Lg=Sp(Ng);var Al={},O0;function Bg(){if(O0)return Al;O0=1,Object.defineProperty(Al,"__esModule",{value:!0}),Al.parse=b,Al.serialize=m;const i=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,s=/^[\u0021-\u003A\u003C-\u007E]*$/,c=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,u=/^[\u0020-\u003A\u003D-\u007E]*$/,d=Object.prototype.toString,p=(()=>{const D=function(){};return D.prototype=Object.create(null),D})();function b(D,L){const M=new p,$=D.length;if($<2)return M;const X=(L==null?void 0:L.decode)||C;let E=0;do{const R=D.indexOf("=",E);if(R===-1)break;const V=D.indexOf(";",E),Z=V===-1?$:V;if(R>Z){E=D.lastIndexOf(";",R-1)+1;continue}const P=w(D,E,R),G=x(D,R,P),Q=D.slice(P,G);if(M[Q]===void 0){let ge=w(D,R+1,Z),ue=x(D,Z,ge);const F=X(D.slice(ge,ue));M[Q]=F}E=Z+1}while(E<$);return M}function w(D,L,M){do{const $=D.charCodeAt(L);if($!==32&&$!==9)return L}while(++L<M);return M}function x(D,L,M){for(;L>M;){const $=D.charCodeAt(--L);if($!==32&&$!==9)return L+1}return M}function m(D,L,M){const $=(M==null?void 0:M.encode)||encodeURIComponent;if(!i.test(D))throw new TypeError(`argument name is invalid: ${D}`);const X=$(L);if(!s.test(X))throw new TypeError(`argument val is invalid: ${L}`);let E=D+"="+X;if(!M)return E;if(M.maxAge!==void 0){if(!Number.isInteger(M.maxAge))throw new TypeError(`option maxAge is invalid: ${M.maxAge}`);E+="; Max-Age="+M.maxAge}if(M.domain){if(!c.test(M.domain))throw new TypeError(`option domain is invalid: ${M.domain}`);E+="; Domain="+M.domain}if(M.path){if(!u.test(M.path))throw new TypeError(`option path is invalid: ${M.path}`);E+="; Path="+M.path}if(M.expires){if(!A(M.expires)||!Number.isFinite(M.expires.valueOf()))throw new TypeError(`option expires is invalid: ${M.expires}`);E+="; Expires="+M.expires.toUTCString()}if(M.httpOnly&&(E+="; HttpOnly"),M.secure&&(E+="; Secure"),M.partitioned&&(E+="; Partitioned"),M.priority)switch(typeof M.priority=="string"?M.priority.toLowerCase():void 0){case"low":E+="; Priority=Low";break;case"medium":E+="; Priority=Medium";break;case"high":E+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${M.priority}`)}if(M.sameSite)switch(typeof M.sameSite=="string"?M.sameSite.toLowerCase():M.sameSite){case!0:case"strict":E+="; SameSite=Strict";break;case"lax":E+="; SameSite=Lax";break;case"none":E+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${M.sameSite}`)}return E}function C(D){if(D.indexOf("%")===-1)return D;try{return decodeURIComponent(D)}catch{return D}}function A(D){return d.call(D)==="[object Date]"}return Al}Bg();var _0="popstate";function Ug(i={}){function s(u,d){let{pathname:p,search:b,hash:w}=u.location;return xc("",{pathname:p,search:b,hash:w},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function c(u,d){return typeof d=="string"?d:Bl(d)}return Yg(s,c,null,i)}function Ye(i,s){if(i===!1||i===null||typeof i>"u")throw new Error(s)}function ln(i,s){if(!i){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function Hg(){return Math.random().toString(36).substring(2,10)}function N0(i,s){return{usr:i.state,key:i.key,idx:s}}function xc(i,s,c=null,u){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof s=="string"?zi(s):s,state:c,key:s&&s.key||u||Hg()}}function Bl({pathname:i="/",search:s="",hash:c=""}){return s&&s!=="?"&&(i+=s.charAt(0)==="?"?s:"?"+s),c&&c!=="#"&&(i+=c.charAt(0)==="#"?c:"#"+c),i}function zi(i){let s={};if(i){let c=i.indexOf("#");c>=0&&(s.hash=i.substring(c),i=i.substring(0,c));let u=i.indexOf("?");u>=0&&(s.search=i.substring(u),i=i.substring(0,u)),i&&(s.pathname=i)}return s}function Yg(i,s,c,u={}){let{window:d=document.defaultView,v5Compat:p=!1}=u,b=d.history,w="POP",x=null,m=C();m==null&&(m=0,b.replaceState({...b.state,idx:m},""));function C(){return(b.state||{idx:null}).idx}function A(){w="POP";let X=C(),E=X==null?null:X-m;m=X,x&&x({action:w,location:$.location,delta:E})}function D(X,E){w="PUSH";let R=xc($.location,X,E);m=C()+1;let V=N0(R,m),Z=$.createHref(R);try{b.pushState(V,"",Z)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;d.location.assign(Z)}p&&x&&x({action:w,location:$.location,delta:1})}function L(X,E){w="REPLACE";let R=xc($.location,X,E);m=C();let V=N0(R,m),Z=$.createHref(R);b.replaceState(V,"",Z),p&&x&&x({action:w,location:$.location,delta:0})}function M(X){return qg(X)}let $={get action(){return w},get location(){return i(d,b)},listen(X){if(x)throw new Error("A history only accepts one active listener");return d.addEventListener(_0,A),x=X,()=>{d.removeEventListener(_0,A),x=null}},createHref(X){return s(d,X)},createURL:M,encodeLocation(X){let E=M(X);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:D,replace:L,go(X){return b.go(X)}};return $}function qg(i,s=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),Ye(c,"No window.location.(origin|href) available to create URL");let u=typeof i=="string"?i:Bl(i);return u=u.replace(/ $/,"%20"),!s&&u.startsWith("//")&&(u=c+u),new URL(u,c)}function jp(i,s,c="/"){return $g(i,s,c,!1)}function $g(i,s,c,u){let d=typeof s=="string"?zi(s):s,p=En(d.pathname||"/",c);if(p==null)return null;let b=Cp(i);Vg(b);let w=null;for(let x=0;w==null&&x<b.length;++x){let m=ex(p);w=Fg(b[x],m,u)}return w}function Cp(i,s=[],c=[],u=""){let d=(p,b,w)=>{let x={relativePath:w===void 0?p.path||"":w,caseSensitive:p.caseSensitive===!0,childrenIndex:b,route:p};x.relativePath.startsWith("/")&&(Ye(x.relativePath.startsWith(u),`Absolute route path "${x.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(u.length));let m=Cn([u,x.relativePath]),C=c.concat(x);p.children&&p.children.length>0&&(Ye(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Cp(p.children,s,C,m)),!(p.path==null&&!p.index)&&s.push({path:m,score:Wg(m,p.index),routesMeta:C})};return i.forEach((p,b)=>{var w;if(p.path===""||!((w=p.path)!=null&&w.includes("?")))d(p,b);else for(let x of Ep(p.path))d(p,b,x)}),s}function Ep(i){let s=i.split("/");if(s.length===0)return[];let[c,...u]=s,d=c.endsWith("?"),p=c.replace(/\?$/,"");if(u.length===0)return d?[p,""]:[p];let b=Ep(u.join("/")),w=[];return w.push(...b.map(x=>x===""?p:[p,x].join("/"))),d&&w.push(...b),w.map(x=>i.startsWith("/")&&x===""?"/":x)}function Vg(i){i.sort((s,c)=>s.score!==c.score?c.score-s.score:Pg(s.routesMeta.map(u=>u.childrenIndex),c.routesMeta.map(u=>u.childrenIndex)))}var Gg=/^:[\w-]+$/,Xg=3,Zg=2,Qg=1,Kg=10,Jg=-2,L0=i=>i==="*";function Wg(i,s){let c=i.split("/"),u=c.length;return c.some(L0)&&(u+=Jg),s&&(u+=Zg),c.filter(d=>!L0(d)).reduce((d,p)=>d+(Gg.test(p)?Xg:p===""?Qg:Kg),u)}function Pg(i,s){return i.length===s.length&&i.slice(0,-1).every((u,d)=>u===s[d])?i[i.length-1]-s[s.length-1]:0}function Fg(i,s,c=!1){let{routesMeta:u}=i,d={},p="/",b=[];for(let w=0;w<u.length;++w){let x=u[w],m=w===u.length-1,C=p==="/"?s:s.slice(p.length)||"/",A=bo({path:x.relativePath,caseSensitive:x.caseSensitive,end:m},C),D=x.route;if(!A&&m&&c&&!u[u.length-1].route.index&&(A=bo({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},C)),!A)return null;Object.assign(d,A.params),b.push({params:d,pathname:Cn([p,A.pathname]),pathnameBase:ix(Cn([p,A.pathnameBase])),route:D}),A.pathnameBase!=="/"&&(p=Cn([p,A.pathnameBase]))}return b}function bo(i,s){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[c,u]=Ig(i.path,i.caseSensitive,i.end),d=s.match(c);if(!d)return null;let p=d[0],b=p.replace(/(.)\/+$/,"$1"),w=d.slice(1);return{params:u.reduce((m,{paramName:C,isOptional:A},D)=>{if(C==="*"){let M=w[D]||"";b=p.slice(0,p.length-M.length).replace(/(.)\/+$/,"$1")}const L=w[D];return A&&!L?m[C]=void 0:m[C]=(L||"").replace(/%2F/g,"/"),m},{}),pathname:p,pathnameBase:b,pattern:i}}function Ig(i,s=!1,c=!0){ln(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let u=[],d="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,w,x)=>(u.push({paramName:w,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(u.push({paramName:"*"}),d+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?d+="\\/*$":i!==""&&i!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,s?void 0:"i"),u]}function ex(i){try{return i.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return ln(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),i}}function En(i,s){if(s==="/")return i;if(!i.toLowerCase().startsWith(s.toLowerCase()))return null;let c=s.endsWith("/")?s.length-1:s.length,u=i.charAt(c);return u&&u!=="/"?null:i.slice(c)||"/"}function tx(i,s="/"){let{pathname:c,search:u="",hash:d=""}=typeof i=="string"?zi(i):i;return{pathname:c?c.startsWith("/")?c:nx(c,s):s,search:lx(u),hash:rx(d)}}function nx(i,s){let c=s.replace(/\/+$/,"").split("/");return i.split("/").forEach(d=>{d===".."?c.length>1&&c.pop():d!=="."&&c.push(d)}),c.length>1?c.join("/"):"/"}function Fu(i,s,c,u){return`Cannot include a '${i}' character in a manually specified \`to.${s}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ax(i){return i.filter((s,c)=>c===0||s.route.path&&s.route.path.length>0)}function zp(i){let s=ax(i);return s.map((c,u)=>u===s.length-1?c.pathname:c.pathnameBase)}function kp(i,s,c,u=!1){let d;typeof i=="string"?d=zi(i):(d={...i},Ye(!d.pathname||!d.pathname.includes("?"),Fu("?","pathname","search",d)),Ye(!d.pathname||!d.pathname.includes("#"),Fu("#","pathname","hash",d)),Ye(!d.search||!d.search.includes("#"),Fu("#","search","hash",d)));let p=i===""||d.pathname==="",b=p?"/":d.pathname,w;if(b==null)w=c;else{let A=s.length-1;if(!u&&b.startsWith("..")){let D=b.split("/");for(;D[0]==="..";)D.shift(),A-=1;d.pathname=D.join("/")}w=A>=0?s[A]:"/"}let x=tx(d,w),m=b&&b!=="/"&&b.endsWith("/"),C=(p||b===".")&&c.endsWith("/");return!x.pathname.endsWith("/")&&(m||C)&&(x.pathname+="/"),x}var Cn=i=>i.join("/").replace(/\/\/+/g,"/"),ix=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),lx=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,rx=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function ox(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var Ap=["POST","PUT","PATCH","DELETE"];new Set(Ap);var sx=["GET",...Ap];new Set(sx);var ki=j.createContext(null);ki.displayName="DataRouter";var Co=j.createContext(null);Co.displayName="DataRouterState";var Tp=j.createContext({isTransitioning:!1});Tp.displayName="ViewTransition";var ux=j.createContext(new Map);ux.displayName="Fetchers";var cx=j.createContext(null);cx.displayName="Await";var rn=j.createContext(null);rn.displayName="Navigation";var Hl=j.createContext(null);Hl.displayName="Location";var zn=j.createContext({outlet:null,matches:[],isDataRoute:!1});zn.displayName="Route";var Ac=j.createContext(null);Ac.displayName="RouteError";function fx(i,{relative:s}={}){Ye(Yl(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:u}=j.useContext(rn),{hash:d,pathname:p,search:b}=$l(i,{relative:s}),w=p;return c!=="/"&&(w=p==="/"?c:Cn([c,p])),u.createHref({pathname:w,search:b,hash:d})}function Yl(){return j.useContext(Hl)!=null}function ta(){return Ye(Yl(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(Hl).location}var Mp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Rp(i){j.useContext(rn).static||j.useLayoutEffect(i)}function ql(){let{isDataRoute:i}=j.useContext(zn);return i?Cx():dx()}function dx(){Ye(Yl(),"useNavigate() may be used only in the context of a <Router> component.");let i=j.useContext(ki),{basename:s,navigator:c}=j.useContext(rn),{matches:u}=j.useContext(zn),{pathname:d}=ta(),p=JSON.stringify(zp(u)),b=j.useRef(!1);return Rp(()=>{b.current=!0}),j.useCallback((x,m={})=>{if(ln(b.current,Mp),!b.current)return;if(typeof x=="number"){c.go(x);return}let C=kp(x,JSON.parse(p),d,m.relative==="path");i==null&&s!=="/"&&(C.pathname=C.pathname==="/"?s:Cn([s,C.pathname])),(m.replace?c.replace:c.push)(C,m.state,m)},[s,c,p,d,i])}j.createContext(null);function $l(i,{relative:s}={}){let{matches:c}=j.useContext(zn),{pathname:u}=ta(),d=JSON.stringify(zp(c));return j.useMemo(()=>kp(i,JSON.parse(d),u,s==="path"),[i,d,u,s])}function hx(i,s){return Dp(i,s)}function Dp(i,s,c,u){var E;Ye(Yl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=j.useContext(rn),{matches:p}=j.useContext(zn),b=p[p.length-1],w=b?b.params:{},x=b?b.pathname:"/",m=b?b.pathnameBase:"/",C=b&&b.route;{let R=C&&C.path||"";Op(x,!C||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let A=ta(),D;if(s){let R=typeof s=="string"?zi(s):s;Ye(m==="/"||((E=R.pathname)==null?void 0:E.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${R.pathname}" was given in the \`location\` prop.`),D=R}else D=A;let L=D.pathname||"/",M=L;if(m!=="/"){let R=m.replace(/^\//,"").split("/");M="/"+L.replace(/^\//,"").split("/").slice(R.length).join("/")}let $=jp(i,{pathname:M});ln(C||$!=null,`No routes matched location "${D.pathname}${D.search}${D.hash}" `),ln($==null||$[$.length-1].route.element!==void 0||$[$.length-1].route.Component!==void 0||$[$.length-1].route.lazy!==void 0,`Matched leaf route at location "${D.pathname}${D.search}${D.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let X=bx($&&$.map(R=>Object.assign({},R,{params:Object.assign({},w,R.params),pathname:Cn([m,d.encodeLocation?d.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?m:Cn([m,d.encodeLocation?d.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),p,c,u);return s&&X?j.createElement(Hl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...D},navigationType:"POP"}},X):X}function px(){let i=jx(),s=ox(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),c=i instanceof Error?i.stack:null,u="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:u},p={padding:"2px 4px",backgroundColor:u},b=null;return console.error("Error handled by React Router default ErrorBoundary:",i),b=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:p},"ErrorBoundary")," or"," ",j.createElement("code",{style:p},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},s),c?j.createElement("pre",{style:d},c):null,b)}var mx=j.createElement(px,null),gx=class extends j.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,s){return s.location!==i.location||s.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:s.error,location:s.location,revalidation:i.revalidation||s.revalidation}}componentDidCatch(i,s){console.error("React Router caught the following error during render",i,s)}render(){return this.state.error!==void 0?j.createElement(zn.Provider,{value:this.props.routeContext},j.createElement(Ac.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function xx({routeContext:i,match:s,children:c}){let u=j.useContext(ki);return u&&u.static&&u.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=s.route.id),j.createElement(zn.Provider,{value:i},c)}function bx(i,s=[],c=null,u=null){if(i==null){if(!c)return null;if(c.errors)i=c.matches;else if(s.length===0&&!c.initialized&&c.matches.length>0)i=c.matches;else return null}let d=i,p=c==null?void 0:c.errors;if(p!=null){let x=d.findIndex(m=>m.route.id&&(p==null?void 0:p[m.route.id])!==void 0);Ye(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),d=d.slice(0,Math.min(d.length,x+1))}let b=!1,w=-1;if(c)for(let x=0;x<d.length;x++){let m=d[x];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(w=x),m.route.id){let{loaderData:C,errors:A}=c,D=m.route.loader&&!C.hasOwnProperty(m.route.id)&&(!A||A[m.route.id]===void 0);if(m.route.lazy||D){b=!0,w>=0?d=d.slice(0,w+1):d=[d[0]];break}}}return d.reduceRight((x,m,C)=>{let A,D=!1,L=null,M=null;c&&(A=p&&m.route.id?p[m.route.id]:void 0,L=m.route.errorElement||mx,b&&(w<0&&C===0?(Op("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),D=!0,M=null):w===C&&(D=!0,M=m.route.hydrateFallbackElement||null)));let $=s.concat(d.slice(0,C+1)),X=()=>{let E;return A?E=L:D?E=M:m.route.Component?E=j.createElement(m.route.Component,null):m.route.element?E=m.route.element:E=x,j.createElement(xx,{match:m,routeContext:{outlet:x,matches:$,isDataRoute:c!=null},children:E})};return c&&(m.route.ErrorBoundary||m.route.errorElement||C===0)?j.createElement(gx,{location:c.location,revalidation:c.revalidation,component:L,error:A,children:X(),routeContext:{outlet:null,matches:$,isDataRoute:!0}}):X()},null)}function Tc(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vx(i){let s=j.useContext(ki);return Ye(s,Tc(i)),s}function yx(i){let s=j.useContext(Co);return Ye(s,Tc(i)),s}function wx(i){let s=j.useContext(zn);return Ye(s,Tc(i)),s}function Mc(i){let s=wx(i),c=s.matches[s.matches.length-1];return Ye(c.route.id,`${i} can only be used on routes that contain a unique "id"`),c.route.id}function Sx(){return Mc("useRouteId")}function jx(){var u;let i=j.useContext(Ac),s=yx("useRouteError"),c=Mc("useRouteError");return i!==void 0?i:(u=s.errors)==null?void 0:u[c]}function Cx(){let{router:i}=vx("useNavigate"),s=Mc("useNavigate"),c=j.useRef(!1);return Rp(()=>{c.current=!0}),j.useCallback(async(d,p={})=>{ln(c.current,Mp),c.current&&(typeof d=="number"?i.navigate(d):await i.navigate(d,{fromRouteId:s,...p}))},[i,s])}var B0={};function Op(i,s,c){!s&&!B0[i]&&(B0[i]=!0,ln(!1,c))}j.memo(Ex);function Ex({routes:i,future:s,state:c}){return Dp(i,void 0,c,s)}function In(i){Ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function zx({basename:i="/",children:s=null,location:c,navigationType:u="POP",navigator:d,static:p=!1}){Ye(!Yl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=i.replace(/^\/*/,"/"),w=j.useMemo(()=>({basename:b,navigator:d,static:p,future:{}}),[b,d,p]);typeof c=="string"&&(c=zi(c));let{pathname:x="/",search:m="",hash:C="",state:A=null,key:D="default"}=c,L=j.useMemo(()=>{let M=En(x,b);return M==null?null:{location:{pathname:M,search:m,hash:C,state:A,key:D},navigationType:u}},[b,x,m,C,A,D,u]);return ln(L!=null,`<Router basename="${b}"> is not able to match the URL "${x}${m}${C}" because it does not start with the basename, so the <Router> won't render anything.`),L==null?null:j.createElement(rn.Provider,{value:w},j.createElement(Hl.Provider,{children:s,value:L}))}function kx({children:i,location:s}){return hx(bc(i),s)}function bc(i,s=[]){let c=[];return j.Children.forEach(i,(u,d)=>{if(!j.isValidElement(u))return;let p=[...s,d];if(u.type===j.Fragment){c.push.apply(c,bc(u.props.children,p));return}Ye(u.type===In,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ye(!u.props.index||!u.props.children,"An index route cannot have child routes.");let b={id:u.props.id||p.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(b.children=bc(u.props.children,p)),c.push(b)}),c}var co="get",fo="application/x-www-form-urlencoded";function Eo(i){return i!=null&&typeof i.tagName=="string"}function Ax(i){return Eo(i)&&i.tagName.toLowerCase()==="button"}function Tx(i){return Eo(i)&&i.tagName.toLowerCase()==="form"}function Mx(i){return Eo(i)&&i.tagName.toLowerCase()==="input"}function Rx(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Dx(i,s){return i.button===0&&(!s||s==="_self")&&!Rx(i)}var io=null;function Ox(){if(io===null)try{new FormData(document.createElement("form"),0),io=!1}catch{io=!0}return io}var _x=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Iu(i){return i!=null&&!_x.has(i)?(ln(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${fo}"`),null):i}function Nx(i,s){let c,u,d,p,b;if(Tx(i)){let w=i.getAttribute("action");u=w?En(w,s):null,c=i.getAttribute("method")||co,d=Iu(i.getAttribute("enctype"))||fo,p=new FormData(i)}else if(Ax(i)||Mx(i)&&(i.type==="submit"||i.type==="image")){let w=i.form;if(w==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=i.getAttribute("formaction")||w.getAttribute("action");if(u=x?En(x,s):null,c=i.getAttribute("formmethod")||w.getAttribute("method")||co,d=Iu(i.getAttribute("formenctype"))||Iu(w.getAttribute("enctype"))||fo,p=new FormData(w,i),!Ox()){let{name:m,type:C,value:A}=i;if(C==="image"){let D=m?`${m}.`:"";p.append(`${D}x`,"0"),p.append(`${D}y`,"0")}else m&&p.append(m,A)}}else{if(Eo(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=co,u=null,d=fo,b=i}return p&&d==="text/plain"&&(b=p,p=void 0),{action:u,method:c.toLowerCase(),encType:d,formData:p,body:b}}function Rc(i,s){if(i===!1||i===null||typeof i>"u")throw new Error(s)}async function Lx(i,s){if(i.id in s)return s[i.id];try{let c=await import(i.module);return s[i.id]=c,c}catch(c){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Bx(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Ux(i,s,c){let u=await Promise.all(i.map(async d=>{let p=s.routes[d.route.id];if(p){let b=await Lx(p,c);return b.links?b.links():[]}return[]}));return $x(u.flat(1).filter(Bx).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function U0(i,s,c,u,d,p){let b=(x,m)=>c[m]?x.route.id!==c[m].route.id:!0,w=(x,m)=>{var C;return c[m].pathname!==x.pathname||((C=c[m].route.path)==null?void 0:C.endsWith("*"))&&c[m].params["*"]!==x.params["*"]};return p==="assets"?s.filter((x,m)=>b(x,m)||w(x,m)):p==="data"?s.filter((x,m)=>{var A;let C=u.routes[x.route.id];if(!C||!C.hasLoader)return!1;if(b(x,m)||w(x,m))return!0;if(x.route.shouldRevalidate){let D=x.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:((A=c[0])==null?void 0:A.params)||{},nextUrl:new URL(i,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof D=="boolean")return D}return!0}):[]}function Hx(i,s,{includeHydrateFallback:c}={}){return Yx(i.map(u=>{let d=s.routes[u.route.id];if(!d)return[];let p=[d.module];return d.clientActionModule&&(p=p.concat(d.clientActionModule)),d.clientLoaderModule&&(p=p.concat(d.clientLoaderModule)),c&&d.hydrateFallbackModule&&(p=p.concat(d.hydrateFallbackModule)),d.imports&&(p=p.concat(d.imports)),p}).flat(1))}function Yx(i){return[...new Set(i)]}function qx(i){let s={},c=Object.keys(i).sort();for(let u of c)s[u]=i[u];return s}function $x(i,s){let c=new Set;return new Set(s),i.reduce((u,d)=>{let p=JSON.stringify(qx(d));return c.has(p)||(c.add(p),u.push({key:p,link:d})),u},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Vx=new Set([100,101,204,205]);function Gx(i,s){let c=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return c.pathname==="/"?c.pathname="_root.data":s&&En(c.pathname,s)==="/"?c.pathname=`${s.replace(/\/$/,"")}/_root.data`:c.pathname=`${c.pathname.replace(/\/$/,"")}.data`,c}function _p(){let i=j.useContext(ki);return Rc(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Xx(){let i=j.useContext(Co);return Rc(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Dc=j.createContext(void 0);Dc.displayName="FrameworkContext";function Np(){let i=j.useContext(Dc);return Rc(i,"You must render this element inside a <HydratedRouter> element"),i}function Zx(i,s){let c=j.useContext(Dc),[u,d]=j.useState(!1),[p,b]=j.useState(!1),{onFocus:w,onBlur:x,onMouseEnter:m,onMouseLeave:C,onTouchStart:A}=s,D=j.useRef(null);j.useEffect(()=>{if(i==="render"&&b(!0),i==="viewport"){let $=E=>{E.forEach(R=>{b(R.isIntersecting)})},X=new IntersectionObserver($,{threshold:.5});return D.current&&X.observe(D.current),()=>{X.disconnect()}}},[i]),j.useEffect(()=>{if(u){let $=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout($)}}},[u]);let L=()=>{d(!0)},M=()=>{d(!1),b(!1)};return c?i!=="intent"?[p,D,{}]:[p,D,{onFocus:Tl(w,L),onBlur:Tl(x,M),onMouseEnter:Tl(m,L),onMouseLeave:Tl(C,M),onTouchStart:Tl(A,L)}]:[!1,D,{}]}function Tl(i,s){return c=>{i&&i(c),c.defaultPrevented||s(c)}}function Qx({page:i,...s}){let{router:c}=_p(),u=j.useMemo(()=>jp(c.routes,i,c.basename),[c.routes,i,c.basename]);return u?j.createElement(Jx,{page:i,matches:u,...s}):null}function Kx(i){let{manifest:s,routeModules:c}=Np(),[u,d]=j.useState([]);return j.useEffect(()=>{let p=!1;return Ux(i,s,c).then(b=>{p||d(b)}),()=>{p=!0}},[i,s,c]),u}function Jx({page:i,matches:s,...c}){let u=ta(),{manifest:d,routeModules:p}=Np(),{basename:b}=_p(),{loaderData:w,matches:x}=Xx(),m=j.useMemo(()=>U0(i,s,x,d,u,"data"),[i,s,x,d,u]),C=j.useMemo(()=>U0(i,s,x,d,u,"assets"),[i,s,x,d,u]),A=j.useMemo(()=>{if(i===u.pathname+u.search+u.hash)return[];let M=new Set,$=!1;if(s.forEach(E=>{var V;let R=d.routes[E.route.id];!R||!R.hasLoader||(!m.some(Z=>Z.route.id===E.route.id)&&E.route.id in w&&((V=p[E.route.id])!=null&&V.shouldRevalidate)||R.hasClientLoader?$=!0:M.add(E.route.id))}),M.size===0)return[];let X=Gx(i,b);return $&&M.size>0&&X.searchParams.set("_routes",s.filter(E=>M.has(E.route.id)).map(E=>E.route.id).join(",")),[X.pathname+X.search]},[b,w,u,d,m,s,i,p]),D=j.useMemo(()=>Hx(C,d),[C,d]),L=Kx(C);return j.createElement(j.Fragment,null,A.map(M=>j.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...c})),D.map(M=>j.createElement("link",{key:M,rel:"modulepreload",href:M,...c})),L.map(({key:M,link:$})=>j.createElement("link",{key:M,...$})))}function Wx(...i){return s=>{i.forEach(c=>{typeof c=="function"?c(s):c!=null&&(c.current=s)})}}var Lp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Lp&&(window.__reactRouterVersion="7.6.2")}catch{}function Px({basename:i,children:s,window:c}){let u=j.useRef();u.current==null&&(u.current=Ug({window:c,v5Compat:!0}));let d=u.current,[p,b]=j.useState({action:d.action,location:d.location}),w=j.useCallback(x=>{j.startTransition(()=>b(x))},[b]);return j.useLayoutEffect(()=>d.listen(w),[d,w]),j.createElement(zx,{basename:i,children:s,location:p.location,navigationType:p.action,navigator:d})}var Bp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nn=j.forwardRef(function({onClick:s,discover:c="render",prefetch:u="none",relative:d,reloadDocument:p,replace:b,state:w,target:x,to:m,preventScrollReset:C,viewTransition:A,...D},L){let{basename:M}=j.useContext(rn),$=typeof m=="string"&&Bp.test(m),X,E=!1;if(typeof m=="string"&&$&&(X=m,Lp))try{let ue=new URL(window.location.href),F=m.startsWith("//")?new URL(ue.protocol+m):new URL(m),ye=En(F.pathname,M);F.origin===ue.origin&&ye!=null?m=ye+F.search+F.hash:E=!0}catch{ln(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let R=fx(m,{relative:d}),[V,Z,P]=Zx(u,D),G=t2(m,{replace:b,state:w,target:x,preventScrollReset:C,relative:d,viewTransition:A});function Q(ue){s&&s(ue),ue.defaultPrevented||G(ue)}let ge=j.createElement("a",{...D,...P,href:X||R,onClick:E||p?s:Q,ref:Wx(L,Z),target:x,"data-discover":!$&&c==="render"?"true":void 0});return V&&!$?j.createElement(j.Fragment,null,ge,j.createElement(Qx,{page:R})):ge});nn.displayName="Link";var Fx=j.forwardRef(function({"aria-current":s="page",caseSensitive:c=!1,className:u="",end:d=!1,style:p,to:b,viewTransition:w,children:x,...m},C){let A=$l(b,{relative:m.relative}),D=ta(),L=j.useContext(Co),{navigator:M,basename:$}=j.useContext(rn),X=L!=null&&r2(A)&&w===!0,E=M.encodeLocation?M.encodeLocation(A).pathname:A.pathname,R=D.pathname,V=L&&L.navigation&&L.navigation.location?L.navigation.location.pathname:null;c||(R=R.toLowerCase(),V=V?V.toLowerCase():null,E=E.toLowerCase()),V&&$&&(V=En(V,$)||V);const Z=E!=="/"&&E.endsWith("/")?E.length-1:E.length;let P=R===E||!d&&R.startsWith(E)&&R.charAt(Z)==="/",G=V!=null&&(V===E||!d&&V.startsWith(E)&&V.charAt(E.length)==="/"),Q={isActive:P,isPending:G,isTransitioning:X},ge=P?s:void 0,ue;typeof u=="function"?ue=u(Q):ue=[u,P?"active":null,G?"pending":null,X?"transitioning":null].filter(Boolean).join(" ");let F=typeof p=="function"?p(Q):p;return j.createElement(nn,{...m,"aria-current":ge,className:ue,ref:C,style:F,to:b,viewTransition:w},typeof x=="function"?x(Q):x)});Fx.displayName="NavLink";var Ix=j.forwardRef(({discover:i="render",fetcherKey:s,navigate:c,reloadDocument:u,replace:d,state:p,method:b=co,action:w,onSubmit:x,relative:m,preventScrollReset:C,viewTransition:A,...D},L)=>{let M=i2(),$=l2(w,{relative:m}),X=b.toLowerCase()==="get"?"get":"post",E=typeof w=="string"&&Bp.test(w),R=V=>{if(x&&x(V),V.defaultPrevented)return;V.preventDefault();let Z=V.nativeEvent.submitter,P=(Z==null?void 0:Z.getAttribute("formmethod"))||b;M(Z||V.currentTarget,{fetcherKey:s,method:P,navigate:c,replace:d,state:p,relative:m,preventScrollReset:C,viewTransition:A})};return j.createElement("form",{ref:L,method:X,action:$,onSubmit:u?x:R,...D,"data-discover":!E&&i==="render"?"true":void 0})});Ix.displayName="Form";function e2(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Up(i){let s=j.useContext(ki);return Ye(s,e2(i)),s}function t2(i,{target:s,replace:c,state:u,preventScrollReset:d,relative:p,viewTransition:b}={}){let w=ql(),x=ta(),m=$l(i,{relative:p});return j.useCallback(C=>{if(Dx(C,s)){C.preventDefault();let A=c!==void 0?c:Bl(x)===Bl(m);w(i,{replace:A,state:u,preventScrollReset:d,relative:p,viewTransition:b})}},[x,w,m,c,u,s,i,d,p,b])}var n2=0,a2=()=>`__${String(++n2)}__`;function i2(){let{router:i}=Up("useSubmit"),{basename:s}=j.useContext(rn),c=Sx();return j.useCallback(async(u,d={})=>{let{action:p,method:b,encType:w,formData:x,body:m}=Nx(u,s);if(d.navigate===!1){let C=d.fetcherKey||a2();await i.fetch(C,c,d.action||p,{preventScrollReset:d.preventScrollReset,formData:x,body:m,formMethod:d.method||b,formEncType:d.encType||w,flushSync:d.flushSync})}else await i.navigate(d.action||p,{preventScrollReset:d.preventScrollReset,formData:x,body:m,formMethod:d.method||b,formEncType:d.encType||w,replace:d.replace,state:d.state,fromRouteId:c,flushSync:d.flushSync,viewTransition:d.viewTransition})},[i,s,c])}function l2(i,{relative:s}={}){let{basename:c}=j.useContext(rn),u=j.useContext(zn);Ye(u,"useFormAction must be used inside a RouteContext");let[d]=u.matches.slice(-1),p={...$l(i||".",{relative:s})},b=ta();if(i==null){p.search=b.search;let w=new URLSearchParams(p.search),x=w.getAll("index");if(x.some(C=>C==="")){w.delete("index"),x.filter(A=>A).forEach(A=>w.append("index",A));let C=w.toString();p.search=C?`?${C}`:""}}return(!i||i===".")&&d.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(p.pathname=p.pathname==="/"?c:Cn([c,p.pathname])),Bl(p)}function r2(i,s={}){let c=j.useContext(Tp);Ye(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Up("useViewTransitionState"),d=$l(i,{relative:s.relative});if(!c.isTransitioning)return!1;let p=En(c.currentLocation.pathname,u)||c.currentLocation.pathname,b=En(c.nextLocation.pathname,u)||c.nextLocation.pathname;return bo(d.pathname,b)!=null||bo(d.pathname,p)!=null}[...Vx];const Hp=j.createContext(),zo=()=>{const i=j.useContext(Hp);if(!i)throw new Error("useAuth must be used within an AuthProvider");return i},o2=({children:i})=>{const[s,c]=j.useState(null),[u,d]=j.useState(!0),p={id:"user123",email:"john.doe@gmail.com",firstName:"John",lastName:"Doe",name:"John Doe",avatar:"https://ui-avatars.com/api/?name=John+Doe&background=29ba9b&color=fff&size=40",roles:["user"],joinDate:"2024-01-15",isVerified:!0};j.useEffect(()=>{const C=localStorage.getItem("user"),A=localStorage.getItem("token");C&&A&&c(JSON.parse(C)),d(!1)},[]);const b=(C,A)=>{localStorage.setItem("user",JSON.stringify(C)),localStorage.setItem("token",A),c(C)},m={user:s,login:b,logout:()=>{localStorage.removeItem("user"),localStorage.removeItem("token"),c(null)},loginWithDummyData:()=>{b(p,"dummy-jwt-token-12345")},loading:u,isAuthenticated:!!s};return o.jsx(Hp.Provider,{value:m,children:i})};var wt=function(){return wt=Object.assign||function(s){for(var c,u=1,d=arguments.length;u<d;u++){c=arguments[u];for(var p in c)Object.prototype.hasOwnProperty.call(c,p)&&(s[p]=c[p])}return s},wt.apply(this,arguments)};function vo(i,s,c){if(c||arguments.length===2)for(var u=0,d=s.length,p;u<d;u++)(p||!(u in s))&&(p||(p=Array.prototype.slice.call(s,0,u)),p[u]=s[u]);return i.concat(p||Array.prototype.slice.call(s))}var Be="-ms-",Ll="-moz-",ke="-webkit-",Yp="comm",ko="rule",Oc="decl",s2="@import",qp="@keyframes",u2="@layer",$p=Math.abs,_c=String.fromCharCode,vc=Object.assign;function c2(i,s){return at(i,0)^45?(((s<<2^at(i,0))<<2^at(i,1))<<2^at(i,2))<<2^at(i,3):0}function Vp(i){return i.trim()}function jn(i,s){return(i=s.exec(i))?i[0]:i}function de(i,s,c){return i.replace(s,c)}function ho(i,s,c){return i.indexOf(s,c)}function at(i,s){return i.charCodeAt(s)|0}function wi(i,s,c){return i.slice(s,c)}function an(i){return i.length}function Gp(i){return i.length}function Nl(i,s){return s.push(i),i}function f2(i,s){return i.map(s).join("")}function H0(i,s){return i.filter(function(c){return!jn(c,s)})}var Ao=1,Si=1,Xp=0,qt=0,Je=0,Ai="";function To(i,s,c,u,d,p,b,w){return{value:i,root:s,parent:c,type:u,props:d,children:p,line:Ao,column:Si,length:b,return:"",siblings:w}}function ea(i,s){return vc(To("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},s)}function mi(i){for(;i.root;)i=ea(i.root,{children:[i]});Nl(i,i.siblings)}function d2(){return Je}function h2(){return Je=qt>0?at(Ai,--qt):0,Si--,Je===10&&(Si=1,Ao--),Je}function Kt(){return Je=qt<Xp?at(Ai,qt++):0,Si++,Je===10&&(Si=1,Ao++),Je}function Ca(){return at(Ai,qt)}function po(){return qt}function Mo(i,s){return wi(Ai,i,s)}function yc(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function p2(i){return Ao=Si=1,Xp=an(Ai=i),qt=0,[]}function m2(i){return Ai="",i}function ec(i){return Vp(Mo(qt-1,wc(i===91?i+2:i===40?i+1:i)))}function g2(i){for(;(Je=Ca())&&Je<33;)Kt();return yc(i)>2||yc(Je)>3?"":" "}function x2(i,s){for(;--s&&Kt()&&!(Je<48||Je>102||Je>57&&Je<65||Je>70&&Je<97););return Mo(i,po()+(s<6&&Ca()==32&&Kt()==32))}function wc(i){for(;Kt();)switch(Je){case i:return qt;case 34:case 39:i!==34&&i!==39&&wc(Je);break;case 40:i===41&&wc(i);break;case 92:Kt();break}return qt}function b2(i,s){for(;Kt()&&i+Je!==57;)if(i+Je===84&&Ca()===47)break;return"/*"+Mo(s,qt-1)+"*"+_c(i===47?i:Kt())}function v2(i){for(;!yc(Ca());)Kt();return Mo(i,qt)}function y2(i){return m2(mo("",null,null,null,[""],i=p2(i),0,[0],i))}function mo(i,s,c,u,d,p,b,w,x){for(var m=0,C=0,A=b,D=0,L=0,M=0,$=1,X=1,E=1,R=0,V="",Z=d,P=p,G=u,Q=V;X;)switch(M=R,R=Kt()){case 40:if(M!=108&&at(Q,A-1)==58){ho(Q+=de(ec(R),"&","&\f"),"&\f",$p(m?w[m-1]:0))!=-1&&(E=-1);break}case 34:case 39:case 91:Q+=ec(R);break;case 9:case 10:case 13:case 32:Q+=g2(M);break;case 92:Q+=x2(po()-1,7);continue;case 47:switch(Ca()){case 42:case 47:Nl(w2(b2(Kt(),po()),s,c,x),x);break;default:Q+="/"}break;case 123*$:w[m++]=an(Q)*E;case 125*$:case 59:case 0:switch(R){case 0:case 125:X=0;case 59+C:E==-1&&(Q=de(Q,/\f/g,"")),L>0&&an(Q)-A&&Nl(L>32?q0(Q+";",u,c,A-1,x):q0(de(Q," ","")+";",u,c,A-2,x),x);break;case 59:Q+=";";default:if(Nl(G=Y0(Q,s,c,m,C,d,w,V,Z=[],P=[],A,p),p),R===123)if(C===0)mo(Q,s,G,G,Z,p,A,w,P);else switch(D===99&&at(Q,3)===110?100:D){case 100:case 108:case 109:case 115:mo(i,G,G,u&&Nl(Y0(i,G,G,0,0,d,w,V,d,Z=[],A,P),P),d,P,A,w,u?Z:P);break;default:mo(Q,G,G,G,[""],P,0,w,P)}}m=C=L=0,$=E=1,V=Q="",A=b;break;case 58:A=1+an(Q),L=M;default:if($<1){if(R==123)--$;else if(R==125&&$++==0&&h2()==125)continue}switch(Q+=_c(R),R*$){case 38:E=C>0?1:(Q+="\f",-1);break;case 44:w[m++]=(an(Q)-1)*E,E=1;break;case 64:Ca()===45&&(Q+=ec(Kt())),D=Ca(),C=A=an(V=Q+=v2(po())),R++;break;case 45:M===45&&an(Q)==2&&($=0)}}return p}function Y0(i,s,c,u,d,p,b,w,x,m,C,A){for(var D=d-1,L=d===0?p:[""],M=Gp(L),$=0,X=0,E=0;$<u;++$)for(var R=0,V=wi(i,D+1,D=$p(X=b[$])),Z=i;R<M;++R)(Z=Vp(X>0?L[R]+" "+V:de(V,/&\f/g,L[R])))&&(x[E++]=Z);return To(i,s,c,d===0?ko:w,x,m,C,A)}function w2(i,s,c,u){return To(i,s,c,Yp,_c(d2()),wi(i,2,-2),0,u)}function q0(i,s,c,u,d){return To(i,s,c,Oc,wi(i,0,u),wi(i,u+1,-1),u,d)}function Zp(i,s,c){switch(c2(i,s)){case 5103:return ke+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ke+i+i;case 4789:return Ll+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return ke+i+Ll+i+Be+i+i;case 5936:switch(at(i,s+11)){case 114:return ke+i+Be+de(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return ke+i+Be+de(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return ke+i+Be+de(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return ke+i+Be+i+i;case 6165:return ke+i+Be+"flex-"+i+i;case 5187:return ke+i+de(i,/(\w+).+(:[^]+)/,ke+"box-$1$2"+Be+"flex-$1$2")+i;case 5443:return ke+i+Be+"flex-item-"+de(i,/flex-|-self/g,"")+(jn(i,/flex-|baseline/)?"":Be+"grid-row-"+de(i,/flex-|-self/g,""))+i;case 4675:return ke+i+Be+"flex-line-pack"+de(i,/align-content|flex-|-self/g,"")+i;case 5548:return ke+i+Be+de(i,"shrink","negative")+i;case 5292:return ke+i+Be+de(i,"basis","preferred-size")+i;case 6060:return ke+"box-"+de(i,"-grow","")+ke+i+Be+de(i,"grow","positive")+i;case 4554:return ke+de(i,/([^-])(transform)/g,"$1"+ke+"$2")+i;case 6187:return de(de(de(i,/(zoom-|grab)/,ke+"$1"),/(image-set)/,ke+"$1"),i,"")+i;case 5495:case 3959:return de(i,/(image-set\([^]*)/,ke+"$1$`$1");case 4968:return de(de(i,/(.+:)(flex-)?(.*)/,ke+"box-pack:$3"+Be+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ke+i+i;case 4200:if(!jn(i,/flex-|baseline/))return Be+"grid-column-align"+wi(i,s)+i;break;case 2592:case 3360:return Be+de(i,"template-","")+i;case 4384:case 3616:return c&&c.some(function(u,d){return s=d,jn(u.props,/grid-\w+-end/)})?~ho(i+(c=c[s].value),"span",0)?i:Be+de(i,"-start","")+i+Be+"grid-row-span:"+(~ho(c,"span",0)?jn(c,/\d+/):+jn(c,/\d+/)-+jn(i,/\d+/))+";":Be+de(i,"-start","")+i;case 4896:case 4128:return c&&c.some(function(u){return jn(u.props,/grid-\w+-start/)})?i:Be+de(de(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return de(i,/(.+)-inline(.+)/,ke+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(an(i)-1-s>6)switch(at(i,s+1)){case 109:if(at(i,s+4)!==45)break;case 102:return de(i,/(.+:)(.+)-([^]+)/,"$1"+ke+"$2-$3$1"+Ll+(at(i,s+3)==108?"$3":"$2-$3"))+i;case 115:return~ho(i,"stretch",0)?Zp(de(i,"stretch","fill-available"),s,c)+i:i}break;case 5152:case 5920:return de(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,d,p,b,w,x,m){return Be+d+":"+p+m+(b?Be+d+"-span:"+(w?x:+x-+p)+m:"")+i});case 4949:if(at(i,s+6)===121)return de(i,":",":"+ke)+i;break;case 6444:switch(at(i,at(i,14)===45?18:11)){case 120:return de(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ke+(at(i,14)===45?"inline-":"")+"box$3$1"+ke+"$2$3$1"+Be+"$2box$3")+i;case 100:return de(i,":",":"+Be)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return de(i,"scroll-","scroll-snap-")+i}return i}function yo(i,s){for(var c="",u=0;u<i.length;u++)c+=s(i[u],u,i,s)||"";return c}function S2(i,s,c,u){switch(i.type){case u2:if(i.children.length)break;case s2:case Oc:return i.return=i.return||i.value;case Yp:return"";case qp:return i.return=i.value+"{"+yo(i.children,u)+"}";case ko:if(!an(i.value=i.props.join(",")))return""}return an(c=yo(i.children,u))?i.return=i.value+"{"+c+"}":""}function j2(i){var s=Gp(i);return function(c,u,d,p){for(var b="",w=0;w<s;w++)b+=i[w](c,u,d,p)||"";return b}}function C2(i){return function(s){s.root||(s=s.return)&&i(s)}}function E2(i,s,c,u){if(i.length>-1&&!i.return)switch(i.type){case Oc:i.return=Zp(i.value,i.length,c);return;case qp:return yo([ea(i,{value:de(i.value,"@","@"+ke)})],u);case ko:if(i.length)return f2(c=i.props,function(d){switch(jn(d,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":mi(ea(i,{props:[de(d,/:(read-\w+)/,":"+Ll+"$1")]})),mi(ea(i,{props:[d]})),vc(i,{props:H0(c,u)});break;case"::placeholder":mi(ea(i,{props:[de(d,/:(plac\w+)/,":"+ke+"input-$1")]})),mi(ea(i,{props:[de(d,/:(plac\w+)/,":"+Ll+"$1")]})),mi(ea(i,{props:[de(d,/:(plac\w+)/,Be+"input-$1")]})),mi(ea(i,{props:[d]})),vc(i,{props:H0(c,u)});break}return""})}}var z2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Rt={},ji=typeof process<"u"&&Rt!==void 0&&(Rt.REACT_APP_SC_ATTR||Rt.SC_ATTR)||"data-styled",Qp="active",Kp="data-styled-version",Ro="6.1.19",Nc=`/*!sc*/
`,wo=typeof window<"u"&&typeof document<"u",k2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Rt!==void 0&&Rt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Rt.REACT_APP_SC_DISABLE_SPEEDY!==""?Rt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Rt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Rt!==void 0&&Rt.SC_DISABLE_SPEEDY!==void 0&&Rt.SC_DISABLE_SPEEDY!==""&&Rt.SC_DISABLE_SPEEDY!=="false"&&Rt.SC_DISABLE_SPEEDY),Do=Object.freeze([]),Ci=Object.freeze({});function A2(i,s,c){return c===void 0&&(c=Ci),i.theme!==c.theme&&i.theme||s||c.theme}var Jp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),T2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,M2=/(^-|-$)/g;function $0(i){return i.replace(T2,"-").replace(M2,"")}var R2=/(a)(d)/gi,lo=52,V0=function(i){return String.fromCharCode(i+(i>25?39:97))};function Sc(i){var s,c="";for(s=Math.abs(i);s>lo;s=s/lo|0)c=V0(s%lo)+c;return(V0(s%lo)+c).replace(R2,"$1-$2")}var tc,Wp=5381,vi=function(i,s){for(var c=s.length;c;)i=33*i^s.charCodeAt(--c);return i},Pp=function(i){return vi(Wp,i)};function D2(i){return Sc(Pp(i)>>>0)}function O2(i){return i.displayName||i.name||"Component"}function nc(i){return typeof i=="string"&&!0}var Fp=typeof Symbol=="function"&&Symbol.for,Ip=Fp?Symbol.for("react.memo"):60115,_2=Fp?Symbol.for("react.forward_ref"):60112,N2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},L2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},em={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},B2=((tc={})[_2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},tc[Ip]=em,tc);function G0(i){return("type"in(s=i)&&s.type.$$typeof)===Ip?em:"$$typeof"in i?B2[i.$$typeof]:N2;var s}var U2=Object.defineProperty,H2=Object.getOwnPropertyNames,X0=Object.getOwnPropertySymbols,Y2=Object.getOwnPropertyDescriptor,q2=Object.getPrototypeOf,Z0=Object.prototype;function tm(i,s,c){if(typeof s!="string"){if(Z0){var u=q2(s);u&&u!==Z0&&tm(i,u,c)}var d=H2(s);X0&&(d=d.concat(X0(s)));for(var p=G0(i),b=G0(s),w=0;w<d.length;++w){var x=d[w];if(!(x in L2||c&&c[x]||b&&x in b||p&&x in p)){var m=Y2(s,x);try{U2(i,x,m)}catch{}}}}return i}function Ei(i){return typeof i=="function"}function Lc(i){return typeof i=="object"&&"styledComponentId"in i}function ja(i,s){return i&&s?"".concat(i," ").concat(s):i||s||""}function Q0(i,s){if(i.length===0)return"";for(var c=i[0],u=1;u<i.length;u++)c+=i[u];return c}function Ul(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function jc(i,s,c){if(c===void 0&&(c=!1),!c&&!Ul(i)&&!Array.isArray(i))return s;if(Array.isArray(s))for(var u=0;u<s.length;u++)i[u]=jc(i[u],s[u]);else if(Ul(s))for(var u in s)i[u]=jc(i[u],s[u]);return i}function Bc(i,s){Object.defineProperty(i,"toString",{value:s})}function Vl(i){for(var s=[],c=1;c<arguments.length;c++)s[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(s.length>0?" Args: ".concat(s.join(", ")):""))}var $2=function(){function i(s){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=s}return i.prototype.indexOfGroup=function(s){for(var c=0,u=0;u<s;u++)c+=this.groupSizes[u];return c},i.prototype.insertRules=function(s,c){if(s>=this.groupSizes.length){for(var u=this.groupSizes,d=u.length,p=d;s>=p;)if((p<<=1)<0)throw Vl(16,"".concat(s));this.groupSizes=new Uint32Array(p),this.groupSizes.set(u),this.length=p;for(var b=d;b<p;b++)this.groupSizes[b]=0}for(var w=this.indexOfGroup(s+1),x=(b=0,c.length);b<x;b++)this.tag.insertRule(w,c[b])&&(this.groupSizes[s]++,w++)},i.prototype.clearGroup=function(s){if(s<this.length){var c=this.groupSizes[s],u=this.indexOfGroup(s),d=u+c;this.groupSizes[s]=0;for(var p=u;p<d;p++)this.tag.deleteRule(u)}},i.prototype.getGroup=function(s){var c="";if(s>=this.length||this.groupSizes[s]===0)return c;for(var u=this.groupSizes[s],d=this.indexOfGroup(s),p=d+u,b=d;b<p;b++)c+="".concat(this.tag.getRule(b)).concat(Nc);return c},i}(),go=new Map,So=new Map,xo=1,ro=function(i){if(go.has(i))return go.get(i);for(;So.has(xo);)xo++;var s=xo++;return go.set(i,s),So.set(s,i),s},V2=function(i,s){xo=s+1,go.set(i,s),So.set(s,i)},G2="style[".concat(ji,"][").concat(Kp,'="').concat(Ro,'"]'),X2=new RegExp("^".concat(ji,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Z2=function(i,s,c){for(var u,d=c.split(","),p=0,b=d.length;p<b;p++)(u=d[p])&&i.registerName(s,u)},Q2=function(i,s){for(var c,u=((c=s.textContent)!==null&&c!==void 0?c:"").split(Nc),d=[],p=0,b=u.length;p<b;p++){var w=u[p].trim();if(w){var x=w.match(X2);if(x){var m=0|parseInt(x[1],10),C=x[2];m!==0&&(V2(C,m),Z2(i,C,x[3]),i.getTag().insertRules(m,d)),d.length=0}else d.push(w)}}},K0=function(i){for(var s=document.querySelectorAll(G2),c=0,u=s.length;c<u;c++){var d=s[c];d&&d.getAttribute(ji)!==Qp&&(Q2(i,d),d.parentNode&&d.parentNode.removeChild(d))}};function K2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var nm=function(i){var s=document.head,c=i||s,u=document.createElement("style"),d=function(w){var x=Array.from(w.querySelectorAll("style[".concat(ji,"]")));return x[x.length-1]}(c),p=d!==void 0?d.nextSibling:null;u.setAttribute(ji,Qp),u.setAttribute(Kp,Ro);var b=K2();return b&&u.setAttribute("nonce",b),c.insertBefore(u,p),u},J2=function(){function i(s){this.element=nm(s),this.element.appendChild(document.createTextNode("")),this.sheet=function(c){if(c.sheet)return c.sheet;for(var u=document.styleSheets,d=0,p=u.length;d<p;d++){var b=u[d];if(b.ownerNode===c)return b}throw Vl(17)}(this.element),this.length=0}return i.prototype.insertRule=function(s,c){try{return this.sheet.insertRule(c,s),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(s){this.sheet.deleteRule(s),this.length--},i.prototype.getRule=function(s){var c=this.sheet.cssRules[s];return c&&c.cssText?c.cssText:""},i}(),W2=function(){function i(s){this.element=nm(s),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(s,c){if(s<=this.length&&s>=0){var u=document.createTextNode(c);return this.element.insertBefore(u,this.nodes[s]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(s){this.element.removeChild(this.nodes[s]),this.length--},i.prototype.getRule=function(s){return s<this.length?this.nodes[s].textContent:""},i}(),P2=function(){function i(s){this.rules=[],this.length=0}return i.prototype.insertRule=function(s,c){return s<=this.length&&(this.rules.splice(s,0,c),this.length++,!0)},i.prototype.deleteRule=function(s){this.rules.splice(s,1),this.length--},i.prototype.getRule=function(s){return s<this.length?this.rules[s]:""},i}(),J0=wo,F2={isServer:!wo,useCSSOMInjection:!k2},am=function(){function i(s,c,u){s===void 0&&(s=Ci),c===void 0&&(c={});var d=this;this.options=wt(wt({},F2),s),this.gs=c,this.names=new Map(u),this.server=!!s.isServer,!this.server&&wo&&J0&&(J0=!1,K0(this)),Bc(this,function(){return function(p){for(var b=p.getTag(),w=b.length,x="",m=function(A){var D=function(E){return So.get(E)}(A);if(D===void 0)return"continue";var L=p.names.get(D),M=b.getGroup(A);if(L===void 0||!L.size||M.length===0)return"continue";var $="".concat(ji,".g").concat(A,'[id="').concat(D,'"]'),X="";L!==void 0&&L.forEach(function(E){E.length>0&&(X+="".concat(E,","))}),x+="".concat(M).concat($,'{content:"').concat(X,'"}').concat(Nc)},C=0;C<w;C++)m(C);return x}(d)})}return i.registerId=function(s){return ro(s)},i.prototype.rehydrate=function(){!this.server&&wo&&K0(this)},i.prototype.reconstructWithOptions=function(s,c){return c===void 0&&(c=!0),new i(wt(wt({},this.options),s),this.gs,c&&this.names||void 0)},i.prototype.allocateGSInstance=function(s){return this.gs[s]=(this.gs[s]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(s=function(c){var u=c.useCSSOMInjection,d=c.target;return c.isServer?new P2(d):u?new J2(d):new W2(d)}(this.options),new $2(s)));var s},i.prototype.hasNameForId=function(s,c){return this.names.has(s)&&this.names.get(s).has(c)},i.prototype.registerName=function(s,c){if(ro(s),this.names.has(s))this.names.get(s).add(c);else{var u=new Set;u.add(c),this.names.set(s,u)}},i.prototype.insertRules=function(s,c,u){this.registerName(s,c),this.getTag().insertRules(ro(s),u)},i.prototype.clearNames=function(s){this.names.has(s)&&this.names.get(s).clear()},i.prototype.clearRules=function(s){this.getTag().clearGroup(ro(s)),this.clearNames(s)},i.prototype.clearTag=function(){this.tag=void 0},i}(),I2=/&/g,eb=/^\s*\/\/.*$/gm;function im(i,s){return i.map(function(c){return c.type==="rule"&&(c.value="".concat(s," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(s," ")),c.props=c.props.map(function(u){return"".concat(s," ").concat(u)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=im(c.children,s)),c})}function tb(i){var s,c,u,d=Ci,p=d.options,b=p===void 0?Ci:p,w=d.plugins,x=w===void 0?Do:w,m=function(D,L,M){return M.startsWith(c)&&M.endsWith(c)&&M.replaceAll(c,"").length>0?".".concat(s):D},C=x.slice();C.push(function(D){D.type===ko&&D.value.includes("&")&&(D.props[0]=D.props[0].replace(I2,c).replace(u,m))}),b.prefix&&C.push(E2),C.push(S2);var A=function(D,L,M,$){L===void 0&&(L=""),M===void 0&&(M=""),$===void 0&&($="&"),s=$,c=L,u=new RegExp("\\".concat(c,"\\b"),"g");var X=D.replace(eb,""),E=y2(M||L?"".concat(M," ").concat(L," { ").concat(X," }"):X);b.namespace&&(E=im(E,b.namespace));var R=[];return yo(E,j2(C.concat(C2(function(V){return R.push(V)})))),R};return A.hash=x.length?x.reduce(function(D,L){return L.name||Vl(15),vi(D,L.name)},Wp).toString():"",A}var nb=new am,Cc=tb(),lm=yi.createContext({shouldForwardProp:void 0,styleSheet:nb,stylis:Cc});lm.Consumer;yi.createContext(void 0);function W0(){return j.useContext(lm)}var ab=function(){function i(s,c){var u=this;this.inject=function(d,p){p===void 0&&(p=Cc);var b=u.name+p.hash;d.hasNameForId(u.id,b)||d.insertRules(u.id,b,p(u.rules,b,"@keyframes"))},this.name=s,this.id="sc-keyframes-".concat(s),this.rules=c,Bc(this,function(){throw Vl(12,String(u.name))})}return i.prototype.getName=function(s){return s===void 0&&(s=Cc),this.name+s.hash},i}(),ib=function(i){return i>="A"&&i<="Z"};function P0(i){for(var s="",c=0;c<i.length;c++){var u=i[c];if(c===1&&u==="-"&&i[0]==="-")return i;ib(u)?s+="-"+u.toLowerCase():s+=u}return s.startsWith("ms-")?"-"+s:s}var rm=function(i){return i==null||i===!1||i===""},om=function(i){var s,c,u=[];for(var d in i){var p=i[d];i.hasOwnProperty(d)&&!rm(p)&&(Array.isArray(p)&&p.isCss||Ei(p)?u.push("".concat(P0(d),":"),p,";"):Ul(p)?u.push.apply(u,vo(vo(["".concat(d," {")],om(p),!1),["}"],!1)):u.push("".concat(P0(d),": ").concat((s=d,(c=p)==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||s in z2||s.startsWith("--")?String(c).trim():"".concat(c,"px")),";")))}return u};function Ea(i,s,c,u){if(rm(i))return[];if(Lc(i))return[".".concat(i.styledComponentId)];if(Ei(i)){if(!Ei(p=i)||p.prototype&&p.prototype.isReactComponent||!s)return[i];var d=i(s);return Ea(d,s,c,u)}var p;return i instanceof ab?c?(i.inject(c,u),[i.getName(u)]):[i]:Ul(i)?om(i):Array.isArray(i)?Array.prototype.concat.apply(Do,i.map(function(b){return Ea(b,s,c,u)})):[i.toString()]}function lb(i){for(var s=0;s<i.length;s+=1){var c=i[s];if(Ei(c)&&!Lc(c))return!1}return!0}var rb=Pp(Ro),ob=function(){function i(s,c,u){this.rules=s,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&lb(s),this.componentId=c,this.baseHash=vi(rb,c),this.baseStyle=u,am.registerId(c)}return i.prototype.generateAndInjectStyles=function(s,c,u){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(s,c,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))d=ja(d,this.staticRulesId);else{var p=Q0(Ea(this.rules,s,c,u)),b=Sc(vi(this.baseHash,p)>>>0);if(!c.hasNameForId(this.componentId,b)){var w=u(p,".".concat(b),void 0,this.componentId);c.insertRules(this.componentId,b,w)}d=ja(d,b),this.staticRulesId=b}else{for(var x=vi(this.baseHash,u.hash),m="",C=0;C<this.rules.length;C++){var A=this.rules[C];if(typeof A=="string")m+=A;else if(A){var D=Q0(Ea(A,s,c,u));x=vi(x,D+C),m+=D}}if(m){var L=Sc(x>>>0);c.hasNameForId(this.componentId,L)||c.insertRules(this.componentId,L,u(m,".".concat(L),void 0,this.componentId)),d=ja(d,L)}}return d},i}(),sm=yi.createContext(void 0);sm.Consumer;var ac={};function sb(i,s,c){var u=Lc(i),d=i,p=!nc(i),b=s.attrs,w=b===void 0?Do:b,x=s.componentId,m=x===void 0?function(Z,P){var G=typeof Z!="string"?"sc":$0(Z);ac[G]=(ac[G]||0)+1;var Q="".concat(G,"-").concat(D2(Ro+G+ac[G]));return P?"".concat(P,"-").concat(Q):Q}(s.displayName,s.parentComponentId):x,C=s.displayName,A=C===void 0?function(Z){return nc(Z)?"styled.".concat(Z):"Styled(".concat(O2(Z),")")}(i):C,D=s.displayName&&s.componentId?"".concat($0(s.displayName),"-").concat(s.componentId):s.componentId||m,L=u&&d.attrs?d.attrs.concat(w).filter(Boolean):w,M=s.shouldForwardProp;if(u&&d.shouldForwardProp){var $=d.shouldForwardProp;if(s.shouldForwardProp){var X=s.shouldForwardProp;M=function(Z,P){return $(Z,P)&&X(Z,P)}}else M=$}var E=new ob(c,D,u?d.componentStyle:void 0);function R(Z,P){return function(G,Q,ge){var ue=G.attrs,F=G.componentStyle,ye=G.defaultProps,je=G.foldedComponentIds,ft=G.styledComponentId,pt=G.target,Ve=yi.useContext(sm),N=W0(),J=G.shouldForwardProp||N.shouldForwardProp,ie=A2(Q,Ve,ye)||Ci,pe=function(ce,ne,Ge){for(var we,We=wt(wt({},ne),{className:void 0,theme:Ge}),Jt=0;Jt<ce.length;Jt+=1){var St=Ei(we=ce[Jt])?we(We):we;for(var mt in St)We[mt]=mt==="className"?ja(We[mt],St[mt]):mt==="style"?wt(wt({},We[mt]),St[mt]):St[mt]}return ne.className&&(We.className=ja(We.className,ne.className)),We}(ue,Q,ie),y=pe.as||pt,q={};for(var K in pe)pe[K]===void 0||K[0]==="$"||K==="as"||K==="theme"&&pe.theme===ie||(K==="forwardedAs"?q.as=pe.forwardedAs:J&&!J(K,y)||(q[K]=pe[K]));var W=function(ce,ne){var Ge=W0(),we=ce.generateAndInjectStyles(ne,Ge.styleSheet,Ge.stylis);return we}(F,pe),ee=ja(je,ft);return W&&(ee+=" "+W),pe.className&&(ee+=" "+pe.className),q[nc(y)&&!Jp.has(y)?"class":"className"]=ee,ge&&(q.ref=ge),j.createElement(y,q)}(V,Z,P)}R.displayName=A;var V=yi.forwardRef(R);return V.attrs=L,V.componentStyle=E,V.displayName=A,V.shouldForwardProp=M,V.foldedComponentIds=u?ja(d.foldedComponentIds,d.styledComponentId):"",V.styledComponentId=D,V.target=u?d.target:i,Object.defineProperty(V,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Z){this._foldedDefaultProps=u?function(P){for(var G=[],Q=1;Q<arguments.length;Q++)G[Q-1]=arguments[Q];for(var ge=0,ue=G;ge<ue.length;ge++)jc(P,ue[ge],!0);return P}({},d.defaultProps,Z):Z}}),Bc(V,function(){return".".concat(V.styledComponentId)}),p&&tm(V,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),V}function F0(i,s){for(var c=[i[0]],u=0,d=s.length;u<d;u+=1)c.push(s[u],i[u+1]);return c}var I0=function(i){return Object.assign(i,{isCss:!0})};function ub(i){for(var s=[],c=1;c<arguments.length;c++)s[c-1]=arguments[c];if(Ei(i)||Ul(i))return I0(Ea(F0(Do,vo([i],s,!0))));var u=i;return s.length===0&&u.length===1&&typeof u[0]=="string"?Ea(u):I0(Ea(F0(u,s)))}function Ec(i,s,c){if(c===void 0&&(c=Ci),!s)throw Vl(1,s);var u=function(d){for(var p=[],b=1;b<arguments.length;b++)p[b-1]=arguments[b];return i(s,c,ub.apply(void 0,vo([d],p,!1)))};return u.attrs=function(d){return Ec(i,s,wt(wt({},c),{attrs:Array.prototype.concat(c.attrs,d).filter(Boolean)}))},u.withConfig=function(d){return Ec(i,s,wt(wt({},c),d))},u}var um=function(i){return Ec(sb,i)},g=um;Jp.forEach(function(i){g[i]=um(i)});const cb="/my-pickleball-app/ppl-logo.svg",fb=g.div`
  * {
    &:focus {
      outline: none;
    }
  }
`,db=g.nav`
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
`,hb=g.div`
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
`,pb=g.div`
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
`,mb=g.div`
  display: flex;
  gap: 40px;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`,gb=g.div`
  display: flex;
  gap: 40px;
  align-items: center;
  margin-right: 12px;

  @media (max-width: 1024px) {
    gap: 24px;
  }
`,oo=g.button`
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
`,cm=g.div`
  display: flex;
  gap: 12px;
`,zc=g.button`
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
`,xb=g.button`
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
`,bb=g(zc)`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    padding: 8px 16px;
    font-size: 14px;
  }
`,vb=g.div`
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
`,Ml=g.button`
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
`,yb=g.div`
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
`,ic=g.button`
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
`;g(cm)`
  flex-direction: column;
  gap: 8px;
  padding-top: 16px;
  border-top: 1px solid #e2e8f0;
`;const wb=g.button`
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
`,Sb=g.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`,jb=g.span`
  font-size: 15px;
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 1024px) {
    display: none;
  }
`,Cb=g.div`
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
`,lc=g.button`
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
`,Eb=g.div`
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
`;function zb(){const[i,s]=j.useState(!1),[c,u]=j.useState(0),[d,p]=j.useState(!1),b=ta(),w=ql(),{user:x,logout:m,isAuthenticated:C}=zo();j.useEffect(()=>{const L=()=>{const M=window.scrollY;s(M>72&&M>c),u(M)};return window.addEventListener("scroll",L,{passive:!0}),()=>window.removeEventListener("scroll",L)},[c]),j.useEffect(()=>{p(!1)},[b]),j.useEffect(()=>{const L=M=>{d&&!M.target.closest("[data-profile-container]")&&p(!1)};return document.addEventListener("mousedown",L),()=>document.removeEventListener("mousedown",L)},[d]);const A=L=>{w(L),p(!1)},D=()=>{m(),p(!1),w("/")};return o.jsxs(fb,{children:[o.jsxs(db,{$hidden:i,children:[o.jsxs(hb,{children:[o.jsx(pb,{onClick:()=>A("/"),children:o.jsx("img",{src:cb,alt:"Philippine Pickleball League"})}),o.jsxs(mb,{children:[o.jsxs(gb,{children:[o.jsx(oo,{onClick:()=>A("/forum"),$active:b.pathname==="/forum",children:"Forum"}),o.jsx(oo,{onClick:()=>A("/tournament"),$active:b.pathname==="/tournament",children:"Tournaments"}),o.jsx(oo,{onClick:()=>A("/ranks"),$active:b.pathname==="/ranks",children:"Ranks"}),o.jsx(oo,{onClick:()=>A("/clubs-courts"),$active:b.pathname==="/clubs-courts",children:"Clubs & Courts"})]}),C?o.jsxs(Eb,{"data-profile-container":!0,children:[o.jsxs(wb,{onClick:()=>p(!d),children:[o.jsx(Sb,{src:x==null?void 0:x.avatar,alt:x==null?void 0:x.name}),o.jsx(jb,{children:x==null?void 0:x.name}),o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M6 9l6 6 6-6",strokeLinecap:"round",strokeLinejoin:"round"})})]}),o.jsxs(Cb,{$isOpen:d,children:[o.jsxs(lc,{onClick:()=>A("/profile"),children:[o.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("circle",{cx:"12",cy:"7",r:"4",strokeLinecap:"round",strokeLinejoin:"round"})]}),"My Profile"]}),o.jsxs(lc,{onClick:()=>A("/settings"),children:[o.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("circle",{cx:"12",cy:"12",r:"3",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M12 1v6m0 6v6m11-7h-6m-6 0H1",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Settings"]}),o.jsxs(lc,{className:"logout",onClick:D,children:[o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14l5-5-5-5m5 5H9",strokeLinecap:"round",strokeLinejoin:"round"})}),"Log Out"]})]})]}):o.jsxs(cm,{children:[o.jsx(zc,{onClick:()=>A("/signin"),children:"Sign In"}),o.jsx(zc,{onClick:()=>A("/register"),$primary:!0,children:"Register"})]})]}),C?o.jsxs(xb,{$show:!0,onClick:()=>p(!d),"data-profile-container":!0,children:[o.jsx("img",{src:x==null?void 0:x.avatar,alt:x==null?void 0:x.name}),o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:o.jsx("path",{d:"M6 9l6 6 6-6",strokeLinecap:"round",strokeLinejoin:"round"})})]}):o.jsx(bb,{onClick:()=>A("/signin"),children:"Sign In"})]}),o.jsxs(yb,{$isOpen:d,children:[o.jsxs(ic,{onClick:()=>A("/profile"),children:[o.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("circle",{cx:"12",cy:"7",r:"4",strokeLinecap:"round",strokeLinejoin:"round"})]}),"My Profile"]}),o.jsxs(ic,{onClick:()=>A("/settings"),children:[o.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("circle",{cx:"12",cy:"12",r:"3",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M12 1v6m0 6v6m11-7h-6m-6 0H1",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Settings"]}),o.jsxs(ic,{className:"logout",onClick:D,children:[o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14l5-5-5-5m5 5H9",strokeLinecap:"round",strokeLinejoin:"round"})}),"Log Out"]})]})]}),o.jsxs(vb,{children:[o.jsxs(Ml,{onClick:()=>A("/"),$active:b.pathname==="/",children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[o.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("polyline",{points:"9,22 9,12 15,12 15,22",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Home"]}),o.jsxs(Ml,{onClick:()=>A("/forum"),$active:b.pathname==="/forum",children:[o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:o.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",strokeLinecap:"round",strokeLinejoin:"round"})}),"Forum"]}),o.jsxs(Ml,{onClick:()=>A("/tournament"),$active:b.pathname==="/tournament",children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[o.jsx("path",{d:"M6 4v6a6 6 0 0 0 12 0V4",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M6 4h12",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M4 6a2 2 0 0 0 2 2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M20 6a2 2 0 0 1-2 2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M10 16v2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M14 16v2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M8 20h8",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Tournament"]}),o.jsxs(Ml,{onClick:()=>A("/ranks"),$active:b.pathname==="/ranks",children:[o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:o.jsx("polygon",{points:"12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26",strokeLinecap:"round",strokeLinejoin:"round"})}),"Ranks"]}),o.jsxs(Ml,{onClick:()=>A("/clubs-courts"),$active:b.pathname==="/clubs-courts",children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("circle",{cx:"12",cy:"10",r:"3",strokeLinecap:"round",strokeLinejoin:"round"})]}),"C&C"]})]})]})}const kb=g.footer`
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
`,Tb=g.div`
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
`,Mb=g.div`
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
`,Rb=g.div`
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
`,Db=g.div`
  font-size: 0.8rem;
  color: #666;
  text-align: center;
  margin-top: 12px;
`;function Ob(){return o.jsx(kb,{children:o.jsxs(Ab,{children:[o.jsx(Tb,{children:o.jsx("img",{src:"/ppl-logo.svg",alt:"Philippine Pickleball League"})}),o.jsxs(Mb,{children:[o.jsx("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",children:o.jsx("svg",{viewBox:"0 0 320 512",fill:"currentColor",children:o.jsx("path",{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"})})}),o.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:o.jsx("svg",{viewBox:"0 0 448 512",fill:"currentColor",children:o.jsx("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})})}),o.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:o.jsx("svg",{viewBox:"0 0 448 512",fill:"currentColor",children:o.jsx("path",{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"})})}),o.jsx("a",{href:"https://youtube.com",target:"_blank",rel:"noopener noreferrer","aria-label":"YouTube",children:o.jsx("svg",{viewBox:"0 0 576 512",fill:"currentColor",children:o.jsx("path",{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"})})})]}),o.jsxs(Rb,{children:[o.jsx(nn,{to:"/terms",children:"Terms & Conditions"}),o.jsx(nn,{to:"/privacy",children:"Privacy Policy"}),o.jsx(nn,{to:"/about",children:"About us"}),o.jsx(nn,{to:"/contact",children:"Contact"}),o.jsx(nn,{to:"/sponsors",children:"Sponsors"}),o.jsx(nn,{to:"/news",children:"News"})]}),o.jsxs(Db,{children:["© ",new Date().getFullYear()," Philippine Pickleball League"]})]})})}const _b=(i={})=>{const[s,c]=j.useState(!1),[u,d]=j.useState(!1),p=j.useRef(null);return j.useEffect(()=>{const b=new IntersectionObserver(([w])=>{w.isIntersecting&&!u&&(c(!0),d(!0))},i);return p.current&&b.observe(p.current),()=>{p.current&&b.unobserve(p.current)}},[p,i,u]),[p,s]};g.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.15;
  z-index: 0;
`;const Nb=g.div`
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
`,Lb=g.div`
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
`,Bb=g.h1`
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
`,Ub=g.p`
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
`,Hb=g.div`
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
`,Yb=g(nn)`
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
`;const fm=g.section`
  padding: 80px 24px;
  background: ${i=>i.$dark?"#1a2e3b":"white"};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 64px 16px;
  }
`,ep=g.div`
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
`;const qb=g.div`
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
`,so=g.div`
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
`;const $b=g(fm)`
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
`,Vb=g.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 16px;
`,Gb=g.div`
  max-width: 800px;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`,Xb=g.h2`
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
`,Zb=g.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  line-height: 1.8;
  margin: 0 auto;
  max-width: 700px;
`,Qb=g.div`
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
`,Kb=g.div`
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
`;function Jb(){const i=ql(),[s,c]=j.useState({activePlayers:0,tournamentsHosted:0,playerSatisfaction:0,clubPartners:0}),[u,d]=j.useState(!0),[p,b]=_b({threshold:.2});j.useEffect(()=>{const m=document.querySelector("footer");if(!m)return;const C=new IntersectionObserver(([A])=>{A.isIntersecting&&d(!1)},{threshold:.1});return C.observe(m),()=>{m&&C.unobserve(m)}},[]);const w=m=>{i(m)},x=()=>{window.scrollTo({top:window.innerHeight,behavior:"smooth"})};return j.useEffect(()=>{(async()=>{try{c({activePlayers:0,tournamentsHosted:0,playerSatisfaction:0,clubPartners:0})}catch(C){console.error("Error fetching stats:",C)}})()},[]),o.jsx(o.Fragment,{children:o.jsxs("main",{children:[o.jsxs(Nb,{children:[o.jsxs(Lb,{children:[o.jsxs(Bb,{children:["Philippine ",o.jsx("span",{children:"Pickleball"})," League"]}),o.jsx(Ub,{children:"Join the fastest growing pickleball community in the Philippines. Connect with players, join tournaments, and track your progress in a vibrant sports community."}),o.jsx(Hb,{children:o.jsx(Yb,{to:"/register",$primary:!0,$fullWidth:!0,children:"Get Started"})})]}),o.jsxs(Kb,{onClick:x,$show:u,children:[o.jsx("span",{className:"scroll-text",children:"Scroll Down"}),o.jsxs("div",{className:"arrows",children:[o.jsx("div",{className:"arrow"}),o.jsx("div",{className:"arrow"}),o.jsx("div",{className:"arrow"})]})]})]}),o.jsx(fm,{children:o.jsx(ep,{children:o.jsxs(qb,{ref:p,$isVisible:b,children:[o.jsxs(so,{onClick:()=>w("/forum"),$index:0,$isVisible:b,children:[o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"})}),o.jsx("h3",{children:"Forum"}),o.jsx("p",{children:"Join discussions and connect with the pickleball community"})]}),o.jsxs(so,{onClick:()=>w("/tournament"),$index:1,$isVisible:b,children:[o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})}),o.jsx("h3",{children:"Tournaments"}),o.jsx("p",{children:"Find and join upcoming pickleball tournaments"})]}),o.jsxs(so,{onClick:()=>w("/ranks"),$index:2,$isVisible:b,children:[o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),o.jsx("h3",{children:"Ranks"}),o.jsx("p",{children:"Check player rankings and track your progress"})]}),o.jsxs(so,{onClick:()=>w("/clubs-courts"),$index:3,$isVisible:b,children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),o.jsx("path",{d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),o.jsx("h3",{children:"Clubs & Courts"}),o.jsx("p",{children:"Find nearby pickleball courts and local clubs"})]})]})})}),o.jsx($b,{children:o.jsx(ep,{children:o.jsxs(Vb,{children:[o.jsxs(Gb,{children:[o.jsxs(Xb,{children:["About ",o.jsx("span",{children:"Philippine Pickleball League"})]}),o.jsx(Zb,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),o.jsxs(Qb,{children:[o.jsxs("div",{children:[o.jsx("h3",{children:s.activePlayers>0?`${s.activePlayers}+`:"0"}),o.jsx("p",{children:"Active Players"})]}),o.jsxs("div",{children:[o.jsx("h3",{children:s.tournamentsHosted>0?`${s.tournamentsHosted}+`:"0"}),o.jsx("p",{children:"Tournaments Hosted"})]}),o.jsxs("div",{children:[o.jsx("h3",{children:s.playerSatisfaction>0?`${s.playerSatisfaction}%`:"0%"}),o.jsx("p",{children:"Player Satisfaction"})]}),o.jsxs("div",{children:[o.jsx("h3",{children:s.clubPartners>0?`${s.clubPartners}+`:"0"}),o.jsx("p",{children:"Club Partners"})]})]})]})})})]})})}const Wb=g.div`
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
`,Pb=g.div`
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
`,tp=g(nn)`
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
`,jo=({isOpen:i,onClose:s,title:c,message:u})=>i?o.jsx(Wb,{onClick:s,children:o.jsxs(Pb,{onClick:d=>d.stopPropagation(),children:[o.jsx("h2",{children:c||"Sign in Required"}),o.jsx("p",{children:u||"Please sign in or register to continue"}),o.jsx(tp,{to:"/signin",children:"Sign In"}),o.jsx(tp,{to:"/register",$primary:!0,children:"Register"})]})}):null,Fb=g.div`
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
`,Ib=g.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  padding-top: 0px;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    width: 100%;
    max-width: 100%;
  }
`,ev=g.div`
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
`,tv=g.button`
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
`,nv=g.div`
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
`,av=g.div`
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
`,iv=g.button`
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
`,lv=g.article`
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
`,rv=g.div`
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    padding: 14px 16px;
    gap: 12px;
  }
`,ov=g.div`
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
`,sv=g.div`
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
`,uv=g.div`
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
`,cv=g.div`
  display: grid;
  gap: 4px;
  border-radius: 8px;
  overflow: hidden;
  margin: 0 20px;
  
  @media (max-width: 768px) {
    margin: 0 16px;
    gap: 3px;
  }
  
  /* Single image - preserves aspect ratio */
  &.single-image {
    img {
      width: 100%;
      max-height: 400px;
      object-fit: cover;
      border-radius: 8px;
    }
  }
  
  /* Two images - side by side or stacked based on aspect ratio */
  &.two-images-horizontal {
    grid-template-columns: 1fr 1fr;
    img {
      aspect-ratio: 1;
      object-fit: cover;
    }
  }
  
  &.two-images-vertical {
    grid-template-rows: 1fr 1fr;
    img {
      aspect-ratio: 16/9;
      object-fit: cover;
    }
  }
  
  /* Three images - one large + two small */
  &.three-images-left {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 1fr;
    
    img:first-child {
      grid-row: 1 / 3;
      aspect-ratio: 4/5;
      object-fit: cover;
    }
    
    img:nth-child(2),
    img:nth-child(3) {
      aspect-ratio: 1;
      object-fit: cover;
    }
  }
  
  &.three-images-top {
    grid-template-rows: 2fr 1fr;
    grid-template-columns: 1fr 1fr;
    
    img:first-child {
      grid-column: 1 / 3;
      aspect-ratio: 16/9;
      object-fit: cover;
    }
    
    img:nth-child(2),
    img:nth-child(3) {
      aspect-ratio: 1;
      object-fit: cover;
    }
  }
  
  /* Four images - 2x2 grid */
  &.four-images {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    
    img {
      aspect-ratio: 1;
      object-fit: cover;
    }
  }
  
  /* Five images - 2+3 layout */
  &.five-images {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    
    img:first-child,
    img:nth-child(2) {
      grid-row: 1 / 3;
      aspect-ratio: 4/5;
      object-fit: cover;
    }
    
    img:nth-child(3),
    img:nth-child(4),
    img:nth-child(5) {
      aspect-ratio: 1;
      object-fit: cover;
    }
    
    img:nth-child(3) {
      grid-column: 3;
      grid-row: 1;
    }
    
    img:nth-child(4) {
      grid-column: 3;
      grid-row: 2;
    }
  }
  
  /* Six images - 3x2 grid */
  &.six-images {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    
    img {
      aspect-ratio: 1;
      object-fit: cover;
    }
  }
  
  /* Seven images - 3x3 with first image spanning 2 rows */
  &.seven-images {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    
    img:first-child {
      grid-row: 1 / 3;
      aspect-ratio: 4/5;
      object-fit: cover;
    }
    
    img:not(:first-child) {
      aspect-ratio: 1;
      object-fit: cover;
    }
  }
  
  /* Eight images - 3x3 with first two images spanning 2 rows */
  &.eight-images {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    
    img:first-child,
    img:nth-child(2) {
      grid-row: 1 / 3;
      aspect-ratio: 4/5;
      object-fit: cover;
    }
    
    img:not(:first-child):not(:nth-child(2)) {
      aspect-ratio: 1;
      object-fit: cover;
    }
  }
  
  /* Nine+ images - 3x3 grid with overlay */
  &.nine-plus-images {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    
    img {
      aspect-ratio: 1;
      object-fit: cover;
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
  
  /* More than 5 images indicator */
  .more-images-overlay {
    position: relative;
    
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
      font-size: 24px;
      font-weight: 600;
      backdrop-filter: blur(2px);
    }
  }
`,fv=g.div`
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
`;const dv=g.div`
  border-top: 1px solid #e2e8f0;
`,hv=g.div`
  padding: 8px 20px;
  display: flex;
  gap: 12px;
  align-items: center;
  background: white;

  @media (max-width: 768px) {
    padding: 8px 16px;
    gap: 10px;
  }
`,pv=g.input`
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
`,mv=g.button`
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
`,gv=g.div`
  background: white;
`,xv=g.div`
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
`,np=g.div`
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
`,bv=g.div`
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
`,vv=g.div`
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
`;const ap=g.div`
  margin-left: 36px;
  border-left: 1px solid #e2e8f0;
  padding-left: 12px;
  margin-bottom: 12px;
  
  @media (max-width: 768px) {
    margin-left: 28px;
    padding-left: 8px;
    margin-bottom: 10px;
  }
`,yv=g.div`
  padding: 8px 0;
  display: flex;
  gap: 8px;
  align-items: center;
  background: white;

  @media (max-width: 768px) {
    gap: 6px;
  }
`,wv=g.input`
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
`,Sv=g.button`
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
`,jv=g.div`
  padding: 4px 0;
  display: flex;
  gap: 8px;
  align-items: flex-start;

  @media (max-width: 768px) {
    gap: 6px;
  }
`,ip=g.div`
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
`,Cv=g.div`
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
`;const Ev=g.button`
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
`;const zv=g.textarea`
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
`;const kv=g.button`
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
`,Av=g.div`
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
`,Tv=g.div`
  text-align: center;
  padding: 2rem;
  color: #ef4444;
  background: #fef2f2;
  border-radius: 8px;
  margin: 1rem 0;
`,Mv=g.div`
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
`,Rv=g.div`
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
`,Dv=g.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  width: 100%;
  height: 100%;
  transform: translateX(${i=>i.$offset}px);
  transition: transform ${i=>i.$isAnimating?"0.3s":"0s"} ease-out;
`,Ov=g.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
`,_v=g.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  user-select: none;
  -webkit-user-drag: none;
`,lp=g.button`
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
`,Nv=g.div`
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
`,Lv=g.div`
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
        max-height: 300px;
        border-radius: 8px;
      }
    }
    
    /* Two images */
    &.two-images-horizontal {
      grid-template-columns: 1fr 1fr;
      .preview-image {
        aspect-ratio: 1;
      }
    }
    
    /* Three images */
    &.three-images-left {
      grid-template-columns: 2fr 1fr;
      grid-template-rows: 1fr 1fr;
      
      .preview-image:first-child {
        grid-row: 1 / 3;
        aspect-ratio: 4/5;
      }
      
      .preview-image:nth-child(2),
      .preview-image:nth-child(3) {
        aspect-ratio: 1;
      }
    }
    
    /* Four images */
    &.four-images {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      
      .preview-image {
        aspect-ratio: 1;
      }
    }
    
    /* Five images */
    &.five-images {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      
      .preview-image:first-child,
      .preview-image:nth-child(2) {
        grid-row: 1 / 3;
        aspect-ratio: 4/5;
      }
      
      .preview-image:nth-child(3) {
        grid-column: 3;
        grid-row: 1;
        aspect-ratio: 1;
      }
      
      .preview-image:nth-child(4) {
        grid-column: 3;
        grid-row: 2;
        aspect-ratio: 1;
      }
    }
    
    /* Six images */
    &.six-images {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      
      .preview-image {
        aspect-ratio: 1;
      }
    }
    
    /* Seven images */
    &.seven-images {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      
      .preview-image:first-child {
        grid-row: 1 / 3;
        aspect-ratio: 4/5;
      }
      
      .preview-image:not(:first-child) {
        aspect-ratio: 1;
      }
    }
    
    /* Eight images */
    &.eight-images {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      
      .preview-image:first-child,
      .preview-image:nth-child(2) {
        grid-row: 1 / 3;
        aspect-ratio: 4/5;
      }
      
      .preview-image:not(:first-child):not(:nth-child(2)) {
        aspect-ratio: 1;
      }
    }
    
    /* Nine+ images */
    &.nine-plus-images {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      
      .preview-image {
        aspect-ratio: 1;
      }
    }
  }
`,Bv=g.div`
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
`,Uv=g.button`
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
`;function Hv({filled:i=!1}){return o.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:i?"currentColor":"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",strokeLinecap:"round",strokeLinejoin:"round"})})}function Yv(){return o.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",strokeLinecap:"round",strokeLinejoin:"round"})})}function qv(){return o.jsxs("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),o.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),o.jsx("path",{d:"M21 15l-5-5L5 21"})]})}function rp(){return o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:o.jsx("path",{d:"M18 6L6 18M6 6l12 12",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})})}function $v(){return o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",opacity:"0.2"}),o.jsx("path",{d:"M12 2C6.47715 2 2 6.47715 2 12C2 14.7505 3.14229 17.2432 4.98959 19"})]})}function Vv(){return o.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:o.jsx("path",{d:"M15 18l-6-6 6-6",strokeLinecap:"round",strokeLinejoin:"round"})})}function Gv(){return o.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:o.jsx("path",{d:"M9 18l6-6-6-6",strokeLinecap:"round",strokeLinejoin:"round"})})}function op(){return o.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",stroke:"none",children:o.jsx("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"})})}function Xv(){const{user:i,isAuthenticated:s}=zo(),[c,u]=j.useState([]),[d,p]=j.useState(!0),[b,w]=j.useState(null),[x,m]=j.useState(!1),[C,A]=j.useState(!1),[D,L]=j.useState(""),[M,$]=j.useState([]),[X,E]=j.useState(!1),[R,V]=j.useState({}),[Z,P]=j.useState({}),[G,Q]=j.useState({}),[ge,ue]=j.useState({}),[F,ye]=j.useState({}),[je,ft]=j.useState({}),[pt,Ve]=j.useState({}),[N,J]=j.useState({}),[ie,pe]=j.useState(1),[y,q]=j.useState(!0),[K,W]=j.useState(!1),[ee,ce]=j.useState(0),[ne,Ge]=j.useState([]),[we,We]=j.useState(null),[Jt,St]=j.useState(null),[mt,$t]=j.useState(0),[Ti,za]=j.useState(!1),Gl=j.useRef(null),jt=50;j.useEffect(()=>{(async()=>{try{p(!0),w(null),await new Promise(le=>setTimeout(le,1e3)),u(Ta),q(!1)}catch{w("Failed to load posts. Please try again later.")}finally{p(!1)}})()},[ie]);const Xl=async(H,le,ze)=>{if(H.preventDefault(),!s){m(!0);return}try{switch(le){case"like":u(I=>I.map(ve=>ve.id===ze?{...ve,isLiked:!ve.isLiked,likeCount:ve.isLiked?ve.likeCount-1:ve.likeCount+1}:ve));break;case"comment":V(I=>({...I,[ze]:!I[ze]})),Z[ze]||P(I=>({...I,[ze]:""})),!R[ze]&&!G[ze]&&Q(I=>({...I,[ze]:[]}));break}}catch(I){console.error("Error handling interaction:",I)}},Mi=async H=>{var ze;const le=(ze=Z[H])==null?void 0:ze.trim();if(!(!le||!s))try{ue(ve=>({...ve,[H]:!0}));const I={id:Date.now().toString(),author:{id:i.id,name:i.name,initials:i.name.split(" ").map(ve=>ve[0]).join("").toUpperCase()},content:le,createdAt:new Date().toISOString()};Q(ve=>({...ve,[H]:[I,...ve[H]||[]]})),u(ve=>ve.map(Ae=>Ae.id===H?{...Ae,commentCount:Ae.commentCount+1}:Ae)),P(ve=>({...ve,[H]:""}))}catch(I){console.error("Error submitting comment:",I)}finally{ue(I=>({...I,[H]:!1}))}},Ri=async(H,le)=>{var I;const ze=(I=je[H])==null?void 0:I.trim();if(!(!ze||!s))try{J(Ae=>({...Ae,[H]:!0}));const ve={id:Date.now().toString(),author:{id:i.id,name:i.name,initials:i.name.split(" ").map(Ae=>Ae[0]).join("").toUpperCase()},content:ze,createdAt:new Date().toISOString(),parentId:H};Q(Ae=>({...Ae,[le]:Ae[le].map(Ne=>Ne.id===H?{...Ne,replies:[...Ne.replies||[],ve]}:Ne)})),ft(Ae=>({...Ae,[H]:""})),Ve(Ae=>({...Ae,[H]:!1})),ye(Ae=>({...Ae,[H]:!0}))}catch(ve){console.error("Error submitting reply:",ve)}finally{J(ve=>({...ve,[H]:!1}))}},na=H=>{Ve(le=>({...le,[H]:!le[H]})),je[H]||ft(le=>({...le,[H]:""}))},Oo=async H=>{if(H.preventDefault(),!s){m(!0);return}A(!C)},Zl=H=>{if(H.preventDefault(),!s){m(!0);return}document.getElementById("imageInput").click()},_o=async()=>{try{E(!0),A(!1),L(""),$([])}catch(H){console.error("Error creating post:",H)}finally{E(!1)}},No=H=>{$(le=>le.filter((ze,I)=>I!==H))},kn=H=>{const le=H.length;return le===1?"single-image":le===2?"two-images-horizontal":le===3?"three-images-left":le===4?"four-images":le===5?"five-images":le===6?"six-images":le===7?"seven-images":le===8?"eight-images":le>=9?"nine-plus-images":"four-images"},dt=(H,le)=>{Ge(H),ce(le),W(!0),document.body.style.overflow="hidden"},Vt=()=>{W(!1),Ge([]),ce(0),document.body.style.overflow="auto"},it=()=>{var H;return((H=Gl.current)==null?void 0:H.clientWidth)||0},ka=()=>-ee*it();j.useEffect(()=>{K&&$t(ka())},[K,ee]);const Lo=H=>{St(null),We(H.touches[0].clientX),za(!1)},Bo=H=>{St(H.touches[0].clientX);const ze=H.touches[0].clientX-we,I=ka();ee===0&&ze>0||ee===ne.length-1&&ze<0?$t(I+ze*.2):$t(I+ze)},Aa=()=>{if(!we||!Jt)return;const H=we-Jt,le=H>jt,ze=H<-jt;za(!0),le&&ee<ne.length-1?aa():ze&&ee>0?Wt():$t(ka()),We(null),St(null)},aa=()=>{za(!0),ce(H=>{const le=H===ne.length-1?H:H+1;return $t(-le*it()),le})},Wt=()=>{za(!0),ce(H=>{const le=H===0?H:H-1;return $t(-le*it()),le})};j.useEffect(()=>{const H=()=>{$t(ka())};return window.addEventListener("resize",H),()=>window.removeEventListener("resize",H)},[ee]);const Ta=[{id:"1",author:{id:"101",username:"Sarah Lee",initials:"SL",avatarColor:"#234255"},content:"Great matches at the club today! Here are some highlights 📸",images:[{id:"1",url:"https://placehold.co/400x400/234255/FFF?text=Match+1",alt:"Match highlight 1"},{id:"2",url:"https://placehold.co/400x400/234255/FFF?text=Match+2",alt:"Match highlight 2"},{id:"3",url:"https://placehold.co/400x400/234255/FFF?text=Match+3",alt:"Match highlight 3"},{id:"4",url:"https://placehold.co/400x400/234255/FFF?text=Match+4",alt:"Match highlight 4"}],createdAt:"2025-06-16T10:00:00Z",likeCount:245,commentCount:18,isLiked:!1},{id:"2",author:{id:"102",username:"Mike Chen",initials:"MC",avatarColor:"#29ba9b"},content:"New paddles just arrived! Can't wait to try them out this weekend 🏓",images:[{id:"5",url:"https://placehold.co/400x400/29ba9b/FFF?text=Paddle+1",alt:"New paddle front"},{id:"6",url:"https://placehold.co/400x400/29ba9b/FFF?text=Paddle+2",alt:"New paddle back"}],createdAt:"2025-06-16T08:00:00Z",likeCount:132,commentCount:24,isLiked:!1}];return o.jsx(Fb,{children:o.jsxs(Ib,{children:[o.jsxs(ev,{children:[o.jsxs(tv,{onClick:Oo,children:[o.jsx(nv,{}),"What's happening in pickleball?"]}),C&&o.jsxs("div",{style:{padding:"0 20px 16px"},children:[o.jsx(zv,{placeholder:"Write something here...",value:D,onChange:H=>L(H.target.value),style:{width:"100%",minHeight:"80px"}}),M.length>0&&o.jsxs(Lv,{children:[o.jsx("div",{className:`preview-grid ${kn(M)}`,children:M.slice(0,M.length>=9?8:M.length).map((H,le)=>o.jsxs(Bv,{className:"preview-image",children:[o.jsx("img",{src:H.url,alt:`Selected ${le+1}`}),o.jsx(Uv,{onClick:()=>No(le),children:o.jsx(rp,{})})]},le))}),M.length>8&&o.jsxs("div",{style:{marginTop:"8px",fontSize:"13px",color:"#64748b",textAlign:"center"},children:["+",M.length-8," more images"]})]})]}),o.jsxs(av,{children:[o.jsxs(iv,{onClick:Zl,children:[o.jsx(qv,{}),"Photo/Video"]}),C&&o.jsx(kv,{disabled:!D.trim(),onClick:_o,width:"auto",padding:"8px 12px",marginTop:"0",children:X?"Posting...":"Post"}),o.jsx("input",{id:"imageInput",type:"file",multiple:!0,accept:"image/jpeg,image/jpg,image/png,image/gif,image/webp,video/mp4,video/mov,video/avi,video/wmv,video/webm",capture:"environment",style:{display:"none"},onChange:H=>{const le=Array.from(H.target.files);if(le.length>0){const ze=le.map(I=>new Promise(ve=>{const Ae=new FileReader;Ae.onload=Ne=>{ve({file:I,url:Ne.target.result,name:I.name})},Ae.readAsDataURL(I)}));Promise.all(ze).then(I=>{$(I),A(!0)}),H.target.value=""}}})]})]}),d&&o.jsx(Av,{children:o.jsx($v,{})}),b&&o.jsx(Tv,{children:b}),!d&&!b&&c.map(H=>{var le,ze;return o.jsxs(lv,{children:[o.jsxs(rv,{children:[o.jsx(ov,{style:{background:H.author.avatarColor},children:H.author.initials}),o.jsxs(sv,{children:[o.jsx("h3",{children:H.author.username}),o.jsx("span",{children:new Date(H.createdAt).toLocaleDateString()})]})]}),o.jsxs(uv,{children:[o.jsx("p",{children:H.content}),((le=H.images)==null?void 0:le.length)>0&&o.jsx(cv,{className:kn(H.images),children:H.images.slice(0,H.images.length>=9?8:H.images.length).map((I,ve)=>o.jsx("img",{src:I.url,alt:I.alt,onClick:()=>dt(H.images,ve),style:{cursor:"pointer"},className:ve===7&&H.images.length>8?"more-images-overlay":"","data-remaining":H.images.length>8?H.images.length-8:""},I.id))})]}),o.jsxs(fv,{children:[o.jsxs("button",{onClick:I=>Xl(I,"like",H.id),style:{color:H.isLiked?"#ef4444":"#64748b",fontWeight:H.isLiked?"600":"400"},children:[o.jsx(Hv,{filled:H.isLiked}),H.likeCount]}),o.jsxs("button",{onClick:I=>Xl(I,"comment",H.id),children:[o.jsx(Yv,{}),H.commentCount]})]}),s&&R[H.id]&&o.jsxs(dv,{children:[o.jsxs(hv,{children:[o.jsx(np,{children:i.name.split(" ").map(I=>I[0]).join("").toUpperCase()}),o.jsx(pv,{placeholder:"Add a comment...",value:Z[H.id]||"",onChange:I=>P(ve=>({...ve,[H.id]:I.target.value})),onKeyPress:I=>{I.key==="Enter"&&(I.preventDefault(),Mi(H.id))}}),o.jsx(mv,{onClick:()=>Mi(H.id),disabled:!((ze=Z[H.id])!=null&&ze.trim())||ge[H.id],children:o.jsx(op,{})})]}),G[H.id]&&G[H.id].length>0&&o.jsx(gv,{children:G[H.id].map((I,ve)=>{var Ae;return o.jsxs("div",{children:[o.jsxs(xv,{children:[o.jsx(np,{children:I.author.initials}),o.jsxs(bv,{children:[o.jsxs("p",{className:"comment-content",children:[o.jsx("span",{className:"comment-author",children:I.author.name}),o.jsx("span",{className:"comment-text",children:I.content})]}),o.jsxs("div",{className:"comment-meta",children:[o.jsx("span",{className:"comment-time",children:(()=>{const Ne=new Date,An=new Date(I.createdAt),Tn=Math.floor((Ne-An)/(1e3*60)),Gt=Math.floor(Tn/60),on=Math.floor(Gt/24);return Tn<60?`${Tn||1}m`:Gt<24?`${Gt}h`:`${on}d`})()}),o.jsx("button",{className:"comment-reply",onClick:()=>na(I.id),children:"Reply"})]})]})]}),I.replies&&I.replies.length>0&&o.jsx(vv,{children:o.jsx("div",{className:"view-replies",children:o.jsx("button",{onClick:()=>ye(Ne=>({...Ne,[I.id]:!Ne[I.id]})),children:F[I.id]?"Hide replies":`View replies (${I.replies.length})`})})}),F[I.id]&&I.replies&&I.replies.length>0&&o.jsx(ap,{children:I.replies.map(Ne=>o.jsxs(jv,{children:[o.jsx(ip,{children:Ne.author.initials}),o.jsxs(Cv,{children:[o.jsxs("p",{className:"reply-content",children:[o.jsx("span",{className:"reply-author",children:Ne.author.name}),o.jsx("span",{className:"reply-text",children:Ne.content})]}),o.jsxs("div",{className:"reply-meta",children:[o.jsx("span",{className:"reply-time",children:(()=>{const An=new Date,Tn=new Date(Ne.createdAt),Gt=Math.floor((An-Tn)/(1e3*60)),on=Math.floor(Gt/60),Ql=Math.floor(on/24);return Gt<60?`${Gt||1}m`:on<24?`${on}h`:`${Ql}d`})()}),o.jsx("button",{className:"reply-reply",onClick:()=>na(I.id),children:"Reply"})]})]})]},Ne.id))}),pt[I.id]&&o.jsx(ap,{children:o.jsxs(yv,{children:[o.jsx(ip,{children:i.name.split(" ").map(Ne=>Ne[0]).join("").toUpperCase()}),o.jsx(wv,{placeholder:"Reply...",value:je[I.id]||"",onChange:Ne=>ft(An=>({...An,[I.id]:Ne.target.value})),onKeyPress:Ne=>{Ne.key==="Enter"&&(Ne.preventDefault(),Ri(I.id,H.id))}}),o.jsx(Sv,{onClick:()=>Ri(I.id,H.id),disabled:!((Ae=je[I.id])!=null&&Ae.trim())||N[I.id],children:o.jsx(op,{})})]})})]},I.id)})})]})]},H.id)}),!d&&!b&&c.length===0&&o.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#64748b"},children:"No posts yet. Be the first to share!"}),x&&o.jsx(jo,{isOpen:x,onClose:()=>m(!1),title:"Join the Conversation!",message:"Sign in or register to interact with the community"}),K&&o.jsx(Mv,{onClick:Vt,children:o.jsxs(Rv,{ref:Gl,onClick:H=>H.stopPropagation(),onTouchStart:Lo,onTouchMove:Bo,onTouchEnd:Aa,children:[o.jsx(Dv,{$offset:mt,$isAnimating:Ti,children:ne.map((H,le)=>o.jsx(Ov,{children:o.jsx(_v,{src:H.url,alt:H.alt,draggable:!1})},H.id))}),o.jsx(lp,{$left:!0,onClick:Wt,disabled:ee===0,children:o.jsx(Vv,{})}),o.jsx(lp,{onClick:aa,disabled:ee===ne.length-1,children:o.jsx(Gv,{})}),o.jsx(Ev,{onClick:Vt,children:o.jsx(rp,{})}),o.jsxs(Nv,{children:[ee+1," / ",ne.length]})]})})]})})}const Zv=g.div`
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
`,Qv=g.h1`
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
`,Kv=g.p`
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
`,Jv=g.div`
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
`,Wv=g.div`
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
`,Pv=g.div`
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
`,Fv=g.div`
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
`,Iv=g.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`,ey=g.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 8px;
  line-height: 1.3;
`,ty=g.div`
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
`,dm=g.div`
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
`,ny=g(dm)`
  margin-bottom: 16px;
`,ay=g.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: auto;
  margin-bottom: 16px;
`,hm=g.div`
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
`,iy=g(hm)`
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
`,ly=g.button`
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
`;const ry=g.div`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`,oy=g.div`
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
`,sy=g.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`,sp=g.select`
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
`,uy=g.div`
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
`;function cy(){return o.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"#29ba9b",fillOpacity:"0.1",stroke:"#29ba9b",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M8 21h8"}),o.jsx("path",{d:"M12 17v4"}),o.jsx("path",{d:"M7 4h10"}),o.jsx("path",{d:"M17 4v8a5 5 0 0 1-10 0V4"}),o.jsx("path",{d:"M7 4c-3 0-4 2-4 3v1c0 2 2 3 4 3"}),o.jsx("path",{d:"M17 4c3 0 4 2 4 3v1c0 2-2 3-4 3"})]})}function fy(){return o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:o.jsx("path",{d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",strokeLinecap:"round",strokeLinejoin:"round"})})}function dy(){return o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[o.jsx("path",{d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M12 13a3 3 0 100-6 3 3 0 000 6z",strokeLinecap:"round",strokeLinejoin:"round"})]})}function hy(){return o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[o.jsx("circle",{cx:"12",cy:"12",r:"9",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("text",{x:"12",y:"14.5",dominantBaseline:"middle",textAnchor:"middle",fontSize:"14",stroke:"none",fill:"currentColor",style:{fontWeight:"bold"},children:"₱"})]})}function py(){return o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:o.jsx("path",{d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",strokeLinecap:"round",strokeLinejoin:"round"})})}function my(){return o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",strokeLinecap:"round",strokeLinejoin:"round"})})}const gy=(i,s,c,u)=>{const d=new Date,p=new Date(i),b=new Date(s);return p<d?"Completed":d>b||c>=u?"Closed":"Open"};function xy(){const[i,s]=j.useState([]),[c,u]=j.useState(!0),[d,p]=j.useState(null),[b,w]=j.useState(""),[x,m]=j.useState(""),[C,A]=j.useState(""),[D,L]=j.useState(!1),M=[{label:"₱0 - ₱3,000",min:0,max:3e3},{label:"₱3,001 - ₱6,000",min:3001,max:6e3},{label:"₱6,001 - ₱10,000",min:6001,max:1e4}],$=i.filter(R=>{const V=R.name.toLowerCase().includes(b.toLowerCase())||R.location.toLowerCase().includes(b.toLowerCase()),Z=!x||R.tier===parseInt(x),P=!C||R.entryFee>=M[parseInt(C)].min&&R.entryFee<=M[parseInt(C)].max;return V&&Z&&P}),X=async()=>{try{u(!0),p(null);const V=[{id:"1",name:"PPL Summer Championship 2025",date:"2025-08-15T09:00:00Z",location:"Manila Pickleball Center",entryFee:1500,prizePool:5e4,maxParticipants:64,currentParticipants:42,registrationDeadline:"2025-07-01T00:00:00Z",bannerUrl:"https://images.unsplash.com/photo-1686721135036-22ac6cbb8ce8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",tier:3},{id:"2",name:"Beginners Welcome Tournament",date:"2025-07-20T09:00:00Z",location:"Quezon City Sports Complex",entryFee:800,prizePool:2e4,maxParticipants:32,currentParticipants:32,registrationDeadline:"2025-05-10T00:00:00Z",bannerUrl:"https://images.unsplash.com/photo-1723004714201-cf224222b897?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",tier:2},{id:"3",name:"Indoor Championship Series",date:"2025-07-01T09:00:00Z",location:"BGC Indoor Sports Complex",entryFee:2e3,prizePool:75e3,maxParticipants:128,currentParticipants:85,registrationDeadline:"2025-06-30T00:00:00Z",bannerUrl:"https://plus.unsplash.com/premium_photo-1709048991290-1d36455a2895?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",tier:3}].map(Z=>({...Z,status:gy(Z.date,Z.registrationDeadline,Z.currentParticipants,Z.maxParticipants)}));s(V)}catch(R){console.error("Failed to fetch tournaments:",R),p("Failed to load tournaments. Please try again later.")}finally{u(!1)}};j.useEffect(()=>{X()},[]);const E=async R=>{{L(!0);return}};return c?o.jsx("div",{children:"Loading tournaments..."}):d?o.jsx("div",{children:d}):o.jsxs(Zv,{children:[o.jsx(Qv,{children:"Tournaments"}),o.jsx(Kv,{children:"Discover and join exciting pickleball tournaments across the Philippines. From beginner-friendly events to professional championships, find the perfect competition to showcase your skills."}),o.jsxs(ry,{children:[o.jsxs(oy,{children:[o.jsx(my,{}),o.jsx("input",{type:"text",placeholder:"Search tournaments by name or location...",value:b,onChange:R=>w(R.target.value)})]}),o.jsxs(sy,{children:[o.jsxs(sp,{value:x,onChange:R=>m(R.target.value),children:[o.jsx("option",{value:"",children:"All Tiers"}),o.jsx("option",{value:"1",children:"Tier 1"}),o.jsx("option",{value:"2",children:"Tier 2"}),o.jsx("option",{value:"3",children:"Tier 3"})]}),o.jsxs(sp,{value:C,onChange:R=>A(R.target.value),children:[o.jsx("option",{value:"",children:"All Fees"}),M.map((R,V)=>o.jsx("option",{value:V,children:R.label},V))]})]})]}),$.length>0?o.jsx(Jv,{children:$.map(R=>o.jsxs(Wv,{children:[o.jsxs(Pv,{children:[R.bannerUrl&&o.jsx("img",{src:R.bannerUrl,alt:R.name}),o.jsx(Fv,{status:R.status,children:R.status})]}),o.jsxs(Iv,{children:[o.jsx(ey,{children:R.name}),o.jsxs(ty,{children:[o.jsx(cy,{}),"Tier ",R.tier]}),o.jsxs(dm,{children:[o.jsx(fy,{}),new Date(R.date).toLocaleDateString()]}),o.jsxs(ny,{children:[o.jsx(dy,{}),R.location]}),o.jsxs(ay,{children:[o.jsxs(hm,{children:[o.jsx(py,{}),o.jsxs("div",{children:[R.currentParticipants,"/",R.maxParticipants]})]}),o.jsxs(iy,{children:[o.jsx(hy,{}),o.jsxs("div",{children:[o.jsxs("span",{children:["₱",R.entryFee]}),o.jsx("span",{})]})]})]}),o.jsx(ly,{onClick:()=>E(R.id),disabled:R.currentParticipants>=R.maxParticipants,children:R.currentParticipants>=R.maxParticipants?"Full":"Register Now"})]})]},R.id))}):o.jsxs(uy,{children:[o.jsx("h3",{children:"No Tournaments Found"}),o.jsx("p",{children:b||x||C?"Try adjusting your search criteria or filters to find more tournaments.":"There are no tournaments available at the moment. Please check back later."})]}),D&&o.jsx(jo,{isOpen:D,onClose:()=>L(!1),title:"Join the Tournament!",message:"Sign in or register to participate in tournaments"})]})}const rc=g.div`
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
`,by=g.div`
  margin-bottom: 40px;
`,vy=g.h1`
  font-size: 2.5rem;
  color: #234255;
  margin-bottom: 12px;
  font-weight: 800;
  letter-spacing: -0.5px;
`,yy=g.p`
  color: #64748b;
  font-size: 1.1rem;
  max-width: 600px;
  line-height: 1.6;
  margin: 0 auto;
  text-align: center;
`,wy=g.div`
  color: #64748b;
  font-size: 0.875rem;
  text-align: center;
  margin-top: 8px;
`,Sy=g.div`
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
`,jy=g.div`
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
`,Cy=g.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`,Ey=g.select`
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
`,zy=g.input`
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
`,ky=g.div`
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
`,Ay=g.button`
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
`,Ty=g.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,My=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 16px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    margin-bottom: 12px;
  }
`,Ry=g.div`
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
`,Dy=g.div`
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
`,Oy=g.div`
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
`,_y=g.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  
  @media (max-width: 768px) {
    gap: 8px;
  }
`,Ny=g.div`
  font-weight: 500;
  color: #234255;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`,Ly=g.div`
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
`;const oc=g.div`
  font-weight: 500;
  color: #234255;
  display: flex;
  align-items: center;
  height: 100%;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`,By=g.div`
  font-weight: 600;
  color: #64748b;
  display: flex;
  align-items: center;
  height: 100%;
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`,Uy=g.div`
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
`,Hy=g.div`
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
`,Yy=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  margin-top: 12px;
`,qy=g.div`
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
`,$y=g.div`
  text-align: center;
`,Vy=g.h3`
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
`;const Gy=g.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-top: 16px;

  @media (max-width: 768px) {
    gap: 6px;
    margin-top: 12px;
  }
`,sc=g.div`
  padding: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 6px;
  }
`,uc=g.div`
  font-size: ${i=>i.$large?"1.25rem":"1rem"};
  font-weight: 600;
  color: white;
  margin-bottom: 2px;
  
  @media (max-width: 768px) {
    font-size: ${i=>i.$large?"1.1rem":"0.9rem"};
  }
`,cc=g.div`
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
`;const Xy=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  color: #64748b;
  font-size: 1.1rem;
`,Zy=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  color: #ef4444;
  font-size: 1.1rem;
  text-align: center;
  flex-direction: column;
  gap: 16px;
`,Qy=g.button`
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
`;function up(i){return i.split(" ").map(s=>s[0]).join("").toUpperCase()}function cp(i){return new Intl.NumberFormat().format(i)}function Ky(){return o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",strokeLinecap:"round",strokeLinejoin:"round"})})}function Jy(){const[i,s]=j.useState([]),[c,u]=j.useState("mens-singles"),[d,p]=j.useState(!0),[b,w]=j.useState(null),[x,m]=j.useState(""),[C,A]=j.useState(""),[D,L]=j.useState(""),M=["19+","35+","50+"],$=(G,Q)=>{if(!Q)return!0;const ge=parseInt(Q.replace("+",""));return G>=ge},X=G=>{if(!G)return[];let Q=G.filter(ue=>ue.age>=19);return Q=Q.filter(ue=>{const F=!x||ue.name.toLowerCase().includes(x.toLowerCase()),ye=$(ue.age,D);return F&&ye}),[...Q].sort((ue,F)=>F.points-ue.points).map((ue,F)=>({...ue,rank:F+1}))};j.useEffect(()=>{const G=new Date,Q={year:"numeric",month:"long",day:"numeric"};A(G.toLocaleDateString("en-US",Q)),E()},[]);const E=async()=>{var G;try{p(!0),w(null);const Q=[{id:"mens-singles",name:"MEN'S SINGLES",lastUpdated:"2024-01-20T10:00:00Z",rankings:[{id:"1",name:"Juan Dela Cruz",age:28,rank:1,points:2500,gamesPlayed:45,wins:38,losses:7,winRate:"84.4"},{id:"2",name:"Mike Santos",age:35,rank:2,points:2350,gamesPlayed:42,wins:34,losses:8,winRate:"81.0"},{id:"3",name:"Carlo Garcia",age:45,rank:3,points:2200,gamesPlayed:38,wins:30,losses:8,winRate:"78.9"},{id:"4",name:"Miguel Lopez",age:61,rank:4,points:2100,gamesPlayed:35,wins:27,losses:8,winRate:"77.1"},{id:"j1",name:"Alex Santos",age:15,rank:5,points:1800,gamesPlayed:30,wins:25,losses:5,winRate:"83.3"},{id:"j2",name:"Marco Reyes",age:13,rank:6,points:1700,gamesPlayed:28,wins:22,losses:6,winRate:"78.6"}]},{id:"womens-singles",name:"WOMEN'S SINGLES",lastUpdated:"2024-01-20T10:00:00Z",rankings:[{id:"1",name:"Maria Santos",age:28,rank:1,points:2450,gamesPlayed:43,wins:36,losses:7,winRate:"83.7"},{id:"2",name:"Ana Garcia",age:45,rank:2,points:2300,gamesPlayed:40,wins:32,losses:8,winRate:"80.0"},{id:"3",name:"Sofia Reyes",age:52,rank:3,points:2150,gamesPlayed:37,wins:29,losses:8,winRate:"78.4"},{id:"4",name:"Isabella Tan",age:71,rank:4,points:2e3,gamesPlayed:30,wins:22,losses:8,winRate:"73.3"},{id:"j1",name:"Alexandra Santos",age:15,rank:5,points:1850,gamesPlayed:32,wins:26,losses:6,winRate:"81.3"},{id:"j2",name:"Diana Garcia",age:17,rank:6,points:1750,gamesPlayed:29,wins:23,losses:6,winRate:"79.3"}]},{id:"mens-doubles",name:"MEN'S DOUBLES",lastUpdated:"2024-01-20T10:00:00Z",rankings:[{id:"1",name:"Juan Dela Cruz",age:28,rank:1,points:2600,gamesPlayed:50,wins:42,losses:8,winRate:"84.0"},{id:"2",name:"Mike Santos",age:35,rank:2,points:2400,gamesPlayed:45,wins:36,losses:9,winRate:"80.0"},{id:"3",name:"Carlo Garcia",age:45,rank:3,points:2250,gamesPlayed:40,wins:31,losses:9,winRate:"77.5"},{id:"4",name:"Miguel Lopez",age:61,rank:4,points:2150,gamesPlayed:38,wins:29,losses:9,winRate:"76.3"},{id:"j1",name:"Alex Santos",age:15,rank:5,points:1900,gamesPlayed:35,wins:27,losses:8,winRate:"77.1"}]},{id:"womens-doubles",name:"WOMEN'S DOUBLES",lastUpdated:"2024-01-20T10:00:00Z",rankings:[{id:"1",name:"Maria Santos",age:28,rank:1,points:2550,gamesPlayed:48,wins:40,losses:8,winRate:"83.3"},{id:"2",name:"Ana Garcia",age:45,rank:2,points:2350,gamesPlayed:43,wins:34,losses:9,winRate:"79.1"},{id:"3",name:"Sofia Reyes",age:52,rank:3,points:2200,gamesPlayed:40,wins:31,losses:9,winRate:"77.5"},{id:"4",name:"Isabella Tan",age:71,rank:4,points:2100,gamesPlayed:35,wins:27,losses:8,winRate:"77.1"},{id:"j1",name:"Alexandra Santos",age:15,rank:5,points:1950,gamesPlayed:32,wins:25,losses:7,winRate:"78.1"}]},{id:"mixed-doubles",name:"MIXED DOUBLES",lastUpdated:"2024-01-20T10:00:00Z",rankings:[{id:"1",name:"Juan Dela Cruz",age:28,rank:1,points:2650,gamesPlayed:52,wins:44,losses:8,winRate:"84.6"},{id:"2",name:"Maria Santos",age:28,rank:2,points:2600,gamesPlayed:50,wins:42,losses:8,winRate:"84.0"},{id:"3",name:"Mike Santos",age:35,rank:3,points:2450,gamesPlayed:47,wins:38,losses:9,winRate:"80.9"},{id:"4",name:"Ana Garcia",age:45,rank:4,points:2400,gamesPlayed:45,wins:36,losses:9,winRate:"80.0"},{id:"5",name:"Carlo Garcia",age:45,rank:5,points:2300,gamesPlayed:42,wins:33,losses:9,winRate:"78.6"},{id:"j1",name:"Alexandra Santos",age:15,rank:6,points:2e3,gamesPlayed:35,wins:27,losses:8,winRate:"77.1"}]}];s(Q),u((G=Q[0])==null?void 0:G.id)}catch{w("Failed to fetch rankings. Please try again later.")}finally{p(!1)}},R=G=>{const Q=X(G),ge=Q.slice(0,3),ue=Q.slice(3);return ue.length===0&&ge.length===0?o.jsx("div",{style:{textAlign:"center",padding:"40px",color:"#64748b"},children:"No players found matching your search criteria."}):ue.length===0?null:o.jsxs(Ry,{children:[o.jsxs(Dy,{children:[o.jsx("div",{children:"Rank"}),o.jsx("div",{children:"Player"}),o.jsx("div",{children:"Age"}),o.jsx("div",{children:"Points"}),o.jsx("div",{children:"Games (W-L)"})]}),ue.slice(0,47).map(F=>o.jsxs(Oy,{children:[o.jsx(By,{children:F.rank}),o.jsxs(_y,{children:[o.jsx(Ly,{children:up(F.name)}),o.jsx(Ny,{children:F.name})]}),o.jsx(oc,{children:F.age}),o.jsx(oc,{children:cp(F.points)}),o.jsxs(oc,{children:[F.wins,"-",F.losses]})]},F.id))]})};if(d)return o.jsx(rc,{children:o.jsx(Xy,{children:"Loading rankings..."})});if(b)return o.jsx(rc,{children:o.jsxs(Zy,{children:[o.jsx("div",{children:b}),o.jsx(Qy,{onClick:E,children:"Try Again"})]})});const V=i.find(G=>G.id===c),P=(V?X(V.rankings):[]).slice(0,3);return o.jsxs(rc,{children:[o.jsxs(by,{children:[o.jsx(vy,{children:"Player Rankings"}),o.jsx(yy,{children:"Track the performance and standings of pickleball players across different categories."}),o.jsxs(wy,{children:["Last Updated: ",C]}),o.jsxs(Sy,{children:[o.jsxs(jy,{children:[o.jsx(Ky,{}),o.jsx(zy,{type:"text",placeholder:"Search by player name...",value:x,onChange:G=>m(G.target.value)})]}),o.jsx(Cy,{children:o.jsxs(Ey,{value:D,onChange:G=>L(G.target.value),children:[o.jsx("option",{value:"",children:"All Ages"}),M.map(G=>o.jsx("option",{value:G,children:G},G))]})})]})]}),o.jsx(ky,{children:i.map(G=>o.jsx(Ay,{$active:G.id===c,onClick:()=>u(G.id),children:G.name},G.id))}),o.jsxs(Ty,{children:[o.jsx(My,{children:P.map(G=>o.jsxs(Uy,{$rank:G.rank,children:[o.jsx(Hy,{children:G.rank}),o.jsxs(Yy,{children:[o.jsx(qy,{children:up(G.name)}),o.jsx($y,{children:o.jsx(Vy,{children:G.name})})]}),o.jsxs(Gy,{children:[o.jsxs(sc,{children:[o.jsx(uc,{children:G.age}),o.jsx(cc,{children:"Age"})]}),o.jsxs(sc,{children:[o.jsx(uc,{children:cp(G.points)}),o.jsx(cc,{children:"Points"})]}),o.jsxs(sc,{children:[o.jsxs(uc,{children:[G.wins,"-",G.losses]}),o.jsx(cc,{children:"Games (W-L)"})]})]})]},G.id))}),R((V==null?void 0:V.rankings)||[])]})]})}const uo=g.div`
  padding: 72px 16px 24px;
  max-width: 1200px;
  margin: 0 auto;
  animation: fadeIn 0.3s ease;
  background: white;
  min-height: 100vh;

  @media (min-width: 768px) {
    padding: 90px 24px 24px;
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
`,fc=g.div`
  margin-bottom: 40px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px;
  
  h1 {
    color: #0f172a;
    font-size: 1.875rem;
    margin-bottom: 12px;
    font-weight: 700;
    letter-spacing: -0.02em;

    @media (min-width: 768px) {
      font-size: 3.5rem;
      margin-bottom: 16px;
    }
  }
  
  p {
    color: #64748b;
    font-size: 1rem;
    line-height: 1.6;
    max-width: 500px;
    margin: 0 auto;
    font-weight: 400;
    
    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  }
`,Wy=g.div`
  margin: 0 auto 24px;
  display: flex;
  gap: 12px;
  max-width: 1200px;
  align-items: stretch;
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }

  @media (min-width: 768px) {
    gap: 20px;
    margin-bottom: 40px;
  }
`,Py=g.div`
  position: relative;
  flex: 1;
  width: 100%;

  @media (min-width: 640px) {
    min-width: 200px;
  }

  svg {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    color: #64748b;
  }
`,Fy=g.input`
  width: 100%;
  padding: 16px 20px 16px 52px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  color: #0f172a;
  background: white;
  transition: all 0.2s ease;
  height: 52px;
  
  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.08);
  }
  
  &::placeholder {
    color: #94a3b8;
  }
  
  &:hover {
    border-color: #cbd5e0;
  }
`,Iy=g.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  width: 100%;

  @media (min-width: 640px) {
    width: auto;
    flex-wrap: nowrap;
  }

  @media (min-width: 768px) {
    gap: 12px;
  }
`,dc=g.button`
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid ${i=>i.$active?"#29ba9b":"#e2e8f0"};
  background: ${i=>i.$active?"#29ba9b":"white"};
  color: ${i=>i.$active?"white":"#64748b"};
  white-space: nowrap;
  height: 48px;
  flex: 1;

  @media (min-width: 640px) {
    flex: none;
    padding: 14px 20px;
    font-size: 0.9rem;
    height: 52px;
  }
  
  @media (min-width: 768px) {
    padding: 14px 24px;
    font-size: 0.95rem;
  }
  
  &:hover {
    border-color: #29ba9b;
    color: ${i=>i.$active?"white":"#29ba9b"};
    background: ${i=>i.$active?"#26a085":"#f8fafc"};
  }
`,e4=g.div`
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
`,t4=g.div`
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
`,n4=g.div`
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
`,a4=g.div`
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
`,i4=g.div`
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
`,fp=g.span`
  display: inline-flex;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 12px;
  background: ${i=>i.type==="club"?"#f0f9ff":"#f0fdf4"};
  color: ${i=>i.type==="club"?"#0369a1":"#166534"};
`,l4=g.button`
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
`,r4=g.div`
  text-align: center;
  padding: 48px 24px;
  background: white;
  border-radius: 16px;
  color: #64748b;
  font-size: 1.1rem;
  border: 2px dashed #e2e8f0;
  margin-top: 32px;
`,o4=g.div`
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
`,s4=g.div`
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
`,u4=g.div`
  padding: 16px 0;
  border-bottom: 1px solid #e2e8f0;

  @media (min-width: 768px) {
    padding: 24px 0;
  }
`,c4=g.button`
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
`,f4=g.div`
  margin-top: 24px;
`,d4=g.div`
  margin-bottom: 32px;
`,h4=g.div`
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
`,p4=g.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
    gap: 48px;
  }
`,m4=g.div``,g4=g.div`
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
`,x4=g.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;

  @media (min-width: 640px) {
    align-items: center;
  }
`,b4=g.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
`,v4=g.div`
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
`,y4=g.p`
  color: #64748b;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 32px;
  max-width: 640px;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 48px;
  }
`,hc=g.div`
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 56px;
  }
`,pc=g.h3`
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
`,w4=g.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #f1f5f9;
`,S4=g.div`
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
`,j4=g.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  @media (min-width: 640px) {
    gap: 10px;
    flex-wrap: nowrap;
  }
`,dp=g.button`
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
`,C4=g.div`
  position: relative;
  height: 300px;
  background: #f1f5f9;

  @media (min-width: 768px) {
    height: 350px;
  }
`,E4=g.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
`,z4=g.div`
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
`,k4=g.div`
  background: ${()=>{const i=["#f1f5f9","#e2e8f0","#cbd5e0","#f8fafc"];return i[Math.floor(Math.random()*i.length)]}};
  border-radius: 2px;
`,A4=g.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
`,T4=g.div`
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
`,M4=g.div`
  background: rgba(15, 23, 42, 0.9);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-top: 8px;
`,R4=g.div`
  background: white;
  border-radius: 12px;
  border: 1px solid #f1f5f9;
  padding: 16px;

  @media (min-width: 768px) {
    padding: 20px;
  }
`,Rl=g.div`
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
`,Dl=g.div`
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
`,D4=g.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,O4=g.div`
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
`,_4=g.div``,N4=g.div`
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
`,L4=g.button`
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
`,B4=g.p`
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.5;
  margin: 0;
  text-align: center;
  padding: 12px 16px;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #f1f5f9;
`;function U4(){return o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",strokeLinecap:"round",strokeLinejoin:"round"})})}const H4=()=>{const{isAuthenticated:i}=zo(),[s,c]=j.useState([]),[u,d]=j.useState(!0),[p,b]=j.useState(null),[w,x]=j.useState(""),[m,C]=j.useState("all"),[A,D]=j.useState(new Set),[L,M]=j.useState(new Set),[$,X]=j.useState(!1),[E,R]=j.useState(null),[V,Z]=j.useState(!1);j.useEffect(()=>{P()},[]);const P=async()=>{try{d(!0),b(null),c([{id:"1",name:"Manila Pickleball Club",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",address:"BGC, Taguig City",hours:"6:00 AM - 10:00 PM",type:"club_and_courts",members:120,createdAt:"2025-06-16T08:00:00Z",updatedAt:"2025-06-16T08:00:00Z",ownerId:"user123",contactEmail:"info@manilapickleball.com",contactPhone:"+63 912 345 6789",website:"https://manilapickleball.com",amenities:["Pro Shop","Locker Rooms","Parking"],images:[],isVerified:!0},{id:"2",name:"BGC Pickleball Center",description:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",address:"Bonifacio Global City, Taguig",hours:"7:00 AM - 11:00 PM",type:"club_and_courts",members:85,createdAt:"2025-06-15T10:00:00Z",updatedAt:"2025-06-15T10:00:00Z",ownerId:"user456",contactEmail:"info@bgcpickleball.com",contactPhone:"+63 917 123 4567",amenities:["Air Conditioning","Equipment Rental"],images:[],isVerified:!0},{id:"3",name:"QC Pickleball Community",description:"Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",address:"Katipunan Avenue, Quezon City",type:"club",members:45,createdAt:"2025-06-14T09:00:00Z",updatedAt:"2025-06-14T09:00:00Z",ownerId:"user789",contactEmail:"qcpickleball@gmail.com",contactPhone:"+63 918 765 4321",images:[],isVerified:!0}])}catch(F){b(F.message||"Failed to fetch venues")}finally{d(!1)}},G=j.useMemo(()=>{let F=s;if(w){const ye=w.toLowerCase();F=F.filter(je=>je.name.toLowerCase().includes(ye)||je.address.toLowerCase().includes(ye))}return m!=="all"&&(F=F.filter(ye=>m==="clubs"?ye.type==="club":m==="courts"?ye.type==="club_and_courts":!0)),F},[s,w,m]),Q=async(F,ye)=>{if(F.stopPropagation(),!i){X(!0);return}try{M(je=>new Set([...je,ye])),console.log(`Join request submitted for venue ${ye}`)}catch(je){console.error("Failed to join venue:",je),M(ft=>{const pt=new Set(ft);return pt.delete(ye),pt})}},ge=F=>{R(F),Z(!0)},ue=()=>{Z(!1),R(null)};return u?o.jsxs(uo,{children:[o.jsxs(fc,{children:[o.jsx("h1",{children:"Clubs & Courts"}),o.jsx("p",{children:"Discover pickleball venues and communities across the Philippines"})]}),o.jsx(o4,{children:"Loading venues..."})]}):p?o.jsxs(uo,{children:[o.jsxs(fc,{children:[o.jsx("h1",{children:"Clubs & Courts"}),o.jsx("p",{children:"Discover pickleball venues and communities across the Philippines."})]}),o.jsx(s4,{children:p})]}):V&&E?o.jsxs(uo,{children:[o.jsx(u4,{children:o.jsxs(c4,{onClick:ue,children:[o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7",strokeLinecap:"round",strokeLinejoin:"round"})}),"Back to Clubs & Courts"]})}),o.jsxs(f4,{children:[o.jsx(d4,{children:o.jsx(h4,{$imageIndex:s.findIndex(F=>F.id===E.id)%3})}),o.jsxs(p4,{children:[o.jsxs(m4,{children:[o.jsxs(g4,{children:[o.jsxs(x4,{children:[o.jsx("h1",{children:E.name}),E.isVerified&&o.jsxs(v4,{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M9 12l2 2 4-4",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.745 3.745 0 0 1 3.296-1.043A3.745 3.745 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12z"})]}),"Verified"]})]}),o.jsx(b4,{children:o.jsx(fp,{type:E.type==="club"?"club":"courts",children:E.type==="club"?"Club":"Club & Courts"})})]}),o.jsx(y4,{children:E.description}),o.jsxs(hc,{children:[o.jsxs(pc,{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"Location & Map"]}),o.jsxs(w4,{children:[o.jsxs(S4,{children:[o.jsx("h4",{children:E.address}),o.jsx("p",{children:"Get directions to this venue and explore the surrounding area"}),o.jsxs(j4,{children:[o.jsxs(dp,{$primary:!0,children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"}),o.jsx("path",{d:"M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"})]}),"Get Directions"]}),o.jsxs(dp,{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),o.jsx("polyline",{points:"15,3 21,3 21,9"}),o.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),"Share Location"]})]})]}),o.jsx(C4,{children:o.jsxs(E4,{children:[o.jsxs(A4,{children:[o.jsx(T4,{children:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]})}),o.jsx(M4,{children:E.name})]}),o.jsx(z4,{children:Array.from({length:35},(F,ye)=>o.jsx(k4,{},ye))})]})})]})]}),o.jsxs(hc,{children:[o.jsxs(pc,{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),o.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),o.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),o.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),"Venue Information"]}),o.jsxs(R4,{children:[E.type==="club_and_courts"&&o.jsxs(Rl,{children:[o.jsx(Dl,{children:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("circle",{cx:"12",cy:"12",r:"10"}),o.jsx("polyline",{points:"12,6 12,12 16,14"})]})}),o.jsxs("div",{children:[o.jsx("span",{children:"Operating Hours"}),o.jsx("p",{children:E.hours})]})]}),o.jsxs(Rl,{children:[o.jsx(Dl,{children:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),o.jsx("circle",{cx:"9",cy:"7",r:"4"}),o.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),o.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}),o.jsxs("div",{children:[o.jsx("span",{children:"Community Size"}),o.jsxs("p",{children:[E.members," Active Members"]})]})]}),E.contactEmail&&o.jsxs(Rl,{children:[o.jsx(Dl,{children:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),o.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),o.jsxs("div",{children:[o.jsx("span",{children:"Email Contact"}),o.jsx("p",{children:E.contactEmail})]})]}),E.contactPhone&&o.jsxs(Rl,{children:[o.jsx(Dl,{children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})})}),o.jsxs("div",{children:[o.jsx("span",{children:"Phone Contact"}),o.jsx("p",{children:E.contactPhone})]})]}),E.website&&o.jsxs(Rl,{children:[o.jsx(Dl,{children:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("circle",{cx:"12",cy:"12",r:"10"}),o.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),o.jsx("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]})}),o.jsxs("div",{children:[o.jsx("span",{children:"Website"}),o.jsx("p",{children:E.website})]})]})]})]}),E.amenities&&E.amenities.length>0&&o.jsxs(hc,{children:[o.jsxs(pc,{children:[o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})}),"Amenities & Features"]}),o.jsx(D4,{children:E.amenities.map((F,ye)=>o.jsxs(O4,{children:[o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M20 6L9 17l-5-5",strokeLinecap:"round",strokeLinejoin:"round"})}),F]},ye))})]})]}),o.jsx(_4,{children:o.jsxs(N4,{children:[o.jsx(L4,{onClick:F=>Q(F,E.id),disabled:A.has(E.id)||L.has(E.id),$isPending:L.has(E.id),children:A.has(E.id)?"Joined":L.has(E.id)?"Pending Approval":"Join Now"}),o.jsx(B4,{children:A.has(E.id)?"You are a member of this venue":L.has(E.id)?"Your join request is pending approval from the venue administrators":"Join this venue to access exclusive features and connect with the community"})]})})]})]}),$&&o.jsx(jo,{isOpen:$,onClose:()=>X(!1),title:"Join the Club!",message:"Sign in or register to join clubs and access courts"})]}):o.jsxs(uo,{children:[o.jsxs(fc,{children:[o.jsx("h1",{children:"Clubs & Courts"}),o.jsx("p",{children:"Discover pickleball venues and communities across the Philippines."})]}),o.jsxs(Wy,{children:[o.jsxs(Py,{children:[o.jsx(U4,{}),o.jsx(Fy,{type:"text",placeholder:"Search by name or location...",value:w,onChange:F=>x(F.target.value)})]}),o.jsxs(Iy,{children:[o.jsx(dc,{$active:m==="all",onClick:()=>C("all"),children:"All"}),o.jsx(dc,{$active:m==="clubs",onClick:()=>C("clubs"),children:"Clubs Only"}),o.jsx(dc,{$active:m==="courts",onClick:()=>C("courts"),children:"With Courts"})]})]}),G.length===0?o.jsx(r4,{children:"No venues found matching your criteria"}):o.jsx(e4,{children:G.map((F,ye)=>o.jsxs(t4,{onClick:()=>ge(F),children:[o.jsx(n4,{$imageIndex:ye%3}),o.jsxs(a4,{children:[o.jsx("h3",{children:F.name}),o.jsx("div",{children:o.jsx(fp,{type:F.type==="club"?"club":"courts",children:F.type==="club"?"Club":"Club & Courts"})}),o.jsx("p",{children:F.description}),o.jsxs(i4,{children:[o.jsxs("div",{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),F.address]}),F.type==="club_and_courts"&&o.jsxs("div",{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),o.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),o.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),o.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),F.hours]}),o.jsxs("div",{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),o.jsx("circle",{cx:"9",cy:"7",r:"4"}),o.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),o.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),F.members," Members"]})]}),o.jsx(l4,{onClick:je=>Q(je,F.id),disabled:A.has(F.id)||L.has(F.id),$isPending:L.has(F.id),children:A.has(F.id)?"Joined":L.has(F.id)?"Pending Approval":"Join Now"})]})]},F.id))}),$&&o.jsx(jo,{isOpen:$,onClose:()=>X(!1),title:"Join the Club!",message:"Sign in or register to join clubs and access courts"})]})},pm="/my-pickleball-app/vite.svg",Y4=g.div`
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
`,q4=g.div`
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
`,$4=g.div`
  text-align: center;
  margin-bottom: 32px;
`,V4=g.div`
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
`,G4=g.h1`
  color: #234255;
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 8px;
  text-align: center;
`,X4=g.p`
  color: #64748b;
  font-size: 15px;
  margin: 0 0 32px;
  text-align: center;
`,Z4=g.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,hp=g.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,pp=g.label`
  color: #475569;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Q4=g.div`
  position: relative;
`,mp=g.input`
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
`,K4=g.button`
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
`,J4=g.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: -8px;
`,W4=g.input`
  width: 16px;
  height: 16px;
  accent-color: #29ba9b;
`,P4=g.label`
  color: #475569;
  font-size: 14px;
  cursor: pointer;
`,F4=g.a`
  color: #29ba9b;
  font-size: 14px;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`,I4=g.button`
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
`,e3=g.div`
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
`,t3=g.div`
  display: flex;
  gap: 16px;
`,gp=g.button`
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
`,mc=g.div`
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
`,n3=g.p`
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
`,a3=()=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),o.jsx("path",{d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}),i3=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"})}),gc=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),l3=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:o.jsx("path",{d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"})}),r3=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:o.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),o3=()=>{const i=ql(),{loginWithDummyData:s}=zo(),[c,u]=j.useState({email:"",password:""}),[d,p]=j.useState(!1),[b,w]=j.useState(!1),[x,m]=j.useState({}),[C,A]=j.useState(!1),D=E=>{var Z;const R=["gmail.com","yahoo.com","hotmail.com","outlook.com","icloud.com","protonmail.com","zoho.com","aol.com","live.com","msn.com"],V=(Z=E.split("@")[1])==null?void 0:Z.toLowerCase();return R.includes(V)},L=()=>{const E={};return c.email?/\S+@\S+\.\S+/.test(c.email)?D(c.email)||(E.email="Please use a valid email provider (Gmail, Yahoo, Outlook, etc.)"):E.email="Please enter a valid email":E.email="Email is required",c.password?c.password.length<6&&(E.password="Password must be at least 6 characters"):E.password="Password is required",m(E),Object.keys(E).length===0},M=E=>{const{name:R,value:V}=E.target;u(Z=>({...Z,[R]:V})),x[R]&&m(Z=>({...Z,[R]:""}))},$=async E=>{if(E.preventDefault(),!!L()){A(!0);try{await new Promise(R=>setTimeout(R,1500)),i("/")}catch(R){m(V=>({...V,submit:R.message||"Failed to sign in. Please try again."}))}finally{A(!1)}}},X=async E=>{try{console.log(`Signing in with ${E}`)}catch{m(V=>({...V,submit:`Failed to sign in with ${E}. Please try again.`}))}};return o.jsx(Y4,{children:o.jsxs(q4,{children:[o.jsxs($4,{children:[o.jsx(V4,{children:o.jsx("img",{src:pm,alt:"Vite Logo"})}),o.jsx(G4,{children:"Welcome Back"}),o.jsx(X4,{children:"Sign in to Philippine Pickleball League"})]}),o.jsxs(Z4,{onSubmit:$,children:[o.jsxs(hp,{children:[o.jsx(pp,{htmlFor:"email",children:"Email"}),o.jsx(mp,{type:"email",id:"email",name:"email",placeholder:"Enter your email",value:c.email,onChange:M,required:!0,autoComplete:"email",$hasError:!!x.email}),x.email&&o.jsxs(mc,{children:[o.jsx(gc,{}),x.email]})]}),o.jsxs(hp,{children:[o.jsxs(pp,{htmlFor:"password",children:["Password",o.jsx(F4,{href:"/forgot-password",children:"Forgot password?"})]}),o.jsxs(Q4,{children:[o.jsx(mp,{type:d?"text":"password",id:"password",name:"password",placeholder:"Enter your password",value:c.password,onChange:M,required:!0,autoComplete:"current-password",$hasError:!!x.password,$hasPassword:!0}),o.jsx(K4,{type:"button",onClick:()=>p(!d),"aria-label":d?"Hide password":"Show password",children:d?o.jsx(i3,{}):o.jsx(a3,{})})]}),x.password&&o.jsxs(mc,{children:[o.jsx(gc,{}),x.password]})]}),o.jsxs(J4,{children:[o.jsx(W4,{type:"checkbox",id:"rememberMe",checked:b,onChange:E=>w(E.target.checked)}),o.jsx(P4,{htmlFor:"rememberMe",children:"Remember me"})]}),o.jsx(I4,{type:"submit",disabled:C,$loading:C,children:C?"Signing in...":"Sign in"}),x.submit&&o.jsxs(mc,{children:[o.jsx(gc,{}),x.submit]})]}),o.jsx(e3,{children:o.jsx("span",{children:"or continue with"})}),o.jsxs(t3,{children:[o.jsxs(gp,{onClick:()=>X("Google"),children:[o.jsx(l3,{}),"Google"]}),o.jsxs(gp,{onClick:()=>X("Facebook"),children:[o.jsx(r3,{}),"Facebook"]})]}),o.jsxs(n3,{children:["Don't have an account?",o.jsx("a",{href:"/register",children:"Create one"})]})]})})},s3=g.div`
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
`,u3=g.div`
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
`,c3=g.div`
  text-align: center;
  margin-bottom: 32px;
`,f3=g.div`
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
`,d3=g.h1`
  color: #234255;
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 8px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
    margin: 0 0 6px;
  }
`,h3=g.p`
  color: #64748b;
  font-size: 15px;
  margin: 0 0 32px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
    margin: 0 0 24px;
  }
`,p3=g.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`,gi=g.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,xi=g.label`
  color: #475569;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,xp=g.div`
  position: relative;
`,bi=g.input`
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
`;g.select`
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
`;const bp=g.button`
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
`,m3=g.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 4px;
`,Ol=g.span`
  color: ${i=>i.$met?"#10b981":"#94a3b8"};
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    width: 14px;
    height: 14px;
  }
`,g3=g.button`
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
`,wa=g.div`
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
`,x3=g.p`
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
`,b3=g.div`
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
`,v3=g.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`,vp=g.button`
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
`,yp=()=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),o.jsx("path",{d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}),wp=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"})}),_l=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M5 13l4 4L19 7"})}),Sa=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),y3=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:o.jsx("path",{d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"})}),w3=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:o.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),S3=()=>{const i=ql(),[s,c]=j.useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:"",birthDate:""}),[u,d]=j.useState(!1),[p,b]=j.useState(!1),[w,x]=j.useState({}),[m,C]=j.useState(!1),A={length:s.password.length>=8,uppercase:/[A-Z]/.test(s.password),lowercase:/[a-z]/.test(s.password),number:/[0-9]/.test(s.password),special:/[!@#$%^&*]/.test(s.password)},D=E=>{var Z;const R=["gmail.com","yahoo.com","hotmail.com","outlook.com","icloud.com","protonmail.com","zoho.com","aol.com","live.com","msn.com"],V=(Z=E.split("@")[1])==null?void 0:Z.toLowerCase();return R.includes(V)},L=()=>{const E={};return s.firstName.trim()||(E.firstName="First name is required"),s.lastName.trim()||(E.lastName="Last name is required"),s.email?/\S+@\S+\.\S+/.test(s.email)?D(s.email)||(E.email="Please use a valid email provider (Gmail, Yahoo, Outlook, etc.)"):E.email="Please enter a valid email":E.email="Email is required",s.password?Object.values(A).every(Boolean)||(E.password="Password does not meet requirements"):E.password="Password is required",s.confirmPassword?s.password!==s.confirmPassword&&(E.confirmPassword="Passwords do not match"):E.confirmPassword="Please confirm your password",s.birthDate?new Date().getFullYear()-new Date(s.birthDate).getFullYear()<13&&(E.birthDate="You must be at least 13 years old"):E.birthDate="Birth date is required",x(E),Object.keys(E).length===0},M=E=>{const{name:R,value:V}=E.target;c(Z=>({...Z,[R]:V})),w[R]&&x(Z=>({...Z,[R]:""}))},$=async E=>{if(E.preventDefault(),!!L()){C(!0);try{await new Promise(R=>setTimeout(R,1500)),i("/")}catch(R){x(V=>({...V,submit:R.message||"Failed to create account. Please try again."}))}finally{C(!1)}}},X=async E=>{try{console.log(`Signing up with ${E}`)}catch{x(V=>({...V,submit:`Failed to sign up with ${E}. Please try again.`}))}};return o.jsx(s3,{children:o.jsxs(u3,{children:[o.jsxs(c3,{children:[o.jsx(f3,{children:o.jsx("img",{src:pm,alt:"Vite Logo"})}),o.jsx(d3,{children:"Create Account"}),o.jsx(h3,{children:"Join the Philippine Pickleball League"})]}),o.jsxs(p3,{onSubmit:$,children:[o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:"16px"},children:[o.jsxs(gi,{children:[o.jsx(xi,{htmlFor:"firstName",children:"First Name"}),o.jsx(bi,{type:"text",id:"firstName",name:"firstName",placeholder:"Enter first name",value:s.firstName,onChange:M,required:!0,$hasError:!!w.firstName}),w.firstName&&o.jsxs(wa,{children:[o.jsx(Sa,{}),w.firstName]})]}),o.jsxs(gi,{children:[o.jsx(xi,{htmlFor:"lastName",children:"Last Name"}),o.jsx(bi,{type:"text",id:"lastName",name:"lastName",placeholder:"Enter last name",value:s.lastName,onChange:M,required:!0,$hasError:!!w.lastName}),w.lastName&&o.jsxs(wa,{children:[o.jsx(Sa,{}),w.lastName]})]})]}),o.jsxs(gi,{children:[o.jsx(xi,{htmlFor:"email",children:"Email"}),o.jsx(bi,{type:"email",id:"email",name:"email",placeholder:"Enter your email",value:s.email,onChange:M,required:!0,autoComplete:"email",$hasError:!!w.email}),w.email&&o.jsxs(wa,{children:[o.jsx(Sa,{}),w.email]})]}),o.jsxs(gi,{children:[o.jsx(xi,{htmlFor:"birthDate",children:"Birth Date"}),o.jsx(bi,{type:"date",id:"birthDate",name:"birthDate",value:s.birthDate,onChange:M,required:!0,$hasError:!!w.birthDate}),w.birthDate&&o.jsxs(wa,{children:[o.jsx(Sa,{}),w.birthDate]})]}),o.jsxs(gi,{children:[o.jsx(xi,{htmlFor:"password",children:"Password"}),o.jsxs(xp,{children:[o.jsx(bi,{type:u?"text":"password",id:"password",name:"password",placeholder:"Create a password",value:s.password,onChange:M,required:!0,$hasError:!!w.password,$hasPassword:!0}),o.jsx(bp,{type:"button",onClick:()=>d(!u),"aria-label":u?"Hide password":"Show password",children:u?o.jsx(wp,{}):o.jsx(yp,{})})]}),o.jsxs(m3,{children:[o.jsxs(Ol,{$met:A.length,children:[A.length?o.jsx(_l,{}):"•"," At least 8 characters"]}),o.jsxs(Ol,{$met:A.uppercase,children:[A.uppercase?o.jsx(_l,{}):"•"," One uppercase letter"]}),o.jsxs(Ol,{$met:A.lowercase,children:[A.lowercase?o.jsx(_l,{}):"•"," One lowercase letter"]}),o.jsxs(Ol,{$met:A.number,children:[A.number?o.jsx(_l,{}):"•"," One number"]}),o.jsxs(Ol,{$met:A.special,children:[A.special?o.jsx(_l,{}):"•"," One special character"]})]}),w.password&&o.jsxs(wa,{children:[o.jsx(Sa,{}),w.password]})]}),o.jsxs(gi,{children:[o.jsx(xi,{htmlFor:"confirmPassword",children:"Confirm Password"}),o.jsxs(xp,{children:[o.jsx(bi,{type:p?"text":"password",id:"confirmPassword",name:"confirmPassword",placeholder:"Confirm your password",value:s.confirmPassword,onChange:M,required:!0,$hasError:!!w.confirmPassword,$hasPassword:!0}),o.jsx(bp,{type:"button",onClick:()=>b(!p),"aria-label":p?"Hide password":"Show password",children:p?o.jsx(wp,{}):o.jsx(yp,{})})]}),w.confirmPassword&&o.jsxs(wa,{children:[o.jsx(Sa,{}),w.confirmPassword]})]}),o.jsx(g3,{type:"submit",disabled:m,$loading:m,children:m?"Creating account...":"Create account"}),w.submit&&o.jsxs(wa,{children:[o.jsx(Sa,{}),w.submit]})]}),o.jsx(b3,{children:o.jsx("span",{children:"or sign up with"})}),o.jsxs(v3,{children:[o.jsxs(vp,{onClick:()=>X("Google"),children:[o.jsx(y3,{}),"Google"]}),o.jsxs(vp,{onClick:()=>X("Facebook"),children:[o.jsx(w3,{}),"Facebook"]})]}),o.jsxs(x3,{children:["Already have an account?",o.jsx("a",{href:"/signin",children:"Sign in"})]})]})})};function j3(){return o.jsx(o2,{children:o.jsxs("div",{className:"app",children:[o.jsx(zb,{}),o.jsxs(kx,{children:[o.jsx(In,{path:"/",element:o.jsx(Jb,{})}),o.jsx(In,{path:"/forum",element:o.jsx(Xv,{})}),o.jsx(In,{path:"/tournament",element:o.jsx(xy,{})}),o.jsx(In,{path:"/ranks",element:o.jsx(Jy,{})}),o.jsx(In,{path:"/clubs-courts",element:o.jsx(H4,{})}),o.jsx(In,{path:"/signin",element:o.jsx(o3,{})}),o.jsx(In,{path:"/register",element:o.jsx(S3,{})})]}),o.jsx(Ob,{})]})})}Lg.createRoot(document.getElementById("root")).render(o.jsx(yi.StrictMode,{children:o.jsx(Px,{basename:"/my-pickleball-app",children:o.jsx(j3,{})})}));
