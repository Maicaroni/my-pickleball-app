(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))d(f);new MutationObserver(f=>{for(const m of f)if(m.type==="childList")for(const b of m.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&d(b)}).observe(document,{childList:!0,subtree:!0});function u(f){const m={};return f.integrity&&(m.integrity=f.integrity),f.referrerPolicy&&(m.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?m.credentials="include":f.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function d(f){if(f.ep)return;f.ep=!0;const m=u(f);fetch(f.href,m)}})();function Y0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Pd={exports:{}},Fr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function Qg(){if(vm)return Fr;vm=1;var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function u(d,f,m){var b=null;if(m!==void 0&&(b=""+m),f.key!==void 0&&(b=""+f.key),"key"in f){m={};for(var w in f)w!=="key"&&(m[w]=f[w])}else m=f;return f=m.ref,{$$typeof:r,type:d,key:b,ref:f!==void 0?f:null,props:m}}return Fr.Fragment=s,Fr.jsx=u,Fr.jsxs=u,Fr}var wm;function Wg(){return wm||(wm=1,Pd.exports=Qg()),Pd.exports}var a=Wg(),_d={exports:{}},je={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function Zg(){if(jm)return je;jm=1;var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),b=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),D=Symbol.iterator;function A(j){return j===null||typeof j!="object"?null:(j=D&&j[D]||j["@@iterator"],typeof j=="function"?j:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,U={};function P(j,Q,ee){this.props=j,this.context=Q,this.refs=U,this.updater=ee||H}P.prototype.isReactComponent={},P.prototype.setState=function(j,Q){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,Q,"setState")},P.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function k(){}k.prototype=P.prototype;function B(j,Q,ee){this.props=j,this.context=Q,this.refs=U,this.updater=ee||H}var Y=B.prototype=new k;Y.constructor=B,T(Y,P.prototype),Y.isPureReactComponent=!0;var F=Array.isArray,J={H:null,A:null,T:null,S:null,V:null},R=Object.prototype.hasOwnProperty;function Z(j,Q,ee,te,ce,z){return ee=z.ref,{$$typeof:r,type:j,key:Q,ref:ee!==void 0?ee:null,props:z}}function ue(j,Q){return Z(j.type,Q,void 0,void 0,void 0,j.props)}function le(j){return typeof j=="object"&&j!==null&&j.$$typeof===r}function K(j){var Q={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(ee){return Q[ee]})}var X=/\/+/g;function se(j,Q){return typeof j=="object"&&j!==null&&j.key!=null?K(""+j.key):Q.toString(36)}function me(){}function Be(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(me,me):(j.status="pending",j.then(function(Q){j.status==="pending"&&(j.status="fulfilled",j.value=Q)},function(Q){j.status==="pending"&&(j.status="rejected",j.reason=Q)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function Ae(j,Q,ee,te,ce){var z=typeof j;(z==="undefined"||z==="boolean")&&(j=null);var q=!1;if(j===null)q=!0;else switch(z){case"bigint":case"string":case"number":q=!0;break;case"object":switch(j.$$typeof){case r:case s:q=!0;break;case C:return q=j._init,Ae(q(j._payload),Q,ee,te,ce)}}if(q)return ce=ce(j),q=te===""?"."+se(j,0):te,F(ce)?(ee="",q!=null&&(ee=q.replace(X,"$&/")+"/"),Ae(ce,Q,ee,"",function(De){return De})):ce!=null&&(le(ce)&&(ce=ue(ce,ee+(ce.key==null||j&&j.key===ce.key?"":(""+ce.key).replace(X,"$&/")+"/")+q)),Q.push(ce)),1;q=0;var oe=te===""?".":te+":";if(F(j))for(var ne=0;ne<j.length;ne++)te=j[ne],z=oe+se(te,ne),q+=Ae(te,Q,ee,z,ce);else if(ne=A(j),typeof ne=="function")for(j=ne.call(j),ne=0;!(te=j.next()).done;)te=te.value,z=oe+se(te,ne++),q+=Ae(te,Q,ee,z,ce);else if(z==="object"){if(typeof j.then=="function")return Ae(Be(j),Q,ee,te,ce);throw Q=String(j),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return q}function $(j,Q,ee){if(j==null)return j;var te=[],ce=0;return Ae(j,te,"","",function(z){return Q.call(ee,z,ce++)}),te}function I(j){if(j._status===-1){var Q=j._result;Q=Q(),Q.then(function(ee){(j._status===0||j._status===-1)&&(j._status=1,j._result=ee)},function(ee){(j._status===0||j._status===-1)&&(j._status=2,j._result=ee)}),j._status===-1&&(j._status=0,j._result=Q)}if(j._status===1)return j._result.default;throw j._result}var de=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)};function be(){}return je.Children={map:$,forEach:function(j,Q,ee){$(j,function(){Q.apply(this,arguments)},ee)},count:function(j){var Q=0;return $(j,function(){Q++}),Q},toArray:function(j){return $(j,function(Q){return Q})||[]},only:function(j){if(!le(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},je.Component=P,je.Fragment=u,je.Profiler=f,je.PureComponent=B,je.StrictMode=d,je.Suspense=g,je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,je.__COMPILER_RUNTIME={__proto__:null,c:function(j){return J.H.useMemoCache(j)}},je.cache=function(j){return function(){return j.apply(null,arguments)}},je.cloneElement=function(j,Q,ee){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var te=T({},j.props),ce=j.key,z=void 0;if(Q!=null)for(q in Q.ref!==void 0&&(z=void 0),Q.key!==void 0&&(ce=""+Q.key),Q)!R.call(Q,q)||q==="key"||q==="__self"||q==="__source"||q==="ref"&&Q.ref===void 0||(te[q]=Q[q]);var q=arguments.length-2;if(q===1)te.children=ee;else if(1<q){for(var oe=Array(q),ne=0;ne<q;ne++)oe[ne]=arguments[ne+2];te.children=oe}return Z(j.type,ce,void 0,void 0,z,te)},je.createContext=function(j){return j={$$typeof:b,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:m,_context:j},j},je.createElement=function(j,Q,ee){var te,ce={},z=null;if(Q!=null)for(te in Q.key!==void 0&&(z=""+Q.key),Q)R.call(Q,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(ce[te]=Q[te]);var q=arguments.length-2;if(q===1)ce.children=ee;else if(1<q){for(var oe=Array(q),ne=0;ne<q;ne++)oe[ne]=arguments[ne+2];ce.children=oe}if(j&&j.defaultProps)for(te in q=j.defaultProps,q)ce[te]===void 0&&(ce[te]=q[te]);return Z(j,z,void 0,void 0,null,ce)},je.createRef=function(){return{current:null}},je.forwardRef=function(j){return{$$typeof:w,render:j}},je.isValidElement=le,je.lazy=function(j){return{$$typeof:C,_payload:{_status:-1,_result:j},_init:I}},je.memo=function(j,Q){return{$$typeof:x,type:j,compare:Q===void 0?null:Q}},je.startTransition=function(j){var Q=J.T,ee={};J.T=ee;try{var te=j(),ce=J.S;ce!==null&&ce(ee,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(be,de)}catch(z){de(z)}finally{J.T=Q}},je.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},je.use=function(j){return J.H.use(j)},je.useActionState=function(j,Q,ee){return J.H.useActionState(j,Q,ee)},je.useCallback=function(j,Q){return J.H.useCallback(j,Q)},je.useContext=function(j){return J.H.useContext(j)},je.useDebugValue=function(){},je.useDeferredValue=function(j,Q){return J.H.useDeferredValue(j,Q)},je.useEffect=function(j,Q,ee){var te=J.H;if(typeof ee=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return te.useEffect(j,Q)},je.useId=function(){return J.H.useId()},je.useImperativeHandle=function(j,Q,ee){return J.H.useImperativeHandle(j,Q,ee)},je.useInsertionEffect=function(j,Q){return J.H.useInsertionEffect(j,Q)},je.useLayoutEffect=function(j,Q){return J.H.useLayoutEffect(j,Q)},je.useMemo=function(j,Q){return J.H.useMemo(j,Q)},je.useOptimistic=function(j,Q){return J.H.useOptimistic(j,Q)},je.useReducer=function(j,Q,ee){return J.H.useReducer(j,Q,ee)},je.useRef=function(j){return J.H.useRef(j)},je.useState=function(j){return J.H.useState(j)},je.useSyncExternalStore=function(j,Q,ee){return J.H.useSyncExternalStore(j,Q,ee)},je.useTransition=function(){return J.H.useTransition()},je.version="19.1.0",je}var km;function Cu(){return km||(km=1,_d.exports=Zg()),_d.exports}var v=Cu();const Gi=Y0(v);var $d={exports:{}},Kr={},Hd={exports:{}},Ud={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm;function Jg(){return Sm||(Sm=1,function(r){function s($,I){var de=$.length;$.push(I);e:for(;0<de;){var be=de-1>>>1,j=$[be];if(0<f(j,I))$[be]=I,$[de]=j,de=be;else break e}}function u($){return $.length===0?null:$[0]}function d($){if($.length===0)return null;var I=$[0],de=$.pop();if(de!==I){$[0]=de;e:for(var be=0,j=$.length,Q=j>>>1;be<Q;){var ee=2*(be+1)-1,te=$[ee],ce=ee+1,z=$[ce];if(0>f(te,de))ce<j&&0>f(z,te)?($[be]=z,$[ce]=de,be=ce):($[be]=te,$[ee]=de,be=ee);else if(ce<j&&0>f(z,de))$[be]=z,$[ce]=de,be=ce;else break e}}return I}function f($,I){var de=$.sortIndex-I.sortIndex;return de!==0?de:$.id-I.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;r.unstable_now=function(){return m.now()}}else{var b=Date,w=b.now();r.unstable_now=function(){return b.now()-w}}var g=[],x=[],C=1,D=null,A=3,H=!1,T=!1,U=!1,P=!1,k=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function F($){for(var I=u(x);I!==null;){if(I.callback===null)d(x);else if(I.startTime<=$)d(x),I.sortIndex=I.expirationTime,s(g,I);else break;I=u(x)}}function J($){if(U=!1,F($),!T)if(u(g)!==null)T=!0,R||(R=!0,se());else{var I=u(x);I!==null&&Ae(J,I.startTime-$)}}var R=!1,Z=-1,ue=5,le=-1;function K(){return P?!0:!(r.unstable_now()-le<ue)}function X(){if(P=!1,R){var $=r.unstable_now();le=$;var I=!0;try{e:{T=!1,U&&(U=!1,B(Z),Z=-1),H=!0;var de=A;try{t:{for(F($),D=u(g);D!==null&&!(D.expirationTime>$&&K());){var be=D.callback;if(typeof be=="function"){D.callback=null,A=D.priorityLevel;var j=be(D.expirationTime<=$);if($=r.unstable_now(),typeof j=="function"){D.callback=j,F($),I=!0;break t}D===u(g)&&d(g),F($)}else d(g);D=u(g)}if(D!==null)I=!0;else{var Q=u(x);Q!==null&&Ae(J,Q.startTime-$),I=!1}}break e}finally{D=null,A=de,H=!1}I=void 0}}finally{I?se():R=!1}}}var se;if(typeof Y=="function")se=function(){Y(X)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,Be=me.port2;me.port1.onmessage=X,se=function(){Be.postMessage(null)}}else se=function(){k(X,0)};function Ae($,I){Z=k(function(){$(r.unstable_now())},I)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function($){$.callback=null},r.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ue=0<$?Math.floor(1e3/$):5},r.unstable_getCurrentPriorityLevel=function(){return A},r.unstable_next=function($){switch(A){case 1:case 2:case 3:var I=3;break;default:I=A}var de=A;A=I;try{return $()}finally{A=de}},r.unstable_requestPaint=function(){P=!0},r.unstable_runWithPriority=function($,I){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var de=A;A=$;try{return I()}finally{A=de}},r.unstable_scheduleCallback=function($,I,de){var be=r.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?be+de:be):de=be,$){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=de+j,$={id:C++,callback:I,priorityLevel:$,startTime:de,expirationTime:j,sortIndex:-1},de>be?($.sortIndex=de,s(x,$),u(g)===null&&$===u(x)&&(U?(B(Z),Z=-1):U=!0,Ae(J,de-be))):($.sortIndex=j,s(g,$),T||H||(T=!0,R||(R=!0,se()))),$},r.unstable_shouldYield=K,r.unstable_wrapCallback=function($){var I=A;return function(){var de=A;A=I;try{return $.apply(this,arguments)}finally{A=de}}}}(Ud)),Ud}var Cm;function Xg(){return Cm||(Cm=1,Hd.exports=Jg()),Hd.exports}var qd={exports:{}},yt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function Fg(){if(zm)return yt;zm=1;var r=Cu();function s(g){var x="https://react.dev/errors/"+g;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)x+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+g+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var d={d:{f:u,r:function(){throw Error(s(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},f=Symbol.for("react.portal");function m(g,x,C){var D=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:D==null?null:""+D,children:g,containerInfo:x,implementation:C}}var b=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function w(g,x){if(g==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return yt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,yt.createPortal=function(g,x){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(s(299));return m(g,x,null,C)},yt.flushSync=function(g){var x=b.T,C=d.p;try{if(b.T=null,d.p=2,g)return g()}finally{b.T=x,d.p=C,d.d.f()}},yt.preconnect=function(g,x){typeof g=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,d.d.C(g,x))},yt.prefetchDNS=function(g){typeof g=="string"&&d.d.D(g)},yt.preinit=function(g,x){if(typeof g=="string"&&x&&typeof x.as=="string"){var C=x.as,D=w(C,x.crossOrigin),A=typeof x.integrity=="string"?x.integrity:void 0,H=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;C==="style"?d.d.S(g,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:D,integrity:A,fetchPriority:H}):C==="script"&&d.d.X(g,{crossOrigin:D,integrity:A,fetchPriority:H,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},yt.preinitModule=function(g,x){if(typeof g=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var C=w(x.as,x.crossOrigin);d.d.M(g,{crossOrigin:C,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&d.d.M(g)},yt.preload=function(g,x){if(typeof g=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var C=x.as,D=w(C,x.crossOrigin);d.d.L(g,C,{crossOrigin:D,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},yt.preloadModule=function(g,x){if(typeof g=="string")if(x){var C=w(x.as,x.crossOrigin);d.d.m(g,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:C,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else d.d.m(g)},yt.requestFormReset=function(g){d.d.r(g)},yt.unstable_batchedUpdates=function(g,x){return g(x)},yt.useFormState=function(g,x,C){return b.H.useFormState(g,x,C)},yt.useFormStatus=function(){return b.H.useHostTransitionStatus()},yt.version="19.1.0",yt}var Mm;function Kg(){if(Mm)return qd.exports;Mm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),qd.exports=Fg(),qd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tm;function Ig(){if(Tm)return Kr;Tm=1;var r=Xg(),s=Cu(),u=Kg();function d(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w(e){if(m(e)!==e)throw Error(d(188))}function g(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(d(188));return t!==e?null:e}for(var n=e,i=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(i=o.return,i!==null){n=i;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return w(o),e;if(l===i)return w(o),t;l=l.sibling}throw Error(d(188))}if(n.return!==i.return)n=o,i=l;else{for(var p=!1,h=o.child;h;){if(h===n){p=!0,n=o,i=l;break}if(h===i){p=!0,i=o,n=l;break}h=h.sibling}if(!p){for(h=l.child;h;){if(h===n){p=!0,n=l,i=o;break}if(h===i){p=!0,i=l,n=o;break}h=h.sibling}if(!p)throw Error(d(189))}}if(n.alternate!==i)throw Error(d(190))}if(n.tag!==3)throw Error(d(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var C=Object.assign,D=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),le=Symbol.for("react.activity"),K=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function se(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var me=Symbol.for("react.client.reference");function Be(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===me?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case P:return"Profiler";case U:return"StrictMode";case J:return"Suspense";case R:return"SuspenseList";case le:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case Y:return(e.displayName||"Context")+".Provider";case B:return(e._context.displayName||"Context")+".Consumer";case F:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Z:return t=e.displayName||null,t!==null?t:Be(e.type)||"Memo";case ue:t=e._payload,e=e._init;try{return Be(e(t))}catch{}}return null}var Ae=Array.isArray,$=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},be=[],j=-1;function Q(e){return{current:e}}function ee(e){0>j||(e.current=be[j],be[j]=null,j--)}function te(e,t){j++,be[j]=e.current,e.current=t}var ce=Q(null),z=Q(null),q=Q(null),oe=Q(null);function ne(e,t){switch(te(q,t),te(z,e),te(ce,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Zh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Zh(t),e=Jh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ee(ce),te(ce,e)}function De(){ee(ce),ee(z),ee(q)}function Ge(e){e.memoizedState!==null&&te(oe,e);var t=ce.current,n=Jh(t,e.type);t!==n&&(te(z,e),te(ce,n))}function Ve(e){z.current===e&&(ee(ce),ee(z)),oe.current===e&&(ee(oe),Qr._currentValue=de)}var qe=Object.prototype.hasOwnProperty,_t=r.unstable_scheduleCallback,$t=r.unstable_cancelCallback,ga=r.unstable_shouldYield,Za=r.unstable_requestPaint,et=r.unstable_now,ge=r.unstable_getCurrentPriorityLevel,jt=r.unstable_ImmediatePriority,Ii=r.unstable_UserBlockingPriority,ba=r.unstable_NormalPriority,So=r.unstable_LowPriority,Co=r.unstable_IdlePriority,zs=r.log,Ms=r.unstable_setDisableYieldValue,ya=null,xt=null;function Ft(e){if(typeof zs=="function"&&Ms(e),xt&&typeof xt.setStrictMode=="function")try{xt.setStrictMode(ya,e)}catch{}}var gt=Math.clz32?Math.clz32:As,zo=Math.log,Ts=Math.LN2;function As(e){return e>>>=0,e===0?32:31-(zo(e)/Ts|0)|0}var Ja=256,$n=4194304;function Ht(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Hn(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var o=0,l=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var h=i&134217727;return h!==0?(i=h&~l,i!==0?o=Ht(i):(p&=h,p!==0?o=Ht(p):n||(n=h&~e,n!==0&&(o=Ht(n))))):(h=i&~l,h!==0?o=Ht(h):p!==0?o=Ht(p):n||(n=i&~e,n!==0&&(o=Ht(n)))),o===0?0:t!==0&&t!==o&&(t&l)===0&&(l=o&-o,n=t&-t,l>=n||l===32&&(n&4194048)!==0)?t:o}function Un(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function er(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function va(){var e=Ja;return Ja<<=1,(Ja&4194048)===0&&(Ja=256),e}function Mo(){var e=$n;return $n<<=1,($n&62914560)===0&&($n=4194304),e}function tr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function wa(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function To(e,t,n,i,o,l){var p=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var h=e.entanglements,y=e.expirationTimes,E=e.hiddenUpdates;for(n=p&~n;0<n;){var G=31-gt(n),W=1<<G;h[G]=0,y[G]=-1;var N=E[G];if(N!==null)for(E[G]=null,G=0;G<N.length;G++){var O=N[G];O!==null&&(O.lane&=-536870913)}n&=~W}i!==0&&nr(e,i,0),l!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=l&~(p&~t))}function nr(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-gt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&4194090}function Ao(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-gt(n),o=1<<i;o&t|e[i]&t&&(e[i]|=t),n&=~o}}function _(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ie(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ce(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:hm(e.type))}function ae(e,t){var n=I.p;try{return I.p=e,t()}finally{I.p=n}}var ve=Math.random().toString(36).slice(2),ye="__reactFiber$"+ve,we="__reactProps$"+ve,vt="__reactContainer$"+ve,Kt="__reactEvents$"+ve,yn="__reactListeners$"+ve,ja="__reactHandles$"+ve,Lo="__reactResources$"+ve,ar="__reactMarker$"+ve;function Ls(e){delete e[ye],delete e[we],delete e[Kt],delete e[yn],delete e[ja]}function Xa(e){var t=e[ye];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[ye]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ih(e);e!==null;){if(n=e[ye])return n;e=Ih(e)}return t}e=n,n=e.parentNode}return null}function Fa(e){if(e=e[ye]||e[vt]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function ir(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(d(33))}function Ka(e){var t=e[Lo];return t||(t=e[Lo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function lt(e){e[ar]=!0}var Ou=new Set,Pu={};function ka(e,t){Ia(e,t),Ia(e+"Capture",t)}function Ia(e,t){for(Pu[e]=t,e=0;e<t.length;e++)Ou.add(t[e])}var _1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_u={},$u={};function $1(e){return qe.call($u,e)?!0:qe.call(_u,e)?!1:_1.test(e)?$u[e]=!0:(_u[e]=!0,!1)}function Eo(e,t,n){if($1(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Do(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function vn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}var Es,Hu;function ei(e){if(Es===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Es=t&&t[1]||"",Hu=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Es+e+Hu}var Ds=!1;function Rs(e,t){if(!e||Ds)return"";Ds=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(O){var N=O}Reflect.construct(e,[],W)}else{try{W.call()}catch(O){N=O}e.call(W.prototype)}}else{try{throw Error()}catch(O){N=O}(W=e())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(O){if(O&&N&&typeof O.stack=="string")return[O.stack,N.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=i.DetermineComponentFrameRoot(),p=l[0],h=l[1];if(p&&h){var y=p.split(`
`),E=h.split(`
`);for(o=i=0;i<y.length&&!y[i].includes("DetermineComponentFrameRoot");)i++;for(;o<E.length&&!E[o].includes("DetermineComponentFrameRoot");)o++;if(i===y.length||o===E.length)for(i=y.length-1,o=E.length-1;1<=i&&0<=o&&y[i]!==E[o];)o--;for(;1<=i&&0<=o;i--,o--)if(y[i]!==E[o]){if(i!==1||o!==1)do if(i--,o--,0>o||y[i]!==E[o]){var G=`
`+y[i].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),G}while(1<=i&&0<=o);break}}}finally{Ds=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ei(n):""}function H1(e){switch(e.tag){case 26:case 27:case 5:return ei(e.type);case 16:return ei("Lazy");case 13:return ei("Suspense");case 19:return ei("SuspenseList");case 0:case 15:return Rs(e.type,!1);case 11:return Rs(e.type.render,!1);case 1:return Rs(e.type,!0);case 31:return ei("Activity");default:return""}}function Uu(e){try{var t="";do t+=H1(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function U1(e){var t=qu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(p){i=""+p,l.call(this,p)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(p){i=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ro(e){e._valueTracker||(e._valueTracker=U1(e))}function Yu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=qu(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function No(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var q1=/[\n"\\]/g;function qt(e){return e.replace(q1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ns(e,t,n,i,o,l,p,h){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),t!=null?p==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ut(t)):e.value!==""+Ut(t)&&(e.value=""+Ut(t)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),t!=null?Bs(e,p,Ut(t)):n!=null?Bs(e,p,Ut(n)):i!=null&&e.removeAttribute("value"),o==null&&l!=null&&(e.defaultChecked=!!l),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+Ut(h):e.removeAttribute("name")}function Gu(e,t,n,i,o,l,p,h){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||n!=null){if(!(l!=="submit"&&l!=="reset"||t!=null))return;n=n!=null?""+Ut(n):"",t=t!=null?""+Ut(t):n,h||t===e.value||(e.value=t),e.defaultValue=t}i=i??o,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=h?e.checked:!!i,e.defaultChecked=!!i,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p)}function Bs(e,t,n){t==="number"&&No(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ti(e,t,n,i){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Ut(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,i&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Vu(e,t,n){if(t!=null&&(t=""+Ut(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ut(n):""}function Qu(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(d(92));if(Ae(i)){if(1<i.length)throw Error(d(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Ut(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i)}function ni(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Y1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wu(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Y1.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Zu(e,t,n){if(t!=null&&typeof t!="object")throw Error(d(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var o in t)i=t[o],t.hasOwnProperty(o)&&n[o]!==i&&Wu(e,o,i)}else for(var l in t)t.hasOwnProperty(l)&&Wu(e,l,t[l])}function Os(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var G1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),V1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bo(e){return V1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ps=null;function _s(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ai=null,ii=null;function Ju(e){var t=Fa(e);if(t&&(e=t.stateNode)){var n=e[we]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ns(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+qt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var o=i[we]||null;if(!o)throw Error(d(90));Ns(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Yu(i)}break e;case"textarea":Vu(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ti(e,!!n.multiple,t,!1)}}}var $s=!1;function Xu(e,t,n){if($s)return e(t,n);$s=!0;try{var i=e(t);return i}finally{if($s=!1,(ai!==null||ii!==null)&&(vl(),ai&&(t=ai,e=ii,ii=ai=null,Ju(t),e)))for(t=0;t<e.length;t++)Ju(e[t])}}function rr(e,t){var n=e.stateNode;if(n===null)return null;var i=n[we]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(d(231,t,typeof n));return n}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hs=!1;if(wn)try{var or={};Object.defineProperty(or,"passive",{get:function(){Hs=!0}}),window.addEventListener("test",or,or),window.removeEventListener("test",or,or)}catch{Hs=!1}var qn=null,Us=null,Oo=null;function Fu(){if(Oo)return Oo;var e,t=Us,n=t.length,i,o="value"in qn?qn.value:qn.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var p=n-e;for(i=1;i<=p&&t[n-i]===o[l-i];i++);return Oo=o.slice(e,1<i?1-i:void 0)}function Po(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _o(){return!0}function Ku(){return!1}function kt(e){function t(n,i,o,l,p){this._reactName=n,this._targetInst=o,this.type=i,this.nativeEvent=l,this.target=p,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(l):l[h]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?_o:Ku,this.isPropagationStopped=Ku,this}return C(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),t}var Sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$o=kt(Sa),lr=C({},Sa,{view:0,detail:0}),Q1=kt(lr),qs,Ys,sr,Ho=C({},lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sr&&(sr&&e.type==="mousemove"?(qs=e.screenX-sr.screenX,Ys=e.screenY-sr.screenY):Ys=qs=0,sr=e),qs)},movementY:function(e){return"movementY"in e?e.movementY:Ys}}),Iu=kt(Ho),W1=C({},Ho,{dataTransfer:0}),Z1=kt(W1),J1=C({},lr,{relatedTarget:0}),Gs=kt(J1),X1=C({},Sa,{animationName:0,elapsedTime:0,pseudoElement:0}),F1=kt(X1),K1=C({},Sa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),I1=kt(K1),ex=C({},Sa,{data:0}),ep=kt(ex),tx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ax={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ix(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ax[e])?!!t[e]:!1}function Vs(){return ix}var rx=C({},lr,{key:function(e){if(e.key){var t=tx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Po(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vs,charCode:function(e){return e.type==="keypress"?Po(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Po(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ox=kt(rx),lx=C({},Ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tp=kt(lx),sx=C({},lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vs}),cx=kt(sx),dx=C({},Sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),ux=kt(dx),px=C({},Ho,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fx=kt(px),hx=C({},Sa,{newState:0,oldState:0}),mx=kt(hx),xx=[9,13,27,32],Qs=wn&&"CompositionEvent"in window,cr=null;wn&&"documentMode"in document&&(cr=document.documentMode);var gx=wn&&"TextEvent"in window&&!cr,np=wn&&(!Qs||cr&&8<cr&&11>=cr),ap=" ",ip=!1;function rp(e,t){switch(e){case"keyup":return xx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function op(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ri=!1;function bx(e,t){switch(e){case"compositionend":return op(t);case"keypress":return t.which!==32?null:(ip=!0,ap);case"textInput":return e=t.data,e===ap&&ip?null:e;default:return null}}function yx(e,t){if(ri)return e==="compositionend"||!Qs&&rp(e,t)?(e=Fu(),Oo=Us=qn=null,ri=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return np&&t.locale!=="ko"?null:t.data;default:return null}}var vx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vx[e.type]:t==="textarea"}function sp(e,t,n,i){ai?ii?ii.push(i):ii=[i]:ai=i,t=zl(t,"onChange"),0<t.length&&(n=new $o("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var dr=null,ur=null;function wx(e){Yh(e,0)}function Uo(e){var t=ir(e);if(Yu(t))return e}function cp(e,t){if(e==="change")return t}var dp=!1;if(wn){var Ws;if(wn){var Zs="oninput"in document;if(!Zs){var up=document.createElement("div");up.setAttribute("oninput","return;"),Zs=typeof up.oninput=="function"}Ws=Zs}else Ws=!1;dp=Ws&&(!document.documentMode||9<document.documentMode)}function pp(){dr&&(dr.detachEvent("onpropertychange",fp),ur=dr=null)}function fp(e){if(e.propertyName==="value"&&Uo(ur)){var t=[];sp(t,ur,e,_s(e)),Xu(wx,t)}}function jx(e,t,n){e==="focusin"?(pp(),dr=t,ur=n,dr.attachEvent("onpropertychange",fp)):e==="focusout"&&pp()}function kx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Uo(ur)}function Sx(e,t){if(e==="click")return Uo(t)}function Cx(e,t){if(e==="input"||e==="change")return Uo(t)}function zx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Lt=typeof Object.is=="function"?Object.is:zx;function pr(e,t){if(Lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var o=n[i];if(!qe.call(t,o)||!Lt(e[o],t[o]))return!1}return!0}function hp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mp(e,t){var n=hp(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hp(n)}}function xp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=No(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=No(e.document)}return t}function Js(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Mx=wn&&"documentMode"in document&&11>=document.documentMode,oi=null,Xs=null,fr=null,Fs=!1;function bp(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fs||oi==null||oi!==No(i)||(i=oi,"selectionStart"in i&&Js(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),fr&&pr(fr,i)||(fr=i,i=zl(Xs,"onSelect"),0<i.length&&(t=new $o("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=oi)))}function Ca(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var li={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionrun:Ca("Transition","TransitionRun"),transitionstart:Ca("Transition","TransitionStart"),transitioncancel:Ca("Transition","TransitionCancel"),transitionend:Ca("Transition","TransitionEnd")},Ks={},yp={};wn&&(yp=document.createElement("div").style,"AnimationEvent"in window||(delete li.animationend.animation,delete li.animationiteration.animation,delete li.animationstart.animation),"TransitionEvent"in window||delete li.transitionend.transition);function za(e){if(Ks[e])return Ks[e];if(!li[e])return e;var t=li[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in yp)return Ks[e]=t[n];return e}var vp=za("animationend"),wp=za("animationiteration"),jp=za("animationstart"),Tx=za("transitionrun"),Ax=za("transitionstart"),Lx=za("transitioncancel"),kp=za("transitionend"),Sp=new Map,Is="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Is.push("scrollEnd");function It(e,t){Sp.set(e,t),ka(t,[e])}var Cp=new WeakMap;function Yt(e,t){if(typeof e=="object"&&e!==null){var n=Cp.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Uu(t)},Cp.set(e,t),t)}return{value:e,source:t,stack:Uu(t)}}var Gt=[],si=0,ec=0;function qo(){for(var e=si,t=ec=si=0;t<e;){var n=Gt[t];Gt[t++]=null;var i=Gt[t];Gt[t++]=null;var o=Gt[t];Gt[t++]=null;var l=Gt[t];if(Gt[t++]=null,i!==null&&o!==null){var p=i.pending;p===null?o.next=o:(o.next=p.next,p.next=o),i.pending=o}l!==0&&zp(n,o,l)}}function Yo(e,t,n,i){Gt[si++]=e,Gt[si++]=t,Gt[si++]=n,Gt[si++]=i,ec|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function tc(e,t,n,i){return Yo(e,t,n,i),Go(e)}function ci(e,t){return Yo(e,null,null,t),Go(e)}function zp(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var o=!1,l=e.return;l!==null;)l.childLanes|=n,i=l.alternate,i!==null&&(i.childLanes|=n),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(o=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,o&&t!==null&&(o=31-gt(n),e=l.hiddenUpdates,i=e[o],i===null?e[o]=[t]:i.push(t),t.lane=n|536870912),l):null}function Go(e){if(50<_r)throw _r=0,ld=null,Error(d(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var di={};function Ex(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(e,t,n,i){return new Ex(e,t,n,i)}function nc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jn(e,t){var n=e.alternate;return n===null?(n=Et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Mp(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Vo(e,t,n,i,o,l){var p=0;if(i=e,typeof e=="function")nc(e)&&(p=1);else if(typeof e=="string")p=Rg(e,n,ce.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case le:return e=Et(31,n,t,o),e.elementType=le,e.lanes=l,e;case T:return Ma(n.children,o,l,t);case U:p=8,o|=24;break;case P:return e=Et(12,n,t,o|2),e.elementType=P,e.lanes=l,e;case J:return e=Et(13,n,t,o),e.elementType=J,e.lanes=l,e;case R:return e=Et(19,n,t,o),e.elementType=R,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case k:case Y:p=10;break e;case B:p=9;break e;case F:p=11;break e;case Z:p=14;break e;case ue:p=16,i=null;break e}p=29,n=Error(d(130,e===null?"null":typeof e,"")),i=null}return t=Et(p,n,t,o),t.elementType=e,t.type=i,t.lanes=l,t}function Ma(e,t,n,i){return e=Et(7,e,i,t),e.lanes=n,e}function ac(e,t,n){return e=Et(6,e,null,t),e.lanes=n,e}function ic(e,t,n){return t=Et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ui=[],pi=0,Qo=null,Wo=0,Vt=[],Qt=0,Ta=null,kn=1,Sn="";function Aa(e,t){ui[pi++]=Wo,ui[pi++]=Qo,Qo=e,Wo=t}function Tp(e,t,n){Vt[Qt++]=kn,Vt[Qt++]=Sn,Vt[Qt++]=Ta,Ta=e;var i=kn;e=Sn;var o=32-gt(i)-1;i&=~(1<<o),n+=1;var l=32-gt(t)+o;if(30<l){var p=o-o%5;l=(i&(1<<p)-1).toString(32),i>>=p,o-=p,kn=1<<32-gt(t)+o|n<<o|i,Sn=l+e}else kn=1<<l|n<<o|i,Sn=e}function rc(e){e.return!==null&&(Aa(e,1),Tp(e,1,0))}function oc(e){for(;e===Qo;)Qo=ui[--pi],ui[pi]=null,Wo=ui[--pi],ui[pi]=null;for(;e===Ta;)Ta=Vt[--Qt],Vt[Qt]=null,Sn=Vt[--Qt],Vt[Qt]=null,kn=Vt[--Qt],Vt[Qt]=null}var wt=null,Xe=null,Re=!1,La=null,an=!1,lc=Error(d(519));function Ea(e){var t=Error(d(418,""));throw xr(Yt(t,e)),lc}function Ap(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[ye]=e,t[we]=i,n){case"dialog":Te("cancel",t),Te("close",t);break;case"iframe":case"object":case"embed":Te("load",t);break;case"video":case"audio":for(n=0;n<Hr.length;n++)Te(Hr[n],t);break;case"source":Te("error",t);break;case"img":case"image":case"link":Te("error",t),Te("load",t);break;case"details":Te("toggle",t);break;case"input":Te("invalid",t),Gu(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),Ro(t);break;case"select":Te("invalid",t);break;case"textarea":Te("invalid",t),Qu(t,i.value,i.defaultValue,i.children),Ro(t)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Wh(t.textContent,n)?(i.popover!=null&&(Te("beforetoggle",t),Te("toggle",t)),i.onScroll!=null&&Te("scroll",t),i.onScrollEnd!=null&&Te("scrollend",t),i.onClick!=null&&(t.onclick=Ml),t=!0):t=!1,t||Ea(e)}function Lp(e){for(wt=e.return;wt;)switch(wt.tag){case 5:case 13:an=!1;return;case 27:case 3:an=!0;return;default:wt=wt.return}}function hr(e){if(e!==wt)return!1;if(!Re)return Lp(e),Re=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||kd(e.type,e.memoizedProps)),n=!n),n&&Xe&&Ea(e),Lp(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Xe=tn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Xe=null}}else t===27?(t=Xe,ia(e.type)?(e=Md,Md=null,Xe=e):Xe=t):Xe=wt?tn(e.stateNode.nextSibling):null;return!0}function mr(){Xe=wt=null,Re=!1}function Ep(){var e=La;return e!==null&&(zt===null?zt=e:zt.push.apply(zt,e),La=null),e}function xr(e){La===null?La=[e]:La.push(e)}var sc=Q(null),Da=null,Cn=null;function Yn(e,t,n){te(sc,t._currentValue),t._currentValue=n}function zn(e){e._currentValue=sc.current,ee(sc)}function cc(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function dc(e,t,n,i){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){var p=o.child;l=l.firstContext;e:for(;l!==null;){var h=l;l=o;for(var y=0;y<t.length;y++)if(h.context===t[y]){l.lanes|=n,h=l.alternate,h!==null&&(h.lanes|=n),cc(l.return,n,e),i||(p=null);break e}l=h.next}}else if(o.tag===18){if(p=o.return,p===null)throw Error(d(341));p.lanes|=n,l=p.alternate,l!==null&&(l.lanes|=n),cc(p,n,e),p=null}else p=o.child;if(p!==null)p.return=o;else for(p=o;p!==null;){if(p===e){p=null;break}if(o=p.sibling,o!==null){o.return=p.return,p=o;break}p=p.return}o=p}}function gr(e,t,n,i){e=null;for(var o=t,l=!1;o!==null;){if(!l){if((o.flags&524288)!==0)l=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var p=o.alternate;if(p===null)throw Error(d(387));if(p=p.memoizedProps,p!==null){var h=o.type;Lt(o.pendingProps.value,p.value)||(e!==null?e.push(h):e=[h])}}else if(o===oe.current){if(p=o.alternate,p===null)throw Error(d(387));p.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Qr):e=[Qr])}o=o.return}e!==null&&dc(t,e,n,i),t.flags|=262144}function Zo(e){for(e=e.firstContext;e!==null;){if(!Lt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ra(e){Da=e,Cn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function bt(e){return Dp(Da,e)}function Jo(e,t){return Da===null&&Ra(e),Dp(e,t)}function Dp(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Cn===null){if(e===null)throw Error(d(308));Cn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Cn=Cn.next=t;return n}var Dx=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Rx=r.unstable_scheduleCallback,Nx=r.unstable_NormalPriority,it={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uc(){return{controller:new Dx,data:new Map,refCount:0}}function br(e){e.refCount--,e.refCount===0&&Rx(Nx,function(){e.controller.abort()})}var yr=null,pc=0,fi=0,hi=null;function Bx(e,t){if(yr===null){var n=yr=[];pc=0,fi=hd(),hi={status:"pending",value:void 0,then:function(i){n.push(i)}}}return pc++,t.then(Rp,Rp),t}function Rp(){if(--pc===0&&yr!==null){hi!==null&&(hi.status="fulfilled");var e=yr;yr=null,fi=0,hi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ox(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var o=0;o<n.length;o++)(0,n[o])(t)},function(o){for(i.status="rejected",i.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),i}var Np=$.S;$.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Bx(e,t),Np!==null&&Np(e,t)};var Na=Q(null);function fc(){var e=Na.current;return e!==null?e:Ye.pooledCache}function Xo(e,t){t===null?te(Na,Na.current):te(Na,t.pool)}function Bp(){var e=fc();return e===null?null:{parent:it._currentValue,pool:e}}var vr=Error(d(460)),Op=Error(d(474)),Fo=Error(d(542)),hc={then:function(){}};function Pp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ko(){}function _p(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ko,Ko),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Hp(e),e;default:if(typeof t.status=="string")t.then(Ko,Ko);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=i}},function(i){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Hp(e),e}throw wr=t,vr}}var wr=null;function $p(){if(wr===null)throw Error(d(459));var e=wr;return wr=null,e}function Hp(e){if(e===vr||e===Fo)throw Error(d(483))}var Gn=!1;function mc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Vn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Qn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Oe&2)!==0){var o=i.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),i.pending=t,t=Go(e),zp(e,null,n),t}return Yo(e,i,t,n),Go(e)}function jr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Ao(e,n)}}function gc(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var p={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};l===null?o=l=p:l=l.next=p,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var bc=!1;function kr(){if(bc){var e=hi;if(e!==null)throw e}}function Sr(e,t,n,i){bc=!1;var o=e.updateQueue;Gn=!1;var l=o.firstBaseUpdate,p=o.lastBaseUpdate,h=o.shared.pending;if(h!==null){o.shared.pending=null;var y=h,E=y.next;y.next=null,p===null?l=E:p.next=E,p=y;var G=e.alternate;G!==null&&(G=G.updateQueue,h=G.lastBaseUpdate,h!==p&&(h===null?G.firstBaseUpdate=E:h.next=E,G.lastBaseUpdate=y))}if(l!==null){var W=o.baseState;p=0,G=E=y=null,h=l;do{var N=h.lane&-536870913,O=N!==h.lane;if(O?(Le&N)===N:(i&N)===N){N!==0&&N===fi&&(bc=!0),G!==null&&(G=G.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var xe=e,fe=h;N=t;var He=n;switch(fe.tag){case 1:if(xe=fe.payload,typeof xe=="function"){W=xe.call(He,W,N);break e}W=xe;break e;case 3:xe.flags=xe.flags&-65537|128;case 0:if(xe=fe.payload,N=typeof xe=="function"?xe.call(He,W,N):xe,N==null)break e;W=C({},W,N);break e;case 2:Gn=!0}}N=h.callback,N!==null&&(e.flags|=64,O&&(e.flags|=8192),O=o.callbacks,O===null?o.callbacks=[N]:O.push(N))}else O={lane:N,tag:h.tag,payload:h.payload,callback:h.callback,next:null},G===null?(E=G=O,y=W):G=G.next=O,p|=N;if(h=h.next,h===null){if(h=o.shared.pending,h===null)break;O=h,h=O.next,O.next=null,o.lastBaseUpdate=O,o.shared.pending=null}}while(!0);G===null&&(y=W),o.baseState=y,o.firstBaseUpdate=E,o.lastBaseUpdate=G,l===null&&(o.shared.lanes=0),ea|=p,e.lanes=p,e.memoizedState=W}}function Up(e,t){if(typeof e!="function")throw Error(d(191,e));e.call(t)}function qp(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Up(n[e],t)}var mi=Q(null),Io=Q(0);function Yp(e,t){e=Rn,te(Io,e),te(mi,t),Rn=e|t.baseLanes}function yc(){te(Io,Rn),te(mi,mi.current)}function vc(){Rn=Io.current,ee(mi),ee(Io)}var Wn=0,Se=null,_e=null,tt=null,el=!1,xi=!1,Ba=!1,tl=0,Cr=0,gi=null,Px=0;function Ke(){throw Error(d(321))}function wc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Lt(e[n],t[n]))return!1;return!0}function jc(e,t,n,i,o,l){return Wn=l,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$.H=e===null||e.memoizedState===null?Mf:Tf,Ba=!1,l=n(i,o),Ba=!1,xi&&(l=Vp(t,n,i,o)),Gp(e),l}function Gp(e){$.H=ll;var t=_e!==null&&_e.next!==null;if(Wn=0,tt=_e=Se=null,el=!1,Cr=0,gi=null,t)throw Error(d(300));e===null||st||(e=e.dependencies,e!==null&&Zo(e)&&(st=!0))}function Vp(e,t,n,i){Se=e;var o=0;do{if(xi&&(gi=null),Cr=0,xi=!1,25<=o)throw Error(d(301));if(o+=1,tt=_e=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}$.H=Gx,l=t(n,i)}while(xi);return l}function _x(){var e=$.H,t=e.useState()[0];return t=typeof t.then=="function"?zr(t):t,e=e.useState()[0],(_e!==null?_e.memoizedState:null)!==e&&(Se.flags|=1024),t}function kc(){var e=tl!==0;return tl=0,e}function Sc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Cc(e){if(el){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}el=!1}Wn=0,tt=_e=Se=null,xi=!1,Cr=tl=0,gi=null}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?Se.memoizedState=tt=e:tt=tt.next=e,tt}function nt(){if(_e===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=tt===null?Se.memoizedState:tt.next;if(t!==null)tt=t,_e=e;else{if(e===null)throw Se.alternate===null?Error(d(467)):Error(d(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},tt===null?Se.memoizedState=tt=e:tt=tt.next=e}return tt}function zc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zr(e){var t=Cr;return Cr+=1,gi===null&&(gi=[]),e=_p(gi,e,t),t=Se,(tt===null?t.memoizedState:tt.next)===null&&(t=t.alternate,$.H=t===null||t.memoizedState===null?Mf:Tf),e}function nl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return zr(e);if(e.$$typeof===Y)return bt(e)}throw Error(d(438,String(e)))}function Mc(e){var t=null,n=Se.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Se.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=zc(),Se.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=K;return t.index++,n}function Mn(e,t){return typeof t=="function"?t(e):t}function al(e){var t=nt();return Tc(t,_e,e)}function Tc(e,t,n){var i=e.queue;if(i===null)throw Error(d(311));i.lastRenderedReducer=n;var o=e.baseQueue,l=i.pending;if(l!==null){if(o!==null){var p=o.next;o.next=l.next,l.next=p}t.baseQueue=o=l,i.pending=null}if(l=e.baseState,o===null)e.memoizedState=l;else{t=o.next;var h=p=null,y=null,E=t,G=!1;do{var W=E.lane&-536870913;if(W!==E.lane?(Le&W)===W:(Wn&W)===W){var N=E.revertLane;if(N===0)y!==null&&(y=y.next={lane:0,revertLane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),W===fi&&(G=!0);else if((Wn&N)===N){E=E.next,N===fi&&(G=!0);continue}else W={lane:0,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},y===null?(h=y=W,p=l):y=y.next=W,Se.lanes|=N,ea|=N;W=E.action,Ba&&n(l,W),l=E.hasEagerState?E.eagerState:n(l,W)}else N={lane:W,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},y===null?(h=y=N,p=l):y=y.next=N,Se.lanes|=W,ea|=W;E=E.next}while(E!==null&&E!==t);if(y===null?p=l:y.next=h,!Lt(l,e.memoizedState)&&(st=!0,G&&(n=hi,n!==null)))throw n;e.memoizedState=l,e.baseState=p,e.baseQueue=y,i.lastRenderedState=l}return o===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Ac(e){var t=nt(),n=t.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=e;var i=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var p=o=o.next;do l=e(l,p.action),p=p.next;while(p!==o);Lt(l,t.memoizedState)||(st=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,i]}function Qp(e,t,n){var i=Se,o=nt(),l=Re;if(l){if(n===void 0)throw Error(d(407));n=n()}else n=t();var p=!Lt((_e||o).memoizedState,n);p&&(o.memoizedState=n,st=!0),o=o.queue;var h=Jp.bind(null,i,o,e);if(Mr(2048,8,h,[e]),o.getSnapshot!==t||p||tt!==null&&tt.memoizedState.tag&1){if(i.flags|=2048,bi(9,il(),Zp.bind(null,i,o,n,t),null),Ye===null)throw Error(d(349));l||(Wn&124)!==0||Wp(i,t,n)}return n}function Wp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Se.updateQueue,t===null?(t=zc(),Se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zp(e,t,n,i){t.value=n,t.getSnapshot=i,Xp(t)&&Fp(e)}function Jp(e,t,n){return n(function(){Xp(t)&&Fp(e)})}function Xp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Lt(e,n)}catch{return!0}}function Fp(e){var t=ci(e,2);t!==null&&Ot(t,e,2)}function Lc(e){var t=St();if(typeof e=="function"){var n=e;if(e=n(),Ba){Ft(!0);try{n()}finally{Ft(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:e},t}function Kp(e,t,n,i){return e.baseState=n,Tc(e,_e,typeof i=="function"?i:Mn)}function $x(e,t,n,i,o){if(ol(e))throw Error(d(485));if(e=t.action,e!==null){var l={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){l.listeners.push(p)}};$.T!==null?n(!0):l.isTransition=!1,i(l),n=t.pending,n===null?(l.next=t.pending=l,Ip(t,l)):(l.next=n.next,t.pending=n.next=l)}}function Ip(e,t){var n=t.action,i=t.payload,o=e.state;if(t.isTransition){var l=$.T,p={};$.T=p;try{var h=n(o,i),y=$.S;y!==null&&y(p,h),ef(e,t,h)}catch(E){Ec(e,t,E)}finally{$.T=l}}else try{l=n(o,i),ef(e,t,l)}catch(E){Ec(e,t,E)}}function ef(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){tf(e,t,i)},function(i){return Ec(e,t,i)}):tf(e,t,n)}function tf(e,t,n){t.status="fulfilled",t.value=n,nf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ip(e,n)))}function Ec(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,nf(t),t=t.next;while(t!==i)}e.action=null}function nf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function af(e,t){return t}function rf(e,t){if(Re){var n=Ye.formState;if(n!==null){e:{var i=Se;if(Re){if(Xe){t:{for(var o=Xe,l=an;o.nodeType!==8;){if(!l){o=null;break t}if(o=tn(o.nextSibling),o===null){o=null;break t}}l=o.data,o=l==="F!"||l==="F"?o:null}if(o){Xe=tn(o.nextSibling),i=o.data==="F!";break e}}Ea(i)}i=!1}i&&(t=n[0])}}return n=St(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:af,lastRenderedState:t},n.queue=i,n=Sf.bind(null,Se,i),i.dispatch=n,i=Lc(!1),l=Oc.bind(null,Se,!1,i.queue),i=St(),o={state:t,dispatch:null,action:e,pending:null},i.queue=o,n=$x.bind(null,Se,o,l,n),o.dispatch=n,i.memoizedState=e,[t,n,!1]}function of(e){var t=nt();return lf(t,_e,e)}function lf(e,t,n){if(t=Tc(e,t,af)[0],e=al(Mn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=zr(t)}catch(p){throw p===vr?Fo:p}else i=t;t=nt();var o=t.queue,l=o.dispatch;return n!==t.memoizedState&&(Se.flags|=2048,bi(9,il(),Hx.bind(null,o,n),null)),[i,l,e]}function Hx(e,t){e.action=t}function sf(e){var t=nt(),n=_e;if(n!==null)return lf(t,n,e);nt(),t=t.memoizedState,n=nt();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function bi(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Se.updateQueue,t===null&&(t=zc(),Se.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function il(){return{destroy:void 0,resource:void 0}}function cf(){return nt().memoizedState}function rl(e,t,n,i){var o=St();i=i===void 0?null:i,Se.flags|=e,o.memoizedState=bi(1|t,il(),n,i)}function Mr(e,t,n,i){var o=nt();i=i===void 0?null:i;var l=o.memoizedState.inst;_e!==null&&i!==null&&wc(i,_e.memoizedState.deps)?o.memoizedState=bi(t,l,n,i):(Se.flags|=e,o.memoizedState=bi(1|t,l,n,i))}function df(e,t){rl(8390656,8,e,t)}function uf(e,t){Mr(2048,8,e,t)}function pf(e,t){return Mr(4,2,e,t)}function ff(e,t){return Mr(4,4,e,t)}function hf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mf(e,t,n){n=n!=null?n.concat([e]):null,Mr(4,4,hf.bind(null,t,e),n)}function Dc(){}function xf(e,t){var n=nt();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&wc(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function gf(e,t){var n=nt();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&wc(t,i[1]))return i[0];if(i=e(),Ba){Ft(!0);try{e()}finally{Ft(!1)}}return n.memoizedState=[i,t],i}function Rc(e,t,n){return n===void 0||(Wn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=vh(),Se.lanes|=e,ea|=e,n)}function bf(e,t,n,i){return Lt(n,t)?n:mi.current!==null?(e=Rc(e,n,i),Lt(e,t)||(st=!0),e):(Wn&42)===0?(st=!0,e.memoizedState=n):(e=vh(),Se.lanes|=e,ea|=e,t)}function yf(e,t,n,i,o){var l=I.p;I.p=l!==0&&8>l?l:8;var p=$.T,h={};$.T=h,Oc(e,!1,t,n);try{var y=o(),E=$.S;if(E!==null&&E(h,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var G=Ox(y,i);Tr(e,t,G,Bt(e))}else Tr(e,t,i,Bt(e))}catch(W){Tr(e,t,{then:function(){},status:"rejected",reason:W},Bt())}finally{I.p=l,$.T=p}}function Ux(){}function Nc(e,t,n,i){if(e.tag!==5)throw Error(d(476));var o=vf(e).queue;yf(e,o,t,de,n===null?Ux:function(){return wf(e),n(i)})}function vf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function wf(e){var t=vf(e).next.queue;Tr(e,t,{},Bt())}function Bc(){return bt(Qr)}function jf(){return nt().memoizedState}function kf(){return nt().memoizedState}function qx(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Bt();e=Vn(n);var i=Qn(t,e,n);i!==null&&(Ot(i,t,n),jr(i,t,n)),t={cache:uc()},e.payload=t;return}t=t.return}}function Yx(e,t,n){var i=Bt();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},ol(e)?Cf(t,n):(n=tc(e,t,n,i),n!==null&&(Ot(n,e,i),zf(n,t,i)))}function Sf(e,t,n){var i=Bt();Tr(e,t,n,i)}function Tr(e,t,n,i){var o={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(ol(e))Cf(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var p=t.lastRenderedState,h=l(p,n);if(o.hasEagerState=!0,o.eagerState=h,Lt(h,p))return Yo(e,t,o,0),Ye===null&&qo(),!1}catch{}finally{}if(n=tc(e,t,o,i),n!==null)return Ot(n,e,i),zf(n,t,i),!0}return!1}function Oc(e,t,n,i){if(i={lane:2,revertLane:hd(),action:i,hasEagerState:!1,eagerState:null,next:null},ol(e)){if(t)throw Error(d(479))}else t=tc(e,n,i,2),t!==null&&Ot(t,e,2)}function ol(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function Cf(e,t){xi=el=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zf(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Ao(e,n)}}var ll={readContext:bt,use:nl,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke},Mf={readContext:bt,use:nl,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:bt,useEffect:df,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,rl(4194308,4,hf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return rl(4194308,4,e,t)},useInsertionEffect:function(e,t){rl(4,2,e,t)},useMemo:function(e,t){var n=St();t=t===void 0?null:t;var i=e();if(Ba){Ft(!0);try{e()}finally{Ft(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=St();if(n!==void 0){var o=n(t);if(Ba){Ft(!0);try{n(t)}finally{Ft(!1)}}}else o=t;return i.memoizedState=i.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},i.queue=e,e=e.dispatch=Yx.bind(null,Se,e),[i.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:function(e){e=Lc(e);var t=e.queue,n=Sf.bind(null,Se,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Dc,useDeferredValue:function(e,t){var n=St();return Rc(n,e,t)},useTransition:function(){var e=Lc(!1);return e=yf.bind(null,Se,e.queue,!0,!1),St().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Se,o=St();if(Re){if(n===void 0)throw Error(d(407));n=n()}else{if(n=t(),Ye===null)throw Error(d(349));(Le&124)!==0||Wp(i,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,df(Jp.bind(null,i,l,e),[e]),i.flags|=2048,bi(9,il(),Zp.bind(null,i,l,n,t),null),n},useId:function(){var e=St(),t=Ye.identifierPrefix;if(Re){var n=Sn,i=kn;n=(i&~(1<<32-gt(i)-1)).toString(32)+n,t="«"+t+"R"+n,n=tl++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=Px++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Bc,useFormState:rf,useActionState:rf,useOptimistic:function(e){var t=St();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Oc.bind(null,Se,!0,n),n.dispatch=t,[e,t]},useMemoCache:Mc,useCacheRefresh:function(){return St().memoizedState=qx.bind(null,Se)}},Tf={readContext:bt,use:nl,useCallback:xf,useContext:bt,useEffect:uf,useImperativeHandle:mf,useInsertionEffect:pf,useLayoutEffect:ff,useMemo:gf,useReducer:al,useRef:cf,useState:function(){return al(Mn)},useDebugValue:Dc,useDeferredValue:function(e,t){var n=nt();return bf(n,_e.memoizedState,e,t)},useTransition:function(){var e=al(Mn)[0],t=nt().memoizedState;return[typeof e=="boolean"?e:zr(e),t]},useSyncExternalStore:Qp,useId:jf,useHostTransitionStatus:Bc,useFormState:of,useActionState:of,useOptimistic:function(e,t){var n=nt();return Kp(n,_e,e,t)},useMemoCache:Mc,useCacheRefresh:kf},Gx={readContext:bt,use:nl,useCallback:xf,useContext:bt,useEffect:uf,useImperativeHandle:mf,useInsertionEffect:pf,useLayoutEffect:ff,useMemo:gf,useReducer:Ac,useRef:cf,useState:function(){return Ac(Mn)},useDebugValue:Dc,useDeferredValue:function(e,t){var n=nt();return _e===null?Rc(n,e,t):bf(n,_e.memoizedState,e,t)},useTransition:function(){var e=Ac(Mn)[0],t=nt().memoizedState;return[typeof e=="boolean"?e:zr(e),t]},useSyncExternalStore:Qp,useId:jf,useHostTransitionStatus:Bc,useFormState:sf,useActionState:sf,useOptimistic:function(e,t){var n=nt();return _e!==null?Kp(n,_e,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Mc,useCacheRefresh:kf},yi=null,Ar=0;function sl(e){var t=Ar;return Ar+=1,yi===null&&(yi=[]),_p(yi,e,t)}function Lr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function cl(e,t){throw t.$$typeof===D?Error(d(525)):(e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Af(e){var t=e._init;return t(e._payload)}function Lf(e){function t(M,S){if(e){var L=M.deletions;L===null?(M.deletions=[S],M.flags|=16):L.push(S)}}function n(M,S){if(!e)return null;for(;S!==null;)t(M,S),S=S.sibling;return null}function i(M){for(var S=new Map;M!==null;)M.key!==null?S.set(M.key,M):S.set(M.index,M),M=M.sibling;return S}function o(M,S){return M=jn(M,S),M.index=0,M.sibling=null,M}function l(M,S,L){return M.index=L,e?(L=M.alternate,L!==null?(L=L.index,L<S?(M.flags|=67108866,S):L):(M.flags|=67108866,S)):(M.flags|=1048576,S)}function p(M){return e&&M.alternate===null&&(M.flags|=67108866),M}function h(M,S,L,V){return S===null||S.tag!==6?(S=ac(L,M.mode,V),S.return=M,S):(S=o(S,L),S.return=M,S)}function y(M,S,L,V){var re=L.type;return re===T?G(M,S,L.props.children,V,L.key):S!==null&&(S.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===ue&&Af(re)===S.type)?(S=o(S,L.props),Lr(S,L),S.return=M,S):(S=Vo(L.type,L.key,L.props,null,M.mode,V),Lr(S,L),S.return=M,S)}function E(M,S,L,V){return S===null||S.tag!==4||S.stateNode.containerInfo!==L.containerInfo||S.stateNode.implementation!==L.implementation?(S=ic(L,M.mode,V),S.return=M,S):(S=o(S,L.children||[]),S.return=M,S)}function G(M,S,L,V,re){return S===null||S.tag!==7?(S=Ma(L,M.mode,V,re),S.return=M,S):(S=o(S,L),S.return=M,S)}function W(M,S,L){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=ac(""+S,M.mode,L),S.return=M,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case A:return L=Vo(S.type,S.key,S.props,null,M.mode,L),Lr(L,S),L.return=M,L;case H:return S=ic(S,M.mode,L),S.return=M,S;case ue:var V=S._init;return S=V(S._payload),W(M,S,L)}if(Ae(S)||se(S))return S=Ma(S,M.mode,L,null),S.return=M,S;if(typeof S.then=="function")return W(M,sl(S),L);if(S.$$typeof===Y)return W(M,Jo(M,S),L);cl(M,S)}return null}function N(M,S,L,V){var re=S!==null?S.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return re!==null?null:h(M,S,""+L,V);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case A:return L.key===re?y(M,S,L,V):null;case H:return L.key===re?E(M,S,L,V):null;case ue:return re=L._init,L=re(L._payload),N(M,S,L,V)}if(Ae(L)||se(L))return re!==null?null:G(M,S,L,V,null);if(typeof L.then=="function")return N(M,S,sl(L),V);if(L.$$typeof===Y)return N(M,S,Jo(M,L),V);cl(M,L)}return null}function O(M,S,L,V,re){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return M=M.get(L)||null,h(S,M,""+V,re);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case A:return M=M.get(V.key===null?L:V.key)||null,y(S,M,V,re);case H:return M=M.get(V.key===null?L:V.key)||null,E(S,M,V,re);case ue:var ze=V._init;return V=ze(V._payload),O(M,S,L,V,re)}if(Ae(V)||se(V))return M=M.get(L)||null,G(S,M,V,re,null);if(typeof V.then=="function")return O(M,S,L,sl(V),re);if(V.$$typeof===Y)return O(M,S,L,Jo(S,V),re);cl(S,V)}return null}function xe(M,S,L,V){for(var re=null,ze=null,pe=S,he=S=0,dt=null;pe!==null&&he<L.length;he++){pe.index>he?(dt=pe,pe=null):dt=pe.sibling;var Ee=N(M,pe,L[he],V);if(Ee===null){pe===null&&(pe=dt);break}e&&pe&&Ee.alternate===null&&t(M,pe),S=l(Ee,S,he),ze===null?re=Ee:ze.sibling=Ee,ze=Ee,pe=dt}if(he===L.length)return n(M,pe),Re&&Aa(M,he),re;if(pe===null){for(;he<L.length;he++)pe=W(M,L[he],V),pe!==null&&(S=l(pe,S,he),ze===null?re=pe:ze.sibling=pe,ze=pe);return Re&&Aa(M,he),re}for(pe=i(pe);he<L.length;he++)dt=O(pe,M,he,L[he],V),dt!==null&&(e&&dt.alternate!==null&&pe.delete(dt.key===null?he:dt.key),S=l(dt,S,he),ze===null?re=dt:ze.sibling=dt,ze=dt);return e&&pe.forEach(function(ca){return t(M,ca)}),Re&&Aa(M,he),re}function fe(M,S,L,V){if(L==null)throw Error(d(151));for(var re=null,ze=null,pe=S,he=S=0,dt=null,Ee=L.next();pe!==null&&!Ee.done;he++,Ee=L.next()){pe.index>he?(dt=pe,pe=null):dt=pe.sibling;var ca=N(M,pe,Ee.value,V);if(ca===null){pe===null&&(pe=dt);break}e&&pe&&ca.alternate===null&&t(M,pe),S=l(ca,S,he),ze===null?re=ca:ze.sibling=ca,ze=ca,pe=dt}if(Ee.done)return n(M,pe),Re&&Aa(M,he),re;if(pe===null){for(;!Ee.done;he++,Ee=L.next())Ee=W(M,Ee.value,V),Ee!==null&&(S=l(Ee,S,he),ze===null?re=Ee:ze.sibling=Ee,ze=Ee);return Re&&Aa(M,he),re}for(pe=i(pe);!Ee.done;he++,Ee=L.next())Ee=O(pe,M,he,Ee.value,V),Ee!==null&&(e&&Ee.alternate!==null&&pe.delete(Ee.key===null?he:Ee.key),S=l(Ee,S,he),ze===null?re=Ee:ze.sibling=Ee,ze=Ee);return e&&pe.forEach(function(Vg){return t(M,Vg)}),Re&&Aa(M,he),re}function He(M,S,L,V){if(typeof L=="object"&&L!==null&&L.type===T&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case A:e:{for(var re=L.key;S!==null;){if(S.key===re){if(re=L.type,re===T){if(S.tag===7){n(M,S.sibling),V=o(S,L.props.children),V.return=M,M=V;break e}}else if(S.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===ue&&Af(re)===S.type){n(M,S.sibling),V=o(S,L.props),Lr(V,L),V.return=M,M=V;break e}n(M,S);break}else t(M,S);S=S.sibling}L.type===T?(V=Ma(L.props.children,M.mode,V,L.key),V.return=M,M=V):(V=Vo(L.type,L.key,L.props,null,M.mode,V),Lr(V,L),V.return=M,M=V)}return p(M);case H:e:{for(re=L.key;S!==null;){if(S.key===re)if(S.tag===4&&S.stateNode.containerInfo===L.containerInfo&&S.stateNode.implementation===L.implementation){n(M,S.sibling),V=o(S,L.children||[]),V.return=M,M=V;break e}else{n(M,S);break}else t(M,S);S=S.sibling}V=ic(L,M.mode,V),V.return=M,M=V}return p(M);case ue:return re=L._init,L=re(L._payload),He(M,S,L,V)}if(Ae(L))return xe(M,S,L,V);if(se(L)){if(re=se(L),typeof re!="function")throw Error(d(150));return L=re.call(L),fe(M,S,L,V)}if(typeof L.then=="function")return He(M,S,sl(L),V);if(L.$$typeof===Y)return He(M,S,Jo(M,L),V);cl(M,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,S!==null&&S.tag===6?(n(M,S.sibling),V=o(S,L),V.return=M,M=V):(n(M,S),V=ac(L,M.mode,V),V.return=M,M=V),p(M)):n(M,S)}return function(M,S,L,V){try{Ar=0;var re=He(M,S,L,V);return yi=null,re}catch(pe){if(pe===vr||pe===Fo)throw pe;var ze=Et(29,pe,null,M.mode);return ze.lanes=V,ze.return=M,ze}finally{}}}var vi=Lf(!0),Ef=Lf(!1),Wt=Q(null),rn=null;function Zn(e){var t=e.alternate;te(rt,rt.current&1),te(Wt,e),rn===null&&(t===null||mi.current!==null||t.memoizedState!==null)&&(rn=e)}function Df(e){if(e.tag===22){if(te(rt,rt.current),te(Wt,e),rn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(rn=e)}}else Jn()}function Jn(){te(rt,rt.current),te(Wt,Wt.current)}function Tn(e){ee(Wt),rn===e&&(rn=null),ee(rt)}var rt=Q(0);function dl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||zd(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Pc(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:C({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _c={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Bt(),o=Vn(i);o.payload=t,n!=null&&(o.callback=n),t=Qn(e,o,i),t!==null&&(Ot(t,e,i),jr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Bt(),o=Vn(i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Qn(e,o,i),t!==null&&(Ot(t,e,i),jr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Bt(),i=Vn(n);i.tag=2,t!=null&&(i.callback=t),t=Qn(e,i,n),t!==null&&(Ot(t,e,n),jr(t,e,n))}};function Rf(e,t,n,i,o,l,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,l,p):t.prototype&&t.prototype.isPureReactComponent?!pr(n,i)||!pr(o,l):!0}function Nf(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&_c.enqueueReplaceState(t,t.state,null)}function Oa(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=C({},n));for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}var ul=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Bf(e){ul(e)}function Of(e){console.error(e)}function Pf(e){ul(e)}function pl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function _f(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function $c(e,t,n){return n=Vn(n),n.tag=3,n.payload={element:null},n.callback=function(){pl(e,t)},n}function $f(e){return e=Vn(e),e.tag=3,e}function Hf(e,t,n,i){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var l=i.value;e.payload=function(){return o(l)},e.callback=function(){_f(t,n,i)}}var p=n.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){_f(t,n,i),typeof o!="function"&&(ta===null?ta=new Set([this]):ta.add(this));var h=i.stack;this.componentDidCatch(i.value,{componentStack:h!==null?h:""})})}function Vx(e,t,n,i,o){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&gr(t,n,o,!0),n=Wt.current,n!==null){switch(n.tag){case 13:return rn===null?cd():n.alternate===null&&Fe===0&&(Fe=3),n.flags&=-257,n.flags|=65536,n.lanes=o,i===hc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),ud(e,i,o)),!1;case 22:return n.flags|=65536,i===hc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),ud(e,i,o)),!1}throw Error(d(435,n.tag))}return ud(e,i,o),cd(),!1}if(Re)return t=Wt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,i!==lc&&(e=Error(d(422),{cause:i}),xr(Yt(e,n)))):(i!==lc&&(t=Error(d(423),{cause:i}),xr(Yt(t,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,i=Yt(i,n),o=$c(e.stateNode,i,o),gc(e,o),Fe!==4&&(Fe=2)),!1;var l=Error(d(520),{cause:i});if(l=Yt(l,n),Pr===null?Pr=[l]:Pr.push(l),Fe!==4&&(Fe=2),t===null)return!0;i=Yt(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=$c(n.stateNode,i,e),gc(n,e),!1;case 1:if(t=n.type,l=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(ta===null||!ta.has(l))))return n.flags|=65536,o&=-o,n.lanes|=o,o=$f(o),Hf(o,e,n,i),gc(n,o),!1}n=n.return}while(n!==null);return!1}var Uf=Error(d(461)),st=!1;function ft(e,t,n,i){t.child=e===null?Ef(t,null,n,i):vi(t,e.child,n,i)}function qf(e,t,n,i,o){n=n.render;var l=t.ref;if("ref"in i){var p={};for(var h in i)h!=="ref"&&(p[h]=i[h])}else p=i;return Ra(t),i=jc(e,t,n,p,l,o),h=kc(),e!==null&&!st?(Sc(e,t,o),An(e,t,o)):(Re&&h&&rc(t),t.flags|=1,ft(e,t,i,o),t.child)}function Yf(e,t,n,i,o){if(e===null){var l=n.type;return typeof l=="function"&&!nc(l)&&l.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=l,Gf(e,t,l,i,o)):(e=Vo(n.type,null,i,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!Wc(e,o)){var p=l.memoizedProps;if(n=n.compare,n=n!==null?n:pr,n(p,i)&&e.ref===t.ref)return An(e,t,o)}return t.flags|=1,e=jn(l,i),e.ref=t.ref,e.return=t,t.child=e}function Gf(e,t,n,i,o){if(e!==null){var l=e.memoizedProps;if(pr(l,i)&&e.ref===t.ref)if(st=!1,t.pendingProps=i=l,Wc(e,o))(e.flags&131072)!==0&&(st=!0);else return t.lanes=e.lanes,An(e,t,o)}return Hc(e,t,n,i,o)}function Vf(e,t,n){var i=t.pendingProps,o=i.children,l=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if((t.flags&128)!==0){if(i=l!==null?l.baseLanes|n:n,e!==null){for(o=t.child=e.child,l=0;o!==null;)l=l|o.lanes|o.childLanes,o=o.sibling;t.childLanes=l&~i}else t.childLanes=0,t.child=null;return Qf(e,t,i,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Xo(t,l!==null?l.cachePool:null),l!==null?Yp(t,l):yc(),Df(t);else return t.lanes=t.childLanes=536870912,Qf(e,t,l!==null?l.baseLanes|n:n,n)}else l!==null?(Xo(t,l.cachePool),Yp(t,l),Jn(),t.memoizedState=null):(e!==null&&Xo(t,null),yc(),Jn());return ft(e,t,o,n),t.child}function Qf(e,t,n,i){var o=fc();return o=o===null?null:{parent:it._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},e!==null&&Xo(t,null),yc(),Df(t),e!==null&&gr(e,t,i,!0),null}function fl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(d(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Hc(e,t,n,i,o){return Ra(t),n=jc(e,t,n,i,void 0,o),i=kc(),e!==null&&!st?(Sc(e,t,o),An(e,t,o)):(Re&&i&&rc(t),t.flags|=1,ft(e,t,n,o),t.child)}function Wf(e,t,n,i,o,l){return Ra(t),t.updateQueue=null,n=Vp(t,i,n,o),Gp(e),i=kc(),e!==null&&!st?(Sc(e,t,l),An(e,t,l)):(Re&&i&&rc(t),t.flags|=1,ft(e,t,n,l),t.child)}function Zf(e,t,n,i,o){if(Ra(t),t.stateNode===null){var l=di,p=n.contextType;typeof p=="object"&&p!==null&&(l=bt(p)),l=new n(i,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=_c,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=i,l.state=t.memoizedState,l.refs={},mc(t),p=n.contextType,l.context=typeof p=="object"&&p!==null?bt(p):di,l.state=t.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(Pc(t,n,p,i),l.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(p=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),p!==l.state&&_c.enqueueReplaceState(l,l.state,null),Sr(t,i,l,o),kr(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){l=t.stateNode;var h=t.memoizedProps,y=Oa(n,h);l.props=y;var E=l.context,G=n.contextType;p=di,typeof G=="object"&&G!==null&&(p=bt(G));var W=n.getDerivedStateFromProps;G=typeof W=="function"||typeof l.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,G||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(h||E!==p)&&Nf(t,l,i,p),Gn=!1;var N=t.memoizedState;l.state=N,Sr(t,i,l,o),kr(),E=t.memoizedState,h||N!==E||Gn?(typeof W=="function"&&(Pc(t,n,W,i),E=t.memoizedState),(y=Gn||Rf(t,n,y,i,N,E,p))?(G||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=E),l.props=i,l.state=E,l.context=p,i=y):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{l=t.stateNode,xc(e,t),p=t.memoizedProps,G=Oa(n,p),l.props=G,W=t.pendingProps,N=l.context,E=n.contextType,y=di,typeof E=="object"&&E!==null&&(y=bt(E)),h=n.getDerivedStateFromProps,(E=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(p!==W||N!==y)&&Nf(t,l,i,y),Gn=!1,N=t.memoizedState,l.state=N,Sr(t,i,l,o),kr();var O=t.memoizedState;p!==W||N!==O||Gn||e!==null&&e.dependencies!==null&&Zo(e.dependencies)?(typeof h=="function"&&(Pc(t,n,h,i),O=t.memoizedState),(G=Gn||Rf(t,n,G,i,N,O,y)||e!==null&&e.dependencies!==null&&Zo(e.dependencies))?(E||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,O,y),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,O,y)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||p===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=O),l.props=i,l.state=O,l.context=y,i=G):(typeof l.componentDidUpdate!="function"||p===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),i=!1)}return l=i,fl(e,t),i=(t.flags&128)!==0,l||i?(l=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&i?(t.child=vi(t,e.child,null,o),t.child=vi(t,null,n,o)):ft(e,t,n,o),t.memoizedState=l.state,e=t.child):e=An(e,t,o),e}function Jf(e,t,n,i){return mr(),t.flags|=256,ft(e,t,n,i),t.child}var Uc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qc(e){return{baseLanes:e,cachePool:Bp()}}function Yc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Zt),e}function Xf(e,t,n){var i=t.pendingProps,o=!1,l=(t.flags&128)!==0,p;if((p=l)||(p=e!==null&&e.memoizedState===null?!1:(rt.current&2)!==0),p&&(o=!0,t.flags&=-129),p=(t.flags&32)!==0,t.flags&=-33,e===null){if(Re){if(o?Zn(t):Jn(),Re){var h=Xe,y;if(y=h){e:{for(y=h,h=an;y.nodeType!==8;){if(!h){h=null;break e}if(y=tn(y.nextSibling),y===null){h=null;break e}}h=y}h!==null?(t.memoizedState={dehydrated:h,treeContext:Ta!==null?{id:kn,overflow:Sn}:null,retryLane:536870912,hydrationErrors:null},y=Et(18,null,null,0),y.stateNode=h,y.return=t,t.child=y,wt=t,Xe=null,y=!0):y=!1}y||Ea(t)}if(h=t.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return zd(h)?t.lanes=32:t.lanes=536870912,null;Tn(t)}return h=i.children,i=i.fallback,o?(Jn(),o=t.mode,h=hl({mode:"hidden",children:h},o),i=Ma(i,o,n,null),h.return=t,i.return=t,h.sibling=i,t.child=h,o=t.child,o.memoizedState=qc(n),o.childLanes=Yc(e,p,n),t.memoizedState=Uc,i):(Zn(t),Gc(t,h))}if(y=e.memoizedState,y!==null&&(h=y.dehydrated,h!==null)){if(l)t.flags&256?(Zn(t),t.flags&=-257,t=Vc(e,t,n)):t.memoizedState!==null?(Jn(),t.child=e.child,t.flags|=128,t=null):(Jn(),o=i.fallback,h=t.mode,i=hl({mode:"visible",children:i.children},h),o=Ma(o,h,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,vi(t,e.child,null,n),i=t.child,i.memoizedState=qc(n),i.childLanes=Yc(e,p,n),t.memoizedState=Uc,t=o);else if(Zn(t),zd(h)){if(p=h.nextSibling&&h.nextSibling.dataset,p)var E=p.dgst;p=E,i=Error(d(419)),i.stack="",i.digest=p,xr({value:i,source:null,stack:null}),t=Vc(e,t,n)}else if(st||gr(e,t,n,!1),p=(n&e.childLanes)!==0,st||p){if(p=Ye,p!==null&&(i=n&-n,i=(i&42)!==0?1:_(i),i=(i&(p.suspendedLanes|n))!==0?0:i,i!==0&&i!==y.retryLane))throw y.retryLane=i,ci(e,i),Ot(p,e,i),Uf;h.data==="$?"||cd(),t=Vc(e,t,n)}else h.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=y.treeContext,Xe=tn(h.nextSibling),wt=t,Re=!0,La=null,an=!1,e!==null&&(Vt[Qt++]=kn,Vt[Qt++]=Sn,Vt[Qt++]=Ta,kn=e.id,Sn=e.overflow,Ta=t),t=Gc(t,i.children),t.flags|=4096);return t}return o?(Jn(),o=i.fallback,h=t.mode,y=e.child,E=y.sibling,i=jn(y,{mode:"hidden",children:i.children}),i.subtreeFlags=y.subtreeFlags&65011712,E!==null?o=jn(E,o):(o=Ma(o,h,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,i=o,o=t.child,h=e.child.memoizedState,h===null?h=qc(n):(y=h.cachePool,y!==null?(E=it._currentValue,y=y.parent!==E?{parent:E,pool:E}:y):y=Bp(),h={baseLanes:h.baseLanes|n,cachePool:y}),o.memoizedState=h,o.childLanes=Yc(e,p,n),t.memoizedState=Uc,i):(Zn(t),n=e.child,e=n.sibling,n=jn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(p=t.deletions,p===null?(t.deletions=[e],t.flags|=16):p.push(e)),t.child=n,t.memoizedState=null,n)}function Gc(e,t){return t=hl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function hl(e,t){return e=Et(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Vc(e,t,n){return vi(t,e.child,null,n),e=Gc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ff(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),cc(e.return,t,n)}function Qc(e,t,n,i,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=i,l.tail=n,l.tailMode=o)}function Kf(e,t,n){var i=t.pendingProps,o=i.revealOrder,l=i.tail;if(ft(e,t,i.children,n),i=rt.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ff(e,n,t);else if(e.tag===19)Ff(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(te(rt,i),o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&dl(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Qc(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&dl(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Qc(t,!0,n,null,l);break;case"together":Qc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function An(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ea|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(gr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,n=jn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Zo(e)))}function Qx(e,t,n){switch(t.tag){case 3:ne(t,t.stateNode.containerInfo),Yn(t,it,e.memoizedState.cache),mr();break;case 27:case 5:Ge(t);break;case 4:ne(t,t.stateNode.containerInfo);break;case 10:Yn(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Zn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Xf(e,t,n):(Zn(t),e=An(e,t,n),e!==null?e.sibling:null);Zn(t);break;case 19:var o=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(gr(e,t,n,!1),i=(n&t.childLanes)!==0),o){if(i)return Kf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),te(rt,rt.current),i)break;return null;case 22:case 23:return t.lanes=0,Vf(e,t,n);case 24:Yn(t,it,e.memoizedState.cache)}return An(e,t,n)}function If(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)st=!0;else{if(!Wc(e,n)&&(t.flags&128)===0)return st=!1,Qx(e,t,n);st=(e.flags&131072)!==0}else st=!1,Re&&(t.flags&1048576)!==0&&Tp(t,Wo,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var i=t.elementType,o=i._init;if(i=o(i._payload),t.type=i,typeof i=="function")nc(i)?(e=Oa(i,e),t.tag=1,t=Zf(null,t,i,e,n)):(t.tag=0,t=Hc(null,t,i,e,n));else{if(i!=null){if(o=i.$$typeof,o===F){t.tag=11,t=qf(null,t,i,e,n);break e}else if(o===Z){t.tag=14,t=Yf(null,t,i,e,n);break e}}throw t=Be(i)||i,Error(d(306,t,""))}}return t;case 0:return Hc(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,o=Oa(i,t.pendingProps),Zf(e,t,i,o,n);case 3:e:{if(ne(t,t.stateNode.containerInfo),e===null)throw Error(d(387));i=t.pendingProps;var l=t.memoizedState;o=l.element,xc(e,t),Sr(t,i,null,n);var p=t.memoizedState;if(i=p.cache,Yn(t,it,i),i!==l.cache&&dc(t,[it],n,!0),kr(),i=p.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:p.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=Jf(e,t,i,n);break e}else if(i!==o){o=Yt(Error(d(424)),t),xr(o),t=Jf(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Xe=tn(e.firstChild),wt=t,Re=!0,La=null,an=!0,n=Ef(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(mr(),i===o){t=An(e,t,n);break e}ft(e,t,i,n)}t=t.child}return t;case 26:return fl(e,t),e===null?(n=am(t.type,null,t.pendingProps,null))?t.memoizedState=n:Re||(n=t.type,e=t.pendingProps,i=Tl(q.current).createElement(n),i[ye]=t,i[we]=e,mt(i,n,e),lt(i),t.stateNode=i):t.memoizedState=am(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ge(t),e===null&&Re&&(i=t.stateNode=em(t.type,t.pendingProps,q.current),wt=t,an=!0,o=Xe,ia(t.type)?(Md=o,Xe=tn(i.firstChild)):Xe=o),ft(e,t,t.pendingProps.children,n),fl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Re&&((o=i=Xe)&&(i=vg(i,t.type,t.pendingProps,an),i!==null?(t.stateNode=i,wt=t,Xe=tn(i.firstChild),an=!1,o=!0):o=!1),o||Ea(t)),Ge(t),o=t.type,l=t.pendingProps,p=e!==null?e.memoizedProps:null,i=l.children,kd(o,l)?i=null:p!==null&&kd(o,p)&&(t.flags|=32),t.memoizedState!==null&&(o=jc(e,t,_x,null,null,n),Qr._currentValue=o),fl(e,t),ft(e,t,i,n),t.child;case 6:return e===null&&Re&&((e=n=Xe)&&(n=wg(n,t.pendingProps,an),n!==null?(t.stateNode=n,wt=t,Xe=null,e=!0):e=!1),e||Ea(t)),null;case 13:return Xf(e,t,n);case 4:return ne(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=vi(t,null,i,n):ft(e,t,i,n),t.child;case 11:return qf(e,t,t.type,t.pendingProps,n);case 7:return ft(e,t,t.pendingProps,n),t.child;case 8:return ft(e,t,t.pendingProps.children,n),t.child;case 12:return ft(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Yn(t,t.type,i.value),ft(e,t,i.children,n),t.child;case 9:return o=t.type._context,i=t.pendingProps.children,Ra(t),o=bt(o),i=i(o),t.flags|=1,ft(e,t,i,n),t.child;case 14:return Yf(e,t,t.type,t.pendingProps,n);case 15:return Gf(e,t,t.type,t.pendingProps,n);case 19:return Kf(e,t,n);case 31:return i=t.pendingProps,n=t.mode,i={mode:i.mode,children:i.children},e===null?(n=hl(i,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=jn(e.child,i),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Vf(e,t,n);case 24:return Ra(t),i=bt(it),e===null?(o=fc(),o===null&&(o=Ye,l=uc(),o.pooledCache=l,l.refCount++,l!==null&&(o.pooledCacheLanes|=n),o=l),t.memoizedState={parent:i,cache:o},mc(t),Yn(t,it,o)):((e.lanes&n)!==0&&(xc(e,t),Sr(t,null,null,n),kr()),o=e.memoizedState,l=t.memoizedState,o.parent!==i?(o={parent:i,cache:i},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),Yn(t,it,i)):(i=l.cache,Yn(t,it,i),i!==o.cache&&dc(t,[it],n,!0))),ft(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}function Ln(e){e.flags|=4}function eh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!sm(t)){if(t=Wt.current,t!==null&&((Le&4194048)===Le?rn!==null:(Le&62914560)!==Le&&(Le&536870912)===0||t!==rn))throw wr=hc,Op;e.flags|=8192}}function ml(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Mo():536870912,e.lanes|=t,Si|=t)}function Er(e,t){if(!Re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags&65011712,i|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Wx(e,t,n){var i=t.pendingProps;switch(oc(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return Ze(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),zn(it),De(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(hr(t)?Ln(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ep())),Ze(t),null;case 26:return n=t.memoizedState,e===null?(Ln(t),n!==null?(Ze(t),eh(t,n)):(Ze(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Ln(t),Ze(t),eh(t,n)):(Ze(t),t.flags&=-16777217):(e.memoizedProps!==i&&Ln(t),Ze(t),t.flags&=-16777217),null;case 27:Ve(t),n=q.current;var o=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ln(t);else{if(!i){if(t.stateNode===null)throw Error(d(166));return Ze(t),null}e=ce.current,hr(t)?Ap(t):(e=em(o,i,n),t.stateNode=e,Ln(t))}return Ze(t),null;case 5:if(Ve(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ln(t);else{if(!i){if(t.stateNode===null)throw Error(d(166));return Ze(t),null}if(e=ce.current,hr(t))Ap(t);else{switch(o=Tl(q.current),e){case 1:e=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?o.createElement("select",{is:i.is}):o.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?o.createElement(n,{is:i.is}):o.createElement(n)}}e[ye]=t,e[we]=i;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=e;e:switch(mt(e,n,i),n){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Ln(t)}}return Ze(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Ln(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(d(166));if(e=q.current,hr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,o=wt,o!==null)switch(o.tag){case 27:case 5:i=o.memoizedProps}e[ye]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Wh(e.nodeValue,n)),e||Ea(t)}else e=Tl(e).createTextNode(i),e[ye]=t,t.stateNode=e}return Ze(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=hr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!o)throw Error(d(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(d(317));o[ye]=t}else mr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ze(t),o=!1}else o=Ep(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(Tn(t),t):(Tn(t),null)}if(Tn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=i!==null,e=e!==null&&e.memoizedState!==null,n){i=t.child,o=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(o=i.alternate.memoizedState.cachePool.pool);var l=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==o&&(i.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),ml(t,t.updateQueue),Ze(t),null;case 4:return De(),e===null&&bd(t.stateNode.containerInfo),Ze(t),null;case 10:return zn(t.type),Ze(t),null;case 19:if(ee(rt),o=t.memoizedState,o===null)return Ze(t),null;if(i=(t.flags&128)!==0,l=o.rendering,l===null)if(i)Er(o,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=dl(e),l!==null){for(t.flags|=128,Er(o,!1),e=l.updateQueue,t.updateQueue=e,ml(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Mp(n,e),n=n.sibling;return te(rt,rt.current&1|2),t.child}e=e.sibling}o.tail!==null&&et()>bl&&(t.flags|=128,i=!0,Er(o,!1),t.lanes=4194304)}else{if(!i)if(e=dl(l),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,ml(t,e),Er(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Re)return Ze(t),null}else 2*et()-o.renderingStartTime>bl&&n!==536870912&&(t.flags|=128,i=!0,Er(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(e=o.last,e!==null?e.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=et(),t.sibling=null,e=rt.current,te(rt,i?e&1|2:e&1),t):(Ze(t),null);case 22:case 23:return Tn(t),vc(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),n=t.updateQueue,n!==null&&ml(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&ee(Na),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),zn(it),Ze(t),null;case 25:return null;case 30:return null}throw Error(d(156,t.tag))}function Zx(e,t){switch(oc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zn(it),De(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ve(t),null;case 13:if(Tn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));mr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(rt),null;case 4:return De(),null;case 10:return zn(t.type),null;case 22:case 23:return Tn(t),vc(),e!==null&&ee(Na),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return zn(it),null;case 25:return null;default:return null}}function th(e,t){switch(oc(t),t.tag){case 3:zn(it),De();break;case 26:case 27:case 5:Ve(t);break;case 4:De();break;case 13:Tn(t);break;case 19:ee(rt);break;case 10:zn(t.type);break;case 22:case 23:Tn(t),vc(),e!==null&&ee(Na);break;case 24:zn(it)}}function Dr(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var o=i.next;n=o;do{if((n.tag&e)===e){i=void 0;var l=n.create,p=n.inst;i=l(),p.destroy=i}n=n.next}while(n!==o)}}catch(h){Ue(t,t.return,h)}}function Xn(e,t,n){try{var i=t.updateQueue,o=i!==null?i.lastEffect:null;if(o!==null){var l=o.next;i=l;do{if((i.tag&e)===e){var p=i.inst,h=p.destroy;if(h!==void 0){p.destroy=void 0,o=t;var y=n,E=h;try{E()}catch(G){Ue(o,y,G)}}}i=i.next}while(i!==l)}}catch(G){Ue(t,t.return,G)}}function nh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{qp(t,n)}catch(i){Ue(e,e.return,i)}}}function ah(e,t,n){n.props=Oa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Ue(e,t,i)}}function Rr(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){Ue(e,t,o)}}function on(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(o){Ue(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){Ue(e,t,o)}else n.current=null}function ih(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(o){Ue(e,e.return,o)}}function Zc(e,t,n){try{var i=e.stateNode;mg(i,e.type,n,t),i[we]=t}catch(o){Ue(e,e.return,o)}}function rh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ia(e.type)||e.tag===4}function Jc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ia(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ml));else if(i!==4&&(i===27&&ia(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xc(e,t,n),e=e.sibling;e!==null;)Xc(e,t,n),e=e.sibling}function xl(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&ia(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(xl(e,t,n),e=e.sibling;e!==null;)xl(e,t,n),e=e.sibling}function oh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);mt(t,i,n),t[ye]=e,t[we]=n}catch(l){Ue(e,e.return,l)}}var En=!1,Ie=!1,Fc=!1,lh=typeof WeakSet=="function"?WeakSet:Set,ct=null;function Jx(e,t){if(e=e.containerInfo,wd=Nl,e=gp(e),Js(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var o=i.anchorOffset,l=i.focusNode;i=i.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var p=0,h=-1,y=-1,E=0,G=0,W=e,N=null;t:for(;;){for(var O;W!==n||o!==0&&W.nodeType!==3||(h=p+o),W!==l||i!==0&&W.nodeType!==3||(y=p+i),W.nodeType===3&&(p+=W.nodeValue.length),(O=W.firstChild)!==null;)N=W,W=O;for(;;){if(W===e)break t;if(N===n&&++E===o&&(h=p),N===l&&++G===i&&(y=p),(O=W.nextSibling)!==null)break;W=N,N=W.parentNode}W=O}n=h===-1||y===-1?null:{start:h,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(jd={focusedElem:e,selectionRange:n},Nl=!1,ct=t;ct!==null;)if(t=ct,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,ct=e;else for(;ct!==null;){switch(t=ct,l=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,n=t,o=l.memoizedProps,l=l.memoizedState,i=n.stateNode;try{var xe=Oa(n.type,o,n.elementType===n.type);e=i.getSnapshotBeforeUpdate(xe,l),i.__reactInternalSnapshotBeforeUpdate=e}catch(fe){Ue(n,n.return,fe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Cd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Cd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=t.sibling,e!==null){e.return=t.return,ct=e;break}ct=t.return}}function sh(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Fn(e,n),i&4&&Dr(5,n);break;case 1:if(Fn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(p){Ue(n,n.return,p)}else{var o=Oa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(p){Ue(n,n.return,p)}}i&64&&nh(n),i&512&&Rr(n,n.return);break;case 3:if(Fn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{qp(e,t)}catch(p){Ue(n,n.return,p)}}break;case 27:t===null&&i&4&&oh(n);case 26:case 5:Fn(e,n),t===null&&i&4&&ih(n),i&512&&Rr(n,n.return);break;case 12:Fn(e,n);break;case 13:Fn(e,n),i&4&&uh(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=ig.bind(null,n),jg(e,n))));break;case 22:if(i=n.memoizedState!==null||En,!i){t=t!==null&&t.memoizedState!==null||Ie,o=En;var l=Ie;En=i,(Ie=t)&&!l?Kn(e,n,(n.subtreeFlags&8772)!==0):Fn(e,n),En=o,Ie=l}break;case 30:break;default:Fn(e,n)}}function ch(e){var t=e.alternate;t!==null&&(e.alternate=null,ch(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ls(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,Ct=!1;function Dn(e,t,n){for(n=n.child;n!==null;)dh(e,t,n),n=n.sibling}function dh(e,t,n){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(ya,n)}catch{}switch(n.tag){case 26:Ie||on(n,t),Dn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ie||on(n,t);var i=We,o=Ct;ia(n.type)&&(We=n.stateNode,Ct=!1),Dn(e,t,n),qr(n.stateNode),We=i,Ct=o;break;case 5:Ie||on(n,t);case 6:if(i=We,o=Ct,We=null,Dn(e,t,n),We=i,Ct=o,We!==null)if(Ct)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(n.stateNode)}catch(l){Ue(n,t,l)}else try{We.removeChild(n.stateNode)}catch(l){Ue(n,t,l)}break;case 18:We!==null&&(Ct?(e=We,Kh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Xr(e)):Kh(We,n.stateNode));break;case 4:i=We,o=Ct,We=n.stateNode.containerInfo,Ct=!0,Dn(e,t,n),We=i,Ct=o;break;case 0:case 11:case 14:case 15:Ie||Xn(2,n,t),Ie||Xn(4,n,t),Dn(e,t,n);break;case 1:Ie||(on(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&ah(n,t,i)),Dn(e,t,n);break;case 21:Dn(e,t,n);break;case 22:Ie=(i=Ie)||n.memoizedState!==null,Dn(e,t,n),Ie=i;break;default:Dn(e,t,n)}}function uh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Xr(e)}catch(n){Ue(t,t.return,n)}}function Xx(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new lh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new lh),t;default:throw Error(d(435,e.tag))}}function Kc(e,t){var n=Xx(e);t.forEach(function(i){var o=rg.bind(null,e,i);n.has(i)||(n.add(i),i.then(o,o))})}function Dt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var o=n[i],l=e,p=t,h=p;e:for(;h!==null;){switch(h.tag){case 27:if(ia(h.type)){We=h.stateNode,Ct=!1;break e}break;case 5:We=h.stateNode,Ct=!1;break e;case 3:case 4:We=h.stateNode.containerInfo,Ct=!0;break e}h=h.return}if(We===null)throw Error(d(160));dh(l,p,o),We=null,Ct=!1,l=o.alternate,l!==null&&(l.return=null),o.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)ph(t,e),t=t.sibling}var en=null;function ph(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Dt(t,e),Rt(e),i&4&&(Xn(3,e,e.return),Dr(3,e),Xn(5,e,e.return));break;case 1:Dt(t,e),Rt(e),i&512&&(Ie||n===null||on(n,n.return)),i&64&&En&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var o=en;if(Dt(t,e),Rt(e),i&512&&(Ie||n===null||on(n,n.return)),i&4){var l=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(i){case"title":l=o.getElementsByTagName("title")[0],(!l||l[ar]||l[ye]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=o.createElement(i),o.head.insertBefore(l,o.querySelector("head > title"))),mt(l,i,n),l[ye]=e,lt(l),i=l;break e;case"link":var p=om("link","href",o).get(i+(n.href||""));if(p){for(var h=0;h<p.length;h++)if(l=p[h],l.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&l.getAttribute("rel")===(n.rel==null?null:n.rel)&&l.getAttribute("title")===(n.title==null?null:n.title)&&l.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){p.splice(h,1);break t}}l=o.createElement(i),mt(l,i,n),o.head.appendChild(l);break;case"meta":if(p=om("meta","content",o).get(i+(n.content||""))){for(h=0;h<p.length;h++)if(l=p[h],l.getAttribute("content")===(n.content==null?null:""+n.content)&&l.getAttribute("name")===(n.name==null?null:n.name)&&l.getAttribute("property")===(n.property==null?null:n.property)&&l.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&l.getAttribute("charset")===(n.charSet==null?null:n.charSet)){p.splice(h,1);break t}}l=o.createElement(i),mt(l,i,n),o.head.appendChild(l);break;default:throw Error(d(468,i))}l[ye]=e,lt(l),i=l}e.stateNode=i}else lm(o,e.type,e.stateNode);else e.stateNode=rm(o,i,e.memoizedProps);else l!==i?(l===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):l.count--,i===null?lm(o,e.type,e.stateNode):rm(o,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Zc(e,e.memoizedProps,n.memoizedProps)}break;case 27:Dt(t,e),Rt(e),i&512&&(Ie||n===null||on(n,n.return)),n!==null&&i&4&&Zc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Dt(t,e),Rt(e),i&512&&(Ie||n===null||on(n,n.return)),e.flags&32){o=e.stateNode;try{ni(o,"")}catch(O){Ue(e,e.return,O)}}i&4&&e.stateNode!=null&&(o=e.memoizedProps,Zc(e,o,n!==null?n.memoizedProps:o)),i&1024&&(Fc=!0);break;case 6:if(Dt(t,e),Rt(e),i&4){if(e.stateNode===null)throw Error(d(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(O){Ue(e,e.return,O)}}break;case 3:if(El=null,o=en,en=Al(t.containerInfo),Dt(t,e),en=o,Rt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Xr(t.containerInfo)}catch(O){Ue(e,e.return,O)}Fc&&(Fc=!1,fh(e));break;case 4:i=en,en=Al(e.stateNode.containerInfo),Dt(t,e),Rt(e),en=i;break;case 12:Dt(t,e),Rt(e);break;case 13:Dt(t,e),Rt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(id=et()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Kc(e,i)));break;case 22:o=e.memoizedState!==null;var y=n!==null&&n.memoizedState!==null,E=En,G=Ie;if(En=E||o,Ie=G||y,Dt(t,e),Ie=G,En=E,Rt(e),i&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(n===null||y||En||Ie||Pa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){y=n=t;try{if(l=y.stateNode,o)p=l.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{h=y.stateNode;var W=y.memoizedProps.style,N=W!=null&&W.hasOwnProperty("display")?W.display:null;h.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(O){Ue(y,y.return,O)}}}else if(t.tag===6){if(n===null){y=t;try{y.stateNode.nodeValue=o?"":y.memoizedProps}catch(O){Ue(y,y.return,O)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Kc(e,n))));break;case 19:Dt(t,e),Rt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Kc(e,i)));break;case 30:break;case 21:break;default:Dt(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(rh(i)){n=i;break}i=i.return}if(n==null)throw Error(d(160));switch(n.tag){case 27:var o=n.stateNode,l=Jc(e);xl(e,l,o);break;case 5:var p=n.stateNode;n.flags&32&&(ni(p,""),n.flags&=-33);var h=Jc(e);xl(e,h,p);break;case 3:case 4:var y=n.stateNode.containerInfo,E=Jc(e);Xc(e,E,y);break;default:throw Error(d(161))}}catch(G){Ue(e,e.return,G)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;fh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Fn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sh(e,t.alternate,t),t=t.sibling}function Pa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Xn(4,t,t.return),Pa(t);break;case 1:on(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&ah(t,t.return,n),Pa(t);break;case 27:qr(t.stateNode);case 26:case 5:on(t,t.return),Pa(t);break;case 22:t.memoizedState===null&&Pa(t);break;case 30:Pa(t);break;default:Pa(t)}e=e.sibling}}function Kn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,o=e,l=t,p=l.flags;switch(l.tag){case 0:case 11:case 15:Kn(o,l,n),Dr(4,l);break;case 1:if(Kn(o,l,n),i=l,o=i.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(E){Ue(i,i.return,E)}if(i=l,o=i.updateQueue,o!==null){var h=i.stateNode;try{var y=o.shared.hiddenCallbacks;if(y!==null)for(o.shared.hiddenCallbacks=null,o=0;o<y.length;o++)Up(y[o],h)}catch(E){Ue(i,i.return,E)}}n&&p&64&&nh(l),Rr(l,l.return);break;case 27:oh(l);case 26:case 5:Kn(o,l,n),n&&i===null&&p&4&&ih(l),Rr(l,l.return);break;case 12:Kn(o,l,n);break;case 13:Kn(o,l,n),n&&p&4&&uh(o,l);break;case 22:l.memoizedState===null&&Kn(o,l,n),Rr(l,l.return);break;case 30:break;default:Kn(o,l,n)}t=t.sibling}}function Ic(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&br(n))}function ed(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&br(e))}function ln(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)hh(e,t,n,i),t=t.sibling}function hh(e,t,n,i){var o=t.flags;switch(t.tag){case 0:case 11:case 15:ln(e,t,n,i),o&2048&&Dr(9,t);break;case 1:ln(e,t,n,i);break;case 3:ln(e,t,n,i),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&br(e)));break;case 12:if(o&2048){ln(e,t,n,i),e=t.stateNode;try{var l=t.memoizedProps,p=l.id,h=l.onPostCommit;typeof h=="function"&&h(p,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(y){Ue(t,t.return,y)}}else ln(e,t,n,i);break;case 13:ln(e,t,n,i);break;case 23:break;case 22:l=t.stateNode,p=t.alternate,t.memoizedState!==null?l._visibility&2?ln(e,t,n,i):Nr(e,t):l._visibility&2?ln(e,t,n,i):(l._visibility|=2,wi(e,t,n,i,(t.subtreeFlags&10256)!==0)),o&2048&&Ic(p,t);break;case 24:ln(e,t,n,i),o&2048&&ed(t.alternate,t);break;default:ln(e,t,n,i)}}function wi(e,t,n,i,o){for(o=o&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var l=e,p=t,h=n,y=i,E=p.flags;switch(p.tag){case 0:case 11:case 15:wi(l,p,h,y,o),Dr(8,p);break;case 23:break;case 22:var G=p.stateNode;p.memoizedState!==null?G._visibility&2?wi(l,p,h,y,o):Nr(l,p):(G._visibility|=2,wi(l,p,h,y,o)),o&&E&2048&&Ic(p.alternate,p);break;case 24:wi(l,p,h,y,o),o&&E&2048&&ed(p.alternate,p);break;default:wi(l,p,h,y,o)}t=t.sibling}}function Nr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,o=i.flags;switch(i.tag){case 22:Nr(n,i),o&2048&&Ic(i.alternate,i);break;case 24:Nr(n,i),o&2048&&ed(i.alternate,i);break;default:Nr(n,i)}t=t.sibling}}var Br=8192;function ji(e){if(e.subtreeFlags&Br)for(e=e.child;e!==null;)mh(e),e=e.sibling}function mh(e){switch(e.tag){case 26:ji(e),e.flags&Br&&e.memoizedState!==null&&Bg(en,e.memoizedState,e.memoizedProps);break;case 5:ji(e);break;case 3:case 4:var t=en;en=Al(e.stateNode.containerInfo),ji(e),en=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Br,Br=16777216,ji(e),Br=t):ji(e));break;default:ji(e)}}function xh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Or(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ct=i,bh(i,e)}xh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)gh(e),e=e.sibling}function gh(e){switch(e.tag){case 0:case 11:case 15:Or(e),e.flags&2048&&Xn(9,e,e.return);break;case 3:Or(e);break;case 12:Or(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,gl(e)):Or(e);break;default:Or(e)}}function gl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ct=i,bh(i,e)}xh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Xn(8,t,t.return),gl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,gl(t));break;default:gl(t)}e=e.sibling}}function bh(e,t){for(;ct!==null;){var n=ct;switch(n.tag){case 0:case 11:case 15:Xn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:br(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,ct=i;else e:for(n=e;ct!==null;){i=ct;var o=i.sibling,l=i.return;if(ch(i),i===n){ct=null;break e}if(o!==null){o.return=l,ct=o;break e}ct=l}}}var Fx={getCacheForType:function(e){var t=bt(it),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Kx=typeof WeakMap=="function"?WeakMap:Map,Oe=0,Ye=null,Me=null,Le=0,Pe=0,Nt=null,In=!1,ki=!1,td=!1,Rn=0,Fe=0,ea=0,_a=0,nd=0,Zt=0,Si=0,Pr=null,zt=null,ad=!1,id=0,bl=1/0,yl=null,ta=null,ht=0,na=null,Ci=null,zi=0,rd=0,od=null,yh=null,_r=0,ld=null;function Bt(){if((Oe&2)!==0&&Le!==0)return Le&-Le;if($.T!==null){var e=fi;return e!==0?e:hd()}return Ce()}function vh(){Zt===0&&(Zt=(Le&536870912)===0||Re?va():536870912);var e=Wt.current;return e!==null&&(e.flags|=32),Zt}function Ot(e,t,n){(e===Ye&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&(Mi(e,0),aa(e,Le,Zt,!1)),wa(e,n),((Oe&2)===0||e!==Ye)&&(e===Ye&&((Oe&2)===0&&(_a|=n),Fe===4&&aa(e,Le,Zt,!1)),sn(e))}function wh(e,t,n){if((Oe&6)!==0)throw Error(d(327));var i=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Un(e,t),o=i?tg(e,t):dd(e,t,!0),l=i;do{if(o===0){ki&&!i&&aa(e,t,0,!1);break}else{if(n=e.current.alternate,l&&!Ix(n)){o=dd(e,t,!1),l=!1;continue}if(o===2){if(l=t,e.errorRecoveryDisabledLanes&l)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){t=p;e:{var h=e;o=Pr;var y=h.current.memoizedState.isDehydrated;if(y&&(Mi(h,p).flags|=256),p=dd(h,p,!1),p!==2){if(td&&!y){h.errorRecoveryDisabledLanes|=l,_a|=l,o=4;break e}l=zt,zt=o,l!==null&&(zt===null?zt=l:zt.push.apply(zt,l))}o=p}if(l=!1,o!==2)continue}}if(o===1){Mi(e,0),aa(e,t,0,!0);break}e:{switch(i=e,l=o,l){case 0:case 1:throw Error(d(345));case 4:if((t&4194048)!==t)break;case 6:aa(i,t,Zt,!In);break e;case 2:zt=null;break;case 3:case 5:break;default:throw Error(d(329))}if((t&62914560)===t&&(o=id+300-et(),10<o)){if(aa(i,t,Zt,!In),Hn(i,0,!0)!==0)break e;i.timeoutHandle=Xh(jh.bind(null,i,n,zt,yl,ad,t,Zt,_a,Si,In,l,2,-0,0),o);break e}jh(i,n,zt,yl,ad,t,Zt,_a,Si,In,l,0,-0,0)}}break}while(!0);sn(e)}function jh(e,t,n,i,o,l,p,h,y,E,G,W,N,O){if(e.timeoutHandle=-1,W=t.subtreeFlags,(W&8192||(W&16785408)===16785408)&&(Vr={stylesheets:null,count:0,unsuspend:Ng},mh(t),W=Og(),W!==null)){e.cancelPendingCommit=W(Ah.bind(null,e,t,l,n,i,o,p,h,y,G,1,N,O)),aa(e,l,p,!E);return}Ah(e,t,l,n,i,o,p,h,y)}function Ix(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var o=n[i],l=o.getSnapshot;o=o.value;try{if(!Lt(l(),o))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function aa(e,t,n,i){t&=~nd,t&=~_a,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var o=t;0<o;){var l=31-gt(o),p=1<<l;i[l]=-1,o&=~p}n!==0&&nr(e,n,t)}function vl(){return(Oe&6)===0?($r(0),!1):!0}function sd(){if(Me!==null){if(Pe===0)var e=Me.return;else e=Me,Cn=Da=null,Cc(e),yi=null,Ar=0,e=Me;for(;e!==null;)th(e.alternate,e),e=e.return;Me=null}}function Mi(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,gg(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),sd(),Ye=e,Me=n=jn(e.current,null),Le=t,Pe=0,Nt=null,In=!1,ki=Un(e,t),td=!1,Si=Zt=nd=_a=ea=Fe=0,zt=Pr=null,ad=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var o=31-gt(i),l=1<<o;t|=e[o],i&=~l}return Rn=t,qo(),n}function kh(e,t){Se=null,$.H=ll,t===vr||t===Fo?(t=$p(),Pe=3):t===Op?(t=$p(),Pe=4):Pe=t===Uf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Nt=t,Me===null&&(Fe=1,pl(e,Yt(t,e.current)))}function Sh(){var e=$.H;return $.H=ll,e===null?ll:e}function Ch(){var e=$.A;return $.A=Fx,e}function cd(){Fe=4,In||(Le&4194048)!==Le&&Wt.current!==null||(ki=!0),(ea&134217727)===0&&(_a&134217727)===0||Ye===null||aa(Ye,Le,Zt,!1)}function dd(e,t,n){var i=Oe;Oe|=2;var o=Sh(),l=Ch();(Ye!==e||Le!==t)&&(yl=null,Mi(e,t)),t=!1;var p=Fe;e:do try{if(Pe!==0&&Me!==null){var h=Me,y=Nt;switch(Pe){case 8:sd(),p=6;break e;case 3:case 2:case 9:case 6:Wt.current===null&&(t=!0);var E=Pe;if(Pe=0,Nt=null,Ti(e,h,y,E),n&&ki){p=0;break e}break;default:E=Pe,Pe=0,Nt=null,Ti(e,h,y,E)}}eg(),p=Fe;break}catch(G){kh(e,G)}while(!0);return t&&e.shellSuspendCounter++,Cn=Da=null,Oe=i,$.H=o,$.A=l,Me===null&&(Ye=null,Le=0,qo()),p}function eg(){for(;Me!==null;)zh(Me)}function tg(e,t){var n=Oe;Oe|=2;var i=Sh(),o=Ch();Ye!==e||Le!==t?(yl=null,bl=et()+500,Mi(e,t)):ki=Un(e,t);e:do try{if(Pe!==0&&Me!==null){t=Me;var l=Nt;t:switch(Pe){case 1:Pe=0,Nt=null,Ti(e,t,l,1);break;case 2:case 9:if(Pp(l)){Pe=0,Nt=null,Mh(t);break}t=function(){Pe!==2&&Pe!==9||Ye!==e||(Pe=7),sn(e)},l.then(t,t);break e;case 3:Pe=7;break e;case 4:Pe=5;break e;case 7:Pp(l)?(Pe=0,Nt=null,Mh(t)):(Pe=0,Nt=null,Ti(e,t,l,7));break;case 5:var p=null;switch(Me.tag){case 26:p=Me.memoizedState;case 5:case 27:var h=Me;if(!p||sm(p)){Pe=0,Nt=null;var y=h.sibling;if(y!==null)Me=y;else{var E=h.return;E!==null?(Me=E,wl(E)):Me=null}break t}}Pe=0,Nt=null,Ti(e,t,l,5);break;case 6:Pe=0,Nt=null,Ti(e,t,l,6);break;case 8:sd(),Fe=6;break e;default:throw Error(d(462))}}ng();break}catch(G){kh(e,G)}while(!0);return Cn=Da=null,$.H=i,$.A=o,Oe=n,Me!==null?0:(Ye=null,Le=0,qo(),Fe)}function ng(){for(;Me!==null&&!ga();)zh(Me)}function zh(e){var t=If(e.alternate,e,Rn);e.memoizedProps=e.pendingProps,t===null?wl(e):Me=t}function Mh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Wf(n,t,t.pendingProps,t.type,void 0,Le);break;case 11:t=Wf(n,t,t.pendingProps,t.type.render,t.ref,Le);break;case 5:Cc(t);default:th(n,t),t=Me=Mp(t,Rn),t=If(n,t,Rn)}e.memoizedProps=e.pendingProps,t===null?wl(e):Me=t}function Ti(e,t,n,i){Cn=Da=null,Cc(t),yi=null,Ar=0;var o=t.return;try{if(Vx(e,o,t,n,Le)){Fe=1,pl(e,Yt(n,e.current)),Me=null;return}}catch(l){if(o!==null)throw Me=o,l;Fe=1,pl(e,Yt(n,e.current)),Me=null;return}t.flags&32768?(Re||i===1?e=!0:ki||(Le&536870912)!==0?e=!1:(In=e=!0,(i===2||i===9||i===3||i===6)&&(i=Wt.current,i!==null&&i.tag===13&&(i.flags|=16384))),Th(t,e)):wl(t)}function wl(e){var t=e;do{if((t.flags&32768)!==0){Th(t,In);return}e=t.return;var n=Wx(t.alternate,t,Rn);if(n!==null){Me=n;return}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);Fe===0&&(Fe=5)}function Th(e,t){do{var n=Zx(e.alternate,e);if(n!==null){n.flags&=32767,Me=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Me=e;return}Me=e=n}while(e!==null);Fe=6,Me=null}function Ah(e,t,n,i,o,l,p,h,y){e.cancelPendingCommit=null;do jl();while(ht!==0);if((Oe&6)!==0)throw Error(d(327));if(t!==null){if(t===e.current)throw Error(d(177));if(l=t.lanes|t.childLanes,l|=ec,To(e,n,l,p,h,y),e===Ye&&(Me=Ye=null,Le=0),Ci=t,na=e,zi=n,rd=l,od=o,yh=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,og(ba,function(){return Nh(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=$.T,$.T=null,o=I.p,I.p=2,p=Oe,Oe|=4;try{Jx(e,t,n)}finally{Oe=p,I.p=o,$.T=i}}ht=1,Lh(),Eh(),Dh()}}function Lh(){if(ht===1){ht=0;var e=na,t=Ci,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=$.T,$.T=null;var i=I.p;I.p=2;var o=Oe;Oe|=4;try{ph(t,e);var l=jd,p=gp(e.containerInfo),h=l.focusedElem,y=l.selectionRange;if(p!==h&&h&&h.ownerDocument&&xp(h.ownerDocument.documentElement,h)){if(y!==null&&Js(h)){var E=y.start,G=y.end;if(G===void 0&&(G=E),"selectionStart"in h)h.selectionStart=E,h.selectionEnd=Math.min(G,h.value.length);else{var W=h.ownerDocument||document,N=W&&W.defaultView||window;if(N.getSelection){var O=N.getSelection(),xe=h.textContent.length,fe=Math.min(y.start,xe),He=y.end===void 0?fe:Math.min(y.end,xe);!O.extend&&fe>He&&(p=He,He=fe,fe=p);var M=mp(h,fe),S=mp(h,He);if(M&&S&&(O.rangeCount!==1||O.anchorNode!==M.node||O.anchorOffset!==M.offset||O.focusNode!==S.node||O.focusOffset!==S.offset)){var L=W.createRange();L.setStart(M.node,M.offset),O.removeAllRanges(),fe>He?(O.addRange(L),O.extend(S.node,S.offset)):(L.setEnd(S.node,S.offset),O.addRange(L))}}}}for(W=[],O=h;O=O.parentNode;)O.nodeType===1&&W.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<W.length;h++){var V=W[h];V.element.scrollLeft=V.left,V.element.scrollTop=V.top}}Nl=!!wd,jd=wd=null}finally{Oe=o,I.p=i,$.T=n}}e.current=t,ht=2}}function Eh(){if(ht===2){ht=0;var e=na,t=Ci,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=$.T,$.T=null;var i=I.p;I.p=2;var o=Oe;Oe|=4;try{sh(e,t.alternate,t)}finally{Oe=o,I.p=i,$.T=n}}ht=3}}function Dh(){if(ht===4||ht===3){ht=0,Za();var e=na,t=Ci,n=zi,i=yh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ht=5:(ht=0,Ci=na=null,Rh(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(ta=null),ie(n),t=t.stateNode,xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(ya,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=$.T,o=I.p,I.p=2,$.T=null;try{for(var l=e.onRecoverableError,p=0;p<i.length;p++){var h=i[p];l(h.value,{componentStack:h.stack})}}finally{$.T=t,I.p=o}}(zi&3)!==0&&jl(),sn(e),o=e.pendingLanes,(n&4194090)!==0&&(o&42)!==0?e===ld?_r++:(_r=0,ld=e):_r=0,$r(0)}}function Rh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,br(t)))}function jl(e){return Lh(),Eh(),Dh(),Nh()}function Nh(){if(ht!==5)return!1;var e=na,t=rd;rd=0;var n=ie(zi),i=$.T,o=I.p;try{I.p=32>n?32:n,$.T=null,n=od,od=null;var l=na,p=zi;if(ht=0,Ci=na=null,zi=0,(Oe&6)!==0)throw Error(d(331));var h=Oe;if(Oe|=4,gh(l.current),hh(l,l.current,p,n),Oe=h,$r(0,!1),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(ya,l)}catch{}return!0}finally{I.p=o,$.T=i,Rh(e,t)}}function Bh(e,t,n){t=Yt(n,t),t=$c(e.stateNode,t,2),e=Qn(e,t,2),e!==null&&(wa(e,2),sn(e))}function Ue(e,t,n){if(e.tag===3)Bh(e,e,n);else for(;t!==null;){if(t.tag===3){Bh(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ta===null||!ta.has(i))){e=Yt(n,e),n=$f(2),i=Qn(t,n,2),i!==null&&(Hf(n,i,t,e),wa(i,2),sn(i));break}}t=t.return}}function ud(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Kx;var o=new Set;i.set(t,o)}else o=i.get(t),o===void 0&&(o=new Set,i.set(t,o));o.has(n)||(td=!0,o.add(n),e=ag.bind(null,e,t,n),t.then(e,e))}function ag(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ye===e&&(Le&n)===n&&(Fe===4||Fe===3&&(Le&62914560)===Le&&300>et()-id?(Oe&2)===0&&Mi(e,0):nd|=n,Si===Le&&(Si=0)),sn(e)}function Oh(e,t){t===0&&(t=Mo()),e=ci(e,t),e!==null&&(wa(e,t),sn(e))}function ig(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Oh(e,n)}function rg(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(d(314))}i!==null&&i.delete(t),Oh(e,n)}function og(e,t){return _t(e,t)}var kl=null,Ai=null,pd=!1,Sl=!1,fd=!1,$a=0;function sn(e){e!==Ai&&e.next===null&&(Ai===null?kl=Ai=e:Ai=Ai.next=e),Sl=!0,pd||(pd=!0,sg())}function $r(e,t){if(!fd&&Sl){fd=!0;do for(var n=!1,i=kl;i!==null;){if(e!==0){var o=i.pendingLanes;if(o===0)var l=0;else{var p=i.suspendedLanes,h=i.pingedLanes;l=(1<<31-gt(42|e)+1)-1,l&=o&~(p&~h),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(n=!0,Hh(i,l))}else l=Le,l=Hn(i,i===Ye?l:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(l&3)===0||Un(i,l)||(n=!0,Hh(i,l));i=i.next}while(n);fd=!1}}function lg(){Ph()}function Ph(){Sl=pd=!1;var e=0;$a!==0&&(xg()&&(e=$a),$a=0);for(var t=et(),n=null,i=kl;i!==null;){var o=i.next,l=_h(i,t);l===0?(i.next=null,n===null?kl=o:n.next=o,o===null&&(Ai=n)):(n=i,(e!==0||(l&3)!==0)&&(Sl=!0)),i=o}$r(e)}function _h(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var p=31-gt(l),h=1<<p,y=o[p];y===-1?((h&n)===0||(h&i)!==0)&&(o[p]=er(h,t)):y<=t&&(e.expiredLanes|=h),l&=~h}if(t=Ye,n=Le,n=Hn(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&$t(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Un(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&$t(i),ie(n)){case 2:case 8:n=Ii;break;case 32:n=ba;break;case 268435456:n=Co;break;default:n=ba}return i=$h.bind(null,e),n=_t(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&$t(i),e.callbackPriority=2,e.callbackNode=null,2}function $h(e,t){if(ht!==0&&ht!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(jl()&&e.callbackNode!==n)return null;var i=Le;return i=Hn(e,e===Ye?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(wh(e,i,t),_h(e,et()),e.callbackNode!=null&&e.callbackNode===n?$h.bind(null,e):null)}function Hh(e,t){if(jl())return null;wh(e,t,!0)}function sg(){bg(function(){(Oe&6)!==0?_t(jt,lg):Ph()})}function hd(){return $a===0&&($a=va()),$a}function Uh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Bo(""+e)}function qh(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function cg(e,t,n,i,o){if(t==="submit"&&n&&n.stateNode===o){var l=Uh((o[we]||null).action),p=i.submitter;p&&(t=(t=p[we]||null)?Uh(t.formAction):p.getAttribute("formAction"),t!==null&&(l=t,p=null));var h=new $o("action","action",null,i,o);e.push({event:h,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if($a!==0){var y=p?qh(o,p):new FormData(o);Nc(n,{pending:!0,data:y,method:o.method,action:l},null,y)}}else typeof l=="function"&&(h.preventDefault(),y=p?qh(o,p):new FormData(o),Nc(n,{pending:!0,data:y,method:o.method,action:l},l,y))},currentTarget:o}]})}}for(var md=0;md<Is.length;md++){var xd=Is[md],dg=xd.toLowerCase(),ug=xd[0].toUpperCase()+xd.slice(1);It(dg,"on"+ug)}It(vp,"onAnimationEnd"),It(wp,"onAnimationIteration"),It(jp,"onAnimationStart"),It("dblclick","onDoubleClick"),It("focusin","onFocus"),It("focusout","onBlur"),It(Tx,"onTransitionRun"),It(Ax,"onTransitionStart"),It(Lx,"onTransitionCancel"),It(kp,"onTransitionEnd"),Ia("onMouseEnter",["mouseout","mouseover"]),Ia("onMouseLeave",["mouseout","mouseover"]),Ia("onPointerEnter",["pointerout","pointerover"]),Ia("onPointerLeave",["pointerout","pointerover"]),ka("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ka("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ka("onBeforeInput",["compositionend","keypress","textInput","paste"]),ka("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ka("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ka("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Hr));function Yh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],o=i.event;i=i.listeners;e:{var l=void 0;if(t)for(var p=i.length-1;0<=p;p--){var h=i[p],y=h.instance,E=h.currentTarget;if(h=h.listener,y!==l&&o.isPropagationStopped())break e;l=h,o.currentTarget=E;try{l(o)}catch(G){ul(G)}o.currentTarget=null,l=y}else for(p=0;p<i.length;p++){if(h=i[p],y=h.instance,E=h.currentTarget,h=h.listener,y!==l&&o.isPropagationStopped())break e;l=h,o.currentTarget=E;try{l(o)}catch(G){ul(G)}o.currentTarget=null,l=y}}}}function Te(e,t){var n=t[Kt];n===void 0&&(n=t[Kt]=new Set);var i=e+"__bubble";n.has(i)||(Gh(t,e,2,!1),n.add(i))}function gd(e,t,n){var i=0;t&&(i|=4),Gh(n,e,i,t)}var Cl="_reactListening"+Math.random().toString(36).slice(2);function bd(e){if(!e[Cl]){e[Cl]=!0,Ou.forEach(function(n){n!=="selectionchange"&&(pg.has(n)||gd(n,!1,e),gd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cl]||(t[Cl]=!0,gd("selectionchange",!1,t))}}function Gh(e,t,n,i){switch(hm(t)){case 2:var o=$g;break;case 8:o=Hg;break;default:o=Dd}n=o.bind(null,t,n,e),o=void 0,!Hs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),i?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function yd(e,t,n,i,o){var l=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var p=i.tag;if(p===3||p===4){var h=i.stateNode.containerInfo;if(h===o)break;if(p===4)for(p=i.return;p!==null;){var y=p.tag;if((y===3||y===4)&&p.stateNode.containerInfo===o)return;p=p.return}for(;h!==null;){if(p=Xa(h),p===null)return;if(y=p.tag,y===5||y===6||y===26||y===27){i=l=p;continue e}h=h.parentNode}}i=i.return}Xu(function(){var E=l,G=_s(n),W=[];e:{var N=Sp.get(e);if(N!==void 0){var O=$o,xe=e;switch(e){case"keypress":if(Po(n)===0)break e;case"keydown":case"keyup":O=ox;break;case"focusin":xe="focus",O=Gs;break;case"focusout":xe="blur",O=Gs;break;case"beforeblur":case"afterblur":O=Gs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Iu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=Z1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=cx;break;case vp:case wp:case jp:O=F1;break;case kp:O=ux;break;case"scroll":case"scrollend":O=Q1;break;case"wheel":O=fx;break;case"copy":case"cut":case"paste":O=I1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=tp;break;case"toggle":case"beforetoggle":O=mx}var fe=(t&4)!==0,He=!fe&&(e==="scroll"||e==="scrollend"),M=fe?N!==null?N+"Capture":null:N;fe=[];for(var S=E,L;S!==null;){var V=S;if(L=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||L===null||M===null||(V=rr(S,M),V!=null&&fe.push(Ur(S,V,L))),He)break;S=S.return}0<fe.length&&(N=new O(N,xe,null,n,G),W.push({event:N,listeners:fe}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",N&&n!==Ps&&(xe=n.relatedTarget||n.fromElement)&&(Xa(xe)||xe[vt]))break e;if((O||N)&&(N=G.window===G?G:(N=G.ownerDocument)?N.defaultView||N.parentWindow:window,O?(xe=n.relatedTarget||n.toElement,O=E,xe=xe?Xa(xe):null,xe!==null&&(He=m(xe),fe=xe.tag,xe!==He||fe!==5&&fe!==27&&fe!==6)&&(xe=null)):(O=null,xe=E),O!==xe)){if(fe=Iu,V="onMouseLeave",M="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(fe=tp,V="onPointerLeave",M="onPointerEnter",S="pointer"),He=O==null?N:ir(O),L=xe==null?N:ir(xe),N=new fe(V,S+"leave",O,n,G),N.target=He,N.relatedTarget=L,V=null,Xa(G)===E&&(fe=new fe(M,S+"enter",xe,n,G),fe.target=L,fe.relatedTarget=He,V=fe),He=V,O&&xe)t:{for(fe=O,M=xe,S=0,L=fe;L;L=Li(L))S++;for(L=0,V=M;V;V=Li(V))L++;for(;0<S-L;)fe=Li(fe),S--;for(;0<L-S;)M=Li(M),L--;for(;S--;){if(fe===M||M!==null&&fe===M.alternate)break t;fe=Li(fe),M=Li(M)}fe=null}else fe=null;O!==null&&Vh(W,N,O,fe,!1),xe!==null&&He!==null&&Vh(W,He,xe,fe,!0)}}e:{if(N=E?ir(E):window,O=N.nodeName&&N.nodeName.toLowerCase(),O==="select"||O==="input"&&N.type==="file")var re=cp;else if(lp(N))if(dp)re=Cx;else{re=kx;var ze=jx}else O=N.nodeName,!O||O.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?E&&Os(E.elementType)&&(re=cp):re=Sx;if(re&&(re=re(e,E))){sp(W,re,n,G);break e}ze&&ze(e,N,E),e==="focusout"&&E&&N.type==="number"&&E.memoizedProps.value!=null&&Bs(N,"number",N.value)}switch(ze=E?ir(E):window,e){case"focusin":(lp(ze)||ze.contentEditable==="true")&&(oi=ze,Xs=E,fr=null);break;case"focusout":fr=Xs=oi=null;break;case"mousedown":Fs=!0;break;case"contextmenu":case"mouseup":case"dragend":Fs=!1,bp(W,n,G);break;case"selectionchange":if(Mx)break;case"keydown":case"keyup":bp(W,n,G)}var pe;if(Qs)e:{switch(e){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else ri?rp(e,n)&&(he="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(he="onCompositionStart");he&&(np&&n.locale!=="ko"&&(ri||he!=="onCompositionStart"?he==="onCompositionEnd"&&ri&&(pe=Fu()):(qn=G,Us="value"in qn?qn.value:qn.textContent,ri=!0)),ze=zl(E,he),0<ze.length&&(he=new ep(he,e,null,n,G),W.push({event:he,listeners:ze}),pe?he.data=pe:(pe=op(n),pe!==null&&(he.data=pe)))),(pe=gx?bx(e,n):yx(e,n))&&(he=zl(E,"onBeforeInput"),0<he.length&&(ze=new ep("onBeforeInput","beforeinput",null,n,G),W.push({event:ze,listeners:he}),ze.data=pe)),cg(W,e,E,n,G)}Yh(W,t)})}function Ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zl(e,t){for(var n=t+"Capture",i=[];e!==null;){var o=e,l=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||l===null||(o=rr(e,n),o!=null&&i.unshift(Ur(e,o,l)),o=rr(e,t),o!=null&&i.push(Ur(e,o,l))),e.tag===3)return i;e=e.return}return[]}function Li(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Vh(e,t,n,i,o){for(var l=t._reactName,p=[];n!==null&&n!==i;){var h=n,y=h.alternate,E=h.stateNode;if(h=h.tag,y!==null&&y===i)break;h!==5&&h!==26&&h!==27||E===null||(y=E,o?(E=rr(n,l),E!=null&&p.unshift(Ur(n,E,y))):o||(E=rr(n,l),E!=null&&p.push(Ur(n,E,y)))),n=n.return}p.length!==0&&e.push({event:t,listeners:p})}var fg=/\r\n?/g,hg=/\u0000|\uFFFD/g;function Qh(e){return(typeof e=="string"?e:""+e).replace(fg,`
`).replace(hg,"")}function Wh(e,t){return t=Qh(t),Qh(e)===t}function Ml(){}function $e(e,t,n,i,o,l){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||ni(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&ni(e,""+i);break;case"className":Do(e,"class",i);break;case"tabIndex":Do(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Do(e,n,i);break;case"style":Zu(e,i,l);break;case"data":if(t!=="object"){Do(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Bo(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(n==="formAction"?(t!=="input"&&$e(e,t,"name",o.name,o,null),$e(e,t,"formEncType",o.formEncType,o,null),$e(e,t,"formMethod",o.formMethod,o,null),$e(e,t,"formTarget",o.formTarget,o,null)):($e(e,t,"encType",o.encType,o,null),$e(e,t,"method",o.method,o,null),$e(e,t,"target",o.target,o,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Bo(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Ml);break;case"onScroll":i!=null&&Te("scroll",e);break;case"onScrollEnd":i!=null&&Te("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(d(61));if(n=i.__html,n!=null){if(o.children!=null)throw Error(d(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Bo(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Te("beforetoggle",e),Te("toggle",e),Eo(e,"popover",i);break;case"xlinkActuate":vn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":vn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":vn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":vn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":vn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":vn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":vn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":vn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":vn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Eo(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=G1.get(n)||n,Eo(e,n,i))}}function vd(e,t,n,i,o,l){switch(n){case"style":Zu(e,i,l);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(d(61));if(n=i.__html,n!=null){if(o.children!=null)throw Error(d(60));e.innerHTML=n}}break;case"children":typeof i=="string"?ni(e,i):(typeof i=="number"||typeof i=="bigint")&&ni(e,""+i);break;case"onScroll":i!=null&&Te("scroll",e);break;case"onScrollEnd":i!=null&&Te("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Ml);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Pu.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),t=n.slice(2,o?n.length-7:void 0),l=e[we]||null,l=l!=null?l[n]:null,typeof l=="function"&&e.removeEventListener(t,l,o),typeof i=="function")){typeof l!="function"&&l!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,o);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Eo(e,n,i)}}}function mt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",e),Te("load",e);var i=!1,o=!1,l;for(l in n)if(n.hasOwnProperty(l)){var p=n[l];if(p!=null)switch(l){case"src":i=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:$e(e,t,l,p,n,null)}}o&&$e(e,t,"srcSet",n.srcSet,n,null),i&&$e(e,t,"src",n.src,n,null);return;case"input":Te("invalid",e);var h=l=p=o=null,y=null,E=null;for(i in n)if(n.hasOwnProperty(i)){var G=n[i];if(G!=null)switch(i){case"name":o=G;break;case"type":p=G;break;case"checked":y=G;break;case"defaultChecked":E=G;break;case"value":l=G;break;case"defaultValue":h=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(d(137,t));break;default:$e(e,t,i,G,n,null)}}Gu(e,l,h,y,E,p,o,!1),Ro(e);return;case"select":Te("invalid",e),i=p=l=null;for(o in n)if(n.hasOwnProperty(o)&&(h=n[o],h!=null))switch(o){case"value":l=h;break;case"defaultValue":p=h;break;case"multiple":i=h;default:$e(e,t,o,h,n,null)}t=l,n=p,e.multiple=!!i,t!=null?ti(e,!!i,t,!1):n!=null&&ti(e,!!i,n,!0);return;case"textarea":Te("invalid",e),l=o=i=null;for(p in n)if(n.hasOwnProperty(p)&&(h=n[p],h!=null))switch(p){case"value":i=h;break;case"defaultValue":o=h;break;case"children":l=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(d(91));break;default:$e(e,t,p,h,n,null)}Qu(e,i,o,l),Ro(e);return;case"option":for(y in n)if(n.hasOwnProperty(y)&&(i=n[y],i!=null))switch(y){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:$e(e,t,y,i,n,null)}return;case"dialog":Te("beforetoggle",e),Te("toggle",e),Te("cancel",e),Te("close",e);break;case"iframe":case"object":Te("load",e);break;case"video":case"audio":for(i=0;i<Hr.length;i++)Te(Hr[i],e);break;case"image":Te("error",e),Te("load",e);break;case"details":Te("toggle",e);break;case"embed":case"source":case"link":Te("error",e),Te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in n)if(n.hasOwnProperty(E)&&(i=n[E],i!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:$e(e,t,E,i,n,null)}return;default:if(Os(t)){for(G in n)n.hasOwnProperty(G)&&(i=n[G],i!==void 0&&vd(e,t,G,i,n,void 0));return}}for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!=null&&$e(e,t,h,i,n,null))}function mg(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,l=null,p=null,h=null,y=null,E=null,G=null;for(O in n){var W=n[O];if(n.hasOwnProperty(O)&&W!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":y=W;default:i.hasOwnProperty(O)||$e(e,t,O,null,i,W)}}for(var N in i){var O=i[N];if(W=n[N],i.hasOwnProperty(N)&&(O!=null||W!=null))switch(N){case"type":l=O;break;case"name":o=O;break;case"checked":E=O;break;case"defaultChecked":G=O;break;case"value":p=O;break;case"defaultValue":h=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(d(137,t));break;default:O!==W&&$e(e,t,N,O,i,W)}}Ns(e,p,h,y,E,G,l,o);return;case"select":O=p=h=N=null;for(l in n)if(y=n[l],n.hasOwnProperty(l)&&y!=null)switch(l){case"value":break;case"multiple":O=y;default:i.hasOwnProperty(l)||$e(e,t,l,null,i,y)}for(o in i)if(l=i[o],y=n[o],i.hasOwnProperty(o)&&(l!=null||y!=null))switch(o){case"value":N=l;break;case"defaultValue":h=l;break;case"multiple":p=l;default:l!==y&&$e(e,t,o,l,i,y)}t=h,n=p,i=O,N!=null?ti(e,!!n,N,!1):!!i!=!!n&&(t!=null?ti(e,!!n,t,!0):ti(e,!!n,n?[]:"",!1));return;case"textarea":O=N=null;for(h in n)if(o=n[h],n.hasOwnProperty(h)&&o!=null&&!i.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:$e(e,t,h,null,i,o)}for(p in i)if(o=i[p],l=n[p],i.hasOwnProperty(p)&&(o!=null||l!=null))switch(p){case"value":N=o;break;case"defaultValue":O=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(d(91));break;default:o!==l&&$e(e,t,p,o,i,l)}Vu(e,N,O);return;case"option":for(var xe in n)if(N=n[xe],n.hasOwnProperty(xe)&&N!=null&&!i.hasOwnProperty(xe))switch(xe){case"selected":e.selected=!1;break;default:$e(e,t,xe,null,i,N)}for(y in i)if(N=i[y],O=n[y],i.hasOwnProperty(y)&&N!==O&&(N!=null||O!=null))switch(y){case"selected":e.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:$e(e,t,y,N,i,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in n)N=n[fe],n.hasOwnProperty(fe)&&N!=null&&!i.hasOwnProperty(fe)&&$e(e,t,fe,null,i,N);for(E in i)if(N=i[E],O=n[E],i.hasOwnProperty(E)&&N!==O&&(N!=null||O!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(d(137,t));break;default:$e(e,t,E,N,i,O)}return;default:if(Os(t)){for(var He in n)N=n[He],n.hasOwnProperty(He)&&N!==void 0&&!i.hasOwnProperty(He)&&vd(e,t,He,void 0,i,N);for(G in i)N=i[G],O=n[G],!i.hasOwnProperty(G)||N===O||N===void 0&&O===void 0||vd(e,t,G,N,i,O);return}}for(var M in n)N=n[M],n.hasOwnProperty(M)&&N!=null&&!i.hasOwnProperty(M)&&$e(e,t,M,null,i,N);for(W in i)N=i[W],O=n[W],!i.hasOwnProperty(W)||N===O||N==null&&O==null||$e(e,t,W,N,i,O)}var wd=null,jd=null;function Tl(e){return e.nodeType===9?e:e.ownerDocument}function Zh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function kd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sd=null;function xg(){var e=window.event;return e&&e.type==="popstate"?e===Sd?!1:(Sd=e,!0):(Sd=null,!1)}var Xh=typeof setTimeout=="function"?setTimeout:void 0,gg=typeof clearTimeout=="function"?clearTimeout:void 0,Fh=typeof Promise=="function"?Promise:void 0,bg=typeof queueMicrotask=="function"?queueMicrotask:typeof Fh<"u"?function(e){return Fh.resolve(null).then(e).catch(yg)}:Xh;function yg(e){setTimeout(function(){throw e})}function ia(e){return e==="head"}function Kh(e,t){var n=t,i=0,o=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(0<i&&8>i){n=i;var p=e.ownerDocument;if(n&1&&qr(p.documentElement),n&2&&qr(p.body),n&4)for(n=p.head,qr(n),p=n.firstChild;p;){var h=p.nextSibling,y=p.nodeName;p[ar]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&p.rel.toLowerCase()==="stylesheet"||n.removeChild(p),p=h}}if(o===0){e.removeChild(l),Xr(t);return}o--}else n==="$"||n==="$?"||n==="$!"?o++:i=n.charCodeAt(0)-48;else i=0;n=l}while(n);Xr(t)}function Cd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Cd(n),Ls(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function vg(e,t,n,i){for(;e.nodeType===1;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[ar])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=tn(e.nextSibling),e===null)break}return null}function wg(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=tn(e.nextSibling),e===null))return null;return e}function zd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function jg(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Md=null;function Ih(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function em(e,t,n){switch(t=Tl(n),e){case"html":if(e=t.documentElement,!e)throw Error(d(452));return e;case"head":if(e=t.head,!e)throw Error(d(453));return e;case"body":if(e=t.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function qr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ls(e)}var Jt=new Map,tm=new Set;function Al(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Nn=I.d;I.d={f:kg,r:Sg,D:Cg,C:zg,L:Mg,m:Tg,X:Lg,S:Ag,M:Eg};function kg(){var e=Nn.f(),t=vl();return e||t}function Sg(e){var t=Fa(e);t!==null&&t.tag===5&&t.type==="form"?wf(t):Nn.r(e)}var Ei=typeof document>"u"?null:document;function nm(e,t,n){var i=Ei;if(i&&typeof t=="string"&&t){var o=qt(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),tm.has(o)||(tm.add(o),e={rel:e,crossOrigin:n,href:t},i.querySelector(o)===null&&(t=i.createElement("link"),mt(t,"link",e),lt(t),i.head.appendChild(t)))}}function Cg(e){Nn.D(e),nm("dns-prefetch",e,null)}function zg(e,t){Nn.C(e,t),nm("preconnect",e,t)}function Mg(e,t,n){Nn.L(e,t,n);var i=Ei;if(i&&e&&t){var o='link[rel="preload"][as="'+qt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+qt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+qt(n.imageSizes)+'"]')):o+='[href="'+qt(e)+'"]';var l=o;switch(t){case"style":l=Di(e);break;case"script":l=Ri(e)}Jt.has(l)||(e=C({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Jt.set(l,e),i.querySelector(o)!==null||t==="style"&&i.querySelector(Yr(l))||t==="script"&&i.querySelector(Gr(l))||(t=i.createElement("link"),mt(t,"link",e),lt(t),i.head.appendChild(t)))}}function Tg(e,t){Nn.m(e,t);var n=Ei;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+qt(i)+'"][href="'+qt(e)+'"]',l=o;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Ri(e)}if(!Jt.has(l)&&(e=C({rel:"modulepreload",href:e},t),Jt.set(l,e),n.querySelector(o)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Gr(l)))return}i=n.createElement("link"),mt(i,"link",e),lt(i),n.head.appendChild(i)}}}function Ag(e,t,n){Nn.S(e,t,n);var i=Ei;if(i&&e){var o=Ka(i).hoistableStyles,l=Di(e);t=t||"default";var p=o.get(l);if(!p){var h={loading:0,preload:null};if(p=i.querySelector(Yr(l)))h.loading=5;else{e=C({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Jt.get(l))&&Td(e,n);var y=p=i.createElement("link");lt(y),mt(y,"link",e),y._p=new Promise(function(E,G){y.onload=E,y.onerror=G}),y.addEventListener("load",function(){h.loading|=1}),y.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Ll(p,t,i)}p={type:"stylesheet",instance:p,count:1,state:h},o.set(l,p)}}}function Lg(e,t){Nn.X(e,t);var n=Ei;if(n&&e){var i=Ka(n).hoistableScripts,o=Ri(e),l=i.get(o);l||(l=n.querySelector(Gr(o)),l||(e=C({src:e,async:!0},t),(t=Jt.get(o))&&Ad(e,t),l=n.createElement("script"),lt(l),mt(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(o,l))}}function Eg(e,t){Nn.M(e,t);var n=Ei;if(n&&e){var i=Ka(n).hoistableScripts,o=Ri(e),l=i.get(o);l||(l=n.querySelector(Gr(o)),l||(e=C({src:e,async:!0,type:"module"},t),(t=Jt.get(o))&&Ad(e,t),l=n.createElement("script"),lt(l),mt(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(o,l))}}function am(e,t,n,i){var o=(o=q.current)?Al(o):null;if(!o)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Di(n.href),n=Ka(o).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Di(n.href);var l=Ka(o).hoistableStyles,p=l.get(e);if(p||(o=o.ownerDocument||o,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,p),(l=o.querySelector(Yr(e)))&&!l._p&&(p.instance=l,p.state.loading=5),Jt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Jt.set(e,n),l||Dg(o,e,n,p.state))),t&&i===null)throw Error(d(528,""));return p}if(t&&i!==null)throw Error(d(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ri(n),n=Ka(o).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function Di(e){return'href="'+qt(e)+'"'}function Yr(e){return'link[rel="stylesheet"]['+e+"]"}function im(e){return C({},e,{"data-precedence":e.precedence,precedence:null})}function Dg(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),mt(t,"link",n),lt(t),e.head.appendChild(t))}function Ri(e){return'[src="'+qt(e)+'"]'}function Gr(e){return"script[async]"+e}function rm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+qt(n.href)+'"]');if(i)return t.instance=i,lt(i),i;var o=C({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),lt(i),mt(i,"style",o),Ll(i,n.precedence,e),t.instance=i;case"stylesheet":o=Di(n.href);var l=e.querySelector(Yr(o));if(l)return t.state.loading|=4,t.instance=l,lt(l),l;i=im(n),(o=Jt.get(o))&&Td(i,o),l=(e.ownerDocument||e).createElement("link"),lt(l);var p=l;return p._p=new Promise(function(h,y){p.onload=h,p.onerror=y}),mt(l,"link",i),t.state.loading|=4,Ll(l,n.precedence,e),t.instance=l;case"script":return l=Ri(n.src),(o=e.querySelector(Gr(l)))?(t.instance=o,lt(o),o):(i=n,(o=Jt.get(l))&&(i=C({},n),Ad(i,o)),e=e.ownerDocument||e,o=e.createElement("script"),lt(o),mt(o,"link",i),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Ll(i,n.precedence,e));return t.instance}function Ll(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=i.length?i[i.length-1]:null,l=o,p=0;p<i.length;p++){var h=i[p];if(h.dataset.precedence===t)l=h;else if(l!==o)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Td(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ad(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var El=null;function om(e,t,n){if(El===null){var i=new Map,o=El=new Map;o.set(n,i)}else o=El,i=o.get(n),i||(i=new Map,o.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var l=n[o];if(!(l[ar]||l[ye]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var p=l.getAttribute(t)||"";p=e+p;var h=i.get(p);h?h.push(l):i.set(p,[l])}}return i}function lm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Rg(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function sm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Vr=null;function Ng(){}function Bg(e,t,n){if(Vr===null)throw Error(d(475));var i=Vr;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var o=Di(n.href),l=e.querySelector(Yr(o));if(l){e=l._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=Dl.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=l,lt(l);return}l=e.ownerDocument||e,n=im(n),(o=Jt.get(o))&&Td(n,o),l=l.createElement("link"),lt(l);var p=l;p._p=new Promise(function(h,y){p.onload=h,p.onerror=y}),mt(l,"link",n),t.instance=l}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(i.count++,t=Dl.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function Og(){if(Vr===null)throw Error(d(475));var e=Vr;return e.stylesheets&&e.count===0&&Ld(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Ld(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Dl(){if(this.count--,this.count===0){if(this.stylesheets)Ld(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Rl=null;function Ld(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Rl=new Map,t.forEach(Pg,e),Rl=null,Dl.call(e))}function Pg(e,t){if(!(t.state.loading&4)){var n=Rl.get(e);if(n)var i=n.get(null);else{n=new Map,Rl.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<o.length;l++){var p=o[l];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(n.set(p.dataset.precedence,p),i=p)}i&&n.set(null,i)}o=t.instance,p=o.getAttribute("data-precedence"),l=n.get(p)||i,l===i&&n.set(null,o),n.set(p,o),this.count++,i=Dl.bind(this),o.addEventListener("load",i),o.addEventListener("error",i),l?l.parentNode.insertBefore(o,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var Qr={$$typeof:Y,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function _g(e,t,n,i,o,l,p,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tr(0),this.hiddenUpdates=tr(null),this.identifierPrefix=i,this.onUncaughtError=o,this.onCaughtError=l,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function cm(e,t,n,i,o,l,p,h,y,E,G,W){return e=new _g(e,t,n,p,h,y,E,W),t=1,l===!0&&(t|=24),l=Et(3,null,null,t),e.current=l,l.stateNode=e,t=uc(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:i,isDehydrated:n,cache:t},mc(l),e}function dm(e){return e?(e=di,e):di}function um(e,t,n,i,o,l){o=dm(o),i.context===null?i.context=o:i.pendingContext=o,i=Vn(t),i.payload={element:n},l=l===void 0?null:l,l!==null&&(i.callback=l),n=Qn(e,i,t),n!==null&&(Ot(n,e,t),jr(n,e,t))}function pm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ed(e,t){pm(e,t),(e=e.alternate)&&pm(e,t)}function fm(e){if(e.tag===13){var t=ci(e,67108864);t!==null&&Ot(t,e,67108864),Ed(e,67108864)}}var Nl=!0;function $g(e,t,n,i){var o=$.T;$.T=null;var l=I.p;try{I.p=2,Dd(e,t,n,i)}finally{I.p=l,$.T=o}}function Hg(e,t,n,i){var o=$.T;$.T=null;var l=I.p;try{I.p=8,Dd(e,t,n,i)}finally{I.p=l,$.T=o}}function Dd(e,t,n,i){if(Nl){var o=Rd(i);if(o===null)yd(e,t,i,Bl,n),mm(e,i);else if(qg(o,e,t,n,i))i.stopPropagation();else if(mm(e,i),t&4&&-1<Ug.indexOf(e)){for(;o!==null;){var l=Fa(o);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var p=Ht(l.pendingLanes);if(p!==0){var h=l;for(h.pendingLanes|=2,h.entangledLanes|=2;p;){var y=1<<31-gt(p);h.entanglements[1]|=y,p&=~y}sn(l),(Oe&6)===0&&(bl=et()+500,$r(0))}}break;case 13:h=ci(l,2),h!==null&&Ot(h,l,2),vl(),Ed(l,2)}if(l=Rd(i),l===null&&yd(e,t,i,Bl,n),l===o)break;o=l}o!==null&&i.stopPropagation()}else yd(e,t,i,null,n)}}function Rd(e){return e=_s(e),Nd(e)}var Bl=null;function Nd(e){if(Bl=null,e=Xa(e),e!==null){var t=m(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=b(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Bl=e,null}function hm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ge()){case jt:return 2;case Ii:return 8;case ba:case So:return 32;case Co:return 268435456;default:return 32}default:return 32}}var Bd=!1,ra=null,oa=null,la=null,Wr=new Map,Zr=new Map,sa=[],Ug="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mm(e,t){switch(e){case"focusin":case"focusout":ra=null;break;case"dragenter":case"dragleave":oa=null;break;case"mouseover":case"mouseout":la=null;break;case"pointerover":case"pointerout":Wr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zr.delete(t.pointerId)}}function Jr(e,t,n,i,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Fa(t),t!==null&&fm(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function qg(e,t,n,i,o){switch(t){case"focusin":return ra=Jr(ra,e,t,n,i,o),!0;case"dragenter":return oa=Jr(oa,e,t,n,i,o),!0;case"mouseover":return la=Jr(la,e,t,n,i,o),!0;case"pointerover":var l=o.pointerId;return Wr.set(l,Jr(Wr.get(l)||null,e,t,n,i,o)),!0;case"gotpointercapture":return l=o.pointerId,Zr.set(l,Jr(Zr.get(l)||null,e,t,n,i,o)),!0}return!1}function xm(e){var t=Xa(e.target);if(t!==null){var n=m(t);if(n!==null){if(t=n.tag,t===13){if(t=b(n),t!==null){e.blockedOn=t,ae(e.priority,function(){if(n.tag===13){var i=Bt();i=_(i);var o=ci(n,i);o!==null&&Ot(o,n,i),Ed(n,i)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ol(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Rd(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Ps=i,n.target.dispatchEvent(i),Ps=null}else return t=Fa(n),t!==null&&fm(t),e.blockedOn=n,!1;t.shift()}return!0}function gm(e,t,n){Ol(e)&&n.delete(t)}function Yg(){Bd=!1,ra!==null&&Ol(ra)&&(ra=null),oa!==null&&Ol(oa)&&(oa=null),la!==null&&Ol(la)&&(la=null),Wr.forEach(gm),Zr.forEach(gm)}function Pl(e,t){e.blockedOn===t&&(e.blockedOn=null,Bd||(Bd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Yg)))}var _l=null;function bm(e){_l!==e&&(_l=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){_l===e&&(_l=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],o=e[t+2];if(typeof i!="function"){if(Nd(i||n)===null)continue;break}var l=Fa(n);l!==null&&(e.splice(t,3),t-=3,Nc(l,{pending:!0,data:o,method:n.method,action:i},i,o))}}))}function Xr(e){function t(y){return Pl(y,e)}ra!==null&&Pl(ra,e),oa!==null&&Pl(oa,e),la!==null&&Pl(la,e),Wr.forEach(t),Zr.forEach(t);for(var n=0;n<sa.length;n++){var i=sa[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<sa.length&&(n=sa[0],n.blockedOn===null);)xm(n),n.blockedOn===null&&sa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var o=n[i],l=n[i+1],p=o[we]||null;if(typeof l=="function")p||bm(n);else if(p){var h=null;if(l&&l.hasAttribute("formAction")){if(o=l,p=l[we]||null)h=p.formAction;else if(Nd(o)!==null)continue}else h=p.action;typeof h=="function"?n[i+1]=h:(n.splice(i,3),i-=3),bm(n)}}}function Od(e){this._internalRoot=e}$l.prototype.render=Od.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));var n=t.current,i=Bt();um(n,i,e,t,null,null)},$l.prototype.unmount=Od.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;um(e.current,2,null,e,null,null),vl(),t[vt]=null}};function $l(e){this._internalRoot=e}$l.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ce();e={blockedOn:null,target:e,priority:t};for(var n=0;n<sa.length&&t!==0&&t<sa[n].priority;n++);sa.splice(n,0,e),n===0&&xm(e)}};var ym=s.version;if(ym!=="19.1.0")throw Error(d(527,ym,"19.1.0"));I.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=g(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var Gg={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:$,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hl.isDisabled&&Hl.supportsFiber)try{ya=Hl.inject(Gg),xt=Hl}catch{}}return Kr.createRoot=function(e,t){if(!f(e))throw Error(d(299));var n=!1,i="",o=Bf,l=Of,p=Pf,h=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(h=t.unstable_transitionCallbacks)),t=cm(e,1,!1,null,null,n,i,o,l,p,h,null),e[vt]=t.current,bd(e),new Od(t)},Kr.hydrateRoot=function(e,t,n){if(!f(e))throw Error(d(299));var i=!1,o="",l=Bf,p=Of,h=Pf,y=null,E=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(h=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(y=n.unstable_transitionCallbacks),n.formState!==void 0&&(E=n.formState)),t=cm(e,1,!0,t,n??null,i,o,l,p,h,y,E),t.context=dm(null),n=t.current,i=Bt(),i=_(i),o=Vn(i),o.callback=null,Qn(n,o,i),n=i,t.current.lanes=n,wa(t,n),sn(t),e[vt]=t.current,bd(e),new $l(t)},Kr.version="19.1.0",Kr}var Am;function e2(){if(Am)return $d.exports;Am=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),$d.exports=Ig(),$d.exports}var t2=e2();const n2=Y0(t2);var Ir={},Lm;function a2(){if(Lm)return Ir;Lm=1,Object.defineProperty(Ir,"__esModule",{value:!0}),Ir.parse=b,Ir.serialize=x;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,s=/^[\u0021-\u003A\u003C-\u007E]*$/,u=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,d=/^[\u0020-\u003A\u003D-\u007E]*$/,f=Object.prototype.toString,m=(()=>{const A=function(){};return A.prototype=Object.create(null),A})();function b(A,H){const T=new m,U=A.length;if(U<2)return T;const P=(H==null?void 0:H.decode)||C;let k=0;do{const B=A.indexOf("=",k);if(B===-1)break;const Y=A.indexOf(";",k),F=Y===-1?U:Y;if(B>F){k=A.lastIndexOf(";",B-1)+1;continue}const J=w(A,k,B),R=g(A,B,J),Z=A.slice(J,R);if(T[Z]===void 0){let ue=w(A,B+1,F),le=g(A,F,ue);const K=P(A.slice(ue,le));T[Z]=K}k=F+1}while(k<U);return T}function w(A,H,T){do{const U=A.charCodeAt(H);if(U!==32&&U!==9)return H}while(++H<T);return T}function g(A,H,T){for(;H>T;){const U=A.charCodeAt(--H);if(U!==32&&U!==9)return H+1}return T}function x(A,H,T){const U=(T==null?void 0:T.encode)||encodeURIComponent;if(!r.test(A))throw new TypeError(`argument name is invalid: ${A}`);const P=U(H);if(!s.test(P))throw new TypeError(`argument val is invalid: ${H}`);let k=A+"="+P;if(!T)return k;if(T.maxAge!==void 0){if(!Number.isInteger(T.maxAge))throw new TypeError(`option maxAge is invalid: ${T.maxAge}`);k+="; Max-Age="+T.maxAge}if(T.domain){if(!u.test(T.domain))throw new TypeError(`option domain is invalid: ${T.domain}`);k+="; Domain="+T.domain}if(T.path){if(!d.test(T.path))throw new TypeError(`option path is invalid: ${T.path}`);k+="; Path="+T.path}if(T.expires){if(!D(T.expires)||!Number.isFinite(T.expires.valueOf()))throw new TypeError(`option expires is invalid: ${T.expires}`);k+="; Expires="+T.expires.toUTCString()}if(T.httpOnly&&(k+="; HttpOnly"),T.secure&&(k+="; Secure"),T.partitioned&&(k+="; Partitioned"),T.priority)switch(typeof T.priority=="string"?T.priority.toLowerCase():void 0){case"low":k+="; Priority=Low";break;case"medium":k+="; Priority=Medium";break;case"high":k+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${T.priority}`)}if(T.sameSite)switch(typeof T.sameSite=="string"?T.sameSite.toLowerCase():T.sameSite){case!0:case"strict":k+="; SameSite=Strict";break;case"lax":k+="; SameSite=Lax";break;case"none":k+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${T.sameSite}`)}return k}function C(A){if(A.indexOf("%")===-1)return A;try{return decodeURIComponent(A)}catch{return A}}function D(A){return f.call(A)==="[object Date]"}return Ir}a2();var Em="popstate";function i2(r={}){function s(d,f){let{pathname:m,search:b,hash:w}=d.location;return mu("",{pathname:m,search:b,hash:w},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function u(d,f){return typeof f=="string"?f:go(f)}return o2(s,u,null,r)}function Je(r,s){if(r===!1||r===null||typeof r>"u")throw new Error(s)}function xn(r,s){if(!r){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function r2(){return Math.random().toString(36).substring(2,10)}function Dm(r,s){return{usr:r.state,key:r.key,idx:s}}function mu(r,s,u=null,d){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof s=="string"?Xi(s):s,state:u,key:s&&s.key||d||r2()}}function go({pathname:r="/",search:s="",hash:u=""}){return s&&s!=="?"&&(r+=s.charAt(0)==="?"?s:"?"+s),u&&u!=="#"&&(r+=u.charAt(0)==="#"?u:"#"+u),r}function Xi(r){let s={};if(r){let u=r.indexOf("#");u>=0&&(s.hash=r.substring(u),r=r.substring(0,u));let d=r.indexOf("?");d>=0&&(s.search=r.substring(d),r=r.substring(0,d)),r&&(s.pathname=r)}return s}function o2(r,s,u,d={}){let{window:f=document.defaultView,v5Compat:m=!1}=d,b=f.history,w="POP",g=null,x=C();x==null&&(x=0,b.replaceState({...b.state,idx:x},""));function C(){return(b.state||{idx:null}).idx}function D(){w="POP";let P=C(),k=P==null?null:P-x;x=P,g&&g({action:w,location:U.location,delta:k})}function A(P,k){w="PUSH";let B=mu(U.location,P,k);x=C()+1;let Y=Dm(B,x),F=U.createHref(B);try{b.pushState(Y,"",F)}catch(J){if(J instanceof DOMException&&J.name==="DataCloneError")throw J;f.location.assign(F)}m&&g&&g({action:w,location:U.location,delta:1})}function H(P,k){w="REPLACE";let B=mu(U.location,P,k);x=C();let Y=Dm(B,x),F=U.createHref(B);b.replaceState(Y,"",F),m&&g&&g({action:w,location:U.location,delta:0})}function T(P){return l2(P)}let U={get action(){return w},get location(){return r(f,b)},listen(P){if(g)throw new Error("A history only accepts one active listener");return f.addEventListener(Em,D),g=P,()=>{f.removeEventListener(Em,D),g=null}},createHref(P){return s(f,P)},createURL:T,encodeLocation(P){let k=T(P);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:A,replace:H,go(P){return b.go(P)}};return U}function l2(r,s=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Je(u,"No window.location.(origin|href) available to create URL");let d=typeof r=="string"?r:go(r);return d=d.replace(/ $/,"%20"),!s&&d.startsWith("//")&&(d=u+d),new URL(d,u)}function G0(r,s,u="/"){return s2(r,s,u,!1)}function s2(r,s,u,d){let f=typeof s=="string"?Xi(s):s,m=Pn(f.pathname||"/",u);if(m==null)return null;let b=V0(r);c2(b);let w=null;for(let g=0;w==null&&g<b.length;++g){let x=v2(m);w=b2(b[g],x,d)}return w}function V0(r,s=[],u=[],d=""){let f=(m,b,w)=>{let g={relativePath:w===void 0?m.path||"":w,caseSensitive:m.caseSensitive===!0,childrenIndex:b,route:m};g.relativePath.startsWith("/")&&(Je(g.relativePath.startsWith(d),`Absolute route path "${g.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(d.length));let x=On([d,g.relativePath]),C=u.concat(g);m.children&&m.children.length>0&&(Je(m.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),V0(m.children,s,C,x)),!(m.path==null&&!m.index)&&s.push({path:x,score:x2(x,m.index),routesMeta:C})};return r.forEach((m,b)=>{var w;if(m.path===""||!((w=m.path)!=null&&w.includes("?")))f(m,b);else for(let g of Q0(m.path))f(m,b,g)}),s}function Q0(r){let s=r.split("/");if(s.length===0)return[];let[u,...d]=s,f=u.endsWith("?"),m=u.replace(/\?$/,"");if(d.length===0)return f?[m,""]:[m];let b=Q0(d.join("/")),w=[];return w.push(...b.map(g=>g===""?m:[m,g].join("/"))),f&&w.push(...b),w.map(g=>r.startsWith("/")&&g===""?"/":g)}function c2(r){r.sort((s,u)=>s.score!==u.score?u.score-s.score:g2(s.routesMeta.map(d=>d.childrenIndex),u.routesMeta.map(d=>d.childrenIndex)))}var d2=/^:[\w-]+$/,u2=3,p2=2,f2=1,h2=10,m2=-2,Rm=r=>r==="*";function x2(r,s){let u=r.split("/"),d=u.length;return u.some(Rm)&&(d+=m2),s&&(d+=p2),u.filter(f=>!Rm(f)).reduce((f,m)=>f+(d2.test(m)?u2:m===""?f2:h2),d)}function g2(r,s){return r.length===s.length&&r.slice(0,-1).every((d,f)=>d===s[f])?r[r.length-1]-s[s.length-1]:0}function b2(r,s,u=!1){let{routesMeta:d}=r,f={},m="/",b=[];for(let w=0;w<d.length;++w){let g=d[w],x=w===d.length-1,C=m==="/"?s:s.slice(m.length)||"/",D=fs({path:g.relativePath,caseSensitive:g.caseSensitive,end:x},C),A=g.route;if(!D&&x&&u&&!d[d.length-1].route.index&&(D=fs({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},C)),!D)return null;Object.assign(f,D.params),b.push({params:f,pathname:On([m,D.pathname]),pathnameBase:S2(On([m,D.pathnameBase])),route:A}),D.pathnameBase!=="/"&&(m=On([m,D.pathnameBase]))}return b}function fs(r,s){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[u,d]=y2(r.path,r.caseSensitive,r.end),f=s.match(u);if(!f)return null;let m=f[0],b=m.replace(/(.)\/+$/,"$1"),w=f.slice(1);return{params:d.reduce((x,{paramName:C,isOptional:D},A)=>{if(C==="*"){let T=w[A]||"";b=m.slice(0,m.length-T.length).replace(/(.)\/+$/,"$1")}const H=w[A];return D&&!H?x[C]=void 0:x[C]=(H||"").replace(/%2F/g,"/"),x},{}),pathname:m,pathnameBase:b,pattern:r}}function y2(r,s=!1,u=!0){xn(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let d=[],f="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,w,g)=>(d.push({paramName:w,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(d.push({paramName:"*"}),f+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?f+="\\/*$":r!==""&&r!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,s?void 0:"i"),d]}function v2(r){try{return r.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return xn(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),r}}function Pn(r,s){if(s==="/")return r;if(!r.toLowerCase().startsWith(s.toLowerCase()))return null;let u=s.endsWith("/")?s.length-1:s.length,d=r.charAt(u);return d&&d!=="/"?null:r.slice(u)||"/"}function w2(r,s="/"){let{pathname:u,search:d="",hash:f=""}=typeof r=="string"?Xi(r):r;return{pathname:u?u.startsWith("/")?u:j2(u,s):s,search:C2(d),hash:z2(f)}}function j2(r,s){let u=s.replace(/\/+$/,"").split("/");return r.split("/").forEach(f=>{f===".."?u.length>1&&u.pop():f!=="."&&u.push(f)}),u.length>1?u.join("/"):"/"}function Yd(r,s,u,d){return`Cannot include a '${r}' character in a manually specified \`to.${s}\` field [${JSON.stringify(d)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function k2(r){return r.filter((s,u)=>u===0||s.route.path&&s.route.path.length>0)}function W0(r){let s=k2(r);return s.map((u,d)=>d===s.length-1?u.pathname:u.pathnameBase)}function Z0(r,s,u,d=!1){let f;typeof r=="string"?f=Xi(r):(f={...r},Je(!f.pathname||!f.pathname.includes("?"),Yd("?","pathname","search",f)),Je(!f.pathname||!f.pathname.includes("#"),Yd("#","pathname","hash",f)),Je(!f.search||!f.search.includes("#"),Yd("#","search","hash",f)));let m=r===""||f.pathname==="",b=m?"/":f.pathname,w;if(b==null)w=u;else{let D=s.length-1;if(!d&&b.startsWith("..")){let A=b.split("/");for(;A[0]==="..";)A.shift(),D-=1;f.pathname=A.join("/")}w=D>=0?s[D]:"/"}let g=w2(f,w),x=b&&b!=="/"&&b.endsWith("/"),C=(m||b===".")&&u.endsWith("/");return!g.pathname.endsWith("/")&&(x||C)&&(g.pathname+="/"),g}var On=r=>r.join("/").replace(/\/\/+/g,"/"),S2=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),C2=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,z2=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function M2(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var J0=["POST","PUT","PATCH","DELETE"];new Set(J0);var T2=["GET",...J0];new Set(T2);var Fi=v.createContext(null);Fi.displayName="DataRouter";var bs=v.createContext(null);bs.displayName="DataRouterState";var X0=v.createContext({isTransitioning:!1});X0.displayName="ViewTransition";var A2=v.createContext(new Map);A2.displayName="Fetchers";var L2=v.createContext(null);L2.displayName="Await";var gn=v.createContext(null);gn.displayName="Navigation";var vo=v.createContext(null);vo.displayName="Location";var _n=v.createContext({outlet:null,matches:[],isDataRoute:!1});_n.displayName="Route";var zu=v.createContext(null);zu.displayName="RouteError";function E2(r,{relative:s}={}){Je(wo(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:d}=v.useContext(gn),{hash:f,pathname:m,search:b}=jo(r,{relative:s}),w=m;return u!=="/"&&(w=m==="/"?u:On([u,m])),d.createHref({pathname:w,search:b,hash:f})}function wo(){return v.useContext(vo)!=null}function xa(){return Je(wo(),"useLocation() may be used only in the context of a <Router> component."),v.useContext(vo).location}var F0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function K0(r){v.useContext(gn).static||v.useLayoutEffect(r)}function Wa(){let{isDataRoute:r}=v.useContext(_n);return r?G2():D2()}function D2(){Je(wo(),"useNavigate() may be used only in the context of a <Router> component.");let r=v.useContext(Fi),{basename:s,navigator:u}=v.useContext(gn),{matches:d}=v.useContext(_n),{pathname:f}=xa(),m=JSON.stringify(W0(d)),b=v.useRef(!1);return K0(()=>{b.current=!0}),v.useCallback((g,x={})=>{if(xn(b.current,F0),!b.current)return;if(typeof g=="number"){u.go(g);return}let C=Z0(g,JSON.parse(m),f,x.relative==="path");r==null&&s!=="/"&&(C.pathname=C.pathname==="/"?s:On([s,C.pathname])),(x.replace?u.replace:u.push)(C,x.state,x)},[s,u,m,f,r])}v.createContext(null);function jo(r,{relative:s}={}){let{matches:u}=v.useContext(_n),{pathname:d}=xa(),f=JSON.stringify(W0(u));return v.useMemo(()=>Z0(r,JSON.parse(f),d,s==="path"),[r,f,d,s])}function R2(r,s){return I0(r,s)}function I0(r,s,u,d){var k;Je(wo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=v.useContext(gn),{matches:m}=v.useContext(_n),b=m[m.length-1],w=b?b.params:{},g=b?b.pathname:"/",x=b?b.pathnameBase:"/",C=b&&b.route;{let B=C&&C.path||"";e1(g,!C||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let D=xa(),A;if(s){let B=typeof s=="string"?Xi(s):s;Je(x==="/"||((k=B.pathname)==null?void 0:k.startsWith(x)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${B.pathname}" was given in the \`location\` prop.`),A=B}else A=D;let H=A.pathname||"/",T=H;if(x!=="/"){let B=x.replace(/^\//,"").split("/");T="/"+H.replace(/^\//,"").split("/").slice(B.length).join("/")}let U=G0(r,{pathname:T});xn(C||U!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),xn(U==null||U[U.length-1].route.element!==void 0||U[U.length-1].route.Component!==void 0||U[U.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let P=_2(U&&U.map(B=>Object.assign({},B,{params:Object.assign({},w,B.params),pathname:On([x,f.encodeLocation?f.encodeLocation(B.pathname).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?x:On([x,f.encodeLocation?f.encodeLocation(B.pathnameBase).pathname:B.pathnameBase])})),m,u,d);return s&&P?v.createElement(vo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...A},navigationType:"POP"}},P):P}function N2(){let r=Y2(),s=M2(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),u=r instanceof Error?r.stack:null,d="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:d},m={padding:"2px 4px",backgroundColor:d},b=null;return console.error("Error handled by React Router default ErrorBoundary:",r),b=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:m},"ErrorBoundary")," or"," ",v.createElement("code",{style:m},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},s),u?v.createElement("pre",{style:f},u):null,b)}var B2=v.createElement(N2,null),O2=class extends v.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,s){return s.location!==r.location||s.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:s.error,location:s.location,revalidation:r.revalidation||s.revalidation}}componentDidCatch(r,s){console.error("React Router caught the following error during render",r,s)}render(){return this.state.error!==void 0?v.createElement(_n.Provider,{value:this.props.routeContext},v.createElement(zu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function P2({routeContext:r,match:s,children:u}){let d=v.useContext(Fi);return d&&d.static&&d.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=s.route.id),v.createElement(_n.Provider,{value:r},u)}function _2(r,s=[],u=null,d=null){if(r==null){if(!u)return null;if(u.errors)r=u.matches;else if(s.length===0&&!u.initialized&&u.matches.length>0)r=u.matches;else return null}let f=r,m=u==null?void 0:u.errors;if(m!=null){let g=f.findIndex(x=>x.route.id&&(m==null?void 0:m[x.route.id])!==void 0);Je(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),f=f.slice(0,Math.min(f.length,g+1))}let b=!1,w=-1;if(u)for(let g=0;g<f.length;g++){let x=f[g];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(w=g),x.route.id){let{loaderData:C,errors:D}=u,A=x.route.loader&&!C.hasOwnProperty(x.route.id)&&(!D||D[x.route.id]===void 0);if(x.route.lazy||A){b=!0,w>=0?f=f.slice(0,w+1):f=[f[0]];break}}}return f.reduceRight((g,x,C)=>{let D,A=!1,H=null,T=null;u&&(D=m&&x.route.id?m[x.route.id]:void 0,H=x.route.errorElement||B2,b&&(w<0&&C===0?(e1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,T=null):w===C&&(A=!0,T=x.route.hydrateFallbackElement||null)));let U=s.concat(f.slice(0,C+1)),P=()=>{let k;return D?k=H:A?k=T:x.route.Component?k=v.createElement(x.route.Component,null):x.route.element?k=x.route.element:k=g,v.createElement(P2,{match:x,routeContext:{outlet:g,matches:U,isDataRoute:u!=null},children:k})};return u&&(x.route.ErrorBoundary||x.route.errorElement||C===0)?v.createElement(O2,{location:u.location,revalidation:u.revalidation,component:H,error:D,children:P(),routeContext:{outlet:null,matches:U,isDataRoute:!0}}):P()},null)}function Mu(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $2(r){let s=v.useContext(Fi);return Je(s,Mu(r)),s}function H2(r){let s=v.useContext(bs);return Je(s,Mu(r)),s}function U2(r){let s=v.useContext(_n);return Je(s,Mu(r)),s}function Tu(r){let s=U2(r),u=s.matches[s.matches.length-1];return Je(u.route.id,`${r} can only be used on routes that contain a unique "id"`),u.route.id}function q2(){return Tu("useRouteId")}function Y2(){var d;let r=v.useContext(zu),s=H2("useRouteError"),u=Tu("useRouteError");return r!==void 0?r:(d=s.errors)==null?void 0:d[u]}function G2(){let{router:r}=$2("useNavigate"),s=Tu("useNavigate"),u=v.useRef(!1);return K0(()=>{u.current=!0}),v.useCallback(async(f,m={})=>{xn(u.current,F0),u.current&&(typeof f=="number"?r.navigate(f):await r.navigate(f,{fromRouteId:s,...m}))},[r,s])}var Nm={};function e1(r,s,u){!s&&!Nm[r]&&(Nm[r]=!0,xn(!1,u))}v.memo(V2);function V2({routes:r,future:s,state:u}){return I0(r,void 0,u,s)}function fn(r){Je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Q2({basename:r="/",children:s=null,location:u,navigationType:d="POP",navigator:f,static:m=!1}){Je(!wo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=r.replace(/^\/*/,"/"),w=v.useMemo(()=>({basename:b,navigator:f,static:m,future:{}}),[b,f,m]);typeof u=="string"&&(u=Xi(u));let{pathname:g="/",search:x="",hash:C="",state:D=null,key:A="default"}=u,H=v.useMemo(()=>{let T=Pn(g,b);return T==null?null:{location:{pathname:T,search:x,hash:C,state:D,key:A},navigationType:d}},[b,g,x,C,D,A,d]);return xn(H!=null,`<Router basename="${b}"> is not able to match the URL "${g}${x}${C}" because it does not start with the basename, so the <Router> won't render anything.`),H==null?null:v.createElement(gn.Provider,{value:w},v.createElement(vo.Provider,{children:s,value:H}))}function W2({children:r,location:s}){return R2(xu(r),s)}function xu(r,s=[]){let u=[];return v.Children.forEach(r,(d,f)=>{if(!v.isValidElement(d))return;let m=[...s,f];if(d.type===v.Fragment){u.push.apply(u,xu(d.props.children,m));return}Je(d.type===fn,`[${typeof d.type=="string"?d.type:d.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Je(!d.props.index||!d.props.children,"An index route cannot have child routes.");let b={id:d.props.id||m.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,hydrateFallbackElement:d.props.hydrateFallbackElement,HydrateFallback:d.props.HydrateFallback,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.hasErrorBoundary===!0||d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(b.children=xu(d.props.children,m)),u.push(b)}),u}var os="get",ls="application/x-www-form-urlencoded";function ys(r){return r!=null&&typeof r.tagName=="string"}function Z2(r){return ys(r)&&r.tagName.toLowerCase()==="button"}function J2(r){return ys(r)&&r.tagName.toLowerCase()==="form"}function X2(r){return ys(r)&&r.tagName.toLowerCase()==="input"}function F2(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function K2(r,s){return r.button===0&&(!s||s==="_self")&&!F2(r)}var Ul=null;function I2(){if(Ul===null)try{new FormData(document.createElement("form"),0),Ul=!1}catch{Ul=!0}return Ul}var eb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Gd(r){return r!=null&&!eb.has(r)?(xn(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ls}"`),null):r}function tb(r,s){let u,d,f,m,b;if(J2(r)){let w=r.getAttribute("action");d=w?Pn(w,s):null,u=r.getAttribute("method")||os,f=Gd(r.getAttribute("enctype"))||ls,m=new FormData(r)}else if(Z2(r)||X2(r)&&(r.type==="submit"||r.type==="image")){let w=r.form;if(w==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=r.getAttribute("formaction")||w.getAttribute("action");if(d=g?Pn(g,s):null,u=r.getAttribute("formmethod")||w.getAttribute("method")||os,f=Gd(r.getAttribute("formenctype"))||Gd(w.getAttribute("enctype"))||ls,m=new FormData(w,r),!I2()){let{name:x,type:C,value:D}=r;if(C==="image"){let A=x?`${x}.`:"";m.append(`${A}x`,"0"),m.append(`${A}y`,"0")}else x&&m.append(x,D)}}else{if(ys(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=os,d=null,f=ls,b=r}return m&&f==="text/plain"&&(b=m,m=void 0),{action:d,method:u.toLowerCase(),encType:f,formData:m,body:b}}function Au(r,s){if(r===!1||r===null||typeof r>"u")throw new Error(s)}async function nb(r,s){if(r.id in s)return s[r.id];try{let u=await import(r.module);return s[r.id]=u,u}catch(u){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ab(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function ib(r,s,u){let d=await Promise.all(r.map(async f=>{let m=s.routes[f.route.id];if(m){let b=await nb(m,u);return b.links?b.links():[]}return[]}));return sb(d.flat(1).filter(ab).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Bm(r,s,u,d,f,m){let b=(g,x)=>u[x]?g.route.id!==u[x].route.id:!0,w=(g,x)=>{var C;return u[x].pathname!==g.pathname||((C=u[x].route.path)==null?void 0:C.endsWith("*"))&&u[x].params["*"]!==g.params["*"]};return m==="assets"?s.filter((g,x)=>b(g,x)||w(g,x)):m==="data"?s.filter((g,x)=>{var D;let C=d.routes[g.route.id];if(!C||!C.hasLoader)return!1;if(b(g,x)||w(g,x))return!0;if(g.route.shouldRevalidate){let A=g.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((D=u[0])==null?void 0:D.params)||{},nextUrl:new URL(r,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof A=="boolean")return A}return!0}):[]}function rb(r,s,{includeHydrateFallback:u}={}){return ob(r.map(d=>{let f=s.routes[d.route.id];if(!f)return[];let m=[f.module];return f.clientActionModule&&(m=m.concat(f.clientActionModule)),f.clientLoaderModule&&(m=m.concat(f.clientLoaderModule)),u&&f.hydrateFallbackModule&&(m=m.concat(f.hydrateFallbackModule)),f.imports&&(m=m.concat(f.imports)),m}).flat(1))}function ob(r){return[...new Set(r)]}function lb(r){let s={},u=Object.keys(r).sort();for(let d of u)s[d]=r[d];return s}function sb(r,s){let u=new Set;return new Set(s),r.reduce((d,f)=>{let m=JSON.stringify(lb(f));return u.has(m)||(u.add(m),d.push({key:m,link:f})),d},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var cb=new Set([100,101,204,205]);function db(r,s){let u=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return u.pathname==="/"?u.pathname="_root.data":s&&Pn(u.pathname,s)==="/"?u.pathname=`${s.replace(/\/$/,"")}/_root.data`:u.pathname=`${u.pathname.replace(/\/$/,"")}.data`,u}function t1(){let r=v.useContext(Fi);return Au(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function ub(){let r=v.useContext(bs);return Au(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Lu=v.createContext(void 0);Lu.displayName="FrameworkContext";function n1(){let r=v.useContext(Lu);return Au(r,"You must render this element inside a <HydratedRouter> element"),r}function pb(r,s){let u=v.useContext(Lu),[d,f]=v.useState(!1),[m,b]=v.useState(!1),{onFocus:w,onBlur:g,onMouseEnter:x,onMouseLeave:C,onTouchStart:D}=s,A=v.useRef(null);v.useEffect(()=>{if(r==="render"&&b(!0),r==="viewport"){let U=k=>{k.forEach(B=>{b(B.isIntersecting)})},P=new IntersectionObserver(U,{threshold:.5});return A.current&&P.observe(A.current),()=>{P.disconnect()}}},[r]),v.useEffect(()=>{if(d){let U=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout(U)}}},[d]);let H=()=>{f(!0)},T=()=>{f(!1),b(!1)};return u?r!=="intent"?[m,A,{}]:[m,A,{onFocus:eo(w,H),onBlur:eo(g,T),onMouseEnter:eo(x,H),onMouseLeave:eo(C,T),onTouchStart:eo(D,H)}]:[!1,A,{}]}function eo(r,s){return u=>{r&&r(u),u.defaultPrevented||s(u)}}function fb({page:r,...s}){let{router:u}=t1(),d=v.useMemo(()=>G0(u.routes,r,u.basename),[u.routes,r,u.basename]);return d?v.createElement(mb,{page:r,matches:d,...s}):null}function hb(r){let{manifest:s,routeModules:u}=n1(),[d,f]=v.useState([]);return v.useEffect(()=>{let m=!1;return ib(r,s,u).then(b=>{m||f(b)}),()=>{m=!0}},[r,s,u]),d}function mb({page:r,matches:s,...u}){let d=xa(),{manifest:f,routeModules:m}=n1(),{basename:b}=t1(),{loaderData:w,matches:g}=ub(),x=v.useMemo(()=>Bm(r,s,g,f,d,"data"),[r,s,g,f,d]),C=v.useMemo(()=>Bm(r,s,g,f,d,"assets"),[r,s,g,f,d]),D=v.useMemo(()=>{if(r===d.pathname+d.search+d.hash)return[];let T=new Set,U=!1;if(s.forEach(k=>{var Y;let B=f.routes[k.route.id];!B||!B.hasLoader||(!x.some(F=>F.route.id===k.route.id)&&k.route.id in w&&((Y=m[k.route.id])!=null&&Y.shouldRevalidate)||B.hasClientLoader?U=!0:T.add(k.route.id))}),T.size===0)return[];let P=db(r,b);return U&&T.size>0&&P.searchParams.set("_routes",s.filter(k=>T.has(k.route.id)).map(k=>k.route.id).join(",")),[P.pathname+P.search]},[b,w,d,f,x,s,r,m]),A=v.useMemo(()=>rb(C,f),[C,f]),H=hb(C);return v.createElement(v.Fragment,null,D.map(T=>v.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...u})),A.map(T=>v.createElement("link",{key:T,rel:"modulepreload",href:T,...u})),H.map(({key:T,link:U})=>v.createElement("link",{key:T,...U})))}function xb(...r){return s=>{r.forEach(u=>{typeof u=="function"?u(s):u!=null&&(u.current=s)})}}var a1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{a1&&(window.__reactRouterVersion="7.6.2")}catch{}function gb({basename:r,children:s,window:u}){let d=v.useRef();d.current==null&&(d.current=i2({window:u,v5Compat:!0}));let f=d.current,[m,b]=v.useState({action:f.action,location:f.location}),w=v.useCallback(g=>{v.startTransition(()=>b(g))},[b]);return v.useLayoutEffect(()=>f.listen(w),[f,w]),v.createElement(Q2,{basename:r,children:s,location:m.location,navigationType:m.action,navigator:f})}var i1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hn=v.forwardRef(function({onClick:s,discover:u="render",prefetch:d="none",relative:f,reloadDocument:m,replace:b,state:w,target:g,to:x,preventScrollReset:C,viewTransition:D,...A},H){let{basename:T}=v.useContext(gn),U=typeof x=="string"&&i1.test(x),P,k=!1;if(typeof x=="string"&&U&&(P=x,a1))try{let le=new URL(window.location.href),K=x.startsWith("//")?new URL(le.protocol+x):new URL(x),X=Pn(K.pathname,T);K.origin===le.origin&&X!=null?x=X+K.search+K.hash:k=!0}catch{xn(!1,`<Link to="${x}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let B=E2(x,{relative:f}),[Y,F,J]=pb(d,A),R=wb(x,{replace:b,state:w,target:g,preventScrollReset:C,relative:f,viewTransition:D});function Z(le){s&&s(le),le.defaultPrevented||R(le)}let ue=v.createElement("a",{...A,...J,href:P||B,onClick:k||m?s:Z,ref:xb(H,F),target:g,"data-discover":!U&&u==="render"?"true":void 0});return Y&&!U?v.createElement(v.Fragment,null,ue,v.createElement(fb,{page:B})):ue});hn.displayName="Link";var bb=v.forwardRef(function({"aria-current":s="page",caseSensitive:u=!1,className:d="",end:f=!1,style:m,to:b,viewTransition:w,children:g,...x},C){let D=jo(b,{relative:x.relative}),A=xa(),H=v.useContext(bs),{navigator:T,basename:U}=v.useContext(gn),P=H!=null&&zb(D)&&w===!0,k=T.encodeLocation?T.encodeLocation(D).pathname:D.pathname,B=A.pathname,Y=H&&H.navigation&&H.navigation.location?H.navigation.location.pathname:null;u||(B=B.toLowerCase(),Y=Y?Y.toLowerCase():null,k=k.toLowerCase()),Y&&U&&(Y=Pn(Y,U)||Y);const F=k!=="/"&&k.endsWith("/")?k.length-1:k.length;let J=B===k||!f&&B.startsWith(k)&&B.charAt(F)==="/",R=Y!=null&&(Y===k||!f&&Y.startsWith(k)&&Y.charAt(k.length)==="/"),Z={isActive:J,isPending:R,isTransitioning:P},ue=J?s:void 0,le;typeof d=="function"?le=d(Z):le=[d,J?"active":null,R?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let K=typeof m=="function"?m(Z):m;return v.createElement(hn,{...x,"aria-current":ue,className:le,ref:C,style:K,to:b,viewTransition:w},typeof g=="function"?g(Z):g)});bb.displayName="NavLink";var yb=v.forwardRef(({discover:r="render",fetcherKey:s,navigate:u,reloadDocument:d,replace:f,state:m,method:b=os,action:w,onSubmit:g,relative:x,preventScrollReset:C,viewTransition:D,...A},H)=>{let T=Sb(),U=Cb(w,{relative:x}),P=b.toLowerCase()==="get"?"get":"post",k=typeof w=="string"&&i1.test(w),B=Y=>{if(g&&g(Y),Y.defaultPrevented)return;Y.preventDefault();let F=Y.nativeEvent.submitter,J=(F==null?void 0:F.getAttribute("formmethod"))||b;T(F||Y.currentTarget,{fetcherKey:s,method:J,navigate:u,replace:f,state:m,relative:x,preventScrollReset:C,viewTransition:D})};return v.createElement("form",{ref:H,method:P,action:U,onSubmit:d?g:B,...A,"data-discover":!k&&r==="render"?"true":void 0})});yb.displayName="Form";function vb(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function r1(r){let s=v.useContext(Fi);return Je(s,vb(r)),s}function wb(r,{target:s,replace:u,state:d,preventScrollReset:f,relative:m,viewTransition:b}={}){let w=Wa(),g=xa(),x=jo(r,{relative:m});return v.useCallback(C=>{if(K2(C,s)){C.preventDefault();let D=u!==void 0?u:go(g)===go(x);w(r,{replace:D,state:d,preventScrollReset:f,relative:m,viewTransition:b})}},[g,w,x,u,d,s,r,f,m,b])}var jb=0,kb=()=>`__${String(++jb)}__`;function Sb(){let{router:r}=r1("useSubmit"),{basename:s}=v.useContext(gn),u=q2();return v.useCallback(async(d,f={})=>{let{action:m,method:b,encType:w,formData:g,body:x}=tb(d,s);if(f.navigate===!1){let C=f.fetcherKey||kb();await r.fetch(C,u,f.action||m,{preventScrollReset:f.preventScrollReset,formData:g,body:x,formMethod:f.method||b,formEncType:f.encType||w,flushSync:f.flushSync})}else await r.navigate(f.action||m,{preventScrollReset:f.preventScrollReset,formData:g,body:x,formMethod:f.method||b,formEncType:f.encType||w,replace:f.replace,state:f.state,fromRouteId:u,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,s,u])}function Cb(r,{relative:s}={}){let{basename:u}=v.useContext(gn),d=v.useContext(_n);Je(d,"useFormAction must be used inside a RouteContext");let[f]=d.matches.slice(-1),m={...jo(r||".",{relative:s})},b=xa();if(r==null){m.search=b.search;let w=new URLSearchParams(m.search),g=w.getAll("index");if(g.some(C=>C==="")){w.delete("index"),g.filter(D=>D).forEach(D=>w.append("index",D));let C=w.toString();m.search=C?`?${C}`:""}}return(!r||r===".")&&f.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(m.pathname=m.pathname==="/"?u:On([u,m.pathname])),go(m)}function zb(r,s={}){let u=v.useContext(X0);Je(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:d}=r1("useViewTransitionState"),f=jo(r,{relative:s.relative});if(!u.isTransitioning)return!1;let m=Pn(u.currentLocation.pathname,d)||u.currentLocation.pathname,b=Pn(u.nextLocation.pathname,d)||u.nextLocation.pathname;return fs(f.pathname,b)!=null||fs(f.pathname,m)!=null}[...cb];const o1=v.createContext(),bn=()=>{const r=v.useContext(o1);if(!r)throw new Error("useAuth must be used within an AuthProvider");return r},Mb=({children:r})=>{const[s,u]=v.useState(null),[d,f]=v.useState(!0),[m,b]=v.useState({isVisible:!1,message:"",type:"success"}),w={email:"john.doe@gmail.com",password:"password123"},g={id:"123",email:"john.doe@gmail.com",firstName:"John",lastName:"Doe",name:"John Doe",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"};v.useEffect(()=>{const P=localStorage.getItem("user"),k=localStorage.getItem("token");P&&k&&u(JSON.parse(P)),f(!1)},[]);const x=(P,k="success")=>{b({isVisible:!0,message:P,type:k})},C=()=>{b(P=>({...P,isVisible:!1}))},D=(P,k)=>P===w.email&&k===w.password,A=(P,k,B=!0)=>{localStorage.setItem("user",JSON.stringify(P)),localStorage.setItem("token",k),u(P),B&&x(`Welcome back, ${P.firstName}!`,"success")},U={user:s,login:A,loginWithCredentials:(P,k)=>D(P,k)?(A(g,"dummy-jwt-token-12345"),{success:!0}):{success:!1,error:"Invalid email or password. Please try again."},logout:()=>{localStorage.removeItem("user"),localStorage.removeItem("token"),u(null),x("User logged out","info")},authenticate:D,loading:d,isAuthenticated:!!s,notification:m,showNotification:x,hideNotification:C,dummyCredentials:w};return a.jsx(o1.Provider,{value:U,children:r})};var At=function(){return At=Object.assign||function(s){for(var u,d=1,f=arguments.length;d<f;d++){u=arguments[d];for(var m in u)Object.prototype.hasOwnProperty.call(u,m)&&(s[m]=u[m])}return s},At.apply(this,arguments)};function hs(r,s,u){if(u||arguments.length===2)for(var d=0,f=s.length,m;d<f;d++)(m||!(d in s))&&(m||(m=Array.prototype.slice.call(s,0,d)),m[d]=s[d]);return r.concat(m||Array.prototype.slice.call(s))}var Qe="-ms-",xo="-moz-",Ne="-webkit-",l1="comm",vs="rule",Eu="decl",Tb="@import",s1="@keyframes",Ab="@layer",c1=Math.abs,Du=String.fromCharCode,gu=Object.assign;function Lb(r,s){return pt(r,0)^45?(((s<<2^pt(r,0))<<2^pt(r,1))<<2^pt(r,2))<<2^pt(r,3):0}function d1(r){return r.trim()}function Bn(r,s){return(r=s.exec(r))?r[0]:r}function ke(r,s,u){return r.replace(s,u)}function ss(r,s,u){return r.indexOf(s,u)}function pt(r,s){return r.charCodeAt(s)|0}function Vi(r,s,u){return r.slice(s,u)}function mn(r){return r.length}function u1(r){return r.length}function mo(r,s){return s.push(r),r}function Eb(r,s){return r.map(s).join("")}function Om(r,s){return r.filter(function(u){return!Bn(u,s)})}var ws=1,Qi=1,p1=0,Xt=0,at=0,Ki="";function js(r,s,u,d,f,m,b,w){return{value:r,root:s,parent:u,type:d,props:f,children:m,line:ws,column:Qi,length:b,return:"",siblings:w}}function ma(r,s){return gu(js("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},s)}function Ni(r){for(;r.root;)r=ma(r.root,{children:[r]});mo(r,r.siblings)}function Db(){return at}function Rb(){return at=Xt>0?pt(Ki,--Xt):0,Qi--,at===10&&(Qi=1,ws--),at}function nn(){return at=Xt<p1?pt(Ki,Xt++):0,Qi++,at===10&&(Qi=1,ws++),at}function Va(){return pt(Ki,Xt)}function cs(){return Xt}function ks(r,s){return Vi(Ki,r,s)}function bu(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Nb(r){return ws=Qi=1,p1=mn(Ki=r),Xt=0,[]}function Bb(r){return Ki="",r}function Vd(r){return d1(ks(Xt-1,yu(r===91?r+2:r===40?r+1:r)))}function Ob(r){for(;(at=Va())&&at<33;)nn();return bu(r)>2||bu(at)>3?"":" "}function Pb(r,s){for(;--s&&nn()&&!(at<48||at>102||at>57&&at<65||at>70&&at<97););return ks(r,cs()+(s<6&&Va()==32&&nn()==32))}function yu(r){for(;nn();)switch(at){case r:return Xt;case 34:case 39:r!==34&&r!==39&&yu(at);break;case 40:r===41&&yu(r);break;case 92:nn();break}return Xt}function _b(r,s){for(;nn()&&r+at!==57;)if(r+at===84&&Va()===47)break;return"/*"+ks(s,Xt-1)+"*"+Du(r===47?r:nn())}function $b(r){for(;!bu(Va());)nn();return ks(r,Xt)}function Hb(r){return Bb(ds("",null,null,null,[""],r=Nb(r),0,[0],r))}function ds(r,s,u,d,f,m,b,w,g){for(var x=0,C=0,D=b,A=0,H=0,T=0,U=1,P=1,k=1,B=0,Y="",F=f,J=m,R=d,Z=Y;P;)switch(T=B,B=nn()){case 40:if(T!=108&&pt(Z,D-1)==58){ss(Z+=ke(Vd(B),"&","&\f"),"&\f",c1(x?w[x-1]:0))!=-1&&(k=-1);break}case 34:case 39:case 91:Z+=Vd(B);break;case 9:case 10:case 13:case 32:Z+=Ob(T);break;case 92:Z+=Pb(cs()-1,7);continue;case 47:switch(Va()){case 42:case 47:mo(Ub(_b(nn(),cs()),s,u,g),g);break;default:Z+="/"}break;case 123*U:w[x++]=mn(Z)*k;case 125*U:case 59:case 0:switch(B){case 0:case 125:P=0;case 59+C:k==-1&&(Z=ke(Z,/\f/g,"")),H>0&&mn(Z)-D&&mo(H>32?_m(Z+";",d,u,D-1,g):_m(ke(Z," ","")+";",d,u,D-2,g),g);break;case 59:Z+=";";default:if(mo(R=Pm(Z,s,u,x,C,f,w,Y,F=[],J=[],D,m),m),B===123)if(C===0)ds(Z,s,R,R,F,m,D,w,J);else switch(A===99&&pt(Z,3)===110?100:A){case 100:case 108:case 109:case 115:ds(r,R,R,d&&mo(Pm(r,R,R,0,0,f,w,Y,f,F=[],D,J),J),f,J,D,w,d?F:J);break;default:ds(Z,R,R,R,[""],J,0,w,J)}}x=C=H=0,U=k=1,Y=Z="",D=b;break;case 58:D=1+mn(Z),H=T;default:if(U<1){if(B==123)--U;else if(B==125&&U++==0&&Rb()==125)continue}switch(Z+=Du(B),B*U){case 38:k=C>0?1:(Z+="\f",-1);break;case 44:w[x++]=(mn(Z)-1)*k,k=1;break;case 64:Va()===45&&(Z+=Vd(nn())),A=Va(),C=D=mn(Y=Z+=$b(cs())),B++;break;case 45:T===45&&mn(Z)==2&&(U=0)}}return m}function Pm(r,s,u,d,f,m,b,w,g,x,C,D){for(var A=f-1,H=f===0?m:[""],T=u1(H),U=0,P=0,k=0;U<d;++U)for(var B=0,Y=Vi(r,A+1,A=c1(P=b[U])),F=r;B<T;++B)(F=d1(P>0?H[B]+" "+Y:ke(Y,/&\f/g,H[B])))&&(g[k++]=F);return js(r,s,u,f===0?vs:w,g,x,C,D)}function Ub(r,s,u,d){return js(r,s,u,l1,Du(Db()),Vi(r,2,-2),0,d)}function _m(r,s,u,d,f){return js(r,s,u,Eu,Vi(r,0,d),Vi(r,d+1,-1),d,f)}function f1(r,s,u){switch(Lb(r,s)){case 5103:return Ne+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ne+r+r;case 4789:return xo+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return Ne+r+xo+r+Qe+r+r;case 5936:switch(pt(r,s+11)){case 114:return Ne+r+Qe+ke(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return Ne+r+Qe+ke(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return Ne+r+Qe+ke(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return Ne+r+Qe+r+r;case 6165:return Ne+r+Qe+"flex-"+r+r;case 5187:return Ne+r+ke(r,/(\w+).+(:[^]+)/,Ne+"box-$1$2"+Qe+"flex-$1$2")+r;case 5443:return Ne+r+Qe+"flex-item-"+ke(r,/flex-|-self/g,"")+(Bn(r,/flex-|baseline/)?"":Qe+"grid-row-"+ke(r,/flex-|-self/g,""))+r;case 4675:return Ne+r+Qe+"flex-line-pack"+ke(r,/align-content|flex-|-self/g,"")+r;case 5548:return Ne+r+Qe+ke(r,"shrink","negative")+r;case 5292:return Ne+r+Qe+ke(r,"basis","preferred-size")+r;case 6060:return Ne+"box-"+ke(r,"-grow","")+Ne+r+Qe+ke(r,"grow","positive")+r;case 4554:return Ne+ke(r,/([^-])(transform)/g,"$1"+Ne+"$2")+r;case 6187:return ke(ke(ke(r,/(zoom-|grab)/,Ne+"$1"),/(image-set)/,Ne+"$1"),r,"")+r;case 5495:case 3959:return ke(r,/(image-set\([^]*)/,Ne+"$1$`$1");case 4968:return ke(ke(r,/(.+:)(flex-)?(.*)/,Ne+"box-pack:$3"+Qe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ne+r+r;case 4200:if(!Bn(r,/flex-|baseline/))return Qe+"grid-column-align"+Vi(r,s)+r;break;case 2592:case 3360:return Qe+ke(r,"template-","")+r;case 4384:case 3616:return u&&u.some(function(d,f){return s=f,Bn(d.props,/grid-\w+-end/)})?~ss(r+(u=u[s].value),"span",0)?r:Qe+ke(r,"-start","")+r+Qe+"grid-row-span:"+(~ss(u,"span",0)?Bn(u,/\d+/):+Bn(u,/\d+/)-+Bn(r,/\d+/))+";":Qe+ke(r,"-start","")+r;case 4896:case 4128:return u&&u.some(function(d){return Bn(d.props,/grid-\w+-start/)})?r:Qe+ke(ke(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return ke(r,/(.+)-inline(.+)/,Ne+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(mn(r)-1-s>6)switch(pt(r,s+1)){case 109:if(pt(r,s+4)!==45)break;case 102:return ke(r,/(.+:)(.+)-([^]+)/,"$1"+Ne+"$2-$3$1"+xo+(pt(r,s+3)==108?"$3":"$2-$3"))+r;case 115:return~ss(r,"stretch",0)?f1(ke(r,"stretch","fill-available"),s,u)+r:r}break;case 5152:case 5920:return ke(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(d,f,m,b,w,g,x){return Qe+f+":"+m+x+(b?Qe+f+"-span:"+(w?g:+g-+m)+x:"")+r});case 4949:if(pt(r,s+6)===121)return ke(r,":",":"+Ne)+r;break;case 6444:switch(pt(r,pt(r,14)===45?18:11)){case 120:return ke(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ne+(pt(r,14)===45?"inline-":"")+"box$3$1"+Ne+"$2$3$1"+Qe+"$2box$3")+r;case 100:return ke(r,":",":"+Qe)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ke(r,"scroll-","scroll-snap-")+r}return r}function ms(r,s){for(var u="",d=0;d<r.length;d++)u+=s(r[d],d,r,s)||"";return u}function qb(r,s,u,d){switch(r.type){case Ab:if(r.children.length)break;case Tb:case Eu:return r.return=r.return||r.value;case l1:return"";case s1:return r.return=r.value+"{"+ms(r.children,d)+"}";case vs:if(!mn(r.value=r.props.join(",")))return""}return mn(u=ms(r.children,d))?r.return=r.value+"{"+u+"}":""}function Yb(r){var s=u1(r);return function(u,d,f,m){for(var b="",w=0;w<s;w++)b+=r[w](u,d,f,m)||"";return b}}function Gb(r){return function(s){s.root||(s=s.return)&&r(s)}}function Vb(r,s,u,d){if(r.length>-1&&!r.return)switch(r.type){case Eu:r.return=f1(r.value,r.length,u);return;case s1:return ms([ma(r,{value:ke(r.value,"@","@"+Ne)})],d);case vs:if(r.length)return Eb(u=r.props,function(f){switch(Bn(f,d=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ni(ma(r,{props:[ke(f,/:(read-\w+)/,":"+xo+"$1")]})),Ni(ma(r,{props:[f]})),gu(r,{props:Om(u,d)});break;case"::placeholder":Ni(ma(r,{props:[ke(f,/:(plac\w+)/,":"+Ne+"input-$1")]})),Ni(ma(r,{props:[ke(f,/:(plac\w+)/,":"+xo+"$1")]})),Ni(ma(r,{props:[ke(f,/:(plac\w+)/,Qe+"input-$1")]})),Ni(ma(r,{props:[f]})),gu(r,{props:Om(u,d)});break}return""})}}var Qb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Pt={},Wi=typeof process<"u"&&Pt!==void 0&&(Pt.REACT_APP_SC_ATTR||Pt.SC_ATTR)||"data-styled",h1="active",m1="data-styled-version",Ss="6.1.19",Ru=`/*!sc*/
`,xs=typeof window<"u"&&typeof document<"u",Wb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Pt!==void 0&&Pt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Pt.REACT_APP_SC_DISABLE_SPEEDY!==""?Pt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Pt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Pt!==void 0&&Pt.SC_DISABLE_SPEEDY!==void 0&&Pt.SC_DISABLE_SPEEDY!==""&&Pt.SC_DISABLE_SPEEDY!=="false"&&Pt.SC_DISABLE_SPEEDY),Cs=Object.freeze([]),Zi=Object.freeze({});function Zb(r,s,u){return u===void 0&&(u=Zi),r.theme!==u.theme&&r.theme||s||u.theme}var x1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Jb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Xb=/(^-|-$)/g;function $m(r){return r.replace(Jb,"-").replace(Xb,"")}var Fb=/(a)(d)/gi,ql=52,Hm=function(r){return String.fromCharCode(r+(r>25?39:97))};function vu(r){var s,u="";for(s=Math.abs(r);s>ql;s=s/ql|0)u=Hm(s%ql)+u;return(Hm(s%ql)+u).replace(Fb,"$1-$2")}var Qd,g1=5381,Yi=function(r,s){for(var u=s.length;u;)r=33*r^s.charCodeAt(--u);return r},b1=function(r){return Yi(g1,r)};function Kb(r){return vu(b1(r)>>>0)}function Ib(r){return r.displayName||r.name||"Component"}function Wd(r){return typeof r=="string"&&!0}var y1=typeof Symbol=="function"&&Symbol.for,v1=y1?Symbol.for("react.memo"):60115,ey=y1?Symbol.for("react.forward_ref"):60112,ty={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ny={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},w1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ay=((Qd={})[ey]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qd[v1]=w1,Qd);function Um(r){return("type"in(s=r)&&s.type.$$typeof)===v1?w1:"$$typeof"in r?ay[r.$$typeof]:ty;var s}var iy=Object.defineProperty,ry=Object.getOwnPropertyNames,qm=Object.getOwnPropertySymbols,oy=Object.getOwnPropertyDescriptor,ly=Object.getPrototypeOf,Ym=Object.prototype;function j1(r,s,u){if(typeof s!="string"){if(Ym){var d=ly(s);d&&d!==Ym&&j1(r,d,u)}var f=ry(s);qm&&(f=f.concat(qm(s)));for(var m=Um(r),b=Um(s),w=0;w<f.length;++w){var g=f[w];if(!(g in ny||u&&u[g]||b&&g in b||m&&g in m)){var x=oy(s,g);try{iy(r,g,x)}catch{}}}}return r}function Ji(r){return typeof r=="function"}function Nu(r){return typeof r=="object"&&"styledComponentId"in r}function Ga(r,s){return r&&s?"".concat(r," ").concat(s):r||s||""}function Gm(r,s){if(r.length===0)return"";for(var u=r[0],d=1;d<r.length;d++)u+=r[d];return u}function bo(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function wu(r,s,u){if(u===void 0&&(u=!1),!u&&!bo(r)&&!Array.isArray(r))return s;if(Array.isArray(s))for(var d=0;d<s.length;d++)r[d]=wu(r[d],s[d]);else if(bo(s))for(var d in s)r[d]=wu(r[d],s[d]);return r}function Bu(r,s){Object.defineProperty(r,"toString",{value:s})}function ko(r){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r," for more information.").concat(s.length>0?" Args: ".concat(s.join(", ")):""))}var sy=function(){function r(s){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=s}return r.prototype.indexOfGroup=function(s){for(var u=0,d=0;d<s;d++)u+=this.groupSizes[d];return u},r.prototype.insertRules=function(s,u){if(s>=this.groupSizes.length){for(var d=this.groupSizes,f=d.length,m=f;s>=m;)if((m<<=1)<0)throw ko(16,"".concat(s));this.groupSizes=new Uint32Array(m),this.groupSizes.set(d),this.length=m;for(var b=f;b<m;b++)this.groupSizes[b]=0}for(var w=this.indexOfGroup(s+1),g=(b=0,u.length);b<g;b++)this.tag.insertRule(w,u[b])&&(this.groupSizes[s]++,w++)},r.prototype.clearGroup=function(s){if(s<this.length){var u=this.groupSizes[s],d=this.indexOfGroup(s),f=d+u;this.groupSizes[s]=0;for(var m=d;m<f;m++)this.tag.deleteRule(d)}},r.prototype.getGroup=function(s){var u="";if(s>=this.length||this.groupSizes[s]===0)return u;for(var d=this.groupSizes[s],f=this.indexOfGroup(s),m=f+d,b=f;b<m;b++)u+="".concat(this.tag.getRule(b)).concat(Ru);return u},r}(),us=new Map,gs=new Map,ps=1,Yl=function(r){if(us.has(r))return us.get(r);for(;gs.has(ps);)ps++;var s=ps++;return us.set(r,s),gs.set(s,r),s},cy=function(r,s){ps=s+1,us.set(r,s),gs.set(s,r)},dy="style[".concat(Wi,"][").concat(m1,'="').concat(Ss,'"]'),uy=new RegExp("^".concat(Wi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),py=function(r,s,u){for(var d,f=u.split(","),m=0,b=f.length;m<b;m++)(d=f[m])&&r.registerName(s,d)},fy=function(r,s){for(var u,d=((u=s.textContent)!==null&&u!==void 0?u:"").split(Ru),f=[],m=0,b=d.length;m<b;m++){var w=d[m].trim();if(w){var g=w.match(uy);if(g){var x=0|parseInt(g[1],10),C=g[2];x!==0&&(cy(C,x),py(r,C,g[3]),r.getTag().insertRules(x,f)),f.length=0}else f.push(w)}}},Vm=function(r){for(var s=document.querySelectorAll(dy),u=0,d=s.length;u<d;u++){var f=s[u];f&&f.getAttribute(Wi)!==h1&&(fy(r,f),f.parentNode&&f.parentNode.removeChild(f))}};function hy(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var k1=function(r){var s=document.head,u=r||s,d=document.createElement("style"),f=function(w){var g=Array.from(w.querySelectorAll("style[".concat(Wi,"]")));return g[g.length-1]}(u),m=f!==void 0?f.nextSibling:null;d.setAttribute(Wi,h1),d.setAttribute(m1,Ss);var b=hy();return b&&d.setAttribute("nonce",b),u.insertBefore(d,m),d},my=function(){function r(s){this.element=k1(s),this.element.appendChild(document.createTextNode("")),this.sheet=function(u){if(u.sheet)return u.sheet;for(var d=document.styleSheets,f=0,m=d.length;f<m;f++){var b=d[f];if(b.ownerNode===u)return b}throw ko(17)}(this.element),this.length=0}return r.prototype.insertRule=function(s,u){try{return this.sheet.insertRule(u,s),this.length++,!0}catch{return!1}},r.prototype.deleteRule=function(s){this.sheet.deleteRule(s),this.length--},r.prototype.getRule=function(s){var u=this.sheet.cssRules[s];return u&&u.cssText?u.cssText:""},r}(),xy=function(){function r(s){this.element=k1(s),this.nodes=this.element.childNodes,this.length=0}return r.prototype.insertRule=function(s,u){if(s<=this.length&&s>=0){var d=document.createTextNode(u);return this.element.insertBefore(d,this.nodes[s]||null),this.length++,!0}return!1},r.prototype.deleteRule=function(s){this.element.removeChild(this.nodes[s]),this.length--},r.prototype.getRule=function(s){return s<this.length?this.nodes[s].textContent:""},r}(),gy=function(){function r(s){this.rules=[],this.length=0}return r.prototype.insertRule=function(s,u){return s<=this.length&&(this.rules.splice(s,0,u),this.length++,!0)},r.prototype.deleteRule=function(s){this.rules.splice(s,1),this.length--},r.prototype.getRule=function(s){return s<this.length?this.rules[s]:""},r}(),Qm=xs,by={isServer:!xs,useCSSOMInjection:!Wb},S1=function(){function r(s,u,d){s===void 0&&(s=Zi),u===void 0&&(u={});var f=this;this.options=At(At({},by),s),this.gs=u,this.names=new Map(d),this.server=!!s.isServer,!this.server&&xs&&Qm&&(Qm=!1,Vm(this)),Bu(this,function(){return function(m){for(var b=m.getTag(),w=b.length,g="",x=function(D){var A=function(k){return gs.get(k)}(D);if(A===void 0)return"continue";var H=m.names.get(A),T=b.getGroup(D);if(H===void 0||!H.size||T.length===0)return"continue";var U="".concat(Wi,".g").concat(D,'[id="').concat(A,'"]'),P="";H!==void 0&&H.forEach(function(k){k.length>0&&(P+="".concat(k,","))}),g+="".concat(T).concat(U,'{content:"').concat(P,'"}').concat(Ru)},C=0;C<w;C++)x(C);return g}(f)})}return r.registerId=function(s){return Yl(s)},r.prototype.rehydrate=function(){!this.server&&xs&&Vm(this)},r.prototype.reconstructWithOptions=function(s,u){return u===void 0&&(u=!0),new r(At(At({},this.options),s),this.gs,u&&this.names||void 0)},r.prototype.allocateGSInstance=function(s){return this.gs[s]=(this.gs[s]||0)+1},r.prototype.getTag=function(){return this.tag||(this.tag=(s=function(u){var d=u.useCSSOMInjection,f=u.target;return u.isServer?new gy(f):d?new my(f):new xy(f)}(this.options),new sy(s)));var s},r.prototype.hasNameForId=function(s,u){return this.names.has(s)&&this.names.get(s).has(u)},r.prototype.registerName=function(s,u){if(Yl(s),this.names.has(s))this.names.get(s).add(u);else{var d=new Set;d.add(u),this.names.set(s,d)}},r.prototype.insertRules=function(s,u,d){this.registerName(s,u),this.getTag().insertRules(Yl(s),d)},r.prototype.clearNames=function(s){this.names.has(s)&&this.names.get(s).clear()},r.prototype.clearRules=function(s){this.getTag().clearGroup(Yl(s)),this.clearNames(s)},r.prototype.clearTag=function(){this.tag=void 0},r}(),yy=/&/g,vy=/^\s*\/\/.*$/gm;function C1(r,s){return r.map(function(u){return u.type==="rule"&&(u.value="".concat(s," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(s," ")),u.props=u.props.map(function(d){return"".concat(s," ").concat(d)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=C1(u.children,s)),u})}function wy(r){var s,u,d,f=Zi,m=f.options,b=m===void 0?Zi:m,w=f.plugins,g=w===void 0?Cs:w,x=function(A,H,T){return T.startsWith(u)&&T.endsWith(u)&&T.replaceAll(u,"").length>0?".".concat(s):A},C=g.slice();C.push(function(A){A.type===vs&&A.value.includes("&")&&(A.props[0]=A.props[0].replace(yy,u).replace(d,x))}),b.prefix&&C.push(Vb),C.push(qb);var D=function(A,H,T,U){H===void 0&&(H=""),T===void 0&&(T=""),U===void 0&&(U="&"),s=U,u=H,d=new RegExp("\\".concat(u,"\\b"),"g");var P=A.replace(vy,""),k=Hb(T||H?"".concat(T," ").concat(H," { ").concat(P," }"):P);b.namespace&&(k=C1(k,b.namespace));var B=[];return ms(k,Yb(C.concat(Gb(function(Y){return B.push(Y)})))),B};return D.hash=g.length?g.reduce(function(A,H){return H.name||ko(15),Yi(A,H.name)},g1).toString():"",D}var jy=new S1,ju=wy(),z1=Gi.createContext({shouldForwardProp:void 0,styleSheet:jy,stylis:ju});z1.Consumer;Gi.createContext(void 0);function Wm(){return v.useContext(z1)}var ky=function(){function r(s,u){var d=this;this.inject=function(f,m){m===void 0&&(m=ju);var b=d.name+m.hash;f.hasNameForId(d.id,b)||f.insertRules(d.id,b,m(d.rules,b,"@keyframes"))},this.name=s,this.id="sc-keyframes-".concat(s),this.rules=u,Bu(this,function(){throw ko(12,String(d.name))})}return r.prototype.getName=function(s){return s===void 0&&(s=ju),this.name+s.hash},r}(),Sy=function(r){return r>="A"&&r<="Z"};function Zm(r){for(var s="",u=0;u<r.length;u++){var d=r[u];if(u===1&&d==="-"&&r[0]==="-")return r;Sy(d)?s+="-"+d.toLowerCase():s+=d}return s.startsWith("ms-")?"-"+s:s}var M1=function(r){return r==null||r===!1||r===""},T1=function(r){var s,u,d=[];for(var f in r){var m=r[f];r.hasOwnProperty(f)&&!M1(m)&&(Array.isArray(m)&&m.isCss||Ji(m)?d.push("".concat(Zm(f),":"),m,";"):bo(m)?d.push.apply(d,hs(hs(["".concat(f," {")],T1(m),!1),["}"],!1)):d.push("".concat(Zm(f),": ").concat((s=f,(u=m)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||s in Qb||s.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return d};function Qa(r,s,u,d){if(M1(r))return[];if(Nu(r))return[".".concat(r.styledComponentId)];if(Ji(r)){if(!Ji(m=r)||m.prototype&&m.prototype.isReactComponent||!s)return[r];var f=r(s);return Qa(f,s,u,d)}var m;return r instanceof ky?u?(r.inject(u,d),[r.getName(d)]):[r]:bo(r)?T1(r):Array.isArray(r)?Array.prototype.concat.apply(Cs,r.map(function(b){return Qa(b,s,u,d)})):[r.toString()]}function Cy(r){for(var s=0;s<r.length;s+=1){var u=r[s];if(Ji(u)&&!Nu(u))return!1}return!0}var zy=b1(Ss),My=function(){function r(s,u,d){this.rules=s,this.staticRulesId="",this.isStatic=(d===void 0||d.isStatic)&&Cy(s),this.componentId=u,this.baseHash=Yi(zy,u),this.baseStyle=d,S1.registerId(u)}return r.prototype.generateAndInjectStyles=function(s,u,d){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(s,u,d):"";if(this.isStatic&&!d.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))f=Ga(f,this.staticRulesId);else{var m=Gm(Qa(this.rules,s,u,d)),b=vu(Yi(this.baseHash,m)>>>0);if(!u.hasNameForId(this.componentId,b)){var w=d(m,".".concat(b),void 0,this.componentId);u.insertRules(this.componentId,b,w)}f=Ga(f,b),this.staticRulesId=b}else{for(var g=Yi(this.baseHash,d.hash),x="",C=0;C<this.rules.length;C++){var D=this.rules[C];if(typeof D=="string")x+=D;else if(D){var A=Gm(Qa(D,s,u,d));g=Yi(g,A+C),x+=A}}if(x){var H=vu(g>>>0);u.hasNameForId(this.componentId,H)||u.insertRules(this.componentId,H,d(x,".".concat(H),void 0,this.componentId)),f=Ga(f,H)}}return f},r}(),A1=Gi.createContext(void 0);A1.Consumer;var Zd={};function Ty(r,s,u){var d=Nu(r),f=r,m=!Wd(r),b=s.attrs,w=b===void 0?Cs:b,g=s.componentId,x=g===void 0?function(F,J){var R=typeof F!="string"?"sc":$m(F);Zd[R]=(Zd[R]||0)+1;var Z="".concat(R,"-").concat(Kb(Ss+R+Zd[R]));return J?"".concat(J,"-").concat(Z):Z}(s.displayName,s.parentComponentId):g,C=s.displayName,D=C===void 0?function(F){return Wd(F)?"styled.".concat(F):"Styled(".concat(Ib(F),")")}(r):C,A=s.displayName&&s.componentId?"".concat($m(s.displayName),"-").concat(s.componentId):s.componentId||x,H=d&&f.attrs?f.attrs.concat(w).filter(Boolean):w,T=s.shouldForwardProp;if(d&&f.shouldForwardProp){var U=f.shouldForwardProp;if(s.shouldForwardProp){var P=s.shouldForwardProp;T=function(F,J){return U(F,J)&&P(F,J)}}else T=U}var k=new My(u,A,d?f.componentStyle:void 0);function B(F,J){return function(R,Z,ue){var le=R.attrs,K=R.componentStyle,X=R.defaultProps,se=R.foldedComponentIds,me=R.styledComponentId,Be=R.target,Ae=Gi.useContext(A1),$=Wm(),I=R.shouldForwardProp||$.shouldForwardProp,de=Zb(Z,Ae,X)||Zi,be=function(z,q,oe){for(var ne,De=At(At({},q),{className:void 0,theme:oe}),Ge=0;Ge<z.length;Ge+=1){var Ve=Ji(ne=z[Ge])?ne(De):ne;for(var qe in Ve)De[qe]=qe==="className"?Ga(De[qe],Ve[qe]):qe==="style"?At(At({},De[qe]),Ve[qe]):Ve[qe]}return q.className&&(De.className=Ga(De.className,q.className)),De}(le,Z,de),j=be.as||Be,Q={};for(var ee in be)be[ee]===void 0||ee[0]==="$"||ee==="as"||ee==="theme"&&be.theme===de||(ee==="forwardedAs"?Q.as=be.forwardedAs:I&&!I(ee,j)||(Q[ee]=be[ee]));var te=function(z,q){var oe=Wm(),ne=z.generateAndInjectStyles(q,oe.styleSheet,oe.stylis);return ne}(K,be),ce=Ga(se,me);return te&&(ce+=" "+te),be.className&&(ce+=" "+be.className),Q[Wd(j)&&!x1.has(j)?"class":"className"]=ce,ue&&(Q.ref=ue),v.createElement(j,Q)}(Y,F,J)}B.displayName=D;var Y=Gi.forwardRef(B);return Y.attrs=H,Y.componentStyle=k,Y.displayName=D,Y.shouldForwardProp=T,Y.foldedComponentIds=d?Ga(f.foldedComponentIds,f.styledComponentId):"",Y.styledComponentId=A,Y.target=d?f.target:r,Object.defineProperty(Y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(F){this._foldedDefaultProps=d?function(J){for(var R=[],Z=1;Z<arguments.length;Z++)R[Z-1]=arguments[Z];for(var ue=0,le=R;ue<le.length;ue++)wu(J,le[ue],!0);return J}({},f.defaultProps,F):F}}),Bu(Y,function(){return".".concat(Y.styledComponentId)}),m&&j1(Y,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Y}function Jm(r,s){for(var u=[r[0]],d=0,f=s.length;d<f;d+=1)u.push(s[d],r[d+1]);return u}var Xm=function(r){return Object.assign(r,{isCss:!0})};function Ay(r){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];if(Ji(r)||bo(r))return Xm(Qa(Jm(Cs,hs([r],s,!0))));var d=r;return s.length===0&&d.length===1&&typeof d[0]=="string"?Qa(d):Xm(Qa(Jm(d,s)))}function ku(r,s,u){if(u===void 0&&(u=Zi),!s)throw ko(1,s);var d=function(f){for(var m=[],b=1;b<arguments.length;b++)m[b-1]=arguments[b];return r(s,u,Ay.apply(void 0,hs([f],m,!1)))};return d.attrs=function(f){return ku(r,s,At(At({},u),{attrs:Array.prototype.concat(u.attrs,f).filter(Boolean)}))},d.withConfig=function(f){return ku(r,s,At(At({},u),f))},d}var L1=function(r){return ku(Ty,r)},c=L1;x1.forEach(function(r){c[r]=L1(r)});const E1="/my-pickleball-app/assets/ppl-logo-P6U_k7ZW.svg",Ly=c.div`
  * {
    &:focus {
      outline: none;
    }
  }
`,Ey=c.nav`
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
`,Dy=c.div`
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
`,Ry=c.div`
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
`,Ny=c.div`
  display: flex;
  gap: 40px;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`,By=c.div`
  display: flex;
  gap: 40px;
  align-items: center;
  margin-right: 12px;

  @media (max-width: 1024px) {
    gap: 24px;
  }
`,Gl=c.button`
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
`,D1=c.div`
  display: flex;
  gap: 12px;
`,Su=c.button`
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
`,Oy=c.button`
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
`,Py=c.button`
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
`,_y=c.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`,$y=c(Su)`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    padding: 8px 16px;
    font-size: 14px;
  }
`,Hy=c.div`
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
`,to=c.button`
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
`,Uy=c.div`
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
`,no=c.button`
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
`;c.div`
  display: none;
`;c.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;c.button`
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
`;c(D1)`
  flex-direction: column;
  gap: 8px;
  padding-top: 16px;
  border-top: 1px solid #e2e8f0;
`;const qy=c.button`
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
`,Yy=c.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`,Gy=c.span`
  font-size: 15px;
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 1024px) {
    display: none;
  }
`,Vy=c.div`
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
`,ao=c.button`
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
`,Qy=c.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
`,Wy=c.button`
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
`,Fm=c.div`
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
`,Zy=c.div`
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
`,Jy=c.div`
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
`,Xy=c.div`
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
`,Fy=c.div`
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
`,Ky=c.div`
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
`,Iy=c.div`
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
`,ev=c.div`
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
`,tv=c.div`
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
`;c.div`
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
`;function Jd(){return a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0",strokeLinecap:"round",strokeLinejoin:"round"})]})}function nv(){return a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",strokeLinecap:"round",strokeLinejoin:"round"})})}function av(){return a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",strokeLinecap:"round",strokeLinejoin:"round"})})}function iv(){return a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M3 10h10a8 8 0 0 1 8 8v2M3 10l6 6m-6-6l6-6",strokeLinecap:"round",strokeLinejoin:"round"})})}function rv(){return a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("circle",{cx:"9",cy:"7",r:"4",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M19 8v6m3-3h-6",strokeLinecap:"round",strokeLinejoin:"round"})]})}function ov(){return a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("circle",{cx:"9",cy:"7",r:"4",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M19 8l2 2 4-4",strokeLinecap:"round",strokeLinejoin:"round"})]})}function lv(){return a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M4 22h16",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M10 14.66V17c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.34",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M18 9H6V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3Z",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Km(){return a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M18.63 13A17.89 17.89 0 0 1 18 8",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M18 8a6 6 0 0 0-9.33-5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M1 1l22 22",strokeLinecap:"round",strokeLinejoin:"round"})]})}function sv(){const[r,s]=v.useState(!1),[u,d]=v.useState(0),[f,m]=v.useState(!1),[b,w]=v.useState(!1),g=xa(),x=Wa(),{user:C,logout:D,isAuthenticated:A}=bn(),[H,T]=v.useState([{id:"1",type:"like",user:"Sarah Chen",message:"liked your post about the pickleball tournament",time:"5m ago",unread:!0,postId:"post123"},{id:"2",type:"comment",user:"Mike Johnson",message:`commented on your post: "Great shots! Can't wait for the next match"`,time:"15m ago",unread:!0,postId:"post123"},{id:"3",type:"reply",user:"Anna Rodriguez",message:"replied to your comment on Mike's post",time:"1h ago",unread:!1,postId:"post456"},{id:"4",type:"club_accepted",user:"Phoenix Pickleball Club",message:"accepted your request to join the club",time:"2h ago",unread:!0,clubId:"club789"},{id:"5",type:"club_request",user:"David Kim",message:'wants to join your club "Metro Pickleball"',time:"3h ago",unread:!0,clubId:"club123"},{id:"6",type:"tournament",user:"Maria Santos",message:'joined your tournament "Summer Smash 2024"',time:"4h ago",unread:!1,tournamentId:"tournament456"}]),U=H.filter(R=>R.unread).length;v.useEffect(()=>{const R=()=>{const Z=window.scrollY;s(Z>72&&Z>u),d(Z)};return window.addEventListener("scroll",R,{passive:!0}),()=>window.removeEventListener("scroll",R)},[u]),v.useEffect(()=>{m(!1),w(!1)},[g]),v.useEffect(()=>{const R=window.innerWidth<=768;if(b&&R){const Z=window.scrollY;document.body.style.position="fixed",document.body.style.top=`-${Z}px`,document.body.style.left="0",document.body.style.right="0",document.body.style.width="100%",document.body.setAttribute("data-scroll-y",Z.toString())}else if(R){const Z=document.body.getAttribute("data-scroll-y");document.body.style.position="",document.body.style.top="",document.body.style.left="",document.body.style.right="",document.body.style.width="",document.body.removeAttribute("data-scroll-y"),Z&&window.scrollTo(0,parseInt(Z))}return()=>{document.body.style.position="",document.body.style.top="",document.body.style.left="",document.body.style.right="",document.body.style.width="",document.body.removeAttribute("data-scroll-y")}},[b]),v.useEffect(()=>{const R=Z=>{f&&!Z.target.closest("[data-profile-container]")&&m(!1),b&&!Z.target.closest("[data-notification-container]")&&w(!1)};return document.addEventListener("mousedown",R),()=>document.removeEventListener("mousedown",R)},[f,b]);const P=R=>{x(R),m(!1),w(!1)},k=()=>{D(),m(!1),w(!1),x("/")},B=R=>{T(Z=>Z.map(ue=>ue.id===R?{...ue,unread:!1}:ue))},Y=()=>{T(R=>R.map(Z=>({...Z,unread:!1})))},F=R=>{switch(R.unread&&B(R.id),R.type){case"like":case"comment":case"reply":P(`/forum?post=${R.postId}`);break;case"club_request":case"club_accepted":P(`/clubs-courts?club=${R.clubId}`);break;case"tournament":P(`/tournament?id=${R.tournamentId}`);break}},J=R=>{switch(R){case"like":return a.jsx(nv,{});case"comment":return a.jsx(av,{});case"reply":return a.jsx(iv,{});case"club_request":return a.jsx(rv,{});case"club_accepted":return a.jsx(ov,{});case"tournament":return a.jsx(lv,{});default:return a.jsx(Jd,{})}};return a.jsxs(Ly,{children:[a.jsxs(Ey,{$hidden:r,children:[a.jsxs(Dy,{children:[a.jsx(Ry,{onClick:()=>P("/"),children:a.jsx("img",{src:E1,alt:"Philippine Pickleball League"})}),a.jsxs(Ny,{children:[a.jsxs(By,{children:[a.jsx(Gl,{onClick:()=>P("/forum"),$active:g.pathname==="/forum",children:"Forum"}),a.jsx(Gl,{onClick:()=>P("/tournament"),$active:g.pathname==="/tournament",children:"Tournaments"}),a.jsx(Gl,{onClick:()=>P("/ranks"),$active:g.pathname==="/ranks",children:"Ranks"}),a.jsx(Gl,{onClick:()=>P("/clubs-courts"),$active:g.pathname==="/clubs-courts",children:"Clubs & Courts"})]}),A?a.jsxs(Qy,{"data-profile-container":!0,children:[a.jsxs(qy,{onClick:()=>m(!f),children:[a.jsx(Yy,{src:C==null?void 0:C.avatar,alt:C==null?void 0:C.name}),a.jsx(Gy,{children:C==null?void 0:C.name}),a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M6 9l6 6 6-6",strokeLinecap:"round",strokeLinejoin:"round"})})]}),a.jsxs(Vy,{$isOpen:f,children:[a.jsxs(ao,{onClick:()=>P("/profile"),children:[a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("circle",{cx:"12",cy:"7",r:"4",strokeLinecap:"round",strokeLinejoin:"round"})]}),"My Profile"]}),a.jsxs(ao,{onClick:()=>P("/coaches"),children:[a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("circle",{cx:"9",cy:"7",r:"4",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Coaches"]}),a.jsxs(ao,{onClick:()=>P("/settings"),children:[a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("circle",{cx:"12",cy:"12",r:"3",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Settings"]}),a.jsxs(ao,{onClick:()=>P("/feedback"),children:[a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M12 8v4",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M12 16h.01",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Feedback"]}),a.jsxs(ao,{className:"logout",onClick:k,children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14l5-5-5-5m5 5H9",strokeLinecap:"round",strokeLinejoin:"round"})}),"Log Out"]})]}),a.jsxs("div",{style:{position:"relative"},"data-notification-container":!0,children:[a.jsxs(Wy,{onClick:()=>w(!b),children:[a.jsx(Jd,{}),U>0&&a.jsx(Fm,{$count:U,children:U>99?"99+":U>0?U:""})]}),a.jsxs(Zy,{$isOpen:b,children:[a.jsxs(Jy,{children:[a.jsx("h3",{children:"Notifications"}),U>0&&a.jsx("button",{onClick:Y,children:"Mark all as read"})]}),a.jsx(Xy,{onWheel:R=>{R.stopPropagation();const{scrollTop:Z,scrollHeight:ue,clientHeight:le}=R.currentTarget,K=Z===0,X=Z+le>=ue;(K&&R.deltaY<0||X&&R.deltaY>0)&&R.preventDefault()},children:H.length>0?H.map(R=>a.jsxs(Fy,{$unread:R.unread,onClick:()=>F(R),children:[a.jsx(Ky,{$type:R.type,children:J(R.type)}),a.jsxs(Iy,{children:[a.jsxs("p",{className:"notification-text",children:[a.jsx("span",{className:"highlight",children:R.user})," ",R.message]}),a.jsx("span",{className:"notification-time",children:R.time})]})]},R.id)):a.jsxs(ev,{children:[a.jsx(Km,{}),a.jsx("h4",{children:"No notifications"}),a.jsx("p",{children:"You're all caught up! We'll notify you when something new happens."})]})})]})]})]}):a.jsxs(D1,{children:[a.jsx(Su,{onClick:()=>P("/signin"),children:"Sign In"}),a.jsx(Su,{onClick:()=>P("/register"),$primary:!0,children:"Register"})]})]}),A?a.jsxs(_y,{children:[a.jsxs(Oy,{$show:!0,onClick:()=>m(!f),"data-profile-container":!0,children:[a.jsx("img",{src:C==null?void 0:C.avatar,alt:C==null?void 0:C.name}),a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:a.jsx("path",{d:"M6 9l6 6 6-6",strokeLinecap:"round",strokeLinejoin:"round"})})]}),a.jsxs(Py,{onClick:()=>w(!b),"data-notification-container":!0,children:[a.jsx(Jd,{}),U>0&&a.jsx(Fm,{$count:U,children:U>99?"99+":U>0?U:""})]})]}):a.jsx($y,{onClick:()=>P("/signin"),children:"Sign In"})]}),a.jsxs(Uy,{$isOpen:f,children:[a.jsxs(no,{onClick:()=>P("/profile"),children:[a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("circle",{cx:"12",cy:"7",r:"4",strokeLinecap:"round",strokeLinejoin:"round"})]}),"My Profile"]}),a.jsxs(no,{onClick:()=>P("/coaches"),children:[a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("circle",{cx:"9",cy:"7",r:"4",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Coaches"]}),a.jsxs(no,{onClick:()=>P("/settings"),children:[a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("circle",{cx:"12",cy:"12",r:"3",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Settings"]}),a.jsxs(no,{onClick:()=>P("/feedback"),children:[a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M12 8v4",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M12 16h.01",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Feedback"]}),a.jsxs(no,{className:"logout",onClick:k,children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14l5-5-5-5m5 5H9",strokeLinecap:"round",strokeLinejoin:"round"})}),"Log Out"]})]}),b&&a.jsxs(tv,{children:[a.jsxs("div",{style:{padding:"16px 20px",borderBottom:"1px solid #e2e8f0",display:"flex",alignItems:"center",justifyContent:"space-between",background:"#f8fafc",minHeight:"64px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[a.jsx("button",{onClick:()=>w(!1),style:{background:"none",border:"none",padding:"8px",color:"#475569",cursor:"pointer",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M19 12H5m7-7l-7 7 7 7",strokeLinecap:"round",strokeLinejoin:"round"})})}),a.jsx("h3",{style:{margin:"0",fontSize:"18px",fontWeight:"600",color:"#1e293b"},children:"Notifications"})]}),U>0&&a.jsx("button",{onClick:Y,style:{background:"none",border:"none",color:"#29ba9b",fontSize:"14px",cursor:"pointer",padding:"4px 8px",borderRadius:"4px",fontWeight:"500"},children:"Mark all read"})]}),a.jsx("div",{style:{height:"calc(100vh - 64px)",overflowY:"auto",padding:"0"},children:H.length>0?H.map(R=>a.jsxs("div",{onClick:()=>F(R),style:{padding:"16px 20px",borderBottom:"1px solid #f1f5f9",cursor:"pointer",display:"flex",gap:"12px",alignItems:"flex-start",backgroundColor:R.unread?"#f0f9ff":"white",borderLeft:R.unread?"3px solid #29ba9b":"3px solid transparent"},children:[a.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:"0",marginTop:"2px",...R.type==="like"&&{background:"#fef2f2",color:"#ef4444"},...R.type==="comment"&&{background:"#f0f9ff",color:"#3b82f6"},...R.type==="reply"&&{background:"#f0f9ff",color:"#3b82f6"},...R.type==="club_request"&&{background:"#f0fdf4",color:"#22c55e"},...R.type==="club_accepted"&&{background:"#f0fdf4",color:"#22c55e"},...R.type==="tournament"&&{background:"#fefce8",color:"#eab308"}},children:a.jsx("div",{style:{width:"18px",height:"18px"},children:J(R.type)})}),a.jsxs("div",{style:{flex:"1",minWidth:"0"},children:[a.jsxs("p",{style:{fontSize:"15px",color:"#1e293b",lineHeight:"1.4",margin:"0 0 4px 0"},children:[a.jsx("span",{style:{fontWeight:"600",color:"#29ba9b"},children:R.user})," ",R.message]}),a.jsx("span",{style:{fontSize:"13px",color:"#64748b"},children:R.time})]})]},R.id)):a.jsxs("div",{style:{padding:"60px 20px",textAlign:"center",color:"#64748b"},children:[a.jsx("div",{style:{marginBottom:"16px",opacity:"0.5"},children:a.jsx(Km,{})}),a.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"18px",color:"#475569"},children:"No notifications"}),a.jsx("p",{style:{margin:"0",fontSize:"15px",lineHeight:"1.4"},children:"You're all caught up! We'll notify you when something new happens."})]})})]})]}),a.jsxs(Hy,{children:[a.jsxs(to,{onClick:()=>P("/"),$active:g.pathname==="/",children:[a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[a.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("polyline",{points:"9,22 9,12 15,12 15,22",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Home"]}),a.jsxs(to,{onClick:()=>P("/forum"),$active:g.pathname==="/forum",children:[a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:a.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",strokeLinecap:"round",strokeLinejoin:"round"})}),"Forum"]}),a.jsxs(to,{onClick:()=>P("/tournament"),$active:g.pathname==="/tournament",children:[a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[a.jsx("path",{d:"M6 4v6a6 6 0 0 0 12 0V4",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M6 4h12",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M4 6a2 2 0 0 0 2 2",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M20 6a2 2 0 0 1-2 2",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M10 16v2",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M14 16v2",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M8 20h8",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Tournament"]}),a.jsxs(to,{onClick:()=>P("/ranks"),$active:g.pathname==="/ranks",children:[a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:a.jsx("polygon",{points:"12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26",strokeLinecap:"round",strokeLinejoin:"round"})}),"Ranks"]}),a.jsxs(to,{onClick:()=>P("/clubs-courts"),$active:g.pathname==="/clubs-courts",children:[a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[a.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("circle",{cx:"12",cy:"10",r:"3",strokeLinecap:"round",strokeLinejoin:"round"})]}),"C&C"]})]})]})}const cv=c.footer`
  background: white;
  padding: 40px 24px 20px;
  color: #333;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`,dv=c.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`,uv=c.div`
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
`,pv=c.div`
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
`,fv=c.div`
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
`,hv=c.div`
  font-size: 0.8rem;
  color: #666;
  text-align: center;
  margin-top: 12px;
`;function mv(){return a.jsx(cv,{children:a.jsxs(dv,{children:[a.jsx(uv,{children:a.jsx("img",{src:E1,alt:"Philippine Pickleball League"})}),a.jsxs(pv,{children:[a.jsx("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",children:a.jsx("svg",{viewBox:"0 0 320 512",fill:"currentColor",children:a.jsx("path",{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"})})}),a.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:a.jsx("svg",{viewBox:"0 0 448 512",fill:"currentColor",children:a.jsx("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})})}),a.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:a.jsx("svg",{viewBox:"0 0 448 512",fill:"currentColor",children:a.jsx("path",{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"})})}),a.jsx("a",{href:"https://youtube.com",target:"_blank",rel:"noopener noreferrer","aria-label":"YouTube",children:a.jsx("svg",{viewBox:"0 0 576 512",fill:"currentColor",children:a.jsx("path",{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"})})})]}),a.jsxs(fv,{children:[a.jsx(hn,{to:"/terms",children:"Terms & Conditions"}),a.jsx(hn,{to:"/privacy",children:"Privacy Policy"}),a.jsx(hn,{to:"/about",children:"About us"}),a.jsx(hn,{to:"/contact",children:"Contact"}),a.jsx(hn,{to:"/sponsors",children:"Sponsors"}),a.jsx(hn,{to:"/news",children:"News"})]}),a.jsxs(hv,{children:["© ",new Date().getFullYear()," Philippine Pickleball League"]})]})})}const xv=c.div`
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
`,gv=c.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,bv=c.div`
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
`,yv=c.div`
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
`,vv=c.button`
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
`,wv=()=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M20 6L9 17l-5-5"})}),jv=()=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14l5-5-5-5m5 5H9"})}),kv=()=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M18 6L6 18M6 6l12 12"})}),Sv=({message:r,type:s="success",isVisible:u,onClose:d})=>{v.useEffect(()=>{if(u){const b=setTimeout(()=>{d()},3e3);return()=>clearTimeout(b)}},[u,d]);const f=()=>s==="success"||r.includes("Welcome back")?a.jsx(wv,{}):a.jsx(jv,{}),m=r.includes("logged out")||s==="info";return a.jsx(xv,{$isVisible:u,children:a.jsxs(gv,{children:[a.jsx(bv,{$type:s,children:f()}),a.jsx(yv,{children:m?a.jsx("h4",{children:r}):a.jsxs(a.Fragment,{children:[a.jsx("h4",{children:"Successfully Logged In"}),a.jsx("p",{children:r})]})}),a.jsx(vv,{onClick:d,children:a.jsx(kv,{})})]})})},Cv=(r={})=>{const[s,u]=v.useState(!1),[d,f]=v.useState(!1),m=v.useRef(null);return v.useEffect(()=>{const b=new IntersectionObserver(([w])=>{w.isIntersecting&&!d&&(u(!0),f(!0))},r);return m.current&&b.observe(m.current),()=>{m.current&&b.unobserve(m.current)}},[m,r,d]),[m,s]};c.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.15;
  z-index: 0;
`;const zv=c.div`
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
`,Mv=c.div`
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
`,Tv=c.h1`
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
`,Av=c.p`
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
`,Lv=c.div`
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
`,Ev=c(hn)`
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
`;c.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  width: 100%;
  margin-top: 0.75rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;const R1=c.section`
  padding: 80px 24px;
  background: ${r=>r.$dark?"#1a2e3b":"white"};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 64px 16px;
  }
`,Im=c.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;c.h2`
  font-size: clamp(1.75rem, 6vw, 3rem);
  font-weight: 700;
  color: ${r=>r.$dark?"white":"#234255"};
  margin-bottom: 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;const Dv=c.div`
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
`,Vl=c.div`
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
`;c.div`
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
`;c.h3`
  font-size: clamp(1.75rem, 5vw, 3rem);
  font-weight: 700;
  color: #29ba9b;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
`;c.p`
  color: ${r=>r.$dark?"rgba(255, 255, 255, 0.8)":"#64748b"};
  font-size: 1rem;
`;const Rv=c(R1)`
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
`,Nv=c.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 16px;
`,Bv=c.div`
  max-width: 800px;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`,Ov=c.h2`
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
`,Pv=c.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  line-height: 1.8;
  margin: 0 auto;
  max-width: 700px;
`,_v=c.div`
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
`,$v=c.div`
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
`;function Hv(){const r=Wa(),{user:s,isAuthenticated:u}=bn(),[d,f]=v.useState({activePlayers:0,tournamentsHosted:0,playerSatisfaction:0,clubPartners:0}),[m,b]=v.useState(!0),[w,g]=Cv({threshold:.2});v.useEffect(()=>{window.scrollTo(0,0)},[]),v.useEffect(()=>{const D=document.querySelector("footer");if(!D)return;const A=new IntersectionObserver(([H])=>{H.isIntersecting&&b(!1)},{threshold:.1});return A.observe(D),()=>{D&&A.unobserve(D)}},[]);const x=D=>{r(D)},C=()=>{window.scrollTo({top:window.innerHeight,behavior:"smooth"})};return v.useEffect(()=>{(async()=>{try{f({activePlayers:0,tournamentsHosted:0,playerSatisfaction:0,clubPartners:0})}catch(A){console.error("Error fetching stats:",A)}})()},[]),a.jsx(a.Fragment,{children:a.jsxs("main",{children:[a.jsxs(zv,{children:[a.jsxs(Mv,{children:[a.jsx(Tv,{children:u?a.jsxs(a.Fragment,{children:["Welcome back, ",a.jsx("span",{children:s==null?void 0:s.firstName}),"!"]}):a.jsxs(a.Fragment,{children:["Philippine ",a.jsx("span",{children:"Pickleball"})," League"]})}),a.jsx(Av,{children:u?"Ready to continue your pickleball journey? Discover upcoming tournaments in your area, connect with fellow players in our active community forum, track your ranking progress, and find the best courts and clubs near you. Your next great match is just a click away!":"Join the fastest growing pickleball community in the Philippines. Connect with players, join tournaments, and track your progress in a vibrant sports community."}),!u&&a.jsx(Lv,{children:a.jsx(Ev,{to:"/register",$primary:!0,$fullWidth:!0,children:"Get Started"})})]}),a.jsxs($v,{onClick:C,$show:m,children:[a.jsx("span",{className:"scroll-text",children:"Scroll Down"}),a.jsxs("div",{className:"arrows",children:[a.jsx("div",{className:"arrow"}),a.jsx("div",{className:"arrow"}),a.jsx("div",{className:"arrow"})]})]})]}),a.jsx(R1,{children:a.jsx(Im,{children:a.jsxs(Dv,{ref:w,$isVisible:g,children:[a.jsxs(Vl,{onClick:()=>x("/forum"),$index:0,$isVisible:g,children:[a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"})}),a.jsx("h3",{children:"Forum"}),a.jsx("p",{children:"Join discussions and connect with the pickleball community"})]}),a.jsxs(Vl,{onClick:()=>x("/tournament"),$index:1,$isVisible:g,children:[a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})}),a.jsx("h3",{children:"Tournaments"}),a.jsx("p",{children:"Find and join upcoming pickleball tournaments"})]}),a.jsxs(Vl,{onClick:()=>x("/ranks"),$index:2,$isVisible:g,children:[a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),a.jsx("h3",{children:"Ranks"}),a.jsx("p",{children:"Check player rankings and track your progress"})]}),a.jsxs(Vl,{onClick:()=>x("/clubs-courts"),$index:3,$isVisible:g,children:[a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),a.jsx("path",{d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),a.jsx("h3",{children:"Clubs & Courts"}),a.jsx("p",{children:"Find nearby pickleball courts and local clubs"})]})]})})}),a.jsx(Rv,{children:a.jsx(Im,{children:a.jsxs(Nv,{children:[a.jsxs(Bv,{children:[a.jsxs(Ov,{children:["About ",a.jsx("span",{children:"Philippine Pickleball League"})]}),a.jsx(Pv,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),a.jsxs(_v,{children:[a.jsxs("div",{children:[a.jsx("h3",{children:d.activePlayers>0?`${d.activePlayers}+`:"0"}),a.jsx("p",{children:"Active Players"})]}),a.jsxs("div",{children:[a.jsx("h3",{children:d.tournamentsHosted>0?`${d.tournamentsHosted}+`:"0"}),a.jsx("p",{children:"Tournaments Hosted"})]}),a.jsxs("div",{children:[a.jsx("h3",{children:d.playerSatisfaction>0?`${d.playerSatisfaction}%`:"0%"}),a.jsx("p",{children:"Player Satisfaction"})]}),a.jsxs("div",{children:[a.jsx("h3",{children:d.clubPartners>0?`${d.clubPartners}+`:"0"}),a.jsx("p",{children:"Club Partners"})]})]})]})})})]})})}const Uv=c.div`
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
`,qv=c.div`
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
`,e0=c(hn)`
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
`,yo=({isOpen:r,onClose:s,title:u,message:d})=>r?a.jsx(Uv,{onClick:s,children:a.jsxs(qv,{onClick:f=>f.stopPropagation(),children:[a.jsx("h2",{children:u||"Sign in Required"}),a.jsx("p",{children:d||"Please sign in or register to continue"}),a.jsx(e0,{to:"/signin",children:"Sign In"}),a.jsx(e0,{to:"/register",$primary:!0,children:"Register"})]})}):null,Yv=c.div`
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
`,Gv=c.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  padding-top: 0px;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    width: 100%;
    max-width: 100%;
  }
`,Vv=c.div`
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
`,Qv=c.button`
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
`,Wv=c.div`
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
`,Zv=c.div`
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
`,Jv=c.button`
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
`,Xv=c.article`
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
`,Fv=c.div`
  padding: 16px 32px;
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    padding: 14px 24px;
    gap: 12px;
  }
`,Kv=c.div`
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
`,Iv=c.div`
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
`,e4=c.div`
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
`,t4=c.button`
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
`,n4=c.div`
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
`,a4=c.div`
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
`;c.div`
  font-weight: 600;
  font-size: 14px;
  color: #262626;
  padding: 0 0 8px;
`;c.div`
  padding: 0 16px 8px;
  font-size: 14px;
  line-height: 1.4;
  color: #262626;

  span {
    font-weight: 600;
    margin-right: 6px;
  }
`;c.div`
  padding: 0 16px 16px;
  font-size: 10px;
  color: #8e8e8e;
  text-transform: uppercase;
`;const i4=c.div`
  border-top: 1px solid #e2e8f0;
`,r4=c.div`
  padding: 8px 32px;
  display: flex;
  gap: 12px;
  align-items: center;
  background: white;

  @media (max-width: 768px) {
    padding: 8px 24px;
    gap: 10px;
  }
`,o4=c.input`
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
`,l4=c.button`
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
`,s4=c.div`
  background: white;
`,c4=c.div`
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
`,t0=c.div`
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
`,d4=c.div`
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
`,u4=c.div`
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
`;c.button`
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
`;const n0=c.div`
  margin-left: 36px;
  border-left: 1px solid #e2e8f0;
  padding-left: 12px;
  margin-bottom: 12px;
  
  @media (max-width: 768px) {
    margin-left: 28px;
    padding-left: 8px;
    margin-bottom: 10px;
  }
`,p4=c.div`
  padding: 8px 0;
  display: flex;
  gap: 8px;
  align-items: center;
  background: white;

  @media (max-width: 768px) {
    gap: 6px;
  }
`,f4=c.input`
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
`,h4=c.button`
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
`,m4=c.div`
  padding: 4px 0;
  display: flex;
  gap: 8px;
  align-items: flex-start;

  @media (max-width: 768px) {
    gap: 6px;
  }
`,a0=c.div`
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
`,x4=c.div`
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
`;c.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;c.div`
  flex: 1;
  font-size: 14px;
  line-height: 1.4;

  span {
    font-weight: 600;
    margin-right: 6px;
  }
`;c.div`
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
`;c.div`
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
`;c.div`
  padding: 12px 16px;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;c.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #262626;
`;const g4=c.button`
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
`;c.div`
  padding: 16px;
`;const b4=c.div`
  padding: 0 32px 16px;
  
  @media (max-width: 768px) {
    padding: 0 24px 16px;
  }
`,y4=c.textarea`
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
`;c.div`
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
`;const v4=c.button`
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
`,w4=c.div`
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
`,j4=c.div`
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
`,k4=c.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`,S4=c.div`
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
`,C4=c.div`
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
`,z4=c.button`
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
`,M4=c.div`
  text-align: center;
  padding: 2rem;
  color: #ef4444;
  background: #fef2f2;
  border-radius: 8px;
  margin: 1rem 0;
`,T4=c.div`
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
`,A4=c.div`
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
`,L4=c.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  width: 100%;
  height: 100%;
  transform: translateX(${r=>r.$offset}px);
  transition: transform ${r=>r.$isAnimating?"0.3s":"0s"} ease-out;
`,E4=c.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
`,D4=c.img`
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
`,i0=c.button`
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
`,R4=c.div`
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
`,N4=c.div`
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
`,Xd=c.div`
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
`,Fd=c.button`
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
`;function B4({filled:r=!1}){return a.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:r?"currentColor":"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",strokeLinecap:"round",strokeLinejoin:"round"})})}function O4(){return a.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",strokeLinecap:"round",strokeLinejoin:"round"})})}function P4(){return a.jsxs("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),a.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),a.jsx("path",{d:"M21 15l-5-5L5 21"})]})}function io(){return a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:a.jsx("path",{d:"M18 6L6 18M6 6l12 12",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})})}function _4(){return a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",opacity:"0.2"}),a.jsx("path",{d:"M12 2C6.47715 2 2 6.47715 2 12C2 14.7505 3.14229 17.2432 4.98959 19"})]})}function $4(){return a.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:a.jsx("path",{d:"M15 18l-6-6 6-6",strokeLinecap:"round",strokeLinejoin:"round"})})}function H4(){return a.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:a.jsx("path",{d:"M9 18l6-6-6-6",strokeLinecap:"round",strokeLinejoin:"round"})})}function r0(){return a.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",stroke:"none",children:a.jsx("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"})})}function U4(){return a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:a.jsx("path",{d:"M12 9v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",strokeLinecap:"round",strokeLinejoin:"round"})})}function q4(){const{user:r,isAuthenticated:s}=bn(),[u,d]=v.useState([]),[f,m]=v.useState(!0),[b,w]=v.useState(null),[g,x]=v.useState(!1),[C,D]=v.useState(!1),[A,H]=v.useState(""),[T,U]=v.useState([]),[P,k]=v.useState(!1),[B,Y]=v.useState({show:!1,title:"",message:""}),[F,J]=v.useState({}),[R,Z]=v.useState({}),[ue,le]=v.useState({}),[K,X]=v.useState({}),[se,me]=v.useState({}),[Be,Ae]=v.useState({}),[$,I]=v.useState({}),[de,be]=v.useState({}),[j,Q]=v.useState({}),[ee,te]=v.useState(1),[ce,z]=v.useState(!0),[q,oe]=v.useState(!1),[ne,De]=v.useState(0),[Ge,Ve]=v.useState([]),[qe,_t]=v.useState(null),[$t,ga]=v.useState(null),[Za,et]=v.useState(0),[ge,jt]=v.useState(!1),Ii=v.useRef(null),ba=50,So=(_,ie)=>{Y({show:!0,title:_,message:ie}),setTimeout(()=>{Y(Ce=>({...Ce,show:!1}))},4e3)},Co=()=>{Y(_=>({..._,show:!1}))},zs=_=>{J(ie=>({...ie,[_]:!ie[_]}))},Ms=(_,ie=200)=>_.length<=ie?_:_.substring(0,ie).trim()+"...",ya=_=>{const ie=_.target;ie.style.height="auto",ie.style.height=Math.max(48,ie.scrollHeight)+"px"};v.useEffect(()=>{(async()=>{try{m(!0),w(null),await new Promise(ie=>setTimeout(ie,1e3)),d(Ao),z(!1)}catch{w("Failed to load posts. Please try again later.")}finally{m(!1)}})()},[ee]);const xt=async(_,ie,Ce)=>{if(_.preventDefault(),!s){x(!0);return}try{switch(ie){case"like":d(ae=>ae.map(ve=>ve.id===Ce?{...ve,isLiked:!ve.isLiked,likeCount:ve.isLiked?ve.likeCount-1:ve.likeCount+1}:ve));break;case"comment":Z(ae=>({...ae,[Ce]:!ae[Ce]})),ue[Ce]||le(ae=>({...ae,[Ce]:""})),!R[Ce]&&!K[Ce]&&X(ae=>({...ae,[Ce]:[]}));break}}catch(ae){console.error("Error handling interaction:",ae)}},Ft=async _=>{var Ce;const ie=(Ce=ue[_])==null?void 0:Ce.trim();if(!(!ie||!s))try{me(ve=>({...ve,[_]:!0}));const ae={id:Date.now().toString(),author:{id:r.id,name:r.name,initials:r.name.split(" ").map(ve=>ve[0]).join("").toUpperCase()},content:ie,createdAt:new Date().toISOString()};X(ve=>({...ve,[_]:[ae,...ve[_]||[]]})),d(ve=>ve.map(ye=>ye.id===_?{...ye,commentCount:ye.commentCount+1}:ye)),le(ve=>({...ve,[_]:""}))}catch(ae){console.error("Error submitting comment:",ae)}finally{me(ae=>({...ae,[_]:!1}))}},gt=async(_,ie)=>{var ae;const Ce=(ae=$[_])==null?void 0:ae.trim();if(!(!Ce||!s))try{Q(ye=>({...ye,[_]:!0}));const ve={id:Date.now().toString(),author:{id:r.id,name:r.name,initials:r.name.split(" ").map(ye=>ye[0]).join("").toUpperCase()},content:Ce,createdAt:new Date().toISOString(),parentId:_};X(ye=>({...ye,[ie]:ye[ie].map(we=>we.id===_?{...we,replies:[...we.replies||[],ve]}:we)})),I(ye=>({...ye,[_]:""})),be(ye=>({...ye,[_]:!1})),Ae(ye=>({...ye,[_]:!0}))}catch(ve){console.error("Error submitting reply:",ve)}finally{Q(ve=>({...ve,[_]:!1}))}},zo=_=>{be(ie=>({...ie,[_]:!ie[_]})),$[_]||I(ie=>({...ie,[_]:""}))},Ts=async _=>{if(_.preventDefault(),!s){x(!0);return}D(!C)},As=_=>{if(_.preventDefault(),!s){x(!0);return}if(T.length>=4){So("Upload Limit Reached","You can only upload a maximum of 4 images per post.");return}document.getElementById("imageInput").click()},Ja=async()=>{if(!(!A.trim()&&T.length===0))try{k(!0);const _={id:Date.now().toString(),author:{id:r.id,username:`${r.firstName} ${r.lastName}`,initials:`${r.firstName[0]}${r.lastName[0]}`.toUpperCase(),avatarColor:"#29ba9b"},content:A.trim(),images:T.map((ie,Ce)=>({id:`${Date.now()}_${Ce}`,url:ie.url,alt:`User uploaded image ${Ce+1}`})),createdAt:new Date().toISOString(),likeCount:0,commentCount:0,isLiked:!1};d(ie=>[_,...ie]),D(!1),H(""),U([])}catch(_){console.error("Error creating post:",_)}finally{k(!1)}},$n=_=>{U(ie=>ie.filter((Ce,ae)=>ae!==_))},Ht=_=>{const ie=_.length;return ie===1?"single-image":ie===2?"two-images-horizontal":ie===3?"three-images-left":ie===4?"four-images":ie>4?"four-images-with-overlay":"single-image"},Hn=(_,ie)=>{Ve(_),De(ie),oe(!0),document.body.style.overflow="hidden"},Un=()=>{oe(!1),Ve([]),De(0),document.body.style.overflow="auto"},er=()=>{var _;return((_=Ii.current)==null?void 0:_.clientWidth)||0},va=()=>-ne*er();v.useEffect(()=>{q&&et(va())},[q,ne]);const Mo=_=>{ga(null),_t(_.touches[0].clientX),jt(!1)},tr=_=>{ga(_.touches[0].clientX);const Ce=_.touches[0].clientX-qe,ae=va();ne===0&&Ce>0||ne===Ge.length-1&&Ce<0?et(ae+Ce*.2):et(ae+Ce)},wa=()=>{if(!qe||!$t)return;const _=qe-$t,ie=_>ba,Ce=_<-ba;jt(!0),ie&&ne<Ge.length-1?To():Ce&&ne>0?nr():et(va()),_t(null),ga(null)},To=()=>{jt(!0),De(_=>{const ie=_===Ge.length-1?_:_+1;return et(-ie*er()),ie})},nr=()=>{jt(!0),De(_=>{const ie=_===0?_:_-1;return et(-ie*er()),ie})};v.useEffect(()=>{const _=()=>{et(va())};return window.addEventListener("resize",_),()=>window.removeEventListener("resize",_)},[ne]);const Ao=[{id:"1",author:{id:"101",username:"Sarah Lee",initials:"SL",avatarColor:"#234255"},content:"Great matches at the club today! Here are some highlights 📸 The weather was absolutely perfect for pickleball - sunny but not too hot, with just a gentle breeze. We had some intense rallies that went on for what felt like forever! Sarah dominated the net with her incredible dinks, while Mike was crushing some amazing overhead smashes. The new court surface is playing really well, much better grip than the old one. Everyone improved their game today and we learned some new strategies. Looking forward to tomorrow's tournament - should be epic! 🏓🎾",images:[{id:"1",url:"https://placehold.co/400x400/ff6b6b/FFF?text=Image+1+(Grid+Top-Left)",alt:"Match highlight 1"},{id:"2",url:"https://placehold.co/400x400/4ecdc4/FFF?text=Image+2+(Grid+Top-Right)",alt:"Match highlight 2"},{id:"3",url:"https://placehold.co/400x400/45b7d1/FFF?text=Image+3+(Grid+Bottom-Left)",alt:"Match highlight 3"},{id:"4",url:"https://placehold.co/400x400/f7b731/FFF?text=Image+4+(Grid+Bottom-Right+with+Overlay)",alt:"Match highlight 4"},{id:"5",url:"https://placehold.co/400x400/5f27cd/FFF?text=Image+5+(Hidden+in+Grid)",alt:"Match highlight 5"},{id:"6",url:"https://placehold.co/400x400/00d2d3/FFF?text=Image+6+(Hidden+in+Grid)",alt:"Match highlight 6"}],createdAt:"2025-06-16T10:00:00Z",likeCount:245,commentCount:18,isLiked:!1},{id:"2",author:{id:"102",username:"Mike Chen",initials:"MC",avatarColor:"#29ba9b"},content:"New paddles just arrived! Can't wait to try them out this weekend 🏓",images:[{id:"5",url:"https://placehold.co/400x400/29ba9b/FFF?text=Paddle+1",alt:"New paddle front"},{id:"6",url:"https://placehold.co/400x400/29ba9b/FFF?text=Paddle+2",alt:"New paddle back"}],createdAt:"2025-06-16T08:00:00Z",likeCount:132,commentCount:24,isLiked:!1}];return a.jsx(Yv,{children:a.jsxs(Gv,{children:[a.jsxs(Vv,{children:[a.jsxs(Qv,{onClick:Ts,children:[a.jsx(Wv,{}),"What's happening in pickleball?"]}),C&&a.jsxs(b4,{children:[a.jsx(y4,{placeholder:"Write something here...",value:A,onChange:_=>{H(_.target.value),ya(_)},style:{width:"100%",minHeight:"48px",paddingLeft:"0px",paddingRight:"0px"}}),T.length>0&&a.jsx(N4,{children:a.jsx("div",{className:`preview-grid ${Ht(T)}`,children:Ht(T)==="four-images-with-overlay"?a.jsxs(a.Fragment,{children:[T.slice(0,3).map((_,ie)=>a.jsxs(Xd,{className:"preview-image",children:[a.jsx("img",{src:_.url,alt:`Selected ${ie+1}`}),a.jsx(Fd,{onClick:()=>$n(ie),children:a.jsx(io,{})})]},ie)),a.jsxs(Xd,{className:"preview-image overlay-preview","data-remaining":T.length-3,children:[a.jsx("img",{src:T[3].url,alt:"Selected 4"}),a.jsx(Fd,{onClick:()=>$n(3),children:a.jsx(io,{})}),a.jsxs("div",{className:"overlay-indicator",children:["+",T.length-3]})]})]}):T.map((_,ie)=>a.jsxs(Xd,{className:"preview-image",children:[a.jsx("img",{src:_.url,alt:`Selected ${ie+1}`}),a.jsx(Fd,{onClick:()=>$n(ie),children:a.jsx(io,{})})]},ie))})})]}),a.jsxs(Zv,{children:[a.jsxs(Jv,{onClick:As,style:{opacity:T.length>=4?.5:1,cursor:T.length>=4?"not-allowed":"pointer"},children:[a.jsx(P4,{}),T.length>=4?"Max 4 images":T.length===0?"Photo/Video":`Add Photo (${4-T.length} left)`]}),C&&a.jsx(v4,{disabled:!A.trim(),onClick:Ja,width:"auto",padding:"8px 12px",marginTop:"0",children:P?"Posting...":"Post"}),a.jsx("input",{id:"imageInput",type:"file",multiple:!0,accept:"image/jpeg,image/jpg,image/png,image/gif,image/webp,video/mp4,video/mov,video/avi,video/wmv,video/webm",capture:"environment",style:{display:"none"},onChange:_=>{const ie=Array.from(_.target.files);if(ie.length>0){const Ce=4-T.length,ae=ie.slice(0,Ce);ie.length>Ce&&So("Some Images Skipped",`You can only add ${Ce} more image(s). Only the first ${Ce} image(s) will be selected.`);const ve=ae.map(ye=>new Promise(we=>{const vt=new FileReader;vt.onload=Kt=>{we({file:ye,url:Kt.target.result,name:ye.name})},vt.readAsDataURL(ye)}));Promise.all(ve).then(ye=>{U(we=>[...we,...ye]),D(!0)}),_.target.value=""}}})]})]}),f&&a.jsx(w4,{children:a.jsx(_4,{})}),b&&a.jsx(M4,{children:b}),!f&&!b&&u.map(_=>{var ie,Ce;return a.jsxs(Xv,{children:[a.jsxs(Fv,{children:[a.jsx(Kv,{style:{background:_.author.avatarColor},children:_.author.initials}),a.jsxs(Iv,{children:[a.jsx("h3",{children:_.author.username}),a.jsx("span",{children:new Date(_.createdAt).toLocaleDateString()})]})]}),a.jsxs(e4,{children:[a.jsx("p",{children:F[_.id]||_.content.length<=200?_.content:Ms(_.content,200)}),_.content.length>200&&a.jsx(t4,{onClick:()=>zs(_.id),children:F[_.id]?"See less":"See more"}),((ie=_.images)==null?void 0:ie.length)>0&&a.jsx(n4,{className:Ht(_.images),children:Ht(_.images)==="four-images-with-overlay"?a.jsxs(a.Fragment,{children:[_.images.slice(0,3).map((ae,ve)=>a.jsx("div",{className:"image-container",children:a.jsx("img",{src:ae.url,alt:ae.alt,onClick:()=>Hn(_.images,ve),style:{cursor:"pointer"}})},ae.id)),a.jsx("div",{className:"image-container overlay","data-remaining":_.images.length-3,onClick:()=>Hn(_.images,3),style:{cursor:"pointer"},children:a.jsx("img",{src:_.images[3].url,alt:_.images[3].alt})})]}):_.images.map((ae,ve)=>a.jsx("img",{src:ae.url,alt:ae.alt,onClick:()=>Hn(_.images,ve),style:{cursor:"pointer"}},ae.id))})]}),a.jsxs(a4,{children:[a.jsxs("button",{onClick:ae=>xt(ae,"like",_.id),style:{color:_.isLiked?"#ef4444":"#64748b",fontWeight:_.isLiked?"600":"400"},children:[a.jsx(B4,{filled:_.isLiked}),_.likeCount]}),a.jsxs("button",{onClick:ae=>xt(ae,"comment",_.id),children:[a.jsx(O4,{}),_.commentCount]})]}),s&&R[_.id]&&a.jsxs(i4,{children:[a.jsxs(r4,{children:[a.jsx(t0,{children:r.name.split(" ").map(ae=>ae[0]).join("").toUpperCase()}),a.jsx(o4,{placeholder:"Add a comment...",value:ue[_.id]||"",onChange:ae=>le(ve=>({...ve,[_.id]:ae.target.value})),onKeyPress:ae=>{ae.key==="Enter"&&(ae.preventDefault(),Ft(_.id))}}),a.jsx(l4,{onClick:()=>Ft(_.id),disabled:!((Ce=ue[_.id])!=null&&Ce.trim())||se[_.id],children:a.jsx(r0,{})})]}),K[_.id]&&K[_.id].length>0&&a.jsx(s4,{children:K[_.id].map((ae,ve)=>{var ye;return a.jsxs("div",{children:[a.jsxs(c4,{children:[a.jsx(t0,{children:ae.author.initials}),a.jsxs(d4,{children:[a.jsxs("p",{className:"comment-content",children:[a.jsx("span",{className:"comment-author",children:ae.author.name}),a.jsx("span",{className:"comment-text",children:ae.content})]}),a.jsxs("div",{className:"comment-meta",children:[a.jsx("span",{className:"comment-time",children:(()=>{const we=new Date,vt=new Date(ae.createdAt),Kt=Math.floor((we-vt)/(1e3*60)),yn=Math.floor(Kt/60),ja=Math.floor(yn/24);return Kt<60?`${Kt||1}m`:yn<24?`${yn}h`:`${ja}d`})()}),a.jsx("button",{className:"comment-reply",onClick:()=>zo(ae.id),children:"Reply"})]})]})]}),ae.replies&&ae.replies.length>0&&a.jsx(u4,{children:a.jsx("div",{className:"view-replies",children:a.jsx("button",{onClick:()=>Ae(we=>({...we,[ae.id]:!we[ae.id]})),children:Be[ae.id]?"Hide replies":`View replies (${ae.replies.length})`})})}),Be[ae.id]&&ae.replies&&ae.replies.length>0&&a.jsx(n0,{children:ae.replies.map(we=>a.jsxs(m4,{children:[a.jsx(a0,{children:we.author.initials}),a.jsxs(x4,{children:[a.jsxs("p",{className:"reply-content",children:[a.jsx("span",{className:"reply-author",children:we.author.name}),a.jsx("span",{className:"reply-text",children:we.content})]}),a.jsxs("div",{className:"reply-meta",children:[a.jsx("span",{className:"reply-time",children:(()=>{const vt=new Date,Kt=new Date(we.createdAt),yn=Math.floor((vt-Kt)/(1e3*60)),ja=Math.floor(yn/60),Lo=Math.floor(ja/24);return yn<60?`${yn||1}m`:ja<24?`${ja}h`:`${Lo}d`})()}),a.jsx("button",{className:"reply-reply",onClick:()=>zo(ae.id),children:"Reply"})]})]})]},we.id))}),de[ae.id]&&a.jsx(n0,{children:a.jsxs(p4,{children:[a.jsx(a0,{children:r.name.split(" ").map(we=>we[0]).join("").toUpperCase()}),a.jsx(f4,{placeholder:"Reply...",value:$[ae.id]||"",onChange:we=>I(vt=>({...vt,[ae.id]:we.target.value})),onKeyPress:we=>{we.key==="Enter"&&(we.preventDefault(),gt(ae.id,_.id))}}),a.jsx(h4,{onClick:()=>gt(ae.id,_.id),disabled:!((ye=$[ae.id])!=null&&ye.trim())||j[ae.id],children:a.jsx(r0,{})})]})})]},ae.id)})})]})]},_.id)}),!f&&!b&&u.length===0&&a.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#64748b"},children:"No posts yet. Be the first to share!"}),B.show&&a.jsx(j4,{children:a.jsxs(k4,{children:[a.jsx(S4,{children:a.jsx(U4,{})}),a.jsxs(C4,{children:[a.jsx("h4",{children:B.title}),a.jsx("p",{children:B.message})]}),a.jsx(z4,{onClick:Co,children:a.jsx(io,{})})]})}),g&&a.jsx(yo,{isOpen:g,onClose:()=>x(!1),title:"Join the Conversation!",message:"Sign in or register to interact with the community"}),q&&a.jsx(T4,{onClick:Un,children:a.jsxs(A4,{ref:Ii,onClick:_=>_.stopPropagation(),onTouchStart:Mo,onTouchMove:tr,onTouchEnd:wa,children:[a.jsx(L4,{$offset:Za,$isAnimating:ge,children:Ge.map((_,ie)=>a.jsx(E4,{children:a.jsx(D4,{src:_.url,alt:_.alt,draggable:!1})},_.id))}),a.jsx(i0,{$left:!0,onClick:nr,disabled:ne===0,children:a.jsx($4,{})}),a.jsx(i0,{onClick:To,disabled:ne===Ge.length-1,children:a.jsx(H4,{})}),a.jsx(g4,{onClick:Un,children:a.jsx(io,{})}),a.jsxs(R4,{children:[ne+1," / ",Ge.length]})]})})]})})}const Y4=c.button`
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
  margin-bottom: 32px;

  &:hover {
    background: #e2e8f0;
    border-color: #cbd5e1;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 768px) {
    margin-bottom: 24px;
    padding: 10px 16px;
    font-size: 14px;
  }
`,G4=c.div`
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
`,V4=c.div`
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
`,Q4=c.div`
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
`,W4=c.div`
  position: absolute;
  top: 24px;
  right: 24px;
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  backdrop-filter: blur(10px);
  z-index: 10;
  
  ${r=>{switch(r.status.toLowerCase()){case"open":return`
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
`,Z4=c.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
    gap: 48px;
  }
`,J4=c.div``,X4=c.div``,F4=c.div`
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
`;c.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: ${r=>{switch(r.type){case"intermediate":return"#fef3c7";case"advanced":return"#fef2f2";case"open":return"#f0f9ff";default:return"#f8fafc"}}};
  border-radius: 25px;
  color: ${r=>{switch(r.type){case"intermediate":return"#d97706";case"advanced":return"#dc2626";case"open":return"#0369a1";default:return"#475569"}}};
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 24px;
  border: 1px solid ${r=>{switch(r.type){case"intermediate":return"#fde68a";case"advanced":return"#fecaca";case"open":return"#bae6fd";default:return"#e2e8f0"}}};

  svg {
    width: 16px;
    height: 16px;
  }
`;const K4=c.p`
  color: #64748b;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 24px;
  }
`,ro=c.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`,oo=c.h3`
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
`,I4=c.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  background: #f8fafc;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  overflow: hidden;
`,Ql=c.div`
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
`,Wl=c.div`
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
`,Zl=c.div`
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
`,Jl=c.div`
  font-size: 1rem;
  font-weight: 600;
  color: #334155;
  margin-bottom: 2px;
`,Xl=c.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #234255;
  text-align: right;

  &.price {
    font-size: 1.3rem;
    color: #29ba9b;
  }

  &.deadline {
    color: #dc2626;
  }

  @media (max-width: 768px) {
    text-align: left;
    font-size: 1rem;
    
    &.price {
      font-size: 1.2rem;
    }
  }
`,Fl=c.div`
  font-size: 0.85rem;
  color: #64748b;
  text-align: right;

  @media (max-width: 768px) {
    text-align: left;
  }
`,e3=c.div`
  background: #f8fafc;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid #e2e8f0;
`,t3=c.div`
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
`,n3=c.div`
  display: flex;
  gap: 8px;

  @media (max-width: 768px) {
    width: 100%;
  }
`,o0=c.button`
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
`,a3=c.div`
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
`,i3=c.div`
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
`,r3=c.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,o3=c.button`
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
`,l3=c.button`
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
`,s3=c.div`
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
`,Kd=c.button`
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
`,c3=c.div`
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
`,d3=c.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,Bi=c.div`
  background: #f8fafc;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #e2e8f0;
  transition: all 0.2s;

  &:hover {
    background: #f1f5f9;
    border-color: #cbd5e1;
  }
`,Oi=c.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #29ba9b;
  margin-bottom: 8px;
`,Pi=c.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #334155;
  margin: 0 0 8px;
`,_i=c.p`
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
  line-height: 1.4;
`;c.div`
  background: #f8fafc;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid #e2e8f0;
`;c.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #334155;
  margin: 0 0 16px;
  text-align: center;
`;c.div`
  color: #64748b;
  font-size: 1rem;
  margin-bottom: 20px;
  text-align: center;
`;c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 24px;
`;c.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;c.h4`
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
`;c.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;c.div`
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
`;c.div`
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
`;c.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #e2e8f0;
  margin-top: 24px;
`;c.h4`
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
`;c.div`
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
`;c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
`;c.div`
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
`;c.div`
  width: 80px;
  height: 80px;
  background: #f1f5f9;
  border-radius: 12px;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;const $i=c.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #334155;
  margin: 0 0 8px;
`;c.p`
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
  line-height: 1.4;
`;const u3=c.div`
  background: white;
  border-radius: 16px;
  padding: 12px;
  border: 1px solid #e2e8f0;
  width: 100%;

  @media (min-width: 768px) {
    padding: 16px;
  }
`,p3=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 16px;
  }
`,l0=c.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-width: 0;

  @media (min-width: 768px) {
    gap: 12px;
  }
`,Kl=c.div`
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
`,Il=c.div`
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
`;c.div`
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
`;c.div`
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
`;const f3=c.div`
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
`,h3=c.div`
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
`,m3=c.div`
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
`,x3=c.h4`
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
`,g3=c.div`
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
`,b3=c.div`
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
`,y3=c.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  position: static;

  @media (max-width: 1023px) {
    margin-top: 32px;
  }
`,v3=c.div`
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
`,N1=c.div`
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
`,w3=c.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;c.div`
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
`;const j3=c.div`
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
`,k3=c.div`
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

  ${N1}:hover & {
    background: #e2e8f0;
    border-color: #cbd5e1;
  }
`,S3=c.div`
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
`;c.div`
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
`;const C3=c.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #334155;
  margin: 0 0 16px;
`,z3=c.div`
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
`,M3=c.div`
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
`,s0=c.div`
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
`,T3=c.h1`
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
`,A3=c.p`
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
`,L3=c.div`
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
`,E3=c.div`
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
`,D3=c.div`
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
`,R3=c.div`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  backdrop-filter: blur(8px);
  z-index: 1;
  
  ${r=>{switch(r.status.toLowerCase()){case"open":return`
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
`,N3=c.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
`,B3=c.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 12px;
  line-height: 1.3;
`,es=c.div`
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
  border: 1px solid ${r=>{switch(r.type){case"intermediate":return"#fde68a";case"advanced":return"#fecaca";case"open":return"#bae6fd";default:return"#e2e8f0"}}};
`,B1=c.div`
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
`,O3=c(B1)`
  margin-bottom: 16px;
`,P3=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: auto;
  margin-bottom: 16px;
`,O1=c.div`
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
`,_3=c(O1)`
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
`,$3=c.button`
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
`,H3=c.div`
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
`,U3=c.div`
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
`,q3=c.div`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`,Y3=c.div`
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
`,G3=c.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`,c0=c.select`
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
`,V3=c.div`
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
`;function Q3(){return a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"#29ba9b",fillOpacity:"0.1",stroke:"#29ba9b",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M8 21h8"}),a.jsx("path",{d:"M12 17v4"}),a.jsx("path",{d:"M7 4h10"}),a.jsx("path",{d:"M17 4v8a5 5 0 0 1-10 0V4"}),a.jsx("path",{d:"M7 4c-3 0-4 2-4 3v1c0 2 2 3 4 3"}),a.jsx("path",{d:"M17 4c3 0 4 2 4 3v1c0 2-2 3-4 3"})]})}function Id(){return a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:a.jsx("path",{d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",strokeLinecap:"round",strokeLinejoin:"round"})})}function eu(){return a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[a.jsx("path",{d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M12 13a3 3 0 100-6 3 3 0 000 6z",strokeLinecap:"round",strokeLinejoin:"round"})]})}function d0(){return a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[a.jsx("circle",{cx:"12",cy:"12",r:"9",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("text",{x:"12",y:"14.5",dominantBaseline:"middle",textAnchor:"middle",fontSize:"14",stroke:"none",fill:"currentColor",style:{fontWeight:"bold"},children:"₱"})]})}function W3(){return a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:a.jsx("path",{d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",strokeLinecap:"round",strokeLinejoin:"round"})})}function Z3(){return a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",strokeLinecap:"round",strokeLinejoin:"round"})})}const J3=(r,s,u,d)=>{const f=new Date,m=new Date(r),b=new Date(s);return m<f?"Completed":f>b||u>=d?"Closed":"Open"},u0=c.div`
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
`,p0=c.div`
  background: white;
  border-radius: 16px;
  padding: 0;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`,f0=c.div`
  padding: 24px 32px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,h0=c.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #234255;
  margin: 0;
`,m0=c.button`
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
`,x0=c.div`
  padding: 32px;
`,da=c.div`
  margin-bottom: 24px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,ua=c.h3`
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
`,Mt=c.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`,Tt=c.label`
  font-weight: 500;
  color: #374151;
  margin-bottom: 6px;
  font-size: 0.9rem;
`,Hi=c.input`
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
`,Ui=c.select`
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
`,pa=c.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,g0=c.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`,b0=c.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #234255;
  margin: 0 0 8px 0;
`,y0=c.p`
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
`,v0=c.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 16px;
`,w0=c.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #234255;
  margin: 0 0 16px 0;
`,cn=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,dn=c.span`
  font-weight: 500;
  color: #64748b;
  font-size: 0.9rem;
`,un=c.span`
  font-weight: 600;
  color: #234255;
  font-size: 0.9rem;
`,j0=c.div`
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
`,k0=c.p`
  color: #64748b;
  margin: 0;
  font-size: 0.9rem;
`,S0=c.button`
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
`;function X3(){const{isAuthenticated:r}=bn(),[s,u]=v.useState([]),[d,f]=v.useState(!0),[m,b]=v.useState(null),[w,g]=v.useState(""),[x,C]=v.useState(""),[D,A]=v.useState(""),[H,T]=v.useState(!1),[U,P]=v.useState(!1),[k,B]=v.useState(null),[Y,F]=v.useState("details"),[J,R]=v.useState({}),[Z,ue]=v.useState(!1),[le,K]=v.useState(null),[X,se]=v.useState({category:"",division:"",ageCategory:"",level:"",fullName:"",email:"",contactNumber:"",proofOfPayment:null}),me=[{label:"₱0 - ₱3,000",min:0,max:3e3},{label:"₱3,001 - ₱6,000",min:3001,max:6e3},{label:"₱6,001 - ₱10,000",min:6001,max:1e4}],Be=s.filter(z=>{const q=z.name.toLowerCase().includes(w.toLowerCase())||z.location.toLowerCase().includes(w.toLowerCase()),oe=!x||(()=>{var De,Ge;if(console.log("Checking tournament:",z.name),z.tournamentCategories)return Object.values(z.tournamentCategories).some(Ve=>{if(console.log("Checking category:",Ve),!Ve||!Ve.skillLevel)return!1;if(x.startsWith("open-")){const qe=parseInt(x.split("-")[1]),_t=Ve.skillLevel.toLowerCase(),$t=Number(Ve.tier)||1;return console.log("Comparing:",{skillLevel:_t,categoryTier:$t,targetTier:qe,matches:_t==="open"&&$t===qe}),_t==="open"&&$t===qe}else return Ve.skillLevel.toLowerCase()===x.toLowerCase()});if(x.startsWith("open-")){const Ve=parseInt(x.split("-")[1]),qe=Number(z.tier)||1;return((De=z.tournamentType)==null?void 0:De.toLowerCase())==="open"&&qe===Ve}return((Ge=z.tournamentType)==null?void 0:Ge.toLowerCase())===x.toLowerCase()})(),ne=!D||z.entryFee>=me[parseInt(D)].min&&z.entryFee<=me[parseInt(D)].max;return q&&oe&&ne}),Ae=async()=>{try{f(!0),b(null);const q=[{id:"1",name:"PPL Summer Championship 2025",date:"2025-08-15T09:00:00Z",endDate:"2025-08-17T18:00:00Z",location:"Manila Pickleball Center",address:"123 Sports Complex Ave, Makati City, Metro Manila",latitude:14.5547,longitude:121.0244,entryFee:1500,prizePool:5e4,maxParticipants:20,currentParticipants:18,registrationDeadline:"2025-07-01T23:59:59Z",bannerUrl:"https://images.unsplash.com/photo-1686721135036-22ac6cbb8ce8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",tier:3,tournamentType:"open",description:"Join the most prestigious pickleball tournament in the Philippines! This 3-day championship features multiple divisions and attracts the best players from across the country.",contactEmail:"championship@philippinepickleball.com",contactPhone:"+63 912 345 6789",divisions:["Men's Singles","Women's Singles","Men's Doubles","Women's Doubles","Mixed Doubles"],tournamentCategories:{"mens-singles-intermediate-18":{id:"mens-singles-intermediate-18",name:"Men's Singles Intermediate 18+",ageGroup:"18+",skillLevel:"Intermediate",participants:16,prizePool:15e3,description:"Men's singles intermediate level competition for players 18 and older",groupStage:{bracketA:[{id:"1",name:"John Doe",rating:"3.5",roundWins:3,roundLosses:1,winPoints:33,lossPoints:21,position:1,age:24},{id:"5",name:"Carlos Rodriguez",rating:"3.4",roundWins:2,roundLosses:2,winPoints:28,lossPoints:26,position:2,age:28},{id:"9",name:"Miguel Torres",rating:"3.3",roundWins:2,roundLosses:2,winPoints:24,lossPoints:28,position:3,age:31},{id:"13",name:"Alex Martinez",rating:"3.2",roundWins:1,roundLosses:3,winPoints:18,lossPoints:33,position:4,age:26}],bracketB:[{id:"2",name:"Michael Johnson",rating:"3.6",roundWins:4,roundLosses:0,winPoints:44,lossPoints:12,position:1,age:29},{id:"6",name:"Luis Chen",rating:"3.5",roundWins:3,roundLosses:1,winPoints:35,lossPoints:18,position:2,age:25},{id:"10",name:"Roberto Kim",rating:"3.3",roundWins:1,roundLosses:3,winPoints:22,lossPoints:33,position:3,age:33},{id:"14",name:"David Park",rating:"3.1",roundWins:0,roundLosses:4,winPoints:15,lossPoints:44,position:4,age:27}],bracketC:[{id:"3",name:"Jason Park",rating:"3.7",roundWins:3,roundLosses:1,winPoints:37,lossPoints:19,position:1,age:30},{id:"7",name:"Anthony Chen",rating:"3.4",roundWins:3,roundLosses:1,winPoints:31,lossPoints:22,position:2,age:24},{id:"11",name:"Marcus Tan",rating:"3.2",roundWins:2,roundLosses:2,winPoints:26,lossPoints:26,position:3,age:32},{id:"15",name:"Steven Wong",rating:"3.0",roundWins:0,roundLosses:4,winPoints:14,lossPoints:44,position:4,age:26}],bracketD:[{id:"4",name:"Patrick Lim",rating:"3.5",roundWins:3,roundLosses:1,winPoints:32,lossPoints:20,position:1,age:28},{id:"8",name:"Jonathan Wu",rating:"3.3",roundWins:2,roundLosses:2,winPoints:29,lossPoints:25,position:2,age:25},{id:"12",name:"Brandon Choi",rating:"3.1",roundWins:2,roundLosses:2,winPoints:25,lossPoints:29,position:3,age:29},{id:"16",name:"Daniel Ko",rating:"2.9",roundWins:1,roundLosses:3,winPoints:20,lossPoints:32,position:4,age:31}]},knockoutStage:{quarterFinals:[{id:"qf1",player1:{name:"John Doe",seed:"A1"},player2:{name:"Anthony Chen",seed:"C2"},score:"11-8, 11-6",winner:"player1",completed:!0},{id:"qf2",player1:{name:"Michael Johnson",seed:"B1"},player2:{name:"Jonathan Wu",seed:"D2"},score:"11-9, 11-7",winner:"player1",completed:!0},{id:"qf3",player1:{name:"Jason Park",seed:"C1"},player2:{name:"Luis Chen",seed:"B2"},score:"11-5, 11-8",winner:"player1",completed:!0},{id:"qf4",player1:{name:"Patrick Lim",seed:"D1"},player2:{name:"Carlos Rodriguez",seed:"A2"},score:"11-7, 11-9",winner:"player2",completed:!0}],semiFinals:[{id:"sf1",player1:{name:"John Doe",seed:"QF1"},player2:{name:"Michael Johnson",seed:"QF2"},score:"11-9, 11-8",winner:"player1",completed:!0},{id:"sf2",player1:{name:"Jason Park",seed:"QF3"},player2:{name:"Carlos Rodriguez",seed:"QF4"},score:"11-6, 11-10",winner:"player1",completed:!0}],final:{id:"final",player1:{name:"John Doe",seed:"SF1"},player2:{name:"Jason Park",seed:"SF2"},score:"11-8, 11-9",winner:"player1",completed:!0},thirdPlace:{id:"thirdPlace",player1:{name:"Michael Johnson",seed:"SF1-L"},player2:{name:"Carlos Rodriguez",seed:"SF2-L"},score:"11-5, 11-7",winner:"player1",completed:!0}}},"womens-singles-intermediate-18":{id:"womens-singles-intermediate-18",name:"Women's Singles Intermediate 18+",ageGroup:"18+",skillLevel:"Intermediate",participants:12,prizePool:15e3,description:"Competitive women's singles for intermediate players",groupStage:{bracketA:[{id:"1",name:"Maria Santos",rating:"3.8",roundWins:3,roundLosses:1,winPoints:35,lossPoints:21,position:1,age:24},{id:"4",name:"Ana Reyes",rating:"3.6",roundWins:2,roundLosses:2,winPoints:28,lossPoints:26,position:2,age:26},{id:"7",name:"Sofia Garcia",rating:"3.4",roundWins:1,roundLosses:3,winPoints:18,lossPoints:33,position:3,age:28}],bracketB:[{id:"2",name:"Elena Cruz",rating:"3.7",roundWins:4,roundLosses:0,winPoints:44,lossPoints:15,position:1,age:25},{id:"5",name:"Carmen Lopez",rating:"3.5",roundWins:2,roundLosses:2,winPoints:29,lossPoints:27,position:2,age:30},{id:"8",name:"Patricia Wong",rating:"3.3",roundWins:0,roundLosses:4,winPoints:12,lossPoints:44,position:3,age:27}],bracketC:[{id:"3",name:"Andrea Martinez",rating:"3.9",roundWins:3,roundLosses:1,winPoints:37,lossPoints:19,position:1,age:23},{id:"6",name:"Rachel Gonzalez",rating:"3.7",roundWins:2,roundLosses:2,winPoints:31,lossPoints:24,position:2,age:29},{id:"9",name:"Lisa Johnson",rating:"3.5",roundWins:1,roundLosses:3,winPoints:22,lossPoints:35,position:3,age:31}],bracketD:[{id:"10",name:"Sarah Kim",rating:"3.6",roundWins:3,roundLosses:1,winPoints:36,lossPoints:18,position:1,age:26},{id:"11",name:"Michelle Yang",rating:"3.4",roundWins:2,roundLosses:2,winPoints:25,lossPoints:29,position:2,age:28},{id:"12",name:"Victoria Huang",rating:"3.2",roundWins:1,roundLosses:3,winPoints:19,lossPoints:36,position:3,age:24}]},knockoutStage:{quarterFinals:[{id:"qf1",player1:{name:"Maria Santos",seed:"A1"},player2:{name:"Michelle Yang",seed:"D2"},score:"11-7, 11-9",winner:"player1",completed:!0},{id:"qf2",player1:{name:"Elena Cruz",seed:"B1"},player2:{name:"Rachel Gonzalez",seed:"C2"},score:"11-8, 11-6",winner:"player1",completed:!0},{id:"qf3",player1:{name:"Andrea Martinez",seed:"C1"},player2:{name:"Ana Reyes",seed:"A2"},score:"11-5, 11-8",winner:"player1",completed:!0},{id:"qf4",player1:{name:"Sarah Kim",seed:"D1"},player2:{name:"Carmen Lopez",seed:"B2"},score:"11-9, 11-7",winner:"player1",completed:!0}],semiFinals:[{id:"sf1",player1:{name:"Maria Santos",seed:"QF1"},player2:{name:"Elena Cruz",seed:"QF2"},score:"11-6, 11-8",winner:"player1",completed:!0},{id:"sf2",player1:{name:"Andrea Martinez",seed:"QF3"},player2:{name:"Sarah Kim",seed:"QF4"},score:"11-9, 11-5",winner:"player1",completed:!0}],final:{id:"final",player1:{name:"Maria Santos",seed:"SF1"},player2:{name:"Andrea Martinez",seed:"SF2"},score:"11-7, 11-9",winner:"player1",completed:!0},thirdPlace:{id:"thirdPlace",player1:{name:"Elena Cruz",seed:"SF1-L"},player2:{name:"Sarah Kim",seed:"SF2-L"},score:"11-4, 11-6",winner:"player1",completed:!0}}},"mixed-doubles-open-18":{id:"mixed-doubles-open-18",name:"Mixed Doubles Open 18+",ageGroup:"18+",skillLevel:"Open",participants:8,prizePool:1e4,description:"Open-level mixed doubles competition",groupStage:{bracketA:[{id:"1",name:"John Doe & Maria Santos",rating:"4.2",roundWins:3,roundLosses:1,winPoints:37,lossPoints:21,position:1,players:["John Doe","Maria Santos"]},{id:"2",name:"Carlos Rodriguez & Ana Reyes",rating:"4.0",roundWins:2,roundLosses:2,winPoints:28,lossPoints:30,position:2,players:["Carlos Rodriguez","Ana Reyes"]}],bracketB:[{id:"3",name:"Miguel Torres & Sofia Garcia",rating:"4.1",roundWins:4,roundLosses:0,winPoints:44,lossPoints:18,position:1,players:["Miguel Torres","Sofia Garcia"]},{id:"4",name:"Luis Chen & Elena Cruz",rating:"3.9",roundWins:1,roundLosses:3,winPoints:22,lossPoints:38,position:2,players:["Luis Chen","Elena Cruz"]}],bracketC:[{id:"5",name:"Jason Park & Andrea Martinez",rating:"4.3",roundWins:3,roundLosses:1,winPoints:35,lossPoints:23,position:1,players:["Jason Park","Andrea Martinez"]},{id:"6",name:"Patrick Lim & Rachel Gonzalez",rating:"3.8",roundWins:2,roundLosses:2,winPoints:26,lossPoints:28,position:2,players:["Patrick Lim","Rachel Gonzalez"]}],bracketD:[{id:"7",name:"Michael Johnson & Sarah Kim",rating:"4.0",roundWins:2,roundLosses:2,winPoints:31,lossPoints:25,position:1,players:["Michael Johnson","Sarah Kim"]},{id:"8",name:"Anthony Chen & Carmen Lopez",rating:"3.7",roundWins:1,roundLosses:3,winPoints:19,lossPoints:35,position:2,players:["Anthony Chen","Carmen Lopez"]}]},knockoutStage:{quarterFinals:[{id:"qf1",player1:{name:"John & Maria",seed:"A1"},player2:{name:"Anthony & Carmen",seed:"D2"},score:"11-8, 11-6",winner:"player1",completed:!0},{id:"qf2",player1:{name:"Miguel & Sofia",seed:"B1"},player2:{name:"Patrick & Rachel",seed:"C2"},score:"11-9, 11-7",winner:"player1",completed:!0},{id:"qf3",player1:{name:"Jason & Andrea",seed:"C1"},player2:{name:"Luis & Elena",seed:"B2"},score:"11-5, 11-8",winner:"player1",completed:!0},{id:"qf4",player1:{name:"Michael & Sarah",seed:"D1"},player2:{name:"Carlos & Ana",seed:"A2"},score:"11-7, 11-9",winner:"player2",completed:!0}],semiFinals:[{id:"sf1",player1:{name:"John & Maria",seed:"QF1"},player2:{name:"Miguel & Sofia",seed:"QF2"},score:"11-9, 11-8",winner:"player1",completed:!0},{id:"sf2",player1:{name:"Jason & Andrea",seed:"QF3"},player2:{name:"Carlos & Ana",seed:"QF4"},score:"11-6, 11-10",winner:"player1",completed:!0}],final:{id:"final",player1:{name:"John & Maria",seed:"SF1"},player2:{name:"Jason & Andrea",seed:"SF2"},score:"11-8, 11-9",winner:"player1",completed:!0},thirdPlace:{id:"thirdPlace",player1:{name:"Miguel & Sofia",seed:"SF1-L"},player2:{name:"Carlos & Ana",seed:"SF2-L"},score:"11-5, 11-7",winner:"player1",completed:!0}}}},rules:["All matches follow official IFP rules","Players must check in 30 minutes before their scheduled match","Proper athletic attire and non-marking shoes required","No coaching allowed during matches"],amenities:["Parking","Restrooms","Food Court","Pro Shop","Air Conditioning"],brackets:[{id:"bracket-1",name:"Bracket A",maxPlayers:5,players:[{id:"1",name:'John "The Ace" Doe',status:"approved",rating:"4.5",team:"Manila Smashers"},{id:"8",name:"Elena Cruz",status:"approved",rating:"3.9",team:"Alabang Aces"},{id:"13",name:'James "Comet" Taylor',status:"approved",rating:"3.6",team:"Paranaque Phoenix"},{id:"16",name:'Sarah "Whirlwind" Kim',status:"approved",rating:"3.4",team:"Valenzuela Vipers"},{id:"17",name:"Alex Martinez",status:"approved",rating:"3.2",team:"Caloocan Cobras"}]},{id:"bracket-2",name:"Bracket B",maxPlayers:5,players:[{id:"2",name:"Maria Santos",status:"approved",rating:"4.3",team:"QC Warriors"},{id:"7",name:'Luis "Rocket" Chen',status:"approved",rating:"4.0",team:"Pasig Panthers"},{id:"12",name:'Patricia "Viper" Wong',status:"approved",rating:"3.7",team:"Mandaluyong Meteors"},{id:"14",name:'Lisa "Arrow" Johnson',status:"approved",rating:"3.5",team:"Las Pinas Lions"}]},{id:"bracket-3",name:"Bracket C",maxPlayers:5,players:[{id:"3",name:'Carlos "The Wall" Rodriguez',status:"approved",rating:"4.4",team:"BGC Titans"},{id:"9",name:'Roberto "Hammer" Kim',status:"approved",rating:"4.1",team:"Greenhills Gladiators"},{id:"11",name:'David "Spike" Park',status:"approved",rating:"4.0",team:"Cubao Crushers"},{id:"15",name:'Michael "Bolt" Chang',status:"approved",rating:"3.8",team:"Muntinlupa Mustangs"}]},{id:"bracket-4",name:"Bracket D",maxPlayers:5,players:[{id:"4",name:'Ana "Fire" Reyes',status:"approved",rating:"4.2",team:"Makati Sharks"},{id:"5",name:"Miguel Torres",status:"approved",rating:"4.6",team:"Ortigas Eagles"},{id:"6",name:'Sofia "Ice" Garcia',status:"approved",rating:"4.1",team:"Taguig Thunder"},{id:"10",name:'Carmen "Flash" Lopez',status:"approved",rating:"3.8",team:"Marikina Mavericks"},{id:"18",name:"Rachel Gonzalez",status:"approved",rating:"3.3",team:"Malabon Mako"}]}],registrations:[{id:"1",playerName:'John "The Ace" Doe',registeredAt:"2025-01-10T10:30:00Z",status:"approved",bracketId:"bracket-1",rating:"4.5",team:"Manila Smashers"},{id:"2",playerName:"Maria Santos",registeredAt:"2025-01-10T11:15:00Z",status:"approved",bracketId:"bracket-1",rating:"4.3",team:"QC Warriors"},{id:"3",playerName:'Carlos "The Wall" Rodriguez',registeredAt:"2025-01-10T14:20:00Z",status:"approved",bracketId:"bracket-1",rating:"4.4",team:"BGC Titans"},{id:"4",playerName:'Ana "Fire" Reyes',registeredAt:"2025-01-11T09:45:00Z",status:"approved",bracketId:"bracket-1",rating:"4.2",team:"Makati Sharks"},{id:"5",playerName:"Miguel Torres",registeredAt:"2025-01-11T13:10:00Z",status:"approved",bracketId:"bracket-1",rating:"4.6",team:"Ortigas Eagles"},{id:"6",playerName:'Sofia "Ice" Garcia',registeredAt:"2025-01-12T08:30:00Z",status:"approved",bracketId:"bracket-1",rating:"4.1",team:"Taguig Thunder"},{id:"7",playerName:'Luis "Rocket" Chen',registeredAt:"2025-01-12T16:45:00Z",status:"approved",bracketId:"bracket-2",rating:"4.0",team:"Pasig Panthers"},{id:"8",playerName:"Elena Cruz",registeredAt:"2025-01-13T12:00:00Z",status:"approved",bracketId:"bracket-2",rating:"3.9",team:"Alabang Aces"},{id:"9",playerName:'Roberto "Hammer" Kim',registeredAt:"2025-01-13T15:20:00Z",status:"approved",bracketId:"bracket-2",rating:"4.1",team:"Greenhills Gladiators"},{id:"10",playerName:'Carmen "Flash" Lopez',registeredAt:"2025-01-14T10:10:00Z",status:"approved",bracketId:"bracket-2",rating:"3.8",team:"Marikina Mavericks"},{id:"11",playerName:'David "Spike" Park',registeredAt:"2025-01-14T14:30:00Z",status:"approved",bracketId:"bracket-2",rating:"4.0",team:"Cubao Crushers"},{id:"12",playerName:'Patricia "Viper" Wong',registeredAt:"2025-01-15T09:00:00Z",status:"approved",bracketId:"bracket-2",rating:"3.7",team:"Mandaluyong Meteors"},{id:"13",playerName:'James "Comet" Taylor',registeredAt:"2025-01-15T11:30:00Z",status:"approved",bracketId:"bracket-3",rating:"3.6",team:"Paranaque Phoenix"},{id:"14",playerName:'Lisa "Arrow" Johnson',registeredAt:"2025-01-15T16:15:00Z",status:"approved",bracketId:"bracket-3",rating:"3.5",team:"Las Pinas Lions"},{id:"15",playerName:'Michael "Bolt" Chang',registeredAt:"2025-01-16T09:20:00Z",status:"approved",bracketId:"bracket-3",rating:"3.8",team:"Muntinlupa Mustangs"},{id:"16",playerName:'Sarah "Whirlwind" Kim',registeredAt:"2025-01-16T14:45:00Z",status:"approved",bracketId:"bracket-3",rating:"3.4",team:"Valenzuela Vipers"},{id:"17",playerName:"Alex Martinez",registeredAt:"2025-01-17T10:30:00Z",status:"approved",bracketId:"bracket-4",rating:"3.2",team:"Caloocan Cobras"},{id:"18",playerName:"Rachel Gonzalez",registeredAt:"2025-01-17T15:20:00Z",status:"approved",bracketId:"bracket-4",rating:"3.3",team:"Malabon Mako"},{id:"19",playerName:"Kevin Lim",registeredAt:"2025-01-18T09:15:00Z",status:"pending",bracketId:null,rating:"3.1",team:"Pasay Predators"},{id:"20",playerName:"Nina Cruz",registeredAt:"2025-01-18T11:30:00Z",status:"pending",bracketId:null,rating:"3.4",team:"Quezon Quakes"},{id:"21",playerName:"Tony Reyes",registeredAt:"2025-01-18T14:45:00Z",status:"pending",bracketId:null,rating:"3.6",team:"Masinag Magic"},{id:"22",playerName:"Grace Tan",registeredAt:"2025-01-18T16:20:00Z",status:"pending",bracketId:null,rating:"3.2",team:"Fairview Falcons"},{id:"23",playerName:"Mark Brown",registeredAt:"2025-01-19T10:00:00Z",status:"rejected",bracketId:null,rating:"2.5",team:"Independent",note:"Rating below minimum requirement"},{id:"24",playerName:"Jenny Davis",registeredAt:"2025-01-19T13:15:00Z",status:"rejected",bracketId:null,rating:"2.8",team:"Independent",note:"Incomplete documentation"}],tournamentCategories:{"mens-singles":{id:"mens-singles",name:"Men's Singles Advanced 18+",ageGroup:"18+",skillLevel:"Advanced",icon:"👨",participants:16,prizePool:25e3,groupStage:{bracketA:[{id:"1",name:"John Doe",rating:"4.8",roundWins:4,roundLosses:0,winPoints:44,lossPoints:12,position:1,age:24},{id:"5",name:"Carlos Rodriguez",rating:"4.6",roundWins:3,roundLosses:1,winPoints:35,lossPoints:18,position:2,age:28},{id:"9",name:"Miguel Torres",rating:"4.4",roundWins:2,roundLosses:2,winPoints:28,lossPoints:26,position:3,age:31},{id:"13",name:"Alex Martinez",rating:"4.2",roundWins:1,roundLosses:3,winPoints:18,lossPoints:33,position:4,age:26}],bracketB:[{id:"2",name:"Michael Johnson",rating:"4.7",roundWins:4,roundLosses:0,winPoints:44,lossPoints:10,position:1,age:29},{id:"6",name:"Luis Chen",rating:"4.5",roundWins:3,roundLosses:1,winPoints:37,lossPoints:15,position:2,age:25},{id:"10",name:"Roberto Kim",rating:"4.3",roundWins:2,roundLosses:2,winPoints:26,lossPoints:28,position:3,age:33},{id:"14",name:"David Park",rating:"4.1",roundWins:1,roundLosses:3,winPoints:15,lossPoints:37,position:4,age:27}],bracketC:[{id:"3",name:"Jason Park",rating:"4.6",roundWins:4,roundLosses:0,winPoints:44,lossPoints:8,position:1,age:30},{id:"7",name:"Anthony Chen",rating:"4.4",roundWins:3,roundLosses:1,winPoints:39,lossPoints:12,position:2,age:24},{id:"11",name:"Marcus Tan",rating:"4.2",roundWins:2,roundLosses:2,winPoints:24,lossPoints:28,position:3,age:32},{id:"15",name:"Steven Wong",rating:"4.0",roundWins:1,roundLosses:3,winPoints:12,lossPoints:39,position:4,age:26}],bracketD:[{id:"4",name:"Patrick Lim",rating:"4.5",roundWins:4,roundLosses:0,winPoints:44,lossPoints:6,position:1,age:28},{id:"8",name:"Jonathan Wu",rating:"4.3",roundWins:3,roundLosses:1,winPoints:36,lossPoints:15,position:2,age:25},{id:"12",name:"Brandon Choi",rating:"4.1",roundWins:2,roundLosses:2,winPoints:22,lossPoints:30,position:3,age:29},{id:"16",name:"Daniel Ko",rating:"3.9",roundWins:1,roundLosses:3,winPoints:15,lossPoints:36,position:4,age:31}]},knockoutStage:{quarterFinals:[{id:"qf1",player1:{name:"John Doe",seed:"A1"},player2:{name:"Anthony Chen",seed:"C2"},score:"11-8, 11-6",winner:"player1",completed:!0},{id:"qf2",player1:{name:"Michael Johnson",seed:"B1"},player2:{name:"Jonathan Wu",seed:"D2"},score:"11-9, 11-7",winner:"player1",completed:!0},{id:"qf3",player1:{name:"Jason Park",seed:"C1"},player2:{name:"Luis Chen",seed:"B2"},score:"11-5, 11-8",winner:"player1",completed:!0},{id:"qf4",player1:{name:"Patrick Lim",seed:"D1"},player2:{name:"Carlos Rodriguez",seed:"A2"},score:"11-7, 11-9",winner:"player2",completed:!0}],semiFinals:[{id:"sf1",player1:{name:"John Doe",seed:"QF1"},player2:{name:"Michael Johnson",seed:"QF2"},score:"11-9, 11-8",winner:"player1",completed:!0},{id:"sf2",player1:{name:"Jason Park",seed:"QF3"},player2:{name:"Carlos Rodriguez",seed:"QF4"},score:"11-6, 11-10",winner:"player1",completed:!0}],final:{id:"final",player1:{name:"John Doe",seed:"SF1"},player2:{name:"Jason Park",seed:"SF2"},score:"11-8, 11-9",winner:"player1",completed:!0},thirdPlace:{id:"thirdPlace",player1:{name:"Michael Johnson",seed:"SF1-L"},player2:{name:"Carlos Rodriguez",seed:"SF2-L"},score:"11-5, 11-7",winner:"player1",completed:!0}}},"womens-singles":{id:"womens-singles",name:"Women's Singles 18+ Intermediate",ageGroup:"18+",skillLevel:"Intermediate",icon:"👩",participants:12,prizePool:15e3,groupStage:{bracketA:[{id:"1",name:"Maria Santos",rating:"3.8",roundWins:3,roundLosses:1,winPoints:35,lossPoints:21,position:1,age:24},{id:"4",name:"Ana Reyes",rating:"3.6",roundWins:2,roundLosses:2,winPoints:28,lossPoints:26,position:2,age:26},{id:"7",name:"Sofia Garcia",rating:"3.4",roundWins:1,roundLosses:3,winPoints:18,lossPoints:33,position:3,age:28}],bracketB:[{id:"2",name:"Elena Cruz",rating:"3.7",roundWins:4,roundLosses:0,winPoints:44,lossPoints:15,position:1,age:25},{id:"5",name:"Carmen Lopez",rating:"3.5",roundWins:2,roundLosses:2,winPoints:29,lossPoints:27,position:2,age:30},{id:"8",name:"Patricia Wong",rating:"3.3",roundWins:0,roundLosses:4,winPoints:12,lossPoints:44,position:3,age:27}],bracketC:[{id:"3",name:"Andrea Martinez",rating:"3.9",roundWins:3,roundLosses:1,winPoints:37,lossPoints:19,position:1,age:23},{id:"6",name:"Rachel Gonzalez",rating:"3.7",roundWins:2,roundLosses:2,winPoints:31,lossPoints:24,position:2,age:29},{id:"9",name:"Lisa Johnson",rating:"3.5",roundWins:1,roundLosses:3,winPoints:22,lossPoints:35,position:3,age:31}],bracketD:[{id:"10",name:"Sarah Kim",rating:"3.6",roundWins:3,roundLosses:1,winPoints:36,lossPoints:18,position:1,age:26},{id:"11",name:"Michelle Yang",rating:"3.4",roundWins:2,roundLosses:2,winPoints:25,lossPoints:29,position:2,age:28},{id:"12",name:"Victoria Huang",rating:"3.2",roundWins:1,roundLosses:3,winPoints:19,lossPoints:36,position:3,age:24}]},knockoutStage:{quarterFinals:[{id:"qf1",player1:{name:"Maria Santos",seed:"A1"},player2:{name:"Michelle Yang",seed:"D2"},score:"11-7, 11-9",winner:"player1",completed:!0},{id:"qf2",player1:{name:"Elena Cruz",seed:"B1"},player2:{name:"Rachel Gonzalez",seed:"C2"},score:"11-8, 11-6",winner:"player1",completed:!0},{id:"qf3",player1:{name:"Andrea Martinez",seed:"C1"},player2:{name:"Ana Reyes",seed:"A2"},score:"11-5, 11-8",winner:"player1",completed:!0},{id:"qf4",player1:{name:"Sarah Kim",seed:"D1"},player2:{name:"Carmen Lopez",seed:"B2"},score:"11-9, 11-7",winner:"player1",completed:!0}],semiFinals:[{id:"sf1",player1:{name:"Maria Santos",seed:"QF1"},player2:{name:"Elena Cruz",seed:"QF2"},score:"11-6, 11-8",winner:"player1",completed:!0},{id:"sf2",player1:{name:"Andrea Martinez",seed:"QF3"},player2:{name:"Sarah Kim",seed:"QF4"},score:"11-9, 11-5",winner:"player1",completed:!0}],final:{id:"final",player1:{name:"Maria Santos",seed:"SF1"},player2:{name:"Andrea Martinez",seed:"SF2"},score:"11-7, 11-9",winner:"player1",completed:!0},thirdPlace:{id:"thirdPlace",player1:{name:"Elena Cruz",seed:"SF1-L"},player2:{name:"Sarah Kim",seed:"SF2-L"},score:"11-4, 11-6",winner:"player1",completed:!0}}},"mixed-doubles-open-35":{id:"mixed-doubles-open-35",name:"Mixed Doubles Open 35+",ageGroup:"35+",skillLevel:"Open",icon:"👫",participants:8,prizePool:1e4,groupStage:{bracketA:[{id:"1",name:"John Doe & Maria Santos",rating:"4.2",roundWins:3,roundLosses:1,winPoints:37,lossPoints:21,position:1,players:["John Doe","Maria Santos"]},{id:"2",name:"Carlos Rodriguez & Ana Reyes",rating:"4.0",roundWins:2,roundLosses:2,winPoints:28,lossPoints:30,position:2,players:["Carlos Rodriguez","Ana Reyes"]}],bracketB:[{id:"3",name:"Miguel Torres & Sofia Garcia",rating:"4.1",roundWins:4,roundLosses:0,winPoints:44,lossPoints:18,position:1,players:["Miguel Torres","Sofia Garcia"]},{id:"4",name:"Luis Chen & Elena Cruz",rating:"3.9",roundWins:1,roundLosses:3,winPoints:22,lossPoints:38,position:2,players:["Luis Chen","Elena Cruz"]}],bracketC:[{id:"5",name:"Jason Park & Andrea Martinez",rating:"4.3",roundWins:3,roundLosses:1,winPoints:35,lossPoints:23,position:1,players:["Jason Park","Andrea Martinez"]},{id:"6",name:"Patrick Lim & Rachel Gonzalez",rating:"3.8",roundWins:2,roundLosses:2,winPoints:26,lossPoints:28,position:2,players:["Patrick Lim","Rachel Gonzalez"]}],bracketD:[{id:"7",name:"Michael Johnson & Sarah Kim",rating:"4.0",roundWins:2,roundLosses:2,winPoints:31,lossPoints:25,position:1,players:["Michael Johnson","Sarah Kim"]},{id:"8",name:"Anthony Chen & Carmen Lopez",rating:"3.7",roundWins:1,roundLosses:3,winPoints:19,lossPoints:35,position:2,players:["Anthony Chen","Carmen Lopez"]}]},knockoutStage:{quarterFinals:[{id:"qf1",player1:{name:"John & Maria",seed:"A1"},player2:{name:"Anthony & Carmen",seed:"D2"},score:"11-8, 11-6",winner:"player1",completed:!0},{id:"qf2",player1:{name:"Miguel & Sofia",seed:"B1"},player2:{name:"Patrick & Rachel",seed:"C2"},score:"11-9, 11-7",winner:"player1",completed:!0},{id:"qf3",player1:{name:"Jason & Andrea",seed:"C1"},player2:{name:"Luis & Elena",seed:"B2"},score:"11-5, 11-8",winner:"player1",completed:!0},{id:"qf4",player1:{name:"Michael & Sarah",seed:"D1"},player2:{name:"Carlos & Ana",seed:"A2"},score:"11-7, 11-9",winner:"player2",completed:!0}],semiFinals:[{id:"sf1",player1:{name:"John & Maria",seed:"QF1"},player2:{name:"Miguel & Sofia",seed:"QF2"},score:"11-9, 11-8",winner:"player1",completed:!0},{id:"sf2",player1:{name:"Jason & Andrea",seed:"QF3"},player2:{name:"Carlos & Ana",seed:"QF4"},score:"11-6, 11-10",winner:"player1",completed:!0}],final:{id:"final",player1:{name:"John & Maria",seed:"SF1"},player2:{name:"Jason & Andrea",seed:"SF2"},score:"11-8, 11-9",winner:"player1",completed:!0},thirdPlace:{id:"thirdPlace",player1:{name:"Miguel & Sofia",seed:"SF1-L"},player2:{name:"Carlos & Ana",seed:"SF2-L"},score:"11-5, 11-7",winner:"player1",completed:!0}}}}},{id:"2",name:"Intermediate Skills Tournament",date:"2025-07-20T09:00:00Z",endDate:"2025-07-20T17:00:00Z",location:"Quezon City Sports Complex",address:"456 Sports St, Quezon City, Metro Manila",latitude:14.676,longitude:121.0437,entryFee:800,prizePool:2e4,maxParticipants:24,currentParticipants:24,registrationDeadline:"2025-06-20T23:59:59Z",bannerUrl:"https://images.unsplash.com/photo-1723004714201-cf224222b897?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",tier:2,tournamentType:"intermediate",description:"Perfect for developing players! This competitive tournament welcomes intermediate skill levels with a focus on improving gameplay and strategy.",contactEmail:"intermediate@philippinepickleball.com",contactPhone:"+63 912 345 6788",divisions:["Mixed Doubles","Men's Doubles","Women's Doubles"],tournamentCategories:{"mens-doubles-intermediate-18":{id:"mens-doubles-intermediate-18",name:"Men's Doubles Intermediate 18+",ageGroup:"18+",skillLevel:"Intermediate",participants:8,prizePool:8e3,description:"Competitive men's doubles for intermediate-level players",groupStage:{bracketA:[{id:"1",name:"Mark Lee & Tony Yang",rating:"3.5",roundWins:3,roundLosses:1,winPoints:35,lossPoints:22,position:1,players:["Mark Lee","Tony Yang"]},{id:"2",name:"Kevin Ng & Daniel Ko",rating:"3.4",roundWins:2,roundLosses:2,winPoints:28,lossPoints:26,position:2,players:["Kevin Ng","Daniel Ko"]}],bracketB:[{id:"3",name:"Alex Chen & Ryan Lim",rating:"3.6",roundWins:4,roundLosses:0,winPoints:44,lossPoints:18,position:1,players:["Alex Chen","Ryan Lim"]},{id:"4",name:"Chris Wang & Ben Chua",rating:"3.2",roundWins:1,roundLosses:3,winPoints:20,lossPoints:35,position:2,players:["Chris Wang","Ben Chua"]}],bracketC:[{id:"5",name:"Jake Huang & Sam Choi",rating:"3.3",roundWins:3,roundLosses:1,winPoints:33,lossPoints:21,position:1,players:["Jake Huang","Sam Choi"]},{id:"6",name:"Eric Goh & Gary Yap",rating:"3.1",roundWins:2,roundLosses:2,winPoints:25,lossPoints:28,position:2,players:["Eric Goh","Gary Yap"]}],bracketD:[{id:"7",name:"Ken Lai & Max Teo",rating:"3.0",roundWins:2,roundLosses:2,winPoints:29,lossPoints:27,position:1,players:["Ken Lai","Max Teo"]},{id:"8",name:"Ivan Soh & Oscar Chia",rating:"2.9",roundWins:1,roundLosses:3,winPoints:18,lossPoints:33,position:2,players:["Ivan Soh","Oscar Chia"]}]},knockoutStage:{quarterFinals:[{id:"qf1",player1:{name:"Mark & Tony",seed:"A1"},player2:{name:"Ivan & Oscar",seed:"D2"},score:"11-6, 11-8",winner:"player1",completed:!0},{id:"qf2",player1:{name:"Alex & Ryan",seed:"B1"},player2:{name:"Eric & Gary",seed:"C2"},score:"11-9, 11-7",winner:"player1",completed:!0},{id:"qf3",player1:{name:"Jake & Sam",seed:"C1"},player2:{name:"Chris & Ben",seed:"B2"},score:"11-5, 11-10",winner:"player1",completed:!0},{id:"qf4",player1:{name:"Ken & Max",seed:"D1"},player2:{name:"Kevin & Daniel",seed:"A2"},score:"11-8, 11-6",winner:"player2",completed:!0}],semiFinals:[{id:"sf1",player1:{name:"Mark & Tony",seed:"QF1"},player2:{name:"Alex & Ryan",seed:"QF2"},score:"11-7, 11-9",winner:"player1",completed:!0},{id:"sf2",player1:{name:"Jake & Sam",seed:"QF3"},player2:{name:"Kevin & Daniel",seed:"QF4"},score:"11-6, 11-8",winner:"player1",completed:!0}],final:{id:"final",player1:{name:"Mark & Tony",seed:"SF1"},player2:{name:"Jake & Sam",seed:"SF2"},score:"11-9, 11-7",winner:"player1",completed:!0},thirdPlace:{id:"thirdPlace",player1:{name:"Alex & Ryan",seed:"SF1-L"},player2:{name:"Kevin & Daniel",seed:"SF2-L"},score:"11-4, 11-6",winner:"player1",completed:!0}}},"womens-doubles":{id:"womens-doubles",name:"Women's Doubles Intermediate 18+",ageGroup:"18+",skillLevel:"Intermediate",icon:"👭",participants:8,prizePool:7e3,description:"Women's doubles competition for developing players",groupStage:{bracketA:[{id:"1",name:"Maya & Nina",rating:"3.3",wins:1,points:3,position:1,players:["Maya Patel","Nina Xu"]},{id:"2",name:"Grace & Amy",rating:"3.2",wins:1,points:3,position:2,players:["Grace Liu","Amy Zhao"]}],bracketB:[{id:"3",name:"Jenny & Emma",rating:"3.4",wins:1,points:3,position:1,players:["Jenny Wu","Emma Zhou"]},{id:"4",name:"Coco & Fiona",rating:"3.0",wins:1,points:3,position:2,players:["Coco Tan","Fiona Ong"]}],bracketC:[{id:"5",name:"Diana & Lisa",rating:"3.2",wins:1,points:3,position:1,players:["Diana Tan","Lisa Park"]},{id:"6",name:"Helen & Joy",rating:"2.9",wins:1,points:3,position:2,players:["Helen Low","Joy Koh"]}],bracketD:[{id:"7",name:"Lily & Nora",rating:"2.8",wins:1,points:3,position:1,players:["Lily Sim","Nora Wee"]},{id:"8",name:"Sarah & Priya",rating:"3.1",wins:1,points:3,position:2,players:["Sarah Kim","Priya Singh"]}]},knockoutStage:{quarterFinals:[{id:"qf1",player1:{name:"Maya & Nina",seed:"A1"},player2:{name:"Sarah & Priya",seed:"D2"},score:"11-8, 11-6",winner:"player1",completed:!0},{id:"qf2",player1:{name:"Jenny & Emma",seed:"B1"},player2:{name:"Helen & Joy",seed:"C2"},score:"11-5, 11-7",winner:"player1",completed:!0},{id:"qf3",player1:{name:"Diana & Lisa",seed:"C1"},player2:{name:"Coco & Fiona",seed:"B2"},score:"11-9, 11-8",winner:"player1",completed:!0},{id:"qf4",player1:{name:"Lily & Nora",seed:"D1"},player2:{name:"Grace & Amy",seed:"A2"},score:"11-7, 11-9",winner:"player2",completed:!0}],semiFinals:[{id:"sf1",player1:{name:"Maya & Nina",seed:"QF1"},player2:{name:"Jenny & Emma",seed:"QF2"},score:"11-6, 11-9",winner:"player1",completed:!0},{id:"sf2",player1:{name:"Diana & Lisa",seed:"QF3"},player2:{name:"Grace & Amy",seed:"QF4"},score:"11-8, 11-7",winner:"player1",completed:!0}],final:{id:"final",player1:{name:"Maya & Nina",seed:"SF1"},player2:{name:"Diana & Lisa",seed:"SF2"},score:"11-9, 11-8",winner:"player1",completed:!0},thirdPlace:{id:"thirdPlace",player1:{name:"Jenny & Emma",seed:"SF1-L"},player2:{name:"Grace & Amy",seed:"SF2-L"},score:"11-5, 11-7",winner:"player1",completed:!0}}},"mixed-doubles":{id:"mixed-doubles",name:"Mixed Doubles Intermediate 18+",ageGroup:"18+",skillLevel:"Intermediate",icon:"👫",participants:8,prizePool:5e3,description:"Fun and competitive mixed doubles for all skill levels"}},rules:["Open to players with 1-3 years experience","Standard scoring system applies","Limited coaching allowed between games","Emphasis on competitive play and sportsmanship"],amenities:["Parking","Restrooms","Refreshments"],brackets:[{id:"bracket-1",name:"Bracket A",maxPlayers:6,players:[{id:"1",name:"Sarah Kim",status:"approved",rating:"3.2",team:"QC Slammers"},{id:"9",name:"Priya Singh",status:"approved",rating:"3.1",team:"BGC Breakers"},{id:"13",name:"Grace Liu",status:"approved",rating:"3.4",team:"Makati Movers"},{id:"19",name:"Amy Zhao",status:"approved",rating:"3.0",team:"Ortigas Owls"},{id:"21",name:"Coco Tan",status:"approved",rating:"3.3",team:"Taguig Tigers"},{id:"24",name:"Gary Yap",status:"approved",rating:"3.2",team:"Pasig Pirates"}]},{id:"bracket-2",name:"Bracket B",maxPlayers:6,players:[{id:"2",name:"Mark Lee",status:"approved",rating:"3.5",team:"Manila Mayhem"},{id:"7",name:"Maya Patel",status:"approved",rating:"3.3",team:"Alabang Aces"},{id:"14",name:"Tony Yang",status:"approved",rating:"3.1",team:"Greenhills Giants"},{id:"17",name:"Nina Xu",status:"approved",rating:"3.4",team:"Marikina Magic"},{id:"20",name:"Ben Chua",status:"approved",rating:"3.2",team:"Cubao Cyclones"},{id:"23",name:"Fiona Ong",status:"approved",rating:"3.0",team:"Mandaluyong Meteors"}]},{id:"bracket-3",name:"Bracket C",maxPlayers:6,players:[{id:"3",name:"Jenny Wu",status:"approved",rating:"3.3",team:"Paranaque Panthers"},{id:"8",name:"Kevin Ng",status:"approved",rating:"3.4",team:"Las Pinas Lions"},{id:"12",name:"Daniel Ko",status:"approved",rating:"3.1",team:"Muntinlupa Mustangs"},{id:"15",name:"Emma Zhou",status:"approved",rating:"3.5",team:"Valenzuela Vipers"},{id:"18",name:"Sam Choi",status:"approved",rating:"3.2",team:"Caloocan Cobras"},{id:"22",name:"Eric Goh",status:"approved",rating:"3.3",team:"Malabon Mako"}]},{id:"bracket-4",name:"Bracket D",maxPlayers:6,players:[{id:"4",name:"Alex Chen",status:"approved",rating:"3.6",team:"Pasay Predators"},{id:"5",name:"Diana Tan",status:"approved",rating:"3.2",team:"Quezon Quakes"},{id:"6",name:"Ryan Lim",status:"approved",rating:"3.4",team:"Masinag Magic"},{id:"10",name:"Chris Wang",status:"approved",rating:"3.1",team:"Fairview Falcons"},{id:"11",name:"Lisa Park",status:"approved",rating:"3.5",team:"Antipolo Arrows"},{id:"16",name:"Jake Huang",status:"approved",rating:"3.3",team:"San Juan Spartans"}]}],registrations:Array.from({length:32},(oe,ne)=>({id:(ne+1).toString(),playerName:["Sarah Kim","Mark Lee","Jenny Wu","Alex Chen","Diana Tan","Ryan Lim","Maya Patel","Kevin Ng","Priya Singh","Chris Wang","Lisa Park","Daniel Ko","Grace Liu","Tony Yang","Emma Zhou","Jake Huang","Nina Xu","Sam Choi","Amy Zhao","Ben Chua","Coco Tan","Eric Goh","Fiona Ong","Gary Yap","Helen Low","Ivan Soh","Joy Koh","Ken Lai","Lily Sim","Max Teo","Nora Wee","Oscar Chia"][ne],registeredAt:new Date(Date.now()-(32-ne)*24*60*60*1e3).toISOString(),status:ne<24?"approved":"pending",bracketId:ne<24?`bracket-${Math.floor(ne/6)+1}`:null})),tournamentBracket:{groupStage:{bracketA:[{id:"1",name:"Sarah Kim",rating:"3.2",wins:5,points:15,position:1},{id:"9",name:"Priya Singh",rating:"3.1",wins:4,points:12,position:2},{id:"13",name:"Grace Liu",rating:"3.4",wins:3,points:9,position:3},{id:"19",name:"Amy Zhao",rating:"3.0",wins:2,points:6,position:4},{id:"21",name:"Coco Tan",rating:"3.3",wins:1,points:3,position:5},{id:"24",name:"Gary Yap",rating:"3.2",wins:0,points:0,position:6}],bracketB:[{id:"2",name:"Mark Lee",rating:"3.5",wins:4,points:12,position:1},{id:"7",name:"Maya Patel",rating:"3.3",wins:4,points:12,position:2},{id:"14",name:"Tony Yang",rating:"3.1",wins:3,points:9,position:3},{id:"17",name:"Nina Xu",rating:"3.4",wins:2,points:6,position:4},{id:"20",name:"Ben Chua",rating:"3.2",wins:1,points:3,position:5},{id:"23",name:"Fiona Ong",rating:"3.0",wins:0,points:0,position:6}],bracketC:[{id:"3",name:"Jenny Wu",rating:"3.3",wins:5,points:15,position:1},{id:"8",name:"Kevin Ng",rating:"3.4",wins:3,points:9,position:2},{id:"12",name:"Daniel Ko",rating:"3.1",wins:3,points:9,position:3},{id:"15",name:"Emma Zhou",rating:"3.5",wins:2,points:6,position:4},{id:"18",name:"Sam Choi",rating:"3.2",wins:1,points:3,position:5},{id:"22",name:"Eric Goh",rating:"3.3",wins:0,points:0,position:6}],bracketD:[{id:"4",name:"Alex Chen",rating:"3.6",wins:4,points:12,position:1},{id:"5",name:"Diana Tan",rating:"3.2",wins:4,points:12,position:2},{id:"6",name:"Ryan Lim",rating:"3.4",wins:3,points:9,position:3},{id:"10",name:"Chris Wang",rating:"3.1",wins:2,points:6,position:4},{id:"11",name:"Lisa Park",rating:"3.5",wins:1,points:3,position:5},{id:"16",name:"Jake Huang",rating:"3.3",wins:0,points:0,position:6}]},knockoutStage:{quarterFinals:[{id:"qf1",player1:{name:"Sarah Kim",seed:"A1"},player2:{name:"Kevin Ng",seed:"C2"},score:"11-9, 11-7",winner:"player1",completed:!0},{id:"qf2",player1:{name:"Mark Lee",seed:"B1"},player2:{name:"Diana Tan",seed:"D2"},score:"11-6, 11-8",winner:"player1",completed:!0},{id:"qf3",player1:{name:"Jenny Wu",seed:"C1"},player2:{name:"Priya Singh",seed:"A2"},score:"11-4, 11-6",winner:"player1",completed:!0},{id:"qf4",player1:{name:"Alex Chen",seed:"D1"},player2:{name:"Maya Patel",seed:"B2"},score:"11-8, 11-10",winner:"player1",completed:!0}],semiFinals:[{id:"sf1",player1:{name:"Sarah Kim",seed:"QF1"},player2:{name:"Mark Lee",seed:"QF2"},score:"11-7, 11-9",winner:"player1",completed:!0},{id:"sf2",player1:{name:"Jenny Wu",seed:"QF3"},player2:{name:"Alex Chen",seed:"QF4"},score:"11-9, 11-6",winner:"player1",completed:!0}],final:{id:"final",player1:{name:"Sarah Kim",seed:"SF1"},player2:{name:"Jenny Wu",seed:"SF2"},score:"11-9, 11-8",winner:"player1",completed:!0},thirdPlace:{id:"thirdPlace",player1:{name:"Mark Lee",seed:"SF1-L"},player2:{name:"Alex Chen",seed:"SF2-L"},score:"11-4, 11-7",winner:"player1",completed:!0}}}},{id:"3",name:"Indoor Championship Series",date:"2025-07-01T09:00:00Z",endDate:"2025-07-02T18:00:00Z",location:"BGC Indoor Sports Complex",address:"789 Bonifacio Global City, Taguig, Metro Manila",latitude:14.5515,longitude:121.047,entryFee:2e3,prizePool:75e3,maxParticipants:16,currentParticipants:15,registrationDeadline:"2025-06-15T23:59:59Z",bannerUrl:"https://plus.unsplash.com/premium_photo-1709048991290-1d36455a2895?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",tier:3,tournamentType:"advanced",description:"High-level competition in a premium indoor facility. This tournament features the best players and highest prize pool of the season.",contactEmail:"indoor@philippinepickleball.com",contactPhone:"+63 912 345 6787",divisions:["Men's Singles","Women's Singles","Men's Doubles","Women's Doubles","Mixed Doubles","Senior Doubles"],tournamentCategories:{"mens-singles-advanced-35":{id:"mens-singles-advanced-35",name:"Men's Singles Advanced 35+",ageGroup:"35+",skillLevel:"Advanced",participants:8,prizePool:3e4,description:"Elite men's singles competition for advanced players",groupStage:{bracketA:[{id:"1",name:"Michael Johnson",rating:"4.8",roundWins:3,roundLosses:1,winPoints:37,lossPoints:19,position:1,age:38},{id:"2",name:"Anthony Chen",rating:"4.5",roundWins:2,roundLosses:2,winPoints:32,lossPoints:28,position:2,age:42}],bracketB:[{id:"3",name:"Andrea Martinez",rating:"4.7",roundWins:4,roundLosses:0,winPoints:44,lossPoints:15,position:1,age:36},{id:"4",name:"Marcus Tan",rating:"4.4",roundWins:1,roundLosses:3,winPoints:22,lossPoints:39,position:2,age:40}],bracketC:[{id:"5",name:"Jason Park",rating:"4.6",roundWins:3,roundLosses:1,winPoints:35,lossPoints:21,position:1,age:39},{id:"6",name:"Vanessa Liu",rating:"4.4",roundWins:2,roundLosses:2,winPoints:28,lossPoints:30,position:2,age:37}],bracketD:[{id:"7",name:"Rachel Kim",rating:"4.5",roundWins:4,roundLosses:0,winPoints:44,lossPoints:12,position:1,age:35},{id:"8",name:"Steven Wong",rating:"4.3",roundWins:0,roundLosses:4,winPoints:18,lossPoints:44,position:2,age:41}]},knockoutStage:{quarterFinals:[{id:"qf1",player1:{name:"Michael Johnson",seed:"A1"},player2:{name:"Steven Wong",seed:"D2"},score:"11-7, 11-9",winner:"player1",completed:!0},{id:"qf2",player1:{name:"Andrea Martinez",seed:"B1"},player2:{name:"Vanessa Liu",seed:"C2"},score:"11-5, 11-8",winner:"player1",completed:!0},{id:"qf3",player1:{name:"Jason Park",seed:"C1"},player2:{name:"Marcus Tan",seed:"B2"},score:"11-9, 11-6",winner:"player1",completed:!0},{id:"qf4",player1:{name:"Rachel Kim",seed:"D1"},player2:{name:"Anthony Chen",seed:"A2"},score:"11-8, 11-7",winner:"player1",completed:!0}],semiFinals:[{id:"sf1",player1:{name:"Michael Johnson",seed:"QF1"},player2:{name:"Andrea Martinez",seed:"QF2"},score:"11-9, 11-8",winner:"player1",completed:!0},{id:"sf2",player1:{name:"Jason Park",seed:"QF3"},player2:{name:"Rachel Kim",seed:"QF4"},score:"11-6, 11-10",winner:"player1",completed:!0}],final:{id:"final",player1:{name:"Michael Johnson",seed:"SF1"},player2:{name:"Jason Park",seed:"SF2"},score:"11-8, 11-9",winner:"player1",completed:!0},thirdPlace:{id:"thirdPlace",player1:{name:"Andrea Martinez",seed:"SF1-L"},player2:{name:"Rachel Kim",seed:"SF2-L"},score:"11-5, 11-9",winner:"player1",completed:!0}}},"womens-singles":{id:"womens-singles",name:"Women's Singles Advanced 18+",ageGroup:"18+",skillLevel:"Advanced",icon:"👩",participants:8,prizePool:25e3,description:"High-level women's singles championship",groupStage:{bracketA:[{id:"1",name:"Amanda Yeh",rating:"4.3",roundWins:3,roundLosses:1,winPoints:37,lossPoints:19,position:1,age:25},{id:"2",name:"Victoria Huang",rating:"4.1",roundWins:2,roundLosses:2,winPoints:28,lossPoints:30,position:2,age:24}],bracketB:[{id:"3",name:"Michelle Yang",rating:"4.1",roundWins:4,roundLosses:0,winPoints:44,lossPoints:15,position:1,age:28},{id:"4",name:"Catherine Lee",rating:"4.2",roundWins:1,roundLosses:3,winPoints:22,lossPoints:38,position:2,age:26}],bracketC:[{id:"5",name:"Jonathan Wu",rating:"4.2",roundWins:3,roundLosses:1,winPoints:35,lossPoints:21,position:1,age:27},{id:"6",name:"Patrick Lim",rating:"4.2",roundWins:2,roundLosses:2,winPoints:26,lossPoints:28,position:2,age:29}],bracketD:[{id:"7",name:"Brandon Choi",rating:"4.1",roundWins:2,roundLosses:2,winPoints:31,lossPoints:25,position:1,age:30},{id:"8",name:"Daniel Ko",rating:"3.9",roundWins:1,roundLosses:3,winPoints:19,lossPoints:35,position:2,age:28}]},knockoutStage:{quarterFinals:[{id:"qf1",player1:{name:"Amanda Yeh",seed:"A1"},player2:{name:"Daniel Ko",seed:"D2"},score:"11-6, 11-8",winner:"player1",completed:!0},{id:"qf2",player1:{name:"Michelle Yang",seed:"B1"},player2:{name:"Patrick Lim",seed:"C2"},score:"11-9, 11-7",winner:"player1",completed:!0},{id:"qf3",player1:{name:"Jonathan Wu",seed:"C1"},player2:{name:"Catherine Lee",seed:"B2"},score:"11-5, 11-8",winner:"player1",completed:!0},{id:"qf4",player1:{name:"Brandon Choi",seed:"D1"},player2:{name:"Victoria Huang",seed:"A2"},score:"11-7, 11-9",winner:"player1",completed:!0}],semiFinals:[{id:"sf1",player1:{name:"Amanda Yeh",seed:"QF1"},player2:{name:"Michelle Yang",seed:"QF2"},score:"11-8, 11-6",winner:"player1",completed:!0},{id:"sf2",player1:{name:"Jonathan Wu",seed:"QF3"},player2:{name:"Brandon Choi",seed:"QF4"},score:"11-9, 11-7",winner:"player1",completed:!0}],final:{id:"final",player1:{name:"Amanda Yeh",seed:"SF1"},player2:{name:"Jonathan Wu",seed:"SF2"},score:"11-7, 11-9",winner:"player1",completed:!0},thirdPlace:{id:"thirdPlace",player1:{name:"Michelle Yang",seed:"SF1-L"},player2:{name:"Brandon Choi",seed:"SF2-L"},score:"11-4, 11-6",winner:"player1",completed:!0}}},"senior-doubles":{id:"senior-doubles",name:"Mixed Doubles Open 50+",ageGroup:"50+",skillLevel:"Open",icon:"🎖️",participants:6,prizePool:2e4,description:"Competitive doubles for experienced senior players",groupStage:{bracketA:[{id:"1",name:"Robert & James Sr.",rating:"4.0",wins:2,points:6,position:1,players:["Robert Senior","James Wilson Sr."],ages:[45,48]},{id:"2",name:"Frank & Thomas",rating:"3.8",wins:1,points:3,position:2,players:["Frank Miller","Thomas Brown"],ages:[42,44]},{id:"3",name:"William & Charles",rating:"3.6",wins:0,points:0,position:3,players:["William Davis","Charles Garcia"],ages:[41,43]}],bracketB:[{id:"4",name:"Richard & Joseph",rating:"3.9",wins:2,points:6,position:1,players:["Richard Taylor","Joseph Anderson"],ages:[46,47]},{id:"5",name:"Paul & Mark Sr.",rating:"3.7",wins:1,points:3,position:2,players:["Paul Martinez","Mark Rodriguez Sr."],ages:[40,45]},{id:"6",name:"Donald & Kenneth",rating:"3.5",wins:0,points:0,position:3,players:["Donald Wilson","Kenneth Lee"],ages:[44,42]}]},knockoutStage:{quarterFinals:[{id:"qf1",player1:{name:"Robert & James Sr.",seed:"A1"},player2:{name:"Paul & Mark Sr.",seed:"B2"},score:"11-8, 11-6",winner:"player1",completed:!0},{id:"qf2",player1:{name:"Richard & Joseph",seed:"B1"},player2:{name:"Frank & Thomas",seed:"A2"},score:"11-9, 11-7",winner:"player1",completed:!0}],semiFinals:[{id:"sf1",player1:{name:"Robert & James Sr.",seed:"QF1"},player2:{name:"Richard & Joseph",seed:"QF2"},score:"11-9, 11-8",winner:"player1",completed:!0}],final:{id:"final",player1:{name:"Robert & James Sr.",seed:"SF1"},player2:{name:"Richard & Joseph",seed:"SF1-L"},score:"11-7, 11-9",winner:"player1",completed:!0}}}},rules:["USAPA tournament rules strictly enforced","Seeded bracket based on ratings","No timeouts allowed","Professional referees for all matches"],amenities:["Valet Parking","VIP Lounge","Live Streaming","Professional Photography","Medical Support"],brackets:[{id:"bracket-1",name:"Bracket A",maxPlayers:4,players:[{id:"1",name:"Michael Johnson",status:"approved",rating:"4.8",team:"Elite Manila"},{id:"7",name:"Anthony Chen",status:"approved",rating:"4.5",team:"BGC Pros"},{id:"14",name:"Amanda Yeh",status:"approved",rating:"4.3",team:"Makati Masters"},{id:"18",name:"Victoria Huang",status:"approved",rating:"4.1",team:"Ortigas Elite"}]},{id:"bracket-2",name:"Bracket B",maxPlayers:4,players:[{id:"2",name:"Andrea Martinez",status:"approved",rating:"4.7",team:"QC Champions"},{id:"9",name:"Marcus Tan",status:"approved",rating:"4.4",team:"Pasig Powerhouse"},{id:"13",name:"Jonathan Wu",status:"approved",rating:"4.2",team:"Alabang All-Stars"},{id:"16",name:"Michelle Yang",status:"approved",rating:"4.1",team:"Greenhills Gladiators"}]},{id:"bracket-3",name:"Bracket C",maxPlayers:4,players:[{id:"3",name:"Jason Park",status:"approved",rating:"4.6",team:"Cubao Crushers"},{id:"8",name:"Vanessa Liu",status:"approved",rating:"4.4",team:"Mandaluyong Meteors"},{id:"11",name:"Patrick Lim",status:"approved",rating:"4.2",team:"Paranaque Phoenixes"},{id:"15",name:"Brandon Choi",status:"approved",rating:"4.1",team:"Las Pinas Legends"}]},{id:"bracket-4",name:"Bracket D",maxPlayers:4,players:[{id:"4",name:"Rachel Kim",status:"approved",rating:"4.5",team:"Valenzuela Vipers"},{id:"5",name:"Steven Wong",status:"approved",rating:"4.3",team:"Caloocan Cobras"},{id:"6",name:"Catherine Lee",status:"approved",rating:"4.2",team:"Malabon Mako"}]}],registrations:Array.from({length:85},(oe,ne)=>({id:(ne+1).toString(),playerName:`Player ${ne+1}`,registeredAt:new Date(Date.now()-(85-ne)*12*60*60*1e3).toISOString(),status:ne<20?"approved":ne<65?"pending":"rejected",bracketId:ne<20?`bracket-${Math.floor(ne/6)+1}`:null})),tournamentBracket:{groupStage:{bracketA:[{id:"1",name:"Michael Johnson",rating:"4.8",wins:3,points:9,position:1},{id:"7",name:"Anthony Chen",rating:"4.5",wins:3,points:9,position:2},{id:"14",name:"Amanda Yeh",rating:"4.3",wins:2,points:6,position:3},{id:"18",name:"Victoria Huang",rating:"4.1",wins:0,points:0,position:4}],bracketB:[{id:"2",name:"Andrea Martinez",rating:"4.7",wins:3,points:9,position:1},{id:"9",name:"Marcus Tan",rating:"4.4",wins:2,points:6,position:2},{id:"13",name:"Jonathan Wu",rating:"4.2",wins:2,points:6,position:3},{id:"16",name:"Michelle Yang",rating:"4.1",wins:0,points:0,position:4}],bracketC:[{id:"3",name:"Jason Park",rating:"4.6",wins:3,points:9,position:1},{id:"8",name:"Vanessa Liu",rating:"4.4",wins:2,points:6,position:2},{id:"11",name:"Patrick Lim",rating:"4.2",wins:1,points:3,position:3},{id:"15",name:"Brandon Choi",rating:"4.1",wins:0,points:0,position:4}],bracketD:[{id:"4",name:"Rachel Kim",rating:"4.5",wins:2,points:6,position:1},{id:"5",name:"Steven Wong",rating:"4.3",wins:2,points:6,position:2},{id:"6",name:"Catherine Lee",rating:"4.2",wins:1,points:3,position:3}]},knockoutStage:{quarterFinals:[{id:"qf1",player1:{name:"Michael Johnson",seed:"A1"},player2:{name:"Vanessa Liu",seed:"C2"},score:"11-7, 11-9",winner:"player1",completed:!0},{id:"qf2",player1:{name:"Andrea Martinez",seed:"B1"},player2:{name:"Steven Wong",seed:"D2"},score:"11-5, 11-8",winner:"player1",completed:!0},{id:"qf3",player1:{name:"Jason Park",seed:"C1"},player2:{name:"Anthony Chen",seed:"A2"},score:"11-9, 9-11, 11-6",winner:"player1",completed:!0},{id:"qf4",player1:{name:"Rachel Kim",seed:"D1"},player2:{name:"Marcus Tan",seed:"B2"},score:"11-8, 11-7",winner:"player1",completed:!0}],semiFinals:[{id:"sf1",player1:{name:"Michael Johnson",seed:"QF1"},player2:{name:"Andrea Martinez",seed:"QF2"},score:"11-9, 11-8",winner:"player1",completed:!0},{id:"sf2",player1:{name:"Jason Park",seed:"QF3"},player2:{name:"Rachel Kim",seed:"QF4"},score:"11-6, 11-10",winner:"player1",completed:!0}],final:{id:"final",player1:{name:"Michael Johnson",seed:"SF1"},player2:{name:"Jason Park",seed:"SF2"},score:"11-8, 11-9",winner:"player1",completed:!0},thirdPlace:{id:"thirdPlace",player1:{name:"Andrea Martinez",seed:"SF1-L"},player2:{name:"Rachel Kim",seed:"SF2-L"},score:"11-5, 11-9",winner:"player1",completed:!0}}}}].map(oe=>({...oe,status:J3(oe.date,oe.registrationDeadline,oe.currentParticipants,oe.maxParticipants)}));u(q)}catch(z){console.error("Failed to fetch tournaments:",z),b("Failed to load tournaments. Please try again later.")}finally{f(!1)}};v.useEffect(()=>{Ae()},[]);const $=z=>{if(B(z),P(!0),z.tournamentCategories){const q=Object.keys(z.tournamentCategories)[0];q&&R({[q]:!0})}},I=()=>{P(!1),B(null),F("details"),R({})},de=z=>{R(q=>({...q,[z]:!q[z]}))},be=async z=>{if(!r){T(!0);return}const q=s.find(oe=>oe.id===z);q&&(K(q),ue(!0),se({category:"",division:"",level:"",name:"",email:"",contactNumber:"",proofOfPayment:null}))},j=(z,q)=>{se(oe=>({...oe,[z]:q}))},Q=z=>{const q=z.target.files[0];q&&se(oe=>({...oe,proofOfPayment:q}))},ee=async z=>{z.preventDefault();try{console.log("Registration submitted:",{tournament:le.name,form:X}),ue(!1),alert("Registration submitted successfully! You will receive a confirmation email shortly.")}catch(q){console.error("Registration failed:",q),alert("Registration failed. Please try again.")}},te=()=>{ue(!1),K(null)},ce=(z,q)=>{const oe=new Date(z),ne=new Date(q);if(oe.toDateString()===ne.toDateString())return oe.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"});{const De=Math.abs(ne-oe),Ge=Math.ceil(De/(1e3*60*60*24))+1;return`${oe.toLocaleDateString("en-US",{month:"long",day:"numeric"})} - ${ne.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})} (${Ge} days)`}};return d?a.jsx(H3,{children:"Loading tournaments..."}):m?a.jsx(U3,{children:m}):U&&k?a.jsxs(s0,{children:[a.jsxs(G4,{children:[a.jsxs(Y4,{onClick:I,children:[a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7",strokeLinecap:"round",strokeLinejoin:"round"})}),"Back to Tournaments"]}),a.jsxs(V4,{children:[a.jsx(Q4,{children:k.bannerUrl&&a.jsx("img",{src:k.bannerUrl,alt:k.name})}),a.jsx(W4,{status:k.status,children:k.status})]}),a.jsxs(Z4,{children:[a.jsxs(J4,{children:[a.jsxs(F4,{children:[a.jsx("h1",{children:k.name}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"16px",marginBottom:"24px"},children:k.tournamentCategories?(()=>{const z=new Set;return Object.values(k.tournamentCategories).forEach(q=>{q.skillLevel==="Open"?z.add(`Open - Tier ${q.tier||1}`):["Intermediate","Advanced"].includes(q.skillLevel)&&z.add(q.skillLevel)}),Array.from(z).map((q,oe)=>a.jsx(es,{style:{fontSize:"0.9rem",padding:"8px 16px",fontWeight:"600"},children:q},oe))})():a.jsxs(es,{children:[k.tournamentType.charAt(0).toUpperCase()+k.tournamentType.slice(1),k.tournamentType==="open"&&` - Tier ${k.tier}`]})})]}),a.jsx(K4,{children:k.description}),"              ",a.jsxs(s3,{children:[a.jsx(Kd,{$active:Y==="details",onClick:()=>F("details"),children:"Tournament Details"}),a.jsx(Kd,{$active:Y==="events",onClick:()=>F("events"),children:"Events"}),a.jsx(Kd,{$active:Y==="brackets",onClick:()=>F("brackets"),children:"Tournament Brackets"})]}),a.jsxs(c3,{children:[Y==="details"&&a.jsxs(a.Fragment,{children:[a.jsxs(ro,{children:[a.jsxs(oo,{children:[a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z",strokeLinecap:"round",strokeLinejoin:"round"})}),"Tournament Information"]}),a.jsxs(I4,{children:[a.jsxs(Ql,{children:[a.jsx(Wl,{children:a.jsx(d0,{})}),a.jsxs(Zl,{children:[a.jsxs("div",{children:[a.jsx(Jl,{children:"Registration Fee"}),a.jsxs(Fl,{children:["Prize Pool: ₱",k.prizePool.toLocaleString()]})]}),a.jsxs(Xl,{className:"price",children:["₱",k.entryFee.toLocaleString()]})]})]}),a.jsxs(Ql,{children:[a.jsx(Wl,{children:a.jsx(Id,{})}),a.jsxs(Zl,{children:[a.jsxs("div",{children:[a.jsx(Jl,{children:"Tournament Duration"}),a.jsxs(Fl,{children:["Starts at ",new Date(k.date).toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})]})]}),a.jsx(Xl,{children:ce(k.date,k.endDate)})]})]}),a.jsxs(Ql,{children:[a.jsx(Wl,{children:a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",strokeLinecap:"round",strokeLinejoin:"round"})})}),a.jsxs(Zl,{children:[a.jsxs("div",{children:[a.jsx(Jl,{children:"Registration Deadline"}),a.jsxs(Fl,{children:[new Date(k.registrationDeadline).toLocaleDateString("en-US",{weekday:"long",year:"numeric"})," at ",new Date(k.registrationDeadline).toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})]})]}),a.jsx(Xl,{className:"deadline",children:new Date(k.registrationDeadline).toLocaleDateString("en-US",{month:"long",day:"numeric"})})]})]}),a.jsxs(Ql,{children:[a.jsx(Wl,{children:a.jsx(Q3,{})}),a.jsxs(Zl,{children:[a.jsxs("div",{children:[a.jsx(Jl,{children:"Tournament Tier & Type"}),a.jsxs(Fl,{children:[k.tournamentType.charAt(0).toUpperCase()+k.tournamentType.slice(1)," Level Tournament"]})]}),a.jsxs(Xl,{children:["Tier ",k.tier]})]})]})]})]}),a.jsxs(ro,{children:[a.jsxs(oo,{children:[a.jsx(eu,{}),"Tournament Location & Map"]}),a.jsxs(e3,{children:[a.jsxs(t3,{children:[a.jsxs("h4",{children:[a.jsx(eu,{}),"Venue Information"]}),a.jsxs(n3,{children:[a.jsxs(o0,{$primary:!0,onClick:()=>window.open(`https://maps.google.com/?q=${k.latitude},${k.longitude}`,"_blank"),children:[a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Get Directions"]}),a.jsxs(o0,{onClick:()=>{var z;return(z=navigator.share)==null?void 0:z.call(navigator,{title:`Location: ${k.location}`,text:k.address,url:`https://maps.google.com/?q=${k.latitude},${k.longitude}`})},children:[a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("polyline",{points:"15,3 21,3 21,9",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Share"]})]})]}),a.jsxs(a3,{children:[a.jsx("div",{className:"venue-name",children:k.location}),a.jsx("div",{className:"venue-address",children:k.address}),a.jsxs("div",{className:"coordinates",children:["Coordinates: ",k.latitude,", ",k.longitude]})]}),a.jsx(i3,{onClick:()=>window.open(`https://maps.google.com/?q=${k.latitude},${k.longitude}`,"_blank"),children:a.jsxs("div",{className:"map-text",children:[a.jsx("div",{className:"main-text",children:"Interactive Map View"}),a.jsx("div",{className:"sub-text",children:"Click to open in Google Maps"})]})})]})]})]}),Y==="events"&&a.jsxs(ro,{children:[a.jsxs(oo,{children:[a.jsx(Id,{}),"Tournament Events Schedule"]}),a.jsxs(d3,{children:[a.jsxs(Bi,{children:[a.jsx(Oi,{children:"Day 1 - 9:00 AM"}),a.jsx(Pi,{children:"Registration & Check-in"}),a.jsx(_i,{children:"All participants must check in and complete registration process. Bring valid ID and proof of payment."})]}),a.jsxs(Bi,{children:[a.jsx(Oi,{children:"Day 1 - 10:00 AM"}),a.jsx(Pi,{children:"Opening Ceremony"}),a.jsx(_i,{children:"Welcome address, tournament rules briefing, and player introductions."})]}),a.jsxs(Bi,{children:[a.jsx(Oi,{children:"Day 1 - 11:00 AM"}),a.jsxs(Pi,{children:[k.divisions[0]," - Round 1"]}),a.jsxs(_i,{children:["First round matches for ",k.divisions[0]," division."]})]}),a.jsxs(Bi,{children:[a.jsx(Oi,{children:"Day 1 - 2:00 PM"}),a.jsxs(Pi,{children:[k.divisions[1]||"Mixed Doubles"," - Round 1"]}),a.jsxs(_i,{children:["First round matches for ",k.divisions[1]||"Mixed Doubles"," division."]})]}),k.endDate!==k.date&&a.jsxs(a.Fragment,{children:[a.jsxs(Bi,{children:[a.jsx(Oi,{children:"Day 2 - 9:00 AM"}),a.jsx(Pi,{children:"Semi-Finals"}),a.jsx(_i,{children:"Semi-final matches across all divisions."})]}),a.jsxs(Bi,{children:[a.jsx(Oi,{children:"Day 2 - 3:00 PM"}),a.jsx(Pi,{children:"Finals & Closing Ceremony"}),a.jsx(_i,{children:"Championship matches and awards ceremony."})]})]})]})]}),Y==="brackets"&&a.jsxs(ro,{children:[a.jsxs(oo,{children:[a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",strokeLinecap:"round",strokeLinejoin:"round"})}),"Tournament Brackets"]}),k.tournamentCategories?a.jsx("div",{children:Object.values(k.tournamentCategories).map(z=>a.jsxs(v3,{children:[a.jsx(N1,{$expanded:J[z.id],onClick:()=>de(z.id),children:a.jsxs(w3,{children:[a.jsx(j3,{children:a.jsxs("div",{className:"category-title",style:{fontSize:"1.1rem",fontWeight:"600",color:"#1e293b",display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx("span",{children:z.name.split(" ").slice(0,2).join(" ")}),a.jsx("span",{style:{color:"#64748b",fontSize:"1rem"},children:"|"}),a.jsx("span",{children:z.ageGroup}),a.jsx("span",{style:{color:"#64748b",fontSize:"1rem"},children:"|"}),a.jsxs("span",{style:{color:"#059669"},children:[z.skillLevel,z.skillLevel==="Open"&&` - Tier ${z.tier||1}`]})]})}),a.jsx(k3,{$expanded:J[z.id],children:a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M19 9l-7 7-7-7",strokeLinecap:"round",strokeLinejoin:"round"})})})]})}),J[z.id]&&a.jsxs(S3,{$expanded:J[z.id],children:[z.groupStage&&a.jsxs(h3,{children:[a.jsx("div",{className:"section-title",children:"Group Stage Results"}),a.jsx("div",{className:"groups-grid",children:Object.entries(z.groupStage).map(([q,oe])=>a.jsxs(m3,{children:[a.jsxs(x3,{children:["Bracket ",q.slice(-1).toUpperCase()]}),a.jsxs(g3,{children:[a.jsxs("div",{className:"standings-header",children:[a.jsx("div",{children:"Player"}),a.jsx("div",{children:"R.Wins"}),a.jsx("div",{children:"R.Loss"}),a.jsx("div",{children:"W.Pts"}),a.jsx("div",{children:"L.Pts"})]}),oe.map(ne=>a.jsxs(b3,{$qualified:ne.position<=2,children:[a.jsxs("div",{className:"player-info",children:[a.jsx("div",{className:"position",children:ne.position}),a.jsx("div",{className:"player-name",children:ne.name})]}),a.jsx("div",{className:"round-wins",children:ne.roundWins||ne.wins||0}),a.jsx("div",{className:"round-losses",children:ne.roundLosses||0}),a.jsx("div",{className:"win-points",children:ne.winPoints||0}),a.jsx("div",{className:"loss-points",children:ne.lossPoints||0})]},ne.id))]})]},q))})]}),z.knockoutStage?a.jsx(u3,{children:a.jsxs(p3,{style:{marginTop:"-80px"},children:[a.jsxs(l0,{children:[a.jsxs(Kl,{children:[a.jsx("h4",{children:"Quarter-Finals"}),a.jsx("div",{className:"round-subtitle",children:"Top 8 Players"})]}),z.knockoutStage.quarterFinals.map(q=>a.jsxs(Il,{$isWinner:q.completed,children:[a.jsxs("div",{className:"match-info",children:[a.jsxs("div",{className:"player-name",children:[a.jsx("span",{className:"player-seed",children:q.player1.seed}),q.player1.name]}),q.completed&&a.jsx("div",{className:"match-score",children:q.winner==="player1"?"✓":""})]}),a.jsxs("div",{className:"match-info",children:[a.jsxs("div",{className:"player-name",children:[a.jsx("span",{className:"player-seed",children:q.player2.seed}),q.player2.name]}),q.completed&&a.jsx("div",{className:"match-score",children:q.winner==="player2"?"✓":""})]}),q.completed&&a.jsx("div",{className:"match-result",children:q.score})]},q.id))]}),a.jsxs(l0,{children:[a.jsxs(Kl,{children:[a.jsx("h4",{children:"Semi-Finals"}),a.jsx("div",{className:"round-subtitle",children:"Final 4"})]}),z.knockoutStage.semiFinals.map((q,oe)=>a.jsxs(Il,{$isWinner:q.completed,style:{marginTop:oe===0?"0px":"40px","@media (min-width: 768px)":{marginTop:oe===0?"50px":"30px"}},children:[a.jsxs("div",{className:"match-info",children:[a.jsxs("div",{className:"player-name",children:[a.jsxs("span",{className:"player-seed",children:["W",q.player1.seed]}),q.player1.name]}),q.completed&&a.jsx("div",{className:"match-score",children:q.winner==="player1"?"✓":""})]}),a.jsxs("div",{className:"match-info",children:[a.jsxs("div",{className:"player-name",children:[a.jsxs("span",{className:"player-seed",children:["W",q.player2.seed]}),q.player2.name]}),q.completed&&a.jsx("div",{className:"match-score",children:q.winner==="player2"?"✓":""})]}),q.completed&&a.jsx("div",{className:"match-result",children:q.score})]},q.id))]}),a.jsxs(f3,{style:{marginTop:"200px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"-10px"},children:[a.jsx("div",{className:"championship-trophy",children:"🏆"}),a.jsxs(Kl,{style:{margin:0},children:[a.jsx("h4",{children:"Championship"}),a.jsx("div",{className:"round-subtitle",children:"Final Match"})]})]}),z.knockoutStage.final&&a.jsxs(Il,{className:"championship-match",$isWinner:z.knockoutStage.final.completed,children:[a.jsxs("div",{className:"match-info",children:[a.jsxs("div",{className:"player-name",children:[a.jsxs("span",{className:"player-seed",children:["W",z.knockoutStage.final.player1.seed]}),z.knockoutStage.final.player1.name]}),z.knockoutStage.final.completed&&a.jsx("div",{className:"match-score",children:z.knockoutStage.final.winner==="player1"?"🥇":"🥈"})]}),a.jsxs("div",{className:"match-info",children:[a.jsxs("div",{className:"player-name",children:[a.jsxs("span",{className:"player-seed",children:["W",z.knockoutStage.final.player2.seed]}),z.knockoutStage.final.player2.name]}),z.knockoutStage.final.completed&&a.jsx("div",{className:"match-score",children:z.knockoutStage.final.winner==="player2"?"🥇":"🥈"})]}),z.knockoutStage.final.completed&&a.jsx("div",{className:"match-result",style:{fontWeight:"bold",color:"#16a34a"},children:z.knockoutStage.final.score})]}),z.knockoutStage.thirdPlace&&a.jsxs("div",{style:{marginTop:"100px",marginLeft:"auto",marginRight:"0",width:"100%",maxWidth:"300px"},children:[a.jsxs(Kl,{children:[a.jsx("h4",{children:"Third Place"}),a.jsx("div",{className:"round-subtitle",children:"Bronze Medal Match"})]}),a.jsxs(Il,{className:"championship-match",$isWinner:z.knockoutStage.thirdPlace.completed,style:{width:"100%"},children:[a.jsxs("div",{className:"match-info",children:[a.jsxs("div",{className:"player-name",children:[a.jsxs("span",{className:"player-seed",children:["L",z.knockoutStage.thirdPlace.player1.seed]}),z.knockoutStage.thirdPlace.player1.name]}),z.knockoutStage.thirdPlace.completed&&a.jsx("div",{className:"match-score",children:z.knockoutStage.thirdPlace.winner==="player1"?"🥉":""})]}),a.jsxs("div",{className:"match-info",children:[a.jsxs("div",{className:"player-name",children:[a.jsxs("span",{className:"player-seed",children:["L",z.knockoutStage.thirdPlace.player2.seed]}),z.knockoutStage.thirdPlace.player2.name]}),z.knockoutStage.thirdPlace.completed&&a.jsx("div",{className:"match-score",children:z.knockoutStage.thirdPlace.winner==="player2"?"🥉":""})]}),z.knockoutStage.thirdPlace.completed&&a.jsx("div",{className:"match-result",style:{fontWeight:"bold",color:"#16a34a"},children:z.knockoutStage.thirdPlace.score})]})]})]})]})}):a.jsxs("div",{style:{textAlign:"center",padding:"32px 24px",background:"white",borderRadius:"12px",border:"1px solid #e2e8f0",marginTop:"16px"},children:[a.jsx("div",{style:{fontSize:"2.5rem",marginBottom:"12px"},children:"🏆"}),a.jsx("h3",{style:{color:"#334155",marginBottom:"8px",fontSize:"1.1rem"},children:"Knockout Bracket Coming Soon"}),a.jsx("p",{style:{color:"#64748b",fontSize:"0.9rem",marginBottom:"16px"},children:"The knockout bracket will be generated once the group stage is complete."}),a.jsxs("div",{style:{background:"#f8fafc",padding:"16px",borderRadius:"8px",border:"1px solid #e2e8f0",display:"inline-block",minWidth:"200px"},children:[a.jsx("div",{style:{color:"#29ba9b",fontWeight:"600",marginBottom:"8px",fontSize:"0.9rem"},children:"Category Details"}),a.jsxs("div",{style:{fontSize:"0.8rem",color:"#64748b",lineHeight:"1.4"},children:[a.jsxs("div",{style:{marginBottom:"2px"},children:["🎯 Skill Level: ",z.skillLevel]}),a.jsxs("div",{style:{marginBottom:"2px"},children:["👥 Total Players: ",z.participants]}),a.jsxs("div",{style:{marginBottom:"2px"},children:["🏆 Prize Pool: ₱",z.prizePool.toLocaleString()]}),a.jsxs("div",{style:{marginBottom:"2px"},children:["📅 Age Group: ",z.ageGroup]}),a.jsxs("div",{children:["📝 ",z.description]})]})]})]})]})]},z.id))}):a.jsx(a.Fragment,{children:k.tournamentBracket?a.jsx(a.Fragment,{}):a.jsxs("div",{style:{textAlign:"center",padding:"48px 24px",background:"#f8fafc",borderRadius:"16px",border:"1px dashed #e2e8f0"},children:[a.jsx("div",{style:{fontSize:"3rem",marginBottom:"16px"},children:"🏆"}),a.jsx("h3",{style:{color:"#334155",marginBottom:"8px"},children:"Tournament Bracket Not Available"}),a.jsx("p",{style:{color:"#64748b",fontSize:"0.95rem"},children:"The tournament bracket will be generated once the group stage is complete and knockout matches begin."})]})})]})]})]}),a.jsxs(X4,{children:[a.jsxs(y3,{children:[a.jsx(C3,{children:"Tournament Registration"}),a.jsxs(z3,{children:[a.jsxs("div",{className:"price",children:["₱",k.entryFee.toLocaleString()]}),a.jsxs("div",{className:"prize-pool",children:["Prize Pool: ₱",k.prizePool.toLocaleString()]})]}),a.jsxs(M3,{children:[a.jsx("span",{className:"label",children:"Participants"}),a.jsxs("span",{className:"count",children:[k.currentParticipants,"/",k.maxParticipants]})]}),a.jsxs(r3,{children:[a.jsx(o3,{onClick:()=>be(k.id),disabled:k.currentParticipants>=k.maxParticipants||!r,children:k.currentParticipants>=k.maxParticipants?"Tournament Full":r?"Register Now":"Sign In to Register"}),a.jsx(l3,{onClick:()=>{var z;return(z=navigator.share)==null?void 0:z.call(navigator,{title:k.name,text:k.description,url:window.location.href})},children:"Share"})]})]}),a.jsx("div",{style:{marginTop:"32px"},children:a.jsxs(ro,{children:[a.jsxs(oo,{children:[a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.29 1.51 4.04 3 5.5l7 7z",strokeLinecap:"round",strokeLinejoin:"round"})}),"Tournament Sponsors"]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"18px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",padding:"10px 0"},children:[a.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",alt:"Nike",style:{width:"45px",height:"45px",objectFit:"contain",borderRadius:"8px",background:"white",padding:"6px",border:"1px solid #e2e8f0"}}),a.jsx($i,{style:{fontSize:"1rem",margin:"0",color:"#334155"},children:"Nike Philippines"})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",padding:"10px 0"},children:[a.jsx("div",{style:{width:"45px",height:"45px",background:"linear-gradient(135deg, #ff6600, #ff8800)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"bold",fontSize:"0.8rem",border:"1px solid #e2e8f0"},children:"G"}),a.jsx($i,{style:{fontSize:"1rem",margin:"0",color:"#334155"},children:"Gatorade"})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",padding:"10px 0"},children:[a.jsx("div",{style:{width:"45px",height:"45px",background:"linear-gradient(135deg, #003d7a, #0066cc)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"bold",fontSize:"0.8rem",border:"1px solid #e2e8f0"},children:"BDO"}),a.jsx($i,{style:{fontSize:"1rem",margin:"0",color:"#334155"},children:"BDO Unibank"})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",padding:"10px 0"},children:[a.jsx("div",{style:{width:"45px",height:"45px",background:"linear-gradient(135deg, #e31837, #ff4444)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"bold",fontSize:"0.8rem",border:"1px solid #e2e8f0"},children:"🐝"}),a.jsx($i,{style:{fontSize:"1rem",margin:"0",color:"#334155"},children:"Jollibee"})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",padding:"10px 0"},children:[a.jsx("img",{src:"https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=400&fit=crop&crop=center",alt:"Sports Equipment",style:{width:"45px",height:"45px",objectFit:"cover",borderRadius:"8px",border:"1px solid #e2e8f0"}}),a.jsx($i,{style:{fontSize:"1rem",margin:"0",color:"#334155"},children:"Metro Sports Hub"})]}),a.jsx("div",{style:{borderTop:"1px solid #e2e8f0",paddingTop:"18px",marginTop:"10px"},children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",padding:"10px 0"},children:[a.jsx("div",{style:{width:"45px",height:"45px",background:"#f8fafc",border:"2px dashed #cbd5e1",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",color:"#64748b",fontWeight:"500"},children:"+"}),a.jsx($i,{style:{fontSize:"1rem",margin:"0",color:"#64748b",fontStyle:"italic"},children:"Become a Sponsor"})]})})]})]})})]})]})]}),H&&a.jsx(yo,{isOpen:H,onClose:()=>T(!1),title:"Join the Tournament!",message:"Sign in or register to participate in tournaments"}),Z&&le&&a.jsx(u0,{onClick:te,children:a.jsxs(p0,{onClick:z=>z.stopPropagation(),children:[a.jsxs(f0,{children:[a.jsxs(h0,{children:["Register for ",le.name]}),a.jsx(m0,{onClick:te,children:"×"})]}),a.jsx(x0,{children:a.jsxs("form",{onSubmit:ee,children:[a.jsxs(da,{children:[a.jsx(ua,{children:"Tournament Category"}),a.jsxs(pa,{children:[a.jsxs(Mt,{children:[a.jsx(Tt,{children:"Category"}),a.jsxs(Ui,{value:X.category,onChange:z=>j("category",z.target.value),required:!0,children:[a.jsx("option",{value:"",children:"Select Category"}),a.jsx("option",{value:"mens-singles",children:"Men's Singles"}),a.jsx("option",{value:"womens-singles",children:"Women's Singles"}),a.jsx("option",{value:"mens-doubles",children:"Men's Doubles"}),a.jsx("option",{value:"womens-doubles",children:"Women's Doubles"}),a.jsx("option",{value:"mixed-doubles",children:"Mixed Doubles"})]})]}),a.jsxs(Mt,{children:[a.jsx(Tt,{children:"Age Category"}),a.jsxs(Ui,{value:X.ageCategory,onChange:z=>j("ageCategory",z.target.value),required:!0,children:[a.jsx("option",{value:"",children:"Select Age Category"}),a.jsx("option",{value:"18+",children:"18+"}),a.jsx("option",{value:"35+",children:"35+"}),a.jsx("option",{value:"50+",children:"50+"})]})]})]}),a.jsx(pa,{children:a.jsxs(Mt,{children:[a.jsx(Tt,{children:"Skill Level"}),a.jsxs(Ui,{value:X.level,onChange:z=>j("level",z.target.value),required:!0,children:[a.jsx("option",{value:"",children:"Select Skill Level"}),a.jsx("option",{value:"intermediate",children:"Intermediate"}),a.jsx("option",{value:"advanced",children:"Advanced"}),a.jsx("option",{value:"open-tier1",children:"Open - Tier 1"}),a.jsx("option",{value:"open-tier2",children:"Open - Tier 2"}),a.jsx("option",{value:"open-tier3",children:"Open - Tier 3"})]})]})})]}),a.jsxs(da,{children:[a.jsx(ua,{children:"Personal Information"}),a.jsxs(pa,{children:[a.jsxs(Mt,{children:[a.jsx(Tt,{children:"Full Name"}),a.jsx(Hi,{type:"text",value:X.fullName,onChange:z=>j("fullName",z.target.value),placeholder:"Enter your full name",required:!0})]}),a.jsxs(Mt,{children:[a.jsx(Tt,{children:"Email Address"}),a.jsx(Hi,{type:"email",value:X.email,onChange:z=>j("email",z.target.value),placeholder:"your.email@example.com",required:!0})]})]}),a.jsx(pa,{children:a.jsxs(Mt,{children:[a.jsx(Tt,{children:"Contact Number"}),a.jsx(Hi,{type:"tel",value:X.contactNumber,onChange:z=>j("contactNumber",z.target.value),placeholder:"+63 912 345 6789",required:!0})]})})]}),a.jsxs(da,{children:[a.jsx(ua,{children:"Registration Fee"}),a.jsxs(g0,{children:[a.jsx(b0,{children:"Tournament Entry Fee"}),a.jsxs(y0,{children:["₱",le.entryFee," - Registration fee is required to secure your spot in the tournament."]})]})]}),a.jsxs(da,{children:[a.jsx(ua,{children:"Payment Details"}),a.jsxs(v0,{children:[a.jsx(w0,{children:"Bank Transfer Details"}),a.jsxs(cn,{children:[a.jsx(dn,{children:"Bank Name:"}),a.jsx(un,{children:"-"})]}),a.jsxs(cn,{children:[a.jsx(dn,{children:"Account Name:"}),a.jsx(un,{children:"-"})]}),a.jsxs(cn,{children:[a.jsx(dn,{children:"Account Number:"}),a.jsx(un,{children:"-"})]}),a.jsxs(cn,{children:[a.jsx(dn,{children:"Routing Number:"}),a.jsx(un,{children:"-"})]}),a.jsxs(cn,{children:[a.jsx(dn,{children:"Reference:"}),a.jsx(un,{children:"-"})]})]}),a.jsxs(Mt,{children:[a.jsx(Tt,{children:"Proof of Payment"}),a.jsxs(j0,{children:[a.jsx("input",{type:"file",accept:"image/*,.pdf",onChange:Q,style:{display:"none"},id:"proof-upload",required:!0}),a.jsx("label",{htmlFor:"proof-upload",style:{cursor:"pointer"},children:a.jsx(k0,{children:X.proofOfPayment?`Selected: ${X.proofOfPayment.name}`:"Click to upload proof of payment (Image or PDF)"})})]})]})]}),a.jsx(S0,{type:"submit",children:"Submit Registration"})]})})]})})]}):a.jsxs(s0,{children:[a.jsx(T3,{children:"Tournaments"}),a.jsx(A3,{children:"Discover and join exciting pickleball tournaments across the Philippines. From intermediate-level competitions to professional championships, find the perfect competition to showcase your skills."}),a.jsxs(q3,{children:[a.jsxs(Y3,{children:[a.jsx(Z3,{}),a.jsx("input",{type:"text",placeholder:"Search tournaments by name or location...",value:w,onChange:z=>g(z.target.value)})]}),a.jsxs(G3,{children:[a.jsxs(c0,{value:x,onChange:z=>C(z.target.value),children:[a.jsx("option",{value:"",children:"All Tiers"}),a.jsx("option",{value:"intermediate",children:"Intermediate"}),a.jsx("option",{value:"advanced",children:"Advanced"}),a.jsx("option",{value:"open-1",children:"Open - Tier 1"}),a.jsx("option",{value:"open-2",children:"Open - Tier 2"}),a.jsx("option",{value:"open-3",children:"Open - Tier 3"})]}),a.jsxs(c0,{value:D,onChange:z=>A(z.target.value),children:[a.jsx("option",{value:"",children:"All Fees"}),me.map((z,q)=>a.jsx("option",{value:q,children:z.label},q))]})]})]}),Be.length>0?a.jsx(L3,{children:Be.map(z=>a.jsxs(E3,{onClick:()=>$(z),style:{cursor:"pointer"},children:[a.jsxs(D3,{children:[z.bannerUrl&&a.jsx("img",{src:z.bannerUrl,alt:z.name}),a.jsx(R3,{status:z.status,children:z.status})]}),a.jsxs(N3,{children:[a.jsx(B3,{children:z.name}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"8px"},children:z.tournamentCategories?(()=>{const q=new Set;return console.log("All tournament categories:",z.tournamentCategories),Object.values(z.tournamentCategories).forEach(oe=>{var ne;if(console.log("Processing category:",{skillLevel:oe.skillLevel,tier:oe.tier,fullCategory:oe}),((ne=oe.skillLevel)==null?void 0:ne.toLowerCase())==="open"){const De=Number(oe.tier)||1;q.add(`Open - Tier ${De}`)}else["Intermediate","Advanced"].includes(oe.skillLevel)&&q.add(oe.skillLevel)}),Array.from(q).map((oe,ne)=>{const Ge=oe.startsWith("Open")?"open":oe.toLowerCase();return a.jsx(es,{type:Ge,style:{fontSize:"0.8rem",padding:"4px 10px"},children:oe},ne)})})():a.jsxs(es,{type:z.tournamentType,children:[z.tournamentType.charAt(0).toUpperCase()+z.tournamentType.slice(1),z.tournamentType==="open"&&` - Tier ${z.tier}`]})}),a.jsxs(B1,{children:[a.jsx(Id,{}),new Date(z.date).toLocaleDateString()]}),a.jsxs(O3,{children:[a.jsx(eu,{}),z.location]}),a.jsxs(P3,{children:[a.jsxs(O1,{children:[a.jsx(W3,{}),a.jsxs("div",{children:[z.currentParticipants,"/",z.maxParticipants]})]}),a.jsxs(_3,{children:[a.jsx(d0,{}),a.jsxs("div",{children:[a.jsxs("span",{children:["₱",z.entryFee]}),a.jsx("span",{})]})]})]}),a.jsx($3,{onClick:q=>{q.stopPropagation(),be(z.id)},disabled:z.currentParticipants>=z.maxParticipants,children:z.currentParticipants>=z.maxParticipants?"Full":"Register Now"})]})]},z.id))}):a.jsxs(V3,{children:[a.jsx("h3",{children:"No Tournaments Found"}),a.jsx("p",{children:w||x||D?"Try adjusting your search criteria or filters to find more tournaments.":"There are no tournaments available at the moment. Please check back later."})]}),H&&a.jsx(yo,{isOpen:H,onClose:()=>T(!1),title:"Join the Tournament!",message:"Sign in or register to participate in tournaments"}),Z&&le&&a.jsx(u0,{onClick:te,children:a.jsxs(p0,{onClick:z=>z.stopPropagation(),children:[a.jsxs(f0,{children:[a.jsxs(h0,{children:["Register for ",le.name]}),a.jsx(m0,{onClick:te,children:"×"})]}),a.jsx(x0,{children:a.jsxs("form",{onSubmit:ee,children:[a.jsxs(da,{children:[a.jsx(ua,{children:"Tournament Category"}),a.jsxs(pa,{children:[a.jsxs(Mt,{children:[a.jsx(Tt,{children:"Category"}),a.jsxs(Ui,{value:X.category,onChange:z=>j("category",z.target.value),required:!0,children:[a.jsx("option",{value:"",children:"Select Category"}),a.jsx("option",{value:"mens-singles",children:"Men's Singles"}),a.jsx("option",{value:"womens-singles",children:"Women's Singles"}),a.jsx("option",{value:"mens-doubles",children:"Men's Doubles"}),a.jsx("option",{value:"womens-doubles",children:"Women's Doubles"}),a.jsx("option",{value:"mixed-doubles",children:"Mixed Doubles"})]})]}),a.jsxs(Mt,{children:[a.jsx(Tt,{children:"Age Category"}),a.jsxs(Ui,{value:X.ageCategory,onChange:z=>j("ageCategory",z.target.value),required:!0,children:[a.jsx("option",{value:"",children:"Select Age Category"}),a.jsx("option",{value:"18+",children:"18+"}),a.jsx("option",{value:"35+",children:"35+"}),a.jsx("option",{value:"50+",children:"50+"})]})]})]}),a.jsx(pa,{children:a.jsxs(Mt,{children:[a.jsx(Tt,{children:"Skill Level"}),a.jsxs(Ui,{value:X.level,onChange:z=>j("level",z.target.value),required:!0,children:[a.jsx("option",{value:"",children:"Select Skill Level"}),a.jsx("option",{value:"intermediate",children:"Intermediate"}),a.jsx("option",{value:"advanced",children:"Advanced"}),a.jsx("option",{value:"open-tier1",children:"Open - Tier 1"}),a.jsx("option",{value:"open-tier2",children:"Open - Tier 2"}),a.jsx("option",{value:"open-tier3",children:"Open - Tier 3"})]})]})})]}),a.jsxs(da,{children:[a.jsx(ua,{children:"Personal Information"}),a.jsxs(pa,{children:[a.jsxs(Mt,{children:[a.jsx(Tt,{children:"Full Name"}),a.jsx(Hi,{type:"text",value:X.fullName,onChange:z=>j("fullName",z.target.value),placeholder:"Enter your full name",required:!0})]}),a.jsxs(Mt,{children:[a.jsx(Tt,{children:"Email Address"}),a.jsx(Hi,{type:"email",value:X.email,onChange:z=>j("email",z.target.value),placeholder:"your.email@example.com",required:!0})]})]}),a.jsx(pa,{children:a.jsxs(Mt,{children:[a.jsx(Tt,{children:"Contact Number"}),a.jsx(Hi,{type:"tel",value:X.contactNumber,onChange:z=>j("contactNumber",z.target.value),placeholder:"+63 912 345 6789",required:!0})]})})]}),a.jsxs(da,{children:[a.jsx(ua,{children:"Registration Fee"}),a.jsxs(g0,{children:[a.jsx(b0,{children:"Tournament Entry Fee"}),a.jsxs(y0,{children:["₱",le.entryFee," - Registration fee is required to secure your spot in the tournament."]})]})]}),a.jsxs(da,{children:[a.jsx(ua,{children:"Payment Details"}),a.jsxs(v0,{children:[a.jsx(w0,{children:"Bank Transfer Details"}),a.jsxs(cn,{children:[a.jsx(dn,{children:"Bank Name:"}),a.jsx(un,{children:"-"})]}),a.jsxs(cn,{children:[a.jsx(dn,{children:"Account Name:"}),a.jsx(un,{children:"-"})]}),a.jsxs(cn,{children:[a.jsx(dn,{children:"Account Number:"}),a.jsx(un,{children:"-"})]}),a.jsxs(cn,{children:[a.jsx(dn,{children:"Routing Number:"}),a.jsx(un,{children:"-"})]}),a.jsxs(cn,{children:[a.jsx(dn,{children:"Reference:"}),a.jsx(un,{children:"-"})]})]}),a.jsxs(Mt,{children:[a.jsx(Tt,{children:"Proof of Payment"}),a.jsxs(j0,{children:[a.jsx("input",{type:"file",accept:"image/*,.pdf",onChange:Q,style:{display:"none"},id:"proof-upload",required:!0}),a.jsx("label",{htmlFor:"proof-upload",style:{cursor:"pointer"},children:a.jsx(k0,{children:X.proofOfPayment?`Selected: ${X.proofOfPayment.name}`:"Click to upload proof of payment (Image or PDF)"})})]})]})]}),a.jsx(S0,{type:"submit",children:"Submit Registration"})]})})]})})]})}const tu=c.div`
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
`,F3=c.div`
  margin-bottom: 40px;
`,K3=c.h1`
  font-size: 2.5rem;
  color: #234255;
  margin-bottom: 12px;
  font-weight: 800;
  letter-spacing: -0.5px;
`,I3=c.p`
  color: #64748b;
  font-size: 1.1rem;
  max-width: 600px;
  line-height: 1.6;
  margin: 0 auto;
  text-align: center;
`,e5=c.div`
  color: #64748b;
  font-size: 0.875rem;
  text-align: center;
  margin-top: 8px;
`,t5=c.div`
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
`,n5=c.div`
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
`,a5=c.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`,i5=c.select`
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
`,r5=c.input`
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
`,o5=c.div`
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
`,l5=c.button`
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
`,s5=c.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,c5=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 16px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    margin-bottom: 12px;
  }
`,d5=c.div`
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
`,u5=c.div`
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
`,p5=c.div`
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
`,f5=c.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  
  @media (max-width: 768px) {
    gap: 8px;
  }
`,h5=c.div`
  font-weight: 500;
  color: #234255;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`,m5=c.div`
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
`;c.div``;c.div`
  font-size: 0.75rem;
  color: #64748b;
  
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;const nu=c.div`
  font-weight: 500;
  color: #234255;
  display: flex;
  align-items: center;
  height: 100%;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`,x5=c.div`
  font-weight: 600;
  color: #64748b;
  display: flex;
  align-items: center;
  height: 100%;
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`,g5=c.div`
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
`,b5=c.div`
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
`,y5=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  margin-top: 12px;
`,v5=c.div`
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
`,w5=c.div`
  text-align: center;
`,j5=c.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  margin: 0 0 4px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;c.div`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
`;const k5=c.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-top: 16px;

  @media (max-width: 768px) {
    gap: 6px;
    margin-top: 12px;
  }
`,au=c.div`
  padding: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 6px;
  }
`,iu=c.div`
  font-size: ${r=>r.$large?"1.25rem":"1rem"};
  font-weight: 600;
  color: white;
  margin-bottom: 2px;
  
  @media (max-width: 768px) {
    font-size: ${r=>r.$large?"1.1rem":"0.9rem"};
  }
`,ru=c.div`
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;c.div`
  height: 4px;
  background: #e2e8f0;
  border-radius: 2px;
  margin-top: 8px;
  overflow: hidden;
`;c.div`
  height: 100%;
  background: #29ba9b;
  border-radius: 2px;
  width: ${r=>r.$percentage}%;
  transition: width 1s ease;
`;const S5=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  color: #64748b;
  font-size: 1.1rem;
`,C5=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  color: #ef4444;
  font-size: 1.1rem;
  text-align: center;
  flex-direction: column;
  gap: 16px;
`,z5=c.button`
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
`;function C0(r){return r.split(" ").map(s=>s[0]).join("").toUpperCase()}function z0(r){return new Intl.NumberFormat().format(r)}function M5(){return a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",strokeLinecap:"round",strokeLinejoin:"round"})})}function T5(){const[r,s]=v.useState([]),[u,d]=v.useState("mens-singles"),[f,m]=v.useState(!0),[b,w]=v.useState(null),[g,x]=v.useState(""),[C,D]=v.useState(""),[A,H]=v.useState(""),T=["19+","35+","50+"],U=(R,Z)=>{if(!Z)return!0;const ue=parseInt(Z.replace("+",""));return R>=ue},P=R=>{if(!R)return[];let Z=R.filter(le=>le.age>=19);return Z=Z.filter(le=>{const K=!g||le.name.toLowerCase().includes(g.toLowerCase()),X=U(le.age,A);return K&&X}),[...Z].sort((le,K)=>K.points-le.points).map((le,K)=>({...le,rank:K+1}))};v.useEffect(()=>{const R=new Date,Z={year:"numeric",month:"long",day:"numeric"};D(R.toLocaleDateString("en-US",Z)),k()},[]);const k=async()=>{var R;try{m(!0),w(null);const Z=[{id:"mens-singles",name:"MEN'S SINGLES",lastUpdated:"2024-01-20T10:00:00Z",rankings:[{id:"1",name:"Juan Dela Cruz",age:28,rank:1,points:2500,gamesPlayed:45,wins:38,losses:7,winRate:"84.4"},{id:"2",name:"Mike Santos",age:35,rank:2,points:2350,gamesPlayed:42,wins:34,losses:8,winRate:"81.0"},{id:"3",name:"Carlo Garcia",age:45,rank:3,points:2200,gamesPlayed:38,wins:30,losses:8,winRate:"78.9"},{id:"4",name:"Miguel Lopez",age:61,rank:4,points:2100,gamesPlayed:35,wins:27,losses:8,winRate:"77.1"},{id:"j1",name:"Alex Santos",age:15,rank:5,points:1800,gamesPlayed:30,wins:25,losses:5,winRate:"83.3"},{id:"j2",name:"Marco Reyes",age:13,rank:6,points:1700,gamesPlayed:28,wins:22,losses:6,winRate:"78.6"}]},{id:"womens-singles",name:"WOMEN'S SINGLES",lastUpdated:"2024-01-20T10:00:00Z",rankings:[{id:"1",name:"Maria Santos",age:28,rank:1,points:2450,gamesPlayed:43,wins:36,losses:7,winRate:"83.7"},{id:"2",name:"Ana Garcia",age:45,rank:2,points:2300,gamesPlayed:40,wins:32,losses:8,winRate:"80.0"},{id:"3",name:"Sofia Reyes",age:52,rank:3,points:2150,gamesPlayed:37,wins:29,losses:8,winRate:"78.4"},{id:"4",name:"Isabella Tan",age:71,rank:4,points:2e3,gamesPlayed:30,wins:22,losses:8,winRate:"73.3"},{id:"j1",name:"Alexandra Santos",age:15,rank:5,points:1850,gamesPlayed:32,wins:26,losses:6,winRate:"81.3"},{id:"j2",name:"Diana Garcia",age:17,rank:6,points:1750,gamesPlayed:29,wins:23,losses:6,winRate:"79.3"}]},{id:"mens-doubles",name:"MEN'S DOUBLES",lastUpdated:"2024-01-20T10:00:00Z",rankings:[{id:"1",name:"Juan Dela Cruz",age:28,rank:1,points:2600,gamesPlayed:50,wins:42,losses:8,winRate:"84.0"},{id:"2",name:"Mike Santos",age:35,rank:2,points:2400,gamesPlayed:45,wins:36,losses:9,winRate:"80.0"},{id:"3",name:"Carlo Garcia",age:45,rank:3,points:2250,gamesPlayed:40,wins:31,losses:9,winRate:"77.5"},{id:"4",name:"Miguel Lopez",age:61,rank:4,points:2150,gamesPlayed:38,wins:29,losses:9,winRate:"76.3"},{id:"j1",name:"Alex Santos",age:15,rank:5,points:1900,gamesPlayed:35,wins:27,losses:8,winRate:"77.1"}]},{id:"womens-doubles",name:"WOMEN'S DOUBLES",lastUpdated:"2024-01-20T10:00:00Z",rankings:[{id:"1",name:"Maria Santos",age:28,rank:1,points:2550,gamesPlayed:48,wins:40,losses:8,winRate:"83.3"},{id:"2",name:"Ana Garcia",age:45,rank:2,points:2350,gamesPlayed:43,wins:34,losses:9,winRate:"79.1"},{id:"3",name:"Sofia Reyes",age:52,rank:3,points:2200,gamesPlayed:40,wins:31,losses:9,winRate:"77.5"},{id:"4",name:"Isabella Tan",age:71,rank:4,points:2100,gamesPlayed:35,wins:27,losses:8,winRate:"77.1"},{id:"j1",name:"Alexandra Santos",age:15,rank:5,points:1950,gamesPlayed:32,wins:25,losses:7,winRate:"78.1"}]},{id:"mixed-doubles",name:"MIXED DOUBLES",lastUpdated:"2024-01-20T10:00:00Z",rankings:[{id:"1",name:"Juan Dela Cruz",age:28,rank:1,points:2650,gamesPlayed:52,wins:44,losses:8,winRate:"84.6"},{id:"2",name:"Maria Santos",age:28,rank:2,points:2600,gamesPlayed:50,wins:42,losses:8,winRate:"84.0"},{id:"3",name:"Mike Santos",age:35,rank:3,points:2450,gamesPlayed:47,wins:38,losses:9,winRate:"80.9"},{id:"4",name:"Ana Garcia",age:45,rank:4,points:2400,gamesPlayed:45,wins:36,losses:9,winRate:"80.0"},{id:"5",name:"Carlo Garcia",age:45,rank:5,points:2300,gamesPlayed:42,wins:33,losses:9,winRate:"78.6"},{id:"j1",name:"Alexandra Santos",age:15,rank:6,points:2e3,gamesPlayed:35,wins:27,losses:8,winRate:"77.1"}]}];s(Z),d((R=Z[0])==null?void 0:R.id)}catch{w("Failed to fetch rankings. Please try again later.")}finally{m(!1)}},B=R=>{const Z=P(R),ue=Z.slice(0,3),le=Z.slice(3);return le.length===0&&ue.length===0?a.jsx("div",{style:{textAlign:"center",padding:"40px",color:"#64748b"},children:"No players found matching your search criteria."}):le.length===0?null:a.jsxs(d5,{children:[a.jsxs(u5,{children:[a.jsx("div",{children:"Rank"}),a.jsx("div",{children:"Player"}),a.jsx("div",{children:"Age"}),a.jsx("div",{children:"Points"}),a.jsx("div",{children:"Games (W-L)"})]}),le.slice(0,47).map(K=>a.jsxs(p5,{children:[a.jsx(x5,{children:K.rank}),a.jsxs(f5,{children:[a.jsx(m5,{children:C0(K.name)}),a.jsx(h5,{children:K.name})]}),a.jsx(nu,{children:K.age}),a.jsx(nu,{children:z0(K.points)}),a.jsxs(nu,{children:[K.wins,"-",K.losses]})]},K.id))]})};if(f)return a.jsx(tu,{children:a.jsx(S5,{children:"Loading rankings..."})});if(b)return a.jsx(tu,{children:a.jsxs(C5,{children:[a.jsx("div",{children:b}),a.jsx(z5,{onClick:k,children:"Try Again"})]})});const Y=r.find(R=>R.id===u),J=(Y?P(Y.rankings):[]).slice(0,3);return a.jsxs(tu,{children:[a.jsxs(F3,{children:[a.jsx(K3,{children:"Player Rankings"}),a.jsx(I3,{children:"Track the performance and standings of pickleball players across different categories."}),a.jsxs(e5,{children:["Last Updated: ",C]}),a.jsxs(t5,{children:[a.jsxs(n5,{children:[a.jsx(M5,{}),a.jsx(r5,{type:"text",placeholder:"Search by player name...",value:g,onChange:R=>x(R.target.value)})]}),a.jsx(a5,{children:a.jsxs(i5,{value:A,onChange:R=>H(R.target.value),children:[a.jsx("option",{value:"",children:"All Ages"}),T.map(R=>a.jsx("option",{value:R,children:R},R))]})})]})]}),a.jsx(o5,{children:r.map(R=>a.jsx(l5,{$active:R.id===u,onClick:()=>d(R.id),children:R.name},R.id))}),a.jsxs(s5,{children:[a.jsx(c5,{children:J.map(R=>a.jsxs(g5,{$rank:R.rank,children:[a.jsx(b5,{children:R.rank}),a.jsxs(y5,{children:[a.jsx(v5,{children:C0(R.name)}),a.jsx(w5,{children:a.jsx(j5,{children:R.name})})]}),a.jsxs(k5,{children:[a.jsxs(au,{children:[a.jsx(iu,{children:R.age}),a.jsx(ru,{children:"Age"})]}),a.jsxs(au,{children:[a.jsx(iu,{children:z0(R.points)}),a.jsx(ru,{children:"Points"})]}),a.jsxs(au,{children:[a.jsxs(iu,{children:[R.wins,"-",R.losses]}),a.jsx(ru,{children:"Games (W-L)"})]})]})]},R.id))}),B((Y==null?void 0:Y.rankings)||[])]})]})}const ts=c.div`
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
`,ou=c.h1`
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
`,lu=c.p`
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
`,A5=c.div`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
    gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`,L5=c.div`
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
`,E5=c.input`
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
`,D5=c.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`,su=c.button`
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
`,R5=c.div`
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
`,N5=c.div`
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
`,B5=c.div`
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
`,O5=c.div`
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
`,P5=c.div`
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
`,M0=c.span`
  display: inline-flex;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 12px;
  background: ${r=>r.type==="club"?"#f0f9ff":"#f0fdf4"};
  color: ${r=>r.type==="club"?"#0369a1":"#166534"};
`,_5=c.button`
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
`,$5=c.div`
  text-align: center;
  padding: 48px 24px;
  background: white;
  border-radius: 16px;
  color: #64748b;
  font-size: 1.1rem;
  border: 2px dashed #e2e8f0;
  margin-top: 32px;
`,H5=c.div`
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
`,U5=c.div`
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
`,q5=c.div`
  padding: 16px 0;
  border-bottom: 1px solid #e2e8f0;

  @media (min-width: 768px) {
    padding: 24px 0;
  }
`,Y5=c.button`
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
`,G5=c.div`
  margin-top: 24px;
`,V5=c.div`
  margin-bottom: 32px;
`,Q5=c.div`
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
`,W5=c.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
    gap: 48px;
  }
`,Z5=c.div``,J5=c.div`
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
`,X5=c.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;

  @media (min-width: 640px) {
    align-items: center;
  }
`,F5=c.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
`,K5=c.div`
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
`,I5=c.p`
  color: #64748b;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 32px;
  max-width: 640px;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 48px;
  }
`,ns=c.div`
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 56px;
  }
`,as=c.h3`
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
`,e6=c.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #f1f5f9;
`,t6=c.div`
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
`,n6=c.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  @media (min-width: 640px) {
    gap: 10px;
    flex-wrap: nowrap;
  }
`,T0=c.button`
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
`,a6=c.div`
  position: relative;
  height: 300px;
  background: #f1f5f9;

  @media (min-width: 768px) {
    height: 350px;
  }
`,i6=c.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
`,r6=c.div`
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
`,o6=c.div`
  background: ${()=>{const r=["#f1f5f9","#e2e8f0","#cbd5e0","#f8fafc"];return r[Math.floor(Math.random()*r.length)]}};
  border-radius: 2px;
`,l6=c.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
`,s6=c.div`
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
`,c6=c.div`
  background: rgba(15, 23, 42, 0.9);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-top: 8px;
`,d6=c.div`
  background: white;
  border-radius: 12px;
  border: 1px solid #f1f5f9;
  padding: 16px;

  @media (min-width: 768px) {
    padding: 20px;
  }
`,lo=c.div`
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
`,so=c.div`
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
`,u6=c.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,p6=c.div`
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
`,f6=c.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  border-radius: 12px;
  overflow: hidden;

  @media (min-width: 640px) {
    gap: 12px;
  }
`,h6=c.div`
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
`,m6=c.div`
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
`,x6=c.div``,g6=c.div`
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
`,b6=c.button`
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
`,y6=c.p`
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.5;
  margin: 0;
  text-align: center;
  padding: 12px 16px;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #f1f5f9;
`;function v6(){return a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",strokeLinecap:"round",strokeLinejoin:"round"})})}const w6=()=>{const{isAuthenticated:r}=bn(),[s,u]=v.useState([]),[d,f]=v.useState(!0),[m,b]=v.useState(null),[w,g]=v.useState(""),[x,C]=v.useState("all"),[D,A]=v.useState(new Set),[H,T]=v.useState(new Set),[U,P]=v.useState(!1),[k,B]=v.useState(null),[Y,F]=v.useState(!1);v.useEffect(()=>{J()},[]);const J=async()=>{try{f(!0),b(null),u([{id:"1",name:"Manila Pickleball Club",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",address:"BGC, Taguig City",hours:"6:00 AM - 10:00 PM",type:"club_and_courts",members:120,createdAt:"2025-06-16T08:00:00Z",updatedAt:"2025-06-16T08:00:00Z",ownerId:"user123",contactEmail:"info@manilapickleball.com",contactPhone:"+63 912 345 6789",website:"https://manilapickleball.com",amenities:["Pro Shop","Locker Rooms","Parking"],images:[],photos:[{url:"https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&h=600&fit=crop",caption:"Main court area"},{url:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",caption:"Professional courts"},{url:"https://images.unsplash.com/photo-1526676037777-05a232c2b57c?w=800&h=600&fit=crop",caption:"Club facilities"},{url:"https://images.unsplash.com/photo-1577924111230-7f5ed91b08b8?w=800&h=600&fit=crop",caption:"Equipment storage"},{url:"https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&h=600&fit=crop",caption:"Locker rooms"},{url:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",caption:"Outdoor courts"}],isVerified:!0},{id:"2",name:"BGC Pickleball Center",description:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",address:"Bonifacio Global City, Taguig",hours:"7:00 AM - 11:00 PM",type:"club_and_courts",members:85,createdAt:"2025-06-15T10:00:00Z",updatedAt:"2025-06-15T10:00:00Z",ownerId:"user456",contactEmail:"info@bgcpickleball.com",contactPhone:"+63 917 123 4567",amenities:["Air Conditioning","Equipment Rental"],images:[],photos:[{url:"https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",caption:"Indoor courts"},{url:"https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&h=600&fit=crop",caption:"Court facilities"},{url:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",caption:"Tournament setup"}],isVerified:!0},{id:"3",name:"QC Pickleball Community",description:"Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",address:"Katipunan Avenue, Quezon City",type:"club",members:45,createdAt:"2025-06-14T09:00:00Z",updatedAt:"2025-06-14T09:00:00Z",ownerId:"user789",contactEmail:"qcpickleball@gmail.com",contactPhone:"+63 918 765 4321",images:[],photos:[{url:"https://images.unsplash.com/photo-1577924111230-7f5ed91b08b8?w=800&h=600&fit=crop",caption:"Community courts"}],isVerified:!0}])}catch(K){b(K.message||"Failed to fetch venues")}finally{f(!1)}},R=v.useMemo(()=>{let K=s;if(w){const X=w.toLowerCase();K=K.filter(se=>se.name.toLowerCase().includes(X)||se.address.toLowerCase().includes(X))}return x!=="all"&&(K=K.filter(X=>x==="clubs"?X.type==="club":x==="courts"?X.type==="club_and_courts":!0)),K},[s,w,x]),Z=async(K,X)=>{if(K.stopPropagation(),!r){P(!0);return}try{T(se=>new Set([...se,X])),console.log(`Join request submitted for venue ${X}`)}catch(se){console.error("Failed to join venue:",se),T(me=>{const Be=new Set(me);return Be.delete(X),Be})}},ue=K=>{B(K),F(!0)},le=()=>{F(!1),B(null)};return d?a.jsxs(ts,{children:[a.jsx(ou,{children:"Clubs & Courts"}),a.jsx(lu,{children:"Discover pickleball venues and communities across the Philippines."}),a.jsx(H5,{children:"Loading venues..."})]}):m?a.jsxs(ts,{children:[a.jsx(ou,{children:"Clubs & Courts"}),a.jsx(lu,{children:"Discover pickleball venues and communities across the Philippines."}),a.jsx(U5,{children:m})]}):Y&&k?a.jsxs(ts,{children:[a.jsx(q5,{children:a.jsxs(Y5,{onClick:le,children:[a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7",strokeLinecap:"round",strokeLinejoin:"round"})}),"Back to Clubs & Courts"]})}),a.jsxs(G5,{children:[a.jsx(V5,{children:a.jsx(Q5,{$imageIndex:s.findIndex(K=>K.id===k.id)%3})}),a.jsxs(W5,{children:[a.jsxs(Z5,{children:[a.jsxs(J5,{children:[a.jsxs(X5,{children:[a.jsx("h1",{children:k.name}),k.isVerified&&a.jsxs(K5,{children:[a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M9 12l2 2 4-4",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.745 3.745 0 0 1 3.296-1.043A3.745 3.745 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12z"})]}),"Verified"]})]}),a.jsx(F5,{children:a.jsx(M0,{type:k.type==="club"?"club":"courts",children:k.type==="club"?"Club":"Club & Courts"})})]}),a.jsx(I5,{children:k.description}),a.jsxs(ns,{children:[a.jsxs(as,{children:[a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),a.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"Location & Map"]}),a.jsxs(e6,{children:[a.jsxs(t6,{children:[a.jsx("h4",{children:k.address}),a.jsx("p",{children:"Get directions to this venue and explore the surrounding area"}),a.jsxs(n6,{children:[a.jsxs(T0,{$primary:!0,children:[a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"}),a.jsx("path",{d:"M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"})]}),"Get Directions"]}),a.jsxs(T0,{children:[a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),a.jsx("polyline",{points:"15,3 21,3 21,9"}),a.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),"Share Location"]})]})]}),a.jsx(a6,{children:a.jsxs(i6,{children:[a.jsxs(l6,{children:[a.jsx(s6,{children:a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),a.jsx("circle",{cx:"12",cy:"10",r:"3"})]})}),a.jsx(c6,{children:k.name})]}),a.jsx(r6,{children:Array.from({length:35},(K,X)=>a.jsx(o6,{},X))})]})})]})]}),a.jsxs(ns,{children:[a.jsxs(as,{children:[a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),a.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),a.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),a.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),"Venue Information"]}),a.jsxs(d6,{children:[k.type==="club_and_courts"&&a.jsxs(lo,{children:[a.jsx(so,{children:a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10"}),a.jsx("polyline",{points:"12,6 12,12 16,14"})]})}),a.jsxs("div",{children:[a.jsx("span",{children:"Operating Hours"}),a.jsx("p",{children:k.hours})]})]}),a.jsxs(lo,{children:[a.jsx(so,{children:a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),a.jsx("circle",{cx:"9",cy:"7",r:"4"}),a.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),a.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}),a.jsxs("div",{children:[a.jsx("span",{children:"Community Size"}),a.jsxs("p",{children:[k.members," Active Members"]})]})]}),k.contactEmail&&a.jsxs(lo,{children:[a.jsx(so,{children:a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),a.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),a.jsxs("div",{children:[a.jsx("span",{children:"Email Contact"}),a.jsx("p",{children:k.contactEmail})]})]}),k.contactPhone&&a.jsxs(lo,{children:[a.jsx(so,{children:a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})})}),a.jsxs("div",{children:[a.jsx("span",{children:"Phone Contact"}),a.jsx("p",{children:k.contactPhone})]})]}),k.website&&a.jsxs(lo,{children:[a.jsx(so,{children:a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10"}),a.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),a.jsx("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]})}),a.jsxs("div",{children:[a.jsx("span",{children:"Website"}),a.jsx("p",{children:k.website})]})]})]})]}),k.amenities&&k.amenities.length>0&&a.jsxs(ns,{children:[a.jsxs(as,{children:[a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})}),"Amenities & Features"]}),a.jsx(u6,{children:k.amenities.map((K,X)=>a.jsxs(p6,{children:[a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M20 6L9 17l-5-5",strokeLinecap:"round",strokeLinejoin:"round"})}),K]},X))})]}),k.photos&&k.photos.length>0&&a.jsxs(ns,{children:[a.jsxs(as,{children:[a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),a.jsx("circle",{cx:"9",cy:"9",r:"2"}),a.jsx("path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"})]}),"Photo Gallery"]}),a.jsx(f6,{children:k.photos.slice(0,6).map((K,X)=>a.jsxs(h6,{$index:X,$total:Math.min(k.photos.length,6),children:[a.jsx("img",{src:K.url,alt:K.caption||`Venue photo ${X+1}`}),X===5&&k.photos.length>6&&a.jsxs(m6,{children:["+",k.photos.length-6]})]},X))})]})]}),a.jsx(x6,{children:a.jsxs(g6,{children:[a.jsx(b6,{onClick:K=>Z(K,k.id),disabled:D.has(k.id)||H.has(k.id),$isPending:H.has(k.id),children:D.has(k.id)?"Joined":H.has(k.id)?"Pending Approval":"Join Now"}),a.jsx(y6,{children:D.has(k.id)?"You are a member of this venue":H.has(k.id)?"Your join request is pending approval from the venue administrators":"Join this venue to access exclusive features and connect with the community"})]})})]})]}),U&&a.jsx(yo,{isOpen:U,onClose:()=>P(!1),title:"Join the Club!",message:"Sign in or register to join clubs and access courts"})]}):a.jsxs(ts,{children:[a.jsx(ou,{children:"Clubs & Courts"}),a.jsx(lu,{children:"Discover pickleball venues and communities across the Philippines."}),a.jsxs(A5,{children:[a.jsxs(L5,{children:[a.jsx(v6,{}),a.jsx(E5,{type:"text",placeholder:"Search by name or location...",value:w,onChange:K=>g(K.target.value)})]}),a.jsxs(D5,{children:[a.jsx(su,{$active:x==="all",onClick:()=>C("all"),children:"All"}),a.jsx(su,{$active:x==="clubs",onClick:()=>C("clubs"),children:"Clubs Only"}),a.jsx(su,{$active:x==="courts",onClick:()=>C("courts"),children:"With Courts"})]})]}),R.length===0?a.jsx($5,{children:"No venues found matching your criteria"}):a.jsx(R5,{children:R.map((K,X)=>a.jsxs(N5,{onClick:()=>ue(K),children:[a.jsx(B5,{$imageIndex:X%3}),a.jsxs(O5,{children:[a.jsx("h3",{children:K.name}),a.jsx("div",{children:a.jsx(M0,{type:K.type==="club"?"club":"courts",children:K.type==="club"?"Club":"Club & Courts"})}),a.jsx("p",{children:K.description}),a.jsxs(P5,{children:[a.jsxs("div",{children:[a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),a.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),K.address]}),K.type==="club_and_courts"&&a.jsxs("div",{children:[a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),a.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),a.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),a.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),K.hours]}),a.jsxs("div",{children:[a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),a.jsx("circle",{cx:"9",cy:"7",r:"4"}),a.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),a.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),K.members," Members"]})]}),a.jsx(_5,{onClick:se=>Z(se,K.id),disabled:D.has(K.id)||H.has(K.id),$isPending:H.has(K.id),children:D.has(K.id)?"Joined":H.has(K.id)?"Pending Approval":"Join Now"})]})]},K.id))}),U&&a.jsx(yo,{isOpen:U,onClose:()=>P(!1),title:"Join the Club!",message:"Sign in or register to join clubs and access courts"})]})},P1="/my-pickleball-app/assets/vite-Dq28Z1Xn.svg",j6=c.div`
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
`,k6=c.div`
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
`,S6=c.div`
  text-align: center;
  margin-bottom: 32px;
`,C6=c.div`
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
`,z6=c.h1`
  color: #234255;
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 8px;
  text-align: center;
`,M6=c.p`
  color: #64748b;
  font-size: 15px;
  margin: 0 0 32px;
  text-align: center;
`,T6=c.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,A0=c.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,L0=c.label`
  color: #475569;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,A6=c.div`
  position: relative;
`,E0=c.input`
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
`,L6=c.button`
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
`,E6=c.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: -8px;
`,D6=c.input`
  width: 16px;
  height: 16px;
  accent-color: #29ba9b;
`,R6=c.label`
  color: #475569;
  font-size: 14px;
  cursor: pointer;
`,N6=c.a`
  color: #29ba9b;
  font-size: 14px;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`,B6=c.button`
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
`,O6=c.div`
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
`,P6=c.div`
  display: flex;
  gap: 16px;
`,_6=c.button`
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
`,cu=c.div`
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
`,$6=c.p`
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
`,H6=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),a.jsx("path",{d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}),U6=()=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"})}),du=()=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),q6=()=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"})}),Y6=()=>{const r=Wa(),[s,u]=v.useState({email:"",password:""}),[d,f]=v.useState(!1),[m,b]=v.useState(!1),[w,g]=v.useState({}),[x,C]=v.useState(!1),D=B=>{var J;const Y=["gmail.com","yahoo.com","hotmail.com","outlook.com","icloud.com","protonmail.com","zoho.com","aol.com","live.com","msn.com"],F=(J=B.split("@")[1])==null?void 0:J.toLowerCase();return Y.includes(F)},A=()=>{const B={};return s.email?/\S+@\S+\.\S+/.test(s.email)?D(s.email)||(B.email="Please use a valid email provider (Gmail, Yahoo, Outlook, etc.)"):B.email="Please enter a valid email":B.email="Email is required",s.password?s.password.length<6&&(B.password="Password must be at least 6 characters"):B.password="Password is required",g(B),Object.keys(B).length===0},H=B=>{const{name:Y,value:F}=B.target;u(J=>({...J,[Y]:F})),w[Y]&&g(J=>({...J,[Y]:""}))},{login:T,loginWithCredentials:U}=bn(),P=async B=>{if(B.preventDefault(),!!A()){C(!0);try{const Y=await fetch("http://localhost:5000/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s.email,password:s.password})}),F=await Y.json();if(!Y.ok)throw new Error(F.message||"Login failed");const J=m?localStorage:sessionStorage;J.setItem("token",F.token),J.setItem("user",JSON.stringify(F.user)),T(F.user,F.token),r("/")}catch{console.log("Backend not available, trying dummy authentication...");const F=U(s.email,s.password);F.success?r("/"):g(J=>({...J,submit:F.error||"Invalid credentials. Try: john.doe@gmail.com / password123"}))}finally{C(!1)}}},k=async B=>{try{console.log(`Signing in with ${B}`)}catch{g(F=>({...F,submit:`Failed to sign in with ${B}. Please try again.`}))}};return a.jsx(j6,{children:a.jsxs(k6,{children:[a.jsxs(S6,{children:[a.jsx(C6,{children:a.jsx("img",{src:P1,alt:"Vite Logo"})}),a.jsx(z6,{children:"Welcome Back"}),a.jsx(M6,{children:"Sign in to Philippine Pickleball League"})]}),a.jsxs(T6,{onSubmit:P,children:[a.jsxs(A0,{children:[a.jsx(L0,{htmlFor:"email",children:"Email"}),a.jsx(E0,{type:"email",id:"email",name:"email",placeholder:"Enter your email",value:s.email,onChange:H,required:!0,autoComplete:"email",$hasError:!!w.email}),w.email&&a.jsxs(cu,{children:[a.jsx(du,{}),w.email]})]}),a.jsxs(A0,{children:[a.jsxs(L0,{htmlFor:"password",children:["Password",a.jsx(N6,{href:"/forgot-password",children:"Forgot password?"})]}),a.jsxs(A6,{children:[a.jsx(E0,{type:d?"text":"password",id:"password",name:"password",placeholder:"Enter your password",value:s.password,onChange:H,required:!0,autoComplete:"current-password",$hasError:!!w.password,$hasPassword:!0}),a.jsx(L6,{type:"button",onClick:()=>f(!d),"aria-label":d?"Hide password":"Show password",children:d?a.jsx(U6,{}):a.jsx(H6,{})})]}),w.password&&a.jsxs(cu,{children:[a.jsx(du,{}),w.password]})]}),a.jsxs(E6,{children:[a.jsx(D6,{type:"checkbox",id:"rememberMe",checked:m,onChange:B=>b(B.target.checked)}),a.jsx(R6,{htmlFor:"rememberMe",children:"Remember me"})]}),a.jsx(B6,{type:"submit",disabled:x,$loading:x,children:x?"Signing in...":"Sign in"}),w.submit&&a.jsxs(cu,{children:[a.jsx(du,{}),w.submit]})]}),a.jsx(O6,{children:a.jsx("span",{children:"or continue with"})}),a.jsx(P6,{children:a.jsxs(_6,{onClick:()=>k("Google"),children:[a.jsx(q6,{}),"Google"]})}),a.jsxs($6,{children:["Don't have an account?",a.jsx("a",{href:"/register",children:"Create one"})]})]})})},G6=c.div`
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
`,V6=c.div`
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
`,Q6=c.div`
  text-align: center;
  margin-bottom: 32px;
`,W6=c.div`
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
`,Z6=c.h1`
  color: #234255;
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 8px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
    margin: 0 0 6px;
  }
`,J6=c.p`
  color: #64748b;
  font-size: 15px;
  margin: 0 0 32px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
    margin: 0 0 24px;
  }
`,X6=c.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`,Ha=c.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ua=c.label`
  color: #475569;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,D0=c.div`
  position: relative;
`,qi=c.input`
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
`,F6=c.select`
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
`,R0=c.button`
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
`,K6=c.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 4px;
`,co=c.span`
  color: ${r=>r.$met?"#10b981":"#94a3b8"};
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    width: 14px;
    height: 14px;
  }
`,I6=c.button`
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
`,fa=c.div`
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
`,ew=c.p`
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
`,tw=c.div`
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
`,nw=c.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`,aw=c.button`
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
`,N0=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),a.jsx("path",{d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}),B0=()=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"})}),uo=()=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M5 13l4 4L19 7"})}),ha=()=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),iw=()=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"})}),rw=()=>{const r=Wa(),[s,u]=v.useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:"",birthDate:"",gender:""}),[d,f]=v.useState(!1),[m,b]=v.useState(!1),[w,g]=v.useState({}),[x,C]=v.useState(!1),D={length:s.password.length>=8,uppercase:/[A-Z]/.test(s.password),lowercase:/[a-z]/.test(s.password),number:/[0-9]/.test(s.password),special:/[!@#$%^&*]/.test(s.password)},A=B=>{var J;const Y=["gmail.com","yahoo.com","hotmail.com","outlook.com","icloud.com","protonmail.com","zoho.com","aol.com","live.com","msn.com"],F=(J=B.split("@")[1])==null?void 0:J.toLowerCase();return Y.includes(F)},H=()=>{const B={};return s.firstName.trim()||(B.firstName="First name is required"),s.lastName.trim()||(B.lastName="Last name is required"),s.email?/\S+@\S+\.\S+/.test(s.email)?A(s.email)||(B.email="Please use a valid email provider (Gmail, Yahoo, Outlook, etc.)"):B.email="Please enter a valid email":B.email="Email is required",s.password?Object.values(D).every(Boolean)||(B.password="Password does not meet requirements"):B.password="Password is required",s.confirmPassword?s.password!==s.confirmPassword&&(B.confirmPassword="Passwords do not match"):B.confirmPassword="Please confirm your password",s.birthDate?new Date().getFullYear()-new Date(s.birthDate).getFullYear()<13&&(B.birthDate="You must be at least 13 years old"):B.birthDate="Birth date is required",s.gender||(B.gender="Gender is required"),g(B),Object.keys(B).length===0},T=B=>{const{name:Y,value:F}=B.target;u(J=>({...J,[Y]:F})),w[Y]&&g(J=>({...J,[Y]:""}))},{login:U}=bn(),P=async B=>{if(B.preventDefault(),!!H()){C(!0);try{const Y=await fetch("http://localhost:5000/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:s.firstName,lastName:s.lastName,email:s.email,password:s.password,birthDate:s.birthDate,gender:s.gender})}),F=await Y.json();if(!Y.ok)throw new Error(F.message||"Registration failed");localStorage.setItem("token",F.token),localStorage.setItem("user",JSON.stringify(F.user)),U(F.user,F.token),r("/")}catch(Y){g(F=>({...F,submit:Y.message}))}finally{C(!1)}}},k=async B=>{try{console.log(`Signing up with ${B}`)}catch{g(F=>({...F,submit:`Failed to sign up with ${B}. Please try again.`}))}};return a.jsx(G6,{children:a.jsxs(V6,{children:[a.jsxs(Q6,{children:[a.jsx(W6,{children:a.jsx("img",{src:P1,alt:"Vite Logo"})}),a.jsx(Z6,{children:"Create Account"}),a.jsx(J6,{children:"Join the Philippine Pickleball League"})]}),a.jsxs(X6,{onSubmit:P,children:[a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:"16px"},children:[a.jsxs(Ha,{children:[a.jsx(Ua,{htmlFor:"firstName",children:"First Name"}),a.jsx(qi,{type:"text",id:"firstName",name:"firstName",placeholder:"Enter first name",value:s.firstName,onChange:T,required:!0,$hasError:!!w.firstName}),w.firstName&&a.jsxs(fa,{children:[a.jsx(ha,{}),w.firstName]})]}),a.jsxs(Ha,{children:[a.jsx(Ua,{htmlFor:"lastName",children:"Last Name"}),a.jsx(qi,{type:"text",id:"lastName",name:"lastName",placeholder:"Enter last name",value:s.lastName,onChange:T,required:!0,$hasError:!!w.lastName}),w.lastName&&a.jsxs(fa,{children:[a.jsx(ha,{}),w.lastName]})]})]}),a.jsxs(Ha,{children:[a.jsx(Ua,{htmlFor:"email",children:"Email"}),a.jsx(qi,{type:"email",id:"email",name:"email",placeholder:"Enter your email",value:s.email,onChange:T,required:!0,autoComplete:"email",$hasError:!!w.email}),w.email&&a.jsxs(fa,{children:[a.jsx(ha,{}),w.email]})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:"16px"},children:[a.jsxs(Ha,{children:[a.jsx(Ua,{htmlFor:"birthDate",children:"Birth Date"}),a.jsx(qi,{type:"date",id:"birthDate",name:"birthDate",value:s.birthDate,onChange:T,required:!0,$hasError:!!w.birthDate,placeholder:"Select your birth date"}),w.birthDate&&a.jsxs(fa,{children:[a.jsx(ha,{}),w.birthDate]})]}),a.jsxs(Ha,{children:[a.jsx(Ua,{htmlFor:"gender",children:"Gender"}),a.jsxs(F6,{id:"gender",name:"gender",value:s.gender,onChange:T,required:!0,$hasError:!!w.gender,children:[a.jsx("option",{value:"",children:"Select your gender"}),a.jsx("option",{value:"male",children:"Male"}),a.jsx("option",{value:"female",children:"Female"})]}),w.gender&&a.jsxs(fa,{children:[a.jsx(ha,{}),w.gender]})]})]}),a.jsxs(Ha,{children:[a.jsx(Ua,{htmlFor:"password",children:"Password"}),a.jsxs(D0,{children:[a.jsx(qi,{type:d?"text":"password",id:"password",name:"password",placeholder:"Create a password",value:s.password,onChange:T,required:!0,$hasError:!!w.password,$hasPassword:!0}),a.jsx(R0,{type:"button",onClick:()=>f(!d),"aria-label":d?"Hide password":"Show password",children:d?a.jsx(B0,{}):a.jsx(N0,{})})]}),a.jsxs(K6,{children:[a.jsxs(co,{$met:D.length,children:[D.length?a.jsx(uo,{}):"•"," At least 8 characters"]}),a.jsxs(co,{$met:D.uppercase,children:[D.uppercase?a.jsx(uo,{}):"•"," One uppercase letter"]}),a.jsxs(co,{$met:D.lowercase,children:[D.lowercase?a.jsx(uo,{}):"•"," One lowercase letter"]}),a.jsxs(co,{$met:D.number,children:[D.number?a.jsx(uo,{}):"•"," One number"]}),a.jsxs(co,{$met:D.special,children:[D.special?a.jsx(uo,{}):"•"," One special character"]})]}),w.password&&a.jsxs(fa,{children:[a.jsx(ha,{}),w.password]})]}),a.jsxs(Ha,{children:[a.jsx(Ua,{htmlFor:"confirmPassword",children:"Confirm Password"}),a.jsxs(D0,{children:[a.jsx(qi,{type:m?"text":"password",id:"confirmPassword",name:"confirmPassword",placeholder:"Confirm your password",value:s.confirmPassword,onChange:T,required:!0,$hasError:!!w.confirmPassword,$hasPassword:!0}),a.jsx(R0,{type:"button",onClick:()=>b(!m),"aria-label":m?"Hide password":"Show password",children:m?a.jsx(B0,{}):a.jsx(N0,{})})]}),w.confirmPassword&&a.jsxs(fa,{children:[a.jsx(ha,{}),w.confirmPassword]})]}),a.jsx(I6,{type:"submit",disabled:x,$loading:x,children:x?"Creating account...":"Create account"}),w.submit&&a.jsxs(fa,{children:[a.jsx(ha,{}),w.submit]})]}),a.jsx(tw,{children:a.jsx("span",{children:"or sign up with"})}),a.jsx(nw,{children:a.jsxs(aw,{onClick:()=>k("Google"),children:[a.jsx(iw,{}),"Google"]})}),a.jsxs(ew,{children:["Already have an account?",a.jsx("a",{href:"/signin",children:"Sign in"})]})]})})},uu=c.div`
  min-height: calc(100vh - 140px);
  padding: 50px 20px 40px 20px;
  max-width: 1100px;
  margin: 0 auto;
  background: #ffffff;
`;c.div`
  // Keeping the component definition for potential future use
  margin-bottom: 40px;
`;c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
`;const ow=c.div`
  position: relative;
`,lw=c.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #29ba9b;
`,sw=c.button`
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
`;c.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;const cw=c.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: #475569;
  margin: 0;
  letter-spacing: -0.2px;
`;c.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`;c.div`
  font-size: 0.9rem;
  color: #6b7280;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;c.div`
  width: 100%;
  border: 1px solid #e9ecef;
  padding: 16px;
`;c.h3`
  font-size: 1.1rem;
  font-weight: 500;
  color: #234255;
  margin: 0 0 16px 0;
  text-align: center;
`;c.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;c.div`
  border: 1px solid #e9ecef;
  padding: 12px;
  text-align: center;
`;c.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #29ba9b;
  margin-bottom: 4px;
`;c.div`
  font-size: 0.9rem;
  color: #6b7280;
`;c.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f0f0f0;
`;c.h2`
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
`;c.div`
  width: 100%;
  margin-top: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
`;c.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #f8f9fa;
  padding: 14px 20px;
  font-weight: 600;
  color: #234255;
  border-bottom: 1px solid #e5e7eb;
  font-size: 0.85rem;
`;c.div`
  background: white;
`;c.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 12px 16px;
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
  }
`;c.div`
  font-size: 0.9rem;
  color: #6b7280;
  display: flex;
  align-items: center;
  
  &:nth-child(2) {
    font-weight: 600;
    color: #29ba9b;
  }
`;const dw=c.button`
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
  
  &:hover {
    background: #f0fffe;
    color: #249e85;
  }
  
  &:before {
    content: '✏️';
    margin-right: 6px;
    font-size: 0.9rem;
  }
`,uw=c.input`
  display: none;
`,pw=c.div`
  margin-top: -70px;
  width: 100%;
  padding: 30px;
`,fw=c.div`
  display: flex;
  margin-bottom: 30px;
  justify-content: space-between;
  padding: 15px 0;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  position: relative;
  gap: 20px;
`,pu=c.button`
  flex: 1;
  padding: 10px 20px;
  background: transparent;
  color: ${r=>r.active?"#29ba9b":"#234255"};
  border: none;
  border-bottom: 3px solid ${r=>r.active?"#29ba9b":"transparent"};
  border-left: ${r=>r.active?"1px solid #e5e7eb":"none"};
  border-right: ${r=>r.active?"1px solid #e5e7eb":"none"};
  font-weight: ${r=>r.active?"600":"500"};
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: -1px;
  transition: all 0.2s ease;
  text-align: center;
  position: relative;
  
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
  
  &:hover {
    color: ${r=>r.active?"#29ba9b":"#1a2e3a"};
  }
`,is=c.div`
  padding: 20px 0;
  min-height: 250px;
`,hw=c.div`
  margin-bottom: 30px;
  padding-bottom: 20px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,mw=c.h3`
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
`,xw=c.p`
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 15px;
  font-size: 0.95rem;
  text-align: left;
  
  strong {
    color: #234255;
    font-weight: 600;
  }
`;c.div`
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #f9fafb;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }
`;c.h4`
  font-size: 1.2rem;
  color: #234255;
  margin-bottom: 15px;
  font-weight: 600;
`;c.div`
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
`;c.div`
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
`;c.div`
  flex: 1;
`;c.h4`
  font-size: 1.2rem;
  color: #234255;
  margin-bottom: 12px;
  font-weight: 600;
`;c.div`
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
`;c.div`
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
`;c.div`
  padding: 3px 8px;
  border-radius: 2px;
  font-size: 0.75rem;
  font-weight: 400;
  background: ${r=>{switch(r.status){case"upcoming":return"#f3f4f6";case"active":return"#ecfdf5";case"completed":return"#eff6ff";default:return"#f3f4f6"}}};
  color: ${r=>{switch(r.status){case"upcoming":return"#4b5563";case"active":return"#047857";case"completed":return"#2563eb";default:return"#4b5563"}}};
  display: inline-block;
  text-align: center;
  min-width: 70px;
`;const gw=c.div`
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
`,bw=c.div`
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
`,yw=c.div`
  height: 160px;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${r=>{switch(r.$imageIndex){case 0:return'url("https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1170&auto=format&fit=crop")';case 1:return'url("https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1170&auto=format&fit=crop")';case 2:return'url("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1170&auto=format&fit=crop")';default:return'url("https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1170&auto=format&fit=crop")'}}};

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
`,vw=c.div`
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
`,ww=c.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.875rem;
  color: #64748b;
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
`,jw=c.div`
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
`,kw=c.div`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 500;
  backdrop-filter: blur(4px);
  background: ${r=>{switch(r.status){case"upcoming":return"rgba(59, 130, 246, 0.9)";case"active":return"rgba(34, 197, 94, 0.9)";case"completed":return"rgba(107, 114, 128, 0.9)";default:return"rgba(107, 114, 128, 0.9)"}}};
  color: white;
`,Sw=c.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`,Cw=c.div`
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
`,zw=c.input`
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
`,Mw=c.button`
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
`,Tw=c.div`
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
`,Aw=c.div`
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
`,Lw=c.div`
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
`,Ew=c.div`
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
`,Dw=c.div`
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
`;c.span`
  display: inline-flex;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 12px;
  background: ${r=>r.type==="club"?"#f0f9ff":"#f0fdf4"};
  color: ${r=>r.type==="club"?"#0369a1":"#166534"};
`;c.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;c.span`
  padding: 2px 8px;
  background: #f1f5f9;
  color: #475569;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
`;c.div`
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
`;const Rw=c.div`
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
`,Nw=c.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`,Bw=c.div`
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
`,Ow=c.input`
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
`,Pw=c.button`
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
`,_w=()=>{const{user:r,showNotification:s}=bn(),u=Wa(),d=v.useRef(null),[f,m]=v.useState("about"),[b,w]=v.useState(!0),[g,x]=v.useState(!1),[C,D]=v.useState("I've been playing pickleball for 3 years and love the sport! Looking to improve my game and meet new players."),[A,H]=v.useState(""),[T,U]=v.useState("");v.useEffect(()=>{const ge=setTimeout(()=>{w(!1)},800);return()=>clearTimeout(ge)},[]);const P=()=>{var ge;(ge=d.current)==null||ge.click()},k=ge=>{ge.target.files[0]&&s("Profile picture updated!","success")},B=()=>{s("Edit functionality coming soon!","info")},Y=()=>{x(!0)},F=()=>{x(!1),s("Bio updated successfully!","success")},J=()=>{D("I've been playing pickleball for 3 years and love the sport! Looking to improve my game and meet new players."),x(!1)},R=()=>{s("Create Club functionality coming soon!","info")},Z=()=>{u("/host-tournament")},ue=()=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",strokeLinecap:"round",strokeLinejoin:"round"})}),le=()=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M12 5v14m-7-7h14",strokeLinecap:"round",strokeLinejoin:"round"})}),K=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M4 22h16",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M10 14.66V17c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.34",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M18 9c0 4.97-4.03 9-9 9s-9-4.03-9-9V6h18v3Z",strokeLinecap:"round",strokeLinejoin:"round"})]}),X=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("circle",{cx:"12",cy:"10",r:"3",strokeLinecap:"round",strokeLinejoin:"round"})]}),se=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10",strokeLinecap:"round",strokeLinejoin:"round"})]}),me=28,Be="PPL-001234",Ae=[{category:"Singles",rank:"4"},{category:"Doubles",rank:"5"},{category:"Mixed",rank:"4"}],$=[{type:"Singles",rating:"5.502"},{type:"Doubles",rating:"5.952"}];if(!r)return a.jsx(uu,{children:a.jsxs("div",{style:{textAlign:"center",padding:"60px 20px"},children:[a.jsx("h2",{style:{color:"#234255",marginBottom:"16px",fontSize:"1.3rem",fontWeight:"500"},children:"Sign in to view your profile"}),a.jsx("p",{style:{color:"#6b7280",marginBottom:"20px",fontSize:"0.9rem"},children:"You need to be logged in to access your profile information."}),a.jsx("button",{style:{background:"#29ba9b",color:"white",border:"none",padding:"8px 16px",borderRadius:"4px",fontSize:"0.9rem",fontWeight:"500",cursor:"pointer"},onClick:()=>window.location.href="/signin",children:"Sign In"})]})});if(b)return a.jsx(uu,{children:a.jsxs("div",{style:{textAlign:"center",padding:"60px 20px"},children:[a.jsx("div",{style:{display:"inline-block",width:"30px",height:"30px",border:"2px solid #f3f3f3",borderTop:"2px solid #29ba9b",borderRadius:"50%",animation:"spin 1s linear infinite",marginBottom:"16px"}}),a.jsx("style",{children:`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}),a.jsx("p",{style:{color:"#6b7280",fontSize:"0.9rem"},children:"Loading profile..."})]})});const I={bio:C},de=[{id:1,name:"Riverside Pickleball Club",location:"123 Main St, Riverside, CA",memberSince:"January 2022",userPlacement:"Active Member",categories:["Singles","Doubles","Mixed"],type:"club",imageIndex:0,description:"Premier pickleball club with professional coaching and competitive leagues."},{id:2,name:"Downtown Recreation Center",location:"456 Oak Ave, Riverside, CA",memberSince:"March 2023",userPlacement:"Casual Player",categories:["Recreational","Doubles"],type:"club_and_courts",imageIndex:1,description:"Community recreation center offering casual play and beginner-friendly programs."},{id:3,name:"Elite Pickleball Academy",location:"789 Sports Blvd, Riverside, CA",memberSince:"June 2023",userPlacement:"Tournament Player",categories:["Singles","Doubles","Mixed","Tournament"],type:"club",imageIndex:2,description:"High-performance training facility for competitive players and tournaments."}],be=[{name:"Summer Smash Tournament",date:"July 15-16, 2023",location:"Riverside Courts",status:"completed",result:"Quarter-finalist (Mixed Doubles)",imageIndex:0},{name:"Fall Classic Open",date:"October 8-9, 2023",location:"Central Park Courts",status:"completed",result:"Semi-finalist (Men's Doubles)",imageIndex:1},{name:"Spring Championship",date:"April 22-23, 2024",location:"Lakeside Recreation Center",status:"upcoming",imageIndex:2}],j=()=>{switch(f){case"about":return a.jsx(is,{children:a.jsxs(hw,{children:[a.jsx(mw,{children:"Bio"}),a.jsxs(_t,{children:[!g&&a.jsx(et,{onClick:Y,children:"✏️ Edit"}),g?a.jsxs(a.Fragment,{children:[a.jsx($t,{value:C,onChange:ge=>D(ge.target.value),placeholder:"Tell us about yourself, your pickleball journey, goals, or anything you'd like other players to know...",autoFocus:!0}),a.jsxs(ga,{children:[a.jsx(Za,{onClick:J,children:"Cancel"}),a.jsx(Za,{variant:"save",onClick:F,children:"Save"})]})]}):a.jsx(xw,{children:I.bio||"Click 'Edit' to add your bio..."})]})]})});case"club":return a.jsxs(is,{children:[a.jsxs(Sw,{children:[a.jsxs(Cw,{children:[a.jsx(ue,{}),a.jsx(zw,{type:"text",placeholder:"Search clubs by name or location...",value:A,onChange:ge=>H(ge.target.value)})]}),a.jsxs(Mw,{onClick:R,children:[a.jsx(le,{}),"Create Club"]})]}),a.jsx(Tw,{children:de.filter(ge=>ge.name.toLowerCase().includes(A.toLowerCase())||ge.location.toLowerCase().includes(A.toLowerCase())).map(ge=>a.jsxs(Aw,{children:[a.jsx(Lw,{$imageIndex:ge.imageIndex}),a.jsxs(Ew,{children:[a.jsx("h3",{children:ge.name}),a.jsx(Dw,{children:a.jsxs("div",{children:[a.jsx(X,{}),ge.location]})}),a.jsxs(Rw,{children:[a.jsx(se,{}),"Joined ",ge.memberSince]})]})]},ge.id))})]});case"tournaments":return a.jsxs(is,{children:[a.jsxs(Nw,{children:[a.jsxs(Bw,{children:[a.jsx(ue,{}),a.jsx(Ow,{type:"text",placeholder:"Search tournaments by name or location...",value:T,onChange:ge=>U(ge.target.value)})]}),a.jsxs(Pw,{onClick:Z,children:[a.jsx(K,{}),"Host a Tournament"]})]}),a.jsx(gw,{children:be.filter(ge=>ge.name.toLowerCase().includes(T.toLowerCase())||ge.location.toLowerCase().includes(T.toLowerCase())).map((ge,jt)=>a.jsxs(bw,{children:[a.jsx(yw,{$imageIndex:ge.imageIndex}),a.jsx(kw,{status:ge.status,children:ge.status==="upcoming"?"Upcoming":ge.status==="active"?"Active":"Completed"}),a.jsxs(vw,{children:[a.jsx("h3",{children:ge.name}),a.jsxs(ww,{children:[a.jsxs("div",{children:[a.jsx(se,{}),ge.date]}),a.jsxs("div",{children:[a.jsx(X,{}),ge.location]})]}),ge.result&&a.jsxs(jw,{children:[a.jsx(K,{}),ge.result]})]})]},jt))})]});default:return a.jsx(is,{children:"Select a tab"})}},Q=c.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    margin-top: 60px;
    padding-bottom: 30px;
  `,ee=c.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
  `,te=c.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
  `;c.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }
  `,c.div`
    margin-left: 30px;
    
    @media (max-width: 768px) {
      margin-left: 0;
      margin-top: 20px;
    }
  `;const ce=c.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    flex: 1;
    max-width: 600px;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      width: 100%;
      margin-top: 20px;
    }
  `,z=c.div`
    text-align: center;
    padding: 25px 20px;
    background-color: #f9fafb;
    border-radius: 8px;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,q=c.div`
    font-weight: 600;
    color: #234255;
    margin-bottom: 5px;
  `,oe=c.div`
    font-size: 1.8rem;
    font-weight: 700;
    color: #29ba9b;
  `,ne=c.div`
    font-size: 0.8rem;
    color: #6b7280;
    text-transform: uppercase;
  `,De=c.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-top: 20px;
    
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  `,Ge=c.div`
    text-align: center;
    padding: 10px;
  `,Ve=c.div`
    font-size: 0.8rem;
    color: #6b7280;
    margin-bottom: 5px;
  `,qe=c.div`
  font-weight: 500;
  color: #234255;
`,_t=c.div`
  position: relative;
`,$t=c.textarea`
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
`,ga=c.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
  justify-content: flex-end;
`,Za=c.button`
  padding: 6px 16px;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid;
  
  ${ge=>ge.variant==="save"?`
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
`,et=c.button`
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
  
  &:hover {
    background-color: #f0fffe;
    color: #249e85;
  }
`;return a.jsxs(uu,{children:[a.jsxs(Q,{children:[a.jsxs(ee,{children:[a.jsxs(te,{children:[a.jsxs(ow,{children:[a.jsx(lw,{src:r.avatar,alt:r.name}),a.jsx(sw,{onClick:P,children:"📷"}),a.jsx(uw,{ref:d,type:"file",accept:"image/*",onChange:k})]}),a.jsx("div",{style:{textAlign:"center",marginTop:"15px"},children:a.jsx(cw,{children:r.name})})]}),a.jsxs("div",{style:{position:"relative",flex:1,maxWidth:"600px"},children:[a.jsx("div",{style:{position:"absolute",top:"-50px",right:"0",zIndex:10},children:a.jsx(dw,{onClick:B,children:"Edit Profile"})}),a.jsx(ce,{children:Ae.map((ge,jt)=>a.jsxs(z,{children:[a.jsx(q,{children:ge.category}),a.jsxs(oe,{children:["#",ge.rank]}),a.jsx(ne,{children:"Rank"})]},jt))})]})]}),a.jsxs(De,{children:[a.jsxs(Ge,{children:[a.jsx(Ve,{children:"PPL ID"}),a.jsx(qe,{children:Be.replace("PPL-","")})]}),a.jsxs(Ge,{children:[a.jsx(Ve,{children:"AGE"}),a.jsxs(qe,{children:[me," Years"]})]}),$.map((ge,jt)=>a.jsxs(Ge,{children:[a.jsxs(Ve,{children:[ge.type," DUPR"]}),a.jsx(qe,{children:ge.rating})]},jt))]})]}),a.jsxs(pw,{children:[a.jsxs(fw,{children:[a.jsx(pu,{active:f==="about",onClick:()=>m("about"),children:"About"}),a.jsx(pu,{active:f==="club",onClick:()=>m("club"),children:"My Club"}),a.jsx(pu,{active:f==="tournaments",onClick:()=>m("tournaments"),children:"Tournaments"})]}),j()]})]})},O0=c.div`
  min-height: calc(100vh - 140px);
  padding: 50px 20px 40px 20px;
  max-width: 800px;
  margin: 0 auto;
  background: #ffffff;
`,$w=c.div`
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
`,Hw=c.h1`
  font-size: 2.2rem;
  font-weight: 700;
  color: #234255;
  margin-bottom: 12px;
`,Uw=c.p`
  color: #6b7280;
  font-size: 1.1rem;
  line-height: 1.6;
`,qw=c.form`
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #f1f5f9;
`,qa=c.div`
  margin-bottom: 32px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Ya=c.h3`
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
`,rs=c.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 20px;
  
  @media (min-width: 768px) {
    grid-template-columns: ${r=>r.columns||"1fr 1fr"};
  }
`,ot=c.div`
  display: flex;
  flex-direction: column;
`,ut=c.label`
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
  font-size: 0.95rem;
`,pn=c.input`
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
`,P0=c.textarea`
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
`,fu=c.select`
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
`;c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px;
  margin-top: 8px;
`;c.label`
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
`;const Yw=c.div`
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
`,Gw=c.div`
  font-size: 2rem;
  margin-bottom: 12px;
  color: #64748b;
`,Vw=c.p`
  color: #64748b;
  margin-bottom: 8px;
  font-size: 1rem;
`,Qw=c.p`
  color: #94a3b8;
  font-size: 0.875rem;
`,Ww=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #f0fffe;
  border: 1px solid #29ba9b;
  border-radius: 8px;
  margin-top: 12px;
`,Zw=c.span`
  color: #234255;
  font-weight: 500;
`,Jw=c.button`
  background: none;
  border: none;
  color: #ef4444;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 4px;
  
  &:hover {
    color: #dc2626;
  }
`,Xw=c.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,hu=c.button`
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
`,Fw=c.div`
  background: #fef3c7;
  border: 1px solid #f59e0b;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
`,Kw=c.h4`
  color: #92400e;
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 1rem;
`,Iw=c.p`
  color: #92400e;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
`,e8=c.input`
  display: none;
`,t8=c.div`
  width: 100%;
  height: 400px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  margin-bottom: 16px;
  position: relative;
  overflow: hidden;
`,_0=c.div`
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
`,$0=c.div`
  font-size: 3rem;
  margin-bottom: 12px;
  color: #64748b;
`,H0=c.p`
  color: #64748b;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 8px;
`,U0=c.p`
  color: #94a3b8;
  font-size: 0.9rem;
  text-align: center;
  max-width: 300px;
`,n8=c.div`
  background: #f0fffe;
  border: 1px solid #29ba9b;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`,a8=c.h4`
  color: #234255;
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 1rem;
`,i8=c.p`
  color: #475569;
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0;
`,r8=c.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`,q0=c.button`
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
`;c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  margin-top: 8px;
`;c.div`
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
`;c.div`
  font-weight: 600;
  color: #234255;
  margin-bottom: 4px;
  font-size: 1rem;
`;c.div`
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.4;
`;c.div`
  background: #fef3c7;
  border: 1px solid #f59e0b;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
`;c.h4`
  color: #92400e;
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 1rem;
`;c.p`
  color: #92400e;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
`;const o8=c.div`
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  background: #fafbfc;
`,l8=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,s8=c.h4`
  color: #234255;
  font-weight: 600;
  margin: 0;
  font-size: 1.1rem;
`,c8=c.button`
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
`,d8=c.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,u8=c.button`
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
`,p8=c.div`
  background: #f0fffe;
  border: 1px solid #29ba9b;
  border-radius: 8px;
  padding: 16px;
  margin-top: 20px;
`,f8=c.h4`
  color: #234255;
  font-weight: 600;
  margin-bottom: 12px;
  font-size: 1rem;
`,h8=c.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,m8=c.li`
  color: #6b7280;
  font-size: 0.9rem;
  padding: 4px 0;
  border-bottom: 1px solid #e2e8f0;
  
  &:last-child {
    border-bottom: none;
  }
`,x8=c.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  margin: 20px 0;
`,g8=c.h3`
  color: #234255;
  font-weight: 600;
  margin-bottom: 20px;
  font-size: 1.2rem;
  text-align: center;
`,b8=c.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,y8=c.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
`,v8=c.h4`
  color: #234255;
  font-weight: 600;
  margin-bottom: 16px;
  font-size: 1rem;
  border-bottom: 2px solid #29ba9b;
  padding-bottom: 8px;
`,po=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #f1f5f9;
  
  &:last-child {
    border-bottom: none;
  }
`,fo=c.span`
  color: #6b7280;
  font-weight: 500;
  font-size: 0.9rem;
`,ho=c.span`
  color: #234255;
  font-weight: 600;
  font-size: 0.9rem;
  font-family: monospace;
`,w8=c.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
`,j8=c.h4`
  color: #234255;
  font-weight: 600;
  margin-bottom: 16px;
  font-size: 1rem;
  border-bottom: 2px solid #29ba9b;
  padding-bottom: 8px;
`,k8=c.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`,S8=c.div`
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
`,C8=c.div`
  font-size: 2rem;
  margin-bottom: 8px;
  color: #64748b;
`,z8=c.p`
  color: #64748b;
  font-size: 0.9rem;
  font-weight: 500;
  margin: 4px 0;
`,M8=c.p`
  color: #94a3b8;
  font-size: 0.8rem;
  margin: 0;
`,T8=c.p`
  color: #6b7280;
  font-size: 0.85rem;
  line-height: 1.4;
  margin: 0;
  max-width: 250px;
  margin: 0 auto;
`,A8=()=>{const{user:r,showNotification:s}=bn(),u=Wa(),[d,f]=v.useState({tournamentName:"",description:"",startDate:"",endDate:"",registrationDeadline:"",category:"",skillLevel:"",maxParticipants:"",entryFee:"",prizePool:"",venueName:"",venueAddress:"",venueCity:"",venueState:"",venueZip:"",contactEmail:"",contactPhone:"",rules:"",additionalInfo:"",tournamentCategories:[]}),[m,b]=v.useState(null),[w,g]=v.useState(!1),[x,C]=v.useState(null),[D,A]=v.useState(!1);v.useEffect(()=>{if(d.tournamentCategories.length===0){const X={id:Date.now(),division:"",ageCategory:"",skillLevel:""};f(se=>({...se,tournamentCategories:[X]}))}},[]);const H=["Men's Singles","Women's Singles","Men's Doubles","Women's Doubles","Mixed Doubles"],T=["18+","35+","50+"],U=[{value:"intermediate",label:"Intermediate",description:"Perfect for developing players"},{value:"advanced",label:"Advanced",description:"Competitive players with solid fundamentals"},{value:"open-tier-1",label:"Open - Tier 1",description:"Entry level competitive play"},{value:"open-tier-2",label:"Open - Tier 2",description:"Intermediate competitive play"},{value:"open-tier-3",label:"Open - Tier 3",description:"Advanced competitive play"}],P=X=>{const{name:se,value:me}=X.target;f(Be=>({...Be,[se]:me}))},k=X=>{const se=X.target.files[0];if(se){if(!["image/jpeg","image/png","image/jpg","application/pdf"].includes(se.type)){s("Please upload a valid image (JPG, PNG) or PDF file","error");return}if(se.size>5242880){s("File size must be less than 5MB","error");return}b(se)}},B=()=>{b(null)},Y=()=>{A(!0),setTimeout(()=>{const X={name:"Riverside Pickleball Complex",address:"123 Tournament Drive, Riverside, CA 92501",lat:33.9533,lng:-117.3962};C(X),f(se=>({...se,venueName:X.name,venueAddress:X.address,venueCity:"Riverside",venueState:"CA",venueZip:"92501"})),A(!1)},2e3)},F=()=>{C(null),f(X=>({...X,venueName:"",venueAddress:"",venueCity:"",venueState:"",venueZip:""}))},J=()=>{if(x){const X=`https://www.google.com/maps/search/?api=1&query=${x.lat},${x.lng}`;window.open(X,"_blank")}},R=()=>{const X={id:Date.now(),division:"",ageCategory:"",skillLevel:""};f(se=>({...se,tournamentCategories:[...se.tournamentCategories,X]}))},Z=X=>{f(se=>({...se,tournamentCategories:se.tournamentCategories.filter(me=>me.id!==X)}))},ue=(X,se,me)=>{f(Be=>{const Ae=Be.tournamentCategories.map($=>$.id===X?{...$,[se]:me}:$);return{...Be,tournamentCategories:Ae}})},le=async X=>{if(X.preventDefault(),g(!0),["tournamentName","description","startDate","endDate","registrationDeadline","category","skillLevel","maxParticipants","entryFee","venueName","venueAddress","venueCity","contactEmail"].filter(Ae=>!d[Ae]).length>0){s("Please fill in all required fields","error"),g(!1);return}if(d.tournamentCategories.length===0){s("Please add at least one tournament category","error"),g(!1);return}if(d.tournamentCategories.filter(Ae=>!Ae.division||!Ae.ageCategory||!Ae.skillLevel).length>0){s("Please complete all tournament category fields (Division, Age Category, Skill Level)","error"),g(!1);return}if(!m){s("Please upload proof of payment","error"),g(!1);return}try{await new Promise(Ae=>setTimeout(Ae,2e3)),s("Tournament submission successful! Your tournament is pending admin approval.","success"),u("/profile")}catch{s("Failed to submit tournament. Please try again.","error")}finally{g(!1)}},K=()=>{u("/profile")};return r?a.jsxs(O0,{children:[a.jsxs($w,{children:[a.jsx(Hw,{children:"Host a Tournament"}),a.jsx(Uw,{children:"Create and submit your tournament for admin approval. All tournaments require payment verification before approval."})]}),a.jsxs(qw,{onSubmit:le,children:[a.jsxs(qa,{children:[a.jsx(Ya,{children:"Basic Information"}),a.jsxs(ot,{children:[a.jsx(ut,{children:"Tournament Name *"}),a.jsx(pn,{type:"text",name:"tournamentName",value:d.tournamentName,onChange:P,placeholder:"Enter tournament name",required:!0})]}),a.jsxs(ot,{children:[a.jsx(ut,{children:"Description *"}),a.jsx(P0,{name:"description",value:d.description,onChange:P,placeholder:"Describe your tournament, format, and any special features",required:!0})]})]}),a.jsxs(qa,{children:[a.jsx(Ya,{children:"Tournament Details"}),a.jsxs(rs,{children:[a.jsxs(ot,{children:[a.jsx(ut,{children:"Start Date *"}),a.jsx(pn,{type:"date",name:"startDate",value:d.startDate,onChange:P,required:!0})]}),a.jsxs(ot,{children:[a.jsx(ut,{children:"End Date *"}),a.jsx(pn,{type:"date",name:"endDate",value:d.endDate,onChange:P,required:!0})]})]}),a.jsxs(rs,{children:[a.jsxs(ot,{children:[a.jsx(ut,{children:"Registration Deadline *"}),a.jsx(pn,{type:"date",name:"registrationDeadline",value:d.registrationDeadline,onChange:P,required:!0})]}),a.jsxs(ot,{children:[a.jsx(ut,{children:"Max Participants *"}),a.jsx(pn,{type:"number",name:"maxParticipants",value:d.maxParticipants,onChange:P,placeholder:"e.g., 24",min:"1",max:"24",required:!0})]})]}),a.jsxs(ot,{children:[a.jsx(ut,{children:"Tournament Categories *"}),d.tournamentCategories.map((X,se)=>a.jsxs(o8,{children:[a.jsxs(l8,{children:[a.jsxs(s8,{children:["Category ",se+1]}),d.tournamentCategories.length>1&&a.jsx(c8,{onClick:()=>Z(X.id),children:"Remove"})]}),a.jsxs(d8,{children:[a.jsxs(ot,{children:[a.jsx(ut,{children:"Division *"}),a.jsxs(fu,{value:X.division||"",onChange:me=>ue(X.id,"division",me.target.value),required:!0,children:[a.jsx("option",{value:"",children:"Select division"}),H.map(me=>a.jsx("option",{value:me,children:me},me))]},`division-${X.id}`)]}),a.jsxs(ot,{children:[a.jsx(ut,{children:"Age Category *"}),a.jsxs(fu,{value:X.ageCategory||"",onChange:me=>ue(X.id,"ageCategory",me.target.value),required:!0,children:[a.jsx("option",{value:"",children:"Select age category"}),T.map(me=>a.jsx("option",{value:me,children:me},me))]},`age-${X.id}`)]}),a.jsxs(ot,{children:[a.jsx(ut,{children:"Skill Level *"}),a.jsxs(fu,{value:X.skillLevel||"",onChange:me=>ue(X.id,"skillLevel",me.target.value),required:!0,children:[a.jsx("option",{value:"",children:"Select skill level"}),U.map(me=>a.jsx("option",{value:me.value,children:me.label},me.value))]},`skill-${X.id}`)]})]})]},X.id)),a.jsxs(u8,{onClick:R,children:[a.jsx("span",{children:"➕"}),"Add More Categories"]}),d.tournamentCategories.length>0&&a.jsxs(p8,{children:[a.jsx(f8,{children:"Tournament Categories Summary"}),a.jsx(h8,{children:d.tournamentCategories.map((X,se)=>{var me;return a.jsxs(m8,{children:[a.jsxs("strong",{children:["Category ",se+1,":"]})," ",X.division," - ",X.ageCategory," - ",X.skillLevel?(me=U.find(Be=>Be.value===X.skillLevel))==null?void 0:me.label:"Not selected"]},X.id)})})]})]})]}),a.jsxs(qa,{children:[a.jsx(Ya,{children:"Financial Information"}),a.jsxs(rs,{children:[a.jsxs(ot,{children:[a.jsx(ut,{children:"Entry Fee *"}),a.jsx(pn,{type:"number",name:"entryFee",value:d.entryFee,onChange:P,placeholder:"0.00",min:"0",step:"0.01",required:!0})]}),a.jsxs(ot,{children:[a.jsx(ut,{children:"Prize Pool (Optional)"}),a.jsx(pn,{type:"number",name:"prizePool",value:d.prizePool,onChange:P,placeholder:"0.00",min:"0",step:"0.01"})]})]})]}),a.jsxs(qa,{children:[a.jsx(Ya,{children:"Venue Location"}),x?a.jsxs(ot,{children:[a.jsx(ut,{children:"Selected Location"}),a.jsxs(n8,{children:[a.jsx(a8,{children:x.name}),a.jsx(i8,{children:x.address}),a.jsxs(r8,{children:[a.jsx(q0,{variant:"primary",onClick:J,children:"View in Google Maps"}),a.jsx(q0,{onClick:F,children:"Change Location"})]})]})]}):a.jsxs(ot,{children:[a.jsx(ut,{children:"Select Tournament Location *"}),a.jsx(t8,{children:D?a.jsxs(_0,{children:[a.jsx($0,{children:"🗺️"}),a.jsx(H0,{children:"Loading Google Maps..."}),a.jsx(U0,{children:"Please wait while we load the map for location selection"})]}):a.jsxs(_0,{onClick:Y,children:[a.jsx($0,{children:"📍"}),a.jsx(H0,{children:"Pin Your Tournament Location"}),a.jsx(U0,{children:"Click here to open Google Maps and select your tournament venue location"})]})})]}),x&&a.jsxs(ot,{children:[a.jsx(ut,{children:"Venue Name (Edit if needed)"}),a.jsx(pn,{type:"text",name:"venueName",value:d.venueName,onChange:P,placeholder:"Enter venue name"})]})]}),a.jsxs(qa,{children:[a.jsx(Ya,{children:"Contact Information"}),a.jsxs(rs,{children:[a.jsxs(ot,{children:[a.jsx(ut,{children:"Contact Email *"}),a.jsx(pn,{type:"email",name:"contactEmail",value:d.contactEmail,onChange:P,placeholder:"tournament@example.com",required:!0})]}),a.jsxs(ot,{children:[a.jsx(ut,{children:"Contact Phone"}),a.jsx(pn,{type:"tel",name:"contactPhone",value:d.contactPhone,onChange:P,placeholder:"(555) 123-4567"})]})]})]}),a.jsxs(qa,{children:[a.jsx(Ya,{children:"Tournament Rules"}),a.jsx(ot,{children:a.jsx(P0,{name:"rules",value:d.rules,onChange:P,placeholder:"Specify any special rules or regulations for your tournament"})})]}),a.jsxs(qa,{children:[a.jsx(Ya,{children:"Payment Verification"}),a.jsxs(Fw,{children:[a.jsx(Kw,{children:"Tournament Hosting Fee Required"}),a.jsx(Iw,{children:"A hosting fee is required to submit your tournament for approval. Please upload proof of payment (receipt, bank transfer confirmation, etc.) to complete your submission."})]}),a.jsxs(x8,{children:[a.jsx(g8,{children:"Payment Information"}),a.jsxs(b8,{children:[a.jsxs(y8,{children:[a.jsx(v8,{children:"Bank Transfer Details"}),a.jsxs(po,{children:[a.jsx(fo,{children:"Bank Name:"}),a.jsx(ho,{children:"-"})]}),a.jsxs(po,{children:[a.jsx(fo,{children:"Account Name:"}),a.jsx(ho,{children:"-"})]}),a.jsxs(po,{children:[a.jsx(fo,{children:"Account Number:"}),a.jsx(ho,{children:"-"})]}),a.jsxs(po,{children:[a.jsx(fo,{children:"Routing Number:"}),a.jsx(ho,{children:"-"})]}),a.jsxs(po,{children:[a.jsx(fo,{children:"Reference:"}),a.jsx(ho,{children:"-"})]})]}),a.jsxs(w8,{children:[a.jsx(j8,{children:"Quick Payment"}),a.jsx(k8,{children:a.jsxs(S8,{children:[a.jsx(C8,{children:"📱"}),a.jsx(z8,{children:"QR Code"}),a.jsx(M8,{children:"Payment Details"})]})}),a.jsx(T8,{children:"Scan with your banking app or payment service to pay the hosting fee instantly"})]})]})]}),a.jsxs(ot,{children:[a.jsx(ut,{children:"Upload Proof of Payment *"}),m?a.jsxs(Ww,{children:[a.jsx(Zw,{children:m.name}),a.jsx(Jw,{onClick:B,children:"×"})]}):a.jsxs(Yw,{onClick:()=>document.getElementById("payment-upload").click(),children:[a.jsx(Gw,{children:"📄"}),a.jsx(Vw,{children:"Click to upload payment proof"}),a.jsx(Qw,{children:"JPG, PNG, or PDF (max 5MB)"})]}),a.jsx(e8,{id:"payment-upload",type:"file",accept:".jpg,.jpeg,.png,.pdf",onChange:k})]})]}),a.jsxs(Xw,{children:[a.jsx(hu,{type:"button",onClick:K,children:"Cancel"}),a.jsx(hu,{type:"submit",variant:"primary",disabled:w,children:w?"Submitting...":"Submit Tournament"})]})]})]}):a.jsx(O0,{children:a.jsxs("div",{style:{textAlign:"center",padding:"60px 20px"},children:[a.jsx("h2",{style:{color:"#234255",marginBottom:"16px"},children:"Sign in required"}),a.jsx("p",{style:{color:"#6b7280",marginBottom:"20px"},children:"You need to be logged in to host a tournament."}),a.jsx(hu,{variant:"primary",onClick:()=>u("/signin"),children:"Sign In"})]})})};function L8(){const{notification:r,hideNotification:s}=bn();return a.jsxs("div",{className:"app",children:[a.jsx(sv,{}),a.jsxs(W2,{children:[a.jsx(fn,{path:"/",element:a.jsx(Hv,{})}),a.jsx(fn,{path:"/forum",element:a.jsx(q4,{})}),a.jsx(fn,{path:"/tournament",element:a.jsx(X3,{})}),a.jsx(fn,{path:"/ranks",element:a.jsx(T5,{})}),a.jsx(fn,{path:"/clubs-courts",element:a.jsx(w6,{})}),a.jsx(fn,{path:"/signin",element:a.jsx(Y6,{})}),a.jsx(fn,{path:"/register",element:a.jsx(rw,{})}),a.jsx(fn,{path:"/profile",element:a.jsx(_w,{})}),a.jsx(fn,{path:"/host-tournament",element:a.jsx(A8,{})})]}),a.jsx(mv,{}),a.jsx(Sv,{message:r.message,type:r.type,isVisible:r.isVisible,onClose:s})]})}function E8(){return a.jsx(Mb,{children:a.jsx(L8,{})})}n2.createRoot(document.getElementById("root")).render(a.jsx(Gi.StrictMode,{children:a.jsx(gb,{basename:"/my-pickleball-app",children:a.jsx(E8,{})})}));
