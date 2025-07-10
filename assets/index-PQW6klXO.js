(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const b of h.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&u(b)}).observe(document,{childList:!0,subtree:!0});function c(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function u(d){if(d.ep)return;d.ep=!0;const h=c(d);fetch(d.href,h)}})();function jh(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Qu={exports:{}},Tl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp;function T1(){if(kp)return Tl;kp=1;var i=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function c(u,d,h){var b=null;if(h!==void 0&&(b=""+h),d.key!==void 0&&(b=""+d.key),"key"in d){h={};for(var w in d)w!=="key"&&(h[w]=d[w])}else h=d;return d=h.ref,{$$typeof:i,type:u,key:b,ref:d!==void 0?d:null,props:h}}return Tl.Fragment=s,Tl.jsx=c,Tl.jsxs=c,Tl}var Tp;function A1(){return Tp||(Tp=1,Qu.exports=T1()),Qu.exports}var o=A1(),Ku={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function M1(){if(Ap)return fe;Ap=1;var i=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),b=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),k=Symbol.iterator;function A(y){return y===null||typeof y!="object"?null:(y=k&&y[k]||y["@@iterator"],typeof y=="function"?y:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,q={};function X(y,$,K){this.props=y,this.context=$,this.refs=q,this.updater=K||N}X.prototype.isReactComponent={},X.prototype.setState=function(y,$){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,$,"setState")},X.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function C(){}C.prototype=X.prototype;function M(y,$,K){this.props=y,this.context=$,this.refs=q,this.updater=K||N}var G=M.prototype=new C;G.constructor=M,D(G,X.prototype),G.isPureReactComponent=!0;var Z=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},V=Object.prototype.hasOwnProperty;function Q(y,$,K,W,ee,ce){return K=ce.ref,{$$typeof:i,type:y,key:$,ref:K!==void 0?K:null,props:ce}}function ge(y,$){return Q(y.type,$,void 0,void 0,void 0,y.props)}function ue(y){return typeof y=="object"&&y!==null&&y.$$typeof===i}function I(y){var $={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(K){return $[K]})}var ye=/\/+/g;function Ce(y,$){return typeof y=="object"&&y!==null&&y.key!=null?I(""+y.key):$.toString(36)}function dt(){}function ht(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(dt,dt):(y.status="pending",y.then(function($){y.status==="pending"&&(y.status="fulfilled",y.value=$)},function($){y.status==="pending"&&(y.status="rejected",y.reason=$)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function Ge(y,$,K,W,ee){var ce=typeof y;(ce==="undefined"||ce==="boolean")&&(y=null);var ne=!1;if(y===null)ne=!0;else switch(ce){case"bigint":case"string":case"number":ne=!0;break;case"object":switch(y.$$typeof){case i:case s:ne=!0;break;case E:return ne=y._init,Ge(ne(y._payload),$,K,W,ee)}}if(ne)return ee=ee(y),ne=W===""?"."+Ce(y,0):W,Z(ee)?(K="",ne!=null&&(K=ne.replace(ye,"$&/")+"/"),Ge(ee,$,K,"",function(We){return We})):ee!=null&&(ue(ee)&&(ee=ge(ee,K+(ee.key==null||y&&y.key===ee.key?"":(""+ee.key).replace(ye,"$&/")+"/")+ne)),$.push(ee)),1;ne=0;var Ve=W===""?".":W+":";if(Z(y))for(var we=0;we<y.length;we++)W=y[we],ce=Ve+Ce(W,we),ne+=Ge(W,$,K,ce,ee);else if(we=A(y),typeof we=="function")for(y=we.call(y),we=0;!(W=y.next()).done;)W=W.value,ce=Ve+Ce(W,we++),ne+=Ge(W,$,K,ce,ee);else if(ce==="object"){if(typeof y.then=="function")return Ge(ht(y),$,K,W,ee);throw $=String(y),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return ne}function L(y,$,K){if(y==null)return y;var W=[],ee=0;return Ge(y,W,"","",function(ce){return $.call(K,ce,ee++)}),W}function J(y){if(y._status===-1){var $=y._result;$=$(),$.then(function(K){(y._status===0||y._status===-1)&&(y._status=1,y._result=K)},function(K){(y._status===0||y._status===-1)&&(y._status=2,y._result=K)}),y._status===-1&&(y._status=0,y._result=$)}if(y._status===1)return y._result.default;throw y._result}var le=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)};function he(){}return fe.Children={map:L,forEach:function(y,$,K){L(y,function(){$.apply(this,arguments)},K)},count:function(y){var $=0;return L(y,function(){$++}),$},toArray:function(y){return L(y,function($){return $})||[]},only:function(y){if(!ue(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},fe.Component=X,fe.Fragment=c,fe.Profiler=d,fe.PureComponent=M,fe.StrictMode=u,fe.Suspense=x,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,fe.__COMPILER_RUNTIME={__proto__:null,c:function(y){return P.H.useMemoCache(y)}},fe.cache=function(y){return function(){return y.apply(null,arguments)}},fe.cloneElement=function(y,$,K){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var W=D({},y.props),ee=y.key,ce=void 0;if($!=null)for(ne in $.ref!==void 0&&(ce=void 0),$.key!==void 0&&(ee=""+$.key),$)!V.call($,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&$.ref===void 0||(W[ne]=$[ne]);var ne=arguments.length-2;if(ne===1)W.children=K;else if(1<ne){for(var Ve=Array(ne),we=0;we<ne;we++)Ve[we]=arguments[we+2];W.children=Ve}return Q(y.type,ee,void 0,void 0,ce,W)},fe.createContext=function(y){return y={$$typeof:b,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:h,_context:y},y},fe.createElement=function(y,$,K){var W,ee={},ce=null;if($!=null)for(W in $.key!==void 0&&(ce=""+$.key),$)V.call($,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(ee[W]=$[W]);var ne=arguments.length-2;if(ne===1)ee.children=K;else if(1<ne){for(var Ve=Array(ne),we=0;we<ne;we++)Ve[we]=arguments[we+2];ee.children=Ve}if(y&&y.defaultProps)for(W in ne=y.defaultProps,ne)ee[W]===void 0&&(ee[W]=ne[W]);return Q(y,ce,void 0,void 0,null,ee)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(y){return{$$typeof:w,render:y}},fe.isValidElement=ue,fe.lazy=function(y){return{$$typeof:E,_payload:{_status:-1,_result:y},_init:J}},fe.memo=function(y,$){return{$$typeof:m,type:y,compare:$===void 0?null:$}},fe.startTransition=function(y){var $=P.T,K={};P.T=K;try{var W=y(),ee=P.S;ee!==null&&ee(K,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(he,le)}catch(ce){le(ce)}finally{P.T=$}},fe.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},fe.use=function(y){return P.H.use(y)},fe.useActionState=function(y,$,K){return P.H.useActionState(y,$,K)},fe.useCallback=function(y,$){return P.H.useCallback(y,$)},fe.useContext=function(y){return P.H.useContext(y)},fe.useDebugValue=function(){},fe.useDeferredValue=function(y,$){return P.H.useDeferredValue(y,$)},fe.useEffect=function(y,$,K){var W=P.H;if(typeof K=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return W.useEffect(y,$)},fe.useId=function(){return P.H.useId()},fe.useImperativeHandle=function(y,$,K){return P.H.useImperativeHandle(y,$,K)},fe.useInsertionEffect=function(y,$){return P.H.useInsertionEffect(y,$)},fe.useLayoutEffect=function(y,$){return P.H.useLayoutEffect(y,$)},fe.useMemo=function(y,$){return P.H.useMemo(y,$)},fe.useOptimistic=function(y,$){return P.H.useOptimistic(y,$)},fe.useReducer=function(y,$,K){return P.H.useReducer(y,$,K)},fe.useRef=function(y){return P.H.useRef(y)},fe.useState=function(y){return P.H.useState(y)},fe.useSyncExternalStore=function(y,$,K){return P.H.useSyncExternalStore(y,$,K)},fe.useTransition=function(){return P.H.useTransition()},fe.version="19.1.0",fe}var Mp;function Rc(){return Mp||(Mp=1,Ku.exports=M1()),Ku.exports}var j=Rc();const yi=jh(j);var Ju={exports:{}},Al={},Wu={exports:{}},Pu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp;function R1(){return Rp||(Rp=1,function(i){function s(L,J){var le=L.length;L.push(J);e:for(;0<le;){var he=le-1>>>1,y=L[he];if(0<d(y,J))L[he]=J,L[le]=y,le=he;else break e}}function c(L){return L.length===0?null:L[0]}function u(L){if(L.length===0)return null;var J=L[0],le=L.pop();if(le!==J){L[0]=le;e:for(var he=0,y=L.length,$=y>>>1;he<$;){var K=2*(he+1)-1,W=L[K],ee=K+1,ce=L[ee];if(0>d(W,le))ee<y&&0>d(ce,W)?(L[he]=ce,L[ee]=le,he=ee):(L[he]=W,L[K]=le,he=K);else if(ee<y&&0>d(ce,le))L[he]=ce,L[ee]=le,he=ee;else break e}}return J}function d(L,J){var le=L.sortIndex-J.sortIndex;return le!==0?le:L.id-J.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;i.unstable_now=function(){return h.now()}}else{var b=Date,w=b.now();i.unstable_now=function(){return b.now()-w}}var x=[],m=[],E=1,k=null,A=3,N=!1,D=!1,q=!1,X=!1,C=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function Z(L){for(var J=c(m);J!==null;){if(J.callback===null)u(m);else if(J.startTime<=L)u(m),J.sortIndex=J.expirationTime,s(x,J);else break;J=c(m)}}function P(L){if(q=!1,Z(L),!D)if(c(x)!==null)D=!0,V||(V=!0,Ce());else{var J=c(m);J!==null&&Ge(P,J.startTime-L)}}var V=!1,Q=-1,ge=5,ue=-1;function I(){return X?!0:!(i.unstable_now()-ue<ge)}function ye(){if(X=!1,V){var L=i.unstable_now();ue=L;var J=!0;try{e:{D=!1,q&&(q=!1,M(Q),Q=-1),N=!0;var le=A;try{t:{for(Z(L),k=c(x);k!==null&&!(k.expirationTime>L&&I());){var he=k.callback;if(typeof he=="function"){k.callback=null,A=k.priorityLevel;var y=he(k.expirationTime<=L);if(L=i.unstable_now(),typeof y=="function"){k.callback=y,Z(L),J=!0;break t}k===c(x)&&u(x),Z(L)}else u(x);k=c(x)}if(k!==null)J=!0;else{var $=c(m);$!==null&&Ge(P,$.startTime-L),J=!1}}break e}finally{k=null,A=le,N=!1}J=void 0}}finally{J?Ce():V=!1}}}var Ce;if(typeof G=="function")Ce=function(){G(ye)};else if(typeof MessageChannel<"u"){var dt=new MessageChannel,ht=dt.port2;dt.port1.onmessage=ye,Ce=function(){ht.postMessage(null)}}else Ce=function(){C(ye,0)};function Ge(L,J){Q=C(function(){L(i.unstable_now())},J)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(L){L.callback=null},i.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ge=0<L?Math.floor(1e3/L):5},i.unstable_getCurrentPriorityLevel=function(){return A},i.unstable_next=function(L){switch(A){case 1:case 2:case 3:var J=3;break;default:J=A}var le=A;A=J;try{return L()}finally{A=le}},i.unstable_requestPaint=function(){X=!0},i.unstable_runWithPriority=function(L,J){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var le=A;A=L;try{return J()}finally{A=le}},i.unstable_scheduleCallback=function(L,J,le){var he=i.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?he+le:he):le=he,L){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=le+y,L={id:E++,callback:J,priorityLevel:L,startTime:le,expirationTime:y,sortIndex:-1},le>he?(L.sortIndex=le,s(m,L),c(x)===null&&L===c(m)&&(q?(M(Q),Q=-1):q=!0,Ge(P,le-he))):(L.sortIndex=y,s(x,L),D||N||(D=!0,V||(V=!0,Ce()))),L},i.unstable_shouldYield=I,i.unstable_wrapCallback=function(L){var J=A;return function(){var le=A;A=J;try{return L.apply(this,arguments)}finally{A=le}}}}(Pu)),Pu}var Dp;function D1(){return Dp||(Dp=1,Wu.exports=R1()),Wu.exports}var Fu={exports:{}},ft={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function O1(){if(Op)return ft;Op=1;var i=Rc();function s(x){var m="https://react.dev/errors/"+x;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)m+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+x+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var u={d:{f:c,r:function(){throw Error(s(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},d=Symbol.for("react.portal");function h(x,m,E){var k=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:k==null?null:""+k,children:x,containerInfo:m,implementation:E}}var b=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function w(x,m){if(x==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,ft.createPortal=function(x,m){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(s(299));return h(x,m,null,E)},ft.flushSync=function(x){var m=b.T,E=u.p;try{if(b.T=null,u.p=2,x)return x()}finally{b.T=m,u.p=E,u.d.f()}},ft.preconnect=function(x,m){typeof x=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,u.d.C(x,m))},ft.prefetchDNS=function(x){typeof x=="string"&&u.d.D(x)},ft.preinit=function(x,m){if(typeof x=="string"&&m&&typeof m.as=="string"){var E=m.as,k=w(E,m.crossOrigin),A=typeof m.integrity=="string"?m.integrity:void 0,N=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;E==="style"?u.d.S(x,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:k,integrity:A,fetchPriority:N}):E==="script"&&u.d.X(x,{crossOrigin:k,integrity:A,fetchPriority:N,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ft.preinitModule=function(x,m){if(typeof x=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var E=w(m.as,m.crossOrigin);u.d.M(x,{crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&u.d.M(x)},ft.preload=function(x,m){if(typeof x=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var E=m.as,k=w(E,m.crossOrigin);u.d.L(x,E,{crossOrigin:k,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ft.preloadModule=function(x,m){if(typeof x=="string")if(m){var E=w(m.as,m.crossOrigin);u.d.m(x,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else u.d.m(x)},ft.requestFormReset=function(x){u.d.r(x)},ft.unstable_batchedUpdates=function(x,m){return x(m)},ft.useFormState=function(x,m,E){return b.H.useFormState(x,m,E)},ft.useFormStatus=function(){return b.H.useHostTransitionStatus()},ft.version="19.1.0",ft}var _p;function _1(){if(_p)return Fu.exports;_p=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}return i(),Fu.exports=O1(),Fu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np;function N1(){if(Np)return Al;Np=1;var i=D1(),s=Rc(),c=_1();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w(e){if(h(e)!==e)throw Error(u(188))}function x(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var r=l.alternate;if(r===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===n)return w(l),e;if(r===a)return w(l),t;r=r.sibling}throw Error(u(188))}if(n.return!==a.return)n=l,a=r;else{for(var f=!1,p=l.child;p;){if(p===n){f=!0,n=l,a=r;break}if(p===a){f=!0,a=l,n=r;break}p=p.sibling}if(!f){for(p=r.child;p;){if(p===n){f=!0,n=r,a=l;break}if(p===a){f=!0,a=r,n=l;break}p=p.sibling}if(!f)throw Error(u(189))}}if(n.alternate!==a)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,k=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),M=Symbol.for("react.consumer"),G=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),ue=Symbol.for("react.activity"),I=Symbol.for("react.memo_cache_sentinel"),ye=Symbol.iterator;function Ce(e){return e===null||typeof e!="object"?null:(e=ye&&e[ye]||e["@@iterator"],typeof e=="function"?e:null)}var dt=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===dt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case X:return"Profiler";case q:return"StrictMode";case P:return"Suspense";case V:return"SuspenseList";case ue:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case N:return"Portal";case G:return(e.displayName||"Context")+".Provider";case M:return(e._context.displayName||"Context")+".Consumer";case Z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return t=e.displayName||null,t!==null?t:ht(e.type)||"Memo";case ge:t=e._payload,e=e._init;try{return ht(e(t))}catch{}}return null}var Ge=Array.isArray,L=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},he=[],y=-1;function $(e){return{current:e}}function K(e){0>y||(e.current=he[y],he[y]=null,y--)}function W(e,t){y++,he[y]=e.current,e.current=t}var ee=$(null),ce=$(null),ne=$(null),Ve=$(null);function we(e,t){switch(W(ne,t),W(ce,e),W(ee,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?tp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=tp(t),e=np(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}K(ee),W(ee,e)}function We(){K(ee),K(ce),K(ne)}function Jt(e){e.memoizedState!==null&&W(Ve,e);var t=ee.current,n=np(t,e.type);t!==n&&(W(ce,e),W(ee,n))}function St(e){ce.current===e&&(K(ee),K(ce)),Ve.current===e&&(K(Ve),jl._currentValue=le)}var mt=Object.prototype.hasOwnProperty,qt=i.unstable_scheduleCallback,Mi=i.unstable_cancelCallback,za=i.unstable_shouldYield,Zl=i.unstable_requestPaint,jt=i.unstable_now,Ql=i.unstable_getCurrentPriorityLevel,Ri=i.unstable_ImmediatePriority,Di=i.unstable_UserBlockingPriority,na=i.unstable_NormalPriority,No=i.unstable_LowPriority,Kl=i.unstable_IdlePriority,Lo=i.log,Oi=i.unstable_setDisableYieldValue,Wt=null,it=null;function Gt(e){if(typeof Lo=="function"&&Oi(e),it&&typeof it.setStrictMode=="function")try{it.setStrictMode(Wt,e)}catch{}}var lt=Math.clz32?Math.clz32:Uo,ka=Math.log,Bo=Math.LN2;function Uo(e){return e>>>=0,e===0?32:31-(ka(e)/Bo|0)|0}var Ta=256,aa=4194304;function Pt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Aa(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,r=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var p=a&134217727;return p!==0?(a=p&~r,a!==0?l=Pt(a):(f&=p,f!==0?l=Pt(f):n||(n=p&~e,n!==0&&(l=Pt(n))))):(p=a&~r,p!==0?l=Pt(p):f!==0?l=Pt(f):n||(n=a&~e,n!==0&&(l=Pt(n)))),l===0?0:t!==0&&t!==l&&(t&r)===0&&(r=l&-l,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:l}function U(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ie(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function je(){var e=Ta;return Ta<<=1,(Ta&4194048)===0&&(Ta=256),e}function F(){var e=aa;return aa<<=1,(aa&62914560)===0&&(aa=4194304),e}function xe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Te(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ne(e,t,n,a,l,r){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var p=e.entanglements,v=e.expirationTimes,R=e.hiddenUpdates;for(n=f&~n;0<n;){var B=31-lt(n),Y=1<<B;p[B]=0,v[B]=-1;var O=R[B];if(O!==null)for(R[B]=null,B=0;B<O.length;B++){var _=O[B];_!==null&&(_.lane&=-536870913)}n&=~Y}a!==0&&Tn(e,a,0),r!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=r&~(f&~t))}function Tn(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-lt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194090}function An(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-lt(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function Vt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function sn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Jl(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:wp(e.type))}function xm(e,t){var n=J.p;try{return J.p=e,t()}finally{J.p=n}}var Mn=Math.random().toString(36).slice(2),ut="__reactFiber$"+Mn,gt="__reactProps$"+Mn,Ma="__reactContainer$"+Mn,Ho="__reactEvents$"+Mn,bm="__reactListeners$"+Mn,vm="__reactHandles$"+Mn,qc="__reactResources$"+Mn,_i="__reactMarker$"+Mn;function Yo(e){delete e[ut],delete e[gt],delete e[Ho],delete e[bm],delete e[vm]}function Ra(e){var t=e[ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ma]||n[ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=rp(e);e!==null;){if(n=e[ut])return n;e=rp(e)}return t}e=n,n=e.parentNode}return null}function Da(e){if(e=e[ut]||e[Ma]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Ni(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Oa(e){var t=e[qc];return t||(t=e[qc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ie(e){e[_i]=!0}var Gc=new Set,Vc={};function ia(e,t){_a(e,t),_a(e+"Capture",t)}function _a(e,t){for(Vc[e]=t,e=0;e<t.length;e++)Gc.add(t[e])}var ym=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xc={},Zc={};function wm(e){return mt.call(Zc,e)?!0:mt.call(Xc,e)?!1:ym.test(e)?Zc[e]=!0:(Xc[e]=!0,!1)}function Wl(e,t,n){if(wm(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Pl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function un(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}var $o,Qc;function Na(e){if($o===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);$o=t&&t[1]||"",Qc=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$o+e+Qc}var qo=!1;function Go(e,t){if(!e||qo)return"";qo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(_){var O=_}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(_){O=_}e.call(Y.prototype)}}else{try{throw Error()}catch(_){O=_}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(_){if(_&&O&&typeof _.stack=="string")return[_.stack,O.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),f=r[0],p=r[1];if(f&&p){var v=f.split(`
`),R=p.split(`
`);for(l=a=0;a<v.length&&!v[a].includes("DetermineComponentFrameRoot");)a++;for(;l<R.length&&!R[l].includes("DetermineComponentFrameRoot");)l++;if(a===v.length||l===R.length)for(a=v.length-1,l=R.length-1;1<=a&&0<=l&&v[a]!==R[l];)l--;for(;1<=a&&0<=l;a--,l--)if(v[a]!==R[l]){if(a!==1||l!==1)do if(a--,l--,0>l||v[a]!==R[l]){var B=`
`+v[a].replace(" at new "," at ");return e.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",e.displayName)),B}while(1<=a&&0<=l);break}}}finally{qo=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Na(n):""}function Sm(e){switch(e.tag){case 26:case 27:case 5:return Na(e.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 15:return Go(e.type,!1);case 11:return Go(e.type.render,!1);case 1:return Go(e.type,!0);case 31:return Na("Activity");default:return""}}function Kc(e){try{var t="";do t+=Sm(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jm(e){var t=Jc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(f){a=""+f,r.call(this,f)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fl(e){e._valueTracker||(e._valueTracker=jm(e))}function Wc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Jc(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Il(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Cm=/[\n"\\]/g;function Ot(e){return e.replace(Cm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Vo(e,t,n,a,l,r,f,p){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Dt(t)):e.value!==""+Dt(t)&&(e.value=""+Dt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?Xo(e,f,Dt(t)):n!=null?Xo(e,f,Dt(n)):a!=null&&e.removeAttribute("value"),l==null&&r!=null&&(e.defaultChecked=!!r),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+Dt(p):e.removeAttribute("name")}function Pc(e,t,n,a,l,r,f,p){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+Dt(n):"",t=t!=null?""+Dt(t):n,p||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=p?e.checked:!!a,e.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function Xo(e,t,n){t==="number"&&Il(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function La(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Dt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Fc(e,t,n){if(t!=null&&(t=""+Dt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Dt(n):""}function Ic(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(u(92));if(Ge(a)){if(1<a.length)throw Error(u(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Dt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function Ba(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Em=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ef(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Em.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function tf(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&ef(e,l,a)}else for(var r in t)t.hasOwnProperty(r)&&ef(e,r,t[r])}function Zo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),km=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function er(e){return km.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Qo=null;function Ko(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ua=null,Ha=null;function nf(e){var t=Da(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Vo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ot(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[gt]||null;if(!l)throw Error(u(90));Vo(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Wc(a)}break e;case"textarea":Fc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&La(e,!!n.multiple,t,!1)}}}var Jo=!1;function af(e,t,n){if(Jo)return e(t,n);Jo=!0;try{var a=e(t);return a}finally{if(Jo=!1,(Ua!==null||Ha!==null)&&(Hr(),Ua&&(t=Ua,e=Ha,Ha=Ua=null,nf(t),e)))for(t=0;t<e.length;t++)nf(e[t])}}function Li(e,t){var n=e.stateNode;if(n===null)return null;var a=n[gt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wo=!1;if(cn)try{var Bi={};Object.defineProperty(Bi,"passive",{get:function(){Wo=!0}}),window.addEventListener("test",Bi,Bi),window.removeEventListener("test",Bi,Bi)}catch{Wo=!1}var Rn=null,Po=null,tr=null;function lf(){if(tr)return tr;var e,t=Po,n=t.length,a,l="value"in Rn?Rn.value:Rn.textContent,r=l.length;for(e=0;e<n&&t[e]===l[e];e++);var f=n-e;for(a=1;a<=f&&t[n-a]===l[r-a];a++);return tr=l.slice(e,1<a?1-a:void 0)}function nr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ar(){return!0}function rf(){return!1}function xt(e){function t(n,a,l,r,f){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=r,this.target=f,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(r):r[p]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?ar:rf,this.isPropagationStopped=rf,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),t}var la={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ir=xt(la),Ui=E({},la,{view:0,detail:0}),Tm=xt(Ui),Fo,Io,Hi,lr=E({},Ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ts,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hi&&(Hi&&e.type==="mousemove"?(Fo=e.screenX-Hi.screenX,Io=e.screenY-Hi.screenY):Io=Fo=0,Hi=e),Fo)},movementY:function(e){return"movementY"in e?e.movementY:Io}}),of=xt(lr),Am=E({},lr,{dataTransfer:0}),Mm=xt(Am),Rm=E({},Ui,{relatedTarget:0}),es=xt(Rm),Dm=E({},la,{animationName:0,elapsedTime:0,pseudoElement:0}),Om=xt(Dm),_m=E({},la,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nm=xt(_m),Lm=E({},la,{data:0}),sf=xt(Lm),Bm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Um={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ym(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hm[e])?!!t[e]:!1}function ts(){return Ym}var $m=E({},Ui,{key:function(e){if(e.key){var t=Bm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=nr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Um[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ts,charCode:function(e){return e.type==="keypress"?nr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?nr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qm=xt($m),Gm=E({},lr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uf=xt(Gm),Vm=E({},Ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ts}),Xm=xt(Vm),Zm=E({},la,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qm=xt(Zm),Km=E({},lr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jm=xt(Km),Wm=E({},la,{newState:0,oldState:0}),Pm=xt(Wm),Fm=[9,13,27,32],ns=cn&&"CompositionEvent"in window,Yi=null;cn&&"documentMode"in document&&(Yi=document.documentMode);var Im=cn&&"TextEvent"in window&&!Yi,cf=cn&&(!ns||Yi&&8<Yi&&11>=Yi),ff=" ",df=!1;function pf(e,t){switch(e){case"keyup":return Fm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ya=!1;function eg(e,t){switch(e){case"compositionend":return hf(t);case"keypress":return t.which!==32?null:(df=!0,ff);case"textInput":return e=t.data,e===ff&&df?null:e;default:return null}}function tg(e,t){if(Ya)return e==="compositionend"||!ns&&pf(e,t)?(e=lf(),tr=Po=Rn=null,Ya=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cf&&t.locale!=="ko"?null:t.data;default:return null}}var ng={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ng[e.type]:t==="textarea"}function gf(e,t,n,a){Ua?Ha?Ha.push(a):Ha=[a]:Ua=a,t=Xr(t,"onChange"),0<t.length&&(n=new ir("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var $i=null,qi=null;function ag(e){W0(e,0)}function rr(e){var t=Ni(e);if(Wc(t))return e}function xf(e,t){if(e==="change")return t}var bf=!1;if(cn){var as;if(cn){var is="oninput"in document;if(!is){var vf=document.createElement("div");vf.setAttribute("oninput","return;"),is=typeof vf.oninput=="function"}as=is}else as=!1;bf=as&&(!document.documentMode||9<document.documentMode)}function yf(){$i&&($i.detachEvent("onpropertychange",wf),qi=$i=null)}function wf(e){if(e.propertyName==="value"&&rr(qi)){var t=[];gf(t,qi,e,Ko(e)),af(ag,t)}}function ig(e,t,n){e==="focusin"?(yf(),$i=t,qi=n,$i.attachEvent("onpropertychange",wf)):e==="focusout"&&yf()}function lg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rr(qi)}function rg(e,t){if(e==="click")return rr(t)}function og(e,t){if(e==="input"||e==="change")return rr(t)}function sg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:sg;function Gi(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!mt.call(t,l)||!Ct(e[l],t[l]))return!1}return!0}function Sf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jf(e,t){var n=Sf(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sf(n)}}function Cf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ef(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Il(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Il(e.document)}return t}function ls(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ug=cn&&"documentMode"in document&&11>=document.documentMode,$a=null,rs=null,Vi=null,os=!1;function zf(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;os||$a==null||$a!==Il(a)||(a=$a,"selectionStart"in a&&ls(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Vi&&Gi(Vi,a)||(Vi=a,a=Xr(rs,"onSelect"),0<a.length&&(t=new ir("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=$a)))}function ra(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qa={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionrun:ra("Transition","TransitionRun"),transitionstart:ra("Transition","TransitionStart"),transitioncancel:ra("Transition","TransitionCancel"),transitionend:ra("Transition","TransitionEnd")},ss={},kf={};cn&&(kf=document.createElement("div").style,"AnimationEvent"in window||(delete qa.animationend.animation,delete qa.animationiteration.animation,delete qa.animationstart.animation),"TransitionEvent"in window||delete qa.transitionend.transition);function oa(e){if(ss[e])return ss[e];if(!qa[e])return e;var t=qa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in kf)return ss[e]=t[n];return e}var Tf=oa("animationend"),Af=oa("animationiteration"),Mf=oa("animationstart"),cg=oa("transitionrun"),fg=oa("transitionstart"),dg=oa("transitioncancel"),Rf=oa("transitionend"),Df=new Map,us="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");us.push("scrollEnd");function Xt(e,t){Df.set(e,t),ia(t,[e])}var Of=new WeakMap;function _t(e,t){if(typeof e=="object"&&e!==null){var n=Of.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Kc(t)},Of.set(e,t),t)}return{value:e,source:t,stack:Kc(t)}}var Nt=[],Ga=0,cs=0;function or(){for(var e=Ga,t=cs=Ga=0;t<e;){var n=Nt[t];Nt[t++]=null;var a=Nt[t];Nt[t++]=null;var l=Nt[t];Nt[t++]=null;var r=Nt[t];if(Nt[t++]=null,a!==null&&l!==null){var f=a.pending;f===null?l.next=l:(l.next=f.next,f.next=l),a.pending=l}r!==0&&_f(n,l,r)}}function sr(e,t,n,a){Nt[Ga++]=e,Nt[Ga++]=t,Nt[Ga++]=n,Nt[Ga++]=a,cs|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function fs(e,t,n,a){return sr(e,t,n,a),ur(e)}function Va(e,t){return sr(e,null,null,t),ur(e)}function _f(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,r=e.return;r!==null;)r.childLanes|=n,a=r.alternate,a!==null&&(a.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(l=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,l&&t!==null&&(l=31-lt(n),e=r.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),r):null}function ur(e){if(50<ml)throw ml=0,xu=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Xa={};function pg(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(e,t,n,a){return new pg(e,t,n,a)}function ds(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fn(e,t){var n=e.alternate;return n===null?(n=Et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Nf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function cr(e,t,n,a,l,r){var f=0;if(a=e,typeof e=="function")ds(e)&&(f=1);else if(typeof e=="string")f=m1(e,n,ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ue:return e=Et(31,n,t,l),e.elementType=ue,e.lanes=r,e;case D:return sa(n.children,l,r,t);case q:f=8,l|=24;break;case X:return e=Et(12,n,t,l|2),e.elementType=X,e.lanes=r,e;case P:return e=Et(13,n,t,l),e.elementType=P,e.lanes=r,e;case V:return e=Et(19,n,t,l),e.elementType=V,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case C:case G:f=10;break e;case M:f=9;break e;case Z:f=11;break e;case Q:f=14;break e;case ge:f=16,a=null;break e}f=29,n=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=Et(f,n,t,l),t.elementType=e,t.type=a,t.lanes=r,t}function sa(e,t,n,a){return e=Et(7,e,a,t),e.lanes=n,e}function ps(e,t,n){return e=Et(6,e,null,t),e.lanes=n,e}function hs(e,t,n){return t=Et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Za=[],Qa=0,fr=null,dr=0,Lt=[],Bt=0,ua=null,dn=1,pn="";function ca(e,t){Za[Qa++]=dr,Za[Qa++]=fr,fr=e,dr=t}function Lf(e,t,n){Lt[Bt++]=dn,Lt[Bt++]=pn,Lt[Bt++]=ua,ua=e;var a=dn;e=pn;var l=32-lt(a)-1;a&=~(1<<l),n+=1;var r=32-lt(t)+l;if(30<r){var f=l-l%5;r=(a&(1<<f)-1).toString(32),a>>=f,l-=f,dn=1<<32-lt(t)+l|n<<l|a,pn=r+e}else dn=1<<r|n<<l|a,pn=e}function ms(e){e.return!==null&&(ca(e,1),Lf(e,1,0))}function gs(e){for(;e===fr;)fr=Za[--Qa],Za[Qa]=null,dr=Za[--Qa],Za[Qa]=null;for(;e===ua;)ua=Lt[--Bt],Lt[Bt]=null,pn=Lt[--Bt],Lt[Bt]=null,dn=Lt[--Bt],Lt[Bt]=null}var pt=null,$e=null,ze=!1,fa=null,Ft=!1,xs=Error(u(519));function da(e){var t=Error(u(418,""));throw Qi(_t(t,e)),xs}function Bf(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[ut]=e,t[gt]=a,n){case"dialog":ve("cancel",t),ve("close",t);break;case"iframe":case"object":case"embed":ve("load",t);break;case"video":case"audio":for(n=0;n<xl.length;n++)ve(xl[n],t);break;case"source":ve("error",t);break;case"img":case"image":case"link":ve("error",t),ve("load",t);break;case"details":ve("toggle",t);break;case"input":ve("invalid",t),Pc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Fl(t);break;case"select":ve("invalid",t);break;case"textarea":ve("invalid",t),Ic(t,a.value,a.defaultValue,a.children),Fl(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||ep(t.textContent,n)?(a.popover!=null&&(ve("beforetoggle",t),ve("toggle",t)),a.onScroll!=null&&ve("scroll",t),a.onScrollEnd!=null&&ve("scrollend",t),a.onClick!=null&&(t.onclick=Zr),t=!0):t=!1,t||da(e)}function Uf(e){for(pt=e.return;pt;)switch(pt.tag){case 5:case 13:Ft=!1;return;case 27:case 3:Ft=!0;return;default:pt=pt.return}}function Xi(e){if(e!==pt)return!1;if(!ze)return Uf(e),ze=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Ou(e.type,e.memoizedProps)),n=!n),n&&$e&&da(e),Uf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){$e=Qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}$e=null}}else t===27?(t=$e,Qn(e.type)?(e=Bu,Bu=null,$e=e):$e=t):$e=pt?Qt(e.stateNode.nextSibling):null;return!0}function Zi(){$e=pt=null,ze=!1}function Hf(){var e=fa;return e!==null&&(yt===null?yt=e:yt.push.apply(yt,e),fa=null),e}function Qi(e){fa===null?fa=[e]:fa.push(e)}var bs=$(null),pa=null,hn=null;function Dn(e,t,n){W(bs,t._currentValue),t._currentValue=n}function mn(e){e._currentValue=bs.current,K(bs)}function vs(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function ys(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){var f=l.child;r=r.firstContext;e:for(;r!==null;){var p=r;r=l;for(var v=0;v<t.length;v++)if(p.context===t[v]){r.lanes|=n,p=r.alternate,p!==null&&(p.lanes|=n),vs(r.return,n,e),a||(f=null);break e}r=p.next}}else if(l.tag===18){if(f=l.return,f===null)throw Error(u(341));f.lanes|=n,r=f.alternate,r!==null&&(r.lanes|=n),vs(f,n,e),f=null}else f=l.child;if(f!==null)f.return=l;else for(f=l;f!==null;){if(f===e){f=null;break}if(l=f.sibling,l!==null){l.return=f.return,f=l;break}f=f.return}l=f}}function Ki(e,t,n,a){e=null;for(var l=t,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var f=l.alternate;if(f===null)throw Error(u(387));if(f=f.memoizedProps,f!==null){var p=l.type;Ct(l.pendingProps.value,f.value)||(e!==null?e.push(p):e=[p])}}else if(l===Ve.current){if(f=l.alternate,f===null)throw Error(u(387));f.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(jl):e=[jl])}l=l.return}e!==null&&ys(t,e,n,a),t.flags|=262144}function pr(e){for(e=e.firstContext;e!==null;){if(!Ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ha(e){pa=e,hn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ct(e){return Yf(pa,e)}function hr(e,t){return pa===null&&ha(e),Yf(e,t)}function Yf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},hn===null){if(e===null)throw Error(u(308));hn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else hn=hn.next=t;return n}var hg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},mg=i.unstable_scheduleCallback,gg=i.unstable_NormalPriority,Pe={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ws(){return{controller:new hg,data:new Map,refCount:0}}function Ji(e){e.refCount--,e.refCount===0&&mg(gg,function(){e.controller.abort()})}var Wi=null,Ss=0,Ka=0,Ja=null;function xg(e,t){if(Wi===null){var n=Wi=[];Ss=0,Ka=Cu(),Ja={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Ss++,t.then($f,$f),t}function $f(){if(--Ss===0&&Wi!==null){Ja!==null&&(Ja.status="fulfilled");var e=Wi;Wi=null,Ka=0,Ja=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function bg(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var qf=L.S;L.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&xg(e,t),qf!==null&&qf(e,t)};var ma=$(null);function js(){var e=ma.current;return e!==null?e:Le.pooledCache}function mr(e,t){t===null?W(ma,ma.current):W(ma,t.pool)}function Gf(){var e=js();return e===null?null:{parent:Pe._currentValue,pool:e}}var Pi=Error(u(460)),Vf=Error(u(474)),gr=Error(u(542)),Cs={then:function(){}};function Xf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function xr(){}function Zf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(xr,xr),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Kf(e),e;default:if(typeof t.status=="string")t.then(xr,xr);else{if(e=Le,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Kf(e),e}throw Fi=t,Pi}}var Fi=null;function Qf(){if(Fi===null)throw Error(u(459));var e=Fi;return Fi=null,e}function Kf(e){if(e===Pi||e===gr)throw Error(u(483))}var On=!1;function Es(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _n(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Nn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ae&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=ur(e),_f(e,null,n),t}return sr(e,a,t,n),ur(e)}function Ii(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,An(e,n)}}function ks(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?l=r=f:r=r.next=f,n=n.next}while(n!==null);r===null?l=r=t:r=r.next=t}else l=r=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ts=!1;function el(){if(Ts){var e=Ja;if(e!==null)throw e}}function tl(e,t,n,a){Ts=!1;var l=e.updateQueue;On=!1;var r=l.firstBaseUpdate,f=l.lastBaseUpdate,p=l.shared.pending;if(p!==null){l.shared.pending=null;var v=p,R=v.next;v.next=null,f===null?r=R:f.next=R,f=v;var B=e.alternate;B!==null&&(B=B.updateQueue,p=B.lastBaseUpdate,p!==f&&(p===null?B.firstBaseUpdate=R:p.next=R,B.lastBaseUpdate=v))}if(r!==null){var Y=l.baseState;f=0,B=R=v=null,p=r;do{var O=p.lane&-536870913,_=O!==p.lane;if(_?(Se&O)===O:(a&O)===O){O!==0&&O===Ka&&(Ts=!0),B!==null&&(B=B.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var se=e,re=p;O=t;var Oe=n;switch(re.tag){case 1:if(se=re.payload,typeof se=="function"){Y=se.call(Oe,Y,O);break e}Y=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=re.payload,O=typeof se=="function"?se.call(Oe,Y,O):se,O==null)break e;Y=E({},Y,O);break e;case 2:On=!0}}O=p.callback,O!==null&&(e.flags|=64,_&&(e.flags|=8192),_=l.callbacks,_===null?l.callbacks=[O]:_.push(O))}else _={lane:O,tag:p.tag,payload:p.payload,callback:p.callback,next:null},B===null?(R=B=_,v=Y):B=B.next=_,f|=O;if(p=p.next,p===null){if(p=l.shared.pending,p===null)break;_=p,p=_.next,_.next=null,l.lastBaseUpdate=_,l.shared.pending=null}}while(!0);B===null&&(v=Y),l.baseState=v,l.firstBaseUpdate=R,l.lastBaseUpdate=B,r===null&&(l.shared.lanes=0),Gn|=f,e.lanes=f,e.memoizedState=Y}}function Jf(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Wf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Jf(n[e],t)}var Wa=$(null),br=$(0);function Pf(e,t){e=Sn,W(br,e),W(Wa,t),Sn=e|t.baseLanes}function As(){W(br,Sn),W(Wa,Wa.current)}function Ms(){Sn=br.current,K(Wa),K(br)}var Ln=0,pe=null,Re=null,Qe=null,vr=!1,Pa=!1,ga=!1,yr=0,nl=0,Fa=null,vg=0;function Xe(){throw Error(u(321))}function Rs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ct(e[n],t[n]))return!1;return!0}function Ds(e,t,n,a,l,r){return Ln=r,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,L.H=e===null||e.memoizedState===null?_d:Nd,ga=!1,r=n(a,l),ga=!1,Pa&&(r=If(t,n,a,l)),Ff(e),r}function Ff(e){L.H=zr;var t=Re!==null&&Re.next!==null;if(Ln=0,Qe=Re=pe=null,vr=!1,nl=0,Fa=null,t)throw Error(u(300));e===null||et||(e=e.dependencies,e!==null&&pr(e)&&(et=!0))}function If(e,t,n,a){pe=e;var l=0;do{if(Pa&&(Fa=null),nl=0,Pa=!1,25<=l)throw Error(u(301));if(l+=1,Qe=Re=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}L.H=zg,r=t(n,a)}while(Pa);return r}function yg(){var e=L.H,t=e.useState()[0];return t=typeof t.then=="function"?al(t):t,e=e.useState()[0],(Re!==null?Re.memoizedState:null)!==e&&(pe.flags|=1024),t}function Os(){var e=yr!==0;return yr=0,e}function _s(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ns(e){if(vr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vr=!1}Ln=0,Qe=Re=pe=null,Pa=!1,nl=yr=0,Fa=null}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?pe.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Ke(){if(Re===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Qe===null?pe.memoizedState:Qe.next;if(t!==null)Qe=t,Re=e;else{if(e===null)throw pe.alternate===null?Error(u(467)):Error(u(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Qe===null?pe.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function Ls(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function al(e){var t=nl;return nl+=1,Fa===null&&(Fa=[]),e=Zf(Fa,e,t),t=pe,(Qe===null?t.memoizedState:Qe.next)===null&&(t=t.alternate,L.H=t===null||t.memoizedState===null?_d:Nd),e}function wr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return al(e);if(e.$$typeof===G)return ct(e)}throw Error(u(438,String(e)))}function Bs(e){var t=null,n=pe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=pe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ls(),pe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=I;return t.index++,n}function gn(e,t){return typeof t=="function"?t(e):t}function Sr(e){var t=Ke();return Us(t,Re,e)}function Us(e,t,n){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var l=e.baseQueue,r=a.pending;if(r!==null){if(l!==null){var f=l.next;l.next=r.next,r.next=f}t.baseQueue=l=r,a.pending=null}if(r=e.baseState,l===null)e.memoizedState=r;else{t=l.next;var p=f=null,v=null,R=t,B=!1;do{var Y=R.lane&-536870913;if(Y!==R.lane?(Se&Y)===Y:(Ln&Y)===Y){var O=R.revertLane;if(O===0)v!==null&&(v=v.next={lane:0,revertLane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),Y===Ka&&(B=!0);else if((Ln&O)===O){R=R.next,O===Ka&&(B=!0);continue}else Y={lane:0,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},v===null?(p=v=Y,f=r):v=v.next=Y,pe.lanes|=O,Gn|=O;Y=R.action,ga&&n(r,Y),r=R.hasEagerState?R.eagerState:n(r,Y)}else O={lane:Y,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},v===null?(p=v=O,f=r):v=v.next=O,pe.lanes|=Y,Gn|=Y;R=R.next}while(R!==null&&R!==t);if(v===null?f=r:v.next=p,!Ct(r,e.memoizedState)&&(et=!0,B&&(n=Ja,n!==null)))throw n;e.memoizedState=r,e.baseState=f,e.baseQueue=v,a.lastRenderedState=r}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Hs(e){var t=Ke(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,r=t.memoizedState;if(l!==null){n.pending=null;var f=l=l.next;do r=e(r,f.action),f=f.next;while(f!==l);Ct(r,t.memoizedState)||(et=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,a]}function ed(e,t,n){var a=pe,l=Ke(),r=ze;if(r){if(n===void 0)throw Error(u(407));n=n()}else n=t();var f=!Ct((Re||l).memoizedState,n);f&&(l.memoizedState=n,et=!0),l=l.queue;var p=ad.bind(null,a,l,e);if(il(2048,8,p,[e]),l.getSnapshot!==t||f||Qe!==null&&Qe.memoizedState.tag&1){if(a.flags|=2048,Ia(9,jr(),nd.bind(null,a,l,n,t),null),Le===null)throw Error(u(349));r||(Ln&124)!==0||td(a,t,n)}return n}function td(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t=Ls(),pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function nd(e,t,n,a){t.value=n,t.getSnapshot=a,id(t)&&ld(e)}function ad(e,t,n){return n(function(){id(t)&&ld(e)})}function id(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ct(e,n)}catch{return!0}}function ld(e){var t=Va(e,2);t!==null&&Mt(t,e,2)}function Ys(e){var t=bt();if(typeof e=="function"){var n=e;if(e=n(),ga){Gt(!0);try{n()}finally{Gt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:e},t}function rd(e,t,n,a){return e.baseState=n,Us(e,Re,typeof a=="function"?a:gn)}function wg(e,t,n,a,l){if(Er(e))throw Error(u(485));if(e=t.action,e!==null){var r={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){r.listeners.push(f)}};L.T!==null?n(!0):r.isTransition=!1,a(r),n=t.pending,n===null?(r.next=t.pending=r,od(t,r)):(r.next=n.next,t.pending=n.next=r)}}function od(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var r=L.T,f={};L.T=f;try{var p=n(l,a),v=L.S;v!==null&&v(f,p),sd(e,t,p)}catch(R){$s(e,t,R)}finally{L.T=r}}else try{r=n(l,a),sd(e,t,r)}catch(R){$s(e,t,R)}}function sd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){ud(e,t,a)},function(a){return $s(e,t,a)}):ud(e,t,n)}function ud(e,t,n){t.status="fulfilled",t.value=n,cd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,od(e,n)))}function $s(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,cd(t),t=t.next;while(t!==a)}e.action=null}function cd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function fd(e,t){return t}function dd(e,t){if(ze){var n=Le.formState;if(n!==null){e:{var a=pe;if(ze){if($e){t:{for(var l=$e,r=Ft;l.nodeType!==8;){if(!r){l=null;break t}if(l=Qt(l.nextSibling),l===null){l=null;break t}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){$e=Qt(l.nextSibling),a=l.data==="F!";break e}}da(a)}a=!1}a&&(t=n[0])}}return n=bt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fd,lastRenderedState:t},n.queue=a,n=Rd.bind(null,pe,a),a.dispatch=n,a=Ys(!1),r=Zs.bind(null,pe,!1,a.queue),a=bt(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=wg.bind(null,pe,l,r,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function pd(e){var t=Ke();return hd(t,Re,e)}function hd(e,t,n){if(t=Us(e,t,fd)[0],e=Sr(gn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=al(t)}catch(f){throw f===Pi?gr:f}else a=t;t=Ke();var l=t.queue,r=l.dispatch;return n!==t.memoizedState&&(pe.flags|=2048,Ia(9,jr(),Sg.bind(null,l,n),null)),[a,r,e]}function Sg(e,t){e.action=t}function md(e){var t=Ke(),n=Re;if(n!==null)return hd(t,n,e);Ke(),t=t.memoizedState,n=Ke();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Ia(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=pe.updateQueue,t===null&&(t=Ls(),pe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function jr(){return{destroy:void 0,resource:void 0}}function gd(){return Ke().memoizedState}function Cr(e,t,n,a){var l=bt();a=a===void 0?null:a,pe.flags|=e,l.memoizedState=Ia(1|t,jr(),n,a)}function il(e,t,n,a){var l=Ke();a=a===void 0?null:a;var r=l.memoizedState.inst;Re!==null&&a!==null&&Rs(a,Re.memoizedState.deps)?l.memoizedState=Ia(t,r,n,a):(pe.flags|=e,l.memoizedState=Ia(1|t,r,n,a))}function xd(e,t){Cr(8390656,8,e,t)}function bd(e,t){il(2048,8,e,t)}function vd(e,t){return il(4,2,e,t)}function yd(e,t){return il(4,4,e,t)}function wd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sd(e,t,n){n=n!=null?n.concat([e]):null,il(4,4,wd.bind(null,t,e),n)}function qs(){}function jd(e,t){var n=Ke();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Rs(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Cd(e,t){var n=Ke();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Rs(t,a[1]))return a[0];if(a=e(),ga){Gt(!0);try{e()}finally{Gt(!1)}}return n.memoizedState=[a,t],a}function Gs(e,t,n){return n===void 0||(Ln&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=k0(),pe.lanes|=e,Gn|=e,n)}function Ed(e,t,n,a){return Ct(n,t)?n:Wa.current!==null?(e=Gs(e,n,a),Ct(e,t)||(et=!0),e):(Ln&42)===0?(et=!0,e.memoizedState=n):(e=k0(),pe.lanes|=e,Gn|=e,t)}function zd(e,t,n,a,l){var r=J.p;J.p=r!==0&&8>r?r:8;var f=L.T,p={};L.T=p,Zs(e,!1,t,n);try{var v=l(),R=L.S;if(R!==null&&R(p,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var B=bg(v,a);ll(e,t,B,At(e))}else ll(e,t,a,At(e))}catch(Y){ll(e,t,{then:function(){},status:"rejected",reason:Y},At())}finally{J.p=r,L.T=f}}function jg(){}function Vs(e,t,n,a){if(e.tag!==5)throw Error(u(476));var l=kd(e).queue;zd(e,l,t,le,n===null?jg:function(){return Td(e),n(a)})}function kd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Td(e){var t=kd(e).next.queue;ll(e,t,{},At())}function Xs(){return ct(jl)}function Ad(){return Ke().memoizedState}function Md(){return Ke().memoizedState}function Cg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=At();e=_n(n);var a=Nn(t,e,n);a!==null&&(Mt(a,t,n),Ii(a,t,n)),t={cache:ws()},e.payload=t;return}t=t.return}}function Eg(e,t,n){var a=At();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Er(e)?Dd(t,n):(n=fs(e,t,n,a),n!==null&&(Mt(n,e,a),Od(n,t,a)))}function Rd(e,t,n){var a=At();ll(e,t,n,a)}function ll(e,t,n,a){var l={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Er(e))Dd(t,l);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var f=t.lastRenderedState,p=r(f,n);if(l.hasEagerState=!0,l.eagerState=p,Ct(p,f))return sr(e,t,l,0),Le===null&&or(),!1}catch{}finally{}if(n=fs(e,t,l,a),n!==null)return Mt(n,e,a),Od(n,t,a),!0}return!1}function Zs(e,t,n,a){if(a={lane:2,revertLane:Cu(),action:a,hasEagerState:!1,eagerState:null,next:null},Er(e)){if(t)throw Error(u(479))}else t=fs(e,n,a,2),t!==null&&Mt(t,e,2)}function Er(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function Dd(e,t){Pa=vr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Od(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,An(e,n)}}var zr={readContext:ct,use:wr,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useLayoutEffect:Xe,useInsertionEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useSyncExternalStore:Xe,useId:Xe,useHostTransitionStatus:Xe,useFormState:Xe,useActionState:Xe,useOptimistic:Xe,useMemoCache:Xe,useCacheRefresh:Xe},_d={readContext:ct,use:wr,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:xd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Cr(4194308,4,wd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Cr(4194308,4,e,t)},useInsertionEffect:function(e,t){Cr(4,2,e,t)},useMemo:function(e,t){var n=bt();t=t===void 0?null:t;var a=e();if(ga){Gt(!0);try{e()}finally{Gt(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=bt();if(n!==void 0){var l=n(t);if(ga){Gt(!0);try{n(t)}finally{Gt(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=Eg.bind(null,pe,e),[a.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:function(e){e=Ys(e);var t=e.queue,n=Rd.bind(null,pe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:qs,useDeferredValue:function(e,t){var n=bt();return Gs(n,e,t)},useTransition:function(){var e=Ys(!1);return e=zd.bind(null,pe,e.queue,!0,!1),bt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=pe,l=bt();if(ze){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Le===null)throw Error(u(349));(Se&124)!==0||td(a,t,n)}l.memoizedState=n;var r={value:n,getSnapshot:t};return l.queue=r,xd(ad.bind(null,a,r,e),[e]),a.flags|=2048,Ia(9,jr(),nd.bind(null,a,r,n,t),null),n},useId:function(){var e=bt(),t=Le.identifierPrefix;if(ze){var n=pn,a=dn;n=(a&~(1<<32-lt(a)-1)).toString(32)+n,t="«"+t+"R"+n,n=yr++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=vg++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Xs,useFormState:dd,useActionState:dd,useOptimistic:function(e){var t=bt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Zs.bind(null,pe,!0,n),n.dispatch=t,[e,t]},useMemoCache:Bs,useCacheRefresh:function(){return bt().memoizedState=Cg.bind(null,pe)}},Nd={readContext:ct,use:wr,useCallback:jd,useContext:ct,useEffect:bd,useImperativeHandle:Sd,useInsertionEffect:vd,useLayoutEffect:yd,useMemo:Cd,useReducer:Sr,useRef:gd,useState:function(){return Sr(gn)},useDebugValue:qs,useDeferredValue:function(e,t){var n=Ke();return Ed(n,Re.memoizedState,e,t)},useTransition:function(){var e=Sr(gn)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:al(e),t]},useSyncExternalStore:ed,useId:Ad,useHostTransitionStatus:Xs,useFormState:pd,useActionState:pd,useOptimistic:function(e,t){var n=Ke();return rd(n,Re,e,t)},useMemoCache:Bs,useCacheRefresh:Md},zg={readContext:ct,use:wr,useCallback:jd,useContext:ct,useEffect:bd,useImperativeHandle:Sd,useInsertionEffect:vd,useLayoutEffect:yd,useMemo:Cd,useReducer:Hs,useRef:gd,useState:function(){return Hs(gn)},useDebugValue:qs,useDeferredValue:function(e,t){var n=Ke();return Re===null?Gs(n,e,t):Ed(n,Re.memoizedState,e,t)},useTransition:function(){var e=Hs(gn)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:al(e),t]},useSyncExternalStore:ed,useId:Ad,useHostTransitionStatus:Xs,useFormState:md,useActionState:md,useOptimistic:function(e,t){var n=Ke();return Re!==null?rd(n,Re,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Bs,useCacheRefresh:Md},ei=null,rl=0;function kr(e){var t=rl;return rl+=1,ei===null&&(ei=[]),Zf(ei,e,t)}function ol(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Tr(e,t){throw t.$$typeof===k?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ld(e){var t=e._init;return t(e._payload)}function Bd(e){function t(z,S){if(e){var T=z.deletions;T===null?(z.deletions=[S],z.flags|=16):T.push(S)}}function n(z,S){if(!e)return null;for(;S!==null;)t(z,S),S=S.sibling;return null}function a(z){for(var S=new Map;z!==null;)z.key!==null?S.set(z.key,z):S.set(z.index,z),z=z.sibling;return S}function l(z,S){return z=fn(z,S),z.index=0,z.sibling=null,z}function r(z,S,T){return z.index=T,e?(T=z.alternate,T!==null?(T=T.index,T<S?(z.flags|=67108866,S):T):(z.flags|=67108866,S)):(z.flags|=1048576,S)}function f(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function p(z,S,T,H){return S===null||S.tag!==6?(S=ps(T,z.mode,H),S.return=z,S):(S=l(S,T),S.return=z,S)}function v(z,S,T,H){var te=T.type;return te===D?B(z,S,T.props.children,H,T.key):S!==null&&(S.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===ge&&Ld(te)===S.type)?(S=l(S,T.props),ol(S,T),S.return=z,S):(S=cr(T.type,T.key,T.props,null,z.mode,H),ol(S,T),S.return=z,S)}function R(z,S,T,H){return S===null||S.tag!==4||S.stateNode.containerInfo!==T.containerInfo||S.stateNode.implementation!==T.implementation?(S=hs(T,z.mode,H),S.return=z,S):(S=l(S,T.children||[]),S.return=z,S)}function B(z,S,T,H,te){return S===null||S.tag!==7?(S=sa(T,z.mode,H,te),S.return=z,S):(S=l(S,T),S.return=z,S)}function Y(z,S,T){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=ps(""+S,z.mode,T),S.return=z,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case A:return T=cr(S.type,S.key,S.props,null,z.mode,T),ol(T,S),T.return=z,T;case N:return S=hs(S,z.mode,T),S.return=z,S;case ge:var H=S._init;return S=H(S._payload),Y(z,S,T)}if(Ge(S)||Ce(S))return S=sa(S,z.mode,T,null),S.return=z,S;if(typeof S.then=="function")return Y(z,kr(S),T);if(S.$$typeof===G)return Y(z,hr(z,S),T);Tr(z,S)}return null}function O(z,S,T,H){var te=S!==null?S.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return te!==null?null:p(z,S,""+T,H);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case A:return T.key===te?v(z,S,T,H):null;case N:return T.key===te?R(z,S,T,H):null;case ge:return te=T._init,T=te(T._payload),O(z,S,T,H)}if(Ge(T)||Ce(T))return te!==null?null:B(z,S,T,H,null);if(typeof T.then=="function")return O(z,S,kr(T),H);if(T.$$typeof===G)return O(z,S,hr(z,T),H);Tr(z,T)}return null}function _(z,S,T,H,te){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return z=z.get(T)||null,p(S,z,""+H,te);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case A:return z=z.get(H.key===null?T:H.key)||null,v(S,z,H,te);case N:return z=z.get(H.key===null?T:H.key)||null,R(S,z,H,te);case ge:var me=H._init;return H=me(H._payload),_(z,S,T,H,te)}if(Ge(H)||Ce(H))return z=z.get(T)||null,B(S,z,H,te,null);if(typeof H.then=="function")return _(z,S,T,kr(H),te);if(H.$$typeof===G)return _(z,S,T,hr(S,H),te);Tr(S,H)}return null}function se(z,S,T,H){for(var te=null,me=null,ae=S,oe=S=0,nt=null;ae!==null&&oe<T.length;oe++){ae.index>oe?(nt=ae,ae=null):nt=ae.sibling;var Ee=O(z,ae,T[oe],H);if(Ee===null){ae===null&&(ae=nt);break}e&&ae&&Ee.alternate===null&&t(z,ae),S=r(Ee,S,oe),me===null?te=Ee:me.sibling=Ee,me=Ee,ae=nt}if(oe===T.length)return n(z,ae),ze&&ca(z,oe),te;if(ae===null){for(;oe<T.length;oe++)ae=Y(z,T[oe],H),ae!==null&&(S=r(ae,S,oe),me===null?te=ae:me.sibling=ae,me=ae);return ze&&ca(z,oe),te}for(ae=a(ae);oe<T.length;oe++)nt=_(ae,z,oe,T[oe],H),nt!==null&&(e&&nt.alternate!==null&&ae.delete(nt.key===null?oe:nt.key),S=r(nt,S,oe),me===null?te=nt:me.sibling=nt,me=nt);return e&&ae.forEach(function(Fn){return t(z,Fn)}),ze&&ca(z,oe),te}function re(z,S,T,H){if(T==null)throw Error(u(151));for(var te=null,me=null,ae=S,oe=S=0,nt=null,Ee=T.next();ae!==null&&!Ee.done;oe++,Ee=T.next()){ae.index>oe?(nt=ae,ae=null):nt=ae.sibling;var Fn=O(z,ae,Ee.value,H);if(Fn===null){ae===null&&(ae=nt);break}e&&ae&&Fn.alternate===null&&t(z,ae),S=r(Fn,S,oe),me===null?te=Fn:me.sibling=Fn,me=Fn,ae=nt}if(Ee.done)return n(z,ae),ze&&ca(z,oe),te;if(ae===null){for(;!Ee.done;oe++,Ee=T.next())Ee=Y(z,Ee.value,H),Ee!==null&&(S=r(Ee,S,oe),me===null?te=Ee:me.sibling=Ee,me=Ee);return ze&&ca(z,oe),te}for(ae=a(ae);!Ee.done;oe++,Ee=T.next())Ee=_(ae,z,oe,Ee.value,H),Ee!==null&&(e&&Ee.alternate!==null&&ae.delete(Ee.key===null?oe:Ee.key),S=r(Ee,S,oe),me===null?te=Ee:me.sibling=Ee,me=Ee);return e&&ae.forEach(function(k1){return t(z,k1)}),ze&&ca(z,oe),te}function Oe(z,S,T,H){if(typeof T=="object"&&T!==null&&T.type===D&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case A:e:{for(var te=T.key;S!==null;){if(S.key===te){if(te=T.type,te===D){if(S.tag===7){n(z,S.sibling),H=l(S,T.props.children),H.return=z,z=H;break e}}else if(S.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===ge&&Ld(te)===S.type){n(z,S.sibling),H=l(S,T.props),ol(H,T),H.return=z,z=H;break e}n(z,S);break}else t(z,S);S=S.sibling}T.type===D?(H=sa(T.props.children,z.mode,H,T.key),H.return=z,z=H):(H=cr(T.type,T.key,T.props,null,z.mode,H),ol(H,T),H.return=z,z=H)}return f(z);case N:e:{for(te=T.key;S!==null;){if(S.key===te)if(S.tag===4&&S.stateNode.containerInfo===T.containerInfo&&S.stateNode.implementation===T.implementation){n(z,S.sibling),H=l(S,T.children||[]),H.return=z,z=H;break e}else{n(z,S);break}else t(z,S);S=S.sibling}H=hs(T,z.mode,H),H.return=z,z=H}return f(z);case ge:return te=T._init,T=te(T._payload),Oe(z,S,T,H)}if(Ge(T))return se(z,S,T,H);if(Ce(T)){if(te=Ce(T),typeof te!="function")throw Error(u(150));return T=te.call(T),re(z,S,T,H)}if(typeof T.then=="function")return Oe(z,S,kr(T),H);if(T.$$typeof===G)return Oe(z,S,hr(z,T),H);Tr(z,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,S!==null&&S.tag===6?(n(z,S.sibling),H=l(S,T),H.return=z,z=H):(n(z,S),H=ps(T,z.mode,H),H.return=z,z=H),f(z)):n(z,S)}return function(z,S,T,H){try{rl=0;var te=Oe(z,S,T,H);return ei=null,te}catch(ae){if(ae===Pi||ae===gr)throw ae;var me=Et(29,ae,null,z.mode);return me.lanes=H,me.return=z,me}finally{}}}var ti=Bd(!0),Ud=Bd(!1),Ut=$(null),It=null;function Bn(e){var t=e.alternate;W(Fe,Fe.current&1),W(Ut,e),It===null&&(t===null||Wa.current!==null||t.memoizedState!==null)&&(It=e)}function Hd(e){if(e.tag===22){if(W(Fe,Fe.current),W(Ut,e),It===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(It=e)}}else Un()}function Un(){W(Fe,Fe.current),W(Ut,Ut.current)}function xn(e){K(Ut),It===e&&(It=null),K(Fe)}var Fe=$(0);function Ar(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Lu(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Qs(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:E({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ks={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=At(),l=_n(a);l.payload=t,n!=null&&(l.callback=n),t=Nn(e,l,a),t!==null&&(Mt(t,e,a),Ii(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=At(),l=_n(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Nn(e,l,a),t!==null&&(Mt(t,e,a),Ii(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=At(),a=_n(n);a.tag=2,t!=null&&(a.callback=t),t=Nn(e,a,n),t!==null&&(Mt(t,e,n),Ii(t,e,n))}};function Yd(e,t,n,a,l,r,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,f):t.prototype&&t.prototype.isPureReactComponent?!Gi(n,a)||!Gi(l,r):!0}function $d(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Ks.enqueueReplaceState(t,t.state,null)}function xa(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=E({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}var Mr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function qd(e){Mr(e)}function Gd(e){console.error(e)}function Vd(e){Mr(e)}function Rr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Xd(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Js(e,t,n){return n=_n(n),n.tag=3,n.payload={element:null},n.callback=function(){Rr(e,t)},n}function Zd(e){return e=_n(e),e.tag=3,e}function Qd(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var r=a.value;e.payload=function(){return l(r)},e.callback=function(){Xd(t,n,a)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Xd(t,n,a),typeof l!="function"&&(Vn===null?Vn=new Set([this]):Vn.add(this));var p=a.stack;this.componentDidCatch(a.value,{componentStack:p!==null?p:""})})}function kg(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Ki(t,n,l,!0),n=Ut.current,n!==null){switch(n.tag){case 13:return It===null?vu():n.alternate===null&&qe===0&&(qe=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===Cs?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),wu(e,a,l)),!1;case 22:return n.flags|=65536,a===Cs?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),wu(e,a,l)),!1}throw Error(u(435,n.tag))}return wu(e,a,l),vu(),!1}if(ze)return t=Ut.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==xs&&(e=Error(u(422),{cause:a}),Qi(_t(e,n)))):(a!==xs&&(t=Error(u(423),{cause:a}),Qi(_t(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=_t(a,n),l=Js(e.stateNode,a,l),ks(e,l),qe!==4&&(qe=2)),!1;var r=Error(u(520),{cause:a});if(r=_t(r,n),hl===null?hl=[r]:hl.push(r),qe!==4&&(qe=2),t===null)return!0;a=_t(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Js(n.stateNode,a,e),ks(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Vn===null||!Vn.has(r))))return n.flags|=65536,l&=-l,n.lanes|=l,l=Zd(l),Qd(l,e,n,a),ks(n,l),!1}n=n.return}while(n!==null);return!1}var Kd=Error(u(461)),et=!1;function rt(e,t,n,a){t.child=e===null?Ud(t,null,n,a):ti(t,e.child,n,a)}function Jd(e,t,n,a,l){n=n.render;var r=t.ref;if("ref"in a){var f={};for(var p in a)p!=="ref"&&(f[p]=a[p])}else f=a;return ha(t),a=Ds(e,t,n,f,r,l),p=Os(),e!==null&&!et?(_s(e,t,l),bn(e,t,l)):(ze&&p&&ms(t),t.flags|=1,rt(e,t,a,l),t.child)}function Wd(e,t,n,a,l){if(e===null){var r=n.type;return typeof r=="function"&&!ds(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,Pd(e,t,r,a,l)):(e=cr(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!au(e,l)){var f=r.memoizedProps;if(n=n.compare,n=n!==null?n:Gi,n(f,a)&&e.ref===t.ref)return bn(e,t,l)}return t.flags|=1,e=fn(r,a),e.ref=t.ref,e.return=t,t.child=e}function Pd(e,t,n,a,l){if(e!==null){var r=e.memoizedProps;if(Gi(r,a)&&e.ref===t.ref)if(et=!1,t.pendingProps=a=r,au(e,l))(e.flags&131072)!==0&&(et=!0);else return t.lanes=e.lanes,bn(e,t,l)}return Ws(e,t,n,a,l)}function Fd(e,t,n){var a=t.pendingProps,l=a.children,r=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=r!==null?r.baseLanes|n:n,e!==null){for(l=t.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;t.childLanes=r&~a}else t.childLanes=0,t.child=null;return Id(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&mr(t,r!==null?r.cachePool:null),r!==null?Pf(t,r):As(),Hd(t);else return t.lanes=t.childLanes=536870912,Id(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(mr(t,r.cachePool),Pf(t,r),Un(),t.memoizedState=null):(e!==null&&mr(t,null),As(),Un());return rt(e,t,l,n),t.child}function Id(e,t,n,a){var l=js();return l=l===null?null:{parent:Pe._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&mr(t,null),As(),Hd(t),e!==null&&Ki(e,t,a,!0),null}function Dr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Ws(e,t,n,a,l){return ha(t),n=Ds(e,t,n,a,void 0,l),a=Os(),e!==null&&!et?(_s(e,t,l),bn(e,t,l)):(ze&&a&&ms(t),t.flags|=1,rt(e,t,n,l),t.child)}function e0(e,t,n,a,l,r){return ha(t),t.updateQueue=null,n=If(t,a,n,l),Ff(e),a=Os(),e!==null&&!et?(_s(e,t,r),bn(e,t,r)):(ze&&a&&ms(t),t.flags|=1,rt(e,t,n,r),t.child)}function t0(e,t,n,a,l){if(ha(t),t.stateNode===null){var r=Xa,f=n.contextType;typeof f=="object"&&f!==null&&(r=ct(f)),r=new n(a,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ks,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=a,r.state=t.memoizedState,r.refs={},Es(t),f=n.contextType,r.context=typeof f=="object"&&f!==null?ct(f):Xa,r.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(Qs(t,n,f,a),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(f=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),f!==r.state&&Ks.enqueueReplaceState(r,r.state,null),tl(t,a,r,l),el(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){r=t.stateNode;var p=t.memoizedProps,v=xa(n,p);r.props=v;var R=r.context,B=n.contextType;f=Xa,typeof B=="object"&&B!==null&&(f=ct(B));var Y=n.getDerivedStateFromProps;B=typeof Y=="function"||typeof r.getSnapshotBeforeUpdate=="function",p=t.pendingProps!==p,B||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(p||R!==f)&&$d(t,r,a,f),On=!1;var O=t.memoizedState;r.state=O,tl(t,a,r,l),el(),R=t.memoizedState,p||O!==R||On?(typeof Y=="function"&&(Qs(t,n,Y,a),R=t.memoizedState),(v=On||Yd(t,n,v,a,O,R,f))?(B||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=R),r.props=a,r.state=R,r.context=f,a=v):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{r=t.stateNode,zs(e,t),f=t.memoizedProps,B=xa(n,f),r.props=B,Y=t.pendingProps,O=r.context,R=n.contextType,v=Xa,typeof R=="object"&&R!==null&&(v=ct(R)),p=n.getDerivedStateFromProps,(R=typeof p=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f!==Y||O!==v)&&$d(t,r,a,v),On=!1,O=t.memoizedState,r.state=O,tl(t,a,r,l),el();var _=t.memoizedState;f!==Y||O!==_||On||e!==null&&e.dependencies!==null&&pr(e.dependencies)?(typeof p=="function"&&(Qs(t,n,p,a),_=t.memoizedState),(B=On||Yd(t,n,B,a,O,_,v)||e!==null&&e.dependencies!==null&&pr(e.dependencies))?(R||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,_,v),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,_,v)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=_),r.props=a,r.state=_,r.context=v,a=B):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),a=!1)}return r=a,Dr(e,t),a=(t.flags&128)!==0,r||a?(r=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&a?(t.child=ti(t,e.child,null,l),t.child=ti(t,null,n,l)):rt(e,t,n,l),t.memoizedState=r.state,e=t.child):e=bn(e,t,l),e}function n0(e,t,n,a){return Zi(),t.flags|=256,rt(e,t,n,a),t.child}var Ps={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Fs(e){return{baseLanes:e,cachePool:Gf()}}function Is(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ht),e}function a0(e,t,n){var a=t.pendingProps,l=!1,r=(t.flags&128)!==0,f;if((f=r)||(f=e!==null&&e.memoizedState===null?!1:(Fe.current&2)!==0),f&&(l=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(ze){if(l?Bn(t):Un(),ze){var p=$e,v;if(v=p){e:{for(v=p,p=Ft;v.nodeType!==8;){if(!p){p=null;break e}if(v=Qt(v.nextSibling),v===null){p=null;break e}}p=v}p!==null?(t.memoizedState={dehydrated:p,treeContext:ua!==null?{id:dn,overflow:pn}:null,retryLane:536870912,hydrationErrors:null},v=Et(18,null,null,0),v.stateNode=p,v.return=t,t.child=v,pt=t,$e=null,v=!0):v=!1}v||da(t)}if(p=t.memoizedState,p!==null&&(p=p.dehydrated,p!==null))return Lu(p)?t.lanes=32:t.lanes=536870912,null;xn(t)}return p=a.children,a=a.fallback,l?(Un(),l=t.mode,p=Or({mode:"hidden",children:p},l),a=sa(a,l,n,null),p.return=t,a.return=t,p.sibling=a,t.child=p,l=t.child,l.memoizedState=Fs(n),l.childLanes=Is(e,f,n),t.memoizedState=Ps,a):(Bn(t),eu(t,p))}if(v=e.memoizedState,v!==null&&(p=v.dehydrated,p!==null)){if(r)t.flags&256?(Bn(t),t.flags&=-257,t=tu(e,t,n)):t.memoizedState!==null?(Un(),t.child=e.child,t.flags|=128,t=null):(Un(),l=a.fallback,p=t.mode,a=Or({mode:"visible",children:a.children},p),l=sa(l,p,n,null),l.flags|=2,a.return=t,l.return=t,a.sibling=l,t.child=a,ti(t,e.child,null,n),a=t.child,a.memoizedState=Fs(n),a.childLanes=Is(e,f,n),t.memoizedState=Ps,t=l);else if(Bn(t),Lu(p)){if(f=p.nextSibling&&p.nextSibling.dataset,f)var R=f.dgst;f=R,a=Error(u(419)),a.stack="",a.digest=f,Qi({value:a,source:null,stack:null}),t=tu(e,t,n)}else if(et||Ki(e,t,n,!1),f=(n&e.childLanes)!==0,et||f){if(f=Le,f!==null&&(a=n&-n,a=(a&42)!==0?1:Vt(a),a=(a&(f.suspendedLanes|n))!==0?0:a,a!==0&&a!==v.retryLane))throw v.retryLane=a,Va(e,a),Mt(f,e,a),Kd;p.data==="$?"||vu(),t=tu(e,t,n)}else p.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,$e=Qt(p.nextSibling),pt=t,ze=!0,fa=null,Ft=!1,e!==null&&(Lt[Bt++]=dn,Lt[Bt++]=pn,Lt[Bt++]=ua,dn=e.id,pn=e.overflow,ua=t),t=eu(t,a.children),t.flags|=4096);return t}return l?(Un(),l=a.fallback,p=t.mode,v=e.child,R=v.sibling,a=fn(v,{mode:"hidden",children:a.children}),a.subtreeFlags=v.subtreeFlags&65011712,R!==null?l=fn(R,l):(l=sa(l,p,n,null),l.flags|=2),l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,p=e.child.memoizedState,p===null?p=Fs(n):(v=p.cachePool,v!==null?(R=Pe._currentValue,v=v.parent!==R?{parent:R,pool:R}:v):v=Gf(),p={baseLanes:p.baseLanes|n,cachePool:v}),l.memoizedState=p,l.childLanes=Is(e,f,n),t.memoizedState=Ps,a):(Bn(t),n=e.child,e=n.sibling,n=fn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function eu(e,t){return t=Or({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Or(e,t){return e=Et(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function tu(e,t,n){return ti(t,e.child,null,n),e=eu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function i0(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),vs(e.return,t,n)}function nu(e,t,n,a,l){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=n,r.tailMode=l)}function l0(e,t,n){var a=t.pendingProps,l=a.revealOrder,r=a.tail;if(rt(e,t,a.children,n),a=Fe.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&i0(e,n,t);else if(e.tag===19)i0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(W(Fe,a),l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Ar(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),nu(t,!1,l,n,r);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Ar(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}nu(t,!0,n,null,r);break;case"together":nu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ki(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function au(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&pr(e)))}function Tg(e,t,n){switch(t.tag){case 3:we(t,t.stateNode.containerInfo),Dn(t,Pe,e.memoizedState.cache),Zi();break;case 27:case 5:Jt(t);break;case 4:we(t,t.stateNode.containerInfo);break;case 10:Dn(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Bn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?a0(e,t,n):(Bn(t),e=bn(e,t,n),e!==null?e.sibling:null);Bn(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Ki(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return l0(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),W(Fe,Fe.current),a)break;return null;case 22:case 23:return t.lanes=0,Fd(e,t,n);case 24:Dn(t,Pe,e.memoizedState.cache)}return bn(e,t,n)}function r0(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)et=!0;else{if(!au(e,n)&&(t.flags&128)===0)return et=!1,Tg(e,t,n);et=(e.flags&131072)!==0}else et=!1,ze&&(t.flags&1048576)!==0&&Lf(t,dr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,l=a._init;if(a=l(a._payload),t.type=a,typeof a=="function")ds(a)?(e=xa(a,e),t.tag=1,t=t0(null,t,a,e,n)):(t.tag=0,t=Ws(null,t,a,e,n));else{if(a!=null){if(l=a.$$typeof,l===Z){t.tag=11,t=Jd(null,t,a,e,n);break e}else if(l===Q){t.tag=14,t=Wd(null,t,a,e,n);break e}}throw t=ht(a)||a,Error(u(306,t,""))}}return t;case 0:return Ws(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=xa(a,t.pendingProps),t0(e,t,a,l,n);case 3:e:{if(we(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var r=t.memoizedState;l=r.element,zs(e,t),tl(t,a,null,n);var f=t.memoizedState;if(a=f.cache,Dn(t,Pe,a),a!==r.cache&&ys(t,[Pe],n,!0),el(),a=f.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=n0(e,t,a,n);break e}else if(a!==l){l=_t(Error(u(424)),t),Qi(l),t=n0(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for($e=Qt(e.firstChild),pt=t,ze=!0,fa=null,Ft=!0,n=Ud(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Zi(),a===l){t=bn(e,t,n);break e}rt(e,t,a,n)}t=t.child}return t;case 26:return Dr(e,t),e===null?(n=cp(t.type,null,t.pendingProps,null))?t.memoizedState=n:ze||(n=t.type,e=t.pendingProps,a=Qr(ne.current).createElement(n),a[ut]=t,a[gt]=e,st(a,n,e),Ie(a),t.stateNode=a):t.memoizedState=cp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Jt(t),e===null&&ze&&(a=t.stateNode=op(t.type,t.pendingProps,ne.current),pt=t,Ft=!0,l=$e,Qn(t.type)?(Bu=l,$e=Qt(a.firstChild)):$e=l),rt(e,t,t.pendingProps.children,n),Dr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ze&&((l=a=$e)&&(a=n1(a,t.type,t.pendingProps,Ft),a!==null?(t.stateNode=a,pt=t,$e=Qt(a.firstChild),Ft=!1,l=!0):l=!1),l||da(t)),Jt(t),l=t.type,r=t.pendingProps,f=e!==null?e.memoizedProps:null,a=r.children,Ou(l,r)?a=null:f!==null&&Ou(l,f)&&(t.flags|=32),t.memoizedState!==null&&(l=Ds(e,t,yg,null,null,n),jl._currentValue=l),Dr(e,t),rt(e,t,a,n),t.child;case 6:return e===null&&ze&&((e=n=$e)&&(n=a1(n,t.pendingProps,Ft),n!==null?(t.stateNode=n,pt=t,$e=null,e=!0):e=!1),e||da(t)),null;case 13:return a0(e,t,n);case 4:return we(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ti(t,null,a,n):rt(e,t,a,n),t.child;case 11:return Jd(e,t,t.type,t.pendingProps,n);case 7:return rt(e,t,t.pendingProps,n),t.child;case 8:return rt(e,t,t.pendingProps.children,n),t.child;case 12:return rt(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Dn(t,t.type,a.value),rt(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,ha(t),l=ct(l),a=a(l),t.flags|=1,rt(e,t,a,n),t.child;case 14:return Wd(e,t,t.type,t.pendingProps,n);case 15:return Pd(e,t,t.type,t.pendingProps,n);case 19:return l0(e,t,n);case 31:return a=t.pendingProps,n=t.mode,a={mode:a.mode,children:a.children},e===null?(n=Or(a,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=fn(e.child,a),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Fd(e,t,n);case 24:return ha(t),a=ct(Pe),e===null?(l=js(),l===null&&(l=Le,r=ws(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=n),l=r),t.memoizedState={parent:a,cache:l},Es(t),Dn(t,Pe,l)):((e.lanes&n)!==0&&(zs(e,t),tl(t,null,null,n),el()),l=e.memoizedState,r=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Dn(t,Pe,a)):(a=r.cache,Dn(t,Pe,a),a!==l.cache&&ys(t,[Pe],n,!0))),rt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function vn(e){e.flags|=4}function o0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!mp(t)){if(t=Ut.current,t!==null&&((Se&4194048)===Se?It!==null:(Se&62914560)!==Se&&(Se&536870912)===0||t!==It))throw Fi=Cs,Vf;e.flags|=8192}}function _r(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?F():536870912,e.lanes|=t,li|=t)}function sl(e,t){if(!ze)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Ag(e,t,n){var a=t.pendingProps;switch(gs(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return He(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),mn(Pe),We(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Xi(t)?vn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Hf())),He(t),null;case 26:return n=t.memoizedState,e===null?(vn(t),n!==null?(He(t),o0(t,n)):(He(t),t.flags&=-16777217)):n?n!==e.memoizedState?(vn(t),He(t),o0(t,n)):(He(t),t.flags&=-16777217):(e.memoizedProps!==a&&vn(t),He(t),t.flags&=-16777217),null;case 27:St(t),n=ne.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&vn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return He(t),null}e=ee.current,Xi(t)?Bf(t):(e=op(l,a,n),t.stateNode=e,vn(t))}return He(t),null;case 5:if(St(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&vn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return He(t),null}if(e=ee.current,Xi(t))Bf(t);else{switch(l=Qr(ne.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?l.createElement(n,{is:a.is}):l.createElement(n)}}e[ut]=t,e[gt]=a;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(st(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&vn(t)}}return He(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&vn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=ne.current,Xi(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=pt,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[ut]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||ep(e.nodeValue,n)),e||da(t)}else e=Qr(e).createTextNode(a),e[ut]=t,t.stateNode=e}return He(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Xi(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[ut]=t}else Zi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),l=!1}else l=Hf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(xn(t),t):(xn(t),null)}if(xn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var r=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==l&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),_r(t,t.updateQueue),He(t),null;case 4:return We(),e===null&&Tu(t.stateNode.containerInfo),He(t),null;case 10:return mn(t.type),He(t),null;case 19:if(K(Fe),l=t.memoizedState,l===null)return He(t),null;if(a=(t.flags&128)!==0,r=l.rendering,r===null)if(a)sl(l,!1);else{if(qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Ar(e),r!==null){for(t.flags|=128,sl(l,!1),e=r.updateQueue,t.updateQueue=e,_r(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Nf(n,e),n=n.sibling;return W(Fe,Fe.current&1|2),t.child}e=e.sibling}l.tail!==null&&jt()>Br&&(t.flags|=128,a=!0,sl(l,!1),t.lanes=4194304)}else{if(!a)if(e=Ar(r),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,_r(t,e),sl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!ze)return He(t),null}else 2*jt()-l.renderingStartTime>Br&&n!==536870912&&(t.flags|=128,a=!0,sl(l,!1),t.lanes=4194304);l.isBackwards?(r.sibling=t.child,t.child=r):(e=l.last,e!==null?e.sibling=r:t.child=r,l.last=r)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=jt(),t.sibling=null,e=Fe.current,W(Fe,a?e&1|2:e&1),t):(He(t),null);case 22:case 23:return xn(t),Ms(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),n=t.updateQueue,n!==null&&_r(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&K(ma),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),mn(Pe),He(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function Mg(e,t){switch(gs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mn(Pe),We(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return St(t),null;case 13:if(xn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Zi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(Fe),null;case 4:return We(),null;case 10:return mn(t.type),null;case 22:case 23:return xn(t),Ms(),e!==null&&K(ma),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return mn(Pe),null;case 25:return null;default:return null}}function s0(e,t){switch(gs(t),t.tag){case 3:mn(Pe),We();break;case 26:case 27:case 5:St(t);break;case 4:We();break;case 13:xn(t);break;case 19:K(Fe);break;case 10:mn(t.type);break;case 22:case 23:xn(t),Ms(),e!==null&&K(ma);break;case 24:mn(Pe)}}function ul(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var r=n.create,f=n.inst;a=r(),f.destroy=a}n=n.next}while(n!==l)}}catch(p){_e(t,t.return,p)}}function Hn(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var r=l.next;a=r;do{if((a.tag&e)===e){var f=a.inst,p=f.destroy;if(p!==void 0){f.destroy=void 0,l=t;var v=n,R=p;try{R()}catch(B){_e(l,v,B)}}}a=a.next}while(a!==r)}}catch(B){_e(t,t.return,B)}}function u0(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Wf(t,n)}catch(a){_e(e,e.return,a)}}}function c0(e,t,n){n.props=xa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){_e(e,t,a)}}function cl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){_e(e,t,l)}}function en(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){_e(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){_e(e,t,l)}else n.current=null}function f0(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){_e(e,e.return,l)}}function iu(e,t,n){try{var a=e.stateNode;Pg(a,e.type,n,t),a[gt]=t}catch(l){_e(e,e.return,l)}}function d0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qn(e.type)||e.tag===4}function lu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||d0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ru(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zr));else if(a!==4&&(a===27&&Qn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(ru(e,t,n),e=e.sibling;e!==null;)ru(e,t,n),e=e.sibling}function Nr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Qn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Nr(e,t,n),e=e.sibling;e!==null;)Nr(e,t,n),e=e.sibling}function p0(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);st(t,a,n),t[ut]=e,t[gt]=n}catch(r){_e(e,e.return,r)}}var yn=!1,Ze=!1,ou=!1,h0=typeof WeakSet=="function"?WeakSet:Set,tt=null;function Rg(e,t){if(e=e.containerInfo,Ru=Ir,e=Ef(e),ls(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var f=0,p=-1,v=-1,R=0,B=0,Y=e,O=null;t:for(;;){for(var _;Y!==n||l!==0&&Y.nodeType!==3||(p=f+l),Y!==r||a!==0&&Y.nodeType!==3||(v=f+a),Y.nodeType===3&&(f+=Y.nodeValue.length),(_=Y.firstChild)!==null;)O=Y,Y=_;for(;;){if(Y===e)break t;if(O===n&&++R===l&&(p=f),O===r&&++B===a&&(v=f),(_=Y.nextSibling)!==null)break;Y=O,O=Y.parentNode}Y=_}n=p===-1||v===-1?null:{start:p,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(Du={focusedElem:e,selectionRange:n},Ir=!1,tt=t;tt!==null;)if(t=tt,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,tt=e;else for(;tt!==null;){switch(t=tt,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,l=r.memoizedProps,r=r.memoizedState,a=n.stateNode;try{var se=xa(n.type,l,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(se,r),a.__reactInternalSnapshotBeforeUpdate=e}catch(re){_e(n,n.return,re)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Nu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Nu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,tt=e;break}tt=t.return}}function m0(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Yn(e,n),a&4&&ul(5,n);break;case 1:if(Yn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(f){_e(n,n.return,f)}else{var l=xa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){_e(n,n.return,f)}}a&64&&u0(n),a&512&&cl(n,n.return);break;case 3:if(Yn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Wf(e,t)}catch(f){_e(n,n.return,f)}}break;case 27:t===null&&a&4&&p0(n);case 26:case 5:Yn(e,n),t===null&&a&4&&f0(n),a&512&&cl(n,n.return);break;case 12:Yn(e,n);break;case 13:Yn(e,n),a&4&&b0(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Yg.bind(null,n),i1(e,n))));break;case 22:if(a=n.memoizedState!==null||yn,!a){t=t!==null&&t.memoizedState!==null||Ze,l=yn;var r=Ze;yn=a,(Ze=t)&&!r?$n(e,n,(n.subtreeFlags&8772)!==0):Yn(e,n),yn=l,Ze=r}break;case 30:break;default:Yn(e,n)}}function g0(e){var t=e.alternate;t!==null&&(e.alternate=null,g0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Yo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ue=null,vt=!1;function wn(e,t,n){for(n=n.child;n!==null;)x0(e,t,n),n=n.sibling}function x0(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(Wt,n)}catch{}switch(n.tag){case 26:Ze||en(n,t),wn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ze||en(n,t);var a=Ue,l=vt;Qn(n.type)&&(Ue=n.stateNode,vt=!1),wn(e,t,n),vl(n.stateNode),Ue=a,vt=l;break;case 5:Ze||en(n,t);case 6:if(a=Ue,l=vt,Ue=null,wn(e,t,n),Ue=a,vt=l,Ue!==null)if(vt)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(n.stateNode)}catch(r){_e(n,t,r)}else try{Ue.removeChild(n.stateNode)}catch(r){_e(n,t,r)}break;case 18:Ue!==null&&(vt?(e=Ue,lp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),kl(e)):lp(Ue,n.stateNode));break;case 4:a=Ue,l=vt,Ue=n.stateNode.containerInfo,vt=!0,wn(e,t,n),Ue=a,vt=l;break;case 0:case 11:case 14:case 15:Ze||Hn(2,n,t),Ze||Hn(4,n,t),wn(e,t,n);break;case 1:Ze||(en(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&c0(n,t,a)),wn(e,t,n);break;case 21:wn(e,t,n);break;case 22:Ze=(a=Ze)||n.memoizedState!==null,wn(e,t,n),Ze=a;break;default:wn(e,t,n)}}function b0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{kl(e)}catch(n){_e(t,t.return,n)}}function Dg(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new h0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new h0),t;default:throw Error(u(435,e.tag))}}function su(e,t){var n=Dg(e);t.forEach(function(a){var l=$g.bind(null,e,a);n.has(a)||(n.add(a),a.then(l,l))})}function zt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],r=e,f=t,p=f;e:for(;p!==null;){switch(p.tag){case 27:if(Qn(p.type)){Ue=p.stateNode,vt=!1;break e}break;case 5:Ue=p.stateNode,vt=!1;break e;case 3:case 4:Ue=p.stateNode.containerInfo,vt=!0;break e}p=p.return}if(Ue===null)throw Error(u(160));x0(r,f,l),Ue=null,vt=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)v0(t,e),t=t.sibling}var Zt=null;function v0(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:zt(t,e),kt(e),a&4&&(Hn(3,e,e.return),ul(3,e),Hn(5,e,e.return));break;case 1:zt(t,e),kt(e),a&512&&(Ze||n===null||en(n,n.return)),a&64&&yn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=Zt;if(zt(t,e),kt(e),a&512&&(Ze||n===null||en(n,n.return)),a&4){var r=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":r=l.getElementsByTagName("title")[0],(!r||r[_i]||r[ut]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(a),l.head.insertBefore(r,l.querySelector("head > title"))),st(r,a,n),r[ut]=e,Ie(r),a=r;break e;case"link":var f=pp("link","href",l).get(a+(n.href||""));if(f){for(var p=0;p<f.length;p++)if(r=f[p],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(p,1);break t}}r=l.createElement(a),st(r,a,n),l.head.appendChild(r);break;case"meta":if(f=pp("meta","content",l).get(a+(n.content||""))){for(p=0;p<f.length;p++)if(r=f[p],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(p,1);break t}}r=l.createElement(a),st(r,a,n),l.head.appendChild(r);break;default:throw Error(u(468,a))}r[ut]=e,Ie(r),a=r}e.stateNode=a}else hp(l,e.type,e.stateNode);else e.stateNode=dp(l,a,e.memoizedProps);else r!==a?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,a===null?hp(l,e.type,e.stateNode):dp(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&iu(e,e.memoizedProps,n.memoizedProps)}break;case 27:zt(t,e),kt(e),a&512&&(Ze||n===null||en(n,n.return)),n!==null&&a&4&&iu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(zt(t,e),kt(e),a&512&&(Ze||n===null||en(n,n.return)),e.flags&32){l=e.stateNode;try{Ba(l,"")}catch(_){_e(e,e.return,_)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,iu(e,l,n!==null?n.memoizedProps:l)),a&1024&&(ou=!0);break;case 6:if(zt(t,e),kt(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(_){_e(e,e.return,_)}}break;case 3:if(Wr=null,l=Zt,Zt=Kr(t.containerInfo),zt(t,e),Zt=l,kt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{kl(t.containerInfo)}catch(_){_e(e,e.return,_)}ou&&(ou=!1,y0(e));break;case 4:a=Zt,Zt=Kr(e.stateNode.containerInfo),zt(t,e),kt(e),Zt=a;break;case 12:zt(t,e),kt(e);break;case 13:zt(t,e),kt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(hu=jt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,su(e,a)));break;case 22:l=e.memoizedState!==null;var v=n!==null&&n.memoizedState!==null,R=yn,B=Ze;if(yn=R||l,Ze=B||v,zt(t,e),Ze=B,yn=R,kt(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||v||yn||Ze||ba(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){v=n=t;try{if(r=v.stateNode,l)f=r.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{p=v.stateNode;var Y=v.memoizedProps.style,O=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;p.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(_){_e(v,v.return,_)}}}else if(t.tag===6){if(n===null){v=t;try{v.stateNode.nodeValue=l?"":v.memoizedProps}catch(_){_e(v,v.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,su(e,n))));break;case 19:zt(t,e),kt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,su(e,a)));break;case 30:break;case 21:break;default:zt(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(d0(a)){n=a;break}a=a.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var l=n.stateNode,r=lu(e);Nr(e,r,l);break;case 5:var f=n.stateNode;n.flags&32&&(Ba(f,""),n.flags&=-33);var p=lu(e);Nr(e,p,f);break;case 3:case 4:var v=n.stateNode.containerInfo,R=lu(e);ru(e,R,v);break;default:throw Error(u(161))}}catch(B){_e(e,e.return,B)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function y0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;y0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Yn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)m0(e,t.alternate,t),t=t.sibling}function ba(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Hn(4,t,t.return),ba(t);break;case 1:en(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&c0(t,t.return,n),ba(t);break;case 27:vl(t.stateNode);case 26:case 5:en(t,t.return),ba(t);break;case 22:t.memoizedState===null&&ba(t);break;case 30:ba(t);break;default:ba(t)}e=e.sibling}}function $n(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,r=t,f=r.flags;switch(r.tag){case 0:case 11:case 15:$n(l,r,n),ul(4,r);break;case 1:if($n(l,r,n),a=r,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(R){_e(a,a.return,R)}if(a=r,l=a.updateQueue,l!==null){var p=a.stateNode;try{var v=l.shared.hiddenCallbacks;if(v!==null)for(l.shared.hiddenCallbacks=null,l=0;l<v.length;l++)Jf(v[l],p)}catch(R){_e(a,a.return,R)}}n&&f&64&&u0(r),cl(r,r.return);break;case 27:p0(r);case 26:case 5:$n(l,r,n),n&&a===null&&f&4&&f0(r),cl(r,r.return);break;case 12:$n(l,r,n);break;case 13:$n(l,r,n),n&&f&4&&b0(l,r);break;case 22:r.memoizedState===null&&$n(l,r,n),cl(r,r.return);break;case 30:break;default:$n(l,r,n)}t=t.sibling}}function uu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ji(n))}function cu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ji(e))}function tn(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)w0(e,t,n,a),t=t.sibling}function w0(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:tn(e,t,n,a),l&2048&&ul(9,t);break;case 1:tn(e,t,n,a);break;case 3:tn(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ji(e)));break;case 12:if(l&2048){tn(e,t,n,a),e=t.stateNode;try{var r=t.memoizedProps,f=r.id,p=r.onPostCommit;typeof p=="function"&&p(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){_e(t,t.return,v)}}else tn(e,t,n,a);break;case 13:tn(e,t,n,a);break;case 23:break;case 22:r=t.stateNode,f=t.alternate,t.memoizedState!==null?r._visibility&2?tn(e,t,n,a):fl(e,t):r._visibility&2?tn(e,t,n,a):(r._visibility|=2,ni(e,t,n,a,(t.subtreeFlags&10256)!==0)),l&2048&&uu(f,t);break;case 24:tn(e,t,n,a),l&2048&&cu(t.alternate,t);break;default:tn(e,t,n,a)}}function ni(e,t,n,a,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,f=t,p=n,v=a,R=f.flags;switch(f.tag){case 0:case 11:case 15:ni(r,f,p,v,l),ul(8,f);break;case 23:break;case 22:var B=f.stateNode;f.memoizedState!==null?B._visibility&2?ni(r,f,p,v,l):fl(r,f):(B._visibility|=2,ni(r,f,p,v,l)),l&&R&2048&&uu(f.alternate,f);break;case 24:ni(r,f,p,v,l),l&&R&2048&&cu(f.alternate,f);break;default:ni(r,f,p,v,l)}t=t.sibling}}function fl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:fl(n,a),l&2048&&uu(a.alternate,a);break;case 24:fl(n,a),l&2048&&cu(a.alternate,a);break;default:fl(n,a)}t=t.sibling}}var dl=8192;function ai(e){if(e.subtreeFlags&dl)for(e=e.child;e!==null;)S0(e),e=e.sibling}function S0(e){switch(e.tag){case 26:ai(e),e.flags&dl&&e.memoizedState!==null&&x1(Zt,e.memoizedState,e.memoizedProps);break;case 5:ai(e);break;case 3:case 4:var t=Zt;Zt=Kr(e.stateNode.containerInfo),ai(e),Zt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=dl,dl=16777216,ai(e),dl=t):ai(e));break;default:ai(e)}}function j0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function pl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];tt=a,E0(a,e)}j0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)C0(e),e=e.sibling}function C0(e){switch(e.tag){case 0:case 11:case 15:pl(e),e.flags&2048&&Hn(9,e,e.return);break;case 3:pl(e);break;case 12:pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Lr(e)):pl(e);break;default:pl(e)}}function Lr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];tt=a,E0(a,e)}j0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Hn(8,t,t.return),Lr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Lr(t));break;default:Lr(t)}e=e.sibling}}function E0(e,t){for(;tt!==null;){var n=tt;switch(n.tag){case 0:case 11:case 15:Hn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ji(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,tt=a;else e:for(n=e;tt!==null;){a=tt;var l=a.sibling,r=a.return;if(g0(a),a===n){tt=null;break e}if(l!==null){l.return=r,tt=l;break e}tt=r}}}var Og={getCacheForType:function(e){var t=ct(Pe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},_g=typeof WeakMap=="function"?WeakMap:Map,Ae=0,Le=null,be=null,Se=0,Me=0,Tt=null,qn=!1,ii=!1,fu=!1,Sn=0,qe=0,Gn=0,va=0,du=0,Ht=0,li=0,hl=null,yt=null,pu=!1,hu=0,Br=1/0,Ur=null,Vn=null,ot=0,Xn=null,ri=null,oi=0,mu=0,gu=null,z0=null,ml=0,xu=null;function At(){if((Ae&2)!==0&&Se!==0)return Se&-Se;if(L.T!==null){var e=Ka;return e!==0?e:Cu()}return Jl()}function k0(){Ht===0&&(Ht=(Se&536870912)===0||ze?je():536870912);var e=Ut.current;return e!==null&&(e.flags|=32),Ht}function Mt(e,t,n){(e===Le&&(Me===2||Me===9)||e.cancelPendingCommit!==null)&&(si(e,0),Zn(e,Se,Ht,!1)),Te(e,n),((Ae&2)===0||e!==Le)&&(e===Le&&((Ae&2)===0&&(va|=n),qe===4&&Zn(e,Se,Ht,!1)),nn(e))}function T0(e,t,n){if((Ae&6)!==0)throw Error(u(327));var a=!n&&(t&124)===0&&(t&e.expiredLanes)===0||U(e,t),l=a?Bg(e,t):yu(e,t,!0),r=a;do{if(l===0){ii&&!a&&Zn(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!Ng(n)){l=yu(e,t,!1),r=!1;continue}if(l===2){if(r=t,e.errorRecoveryDisabledLanes&r)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var p=e;l=hl;var v=p.current.memoizedState.isDehydrated;if(v&&(si(p,f).flags|=256),f=yu(p,f,!1),f!==2){if(fu&&!v){p.errorRecoveryDisabledLanes|=r,va|=r,l=4;break e}r=yt,yt=l,r!==null&&(yt===null?yt=r:yt.push.apply(yt,r))}l=f}if(r=!1,l!==2)continue}}if(l===1){si(e,0),Zn(e,t,0,!0);break}e:{switch(a=e,r=l,r){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Zn(a,t,Ht,!qn);break e;case 2:yt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(l=hu+300-jt(),10<l)){if(Zn(a,t,Ht,!qn),Aa(a,0,!0)!==0)break e;a.timeoutHandle=ap(A0.bind(null,a,n,yt,Ur,pu,t,Ht,va,li,qn,r,2,-0,0),l);break e}A0(a,n,yt,Ur,pu,t,Ht,va,li,qn,r,0,-0,0)}}break}while(!0);nn(e)}function A0(e,t,n,a,l,r,f,p,v,R,B,Y,O,_){if(e.timeoutHandle=-1,Y=t.subtreeFlags,(Y&8192||(Y&16785408)===16785408)&&(Sl={stylesheets:null,count:0,unsuspend:g1},S0(t),Y=b1(),Y!==null)){e.cancelPendingCommit=Y(L0.bind(null,e,t,r,n,a,l,f,p,v,B,1,O,_)),Zn(e,r,f,!R);return}L0(e,t,r,n,a,l,f,p,v)}function Ng(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],r=l.getSnapshot;l=l.value;try{if(!Ct(r(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zn(e,t,n,a){t&=~du,t&=~va,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var r=31-lt(l),f=1<<r;a[r]=-1,l&=~f}n!==0&&Tn(e,n,t)}function Hr(){return(Ae&6)===0?(gl(0),!1):!0}function bu(){if(be!==null){if(Me===0)var e=be.return;else e=be,hn=pa=null,Ns(e),ei=null,rl=0,e=be;for(;e!==null;)s0(e.alternate,e),e=e.return;be=null}}function si(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Ig(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),bu(),Le=e,be=n=fn(e.current,null),Se=t,Me=0,Tt=null,qn=!1,ii=U(e,t),fu=!1,li=Ht=du=va=Gn=qe=0,yt=hl=null,pu=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-lt(a),r=1<<l;t|=e[l],a&=~r}return Sn=t,or(),n}function M0(e,t){pe=null,L.H=zr,t===Pi||t===gr?(t=Qf(),Me=3):t===Vf?(t=Qf(),Me=4):Me=t===Kd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Tt=t,be===null&&(qe=1,Rr(e,_t(t,e.current)))}function R0(){var e=L.H;return L.H=zr,e===null?zr:e}function D0(){var e=L.A;return L.A=Og,e}function vu(){qe=4,qn||(Se&4194048)!==Se&&Ut.current!==null||(ii=!0),(Gn&134217727)===0&&(va&134217727)===0||Le===null||Zn(Le,Se,Ht,!1)}function yu(e,t,n){var a=Ae;Ae|=2;var l=R0(),r=D0();(Le!==e||Se!==t)&&(Ur=null,si(e,t)),t=!1;var f=qe;e:do try{if(Me!==0&&be!==null){var p=be,v=Tt;switch(Me){case 8:bu(),f=6;break e;case 3:case 2:case 9:case 6:Ut.current===null&&(t=!0);var R=Me;if(Me=0,Tt=null,ui(e,p,v,R),n&&ii){f=0;break e}break;default:R=Me,Me=0,Tt=null,ui(e,p,v,R)}}Lg(),f=qe;break}catch(B){M0(e,B)}while(!0);return t&&e.shellSuspendCounter++,hn=pa=null,Ae=a,L.H=l,L.A=r,be===null&&(Le=null,Se=0,or()),f}function Lg(){for(;be!==null;)O0(be)}function Bg(e,t){var n=Ae;Ae|=2;var a=R0(),l=D0();Le!==e||Se!==t?(Ur=null,Br=jt()+500,si(e,t)):ii=U(e,t);e:do try{if(Me!==0&&be!==null){t=be;var r=Tt;t:switch(Me){case 1:Me=0,Tt=null,ui(e,t,r,1);break;case 2:case 9:if(Xf(r)){Me=0,Tt=null,_0(t);break}t=function(){Me!==2&&Me!==9||Le!==e||(Me=7),nn(e)},r.then(t,t);break e;case 3:Me=7;break e;case 4:Me=5;break e;case 7:Xf(r)?(Me=0,Tt=null,_0(t)):(Me=0,Tt=null,ui(e,t,r,7));break;case 5:var f=null;switch(be.tag){case 26:f=be.memoizedState;case 5:case 27:var p=be;if(!f||mp(f)){Me=0,Tt=null;var v=p.sibling;if(v!==null)be=v;else{var R=p.return;R!==null?(be=R,Yr(R)):be=null}break t}}Me=0,Tt=null,ui(e,t,r,5);break;case 6:Me=0,Tt=null,ui(e,t,r,6);break;case 8:bu(),qe=6;break e;default:throw Error(u(462))}}Ug();break}catch(B){M0(e,B)}while(!0);return hn=pa=null,L.H=a,L.A=l,Ae=n,be!==null?0:(Le=null,Se=0,or(),qe)}function Ug(){for(;be!==null&&!za();)O0(be)}function O0(e){var t=r0(e.alternate,e,Sn);e.memoizedProps=e.pendingProps,t===null?Yr(e):be=t}function _0(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=e0(n,t,t.pendingProps,t.type,void 0,Se);break;case 11:t=e0(n,t,t.pendingProps,t.type.render,t.ref,Se);break;case 5:Ns(t);default:s0(n,t),t=be=Nf(t,Sn),t=r0(n,t,Sn)}e.memoizedProps=e.pendingProps,t===null?Yr(e):be=t}function ui(e,t,n,a){hn=pa=null,Ns(t),ei=null,rl=0;var l=t.return;try{if(kg(e,l,t,n,Se)){qe=1,Rr(e,_t(n,e.current)),be=null;return}}catch(r){if(l!==null)throw be=l,r;qe=1,Rr(e,_t(n,e.current)),be=null;return}t.flags&32768?(ze||a===1?e=!0:ii||(Se&536870912)!==0?e=!1:(qn=e=!0,(a===2||a===9||a===3||a===6)&&(a=Ut.current,a!==null&&a.tag===13&&(a.flags|=16384))),N0(t,e)):Yr(t)}function Yr(e){var t=e;do{if((t.flags&32768)!==0){N0(t,qn);return}e=t.return;var n=Ag(t.alternate,t,Sn);if(n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);qe===0&&(qe=5)}function N0(e,t){do{var n=Mg(e.alternate,e);if(n!==null){n.flags&=32767,be=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){be=e;return}be=e=n}while(e!==null);qe=6,be=null}function L0(e,t,n,a,l,r,f,p,v){e.cancelPendingCommit=null;do $r();while(ot!==0);if((Ae&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(r=t.lanes|t.childLanes,r|=cs,Ne(e,n,r,f,p,v),e===Le&&(be=Le=null,Se=0),ri=t,Xn=e,oi=n,mu=r,gu=l,z0=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,qg(na,function(){return $0(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=L.T,L.T=null,l=J.p,J.p=2,f=Ae,Ae|=4;try{Rg(e,t,n)}finally{Ae=f,J.p=l,L.T=a}}ot=1,B0(),U0(),H0()}}function B0(){if(ot===1){ot=0;var e=Xn,t=ri,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=L.T,L.T=null;var a=J.p;J.p=2;var l=Ae;Ae|=4;try{v0(t,e);var r=Du,f=Ef(e.containerInfo),p=r.focusedElem,v=r.selectionRange;if(f!==p&&p&&p.ownerDocument&&Cf(p.ownerDocument.documentElement,p)){if(v!==null&&ls(p)){var R=v.start,B=v.end;if(B===void 0&&(B=R),"selectionStart"in p)p.selectionStart=R,p.selectionEnd=Math.min(B,p.value.length);else{var Y=p.ownerDocument||document,O=Y&&Y.defaultView||window;if(O.getSelection){var _=O.getSelection(),se=p.textContent.length,re=Math.min(v.start,se),Oe=v.end===void 0?re:Math.min(v.end,se);!_.extend&&re>Oe&&(f=Oe,Oe=re,re=f);var z=jf(p,re),S=jf(p,Oe);if(z&&S&&(_.rangeCount!==1||_.anchorNode!==z.node||_.anchorOffset!==z.offset||_.focusNode!==S.node||_.focusOffset!==S.offset)){var T=Y.createRange();T.setStart(z.node,z.offset),_.removeAllRanges(),re>Oe?(_.addRange(T),_.extend(S.node,S.offset)):(T.setEnd(S.node,S.offset),_.addRange(T))}}}}for(Y=[],_=p;_=_.parentNode;)_.nodeType===1&&Y.push({element:_,left:_.scrollLeft,top:_.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<Y.length;p++){var H=Y[p];H.element.scrollLeft=H.left,H.element.scrollTop=H.top}}Ir=!!Ru,Du=Ru=null}finally{Ae=l,J.p=a,L.T=n}}e.current=t,ot=2}}function U0(){if(ot===2){ot=0;var e=Xn,t=ri,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=L.T,L.T=null;var a=J.p;J.p=2;var l=Ae;Ae|=4;try{m0(e,t.alternate,t)}finally{Ae=l,J.p=a,L.T=n}}ot=3}}function H0(){if(ot===4||ot===3){ot=0,Zl();var e=Xn,t=ri,n=oi,a=z0;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ot=5:(ot=0,ri=Xn=null,Y0(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Vn=null),sn(n),t=t.stateNode,it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(Wt,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=L.T,l=J.p,J.p=2,L.T=null;try{for(var r=e.onRecoverableError,f=0;f<a.length;f++){var p=a[f];r(p.value,{componentStack:p.stack})}}finally{L.T=t,J.p=l}}(oi&3)!==0&&$r(),nn(e),l=e.pendingLanes,(n&4194090)!==0&&(l&42)!==0?e===xu?ml++:(ml=0,xu=e):ml=0,gl(0)}}function Y0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ji(t)))}function $r(e){return B0(),U0(),H0(),$0()}function $0(){if(ot!==5)return!1;var e=Xn,t=mu;mu=0;var n=sn(oi),a=L.T,l=J.p;try{J.p=32>n?32:n,L.T=null,n=gu,gu=null;var r=Xn,f=oi;if(ot=0,ri=Xn=null,oi=0,(Ae&6)!==0)throw Error(u(331));var p=Ae;if(Ae|=4,C0(r.current),w0(r,r.current,f,n),Ae=p,gl(0,!1),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(Wt,r)}catch{}return!0}finally{J.p=l,L.T=a,Y0(e,t)}}function q0(e,t,n){t=_t(n,t),t=Js(e.stateNode,t,2),e=Nn(e,t,2),e!==null&&(Te(e,2),nn(e))}function _e(e,t,n){if(e.tag===3)q0(e,e,n);else for(;t!==null;){if(t.tag===3){q0(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Vn===null||!Vn.has(a))){e=_t(n,e),n=Zd(2),a=Nn(t,n,2),a!==null&&(Qd(n,a,t,e),Te(a,2),nn(a));break}}t=t.return}}function wu(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new _g;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(fu=!0,l.add(n),e=Hg.bind(null,e,t,n),t.then(e,e))}function Hg(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Le===e&&(Se&n)===n&&(qe===4||qe===3&&(Se&62914560)===Se&&300>jt()-hu?(Ae&2)===0&&si(e,0):du|=n,li===Se&&(li=0)),nn(e)}function G0(e,t){t===0&&(t=F()),e=Va(e,t),e!==null&&(Te(e,t),nn(e))}function Yg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),G0(e,n)}function $g(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),G0(e,n)}function qg(e,t){return qt(e,t)}var qr=null,ci=null,Su=!1,Gr=!1,ju=!1,ya=0;function nn(e){e!==ci&&e.next===null&&(ci===null?qr=ci=e:ci=ci.next=e),Gr=!0,Su||(Su=!0,Vg())}function gl(e,t){if(!ju&&Gr){ju=!0;do for(var n=!1,a=qr;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var r=0;else{var f=a.suspendedLanes,p=a.pingedLanes;r=(1<<31-lt(42|e)+1)-1,r&=l&~(f&~p),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Q0(a,r))}else r=Se,r=Aa(a,a===Le?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(r&3)===0||U(a,r)||(n=!0,Q0(a,r));a=a.next}while(n);ju=!1}}function Gg(){V0()}function V0(){Gr=Su=!1;var e=0;ya!==0&&(Fg()&&(e=ya),ya=0);for(var t=jt(),n=null,a=qr;a!==null;){var l=a.next,r=X0(a,t);r===0?(a.next=null,n===null?qr=l:n.next=l,l===null&&(ci=n)):(n=a,(e!==0||(r&3)!==0)&&(Gr=!0)),a=l}gl(e)}function X0(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var f=31-lt(r),p=1<<f,v=l[f];v===-1?((p&n)===0||(p&a)!==0)&&(l[f]=ie(p,t)):v<=t&&(e.expiredLanes|=p),r&=~p}if(t=Le,n=Se,n=Aa(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Me===2||Me===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Mi(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||U(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Mi(a),sn(n)){case 2:case 8:n=Di;break;case 32:n=na;break;case 268435456:n=Kl;break;default:n=na}return a=Z0.bind(null,e),n=qt(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Mi(a),e.callbackPriority=2,e.callbackNode=null,2}function Z0(e,t){if(ot!==0&&ot!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if($r()&&e.callbackNode!==n)return null;var a=Se;return a=Aa(e,e===Le?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(T0(e,a,t),X0(e,jt()),e.callbackNode!=null&&e.callbackNode===n?Z0.bind(null,e):null)}function Q0(e,t){if($r())return null;T0(e,t,!0)}function Vg(){e1(function(){(Ae&6)!==0?qt(Ri,Gg):V0()})}function Cu(){return ya===0&&(ya=je()),ya}function K0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:er(""+e)}function J0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Xg(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var r=K0((l[gt]||null).action),f=a.submitter;f&&(t=(t=f[gt]||null)?K0(t.formAction):f.getAttribute("formAction"),t!==null&&(r=t,f=null));var p=new ir("action","action",null,a,l);e.push({event:p,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ya!==0){var v=f?J0(l,f):new FormData(l);Vs(n,{pending:!0,data:v,method:l.method,action:r},null,v)}}else typeof r=="function"&&(p.preventDefault(),v=f?J0(l,f):new FormData(l),Vs(n,{pending:!0,data:v,method:l.method,action:r},r,v))},currentTarget:l}]})}}for(var Eu=0;Eu<us.length;Eu++){var zu=us[Eu],Zg=zu.toLowerCase(),Qg=zu[0].toUpperCase()+zu.slice(1);Xt(Zg,"on"+Qg)}Xt(Tf,"onAnimationEnd"),Xt(Af,"onAnimationIteration"),Xt(Mf,"onAnimationStart"),Xt("dblclick","onDoubleClick"),Xt("focusin","onFocus"),Xt("focusout","onBlur"),Xt(cg,"onTransitionRun"),Xt(fg,"onTransitionStart"),Xt(dg,"onTransitionCancel"),Xt(Rf,"onTransitionEnd"),_a("onMouseEnter",["mouseout","mouseover"]),_a("onMouseLeave",["mouseout","mouseover"]),_a("onPointerEnter",["pointerout","pointerover"]),_a("onPointerLeave",["pointerout","pointerover"]),ia("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ia("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ia("onBeforeInput",["compositionend","keypress","textInput","paste"]),ia("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ia("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ia("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xl));function W0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var r=void 0;if(t)for(var f=a.length-1;0<=f;f--){var p=a[f],v=p.instance,R=p.currentTarget;if(p=p.listener,v!==r&&l.isPropagationStopped())break e;r=p,l.currentTarget=R;try{r(l)}catch(B){Mr(B)}l.currentTarget=null,r=v}else for(f=0;f<a.length;f++){if(p=a[f],v=p.instance,R=p.currentTarget,p=p.listener,v!==r&&l.isPropagationStopped())break e;r=p,l.currentTarget=R;try{r(l)}catch(B){Mr(B)}l.currentTarget=null,r=v}}}}function ve(e,t){var n=t[Ho];n===void 0&&(n=t[Ho]=new Set);var a=e+"__bubble";n.has(a)||(P0(t,e,2,!1),n.add(a))}function ku(e,t,n){var a=0;t&&(a|=4),P0(n,e,a,t)}var Vr="_reactListening"+Math.random().toString(36).slice(2);function Tu(e){if(!e[Vr]){e[Vr]=!0,Gc.forEach(function(n){n!=="selectionchange"&&(Kg.has(n)||ku(n,!1,e),ku(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vr]||(t[Vr]=!0,ku("selectionchange",!1,t))}}function P0(e,t,n,a){switch(wp(t)){case 2:var l=w1;break;case 8:l=S1;break;default:l=qu}n=l.bind(null,t,n,e),l=void 0,!Wo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Au(e,t,n,a,l){var r=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var p=a.stateNode.containerInfo;if(p===l)break;if(f===4)for(f=a.return;f!==null;){var v=f.tag;if((v===3||v===4)&&f.stateNode.containerInfo===l)return;f=f.return}for(;p!==null;){if(f=Ra(p),f===null)return;if(v=f.tag,v===5||v===6||v===26||v===27){a=r=f;continue e}p=p.parentNode}}a=a.return}af(function(){var R=r,B=Ko(n),Y=[];e:{var O=Df.get(e);if(O!==void 0){var _=ir,se=e;switch(e){case"keypress":if(nr(n)===0)break e;case"keydown":case"keyup":_=qm;break;case"focusin":se="focus",_=es;break;case"focusout":se="blur",_=es;break;case"beforeblur":case"afterblur":_=es;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=of;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Mm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Xm;break;case Tf:case Af:case Mf:_=Om;break;case Rf:_=Qm;break;case"scroll":case"scrollend":_=Tm;break;case"wheel":_=Jm;break;case"copy":case"cut":case"paste":_=Nm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=uf;break;case"toggle":case"beforetoggle":_=Pm}var re=(t&4)!==0,Oe=!re&&(e==="scroll"||e==="scrollend"),z=re?O!==null?O+"Capture":null:O;re=[];for(var S=R,T;S!==null;){var H=S;if(T=H.stateNode,H=H.tag,H!==5&&H!==26&&H!==27||T===null||z===null||(H=Li(S,z),H!=null&&re.push(bl(S,H,T))),Oe)break;S=S.return}0<re.length&&(O=new _(O,se,null,n,B),Y.push({event:O,listeners:re}))}}if((t&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",O&&n!==Qo&&(se=n.relatedTarget||n.fromElement)&&(Ra(se)||se[Ma]))break e;if((_||O)&&(O=B.window===B?B:(O=B.ownerDocument)?O.defaultView||O.parentWindow:window,_?(se=n.relatedTarget||n.toElement,_=R,se=se?Ra(se):null,se!==null&&(Oe=h(se),re=se.tag,se!==Oe||re!==5&&re!==27&&re!==6)&&(se=null)):(_=null,se=R),_!==se)){if(re=of,H="onMouseLeave",z="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(re=uf,H="onPointerLeave",z="onPointerEnter",S="pointer"),Oe=_==null?O:Ni(_),T=se==null?O:Ni(se),O=new re(H,S+"leave",_,n,B),O.target=Oe,O.relatedTarget=T,H=null,Ra(B)===R&&(re=new re(z,S+"enter",se,n,B),re.target=T,re.relatedTarget=Oe,H=re),Oe=H,_&&se)t:{for(re=_,z=se,S=0,T=re;T;T=fi(T))S++;for(T=0,H=z;H;H=fi(H))T++;for(;0<S-T;)re=fi(re),S--;for(;0<T-S;)z=fi(z),T--;for(;S--;){if(re===z||z!==null&&re===z.alternate)break t;re=fi(re),z=fi(z)}re=null}else re=null;_!==null&&F0(Y,O,_,re,!1),se!==null&&Oe!==null&&F0(Y,Oe,se,re,!0)}}e:{if(O=R?Ni(R):window,_=O.nodeName&&O.nodeName.toLowerCase(),_==="select"||_==="input"&&O.type==="file")var te=xf;else if(mf(O))if(bf)te=og;else{te=lg;var me=ig}else _=O.nodeName,!_||_.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?R&&Zo(R.elementType)&&(te=xf):te=rg;if(te&&(te=te(e,R))){gf(Y,te,n,B);break e}me&&me(e,O,R),e==="focusout"&&R&&O.type==="number"&&R.memoizedProps.value!=null&&Xo(O,"number",O.value)}switch(me=R?Ni(R):window,e){case"focusin":(mf(me)||me.contentEditable==="true")&&($a=me,rs=R,Vi=null);break;case"focusout":Vi=rs=$a=null;break;case"mousedown":os=!0;break;case"contextmenu":case"mouseup":case"dragend":os=!1,zf(Y,n,B);break;case"selectionchange":if(ug)break;case"keydown":case"keyup":zf(Y,n,B)}var ae;if(ns)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else Ya?pf(e,n)&&(oe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(oe="onCompositionStart");oe&&(cf&&n.locale!=="ko"&&(Ya||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&Ya&&(ae=lf()):(Rn=B,Po="value"in Rn?Rn.value:Rn.textContent,Ya=!0)),me=Xr(R,oe),0<me.length&&(oe=new sf(oe,e,null,n,B),Y.push({event:oe,listeners:me}),ae?oe.data=ae:(ae=hf(n),ae!==null&&(oe.data=ae)))),(ae=Im?eg(e,n):tg(e,n))&&(oe=Xr(R,"onBeforeInput"),0<oe.length&&(me=new sf("onBeforeInput","beforeinput",null,n,B),Y.push({event:me,listeners:oe}),me.data=ae)),Xg(Y,e,R,n,B)}W0(Y,t)})}function bl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xr(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=Li(e,n),l!=null&&a.unshift(bl(e,l,r)),l=Li(e,t),l!=null&&a.push(bl(e,l,r))),e.tag===3)return a;e=e.return}return[]}function fi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function F0(e,t,n,a,l){for(var r=t._reactName,f=[];n!==null&&n!==a;){var p=n,v=p.alternate,R=p.stateNode;if(p=p.tag,v!==null&&v===a)break;p!==5&&p!==26&&p!==27||R===null||(v=R,l?(R=Li(n,r),R!=null&&f.unshift(bl(n,R,v))):l||(R=Li(n,r),R!=null&&f.push(bl(n,R,v)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var Jg=/\r\n?/g,Wg=/\u0000|\uFFFD/g;function I0(e){return(typeof e=="string"?e:""+e).replace(Jg,`
`).replace(Wg,"")}function ep(e,t){return t=I0(t),I0(e)===t}function Zr(){}function De(e,t,n,a,l,r){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Ba(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Ba(e,""+a);break;case"className":Pl(e,"class",a);break;case"tabIndex":Pl(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Pl(e,n,a);break;case"style":tf(e,a,r);break;case"data":if(t!=="object"){Pl(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=er(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&De(e,t,"name",l.name,l,null),De(e,t,"formEncType",l.formEncType,l,null),De(e,t,"formMethod",l.formMethod,l,null),De(e,t,"formTarget",l.formTarget,l,null)):(De(e,t,"encType",l.encType,l,null),De(e,t,"method",l.method,l,null),De(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=er(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Zr);break;case"onScroll":a!=null&&ve("scroll",e);break;case"onScrollEnd":a!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=er(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Wl(e,"popover",a);break;case"xlinkActuate":un(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":un(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":un(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":un(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":un(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":un(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":un(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":un(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":un(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Wl(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=zm.get(n)||n,Wl(e,n,a))}}function Mu(e,t,n,a,l,r){switch(n){case"style":tf(e,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Ba(e,a):(typeof a=="number"||typeof a=="bigint")&&Ba(e,""+a);break;case"onScroll":a!=null&&ve("scroll",e);break;case"onScrollEnd":a!=null&&ve("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Zr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),r=e[gt]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,l),typeof a=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Wl(e,n,a)}}}function st(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var a=!1,l=!1,r;for(r in n)if(n.hasOwnProperty(r)){var f=n[r];if(f!=null)switch(r){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:De(e,t,r,f,n,null)}}l&&De(e,t,"srcSet",n.srcSet,n,null),a&&De(e,t,"src",n.src,n,null);return;case"input":ve("invalid",e);var p=r=f=l=null,v=null,R=null;for(a in n)if(n.hasOwnProperty(a)){var B=n[a];if(B!=null)switch(a){case"name":l=B;break;case"type":f=B;break;case"checked":v=B;break;case"defaultChecked":R=B;break;case"value":r=B;break;case"defaultValue":p=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(u(137,t));break;default:De(e,t,a,B,n,null)}}Pc(e,r,p,v,R,f,l,!1),Fl(e);return;case"select":ve("invalid",e),a=f=r=null;for(l in n)if(n.hasOwnProperty(l)&&(p=n[l],p!=null))switch(l){case"value":r=p;break;case"defaultValue":f=p;break;case"multiple":a=p;default:De(e,t,l,p,n,null)}t=r,n=f,e.multiple=!!a,t!=null?La(e,!!a,t,!1):n!=null&&La(e,!!a,n,!0);return;case"textarea":ve("invalid",e),r=l=a=null;for(f in n)if(n.hasOwnProperty(f)&&(p=n[f],p!=null))switch(f){case"value":a=p;break;case"defaultValue":l=p;break;case"children":r=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(u(91));break;default:De(e,t,f,p,n,null)}Ic(e,a,l,r),Fl(e);return;case"option":for(v in n)if(n.hasOwnProperty(v)&&(a=n[v],a!=null))switch(v){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:De(e,t,v,a,n,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(a=0;a<xl.length;a++)ve(xl[a],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in n)if(n.hasOwnProperty(R)&&(a=n[R],a!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:De(e,t,R,a,n,null)}return;default:if(Zo(t)){for(B in n)n.hasOwnProperty(B)&&(a=n[B],a!==void 0&&Mu(e,t,B,a,n,void 0));return}}for(p in n)n.hasOwnProperty(p)&&(a=n[p],a!=null&&De(e,t,p,a,n,null))}function Pg(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,f=null,p=null,v=null,R=null,B=null;for(_ in n){var Y=n[_];if(n.hasOwnProperty(_)&&Y!=null)switch(_){case"checked":break;case"value":break;case"defaultValue":v=Y;default:a.hasOwnProperty(_)||De(e,t,_,null,a,Y)}}for(var O in a){var _=a[O];if(Y=n[O],a.hasOwnProperty(O)&&(_!=null||Y!=null))switch(O){case"type":r=_;break;case"name":l=_;break;case"checked":R=_;break;case"defaultChecked":B=_;break;case"value":f=_;break;case"defaultValue":p=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(u(137,t));break;default:_!==Y&&De(e,t,O,_,a,Y)}}Vo(e,f,p,v,R,B,r,l);return;case"select":_=f=p=O=null;for(r in n)if(v=n[r],n.hasOwnProperty(r)&&v!=null)switch(r){case"value":break;case"multiple":_=v;default:a.hasOwnProperty(r)||De(e,t,r,null,a,v)}for(l in a)if(r=a[l],v=n[l],a.hasOwnProperty(l)&&(r!=null||v!=null))switch(l){case"value":O=r;break;case"defaultValue":p=r;break;case"multiple":f=r;default:r!==v&&De(e,t,l,r,a,v)}t=p,n=f,a=_,O!=null?La(e,!!n,O,!1):!!a!=!!n&&(t!=null?La(e,!!n,t,!0):La(e,!!n,n?[]:"",!1));return;case"textarea":_=O=null;for(p in n)if(l=n[p],n.hasOwnProperty(p)&&l!=null&&!a.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:De(e,t,p,null,a,l)}for(f in a)if(l=a[f],r=n[f],a.hasOwnProperty(f)&&(l!=null||r!=null))switch(f){case"value":O=l;break;case"defaultValue":_=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(u(91));break;default:l!==r&&De(e,t,f,l,a,r)}Fc(e,O,_);return;case"option":for(var se in n)if(O=n[se],n.hasOwnProperty(se)&&O!=null&&!a.hasOwnProperty(se))switch(se){case"selected":e.selected=!1;break;default:De(e,t,se,null,a,O)}for(v in a)if(O=a[v],_=n[v],a.hasOwnProperty(v)&&O!==_&&(O!=null||_!=null))switch(v){case"selected":e.selected=O&&typeof O!="function"&&typeof O!="symbol";break;default:De(e,t,v,O,a,_)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in n)O=n[re],n.hasOwnProperty(re)&&O!=null&&!a.hasOwnProperty(re)&&De(e,t,re,null,a,O);for(R in a)if(O=a[R],_=n[R],a.hasOwnProperty(R)&&O!==_&&(O!=null||_!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(u(137,t));break;default:De(e,t,R,O,a,_)}return;default:if(Zo(t)){for(var Oe in n)O=n[Oe],n.hasOwnProperty(Oe)&&O!==void 0&&!a.hasOwnProperty(Oe)&&Mu(e,t,Oe,void 0,a,O);for(B in a)O=a[B],_=n[B],!a.hasOwnProperty(B)||O===_||O===void 0&&_===void 0||Mu(e,t,B,O,a,_);return}}for(var z in n)O=n[z],n.hasOwnProperty(z)&&O!=null&&!a.hasOwnProperty(z)&&De(e,t,z,null,a,O);for(Y in a)O=a[Y],_=n[Y],!a.hasOwnProperty(Y)||O===_||O==null&&_==null||De(e,t,Y,O,a,_)}var Ru=null,Du=null;function Qr(e){return e.nodeType===9?e:e.ownerDocument}function tp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function np(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ou(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _u=null;function Fg(){var e=window.event;return e&&e.type==="popstate"?e===_u?!1:(_u=e,!0):(_u=null,!1)}var ap=typeof setTimeout=="function"?setTimeout:void 0,Ig=typeof clearTimeout=="function"?clearTimeout:void 0,ip=typeof Promise=="function"?Promise:void 0,e1=typeof queueMicrotask=="function"?queueMicrotask:typeof ip<"u"?function(e){return ip.resolve(null).then(e).catch(t1)}:ap;function t1(e){setTimeout(function(){throw e})}function Qn(e){return e==="head"}function lp(e,t){var n=t,a=0,l=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<a&&8>a){n=a;var f=e.ownerDocument;if(n&1&&vl(f.documentElement),n&2&&vl(f.body),n&4)for(n=f.head,vl(n),f=n.firstChild;f;){var p=f.nextSibling,v=f.nodeName;f[_i]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&f.rel.toLowerCase()==="stylesheet"||n.removeChild(f),f=p}}if(l===0){e.removeChild(r),kl(t);return}l--}else n==="$"||n==="$?"||n==="$!"?l++:a=n.charCodeAt(0)-48;else a=0;n=r}while(n);kl(t)}function Nu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Nu(n),Yo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function n1(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[_i])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Qt(e.nextSibling),e===null)break}return null}function a1(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Qt(e.nextSibling),e===null))return null;return e}function Lu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function i1(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Bu=null;function rp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function op(e,t,n){switch(t=Qr(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function vl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Yo(e)}var Yt=new Map,sp=new Set;function Kr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var jn=J.d;J.d={f:l1,r:r1,D:o1,C:s1,L:u1,m:c1,X:d1,S:f1,M:p1};function l1(){var e=jn.f(),t=Hr();return e||t}function r1(e){var t=Da(e);t!==null&&t.tag===5&&t.type==="form"?Td(t):jn.r(e)}var di=typeof document>"u"?null:document;function up(e,t,n){var a=di;if(a&&typeof t=="string"&&t){var l=Ot(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),sp.has(l)||(sp.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),st(t,"link",e),Ie(t),a.head.appendChild(t)))}}function o1(e){jn.D(e),up("dns-prefetch",e,null)}function s1(e,t){jn.C(e,t),up("preconnect",e,t)}function u1(e,t,n){jn.L(e,t,n);var a=di;if(a&&e&&t){var l='link[rel="preload"][as="'+Ot(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Ot(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Ot(n.imageSizes)+'"]')):l+='[href="'+Ot(e)+'"]';var r=l;switch(t){case"style":r=pi(e);break;case"script":r=hi(e)}Yt.has(r)||(e=E({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Yt.set(r,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(yl(r))||t==="script"&&a.querySelector(wl(r))||(t=a.createElement("link"),st(t,"link",e),Ie(t),a.head.appendChild(t)))}}function c1(e,t){jn.m(e,t);var n=di;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Ot(a)+'"][href="'+Ot(e)+'"]',r=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=hi(e)}if(!Yt.has(r)&&(e=E({rel:"modulepreload",href:e},t),Yt.set(r,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(wl(r)))return}a=n.createElement("link"),st(a,"link",e),Ie(a),n.head.appendChild(a)}}}function f1(e,t,n){jn.S(e,t,n);var a=di;if(a&&e){var l=Oa(a).hoistableStyles,r=pi(e);t=t||"default";var f=l.get(r);if(!f){var p={loading:0,preload:null};if(f=a.querySelector(yl(r)))p.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Yt.get(r))&&Uu(e,n);var v=f=a.createElement("link");Ie(v),st(v,"link",e),v._p=new Promise(function(R,B){v.onload=R,v.onerror=B}),v.addEventListener("load",function(){p.loading|=1}),v.addEventListener("error",function(){p.loading|=2}),p.loading|=4,Jr(f,t,a)}f={type:"stylesheet",instance:f,count:1,state:p},l.set(r,f)}}}function d1(e,t){jn.X(e,t);var n=di;if(n&&e){var a=Oa(n).hoistableScripts,l=hi(e),r=a.get(l);r||(r=n.querySelector(wl(l)),r||(e=E({src:e,async:!0},t),(t=Yt.get(l))&&Hu(e,t),r=n.createElement("script"),Ie(r),st(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function p1(e,t){jn.M(e,t);var n=di;if(n&&e){var a=Oa(n).hoistableScripts,l=hi(e),r=a.get(l);r||(r=n.querySelector(wl(l)),r||(e=E({src:e,async:!0,type:"module"},t),(t=Yt.get(l))&&Hu(e,t),r=n.createElement("script"),Ie(r),st(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function cp(e,t,n,a){var l=(l=ne.current)?Kr(l):null;if(!l)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=pi(n.href),n=Oa(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=pi(n.href);var r=Oa(l).hoistableStyles,f=r.get(e);if(f||(l=l.ownerDocument||l,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,f),(r=l.querySelector(yl(e)))&&!r._p&&(f.instance=r,f.state.loading=5),Yt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Yt.set(e,n),r||h1(l,e,n,f.state))),t&&a===null)throw Error(u(528,""));return f}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=hi(n),n=Oa(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function pi(e){return'href="'+Ot(e)+'"'}function yl(e){return'link[rel="stylesheet"]['+e+"]"}function fp(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function h1(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),st(t,"link",n),Ie(t),e.head.appendChild(t))}function hi(e){return'[src="'+Ot(e)+'"]'}function wl(e){return"script[async]"+e}function dp(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Ot(n.href)+'"]');if(a)return t.instance=a,Ie(a),a;var l=E({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ie(a),st(a,"style",l),Jr(a,n.precedence,e),t.instance=a;case"stylesheet":l=pi(n.href);var r=e.querySelector(yl(l));if(r)return t.state.loading|=4,t.instance=r,Ie(r),r;a=fp(n),(l=Yt.get(l))&&Uu(a,l),r=(e.ownerDocument||e).createElement("link"),Ie(r);var f=r;return f._p=new Promise(function(p,v){f.onload=p,f.onerror=v}),st(r,"link",a),t.state.loading|=4,Jr(r,n.precedence,e),t.instance=r;case"script":return r=hi(n.src),(l=e.querySelector(wl(r)))?(t.instance=l,Ie(l),l):(a=n,(l=Yt.get(r))&&(a=E({},n),Hu(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ie(l),st(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Jr(a,n.precedence,e));return t.instance}function Jr(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,r=l,f=0;f<a.length;f++){var p=a[f];if(p.dataset.precedence===t)r=p;else if(r!==l)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Uu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Hu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Wr=null;function pp(e,t,n){if(Wr===null){var a=new Map,l=Wr=new Map;l.set(n,a)}else l=Wr,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var r=n[l];if(!(r[_i]||r[ut]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var f=r.getAttribute(t)||"";f=e+f;var p=a.get(f);p?p.push(r):a.set(f,[r])}}return a}function hp(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function m1(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function mp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Sl=null;function g1(){}function x1(e,t,n){if(Sl===null)throw Error(u(475));var a=Sl;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=pi(n.href),r=e.querySelector(yl(l));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=Pr.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=r,Ie(r);return}r=e.ownerDocument||e,n=fp(n),(l=Yt.get(l))&&Uu(n,l),r=r.createElement("link"),Ie(r);var f=r;f._p=new Promise(function(p,v){f.onload=p,f.onerror=v}),st(r,"link",n),t.instance=r}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Pr.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function b1(){if(Sl===null)throw Error(u(475));var e=Sl;return e.stylesheets&&e.count===0&&Yu(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Yu(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Pr(){if(this.count--,this.count===0){if(this.stylesheets)Yu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Fr=null;function Yu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Fr=new Map,t.forEach(v1,e),Fr=null,Pr.call(e))}function v1(e,t){if(!(t.state.loading&4)){var n=Fr.get(e);if(n)var a=n.get(null);else{n=new Map,Fr.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var f=l[r];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),a=f)}a&&n.set(null,a)}l=t.instance,f=l.getAttribute("data-precedence"),r=n.get(f)||a,r===a&&n.set(null,l),n.set(f,l),this.count++,a=Pr.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),r?r.parentNode.insertBefore(l,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var jl={$$typeof:G,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function y1(e,t,n,a,l,r,f,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xe(0),this.hiddenUpdates=xe(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function gp(e,t,n,a,l,r,f,p,v,R,B,Y){return e=new y1(e,t,n,f,p,v,R,Y),t=1,r===!0&&(t|=24),r=Et(3,null,null,t),e.current=r,r.stateNode=e,t=ws(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:a,isDehydrated:n,cache:t},Es(r),e}function xp(e){return e?(e=Xa,e):Xa}function bp(e,t,n,a,l,r){l=xp(l),a.context===null?a.context=l:a.pendingContext=l,a=_n(t),a.payload={element:n},r=r===void 0?null:r,r!==null&&(a.callback=r),n=Nn(e,a,t),n!==null&&(Mt(n,e,t),Ii(n,e,t))}function vp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $u(e,t){vp(e,t),(e=e.alternate)&&vp(e,t)}function yp(e){if(e.tag===13){var t=Va(e,67108864);t!==null&&Mt(t,e,67108864),$u(e,67108864)}}var Ir=!0;function w1(e,t,n,a){var l=L.T;L.T=null;var r=J.p;try{J.p=2,qu(e,t,n,a)}finally{J.p=r,L.T=l}}function S1(e,t,n,a){var l=L.T;L.T=null;var r=J.p;try{J.p=8,qu(e,t,n,a)}finally{J.p=r,L.T=l}}function qu(e,t,n,a){if(Ir){var l=Gu(a);if(l===null)Au(e,t,a,eo,n),Sp(e,a);else if(C1(l,e,t,n,a))a.stopPropagation();else if(Sp(e,a),t&4&&-1<j1.indexOf(e)){for(;l!==null;){var r=Da(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var f=Pt(r.pendingLanes);if(f!==0){var p=r;for(p.pendingLanes|=2,p.entangledLanes|=2;f;){var v=1<<31-lt(f);p.entanglements[1]|=v,f&=~v}nn(r),(Ae&6)===0&&(Br=jt()+500,gl(0))}}break;case 13:p=Va(r,2),p!==null&&Mt(p,r,2),Hr(),$u(r,2)}if(r=Gu(a),r===null&&Au(e,t,a,eo,n),r===l)break;l=r}l!==null&&a.stopPropagation()}else Au(e,t,a,null,n)}}function Gu(e){return e=Ko(e),Vu(e)}var eo=null;function Vu(e){if(eo=null,e=Ra(e),e!==null){var t=h(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=b(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return eo=e,null}function wp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ql()){case Ri:return 2;case Di:return 8;case na:case No:return 32;case Kl:return 268435456;default:return 32}default:return 32}}var Xu=!1,Kn=null,Jn=null,Wn=null,Cl=new Map,El=new Map,Pn=[],j1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sp(e,t){switch(e){case"focusin":case"focusout":Kn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Wn=null;break;case"pointerover":case"pointerout":Cl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":El.delete(t.pointerId)}}function zl(e,t,n,a,l,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[l]},t!==null&&(t=Da(t),t!==null&&yp(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function C1(e,t,n,a,l){switch(t){case"focusin":return Kn=zl(Kn,e,t,n,a,l),!0;case"dragenter":return Jn=zl(Jn,e,t,n,a,l),!0;case"mouseover":return Wn=zl(Wn,e,t,n,a,l),!0;case"pointerover":var r=l.pointerId;return Cl.set(r,zl(Cl.get(r)||null,e,t,n,a,l)),!0;case"gotpointercapture":return r=l.pointerId,El.set(r,zl(El.get(r)||null,e,t,n,a,l)),!0}return!1}function jp(e){var t=Ra(e.target);if(t!==null){var n=h(t);if(n!==null){if(t=n.tag,t===13){if(t=b(n),t!==null){e.blockedOn=t,xm(e.priority,function(){if(n.tag===13){var a=At();a=Vt(a);var l=Va(n,a);l!==null&&Mt(l,n,a),$u(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function to(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gu(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Qo=a,n.target.dispatchEvent(a),Qo=null}else return t=Da(n),t!==null&&yp(t),e.blockedOn=n,!1;t.shift()}return!0}function Cp(e,t,n){to(e)&&n.delete(t)}function E1(){Xu=!1,Kn!==null&&to(Kn)&&(Kn=null),Jn!==null&&to(Jn)&&(Jn=null),Wn!==null&&to(Wn)&&(Wn=null),Cl.forEach(Cp),El.forEach(Cp)}function no(e,t){e.blockedOn===t&&(e.blockedOn=null,Xu||(Xu=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,E1)))}var ao=null;function Ep(e){ao!==e&&(ao=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){ao===e&&(ao=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(Vu(a||n)===null)continue;break}var r=Da(n);r!==null&&(e.splice(t,3),t-=3,Vs(r,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function kl(e){function t(v){return no(v,e)}Kn!==null&&no(Kn,e),Jn!==null&&no(Jn,e),Wn!==null&&no(Wn,e),Cl.forEach(t),El.forEach(t);for(var n=0;n<Pn.length;n++){var a=Pn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Pn.length&&(n=Pn[0],n.blockedOn===null);)jp(n),n.blockedOn===null&&Pn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],r=n[a+1],f=l[gt]||null;if(typeof r=="function")f||Ep(n);else if(f){var p=null;if(r&&r.hasAttribute("formAction")){if(l=r,f=r[gt]||null)p=f.formAction;else if(Vu(l)!==null)continue}else p=f.action;typeof p=="function"?n[a+1]=p:(n.splice(a,3),a-=3),Ep(n)}}}function Zu(e){this._internalRoot=e}io.prototype.render=Zu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,a=At();bp(n,a,e,t,null,null)},io.prototype.unmount=Zu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bp(e.current,2,null,e,null,null),Hr(),t[Ma]=null}};function io(e){this._internalRoot=e}io.prototype.unstable_scheduleHydration=function(e){if(e){var t=Jl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pn.length&&t!==0&&t<Pn[n].priority;n++);Pn.splice(n,0,e),n===0&&jp(e)}};var zp=s.version;if(zp!=="19.1.0")throw Error(u(527,zp,"19.1.0"));J.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=x(t),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var z1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lo.isDisabled&&lo.supportsFiber)try{Wt=lo.inject(z1),it=lo}catch{}}return Al.createRoot=function(e,t){if(!d(e))throw Error(u(299));var n=!1,a="",l=qd,r=Gd,f=Vd,p=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(p=t.unstable_transitionCallbacks)),t=gp(e,1,!1,null,null,n,a,l,r,f,p,null),e[Ma]=t.current,Tu(e),new Zu(t)},Al.hydrateRoot=function(e,t,n){if(!d(e))throw Error(u(299));var a=!1,l="",r=qd,f=Gd,p=Vd,v=null,R=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(v=n.unstable_transitionCallbacks),n.formState!==void 0&&(R=n.formState)),t=gp(e,1,!0,t,n??null,a,l,r,f,p,v,R),t.context=xp(null),n=t.current,a=At(),a=Vt(a),l=_n(a),l.callback=null,Nn(n,l,a),n=a,t.current.lanes=n,Te(t,n),nn(t),e[Ma]=t.current,Tu(e),new io(t)},Al.version="19.1.0",Al}var Lp;function L1(){if(Lp)return Ju.exports;Lp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}return i(),Ju.exports=N1(),Ju.exports}var B1=L1();const U1=jh(B1);var Ml={},Bp;function H1(){if(Bp)return Ml;Bp=1,Object.defineProperty(Ml,"__esModule",{value:!0}),Ml.parse=b,Ml.serialize=m;const i=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,s=/^[\u0021-\u003A\u003C-\u007E]*$/,c=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,u=/^[\u0020-\u003A\u003D-\u007E]*$/,d=Object.prototype.toString,h=(()=>{const A=function(){};return A.prototype=Object.create(null),A})();function b(A,N){const D=new h,q=A.length;if(q<2)return D;const X=(N==null?void 0:N.decode)||E;let C=0;do{const M=A.indexOf("=",C);if(M===-1)break;const G=A.indexOf(";",C),Z=G===-1?q:G;if(M>Z){C=A.lastIndexOf(";",M-1)+1;continue}const P=w(A,C,M),V=x(A,M,P),Q=A.slice(P,V);if(D[Q]===void 0){let ge=w(A,M+1,Z),ue=x(A,Z,ge);const I=X(A.slice(ge,ue));D[Q]=I}C=Z+1}while(C<q);return D}function w(A,N,D){do{const q=A.charCodeAt(N);if(q!==32&&q!==9)return N}while(++N<D);return D}function x(A,N,D){for(;N>D;){const q=A.charCodeAt(--N);if(q!==32&&q!==9)return N+1}return D}function m(A,N,D){const q=(D==null?void 0:D.encode)||encodeURIComponent;if(!i.test(A))throw new TypeError(`argument name is invalid: ${A}`);const X=q(N);if(!s.test(X))throw new TypeError(`argument val is invalid: ${N}`);let C=A+"="+X;if(!D)return C;if(D.maxAge!==void 0){if(!Number.isInteger(D.maxAge))throw new TypeError(`option maxAge is invalid: ${D.maxAge}`);C+="; Max-Age="+D.maxAge}if(D.domain){if(!c.test(D.domain))throw new TypeError(`option domain is invalid: ${D.domain}`);C+="; Domain="+D.domain}if(D.path){if(!u.test(D.path))throw new TypeError(`option path is invalid: ${D.path}`);C+="; Path="+D.path}if(D.expires){if(!k(D.expires)||!Number.isFinite(D.expires.valueOf()))throw new TypeError(`option expires is invalid: ${D.expires}`);C+="; Expires="+D.expires.toUTCString()}if(D.httpOnly&&(C+="; HttpOnly"),D.secure&&(C+="; Secure"),D.partitioned&&(C+="; Partitioned"),D.priority)switch(typeof D.priority=="string"?D.priority.toLowerCase():void 0){case"low":C+="; Priority=Low";break;case"medium":C+="; Priority=Medium";break;case"high":C+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${D.priority}`)}if(D.sameSite)switch(typeof D.sameSite=="string"?D.sameSite.toLowerCase():D.sameSite){case!0:case"strict":C+="; SameSite=Strict";break;case"lax":C+="; SameSite=Lax";break;case"none":C+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${D.sameSite}`)}return C}function E(A){if(A.indexOf("%")===-1)return A;try{return decodeURIComponent(A)}catch{return A}}function k(A){return d.call(A)==="[object Date]"}return Ml}H1();var Up="popstate";function Y1(i={}){function s(u,d){let{pathname:h,search:b,hash:w}=u.location;return wc("",{pathname:h,search:b,hash:w},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function c(u,d){return typeof d=="string"?d:Hl(d)}return q1(s,c,null,i)}function Ye(i,s){if(i===!1||i===null||typeof i>"u")throw new Error(s)}function rn(i,s){if(!i){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function $1(){return Math.random().toString(36).substring(2,10)}function Hp(i,s){return{usr:i.state,key:i.key,idx:s}}function wc(i,s,c=null,u){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof s=="string"?zi(s):s,state:c,key:s&&s.key||u||$1()}}function Hl({pathname:i="/",search:s="",hash:c=""}){return s&&s!=="?"&&(i+=s.charAt(0)==="?"?s:"?"+s),c&&c!=="#"&&(i+=c.charAt(0)==="#"?c:"#"+c),i}function zi(i){let s={};if(i){let c=i.indexOf("#");c>=0&&(s.hash=i.substring(c),i=i.substring(0,c));let u=i.indexOf("?");u>=0&&(s.search=i.substring(u),i=i.substring(0,u)),i&&(s.pathname=i)}return s}function q1(i,s,c,u={}){let{window:d=document.defaultView,v5Compat:h=!1}=u,b=d.history,w="POP",x=null,m=E();m==null&&(m=0,b.replaceState({...b.state,idx:m},""));function E(){return(b.state||{idx:null}).idx}function k(){w="POP";let X=E(),C=X==null?null:X-m;m=X,x&&x({action:w,location:q.location,delta:C})}function A(X,C){w="PUSH";let M=wc(q.location,X,C);m=E()+1;let G=Hp(M,m),Z=q.createHref(M);try{b.pushState(G,"",Z)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;d.location.assign(Z)}h&&x&&x({action:w,location:q.location,delta:1})}function N(X,C){w="REPLACE";let M=wc(q.location,X,C);m=E();let G=Hp(M,m),Z=q.createHref(M);b.replaceState(G,"",Z),h&&x&&x({action:w,location:q.location,delta:0})}function D(X){return G1(X)}let q={get action(){return w},get location(){return i(d,b)},listen(X){if(x)throw new Error("A history only accepts one active listener");return d.addEventListener(Up,k),x=X,()=>{d.removeEventListener(Up,k),x=null}},createHref(X){return s(d,X)},createURL:D,encodeLocation(X){let C=D(X);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:A,replace:N,go(X){return b.go(X)}};return q}function G1(i,s=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),Ye(c,"No window.location.(origin|href) available to create URL");let u=typeof i=="string"?i:Hl(i);return u=u.replace(/ $/,"%20"),!s&&u.startsWith("//")&&(u=c+u),new URL(u,c)}function Ch(i,s,c="/"){return V1(i,s,c,!1)}function V1(i,s,c,u){let d=typeof s=="string"?zi(s):s,h=zn(d.pathname||"/",c);if(h==null)return null;let b=Eh(i);X1(b);let w=null;for(let x=0;w==null&&x<b.length;++x){let m=nx(h);w=ex(b[x],m,u)}return w}function Eh(i,s=[],c=[],u=""){let d=(h,b,w)=>{let x={relativePath:w===void 0?h.path||"":w,caseSensitive:h.caseSensitive===!0,childrenIndex:b,route:h};x.relativePath.startsWith("/")&&(Ye(x.relativePath.startsWith(u),`Absolute route path "${x.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(u.length));let m=En([u,x.relativePath]),E=c.concat(x);h.children&&h.children.length>0&&(Ye(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Eh(h.children,s,E,m)),!(h.path==null&&!h.index)&&s.push({path:m,score:F1(m,h.index),routesMeta:E})};return i.forEach((h,b)=>{var w;if(h.path===""||!((w=h.path)!=null&&w.includes("?")))d(h,b);else for(let x of zh(h.path))d(h,b,x)}),s}function zh(i){let s=i.split("/");if(s.length===0)return[];let[c,...u]=s,d=c.endsWith("?"),h=c.replace(/\?$/,"");if(u.length===0)return d?[h,""]:[h];let b=zh(u.join("/")),w=[];return w.push(...b.map(x=>x===""?h:[h,x].join("/"))),d&&w.push(...b),w.map(x=>i.startsWith("/")&&x===""?"/":x)}function X1(i){i.sort((s,c)=>s.score!==c.score?c.score-s.score:I1(s.routesMeta.map(u=>u.childrenIndex),c.routesMeta.map(u=>u.childrenIndex)))}var Z1=/^:[\w-]+$/,Q1=3,K1=2,J1=1,W1=10,P1=-2,Yp=i=>i==="*";function F1(i,s){let c=i.split("/"),u=c.length;return c.some(Yp)&&(u+=P1),s&&(u+=K1),c.filter(d=>!Yp(d)).reduce((d,h)=>d+(Z1.test(h)?Q1:h===""?J1:W1),u)}function I1(i,s){return i.length===s.length&&i.slice(0,-1).every((u,d)=>u===s[d])?i[i.length-1]-s[s.length-1]:0}function ex(i,s,c=!1){let{routesMeta:u}=i,d={},h="/",b=[];for(let w=0;w<u.length;++w){let x=u[w],m=w===u.length-1,E=h==="/"?s:s.slice(h.length)||"/",k=wo({path:x.relativePath,caseSensitive:x.caseSensitive,end:m},E),A=x.route;if(!k&&m&&c&&!u[u.length-1].route.index&&(k=wo({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},E)),!k)return null;Object.assign(d,k.params),b.push({params:d,pathname:En([h,k.pathname]),pathnameBase:rx(En([h,k.pathnameBase])),route:A}),k.pathnameBase!=="/"&&(h=En([h,k.pathnameBase]))}return b}function wo(i,s){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[c,u]=tx(i.path,i.caseSensitive,i.end),d=s.match(c);if(!d)return null;let h=d[0],b=h.replace(/(.)\/+$/,"$1"),w=d.slice(1);return{params:u.reduce((m,{paramName:E,isOptional:k},A)=>{if(E==="*"){let D=w[A]||"";b=h.slice(0,h.length-D.length).replace(/(.)\/+$/,"$1")}const N=w[A];return k&&!N?m[E]=void 0:m[E]=(N||"").replace(/%2F/g,"/"),m},{}),pathname:h,pathnameBase:b,pattern:i}}function tx(i,s=!1,c=!0){rn(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let u=[],d="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,w,x)=>(u.push({paramName:w,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(u.push({paramName:"*"}),d+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?d+="\\/*$":i!==""&&i!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,s?void 0:"i"),u]}function nx(i){try{return i.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return rn(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),i}}function zn(i,s){if(s==="/")return i;if(!i.toLowerCase().startsWith(s.toLowerCase()))return null;let c=s.endsWith("/")?s.length-1:s.length,u=i.charAt(c);return u&&u!=="/"?null:i.slice(c)||"/"}function ax(i,s="/"){let{pathname:c,search:u="",hash:d=""}=typeof i=="string"?zi(i):i;return{pathname:c?c.startsWith("/")?c:ix(c,s):s,search:ox(u),hash:sx(d)}}function ix(i,s){let c=s.replace(/\/+$/,"").split("/");return i.split("/").forEach(d=>{d===".."?c.length>1&&c.pop():d!=="."&&c.push(d)}),c.length>1?c.join("/"):"/"}function Iu(i,s,c,u){return`Cannot include a '${i}' character in a manually specified \`to.${s}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function lx(i){return i.filter((s,c)=>c===0||s.route.path&&s.route.path.length>0)}function kh(i){let s=lx(i);return s.map((c,u)=>u===s.length-1?c.pathname:c.pathnameBase)}function Th(i,s,c,u=!1){let d;typeof i=="string"?d=zi(i):(d={...i},Ye(!d.pathname||!d.pathname.includes("?"),Iu("?","pathname","search",d)),Ye(!d.pathname||!d.pathname.includes("#"),Iu("#","pathname","hash",d)),Ye(!d.search||!d.search.includes("#"),Iu("#","search","hash",d)));let h=i===""||d.pathname==="",b=h?"/":d.pathname,w;if(b==null)w=c;else{let k=s.length-1;if(!u&&b.startsWith("..")){let A=b.split("/");for(;A[0]==="..";)A.shift(),k-=1;d.pathname=A.join("/")}w=k>=0?s[k]:"/"}let x=ax(d,w),m=b&&b!=="/"&&b.endsWith("/"),E=(h||b===".")&&c.endsWith("/");return!x.pathname.endsWith("/")&&(m||E)&&(x.pathname+="/"),x}var En=i=>i.join("/").replace(/\/\/+/g,"/"),rx=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),ox=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,sx=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function ux(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var Ah=["POST","PUT","PATCH","DELETE"];new Set(Ah);var cx=["GET",...Ah];new Set(cx);var ki=j.createContext(null);ki.displayName="DataRouter";var ko=j.createContext(null);ko.displayName="DataRouterState";var Mh=j.createContext({isTransitioning:!1});Mh.displayName="ViewTransition";var fx=j.createContext(new Map);fx.displayName="Fetchers";var dx=j.createContext(null);dx.displayName="Await";var on=j.createContext(null);on.displayName="Navigation";var $l=j.createContext(null);$l.displayName="Location";var kn=j.createContext({outlet:null,matches:[],isDataRoute:!1});kn.displayName="Route";var Dc=j.createContext(null);Dc.displayName="RouteError";function px(i,{relative:s}={}){Ye(ql(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:u}=j.useContext(on),{hash:d,pathname:h,search:b}=Vl(i,{relative:s}),w=h;return c!=="/"&&(w=h==="/"?c:En([c,h])),u.createHref({pathname:w,search:b,hash:d})}function ql(){return j.useContext($l)!=null}function ta(){return Ye(ql(),"useLocation() may be used only in the context of a <Router> component."),j.useContext($l).location}var Rh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Dh(i){j.useContext(on).static||j.useLayoutEffect(i)}function Gl(){let{isDataRoute:i}=j.useContext(kn);return i?zx():hx()}function hx(){Ye(ql(),"useNavigate() may be used only in the context of a <Router> component.");let i=j.useContext(ki),{basename:s,navigator:c}=j.useContext(on),{matches:u}=j.useContext(kn),{pathname:d}=ta(),h=JSON.stringify(kh(u)),b=j.useRef(!1);return Dh(()=>{b.current=!0}),j.useCallback((x,m={})=>{if(rn(b.current,Rh),!b.current)return;if(typeof x=="number"){c.go(x);return}let E=Th(x,JSON.parse(h),d,m.relative==="path");i==null&&s!=="/"&&(E.pathname=E.pathname==="/"?s:En([s,E.pathname])),(m.replace?c.replace:c.push)(E,m.state,m)},[s,c,h,d,i])}j.createContext(null);function Vl(i,{relative:s}={}){let{matches:c}=j.useContext(kn),{pathname:u}=ta(),d=JSON.stringify(kh(c));return j.useMemo(()=>Th(i,JSON.parse(d),u,s==="path"),[i,d,u,s])}function mx(i,s){return Oh(i,s)}function Oh(i,s,c,u){var C;Ye(ql(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=j.useContext(on),{matches:h}=j.useContext(kn),b=h[h.length-1],w=b?b.params:{},x=b?b.pathname:"/",m=b?b.pathnameBase:"/",E=b&&b.route;{let M=E&&E.path||"";_h(x,!E||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let k=ta(),A;if(s){let M=typeof s=="string"?zi(s):s;Ye(m==="/"||((C=M.pathname)==null?void 0:C.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${M.pathname}" was given in the \`location\` prop.`),A=M}else A=k;let N=A.pathname||"/",D=N;if(m!=="/"){let M=m.replace(/^\//,"").split("/");D="/"+N.replace(/^\//,"").split("/").slice(M.length).join("/")}let q=Ch(i,{pathname:D});rn(E||q!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),rn(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let X=yx(q&&q.map(M=>Object.assign({},M,{params:Object.assign({},w,M.params),pathname:En([m,d.encodeLocation?d.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?m:En([m,d.encodeLocation?d.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),h,c,u);return s&&X?j.createElement($l.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...A},navigationType:"POP"}},X):X}function gx(){let i=Ex(),s=ux(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),c=i instanceof Error?i.stack:null,u="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:u},h={padding:"2px 4px",backgroundColor:u},b=null;return console.error("Error handled by React Router default ErrorBoundary:",i),b=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:h},"ErrorBoundary")," or"," ",j.createElement("code",{style:h},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},s),c?j.createElement("pre",{style:d},c):null,b)}var xx=j.createElement(gx,null),bx=class extends j.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,s){return s.location!==i.location||s.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:s.error,location:s.location,revalidation:i.revalidation||s.revalidation}}componentDidCatch(i,s){console.error("React Router caught the following error during render",i,s)}render(){return this.state.error!==void 0?j.createElement(kn.Provider,{value:this.props.routeContext},j.createElement(Dc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function vx({routeContext:i,match:s,children:c}){let u=j.useContext(ki);return u&&u.static&&u.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=s.route.id),j.createElement(kn.Provider,{value:i},c)}function yx(i,s=[],c=null,u=null){if(i==null){if(!c)return null;if(c.errors)i=c.matches;else if(s.length===0&&!c.initialized&&c.matches.length>0)i=c.matches;else return null}let d=i,h=c==null?void 0:c.errors;if(h!=null){let x=d.findIndex(m=>m.route.id&&(h==null?void 0:h[m.route.id])!==void 0);Ye(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),d=d.slice(0,Math.min(d.length,x+1))}let b=!1,w=-1;if(c)for(let x=0;x<d.length;x++){let m=d[x];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(w=x),m.route.id){let{loaderData:E,errors:k}=c,A=m.route.loader&&!E.hasOwnProperty(m.route.id)&&(!k||k[m.route.id]===void 0);if(m.route.lazy||A){b=!0,w>=0?d=d.slice(0,w+1):d=[d[0]];break}}}return d.reduceRight((x,m,E)=>{let k,A=!1,N=null,D=null;c&&(k=h&&m.route.id?h[m.route.id]:void 0,N=m.route.errorElement||xx,b&&(w<0&&E===0?(_h("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,D=null):w===E&&(A=!0,D=m.route.hydrateFallbackElement||null)));let q=s.concat(d.slice(0,E+1)),X=()=>{let C;return k?C=N:A?C=D:m.route.Component?C=j.createElement(m.route.Component,null):m.route.element?C=m.route.element:C=x,j.createElement(vx,{match:m,routeContext:{outlet:x,matches:q,isDataRoute:c!=null},children:C})};return c&&(m.route.ErrorBoundary||m.route.errorElement||E===0)?j.createElement(bx,{location:c.location,revalidation:c.revalidation,component:N,error:k,children:X(),routeContext:{outlet:null,matches:q,isDataRoute:!0}}):X()},null)}function Oc(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wx(i){let s=j.useContext(ki);return Ye(s,Oc(i)),s}function Sx(i){let s=j.useContext(ko);return Ye(s,Oc(i)),s}function jx(i){let s=j.useContext(kn);return Ye(s,Oc(i)),s}function _c(i){let s=jx(i),c=s.matches[s.matches.length-1];return Ye(c.route.id,`${i} can only be used on routes that contain a unique "id"`),c.route.id}function Cx(){return _c("useRouteId")}function Ex(){var u;let i=j.useContext(Dc),s=Sx("useRouteError"),c=_c("useRouteError");return i!==void 0?i:(u=s.errors)==null?void 0:u[c]}function zx(){let{router:i}=wx("useNavigate"),s=_c("useNavigate"),c=j.useRef(!1);return Dh(()=>{c.current=!0}),j.useCallback(async(d,h={})=>{rn(c.current,Rh),c.current&&(typeof d=="number"?i.navigate(d):await i.navigate(d,{fromRouteId:s,...h}))},[i,s])}var $p={};function _h(i,s,c){!s&&!$p[i]&&($p[i]=!0,rn(!1,c))}j.memo(kx);function kx({routes:i,future:s,state:c}){return Oh(i,void 0,c,s)}function In(i){Ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Tx({basename:i="/",children:s=null,location:c,navigationType:u="POP",navigator:d,static:h=!1}){Ye(!ql(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=i.replace(/^\/*/,"/"),w=j.useMemo(()=>({basename:b,navigator:d,static:h,future:{}}),[b,d,h]);typeof c=="string"&&(c=zi(c));let{pathname:x="/",search:m="",hash:E="",state:k=null,key:A="default"}=c,N=j.useMemo(()=>{let D=zn(x,b);return D==null?null:{location:{pathname:D,search:m,hash:E,state:k,key:A},navigationType:u}},[b,x,m,E,k,A,u]);return rn(N!=null,`<Router basename="${b}"> is not able to match the URL "${x}${m}${E}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:j.createElement(on.Provider,{value:w},j.createElement($l.Provider,{children:s,value:N}))}function Ax({children:i,location:s}){return mx(Sc(i),s)}function Sc(i,s=[]){let c=[];return j.Children.forEach(i,(u,d)=>{if(!j.isValidElement(u))return;let h=[...s,d];if(u.type===j.Fragment){c.push.apply(c,Sc(u.props.children,h));return}Ye(u.type===In,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ye(!u.props.index||!u.props.children,"An index route cannot have child routes.");let b={id:u.props.id||h.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(b.children=Sc(u.props.children,h)),c.push(b)}),c}var ho="get",mo="application/x-www-form-urlencoded";function To(i){return i!=null&&typeof i.tagName=="string"}function Mx(i){return To(i)&&i.tagName.toLowerCase()==="button"}function Rx(i){return To(i)&&i.tagName.toLowerCase()==="form"}function Dx(i){return To(i)&&i.tagName.toLowerCase()==="input"}function Ox(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function _x(i,s){return i.button===0&&(!s||s==="_self")&&!Ox(i)}var ro=null;function Nx(){if(ro===null)try{new FormData(document.createElement("form"),0),ro=!1}catch{ro=!0}return ro}var Lx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ec(i){return i!=null&&!Lx.has(i)?(rn(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${mo}"`),null):i}function Bx(i,s){let c,u,d,h,b;if(Rx(i)){let w=i.getAttribute("action");u=w?zn(w,s):null,c=i.getAttribute("method")||ho,d=ec(i.getAttribute("enctype"))||mo,h=new FormData(i)}else if(Mx(i)||Dx(i)&&(i.type==="submit"||i.type==="image")){let w=i.form;if(w==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=i.getAttribute("formaction")||w.getAttribute("action");if(u=x?zn(x,s):null,c=i.getAttribute("formmethod")||w.getAttribute("method")||ho,d=ec(i.getAttribute("formenctype"))||ec(w.getAttribute("enctype"))||mo,h=new FormData(w,i),!Nx()){let{name:m,type:E,value:k}=i;if(E==="image"){let A=m?`${m}.`:"";h.append(`${A}x`,"0"),h.append(`${A}y`,"0")}else m&&h.append(m,k)}}else{if(To(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=ho,u=null,d=mo,b=i}return h&&d==="text/plain"&&(b=h,h=void 0),{action:u,method:c.toLowerCase(),encType:d,formData:h,body:b}}function Nc(i,s){if(i===!1||i===null||typeof i>"u")throw new Error(s)}async function Ux(i,s){if(i.id in s)return s[i.id];try{let c=await import(i.module);return s[i.id]=c,c}catch(c){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Hx(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Yx(i,s,c){let u=await Promise.all(i.map(async d=>{let h=s.routes[d.route.id];if(h){let b=await Ux(h,c);return b.links?b.links():[]}return[]}));return Vx(u.flat(1).filter(Hx).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function qp(i,s,c,u,d,h){let b=(x,m)=>c[m]?x.route.id!==c[m].route.id:!0,w=(x,m)=>{var E;return c[m].pathname!==x.pathname||((E=c[m].route.path)==null?void 0:E.endsWith("*"))&&c[m].params["*"]!==x.params["*"]};return h==="assets"?s.filter((x,m)=>b(x,m)||w(x,m)):h==="data"?s.filter((x,m)=>{var k;let E=u.routes[x.route.id];if(!E||!E.hasLoader)return!1;if(b(x,m)||w(x,m))return!0;if(x.route.shouldRevalidate){let A=x.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:((k=c[0])==null?void 0:k.params)||{},nextUrl:new URL(i,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof A=="boolean")return A}return!0}):[]}function $x(i,s,{includeHydrateFallback:c}={}){return qx(i.map(u=>{let d=s.routes[u.route.id];if(!d)return[];let h=[d.module];return d.clientActionModule&&(h=h.concat(d.clientActionModule)),d.clientLoaderModule&&(h=h.concat(d.clientLoaderModule)),c&&d.hydrateFallbackModule&&(h=h.concat(d.hydrateFallbackModule)),d.imports&&(h=h.concat(d.imports)),h}).flat(1))}function qx(i){return[...new Set(i)]}function Gx(i){let s={},c=Object.keys(i).sort();for(let u of c)s[u]=i[u];return s}function Vx(i,s){let c=new Set;return new Set(s),i.reduce((u,d)=>{let h=JSON.stringify(Gx(d));return c.has(h)||(c.add(h),u.push({key:h,link:d})),u},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Xx=new Set([100,101,204,205]);function Zx(i,s){let c=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return c.pathname==="/"?c.pathname="_root.data":s&&zn(c.pathname,s)==="/"?c.pathname=`${s.replace(/\/$/,"")}/_root.data`:c.pathname=`${c.pathname.replace(/\/$/,"")}.data`,c}function Nh(){let i=j.useContext(ki);return Nc(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Qx(){let i=j.useContext(ko);return Nc(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Lc=j.createContext(void 0);Lc.displayName="FrameworkContext";function Lh(){let i=j.useContext(Lc);return Nc(i,"You must render this element inside a <HydratedRouter> element"),i}function Kx(i,s){let c=j.useContext(Lc),[u,d]=j.useState(!1),[h,b]=j.useState(!1),{onFocus:w,onBlur:x,onMouseEnter:m,onMouseLeave:E,onTouchStart:k}=s,A=j.useRef(null);j.useEffect(()=>{if(i==="render"&&b(!0),i==="viewport"){let q=C=>{C.forEach(M=>{b(M.isIntersecting)})},X=new IntersectionObserver(q,{threshold:.5});return A.current&&X.observe(A.current),()=>{X.disconnect()}}},[i]),j.useEffect(()=>{if(u){let q=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout(q)}}},[u]);let N=()=>{d(!0)},D=()=>{d(!1),b(!1)};return c?i!=="intent"?[h,A,{}]:[h,A,{onFocus:Rl(w,N),onBlur:Rl(x,D),onMouseEnter:Rl(m,N),onMouseLeave:Rl(E,D),onTouchStart:Rl(k,N)}]:[!1,A,{}]}function Rl(i,s){return c=>{i&&i(c),c.defaultPrevented||s(c)}}function Jx({page:i,...s}){let{router:c}=Nh(),u=j.useMemo(()=>Ch(c.routes,i,c.basename),[c.routes,i,c.basename]);return u?j.createElement(Px,{page:i,matches:u,...s}):null}function Wx(i){let{manifest:s,routeModules:c}=Lh(),[u,d]=j.useState([]);return j.useEffect(()=>{let h=!1;return Yx(i,s,c).then(b=>{h||d(b)}),()=>{h=!0}},[i,s,c]),u}function Px({page:i,matches:s,...c}){let u=ta(),{manifest:d,routeModules:h}=Lh(),{basename:b}=Nh(),{loaderData:w,matches:x}=Qx(),m=j.useMemo(()=>qp(i,s,x,d,u,"data"),[i,s,x,d,u]),E=j.useMemo(()=>qp(i,s,x,d,u,"assets"),[i,s,x,d,u]),k=j.useMemo(()=>{if(i===u.pathname+u.search+u.hash)return[];let D=new Set,q=!1;if(s.forEach(C=>{var G;let M=d.routes[C.route.id];!M||!M.hasLoader||(!m.some(Z=>Z.route.id===C.route.id)&&C.route.id in w&&((G=h[C.route.id])!=null&&G.shouldRevalidate)||M.hasClientLoader?q=!0:D.add(C.route.id))}),D.size===0)return[];let X=Zx(i,b);return q&&D.size>0&&X.searchParams.set("_routes",s.filter(C=>D.has(C.route.id)).map(C=>C.route.id).join(",")),[X.pathname+X.search]},[b,w,u,d,m,s,i,h]),A=j.useMemo(()=>$x(E,d),[E,d]),N=Wx(E);return j.createElement(j.Fragment,null,k.map(D=>j.createElement("link",{key:D,rel:"prefetch",as:"fetch",href:D,...c})),A.map(D=>j.createElement("link",{key:D,rel:"modulepreload",href:D,...c})),N.map(({key:D,link:q})=>j.createElement("link",{key:D,...q})))}function Fx(...i){return s=>{i.forEach(c=>{typeof c=="function"?c(s):c!=null&&(c.current=s)})}}var Bh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Bh&&(window.__reactRouterVersion="7.6.2")}catch{}function Ix({basename:i,children:s,window:c}){let u=j.useRef();u.current==null&&(u.current=Y1({window:c,v5Compat:!0}));let d=u.current,[h,b]=j.useState({action:d.action,location:d.location}),w=j.useCallback(x=>{j.startTransition(()=>b(x))},[b]);return j.useLayoutEffect(()=>d.listen(w),[d,w]),j.createElement(Tx,{basename:i,children:s,location:h.location,navigationType:h.action,navigator:d})}var Uh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,an=j.forwardRef(function({onClick:s,discover:c="render",prefetch:u="none",relative:d,reloadDocument:h,replace:b,state:w,target:x,to:m,preventScrollReset:E,viewTransition:k,...A},N){let{basename:D}=j.useContext(on),q=typeof m=="string"&&Uh.test(m),X,C=!1;if(typeof m=="string"&&q&&(X=m,Bh))try{let ue=new URL(window.location.href),I=m.startsWith("//")?new URL(ue.protocol+m):new URL(m),ye=zn(I.pathname,D);I.origin===ue.origin&&ye!=null?m=ye+I.search+I.hash:C=!0}catch{rn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let M=px(m,{relative:d}),[G,Z,P]=Kx(u,A),V=a2(m,{replace:b,state:w,target:x,preventScrollReset:E,relative:d,viewTransition:k});function Q(ue){s&&s(ue),ue.defaultPrevented||V(ue)}let ge=j.createElement("a",{...A,...P,href:X||M,onClick:C||h?s:Q,ref:Fx(N,Z),target:x,"data-discover":!q&&c==="render"?"true":void 0});return G&&!q?j.createElement(j.Fragment,null,ge,j.createElement(Jx,{page:M})):ge});an.displayName="Link";var e2=j.forwardRef(function({"aria-current":s="page",caseSensitive:c=!1,className:u="",end:d=!1,style:h,to:b,viewTransition:w,children:x,...m},E){let k=Vl(b,{relative:m.relative}),A=ta(),N=j.useContext(ko),{navigator:D,basename:q}=j.useContext(on),X=N!=null&&s2(k)&&w===!0,C=D.encodeLocation?D.encodeLocation(k).pathname:k.pathname,M=A.pathname,G=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;c||(M=M.toLowerCase(),G=G?G.toLowerCase():null,C=C.toLowerCase()),G&&q&&(G=zn(G,q)||G);const Z=C!=="/"&&C.endsWith("/")?C.length-1:C.length;let P=M===C||!d&&M.startsWith(C)&&M.charAt(Z)==="/",V=G!=null&&(G===C||!d&&G.startsWith(C)&&G.charAt(C.length)==="/"),Q={isActive:P,isPending:V,isTransitioning:X},ge=P?s:void 0,ue;typeof u=="function"?ue=u(Q):ue=[u,P?"active":null,V?"pending":null,X?"transitioning":null].filter(Boolean).join(" ");let I=typeof h=="function"?h(Q):h;return j.createElement(an,{...m,"aria-current":ge,className:ue,ref:E,style:I,to:b,viewTransition:w},typeof x=="function"?x(Q):x)});e2.displayName="NavLink";var t2=j.forwardRef(({discover:i="render",fetcherKey:s,navigate:c,reloadDocument:u,replace:d,state:h,method:b=ho,action:w,onSubmit:x,relative:m,preventScrollReset:E,viewTransition:k,...A},N)=>{let D=r2(),q=o2(w,{relative:m}),X=b.toLowerCase()==="get"?"get":"post",C=typeof w=="string"&&Uh.test(w),M=G=>{if(x&&x(G),G.defaultPrevented)return;G.preventDefault();let Z=G.nativeEvent.submitter,P=(Z==null?void 0:Z.getAttribute("formmethod"))||b;D(Z||G.currentTarget,{fetcherKey:s,method:P,navigate:c,replace:d,state:h,relative:m,preventScrollReset:E,viewTransition:k})};return j.createElement("form",{ref:N,method:X,action:q,onSubmit:u?x:M,...A,"data-discover":!C&&i==="render"?"true":void 0})});t2.displayName="Form";function n2(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Hh(i){let s=j.useContext(ki);return Ye(s,n2(i)),s}function a2(i,{target:s,replace:c,state:u,preventScrollReset:d,relative:h,viewTransition:b}={}){let w=Gl(),x=ta(),m=Vl(i,{relative:h});return j.useCallback(E=>{if(_x(E,s)){E.preventDefault();let k=c!==void 0?c:Hl(x)===Hl(m);w(i,{replace:k,state:u,preventScrollReset:d,relative:h,viewTransition:b})}},[x,w,m,c,u,s,i,d,h,b])}var i2=0,l2=()=>`__${String(++i2)}__`;function r2(){let{router:i}=Hh("useSubmit"),{basename:s}=j.useContext(on),c=Cx();return j.useCallback(async(u,d={})=>{let{action:h,method:b,encType:w,formData:x,body:m}=Bx(u,s);if(d.navigate===!1){let E=d.fetcherKey||l2();await i.fetch(E,c,d.action||h,{preventScrollReset:d.preventScrollReset,formData:x,body:m,formMethod:d.method||b,formEncType:d.encType||w,flushSync:d.flushSync})}else await i.navigate(d.action||h,{preventScrollReset:d.preventScrollReset,formData:x,body:m,formMethod:d.method||b,formEncType:d.encType||w,replace:d.replace,state:d.state,fromRouteId:c,flushSync:d.flushSync,viewTransition:d.viewTransition})},[i,s,c])}function o2(i,{relative:s}={}){let{basename:c}=j.useContext(on),u=j.useContext(kn);Ye(u,"useFormAction must be used inside a RouteContext");let[d]=u.matches.slice(-1),h={...Vl(i||".",{relative:s})},b=ta();if(i==null){h.search=b.search;let w=new URLSearchParams(h.search),x=w.getAll("index");if(x.some(E=>E==="")){w.delete("index"),x.filter(k=>k).forEach(k=>w.append("index",k));let E=w.toString();h.search=E?`?${E}`:""}}return(!i||i===".")&&d.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(h.pathname=h.pathname==="/"?c:En([c,h.pathname])),Hl(h)}function s2(i,s={}){let c=j.useContext(Mh);Ye(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Hh("useViewTransitionState"),d=Vl(i,{relative:s.relative});if(!c.isTransitioning)return!1;let h=zn(c.currentLocation.pathname,u)||c.currentLocation.pathname,b=zn(c.nextLocation.pathname,u)||c.nextLocation.pathname;return wo(d.pathname,b)!=null||wo(d.pathname,h)!=null}[...Xx];const Yh=j.createContext(),Ti=()=>{const i=j.useContext(Yh);if(!i)throw new Error("useAuth must be used within an AuthProvider");return i},u2=({children:i})=>{const[s,c]=j.useState(null),[u,d]=j.useState(!0),[h,b]=j.useState({isVisible:!1,message:"",type:"success"}),w={email:"john.doe@gmail.com",password:"password123"},x={id:"user123",email:"john.doe@gmail.com",firstName:"John",lastName:"Doe",name:"John Doe",avatar:"https://ui-avatars.com/api/?name=John+Doe&background=29ba9b&color=fff&size=40",roles:["user"],joinDate:"2024-01-15",isVerified:!0};j.useEffect(()=>{const C=localStorage.getItem("user"),M=localStorage.getItem("token");C&&M&&c(JSON.parse(C)),d(!1)},[]);const m=(C,M="success")=>{b({isVisible:!0,message:C,type:M})},E=()=>{b(C=>({...C,isVisible:!1}))},k=(C,M)=>C===w.email&&M===w.password,A=(C,M)=>{localStorage.setItem("user",JSON.stringify(C)),localStorage.setItem("token",M),c(C),m(`Welcome back, ${C.firstName}!`,"success")},X={user:s,login:A,loginWithCredentials:(C,M)=>k(C,M)?(A(x,"dummy-jwt-token-12345"),{success:!0}):{success:!1,error:"Invalid email or password. Please try again."},logout:()=>{localStorage.removeItem("user"),localStorage.removeItem("token"),c(null),m("User logged out","info")},loginWithDummyData:()=>{A(x,"dummy-jwt-token-12345")},authenticate:k,loading:u,isAuthenticated:!!s,notification:h,showNotification:m,hideNotification:E,dummyCredentials:w};return o.jsx(Yh.Provider,{value:X,children:i})};var wt=function(){return wt=Object.assign||function(s){for(var c,u=1,d=arguments.length;u<d;u++){c=arguments[u];for(var h in c)Object.prototype.hasOwnProperty.call(c,h)&&(s[h]=c[h])}return s},wt.apply(this,arguments)};function So(i,s,c){if(c||arguments.length===2)for(var u=0,d=s.length,h;u<d;u++)(h||!(u in s))&&(h||(h=Array.prototype.slice.call(s,0,u)),h[u]=s[u]);return i.concat(h||Array.prototype.slice.call(s))}var Be="-ms-",Ul="-moz-",ke="-webkit-",$h="comm",Ao="rule",Bc="decl",c2="@import",qh="@keyframes",f2="@layer",Gh=Math.abs,Uc=String.fromCharCode,jc=Object.assign;function d2(i,s){return at(i,0)^45?(((s<<2^at(i,0))<<2^at(i,1))<<2^at(i,2))<<2^at(i,3):0}function Vh(i){return i.trim()}function Cn(i,s){return(i=s.exec(i))?i[0]:i}function de(i,s,c){return i.replace(s,c)}function go(i,s,c){return i.indexOf(s,c)}function at(i,s){return i.charCodeAt(s)|0}function wi(i,s,c){return i.slice(s,c)}function ln(i){return i.length}function Xh(i){return i.length}function Bl(i,s){return s.push(i),i}function p2(i,s){return i.map(s).join("")}function Gp(i,s){return i.filter(function(c){return!Cn(c,s)})}var Mo=1,Si=1,Zh=0,$t=0,Je=0,Ai="";function Ro(i,s,c,u,d,h,b,w){return{value:i,root:s,parent:c,type:u,props:d,children:h,line:Mo,column:Si,length:b,return:"",siblings:w}}function ea(i,s){return jc(Ro("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},s)}function mi(i){for(;i.root;)i=ea(i.root,{children:[i]});Bl(i,i.siblings)}function h2(){return Je}function m2(){return Je=$t>0?at(Ai,--$t):0,Si--,Je===10&&(Si=1,Mo--),Je}function Kt(){return Je=$t<Zh?at(Ai,$t++):0,Si++,Je===10&&(Si=1,Mo++),Je}function Ca(){return at(Ai,$t)}function xo(){return $t}function Do(i,s){return wi(Ai,i,s)}function Cc(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function g2(i){return Mo=Si=1,Zh=ln(Ai=i),$t=0,[]}function x2(i){return Ai="",i}function tc(i){return Vh(Do($t-1,Ec(i===91?i+2:i===40?i+1:i)))}function b2(i){for(;(Je=Ca())&&Je<33;)Kt();return Cc(i)>2||Cc(Je)>3?"":" "}function v2(i,s){for(;--s&&Kt()&&!(Je<48||Je>102||Je>57&&Je<65||Je>70&&Je<97););return Do(i,xo()+(s<6&&Ca()==32&&Kt()==32))}function Ec(i){for(;Kt();)switch(Je){case i:return $t;case 34:case 39:i!==34&&i!==39&&Ec(Je);break;case 40:i===41&&Ec(i);break;case 92:Kt();break}return $t}function y2(i,s){for(;Kt()&&i+Je!==57;)if(i+Je===84&&Ca()===47)break;return"/*"+Do(s,$t-1)+"*"+Uc(i===47?i:Kt())}function w2(i){for(;!Cc(Ca());)Kt();return Do(i,$t)}function S2(i){return x2(bo("",null,null,null,[""],i=g2(i),0,[0],i))}function bo(i,s,c,u,d,h,b,w,x){for(var m=0,E=0,k=b,A=0,N=0,D=0,q=1,X=1,C=1,M=0,G="",Z=d,P=h,V=u,Q=G;X;)switch(D=M,M=Kt()){case 40:if(D!=108&&at(Q,k-1)==58){go(Q+=de(tc(M),"&","&\f"),"&\f",Gh(m?w[m-1]:0))!=-1&&(C=-1);break}case 34:case 39:case 91:Q+=tc(M);break;case 9:case 10:case 13:case 32:Q+=b2(D);break;case 92:Q+=v2(xo()-1,7);continue;case 47:switch(Ca()){case 42:case 47:Bl(j2(y2(Kt(),xo()),s,c,x),x);break;default:Q+="/"}break;case 123*q:w[m++]=ln(Q)*C;case 125*q:case 59:case 0:switch(M){case 0:case 125:X=0;case 59+E:C==-1&&(Q=de(Q,/\f/g,"")),N>0&&ln(Q)-k&&Bl(N>32?Xp(Q+";",u,c,k-1,x):Xp(de(Q," ","")+";",u,c,k-2,x),x);break;case 59:Q+=";";default:if(Bl(V=Vp(Q,s,c,m,E,d,w,G,Z=[],P=[],k,h),h),M===123)if(E===0)bo(Q,s,V,V,Z,h,k,w,P);else switch(A===99&&at(Q,3)===110?100:A){case 100:case 108:case 109:case 115:bo(i,V,V,u&&Bl(Vp(i,V,V,0,0,d,w,G,d,Z=[],k,P),P),d,P,k,w,u?Z:P);break;default:bo(Q,V,V,V,[""],P,0,w,P)}}m=E=N=0,q=C=1,G=Q="",k=b;break;case 58:k=1+ln(Q),N=D;default:if(q<1){if(M==123)--q;else if(M==125&&q++==0&&m2()==125)continue}switch(Q+=Uc(M),M*q){case 38:C=E>0?1:(Q+="\f",-1);break;case 44:w[m++]=(ln(Q)-1)*C,C=1;break;case 64:Ca()===45&&(Q+=tc(Kt())),A=Ca(),E=k=ln(G=Q+=w2(xo())),M++;break;case 45:D===45&&ln(Q)==2&&(q=0)}}return h}function Vp(i,s,c,u,d,h,b,w,x,m,E,k){for(var A=d-1,N=d===0?h:[""],D=Xh(N),q=0,X=0,C=0;q<u;++q)for(var M=0,G=wi(i,A+1,A=Gh(X=b[q])),Z=i;M<D;++M)(Z=Vh(X>0?N[M]+" "+G:de(G,/&\f/g,N[M])))&&(x[C++]=Z);return Ro(i,s,c,d===0?Ao:w,x,m,E,k)}function j2(i,s,c,u){return Ro(i,s,c,$h,Uc(h2()),wi(i,2,-2),0,u)}function Xp(i,s,c,u,d){return Ro(i,s,c,Bc,wi(i,0,u),wi(i,u+1,-1),u,d)}function Qh(i,s,c){switch(d2(i,s)){case 5103:return ke+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ke+i+i;case 4789:return Ul+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return ke+i+Ul+i+Be+i+i;case 5936:switch(at(i,s+11)){case 114:return ke+i+Be+de(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return ke+i+Be+de(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return ke+i+Be+de(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return ke+i+Be+i+i;case 6165:return ke+i+Be+"flex-"+i+i;case 5187:return ke+i+de(i,/(\w+).+(:[^]+)/,ke+"box-$1$2"+Be+"flex-$1$2")+i;case 5443:return ke+i+Be+"flex-item-"+de(i,/flex-|-self/g,"")+(Cn(i,/flex-|baseline/)?"":Be+"grid-row-"+de(i,/flex-|-self/g,""))+i;case 4675:return ke+i+Be+"flex-line-pack"+de(i,/align-content|flex-|-self/g,"")+i;case 5548:return ke+i+Be+de(i,"shrink","negative")+i;case 5292:return ke+i+Be+de(i,"basis","preferred-size")+i;case 6060:return ke+"box-"+de(i,"-grow","")+ke+i+Be+de(i,"grow","positive")+i;case 4554:return ke+de(i,/([^-])(transform)/g,"$1"+ke+"$2")+i;case 6187:return de(de(de(i,/(zoom-|grab)/,ke+"$1"),/(image-set)/,ke+"$1"),i,"")+i;case 5495:case 3959:return de(i,/(image-set\([^]*)/,ke+"$1$`$1");case 4968:return de(de(i,/(.+:)(flex-)?(.*)/,ke+"box-pack:$3"+Be+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ke+i+i;case 4200:if(!Cn(i,/flex-|baseline/))return Be+"grid-column-align"+wi(i,s)+i;break;case 2592:case 3360:return Be+de(i,"template-","")+i;case 4384:case 3616:return c&&c.some(function(u,d){return s=d,Cn(u.props,/grid-\w+-end/)})?~go(i+(c=c[s].value),"span",0)?i:Be+de(i,"-start","")+i+Be+"grid-row-span:"+(~go(c,"span",0)?Cn(c,/\d+/):+Cn(c,/\d+/)-+Cn(i,/\d+/))+";":Be+de(i,"-start","")+i;case 4896:case 4128:return c&&c.some(function(u){return Cn(u.props,/grid-\w+-start/)})?i:Be+de(de(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return de(i,/(.+)-inline(.+)/,ke+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ln(i)-1-s>6)switch(at(i,s+1)){case 109:if(at(i,s+4)!==45)break;case 102:return de(i,/(.+:)(.+)-([^]+)/,"$1"+ke+"$2-$3$1"+Ul+(at(i,s+3)==108?"$3":"$2-$3"))+i;case 115:return~go(i,"stretch",0)?Qh(de(i,"stretch","fill-available"),s,c)+i:i}break;case 5152:case 5920:return de(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,d,h,b,w,x,m){return Be+d+":"+h+m+(b?Be+d+"-span:"+(w?x:+x-+h)+m:"")+i});case 4949:if(at(i,s+6)===121)return de(i,":",":"+ke)+i;break;case 6444:switch(at(i,at(i,14)===45?18:11)){case 120:return de(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ke+(at(i,14)===45?"inline-":"")+"box$3$1"+ke+"$2$3$1"+Be+"$2box$3")+i;case 100:return de(i,":",":"+Be)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return de(i,"scroll-","scroll-snap-")+i}return i}function jo(i,s){for(var c="",u=0;u<i.length;u++)c+=s(i[u],u,i,s)||"";return c}function C2(i,s,c,u){switch(i.type){case f2:if(i.children.length)break;case c2:case Bc:return i.return=i.return||i.value;case $h:return"";case qh:return i.return=i.value+"{"+jo(i.children,u)+"}";case Ao:if(!ln(i.value=i.props.join(",")))return""}return ln(c=jo(i.children,u))?i.return=i.value+"{"+c+"}":""}function E2(i){var s=Xh(i);return function(c,u,d,h){for(var b="",w=0;w<s;w++)b+=i[w](c,u,d,h)||"";return b}}function z2(i){return function(s){s.root||(s=s.return)&&i(s)}}function k2(i,s,c,u){if(i.length>-1&&!i.return)switch(i.type){case Bc:i.return=Qh(i.value,i.length,c);return;case qh:return jo([ea(i,{value:de(i.value,"@","@"+ke)})],u);case Ao:if(i.length)return p2(c=i.props,function(d){switch(Cn(d,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":mi(ea(i,{props:[de(d,/:(read-\w+)/,":"+Ul+"$1")]})),mi(ea(i,{props:[d]})),jc(i,{props:Gp(c,u)});break;case"::placeholder":mi(ea(i,{props:[de(d,/:(plac\w+)/,":"+ke+"input-$1")]})),mi(ea(i,{props:[de(d,/:(plac\w+)/,":"+Ul+"$1")]})),mi(ea(i,{props:[de(d,/:(plac\w+)/,Be+"input-$1")]})),mi(ea(i,{props:[d]})),jc(i,{props:Gp(c,u)});break}return""})}}var T2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Rt={},ji=typeof process<"u"&&Rt!==void 0&&(Rt.REACT_APP_SC_ATTR||Rt.SC_ATTR)||"data-styled",Kh="active",Jh="data-styled-version",Oo="6.1.19",Hc=`/*!sc*/
`,Co=typeof window<"u"&&typeof document<"u",A2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Rt!==void 0&&Rt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Rt.REACT_APP_SC_DISABLE_SPEEDY!==""?Rt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Rt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Rt!==void 0&&Rt.SC_DISABLE_SPEEDY!==void 0&&Rt.SC_DISABLE_SPEEDY!==""&&Rt.SC_DISABLE_SPEEDY!=="false"&&Rt.SC_DISABLE_SPEEDY),_o=Object.freeze([]),Ci=Object.freeze({});function M2(i,s,c){return c===void 0&&(c=Ci),i.theme!==c.theme&&i.theme||s||c.theme}var Wh=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),R2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,D2=/(^-|-$)/g;function Zp(i){return i.replace(R2,"-").replace(D2,"")}var O2=/(a)(d)/gi,oo=52,Qp=function(i){return String.fromCharCode(i+(i>25?39:97))};function zc(i){var s,c="";for(s=Math.abs(i);s>oo;s=s/oo|0)c=Qp(s%oo)+c;return(Qp(s%oo)+c).replace(O2,"$1-$2")}var nc,Ph=5381,vi=function(i,s){for(var c=s.length;c;)i=33*i^s.charCodeAt(--c);return i},Fh=function(i){return vi(Ph,i)};function _2(i){return zc(Fh(i)>>>0)}function N2(i){return i.displayName||i.name||"Component"}function ac(i){return typeof i=="string"&&!0}var Ih=typeof Symbol=="function"&&Symbol.for,em=Ih?Symbol.for("react.memo"):60115,L2=Ih?Symbol.for("react.forward_ref"):60112,B2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},U2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},tm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},H2=((nc={})[L2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},nc[em]=tm,nc);function Kp(i){return("type"in(s=i)&&s.type.$$typeof)===em?tm:"$$typeof"in i?H2[i.$$typeof]:B2;var s}var Y2=Object.defineProperty,$2=Object.getOwnPropertyNames,Jp=Object.getOwnPropertySymbols,q2=Object.getOwnPropertyDescriptor,G2=Object.getPrototypeOf,Wp=Object.prototype;function nm(i,s,c){if(typeof s!="string"){if(Wp){var u=G2(s);u&&u!==Wp&&nm(i,u,c)}var d=$2(s);Jp&&(d=d.concat(Jp(s)));for(var h=Kp(i),b=Kp(s),w=0;w<d.length;++w){var x=d[w];if(!(x in U2||c&&c[x]||b&&x in b||h&&x in h)){var m=q2(s,x);try{Y2(i,x,m)}catch{}}}}return i}function Ei(i){return typeof i=="function"}function Yc(i){return typeof i=="object"&&"styledComponentId"in i}function ja(i,s){return i&&s?"".concat(i," ").concat(s):i||s||""}function Pp(i,s){if(i.length===0)return"";for(var c=i[0],u=1;u<i.length;u++)c+=i[u];return c}function Yl(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function kc(i,s,c){if(c===void 0&&(c=!1),!c&&!Yl(i)&&!Array.isArray(i))return s;if(Array.isArray(s))for(var u=0;u<s.length;u++)i[u]=kc(i[u],s[u]);else if(Yl(s))for(var u in s)i[u]=kc(i[u],s[u]);return i}function $c(i,s){Object.defineProperty(i,"toString",{value:s})}function Xl(i){for(var s=[],c=1;c<arguments.length;c++)s[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(s.length>0?" Args: ".concat(s.join(", ")):""))}var V2=function(){function i(s){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=s}return i.prototype.indexOfGroup=function(s){for(var c=0,u=0;u<s;u++)c+=this.groupSizes[u];return c},i.prototype.insertRules=function(s,c){if(s>=this.groupSizes.length){for(var u=this.groupSizes,d=u.length,h=d;s>=h;)if((h<<=1)<0)throw Xl(16,"".concat(s));this.groupSizes=new Uint32Array(h),this.groupSizes.set(u),this.length=h;for(var b=d;b<h;b++)this.groupSizes[b]=0}for(var w=this.indexOfGroup(s+1),x=(b=0,c.length);b<x;b++)this.tag.insertRule(w,c[b])&&(this.groupSizes[s]++,w++)},i.prototype.clearGroup=function(s){if(s<this.length){var c=this.groupSizes[s],u=this.indexOfGroup(s),d=u+c;this.groupSizes[s]=0;for(var h=u;h<d;h++)this.tag.deleteRule(u)}},i.prototype.getGroup=function(s){var c="";if(s>=this.length||this.groupSizes[s]===0)return c;for(var u=this.groupSizes[s],d=this.indexOfGroup(s),h=d+u,b=d;b<h;b++)c+="".concat(this.tag.getRule(b)).concat(Hc);return c},i}(),vo=new Map,Eo=new Map,yo=1,so=function(i){if(vo.has(i))return vo.get(i);for(;Eo.has(yo);)yo++;var s=yo++;return vo.set(i,s),Eo.set(s,i),s},X2=function(i,s){yo=s+1,vo.set(i,s),Eo.set(s,i)},Z2="style[".concat(ji,"][").concat(Jh,'="').concat(Oo,'"]'),Q2=new RegExp("^".concat(ji,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),K2=function(i,s,c){for(var u,d=c.split(","),h=0,b=d.length;h<b;h++)(u=d[h])&&i.registerName(s,u)},J2=function(i,s){for(var c,u=((c=s.textContent)!==null&&c!==void 0?c:"").split(Hc),d=[],h=0,b=u.length;h<b;h++){var w=u[h].trim();if(w){var x=w.match(Q2);if(x){var m=0|parseInt(x[1],10),E=x[2];m!==0&&(X2(E,m),K2(i,E,x[3]),i.getTag().insertRules(m,d)),d.length=0}else d.push(w)}}},Fp=function(i){for(var s=document.querySelectorAll(Z2),c=0,u=s.length;c<u;c++){var d=s[c];d&&d.getAttribute(ji)!==Kh&&(J2(i,d),d.parentNode&&d.parentNode.removeChild(d))}};function W2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var am=function(i){var s=document.head,c=i||s,u=document.createElement("style"),d=function(w){var x=Array.from(w.querySelectorAll("style[".concat(ji,"]")));return x[x.length-1]}(c),h=d!==void 0?d.nextSibling:null;u.setAttribute(ji,Kh),u.setAttribute(Jh,Oo);var b=W2();return b&&u.setAttribute("nonce",b),c.insertBefore(u,h),u},P2=function(){function i(s){this.element=am(s),this.element.appendChild(document.createTextNode("")),this.sheet=function(c){if(c.sheet)return c.sheet;for(var u=document.styleSheets,d=0,h=u.length;d<h;d++){var b=u[d];if(b.ownerNode===c)return b}throw Xl(17)}(this.element),this.length=0}return i.prototype.insertRule=function(s,c){try{return this.sheet.insertRule(c,s),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(s){this.sheet.deleteRule(s),this.length--},i.prototype.getRule=function(s){var c=this.sheet.cssRules[s];return c&&c.cssText?c.cssText:""},i}(),F2=function(){function i(s){this.element=am(s),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(s,c){if(s<=this.length&&s>=0){var u=document.createTextNode(c);return this.element.insertBefore(u,this.nodes[s]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(s){this.element.removeChild(this.nodes[s]),this.length--},i.prototype.getRule=function(s){return s<this.length?this.nodes[s].textContent:""},i}(),I2=function(){function i(s){this.rules=[],this.length=0}return i.prototype.insertRule=function(s,c){return s<=this.length&&(this.rules.splice(s,0,c),this.length++,!0)},i.prototype.deleteRule=function(s){this.rules.splice(s,1),this.length--},i.prototype.getRule=function(s){return s<this.length?this.rules[s]:""},i}(),Ip=Co,eb={isServer:!Co,useCSSOMInjection:!A2},im=function(){function i(s,c,u){s===void 0&&(s=Ci),c===void 0&&(c={});var d=this;this.options=wt(wt({},eb),s),this.gs=c,this.names=new Map(u),this.server=!!s.isServer,!this.server&&Co&&Ip&&(Ip=!1,Fp(this)),$c(this,function(){return function(h){for(var b=h.getTag(),w=b.length,x="",m=function(k){var A=function(C){return Eo.get(C)}(k);if(A===void 0)return"continue";var N=h.names.get(A),D=b.getGroup(k);if(N===void 0||!N.size||D.length===0)return"continue";var q="".concat(ji,".g").concat(k,'[id="').concat(A,'"]'),X="";N!==void 0&&N.forEach(function(C){C.length>0&&(X+="".concat(C,","))}),x+="".concat(D).concat(q,'{content:"').concat(X,'"}').concat(Hc)},E=0;E<w;E++)m(E);return x}(d)})}return i.registerId=function(s){return so(s)},i.prototype.rehydrate=function(){!this.server&&Co&&Fp(this)},i.prototype.reconstructWithOptions=function(s,c){return c===void 0&&(c=!0),new i(wt(wt({},this.options),s),this.gs,c&&this.names||void 0)},i.prototype.allocateGSInstance=function(s){return this.gs[s]=(this.gs[s]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(s=function(c){var u=c.useCSSOMInjection,d=c.target;return c.isServer?new I2(d):u?new P2(d):new F2(d)}(this.options),new V2(s)));var s},i.prototype.hasNameForId=function(s,c){return this.names.has(s)&&this.names.get(s).has(c)},i.prototype.registerName=function(s,c){if(so(s),this.names.has(s))this.names.get(s).add(c);else{var u=new Set;u.add(c),this.names.set(s,u)}},i.prototype.insertRules=function(s,c,u){this.registerName(s,c),this.getTag().insertRules(so(s),u)},i.prototype.clearNames=function(s){this.names.has(s)&&this.names.get(s).clear()},i.prototype.clearRules=function(s){this.getTag().clearGroup(so(s)),this.clearNames(s)},i.prototype.clearTag=function(){this.tag=void 0},i}(),tb=/&/g,nb=/^\s*\/\/.*$/gm;function lm(i,s){return i.map(function(c){return c.type==="rule"&&(c.value="".concat(s," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(s," ")),c.props=c.props.map(function(u){return"".concat(s," ").concat(u)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=lm(c.children,s)),c})}function ab(i){var s,c,u,d=Ci,h=d.options,b=h===void 0?Ci:h,w=d.plugins,x=w===void 0?_o:w,m=function(A,N,D){return D.startsWith(c)&&D.endsWith(c)&&D.replaceAll(c,"").length>0?".".concat(s):A},E=x.slice();E.push(function(A){A.type===Ao&&A.value.includes("&")&&(A.props[0]=A.props[0].replace(tb,c).replace(u,m))}),b.prefix&&E.push(k2),E.push(C2);var k=function(A,N,D,q){N===void 0&&(N=""),D===void 0&&(D=""),q===void 0&&(q="&"),s=q,c=N,u=new RegExp("\\".concat(c,"\\b"),"g");var X=A.replace(nb,""),C=S2(D||N?"".concat(D," ").concat(N," { ").concat(X," }"):X);b.namespace&&(C=lm(C,b.namespace));var M=[];return jo(C,E2(E.concat(z2(function(G){return M.push(G)})))),M};return k.hash=x.length?x.reduce(function(A,N){return N.name||Xl(15),vi(A,N.name)},Ph).toString():"",k}var ib=new im,Tc=ab(),rm=yi.createContext({shouldForwardProp:void 0,styleSheet:ib,stylis:Tc});rm.Consumer;yi.createContext(void 0);function eh(){return j.useContext(rm)}var lb=function(){function i(s,c){var u=this;this.inject=function(d,h){h===void 0&&(h=Tc);var b=u.name+h.hash;d.hasNameForId(u.id,b)||d.insertRules(u.id,b,h(u.rules,b,"@keyframes"))},this.name=s,this.id="sc-keyframes-".concat(s),this.rules=c,$c(this,function(){throw Xl(12,String(u.name))})}return i.prototype.getName=function(s){return s===void 0&&(s=Tc),this.name+s.hash},i}(),rb=function(i){return i>="A"&&i<="Z"};function th(i){for(var s="",c=0;c<i.length;c++){var u=i[c];if(c===1&&u==="-"&&i[0]==="-")return i;rb(u)?s+="-"+u.toLowerCase():s+=u}return s.startsWith("ms-")?"-"+s:s}var om=function(i){return i==null||i===!1||i===""},sm=function(i){var s,c,u=[];for(var d in i){var h=i[d];i.hasOwnProperty(d)&&!om(h)&&(Array.isArray(h)&&h.isCss||Ei(h)?u.push("".concat(th(d),":"),h,";"):Yl(h)?u.push.apply(u,So(So(["".concat(d," {")],sm(h),!1),["}"],!1)):u.push("".concat(th(d),": ").concat((s=d,(c=h)==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||s in T2||s.startsWith("--")?String(c).trim():"".concat(c,"px")),";")))}return u};function Ea(i,s,c,u){if(om(i))return[];if(Yc(i))return[".".concat(i.styledComponentId)];if(Ei(i)){if(!Ei(h=i)||h.prototype&&h.prototype.isReactComponent||!s)return[i];var d=i(s);return Ea(d,s,c,u)}var h;return i instanceof lb?c?(i.inject(c,u),[i.getName(u)]):[i]:Yl(i)?sm(i):Array.isArray(i)?Array.prototype.concat.apply(_o,i.map(function(b){return Ea(b,s,c,u)})):[i.toString()]}function ob(i){for(var s=0;s<i.length;s+=1){var c=i[s];if(Ei(c)&&!Yc(c))return!1}return!0}var sb=Fh(Oo),ub=function(){function i(s,c,u){this.rules=s,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&ob(s),this.componentId=c,this.baseHash=vi(sb,c),this.baseStyle=u,im.registerId(c)}return i.prototype.generateAndInjectStyles=function(s,c,u){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(s,c,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))d=ja(d,this.staticRulesId);else{var h=Pp(Ea(this.rules,s,c,u)),b=zc(vi(this.baseHash,h)>>>0);if(!c.hasNameForId(this.componentId,b)){var w=u(h,".".concat(b),void 0,this.componentId);c.insertRules(this.componentId,b,w)}d=ja(d,b),this.staticRulesId=b}else{for(var x=vi(this.baseHash,u.hash),m="",E=0;E<this.rules.length;E++){var k=this.rules[E];if(typeof k=="string")m+=k;else if(k){var A=Pp(Ea(k,s,c,u));x=vi(x,A+E),m+=A}}if(m){var N=zc(x>>>0);c.hasNameForId(this.componentId,N)||c.insertRules(this.componentId,N,u(m,".".concat(N),void 0,this.componentId)),d=ja(d,N)}}return d},i}(),um=yi.createContext(void 0);um.Consumer;var ic={};function cb(i,s,c){var u=Yc(i),d=i,h=!ac(i),b=s.attrs,w=b===void 0?_o:b,x=s.componentId,m=x===void 0?function(Z,P){var V=typeof Z!="string"?"sc":Zp(Z);ic[V]=(ic[V]||0)+1;var Q="".concat(V,"-").concat(_2(Oo+V+ic[V]));return P?"".concat(P,"-").concat(Q):Q}(s.displayName,s.parentComponentId):x,E=s.displayName,k=E===void 0?function(Z){return ac(Z)?"styled.".concat(Z):"Styled(".concat(N2(Z),")")}(i):E,A=s.displayName&&s.componentId?"".concat(Zp(s.displayName),"-").concat(s.componentId):s.componentId||m,N=u&&d.attrs?d.attrs.concat(w).filter(Boolean):w,D=s.shouldForwardProp;if(u&&d.shouldForwardProp){var q=d.shouldForwardProp;if(s.shouldForwardProp){var X=s.shouldForwardProp;D=function(Z,P){return q(Z,P)&&X(Z,P)}}else D=q}var C=new ub(c,A,u?d.componentStyle:void 0);function M(Z,P){return function(V,Q,ge){var ue=V.attrs,I=V.componentStyle,ye=V.defaultProps,Ce=V.foldedComponentIds,dt=V.styledComponentId,ht=V.target,Ge=yi.useContext(um),L=eh(),J=V.shouldForwardProp||L.shouldForwardProp,le=M2(Q,Ge,ye)||Ci,he=function(ce,ne,Ve){for(var we,We=wt(wt({},ne),{className:void 0,theme:Ve}),Jt=0;Jt<ce.length;Jt+=1){var St=Ei(we=ce[Jt])?we(We):we;for(var mt in St)We[mt]=mt==="className"?ja(We[mt],St[mt]):mt==="style"?wt(wt({},We[mt]),St[mt]):St[mt]}return ne.className&&(We.className=ja(We.className,ne.className)),We}(ue,Q,le),y=he.as||ht,$={};for(var K in he)he[K]===void 0||K[0]==="$"||K==="as"||K==="theme"&&he.theme===le||(K==="forwardedAs"?$.as=he.forwardedAs:J&&!J(K,y)||($[K]=he[K]));var W=function(ce,ne){var Ve=eh(),we=ce.generateAndInjectStyles(ne,Ve.styleSheet,Ve.stylis);return we}(I,he),ee=ja(Ce,dt);return W&&(ee+=" "+W),he.className&&(ee+=" "+he.className),$[ac(y)&&!Wh.has(y)?"class":"className"]=ee,ge&&($.ref=ge),j.createElement(y,$)}(G,Z,P)}M.displayName=k;var G=yi.forwardRef(M);return G.attrs=N,G.componentStyle=C,G.displayName=k,G.shouldForwardProp=D,G.foldedComponentIds=u?ja(d.foldedComponentIds,d.styledComponentId):"",G.styledComponentId=A,G.target=u?d.target:i,Object.defineProperty(G,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Z){this._foldedDefaultProps=u?function(P){for(var V=[],Q=1;Q<arguments.length;Q++)V[Q-1]=arguments[Q];for(var ge=0,ue=V;ge<ue.length;ge++)kc(P,ue[ge],!0);return P}({},d.defaultProps,Z):Z}}),$c(G,function(){return".".concat(G.styledComponentId)}),h&&nm(G,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),G}function nh(i,s){for(var c=[i[0]],u=0,d=s.length;u<d;u+=1)c.push(s[u],i[u+1]);return c}var ah=function(i){return Object.assign(i,{isCss:!0})};function fb(i){for(var s=[],c=1;c<arguments.length;c++)s[c-1]=arguments[c];if(Ei(i)||Yl(i))return ah(Ea(nh(_o,So([i],s,!0))));var u=i;return s.length===0&&u.length===1&&typeof u[0]=="string"?Ea(u):ah(Ea(nh(u,s)))}function Ac(i,s,c){if(c===void 0&&(c=Ci),!s)throw Xl(1,s);var u=function(d){for(var h=[],b=1;b<arguments.length;b++)h[b-1]=arguments[b];return i(s,c,fb.apply(void 0,So([d],h,!1)))};return u.attrs=function(d){return Ac(i,s,wt(wt({},c),{attrs:Array.prototype.concat(c.attrs,d).filter(Boolean)}))},u.withConfig=function(d){return Ac(i,s,wt(wt({},c),d))},u}var cm=function(i){return Ac(cb,i)},g=cm;Wh.forEach(function(i){g[i]=cm(i)});const fm="/my-pickleball-app/assets/ppl-logo-P6U_k7ZW.svg",db=g.div`
  * {
    &:focus {
      outline: none;
    }
  }
`,pb=g.nav`
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
`,dm=g.div`
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
`;g(dm)`
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
`,rc=g.button`
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
`;function kb(){const[i,s]=j.useState(!1),[c,u]=j.useState(0),[d,h]=j.useState(!1),b=ta(),w=Gl(),{user:x,logout:m,isAuthenticated:E}=Ti();j.useEffect(()=>{const N=()=>{const D=window.scrollY;s(D>72&&D>c),u(D)};return window.addEventListener("scroll",N,{passive:!0}),()=>window.removeEventListener("scroll",N)},[c]),j.useEffect(()=>{h(!1)},[b]),j.useEffect(()=>{const N=D=>{d&&!D.target.closest("[data-profile-container]")&&h(!1)};return document.addEventListener("mousedown",N),()=>document.removeEventListener("mousedown",N)},[d]);const k=N=>{w(N),h(!1)},A=()=>{m(),h(!1),w("/")};return o.jsxs(db,{children:[o.jsxs(pb,{$hidden:i,children:[o.jsxs(hb,{children:[o.jsx(mb,{onClick:()=>k("/"),children:o.jsx("img",{src:fm,alt:"Philippine Pickleball League"})}),o.jsxs(gb,{children:[o.jsxs(xb,{children:[o.jsx(uo,{onClick:()=>k("/forum"),$active:b.pathname==="/forum",children:"Forum"}),o.jsx(uo,{onClick:()=>k("/tournament"),$active:b.pathname==="/tournament",children:"Tournaments"}),o.jsx(uo,{onClick:()=>k("/ranks"),$active:b.pathname==="/ranks",children:"Ranks"}),o.jsx(uo,{onClick:()=>k("/clubs-courts"),$active:b.pathname==="/clubs-courts",children:"Clubs & Courts"})]}),E?o.jsxs(zb,{"data-profile-container":!0,children:[o.jsxs(Sb,{onClick:()=>h(!d),children:[o.jsx(jb,{src:x==null?void 0:x.avatar,alt:x==null?void 0:x.name}),o.jsx(Cb,{children:x==null?void 0:x.name}),o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M6 9l6 6 6-6",strokeLinecap:"round",strokeLinejoin:"round"})})]}),o.jsxs(Eb,{$isOpen:d,children:[o.jsxs(rc,{onClick:()=>k("/profile"),children:[o.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("circle",{cx:"12",cy:"7",r:"4",strokeLinecap:"round",strokeLinejoin:"round"})]}),"My Profile"]}),o.jsxs(rc,{onClick:()=>k("/settings"),children:[o.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("circle",{cx:"12",cy:"12",r:"3",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M12 1v6m0 6v6m11-7h-6m-6 0H1",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Settings"]}),o.jsxs(rc,{className:"logout",onClick:A,children:[o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14l5-5-5-5m5 5H9",strokeLinecap:"round",strokeLinejoin:"round"})}),"Log Out"]})]})]}):o.jsxs(dm,{children:[o.jsx(Mc,{onClick:()=>k("/signin"),children:"Sign In"}),o.jsx(Mc,{onClick:()=>k("/register"),$primary:!0,children:"Register"})]})]}),E?o.jsxs(bb,{$show:!0,onClick:()=>h(!d),"data-profile-container":!0,children:[o.jsx("img",{src:x==null?void 0:x.avatar,alt:x==null?void 0:x.name}),o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:o.jsx("path",{d:"M6 9l6 6 6-6",strokeLinecap:"round",strokeLinejoin:"round"})})]}):o.jsx(vb,{onClick:()=>k("/signin"),children:"Sign In"})]}),o.jsxs(wb,{$isOpen:d,children:[o.jsxs(lc,{onClick:()=>k("/profile"),children:[o.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("circle",{cx:"12",cy:"7",r:"4",strokeLinecap:"round",strokeLinejoin:"round"})]}),"My Profile"]}),o.jsxs(lc,{onClick:()=>k("/settings"),children:[o.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("circle",{cx:"12",cy:"12",r:"3",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M12 1v6m0 6v6m11-7h-6m-6 0H1",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Settings"]}),o.jsxs(lc,{className:"logout",onClick:A,children:[o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14l5-5-5-5m5 5H9",strokeLinecap:"round",strokeLinejoin:"round"})}),"Log Out"]})]})]}),o.jsxs(yb,{children:[o.jsxs(Dl,{onClick:()=>k("/"),$active:b.pathname==="/",children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[o.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("polyline",{points:"9,22 9,12 15,12 15,22",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Home"]}),o.jsxs(Dl,{onClick:()=>k("/forum"),$active:b.pathname==="/forum",children:[o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:o.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",strokeLinecap:"round",strokeLinejoin:"round"})}),"Forum"]}),o.jsxs(Dl,{onClick:()=>k("/tournament"),$active:b.pathname==="/tournament",children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[o.jsx("path",{d:"M6 4v6a6 6 0 0 0 12 0V4",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M6 4h12",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M4 6a2 2 0 0 0 2 2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M20 6a2 2 0 0 1-2 2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M10 16v2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M14 16v2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M8 20h8",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Tournament"]}),o.jsxs(Dl,{onClick:()=>k("/ranks"),$active:b.pathname==="/ranks",children:[o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:o.jsx("polygon",{points:"12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26",strokeLinecap:"round",strokeLinejoin:"round"})}),"Ranks"]}),o.jsxs(Dl,{onClick:()=>k("/clubs-courts"),$active:b.pathname==="/clubs-courts",children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("circle",{cx:"12",cy:"10",r:"3",strokeLinecap:"round",strokeLinejoin:"round"})]}),"C&C"]})]})]})}const Tb=g.footer`
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
`;function _b(){return o.jsx(Tb,{children:o.jsxs(Ab,{children:[o.jsx(Mb,{children:o.jsx("img",{src:fm,alt:"Philippine Pickleball League"})}),o.jsxs(Rb,{children:[o.jsx("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",children:o.jsx("svg",{viewBox:"0 0 320 512",fill:"currentColor",children:o.jsx("path",{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"})})}),o.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:o.jsx("svg",{viewBox:"0 0 448 512",fill:"currentColor",children:o.jsx("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})})}),o.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:o.jsx("svg",{viewBox:"0 0 448 512",fill:"currentColor",children:o.jsx("path",{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"})})}),o.jsx("a",{href:"https://youtube.com",target:"_blank",rel:"noopener noreferrer","aria-label":"YouTube",children:o.jsx("svg",{viewBox:"0 0 576 512",fill:"currentColor",children:o.jsx("path",{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"})})})]}),o.jsxs(Db,{children:[o.jsx(an,{to:"/terms",children:"Terms & Conditions"}),o.jsx(an,{to:"/privacy",children:"Privacy Policy"}),o.jsx(an,{to:"/about",children:"About us"}),o.jsx(an,{to:"/contact",children:"Contact"}),o.jsx(an,{to:"/sponsors",children:"Sponsors"}),o.jsx(an,{to:"/news",children:"News"})]}),o.jsxs(Ob,{children:["© ",new Date().getFullYear()," Philippine Pickleball League"]})]})})}const Nb=g.div`
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
`,Yb=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M20 6L9 17l-5-5"})}),$b=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14l5-5-5-5m5 5H9"})}),qb=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M18 6L6 18M6 6l12 12"})}),Gb=({message:i,type:s="success",isVisible:c,onClose:u})=>{j.useEffect(()=>{if(c){const b=setTimeout(()=>{u()},3e3);return()=>clearTimeout(b)}},[c,u]);const d=()=>s==="success"||i.includes("Welcome back")?o.jsx(Yb,{}):o.jsx($b,{}),h=()=>s==="success"||i.includes("Welcome back")?"Successfully Logged In":"User Logged Out";return o.jsx(Nb,{$isVisible:c,children:o.jsxs(Lb,{children:[o.jsx(Bb,{$type:s,children:d()}),o.jsxs(Ub,{children:[o.jsx("h4",{children:h()}),o.jsx("p",{children:i})]}),o.jsx(Hb,{onClick:u,children:o.jsx(qb,{})})]})})},Vb=(i={})=>{const[s,c]=j.useState(!1),[u,d]=j.useState(!1),h=j.useRef(null);return j.useEffect(()=>{const b=new IntersectionObserver(([w])=>{w.isIntersecting&&!u&&(c(!0),d(!0))},i);return h.current&&b.observe(h.current),()=>{h.current&&b.unobserve(h.current)}},[h,i,u]),[h,s]};g.video`
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
`;const pm=g.section`
  padding: 80px 24px;
  background: ${i=>i.$dark?"#1a2e3b":"white"};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 64px 16px;
  }
`,ih=g.div`
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
`;const Fb=g(pm)`
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
`;function lv(){const i=Gl(),{user:s,isAuthenticated:c}=Ti(),[u,d]=j.useState({activePlayers:0,tournamentsHosted:0,playerSatisfaction:0,clubPartners:0}),[h,b]=j.useState(!0),[w,x]=Vb({threshold:.2});j.useEffect(()=>{window.scrollTo(0,0)},[]),j.useEffect(()=>{const k=document.querySelector("footer");if(!k)return;const A=new IntersectionObserver(([N])=>{N.isIntersecting&&b(!1)},{threshold:.1});return A.observe(k),()=>{k&&A.unobserve(k)}},[]);const m=k=>{i(k)},E=()=>{window.scrollTo({top:window.innerHeight,behavior:"smooth"})};return j.useEffect(()=>{(async()=>{try{d({activePlayers:0,tournamentsHosted:0,playerSatisfaction:0,clubPartners:0})}catch(A){console.error("Error fetching stats:",A)}})()},[]),o.jsx(o.Fragment,{children:o.jsxs("main",{children:[o.jsxs(Xb,{children:[o.jsxs(Zb,{children:[o.jsx(Qb,{children:c?o.jsxs(o.Fragment,{children:["Welcome back, ",o.jsx("span",{children:s==null?void 0:s.firstName}),"!"]}):o.jsxs(o.Fragment,{children:["Philippine ",o.jsx("span",{children:"Pickleball"})," League"]})}),o.jsx(Kb,{children:c?"Ready to continue your pickleball journey? Discover upcoming tournaments in your area, connect with fellow players in our active community forum, track your ranking progress, and find the best courts and clubs near you. Your next great match is just a click away!":"Join the fastest growing pickleball community in the Philippines. Connect with players, join tournaments, and track your progress in a vibrant sports community."}),!c&&o.jsx(Jb,{children:o.jsx(Wb,{to:"/register",$primary:!0,$fullWidth:!0,children:"Get Started"})})]}),o.jsxs(iv,{onClick:E,$show:h,children:[o.jsx("span",{className:"scroll-text",children:"Scroll Down"}),o.jsxs("div",{className:"arrows",children:[o.jsx("div",{className:"arrow"}),o.jsx("div",{className:"arrow"}),o.jsx("div",{className:"arrow"})]})]})]}),o.jsx(pm,{children:o.jsx(ih,{children:o.jsxs(Pb,{ref:w,$isVisible:x,children:[o.jsxs(co,{onClick:()=>m("/forum"),$index:0,$isVisible:x,children:[o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"})}),o.jsx("h3",{children:"Forum"}),o.jsx("p",{children:"Join discussions and connect with the pickleball community"})]}),o.jsxs(co,{onClick:()=>m("/tournament"),$index:1,$isVisible:x,children:[o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})}),o.jsx("h3",{children:"Tournaments"}),o.jsx("p",{children:"Find and join upcoming pickleball tournaments"})]}),o.jsxs(co,{onClick:()=>m("/ranks"),$index:2,$isVisible:x,children:[o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),o.jsx("h3",{children:"Ranks"}),o.jsx("p",{children:"Check player rankings and track your progress"})]}),o.jsxs(co,{onClick:()=>m("/clubs-courts"),$index:3,$isVisible:x,children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),o.jsx("path",{d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),o.jsx("h3",{children:"Clubs & Courts"}),o.jsx("p",{children:"Find nearby pickleball courts and local clubs"})]})]})})}),o.jsx(Fb,{children:o.jsx(ih,{children:o.jsxs(Ib,{children:[o.jsxs(ev,{children:[o.jsxs(tv,{children:["About ",o.jsx("span",{children:"Philippine Pickleball League"})]}),o.jsx(nv,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),o.jsxs(av,{children:[o.jsxs("div",{children:[o.jsx("h3",{children:u.activePlayers>0?`${u.activePlayers}+`:"0"}),o.jsx("p",{children:"Active Players"})]}),o.jsxs("div",{children:[o.jsx("h3",{children:u.tournamentsHosted>0?`${u.tournamentsHosted}+`:"0"}),o.jsx("p",{children:"Tournaments Hosted"})]}),o.jsxs("div",{children:[o.jsx("h3",{children:u.playerSatisfaction>0?`${u.playerSatisfaction}%`:"0%"}),o.jsx("p",{children:"Player Satisfaction"})]}),o.jsxs("div",{children:[o.jsx("h3",{children:u.clubPartners>0?`${u.clubPartners}+`:"0"}),o.jsx("p",{children:"Club Partners"})]})]})]})})})]})})}const rv=g.div`
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
`,lh=g(an)`
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
`,zo=({isOpen:i,onClose:s,title:c,message:u})=>i?o.jsx(rv,{onClick:s,children:o.jsxs(ov,{onClick:d=>d.stopPropagation(),children:[o.jsx("h2",{children:c||"Sign in Required"}),o.jsx("p",{children:u||"Please sign in or register to continue"}),o.jsx(lh,{to:"/signin",children:"Sign In"}),o.jsx(lh,{to:"/register",$primary:!0,children:"Register"})]})}):null,sv=g.div`
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
`,fv=g.button`
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
`,dv=g.div`
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
`,pv=g.div`
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
`,hv=g.button`
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
`,rh=g.div`
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
`;const oh=g.div`
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
`,sh=g.div`
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
`,uh=g.button`
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
`,oc=g.div`
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
`,sc=g.button`
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
`;function Qv({filled:i=!1}){return o.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:i?"currentColor":"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",strokeLinecap:"round",strokeLinejoin:"round"})})}function Kv(){return o.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",strokeLinecap:"round",strokeLinejoin:"round"})})}function Jv(){return o.jsxs("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),o.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),o.jsx("path",{d:"M21 15l-5-5L5 21"})]})}function fo(){return o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:o.jsx("path",{d:"M18 6L6 18M6 6l12 12",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})})}function Wv(){return o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",opacity:"0.2"}),o.jsx("path",{d:"M12 2C6.47715 2 2 6.47715 2 12C2 14.7505 3.14229 17.2432 4.98959 19"})]})}function Pv(){return o.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:o.jsx("path",{d:"M15 18l-6-6 6-6",strokeLinecap:"round",strokeLinejoin:"round"})})}function Fv(){return o.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:o.jsx("path",{d:"M9 18l6-6-6-6",strokeLinecap:"round",strokeLinejoin:"round"})})}function ch(){return o.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",stroke:"none",children:o.jsx("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"})})}function Iv(){const{user:i,isAuthenticated:s}=Ti(),[c,u]=j.useState([]),[d,h]=j.useState(!0),[b,w]=j.useState(null),[x,m]=j.useState(!1),[E,k]=j.useState(!1),[A,N]=j.useState(""),[D,q]=j.useState([]),[X,C]=j.useState(!1),[M,G]=j.useState({}),[Z,P]=j.useState({}),[V,Q]=j.useState({}),[ge,ue]=j.useState({}),[I,ye]=j.useState({}),[Ce,dt]=j.useState({}),[ht,Ge]=j.useState({}),[L,J]=j.useState({}),[le,he]=j.useState(1),[y,$]=j.useState(!0),[K,W]=j.useState(!1),[ee,ce]=j.useState(0),[ne,Ve]=j.useState([]),[we,We]=j.useState(null),[Jt,St]=j.useState(null),[mt,qt]=j.useState(0),[Mi,za]=j.useState(!1),Zl=j.useRef(null),jt=50;j.useEffect(()=>{(async()=>{try{h(!0),w(null),await new Promise(ie=>setTimeout(ie,1e3)),u(Aa),$(!1)}catch{w("Failed to load posts. Please try again later.")}finally{h(!1)}})()},[le]);const Ql=async(U,ie,je)=>{if(U.preventDefault(),!s){m(!0);return}try{switch(ie){case"like":u(F=>F.map(xe=>xe.id===je?{...xe,isLiked:!xe.isLiked,likeCount:xe.isLiked?xe.likeCount-1:xe.likeCount+1}:xe));break;case"comment":G(F=>({...F,[je]:!F[je]})),Z[je]||P(F=>({...F,[je]:""})),!M[je]&&!V[je]&&Q(F=>({...F,[je]:[]}));break}}catch(F){console.error("Error handling interaction:",F)}},Ri=async U=>{var je;const ie=(je=Z[U])==null?void 0:je.trim();if(!(!ie||!s))try{ue(xe=>({...xe,[U]:!0}));const F={id:Date.now().toString(),author:{id:i.id,name:i.name,initials:i.name.split(" ").map(xe=>xe[0]).join("").toUpperCase()},content:ie,createdAt:new Date().toISOString()};Q(xe=>({...xe,[U]:[F,...xe[U]||[]]})),u(xe=>xe.map(Te=>Te.id===U?{...Te,commentCount:Te.commentCount+1}:Te)),P(xe=>({...xe,[U]:""}))}catch(F){console.error("Error submitting comment:",F)}finally{ue(F=>({...F,[U]:!1}))}},Di=async(U,ie)=>{var F;const je=(F=Ce[U])==null?void 0:F.trim();if(!(!je||!s))try{J(Te=>({...Te,[U]:!0}));const xe={id:Date.now().toString(),author:{id:i.id,name:i.name,initials:i.name.split(" ").map(Te=>Te[0]).join("").toUpperCase()},content:je,createdAt:new Date().toISOString(),parentId:U};Q(Te=>({...Te,[ie]:Te[ie].map(Ne=>Ne.id===U?{...Ne,replies:[...Ne.replies||[],xe]}:Ne)})),dt(Te=>({...Te,[U]:""})),Ge(Te=>({...Te,[U]:!1})),ye(Te=>({...Te,[U]:!0}))}catch(xe){console.error("Error submitting reply:",xe)}finally{J(xe=>({...xe,[U]:!1}))}},na=U=>{Ge(ie=>({...ie,[U]:!ie[U]})),Ce[U]||dt(ie=>({...ie,[U]:""}))},No=async U=>{if(U.preventDefault(),!s){m(!0);return}k(!E)},Kl=U=>{if(U.preventDefault(),!s){m(!0);return}document.getElementById("imageInput").click()},Lo=async()=>{if(!(!A.trim()&&D.length===0))try{C(!0);const U={id:Date.now().toString(),author:{id:i.id,username:`${i.firstName} ${i.lastName}`,initials:`${i.firstName[0]}${i.lastName[0]}`.toUpperCase(),avatarColor:"#29ba9b"},content:A.trim(),images:D.map((ie,je)=>({id:`${Date.now()}_${je}`,url:ie.url,alt:`User uploaded image ${je+1}`})),createdAt:new Date().toISOString(),likeCount:0,commentCount:0,isLiked:!1};u(ie=>[U,...ie]),k(!1),N(""),q([])}catch(U){console.error("Error creating post:",U)}finally{C(!1)}},Oi=U=>{q(ie=>ie.filter((je,F)=>F!==U))},Wt=U=>{const ie=U.length;return ie===1?"single-image":ie===2?"two-images-horizontal":ie===3?"three-images-left":ie===4?"four-images":ie>4?"four-images-with-overlay":"single-image"},it=(U,ie)=>{Ve(U),ce(ie),W(!0),document.body.style.overflow="hidden"},Gt=()=>{W(!1),Ve([]),ce(0),document.body.style.overflow="auto"},lt=()=>{var U;return((U=Zl.current)==null?void 0:U.clientWidth)||0},ka=()=>-ee*lt();j.useEffect(()=>{K&&qt(ka())},[K,ee]);const Bo=U=>{St(null),We(U.touches[0].clientX),za(!1)},Uo=U=>{St(U.touches[0].clientX);const je=U.touches[0].clientX-we,F=ka();ee===0&&je>0||ee===ne.length-1&&je<0?qt(F+je*.2):qt(F+je)},Ta=()=>{if(!we||!Jt)return;const U=we-Jt,ie=U>jt,je=U<-jt;za(!0),ie&&ee<ne.length-1?aa():je&&ee>0?Pt():qt(ka()),We(null),St(null)},aa=()=>{za(!0),ce(U=>{const ie=U===ne.length-1?U:U+1;return qt(-ie*lt()),ie})},Pt=()=>{za(!0),ce(U=>{const ie=U===0?U:U-1;return qt(-ie*lt()),ie})};j.useEffect(()=>{const U=()=>{qt(ka())};return window.addEventListener("resize",U),()=>window.removeEventListener("resize",U)},[ee]);const Aa=[{id:"1",author:{id:"101",username:"Sarah Lee",initials:"SL",avatarColor:"#234255"},content:"Great matches at the club today! Here are some highlights 📸",images:[{id:"1",url:"https://placehold.co/400x400/ff6b6b/FFF?text=Image+1+(Grid+Top-Left)",alt:"Match highlight 1"},{id:"2",url:"https://placehold.co/400x400/4ecdc4/FFF?text=Image+2+(Grid+Top-Right)",alt:"Match highlight 2"},{id:"3",url:"https://placehold.co/400x400/45b7d1/FFF?text=Image+3+(Grid+Bottom-Left)",alt:"Match highlight 3"},{id:"4",url:"https://placehold.co/400x400/f7b731/FFF?text=Image+4+(Grid+Bottom-Right+with+Overlay)",alt:"Match highlight 4"},{id:"5",url:"https://placehold.co/400x400/5f27cd/FFF?text=Image+5+(Hidden+in+Grid)",alt:"Match highlight 5"},{id:"6",url:"https://placehold.co/400x400/00d2d3/FFF?text=Image+6+(Hidden+in+Grid)",alt:"Match highlight 6"}],createdAt:"2025-06-16T10:00:00Z",likeCount:245,commentCount:18,isLiked:!1},{id:"2",author:{id:"102",username:"Mike Chen",initials:"MC",avatarColor:"#29ba9b"},content:"New paddles just arrived! Can't wait to try them out this weekend 🏓",images:[{id:"5",url:"https://placehold.co/400x400/29ba9b/FFF?text=Paddle+1",alt:"New paddle front"},{id:"6",url:"https://placehold.co/400x400/29ba9b/FFF?text=Paddle+2",alt:"New paddle back"}],createdAt:"2025-06-16T08:00:00Z",likeCount:132,commentCount:24,isLiked:!1}];return o.jsx(sv,{children:o.jsxs(uv,{children:[o.jsxs(cv,{children:[o.jsxs(fv,{onClick:No,children:[o.jsx(dv,{}),"What's happening in pickleball?"]}),E&&o.jsxs("div",{style:{padding:"0 20px 16px"},children:[o.jsx(Lv,{placeholder:"Write something here...",value:A,onChange:U=>N(U.target.value),style:{width:"100%",minHeight:"80px"}}),D.length>0&&o.jsx(Zv,{children:o.jsx("div",{className:`preview-grid ${Wt(D)}`,children:Wt(D)==="four-images-with-overlay"?o.jsxs(o.Fragment,{children:[D.slice(0,3).map((U,ie)=>o.jsxs(oc,{className:"preview-image",children:[o.jsx("img",{src:U.url,alt:`Selected ${ie+1}`}),o.jsx(sc,{onClick:()=>Oi(ie),children:o.jsx(fo,{})})]},ie)),o.jsxs(oc,{className:"preview-image overlay-preview","data-remaining":D.length-3,children:[o.jsx("img",{src:D[3].url,alt:"Selected 4"}),o.jsx(sc,{onClick:()=>Oi(3),children:o.jsx(fo,{})}),o.jsxs("div",{className:"overlay-indicator",children:["+",D.length-3]})]})]}):D.map((U,ie)=>o.jsxs(oc,{className:"preview-image",children:[o.jsx("img",{src:U.url,alt:`Selected ${ie+1}`}),o.jsx(sc,{onClick:()=>Oi(ie),children:o.jsx(fo,{})})]},ie))})})]}),o.jsxs(pv,{children:[o.jsxs(hv,{onClick:Kl,children:[o.jsx(Jv,{}),"Photo/Video"]}),E&&o.jsx(Bv,{disabled:!A.trim(),onClick:Lo,width:"auto",padding:"8px 12px",marginTop:"0",children:X?"Posting...":"Post"}),o.jsx("input",{id:"imageInput",type:"file",multiple:!0,accept:"image/jpeg,image/jpg,image/png,image/gif,image/webp,video/mp4,video/mov,video/avi,video/wmv,video/webm",capture:"environment",style:{display:"none"},onChange:U=>{const ie=Array.from(U.target.files);if(ie.length>0){const je=ie.map(F=>new Promise(xe=>{const Te=new FileReader;Te.onload=Ne=>{xe({file:F,url:Ne.target.result,name:F.name})},Te.readAsDataURL(F)}));Promise.all(je).then(F=>{q(F),k(!0)}),U.target.value=""}}})]})]}),d&&o.jsx(Uv,{children:o.jsx(Wv,{})}),b&&o.jsx(Hv,{children:b}),!d&&!b&&c.map(U=>{var ie,je;return o.jsxs(mv,{children:[o.jsxs(gv,{children:[o.jsx(xv,{style:{background:U.author.avatarColor},children:U.author.initials}),o.jsxs(bv,{children:[o.jsx("h3",{children:U.author.username}),o.jsx("span",{children:new Date(U.createdAt).toLocaleDateString()})]})]}),o.jsxs(vv,{children:[o.jsx("p",{children:U.content}),((ie=U.images)==null?void 0:ie.length)>0&&o.jsx(yv,{className:Wt(U.images),children:Wt(U.images)==="four-images-with-overlay"?o.jsxs(o.Fragment,{children:[U.images.slice(0,3).map((F,xe)=>o.jsx("div",{className:"image-container",children:o.jsx("img",{src:F.url,alt:F.alt,onClick:()=>it(U.images,xe),style:{cursor:"pointer"}})},F.id)),o.jsx("div",{className:"image-container overlay","data-remaining":U.images.length-3,onClick:()=>it(U.images,3),style:{cursor:"pointer"},children:o.jsx("img",{src:U.images[3].url,alt:U.images[3].alt})})]}):U.images.map((F,xe)=>o.jsx("img",{src:F.url,alt:F.alt,onClick:()=>it(U.images,xe),style:{cursor:"pointer"}},F.id))})]}),o.jsxs(wv,{children:[o.jsxs("button",{onClick:F=>Ql(F,"like",U.id),style:{color:U.isLiked?"#ef4444":"#64748b",fontWeight:U.isLiked?"600":"400"},children:[o.jsx(Qv,{filled:U.isLiked}),U.likeCount]}),o.jsxs("button",{onClick:F=>Ql(F,"comment",U.id),children:[o.jsx(Kv,{}),U.commentCount]})]}),s&&M[U.id]&&o.jsxs(Sv,{children:[o.jsxs(jv,{children:[o.jsx(rh,{children:i.name.split(" ").map(F=>F[0]).join("").toUpperCase()}),o.jsx(Cv,{placeholder:"Add a comment...",value:Z[U.id]||"",onChange:F=>P(xe=>({...xe,[U.id]:F.target.value})),onKeyPress:F=>{F.key==="Enter"&&(F.preventDefault(),Ri(U.id))}}),o.jsx(Ev,{onClick:()=>Ri(U.id),disabled:!((je=Z[U.id])!=null&&je.trim())||ge[U.id],children:o.jsx(ch,{})})]}),V[U.id]&&V[U.id].length>0&&o.jsx(zv,{children:V[U.id].map((F,xe)=>{var Te;return o.jsxs("div",{children:[o.jsxs(kv,{children:[o.jsx(rh,{children:F.author.initials}),o.jsxs(Tv,{children:[o.jsxs("p",{className:"comment-content",children:[o.jsx("span",{className:"comment-author",children:F.author.name}),o.jsx("span",{className:"comment-text",children:F.content})]}),o.jsxs("div",{className:"comment-meta",children:[o.jsx("span",{className:"comment-time",children:(()=>{const Ne=new Date,Tn=new Date(F.createdAt),An=Math.floor((Ne-Tn)/(1e3*60)),Vt=Math.floor(An/60),sn=Math.floor(Vt/24);return An<60?`${An||1}m`:Vt<24?`${Vt}h`:`${sn}d`})()}),o.jsx("button",{className:"comment-reply",onClick:()=>na(F.id),children:"Reply"})]})]})]}),F.replies&&F.replies.length>0&&o.jsx(Av,{children:o.jsx("div",{className:"view-replies",children:o.jsx("button",{onClick:()=>ye(Ne=>({...Ne,[F.id]:!Ne[F.id]})),children:I[F.id]?"Hide replies":`View replies (${F.replies.length})`})})}),I[F.id]&&F.replies&&F.replies.length>0&&o.jsx(oh,{children:F.replies.map(Ne=>o.jsxs(Ov,{children:[o.jsx(sh,{children:Ne.author.initials}),o.jsxs(_v,{children:[o.jsxs("p",{className:"reply-content",children:[o.jsx("span",{className:"reply-author",children:Ne.author.name}),o.jsx("span",{className:"reply-text",children:Ne.content})]}),o.jsxs("div",{className:"reply-meta",children:[o.jsx("span",{className:"reply-time",children:(()=>{const Tn=new Date,An=new Date(Ne.createdAt),Vt=Math.floor((Tn-An)/(1e3*60)),sn=Math.floor(Vt/60),Jl=Math.floor(sn/24);return Vt<60?`${Vt||1}m`:sn<24?`${sn}h`:`${Jl}d`})()}),o.jsx("button",{className:"reply-reply",onClick:()=>na(F.id),children:"Reply"})]})]})]},Ne.id))}),ht[F.id]&&o.jsx(oh,{children:o.jsxs(Mv,{children:[o.jsx(sh,{children:i.name.split(" ").map(Ne=>Ne[0]).join("").toUpperCase()}),o.jsx(Rv,{placeholder:"Reply...",value:Ce[F.id]||"",onChange:Ne=>dt(Tn=>({...Tn,[F.id]:Ne.target.value})),onKeyPress:Ne=>{Ne.key==="Enter"&&(Ne.preventDefault(),Di(F.id,U.id))}}),o.jsx(Dv,{onClick:()=>Di(F.id,U.id),disabled:!((Te=Ce[F.id])!=null&&Te.trim())||L[F.id],children:o.jsx(ch,{})})]})})]},F.id)})})]})]},U.id)}),!d&&!b&&c.length===0&&o.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#64748b"},children:"No posts yet. Be the first to share!"}),x&&o.jsx(zo,{isOpen:x,onClose:()=>m(!1),title:"Join the Conversation!",message:"Sign in or register to interact with the community"}),K&&o.jsx(Yv,{onClick:Gt,children:o.jsxs($v,{ref:Zl,onClick:U=>U.stopPropagation(),onTouchStart:Bo,onTouchMove:Uo,onTouchEnd:Ta,children:[o.jsx(qv,{$offset:mt,$isAnimating:Mi,children:ne.map((U,ie)=>o.jsx(Gv,{children:o.jsx(Vv,{src:U.url,alt:U.alt,draggable:!1})},U.id))}),o.jsx(uh,{$left:!0,onClick:Pt,disabled:ee===0,children:o.jsx(Pv,{})}),o.jsx(uh,{onClick:aa,disabled:ee===ne.length-1,children:o.jsx(Fv,{})}),o.jsx(Nv,{onClick:Gt,children:o.jsx(fo,{})}),o.jsxs(Xv,{children:[ee+1," / ",ne.length]})]})})]})})}const ey=g.div`
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
`,hm=g.div`
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
`,cy=g(hm)`
  margin-bottom: 16px;
`,fy=g.div`
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
`,dy=g(mm)`
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
`,py=g.button`
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
`;const hy=g.div`
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
`,fh=g.select`
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
`;function by(){return o.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"#29ba9b",fillOpacity:"0.1",stroke:"#29ba9b",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M8 21h8"}),o.jsx("path",{d:"M12 17v4"}),o.jsx("path",{d:"M7 4h10"}),o.jsx("path",{d:"M17 4v8a5 5 0 0 1-10 0V4"}),o.jsx("path",{d:"M7 4c-3 0-4 2-4 3v1c0 2 2 3 4 3"}),o.jsx("path",{d:"M17 4c3 0 4 2 4 3v1c0 2-2 3-4 3"})]})}function vy(){return o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:o.jsx("path",{d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",strokeLinecap:"round",strokeLinejoin:"round"})})}function yy(){return o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[o.jsx("path",{d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M12 13a3 3 0 100-6 3 3 0 000 6z",strokeLinecap:"round",strokeLinejoin:"round"})]})}function wy(){return o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[o.jsx("circle",{cx:"12",cy:"12",r:"9",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("text",{x:"12",y:"14.5",dominantBaseline:"middle",textAnchor:"middle",fontSize:"14",stroke:"none",fill:"currentColor",style:{fontWeight:"bold"},children:"₱"})]})}function Sy(){return o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:o.jsx("path",{d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",strokeLinecap:"round",strokeLinejoin:"round"})})}function jy(){return o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",strokeLinecap:"round",strokeLinejoin:"round"})})}const Cy=(i,s,c,u)=>{const d=new Date,h=new Date(i),b=new Date(s);return h<d?"Completed":d>b||c>=u?"Closed":"Open"};function Ey(){const[i,s]=j.useState([]),[c,u]=j.useState(!0),[d,h]=j.useState(null),[b,w]=j.useState(""),[x,m]=j.useState(""),[E,k]=j.useState(""),[A,N]=j.useState(!1),D=[{label:"₱0 - ₱3,000",min:0,max:3e3},{label:"₱3,001 - ₱6,000",min:3001,max:6e3},{label:"₱6,001 - ₱10,000",min:6001,max:1e4}],q=i.filter(M=>{const G=M.name.toLowerCase().includes(b.toLowerCase())||M.location.toLowerCase().includes(b.toLowerCase()),Z=!x||M.tier===parseInt(x),P=!E||M.entryFee>=D[parseInt(E)].min&&M.entryFee<=D[parseInt(E)].max;return G&&Z&&P}),X=async()=>{try{u(!0),h(null);const G=[{id:"1",name:"PPL Summer Championship 2025",date:"2025-08-15T09:00:00Z",location:"Manila Pickleball Center",entryFee:1500,prizePool:5e4,maxParticipants:64,currentParticipants:42,registrationDeadline:"2025-07-01T00:00:00Z",bannerUrl:"https://images.unsplash.com/photo-1686721135036-22ac6cbb8ce8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",tier:3},{id:"2",name:"Beginners Welcome Tournament",date:"2025-07-20T09:00:00Z",location:"Quezon City Sports Complex",entryFee:800,prizePool:2e4,maxParticipants:32,currentParticipants:32,registrationDeadline:"2025-05-10T00:00:00Z",bannerUrl:"https://images.unsplash.com/photo-1723004714201-cf224222b897?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",tier:2},{id:"3",name:"Indoor Championship Series",date:"2025-07-01T09:00:00Z",location:"BGC Indoor Sports Complex",entryFee:2e3,prizePool:75e3,maxParticipants:128,currentParticipants:85,registrationDeadline:"2025-06-30T00:00:00Z",bannerUrl:"https://plus.unsplash.com/premium_photo-1709048991290-1d36455a2895?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",tier:3}].map(Z=>({...Z,status:Cy(Z.date,Z.registrationDeadline,Z.currentParticipants,Z.maxParticipants)}));s(G)}catch(M){console.error("Failed to fetch tournaments:",M),h("Failed to load tournaments. Please try again later.")}finally{u(!1)}};j.useEffect(()=>{X()},[]);const C=async M=>{{N(!0);return}};return c?o.jsx("div",{children:"Loading tournaments..."}):d?o.jsx("div",{children:d}):o.jsxs(ey,{children:[o.jsx(ty,{children:"Tournaments"}),o.jsx(ny,{children:"Discover and join exciting pickleball tournaments across the Philippines. From beginner-friendly events to professional championships, find the perfect competition to showcase your skills."}),o.jsxs(hy,{children:[o.jsxs(my,{children:[o.jsx(jy,{}),o.jsx("input",{type:"text",placeholder:"Search tournaments by name or location...",value:b,onChange:M=>w(M.target.value)})]}),o.jsxs(gy,{children:[o.jsxs(fh,{value:x,onChange:M=>m(M.target.value),children:[o.jsx("option",{value:"",children:"All Tiers"}),o.jsx("option",{value:"1",children:"Tier 1"}),o.jsx("option",{value:"2",children:"Tier 2"}),o.jsx("option",{value:"3",children:"Tier 3"})]}),o.jsxs(fh,{value:E,onChange:M=>k(M.target.value),children:[o.jsx("option",{value:"",children:"All Fees"}),D.map((M,G)=>o.jsx("option",{value:G,children:M.label},G))]})]})]}),q.length>0?o.jsx(ay,{children:q.map(M=>o.jsxs(iy,{children:[o.jsxs(ly,{children:[M.bannerUrl&&o.jsx("img",{src:M.bannerUrl,alt:M.name}),o.jsx(ry,{status:M.status,children:M.status})]}),o.jsxs(oy,{children:[o.jsx(sy,{children:M.name}),o.jsxs(uy,{children:[o.jsx(by,{}),"Tier ",M.tier]}),o.jsxs(hm,{children:[o.jsx(vy,{}),new Date(M.date).toLocaleDateString()]}),o.jsxs(cy,{children:[o.jsx(yy,{}),M.location]}),o.jsxs(fy,{children:[o.jsxs(mm,{children:[o.jsx(Sy,{}),o.jsxs("div",{children:[M.currentParticipants,"/",M.maxParticipants]})]}),o.jsxs(dy,{children:[o.jsx(wy,{}),o.jsxs("div",{children:[o.jsxs("span",{children:["₱",M.entryFee]}),o.jsx("span",{})]})]})]}),o.jsx(py,{onClick:()=>C(M.id),disabled:M.currentParticipants>=M.maxParticipants,children:M.currentParticipants>=M.maxParticipants?"Full":"Register Now"})]})]},M.id))}):o.jsxs(xy,{children:[o.jsx("h3",{children:"No Tournaments Found"}),o.jsx("p",{children:b||x||E?"Try adjusting your search criteria or filters to find more tournaments.":"There are no tournaments available at the moment. Please check back later."})]}),A&&o.jsx(zo,{isOpen:A,onClose:()=>N(!1),title:"Join the Tournament!",message:"Sign in or register to participate in tournaments"})]})}const uc=g.div`
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
`;const cc=g.div`
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
`,fc=g.div`
  padding: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 6px;
  }
`,dc=g.div`
  font-size: ${i=>i.$large?"1.25rem":"1rem"};
  font-weight: 600;
  color: white;
  margin-bottom: 2px;
  
  @media (max-width: 768px) {
    font-size: ${i=>i.$large?"1.1rem":"0.9rem"};
  }
`,pc=g.div`
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
`;function dh(i){return i.split(" ").map(s=>s[0]).join("").toUpperCase()}function ph(i){return new Intl.NumberFormat().format(i)}function n4(){return o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",strokeLinecap:"round",strokeLinejoin:"round"})})}function a4(){const[i,s]=j.useState([]),[c,u]=j.useState("mens-singles"),[d,h]=j.useState(!0),[b,w]=j.useState(null),[x,m]=j.useState(""),[E,k]=j.useState(""),[A,N]=j.useState(""),D=["19+","35+","50+"],q=(V,Q)=>{if(!Q)return!0;const ge=parseInt(Q.replace("+",""));return V>=ge},X=V=>{if(!V)return[];let Q=V.filter(ue=>ue.age>=19);return Q=Q.filter(ue=>{const I=!x||ue.name.toLowerCase().includes(x.toLowerCase()),ye=q(ue.age,A);return I&&ye}),[...Q].sort((ue,I)=>I.points-ue.points).map((ue,I)=>({...ue,rank:I+1}))};j.useEffect(()=>{const V=new Date,Q={year:"numeric",month:"long",day:"numeric"};k(V.toLocaleDateString("en-US",Q)),C()},[]);const C=async()=>{var V;try{h(!0),w(null);const Q=[{id:"mens-singles",name:"MEN'S SINGLES",lastUpdated:"2024-01-20T10:00:00Z",rankings:[{id:"1",name:"Juan Dela Cruz",age:28,rank:1,points:2500,gamesPlayed:45,wins:38,losses:7,winRate:"84.4"},{id:"2",name:"Mike Santos",age:35,rank:2,points:2350,gamesPlayed:42,wins:34,losses:8,winRate:"81.0"},{id:"3",name:"Carlo Garcia",age:45,rank:3,points:2200,gamesPlayed:38,wins:30,losses:8,winRate:"78.9"},{id:"4",name:"Miguel Lopez",age:61,rank:4,points:2100,gamesPlayed:35,wins:27,losses:8,winRate:"77.1"},{id:"j1",name:"Alex Santos",age:15,rank:5,points:1800,gamesPlayed:30,wins:25,losses:5,winRate:"83.3"},{id:"j2",name:"Marco Reyes",age:13,rank:6,points:1700,gamesPlayed:28,wins:22,losses:6,winRate:"78.6"}]},{id:"womens-singles",name:"WOMEN'S SINGLES",lastUpdated:"2024-01-20T10:00:00Z",rankings:[{id:"1",name:"Maria Santos",age:28,rank:1,points:2450,gamesPlayed:43,wins:36,losses:7,winRate:"83.7"},{id:"2",name:"Ana Garcia",age:45,rank:2,points:2300,gamesPlayed:40,wins:32,losses:8,winRate:"80.0"},{id:"3",name:"Sofia Reyes",age:52,rank:3,points:2150,gamesPlayed:37,wins:29,losses:8,winRate:"78.4"},{id:"4",name:"Isabella Tan",age:71,rank:4,points:2e3,gamesPlayed:30,wins:22,losses:8,winRate:"73.3"},{id:"j1",name:"Alexandra Santos",age:15,rank:5,points:1850,gamesPlayed:32,wins:26,losses:6,winRate:"81.3"},{id:"j2",name:"Diana Garcia",age:17,rank:6,points:1750,gamesPlayed:29,wins:23,losses:6,winRate:"79.3"}]},{id:"mens-doubles",name:"MEN'S DOUBLES",lastUpdated:"2024-01-20T10:00:00Z",rankings:[{id:"1",name:"Juan Dela Cruz",age:28,rank:1,points:2600,gamesPlayed:50,wins:42,losses:8,winRate:"84.0"},{id:"2",name:"Mike Santos",age:35,rank:2,points:2400,gamesPlayed:45,wins:36,losses:9,winRate:"80.0"},{id:"3",name:"Carlo Garcia",age:45,rank:3,points:2250,gamesPlayed:40,wins:31,losses:9,winRate:"77.5"},{id:"4",name:"Miguel Lopez",age:61,rank:4,points:2150,gamesPlayed:38,wins:29,losses:9,winRate:"76.3"},{id:"j1",name:"Alex Santos",age:15,rank:5,points:1900,gamesPlayed:35,wins:27,losses:8,winRate:"77.1"}]},{id:"womens-doubles",name:"WOMEN'S DOUBLES",lastUpdated:"2024-01-20T10:00:00Z",rankings:[{id:"1",name:"Maria Santos",age:28,rank:1,points:2550,gamesPlayed:48,wins:40,losses:8,winRate:"83.3"},{id:"2",name:"Ana Garcia",age:45,rank:2,points:2350,gamesPlayed:43,wins:34,losses:9,winRate:"79.1"},{id:"3",name:"Sofia Reyes",age:52,rank:3,points:2200,gamesPlayed:40,wins:31,losses:9,winRate:"77.5"},{id:"4",name:"Isabella Tan",age:71,rank:4,points:2100,gamesPlayed:35,wins:27,losses:8,winRate:"77.1"},{id:"j1",name:"Alexandra Santos",age:15,rank:5,points:1950,gamesPlayed:32,wins:25,losses:7,winRate:"78.1"}]},{id:"mixed-doubles",name:"MIXED DOUBLES",lastUpdated:"2024-01-20T10:00:00Z",rankings:[{id:"1",name:"Juan Dela Cruz",age:28,rank:1,points:2650,gamesPlayed:52,wins:44,losses:8,winRate:"84.6"},{id:"2",name:"Maria Santos",age:28,rank:2,points:2600,gamesPlayed:50,wins:42,losses:8,winRate:"84.0"},{id:"3",name:"Mike Santos",age:35,rank:3,points:2450,gamesPlayed:47,wins:38,losses:9,winRate:"80.9"},{id:"4",name:"Ana Garcia",age:45,rank:4,points:2400,gamesPlayed:45,wins:36,losses:9,winRate:"80.0"},{id:"5",name:"Carlo Garcia",age:45,rank:5,points:2300,gamesPlayed:42,wins:33,losses:9,winRate:"78.6"},{id:"j1",name:"Alexandra Santos",age:15,rank:6,points:2e3,gamesPlayed:35,wins:27,losses:8,winRate:"77.1"}]}];s(Q),u((V=Q[0])==null?void 0:V.id)}catch{w("Failed to fetch rankings. Please try again later.")}finally{h(!1)}},M=V=>{const Q=X(V),ge=Q.slice(0,3),ue=Q.slice(3);return ue.length===0&&ge.length===0?o.jsx("div",{style:{textAlign:"center",padding:"40px",color:"#64748b"},children:"No players found matching your search criteria."}):ue.length===0?null:o.jsxs(Hy,{children:[o.jsxs(Yy,{children:[o.jsx("div",{children:"Rank"}),o.jsx("div",{children:"Player"}),o.jsx("div",{children:"Age"}),o.jsx("div",{children:"Points"}),o.jsx("div",{children:"Games (W-L)"})]}),ue.slice(0,47).map(I=>o.jsxs($y,{children:[o.jsx(Xy,{children:I.rank}),o.jsxs(qy,{children:[o.jsx(Vy,{children:dh(I.name)}),o.jsx(Gy,{children:I.name})]}),o.jsx(cc,{children:I.age}),o.jsx(cc,{children:ph(I.points)}),o.jsxs(cc,{children:[I.wins,"-",I.losses]})]},I.id))]})};if(d)return o.jsx(uc,{children:o.jsx(Iy,{children:"Loading rankings..."})});if(b)return o.jsx(uc,{children:o.jsxs(e4,{children:[o.jsx("div",{children:b}),o.jsx(t4,{onClick:C,children:"Try Again"})]})});const G=i.find(V=>V.id===c),P=(G?X(G.rankings):[]).slice(0,3);return o.jsxs(uc,{children:[o.jsxs(zy,{children:[o.jsx(ky,{children:"Player Rankings"}),o.jsx(Ty,{children:"Track the performance and standings of pickleball players across different categories."}),o.jsxs(Ay,{children:["Last Updated: ",E]}),o.jsxs(My,{children:[o.jsxs(Ry,{children:[o.jsx(n4,{}),o.jsx(_y,{type:"text",placeholder:"Search by player name...",value:x,onChange:V=>m(V.target.value)})]}),o.jsx(Dy,{children:o.jsxs(Oy,{value:A,onChange:V=>N(V.target.value),children:[o.jsx("option",{value:"",children:"All Ages"}),D.map(V=>o.jsx("option",{value:V,children:V},V))]})})]})]}),o.jsx(Ny,{children:i.map(V=>o.jsx(Ly,{$active:V.id===c,onClick:()=>u(V.id),children:V.name},V.id))}),o.jsxs(By,{children:[o.jsx(Uy,{children:P.map(V=>o.jsxs(Zy,{$rank:V.rank,children:[o.jsx(Qy,{children:V.rank}),o.jsxs(Ky,{children:[o.jsx(Jy,{children:dh(V.name)}),o.jsx(Wy,{children:o.jsx(Py,{children:V.name})})]}),o.jsxs(Fy,{children:[o.jsxs(fc,{children:[o.jsx(dc,{children:V.age}),o.jsx(pc,{children:"Age"})]}),o.jsxs(fc,{children:[o.jsx(dc,{children:ph(V.points)}),o.jsx(pc,{children:"Points"})]}),o.jsxs(fc,{children:[o.jsxs(dc,{children:[V.wins,"-",V.losses]}),o.jsx(pc,{children:"Games (W-L)"})]})]})]},V.id))}),M((G==null?void 0:G.rankings)||[])]})]})}const po=g.div`
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
`,hc=g.h1`
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
`,mc=g.p`
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
`,gc=g.button`
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
`,f4=g.div`
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
`,d4=g.div`
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
`,hh=g.span`
  display: inline-flex;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 12px;
  background: ${i=>i.type==="club"?"#f0f9ff":"#f0fdf4"};
  color: ${i=>i.type==="club"?"#0369a1":"#166534"};
`,p4=g.button`
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
`,h4=g.div`
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
`,xc=g.div`
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 56px;
  }
`,bc=g.h3`
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
`,mh=g.button`
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
`,q4=g.div``,G4=g.div`
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
`,V4=g.button`
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
`,X4=g.p`
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.5;
  margin: 0;
  text-align: center;
  padding: 12px 16px;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #f1f5f9;
`;function Z4(){return o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",strokeLinecap:"round",strokeLinejoin:"round"})})}const Q4=()=>{const{isAuthenticated:i}=Ti(),[s,c]=j.useState([]),[u,d]=j.useState(!0),[h,b]=j.useState(null),[w,x]=j.useState(""),[m,E]=j.useState("all"),[k,A]=j.useState(new Set),[N,D]=j.useState(new Set),[q,X]=j.useState(!1),[C,M]=j.useState(null),[G,Z]=j.useState(!1);j.useEffect(()=>{P()},[]);const P=async()=>{try{d(!0),b(null),c([{id:"1",name:"Manila Pickleball Club",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",address:"BGC, Taguig City",hours:"6:00 AM - 10:00 PM",type:"club_and_courts",members:120,createdAt:"2025-06-16T08:00:00Z",updatedAt:"2025-06-16T08:00:00Z",ownerId:"user123",contactEmail:"info@manilapickleball.com",contactPhone:"+63 912 345 6789",website:"https://manilapickleball.com",amenities:["Pro Shop","Locker Rooms","Parking"],images:[],isVerified:!0},{id:"2",name:"BGC Pickleball Center",description:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",address:"Bonifacio Global City, Taguig",hours:"7:00 AM - 11:00 PM",type:"club_and_courts",members:85,createdAt:"2025-06-15T10:00:00Z",updatedAt:"2025-06-15T10:00:00Z",ownerId:"user456",contactEmail:"info@bgcpickleball.com",contactPhone:"+63 917 123 4567",amenities:["Air Conditioning","Equipment Rental"],images:[],isVerified:!0},{id:"3",name:"QC Pickleball Community",description:"Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",address:"Katipunan Avenue, Quezon City",type:"club",members:45,createdAt:"2025-06-14T09:00:00Z",updatedAt:"2025-06-14T09:00:00Z",ownerId:"user789",contactEmail:"qcpickleball@gmail.com",contactPhone:"+63 918 765 4321",images:[],isVerified:!0}])}catch(I){b(I.message||"Failed to fetch venues")}finally{d(!1)}},V=j.useMemo(()=>{let I=s;if(w){const ye=w.toLowerCase();I=I.filter(Ce=>Ce.name.toLowerCase().includes(ye)||Ce.address.toLowerCase().includes(ye))}return m!=="all"&&(I=I.filter(ye=>m==="clubs"?ye.type==="club":m==="courts"?ye.type==="club_and_courts":!0)),I},[s,w,m]),Q=async(I,ye)=>{if(I.stopPropagation(),!i){X(!0);return}try{D(Ce=>new Set([...Ce,ye])),console.log(`Join request submitted for venue ${ye}`)}catch(Ce){console.error("Failed to join venue:",Ce),D(dt=>{const ht=new Set(dt);return ht.delete(ye),ht})}},ge=I=>{M(I),Z(!0)},ue=()=>{Z(!1),M(null)};return u?o.jsxs(po,{children:[o.jsx(hc,{children:"Clubs & Courts"}),o.jsx(mc,{children:"Discover pickleball venues and communities across the Philippines."}),o.jsx(m4,{children:"Loading venues..."})]}):h?o.jsxs(po,{children:[o.jsx(hc,{children:"Clubs & Courts"}),o.jsx(mc,{children:"Discover pickleball venues and communities across the Philippines."}),o.jsx(g4,{children:h})]}):G&&C?o.jsxs(po,{children:[o.jsx(x4,{children:o.jsxs(b4,{onClick:ue,children:[o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7",strokeLinecap:"round",strokeLinejoin:"round"})}),"Back to Clubs & Courts"]})}),o.jsxs(v4,{children:[o.jsx(y4,{children:o.jsx(w4,{$imageIndex:s.findIndex(I=>I.id===C.id)%3})}),o.jsxs(S4,{children:[o.jsxs(j4,{children:[o.jsxs(C4,{children:[o.jsxs(E4,{children:[o.jsx("h1",{children:C.name}),C.isVerified&&o.jsxs(k4,{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M9 12l2 2 4-4",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.745 3.745 0 0 1 3.296-1.043A3.745 3.745 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12z"})]}),"Verified"]})]}),o.jsx(z4,{children:o.jsx(hh,{type:C.type==="club"?"club":"courts",children:C.type==="club"?"Club":"Club & Courts"})})]}),o.jsx(T4,{children:C.description}),o.jsxs(xc,{children:[o.jsxs(bc,{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"Location & Map"]}),o.jsxs(A4,{children:[o.jsxs(M4,{children:[o.jsx("h4",{children:C.address}),o.jsx("p",{children:"Get directions to this venue and explore the surrounding area"}),o.jsxs(R4,{children:[o.jsxs(mh,{$primary:!0,children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"}),o.jsx("path",{d:"M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"})]}),"Get Directions"]}),o.jsxs(mh,{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),o.jsx("polyline",{points:"15,3 21,3 21,9"}),o.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),"Share Location"]})]})]}),o.jsx(D4,{children:o.jsxs(O4,{children:[o.jsxs(L4,{children:[o.jsx(B4,{children:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]})}),o.jsx(U4,{children:C.name})]}),o.jsx(_4,{children:Array.from({length:35},(I,ye)=>o.jsx(N4,{},ye))})]})})]})]}),o.jsxs(xc,{children:[o.jsxs(bc,{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),o.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),o.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),o.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),"Venue Information"]}),o.jsxs(H4,{children:[C.type==="club_and_courts"&&o.jsxs(Ol,{children:[o.jsx(_l,{children:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("circle",{cx:"12",cy:"12",r:"10"}),o.jsx("polyline",{points:"12,6 12,12 16,14"})]})}),o.jsxs("div",{children:[o.jsx("span",{children:"Operating Hours"}),o.jsx("p",{children:C.hours})]})]}),o.jsxs(Ol,{children:[o.jsx(_l,{children:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),o.jsx("circle",{cx:"9",cy:"7",r:"4"}),o.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),o.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}),o.jsxs("div",{children:[o.jsx("span",{children:"Community Size"}),o.jsxs("p",{children:[C.members," Active Members"]})]})]}),C.contactEmail&&o.jsxs(Ol,{children:[o.jsx(_l,{children:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),o.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),o.jsxs("div",{children:[o.jsx("span",{children:"Email Contact"}),o.jsx("p",{children:C.contactEmail})]})]}),C.contactPhone&&o.jsxs(Ol,{children:[o.jsx(_l,{children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})})}),o.jsxs("div",{children:[o.jsx("span",{children:"Phone Contact"}),o.jsx("p",{children:C.contactPhone})]})]}),C.website&&o.jsxs(Ol,{children:[o.jsx(_l,{children:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("circle",{cx:"12",cy:"12",r:"10"}),o.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),o.jsx("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]})}),o.jsxs("div",{children:[o.jsx("span",{children:"Website"}),o.jsx("p",{children:C.website})]})]})]})]}),C.amenities&&C.amenities.length>0&&o.jsxs(xc,{children:[o.jsxs(bc,{children:[o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})}),"Amenities & Features"]}),o.jsx(Y4,{children:C.amenities.map((I,ye)=>o.jsxs($4,{children:[o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M20 6L9 17l-5-5",strokeLinecap:"round",strokeLinejoin:"round"})}),I]},ye))})]})]}),o.jsx(q4,{children:o.jsxs(G4,{children:[o.jsx(V4,{onClick:I=>Q(I,C.id),disabled:k.has(C.id)||N.has(C.id),$isPending:N.has(C.id),children:k.has(C.id)?"Joined":N.has(C.id)?"Pending Approval":"Join Now"}),o.jsx(X4,{children:k.has(C.id)?"You are a member of this venue":N.has(C.id)?"Your join request is pending approval from the venue administrators":"Join this venue to access exclusive features and connect with the community"})]})})]})]}),q&&o.jsx(zo,{isOpen:q,onClose:()=>X(!1),title:"Join the Club!",message:"Sign in or register to join clubs and access courts"})]}):o.jsxs(po,{children:[o.jsx(hc,{children:"Clubs & Courts"}),o.jsx(mc,{children:"Discover pickleball venues and communities across the Philippines."}),o.jsxs(i4,{children:[o.jsxs(l4,{children:[o.jsx(Z4,{}),o.jsx(r4,{type:"text",placeholder:"Search by name or location...",value:w,onChange:I=>x(I.target.value)})]}),o.jsxs(o4,{children:[o.jsx(gc,{$active:m==="all",onClick:()=>E("all"),children:"All"}),o.jsx(gc,{$active:m==="clubs",onClick:()=>E("clubs"),children:"Clubs Only"}),o.jsx(gc,{$active:m==="courts",onClick:()=>E("courts"),children:"With Courts"})]})]}),V.length===0?o.jsx(h4,{children:"No venues found matching your criteria"}):o.jsx(s4,{children:V.map((I,ye)=>o.jsxs(u4,{onClick:()=>ge(I),children:[o.jsx(c4,{$imageIndex:ye%3}),o.jsxs(f4,{children:[o.jsx("h3",{children:I.name}),o.jsx("div",{children:o.jsx(hh,{type:I.type==="club"?"club":"courts",children:I.type==="club"?"Club":"Club & Courts"})}),o.jsx("p",{children:I.description}),o.jsxs(d4,{children:[o.jsxs("div",{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),I.address]}),I.type==="club_and_courts"&&o.jsxs("div",{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),o.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),o.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),o.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),I.hours]}),o.jsxs("div",{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),o.jsx("circle",{cx:"9",cy:"7",r:"4"}),o.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),o.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),I.members," Members"]})]}),o.jsx(p4,{onClick:Ce=>Q(Ce,I.id),disabled:k.has(I.id)||N.has(I.id),$isPending:N.has(I.id),children:k.has(I.id)?"Joined":N.has(I.id)?"Pending Approval":"Join Now"})]})]},I.id))}),q&&o.jsx(zo,{isOpen:q,onClose:()=>X(!1),title:"Join the Club!",message:"Sign in or register to join clubs and access courts"})]})},gm="/my-pickleball-app/vite.svg",K4=g.div`
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
`,J4=g.div`
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
`,W4=g.div`
  text-align: center;
  margin-bottom: 32px;
`,P4=g.div`
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
`,F4=g.h1`
  color: #234255;
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 8px;
  text-align: center;
`,I4=g.p`
  color: #64748b;
  font-size: 15px;
  margin: 0 0 32px;
  text-align: center;
`,e6=g.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,gh=g.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,xh=g.label`
  color: #475569;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,t6=g.div`
  position: relative;
`,bh=g.input`
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
`,n6=g.button`
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
`,a6=g.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: -8px;
`,i6=g.input`
  width: 16px;
  height: 16px;
  accent-color: #29ba9b;
`,l6=g.label`
  color: #475569;
  font-size: 14px;
  cursor: pointer;
`,r6=g.a`
  color: #29ba9b;
  font-size: 14px;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`,o6=g.button`
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
`,s6=g.div`
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
`,u6=g.div`
  display: flex;
  gap: 16px;
`,c6=g.button`
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
`,f6=g.p`
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
`,d6=()=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),o.jsx("path",{d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}),p6=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"})}),yc=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),h6=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:o.jsx("path",{d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"})}),m6=()=>{const i=Gl(),{loginWithDummyData:s}=Ti(),[c,u]=j.useState({email:"",password:""}),[d,h]=j.useState(!1),[b,w]=j.useState(!1),[x,m]=j.useState({}),[E,k]=j.useState(!1),A=C=>{var Z;const M=["gmail.com","yahoo.com","hotmail.com","outlook.com","icloud.com","protonmail.com","zoho.com","aol.com","live.com","msn.com"],G=(Z=C.split("@")[1])==null?void 0:Z.toLowerCase();return M.includes(G)},N=()=>{const C={};return c.email?/\S+@\S+\.\S+/.test(c.email)?A(c.email)||(C.email="Please use a valid email provider (Gmail, Yahoo, Outlook, etc.)"):C.email="Please enter a valid email":C.email="Email is required",c.password?c.password.length<6&&(C.password="Password must be at least 6 characters"):C.password="Password is required",m(C),Object.keys(C).length===0},D=C=>{const{name:M,value:G}=C.target;u(Z=>({...Z,[M]:G})),x[M]&&m(Z=>({...Z,[M]:""}))},q=async C=>{if(C.preventDefault(),!!N()){k(!0);try{await new Promise(M=>setTimeout(M,1500)),s(),i("/")}catch(M){m(G=>({...G,submit:M.message||"Failed to sign in. Please try again."}))}finally{k(!1)}}},X=async C=>{try{console.log(`Signing in with ${C}`)}catch{m(G=>({...G,submit:`Failed to sign in with ${C}. Please try again.`}))}};return o.jsx(K4,{children:o.jsxs(J4,{children:[o.jsxs(W4,{children:[o.jsx(P4,{children:o.jsx("img",{src:gm,alt:"Vite Logo"})}),o.jsx(F4,{children:"Welcome Back"}),o.jsx(I4,{children:"Sign in to Philippine Pickleball League"})]}),o.jsxs(e6,{onSubmit:q,children:[o.jsxs(gh,{children:[o.jsx(xh,{htmlFor:"email",children:"Email"}),o.jsx(bh,{type:"email",id:"email",name:"email",placeholder:"Enter your email",value:c.email,onChange:D,required:!0,autoComplete:"email",$hasError:!!x.email}),x.email&&o.jsxs(vc,{children:[o.jsx(yc,{}),x.email]})]}),o.jsxs(gh,{children:[o.jsxs(xh,{htmlFor:"password",children:["Password",o.jsx(r6,{href:"/forgot-password",children:"Forgot password?"})]}),o.jsxs(t6,{children:[o.jsx(bh,{type:d?"text":"password",id:"password",name:"password",placeholder:"Enter your password",value:c.password,onChange:D,required:!0,autoComplete:"current-password",$hasError:!!x.password,$hasPassword:!0}),o.jsx(n6,{type:"button",onClick:()=>h(!d),"aria-label":d?"Hide password":"Show password",children:d?o.jsx(p6,{}):o.jsx(d6,{})})]}),x.password&&o.jsxs(vc,{children:[o.jsx(yc,{}),x.password]})]}),o.jsxs(a6,{children:[o.jsx(i6,{type:"checkbox",id:"rememberMe",checked:b,onChange:C=>w(C.target.checked)}),o.jsx(l6,{htmlFor:"rememberMe",children:"Remember me"})]}),o.jsx(o6,{type:"submit",disabled:E,$loading:E,children:E?"Signing in...":"Sign in"}),x.submit&&o.jsxs(vc,{children:[o.jsx(yc,{}),x.submit]})]}),o.jsx(s6,{children:o.jsx("span",{children:"or continue with"})}),o.jsx(u6,{children:o.jsxs(c6,{onClick:()=>X("Google"),children:[o.jsx(h6,{}),"Google"]})}),o.jsxs(f6,{children:["Don't have an account?",o.jsx("a",{href:"/register",children:"Create one"})]})]})})},g6=g.div`
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
`,x6=g.div`
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
`,b6=g.div`
  text-align: center;
  margin-bottom: 32px;
`,v6=g.div`
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
`,y6=g.h1`
  color: #234255;
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 8px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
    margin: 0 0 6px;
  }
`,w6=g.p`
  color: #64748b;
  font-size: 15px;
  margin: 0 0 32px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
    margin: 0 0 24px;
  }
`,S6=g.form`
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
`,vh=g.div`
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
`;const yh=g.button`
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
`,j6=g.div`
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
`,C6=g.button`
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
`,E6=g.p`
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
`,z6=g.div`
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
`,k6=g.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`,T6=g.button`
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
`,wh=()=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),o.jsx("path",{d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}),Sh=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"})}),Ll=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M5 13l4 4L19 7"})}),Sa=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),A6=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:o.jsx("path",{d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"})}),M6=()=>{const i=Gl(),[s,c]=j.useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:"",birthDate:""}),[u,d]=j.useState(!1),[h,b]=j.useState(!1),[w,x]=j.useState({}),[m,E]=j.useState(!1),k={length:s.password.length>=8,uppercase:/[A-Z]/.test(s.password),lowercase:/[a-z]/.test(s.password),number:/[0-9]/.test(s.password),special:/[!@#$%^&*]/.test(s.password)},A=C=>{var Z;const M=["gmail.com","yahoo.com","hotmail.com","outlook.com","icloud.com","protonmail.com","zoho.com","aol.com","live.com","msn.com"],G=(Z=C.split("@")[1])==null?void 0:Z.toLowerCase();return M.includes(G)},N=()=>{const C={};return s.firstName.trim()||(C.firstName="First name is required"),s.lastName.trim()||(C.lastName="Last name is required"),s.email?/\S+@\S+\.\S+/.test(s.email)?A(s.email)||(C.email="Please use a valid email provider (Gmail, Yahoo, Outlook, etc.)"):C.email="Please enter a valid email":C.email="Email is required",s.password?Object.values(k).every(Boolean)||(C.password="Password does not meet requirements"):C.password="Password is required",s.confirmPassword?s.password!==s.confirmPassword&&(C.confirmPassword="Passwords do not match"):C.confirmPassword="Please confirm your password",s.birthDate?new Date().getFullYear()-new Date(s.birthDate).getFullYear()<13&&(C.birthDate="You must be at least 13 years old"):C.birthDate="Birth date is required",x(C),Object.keys(C).length===0},D=C=>{const{name:M,value:G}=C.target;c(Z=>({...Z,[M]:G})),w[M]&&x(Z=>({...Z,[M]:""}))},q=async C=>{if(C.preventDefault(),!!N()){E(!0);try{await new Promise(M=>setTimeout(M,1500)),i("/")}catch(M){x(G=>({...G,submit:M.message||"Failed to create account. Please try again."}))}finally{E(!1)}}},X=async C=>{try{console.log(`Signing up with ${C}`)}catch{x(G=>({...G,submit:`Failed to sign up with ${C}. Please try again.`}))}};return o.jsx(g6,{children:o.jsxs(x6,{children:[o.jsxs(b6,{children:[o.jsx(v6,{children:o.jsx("img",{src:gm,alt:"Vite Logo"})}),o.jsx(y6,{children:"Create Account"}),o.jsx(w6,{children:"Join the Philippine Pickleball League"})]}),o.jsxs(S6,{onSubmit:q,children:[o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:"16px"},children:[o.jsxs(gi,{children:[o.jsx(xi,{htmlFor:"firstName",children:"First Name"}),o.jsx(bi,{type:"text",id:"firstName",name:"firstName",placeholder:"Enter first name",value:s.firstName,onChange:D,required:!0,$hasError:!!w.firstName}),w.firstName&&o.jsxs(wa,{children:[o.jsx(Sa,{}),w.firstName]})]}),o.jsxs(gi,{children:[o.jsx(xi,{htmlFor:"lastName",children:"Last Name"}),o.jsx(bi,{type:"text",id:"lastName",name:"lastName",placeholder:"Enter last name",value:s.lastName,onChange:D,required:!0,$hasError:!!w.lastName}),w.lastName&&o.jsxs(wa,{children:[o.jsx(Sa,{}),w.lastName]})]})]}),o.jsxs(gi,{children:[o.jsx(xi,{htmlFor:"email",children:"Email"}),o.jsx(bi,{type:"email",id:"email",name:"email",placeholder:"Enter your email",value:s.email,onChange:D,required:!0,autoComplete:"email",$hasError:!!w.email}),w.email&&o.jsxs(wa,{children:[o.jsx(Sa,{}),w.email]})]}),o.jsxs(gi,{children:[o.jsx(xi,{htmlFor:"birthDate",children:"Birth Date"}),o.jsx(bi,{type:"date",id:"birthDate",name:"birthDate",value:s.birthDate,onChange:D,required:!0,$hasError:!!w.birthDate}),w.birthDate&&o.jsxs(wa,{children:[o.jsx(Sa,{}),w.birthDate]})]}),o.jsxs(gi,{children:[o.jsx(xi,{htmlFor:"password",children:"Password"}),o.jsxs(vh,{children:[o.jsx(bi,{type:u?"text":"password",id:"password",name:"password",placeholder:"Create a password",value:s.password,onChange:D,required:!0,$hasError:!!w.password,$hasPassword:!0}),o.jsx(yh,{type:"button",onClick:()=>d(!u),"aria-label":u?"Hide password":"Show password",children:u?o.jsx(Sh,{}):o.jsx(wh,{})})]}),o.jsxs(j6,{children:[o.jsxs(Nl,{$met:k.length,children:[k.length?o.jsx(Ll,{}):"•"," At least 8 characters"]}),o.jsxs(Nl,{$met:k.uppercase,children:[k.uppercase?o.jsx(Ll,{}):"•"," One uppercase letter"]}),o.jsxs(Nl,{$met:k.lowercase,children:[k.lowercase?o.jsx(Ll,{}):"•"," One lowercase letter"]}),o.jsxs(Nl,{$met:k.number,children:[k.number?o.jsx(Ll,{}):"•"," One number"]}),o.jsxs(Nl,{$met:k.special,children:[k.special?o.jsx(Ll,{}):"•"," One special character"]})]}),w.password&&o.jsxs(wa,{children:[o.jsx(Sa,{}),w.password]})]}),o.jsxs(gi,{children:[o.jsx(xi,{htmlFor:"confirmPassword",children:"Confirm Password"}),o.jsxs(vh,{children:[o.jsx(bi,{type:h?"text":"password",id:"confirmPassword",name:"confirmPassword",placeholder:"Confirm your password",value:s.confirmPassword,onChange:D,required:!0,$hasError:!!w.confirmPassword,$hasPassword:!0}),o.jsx(yh,{type:"button",onClick:()=>b(!h),"aria-label":h?"Hide password":"Show password",children:h?o.jsx(Sh,{}):o.jsx(wh,{})})]}),w.confirmPassword&&o.jsxs(wa,{children:[o.jsx(Sa,{}),w.confirmPassword]})]}),o.jsx(C6,{type:"submit",disabled:m,$loading:m,children:m?"Creating account...":"Create account"}),w.submit&&o.jsxs(wa,{children:[o.jsx(Sa,{}),w.submit]})]}),o.jsx(z6,{children:o.jsx("span",{children:"or sign up with"})}),o.jsx(k6,{children:o.jsxs(T6,{onClick:()=>X("Google"),children:[o.jsx(A6,{}),"Google"]})}),o.jsxs(E6,{children:["Already have an account?",o.jsx("a",{href:"/signin",children:"Sign in"})]})]})})};function R6(){const{notification:i,hideNotification:s}=Ti();return o.jsxs("div",{className:"app",children:[o.jsx(kb,{}),o.jsxs(Ax,{children:[o.jsx(In,{path:"/",element:o.jsx(lv,{})}),o.jsx(In,{path:"/forum",element:o.jsx(Iv,{})}),o.jsx(In,{path:"/tournament",element:o.jsx(Ey,{})}),o.jsx(In,{path:"/ranks",element:o.jsx(a4,{})}),o.jsx(In,{path:"/clubs-courts",element:o.jsx(Q4,{})}),o.jsx(In,{path:"/signin",element:o.jsx(m6,{})}),o.jsx(In,{path:"/register",element:o.jsx(M6,{})})]}),o.jsx(_b,{}),o.jsx(Gb,{message:i.message,type:i.type,isVisible:i.isVisible,onClose:s})]})}function D6(){return o.jsx(u2,{children:o.jsx(R6,{})})}U1.createRoot(document.getElementById("root")).render(o.jsx(yi.StrictMode,{children:o.jsx(Ix,{basename:"/my-pickleball-app",children:o.jsx(D6,{})})}));
