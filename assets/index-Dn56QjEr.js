function Ff(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Af(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fc={exports:{}},Eo={},Ac={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ei=Symbol.for("react.element"),Bf=Symbol.for("react.portal"),Uf=Symbol.for("react.fragment"),Vf=Symbol.for("react.strict_mode"),Wf=Symbol.for("react.profiler"),Hf=Symbol.for("react.provider"),Yf=Symbol.for("react.context"),Gf=Symbol.for("react.forward_ref"),Qf=Symbol.for("react.suspense"),Kf=Symbol.for("react.memo"),Xf=Symbol.for("react.lazy"),Bs=Symbol.iterator;function Zf(e){return e===null||typeof e!="object"?null:(e=Bs&&e[Bs]||e["@@iterator"],typeof e=="function"?e:null)}var Bc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Uc=Object.assign,Vc={};function ir(e,t,n){this.props=e,this.context=t,this.refs=Vc,this.updater=n||Bc}ir.prototype.isReactComponent={};ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Wc(){}Wc.prototype=ir.prototype;function Fa(e,t,n){this.props=e,this.context=t,this.refs=Vc,this.updater=n||Bc}var Aa=Fa.prototype=new Wc;Aa.constructor=Fa;Uc(Aa,ir.prototype);Aa.isPureReactComponent=!0;var Us=Array.isArray,Hc=Object.prototype.hasOwnProperty,Ba={current:null},Yc={key:!0,ref:!0,__self:!0,__source:!0};function Gc(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Hc.call(t,r)&&!Yc.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:ei,type:e,key:o,ref:l,props:i,_owner:Ba.current}}function Jf(e,t){return{$$typeof:ei,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ua(e){return typeof e=="object"&&e!==null&&e.$$typeof===ei}function qf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Vs=/\/+/g;function Ko(e,t){return typeof e=="object"&&e!==null&&e.key!=null?qf(""+e.key):t.toString(36)}function Ri(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ei:case Bf:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Ko(l,0):r,Us(i)?(n="",e!=null&&(n=e.replace(Vs,"$&/")+"/"),Ri(i,t,n,"",function(d){return d})):i!=null&&(Ua(i)&&(i=Jf(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Vs,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Us(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+Ko(o,s);l+=Ri(o,t,n,u,i)}else if(u=Zf(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+Ko(o,s++),l+=Ri(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ci(e,t,n){if(e==null)return e;var r=[],i=0;return Ri(e,r,"","",function(o){return t.call(n,o,i++)}),r}function eh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},Ti={transition:null},th={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:Ti,ReactCurrentOwner:Ba};function Qc(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:ci,forEach:function(e,t,n){ci(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ci(e,function(){t++}),t},toArray:function(e){return ci(e,function(t){return t})||[]},only:function(e){if(!Ua(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=ir;O.Fragment=Uf;O.Profiler=Wf;O.PureComponent=Fa;O.StrictMode=Vf;O.Suspense=Qf;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=th;O.act=Qc;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Uc({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Ba.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Hc.call(t,u)&&!Yc.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:ei,type:e.type,key:i,ref:o,props:r,_owner:l}};O.createContext=function(e){return e={$$typeof:Yf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Hf,_context:e},e.Consumer=e};O.createElement=Gc;O.createFactory=function(e){var t=Gc.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:Gf,render:e}};O.isValidElement=Ua;O.lazy=function(e){return{$$typeof:Xf,_payload:{_status:-1,_result:e},_init:eh}};O.memo=function(e,t){return{$$typeof:Kf,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=Ti.transition;Ti.transition={};try{e()}finally{Ti.transition=t}};O.unstable_act=Qc;O.useCallback=function(e,t){return Se.current.useCallback(e,t)};O.useContext=function(e){return Se.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};O.useEffect=function(e,t){return Se.current.useEffect(e,t)};O.useId=function(){return Se.current.useId()};O.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return Se.current.useMemo(e,t)};O.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};O.useRef=function(e){return Se.current.useRef(e)};O.useState=function(e){return Se.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return Se.current.useTransition()};O.version="18.3.1";Ac.exports=O;var k=Ac.exports;const dn=Af(k),nh=Ff({__proto__:null,default:dn},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rh=k,ih=Symbol.for("react.element"),oh=Symbol.for("react.fragment"),lh=Object.prototype.hasOwnProperty,ah=rh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sh={key:!0,ref:!0,__self:!0,__source:!0};function Kc(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)lh.call(t,r)&&!sh.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ih,type:e,key:o,ref:l,props:i,_owner:ah.current}}Eo.Fragment=oh;Eo.jsx=Kc;Eo.jsxs=Kc;Fc.exports=Eo;var a=Fc.exports,Ml={},Xc={exports:{}},Me={},Zc={exports:{}},Jc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,T){var I=$.length;$.push(T);e:for(;0<I;){var F=I-1>>>1,B=$[F];if(0<i(B,T))$[F]=T,$[I]=B,I=F;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var T=$[0],I=$.pop();if(I!==T){$[0]=I;e:for(var F=0,B=$.length,ct=B>>>1;F<ct;){var Ce=2*(F+1)-1,Fe=$[Ce],se=Ce+1,Qe=$[se];if(0>i(Fe,I))se<B&&0>i(Qe,Fe)?($[F]=Qe,$[se]=I,F=se):($[F]=Fe,$[Ce]=I,F=Ce);else if(se<B&&0>i(Qe,I))$[F]=Qe,$[se]=I,F=se;else break e}}return T}function i($,T){var I=$.sortIndex-T.sortIndex;return I!==0?I:$.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],d=[],m=1,h=null,x=3,y=!1,S=!1,v=!1,j=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f($){for(var T=n(d);T!==null;){if(T.callback===null)r(d);else if(T.startTime<=$)r(d),T.sortIndex=T.expirationTime,t(u,T);else break;T=n(d)}}function w($){if(v=!1,f($),!S)if(n(u)!==null)S=!0,Kt(E);else{var T=n(d);T!==null&&De(w,T.startTime-$)}}function E($,T){S=!1,v&&(v=!1,p(_),_=-1),y=!0;var I=x;try{for(f(T),h=n(u);h!==null&&(!(h.expirationTime>T)||$&&!X());){var F=h.callback;if(typeof F=="function"){h.callback=null,x=h.priorityLevel;var B=F(h.expirationTime<=T);T=e.unstable_now(),typeof B=="function"?h.callback=B:h===n(u)&&r(u),f(T)}else r(u);h=n(u)}if(h!==null)var ct=!0;else{var Ce=n(d);Ce!==null&&De(w,Ce.startTime-T),ct=!1}return ct}finally{h=null,x=I,y=!1}}var C=!1,b=null,_=-1,z=5,N=-1;function X(){return!(e.unstable_now()-N<z)}function Q(){if(b!==null){var $=e.unstable_now();N=$;var T=!0;try{T=b(!0,$)}finally{T?V():(C=!1,b=null)}}else C=!1}var V;if(typeof c=="function")V=function(){c(Q)};else if(typeof MessageChannel<"u"){var jt=new MessageChannel,Ge=jt.port2;jt.port1.onmessage=Q,V=function(){Ge.postMessage(null)}}else V=function(){j(Q,0)};function Kt($){b=$,C||(C=!0,V())}function De($,T){_=j(function(){$(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){S||y||(S=!0,Kt(E))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function($){switch(x){case 1:case 2:case 3:var T=3;break;default:T=x}var I=x;x=T;try{return $()}finally{x=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,T){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var I=x;x=$;try{return T()}finally{x=I}},e.unstable_scheduleCallback=function($,T,I){var F=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?F+I:F):I=F,$){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=I+B,$={id:m++,callback:T,priorityLevel:$,startTime:I,expirationTime:B,sortIndex:-1},I>F?($.sortIndex=I,t(d,$),n(u)===null&&$===n(d)&&(v?(p(_),_=-1):v=!0,De(w,I-F))):($.sortIndex=B,t(u,$),S||y||(S=!0,Kt(E))),$},e.unstable_shouldYield=X,e.unstable_wrapCallback=function($){var T=x;return function(){var I=x;x=T;try{return $.apply(this,arguments)}finally{x=I}}}})(Jc);Zc.exports=Jc;var uh=Zc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ch=k,Ie=uh;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qc=new Set,Tr={};function xn(e,t){Yn(e,t),Yn(e+"Capture",t)}function Yn(e,t){for(Tr[e]=t,e=0;e<t.length;e++)qc.add(t[e])}var vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ol=Object.prototype.hasOwnProperty,dh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ws={},Hs={};function ph(e){return Ol.call(Hs,e)?!0:Ol.call(Ws,e)?!1:dh.test(e)?Hs[e]=!0:(Ws[e]=!0,!1)}function fh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function hh(e,t,n,r){if(t===null||typeof t>"u"||fh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var Va=/[\-:]([a-z])/g;function Wa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Va,Wa);he[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Va,Wa);he[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Va,Wa);he[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ha(e,t,n,r){var i=he.hasOwnProperty(t)?he[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(hh(t,n,i,r)&&(n=null),r||i===null?ph(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var St=ch.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,di=Symbol.for("react.element"),Pn=Symbol.for("react.portal"),zn=Symbol.for("react.fragment"),Ya=Symbol.for("react.strict_mode"),Dl=Symbol.for("react.profiler"),ed=Symbol.for("react.provider"),td=Symbol.for("react.context"),Ga=Symbol.for("react.forward_ref"),Fl=Symbol.for("react.suspense"),Al=Symbol.for("react.suspense_list"),Qa=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),nd=Symbol.for("react.offscreen"),Ys=Symbol.iterator;function ur(e){return e===null||typeof e!="object"?null:(e=Ys&&e[Ys]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,Xo;function yr(e){if(Xo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Xo=t&&t[1]||""}return`
`+Xo+e}var Zo=!1;function Jo(e,t){if(!e||Zo)return"";Zo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{Zo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?yr(e):""}function mh(e){switch(e.tag){case 5:return yr(e.type);case 16:return yr("Lazy");case 13:return yr("Suspense");case 19:return yr("SuspenseList");case 0:case 2:case 15:return e=Jo(e.type,!1),e;case 11:return e=Jo(e.type.render,!1),e;case 1:return e=Jo(e.type,!0),e;default:return""}}function Bl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zn:return"Fragment";case Pn:return"Portal";case Dl:return"Profiler";case Ya:return"StrictMode";case Fl:return"Suspense";case Al:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case td:return(e.displayName||"Context")+".Consumer";case ed:return(e._context.displayName||"Context")+".Provider";case Ga:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qa:return t=e.displayName||null,t!==null?t:Bl(e.type)||"Memo";case Pt:t=e._payload,e=e._init;try{return Bl(e(t))}catch{}}return null}function gh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bl(t);case 8:return t===Ya?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xh(e){var t=rd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function pi(e){e._valueTracker||(e._valueTracker=xh(e))}function id(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=rd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Xi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ul(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Gs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function od(e,t){t=t.checked,t!=null&&Ha(e,"checked",t,!1)}function Vl(e,t){od(e,t);var n=Wt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Wl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Wl(e,t.type,Wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Wl(e,t,n){(t!=="number"||Xi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wr=Array.isArray;function An(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Hl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ks(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(wr(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wt(n)}}function ld(e,t){var n=Wt(t.value),r=Wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Xs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ad(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ad(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fi,sd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fi=fi||document.createElement("div"),fi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ir(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vh=["Webkit","ms","Moz","O"];Object.keys(Cr).forEach(function(e){vh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cr[t]=Cr[e]})});function ud(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Cr.hasOwnProperty(e)&&Cr[e]?(""+t).trim():t+"px"}function cd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ud(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var yh=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gl(e,t){if(t){if(yh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Ql(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kl=null;function Ka(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xl=null,Bn=null,Un=null;function Zs(e){if(e=ri(e)){if(typeof Xl!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Lo(t),Xl(e.stateNode,e.type,t))}}function dd(e){Bn?Un?Un.push(e):Un=[e]:Bn=e}function pd(){if(Bn){var e=Bn,t=Un;if(Un=Bn=null,Zs(e),t)for(e=0;e<t.length;e++)Zs(t[e])}}function fd(e,t){return e(t)}function hd(){}var qo=!1;function md(e,t,n){if(qo)return e(t,n);qo=!0;try{return fd(e,t,n)}finally{qo=!1,(Bn!==null||Un!==null)&&(hd(),pd())}}function Mr(e,t){var n=e.stateNode;if(n===null)return null;var r=Lo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Zl=!1;if(vt)try{var cr={};Object.defineProperty(cr,"passive",{get:function(){Zl=!0}}),window.addEventListener("test",cr,cr),window.removeEventListener("test",cr,cr)}catch{Zl=!1}function wh(e,t,n,r,i,o,l,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(m){this.onError(m)}}var br=!1,Zi=null,Ji=!1,Jl=null,kh={onError:function(e){br=!0,Zi=e}};function Sh(e,t,n,r,i,o,l,s,u){br=!1,Zi=null,wh.apply(kh,arguments)}function jh(e,t,n,r,i,o,l,s,u){if(Sh.apply(this,arguments),br){if(br){var d=Zi;br=!1,Zi=null}else throw Error(P(198));Ji||(Ji=!0,Jl=d)}}function vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function gd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Js(e){if(vn(e)!==e)throw Error(P(188))}function Ch(e){var t=e.alternate;if(!t){if(t=vn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Js(i),e;if(o===r)return Js(i),t;o=o.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function xd(e){return e=Ch(e),e!==null?vd(e):null}function vd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vd(e);if(t!==null)return t;e=e.sibling}return null}var yd=Ie.unstable_scheduleCallback,qs=Ie.unstable_cancelCallback,bh=Ie.unstable_shouldYield,Eh=Ie.unstable_requestPaint,ne=Ie.unstable_now,Ph=Ie.unstable_getCurrentPriorityLevel,Xa=Ie.unstable_ImmediatePriority,wd=Ie.unstable_UserBlockingPriority,qi=Ie.unstable_NormalPriority,zh=Ie.unstable_LowPriority,kd=Ie.unstable_IdlePriority,Po=null,st=null;function $h(e){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(Po,e,void 0,(e.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:Nh,_h=Math.log,Lh=Math.LN2;function Nh(e){return e>>>=0,e===0?32:31-(_h(e)/Lh|0)|0}var hi=64,mi=4194304;function kr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function eo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=kr(s):(o&=l,o!==0&&(r=kr(o)))}else l=n&~i,l!==0?r=kr(l):o!==0&&(r=kr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-qe(t),i=1<<n,r|=e[n],t&=~i;return r}function Rh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Th(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-qe(o),s=1<<l,u=i[l];u===-1?(!(s&n)||s&r)&&(i[l]=Rh(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function ql(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Sd(){var e=hi;return hi<<=1,!(hi&4194240)&&(hi=64),e}function el(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ti(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qe(t),e[t]=n}function Ih(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-qe(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Za(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function jd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Cd,Ja,bd,Ed,Pd,ea=!1,gi=[],It=null,Mt=null,Ot=null,Or=new Map,Dr=new Map,_t=[],Mh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function eu(e,t){switch(e){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":Or.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dr.delete(t.pointerId)}}function dr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ri(t),t!==null&&Ja(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Oh(e,t,n,r,i){switch(t){case"focusin":return It=dr(It,e,t,n,r,i),!0;case"dragenter":return Mt=dr(Mt,e,t,n,r,i),!0;case"mouseover":return Ot=dr(Ot,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Or.set(o,dr(Or.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Dr.set(o,dr(Dr.get(o)||null,e,t,n,r,i)),!0}return!1}function zd(e){var t=nn(e.target);if(t!==null){var n=vn(t);if(n!==null){if(t=n.tag,t===13){if(t=gd(n),t!==null){e.blockedOn=t,Pd(e.priority,function(){bd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ii(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ta(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Kl=r,n.target.dispatchEvent(r),Kl=null}else return t=ri(n),t!==null&&Ja(t),e.blockedOn=n,!1;t.shift()}return!0}function tu(e,t,n){Ii(e)&&n.delete(t)}function Dh(){ea=!1,It!==null&&Ii(It)&&(It=null),Mt!==null&&Ii(Mt)&&(Mt=null),Ot!==null&&Ii(Ot)&&(Ot=null),Or.forEach(tu),Dr.forEach(tu)}function pr(e,t){e.blockedOn===t&&(e.blockedOn=null,ea||(ea=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,Dh)))}function Fr(e){function t(i){return pr(i,e)}if(0<gi.length){pr(gi[0],e);for(var n=1;n<gi.length;n++){var r=gi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(It!==null&&pr(It,e),Mt!==null&&pr(Mt,e),Ot!==null&&pr(Ot,e),Or.forEach(t),Dr.forEach(t),n=0;n<_t.length;n++)r=_t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<_t.length&&(n=_t[0],n.blockedOn===null);)zd(n),n.blockedOn===null&&_t.shift()}var Vn=St.ReactCurrentBatchConfig,to=!0;function Fh(e,t,n,r){var i=U,o=Vn.transition;Vn.transition=null;try{U=1,qa(e,t,n,r)}finally{U=i,Vn.transition=o}}function Ah(e,t,n,r){var i=U,o=Vn.transition;Vn.transition=null;try{U=4,qa(e,t,n,r)}finally{U=i,Vn.transition=o}}function qa(e,t,n,r){if(to){var i=ta(e,t,n,r);if(i===null)cl(e,t,r,no,n),eu(e,r);else if(Oh(i,e,t,n,r))r.stopPropagation();else if(eu(e,r),t&4&&-1<Mh.indexOf(e)){for(;i!==null;){var o=ri(i);if(o!==null&&Cd(o),o=ta(e,t,n,r),o===null&&cl(e,t,r,no,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else cl(e,t,r,null,n)}}var no=null;function ta(e,t,n,r){if(no=null,e=Ka(r),e=nn(e),e!==null)if(t=vn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=gd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return no=e,null}function $d(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ph()){case Xa:return 1;case wd:return 4;case qi:case zh:return 16;case kd:return 536870912;default:return 16}default:return 16}}var Nt=null,es=null,Mi=null;function _d(){if(Mi)return Mi;var e,t=es,n=t.length,r,i="value"in Nt?Nt.value:Nt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Mi=i.slice(e,1<r?1-r:void 0)}function Oi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xi(){return!0}function nu(){return!1}function Oe(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?xi:nu,this.isPropagationStopped=nu,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xi)},persist:function(){},isPersistent:xi}),t}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ts=Oe(or),ni=ee({},or,{view:0,detail:0}),Bh=Oe(ni),tl,nl,fr,zo=ee({},ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ns,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fr&&(fr&&e.type==="mousemove"?(tl=e.screenX-fr.screenX,nl=e.screenY-fr.screenY):nl=tl=0,fr=e),tl)},movementY:function(e){return"movementY"in e?e.movementY:nl}}),ru=Oe(zo),Uh=ee({},zo,{dataTransfer:0}),Vh=Oe(Uh),Wh=ee({},ni,{relatedTarget:0}),rl=Oe(Wh),Hh=ee({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),Yh=Oe(Hh),Gh=ee({},or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qh=Oe(Gh),Kh=ee({},or,{data:0}),iu=Oe(Kh),Xh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jh[e])?!!t[e]:!1}function ns(){return qh}var e0=ee({},ni,{key:function(e){if(e.key){var t=Xh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Oi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ns,charCode:function(e){return e.type==="keypress"?Oi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),t0=Oe(e0),n0=ee({},zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ou=Oe(n0),r0=ee({},ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ns}),i0=Oe(r0),o0=ee({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),l0=Oe(o0),a0=ee({},zo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),s0=Oe(a0),u0=[9,13,27,32],rs=vt&&"CompositionEvent"in window,Er=null;vt&&"documentMode"in document&&(Er=document.documentMode);var c0=vt&&"TextEvent"in window&&!Er,Ld=vt&&(!rs||Er&&8<Er&&11>=Er),lu=" ",au=!1;function Nd(e,t){switch(e){case"keyup":return u0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function d0(e,t){switch(e){case"compositionend":return Rd(t);case"keypress":return t.which!==32?null:(au=!0,lu);case"textInput":return e=t.data,e===lu&&au?null:e;default:return null}}function p0(e,t){if($n)return e==="compositionend"||!rs&&Nd(e,t)?(e=_d(),Mi=es=Nt=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ld&&t.locale!=="ko"?null:t.data;default:return null}}var f0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function su(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!f0[e.type]:t==="textarea"}function Td(e,t,n,r){dd(r),t=ro(t,"onChange"),0<t.length&&(n=new ts("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pr=null,Ar=null;function h0(e){Hd(e,0)}function $o(e){var t=Nn(e);if(id(t))return e}function m0(e,t){if(e==="change")return t}var Id=!1;if(vt){var il;if(vt){var ol="oninput"in document;if(!ol){var uu=document.createElement("div");uu.setAttribute("oninput","return;"),ol=typeof uu.oninput=="function"}il=ol}else il=!1;Id=il&&(!document.documentMode||9<document.documentMode)}function cu(){Pr&&(Pr.detachEvent("onpropertychange",Md),Ar=Pr=null)}function Md(e){if(e.propertyName==="value"&&$o(Ar)){var t=[];Td(t,Ar,e,Ka(e)),md(h0,t)}}function g0(e,t,n){e==="focusin"?(cu(),Pr=t,Ar=n,Pr.attachEvent("onpropertychange",Md)):e==="focusout"&&cu()}function x0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $o(Ar)}function v0(e,t){if(e==="click")return $o(t)}function y0(e,t){if(e==="input"||e==="change")return $o(t)}function w0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:w0;function Br(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ol.call(t,i)||!nt(e[i],t[i]))return!1}return!0}function du(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pu(e,t){var n=du(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=du(n)}}function Od(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Od(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Dd(){for(var e=window,t=Xi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xi(e.document)}return t}function is(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function k0(e){var t=Dd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Od(n.ownerDocument.documentElement,n)){if(r!==null&&is(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=pu(n,o);var l=pu(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var S0=vt&&"documentMode"in document&&11>=document.documentMode,_n=null,na=null,zr=null,ra=!1;function fu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ra||_n==null||_n!==Xi(r)||(r=_n,"selectionStart"in r&&is(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&Br(zr,r)||(zr=r,r=ro(na,"onSelect"),0<r.length&&(t=new ts("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=_n)))}function vi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ln={animationend:vi("Animation","AnimationEnd"),animationiteration:vi("Animation","AnimationIteration"),animationstart:vi("Animation","AnimationStart"),transitionend:vi("Transition","TransitionEnd")},ll={},Fd={};vt&&(Fd=document.createElement("div").style,"AnimationEvent"in window||(delete Ln.animationend.animation,delete Ln.animationiteration.animation,delete Ln.animationstart.animation),"TransitionEvent"in window||delete Ln.transitionend.transition);function _o(e){if(ll[e])return ll[e];if(!Ln[e])return e;var t=Ln[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Fd)return ll[e]=t[n];return e}var Ad=_o("animationend"),Bd=_o("animationiteration"),Ud=_o("animationstart"),Vd=_o("transitionend"),Wd=new Map,hu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yt(e,t){Wd.set(e,t),xn(t,[e])}for(var al=0;al<hu.length;al++){var sl=hu[al],j0=sl.toLowerCase(),C0=sl[0].toUpperCase()+sl.slice(1);Yt(j0,"on"+C0)}Yt(Ad,"onAnimationEnd");Yt(Bd,"onAnimationIteration");Yt(Ud,"onAnimationStart");Yt("dblclick","onDoubleClick");Yt("focusin","onFocus");Yt("focusout","onBlur");Yt(Vd,"onTransitionEnd");Yn("onMouseEnter",["mouseout","mouseover"]);Yn("onMouseLeave",["mouseout","mouseover"]);Yn("onPointerEnter",["pointerout","pointerover"]);Yn("onPointerLeave",["pointerout","pointerover"]);xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),b0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sr));function mu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,jh(r,t,void 0,e),e.currentTarget=null}function Hd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;mu(i,s,d),o=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,d=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;mu(i,s,d),o=u}}}if(Ji)throw e=Jl,Ji=!1,Jl=null,e}function H(e,t){var n=t[sa];n===void 0&&(n=t[sa]=new Set);var r=e+"__bubble";n.has(r)||(Yd(t,e,2,!1),n.add(r))}function ul(e,t,n){var r=0;t&&(r|=4),Yd(n,e,r,t)}var yi="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[yi]){e[yi]=!0,qc.forEach(function(n){n!=="selectionchange"&&(b0.has(n)||ul(n,!1,e),ul(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[yi]||(t[yi]=!0,ul("selectionchange",!1,t))}}function Yd(e,t,n,r){switch($d(t)){case 1:var i=Fh;break;case 4:i=Ah;break;default:i=qa}n=i.bind(null,t,n,e),i=void 0,!Zl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function cl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;s!==null;){if(l=nn(s),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}s=s.parentNode}}r=r.return}md(function(){var d=o,m=Ka(n),h=[];e:{var x=Wd.get(e);if(x!==void 0){var y=ts,S=e;switch(e){case"keypress":if(Oi(n)===0)break e;case"keydown":case"keyup":y=t0;break;case"focusin":S="focus",y=rl;break;case"focusout":S="blur",y=rl;break;case"beforeblur":case"afterblur":y=rl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=ru;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Vh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=i0;break;case Ad:case Bd:case Ud:y=Yh;break;case Vd:y=l0;break;case"scroll":y=Bh;break;case"wheel":y=s0;break;case"copy":case"cut":case"paste":y=Qh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ou}var v=(t&4)!==0,j=!v&&e==="scroll",p=v?x!==null?x+"Capture":null:x;v=[];for(var c=d,f;c!==null;){f=c;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,p!==null&&(w=Mr(c,p),w!=null&&v.push(Vr(c,w,f)))),j)break;c=c.return}0<v.length&&(x=new y(x,S,null,n,m),h.push({event:x,listeners:v}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",x&&n!==Kl&&(S=n.relatedTarget||n.fromElement)&&(nn(S)||S[yt]))break e;if((y||x)&&(x=m.window===m?m:(x=m.ownerDocument)?x.defaultView||x.parentWindow:window,y?(S=n.relatedTarget||n.toElement,y=d,S=S?nn(S):null,S!==null&&(j=vn(S),S!==j||S.tag!==5&&S.tag!==6)&&(S=null)):(y=null,S=d),y!==S)){if(v=ru,w="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=ou,w="onPointerLeave",p="onPointerEnter",c="pointer"),j=y==null?x:Nn(y),f=S==null?x:Nn(S),x=new v(w,c+"leave",y,n,m),x.target=j,x.relatedTarget=f,w=null,nn(m)===d&&(v=new v(p,c+"enter",S,n,m),v.target=f,v.relatedTarget=j,w=v),j=w,y&&S)t:{for(v=y,p=S,c=0,f=v;f;f=Sn(f))c++;for(f=0,w=p;w;w=Sn(w))f++;for(;0<c-f;)v=Sn(v),c--;for(;0<f-c;)p=Sn(p),f--;for(;c--;){if(v===p||p!==null&&v===p.alternate)break t;v=Sn(v),p=Sn(p)}v=null}else v=null;y!==null&&gu(h,x,y,v,!1),S!==null&&j!==null&&gu(h,j,S,v,!0)}}e:{if(x=d?Nn(d):window,y=x.nodeName&&x.nodeName.toLowerCase(),y==="select"||y==="input"&&x.type==="file")var E=m0;else if(su(x))if(Id)E=y0;else{E=x0;var C=g0}else(y=x.nodeName)&&y.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(E=v0);if(E&&(E=E(e,d))){Td(h,E,n,m);break e}C&&C(e,x,d),e==="focusout"&&(C=x._wrapperState)&&C.controlled&&x.type==="number"&&Wl(x,"number",x.value)}switch(C=d?Nn(d):window,e){case"focusin":(su(C)||C.contentEditable==="true")&&(_n=C,na=d,zr=null);break;case"focusout":zr=na=_n=null;break;case"mousedown":ra=!0;break;case"contextmenu":case"mouseup":case"dragend":ra=!1,fu(h,n,m);break;case"selectionchange":if(S0)break;case"keydown":case"keyup":fu(h,n,m)}var b;if(rs)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else $n?Nd(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Ld&&n.locale!=="ko"&&($n||_!=="onCompositionStart"?_==="onCompositionEnd"&&$n&&(b=_d()):(Nt=m,es="value"in Nt?Nt.value:Nt.textContent,$n=!0)),C=ro(d,_),0<C.length&&(_=new iu(_,e,null,n,m),h.push({event:_,listeners:C}),b?_.data=b:(b=Rd(n),b!==null&&(_.data=b)))),(b=c0?d0(e,n):p0(e,n))&&(d=ro(d,"onBeforeInput"),0<d.length&&(m=new iu("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:d}),m.data=b))}Hd(h,t)})}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ro(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Mr(e,n),o!=null&&r.unshift(Vr(e,o,i)),o=Mr(e,t),o!=null&&r.push(Vr(e,o,i))),e=e.return}return r}function Sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gu(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,i?(u=Mr(n,o),u!=null&&l.unshift(Vr(n,u,s))):i||(u=Mr(n,o),u!=null&&l.push(Vr(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var E0=/\r\n?/g,P0=/\u0000|\uFFFD/g;function xu(e){return(typeof e=="string"?e:""+e).replace(E0,`
`).replace(P0,"")}function wi(e,t,n){if(t=xu(t),xu(e)!==t&&n)throw Error(P(425))}function io(){}var ia=null,oa=null;function la(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var aa=typeof setTimeout=="function"?setTimeout:void 0,z0=typeof clearTimeout=="function"?clearTimeout:void 0,vu=typeof Promise=="function"?Promise:void 0,$0=typeof queueMicrotask=="function"?queueMicrotask:typeof vu<"u"?function(e){return vu.resolve(null).then(e).catch(_0)}:aa;function _0(e){setTimeout(function(){throw e})}function dl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Fr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Fr(t)}function Dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function yu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var lr=Math.random().toString(36).slice(2),at="__reactFiber$"+lr,Wr="__reactProps$"+lr,yt="__reactContainer$"+lr,sa="__reactEvents$"+lr,L0="__reactListeners$"+lr,N0="__reactHandles$"+lr;function nn(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=yu(e);e!==null;){if(n=e[at])return n;e=yu(e)}return t}e=n,n=e.parentNode}return null}function ri(e){return e=e[at]||e[yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Lo(e){return e[Wr]||null}var ua=[],Rn=-1;function Gt(e){return{current:e}}function G(e){0>Rn||(e.current=ua[Rn],ua[Rn]=null,Rn--)}function W(e,t){Rn++,ua[Rn]=e.current,e.current=t}var Ht={},ve=Gt(Ht),ze=Gt(!1),pn=Ht;function Gn(e,t){var n=e.type.contextTypes;if(!n)return Ht;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function $e(e){return e=e.childContextTypes,e!=null}function oo(){G(ze),G(ve)}function wu(e,t,n){if(ve.current!==Ht)throw Error(P(168));W(ve,t),W(ze,n)}function Gd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,gh(e)||"Unknown",i));return ee({},n,r)}function lo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ht,pn=ve.current,W(ve,e),W(ze,ze.current),!0}function ku(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=Gd(e,t,pn),r.__reactInternalMemoizedMergedChildContext=e,G(ze),G(ve),W(ve,e)):G(ze),W(ze,n)}var ht=null,No=!1,pl=!1;function Qd(e){ht===null?ht=[e]:ht.push(e)}function R0(e){No=!0,Qd(e)}function Qt(){if(!pl&&ht!==null){pl=!0;var e=0,t=U;try{var n=ht;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ht=null,No=!1}catch(i){throw ht!==null&&(ht=ht.slice(e+1)),yd(Xa,Qt),i}finally{U=t,pl=!1}}return null}var Tn=[],In=0,ao=null,so=0,Ae=[],Be=0,fn=null,mt=1,gt="";function en(e,t){Tn[In++]=so,Tn[In++]=ao,ao=e,so=t}function Kd(e,t,n){Ae[Be++]=mt,Ae[Be++]=gt,Ae[Be++]=fn,fn=e;var r=mt;e=gt;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var o=32-qe(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,mt=1<<32-qe(t)+i|n<<i|r,gt=o+e}else mt=1<<o|n<<i|r,gt=e}function os(e){e.return!==null&&(en(e,1),Kd(e,1,0))}function ls(e){for(;e===ao;)ao=Tn[--In],Tn[In]=null,so=Tn[--In],Tn[In]=null;for(;e===fn;)fn=Ae[--Be],Ae[Be]=null,gt=Ae[--Be],Ae[Be]=null,mt=Ae[--Be],Ae[Be]=null}var Te=null,Re=null,K=!1,Je=null;function Xd(e,t){var n=Ue(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Su(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Te=e,Re=Dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Te=e,Re=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=fn!==null?{id:mt,overflow:gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ue(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Te=e,Re=null,!0):!1;default:return!1}}function ca(e){return(e.mode&1)!==0&&(e.flags&128)===0}function da(e){if(K){var t=Re;if(t){var n=t;if(!Su(e,t)){if(ca(e))throw Error(P(418));t=Dt(n.nextSibling);var r=Te;t&&Su(e,t)?Xd(r,n):(e.flags=e.flags&-4097|2,K=!1,Te=e)}}else{if(ca(e))throw Error(P(418));e.flags=e.flags&-4097|2,K=!1,Te=e}}}function ju(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function ki(e){if(e!==Te)return!1;if(!K)return ju(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!la(e.type,e.memoizedProps)),t&&(t=Re)){if(ca(e))throw Zd(),Error(P(418));for(;t;)Xd(e,t),t=Dt(t.nextSibling)}if(ju(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Re=Dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Re=null}}else Re=Te?Dt(e.stateNode.nextSibling):null;return!0}function Zd(){for(var e=Re;e;)e=Dt(e.nextSibling)}function Qn(){Re=Te=null,K=!1}function as(e){Je===null?Je=[e]:Je.push(e)}var T0=St.ReactCurrentBatchConfig;function hr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function Si(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Cu(e){var t=e._init;return t(e._payload)}function Jd(e){function t(p,c){if(e){var f=p.deletions;f===null?(p.deletions=[c],p.flags|=16):f.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function i(p,c){return p=Ut(p,c),p.index=0,p.sibling=null,p}function o(p,c,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<c?(p.flags|=2,c):f):(p.flags|=2,c)):(p.flags|=1048576,c)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,f,w){return c===null||c.tag!==6?(c=yl(f,p.mode,w),c.return=p,c):(c=i(c,f),c.return=p,c)}function u(p,c,f,w){var E=f.type;return E===zn?m(p,c,f.props.children,w,f.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Pt&&Cu(E)===c.type)?(w=i(c,f.props),w.ref=hr(p,c,f),w.return=p,w):(w=Wi(f.type,f.key,f.props,null,p.mode,w),w.ref=hr(p,c,f),w.return=p,w)}function d(p,c,f,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=wl(f,p.mode,w),c.return=p,c):(c=i(c,f.children||[]),c.return=p,c)}function m(p,c,f,w,E){return c===null||c.tag!==7?(c=sn(f,p.mode,w,E),c.return=p,c):(c=i(c,f),c.return=p,c)}function h(p,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=yl(""+c,p.mode,f),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case di:return f=Wi(c.type,c.key,c.props,null,p.mode,f),f.ref=hr(p,null,c),f.return=p,f;case Pn:return c=wl(c,p.mode,f),c.return=p,c;case Pt:var w=c._init;return h(p,w(c._payload),f)}if(wr(c)||ur(c))return c=sn(c,p.mode,f,null),c.return=p,c;Si(p,c)}return null}function x(p,c,f,w){var E=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return E!==null?null:s(p,c,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case di:return f.key===E?u(p,c,f,w):null;case Pn:return f.key===E?d(p,c,f,w):null;case Pt:return E=f._init,x(p,c,E(f._payload),w)}if(wr(f)||ur(f))return E!==null?null:m(p,c,f,w,null);Si(p,f)}return null}function y(p,c,f,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(f)||null,s(c,p,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case di:return p=p.get(w.key===null?f:w.key)||null,u(c,p,w,E);case Pn:return p=p.get(w.key===null?f:w.key)||null,d(c,p,w,E);case Pt:var C=w._init;return y(p,c,f,C(w._payload),E)}if(wr(w)||ur(w))return p=p.get(f)||null,m(c,p,w,E,null);Si(c,w)}return null}function S(p,c,f,w){for(var E=null,C=null,b=c,_=c=0,z=null;b!==null&&_<f.length;_++){b.index>_?(z=b,b=null):z=b.sibling;var N=x(p,b,f[_],w);if(N===null){b===null&&(b=z);break}e&&b&&N.alternate===null&&t(p,b),c=o(N,c,_),C===null?E=N:C.sibling=N,C=N,b=z}if(_===f.length)return n(p,b),K&&en(p,_),E;if(b===null){for(;_<f.length;_++)b=h(p,f[_],w),b!==null&&(c=o(b,c,_),C===null?E=b:C.sibling=b,C=b);return K&&en(p,_),E}for(b=r(p,b);_<f.length;_++)z=y(b,p,_,f[_],w),z!==null&&(e&&z.alternate!==null&&b.delete(z.key===null?_:z.key),c=o(z,c,_),C===null?E=z:C.sibling=z,C=z);return e&&b.forEach(function(X){return t(p,X)}),K&&en(p,_),E}function v(p,c,f,w){var E=ur(f);if(typeof E!="function")throw Error(P(150));if(f=E.call(f),f==null)throw Error(P(151));for(var C=E=null,b=c,_=c=0,z=null,N=f.next();b!==null&&!N.done;_++,N=f.next()){b.index>_?(z=b,b=null):z=b.sibling;var X=x(p,b,N.value,w);if(X===null){b===null&&(b=z);break}e&&b&&X.alternate===null&&t(p,b),c=o(X,c,_),C===null?E=X:C.sibling=X,C=X,b=z}if(N.done)return n(p,b),K&&en(p,_),E;if(b===null){for(;!N.done;_++,N=f.next())N=h(p,N.value,w),N!==null&&(c=o(N,c,_),C===null?E=N:C.sibling=N,C=N);return K&&en(p,_),E}for(b=r(p,b);!N.done;_++,N=f.next())N=y(b,p,_,N.value,w),N!==null&&(e&&N.alternate!==null&&b.delete(N.key===null?_:N.key),c=o(N,c,_),C===null?E=N:C.sibling=N,C=N);return e&&b.forEach(function(Q){return t(p,Q)}),K&&en(p,_),E}function j(p,c,f,w){if(typeof f=="object"&&f!==null&&f.type===zn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case di:e:{for(var E=f.key,C=c;C!==null;){if(C.key===E){if(E=f.type,E===zn){if(C.tag===7){n(p,C.sibling),c=i(C,f.props.children),c.return=p,p=c;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Pt&&Cu(E)===C.type){n(p,C.sibling),c=i(C,f.props),c.ref=hr(p,C,f),c.return=p,p=c;break e}n(p,C);break}else t(p,C);C=C.sibling}f.type===zn?(c=sn(f.props.children,p.mode,w,f.key),c.return=p,p=c):(w=Wi(f.type,f.key,f.props,null,p.mode,w),w.ref=hr(p,c,f),w.return=p,p=w)}return l(p);case Pn:e:{for(C=f.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(p,c.sibling),c=i(c,f.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=wl(f,p.mode,w),c.return=p,p=c}return l(p);case Pt:return C=f._init,j(p,c,C(f._payload),w)}if(wr(f))return S(p,c,f,w);if(ur(f))return v(p,c,f,w);Si(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(p,c.sibling),c=i(c,f),c.return=p,p=c):(n(p,c),c=yl(f,p.mode,w),c.return=p,p=c),l(p)):n(p,c)}return j}var Kn=Jd(!0),qd=Jd(!1),uo=Gt(null),co=null,Mn=null,ss=null;function us(){ss=Mn=co=null}function cs(e){var t=uo.current;G(uo),e._currentValue=t}function pa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Wn(e,t){co=e,ss=Mn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ee=!0),e.firstContext=null)}function We(e){var t=e._currentValue;if(ss!==e)if(e={context:e,memoizedValue:t,next:null},Mn===null){if(co===null)throw Error(P(308));Mn=e,co.dependencies={lanes:0,firstContext:e}}else Mn=Mn.next=e;return t}var rn=null;function ds(e){rn===null?rn=[e]:rn.push(e)}function ep(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ds(t)):(n.next=i.next,i.next=n),t.interleaved=n,wt(e,r)}function wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var zt=!1;function ps(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function xt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,wt(e,n)}return i=r.interleaved,i===null?(t.next=t,ds(r)):(t.next=i.next,i.next=t),r.interleaved=t,wt(e,n)}function Di(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Za(e,n)}}function bu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function po(e,t,n,r){var i=e.updateQueue;zt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,d=u.next;u.next=null,l===null?o=d:l.next=d,l=u;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==l&&(s===null?m.firstBaseUpdate=d:s.next=d,m.lastBaseUpdate=u))}if(o!==null){var h=i.baseState;l=0,m=d=u=null,s=o;do{var x=s.lane,y=s.eventTime;if((r&x)===x){m!==null&&(m=m.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var S=e,v=s;switch(x=t,y=n,v.tag){case 1:if(S=v.payload,typeof S=="function"){h=S.call(y,h,x);break e}h=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=v.payload,x=typeof S=="function"?S.call(y,h,x):S,x==null)break e;h=ee({},h,x);break e;case 2:zt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,x=i.effects,x===null?i.effects=[s]:x.push(s))}else y={eventTime:y,lane:x,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(d=m=y,u=h):m=m.next=y,l|=x;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;x=s,s=x.next,x.next=null,i.lastBaseUpdate=x,i.shared.pending=null}}while(!0);if(m===null&&(u=h),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);mn|=l,e.lanes=l,e.memoizedState=h}}function Eu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var ii={},ut=Gt(ii),Hr=Gt(ii),Yr=Gt(ii);function on(e){if(e===ii)throw Error(P(174));return e}function fs(e,t){switch(W(Yr,t),W(Hr,e),W(ut,ii),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Yl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Yl(t,e)}G(ut),W(ut,t)}function Xn(){G(ut),G(Hr),G(Yr)}function np(e){on(Yr.current);var t=on(ut.current),n=Yl(t,e.type);t!==n&&(W(Hr,e),W(ut,n))}function hs(e){Hr.current===e&&(G(ut),G(Hr))}var J=Gt(0);function fo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fl=[];function ms(){for(var e=0;e<fl.length;e++)fl[e]._workInProgressVersionPrimary=null;fl.length=0}var Fi=St.ReactCurrentDispatcher,hl=St.ReactCurrentBatchConfig,hn=0,q=null,le=null,ue=null,ho=!1,$r=!1,Gr=0,I0=0;function me(){throw Error(P(321))}function gs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function xs(e,t,n,r,i,o){if(hn=o,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fi.current=e===null||e.memoizedState===null?F0:A0,e=n(r,i),$r){o=0;do{if($r=!1,Gr=0,25<=o)throw Error(P(301));o+=1,ue=le=null,t.updateQueue=null,Fi.current=B0,e=n(r,i)}while($r)}if(Fi.current=mo,t=le!==null&&le.next!==null,hn=0,ue=le=q=null,ho=!1,t)throw Error(P(300));return e}function vs(){var e=Gr!==0;return Gr=0,e}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?q.memoizedState=ue=e:ue=ue.next=e,ue}function He(){if(le===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=ue===null?q.memoizedState:ue.next;if(t!==null)ue=t,le=e;else{if(e===null)throw Error(P(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ue===null?q.memoizedState=ue=e:ue=ue.next=e}return ue}function Qr(e,t){return typeof t=="function"?t(e):t}function ml(e){var t=He(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=le,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,u=null,d=o;do{var m=d.lane;if((hn&m)===m)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=h,l=r):u=u.next=h,q.lanes|=m,mn|=m}d=d.next}while(d!==null&&d!==o);u===null?l=r:u.next=s,nt(r,t.memoizedState)||(Ee=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,q.lanes|=o,mn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function gl(e){var t=He(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);nt(o,t.memoizedState)||(Ee=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function rp(){}function ip(e,t){var n=q,r=He(),i=t(),o=!nt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ee=!0),r=r.queue,ys(ap.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,Kr(9,lp.bind(null,n,r,i,t),void 0,null),de===null)throw Error(P(349));hn&30||op(n,t,i)}return i}function op(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function lp(e,t,n,r){t.value=n,t.getSnapshot=r,sp(t)&&up(e)}function ap(e,t,n){return n(function(){sp(t)&&up(e)})}function sp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function up(e){var t=wt(e,1);t!==null&&et(t,e,1,-1)}function Pu(e){var t=ot();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qr,lastRenderedState:e},t.queue=e,e=e.dispatch=D0.bind(null,q,e),[t.memoizedState,e]}function Kr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function cp(){return He().memoizedState}function Ai(e,t,n,r){var i=ot();q.flags|=e,i.memoizedState=Kr(1|t,n,void 0,r===void 0?null:r)}function Ro(e,t,n,r){var i=He();r=r===void 0?null:r;var o=void 0;if(le!==null){var l=le.memoizedState;if(o=l.destroy,r!==null&&gs(r,l.deps)){i.memoizedState=Kr(t,n,o,r);return}}q.flags|=e,i.memoizedState=Kr(1|t,n,o,r)}function zu(e,t){return Ai(8390656,8,e,t)}function ys(e,t){return Ro(2048,8,e,t)}function dp(e,t){return Ro(4,2,e,t)}function pp(e,t){return Ro(4,4,e,t)}function fp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hp(e,t,n){return n=n!=null?n.concat([e]):null,Ro(4,4,fp.bind(null,t,e),n)}function ws(){}function mp(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function gp(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function xp(e,t,n){return hn&21?(nt(n,t)||(n=Sd(),q.lanes|=n,mn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ee=!0),e.memoizedState=n)}function M0(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=hl.transition;hl.transition={};try{e(!1),t()}finally{U=n,hl.transition=r}}function vp(){return He().memoizedState}function O0(e,t,n){var r=Bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},yp(e))wp(t,n);else if(n=ep(e,t,n,r),n!==null){var i=ke();et(n,e,r,i),kp(n,t,r)}}function D0(e,t,n){var r=Bt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(yp(e))wp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,nt(s,l)){var u=t.interleaved;u===null?(i.next=i,ds(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=ep(e,t,i,r),n!==null&&(i=ke(),et(n,e,r,i),kp(n,t,r))}}function yp(e){var t=e.alternate;return e===q||t!==null&&t===q}function wp(e,t){$r=ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function kp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Za(e,n)}}var mo={readContext:We,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},F0={readContext:We,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:zu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ai(4194308,4,fp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ai(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ai(4,2,e,t)},useMemo:function(e,t){var n=ot();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ot();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=O0.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:Pu,useDebugValue:ws,useDeferredValue:function(e){return ot().memoizedState=e},useTransition:function(){var e=Pu(!1),t=e[0];return e=M0.bind(null,e[1]),ot().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,i=ot();if(K){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),de===null)throw Error(P(349));hn&30||op(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,zu(ap.bind(null,r,o,e),[e]),r.flags|=2048,Kr(9,lp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ot(),t=de.identifierPrefix;if(K){var n=gt,r=mt;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Gr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=I0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},A0={readContext:We,useCallback:mp,useContext:We,useEffect:ys,useImperativeHandle:hp,useInsertionEffect:dp,useLayoutEffect:pp,useMemo:gp,useReducer:ml,useRef:cp,useState:function(){return ml(Qr)},useDebugValue:ws,useDeferredValue:function(e){var t=He();return xp(t,le.memoizedState,e)},useTransition:function(){var e=ml(Qr)[0],t=He().memoizedState;return[e,t]},useMutableSource:rp,useSyncExternalStore:ip,useId:vp,unstable_isNewReconciler:!1},B0={readContext:We,useCallback:mp,useContext:We,useEffect:ys,useImperativeHandle:hp,useInsertionEffect:dp,useLayoutEffect:pp,useMemo:gp,useReducer:gl,useRef:cp,useState:function(){return gl(Qr)},useDebugValue:ws,useDeferredValue:function(e){var t=He();return le===null?t.memoizedState=e:xp(t,le.memoizedState,e)},useTransition:function(){var e=gl(Qr)[0],t=He().memoizedState;return[e,t]},useMutableSource:rp,useSyncExternalStore:ip,useId:vp,unstable_isNewReconciler:!1};function Xe(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function fa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var To={isMounted:function(e){return(e=e._reactInternals)?vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),i=Bt(e),o=xt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Ft(e,o,i),t!==null&&(et(t,e,i,r),Di(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),i=Bt(e),o=xt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ft(e,o,i),t!==null&&(et(t,e,i,r),Di(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=Bt(e),i=xt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ft(e,i,r),t!==null&&(et(t,e,r,n),Di(t,e,r))}};function $u(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Br(n,r)||!Br(i,o):!0}function Sp(e,t,n){var r=!1,i=Ht,o=t.contextType;return typeof o=="object"&&o!==null?o=We(o):(i=$e(t)?pn:ve.current,r=t.contextTypes,o=(r=r!=null)?Gn(e,i):Ht),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=To,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function _u(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&To.enqueueReplaceState(t,t.state,null)}function ha(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ps(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=We(o):(o=$e(t)?pn:ve.current,i.context=Gn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(fa(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&To.enqueueReplaceState(i,i.state,null),po(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Zn(e,t){try{var n="",r=t;do n+=mh(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function xl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ma(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var U0=typeof WeakMap=="function"?WeakMap:Map;function jp(e,t,n){n=xt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){xo||(xo=!0,ba=r),ma(e,t)},n}function Cp(e,t,n){n=xt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ma(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ma(e,t),typeof r!="function"&&(At===null?At=new Set([this]):At.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Lu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new U0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=nm.bind(null,e,t,n),t.then(e,e))}function Nu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ru(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=xt(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e)}var V0=St.ReactCurrentOwner,Ee=!1;function we(e,t,n,r){t.child=e===null?qd(t,null,n,r):Kn(t,e.child,n,r)}function Tu(e,t,n,r,i){n=n.render;var o=t.ref;return Wn(t,i),r=xs(e,t,n,r,o,i),n=vs(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kt(e,t,i)):(K&&n&&os(t),t.flags|=1,we(e,t,r,i),t.child)}function Iu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!zs(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,bp(e,t,o,r,i)):(e=Wi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Br,n(l,r)&&e.ref===t.ref)return kt(e,t,i)}return t.flags|=1,e=Ut(o,r),e.ref=t.ref,e.return=t,t.child=e}function bp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Br(o,r)&&e.ref===t.ref)if(Ee=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ee=!0);else return t.lanes=e.lanes,kt(e,t,i)}return ga(e,t,n,r,i)}function Ep(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Dn,Ne),Ne|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Dn,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,W(Dn,Ne),Ne|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,W(Dn,Ne),Ne|=r;return we(e,t,i,n),t.child}function Pp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ga(e,t,n,r,i){var o=$e(n)?pn:ve.current;return o=Gn(t,o),Wn(t,i),n=xs(e,t,n,r,o,i),r=vs(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kt(e,t,i)):(K&&r&&os(t),t.flags|=1,we(e,t,n,i),t.child)}function Mu(e,t,n,r,i){if($e(n)){var o=!0;lo(t)}else o=!1;if(Wn(t,i),t.stateNode===null)Bi(e,t),Sp(t,n,r),ha(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=We(d):(d=$e(n)?pn:ve.current,d=Gn(t,d));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==d)&&_u(t,l,r,d),zt=!1;var x=t.memoizedState;l.state=x,po(t,r,l,i),u=t.memoizedState,s!==r||x!==u||ze.current||zt?(typeof m=="function"&&(fa(t,n,m,r),u=t.memoizedState),(s=zt||$u(t,n,s,r,x,u,d))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=d,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,tp(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Xe(t.type,s),l.props=d,h=t.pendingProps,x=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=We(u):(u=$e(n)?pn:ve.current,u=Gn(t,u));var y=n.getDerivedStateFromProps;(m=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==h||x!==u)&&_u(t,l,r,u),zt=!1,x=t.memoizedState,l.state=x,po(t,r,l,i);var S=t.memoizedState;s!==h||x!==S||ze.current||zt?(typeof y=="function"&&(fa(t,n,y,r),S=t.memoizedState),(d=zt||$u(t,n,d,r,x,S,u)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,S,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,S,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),l.props=r,l.state=S,l.context=u,r=d):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),r=!1)}return xa(e,t,n,r,o,i)}function xa(e,t,n,r,i,o){Pp(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&ku(t,n,!1),kt(e,t,o);r=t.stateNode,V0.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Kn(t,e.child,null,o),t.child=Kn(t,null,s,o)):we(e,t,s,o),t.memoizedState=r.state,i&&ku(t,n,!0),t.child}function zp(e){var t=e.stateNode;t.pendingContext?wu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&wu(e,t.context,!1),fs(e,t.containerInfo)}function Ou(e,t,n,r,i){return Qn(),as(i),t.flags|=256,we(e,t,n,r),t.child}var va={dehydrated:null,treeContext:null,retryLane:0};function ya(e){return{baseLanes:e,cachePool:null,transitions:null}}function $p(e,t,n){var r=t.pendingProps,i=J.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(J,i&1),e===null)return da(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Oo(l,r,0,null),e=sn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ya(n),t.memoizedState=va,e):ks(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return W0(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Ut(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Ut(s,o):(o=sn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?ya(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=va,r}return o=e.child,e=o.sibling,r=Ut(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ks(e,t){return t=Oo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ji(e,t,n,r){return r!==null&&as(r),Kn(t,e.child,null,n),e=ks(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function W0(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=xl(Error(P(422))),ji(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Oo({mode:"visible",children:r.children},i,0,null),o=sn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Kn(t,e.child,null,l),t.child.memoizedState=ya(l),t.memoizedState=va,o);if(!(t.mode&1))return ji(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(P(419)),r=xl(o,r,void 0),ji(e,t,l,r)}if(s=(l&e.childLanes)!==0,Ee||s){if(r=de,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,wt(e,i),et(r,e,i,-1))}return Ps(),r=xl(Error(P(421))),ji(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=rm.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Re=Dt(i.nextSibling),Te=t,K=!0,Je=null,e!==null&&(Ae[Be++]=mt,Ae[Be++]=gt,Ae[Be++]=fn,mt=e.id,gt=e.overflow,fn=t),t=ks(t,r.children),t.flags|=4096,t)}function Du(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),pa(e.return,t,n)}function vl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function _p(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(we(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Du(e,n,t);else if(e.tag===19)Du(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(J,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),vl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}vl(t,!0,n,null,o);break;case"together":vl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),mn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Ut(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ut(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function H0(e,t,n){switch(t.tag){case 3:zp(t),Qn();break;case 5:np(t);break;case 1:$e(t.type)&&lo(t);break;case 4:fs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(uo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?$p(e,t,n):(W(J,J.current&1),e=kt(e,t,n),e!==null?e.sibling:null);W(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return _p(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,Ep(e,t,n)}return kt(e,t,n)}var Lp,wa,Np,Rp;Lp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wa=function(){};Np=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,on(ut.current);var o=null;switch(n){case"input":i=Ul(e,i),r=Ul(e,r),o=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),o=[];break;case"textarea":i=Hl(e,i),r=Hl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=io)}Gl(n,r);var l;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var s=i[d];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Tr.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(s=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Tr.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&H("scroll",e),o||s===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};Rp=function(e,t,n,r){n!==r&&(t.flags|=4)};function mr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Y0(e,t,n){var r=t.pendingProps;switch(ls(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return $e(t.type)&&oo(),ge(t),null;case 3:return r=t.stateNode,Xn(),G(ze),G(ve),ms(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ki(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Je!==null&&(za(Je),Je=null))),wa(e,t),ge(t),null;case 5:hs(t);var i=on(Yr.current);if(n=t.type,e!==null&&t.stateNode!=null)Np(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return ge(t),null}if(e=on(ut.current),ki(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[at]=t,r[Wr]=o,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<Sr.length;i++)H(Sr[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Gs(r,o),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},H("invalid",r);break;case"textarea":Ks(r,o),H("invalid",r)}Gl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&wi(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&wi(r.textContent,s,e),i=["children",""+s]):Tr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&H("scroll",r)}switch(n){case"input":pi(r),Qs(r,o,!0);break;case"textarea":pi(r),Xs(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=io)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ad(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[at]=t,e[Wr]=r,Lp(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ql(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<Sr.length;i++)H(Sr[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":Gs(e,r),i=Ul(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),H("invalid",e);break;case"textarea":Ks(e,r),i=Hl(e,r),H("invalid",e);break;default:i=r}Gl(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?cd(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&sd(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ir(e,u):typeof u=="number"&&Ir(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Tr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&H("scroll",e):u!=null&&Ha(e,o,u,l))}switch(n){case"input":pi(e),Qs(e,r,!1);break;case"textarea":pi(e),Xs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?An(e,!!r.multiple,o,!1):r.defaultValue!=null&&An(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=io)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ge(t),null;case 6:if(e&&t.stateNode!=null)Rp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=on(Yr.current),on(ut.current),ki(t)){if(r=t.stateNode,n=t.memoizedProps,r[at]=t,(o=r.nodeValue!==n)&&(e=Te,e!==null))switch(e.tag){case 3:wi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[at]=t,t.stateNode=r}return ge(t),null;case 13:if(G(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Re!==null&&t.mode&1&&!(t.flags&128))Zd(),Qn(),t.flags|=98560,o=!1;else if(o=ki(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(P(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(P(317));o[at]=t}else Qn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ge(t),o=!1}else Je!==null&&(za(Je),Je=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?ae===0&&(ae=3):Ps())),t.updateQueue!==null&&(t.flags|=4),ge(t),null);case 4:return Xn(),wa(e,t),e===null&&Ur(t.stateNode.containerInfo),ge(t),null;case 10:return cs(t.type._context),ge(t),null;case 17:return $e(t.type)&&oo(),ge(t),null;case 19:if(G(J),o=t.memoizedState,o===null)return ge(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)mr(o,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=fo(e),l!==null){for(t.flags|=128,mr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(J,J.current&1|2),t.child}e=e.sibling}o.tail!==null&&ne()>Jn&&(t.flags|=128,r=!0,mr(o,!1),t.lanes=4194304)}else{if(!r)if(e=fo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!K)return ge(t),null}else 2*ne()-o.renderingStartTime>Jn&&n!==1073741824&&(t.flags|=128,r=!0,mr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ne(),t.sibling=null,n=J.current,W(J,r?n&1|2:n&1),t):(ge(t),null);case 22:case 23:return Es(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ne&1073741824&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function G0(e,t){switch(ls(t),t.tag){case 1:return $e(t.type)&&oo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xn(),G(ze),G(ve),ms(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return hs(t),null;case 13:if(G(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Qn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(J),null;case 4:return Xn(),null;case 10:return cs(t.type._context),null;case 22:case 23:return Es(),null;case 24:return null;default:return null}}var Ci=!1,xe=!1,Q0=typeof WeakSet=="function"?WeakSet:Set,L=null;function On(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function ka(e,t,n){try{n()}catch(r){te(e,t,r)}}var Fu=!1;function K0(e,t){if(ia=to,e=Dd(),is(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,d=0,m=0,h=e,x=null;t:for(;;){for(var y;h!==n||i!==0&&h.nodeType!==3||(s=l+i),h!==o||r!==0&&h.nodeType!==3||(u=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(y=h.firstChild)!==null;)x=h,h=y;for(;;){if(h===e)break t;if(x===n&&++d===i&&(s=l),x===o&&++m===r&&(u=l),(y=h.nextSibling)!==null)break;h=x,x=h.parentNode}h=y}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(oa={focusedElem:e,selectionRange:n},to=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var v=S.memoizedProps,j=S.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:Xe(t.type,v),j);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(w){te(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return S=Fu,Fu=!1,S}function _r(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ka(t,n,o)}i=i.next}while(i!==r)}}function Io(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Sa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Tp(e){var t=e.alternate;t!==null&&(e.alternate=null,Tp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[at],delete t[Wr],delete t[sa],delete t[L0],delete t[N0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ip(e){return e.tag===5||e.tag===3||e.tag===4}function Au(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ip(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ja(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=io));else if(r!==4&&(e=e.child,e!==null))for(ja(e,t,n),e=e.sibling;e!==null;)ja(e,t,n),e=e.sibling}function Ca(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ca(e,t,n),e=e.sibling;e!==null;)Ca(e,t,n),e=e.sibling}var pe=null,Ze=!1;function Ct(e,t,n){for(n=n.child;n!==null;)Mp(e,t,n),n=n.sibling}function Mp(e,t,n){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(Po,n)}catch{}switch(n.tag){case 5:xe||On(n,t);case 6:var r=pe,i=Ze;pe=null,Ct(e,t,n),pe=r,Ze=i,pe!==null&&(Ze?(e=pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(Ze?(e=pe,n=n.stateNode,e.nodeType===8?dl(e.parentNode,n):e.nodeType===1&&dl(e,n),Fr(e)):dl(pe,n.stateNode));break;case 4:r=pe,i=Ze,pe=n.stateNode.containerInfo,Ze=!0,Ct(e,t,n),pe=r,Ze=i;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&ka(n,t,l),i=i.next}while(i!==r)}Ct(e,t,n);break;case 1:if(!xe&&(On(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){te(n,t,s)}Ct(e,t,n);break;case 21:Ct(e,t,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,Ct(e,t,n),xe=r):Ct(e,t,n);break;default:Ct(e,t,n)}}function Bu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Q0),t.forEach(function(r){var i=im.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ke(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:pe=s.stateNode,Ze=!1;break e;case 3:pe=s.stateNode.containerInfo,Ze=!0;break e;case 4:pe=s.stateNode.containerInfo,Ze=!0;break e}s=s.return}if(pe===null)throw Error(P(160));Mp(o,l,i),pe=null,Ze=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){te(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Op(t,e),t=t.sibling}function Op(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ke(t,e),it(e),r&4){try{_r(3,e,e.return),Io(3,e)}catch(v){te(e,e.return,v)}try{_r(5,e,e.return)}catch(v){te(e,e.return,v)}}break;case 1:Ke(t,e),it(e),r&512&&n!==null&&On(n,n.return);break;case 5:if(Ke(t,e),it(e),r&512&&n!==null&&On(n,n.return),e.flags&32){var i=e.stateNode;try{Ir(i,"")}catch(v){te(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&od(i,o),Ql(s,l);var d=Ql(s,o);for(l=0;l<u.length;l+=2){var m=u[l],h=u[l+1];m==="style"?cd(i,h):m==="dangerouslySetInnerHTML"?sd(i,h):m==="children"?Ir(i,h):Ha(i,m,h,d)}switch(s){case"input":Vl(i,o);break;case"textarea":ld(i,o);break;case"select":var x=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?An(i,!!o.multiple,y,!1):x!==!!o.multiple&&(o.defaultValue!=null?An(i,!!o.multiple,o.defaultValue,!0):An(i,!!o.multiple,o.multiple?[]:"",!1))}i[Wr]=o}catch(v){te(e,e.return,v)}}break;case 6:if(Ke(t,e),it(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){te(e,e.return,v)}}break;case 3:if(Ke(t,e),it(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fr(t.containerInfo)}catch(v){te(e,e.return,v)}break;case 4:Ke(t,e),it(e);break;case 13:Ke(t,e),it(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Cs=ne())),r&4&&Bu(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(xe=(d=xe)||m,Ke(t,e),xe=d):Ke(t,e),it(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(L=e,m=e.child;m!==null;){for(h=L=m;L!==null;){switch(x=L,y=x.child,x.tag){case 0:case 11:case 14:case 15:_r(4,x,x.return);break;case 1:On(x,x.return);var S=x.stateNode;if(typeof S.componentWillUnmount=="function"){r=x,n=x.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(v){te(r,n,v)}}break;case 5:On(x,x.return);break;case 22:if(x.memoizedState!==null){Vu(h);continue}}y!==null?(y.return=x,L=y):Vu(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{i=h.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,u=h.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=ud("display",l))}catch(v){te(e,e.return,v)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(v){te(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ke(t,e),it(e),r&4&&Bu(e);break;case 21:break;default:Ke(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ip(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ir(i,""),r.flags&=-33);var o=Au(e);Ca(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Au(e);ja(e,s,l);break;default:throw Error(P(161))}}catch(u){te(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function X0(e,t,n){L=e,Dp(e)}function Dp(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Ci;if(!l){var s=i.alternate,u=s!==null&&s.memoizedState!==null||xe;s=Ci;var d=xe;if(Ci=l,(xe=u)&&!d)for(L=i;L!==null;)l=L,u=l.child,l.tag===22&&l.memoizedState!==null?Wu(i):u!==null?(u.return=l,L=u):Wu(i);for(;o!==null;)L=o,Dp(o),o=o.sibling;L=i,Ci=s,xe=d}Uu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,L=o):Uu(e)}}function Uu(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||Io(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Xe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Eu(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Eu(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Fr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}xe||t.flags&512&&Sa(t)}catch(x){te(t,t.return,x)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function Vu(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function Wu(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Io(4,t)}catch(u){te(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){te(t,i,u)}}var o=t.return;try{Sa(t)}catch(u){te(t,o,u)}break;case 5:var l=t.return;try{Sa(t)}catch(u){te(t,l,u)}}}catch(u){te(t,t.return,u)}if(t===e){L=null;break}var s=t.sibling;if(s!==null){s.return=t.return,L=s;break}L=t.return}}var Z0=Math.ceil,go=St.ReactCurrentDispatcher,Ss=St.ReactCurrentOwner,Ve=St.ReactCurrentBatchConfig,D=0,de=null,ie=null,fe=0,Ne=0,Dn=Gt(0),ae=0,Xr=null,mn=0,Mo=0,js=0,Lr=null,be=null,Cs=0,Jn=1/0,pt=null,xo=!1,ba=null,At=null,bi=!1,Rt=null,vo=0,Nr=0,Ea=null,Ui=-1,Vi=0;function ke(){return D&6?ne():Ui!==-1?Ui:Ui=ne()}function Bt(e){return e.mode&1?D&2&&fe!==0?fe&-fe:T0.transition!==null?(Vi===0&&(Vi=Sd()),Vi):(e=U,e!==0||(e=window.event,e=e===void 0?16:$d(e.type)),e):1}function et(e,t,n,r){if(50<Nr)throw Nr=0,Ea=null,Error(P(185));ti(e,n,r),(!(D&2)||e!==de)&&(e===de&&(!(D&2)&&(Mo|=n),ae===4&&Lt(e,fe)),_e(e,r),n===1&&D===0&&!(t.mode&1)&&(Jn=ne()+500,No&&Qt()))}function _e(e,t){var n=e.callbackNode;Th(e,t);var r=eo(e,e===de?fe:0);if(r===0)n!==null&&qs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&qs(n),t===1)e.tag===0?R0(Hu.bind(null,e)):Qd(Hu.bind(null,e)),$0(function(){!(D&6)&&Qt()}),n=null;else{switch(jd(r)){case 1:n=Xa;break;case 4:n=wd;break;case 16:n=qi;break;case 536870912:n=kd;break;default:n=qi}n=Yp(n,Fp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Fp(e,t){if(Ui=-1,Vi=0,D&6)throw Error(P(327));var n=e.callbackNode;if(Hn()&&e.callbackNode!==n)return null;var r=eo(e,e===de?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=yo(e,r);else{t=r;var i=D;D|=2;var o=Bp();(de!==e||fe!==t)&&(pt=null,Jn=ne()+500,an(e,t));do try{em();break}catch(s){Ap(e,s)}while(!0);us(),go.current=o,D=i,ie!==null?t=0:(de=null,fe=0,t=ae)}if(t!==0){if(t===2&&(i=ql(e),i!==0&&(r=i,t=Pa(e,i))),t===1)throw n=Xr,an(e,0),Lt(e,r),_e(e,ne()),n;if(t===6)Lt(e,r);else{if(i=e.current.alternate,!(r&30)&&!J0(i)&&(t=yo(e,r),t===2&&(o=ql(e),o!==0&&(r=o,t=Pa(e,o))),t===1))throw n=Xr,an(e,0),Lt(e,r),_e(e,ne()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:tn(e,be,pt);break;case 3:if(Lt(e,r),(r&130023424)===r&&(t=Cs+500-ne(),10<t)){if(eo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=aa(tn.bind(null,e,be,pt),t);break}tn(e,be,pt);break;case 4:if(Lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-qe(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Z0(r/1960))-r,10<r){e.timeoutHandle=aa(tn.bind(null,e,be,pt),r);break}tn(e,be,pt);break;case 5:tn(e,be,pt);break;default:throw Error(P(329))}}}return _e(e,ne()),e.callbackNode===n?Fp.bind(null,e):null}function Pa(e,t){var n=Lr;return e.current.memoizedState.isDehydrated&&(an(e,t).flags|=256),e=yo(e,t),e!==2&&(t=be,be=n,t!==null&&za(t)),e}function za(e){be===null?be=e:be.push.apply(be,e)}function J0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!nt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Lt(e,t){for(t&=~js,t&=~Mo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-qe(t),r=1<<n;e[n]=-1,t&=~r}}function Hu(e){if(D&6)throw Error(P(327));Hn();var t=eo(e,0);if(!(t&1))return _e(e,ne()),null;var n=yo(e,t);if(e.tag!==0&&n===2){var r=ql(e);r!==0&&(t=r,n=Pa(e,r))}if(n===1)throw n=Xr,an(e,0),Lt(e,t),_e(e,ne()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tn(e,be,pt),_e(e,ne()),null}function bs(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(Jn=ne()+500,No&&Qt())}}function gn(e){Rt!==null&&Rt.tag===0&&!(D&6)&&Hn();var t=D;D|=1;var n=Ve.transition,r=U;try{if(Ve.transition=null,U=1,e)return e()}finally{U=r,Ve.transition=n,D=t,!(D&6)&&Qt()}}function Es(){Ne=Dn.current,G(Dn)}function an(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,z0(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(ls(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&oo();break;case 3:Xn(),G(ze),G(ve),ms();break;case 5:hs(r);break;case 4:Xn();break;case 13:G(J);break;case 19:G(J);break;case 10:cs(r.type._context);break;case 22:case 23:Es()}n=n.return}if(de=e,ie=e=Ut(e.current,null),fe=Ne=t,ae=0,Xr=null,js=Mo=mn=0,be=Lr=null,rn!==null){for(t=0;t<rn.length;t++)if(n=rn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}rn=null}return e}function Ap(e,t){do{var n=ie;try{if(us(),Fi.current=mo,ho){for(var r=q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ho=!1}if(hn=0,ue=le=q=null,$r=!1,Gr=0,Ss.current=null,n===null||n.return===null){ae=1,Xr=t,ie=null;break}e:{var o=e,l=n.return,s=n,u=t;if(t=fe,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,m=s,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var x=m.alternate;x?(m.updateQueue=x.updateQueue,m.memoizedState=x.memoizedState,m.lanes=x.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Nu(l);if(y!==null){y.flags&=-257,Ru(y,l,s,o,t),y.mode&1&&Lu(o,d,t),t=y,u=d;var S=t.updateQueue;if(S===null){var v=new Set;v.add(u),t.updateQueue=v}else S.add(u);break e}else{if(!(t&1)){Lu(o,d,t),Ps();break e}u=Error(P(426))}}else if(K&&s.mode&1){var j=Nu(l);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Ru(j,l,s,o,t),as(Zn(u,s));break e}}o=u=Zn(u,s),ae!==4&&(ae=2),Lr===null?Lr=[o]:Lr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=jp(o,u,t);bu(o,p);break e;case 1:s=u;var c=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(At===null||!At.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Cp(o,s,t);bu(o,w);break e}}o=o.return}while(o!==null)}Vp(n)}catch(E){t=E,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(!0)}function Bp(){var e=go.current;return go.current=mo,e===null?mo:e}function Ps(){(ae===0||ae===3||ae===2)&&(ae=4),de===null||!(mn&268435455)&&!(Mo&268435455)||Lt(de,fe)}function yo(e,t){var n=D;D|=2;var r=Bp();(de!==e||fe!==t)&&(pt=null,an(e,t));do try{q0();break}catch(i){Ap(e,i)}while(!0);if(us(),D=n,go.current=r,ie!==null)throw Error(P(261));return de=null,fe=0,ae}function q0(){for(;ie!==null;)Up(ie)}function em(){for(;ie!==null&&!bh();)Up(ie)}function Up(e){var t=Hp(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?Vp(e):ie=t,Ss.current=null}function Vp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=G0(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,ie=null;return}}else if(n=Y0(n,t,Ne),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);ae===0&&(ae=5)}function tn(e,t,n){var r=U,i=Ve.transition;try{Ve.transition=null,U=1,tm(e,t,n,r)}finally{Ve.transition=i,U=r}return null}function tm(e,t,n,r){do Hn();while(Rt!==null);if(D&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ih(e,o),e===de&&(ie=de=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bi||(bi=!0,Yp(qi,function(){return Hn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ve.transition,Ve.transition=null;var l=U;U=1;var s=D;D|=4,Ss.current=null,K0(e,n),Op(n,e),k0(oa),to=!!ia,oa=ia=null,e.current=n,X0(n),Eh(),D=s,U=l,Ve.transition=o}else e.current=n;if(bi&&(bi=!1,Rt=e,vo=i),o=e.pendingLanes,o===0&&(At=null),$h(n.stateNode),_e(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xo)throw xo=!1,e=ba,ba=null,e;return vo&1&&e.tag!==0&&Hn(),o=e.pendingLanes,o&1?e===Ea?Nr++:(Nr=0,Ea=e):Nr=0,Qt(),null}function Hn(){if(Rt!==null){var e=jd(vo),t=Ve.transition,n=U;try{if(Ve.transition=null,U=16>e?16:e,Rt===null)var r=!1;else{if(e=Rt,Rt=null,vo=0,D&6)throw Error(P(331));var i=D;for(D|=4,L=e.current;L!==null;){var o=L,l=o.child;if(L.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(L=d;L!==null;){var m=L;switch(m.tag){case 0:case 11:case 15:_r(8,m,o)}var h=m.child;if(h!==null)h.return=m,L=h;else for(;L!==null;){m=L;var x=m.sibling,y=m.return;if(Tp(m),m===d){L=null;break}if(x!==null){x.return=y,L=x;break}L=y}}}var S=o.alternate;if(S!==null){var v=S.child;if(v!==null){S.child=null;do{var j=v.sibling;v.sibling=null,v=j}while(v!==null)}}L=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,L=l;else e:for(;L!==null;){if(o=L,o.flags&2048)switch(o.tag){case 0:case 11:case 15:_r(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,L=p;break e}L=o.return}}var c=e.current;for(L=c;L!==null;){l=L;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,L=f;else e:for(l=c;L!==null;){if(s=L,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Io(9,s)}}catch(E){te(s,s.return,E)}if(s===l){L=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,L=w;break e}L=s.return}}if(D=i,Qt(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(Po,e)}catch{}r=!0}return r}finally{U=n,Ve.transition=t}}return!1}function Yu(e,t,n){t=Zn(n,t),t=jp(e,t,1),e=Ft(e,t,1),t=ke(),e!==null&&(ti(e,1,t),_e(e,t))}function te(e,t,n){if(e.tag===3)Yu(e,e,n);else for(;t!==null;){if(t.tag===3){Yu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(At===null||!At.has(r))){e=Zn(n,e),e=Cp(t,e,1),t=Ft(t,e,1),e=ke(),t!==null&&(ti(t,1,e),_e(t,e));break}}t=t.return}}function nm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,de===e&&(fe&n)===n&&(ae===4||ae===3&&(fe&130023424)===fe&&500>ne()-Cs?an(e,0):js|=n),_e(e,t)}function Wp(e,t){t===0&&(e.mode&1?(t=mi,mi<<=1,!(mi&130023424)&&(mi=4194304)):t=1);var n=ke();e=wt(e,t),e!==null&&(ti(e,t,n),_e(e,n))}function rm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Wp(e,n)}function im(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),Wp(e,n)}var Hp;Hp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ze.current)Ee=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ee=!1,H0(e,t,n);Ee=!!(e.flags&131072)}else Ee=!1,K&&t.flags&1048576&&Kd(t,so,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Bi(e,t),e=t.pendingProps;var i=Gn(t,ve.current);Wn(t,n),i=xs(null,t,r,e,i,n);var o=vs();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$e(r)?(o=!0,lo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ps(t),i.updater=To,t.stateNode=i,i._reactInternals=t,ha(t,r,e,n),t=xa(null,t,r,!0,o,n)):(t.tag=0,K&&o&&os(t),we(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Bi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=lm(r),e=Xe(r,e),i){case 0:t=ga(null,t,r,e,n);break e;case 1:t=Mu(null,t,r,e,n);break e;case 11:t=Tu(null,t,r,e,n);break e;case 14:t=Iu(null,t,r,Xe(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),ga(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),Mu(e,t,r,i,n);case 3:e:{if(zp(t),e===null)throw Error(P(387));r=t.pendingProps,o=t.memoizedState,i=o.element,tp(e,t),po(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Zn(Error(P(423)),t),t=Ou(e,t,r,n,i);break e}else if(r!==i){i=Zn(Error(P(424)),t),t=Ou(e,t,r,n,i);break e}else for(Re=Dt(t.stateNode.containerInfo.firstChild),Te=t,K=!0,Je=null,n=qd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qn(),r===i){t=kt(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return np(t),e===null&&da(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,la(r,i)?l=null:o!==null&&la(r,o)&&(t.flags|=32),Pp(e,t),we(e,t,l,n),t.child;case 6:return e===null&&da(t),null;case 13:return $p(e,t,n);case 4:return fs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Kn(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),Tu(e,t,r,i,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,W(uo,r._currentValue),r._currentValue=l,o!==null)if(nt(o.value,l)){if(o.children===i.children&&!ze.current){t=kt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=xt(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?u.next=u:(u.next=m.next,m.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),pa(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(P(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),pa(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}we(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Wn(t,n),i=We(i),r=r(i),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,i=Xe(r,t.pendingProps),i=Xe(r.type,i),Iu(e,t,r,i,n);case 15:return bp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),Bi(e,t),t.tag=1,$e(r)?(e=!0,lo(t)):e=!1,Wn(t,n),Sp(t,r,i),ha(t,r,i,n),xa(null,t,r,!0,e,n);case 19:return _p(e,t,n);case 22:return Ep(e,t,n)}throw Error(P(156,t.tag))};function Yp(e,t){return yd(e,t)}function om(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ue(e,t,n,r){return new om(e,t,n,r)}function zs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lm(e){if(typeof e=="function")return zs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ga)return 11;if(e===Qa)return 14}return 2}function Ut(e,t){var n=e.alternate;return n===null?(n=Ue(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")zs(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case zn:return sn(n.children,i,o,t);case Ya:l=8,i|=8;break;case Dl:return e=Ue(12,n,t,i|2),e.elementType=Dl,e.lanes=o,e;case Fl:return e=Ue(13,n,t,i),e.elementType=Fl,e.lanes=o,e;case Al:return e=Ue(19,n,t,i),e.elementType=Al,e.lanes=o,e;case nd:return Oo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ed:l=10;break e;case td:l=9;break e;case Ga:l=11;break e;case Qa:l=14;break e;case Pt:l=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Ue(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function sn(e,t,n,r){return e=Ue(7,e,r,t),e.lanes=n,e}function Oo(e,t,n,r){return e=Ue(22,e,r,t),e.elementType=nd,e.lanes=n,e.stateNode={isHidden:!1},e}function yl(e,t,n){return e=Ue(6,e,null,t),e.lanes=n,e}function wl(e,t,n){return t=Ue(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function am(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=el(0),this.expirationTimes=el(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=el(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $s(e,t,n,r,i,o,l,s,u){return e=new am(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ue(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ps(o),e}function sm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Gp(e){if(!e)return Ht;e=e._reactInternals;e:{if(vn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if($e(n))return Gd(e,n,t)}return t}function Qp(e,t,n,r,i,o,l,s,u){return e=$s(n,r,!0,e,i,o,l,s,u),e.context=Gp(null),n=e.current,r=ke(),i=Bt(n),o=xt(r,i),o.callback=t??null,Ft(n,o,i),e.current.lanes=i,ti(e,i,r),_e(e,r),e}function Do(e,t,n,r){var i=t.current,o=ke(),l=Bt(i);return n=Gp(n),t.context===null?t.context=n:t.pendingContext=n,t=xt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(i,t,l),e!==null&&(et(e,i,l,o),Di(e,i,l)),l}function wo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _s(e,t){Gu(e,t),(e=e.alternate)&&Gu(e,t)}function um(){return null}var Kp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ls(e){this._internalRoot=e}Fo.prototype.render=Ls.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Do(e,t,null,null)};Fo.prototype.unmount=Ls.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;gn(function(){Do(null,e,null,null)}),t[yt]=null}};function Fo(e){this._internalRoot=e}Fo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ed();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_t.length&&t!==0&&t<_t[n].priority;n++);_t.splice(n,0,e),n===0&&zd(e)}};function Ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ao(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qu(){}function cm(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=wo(l);o.call(d)}}var l=Qp(t,r,e,0,null,!1,!1,"",Qu);return e._reactRootContainer=l,e[yt]=l.current,Ur(e.nodeType===8?e.parentNode:e),gn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var d=wo(u);s.call(d)}}var u=$s(e,0,!1,null,null,!1,!1,"",Qu);return e._reactRootContainer=u,e[yt]=u.current,Ur(e.nodeType===8?e.parentNode:e),gn(function(){Do(t,u,n,r)}),u}function Bo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var u=wo(l);s.call(u)}}Do(t,l,e,i)}else l=cm(n,t,e,i,r);return wo(l)}Cd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=kr(t.pendingLanes);n!==0&&(Za(t,n|1),_e(t,ne()),!(D&6)&&(Jn=ne()+500,Qt()))}break;case 13:gn(function(){var r=wt(e,1);if(r!==null){var i=ke();et(r,e,1,i)}}),_s(e,1)}};Ja=function(e){if(e.tag===13){var t=wt(e,134217728);if(t!==null){var n=ke();et(t,e,134217728,n)}_s(e,134217728)}};bd=function(e){if(e.tag===13){var t=Bt(e),n=wt(e,t);if(n!==null){var r=ke();et(n,e,t,r)}_s(e,t)}};Ed=function(){return U};Pd=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};Xl=function(e,t,n){switch(t){case"input":if(Vl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Lo(r);if(!i)throw Error(P(90));id(r),Vl(r,i)}}}break;case"textarea":ld(e,n);break;case"select":t=n.value,t!=null&&An(e,!!n.multiple,t,!1)}};fd=bs;hd=gn;var dm={usingClientEntryPoint:!1,Events:[ri,Nn,Lo,dd,pd,bs]},gr={findFiberByHostInstance:nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pm={bundleType:gr.bundleType,version:gr.version,rendererPackageName:gr.rendererPackageName,rendererConfig:gr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:St.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xd(e),e===null?null:e.stateNode},findFiberByHostInstance:gr.findFiberByHostInstance||um,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ei=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ei.isDisabled&&Ei.supportsFiber)try{Po=Ei.inject(pm),st=Ei}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dm;Me.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ns(t))throw Error(P(200));return sm(e,t,null,n)};Me.createRoot=function(e,t){if(!Ns(e))throw Error(P(299));var n=!1,r="",i=Kp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=$s(e,1,!1,null,null,n,!1,r,i),e[yt]=t.current,Ur(e.nodeType===8?e.parentNode:e),new Ls(t)};Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=xd(t),e=e===null?null:e.stateNode,e};Me.flushSync=function(e){return gn(e)};Me.hydrate=function(e,t,n){if(!Ao(t))throw Error(P(200));return Bo(null,e,t,!0,n)};Me.hydrateRoot=function(e,t,n){if(!Ns(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Kp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Qp(t,null,e,1,n??null,i,!1,o,l),e[yt]=t.current,Ur(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Fo(t)};Me.render=function(e,t,n){if(!Ao(t))throw Error(P(200));return Bo(null,e,t,!1,n)};Me.unmountComponentAtNode=function(e){if(!Ao(e))throw Error(P(40));return e._reactRootContainer?(gn(function(){Bo(null,null,e,!1,function(){e._reactRootContainer=null,e[yt]=null})}),!0):!1};Me.unstable_batchedUpdates=bs;Me.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ao(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Bo(e,t,n,!1,r)};Me.version="18.3.1-next-f1338f8080-20240426";function Xp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xp)}catch(e){console.error(e)}}Xp(),Xc.exports=Me;var fm=Xc.exports,Ku=fm;Ml.createRoot=Ku.createRoot,Ml.hydrateRoot=Ku.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zr(){return Zr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zr.apply(this,arguments)}var Tt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Tt||(Tt={}));const Xu="popstate";function hm(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:s}=r.location;return $a("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ko(i)}return gm(t,n,null,e)}function oe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Zp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function mm(){return Math.random().toString(36).substr(2,8)}function Zu(e,t){return{usr:e.state,key:e.key,idx:t}}function $a(e,t,n,r){return n===void 0&&(n=null),Zr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ar(t):t,{state:n,key:t&&t.key||r||mm()})}function ko(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ar(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function gm(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,s=Tt.Pop,u=null,d=m();d==null&&(d=0,l.replaceState(Zr({},l.state,{idx:d}),""));function m(){return(l.state||{idx:null}).idx}function h(){s=Tt.Pop;let j=m(),p=j==null?null:j-d;d=j,u&&u({action:s,location:v.location,delta:p})}function x(j,p){s=Tt.Push;let c=$a(v.location,j,p);d=m()+1;let f=Zu(c,d),w=v.createHref(c);try{l.pushState(f,"",w)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(w)}o&&u&&u({action:s,location:v.location,delta:1})}function y(j,p){s=Tt.Replace;let c=$a(v.location,j,p);d=m();let f=Zu(c,d),w=v.createHref(c);l.replaceState(f,"",w),o&&u&&u({action:s,location:v.location,delta:0})}function S(j){let p=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof j=="string"?j:ko(j);return c=c.replace(/ $/,"%20"),oe(p,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,p)}let v={get action(){return s},get location(){return e(i,l)},listen(j){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Xu,h),u=j,()=>{i.removeEventListener(Xu,h),u=null}},createHref(j){return t(i,j)},createURL:S,encodeLocation(j){let p=S(j);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:x,replace:y,go(j){return l.go(j)}};return v}var Ju;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ju||(Ju={}));function xm(e,t,n){return n===void 0&&(n="/"),vm(e,t,n)}function vm(e,t,n,r){let i=typeof t=="string"?ar(t):t,o=Rs(i.pathname||"/",n);if(o==null)return null;let l=Jp(e);ym(l);let s=null;for(let u=0;s==null&&u<l.length;++u){let d=Lm(o);s=zm(l[u],d)}return s}function Jp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,s)=>{let u={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};u.relativePath.startsWith("/")&&(oe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=Vt([r,u.relativePath]),m=n.concat(u);o.children&&o.children.length>0&&(oe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Jp(o.children,t,m,d)),!(o.path==null&&!o.index)&&t.push({path:d,score:Em(d,o.index),routesMeta:m})};return e.forEach((o,l)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,l);else for(let u of qp(o.path))i(o,l,u)}),t}function qp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=qp(r.join("/")),s=[];return s.push(...l.map(u=>u===""?o:[o,u].join("/"))),i&&s.push(...l),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function ym(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Pm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const wm=/^:[\w-]+$/,km=3,Sm=2,jm=1,Cm=10,bm=-2,qu=e=>e==="*";function Em(e,t){let n=e.split("/"),r=n.length;return n.some(qu)&&(r+=bm),t&&(r+=Sm),n.filter(i=>!qu(i)).reduce((i,o)=>i+(wm.test(o)?km:o===""?jm:Cm),r)}function Pm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function zm(e,t,n){let{routesMeta:r}=e,i={},o="/",l=[];for(let s=0;s<r.length;++s){let u=r[s],d=s===r.length-1,m=o==="/"?t:t.slice(o.length)||"/",h=$m({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},m),x=u.route;if(!h)return null;Object.assign(i,h.params),l.push({params:i,pathname:Vt([o,h.pathname]),pathnameBase:Im(Vt([o,h.pathnameBase])),route:x}),h.pathnameBase!=="/"&&(o=Vt([o,h.pathnameBase]))}return l}function $m(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=_m(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((d,m,h)=>{let{paramName:x,isOptional:y}=m;if(x==="*"){let v=s[h]||"";l=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const S=s[h];return y&&!S?d[x]=void 0:d[x]=(S||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:l,pattern:e}}function _m(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Zp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Lm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Zp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Rs(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Nm(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ar(e):e;return{pathname:n?n.startsWith("/")?n:Rm(n,t):t,search:Mm(r),hash:Om(i)}}function Rm(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function kl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Tm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ef(e,t){let n=Tm(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function tf(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ar(e):(i=Zr({},e),oe(!i.pathname||!i.pathname.includes("?"),kl("?","pathname","search",i)),oe(!i.pathname||!i.pathname.includes("#"),kl("#","pathname","hash",i)),oe(!i.search||!i.search.includes("#"),kl("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,s;if(l==null)s=n;else{let h=t.length-1;if(!r&&l.startsWith("..")){let x=l.split("/");for(;x[0]==="..";)x.shift(),h-=1;i.pathname=x.join("/")}s=h>=0?t[h]:"/"}let u=Nm(i,s),d=l&&l!=="/"&&l.endsWith("/"),m=(o||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||m)&&(u.pathname+="/"),u}const Vt=e=>e.join("/").replace(/\/\/+/g,"/"),Im=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Mm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Om=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Dm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const nf=["post","put","patch","delete"];new Set(nf);const Fm=["get",...nf];new Set(Fm);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jr(){return Jr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jr.apply(this,arguments)}const Ts=k.createContext(null),Am=k.createContext(null),yn=k.createContext(null),Uo=k.createContext(null),wn=k.createContext({outlet:null,matches:[],isDataRoute:!1}),rf=k.createContext(null);function Bm(e,t){let{relative:n}=t===void 0?{}:t;oi()||oe(!1);let{basename:r,navigator:i}=k.useContext(yn),{hash:o,pathname:l,search:s}=lf(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:Vt([r,l])),i.createHref({pathname:u,search:s,hash:o})}function oi(){return k.useContext(Uo)!=null}function li(){return oi()||oe(!1),k.useContext(Uo).location}function of(e){k.useContext(yn).static||k.useLayoutEffect(e)}function ai(){let{isDataRoute:e}=k.useContext(wn);return e?eg():Um()}function Um(){oi()||oe(!1);let e=k.useContext(Ts),{basename:t,future:n,navigator:r}=k.useContext(yn),{matches:i}=k.useContext(wn),{pathname:o}=li(),l=JSON.stringify(ef(i,n.v7_relativeSplatPath)),s=k.useRef(!1);return of(()=>{s.current=!0}),k.useCallback(function(d,m){if(m===void 0&&(m={}),!s.current)return;if(typeof d=="number"){r.go(d);return}let h=tf(d,JSON.parse(l),o,m.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Vt([t,h.pathname])),(m.replace?r.replace:r.push)(h,m.state,m)},[t,r,l,o,e])}function lf(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=k.useContext(yn),{matches:i}=k.useContext(wn),{pathname:o}=li(),l=JSON.stringify(ef(i,r.v7_relativeSplatPath));return k.useMemo(()=>tf(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function Vm(e,t){return Wm(e,t)}function Wm(e,t,n,r){oi()||oe(!1);let{navigator:i}=k.useContext(yn),{matches:o}=k.useContext(wn),l=o[o.length-1],s=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let d=li(),m;if(t){var h;let j=typeof t=="string"?ar(t):t;u==="/"||(h=j.pathname)!=null&&h.startsWith(u)||oe(!1),m=j}else m=d;let x=m.pathname||"/",y=x;if(u!=="/"){let j=u.replace(/^\//,"").split("/");y="/"+x.replace(/^\//,"").split("/").slice(j.length).join("/")}let S=xm(e,{pathname:y}),v=Km(S&&S.map(j=>Object.assign({},j,{params:Object.assign({},s,j.params),pathname:Vt([u,i.encodeLocation?i.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?u:Vt([u,i.encodeLocation?i.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),o,n,r);return t&&v?k.createElement(Uo.Provider,{value:{location:Jr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Tt.Pop}},v):v}function Hm(){let e=qm(),t=Dm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:i},n):null,null)}const Ym=k.createElement(Hm,null);class Gm extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(wn.Provider,{value:this.props.routeContext},k.createElement(rf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Qm(e){let{routeContext:t,match:n,children:r}=e,i=k.useContext(Ts);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(wn.Provider,{value:t},r)}function Km(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let m=l.findIndex(h=>h.route.id&&(s==null?void 0:s[h.route.id])!==void 0);m>=0||oe(!1),l=l.slice(0,Math.min(l.length,m+1))}let u=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<l.length;m++){let h=l[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=m),h.route.id){let{loaderData:x,errors:y}=n,S=h.route.loader&&x[h.route.id]===void 0&&(!y||y[h.route.id]===void 0);if(h.route.lazy||S){u=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((m,h,x)=>{let y,S=!1,v=null,j=null;n&&(y=s&&h.route.id?s[h.route.id]:void 0,v=h.route.errorElement||Ym,u&&(d<0&&x===0?(tg("route-fallback"),S=!0,j=null):d===x&&(S=!0,j=h.route.hydrateFallbackElement||null)));let p=t.concat(l.slice(0,x+1)),c=()=>{let f;return y?f=v:S?f=j:h.route.Component?f=k.createElement(h.route.Component,null):h.route.element?f=h.route.element:f=m,k.createElement(Qm,{match:h,routeContext:{outlet:m,matches:p,isDataRoute:n!=null},children:f})};return n&&(h.route.ErrorBoundary||h.route.errorElement||x===0)?k.createElement(Gm,{location:n.location,revalidation:n.revalidation,component:v,error:y,children:c(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):c()},null)}var af=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(af||{}),sf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(sf||{});function Xm(e){let t=k.useContext(Ts);return t||oe(!1),t}function Zm(e){let t=k.useContext(Am);return t||oe(!1),t}function Jm(e){let t=k.useContext(wn);return t||oe(!1),t}function uf(e){let t=Jm(),n=t.matches[t.matches.length-1];return n.route.id||oe(!1),n.route.id}function qm(){var e;let t=k.useContext(rf),n=Zm(),r=uf();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function eg(){let{router:e}=Xm(af.UseNavigateStable),t=uf(sf.UseNavigateStable),n=k.useRef(!1);return of(()=>{n.current=!0}),k.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Jr({fromRouteId:t},o)))},[e,t])}const ec={};function tg(e,t,n){ec[e]||(ec[e]=!0)}function ng(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function bt(e){oe(!1)}function rg(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Tt.Pop,navigator:o,static:l=!1,future:s}=e;oi()&&oe(!1);let u=t.replace(/^\/*/,"/"),d=k.useMemo(()=>({basename:u,navigator:o,static:l,future:Jr({v7_relativeSplatPath:!1},s)}),[u,s,o,l]);typeof r=="string"&&(r=ar(r));let{pathname:m="/",search:h="",hash:x="",state:y=null,key:S="default"}=r,v=k.useMemo(()=>{let j=Rs(m,u);return j==null?null:{location:{pathname:j,search:h,hash:x,state:y,key:S},navigationType:i}},[u,m,h,x,y,S,i]);return v==null?null:k.createElement(yn.Provider,{value:d},k.createElement(Uo.Provider,{children:n,value:v}))}function ig(e){let{children:t,location:n}=e;return Vm(_a(t),n)}new Promise(()=>{});function _a(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,i)=>{if(!k.isValidElement(r))return;let o=[...t,i];if(r.type===k.Fragment){n.push.apply(n,_a(r.props.children,o));return}r.type!==bt&&oe(!1),!r.props.index||!r.props.children||oe(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=_a(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function La(){return La=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},La.apply(this,arguments)}function og(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function lg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ag(e,t){return e.button===0&&(!t||t==="_self")&&!lg(e)}const sg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ug="6";try{window.__reactRouterVersion=ug}catch{}const cg="startTransition",tc=nh[cg];function dg(e){let{basename:t,children:n,future:r,window:i}=e,o=k.useRef();o.current==null&&(o.current=hm({window:i,v5Compat:!0}));let l=o.current,[s,u]=k.useState({action:l.action,location:l.location}),{v7_startTransition:d}=r||{},m=k.useCallback(h=>{d&&tc?tc(()=>u(h)):u(h)},[u,d]);return k.useLayoutEffect(()=>l.listen(m),[l,m]),k.useEffect(()=>ng(r),[r]),k.createElement(rg,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}const pg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",fg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$t=k.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:s,target:u,to:d,preventScrollReset:m,viewTransition:h}=t,x=og(t,sg),{basename:y}=k.useContext(yn),S,v=!1;if(typeof d=="string"&&fg.test(d)&&(S=d,pg))try{let f=new URL(window.location.href),w=d.startsWith("//")?new URL(f.protocol+d):new URL(d),E=Rs(w.pathname,y);w.origin===f.origin&&E!=null?d=E+w.search+w.hash:v=!0}catch{}let j=Bm(d,{relative:i}),p=hg(d,{replace:l,state:s,target:u,preventScrollReset:m,relative:i,viewTransition:h});function c(f){r&&r(f),f.defaultPrevented||p(f)}return k.createElement("a",La({},x,{href:S||j,onClick:v||o?r:c,ref:n,target:u}))});var nc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(nc||(nc={}));var rc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(rc||(rc={}));function hg(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,viewTransition:s}=t===void 0?{}:t,u=ai(),d=li(),m=lf(e,{relative:l});return k.useCallback(h=>{if(ag(h,n)){h.preventDefault();let x=r!==void 0?r:ko(d)===ko(m);u(e,{replace:x,state:i,preventScrollReset:o,relative:l,viewTransition:s})}},[d,u,m,r,i,n,e,o,l,s])}var Pe=function(){return Pe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Pe.apply(this,arguments)};function So(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var Y="-ms-",Rr="-moz-",A="-webkit-",cf="comm",Vo="rule",Is="decl",mg="@import",df="@keyframes",gg="@layer",pf=Math.abs,Ms=String.fromCharCode,Na=Object.assign;function xg(e,t){return ce(e,0)^45?(((t<<2^ce(e,0))<<2^ce(e,1))<<2^ce(e,2))<<2^ce(e,3):0}function ff(e){return e.trim()}function ft(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,n){return e.replace(t,n)}function Hi(e,t,n){return e.indexOf(t,n)}function ce(e,t){return e.charCodeAt(t)|0}function qn(e,t,n){return e.slice(t,n)}function lt(e){return e.length}function hf(e){return e.length}function jr(e,t){return t.push(e),e}function vg(e,t){return e.map(t).join("")}function ic(e,t){return e.filter(function(n){return!ft(n,t)})}var Wo=1,er=1,mf=0,Ye=0,re=0,sr="";function Ho(e,t,n,r,i,o,l,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Wo,column:er,length:l,return:"",siblings:s}}function Et(e,t){return Na(Ho("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function jn(e){for(;e.root;)e=Et(e.root,{children:[e]});jr(e,e.siblings)}function yg(){return re}function wg(){return re=Ye>0?ce(sr,--Ye):0,er--,re===10&&(er=1,Wo--),re}function tt(){return re=Ye<mf?ce(sr,Ye++):0,er++,re===10&&(er=1,Wo++),re}function un(){return ce(sr,Ye)}function Yi(){return Ye}function Yo(e,t){return qn(sr,e,t)}function Ra(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function kg(e){return Wo=er=1,mf=lt(sr=e),Ye=0,[]}function Sg(e){return sr="",e}function Sl(e){return ff(Yo(Ye-1,Ta(e===91?e+2:e===40?e+1:e)))}function jg(e){for(;(re=un())&&re<33;)tt();return Ra(e)>2||Ra(re)>3?"":" "}function Cg(e,t){for(;--t&&tt()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return Yo(e,Yi()+(t<6&&un()==32&&tt()==32))}function Ta(e){for(;tt();)switch(re){case e:return Ye;case 34:case 39:e!==34&&e!==39&&Ta(re);break;case 40:e===41&&Ta(e);break;case 92:tt();break}return Ye}function bg(e,t){for(;tt()&&e+re!==57;)if(e+re===84&&un()===47)break;return"/*"+Yo(t,Ye-1)+"*"+Ms(e===47?e:tt())}function Eg(e){for(;!Ra(un());)tt();return Yo(e,Ye)}function Pg(e){return Sg(Gi("",null,null,null,[""],e=kg(e),0,[0],e))}function Gi(e,t,n,r,i,o,l,s,u){for(var d=0,m=0,h=l,x=0,y=0,S=0,v=1,j=1,p=1,c=0,f="",w=i,E=o,C=r,b=f;j;)switch(S=c,c=tt()){case 40:if(S!=108&&ce(b,h-1)==58){Hi(b+=M(Sl(c),"&","&\f"),"&\f",pf(d?s[d-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:b+=Sl(c);break;case 9:case 10:case 13:case 32:b+=jg(S);break;case 92:b+=Cg(Yi()-1,7);continue;case 47:switch(un()){case 42:case 47:jr(zg(bg(tt(),Yi()),t,n,u),u);break;default:b+="/"}break;case 123*v:s[d++]=lt(b)*p;case 125*v:case 59:case 0:switch(c){case 0:case 125:j=0;case 59+m:p==-1&&(b=M(b,/\f/g,"")),y>0&&lt(b)-h&&jr(y>32?lc(b+";",r,n,h-1,u):lc(M(b," ","")+";",r,n,h-2,u),u);break;case 59:b+=";";default:if(jr(C=oc(b,t,n,d,m,i,s,f,w=[],E=[],h,o),o),c===123)if(m===0)Gi(b,t,C,C,w,o,h,s,E);else switch(x===99&&ce(b,3)===110?100:x){case 100:case 108:case 109:case 115:Gi(e,C,C,r&&jr(oc(e,C,C,0,0,i,s,f,i,w=[],h,E),E),i,E,h,s,r?w:E);break;default:Gi(b,C,C,C,[""],E,0,s,E)}}d=m=y=0,v=p=1,f=b="",h=l;break;case 58:h=1+lt(b),y=S;default:if(v<1){if(c==123)--v;else if(c==125&&v++==0&&wg()==125)continue}switch(b+=Ms(c),c*v){case 38:p=m>0?1:(b+="\f",-1);break;case 44:s[d++]=(lt(b)-1)*p,p=1;break;case 64:un()===45&&(b+=Sl(tt())),x=un(),m=h=lt(f=b+=Eg(Yi())),c++;break;case 45:S===45&&lt(b)==2&&(v=0)}}return o}function oc(e,t,n,r,i,o,l,s,u,d,m,h){for(var x=i-1,y=i===0?o:[""],S=hf(y),v=0,j=0,p=0;v<r;++v)for(var c=0,f=qn(e,x+1,x=pf(j=l[v])),w=e;c<S;++c)(w=ff(j>0?y[c]+" "+f:M(f,/&\f/g,y[c])))&&(u[p++]=w);return Ho(e,t,n,i===0?Vo:s,u,d,m,h)}function zg(e,t,n,r){return Ho(e,t,n,cf,Ms(yg()),qn(e,2,-2),0,r)}function lc(e,t,n,r,i){return Ho(e,t,n,Is,qn(e,0,r),qn(e,r+1,-1),r,i)}function gf(e,t,n){switch(xg(e,t)){case 5103:return A+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return A+e+e;case 4789:return Rr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return A+e+Rr+e+Y+e+e;case 5936:switch(ce(e,t+11)){case 114:return A+e+Y+M(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return A+e+Y+M(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return A+e+Y+M(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return A+e+Y+e+e;case 6165:return A+e+Y+"flex-"+e+e;case 5187:return A+e+M(e,/(\w+).+(:[^]+)/,A+"box-$1$2"+Y+"flex-$1$2")+e;case 5443:return A+e+Y+"flex-item-"+M(e,/flex-|-self/g,"")+(ft(e,/flex-|baseline/)?"":Y+"grid-row-"+M(e,/flex-|-self/g,""))+e;case 4675:return A+e+Y+"flex-line-pack"+M(e,/align-content|flex-|-self/g,"")+e;case 5548:return A+e+Y+M(e,"shrink","negative")+e;case 5292:return A+e+Y+M(e,"basis","preferred-size")+e;case 6060:return A+"box-"+M(e,"-grow","")+A+e+Y+M(e,"grow","positive")+e;case 4554:return A+M(e,/([^-])(transform)/g,"$1"+A+"$2")+e;case 6187:return M(M(M(e,/(zoom-|grab)/,A+"$1"),/(image-set)/,A+"$1"),e,"")+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,A+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,A+"box-pack:$3"+Y+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+A+e+e;case 4200:if(!ft(e,/flex-|baseline/))return Y+"grid-column-align"+qn(e,t)+e;break;case 2592:case 3360:return Y+M(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,ft(r.props,/grid-\w+-end/)})?~Hi(e+(n=n[t].value),"span",0)?e:Y+M(e,"-start","")+e+Y+"grid-row-span:"+(~Hi(n,"span",0)?ft(n,/\d+/):+ft(n,/\d+/)-+ft(e,/\d+/))+";":Y+M(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ft(r.props,/grid-\w+-start/)})?e:Y+M(M(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,A+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(lt(e)-1-t>6)switch(ce(e,t+1)){case 109:if(ce(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,"$1"+A+"$2-$3$1"+Rr+(ce(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Hi(e,"stretch",0)?gf(M(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return M(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,s,u,d){return Y+i+":"+o+d+(l?Y+i+"-span:"+(s?u:+u-+o)+d:"")+e});case 4949:if(ce(e,t+6)===121)return M(e,":",":"+A)+e;break;case 6444:switch(ce(e,ce(e,14)===45?18:11)){case 120:return M(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+A+(ce(e,14)===45?"inline-":"")+"box$3$1"+A+"$2$3$1"+Y+"$2box$3")+e;case 100:return M(e,":",":"+Y)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return M(e,"scroll-","scroll-snap-")+e}return e}function jo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function $g(e,t,n,r){switch(e.type){case gg:if(e.children.length)break;case mg:case Is:return e.return=e.return||e.value;case cf:return"";case df:return e.return=e.value+"{"+jo(e.children,r)+"}";case Vo:if(!lt(e.value=e.props.join(",")))return""}return lt(n=jo(e.children,r))?e.return=e.value+"{"+n+"}":""}function _g(e){var t=hf(e);return function(n,r,i,o){for(var l="",s=0;s<t;s++)l+=e[s](n,r,i,o)||"";return l}}function Lg(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ng(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Is:e.return=gf(e.value,e.length,n);return;case df:return jo([Et(e,{value:M(e.value,"@","@"+A)})],r);case Vo:if(e.length)return vg(n=e.props,function(i){switch(ft(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":jn(Et(e,{props:[M(i,/:(read-\w+)/,":"+Rr+"$1")]})),jn(Et(e,{props:[i]})),Na(e,{props:ic(n,r)});break;case"::placeholder":jn(Et(e,{props:[M(i,/:(plac\w+)/,":"+A+"input-$1")]})),jn(Et(e,{props:[M(i,/:(plac\w+)/,":"+Rr+"$1")]})),jn(Et(e,{props:[M(i,/:(plac\w+)/,Y+"input-$1")]})),jn(Et(e,{props:[i]})),Na(e,{props:ic(n,r)});break}return""})}}var Rg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Le={},tr=typeof process<"u"&&Le!==void 0&&(Le.REACT_APP_SC_ATTR||Le.SC_ATTR)||"data-styled",xf="active",vf="data-styled-version",Go="6.1.19",Os=`/*!sc*/
`,Co=typeof window<"u"&&typeof document<"u",Tg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Le!==void 0&&Le.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Le.REACT_APP_SC_DISABLE_SPEEDY!==""?Le.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Le.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Le!==void 0&&Le.SC_DISABLE_SPEEDY!==void 0&&Le.SC_DISABLE_SPEEDY!==""&&Le.SC_DISABLE_SPEEDY!=="false"&&Le.SC_DISABLE_SPEEDY),Qo=Object.freeze([]),nr=Object.freeze({});function Ig(e,t,n){return n===void 0&&(n=nr),e.theme!==n.theme&&e.theme||t||n.theme}var yf=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Mg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Og=/(^-|-$)/g;function ac(e){return e.replace(Mg,"-").replace(Og,"")}var Dg=/(a)(d)/gi,Pi=52,sc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ia(e){var t,n="";for(t=Math.abs(e);t>Pi;t=t/Pi|0)n=sc(t%Pi)+n;return(sc(t%Pi)+n).replace(Dg,"$1-$2")}var jl,wf=5381,Fn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},kf=function(e){return Fn(wf,e)};function Fg(e){return Ia(kf(e)>>>0)}function Ag(e){return e.displayName||e.name||"Component"}function Cl(e){return typeof e=="string"&&!0}var Sf=typeof Symbol=="function"&&Symbol.for,jf=Sf?Symbol.for("react.memo"):60115,Bg=Sf?Symbol.for("react.forward_ref"):60112,Ug={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Vg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Cf={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Wg=((jl={})[Bg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},jl[jf]=Cf,jl);function uc(e){return("type"in(t=e)&&t.type.$$typeof)===jf?Cf:"$$typeof"in e?Wg[e.$$typeof]:Ug;var t}var Hg=Object.defineProperty,Yg=Object.getOwnPropertyNames,cc=Object.getOwnPropertySymbols,Gg=Object.getOwnPropertyDescriptor,Qg=Object.getPrototypeOf,dc=Object.prototype;function bf(e,t,n){if(typeof t!="string"){if(dc){var r=Qg(t);r&&r!==dc&&bf(e,r,n)}var i=Yg(t);cc&&(i=i.concat(cc(t)));for(var o=uc(e),l=uc(t),s=0;s<i.length;++s){var u=i[s];if(!(u in Vg||n&&n[u]||l&&u in l||o&&u in o)){var d=Gg(t,u);try{Hg(e,u,d)}catch{}}}}return e}function rr(e){return typeof e=="function"}function Ds(e){return typeof e=="object"&&"styledComponentId"in e}function ln(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function pc(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function qr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ma(e,t,n){if(n===void 0&&(n=!1),!n&&!qr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ma(e[r],t[r]);else if(qr(t))for(var r in t)e[r]=Ma(e[r],t[r]);return e}function Fs(e,t){Object.defineProperty(e,"toString",{value:t})}function si(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Kg=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw si(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),u=(l=0,n.length);l<u;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(Os);return n},e}(),Qi=new Map,bo=new Map,Ki=1,zi=function(e){if(Qi.has(e))return Qi.get(e);for(;bo.has(Ki);)Ki++;var t=Ki++;return Qi.set(e,t),bo.set(t,e),t},Xg=function(e,t){Ki=t+1,Qi.set(e,t),bo.set(t,e)},Zg="style[".concat(tr,"][").concat(vf,'="').concat(Go,'"]'),Jg=new RegExp("^".concat(tr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),qg=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},e1=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Os),i=[],o=0,l=r.length;o<l;o++){var s=r[o].trim();if(s){var u=s.match(Jg);if(u){var d=0|parseInt(u[1],10),m=u[2];d!==0&&(Xg(m,d),qg(e,m,u[3]),e.getTag().insertRules(d,i)),i.length=0}else i.push(s)}}},fc=function(e){for(var t=document.querySelectorAll(Zg),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(tr)!==xf&&(e1(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function t1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ef=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var u=Array.from(s.querySelectorAll("style[".concat(tr,"]")));return u[u.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(tr,xf),r.setAttribute(vf,Go);var l=t1();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},n1=function(){function e(t){this.element=Ef(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw si(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),r1=function(){function e(t){this.element=Ef(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),i1=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),hc=Co,o1={isServer:!Co,useCSSOMInjection:!Tg},Pf=function(){function e(t,n,r){t===void 0&&(t=nr),n===void 0&&(n={});var i=this;this.options=Pe(Pe({},o1),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Co&&hc&&(hc=!1,fc(this)),Fs(this,function(){return function(o){for(var l=o.getTag(),s=l.length,u="",d=function(h){var x=function(p){return bo.get(p)}(h);if(x===void 0)return"continue";var y=o.names.get(x),S=l.getGroup(h);if(y===void 0||!y.size||S.length===0)return"continue";var v="".concat(tr,".g").concat(h,'[id="').concat(x,'"]'),j="";y!==void 0&&y.forEach(function(p){p.length>0&&(j+="".concat(p,","))}),u+="".concat(S).concat(v,'{content:"').concat(j,'"}').concat(Os)},m=0;m<s;m++)d(m);return u}(i)})}return e.registerId=function(t){return zi(t)},e.prototype.rehydrate=function(){!this.server&&Co&&fc(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Pe(Pe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new i1(i):r?new n1(i):new r1(i)}(this.options),new Kg(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(zi(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(zi(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(zi(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),l1=/&/g,a1=/^\s*\/\/.*$/gm;function zf(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=zf(n.children,t)),n})}function s1(e){var t,n,r,i=nr,o=i.options,l=o===void 0?nr:o,s=i.plugins,u=s===void 0?Qo:s,d=function(x,y,S){return S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(t):x},m=u.slice();m.push(function(x){x.type===Vo&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(l1,n).replace(r,d))}),l.prefix&&m.push(Ng),m.push($g);var h=function(x,y,S,v){y===void 0&&(y=""),S===void 0&&(S=""),v===void 0&&(v="&"),t=v,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var j=x.replace(a1,""),p=Pg(S||y?"".concat(S," ").concat(y," { ").concat(j," }"):j);l.namespace&&(p=zf(p,l.namespace));var c=[];return jo(p,_g(m.concat(Lg(function(f){return c.push(f)})))),c};return h.hash=u.length?u.reduce(function(x,y){return y.name||si(15),Fn(x,y.name)},wf).toString():"",h}var u1=new Pf,Oa=s1(),$f=dn.createContext({shouldForwardProp:void 0,styleSheet:u1,stylis:Oa});$f.Consumer;dn.createContext(void 0);function mc(){return k.useContext($f)}var c1=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Oa);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Fs(this,function(){throw si(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Oa),this.name+t.hash},e}(),d1=function(e){return e>="A"&&e<="Z"};function gc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;d1(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var _f=function(e){return e==null||e===!1||e===""},Lf=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!_f(o)&&(Array.isArray(o)&&o.isCss||rr(o)?r.push("".concat(gc(i),":"),o,";"):qr(o)?r.push.apply(r,So(So(["".concat(i," {")],Lf(o),!1),["}"],!1)):r.push("".concat(gc(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Rg||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function cn(e,t,n,r){if(_f(e))return[];if(Ds(e))return[".".concat(e.styledComponentId)];if(rr(e)){if(!rr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return cn(i,t,n,r)}var o;return e instanceof c1?n?(e.inject(n,r),[e.getName(r)]):[e]:qr(e)?Lf(e):Array.isArray(e)?Array.prototype.concat.apply(Qo,e.map(function(l){return cn(l,t,n,r)})):[e.toString()]}function p1(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(rr(n)&&!Ds(n))return!1}return!0}var f1=kf(Go),h1=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&p1(t),this.componentId=n,this.baseHash=Fn(f1,n),this.baseStyle=r,Pf.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ln(i,this.staticRulesId);else{var o=pc(cn(this.rules,t,n,r)),l=Ia(Fn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}i=ln(i,l),this.staticRulesId=l}else{for(var u=Fn(this.baseHash,r.hash),d="",m=0;m<this.rules.length;m++){var h=this.rules[m];if(typeof h=="string")d+=h;else if(h){var x=pc(cn(h,t,n,r));u=Fn(u,x+m),d+=x}}if(d){var y=Ia(u>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(d,".".concat(y),void 0,this.componentId)),i=ln(i,y)}}return i},e}(),Nf=dn.createContext(void 0);Nf.Consumer;var bl={};function m1(e,t,n){var r=Ds(e),i=e,o=!Cl(e),l=t.attrs,s=l===void 0?Qo:l,u=t.componentId,d=u===void 0?function(w,E){var C=typeof w!="string"?"sc":ac(w);bl[C]=(bl[C]||0)+1;var b="".concat(C,"-").concat(Fg(Go+C+bl[C]));return E?"".concat(E,"-").concat(b):b}(t.displayName,t.parentComponentId):u,m=t.displayName,h=m===void 0?function(w){return Cl(w)?"styled.".concat(w):"Styled(".concat(Ag(w),")")}(e):m,x=t.displayName&&t.componentId?"".concat(ac(t.displayName),"-").concat(t.componentId):t.componentId||d,y=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,S=t.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var j=t.shouldForwardProp;S=function(w,E){return v(w,E)&&j(w,E)}}else S=v}var p=new h1(n,x,r?i.componentStyle:void 0);function c(w,E){return function(C,b,_){var z=C.attrs,N=C.componentStyle,X=C.defaultProps,Q=C.foldedComponentIds,V=C.styledComponentId,jt=C.target,Ge=dn.useContext(Nf),Kt=mc(),De=C.shouldForwardProp||Kt.shouldForwardProp,$=Ig(b,Ge,X)||nr,T=function(Fe,se,Qe){for(var Xt,dt=Pe(Pe({},se),{className:void 0,theme:Qe}),kn=0;kn<Fe.length;kn+=1){var Zt=rr(Xt=Fe[kn])?Xt(dt):Xt;for(var rt in Zt)dt[rt]=rt==="className"?ln(dt[rt],Zt[rt]):rt==="style"?Pe(Pe({},dt[rt]),Zt[rt]):Zt[rt]}return se.className&&(dt.className=ln(dt.className,se.className)),dt}(z,b,$),I=T.as||jt,F={};for(var B in T)T[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&T.theme===$||(B==="forwardedAs"?F.as=T.forwardedAs:De&&!De(B,I)||(F[B]=T[B]));var ct=function(Fe,se){var Qe=mc(),Xt=Fe.generateAndInjectStyles(se,Qe.styleSheet,Qe.stylis);return Xt}(N,T),Ce=ln(Q,V);return ct&&(Ce+=" "+ct),T.className&&(Ce+=" "+T.className),F[Cl(I)&&!yf.has(I)?"class":"className"]=Ce,_&&(F.ref=_),k.createElement(I,F)}(f,w,E)}c.displayName=h;var f=dn.forwardRef(c);return f.attrs=y,f.componentStyle=p,f.displayName=h,f.shouldForwardProp=S,f.foldedComponentIds=r?ln(i.foldedComponentIds,i.styledComponentId):"",f.styledComponentId=x,f.target=r?i.target:e,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(E){for(var C=[],b=1;b<arguments.length;b++)C[b-1]=arguments[b];for(var _=0,z=C;_<z.length;_++)Ma(E,z[_],!0);return E}({},i.defaultProps,w):w}}),Fs(f,function(){return".".concat(f.styledComponentId)}),o&&bf(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function xc(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var vc=function(e){return Object.assign(e,{isCss:!0})};function g1(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(rr(e)||qr(e))return vc(cn(xc(Qo,So([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?cn(r):vc(cn(xc(r,t)))}function Da(e,t,n){if(n===void 0&&(n=nr),!t)throw si(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,g1.apply(void 0,So([i],o,!1)))};return r.attrs=function(i){return Da(e,t,Pe(Pe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Da(e,t,Pe(Pe({},n),i))},r}var Rf=function(e){return Da(m1,e)},g=Rf;yf.forEach(function(e){g[e]=Rf(e)});const x1=g.div`
  * {
    &:focus {
      outline: none;
    }
  }
`,v1=g.nav`
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

  ${e=>e.$hidden&&`
    transform: translateY(-100%);
  `}

  @media (max-width: 768px) {
    height: 64px;
  }
`,y1=g.div`
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
`,w1=g.div`
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
`,k1=g.div`
  display: flex;
  gap: 40px;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`,S1=g.div`
  display: flex;
  gap: 40px;
  align-items: center;
  margin-right: 12px;

  @media (max-width: 1024px) {
    gap: 24px;
  }
`,$i=g.button`
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

  ${e=>e.$active&&`
    color: #234255;
    &:after {
      transform: scaleX(1);
    }
  `}
`,Tf=g.div`
  display: flex;
  gap: 12px;
`,_i=g.button`
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
  
  ${e=>e.$primary?`
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
`,j1=g.button`
  display: none;
  background: none;
  border: none;
  padding: 8px;
  color: #475569;
  cursor: pointer;
  transition: all 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
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

  svg {
    width: 24px;
    height: 24px;
    stroke: currentColor;
    stroke-width: 2;
  }
`,C1=g.div`
  display: none;
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  background: white;
  padding: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transform: translateY(-100%);
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;

  @media (max-width: 768px) {
    display: block;
    ${e=>e.$isOpen&&`
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    `}
  }
`,b1=g.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`,Li=g.button`
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

  ${e=>e.$active&&`
    color: #29ba9b;
    background: #f0fdf4;
  `}
`,E1=g(Tf)`
  flex-direction: column;
  gap: 8px;
  padding-top: 16px;
  border-top: 1px solid #e2e8f0;
`,P1=g.div`
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
    ${e=>e.$isOpen&&`
      opacity: 1;
      visibility: visible;
    `}
  }
`;function z1({isOpen:e}){return a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",style:{transform:e?"rotate(90deg)":"none",transition:"transform 0.3s ease"},children:e?a.jsx("path",{d:"M6 18L18 6M6 6l12 12",strokeLinecap:"round",strokeLinejoin:"round"}):a.jsx("path",{d:"M4 6h16M4 12h16M4 18h16",strokeLinecap:"round",strokeLinejoin:"round"})})}function $1(){const[e,t]=k.useState(!1),[n,r]=k.useState(!1),[i,o]=k.useState(0),l=li(),s=ai();k.useEffect(()=>{const d=()=>{const m=window.scrollY;r(m>72&&m>i),o(m)};return window.addEventListener("scroll",d,{passive:!0}),()=>window.removeEventListener("scroll",d)},[i]),k.useEffect(()=>{t(!1)},[l]),k.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[e]);const u=d=>{window.scrollTo(0,0),s(d)};return a.jsx(x1,{children:a.jsxs(v1,{$hidden:n,children:[a.jsxs(y1,{children:[a.jsx(w1,{onClick:()=>u("/"),children:a.jsx("img",{src:"/my-pickleball-app/ppl-logo.svg",alt:"Philippine Pickleball League"})}),a.jsxs(k1,{children:[a.jsxs(S1,{children:[a.jsx($i,{onClick:()=>u("/forum"),$active:l.pathname==="/forum",children:"Forum"}),a.jsx($i,{onClick:()=>u("/tournament"),$active:l.pathname==="/tournament",children:"Tournaments"}),a.jsx($i,{onClick:()=>u("/ranks"),$active:l.pathname==="/ranks",children:"Ranks"}),a.jsx($i,{onClick:()=>u("/clubs-courts"),$active:l.pathname==="/clubs-courts",children:"Clubs & Courts"})]}),a.jsxs(Tf,{children:[a.jsx(_i,{onClick:()=>u("/signin"),children:"Sign In"}),a.jsx(_i,{onClick:()=>u("/register"),$primary:!0,children:"Register"})]})]}),a.jsx(j1,{onClick:()=>t(!e),children:a.jsx(z1,{isOpen:e})})]}),a.jsxs(C1,{$isOpen:e,children:[a.jsxs(b1,{children:[a.jsx(Li,{onClick:()=>u("/forum"),$active:l.pathname==="/forum",children:"Forum"}),a.jsx(Li,{onClick:()=>u("/tournament"),$active:l.pathname==="/tournament",children:"Tournament"}),a.jsx(Li,{onClick:()=>u("/ranks"),$active:l.pathname==="/ranks",children:"Ranks"}),a.jsx(Li,{onClick:()=>u("/clubs-courts"),$active:l.pathname==="/clubs-courts",children:"Clubs & Courts"})]}),a.jsxs(E1,{children:[a.jsx(_i,{onClick:()=>u("/signin"),children:"Sign In"}),a.jsx(_i,{onClick:()=>u("/register"),$primary:!0,children:"Register"})]})]}),a.jsx(P1,{$isOpen:e,onClick:()=>t(!1)})]})})}const _1=g.footer`
  background: white;
  padding: 40px 24px 20px;
  color: #333;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`,L1=g.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`,N1=g.div`
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
`,R1=g.div`
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
`,T1=g.div`
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
`,I1=g.div`
  font-size: 0.8rem;
  color: #666;
  text-align: center;
  margin-top: 12px;
`;function M1(){return a.jsx(_1,{children:a.jsxs(L1,{children:[a.jsx(N1,{children:a.jsx("img",{src:"/my-pickleball-app/ppl-logo.svg",alt:"Philippine Pickleball League"})}),a.jsxs(R1,{children:[a.jsx("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",children:a.jsx("svg",{viewBox:"0 0 320 512",fill:"currentColor",children:a.jsx("path",{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"})})}),a.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:a.jsx("svg",{viewBox:"0 0 448 512",fill:"currentColor",children:a.jsx("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})})}),a.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:a.jsx("svg",{viewBox:"0 0 448 512",fill:"currentColor",children:a.jsx("path",{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"})})}),a.jsx("a",{href:"https://youtube.com",target:"_blank",rel:"noopener noreferrer","aria-label":"YouTube",children:a.jsx("svg",{viewBox:"0 0 576 512",fill:"currentColor",children:a.jsx("path",{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"})})})]}),a.jsxs(T1,{children:[a.jsx($t,{to:"/terms",children:"Terms & Conditions"}),a.jsx($t,{to:"/privacy",children:"Privacy Policy"}),a.jsx($t,{to:"/about",children:"About us"}),a.jsx($t,{to:"/contact",children:"Contact"}),a.jsx($t,{to:"/sponsors",children:"Sponsors"}),a.jsx($t,{to:"/news",children:"News"})]}),a.jsxs(I1,{children:["© ",new Date().getFullYear()," Philippine Pickleball League"]})]})})}const O1=(e={})=>{const[t,n]=k.useState(!1),[r,i]=k.useState(!1),o=k.useRef(null);return k.useEffect(()=>{const l=new IntersectionObserver(([s])=>{s.isIntersecting&&!r&&(n(!0),i(!0))},e);return o.current&&l.observe(o.current),()=>{o.current&&l.unobserve(o.current)}},[o,e,r]),[o,t]};g.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.15;
  z-index: 0;
`;const D1=g.div`
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
    min-height: 80vh;
    padding: 60px 16px;
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
`,F1=g.div`
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
`,A1=g.h1`
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
`,B1=g.p`
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
`,U1=g.div`
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
`,V1=g($t)`
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
  width: ${e=>e.$fullWidth?"100%":"auto"};
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
`;const If=g.section`
  padding: 80px 24px;
  background: ${e=>e.$dark?"#1a2e3b":"white"};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 64px 16px;
  }
`,yc=g.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;g.h2`
  font-size: clamp(1.75rem, 6vw, 3rem);
  font-weight: 700;
  color: ${e=>e.$dark?"white":"#234255"};
  margin-bottom: 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;const W1=g.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 0;
  opacity: ${e=>e.$isVisible?1:0};
  transition: opacity 0.4s ease-out;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,Ni=g.div`
  background: ${e=>e.$dark?"#234255":"white"};
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  cursor: ${e=>e.onClick?"pointer":"default"};
  opacity: 0;
  transform: translateY(20px);
  animation: ${e=>e.$isVisible?"slideIn 0.4s cubic-bezier(0.2, 0, 0, 1) forwards":"none"};
  animation-delay: ${e=>e.$index*.08}s;

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
    transform: ${e=>e.$isVisible?"translateY(-4px)":"translateY(20px)"};
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }

  svg {
    width: 32px;
    height: 32px;
    margin-bottom: 1rem;
    color: #29ba9b;
    opacity: 0;
    transform: scale(0.95);
    animation: ${e=>e.$isVisible?"iconFade 0.3s ease-out forwards":"none"};
    animation-delay: ${e=>e.$index*.08+.15}s;

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
    color: ${e=>e.$dark?"white":"#234255"};
    margin-bottom: 0.5rem;
    opacity: 0;
    transform: translateY(8px);
    animation: ${e=>e.$isVisible?"titleSlide 0.3s ease-out forwards":"none"};
    animation-delay: ${e=>e.$index*.08+.2}s;

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
    color: ${e=>e.$dark?"rgba(255, 255, 255, 0.8)":"#64748b"};
    line-height: 1.4;
    font-size: 0.875rem;
    opacity: 0;
    animation: ${e=>e.$isVisible?"fadeIn 0.3s ease-out forwards":"none"};
    animation-delay: ${e=>e.$index*.08+.25}s;

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
  color: ${e=>e.$dark?"rgba(255, 255, 255, 0.8)":"#64748b"};
  font-size: 1rem;
`;const H1=g(If)`
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
`,Y1=g.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 16px;
`,G1=g.div`
  max-width: 800px;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`,Q1=g.h2`
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
`,K1=g.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  line-height: 1.8;
  margin: 0 auto;
  max-width: 700px;
`,X1=g.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  width: 100%;
  position: relative;
  padding-top: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem 2rem;
    padding: 1rem 16px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 3.5rem;
    padding: 1rem 24px;
  }
`;g.div`
  position: relative;
  padding: 0 8px;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, #29ba9b, #a3e635);
    border-radius: 2px;
  }

  h3 {
    font-size: clamp(2.5rem, 4vw, 3.5rem);
    font-weight: 800;
    color: white;
    margin-bottom: 0.75rem;
    line-height: 1;

    @media (max-width: 768px) {
      font-size: clamp(2rem, 3.5vw, 3rem);
      margin-bottom: 0.5rem;
  }
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.125rem;
    font-weight: 500;
    letter-spacing: 0.5px;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;const Z1=g.div`
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
  opacity: ${e=>e.$show?1:0};
  visibility: ${e=>e.$show?"visible":"hidden"};
  
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
`;function J1(){const e=ai(),[t,n]=k.useState({activePlayers:0,tournamentsHosted:0,playerSatisfaction:0,clubPartners:0}),[r,i]=k.useState(!0),[o,l]=O1({threshold:.2});k.useEffect(()=>{const d=document.querySelector("footer");if(!d)return;const m=new IntersectionObserver(([h])=>{h.isIntersecting&&i(!1)},{threshold:.1});return m.observe(d),()=>{d&&m.unobserve(d)}},[]);const s=d=>{window.scrollTo(0,0),e(d)},u=()=>{window.scrollTo({top:window.innerHeight,behavior:"smooth"})};return k.useEffect(()=>{(async()=>{try{n({activePlayers:0,tournamentsHosted:0,playerSatisfaction:0,clubPartners:0})}catch(m){console.error("Error fetching stats:",m)}})()},[]),a.jsx(a.Fragment,{children:a.jsxs("main",{children:[a.jsxs(D1,{children:[a.jsxs(F1,{children:[a.jsxs(A1,{children:["Philippine ",a.jsx("span",{children:"Pickleball"})," League"]}),a.jsx(B1,{children:"Join the fastest growing pickleball community in the Philippines. Connect with players, join tournaments, and track your progress in a vibrant sports community."}),a.jsx(U1,{children:a.jsx(V1,{to:"/register",$primary:!0,$fullWidth:!0,children:"Get Started"})})]}),a.jsxs(Z1,{onClick:u,$show:r,children:[a.jsx("span",{className:"scroll-text",children:"Scroll Down"}),a.jsxs("div",{className:"arrows",children:[a.jsx("div",{className:"arrow"}),a.jsx("div",{className:"arrow"}),a.jsx("div",{className:"arrow"})]})]})]}),a.jsx(If,{children:a.jsx(yc,{children:a.jsxs(W1,{ref:o,$isVisible:l,children:[a.jsxs(Ni,{onClick:()=>s("/forum"),$index:0,$isVisible:l,children:[a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"})}),a.jsx("h3",{children:"Forum"}),a.jsx("p",{children:"Join discussions and connect with the pickleball community"})]}),a.jsxs(Ni,{onClick:()=>s("/tournament"),$index:1,$isVisible:l,children:[a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})}),a.jsx("h3",{children:"Tournaments"}),a.jsx("p",{children:"Find and join upcoming pickleball tournaments"})]}),a.jsxs(Ni,{onClick:()=>s("/ranks"),$index:2,$isVisible:l,children:[a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),a.jsx("h3",{children:"Ranks"}),a.jsx("p",{children:"Check player rankings and track your progress"})]}),a.jsxs(Ni,{onClick:()=>s("/clubs-courts"),$index:3,$isVisible:l,children:[a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),a.jsx("path",{d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),a.jsx("h3",{children:"Clubs & Courts"}),a.jsx("p",{children:"Find nearby pickleball courts and local clubs"})]})]})})}),a.jsx(H1,{children:a.jsx(yc,{children:a.jsxs(Y1,{children:[a.jsxs(G1,{children:[a.jsxs(Q1,{children:["About ",a.jsx("span",{children:"Philippine Pickleball League"})]}),a.jsx(K1,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),a.jsxs(X1,{children:[a.jsxs("div",{children:[a.jsx("h3",{children:t.activePlayers>0?`${t.activePlayers}+`:"0"}),a.jsx("p",{children:"Active Players"})]}),a.jsxs("div",{children:[a.jsx("h3",{children:t.tournamentsHosted>0?`${t.tournamentsHosted}+`:"0"}),a.jsx("p",{children:"Tournaments Hosted"})]}),a.jsxs("div",{children:[a.jsx("h3",{children:t.playerSatisfaction>0?`${t.playerSatisfaction}%`:"0%"}),a.jsx("p",{children:"Player Satisfaction"})]}),a.jsxs("div",{children:[a.jsx("h3",{children:t.clubPartners>0?`${t.clubPartners}+`:"0"}),a.jsx("p",{children:"Club Partners"})]})]})]})})})]})})}const q1=g.div`
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
`,ex=g.div`
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
`,wc=g($t)`
  display: block;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 8px;
  transition: all 0.2s ease;

  ${e=>e.$primary?`
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
`,As=({isOpen:e,onClose:t,title:n,message:r})=>e?a.jsx(q1,{onClick:t,children:a.jsxs(ex,{onClick:i=>i.stopPropagation(),children:[a.jsx("h2",{children:n||"Sign in Required"}),a.jsx("p",{children:r||"Please sign in or register to continue"}),a.jsx(wc,{to:"/signin",children:"Sign In"}),a.jsx(wc,{to:"/register",$primary:!0,children:"Register"})]})}):null,tx=g.div`
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
`,nx=g.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  padding-top: 0px;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    width: 100%;
    max-width: 100%;
  }
`,rx=g.div`
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
`,ix=g.button`
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

  @media (max-width: 768px) {
    padding: 16px;
    gap: 12px;
  }

  &:hover {
    color: #29ba9b;
  }
`,ox=g.div`
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
`,lx=g.div`
  border-top: 1px solid #e2e8f0;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 12px 16px;
    gap: 12px;
    flex-wrap: wrap;
  }
`,ax=g.button`
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

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 13px;
    flex: 1;
    justify-content: center;
  }

  svg {
    width: 20px;
    height: 20px;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;

    @media (max-width: 768px) {
      width: 18px;
      height: 18px;
    }
  }

  &:hover {
    color: #29ba9b;
    background: #f1f5f9;
  }
`,sx=g.article`
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
`,ux=g.div`
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    padding: 14px 16px;
    gap: 12px;
  }
`,cx=g.div`
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
`,dx=g.div`
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
`,px=g.div`
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
`,kc=g.div`
  display: grid;
  gap: 4px;
  border-radius: 8px;
  overflow: hidden;
  margin: 0 20px;
  
  @media (max-width: 768px) {
    margin: 0 16px;
    gap: 3px;
  }
  
  &.two-images {
    grid-template-columns: 1fr 1fr;
  }
  
  &.four-images {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  
  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    transition: transform 0.3s ease;

    @media (hover: hover) {
      &:hover {
        transform: scale(1.02);
      }
    }
  }
`,fx=g.div`
  padding: 16px 20px;
  display: flex;
  gap: 20px;
  border-top: 1px solid #e2e8f0;
  margin-top: 16px;

  @media (max-width: 768px) {
    padding: 14px 16px;
    gap: 14px;
  }

  button {
    background: none;
    border: none;
    padding: 8px 12px;
    color: #64748b;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 20px;
    transition: all 0.2s ease;

    @media (max-width: 768px) {
      padding: 10px;
      font-size: 13px;
      gap: 8px;
      flex: 1;
      justify-content: center;
    }

    &:hover {
      color: #29ba9b;
      background: #f1f5f9;
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
`;g.div`
  border-top: 1px solid #efefef;
  padding: 16px;
  background: white;
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
`;const hx=g.div`
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
`,mx=g.div`
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
`,gx=g.div`
  padding: 12px 16px;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,xx=g.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #262626;
`,Sc=g.button`
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
`,vx=g.div`
  padding: 16px;
`,yx=g.textarea`
  width: 100%;
  min-height: 150px;
  padding: 12px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  resize: none;
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 16px;
  
  &:focus {
    outline: none;
    border-color: #29ba9b;
  }
`,wx=g.div`
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
`,kx=g.button`
  width: 100%;
  padding: 12px;
  background: #29ba9b;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 16px;
  
  &:hover {
    background: #234255;
  }
  
  &:disabled {
    background: #dbdbdb;
    cursor: not-allowed;
  }
`,Sx=g.div`
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
`,jx=g.div`
  text-align: center;
  padding: 2rem;
  color: #ef4444;
  background: #fef2f2;
  border-radius: 8px;
  margin: 1rem 0;
`,Cx=g.div`
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
`,bx=g.div`
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
`,Ex=g.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  width: 100%;
  height: 100%;
  transform: translateX(${e=>e.$offset}px);
  transition: transform ${e=>e.$isAnimating?"0.3s":"0s"} ease-out;
`,Px=g.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
`,zx=g.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  user-select: none;
  -webkit-user-drag: none;
`,jc=g.button`
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

  ${e=>e.$left?"left: 24px;":"right: 24px;"}

  @media (max-width: 768px) {
    display: none;
  }
`,$x=g.div`
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
`;function _x(){return a.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",children:a.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})}function Lx(){return a.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",children:a.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})})}function Cc(){return a.jsxs("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),a.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),a.jsx("path",{d:"M21 15l-5-5L5 21"})]})}function bc(){return a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:a.jsx("path",{d:"M18 6L6 18M6 6l12 12",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})})}function Nx(){return a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",opacity:"0.2"}),a.jsx("path",{d:"M12 2C6.47715 2 2 6.47715 2 12C2 14.7505 3.14229 17.2432 4.98959 19"})]})}function Rx(){return a.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:a.jsx("path",{d:"M15 18l-6-6 6-6",strokeLinecap:"round",strokeLinejoin:"round"})})}function Tx(){return a.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:a.jsx("path",{d:"M9 18l6-6-6-6",strokeLinecap:"round",strokeLinejoin:"round"})})}function Ix(){const[e,t]=k.useState([]),[n,r]=k.useState(!0),[i,o]=k.useState(null),[l,s]=k.useState(!1),[u,d]=k.useState(!1),[m,h]=k.useState(""),[x,y]=k.useState([]),[S,v]=k.useState(!1),[j,p]=k.useState(1),[c,f]=k.useState(!0),[w,E]=k.useState(!1),[C,b]=k.useState(0),[_,z]=k.useState([]),[N,X]=k.useState(null),[Q,V]=k.useState(null),[jt,Ge]=k.useState(0),[Kt,De]=k.useState(!1),$=k.useRef(null),T=50;k.useEffect(()=>{(async()=>{try{r(!0),o(null),await new Promise(Z=>setTimeout(Z,1e3)),t(rt),f(!1)}catch{o("Failed to load posts. Please try again later.")}finally{r(!1)}})()},[j]);const I=async(R,Z,ye)=>{R.preventDefault();{s(!0);return}},F=async R=>{R.preventDefault();{s(!0);return}},B=async()=>{try{v(!0),d(!1),h(""),y([])}catch{}finally{v(!1)}},ct=(R,Z)=>{z(R),b(Z),E(!0),document.body.style.overflow="hidden"},Ce=()=>{E(!1),z([]),b(0),document.body.style.overflow="auto"},Fe=()=>{var R;return((R=$.current)==null?void 0:R.clientWidth)||0},se=()=>-C*Fe();k.useEffect(()=>{w&&Ge(se())},[w,C]);const Qe=R=>{V(null),X(R.touches[0].clientX),De(!1)},Xt=R=>{V(R.touches[0].clientX);const ye=R.touches[0].clientX-N,ui=se();C===0&&ye>0||C===_.length-1&&ye<0?Ge(ui+ye*.2):Ge(ui+ye)},dt=()=>{if(!N||!Q)return;const R=N-Q,Z=R>T,ye=R<-T;De(!0),Z&&C<_.length-1?kn():ye&&C>0?Zt():Ge(se()),X(null),V(null)},kn=()=>{De(!0),b(R=>{const Z=R===_.length-1?R:R+1;return Ge(-Z*Fe()),Z})},Zt=()=>{De(!0),b(R=>{const Z=R===0?R:R-1;return Ge(-Z*Fe()),Z})};k.useEffect(()=>{const R=()=>{Ge(se())};return window.addEventListener("resize",R),()=>window.removeEventListener("resize",R)},[C]);const rt=[{id:"1",author:{id:"101",username:"Sarah Lee",initials:"SL",avatarColor:"#234255"},content:"Great matches at the club today! Here are some highlights 📸",images:[{id:"1",url:"https://placehold.co/400x400/234255/FFF?text=Match+1",alt:"Match highlight 1"},{id:"2",url:"https://placehold.co/400x400/234255/FFF?text=Match+2",alt:"Match highlight 2"},{id:"3",url:"https://placehold.co/400x400/234255/FFF?text=Match+3",alt:"Match highlight 3"},{id:"4",url:"https://placehold.co/400x400/234255/FFF?text=Match+4",alt:"Match highlight 4"}],createdAt:"2025-06-16T10:00:00Z",likeCount:245,commentCount:18,isLiked:!1},{id:"2",author:{id:"102",username:"Mike Chen",initials:"MC",avatarColor:"#29ba9b"},content:"New paddles just arrived! Can't wait to try them out this weekend 🏓",images:[{id:"5",url:"https://placehold.co/400x400/29ba9b/FFF?text=Paddle+1",alt:"New paddle front"},{id:"6",url:"https://placehold.co/400x400/29ba9b/FFF?text=Paddle+2",alt:"New paddle back"}],createdAt:"2025-06-16T08:00:00Z",likeCount:132,commentCount:24,isLiked:!1}];return a.jsx(tx,{children:a.jsxs(nx,{children:[a.jsxs(rx,{children:[a.jsxs(ix,{onClick:F,children:[a.jsx(ox,{}),"What's happening in pickleball?"]}),a.jsx(lx,{children:a.jsxs(ax,{onClick:F,children:[a.jsx(Cc,{}),"Photo/Video"]})})]}),n&&a.jsx(Sx,{children:a.jsx(Nx,{})}),i&&a.jsx(jx,{children:i}),!n&&!i&&e.map(R=>{var Z;return a.jsxs(sx,{children:[a.jsxs(ux,{children:[a.jsx(cx,{style:{background:R.author.avatarColor},children:R.author.initials}),a.jsxs(dx,{children:[a.jsx("h3",{children:R.author.username}),a.jsx("span",{children:new Date(R.createdAt).toLocaleDateString()})]})]}),a.jsxs(px,{children:[a.jsx("p",{children:R.content}),((Z=R.images)==null?void 0:Z.length)>0&&a.jsx(kc,{className:R.images.length===2?"two-images":"four-images",children:R.images.map((ye,ui)=>a.jsx("img",{src:ye.url,alt:ye.alt,onClick:()=>ct(R.images,ui),style:{cursor:"pointer"}},ye.id))})]}),a.jsxs(fx,{children:[a.jsxs("button",{onClick:ye=>I(ye,"like",R.id),children:[a.jsx(_x,{}),R.likeCount]}),a.jsxs("button",{onClick:ye=>I(ye,"comment",R.id),children:[a.jsx(Lx,{}),R.commentCount]})]})]},R.id)}),!n&&!i&&e.length===0&&a.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#64748b"},children:"No posts yet. Be the first to share!"}),l&&a.jsx(As,{isOpen:l,onClose:()=>s(!1),title:"Join the Conversation!",message:"Sign in or register to interact with the community"}),u&&a.jsx(hx,{onClick:()=>d(!1),children:a.jsxs(mx,{onClick:R=>R.stopPropagation(),children:[a.jsxs(gx,{children:[a.jsx(xx,{children:"Create Post"}),a.jsx(Sc,{onClick:()=>d(!1),children:a.jsx(bc,{})})]}),a.jsxs(vx,{children:[a.jsx(yx,{placeholder:"What's happening in pickleball?",value:m,onChange:R=>h(R.target.value)}),a.jsxs(wx,{onClick:()=>document.getElementById("imageInput").click(),children:[a.jsx(Cc,{}),a.jsx("p",{children:"Click to add photos/videos"}),a.jsx("input",{id:"imageInput",type:"file",multiple:!0,accept:"image/*,video/*",style:{display:"none"},onChange:R=>{const Z=Array.from(R.target.files);y(Z)}})]}),x.length>0&&a.jsx(kc,{className:x.length===2?"two-images":"four-images",children:x.map((R,Z)=>a.jsx("img",{src:URL.createObjectURL(R),alt:`Selected image ${Z+1}`},Z))}),a.jsx(kx,{disabled:!m.trim()&&x.length===0,onClick:B,children:S?"Posting...":"Post"})]})]})}),w&&a.jsx(Cx,{onClick:Ce,children:a.jsxs(bx,{ref:$,onClick:R=>R.stopPropagation(),onTouchStart:Qe,onTouchMove:Xt,onTouchEnd:dt,children:[a.jsx(Ex,{$offset:jt,$isAnimating:Kt,children:_.map((R,Z)=>a.jsx(Px,{children:a.jsx(zx,{src:R.url,alt:R.alt,draggable:!1})},R.id))}),a.jsx(jc,{$left:!0,onClick:Zt,disabled:C===0,children:a.jsx(Rx,{})}),a.jsx(jc,{onClick:kn,disabled:C===_.length-1,children:a.jsx(Tx,{})}),a.jsx(Sc,{onClick:Ce,children:a.jsx(bc,{})}),a.jsxs($x,{children:[C+1," / ",_.length]})]})})]})})}const Mx=g.div`
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
`,Ox=g.h1`
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
`,Dx=g.p`
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
`,Fx=g.div`
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
`,Ax=g.div`
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
`,Bx=g.div`
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
`,Ux=g.div`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  backdrop-filter: blur(8px);
  z-index: 1;
  
  ${e=>{switch(e.status.toLowerCase()){case"open":return`
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
`,Vx=g.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`,Wx=g.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 8px;
  line-height: 1.3;
`,Hx=g.div`
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
`,Mf=g.div`
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
`,Yx=g(Mf)`
  margin-bottom: 16px;
`,Gx=g.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: auto;
  margin-bottom: 16px;
`,Of=g.div`
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
`,Qx=g(Of)`
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
`,Kx=g.button`
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
`;const Xx=g.div`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`,Zx=g.div`
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
`,Jx=g.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`,Ec=g.select`
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
`,qx=g.div`
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
`;function e2(){return a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"#29ba9b",fillOpacity:"0.1",stroke:"#29ba9b",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M8 21h8"}),a.jsx("path",{d:"M12 17v4"}),a.jsx("path",{d:"M7 4h10"}),a.jsx("path",{d:"M17 4v8a5 5 0 0 1-10 0V4"}),a.jsx("path",{d:"M7 4c-3 0-4 2-4 3v1c0 2 2 3 4 3"}),a.jsx("path",{d:"M17 4c3 0 4 2 4 3v1c0 2-2 3-4 3"})]})}function t2(){return a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:a.jsx("path",{d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",strokeLinecap:"round",strokeLinejoin:"round"})})}function n2(){return a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[a.jsx("path",{d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M12 13a3 3 0 100-6 3 3 0 000 6z",strokeLinecap:"round",strokeLinejoin:"round"})]})}function r2(){return a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[a.jsx("circle",{cx:"12",cy:"12",r:"9",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("text",{x:"12",y:"14.5",dominantBaseline:"middle",textAnchor:"middle",fontSize:"14",stroke:"none",fill:"currentColor",style:{fontWeight:"bold"},children:"₱"})]})}function i2(){return a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:a.jsx("path",{d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",strokeLinecap:"round",strokeLinejoin:"round"})})}function o2(){return a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",strokeLinecap:"round",strokeLinejoin:"round"})})}const l2=(e,t,n,r)=>{const i=new Date,o=new Date(e),l=new Date(t);return o<i?"Completed":i>l||n>=r?"Closed":"Open"};function a2(){const[e,t]=k.useState([]),[n,r]=k.useState(!0),[i,o]=k.useState(null),[l,s]=k.useState(""),[u,d]=k.useState(""),[m,h]=k.useState(""),[x,y]=k.useState(!1),S=[{label:"₱0 - ₱3,000",min:0,max:3e3},{label:"₱3,001 - ₱6,000",min:3001,max:6e3},{label:"₱6,001 - ₱10,000",min:6001,max:1e4}],v=e.filter(c=>{const f=c.name.toLowerCase().includes(l.toLowerCase())||c.location.toLowerCase().includes(l.toLowerCase()),w=!u||c.tier===parseInt(u),E=!m||c.entryFee>=S[parseInt(m)].min&&c.entryFee<=S[parseInt(m)].max;return f&&w&&E}),j=async()=>{try{r(!0),o(null);const f=[{id:"1",name:"PPL Summer Championship 2025",date:"2025-08-15T09:00:00Z",location:"Manila Pickleball Center",entryFee:1500,prizePool:5e4,maxParticipants:64,currentParticipants:42,registrationDeadline:"2025-07-01T00:00:00Z",bannerUrl:"https://images.unsplash.com/photo-1686721135036-22ac6cbb8ce8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",tier:3},{id:"2",name:"Beginners Welcome Tournament",date:"2025-07-20T09:00:00Z",location:"Quezon City Sports Complex",entryFee:800,prizePool:2e4,maxParticipants:32,currentParticipants:32,registrationDeadline:"2025-05-10T00:00:00Z",bannerUrl:"https://images.unsplash.com/photo-1723004714201-cf224222b897?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",tier:2},{id:"3",name:"Indoor Championship Series",date:"2025-07-01T09:00:00Z",location:"BGC Indoor Sports Complex",entryFee:2e3,prizePool:75e3,maxParticipants:128,currentParticipants:85,registrationDeadline:"2025-06-30T00:00:00Z",bannerUrl:"https://plus.unsplash.com/premium_photo-1709048991290-1d36455a2895?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",tier:3}].map(w=>({...w,status:l2(w.date,w.registrationDeadline,w.currentParticipants,w.maxParticipants)}));t(f)}catch(c){console.error("Failed to fetch tournaments:",c),o("Failed to load tournaments. Please try again later.")}finally{r(!1)}};k.useEffect(()=>{j()},[]);const p=async c=>{{y(!0);return}};return n?a.jsx("div",{children:"Loading tournaments..."}):i?a.jsx("div",{children:i}):a.jsxs(Mx,{children:[a.jsx(Ox,{children:"Tournaments"}),a.jsx(Dx,{children:"Discover and join exciting pickleball tournaments across the Philippines. From beginner-friendly events to professional championships, find the perfect competition to showcase your skills."}),a.jsxs(Xx,{children:[a.jsxs(Zx,{children:[a.jsx(o2,{}),a.jsx("input",{type:"text",placeholder:"Search tournaments by name or location...",value:l,onChange:c=>s(c.target.value)})]}),a.jsxs(Jx,{children:[a.jsxs(Ec,{value:u,onChange:c=>d(c.target.value),children:[a.jsx("option",{value:"",children:"All Tiers"}),a.jsx("option",{value:"1",children:"Tier 1"}),a.jsx("option",{value:"2",children:"Tier 2"}),a.jsx("option",{value:"3",children:"Tier 3"})]}),a.jsxs(Ec,{value:m,onChange:c=>h(c.target.value),children:[a.jsx("option",{value:"",children:"All Fees"}),S.map((c,f)=>a.jsx("option",{value:f,children:c.label},f))]})]})]}),v.length>0?a.jsx(Fx,{children:v.map(c=>a.jsxs(Ax,{children:[a.jsxs(Bx,{children:[c.bannerUrl&&a.jsx("img",{src:c.bannerUrl,alt:c.name}),a.jsx(Ux,{status:c.status,children:c.status})]}),a.jsxs(Vx,{children:[a.jsx(Wx,{children:c.name}),a.jsxs(Hx,{children:[a.jsx(e2,{}),"Tier ",c.tier]}),a.jsxs(Mf,{children:[a.jsx(t2,{}),new Date(c.date).toLocaleDateString()]}),a.jsxs(Yx,{children:[a.jsx(n2,{}),c.location]}),a.jsxs(Gx,{children:[a.jsxs(Of,{children:[a.jsx(i2,{}),a.jsxs("div",{children:[c.currentParticipants,"/",c.maxParticipants]})]}),a.jsxs(Qx,{children:[a.jsx(r2,{}),a.jsxs("div",{children:[a.jsxs("span",{children:["₱",c.entryFee]}),a.jsx("span",{})]})]})]}),a.jsx(Kx,{onClick:()=>p(c.id),disabled:c.currentParticipants>=c.maxParticipants,children:c.currentParticipants>=c.maxParticipants?"Full":"Register Now"})]})]},c.id))}):a.jsxs(qx,{children:[a.jsx("h3",{children:"No Tournaments Found"}),a.jsx("p",{children:l||u||m?"Try adjusting your search criteria or filters to find more tournaments.":"There are no tournaments available at the moment. Please check back later."})]}),x&&a.jsx(As,{isOpen:x,onClose:()=>y(!1),title:"Join the Tournament!",message:"Sign in or register to participate in tournaments"})]})}const El=g.div`
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
`,s2=g.div`
  margin-bottom: 40px;
`,u2=g.h1`
  font-size: 2.5rem;
  color: #234255;
  margin-bottom: 12px;
  font-weight: 800;
  letter-spacing: -0.5px;
`,c2=g.p`
  color: #64748b;
  font-size: 1.1rem;
  max-width: 600px;
  line-height: 1.6;
  margin: 0 auto;
  text-align: center;
`,d2=g.div`
  color: #64748b;
  font-size: 0.875rem;
  text-align: center;
  margin-top: 8px;
`,p2=g.div`
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
`,f2=g.div`
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
`,h2=g.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`,Pc=g.select`
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
`,m2=g.input`
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
`,g2=g.div`
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
`,x2=g.button`
  padding: 12px 24px;
  background: ${e=>e.$active?"#f8fafc":"transparent"};
  border: none;
  border-bottom: 2px solid ${e=>e.$active?"#29ba9b":"transparent"};
  color: ${e=>e.$active?"#29ba9b":"#64748b"};
  font-weight: ${e=>e.$active?"600":"500"};
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
  border-radius: 8px 8px 0 0;
  outline: none;
  
  &:hover {
    color: #29ba9b;
    background: ${e=>e.$active?"#f8fafc":"#f1f5f9"};
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
`,v2=g.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,y2=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 16px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    margin-bottom: 12px;
  }
`,w2=g.div`
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
`,k2=g.div`
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
`,S2=g.div`
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
`,j2=g.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  
  @media (max-width: 768px) {
    gap: 8px;
  }
`,C2=g.div`
  font-weight: 500;
  color: #234255;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`,b2=g.div`
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
`;const Pl=g.div`
  font-weight: 500;
  color: #234255;
  display: flex;
  align-items: center;
  height: 100%;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`,E2=g.div`
  font-weight: 600;
  color: #64748b;
  display: flex;
  align-items: center;
  height: 100%;
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`,P2=g.div`
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

  ${e=>e.$rank===1&&`
    background: linear-gradient(135deg, #234255 0%, #29ba9b 100%);
  `}

  ${e=>e.$rank===2&&`
    background: linear-gradient(135deg, #234255 0%, #64748b 100%);
  `}

  ${e=>e.$rank===3&&`
    background: linear-gradient(135deg, #234255 0%, #cd7f32 100%);
  `}
`,z2=g.div`
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
`,$2=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  margin-top: 12px;
`,_2=g.div`
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
`,L2=g.div`
  text-align: center;
`,N2=g.h3`
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
`;const R2=g.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-top: 16px;

  @media (max-width: 768px) {
    gap: 6px;
    margin-top: 12px;
  }
`,zl=g.div`
  padding: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 6px;
  }
`,$l=g.div`
  font-size: ${e=>e.$large?"1.25rem":"1rem"};
  font-weight: 600;
  color: white;
  margin-bottom: 2px;
  
  @media (max-width: 768px) {
    font-size: ${e=>e.$large?"1.1rem":"0.9rem"};
  }
`,_l=g.div`
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
  width: ${e=>e.$percentage}%;
  transition: width 1s ease;
`;const T2=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  color: #64748b;
  font-size: 1.1rem;
`,I2=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  color: #ef4444;
  font-size: 1.1rem;
  text-align: center;
  flex-direction: column;
  gap: 16px;
`,M2=g.button`
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
`;function zc(e){return e.split(" ").map(t=>t[0]).join("").toUpperCase()}function $c(e){return new Intl.NumberFormat().format(e)}function O2(){return a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",strokeLinecap:"round",strokeLinejoin:"round"})})}function D2(){const[e,t]=k.useState([]),[n,r]=k.useState("mens-singles"),[i,o]=k.useState(!0),[l,s]=k.useState(null),[u,d]=k.useState(""),[m,h]=k.useState(""),[x,y]=k.useState("adult"),[S,v]=k.useState(""),j=["19+","35+","50+","60+","70+","75+","80+"],p=["18 and Under","16 and Under","14 and Under","12 and Under"],c=(z,N)=>{if(!N)return!0;if(x==="adult"){const X=parseInt(N.replace("+",""));return z>=X}else{if(!N)return z<=18;const X=parseInt(N.split(" ")[0]);return z<=X}},f=z=>{if(!z)return[];let N=z.filter(Q=>x==="adult"?Q.age>=19:Q.age<=18);return N=N.filter(Q=>{const V=!u||Q.name.toLowerCase().includes(u.toLowerCase()),jt=c(Q.age,S);return V&&jt}),[...N].sort((Q,V)=>V.points-Q.points).map((Q,V)=>({...Q,rank:V+1}))};k.useEffect(()=>{const z=new Date,N={year:"numeric",month:"long",day:"numeric"};h(z.toLocaleDateString("en-US",N)),w()},[]);const w=async()=>{var z;try{o(!0),s(null);const N=[{id:"mens-singles",name:"MEN'S SINGLES",lastUpdated:"2024-01-20T10:00:00Z",rankings:[{id:"1",name:"Juan Dela Cruz",age:28,rank:1,points:2500,gamesPlayed:45,wins:38,losses:7,winRate:"84.4"},{id:"2",name:"Mike Santos",age:35,rank:2,points:2350,gamesPlayed:42,wins:34,losses:8,winRate:"81.0"},{id:"3",name:"Carlo Garcia",age:45,rank:3,points:2200,gamesPlayed:38,wins:30,losses:8,winRate:"78.9"},{id:"4",name:"Miguel Lopez",age:61,rank:4,points:2100,gamesPlayed:35,wins:27,losses:8,winRate:"77.1"},{id:"j1",name:"Alex Santos",age:15,rank:5,points:1800,gamesPlayed:30,wins:25,losses:5,winRate:"83.3"},{id:"j2",name:"Marco Reyes",age:13,rank:6,points:1700,gamesPlayed:28,wins:22,losses:6,winRate:"78.6"}]},{id:"womens-singles",name:"WOMEN'S SINGLES",lastUpdated:"2024-01-20T10:00:00Z",rankings:[{id:"1",name:"Maria Santos",age:28,rank:1,points:2450,gamesPlayed:43,wins:36,losses:7,winRate:"83.7"},{id:"2",name:"Ana Garcia",age:45,rank:2,points:2300,gamesPlayed:40,wins:32,losses:8,winRate:"80.0"},{id:"3",name:"Sofia Reyes",age:52,rank:3,points:2150,gamesPlayed:37,wins:29,losses:8,winRate:"78.4"},{id:"4",name:"Isabella Tan",age:71,rank:4,points:2e3,gamesPlayed:30,wins:22,losses:8,winRate:"73.3"},{id:"j1",name:"Alexandra Santos",age:15,rank:5,points:1850,gamesPlayed:32,wins:26,losses:6,winRate:"81.3"},{id:"j2",name:"Diana Garcia",age:17,rank:6,points:1750,gamesPlayed:29,wins:23,losses:6,winRate:"79.3"}]},{id:"mens-doubles",name:"MEN'S DOUBLES",lastUpdated:"2024-01-20T10:00:00Z",rankings:[{id:"1",name:"Juan Dela Cruz",age:28,rank:1,points:2600,gamesPlayed:50,wins:42,losses:8,winRate:"84.0"},{id:"2",name:"Mike Santos",age:35,rank:2,points:2400,gamesPlayed:45,wins:36,losses:9,winRate:"80.0"},{id:"3",name:"Carlo Garcia",age:45,rank:3,points:2250,gamesPlayed:40,wins:31,losses:9,winRate:"77.5"},{id:"4",name:"Miguel Lopez",age:61,rank:4,points:2150,gamesPlayed:38,wins:29,losses:9,winRate:"76.3"},{id:"j1",name:"Alex Santos",age:15,rank:5,points:1900,gamesPlayed:35,wins:27,losses:8,winRate:"77.1"}]},{id:"womens-doubles",name:"WOMEN'S DOUBLES",lastUpdated:"2024-01-20T10:00:00Z",rankings:[{id:"1",name:"Maria Santos",age:28,rank:1,points:2550,gamesPlayed:48,wins:40,losses:8,winRate:"83.3"},{id:"2",name:"Ana Garcia",age:45,rank:2,points:2350,gamesPlayed:43,wins:34,losses:9,winRate:"79.1"},{id:"3",name:"Sofia Reyes",age:52,rank:3,points:2200,gamesPlayed:40,wins:31,losses:9,winRate:"77.5"},{id:"4",name:"Isabella Tan",age:71,rank:4,points:2100,gamesPlayed:35,wins:27,losses:8,winRate:"77.1"},{id:"j1",name:"Alexandra Santos",age:15,rank:5,points:1950,gamesPlayed:32,wins:25,losses:7,winRate:"78.1"}]},{id:"mixed-doubles",name:"MIXED DOUBLES",lastUpdated:"2024-01-20T10:00:00Z",rankings:[{id:"1",name:"Juan Dela Cruz",age:28,rank:1,points:2650,gamesPlayed:52,wins:44,losses:8,winRate:"84.6"},{id:"2",name:"Maria Santos",age:28,rank:2,points:2600,gamesPlayed:50,wins:42,losses:8,winRate:"84.0"},{id:"3",name:"Mike Santos",age:35,rank:3,points:2450,gamesPlayed:47,wins:38,losses:9,winRate:"80.9"},{id:"4",name:"Ana Garcia",age:45,rank:4,points:2400,gamesPlayed:45,wins:36,losses:9,winRate:"80.0"},{id:"5",name:"Carlo Garcia",age:45,rank:5,points:2300,gamesPlayed:42,wins:33,losses:9,winRate:"78.6"},{id:"j1",name:"Alexandra Santos",age:15,rank:6,points:2e3,gamesPlayed:35,wins:27,losses:8,winRate:"77.1"}]}];t(N),r((z=N[0])==null?void 0:z.id)}catch{s("Failed to fetch rankings. Please try again later.")}finally{o(!1)}},E=z=>{const N=f(z),X=N.slice(0,3),Q=N.slice(3);return Q.length===0&&X.length===0?a.jsx("div",{style:{textAlign:"center",padding:"40px",color:"#64748b"},children:"No players found matching your search criteria."}):Q.length===0?null:a.jsxs(w2,{children:[a.jsxs(k2,{children:[a.jsx("div",{children:"Rank"}),a.jsx("div",{children:"Player"}),a.jsx("div",{children:"Age"}),a.jsx("div",{children:"Points"}),a.jsx("div",{children:"Games (W-L)"})]}),Q.slice(0,47).map(V=>a.jsxs(S2,{children:[a.jsx(E2,{children:V.rank}),a.jsxs(j2,{children:[a.jsx(b2,{children:zc(V.name)}),a.jsx(C2,{children:V.name})]}),a.jsx(Pl,{children:V.age}),a.jsx(Pl,{children:$c(V.points)}),a.jsxs(Pl,{children:[V.wins,"-",V.losses]})]},V.id))]})};if(i)return a.jsx(El,{children:a.jsx(T2,{children:"Loading rankings..."})});if(l)return a.jsx(El,{children:a.jsxs(I2,{children:[a.jsx("div",{children:l}),a.jsx(M2,{onClick:w,children:"Try Again"})]})});const C=e.find(z=>z.id===n),_=(C?f(C.rankings):[]).slice(0,3);return a.jsxs(El,{children:[a.jsxs(s2,{children:[a.jsx(u2,{children:"Player Rankings"}),a.jsx(c2,{children:"Track the performance and standings of pickleball players across different categories."}),a.jsxs(d2,{children:["Last Updated: ",m]}),a.jsxs(p2,{children:[a.jsxs(f2,{children:[a.jsx(O2,{}),a.jsx(m2,{type:"text",placeholder:"Search by player name...",value:u,onChange:z=>d(z.target.value)})]}),a.jsxs(h2,{children:[a.jsxs(Pc,{value:x,onChange:z=>{y(z.target.value),v("")},children:[a.jsx("option",{value:"adult",children:"Adult"}),a.jsx("option",{value:"junior",children:"Junior"})]}),a.jsxs(Pc,{value:S,onChange:z=>v(z.target.value),children:[a.jsx("option",{value:"",children:"All Ages"}),x==="adult"?j.map(z=>a.jsx("option",{value:z,children:z},z)):p.map(z=>a.jsx("option",{value:z,children:z},z))]})]})]})]}),a.jsx(g2,{children:e.map(z=>a.jsx(x2,{$active:z.id===n,onClick:()=>r(z.id),children:z.name},z.id))}),a.jsxs(v2,{children:[a.jsx(y2,{children:_.map(z=>a.jsxs(P2,{$rank:z.rank,children:[a.jsx(z2,{children:z.rank}),a.jsxs($2,{children:[a.jsx(_2,{children:zc(z.name)}),a.jsx(L2,{children:a.jsx(N2,{children:z.name})})]}),a.jsxs(R2,{children:[a.jsxs(zl,{children:[a.jsx($l,{children:z.age}),a.jsx(_l,{children:"Age"})]}),a.jsxs(zl,{children:[a.jsx($l,{children:$c(z.points)}),a.jsx(_l,{children:"Points"})]}),a.jsxs(zl,{children:[a.jsxs($l,{children:[z.wins,"-",z.losses]}),a.jsx(_l,{children:"Games (W-L)"})]})]})]},z.id))}),E((C==null?void 0:C.rankings)||[])]})]})}const Ll=g.div`
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
`,Nl=g.div`
  margin-bottom: 32px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px;
  
  h1 {
    color: #234255;
    font-size: 2rem;
    margin-bottom: 12px;
    font-weight: 800;
    letter-spacing: -0.5px;

    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  p {
    color: #64748b;
    font-size: 1rem;
    line-height: 1.6;
    
    @media (min-width: 768px) {
    font-size: 1.1rem;
    }
  }
`,F2=g.div`
  margin: 0 auto 32px;
  display: flex;
  gap: 16px;
  max-width: 1200px;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    gap: 20px;
    margin-bottom: 40px;
  }
`,A2=g.div`
  position: relative;
  flex: 1;
  min-width: 200px;

  svg {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    color: #64748b;
  }
`,B2=g.input`
  width: 100%;
  padding: 12px 16px 12px 48px;
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  color: #1a1a1a;
  background: white;
  transition: all 0.2s ease;
  height: 44px;
  
  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  
  &::placeholder {
    color: #94a3b8;
  }
`,U2=g.div`
  display: flex;
  gap: 8px;
  flex-wrap: nowrap;

  @media (min-width: 768px) {
    gap: 10px;
  }
`,Rl=g.button`
  padding: 10px 16px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid ${e=>e.$active?"#29ba9b":"#e2e8f0"};
  background: ${e=>e.$active?"#29ba9b":"white"};
  color: ${e=>e.$active?"white":"#64748b"};
  white-space: nowrap;
  height: 44px;
  
  @media (min-width: 768px) {
    padding: 10px 20px;
    font-size: 0.95rem;
  }
  
  &:hover {
    border-color: #29ba9b;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(41, 186, 155, 0.1);
  }
`,V2=g.div`
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
`,W2=g.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.15);
  }
`,H2=g.div`
  height: 160px;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${e=>{switch(e.$imageIndex){case 0:return'url("https://images.unsplash.com/photo-1686721135030-e2ab79e27b16?q=80&w=1170&auto=format&fit=crop")';case 1:return'url("https://images.unsplash.com/photo-1515017804404-92b19fdfe6ac?q=80&w=1440&auto=format&fit=crop")';case 2:return'url("https://plus.unsplash.com/premium_photo-1709932754899-5c36599fface?q=80&w=1209&auto=format&fit=crop")';default:return'url("https://images.unsplash.com/photo-1686721135030-e2ab79e27b16?q=80&w=1170&auto=format&fit=crop")'}}};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5));
  }

  @media (min-width: 768px) {
    height: 180px;
  }
`,Y2=g.div`
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  
  h3 {
    color: #234255;
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 6px;
    letter-spacing: -0.5px;
  }
  
  p {
    color: #64748b;
    font-size: 0.9rem;
    margin-bottom: 12px;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`,G2=g.div`
  display: flex;
  gap: 12px;
  font-size: 0.85rem;
  color: #64748b;
  flex-wrap: wrap;
  margin-bottom: 70px;
  
  div {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: #29ba9b;
  }
`,Q2=g.span`
  display: inline-flex;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 8px;
  background: ${e=>e.type==="club"?"#e0f2fe":"#dcfce7"};
  color: ${e=>e.type==="club"?"#0369a1":"#166534"};
`,K2=g.button`
  width: calc(100% - 32px);
  padding: 10px;
  background: #29ba9b;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.95rem;
  position: absolute;
  bottom: 16px;
  left: 16px;

  &:hover {
    background: #238f77;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(41, 186, 155, 0.2);
  }

  &:disabled {
    background: #e2e8f0;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,X2=g.div`
  text-align: center;
  padding: 48px 24px;
  background: white;
  border-radius: 16px;
  color: #64748b;
  font-size: 1.1rem;
  border: 2px dashed #e2e8f0;
  margin-top: 32px;
`,Z2=g.div`
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
`,J2=g.div`
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
`;function q2(){return a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",strokeLinecap:"round",strokeLinejoin:"round"})})}const ev=()=>{const[e,t]=k.useState([]),[n,r]=k.useState(!0),[i,o]=k.useState(null),[l,s]=k.useState(""),[u,d]=k.useState("all"),[m,h]=k.useState(new Set),[x,y]=k.useState(!1);k.useEffect(()=>{S()},[]);const S=async()=>{try{r(!0),o(null),t([{id:"1",name:"Manila Pickleball Club",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",address:"BGC, Taguig City",hours:"6:00 AM - 10:00 PM",type:"club_and_courts",members:120,createdAt:"2025-06-16T08:00:00Z",updatedAt:"2025-06-16T08:00:00Z",ownerId:"user123",contactEmail:"info@manilapickleball.com",contactPhone:"+63 912 345 6789",website:"https://manilapickleball.com",amenities:["Pro Shop","Locker Rooms","Parking"],images:[],isVerified:!0},{id:"2",name:"BGC Pickleball Center",description:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",address:"Bonifacio Global City, Taguig",hours:"7:00 AM - 11:00 PM",type:"club_and_courts",members:85,createdAt:"2025-06-15T10:00:00Z",updatedAt:"2025-06-15T10:00:00Z",ownerId:"user456",contactEmail:"info@bgcpickleball.com",contactPhone:"+63 917 123 4567",amenities:["Air Conditioning","Equipment Rental"],images:[],isVerified:!0},{id:"3",name:"QC Pickleball Community",description:"Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",address:"Katipunan Avenue, Quezon City",type:"club",members:45,createdAt:"2025-06-14T09:00:00Z",updatedAt:"2025-06-14T09:00:00Z",ownerId:"user789",contactEmail:"qcpickleball@gmail.com",contactPhone:"+63 918 765 4321",images:[],isVerified:!0}])}catch(p){o(p.message||"Failed to fetch venues")}finally{r(!1)}},v=k.useMemo(()=>{let p=e;if(l){const c=l.toLowerCase();p=p.filter(f=>f.name.toLowerCase().includes(c)||f.address.toLowerCase().includes(c))}return u!=="all"&&(p=p.filter(c=>u==="clubs"?c.type==="club":u==="courts"?c.type==="club_and_courts":!0)),p},[e,l,u]),j=async p=>{{y(!0);return}};return n?a.jsxs(Ll,{children:[a.jsxs(Nl,{children:[a.jsx("h1",{children:"Clubs & Courts"}),a.jsx("p",{children:"Discover pickleball venues and communities across the Philippines"})]}),a.jsx(Z2,{children:"Loading venues..."})]}):i?a.jsxs(Ll,{children:[a.jsxs(Nl,{children:[a.jsx("h1",{children:"Clubs & Courts"}),a.jsx("p",{children:"Discover pickleball venues and communities across the Philippines."})]}),a.jsx(J2,{children:i})]}):a.jsxs(Ll,{children:[a.jsxs(Nl,{children:[a.jsx("h1",{children:"Clubs & Courts"}),a.jsx("p",{children:"Discover pickleball venues and communities across the Philippines."})]}),a.jsxs(F2,{children:[a.jsxs(A2,{children:[a.jsx(q2,{}),a.jsx(B2,{type:"text",placeholder:"Search by name or location...",value:l,onChange:p=>s(p.target.value)})]}),a.jsxs(U2,{children:[a.jsx(Rl,{$active:u==="all",onClick:()=>d("all"),children:"All"}),a.jsx(Rl,{$active:u==="clubs",onClick:()=>d("clubs"),children:"Clubs Only"}),a.jsx(Rl,{$active:u==="courts",onClick:()=>d("courts"),children:"With Courts"})]})]}),v.length===0?a.jsx(X2,{children:"No venues found matching your criteria"}):a.jsx(V2,{children:v.map((p,c)=>a.jsxs(W2,{children:[a.jsx(H2,{$imageIndex:c%3}),a.jsxs(Y2,{children:[a.jsx("h3",{children:p.name}),a.jsx("div",{children:a.jsx(Q2,{type:p.type==="club"?"club":"courts",children:p.type==="club"?"Club":"Club & Courts"})}),a.jsx("p",{children:p.description}),a.jsxs(G2,{children:[a.jsxs("div",{children:[a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),a.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),p.address]}),p.type==="club_and_courts"&&a.jsxs("div",{children:[a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),a.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),a.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),a.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),p.hours]}),a.jsxs("div",{children:[a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),a.jsx("circle",{cx:"9",cy:"7",r:"4"}),a.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),a.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),p.members," Members"]})]}),a.jsx(K2,{onClick:()=>j(p.id),disabled:m.has(p.id),children:m.has(p.id)?"Joined":"Join Now"})]})]},p.id))}),x&&a.jsx(As,{isOpen:x,onClose:()=>y(!1),title:"Join the Club!",message:"Sign in or register to join clubs and access courts"})]})},Df="/my-pickleball-app/vite.svg",tv=g.div`
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
`,nv=g.div`
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
`,rv=g.div`
  text-align: center;
  margin-bottom: 32px;
`,iv=g.div`
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
`,ov=g.h1`
  color: #234255;
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 8px;
  text-align: center;
`,lv=g.p`
  color: #64748b;
  font-size: 15px;
  margin: 0 0 32px;
  text-align: center;
`,av=g.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,_c=g.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Lc=g.label`
  color: #475569;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,sv=g.div`
  position: relative;
`,Nc=g.input`
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

  ${e=>e.$hasError&&`
    border-color: #ef4444;
    &:focus {
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
  `}
`,uv=g.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  
  &:hover {
    color: #475569;
  }
`,cv=g.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: -8px;
`,dv=g.input`
  width: 16px;
  height: 16px;
  accent-color: #29ba9b;
`,pv=g.label`
  color: #475569;
  font-size: 14px;
  cursor: pointer;
`,fv=g.a`
  color: #29ba9b;
  font-size: 14px;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`,hv=g.button`
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

  ${e=>e.$loading&&`
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
`,mv=g.div`
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
`,gv=g.div`
  display: flex;
  gap: 16px;
`,Rc=g.button`
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
`,Tl=g.div`
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
`,xv=g.p`
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
`,vv=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),a.jsx("path",{d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}),yv=()=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"})}),Il=()=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),wv=()=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"})}),kv=()=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),Sv=()=>{const e=ai(),[t,n]=k.useState({email:"",password:""}),[r,i]=k.useState(!1),[o,l]=k.useState(!1),[s,u]=k.useState({}),[d,m]=k.useState(!1),h=()=>{const v={};return t.email?/\S+@\S+\.\S+/.test(t.email)||(v.email="Please enter a valid email"):v.email="Email is required",t.password?t.password.length<6&&(v.password="Password must be at least 6 characters"):v.password="Password is required",u(v),Object.keys(v).length===0},x=v=>{const{name:j,value:p}=v.target;n(c=>({...c,[j]:p})),s[j]&&u(c=>({...c,[j]:""}))},y=async v=>{if(v.preventDefault(),!!h()){m(!0);try{await new Promise(j=>setTimeout(j,1500)),e("/")}catch(j){u(p=>({...p,submit:j.message||"Failed to sign in. Please try again."}))}finally{m(!1)}}},S=async v=>{try{console.log(`Signing in with ${v}`)}catch{u(p=>({...p,submit:`Failed to sign in with ${v}. Please try again.`}))}};return a.jsx(tv,{children:a.jsxs(nv,{children:[a.jsxs(rv,{children:[a.jsx(iv,{children:a.jsx("img",{src:Df,alt:"Vite Logo"})}),a.jsx(ov,{children:"Welcome Back"}),a.jsx(lv,{children:"Sign in to Philippine Pickleball League"})]}),a.jsxs(av,{onSubmit:y,children:[a.jsxs(_c,{children:[a.jsx(Lc,{htmlFor:"email",children:"Email"}),a.jsx(Nc,{type:"email",id:"email",name:"email",placeholder:"Enter your email",value:t.email,onChange:x,required:!0,autoComplete:"email",$hasError:!!s.email}),s.email&&a.jsxs(Tl,{children:[a.jsx(Il,{}),s.email]})]}),a.jsxs(_c,{children:[a.jsxs(Lc,{htmlFor:"password",children:["Password",a.jsx(fv,{href:"/forgot-password",children:"Forgot password?"})]}),a.jsxs(sv,{children:[a.jsx(Nc,{type:r?"text":"password",id:"password",name:"password",placeholder:"Enter your password",value:t.password,onChange:x,required:!0,autoComplete:"current-password",$hasError:!!s.password}),a.jsx(uv,{type:"button",onClick:()=>i(!r),"aria-label":r?"Hide password":"Show password",children:r?a.jsx(yv,{}):a.jsx(vv,{})})]}),s.password&&a.jsxs(Tl,{children:[a.jsx(Il,{}),s.password]})]}),a.jsxs(cv,{children:[a.jsx(dv,{type:"checkbox",id:"rememberMe",checked:o,onChange:v=>l(v.target.checked)}),a.jsx(pv,{htmlFor:"rememberMe",children:"Remember me"})]}),a.jsx(hv,{type:"submit",disabled:d,$loading:d,children:d?"Signing in...":"Sign in"}),s.submit&&a.jsxs(Tl,{children:[a.jsx(Il,{}),s.submit]})]}),a.jsx(mv,{children:a.jsx("span",{children:"or continue with"})}),a.jsxs(gv,{children:[a.jsxs(Rc,{onClick:()=>S("Google"),children:[a.jsx(wv,{}),"Google"]}),a.jsxs(Rc,{onClick:()=>S("Facebook"),children:[a.jsx(kv,{}),"Facebook"]})]}),a.jsxs(xv,{children:["Don't have an account?",a.jsx("a",{href:"/register",children:"Create one"})]})]})})},jv=g.div`
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
`,Cv=g.div`
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
`,bv=g.div`
  text-align: center;
  margin-bottom: 32px;
`,Ev=g.div`
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
`,Pv=g.h1`
  color: #234255;
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 8px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
    margin: 0 0 6px;
  }
`,zv=g.p`
  color: #64748b;
  font-size: 15px;
  margin: 0 0 32px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
    margin: 0 0 24px;
  }
`,$v=g.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`,Cn=g.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,bn=g.label`
  color: #475569;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Tc=g.div`
  position: relative;
`,En=g.input`
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

  ${e=>e.$hasError&&`
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

  ${e=>e.$hasError&&`
    border-color: #ef4444;
    &:focus {
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
  `}
`;const Ic=g.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  
  &:hover {
    color: #475569;
  }
`,_v=g.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 4px;
`,xr=g.span`
  color: ${e=>e.$met?"#10b981":"#94a3b8"};
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    width: 14px;
    height: 14px;
  }
`,Lv=g.button`
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

  ${e=>e.$loading&&`
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
`,Jt=g.div`
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
`,Nv=g.p`
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
`,Rv=g.div`
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
`,Tv=g.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`,Mc=g.button`
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
`,Oc=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),a.jsx("path",{d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}),Dc=()=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"})}),vr=()=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M5 13l4 4L19 7"})}),qt=()=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),Iv=()=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"})}),Mv=()=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),Ov=()=>{const e=ai(),[t,n]=k.useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:"",birthDate:""}),[r,i]=k.useState(!1),[o,l]=k.useState(!1),[s,u]=k.useState({}),[d,m]=k.useState(!1),h={length:t.password.length>=8,uppercase:/[A-Z]/.test(t.password),lowercase:/[a-z]/.test(t.password),number:/[0-9]/.test(t.password),special:/[!@#$%^&*]/.test(t.password)},x=()=>{const j={};return t.firstName.trim()||(j.firstName="First name is required"),t.lastName.trim()||(j.lastName="Last name is required"),t.email?/\S+@\S+\.\S+/.test(t.email)||(j.email="Please enter a valid email"):j.email="Email is required",t.password?Object.values(h).every(Boolean)||(j.password="Password does not meet requirements"):j.password="Password is required",t.confirmPassword?t.password!==t.confirmPassword&&(j.confirmPassword="Passwords do not match"):j.confirmPassword="Please confirm your password",t.birthDate?new Date().getFullYear()-new Date(t.birthDate).getFullYear()<13&&(j.birthDate="You must be at least 13 years old"):j.birthDate="Birth date is required",u(j),Object.keys(j).length===0},y=j=>{const{name:p,value:c}=j.target;n(f=>({...f,[p]:c})),s[p]&&u(f=>({...f,[p]:""}))},S=async j=>{if(j.preventDefault(),!!x()){m(!0);try{await new Promise(p=>setTimeout(p,1500)),e("/")}catch(p){u(c=>({...c,submit:p.message||"Failed to create account. Please try again."}))}finally{m(!1)}}},v=async j=>{try{console.log(`Signing up with ${j}`)}catch{u(c=>({...c,submit:`Failed to sign up with ${j}. Please try again.`}))}};return a.jsx(jv,{children:a.jsxs(Cv,{children:[a.jsxs(bv,{children:[a.jsx(Ev,{children:a.jsx("img",{src:Df,alt:"Vite Logo"})}),a.jsx(Pv,{children:"Create Account"}),a.jsx(zv,{children:"Join the Philippine Pickleball League"})]}),a.jsxs($v,{onSubmit:S,children:[a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:"16px"},children:[a.jsxs(Cn,{children:[a.jsx(bn,{htmlFor:"firstName",children:"First Name"}),a.jsx(En,{type:"text",id:"firstName",name:"firstName",placeholder:"Enter first name",value:t.firstName,onChange:y,required:!0,$hasError:!!s.firstName}),s.firstName&&a.jsxs(Jt,{children:[a.jsx(qt,{}),s.firstName]})]}),a.jsxs(Cn,{children:[a.jsx(bn,{htmlFor:"lastName",children:"Last Name"}),a.jsx(En,{type:"text",id:"lastName",name:"lastName",placeholder:"Enter last name",value:t.lastName,onChange:y,required:!0,$hasError:!!s.lastName}),s.lastName&&a.jsxs(Jt,{children:[a.jsx(qt,{}),s.lastName]})]})]}),a.jsxs(Cn,{children:[a.jsx(bn,{htmlFor:"email",children:"Email"}),a.jsx(En,{type:"email",id:"email",name:"email",placeholder:"Enter your email",value:t.email,onChange:y,required:!0,autoComplete:"email",$hasError:!!s.email}),s.email&&a.jsxs(Jt,{children:[a.jsx(qt,{}),s.email]})]}),a.jsxs(Cn,{children:[a.jsx(bn,{htmlFor:"birthDate",children:"Birth Date"}),a.jsx(En,{type:"date",id:"birthDate",name:"birthDate",value:t.birthDate,onChange:y,required:!0,$hasError:!!s.birthDate}),s.birthDate&&a.jsxs(Jt,{children:[a.jsx(qt,{}),s.birthDate]})]}),a.jsxs(Cn,{children:[a.jsx(bn,{htmlFor:"password",children:"Password"}),a.jsxs(Tc,{children:[a.jsx(En,{type:r?"text":"password",id:"password",name:"password",placeholder:"Create a password",value:t.password,onChange:y,required:!0,$hasError:!!s.password}),a.jsx(Ic,{type:"button",onClick:()=>i(!r),"aria-label":r?"Hide password":"Show password",children:r?a.jsx(Dc,{}):a.jsx(Oc,{})})]}),a.jsxs(_v,{children:[a.jsxs(xr,{$met:h.length,children:[h.length?a.jsx(vr,{}):"•"," At least 8 characters"]}),a.jsxs(xr,{$met:h.uppercase,children:[h.uppercase?a.jsx(vr,{}):"•"," One uppercase letter"]}),a.jsxs(xr,{$met:h.lowercase,children:[h.lowercase?a.jsx(vr,{}):"•"," One lowercase letter"]}),a.jsxs(xr,{$met:h.number,children:[h.number?a.jsx(vr,{}):"•"," One number"]}),a.jsxs(xr,{$met:h.special,children:[h.special?a.jsx(vr,{}):"•"," One special character"]})]}),s.password&&a.jsxs(Jt,{children:[a.jsx(qt,{}),s.password]})]}),a.jsxs(Cn,{children:[a.jsx(bn,{htmlFor:"confirmPassword",children:"Confirm Password"}),a.jsxs(Tc,{children:[a.jsx(En,{type:o?"text":"password",id:"confirmPassword",name:"confirmPassword",placeholder:"Confirm your password",value:t.confirmPassword,onChange:y,required:!0,$hasError:!!s.confirmPassword}),a.jsx(Ic,{type:"button",onClick:()=>l(!o),"aria-label":o?"Hide password":"Show password",children:o?a.jsx(Dc,{}):a.jsx(Oc,{})})]}),s.confirmPassword&&a.jsxs(Jt,{children:[a.jsx(qt,{}),s.confirmPassword]})]}),a.jsx(Lv,{type:"submit",disabled:d,$loading:d,children:d?"Creating account...":"Create account"}),s.submit&&a.jsxs(Jt,{children:[a.jsx(qt,{}),s.submit]})]}),a.jsx(Rv,{children:a.jsx("span",{children:"or sign up with"})}),a.jsxs(Tv,{children:[a.jsxs(Mc,{onClick:()=>v("Google"),children:[a.jsx(Iv,{}),"Google"]}),a.jsxs(Mc,{onClick:()=>v("Facebook"),children:[a.jsx(Mv,{}),"Facebook"]})]}),a.jsxs(Nv,{children:["Already have an account?",a.jsx("a",{href:"/signin",children:"Sign in"})]})]})})};function Dv(){return a.jsxs("div",{className:"app",children:[a.jsx($1,{}),a.jsxs(ig,{children:[a.jsx(bt,{path:"/",element:a.jsx(J1,{})}),a.jsx(bt,{path:"/forum",element:a.jsx(Ix,{})}),a.jsx(bt,{path:"/tournament",element:a.jsx(a2,{})}),a.jsx(bt,{path:"/ranks",element:a.jsx(D2,{})}),a.jsx(bt,{path:"/clubs-courts",element:a.jsx(ev,{})}),a.jsx(bt,{path:"/signin",element:a.jsx(Sv,{})}),a.jsx(bt,{path:"/register",element:a.jsx(Ov,{})})]}),a.jsx(M1,{})]})}Ml.createRoot(document.getElementById("root")).render(a.jsx(dn.StrictMode,{children:a.jsx(dg,{children:a.jsx(Dv,{})})}));
