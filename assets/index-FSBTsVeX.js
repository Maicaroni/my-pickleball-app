(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const w of h.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&c(w)}).observe(document,{childList:!0,subtree:!0});function u(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(f){if(f.ep)return;f.ep=!0;const h=u(f);fetch(f.href,h)}})();function Ax(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var eu={exports:{}},qo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hh;function T2(){if(Hh)return qo;Hh=1;var r=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function u(c,f,h){var w=null;if(h!==void 0&&(w=""+h),f.key!==void 0&&(w=""+f.key),"key"in f){h={};for(var k in f)k!=="key"&&(h[k]=f[k])}else h=f;return f=h.ref,{$$typeof:r,type:c,key:w,ref:f!==void 0?f:null,props:h}}return qo.Fragment=d,qo.jsx=u,qo.jsxs=u,qo}var _h;function R2(){return _h||(_h=1,eu.exports=T2()),eu.exports}var n=R2(),tu={exports:{}},Ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gh;function A2(){if(Gh)return Ne;Gh=1;var r=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),w=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),O=Symbol.iterator;function E(S){return S===null||typeof S!="object"?null:(S=O&&S[O]||S["@@iterator"],typeof S=="function"?S:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,Q={};function V(S,Z,pe){this.props=S,this.context=Z,this.refs=Q,this.updater=pe||W}V.prototype.isReactComponent={},V.prototype.setState=function(S,Z){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,Z,"setState")},V.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function A(){}A.prototype=V.prototype;function B(S,Z,pe){this.props=S,this.context=Z,this.refs=Q,this.updater=pe||W}var z=B.prototype=new A;z.constructor=B,$(z,V.prototype),z.isPureReactComponent=!0;var re=Array.isArray,C={H:null,A:null,T:null,S:null,V:null},D=Object.prototype.hasOwnProperty;function K(S,Z,pe,I,fe,Ce){return pe=Ce.ref,{$$typeof:r,type:S,key:Z,ref:pe!==void 0?pe:null,props:Ce}}function ke(S,Z){return K(S.type,Z,void 0,void 0,void 0,S.props)}function we(S){return typeof S=="object"&&S!==null&&S.$$typeof===r}function ce(S){var Z={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(pe){return Z[pe]})}var le=/\/+/g;function qe(S,Z){return typeof S=="object"&&S!==null&&S.key!=null?ce(""+S.key):Z.toString(36)}function mt(){}function ht(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(mt,mt):(S.status="pending",S.then(function(Z){S.status==="pending"&&(S.status="fulfilled",S.value=Z)},function(Z){S.status==="pending"&&(S.status="rejected",S.reason=Z)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function Je(S,Z,pe,I,fe){var Ce=typeof S;(Ce==="undefined"||Ce==="boolean")&&(S=null);var ve=!1;if(S===null)ve=!0;else switch(Ce){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(S.$$typeof){case r:case d:ve=!0;break;case M:return ve=S._init,Je(ve(S._payload),Z,pe,I,fe)}}if(ve)return fe=fe(S),ve=I===""?"."+qe(S,0):I,re(fe)?(pe="",ve!=null&&(pe=ve.replace(le,"$&/")+"/"),Je(fe,Z,pe,"",function(it){return it})):fe!=null&&(we(fe)&&(fe=ke(fe,pe+(fe.key==null||S&&S.key===fe.key?"":(""+fe.key).replace(le,"$&/")+"/")+ve)),Z.push(fe)),1;ve=0;var nt=I===""?".":I+":";if(re(S))for(var Ae=0;Ae<S.length;Ae++)I=S[Ae],Ce=nt+qe(I,Ae),ve+=Je(I,Z,pe,Ce,fe);else if(Ae=E(S),typeof Ae=="function")for(S=Ae.call(S),Ae=0;!(I=S.next()).done;)I=I.value,Ce=nt+qe(I,Ae++),ve+=Je(I,Z,pe,Ce,fe);else if(Ce==="object"){if(typeof S.then=="function")return Je(ht(S),Z,pe,I,fe);throw Z=String(S),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return ve}function F(S,Z,pe){if(S==null)return S;var I=[],fe=0;return Je(S,I,"","",function(Ce){return Z.call(pe,Ce,fe++)}),I}function J(S){if(S._status===-1){var Z=S._result;Z=Z(),Z.then(function(pe){(S._status===0||S._status===-1)&&(S._status=1,S._result=pe)},function(pe){(S._status===0||S._status===-1)&&(S._status=2,S._result=pe)}),S._status===-1&&(S._status=0,S._result=Z)}if(S._status===1)return S._result.default;throw S._result}var ye=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)};function De(){}return Ne.Children={map:F,forEach:function(S,Z,pe){F(S,function(){Z.apply(this,arguments)},pe)},count:function(S){var Z=0;return F(S,function(){Z++}),Z},toArray:function(S){return F(S,function(Z){return Z})||[]},only:function(S){if(!we(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},Ne.Component=V,Ne.Fragment=u,Ne.Profiler=f,Ne.PureComponent=B,Ne.StrictMode=c,Ne.Suspense=v,Ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,Ne.__COMPILER_RUNTIME={__proto__:null,c:function(S){return C.H.useMemoCache(S)}},Ne.cache=function(S){return function(){return S.apply(null,arguments)}},Ne.cloneElement=function(S,Z,pe){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var I=$({},S.props),fe=S.key,Ce=void 0;if(Z!=null)for(ve in Z.ref!==void 0&&(Ce=void 0),Z.key!==void 0&&(fe=""+Z.key),Z)!D.call(Z,ve)||ve==="key"||ve==="__self"||ve==="__source"||ve==="ref"&&Z.ref===void 0||(I[ve]=Z[ve]);var ve=arguments.length-2;if(ve===1)I.children=pe;else if(1<ve){for(var nt=Array(ve),Ae=0;Ae<ve;Ae++)nt[Ae]=arguments[Ae+2];I.children=nt}return K(S.type,fe,void 0,void 0,Ce,I)},Ne.createContext=function(S){return S={$$typeof:w,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:h,_context:S},S},Ne.createElement=function(S,Z,pe){var I,fe={},Ce=null;if(Z!=null)for(I in Z.key!==void 0&&(Ce=""+Z.key),Z)D.call(Z,I)&&I!=="key"&&I!=="__self"&&I!=="__source"&&(fe[I]=Z[I]);var ve=arguments.length-2;if(ve===1)fe.children=pe;else if(1<ve){for(var nt=Array(ve),Ae=0;Ae<ve;Ae++)nt[Ae]=arguments[Ae+2];fe.children=nt}if(S&&S.defaultProps)for(I in ve=S.defaultProps,ve)fe[I]===void 0&&(fe[I]=ve[I]);return K(S,Ce,void 0,void 0,null,fe)},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(S){return{$$typeof:k,render:S}},Ne.isValidElement=we,Ne.lazy=function(S){return{$$typeof:M,_payload:{_status:-1,_result:S},_init:J}},Ne.memo=function(S,Z){return{$$typeof:x,type:S,compare:Z===void 0?null:Z}},Ne.startTransition=function(S){var Z=C.T,pe={};C.T=pe;try{var I=S(),fe=C.S;fe!==null&&fe(pe,I),typeof I=="object"&&I!==null&&typeof I.then=="function"&&I.then(De,ye)}catch(Ce){ye(Ce)}finally{C.T=Z}},Ne.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},Ne.use=function(S){return C.H.use(S)},Ne.useActionState=function(S,Z,pe){return C.H.useActionState(S,Z,pe)},Ne.useCallback=function(S,Z){return C.H.useCallback(S,Z)},Ne.useContext=function(S){return C.H.useContext(S)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(S,Z){return C.H.useDeferredValue(S,Z)},Ne.useEffect=function(S,Z,pe){var I=C.H;if(typeof pe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return I.useEffect(S,Z)},Ne.useId=function(){return C.H.useId()},Ne.useImperativeHandle=function(S,Z,pe){return C.H.useImperativeHandle(S,Z,pe)},Ne.useInsertionEffect=function(S,Z){return C.H.useInsertionEffect(S,Z)},Ne.useLayoutEffect=function(S,Z){return C.H.useLayoutEffect(S,Z)},Ne.useMemo=function(S,Z){return C.H.useMemo(S,Z)},Ne.useOptimistic=function(S,Z){return C.H.useOptimistic(S,Z)},Ne.useReducer=function(S,Z,pe){return C.H.useReducer(S,Z,pe)},Ne.useRef=function(S){return C.H.useRef(S)},Ne.useState=function(S){return C.H.useState(S)},Ne.useSyncExternalStore=function(S,Z,pe){return C.H.useSyncExternalStore(S,Z,pe)},Ne.useTransition=function(){return C.H.useTransition()},Ne.version="19.1.0",Ne}var Yh;function tp(){return Yh||(Yh=1,tu.exports=A2()),tu.exports}var y=tp();const Nr=Ax(y);var nu={exports:{}},Uo={},iu={exports:{}},au={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wh;function P2(){return Wh||(Wh=1,function(r){function d(F,J){var ye=F.length;F.push(J);e:for(;0<ye;){var De=ye-1>>>1,S=F[De];if(0<f(S,J))F[De]=J,F[ye]=S,ye=De;else break e}}function u(F){return F.length===0?null:F[0]}function c(F){if(F.length===0)return null;var J=F[0],ye=F.pop();if(ye!==J){F[0]=ye;e:for(var De=0,S=F.length,Z=S>>>1;De<Z;){var pe=2*(De+1)-1,I=F[pe],fe=pe+1,Ce=F[fe];if(0>f(I,ye))fe<S&&0>f(Ce,I)?(F[De]=Ce,F[fe]=ye,De=fe):(F[De]=I,F[pe]=ye,De=pe);else if(fe<S&&0>f(Ce,ye))F[De]=Ce,F[fe]=ye,De=fe;else break e}}return J}function f(F,J){var ye=F.sortIndex-J.sortIndex;return ye!==0?ye:F.id-J.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;r.unstable_now=function(){return h.now()}}else{var w=Date,k=w.now();r.unstable_now=function(){return w.now()-k}}var v=[],x=[],M=1,O=null,E=3,W=!1,$=!1,Q=!1,V=!1,A=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function re(F){for(var J=u(x);J!==null;){if(J.callback===null)c(x);else if(J.startTime<=F)c(x),J.sortIndex=J.expirationTime,d(v,J);else break;J=u(x)}}function C(F){if(Q=!1,re(F),!$)if(u(v)!==null)$=!0,D||(D=!0,qe());else{var J=u(x);J!==null&&Je(C,J.startTime-F)}}var D=!1,K=-1,ke=5,we=-1;function ce(){return V?!0:!(r.unstable_now()-we<ke)}function le(){if(V=!1,D){var F=r.unstable_now();we=F;var J=!0;try{e:{$=!1,Q&&(Q=!1,B(K),K=-1),W=!0;var ye=E;try{t:{for(re(F),O=u(v);O!==null&&!(O.expirationTime>F&&ce());){var De=O.callback;if(typeof De=="function"){O.callback=null,E=O.priorityLevel;var S=De(O.expirationTime<=F);if(F=r.unstable_now(),typeof S=="function"){O.callback=S,re(F),J=!0;break t}O===u(v)&&c(v),re(F)}else c(v);O=u(v)}if(O!==null)J=!0;else{var Z=u(x);Z!==null&&Je(C,Z.startTime-F),J=!1}}break e}finally{O=null,E=ye,W=!1}J=void 0}}finally{J?qe():D=!1}}}var qe;if(typeof z=="function")qe=function(){z(le)};else if(typeof MessageChannel<"u"){var mt=new MessageChannel,ht=mt.port2;mt.port1.onmessage=le,qe=function(){ht.postMessage(null)}}else qe=function(){A(le,0)};function Je(F,J){K=A(function(){F(r.unstable_now())},J)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ke=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return E},r.unstable_next=function(F){switch(E){case 1:case 2:case 3:var J=3;break;default:J=E}var ye=E;E=J;try{return F()}finally{E=ye}},r.unstable_requestPaint=function(){V=!0},r.unstable_runWithPriority=function(F,J){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ye=E;E=F;try{return J()}finally{E=ye}},r.unstable_scheduleCallback=function(F,J,ye){var De=r.unstable_now();switch(typeof ye=="object"&&ye!==null?(ye=ye.delay,ye=typeof ye=="number"&&0<ye?De+ye:De):ye=De,F){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=ye+S,F={id:M++,callback:J,priorityLevel:F,startTime:ye,expirationTime:S,sortIndex:-1},ye>De?(F.sortIndex=ye,d(x,F),u(v)===null&&F===u(x)&&(Q?(B(K),K=-1):Q=!0,Je(C,ye-De))):(F.sortIndex=S,d(v,F),$||W||($=!0,D||(D=!0,qe()))),F},r.unstable_shouldYield=ce,r.unstable_wrapCallback=function(F){var J=E;return function(){var ye=E;E=J;try{return F.apply(this,arguments)}finally{E=ye}}}}(au)),au}var Fh;function D2(){return Fh||(Fh=1,iu.exports=P2()),iu.exports}var ru={exports:{}},rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vh;function E2(){if(Vh)return rn;Vh=1;var r=tp();function d(v){var x="https://react.dev/errors/"+v;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)x+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+v+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(d(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},f=Symbol.for("react.portal");function h(v,x,M){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:O==null?null:""+O,children:v,containerInfo:x,implementation:M}}var w=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function k(v,x){if(v==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,rn.createPortal=function(v,x){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(d(299));return h(v,x,null,M)},rn.flushSync=function(v){var x=w.T,M=c.p;try{if(w.T=null,c.p=2,v)return v()}finally{w.T=x,c.p=M,c.d.f()}},rn.preconnect=function(v,x){typeof v=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,c.d.C(v,x))},rn.prefetchDNS=function(v){typeof v=="string"&&c.d.D(v)},rn.preinit=function(v,x){if(typeof v=="string"&&x&&typeof x.as=="string"){var M=x.as,O=k(M,x.crossOrigin),E=typeof x.integrity=="string"?x.integrity:void 0,W=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;M==="style"?c.d.S(v,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:O,integrity:E,fetchPriority:W}):M==="script"&&c.d.X(v,{crossOrigin:O,integrity:E,fetchPriority:W,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},rn.preinitModule=function(v,x){if(typeof v=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var M=k(x.as,x.crossOrigin);c.d.M(v,{crossOrigin:M,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&c.d.M(v)},rn.preload=function(v,x){if(typeof v=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var M=x.as,O=k(M,x.crossOrigin);c.d.L(v,M,{crossOrigin:O,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},rn.preloadModule=function(v,x){if(typeof v=="string")if(x){var M=k(x.as,x.crossOrigin);c.d.m(v,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:M,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else c.d.m(v)},rn.requestFormReset=function(v){c.d.r(v)},rn.unstable_batchedUpdates=function(v,x){return v(x)},rn.useFormState=function(v,x,M){return w.H.useFormState(v,x,M)},rn.useFormStatus=function(){return w.H.useHostTransitionStatus()},rn.version="19.1.0",rn}var Qh;function $2(){if(Qh)return ru.exports;Qh=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(d){console.error(d)}}return r(),ru.exports=E2(),ru.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ih;function B2(){if(Ih)return Uo;Ih=1;var r=D2(),d=tp(),u=$2();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function w(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function k(e){if(h(e)!==e)throw Error(c(188))}function v(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(c(188));return t!==e?null:e}for(var i=e,a=t;;){var o=i.return;if(o===null)break;var l=o.alternate;if(l===null){if(a=o.return,a!==null){i=a;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===i)return k(o),e;if(l===a)return k(o),t;l=l.sibling}throw Error(c(188))}if(i.return!==a.return)i=o,a=l;else{for(var p=!1,m=o.child;m;){if(m===i){p=!0,i=o,a=l;break}if(m===a){p=!0,a=o,i=l;break}m=m.sibling}if(!p){for(m=l.child;m;){if(m===i){p=!0,i=l,a=o;break}if(m===a){p=!0,a=l,i=o;break}m=m.sibling}if(!p)throw Error(c(189))}}if(i.alternate!==a)throw Error(c(190))}if(i.tag!==3)throw Error(c(188));return i.stateNode.current===i?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var M=Object.assign,O=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),W=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),z=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),ke=Symbol.for("react.lazy"),we=Symbol.for("react.activity"),ce=Symbol.for("react.memo_cache_sentinel"),le=Symbol.iterator;function qe(e){return e===null||typeof e!="object"?null:(e=le&&e[le]||e["@@iterator"],typeof e=="function"?e:null)}var mt=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===mt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $:return"Fragment";case V:return"Profiler";case Q:return"StrictMode";case C:return"Suspense";case D:return"SuspenseList";case we:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case W:return"Portal";case z:return(e.displayName||"Context")+".Provider";case B:return(e._context.displayName||"Context")+".Consumer";case re:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return t=e.displayName||null,t!==null?t:ht(e.type)||"Memo";case ke:t=e._payload,e=e._init;try{return ht(e(t))}catch{}}return null}var Je=Array.isArray,F=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ye={pending:!1,data:null,method:null,action:null},De=[],S=-1;function Z(e){return{current:e}}function pe(e){0>S||(e.current=De[S],De[S]=null,S--)}function I(e,t){S++,De[S]=e.current,e.current=t}var fe=Z(null),Ce=Z(null),ve=Z(null),nt=Z(null);function Ae(e,t){switch(I(ve,t),I(Ce,e),I(fe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?hh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=hh(t),e=xh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}pe(fe),I(fe,e)}function it(){pe(fe),pe(Ce),pe(ve)}function qt(e){e.memoizedState!==null&&I(nt,e);var t=fe.current,i=xh(t,e.type);t!==i&&(I(Ce,e),I(fe,i))}function he(e){Ce.current===e&&(pe(fe),pe(Ce)),nt.current===e&&(pe(nt),Eo._currentValue=ye)}var Qe=Object.prototype.hasOwnProperty,bn=r.unstable_scheduleCallback,qn=r.unstable_cancelCallback,_=r.unstable_shouldYield,de=r.unstable_requestPaint,te=r.unstable_now,ze=r.unstable_getCurrentPriorityLevel,Le=r.unstable_ImmediatePriority,xt=r.unstable_UserBlockingPriority,Dt=r.unstable_NormalPriority,St=r.unstable_LowPriority,Rt=r.unstable_IdlePriority,fi=r.log,at=r.unstable_setDisableYieldValue,Un=null,vt=null;function en(e){if(typeof fi=="function"&&at(e),vt&&typeof vt.setStrictMode=="function")try{vt.setStrictMode(Un,e)}catch{}}var wt=Math.clz32?Math.clz32:Ei,on=Math.log,pa=Math.LN2;function Ei(e){return e>>>=0,e===0?32:31-(on(e)/pa|0)|0}var Hn=256,ln=4194304;function It(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Mn(e,t,i){var a=e.pendingLanes;if(a===0)return 0;var o=0,l=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var m=a&134217727;return m!==0?(a=m&~l,a!==0?o=It(a):(p&=m,p!==0?o=It(p):i||(i=m&~e,i!==0&&(o=It(i))))):(m=a&~l,m!==0?o=It(m):p!==0?o=It(p):i||(i=a&~e,i!==0&&(o=It(i)))),o===0?0:t!==0&&t!==o&&(t&l)===0&&(l=o&-o,i=t&-t,l>=i||l===32&&(i&4194048)!==0)?t:o}function cn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function mi(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zn(){var e=Hn;return Hn<<=1,(Hn&4194048)===0&&(Hn=256),e}function Xn(){var e=ln;return ln<<=1,(ln&62914560)===0&&(ln=4194304),e}function _n(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function sn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Gn(e,t,i,a,o,l){var p=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var m=e.entanglements,j=e.expirationTimes,U=e.hiddenUpdates;for(i=p&~i;0<i;){var X=31-wt(i),ie=1<<X;m[X]=0,j[X]=-1;var H=U[X];if(H!==null)for(U[X]=null,X=0;X<H.length;X++){var Y=H[X];Y!==null&&(Y.lane&=-536870913)}i&=~ie}a!==0&&Yn(e,a,0),l!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=l&~(p&~t))}function Yn(e,t,i){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-wt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|i&4194090}function Kn(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var a=31-wt(i),o=1<<a;o&t|e[a]&t&&(e[a]|=t),i&=~o}}function Tn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function yn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function q(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:$h(e.type))}function g(e,t){var i=J.p;try{return J.p=e,t()}finally{J.p=i}}var T=Math.random().toString(36).slice(2),ne="__reactFiber$"+T,me="__reactProps$"+T,Be="__reactContainer$"+T,Ee="__reactEvents$"+T,Ve="__reactListeners$"+T,_e="__reactHandles$"+T,jt="__reactResources$"+T,Gt="__reactMarker$"+T;function R(e){delete e[ne],delete e[me],delete e[Ee],delete e[Ve],delete e[_e]}function se(e){var t=e[ne];if(t)return t;for(var i=e.parentNode;i;){if(t=i[Be]||i[ne]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=vh(e);e!==null;){if(i=e[ne])return i;e=vh(e)}return t}e=i,i=e.parentNode}return null}function ue(e){if(e=e[ne]||e[Be]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function oe(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function je(e){var t=e[jt];return t||(t=e[jt]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function xe(e){e[Gt]=!0}var Me=new Set,ut={};function Ke(e,t){Yt(e,t),Yt(e+"Capture",t)}function Yt(e,t){for(ut[e]=t,e=0;e<t.length;e++)Me.add(t[e])}var hi=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fa={},ol={};function ll(e){return Qe.call(ol,e)?!0:Qe.call(fa,e)?!1:hi.test(e)?ol[e]=!0:(fa[e]=!0,!1)}function ma(e,t,i){if(ll(t))if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+i)}}function ha(e,t,i){if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+i)}}function Rn(e,t,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(t,i,""+a)}}var b,G;function ae(e){if(b===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);b=t&&t[1]||"",G=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+b+e+G}var ge=!1;function Ge(e,t){if(!e||ge)return"";ge=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var ie=function(){throw Error()};if(Object.defineProperty(ie.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ie,[])}catch(Y){var H=Y}Reflect.construct(e,[],ie)}else{try{ie.call()}catch(Y){H=Y}e.call(ie.prototype)}}else{try{throw Error()}catch(Y){H=Y}(ie=e())&&typeof ie.catch=="function"&&ie.catch(function(){})}}catch(Y){if(Y&&H&&typeof Y.stack=="string")return[Y.stack,H.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=a.DetermineComponentFrameRoot(),p=l[0],m=l[1];if(p&&m){var j=p.split(`
`),U=m.split(`
`);for(o=a=0;a<j.length&&!j[a].includes("DetermineComponentFrameRoot");)a++;for(;o<U.length&&!U[o].includes("DetermineComponentFrameRoot");)o++;if(a===j.length||o===U.length)for(a=j.length-1,o=U.length-1;1<=a&&0<=o&&j[a]!==U[o];)o--;for(;1<=a&&0<=o;a--,o--)if(j[a]!==U[o]){if(a!==1||o!==1)do if(a--,o--,0>o||j[a]!==U[o]){var X=`
`+j[a].replace(" at new "," at ");return e.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",e.displayName)),X}while(1<=a&&0<=o);break}}}finally{ge=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?ae(i):""}function Ct(e){switch(e.tag){case 26:case 27:case 5:return ae(e.type);case 16:return ae("Lazy");case 13:return ae("Suspense");case 19:return ae("SuspenseList");case 0:case 15:return Ge(e.type,!1);case 11:return Ge(e.type.render,!1);case 1:return Ge(e.type,!0);case 31:return ae("Activity");default:return""}}function gt(e){try{var t="";do t+=Ct(e),e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}function Ue(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ut(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wn(e){var t=Ut(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var o=i.get,l=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(p){a=""+p,l.call(this,p)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ei(e){e._valueTracker||(e._valueTracker=Wn(e))}function pt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),a="";return e&&(a=Ut(e)?e.checked?"true":"false":e.value),e=a,e!==i?(t.setValue(e),!0):!1}function $e(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var rt=/[\n"\\]/g;function Ze(e){return e.replace(rt,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function un(e,t,i,a,o,l,p,m){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),t!=null?p==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ue(t)):e.value!==""+Ue(t)&&(e.value=""+Ue(t)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),t!=null?pn(e,p,Ue(t)):i!=null?pn(e,p,Ue(i)):a!=null&&e.removeAttribute("value"),o==null&&l!=null&&(e.defaultChecked=!!l),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Ue(m):e.removeAttribute("name")}function tn(e,t,i,a,o,l,p,m){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||i!=null){if(!(l!=="submit"&&l!=="reset"||t!=null))return;i=i!=null?""+Ue(i):"",t=t!=null?""+Ue(t):i,m||t===e.value||(e.value=t),e.defaultValue=t}a=a??o,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=m?e.checked:!!a,e.defaultChecked=!!a,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p)}function pn(e,t,i){t==="number"&&$e(e.ownerDocument)===e||e.defaultValue===""+i||(e.defaultValue=""+i)}function Jt(e,t,i,a){if(e=e.options,t){t={};for(var o=0;o<i.length;o++)t["$"+i[o]]=!0;for(i=0;i<e.length;i++)o=t.hasOwnProperty("$"+e[i].value),e[i].selected!==o&&(e[i].selected=o),o&&a&&(e[i].defaultSelected=!0)}else{for(i=""+Ue(i),t=null,o=0;o<e.length;o++){if(e[o].value===i){e[o].selected=!0,a&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function nn(e,t,i){if(t!=null&&(t=""+Ue(t),t!==e.value&&(e.value=t),i==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=i!=null?""+Ue(i):""}function sl(e,t,i,a){if(t==null){if(a!=null){if(i!=null)throw Error(c(92));if(Je(a)){if(1<a.length)throw Error(c(93));a=a[0]}i=a}i==null&&(i=""),t=i}i=Ue(t),e.defaultValue=i,a=e.textContent,a===i&&a!==""&&a!==null&&(e.value=a)}function _a(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var zg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mp(e,t,i){var a=t.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,i):typeof i!="number"||i===0||zg.has(t)?t==="float"?e.cssFloat=i:e[t]=(""+i).trim():e[t]=i+"px"}function hp(e,t,i){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,i!=null){for(var a in i)!i.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var o in t)a=t[o],t.hasOwnProperty(o)&&i[o]!==a&&mp(e,o,a)}else for(var l in t)t.hasOwnProperty(l)&&mp(e,l,t[l])}function Ks(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dl(e){return Mg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var ed=null;function td(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ga=null,Ya=null;function xp(e){var t=ue(e);if(t&&(e=t.stateNode)){var i=e[me]||null;e:switch(e=t.stateNode,t.type){case"input":if(un(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+Ze(""+t)+'"][type="radio"]'),t=0;t<i.length;t++){var a=i[t];if(a!==e&&a.form===e.form){var o=a[me]||null;if(!o)throw Error(c(90));un(a,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<i.length;t++)a=i[t],a.form===e.form&&pt(a)}break e;case"textarea":nn(e,i.value,i.defaultValue);break e;case"select":t=i.value,t!=null&&Jt(e,!!i.multiple,t,!1)}}}var nd=!1;function gp(e,t,i){if(nd)return e(t,i);nd=!0;try{var a=e(t);return a}finally{if(nd=!1,(Ga!==null||Ya!==null)&&(Ql(),Ga&&(t=Ga,e=Ya,Ya=Ga=null,xp(t),e)))for(t=0;t<e.length;t++)xp(e[t])}}function Fr(e,t){var i=e.stateNode;if(i===null)return null;var a=i[me]||null;if(a===null)return null;i=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(c(231,t,typeof i));return i}var xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),id=!1;if(xi)try{var Vr={};Object.defineProperty(Vr,"passive",{get:function(){id=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{id=!1}var $i=null,ad=null,cl=null;function bp(){if(cl)return cl;var e,t=ad,i=t.length,a,o="value"in $i?$i.value:$i.textContent,l=o.length;for(e=0;e<i&&t[e]===o[e];e++);var p=i-e;for(a=1;a<=p&&t[i-a]===o[l-a];a++);return cl=o.slice(e,1<a?1-a:void 0)}function ul(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pl(){return!0}function yp(){return!1}function fn(e){function t(i,a,o,l,p){this._reactName=i,this._targetInst=o,this.type=a,this.nativeEvent=l,this.target=p,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(i=e[m],this[m]=i?i(l):l[m]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?pl:yp,this.isPropagationStopped=yp,this}return M(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),t}var xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fl=fn(xa),Qr=M({},xa,{view:0,detail:0}),Tg=fn(Qr),rd,od,Ir,ml=M({},Qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ir&&(Ir&&e.type==="mousemove"?(rd=e.screenX-Ir.screenX,od=e.screenY-Ir.screenY):od=rd=0,Ir=e),rd)},movementY:function(e){return"movementY"in e?e.movementY:od}}),vp=fn(ml),Rg=M({},ml,{dataTransfer:0}),Ag=fn(Rg),Pg=M({},Qr,{relatedTarget:0}),ld=fn(Pg),Dg=M({},xa,{animationName:0,elapsedTime:0,pseudoElement:0}),Eg=fn(Dg),$g=M({},xa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bg=fn($g),Ng=M({},xa,{data:0}),wp=fn(Ng),Og={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ug={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ug[e])?!!t[e]:!1}function sd(){return Hg}var _g=M({},Qr,{key:function(e){if(e.key){var t=Og[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ul(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sd,charCode:function(e){return e.type==="keypress"?ul(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ul(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gg=fn(_g),Yg=M({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jp=fn(Yg),Wg=M({},Qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sd}),Fg=fn(Wg),Vg=M({},xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qg=fn(Vg),Ig=M({},ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jg=fn(Ig),Zg=M({},xa,{newState:0,oldState:0}),Xg=fn(Zg),Kg=[9,13,27,32],dd=xi&&"CompositionEvent"in window,Jr=null;xi&&"documentMode"in document&&(Jr=document.documentMode);var e1=xi&&"TextEvent"in window&&!Jr,kp=xi&&(!dd||Jr&&8<Jr&&11>=Jr),Sp=" ",Cp=!1;function zp(e,t){switch(e){case"keyup":return Kg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wa=!1;function t1(e,t){switch(e){case"compositionend":return Lp(t);case"keypress":return t.which!==32?null:(Cp=!0,Sp);case"textInput":return e=t.data,e===Sp&&Cp?null:e;default:return null}}function n1(e,t){if(Wa)return e==="compositionend"||!dd&&zp(e,t)?(e=bp(),cl=ad=$i=null,Wa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kp&&t.locale!=="ko"?null:t.data;default:return null}}var i1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!i1[e.type]:t==="textarea"}function Tp(e,t,i,a){Ga?Ya?Ya.push(a):Ya=[a]:Ga=a,t=es(t,"onChange"),0<t.length&&(i=new fl("onChange","change",null,i,a),e.push({event:i,listeners:t}))}var Zr=null,Xr=null;function a1(e){ch(e,0)}function hl(e){var t=oe(e);if(pt(t))return e}function Rp(e,t){if(e==="change")return t}var Ap=!1;if(xi){var cd;if(xi){var ud="oninput"in document;if(!ud){var Pp=document.createElement("div");Pp.setAttribute("oninput","return;"),ud=typeof Pp.oninput=="function"}cd=ud}else cd=!1;Ap=cd&&(!document.documentMode||9<document.documentMode)}function Dp(){Zr&&(Zr.detachEvent("onpropertychange",Ep),Xr=Zr=null)}function Ep(e){if(e.propertyName==="value"&&hl(Xr)){var t=[];Tp(t,Xr,e,td(e)),gp(a1,t)}}function r1(e,t,i){e==="focusin"?(Dp(),Zr=t,Xr=i,Zr.attachEvent("onpropertychange",Ep)):e==="focusout"&&Dp()}function o1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hl(Xr)}function l1(e,t){if(e==="click")return hl(t)}function s1(e,t){if(e==="input"||e==="change")return hl(t)}function d1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vn=typeof Object.is=="function"?Object.is:d1;function Kr(e,t){if(vn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(a=0;a<i.length;a++){var o=i[a];if(!Qe.call(t,o)||!vn(e[o],t[o]))return!1}return!0}function $p(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bp(e,t){var i=$p(e);e=0;for(var a;i;){if(i.nodeType===3){if(a=e+i.textContent.length,e<=t&&a>=t)return{node:i,offset:t-e};e=a}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=$p(i)}}function Np(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Np(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Op(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=$e(e.document);t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=$e(e.document)}return t}function pd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var c1=xi&&"documentMode"in document&&11>=document.documentMode,Fa=null,fd=null,eo=null,md=!1;function qp(e,t,i){var a=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;md||Fa==null||Fa!==$e(a)||(a=Fa,"selectionStart"in a&&pd(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),eo&&Kr(eo,a)||(eo=a,a=es(fd,"onSelect"),0<a.length&&(t=new fl("onSelect","select",null,t,i),e.push({event:t,listeners:a}),t.target=Fa)))}function ga(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var Va={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionrun:ga("Transition","TransitionRun"),transitionstart:ga("Transition","TransitionStart"),transitioncancel:ga("Transition","TransitionCancel"),transitionend:ga("Transition","TransitionEnd")},hd={},Up={};xi&&(Up=document.createElement("div").style,"AnimationEvent"in window||(delete Va.animationend.animation,delete Va.animationiteration.animation,delete Va.animationstart.animation),"TransitionEvent"in window||delete Va.transitionend.transition);function ba(e){if(hd[e])return hd[e];if(!Va[e])return e;var t=Va[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Up)return hd[e]=t[i];return e}var Hp=ba("animationend"),_p=ba("animationiteration"),Gp=ba("animationstart"),u1=ba("transitionrun"),p1=ba("transitionstart"),f1=ba("transitioncancel"),Yp=ba("transitionend"),Wp=new Map,xd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xd.push("scrollEnd");function Fn(e,t){Wp.set(e,t),Ke(t,[e])}var Fp=new WeakMap;function An(e,t){if(typeof e=="object"&&e!==null){var i=Fp.get(e);return i!==void 0?i:(t={value:e,source:t,stack:gt(t)},Fp.set(e,t),t)}return{value:e,source:t,stack:gt(t)}}var Pn=[],Qa=0,gd=0;function xl(){for(var e=Qa,t=gd=Qa=0;t<e;){var i=Pn[t];Pn[t++]=null;var a=Pn[t];Pn[t++]=null;var o=Pn[t];Pn[t++]=null;var l=Pn[t];if(Pn[t++]=null,a!==null&&o!==null){var p=a.pending;p===null?o.next=o:(o.next=p.next,p.next=o),a.pending=o}l!==0&&Vp(i,o,l)}}function gl(e,t,i,a){Pn[Qa++]=e,Pn[Qa++]=t,Pn[Qa++]=i,Pn[Qa++]=a,gd|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function bd(e,t,i,a){return gl(e,t,i,a),bl(e)}function Ia(e,t){return gl(e,null,null,t),bl(e)}function Vp(e,t,i){e.lanes|=i;var a=e.alternate;a!==null&&(a.lanes|=i);for(var o=!1,l=e.return;l!==null;)l.childLanes|=i,a=l.alternate,a!==null&&(a.childLanes|=i),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(o=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,o&&t!==null&&(o=31-wt(i),e=l.hiddenUpdates,a=e[o],a===null?e[o]=[t]:a.push(t),t.lane=i|536870912),l):null}function bl(e){if(50<zo)throw zo=0,Sc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ja={};function m1(e,t,i,a){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(e,t,i,a){return new m1(e,t,i,a)}function yd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gi(e,t){var i=e.alternate;return i===null?(i=wn(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&65011712,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function Qp(e,t){e.flags&=65011714;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,t=i.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function yl(e,t,i,a,o,l){var p=0;if(a=e,typeof e=="function")yd(e)&&(p=1);else if(typeof e=="string")p=x2(e,i,fe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case we:return e=wn(31,i,t,o),e.elementType=we,e.lanes=l,e;case $:return ya(i.children,o,l,t);case Q:p=8,o|=24;break;case V:return e=wn(12,i,t,o|2),e.elementType=V,e.lanes=l,e;case C:return e=wn(13,i,t,o),e.elementType=C,e.lanes=l,e;case D:return e=wn(19,i,t,o),e.elementType=D,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case A:case z:p=10;break e;case B:p=9;break e;case re:p=11;break e;case K:p=14;break e;case ke:p=16,a=null;break e}p=29,i=Error(c(130,e===null?"null":typeof e,"")),a=null}return t=wn(p,i,t,o),t.elementType=e,t.type=a,t.lanes=l,t}function ya(e,t,i,a){return e=wn(7,e,a,t),e.lanes=i,e}function vd(e,t,i){return e=wn(6,e,null,t),e.lanes=i,e}function wd(e,t,i){return t=wn(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Za=[],Xa=0,vl=null,wl=0,Dn=[],En=0,va=null,bi=1,yi="";function wa(e,t){Za[Xa++]=wl,Za[Xa++]=vl,vl=e,wl=t}function Ip(e,t,i){Dn[En++]=bi,Dn[En++]=yi,Dn[En++]=va,va=e;var a=bi;e=yi;var o=32-wt(a)-1;a&=~(1<<o),i+=1;var l=32-wt(t)+o;if(30<l){var p=o-o%5;l=(a&(1<<p)-1).toString(32),a>>=p,o-=p,bi=1<<32-wt(t)+o|i<<o|a,yi=l+e}else bi=1<<l|i<<o|a,yi=e}function jd(e){e.return!==null&&(wa(e,1),Ip(e,1,0))}function kd(e){for(;e===vl;)vl=Za[--Xa],Za[Xa]=null,wl=Za[--Xa],Za[Xa]=null;for(;e===va;)va=Dn[--En],Dn[En]=null,yi=Dn[--En],Dn[En]=null,bi=Dn[--En],Dn[En]=null}var dn=null,At=null,et=!1,ja=null,ti=!1,Sd=Error(c(519));function ka(e){var t=Error(c(418,""));throw io(An(t,e)),Sd}function Jp(e){var t=e.stateNode,i=e.type,a=e.memoizedProps;switch(t[ne]=e,t[me]=a,i){case"dialog":Fe("cancel",t),Fe("close",t);break;case"iframe":case"object":case"embed":Fe("load",t);break;case"video":case"audio":for(i=0;i<Mo.length;i++)Fe(Mo[i],t);break;case"source":Fe("error",t);break;case"img":case"image":case"link":Fe("error",t),Fe("load",t);break;case"details":Fe("toggle",t);break;case"input":Fe("invalid",t),tn(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),ei(t);break;case"select":Fe("invalid",t);break;case"textarea":Fe("invalid",t),sl(t,a.value,a.defaultValue,a.children),ei(t)}i=a.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||t.textContent===""+i||a.suppressHydrationWarning===!0||mh(t.textContent,i)?(a.popover!=null&&(Fe("beforetoggle",t),Fe("toggle",t)),a.onScroll!=null&&Fe("scroll",t),a.onScrollEnd!=null&&Fe("scrollend",t),a.onClick!=null&&(t.onclick=ts),t=!0):t=!1,t||ka(e)}function Zp(e){for(dn=e.return;dn;)switch(dn.tag){case 5:case 13:ti=!1;return;case 27:case 3:ti=!0;return;default:dn=dn.return}}function to(e){if(e!==dn)return!1;if(!et)return Zp(e),et=!0,!1;var t=e.tag,i;if((i=t!==3&&t!==27)&&((i=t===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||Uc(e.type,e.memoizedProps)),i=!i),i&&At&&ka(e),Zp(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(i=e.data,i==="/$"){if(t===0){At=Qn(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++;e=e.nextSibling}At=null}}else t===27?(t=At,Zi(e.type)?(e=Yc,Yc=null,At=e):At=t):At=dn?Qn(e.stateNode.nextSibling):null;return!0}function no(){At=dn=null,et=!1}function Xp(){var e=ja;return e!==null&&(xn===null?xn=e:xn.push.apply(xn,e),ja=null),e}function io(e){ja===null?ja=[e]:ja.push(e)}var Cd=Z(null),Sa=null,vi=null;function Bi(e,t,i){I(Cd,t._currentValue),t._currentValue=i}function wi(e){e._currentValue=Cd.current,pe(Cd)}function zd(e,t,i){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===i)break;e=e.return}}function Ld(e,t,i,a){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){var p=o.child;l=l.firstContext;e:for(;l!==null;){var m=l;l=o;for(var j=0;j<t.length;j++)if(m.context===t[j]){l.lanes|=i,m=l.alternate,m!==null&&(m.lanes|=i),zd(l.return,i,e),a||(p=null);break e}l=m.next}}else if(o.tag===18){if(p=o.return,p===null)throw Error(c(341));p.lanes|=i,l=p.alternate,l!==null&&(l.lanes|=i),zd(p,i,e),p=null}else p=o.child;if(p!==null)p.return=o;else for(p=o;p!==null;){if(p===e){p=null;break}if(o=p.sibling,o!==null){o.return=p.return,p=o;break}p=p.return}o=p}}function ao(e,t,i,a){e=null;for(var o=t,l=!1;o!==null;){if(!l){if((o.flags&524288)!==0)l=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var p=o.alternate;if(p===null)throw Error(c(387));if(p=p.memoizedProps,p!==null){var m=o.type;vn(o.pendingProps.value,p.value)||(e!==null?e.push(m):e=[m])}}else if(o===nt.current){if(p=o.alternate,p===null)throw Error(c(387));p.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Eo):e=[Eo])}o=o.return}e!==null&&Ld(t,e,i,a),t.flags|=262144}function jl(e){for(e=e.firstContext;e!==null;){if(!vn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ca(e){Sa=e,vi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function an(e){return Kp(Sa,e)}function kl(e,t){return Sa===null&&Ca(e),Kp(e,t)}function Kp(e,t){var i=t._currentValue;if(t={context:t,memoizedValue:i,next:null},vi===null){if(e===null)throw Error(c(308));vi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else vi=vi.next=t;return i}var h1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(i,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(i){return i()})}},x1=r.unstable_scheduleCallback,g1=r.unstable_NormalPriority,Ht={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Md(){return{controller:new h1,data:new Map,refCount:0}}function ro(e){e.refCount--,e.refCount===0&&x1(g1,function(){e.controller.abort()})}var oo=null,Td=0,Ka=0,er=null;function b1(e,t){if(oo===null){var i=oo=[];Td=0,Ka=Ac(),er={status:"pending",value:void 0,then:function(a){i.push(a)}}}return Td++,t.then(ef,ef),t}function ef(){if(--Td===0&&oo!==null){er!==null&&(er.status="fulfilled");var e=oo;oo=null,Ka=0,er=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function y1(e,t){var i=[],a={status:"pending",value:null,reason:null,then:function(o){i.push(o)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var o=0;o<i.length;o++)(0,i[o])(t)},function(o){for(a.status="rejected",a.reason=o,o=0;o<i.length;o++)(0,i[o])(void 0)}),a}var tf=F.S;F.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&b1(e,t),tf!==null&&tf(e,t)};var za=Z(null);function Rd(){var e=za.current;return e!==null?e:bt.pooledCache}function Sl(e,t){t===null?I(za,za.current):I(za,t.pool)}function nf(){var e=Rd();return e===null?null:{parent:Ht._currentValue,pool:e}}var lo=Error(c(460)),af=Error(c(474)),Cl=Error(c(542)),Ad={then:function(){}};function rf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function zl(){}function of(e,t,i){switch(i=e[i],i===void 0?e.push(t):i!==t&&(t.then(zl,zl),t=i),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,sf(e),e;default:if(typeof t.status=="string")t.then(zl,zl);else{if(e=bt,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=a}},function(a){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,sf(e),e}throw so=t,lo}}var so=null;function lf(){if(so===null)throw Error(c(459));var e=so;return so=null,e}function sf(e){if(e===lo||e===Cl)throw Error(c(483))}var Ni=!1;function Pd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Dd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Oi(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qi(e,t,i){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ot&2)!==0){var o=a.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),a.pending=t,t=bl(e),Vp(e,null,i),t}return gl(e,a,t,i),bl(e)}function co(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,i|=a,t.lanes=i,Kn(e,i)}}function Ed(e,t){var i=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,i===a)){var o=null,l=null;if(i=i.firstBaseUpdate,i!==null){do{var p={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};l===null?o=l=p:l=l.next=p,i=i.next}while(i!==null);l===null?o=l=t:l=l.next=t}else o=l=t;i={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:a.shared,callbacks:a.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}var $d=!1;function uo(){if($d){var e=er;if(e!==null)throw e}}function po(e,t,i,a){$d=!1;var o=e.updateQueue;Ni=!1;var l=o.firstBaseUpdate,p=o.lastBaseUpdate,m=o.shared.pending;if(m!==null){o.shared.pending=null;var j=m,U=j.next;j.next=null,p===null?l=U:p.next=U,p=j;var X=e.alternate;X!==null&&(X=X.updateQueue,m=X.lastBaseUpdate,m!==p&&(m===null?X.firstBaseUpdate=U:m.next=U,X.lastBaseUpdate=j))}if(l!==null){var ie=o.baseState;p=0,X=U=j=null,m=l;do{var H=m.lane&-536870913,Y=H!==m.lane;if(Y?(Ie&H)===H:(a&H)===H){H!==0&&H===Ka&&($d=!0),X!==null&&(X=X.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var Pe=e,Te=m;H=t;var ct=i;switch(Te.tag){case 1:if(Pe=Te.payload,typeof Pe=="function"){ie=Pe.call(ct,ie,H);break e}ie=Pe;break e;case 3:Pe.flags=Pe.flags&-65537|128;case 0:if(Pe=Te.payload,H=typeof Pe=="function"?Pe.call(ct,ie,H):Pe,H==null)break e;ie=M({},ie,H);break e;case 2:Ni=!0}}H=m.callback,H!==null&&(e.flags|=64,Y&&(e.flags|=8192),Y=o.callbacks,Y===null?o.callbacks=[H]:Y.push(H))}else Y={lane:H,tag:m.tag,payload:m.payload,callback:m.callback,next:null},X===null?(U=X=Y,j=ie):X=X.next=Y,p|=H;if(m=m.next,m===null){if(m=o.shared.pending,m===null)break;Y=m,m=Y.next,Y.next=null,o.lastBaseUpdate=Y,o.shared.pending=null}}while(!0);X===null&&(j=ie),o.baseState=j,o.firstBaseUpdate=U,o.lastBaseUpdate=X,l===null&&(o.shared.lanes=0),Vi|=p,e.lanes=p,e.memoizedState=ie}}function df(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function cf(e,t){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)df(i[e],t)}var tr=Z(null),Ll=Z(0);function uf(e,t){e=Mi,I(Ll,e),I(tr,t),Mi=e|t.baseLanes}function Bd(){I(Ll,Mi),I(tr,tr.current)}function Nd(){Mi=Ll.current,pe(tr),pe(Ll)}var Ui=0,He=null,st=null,Bt=null,Ml=!1,nr=!1,La=!1,Tl=0,fo=0,ir=null,v1=0;function Et(){throw Error(c(321))}function Od(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!vn(e[i],t[i]))return!1;return!0}function qd(e,t,i,a,o,l){return Ui=l,He=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,F.H=e===null||e.memoizedState===null?Qf:If,La=!1,l=i(a,o),La=!1,nr&&(l=ff(t,i,a,o)),pf(e),l}function pf(e){F.H=$l;var t=st!==null&&st.next!==null;if(Ui=0,Bt=st=He=null,Ml=!1,fo=0,ir=null,t)throw Error(c(300));e===null||Wt||(e=e.dependencies,e!==null&&jl(e)&&(Wt=!0))}function ff(e,t,i,a){He=e;var o=0;do{if(nr&&(ir=null),fo=0,nr=!1,25<=o)throw Error(c(301));if(o+=1,Bt=st=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}F.H=L1,l=t(i,a)}while(nr);return l}function w1(){var e=F.H,t=e.useState()[0];return t=typeof t.then=="function"?mo(t):t,e=e.useState()[0],(st!==null?st.memoizedState:null)!==e&&(He.flags|=1024),t}function Ud(){var e=Tl!==0;return Tl=0,e}function Hd(e,t,i){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i}function _d(e){if(Ml){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ml=!1}Ui=0,Bt=st=He=null,nr=!1,fo=Tl=0,ir=null}function mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?He.memoizedState=Bt=e:Bt=Bt.next=e,Bt}function Nt(){if(st===null){var e=He.alternate;e=e!==null?e.memoizedState:null}else e=st.next;var t=Bt===null?He.memoizedState:Bt.next;if(t!==null)Bt=t,st=e;else{if(e===null)throw He.alternate===null?Error(c(467)):Error(c(310));st=e,e={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},Bt===null?He.memoizedState=Bt=e:Bt=Bt.next=e}return Bt}function Gd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mo(e){var t=fo;return fo+=1,ir===null&&(ir=[]),e=of(ir,e,t),t=He,(Bt===null?t.memoizedState:Bt.next)===null&&(t=t.alternate,F.H=t===null||t.memoizedState===null?Qf:If),e}function Rl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return mo(e);if(e.$$typeof===z)return an(e)}throw Error(c(438,String(e)))}function Yd(e){var t=null,i=He.updateQueue;if(i!==null&&(t=i.memoCache),t==null){var a=He.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),i===null&&(i=Gd(),He.updateQueue=i),i.memoCache=t,i=t.data[t.index],i===void 0)for(i=t.data[t.index]=Array(e),a=0;a<e;a++)i[a]=ce;return t.index++,i}function ji(e,t){return typeof t=="function"?t(e):t}function Al(e){var t=Nt();return Wd(t,st,e)}function Wd(e,t,i){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=i;var o=e.baseQueue,l=a.pending;if(l!==null){if(o!==null){var p=o.next;o.next=l.next,l.next=p}t.baseQueue=o=l,a.pending=null}if(l=e.baseState,o===null)e.memoizedState=l;else{t=o.next;var m=p=null,j=null,U=t,X=!1;do{var ie=U.lane&-536870913;if(ie!==U.lane?(Ie&ie)===ie:(Ui&ie)===ie){var H=U.revertLane;if(H===0)j!==null&&(j=j.next={lane:0,revertLane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),ie===Ka&&(X=!0);else if((Ui&H)===H){U=U.next,H===Ka&&(X=!0);continue}else ie={lane:0,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},j===null?(m=j=ie,p=l):j=j.next=ie,He.lanes|=H,Vi|=H;ie=U.action,La&&i(l,ie),l=U.hasEagerState?U.eagerState:i(l,ie)}else H={lane:ie,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},j===null?(m=j=H,p=l):j=j.next=H,He.lanes|=ie,Vi|=ie;U=U.next}while(U!==null&&U!==t);if(j===null?p=l:j.next=m,!vn(l,e.memoizedState)&&(Wt=!0,X&&(i=er,i!==null)))throw i;e.memoizedState=l,e.baseState=p,e.baseQueue=j,a.lastRenderedState=l}return o===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Fd(e){var t=Nt(),i=t.queue;if(i===null)throw Error(c(311));i.lastRenderedReducer=e;var a=i.dispatch,o=i.pending,l=t.memoizedState;if(o!==null){i.pending=null;var p=o=o.next;do l=e(l,p.action),p=p.next;while(p!==o);vn(l,t.memoizedState)||(Wt=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),i.lastRenderedState=l}return[l,a]}function mf(e,t,i){var a=He,o=Nt(),l=et;if(l){if(i===void 0)throw Error(c(407));i=i()}else i=t();var p=!vn((st||o).memoizedState,i);p&&(o.memoizedState=i,Wt=!0),o=o.queue;var m=gf.bind(null,a,o,e);if(ho(2048,8,m,[e]),o.getSnapshot!==t||p||Bt!==null&&Bt.memoizedState.tag&1){if(a.flags|=2048,ar(9,Pl(),xf.bind(null,a,o,i,t),null),bt===null)throw Error(c(349));l||(Ui&124)!==0||hf(a,t,i)}return i}function hf(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=He.updateQueue,t===null?(t=Gd(),He.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function xf(e,t,i,a){t.value=i,t.getSnapshot=a,bf(t)&&yf(e)}function gf(e,t,i){return i(function(){bf(t)&&yf(e)})}function bf(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!vn(e,i)}catch{return!0}}function yf(e){var t=Ia(e,2);t!==null&&zn(t,e,2)}function Vd(e){var t=mn();if(typeof e=="function"){var i=e;if(e=i(),La){en(!0);try{i()}finally{en(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:e},t}function vf(e,t,i,a){return e.baseState=i,Wd(e,st,typeof a=="function"?a:ji)}function j1(e,t,i,a,o){if(El(e))throw Error(c(485));if(e=t.action,e!==null){var l={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){l.listeners.push(p)}};F.T!==null?i(!0):l.isTransition=!1,a(l),i=t.pending,i===null?(l.next=t.pending=l,wf(t,l)):(l.next=i.next,t.pending=i.next=l)}}function wf(e,t){var i=t.action,a=t.payload,o=e.state;if(t.isTransition){var l=F.T,p={};F.T=p;try{var m=i(o,a),j=F.S;j!==null&&j(p,m),jf(e,t,m)}catch(U){Qd(e,t,U)}finally{F.T=l}}else try{l=i(o,a),jf(e,t,l)}catch(U){Qd(e,t,U)}}function jf(e,t,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(a){kf(e,t,a)},function(a){return Qd(e,t,a)}):kf(e,t,i)}function kf(e,t,i){t.status="fulfilled",t.value=i,Sf(t),e.state=i,t=e.pending,t!==null&&(i=t.next,i===t?e.pending=null:(i=i.next,t.next=i,wf(e,i)))}function Qd(e,t,i){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=i,Sf(t),t=t.next;while(t!==a)}e.action=null}function Sf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Cf(e,t){return t}function zf(e,t){if(et){var i=bt.formState;if(i!==null){e:{var a=He;if(et){if(At){t:{for(var o=At,l=ti;o.nodeType!==8;){if(!l){o=null;break t}if(o=Qn(o.nextSibling),o===null){o=null;break t}}l=o.data,o=l==="F!"||l==="F"?o:null}if(o){At=Qn(o.nextSibling),a=o.data==="F!";break e}}ka(a)}a=!1}a&&(t=i[0])}}return i=mn(),i.memoizedState=i.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cf,lastRenderedState:t},i.queue=a,i=Wf.bind(null,He,a),a.dispatch=i,a=Vd(!1),l=Kd.bind(null,He,!1,a.queue),a=mn(),o={state:t,dispatch:null,action:e,pending:null},a.queue=o,i=j1.bind(null,He,o,l,i),o.dispatch=i,a.memoizedState=e,[t,i,!1]}function Lf(e){var t=Nt();return Mf(t,st,e)}function Mf(e,t,i){if(t=Wd(e,t,Cf)[0],e=Al(ji)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=mo(t)}catch(p){throw p===lo?Cl:p}else a=t;t=Nt();var o=t.queue,l=o.dispatch;return i!==t.memoizedState&&(He.flags|=2048,ar(9,Pl(),k1.bind(null,o,i),null)),[a,l,e]}function k1(e,t){e.action=t}function Tf(e){var t=Nt(),i=st;if(i!==null)return Mf(t,i,e);Nt(),t=t.memoizedState,i=Nt();var a=i.queue.dispatch;return i.memoizedState=e,[t,a,!1]}function ar(e,t,i,a){return e={tag:e,create:i,deps:a,inst:t,next:null},t=He.updateQueue,t===null&&(t=Gd(),He.updateQueue=t),i=t.lastEffect,i===null?t.lastEffect=e.next=e:(a=i.next,i.next=e,e.next=a,t.lastEffect=e),e}function Pl(){return{destroy:void 0,resource:void 0}}function Rf(){return Nt().memoizedState}function Dl(e,t,i,a){var o=mn();a=a===void 0?null:a,He.flags|=e,o.memoizedState=ar(1|t,Pl(),i,a)}function ho(e,t,i,a){var o=Nt();a=a===void 0?null:a;var l=o.memoizedState.inst;st!==null&&a!==null&&Od(a,st.memoizedState.deps)?o.memoizedState=ar(t,l,i,a):(He.flags|=e,o.memoizedState=ar(1|t,l,i,a))}function Af(e,t){Dl(8390656,8,e,t)}function Pf(e,t){ho(2048,8,e,t)}function Df(e,t){return ho(4,2,e,t)}function Ef(e,t){return ho(4,4,e,t)}function $f(e,t){if(typeof t=="function"){e=e();var i=t(e);return function(){typeof i=="function"?i():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bf(e,t,i){i=i!=null?i.concat([e]):null,ho(4,4,$f.bind(null,t,e),i)}function Id(){}function Nf(e,t){var i=Nt();t=t===void 0?null:t;var a=i.memoizedState;return t!==null&&Od(t,a[1])?a[0]:(i.memoizedState=[e,t],e)}function Of(e,t){var i=Nt();t=t===void 0?null:t;var a=i.memoizedState;if(t!==null&&Od(t,a[1]))return a[0];if(a=e(),La){en(!0);try{e()}finally{en(!1)}}return i.memoizedState=[a,t],a}function Jd(e,t,i){return i===void 0||(Ui&1073741824)!==0?e.memoizedState=t:(e.memoizedState=i,e=Hm(),He.lanes|=e,Vi|=e,i)}function qf(e,t,i,a){return vn(i,t)?i:tr.current!==null?(e=Jd(e,i,a),vn(e,t)||(Wt=!0),e):(Ui&42)===0?(Wt=!0,e.memoizedState=i):(e=Hm(),He.lanes|=e,Vi|=e,t)}function Uf(e,t,i,a,o){var l=J.p;J.p=l!==0&&8>l?l:8;var p=F.T,m={};F.T=m,Kd(e,!1,t,i);try{var j=o(),U=F.S;if(U!==null&&U(m,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var X=y1(j,a);xo(e,t,X,Cn(e))}else xo(e,t,a,Cn(e))}catch(ie){xo(e,t,{then:function(){},status:"rejected",reason:ie},Cn())}finally{J.p=l,F.T=p}}function S1(){}function Zd(e,t,i,a){if(e.tag!==5)throw Error(c(476));var o=Hf(e).queue;Uf(e,o,t,ye,i===null?S1:function(){return _f(e),i(a)})}function Hf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ye,baseState:ye,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:ye},next:null};var i={};return t.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:i},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function _f(e){var t=Hf(e).next.queue;xo(e,t,{},Cn())}function Xd(){return an(Eo)}function Gf(){return Nt().memoizedState}function Yf(){return Nt().memoizedState}function C1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var i=Cn();e=Oi(i);var a=qi(t,e,i);a!==null&&(zn(a,t,i),co(a,t,i)),t={cache:Md()},e.payload=t;return}t=t.return}}function z1(e,t,i){var a=Cn();i={lane:a,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null},El(e)?Ff(t,i):(i=bd(e,t,i,a),i!==null&&(zn(i,e,a),Vf(i,t,a)))}function Wf(e,t,i){var a=Cn();xo(e,t,i,a)}function xo(e,t,i,a){var o={lane:a,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null};if(El(e))Ff(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var p=t.lastRenderedState,m=l(p,i);if(o.hasEagerState=!0,o.eagerState=m,vn(m,p))return gl(e,t,o,0),bt===null&&xl(),!1}catch{}finally{}if(i=bd(e,t,o,a),i!==null)return zn(i,e,a),Vf(i,t,a),!0}return!1}function Kd(e,t,i,a){if(a={lane:2,revertLane:Ac(),action:a,hasEagerState:!1,eagerState:null,next:null},El(e)){if(t)throw Error(c(479))}else t=bd(e,i,a,2),t!==null&&zn(t,e,2)}function El(e){var t=e.alternate;return e===He||t!==null&&t===He}function Ff(e,t){nr=Ml=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function Vf(e,t,i){if((i&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,i|=a,t.lanes=i,Kn(e,i)}}var $l={readContext:an,use:Rl,useCallback:Et,useContext:Et,useEffect:Et,useImperativeHandle:Et,useLayoutEffect:Et,useInsertionEffect:Et,useMemo:Et,useReducer:Et,useRef:Et,useState:Et,useDebugValue:Et,useDeferredValue:Et,useTransition:Et,useSyncExternalStore:Et,useId:Et,useHostTransitionStatus:Et,useFormState:Et,useActionState:Et,useOptimistic:Et,useMemoCache:Et,useCacheRefresh:Et},Qf={readContext:an,use:Rl,useCallback:function(e,t){return mn().memoizedState=[e,t===void 0?null:t],e},useContext:an,useEffect:Af,useImperativeHandle:function(e,t,i){i=i!=null?i.concat([e]):null,Dl(4194308,4,$f.bind(null,t,e),i)},useLayoutEffect:function(e,t){return Dl(4194308,4,e,t)},useInsertionEffect:function(e,t){Dl(4,2,e,t)},useMemo:function(e,t){var i=mn();t=t===void 0?null:t;var a=e();if(La){en(!0);try{e()}finally{en(!1)}}return i.memoizedState=[a,t],a},useReducer:function(e,t,i){var a=mn();if(i!==void 0){var o=i(t);if(La){en(!0);try{i(t)}finally{en(!1)}}}else o=t;return a.memoizedState=a.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},a.queue=e,e=e.dispatch=z1.bind(null,He,e),[a.memoizedState,e]},useRef:function(e){var t=mn();return e={current:e},t.memoizedState=e},useState:function(e){e=Vd(e);var t=e.queue,i=Wf.bind(null,He,t);return t.dispatch=i,[e.memoizedState,i]},useDebugValue:Id,useDeferredValue:function(e,t){var i=mn();return Jd(i,e,t)},useTransition:function(){var e=Vd(!1);return e=Uf.bind(null,He,e.queue,!0,!1),mn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,i){var a=He,o=mn();if(et){if(i===void 0)throw Error(c(407));i=i()}else{if(i=t(),bt===null)throw Error(c(349));(Ie&124)!==0||hf(a,t,i)}o.memoizedState=i;var l={value:i,getSnapshot:t};return o.queue=l,Af(gf.bind(null,a,l,e),[e]),a.flags|=2048,ar(9,Pl(),xf.bind(null,a,l,i,t),null),i},useId:function(){var e=mn(),t=bt.identifierPrefix;if(et){var i=yi,a=bi;i=(a&~(1<<32-wt(a)-1)).toString(32)+i,t="«"+t+"R"+i,i=Tl++,0<i&&(t+="H"+i.toString(32)),t+="»"}else i=v1++,t="«"+t+"r"+i.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Xd,useFormState:zf,useActionState:zf,useOptimistic:function(e){var t=mn();t.memoizedState=t.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=i,t=Kd.bind(null,He,!0,i),i.dispatch=t,[e,t]},useMemoCache:Yd,useCacheRefresh:function(){return mn().memoizedState=C1.bind(null,He)}},If={readContext:an,use:Rl,useCallback:Nf,useContext:an,useEffect:Pf,useImperativeHandle:Bf,useInsertionEffect:Df,useLayoutEffect:Ef,useMemo:Of,useReducer:Al,useRef:Rf,useState:function(){return Al(ji)},useDebugValue:Id,useDeferredValue:function(e,t){var i=Nt();return qf(i,st.memoizedState,e,t)},useTransition:function(){var e=Al(ji)[0],t=Nt().memoizedState;return[typeof e=="boolean"?e:mo(e),t]},useSyncExternalStore:mf,useId:Gf,useHostTransitionStatus:Xd,useFormState:Lf,useActionState:Lf,useOptimistic:function(e,t){var i=Nt();return vf(i,st,e,t)},useMemoCache:Yd,useCacheRefresh:Yf},L1={readContext:an,use:Rl,useCallback:Nf,useContext:an,useEffect:Pf,useImperativeHandle:Bf,useInsertionEffect:Df,useLayoutEffect:Ef,useMemo:Of,useReducer:Fd,useRef:Rf,useState:function(){return Fd(ji)},useDebugValue:Id,useDeferredValue:function(e,t){var i=Nt();return st===null?Jd(i,e,t):qf(i,st.memoizedState,e,t)},useTransition:function(){var e=Fd(ji)[0],t=Nt().memoizedState;return[typeof e=="boolean"?e:mo(e),t]},useSyncExternalStore:mf,useId:Gf,useHostTransitionStatus:Xd,useFormState:Tf,useActionState:Tf,useOptimistic:function(e,t){var i=Nt();return st!==null?vf(i,st,e,t):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:Yd,useCacheRefresh:Yf},rr=null,go=0;function Bl(e){var t=go;return go+=1,rr===null&&(rr=[]),of(rr,e,t)}function bo(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Nl(e,t){throw t.$$typeof===O?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Jf(e){var t=e._init;return t(e._payload)}function Zf(e){function t(P,L){if(e){var N=P.deletions;N===null?(P.deletions=[L],P.flags|=16):N.push(L)}}function i(P,L){if(!e)return null;for(;L!==null;)t(P,L),L=L.sibling;return null}function a(P){for(var L=new Map;P!==null;)P.key!==null?L.set(P.key,P):L.set(P.index,P),P=P.sibling;return L}function o(P,L){return P=gi(P,L),P.index=0,P.sibling=null,P}function l(P,L,N){return P.index=N,e?(N=P.alternate,N!==null?(N=N.index,N<L?(P.flags|=67108866,L):N):(P.flags|=67108866,L)):(P.flags|=1048576,L)}function p(P){return e&&P.alternate===null&&(P.flags|=67108866),P}function m(P,L,N,ee){return L===null||L.tag!==6?(L=vd(N,P.mode,ee),L.return=P,L):(L=o(L,N),L.return=P,L)}function j(P,L,N,ee){var be=N.type;return be===$?X(P,L,N.props.children,ee,N.key):L!==null&&(L.elementType===be||typeof be=="object"&&be!==null&&be.$$typeof===ke&&Jf(be)===L.type)?(L=o(L,N.props),bo(L,N),L.return=P,L):(L=yl(N.type,N.key,N.props,null,P.mode,ee),bo(L,N),L.return=P,L)}function U(P,L,N,ee){return L===null||L.tag!==4||L.stateNode.containerInfo!==N.containerInfo||L.stateNode.implementation!==N.implementation?(L=wd(N,P.mode,ee),L.return=P,L):(L=o(L,N.children||[]),L.return=P,L)}function X(P,L,N,ee,be){return L===null||L.tag!==7?(L=ya(N,P.mode,ee,be),L.return=P,L):(L=o(L,N),L.return=P,L)}function ie(P,L,N){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=vd(""+L,P.mode,N),L.return=P,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case E:return N=yl(L.type,L.key,L.props,null,P.mode,N),bo(N,L),N.return=P,N;case W:return L=wd(L,P.mode,N),L.return=P,L;case ke:var ee=L._init;return L=ee(L._payload),ie(P,L,N)}if(Je(L)||qe(L))return L=ya(L,P.mode,N,null),L.return=P,L;if(typeof L.then=="function")return ie(P,Bl(L),N);if(L.$$typeof===z)return ie(P,kl(P,L),N);Nl(P,L)}return null}function H(P,L,N,ee){var be=L!==null?L.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return be!==null?null:m(P,L,""+N,ee);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case E:return N.key===be?j(P,L,N,ee):null;case W:return N.key===be?U(P,L,N,ee):null;case ke:return be=N._init,N=be(N._payload),H(P,L,N,ee)}if(Je(N)||qe(N))return be!==null?null:X(P,L,N,ee,null);if(typeof N.then=="function")return H(P,L,Bl(N),ee);if(N.$$typeof===z)return H(P,L,kl(P,N),ee);Nl(P,N)}return null}function Y(P,L,N,ee,be){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return P=P.get(N)||null,m(L,P,""+ee,be);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case E:return P=P.get(ee.key===null?N:ee.key)||null,j(L,P,ee,be);case W:return P=P.get(ee.key===null?N:ee.key)||null,U(L,P,ee,be);case ke:var Ye=ee._init;return ee=Ye(ee._payload),Y(P,L,N,ee,be)}if(Je(ee)||qe(ee))return P=P.get(N)||null,X(L,P,ee,be,null);if(typeof ee.then=="function")return Y(P,L,N,Bl(ee),be);if(ee.$$typeof===z)return Y(P,L,N,kl(L,ee),be);Nl(L,ee)}return null}function Pe(P,L,N,ee){for(var be=null,Ye=null,Se=L,Re=L=0,Vt=null;Se!==null&&Re<N.length;Re++){Se.index>Re?(Vt=Se,Se=null):Vt=Se.sibling;var Xe=H(P,Se,N[Re],ee);if(Xe===null){Se===null&&(Se=Vt);break}e&&Se&&Xe.alternate===null&&t(P,Se),L=l(Xe,L,Re),Ye===null?be=Xe:Ye.sibling=Xe,Ye=Xe,Se=Vt}if(Re===N.length)return i(P,Se),et&&wa(P,Re),be;if(Se===null){for(;Re<N.length;Re++)Se=ie(P,N[Re],ee),Se!==null&&(L=l(Se,L,Re),Ye===null?be=Se:Ye.sibling=Se,Ye=Se);return et&&wa(P,Re),be}for(Se=a(Se);Re<N.length;Re++)Vt=Y(Se,P,Re,N[Re],ee),Vt!==null&&(e&&Vt.alternate!==null&&Se.delete(Vt.key===null?Re:Vt.key),L=l(Vt,L,Re),Ye===null?be=Vt:Ye.sibling=Vt,Ye=Vt);return e&&Se.forEach(function(na){return t(P,na)}),et&&wa(P,Re),be}function Te(P,L,N,ee){if(N==null)throw Error(c(151));for(var be=null,Ye=null,Se=L,Re=L=0,Vt=null,Xe=N.next();Se!==null&&!Xe.done;Re++,Xe=N.next()){Se.index>Re?(Vt=Se,Se=null):Vt=Se.sibling;var na=H(P,Se,Xe.value,ee);if(na===null){Se===null&&(Se=Vt);break}e&&Se&&na.alternate===null&&t(P,Se),L=l(na,L,Re),Ye===null?be=na:Ye.sibling=na,Ye=na,Se=Vt}if(Xe.done)return i(P,Se),et&&wa(P,Re),be;if(Se===null){for(;!Xe.done;Re++,Xe=N.next())Xe=ie(P,Xe.value,ee),Xe!==null&&(L=l(Xe,L,Re),Ye===null?be=Xe:Ye.sibling=Xe,Ye=Xe);return et&&wa(P,Re),be}for(Se=a(Se);!Xe.done;Re++,Xe=N.next())Xe=Y(Se,P,Re,Xe.value,ee),Xe!==null&&(e&&Xe.alternate!==null&&Se.delete(Xe.key===null?Re:Xe.key),L=l(Xe,L,Re),Ye===null?be=Xe:Ye.sibling=Xe,Ye=Xe);return e&&Se.forEach(function(M2){return t(P,M2)}),et&&wa(P,Re),be}function ct(P,L,N,ee){if(typeof N=="object"&&N!==null&&N.type===$&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case E:e:{for(var be=N.key;L!==null;){if(L.key===be){if(be=N.type,be===$){if(L.tag===7){i(P,L.sibling),ee=o(L,N.props.children),ee.return=P,P=ee;break e}}else if(L.elementType===be||typeof be=="object"&&be!==null&&be.$$typeof===ke&&Jf(be)===L.type){i(P,L.sibling),ee=o(L,N.props),bo(ee,N),ee.return=P,P=ee;break e}i(P,L);break}else t(P,L);L=L.sibling}N.type===$?(ee=ya(N.props.children,P.mode,ee,N.key),ee.return=P,P=ee):(ee=yl(N.type,N.key,N.props,null,P.mode,ee),bo(ee,N),ee.return=P,P=ee)}return p(P);case W:e:{for(be=N.key;L!==null;){if(L.key===be)if(L.tag===4&&L.stateNode.containerInfo===N.containerInfo&&L.stateNode.implementation===N.implementation){i(P,L.sibling),ee=o(L,N.children||[]),ee.return=P,P=ee;break e}else{i(P,L);break}else t(P,L);L=L.sibling}ee=wd(N,P.mode,ee),ee.return=P,P=ee}return p(P);case ke:return be=N._init,N=be(N._payload),ct(P,L,N,ee)}if(Je(N))return Pe(P,L,N,ee);if(qe(N)){if(be=qe(N),typeof be!="function")throw Error(c(150));return N=be.call(N),Te(P,L,N,ee)}if(typeof N.then=="function")return ct(P,L,Bl(N),ee);if(N.$$typeof===z)return ct(P,L,kl(P,N),ee);Nl(P,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,L!==null&&L.tag===6?(i(P,L.sibling),ee=o(L,N),ee.return=P,P=ee):(i(P,L),ee=vd(N,P.mode,ee),ee.return=P,P=ee),p(P)):i(P,L)}return function(P,L,N,ee){try{go=0;var be=ct(P,L,N,ee);return rr=null,be}catch(Se){if(Se===lo||Se===Cl)throw Se;var Ye=wn(29,Se,null,P.mode);return Ye.lanes=ee,Ye.return=P,Ye}finally{}}}var or=Zf(!0),Xf=Zf(!1),$n=Z(null),ni=null;function Hi(e){var t=e.alternate;I(_t,_t.current&1),I($n,e),ni===null&&(t===null||tr.current!==null||t.memoizedState!==null)&&(ni=e)}function Kf(e){if(e.tag===22){if(I(_t,_t.current),I($n,e),ni===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(ni=e)}}else _i()}function _i(){I(_t,_t.current),I($n,$n.current)}function ki(e){pe($n),ni===e&&(ni=null),pe(_t)}var _t=Z(0);function Ol(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||Gc(i)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ec(e,t,i,a){t=e.memoizedState,i=i(a,t),i=i==null?t:M({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var tc={enqueueSetState:function(e,t,i){e=e._reactInternals;var a=Cn(),o=Oi(a);o.payload=t,i!=null&&(o.callback=i),t=qi(e,o,a),t!==null&&(zn(t,e,a),co(t,e,a))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var a=Cn(),o=Oi(a);o.tag=1,o.payload=t,i!=null&&(o.callback=i),t=qi(e,o,a),t!==null&&(zn(t,e,a),co(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=Cn(),a=Oi(i);a.tag=2,t!=null&&(a.callback=t),t=qi(e,a,i),t!==null&&(zn(t,e,i),co(t,e,i))}};function em(e,t,i,a,o,l,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,l,p):t.prototype&&t.prototype.isPureReactComponent?!Kr(i,a)||!Kr(o,l):!0}function tm(e,t,i,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,a),t.state!==e&&tc.enqueueReplaceState(t,t.state,null)}function Ma(e,t){var i=t;if("ref"in t){i={};for(var a in t)a!=="ref"&&(i[a]=t[a])}if(e=e.defaultProps){i===t&&(i=M({},i));for(var o in e)i[o]===void 0&&(i[o]=e[o])}return i}var ql=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function nm(e){ql(e)}function im(e){console.error(e)}function am(e){ql(e)}function Ul(e,t){try{var i=e.onUncaughtError;i(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function rm(e,t,i){try{var a=e.onCaughtError;a(i.value,{componentStack:i.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function nc(e,t,i){return i=Oi(i),i.tag=3,i.payload={element:null},i.callback=function(){Ul(e,t)},i}function om(e){return e=Oi(e),e.tag=3,e}function lm(e,t,i,a){var o=i.type.getDerivedStateFromError;if(typeof o=="function"){var l=a.value;e.payload=function(){return o(l)},e.callback=function(){rm(t,i,a)}}var p=i.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){rm(t,i,a),typeof o!="function"&&(Qi===null?Qi=new Set([this]):Qi.add(this));var m=a.stack;this.componentDidCatch(a.value,{componentStack:m!==null?m:""})})}function M1(e,t,i,a,o){if(i.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=i.alternate,t!==null&&ao(t,i,o,!0),i=$n.current,i!==null){switch(i.tag){case 13:return ni===null?zc():i.alternate===null&&Pt===0&&(Pt=3),i.flags&=-257,i.flags|=65536,i.lanes=o,a===Ad?i.flags|=16384:(t=i.updateQueue,t===null?i.updateQueue=new Set([a]):t.add(a),Mc(e,a,o)),!1;case 22:return i.flags|=65536,a===Ad?i.flags|=16384:(t=i.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},i.updateQueue=t):(i=t.retryQueue,i===null?t.retryQueue=new Set([a]):i.add(a)),Mc(e,a,o)),!1}throw Error(c(435,i.tag))}return Mc(e,a,o),zc(),!1}if(et)return t=$n.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,a!==Sd&&(e=Error(c(422),{cause:a}),io(An(e,i)))):(a!==Sd&&(t=Error(c(423),{cause:a}),io(An(t,i))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,a=An(a,i),o=nc(e.stateNode,a,o),Ed(e,o),Pt!==4&&(Pt=2)),!1;var l=Error(c(520),{cause:a});if(l=An(l,i),Co===null?Co=[l]:Co.push(l),Pt!==4&&(Pt=2),t===null)return!0;a=An(a,i),i=t;do{switch(i.tag){case 3:return i.flags|=65536,e=o&-o,i.lanes|=e,e=nc(i.stateNode,a,e),Ed(i,e),!1;case 1:if(t=i.type,l=i.stateNode,(i.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(Qi===null||!Qi.has(l))))return i.flags|=65536,o&=-o,i.lanes|=o,o=om(o),lm(o,e,i,a),Ed(i,o),!1}i=i.return}while(i!==null);return!1}var sm=Error(c(461)),Wt=!1;function Zt(e,t,i,a){t.child=e===null?Xf(t,null,i,a):or(t,e.child,i,a)}function dm(e,t,i,a,o){i=i.render;var l=t.ref;if("ref"in a){var p={};for(var m in a)m!=="ref"&&(p[m]=a[m])}else p=a;return Ca(t),a=qd(e,t,i,p,l,o),m=Ud(),e!==null&&!Wt?(Hd(e,t,o),Si(e,t,o)):(et&&m&&jd(t),t.flags|=1,Zt(e,t,a,o),t.child)}function cm(e,t,i,a,o){if(e===null){var l=i.type;return typeof l=="function"&&!yd(l)&&l.defaultProps===void 0&&i.compare===null?(t.tag=15,t.type=l,um(e,t,l,a,o)):(e=yl(i.type,null,a,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!cc(e,o)){var p=l.memoizedProps;if(i=i.compare,i=i!==null?i:Kr,i(p,a)&&e.ref===t.ref)return Si(e,t,o)}return t.flags|=1,e=gi(l,a),e.ref=t.ref,e.return=t,t.child=e}function um(e,t,i,a,o){if(e!==null){var l=e.memoizedProps;if(Kr(l,a)&&e.ref===t.ref)if(Wt=!1,t.pendingProps=a=l,cc(e,o))(e.flags&131072)!==0&&(Wt=!0);else return t.lanes=e.lanes,Si(e,t,o)}return ic(e,t,i,a,o)}function pm(e,t,i){var a=t.pendingProps,o=a.children,l=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=l!==null?l.baseLanes|i:i,e!==null){for(o=t.child=e.child,l=0;o!==null;)l=l|o.lanes|o.childLanes,o=o.sibling;t.childLanes=l&~a}else t.childLanes=0,t.child=null;return fm(e,t,a,i)}if((i&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sl(t,l!==null?l.cachePool:null),l!==null?uf(t,l):Bd(),Kf(t);else return t.lanes=t.childLanes=536870912,fm(e,t,l!==null?l.baseLanes|i:i,i)}else l!==null?(Sl(t,l.cachePool),uf(t,l),_i(),t.memoizedState=null):(e!==null&&Sl(t,null),Bd(),_i());return Zt(e,t,o,i),t.child}function fm(e,t,i,a){var o=Rd();return o=o===null?null:{parent:Ht._currentValue,pool:o},t.memoizedState={baseLanes:i,cachePool:o},e!==null&&Sl(t,null),Bd(),Kf(t),e!==null&&ao(e,t,a,!0),null}function Hl(e,t){var i=t.ref;if(i===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(c(284));(e===null||e.ref!==i)&&(t.flags|=4194816)}}function ic(e,t,i,a,o){return Ca(t),i=qd(e,t,i,a,void 0,o),a=Ud(),e!==null&&!Wt?(Hd(e,t,o),Si(e,t,o)):(et&&a&&jd(t),t.flags|=1,Zt(e,t,i,o),t.child)}function mm(e,t,i,a,o,l){return Ca(t),t.updateQueue=null,i=ff(t,a,i,o),pf(e),a=Ud(),e!==null&&!Wt?(Hd(e,t,l),Si(e,t,l)):(et&&a&&jd(t),t.flags|=1,Zt(e,t,i,l),t.child)}function hm(e,t,i,a,o){if(Ca(t),t.stateNode===null){var l=Ja,p=i.contextType;typeof p=="object"&&p!==null&&(l=an(p)),l=new i(a,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=tc,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=a,l.state=t.memoizedState,l.refs={},Pd(t),p=i.contextType,l.context=typeof p=="object"&&p!==null?an(p):Ja,l.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(ec(t,i,p,a),l.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(p=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),p!==l.state&&tc.enqueueReplaceState(l,l.state,null),po(t,a,l,o),uo(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){l=t.stateNode;var m=t.memoizedProps,j=Ma(i,m);l.props=j;var U=l.context,X=i.contextType;p=Ja,typeof X=="object"&&X!==null&&(p=an(X));var ie=i.getDerivedStateFromProps;X=typeof ie=="function"||typeof l.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,X||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(m||U!==p)&&tm(t,l,a,p),Ni=!1;var H=t.memoizedState;l.state=H,po(t,a,l,o),uo(),U=t.memoizedState,m||H!==U||Ni?(typeof ie=="function"&&(ec(t,i,ie,a),U=t.memoizedState),(j=Ni||em(t,i,j,a,H,U,p))?(X||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=U),l.props=a,l.state=U,l.context=p,a=j):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{l=t.stateNode,Dd(e,t),p=t.memoizedProps,X=Ma(i,p),l.props=X,ie=t.pendingProps,H=l.context,U=i.contextType,j=Ja,typeof U=="object"&&U!==null&&(j=an(U)),m=i.getDerivedStateFromProps,(U=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(p!==ie||H!==j)&&tm(t,l,a,j),Ni=!1,H=t.memoizedState,l.state=H,po(t,a,l,o),uo();var Y=t.memoizedState;p!==ie||H!==Y||Ni||e!==null&&e.dependencies!==null&&jl(e.dependencies)?(typeof m=="function"&&(ec(t,i,m,a),Y=t.memoizedState),(X=Ni||em(t,i,X,a,H,Y,j)||e!==null&&e.dependencies!==null&&jl(e.dependencies))?(U||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,Y,j),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,Y,j)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||p===e.memoizedProps&&H===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&H===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=Y),l.props=a,l.state=Y,l.context=j,a=X):(typeof l.componentDidUpdate!="function"||p===e.memoizedProps&&H===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&H===e.memoizedState||(t.flags|=1024),a=!1)}return l=a,Hl(e,t),a=(t.flags&128)!==0,l||a?(l=t.stateNode,i=a&&typeof i.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&a?(t.child=or(t,e.child,null,o),t.child=or(t,null,i,o)):Zt(e,t,i,o),t.memoizedState=l.state,e=t.child):e=Si(e,t,o),e}function xm(e,t,i,a){return no(),t.flags|=256,Zt(e,t,i,a),t.child}var ac={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rc(e){return{baseLanes:e,cachePool:nf()}}function oc(e,t,i){return e=e!==null?e.childLanes&~i:0,t&&(e|=Bn),e}function gm(e,t,i){var a=t.pendingProps,o=!1,l=(t.flags&128)!==0,p;if((p=l)||(p=e!==null&&e.memoizedState===null?!1:(_t.current&2)!==0),p&&(o=!0,t.flags&=-129),p=(t.flags&32)!==0,t.flags&=-33,e===null){if(et){if(o?Hi(t):_i(),et){var m=At,j;if(j=m){e:{for(j=m,m=ti;j.nodeType!==8;){if(!m){m=null;break e}if(j=Qn(j.nextSibling),j===null){m=null;break e}}m=j}m!==null?(t.memoizedState={dehydrated:m,treeContext:va!==null?{id:bi,overflow:yi}:null,retryLane:536870912,hydrationErrors:null},j=wn(18,null,null,0),j.stateNode=m,j.return=t,t.child=j,dn=t,At=null,j=!0):j=!1}j||ka(t)}if(m=t.memoizedState,m!==null&&(m=m.dehydrated,m!==null))return Gc(m)?t.lanes=32:t.lanes=536870912,null;ki(t)}return m=a.children,a=a.fallback,o?(_i(),o=t.mode,m=_l({mode:"hidden",children:m},o),a=ya(a,o,i,null),m.return=t,a.return=t,m.sibling=a,t.child=m,o=t.child,o.memoizedState=rc(i),o.childLanes=oc(e,p,i),t.memoizedState=ac,a):(Hi(t),lc(t,m))}if(j=e.memoizedState,j!==null&&(m=j.dehydrated,m!==null)){if(l)t.flags&256?(Hi(t),t.flags&=-257,t=sc(e,t,i)):t.memoizedState!==null?(_i(),t.child=e.child,t.flags|=128,t=null):(_i(),o=a.fallback,m=t.mode,a=_l({mode:"visible",children:a.children},m),o=ya(o,m,i,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,or(t,e.child,null,i),a=t.child,a.memoizedState=rc(i),a.childLanes=oc(e,p,i),t.memoizedState=ac,t=o);else if(Hi(t),Gc(m)){if(p=m.nextSibling&&m.nextSibling.dataset,p)var U=p.dgst;p=U,a=Error(c(419)),a.stack="",a.digest=p,io({value:a,source:null,stack:null}),t=sc(e,t,i)}else if(Wt||ao(e,t,i,!1),p=(i&e.childLanes)!==0,Wt||p){if(p=bt,p!==null&&(a=i&-i,a=(a&42)!==0?1:Tn(a),a=(a&(p.suspendedLanes|i))!==0?0:a,a!==0&&a!==j.retryLane))throw j.retryLane=a,Ia(e,a),zn(p,e,a),sm;m.data==="$?"||zc(),t=sc(e,t,i)}else m.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=j.treeContext,At=Qn(m.nextSibling),dn=t,et=!0,ja=null,ti=!1,e!==null&&(Dn[En++]=bi,Dn[En++]=yi,Dn[En++]=va,bi=e.id,yi=e.overflow,va=t),t=lc(t,a.children),t.flags|=4096);return t}return o?(_i(),o=a.fallback,m=t.mode,j=e.child,U=j.sibling,a=gi(j,{mode:"hidden",children:a.children}),a.subtreeFlags=j.subtreeFlags&65011712,U!==null?o=gi(U,o):(o=ya(o,m,i,null),o.flags|=2),o.return=t,a.return=t,a.sibling=o,t.child=a,a=o,o=t.child,m=e.child.memoizedState,m===null?m=rc(i):(j=m.cachePool,j!==null?(U=Ht._currentValue,j=j.parent!==U?{parent:U,pool:U}:j):j=nf(),m={baseLanes:m.baseLanes|i,cachePool:j}),o.memoizedState=m,o.childLanes=oc(e,p,i),t.memoizedState=ac,a):(Hi(t),i=e.child,e=i.sibling,i=gi(i,{mode:"visible",children:a.children}),i.return=t,i.sibling=null,e!==null&&(p=t.deletions,p===null?(t.deletions=[e],t.flags|=16):p.push(e)),t.child=i,t.memoizedState=null,i)}function lc(e,t){return t=_l({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function _l(e,t){return e=wn(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function sc(e,t,i){return or(t,e.child,null,i),e=lc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bm(e,t,i){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),zd(e.return,t,i)}function dc(e,t,i,a,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:i,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=a,l.tail=i,l.tailMode=o)}function ym(e,t,i){var a=t.pendingProps,o=a.revealOrder,l=a.tail;if(Zt(e,t,a.children,i),a=_t.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bm(e,i,t);else if(e.tag===19)bm(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(I(_t,a),o){case"forwards":for(i=t.child,o=null;i!==null;)e=i.alternate,e!==null&&Ol(e)===null&&(o=i),i=i.sibling;i=o,i===null?(o=t.child,t.child=null):(o=i.sibling,i.sibling=null),dc(t,!1,o,i,l);break;case"backwards":for(i=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ol(e)===null){t.child=o;break}e=o.sibling,o.sibling=i,i=o,o=e}dc(t,!0,i,null,l);break;case"together":dc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Si(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),Vi|=t.lanes,(i&t.childLanes)===0)if(e!==null){if(ao(e,t,i,!1),(i&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,i=gi(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=gi(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function cc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&jl(e)))}function T1(e,t,i){switch(t.tag){case 3:Ae(t,t.stateNode.containerInfo),Bi(t,Ht,e.memoizedState.cache),no();break;case 27:case 5:qt(t);break;case 4:Ae(t,t.stateNode.containerInfo);break;case 10:Bi(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Hi(t),t.flags|=128,null):(i&t.child.childLanes)!==0?gm(e,t,i):(Hi(t),e=Si(e,t,i),e!==null?e.sibling:null);Hi(t);break;case 19:var o=(e.flags&128)!==0;if(a=(i&t.childLanes)!==0,a||(ao(e,t,i,!1),a=(i&t.childLanes)!==0),o){if(a)return ym(e,t,i);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),I(_t,_t.current),a)break;return null;case 22:case 23:return t.lanes=0,pm(e,t,i);case 24:Bi(t,Ht,e.memoizedState.cache)}return Si(e,t,i)}function vm(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps)Wt=!0;else{if(!cc(e,i)&&(t.flags&128)===0)return Wt=!1,T1(e,t,i);Wt=(e.flags&131072)!==0}else Wt=!1,et&&(t.flags&1048576)!==0&&Ip(t,wl,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,o=a._init;if(a=o(a._payload),t.type=a,typeof a=="function")yd(a)?(e=Ma(a,e),t.tag=1,t=hm(null,t,a,e,i)):(t.tag=0,t=ic(null,t,a,e,i));else{if(a!=null){if(o=a.$$typeof,o===re){t.tag=11,t=dm(null,t,a,e,i);break e}else if(o===K){t.tag=14,t=cm(null,t,a,e,i);break e}}throw t=ht(a)||a,Error(c(306,t,""))}}return t;case 0:return ic(e,t,t.type,t.pendingProps,i);case 1:return a=t.type,o=Ma(a,t.pendingProps),hm(e,t,a,o,i);case 3:e:{if(Ae(t,t.stateNode.containerInfo),e===null)throw Error(c(387));a=t.pendingProps;var l=t.memoizedState;o=l.element,Dd(e,t),po(t,a,null,i);var p=t.memoizedState;if(a=p.cache,Bi(t,Ht,a),a!==l.cache&&Ld(t,[Ht],i,!0),uo(),a=p.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:p.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=xm(e,t,a,i);break e}else if(a!==o){o=An(Error(c(424)),t),io(o),t=xm(e,t,a,i);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(At=Qn(e.firstChild),dn=t,et=!0,ja=null,ti=!0,i=Xf(t,null,a,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(no(),a===o){t=Si(e,t,i);break e}Zt(e,t,a,i)}t=t.child}return t;case 26:return Hl(e,t),e===null?(i=Sh(t.type,null,t.pendingProps,null))?t.memoizedState=i:et||(i=t.type,e=t.pendingProps,a=ns(ve.current).createElement(i),a[ne]=t,a[me]=e,Kt(a,i,e),xe(a),t.stateNode=a):t.memoizedState=Sh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return qt(t),e===null&&et&&(a=t.stateNode=wh(t.type,t.pendingProps,ve.current),dn=t,ti=!0,o=At,Zi(t.type)?(Yc=o,At=Qn(a.firstChild)):At=o),Zt(e,t,t.pendingProps.children,i),Hl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&et&&((o=a=At)&&(a=i2(a,t.type,t.pendingProps,ti),a!==null?(t.stateNode=a,dn=t,At=Qn(a.firstChild),ti=!1,o=!0):o=!1),o||ka(t)),qt(t),o=t.type,l=t.pendingProps,p=e!==null?e.memoizedProps:null,a=l.children,Uc(o,l)?a=null:p!==null&&Uc(o,p)&&(t.flags|=32),t.memoizedState!==null&&(o=qd(e,t,w1,null,null,i),Eo._currentValue=o),Hl(e,t),Zt(e,t,a,i),t.child;case 6:return e===null&&et&&((e=i=At)&&(i=a2(i,t.pendingProps,ti),i!==null?(t.stateNode=i,dn=t,At=null,e=!0):e=!1),e||ka(t)),null;case 13:return gm(e,t,i);case 4:return Ae(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=or(t,null,a,i):Zt(e,t,a,i),t.child;case 11:return dm(e,t,t.type,t.pendingProps,i);case 7:return Zt(e,t,t.pendingProps,i),t.child;case 8:return Zt(e,t,t.pendingProps.children,i),t.child;case 12:return Zt(e,t,t.pendingProps.children,i),t.child;case 10:return a=t.pendingProps,Bi(t,t.type,a.value),Zt(e,t,a.children,i),t.child;case 9:return o=t.type._context,a=t.pendingProps.children,Ca(t),o=an(o),a=a(o),t.flags|=1,Zt(e,t,a,i),t.child;case 14:return cm(e,t,t.type,t.pendingProps,i);case 15:return um(e,t,t.type,t.pendingProps,i);case 19:return ym(e,t,i);case 31:return a=t.pendingProps,i=t.mode,a={mode:a.mode,children:a.children},e===null?(i=_l(a,i),i.ref=t.ref,t.child=i,i.return=t,t=i):(i=gi(e.child,a),i.ref=t.ref,t.child=i,i.return=t,t=i),t;case 22:return pm(e,t,i);case 24:return Ca(t),a=an(Ht),e===null?(o=Rd(),o===null&&(o=bt,l=Md(),o.pooledCache=l,l.refCount++,l!==null&&(o.pooledCacheLanes|=i),o=l),t.memoizedState={parent:a,cache:o},Pd(t),Bi(t,Ht,o)):((e.lanes&i)!==0&&(Dd(e,t),po(t,null,null,i),uo()),o=e.memoizedState,l=t.memoizedState,o.parent!==a?(o={parent:a,cache:a},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),Bi(t,Ht,a)):(a=l.cache,Bi(t,Ht,a),a!==o.cache&&Ld(t,[Ht],i,!0))),Zt(e,t,t.pendingProps.children,i),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Ci(e){e.flags|=4}function wm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Th(t)){if(t=$n.current,t!==null&&((Ie&4194048)===Ie?ni!==null:(Ie&62914560)!==Ie&&(Ie&536870912)===0||t!==ni))throw so=Ad,af;e.flags|=8192}}function Gl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Xn():536870912,e.lanes|=t,cr|=t)}function yo(e,t){if(!et)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function zt(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,a=0;if(t)for(var o=e.child;o!==null;)i|=o.lanes|o.childLanes,a|=o.subtreeFlags&65011712,a|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)i|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=a,e.childLanes=i,t}function R1(e,t,i){var a=t.pendingProps;switch(kd(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(t),null;case 1:return zt(t),null;case 3:return i=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),wi(Ht),it(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(to(t)?Ci(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Xp())),zt(t),null;case 26:return i=t.memoizedState,e===null?(Ci(t),i!==null?(zt(t),wm(t,i)):(zt(t),t.flags&=-16777217)):i?i!==e.memoizedState?(Ci(t),zt(t),wm(t,i)):(zt(t),t.flags&=-16777217):(e.memoizedProps!==a&&Ci(t),zt(t),t.flags&=-16777217),null;case 27:he(t),i=ve.current;var o=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Ci(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return zt(t),null}e=fe.current,to(t)?Jp(t):(e=wh(o,a,i),t.stateNode=e,Ci(t))}return zt(t),null;case 5:if(he(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Ci(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return zt(t),null}if(e=fe.current,to(t))Jp(t);else{switch(o=ns(ve.current),e){case 1:e=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:e=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":e=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":e=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?o.createElement(i,{is:a.is}):o.createElement(i)}}e[ne]=t,e[me]=a;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=e;e:switch(Kt(e,i,a),i){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Ci(t)}}return zt(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Ci(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(e=ve.current,to(t)){if(e=t.stateNode,i=t.memoizedProps,a=null,o=dn,o!==null)switch(o.tag){case 27:case 5:a=o.memoizedProps}e[ne]=t,e=!!(e.nodeValue===i||a!==null&&a.suppressHydrationWarning===!0||mh(e.nodeValue,i)),e||ka(t)}else e=ns(e).createTextNode(a),e[ne]=t,t.stateNode=e}return zt(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=to(t),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(c(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(c(317));o[ne]=t}else no(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;zt(t),o=!1}else o=Xp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(ki(t),t):(ki(t),null)}if(ki(t),(t.flags&128)!==0)return t.lanes=i,t;if(i=a!==null,e=e!==null&&e.memoizedState!==null,i){a=t.child,o=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(o=a.alternate.memoizedState.cachePool.pool);var l=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==o&&(a.flags|=2048)}return i!==e&&i&&(t.child.flags|=8192),Gl(t,t.updateQueue),zt(t),null;case 4:return it(),e===null&&$c(t.stateNode.containerInfo),zt(t),null;case 10:return wi(t.type),zt(t),null;case 19:if(pe(_t),o=t.memoizedState,o===null)return zt(t),null;if(a=(t.flags&128)!==0,l=o.rendering,l===null)if(a)yo(o,!1);else{if(Pt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Ol(e),l!==null){for(t.flags|=128,yo(o,!1),e=l.updateQueue,t.updateQueue=e,Gl(t,e),t.subtreeFlags=0,e=i,i=t.child;i!==null;)Qp(i,e),i=i.sibling;return I(_t,_t.current&1|2),t.child}e=e.sibling}o.tail!==null&&te()>Fl&&(t.flags|=128,a=!0,yo(o,!1),t.lanes=4194304)}else{if(!a)if(e=Ol(l),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Gl(t,e),yo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!et)return zt(t),null}else 2*te()-o.renderingStartTime>Fl&&i!==536870912&&(t.flags|=128,a=!0,yo(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(e=o.last,e!==null?e.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=te(),t.sibling=null,e=_t.current,I(_t,a?e&1|2:e&1),t):(zt(t),null);case 22:case 23:return ki(t),Nd(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(i&536870912)!==0&&(t.flags&128)===0&&(zt(t),t.subtreeFlags&6&&(t.flags|=8192)):zt(t),i=t.updateQueue,i!==null&&Gl(t,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==i&&(t.flags|=2048),e!==null&&pe(za),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),wi(Ht),zt(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function A1(e,t){switch(kd(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wi(Ht),it(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return he(t),null;case 13:if(ki(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));no()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(_t),null;case 4:return it(),null;case 10:return wi(t.type),null;case 22:case 23:return ki(t),Nd(),e!==null&&pe(za),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return wi(Ht),null;case 25:return null;default:return null}}function jm(e,t){switch(kd(t),t.tag){case 3:wi(Ht),it();break;case 26:case 27:case 5:he(t);break;case 4:it();break;case 13:ki(t);break;case 19:pe(_t);break;case 10:wi(t.type);break;case 22:case 23:ki(t),Nd(),e!==null&&pe(za);break;case 24:wi(Ht)}}function vo(e,t){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var o=a.next;i=o;do{if((i.tag&e)===e){a=void 0;var l=i.create,p=i.inst;a=l(),p.destroy=a}i=i.next}while(i!==o)}}catch(m){ft(t,t.return,m)}}function Gi(e,t,i){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var l=o.next;a=l;do{if((a.tag&e)===e){var p=a.inst,m=p.destroy;if(m!==void 0){p.destroy=void 0,o=t;var j=i,U=m;try{U()}catch(X){ft(o,j,X)}}}a=a.next}while(a!==l)}}catch(X){ft(t,t.return,X)}}function km(e){var t=e.updateQueue;if(t!==null){var i=e.stateNode;try{cf(t,i)}catch(a){ft(e,e.return,a)}}}function Sm(e,t,i){i.props=Ma(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(a){ft(e,t,a)}}function wo(e,t){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof i=="function"?e.refCleanup=i(a):i.current=a}}catch(o){ft(e,t,o)}}function ii(e,t){var i=e.ref,a=e.refCleanup;if(i!==null)if(typeof a=="function")try{a()}catch(o){ft(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(o){ft(e,t,o)}else i.current=null}function Cm(e){var t=e.type,i=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":i.autoFocus&&a.focus();break e;case"img":i.src?a.src=i.src:i.srcSet&&(a.srcset=i.srcSet)}}catch(o){ft(e,e.return,o)}}function uc(e,t,i){try{var a=e.stateNode;X1(a,e.type,i,t),a[me]=t}catch(o){ft(e,e.return,o)}}function zm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zi(e.type)||e.tag===4}function pc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zi(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fc(e,t,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(e,t):(t=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,t.appendChild(e),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=ts));else if(a!==4&&(a===27&&Zi(e.type)&&(i=e.stateNode,t=null),e=e.child,e!==null))for(fc(e,t,i),e=e.sibling;e!==null;)fc(e,t,i),e=e.sibling}function Yl(e,t,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(a!==4&&(a===27&&Zi(e.type)&&(i=e.stateNode),e=e.child,e!==null))for(Yl(e,t,i),e=e.sibling;e!==null;)Yl(e,t,i),e=e.sibling}function Lm(e){var t=e.stateNode,i=e.memoizedProps;try{for(var a=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);Kt(t,a,i),t[ne]=e,t[me]=i}catch(l){ft(e,e.return,l)}}var zi=!1,$t=!1,mc=!1,Mm=typeof WeakSet=="function"?WeakSet:Set,Ft=null;function P1(e,t){if(e=e.containerInfo,Oc=ss,e=Op(e),pd(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var o=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{i.nodeType,l.nodeType}catch{i=null;break e}var p=0,m=-1,j=-1,U=0,X=0,ie=e,H=null;t:for(;;){for(var Y;ie!==i||o!==0&&ie.nodeType!==3||(m=p+o),ie!==l||a!==0&&ie.nodeType!==3||(j=p+a),ie.nodeType===3&&(p+=ie.nodeValue.length),(Y=ie.firstChild)!==null;)H=ie,ie=Y;for(;;){if(ie===e)break t;if(H===i&&++U===o&&(m=p),H===l&&++X===a&&(j=p),(Y=ie.nextSibling)!==null)break;ie=H,H=ie.parentNode}ie=Y}i=m===-1||j===-1?null:{start:m,end:j}}else i=null}i=i||{start:0,end:0}}else i=null;for(qc={focusedElem:e,selectionRange:i},ss=!1,Ft=t;Ft!==null;)if(t=Ft,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ft=e;else for(;Ft!==null;){switch(t=Ft,l=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,i=t,o=l.memoizedProps,l=l.memoizedState,a=i.stateNode;try{var Pe=Ma(i.type,o,i.elementType===i.type);e=a.getSnapshotBeforeUpdate(Pe,l),a.__reactInternalSnapshotBeforeUpdate=e}catch(Te){ft(i,i.return,Te)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,i=e.nodeType,i===9)_c(e);else if(i===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":_c(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ft=e;break}Ft=t.return}}function Tm(e,t,i){var a=i.flags;switch(i.tag){case 0:case 11:case 15:Yi(e,i),a&4&&vo(5,i);break;case 1:if(Yi(e,i),a&4)if(e=i.stateNode,t===null)try{e.componentDidMount()}catch(p){ft(i,i.return,p)}else{var o=Ma(i.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(p){ft(i,i.return,p)}}a&64&&km(i),a&512&&wo(i,i.return);break;case 3:if(Yi(e,i),a&64&&(e=i.updateQueue,e!==null)){if(t=null,i.child!==null)switch(i.child.tag){case 27:case 5:t=i.child.stateNode;break;case 1:t=i.child.stateNode}try{cf(e,t)}catch(p){ft(i,i.return,p)}}break;case 27:t===null&&a&4&&Lm(i);case 26:case 5:Yi(e,i),t===null&&a&4&&Cm(i),a&512&&wo(i,i.return);break;case 12:Yi(e,i);break;case 13:Yi(e,i),a&4&&Pm(e,i),a&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=H1.bind(null,i),r2(e,i))));break;case 22:if(a=i.memoizedState!==null||zi,!a){t=t!==null&&t.memoizedState!==null||$t,o=zi;var l=$t;zi=a,($t=t)&&!l?Wi(e,i,(i.subtreeFlags&8772)!==0):Yi(e,i),zi=o,$t=l}break;case 30:break;default:Yi(e,i)}}function Rm(e){var t=e.alternate;t!==null&&(e.alternate=null,Rm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&R(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var kt=null,hn=!1;function Li(e,t,i){for(i=i.child;i!==null;)Am(e,t,i),i=i.sibling}function Am(e,t,i){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(Un,i)}catch{}switch(i.tag){case 26:$t||ii(i,t),Li(e,t,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:$t||ii(i,t);var a=kt,o=hn;Zi(i.type)&&(kt=i.stateNode,hn=!1),Li(e,t,i),Ro(i.stateNode),kt=a,hn=o;break;case 5:$t||ii(i,t);case 6:if(a=kt,o=hn,kt=null,Li(e,t,i),kt=a,hn=o,kt!==null)if(hn)try{(kt.nodeType===9?kt.body:kt.nodeName==="HTML"?kt.ownerDocument.body:kt).removeChild(i.stateNode)}catch(l){ft(i,t,l)}else try{kt.removeChild(i.stateNode)}catch(l){ft(i,t,l)}break;case 18:kt!==null&&(hn?(e=kt,yh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),Oo(e)):yh(kt,i.stateNode));break;case 4:a=kt,o=hn,kt=i.stateNode.containerInfo,hn=!0,Li(e,t,i),kt=a,hn=o;break;case 0:case 11:case 14:case 15:$t||Gi(2,i,t),$t||Gi(4,i,t),Li(e,t,i);break;case 1:$t||(ii(i,t),a=i.stateNode,typeof a.componentWillUnmount=="function"&&Sm(i,t,a)),Li(e,t,i);break;case 21:Li(e,t,i);break;case 22:$t=(a=$t)||i.memoizedState!==null,Li(e,t,i),$t=a;break;default:Li(e,t,i)}}function Pm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Oo(e)}catch(i){ft(t,t.return,i)}}function D1(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Mm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Mm),t;default:throw Error(c(435,e.tag))}}function hc(e,t){var i=D1(e);t.forEach(function(a){var o=_1.bind(null,e,a);i.has(a)||(i.add(a),a.then(o,o))})}function jn(e,t){var i=t.deletions;if(i!==null)for(var a=0;a<i.length;a++){var o=i[a],l=e,p=t,m=p;e:for(;m!==null;){switch(m.tag){case 27:if(Zi(m.type)){kt=m.stateNode,hn=!1;break e}break;case 5:kt=m.stateNode,hn=!1;break e;case 3:case 4:kt=m.stateNode.containerInfo,hn=!0;break e}m=m.return}if(kt===null)throw Error(c(160));Am(l,p,o),kt=null,hn=!1,l=o.alternate,l!==null&&(l.return=null),o.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Dm(t,e),t=t.sibling}var Vn=null;function Dm(e,t){var i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jn(t,e),kn(e),a&4&&(Gi(3,e,e.return),vo(3,e),Gi(5,e,e.return));break;case 1:jn(t,e),kn(e),a&512&&($t||i===null||ii(i,i.return)),a&64&&zi&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?a:i.concat(a))));break;case 26:var o=Vn;if(jn(t,e),kn(e),a&512&&($t||i===null||ii(i,i.return)),a&4){var l=i!==null?i.memoizedState:null;if(a=e.memoizedState,i===null)if(a===null)if(e.stateNode===null){e:{a=e.type,i=e.memoizedProps,o=o.ownerDocument||o;t:switch(a){case"title":l=o.getElementsByTagName("title")[0],(!l||l[Gt]||l[ne]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=o.createElement(a),o.head.insertBefore(l,o.querySelector("head > title"))),Kt(l,a,i),l[ne]=e,xe(l),a=l;break e;case"link":var p=Lh("link","href",o).get(a+(i.href||""));if(p){for(var m=0;m<p.length;m++)if(l=p[m],l.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&l.getAttribute("rel")===(i.rel==null?null:i.rel)&&l.getAttribute("title")===(i.title==null?null:i.title)&&l.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){p.splice(m,1);break t}}l=o.createElement(a),Kt(l,a,i),o.head.appendChild(l);break;case"meta":if(p=Lh("meta","content",o).get(a+(i.content||""))){for(m=0;m<p.length;m++)if(l=p[m],l.getAttribute("content")===(i.content==null?null:""+i.content)&&l.getAttribute("name")===(i.name==null?null:i.name)&&l.getAttribute("property")===(i.property==null?null:i.property)&&l.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&l.getAttribute("charset")===(i.charSet==null?null:i.charSet)){p.splice(m,1);break t}}l=o.createElement(a),Kt(l,a,i),o.head.appendChild(l);break;default:throw Error(c(468,a))}l[ne]=e,xe(l),a=l}e.stateNode=a}else Mh(o,e.type,e.stateNode);else e.stateNode=zh(o,a,e.memoizedProps);else l!==a?(l===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):l.count--,a===null?Mh(o,e.type,e.stateNode):zh(o,a,e.memoizedProps)):a===null&&e.stateNode!==null&&uc(e,e.memoizedProps,i.memoizedProps)}break;case 27:jn(t,e),kn(e),a&512&&($t||i===null||ii(i,i.return)),i!==null&&a&4&&uc(e,e.memoizedProps,i.memoizedProps);break;case 5:if(jn(t,e),kn(e),a&512&&($t||i===null||ii(i,i.return)),e.flags&32){o=e.stateNode;try{_a(o,"")}catch(Y){ft(e,e.return,Y)}}a&4&&e.stateNode!=null&&(o=e.memoizedProps,uc(e,o,i!==null?i.memoizedProps:o)),a&1024&&(mc=!0);break;case 6:if(jn(t,e),kn(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,i=e.stateNode;try{i.nodeValue=a}catch(Y){ft(e,e.return,Y)}}break;case 3:if(rs=null,o=Vn,Vn=is(t.containerInfo),jn(t,e),Vn=o,kn(e),a&4&&i!==null&&i.memoizedState.isDehydrated)try{Oo(t.containerInfo)}catch(Y){ft(e,e.return,Y)}mc&&(mc=!1,Em(e));break;case 4:a=Vn,Vn=is(e.stateNode.containerInfo),jn(t,e),kn(e),Vn=a;break;case 12:jn(t,e),kn(e);break;case 13:jn(t,e),kn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(wc=te()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,hc(e,a)));break;case 22:o=e.memoizedState!==null;var j=i!==null&&i.memoizedState!==null,U=zi,X=$t;if(zi=U||o,$t=X||j,jn(t,e),$t=X,zi=U,kn(e),a&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(i===null||j||zi||$t||Ta(e)),i=null,t=e;;){if(t.tag===5||t.tag===26){if(i===null){j=i=t;try{if(l=j.stateNode,o)p=l.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{m=j.stateNode;var ie=j.memoizedProps.style,H=ie!=null&&ie.hasOwnProperty("display")?ie.display:null;m.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(Y){ft(j,j.return,Y)}}}else if(t.tag===6){if(i===null){j=t;try{j.stateNode.nodeValue=o?"":j.memoizedProps}catch(Y){ft(j,j.return,Y)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;i===t&&(i=null),t=t.return}i===t&&(i=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(i=a.retryQueue,i!==null&&(a.retryQueue=null,hc(e,i))));break;case 19:jn(t,e),kn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,hc(e,a)));break;case 30:break;case 21:break;default:jn(t,e),kn(e)}}function kn(e){var t=e.flags;if(t&2){try{for(var i,a=e.return;a!==null;){if(zm(a)){i=a;break}a=a.return}if(i==null)throw Error(c(160));switch(i.tag){case 27:var o=i.stateNode,l=pc(e);Yl(e,l,o);break;case 5:var p=i.stateNode;i.flags&32&&(_a(p,""),i.flags&=-33);var m=pc(e);Yl(e,m,p);break;case 3:case 4:var j=i.stateNode.containerInfo,U=pc(e);fc(e,U,j);break;default:throw Error(c(161))}}catch(X){ft(e,e.return,X)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Em(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Em(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Yi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Tm(e,t.alternate,t),t=t.sibling}function Ta(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Gi(4,t,t.return),Ta(t);break;case 1:ii(t,t.return);var i=t.stateNode;typeof i.componentWillUnmount=="function"&&Sm(t,t.return,i),Ta(t);break;case 27:Ro(t.stateNode);case 26:case 5:ii(t,t.return),Ta(t);break;case 22:t.memoizedState===null&&Ta(t);break;case 30:Ta(t);break;default:Ta(t)}e=e.sibling}}function Wi(e,t,i){for(i=i&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,o=e,l=t,p=l.flags;switch(l.tag){case 0:case 11:case 15:Wi(o,l,i),vo(4,l);break;case 1:if(Wi(o,l,i),a=l,o=a.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(U){ft(a,a.return,U)}if(a=l,o=a.updateQueue,o!==null){var m=a.stateNode;try{var j=o.shared.hiddenCallbacks;if(j!==null)for(o.shared.hiddenCallbacks=null,o=0;o<j.length;o++)df(j[o],m)}catch(U){ft(a,a.return,U)}}i&&p&64&&km(l),wo(l,l.return);break;case 27:Lm(l);case 26:case 5:Wi(o,l,i),i&&a===null&&p&4&&Cm(l),wo(l,l.return);break;case 12:Wi(o,l,i);break;case 13:Wi(o,l,i),i&&p&4&&Pm(o,l);break;case 22:l.memoizedState===null&&Wi(o,l,i),wo(l,l.return);break;case 30:break;default:Wi(o,l,i)}t=t.sibling}}function xc(e,t){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&ro(i))}function gc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ro(e))}function ai(e,t,i,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)$m(e,t,i,a),t=t.sibling}function $m(e,t,i,a){var o=t.flags;switch(t.tag){case 0:case 11:case 15:ai(e,t,i,a),o&2048&&vo(9,t);break;case 1:ai(e,t,i,a);break;case 3:ai(e,t,i,a),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ro(e)));break;case 12:if(o&2048){ai(e,t,i,a),e=t.stateNode;try{var l=t.memoizedProps,p=l.id,m=l.onPostCommit;typeof m=="function"&&m(p,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(j){ft(t,t.return,j)}}else ai(e,t,i,a);break;case 13:ai(e,t,i,a);break;case 23:break;case 22:l=t.stateNode,p=t.alternate,t.memoizedState!==null?l._visibility&2?ai(e,t,i,a):jo(e,t):l._visibility&2?ai(e,t,i,a):(l._visibility|=2,lr(e,t,i,a,(t.subtreeFlags&10256)!==0)),o&2048&&xc(p,t);break;case 24:ai(e,t,i,a),o&2048&&gc(t.alternate,t);break;default:ai(e,t,i,a)}}function lr(e,t,i,a,o){for(o=o&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var l=e,p=t,m=i,j=a,U=p.flags;switch(p.tag){case 0:case 11:case 15:lr(l,p,m,j,o),vo(8,p);break;case 23:break;case 22:var X=p.stateNode;p.memoizedState!==null?X._visibility&2?lr(l,p,m,j,o):jo(l,p):(X._visibility|=2,lr(l,p,m,j,o)),o&&U&2048&&xc(p.alternate,p);break;case 24:lr(l,p,m,j,o),o&&U&2048&&gc(p.alternate,p);break;default:lr(l,p,m,j,o)}t=t.sibling}}function jo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var i=e,a=t,o=a.flags;switch(a.tag){case 22:jo(i,a),o&2048&&xc(a.alternate,a);break;case 24:jo(i,a),o&2048&&gc(a.alternate,a);break;default:jo(i,a)}t=t.sibling}}var ko=8192;function sr(e){if(e.subtreeFlags&ko)for(e=e.child;e!==null;)Bm(e),e=e.sibling}function Bm(e){switch(e.tag){case 26:sr(e),e.flags&ko&&e.memoizedState!==null&&b2(Vn,e.memoizedState,e.memoizedProps);break;case 5:sr(e);break;case 3:case 4:var t=Vn;Vn=is(e.stateNode.containerInfo),sr(e),Vn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=ko,ko=16777216,sr(e),ko=t):sr(e));break;default:sr(e)}}function Nm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function So(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var a=t[i];Ft=a,qm(a,e)}Nm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Om(e),e=e.sibling}function Om(e){switch(e.tag){case 0:case 11:case 15:So(e),e.flags&2048&&Gi(9,e,e.return);break;case 3:So(e);break;case 12:So(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Wl(e)):So(e);break;default:So(e)}}function Wl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var a=t[i];Ft=a,qm(a,e)}Nm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Gi(8,t,t.return),Wl(t);break;case 22:i=t.stateNode,i._visibility&2&&(i._visibility&=-3,Wl(t));break;default:Wl(t)}e=e.sibling}}function qm(e,t){for(;Ft!==null;){var i=Ft;switch(i.tag){case 0:case 11:case 15:Gi(8,i,t);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var a=i.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:ro(i.memoizedState.cache)}if(a=i.child,a!==null)a.return=i,Ft=a;else e:for(i=e;Ft!==null;){a=Ft;var o=a.sibling,l=a.return;if(Rm(a),a===i){Ft=null;break e}if(o!==null){o.return=l,Ft=o;break e}Ft=l}}}var E1={getCacheForType:function(e){var t=an(Ht),i=t.data.get(e);return i===void 0&&(i=e(),t.data.set(e,i)),i}},$1=typeof WeakMap=="function"?WeakMap:Map,ot=0,bt=null,We=null,Ie=0,lt=0,Sn=null,Fi=!1,dr=!1,bc=!1,Mi=0,Pt=0,Vi=0,Ra=0,yc=0,Bn=0,cr=0,Co=null,xn=null,vc=!1,wc=0,Fl=1/0,Vl=null,Qi=null,Xt=0,Ii=null,ur=null,pr=0,jc=0,kc=null,Um=null,zo=0,Sc=null;function Cn(){if((ot&2)!==0&&Ie!==0)return Ie&-Ie;if(F.T!==null){var e=Ka;return e!==0?e:Ac()}return q()}function Hm(){Bn===0&&(Bn=(Ie&536870912)===0||et?Zn():536870912);var e=$n.current;return e!==null&&(e.flags|=32),Bn}function zn(e,t,i){(e===bt&&(lt===2||lt===9)||e.cancelPendingCommit!==null)&&(fr(e,0),Ji(e,Ie,Bn,!1)),sn(e,i),((ot&2)===0||e!==bt)&&(e===bt&&((ot&2)===0&&(Ra|=i),Pt===4&&Ji(e,Ie,Bn,!1)),ri(e))}function _m(e,t,i){if((ot&6)!==0)throw Error(c(327));var a=!i&&(t&124)===0&&(t&e.expiredLanes)===0||cn(e,t),o=a?O1(e,t):Lc(e,t,!0),l=a;do{if(o===0){dr&&!a&&Ji(e,t,0,!1);break}else{if(i=e.current.alternate,l&&!B1(i)){o=Lc(e,t,!1),l=!1;continue}if(o===2){if(l=t,e.errorRecoveryDisabledLanes&l)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){t=p;e:{var m=e;o=Co;var j=m.current.memoizedState.isDehydrated;if(j&&(fr(m,p).flags|=256),p=Lc(m,p,!1),p!==2){if(bc&&!j){m.errorRecoveryDisabledLanes|=l,Ra|=l,o=4;break e}l=xn,xn=o,l!==null&&(xn===null?xn=l:xn.push.apply(xn,l))}o=p}if(l=!1,o!==2)continue}}if(o===1){fr(e,0),Ji(e,t,0,!0);break}e:{switch(a=e,l=o,l){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Ji(a,t,Bn,!Fi);break e;case 2:xn=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(o=wc+300-te(),10<o)){if(Ji(a,t,Bn,!Fi),Mn(a,0,!0)!==0)break e;a.timeoutHandle=gh(Gm.bind(null,a,i,xn,Vl,vc,t,Bn,Ra,cr,Fi,l,2,-0,0),o);break e}Gm(a,i,xn,Vl,vc,t,Bn,Ra,cr,Fi,l,0,-0,0)}}break}while(!0);ri(e)}function Gm(e,t,i,a,o,l,p,m,j,U,X,ie,H,Y){if(e.timeoutHandle=-1,ie=t.subtreeFlags,(ie&8192||(ie&16785408)===16785408)&&(Do={stylesheets:null,count:0,unsuspend:g2},Bm(t),ie=y2(),ie!==null)){e.cancelPendingCommit=ie(Jm.bind(null,e,t,l,i,a,o,p,m,j,X,1,H,Y)),Ji(e,l,p,!U);return}Jm(e,t,l,i,a,o,p,m,j)}function B1(e){for(var t=e;;){var i=t.tag;if((i===0||i===11||i===15)&&t.flags&16384&&(i=t.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var a=0;a<i.length;a++){var o=i[a],l=o.getSnapshot;o=o.value;try{if(!vn(l(),o))return!1}catch{return!1}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ji(e,t,i,a){t&=~yc,t&=~Ra,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var o=t;0<o;){var l=31-wt(o),p=1<<l;a[l]=-1,o&=~p}i!==0&&Yn(e,i,t)}function Ql(){return(ot&6)===0?(Lo(0),!1):!0}function Cc(){if(We!==null){if(lt===0)var e=We.return;else e=We,vi=Sa=null,_d(e),rr=null,go=0,e=We;for(;e!==null;)jm(e.alternate,e),e=e.return;We=null}}function fr(e,t){var i=e.timeoutHandle;i!==-1&&(e.timeoutHandle=-1,e2(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),Cc(),bt=e,We=i=gi(e.current,null),Ie=t,lt=0,Sn=null,Fi=!1,dr=cn(e,t),bc=!1,cr=Bn=yc=Ra=Vi=Pt=0,xn=Co=null,vc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var o=31-wt(a),l=1<<o;t|=e[o],a&=~l}return Mi=t,xl(),i}function Ym(e,t){He=null,F.H=$l,t===lo||t===Cl?(t=lf(),lt=3):t===af?(t=lf(),lt=4):lt=t===sm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Sn=t,We===null&&(Pt=1,Ul(e,An(t,e.current)))}function Wm(){var e=F.H;return F.H=$l,e===null?$l:e}function Fm(){var e=F.A;return F.A=E1,e}function zc(){Pt=4,Fi||(Ie&4194048)!==Ie&&$n.current!==null||(dr=!0),(Vi&134217727)===0&&(Ra&134217727)===0||bt===null||Ji(bt,Ie,Bn,!1)}function Lc(e,t,i){var a=ot;ot|=2;var o=Wm(),l=Fm();(bt!==e||Ie!==t)&&(Vl=null,fr(e,t)),t=!1;var p=Pt;e:do try{if(lt!==0&&We!==null){var m=We,j=Sn;switch(lt){case 8:Cc(),p=6;break e;case 3:case 2:case 9:case 6:$n.current===null&&(t=!0);var U=lt;if(lt=0,Sn=null,mr(e,m,j,U),i&&dr){p=0;break e}break;default:U=lt,lt=0,Sn=null,mr(e,m,j,U)}}N1(),p=Pt;break}catch(X){Ym(e,X)}while(!0);return t&&e.shellSuspendCounter++,vi=Sa=null,ot=a,F.H=o,F.A=l,We===null&&(bt=null,Ie=0,xl()),p}function N1(){for(;We!==null;)Vm(We)}function O1(e,t){var i=ot;ot|=2;var a=Wm(),o=Fm();bt!==e||Ie!==t?(Vl=null,Fl=te()+500,fr(e,t)):dr=cn(e,t);e:do try{if(lt!==0&&We!==null){t=We;var l=Sn;t:switch(lt){case 1:lt=0,Sn=null,mr(e,t,l,1);break;case 2:case 9:if(rf(l)){lt=0,Sn=null,Qm(t);break}t=function(){lt!==2&&lt!==9||bt!==e||(lt=7),ri(e)},l.then(t,t);break e;case 3:lt=7;break e;case 4:lt=5;break e;case 7:rf(l)?(lt=0,Sn=null,Qm(t)):(lt=0,Sn=null,mr(e,t,l,7));break;case 5:var p=null;switch(We.tag){case 26:p=We.memoizedState;case 5:case 27:var m=We;if(!p||Th(p)){lt=0,Sn=null;var j=m.sibling;if(j!==null)We=j;else{var U=m.return;U!==null?(We=U,Il(U)):We=null}break t}}lt=0,Sn=null,mr(e,t,l,5);break;case 6:lt=0,Sn=null,mr(e,t,l,6);break;case 8:Cc(),Pt=6;break e;default:throw Error(c(462))}}q1();break}catch(X){Ym(e,X)}while(!0);return vi=Sa=null,F.H=a,F.A=o,ot=i,We!==null?0:(bt=null,Ie=0,xl(),Pt)}function q1(){for(;We!==null&&!_();)Vm(We)}function Vm(e){var t=vm(e.alternate,e,Mi);e.memoizedProps=e.pendingProps,t===null?Il(e):We=t}function Qm(e){var t=e,i=t.alternate;switch(t.tag){case 15:case 0:t=mm(i,t,t.pendingProps,t.type,void 0,Ie);break;case 11:t=mm(i,t,t.pendingProps,t.type.render,t.ref,Ie);break;case 5:_d(t);default:jm(i,t),t=We=Qp(t,Mi),t=vm(i,t,Mi)}e.memoizedProps=e.pendingProps,t===null?Il(e):We=t}function mr(e,t,i,a){vi=Sa=null,_d(t),rr=null,go=0;var o=t.return;try{if(M1(e,o,t,i,Ie)){Pt=1,Ul(e,An(i,e.current)),We=null;return}}catch(l){if(o!==null)throw We=o,l;Pt=1,Ul(e,An(i,e.current)),We=null;return}t.flags&32768?(et||a===1?e=!0:dr||(Ie&536870912)!==0?e=!1:(Fi=e=!0,(a===2||a===9||a===3||a===6)&&(a=$n.current,a!==null&&a.tag===13&&(a.flags|=16384))),Im(t,e)):Il(t)}function Il(e){var t=e;do{if((t.flags&32768)!==0){Im(t,Fi);return}e=t.return;var i=R1(t.alternate,t,Mi);if(i!==null){We=i;return}if(t=t.sibling,t!==null){We=t;return}We=t=e}while(t!==null);Pt===0&&(Pt=5)}function Im(e,t){do{var i=A1(e.alternate,e);if(i!==null){i.flags&=32767,We=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!t&&(e=e.sibling,e!==null)){We=e;return}We=e=i}while(e!==null);Pt=6,We=null}function Jm(e,t,i,a,o,l,p,m,j){e.cancelPendingCommit=null;do Jl();while(Xt!==0);if((ot&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(l=t.lanes|t.childLanes,l|=gd,Gn(e,i,l,p,m,j),e===bt&&(We=bt=null,Ie=0),ur=t,Ii=e,pr=i,jc=l,kc=o,Um=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,G1(Dt,function(){return th(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=F.T,F.T=null,o=J.p,J.p=2,p=ot,ot|=4;try{P1(e,t,i)}finally{ot=p,J.p=o,F.T=a}}Xt=1,Zm(),Xm(),Km()}}function Zm(){if(Xt===1){Xt=0;var e=Ii,t=ur,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=F.T,F.T=null;var a=J.p;J.p=2;var o=ot;ot|=4;try{Dm(t,e);var l=qc,p=Op(e.containerInfo),m=l.focusedElem,j=l.selectionRange;if(p!==m&&m&&m.ownerDocument&&Np(m.ownerDocument.documentElement,m)){if(j!==null&&pd(m)){var U=j.start,X=j.end;if(X===void 0&&(X=U),"selectionStart"in m)m.selectionStart=U,m.selectionEnd=Math.min(X,m.value.length);else{var ie=m.ownerDocument||document,H=ie&&ie.defaultView||window;if(H.getSelection){var Y=H.getSelection(),Pe=m.textContent.length,Te=Math.min(j.start,Pe),ct=j.end===void 0?Te:Math.min(j.end,Pe);!Y.extend&&Te>ct&&(p=ct,ct=Te,Te=p);var P=Bp(m,Te),L=Bp(m,ct);if(P&&L&&(Y.rangeCount!==1||Y.anchorNode!==P.node||Y.anchorOffset!==P.offset||Y.focusNode!==L.node||Y.focusOffset!==L.offset)){var N=ie.createRange();N.setStart(P.node,P.offset),Y.removeAllRanges(),Te>ct?(Y.addRange(N),Y.extend(L.node,L.offset)):(N.setEnd(L.node,L.offset),Y.addRange(N))}}}}for(ie=[],Y=m;Y=Y.parentNode;)Y.nodeType===1&&ie.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<ie.length;m++){var ee=ie[m];ee.element.scrollLeft=ee.left,ee.element.scrollTop=ee.top}}ss=!!Oc,qc=Oc=null}finally{ot=o,J.p=a,F.T=i}}e.current=t,Xt=2}}function Xm(){if(Xt===2){Xt=0;var e=Ii,t=ur,i=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||i){i=F.T,F.T=null;var a=J.p;J.p=2;var o=ot;ot|=4;try{Tm(e,t.alternate,t)}finally{ot=o,J.p=a,F.T=i}}Xt=3}}function Km(){if(Xt===4||Xt===3){Xt=0,de();var e=Ii,t=ur,i=pr,a=Um;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Xt=5:(Xt=0,ur=Ii=null,eh(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(Qi=null),yn(i),t=t.stateNode,vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(Un,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=F.T,o=J.p,J.p=2,F.T=null;try{for(var l=e.onRecoverableError,p=0;p<a.length;p++){var m=a[p];l(m.value,{componentStack:m.stack})}}finally{F.T=t,J.p=o}}(pr&3)!==0&&Jl(),ri(e),o=e.pendingLanes,(i&4194090)!==0&&(o&42)!==0?e===Sc?zo++:(zo=0,Sc=e):zo=0,Lo(0)}}function eh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ro(t)))}function Jl(e){return Zm(),Xm(),Km(),th()}function th(){if(Xt!==5)return!1;var e=Ii,t=jc;jc=0;var i=yn(pr),a=F.T,o=J.p;try{J.p=32>i?32:i,F.T=null,i=kc,kc=null;var l=Ii,p=pr;if(Xt=0,ur=Ii=null,pr=0,(ot&6)!==0)throw Error(c(331));var m=ot;if(ot|=4,Om(l.current),$m(l,l.current,p,i),ot=m,Lo(0,!1),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(Un,l)}catch{}return!0}finally{J.p=o,F.T=a,eh(e,t)}}function nh(e,t,i){t=An(i,t),t=nc(e.stateNode,t,2),e=qi(e,t,2),e!==null&&(sn(e,2),ri(e))}function ft(e,t,i){if(e.tag===3)nh(e,e,i);else for(;t!==null;){if(t.tag===3){nh(t,e,i);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Qi===null||!Qi.has(a))){e=An(i,e),i=om(2),a=qi(t,i,2),a!==null&&(lm(i,a,t,e),sn(a,2),ri(a));break}}t=t.return}}function Mc(e,t,i){var a=e.pingCache;if(a===null){a=e.pingCache=new $1;var o=new Set;a.set(t,o)}else o=a.get(t),o===void 0&&(o=new Set,a.set(t,o));o.has(i)||(bc=!0,o.add(i),e=U1.bind(null,e,t,i),t.then(e,e))}function U1(e,t,i){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,bt===e&&(Ie&i)===i&&(Pt===4||Pt===3&&(Ie&62914560)===Ie&&300>te()-wc?(ot&2)===0&&fr(e,0):yc|=i,cr===Ie&&(cr=0)),ri(e)}function ih(e,t){t===0&&(t=Xn()),e=Ia(e,t),e!==null&&(sn(e,t),ri(e))}function H1(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),ih(e,i)}function _1(e,t){var i=0;switch(e.tag){case 13:var a=e.stateNode,o=e.memoizedState;o!==null&&(i=o.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(t),ih(e,i)}function G1(e,t){return bn(e,t)}var Zl=null,hr=null,Tc=!1,Xl=!1,Rc=!1,Aa=0;function ri(e){e!==hr&&e.next===null&&(hr===null?Zl=hr=e:hr=hr.next=e),Xl=!0,Tc||(Tc=!0,W1())}function Lo(e,t){if(!Rc&&Xl){Rc=!0;do for(var i=!1,a=Zl;a!==null;){if(e!==0){var o=a.pendingLanes;if(o===0)var l=0;else{var p=a.suspendedLanes,m=a.pingedLanes;l=(1<<31-wt(42|e)+1)-1,l&=o&~(p&~m),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(i=!0,lh(a,l))}else l=Ie,l=Mn(a,a===bt?l:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(l&3)===0||cn(a,l)||(i=!0,lh(a,l));a=a.next}while(i);Rc=!1}}function Y1(){ah()}function ah(){Xl=Tc=!1;var e=0;Aa!==0&&(K1()&&(e=Aa),Aa=0);for(var t=te(),i=null,a=Zl;a!==null;){var o=a.next,l=rh(a,t);l===0?(a.next=null,i===null?Zl=o:i.next=o,o===null&&(hr=i)):(i=a,(e!==0||(l&3)!==0)&&(Xl=!0)),a=o}Lo(e)}function rh(e,t){for(var i=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var p=31-wt(l),m=1<<p,j=o[p];j===-1?((m&i)===0||(m&a)!==0)&&(o[p]=mi(m,t)):j<=t&&(e.expiredLanes|=m),l&=~m}if(t=bt,i=Ie,i=Mn(e,e===t?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,i===0||e===t&&(lt===2||lt===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&qn(a),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||cn(e,i)){if(t=i&-i,t===e.callbackPriority)return t;switch(a!==null&&qn(a),yn(i)){case 2:case 8:i=xt;break;case 32:i=Dt;break;case 268435456:i=Rt;break;default:i=Dt}return a=oh.bind(null,e),i=bn(i,a),e.callbackPriority=t,e.callbackNode=i,t}return a!==null&&a!==null&&qn(a),e.callbackPriority=2,e.callbackNode=null,2}function oh(e,t){if(Xt!==0&&Xt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if(Jl()&&e.callbackNode!==i)return null;var a=Ie;return a=Mn(e,e===bt?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(_m(e,a,t),rh(e,te()),e.callbackNode!=null&&e.callbackNode===i?oh.bind(null,e):null)}function lh(e,t){if(Jl())return null;_m(e,t,!0)}function W1(){t2(function(){(ot&6)!==0?bn(Le,Y1):ah()})}function Ac(){return Aa===0&&(Aa=Zn()),Aa}function sh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:dl(""+e)}function dh(e,t){var i=t.ownerDocument.createElement("input");return i.name=t.name,i.value=t.value,e.id&&i.setAttribute("form",e.id),t.parentNode.insertBefore(i,t),e=new FormData(e),i.parentNode.removeChild(i),e}function F1(e,t,i,a,o){if(t==="submit"&&i&&i.stateNode===o){var l=sh((o[me]||null).action),p=a.submitter;p&&(t=(t=p[me]||null)?sh(t.formAction):p.getAttribute("formAction"),t!==null&&(l=t,p=null));var m=new fl("action","action",null,a,o);e.push({event:m,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Aa!==0){var j=p?dh(o,p):new FormData(o);Zd(i,{pending:!0,data:j,method:o.method,action:l},null,j)}}else typeof l=="function"&&(m.preventDefault(),j=p?dh(o,p):new FormData(o),Zd(i,{pending:!0,data:j,method:o.method,action:l},l,j))},currentTarget:o}]})}}for(var Pc=0;Pc<xd.length;Pc++){var Dc=xd[Pc],V1=Dc.toLowerCase(),Q1=Dc[0].toUpperCase()+Dc.slice(1);Fn(V1,"on"+Q1)}Fn(Hp,"onAnimationEnd"),Fn(_p,"onAnimationIteration"),Fn(Gp,"onAnimationStart"),Fn("dblclick","onDoubleClick"),Fn("focusin","onFocus"),Fn("focusout","onBlur"),Fn(u1,"onTransitionRun"),Fn(p1,"onTransitionStart"),Fn(f1,"onTransitionCancel"),Fn(Yp,"onTransitionEnd"),Yt("onMouseEnter",["mouseout","mouseover"]),Yt("onMouseLeave",["mouseout","mouseover"]),Yt("onPointerEnter",["pointerout","pointerover"]),Yt("onPointerLeave",["pointerout","pointerover"]),Ke("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ke("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ke("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ke("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ke("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ke("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function ch(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var a=e[i],o=a.event;a=a.listeners;e:{var l=void 0;if(t)for(var p=a.length-1;0<=p;p--){var m=a[p],j=m.instance,U=m.currentTarget;if(m=m.listener,j!==l&&o.isPropagationStopped())break e;l=m,o.currentTarget=U;try{l(o)}catch(X){ql(X)}o.currentTarget=null,l=j}else for(p=0;p<a.length;p++){if(m=a[p],j=m.instance,U=m.currentTarget,m=m.listener,j!==l&&o.isPropagationStopped())break e;l=m,o.currentTarget=U;try{l(o)}catch(X){ql(X)}o.currentTarget=null,l=j}}}}function Fe(e,t){var i=t[Ee];i===void 0&&(i=t[Ee]=new Set);var a=e+"__bubble";i.has(a)||(uh(t,e,2,!1),i.add(a))}function Ec(e,t,i){var a=0;t&&(a|=4),uh(i,e,a,t)}var Kl="_reactListening"+Math.random().toString(36).slice(2);function $c(e){if(!e[Kl]){e[Kl]=!0,Me.forEach(function(i){i!=="selectionchange"&&(I1.has(i)||Ec(i,!1,e),Ec(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Kl]||(t[Kl]=!0,Ec("selectionchange",!1,t))}}function uh(e,t,i,a){switch($h(t)){case 2:var o=j2;break;case 8:o=k2;break;default:o=Ic}i=o.bind(null,t,i,e),o=void 0,!id||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),a?o!==void 0?e.addEventListener(t,i,{capture:!0,passive:o}):e.addEventListener(t,i,!0):o!==void 0?e.addEventListener(t,i,{passive:o}):e.addEventListener(t,i,!1)}function Bc(e,t,i,a,o){var l=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var p=a.tag;if(p===3||p===4){var m=a.stateNode.containerInfo;if(m===o)break;if(p===4)for(p=a.return;p!==null;){var j=p.tag;if((j===3||j===4)&&p.stateNode.containerInfo===o)return;p=p.return}for(;m!==null;){if(p=se(m),p===null)return;if(j=p.tag,j===5||j===6||j===26||j===27){a=l=p;continue e}m=m.parentNode}}a=a.return}gp(function(){var U=l,X=td(i),ie=[];e:{var H=Wp.get(e);if(H!==void 0){var Y=fl,Pe=e;switch(e){case"keypress":if(ul(i)===0)break e;case"keydown":case"keyup":Y=Gg;break;case"focusin":Pe="focus",Y=ld;break;case"focusout":Pe="blur",Y=ld;break;case"beforeblur":case"afterblur":Y=ld;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=Ag;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=Fg;break;case Hp:case _p:case Gp:Y=Eg;break;case Yp:Y=Qg;break;case"scroll":case"scrollend":Y=Tg;break;case"wheel":Y=Jg;break;case"copy":case"cut":case"paste":Y=Bg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=jp;break;case"toggle":case"beforetoggle":Y=Xg}var Te=(t&4)!==0,ct=!Te&&(e==="scroll"||e==="scrollend"),P=Te?H!==null?H+"Capture":null:H;Te=[];for(var L=U,N;L!==null;){var ee=L;if(N=ee.stateNode,ee=ee.tag,ee!==5&&ee!==26&&ee!==27||N===null||P===null||(ee=Fr(L,P),ee!=null&&Te.push(To(L,ee,N))),ct)break;L=L.return}0<Te.length&&(H=new Y(H,Pe,null,i,X),ie.push({event:H,listeners:Te}))}}if((t&7)===0){e:{if(H=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",H&&i!==ed&&(Pe=i.relatedTarget||i.fromElement)&&(se(Pe)||Pe[Be]))break e;if((Y||H)&&(H=X.window===X?X:(H=X.ownerDocument)?H.defaultView||H.parentWindow:window,Y?(Pe=i.relatedTarget||i.toElement,Y=U,Pe=Pe?se(Pe):null,Pe!==null&&(ct=h(Pe),Te=Pe.tag,Pe!==ct||Te!==5&&Te!==27&&Te!==6)&&(Pe=null)):(Y=null,Pe=U),Y!==Pe)){if(Te=vp,ee="onMouseLeave",P="onMouseEnter",L="mouse",(e==="pointerout"||e==="pointerover")&&(Te=jp,ee="onPointerLeave",P="onPointerEnter",L="pointer"),ct=Y==null?H:oe(Y),N=Pe==null?H:oe(Pe),H=new Te(ee,L+"leave",Y,i,X),H.target=ct,H.relatedTarget=N,ee=null,se(X)===U&&(Te=new Te(P,L+"enter",Pe,i,X),Te.target=N,Te.relatedTarget=ct,ee=Te),ct=ee,Y&&Pe)t:{for(Te=Y,P=Pe,L=0,N=Te;N;N=xr(N))L++;for(N=0,ee=P;ee;ee=xr(ee))N++;for(;0<L-N;)Te=xr(Te),L--;for(;0<N-L;)P=xr(P),N--;for(;L--;){if(Te===P||P!==null&&Te===P.alternate)break t;Te=xr(Te),P=xr(P)}Te=null}else Te=null;Y!==null&&ph(ie,H,Y,Te,!1),Pe!==null&&ct!==null&&ph(ie,ct,Pe,Te,!0)}}e:{if(H=U?oe(U):window,Y=H.nodeName&&H.nodeName.toLowerCase(),Y==="select"||Y==="input"&&H.type==="file")var be=Rp;else if(Mp(H))if(Ap)be=s1;else{be=o1;var Ye=r1}else Y=H.nodeName,!Y||Y.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?U&&Ks(U.elementType)&&(be=Rp):be=l1;if(be&&(be=be(e,U))){Tp(ie,be,i,X);break e}Ye&&Ye(e,H,U),e==="focusout"&&U&&H.type==="number"&&U.memoizedProps.value!=null&&pn(H,"number",H.value)}switch(Ye=U?oe(U):window,e){case"focusin":(Mp(Ye)||Ye.contentEditable==="true")&&(Fa=Ye,fd=U,eo=null);break;case"focusout":eo=fd=Fa=null;break;case"mousedown":md=!0;break;case"contextmenu":case"mouseup":case"dragend":md=!1,qp(ie,i,X);break;case"selectionchange":if(c1)break;case"keydown":case"keyup":qp(ie,i,X)}var Se;if(dd)e:{switch(e){case"compositionstart":var Re="onCompositionStart";break e;case"compositionend":Re="onCompositionEnd";break e;case"compositionupdate":Re="onCompositionUpdate";break e}Re=void 0}else Wa?zp(e,i)&&(Re="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(Re="onCompositionStart");Re&&(kp&&i.locale!=="ko"&&(Wa||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&Wa&&(Se=bp()):($i=X,ad="value"in $i?$i.value:$i.textContent,Wa=!0)),Ye=es(U,Re),0<Ye.length&&(Re=new wp(Re,e,null,i,X),ie.push({event:Re,listeners:Ye}),Se?Re.data=Se:(Se=Lp(i),Se!==null&&(Re.data=Se)))),(Se=e1?t1(e,i):n1(e,i))&&(Re=es(U,"onBeforeInput"),0<Re.length&&(Ye=new wp("onBeforeInput","beforeinput",null,i,X),ie.push({event:Ye,listeners:Re}),Ye.data=Se)),F1(ie,e,U,i,X)}ch(ie,t)})}function To(e,t,i){return{instance:e,listener:t,currentTarget:i}}function es(e,t){for(var i=t+"Capture",a=[];e!==null;){var o=e,l=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||l===null||(o=Fr(e,i),o!=null&&a.unshift(To(e,o,l)),o=Fr(e,t),o!=null&&a.push(To(e,o,l))),e.tag===3)return a;e=e.return}return[]}function xr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ph(e,t,i,a,o){for(var l=t._reactName,p=[];i!==null&&i!==a;){var m=i,j=m.alternate,U=m.stateNode;if(m=m.tag,j!==null&&j===a)break;m!==5&&m!==26&&m!==27||U===null||(j=U,o?(U=Fr(i,l),U!=null&&p.unshift(To(i,U,j))):o||(U=Fr(i,l),U!=null&&p.push(To(i,U,j)))),i=i.return}p.length!==0&&e.push({event:t,listeners:p})}var J1=/\r\n?/g,Z1=/\u0000|\uFFFD/g;function fh(e){return(typeof e=="string"?e:""+e).replace(J1,`
`).replace(Z1,"")}function mh(e,t){return t=fh(t),fh(e)===t}function ts(){}function dt(e,t,i,a,o,l){switch(i){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||_a(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&_a(e,""+a);break;case"className":ha(e,"class",a);break;case"tabIndex":ha(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":ha(e,i,a);break;case"style":hp(e,a,l);break;case"data":if(t!=="object"){ha(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||i!=="href")){e.removeAttribute(i);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(i);break}a=dl(""+a),e.setAttribute(i,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(i==="formAction"?(t!=="input"&&dt(e,t,"name",o.name,o,null),dt(e,t,"formEncType",o.formEncType,o,null),dt(e,t,"formMethod",o.formMethod,o,null),dt(e,t,"formTarget",o.formTarget,o,null)):(dt(e,t,"encType",o.encType,o,null),dt(e,t,"method",o.method,o,null),dt(e,t,"target",o.target,o,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(i);break}a=dl(""+a),e.setAttribute(i,a);break;case"onClick":a!=null&&(e.onclick=ts);break;case"onScroll":a!=null&&Fe("scroll",e);break;case"onScrollEnd":a!=null&&Fe("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(i=a.__html,i!=null){if(o.children!=null)throw Error(c(60));e.innerHTML=i}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}i=dl(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(i,""+a):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":a===!0?e.setAttribute(i,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(i,a):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(i,a):e.removeAttribute(i);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(i):e.setAttribute(i,a);break;case"popover":Fe("beforetoggle",e),Fe("toggle",e),ma(e,"popover",a);break;case"xlinkActuate":Rn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Rn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Rn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Rn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Rn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Rn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Rn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Rn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Rn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":ma(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=Lg.get(i)||i,ma(e,i,a))}}function Nc(e,t,i,a,o,l){switch(i){case"style":hp(e,a,l);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(i=a.__html,i!=null){if(o.children!=null)throw Error(c(60));e.innerHTML=i}}break;case"children":typeof a=="string"?_a(e,a):(typeof a=="number"||typeof a=="bigint")&&_a(e,""+a);break;case"onScroll":a!=null&&Fe("scroll",e);break;case"onScrollEnd":a!=null&&Fe("scrollend",e);break;case"onClick":a!=null&&(e.onclick=ts);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ut.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(o=i.endsWith("Capture"),t=i.slice(2,o?i.length-7:void 0),l=e[me]||null,l=l!=null?l[i]:null,typeof l=="function"&&e.removeEventListener(t,l,o),typeof a=="function")){typeof l!="function"&&l!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(t,a,o);break e}i in e?e[i]=a:a===!0?e.setAttribute(i,""):ma(e,i,a)}}}function Kt(e,t,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Fe("error",e),Fe("load",e);var a=!1,o=!1,l;for(l in i)if(i.hasOwnProperty(l)){var p=i[l];if(p!=null)switch(l){case"src":a=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:dt(e,t,l,p,i,null)}}o&&dt(e,t,"srcSet",i.srcSet,i,null),a&&dt(e,t,"src",i.src,i,null);return;case"input":Fe("invalid",e);var m=l=p=o=null,j=null,U=null;for(a in i)if(i.hasOwnProperty(a)){var X=i[a];if(X!=null)switch(a){case"name":o=X;break;case"type":p=X;break;case"checked":j=X;break;case"defaultChecked":U=X;break;case"value":l=X;break;case"defaultValue":m=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(c(137,t));break;default:dt(e,t,a,X,i,null)}}tn(e,l,m,j,U,p,o,!1),ei(e);return;case"select":Fe("invalid",e),a=p=l=null;for(o in i)if(i.hasOwnProperty(o)&&(m=i[o],m!=null))switch(o){case"value":l=m;break;case"defaultValue":p=m;break;case"multiple":a=m;default:dt(e,t,o,m,i,null)}t=l,i=p,e.multiple=!!a,t!=null?Jt(e,!!a,t,!1):i!=null&&Jt(e,!!a,i,!0);return;case"textarea":Fe("invalid",e),l=o=a=null;for(p in i)if(i.hasOwnProperty(p)&&(m=i[p],m!=null))switch(p){case"value":a=m;break;case"defaultValue":o=m;break;case"children":l=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(c(91));break;default:dt(e,t,p,m,i,null)}sl(e,a,o,l),ei(e);return;case"option":for(j in i)if(i.hasOwnProperty(j)&&(a=i[j],a!=null))switch(j){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:dt(e,t,j,a,i,null)}return;case"dialog":Fe("beforetoggle",e),Fe("toggle",e),Fe("cancel",e),Fe("close",e);break;case"iframe":case"object":Fe("load",e);break;case"video":case"audio":for(a=0;a<Mo.length;a++)Fe(Mo[a],e);break;case"image":Fe("error",e),Fe("load",e);break;case"details":Fe("toggle",e);break;case"embed":case"source":case"link":Fe("error",e),Fe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in i)if(i.hasOwnProperty(U)&&(a=i[U],a!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:dt(e,t,U,a,i,null)}return;default:if(Ks(t)){for(X in i)i.hasOwnProperty(X)&&(a=i[X],a!==void 0&&Nc(e,t,X,a,i,void 0));return}}for(m in i)i.hasOwnProperty(m)&&(a=i[m],a!=null&&dt(e,t,m,a,i,null))}function X1(e,t,i,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,l=null,p=null,m=null,j=null,U=null,X=null;for(Y in i){var ie=i[Y];if(i.hasOwnProperty(Y)&&ie!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":j=ie;default:a.hasOwnProperty(Y)||dt(e,t,Y,null,a,ie)}}for(var H in a){var Y=a[H];if(ie=i[H],a.hasOwnProperty(H)&&(Y!=null||ie!=null))switch(H){case"type":l=Y;break;case"name":o=Y;break;case"checked":U=Y;break;case"defaultChecked":X=Y;break;case"value":p=Y;break;case"defaultValue":m=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(c(137,t));break;default:Y!==ie&&dt(e,t,H,Y,a,ie)}}un(e,p,m,j,U,X,l,o);return;case"select":Y=p=m=H=null;for(l in i)if(j=i[l],i.hasOwnProperty(l)&&j!=null)switch(l){case"value":break;case"multiple":Y=j;default:a.hasOwnProperty(l)||dt(e,t,l,null,a,j)}for(o in a)if(l=a[o],j=i[o],a.hasOwnProperty(o)&&(l!=null||j!=null))switch(o){case"value":H=l;break;case"defaultValue":m=l;break;case"multiple":p=l;default:l!==j&&dt(e,t,o,l,a,j)}t=m,i=p,a=Y,H!=null?Jt(e,!!i,H,!1):!!a!=!!i&&(t!=null?Jt(e,!!i,t,!0):Jt(e,!!i,i?[]:"",!1));return;case"textarea":Y=H=null;for(m in i)if(o=i[m],i.hasOwnProperty(m)&&o!=null&&!a.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:dt(e,t,m,null,a,o)}for(p in a)if(o=a[p],l=i[p],a.hasOwnProperty(p)&&(o!=null||l!=null))switch(p){case"value":H=o;break;case"defaultValue":Y=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(c(91));break;default:o!==l&&dt(e,t,p,o,a,l)}nn(e,H,Y);return;case"option":for(var Pe in i)if(H=i[Pe],i.hasOwnProperty(Pe)&&H!=null&&!a.hasOwnProperty(Pe))switch(Pe){case"selected":e.selected=!1;break;default:dt(e,t,Pe,null,a,H)}for(j in a)if(H=a[j],Y=i[j],a.hasOwnProperty(j)&&H!==Y&&(H!=null||Y!=null))switch(j){case"selected":e.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:dt(e,t,j,H,a,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Te in i)H=i[Te],i.hasOwnProperty(Te)&&H!=null&&!a.hasOwnProperty(Te)&&dt(e,t,Te,null,a,H);for(U in a)if(H=a[U],Y=i[U],a.hasOwnProperty(U)&&H!==Y&&(H!=null||Y!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(c(137,t));break;default:dt(e,t,U,H,a,Y)}return;default:if(Ks(t)){for(var ct in i)H=i[ct],i.hasOwnProperty(ct)&&H!==void 0&&!a.hasOwnProperty(ct)&&Nc(e,t,ct,void 0,a,H);for(X in a)H=a[X],Y=i[X],!a.hasOwnProperty(X)||H===Y||H===void 0&&Y===void 0||Nc(e,t,X,H,a,Y);return}}for(var P in i)H=i[P],i.hasOwnProperty(P)&&H!=null&&!a.hasOwnProperty(P)&&dt(e,t,P,null,a,H);for(ie in a)H=a[ie],Y=i[ie],!a.hasOwnProperty(ie)||H===Y||H==null&&Y==null||dt(e,t,ie,H,a,Y)}var Oc=null,qc=null;function ns(e){return e.nodeType===9?e:e.ownerDocument}function hh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Uc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hc=null;function K1(){var e=window.event;return e&&e.type==="popstate"?e===Hc?!1:(Hc=e,!0):(Hc=null,!1)}var gh=typeof setTimeout=="function"?setTimeout:void 0,e2=typeof clearTimeout=="function"?clearTimeout:void 0,bh=typeof Promise=="function"?Promise:void 0,t2=typeof queueMicrotask=="function"?queueMicrotask:typeof bh<"u"?function(e){return bh.resolve(null).then(e).catch(n2)}:gh;function n2(e){setTimeout(function(){throw e})}function Zi(e){return e==="head"}function yh(e,t){var i=t,a=0,o=0;do{var l=i.nextSibling;if(e.removeChild(i),l&&l.nodeType===8)if(i=l.data,i==="/$"){if(0<a&&8>a){i=a;var p=e.ownerDocument;if(i&1&&Ro(p.documentElement),i&2&&Ro(p.body),i&4)for(i=p.head,Ro(i),p=i.firstChild;p;){var m=p.nextSibling,j=p.nodeName;p[Gt]||j==="SCRIPT"||j==="STYLE"||j==="LINK"&&p.rel.toLowerCase()==="stylesheet"||i.removeChild(p),p=m}}if(o===0){e.removeChild(l),Oo(t);return}o--}else i==="$"||i==="$?"||i==="$!"?o++:a=i.charCodeAt(0)-48;else a=0;i=l}while(i);Oo(t)}function _c(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var i=t;switch(t=t.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":_c(i),R(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function i2(e,t,i,a){for(;e.nodeType===1;){var o=i;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Gt])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=Qn(e.nextSibling),e===null)break}return null}function a2(e,t,i){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Qn(e.nextSibling),e===null))return null;return e}function Gc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function r2(e,t){var i=e.ownerDocument;if(e.data!=="$?"||i.readyState==="complete")t();else{var a=function(){t(),i.removeEventListener("DOMContentLoaded",a)};i.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Qn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Yc=null;function vh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}function wh(e,t,i){switch(t=ns(i),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Ro(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);R(e)}var Nn=new Map,jh=new Set;function is(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ti=J.d;J.d={f:o2,r:l2,D:s2,C:d2,L:c2,m:u2,X:f2,S:p2,M:m2};function o2(){var e=Ti.f(),t=Ql();return e||t}function l2(e){var t=ue(e);t!==null&&t.tag===5&&t.type==="form"?_f(t):Ti.r(e)}var gr=typeof document>"u"?null:document;function kh(e,t,i){var a=gr;if(a&&typeof t=="string"&&t){var o=Ze(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof i=="string"&&(o+='[crossorigin="'+i+'"]'),jh.has(o)||(jh.add(o),e={rel:e,crossOrigin:i,href:t},a.querySelector(o)===null&&(t=a.createElement("link"),Kt(t,"link",e),xe(t),a.head.appendChild(t)))}}function s2(e){Ti.D(e),kh("dns-prefetch",e,null)}function d2(e,t){Ti.C(e,t),kh("preconnect",e,t)}function c2(e,t,i){Ti.L(e,t,i);var a=gr;if(a&&e&&t){var o='link[rel="preload"][as="'+Ze(t)+'"]';t==="image"&&i&&i.imageSrcSet?(o+='[imagesrcset="'+Ze(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(o+='[imagesizes="'+Ze(i.imageSizes)+'"]')):o+='[href="'+Ze(e)+'"]';var l=o;switch(t){case"style":l=br(e);break;case"script":l=yr(e)}Nn.has(l)||(e=M({rel:"preload",href:t==="image"&&i&&i.imageSrcSet?void 0:e,as:t},i),Nn.set(l,e),a.querySelector(o)!==null||t==="style"&&a.querySelector(Ao(l))||t==="script"&&a.querySelector(Po(l))||(t=a.createElement("link"),Kt(t,"link",e),xe(t),a.head.appendChild(t)))}}function u2(e,t){Ti.m(e,t);var i=gr;if(i&&e){var a=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+Ze(a)+'"][href="'+Ze(e)+'"]',l=o;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=yr(e)}if(!Nn.has(l)&&(e=M({rel:"modulepreload",href:e},t),Nn.set(l,e),i.querySelector(o)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Po(l)))return}a=i.createElement("link"),Kt(a,"link",e),xe(a),i.head.appendChild(a)}}}function p2(e,t,i){Ti.S(e,t,i);var a=gr;if(a&&e){var o=je(a).hoistableStyles,l=br(e);t=t||"default";var p=o.get(l);if(!p){var m={loading:0,preload:null};if(p=a.querySelector(Ao(l)))m.loading=5;else{e=M({rel:"stylesheet",href:e,"data-precedence":t},i),(i=Nn.get(l))&&Wc(e,i);var j=p=a.createElement("link");xe(j),Kt(j,"link",e),j._p=new Promise(function(U,X){j.onload=U,j.onerror=X}),j.addEventListener("load",function(){m.loading|=1}),j.addEventListener("error",function(){m.loading|=2}),m.loading|=4,as(p,t,a)}p={type:"stylesheet",instance:p,count:1,state:m},o.set(l,p)}}}function f2(e,t){Ti.X(e,t);var i=gr;if(i&&e){var a=je(i).hoistableScripts,o=yr(e),l=a.get(o);l||(l=i.querySelector(Po(o)),l||(e=M({src:e,async:!0},t),(t=Nn.get(o))&&Fc(e,t),l=i.createElement("script"),xe(l),Kt(l,"link",e),i.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(o,l))}}function m2(e,t){Ti.M(e,t);var i=gr;if(i&&e){var a=je(i).hoistableScripts,o=yr(e),l=a.get(o);l||(l=i.querySelector(Po(o)),l||(e=M({src:e,async:!0,type:"module"},t),(t=Nn.get(o))&&Fc(e,t),l=i.createElement("script"),xe(l),Kt(l,"link",e),i.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(o,l))}}function Sh(e,t,i,a){var o=(o=ve.current)?is(o):null;if(!o)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(t=br(i.href),i=je(o).hoistableStyles,a=i.get(t),a||(a={type:"style",instance:null,count:0,state:null},i.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=br(i.href);var l=je(o).hoistableStyles,p=l.get(e);if(p||(o=o.ownerDocument||o,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,p),(l=o.querySelector(Ao(e)))&&!l._p&&(p.instance=l,p.state.loading=5),Nn.has(e)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Nn.set(e,i),l||h2(o,e,i,p.state))),t&&a===null)throw Error(c(528,""));return p}if(t&&a!==null)throw Error(c(529,""));return null;case"script":return t=i.async,i=i.src,typeof i=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=yr(i),i=je(o).hoistableScripts,a=i.get(t),a||(a={type:"script",instance:null,count:0,state:null},i.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function br(e){return'href="'+Ze(e)+'"'}function Ao(e){return'link[rel="stylesheet"]['+e+"]"}function Ch(e){return M({},e,{"data-precedence":e.precedence,precedence:null})}function h2(e,t,i,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Kt(t,"link",i),xe(t),e.head.appendChild(t))}function yr(e){return'[src="'+Ze(e)+'"]'}function Po(e){return"script[async]"+e}function zh(e,t,i){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Ze(i.href)+'"]');if(a)return t.instance=a,xe(a),a;var o=M({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),xe(a),Kt(a,"style",o),as(a,i.precedence,e),t.instance=a;case"stylesheet":o=br(i.href);var l=e.querySelector(Ao(o));if(l)return t.state.loading|=4,t.instance=l,xe(l),l;a=Ch(i),(o=Nn.get(o))&&Wc(a,o),l=(e.ownerDocument||e).createElement("link"),xe(l);var p=l;return p._p=new Promise(function(m,j){p.onload=m,p.onerror=j}),Kt(l,"link",a),t.state.loading|=4,as(l,i.precedence,e),t.instance=l;case"script":return l=yr(i.src),(o=e.querySelector(Po(l)))?(t.instance=o,xe(o),o):(a=i,(o=Nn.get(l))&&(a=M({},i),Fc(a,o)),e=e.ownerDocument||e,o=e.createElement("script"),xe(o),Kt(o,"link",a),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,as(a,i.precedence,e));return t.instance}function as(e,t,i){for(var a=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=a.length?a[a.length-1]:null,l=o,p=0;p<a.length;p++){var m=a[p];if(m.dataset.precedence===t)l=m;else if(l!==o)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=i.nodeType===9?i.head:i,t.insertBefore(e,t.firstChild))}function Wc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Fc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var rs=null;function Lh(e,t,i){if(rs===null){var a=new Map,o=rs=new Map;o.set(i,a)}else o=rs,a=o.get(i),a||(a=new Map,o.set(i,a));if(a.has(e))return a;for(a.set(e,null),i=i.getElementsByTagName(e),o=0;o<i.length;o++){var l=i[o];if(!(l[Gt]||l[ne]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var p=l.getAttribute(t)||"";p=e+p;var m=a.get(p);m?m.push(l):a.set(p,[l])}}return a}function Mh(e,t,i){e=e.ownerDocument||e,e.head.insertBefore(i,t==="title"?e.querySelector("head > title"):null)}function x2(e,t,i){if(i===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Th(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Do=null;function g2(){}function b2(e,t,i){if(Do===null)throw Error(c(475));var a=Do;if(t.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var o=br(i.href),l=e.querySelector(Ao(o));if(l){e=l._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=os.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=l,xe(l);return}l=e.ownerDocument||e,i=Ch(i),(o=Nn.get(o))&&Wc(i,o),l=l.createElement("link"),xe(l);var p=l;p._p=new Promise(function(m,j){p.onload=m,p.onerror=j}),Kt(l,"link",i),t.instance=l}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=os.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function y2(){if(Do===null)throw Error(c(475));var e=Do;return e.stylesheets&&e.count===0&&Vc(e,e.stylesheets),0<e.count?function(t){var i=setTimeout(function(){if(e.stylesheets&&Vc(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(i)}}:null}function os(){if(this.count--,this.count===0){if(this.stylesheets)Vc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ls=null;function Vc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ls=new Map,t.forEach(v2,e),ls=null,os.call(e))}function v2(e,t){if(!(t.state.loading&4)){var i=ls.get(e);if(i)var a=i.get(null);else{i=new Map,ls.set(e,i);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<o.length;l++){var p=o[l];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(i.set(p.dataset.precedence,p),a=p)}a&&i.set(null,a)}o=t.instance,p=o.getAttribute("data-precedence"),l=i.get(p)||a,l===a&&i.set(null,o),i.set(p,o),this.count++,a=os.bind(this),o.addEventListener("load",a),o.addEventListener("error",a),l?l.parentNode.insertBefore(o,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var Eo={$$typeof:z,Provider:null,Consumer:null,_currentValue:ye,_currentValue2:ye,_threadCount:0};function w2(e,t,i,a,o,l,p,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_n(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_n(0),this.hiddenUpdates=_n(null),this.identifierPrefix=a,this.onUncaughtError=o,this.onCaughtError=l,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function Rh(e,t,i,a,o,l,p,m,j,U,X,ie){return e=new w2(e,t,i,p,m,j,U,ie),t=1,l===!0&&(t|=24),l=wn(3,null,null,t),e.current=l,l.stateNode=e,t=Md(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:a,isDehydrated:i,cache:t},Pd(l),e}function Ah(e){return e?(e=Ja,e):Ja}function Ph(e,t,i,a,o,l){o=Ah(o),a.context===null?a.context=o:a.pendingContext=o,a=Oi(t),a.payload={element:i},l=l===void 0?null:l,l!==null&&(a.callback=l),i=qi(e,a,t),i!==null&&(zn(i,e,t),co(i,e,t))}function Dh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function Qc(e,t){Dh(e,t),(e=e.alternate)&&Dh(e,t)}function Eh(e){if(e.tag===13){var t=Ia(e,67108864);t!==null&&zn(t,e,67108864),Qc(e,67108864)}}var ss=!0;function j2(e,t,i,a){var o=F.T;F.T=null;var l=J.p;try{J.p=2,Ic(e,t,i,a)}finally{J.p=l,F.T=o}}function k2(e,t,i,a){var o=F.T;F.T=null;var l=J.p;try{J.p=8,Ic(e,t,i,a)}finally{J.p=l,F.T=o}}function Ic(e,t,i,a){if(ss){var o=Jc(a);if(o===null)Bc(e,t,a,ds,i),Bh(e,a);else if(C2(o,e,t,i,a))a.stopPropagation();else if(Bh(e,a),t&4&&-1<S2.indexOf(e)){for(;o!==null;){var l=ue(o);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var p=It(l.pendingLanes);if(p!==0){var m=l;for(m.pendingLanes|=2,m.entangledLanes|=2;p;){var j=1<<31-wt(p);m.entanglements[1]|=j,p&=~j}ri(l),(ot&6)===0&&(Fl=te()+500,Lo(0))}}break;case 13:m=Ia(l,2),m!==null&&zn(m,l,2),Ql(),Qc(l,2)}if(l=Jc(a),l===null&&Bc(e,t,a,ds,i),l===o)break;o=l}o!==null&&a.stopPropagation()}else Bc(e,t,a,null,i)}}function Jc(e){return e=td(e),Zc(e)}var ds=null;function Zc(e){if(ds=null,e=se(e),e!==null){var t=h(e);if(t===null)e=null;else{var i=t.tag;if(i===13){if(e=w(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ds=e,null}function $h(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ze()){case Le:return 2;case xt:return 8;case Dt:case St:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var Xc=!1,Xi=null,Ki=null,ea=null,$o=new Map,Bo=new Map,ta=[],S2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Bh(e,t){switch(e){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":ea=null;break;case"pointerover":case"pointerout":$o.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(t.pointerId)}}function No(e,t,i,a,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:i,eventSystemFlags:a,nativeEvent:l,targetContainers:[o]},t!==null&&(t=ue(t),t!==null&&Eh(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function C2(e,t,i,a,o){switch(t){case"focusin":return Xi=No(Xi,e,t,i,a,o),!0;case"dragenter":return Ki=No(Ki,e,t,i,a,o),!0;case"mouseover":return ea=No(ea,e,t,i,a,o),!0;case"pointerover":var l=o.pointerId;return $o.set(l,No($o.get(l)||null,e,t,i,a,o)),!0;case"gotpointercapture":return l=o.pointerId,Bo.set(l,No(Bo.get(l)||null,e,t,i,a,o)),!0}return!1}function Nh(e){var t=se(e.target);if(t!==null){var i=h(t);if(i!==null){if(t=i.tag,t===13){if(t=w(i),t!==null){e.blockedOn=t,g(e.priority,function(){if(i.tag===13){var a=Cn();a=Tn(a);var o=Ia(i,a);o!==null&&zn(o,i,a),Qc(i,a)}});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=Jc(e.nativeEvent);if(i===null){i=e.nativeEvent;var a=new i.constructor(i.type,i);ed=a,i.target.dispatchEvent(a),ed=null}else return t=ue(i),t!==null&&Eh(t),e.blockedOn=i,!1;t.shift()}return!0}function Oh(e,t,i){cs(e)&&i.delete(t)}function z2(){Xc=!1,Xi!==null&&cs(Xi)&&(Xi=null),Ki!==null&&cs(Ki)&&(Ki=null),ea!==null&&cs(ea)&&(ea=null),$o.forEach(Oh),Bo.forEach(Oh)}function us(e,t){e.blockedOn===t&&(e.blockedOn=null,Xc||(Xc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,z2)))}var ps=null;function qh(e){ps!==e&&(ps=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ps===e&&(ps=null);for(var t=0;t<e.length;t+=3){var i=e[t],a=e[t+1],o=e[t+2];if(typeof a!="function"){if(Zc(a||i)===null)continue;break}var l=ue(i);l!==null&&(e.splice(t,3),t-=3,Zd(l,{pending:!0,data:o,method:i.method,action:a},a,o))}}))}function Oo(e){function t(j){return us(j,e)}Xi!==null&&us(Xi,e),Ki!==null&&us(Ki,e),ea!==null&&us(ea,e),$o.forEach(t),Bo.forEach(t);for(var i=0;i<ta.length;i++){var a=ta[i];a.blockedOn===e&&(a.blockedOn=null)}for(;0<ta.length&&(i=ta[0],i.blockedOn===null);)Nh(i),i.blockedOn===null&&ta.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(a=0;a<i.length;a+=3){var o=i[a],l=i[a+1],p=o[me]||null;if(typeof l=="function")p||qh(i);else if(p){var m=null;if(l&&l.hasAttribute("formAction")){if(o=l,p=l[me]||null)m=p.formAction;else if(Zc(o)!==null)continue}else m=p.action;typeof m=="function"?i[a+1]=m:(i.splice(a,3),a-=3),qh(i)}}}function Kc(e){this._internalRoot=e}fs.prototype.render=Kc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var i=t.current,a=Cn();Ph(i,a,e,t,null,null)},fs.prototype.unmount=Kc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ph(e.current,2,null,e,null,null),Ql(),t[Be]=null}};function fs(e){this._internalRoot=e}fs.prototype.unstable_scheduleHydration=function(e){if(e){var t=q();e={blockedOn:null,target:e,priority:t};for(var i=0;i<ta.length&&t!==0&&t<ta[i].priority;i++);ta.splice(i,0,e),i===0&&Nh(e)}};var Uh=d.version;if(Uh!=="19.1.0")throw Error(c(527,Uh,"19.1.0"));J.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=v(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var L2={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ms=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ms.isDisabled&&ms.supportsFiber)try{Un=ms.inject(L2),vt=ms}catch{}}return Uo.createRoot=function(e,t){if(!f(e))throw Error(c(299));var i=!1,a="",o=nm,l=im,p=am,m=null;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(m=t.unstable_transitionCallbacks)),t=Rh(e,1,!1,null,null,i,a,o,l,p,m,null),e[Be]=t.current,$c(e),new Kc(t)},Uo.hydrateRoot=function(e,t,i){if(!f(e))throw Error(c(299));var a=!1,o="",l=nm,p=im,m=am,j=null,U=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(l=i.onUncaughtError),i.onCaughtError!==void 0&&(p=i.onCaughtError),i.onRecoverableError!==void 0&&(m=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(j=i.unstable_transitionCallbacks),i.formState!==void 0&&(U=i.formState)),t=Rh(e,1,!0,t,i??null,a,o,l,p,m,j,U),t.context=Ah(null),i=t.current,a=Cn(),a=Tn(a),o=Oi(a),o.callback=null,qi(i,o,a),i=a,t.current.lanes=i,sn(t,i),ri(t),e[Be]=t.current,$c(e),new fs(t)},Uo.version="19.1.0",Uo}var Jh;function N2(){if(Jh)return nu.exports;Jh=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(d){console.error(d)}}return r(),nu.exports=B2(),nu.exports}var O2=N2();const q2=Ax(O2);var Ho={},Zh;function U2(){if(Zh)return Ho;Zh=1,Object.defineProperty(Ho,"__esModule",{value:!0}),Ho.parse=w,Ho.serialize=x;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,d=/^[\u0021-\u003A\u003C-\u007E]*$/,u=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,c=/^[\u0020-\u003A\u003D-\u007E]*$/,f=Object.prototype.toString,h=(()=>{const E=function(){};return E.prototype=Object.create(null),E})();function w(E,W){const $=new h,Q=E.length;if(Q<2)return $;const V=(W==null?void 0:W.decode)||M;let A=0;do{const B=E.indexOf("=",A);if(B===-1)break;const z=E.indexOf(";",A),re=z===-1?Q:z;if(B>re){A=E.lastIndexOf(";",B-1)+1;continue}const C=k(E,A,B),D=v(E,B,C),K=E.slice(C,D);if($[K]===void 0){let ke=k(E,B+1,re),we=v(E,re,ke);const ce=V(E.slice(ke,we));$[K]=ce}A=re+1}while(A<Q);return $}function k(E,W,$){do{const Q=E.charCodeAt(W);if(Q!==32&&Q!==9)return W}while(++W<$);return $}function v(E,W,$){for(;W>$;){const Q=E.charCodeAt(--W);if(Q!==32&&Q!==9)return W+1}return $}function x(E,W,$){const Q=($==null?void 0:$.encode)||encodeURIComponent;if(!r.test(E))throw new TypeError(`argument name is invalid: ${E}`);const V=Q(W);if(!d.test(V))throw new TypeError(`argument val is invalid: ${W}`);let A=E+"="+V;if(!$)return A;if($.maxAge!==void 0){if(!Number.isInteger($.maxAge))throw new TypeError(`option maxAge is invalid: ${$.maxAge}`);A+="; Max-Age="+$.maxAge}if($.domain){if(!u.test($.domain))throw new TypeError(`option domain is invalid: ${$.domain}`);A+="; Domain="+$.domain}if($.path){if(!c.test($.path))throw new TypeError(`option path is invalid: ${$.path}`);A+="; Path="+$.path}if($.expires){if(!O($.expires)||!Number.isFinite($.expires.valueOf()))throw new TypeError(`option expires is invalid: ${$.expires}`);A+="; Expires="+$.expires.toUTCString()}if($.httpOnly&&(A+="; HttpOnly"),$.secure&&(A+="; Secure"),$.partitioned&&(A+="; Partitioned"),$.priority)switch(typeof $.priority=="string"?$.priority.toLowerCase():void 0){case"low":A+="; Priority=Low";break;case"medium":A+="; Priority=Medium";break;case"high":A+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${$.priority}`)}if($.sameSite)switch(typeof $.sameSite=="string"?$.sameSite.toLowerCase():$.sameSite){case!0:case"strict":A+="; SameSite=Strict";break;case"lax":A+="; SameSite=Lax";break;case"none":A+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${$.sameSite}`)}return A}function M(E){if(E.indexOf("%")===-1)return E;try{return decodeURIComponent(E)}catch{return E}}function O(E){return f.call(E)==="[object Date]"}return Ho}U2();var Xh="popstate";function H2(r={}){function d(c,f){let{pathname:h,search:w,hash:k}=c.location;return Wu("",{pathname:h,search:w,hash:k},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function u(c,f){return typeof f=="string"?f:Ko(f)}return G2(d,u,null,r)}function Tt(r,d){if(r===!1||r===null||typeof r>"u")throw new Error(d)}function ci(r,d){if(!r){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function _2(){return Math.random().toString(36).substring(2,10)}function Kh(r,d){return{usr:r.state,key:r.key,idx:d}}function Wu(r,d,u=null,c){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof d=="string"?Gr(d):d,state:u,key:d&&d.key||c||_2()}}function Ko({pathname:r="/",search:d="",hash:u=""}){return d&&d!=="?"&&(r+=d.charAt(0)==="?"?d:"?"+d),u&&u!=="#"&&(r+=u.charAt(0)==="#"?u:"#"+u),r}function Gr(r){let d={};if(r){let u=r.indexOf("#");u>=0&&(d.hash=r.substring(u),r=r.substring(0,u));let c=r.indexOf("?");c>=0&&(d.search=r.substring(c),r=r.substring(0,c)),r&&(d.pathname=r)}return d}function G2(r,d,u,c={}){let{window:f=document.defaultView,v5Compat:h=!1}=c,w=f.history,k="POP",v=null,x=M();x==null&&(x=0,w.replaceState({...w.state,idx:x},""));function M(){return(w.state||{idx:null}).idx}function O(){k="POP";let V=M(),A=V==null?null:V-x;x=V,v&&v({action:k,location:Q.location,delta:A})}function E(V,A){k="PUSH";let B=Wu(Q.location,V,A);x=M()+1;let z=Kh(B,x),re=Q.createHref(B);try{w.pushState(z,"",re)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;f.location.assign(re)}h&&v&&v({action:k,location:Q.location,delta:1})}function W(V,A){k="REPLACE";let B=Wu(Q.location,V,A);x=M();let z=Kh(B,x),re=Q.createHref(B);w.replaceState(z,"",re),h&&v&&v({action:k,location:Q.location,delta:0})}function $(V){return Y2(V)}let Q={get action(){return k},get location(){return r(f,w)},listen(V){if(v)throw new Error("A history only accepts one active listener");return f.addEventListener(Xh,O),v=V,()=>{f.removeEventListener(Xh,O),v=null}},createHref(V){return d(f,V)},createURL:$,encodeLocation(V){let A=$(V);return{pathname:A.pathname,search:A.search,hash:A.hash}},push:E,replace:W,go(V){return w.go(V)}};return Q}function Y2(r,d=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Tt(u,"No window.location.(origin|href) available to create URL");let c=typeof r=="string"?r:Ko(r);return c=c.replace(/ $/,"%20"),!d&&c.startsWith("//")&&(c=u+c),new URL(c,u)}function Px(r,d,u="/"){return W2(r,d,u,!1)}function W2(r,d,u,c){let f=typeof d=="string"?Gr(d):d,h=Pi(f.pathname||"/",u);if(h==null)return null;let w=Dx(r);F2(w);let k=null;for(let v=0;k==null&&v<w.length;++v){let x=ib(h);k=tb(w[v],x,c)}return k}function Dx(r,d=[],u=[],c=""){let f=(h,w,k)=>{let v={relativePath:k===void 0?h.path||"":k,caseSensitive:h.caseSensitive===!0,childrenIndex:w,route:h};v.relativePath.startsWith("/")&&(Tt(v.relativePath.startsWith(c),`Absolute route path "${v.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(c.length));let x=Ai([c,v.relativePath]),M=u.concat(v);h.children&&h.children.length>0&&(Tt(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),Dx(h.children,d,M,x)),!(h.path==null&&!h.index)&&d.push({path:x,score:K2(x,h.index),routesMeta:M})};return r.forEach((h,w)=>{var k;if(h.path===""||!((k=h.path)!=null&&k.includes("?")))f(h,w);else for(let v of Ex(h.path))f(h,w,v)}),d}function Ex(r){let d=r.split("/");if(d.length===0)return[];let[u,...c]=d,f=u.endsWith("?"),h=u.replace(/\?$/,"");if(c.length===0)return f?[h,""]:[h];let w=Ex(c.join("/")),k=[];return k.push(...w.map(v=>v===""?h:[h,v].join("/"))),f&&k.push(...w),k.map(v=>r.startsWith("/")&&v===""?"/":v)}function F2(r){r.sort((d,u)=>d.score!==u.score?u.score-d.score:eb(d.routesMeta.map(c=>c.childrenIndex),u.routesMeta.map(c=>c.childrenIndex)))}var V2=/^:[\w-]+$/,Q2=3,I2=2,J2=1,Z2=10,X2=-2,e0=r=>r==="*";function K2(r,d){let u=r.split("/"),c=u.length;return u.some(e0)&&(c+=X2),d&&(c+=I2),u.filter(f=>!e0(f)).reduce((f,h)=>f+(V2.test(h)?Q2:h===""?J2:Z2),c)}function eb(r,d){return r.length===d.length&&r.slice(0,-1).every((c,f)=>c===d[f])?r[r.length-1]-d[d.length-1]:0}function tb(r,d,u=!1){let{routesMeta:c}=r,f={},h="/",w=[];for(let k=0;k<c.length;++k){let v=c[k],x=k===c.length-1,M=h==="/"?d:d.slice(h.length)||"/",O=Us({path:v.relativePath,caseSensitive:v.caseSensitive,end:x},M),E=v.route;if(!O&&x&&u&&!c[c.length-1].route.index&&(O=Us({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},M)),!O)return null;Object.assign(f,O.params),w.push({params:f,pathname:Ai([h,O.pathname]),pathnameBase:lb(Ai([h,O.pathnameBase])),route:E}),O.pathnameBase!=="/"&&(h=Ai([h,O.pathnameBase]))}return w}function Us(r,d){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[u,c]=nb(r.path,r.caseSensitive,r.end),f=d.match(u);if(!f)return null;let h=f[0],w=h.replace(/(.)\/+$/,"$1"),k=f.slice(1);return{params:c.reduce((x,{paramName:M,isOptional:O},E)=>{if(M==="*"){let $=k[E]||"";w=h.slice(0,h.length-$.length).replace(/(.)\/+$/,"$1")}const W=k[E];return O&&!W?x[M]=void 0:x[M]=(W||"").replace(/%2F/g,"/"),x},{}),pathname:h,pathnameBase:w,pattern:r}}function nb(r,d=!1,u=!0){ci(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let c=[],f="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(w,k,v)=>(c.push({paramName:k,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(c.push({paramName:"*"}),f+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?f+="\\/*$":r!==""&&r!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,d?void 0:"i"),c]}function ib(r){try{return r.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return ci(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`),r}}function Pi(r,d){if(d==="/")return r;if(!r.toLowerCase().startsWith(d.toLowerCase()))return null;let u=d.endsWith("/")?d.length-1:d.length,c=r.charAt(u);return c&&c!=="/"?null:r.slice(u)||"/"}function ab(r,d="/"){let{pathname:u,search:c="",hash:f=""}=typeof r=="string"?Gr(r):r;return{pathname:u?u.startsWith("/")?u:rb(u,d):d,search:sb(c),hash:db(f)}}function rb(r,d){let u=d.replace(/\/+$/,"").split("/");return r.split("/").forEach(f=>{f===".."?u.length>1&&u.pop():f!=="."&&u.push(f)}),u.length>1?u.join("/"):"/"}function ou(r,d,u,c){return`Cannot include a '${r}' character in a manually specified \`to.${d}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ob(r){return r.filter((d,u)=>u===0||d.route.path&&d.route.path.length>0)}function $x(r){let d=ob(r);return d.map((u,c)=>c===d.length-1?u.pathname:u.pathnameBase)}function Bx(r,d,u,c=!1){let f;typeof r=="string"?f=Gr(r):(f={...r},Tt(!f.pathname||!f.pathname.includes("?"),ou("?","pathname","search",f)),Tt(!f.pathname||!f.pathname.includes("#"),ou("#","pathname","hash",f)),Tt(!f.search||!f.search.includes("#"),ou("#","search","hash",f)));let h=r===""||f.pathname==="",w=h?"/":f.pathname,k;if(w==null)k=u;else{let O=d.length-1;if(!c&&w.startsWith("..")){let E=w.split("/");for(;E[0]==="..";)E.shift(),O-=1;f.pathname=E.join("/")}k=O>=0?d[O]:"/"}let v=ab(f,k),x=w&&w!=="/"&&w.endsWith("/"),M=(h||w===".")&&u.endsWith("/");return!v.pathname.endsWith("/")&&(x||M)&&(v.pathname+="/"),v}var Ai=r=>r.join("/").replace(/\/\/+/g,"/"),lb=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),sb=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,db=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function cb(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Nx=["POST","PUT","PATCH","DELETE"];new Set(Nx);var ub=["GET",...Nx];new Set(ub);var Yr=y.createContext(null);Yr.displayName="DataRouter";var Ws=y.createContext(null);Ws.displayName="DataRouterState";var Ox=y.createContext({isTransitioning:!1});Ox.displayName="ViewTransition";var pb=y.createContext(new Map);pb.displayName="Fetchers";var fb=y.createContext(null);fb.displayName="Await";var ui=y.createContext(null);ui.displayName="Navigation";var nl=y.createContext(null);nl.displayName="Location";var Di=y.createContext({outlet:null,matches:[],isDataRoute:!1});Di.displayName="Route";var np=y.createContext(null);np.displayName="RouteError";function mb(r,{relative:d}={}){Tt(il(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:c}=y.useContext(ui),{hash:f,pathname:h,search:w}=al(r,{relative:d}),k=h;return u!=="/"&&(k=h==="/"?u:Ai([u,h])),c.createHref({pathname:k,search:w,hash:f})}function il(){return y.useContext(nl)!=null}function Jn(){return Tt(il(),"useLocation() may be used only in the context of a <Router> component."),y.useContext(nl).location}var qx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ux(r){y.useContext(ui).static||y.useLayoutEffect(r)}function ua(){let{isDataRoute:r}=y.useContext(Di);return r?Lb():hb()}function hb(){Tt(il(),"useNavigate() may be used only in the context of a <Router> component.");let r=y.useContext(Yr),{basename:d,navigator:u}=y.useContext(ui),{matches:c}=y.useContext(Di),{pathname:f}=Jn(),h=JSON.stringify($x(c)),w=y.useRef(!1);return Ux(()=>{w.current=!0}),y.useCallback((v,x={})=>{if(ci(w.current,qx),!w.current)return;if(typeof v=="number"){u.go(v);return}let M=Bx(v,JSON.parse(h),f,x.relative==="path");r==null&&d!=="/"&&(M.pathname=M.pathname==="/"?d:Ai([d,M.pathname])),(x.replace?u.replace:u.push)(M,x.state,x)},[d,u,h,f,r])}y.createContext(null);function al(r,{relative:d}={}){let{matches:u}=y.useContext(Di),{pathname:c}=Jn(),f=JSON.stringify($x(u));return y.useMemo(()=>Bx(r,JSON.parse(f),c,d==="path"),[r,f,c,d])}function xb(r,d){return Hx(r,d)}function Hx(r,d,u,c){var A;Tt(il(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=y.useContext(ui),{matches:h}=y.useContext(Di),w=h[h.length-1],k=w?w.params:{},v=w?w.pathname:"/",x=w?w.pathnameBase:"/",M=w&&w.route;{let B=M&&M.path||"";_x(v,!M||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let O=Jn(),E;if(d){let B=typeof d=="string"?Gr(d):d;Tt(x==="/"||((A=B.pathname)==null?void 0:A.startsWith(x)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${B.pathname}" was given in the \`location\` prop.`),E=B}else E=O;let W=E.pathname||"/",$=W;if(x!=="/"){let B=x.replace(/^\//,"").split("/");$="/"+W.replace(/^\//,"").split("/").slice(B.length).join("/")}let Q=Px(r,{pathname:$});ci(M||Q!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),ci(Q==null||Q[Q.length-1].route.element!==void 0||Q[Q.length-1].route.Component!==void 0||Q[Q.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=wb(Q&&Q.map(B=>Object.assign({},B,{params:Object.assign({},k,B.params),pathname:Ai([x,f.encodeLocation?f.encodeLocation(B.pathname).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?x:Ai([x,f.encodeLocation?f.encodeLocation(B.pathnameBase).pathname:B.pathnameBase])})),h,u,c);return d&&V?y.createElement(nl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},V):V}function gb(){let r=zb(),d=cb(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),u=r instanceof Error?r.stack:null,c="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:c},h={padding:"2px 4px",backgroundColor:c},w=null;return console.error("Error handled by React Router default ErrorBoundary:",r),w=y.createElement(y.Fragment,null,y.createElement("p",null,"💿 Hey developer 👋"),y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",y.createElement("code",{style:h},"ErrorBoundary")," or"," ",y.createElement("code",{style:h},"errorElement")," prop on your route.")),y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},d),u?y.createElement("pre",{style:f},u):null,w)}var bb=y.createElement(gb,null),yb=class extends y.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,d){return d.location!==r.location||d.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:d.error,location:d.location,revalidation:r.revalidation||d.revalidation}}componentDidCatch(r,d){console.error("React Router caught the following error during render",r,d)}render(){return this.state.error!==void 0?y.createElement(Di.Provider,{value:this.props.routeContext},y.createElement(np.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function vb({routeContext:r,match:d,children:u}){let c=y.useContext(Yr);return c&&c.static&&c.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=d.route.id),y.createElement(Di.Provider,{value:r},u)}function wb(r,d=[],u=null,c=null){if(r==null){if(!u)return null;if(u.errors)r=u.matches;else if(d.length===0&&!u.initialized&&u.matches.length>0)r=u.matches;else return null}let f=r,h=u==null?void 0:u.errors;if(h!=null){let v=f.findIndex(x=>x.route.id&&(h==null?void 0:h[x.route.id])!==void 0);Tt(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),f=f.slice(0,Math.min(f.length,v+1))}let w=!1,k=-1;if(u)for(let v=0;v<f.length;v++){let x=f[v];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(k=v),x.route.id){let{loaderData:M,errors:O}=u,E=x.route.loader&&!M.hasOwnProperty(x.route.id)&&(!O||O[x.route.id]===void 0);if(x.route.lazy||E){w=!0,k>=0?f=f.slice(0,k+1):f=[f[0]];break}}}return f.reduceRight((v,x,M)=>{let O,E=!1,W=null,$=null;u&&(O=h&&x.route.id?h[x.route.id]:void 0,W=x.route.errorElement||bb,w&&(k<0&&M===0?(_x("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,$=null):k===M&&(E=!0,$=x.route.hydrateFallbackElement||null)));let Q=d.concat(f.slice(0,M+1)),V=()=>{let A;return O?A=W:E?A=$:x.route.Component?A=y.createElement(x.route.Component,null):x.route.element?A=x.route.element:A=v,y.createElement(vb,{match:x,routeContext:{outlet:v,matches:Q,isDataRoute:u!=null},children:A})};return u&&(x.route.ErrorBoundary||x.route.errorElement||M===0)?y.createElement(yb,{location:u.location,revalidation:u.revalidation,component:W,error:O,children:V(),routeContext:{outlet:null,matches:Q,isDataRoute:!0}}):V()},null)}function ip(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jb(r){let d=y.useContext(Yr);return Tt(d,ip(r)),d}function kb(r){let d=y.useContext(Ws);return Tt(d,ip(r)),d}function Sb(r){let d=y.useContext(Di);return Tt(d,ip(r)),d}function ap(r){let d=Sb(r),u=d.matches[d.matches.length-1];return Tt(u.route.id,`${r} can only be used on routes that contain a unique "id"`),u.route.id}function Cb(){return ap("useRouteId")}function zb(){var c;let r=y.useContext(np),d=kb("useRouteError"),u=ap("useRouteError");return r!==void 0?r:(c=d.errors)==null?void 0:c[u]}function Lb(){let{router:r}=jb("useNavigate"),d=ap("useNavigate"),u=y.useRef(!1);return Ux(()=>{u.current=!0}),y.useCallback(async(f,h={})=>{ci(u.current,qx),u.current&&(typeof f=="number"?r.navigate(f):await r.navigate(f,{fromRouteId:d,...h}))},[r,d])}var t0={};function _x(r,d,u){!d&&!t0[r]&&(t0[r]=!0,ci(!1,u))}y.memo(Mb);function Mb({routes:r,future:d,state:u}){return Hx(r,void 0,u,d)}function li(r){Tt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Tb({basename:r="/",children:d=null,location:u,navigationType:c="POP",navigator:f,static:h=!1}){Tt(!il(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let w=r.replace(/^\/*/,"/"),k=y.useMemo(()=>({basename:w,navigator:f,static:h,future:{}}),[w,f,h]);typeof u=="string"&&(u=Gr(u));let{pathname:v="/",search:x="",hash:M="",state:O=null,key:E="default"}=u,W=y.useMemo(()=>{let $=Pi(v,w);return $==null?null:{location:{pathname:$,search:x,hash:M,state:O,key:E},navigationType:c}},[w,v,x,M,O,E,c]);return ci(W!=null,`<Router basename="${w}"> is not able to match the URL "${v}${x}${M}" because it does not start with the basename, so the <Router> won't render anything.`),W==null?null:y.createElement(ui.Provider,{value:k},y.createElement(nl.Provider,{children:d,value:W}))}function Rb({children:r,location:d}){return xb(Fu(r),d)}function Fu(r,d=[]){let u=[];return y.Children.forEach(r,(c,f)=>{if(!y.isValidElement(c))return;let h=[...d,f];if(c.type===y.Fragment){u.push.apply(u,Fu(c.props.children,h));return}Tt(c.type===li,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Tt(!c.props.index||!c.props.children,"An index route cannot have child routes.");let w={id:c.props.id||h.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(w.children=Fu(c.props.children,h)),u.push(w)}),u}var Ds="get",Es="application/x-www-form-urlencoded";function Fs(r){return r!=null&&typeof r.tagName=="string"}function Ab(r){return Fs(r)&&r.tagName.toLowerCase()==="button"}function Pb(r){return Fs(r)&&r.tagName.toLowerCase()==="form"}function Db(r){return Fs(r)&&r.tagName.toLowerCase()==="input"}function Eb(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function $b(r,d){return r.button===0&&(!d||d==="_self")&&!Eb(r)}var hs=null;function Bb(){if(hs===null)try{new FormData(document.createElement("form"),0),hs=!1}catch{hs=!0}return hs}var Nb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function lu(r){return r!=null&&!Nb.has(r)?(ci(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Es}"`),null):r}function Ob(r,d){let u,c,f,h,w;if(Pb(r)){let k=r.getAttribute("action");c=k?Pi(k,d):null,u=r.getAttribute("method")||Ds,f=lu(r.getAttribute("enctype"))||Es,h=new FormData(r)}else if(Ab(r)||Db(r)&&(r.type==="submit"||r.type==="image")){let k=r.form;if(k==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=r.getAttribute("formaction")||k.getAttribute("action");if(c=v?Pi(v,d):null,u=r.getAttribute("formmethod")||k.getAttribute("method")||Ds,f=lu(r.getAttribute("formenctype"))||lu(k.getAttribute("enctype"))||Es,h=new FormData(k,r),!Bb()){let{name:x,type:M,value:O}=r;if(M==="image"){let E=x?`${x}.`:"";h.append(`${E}x`,"0"),h.append(`${E}y`,"0")}else x&&h.append(x,O)}}else{if(Fs(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Ds,c=null,f=Es,w=r}return h&&f==="text/plain"&&(w=h,h=void 0),{action:c,method:u.toLowerCase(),encType:f,formData:h,body:w}}function rp(r,d){if(r===!1||r===null||typeof r>"u")throw new Error(d)}async function qb(r,d){if(r.id in d)return d[r.id];try{let u=await import(r.module);return d[r.id]=u,u}catch(u){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ub(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Hb(r,d,u){let c=await Promise.all(r.map(async f=>{let h=d.routes[f.route.id];if(h){let w=await qb(h,u);return w.links?w.links():[]}return[]}));return Wb(c.flat(1).filter(Ub).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function n0(r,d,u,c,f,h){let w=(v,x)=>u[x]?v.route.id!==u[x].route.id:!0,k=(v,x)=>{var M;return u[x].pathname!==v.pathname||((M=u[x].route.path)==null?void 0:M.endsWith("*"))&&u[x].params["*"]!==v.params["*"]};return h==="assets"?d.filter((v,x)=>w(v,x)||k(v,x)):h==="data"?d.filter((v,x)=>{var O;let M=c.routes[v.route.id];if(!M||!M.hasLoader)return!1;if(w(v,x)||k(v,x))return!0;if(v.route.shouldRevalidate){let E=v.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((O=u[0])==null?void 0:O.params)||{},nextUrl:new URL(r,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function _b(r,d,{includeHydrateFallback:u}={}){return Gb(r.map(c=>{let f=d.routes[c.route.id];if(!f)return[];let h=[f.module];return f.clientActionModule&&(h=h.concat(f.clientActionModule)),f.clientLoaderModule&&(h=h.concat(f.clientLoaderModule)),u&&f.hydrateFallbackModule&&(h=h.concat(f.hydrateFallbackModule)),f.imports&&(h=h.concat(f.imports)),h}).flat(1))}function Gb(r){return[...new Set(r)]}function Yb(r){let d={},u=Object.keys(r).sort();for(let c of u)d[c]=r[c];return d}function Wb(r,d){let u=new Set;return new Set(d),r.reduce((c,f)=>{let h=JSON.stringify(Yb(f));return u.has(h)||(u.add(h),c.push({key:h,link:f})),c},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Fb=new Set([100,101,204,205]);function Vb(r,d){let u=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return u.pathname==="/"?u.pathname="_root.data":d&&Pi(u.pathname,d)==="/"?u.pathname=`${d.replace(/\/$/,"")}/_root.data`:u.pathname=`${u.pathname.replace(/\/$/,"")}.data`,u}function Gx(){let r=y.useContext(Yr);return rp(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Qb(){let r=y.useContext(Ws);return rp(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var op=y.createContext(void 0);op.displayName="FrameworkContext";function Yx(){let r=y.useContext(op);return rp(r,"You must render this element inside a <HydratedRouter> element"),r}function Ib(r,d){let u=y.useContext(op),[c,f]=y.useState(!1),[h,w]=y.useState(!1),{onFocus:k,onBlur:v,onMouseEnter:x,onMouseLeave:M,onTouchStart:O}=d,E=y.useRef(null);y.useEffect(()=>{if(r==="render"&&w(!0),r==="viewport"){let Q=A=>{A.forEach(B=>{w(B.isIntersecting)})},V=new IntersectionObserver(Q,{threshold:.5});return E.current&&V.observe(E.current),()=>{V.disconnect()}}},[r]),y.useEffect(()=>{if(c){let Q=setTimeout(()=>{w(!0)},100);return()=>{clearTimeout(Q)}}},[c]);let W=()=>{f(!0)},$=()=>{f(!1),w(!1)};return u?r!=="intent"?[h,E,{}]:[h,E,{onFocus:_o(k,W),onBlur:_o(v,$),onMouseEnter:_o(x,W),onMouseLeave:_o(M,$),onTouchStart:_o(O,W)}]:[!1,E,{}]}function _o(r,d){return u=>{r&&r(u),u.defaultPrevented||d(u)}}function Jb({page:r,...d}){let{router:u}=Gx(),c=y.useMemo(()=>Px(u.routes,r,u.basename),[u.routes,r,u.basename]);return c?y.createElement(Xb,{page:r,matches:c,...d}):null}function Zb(r){let{manifest:d,routeModules:u}=Yx(),[c,f]=y.useState([]);return y.useEffect(()=>{let h=!1;return Hb(r,d,u).then(w=>{h||f(w)}),()=>{h=!0}},[r,d,u]),c}function Xb({page:r,matches:d,...u}){let c=Jn(),{manifest:f,routeModules:h}=Yx(),{basename:w}=Gx(),{loaderData:k,matches:v}=Qb(),x=y.useMemo(()=>n0(r,d,v,f,c,"data"),[r,d,v,f,c]),M=y.useMemo(()=>n0(r,d,v,f,c,"assets"),[r,d,v,f,c]),O=y.useMemo(()=>{if(r===c.pathname+c.search+c.hash)return[];let $=new Set,Q=!1;if(d.forEach(A=>{var z;let B=f.routes[A.route.id];!B||!B.hasLoader||(!x.some(re=>re.route.id===A.route.id)&&A.route.id in k&&((z=h[A.route.id])!=null&&z.shouldRevalidate)||B.hasClientLoader?Q=!0:$.add(A.route.id))}),$.size===0)return[];let V=Vb(r,w);return Q&&$.size>0&&V.searchParams.set("_routes",d.filter(A=>$.has(A.route.id)).map(A=>A.route.id).join(",")),[V.pathname+V.search]},[w,k,c,f,x,d,r,h]),E=y.useMemo(()=>_b(M,f),[M,f]),W=Zb(M);return y.createElement(y.Fragment,null,O.map($=>y.createElement("link",{key:$,rel:"prefetch",as:"fetch",href:$,...u})),E.map($=>y.createElement("link",{key:$,rel:"modulepreload",href:$,...u})),W.map(({key:$,link:Q})=>y.createElement("link",{key:$,...Q})))}function Kb(...r){return d=>{r.forEach(u=>{typeof u=="function"?u(d):u!=null&&(u.current=d)})}}var Wx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Wx&&(window.__reactRouterVersion="7.6.2")}catch{}function ey({basename:r,children:d,window:u}){let c=y.useRef();c.current==null&&(c.current=H2({window:u,v5Compat:!0}));let f=c.current,[h,w]=y.useState({action:f.action,location:f.location}),k=y.useCallback(v=>{y.startTransition(()=>w(v))},[w]);return y.useLayoutEffect(()=>f.listen(k),[f,k]),y.createElement(Tb,{basename:r,children:d,location:h.location,navigationType:h.action,navigator:f})}var Fx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,si=y.forwardRef(function({onClick:d,discover:u="render",prefetch:c="none",relative:f,reloadDocument:h,replace:w,state:k,target:v,to:x,preventScrollReset:M,viewTransition:O,...E},W){let{basename:$}=y.useContext(ui),Q=typeof x=="string"&&Fx.test(x),V,A=!1;if(typeof x=="string"&&Q&&(V=x,Wx))try{let we=new URL(window.location.href),ce=x.startsWith("//")?new URL(we.protocol+x):new URL(x),le=Pi(ce.pathname,$);ce.origin===we.origin&&le!=null?x=le+ce.search+ce.hash:A=!0}catch{ci(!1,`<Link to="${x}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let B=mb(x,{relative:f}),[z,re,C]=Ib(c,E),D=ay(x,{replace:w,state:k,target:v,preventScrollReset:M,relative:f,viewTransition:O});function K(we){d&&d(we),we.defaultPrevented||D(we)}let ke=y.createElement("a",{...E,...C,href:V||B,onClick:A||h?d:K,ref:Kb(W,re),target:v,"data-discover":!Q&&u==="render"?"true":void 0});return z&&!Q?y.createElement(y.Fragment,null,ke,y.createElement(Jb,{page:B})):ke});si.displayName="Link";var ty=y.forwardRef(function({"aria-current":d="page",caseSensitive:u=!1,className:c="",end:f=!1,style:h,to:w,viewTransition:k,children:v,...x},M){let O=al(w,{relative:x.relative}),E=Jn(),W=y.useContext(Ws),{navigator:$,basename:Q}=y.useContext(ui),V=W!=null&&dy(O)&&k===!0,A=$.encodeLocation?$.encodeLocation(O).pathname:O.pathname,B=E.pathname,z=W&&W.navigation&&W.navigation.location?W.navigation.location.pathname:null;u||(B=B.toLowerCase(),z=z?z.toLowerCase():null,A=A.toLowerCase()),z&&Q&&(z=Pi(z,Q)||z);const re=A!=="/"&&A.endsWith("/")?A.length-1:A.length;let C=B===A||!f&&B.startsWith(A)&&B.charAt(re)==="/",D=z!=null&&(z===A||!f&&z.startsWith(A)&&z.charAt(A.length)==="/"),K={isActive:C,isPending:D,isTransitioning:V},ke=C?d:void 0,we;typeof c=="function"?we=c(K):we=[c,C?"active":null,D?"pending":null,V?"transitioning":null].filter(Boolean).join(" ");let ce=typeof h=="function"?h(K):h;return y.createElement(si,{...x,"aria-current":ke,className:we,ref:M,style:ce,to:w,viewTransition:k},typeof v=="function"?v(K):v)});ty.displayName="NavLink";var ny=y.forwardRef(({discover:r="render",fetcherKey:d,navigate:u,reloadDocument:c,replace:f,state:h,method:w=Ds,action:k,onSubmit:v,relative:x,preventScrollReset:M,viewTransition:O,...E},W)=>{let $=ly(),Q=sy(k,{relative:x}),V=w.toLowerCase()==="get"?"get":"post",A=typeof k=="string"&&Fx.test(k),B=z=>{if(v&&v(z),z.defaultPrevented)return;z.preventDefault();let re=z.nativeEvent.submitter,C=(re==null?void 0:re.getAttribute("formmethod"))||w;$(re||z.currentTarget,{fetcherKey:d,method:C,navigate:u,replace:f,state:h,relative:x,preventScrollReset:M,viewTransition:O})};return y.createElement("form",{ref:W,method:V,action:Q,onSubmit:c?v:B,...E,"data-discover":!A&&r==="render"?"true":void 0})});ny.displayName="Form";function iy(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vx(r){let d=y.useContext(Yr);return Tt(d,iy(r)),d}function ay(r,{target:d,replace:u,state:c,preventScrollReset:f,relative:h,viewTransition:w}={}){let k=ua(),v=Jn(),x=al(r,{relative:h});return y.useCallback(M=>{if($b(M,d)){M.preventDefault();let O=u!==void 0?u:Ko(v)===Ko(x);k(r,{replace:O,state:c,preventScrollReset:f,relative:h,viewTransition:w})}},[v,k,x,u,c,d,r,f,h,w])}var ry=0,oy=()=>`__${String(++ry)}__`;function ly(){let{router:r}=Vx("useSubmit"),{basename:d}=y.useContext(ui),u=Cb();return y.useCallback(async(c,f={})=>{let{action:h,method:w,encType:k,formData:v,body:x}=Ob(c,d);if(f.navigate===!1){let M=f.fetcherKey||oy();await r.fetch(M,u,f.action||h,{preventScrollReset:f.preventScrollReset,formData:v,body:x,formMethod:f.method||w,formEncType:f.encType||k,flushSync:f.flushSync})}else await r.navigate(f.action||h,{preventScrollReset:f.preventScrollReset,formData:v,body:x,formMethod:f.method||w,formEncType:f.encType||k,replace:f.replace,state:f.state,fromRouteId:u,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,d,u])}function sy(r,{relative:d}={}){let{basename:u}=y.useContext(ui),c=y.useContext(Di);Tt(c,"useFormAction must be used inside a RouteContext");let[f]=c.matches.slice(-1),h={...al(r||".",{relative:d})},w=Jn();if(r==null){h.search=w.search;let k=new URLSearchParams(h.search),v=k.getAll("index");if(v.some(M=>M==="")){k.delete("index"),v.filter(O=>O).forEach(O=>k.append("index",O));let M=k.toString();h.search=M?`?${M}`:""}}return(!r||r===".")&&f.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(h.pathname=h.pathname==="/"?u:Ai([u,h.pathname])),Ko(h)}function dy(r,d={}){let u=y.useContext(Ox);Tt(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Vx("useViewTransitionState"),f=al(r,{relative:d.relative});if(!u.isTransitioning)return!1;let h=Pi(u.currentLocation.pathname,c)||u.currentLocation.pathname,w=Pi(u.nextLocation.pathname,c)||u.nextLocation.pathname;return Us(f.pathname,w)!=null||Us(f.pathname,h)!=null}[...Fb];var gn=function(){return gn=Object.assign||function(d){for(var u,c=1,f=arguments.length;c<f;c++){u=arguments[c];for(var h in u)Object.prototype.hasOwnProperty.call(u,h)&&(d[h]=u[h])}return d},gn.apply(this,arguments)};function Hs(r,d,u){if(u||arguments.length===2)for(var c=0,f=d.length,h;c<f;c++)(h||!(c in d))&&(h||(h=Array.prototype.slice.call(d,0,c)),h[c]=d[c]);return r.concat(h||Array.prototype.slice.call(d))}var yt="-ms-",Xo="-moz-",tt="-webkit-",Qx="comm",Vs="rule",lp="decl",cy="@import",Ix="@keyframes",uy="@layer",Jx=Math.abs,sp=String.fromCharCode,Vu=Object.assign;function py(r,d){return Qt(r,0)^45?(((d<<2^Qt(r,0))<<2^Qt(r,1))<<2^Qt(r,2))<<2^Qt(r,3):0}function Zx(r){return r.trim()}function Ri(r,d){return(r=d.exec(r))?r[0]:r}function Oe(r,d,u){return r.replace(d,u)}function $s(r,d,u){return r.indexOf(d,u)}function Qt(r,d){return r.charCodeAt(d)|0}function Or(r,d,u){return r.slice(d,u)}function di(r){return r.length}function Xx(r){return r.length}function Zo(r,d){return d.push(r),r}function fy(r,d){return r.map(d).join("")}function i0(r,d){return r.filter(function(u){return!Ri(u,d)})}var Qs=1,qr=1,Kx=0,On=0,Ot=0,Wr="";function Is(r,d,u,c,f,h,w,k){return{value:r,root:d,parent:u,type:c,props:f,children:h,line:Qs,column:qr,length:w,return:"",siblings:k}}function ca(r,d){return Vu(Is("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},d)}function vr(r){for(;r.root;)r=ca(r.root,{children:[r]});Zo(r,r.siblings)}function my(){return Ot}function hy(){return Ot=On>0?Qt(Wr,--On):0,qr--,Ot===10&&(qr=1,Qs--),Ot}function In(){return Ot=On<Kx?Qt(Wr,On++):0,qr++,Ot===10&&(qr=1,Qs++),Ot}function Ua(){return Qt(Wr,On)}function Bs(){return On}function Js(r,d){return Or(Wr,r,d)}function Qu(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function xy(r){return Qs=qr=1,Kx=di(Wr=r),On=0,[]}function gy(r){return Wr="",r}function su(r){return Zx(Js(On-1,Iu(r===91?r+2:r===40?r+1:r)))}function by(r){for(;(Ot=Ua())&&Ot<33;)In();return Qu(r)>2||Qu(Ot)>3?"":" "}function yy(r,d){for(;--d&&In()&&!(Ot<48||Ot>102||Ot>57&&Ot<65||Ot>70&&Ot<97););return Js(r,Bs()+(d<6&&Ua()==32&&In()==32))}function Iu(r){for(;In();)switch(Ot){case r:return On;case 34:case 39:r!==34&&r!==39&&Iu(Ot);break;case 40:r===41&&Iu(r);break;case 92:In();break}return On}function vy(r,d){for(;In()&&r+Ot!==57;)if(r+Ot===84&&Ua()===47)break;return"/*"+Js(d,On-1)+"*"+sp(r===47?r:In())}function wy(r){for(;!Qu(Ua());)In();return Js(r,On)}function jy(r){return gy(Ns("",null,null,null,[""],r=xy(r),0,[0],r))}function Ns(r,d,u,c,f,h,w,k,v){for(var x=0,M=0,O=w,E=0,W=0,$=0,Q=1,V=1,A=1,B=0,z="",re=f,C=h,D=c,K=z;V;)switch($=B,B=In()){case 40:if($!=108&&Qt(K,O-1)==58){$s(K+=Oe(su(B),"&","&\f"),"&\f",Jx(x?k[x-1]:0))!=-1&&(A=-1);break}case 34:case 39:case 91:K+=su(B);break;case 9:case 10:case 13:case 32:K+=by($);break;case 92:K+=yy(Bs()-1,7);continue;case 47:switch(Ua()){case 42:case 47:Zo(ky(vy(In(),Bs()),d,u,v),v);break;default:K+="/"}break;case 123*Q:k[x++]=di(K)*A;case 125*Q:case 59:case 0:switch(B){case 0:case 125:V=0;case 59+M:A==-1&&(K=Oe(K,/\f/g,"")),W>0&&di(K)-O&&Zo(W>32?r0(K+";",c,u,O-1,v):r0(Oe(K," ","")+";",c,u,O-2,v),v);break;case 59:K+=";";default:if(Zo(D=a0(K,d,u,x,M,f,k,z,re=[],C=[],O,h),h),B===123)if(M===0)Ns(K,d,D,D,re,h,O,k,C);else switch(E===99&&Qt(K,3)===110?100:E){case 100:case 108:case 109:case 115:Ns(r,D,D,c&&Zo(a0(r,D,D,0,0,f,k,z,f,re=[],O,C),C),f,C,O,k,c?re:C);break;default:Ns(K,D,D,D,[""],C,0,k,C)}}x=M=W=0,Q=A=1,z=K="",O=w;break;case 58:O=1+di(K),W=$;default:if(Q<1){if(B==123)--Q;else if(B==125&&Q++==0&&hy()==125)continue}switch(K+=sp(B),B*Q){case 38:A=M>0?1:(K+="\f",-1);break;case 44:k[x++]=(di(K)-1)*A,A=1;break;case 64:Ua()===45&&(K+=su(In())),E=Ua(),M=O=di(z=K+=wy(Bs())),B++;break;case 45:$===45&&di(K)==2&&(Q=0)}}return h}function a0(r,d,u,c,f,h,w,k,v,x,M,O){for(var E=f-1,W=f===0?h:[""],$=Xx(W),Q=0,V=0,A=0;Q<c;++Q)for(var B=0,z=Or(r,E+1,E=Jx(V=w[Q])),re=r;B<$;++B)(re=Zx(V>0?W[B]+" "+z:Oe(z,/&\f/g,W[B])))&&(v[A++]=re);return Is(r,d,u,f===0?Vs:k,v,x,M,O)}function ky(r,d,u,c){return Is(r,d,u,Qx,sp(my()),Or(r,2,-2),0,c)}function r0(r,d,u,c,f){return Is(r,d,u,lp,Or(r,0,c),Or(r,c+1,-1),c,f)}function eg(r,d,u){switch(py(r,d)){case 5103:return tt+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return tt+r+r;case 4789:return Xo+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return tt+r+Xo+r+yt+r+r;case 5936:switch(Qt(r,d+11)){case 114:return tt+r+yt+Oe(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return tt+r+yt+Oe(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return tt+r+yt+Oe(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return tt+r+yt+r+r;case 6165:return tt+r+yt+"flex-"+r+r;case 5187:return tt+r+Oe(r,/(\w+).+(:[^]+)/,tt+"box-$1$2"+yt+"flex-$1$2")+r;case 5443:return tt+r+yt+"flex-item-"+Oe(r,/flex-|-self/g,"")+(Ri(r,/flex-|baseline/)?"":yt+"grid-row-"+Oe(r,/flex-|-self/g,""))+r;case 4675:return tt+r+yt+"flex-line-pack"+Oe(r,/align-content|flex-|-self/g,"")+r;case 5548:return tt+r+yt+Oe(r,"shrink","negative")+r;case 5292:return tt+r+yt+Oe(r,"basis","preferred-size")+r;case 6060:return tt+"box-"+Oe(r,"-grow","")+tt+r+yt+Oe(r,"grow","positive")+r;case 4554:return tt+Oe(r,/([^-])(transform)/g,"$1"+tt+"$2")+r;case 6187:return Oe(Oe(Oe(r,/(zoom-|grab)/,tt+"$1"),/(image-set)/,tt+"$1"),r,"")+r;case 5495:case 3959:return Oe(r,/(image-set\([^]*)/,tt+"$1$`$1");case 4968:return Oe(Oe(r,/(.+:)(flex-)?(.*)/,tt+"box-pack:$3"+yt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+tt+r+r;case 4200:if(!Ri(r,/flex-|baseline/))return yt+"grid-column-align"+Or(r,d)+r;break;case 2592:case 3360:return yt+Oe(r,"template-","")+r;case 4384:case 3616:return u&&u.some(function(c,f){return d=f,Ri(c.props,/grid-\w+-end/)})?~$s(r+(u=u[d].value),"span",0)?r:yt+Oe(r,"-start","")+r+yt+"grid-row-span:"+(~$s(u,"span",0)?Ri(u,/\d+/):+Ri(u,/\d+/)-+Ri(r,/\d+/))+";":yt+Oe(r,"-start","")+r;case 4896:case 4128:return u&&u.some(function(c){return Ri(c.props,/grid-\w+-start/)})?r:yt+Oe(Oe(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return Oe(r,/(.+)-inline(.+)/,tt+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(di(r)-1-d>6)switch(Qt(r,d+1)){case 109:if(Qt(r,d+4)!==45)break;case 102:return Oe(r,/(.+:)(.+)-([^]+)/,"$1"+tt+"$2-$3$1"+Xo+(Qt(r,d+3)==108?"$3":"$2-$3"))+r;case 115:return~$s(r,"stretch",0)?eg(Oe(r,"stretch","fill-available"),d,u)+r:r}break;case 5152:case 5920:return Oe(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,f,h,w,k,v,x){return yt+f+":"+h+x+(w?yt+f+"-span:"+(k?v:+v-+h)+x:"")+r});case 4949:if(Qt(r,d+6)===121)return Oe(r,":",":"+tt)+r;break;case 6444:switch(Qt(r,Qt(r,14)===45?18:11)){case 120:return Oe(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+tt+(Qt(r,14)===45?"inline-":"")+"box$3$1"+tt+"$2$3$1"+yt+"$2box$3")+r;case 100:return Oe(r,":",":"+yt)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Oe(r,"scroll-","scroll-snap-")+r}return r}function _s(r,d){for(var u="",c=0;c<r.length;c++)u+=d(r[c],c,r,d)||"";return u}function Sy(r,d,u,c){switch(r.type){case uy:if(r.children.length)break;case cy:case lp:return r.return=r.return||r.value;case Qx:return"";case Ix:return r.return=r.value+"{"+_s(r.children,c)+"}";case Vs:if(!di(r.value=r.props.join(",")))return""}return di(u=_s(r.children,c))?r.return=r.value+"{"+u+"}":""}function Cy(r){var d=Xx(r);return function(u,c,f,h){for(var w="",k=0;k<d;k++)w+=r[k](u,c,f,h)||"";return w}}function zy(r){return function(d){d.root||(d=d.return)&&r(d)}}function Ly(r,d,u,c){if(r.length>-1&&!r.return)switch(r.type){case lp:r.return=eg(r.value,r.length,u);return;case Ix:return _s([ca(r,{value:Oe(r.value,"@","@"+tt)})],c);case Vs:if(r.length)return fy(u=r.props,function(f){switch(Ri(f,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":vr(ca(r,{props:[Oe(f,/:(read-\w+)/,":"+Xo+"$1")]})),vr(ca(r,{props:[f]})),Vu(r,{props:i0(u,c)});break;case"::placeholder":vr(ca(r,{props:[Oe(f,/:(plac\w+)/,":"+tt+"input-$1")]})),vr(ca(r,{props:[Oe(f,/:(plac\w+)/,":"+Xo+"$1")]})),vr(ca(r,{props:[Oe(f,/:(plac\w+)/,yt+"input-$1")]})),vr(ca(r,{props:[f]})),Vu(r,{props:i0(u,c)});break}return""})}}var My={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ln={},Ur=typeof process<"u"&&Ln!==void 0&&(Ln.REACT_APP_SC_ATTR||Ln.SC_ATTR)||"data-styled",tg="active",ng="data-styled-version",Zs="6.1.19",dp=`/*!sc*/
`,Gs=typeof window<"u"&&typeof document<"u",Ty=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ln!==void 0&&Ln.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ln.REACT_APP_SC_DISABLE_SPEEDY!==""?Ln.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ln.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ln!==void 0&&Ln.SC_DISABLE_SPEEDY!==void 0&&Ln.SC_DISABLE_SPEEDY!==""&&Ln.SC_DISABLE_SPEEDY!=="false"&&Ln.SC_DISABLE_SPEEDY),Xs=Object.freeze([]),Hr=Object.freeze({});function Ry(r,d,u){return u===void 0&&(u=Hr),r.theme!==u.theme&&r.theme||d||u.theme}var ig=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ay=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Py=/(^-|-$)/g;function o0(r){return r.replace(Ay,"-").replace(Py,"")}var Dy=/(a)(d)/gi,xs=52,l0=function(r){return String.fromCharCode(r+(r>25?39:97))};function Ju(r){var d,u="";for(d=Math.abs(r);d>xs;d=d/xs|0)u=l0(d%xs)+u;return(l0(d%xs)+u).replace(Dy,"$1-$2")}var du,ag=5381,Br=function(r,d){for(var u=d.length;u;)r=33*r^d.charCodeAt(--u);return r},rg=function(r){return Br(ag,r)};function Ey(r){return Ju(rg(r)>>>0)}function $y(r){return r.displayName||r.name||"Component"}function cu(r){return typeof r=="string"&&!0}var og=typeof Symbol=="function"&&Symbol.for,lg=og?Symbol.for("react.memo"):60115,By=og?Symbol.for("react.forward_ref"):60112,Ny={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Oy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},sg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},qy=((du={})[By]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},du[lg]=sg,du);function s0(r){return("type"in(d=r)&&d.type.$$typeof)===lg?sg:"$$typeof"in r?qy[r.$$typeof]:Ny;var d}var Uy=Object.defineProperty,Hy=Object.getOwnPropertyNames,d0=Object.getOwnPropertySymbols,_y=Object.getOwnPropertyDescriptor,Gy=Object.getPrototypeOf,c0=Object.prototype;function dg(r,d,u){if(typeof d!="string"){if(c0){var c=Gy(d);c&&c!==c0&&dg(r,c,u)}var f=Hy(d);d0&&(f=f.concat(d0(d)));for(var h=s0(r),w=s0(d),k=0;k<f.length;++k){var v=f[k];if(!(v in Oy||u&&u[v]||w&&v in w||h&&v in h)){var x=_y(d,v);try{Uy(r,v,x)}catch{}}}}return r}function _r(r){return typeof r=="function"}function cp(r){return typeof r=="object"&&"styledComponentId"in r}function qa(r,d){return r&&d?"".concat(r," ").concat(d):r||d||""}function u0(r,d){if(r.length===0)return"";for(var u=r[0],c=1;c<r.length;c++)u+=r[c];return u}function el(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function Zu(r,d,u){if(u===void 0&&(u=!1),!u&&!el(r)&&!Array.isArray(r))return d;if(Array.isArray(d))for(var c=0;c<d.length;c++)r[c]=Zu(r[c],d[c]);else if(el(d))for(var c in d)r[c]=Zu(r[c],d[c]);return r}function up(r,d){Object.defineProperty(r,"toString",{value:d})}function rl(r){for(var d=[],u=1;u<arguments.length;u++)d[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r," for more information.").concat(d.length>0?" Args: ".concat(d.join(", ")):""))}var Yy=function(){function r(d){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=d}return r.prototype.indexOfGroup=function(d){for(var u=0,c=0;c<d;c++)u+=this.groupSizes[c];return u},r.prototype.insertRules=function(d,u){if(d>=this.groupSizes.length){for(var c=this.groupSizes,f=c.length,h=f;d>=h;)if((h<<=1)<0)throw rl(16,"".concat(d));this.groupSizes=new Uint32Array(h),this.groupSizes.set(c),this.length=h;for(var w=f;w<h;w++)this.groupSizes[w]=0}for(var k=this.indexOfGroup(d+1),v=(w=0,u.length);w<v;w++)this.tag.insertRule(k,u[w])&&(this.groupSizes[d]++,k++)},r.prototype.clearGroup=function(d){if(d<this.length){var u=this.groupSizes[d],c=this.indexOfGroup(d),f=c+u;this.groupSizes[d]=0;for(var h=c;h<f;h++)this.tag.deleteRule(c)}},r.prototype.getGroup=function(d){var u="";if(d>=this.length||this.groupSizes[d]===0)return u;for(var c=this.groupSizes[d],f=this.indexOfGroup(d),h=f+c,w=f;w<h;w++)u+="".concat(this.tag.getRule(w)).concat(dp);return u},r}(),Os=new Map,Ys=new Map,qs=1,gs=function(r){if(Os.has(r))return Os.get(r);for(;Ys.has(qs);)qs++;var d=qs++;return Os.set(r,d),Ys.set(d,r),d},Wy=function(r,d){qs=d+1,Os.set(r,d),Ys.set(d,r)},Fy="style[".concat(Ur,"][").concat(ng,'="').concat(Zs,'"]'),Vy=new RegExp("^".concat(Ur,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Qy=function(r,d,u){for(var c,f=u.split(","),h=0,w=f.length;h<w;h++)(c=f[h])&&r.registerName(d,c)},Iy=function(r,d){for(var u,c=((u=d.textContent)!==null&&u!==void 0?u:"").split(dp),f=[],h=0,w=c.length;h<w;h++){var k=c[h].trim();if(k){var v=k.match(Vy);if(v){var x=0|parseInt(v[1],10),M=v[2];x!==0&&(Wy(M,x),Qy(r,M,v[3]),r.getTag().insertRules(x,f)),f.length=0}else f.push(k)}}},p0=function(r){for(var d=document.querySelectorAll(Fy),u=0,c=d.length;u<c;u++){var f=d[u];f&&f.getAttribute(Ur)!==tg&&(Iy(r,f),f.parentNode&&f.parentNode.removeChild(f))}};function Jy(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var cg=function(r){var d=document.head,u=r||d,c=document.createElement("style"),f=function(k){var v=Array.from(k.querySelectorAll("style[".concat(Ur,"]")));return v[v.length-1]}(u),h=f!==void 0?f.nextSibling:null;c.setAttribute(Ur,tg),c.setAttribute(ng,Zs);var w=Jy();return w&&c.setAttribute("nonce",w),u.insertBefore(c,h),c},Zy=function(){function r(d){this.element=cg(d),this.element.appendChild(document.createTextNode("")),this.sheet=function(u){if(u.sheet)return u.sheet;for(var c=document.styleSheets,f=0,h=c.length;f<h;f++){var w=c[f];if(w.ownerNode===u)return w}throw rl(17)}(this.element),this.length=0}return r.prototype.insertRule=function(d,u){try{return this.sheet.insertRule(u,d),this.length++,!0}catch{return!1}},r.prototype.deleteRule=function(d){this.sheet.deleteRule(d),this.length--},r.prototype.getRule=function(d){var u=this.sheet.cssRules[d];return u&&u.cssText?u.cssText:""},r}(),Xy=function(){function r(d){this.element=cg(d),this.nodes=this.element.childNodes,this.length=0}return r.prototype.insertRule=function(d,u){if(d<=this.length&&d>=0){var c=document.createTextNode(u);return this.element.insertBefore(c,this.nodes[d]||null),this.length++,!0}return!1},r.prototype.deleteRule=function(d){this.element.removeChild(this.nodes[d]),this.length--},r.prototype.getRule=function(d){return d<this.length?this.nodes[d].textContent:""},r}(),Ky=function(){function r(d){this.rules=[],this.length=0}return r.prototype.insertRule=function(d,u){return d<=this.length&&(this.rules.splice(d,0,u),this.length++,!0)},r.prototype.deleteRule=function(d){this.rules.splice(d,1),this.length--},r.prototype.getRule=function(d){return d<this.length?this.rules[d]:""},r}(),f0=Gs,ev={isServer:!Gs,useCSSOMInjection:!Ty},ug=function(){function r(d,u,c){d===void 0&&(d=Hr),u===void 0&&(u={});var f=this;this.options=gn(gn({},ev),d),this.gs=u,this.names=new Map(c),this.server=!!d.isServer,!this.server&&Gs&&f0&&(f0=!1,p0(this)),up(this,function(){return function(h){for(var w=h.getTag(),k=w.length,v="",x=function(O){var E=function(A){return Ys.get(A)}(O);if(E===void 0)return"continue";var W=h.names.get(E),$=w.getGroup(O);if(W===void 0||!W.size||$.length===0)return"continue";var Q="".concat(Ur,".g").concat(O,'[id="').concat(E,'"]'),V="";W!==void 0&&W.forEach(function(A){A.length>0&&(V+="".concat(A,","))}),v+="".concat($).concat(Q,'{content:"').concat(V,'"}').concat(dp)},M=0;M<k;M++)x(M);return v}(f)})}return r.registerId=function(d){return gs(d)},r.prototype.rehydrate=function(){!this.server&&Gs&&p0(this)},r.prototype.reconstructWithOptions=function(d,u){return u===void 0&&(u=!0),new r(gn(gn({},this.options),d),this.gs,u&&this.names||void 0)},r.prototype.allocateGSInstance=function(d){return this.gs[d]=(this.gs[d]||0)+1},r.prototype.getTag=function(){return this.tag||(this.tag=(d=function(u){var c=u.useCSSOMInjection,f=u.target;return u.isServer?new Ky(f):c?new Zy(f):new Xy(f)}(this.options),new Yy(d)));var d},r.prototype.hasNameForId=function(d,u){return this.names.has(d)&&this.names.get(d).has(u)},r.prototype.registerName=function(d,u){if(gs(d),this.names.has(d))this.names.get(d).add(u);else{var c=new Set;c.add(u),this.names.set(d,c)}},r.prototype.insertRules=function(d,u,c){this.registerName(d,u),this.getTag().insertRules(gs(d),c)},r.prototype.clearNames=function(d){this.names.has(d)&&this.names.get(d).clear()},r.prototype.clearRules=function(d){this.getTag().clearGroup(gs(d)),this.clearNames(d)},r.prototype.clearTag=function(){this.tag=void 0},r}(),tv=/&/g,nv=/^\s*\/\/.*$/gm;function pg(r,d){return r.map(function(u){return u.type==="rule"&&(u.value="".concat(d," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(d," ")),u.props=u.props.map(function(c){return"".concat(d," ").concat(c)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=pg(u.children,d)),u})}function iv(r){var d,u,c,f=Hr,h=f.options,w=h===void 0?Hr:h,k=f.plugins,v=k===void 0?Xs:k,x=function(E,W,$){return $.startsWith(u)&&$.endsWith(u)&&$.replaceAll(u,"").length>0?".".concat(d):E},M=v.slice();M.push(function(E){E.type===Vs&&E.value.includes("&")&&(E.props[0]=E.props[0].replace(tv,u).replace(c,x))}),w.prefix&&M.push(Ly),M.push(Sy);var O=function(E,W,$,Q){W===void 0&&(W=""),$===void 0&&($=""),Q===void 0&&(Q="&"),d=Q,u=W,c=new RegExp("\\".concat(u,"\\b"),"g");var V=E.replace(nv,""),A=jy($||W?"".concat($," ").concat(W," { ").concat(V," }"):V);w.namespace&&(A=pg(A,w.namespace));var B=[];return _s(A,Cy(M.concat(zy(function(z){return B.push(z)})))),B};return O.hash=v.length?v.reduce(function(E,W){return W.name||rl(15),Br(E,W.name)},ag).toString():"",O}var av=new ug,Xu=iv(),fg=Nr.createContext({shouldForwardProp:void 0,styleSheet:av,stylis:Xu});fg.Consumer;Nr.createContext(void 0);function m0(){return y.useContext(fg)}var rv=function(){function r(d,u){var c=this;this.inject=function(f,h){h===void 0&&(h=Xu);var w=c.name+h.hash;f.hasNameForId(c.id,w)||f.insertRules(c.id,w,h(c.rules,w,"@keyframes"))},this.name=d,this.id="sc-keyframes-".concat(d),this.rules=u,up(this,function(){throw rl(12,String(c.name))})}return r.prototype.getName=function(d){return d===void 0&&(d=Xu),this.name+d.hash},r}(),ov=function(r){return r>="A"&&r<="Z"};function h0(r){for(var d="",u=0;u<r.length;u++){var c=r[u];if(u===1&&c==="-"&&r[0]==="-")return r;ov(c)?d+="-"+c.toLowerCase():d+=c}return d.startsWith("ms-")?"-"+d:d}var mg=function(r){return r==null||r===!1||r===""},hg=function(r){var d,u,c=[];for(var f in r){var h=r[f];r.hasOwnProperty(f)&&!mg(h)&&(Array.isArray(h)&&h.isCss||_r(h)?c.push("".concat(h0(f),":"),h,";"):el(h)?c.push.apply(c,Hs(Hs(["".concat(f," {")],hg(h),!1),["}"],!1)):c.push("".concat(h0(f),": ").concat((d=f,(u=h)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||d in My||d.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return c};function Ha(r,d,u,c){if(mg(r))return[];if(cp(r))return[".".concat(r.styledComponentId)];if(_r(r)){if(!_r(h=r)||h.prototype&&h.prototype.isReactComponent||!d)return[r];var f=r(d);return Ha(f,d,u,c)}var h;return r instanceof rv?u?(r.inject(u,c),[r.getName(c)]):[r]:el(r)?hg(r):Array.isArray(r)?Array.prototype.concat.apply(Xs,r.map(function(w){return Ha(w,d,u,c)})):[r.toString()]}function lv(r){for(var d=0;d<r.length;d+=1){var u=r[d];if(_r(u)&&!cp(u))return!1}return!0}var sv=rg(Zs),dv=function(){function r(d,u,c){this.rules=d,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&lv(d),this.componentId=u,this.baseHash=Br(sv,u),this.baseStyle=c,ug.registerId(u)}return r.prototype.generateAndInjectStyles=function(d,u,c){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(d,u,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))f=qa(f,this.staticRulesId);else{var h=u0(Ha(this.rules,d,u,c)),w=Ju(Br(this.baseHash,h)>>>0);if(!u.hasNameForId(this.componentId,w)){var k=c(h,".".concat(w),void 0,this.componentId);u.insertRules(this.componentId,w,k)}f=qa(f,w),this.staticRulesId=w}else{for(var v=Br(this.baseHash,c.hash),x="",M=0;M<this.rules.length;M++){var O=this.rules[M];if(typeof O=="string")x+=O;else if(O){var E=u0(Ha(O,d,u,c));v=Br(v,E+M),x+=E}}if(x){var W=Ju(v>>>0);u.hasNameForId(this.componentId,W)||u.insertRules(this.componentId,W,c(x,".".concat(W),void 0,this.componentId)),f=qa(f,W)}}return f},r}(),xg=Nr.createContext(void 0);xg.Consumer;var uu={};function cv(r,d,u){var c=cp(r),f=r,h=!cu(r),w=d.attrs,k=w===void 0?Xs:w,v=d.componentId,x=v===void 0?function(re,C){var D=typeof re!="string"?"sc":o0(re);uu[D]=(uu[D]||0)+1;var K="".concat(D,"-").concat(Ey(Zs+D+uu[D]));return C?"".concat(C,"-").concat(K):K}(d.displayName,d.parentComponentId):v,M=d.displayName,O=M===void 0?function(re){return cu(re)?"styled.".concat(re):"Styled(".concat($y(re),")")}(r):M,E=d.displayName&&d.componentId?"".concat(o0(d.displayName),"-").concat(d.componentId):d.componentId||x,W=c&&f.attrs?f.attrs.concat(k).filter(Boolean):k,$=d.shouldForwardProp;if(c&&f.shouldForwardProp){var Q=f.shouldForwardProp;if(d.shouldForwardProp){var V=d.shouldForwardProp;$=function(re,C){return Q(re,C)&&V(re,C)}}else $=Q}var A=new dv(u,E,c?f.componentStyle:void 0);function B(re,C){return function(D,K,ke){var we=D.attrs,ce=D.componentStyle,le=D.defaultProps,qe=D.foldedComponentIds,mt=D.styledComponentId,ht=D.target,Je=Nr.useContext(xg),F=m0(),J=D.shouldForwardProp||F.shouldForwardProp,ye=Ry(K,Je,le)||Hr,De=function(Ce,ve,nt){for(var Ae,it=gn(gn({},ve),{className:void 0,theme:nt}),qt=0;qt<Ce.length;qt+=1){var he=_r(Ae=Ce[qt])?Ae(it):Ae;for(var Qe in he)it[Qe]=Qe==="className"?qa(it[Qe],he[Qe]):Qe==="style"?gn(gn({},it[Qe]),he[Qe]):he[Qe]}return ve.className&&(it.className=qa(it.className,ve.className)),it}(we,K,ye),S=De.as||ht,Z={};for(var pe in De)De[pe]===void 0||pe[0]==="$"||pe==="as"||pe==="theme"&&De.theme===ye||(pe==="forwardedAs"?Z.as=De.forwardedAs:J&&!J(pe,S)||(Z[pe]=De[pe]));var I=function(Ce,ve){var nt=m0(),Ae=Ce.generateAndInjectStyles(ve,nt.styleSheet,nt.stylis);return Ae}(ce,De),fe=qa(qe,mt);return I&&(fe+=" "+I),De.className&&(fe+=" "+De.className),Z[cu(S)&&!ig.has(S)?"class":"className"]=fe,ke&&(Z.ref=ke),y.createElement(S,Z)}(z,re,C)}B.displayName=O;var z=Nr.forwardRef(B);return z.attrs=W,z.componentStyle=A,z.displayName=O,z.shouldForwardProp=$,z.foldedComponentIds=c?qa(f.foldedComponentIds,f.styledComponentId):"",z.styledComponentId=E,z.target=c?f.target:r,Object.defineProperty(z,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(re){this._foldedDefaultProps=c?function(C){for(var D=[],K=1;K<arguments.length;K++)D[K-1]=arguments[K];for(var ke=0,we=D;ke<we.length;ke++)Zu(C,we[ke],!0);return C}({},f.defaultProps,re):re}}),up(z,function(){return".".concat(z.styledComponentId)}),h&&dg(z,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),z}function x0(r,d){for(var u=[r[0]],c=0,f=d.length;c<f;c+=1)u.push(d[c],r[c+1]);return u}var g0=function(r){return Object.assign(r,{isCss:!0})};function uv(r){for(var d=[],u=1;u<arguments.length;u++)d[u-1]=arguments[u];if(_r(r)||el(r))return g0(Ha(x0(Xs,Hs([r],d,!0))));var c=r;return d.length===0&&c.length===1&&typeof c[0]=="string"?Ha(c):g0(Ha(x0(c,d)))}function Ku(r,d,u){if(u===void 0&&(u=Hr),!d)throw rl(1,d);var c=function(f){for(var h=[],w=1;w<arguments.length;w++)h[w-1]=arguments[w];return r(d,u,uv.apply(void 0,Hs([f],h,!1)))};return c.attrs=function(f){return Ku(r,d,gn(gn({},u),{attrs:Array.prototype.concat(u.attrs,f).filter(Boolean)}))},c.withConfig=function(f){return Ku(r,d,gn(gn({},u),f))},c}var gg=function(r){return Ku(cv,r)},s=gg;ig.forEach(function(r){s[r]=gg(r)});const pv=s.div`
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
`,fv=s.div`
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
`,b0=s(si)`
  display: block;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 8px;
  transition: all 0.2s ease;

  ${r=>r.$primary?`
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
`,tl=({isOpen:r,onClose:d,title:u,message:c})=>r?n.jsx(pv,{onClick:d,children:n.jsxs(fv,{onClick:f=>f.stopPropagation(),children:[n.jsx("h2",{children:u||"Sign in Required"}),n.jsx("p",{children:c||"Please sign in or register to continue"}),n.jsx(b0,{to:"/signin",children:"Sign In"}),n.jsx(b0,{to:"/register",$primary:!0,children:"Register"})]})}):null,bg=y.createContext(),pi=()=>{const r=y.useContext(bg);if(!r)throw new Error("useAuth must be used within an AuthProvider");return r},mv=({children:r})=>{const[d,u]=y.useState(null),[c,f]=y.useState(!0),[h,w]=y.useState({isVisible:!1,message:"",type:"success"}),k=[{email:"john.doe@gmail.com",password:"password123",user:{id:"123",email:"john.doe@gmail.com",firstName:"John",lastName:"Doe",name:"John Doe",gender:"male",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"}},{email:"jane.smith@gmail.com",password:"password123",user:{id:"124",email:"jane.smith@gmail.com",firstName:"Jane",lastName:"Smith",name:"Jane Smith",gender:"female",avatar:"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"}}],v={id:"123",email:"john.doe@gmail.com",firstName:"John",lastName:"Doe",name:"John Doe",gender:"male",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"};y.useEffect(()=>{const V=localStorage.getItem("user"),A=localStorage.getItem("token");if(V&&A){const B=JSON.parse(V),z={...v,...B};u(z),Object.keys(z).length!==Object.keys(B).length&&localStorage.setItem("user",JSON.stringify(z))}f(!1)},[]);const x=(V,A="success")=>{w({isVisible:!0,message:V,type:A})},M=()=>{w(V=>({...V,isVisible:!1}))},O=(V,A)=>k.find(B=>B.email===V&&B.password===A),E=(V,A,B=!0)=>{localStorage.setItem("user",JSON.stringify(V)),localStorage.setItem("token",A),u(V),B&&x(`Welcome back, ${V.firstName}!`,"success")},Q={user:d,login:E,loginWithCredentials:(V,A)=>{const B=O(V,A);return B?(E(B.user,"dummy-jwt-token-12345"),{success:!0}):{success:!1,error:"Invalid email or password. Please try again."}},logout:()=>{localStorage.removeItem("user"),localStorage.removeItem("token"),u(null),x("User logged out","info")},authenticate:O,loading:c,isAuthenticated:!!d,notification:h,showNotification:x,hideNotification:M,dummyCredentials:k};return n.jsx(bg.Provider,{value:Q,children:r})},hv=s.div`
  padding: 80px 16px 24px;
  animation: fadeIn 0.3s ease;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 70px 0px 16px;
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
`,xv=s.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  padding-top: 0px;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    width: 100%;
    max-width: 100%;
  }
`,gv=s.div`
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
`,bv=s.button`
  width: 100%;
  background: none;
  border: none;
  padding: 32px;
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
    padding: 24px;
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
`,yv=s.div`
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  background: #f1f5f9;
  border: 2px solid #e2e8f0;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    min-width: 36px;
    min-height: 36px;
  }
`,vv=s.div`
  border-top: 1px solid #e2e8f0;
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 16px 24px;
    gap: 12px;
    flex-wrap: wrap;
  }
`,wv=s.button`
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
`,jv=s.article`
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
`,kv=s.div`
  padding: 16px 32px;
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    padding: 14px 24px;
    gap: 12px;
  }
`,Sv=s.div`
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
`,Cv=s.div`
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
`,zv=s.div`
  padding: 0 32px 12px;
  text-align: left;
  
  @media (max-width: 768px) {
    padding: 0 24px 12px;
  }
  
  p {
    margin: 0 0 8px;
    font-size: 15px;
    line-height: 1.6;
    color: #334155;
    text-align: left;

    @media (max-width: 768px) {
      font-size: 14px;
      margin: 0 0 8px;
    }
  }
`,Lv=s.button`
  background: none;
  border: none;
  color: #64748b;
  font-size: 14px;
  cursor: pointer;
  padding: 0;
  margin: 0 0 8px 0;
  font-weight: 500;
  transition: color 0.2s ease;

  @media (max-width: 768px) {
    font-size: 13px;
    margin: 0 0 8px 0;
  }

  &:hover {
    color: #29ba9b;
  }

  &:focus {
    outline: none;
  }
`,Mv=s.div`
  display: grid;
  gap: 4px;
  border-radius: 8px;
  overflow: hidden;
  margin: 8px 1px 0;
  
  @media (max-width: 768px) {
    margin: 8px 0 0;
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
`,Tv=s.div`
  padding: 8px 32px;
  display: flex;
  gap: 20px;
  border-top: 1px solid #e2e8f0;
  margin-top: 8px;

  @media (max-width: 768px) {
    padding: 6px 24px;
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
`;s.div`
  font-weight: 600;
  font-size: 14px;
  color: #262626;
  padding: 0 0 8px;
`;s.div`
  padding: 0 16px 8px;
  font-size: 14px;
  line-height: 1.4;
  color: #262626;

  span {
    font-weight: 600;
    margin-right: 6px;
  }
`;s.div`
  padding: 0 16px 16px;
  font-size: 10px;
  color: #8e8e8e;
  text-transform: uppercase;
`;const Rv=s.div`
  border-top: 1px solid #e2e8f0;
`,Av=s.div`
  padding: 8px 32px;
  display: flex;
  gap: 12px;
  align-items: center;
  background: white;

  @media (max-width: 768px) {
    padding: 8px 24px;
    gap: 10px;
  }
`,Pv=s.input`
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
`,Dv=s.button`
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
`,Ev=s.div`
  background: white;
`,$v=s.div`
  padding: 6px 32px;
  display: flex;
  gap: 12px;
  align-items: flex-start;

  @media (max-width: 768px) {
    padding: 6px 24px;
    gap: 10px;
  }

  &:last-child {
    padding-bottom: 12px;
  }
`,y0=s.div`
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
`,Bv=s.div`
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
`,Nv=s.div`
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
`;s.button`
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
`;const v0=s.div`
  margin-left: 36px;
  border-left: 1px solid #e2e8f0;
  padding-left: 12px;
  margin-bottom: 12px;
  
  @media (max-width: 768px) {
    margin-left: 28px;
    padding-left: 8px;
    margin-bottom: 10px;
  }
`,Ov=s.div`
  padding: 8px 0;
  display: flex;
  gap: 8px;
  align-items: center;
  background: white;

  @media (max-width: 768px) {
    gap: 6px;
  }
`,qv=s.input`
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
`,Uv=s.button`
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
`,Hv=s.div`
  padding: 4px 0;
  display: flex;
  gap: 8px;
  align-items: flex-start;

  @media (max-width: 768px) {
    gap: 6px;
  }
`,w0=s.div`
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
`,_v=s.div`
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
`;s.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;s.div`
  flex: 1;
  font-size: 14px;
  line-height: 1.4;

  span {
    font-weight: 600;
    margin-right: 6px;
  }
`;s.div`
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
`;s.div`
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
`;s.div`
  padding: 12px 16px;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;s.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #262626;
`;const Gv=s.button`
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
`;s.div`
  padding: 16px;
`;const Yv=s.div`
  padding: 0 32px 16px;
  
  @media (max-width: 768px) {
    padding: 0 24px 16px;
  }
`,Wv=s.textarea`
  width: 100%;
  min-height: 48px; /* 2 lines: (15px * 1.6 * 2) = 48px */
  height: auto;
  padding: 8px 0px;
  border: none;
  border-radius: 4px;
  resize: none;
  font-size: 15px;
  line-height: 1.6;
  color: #334155;
  font-family: inherit;
  margin-bottom: 0px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    font-size: 14px;
    min-height: 45px; /* 2 lines: (14px * 1.6 * 2) = 44.8px */
  }
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: #94a3b8;
  }
`;s.div`
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
`;const Fv=s.button`
  width: ${r=>r.width||"100%"};
  padding: ${r=>r.padding||"12px"};
  background: #29ba9b;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  margin-top: ${r=>r.marginTop||"16px"};
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
`,Vv=s.div`
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
`,Qv=s.div`
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  z-index: 1050;
  max-width: 380px;
  width: 90%;
  animation: slideDown 0.3s ease;
  backdrop-filter: blur(8px);

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }

  @media (max-width: 768px) {
    top: 70px;
    padding: 14px 18px;
    border-radius: 10px;
    max-width: 340px;
  }
`,Iv=s.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`,Jv=s.div`
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;
  border-radius: 50%;
  background: #fbbf24;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

  svg {
    width: 12px;
    height: 12px;
    color: white;
    stroke-width: 3;
  }
`,Zv=s.div`
  flex: 1;
  
  h4 {
    margin: 0 0 4px 0;
    font-size: 14px;
    font-weight: 600;
    color: #1e293b;
    line-height: 1.3;
  }
  
  p {
    margin: 0;
    font-size: 13px;
    color: #64748b;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    h4 {
      font-size: 13px;
    }
    
    p {
      font-size: 12px;
    }
  }
`,Xv=s.button`
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  color: #94a3b8;
  transition: all 0.2s ease;
  border-radius: 4px;
  margin-top: -2px;

  &:hover {
    color: #64748b;
    background: #f1f5f9;
  }

  svg {
    width: 16px;
    height: 16px;
    stroke-width: 2;
  }
`,yg=s.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.2s ease;
  z-index: 100;

  @media (max-width: 768px) {
    top: 14px;
    right: 14px;
    padding: 6px;
  }

  svg {
    width: 20px;
    height: 20px;
    color: #64748b;
    fill: currentColor;

    @media (max-width: 768px) {
      width: 18px;
      height: 18px;
    }
  }

  &:hover {
    opacity: 1;
    transform: scale(1.1);
    
    svg {
      color: #ef4444;
    }

    .report-tooltip {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:focus {
    outline: none;
    opacity: 1;
    background: rgba(239, 68, 68, 0.1);
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);
  }

  &:active {
    outline: none;
    transform: scale(0.95);
    background: rgba(239, 68, 68, 0.2);
  }
`,Kv=s.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: #1f2937;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  margin-top: 4px;
  opacity: 0;
  transform: translateY(-4px);
  transition: all 0.2s ease;
  pointer-events: none;
  z-index: 20;

  &::before {
    content: '';
    position: absolute;
    bottom: 100%;
    right: 8px;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #1f2937;
  }

  @media (max-width: 768px) {
    font-size: 11px;
    padding: 4px 8px;
  }
`,e4=s.div`
  position: relative;

  &:hover ${yg} {
    opacity: 1;
  }
`,t4=s.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,n4=s.div`
  background: white;
  border-radius: 20px;
  max-width: 500px;
  width: 100%;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease;
  overflow: hidden;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @media (max-width: 768px) {
    border-radius: 16px;
    max-width: 95%;
    margin: 10px;
  }
`,i4=s.div`
  padding: 32px 32px 16px;
  text-align: center;
  position: relative;
  border-bottom: 1px solid #f1f5f9;
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 24px 24px 16px;
  }

  h3 {
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    color: #1e293b;
    letter-spacing: -0.025em;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  button {
    position: absolute;
    top: 24px;
    right: 24px;
    background: white;
    border: 1px solid #e2e8f0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    color: #64748b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    &:hover {
      background: #f8fafc;
      color: #ef4444;
      transform: scale(1.05);
      border-color: #ef4444;
      box-shadow: 0 4px 12px rgba(239, 68, 68, 0.15);
    }

    &:focus {
      outline: none;
      background: #f8fafc;
      border-color: #ef4444;
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);
    }

    &:active {
      outline: none;
      transform: scale(0.95);
      background: #fef2f2;
      border-color: #dc2626;
    }

    div {
      color: inherit;
    }
  }
`,a4=s.div`
  padding: 24px 32px;
  flex: 1;
  overflow-y: auto;
  min-height: 0;

  /* Custom scrollbar styling - matches notification component */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 3px;
    transition: background 0.2s ease;
  }
  
  /* Remove arrow buttons */
  &::-webkit-scrollbar-button {
    display: none;
  }
  
  /* Show scrollbar on hover */
  &:hover {
    scrollbar-color: #cbd5e1 #f1f5f9;
    
    &::-webkit-scrollbar-track {
      background: #f1f5f9;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      
      &:hover {
        background: #94a3b8;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 20px 24px;
  }

  > p {
    margin: 0 0 24px 0;
    font-size: 16px;
    color: #64748b;
    line-height: 1.6;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 15px;
      margin-bottom: 20px;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`,r4=s.button`
  width: 100%;
  padding: 18px 20px;
  background: ${r=>r.$selected?"#f0fdf4":"white"};
  border: 2px solid ${r=>r.$selected?"#22c55e":"#e2e8f0"};
  border-radius: 12px;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 15px;
  font-weight: 500;
  color: ${r=>r.$selected?"#15803d":"#374151"};
  position: relative;

  @media (max-width: 768px) {
    padding: 16px 18px;
    font-size: 14px;
  }

  &:hover {
    border-color: #22c55e;
    background: #f0fdf4;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(34, 197, 94, 0.15);
  }

  &:focus {
    outline: none;
    border-color: #22c55e;
    background: #f0fdf4;
    box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
  }

  &:active {
    outline: none;
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(34, 197, 94, 0.2);
  }

  ${r=>r.$selected&&`
    &::after {
      content: '✓';
      position: absolute;
      right: 18px;
      top: 50%;
      transform: translateY(-50%);
      color: #22c55e;
      font-weight: 700;
      font-size: 16px;
    }
  `}
`,o4=s.div`
  padding: 24px 32px 32px;
  display: flex;
  gap: 16px;
  border-top: 1px solid #f1f5f9;
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 20px 24px 24px;
    gap: 12px;
  }
`,l4=s.button`
  flex: 1;
  padding: 14px 24px;
  background: white;
  color: #64748b;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 14px;
  }

  &:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
    color: #475569;
  }

  &:focus {
    outline: none;
    border-color: #cbd5e1;
    box-shadow: 0 0 0 3px rgba(203, 213, 225, 0.1);
  }

  &:active {
    outline: none;
    transform: translateY(0);
    background: #f1f5f9;
  }
`,s4=s.button`
  flex: 1;
  padding: 14px 24px;
  background: ${r=>r.disabled?"#94a3b8":"#ef4444"};
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 15px;
  cursor: ${r=>r.disabled?"not-allowed":"pointer"};
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 14px;
  }

  &:hover:not(:disabled) {
    background: #dc2626;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);
  }

  &:active:not(:disabled) {
    outline: none;
    transform: translateY(0);
    background: #b91c1c;
    box-shadow: 0 2px 6px rgba(239, 68, 68, 0.4);
  }
`,d4=s.textarea`
  width: 100%;
  min-height: 100px;
  padding: 16px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 15px;
  font-family: inherit;
  resize: vertical;
  margin-top: 16px;
  transition: all 0.2s ease;
  line-height: 1.5;

  &:focus {
    outline: none;
    border-color: #22c55e;
    box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }

  @media (max-width: 768px) {
    min-height: 80px;
    padding: 14px;
    font-size: 14px;
  }
`,c4=s.div`
  text-align: center;
  padding: 2rem;
  color: #ef4444;
  background: #fef2f2;
  border-radius: 8px;
  margin: 1rem 0;
`,u4=s.div`
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
`,p4=s.div`
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
`,f4=s.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  width: 100%;
  height: 100%;
  transform: translateX(${r=>r.$offset}px);
  transition: transform ${r=>r.$isAnimating?"0.3s":"0s"} ease-out;
`,m4=s.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
`,h4=s.img`
  max-width: 95%;
  max-height: 85vh;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  user-select: none;
  -webkit-user-drag: none;

  @media (max-width: 768px) {
    max-width: 90%;
    max-height: 75vh;
  }
`,j0=s.button`
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

  ${r=>r.$left?"left: 24px;":"right: 24px;"}

  @media (max-width: 768px) {
    display: none;
  }
`,x4=s.div`
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
`,g4=s.div`
  margin-top: 16px;
  padding: 0;

  @media (max-width: 768px) {
    padding: 0;
    margin-top: 16px;
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
`,pu=s.div`
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
`,fu=s.button`
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
`;function b4({filled:r=!1}){return n.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:r?"currentColor":"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",strokeLinecap:"round",strokeLinejoin:"round"})})}function y4(){return n.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",strokeLinecap:"round",strokeLinejoin:"round"})})}function v4(){return n.jsxs("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),n.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),n.jsx("path",{d:"M21 15l-5-5L5 21"})]})}function wr(){return n.jsx("div",{style:{fontSize:"20px",fontWeight:"bold",color:"inherit",lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",position:"relative",top:"-2px",left:"0.5px"},children:"×"})}function w4(){return n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",opacity:"0.2"}),n.jsx("path",{d:"M12 2C6.47715 2 2 6.47715 2 12C2 14.7505 3.14229 17.2432 4.98959 19"})]})}function j4(){return n.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:n.jsx("path",{d:"M15 18l-6-6 6-6",strokeLinecap:"round",strokeLinejoin:"round"})})}function k4(){return n.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:n.jsx("path",{d:"M9 18l6-6-6-6",strokeLinecap:"round",strokeLinejoin:"round"})})}function k0(){return n.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",stroke:"none",children:n.jsx("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"})})}function S4(){return n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:n.jsx("path",{d:"M12 9v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",strokeLinecap:"round",strokeLinejoin:"round"})})}function C4(){return n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z"})})}function z4(){return n.jsxs("svg",{viewBox:"0 0 100 100",width:"100%",height:"100%",style:{width:"100%",height:"100%"},children:[n.jsx("circle",{cx:"50",cy:"50",r:"50",fill:"#E5E7EB"}),n.jsx("circle",{cx:"50",cy:"35",r:"15",fill:"#9CA3AF"}),n.jsx("path",{d:"M50 60c-20 0-35 10-35 25v15h70V85c0-15-15-25-35-25z",fill:"#9CA3AF"})]})}function L4(){var jt,Gt;const{user:r,isAuthenticated:d}=pi(),[u,c]=y.useState([]),[f,h]=y.useState(!0),[w,k]=y.useState(null),[v,x]=y.useState(!1),[M,O]=y.useState(!1),[E,W]=y.useState(""),[$,Q]=y.useState([]),[V,A]=y.useState(!1),[B,z]=y.useState({show:!1,title:"",message:""}),[re,C]=y.useState({}),[D,K]=y.useState({}),[ke,we]=y.useState({}),[ce,le]=y.useState({}),[qe,mt]=y.useState({}),[ht,Je]=y.useState({}),[F,J]=y.useState({}),[ye,De]=y.useState({}),[S,Z]=y.useState({}),[pe,I]=y.useState(1),[fe,Ce]=y.useState(!0),[ve,nt]=y.useState(!1),[Ae,it]=y.useState(0),[qt,he]=y.useState([]),[Qe,bn]=y.useState(!1),[qn,_]=y.useState(null),[de,te]=y.useState(""),[ze,Le]=y.useState(""),[xt,Dt]=y.useState(null),[St,Rt]=y.useState(null),[fi,at]=y.useState(0),[Un,vt]=y.useState(!1),en=y.useRef(null),wt=50,on=(R,se)=>{z({show:!0,title:R,message:se}),setTimeout(()=>{z(ue=>({...ue,show:!1}))},4e3)},pa=()=>{z(R=>({...R,show:!1}))},Ei=R=>{C(se=>({...se,[R]:!se[R]}))},Hn=(R,se=200)=>R.length<=se?R:R.substring(0,se).trim()+"...",ln=R=>{const se=R.target;se.style.height="auto",se.style.height=Math.max(48,se.scrollHeight)+"px"};y.useEffect(()=>{(async()=>{try{h(!0),k(null),await new Promise(se=>setTimeout(se,1e3)),c(_e),Ce(!1)}catch{k("Failed to load posts. Please try again later.")}finally{h(!1)}})()},[pe]);const It=async(R,se,ue)=>{if(R.preventDefault(),!d){x(!0);return}try{switch(se){case"like":c(oe=>oe.map(je=>je.id===ue?{...je,isLiked:!je.isLiked,likeCount:je.isLiked?je.likeCount-1:je.likeCount+1}:je));break;case"comment":K(oe=>({...oe,[ue]:!oe[ue]})),ke[ue]||we(oe=>({...oe,[ue]:""})),!D[ue]&&!ce[ue]&&le(oe=>({...oe,[ue]:[]}));break}}catch(oe){console.error("Error handling interaction:",oe)}},Mn=async R=>{var ue;const se=(ue=ke[R])==null?void 0:ue.trim();if(!(!se||!d))try{mt(je=>({...je,[R]:!0}));const oe={id:Date.now().toString(),author:{id:r.id,name:r.name,initials:r.name.split(" ").map(je=>je[0]).join("").toUpperCase(),avatar:r.avatar||null},content:se,createdAt:new Date().toISOString()};le(je=>({...je,[R]:[oe,...je[R]||[]]})),c(je=>je.map(xe=>xe.id===R?{...xe,commentCount:xe.commentCount+1}:xe)),we(je=>({...je,[R]:""}))}catch(oe){console.error("Error submitting comment:",oe)}finally{mt(oe=>({...oe,[R]:!1}))}},cn=async(R,se)=>{var oe;const ue=(oe=F[R])==null?void 0:oe.trim();if(!(!ue||!d))try{Z(xe=>({...xe,[R]:!0}));const je={id:Date.now().toString(),author:{id:r.id,name:r.name,initials:r.name.split(" ").map(xe=>xe[0]).join("").toUpperCase(),avatar:r.avatar||null},content:ue,createdAt:new Date().toISOString(),parentId:R};le(xe=>({...xe,[se]:xe[se].map(Me=>Me.id===R?{...Me,replies:[...Me.replies||[],je]}:Me)})),J(xe=>({...xe,[R]:""})),De(xe=>({...xe,[R]:!1})),Je(xe=>({...xe,[R]:!0}))}catch(je){console.error("Error submitting reply:",je)}finally{Z(je=>({...je,[R]:!1}))}},mi=R=>{De(se=>({...se,[R]:!se[R]})),F[R]||J(se=>({...se,[R]:""}))},Zn=async R=>{if(R.preventDefault(),!d){x(!0);return}O(!M)},Xn=R=>{if(R.preventDefault(),!d){x(!0);return}if($.length>=4){on("Upload Limit Reached","You can only upload a maximum of 4 images per post.");return}document.getElementById("imageInput").click()},_n=async()=>{if(!(!E.trim()&&$.length===0))try{A(!0);const R={id:Date.now().toString(),author:{id:r.id,username:`${r.firstName} ${r.lastName}`,initials:`${r.firstName[0]}${r.lastName[0]}`.toUpperCase(),avatarColor:"#29ba9b",avatar:r.avatar||null},content:E.trim(),images:$.map((se,ue)=>({id:`${Date.now()}_${ue}`,url:se.url,alt:`User uploaded image ${ue+1}`})),createdAt:new Date().toISOString(),likeCount:0,commentCount:0,isLiked:!1};c(se=>[R,...se]),O(!1),W(""),Q([])}catch(R){console.error("Error creating post:",R)}finally{A(!1)}},sn=R=>{Q(se=>se.filter((ue,oe)=>oe!==R))},Gn=R=>{const se=R.length;return se===1?"single-image":se===2?"two-images-horizontal":se===3?"three-images-left":se===4?"four-images":se>4?"four-images-with-overlay":"single-image"},Yn=(R,se)=>{he(R),it(se),nt(!0),document.body.style.overflow="hidden"},Kn=()=>{nt(!1),he([]),it(0),document.body.style.overflow="auto"},Tn=()=>{var R;return((R=en.current)==null?void 0:R.clientWidth)||0},yn=()=>-Ae*Tn();y.useEffect(()=>{ve&&at(yn())},[ve,Ae]);const q=R=>{Rt(null),Dt(R.touches[0].clientX),vt(!1)},g=R=>{Rt(R.touches[0].clientX);const ue=R.touches[0].clientX-xt,oe=yn();Ae===0&&ue>0||Ae===qt.length-1&&ue<0?at(oe+ue*.2):at(oe+ue)},T=()=>{if(!xt||!St)return;const R=xt-St,se=R>wt,ue=R<-wt;vt(!0),se&&Ae<qt.length-1?ne():ue&&Ae>0?me():at(yn()),Dt(null),Rt(null)},ne=()=>{vt(!0),it(R=>{const se=R===qt.length-1?R:R+1;return at(-se*Tn()),se})},me=()=>{vt(!0),it(R=>{const se=R===0?R:R-1;return at(-se*Tn()),se})},Be=R=>{if(!d){x(!0);return}_(R),bn(!0),te("")},Ee=async()=>{if(!(!de||!qn)){if(de==="Other"&&!ze.trim()){on("Missing Information","Please provide a reason for reporting this post.");return}try{const R=de==="Other"?ze:de;on("Report Submitted","Thank you for your report. We'll review this content and take appropriate action if needed."),bn(!1),_(null),te(""),Le("")}catch{on("Report Failed","Unable to submit your report. Please try again later.")}}},Ve=()=>{bn(!1),_(null),te(""),Le("")};y.useEffect(()=>{const R=()=>{at(yn())};return window.addEventListener("resize",R),()=>window.removeEventListener("resize",R)},[Ae]);const _e=[{id:"1",author:{id:"101",username:"Sarah Lee",initials:"SL",avatarColor:"#234255"},content:"Great matches at the club today! Here are some highlights 📸 The weather was absolutely perfect for pickleball - sunny but not too hot, with just a gentle breeze. We had some intense rallies that went on for what felt like forever! Sarah dominated the net with her incredible dinks, while Mike was crushing some amazing overhead smashes. The new court surface is playing really well, much better grip than the old one. Everyone improved their game today and we learned some new strategies. Looking forward to tomorrow's tournament - should be epic! 🏓🎾",images:[{id:"1",url:"https://placehold.co/400x400/ff6b6b/FFF?text=Image+1+(Grid+Top-Left)",alt:"Match highlight 1"},{id:"2",url:"https://placehold.co/400x400/4ecdc4/FFF?text=Image+2+(Grid+Top-Right)",alt:"Match highlight 2"},{id:"3",url:"https://placehold.co/400x400/45b7d1/FFF?text=Image+3+(Grid+Bottom-Left)",alt:"Match highlight 3"},{id:"4",url:"https://placehold.co/400x400/f7b731/FFF?text=Image+4+(Grid+Bottom-Right+with+Overlay)",alt:"Match highlight 4"}],createdAt:"2025-06-16T10:00:00Z",likeCount:245,commentCount:18,isLiked:!1},{id:"2",author:{id:"102",username:"Mike Chen",initials:"MC",avatarColor:"#29ba9b"},content:"New paddles just arrived! Can't wait to try them out this weekend 🏓",images:[{id:"5",url:"https://placehold.co/400x400/29ba9b/FFF?text=Paddle+1",alt:"New paddle front"},{id:"6",url:"https://placehold.co/400x400/29ba9b/FFF?text=Paddle+2",alt:"New paddle back"}],createdAt:"2025-06-16T08:00:00Z",likeCount:132,commentCount:24,isLiked:!1}];return n.jsx(hv,{children:n.jsxs(xv,{children:[n.jsxs(gv,{children:[n.jsxs(bv,{onClick:Zn,children:[n.jsx(yv,{style:{background:d&&(r!=null&&r.avatar)?`url(${r.avatar}) center/cover`:"#f1f5f9",color:d&&(r!=null&&r.avatar)?"transparent":"white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:"600"},children:d?d&&!(r!=null&&r.avatar)&&r?`${((jt=r.firstName)==null?void 0:jt[0])||""}${((Gt=r.lastName)==null?void 0:Gt[0])||""}`.toUpperCase():"":n.jsx(z4,{})}),d?"What's happening in pickleball?":"Sign in to share what's happening in pickleball!"]}),M&&n.jsxs(Yv,{children:[n.jsx(Wv,{placeholder:"Write something here...",value:E,onChange:R=>{W(R.target.value),ln(R)},style:{width:"100%",minHeight:"48px",paddingLeft:"0px",paddingRight:"0px"}}),$.length>0&&n.jsx(g4,{children:n.jsx("div",{className:`preview-grid ${Gn($)}`,children:Gn($)==="four-images-with-overlay"?n.jsxs(n.Fragment,{children:[$.slice(0,3).map((R,se)=>n.jsxs(pu,{className:"preview-image",children:[n.jsx("img",{src:R.url,alt:`Selected ${se+1}`}),n.jsx(fu,{onClick:()=>sn(se),children:n.jsx(wr,{})})]},se)),n.jsxs(pu,{className:"preview-image overlay-preview","data-remaining":$.length-3,children:[n.jsx("img",{src:$[3].url,alt:"Selected 4"}),n.jsx(fu,{onClick:()=>sn(3),children:n.jsx(wr,{})}),n.jsxs("div",{className:"overlay-indicator",children:["+",$.length-3]})]})]}):$.map((R,se)=>n.jsxs(pu,{className:"preview-image",children:[n.jsx("img",{src:R.url,alt:`Selected ${se+1}`}),n.jsx(fu,{onClick:()=>sn(se),children:n.jsx(wr,{})})]},se))})})]}),n.jsxs(vv,{children:[n.jsxs(wv,{onClick:Xn,style:{opacity:$.length>=4?.5:1,cursor:$.length>=4?"not-allowed":"pointer"},children:[n.jsx(v4,{}),$.length>=4?"Max 4 images":$.length===0?"Photo/Video":`Add Photo (${4-$.length} left)`]}),M&&n.jsx(Fv,{disabled:!E.trim(),onClick:_n,width:"auto",padding:"8px 12px",marginTop:"0",children:V?"Posting...":"Post"}),n.jsx("input",{id:"imageInput",type:"file",multiple:!0,accept:"image/jpeg,image/jpg,image/png,image/gif,image/webp,video/mp4,video/mov,video/avi,video/wmv,video/webm",capture:"environment",style:{display:"none"},onChange:R=>{const se=Array.from(R.target.files);if(se.length>0){const ue=4-$.length,oe=se.slice(0,ue);se.length>ue&&on("Some Images Skipped",`You can only add ${ue} more image(s). Only the first ${ue} image(s) will be selected.`);const je=oe.map(xe=>new Promise(Me=>{const ut=new FileReader;ut.onload=Ke=>{Me({file:xe,url:Ke.target.result,name:xe.name})},ut.readAsDataURL(xe)}));Promise.all(je).then(xe=>{Q(Me=>[...Me,...xe]),O(!0)}),R.target.value=""}}})]})]}),f&&n.jsx(Vv,{children:n.jsx(w4,{})}),w&&n.jsx(c4,{children:w}),!f&&!w&&u.map(R=>{var se,ue;return n.jsxs(e4,{children:[n.jsxs(yg,{onClick:()=>Be(R.id),children:[n.jsx(C4,{}),n.jsx(Kv,{className:"report-tooltip",children:"Report post"})]}),n.jsxs(jv,{children:[n.jsxs(kv,{children:[n.jsx(Sv,{style:{background:R.author.avatar?`url(${R.author.avatar}) center/cover`:R.author.avatarColor,color:R.author.avatar?"transparent":"white"},children:R.author.avatar?"":R.author.initials}),n.jsxs(Cv,{children:[n.jsx("h3",{children:R.author.username}),n.jsx("span",{children:new Date(R.createdAt).toLocaleDateString()})]})]}),n.jsxs(zv,{children:[n.jsx("p",{children:re[R.id]||R.content.length<=200?R.content:Hn(R.content,200)}),R.content.length>200&&n.jsx(Lv,{onClick:()=>Ei(R.id),children:re[R.id]?"See less":"See more"}),((se=R.images)==null?void 0:se.length)>0&&n.jsx(Mv,{className:Gn(R.images),children:Gn(R.images)==="four-images-with-overlay"?n.jsxs(n.Fragment,{children:[R.images.slice(0,3).map((oe,je)=>n.jsx("div",{className:"image-container",children:n.jsx("img",{src:oe.url,alt:oe.alt,onClick:()=>Yn(R.images,je),style:{cursor:"pointer"}})},oe.id)),n.jsx("div",{className:"image-container overlay","data-remaining":R.images.length-3,onClick:()=>Yn(R.images,3),style:{cursor:"pointer"},children:n.jsx("img",{src:R.images[3].url,alt:R.images[3].alt})})]}):R.images.map((oe,je)=>n.jsx("img",{src:oe.url,alt:oe.alt,onClick:()=>Yn(R.images,je),style:{cursor:"pointer"}},oe.id))})]}),n.jsxs(Tv,{children:[n.jsxs("button",{onClick:oe=>It(oe,"like",R.id),style:{color:R.isLiked?"#ef4444":"#64748b",fontWeight:R.isLiked?"600":"400"},children:[n.jsx(b4,{filled:R.isLiked}),R.likeCount]}),n.jsxs("button",{onClick:oe=>It(oe,"comment",R.id),children:[n.jsx(y4,{}),R.commentCount]})]}),d&&D[R.id]&&n.jsxs(Rv,{children:[n.jsxs(Av,{children:[n.jsx(y0,{style:{background:r!=null&&r.avatar?`url(${r.avatar}) center/cover`:"#29ba9b",color:r!=null&&r.avatar?"transparent":"white"},children:r!=null&&r.avatar?"":r.name.split(" ").map(oe=>oe[0]).join("").toUpperCase()}),n.jsx(Pv,{placeholder:"Add a comment...",value:ke[R.id]||"",onChange:oe=>we(je=>({...je,[R.id]:oe.target.value})),onKeyPress:oe=>{oe.key==="Enter"&&(oe.preventDefault(),Mn(R.id))}}),n.jsx(Dv,{onClick:()=>Mn(R.id),disabled:!((ue=ke[R.id])!=null&&ue.trim())||qe[R.id],children:n.jsx(k0,{})})]}),ce[R.id]&&ce[R.id].length>0&&n.jsx(Ev,{children:ce[R.id].map((oe,je)=>{var xe;return n.jsxs("div",{children:[n.jsxs($v,{children:[n.jsx(y0,{style:{background:oe.author.avatar?`url(${oe.author.avatar}) center/cover`:"#29ba9b",color:oe.author.avatar?"transparent":"white"},children:oe.author.avatar?"":oe.author.initials}),n.jsxs(Bv,{children:[n.jsxs("p",{className:"comment-content",children:[n.jsx("span",{className:"comment-author",children:oe.author.name}),n.jsx("span",{className:"comment-text",children:oe.content})]}),n.jsxs("div",{className:"comment-meta",children:[n.jsx("span",{className:"comment-time",children:(()=>{const Me=new Date,ut=new Date(oe.createdAt),Ke=Math.floor((Me-ut)/(1e3*60)),Yt=Math.floor(Ke/60),hi=Math.floor(Yt/24);return Ke<60?`${Ke||1}m`:Yt<24?`${Yt}h`:`${hi}d`})()}),n.jsx("button",{className:"comment-reply",onClick:()=>mi(oe.id),children:"Reply"})]})]})]}),oe.replies&&oe.replies.length>0&&n.jsx(Nv,{children:n.jsx("div",{className:"view-replies",children:n.jsx("button",{onClick:()=>Je(Me=>({...Me,[oe.id]:!Me[oe.id]})),children:ht[oe.id]?"Hide replies":`View replies (${oe.replies.length})`})})}),ht[oe.id]&&oe.replies&&oe.replies.length>0&&n.jsx(v0,{children:oe.replies.map(Me=>n.jsxs(Hv,{children:[n.jsx(w0,{style:{background:Me.author.avatar?`url(${Me.author.avatar}) center/cover`:"#29ba9b",color:Me.author.avatar?"transparent":"white"},children:Me.author.avatar?"":Me.author.initials}),n.jsxs(_v,{children:[n.jsxs("p",{className:"reply-content",children:[n.jsx("span",{className:"reply-author",children:Me.author.name}),n.jsx("span",{className:"reply-text",children:Me.content})]}),n.jsxs("div",{className:"reply-meta",children:[n.jsx("span",{className:"reply-time",children:(()=>{const ut=new Date,Ke=new Date(Me.createdAt),Yt=Math.floor((ut-Ke)/(1e3*60)),hi=Math.floor(Yt/60),fa=Math.floor(hi/24);return Yt<60?`${Yt||1}m`:hi<24?`${hi}h`:`${fa}d`})()}),n.jsx("button",{className:"reply-reply",onClick:()=>mi(oe.id),children:"Reply"})]})]})]},Me.id))}),ye[oe.id]&&n.jsx(v0,{children:n.jsxs(Ov,{children:[n.jsx(w0,{style:{background:r!=null&&r.avatar?`url(${r.avatar}) center/cover`:"#29ba9b",color:r!=null&&r.avatar?"transparent":"white"},children:r!=null&&r.avatar?"":r.name.split(" ").map(Me=>Me[0]).join("").toUpperCase()}),n.jsx(qv,{placeholder:"Reply...",value:F[oe.id]||"",onChange:Me=>J(ut=>({...ut,[oe.id]:Me.target.value})),onKeyPress:Me=>{Me.key==="Enter"&&(Me.preventDefault(),cn(oe.id,R.id))}}),n.jsx(Uv,{onClick:()=>cn(oe.id,R.id),disabled:!((xe=F[oe.id])!=null&&xe.trim())||S[oe.id],children:n.jsx(k0,{})})]})})]},oe.id)})})]})]})]},R.id)}),!f&&!w&&u.length===0&&n.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#64748b"},children:"No posts yet. Be the first to share!"}),B.show&&n.jsx(Qv,{children:n.jsxs(Iv,{children:[n.jsx(Jv,{children:n.jsx(S4,{})}),n.jsxs(Zv,{children:[n.jsx("h4",{children:B.title}),n.jsx("p",{children:B.message})]}),n.jsx(Xv,{onClick:pa,children:n.jsx(wr,{})})]})}),v&&n.jsx(tl,{isOpen:v,onClose:()=>x(!1),title:"Join the Conversation!",message:"Sign in or register to interact with the community"}),Qe&&n.jsx(t4,{onClick:Ve,children:n.jsxs(n4,{onClick:R=>R.stopPropagation(),children:[n.jsxs(i4,{children:[n.jsx("h3",{children:"Report Post"}),n.jsx("button",{onClick:Ve,children:n.jsx(wr,{})})]}),n.jsxs(a4,{children:[n.jsx("p",{children:"Help us understand what's happening. Why are you reporting this post?"}),n.jsx("div",{children:["Spam or misleading","Harassment or bullying","Inappropriate content","Violence or dangerous behavior","Hate speech","False information","Other"].map(R=>n.jsx(r4,{$selected:de===R,onClick:()=>te(R),children:R},R))}),de==="Other"&&n.jsx(d4,{placeholder:"Please describe why you're reporting this post...",value:ze,onChange:R=>Le(R.target.value)})]}),n.jsxs(o4,{children:[n.jsx(l4,{onClick:Ve,children:"Cancel"}),n.jsx(s4,{onClick:Ee,disabled:!de||de==="Other"&&!ze.trim(),children:"Submit Report"})]})]})}),ve&&n.jsx(u4,{onClick:Kn,children:n.jsxs(p4,{ref:en,onClick:R=>R.stopPropagation(),onTouchStart:q,onTouchMove:g,onTouchEnd:T,children:[n.jsx(f4,{$offset:fi,$isAnimating:Un,children:qt.map((R,se)=>n.jsx(m4,{children:n.jsx(h4,{src:R.url,alt:R.alt,draggable:!1})},R.id))}),n.jsx(j0,{$left:!0,onClick:me,disabled:Ae===0,children:n.jsx(j4,{})}),n.jsx(j0,{onClick:ne,disabled:Ae===qt.length-1,children:n.jsx(k4,{})}),n.jsx(Gv,{onClick:Kn,children:n.jsx(wr,{})}),n.jsxs(x4,{children:[Ae+1," / ",qt.length]})]})})]})})}const M4=s.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 12px 20px;
  color: #475569;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #e2e8f0;
    border-color: #cbd5e1;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 14px;
  }
`,T4=s.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #29ba9b;
  border: 2px solid #29ba9b;
  border-radius: 12px;
  padding: 12px 20px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #26a085;
    border-color: #26a085;
    transform: translateY(-1px);
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 14px;
  }
`,R4=s.div`
  animation: fadeIn 0.3s ease;

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
`,A4=s.div`
  position: relative;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    height: 300px;
    border-radius: 16px;
    margin-bottom: 24px;
  }
`,P4=s.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #29ba9b, #239b83);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

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
    height: 120px;
    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  }
`,D4=s.div`
  position: absolute;
  top: 24px;
  right: 24px;
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  backdrop-filter: blur(10px);
  z-index: 10;
  
  ${r=>{switch(r.$status.toLowerCase()){case"open":return`
          background: rgba(220, 252, 231, 0.95);
          color: #166534;
          border: 1px solid #86efac;
        `;case"closed":return`
          background: rgba(254, 226, 226, 0.95);
          color: #991b1b;
          border: 1px solid #fca5a5;
        `;case"upcoming":return`
          background: rgba(224, 242, 254, 0.95);
          color: #0369a1;
          border: 1px solid #7dd3fc;
        `;default:return`
          background: rgba(241, 245, 249, 0.95);
          color: #475569;
          border: 1px solid #e2e8f0;
        `}}}

  @media (max-width: 768px) {
    top: 16px;
    right: 16px;
    padding: 6px 12px;
    font-size: 12px;
  }
`,E4=s.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
    gap: 48px;
  }
`,$4=s.div``,B4=s.div``,N4=s.div`
  margin-bottom: 32px;

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #234255;
    margin: 0 0 16px;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;s.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: ${r=>{switch(r.type){case"beginner":return"#f0fdf4";case"intermediate":return"#fef3c7";case"advanced":return"#fef2f2";case"open":return"#f0f9ff";default:return"#f8fafc"}}};
  border-radius: 25px;
  color: ${r=>{switch(r.type){case"beginner":return"#15803d";case"intermediate":return"#d97706";case"advanced":return"#dc2626";case"open":return"#0369a1";default:return"#475569"}}};
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 24px;
  border: 1px solid ${r=>{switch(r.type){case"beginner":return"#bbf7d0";case"intermediate":return"#fde68a";case"advanced":return"#fecaca";case"open":return"#bae6fd";default:return"#e2e8f0"}}};

  svg {
    width: 16px;
    height: 16px;
  }
`;const O4=s.p`
  color: #64748b;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 24px;
  }
`,ia=s.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`,aa=s.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #334155;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    width: 20px;
    height: 20px;
    color: #29ba9b;
  }
`,q4=s.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  background: #f8fafc;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  overflow: hidden;
`,jr=s.div`
  display: flex;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #e2e8f0;
  transition: all 0.2s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #f1f5f9;
  }

  @media (max-width: 768px) {
    padding: 16px 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`,kr=s.div`
  width: 40px;
  height: 40px;
  background: #29ba9b;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  flex-shrink: 0;

  svg {
    width: 20px;
    height: 20px;
    color: white;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 4px;
  }
`,Sr=s.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`,Cr=s.div`
  font-size: 1rem;
  font-weight: 600;
  color: #334155;
  margin-bottom: 2px;
`,zr=s.div`
  font-size: 1.1rem;
  font-weight: 500;
  color: #334155;
  text-align: right;

  &.price {
    font-size: 1.1rem;
    color: #334155;
  }

  &.deadline {
    color: #334155;
  }

  @media (max-width: 768px) {
    text-align: left;
    font-size: 1.1rem;
    
    &.price {
      font-size: 1.1rem;
    }
  }
`;s.div`
  font-size: 0.85rem;
  color: #64748b;
  text-align: right;

  @media (max-width: 768px) {
    text-align: left;
  }
`;const U4=s.div`
  background: #f8fafc;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid #e2e8f0;
`,H4=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #334155;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      width: 20px;
      height: 20px;
      color: #29ba9b;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`,_4=s.div`
  display: flex;
  gap: 8px;

  @media (max-width: 768px) {
    width: 100%;
  }
`,S0=s.button`
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    width: 16px;
    height: 16px;
  }

  ${r=>r.$primary?`
    background: #29ba9b;
    color: white;
    border: none;

    &:hover {
      background: #239b83;
    }
  `:`
    background: white;
    color: #475569;
    border: 1px solid #e2e8f0;

    &:hover {
      background: #f8fafc;
      border-color: #cbd5e1;
    }
  `}

  @media (max-width: 768px) {
    flex: 1;
    justify-content: center;
  }
`,G4=s.div`
  margin-bottom: 16px;

  .venue-name {
    font-size: 1.1rem;
    font-weight: 600;
    color: #234255;
    margin-bottom: 4px;
  }

  .venue-address {
    color: #64748b;
    margin-bottom: 8px;
  }

  .coordinates {
    font-size: 12px;
    color: #94a3b8;
  }
`,Y4=s.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #e2e8f0, #cbd5e1);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #64748b;
  font-size: 14px;
  border: 2px dashed #94a3b8;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: linear-gradient(135deg, #cbd5e1, #94a3b8);
    border-color: #64748b;
  }

  &::before {
    content: '📍';
    font-size: 3rem;
    margin-bottom: 8px;
  }

  .map-text {
    text-align: center;
    
    .main-text {
      font-weight: 600;
      margin-bottom: 4px;
    }
    
    .sub-text {
      font-size: 12px;
      opacity: 0.7;
    }
  }
`;s.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;s.button`
  flex: 1;
  background: #29ba9b;
  color: white;
  padding: 16px 24px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: #239b83;
    transform: translateY(-1px);
  }

  &:disabled {
    background: #e2e8f0;
    cursor: not-allowed;
    color: #94a3b8;
  }
`;s.button`
  background: #f1f5f9;
  color: #475569;
  padding: 16px 24px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  min-width: 120px;

  &:hover {
    background: #e2e8f0;
    border-color: #cbd5e1;
  }
`;const C0=s.div`
  display: flex;
  background: #f8fafc;
  border-radius: 12px;
  padding: 6px;
  margin-bottom: 32px;
  border: 1px solid #e2e8f0;
  width: 100%;
  
  @media (max-width: 768px) {
    margin-bottom: 24px;
    padding: 4px;
  }
`,Pa=s.button`
  flex: 1;
  padding: 12px 20px;
  border: none;
  background: ${r=>r.$active?"white":"transparent"};
  color: ${r=>r.$active?"#234255":"#64748b"};
  font-weight: ${r=>r.$active?"600":"500"};
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 8px;
  white-space: nowrap;
  position: relative;
  box-shadow: ${r=>r.$active?"0 2px 4px rgba(0, 0, 0, 0.1)":"none"};
  outline: none;
  text-align: center;

  &:hover {
    color: ${r=>r.$active?"#234255":"#29ba9b"};
    background: ${r=>r.$active?"white":"#ffffff80"};
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 0.85rem;
  }
`,W4=s.div`
  animation: fadeIn 0.3s ease;

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
`;s.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;s.div`
  background: #f8fafc;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #e2e8f0;
  transition: all 0.2s;

  &:hover {
    background: #f1f5f9;
    border-color: #cbd5e1;
  }
`;s.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #29ba9b;
  margin-bottom: 8px;
`;s.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #334155;
  margin: 0 0 8px;
`;s.p`
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
  line-height: 1.4;
`;s.div`
  background: #f8fafc;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid #e2e8f0;
`;s.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #334155;
  margin: 0 0 16px;
  text-align: center;
`;s.div`
  color: #64748b;
  font-size: 1rem;
  margin-bottom: 20px;
  text-align: center;
`;s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 24px;
`;s.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;s.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #334155;
  margin: 0 0 16px;
  text-align: center;
  padding: 8px 12px;
  background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  position: relative;
  
  &::before {
    content: '🏆';
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.9rem;
  }
`;s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;s.div`
  background: #f8fafc;
  border-radius: 8px;
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  font-size: 0.9rem;
  font-weight: 500;
  color: #334155;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s;

  &:hover {
    background: #f1f5f9;
    border-color: #cbd5e1;
  }

  .player-info {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1;
  }

  .player-details {
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex: 1;
  }

  .player-name {
    font-weight: 600;
    color: #334155;
    font-size: 0.9rem;
  }

  .player-meta {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.75rem;
    color: #64748b;
  }

  .player-rating {
    background: #29ba9b;
    color: white;
    padding: 2px 6px;
    border-radius: 4px;
    font-weight: 600;
  }

  .player-team {
    font-style: italic;
  }

  .player-number {
    background: #29ba9b;
    color: white;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 600;
  }

  .player-status {
    font-size: 0.8rem;
    padding: 4px 8px;
    border-radius: 12px;
    font-weight: 500;
    
    &.approved {
      background: #dcfce7;
      color: #166534;
    }
    
    &.pending {
      background: #fef3c7;
      color: #d97706;
    }
  }
`;s.div`
  background: #f8fafc;
  border: 2px dashed #cbd5e1;
  border-radius: 8px;
  padding: 12px 16px;
  text-align: center;
  color: #94a3b8;
  font-size: 0.9rem;
  font-style: italic;
  position: relative;

  &::before {
    content: '⏳';
    margin-right: 6px;
    opacity: 0.6;
  }
`;s.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #e2e8f0;
  margin-top: 24px;
`;s.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #334155;
  margin: 0 0 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    width: 16px;
    height: 16px;
    color: #29ba9b;
  }
`;s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #f1f5f9;

  &:last-child {
    border-bottom: none;
  }

  .registration-info {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .registration-details {
    .player-name {
      font-weight: 500;
      color: #334155;
      font-size: 0.9rem;
    }
    
    .registration-date {
      font-size: 0.8rem;
      color: #64748b;
    }

    .registration-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 2px;
      font-size: 0.75rem;
      color: #64748b;
    }

    .reg-rating {
      background: #f1f5f9;
      color: #475569;
      padding: 2px 6px;
      border-radius: 4px;
      font-weight: 600;
    }

    .reg-team {
      font-style: italic;
    }
  }

  .registration-status {
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 500;
    
    &.approved {
      background: #dcfce7;
      color: #166534;
    }
    
    &.pending {
      background: #fef3c7;
      color: #d97706;
    }
    
    &.rejected {
      background: #fee2e2;
      color: #dc2626;
    }
  }
`;s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
`;s.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid #e2e8f0;
  text-align: center;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;s.div`
  width: 80px;
  height: 80px;
  background: #f1f5f9;
  border-radius: 12px;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;const Go=s.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #334155;
  margin: 0 0 8px;
`;s.p`
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
  line-height: 1.4;
`;const F4=s.div`
  background: white;
  border-radius: 16px;
  padding: 12px;
  border: 1px solid #e2e8f0;
  width: 100%;

  @media (min-width: 768px) {
    padding: 16px;
  }
`,V4=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 16px;
  }
`,z0=s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-width: 0;

  @media (min-width: 768px) {
    gap: 12px;
  }
`,bs=s.div`
  text-align: left;
  margin-bottom: 6px;

  @media (min-width: 768px) {
    margin-bottom: 8px;
  }
  
  h4 {
    font-size: 0.85rem;
    font-weight: 600;
    color: #334155;
    margin: 0 0 3px;
    line-height: 1.2;
    text-align: left;

    @media (min-width: 768px) {
      font-size: 1rem;
      margin: 0 0 4px;
    }
  }
  
  .round-subtitle {
    font-size: 0.7rem;
    color: #64748b;
    line-height: 1.1;
    text-align: left;

    @media (min-width: 768px) {
      font-size: 0.8rem;
    }
  }
`,ys=s.div`
  background: ${r=>r.$isWinner?"#dcfce7":"#f8fafc"};
  border: 2px solid ${r=>r.$isWinner?"#16a34a":"#e2e8f0"};
  border-radius: 8px;
  padding: 8px 10px;
  margin: 2px 0;
  transition: all 0.2s;
  position: relative;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .match-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2px;
  }

  .player-name {
    font-weight: 600;
    color: ${r=>r.$isWinner?"#166534":"#334155"};
    font-size: 0.8rem;
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1;
    text-align: left;

    @media (min-width: 768px) {
      font-size: 0.85rem;
    }
  }

  .player-seed {
    background: #29ba9b;
    color: white;
    padding: 1px 4px;
    border-radius: 3px;
    font-size: 0.65rem;
    font-weight: 600;
    margin-right: 4px;
    flex-shrink: 0;

    @media (min-width: 768px) {
      padding: 2px 6px;
      font-size: 0.7rem;
      margin-right: 6px;
    }
  }

  .match-score {
    font-weight: 700;
    color: ${r=>r.$isWinner?"#166534":"#64748b"};
    font-size: 0.75rem;
    flex-shrink: 0;

    @media (min-width: 768px) {
      font-size: 0.8rem;
    }
  }

  .match-result {
    font-size: 0.7rem;
    color: ${r=>r.$isWinner?"#15803d":"#94a3b8"};
    text-align: left;
    margin-top: 2px;
    line-height: 1.1;

    @media (min-width: 768px) {
      font-size: 0.75rem;
      margin-top: 4px;
    }
  }
`;s.div`
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  border-radius: 12px;
  padding: 12px 16px;
  margin: 4px 0;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  font-size: 0.85rem;
  font-style: italic;
`;s.div`
  position: absolute;
  border: 2px solid #cbd5e1;
  
  &.horizontal {
    height: 2px;
    width: 40px;
  }
  
  &.vertical {
    width: 2px;
    height: ${r=>r.height}px;
  }
  
  &.corner-right {
    border-left: none;
    border-bottom: none;
    border-top-right-radius: 8px;
  }
  
  &.corner-left {
    border-right: none;
    border-bottom: none;
    border-top-left-radius: 8px;
  }
`;const Q4=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-width: 0;
  
  .championship-trophy {
    font-size: 2rem;
    margin-bottom: 6px;

    @media (min-width: 768px) {
      font-size: 2.5rem;
      margin-bottom: 8px;
    }
  }
  
  .championship-match {
    margin: 6px 0;
    width: 100%;

    @media (min-width: 768px) {
      margin: 8px 0;
    }
  }
`,I4=s.div`
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
  
  .section-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: #334155;
    margin-bottom: 12px;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 1.2rem;
      margin-bottom: 16px;
    }
  }
  
  .groups-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 16px;
    margin-bottom: 16px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
      gap: 20px;
      margin-bottom: 20px;
    }

    @media (min-width: 1200px) {
      grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
      gap: 24px;
    }
  }
  
  .qualification-note {
    background: #f0f9ff;
    border: 1px solid #bae6fd;
    border-radius: 8px;
    padding: 12px;
    text-align: center;
    color: #0369a1;
    font-size: 0.85rem;
    font-weight: 500;

    @media (min-width: 768px) {
      border-radius: 12px;
      padding: 16px;
      font-size: 0.9rem;
    }
  }
`,J4=s.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-color: #cbd5e1;
  }

  @media (min-width: 768px) {
    padding: 20px;
  }
`,Z4=s.h4`
  font-size: 1.05rem;
  font-weight: 600;
  color: #334155;
  margin: 0 0 12px;
  text-align: center;
  padding: 10px 14px;
  background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  @media (min-width: 768px) {
    font-size: 1.1rem;
    padding: 12px 16px;
    margin: 0 0 16px;
  }
`,X4=s.div`
  .standings-header {
    display: grid;
    grid-template-columns: 1fr 60px 60px 70px 70px;
    gap: 8px;
    padding: 12px 16px;
    background: #f8fafc;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 600;
    color: #64748b;
    margin-bottom: 12px;
    text-align: center;
    border: 1px solid #e2e8f0;
    
    div:first-child {
      text-align: left;
    }

    @media (min-width: 768px) {
      grid-template-columns: 1fr 70px 70px 80px 80px;
      gap: 10px;
      padding: 14px 18px;
      font-size: 0.85rem;
    }
  }
`,K4=s.div`
  display: grid;
  grid-template-columns: 1fr 60px 60px 70px 70px;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 0.85rem;
  margin-bottom: 6px;
  background: ${r=>r.$qualified?"#dcfce7":"#f8fafc"};
  border: 1px solid ${r=>r.$qualified?"#bbf7d0":"#e2e8f0"};
  transition: all 0.2s ease;

  &:hover {
    background: ${r=>r.$qualified?"#bbf7d0":"#f1f5f9"};
    border-color: ${r=>r.$qualified?"#86efac":"#cbd5e1"};
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 70px 70px 80px 80px;
    gap: 10px;
    padding: 14px 18px;
    font-size: 0.9rem;
    margin-bottom: 8px;
  }
  
  .player-info {
    display: flex;
    align-items: center;
    gap: 10px;

    @media (min-width: 768px) {
      gap: 12px;
    }
  }
  
  .position {
    background: ${r=>r.$qualified?"#16a34a":"#64748b"};
    color: white;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 600;
    flex-shrink: 0;

    @media (min-width: 768px) {
      width: 22px;
      height: 22px;
      font-size: 0.8rem;
    }
  }
  
  .player-name {
    font-weight: 500;
    color: ${r=>r.$qualified?"#166534":"#334155"};
    text-align: left;
    font-size: 0.85rem;
    line-height: 1.3;

    @media (min-width: 768px) {
      font-size: 0.9rem;
    }
  }
  
  .round-wins, .round-losses, .win-points, .loss-points {
    text-align: center;
    font-weight: 600;
    color: ${r=>r.$qualified?"#166534":"#334155"};
    font-size: 0.85rem;

    @media (min-width: 768px) {
      font-size: 0.9rem;
    }
  }
  
  /* Legacy support */
  .wins, .points {
    text-align: center;
    font-weight: 600;
    color: ${r=>r.$qualified?"#166534":"#334155"};
    font-size: 0.85rem;

    @media (min-width: 768px) {
      font-size: 0.9rem;
    }
  }
`,e5=s.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  position: static;

  @media (max-width: 1023px) {
    margin-top: 32px;
  }
`,t5=s.div`
  background: white;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  margin-bottom: 16px;
  overflow: hidden;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    border-color: #cbd5e1;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
`,vg=s.div`
  padding: 16px 20px;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease;
  border-bottom: ${r=>r.$expanded?"1px solid #e2e8f0":"none"};

  &:hover {
    background: #f8fafc;
  }

  @media (max-width: 768px) {
    padding: 12px 16px;
  }
`,n5=s.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;s.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  flex-shrink: 0;
  background: ${r=>{switch(r.category){case"mens-singles":return"linear-gradient(135deg, #3b82f6, #1e40af)";case"womens-singles":return"linear-gradient(135deg, #ec4899, #be185d)";case"mens-doubles":return"linear-gradient(135deg, #10b981, #047857)";case"womens-doubles":return"linear-gradient(135deg, #f59e0b, #d97706)";case"mixed-doubles":return"linear-gradient(135deg, #8b5cf6, #7c3aed)";case"senior-doubles":return"linear-gradient(135deg, #ef4444, #dc2626)";default:return"linear-gradient(135deg, #64748b, #475569)"}}};
  color: white;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
`;const i5=s.div`
  flex: 1;
  min-width: 0;
  
  .category-title {
    font-size: 1.2rem;
    font-weight: 700;
    color: #334155;
    margin-bottom: 6px;
    line-height: 1.3;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
  
  .category-subtitle {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 0.9rem;
    color: #64748b;
    
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
      font-size: 0.85rem;
    }
  }
  
  .category-stats {
    display: flex;
    align-items: center;
    gap: 16px;
    
    @media (max-width: 768px) {
      gap: 12px;
    }
  }
  
  .stat-badge {
    display: flex;
    align-items: center;
    gap: 4px;
    background: #f1f5f9;
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 500;
    
    svg {
      width: 14px;
      height: 14px;
      color: #29ba9b;
    }

    @media (max-width: 768px) {
      font-size: 0.75rem;
      padding: 3px 6px;
    }
  }
`,a5=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  transition: all 0.2s ease;
  
  svg {
    width: 16px;
    height: 16px;
    color: #64748b;
    transition: transform 0.2s ease;
    transform: ${r=>r.$expanded?"rotate(180deg)":"rotate(0deg)"};
  }

  ${vg}:hover & {
    background: #e2e8f0;
    border-color: #cbd5e1;
  }
`,r5=s.div`
  padding: 16px;
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
  animation: ${r=>r.$expanded?"slideDown 0.3s ease":"slideUp 0.3s ease"};
  
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideUp {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-10px);
    }
  }

  @media (max-width: 768px) {
    padding: 12px;
  }
`;s.div`
  text-align: center;
  padding: 32px 20px;
  background: white;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  
  .placeholder-icon {
    font-size: 2.5rem;
    margin-bottom: 12px;
  }
  
  .placeholder-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #334155;
    margin-bottom: 8px;
  }
  
  .placeholder-text {
    font-size: 0.9rem;
    color: #64748b;
    line-height: 1.5;
    margin-bottom: 16px;
  }
  
  .bracket-info {
    background: #f8fafc;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    display: inline-block;
    min-width: 200px;
    
    .info-title {
      color: #29ba9b;
      font-weight: 600;
      margin-bottom: 8px;
      font-size: 0.9rem;
    }
    
    .info-details {
      font-size: 0.8rem;
      color: #64748b;
      line-height: 1.4;
      
      div {
        margin-bottom: 2px;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 24px 16px;
    
    .placeholder-icon {
      font-size: 2rem;
    }
    
    .placeholder-title {
      font-size: 1rem;
    }
    
    .placeholder-text {
      font-size: 0.85rem;
    }
  }
`;const o5=s.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #334155;
  margin: 0 0 16px;
`,l5=s.div`
  text-align: center;
  margin-bottom: 20px;

  .price {
    font-size: 2rem;
    font-weight: 800;
    color: #29ba9b;
    margin-bottom: 4px;
  }

  .prize-pool {
    font-size: 14px;
    color: #64748b;
  }
`;s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #f8fafc;
  border-radius: 8px;
  margin-bottom: 20px;

  .label {
    font-size: 14px;
    color: #64748b;
  }

  .count {
    font-weight: 600;
    color: #234255;
  }
`;const L0=s.div`
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
`,s5=s.h1`
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
`,d5=s.p`
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
`,c5=s.div`
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
`,u5=s.div`
  background: white;
  border: 1px solid #f1f5f9;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    border-color: #e2e8f0;
  }
`,p5=s.div`
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
`,f5=s.div`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  backdrop-filter: blur(8px);
  z-index: 1;
  
  ${r=>{switch(r.$status.toLowerCase()){case"open":return`
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
`,m5=s.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
`,h5=s.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 12px;
  line-height: 1.3;
`;s.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #ecfdf5;
  border-radius: 25px;
  color: #059669;
  border: 1px solid #6ee7b7;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    background: #d1fae5;
    border-color: #34d399;
  }
  }};
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 16px;
  border: 1px solid ${r=>{switch(r.type){case"beginner":return"#bbf7d0";case"intermediate":return"#fde68a";case"advanced":return"#fecaca";case"open":return"#bae6fd";default:return"#e2e8f0"}}};
`;const pp=s.div`
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
`,x5=s(pp)`
  margin-bottom: 8px;
`,g5=s(pp)`
  margin-bottom: 8px;
  color: #64748b;
  font-size: 0.9rem;
  
  svg {
    width: 16px;
    height: 16px;
    color: #29ba9b;
    flex-shrink: 0;
  }
`,b5=s.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
`,y5=s.div`
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
`,v5=s(y5)`
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
`,w5=s.button`
  width: 100%;
  padding: 14px;
  background: #29ba9b;
  color: white;
  border: none;
  border-radius: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.2s ease;
  font-size: 0.95rem;
  
  &:hover:not(:disabled) {
    background: #25a589;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(41, 186, 155, 0.2);
  }
  
  &:disabled {
    background: #f1f5f9;
    cursor: not-allowed;
    color: #94a3b8;
  }
`,j5=s.div`
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
`,k5=s.div`
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
`,S5=s.div`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`,C5=s.div`
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
`,z5=s.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`,M0=s.select`
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
`,L5=s.div`
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
`;function mu(){return n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:n.jsx("path",{d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",strokeLinecap:"round",strokeLinejoin:"round"})})}function T0(){return n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[n.jsx("path",{d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12 13a3 3 0 100-6 3 3 0 000 6z",strokeLinecap:"round",strokeLinejoin:"round"})]})}function R0(){return n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[n.jsx("circle",{cx:"12",cy:"12",r:"9",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("text",{x:"12",y:"14.5",dominantBaseline:"middle",textAnchor:"middle",fontSize:"14",stroke:"none",fill:"currentColor",style:{fontWeight:"bold"},children:"₱"})]})}function M5(){return n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",strokeLinecap:"round",strokeLinejoin:"round"})})}const T5=(r,d,u,c)=>{const f=new Date,h=new Date(r),w=new Date(d);return h<f?"Completed":f>w||u>=c?"Closed":"Open"},A0=s.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`,P0=s.div`
  background: white;
  border-radius: 16px;
  padding: 0;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`,D0=s.div`
  padding: 24px 32px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,E0=s.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #234255;
  margin: 0;
`,hu=s.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #64748b;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    background: #f1f5f9;
    color: #334155;
  }
`,$0=s.div`
  padding: 32px;
  overflow-y: auto;
  flex: 1;
`,Da=s.div`
  margin-bottom: 24px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Ea=s.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #234255;
  margin-bottom: 16px;
  position: relative;
  padding-bottom: 8px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: #29ba9b;
  }
`,vs=s.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`,Lr=s.label`
  font-weight: 500;
  color: #374151;
  margin-bottom: 6px;
  font-size: 0.9rem;
`,B0=s.input`
  padding: 12px 16px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
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
`,R5=s.select`
  padding: 12px 16px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  color: #1a1a1a;
  background: white;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  
  &:hover {
    border-color: #cbd5e0;
  }
`,N0=s.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,A5=s.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`,P5=s.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #234255;
  margin: 0 0 8px 0;
`,D5=s.p`
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
`,E5=s.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
`,$5=s.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #234255;
  margin: 0 0 16px 0;
`,xu=s.div`
  display: flex;
  flex-direction: column;
  padding: 12px 0;
  border-bottom: 1px solid #f1f5f9;
  
  &:last-child {
    border-bottom: none;
  }
`,gu=s.span`
  font-weight: 500;
  color: #64748b;
  font-size: 0.85rem;
  margin-bottom: 4px;
`,bu=s.span`
  font-weight: 600;
  color: #234255;
  font-size: 1rem;
`,B5=s.div`
  border: 2px dashed #e2e8f0;
  border-radius: 8px;
  padding: 24px;
  text-align: center;
  background: #f8fafc;
  transition: all 0.2s ease;
  cursor: pointer;
`,N5=s.div`
  position: relative;
  margin-top: 16px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
`,O5=s.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  display: block;
`,q5=s.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(239, 68, 68, 0.9);
  color: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(239, 68, 68, 1);
    transform: scale(1.1);
  }
`,U5=s.div`
  padding: 8px 12px;
  background: #f1f5f9;
  font-size: 0.875rem;
  color: #64748b;
  border-top: 1px solid #e2e8f0;
`,H5=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,_5=s.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
`,G5=s.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #234255;
  margin: 0 0 16px 0;
`,Y5=s.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`,W5=s.div`
  width: 200px;
  height: 200px;
  background: #ffffff;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #64748b;
`,F5=s.div`
  font-size: 3rem;
  margin-bottom: 8px;
`,V5=s.p`
  font-size: 0.9rem;
  font-weight: 500;
  margin: 4px 0;
  color: #64748b;
`,O0=s.p`
  font-size: 0.8rem;
  margin: 0;
  color: #94a3b8;
  text-align: center;
  line-height: 1.3;
  
  &:hover {
    border-color: #29ba9b;
    background: #f0fffe;
  }
`,Q5=s.p`
  color: #64748b;
  margin: 0;
  font-size: 0.9rem;
`,I5=s.button`
  width: 100%;
  padding: 14px;
  background: #29ba9b;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 24px;
  transition: all 0.2s ease;
  font-size: 1rem;
  
  &:hover:not(:disabled) {
    background: #25a589;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(41, 186, 155, 0.2);
  }
  
  &:disabled {
    background: #f1f5f9;
    cursor: not-allowed;
    color: #94a3b8;
  }
`,yu=s.div`
  border: 2px dashed #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${r=>r.$filled?"#f0fffe":"#f8fafc"};
  border-color: ${r=>r.$filled?"#29ba9b":"#e2e8f0"};
  
  &:hover {
    border-color: #29ba9b;
    background: #f0fffe;
  }
`,vu=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,q0=s.button`
  background: transparent;
  color: #ef4444;
  border: none;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  transition: all 0.2s ease;
  margin-left: 8px;
  
  &:hover {
    color: #dc2626;
    transform: scale(1.1);
  }
`,wu=s.div`
  display: flex;
  flex-direction: column;
`,ju=s.span`
  font-weight: 600;
  color: #234255;
  font-size: 0.95rem;
`,ku=s.span`
  font-size: 0.85rem;
  color: #64748b;
  margin-top: 2px;
`,U0=s.span`
  font-size: 0.9rem;
  color: #64748b;
  font-style: italic;
`,H0=s.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #29ba9b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
`,J5=s.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  padding: 20px;
`,Z5=s.div`
  background: white;
  border-radius: 16px;
  padding: 0;
  max-width: 500px;
  width: 100%;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`,X5=s.div`
  padding: 20px 24px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,K5=s.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #234255;
  margin: 0;
`,ew=s.div`
  padding: 20px 24px;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,tw=s.input`
  width: 100%;
  padding: 12px 16px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.95rem;
  margin-bottom: 16px;
  flex-shrink: 0;
  
  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
`,nw=s.div`
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #29ba9b;
    background: #f0fffe;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`,iw=s.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`,aw=s.span`
  font-weight: 600;
  color: #234255;
`,rw=s.div`
  display: block;
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.4;
`,ow=s.div`
  flex: 1;
  overflow-y: auto;
`;s.span`
  background: ${r=>r.$gender==="male"?"#dbeafe":"#fce7f3"};
  color: ${r=>r.$gender==="male"?"#1e40af":"#be185d"};
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: capitalize;
`;const _0=s.span`
  background: #fef3c7;
  color: #92400e;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
`,lw=s.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,G0=s.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px 18px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid;
  min-width: 100px;
  justify-content: center;
  
  svg {
    width: 14px;
    height: 14px;
  }
  
  ${r=>r.variant==="primary"?`
    background: #29ba9b;
    color: white;
    border-color: #29ba9b;
    
    &:hover {
      background: #239b83;
      transform: translateY(-1px);
    }
  `:`
    background: #f1f5f9;
    color: #475569;
    border-color: #e2e8f0;
    
    &:hover {
      background: #e2e8f0;
      border-color: #cbd5e1;
    }
  `}
`;function sw(){var sn,Gn,Yn,Kn,Tn,yn;const{isAuthenticated:r,user:d,loading:u}=pi(),c=ua(),f=Jn(),[h,w]=y.useState([]),[k,v]=y.useState(!0),[x,M]=y.useState(null),[O,E]=y.useState(""),[W,$]=y.useState(""),[Q,V]=y.useState(""),[A,B]=y.useState(!1),[z,re]=y.useState(!1),[C,D]=y.useState(null),[K,ke]=y.useState("details"),[we,ce]=y.useState({}),[le,qe]=y.useState(""),[mt,ht]=y.useState("approved"),[Je,F]=y.useState(!1),[J,ye]=y.useState(null),[De,S]=y.useState(!1),[Z,pe]=y.useState(null),[I,fe]=y.useState(!1),[Ce,ve]=y.useState(""),[nt,Ae]=y.useState(""),[it,qt]=y.useState([{pplId:"PPL001",name:"John Doe",gender:"male",age:28,duprRatings:{singles:"4.5",doubles:"4.3"}},{pplId:"PPL002",name:"Maria Santos",gender:"female",age:32,duprRatings:{singles:"4.2",doubles:"4.3"}},{pplId:"PPL003",name:"Michael Johnson",gender:"male",age:25,duprRatings:{singles:"3.8",doubles:"3.9"}},{pplId:"PPL004",name:"Elena Cruz",gender:"female",age:29,duprRatings:{singles:"4.0",doubles:"4.1"}},{pplId:"PPL005",name:"Carlos Rodriguez",gender:"male",age:35,duprRatings:{singles:"3.5",doubles:"3.6"}},{pplId:"PPL006",name:"Andrea Martinez",gender:"female",age:27,duprRatings:{singles:"4.3",doubles:"4.4"}},{pplId:"PPL007",name:"Jason Park",gender:"male",age:31,duprRatings:{singles:"3.9",doubles:"4.0"}},{pplId:"PPL008",name:"Sarah Kim",gender:"female",age:26,duprRatings:{singles:"3.7",doubles:"3.8"}}]),[he,Qe]=y.useState({category:"",primaryPlayer:{pplId:"",name:"",gender:"male",duprRatings:{singles:"",doubles:""}},partner:{pplId:"",name:"",gender:""},teamMembers:[{pplId:"",name:"",gender:"male",required:!0,label:"Team Player 1"},{pplId:"",name:"",gender:"female",required:!0,label:"Team Player 2"},{pplId:"",name:"",gender:"male",required:!0,label:"Team Player 3"},{pplId:"",name:"",gender:"female",required:!1,label:"Additional Player 1 (Optional)"},{pplId:"",name:"",gender:"male",required:!1,label:"Additional Player 2 (Optional)"}],email:"",contactNumber:"",proofOfPayment:null});y.useEffect(()=>{d&&d.gender&&Qe(q=>({...q,primaryPlayer:{...q.primaryPlayer,gender:d.gender}}))},[d]);const[bn,qn]=y.useState(0);y.useEffect(()=>{qn(q=>q+1)},[(sn=he.primaryPlayer)==null?void 0:sn.age,(Gn=he.primaryPlayer)==null?void 0:Gn.duprRatings,(Yn=he.partner)==null?void 0:Yn.age,(Kn=he.partner)==null?void 0:Kn.duprRatings,he.teamMembers]);const _=[{label:"₱0 - ₱1,000",min:0,max:1e3},{label:"₱1,001 - ₱3,000",min:1001,max:3e3},{label:"₱3,001 - ₱6,000",min:3001,max:6e3}],de=h.filter(q=>{const g=q.name.toLowerCase().includes(O.toLowerCase())||q.location.toLowerCase().includes(O.toLowerCase()),T=!W||(()=>{var me,Be;if(console.log("Checking tournament:",q.name),q.tournamentCategories)return Object.values(q.tournamentCategories).some(Ee=>{if(console.log("Checking category:",Ee),!Ee||!Ee.skillLevel)return!1;if(W.startsWith("open-")){const Ve=parseInt(W.split("-")[1]),_e=Ee.skillLevel.toLowerCase(),jt=Number(Ee.tier)||1;return console.log("Comparing:",{skillLevel:_e,categoryTier:jt,targetTier:Ve,matches:_e==="open"&&jt===Ve}),_e==="open"&&jt===Ve}else return Ee.skillLevel.toLowerCase()===W.toLowerCase()});if(W.startsWith("open-")){const Ee=parseInt(W.split("-")[1]),Ve=Number(q.tier)||1;return((me=q.tournamentType)==null?void 0:me.toLowerCase())==="open"&&Ve===Ee}return((Be=q.tournamentType)==null?void 0:Be.toLowerCase())===W.toLowerCase()})(),ne=!Q||q.entryFee>=_[parseInt(Q)].min&&q.entryFee<=_[parseInt(Q)].max;return g&&T&&ne}),te=async()=>{try{v(!0),M(null);const g=[{id:"1",name:"PPL Summer Championship 2025",date:"2025-08-15T09:00:00Z",endDate:"2025-08-17T18:00:00Z",location:"Manila Pickleball Center",address:"123 Sports Complex Ave, Makati City, Metro Manila",latitude:14.5547,longitude:121.0244,entryFee:1500,prizePool:5e4,maxParticipants:20,currentParticipants:18,registrationDeadline:"2025-07-01T23:59:59Z",bannerUrl:"https://images.unsplash.com/photo-1686721135036-22ac6cbb8ce8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",tier:3,tournamentType:"open",description:"Join the most prestigious pickleball tournament in the Philippines! This 3-day championship features multiple divisions and attracts the best players from across the country.",contactEmail:"championship@philippinepickleball.com",contactPhone:"+63 912 345 6789",divisions:["Men's Singles","Women's Singles","Men's Doubles","Women's Doubles","Mixed Doubles"],tournamentCategories:{"t1-mens-singles-intermediate-18":{id:"t1-mens-singles-intermediate-18",name:"Men's Singles Intermediate 18+",ageGroup:"18+",skillLevel:"Intermediate",participants:16,maxParticipants:16,prizePool:15e3,description:"Men's singles intermediate level competition for players 18 and older",groupStage:{bracketA:[{id:"1",name:"John Doe",rating:"3.5",roundWins:3,roundLosses:1,winPoints:33,lossPoints:21,position:1,age:24},{id:"5",name:"Carlos Rodriguez",rating:"3.4",roundWins:2,roundLosses:2,winPoints:28,lossPoints:26,position:2,age:28},{id:"9",name:"Miguel Torres",rating:"3.3",roundWins:2,roundLosses:2,winPoints:24,lossPoints:28,position:3,age:31},{id:"13",name:"Alex Martinez",rating:"3.2",roundWins:1,roundLosses:3,winPoints:18,lossPoints:33,position:4,age:26}],bracketB:[{id:"2",name:"Michael Johnson",rating:"3.6",roundWins:4,roundLosses:0,winPoints:44,lossPoints:12,position:1,age:29},{id:"6",name:"Luis Chen",rating:"3.5",roundWins:3,roundLosses:1,winPoints:35,lossPoints:18,position:2,age:25},{id:"10",name:"Roberto Kim",rating:"3.3",roundWins:1,roundLosses:3,winPoints:22,lossPoints:33,position:3,age:33},{id:"14",name:"David Park",rating:"3.1",roundWins:0,roundLosses:4,winPoints:15,lossPoints:44,position:4,age:27}],bracketC:[{id:"3",name:"Jason Park",rating:"3.7",roundWins:3,roundLosses:1,winPoints:37,lossPoints:19,position:1,age:30},{id:"7",name:"Anthony Chen",rating:"3.4",roundWins:3,roundLosses:1,winPoints:31,lossPoints:22,position:2,age:24},{id:"11",name:"Marcus Tan",rating:"3.2",roundWins:2,roundLosses:2,winPoints:26,lossPoints:26,position:3,age:32},{id:"15",name:"Steven Wong",rating:"3.0",roundWins:0,roundLosses:4,winPoints:14,lossPoints:44,position:4,age:26}],bracketD:[{id:"4",name:"Patrick Lim",rating:"3.5",roundWins:3,roundLosses:1,winPoints:32,lossPoints:20,position:1,age:28},{id:"8",name:"Jonathan Wu",rating:"3.3",roundWins:2,roundLosses:2,winPoints:29,lossPoints:25,position:2,age:25},{id:"12",name:"Brandon Choi",rating:"3.1",roundWins:2,roundLosses:2,winPoints:25,lossPoints:29,position:3,age:29},{id:"16",name:"Daniel Ko",rating:"2.9",roundWins:1,roundLosses:3,winPoints:20,lossPoints:32,position:4,age:31}]},knockoutStage:{quarterFinals:[{id:"qf1",player1:{name:"John Doe",seed:"A1"},player2:{name:"Anthony Chen",seed:"C2"},score:"11-8, 11-6",winner:"player1",completed:!0},{id:"qf2",player1:{name:"Michael Johnson",seed:"B1"},player2:{name:"Jonathan Wu",seed:"D2"},score:"11-9, 11-7",winner:"player1",completed:!0},{id:"qf3",player1:{name:"Jason Park",seed:"C1"},player2:{name:"Luis Chen",seed:"B2"},score:"11-5, 11-8",winner:"player1",completed:!0},{id:"qf4",player1:{name:"Patrick Lim",seed:"D1"},player2:{name:"Carlos Rodriguez",seed:"A2"},score:"11-7, 11-9",winner:"player2",completed:!0}],semiFinals:[{id:"sf1",player1:{name:"John Doe",seed:"QF1"},player2:{name:"Michael Johnson",seed:"QF2"},score:"11-9, 11-8",winner:"player1",completed:!0},{id:"sf2",player1:{name:"Jason Park",seed:"QF3"},player2:{name:"Carlos Rodriguez",seed:"QF4"},score:"11-6, 11-10",winner:"player1",completed:!0}],final:{id:"final",player1:{name:"John Doe",seed:"SF1"},player2:{name:"Jason Park",seed:"SF2"},score:"11-8, 11-9",winner:"player1",completed:!0},thirdPlace:{id:"thirdPlace",player1:{name:"Michael Johnson",seed:"SF1-L"},player2:{name:"Carlos Rodriguez",seed:"SF2-L"},score:"11-5, 11-7",winner:"player1",completed:!0}}},"t1-womens-singles-intermediate-18":{id:"t1-womens-singles-intermediate-18",name:"Women's Singles Intermediate 18+",ageGroup:"18+",skillLevel:"Intermediate",participants:12,maxParticipants:16,prizePool:15e3,description:"Competitive women's singles for intermediate players",groupStage:{bracketA:[{id:"1",name:"Maria Santos",rating:"3.8",roundWins:3,roundLosses:1,winPoints:35,lossPoints:21,position:1,age:24},{id:"4",name:"Ana Reyes",rating:"3.6",roundWins:2,roundLosses:2,winPoints:28,lossPoints:26,position:2,age:26},{id:"7",name:"Sofia Garcia",rating:"3.4",roundWins:1,roundLosses:3,winPoints:18,lossPoints:33,position:3,age:28}],bracketB:[{id:"2",name:"Elena Cruz",rating:"3.7",roundWins:4,roundLosses:0,winPoints:44,lossPoints:15,position:1,age:25},{id:"5",name:"Carmen Lopez",rating:"3.5",roundWins:2,roundLosses:2,winPoints:29,lossPoints:27,position:2,age:30},{id:"8",name:"Patricia Wong",rating:"3.3",roundWins:0,roundLosses:4,winPoints:12,lossPoints:44,position:3,age:27}],bracketC:[{id:"3",name:"Andrea Martinez",rating:"3.9",roundWins:3,roundLosses:1,winPoints:37,lossPoints:19,position:1,age:23},{id:"6",name:"Rachel Gonzalez",rating:"3.7",roundWins:2,roundLosses:2,winPoints:31,lossPoints:24,position:2,age:29},{id:"9",name:"Lisa Johnson",rating:"3.5",roundWins:1,roundLosses:3,winPoints:22,lossPoints:35,position:3,age:31}],bracketD:[{id:"10",name:"Sarah Kim",rating:"3.6",roundWins:3,roundLosses:1,winPoints:36,lossPoints:18,position:1,age:26},{id:"11",name:"Michelle Yang",rating:"3.4",roundWins:2,roundLosses:2,winPoints:25,lossPoints:29,position:2,age:28},{id:"12",name:"Victoria Huang",rating:"3.2",roundWins:1,roundLosses:3,winPoints:19,lossPoints:36,position:3,age:24}]},knockoutStage:{quarterFinals:[{id:"qf1",player1:{name:"Maria Santos",seed:"A1"},player2:{name:"Michelle Yang",seed:"D2"},score:"11-7, 11-9",winner:"player1",completed:!0},{id:"qf2",player1:{name:"Elena Cruz",seed:"B1"},player2:{name:"Rachel Gonzalez",seed:"C2"},score:"11-8, 11-6",winner:"player1",completed:!0},{id:"qf3",player1:{name:"Andrea Martinez",seed:"C1"},player2:{name:"Ana Reyes",seed:"A2"},score:"11-5, 11-8",winner:"player1",completed:!0},{id:"qf4",player1:{name:"Sarah Kim",seed:"D1"},player2:{name:"Carmen Lopez",seed:"B2"},score:"11-9, 11-7",winner:"player1",completed:!0}],semiFinals:[{id:"sf1",player1:{name:"Maria Santos",seed:"QF1"},player2:{name:"Elena Cruz",seed:"QF2"},score:"11-6, 11-8",winner:"player1",completed:!0},{id:"sf2",player1:{name:"Andrea Martinez",seed:"QF3"},player2:{name:"Sarah Kim",seed:"QF4"},score:"11-9, 11-5",winner:"player1",completed:!0}],final:{id:"final",player1:{name:"Maria Santos",seed:"SF1"},player2:{name:"Andrea Martinez",seed:"SF2"},score:"11-7, 11-9",winner:"player1",completed:!0},thirdPlace:{id:"thirdPlace",player1:{name:"Elena Cruz",seed:"SF1-L"},player2:{name:"Sarah Kim",seed:"SF2-L"},score:"11-4, 11-6",winner:"player1",completed:!0}}},"mixed-doubles-open-18":{id:"mixed-doubles-open-18",name:"Mixed Doubles Open 18+",ageGroup:"18+",skillLevel:"Open",participants:8,maxParticipants:8,prizePool:1e4,description:"Open-level mixed doubles competition",groupStage:{bracketA:[{id:"1",name:"John Doe & Maria Santos",rating:"4.2",roundWins:3,roundLosses:1,winPoints:37,lossPoints:21,position:1,players:["John Doe","Maria Santos"]},{id:"2",name:"Carlos Rodriguez & Ana Reyes",rating:"4.0",roundWins:2,roundLosses:2,winPoints:28,lossPoints:30,position:2,players:["Carlos Rodriguez","Ana Reyes"]}],bracketB:[{id:"3",name:"Miguel Torres & Sofia Garcia",rating:"4.1",roundWins:4,roundLosses:0,winPoints:44,lossPoints:18,position:1,players:["Miguel Torres","Sofia Garcia"]},{id:"4",name:"Luis Chen & Elena Cruz",rating:"3.9",roundWins:1,roundLosses:3,winPoints:22,lossPoints:38,position:2,players:["Luis Chen","Elena Cruz"]}],bracketC:[{id:"5",name:"Jason Park & Andrea Martinez",rating:"4.3",roundWins:3,roundLosses:1,winPoints:35,lossPoints:23,position:1,players:["Jason Park","Andrea Martinez"]},{id:"6",name:"Patrick Lim & Rachel Gonzalez",rating:"3.8",roundWins:2,roundLosses:2,winPoints:26,lossPoints:28,position:2,players:["Patrick Lim","Rachel Gonzalez"]}],bracketD:[{id:"7",name:"Michael Johnson & Sarah Kim",rating:"4.0",roundWins:2,roundLosses:2,winPoints:31,lossPoints:25,position:1,players:["Michael Johnson","Sarah Kim"]},{id:"8",name:"Anthony Chen & Carmen Lopez",rating:"3.7",roundWins:1,roundLosses:3,winPoints:19,lossPoints:35,position:2,players:["Anthony Chen","Carmen Lopez"]}]},knockoutStage:{quarterFinals:[{id:"qf1",player1:{name:"John & Maria",seed:"A1"},player2:{name:"Anthony & Carmen",seed:"D2"},score:"11-8, 11-6",winner:"player1",completed:!0},{id:"qf2",player1:{name:"Miguel & Sofia",seed:"B1"},player2:{name:"Patrick & Rachel",seed:"C2"},score:"11-9, 11-7",winner:"player1",completed:!0},{id:"qf3",player1:{name:"Jason & Andrea",seed:"C1"},player2:{name:"Luis & Elena",seed:"B2"},score:"11-5, 11-8",winner:"player1",completed:!0},{id:"qf4",player1:{name:"Michael & Sarah",seed:"D1"},player2:{name:"Carlos & Ana",seed:"A2"},score:"11-7, 11-9",winner:"player2",completed:!0}],semiFinals:[{id:"sf1",player1:{name:"John & Maria",seed:"QF1"},player2:{name:"Miguel & Sofia",seed:"QF2"},score:"11-9, 11-8",winner:"player1",completed:!0},{id:"sf2",player1:{name:"Jason & Andrea",seed:"QF3"},player2:{name:"Carlos & Ana",seed:"QF4"},score:"11-6, 11-10",winner:"player1",completed:!0}],final:{id:"final",player1:{name:"John & Maria",seed:"SF1"},player2:{name:"Jason & Andrea",seed:"SF2"},score:"11-8, 11-9",winner:"player1",completed:!0},thirdPlace:{id:"thirdPlace",player1:{name:"Miguel & Sofia",seed:"SF1-L"},player2:{name:"Carlos & Ana",seed:"SF2-L"},score:"11-5, 11-7",winner:"player1",completed:!0}}},"t2-mens-singles":{id:"t2-mens-singles",name:"Men's Singles Advanced 18+",ageGroup:"18+",skillLevel:"Advanced",icon:"👨",participants:16,maxParticipants:16,prizePool:25e3,groupStage:{bracketA:[{id:"1",name:"John Doe",rating:"4.8",roundWins:4,roundLosses:0,winPoints:44,lossPoints:12,position:1,age:24},{id:"5",name:"Carlos Rodriguez",rating:"4.6",roundWins:3,roundLosses:1,winPoints:35,lossPoints:18,position:2,age:28},{id:"9",name:"Miguel Torres",rating:"4.4",roundWins:2,roundLosses:2,winPoints:28,lossPoints:26,position:3,age:31},{id:"13",name:"Alex Martinez",rating:"4.2",roundWins:1,roundLosses:3,winPoints:18,lossPoints:33,position:4,age:26}],bracketB:[{id:"2",name:"Michael Johnson",rating:"4.7",roundWins:4,roundLosses:0,winPoints:44,lossPoints:10,position:1,age:29},{id:"6",name:"Luis Chen",rating:"4.5",roundWins:3,roundLosses:1,winPoints:37,lossPoints:15,position:2,age:25},{id:"10",name:"Roberto Kim",rating:"4.3",roundWins:2,roundLosses:2,winPoints:26,lossPoints:28,position:3,age:33},{id:"14",name:"David Park",rating:"4.1",roundWins:1,roundLosses:3,winPoints:15,lossPoints:37,position:4,age:27}],bracketC:[{id:"3",name:"Jason Park",rating:"4.6",roundWins:4,roundLosses:0,winPoints:44,lossPoints:8,position:1,age:30},{id:"7",name:"Anthony Chen",rating:"4.4",roundWins:3,roundLosses:1,winPoints:39,lossPoints:12,position:2,age:24},{id:"11",name:"Marcus Tan",rating:"4.2",roundWins:2,roundLosses:2,winPoints:24,lossPoints:28,position:3,age:32},{id:"15",name:"Steven Wong",rating:"4.0",roundWins:1,roundLosses:3,winPoints:12,lossPoints:39,position:4,age:26}],bracketD:[{id:"4",name:"Patrick Lim",rating:"4.5",roundWins:4,roundLosses:0,winPoints:44,lossPoints:6,position:1,age:28},{id:"8",name:"Jonathan Wu",rating:"4.3",roundWins:3,roundLosses:1,winPoints:36,lossPoints:15,position:2,age:25},{id:"12",name:"Brandon Choi",rating:"4.1",roundWins:2,roundLosses:2,winPoints:22,lossPoints:30,position:3,age:29},{id:"16",name:"Daniel Ko",rating:"3.9",roundWins:1,roundLosses:3,winPoints:15,lossPoints:36,position:4,age:31}]},knockoutStage:{quarterFinals:[{id:"qf1",player1:{name:"John Doe",seed:"A1"},player2:{name:"Anthony Chen",seed:"C2"},score:"11-8, 11-6",winner:"player1",completed:!0},{id:"qf2",player1:{name:"Michael Johnson",seed:"B1"},player2:{name:"Jonathan Wu",seed:"D2"},score:"11-9, 11-7",winner:"player1",completed:!0},{id:"qf3",player1:{name:"Jason Park",seed:"C1"},player2:{name:"Luis Chen",seed:"B2"},score:"11-5, 11-8",winner:"player1",completed:!0},{id:"qf4",player1:{name:"Patrick Lim",seed:"D1"},player2:{name:"Carlos Rodriguez",seed:"A2"},score:"11-7, 11-9",winner:"player2",completed:!0}],semiFinals:[{id:"sf1",player1:{name:"John Doe",seed:"QF1"},player2:{name:"Michael Johnson",seed:"QF2"},score:"11-9, 11-8",winner:"player1",completed:!0},{id:"sf2",player1:{name:"Jason Park",seed:"QF3"},player2:{name:"Carlos Rodriguez",seed:"QF4"},score:"11-6, 11-10",winner:"player1",completed:!0}],final:{id:"final",player1:{name:"John Doe",seed:"SF1"},player2:{name:"Jason Park",seed:"SF2"},score:"11-8, 11-9",winner:"player1",completed:!0},thirdPlace:{id:"thirdPlace",player1:{name:"Michael Johnson",seed:"SF1-L"},player2:{name:"Carlos Rodriguez",seed:"SF2-L"},score:"11-5, 11-7",winner:"player1",completed:!0}}},"t2-womens-singles":{id:"t2-womens-singles",name:"Women's Singles 18+ Intermediate",ageGroup:"18+",skillLevel:"Intermediate",icon:"👩",participants:12,maxParticipants:12,prizePool:15e3,groupStage:{bracketA:[{id:"1",name:"Maria Santos",rating:"3.8",roundWins:3,roundLosses:1,winPoints:35,lossPoints:21,position:1,age:24},{id:"4",name:"Ana Reyes",rating:"3.6",roundWins:2,roundLosses:2,winPoints:28,lossPoints:26,position:2,age:26},{id:"7",name:"Sofia Garcia",rating:"3.4",roundWins:1,roundLosses:3,winPoints:18,lossPoints:33,position:3,age:28}],bracketB:[{id:"2",name:"Elena Cruz",rating:"3.7",roundWins:4,roundLosses:0,winPoints:44,lossPoints:15,position:1,age:25},{id:"5",name:"Carmen Lopez",rating:"3.5",roundWins:2,roundLosses:2,winPoints:29,lossPoints:27,position:2,age:30},{id:"8",name:"Patricia Wong",rating:"3.3",roundWins:0,roundLosses:4,winPoints:12,lossPoints:44,position:3,age:27}],bracketC:[{id:"3",name:"Andrea Martinez",rating:"3.9",roundWins:3,roundLosses:1,winPoints:37,lossPoints:19,position:1,age:23},{id:"6",name:"Rachel Gonzalez",rating:"3.7",roundWins:2,roundLosses:2,winPoints:31,lossPoints:24,position:2,age:29},{id:"9",name:"Lisa Johnson",rating:"3.5",roundWins:1,roundLosses:3,winPoints:22,lossPoints:35,position:3,age:31}],bracketD:[{id:"10",name:"Sarah Kim",rating:"3.6",roundWins:3,roundLosses:1,winPoints:36,lossPoints:18,position:1,age:26},{id:"11",name:"Michelle Yang",rating:"3.4",roundWins:2,roundLosses:2,winPoints:25,lossPoints:29,position:2,age:28},{id:"12",name:"Victoria Huang",rating:"3.2",roundWins:1,roundLosses:3,winPoints:19,lossPoints:36,position:3,age:24}]},knockoutStage:{quarterFinals:[{id:"qf1",player1:{name:"Maria Santos",seed:"A1"},player2:{name:"Michelle Yang",seed:"D2"},score:"11-7, 11-9",winner:"player1",completed:!0},{id:"qf2",player1:{name:"Elena Cruz",seed:"B1"},player2:{name:"Rachel Gonzalez",seed:"C2"},score:"11-8, 11-6",winner:"player1",completed:!0},{id:"qf3",player1:{name:"Andrea Martinez",seed:"C1"},player2:{name:"Ana Reyes",seed:"A2"},score:"11-5, 11-8",winner:"player1",completed:!0},{id:"qf4",player1:{name:"Sarah Kim",seed:"D1"},player2:{name:"Carmen Lopez",seed:"B2"},score:"11-9, 11-7",winner:"player1",completed:!0}],semiFinals:[{id:"sf1",player1:{name:"Maria Santos",seed:"QF1"},player2:{name:"Elena Cruz",seed:"QF2"},score:"11-6, 11-8",winner:"player1",completed:!0},{id:"sf2",player1:{name:"Andrea Martinez",seed:"QF3"},player2:{name:"Sarah Kim",seed:"QF4"},score:"11-9, 11-5",winner:"player1",completed:!0}],final:{id:"final",player1:{name:"Maria Santos",seed:"SF1"},player2:{name:"Andrea Martinez",seed:"SF2"},score:"11-7, 11-9",winner:"player1",completed:!0},thirdPlace:{id:"thirdPlace",player1:{name:"Elena Cruz",seed:"SF1-L"},player2:{name:"Sarah Kim",seed:"SF2-L"},score:"11-4, 11-6",winner:"player1",completed:!0}}}},rules:["All matches follow official IFP rules","Players must check in 30 minutes before their scheduled match","Proper athletic attire and non-marking shoes required","No coaching allowed during matches"],amenities:["Parking","Restrooms","Food Court","Pro Shop","Air Conditioning"],brackets:[{id:"bracket-1",name:"Bracket A",maxPlayers:5,players:[{id:"1",name:'John "The Ace" Doe',status:"approved",rating:"4.5",team:"Manila Smashers"},{id:"8",name:"Elena Cruz",status:"approved",rating:"3.9",team:"Alabang Aces"},{id:"13",name:'James "Comet" Taylor',status:"approved",rating:"3.6",team:"Paranaque Phoenix"},{id:"16",name:'Sarah "Whirlwind" Kim',status:"approved",rating:"3.4",team:"Valenzuela Vipers"},{id:"17",name:"Alex Martinez",status:"approved",rating:"3.2",team:"Caloocan Cobras"}]},{id:"bracket-2",name:"Bracket B",maxPlayers:5,players:[{id:"2",name:"Maria Santos",status:"approved",rating:"4.3",team:"QC Warriors"},{id:"7",name:'Luis "Rocket" Chen',status:"approved",rating:"4.0",team:"Pasig Panthers"},{id:"12",name:'Patricia "Viper" Wong',status:"approved",rating:"3.7",team:"Mandaluyong Meteors"},{id:"14",name:'Lisa "Arrow" Johnson',status:"approved",rating:"3.5",team:"Las Pinas Lions"}]},{id:"bracket-3",name:"Bracket C",maxPlayers:5,players:[{id:"3",name:'Carlos "The Wall" Rodriguez',status:"approved",rating:"4.4",team:"BGC Titans"},{id:"9",name:'Roberto "Hammer" Kim',status:"approved",rating:"4.1",team:"Greenhills Gladiators"},{id:"11",name:'David "Spike" Park',status:"approved",rating:"4.0",team:"Cubao Crushers"},{id:"15",name:'Michael "Bolt" Chang',status:"approved",rating:"3.8",team:"Muntinlupa Mustangs"}]},{id:"bracket-4",name:"Bracket D",maxPlayers:5,players:[{id:"4",name:'Ana "Fire" Reyes',status:"approved",rating:"4.2",team:"Makati Sharks"},{id:"5",name:"Miguel Torres",status:"approved",rating:"4.6",team:"Ortigas Eagles"},{id:"6",name:'Sofia "Ice" Garcia',status:"approved",rating:"4.1",team:"Taguig Thunder"},{id:"10",name:'Carmen "Flash" Lopez',status:"approved",rating:"3.8",team:"Marikina Mavericks"},{id:"18",name:"Rachel Gonzalez",status:"approved",rating:"3.3",team:"Malabon Mako"}]}],registrations:[{id:"1",playerName:'John "The Ace" Doe',registeredAt:"2025-01-10T10:30:00Z",status:"approved",bracketId:"bracket-1",rating:"4.5",team:"Manila Smashers"},{id:"2",playerName:"Maria Santos",registeredAt:"2025-01-10T11:15:00Z",status:"approved",bracketId:"bracket-1",rating:"4.3",team:"QC Warriors"},{id:"3",playerName:'Carlos "The Wall" Rodriguez',registeredAt:"2025-01-10T14:20:00Z",status:"approved",bracketId:"bracket-1",rating:"4.4",team:"BGC Titans"},{id:"4",playerName:'Ana "Fire" Reyes',registeredAt:"2025-01-11T09:45:00Z",status:"approved",bracketId:"bracket-1",rating:"4.2",team:"Makati Sharks"},{id:"5",playerName:"Miguel Torres",registeredAt:"2025-01-11T13:10:00Z",status:"approved",bracketId:"bracket-1",rating:"4.6",team:"Ortigas Eagles"},{id:"6",playerName:'Sofia "Ice" Garcia',registeredAt:"2025-01-12T08:30:00Z",status:"approved",bracketId:"bracket-1",rating:"4.1",team:"Taguig Thunder"},{id:"7",playerName:'Luis "Rocket" Chen',registeredAt:"2025-01-12T16:45:00Z",status:"approved",bracketId:"bracket-2",rating:"4.0",team:"Pasig Panthers"},{id:"8",playerName:"Elena Cruz",registeredAt:"2025-01-13T12:00:00Z",status:"approved",bracketId:"bracket-2",rating:"3.9",team:"Alabang Aces"},{id:"9",playerName:'Roberto "Hammer" Kim',registeredAt:"2025-01-13T15:20:00Z",status:"approved",bracketId:"bracket-2",rating:"4.1",team:"Greenhills Gladiators"},{id:"10",playerName:'Carmen "Flash" Lopez',registeredAt:"2025-01-14T10:10:00Z",status:"approved",bracketId:"bracket-2",rating:"3.8",team:"Marikina Mavericks"},{id:"11",playerName:'David "Spike" Park',registeredAt:"2025-01-14T14:30:00Z",status:"approved",bracketId:"bracket-2",rating:"4.0",team:"Cubao Crushers"},{id:"12",playerName:'Patricia "Viper" Wong',registeredAt:"2025-01-15T09:00:00Z",status:"approved",bracketId:"bracket-2",rating:"3.7",team:"Mandaluyong Meteors"},{id:"13",playerName:'James "Comet" Taylor',registeredAt:"2025-01-15T11:30:00Z",status:"approved",bracketId:"bracket-3",rating:"3.6",team:"Paranaque Phoenix"},{id:"14",playerName:'Lisa "Arrow" Johnson',registeredAt:"2025-01-15T16:15:00Z",status:"approved",bracketId:"bracket-3",rating:"3.5",team:"Las Pinas Lions"},{id:"15",playerName:'Michael "Bolt" Chang',registeredAt:"2025-01-16T09:20:00Z",status:"approved",bracketId:"bracket-3",rating:"3.8",team:"Muntinlupa Mustangs"},{id:"16",playerName:'Sarah "Whirlwind" Kim',registeredAt:"2025-01-16T14:45:00Z",status:"approved",bracketId:"bracket-3",rating:"3.4",team:"Valenzuela Vipers"},{id:"17",playerName:"Alex Martinez",registeredAt:"2025-01-17T10:30:00Z",status:"approved",bracketId:"bracket-4",rating:"3.2",team:"Caloocan Cobras"},{id:"18",playerName:"Rachel Gonzalez",registeredAt:"2025-01-17T15:20:00Z",status:"approved",bracketId:"bracket-4",rating:"3.3",team:"Malabon Mako"},{id:"19",playerName:"Kevin Lim",registeredAt:"2025-01-18T09:15:00Z",status:"pending",bracketId:null,rating:"3.1",team:"Pasay Predators"},{id:"20",playerName:"Nina Cruz",registeredAt:"2025-01-18T11:30:00Z",status:"pending",bracketId:null,rating:"3.4",team:"Quezon Quakes"},{id:"21",playerName:"Tony Reyes",registeredAt:"2025-01-18T14:45:00Z",status:"pending",bracketId:null,rating:"3.6",team:"Masinag Magic"},{id:"22",playerName:"Grace Tan",registeredAt:"2025-01-18T16:20:00Z",status:"pending",bracketId:null,rating:"3.2",team:"Fairview Falcons"},{id:"23",playerName:"Mark Brown",registeredAt:"2025-01-19T10:00:00Z",status:"rejected",bracketId:null,rating:"2.5",team:"Independent",note:"Rating below minimum requirement"},{id:"24",playerName:"Jenny Davis",registeredAt:"2025-01-19T13:15:00Z",status:"rejected",bracketId:null,rating:"2.8",team:"Independent",note:"Incomplete documentation"}]},{id:"2",name:"Intermediate Skills Tournament",date:"2025-07-20T09:00:00Z",endDate:"2025-07-20T17:00:00Z",location:"Quezon City Sports Complex",address:"456 Sports St, Quezon City, Metro Manila",latitude:14.676,longitude:121.0437,entryFee:800,prizePool:2e4,maxParticipants:24,currentParticipants:24,registrationDeadline:"2025-06-20T23:59:59Z",bannerUrl:"https://images.unsplash.com/photo-1723004714201-cf224222b897?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",tier:2,tournamentType:"intermediate",description:"Perfect for developing players! This competitive tournament welcomes intermediate skill levels with a focus on improving gameplay and strategy.",contactEmail:"intermediate@philippinepickleball.com",contactPhone:"+63 912 345 6788",divisions:["Mixed Doubles","Men's Doubles","Women's Doubles"],tournamentCategories:{"mens-doubles-intermediate-18":{id:"mens-doubles-intermediate-18",name:"Men's Doubles Intermediate 18+",ageGroup:"18+",skillLevel:"Intermediate",participants:8,maxParticipants:8,prizePool:8e3,description:"Competitive men's doubles for intermediate-level players",groupStage:{bracketA:[{id:"1",name:"Mark Lee & Tony Yang",rating:"3.5",roundWins:3,roundLosses:1,winPoints:35,lossPoints:22,position:1,players:["Mark Lee","Tony Yang"]},{id:"2",name:"Kevin Ng & Daniel Ko",rating:"3.4",roundWins:2,roundLosses:2,winPoints:28,lossPoints:26,position:2,players:["Kevin Ng","Daniel Ko"]}],bracketB:[{id:"3",name:"Alex Chen & Ryan Lim",rating:"3.6",roundWins:4,roundLosses:0,winPoints:44,lossPoints:18,position:1,players:["Alex Chen","Ryan Lim"]},{id:"4",name:"Chris Wang & Ben Chua",rating:"3.2",roundWins:1,roundLosses:3,winPoints:20,lossPoints:35,position:2,players:["Chris Wang","Ben Chua"]}],bracketC:[{id:"5",name:"Jake Huang & Sam Choi",rating:"3.3",roundWins:3,roundLosses:1,winPoints:33,lossPoints:21,position:1,players:["Jake Huang","Sam Choi"]},{id:"6",name:"Eric Goh & Gary Yap",rating:"3.1",roundWins:2,roundLosses:2,winPoints:25,lossPoints:28,position:2,players:["Eric Goh","Gary Yap"]}],bracketD:[{id:"7",name:"Ken Lai & Max Teo",rating:"3.0",roundWins:2,roundLosses:2,winPoints:29,lossPoints:27,position:1,players:["Ken Lai","Max Teo"]},{id:"8",name:"Ivan Soh & Oscar Chia",rating:"2.9",roundWins:1,roundLosses:3,winPoints:18,lossPoints:33,position:2,players:["Ivan Soh","Oscar Chia"]}]},knockoutStage:{quarterFinals:[{id:"qf1",player1:{name:"Mark & Tony",seed:"A1"},player2:{name:"Ivan & Oscar",seed:"D2"},score:"11-6, 11-8",winner:"player1",completed:!0},{id:"qf2",player1:{name:"Alex & Ryan",seed:"B1"},player2:{name:"Eric & Gary",seed:"C2"},score:"11-9, 11-7",winner:"player1",completed:!0},{id:"qf3",player1:{name:"Jake & Sam",seed:"C1"},player2:{name:"Chris & Ben",seed:"B2"},score:"11-5, 11-10",winner:"player1",completed:!0},{id:"qf4",player1:{name:"Ken & Max",seed:"D1"},player2:{name:"Kevin & Daniel",seed:"A2"},score:"11-8, 11-6",winner:"player2",completed:!0}],semiFinals:[{id:"sf1",player1:{name:"Mark & Tony",seed:"QF1"},player2:{name:"Alex & Ryan",seed:"QF2"},score:"11-7, 11-9",winner:"player1",completed:!0},{id:"sf2",player1:{name:"Jake & Sam",seed:"QF3"},player2:{name:"Kevin & Daniel",seed:"QF4"},score:"11-6, 11-8",winner:"player1",completed:!0}],final:{id:"final",player1:{name:"Mark & Tony",seed:"SF1"},player2:{name:"Jake & Sam",seed:"SF2"},score:"11-9, 11-7",winner:"player1",completed:!0},thirdPlace:{id:"thirdPlace",player1:{name:"Alex & Ryan",seed:"SF1-L"},player2:{name:"Kevin & Daniel",seed:"SF2-L"},score:"11-4, 11-6",winner:"player1",completed:!0}}},"t3-womens-doubles":{id:"t3-womens-doubles",name:"Women's Doubles Intermediate 18+",ageGroup:"18+",skillLevel:"Intermediate",icon:"👭",participants:8,maxParticipants:8,prizePool:7e3,description:"Women's doubles competition for developing players",groupStage:{bracketA:[{id:"1",name:"Maya & Nina",rating:"3.3",wins:1,points:3,position:1,players:["Maya Patel","Nina Xu"]},{id:"2",name:"Grace & Amy",rating:"3.2",wins:1,points:3,position:2,players:["Grace Liu","Amy Zhao"]}],bracketB:[{id:"3",name:"Jenny & Emma",rating:"3.4",wins:1,points:3,position:1,players:["Jenny Wu","Emma Zhou"]},{id:"4",name:"Coco & Fiona",rating:"3.0",wins:1,points:3,position:2,players:["Coco Tan","Fiona Ong"]}],bracketC:[{id:"5",name:"Diana & Lisa",rating:"3.2",wins:1,points:3,position:1,players:["Diana Tan","Lisa Park"]},{id:"6",name:"Helen & Joy",rating:"2.9",wins:1,points:3,position:2,players:["Helen Low","Joy Koh"]}],bracketD:[{id:"7",name:"Lily & Nora",rating:"2.8",wins:1,points:3,position:1,players:["Lily Sim","Nora Wee"]},{id:"8",name:"Sarah & Priya",rating:"3.1",wins:1,points:3,position:2,players:["Sarah Kim","Priya Singh"]}]},knockoutStage:{quarterFinals:[{id:"qf1",player1:{name:"Maya & Nina",seed:"A1"},player2:{name:"Sarah & Priya",seed:"D2"},score:"11-8, 11-6",winner:"player1",completed:!0},{id:"qf2",player1:{name:"Jenny & Emma",seed:"B1"},player2:{name:"Helen & Joy",seed:"C2"},score:"11-5, 11-7",winner:"player1",completed:!0},{id:"qf3",player1:{name:"Diana & Lisa",seed:"C1"},player2:{name:"Coco & Fiona",seed:"B2"},score:"11-9, 11-8",winner:"player1",completed:!0},{id:"qf4",player1:{name:"Lily & Nora",seed:"D1"},player2:{name:"Grace & Amy",seed:"A2"},score:"11-7, 11-9",winner:"player2",completed:!0}],semiFinals:[{id:"sf1",player1:{name:"Maya & Nina",seed:"QF1"},player2:{name:"Jenny & Emma",seed:"QF2"},score:"11-6, 11-9",winner:"player1",completed:!0},{id:"sf2",player1:{name:"Diana & Lisa",seed:"QF3"},player2:{name:"Grace & Amy",seed:"QF4"},score:"11-8, 11-7",winner:"player1",completed:!0}],final:{id:"final",player1:{name:"Maya & Nina",seed:"SF1"},player2:{name:"Diana & Lisa",seed:"SF2"},score:"11-9, 11-8",winner:"player1",completed:!0},thirdPlace:{id:"thirdPlace",player1:{name:"Jenny & Emma",seed:"SF1-L"},player2:{name:"Grace & Amy",seed:"SF2-L"},score:"11-5, 11-7",winner:"player1",completed:!0}}},"mixed-doubles":{id:"mixed-doubles",name:"Mixed Doubles Intermediate 18+",ageGroup:"18+",skillLevel:"Intermediate",icon:"👫",participants:8,maxParticipants:8,prizePool:5e3,description:"Fun and competitive mixed doubles for all skill levels"}},rules:["Open to players with 1-3 years experience","Standard scoring system applies","Limited coaching allowed between games","Emphasis on competitive play and sportsmanship"],amenities:["Parking","Restrooms","Refreshments"],brackets:[{id:"bracket-1",name:"Bracket A",maxPlayers:6,players:[{id:"1",name:"Sarah Kim",status:"approved",rating:"3.2",team:"QC Slammers"},{id:"9",name:"Priya Singh",status:"approved",rating:"3.1",team:"BGC Breakers"},{id:"13",name:"Grace Liu",status:"approved",rating:"3.4",team:"Makati Movers"},{id:"19",name:"Amy Zhao",status:"approved",rating:"3.0",team:"Ortigas Owls"},{id:"21",name:"Coco Tan",status:"approved",rating:"3.3",team:"Taguig Tigers"},{id:"24",name:"Gary Yap",status:"approved",rating:"3.2",team:"Pasig Pirates"}]},{id:"bracket-2",name:"Bracket B",maxPlayers:6,players:[{id:"2",name:"Mark Lee",status:"approved",rating:"3.5",team:"Manila Mayhem"},{id:"7",name:"Maya Patel",status:"approved",rating:"3.3",team:"Alabang Aces"},{id:"14",name:"Tony Yang",status:"approved",rating:"3.1",team:"Greenhills Giants"},{id:"17",name:"Nina Xu",status:"approved",rating:"3.4",team:"Marikina Magic"},{id:"20",name:"Ben Chua",status:"approved",rating:"3.2",team:"Cubao Cyclones"},{id:"23",name:"Fiona Ong",status:"approved",rating:"3.0",team:"Mandaluyong Meteors"}]},{id:"bracket-3",name:"Bracket C",maxPlayers:6,players:[{id:"3",name:"Jenny Wu",status:"approved",rating:"3.3",team:"Paranaque Panthers"},{id:"8",name:"Kevin Ng",status:"approved",rating:"3.4",team:"Las Pinas Lions"},{id:"12",name:"Daniel Ko",status:"approved",rating:"3.1",team:"Muntinlupa Mustangs"},{id:"15",name:"Emma Zhou",status:"approved",rating:"3.5",team:"Valenzuela Vipers"},{id:"18",name:"Sam Choi",status:"approved",rating:"3.2",team:"Caloocan Cobras"},{id:"22",name:"Eric Goh",status:"approved",rating:"3.3",team:"Malabon Mako"}]},{id:"bracket-4",name:"Bracket D",maxPlayers:6,players:[{id:"4",name:"Alex Chen",status:"approved",rating:"3.6",team:"Pasay Predators"},{id:"5",name:"Diana Tan",status:"approved",rating:"3.2",team:"Quezon Quakes"},{id:"6",name:"Ryan Lim",status:"approved",rating:"3.4",team:"Masinag Magic"},{id:"10",name:"Chris Wang",status:"approved",rating:"3.1",team:"Fairview Falcons"},{id:"11",name:"Lisa Park",status:"approved",rating:"3.5",team:"Antipolo Arrows"},{id:"16",name:"Jake Huang",status:"approved",rating:"3.3",team:"San Juan Spartans"}]}],registrations:Array.from({length:32},(T,ne)=>({id:(ne+1).toString(),playerName:["Sarah Kim","Mark Lee","Jenny Wu","Alex Chen","Diana Tan","Ryan Lim","Maya Patel","Kevin Ng","Priya Singh","Chris Wang","Lisa Park","Daniel Ko","Grace Liu","Tony Yang","Emma Zhou","Jake Huang","Nina Xu","Sam Choi","Amy Zhao","Ben Chua","Coco Tan","Eric Goh","Fiona Ong","Gary Yap","Helen Low","Ivan Soh","Joy Koh","Ken Lai","Lily Sim","Max Teo","Nora Wee","Oscar Chia"][ne],registeredAt:new Date(Date.now()-(32-ne)*24*60*60*1e3).toISOString(),status:ne<24?"approved":"pending",bracketId:ne<24?`bracket-${Math.floor(ne/6)+1}`:null})),tournamentBracket:{groupStage:{bracketA:[{id:"1",name:"Sarah Kim",rating:"3.2",wins:5,points:15,position:1},{id:"9",name:"Priya Singh",rating:"3.1",wins:4,points:12,position:2},{id:"13",name:"Grace Liu",rating:"3.4",wins:3,points:9,position:3},{id:"19",name:"Amy Zhao",rating:"3.0",wins:2,points:6,position:4},{id:"21",name:"Coco Tan",rating:"3.3",wins:1,points:3,position:5},{id:"24",name:"Gary Yap",rating:"3.2",wins:0,points:0,position:6}],bracketB:[{id:"2",name:"Mark Lee",rating:"3.5",wins:4,points:12,position:1},{id:"7",name:"Maya Patel",rating:"3.3",wins:4,points:12,position:2},{id:"14",name:"Tony Yang",rating:"3.1",wins:3,points:9,position:3},{id:"17",name:"Nina Xu",rating:"3.4",wins:2,points:6,position:4},{id:"20",name:"Ben Chua",rating:"3.2",wins:1,points:3,position:5},{id:"23",name:"Fiona Ong",rating:"3.0",wins:0,points:0,position:6}],bracketC:[{id:"3",name:"Jenny Wu",rating:"3.3",wins:5,points:15,position:1},{id:"8",name:"Kevin Ng",rating:"3.4",wins:3,points:9,position:2},{id:"12",name:"Daniel Ko",rating:"3.1",wins:3,points:9,position:3},{id:"15",name:"Emma Zhou",rating:"3.5",wins:2,points:6,position:4},{id:"18",name:"Sam Choi",rating:"3.2",wins:1,points:3,position:5},{id:"22",name:"Eric Goh",rating:"3.3",wins:0,points:0,position:6}],bracketD:[{id:"4",name:"Alex Chen",rating:"3.6",wins:4,points:12,position:1},{id:"5",name:"Diana Tan",rating:"3.2",wins:4,points:12,position:2},{id:"6",name:"Ryan Lim",rating:"3.4",wins:3,points:9,position:3},{id:"10",name:"Chris Wang",rating:"3.1",wins:2,points:6,position:4},{id:"11",name:"Lisa Park",rating:"3.5",wins:1,points:3,position:5},{id:"16",name:"Jake Huang",rating:"3.3",wins:0,points:0,position:6}]},knockoutStage:{quarterFinals:[{id:"qf1",player1:{name:"Sarah Kim",seed:"A1"},player2:{name:"Kevin Ng",seed:"C2"},score:"11-9, 11-7",winner:"player1",completed:!0},{id:"qf2",player1:{name:"Mark Lee",seed:"B1"},player2:{name:"Diana Tan",seed:"D2"},score:"11-6, 11-8",winner:"player1",completed:!0},{id:"qf3",player1:{name:"Jenny Wu",seed:"C1"},player2:{name:"Priya Singh",seed:"A2"},score:"11-4, 11-6",winner:"player1",completed:!0},{id:"qf4",player1:{name:"Alex Chen",seed:"D1"},player2:{name:"Maya Patel",seed:"B2"},score:"11-8, 11-10",winner:"player1",completed:!0}],semiFinals:[{id:"sf1",player1:{name:"Sarah Kim",seed:"QF1"},player2:{name:"Mark Lee",seed:"QF2"},score:"11-7, 11-9",winner:"player1",completed:!0},{id:"sf2",player1:{name:"Jenny Wu",seed:"QF3"},player2:{name:"Alex Chen",seed:"QF4"},score:"11-9, 11-6",winner:"player1",completed:!0}],final:{id:"final",player1:{name:"Sarah Kim",seed:"SF1"},player2:{name:"Jenny Wu",seed:"SF2"},score:"11-9, 11-8",winner:"player1",completed:!0},thirdPlace:{id:"thirdPlace",player1:{name:"Mark Lee",seed:"SF1-L"},player2:{name:"Alex Chen",seed:"SF2-L"},score:"11-4, 11-7",winner:"player1",completed:!0}}}},{id:"3",name:"Indoor Championship Series",date:"2025-07-01T09:00:00Z",endDate:"2025-07-02T18:00:00Z",location:"BGC Indoor Sports Complex",address:"789 Bonifacio Global City, Taguig, Metro Manila",latitude:14.5515,longitude:121.047,entryFee:2e3,prizePool:75e3,maxParticipants:16,currentParticipants:15,registrationDeadline:"2025-06-15T23:59:59Z",bannerUrl:"https://plus.unsplash.com/premium_photo-1709048991290-1d36455a2895?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",tier:3,tournamentType:"advanced",description:"High-level competition in a premium indoor facility. This tournament features the best players and highest prize pool of the season.",contactEmail:"indoor@philippinepickleball.com",contactPhone:"+63 912 345 6787",divisions:["Men's Singles","Women's Singles","Men's Doubles","Women's Doubles","Mixed Doubles","Senior Doubles"],tournamentCategories:{"mens-singles-advanced-35":{id:"mens-singles-advanced-35",name:"Men's Singles Advanced 35+",ageGroup:"35+",skillLevel:"Advanced",icon:"🏆",participants:16,maxParticipants:16,prizePool:3e4,description:"Elite men's singles competition for advanced players",groupStage:{bracketA:[{id:"1",name:"Michael Johnson",rating:"4.8",roundWins:3,roundLosses:1,winPoints:37,lossPoints:19,position:1,age:38},{id:"2",name:"Anthony Chen",rating:"4.5",roundWins:2,roundLosses:2,winPoints:32,lossPoints:28,position:2,age:42}],bracketB:[{id:"3",name:"Andrea Martinez",rating:"4.7",roundWins:4,roundLosses:0,winPoints:44,lossPoints:15,position:1,age:36},{id:"4",name:"Marcus Tan",rating:"4.4",roundWins:1,roundLosses:3,winPoints:22,lossPoints:39,position:2,age:40}],bracketC:[{id:"5",name:"Jason Park",rating:"4.6",roundWins:3,roundLosses:1,winPoints:35,lossPoints:21,position:1,age:39},{id:"6",name:"Vanessa Liu",rating:"4.4",roundWins:2,roundLosses:2,winPoints:28,lossPoints:30,position:2,age:37}],bracketD:[{id:"7",name:"Rachel Kim",rating:"4.5",roundWins:4,roundLosses:0,winPoints:44,lossPoints:12,position:1,age:35},{id:"8",name:"Steven Wong",rating:"4.3",roundWins:0,roundLosses:4,winPoints:18,lossPoints:44,position:2,age:41}]},knockoutStage:{quarterFinals:[{id:"qf1",player1:{name:"Michael Johnson",seed:"A1"},player2:{name:"Steven Wong",seed:"D2"},score:"11-7, 11-9",winner:"player1",completed:!0},{id:"qf2",player1:{name:"Andrea Martinez",seed:"B1"},player2:{name:"Vanessa Liu",seed:"C2"},score:"11-5, 11-8",winner:"player1",completed:!0},{id:"qf3",player1:{name:"Jason Park",seed:"C1"},player2:{name:"Marcus Tan",seed:"B2"},score:"11-9, 11-6",winner:"player1",completed:!0},{id:"qf4",player1:{name:"Rachel Kim",seed:"D1"},player2:{name:"Anthony Chen",seed:"A2"},score:"11-8, 11-7",winner:"player1",completed:!0}],semiFinals:[{id:"sf1",player1:{name:"Michael Johnson",seed:"QF1"},player2:{name:"Andrea Martinez",seed:"QF2"},score:"11-9, 11-8",winner:"player1",completed:!0},{id:"sf2",player1:{name:"Jason Park",seed:"QF3"},player2:{name:"Rachel Kim",seed:"QF4"},score:"11-6, 11-10",winner:"player1",completed:!0}],final:{id:"final",player1:{name:"Michael Johnson",seed:"SF1"},player2:{name:"Jason Park",seed:"SF2"},score:"11-8, 11-9",winner:"player1",completed:!0},thirdPlace:{id:"thirdPlace",player1:{name:"Andrea Martinez",seed:"SF1-L"},player2:{name:"Rachel Kim",seed:"SF2-L"},score:"11-5, 11-9",winner:"player1",completed:!0}}},"t4-womens-singles":{id:"t4-womens-singles",name:"Women's Singles Advanced 18+",ageGroup:"18+",skillLevel:"Advanced",icon:"👩",participants:8,maxParticipants:12,prizePool:25e3,description:"High-level women's singles championship",groupStage:{bracketA:[{id:"1",name:"Amanda Yeh",rating:"4.3",roundWins:3,roundLosses:1,winPoints:37,lossPoints:19,position:1,age:25},{id:"2",name:"Victoria Huang",rating:"4.1",roundWins:2,roundLosses:2,winPoints:28,lossPoints:30,position:2,age:24}],bracketB:[{id:"3",name:"Michelle Yang",rating:"4.1",roundWins:4,roundLosses:0,winPoints:44,lossPoints:15,position:1,age:28},{id:"4",name:"Catherine Lee",rating:"4.2",roundWins:1,roundLosses:3,winPoints:22,lossPoints:38,position:2,age:26}],bracketC:[{id:"5",name:"Jonathan Wu",rating:"4.2",roundWins:3,roundLosses:1,winPoints:35,lossPoints:21,position:1,age:27},{id:"6",name:"Patrick Lim",rating:"4.2",roundWins:2,roundLosses:2,winPoints:26,lossPoints:28,position:2,age:29}],bracketD:[{id:"7",name:"Brandon Choi",rating:"4.1",roundWins:2,roundLosses:2,winPoints:31,lossPoints:25,position:1,age:30},{id:"8",name:"Daniel Ko",rating:"3.9",roundWins:1,roundLosses:3,winPoints:19,lossPoints:35,position:2,age:28}]},knockoutStage:{quarterFinals:[{id:"qf1",player1:{name:"Amanda Yeh",seed:"A1"},player2:{name:"Daniel Ko",seed:"D2"},score:"11-6, 11-8",winner:"player1",completed:!0},{id:"qf2",player1:{name:"Michelle Yang",seed:"B1"},player2:{name:"Patrick Lim",seed:"C2"},score:"11-9, 11-7",winner:"player1",completed:!0},{id:"qf3",player1:{name:"Jonathan Wu",seed:"C1"},player2:{name:"Catherine Lee",seed:"B2"},score:"11-5, 11-8",winner:"player1",completed:!0},{id:"qf4",player1:{name:"Brandon Choi",seed:"D1"},player2:{name:"Victoria Huang",seed:"A2"},score:"11-7, 11-9",winner:"player1",completed:!0}],semiFinals:[{id:"sf1",player1:{name:"Amanda Yeh",seed:"QF1"},player2:{name:"Michelle Yang",seed:"QF2"},score:"11-8, 11-6",winner:"player1",completed:!0},{id:"sf2",player1:{name:"Jonathan Wu",seed:"QF3"},player2:{name:"Brandon Choi",seed:"QF4"},score:"11-9, 11-7",winner:"player1",completed:!0}],final:{id:"final",player1:{name:"Amanda Yeh",seed:"SF1"},player2:{name:"Jonathan Wu",seed:"SF2"},score:"11-7, 11-9",winner:"player1",completed:!0},thirdPlace:{id:"thirdPlace",player1:{name:"Michelle Yang",seed:"SF1-L"},player2:{name:"Brandon Choi",seed:"SF2-L"},score:"11-4, 11-6",winner:"player1",completed:!0}}},"senior-doubles":{id:"senior-doubles",name:"Mixed Doubles Open 50+",ageGroup:"50+",skillLevel:"Open",icon:"🎖️",participants:6,prizePool:2e4,description:"Competitive doubles for experienced senior players",groupStage:{bracketA:[{id:"1",name:"Robert & James Sr.",rating:"4.0",wins:2,points:6,position:1,players:["Robert Senior","James Wilson Sr."],ages:[45,48]},{id:"2",name:"Frank & Thomas",rating:"3.8",wins:1,points:3,position:2,players:["Frank Miller","Thomas Brown"],ages:[42,44]},{id:"3",name:"William & Charles",rating:"3.6",wins:0,points:0,position:3,players:["William Davis","Charles Garcia"],ages:[41,43]}],bracketB:[{id:"4",name:"Richard & Joseph",rating:"3.9",wins:2,points:6,position:1,players:["Richard Taylor","Joseph Anderson"],ages:[46,47]},{id:"5",name:"Paul & Mark Sr.",rating:"3.7",wins:1,points:3,position:2,players:["Paul Martinez","Mark Rodriguez Sr."],ages:[40,45]},{id:"6",name:"Donald & Kenneth",rating:"3.5",wins:0,points:0,position:3,players:["Donald Wilson","Kenneth Lee"],ages:[44,42]}]},knockoutStage:{quarterFinals:[{id:"qf1",player1:{name:"Robert & James Sr.",seed:"A1"},player2:{name:"Paul & Mark Sr.",seed:"B2"},score:"11-8, 11-6",winner:"player1",completed:!0},{id:"qf2",player1:{name:"Richard & Joseph",seed:"B1"},player2:{name:"Frank & Thomas",seed:"A2"},score:"11-9, 11-7",winner:"player1",completed:!0}],semiFinals:[{id:"sf1",player1:{name:"Robert & James Sr.",seed:"QF1"},player2:{name:"Richard & Joseph",seed:"QF2"},score:"11-9, 11-8",winner:"player1",completed:!0}],final:{id:"final",player1:{name:"Robert & James Sr.",seed:"SF1"},player2:{name:"Richard & Joseph",seed:"SF1-L"},score:"11-7, 11-9",winner:"player1",completed:!0}}}},rules:["USAPA tournament rules strictly enforced","Seeded bracket based on ratings","No timeouts allowed","Professional referees for all matches"],amenities:["Valet Parking","VIP Lounge","Live Streaming","Professional Photography","Medical Support"],brackets:[{id:"bracket-1",name:"Bracket A",maxPlayers:4,players:[{id:"1",name:"Michael Johnson",status:"approved",rating:"4.8",team:"Elite Manila"},{id:"7",name:"Anthony Chen",status:"approved",rating:"4.5",team:"BGC Pros"},{id:"14",name:"Amanda Yeh",status:"approved",rating:"4.3",team:"Makati Masters"},{id:"18",name:"Victoria Huang",status:"approved",rating:"4.1",team:"Ortigas Elite"}]},{id:"bracket-2",name:"Bracket B",maxPlayers:4,players:[{id:"2",name:"Andrea Martinez",status:"approved",rating:"4.7",team:"QC Champions"},{id:"9",name:"Marcus Tan",status:"approved",rating:"4.4",team:"Pasig Powerhouse"},{id:"13",name:"Jonathan Wu",status:"approved",rating:"4.2",team:"Alabang All-Stars"},{id:"16",name:"Michelle Yang",status:"approved",rating:"4.1",team:"Greenhills Gladiators"}]},{id:"bracket-3",name:"Bracket C",maxPlayers:4,players:[{id:"3",name:"Jason Park",status:"approved",rating:"4.6",team:"Cubao Crushers"},{id:"8",name:"Vanessa Liu",status:"approved",rating:"4.4",team:"Mandaluyong Meteors"},{id:"11",name:"Patrick Lim",status:"approved",rating:"4.2",team:"Paranaque Phoenixes"},{id:"15",name:"Brandon Choi",status:"approved",rating:"4.1",team:"Las Pinas Legends"}]},{id:"bracket-4",name:"Bracket D",maxPlayers:4,players:[{id:"4",name:"Rachel Kim",status:"approved",rating:"4.5",team:"Valenzuela Vipers"},{id:"5",name:"Steven Wong",status:"approved",rating:"4.3",team:"Caloocan Cobras"},{id:"6",name:"Catherine Lee",status:"approved",rating:"4.2",team:"Malabon Mako"}]}],registrations:Array.from({length:85},(T,ne)=>({id:(ne+1).toString(),playerName:`Player ${ne+1}`,registeredAt:new Date(Date.now()-(85-ne)*12*60*60*1e3).toISOString(),status:ne<20?"approved":ne<65?"pending":"rejected",bracketId:ne<20?`bracket-${Math.floor(ne/6)+1}`:null})),tournamentBracket:{groupStage:{bracketA:[{id:"1",name:"Michael Johnson",rating:"4.8",wins:3,points:9,position:1},{id:"7",name:"Anthony Chen",rating:"4.5",wins:3,points:9,position:2},{id:"14",name:"Amanda Yeh",rating:"4.3",wins:2,points:6,position:3},{id:"18",name:"Victoria Huang",rating:"4.1",wins:0,points:0,position:4}],bracketB:[{id:"2",name:"Andrea Martinez",rating:"4.7",wins:3,points:9,position:1},{id:"9",name:"Marcus Tan",rating:"4.4",wins:2,points:6,position:2},{id:"13",name:"Jonathan Wu",rating:"4.2",wins:2,points:6,position:3},{id:"16",name:"Michelle Yang",rating:"4.1",wins:0,points:0,position:4}],bracketC:[{id:"3",name:"Jason Park",rating:"4.6",wins:3,points:9,position:1},{id:"8",name:"Vanessa Liu",rating:"4.4",wins:2,points:6,position:2},{id:"11",name:"Patrick Lim",rating:"4.2",wins:1,points:3,position:3},{id:"15",name:"Brandon Choi",rating:"4.1",wins:0,points:0,position:4}],bracketD:[{id:"4",name:"Rachel Kim",rating:"4.5",wins:2,points:6,position:1},{id:"5",name:"Steven Wong",rating:"4.3",wins:2,points:6,position:2},{id:"6",name:"Catherine Lee",rating:"4.2",wins:1,points:3,position:3}]},knockoutStage:{quarterFinals:[{id:"qf1",player1:{name:"Michael Johnson",seed:"A1"},player2:{name:"Vanessa Liu",seed:"C2"},score:"11-7, 11-9",winner:"player1",completed:!0},{id:"qf2",player1:{name:"Andrea Martinez",seed:"B1"},player2:{name:"Steven Wong",seed:"D2"},score:"11-5, 11-8",winner:"player1",completed:!0},{id:"qf3",player1:{name:"Jason Park",seed:"C1"},player2:{name:"Anthony Chen",seed:"A2"},score:"11-9, 9-11, 11-6",winner:"player1",completed:!0},{id:"qf4",player1:{name:"Rachel Kim",seed:"D1"},player2:{name:"Marcus Tan",seed:"B2"},score:"11-8, 11-7",winner:"player1",completed:!0}],semiFinals:[{id:"sf1",player1:{name:"Michael Johnson",seed:"QF1"},player2:{name:"Andrea Martinez",seed:"QF2"},score:"11-9, 11-8",winner:"player1",completed:!0},{id:"sf2",player1:{name:"Jason Park",seed:"QF3"},player2:{name:"Rachel Kim",seed:"QF4"},score:"11-6, 11-10",winner:"player1",completed:!0}],final:{id:"final",player1:{name:"Michael Johnson",seed:"SF1"},player2:{name:"Jason Park",seed:"SF2"},score:"11-8, 11-9",winner:"player1",completed:!0},thirdPlace:{id:"thirdPlace",player1:{name:"Andrea Martinez",seed:"SF1-L"},player2:{name:"Rachel Kim",seed:"SF2-L"},score:"11-5, 11-9",winner:"player1",completed:!0}}}},{id:"4",name:"Beginner Friendly Tournament",date:"2025-06-05T09:00:00Z",endDate:"2025-06-05T16:00:00Z",location:"Community Recreation Center",address:"789 Beginner Lane, Pasig City, Metro Manila",latitude:14.5696,longitude:121.0874,entryFee:300,prizePool:5e3,maxParticipants:16,currentParticipants:12,registrationDeadline:"2025-05-25T23:59:59Z",bannerUrl:"https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",tier:1,tournamentType:"beginner",description:"Perfect for newcomers to pickleball! This beginner-friendly tournament welcomes players who are just learning the game. Great atmosphere for first-time competitors.",contactEmail:"beginner@philippinepickleball.com",contactPhone:"+63 912 345 6789",divisions:["Mixed Doubles","Men's Doubles","Women's Doubles"],tournamentCategories:{"mixed-doubles-beginner-18":{id:"mixed-doubles-beginner-18",name:"Mixed Doubles Beginner 18+",ageGroup:"18+",skillLevel:"Beginner",participants:8,maxParticipants:8,prizePool:3e3,description:"Fun and welcoming mixed doubles for beginners",groupStage:{bracketA:[{name:"James Wilson & Lisa Chen",roundWins:2,roundLosses:1,winPoints:63,lossPoints:58},{name:"Mark Torres & Sarah Kim",roundWins:2,roundLosses:1,winPoints:61,lossPoints:59},{name:"Alex Rivera & Emma Davis",roundWins:1,roundLosses:2,winPoints:58,lossPoints:62},{name:"Chris Lee & Nina Lopez",roundWins:1,roundLosses:2,winPoints:56,lossPoints:64}],bracketB:[{name:"David Park & Amy Wong",roundWins:3,roundLosses:0,winPoints:66,lossPoints:44},{name:"Tom Garcia & Jen Liu",roundWins:2,roundLosses:1,winPoints:58,lossPoints:56},{name:"Ryan Ng & Kate Miller",roundWins:1,roundLosses:2,winPoints:52,lossPoints:60},{name:"Sam Cruz & Mia Taylor",roundWins:0,roundLosses:3,winPoints:48,lossPoints:66}]},singleElimination:{semifinals:{sf1:{id:"sf1",player1:{name:"James Wilson & Lisa Chen",seed:"A1"},player2:{name:"Tom Garcia & Jen Liu",seed:"B2"},score:"11-8, 11-6",winner:"player1",completed:!0},sf2:{id:"sf2",player1:{name:"David Park & Amy Wong",seed:"B1"},player2:{name:"Mark Torres & Sarah Kim",seed:"A2"},score:"11-9, 8-11, 11-7",winner:"player1",completed:!0}},finals:{id:"finals",player1:{name:"James Wilson & Lisa Chen",seed:"SF1-W"},player2:{name:"David Park & Amy Wong",seed:"SF2-W"},score:"11-13, 11-9, 11-8",winner:"player2",completed:!0},thirdPlace:{id:"thirdPlace",player1:{name:"Tom Garcia & Jen Liu",seed:"SF1-L"},player2:{name:"Mark Torres & Sarah Kim",seed:"SF2-L"},score:"11-6, 11-4",winner:"player1",completed:!0}}},"mens-doubles-beginner-18":{id:"mens-doubles-beginner-18",name:"Men's Doubles Beginner 18+",ageGroup:"18+",skillLevel:"Beginner",participants:8,maxParticipants:8,prizePool:2e3,description:"Entry-level men's doubles perfect for new players",groupStage:{bracketA:[{name:"John Smith & Mike Johnson",roundWins:2,roundLosses:1,winPoints:59,lossPoints:55},{name:"Steve Davis & Paul Wilson",roundWins:2,roundLosses:1,winPoints:57,lossPoints:58},{name:"Rich Martinez & Tony Chen",roundWins:1,roundLosses:2,winPoints:54,lossPoints:60},{name:"Ben Lee & Dan Garcia",roundWins:1,roundLosses:2,winPoints:53,lossPoints:61}],bracketB:[{name:"Carlos Torres & Jim Kim",roundWins:3,roundLosses:0,winPoints:66,lossPoints:48},{name:"Rob Taylor & Ed Liu",roundWins:2,roundLosses:1,winPoints:58,lossPoints:54},{name:"Matt Cruz & Joe Park",roundWins:1,roundLosses:2,winPoints:52,lossPoints:58},{name:"Sam Wong & Alex Ng",roundWins:0,roundLosses:3,winPoints:46,lossPoints:66}]},singleElimination:{semifinals:{sf1:{id:"sf1",player1:{name:"John Smith & Mike Johnson",seed:"A1"},player2:{name:"Rob Taylor & Ed Liu",seed:"B2"},score:"11-7, 11-9",winner:"player1",completed:!0},sf2:{id:"sf2",player1:{name:"Carlos Torres & Jim Kim",seed:"B1"},player2:{name:"Steve Davis & Paul Wilson",seed:"A2"},score:"11-6, 11-8",winner:"player1",completed:!0}},finals:{id:"finals",player1:{name:"John Smith & Mike Johnson",seed:"SF1-W"},player2:{name:"Carlos Torres & Jim Kim",seed:"SF2-W"},score:"9-11, 11-7, 11-9",winner:"player2",completed:!0},thirdPlace:{id:"thirdPlace",player1:{name:"Rob Taylor & Ed Liu",seed:"SF1-L"},player2:{name:"Steve Davis & Paul Wilson",seed:"SF2-L"},score:"11-8, 11-6",winner:"player1",completed:!0}}}},rules:["Professional referees for all matches"],amenities:[]},{id:"team-championship-2024",name:"Team Championship 2024",date:"2024-06-20T09:00:00Z",endDate:"2024-06-21T18:00:00Z",location:"Metro Sports Arena",address:"789 Team Sports Blvd, Metro City, CA 90210",latitude:34.0522,longitude:-118.2437,status:"upcoming",entryFee:3e3,prizePool:75e3,maxParticipants:48,currentParticipants:18,tournamentType:"open",tier:2,description:"The ultimate team pickleball championship featuring 4-player teams competing in multiple formats. Teams will compete in singles, doubles, and mixed doubles matches with cumulative scoring to determine the champion team.",bannerUrl:"https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",registrationDeadline:"2024-06-15T23:59:59Z",contactEmail:"teams@metropickleball.com",contactPhone:"+1 (555) 123-4567",organizer:"Metro Pickleball Association",organizerProfile:{name:"Metro Pickleball Association",email:"teams@metropickleball.com",phone:"+1 (555) 123-4567",bio:"Leading organizer of team-based pickleball tournaments in the metro area."},rules:["Teams must arrive 60 minutes before first scheduled match"],amenities:[],tournamentCategories:{"team-open":{id:"team-open",name:"Team Open Division",skillLevel:"Open",tier:2,prizePool:45e3,participants:12,maxParticipants:16,ageGroup:"18+",registrations:[{id:"team1",name:"Thunder Bolts",members:["Mike Johnson","Sarah Davis","Alex Chen","Maria Rodriguez"],status:"approved",rating:"4.2",seed:1},{id:"team2",name:"Net Ninjas",members:["David Kim","Lisa Wong","Carlos Martinez","Emma Thompson"],status:"approved",rating:"4.0",seed:2},{id:"team3",name:"Court Crushers",members:["Ryan Lee","Jessica Park","Antonio Garcia","Nicole Brown"],status:"approved",rating:"3.9",seed:3}],brackets:{"round-1":[{id:"teammatch1",team1:"Thunder Bolts",team2:"Net Ninjas",score:"TBD",winner:null,court:1,time:"9:00 AM"},{id:"teammatch2",team1:"Court Crushers",team2:"TBD",score:"TBD",winner:null,court:2,time:"9:00 AM"}],semifinals:[{id:"teammatch3",team1:"TBD",team2:"TBD",score:"TBD",winner:null,court:1,time:"2:00 PM"}],finals:[{id:"teammatch4",team1:"TBD",team2:"TBD",score:"TBD",winner:null,court:1,time:"5:00 PM"}]}},"team-intermediate":{id:"team-intermediate",name:"Team Intermediate Division",skillLevel:"Intermediate",prizePool:3e4,participants:6,maxParticipants:12,ageGroup:"18+",registrations:[{id:"team4",name:"Paddle Power",members:["John Smith","Kate Johnson","Mark Davis","Nina Patel"],status:"approved",rating:"3.8",seed:1},{id:"team5",name:"Spin Masters",members:["Carlos Ruiz","Jennifer Lee","Ryan Clark","Sophia Wang"],status:"approved",rating:"3.6",seed:2}],brackets:{"round-1":[{id:"intteammatch1",team1:"Paddle Power",team2:"Spin Masters",score:"TBD",winner:null,court:3,time:"10:00 AM"}],finals:[{id:"intteammatch2",team1:"TBD",team2:"TBD",score:"TBD",winner:null,court:3,time:"3:00 PM"}]}}},events:[{id:"teamevent1",title:"Team Registration & Check-in",description:"All team members must check in together. Bring team roster and payment confirmation.",date:"2024-06-20T08:00:00Z",duration:"60 minutes",location:"Main Lobby"}]}].map(T=>({...T,status:T5(T.date,T.registrationDeadline,T.currentParticipants,T.maxParticipants)}));w(g)}catch(q){console.error("Failed to fetch tournaments:",q),M("Failed to load tournaments. Please try again later.")}finally{v(!1)}};y.useEffect(()=>{te()},[]),y.useEffect(()=>{var q;if((q=f.state)!=null&&q.selectedTournament){const g=f.state.selectedTournament;if(D(g),re(!0),g.tournamentCategories){const T=Object.keys(g.tournamentCategories)[0];T&&ce({[T]:!0})}}},[f.state]),y.useEffect(()=>{if(r&&d){const q={pplId:"PPL999",name:d.name||`${d.firstName} ${d.lastName}`||"",gender:"male",age:d.age||25,duprRatings:{singles:"4.2",doubles:"4.0"}};Qe(g=>({...g,primaryPlayer:q}))}else Qe(q=>({...q,primaryPlayer:{pplId:"",name:"",gender:"male",age:"",duprRatings:{singles:"",doubles:""}}}))},[r,d]);const ze=q=>{if(D(q),re(!0),q.tournamentCategories){const g=Object.keys(q.tournamentCategories)[0];g&&ce({[g]:!0})}},Le=()=>{var q;(q=f.state)!=null&&q.fromProfile?c("/profile",{state:{activeTab:"tournaments"}}):(re(!1),D(null),ke("details"),ce({}),qe(""))},xt=q=>{ce(g=>({...g,[q]:!g[q]}))},Dt=async q=>{if(u)return;if(!r){B(!0);return}let g=h.find(T=>T.id===q);!g&&C&&C.id===q&&(g=C),g&&(ye(g),F(!0),Qe(T=>{const ne=r&&d?{pplId:"PPL999",name:d.name||`${d.firstName} ${d.lastName}`||"",gender:d.gender||"male",age:d.age||25,duprRatings:{singles:"4.2",doubles:"4.0"}}:{pplId:"",name:"",gender:"male",age:"",duprRatings:{singles:"",doubles:""}},me=ne.gender;return Object.values((g==null?void 0:g.tournamentCategories)||{}).filter(Ve=>Ei(Ve.name,me)),{category:"",primaryPlayer:ne,partner:{pplId:"",name:"",gender:""},teamMembers:[{pplId:"",name:"",gender:"male",required:!0,label:"Male Player 2"},{pplId:"",name:"",gender:"female",required:!0,label:"Female Player 1"},{pplId:"",name:"",gender:"female",required:!0,label:"Female Player 2"},{pplId:"",name:"",gender:"male",required:!1,label:"Optional Player 1"},{pplId:"",name:"",gender:"female",required:!1,label:"Optional Player 2"}],name:"",email:"",contactNumber:"",proofOfPayment:null}}))},St=()=>{S(!1),pe(null)},Rt=(q,g)=>{Qe(T=>{var Be,Ee,Ve,_e,jt,Gt;const ne={...T,[q]:g};if(["primaryPlayer","partner","teamMembers"].some(R=>q.startsWith(R))&&T.category&&J){const R=Object.values((J==null?void 0:J.tournamentCategories)||{}).find(se=>se.id===T.category);if(R){const se={...T,[q]:g},ue=[];(Be=se.primaryPlayer)!=null&&Be.age?ue.push(se.primaryPlayer.age):d!=null&&d.age&&ue.push(d.age),(Ee=se.partner)!=null&&Ee.age&&ue.push(se.partner.age),Array.isArray(se.teamMembers)&&se.teamMembers.forEach(xe=>{xe.age&&ue.push(xe.age)});const oe=R.ageGroup||R.ageCategory;oe&&ue.length>0&&(ue.every(Me=>en(Me,oe))||(console.log(`🚫 Clearing category "${R.name}" - players no longer meet age requirement (${oe}). Player ages: [${ue.join(", ")}]`),ne.category=""));const je=R.skillLevel;if(je&&ne.category){const xe=[];if((Ve=se.primaryPlayer)!=null&&Ve.duprRatings){const Me=ln(R.name);let ut="singles";Me==="doubles"&&(ut="doubles");const Ke=se.primaryPlayer.duprRatings[ut];Ke&&xe.push(parseFloat(Ke))}else if(d!=null&&d.duprRatings){const Me=ln(R.name);let ut="Singles";Me==="doubles"&&(ut="Doubles");const Ke=d.duprRatings.find(Yt=>Yt.type===ut);Ke!=null&&Ke.rating&&xe.push(parseFloat(Ke.rating))}if((_e=se.partner)!=null&&_e.duprRatings){let ut=ln(R.name)==="doubles"?"doubles":"singles";const Ke=se.partner.duprRatings[ut];Ke&&xe.push(parseFloat(Ke))}Array.isArray(se.teamMembers)&&se.teamMembers.forEach(Me=>{if(Me.duprRatings){const Ke=Me.duprRatings["singles"];Ke&&xe.push(parseFloat(Ke))}}),xe.length>0&&(xe.every(ut=>on(ut,je))||(console.log(`🚫 Clearing category "${R.name}" - players no longer meet DUPR requirement for ${je} level. Player DUPR ratings: [${xe.join(", ")}]`),ne.category=""))}}}if(q==="category"&&g&&J)try{const R=Object.values((J==null?void 0:J.tournamentCategories)||{}).find(ue=>ue.id===g),se=ln((R==null?void 0:R.name)||"");if(R!=null&&R.name){const ue=R.name.toLowerCase();ue.includes("women's")||ue.includes("female")?ne.primaryPlayer={...T.primaryPlayer,gender:"female"}:(ue.includes("men's")||ue.includes("male"))&&(ne.primaryPlayer={...T.primaryPlayer,gender:"male"})}if(se==="team"){const ue=cn(((jt=ne.primaryPlayer)==null?void 0:jt.gender)||((Gt=T.primaryPlayer)==null?void 0:Gt.gender)||"male");Array.isArray(ue)&&(ne.teamMembers=ue.map(oe=>({pplId:"",name:"",gender:oe.gender||"male",required:oe.required||!1,label:oe.label||"Team Member"})))}se==="doubles"&&(ne.partner={pplId:"",name:"",gender:""})}catch(R){console.error("Error updating registration form:",R)}return ne})},fi=q=>{const g=q.target.files[0];if(g){if(!["image/jpeg","image/png","image/jpg","application/pdf"].includes(g.type)){alert("Please upload a valid image (JPG, PNG) or PDF file");return}if(g.size>5242880){alert("File size must be less than 5MB");return}Qe(me=>({...me,proofOfPayment:g}))}},at=()=>{Qe(q=>({...q,proofOfPayment:null}))},Un=async q=>{q.preventDefault();try{console.log("Registration submitted:",{tournament:J.name,form:he}),F(!1),alert("Registration submitted successfully! You will receive a confirmation email shortly.")}catch(g){console.error("Registration failed:",g),alert("Registration failed. Please try again.")}},vt=()=>{F(!1),ye(null)},en=(q,g)=>{if(!g||!q)return!0;const T=parseInt(g.replace("+",""));return q>=T},wt=()=>{var g,T;const q=[];return(g=he.primaryPlayer)!=null&&g.age?q.push(he.primaryPlayer.age):d!=null&&d.age&&q.push(d.age),(T=he.partner)!=null&&T.age&&q.push(he.partner.age),Array.isArray(he.teamMembers)&&he.teamMembers.forEach(ne=>{ne.age&&q.push(ne.age)}),q},on=(q,g)=>{if(!g)return!0;const T=q?parseFloat(q):null;switch(g.toLowerCase()){case"beginner":return T===null||T<=3;case"intermediate":return T===null||T>=2&&T<=3.9;case"advanced":return T===null||T>=3.5&&T<=4.5;case"open":case"open-tier-1":case"open-tier-2":case"open-tier-3":return T===null||T>=4;default:return!0}},pa=q=>{var ne,me,Be,Ee;const g=[];let T="singles";if(q&&q.toLowerCase().includes("doubles")&&(T="doubles"),(me=(ne=he.primaryPlayer)==null?void 0:ne.duprRatings)!=null&&me[T])g.push(parseFloat(he.primaryPlayer.duprRatings[T]));else if(d!=null&&d.duprRatings){const Ve={singles:"Singles",doubles:"Doubles"},_e=d.duprRatings.find(jt=>jt.type===Ve[T]);_e!=null&&_e.rating&&g.push(parseFloat(_e.rating))}return(Ee=(Be=he.partner)==null?void 0:Be.duprRatings)!=null&&Ee[T]&&g.push(parseFloat(he.partner.duprRatings[T])),Array.isArray(he.teamMembers)&&he.teamMembers.forEach(Ve=>{var _e;(_e=Ve.duprRatings)!=null&&_e[T]&&g.push(parseFloat(Ve.duprRatings[T]))}),g},Ei=(q,g)=>{if(console.log(`🔍 Gender Filter Debug: categoryName="${q}", userGender="${g}" (type: ${typeof g})`),!q||!g)return console.log(`⚠️ Missing data: categoryName=${!!q}, userGender=${!!g} - returning true`),!0;const T=q.toLowerCase(),ne=g.toLowerCase().trim();return console.log(`🔍 Processing: categoryLower="${T}", userGenderLower="${ne}"`),ne==="male"?(console.log(`👨 Male user detected - checking category: "${T}"`),T.includes("team")?(console.log("✅ Male: Team category allowed"),!0):T.includes("mixed")?(console.log("✅ Male: Mixed category allowed"),!0):T.includes("women's")||T.includes("women")||T.includes("female")?(console.log(`❌ Male: Women's category denied - "${T}"`),!1):T.includes("men's")||T.includes("men")||T.includes("male")?(console.log("✅ Male: Men's category allowed"),!0):(console.log(`❌ Male: Category denied - "${T}"`),!1)):ne==="female"?(console.log(`👩 Female user detected - checking category: "${T}"`),T.includes("team")?(console.log("✅ Female: Team category allowed"),!0):T.includes("mixed")?(console.log("✅ Female: Mixed category allowed"),!0):T.includes("women's")||T.includes("women")||T.includes("female")?(console.log("✅ Female: Women's category allowed"),!0):(console.log(`❌ Female: Category denied - "${T}"`),!1)):(console.log(`⚠️ Unknown gender "${ne}" - returning true by default`),!0)},Hn=(q,g)=>{if(!Ei(q.name,g))return console.log(`❌ Category "${q.name}" denied due to gender restriction`),!1;const ne=wt(),me=q.ageGroup||q.ageCategory;if(me&&ne.length>0&&!ne.every(Ve=>en(Ve,me)))return console.log(`❌ Category "${q.name}" denied - some players don't meet age requirement (${me}). Player ages: [${ne.join(", ")}]`),!1;const Be=q.skillLevel;if(Be){const Ee=pa(q.name);if(Ee.length>0&&!Ee.every(_e=>on(_e,Be)))return console.log(`❌ Category "${q.name}" denied - some players don't meet DUPR requirement for ${Be} level. Player DUPR ratings: [${Ee.join(", ")}]`),!1}return console.log(`✅ Category "${q.name}" allowed - all eligibility checks passed`),!0},ln=q=>{if(!q)return"singles";const g=q.toLowerCase();return g.includes("doubles")?"doubles":g.includes("team")?"team":"singles"},It=(q,g)=>!q||!g?"":q.toLowerCase().includes("doubles")?g.doubles||"":g.singles||"",Mn=(q,g)=>{if(!q)return["male","female"];const T=q.toLowerCase();return T.includes("men's")&&!T.includes("mixed")?["male"]:T.includes("women's")&&!T.includes("mixed")?["female"]:T.includes("mixed")?g==="male"?["female"]:["male"]:["male","female"]},cn=q=>{try{return J&&J.id==="team-championship-2024"?q==="male"?[{gender:"male",required:!0,label:"Required Male Player"},{gender:"female",required:!0,label:"Required Female Player 1"},{gender:"female",required:!0,label:"Required Female Player 2"},{gender:"any",required:!1,label:"Optional Player 1"},{gender:"any",required:!1,label:"Optional Player 2"}]:[{gender:"female",required:!0,label:"Required Female Player"},{gender:"male",required:!0,label:"Required Male Player 1"},{gender:"male",required:!0,label:"Required Male Player 2"},{gender:"any",required:!1,label:"Optional Player 1"},{gender:"any",required:!1,label:"Optional Player 2"}]:q==="male"?[{gender:"male",required:!0,label:"Required Male Player"},{gender:"female",required:!0,label:"Required Female Player 1"},{gender:"female",required:!0,label:"Required Female Player 2"},{gender:"any",required:!1,label:"Optional Player 1"},{gender:"any",required:!1,label:"Optional Player 2"}]:[{gender:"female",required:!0,label:"Required Female Player"},{gender:"male",required:!0,label:"Required Male Player 1"},{gender:"male",required:!0,label:"Required Male Player 2"},{gender:"any",required:!1,label:"Optional Player 1"},{gender:"any",required:!1,label:"Optional Player 2"}]}catch(g){return console.error("Error in getTeamComposition:",g),[{gender:"male",required:!0,label:"Player 2"},{gender:"female",required:!0,label:"Player 3"},{gender:"male",required:!1,label:"Optional Player 1"},{gender:"female",required:!1,label:"Optional Player 2"}]}},mi=q=>{ve(q),Ae(""),fe(!0)},Zn=(q,g=null)=>{q==="partner"?Qe(T=>({...T,partner:null})):q==="team"&&g!==null&&Qe(T=>({...T,teamMembers:T.teamMembers.map((ne,me)=>me===g?{...ne,pplId:null,name:null,gender:ne.gender,duprRatings:null,age:null}:ne)}))},Xn=q=>{if(Ce==="partner")Qe(g=>({...g,partner:{pplId:q.pplId,name:q.name,gender:q.gender,duprRatings:q.duprRatings,age:q.age}}));else if(Ce.startsWith("team-")){const g=parseInt(Ce.split("-")[1]);Qe(T=>({...T,teamMembers:T.teamMembers.map((ne,me)=>me===g?{...ne,pplId:q.pplId,name:q.name,gender:q.gender,duprRatings:q.duprRatings,age:q.age}:ne)}))}fe(!1)},_n=()=>{var ne,me,Be;if(!he.category||!J)return it;const q=Object.values((J==null?void 0:J.tournamentCategories)||{}).find(Ee=>Ee.id===he.category);if(!q)return it;const g=Mn(q.name,((ne=he.primaryPlayer)==null?void 0:ne.gender)||"male");let T=it;if(Ce.startsWith("team-")){const Ee=parseInt(Ce.split("-")[1]),_e=cn(((me=he.primaryPlayer)==null?void 0:me.gender)||"male")[Ee];_e&&_e.gender!=="any"&&(T=T.filter(jt=>jt.gender===_e.gender))}else T=T.filter(Ee=>g.includes(Ee.gender));if(nt){const Ee=nt.toLowerCase();T=T.filter(Ve=>Ve.name.toLowerCase().includes(Ee)||Ve.pplId.toLowerCase().includes(Ee))}return(Be=he.primaryPlayer)!=null&&Be.pplId&&(T=T.filter(Ee=>Ee.pplId!==he.primaryPlayer.pplId)),T};if(k)return n.jsx(j5,{children:"Loading tournaments..."});if(x)return n.jsx(k5,{children:x});if(z&&C){const q=(Tn=f.state)==null?void 0:Tn.fromProfile;return n.jsxs(L0,{children:[n.jsxs(R4,{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"32px"},children:[n.jsxs(M4,{onClick:Le,children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7",strokeLinecap:"round",strokeLinejoin:"round"})}),(yn=f.state)!=null&&yn.fromProfile?"Back to Profile":"Back to Tournaments"]}),(q||r&&(d==null?void 0:d.name)===C.organizer)&&n.jsxs(T4,{onClick:()=>c("/host-tournament",{state:{editTournament:C}}),children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Edit Tournament"]})]}),n.jsxs(A4,{children:[n.jsx(P4,{children:C.bannerUrl&&n.jsx("img",{src:C.bannerUrl,alt:C.name})}),n.jsx(D4,{$status:C.status,children:C.status})]}),n.jsxs(E4,{children:[n.jsxs($4,{children:[n.jsx(N4,{children:n.jsx("h1",{children:C.name})}),n.jsx(O4,{children:C.description}),"              ",n.jsxs(C0,{children:[n.jsx(Pa,{$active:K==="details",onClick:()=>ke("details"),children:"Details"}),n.jsx(Pa,{$active:K==="guidelines",onClick:()=>ke("guidelines"),children:"Guidelines"}),n.jsx(Pa,{$active:K==="events",onClick:()=>ke("events"),children:"Events"}),n.jsx(Pa,{$active:K==="players",onClick:()=>ke("players"),children:"Players"}),n.jsx(Pa,{$active:K==="brackets",onClick:()=>ke("brackets"),children:"Brackets"})]}),n.jsxs(W4,{children:[K==="details"&&n.jsxs(n.Fragment,{children:[n.jsxs(ia,{children:[n.jsxs(aa,{children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z",strokeLinecap:"round",strokeLinejoin:"round"})}),"Tournament Information"]}),n.jsxs(q4,{children:[n.jsxs(jr,{children:[n.jsx(kr,{children:n.jsx(R0,{})}),n.jsxs(Sr,{children:[n.jsx("div",{children:n.jsx(Cr,{children:"Registration Fee"})}),n.jsxs(zr,{className:"price",children:["₱",C.entryFee.toLocaleString()]})]})]}),n.jsxs(jr,{children:[n.jsx(kr,{children:n.jsx(mu,{})}),n.jsxs(Sr,{children:[n.jsx("div",{children:n.jsx(Cr,{children:"Tournament Date"})}),n.jsx(zr,{children:(()=>{const g=new Date(C.date),T=new Date(C.endDate);return g.toDateString()===T.toDateString()?g.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):`${g.toLocaleDateString("en-US",{month:"long",day:"numeric"})} - ${T.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}`})()})]})]}),n.jsxs(jr,{children:[n.jsx(kr,{children:n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",strokeLinecap:"round",strokeLinejoin:"round"})})}),n.jsxs(Sr,{children:[n.jsx("div",{children:n.jsx(Cr,{children:"Registration Deadline"})}),n.jsx(zr,{className:"deadline",children:new Date(C.registrationDeadline).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})})]})]}),n.jsxs(jr,{children:[n.jsx(kr,{children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("circle",{cx:"9",cy:"7",r:"4",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"m22 21-3-3m0 0a5.5 5.5 0 1 0-7.78-7.78 5.5 5.5 0 0 0 7.78 7.78Z",strokeLinecap:"round",strokeLinejoin:"round"})]})}),n.jsxs(Sr,{children:[n.jsx("div",{children:n.jsx(Cr,{children:"Skill Levels"})}),n.jsx(zr,{children:C.tournamentCategories?(()=>{const g=new Set;return Object.values(C.tournamentCategories).forEach(T=>{T.skillLevel==="Open"?g.add(`Open - Tier ${T.tier||1}`):["Beginner","Intermediate","Advanced"].includes(T.skillLevel)&&g.add(T.skillLevel)}),Array.from(g).sort().join(", ")})():`${C.tournamentType.charAt(0).toUpperCase()+C.tournamentType.slice(1)}${C.tournamentType==="open"?` - Tier ${C.tier}`:""}`})]})]}),C.contactEmail&&n.jsxs(jr,{children:[n.jsx(kr,{children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),n.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),n.jsxs(Sr,{children:[n.jsx("div",{children:n.jsx(Cr,{children:"Contact Email"})}),n.jsx(zr,{children:n.jsx("a",{href:`mailto:${C.contactEmail}`,style:{color:"#334155",textDecoration:"none",cursor:"pointer"},onMouseEnter:g=>g.target.style.textDecoration="underline",onMouseLeave:g=>g.target.style.textDecoration="none",children:C.contactEmail})})]})]}),C.contactPhone&&n.jsxs(jr,{children:[n.jsx(kr,{children:n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:n.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})})}),n.jsxs(Sr,{children:[n.jsx("div",{children:n.jsx(Cr,{children:"Contact Phone"})}),n.jsx(zr,{children:n.jsx("a",{href:`tel:${C.contactPhone}`,style:{color:"#334155",textDecoration:"none",cursor:"pointer"},onMouseEnter:g=>g.target.style.textDecoration="underline",onMouseLeave:g=>g.target.style.textDecoration="none",children:C.contactPhone})})]})]})]})]}),n.jsxs(ia,{children:[n.jsxs(aa,{children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",strokeLinecap:"round",strokeLinejoin:"round"})}),"Tournament Categories"]}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:C.tournamentCategories?Object.values(C.tournamentCategories).map(g=>n.jsxs("div",{style:{background:"white",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"16px 20px",display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.05)"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[n.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"#29ba9b"}}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"1rem",fontWeight:"600",color:"#1e293b",marginBottom:"2px"},children:(()=>{let T=g.name;["18+","35+","50+"].forEach(_e=>{T=T.replace(new RegExp(`\\s*${_e.replace("+","\\+")}\\s*`,"gi")," "),T=T.replace(new RegExp(`\\s*${_e.replace("+","\\+")}$`,"gi"),"")}),["Beginner","Intermediate","Advanced","Open"].forEach(_e=>{T=T.replace(new RegExp(`\\s*${_e}\\s*`,"gi")," ")}),T=T.replace(/\s+/g," ").trim();let Be=g.skillLevel||"";Be==="Open"&&g.tier&&(Be=`Open Tier ${g.tier}`);const Ee=g.ageGroup||"";return[T,Be,Ee].filter(_e=>_e).join(" | ")})()}),n.jsxs("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:[g.participants||0,"/",g.maxParticipants," participants",g.prizePool&&g.prizePool>0&&n.jsxs("span",{style:{marginLeft:"12px",color:"#29ba9b",fontWeight:"500"},children:["Prize: ₱",g.prizePool.toLocaleString()]})]})]})]}),n.jsx("div",{style:{fontSize:"0.875rem",fontWeight:"500",color:g.participants>=g.maxParticipants?"#ef4444":"#29ba9b",background:g.participants>=g.maxParticipants?"#fef2f2":"#f0fdf4",padding:"4px 8px",borderRadius:"6px",border:`1px solid ${g.participants>=g.maxParticipants?"#fecaca":"#bbf7d0"}`},children:g.participants>=g.maxParticipants?"Full":"Open"})]},g.id)):n.jsxs("div",{style:{background:"white",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"16px 20px",display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.05)"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[n.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"#29ba9b"}}),n.jsxs("div",{children:[n.jsxs("div",{style:{fontSize:"1rem",fontWeight:"600",color:"#1e293b",marginBottom:"2px"},children:[C.tournamentType.charAt(0).toUpperCase()+C.tournamentType.slice(1),C.tournamentType==="open"&&C.tier&&` - Tier ${C.tier}`]}),n.jsxs("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:[C.currentParticipants||0,"/",C.maxParticipants," participants"]})]})]}),n.jsx("div",{style:{fontSize:"0.875rem",fontWeight:"500",color:C.currentParticipants>=C.maxParticipants?"#ef4444":"#29ba9b",background:C.currentParticipants>=C.maxParticipants?"#fef2f2":"#f0fdf4",padding:"4px 8px",borderRadius:"6px",border:`1px solid ${C.currentParticipants>=C.maxParticipants?"#fecaca":"#bbf7d0"}`},children:C.currentParticipants>=C.maxParticipants?"Full":"Open"})]})})]}),n.jsxs(ia,{children:[n.jsxs(aa,{children:[n.jsx(T0,{}),"Tournament Location & Map"]}),n.jsxs(U4,{children:[n.jsx(H4,{children:n.jsxs(_4,{children:[n.jsxs(S0,{$primary:!0,onClick:()=>window.open(`https://maps.google.com/?q=${C.latitude},${C.longitude}`,"_blank"),children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Get Directions"]}),n.jsxs(S0,{onClick:()=>{var g;return(g=navigator.share)==null?void 0:g.call(navigator,{title:`Location: ${C.location}`,text:C.address,url:`https://maps.google.com/?q=${C.latitude},${C.longitude}`})},children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("polyline",{points:"15,3 21,3 21,9",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Share"]})]})}),n.jsxs(G4,{children:[n.jsx("div",{className:"venue-name",children:C.location}),n.jsx("div",{className:"venue-address",children:C.address}),n.jsxs("div",{className:"coordinates",children:["Coordinates: ",C.latitude,", ",C.longitude]})]}),n.jsx(Y4,{onClick:()=>window.open(`https://maps.google.com/?q=${C.latitude},${C.longitude}`,"_blank"),children:n.jsxs("div",{className:"map-text",children:[n.jsx("div",{className:"main-text",children:"Interactive Map View"}),n.jsx("div",{className:"sub-text",children:"Click to open in Google Maps"})]})})]})]})]}),K==="events"&&n.jsxs(ia,{children:[n.jsxs(aa,{children:[n.jsx(mu,{}),"Tournament Events Schedule"]}),n.jsx("div",{style:{background:"white",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"24px"},children:n.jsx("div",{style:{fontSize:"1rem",lineHeight:"1.6",color:"#334155",whiteSpace:"pre-wrap"},children:C.eventsText||(C.events&&C.events.length>0?C.events.map(g=>`${g.title}
${g.description}${g.location?`
Location: ${g.location}`:""}${g.duration?`
Duration: ${g.duration}`:""}`).join(`

`):`Day 1 - 9:00 AM
Registration & Check-in
All participants must check in and complete registration process. Bring valid ID and proof of payment.

Day 1 - 10:00 AM
Tournament Briefing
Mandatory rules briefing and player introductions. Tournament format explanation.

Day 1 - 10:30 AM
Opening Ceremony
Welcome address, national anthem, and ceremonial first serve.

Day 1 - 11:00 AM
Round 1 Matches
First round matches for all divisions begin. Players should be ready 15 minutes early.`)})})]}),K==="brackets"&&n.jsxs(ia,{children:[n.jsxs(aa,{children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",strokeLinecap:"round",strokeLinejoin:"round"})}),"Tournament Brackets"]}),C.tournamentCategories?n.jsx("div",{children:Object.values(C.tournamentCategories).map(g=>n.jsxs(t5,{children:[n.jsx(vg,{$expanded:we[g.id],onClick:()=>xt(g.id),children:n.jsxs(n5,{children:[n.jsx(i5,{children:n.jsxs("div",{className:"category-title",style:{fontSize:"1.1rem",fontWeight:"600",color:"#1e293b",display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx("span",{children:(()=>{let T=g.name;return["18+","35+","50+"].forEach(Be=>{T=T.replace(new RegExp(`\\s*${Be.replace("+","\\+")}\\s*`,"gi")," "),T=T.replace(new RegExp(`\\s*${Be.replace("+","\\+")}$`,"gi"),"")}),["Beginner","Intermediate","Advanced","Open"].forEach(Be=>{T=T.replace(new RegExp(`\\s*${Be}\\s*`,"gi")," ")}),T.replace(/\s+/g," ").trim()})()}),n.jsx("span",{style:{color:"#64748b",fontSize:"1rem"},children:"|"}),n.jsx("span",{style:{color:"#059669"},children:g.skillLevel==="Open"&&g.tier?`Open Tier ${g.tier}`:g.skillLevel}),n.jsx("span",{style:{color:"#64748b",fontSize:"1rem"},children:"|"}),n.jsx("span",{children:g.ageGroup})]})}),n.jsx(a5,{$expanded:we[g.id],children:n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M19 9l-7 7-7-7",strokeLinecap:"round",strokeLinejoin:"round"})})})]})}),we[g.id]&&n.jsxs(r5,{$expanded:we[g.id],children:[g.groupStage&&n.jsxs(I4,{children:[n.jsx("div",{className:"section-title",children:"Group Stage Results"}),n.jsx("div",{className:"groups-grid",children:Object.entries(g.groupStage).map(([T,ne])=>n.jsxs(J4,{children:[n.jsxs(Z4,{children:["Bracket ",T.slice(-1).toUpperCase()]}),n.jsxs(X4,{children:[n.jsxs("div",{className:"standings-header",children:[n.jsx("div",{children:"Player"}),n.jsx("div",{children:"R.Wins"}),n.jsx("div",{children:"R.Loss"}),n.jsx("div",{children:"W.Pts"}),n.jsx("div",{children:"L.Pts"})]}),ne.map(me=>n.jsxs(K4,{$qualified:me.position<=2,children:[n.jsxs("div",{className:"player-info",children:[n.jsx("div",{className:"position",children:me.position}),n.jsx("div",{className:"player-name",children:me.name})]}),n.jsx("div",{className:"round-wins",children:me.roundWins||me.wins||0}),n.jsx("div",{className:"round-losses",children:me.roundLosses||0}),n.jsx("div",{className:"win-points",children:me.winPoints||0}),n.jsx("div",{className:"loss-points",children:me.lossPoints||0})]},me.id))]})]},T))})]}),g.knockoutStage?n.jsx(F4,{children:n.jsxs(V4,{style:{marginTop:"-80px"},children:[n.jsxs(z0,{children:[n.jsxs(bs,{children:[n.jsx("h4",{children:"Quarter-Finals"}),n.jsx("div",{className:"round-subtitle",children:"Top 8 Players"})]}),g.knockoutStage.quarterFinals.map(T=>n.jsxs(ys,{$isWinner:T.completed,children:[n.jsxs("div",{className:"match-info",children:[n.jsxs("div",{className:"player-name",children:[n.jsx("span",{className:"player-seed",children:T.player1.seed}),T.player1.name]}),T.completed&&n.jsx("div",{className:"match-score",children:T.winner==="player1"?"✓":""})]}),n.jsxs("div",{className:"match-info",children:[n.jsxs("div",{className:"player-name",children:[n.jsx("span",{className:"player-seed",children:T.player2.seed}),T.player2.name]}),T.completed&&n.jsx("div",{className:"match-score",children:T.winner==="player2"?"✓":""})]}),T.completed&&n.jsx("div",{className:"match-result",children:T.score})]},T.id))]}),n.jsxs(z0,{children:[n.jsxs(bs,{children:[n.jsx("h4",{children:"Semi-Finals"}),n.jsx("div",{className:"round-subtitle",children:"Final 4"})]}),g.knockoutStage.semiFinals.map((T,ne)=>n.jsxs(ys,{$isWinner:T.completed,style:{marginTop:ne===0?"0px":"40px","@media (min-width: 768px)":{marginTop:ne===0?"50px":"30px"}},children:[n.jsxs("div",{className:"match-info",children:[n.jsxs("div",{className:"player-name",children:[n.jsxs("span",{className:"player-seed",children:["W",T.player1.seed]}),T.player1.name]}),T.completed&&n.jsx("div",{className:"match-score",children:T.winner==="player1"?"✓":""})]}),n.jsxs("div",{className:"match-info",children:[n.jsxs("div",{className:"player-name",children:[n.jsxs("span",{className:"player-seed",children:["W",T.player2.seed]}),T.player2.name]}),T.completed&&n.jsx("div",{className:"match-score",children:T.winner==="player2"?"✓":""})]}),T.completed&&n.jsx("div",{className:"match-result",children:T.score})]},T.id))]}),n.jsxs(Q4,{style:{marginTop:"200px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"-10px"},children:[n.jsx("div",{className:"championship-trophy",children:"🏆"}),n.jsxs(bs,{style:{margin:0},children:[n.jsx("h4",{children:"Championship"}),n.jsx("div",{className:"round-subtitle",children:"Final Match"})]})]}),g.knockoutStage.final&&n.jsxs(ys,{className:"championship-match",$isWinner:g.knockoutStage.final.completed,children:[n.jsxs("div",{className:"match-info",children:[n.jsxs("div",{className:"player-name",children:[n.jsxs("span",{className:"player-seed",children:["W",g.knockoutStage.final.player1.seed]}),g.knockoutStage.final.player1.name]}),g.knockoutStage.final.completed&&n.jsx("div",{className:"match-score",children:g.knockoutStage.final.winner==="player1"?"🥇":"🥈"})]}),n.jsxs("div",{className:"match-info",children:[n.jsxs("div",{className:"player-name",children:[n.jsxs("span",{className:"player-seed",children:["W",g.knockoutStage.final.player2.seed]}),g.knockoutStage.final.player2.name]}),g.knockoutStage.final.completed&&n.jsx("div",{className:"match-score",children:g.knockoutStage.final.winner==="player2"?"🥇":"🥈"})]}),g.knockoutStage.final.completed&&n.jsx("div",{className:"match-result",style:{fontWeight:"bold",color:"#16a34a"},children:g.knockoutStage.final.score})]}),g.knockoutStage.thirdPlace&&n.jsxs("div",{style:{marginTop:"100px",marginLeft:"auto",marginRight:"0",width:"100%",maxWidth:"300px"},children:[n.jsxs(bs,{children:[n.jsx("h4",{children:"Third Place"}),n.jsx("div",{className:"round-subtitle",children:"Bronze Medal Match"})]}),n.jsxs(ys,{className:"championship-match",$isWinner:g.knockoutStage.thirdPlace.completed,style:{width:"100%"},children:[n.jsxs("div",{className:"match-info",children:[n.jsxs("div",{className:"player-name",children:[n.jsxs("span",{className:"player-seed",children:["L",g.knockoutStage.thirdPlace.player1.seed]}),g.knockoutStage.thirdPlace.player1.name]}),g.knockoutStage.thirdPlace.completed&&n.jsx("div",{className:"match-score",children:g.knockoutStage.thirdPlace.winner==="player1"?"🥉":""})]}),n.jsxs("div",{className:"match-info",children:[n.jsxs("div",{className:"player-name",children:[n.jsxs("span",{className:"player-seed",children:["L",g.knockoutStage.thirdPlace.player2.seed]}),g.knockoutStage.thirdPlace.player2.name]}),g.knockoutStage.thirdPlace.completed&&n.jsx("div",{className:"match-score",children:g.knockoutStage.thirdPlace.winner==="player2"?"🥉":""})]}),g.knockoutStage.thirdPlace.completed&&n.jsx("div",{className:"match-result",style:{fontWeight:"bold",color:"#16a34a"},children:g.knockoutStage.thirdPlace.score})]})]})]})]})}):n.jsxs("div",{style:{textAlign:"center",padding:"32px 24px",background:"white",borderRadius:"12px",border:"1px solid #e2e8f0",marginTop:"16px"},children:[n.jsx("div",{style:{fontSize:"2.5rem",marginBottom:"12px"},children:"🏆"}),n.jsx("h3",{style:{color:"#334155",marginBottom:"8px",fontSize:"1.1rem"},children:"Knockout Bracket Coming Soon"}),n.jsx("p",{style:{color:"#64748b",fontSize:"0.9rem",marginBottom:"16px"},children:"The knockout bracket will be generated once the group stage is complete."}),n.jsx("div",{style:{}})]})]})]},g.id))}):n.jsx(n.Fragment,{children:C.tournamentBracket?n.jsx(n.Fragment,{}):n.jsxs("div",{style:{textAlign:"center",padding:"48px 24px",background:"#f8fafc",borderRadius:"16px",border:"1px dashed #e2e8f0"},children:[n.jsx("div",{style:{fontSize:"3rem",marginBottom:"16px"},children:"🏆"}),n.jsx("h3",{style:{color:"#334155",marginBottom:"8px"},children:"Tournament Bracket Not Available"}),n.jsx("p",{style:{color:"#64748b",fontSize:"0.95rem"},children:"The tournament bracket will be generated once the group stage is complete and knockout matches begin."})]})})]}),K==="players"&&n.jsxs(ia,{children:[n.jsxs(aa,{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("circle",{cx:"9",cy:"7",r:"4",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Players"]}),n.jsxs(C0,{children:[n.jsx(Pa,{$active:mt==="approved",onClick:()=>ht("approved"),children:"Approved Players"}),n.jsx(Pa,{$active:mt==="pending",onClick:()=>ht("pending"),children:"Pending Players"})]}),mt==="approved"&&(C.registrations&&C.registrations.filter(g=>g.status==="approved").length>0?n.jsxs("div",{children:[n.jsx("div",{style:{marginBottom:"24px"},children:n.jsxs("div",{style:{position:"relative",maxWidth:"400px",margin:"0 auto"},children:[n.jsx("input",{type:"text",placeholder:"Search players by name...",value:le,onChange:g=>qe(g.target.value),style:{width:"100%",padding:"12px 16px 12px 44px",border:"1.5px solid #e2e8f0",borderRadius:"8px",fontSize:"1rem",color:"#1a1a1a",background:"white",transition:"all 0.2s ease",outline:"none"},onFocus:g=>{g.target.style.borderColor="#29ba9b",g.target.style.boxShadow="0 0 0 3px rgba(41, 186, 155, 0.1)"},onBlur:g=>{g.target.style.borderColor="#e2e8f0",g.target.style.boxShadow="none"}}),n.jsx("div",{style:{position:"absolute",left:"14px",top:"50%",transform:"translateY(-50%)",color:"#94a3b8"},children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",style:{width:"18px",height:"18px"},children:[n.jsx("circle",{cx:"11",cy:"11",r:"8",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"m21 21-4.35-4.35",strokeLinecap:"round",strokeLinejoin:"round"})]})})]})}),n.jsx("div",{style:{background:"#f8fafc",padding:"16px",borderRadius:"8px",border:"1px solid #e2e8f0",marginBottom:"24px",textAlign:"center"},children:n.jsx("span",{style:{color:"#64748b",fontSize:"0.9rem"},children:(()=>{const g=C.registrations.filter(ne=>ne.status==="approved"),T=g.filter(ne=>ne.playerName.replace(/["'].*?["']/g,"").trim().toLowerCase().includes(le.toLowerCase()));return le?`Showing ${T.length} of ${g.length} approved players`:`Total Approved Players: ${g.length}`})()})}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"16px"},children:C.registrations.filter(g=>g.status==="approved").filter(g=>g.playerName.replace(/["'].*?["']/g,"").trim().toLowerCase().includes(le.toLowerCase())).sort((g,T)=>{const ne=g.playerName.replace(/["'].*?["']/g,"").trim(),me=T.playerName.replace(/["'].*?["']/g,"").trim();return ne.localeCompare(me)}).map((g,T)=>n.jsx("div",{style:{background:"white",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"16px",transition:"all 0.2s ease",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"12px"},children:[n.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",background:"#29ba9b",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"600",fontSize:"14px"},children:g.playerName.replace(/["'].*?["']/g,"").trim().split(" ").map(ne=>ne[0]).join("").toUpperCase()}),n.jsx("div",{children:n.jsx("div",{style:{fontWeight:"600",color:"#334155",fontSize:"1rem"},children:g.playerName.replace(/["'].*?["']/g,"").trim()})})]})},g.id))}),le&&C.registrations.filter(g=>g.status==="approved").filter(g=>g.playerName.replace(/["'].*?["']/g,"").trim().toLowerCase().includes(le.toLowerCase())).length===0&&n.jsxs("div",{style:{textAlign:"center",padding:"48px 24px",background:"#f8fafc",borderRadius:"16px",border:"1px dashed #e2e8f0",marginTop:"24px"},children:[n.jsx("div",{style:{fontSize:"2.5rem",marginBottom:"16px"},children:"🔍"}),n.jsx("h3",{style:{color:"#334155",marginBottom:"8px"},children:"No Players Found"}),n.jsxs("p",{style:{color:"#64748b",fontSize:"0.95rem"},children:['No approved players match your search for "',le,'".']})]})]}):n.jsxs("div",{style:{textAlign:"center",padding:"48px 24px",background:"#f8fafc",borderRadius:"16px",border:"1px dashed #e2e8f0"},children:[n.jsx("div",{style:{fontSize:"3rem",marginBottom:"16px"},children:"👥"}),n.jsx("h3",{style:{color:"#334155",marginBottom:"8px"},children:"No Approved Players Yet"}),n.jsx("p",{style:{color:"#64748b",fontSize:"0.95rem"},children:"Players will appear here once their registration is approved by the tournament organizer."})]})),mt==="pending"&&(C.registrations&&C.registrations.filter(g=>g.status==="pending").length>0?n.jsxs("div",{children:[n.jsx("div",{style:{marginBottom:"24px"},children:n.jsxs("div",{style:{position:"relative",maxWidth:"400px",margin:"0 auto"},children:[n.jsx("input",{type:"text",placeholder:"Search pending players...",value:le,onChange:g=>qe(g.target.value),style:{width:"100%",padding:"12px 16px 12px 44px",border:"1.5px solid #e2e8f0",borderRadius:"8px",fontSize:"1rem",color:"#1a1a1a",background:"white",transition:"all 0.2s ease",outline:"none"},onFocus:g=>{g.target.style.borderColor="#29ba9b",g.target.style.boxShadow="0 0 0 3px rgba(41, 186, 155, 0.1)"},onBlur:g=>{g.target.style.borderColor="#e2e8f0",g.target.style.boxShadow="none"}}),n.jsx("div",{style:{position:"absolute",left:"14px",top:"50%",transform:"translateY(-50%)",color:"#94a3b8"},children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",style:{width:"18px",height:"18px"},children:[n.jsx("circle",{cx:"11",cy:"11",r:"8",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"m21 21-4.35-4.35",strokeLinecap:"round",strokeLinejoin:"round"})]})})]})}),n.jsx("div",{style:{background:"#fef3c7",padding:"16px",borderRadius:"8px",border:"1px solid #f59e0b",marginBottom:"24px",textAlign:"center"},children:n.jsx("span",{style:{color:"#92400e",fontSize:"0.9rem"},children:(()=>{const g=C.registrations.filter(ne=>ne.status==="pending"),T=g.filter(ne=>ne.playerName.replace(/["'].*?["']/g,"").trim().toLowerCase().includes(le.toLowerCase()));return le?`Showing ${T.length} of ${g.length} pending players`:`Total Pending Players: ${g.length}`})()})}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"16px"},children:C.registrations.filter(g=>g.status==="pending").filter(g=>g.playerName.replace(/["'].*?["']/g,"").trim().toLowerCase().includes(le.toLowerCase())).sort((g,T)=>{const ne=g.playerName.replace(/["'].*?["']/g,"").trim(),me=T.playerName.replace(/["'].*?["']/g,"").trim();return ne.localeCompare(me)}).map((g,T)=>n.jsx("div",{style:{background:"white",border:"1px solid #f59e0b",borderRadius:"12px",padding:"16px",transition:"all 0.2s ease",boxShadow:"0 1px 3px rgba(245, 158, 11, 0.2)"},children:n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"12px"},children:[n.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",background:"#f59e0b",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"600",fontSize:"14px"},children:g.playerName.replace(/["'].*?["']/g,"").trim().split(" ").map(ne=>ne[0]).join("").toUpperCase()}),n.jsxs("div",{children:[n.jsx("div",{style:{fontWeight:"600",color:"#334155",fontSize:"1rem"},children:g.playerName.replace(/["'].*?["']/g,"").trim()}),n.jsx("div",{style:{fontSize:"0.8rem",color:"#f59e0b",fontWeight:"500"},children:"Pending Approval"})]})]})},g.id))}),le&&C.registrations.filter(g=>g.status==="pending").filter(g=>g.playerName.replace(/["'].*?["']/g,"").trim().toLowerCase().includes(le.toLowerCase())).length===0&&n.jsxs("div",{style:{textAlign:"center",padding:"48px 24px",background:"#fef3c7",borderRadius:"16px",border:"1px dashed #f59e0b",marginTop:"24px"},children:[n.jsx("div",{style:{fontSize:"2.5rem",marginBottom:"16px"},children:"🔍"}),n.jsx("h3",{style:{color:"#334155",marginBottom:"8px"},children:"No Pending Players Found"}),n.jsxs("p",{style:{color:"#92400e",fontSize:"0.95rem"},children:['No pending players match your search for "',le,'".']})]})]}):n.jsxs("div",{style:{textAlign:"center",padding:"48px 24px",background:"#fef3c7",borderRadius:"16px",border:"1px dashed #f59e0b"},children:[n.jsx("div",{style:{fontSize:"3rem",marginBottom:"16px"},children:"⏳"}),n.jsx("h3",{style:{color:"#334155",marginBottom:"8px"},children:"No Pending Players"}),n.jsx("p",{style:{color:"#92400e",fontSize:"0.95rem"},children:"There are currently no players awaiting approval for this tournament."})]}))]}),K==="guidelines"&&n.jsxs(ia,{children:[n.jsxs(aa,{children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",strokeLinecap:"round",strokeLinejoin:"round"})}),"Tournament Guidelines"]}),C.rules&&C.rules.length>0||C.rulesText?n.jsxs("div",{children:[n.jsxs("div",{style:{background:"#fef3c7",padding:"16px",borderRadius:"8px",border:"1px solid #f59e0b",marginBottom:"24px"},children:[n.jsxs("div",{style:{color:"#92400e",fontWeight:"600",marginBottom:"8px",display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx("span",{children:"⚠️"}),"Important Notice"]}),n.jsx("div",{style:{color:"#92400e",fontSize:"0.9rem",lineHeight:"1.5"},children:"Please read and understand all tournament guidelines before participating. Violations may result in disqualification."})]}),n.jsx("div",{style:{background:"white",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"24px"},children:n.jsx("div",{style:{fontSize:"1rem",lineHeight:"1.6",color:"#334155",whiteSpace:"pre-wrap"},children:C.rulesText||C.rules&&C.rules.join(`

`)||`All matches follow official IFP rules

Players must check in 30 minutes before their scheduled match

Proper athletic attire and non-marking shoes required

No coaching allowed during matches`})})]}):n.jsxs("div",{style:{textAlign:"center",padding:"48px 24px",background:"#f8fafc",borderRadius:"16px",border:"1px dashed #e2e8f0"},children:[n.jsx("div",{style:{fontSize:"3rem",marginBottom:"16px"},children:"📋"}),n.jsx("h3",{style:{color:"#334155",marginBottom:"8px"},children:"No Guidelines Available"}),n.jsx("p",{style:{color:"#64748b",fontSize:"0.95rem"},children:"Tournament guidelines will be posted by the organizer before the event begins."})]})]})]})]}),n.jsxs(B4,{children:[n.jsxs(e5,{children:[n.jsx(o5,{children:"Tournament Registration"}),n.jsx(l5,{children:n.jsxs("div",{className:"price",children:["₱",C.entryFee.toLocaleString()]})}),n.jsxs(lw,{children:[((d==null?void 0:d.name)!==C.organizer||q)&&n.jsxs(G0,{variant:"primary",onClick:()=>{Dt(C.id)},disabled:C.currentParticipants>=C.maxParticipants||!r,children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",strokeLinecap:"round",strokeLinejoin:"round"})}),"Register Now"]}),n.jsxs(G0,{variant:"secondary",onClick:()=>{navigator.share?navigator.share({title:C.name,text:`Check out this tournament: ${C.name}`,url:window.location.href}):navigator.clipboard.writeText(window.location.href)},children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z",strokeLinecap:"round",strokeLinejoin:"round"})}),"Share"]})]})]}),n.jsx("div",{style:{marginTop:"32px"},children:n.jsxs(ia,{children:[n.jsxs(aa,{children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.29 1.51 4.04 3 5.5l7 7z",strokeLinecap:"round",strokeLinejoin:"round"})}),"Tournament Sponsors"]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"18px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",padding:"10px 0"},children:[n.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",alt:"Nike",style:{width:"45px",height:"45px",objectFit:"contain",borderRadius:"8px",background:"white",padding:"6px",border:"1px solid #e2e8f0"}}),n.jsx(Go,{style:{fontSize:"1rem",margin:"0",color:"#334155"},children:"Nike Philippines"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",padding:"10px 0"},children:[n.jsx("div",{style:{width:"45px",height:"45px",background:"linear-gradient(135deg, #ff6600, #ff8800)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"bold",fontSize:"0.8rem",border:"1px solid #e2e8f0"},children:"G"}),n.jsx(Go,{style:{fontSize:"1rem",margin:"0",color:"#334155"},children:"Gatorade"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",padding:"10px 0"},children:[n.jsx("div",{style:{width:"45px",height:"45px",background:"linear-gradient(135deg, #003d7a, #0066cc)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"bold",fontSize:"0.8rem",border:"1px solid #e2e8f0"},children:"BDO"}),n.jsx(Go,{style:{fontSize:"1rem",margin:"0",color:"#334155"},children:"BDO Unibank"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",padding:"10px 0"},children:[n.jsx("div",{style:{width:"45px",height:"45px",background:"linear-gradient(135deg, #e31837, #ff4444)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"bold",fontSize:"0.8rem",border:"1px solid #e2e8f0"},children:"🐝"}),n.jsx(Go,{style:{fontSize:"1rem",margin:"0",color:"#334155"},children:"Jollibee"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",padding:"10px 0"},children:[n.jsx("img",{src:"https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=400&fit=crop&crop=center",alt:"Sports Equipment",style:{width:"45px",height:"45px",objectFit:"cover",borderRadius:"8px",border:"1px solid #e2e8f0"}}),n.jsx(Go,{style:{fontSize:"1rem",margin:"0",color:"#334155"},children:"Metro Sports Hub"})]})]})]})})]})]})]}),A&&n.jsx(tl,{isOpen:A,onClose:()=>B(!1),title:"Join the Tournament!",message:"Sign in or register to participate in tournaments"}),Je&&J&&n.jsx(A0,{onClick:vt,children:n.jsxs(P0,{onClick:g=>g.stopPropagation(),children:[n.jsxs(D0,{children:[n.jsxs(E0,{children:["Register for ",J.name]}),n.jsx(hu,{onClick:vt,children:"×"})]}),n.jsx($0,{children:n.jsxs("form",{onSubmit:Un,children:[n.jsxs(Da,{children:[n.jsx(Ea,{children:"Tournament Category"}),n.jsx(N0,{children:n.jsx(vs,{children:n.jsxs(R5,{value:he.category,onChange:g=>Rt("category",g.target.value),required:!0,children:[n.jsx("option",{value:"",children:"Select Tournament Category"}),J&&Object.values((J==null?void 0:J.tournamentCategories)||{}).map(g=>{var Be;let T=g.name||"";if(!T){const Ee=g.division||"",Ve=g.skillLevel==="Open"&&g.tier?`Open Tier ${g.tier}`:g.skillLevel||"",_e=g.ageGroup||"";T=[Ee,Ve,_e].filter(Gt=>Gt).join(" | ")||"Unknown Category"}const ne=(d==null?void 0:d.gender)||((Be=he.primaryPlayer)==null?void 0:Be.gender)||"male";console.log("🎯 DROPDOWN DEBUG: user object:",d),console.log("🎯 DROPDOWN DEBUG: registrationForm.primaryPlayer:",he.primaryPlayer),console.log(`🎯 DROPDOWN DEBUG: Final userGender="${ne}"`);const me=Hn(g,ne);return console.log(`📝 Dropdown: Category "${g.name}" for user "${ne}": allowed=${me}`),n.jsx("option",{value:g.id,disabled:!me,style:{color:me?"inherit":"#9ca3af",fontStyle:me?"normal":"italic"},children:T},g.id)})]},bn)})})]}),n.jsxs(Da,{children:[n.jsx(Ea,{children:"Personal Information"}),he.category&&(()=>{var ne,me,Be,Ee,Ve,_e,jt,Gt,R,se;const g=Object.values((J==null?void 0:J.tournamentCategories)||{}).find(ue=>ue.id===he.category),T=ln((g==null?void 0:g.name)||"");return n.jsxs("div",{style:{marginBottom:"20px"},children:[n.jsxs("div",{style:{marginBottom:"16px"},children:[n.jsx(Lr,{style:{marginBottom:"8px",display:"block"},children:"Primary Player (You)"}),n.jsx(yu,{children:n.jsx(vu,{children:n.jsxs(wu,{children:[n.jsx(ju,{children:((ne=he.primaryPlayer)==null?void 0:ne.name)||"Enter your name"}),n.jsxs(ku,{children:["PPLID: ",((me=he.primaryPlayer)==null?void 0:me.pplId)||"Not assigned"," | Gender: ",((Be=he.primaryPlayer)==null?void 0:Be.gender)||"male"," | Age: ",((Ee=he.primaryPlayer)==null?void 0:Ee.age)||"Not specified",(()=>{var je;const ue=Object.values((J==null?void 0:J.tournamentCategories)||{}).find(xe=>xe.id===he.category),oe=It(ue==null?void 0:ue.name,(je=he.primaryPlayer)==null?void 0:je.duprRatings);return oe?` | DUPR: ${oe}`:""})()]})]})})})]}),T==="doubles"&&n.jsxs("div",{style:{marginBottom:"16px"},children:[n.jsx(Lr,{style:{marginBottom:"8px",display:"block"},children:"Partner"}),n.jsx(yu,{onClick:()=>mi("partner"),style:{cursor:"pointer"},children:n.jsx(vu,{children:(Ve=he.partner)!=null&&Ve.pplId?n.jsxs(n.Fragment,{children:[n.jsxs(wu,{children:[n.jsx(ju,{children:(_e=he.partner)==null?void 0:_e.name}),n.jsxs(ku,{children:["PPLID: ",(jt=he.partner)==null?void 0:jt.pplId," | Gender: ",(Gt=he.partner)==null?void 0:Gt.gender," | Age: ",((R=he.partner)==null?void 0:R.age)||"Not specified",(()=>{var je;const ue=Object.values((J==null?void 0:J.tournamentCategories)||{}).find(xe=>xe.id===he.category),oe=It(ue==null?void 0:ue.name,(je=he.partner)==null?void 0:je.duprRatings);return oe?` | DUPR: ${oe}`:""})()]})]}),n.jsx(q0,{onClick:ue=>{ue.stopPropagation(),Zn("partner")},title:"Remove partner",children:"×"})]}):n.jsxs(n.Fragment,{children:[n.jsx(H0,{children:"+"}),n.jsx(U0,{children:"Click to select partner"})]})})})]}),T==="team"&&n.jsxs("div",{style:{marginBottom:"16px"},children:[n.jsx(Lr,{style:{marginBottom:"8px",display:"block"},children:"Team Members"}),Array.isArray(he.teamMembers)&&((se=he.teamMembers)==null?void 0:se.map((ue,oe)=>n.jsx("div",{style:{marginBottom:"8px"},children:n.jsx(yu,{onClick:()=>mi(`team-${oe}`),style:{cursor:"pointer"},children:n.jsx(vu,{children:ue.pplId?n.jsxs(n.Fragment,{children:[n.jsxs(wu,{children:[n.jsx(ju,{children:ue.name}),n.jsxs(ku,{children:["PPLID: ",ue.pplId," | Gender: ",ue.gender," | Age: ",ue.age||"Not specified",(()=>{const je=Object.values((J==null?void 0:J.tournamentCategories)||{}).find(Me=>Me.id===he.category),xe=It(je==null?void 0:je.name,ue==null?void 0:ue.duprRatings);return xe?` | DUPR: ${xe}`:""})(),ue.required&&n.jsx(_0,{children:"Required"})]})]}),n.jsx(q0,{onClick:je=>{je.stopPropagation(),Zn("team",oe)},title:"Remove player",children:"×"})]}):n.jsxs(n.Fragment,{children:[n.jsx(H0,{children:"+"}),n.jsxs(U0,{children:["Click to select ",ue.label,ue.required&&n.jsx(_0,{children:"Required"})]})]})})})},oe)))]})]})})(),n.jsxs(N0,{children:[n.jsxs(vs,{children:[n.jsx(Lr,{children:"Email Address"}),n.jsx(B0,{type:"email",value:he.email,onChange:g=>Rt("email",g.target.value),placeholder:"your.email@example.com",required:!0})]}),n.jsxs(vs,{children:[n.jsx(Lr,{children:"Contact Number"}),n.jsx(B0,{type:"tel",value:he.contactNumber,onChange:g=>Rt("contactNumber",g.target.value),placeholder:"+63 912 345 6789",required:!0})]})]})]}),n.jsxs(Da,{children:[n.jsx(Ea,{children:"Registration Fee"}),n.jsxs(A5,{children:[n.jsx(P5,{children:"Tournament Entry Fee"}),n.jsxs(D5,{children:["₱",J.entryFee," - Registration fee is required to secure your spot in the tournament."]})]})]}),n.jsxs(Da,{children:[n.jsx(Ea,{children:"Payment Details"}),n.jsxs(H5,{children:[n.jsxs(E5,{children:[n.jsx($5,{children:"Bank Transfer Details"}),n.jsxs(xu,{children:[n.jsx(gu,{children:"Bank Name:"}),n.jsx(bu,{children:"BDO Unibank"})]}),n.jsxs(xu,{children:[n.jsx(gu,{children:"Account Name:"}),n.jsx(bu,{children:"John Doe Tournament"})]}),n.jsxs(xu,{children:[n.jsx(gu,{children:"Account Number:"}),n.jsx(bu,{children:"1234-5678-9012"})]})]}),n.jsxs(_5,{children:[n.jsx(G5,{children:"Quick Payment"}),n.jsx(Y5,{children:n.jsxs(W5,{children:[n.jsx(F5,{children:"📱"}),n.jsx(V5,{children:"GCash QR Code"}),n.jsx(O0,{children:"Scan to pay registration fee"})]})}),n.jsx(O0,{children:"Scan with GCash or any QR payment app"})]})]}),n.jsxs(vs,{children:[n.jsx(Lr,{children:"Proof of Payment"}),he.proofOfPayment?n.jsxs(N5,{children:[he.proofOfPayment.type.startsWith("image/")?n.jsx(O5,{src:URL.createObjectURL(he.proofOfPayment),alt:"Proof of Payment Preview"}):n.jsxs("div",{style:{padding:"40px",textAlign:"center",background:"#f8fafc"},children:[n.jsx("div",{style:{fontSize:"48px",marginBottom:"12px"},children:"📄"}),n.jsx("div",{style:{color:"#64748b",fontSize:"14px"},children:"PDF File"})]}),n.jsx(q5,{type:"button",onClick:at,title:"Delete file",children:"×"}),n.jsx(U5,{children:he.proofOfPayment.name})]}):n.jsxs(B5,{children:[n.jsx("input",{type:"file",accept:"image/*,.pdf",onChange:fi,style:{display:"none"},id:"proof-upload",required:!0}),n.jsx("label",{htmlFor:"proof-upload",style:{cursor:"pointer"},children:n.jsx(Q5,{children:"Click to upload proof of payment (Image or PDF)"})})]})]})]}),n.jsx(I5,{type:"submit",children:"Submit Registration"})]})})]})}),I&&n.jsx(J5,{onClick:()=>fe(!1),children:n.jsxs(Z5,{onClick:g=>g.stopPropagation(),children:[n.jsxs(X5,{children:[n.jsx(K5,{children:"Select Player"}),n.jsx(hu,{onClick:()=>fe(!1),children:"×"})]}),n.jsxs(ew,{children:[n.jsx(tw,{type:"text",placeholder:"Search players by name or PPLID...",value:nt,onChange:g=>Ae(g.target.value)}),n.jsxs(ow,{children:[_n().map(g=>n.jsx(nw,{onClick:()=>Xn(g),children:n.jsxs(iw,{children:[n.jsx(aw,{children:g.name}),n.jsxs(rw,{children:["PPLID: ",g.pplId," | Gender: ",g.gender," | Age: ",g.age||"Not specified",(()=>{const T=Object.values((J==null?void 0:J.tournamentCategories)||{}).find(me=>me.id===he.category),ne=It(T==null?void 0:T.name,g==null?void 0:g.duprRatings);return ne?` | DUPR: ${ne}`:""})()]})]})},g.pplId)),_n().length===0&&n.jsx("div",{style:{textAlign:"center",padding:"40px 20px",color:"#64748b"},children:"No players found matching your criteria"})]})]})]})})]})}return n.jsxs(L0,{children:[n.jsx(s5,{children:"Tournaments"}),n.jsx(d5,{children:"Discover and join exciting pickleball tournaments across the Philippines. From intermediate-level competitions to professional championships, find the perfect competition to showcase your skills."}),n.jsxs(S5,{children:[n.jsxs(C5,{children:[n.jsx(M5,{}),n.jsx("input",{type:"text",placeholder:"Search tournaments by name or location...",value:O,onChange:q=>E(q.target.value)})]}),n.jsxs(z5,{children:[n.jsxs(M0,{value:W,onChange:q=>$(q.target.value),children:[n.jsx("option",{value:"",children:"All Tiers"}),n.jsx("option",{value:"beginner",children:"Beginner"}),n.jsx("option",{value:"intermediate",children:"Intermediate"}),n.jsx("option",{value:"advanced",children:"Advanced"}),n.jsx("option",{value:"open-1",children:"Open - Tier 1"}),n.jsx("option",{value:"open-2",children:"Open - Tier 2"}),n.jsx("option",{value:"open-3",children:"Open - Tier 3"})]}),n.jsxs(M0,{value:Q,onChange:q=>V(q.target.value),children:[n.jsx("option",{value:"",children:"All Fees"}),_.map((q,g)=>n.jsx("option",{value:g,children:q.label},g))]})]})]}),de.length>0?n.jsx(c5,{children:de.map(q=>n.jsxs(u5,{onClick:()=>ze(q),style:{cursor:"pointer"},children:[n.jsxs(p5,{children:[q.bannerUrl&&n.jsx("img",{src:q.bannerUrl,alt:q.name}),n.jsx(f5,{$status:q.status,children:q.status})]}),n.jsxs(m5,{children:[n.jsx(h5,{children:q.name}),n.jsxs(pp,{children:[n.jsx(mu,{}),new Date(q.date).toLocaleDateString()]}),n.jsxs(x5,{children:[n.jsx(T0,{}),q.location]}),n.jsxs(g5,{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("circle",{cx:"9",cy:"7",r:"4",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"m22 21-3-3m0 0a5.5 5.5 0 1 0-7.78-7.78 5.5 5.5 0 0 0 7.78 7.78Z",strokeLinecap:"round",strokeLinejoin:"round"})]}),q.tournamentCategories?(()=>{const g=new Set;return Object.values(q.tournamentCategories).forEach(T=>{var ne;if(((ne=T.skillLevel)==null?void 0:ne.toLowerCase())==="open"){const me=Number(T.tier)||1;g.add(`Open - Tier ${me}`)}else["Beginner","Intermediate","Advanced"].includes(T.skillLevel)&&g.add(T.skillLevel)}),Array.from(g).join(", ")})():`${q.tournamentType.charAt(0).toUpperCase()+q.tournamentType.slice(1)}${q.tournamentType==="open"?` - Tier ${q.tier}`:""}`]}),n.jsx(b5,{children:n.jsxs(v5,{children:[n.jsx(R0,{}),n.jsxs("div",{children:[n.jsxs("span",{children:["₱",q.entryFee]}),n.jsx("span",{})]})]})}),n.jsx(w5,{onClick:g=>{g.stopPropagation(),Dt(q.id)},disabled:q.currentParticipants>=q.maxParticipants,children:q.currentParticipants>=q.maxParticipants?"Full":r?"Register Now":"Sign In to Register"})]})]},q.id))}):n.jsxs(L5,{children:[n.jsx("h3",{children:"No Tournaments Found"}),n.jsx("p",{children:O||W||Q?"Try adjusting your search criteria or filters to find more tournaments.":"There are no tournaments available at the moment. Please check back later."})]}),A&&n.jsx(tl,{isOpen:A,onClose:()=>B(!1),title:"Join the Tournament!",message:"Sign in or register to participate in tournaments"}),De&&Z&&n.jsx(A0,{onClick:St,children:n.jsxs(P0,{onClick:q=>q.stopPropagation(),children:[n.jsxs(D0,{children:[n.jsxs(E0,{children:["Registration Form Preview - ",Z.name]}),n.jsx(hu,{onClick:St,children:"×"})]}),n.jsxs($0,{children:[n.jsx("div",{style:{padding:"20px",background:"#f8fafc",borderRadius:"8px",marginBottom:"24px"},children:n.jsx("div",{style:{color:"#475569",fontSize:"14px",fontWeight:"500"},children:"📋 This is a preview of the registration form for this tournament. To actually register, please visit the tournament from the main tournaments page."})}),n.jsxs(Da,{children:[n.jsx(Ea,{children:"Available Tournament Categories"}),Z.tournamentCategories&&Object.values(Z.tournamentCategories).map(q=>n.jsxs("div",{style:{border:"1px solid #e2e8f0",borderRadius:"8px",padding:"16px",marginBottom:"12px",background:"#fafafa"},children:[n.jsx("div",{style:{fontWeight:"600",color:"#1e293b",marginBottom:"8px"},children:q.name}),n.jsxs("div",{style:{fontSize:"14px",color:"#64748b",marginBottom:"8px"},children:[n.jsx("strong",{children:"Skill Level:"})," ",q.skillLevel==="open"?`Open - Tier ${q.tier}`:q.skillLevel]}),q.ageRange&&n.jsxs("div",{style:{fontSize:"14px",color:"#64748b",marginBottom:"8px"},children:[n.jsx("strong",{children:"Age Range:"})," ",q.ageRange]}),n.jsxs("div",{style:{fontSize:"14px",color:"#64748b"},children:[n.jsx("strong",{children:"Entry Fee:"})," ₱",Z.entryFee]})]},q.id))]}),n.jsxs(Da,{children:[n.jsx(Ea,{children:"Required Information from Participants"}),n.jsxs("div",{style:{background:"#f8fafc",padding:"16px",borderRadius:"8px"},children:[n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsx("strong",{style:{color:"#1e293b"},children:"Player Information:"}),n.jsxs("ul",{style:{margin:"8px 0",paddingLeft:"20px",color:"#64748b"},children:[n.jsx("li",{children:"Full Name"}),n.jsx("li",{children:"Gender"}),n.jsx("li",{children:"Age"}),n.jsx("li",{children:"DUPR Ratings (Singles & Doubles)"})]})]}),n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsx("strong",{style:{color:"#1e293b"},children:"Contact Information:"}),n.jsxs("ul",{style:{margin:"8px 0",paddingLeft:"20px",color:"#64748b"},children:[n.jsx("li",{children:"Email Address"}),n.jsx("li",{children:"Contact Number"})]})]}),n.jsxs("div",{children:[n.jsx("strong",{style:{color:"#1e293b"},children:"Payment Information:"}),n.jsxs("ul",{style:{margin:"8px 0",paddingLeft:"20px",color:"#64748b"},children:[n.jsx("li",{children:"Proof of Payment (Image or PDF)"}),n.jsxs("li",{children:["Registration Fee: ₱",Z.entryFee]})]})]})]})]}),n.jsxs(Da,{children:[n.jsx(Ea,{children:"Payment Details"}),n.jsxs("div",{style:{background:"#f8fafc",padding:"16px",borderRadius:"8px"},children:[n.jsxs("div",{style:{marginBottom:"16px"},children:[n.jsx("strong",{style:{color:"#1e293b"},children:"Bank Transfer Details:"}),n.jsxs("div",{style:{marginTop:"8px",fontSize:"14px",color:"#64748b"},children:[n.jsxs("div",{children:[n.jsx("strong",{children:"Bank Name:"})," BDO Unibank"]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Account Name:"})," John Doe Tournament"]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Account Number:"})," 1234-5678-9012"]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Reference:"})," TEAM-REG-2024"]})]})]}),n.jsxs("div",{children:[n.jsx("strong",{style:{color:"#1e293b"},children:"Alternative Payment:"}),n.jsx("div",{style:{marginTop:"8px",fontSize:"14px",color:"#64748b"},children:"GCash QR Code available during registration"})]})]})]}),n.jsx("div",{style:{textAlign:"center",marginTop:"24px"},children:n.jsx("button",{onClick:St,style:{background:"#29ba9b",color:"white",border:"none",borderRadius:"8px",padding:"12px 24px",fontSize:"16px",fontWeight:"600",cursor:"pointer"},children:"Close Preview"})})]})]})})]})}const dw="/assets/pickle_bg-ByUMYAKL.png",cw=s.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`,uw=s.div`
  background: white;
  border-radius: 16px;
  padding: 0;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`,pw=s.div`
  padding: 24px 32px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,fw=s.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #234255;
  margin: 0;
`,Y0=s.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #64748b;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    background: #f1f5f9;
    color: #334155;
  }
`,mw=s.div`
  padding: 32px;
  overflow-y: auto;
  flex: 1;
`,ws=s.div`
  margin-bottom: 24px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,js=s.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #234255;
  margin-bottom: 16px;
  position: relative;
  padding-bottom: 8px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: #29ba9b;
  }
`,ks=s.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`,Mr=s.label`
  font-weight: 500;
  color: #374151;
  margin-bottom: 6px;
  font-size: 0.9rem;
`,W0=s.input`
  padding: 12px 16px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
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
    color: #9ca3af;
  }
  
  &:disabled {
    background: #f9fafb;
    color: #6b7280;
  }
`,hw=s.select`
  padding: 12px 16px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  color: #1a1a1a;
  background: white;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  
  option {
    padding: 8px;
  }
`,F0=s.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,xw=s.button`
  width: 100%;
  padding: 14px;
  background: #29ba9b;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 24px;
  transition: all 0.2s ease;
  font-size: 1rem;
  
  &:hover:not(:disabled) {
    background: #25a589;
    transform: translateY(-1px);
  }
  
  &:disabled {
    background: #94a3b8;
    cursor: not-allowed;
    transform: none;
  }
`,gw=s.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`,bw=s.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #234255;
  margin: 0 0 8px 0;
`,yw=s.p`
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
`,vw=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,ww=s.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
`,jw=s.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #234255;
  margin: 0 0 16px 0;
`,Su=s.div`
  display: flex;
  flex-direction: column;
  padding: 12px 0;
  border-bottom: 1px solid #f1f5f9;
  
  &:last-child {
    border-bottom: none;
  }
`,Cu=s.span`
  font-weight: 500;
  color: #64748b;
  font-size: 0.85rem;
  margin-bottom: 4px;
`,zu=s.span`
  font-weight: 600;
  color: #234255;
  font-size: 1rem;
`,kw=s.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
`,Sw=s.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #234255;
  margin: 0 0 16px 0;
`,Cw=s.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`,zw=s.div`
  width: 200px;
  height: 200px;
  background: #ffffff;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #64748b;
`,Lw=s.div`
  font-size: 3rem;
  margin-bottom: 8px;
`,Mw=s.p`
  font-size: 0.9rem;
  font-weight: 500;
  margin: 4px 0;
  color: #64748b;
`,V0=s.p`
  font-size: 0.8rem;
  margin: 0;
  color: #94a3b8;
  text-align: center;
  line-height: 1.3;
`,Tw=s.div`
  border: 2px dashed #e2e8f0;
  border-radius: 8px;
  padding: 24px;
  text-align: center;
  background: #f8fafc;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    border-color: #29ba9b;
    background: #f0fffe;
  }
`,Rw=s.p`
  color: #64748b;
  margin: 0;
  font-size: 0.9rem;
`,Aw=s.div`
  position: relative;
  margin-top: 16px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
`,Pw=s.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  display: block;
`,Dw=s.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(239, 68, 68, 0.9);
  color: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(239, 68, 68, 1);
  }
`,Ew=s.div`
  padding: 8px 12px;
  background: #f1f5f9;
  font-size: 0.875rem;
  color: #64748b;
  border-top: 1px solid #e2e8f0;
`,Lu=s.div`
  border: 2px dashed #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${r=>r.$filled?"#f0fffe":"#f8fafc"};
  border-color: ${r=>r.$filled?"#29ba9b":"#e2e8f0"};
  
  &:hover {
    border-color: #29ba9b;
    background: #f0fffe;
  }
`,Mu=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Tu=s.div`
  display: flex;
  flex-direction: column;
`,Ru=s.span`
  font-weight: 600;
  color: #234255;
  font-size: 0.95rem;
`;s.span`
  font-size: 0.85rem;
  color: #64748b;
  margin-top: 2px;
`;const Q0=s.span`
  font-size: 0.9rem;
  color: #64748b;
  font-style: italic;
`,I0=s.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #29ba9b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
`,J0=s.button`
  background: transparent;
  color: #ef4444;
  border: none;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  border-radius: 50%;
  transition: all 0.2s ease;
  
  &:hover {
    background: #fef2f2;
    color: #dc2626;
  }
`,Z0=s.span`
  background: #fef3c7;
  color: #92400e;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  margin-left: 8px;
`,$w=s.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  padding: 20px;
`,Bw=s.div`
  background: white;
  border-radius: 16px;
  padding: 0;
  max-width: 500px;
  width: 100%;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`,Nw=s.div`
  padding: 20px 24px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Ow=s.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #234255;
  margin: 0;
`,qw=s.div`
  padding: 20px 24px;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,Uw=s.input`
  width: 100%;
  padding: 12px 16px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.95rem;
  margin-bottom: 16px;
  flex-shrink: 0;
  
  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
`,Hw=s.div`
  flex: 1;
  overflow-y: auto;
`,_w=s.div`
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #29ba9b;
    background: #f0fffe;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`,Gw=s.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`,Yw=s.span`
  font-weight: 600;
  color: #234255;
`,Ww=s.div`
  display: block;
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.4;
`,Au=s.div`
  min-height: calc(100vh - 140px);
  padding: 50px 20px 40px 20px;
  max-width: 1100px;
  margin: 0 auto;
  background: #ffffff;
`;s.div`
  // Keeping the component definition for potential future use
  margin-bottom: 40px;
`;s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
`;const Fw=s.div`
  position: relative;
  margin-top: 70px;
  margin-left: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  width: 178px;
  height: 178px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid #FFFFFF;
`,Vw=s.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  object-fit: cover;
`,Qw=s.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #29ba9b;
  border: 1px solid white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  outline: none;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  
  &:hover {
    background: #26a085;
  }
`;s.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;const Iw=s.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: #234255;
  margin-top: 200px;
  margin-left: 30px;
  letter-spacing: -0.2px;
  flex-shrink: 0;
  min-width: 0;
  word-wrap: break-word;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-top: 150px;
  }
`;s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`;s.div`
  font-size: 0.9rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
`;s.div`
  width: 100%;
  border: 1px solid #e9ecef;
  padding: 16px;
`;s.h3`
  font-size: 1.1rem;
  font-weight: 500;
  color: #234255;
  margin: 0 0 16px 0;
  text-align: center;
`;s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;s.div`
  border: 1px solid #e9ecef;
  padding: 12px;
  text-align: center;
`;s.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #29ba9b;
  margin-bottom: 4px;
`;s.div`
  font-size: 0.9rem;
  color: #6b7280;
`;s.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f0f0f0;
`;s.h2`
  font-size: 1.4rem;
  font-weight: 600;
  color: #234255;
  margin: 0;
  position: relative;
  padding-bottom: 8px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: #29ba9b;
  }
`;s.div`
  width: 100%;
  margin-top: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
`;s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background:rgb(250, 248, 248);
  padding: 14px 20px;
  font-weight: 600;
  color: #234255;
  border-bottom: 1px solid #e5e7eb;
  font-size: 0.85rem;
`;s.div`
  background: white;
`;s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 12px 16px;
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
  }
`;s.div`
  font-size: 0.9rem;
  color: #6b7280;
  display: flex;
  align-items: center;
  
  &:nth-child(2) {
    font-weight: 600;
    color: #29ba9b;
  }
`;const Jw=s.button`
  background: white;
  color: #29ba9b;
  border: none;
  padding: 10px 18px;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  outline: none;
  
  &:hover {
    background: #f0fffe;
    color: #249e85;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  
  &:before {
    content: '✏️';
    margin-right: 6px;
    font-size: 0.9rem;
  }
`,Zw=s.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #29ba9b;
  border: 2px solid #29ba9b;
  border-radius: 12px;
  padding: 12px 20px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #26a085;
    border-color: #26a085;
    transform: translateY(-1px);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,Xw=s.button`
  background: #29ba9b;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
  outline: none;
  
  &:hover {
    background: #26a085;
    transform: translateY(-1px);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  
  &:before {
    content: '🏆';
    margin-right: 6px;
    font-size: 0.9rem;
  }
`,Kw=s.input`
  display: none;
`,e8=s.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,t8=s.div`
  margin-top: 120px;
  width: 100%;
  padding: 30px;
`,n8=s.div`
  display: flex;
  margin-bottom: 30px;
  justify-content: space-between;
  padding: 15px 0;
  border-top: 1px solid #e5e7eb;
  position: relative;
  gap: 20px;
`,i8=s.div`
  display: flex;
  background: #f8fafc;
  border-radius: 12px;
  padding: 6px;
  margin-bottom: 32px;
  border: 1px solid #e2e8f0;
  width: 100%;
  
  @media (max-width: 768px) {
    margin-bottom: 24px;
    padding: 4px;
  }
`,ra=s.button`
  flex: 1;
  padding: ${r=>r.$active!==void 0?"12px 20px":"10px 20px"};
  border: none;
  background: ${r=>r.$active!==void 0&&r.$active?"white":"transparent"};
  color: ${r=>r.$active!==void 0?r.$active?"#234255":"#64748b":r.active?"#29ba9b":"#234255"};
  font-weight: ${r=>r.$active!==void 0?r.$active?"600":"500":r.active?"600":"500"};
  font-size: ${r=>r.$active!==void 0?"0.95rem":"1rem"};
  cursor: pointer;
  transition: all 0.2s;
  border-radius: ${r=>(r.$active!==void 0,"8px")};
  white-space: nowrap;
  position: relative;
  box-shadow: ${r=>r.$active!==void 0?r.$active?"0 2px 4px rgba(0, 0, 0, 0.1)":"none":"0 1px 3px rgba(0, 0, 0, 0.08)"};
  outline: none;
  text-align: center;
  
  /* Legacy styling for profile tabs (only when $active is undefined) */
  ${r=>r.$active===void 0&&`
    border-bottom: 3px solid ${r.active?"#29ba9b":"transparent"};
    margin-bottom: -1px;
    
    &:not(:last-child):after {
      content: '|';
      position: absolute;
      right: -10px;
      top: 50%;
      transform: translateY(-50%);
      color: #e5e7eb;
      font-weight: 300;
      font-size: 1.5rem;
      pointer-events: none;
    }
  `}

  &:hover {
    color: ${r=>r.$active!==void 0&&r.$active?"#234255":"#29ba9b"};
    background: ${r=>r.$active!==void 0?r.$active?"white":"#ffffff80":"transparent"};
  }

  &:focus {
    outline: none;
  }
  
  @media (max-width: 768px) {
    padding: ${r=>r.$active!==void 0?"10px 16px":"10px 20px"};
    font-size: ${r=>r.$active!==void 0?"0.85rem":"1rem"};
  }
`,Ss=s.div`
  padding: 20px 0;
  min-height: 250px;
`,a8=s.div`
  margin-bottom: 30px;
  padding-bottom: 20px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,r8=s.h3`
  font-size: 1.2rem;
  color: #234255;
  margin-bottom: 15px;
  font-weight: 600;
  position: relative;
  display: block;
  text-align: left;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: #29ba9b;
  }
`,o8=s.p`
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 15px;
  font-size: 0.95rem;
  text-align: left;
  
  strong {
    color: #234255;
    font-weight: 600;
  }
`;s.div`
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #f9fafb;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }
`;s.h4`
  font-size: 1.2rem;
  color: #234255;
  margin-bottom: 15px;
  font-weight: 600;
`;s.div`
  margin-bottom: 10px;
  color: #6b7280;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 8px;
  
  strong {
    color: #234255;
    font-weight: 600;
  }
`;s.div`
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9fafb;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }
`;s.div`
  flex: 1;
`;s.h4`
  font-size: 1.2rem;
  color: #234255;
  margin-bottom: 12px;
  font-weight: 600;
`;s.div`
  color: #6b7280;
  margin-bottom: 8px;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:before {
    content: '📅';
    font-size: 0.9rem;
  }
`;s.div`
  color: #6b7280;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  
  &:before {
    content: '📍';
    font-size: 0.9rem;
  }
`;s.div`
  padding: 3px 8px;
  border-radius: 2px;
  font-size: 0.75rem;
  font-weight: 400;
  background: ${r=>{switch(r.status){case"upcoming":return"#f3f4f6";case"active":return"#ecfdf5";case"completed":return"#eff6ff";default:return"#f3f4f6"}}};
  color: ${r=>{switch(r.status){case"upcoming":return"#4b5563";case"active":return"#047857";case"completed":return"#2563eb";default:return"#4b5563"}}};
  display: inline-block;
  text-align: center;
  min-width: 70px;
`;const l8=s.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,s8=s.div`
  background: white;
  border: 1px solid #f1f5f9;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    border-color: #e2e8f0;
  }
`,d8=s.div`
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
`,c8=s.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
`,u8=s.h3`
  font-size: 1.3rem;
  font-weight: 700;
    color: #0f172a;
  margin: 0 0 12px;
    line-height: 1.3;
`;s.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #ecfdf5;
  border-radius: 25px;
  color: #059669;
  border: 1px solid #6ee7b7;
  font-weight: 600;
  transition: all 0.2s ease;
  font-size: 0.8rem;
  margin-bottom: 16px;

  &:hover {
    background: #d1fae5;
    border-color: #34d399;
  }
`;const fp=s.div`
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
`,p8=s(fp)`
  margin-bottom: 8px;
`,f8=s(fp)`
  margin-bottom: 8px;
  color: #64748b;
  font-size: 0.9rem;
  
  svg {
    width: 16px;
    height: 16px;
    color: #29ba9b;
    flex-shrink: 0;
  }
`;s.div`
  margin-bottom: 16px;
`;s.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  color: #334155;
  margin-bottom: 12px;
  
  svg {
    width: 16px;
    height: 16px;
    color: #29ba9b;
    flex-shrink: 0;
  }
`;s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;s.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s;

  &:hover {
    background: #f1f5f9;
    border-color: #cbd5e1;
  }
`;s.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
`;s.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #29ba9b;
  flex-shrink: 0;
`;s.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 2px;
`;s.div`
  font-size: 0.8rem;
  color: #64748b;
`;s.div`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${r=>r.$isFull?"#ef4444":"#29ba9b"};
  background: ${r=>r.$isFull?"#fef2f2":"#f0fdf4"};
  padding: 4px 8px;
  border-radius: 6px;
  border: 1px solid ${r=>r.$isFull?"#fecaca":"#bbf7d0"};
`;const m8=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
`,wg=s.div`
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
`,h8=s(wg)`
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
`,x8=s.button`
  width: 100%;
  padding: 14px;
  background: #29ba9b;
  color: white;
  border: none;
  border-radius: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.2s ease;
  font-size: 0.95rem;
  outline: none;
  
  &:hover:not(:disabled) {
    background: #25a589;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(41, 186, 155, 0.2);
  }
  
  &:focus:not(:disabled) {
    outline: none;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  
  &:disabled {
    background: #f1f5f9;
    color: #94a3b8;
    cursor: not-allowed;
  }
`,g8=s.div`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  backdrop-filter: blur(8px);
  z-index: 1;
  
  ${r=>{switch(r.status.toLowerCase()){case"upcoming":return`
          background: rgba(59, 130, 246, 0.9);
          color: white;
          border: 1px solid rgba(59, 130, 246, 0.3);
        `;case"active":return`
          background: rgba(34, 197, 94, 0.9);
          color: white;
          border: 1px solid rgba(34, 197, 94, 0.3);
        `;case"completed":return`
          background: rgba(107, 114, 128, 0.9);
          color: white;
          border: 1px solid rgba(107, 114, 128, 0.3);
        `;default:return`
          background: rgba(107, 114, 128, 0.9);
          color: white;
          border: 1px solid rgba(107, 114, 128, 0.3);
        `}}}
`,b8=s.div`
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid #f1f5f9;
  font-size: 0.875rem;
  color: #64748b;
  display: flex;
  align-items: center;
  gap: 6px;
  
  svg {
    width: 14px;
    height: 14px;
    color: #94a3b8;
  }
`,y8=s.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`,v8=s.div`
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
`,w8=s.input`
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
`,j8=s.button`
  padding: 12px 20px;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1.5px solid #29ba9b;
  background: #29ba9b;
  color: white;
  white-space: nowrap;
  min-width: 140px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background: #26a085;
    border-color: #26a085;
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;s.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;s.div`
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
`;s.div`
  height: 160px;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${r=>{switch(r.$imageIndex){case 0:return'url("https://images.unsplash.com/photo-1686721135030-e2ab79e27b16?q=80&w=1170&auto=format&fit=crop")';case 1:return'url("https://images.unsplash.com/photo-1515017804404-92b19fdfe6ac?q=80&w=1440&auto=format&fit=crop")';case 2:return'url("https://plus.unsplash.com/premium_photo-1709932754899-5c36599fface?q=80&w=1209&auto=format&fit=crop")';default:return'url("https://images.unsplash.com/photo-1686721135030-e2ab79e27b16?q=80&w=1170&auto=format&fit=crop")'}}};

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
`;s.div`
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
    margin-bottom: 16px;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;s.div`
  display: flex;
  gap: 12px;
  font-size: 0.875rem;
  color: #64748b;
  flex-wrap: wrap;
  margin-bottom: 16px;
  
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
`;s.span`
  display: inline-flex;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 12px;
  background: ${r=>r.type==="club"?"#f0f9ff":"#f0fdf4"};
  color: ${r=>r.type==="club"?"#0369a1":"#166534"};
`;s.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;s.span`
  padding: 2px 8px;
  background: #f1f5f9;
  color: #475569;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
`;s.div`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 6px 12px;
  background: rgba(41, 186, 155, 0.9);
  color: white;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 500;
  backdrop-filter: blur(4px);
`;s.div`
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid #f1f5f9;
  font-size: 0.875rem;
  color: #64748b;
  display: flex;
  align-items: center;
  gap: 6px;
  
  svg {
    width: 14px;
    height: 14px;
    color: #94a3b8;
  }
`;const k8=s.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`,S8=s.div`
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
`,C8=s.input`
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
`,z8=s.button`
  padding: 12px 20px;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1.5px solid #29ba9b;
  background: #29ba9b;
  color: white;
  white-space: nowrap;
  min-width: 160px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background: #26a085;
    border-color: #26a085;
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,L8=s.div`
  animation: fadeIn 0.3s ease;
  margin-top: 24px;

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
`,M8=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
`,T8=s.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  color: #64748b;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #f1f5f9;
    border-color: #cbd5e0;
    color: #475569;
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`,R8=s.h2`
  font-size: 2.5rem;
  color: #234255;
  margin-bottom: 12px;
  font-weight: 800;
  letter-spacing: -0.5px;
`,A8=s.div`
  position: relative;
  height: 300px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 24px;
  background: linear-gradient(135deg, #29ba9b, #239b83);
  display: flex;
  align-items: center;
  justify-content: center;

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
    height: 80px;
    background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
  }
  
  @media (max-width: 768px) {
    height: 200px;
    border-radius: 12px;
  }
`,P8=s.div`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  backdrop-filter: blur(10px);
  z-index: 10;
  
  ${r=>{var d;switch((d=r.$status)==null?void 0:d.toLowerCase()){case"open":return`
          background: rgba(220, 252, 231, 0.95);
          color: #166534;
          border: 1px solid #86efac;
        `;case"closed":return`
          background: rgba(254, 226, 226, 0.95);
          color: #991b1b;
          border: 1px solid #fca5a5;
        `;case"upcoming":return`
          background: rgba(224, 242, 254, 0.95);
          color: #0369a1;
          border: 1px solid #7dd3fc;
        `;default:return`
          background: rgba(241, 245, 249, 0.95);
          color: #475569;
          border: 1px solid #e2e8f0;
        `}}}
`,D8=s.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
    gap: 32px;
  }
`,E8=s.div``,$8=s.div`
  width: 300px;
  flex-shrink: 0;
  
  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 32px;
  }
`,B8=s.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #334155;
  margin: 0 0 16px;
`,N8=s.div`
  text-align: center;
  margin-bottom: 20px;

  .price {
    font-size: 2rem;
    font-weight: 800;
    color: #29ba9b;
    margin-bottom: 4px;
  }

  .prize-pool {
    font-size: 14px;
    color: #64748b;
  }
`,O8=s.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,X0=s.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px 18px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid;
  min-width: 100px;
  justify-content: center;
  
  svg {
    width: 14px;
    height: 14px;
  }
  
  ${r=>r.variant==="primary"?`
    background: #29ba9b;
    color: white;
    border-color: #29ba9b;
    
    &:hover {
      background: #239b83;
      transform: translateY(-1px);
    }
  `:`
    background: #f1f5f9;
    color: #475569;
    border-color: #e2e8f0;
    
    &:hover {
      background: #e2e8f0;
      border-color: #cbd5e1;
    }
  `}
`;s.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: ${r=>{switch(r.type){case"beginner":return"#f0fdf4";case"intermediate":return"#fef3c7";case"advanced":return"#fef2f2";case"open":return"#f0f9ff";default:return"#f8fafc"}}};
  border-radius: 20px;
  color: ${r=>{switch(r.type){case"beginner":return"#15803d";case"intermediate":return"#d97706";case"advanced":return"#dc2626";case"open":return"#0369a1";default:return"#475569"}}};
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 16px;
  border: 1px solid ${r=>{switch(r.type){case"beginner":return"#bbf7d0";case"intermediate":return"#fde68a";case"advanced":return"#fecaca";case"open":return"#bae6fd";default:return"#e2e8f0"}}};

  svg {
    width: 14px;
    height: 14px;
  }
`;const K0=s.p`
  color: #64748b;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 20px;
  }
`,$a=s.div`
  margin-bottom: 32px;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`,Ba=s.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #334155;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    width: 18px;
    height: 18px;
    color: #29ba9b;
  }
`,q8=s.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  overflow: hidden;
`,Tr=s.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #e2e8f0;
  transition: all 0.2s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #f1f5f9;
  }

  @media (max-width: 768px) {
    padding: 12px 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
`,Rr=s.div`
  width: 36px;
  height: 36px;
  background: #29ba9b;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  flex-shrink: 0;

  svg {
    width: 18px;
    height: 18px;
    color: white;
  }

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    margin-right: 0;
    margin-bottom: 4px;
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
`,Ar=s.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    width: 100%;
  }
`,Pr=s.div`
  font-weight: 600;
  color: #475569;
  font-size: 0.9rem;
`,Dr=s.div`
  color: #334155;
  font-weight: 500;
  font-size: 0.9rem;
  text-align: right;
  
  @media (max-width: 768px) {
    text-align: left;
  }
`;s.div`
  display: flex;
  background: #f8fafc;
  border-radius: 10px;
  padding: 4px;
  margin-bottom: 24px;
  border: 1px solid #e2e8f0;
  width: 100%;
  
  @media (max-width: 768px) {
    margin-bottom: 20px;
    padding: 3px;
  }
`;s.button`
  flex: 1;
  padding: 10px 16px;
  border: none;
  background: ${r=>r.$active?"white":"transparent"};
  color: ${r=>r.$active?"#234255":"#64748b"};
  font-weight: ${r=>r.$active?"600":"500"};
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 6px;
  white-space: nowrap;
  position: relative;
  box-shadow: ${r=>r.$active?"0 1px 3px rgba(0, 0, 0, 0.1)":"none"};
  outline: none;
  text-align: center;

  &:hover {
    color: ${r=>r.$active?"#234255":"#29ba9b"};
    background: ${r=>r.$active?"white":"#ffffff80"};
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 0.8rem;
  }
`;s.div`
  animation: fadeIn 0.3s ease;

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
`;s.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;s.button`
  flex: 1;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1.5px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  ${r=>r.variant==="primary"?`
    background: #29ba9b;
    color: white;
    border-color: #29ba9b;
    
    &:hover {
      background: #26a085;
      border-color: #26a085;
      transform: translateY(-1px);
    }
  `:r.variant==="secondary"?`
    background: #3b82f6;
    color: white;
    border-color: #3b82f6;
    
    &:hover {
      background: #2563eb;
      border-color: #2563eb;
      transform: translateY(-1px);
    }
  `:`
    background: white;
    color: #6b7280;
    border-color: #e2e8f0;
    
    &:hover {
      background: #f8fafc;
      border-color: #cbd5e0;
    }
  `}
  
  svg {
    width: 16px;
    height: 16px;
  }
`;const U8=s.div`
  background: #f8fafc;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid #e2e8f0;
`,H8=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #334155;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      width: 20px;
      height: 20px;
      color: #29ba9b;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`,_8=s.div`
  display: flex;
  gap: 8px;

  @media (max-width: 768px) {
    width: 100%;
  }
`,ex=s.button`
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    width: 16px;
    height: 16px;
  }

  ${r=>r.$primary?`
    background: #29ba9b;
    color: white;
    border: none;

    &:hover {
      background: #239b83;
    }
  `:`
    background: white;
    color: #475569;
    border: 1px solid #e2e8f0;

    &:hover {
      background: #f8fafc;
      border-color: #cbd5e1;
    }
  `}

  @media (max-width: 768px) {
    flex: 1;
    justify-content: center;
  }
`,G8=s.div`
  margin-bottom: 16px;

  .venue-name {
    font-size: 1.1rem;
    font-weight: 600;
    color: #234255;
    margin-bottom: 4px;
  }

  .venue-address {
    color: #64748b;
    margin-bottom: 8px;
  }

  .coordinates {
    font-size: 12px;
    color: #94a3b8;
  }
`,Y8=s.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #e2e8f0, #cbd5e1);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #64748b;
  font-size: 14px;
  border: 2px dashed #94a3b8;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: linear-gradient(135deg, #cbd5e1, #94a3b8);
    border-color: #64748b;
  }

  &::before {
    content: '📍';
    font-size: 3rem;
    margin-bottom: 8px;
  }

  .map-text {
    text-align: center;
    
    .main-text {
      font-weight: 600;
      margin-bottom: 4px;
    }
    
    .sub-text {
      font-size: 12px;
      opacity: 0.7;
    }
  }
`,W8=s.div`
  background: white;
  border-radius: 16px;
  padding: 12px;
  border: 1px solid #e2e8f0;
  width: 100%;

  @media (min-width: 768px) {
    padding: 16px;
  }
`,F8=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 16px;
  }
`,tx=s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-width: 0;

  @media (min-width: 768px) {
    gap: 12px;
  }
`,Cs=s.div`
  text-align: left;
  margin-bottom: 6px;

  @media (min-width: 768px) {
    margin-bottom: 8px;
  }
  
  h4 {
    font-size: 0.85rem;
    font-weight: 600;
    color: #334155;
    margin: 0 0 3px;
    line-height: 1.2;
    text-align: left;

    @media (min-width: 768px) {
      font-size: 1rem;
      margin: 0 0 4px;
    }
  }
  
  .round-subtitle {
    font-size: 0.7rem;
    color: #64748b;
    line-height: 1.1;
    text-align: left;

    @media (min-width: 768px) {
      font-size: 0.8rem;
    }
  }
`,zs=s.div`
  background: ${r=>r.$isWinner?"#dcfce7":"#f8fafc"};
  border: 2px solid ${r=>r.$isWinner?"#16a34a":"#e2e8f0"};
  border-radius: 8px;
  padding: 8px 10px;
  margin: 2px 0;
  transition: all 0.2s;
  position: relative;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .match-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2px;
  }

  .player-name {
    font-weight: 600;
    color: ${r=>r.$isWinner?"#166534":"#334155"};
    font-size: 0.8rem;
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1;
    text-align: left;

    @media (min-width: 768px) {
      font-size: 0.85rem;
    }
  }

  .player-seed {
    background: #29ba9b;
    color: white;
    padding: 1px 4px;
    border-radius: 3px;
    font-size: 0.65rem;
    font-weight: 600;
    margin-right: 4px;
    flex-shrink: 0;

    @media (min-width: 768px) {
      padding: 2px 6px;
      font-size: 0.7rem;
      margin-right: 6px;
    }
  }

  .match-score {
    font-weight: 700;
    color: ${r=>r.$isWinner?"#166534":"#64748b"};
    font-size: 0.75rem;
    flex-shrink: 0;

    @media (min-width: 768px) {
      font-size: 0.8rem;
    }
  }

  .match-result {
    font-size: 0.7rem;
    color: ${r=>r.$isWinner?"#15803d":"#94a3b8"};
    text-align: left;
    margin-top: 2px;
    line-height: 1.1;

    @media (min-width: 768px) {
      font-size: 0.75rem;
      margin-top: 4px;
    }
  }
`;s.div`
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  border-radius: 12px;
  padding: 12px 16px;
  margin: 4px 0;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  font-size: 0.85rem;
  font-style: italic;
`;const Pu=s.div`
  position: absolute;
  border: 2px solid #cbd5e1;
  
  &.horizontal {
    height: 2px;
    width: 40px;
  }
  
  &.vertical {
    width: 2px;
    height: ${r=>r.height}px;
  }
  
  &.corner-right {
    border-left: none;
    border-bottom: none;
    border-top-right-radius: 8px;
  }
  
  &.corner-left {
    border-right: none;
    border-bottom: none;
    border-top-left-radius: 8px;
  }
`,V8=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-width: 0;
  
  .championship-trophy {
    font-size: 2rem;
    margin-bottom: 6px;

    @media (min-width: 768px) {
      font-size: 2.5rem;
      margin-bottom: 8px;
    }
  }
  
  .championship-match {
    margin: 6px 0;
    width: 100%;

    @media (min-width: 768px) {
      margin: 8px 0;
    }
  }
`,Q8=s.div`
  margin-bottom: 32px;

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: #334155;
    margin: 0 0 20px 0;
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      width: 20px;
      height: 20px;
      color: #29ba9b;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 24px;

    h3 {
      font-size: 1.2rem;
    }
  }
`,I8=s.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 16px;
    margin-bottom: 16px;
  }
`,J8=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e2e8f0;

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #334155;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .group-status {
    font-size: 0.8rem;
    padding: 4px 8px;
    border-radius: 4px;
    font-weight: 500;
    background: #f0fdf4;
    color: #166534;
    border: 1px solid #bbf7d0;
  }

  @media (max-width: 768px) {
    h4 {
      font-size: 1rem;
    }
  }
`,Z8=s.div`
  .standings-header {
    display: grid;
    grid-template-columns: 1fr 60px 60px 70px 70px;
    gap: 8px;
    padding: 12px 16px;
    background: #f8fafc;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 600;
    color: #64748b;
    margin-bottom: 12px;
    text-align: center;
    border: 1px solid #e2e8f0;
    
    div:first-child {
      text-align: left;
    }

    @media (min-width: 768px) {
      grid-template-columns: 1fr 70px 70px 80px 80px;
      gap: 10px;
      padding: 14px 18px;
      font-size: 0.85rem;
    }
  }
`,X8=s.div`
  display: grid;
  grid-template-columns: 1fr 60px 60px 70px 70px;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 0.85rem;
  margin-bottom: 6px;
  background: ${r=>r.$qualified?"#dcfce7":"#f8fafc"};
  border: 1px solid ${r=>r.$qualified?"#bbf7d0":"#e2e8f0"};
  transition: all 0.2s ease;

  &:hover {
    background: ${r=>r.$qualified?"#bbf7d0":"#f1f5f9"};
    border-color: ${r=>r.$qualified?"#86efac":"#cbd5e1"};
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 70px 70px 80px 80px;
    gap: 10px;
    padding: 14px 18px;
    font-size: 0.9rem;
    margin-bottom: 8px;
  }
  
  .player-info {
    display: flex;
    align-items: center;
    gap: 10px;

    @media (min-width: 768px) {
      gap: 12px;
    }
  }
  
  .position {
    background: ${r=>r.$qualified?"#16a34a":"#64748b"};
    color: white;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 600;
    flex-shrink: 0;

    @media (min-width: 768px) {
      width: 22px;
      height: 22px;
      font-size: 0.8rem;
    }
  }
  
  .player-name {
    font-weight: 500;
    color: ${r=>r.$qualified?"#166534":"#334155"};
    text-align: left;
    font-size: 0.85rem;
    line-height: 1.3;

    @media (min-width: 768px) {
      font-size: 0.9rem;
    }
  }
  
  .round-wins, .round-losses, .win-points, .loss-points {
    text-align: center;
    font-weight: 600;
    color: ${r=>r.$qualified?"#166534":"#334155"};
    font-size: 0.85rem;

    @media (min-width: 768px) {
      font-size: 0.9rem;
    }
  }
  
  /* Legacy support */
  .wins, .points {
    text-align: center;
    font-weight: 600;
    color: ${r=>r.$qualified?"#166534":"#334155"};
    font-size: 0.85rem;

    @media (min-width: 768px) {
      font-size: 0.9rem;
    }
  }
`,K8=s.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  position: static;

  @media (max-width: 1023px) {
    margin-top: 32px;
  }
`,e6=s.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  margin-bottom: 20px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`,t6=s.div`
  padding: 20px;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f1f5f9;
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`,n6=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;s.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .icon {
    width: 40px;
    height: 40px;
    background: #29ba9b;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    gap: 10px;

    .icon {
      width: 36px;
      height: 36px;
      font-size: 1.1rem;
    }
  }
`;const i6=s.div`
  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #334155;
    margin: 0 0 4px 0;
  }

  .details {
    font-size: 0.9rem;
    color: #64748b;
    display: flex;
    align-items: center;
    gap: 16px;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.1rem;
    }

    .details {
      font-size: 0.85rem;
      gap: 12px;
    }
  }
`,a6=s.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  transform: ${r=>r.$expanded?"rotate(180deg)":"rotate(0deg)"};

  svg {
    width: 14px;
    height: 14px;
    color: #64748b;
  }

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;

    svg {
      width: 12px;
      height: 12px;
    }
  }
`,r6=s.div`
  padding: 20px;
  background: white;
  display: ${r=>r.$expanded?"block":"none"};
  animation: ${r=>r.$expanded?"slideDown 0.3s ease":"none"};

  @keyframes slideDown {
    from {
      opacity: 0;
      max-height: 0;
    }
    to {
      opacity: 1;
      max-height: 1000px;
    }
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`;s.div`
  text-align: center;
  padding: 40px 20px;
  color: #64748b;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px dashed #cbd5e1;

  .icon {
    font-size: 3rem;
    margin-bottom: 16px;
    opacity: 0.5;
  }

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #475569;
    margin: 0 0 8px 0;
  }

  p {
    font-size: 0.9rem;
    margin: 0;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    padding: 32px 16px;

    .icon {
      font-size: 2.5rem;
    }

    h4 {
      font-size: 1rem;
    }

    p {
      font-size: 0.85rem;
    }
  }
`;const o6=()=>{var ll,ma,ha,Rn;const{user:r,showNotification:d}=pi(),u=ua(),c=Jn(),f=y.useRef(null),[h,w]=y.useState("about"),[k,v]=y.useState(!0),[x,M]=y.useState(!1),[O,E]=y.useState(!1),[W,$]=y.useState("I've been playing pickleball for 3 years and love the sport! Looking to improve my game and meet new players."),[Q,V]=y.useState(""),[A,B]=y.useState(""),[z,re]=y.useState(null),[C,D]=y.useState("details"),[K,ke]=y.useState({}),[we,ce]=y.useState(!1),[le,qe]=y.useState(null),[mt,ht]=y.useState(!1),[Je,F]=y.useState(""),[J,ye]=y.useState(""),[De,S]=y.useState(0),[Z,pe]=y.useState([{pplId:"PPL001",name:"John Doe",gender:"male",age:28,duprRatings:{singles:"3.5",doubles:"3.7"}},{pplId:"PPL002",name:"Jane Smith",gender:"female",age:25,duprRatings:{singles:"4.0",doubles:"4.2"}},{pplId:"PPL003",name:"Mike Johnson",gender:"male",age:32,duprRatings:{singles:"3.8",doubles:"3.9"}},{pplId:"PPL004",name:"Sarah Wilson",gender:"female",age:29,duprRatings:{singles:"3.2",doubles:"3.4"}},{pplId:"PPL005",name:"David Brown",gender:"male",age:35,duprRatings:{singles:"4.5",doubles:"4.3"}}]),[I,fe]=y.useState({category:"",primaryPlayer:{pplId:"",name:"",gender:"male",duprRatings:{singles:"",doubles:""}},partner:{pplId:"",name:"",gender:""},teamMembers:[{pplId:"",name:"",gender:"male",required:!0,label:"Team Player 1"},{pplId:"",name:"",gender:"female",required:!0,label:"Team Player 2"},{pplId:"",name:"",gender:"male",required:!0,label:"Team Player 3"},{pplId:"",name:"",gender:"female",required:!1,label:"Additional Player 1 (Optional)"},{pplId:"",name:"",gender:"male",required:!1,label:"Additional Player 2 (Optional)"}],email:"",contactNumber:"",proofOfPayment:null});y.useEffect(()=>{const b=setTimeout(()=>{v(!1)},800);return()=>clearTimeout(b)},[]),y.useEffect(()=>{var b;(b=c.state)!=null&&b.activeTab&&w(c.state.activeTab)},[c.state]),y.useEffect(()=>{S(b=>b+1)},[(ll=I.primaryPlayer)==null?void 0:ll.age,(ma=I.primaryPlayer)==null?void 0:ma.duprRatings,(ha=I.partner)==null?void 0:ha.age,(Rn=I.partner)==null?void 0:Rn.duprRatings,I.teamMembers]);const Ce=()=>{var b;(b=f.current)==null||b.click()},ve=b=>{b.target.files[0]&&d("Profile picture updated!","success")},nt=()=>{E(!O),d(O?"Edit mode disabled":"Edit mode enabled","info")},Ae=()=>{M(!0)},it=()=>{M(!1),d("Bio updated successfully!","success")},qt=()=>{$("I've been playing pickleball for 3 years and love the sport! Looking to improve my game and meet new players."),M(!1)},he=()=>{d("Create Club functionality coming soon!","info")},Qe=()=>{u("/host-tournament")},bn=b=>{re(b),D("details")},qn=()=>{re(null),D("details")},_=()=>{d("Apply as Coach functionality coming soon!","info")},de=b=>{ke(G=>({...G,[b]:!G[b]}))},te=async b=>{if(!r){d("Please sign in to register for tournaments","error");return}let G=g.find(ae=>ae.id===b);!G&&z&&z.id===b&&(G=z),G&&(qe(G),ce(!0),fe(ae=>{const ge=r?{pplId:"PPL999",name:r.name||`${r.firstName} ${r.lastName}`||"",gender:r.gender||"male",age:r.age||25,duprRatings:{singles:"4.2",doubles:"4.0"}}:{pplId:"",name:"",gender:"male",age:"",duprRatings:{singles:"",doubles:""}},Ge=ge.gender;return Object.values((G==null?void 0:G.tournamentCategories)||{}).filter(Ue=>vt(Ue.name,Ge)),{category:"",primaryPlayer:ge,partner:{pplId:"",name:"",gender:""},teamMembers:[{pplId:"",name:"",gender:"male",required:!0,label:"Male Player 2"},{pplId:"",name:"",gender:"female",required:!0,label:"Female Player 1"},{pplId:"",name:"",gender:"female",required:!0,label:"Female Player 2"},{pplId:"",name:"",gender:"male",required:!1,label:"Optional Player 1"},{pplId:"",name:"",gender:"female",required:!1,label:"Optional Player 2"}],name:"",email:"",contactNumber:"",proofOfPayment:null}}))},ze=(b,G)=>{fe(ae=>{var Ct,gt,Ue,Ut,Wn,ei;const ge={...ae,[b]:G};if(["primaryPlayer","partner","teamMembers"].some(pt=>b.startsWith(pt))&&ae.category&&le){const pt=Object.values((le==null?void 0:le.tournamentCategories)||{}).find($e=>$e.id===ae.category);if(pt){const $e={...ae,[b]:G},rt=[];(Ct=$e.primaryPlayer)!=null&&Ct.age?rt.push($e.primaryPlayer.age):r!=null&&r.age&&rt.push(r.age),(gt=$e.partner)!=null&&gt.age&&rt.push($e.partner.age),Array.isArray($e.teamMembers)&&$e.teamMembers.forEach(tn=>{tn.age&&rt.push(tn.age)});const Ze=pt.ageGroup||pt.ageCategory;Ze&&rt.length>0&&(rt.every(pn=>Rt(pn,Ze))||(console.log(`🚫 Clearing category "${pt.name}" - players no longer meet age requirement (${Ze}). Player ages: [${rt.join(", ")}]`),ge.category=""));const un=pt.skillLevel;if(un&&ge.category){const tn=[];if((Ue=$e.primaryPlayer)!=null&&Ue.duprRatings){const pn=wt(pt.name);let Jt="singles";pn==="doubles"&&(Jt="doubles");const nn=$e.primaryPlayer.duprRatings[Jt];nn&&tn.push(parseFloat(nn))}else if(r!=null&&r.duprRatings){const pn=wt(pt.name);let Jt="Singles";pn==="doubles"&&(Jt="Doubles");const nn=r.duprRatings.find(sl=>sl.type===Jt);nn!=null&&nn.rating&&tn.push(parseFloat(nn.rating))}if((Ut=$e.partner)!=null&&Ut.duprRatings){let Jt=wt(pt.name)==="doubles"?"doubles":"singles";const nn=$e.partner.duprRatings[Jt];nn&&tn.push(parseFloat(nn))}Array.isArray($e.teamMembers)&&$e.teamMembers.forEach(pn=>{if(pn.duprRatings){const nn=pn.duprRatings["singles"];nn&&tn.push(parseFloat(nn))}}),tn.length>0&&(tn.every(Jt=>at(Jt,un))||(console.log(`🚫 Clearing category "${pt.name}" - players no longer meet DUPR requirement for ${un} level. Player DUPR ratings: [${tn.join(", ")}]`),ge.category=""))}}}if(b==="category"&&G&&le)try{const pt=Object.values((le==null?void 0:le.tournamentCategories)||{}).find(rt=>rt.id===G),$e=wt((pt==null?void 0:pt.name)||"");if(pt!=null&&pt.name){const rt=pt.name.toLowerCase();rt.includes("women's")||rt.includes("female")?ge.primaryPlayer={...ae.primaryPlayer,gender:"female"}:(rt.includes("men's")||rt.includes("male"))&&(ge.primaryPlayer={...ae.primaryPlayer,gender:"male"})}if($e==="team"){const rt=Ei(((Wn=ge.primaryPlayer)==null?void 0:Wn.gender)||((ei=ae.primaryPlayer)==null?void 0:ei.gender)||"male");Array.isArray(rt)&&(ge.teamMembers=rt.map(Ze=>({pplId:"",name:"",gender:Ze.gender||"male",required:Ze.required||!1,label:Ze.label||"Team Member"})))}$e==="doubles"&&(ge.partner={pplId:"",name:"",gender:""})}catch(pt){console.error("Error updating registration form:",pt)}return ge})},Le=b=>{const G=b.target.files[0];if(G){if(!["image/jpeg","image/png","image/jpg","application/pdf"].includes(G.type)){alert("Please upload a valid image (JPG, PNG) or PDF file");return}if(G.size>5242880){alert("File size must be less than 5MB");return}fe(Ge=>({...Ge,proofOfPayment:G}))}},xt=()=>{fe(b=>({...b,proofOfPayment:null}))},Dt=async b=>{b.preventDefault();try{console.log("Registration submitted:",{tournament:le.name,form:I}),ce(!1),d("Registration submitted successfully! You will receive a confirmation email shortly.","success")}catch(G){console.error("Registration failed:",G),d("Registration failed. Please try again.","error")}},St=()=>{ce(!1),qe(null)},Rt=(b,G)=>{if(!G||!b)return!0;const ae=parseInt(G.replace("+",""));return b>=ae},fi=()=>{var G,ae;const b=[];return(G=I.primaryPlayer)!=null&&G.age?b.push(I.primaryPlayer.age):r!=null&&r.age&&b.push(r.age),(ae=I.partner)!=null&&ae.age&&b.push(I.partner.age),Array.isArray(I.teamMembers)&&I.teamMembers.forEach(ge=>{ge.age&&b.push(ge.age)}),b},at=(b,G)=>{if(!G)return!0;const ae=b?parseFloat(b):null;switch(G.toLowerCase()){case"beginner":return ae===null||ae<=3;case"intermediate":return ae===null||ae>=2&&ae<=3.9;case"advanced":return ae===null||ae>=3.5&&ae<=4.5;case"open":case"open-tier-1":case"open-tier-2":case"open-tier-3":return ae===null||ae>=4;default:return!0}},Un=b=>{var ge,Ge,Ct,gt;const G=[];let ae="singles";if(b&&b.toLowerCase().includes("doubles")&&(ae="doubles"),(Ge=(ge=I.primaryPlayer)==null?void 0:ge.duprRatings)!=null&&Ge[ae])G.push(parseFloat(I.primaryPlayer.duprRatings[ae]));else if(r!=null&&r.duprRatings){const Ue={singles:"Singles",doubles:"Doubles"},Ut=r.duprRatings.find(Wn=>Wn.type===Ue[ae]);Ut!=null&&Ut.rating&&G.push(parseFloat(Ut.rating))}return(gt=(Ct=I.partner)==null?void 0:Ct.duprRatings)!=null&&gt[ae]&&G.push(parseFloat(I.partner.duprRatings[ae])),Array.isArray(I.teamMembers)&&I.teamMembers.forEach(Ue=>{var Ut;(Ut=Ue.duprRatings)!=null&&Ut[ae]&&G.push(parseFloat(Ue.duprRatings[ae]))}),G},vt=(b,G)=>{if(console.log(`🔍 Gender Filter Debug: categoryName="${b}", userGender="${G}" (type: ${typeof G})`),!b||!G)return console.log(`⚠️ Missing data: categoryName=${!!b}, userGender=${!!G} - returning true`),!0;const ae=b.toLowerCase(),ge=G.toLowerCase().trim();return console.log(`🔍 Processing: categoryLower="${ae}", userGenderLower="${ge}"`),ge==="male"?(console.log(`👨 Male user detected - checking category: "${ae}"`),ae.includes("team")?(console.log("✅ Male: Team category allowed"),!0):ae.includes("mixed")?(console.log("✅ Male: Mixed category allowed"),!0):ae.includes("women's")||ae.includes("women")||ae.includes("female")?(console.log(`❌ Male: Women's category denied - "${ae}"`),!1):ae.includes("men's")||ae.includes("men")||ae.includes("male")?(console.log("✅ Male: Men's category allowed"),!0):(console.log(`❌ Male: Category denied - "${ae}"`),!1)):ge==="female"?(console.log(`👩 Female user detected - checking category: "${ae}"`),ae.includes("team")?(console.log("✅ Female: Team category allowed"),!0):ae.includes("mixed")?(console.log("✅ Female: Mixed category allowed"),!0):ae.includes("women's")||ae.includes("women")||ae.includes("female")?(console.log("✅ Female: Women's category allowed"),!0):(console.log(`❌ Female: Category denied - "${ae}"`),!1)):(console.log(`⚠️ Unknown gender "${ge}" - returning true by default`),!0)},en=(b,G)=>{if(!vt(b.name,G))return console.log(`❌ Category "${b.name}" denied due to gender restriction`),!1;const ge=fi(),Ge=b.ageGroup||b.ageCategory;if(Ge&&ge.length>0&&!ge.every(Ue=>Rt(Ue,Ge)))return console.log(`❌ Category "${b.name}" denied - some players don't meet age requirement (${Ge}). Player ages: [${ge.join(", ")}]`),!1;const Ct=b.skillLevel;if(Ct){const gt=Un(b.name);if(gt.length>0&&!gt.every(Ut=>at(Ut,Ct)))return console.log(`❌ Category "${b.name}" denied - some players don't meet DUPR requirement for ${Ct} level. Player DUPR ratings: [${gt.join(", ")}]`),!1}return console.log(`✅ Category "${b.name}" allowed - all eligibility checks passed`),!0},wt=b=>{if(!b)return"singles";const G=b.toLowerCase();return G.includes("doubles")?"doubles":G.includes("team")?"team":"singles"},on=(b,G)=>!b||!G?"":b.toLowerCase().includes("doubles")?G.doubles||"":G.singles||"",pa=(b,G)=>{if(!b)return["male","female"];const ae=b.toLowerCase();return ae.includes("men's")&&!ae.includes("mixed")?["male"]:ae.includes("women's")&&!ae.includes("mixed")?["female"]:ae.includes("mixed")?G==="male"?["female"]:["male"]:["male","female"]},Ei=b=>{try{return le&&le.id==="team-championship-2024"?b==="male"?[{gender:"male",required:!0,label:"Required Male Player"},{gender:"female",required:!0,label:"Required Female Player 1"},{gender:"female",required:!0,label:"Required Female Player 2"},{gender:"any",required:!1,label:"Optional Player 1"},{gender:"any",required:!1,label:"Optional Player 2"}]:[{gender:"female",required:!0,label:"Required Female Player"},{gender:"male",required:!0,label:"Required Male Player 1"},{gender:"male",required:!0,label:"Required Male Player 2"},{gender:"any",required:!1,label:"Optional Player 1"},{gender:"any",required:!1,label:"Optional Player 2"}]:b==="male"?[{gender:"male",required:!0,label:"Required Male Player"},{gender:"female",required:!0,label:"Required Female Player 1"},{gender:"female",required:!0,label:"Required Female Player 2"},{gender:"any",required:!1,label:"Optional Player 1"},{gender:"any",required:!1,label:"Optional Player 2"}]:[{gender:"female",required:!0,label:"Required Female Player"},{gender:"male",required:!0,label:"Required Male Player 1"},{gender:"male",required:!0,label:"Required Male Player 2"},{gender:"any",required:!1,label:"Optional Player 1"},{gender:"any",required:!1,label:"Optional Player 2"}]}catch(G){return console.error("Error getting team composition:",G),[{gender:"male",required:!0,label:"Required Player 1"},{gender:"female",required:!0,label:"Required Player 2"},{gender:"any",required:!1,label:"Optional Player 1"}]}},Hn=b=>{F(b),ht(!0),ye("")},ln=(b,G=null)=>{b==="partner"?fe(ae=>({...ae,partner:{pplId:"",name:"",gender:""}})):b==="team"&&G!==null&&fe(ae=>({...ae,teamMembers:ae.teamMembers.map((ge,Ge)=>Ge===G?{...ge,pplId:"",name:"",age:"",duprRatings:null}:ge)}))},It=b=>{if(Je==="partner")fe(G=>({...G,partner:{pplId:b.pplId,name:b.name,gender:b.gender,age:b.age,duprRatings:b.duprRatings}}));else if(Je.startsWith("team-")){const G=parseInt(Je.split("-")[1]);fe(ae=>({...ae,teamMembers:ae.teamMembers.map((ge,Ge)=>Ge===G?{...ge,pplId:b.pplId,name:b.name,age:b.age,duprRatings:b.duprRatings}:ge)}))}ht(!1),F("")},Mn=()=>{var G;let b=Z;if(J&&(b=b.filter(ae=>ae.name.toLowerCase().includes(J.toLowerCase())||ae.pplId.toLowerCase().includes(J.toLowerCase()))),I.category&&le){const ae=Object.values((le==null?void 0:le.tournamentCategories)||{}).find(ge=>ge.id===I.category);if(ae){const ge=((G=I.primaryPlayer)==null?void 0:G.gender)||(r==null?void 0:r.gender)||"male",Ge=pa(ae.name,ge);if(Je==="partner"&&(b=b.filter(Ct=>Ge.includes(Ct.gender))),Je.startsWith("team-")){const Ct=parseInt(Je.split("-")[1]),gt=I.teamMembers[Ct];gt!=null&&gt.gender&&gt.gender!=="any"&&(b=b.filter(Ue=>Ue.gender===gt.gender))}}}return b},cn=()=>n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",strokeLinecap:"round",strokeLinejoin:"round"})}),mi=()=>n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M12 5v14m-7-7h14",strokeLinecap:"round",strokeLinejoin:"round"})}),Zn=()=>n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M4 22h16",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M10 14.66V17c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.34",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M18 9c0 4.97-4.03 9-9 9s-9-4.03-9-9V6h18v3Z",strokeLinecap:"round",strokeLinejoin:"round"})]}),Xn=()=>n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:n.jsx("path",{d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",strokeLinecap:"round",strokeLinejoin:"round"})}),_n=()=>n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[n.jsx("path",{d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12 13a3 3 0 100-6 3 3 0 000 6z",strokeLinecap:"round",strokeLinejoin:"round"})]}),sn=()=>n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[n.jsx("circle",{cx:"12",cy:"12",r:"9",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("text",{x:"12",y:"14.5",dominantBaseline:"middle",textAnchor:"middle",fontSize:"14",stroke:"none",fill:"currentColor",style:{fontWeight:"bold"},children:"₱"})]}),Gn=()=>n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:n.jsx("path",{d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",strokeLinecap:"round",strokeLinejoin:"round"})}),Yn=28,Kn="PPL-001234",Tn=[{category:"Singles",rank:"4"},{category:"Doubles",rank:"5"},{category:"Mixed",rank:"4"}],yn=[{type:"Singles",rating:"5.502"},{type:"Doubles",rating:"5.952"}];if(!r)return n.jsx(Au,{children:n.jsxs("div",{style:{textAlign:"center",padding:"60px 20px"},children:[n.jsx("h2",{style:{color:"#234255",marginBottom:"16px",fontSize:"1.3rem",fontWeight:"500"},children:"Sign in to view your profile"}),n.jsx("p",{style:{color:"#6b7280",marginBottom:"20px",fontSize:"0.9rem"},children:"You need to be logged in to access your profile information."}),n.jsx("button",{style:{background:"#29ba9b",color:"white",border:"none",padding:"8px 16px",borderRadius:"4px",fontSize:"0.9rem",fontWeight:"500",cursor:"pointer"},onClick:()=>window.location.href="/signin",children:"Sign In"})]})});if(k)return n.jsx(Au,{children:n.jsxs("div",{style:{textAlign:"center",padding:"60px 20px"},children:[n.jsx("div",{style:{display:"inline-block",width:"30px",height:"30px",border:"2px solid #f3f3f3",borderTop:"2px solid #29ba9b",borderRadius:"50%",animation:"spin 1s linear infinite",marginBottom:"16px"}}),n.jsx("style",{children:`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}),n.jsx("p",{style:{color:"#6b7280",fontSize:"0.9rem"},children:"Loading profile..."})]})});const q={bio:W},g=[{id:"john-doe-championship",name:"John Doe's Pickleball Championship",date:"2024-05-15T09:00:00Z",endDate:"2024-05-16T18:00:00Z",location:"Elite Sports Complex",address:"456 Championship Blvd, Sports City, CA 92101",latitude:32.7157,longitude:-117.1611,status:"upcoming",entryFee:2500,prizePool:1e5,maxParticipants:32,currentParticipants:24,tournamentType:"open",tier:1,description:"The premier pickleball tournament hosted by renowned organizer John Doe. Featuring world-class facilities, professional officiating, and the largest prize pool in Southern California. This championship brings together top players from across the region for an unforgettable competitive experience.",bannerUrl:"https://images.unsplash.com/photo-1659318006095-4d44845f3a1b?q=80&w=1210&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",registrationDeadline:"2024-05-10T23:59:59Z",contactEmail:"john.doe@elitepickleball.com",contactPhone:"+1 (555) 987-6543",organizer:"John Doe",organizerProfile:{name:"John Doe",email:"john.doe@elitepickleball.com",phone:"+1 (555) 987-6543",bio:"Professional tournament organizer with 10+ years experience hosting premier pickleball events."},rules:["All matches played under official USA Pickleball rules","Players must arrive 45 minutes before scheduled match time","Professional athletic attire and non-marking court shoes required","Double elimination format for all divisions","Matches are best of 3 games to 11, win by 2"],amenities:["12 Professional Grade Courts","Live Streaming & Commentary","Professional Officiating","Player Lounge","Food & Beverage Service","Equipment Shop","Physical Therapy Station","Awards Ceremony"],tournamentCategories:{"mens-open-doubles":{id:"mens-open-doubles",name:"Men's Open Doubles",skillLevel:"Open",tier:1,prizePool:4e4,participants:16,maxParticipants:16,ageGroup:"18+",registrations:[{id:"player1",name:"Alex Rodriguez",partner:"Mike Johnson",status:"approved",rating:"5.2",seed:1},{id:"player2",name:"David Chen",partner:"Sam Williams",status:"approved",rating:"5.0",seed:2},{id:"player3",name:"Carlos Martinez",partner:"Tony Brown",status:"approved",rating:"4.8",seed:3},{id:"player4",name:"Ryan Thompson",partner:"Jake Davis",status:"approved",rating:"4.7",seed:4},{id:"player5",name:"Kevin Lee",partner:"Mark Wilson",status:"approved",rating:"4.6",seed:5},{id:"player6",name:"Steve Garcia",partner:"Paul Anderson",status:"approved",rating:"4.5",seed:6},{id:"player7",name:"Chris Taylor",partner:"Matt Jones",status:"approved",rating:"4.4",seed:7},{id:"player8",name:"Juan Morales",partner:"Luis Santos",status:"approved",rating:"4.3",seed:8}],groupStage:{groups:[{id:"group-a",name:"Group A",status:"completed",standings:[{player:"Alex Rodriguez / Mike Johnson",wins:3,losses:0,pointsFor:66,pointsAgainst:42,qualified:!0},{player:"David Chen / Sam Williams",wins:2,losses:1,pointsFor:61,pointsAgainst:55,qualified:!0},{player:"Carlos Martinez / Tony Brown",wins:1,losses:2,pointsFor:54,pointsAgainst:58,qualified:!1},{player:"Ryan Thompson / Jake Davis",wins:0,losses:3,pointsFor:48,pointsAgainst:66,qualified:!1}]},{id:"group-b",name:"Group B",status:"completed",standings:[{player:"Kevin Lee / Mark Wilson",wins:3,losses:0,pointsFor:66,pointsAgainst:45,qualified:!0},{player:"Steve Garcia / Paul Anderson",wins:2,losses:1,pointsFor:59,pointsAgainst:52,qualified:!0},{player:"Chris Taylor / Matt Jones",wins:1,losses:2,pointsFor:53,pointsAgainst:60,qualified:!1},{player:"Juan Morales / Luis Santos",wins:0,losses:3,pointsFor:44,pointsAgainst:65,qualified:!1}]}]},knockoutStage:{quarterFinals:[{id:"qf1",player1:"Alex Rodriguez / Mike Johnson",player2:"Steve Garcia / Paul Anderson",winner:"Alex Rodriguez / Mike Johnson",score:"11-7, 11-5",completed:!0},{id:"qf2",player1:"Kevin Lee / Mark Wilson",player2:"David Chen / Sam Williams",winner:"Kevin Lee / Mark Wilson",score:"11-9, 9-11, 11-8",completed:!0}],semiFinals:[{id:"sf1",player1:"Alex Rodriguez / Mike Johnson",player2:"Kevin Lee / Mark Wilson",winner:"Alex Rodriguez / Mike Johnson",score:"11-6, 11-9",completed:!0}],final:{id:"final",player1:"Alex Rodriguez / Mike Johnson",player2:"TBD",winner:"Alex Rodriguez / Mike Johnson",score:"11-8, 11-6",completed:!0},thirdPlace:{id:"third",player1:"Kevin Lee / Mark Wilson",player2:"TBD",winner:"Kevin Lee / Mark Wilson",score:"11-7, 11-4",completed:!0}}},"mixed-open-doubles":{id:"mixed-open-doubles",name:"Mixed Open Doubles",skillLevel:"Open",tier:1,prizePool:35e3,participants:12,maxParticipants:16,ageGroup:"18+",registrations:[{id:"mixed1",name:"Sarah Johnson",partner:"Tom Wilson",status:"approved",rating:"4.9",seed:1},{id:"mixed2",name:"Maria Garcia",partner:"John Davis",status:"approved",rating:"4.7",seed:2},{id:"mixed3",name:"Lisa Chen",partner:"Mike Rodriguez",status:"approved",rating:"4.6",seed:3},{id:"mixed4",name:"Emma Thompson",partner:"Alex Brown",status:"approved",rating:"4.5",seed:4},{id:"mixed5",name:"Jennifer Lee",partner:"Carlos Martinez",status:"approved",rating:"4.4",seed:5},{id:"mixed6",name:"Rachel Taylor",partner:"David Anderson",status:"approved",rating:"4.3",seed:6}],groupStage:{groups:[{id:"group-a",name:"Group A",status:"completed",standings:[{player:"Sarah Johnson / Tom Wilson",wins:3,losses:0,pointsFor:66,pointsAgainst:45,qualified:!0},{player:"Maria Garcia / John Davis",wins:2,losses:1,pointsFor:58,pointsAgainst:52,qualified:!0},{player:"Lisa Chen / Mike Rodriguez",wins:1,losses:2,pointsFor:51,pointsAgainst:59,qualified:!1},{player:"Jennifer Lee / Carlos Martinez",wins:0,losses:3,pointsFor:42,pointsAgainst:61,qualified:!1}]},{id:"group-b",name:"Group B",status:"completed",standings:[{player:"Emma Thompson / Alex Brown",wins:3,losses:0,pointsFor:63,pointsAgainst:48,qualified:!0},{player:"Rachel Taylor / David Anderson",wins:2,losses:1,pointsFor:56,pointsAgainst:53,qualified:!0},{player:"Michael Torres / Jessica Kim",wins:1,losses:2,pointsFor:52,pointsAgainst:58,qualified:!1},{player:"Robert Chen / Emily Wang",wins:0,losses:3,pointsFor:45,pointsAgainst:62,qualified:!1}]}]},knockoutStage:{quarterFinals:[{id:"qf1",player1:"Sarah Johnson / Tom Wilson",player2:"Rachel Taylor / David Anderson",winner:"Sarah Johnson / Tom Wilson",score:"11-6, 11-4",completed:!0},{id:"qf2",player1:"Emma Thompson / Alex Brown",player2:"Maria Garcia / John Davis",winner:"Emma Thompson / Alex Brown",score:"11-9, 8-11, 11-7",completed:!0}],semiFinals:[{id:"sf1",player1:"Sarah Johnson / Tom Wilson",player2:"Emma Thompson / Alex Brown",winner:"Sarah Johnson / Tom Wilson",score:"11-8, 11-6",completed:!0}],final:{id:"final",player1:"Sarah Johnson / Tom Wilson",player2:"TBD",winner:"Sarah Johnson / Tom Wilson",score:"11-7, 11-5",completed:!0},thirdPlace:{id:"third",player1:"Emma Thompson / Alex Brown",player2:"TBD",winner:"Emma Thompson / Alex Brown",score:"11-9, 11-6",completed:!0}}}},events:[{id:"event1",title:"Registration & Check-in",description:"All players must check in and complete registration. Bring valid ID and proof of payment.",date:"2024-05-15T08:00:00Z",duration:"60 minutes",location:"Main Lobby"},{id:"event2",title:"Tournament Briefing",description:"Mandatory rules briefing and player introductions. Tournament format explanation.",date:"2024-05-15T09:00:00Z",duration:"30 minutes",location:"Center Court"},{id:"event3",title:"Opening Ceremony",description:"Welcome address by John Doe, national anthem, and ceremonial first serve.",date:"2024-05-15T09:30:00Z",duration:"30 minutes",location:"Center Court"},{id:"event4",title:"Round 1 Matches",description:"First round matches for all divisions begin. Players should be ready 15 minutes early.",date:"2024-05-15T10:00:00Z",duration:"4 hours",location:"Courts 1-8"},{id:"event5",title:"Lunch Break",description:"Catered lunch for all participants and spectators. Sponsored by Elite Sports Nutrition.",date:"2024-05-15T14:00:00Z",duration:"90 minutes",location:"Player Lounge"},{id:"event6",title:"Semifinals",description:"Semi-final matches for advancing teams. Live streaming begins.",date:"2024-05-15T15:30:00Z",duration:"3 hours",location:"Courts 1-4"},{id:"event7",title:"Day 2: Finals",description:"Championship finals for all divisions. Awards ceremony to follow.",date:"2024-05-16T16:00:00Z",duration:"3 hours",location:"Center Court"},{id:"event8",title:"Awards Ceremony",description:"Trophy presentation, prize distribution, and closing remarks by John Doe.",date:"2024-05-16T19:00:00Z",duration:"60 minutes",location:"Center Court"}]}],T=()=>{switch(h){case"about":return n.jsx(Ss,{children:n.jsxs(a8,{children:[n.jsx(r8,{children:"Bio"}),n.jsxs(Ke,{children:[!x&&n.jsx(ol,{onClick:Ae,children:"✏️ Edit"}),x?n.jsxs(n.Fragment,{children:[n.jsx(Yt,{value:W,onChange:b=>$(b.target.value),placeholder:"Tell us about yourself, your pickleball journey, goals, or anything you'd like other players to know...",autoFocus:!0}),n.jsxs(hi,{children:[n.jsx(fa,{onClick:qt,children:"Cancel"}),n.jsx(fa,{variant:"save",onClick:it,children:"Save"})]})]}):n.jsx(o8,{children:q.bio||"Click 'Edit' to add your bio..."})]})]})});case"club":return n.jsxs(Ss,{children:[n.jsxs(y8,{children:[n.jsxs(v8,{children:[n.jsx(cn,{}),n.jsx(w8,{type:"text",placeholder:"Search clubs by name or location...",value:Q,onChange:b=>V(b.target.value)})]}),n.jsxs(j8,{onClick:he,children:[n.jsx(mi,{}),"Create Club"]})]}),n.jsx("div",{style:{textAlign:"center",padding:"60px 20px",color:"#6b7280",fontSize:"1.1rem",fontWeight:"500"},children:"🚀 Club features coming soon!"})]});case"tournaments":return n.jsx(Ss,{children:z?n.jsxs(L8,{children:[n.jsxs(M8,{children:[n.jsxs(T8,{onClick:qn,children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M19 12H5",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12 19l-7-7 7-7",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Back to Tournaments"]}),n.jsxs(Zw,{onClick:()=>u("/host-tournament",{state:{editTournament:z}}),children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Edit Tournament"]})]}),n.jsxs(A8,{children:[z.bannerUrl&&n.jsx("img",{src:z.bannerUrl,alt:z.name}),n.jsx(P8,{status:z.status,children:z.status.toUpperCase()})]}),n.jsx(R8,{children:z.name}),n.jsxs(D8,{children:[n.jsxs(E8,{children:[n.jsx(K0,{children:z.description||"No description available for this tournament."}),n.jsxs(i8,{style:{marginTop:"24px",marginBottom:"24px"},children:[n.jsx(ra,{$active:C==="details",onClick:()=>D("details"),children:"Details"}),n.jsx(ra,{$active:C==="guidelines",onClick:()=>D("guidelines"),children:"Guidelines"}),n.jsx(ra,{$active:C==="events",onClick:()=>D("events"),children:"Events"}),n.jsx(ra,{$active:C==="players",onClick:()=>D("players"),children:"Players"}),n.jsx(ra,{$active:C==="brackets",onClick:()=>D("brackets"),children:"Brackets"})]}),C==="details"&&n.jsxs(n.Fragment,{children:[n.jsxs($a,{children:[n.jsxs(Ba,{children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z",strokeLinecap:"round",strokeLinejoin:"round"})}),"Tournament Information"]}),n.jsxs(q8,{children:[n.jsxs(Tr,{children:[n.jsx(Rr,{children:n.jsx(sn,{})}),n.jsxs(Ar,{children:[n.jsx("div",{children:n.jsx(Pr,{children:"Registration Fee"})}),n.jsxs(Dr,{className:"price",children:["₱",z.entryFee.toLocaleString()]})]})]}),n.jsxs(Tr,{children:[n.jsx(Rr,{children:n.jsx(Xn,{})}),n.jsxs(Ar,{children:[n.jsx("div",{children:n.jsx(Pr,{children:"Tournament Date"})}),n.jsx(Dr,{children:(()=>{const b=new Date(z.date),G=new Date(z.endDate||z.date);return b.toDateString()===G.toDateString()?b.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):`${b.toLocaleDateString("en-US",{month:"long",day:"numeric"})} - ${G.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}`})()})]})]}),n.jsxs(Tr,{children:[n.jsx(Rr,{children:n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",strokeLinecap:"round",strokeLinejoin:"round"})})}),n.jsxs(Ar,{children:[n.jsx("div",{children:n.jsx(Pr,{children:"Registration Deadline"})}),n.jsx(Dr,{className:"deadline",children:new Date(z.registrationDeadline||z.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})})]})]}),n.jsxs(Tr,{children:[n.jsx(Rr,{children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("circle",{cx:"9",cy:"7",r:"4",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"m22 21-3-3m0 0a5.5 5.5 0 1 0-7.78-7.78 5.5 5.5 0 0 0 7.78 7.78Z",strokeLinecap:"round",strokeLinejoin:"round"})]})}),n.jsxs(Ar,{children:[n.jsx("div",{children:n.jsx(Pr,{children:"Skill Levels"})}),n.jsx(Dr,{children:z.tournamentCategories?(()=>{const b=new Set;return Object.values(z.tournamentCategories).forEach(G=>{G.skillLevel==="Open"?b.add(`Open - Tier ${G.tier||1}`):["Beginner","Intermediate","Advanced"].includes(G.skillLevel)&&b.add(G.skillLevel)}),Array.from(b).sort().join(", ")})():`${z.tournamentType.charAt(0).toUpperCase()+z.tournamentType.slice(1)}${z.tournamentType==="open"?` - Tier ${z.tier}`:""}`})]})]}),z.contactEmail&&n.jsxs(Tr,{children:[n.jsx(Rr,{children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),n.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),n.jsxs(Ar,{children:[n.jsx("div",{children:n.jsx(Pr,{children:"Contact Email"})}),n.jsx(Dr,{children:n.jsx("a",{href:`mailto:${z.contactEmail}`,style:{color:"#334155",textDecoration:"none",cursor:"pointer"},onMouseEnter:b=>b.target.style.textDecoration="underline",onMouseLeave:b=>b.target.style.textDecoration="none",children:z.contactEmail})})]})]}),z.contactPhone&&n.jsxs(Tr,{children:[n.jsx(Rr,{children:n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:n.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})})}),n.jsxs(Ar,{children:[n.jsx("div",{children:n.jsx(Pr,{children:"Contact Phone"})}),n.jsx(Dr,{children:n.jsx("a",{href:`tel:${z.contactPhone}`,style:{color:"#334155",textDecoration:"none",cursor:"pointer"},onMouseEnter:b=>b.target.style.textDecoration="underline",onMouseLeave:b=>b.target.style.textDecoration="none",children:z.contactPhone})})]})]})]})]}),n.jsxs($a,{children:[n.jsxs(Ba,{children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",strokeLinecap:"round",strokeLinejoin:"round"})}),"Tournament Categories"]}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:z.tournamentCategories?Object.values(z.tournamentCategories).map(b=>n.jsxs("div",{style:{background:"white",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"16px 20px",display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.05)"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[n.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"#29ba9b"}}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"1rem",fontWeight:"600",color:"#1e293b",marginBottom:"2px"},children:(()=>{let G=b.name||b.division||"Mixed Doubles";["18+","35+","50+"].forEach(Ue=>{G=G.replace(new RegExp(`\\s*${Ue.replace("+","\\+")}\\s*`,"gi")," "),G=G.replace(new RegExp(`\\s*${Ue.replace("+","\\+")}$`,"gi"),"")}),["Beginner","Intermediate","Advanced","Open"].forEach(Ue=>{G=G.replace(new RegExp(`\\s*${Ue}\\s*`,"gi")," ")}),G=G.replace(/\s+/g," ").trim();let Ge=b.skillLevel||"";Ge==="Open"&&b.tier&&(Ge=`Open Tier ${b.tier}`);const Ct=b.ageGroup||"";return[G,Ge,Ct].filter(Ue=>Ue).join(" | ")})()}),n.jsxs("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:[b.participants||0,"/",b.maxParticipants," participants",b.prizePool&&b.prizePool>0&&n.jsxs("span",{style:{marginLeft:"12px",color:"#29ba9b",fontWeight:"500"},children:["Prize: ₱",b.prizePool.toLocaleString()]})]})]})]}),n.jsx("div",{style:{fontSize:"0.875rem",fontWeight:"500",color:b.participants>=b.maxParticipants?"#ef4444":"#29ba9b",background:b.participants>=b.maxParticipants?"#fef2f2":"#f0fdf4",padding:"4px 8px",borderRadius:"6px",border:`1px solid ${b.participants>=b.maxParticipants?"#fecaca":"#bbf7d0"}`},children:b.participants>=b.maxParticipants?"Full":"Open"})]},b.id)):n.jsxs("div",{style:{background:"white",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"16px 20px",display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.05)"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[n.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"#29ba9b"}}),n.jsxs("div",{children:[n.jsxs("div",{style:{fontSize:"1rem",fontWeight:"600",color:"#1e293b",marginBottom:"2px"},children:[z.tournamentType.charAt(0).toUpperCase()+z.tournamentType.slice(1),z.tournamentType==="open"&&z.tier&&` - Tier ${z.tier}`]}),n.jsxs("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:[z.currentParticipants||0,"/",z.maxParticipants," participants"]})]})]}),n.jsx("div",{style:{fontSize:"0.875rem",fontWeight:"500",color:z.currentParticipants>=z.maxParticipants?"#ef4444":"#29ba9b",background:z.currentParticipants>=z.maxParticipants?"#fef2f2":"#f0fdf4",padding:"4px 8px",borderRadius:"6px",border:`1px solid ${z.currentParticipants>=z.maxParticipants?"#fecaca":"#bbf7d0"}`},children:z.currentParticipants>=z.maxParticipants?"Full":"Open"})]})})]}),n.jsxs($a,{children:[n.jsxs(Ba,{children:[n.jsx(_n,{}),"Tournament Location & Map"]}),n.jsxs(U8,{children:[n.jsx(H8,{children:n.jsxs(_8,{children:[n.jsxs(ex,{$primary:!0,onClick:()=>window.open(`https://maps.google.com/?q=${z.latitude||""},${z.longitude||""}`,"_blank"),children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Get Directions"]}),n.jsxs(ex,{onClick:()=>{var b;return(b=navigator.share)==null?void 0:b.call(navigator,{title:`Location: ${z.location}`,text:z.address||z.location,url:`https://maps.google.com/?q=${z.latitude||""},${z.longitude||""}`})},children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("polyline",{points:"15,3 21,3 21,9",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Share"]})]})}),n.jsxs(G8,{children:[n.jsx("div",{className:"venue-name",children:z.location}),n.jsx("div",{className:"venue-address",children:z.address||"Address not provided"}),z.latitude&&z.longitude&&n.jsxs("div",{className:"coordinates",children:["Coordinates: ",z.latitude,", ",z.longitude]})]}),n.jsx(Y8,{onClick:()=>window.open(`https://maps.google.com/?q=${z.latitude||""},${z.longitude||""}`,"_blank"),children:n.jsxs("div",{className:"map-text",children:[n.jsx("div",{className:"main-text",children:"Interactive Map View"}),n.jsx("div",{className:"sub-text",children:"Click to open in Google Maps"})]})})]})]})]}),C==="guidelines"&&n.jsxs($a,{children:[n.jsxs(Ba,{children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",strokeLinecap:"round",strokeLinejoin:"round"})}),"Tournament Guidelines"]}),z.rules&&z.rules.length>0||z.rulesText?n.jsxs("div",{children:[n.jsxs("div",{style:{background:"#fef3c7",padding:"16px",borderRadius:"8px",border:"1px solid #f59e0b",marginBottom:"24px"},children:[n.jsxs("div",{style:{color:"#92400e",fontWeight:"600",marginBottom:"8px",display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx("span",{children:"⚠️"}),"Important Notice"]}),n.jsx("div",{style:{color:"#92400e",fontSize:"0.9rem",lineHeight:"1.5"},children:"Please read and understand all tournament guidelines before participating. Violations may result in disqualification."})]}),n.jsx("div",{style:{background:"white",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"24px"},children:n.jsx("div",{style:{fontSize:"1rem",lineHeight:"1.6",color:"#334155",whiteSpace:"pre-wrap"},children:z.rulesText||z.rules&&z.rules.join(`

`)||`All matches follow official IFP rules

Players must check in 30 minutes before their scheduled match

Proper athletic attire and non-marking shoes required

No coaching allowed during matches`})})]}):n.jsxs("div",{style:{textAlign:"center",padding:"48px 24px",background:"#f8fafc",borderRadius:"16px",border:"1px dashed #e2e8f0"},children:[n.jsx("div",{style:{fontSize:"3rem",marginBottom:"16px"},children:"📋"}),n.jsx("h3",{style:{color:"#334155",marginBottom:"8px"},children:"No Guidelines Available"}),n.jsx("p",{style:{color:"#64748b",fontSize:"0.95rem"},children:"Tournament guidelines will be posted by the organizer before the event begins."})]})]}),C==="events"&&n.jsxs($a,{children:[n.jsxs(Ba,{children:[n.jsx(Xn,{}),"Tournament Events Schedule"]}),n.jsx("div",{style:{background:"white",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"24px"},children:n.jsx("div",{style:{fontSize:"1rem",lineHeight:"1.6",color:"#334155",whiteSpace:"pre-wrap"},children:z.eventsText||(z.events&&z.events.length>0?z.events.map(b=>`${b.title}
${b.description}${b.location?`
Location: ${b.location}`:""}${b.duration?`
Duration: ${b.duration}`:""}`).join(`

`):`Day 1 - 9:00 AM
Registration & Check-in
All participants must check in and complete registration process. Bring valid ID and proof of payment.

Day 1 - 10:00 AM
Tournament Briefing
Mandatory rules briefing and player introductions. Tournament format explanation.

Day 1 - 10:30 AM
Opening Ceremony
Welcome address, national anthem, and ceremonial first serve.

Day 1 - 11:00 AM
Round 1 Matches
First round matches for all divisions begin. Players should be ready 15 minutes early.`)})})]}),C==="players"&&n.jsxs($a,{children:[n.jsxs(Ba,{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("circle",{cx:"9",cy:"7",r:"4",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"m22 21-3-3m0 0a5.5 5.5 0 1 0-7.78-7.78 5.5 5.5 0 0 0 7.78 7.78Z",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Registered Players"]}),n.jsx(K0,{children:z.players?z.players.map((b,G)=>n.jsxs("div",{style:{marginBottom:"12px",padding:"12px",border:"1px solid #e0e0e0",borderRadius:"8px"},children:[n.jsx("p",{children:n.jsx("strong",{children:b.name})}),n.jsxs("p",{children:["Skill Level: ",b.skillLevel]}),n.jsxs("p",{children:["Registration Date: ",b.registrationDate]})]},G)):"No players registered yet."})]}),C==="brackets"&&n.jsxs($a,{children:[n.jsxs(Ba,{children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",strokeLinecap:"round",strokeLinejoin:"round"})}),"Tournament Brackets"]}),z.tournamentCategories?n.jsx("div",{children:Object.values(z.tournamentCategories).map(b=>n.jsxs(e6,{children:[n.jsx(t6,{$expanded:K[b.id],onClick:()=>de(b.id),children:n.jsxs(n6,{children:[n.jsx(i6,{children:n.jsxs("div",{className:"category-title",style:{fontSize:"1.1rem",fontWeight:"600",color:"#1e293b",display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx("span",{children:(()=>{let G=b.name;return["18+","35+","50+"].forEach(Ge=>{G=G.replace(new RegExp(`\\s*${Ge.replace("+","\\+")}\\s*`,"gi")," "),G=G.replace(new RegExp(`\\s*${Ge.replace("+","\\+")}$`,"gi"),"")}),["Beginner","Intermediate","Advanced","Open"].forEach(Ge=>{G=G.replace(new RegExp(`\\s*${Ge}\\s*`,"gi")," ")}),G.replace(/\s+/g," ").trim()})()}),n.jsx("span",{style:{color:"#64748b",fontSize:"1rem"},children:"|"}),n.jsx("span",{style:{color:"#059669"},children:b.skillLevel==="Open"&&b.tier?`Open Tier ${b.tier}`:b.skillLevel}),n.jsx("span",{style:{color:"#64748b",fontSize:"1rem"},children:"|"}),n.jsx("span",{children:b.ageGroup})]})}),n.jsx(a6,{$expanded:K[b.id],children:n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M19 9l-7 7-7-7",strokeLinecap:"round",strokeLinejoin:"round"})})})]})}),K[b.id]&&n.jsxs(r6,{$expanded:K[b.id],children:[b.groupStage&&n.jsxs(Q8,{children:[n.jsx("div",{className:"section-title",children:"Group Stage Results"}),n.jsx("div",{className:"groups-grid",children:Object.entries(b.groupStage).map(([G,ae])=>n.jsxs(I8,{children:[n.jsxs(J8,{children:["Bracket ",G.slice(-1).toUpperCase()]}),n.jsxs(Z8,{children:[n.jsxs("div",{className:"standings-header",children:[n.jsx("div",{children:"Player"}),n.jsx("div",{children:"R.Wins"}),n.jsx("div",{children:"R.Loss"}),n.jsx("div",{children:"W.Pts"}),n.jsx("div",{children:"L.Pts"})]}),ae.map(ge=>n.jsxs(X8,{$qualified:ge.position<=2,children:[n.jsxs("div",{className:"player-info",children:[n.jsx("div",{className:"position",children:ge.position}),n.jsx("div",{className:"player-name",children:ge.name})]}),n.jsx("div",{className:"round-wins",children:ge.roundWins||ge.wins||0}),n.jsx("div",{className:"round-losses",children:ge.roundLosses||0}),n.jsx("div",{className:"win-points",children:ge.winPoints||0}),n.jsx("div",{className:"loss-points",children:ge.lossPoints||0})]},ge.id))]})]},G))})]}),b.knockoutStage?n.jsx(W8,{children:n.jsxs(F8,{children:[n.jsxs(tx,{children:[n.jsxs(Cs,{children:[n.jsx("h4",{children:"Quarter-Finals"}),n.jsx("div",{className:"round-subtitle",children:"Top 8 Players"})]}),b.knockoutStage.quarterFinals.map((G,ae)=>n.jsxs(zs,{$isWinner:G.completed,children:[n.jsxs("div",{className:"match-info",children:[n.jsxs("div",{className:"player-name",children:[n.jsx("span",{className:"player-seed",children:G.player1.seed}),G.player1.name]}),G.completed&&n.jsx("div",{className:"match-score",children:G.winner==="player1"?"✓":""})]}),n.jsxs("div",{className:"match-info",children:[n.jsxs("div",{className:"player-name",children:[n.jsx("span",{className:"player-seed",children:G.player2.seed}),G.player2.name]}),G.completed&&n.jsx("div",{className:"match-score",children:G.winner==="player2"?"✓":""})]}),G.completed&&n.jsx("div",{className:"match-result",children:G.score}),ae<b.knockoutStage.quarterFinals.length-1&&n.jsx(Pu,{className:"horizontal"})]},G.id))]}),n.jsx(Pu,{className:"vertical"}),n.jsxs(tx,{children:[n.jsxs(Cs,{children:[n.jsx("h4",{children:"Semi-Finals"}),n.jsx("div",{className:"round-subtitle",children:"Final 4"})]}),b.knockoutStage.semiFinals.map((G,ae)=>n.jsxs(zs,{$isWinner:G.completed,style:{marginTop:ae===0?"50px":"30px"},children:[n.jsxs("div",{className:"match-info",children:[n.jsxs("div",{className:"player-name",children:[n.jsxs("span",{className:"player-seed",children:["W",G.player1.seed]}),G.player1.name]}),G.completed&&n.jsx("div",{className:"match-score",children:G.winner==="player1"?"✓":""})]}),n.jsxs("div",{className:"match-info",children:[n.jsxs("div",{className:"player-name",children:[n.jsxs("span",{className:"player-seed",children:["W",G.player2.seed]}),G.player2.name]}),G.completed&&n.jsx("div",{className:"match-score",children:G.winner==="player2"?"✓":""})]}),G.completed&&n.jsx("div",{className:"match-result",children:G.score})]},G.id))]}),n.jsx(Pu,{className:"corner-right"}),n.jsxs(V8,{children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"16px"},children:[n.jsx("div",{className:"championship-trophy",children:"🏆"}),n.jsxs(Cs,{style:{margin:0},children:[n.jsx("h4",{children:"Championship"}),n.jsx("div",{className:"round-subtitle",children:"Final Match"})]})]}),b.knockoutStage.final&&n.jsxs(zs,{className:"championship-match",$isWinner:b.knockoutStage.final.completed,children:[n.jsxs("div",{className:"match-info",children:[n.jsxs("div",{className:"player-name",children:[n.jsxs("span",{className:"player-seed",children:["W",b.knockoutStage.final.player1.seed]}),b.knockoutStage.final.player1.name]}),b.knockoutStage.final.completed&&n.jsx("div",{className:"match-score",children:b.knockoutStage.final.winner==="player1"?"🥇":"🥈"})]}),n.jsxs("div",{className:"match-info",children:[n.jsxs("div",{className:"player-name",children:[n.jsxs("span",{className:"player-seed",children:["W",b.knockoutStage.final.player2.seed]}),b.knockoutStage.final.player2.name]}),b.knockoutStage.final.completed&&n.jsx("div",{className:"match-score",children:b.knockoutStage.final.winner==="player2"?"🥇":"🥈"})]}),b.knockoutStage.final.completed&&n.jsx("div",{className:"match-result",style:{fontWeight:"bold",color:"#16a34a"},children:b.knockoutStage.final.score})]}),b.knockoutStage.thirdPlace&&n.jsxs("div",{style:{marginTop:"100px",marginLeft:"auto",marginRight:"0",width:"100%",maxWidth:"300px"},children:[n.jsxs(Cs,{children:[n.jsx("h4",{children:"Third Place"}),n.jsx("div",{className:"round-subtitle",children:"Bronze Medal Match"})]}),n.jsxs(zs,{className:"championship-match",$isWinner:b.knockoutStage.thirdPlace.completed,style:{width:"100%"},children:[n.jsxs("div",{className:"match-info",children:[n.jsxs("div",{className:"player-name",children:[n.jsxs("span",{className:"player-seed",children:["L",b.knockoutStage.thirdPlace.player1.seed]}),b.knockoutStage.thirdPlace.player1.name]}),b.knockoutStage.thirdPlace.completed&&n.jsx("div",{className:"match-score",children:b.knockoutStage.thirdPlace.winner==="player1"?"🥉":""})]}),n.jsxs("div",{className:"match-info",children:[n.jsxs("div",{className:"player-name",children:[n.jsxs("span",{className:"player-seed",children:["L",b.knockoutStage.thirdPlace.player2.seed]}),b.knockoutStage.thirdPlace.player2.name]}),b.knockoutStage.thirdPlace.completed&&n.jsx("div",{className:"match-score",children:b.knockoutStage.thirdPlace.winner==="player2"?"🥉":""})]}),b.knockoutStage.thirdPlace.completed&&n.jsx("div",{className:"match-result",style:{fontWeight:"bold",color:"#16a34a"},children:b.knockoutStage.thirdPlace.score})]})]})]})]})}):n.jsxs("div",{style:{textAlign:"center",padding:"32px 24px",background:"white",borderRadius:"12px",border:"1px solid #e2e8f0",marginTop:"16px"},children:[n.jsx("div",{style:{fontSize:"2.5rem",marginBottom:"12px"},children:"🏆"}),n.jsx("h3",{style:{color:"#334155",marginBottom:"8px",fontSize:"1.1rem"},children:"Knockout Bracket Coming Soon"}),n.jsx("p",{style:{color:"#64748b",fontSize:"0.9rem",marginBottom:"16px"},children:"The knockout bracket will be generated once the group stage is complete."})]})]})]},b.id))}):n.jsx(n.Fragment,{children:z.tournamentBracket?n.jsx(n.Fragment,{}):n.jsxs("div",{style:{textAlign:"center",padding:"48px 24px",background:"#f8fafc",borderRadius:"16px",border:"1px dashed #e2e8f0"},children:[n.jsx("div",{style:{fontSize:"3rem",marginBottom:"16px"},children:"🏆"}),n.jsx("h3",{style:{color:"#334155",marginBottom:"8px"},children:"Tournament Bracket Not Available"}),n.jsx("p",{style:{color:"#64748b",fontSize:"0.95rem"},children:"The tournament bracket will be generated once the group stage is complete and knockout matches begin."})]})})]})]}),n.jsx($8,{children:n.jsxs(K8,{children:[n.jsx(B8,{children:"Tournament Registration"}),n.jsx(N8,{children:n.jsxs("div",{className:"price",children:["₱",z.entryFee.toLocaleString()]})}),n.jsxs(O8,{children:[n.jsxs(X0,{variant:"primary",onClick:()=>{te(z.id)},children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",strokeLinecap:"round",strokeLinejoin:"round"})}),"View Form"]}),n.jsxs(X0,{variant:"secondary",onClick:()=>{navigator.share?navigator.share({title:z.name,text:`Check out this tournament: ${z.name}`,url:window.location.href}):navigator.clipboard.writeText(window.location.href)},children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z",strokeLinecap:"round",strokeLinejoin:"round"})}),"Share"]})]})]})})]})]}):n.jsxs(n.Fragment,{children:[n.jsxs(k8,{children:[n.jsxs(S8,{children:[n.jsx(cn,{}),n.jsx(C8,{type:"text",placeholder:"Search tournaments by name or location...",value:A,onChange:b=>B(b.target.value)})]}),n.jsxs(z8,{onClick:Qe,children:[n.jsx(Zn,{}),"Host a Tournament"]})]}),n.jsx(l8,{children:g.filter(b=>b.name.toLowerCase().includes(A.toLowerCase())||b.location.toLowerCase().includes(A.toLowerCase())).map(b=>n.jsxs(s8,{onClick:()=>bn(b),style:{cursor:"pointer"},children:[n.jsxs(d8,{children:[b.bannerUrl&&n.jsx("img",{src:b.bannerUrl,alt:b.name}),n.jsx(g8,{status:b.status,children:b.status.toUpperCase()})]}),n.jsxs(c8,{children:[n.jsx(u8,{children:b.name}),n.jsxs(fp,{children:[n.jsx(Xn,{}),new Date(b.date).toLocaleDateString()]}),n.jsxs(p8,{children:[n.jsx(_n,{}),b.location]}),n.jsxs(f8,{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("circle",{cx:"9",cy:"7",r:"4",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"m22 21-3-3m0 0a5.5 5.5 0 1 0-7.78-7.78 5.5 5.5 0 0 0 7.78 7.78Z",strokeLinecap:"round",strokeLinejoin:"round"})]}),b.tournamentCategories?(()=>{const G=new Set;return Object.values(b.tournamentCategories).forEach(ae=>{var ge;if(((ge=ae.skillLevel)==null?void 0:ge.toLowerCase())==="open"){const Ge=Number(ae.tier)||1;G.add(`Open - Tier ${Ge}`)}else["Beginner","Intermediate","Advanced"].includes(ae.skillLevel)&&G.add(ae.skillLevel)}),Array.from(G).join(", ")})():`${b.tournamentType.charAt(0).toUpperCase()+b.tournamentType.slice(1)}${b.tournamentType==="open"?` - Tier ${b.tier}`:""}`]}),n.jsxs(m8,{children:[n.jsxs(wg,{children:[n.jsx(Gn,{}),n.jsxs("div",{children:[b.currentParticipants,"/",b.maxParticipants]})]}),n.jsxs(h8,{children:[n.jsx(sn,{}),n.jsxs("div",{children:[n.jsxs("span",{children:["₱",b.entryFee]}),n.jsx("span",{})]})]})]}),b.result&&n.jsxs(b8,{children:[n.jsx(Zn,{}),b.result]}),b.status==="upcoming"&&n.jsx(x8,{onClick:G=>{G.stopPropagation(),d("Edit tournament functionality coming soon!","info")},children:"✏️ Edit Tournament"})]})]},b.id))})]})});default:return n.jsx(Ss,{children:"Select a tab"})}},ne=s.div`
    position: relative;
    margin-bottom: 40px;
    margin-top: 0px;
    margin-left: -100px;
    margin-right: -100px;
    height: 200px;
    background: linear-gradient(
      rgba(0, 0, 0, 0.3), 
      rgba(0, 0, 0, 0.1)
    ), url(${dw}), url('/pickle_bg.png');
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    overflow: visible;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.1) 0%,
        rgba(255, 255, 255, 0.05) 50%,
        rgba(0, 0, 0, 0.1) 100%
      );
      z-index: 1;
      pointer-events: none;
    }
  `,me=s.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    padding: 40px 90px 30px 90px;
    min-height: 100%;
  `,Be=s.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 40px;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
  `,Ee=s.div`
    display: flex;
    align-items: center;
    gap: 20px;
    flex: 1;
    
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
    }
  `,Ve=s.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    flex: 1;
    
    @media (max-width: 768px) {
      align-items: center;
      text-align: center;
    }
  `,_e=s.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: -20px;
    gap: 20px;
    
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 20px;
      margin-top: -15px;
    }
    
    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 15px;
    }
  `;s.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }
  `;const jt=s.div`
    margin-left: 30px;
    
    @media (max-width: 768px) {
      margin-left: 0;
      margin-top: 20px;
    }
  `,Gt=s.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    padding: 20px 24px;
    background-color: #ffffff;
    border-radius: 0px;
    border: 1px solid #e2e8f0;
    backdrop-filter: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
    margin-top: -80px;
    flex-shrink: 0;
    min-width: 300px;
    
    @media (max-width: 768px) {
      flex-wrap: wrap;
      gap: 15px;
      justify-content: center;
      margin-top: -75px;
      min-width: auto;
    }
  `,R=s.div`
    text-align: center;
    padding: 12px 16px;
    min-width: 90px;
    flex-shrink: 0;
    position: relative;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-2px);
    }
  `,se=s.div`
    font-size: 0.7rem;
    color: #64748b;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  `,ue=s.div`
    font-weight: 800;
    color: #1e293b;
    font-size: 1.5rem;
    margin-bottom: 4px;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: linear-gradient(135deg, #29ba9b, #1e7a6b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `,oe=s.div`
    font-size: 0.65rem;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    font-weight: 500;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  `,je=s.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin-top: -25px;
    padding: 15px 20px;
    
    @media (max-width: 768px) {
      flex-wrap: wrap;
      gap: 15px;
      justify-content: center;
    }
  `,xe=s.div`
    text-align: center;
    padding: 5px 10px;
    min-width: 80px;
    flex-shrink: 0;
  `,Me=s.div`
    font-size: 0.75rem;
    color: #6b7280;
    margin-bottom: 3px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    text-align: left;
  `,ut=s.div`
    font-weight: 600;
    color: #234255;
    font-size: 0.9rem;
    text-align: left;
  `,Ke=s.div`
  position: relative;
`,Yt=s.textarea`
  width: 100%;
  min-height: 120px;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-family: inherit;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #374151;
  background-color: #ffffff;
  resize: vertical;
  text-align: left;
  
  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`,hi=s.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
  justify-content: flex-end;
`,fa=s.button`
  padding: 6px 16px;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid;
  outline: none;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  
  ${b=>b.variant==="save"?`
    background-color: #29ba9b;
    color: white;
    border-color: #29ba9b;
    
    &:hover {
      background-color: #249e85;
      border-color: #249e85;
    }
  `:`
    background-color: white;
    color: #6b7280;
    border-color: #d1d5db;
    
    &:hover {
      background-color: #f9fafb;
      border-color: #9ca3af;
    }
  `}
`,ol=s.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  color: #29ba9b;
  font-size: 0.875rem;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.2s ease;
  outline: none;
  
  &:hover {
    background-color: #f0fffe;
    color: #249e85;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
`;return n.jsxs(Au,{children:[n.jsx(ne,{children:n.jsx(me,{children:n.jsxs(Be,{children:[n.jsxs(Ee,{children:[n.jsxs(Fw,{children:[n.jsx(Vw,{src:r.avatar,alt:r.name}),O&&n.jsx(Qw,{onClick:Ce,children:"📷"}),n.jsx(Kw,{ref:f,type:"file",accept:"image/*",onChange:ve})]}),n.jsxs(Ve,{children:[n.jsxs(_e,{children:[n.jsx(Iw,{children:r.name}),n.jsx(Gt,{children:Tn.map((b,G)=>n.jsxs(R,{children:[n.jsx(se,{children:b.category}),n.jsxs(ue,{children:["#",b.rank]}),n.jsx(oe,{children:"Rank"})]},G))})]}),n.jsxs(je,{children:[n.jsxs(xe,{children:[n.jsx(Me,{children:"PPL ID"}),n.jsx(ut,{children:Kn.replace("PPL-","")})]}),n.jsxs(xe,{children:[n.jsx(Me,{children:"AGE"}),n.jsxs(ut,{children:[Yn," Years"]})]}),n.jsxs(xe,{children:[n.jsx(Me,{children:"GENDER"}),n.jsx(ut,{children:r.gender?r.gender.charAt(0).toUpperCase()+r.gender.slice(1):"Not specified"})]}),yn.map((b,G)=>n.jsxs(xe,{children:[n.jsxs(Me,{children:[b.type," DUPR"]}),n.jsx(ut,{children:b.rating})]},G))]})]})]}),n.jsx("div",{style:{position:"absolute",top:"-50px",right:"0",zIndex:10},children:n.jsxs(e8,{children:[n.jsx(Xw,{onClick:_,children:"Apply as Coach"}),n.jsx(Jw,{onClick:nt,children:"Edit Profile"})]})})]})})}),n.jsxs(t8,{children:[n.jsxs(n8,{children:[n.jsx(ra,{active:h==="about",onClick:()=>w("about"),children:"About"}),n.jsx(ra,{active:h==="club",onClick:()=>w("club"),children:"My Club"}),n.jsx(ra,{active:h==="tournaments",onClick:()=>w("tournaments"),children:"Tournaments"})]}),T()]}),we&&le&&n.jsx(cw,{onClick:St,children:n.jsxs(uw,{onClick:b=>b.stopPropagation(),children:[n.jsxs(pw,{children:[n.jsxs(fw,{children:["Register for ",le.name]}),n.jsx(Y0,{onClick:St,children:"×"})]}),n.jsx(mw,{children:n.jsxs("form",{onSubmit:Dt,children:[n.jsxs(ws,{children:[n.jsx(js,{children:"Tournament Category"}),n.jsx(F0,{children:n.jsx(ks,{children:n.jsxs(hw,{value:I.category,onChange:b=>ze("category",b.target.value),required:!0,children:[n.jsx("option",{value:"",children:"Select Tournament Category"}),le&&Object.values((le==null?void 0:le.tournamentCategories)||{}).map(b=>{var Ge;let G=b.name||"";if(!G){const Ct=b.division||"",gt=b.skillLevel==="Open"&&b.tier?`Open Tier ${b.tier}`:b.skillLevel||"",Ue=b.ageGroup||"";G=[Ct,gt,Ue].filter(Wn=>Wn).join(" | ")||"Unknown Category"}const ae=(r==null?void 0:r.gender)||((Ge=I.primaryPlayer)==null?void 0:Ge.gender)||"male";console.log("🎯 DROPDOWN DEBUG: user object:",r),console.log("🎯 DROPDOWN DEBUG: registrationForm.primaryPlayer:",I.primaryPlayer),console.log(`🎯 DROPDOWN DEBUG: Final userGender="${ae}"`);const ge=en(b,ae);return console.log(`📝 Dropdown: Category "${b.name}" for user "${ae}": allowed=${ge}`),n.jsx("option",{value:b.id,disabled:!ge,style:{color:ge?"inherit":"#9ca3af",fontStyle:ge?"normal":"italic"},children:G},b.id)})]},De)})})]}),n.jsxs(ws,{children:[n.jsx(js,{children:"Personal Information"}),I.category&&(()=>{var ae,ge,Ge,Ct,gt,Ue,Ut,Wn,ei,pt;const b=Object.values((le==null?void 0:le.tournamentCategories)||{}).find($e=>$e.id===I.category),G=wt((b==null?void 0:b.name)||"");return n.jsxs("div",{style:{marginBottom:"20px"},children:[n.jsxs("div",{style:{marginBottom:"16px"},children:[n.jsx(Mr,{style:{marginBottom:"8px",display:"block"},children:"Primary Player (You)"}),n.jsx(Lu,{children:n.jsx(Mu,{children:n.jsxs(Tu,{children:[n.jsx(Ru,{children:((ae=I.primaryPlayer)==null?void 0:ae.name)||"Enter your name"}),n.jsxs(jt,{children:["PPLID: ",((ge=I.primaryPlayer)==null?void 0:ge.pplId)||"Not assigned"," | Gender: ",((Ge=I.primaryPlayer)==null?void 0:Ge.gender)||"male"," | Age: ",((Ct=I.primaryPlayer)==null?void 0:Ct.age)||"Not specified",(()=>{var Ze;const $e=Object.values((le==null?void 0:le.tournamentCategories)||{}).find(un=>un.id===I.category),rt=on($e==null?void 0:$e.name,(Ze=I.primaryPlayer)==null?void 0:Ze.duprRatings);return rt?` | DUPR: ${rt}`:""})()]})]})})})]}),G==="doubles"&&n.jsxs("div",{style:{marginBottom:"16px"},children:[n.jsx(Mr,{style:{marginBottom:"8px",display:"block"},children:"Partner"}),n.jsx(Lu,{onClick:()=>Hn("partner"),style:{cursor:"pointer"},children:n.jsx(Mu,{children:(gt=I.partner)!=null&&gt.pplId?n.jsxs(n.Fragment,{children:[n.jsxs(Tu,{children:[n.jsx(Ru,{children:(Ue=I.partner)==null?void 0:Ue.name}),n.jsxs(jt,{children:["PPLID: ",(Ut=I.partner)==null?void 0:Ut.pplId," | Gender: ",(Wn=I.partner)==null?void 0:Wn.gender," | Age: ",((ei=I.partner)==null?void 0:ei.age)||"Not specified",(()=>{var Ze;const $e=Object.values((le==null?void 0:le.tournamentCategories)||{}).find(un=>un.id===I.category),rt=on($e==null?void 0:$e.name,(Ze=I.partner)==null?void 0:Ze.duprRatings);return rt?` | DUPR: ${rt}`:""})()]})]}),n.jsx(J0,{onClick:$e=>{$e.stopPropagation(),ln("partner")},title:"Remove partner",children:"×"})]}):n.jsxs(n.Fragment,{children:[n.jsx(I0,{children:"+"}),n.jsx(Q0,{children:"Click to select partner"})]})})})]}),G==="team"&&n.jsxs("div",{style:{marginBottom:"16px"},children:[n.jsx(Mr,{style:{marginBottom:"8px",display:"block"},children:"Team Members"}),Array.isArray(I.teamMembers)&&((pt=I.teamMembers)==null?void 0:pt.map(($e,rt)=>n.jsx("div",{style:{marginBottom:"8px"},children:n.jsx(Lu,{onClick:()=>Hn(`team-${rt}`),style:{cursor:"pointer"},children:n.jsx(Mu,{children:$e.pplId?n.jsxs(n.Fragment,{children:[n.jsxs(Tu,{children:[n.jsx(Ru,{children:$e.name}),n.jsxs(jt,{children:["PPLID: ",$e.pplId," | Gender: ",$e.gender," | Age: ",$e.age||"Not specified",(()=>{const Ze=Object.values((le==null?void 0:le.tournamentCategories)||{}).find(tn=>tn.id===I.category),un=on(Ze==null?void 0:Ze.name,$e==null?void 0:$e.duprRatings);return un?` | DUPR: ${un}`:""})(),$e.required&&n.jsx(Z0,{children:"Required"})]})]}),n.jsx(J0,{onClick:Ze=>{Ze.stopPropagation(),ln("team",rt)},title:"Remove player",children:"×"})]}):n.jsxs(n.Fragment,{children:[n.jsx(I0,{children:"+"}),n.jsxs(Q0,{children:["Click to select ",$e.label,$e.required&&n.jsx(Z0,{children:"Required"})]})]})})})},rt)))]})]})})(),n.jsxs(F0,{children:[n.jsxs(ks,{children:[n.jsx(Mr,{children:"Email Address"}),n.jsx(W0,{type:"email",value:I.email,onChange:b=>ze("email",b.target.value),placeholder:"your.email@example.com",required:!0})]}),n.jsxs(ks,{children:[n.jsx(Mr,{children:"Contact Number"}),n.jsx(W0,{type:"tel",value:I.contactNumber,onChange:b=>ze("contactNumber",b.target.value),placeholder:"+63 912 345 6789",required:!0})]})]})]}),n.jsxs(ws,{children:[n.jsx(js,{children:"Registration Fee"}),n.jsxs(gw,{children:[n.jsx(bw,{children:"Tournament Entry Fee"}),n.jsxs(yw,{children:["₱",le.entryFee," - Registration fee is required to secure your spot in the tournament."]})]})]}),n.jsxs(ws,{children:[n.jsx(js,{children:"Payment Details"}),n.jsxs(vw,{children:[n.jsxs(ww,{children:[n.jsx(jw,{children:"Bank Transfer Details"}),n.jsxs(Su,{children:[n.jsx(Cu,{children:"Bank Name:"}),n.jsx(zu,{children:"BDO Unibank"})]}),n.jsxs(Su,{children:[n.jsx(Cu,{children:"Account Name:"}),n.jsx(zu,{children:"John Doe Tournament"})]}),n.jsxs(Su,{children:[n.jsx(Cu,{children:"Account Number:"}),n.jsx(zu,{children:"1234-5678-9012"})]})]}),n.jsxs(kw,{children:[n.jsx(Sw,{children:"Quick Payment"}),n.jsx(Cw,{children:n.jsxs(zw,{children:[n.jsx(Lw,{children:"📱"}),n.jsx(Mw,{children:"GCash QR Code"}),n.jsx(V0,{children:"Scan to pay registration fee"})]})}),n.jsx(V0,{children:"Scan with GCash or any QR payment app"})]})]}),n.jsxs(ks,{children:[n.jsx(Mr,{children:"Proof of Payment"}),I.proofOfPayment?n.jsxs(Aw,{children:[I.proofOfPayment.type.startsWith("image/")?n.jsx(Pw,{src:URL.createObjectURL(I.proofOfPayment),alt:"Proof of Payment Preview"}):n.jsxs("div",{style:{padding:"40px",textAlign:"center",background:"#f8fafc"},children:[n.jsx("div",{style:{fontSize:"48px",marginBottom:"12px"},children:"📄"}),n.jsx("div",{style:{color:"#64748b",fontSize:"14px"},children:"PDF File"})]}),n.jsx(Dw,{type:"button",onClick:xt,title:"Delete file",children:"×"}),n.jsx(Ew,{children:I.proofOfPayment.name})]}):n.jsxs(Tw,{children:[n.jsx("input",{type:"file",accept:"image/*,.pdf",onChange:Le,style:{display:"none"},id:"proof-upload",required:!0}),n.jsx("label",{htmlFor:"proof-upload",style:{cursor:"pointer"},children:n.jsx(Rw,{children:"Click to upload proof of payment (Image or PDF)"})})]})]})]}),n.jsx(xw,{type:"submit",disabled:!0,children:"Submit Registration"})]})})]})}),mt&&n.jsx($w,{onClick:()=>ht(!1),children:n.jsxs(Bw,{onClick:b=>b.stopPropagation(),children:[n.jsxs(Nw,{children:[n.jsx(Ow,{children:"Select Player"}),n.jsx(Y0,{onClick:()=>ht(!1),children:"×"})]}),n.jsxs(qw,{children:[n.jsx(Uw,{type:"text",placeholder:"Search players by name or PPLID...",value:J,onChange:b=>ye(b.target.value)}),n.jsxs(Hw,{children:[Mn().map(b=>n.jsx(_w,{onClick:()=>It(b),children:n.jsxs(Gw,{children:[n.jsx(Yw,{children:b.name}),n.jsxs(Ww,{children:["PPLID: ",b.pplId," | Gender: ",b.gender," | Age: ",b.age||"Not specified",(()=>{const G=Object.values((le==null?void 0:le.tournamentCategories)||{}).find(ge=>ge.id===I.category),ae=on(G==null?void 0:G.name,b==null?void 0:b.duprRatings);return ae?` | DUPR: ${ae}`:""})()]})]})},b.pplId)),Mn().length===0&&n.jsx("div",{style:{textAlign:"center",padding:"40px 20px",color:"#64748b"},children:"No players found matching your criteria"})]})]})]})})]})},Ls=s.div`
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
`,Du=s.h1`
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
`,Eu=s.p`
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
`,l6=s.div`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
    gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`,s6=s.div`
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
`,d6=s.input`
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
`,c6=s.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`,$u=s.button`
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1.5px solid ${r=>r.$active?"#29ba9b":"#e2e8f0"};
  background: ${r=>r.$active?"#29ba9b":"white"};
  color: ${r=>r.$active?"white":"#64748b"};
  white-space: nowrap;
  min-width: 140px;
  
  &:hover {
    border-color: #29ba9b;
    color: ${r=>r.$active?"white":"#29ba9b"};
    background: ${r=>r.$active?"#26a085":"#f8fafc"};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
`,u6=s.div`
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
`,p6=s.div`
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
`,f6=s.div`
  height: 160px;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${r=>{switch(r.$imageIndex){case 0:return'url("https://images.unsplash.com/photo-1686721135030-e2ab79e27b16?q=80&w=1170&auto=format&fit=crop")';case 1:return'url("https://images.unsplash.com/photo-1515017804404-92b19fdfe6ac?q=80&w=1440&auto=format&fit=crop")';case 2:return'url("https://plus.unsplash.com/premium_photo-1709932754899-5c36599fface?q=80&w=1209&auto=format&fit=crop")';default:return'url("https://images.unsplash.com/photo-1686721135030-e2ab79e27b16?q=80&w=1170&auto=format&fit=crop")'}}};

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
`,m6=s.div`
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
`,h6=s.div`
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
`,nx=s.span`
  display: inline-flex;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 12px;
  background: ${r=>r.type==="club"?"#f0f9ff":"#f0fdf4"};
  color: ${r=>r.type==="club"?"#0369a1":"#166534"};
`,x6=s.button`
  width: calc(100% - 48px);
  padding: 12px 20px;
  background: ${r=>r.$isPending?"#f59e0b":"#29ba9b"};
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
    background: ${r=>r.$isPending?"#d97706":"#26a085"};
    transform: translateY(-1px);
  }

  &:disabled {
    background: ${r=>r.$isPending?"#f59e0b":"#e2e8f0"};
    cursor: ${r=>r.$isPending?"default":"not-allowed"};
    transform: none;
    opacity: 0.6;
    
    &:hover {
      background: ${r=>r.$isPending?"#f59e0b":"#e2e8f0"};
      transform: none;
    }
  }
`,g6=s.div`
  text-align: center;
  padding: 48px 24px;
  background: white;
  border-radius: 16px;
  color: #64748b;
  font-size: 1.1rem;
  border: 2px dashed #e2e8f0;
  margin-top: 32px;
`,b6=s.div`
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
`,y6=s.div`
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
`,v6=s.div`
  padding: 16px 0;
  border-bottom: 1px solid #e2e8f0;

  @media (min-width: 768px) {
    padding: 24px 0;
  }
`,w6=s.button`
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
`,j6=s.div`
  margin-top: 24px;
`,k6=s.div`
  margin-bottom: 32px;
`,S6=s.div`
  width: 100%;
  height: 280px;
  background: ${r=>{switch(r.$imageIndex){case 0:return"#29ba9b";case 1:return"#3b82f6";case 2:return"#f59e0b";default:return"#29ba9b"}}};
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
`,C6=s.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
    gap: 48px;
  }
`,z6=s.div``,L6=s.div`
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
`,M6=s.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;

  @media (min-width: 640px) {
    align-items: center;
  }
`,T6=s.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
`,R6=s.div`
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
`,A6=s.p`
  color: #64748b;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 32px;
  max-width: 640px;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 48px;
  }
`,Ms=s.div`
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 56px;
  }
`,Ts=s.h3`
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
`,P6=s.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #f1f5f9;
`,D6=s.div`
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
`,E6=s.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  @media (min-width: 640px) {
    gap: 10px;
    flex-wrap: nowrap;
  }
`,ix=s.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: ${r=>r.$primary?"none":"1px solid #e2e8f0"};
  background: ${r=>r.$primary?"#29ba9b":"white"};
  color: ${r=>r.$primary?"white":"#64748b"};
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
    background: ${r=>r.$primary?"#26a085":"#f8fafc"};
    border-color: ${r=>r.$primary?"transparent":"#29ba9b"};
    color: ${r=>r.$primary?"white":"#29ba9b"};
  }
`,$6=s.div`
  position: relative;
  height: 300px;
  background: #f1f5f9;

  @media (min-width: 768px) {
    height: 350px;
  }
`,B6=s.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
`,N6=s.div`
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
`,O6=s.div`
  background: ${()=>{const r=["#f1f5f9","#e2e8f0","#cbd5e0","#f8fafc"];return r[Math.floor(Math.random()*r.length)]}};
  border-radius: 2px;
`,q6=s.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
`,U6=s.div`
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
`,H6=s.div`
  background: rgba(15, 23, 42, 0.9);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-top: 8px;
`,_6=s.div`
  background: white;
  border-radius: 12px;
  border: 1px solid #f1f5f9;
  padding: 16px;

  @media (min-width: 768px) {
    padding: 20px;
  }
`,Yo=s.div`
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
`,Wo=s.div`
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
`,G6=s.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Y6=s.div`
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
`,W6=s.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  border-radius: 12px;
  overflow: hidden;

  @media (min-width: 640px) {
    gap: 12px;
  }
`,F6=s.div`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }

  ${r=>{if(r.$total===1)return`
        grid-column: 1 / -1;
        aspect-ratio: 16 / 9;
      `;if(r.$total===2)return`
        grid-column: span 1;
      `;if(r.$total===3)return r.$index===0?`
          grid-column: span 2;
          grid-row: span 2;
        `:`
        grid-column: span 1;
      `;if(r.$total===4)return`
        grid-column: span 1;
      `;if(r.$total===5)return r.$index<2?`
          grid-column: span 1;
        `:r.$index===2?`
          grid-column: span 1;
          grid-row: span 2;
        `:`
        grid-column: span 1;
      `;if(r.$total>=6)return r.$index<2?`
          grid-column: span 1;
        `:r.$index===2?`
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
`,V6=s.div`
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
`,Q6=s.div``,I6=s.div`
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
`,J6=s.button`
  width: 100%;
  padding: 16px 24px;
  background: ${r=>r.$isPending?"#f59e0b":"#29ba9b"};
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 500;
  cursor: ${r=>r.disabled?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  opacity: ${r=>r.disabled?.6:1};
  margin-bottom: 16px;

  &:hover:not(:disabled) {
    background: ${r=>r.$isPending?"#d97706":"#26a085"};
    transform: translateY(-1px);
  }
`,Z6=s.p`
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.5;
  margin: 0;
  text-align: center;
  padding: 12px 16px;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #f1f5f9;
`;function X6(){return n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",strokeLinecap:"round",strokeLinejoin:"round"})})}const K6=()=>{const{isAuthenticated:r}=pi(),[d,u]=y.useState([]),[c,f]=y.useState(!0),[h,w]=y.useState(null),[k,v]=y.useState(""),[x,M]=y.useState("all"),[O,E]=y.useState(new Set),[W,$]=y.useState(new Set),[Q,V]=y.useState(!1),[A,B]=y.useState(null),[z,re]=y.useState(!1);y.useEffect(()=>{C()},[]);const C=async()=>{try{f(!0),w(null),u([{id:"1",name:"Manila Pickleball Club",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",address:"BGC, Taguig City",hours:"6:00 AM - 10:00 PM",type:"club_and_courts",members:120,createdAt:"2025-06-16T08:00:00Z",updatedAt:"2025-06-16T08:00:00Z",ownerId:"user123",contactEmail:"info@manilapickleball.com",contactPhone:"+63 912 345 6789",website:"https://manilapickleball.com",amenities:["Pro Shop","Locker Rooms","Parking"],images:[],photos:[{url:"https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&h=600&fit=crop",caption:"Main court area"},{url:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",caption:"Professional courts"},{url:"https://images.unsplash.com/photo-1526676037777-05a232c2b57c?w=800&h=600&fit=crop",caption:"Club facilities"},{url:"https://images.unsplash.com/photo-1577924111230-7f5ed91b08b8?w=800&h=600&fit=crop",caption:"Equipment storage"},{url:"https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&h=600&fit=crop",caption:"Locker rooms"},{url:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",caption:"Outdoor courts"}],isVerified:!0},{id:"2",name:"BGC Pickleball Center",description:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",address:"Bonifacio Global City, Taguig",hours:"7:00 AM - 11:00 PM",type:"club_and_courts",members:85,createdAt:"2025-06-15T10:00:00Z",updatedAt:"2025-06-15T10:00:00Z",ownerId:"user456",contactEmail:"info@bgcpickleball.com",contactPhone:"+63 917 123 4567",amenities:["Air Conditioning","Equipment Rental"],images:[],photos:[{url:"https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",caption:"Indoor courts"},{url:"https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&h=600&fit=crop",caption:"Court facilities"},{url:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",caption:"Tournament setup"}],isVerified:!0},{id:"3",name:"QC Pickleball Community",description:"Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",address:"Katipunan Avenue, Quezon City",type:"club",members:45,createdAt:"2025-06-14T09:00:00Z",updatedAt:"2025-06-14T09:00:00Z",ownerId:"user789",contactEmail:"qcpickleball@gmail.com",contactPhone:"+63 918 765 4321",images:[],photos:[{url:"https://images.unsplash.com/photo-1577924111230-7f5ed91b08b8?w=800&h=600&fit=crop",caption:"Community courts"}],isVerified:!0}])}catch(ce){w(ce.message||"Failed to fetch venues")}finally{f(!1)}},D=y.useMemo(()=>{let ce=d;if(k){const le=k.toLowerCase();ce=ce.filter(qe=>qe.name.toLowerCase().includes(le)||qe.address.toLowerCase().includes(le))}return x!=="all"&&(ce=ce.filter(le=>x==="clubs"?le.type==="club":x==="courts"?le.type==="club_and_courts":!0)),ce},[d,k,x]),K=async(ce,le)=>{if(ce.stopPropagation(),!r){V(!0);return}try{$(qe=>new Set([...qe,le])),console.log(`Join request submitted for venue ${le}`)}catch(qe){console.error("Failed to join venue:",qe),$(mt=>{const ht=new Set(mt);return ht.delete(le),ht})}},ke=ce=>{B(ce),re(!0)},we=()=>{re(!1),B(null)};return c?n.jsxs(Ls,{children:[n.jsx(Du,{children:"Clubs & Courts"}),n.jsx(Eu,{children:"Discover pickleball venues and communities across the Philippines."}),n.jsx(b6,{children:"Loading venues..."})]}):h?n.jsxs(Ls,{children:[n.jsx(Du,{children:"Clubs & Courts"}),n.jsx(Eu,{children:"Discover pickleball venues and communities across the Philippines."}),n.jsx(y6,{children:h})]}):z&&A?n.jsxs(Ls,{children:[n.jsx(v6,{children:n.jsxs(w6,{onClick:we,children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7",strokeLinecap:"round",strokeLinejoin:"round"})}),"Back to Clubs & Courts"]})}),n.jsxs(j6,{children:[n.jsx(k6,{children:n.jsx(S6,{$imageIndex:d.findIndex(ce=>ce.id===A.id)%3})}),n.jsxs(C6,{children:[n.jsxs(z6,{children:[n.jsxs(L6,{children:[n.jsxs(M6,{children:[n.jsx("h1",{children:A.name}),A.isVerified&&n.jsxs(R6,{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M9 12l2 2 4-4",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.745 3.745 0 0 1 3.296-1.043A3.745 3.745 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12z"})]}),"Verified"]})]}),n.jsx(T6,{children:n.jsx(nx,{type:A.type==="club"?"club":"courts",children:A.type==="club"?"Club":"Club & Courts"})})]}),n.jsx(A6,{children:A.description}),n.jsxs(Ms,{children:[n.jsxs(Ts,{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),n.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"Location & Map"]}),n.jsxs(P6,{children:[n.jsxs(D6,{children:[n.jsx("h4",{children:A.address}),n.jsx("p",{children:"Get directions to this venue and explore the surrounding area"}),n.jsxs(E6,{children:[n.jsxs(ix,{$primary:!0,children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"}),n.jsx("path",{d:"M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"})]}),"Get Directions"]}),n.jsxs(ix,{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),n.jsx("polyline",{points:"15,3 21,3 21,9"}),n.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),"Share Location"]})]})]}),n.jsx($6,{children:n.jsxs(B6,{children:[n.jsxs(q6,{children:[n.jsx(U6,{children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),n.jsx("circle",{cx:"12",cy:"10",r:"3"})]})}),n.jsx(H6,{children:A.name})]}),n.jsx(N6,{children:Array.from({length:35},(ce,le)=>n.jsx(O6,{},le))})]})})]})]}),n.jsxs(Ms,{children:[n.jsxs(Ts,{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),n.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),n.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),n.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),"Venue Information"]}),n.jsxs(_6,{children:[A.type==="club_and_courts"&&n.jsxs(Yo,{children:[n.jsx(Wo,{children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("polyline",{points:"12,6 12,12 16,14"})]})}),n.jsxs("div",{children:[n.jsx("span",{children:"Operating Hours"}),n.jsx("p",{children:A.hours})]})]}),n.jsxs(Yo,{children:[n.jsx(Wo,{children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),n.jsx("circle",{cx:"9",cy:"7",r:"4"}),n.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),n.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}),n.jsxs("div",{children:[n.jsx("span",{children:"Community Size"}),n.jsxs("p",{children:[A.members," Active Members"]})]})]}),A.contactEmail&&n.jsxs(Yo,{children:[n.jsx(Wo,{children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),n.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),n.jsxs("div",{children:[n.jsx("span",{children:"Email Contact"}),n.jsx("p",{children:A.contactEmail})]})]}),A.contactPhone&&n.jsxs(Yo,{children:[n.jsx(Wo,{children:n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})})}),n.jsxs("div",{children:[n.jsx("span",{children:"Phone Contact"}),n.jsx("p",{children:A.contactPhone})]})]}),A.website&&n.jsxs(Yo,{children:[n.jsx(Wo,{children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),n.jsx("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]})}),n.jsxs("div",{children:[n.jsx("span",{children:"Website"}),n.jsx("p",{children:A.website})]})]})]})]}),A.amenities&&A.amenities.length>0&&n.jsxs(Ms,{children:[n.jsxs(Ts,{children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})}),"Amenities & Features"]}),n.jsx(G6,{children:A.amenities.map((ce,le)=>n.jsxs(Y6,{children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M20 6L9 17l-5-5",strokeLinecap:"round",strokeLinejoin:"round"})}),ce]},le))})]}),A.photos&&A.photos.length>0&&n.jsxs(Ms,{children:[n.jsxs(Ts,{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),n.jsx("circle",{cx:"9",cy:"9",r:"2"}),n.jsx("path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"})]}),"Photo Gallery"]}),n.jsx(W6,{children:A.photos.slice(0,6).map((ce,le)=>n.jsxs(F6,{$index:le,$total:Math.min(A.photos.length,6),children:[n.jsx("img",{src:ce.url,alt:ce.caption||`Venue photo ${le+1}`}),le===5&&A.photos.length>6&&n.jsxs(V6,{children:["+",A.photos.length-6]})]},le))})]})]}),n.jsx(Q6,{children:n.jsxs(I6,{children:[n.jsx(J6,{onClick:ce=>K(ce,A.id),disabled:O.has(A.id)||W.has(A.id),$isPending:W.has(A.id),children:O.has(A.id)?"Joined":W.has(A.id)?"Pending Approval":"Join Now"}),n.jsx(Z6,{children:O.has(A.id)?"You are a member of this venue":W.has(A.id)?"Your join request is pending approval from the venue administrators":"Join this venue to access exclusive features and connect with the community"})]})})]})]}),Q&&n.jsx(tl,{isOpen:Q,onClose:()=>V(!1),title:"Join the Club!",message:"Sign in or register to join clubs and access courts"})]}):n.jsxs(Ls,{children:[n.jsx(Du,{children:"Clubs & Courts"}),n.jsx(Eu,{children:"Discover pickleball venues and communities across the Philippines."}),n.jsxs(l6,{children:[n.jsxs(s6,{children:[n.jsx(X6,{}),n.jsx(d6,{type:"text",placeholder:"Search by name or location...",value:k,onChange:ce=>v(ce.target.value)})]}),n.jsxs(c6,{children:[n.jsx($u,{$active:x==="all",onClick:()=>M("all"),children:"All"}),n.jsx($u,{$active:x==="clubs",onClick:()=>M("clubs"),children:"Clubs Only"}),n.jsx($u,{$active:x==="courts",onClick:()=>M("courts"),children:"With Courts"})]})]}),D.length===0?n.jsx(g6,{children:"No venues found matching your criteria"}):n.jsx(u6,{children:D.map((ce,le)=>n.jsxs(p6,{onClick:()=>ke(ce),children:[n.jsx(f6,{$imageIndex:le%3}),n.jsxs(m6,{children:[n.jsx("h3",{children:ce.name}),n.jsx("div",{children:n.jsx(nx,{type:ce.type==="club"?"club":"courts",children:ce.type==="club"?"Club":"Club & Courts"})}),n.jsx("p",{children:ce.description}),n.jsxs(h6,{children:[n.jsxs("div",{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),n.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),ce.address]}),ce.type==="club_and_courts"&&n.jsxs("div",{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),n.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),n.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),n.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),ce.hours]}),n.jsxs("div",{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),n.jsx("circle",{cx:"9",cy:"7",r:"4"}),n.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),n.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),ce.members," Members"]})]}),n.jsx(x6,{onClick:qe=>K(qe,ce.id),disabled:O.has(ce.id)||W.has(ce.id),$isPending:W.has(ce.id),children:O.has(ce.id)?"Joined":W.has(ce.id)?"Pending Approval":"Join Now"})]})]},ce.id))}),Q&&n.jsx(tl,{isOpen:Q,onClose:()=>V(!1),title:"Join the Club!",message:"Sign in or register to join clubs and access courts"})]})},Bu=s.div`
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
`,e3=s.div`
  margin-bottom: 40px;
  text-align: center;
`,t3=s.h1`
  font-size: 2.5rem;
  color: #234255;
  margin-bottom: 12px;
  font-weight: 800;
  letter-spacing: -0.5px;
`,n3=s.p`
  color: #64748b;
  font-size: 1.1rem;
  max-width: 600px;
  line-height: 1.6;
  margin: 0 auto;
  text-align: center;
`,i3=s.div`
  color: #64748b;
  font-size: 0.875rem;
  text-align: center;
  margin-top: 8px;
`,a3=s.div`
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
`,r3=s.div`
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
`,o3=s.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`,l3=s.select`
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
`,s3=s.input`
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
`,d3=s.div`
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
`,c3=s.button`
  padding: 12px 24px;
  background: ${r=>r.$active?"#f8fafc":"transparent"};
  border: none;
  border-bottom: 2px solid ${r=>r.$active?"#29ba9b":"transparent"};
  color: ${r=>r.$active?"#29ba9b":"#64748b"};
  font-weight: ${r=>r.$active?"600":"500"};
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
  border-radius: 8px 8px 0 0;
  outline: none;
  
  &:hover {
    color: #29ba9b;
    background: ${r=>r.$active?"#f8fafc":"#f1f5f9"};
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
`,u3=s.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,p3=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 16px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    margin-bottom: 12px;
  }
`,f3=s.div`
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
`,m3=s.div`
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
`,h3=s.div`
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
`,x3=s.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  
  @media (max-width: 768px) {
    gap: 8px;
  }
`,g3=s.div`
  font-weight: 500;
  color: #234255;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`,b3=s.div`
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
`;s.div``;s.div`
  font-size: 0.75rem;
  color: #64748b;
  
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;const Nu=s.div`
  font-weight: 500;
  color: #234255;
  display: flex;
  align-items: center;
  height: 100%;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`,y3=s.div`
  font-weight: 600;
  color: #64748b;
  display: flex;
  align-items: center;
  height: 100%;
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`,v3=s.div`
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

  ${r=>r.$rank===1&&`
    background: linear-gradient(135deg, #234255 0%, #29ba9b 100%);
  `}

  ${r=>r.$rank===2&&`
    background: linear-gradient(135deg, #234255 0%, #64748b 100%);
  `}

  ${r=>r.$rank===3&&`
    background: linear-gradient(135deg, #234255 0%, #cd7f32 100%);
  `}
`,w3=s.div`
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
`,j3=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  margin-top: 12px;
`,k3=s.div`
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
`,S3=s.div`
  text-align: center;
`,C3=s.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  margin: 0 0 4px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;s.div`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
`;const z3=s.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-top: 16px;

  @media (max-width: 768px) {
    gap: 6px;
    margin-top: 12px;
  }
`,Ou=s.div`
  padding: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 6px;
  }
`,qu=s.div`
  font-size: ${r=>r.$large?"1.25rem":"1rem"};
  font-weight: 600;
  color: white;
  margin-bottom: 2px;
  
  @media (max-width: 768px) {
    font-size: ${r=>r.$large?"1.1rem":"0.9rem"};
  }
`,Uu=s.div`
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;s.div`
  height: 4px;
  background: #e2e8f0;
  border-radius: 2px;
  margin-top: 8px;
  overflow: hidden;
`;s.div`
  height: 100%;
  background: #29ba9b;
  border-radius: 2px;
  width: ${r=>r.$percentage}%;
  transition: width 1s ease;
`;const L3=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  color: #64748b;
  font-size: 1.1rem;
`,M3=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  color: #ef4444;
  font-size: 1.1rem;
  text-align: center;
  flex-direction: column;
  gap: 16px;
`,T3=s.button`
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
`;function ax(r){return r.split(" ").map(d=>d[0]).join("").toUpperCase()}function rx(r){return new Intl.NumberFormat().format(r)}function R3(){return n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",strokeLinecap:"round",strokeLinejoin:"round"})})}function A3(){const[r,d]=y.useState([]),[u,c]=y.useState("mens-singles"),[f,h]=y.useState(!0),[w,k]=y.useState(null),[v,x]=y.useState(""),[M,O]=y.useState(""),[E,W]=y.useState(""),$=["18+","35+","50+"],Q=(D,K)=>{if(!K)return!0;const ke=parseInt(K.replace("+",""));return D>=ke},V=D=>{if(!D)return[];let K=D.filter(we=>we.age>=18);return K=K.filter(we=>{const ce=!v||we.name.toLowerCase().includes(v.toLowerCase()),le=Q(we.age,E);return ce&&le}),[...K].sort((we,ce)=>ce.points-we.points).map((we,ce)=>({...we,rank:ce+1}))};y.useEffect(()=>{const D=new Date,K={year:"numeric",month:"long",day:"numeric"};O(D.toLocaleDateString("en-US",K)),A()},[]);const A=async()=>{var D;try{h(!0),k(null);const K=[{id:"mens-singles",name:"MEN'S SINGLES",lastUpdated:"2024-01-20T10:00:00Z",rankings:[{id:"1",name:"Juan Dela Cruz",age:28,rank:1,points:2500,gamesPlayed:45,wins:38,losses:7,winRate:"84.4"},{id:"2",name:"Mike Santos",age:35,rank:2,points:2350,gamesPlayed:42,wins:34,losses:8,winRate:"81.0"},{id:"3",name:"Carlo Garcia",age:45,rank:3,points:2200,gamesPlayed:38,wins:30,losses:8,winRate:"78.9"},{id:"4",name:"Miguel Lopez",age:61,rank:4,points:2100,gamesPlayed:35,wins:27,losses:8,winRate:"77.1"},{id:"j1",name:"Alex Santos",age:15,rank:5,points:1800,gamesPlayed:30,wins:25,losses:5,winRate:"83.3"},{id:"j2",name:"Marco Reyes",age:13,rank:6,points:1700,gamesPlayed:28,wins:22,losses:6,winRate:"78.6"}]},{id:"womens-singles",name:"WOMEN'S SINGLES",lastUpdated:"2024-01-20T10:00:00Z",rankings:[{id:"1",name:"Maria Santos",age:28,rank:1,points:2450,gamesPlayed:43,wins:36,losses:7,winRate:"83.7"},{id:"2",name:"Ana Garcia",age:45,rank:2,points:2300,gamesPlayed:40,wins:32,losses:8,winRate:"80.0"},{id:"3",name:"Sofia Reyes",age:52,rank:3,points:2150,gamesPlayed:37,wins:29,losses:8,winRate:"78.4"},{id:"4",name:"Isabella Tan",age:71,rank:4,points:2e3,gamesPlayed:30,wins:22,losses:8,winRate:"73.3"},{id:"j1",name:"Alexandra Santos",age:15,rank:5,points:1850,gamesPlayed:32,wins:26,losses:6,winRate:"81.3"},{id:"j2",name:"Diana Garcia",age:17,rank:6,points:1750,gamesPlayed:29,wins:23,losses:6,winRate:"79.3"}]},{id:"mens-doubles",name:"MEN'S DOUBLES",lastUpdated:"2024-01-20T10:00:00Z",rankings:[{id:"1",name:"Juan Dela Cruz",age:28,rank:1,points:2600,gamesPlayed:50,wins:42,losses:8,winRate:"84.0"},{id:"2",name:"Mike Santos",age:35,rank:2,points:2400,gamesPlayed:45,wins:36,losses:9,winRate:"80.0"},{id:"3",name:"Carlo Garcia",age:45,rank:3,points:2250,gamesPlayed:40,wins:31,losses:9,winRate:"77.5"},{id:"4",name:"Miguel Lopez",age:61,rank:4,points:2150,gamesPlayed:38,wins:29,losses:9,winRate:"76.3"},{id:"j1",name:"Alex Santos",age:15,rank:5,points:1900,gamesPlayed:35,wins:27,losses:8,winRate:"77.1"}]},{id:"womens-doubles",name:"WOMEN'S DOUBLES",lastUpdated:"2024-01-20T10:00:00Z",rankings:[{id:"1",name:"Maria Santos",age:28,rank:1,points:2550,gamesPlayed:48,wins:40,losses:8,winRate:"83.3"},{id:"2",name:"Ana Garcia",age:45,rank:2,points:2350,gamesPlayed:43,wins:34,losses:9,winRate:"79.1"},{id:"3",name:"Sofia Reyes",age:52,rank:3,points:2200,gamesPlayed:40,wins:31,losses:9,winRate:"77.5"},{id:"4",name:"Isabella Tan",age:71,rank:4,points:2100,gamesPlayed:35,wins:27,losses:8,winRate:"77.1"},{id:"j1",name:"Alexandra Santos",age:15,rank:5,points:1950,gamesPlayed:32,wins:25,losses:7,winRate:"78.1"}]},{id:"mens-mixed-doubles",name:"MEN'S MIXED DOUBLES",lastUpdated:"2024-01-20T10:00:00Z",rankings:[{id:"1",name:"Juan Dela Cruz",age:28,rank:1,points:2650,gamesPlayed:52,wins:44,losses:8,winRate:"84.6"},{id:"2",name:"Mike Santos",age:35,rank:2,points:2450,gamesPlayed:47,wins:38,losses:9,winRate:"80.9"},{id:"3",name:"Carlo Garcia",age:45,rank:3,points:2300,gamesPlayed:42,wins:33,losses:9,winRate:"78.6"},{id:"4",name:"Miguel Lopez",age:61,rank:4,points:2200,gamesPlayed:40,wins:31,losses:9,winRate:"77.5"},{id:"j1",name:"Alex Santos",age:15,rank:5,points:2e3,gamesPlayed:35,wins:27,losses:8,winRate:"77.1"}]},{id:"womens-mixed-doubles",name:"WOMEN'S MIXED DOUBLES",lastUpdated:"2024-01-20T10:00:00Z",rankings:[{id:"1",name:"Maria Santos",age:28,rank:1,points:2600,gamesPlayed:50,wins:42,losses:8,winRate:"84.0"},{id:"2",name:"Ana Garcia",age:45,rank:2,points:2400,gamesPlayed:45,wins:36,losses:9,winRate:"80.0"},{id:"3",name:"Sofia Reyes",age:52,rank:3,points:2250,gamesPlayed:42,wins:32,losses:10,winRate:"76.2"},{id:"4",name:"Isabella Tan",age:71,rank:4,points:2150,gamesPlayed:38,wins:29,losses:9,winRate:"76.3"},{id:"j1",name:"Alexandra Santos",age:15,rank:5,points:1950,gamesPlayed:32,wins:25,losses:7,winRate:"78.1"},{id:"j2",name:"Diana Garcia",age:17,rank:6,points:1800,gamesPlayed:28,wins:22,losses:6,winRate:"78.6"}]}];d(K),c((D=K[0])==null?void 0:D.id)}catch{k("Failed to fetch rankings. Please try again later.")}finally{h(!1)}},B=D=>{const K=V(D),ke=K.slice(0,3),we=K.slice(3);return we.length===0&&ke.length===0?n.jsx("div",{style:{textAlign:"center",padding:"40px",color:"#64748b"},children:"No players found matching your search criteria."}):we.length===0?null:n.jsxs(f3,{children:[n.jsxs(m3,{children:[n.jsx("div",{children:"Rank"}),n.jsx("div",{children:"Player"}),n.jsx("div",{children:"Age"}),n.jsx("div",{children:"Points"}),n.jsx("div",{children:"Games (W-L)"})]}),we.slice(0,47).map(ce=>n.jsxs(h3,{children:[n.jsx(y3,{children:ce.rank}),n.jsxs(x3,{children:[n.jsx(b3,{children:ax(ce.name)}),n.jsx(g3,{children:ce.name})]}),n.jsx(Nu,{children:ce.age}),n.jsx(Nu,{children:rx(ce.points)}),n.jsxs(Nu,{children:[ce.wins,"-",ce.losses]})]},ce.id))]})};if(f)return n.jsx(Bu,{children:n.jsx(L3,{children:"Loading rankings..."})});if(w)return n.jsx(Bu,{children:n.jsxs(M3,{children:[n.jsx("div",{children:w}),n.jsx(T3,{onClick:A,children:"Try Again"})]})});const z=r.find(D=>D.id===u),C=(z?V(z.rankings):[]).slice(0,3);return n.jsxs(Bu,{children:[n.jsxs(e3,{children:[n.jsx(t3,{children:"Player Rankings"}),n.jsx(n3,{children:"Track the performance and standings of pickleball players across different categories."}),n.jsxs(i3,{children:["Last Updated: ",M]}),n.jsxs(a3,{children:[n.jsxs(r3,{children:[n.jsx(R3,{}),n.jsx(s3,{type:"text",placeholder:"Search by player name...",value:v,onChange:D=>x(D.target.value)})]}),n.jsx(o3,{children:n.jsxs(l3,{value:E,onChange:D=>W(D.target.value),children:[n.jsx("option",{value:"",children:"All Ages"}),$.map(D=>n.jsx("option",{value:D,children:D},D))]})})]})]}),n.jsx(d3,{children:r.map(D=>n.jsx(c3,{$active:D.id===u,onClick:()=>c(D.id),children:D.name},D.id))}),n.jsxs(u3,{children:[n.jsx(p3,{children:C.map(D=>n.jsxs(v3,{$rank:D.rank,children:[n.jsx(w3,{children:D.rank}),n.jsxs(j3,{children:[n.jsx(k3,{children:ax(D.name)}),n.jsx(S3,{children:n.jsx(C3,{children:D.name})})]}),n.jsxs(z3,{children:[n.jsxs(Ou,{children:[n.jsx(qu,{children:D.age}),n.jsx(Uu,{children:"Age"})]}),n.jsxs(Ou,{children:[n.jsx(qu,{children:rx(D.points)}),n.jsx(Uu,{children:"Points"})]}),n.jsxs(Ou,{children:[n.jsxs(qu,{children:[D.wins,"-",D.losses]}),n.jsx(Uu,{children:"Games (W-L)"})]})]})]},D.id))}),B((z==null?void 0:z.rankings)||[])]})]})}const jg="/assets/vite-Dq28Z1Xn.svg",P3=s.div`
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
`,D3=s.div`
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
`,E3=s.div`
  text-align: center;
  margin-bottom: 32px;
`,$3=s.div`
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
`,B3=s.h1`
  color: #234255;
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 8px;
  text-align: center;
`,N3=s.p`
  color: #64748b;
  font-size: 15px;
  margin: 0 0 32px;
  text-align: center;
`,O3=s.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,ox=s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,lx=s.label`
  color: #475569;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,q3=s.div`
  position: relative;
`,sx=s.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 13px;
  background: white;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
    font-size: 13px;
  }

  ${r=>r.$hasPassword&&`
    padding-right: 48px;
  `}

  ${r=>r.$hasError&&`
    border-color: #ef4444;
    &:focus {
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
  `}
`,U3=s.button`
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
`,H3=s.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: -8px;
`,_3=s.input`
  width: 16px;
  height: 16px;
  accent-color: #29ba9b;
`,G3=s.label`
  color: #475569;
  font-size: 14px;
  cursor: pointer;
`,Y3=s.a`
  color: #29ba9b;
  font-size: 14px;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`,W3=s.button`
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

  ${r=>r.$loading&&`
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
`,F3=s.div`
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
`,V3=s.div`
  display: flex;
  gap: 16px;
`,Q3=s.button`
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
`,Hu=s.div`
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
`,I3=s.p`
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
`,J3=()=>n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),n.jsx("path",{d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}),Z3=()=>n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"})}),_u=()=>n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),X3=()=>n.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"})}),K3=()=>{const r=ua(),[d,u]=y.useState({email:"",password:""}),[c,f]=y.useState(!1),[h,w]=y.useState(!1),[k,v]=y.useState({}),[x,M]=y.useState(!1),O=B=>{var C;const z=["gmail.com","yahoo.com","hotmail.com","outlook.com","icloud.com","protonmail.com","zoho.com","aol.com","live.com","msn.com"],re=(C=B.split("@")[1])==null?void 0:C.toLowerCase();return z.includes(re)},E=()=>{const B={};return d.email?/\S+@\S+\.\S+/.test(d.email)?O(d.email)||(B.email="Please use a valid email provider (Gmail, Yahoo, Outlook, etc.)"):B.email="Please enter a valid email":B.email="Email is required",d.password?d.password.length<6&&(B.password="Password must be at least 6 characters"):B.password="Password is required",v(B),Object.keys(B).length===0},W=B=>{const{name:z,value:re}=B.target;u(C=>({...C,[z]:re})),k[z]&&v(C=>({...C,[z]:""}))},{login:$,loginWithCredentials:Q}=pi(),V=async B=>{if(B.preventDefault(),!!E()){M(!0);try{const z=await fetch("http://localhost:5000/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:d.email,password:d.password})}),re=await z.json();if(!z.ok)throw new Error(re.message||"Login failed");const C=h?localStorage:sessionStorage;C.setItem("token",re.token),C.setItem("user",JSON.stringify(re.user)),$(re.user,re.token),r("/")}catch{console.log("Backend not available, trying dummy authentication...");const re=Q(d.email,d.password);re.success?r("/"):v(C=>({...C,submit:re.error||"Invalid credentials. Try: john.doe@gmail.com / password123"}))}finally{M(!1)}}},A=async B=>{try{console.log(`Signing in with ${B}`)}catch{v(re=>({...re,submit:`Failed to sign in with ${B}. Please try again.`}))}};return n.jsx(P3,{children:n.jsxs(D3,{children:[n.jsxs(E3,{children:[n.jsx($3,{children:n.jsx("img",{src:jg,alt:"Vite Logo"})}),n.jsx(B3,{children:"Welcome Back"}),n.jsx(N3,{children:"Sign in to Philippine Pickleball League"})]}),n.jsxs(O3,{onSubmit:V,children:[n.jsxs(ox,{children:[n.jsx(lx,{htmlFor:"email",children:"Email"}),n.jsx(sx,{type:"email",id:"email",name:"email",placeholder:"Enter your email",value:d.email,onChange:W,required:!0,autoComplete:"email",$hasError:!!k.email}),k.email&&n.jsxs(Hu,{children:[n.jsx(_u,{}),k.email]})]}),n.jsxs(ox,{children:[n.jsxs(lx,{htmlFor:"password",children:["Password",n.jsx(Y3,{href:"/forgot-password",children:"Forgot password?"})]}),n.jsxs(q3,{children:[n.jsx(sx,{type:c?"text":"password",id:"password",name:"password",placeholder:"Enter your password",value:d.password,onChange:W,required:!0,autoComplete:"current-password",$hasError:!!k.password,$hasPassword:!0}),n.jsx(U3,{type:"button",onClick:()=>f(!c),"aria-label":c?"Hide password":"Show password",children:c?n.jsx(Z3,{}):n.jsx(J3,{})})]}),k.password&&n.jsxs(Hu,{children:[n.jsx(_u,{}),k.password]})]}),n.jsxs(H3,{children:[n.jsx(_3,{type:"checkbox",id:"rememberMe",checked:h,onChange:B=>w(B.target.checked)}),n.jsx(G3,{htmlFor:"rememberMe",children:"Remember me"})]}),n.jsx(W3,{type:"submit",disabled:x,$loading:x,children:x?"Signing in...":"Sign in"}),k.submit&&n.jsxs(Hu,{children:[n.jsx(_u,{}),k.submit]})]}),n.jsx(F3,{children:n.jsx("span",{children:"or continue with"})}),n.jsx(V3,{children:n.jsxs(Q3,{onClick:()=>A("Google"),children:[n.jsx(X3,{}),"Google"]})}),n.jsxs(I3,{children:["Don't have an account?",n.jsx("a",{href:"/register",children:"Create one"})]})]})})},ej=s.div`
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
`,tj=s.div`
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
`,nj=s.div`
  text-align: center;
  margin-bottom: 32px;
`,ij=s.div`
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
`,aj=s.h1`
  color: #234255;
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 8px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
    margin: 0 0 6px;
  }
`,rj=s.p`
  color: #64748b;
  font-size: 15px;
  margin: 0 0 32px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
    margin: 0 0 24px;
  }
`,oj=s.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`,Na=s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Oa=s.label`
  color: #475569;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,dx=s.div`
  position: relative;
`,Er=s.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 13px;
  background: white;
  color: #234255;
  transition: all 0.2s;
  outline: none;

  @media (max-width: 768px) {
    padding: 10px 14px;
    font-size: 13px;
  }

  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
    font-size: 13px;
  }

  ${r=>r.$hasPassword&&`
    padding-right: 48px;
    
    @media (max-width: 768px) {
      padding-right: 44px;
    }
  `}

  ${r=>r.$hasError&&`
    border-color: #ef4444;
    &:focus {
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
  `}

  /* Clean styling for date inputs */
  &[type="date"] {
    font-size: 13px;
    color: ${r=>r.value?"#234255":"#94a3b8"};
    -webkit-appearance: none;
    -moz-appearance: textfield;
    appearance: none;
    position: relative;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'%3E%3C/path%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 16px center;
    background-size: 16px;
    cursor: pointer;
  }

  /* Remove date input default styling across browsers */
  &[type="date"]::-webkit-calendar-picker-indicator {
    opacity: 0;
    position: absolute;
    right: 16px;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    &[type="date"] {
      font-size: 13px;
    }
  }
`,lj=s.select`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 13px;
  background: white;
  color: #234255;
  transition: all 0.2s;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 16px;
  outline: none;
  border: 2px solid #e2e8f0;

  @media (max-width: 768px) {
    padding: 10px 14px;
    font-size: 13px;
  }

  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }

  /* Style for default/placeholder option */
  option[value=""] {
    color: #94a3b8;
  }

  option {
    color: #234255;
    padding: 8px;
    background: white;
  }

  /* When no option is selected, show placeholder color */
  &:invalid {
    color: #94a3b8;
    font-size: 13px;
  }

  /* When option is selected, show normal text color */
  &:valid {
    color: #234255;
    font-size: 13px;
  }

  /* Remove default styling in different browsers */
  &::-ms-expand {
    display: none;
  }

  /* Firefox specific fixes */
  &:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #234255;
    outline: none;
  }

  /* Remove any additional outlines */
  &:active,
  &:focus:active {
    outline: none;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }

  ${r=>r.$hasError&&`
    border-color: #ef4444;
    &:focus {
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
  `}
`,cx=s.button`
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
`,sj=s.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 4px;
`,Fo=s.span`
  color: ${r=>r.$met?"#10b981":"#94a3b8"};
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    width: 14px;
    height: 14px;
  }
`,dj=s.button`
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

  ${r=>r.$loading&&`
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
`,oa=s.div`
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
`,cj=s.p`
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
`,uj=s.div`
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
`,pj=s.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`,fj=s.button`
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
`,ux=()=>n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),n.jsx("path",{d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}),px=()=>n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"})}),Vo=()=>n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M5 13l4 4L19 7"})}),la=()=>n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),mj=()=>n.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"})}),hj=()=>{const r=ua(),[d,u]=y.useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:"",birthDate:"",gender:""}),[c,f]=y.useState(!1),[h,w]=y.useState(!1),[k,v]=y.useState({}),[x,M]=y.useState(!1),O={length:d.password.length>=8,uppercase:/[A-Z]/.test(d.password),lowercase:/[a-z]/.test(d.password),number:/[0-9]/.test(d.password),special:/[!@#$%^&*]/.test(d.password)},E=B=>{var C;const z=["gmail.com","yahoo.com","hotmail.com","outlook.com","icloud.com","protonmail.com","zoho.com","aol.com","live.com","msn.com"],re=(C=B.split("@")[1])==null?void 0:C.toLowerCase();return z.includes(re)},W=()=>{const B={};return d.firstName.trim()||(B.firstName="First name is required"),d.lastName.trim()||(B.lastName="Last name is required"),d.email?/\S+@\S+\.\S+/.test(d.email)?E(d.email)||(B.email="Please use a valid email provider (Gmail, Yahoo, Outlook, etc.)"):B.email="Please enter a valid email":B.email="Email is required",d.password?Object.values(O).every(Boolean)||(B.password="Password does not meet requirements"):B.password="Password is required",d.confirmPassword?d.password!==d.confirmPassword&&(B.confirmPassword="Passwords do not match"):B.confirmPassword="Please confirm your password",d.birthDate?new Date().getFullYear()-new Date(d.birthDate).getFullYear()<13&&(B.birthDate="You must be at least 13 years old"):B.birthDate="Birth date is required",d.gender||(B.gender="Gender is required"),v(B),Object.keys(B).length===0},$=B=>{const{name:z,value:re}=B.target;u(C=>({...C,[z]:re})),k[z]&&v(C=>({...C,[z]:""}))},{login:Q}=pi(),V=async B=>{if(B.preventDefault(),!!W()){M(!0);try{const z=await fetch("http://localhost:5000/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:d.firstName,lastName:d.lastName,email:d.email,password:d.password,birthDate:d.birthDate,gender:d.gender})}),re=await z.json();if(!z.ok)throw new Error(re.message||"Registration failed");localStorage.setItem("token",re.token),localStorage.setItem("user",JSON.stringify(re.user)),Q(re.user,re.token),r("/")}catch(z){v(re=>({...re,submit:z.message}))}finally{M(!1)}}},A=async B=>{try{console.log(`Signing up with ${B}`)}catch{v(re=>({...re,submit:`Failed to sign up with ${B}. Please try again.`}))}};return n.jsx(ej,{children:n.jsxs(tj,{children:[n.jsxs(nj,{children:[n.jsx(ij,{children:n.jsx("img",{src:jg,alt:"Vite Logo"})}),n.jsx(aj,{children:"Create Account"}),n.jsx(rj,{children:"Join the Philippine Pickleball League"})]}),n.jsxs(oj,{onSubmit:V,children:[n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:"16px"},children:[n.jsxs(Na,{children:[n.jsx(Oa,{htmlFor:"firstName",children:"First Name"}),n.jsx(Er,{type:"text",id:"firstName",name:"firstName",placeholder:"Enter first name",value:d.firstName,onChange:$,required:!0,$hasError:!!k.firstName}),k.firstName&&n.jsxs(oa,{children:[n.jsx(la,{}),k.firstName]})]}),n.jsxs(Na,{children:[n.jsx(Oa,{htmlFor:"lastName",children:"Last Name"}),n.jsx(Er,{type:"text",id:"lastName",name:"lastName",placeholder:"Enter last name",value:d.lastName,onChange:$,required:!0,$hasError:!!k.lastName}),k.lastName&&n.jsxs(oa,{children:[n.jsx(la,{}),k.lastName]})]})]}),n.jsxs(Na,{children:[n.jsx(Oa,{htmlFor:"email",children:"Email"}),n.jsx(Er,{type:"email",id:"email",name:"email",placeholder:"Enter your email",value:d.email,onChange:$,required:!0,autoComplete:"email",$hasError:!!k.email}),k.email&&n.jsxs(oa,{children:[n.jsx(la,{}),k.email]})]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:"16px"},children:[n.jsxs(Na,{children:[n.jsx(Oa,{htmlFor:"birthDate",children:"Birth Date"}),n.jsx(Er,{type:"date",id:"birthDate",name:"birthDate",value:d.birthDate,onChange:$,required:!0,$hasError:!!k.birthDate,placeholder:"Select your birth date"}),k.birthDate&&n.jsxs(oa,{children:[n.jsx(la,{}),k.birthDate]})]}),n.jsxs(Na,{children:[n.jsx(Oa,{htmlFor:"gender",children:"Gender"}),n.jsxs(lj,{id:"gender",name:"gender",value:d.gender,onChange:$,required:!0,$hasError:!!k.gender,children:[n.jsx("option",{value:"",children:"Select your gender"}),n.jsx("option",{value:"male",children:"Male"}),n.jsx("option",{value:"female",children:"Female"})]}),k.gender&&n.jsxs(oa,{children:[n.jsx(la,{}),k.gender]})]})]}),n.jsxs(Na,{children:[n.jsx(Oa,{htmlFor:"password",children:"Password"}),n.jsxs(dx,{children:[n.jsx(Er,{type:c?"text":"password",id:"password",name:"password",placeholder:"Create a password",value:d.password,onChange:$,required:!0,$hasError:!!k.password,$hasPassword:!0}),n.jsx(cx,{type:"button",onClick:()=>f(!c),"aria-label":c?"Hide password":"Show password",children:c?n.jsx(px,{}):n.jsx(ux,{})})]}),n.jsxs(sj,{children:[n.jsxs(Fo,{$met:O.length,children:[O.length?n.jsx(Vo,{}):"•"," At least 8 characters"]}),n.jsxs(Fo,{$met:O.uppercase,children:[O.uppercase?n.jsx(Vo,{}):"•"," One uppercase letter"]}),n.jsxs(Fo,{$met:O.lowercase,children:[O.lowercase?n.jsx(Vo,{}):"•"," One lowercase letter"]}),n.jsxs(Fo,{$met:O.number,children:[O.number?n.jsx(Vo,{}):"•"," One number"]}),n.jsxs(Fo,{$met:O.special,children:[O.special?n.jsx(Vo,{}):"•"," One special character"]})]}),k.password&&n.jsxs(oa,{children:[n.jsx(la,{}),k.password]})]}),n.jsxs(Na,{children:[n.jsx(Oa,{htmlFor:"confirmPassword",children:"Confirm Password"}),n.jsxs(dx,{children:[n.jsx(Er,{type:h?"text":"password",id:"confirmPassword",name:"confirmPassword",placeholder:"Confirm your password",value:d.confirmPassword,onChange:$,required:!0,$hasError:!!k.confirmPassword,$hasPassword:!0}),n.jsx(cx,{type:"button",onClick:()=>w(!h),"aria-label":h?"Hide password":"Show password",children:h?n.jsx(px,{}):n.jsx(ux,{})})]}),k.confirmPassword&&n.jsxs(oa,{children:[n.jsx(la,{}),k.confirmPassword]})]}),n.jsx(dj,{type:"submit",disabled:x,$loading:x,children:x?"Creating account...":"Create account"}),k.submit&&n.jsxs(oa,{children:[n.jsx(la,{}),k.submit]})]}),n.jsx(uj,{children:n.jsx("span",{children:"or sign up with"})}),n.jsx(pj,{children:n.jsxs(fj,{onClick:()=>A("Google"),children:[n.jsx(mj,{}),"Google"]})}),n.jsxs(cj,{children:["Already have an account?",n.jsx("a",{href:"/signin",children:"Sign in"})]})]})})},xj=(r={})=>{const[d,u]=y.useState(!1),[c,f]=y.useState(!1),h=y.useRef(null);return y.useEffect(()=>{const w=new IntersectionObserver(([k])=>{k.isIntersecting&&!c&&(u(!0),f(!0))},r);return h.current&&w.observe(h.current),()=>{h.current&&w.unobserve(h.current)}},[h,r,c]),[h,d]};s.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.15;
  z-index: 0;
`;const gj=s.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 140px 16px 80px;
  background: linear-gradient(-45deg, #234255, #29ba9b, #1a2e3b, #a3e635);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 74vh;
    padding: 120px 16px 120px;
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
`,bj=s.div`
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
`,yj=s.h1`
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
`,vj=s.p`
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
`,wj=s.div`
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
`,jj=s(si)`
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
  width: ${r=>r.$fullWidth?"100%":"auto"};
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
`;s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  width: 100%;
  margin-top: 0.75rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;const kg=s.section`
  padding: 80px 24px;
  background: ${r=>r.$dark?"#1a2e3b":"white"};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 64px 16px;
  }
`,fx=s.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;s.h2`
  font-size: clamp(1.75rem, 6vw, 3rem);
  font-weight: 700;
  color: ${r=>r.$dark?"white":"#234255"};
  margin-bottom: 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;const kj=s.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 0;
  opacity: ${r=>r.$isVisible?1:0};
  transition: opacity 0.4s ease-out;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,Rs=s.div`
  background: ${r=>r.$dark?"#234255":"white"};
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  cursor: ${r=>r.onClick?"pointer":"default"};
  opacity: 0;
  transform: translateY(20px);
  animation: ${r=>r.$isVisible?"slideIn 0.4s cubic-bezier(0.2, 0, 0, 1) forwards":"none"};
  animation-delay: ${r=>r.$index*.08}s;

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
    transform: ${r=>r.$isVisible?"translateY(-4px)":"translateY(20px)"};
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }

  svg {
    width: 32px;
    height: 32px;
    margin-bottom: 1rem;
    color: #29ba9b;
    opacity: 0;
    transform: scale(0.95);
    animation: ${r=>r.$isVisible?"iconFade 0.3s ease-out forwards":"none"};
    animation-delay: ${r=>r.$index*.08+.15}s;

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
    color: ${r=>r.$dark?"white":"#234255"};
    margin-bottom: 0.5rem;
    opacity: 0;
    transform: translateY(8px);
    animation: ${r=>r.$isVisible?"titleSlide 0.3s ease-out forwards":"none"};
    animation-delay: ${r=>r.$index*.08+.2}s;

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
    color: ${r=>r.$dark?"rgba(255, 255, 255, 0.8)":"#64748b"};
    line-height: 1.4;
    font-size: 0.875rem;
    opacity: 0;
    animation: ${r=>r.$isVisible?"fadeIn 0.3s ease-out forwards":"none"};
    animation-delay: ${r=>r.$index*.08+.25}s;

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
`;s.div`
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
`;s.h3`
  font-size: clamp(1.75rem, 5vw, 3rem);
  font-weight: 700;
  color: #29ba9b;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
`;s.p`
  color: ${r=>r.$dark?"rgba(255, 255, 255, 0.8)":"#64748b"};
  font-size: 1rem;
`;const Sj=s(kg)`
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
`,Cj=s.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 16px;
`,zj=s.div`
  max-width: 800px;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`,Lj=s.h2`
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
`,Mj=s.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  line-height: 1.8;
  margin: 0 auto;
  max-width: 700px;
`,Tj=s.div`
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
`,Rj=s.div`
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
  opacity: ${r=>r.$show?1:0};
  visibility: ${r=>r.$show?"visible":"hidden"};
  
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
`;function Aj(){const r=ua(),{user:d,isAuthenticated:u}=pi(),[c,f]=y.useState({activePlayers:0,tournamentsHosted:0,playerSatisfaction:0,clubPartners:0}),[h,w]=y.useState(!0),[k,v]=xj({threshold:.2});y.useEffect(()=>{window.scrollTo(0,0)},[]),y.useEffect(()=>{const O=document.querySelector("footer");if(!O)return;const E=new IntersectionObserver(([W])=>{W.isIntersecting&&w(!1)},{threshold:.1});return E.observe(O),()=>{O&&E.unobserve(O)}},[]);const x=O=>{r(O)},M=()=>{window.scrollTo({top:window.innerHeight,behavior:"smooth"})};return y.useEffect(()=>{(async()=>{try{f({activePlayers:0,tournamentsHosted:0,playerSatisfaction:0,clubPartners:0})}catch(E){console.error("Error fetching stats:",E)}})()},[]),n.jsx(n.Fragment,{children:n.jsxs("main",{children:[n.jsxs(gj,{children:[n.jsxs(bj,{children:[n.jsx(yj,{children:u?n.jsxs(n.Fragment,{children:["Welcome back, ",n.jsx("span",{children:d==null?void 0:d.firstName}),"!"]}):n.jsxs(n.Fragment,{children:["Philippine ",n.jsx("span",{children:"Pickleball"})," League"]})}),n.jsx(vj,{children:u?"Ready to continue your pickleball journey? Discover upcoming tournaments in your area, connect with fellow players in our active community forum, track your ranking progress, and find the best courts and clubs near you. Your next great match is just a click away!":"Join the fastest growing pickleball community in the Philippines. Connect with players, join tournaments, and track your progress in a vibrant sports community."}),!u&&n.jsx(wj,{children:n.jsx(jj,{to:"/register",$primary:!0,$fullWidth:!0,children:"Get Started"})})]}),n.jsxs(Rj,{onClick:M,$show:h,children:[n.jsx("span",{className:"scroll-text",children:"Scroll Down"}),n.jsxs("div",{className:"arrows",children:[n.jsx("div",{className:"arrow"}),n.jsx("div",{className:"arrow"}),n.jsx("div",{className:"arrow"})]})]})]}),n.jsx(kg,{children:n.jsx(fx,{children:n.jsxs(kj,{ref:k,$isVisible:v,children:[n.jsxs(Rs,{onClick:()=>x("/forum"),$index:0,$isVisible:v,children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"})}),n.jsx("h3",{children:"Forum"}),n.jsx("p",{children:"Join discussions and connect with the pickleball community"})]}),n.jsxs(Rs,{onClick:()=>x("/tournament"),$index:1,$isVisible:v,children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})}),n.jsx("h3",{children:"Tournaments"}),n.jsx("p",{children:"Find and join upcoming pickleball tournaments"})]}),n.jsxs(Rs,{onClick:()=>x("/ranks"),$index:2,$isVisible:v,children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),n.jsx("h3",{children:"Ranks"}),n.jsx("p",{children:"Check player rankings and track your progress"})]}),n.jsxs(Rs,{onClick:()=>x("/clubs-courts"),$index:3,$isVisible:v,children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),n.jsx("path",{d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),n.jsx("h3",{children:"Clubs & Courts"}),n.jsx("p",{children:"Find nearby pickleball courts and local clubs"})]})]})})}),n.jsx(Sj,{children:n.jsx(fx,{children:n.jsxs(Cj,{children:[n.jsxs(zj,{children:[n.jsxs(Lj,{children:["About ",n.jsx("span",{children:"Philippine Pickleball League"})]}),n.jsx(Mj,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),n.jsxs(Tj,{children:[n.jsxs("div",{children:[n.jsx("h3",{children:c.activePlayers>0?`${c.activePlayers}+`:"0"}),n.jsx("p",{children:"Active Players"})]}),n.jsxs("div",{children:[n.jsx("h3",{children:c.tournamentsHosted>0?`${c.tournamentsHosted}+`:"0"}),n.jsx("p",{children:"Tournaments Hosted"})]}),n.jsxs("div",{children:[n.jsx("h3",{children:c.playerSatisfaction>0?`${c.playerSatisfaction}%`:"0%"}),n.jsx("p",{children:"Player Satisfaction"})]}),n.jsxs("div",{children:[n.jsx("h3",{children:c.clubPartners>0?`${c.clubPartners}+`:"0"}),n.jsx("p",{children:"Club Partners"})]})]})]})})})]})})}const mx=s.div`
  min-height: calc(100vh - 140px);
  padding: 50px 20px 40px 20px;
  max-width: 800px;
  margin: 0 auto;
  background: #ffffff;
`,Pj=s.div`
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
`,Dj=s.h1`
  font-size: 2.2rem;
  font-weight: 700;
  color: #234255;
  margin-bottom: 12px;
`,Ej=s.p`
  color: #6b7280;
  font-size: 1.1rem;
  line-height: 1.6;
`,$j=s.form`
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #f1f5f9;
`,sa=s.div`
  margin-bottom: 32px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,da=s.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #234255;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 8px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: #29ba9b;
  }
`,hx=s.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 20px;
  
  @media (min-width: 768px) {
    grid-template-columns: ${r=>r.columns||"1fr 1fr"};
  }
`,Lt=s.div`
  display: flex;
  flex-direction: column;
`,Mt=s.label`
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
  font-size: 0.95rem;
`,oi=s.input`
  padding: 12px 16px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
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
`,xx=s.textarea`
  padding: 12px 16px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  color: #1a1a1a;
  background: white;
  transition: all 0.2s ease;
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
  
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
`,As=s.select`
  padding: 12px 16px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  color: #1a1a1a;
  background: white;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  
  &:hover {
    border-color: #cbd5e0;
  }
`;s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px;
  margin-top: 8px;
`;s.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 0.95rem;
  color: #374151;
  
  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    accent-color: #29ba9b;
  }
`;const Bj=s.div`
  border: 2px dashed #e2e8f0;
  border-radius: 8px;
  padding: 32px;
  text-align: center;
  background: #f8fafc;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    border-color: #29ba9b;
    background: #f0fffe;
  }
  
  &.dragover {
    border-color: #29ba9b;
    background: #f0fffe;
  }
`,Nj=s.div`
  font-size: 2rem;
  margin-bottom: 12px;
  color: #64748b;
`,Oj=s.p`
  color: #64748b;
  margin-bottom: 8px;
  font-size: 1rem;
`,qj=s.p`
  color: #94a3b8;
  font-size: 0.875rem;
`;s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #f0fffe;
  border: 1px solid #29ba9b;
  border-radius: 8px;
  margin-top: 12px;
`;s.span`
  color: #234255;
  font-weight: 500;
`;s.button`
  background: none;
  border: none;
  color: #ef4444;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 4px;
  
  &:hover {
    color: #dc2626;
  }
`;const Uj=s.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,Gu=s.button`
  padding: 14px 32px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1.5px solid;
  min-width: 140px;
  
  ${r=>r.variant==="primary"?`
    background: #29ba9b;
    color: white;
    border-color: #29ba9b;
    
    &:hover {
      background: #26a085;
      border-color: #26a085;
      transform: translateY(-1px);
    }
    
    &:disabled {
      background: #94a3b8;
      border-color: #94a3b8;
      cursor: not-allowed;
      transform: none;
    }
  `:`
    background: white;
    color: #6b7280;
    border-color: #e2e8f0;
    
    &:hover {
      background: #f8fafc;
      border-color: #cbd5e0;
    }
  `}
`,Hj=s.div`
  background: #fef3c7;
  border: 1px solid #f59e0b;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
`;s.h4`
  color: #92400e;
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 1rem;
`;const _j=s.p`
  color: #92400e;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
`,gx=s.input`
  display: none;
`,Gj=s.div`
  width: 100%;
  height: 400px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  margin-bottom: 16px;
  position: relative;
  overflow: hidden;
`,bx=s.div`
  width: 100%;
  height: 100%;
  background: #f8fafc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed #cbd5e0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #f1f5f9;
    border-color: #29ba9b;
  }
`,yx=s.div`
  font-size: 3rem;
  margin-bottom: 12px;
  color: #64748b;
`,vx=s.p`
  color: #64748b;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 8px;
`,wx=s.p`
  color: #94a3b8;
  font-size: 0.9rem;
  text-align: center;
  max-width: 300px;
`,Yj=s.div`
  background: #f0fffe;
  border: 1px solid #29ba9b;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`,Wj=s.h4`
  color: #234255;
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 1rem;
`,Fj=s.p`
  color: #475569;
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0;
`,Vj=s.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`,jx=s.button`
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid;
  
  ${r=>r.variant==="primary"?`
    background: #29ba9b;
    color: white;
    border-color: #29ba9b;
    
    &:hover {
      background: #26a085;
      border-color: #26a085;
    }
  `:`
    background: white;
    color: #6b7280;
    border-color: #e2e8f0;
    
    &:hover {
      background: #f8fafc;
      border-color: #cbd5e0;
    }
  `}
`;s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  margin-top: 8px;
`;s.div`
  border: 2px solid ${r=>r.selected?"#29ba9b":"#e2e8f0"};
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${r=>r.selected?"#f0fffe":"white"};
  
  &:hover {
    border-color: #29ba9b;
    background: #f0fffe;
  }
`;s.div`
  font-weight: 600;
  color: #234255;
  margin-bottom: 4px;
  font-size: 1rem;
`;s.div`
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.4;
`;s.div`
  background: #fef3c7;
  border: 1px solid #f59e0b;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
`;s.h4`
  color: #92400e;
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 1rem;
`;s.p`
  color: #92400e;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
`;const Qj=s.div`
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  background: #fafbfc;
`,Ij=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,Jj=s.h4`
  color: #234255;
  font-weight: 600;
  margin: 0;
  font-size: 1.1rem;
`,Zj=s.button`
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover {
    background: #dc2626;
  }
`,Xj=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 16px;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,kx=s.button`
  background: #29ba9b;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  
  &:hover {
    background: #26a085;
  }
`,Kj=s.div`
  background: #f0fffe;
  border: 1px solid #29ba9b;
  border-radius: 8px;
  padding: 16px;
  margin-top: 20px;
`,ek=s.h4`
  color: #234255;
  font-weight: 600;
  margin-bottom: 12px;
  font-size: 1rem;
`,tk=s.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,nk=s.li`
  color: #6b7280;
  font-size: 0.9rem;
  padding: 4px 0;
  border-bottom: 1px solid #e2e8f0;
  
  &:last-child {
    border-bottom: none;
  }
`,ik=s.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  margin: 20px 0;
`;s.h3`
  color: #234255;
  font-weight: 600;
  margin-bottom: 20px;
  font-size: 1.2rem;
  text-align: center;
`;const ak=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,rk=s.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
`,ok=s.h4`
  color: #234255;
  font-weight: 600;
  margin-bottom: 16px;
  font-size: 1rem;
  border-bottom: 2px solid #29ba9b;
  padding-bottom: 8px;
`;s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #f1f5f9;
  
  &:last-child {
    border-bottom: none;
  }
`;s.span`
  color: #6b7280;
  font-weight: 500;
  font-size: 0.9rem;
`;s.span`
  color: #234255;
  font-weight: 600;
  font-size: 0.9rem;
  font-family: monospace;
`;const lk=s.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
`,sk=s.h4`
  color: #234255;
  font-weight: 600;
  margin-bottom: 16px;
  font-size: 1rem;
  border-bottom: 2px solid #29ba9b;
  padding-bottom: 8px;
`,dk=s.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`,ck=s.div`
  width: 150px;
  height: 150px;
  background: #f8fafc;
  border: 2px dashed #cbd5e0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #f1f5f9;
    border-color: #29ba9b;
  }
`,uk=s.div`
  font-size: 2rem;
  margin-bottom: 8px;
  color: #64748b;
`,pk=s.p`
  color: #64748b;
  font-size: 0.9rem;
  font-weight: 500;
  margin: 4px 0;
`,fk=s.p`
  color: #94a3b8;
  font-size: 0.8rem;
  margin: 0;
`,mk=s.p`
  color: #6b7280;
  font-size: 0.85rem;
  line-height: 1.4;
  margin: 0;
  max-width: 250px;
  margin: 0 auto;
`,hk=s.div`
  margin-bottom: 16px;
`;s.input`
  padding: 12px 16px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  color: #1a1a1a;
  background: white;
  transition: all 0.2s ease;
  width: 100%;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  
  &:hover {
    border-color: #cbd5e0;
  }

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
    opacity: 0.8;
  }
`;s.p`
  color: #6b7280;
  font-size: 0.875rem;
  margin: 8px 0 0 0;
  font-style: italic;
`;const xk=s.div`
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  background: white;
  margin-bottom: 12px;
`,gk=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,Sx=s.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  color: #6b7280;
  
  &:hover {
    background: #f3f4f6;
    color: #374151;
  }
`,bk=s.h3`
  margin: 0;
  color: #374151;
  font-size: 1.1rem;
  font-weight: 600;
`,yk=s.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  margin-bottom: 16px;
`,vk=s.div`
  text-align: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  padding: 8px 4px;
`,wk=s.button`
  padding: 8px 4px;
  border: none;
  border-radius: 4px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${r=>r.selected?"#29ba9b":r.today?"#f0fffe":r.otherMonth?"transparent":"white"};
  color: ${r=>r.selected?"white":r.otherMonth?"#cbd5e0":r.today?"#29ba9b":"#374151"};
  
  &:hover {
    background: ${r=>r.selected?"#26a085":r.otherMonth?"transparent":"#f0fffe"};
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`,jk=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`,Cx=s.button`
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid;
  
  ${r=>r.variant==="primary"?`
    background: #29ba9b;
    color: white;
    border-color: #29ba9b;
    
    &:hover {
      background: #26a085;
      border-color: #26a085;
    }
  `:`
    background: white;
    color: #6b7280;
    border-color: #e2e8f0;
    
    &:hover {
      background: #f8fafc;
      border-color: #cbd5e0;
    }
  `}
`,kk=s.button`
  padding: 12px 16px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  color: #374151;
  background: white;
  transition: all 0.2s ease;
  cursor: pointer;
  width: 100%;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  
  &:hover {
    border-color: #cbd5e0;
  }
`,Sk=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
`,Ck=s.div`
  background: #f0fffe;
  border: 1px solid #29ba9b;
  border-radius: 20px;
  padding: 6px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  color: #234255;
`,zk=s.button`
  background: none;
  border: none;
  color: #ef4444;
  cursor: pointer;
  font-size: 1rem;
  padding: 0;
  
  &:hover {
    color: #dc2626;
  }
`,zx=s.div`
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  background: white;
  transition: all 0.2s ease;
  
  &:focus-within {
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
`,Lx=s.div`
  display: flex;
  gap: 4px;
  padding: 8px 12px;
  border-bottom: 1px solid #e2e8f0;
  background: #f8fafc;
  border-radius: 8px 8px 0 0;
`,$r=s.button`
  background: ${r=>r.active?"#29ba9b":"white"};
  color: ${r=>r.active?"white":"#374151"};
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 6px 12px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 60px;
  user-select: none;
  
  &:hover {
    background: ${r=>r.active?"#26a085":"#f3f4f6"};
    border-color: #cbd5e0;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(41, 186, 155, 0.2);
  }
  
  &:active {
    transform: translateY(1px);
  }
`,Mx=s.div`
  min-height: 100px;
  padding: 12px 16px;
  font-size: 1rem;
  color: #1a1a1a;
  background: white;
  border-radius: 0 0 8px 8px;
  outline: none;
  font-family: inherit;
  line-height: 1.5;
  white-space: pre-wrap;
  
  &:empty:before {
    content: attr(data-placeholder);
    color: #94a3b8;
    font-size: 1rem;
  }
  
  /* Style lists */
  ul {
    margin: 8px 0;
    padding-left: 20px;
  }
  
  li {
    margin: 4px 0;
  }
  
  /* Style bold and italic */
  strong {
    font-weight: 600;
  }
  
  em {
    font-style: italic;
  }
  
  /* Prevent nested formatting issues */
  p {
    margin: 8px 0;
  }
  
  p:first-child {
    margin-top: 0;
  }
  
  p:last-child {
    margin-bottom: 0;
  }
  
  /* Tab support */
  tab-size: 4;
  -moz-tab-size: 4;
`,Lk=()=>{const{user:r,showNotification:d}=pi(),u=ua(),[c,f]=y.useState({tournamentName:"",description:"",tournamentPicture:null,registrationInstructions:"",tournamentDates:[],registrationDeadline:"",category:"",skillLevel:"",entryFee:"",prizePool:"",venueName:"",venueAddress:"",venueCity:"",venueState:"",venueZip:"",contactEmail:"",contactPhone:"",rules:"",events:"",paymentMethods:[{id:1,bankName:"",accountName:"",accountNumber:"",qrCodeImage:null}],additionalInfo:"",tournamentCategories:[]}),[h,w]=y.useState(!1),[k,v]=y.useState(null),[x,M]=y.useState(!1),[O,E]=y.useState(!1),[W,$]=y.useState(new Date),[Q,V]=y.useState([]),A=y.useRef(null),B=y.useRef(null);y.useEffect(()=>{if(c.tournamentCategories.length===0){const _={id:Date.now(),division:"",ageCategory:"",skillLevel:"",maxParticipants:"",prizePool:""};f(de=>({...de,tournamentCategories:[_]}))}},[]),y.useEffect(()=>{A.current&&c.rules&&(A.current.innerHTML=c.rules),B.current&&c.events&&(B.current.innerHTML=c.events)},[c.rules,c.events]);const z=["Men's Singles","Women's Singles","Men's Doubles","Women's Doubles","Mixed Doubles","Team"],re=["18+","35+","50+"],C=[{value:"beginner",label:"Beginner",isOpen:!1},{value:"intermediate",label:"Intermediate",isOpen:!1},{value:"advanced",label:"Advanced",isOpen:!1},{value:"open-tier-1",label:"Open - Tier 1",isOpen:!0},{value:"open-tier-2",label:"Open - Tier 2",isOpen:!0},{value:"open-tier-3",label:"Open - Tier 3",isOpen:!0}],D=_=>{const{name:de,value:te}=_.target;f(ze=>({...ze,[de]:te}))},K=()=>{V(O?[]:[...c.tournamentDates]),E(!O)},ke=_=>{Q.includes(_)?V(Q.filter(de=>de!==_)):V([...Q,_].sort())},we=()=>{f(_=>({..._,tournamentDates:Q})),E(!1)},ce=()=>{V([]),E(!1)},le=_=>{f(de=>({...de,tournamentDates:de.tournamentDates.filter(te=>te!==_)}))},qe=(_,de=null)=>{document.execCommand(_,!1,de)},mt=(_,de)=>{if(de.current){de.current.focus();const te=window.getSelection();if(te.rangeCount===0){const ze=document.createRange();ze.selectNodeContents(de.current),ze.collapse(!1),te.removeAllRanges(),te.addRange(ze)}qe(_),de.current.focus()}},ht=_=>{if(_.current){_.current.focus();const de=window.getSelection();if(de.rangeCount===0){const te=document.createRange();te.selectNodeContents(_.current),te.collapse(!1),de.removeAllRanges(),de.addRange(te)}qe("insertUnorderedList"),_.current.focus()}},Je=(_,de)=>{if(de.current){const te=de.current.innerHTML;f(ze=>({...ze,[_]:te}))}},F=(_,de)=>{if(de.current){const te=de.current.innerHTML;c[_]=te}},J=(_,de,te)=>{if(_.key==="Tab"){_.preventDefault();const ze=window.getSelection();if(ze.rangeCount>0){const Le=ze.getRangeAt(0),xt=document.createTextNode("    ");Le.deleteContents(),Le.insertNode(xt),Le.setStartAfter(xt),Le.setEndAfter(xt),ze.removeAllRanges(),ze.addRange(Le)}F(de,te)}},ye=_=>{const de=new Date(W);de.setMonth(W.getMonth()+_),$(de)},De=_=>{const de=_.getFullYear(),te=_.getMonth(),ze=new Date(de,te,1),xt=new Date(de,te+1,0).getDate(),Dt=ze.getDay(),St=[],Rt=new Date(de,te-1,0);for(let at=Dt-1;at>=0;at--)St.push({day:Rt.getDate()-at,date:new Date(de,te-1,Rt.getDate()-at),otherMonth:!0});for(let at=1;at<=xt;at++)St.push({day:at,date:new Date(de,te,at),otherMonth:!1});const fi=42-St.length;for(let at=1;at<=fi;at++)St.push({day:at,date:new Date(de,te+1,at),otherMonth:!0});return St},S=_=>{const de=_.target.files[0];if(de){if(!["image/jpeg","image/png","image/jpg"].includes(de.type)){d("Please upload a valid image (JPG, PNG)","error");return}if(de.size>5242880){d("File size must be less than 5MB","error");return}f(Le=>({...Le,tournamentPicture:de}))}},Z=()=>{f(_=>({..._,tournamentPicture:null}))},pe=_=>{f(de=>({...de,paymentMethods:de.paymentMethods.map(te=>te.id===_?{...te,qrCodeImage:null}:te)}))},I=()=>{if(c.paymentMethods.length>=3){d("Maximum of 3 payment methods allowed","error");return}const _={id:Date.now(),bankName:"",accountName:"",accountNumber:"",qrCodeImage:null};f(de=>({...de,paymentMethods:[...de.paymentMethods,_]}))},fe=_=>{if(c.paymentMethods.length<=1){d("At least one payment method is required","error");return}f(de=>({...de,paymentMethods:de.paymentMethods.filter(te=>te.id!==_)}))},Ce=(_,de,te)=>{f(ze=>({...ze,paymentMethods:ze.paymentMethods.map(Le=>Le.id===_?{...Le,[de]:te}:Le)}))},ve=(_,de)=>{const te=de.target.files[0];if(te){if(!["image/jpeg","image/png","image/jpg"].includes(te.type)){d("Please upload a valid image (JPG, PNG)","error");return}if(te.size>5242880){d("File size must be less than 5MB","error");return}Ce(_,"qrCodeImage",te)}},nt=()=>{M(!0),setTimeout(()=>{const _={name:"Riverside Pickleball Complex",address:"123 Tournament Drive, Riverside, CA 92501",lat:33.9533,lng:-117.3962};v(_),f(de=>({...de,venueName:_.name,venueAddress:_.address,venueCity:"Riverside",venueState:"CA",venueZip:"92501"})),M(!1)},2e3)},Ae=()=>{v(null),f(_=>({..._,venueName:"",venueAddress:"",venueCity:"",venueState:"",venueZip:""}))},it=()=>{if(k){const _=`https://www.google.com/maps/search/?api=1&query=${k.lat},${k.lng}`;window.open(_,"_blank")}},qt=()=>{const _={id:Date.now(),division:"",ageCategory:"",skillLevel:"",maxParticipants:"",prizePool:""};f(de=>({...de,tournamentCategories:[...de.tournamentCategories,_]}))},he=_=>{f(de=>({...de,tournamentCategories:de.tournamentCategories.filter(te=>te.id!==_)}))},Qe=(_,de,te)=>{f(ze=>{const Le=ze.tournamentCategories.map(xt=>{if(xt.id===_){const Dt={...xt,[de]:te};if(de==="skillLevel"){const St=C.find(Rt=>Rt.value===te);St&&St.isOpen&&(Dt.ageCategory="")}return Dt}return xt});return{...ze,tournamentCategories:Le}})},bn=async _=>{if(_.preventDefault(),w(!0),["tournamentName","description","registrationInstructions","registrationDeadline","category","skillLevel","entryFee","venueName","venueAddress","venueCity","contactEmail"].filter(Le=>!c[Le]).length>0){d("Please fill in all required fields","error"),w(!1);return}if(c.tournamentDates.length===0){d("Please add at least one tournament date","error"),w(!1);return}if(c.tournamentCategories.length===0){d("Please add at least one tournament category","error"),w(!1);return}if(c.tournamentCategories.filter(Le=>{const xt=C.find(St=>St.value===Le.skillLevel);return xt&&xt.isOpen?!Le.division||!Le.skillLevel||!Le.maxParticipants:!Le.division||!Le.ageCategory||!Le.skillLevel||!Le.maxParticipants}).length>0){d("Please complete all required tournament category fields","error"),w(!1);return}try{await new Promise(Le=>setTimeout(Le,2e3)),d("Tournament submission successful! Your tournament is pending admin approval.","success"),u("/profile")}catch{d("Failed to submit tournament. Please try again.","error")}finally{w(!1)}},qn=()=>{u("/profile")};return r?n.jsxs(mx,{children:[n.jsxs(Pj,{children:[n.jsx(Dj,{children:"Host a Tournament"}),n.jsx(Ej,{children:"Create and submit your tournament for admin approval. All tournaments require payment verification before approval."})]}),n.jsxs($j,{onSubmit:bn,children:[n.jsxs(sa,{children:[n.jsx(da,{children:"Basic Information"}),n.jsxs(Lt,{style:{marginTop:"24px"},children:[n.jsx(Mt,{children:"Tournament Name *"}),n.jsx(oi,{type:"text",name:"tournamentName",value:c.tournamentName,onChange:D,placeholder:"Enter tournament name",required:!0})]}),n.jsxs(Lt,{style:{marginTop:"24px"},children:[n.jsx(Mt,{children:"Tournament Description *"}),n.jsx(xx,{name:"description",value:c.description,onChange:D,placeholder:"Describe your tournament, format, and any special features",required:!0})]}),n.jsxs(Lt,{style:{marginTop:"24px"},children:[n.jsx(Mt,{children:"Tournament Picture"}),c.tournamentPicture?n.jsxs("div",{style:{position:"relative",marginTop:"12px"},children:[n.jsx("img",{src:URL.createObjectURL(c.tournamentPicture),alt:"Tournament Picture",style:{width:"100%",height:"400px",objectFit:"cover",borderRadius:"20px",border:"2px solid #e2e8f0",display:"block"}}),n.jsx("button",{type:"button",onClick:Z,style:{position:"absolute",top:"12px",right:"12px",background:"transparent",color:"white",border:"none",cursor:"pointer",fontSize:"24px",fontWeight:"bold",textShadow:"0 1px 3px rgba(0,0,0,0.8)",padding:"0",lineHeight:"1"},children:"×"}),n.jsx("div",{style:{marginTop:"8px",fontSize:"0.875rem",color:"#6b7280",fontStyle:"italic"},children:c.tournamentPicture.name})]}):n.jsxs(Bj,{onClick:()=>document.getElementById("tournament-picture-upload").click(),children:[n.jsx(Nj,{children:"🖼️"}),n.jsx(Oj,{children:"Click to upload tournament picture"}),n.jsx(qj,{children:"JPG or PNG (max 5MB)"})]}),n.jsx(gx,{id:"tournament-picture-upload",type:"file",accept:".jpg,.jpeg,.png",onChange:S})]}),n.jsxs(Lt,{style:{marginTop:"24px"},children:[n.jsx(Mt,{children:"Registration Instructions *"}),n.jsx(xx,{name:"registrationInstructions",value:c.registrationInstructions,onChange:D,placeholder:"Provide clear instructions on how participants can register for your tournament",required:!0})]})]}),n.jsxs(sa,{children:[n.jsx(da,{children:"Tournament Details"}),n.jsxs(Lt,{children:[n.jsx(Mt,{children:"Tournament Date Selection *"}),n.jsxs(hk,{children:[n.jsxs(kk,{type:"button",onClick:K,children:[n.jsx("span",{children:c.tournamentDates.length===0?"Click to select tournament dates":`${c.tournamentDates.length} date${c.tournamentDates.length!==1?"s":""} selected`}),n.jsx("span",{children:O?"▲":"▼"})]}),O&&n.jsxs(xk,{children:[n.jsxs(gk,{children:[n.jsx(Sx,{type:"button",onClick:()=>ye(-1),children:"◀"}),n.jsx(bk,{children:W.toLocaleDateString("en-US",{month:"long",year:"numeric"})}),n.jsx(Sx,{type:"button",onClick:()=>ye(1),children:"▶"})]}),n.jsxs(yk,{children:[["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(_=>n.jsx(vk,{children:_},_)),De(W).map((_,de)=>{const te=_.date.toISOString().split("T")[0],ze=Q.includes(te),Le=te===new Date().toISOString().split("T")[0];return n.jsx(wk,{type:"button",selected:ze,today:Le,otherMonth:_.otherMonth,onClick:()=>!_.otherMonth&&ke(te),children:_.day},de)})]}),n.jsxs(jk,{children:[n.jsx("div",{children:n.jsxs("span",{style:{color:"#6b7280",fontSize:"0.875rem"},children:[Q.length," date",Q.length!==1?"s":""," selected"]})}),n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[n.jsx(Cx,{type:"button",onClick:ce,children:"Cancel"}),n.jsx(Cx,{type:"button",variant:"primary",onClick:we,disabled:Q.length===0,children:"OK"})]})]})]}),c.tournamentDates.length>0&&n.jsx(Sk,{children:c.tournamentDates.map((_,de)=>n.jsxs(Ck,{children:[new Date(_).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"}),n.jsx(zk,{type:"button",onClick:()=>le(_),children:"×"})]},de))})]})]}),n.jsxs(Lt,{children:[n.jsx(Mt,{children:"Registration Deadline *"}),n.jsx(oi,{type:"date",name:"registrationDeadline",value:c.registrationDeadline,onChange:D,required:!0})]}),n.jsxs(Lt,{children:[n.jsx(Mt,{children:"Tournament Categories *"}),c.tournamentCategories.map((_,de)=>n.jsxs(Qj,{children:[n.jsxs(Ij,{children:[n.jsxs(Jj,{children:["Category ",de+1]}),c.tournamentCategories.length>1&&n.jsx(Zj,{onClick:()=>he(_.id),children:"Remove"})]}),n.jsxs(Xj,{children:[n.jsxs(Lt,{children:[n.jsx(Mt,{children:"Division *"}),n.jsxs(As,{value:_.division||"",onChange:te=>Qe(_.id,"division",te.target.value),required:!0,children:[n.jsx("option",{value:"",children:"Select division"}),z.map(te=>n.jsx("option",{value:te,children:te},te))]},`division-${_.id}`)]}),n.jsxs(Lt,{children:[n.jsx(Mt,{children:"Skill Level *"}),n.jsxs(As,{value:_.skillLevel||"",onChange:te=>Qe(_.id,"skillLevel",te.target.value),required:!0,children:[n.jsx("option",{value:"",children:"Select skill level"}),C.map(te=>n.jsx("option",{value:te.value,children:te.label},te.value))]},`skill-${_.id}`)]}),n.jsxs(Lt,{children:[n.jsxs(Mt,{children:["Age ",(()=>{const te=C.find(Le=>Le.value===_.skillLevel);return te&&te.isOpen?"":"*"})()]}),n.jsxs(As,{value:(()=>{const te=C.find(Le=>Le.value===_.skillLevel);return te&&te.isOpen?"":_.ageCategory||""})(),onChange:te=>Qe(_.id,"ageCategory",te.target.value),disabled:(()=>{const te=C.find(ze=>ze.value===_.skillLevel);return te&&te.isOpen})(),required:(()=>{const te=C.find(ze=>ze.value===_.skillLevel);return!(te&&te.isOpen)})(),children:[n.jsx("option",{value:"",children:(()=>{const te=C.find(Le=>Le.value===_.skillLevel);return te&&te.isOpen?"N/A for Open categories":"Select age category"})()}),re.map(te=>n.jsx("option",{value:te,children:te},te))]},`age-${_.id}`)]}),n.jsxs(Lt,{children:[n.jsx(Mt,{children:"Participant Limit *"}),n.jsxs(As,{value:_.maxParticipants||"",onChange:te=>Qe(_.id,"maxParticipants",te.target.value),required:!0,children:[n.jsx("option",{value:"",children:"Select participant limit"}),n.jsx("option",{value:"16",children:"16 players"}),n.jsx("option",{value:"20",children:"20 players"}),n.jsx("option",{value:"24",children:"24 players"}),n.jsx("option",{value:"28",children:"28 players"}),n.jsx("option",{value:"32",children:"32 players"})]},`limit-${_.id}`)]}),n.jsxs(Lt,{children:[n.jsx(Mt,{children:"Prize Pool (Optional)"}),n.jsx(oi,{type:"number",value:_.prizePool||"",onChange:te=>Qe(_.id,"prizePool",te.target.value),placeholder:"Enter prize pool amount",min:"0",step:"100"},`prize-${_.id}`)]})]})]},_.id)),n.jsxs(kx,{onClick:qt,children:[n.jsx("span",{children:"➕"}),"Add More Categories"]}),c.tournamentCategories.length>0&&n.jsxs(Kj,{children:[n.jsx(ek,{children:"Tournament Categories Summary"}),n.jsx(tk,{children:c.tournamentCategories.map((_,de)=>n.jsxs(nk,{children:[n.jsxs("strong",{children:["Category ",de+1,":"]})," ",(()=>{const te=_.division||"Division not selected",ze=C.find(Rt=>Rt.value===_.skillLevel),Le=(ze==null?void 0:ze.label)||"Skill level not selected",xt=_.maxParticipants?`(${_.maxParticipants} players)`:"(Limit not set)",Dt=_.prizePool?` - Prize: ₱${parseInt(_.prizePool).toLocaleString()}`:"";if(ze&&ze.isOpen)return`${te} - ${Le} ${xt}${Dt}`;{const Rt=_.ageCategory||"Age not selected";return`${te} - ${Le} - ${Rt} ${xt}${Dt}`}})()]},_.id))})]})]})]}),n.jsxs(sa,{children:[n.jsx(da,{children:"Financial Information"}),n.jsx(hx,{children:n.jsxs(Lt,{children:[n.jsx(Mt,{children:"Entry Fee *"}),n.jsx(oi,{type:"number",name:"entryFee",value:c.entryFee,onChange:D,placeholder:"0.00",min:"0",step:"0.01",required:!0})]})})]}),n.jsxs(sa,{children:[n.jsx(da,{children:"Venue Location"}),k?n.jsxs(Lt,{children:[n.jsx(Mt,{children:"Selected Location"}),n.jsxs(Yj,{children:[n.jsx(Wj,{children:k.name}),n.jsx(Fj,{children:k.address}),n.jsxs(Vj,{children:[n.jsx(jx,{variant:"primary",onClick:it,children:"View in Google Maps"}),n.jsx(jx,{onClick:Ae,children:"Change Location"})]})]})]}):n.jsxs(Lt,{children:[n.jsx(Mt,{children:"Select Tournament Location *"}),n.jsx(Gj,{children:x?n.jsxs(bx,{children:[n.jsx(yx,{children:"🗺️"}),n.jsx(vx,{children:"Loading Google Maps..."}),n.jsx(wx,{children:"Please wait while we load the map for location selection"})]}):n.jsxs(bx,{onClick:nt,children:[n.jsx(yx,{children:"📍"}),n.jsx(vx,{children:"Pin Your Tournament Location"}),n.jsx(wx,{children:"Click here to open Google Maps and select your tournament venue location"})]})})]}),k&&n.jsxs(Lt,{children:[n.jsx(Mt,{children:"Venue Name (Edit if needed)"}),n.jsx(oi,{type:"text",name:"venueName",value:c.venueName,onChange:D,placeholder:"Enter venue name"})]})]}),n.jsxs(sa,{children:[n.jsx(da,{children:"Contact Information"}),n.jsxs(hx,{children:[n.jsxs(Lt,{children:[n.jsx(Mt,{children:"Contact Email *"}),n.jsx(oi,{type:"email",name:"contactEmail",value:c.contactEmail,onChange:D,placeholder:"tournament@example.com",required:!0})]}),n.jsxs(Lt,{children:[n.jsx(Mt,{children:"Contact Phone"}),n.jsx(oi,{type:"tel",name:"contactPhone",value:c.contactPhone,onChange:D,placeholder:"(555) 123-4567"})]})]})]}),n.jsxs(sa,{children:[n.jsx(da,{children:"Payment Details"}),n.jsx(Hj,{children:n.jsx(_j,{children:"Upload your bank account information or QR code so players can send their registration payments directly to you."})}),n.jsxs(ik,{children:[c.paymentMethods.map((_,de)=>n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px",marginTop:de>0?"32px":"0"},children:[n.jsxs("h4",{style:{color:"#234255",fontWeight:"600",margin:0},children:["Payment Method ",de+1]}),c.paymentMethods.length>1&&n.jsx("button",{type:"button",onClick:()=>fe(_.id),style:{background:"#ff4444",color:"white",border:"none",borderRadius:"4px",padding:"4px 8px",cursor:"pointer",fontSize:"12px"},children:"Remove"})]}),n.jsxs(ak,{children:[n.jsxs(rk,{children:[n.jsx(ok,{children:"Bank Transfer Details"}),n.jsxs(Lt,{children:[n.jsx(Mt,{children:"Bank Name"}),n.jsx(oi,{type:"text",value:_.bankName,onChange:te=>Ce(_.id,"bankName",te.target.value),placeholder:"Enter your bank name"})]}),n.jsxs(Lt,{children:[n.jsx(Mt,{children:"Account Name"}),n.jsx(oi,{type:"text",value:_.accountName,onChange:te=>Ce(_.id,"accountName",te.target.value),placeholder:"Enter account holder name"})]}),n.jsxs(Lt,{children:[n.jsx(Mt,{children:"Account Number"}),n.jsx(oi,{type:"text",value:_.accountNumber,onChange:te=>Ce(_.id,"accountNumber",te.target.value),placeholder:"Enter your account number"})]})]}),n.jsxs(lk,{children:[n.jsx(sk,{children:"Quick Payment"}),n.jsx(dk,{children:_.qrCodeImage?n.jsxs("div",{style:{position:"relative"},children:[n.jsx("img",{src:URL.createObjectURL(_.qrCodeImage),alt:"QR Code",style:{width:"100%",height:"200px",objectFit:"contain",borderRadius:"8px",border:"2px solid #e0e0e0"}}),n.jsx("button",{type:"button",onClick:()=>pe(_.id),style:{position:"absolute",top:"8px",right:"8px",background:"transparent",color:"white",border:"none",cursor:"pointer",fontSize:"20px",fontWeight:"bold",textShadow:"0 1px 3px rgba(0,0,0,0.8)",padding:"0",lineHeight:"1"},children:"×"})]}):n.jsxs(ck,{onClick:()=>document.getElementById(`qr-code-upload-${_.id}`).click(),children:[n.jsx(uk,{children:"📱"}),n.jsx(pk,{children:"Upload QR Code"}),n.jsx(fk,{children:"Click to upload your payment QR code screenshot"})]})}),n.jsx(mk,{children:"Upload a screenshot of your payment QR code so players can easily pay registration fees"}),n.jsx(gx,{id:`qr-code-upload-${_.id}`,type:"file",accept:"image/*",onChange:te=>ve(_.id,te)})]})]})]},_.id)),c.paymentMethods.length<3&&n.jsxs(kx,{onClick:I,style:{marginTop:"16px"},children:[n.jsx("span",{children:"➕"}),"Add Another Payment Method"]})]}),n.jsxs(sa,{children:[n.jsx(da,{children:"Tournament Guidelines"}),n.jsxs(Lt,{children:[n.jsx(Mt,{children:"Rules and Regulations"}),n.jsxs(zx,{children:[n.jsxs(Lx,{children:[n.jsx($r,{type:"button",onMouseDown:_=>{_.preventDefault(),mt("bold",A)},title:"Bold",children:n.jsx("strong",{children:"B"})}),n.jsx($r,{type:"button",onMouseDown:_=>{_.preventDefault(),mt("italic",A)},title:"Italic",children:n.jsx("em",{children:"I"})}),n.jsx($r,{type:"button",onMouseDown:_=>{_.preventDefault(),ht(A)},title:"Bullet List",children:"• List"})]}),n.jsx(Mx,{ref:A,contentEditable:!0,suppressContentEditableWarning:!0,"data-placeholder":"Specify any special rules or regulations for your tournament. Use the toolbar above to format your text.",onInput:()=>F("rules",A),onBlur:()=>Je("rules",A),onKeyDown:_=>J(_,"rules",A)})]})]})]}),n.jsxs(sa,{children:[n.jsx(da,{children:"Tournament Events"}),n.jsxs(Lt,{children:[n.jsx(Mt,{children:"Event Schedule and Activities"}),n.jsxs(zx,{children:[n.jsxs(Lx,{children:[n.jsx($r,{type:"button",onMouseDown:_=>{_.preventDefault(),mt("bold",B)},title:"Bold",children:n.jsx("strong",{children:"B"})}),n.jsx($r,{type:"button",onMouseDown:_=>{_.preventDefault(),mt("italic",B)},title:"Italic",children:n.jsx("em",{children:"I"})}),n.jsx($r,{type:"button",onMouseDown:_=>{_.preventDefault(),ht(B)},title:"Bullet List",children:"• List"})]}),n.jsx(Mx,{ref:B,contentEditable:!0,suppressContentEditableWarning:!0,"data-placeholder":"Describe the tournament events, schedule, and activities that will take place. Use the toolbar above to format your text.",onInput:()=>F("events",B),onBlur:()=>Je("events",B),onKeyDown:_=>J(_,"events",B)})]})]})]})]}),n.jsxs(Uj,{children:[n.jsx(Gu,{type:"button",onClick:qn,children:"Cancel"}),n.jsx(Gu,{type:"submit",variant:"primary",disabled:h,children:h?"Submitting...":"Submit Tournament"})]})]})]}):n.jsx(mx,{children:n.jsxs("div",{style:{textAlign:"center",padding:"60px 20px"},children:[n.jsx("h2",{style:{color:"#234255",marginBottom:"16px"},children:"Sign in required"}),n.jsx("p",{style:{color:"#6b7280",marginBottom:"20px"},children:"You need to be logged in to host a tournament."}),n.jsx(Gu,{variant:"primary",onClick:()=>u("/signin"),children:"Sign In"})]})})},Sg="/assets/ppl-logo-P6U_k7ZW.svg",Mk=s.div`
  * {
    &:focus {
      outline: none;
    }
  }
`,Tk=s.nav`
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

  ${r=>r.$hidden&&`
    transform: translateY(-100%);
  `}

  @media (max-width: 768px) {
    height: 64px;
  }
`,Rk=s.div`
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
`,Ak=s.div`
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
`,Pk=s.div`
  display: flex;
  gap: 40px;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`,Dk=s.div`
  display: flex;
  gap: 40px;
  align-items: center;
  margin-right: 12px;

  @media (max-width: 1024px) {
    gap: 24px;
  }
`,Ps=s.button`
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

  ${r=>r.$active&&`
    color: #234255;
    &:after {
      transform: scaleX(1);
    }
  `}
`,Cg=s.div`
  display: flex;
  gap: 12px;
`,ep=s.button`
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
  
  ${r=>r.$primary?`
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
`,Ek=s.button`
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
    ${r=>r.$show&&`
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
`,$k=s.button`
  display: none;
  position: relative;
  background: none;
  border: none;
  padding: 6px;
  color: #475569;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 8px;
  -webkit-tap-highlight-color: transparent;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    color: #29ba9b;
    background: #f8fafc;
  }

  &:focus-visible {
    outline: 2px solid #29ba9b;
    outline-offset: 2px;
  }

  svg {
    width: 24px;
    height: 24px;
    stroke: currentColor;
    stroke-width: 2;
  }
`,Bk=s.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`,Nk=s(ep)`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    padding: 8px 16px;
    font-size: 14px;
  }
`,Ok=s.div`
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
`,Qo=s.button`
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

  ${r=>r.$active&&`
    color: #29ba9b;
  `}

  &:hover {
    color: #29ba9b;
  }
`,qk=s.div`
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
    ${r=>r.$isOpen&&`
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    `}
  }
`,Io=s.button`
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
`;s.div`
  display: none;
`;s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;s.button`
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

  ${r=>r.$active&&`
    color: #29ba9b;
    background: #f0fdf4;
  `}
`;s(Cg)`
  flex-direction: column;
  gap: 8px;
  padding-top: 16px;
  border-top: 1px solid #e2e8f0;
`;const Uk=s.button`
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
`,Hk=s.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`,_k=s.span`
  font-size: 15px;
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 1024px) {
    display: none;
  }
`,Gk=s.div`
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

  ${r=>r.$isOpen&&`
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  `}
`,Jo=s.button`
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
`,Yk=s.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
`,Wk=s.button`
  position: relative;
  background: none;
  border: none;
  padding: 8px;
  color: #475569;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 8px;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }

  &:hover {
    color: #29ba9b;
    background: #f8fafc;
  }

  &:focus-visible {
    outline: 2px solid #29ba9b;
    outline-offset: 2px;
  }

  svg {
    width: 24px;
    height: 24px;
    stroke: currentColor;
    stroke-width: 2;
  }
`,Tx=s.div`
  position: absolute;
  top: 4px;
  right: 4px;
  background: #ef4444;
  color: white;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  font-size: 10px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 16px;
  border: 2px solid white;

  ${r=>r.$count>0&&`
    width: 16px;
    height: 16px;
    font-size: 10px;
  `}

  ${r=>r.$count>99&&`
    width: 20px;
    font-size: 9px;
  `}
`,Fk=s.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  min-width: 320px;
  max-width: 380px;
  max-height: 400px;
  overflow: hidden;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    right: -60px;
    min-width: 280px;
    max-width: 320px;
  }

  ${r=>r.$isOpen&&`
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  `}
`,Vk=s.div`
  padding: 16px 20px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f8fafc;

  h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: #1e293b;
  }

  button {
    background: none;
    border: none;
    color: #64748b;
    font-size: 12px;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 4px;
    transition: all 0.2s ease;

    &:hover {
      color: #29ba9b;
      background: rgba(41, 186, 155, 0.1);
    }
  }
`,Qk=s.div`
  max-height: 320px;
  overflow-y: auto;
  
  /* Prevent scrolling the main page when scrolling notifications */
  overscroll-behavior: contain;
  
  /* Custom scrollbar styling - clean and minimal */
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  
  /* Hide scrollbar by default, show on hover */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 3px;
    transition: background 0.2s ease;
  }
  
  /* Remove arrow buttons */
  &::-webkit-scrollbar-button {
    display: none;
  }
  
  /* Show scrollbar on hover */
  &:hover {
    scrollbar-color: #cbd5e1 #f1f5f9;
    
    &::-webkit-scrollbar-track {
      background: #f1f5f9;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      
      &:hover {
        background: #94a3b8;
      }
    }
  }
`,Ik=s.div`
  padding: 12px 20px;
  border-bottom: 1px solid #f1f5f9;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  gap: 12px;
  align-items: flex-start;
  position: relative;

  &:hover {
    background: #f8fafc;
  }

  &:last-child {
    border-bottom: none;
  }

  ${r=>r.$unread&&`
    background: #f0f9ff;
    border-left: 3px solid #29ba9b;

    &:hover {
      background: #e0f2fe;
    }
  `}
`,Jk=s.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;

  ${r=>{switch(r.$type){case"like":return"background: #fef2f2; color: #ef4444;";case"comment":case"reply":return"background: #f0f9ff; color: #3b82f6;";case"club_request":case"club_accepted":return"background: #f0fdf4; color: #22c55e;";case"tournament":return"background: #fefce8; color: #eab308;";default:return"background: #f1f5f9; color: #64748b;"}}}

  svg {
    width: 16px;
    height: 16px;
    stroke: currentColor;
    stroke-width: 2;
  }
`,Zk=s.div`
  flex: 1;
  min-width: 0;

  .notification-text {
    font-size: 14px;
    color: #1e293b;
    line-height: 1.4;
    margin: 0 0 4px 0;

    .highlight {
      font-weight: 600;
      color: #29ba9b;
    }
  }

  .notification-time {
    font-size: 12px;
    color: #64748b;
  }
`,Xk=s.div`
  padding: 40px 20px;
  text-align: center;
  color: #64748b;

  svg {
    width: 48px;
    height: 48px;
    margin-bottom: 12px;
    opacity: 0.5;
  }

  h4 {
    margin: 0 0 8px 0;
    font-size: 16px;
    color: #475569;
  }

  p {
    margin: 0;
    font-size: 14px;
    line-height: 1.4;
  }
`,Kk=s.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  z-index: 1100;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;s.div`
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
    ${r=>r.$isOpen&&`
      opacity: 1;
      visibility: visible;
    `}
  }
`;function Yu(){return n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0",strokeLinecap:"round",strokeLinejoin:"round"})]})}function e9(){return n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",strokeLinecap:"round",strokeLinejoin:"round"})})}function t9(){return n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",strokeLinecap:"round",strokeLinejoin:"round"})})}function n9(){return n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M3 10h10a8 8 0 0 1 8 8v2M3 10l6 6m-6-6l6-6",strokeLinecap:"round",strokeLinejoin:"round"})})}function i9(){return n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("circle",{cx:"9",cy:"7",r:"4",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M19 8v6m3-3h-6",strokeLinecap:"round",strokeLinejoin:"round"})]})}function a9(){return n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("circle",{cx:"9",cy:"7",r:"4",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M19 8l2 2 4-4",strokeLinecap:"round",strokeLinejoin:"round"})]})}function r9(){return n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M4 22h16",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M10 14.66V17c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.34",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M18 9H6V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3Z",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Rx(){return n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M18.63 13A17.89 17.89 0 0 1 18 8",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M18 8a6 6 0 0 0-9.33-5",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M1 1l22 22",strokeLinecap:"round",strokeLinejoin:"round"})]})}function o9(){const[r,d]=y.useState(!1),[u,c]=y.useState(0),[f,h]=y.useState(!1),[w,k]=y.useState(!1),v=Jn(),x=ua(),{user:M,logout:O,isAuthenticated:E}=pi(),[W,$]=y.useState([{id:"1",type:"like",user:"Sarah Chen",message:"liked your post about the pickleball tournament",time:"5m ago",unread:!0,postId:"post123"},{id:"2",type:"comment",user:"Mike Johnson",message:`commented on your post: "Great shots! Can't wait for the next match"`,time:"15m ago",unread:!0,postId:"post123"},{id:"3",type:"reply",user:"Anna Rodriguez",message:"replied to your comment on Mike's post",time:"1h ago",unread:!1,postId:"post456"},{id:"4",type:"club_accepted",user:"Phoenix Pickleball Club",message:"accepted your request to join the club",time:"2h ago",unread:!0,clubId:"club789"},{id:"5",type:"club_request",user:"David Kim",message:'wants to join your club "Metro Pickleball"',time:"3h ago",unread:!0,clubId:"club123"},{id:"6",type:"tournament",user:"Maria Santos",message:'joined your tournament "Summer Smash 2024"',time:"4h ago",unread:!1,tournamentId:"tournament456"}]),Q=W.filter(D=>D.unread).length;y.useEffect(()=>{const D=()=>{const K=window.scrollY;d(K>72&&K>u),c(K)};return window.addEventListener("scroll",D,{passive:!0}),()=>window.removeEventListener("scroll",D)},[u]),y.useEffect(()=>{h(!1),k(!1)},[v]),y.useEffect(()=>{const D=window.innerWidth<=768;if(w&&D){const K=window.scrollY;document.body.style.position="fixed",document.body.style.top=`-${K}px`,document.body.style.left="0",document.body.style.right="0",document.body.style.width="100%",document.body.setAttribute("data-scroll-y",K.toString())}else if(D){const K=document.body.getAttribute("data-scroll-y");document.body.style.position="",document.body.style.top="",document.body.style.left="",document.body.style.right="",document.body.style.width="",document.body.removeAttribute("data-scroll-y"),K&&window.scrollTo(0,parseInt(K))}return()=>{document.body.style.position="",document.body.style.top="",document.body.style.left="",document.body.style.right="",document.body.style.width="",document.body.removeAttribute("data-scroll-y")}},[w]),y.useEffect(()=>{const D=K=>{f&&!K.target.closest("[data-profile-container]")&&h(!1),w&&!K.target.closest("[data-notification-container]")&&k(!1)};return document.addEventListener("mousedown",D),()=>document.removeEventListener("mousedown",D)},[f,w]);const V=D=>{x(D),h(!1),k(!1),window.scrollTo(0,0)},A=()=>{O(),h(!1),k(!1),x("/")},B=D=>{$(K=>K.map(ke=>ke.id===D?{...ke,unread:!1}:ke))},z=()=>{$(D=>D.map(K=>({...K,unread:!1})))},re=D=>{switch(D.unread&&B(D.id),D.type){case"like":case"comment":case"reply":V(`/forum?post=${D.postId}`);break;case"club_request":case"club_accepted":V(`/clubs-courts?club=${D.clubId}`);break;case"tournament":V(`/tournament?id=${D.tournamentId}`);break}},C=D=>{switch(D){case"like":return n.jsx(e9,{});case"comment":return n.jsx(t9,{});case"reply":return n.jsx(n9,{});case"club_request":return n.jsx(i9,{});case"club_accepted":return n.jsx(a9,{});case"tournament":return n.jsx(r9,{});default:return n.jsx(Yu,{})}};return n.jsxs(Mk,{children:[n.jsxs(Tk,{$hidden:r,children:[n.jsxs(Rk,{children:[n.jsx(Ak,{onClick:()=>V("/"),children:n.jsx("img",{src:Sg,alt:"Philippine Pickleball League"})}),n.jsxs(Pk,{children:[n.jsxs(Dk,{children:[n.jsx(Ps,{onClick:()=>V("/forum"),$active:v.pathname==="/forum",children:"Forum"}),n.jsx(Ps,{onClick:()=>V("/tournament"),$active:v.pathname==="/tournament",children:"Tournaments"}),n.jsx(Ps,{onClick:()=>V("/ranks"),$active:v.pathname==="/ranks",children:"Ranks"}),n.jsx(Ps,{onClick:()=>V("/clubs-courts"),$active:v.pathname==="/clubs-courts",children:"Clubs & Courts"})]}),E?n.jsxs(Yk,{"data-profile-container":!0,children:[n.jsxs(Uk,{onClick:()=>h(!f),children:[n.jsx(Hk,{src:M==null?void 0:M.avatar,alt:M==null?void 0:M.name}),n.jsx(_k,{children:M==null?void 0:M.name}),n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M6 9l6 6 6-6",strokeLinecap:"round",strokeLinejoin:"round"})})]}),n.jsxs(Gk,{$isOpen:f,children:[n.jsxs(Jo,{onClick:()=>V("/profile"),children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("circle",{cx:"12",cy:"7",r:"4",strokeLinecap:"round",strokeLinejoin:"round"})]}),"My Profile"]}),n.jsxs(Jo,{onClick:()=>V("/coaches"),children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("circle",{cx:"9",cy:"7",r:"4",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Coaches"]}),n.jsxs(Jo,{onClick:()=>V("/settings"),children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"12",cy:"12",r:"3",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Settings"]}),n.jsxs(Jo,{onClick:()=>V("/feedback"),children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12 8v4",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12 16h.01",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Feedback"]}),n.jsxs(Jo,{className:"logout",onClick:A,children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14l5-5-5-5m5 5H9",strokeLinecap:"round",strokeLinejoin:"round"})}),"Log Out"]})]}),n.jsxs("div",{style:{position:"relative"},"data-notification-container":!0,children:[n.jsxs(Wk,{onClick:()=>k(!w),children:[n.jsx(Yu,{}),Q>0&&n.jsx(Tx,{$count:Q,children:Q>99?"99+":Q>0?Q:""})]}),n.jsxs(Fk,{$isOpen:w,children:[n.jsxs(Vk,{children:[n.jsx("h3",{children:"Notifications"}),Q>0&&n.jsx("button",{onClick:z,children:"Mark all as read"})]}),n.jsx(Qk,{onWheel:D=>{D.stopPropagation();const{scrollTop:K,scrollHeight:ke,clientHeight:we}=D.currentTarget,ce=K===0,le=K+we>=ke;(ce&&D.deltaY<0||le&&D.deltaY>0)&&D.preventDefault()},children:W.length>0?W.map(D=>n.jsxs(Ik,{$unread:D.unread,onClick:()=>re(D),children:[n.jsx(Jk,{$type:D.type,children:C(D.type)}),n.jsxs(Zk,{children:[n.jsxs("p",{className:"notification-text",children:[n.jsx("span",{className:"highlight",children:D.user})," ",D.message]}),n.jsx("span",{className:"notification-time",children:D.time})]})]},D.id)):n.jsxs(Xk,{children:[n.jsx(Rx,{}),n.jsx("h4",{children:"No notifications"}),n.jsx("p",{children:"You're all caught up! We'll notify you when something new happens."})]})})]})]})]}):n.jsxs(Cg,{children:[n.jsx(ep,{onClick:()=>V("/signin"),children:"Sign In"}),n.jsx(ep,{onClick:()=>V("/register"),$primary:!0,children:"Register"})]})]}),E?n.jsxs(Bk,{children:[n.jsxs(Ek,{$show:!0,onClick:()=>h(!f),"data-profile-container":!0,children:[n.jsx("img",{src:M==null?void 0:M.avatar,alt:M==null?void 0:M.name}),n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:n.jsx("path",{d:"M6 9l6 6 6-6",strokeLinecap:"round",strokeLinejoin:"round"})})]}),n.jsxs($k,{onClick:()=>k(!w),"data-notification-container":!0,children:[n.jsx(Yu,{}),Q>0&&n.jsx(Tx,{$count:Q,children:Q>99?"99+":Q>0?Q:""})]})]}):n.jsx(Nk,{onClick:()=>V("/signin"),children:"Sign In"})]}),n.jsxs(qk,{$isOpen:f,children:[n.jsxs(Io,{onClick:()=>V("/profile"),children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("circle",{cx:"12",cy:"7",r:"4",strokeLinecap:"round",strokeLinejoin:"round"})]}),"My Profile"]}),n.jsxs(Io,{onClick:()=>V("/coaches"),children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("circle",{cx:"9",cy:"7",r:"4",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Coaches"]}),n.jsxs(Io,{onClick:()=>V("/settings"),children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"12",cy:"12",r:"3",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Settings"]}),n.jsxs(Io,{onClick:()=>V("/feedback"),children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12 8v4",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12 16h.01",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Feedback"]}),n.jsxs(Io,{className:"logout",onClick:A,children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14l5-5-5-5m5 5H9",strokeLinecap:"round",strokeLinejoin:"round"})}),"Log Out"]})]}),w&&n.jsxs(Kk,{children:[n.jsxs("div",{style:{padding:"16px 20px",borderBottom:"1px solid #e2e8f0",display:"flex",alignItems:"center",justifyContent:"space-between",background:"#f8fafc",minHeight:"64px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[n.jsx("button",{onClick:()=>k(!1),style:{background:"none",border:"none",padding:"8px",color:"#475569",cursor:"pointer",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M19 12H5m7-7l-7 7 7 7",strokeLinecap:"round",strokeLinejoin:"round"})})}),n.jsx("h3",{style:{margin:"0",fontSize:"18px",fontWeight:"600",color:"#1e293b"},children:"Notifications"})]}),Q>0&&n.jsx("button",{onClick:z,style:{background:"none",border:"none",color:"#29ba9b",fontSize:"14px",cursor:"pointer",padding:"4px 8px",borderRadius:"4px",fontWeight:"500"},children:"Mark all read"})]}),n.jsx("div",{style:{height:"calc(100vh - 64px)",overflowY:"auto",padding:"0"},children:W.length>0?W.map(D=>n.jsxs("div",{onClick:()=>re(D),style:{padding:"16px 20px",borderBottom:"1px solid #f1f5f9",cursor:"pointer",display:"flex",gap:"12px",alignItems:"flex-start",backgroundColor:D.unread?"#f0f9ff":"white",borderLeft:D.unread?"3px solid #29ba9b":"3px solid transparent"},children:[n.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:"0",marginTop:"2px",...D.type==="like"&&{background:"#fef2f2",color:"#ef4444"},...D.type==="comment"&&{background:"#f0f9ff",color:"#3b82f6"},...D.type==="reply"&&{background:"#f0f9ff",color:"#3b82f6"},...D.type==="club_request"&&{background:"#f0fdf4",color:"#22c55e"},...D.type==="club_accepted"&&{background:"#f0fdf4",color:"#22c55e"},...D.type==="tournament"&&{background:"#fefce8",color:"#eab308"}},children:n.jsx("div",{style:{width:"18px",height:"18px"},children:C(D.type)})}),n.jsxs("div",{style:{flex:"1",minWidth:"0"},children:[n.jsxs("p",{style:{fontSize:"15px",color:"#1e293b",lineHeight:"1.4",margin:"0 0 4px 0"},children:[n.jsx("span",{style:{fontWeight:"600",color:"#29ba9b"},children:D.user})," ",D.message]}),n.jsx("span",{style:{fontSize:"13px",color:"#64748b"},children:D.time})]})]},D.id)):n.jsxs("div",{style:{padding:"60px 20px",textAlign:"center",color:"#64748b"},children:[n.jsx("div",{style:{marginBottom:"16px",opacity:"0.5"},children:n.jsx(Rx,{})}),n.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"18px",color:"#475569"},children:"No notifications"}),n.jsx("p",{style:{margin:"0",fontSize:"15px",lineHeight:"1.4"},children:"You're all caught up! We'll notify you when something new happens."})]})})]})]}),n.jsxs(Ok,{children:[n.jsxs(Qo,{onClick:()=>V("/"),$active:v.pathname==="/",children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[n.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("polyline",{points:"9,22 9,12 15,12 15,22",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Home"]}),n.jsxs(Qo,{onClick:()=>V("/forum"),$active:v.pathname==="/forum",children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:n.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",strokeLinecap:"round",strokeLinejoin:"round"})}),"Forum"]}),n.jsxs(Qo,{onClick:()=>V("/tournament"),$active:v.pathname==="/tournament",children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[n.jsx("path",{d:"M6 4v6a6 6 0 0 0 12 0V4",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M6 4h12",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M4 6a2 2 0 0 0 2 2",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M20 6a2 2 0 0 1-2 2",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M10 16v2",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M14 16v2",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M8 20h8",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Tournament"]}),n.jsxs(Qo,{onClick:()=>V("/ranks"),$active:v.pathname==="/ranks",children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:n.jsx("polygon",{points:"12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26",strokeLinecap:"round",strokeLinejoin:"round"})}),"Ranks"]}),n.jsxs(Qo,{onClick:()=>V("/clubs-courts"),$active:v.pathname==="/clubs-courts",children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[n.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("circle",{cx:"12",cy:"10",r:"3",strokeLinecap:"round",strokeLinejoin:"round"})]}),"C&C"]})]})]})}const l9=s.footer`
  background: white;
  padding: 40px 24px 20px;
  color: #333;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`,s9=s.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`,d9=s.div`
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
`,c9=s.div`
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
`,u9=s.div`
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
`,p9=s.div`
  font-size: 0.8rem;
  color: #666;
  text-align: center;
  margin-top: 12px;
`;function f9(){return n.jsx(l9,{children:n.jsxs(s9,{children:[n.jsx(d9,{children:n.jsx("img",{src:Sg,alt:"Philippine Pickleball League"})}),n.jsxs(c9,{children:[n.jsx("a",{href:"https://www.facebook.com/PHpickleballleagaue",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",children:n.jsx("svg",{viewBox:"0 0 320 512",fill:"currentColor",children:n.jsx("path",{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"})})}),n.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:n.jsx("svg",{viewBox:"0 0 448 512",fill:"currentColor",children:n.jsx("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})})}),n.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:n.jsx("svg",{viewBox:"0 0 448 512",fill:"currentColor",children:n.jsx("path",{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"})})}),n.jsx("a",{href:"https://youtube.com",target:"_blank",rel:"noopener noreferrer","aria-label":"YouTube",children:n.jsx("svg",{viewBox:"0 0 576 512",fill:"currentColor",children:n.jsx("path",{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"})})})]}),n.jsxs(u9,{children:[n.jsx(si,{to:"/terms",children:"Terms & Conditions"}),n.jsx(si,{to:"/privacy",children:"Privacy Policy"}),n.jsx(si,{to:"/about",children:"About us"}),n.jsx(si,{to:"/contact",children:"Contact"}),n.jsx(si,{to:"/sponsors",children:"Sponsors"}),n.jsx(si,{to:"/news",children:"News"})]}),n.jsxs(p9,{children:["© ",new Date().getFullYear()," Philippine Pickleball League"]})]})})}const m9=s.div`
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
  transform: translateX(${r=>r.$isVisible?"0":"400px"});
  transition: transform 0.3s ease;
  
  @media (max-width: 768px) {
    right: 10px;
    bottom: 10px;
    min-width: 280px;
    max-width: calc(100vw - 20px);
  }
`,h9=s.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,x9=s.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: ${r=>r.$type==="success"?"#dcfce7":"#fef2f2"};
  
  svg {
    width: 20px;
    height: 20px;
    color: ${r=>r.$type==="success"?"#16a34a":"#dc2626"};
  }
`,g9=s.div`
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
`,b9=s.button`
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
`,y9=()=>n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M20 6L9 17l-5-5"})}),v9=()=>n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14l5-5-5-5m5 5H9"})}),w9=()=>n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M18 6L6 18M6 6l12 12"})}),j9=({message:r,type:d="success",isVisible:u,onClose:c})=>{y.useEffect(()=>{if(u){const w=setTimeout(()=>{c()},3e3);return()=>clearTimeout(w)}},[u,c]);const f=()=>d==="success"||r.includes("Welcome back")?n.jsx(y9,{}):n.jsx(v9,{}),h=r.includes("logged out")||d==="info";return n.jsx(m9,{$isVisible:u,children:n.jsxs(h9,{children:[n.jsx(x9,{$type:d,children:f()}),n.jsx(g9,{children:h?n.jsx("h4",{children:r}):n.jsxs(n.Fragment,{children:[n.jsx("h4",{children:"Successfully Logged In"}),n.jsx("p",{children:r})]})}),n.jsx(b9,{onClick:c,children:n.jsx(w9,{})})]})})};function k9(){const{notification:r,hideNotification:d}=pi(),u=Jn();return y.useEffect(()=>{window.scrollTo(0,0)},[u.pathname]),n.jsxs("div",{className:"App",children:[n.jsx(o9,{}),n.jsx("main",{className:"main-content",children:n.jsxs(Rb,{children:[n.jsx(li,{path:"/",element:n.jsx(Aj,{})}),n.jsx(li,{path:"/forum",element:n.jsx(L4,{})}),n.jsx(li,{path:"/tournament",element:n.jsx(sw,{})}),n.jsx(li,{path:"/ranks",element:n.jsx(A3,{})}),n.jsx(li,{path:"/clubs-courts",element:n.jsx(K6,{})}),n.jsx(li,{path:"/profile",element:n.jsx(o6,{})}),n.jsx(li,{path:"/signin",element:n.jsx(K3,{})}),n.jsx(li,{path:"/register",element:n.jsx(hj,{})}),n.jsx(li,{path:"/host-tournament",element:n.jsx(Lk,{})})]})}),n.jsx(f9,{}),n.jsx(j9,{message:r.message,type:r.type,isVisible:r.isVisible,onClose:d})]})}function S9(){return n.jsx(mv,{children:n.jsx(k9,{})})}q2.createRoot(document.getElementById("root")).render(n.jsx(Nr.StrictMode,{children:n.jsx(ey,{children:n.jsx(S9,{})})}));
